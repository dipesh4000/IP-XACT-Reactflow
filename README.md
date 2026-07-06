# IP-XACT Viewer

A React Flow-based hardware architecture explorer for IP-XACT-like SoC (System-on-Chip) models. Visualizes component hierarchies, port connections, and register maps with custom node types, ELK-powered layout, and WASM-accelerated preprocessing.

## What This Project Does

This is an **interactive graph visualizer** for hardware architecture data. You provide a JSON file describing:
- **Components** (CPUs, buses, memory, peripherals, etc.)
- **Connections** between those components

And it renders an interactive, zoomable, searchable graph with:
- Automatic layout using ELK.js (layered graph algorithm)
- Clustering of similar components
- Inspector panel for viewing component details
- Fuzzy search across all components
- MiniMap for navigation
- Light/Dark theme with cream background
- Export to PNG/SVG with dark background
- Canvas renderer for 2000+ nodes
- WASM-accelerated preprocessing (Rust)

## Input Data Structure

The app accepts JSON with two top-level arrays: `components` and `connections`.

### Full Schema (Strict Format)

```typescript
interface ArchitectureModel {
  components: Component[];
  connections: Connection[];
}

interface Component {
  id: string;           // Unique identifier
  name: string;         // Display name
  type: ComponentType;  // Classification
  ports: Port[];        // I/O ports
  registers: Register[];// Memory-mapped registers
}

interface Port {
  id: string;
  name: string;
  direction: "in" | "out" | "inout";
  width?: number;       // Optional bit width
}

interface Register {
  id: string;
  name: string;
  address?: string;     // Optional memory address
  description?: string;
}

interface Connection {
  id: string;
  sourceComponentId: string;
  sourcePortId: string;
  targetComponentId: string;
  targetPortId: string;
}
```

### Simplified Format (Object-Style Components)

The validator also accepts components as an object (key = component name):

```json
{
  "components": {
    "ARM Cortex-M4": {
      "type": "CPU",
      "ports": ["clk", "rst", "irq", "haddr", "hwrite", "hwdata"],
      "registers": ["PC", "SP", "LR"]
    },
    "AXI Interconnect": {
      "type": "Bus",
      "ports": ["clk", "awaddr", "awvalid", "rdata"],
      "registers": []
    }
  },
  "connections": [
    { "source": "ARM Cortex-M4", "target": "AXI Interconnect" }
  ]
}
```

### Connection Shortcuts

Connections can use shorthand fields:
- `source` + `target` (component names) instead of `sourceComponentId` + `targetComponentId`
- Port IDs are optional — defaults to first port of each component

### Component Types

| Type | Auto-detected from names containing |
|------|-------------------------------------|
| `cpu` | cpu, processor, riscv, arm, mips, core |
| `bus` | axi, ahb, apb, wishbone, bus, fabric, crossbar |
| `memory` | sram, dram, rom, flash, memory, ram, eeprom |
| `peripheral` | gpio, uart, spi, i2c, timer, pwm, adc, dac, can, eth, usb |
| `interface` | pad, interface, io, padframe |
| `clockReset` | clock, reset, clk, rst, pll, oscillator |
| `dma` | dma |
| `interruptController` | interrupt, intc, vic, gic, nvic |
| `debug` | debug, jtag, tap, dbg |
| `custom` | (fallback) |

---

## Architecture

### Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 + TypeScript | UI framework |
| React Flow v11 | Graph rendering |
| ELK.js | Layered graph layout algorithm |
| Rust + WASM | Preprocessing acceleration |
| Zustand | State management |
| Tailwind CSS | Styling |
| Vite | Build tool |
| Fuse.js | Fuzzy search |
| html-to-image | PNG/SVG export |

