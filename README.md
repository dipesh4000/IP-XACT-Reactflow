# IP-XACT Viewer

A React Flow-based **SoC block-diagram viewer** for IP-XACT-like JSON models. Components are drawn in fixed semantic columns (CPU → bus → memory → peripherals → …) with bus interconnects as vertical channels.

**Designed for ~10–150 components.** Not intended for 1000+ node mega-graphs.

> Full technical documentation: **[ARCHITECTURE.md](./ARCHITECTURE.md)** (includes Mermaid diagrams for data flow, layout engine, and state).

## What it does

- Load JSON describing components and connections
- Render a **layered SoC diagram** (left-to-right pipeline layout)
- Spread dense layers into **multi-column grids** (avoids extreme vertical scroll)
- Inspector panel, fuzzy search, SVG export, light/dark theme
- Auto-restore last model from `localStorage`

**Planned:** IP-XACT XML import.

## Layout at a glance

The diagram structure is **deterministic**, not ELK-driven:

```
CPU → Bus channel → Memory/DMA → Bridge → Peripherals → IRQ ctrl → Clock/Debug
```

| Step | Module | What it does |
|------|--------|--------------|
| 1 | `layerAssignment.ts` | Maps type/name → layer 0–6 |
| 2 | `modelToFlow.ts` | Builds nodes/edges, calls `layoutWithLayers()` |
| 3 | `layerGridLayout.ts` | Splits crowded layers into sub-columns |
| 4 | `BusChannelNode.tsx` | Renders interconnects as vertical bars |

Positions are **never** recomputed by ELK. `useGraphLayout` runs preprocess + `modelToFlow`.

### Why diagrams were too tall

A previous change placed every node in a layer in **one vertical column**. For `100components.json` (39 peripherals in layer 4), that produced ~6 000 px of vertical scroll.

**Fix:** layers with >6 nodes use an N×M grid (up to 6 sub-columns), and layer blocks are placed sequentially left-to-right. Dense tiers grow **wider**, not taller.

## Input format

See [ARCHITECTURE.md](./ARCHITECTURE.md) or load `src/data/sample-architecture.json`.

Simplified example:

```json
{
  "components": {
    "ARM Cortex-M4": { "type": "CPU", "ports": ["clk", "haddr"], "registers": ["PC"] },
    "AXI Interconnect": { "type": "Bus", "ports": ["awaddr", "rdata"], "registers": [] }
  },
  "connections": [
    { "source": "ARM Cortex-M4", "target": "AXI Interconnect" }
  ]
}
```

### Component types → columns

| Type | Column |
|------|--------|
| `cpu` | 0 |
| `bus` (main) | 1 — vertical channel |
| `memory`, `dma` | 2 |
| `bus` with "bridge"/"apb" in name, `custom` | 3 |
| `peripheral` | 4 |
| `interruptController` | 5 |
| `interface`, `clockReset`, `debug` | 6 |

## Running

```bash
npm install
npm run dev
```

## Examples

| File | Size |
|------|------|
| `src/data/sample-architecture.json` | Reference SoC (~13 components) |
| `example/IP_XACT_JSON.json` | Minimal |
| `example/100components.json` | Demo scale (~100) |
| `example/500components.json` | Stress test (upper limit) |

## Interaction

- Click to select · Ctrl/Cmd+click to multi-select
- Double-click cluster or node to expand/zoom
- Search with `/` or `Ctrl/Cmd+K`
- Export SVG (full or selection)
- Drag-and-drop JSON onto the canvas
- **Open** / **New** toolbar buttons; last model restores on reload

## Tech stack

React 18 · TypeScript · React Flow 11 · Zustand · Tailwind · Vite · Fuse.js · Rust WASM (metadata only)

## Scope

| In scope | Out of scope |
|----------|--------------|
| Small/medium SoC block diagrams | 1000+ component graphs |
| JSON import | IP-XACT XML (yet) |
| Fixed layered layout | Free-form force-directed layout |
