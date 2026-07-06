import clsx from "clsx";
import { memo, type CSSProperties } from "react";
import { Handle, type NodeProps, Position } from "reactflow";
import {
  BUS_COMPACT_HEIGHT,
  BUS_COMPACT_WIDTH,
  BUS_CHANNEL_HEIGHT,
  BUS_PILLAR_WIDTH,
} from "../../../lib/constants";
import { nodeColorMap } from "../../../lib/transform/colorMap";
import type { ArchitectureNodeData, BusChannelNodeData } from "../../../types";
import { useNodeFocus } from "../../../hooks/useNodeFocus";
import { NodeDimOverlay } from "./NodeShell";

const handleClass =
  "!h-2.5 !w-2.5 !rounded-full !border-2 !border-white/30 !bg-white/75 hover:!border-white hover:!bg-white";

function BusChannelNodeComponent({ id, data }: NodeProps<ArchitectureNodeData>) {
  if (data.kind !== "busChannel") return null;

  const busData = data as BusChannelNodeData;
  const colors = nodeColorMap[busData.component.type];
  const { isSelected, isDimmed } = useNodeFocus(id);
  const isCompact = busData.display === "compact";
  const width = isCompact ? BUS_COMPACT_WIDTH : BUS_PILLAR_WIDTH;
  const height = isCompact ? BUS_COMPACT_HEIGHT : (busData.channelHeight ?? BUS_CHANNEL_HEIGHT);

  const shellClass = clsx(
    "bus-channel-node group relative cursor-pointer transition-[filter,transform] duration-200",
    isDimmed && "brightness-[0.42] saturate-[0.7]",
    !isDimmed && "hover:brightness-110"
  );

  if (isCompact) {
    return (
      <div className={shellClass} style={{ width, height }}>
        <Handle className={handleClass} id={`left:${id}`} type="target" position={Position.Left} style={{ top: "50%" }} />
        <Handle className={handleClass} id={`right:${id}`} type="source" position={Position.Right} style={{ top: "50%" }} />

        <div
          className={clsx(
            "relative flex h-full items-center gap-2.5 overflow-hidden rounded-lg border-2 px-3 shadow-node transition-all duration-150",
            isSelected ? "z-10 border-white ring-2 ring-white ring-offset-2 ring-offset-neutral-950" : "border-white/30"
          )}
          style={{
            background: `linear-gradient(135deg, ${colors.base} 0%, ${colors.border} 100%)`,
            boxShadow: isSelected ? `0 0 28px ${colors.glow}, 0 0 0 1px rgba(255,255,255,0.2)` : undefined,
          }}
        >
          <NodeDimOverlay dimmed={isDimmed} />
          <span className="relative z-[2] shrink-0 rounded-md border border-white/25 bg-white/20 px-2 py-0.5 text-[11px] font-black uppercase tracking-wide text-white">
            Bus
          </span>
          <span className="relative z-[2] min-w-0 truncate text-base font-semibold text-white">{busData.component.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={shellClass}
      style={
        {
          width,
          height,
          "--bus-glow": colors.glow,
        } as CSSProperties
      }
    >
      <Handle className={handleClass} id={`left:${id}`} type="target" position={Position.Left} style={{ top: "50%" }} />
      <Handle className={handleClass} id={`right:${id}`} type="source" position={Position.Right} style={{ top: "50%" }} />

      <div
        className={clsx(
          "absolute inset-0 rounded-md border-2 shadow-node transition-all duration-150",
          isSelected ? "z-10 border-white ring-2 ring-white ring-offset-2 ring-offset-neutral-950" : "border-white/35"
        )}
        style={{
          background: `linear-gradient(180deg, ${colors.base} 0%, ${colors.border} 100%)`,
          boxShadow: isSelected ? `0 0 28px ${colors.glow}, 0 0 0 1px rgba(255,255,255,0.2)` : undefined,
        }}
      >
        <NodeDimOverlay dimmed={isDimmed} />
        <div
          className="absolute inset-x-1 top-2 bottom-2 z-[2] flex items-center justify-center"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-sm font-bold tracking-wide text-white">{busData.component.name}</span>
        </div>
      </div>
    </div>
  );
}

export const BusChannelNode = memo(BusChannelNodeComponent);
