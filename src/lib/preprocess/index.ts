import type { ArchitectureModel } from "../../types";
import type {
  ComponentMetadata,
  ConnectionMetadata,
  ELKLayoutHints,
  LayoutLayer,
  PortSide,
  SemanticGroup
} from "./types";

export interface PreprocessedArchitecture {
  model: ArchitectureModel;
  componentMetadata: Map<string, ComponentMetadata>;
  connectionMetadata: Map<string, ConnectionMetadata>;
  groups: SemanticGroup[];
  portSides: Record<string, Record<string, PortSide>>;
  elkHints: ELKLayoutHints;
}

function toComponentMetadataMap(
  entries: Record<string, { category: string; layer: number; groupId: string | null }>
): Map<string, ComponentMetadata> {
  const map = new Map<string, ComponentMetadata>();
  for (const [id, value] of Object.entries(entries)) {
    map.set(id, {
      category: value.category as ComponentMetadata["category"],
      layer: value.layer as LayoutLayer,
      groupId: value.groupId
    });
  }
  return map;
}

function toConnectionMetadataMap(
  entries: Record<string, { connectionType: string; sourcePortSide: string; targetPortSide: string }>
): Map<string, ConnectionMetadata> {
  const map = new Map<string, ConnectionMetadata>();
  for (const [id, value] of Object.entries(entries)) {
    map.set(id, {
      connectionType: value.connectionType as ConnectionMetadata["connectionType"],
      sourcePortSide: value.sourcePortSide as PortSide,
      targetPortSide: value.targetPortSide as PortSide
    });
  }
  return map;
}

function normalizePortSides(
  portSides: Record<string, Record<string, string>>
): Record<string, Record<string, PortSide>> {
  const normalized: Record<string, Record<string, PortSide>> = {};
  for (const [componentId, ports] of Object.entries(portSides)) {
    normalized[componentId] = {};
    for (const [portId, side] of Object.entries(ports)) {
      normalized[componentId]![portId] = side as PortSide;
    }
  }
  return normalized;
}

function normalizeElkHints(
  elkHints: {
    layerConstraints: Record<string, number>;
    portConstraints: Record<string, Record<string, string>>;
    groupHints: Array<{ id: string; children: string[] }>;
    elkOptions: Record<string, string>;
  }
): ELKLayoutHints {
  return {
    layerConstraints: elkHints.layerConstraints as Record<string, LayoutLayer>,
    portConstraints: normalizePortSides(elkHints.portConstraints),
    groupHints: elkHints.groupHints,
    elkOptions: elkHints.elkOptions
  };
}

export async function preprocessArchitecture(model: ArchitectureModel): Promise<PreprocessedArchitecture> {
  const { preprocessArchitectureWasm } = await import("../wasm/index");
  const result = await preprocessArchitectureWasm(JSON.stringify(model));

  return {
    model: result.model as ArchitectureModel,
    componentMetadata: toComponentMetadataMap(result.componentMetadata),
    connectionMetadata: toConnectionMetadataMap(result.connectionMetadata),
    groups: result.groups as SemanticGroup[],
    portSides: normalizePortSides(result.portSides),
    elkHints: normalizeElkHints(result.elkHints)
  };
}

export async function getTypeBreakdown(model: ArchitectureModel): Promise<Record<string, number>> {
  const { getTypeBreakdownWasm } = await import("../wasm/index");
  return getTypeBreakdownWasm(JSON.stringify(model));
}

export type { ComponentMetadata, ConnectionMetadata, ELKLayoutHints, LayoutLayer, PortSide, SemanticGroup };
