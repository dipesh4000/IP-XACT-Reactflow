/* @ts-self-types="./wasm_preprocess.d.ts" */
import init from "./wasm_preprocess_bg.wasm?url";
import { __wbg_set_wasm } from "./wasm_preprocess_bg.js";

let initialized = false;

async function ensureInit() {
  if (initialized) return;
  const instance = await WebAssembly.compileStreaming(fetch(init));
  const wasm = await WebAssembly.instantiate(instance);
  __wbg_set_wasm(wasm.exports);
  initialized = true;
}

export async function preprocess_architecture(model_json) {
  await ensureInit();
  const mod = await import("./wasm_preprocess_bg.js");
  return mod.preprocess_architecture(model_json);
}

export async function get_type_breakdown(model_json) {
  await ensureInit();
  const mod = await import("./wasm_preprocess_bg.js");
  return mod.get_type_breakdown(model_json);
}

export async function main() {
  await ensureInit();
  const mod = await import("./wasm_preprocess_bg.js");
  return mod.main();
}
