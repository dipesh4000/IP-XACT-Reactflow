/* @ts-self-types="./wasm_preprocess.d.ts" */
import * as wasm from "./wasm_preprocess_bg.wasm";
import { __wbg_set_wasm } from "./wasm_preprocess_bg.js";

__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    get_type_breakdown, main, preprocess_architecture
} from "./wasm_preprocess_bg.js";