### System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          User Interface                             │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  SearchBar   │  │ ThemeToggle  │  │ ExportButton │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────┐  ┌─────────────────────┐  │
│  │                                     │  │                     │  │
│  │          FlowCanvas                 │  │   InspectorPanel    │  │
│  │                                     │  │                     │  │
│  │  ┌─────────────────────────────┐   │  │  ┌───────────────┐  │  │
│  │  │     ReactFlow / Canvas      │   │  │  │  Component    │  │  │
│  │  │                             │   │  │  │  Details      │  │  │
│  │  │  ┌─────┐    ┌─────┐        │   │  │  │  - Ports      │  │  │
│  │  │  │Node │────│Node │        │   │  │  │  - Registers  │  │  │
│  │  │  └─────┘    └─────┘        │   │  │  │  - Incoming   │  │  │
│  │  │       │          │         │   │  │  │  - Outgoing   │  │  │
│  │  │       └────┬─────┘         │   │  │  └───────────────┘  │  │
│  │  │            │               │   │  │                     │  │
│  │  │         ┌──┴──┐            │   │  └─────────────────────┘  │
│  │  │         │Bus  │            │   │                             │
│  │  │         └─────┘            │   │                             │
│  │  └─────────────────────────────┘   │                             │
│  │                                     │                             │
│  └─────────────────────────────────────┘                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        State Management                             │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │ architectureStore│  │    graphStore    │  │ selectionStore   │  │
│  │                  │  │                  │  │                  │  │
│  │ - model          │  │ - nodes          │  │ - selectedNodeId │  │
│  │ - componentById  │  │ - edges          │  │ - searchQuery    │  │
│  │ - connections    │  │ - expandedIds    │  │ - highlightedIds │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                     │
│  ┌──────────────────┐                                              │
│  │ settingsStore    │                                              │
│  │                  │                                              │
│  │ - theme          │                                              │
│  │ - thresholds     │                                              │
│  └──────────────────┘                                              │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Processing Pipeline                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    Input JSON                                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              parseArchitectureModel()                        │   │
│  │              (validateArchitectureModel.ts)                  │   │
│  │                                                              │   │
│  │  - Validates JSON structure                                  │   │
│  │  - Normalizes component types                                │   │
│  │  - Assigns default ports/registers                           │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              WASM Preprocessing (Rust)                       │   │
│  │              (wasm-preprocess/src/lib.rs)                    │   │
│  │                                                              │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │   │
│  │  │ Classifier  │  │  Connection │  │   Layer     │         │   │
│  │  │             │  │  Analyzer   │  │  Assigner   │         │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘         │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              Hierarchy Builder                               │   │
│  │              (hierarchyBuilder.ts)                           │   │
│  │                                                              │   │
│  │  - Groups components by type                                 │   │
│  │  - Creates nested cluster tree                               │   │
│  │  - Adaptive thresholds based on input size                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              modelToFlow()                                   │   │
│  │              (modelToFlow.ts)                                │   │
│  │                                                              │   │
│  │  - Walks hierarchy tree                                      │   │
│  │  - Creates ReactFlow nodes/edges                             │   │
│  │  - Handles expand/collapse                                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              Layout Engine                                   │   │
│  │                                                              │   │
│  │  ┌──────────────────┐  ┌──────────────────┐                 │   │
│  │  │   ELK Layout     │  │   Grid Layout    │                 │   │
│  │  │   (< 1000 nodes) │  │   (≥ 1000 nodes) │                 │   │
│  │  │                  │  │                  │                 │   │
│  │  │  - layered       │  │  - Fast fallback │                 │   │
│  │  │  - stress        │  │  - No layout     │                 │   │
│  │  │  - mrtree        │  │    computation   │                 │   │
│  │  └──────────────────┘  └──────────────────┘                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              Rendering                                       │   │
│  │                                                              │   │
│  │  ┌──────────────────┐  ┌──────────────────┐                 │   │
│  │  │   ReactFlow      │  │   Canvas         │                 │   │
│  │  │   (< 2000 nodes) │  │   (≥ 2000 nodes) │                 │   │
│  │  │                  │  │                  │                 │   │
│  │  │  - DOM rendering │  │  - Canvas API    │                 │   │
│  │  │  - Interactive   │  │  - Viewport      │                 │   │
│  │  │  - Custom nodes  │  │    culling       │                 │   │
│  │  └──────────────────┘  └──────────────────┘                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Project Structure

