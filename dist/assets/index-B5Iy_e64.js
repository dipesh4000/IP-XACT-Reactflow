function A(t) {
  let e, r;
  try {
    const f = h(t, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w, a = i.preprocess_architecture(f, o);
    var n = a[0], s = a[1];
    if (a[3]) throw n = 0, s = 0, x(a[2]);
    return e = n, r = s, g(n, s);
  } finally {
    i.__wbindgen_free(e, r, 1);
  }
}
function M() {
  return { __proto__: null, "./wasm_preprocess_bg.js": { __proto__: null, __wbg_error_a6fa202b58aa1cd3: function(e, r) {
    let n, s;
    try {
      n = e, s = r, console.error(g(e, r));
    } finally {
      i.__wbindgen_free(n, s, 1);
    }
  }, __wbg_new_227d7c05414eb861: function() {
    return new Error();
  }, __wbg_stack_3b0d974bbf31e44f: function(e, r) {
    const n = r.stack, s = h(n, i.__wbindgen_malloc, i.__wbindgen_realloc), f = w;
    m().setInt32(e + 4, f, true), m().setInt32(e + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(e, r) {
    return g(e, r);
  }, __wbindgen_init_externref_table: function() {
    const e = i.__wbindgen_externrefs, r = e.grow(4);
    e.set(0, void 0), e.set(r + 0, void 0), e.set(r + 1, null), e.set(r + 2, true), e.set(r + 3, false);
  } } };
}
let c = null;
function m() {
  return (c === null || c.buffer.detached === true || c.buffer.detached === void 0 && c.buffer !== i.memory.buffer) && (c = new DataView(i.memory.buffer)), c;
}
function g(t, e) {
  return R(t >>> 0, e);
}
let l = null;
function _() {
  return (l === null || l.byteLength === 0) && (l = new Uint8Array(i.memory.buffer)), l;
}
function h(t, e, r) {
  if (r === void 0) {
    const a = d.encode(t), u = e(a.length, 1) >>> 0;
    return _().subarray(u, u + a.length).set(a), w = a.length, u;
  }
  let n = t.length, s = e(n, 1) >>> 0;
  const f = _();
  let o = 0;
  for (; o < n; o++) {
    const a = t.charCodeAt(o);
    if (a > 127) break;
    f[s + o] = a;
  }
  if (o !== n) {
    o !== 0 && (t = t.slice(o)), s = r(s, n, n = o + t.length * 3, 1) >>> 0;
    const a = _().subarray(s + o, s + n), u = d.encodeInto(t, a);
    o += u.written, s = r(s, n, o, 1) >>> 0;
  }
  return w = o, s;
}
function x(t) {
  const e = i.__wbindgen_externrefs.get(t);
  return i.__externref_table_dealloc(t), e;
}
let b = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
b.decode();
const k = 2146435072;
let y = 0;
function R(t, e) {
  return y += e, y >= k && (b = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), b.decode(), y = e), b.decode(_().subarray(t, t + e));
}
const d = new TextEncoder();
"encodeInto" in d || (d.encodeInto = function(t, e) {
  const r = d.encode(t);
  return e.set(r), { read: t.length, written: r.length };
});
let w = 0, i;
function W(t, e) {
  return i = t.exports, c = null, l = null, i.__wbindgen_start(), i;
}
async function T(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, e);
    } catch (s) {
      if (t.ok && r(t.type) && t.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const n = await t.arrayBuffer();
    return await WebAssembly.instantiate(n, e);
  } else {
    const n = await WebAssembly.instantiate(t, e);
    return n instanceof WebAssembly.Instance ? { instance: n, module: t } : n;
  }
  function r(n) {
    switch (n) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function O(t) {
  if (i !== void 0) return i;
  t !== void 0 && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), t === void 0 && (t = new URL("/assets/wasm_preprocess_bg-CK_i6M-u.wasm", import.meta.url));
  const e = M();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: r, module: n } = await T(await t, e);
  return W(r);
}
let p = null;
function S() {
  return p === null && (p = O()), p;
}
async function E(t) {
  await S();
  const e = JSON.parse(A(t));
  return { model: e.model, componentMetadata: e.componentMetadata, connectionMetadata: e.connectionMetadata, groups: e.groups, portSides: e.portSides, elkHints: { layerConstraints: e.elkHints.layerConstraints, portConstraints: e.elkHints.portConstraints, groupHints: e.elkHints.groupHints, elkOptions: e.elkHints.elkOptions } };
}
export {
  E as preprocessArchitectureWasm
};
