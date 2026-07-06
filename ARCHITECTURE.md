# IP-XACT Viewer — Architecture

This document describes how the application works end-to-end: data flow, layout engine, UI layers, and state.

## System overview

```mermaid
flowchart TB
  subgraph UI["Browser UI"]
    Import["ModelImportPanel"]
    Canvas["FlowCanvas / React Flow"]
    Inspector["InspectorPanel"]
    Search["SearchBar"]
  end

  subgraph State["Zustand stores"]
    Arch["architectureStore"]
    Graph["graphStore"]
    Sel["selectionStore"]
    Settings["settingsStore"]
  end

  subgraph Pipeline["Layout pipeline"]
    Parse["parseArchitectureModel"]
    Preprocess["preprocessArchitecture (WASM)"]
    Flow["modelToFlow → layoutWithLayers"]
  end

  Import --> Parse
  Parse --> Arch
  Arch --> Preprocess
  Preprocess --> Flow
  Flow --> Graph
  Graph --> Canvas
  Sel --> Inspector
  Arch --> Inspector
  Search --> Sel
  Settings --> Canvas
```

## What the layout engine does (and does not do)

| Does | Does not |
|------|----------|
| Assign each component to a **semantic layer** (CPU, bus, memory, …) | Use ELK.js or Dagre for global positioning |
| Place layers **left → right** in fixed order (0 → 6) | Auto-discover topology from edges |
| Spread dense layers into **multiple sub-columns** | Optimize for 1000+ node graphs |
| Render buses as **vertical channel nodes** | Change layer order based on connections |

ELK code exists under `src/lib/elk/` but is **not wired** into the active pipeline. All positions come from `layoutWithLayers()`.

## Data flow

```mermaid
sequenceDiagram
  participant User
  participant Import as ModelImportPanel
  participant Parse as validateArchitectureModel
  participant Store as architectureStore
  participant Hook as useGraphLayout
  participant WASM as preprocessArchitecture
  participant Flow as modelToFlow
  participant RF as React Flow

  User->>Import: Paste / upload JSON
  Import->>Parse: parseArchitectureModel(text)
  Parse->>Store: loadModel(model)
  Store->>Store: localStorage.setItem
  Hook->>WASM: preprocessArchitecture(model)
  WASM-->>Hook: layer metadata per component
  Hook->>Flow: modelToFlow(model, expanded, preprocessed)
  Flow->>Flow: layoutWithLayers()
  Flow-->>Hook: nodes + edges
  Hook->>RF: setNodes / setEdges
```

## Layout pipeline (core)

```mermaid
flowchart LR
  subgraph Input
    JSON["ArchitectureModel"]
  end

  subgraph LayerAssign["1. Layer assignment"]
    Infer["inferLayoutLayer()"]
    WASMMeta["WASM metadata (optional override)"]
  end

  subgraph Split["2. Split by kind"]
    Bus["type === bus → BusChannelNode"]
    Comp["everything else → ArchitectureNode"]
  end

  subgraph Place["3. layoutWithLayers()"]
    Order["Sort layers 0…6"]
    BusFirst["Buses at layer cursor"]
    Grid["Components in N×M grid"]
    Advance["cursorX += block width + gap"]
    Center["centerLayoutHorizontally()"]
  end

  JSON --> Infer
  WASMMeta --> Infer
  Infer --> Split
  Split --> Order
  Order --> BusFirst
  BusFirst --> Grid
  Grid --> Advance
  Advance --> Center
```

## Semantic layers (columns)

Components are placed in **layer order**, not by graph analysis.

```mermaid
flowchart LR
  L0["Layer 0<br/>CPU"]
  L1["Layer 1<br/>Main bus"]
  L2["Layer 2<br/>Memory / DMA"]
  L3["Layer 3<br/>Bridge / custom"]
  L4["Layer 4<br/>Peripherals"]
  L5["Layer 5<br/>Interrupt ctrl"]
  L6["Layer 6<br/>Clock / debug"]

  L0 --> L1 --> L2 --> L3 --> L4 --> L5 --> L6
```

| Layer | Contents | Node shape |
|-------|----------|------------|
| 0 | CPU | Standard block |
| 1 | AXI / main interconnect | Vertical bus channel |
| 2 | SRAM, flash, DMA | Standard block |
| 3 | APB bridge, custom IP | Bridge = bus channel |
| 4 | UART, SPI, GPIO, … | Standard block |
| 5 | NVIC, GIC, … | Standard block |
| 6 | Clock, JTAG, pads | Standard block |

**Source files:**
- `src/lib/transform/layerAssignment.ts` — type/name → layer index
- `src/lib/transform/modelToFlow.ts` — `layoutWithLayers()`
- `src/lib/transform/layerGridLayout.ts` — sub-column grid math
- `src/components/graph/nodes/BusChannelNode.tsx` — bus rendering

## Intra-layer grid (fixes vertical elongation)

When a layer has many components (e.g. 39 peripherals), a **single vertical stack** becomes unusably tall (~6 000 px). The grid spreads nodes into multiple sub-columns while keeping the layer block anchored.

