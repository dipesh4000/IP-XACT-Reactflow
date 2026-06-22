import { _ as x } from "./index-BcUMPTsP.js";
const A = "/assets/wasm_preprocess_bg-CK_i6M-u.wasm";
function T(e) {
  let t, c;
  try {
    const _ = g(e, o.__wbindgen_malloc, o.__wbindgen_realloc), i = u, r = o.get_type_breakdown(_, i);
    var n = r[0], s = r[1];
    if (r[3]) throw n = 0, s = 0, M(r[2]);
    return t = n, c = s, m(n, s);
  } finally {
    o.__wbindgen_free(t, c, 1);
  }
}
function E() {
  o.main();
}
function S(e) {
  let t, c;
  try {
    const _ = g(e, o.__wbindgen_malloc, o.__wbindgen_realloc), i = u, r = o.preprocess_architecture(_, i);
    var n = r[0], s = r[1];
    if (r[3]) throw n = 0, s = 0, M(r[2]);
    return t = n, c = s, m(n, s);
  } finally {
    o.__wbindgen_free(t, c, 1);
  }
}
function v(e, t) {
  let c, n;
  try {
    c = e, n = t, console.error(m(e, t));
  } finally {
    o.__wbindgen_free(c, n, 1);
  }
}
function D() {
  return new Error();
}
function O(e, t) {
  const c = t.stack, n = g(c, o.__wbindgen_malloc, o.__wbindgen_realloc), s = u;
  y().setInt32(e + 4, s, true), y().setInt32(e + 0, n, true);
}
function C(e, t) {
  return m(e, t);
}
function I() {
  const e = o.__wbindgen_externrefs, t = e.grow(4);
  e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
}
let a = null;
function y() {
  return (a === null || a.buffer.detached === true || a.buffer.detached === void 0 && a.buffer !== o.memory.buffer) && (a = new DataView(o.memory.buffer)), a;
}
function m(e, t) {
  return W(e >>> 0, t);
}
let l = null;
function b() {
  return (l === null || l.byteLength === 0) && (l = new Uint8Array(o.memory.buffer)), l;
}
function g(e, t, c) {
  if (c === void 0) {
    const r = f.encode(e), d = t(r.length, 1) >>> 0;
    return b().subarray(d, d + r.length).set(r), u = r.length, d;
  }
  let n = e.length, s = t(n, 1) >>> 0;
  const _ = b();
  let i = 0;
  for (; i < n; i++) {
    const r = e.charCodeAt(i);
    if (r > 127) break;
    _[s + i] = r;
  }
  if (i !== n) {
    i !== 0 && (e = e.slice(i)), s = c(s, n, n = i + e.length * 3, 1) >>> 0;
    const r = b().subarray(s + i, s + n), d = f.encodeInto(e, r);
    i += d.written, s = c(s, n, i, 1) >>> 0;
  }
  return u = i, s;
}
function M(e) {
  const t = o.__wbindgen_externrefs.get(e);
  return o.__externref_table_dealloc(e), t;
}
let w = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
w.decode();
const H = 2146435072;
let p = 0;
function W(e, t) {
  return p += t, p >= H && (w = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), w.decode(), p = t), w.decode(b().subarray(e, e + t));
}
const f = new TextEncoder();
"encodeInto" in f || (f.encodeInto = function(e, t) {
  const c = f.encode(e);
  return t.set(c), { read: e.length, written: c.length };
});
let u = 0, o;
function k(e) {
  o = e;
}
const V = Object.freeze(Object.defineProperty({ __proto__: null, __wbg_error_a6fa202b58aa1cd3: v, __wbg_new_227d7c05414eb861: D, __wbg_set_wasm: k, __wbg_stack_3b0d974bbf31e44f: O, __wbindgen_cast_0000000000000001: C, __wbindgen_init_externref_table: I, get_type_breakdown: T, main: E, preprocess_architecture: S }, Symbol.toStringTag, { value: "Module" }));
let h = false;
async function B() {
  if (h) return;
  const e = await WebAssembly.compileStreaming(fetch(A)), t = await WebAssembly.instantiate(e);
  k(t.exports), h = true;
}
async function F(e) {
  return await B(), (await x(() => Promise.resolve().then(() => V), void 0)).preprocess_architecture(e);
}
async function L(e) {
  const t = JSON.parse(await F(e));
  return { model: t.model, componentMetadata: t.componentMetadata, connectionMetadata: t.connectionMetadata, groups: t.groups, portSides: t.portSides, elkHints: { layerConstraints: t.elkHints.layerConstraints, portConstraints: t.elkHints.portConstraints, groupHints: t.elkHints.groupHints, elkOptions: t.elkHints.elkOptions } };
}
export {
  L as preprocessArchitectureWasm
};
