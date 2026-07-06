import { memo } from "react";

import { Handle, type NodeProps, Position } from "reactflow";

import { nodeColorMap } from "../../../lib/transform/colorMap";

import type { ArchitectureNodeData } from "../../../types";

import { useNodeFocus } from "../../../hooks/useNodeFocus";

import { useGraphStore } from "../../../store/graphStore";

import { NodeHeader } from "./NodeHeader";

import { NodeShell } from "./NodeShell";



function ArchitectureNodeComponent({ id, data }: NodeProps<ArchitectureNodeData>) {

  if (data.kind === "busChannel") return null;



  const isCluster = data.kind === "cluster";

  const name = isCluster ? data.cluster.name : data.component.name;

  const type = isCluster ? data.cluster.type : data.component.type;

  const colors = nodeColorMap[type];

  const { isSelected, isDimmed } = useNodeFocus(id);

  const expandToLevel = useGraphStore((state) => state.expandToLevel);

  const expansionPath = useGraphStore((state) => state.expansionPath);



  const isExpanded = isCluster && expansionPath.includes(data.cluster.id);

  const depth = isCluster ? data.cluster.depth : 0;

  const isExpandable = isCluster && (data.cluster.depth < 2 || data.cluster.componentCount > 6);

  const parentGroupName = isCluster && depth > 1

    ? expansionPath[expansionPath.indexOf(data.cluster.id) - 1]?.replace("hierarchy:", "").replace(/:/g, " > ")

    : null;



  const childCount = isCluster

    ? (data.cluster.componentCount > 6 ? data.cluster.componentCount : 0)

    : 0;



  return (

    <NodeShell

      colors={colors}

      isDimmed={isDimmed}

      isSelected={isSelected}

      width={isCluster ? 320 : 280}

    >

      {!isCluster && (

        <>

          <Handle

            className="!absolute !z-[3] !h-2.5 !w-2.5 !rounded-full !border-2 !border-white/30 !bg-white/75 hover:!border-white hover:!bg-white"

            id={`left:${id}`}

            type="target"

            position={Position.Left}

            style={{ top: "50%" }}

          />

          <Handle

            className="!absolute !z-[3] !h-2.5 !w-2.5 !rounded-full !border-2 !border-white/30 !bg-white/75 hover:!border-white hover:!bg-white"

            id={`right:${id}`}

            type="source"

            position={Position.Right}

            style={{ top: "50%" }}

          />

        </>

      )}

      <div className="p-3.5">

        <NodeHeader

          name={name}

          type={type}

          color={colors.text}

          depth={depth}

          isExpandable={isExpandable}

          isExpanded={isExpanded}

          onExpand={() => isCluster && expandToLevel(data.cluster.id)}

        />

        {isCluster ? (

          <>

            {parentGroupName && (

              <div className="mt-1 flex items-center gap-1 text-xs text-white/70">

                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>

                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />

                </svg>

                <span>{parentGroupName}</span>

              </div>

            )}

            <div className="architecture-node__meta mt-3 flex items-center gap-2 text-sm text-white/80">

              <span className="rounded bg-white/15 px-2 py-1 font-medium">{data.cluster.componentCount} blocks</span>

              {childCount > 0 && (

                <span className="rounded bg-white/20 px-2 py-1 font-medium text-white">click to expand</span>

              )}

            </div>

            {data.cluster.typeBreakdown && Object.keys(data.cluster.typeBreakdown).length > 1 && (

              <div className="mt-2 flex flex-wrap gap-1">

                {Object.entries(data.cluster.typeBreakdown).map(([t, count]) => (

                  <span key={t} className="rounded bg-white/15 px-1.5 py-0.5 text-[11px] font-medium text-white/80">

                    {t}: {count}

                  </span>

                ))}

              </div>

            )}

          </>

        ) : null}

      </div>

    </NodeShell>

  );

}



export const ArchitectureNode = memo(ArchitectureNodeComponent);