```mermaid
flowchart TB
  subgraph Before["Before: single column (39 peripherals)"]
    direction TB
    P1["Peripheral_0"]
    P2["Peripheral_1"]
    Pdots["…"]
    P39["Peripheral_38"]
    P1 --> P2 --> Pdots --> P39
  end

  subgraph After["After: 5-column grid (39 peripherals)"]
    direction LR
    subgraph Col1["col 1"]
      A1["P0"] --- A2["P5"]
    end
    subgraph Col2["col 2"]
      B1["P1"] --- B2["P6"]
    end
    subgraph Col3["col 3"]
      C1["P2"]
    end
    subgraph Col4["col 4"]
      D1["…"]
    end
    subgraph Col5["col 5"]
      E1["P38"]
    end
  end
```

### Column count rules (`layerGridLayout.ts`)

| Nodes in layer | Sub-columns |
|----------------|-------------|
| ≤ 6 | 1 |
| 7–14 | 2 |
| 15–28 | 3 |
| 29–48 | 4 |
| 49–72 | 5 |
| 73+ | 6 (max) |

### Horizontal placement

Layers are placed **sequentially** left to right:

1. Buses at current `cursorX` (narrow vertical bar)
2. Component grid at `cursorX` (width = columns × 280 px)
3. `cursorX` advances by block width + 140 px gap
4. Entire diagram centered with `centerLayoutHorizontally()`

This preserves SoC reading order (CPU → bus → memory → …) while growing **horizontally** instead of vertically when a tier is dense.

## Example: 100-component graph

Typical distribution in `example/100components.json`:

| Type | Count | Layer |
|------|-------|-------|
| peripheral | 39 | 4 → **5 columns × 8 rows** |
| custom | 21 | 3 → 4 × 6 |
| interface | 12 | 6 → 2 × 6 |
| memory | 7 | 2 |
| debug | 6 | 6 |
| dma | 5 | 2 |
| interruptController | 4 | 5 |
| bus | 3 | 1 / 3 |
| cpu | 2 | 0 |
| clockReset | 1 | 6 |

Without the grid, layer 4 alone would be 39 × 160 px ≈ **6 240 px tall**. With 5 columns it is 8 × 160 px ≈ **1 280 px tall**.

## State management

```mermaid
flowchart LR
  subgraph architectureStore
    model["model"]
    lookups["componentById, connection maps"]
    persist["localStorage ip-xact-last-model"]
  end

  subgraph graphStore
    nodes["nodes / edges"]
    expand["expandedClusterIds"]
    loading["isLayoutLoading"]
  end

  subgraph selectionStore
    selected["selectedNodeId(s)"]
    highlight["highlightedNode/EdgeIds"]
    query["searchQuery"]
  end

  subgraph settingsStore
    theme["theme"]
    thresholds["nonInteractiveThreshold"]
  end
```

## UI component map

```mermaid
flowchart TB
  App["App.tsx"]
  App --> FlowCanvas
  App --> InspectorPanel
  App --> SearchBar
  App --> ModelImportPanel
  App --> ThemeToggle

  FlowCanvas --> ArchitectureNode
  FlowCanvas --> BusChannelNode
  FlowCanvas --> ArchitectureEdge
  FlowCanvas --> MiniMapPanel
  FlowCanvas --> CanvasOverlay["CanvasOverlay (2000+ fallback)"]
```

## Persistence

```mermaid
sequenceDiagram
  participant User
  participant Store as architectureStore
  participant LS as localStorage

  User->>Store: loadModel(model)
  Store->>LS: set ip-xact-last-model
  Note over User,LS: Next visit
  User->>App: Open app
  App->>LS: loadPersistedModel()
  LS-->>App: ArchitectureModel
  App->>Store: loadModel(persisted)
```

## Clustering (large graphs only)

Clustering activates when `components.length >= 1001` (`hierarchyBuilder.ts`). Below that threshold every component is shown individually — the normal case for this viewer.

## Intended scope

```mermaid
quadrantChart
  title Design target
  x-axis Low complexity --> High complexity
  y-axis Few components --> Many components
  quadrant-1 Future / out of scope
  quadrant-2 Sweet spot
  quadrant-3 Reference designs
  quadrant-4 Not supported

  Sample SoC: [0.2, 0.15]
  100-component demo: [0.5, 0.45]
  500-component stress: [0.7, 0.65]
  1000+ graphs: [0.9, 0.95]
```

**Sweet spot:** ~10–150 components, correct component types, JSON import.

## Roadmap

- IP-XACT XML import (planned)
- In-app editing (planned)

## Key file index

| Path | Role |
|------|------|
| `src/lib/validateArchitectureModel.ts` | JSON parsing & normalization |
| `src/lib/transform/layerAssignment.ts` | Semantic layer rules |
| `src/lib/transform/layerGridLayout.ts` | Sub-column grid & centering |
| `src/lib/transform/modelToFlow.ts` | Nodes, edges, `layoutWithLayers()` |
| `src/hooks/useGraphLayout.ts` | Orchestrates preprocess → modelToFlow |
| `src/lib/preprocess/` | WASM wrapper for metadata |
| `src/store/architectureStore.ts` | Model + localStorage |
| `src/components/graph/FlowCanvas.tsx` | React Flow host |