```
reactflow/
├── src/
│   ├── components/
│   │   ├── graph/
│   │   │   ├── FlowCanvas.tsx      # Main ReactFlow wrapper
│   │   │   ├── CanvasOverlay.tsx   # Canvas renderer for large graphs
│   │   │   ├── BackgroundGrid.tsx  # Canvas background (theme-aware)
│   │   │   ├── MiniMapPanel.tsx    # Navigation minimap
│   │   │   ├── LoadingSkeleton.tsx # Loading state
│   │   │   ├── edges/
│   │   │   │   ├── ArchitectureEdge.tsx  # Custom edge with arrows
│   │   │   │   └── edgeTypeRegistry.ts
│   │   │   └── nodes/
│   │   │       ├── ArchitectureNode.tsx  # Component node
│   │   │       ├── BusChannelNode.tsx    # Bus/channel node
│   │   │       ├── NodeHeader.tsx        # Node title bar
│   │   │       ├── NodePortsList.tsx     # Port indicators
│   │   │       ├── NodeRegistersList.tsx # Register indicators
│   │   │       └── nodeTypeRegistry.ts
│   │   ├── import/
│   │   │   └── ModelImportPanel.tsx  # JSON upload/paste UI
│   │   ├── inspector/
│   │   │   ├── InspectorPanel.tsx    # Component details sidebar
│   │   │   ├── ConnectionList.tsx    # Connection display
│   │   │   └── InspectorSection.tsx  # Collapsible section
│   │   ├── search/
│   │   │   ├── SearchBar.tsx         # Search input
│   │   │   └── SearchResultsList.tsx # Results dropdown
│   │   └── ui/
│   │       ├── Panel.tsx             # Container component
│   │       ├── Badge.tsx             # Label component
│   │       ├── IconButton.tsx        # Icon button
│   │       └── ThemeToggle.tsx       # Light/dark toggle
│   ├── hooks/
│   │   ├── useElkLayout.ts           # Main layout orchestrator
│   │   ├── useFitViewOnSelect.ts     # Zoom to selected node
│   │   ├── useNodeHighlighting.ts    # Highlight on selection
│   │   └── useSearch.ts              # Fuzzy search logic
│   ├── lib/
│   │   ├── elk/
│   │   │   ├── elkAdapter.ts         # Flow ↔ ELK conversion
│   │   │   ├── layoutWorker.ts       # ELK in web worker
│   │   │   ├── gridLayout.ts         # Fallback grid layout
│   │   │   └── layoutCache.ts        # Layout memoization
│   │   ├── preprocess/
│   │   │   ├── index.ts              # Preprocessing orchestrator
│   │   │   ├── classifier.ts         # Component type detection
│   │   │   ├── groupDetector.ts      # Semantic grouping
│   │   │   ├── connectionAnalyzer.ts # Connection classification
│   │   │   ├── portAssigner.ts       # Port side assignment
│   │   │   ├── edgeOptimizer.ts      # Edge routing hints
│   │   │   ├── preprocessWorker.ts   # Web worker (WASM)
│   │   │   └── types.ts              # Preprocessing types
│   │   ├── clustering/
│   │   │   └── hierarchyBuilder.ts   # Component hierarchy tree
│   │   ├── render/
│   │   │   └── canvasRenderer.ts     # Canvas drawing logic
│   │   ├── wasm/
│   │   │   ├── index.ts              # WASM wrapper
│   │   │   ├── wasm_preprocess.js    # Generated WASM bindings
│   │   │   └── wasm_preprocess_bg.wasm # Rust WASM binary
│   │   ├── search/
│   │   │   └── fuseConfig.ts         # Fuse.js configuration
│   │   ├── transform/
│   │   │   ├── modelToFlow.ts        # Architecture → ReactFlow nodes/edges
│   │   │   └── colorMap.ts           # Component type → color
│   │   └── export.ts                 # PNG/SVG export
│   ├── store/
│   │   ├── architectureStore.ts      # Raw model + lookups
│   │   ├── graphStore.ts             # ReactFlow nodes/edges state
│   │   ├── selectionStore.ts         # Selected node + search
│   │   └── settingsStore.ts          # App settings (thresholds, theme)
│   ├── types/
│   │   ├── architecture.ts           # Input data types
│   │   ├── graph.ts                  # ReactFlow node/edge types
│   │   └── index.ts                  # Re-exports
│   ├── styles/
│   │   ├── index.css                 # Global styles + overview mode
│   │   └── tokens.css                # CSS variables (light/dark)
│   └── data/
│       └── sample-architecture.json  # Built-in example
├── wasm-preprocess/                   # Rust WASM project
│   ├── Cargo.toml
│   └── src/lib.rs                     # Preprocessing in Rust
└── Example/                           # Example JSON files
    ├── 100components.json
    ├── 500components.json
    ├── 1000components.json
    └── hardware_10k.json
```

### Data Flow

```
User imports JSON
       │
       ▼
parseArchitectureModel() validates & normalizes
       │
       ▼
WASM preprocessing (Rust):
  - classifyComponents()     → assigns type + layer
  - analyzeConnections()     → classifies connection types
  - assignLayers()           → determines horizontal position
       │
       ▼
buildHierarchy() creates cluster tree:
  - Groups by type (CPU, Bus, Memory, etc.)
  - Sub-groups by name prefix
  - Adaptive thresholds based on input size
       │
       ▼
modelToFlow() converts to ReactFlow nodes/edges:
  - Walks hierarchy tree
  - Expands/clusters based on thresholds
  - Creates ArchitectureFlowNode[] + ArchitectureFlowEdge[]
       │
       ▼
Layout applied:
  - < 1000 nodes: ELK layout via web worker
  - ≥ 1000 nodes: Grid layout (fast)
       │
       ▼
Rendering:
  - < 2000 nodes: ReactFlow (interactive DOM)
  - ≥ 2000 nodes: Canvas renderer (fast)
```

