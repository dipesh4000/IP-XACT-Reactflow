function M(e) {
  let t, r;
  try {
    const c = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc), a = d, o = i.get_type_breakdown(c, a);
    var n = o[0], s = o[1];
    if (o[3]) throw n = 0, s = 0, k(o[2]);
    return t = n, r = s, y(n, s);
  } finally {
    i.__wbindgen_free(t, r, 1);
  }
}
function x(e) {
  let t, r;
  try {
    const c = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc), a = d, o = i.preprocess_architecture(c, a);
    var n = o[0], s = o[1];
    if (o[3]) throw n = 0, s = 0, k(o[2]);
    return t = n, r = s, y(n, s);
  } finally {
    i.__wbindgen_free(t, r, 1);
  }
}
function W() {
  return { __proto__: null, "./wasm_preprocess_bg.js": { __proto__: null, __wbg_error_a6fa202b58aa1cd3: function(t, r) {
    let n, s;
    try {
      n = t, s = r, console.error(y(t, r));
    } finally {
      i.__wbindgen_free(n, s, 1);
    }
  }, __wbg_new_227d7c05414eb861: function() {
    return new Error();
  }, __wbg_stack_3b0d974bbf31e44f: function(t, r) {
    const n = r.stack, s = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc), c = d;
    h().setInt32(t + 4, c, true), h().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t, r) {
    return y(t, r);
  }, __wbindgen_init_externref_table: function() {
    const t = i.__wbindgen_externrefs, r = t.grow(4);
    t.set(0, void 0), t.set(r + 0, void 0), t.set(r + 1, null), t.set(r + 2, true), t.set(r + 3, false);
  } } };
}
let f = null;
function h() {
  return (f === null || f.buffer.detached === true || f.buffer.detached === void 0 && f.buffer !== i.memory.buffer) && (f = new DataView(i.memory.buffer)), f;
}
function y(e, t) {
  return T(e >>> 0, t);
}
let l = null;
function b() {
  return (l === null || l.byteLength === 0) && (l = new Uint8Array(i.memory.buffer)), l;
}
function m(e, t, r) {
  if (r === void 0) {
    const o = _.encode(e), u = t(o.length, 1) >>> 0;
    return b().subarray(u, u + o.length).set(o), d = o.length, u;
  }
  let n = e.length, s = t(n, 1) >>> 0;
  const c = b();
  let a = 0;
  for (; a < n; a++) {
    const o = e.charCodeAt(a);
    if (o > 127) break;
    c[s + a] = o;
  }
  if (a !== n) {
    a !== 0 && (e = e.slice(a)), s = r(s, n, n = a + e.length * 3, 1) >>> 0;
    const o = b().subarray(s + a, s + n), u = _.encodeInto(e, o);
    a += u.written, s = r(s, n, a, 1) >>> 0;
  }
  return d = a, s;
}
function k(e) {
  const t = i.__wbindgen_externrefs.get(e);
  return i.__externref_table_dealloc(e), t;
}
let w = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
w.decode();
const R = 2146435072;
let p = 0;
function T(e, t) {
  return p += t, p >= R && (w = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), w.decode(), p = t), w.decode(b().subarray(e, e + t));
}
const _ = new TextEncoder();
"encodeInto" in _ || (_.encodeInto = function(e, t) {
  const r = _.encode(e);
  return t.set(r), { read: e.length, written: r.length };
});
let d = 0, i;
function O(e, t) {
  return i = e.exports, f = null, l = null, i.__wbindgen_start(), i;
}
async function S(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (s) {
      if (e.ok && r(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
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
async function v(e) {
  if (i !== void 0) return i;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("/assets/wasm_preprocess_bg-CK_i6M-u.wasm", import.meta.url));
  const t = W();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: r, module: n } = await S(await e, t);
  return O(r);
}
let g = null;
function A() {
  return g === null && (g = v()), g;
}
async function E(e) {
  await A();
  const t = JSON.parse(x(e));
  return { model: t.model, componentMetadata: t.componentMetadata, connectionMetadata: t.connectionMetadata, groups: t.groups, portSides: t.portSides, elkHints: { layerConstraints: t.elkHints.layerConstraints, portConstraints: t.elkHints.portConstraints, groupHints: t.elkHints.groupHints, elkOptions: t.elkHints.elkOptions } };
}
async function C(e) {
  return await A(), JSON.parse(M(e));
}
export {
  C as getTypeBreakdownWasm,
  E as preprocessArchitectureWasm
};
