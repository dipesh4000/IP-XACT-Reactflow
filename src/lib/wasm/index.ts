import init, { get_type_breakdown, preprocess_architecture } from "./wasm_preprocess";
import type { ArchitectureModel } from "../../types";
import type { ComponentMetadata, ConnectionMetadata, SemanticGroup } from "../preprocess/types";
import type { ELKLayoutHints, LayoutLayer, PortSide } from "../preprocess/types";

export interface WasmPreprocessedArchitecture {
  model: ArchitectureModel;
  componentMetadata: Record<string, ComponentMetadata>;
  connectionMetadata: Record<string, ConnectionMetadata>;
  groups: SemanticGroup[];
  portSides: Record<string, Record<string, PortSide>>;
  elkHints: ELKLayoutHints;
}

interface WasmRawResult {
  model: unknown;
  componentMetadata: Record<string, { category: string; layer: number; groupId: string | null }>;
  connectionMetadata: Record<string, { connectionType: string; sourcePortSide: string; targetPortSide: string }>;
  groups: Array<{ id: string; name: string; componentIds: string[]; category: string }>;
  portSides: Record<string, Record<string, string>>;
  elkHints: {
    layerConstraints: Record<string, number>;
    portConstraints: Record<string, Record<string, string>>;
    groupHints: Array<{ id: string; children: string[] }>;
    elkOptions: Record<string, string>;
  };
}

let wasmReady: Promise<void> | null = null;

function ensureWasm(): Promise<void> {
  if (wasmReady === null) {
    wasmReady = init();
  }
  return wasmReady;
}

export async function preprocessArchitectureWasm(modelJson: string): Promise<WasmPreprocessedArchitecture> {
  await ensureWasm();
  const raw: WasmRawResult = JSON.parse(preprocess_architecture(modelJson));
  return {
    model: raw.model as ArchitectureModel,
    componentMetadata: raw.componentMetadata as Record<string, ComponentMetadata>,
    connectionMetadata: raw.connectionMetadata as Record<string, ConnectionMetadata>,
    groups: raw.groups as SemanticGroup[],
    portSides: raw.portSides as Record<string, Record<string, PortSide>>,
    elkHints: {
      layerConstraints: raw.elkHints.layerConstraints as Record<string, LayoutLayer>,
      portConstraints: raw.elkHints.portConstraints as Record<string, Record<string, PortSide>>,
      groupHints: raw.elkHints.groupHints,
      elkOptions: raw.elkHints.elkOptions
    }
  };
}

export async function getTypeBreakdownWasm(modelJson: string): Promise<Record<string, number>> {
  await ensureWasm();
  return JSON.parse(get_type_breakdown(modelJson));
}