### Key Thresholds

| Threshold | Value | Behavior |
|-----------|-------|----------|
| **Cluster Disable** | Adaptive (0-60) | Below threshold, no clustering — all shown individually |
| **Expand Threshold** | 12 | Groups with >12 components become cluster nodes |
| **Large Graph** | 1000 | Above 1000 components, uses grid layout instead of ELK |
| **Canvas Mode** | 2000 | Above 2000 components, uses Canvas renderer |
| **Non-Interactive** | 5000 | Above 5000 components, disables node interaction |
| **Overview Zoom** | 0.32 | At zoom ≤ 0.32, hides labels (visual summary) |

### Layout Layers

Components are assigned to horizontal layers based on type:

| Layer | Component Types |
|-------|-----------------|
| 0 | CPU |
| 1 | Bus |
| 2 | Memory, DMA |
| 3 | Custom, APB Bridge |
| 4 | Peripheral |
| 5 | Interrupt Controller |
| 6 | Interface, Clock/Reset, Debug |

### ELK Layout Algorithms

The app automatically selects the best layout algorithm:

| Algorithm | When Used | Best For |
|-----------|-----------|----------|
| `stress` | ≤ 25 nodes, sparse, no buses | Organic, topology-revealing |
| `mrtree` | ≤ 150 nodes, tree-like | Clean hierarchy |
| `layered` | Default / bus-heavy | Hardware architectures |

### State Management (Zustand)

**architectureStore** — Raw model data
- `model: ArchitectureModel` — The loaded architecture
- `componentById` — Quick lookup map
- `incomingByComponentId` / `outgoingByComponentId` — Connection indices

**graphStore** — ReactFlow state
- `nodes` / `edges` — Current ReactFlow elements
- `expandedClusterIds` — Which clusters are expanded
- `isLayoutLoading` — Loading state

**selectionStore** — User interaction
- `selectedNodeId` — Currently selected component
- `searchQuery` — Current search text
- `searchResults` — Matching component IDs

**settingsStore** — Configuration
- `theme` — Light/Dark mode
- `nonInteractiveThreshold` — Node count to disable interaction

---

## Running

```bash
cd reactflow
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

Output in `dist/` folder.

## Example Input

See `Example/` folder for sample JSON files:
- `100components.json` — Small graph
- `500components.json` — Medium graph
- `1000components.json` — Large graph
- `hardware_10k.json` — Extra large (uses Canvas renderer)

## Interaction

### Mouse

- **Single click** — Select component, show in inspector
- **Ctrl/Cmd + click** — Add to multi-selection (for export)
- **Double-click** — Expand cluster or zoom to fit node
- **Pane click** — Deselect all
- **Drag** — Reposition nodes (disabled above 5000 nodes)
- **Scroll wheel** — Zoom in/out on the graph
- **Search bar** — Fuzzy search components

### Keyboard Shortcuts

Use `Ctrl` on Windows/Linux or `Cmd` on macOS.

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd` + `+` or `=` | Zoom in |
| `Ctrl/Cmd` + `-` | Zoom out |
| `Ctrl/Cmd` + `0` | Fit graph to view |
| `Ctrl/Cmd` + `O` | Open a new JSON file (clears current model if one is loaded) |
| `Ctrl/Cmd` + `E` | Export full graph as SVG |
| `Ctrl/Cmd` + `Shift` + `E` | Export selected nodes as SVG |
| `/` | Focus search bar |
| `Ctrl/Cmd` + `K` | Focus search bar |
| `Esc` | Clear search (when search bar is focused) |

Shortcuts are disabled while typing in an input or textarea (for example, the JSON import panel).

### Export

- **Export SVG** button — Download the full graph as SVG (dark background)
- **Export Selected** button — Download only the selected nodes as SVG

## Performance

| Input Size | Layout | Rendering | Interaction |
|------------|--------|-----------|-------------|
| < 100 | ELK | ReactFlow | Full |
| 100-1000 | ELK | ReactFlow | Full |
| 1000-2000 | Grid | ReactFlow | Full |
| 2000-5000 | Grid | Canvas | Full |
| 5000+ | Grid | Canvas | Read-only |

## WASM Preprocessing

The preprocessing pipeline is implemented in Rust and compiled to WASM for faster execution:

```bash
cd wasm-preprocess
wasm-pack build --target web --release
```

The WASM binary handles:
- Component classification (type detection)
- Connection analysis
- Layer assignment

This provides ~5-10x speedup over JavaScript for large graphs.
