(async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
    new MutationObserver((l) => {
      for (const u of l) if (u.type === "childList") for (const c of u.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function o(l) {
      const u = {};
      return l.integrity && (u.integrity = l.integrity), l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? u.credentials = "include" : l.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
    }
    function s(l) {
      if (l.ep) return;
      l.ep = true;
      const u = o(l);
      fetch(l.href, u);
    }
  })();
  function c0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Fu = {
    exports: {}
  }, xi = {}, Bu = {
    exports: {}
  }, Ce = {};
  var Ah;
  function Ry() {
    if (Ah) return Ce;
    Ah = 1;
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
    function v(C) {
      return C === null || typeof C != "object" ? null : (C = y && C[y] || C["@@iterator"], typeof C == "function" ? C : null);
    }
    var x = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, E = Object.assign, S = {};
    function _(C, z, re) {
      this.props = C, this.context = z, this.refs = S, this.updater = re || x;
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(C, z) {
      if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, C, z, "setState");
    }, _.prototype.forceUpdate = function(C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    };
    function N() {
    }
    N.prototype = _.prototype;
    function T(C, z, re) {
      this.props = C, this.context = z, this.refs = S, this.updater = re || x;
    }
    var L = T.prototype = new N();
    L.constructor = T, E(L, _.prototype), L.isPureReactComponent = true;
    var b = Array.isArray, X = Object.prototype.hasOwnProperty, O = {
      current: null
    }, Z = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function ee(C, z, re) {
      var te, le = {}, ae = null, he = null;
      if (z != null) for (te in z.ref !== void 0 && (he = z.ref), z.key !== void 0 && (ae = "" + z.key), z) X.call(z, te) && !Z.hasOwnProperty(te) && (le[te] = z[te]);
      var me = arguments.length - 2;
      if (me === 1) le.children = re;
      else if (1 < me) {
        for (var ve = Array(me), ke = 0; ke < me; ke++) ve[ke] = arguments[ke + 2];
        le.children = ve;
      }
      if (C && C.defaultProps) for (te in me = C.defaultProps, me) le[te] === void 0 && (le[te] = me[te]);
      return {
        $$typeof: e,
        type: C,
        key: ae,
        ref: he,
        props: le,
        _owner: O.current
      };
    }
    function G(C, z) {
      return {
        $$typeof: e,
        type: C.type,
        key: z,
        ref: C.ref,
        props: C.props,
        _owner: C._owner
      };
    }
    function V(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function K(C) {
      var z = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + C.replace(/[=:]/g, function(re) {
        return z[re];
      });
    }
    var J = /\/+/g;
    function q(C, z) {
      return typeof C == "object" && C !== null && C.key != null ? K("" + C.key) : z.toString(36);
    }
    function k(C, z, re, te, le) {
      var ae = typeof C;
      (ae === "undefined" || ae === "boolean") && (C = null);
      var he = false;
      if (C === null) he = true;
      else switch (ae) {
        case "string":
        case "number":
          he = true;
          break;
        case "object":
          switch (C.$$typeof) {
            case e:
            case r:
              he = true;
          }
      }
      if (he) return he = C, le = le(he), C = te === "" ? "." + q(he, 0) : te, b(le) ? (re = "", C != null && (re = C.replace(J, "$&/") + "/"), k(le, z, re, "", function(ke) {
        return ke;
      })) : le != null && (V(le) && (le = G(le, re + (!le.key || he && he.key === le.key ? "" : ("" + le.key).replace(J, "$&/") + "/") + C)), z.push(le)), 1;
      if (he = 0, te = te === "" ? "." : te + ":", b(C)) for (var me = 0; me < C.length; me++) {
        ae = C[me];
        var ve = te + q(ae, me);
        he += k(ae, z, re, ve, le);
      }
      else if (ve = v(C), typeof ve == "function") for (C = ve.call(C), me = 0; !(ae = C.next()).done; ) ae = ae.value, ve = te + q(ae, me++), he += k(ae, z, re, ve, le);
      else if (ae === "object") throw z = String(C), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
      return he;
    }
    function H(C, z, re) {
      if (C == null) return C;
      var te = [], le = 0;
      return k(C, te, "", "", function(ae) {
        return z.call(re, ae, le++);
      }), te;
    }
    function I(C) {
      if (C._status === -1) {
        var z = C._result;
        z = z(), z.then(function(re) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = re);
        }, function(re) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = re);
        }), C._status === -1 && (C._status = 0, C._result = z);
      }
      if (C._status === 1) return C._result.default;
      throw C._result;
    }
    var W = {
      current: null
    }, F = {
      transition: null
    }, P = {
      ReactCurrentDispatcher: W,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: O
    };
    function B() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return Ce.Children = {
      map: H,
      forEach: function(C, z, re) {
        H(C, function() {
          z.apply(this, arguments);
        }, re);
      },
      count: function(C) {
        var z = 0;
        return H(C, function() {
          z++;
        }), z;
      },
      toArray: function(C) {
        return H(C, function(z) {
          return z;
        }) || [];
      },
      only: function(C) {
        if (!V(C)) throw Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
    }, Ce.Component = _, Ce.Fragment = o, Ce.Profiler = l, Ce.PureComponent = T, Ce.StrictMode = s, Ce.Suspense = m, Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, Ce.act = B, Ce.cloneElement = function(C, z, re) {
      if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
      var te = E({}, C.props), le = C.key, ae = C.ref, he = C._owner;
      if (z != null) {
        if (z.ref !== void 0 && (ae = z.ref, he = O.current), z.key !== void 0 && (le = "" + z.key), C.type && C.type.defaultProps) var me = C.type.defaultProps;
        for (ve in z) X.call(z, ve) && !Z.hasOwnProperty(ve) && (te[ve] = z[ve] === void 0 && me !== void 0 ? me[ve] : z[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) te.children = re;
      else if (1 < ve) {
        me = Array(ve);
        for (var ke = 0; ke < ve; ke++) me[ke] = arguments[ke + 2];
        te.children = me;
      }
      return {
        $$typeof: e,
        type: C.type,
        key: le,
        ref: ae,
        props: te,
        _owner: he
      };
    }, Ce.createContext = function(C) {
      return C = {
        $$typeof: c,
        _currentValue: C,
        _currentValue2: C,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, C.Provider = {
        $$typeof: u,
        _context: C
      }, C.Consumer = C;
    }, Ce.createElement = ee, Ce.createFactory = function(C) {
      var z = ee.bind(null, C);
      return z.type = C, z;
    }, Ce.createRef = function() {
      return {
        current: null
      };
    }, Ce.forwardRef = function(C) {
      return {
        $$typeof: f,
        render: C
      };
    }, Ce.isValidElement = V, Ce.lazy = function(C) {
      return {
        $$typeof: g,
        _payload: {
          _status: -1,
          _result: C
        },
        _init: I
      };
    }, Ce.memo = function(C, z) {
      return {
        $$typeof: h,
        type: C,
        compare: z === void 0 ? null : z
      };
    }, Ce.startTransition = function(C) {
      var z = F.transition;
      F.transition = {};
      try {
        C();
      } finally {
        F.transition = z;
      }
    }, Ce.unstable_act = B, Ce.useCallback = function(C, z) {
      return W.current.useCallback(C, z);
    }, Ce.useContext = function(C) {
      return W.current.useContext(C);
    }, Ce.useDebugValue = function() {
    }, Ce.useDeferredValue = function(C) {
      return W.current.useDeferredValue(C);
    }, Ce.useEffect = function(C, z) {
      return W.current.useEffect(C, z);
    }, Ce.useId = function() {
      return W.current.useId();
    }, Ce.useImperativeHandle = function(C, z, re) {
      return W.current.useImperativeHandle(C, z, re);
    }, Ce.useInsertionEffect = function(C, z) {
      return W.current.useInsertionEffect(C, z);
    }, Ce.useLayoutEffect = function(C, z) {
      return W.current.useLayoutEffect(C, z);
    }, Ce.useMemo = function(C, z) {
      return W.current.useMemo(C, z);
    }, Ce.useReducer = function(C, z, re) {
      return W.current.useReducer(C, z, re);
    }, Ce.useRef = function(C) {
      return W.current.useRef(C);
    }, Ce.useState = function(C) {
      return W.current.useState(C);
    }, Ce.useSyncExternalStore = function(C, z, re) {
      return W.current.useSyncExternalStore(C, z, re);
    }, Ce.useTransition = function() {
      return W.current.useTransition();
    }, Ce.version = "18.3.1", Ce;
  }
  var Th;
  function ji() {
    return Th || (Th = 1, Bu.exports = Ry()), Bu.exports;
  }
  var Rh;
  function Py() {
    if (Rh) return xi;
    Rh = 1;
    var e = ji(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function c(f, m, h) {
      var g, y = {}, v = null, x = null;
      h !== void 0 && (v = "" + h), m.key !== void 0 && (v = "" + m.key), m.ref !== void 0 && (x = m.ref);
      for (g in m) s.call(m, g) && !u.hasOwnProperty(g) && (y[g] = m[g]);
      if (f && f.defaultProps) for (g in m = f.defaultProps, m) y[g] === void 0 && (y[g] = m[g]);
      return {
        $$typeof: r,
        type: f,
        key: v,
        ref: x,
        props: y,
        _owner: l.current
      };
    }
    return xi.Fragment = o, xi.jsx = c, xi.jsxs = c, xi;
  }
  var Ph;
  function $y() {
    return Ph || (Ph = 1, Fu.exports = Py()), Fu.exports;
  }
  var A = $y(), $ = ji();
  const Q = c0($);
  var cl = {}, ju = {
    exports: {}
  }, Mt = {}, Hu = {
    exports: {}
  }, Vu = {};
  var $h;
  function zy() {
    return $h || ($h = 1, (function(e) {
      function r(F, P) {
        var B = F.length;
        F.push(P);
        e: for (; 0 < B; ) {
          var C = B - 1 >>> 1, z = F[C];
          if (0 < l(z, P)) F[C] = P, F[B] = z, B = C;
          else break e;
        }
      }
      function o(F) {
        return F.length === 0 ? null : F[0];
      }
      function s(F) {
        if (F.length === 0) return null;
        var P = F[0], B = F.pop();
        if (B !== P) {
          F[0] = B;
          e: for (var C = 0, z = F.length, re = z >>> 1; C < re; ) {
            var te = 2 * (C + 1) - 1, le = F[te], ae = te + 1, he = F[ae];
            if (0 > l(le, B)) ae < z && 0 > l(he, le) ? (F[C] = he, F[ae] = B, C = ae) : (F[C] = le, F[te] = B, C = te);
            else if (ae < z && 0 > l(he, B)) F[C] = he, F[ae] = B, C = ae;
            else break e;
          }
        }
        return P;
      }
      function l(F, P) {
        var B = F.sortIndex - P.sortIndex;
        return B !== 0 ? B : F.id - P.id;
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var u = performance;
        e.unstable_now = function() {
          return u.now();
        };
      } else {
        var c = Date, f = c.now();
        e.unstable_now = function() {
          return c.now() - f;
        };
      }
      var m = [], h = [], g = 1, y = null, v = 3, x = false, E = false, S = false, _ = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(F) {
        for (var P = o(h); P !== null; ) {
          if (P.callback === null) s(h);
          else if (P.startTime <= F) s(h), P.sortIndex = P.expirationTime, r(m, P);
          else break;
          P = o(h);
        }
      }
      function b(F) {
        if (S = false, L(F), !E) if (o(m) !== null) E = true, I(X);
        else {
          var P = o(h);
          P !== null && W(b, P.startTime - F);
        }
      }
      function X(F, P) {
        E = false, S && (S = false, N(ee), ee = -1), x = true;
        var B = v;
        try {
          for (L(P), y = o(m); y !== null && (!(y.expirationTime > P) || F && !K()); ) {
            var C = y.callback;
            if (typeof C == "function") {
              y.callback = null, v = y.priorityLevel;
              var z = C(y.expirationTime <= P);
              P = e.unstable_now(), typeof z == "function" ? y.callback = z : y === o(m) && s(m), L(P);
            } else s(m);
            y = o(m);
          }
          if (y !== null) var re = true;
          else {
            var te = o(h);
            te !== null && W(b, te.startTime - P), re = false;
          }
          return re;
        } finally {
          y = null, v = B, x = false;
        }
      }
      var O = false, Z = null, ee = -1, G = 5, V = -1;
      function K() {
        return !(e.unstable_now() - V < G);
      }
      function J() {
        if (Z !== null) {
          var F = e.unstable_now();
          V = F;
          var P = true;
          try {
            P = Z(true, F);
          } finally {
            P ? q() : (O = false, Z = null);
          }
        } else O = false;
      }
      var q;
      if (typeof T == "function") q = function() {
        T(J);
      };
      else if (typeof MessageChannel < "u") {
        var k = new MessageChannel(), H = k.port2;
        k.port1.onmessage = J, q = function() {
          H.postMessage(null);
        };
      } else q = function() {
        _(J, 0);
      };
      function I(F) {
        Z = F, O || (O = true, q());
      }
      function W(F, P) {
        ee = _(function() {
          F(e.unstable_now());
        }, P);
      }
      e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
        F.callback = null;
      }, e.unstable_continueExecution = function() {
        E || x || (E = true, I(X));
      }, e.unstable_forceFrameRate = function(F) {
        0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < F ? Math.floor(1e3 / F) : 5;
      }, e.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, e.unstable_getFirstCallbackNode = function() {
        return o(m);
      }, e.unstable_next = function(F) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var P = 3;
            break;
          default:
            P = v;
        }
        var B = v;
        v = P;
        try {
          return F();
        } finally {
          v = B;
        }
      }, e.unstable_pauseExecution = function() {
      }, e.unstable_requestPaint = function() {
      }, e.unstable_runWithPriority = function(F, P) {
        switch (F) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            F = 3;
        }
        var B = v;
        v = F;
        try {
          return P();
        } finally {
          v = B;
        }
      }, e.unstable_scheduleCallback = function(F, P, B) {
        var C = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? C + B : C) : B = C, F) {
          case 1:
            var z = -1;
            break;
          case 2:
            z = 250;
            break;
          case 5:
            z = 1073741823;
            break;
          case 4:
            z = 1e4;
            break;
          default:
            z = 5e3;
        }
        return z = B + z, F = {
          id: g++,
          callback: P,
          priorityLevel: F,
          startTime: B,
          expirationTime: z,
          sortIndex: -1
        }, B > C ? (F.sortIndex = B, r(h, F), o(m) === null && F === o(h) && (S ? (N(ee), ee = -1) : S = true, W(b, B - C))) : (F.sortIndex = z, r(m, F), E || x || (E = true, I(X))), F;
      }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(F) {
        var P = v;
        return function() {
          var B = v;
          v = P;
          try {
            return F.apply(this, arguments);
          } finally {
            v = B;
          }
        };
      };
    })(Vu)), Vu;
  }
  var zh;
  function Dy() {
    return zh || (zh = 1, Hu.exports = zy()), Hu.exports;
  }
  var Dh;
  function Ly() {
    if (Dh) return Mt;
    Dh = 1;
    var e = ji(), r = Dy();
    function o(t) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
      return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var s = /* @__PURE__ */ new Set(), l = {};
    function u(t, n) {
      c(t, n), c(t + "Capture", n);
    }
    function c(t, n) {
      for (l[t] = n, t = 0; t < n.length; t++) s.add(n[t]);
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, y = {};
    function v(t) {
      return m.call(y, t) ? true : m.call(g, t) ? false : h.test(t) ? y[t] = true : (g[t] = true, false);
    }
    function x(t, n, i, a) {
      if (i !== null && i.type === 0) return false;
      switch (typeof n) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return a ? false : i !== null ? !i.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
          return false;
      }
    }
    function E(t, n, i, a) {
      if (n === null || typeof n > "u" || x(t, n, i, a)) return true;
      if (a) return false;
      if (i !== null) switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === false;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
      return false;
    }
    function S(t, n, i, a, d, p, w) {
      this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = t, this.type = n, this.sanitizeURL = p, this.removeEmptyString = w;
    }
    var _ = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
      _[t] = new S(t, 0, false, t, null, false, false);
    }), [
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "className",
        "class"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ]
    ].forEach(function(t) {
      var n = t[0];
      _[n] = new S(n, 1, false, t[1], null, false, false);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(t) {
      _[t] = new S(t, 2, false, t.toLowerCase(), null, false, false);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(t) {
      _[t] = new S(t, 2, false, t, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
      _[t] = new S(t, 3, false, t.toLowerCase(), null, false, false);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(t) {
      _[t] = new S(t, 3, true, t, null, false, false);
    }), [
      "capture",
      "download"
    ].forEach(function(t) {
      _[t] = new S(t, 4, false, t, null, false, false);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(t) {
      _[t] = new S(t, 6, false, t, null, false, false);
    }), [
      "rowSpan",
      "start"
    ].forEach(function(t) {
      _[t] = new S(t, 5, false, t.toLowerCase(), null, false, false);
    });
    var N = /[\-:]([a-z])/g;
    function T(t) {
      return t[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
      var n = t.replace(N, T);
      _[n] = new S(n, 1, false, t, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
      var n = t.replace(N, T);
      _[n] = new S(n, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(t) {
      var n = t.replace(N, T);
      _[n] = new S(n, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
    }), [
      "tabIndex",
      "crossOrigin"
    ].forEach(function(t) {
      _[t] = new S(t, 1, false, t.toLowerCase(), null, false, false);
    }), _.xlinkHref = new S("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
      "src",
      "href",
      "action",
      "formAction"
    ].forEach(function(t) {
      _[t] = new S(t, 1, false, t.toLowerCase(), null, true, true);
    });
    function L(t, n, i, a) {
      var d = _.hasOwnProperty(n) ? _[n] : null;
      (d !== null ? d.type !== 0 : a || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (E(n, i, d, a) && (i = null), a || d === null ? v(n) && (i === null ? t.removeAttribute(n) : t.setAttribute(n, "" + i)) : d.mustUseProperty ? t[d.propertyName] = i === null ? d.type === 3 ? false : "" : i : (n = d.attributeName, a = d.attributeNamespace, i === null ? t.removeAttribute(n) : (d = d.type, i = d === 3 || d === 4 && i === true ? "" : "" + i, a ? t.setAttributeNS(a, n, i) : t.setAttribute(n, i))));
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, X = Symbol.for("react.element"), O = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), K = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), F = Symbol.iterator;
    function P(t) {
      return t === null || typeof t != "object" ? null : (t = F && t[F] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var B = Object.assign, C;
    function z(t) {
      if (C === void 0) try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        C = n && n[1] || "";
      }
      return `
` + C + t;
    }
    var re = false;
    function te(t, n) {
      if (!t || re) return "";
      re = true;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (n) if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (Y) {
            var a = Y;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (Y) {
            a = Y;
          }
          t.call(n.prototype);
        }
        else {
          try {
            throw Error();
          } catch (Y) {
            a = Y;
          }
          t();
        }
      } catch (Y) {
        if (Y && a && typeof Y.stack == "string") {
          for (var d = Y.stack.split(`
`), p = a.stack.split(`
`), w = d.length - 1, M = p.length - 1; 1 <= w && 0 <= M && d[w] !== p[M]; ) M--;
          for (; 1 <= w && 0 <= M; w--, M--) if (d[w] !== p[M]) {
            if (w !== 1 || M !== 1) do
              if (w--, M--, 0 > M || d[w] !== p[M]) {
                var R = `
` + d[w].replace(" at new ", " at ");
                return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
              }
            while (1 <= w && 0 <= M);
            break;
          }
        }
      } finally {
        re = false, Error.prepareStackTrace = i;
      }
      return (t = t ? t.displayName || t.name : "") ? z(t) : "";
    }
    function le(t) {
      switch (t.tag) {
        case 5:
          return z(t.type);
        case 16:
          return z("Lazy");
        case 13:
          return z("Suspense");
        case 19:
          return z("SuspenseList");
        case 0:
        case 2:
        case 15:
          return t = te(t.type, false), t;
        case 11:
          return t = te(t.type.render, false), t;
        case 1:
          return t = te(t.type, true), t;
        default:
          return "";
      }
    }
    function ae(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case Z:
          return "Fragment";
        case O:
          return "Portal";
        case G:
          return "Profiler";
        case ee:
          return "StrictMode";
        case q:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case K:
          return (t.displayName || "Context") + ".Consumer";
        case V:
          return (t._context.displayName || "Context") + ".Provider";
        case J:
          var n = t.render;
          return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case H:
          return n = t.displayName || null, n !== null ? n : ae(t.type) || "Memo";
        case I:
          n = t._payload, t = t._init;
          try {
            return ae(t(n));
          } catch {
          }
      }
      return null;
    }
    function he(t) {
      var n = t.type;
      switch (t.tag) {
        case 24:
          return "Cache";
        case 9:
          return (n.displayName || "Context") + ".Consumer";
        case 10:
          return (n._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return t = n.render, t = t.displayName || t.name || "", n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return n;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ae(n);
        case 8:
          return n === ee ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof n == "function") return n.displayName || n.name || null;
          if (typeof n == "string") return n;
      }
      return null;
    }
    function me(t) {
      switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function ve(t) {
      var n = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function ke(t) {
      var n = ve(t) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(t.constructor.prototype, n), a = "" + t[n];
      if (!t.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var d = i.get, p = i.set;
        return Object.defineProperty(t, n, {
          configurable: true,
          get: function() {
            return d.call(this);
          },
          set: function(w) {
            a = "" + w, p.call(this, w);
          }
        }), Object.defineProperty(t, n, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(w) {
            a = "" + w;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[n];
          }
        };
      }
    }
    function Ve(t) {
      t._valueTracker || (t._valueTracker = ke(t));
    }
    function Ue(t) {
      if (!t) return false;
      var n = t._valueTracker;
      if (!n) return true;
      var i = n.getValue(), a = "";
      return t && (a = ve(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== i ? (n.setValue(t), true) : false;
    }
    function Ke(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function Qe(t, n) {
      var i = n.checked;
      return B({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? t._wrapperState.initialChecked
      });
    }
    function Oe(t, n) {
      var i = n.defaultValue == null ? "" : n.defaultValue, a = n.checked != null ? n.checked : n.defaultChecked;
      i = me(n.value != null ? n.value : i), t._wrapperState = {
        initialChecked: a,
        initialValue: i,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
      };
    }
    function ut(t, n) {
      n = n.checked, n != null && L(t, "checked", n, false);
    }
    function Me(t, n) {
      ut(t, n);
      var i = me(n.value), a = n.type;
      if (i != null) a === "number" ? (i === 0 && t.value === "" || t.value != i) && (t.value = "" + i) : t.value !== "" + i && (t.value = "" + i);
      else if (a === "submit" || a === "reset") {
        t.removeAttribute("value");
        return;
      }
      n.hasOwnProperty("value") ? qe(t, n.type, i) : n.hasOwnProperty("defaultValue") && qe(t, n.type, me(n.defaultValue)), n.checked == null && n.defaultChecked != null && (t.defaultChecked = !!n.defaultChecked);
    }
    function ye(t, n, i) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var a = n.type;
        if (!(a !== "submit" && a !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + t._wrapperState.initialValue, i || n === t.value || (t.value = n), t.defaultValue = n;
      }
      i = t.name, i !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, i !== "" && (t.name = i);
    }
    function qe(t, n, i) {
      (n !== "number" || Ke(t.ownerDocument) !== t) && (i == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + i && (t.defaultValue = "" + i));
    }
    var yt = Array.isArray;
    function Ft(t, n, i, a) {
      if (t = t.options, n) {
        n = {};
        for (var d = 0; d < i.length; d++) n["$" + i[d]] = true;
        for (i = 0; i < t.length; i++) d = n.hasOwnProperty("$" + t[i].value), t[i].selected !== d && (t[i].selected = d), d && a && (t[i].defaultSelected = true);
      } else {
        for (i = "" + me(i), n = null, d = 0; d < t.length; d++) {
          if (t[d].value === i) {
            t[d].selected = true, a && (t[d].defaultSelected = true);
            return;
          }
          n !== null || t[d].disabled || (n = t[d]);
        }
        n !== null && (n.selected = true);
      }
    }
    function hn(t, n) {
      if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
      return B({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
      });
    }
    function _n(t, n) {
      var i = n.value;
      if (i == null) {
        if (i = n.children, n = n.defaultValue, i != null) {
          if (n != null) throw Error(o(92));
          if (yt(i)) {
            if (1 < i.length) throw Error(o(93));
            i = i[0];
          }
          n = i;
        }
        n == null && (n = ""), i = n;
      }
      t._wrapperState = {
        initialValue: me(i)
      };
    }
    function Bt(t, n) {
      var i = me(n.value), a = me(n.defaultValue);
      i != null && (i = "" + i, i !== t.value && (t.value = i), n.defaultValue == null && t.defaultValue !== i && (t.defaultValue = i)), a != null && (t.defaultValue = "" + a);
    }
    function Nn(t) {
      var n = t.textContent;
      n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n);
    }
    function pn(t) {
      switch (t) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function qt(t, n) {
      return t == null || t === "http://www.w3.org/1999/xhtml" ? pn(n) : t === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
    }
    var Jt, Mn = (function(t) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, i, a, d) {
        MSApp.execUnsafeLocalFunction(function() {
          return t(n, i, a, d);
        });
      } : t;
    })(function(t, n) {
      if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = n;
      else {
        for (Jt = Jt || document.createElement("div"), Jt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Jt.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
        for (; n.firstChild; ) t.appendChild(n.firstChild);
      }
    });
    function en(t, n) {
      if (n) {
        var i = t.firstChild;
        if (i && i === t.lastChild && i.nodeType === 3) {
          i.nodeValue = n;
          return;
        }
      }
      t.textContent = n;
    }
    var We = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, jt = [
      "Webkit",
      "ms",
      "Moz",
      "O"
    ];
    Object.keys(We).forEach(function(t) {
      jt.forEach(function(n) {
        n = n + t.charAt(0).toUpperCase() + t.substring(1), We[n] = We[t];
      });
    });
    function mn(t, n, i) {
      return n == null || typeof n == "boolean" || n === "" ? "" : i || typeof n != "number" || n === 0 || We.hasOwnProperty(t) && We[t] ? ("" + n).trim() : n + "px";
    }
    function gn(t, n) {
      t = t.style;
      for (var i in n) if (n.hasOwnProperty(i)) {
        var a = i.indexOf("--") === 0, d = mn(i, n[i], a);
        i === "float" && (i = "cssFloat"), a ? t.setProperty(i, d) : t[i] = d;
      }
    }
    var Yn = B({
      menuitem: true
    }, {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    });
    function St(t, n) {
      if (n) {
        if (Yn[t] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(o(137, t));
        if (n.dangerouslySetInnerHTML != null) {
          if (n.children != null) throw Error(o(60));
          if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(o(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(o(62));
      }
    }
    function tn(t, n) {
      if (t.indexOf("-") === -1) return typeof n.is == "string";
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Er = null;
    function kr(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var In = null, yn = null, bn = null;
    function vn(t) {
      if (t = ii(t)) {
        if (typeof In != "function") throw Error(o(280));
        var n = t.stateNode;
        n && (n = _s(n), In(t.stateNode, t.type, n));
      }
    }
    function Wi(t) {
      yn ? bn ? bn.push(t) : bn = [
        t
      ] : yn = t;
    }
    function Yi() {
      if (yn) {
        var t = yn, n = bn;
        if (bn = yn = null, vn(t), n) for (t = 0; t < n.length; t++) vn(n[t]);
      }
    }
    function Xi(t, n) {
      return t(n);
    }
    function Gi() {
    }
    var Do = false;
    function Ki(t, n, i) {
      if (Do) return t(n, i);
      Do = true;
      try {
        return Xi(t, n, i);
      } finally {
        Do = false, (yn !== null || bn !== null) && (Gi(), Yi());
      }
    }
    function Cr(t, n) {
      var i = t.stateNode;
      if (i === null) return null;
      var a = _s(i);
      if (a === null) return null;
      i = a[n];
      e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
          break e;
        default:
          t = false;
      }
      if (t) return null;
      if (i && typeof i != "function") throw Error(o(231, n, typeof i));
      return i;
    }
    var Lo = false;
    if (f) try {
      var _r = {};
      Object.defineProperty(_r, "passive", {
        get: function() {
          Lo = true;
        }
      }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
    } catch {
      Lo = false;
    }
    function ea(t, n, i, a, d, p, w, M, R) {
      var Y = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(i, Y);
      } catch (oe) {
        this.onError(oe);
      }
    }
    var Nr = false, Xr = null, Gr = false, Oo = null, ta = {
      onError: function(t) {
        Nr = true, Xr = t;
      }
    };
    function na(t, n, i, a, d, p, w, M, R) {
      Nr = false, Xr = null, ea.apply(ta, arguments);
    }
    function Qi(t, n, i, a, d, p, w, M, R) {
      if (na.apply(this, arguments), Nr) {
        if (Nr) {
          var Y = Xr;
          Nr = false, Xr = null;
        } else throw Error(o(198));
        Gr || (Gr = true, Oo = Y);
      }
    }
    function An(t) {
      var n = t, i = t;
      if (t.alternate) for (; n.return; ) n = n.return;
      else {
        t = n;
        do
          n = t, (n.flags & 4098) !== 0 && (i = n.return), t = n.return;
        while (t);
      }
      return n.tag === 3 ? i : null;
    }
    function Zi(t) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
      }
      return null;
    }
    function qi(t) {
      if (An(t) !== t) throw Error(o(188));
    }
    function ra(t) {
      var n = t.alternate;
      if (!n) {
        if (n = An(t), n === null) throw Error(o(188));
        return n !== t ? null : t;
      }
      for (var i = t, a = n; ; ) {
        var d = i.return;
        if (d === null) break;
        var p = d.alternate;
        if (p === null) {
          if (a = d.return, a !== null) {
            i = a;
            continue;
          }
          break;
        }
        if (d.child === p.child) {
          for (p = d.child; p; ) {
            if (p === i) return qi(d), t;
            if (p === a) return qi(d), n;
            p = p.sibling;
          }
          throw Error(o(188));
        }
        if (i.return !== a.return) i = d, a = p;
        else {
          for (var w = false, M = d.child; M; ) {
            if (M === i) {
              w = true, i = d, a = p;
              break;
            }
            if (M === a) {
              w = true, a = d, i = p;
              break;
            }
            M = M.sibling;
          }
          if (!w) {
            for (M = p.child; M; ) {
              if (M === i) {
                w = true, i = p, a = d;
                break;
              }
              if (M === a) {
                w = true, a = p, i = d;
                break;
              }
              M = M.sibling;
            }
            if (!w) throw Error(o(189));
          }
        }
        if (i.alternate !== a) throw Error(o(190));
      }
      if (i.tag !== 3) throw Error(o(188));
      return i.stateNode.current === i ? t : n;
    }
    function Ji(t) {
      return t = ra(t), t !== null ? es(t) : null;
    }
    function es(t) {
      if (t.tag === 5 || t.tag === 6) return t;
      for (t = t.child; t !== null; ) {
        var n = es(t);
        if (n !== null) return n;
        t = t.sibling;
      }
      return null;
    }
    var ts = r.unstable_scheduleCallback, ns = r.unstable_cancelCallback, rs = r.unstable_shouldYield, oa = r.unstable_requestPaint, Be = r.unstable_now, ia = r.unstable_getCurrentPriorityLevel, Fo = r.unstable_ImmediatePriority, os = r.unstable_UserBlockingPriority, Kr = r.unstable_NormalPriority, is = r.unstable_LowPriority, ss = r.unstable_IdlePriority, Qr = null, Ht = null;
    function Bo(t) {
      if (Ht && typeof Ht.onCommitFiberRoot == "function") try {
        Ht.onCommitFiberRoot(Qr, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
    }
    var nn = Math.clz32 ? Math.clz32 : Qm, Gm = Math.log, Km = Math.LN2;
    function Qm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Gm(t) / Km | 0) | 0;
    }
    var ls = 64, as = 4194304;
    function jo(t) {
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return t & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return t;
      }
    }
    function us(t, n) {
      var i = t.pendingLanes;
      if (i === 0) return 0;
      var a = 0, d = t.suspendedLanes, p = t.pingedLanes, w = i & 268435455;
      if (w !== 0) {
        var M = w & ~d;
        M !== 0 ? a = jo(M) : (p &= w, p !== 0 && (a = jo(p)));
      } else w = i & ~d, w !== 0 ? a = jo(w) : p !== 0 && (a = jo(p));
      if (a === 0) return 0;
      if (n !== 0 && n !== a && (n & d) === 0 && (d = a & -a, p = n & -n, d >= p || d === 16 && (p & 4194240) !== 0)) return n;
      if ((a & 4) !== 0 && (a |= i & 16), n = t.entangledLanes, n !== 0) for (t = t.entanglements, n &= a; 0 < n; ) i = 31 - nn(n), d = 1 << i, a |= t[i], n &= ~d;
      return a;
    }
    function Zm(t, n) {
      switch (t) {
        case 1:
        case 2:
        case 4:
          return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function qm(t, n) {
      for (var i = t.suspendedLanes, a = t.pingedLanes, d = t.expirationTimes, p = t.pendingLanes; 0 < p; ) {
        var w = 31 - nn(p), M = 1 << w, R = d[w];
        R === -1 ? ((M & i) === 0 || (M & a) !== 0) && (d[w] = Zm(M, n)) : R <= n && (t.expiredLanes |= M), p &= ~M;
      }
    }
    function sa(t) {
      return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
    }
    function sd() {
      var t = ls;
      return ls <<= 1, (ls & 4194240) === 0 && (ls = 64), t;
    }
    function la(t) {
      for (var n = [], i = 0; 31 > i; i++) n.push(t);
      return n;
    }
    function Ho(t, n, i) {
      t.pendingLanes |= n, n !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, n = 31 - nn(n), t[n] = i;
    }
    function Jm(t, n) {
      var i = t.pendingLanes & ~n;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= n, t.mutableReadLanes &= n, t.entangledLanes &= n, n = t.entanglements;
      var a = t.eventTimes;
      for (t = t.expirationTimes; 0 < i; ) {
        var d = 31 - nn(i), p = 1 << d;
        n[d] = 0, a[d] = -1, t[d] = -1, i &= ~p;
      }
    }
    function aa(t, n) {
      var i = t.entangledLanes |= n;
      for (t = t.entanglements; i; ) {
        var a = 31 - nn(i), d = 1 << a;
        d & n | t[a] & n && (t[a] |= n), i &= ~d;
      }
    }
    var Ae = 0;
    function ld(t) {
      return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var ad, ua, ud, cd, dd, ca = false, cs = [], Xn = null, Gn = null, Kn = null, Vo = /* @__PURE__ */ new Map(), Uo = /* @__PURE__ */ new Map(), Qn = [], eg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function fd(t, n) {
      switch (t) {
        case "focusin":
        case "focusout":
          Xn = null;
          break;
        case "dragenter":
        case "dragleave":
          Gn = null;
          break;
        case "mouseover":
        case "mouseout":
          Kn = null;
          break;
        case "pointerover":
        case "pointerout":
          Vo.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Uo.delete(n.pointerId);
      }
    }
    function Wo(t, n, i, a, d, p) {
      return t === null || t.nativeEvent !== p ? (t = {
        blockedOn: n,
        domEventName: i,
        eventSystemFlags: a,
        nativeEvent: p,
        targetContainers: [
          d
        ]
      }, n !== null && (n = ii(n), n !== null && ua(n)), t) : (t.eventSystemFlags |= a, n = t.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), t);
    }
    function tg(t, n, i, a, d) {
      switch (n) {
        case "focusin":
          return Xn = Wo(Xn, t, n, i, a, d), true;
        case "dragenter":
          return Gn = Wo(Gn, t, n, i, a, d), true;
        case "mouseover":
          return Kn = Wo(Kn, t, n, i, a, d), true;
        case "pointerover":
          var p = d.pointerId;
          return Vo.set(p, Wo(Vo.get(p) || null, t, n, i, a, d)), true;
        case "gotpointercapture":
          return p = d.pointerId, Uo.set(p, Wo(Uo.get(p) || null, t, n, i, a, d)), true;
      }
      return false;
    }
    function hd(t) {
      var n = Mr(t.target);
      if (n !== null) {
        var i = An(n);
        if (i !== null) {
          if (n = i.tag, n === 13) {
            if (n = Zi(i), n !== null) {
              t.blockedOn = n, dd(t.priority, function() {
                ud(i);
              });
              return;
            }
          } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function ds(t) {
      if (t.blockedOn !== null) return false;
      for (var n = t.targetContainers; 0 < n.length; ) {
        var i = fa(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
        if (i === null) {
          i = t.nativeEvent;
          var a = new i.constructor(i.type, i);
          Er = a, i.target.dispatchEvent(a), Er = null;
        } else return n = ii(i), n !== null && ua(n), t.blockedOn = i, false;
        n.shift();
      }
      return true;
    }
    function pd(t, n, i) {
      ds(t) && i.delete(n);
    }
    function ng() {
      ca = false, Xn !== null && ds(Xn) && (Xn = null), Gn !== null && ds(Gn) && (Gn = null), Kn !== null && ds(Kn) && (Kn = null), Vo.forEach(pd), Uo.forEach(pd);
    }
    function Yo(t, n) {
      t.blockedOn === n && (t.blockedOn = null, ca || (ca = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, ng)));
    }
    function Xo(t) {
      function n(d) {
        return Yo(d, t);
      }
      if (0 < cs.length) {
        Yo(cs[0], t);
        for (var i = 1; i < cs.length; i++) {
          var a = cs[i];
          a.blockedOn === t && (a.blockedOn = null);
        }
      }
      for (Xn !== null && Yo(Xn, t), Gn !== null && Yo(Gn, t), Kn !== null && Yo(Kn, t), Vo.forEach(n), Uo.forEach(n), i = 0; i < Qn.length; i++) a = Qn[i], a.blockedOn === t && (a.blockedOn = null);
      for (; 0 < Qn.length && (i = Qn[0], i.blockedOn === null); ) hd(i), i.blockedOn === null && Qn.shift();
    }
    var Zr = b.ReactCurrentBatchConfig, fs = true;
    function rg(t, n, i, a) {
      var d = Ae, p = Zr.transition;
      Zr.transition = null;
      try {
        Ae = 1, da(t, n, i, a);
      } finally {
        Ae = d, Zr.transition = p;
      }
    }
    function og(t, n, i, a) {
      var d = Ae, p = Zr.transition;
      Zr.transition = null;
      try {
        Ae = 4, da(t, n, i, a);
      } finally {
        Ae = d, Zr.transition = p;
      }
    }
    function da(t, n, i, a) {
      if (fs) {
        var d = fa(t, n, i, a);
        if (d === null) ba(t, n, a, hs, i), fd(t, a);
        else if (tg(d, t, n, i, a)) a.stopPropagation();
        else if (fd(t, a), n & 4 && -1 < eg.indexOf(t)) {
          for (; d !== null; ) {
            var p = ii(d);
            if (p !== null && ad(p), p = fa(t, n, i, a), p === null && ba(t, n, a, hs, i), p === d) break;
            d = p;
          }
          d !== null && a.stopPropagation();
        } else ba(t, n, a, null, i);
      }
    }
    var hs = null;
    function fa(t, n, i, a) {
      if (hs = null, t = kr(a), t = Mr(t), t !== null) if (n = An(t), n === null) t = null;
      else if (i = n.tag, i === 13) {
        if (t = Zi(n), t !== null) return t;
        t = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else n !== t && (t = null);
      return hs = t, null;
    }
    function md(t) {
      switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ia()) {
            case Fo:
              return 1;
            case os:
              return 4;
            case Kr:
            case is:
              return 16;
            case ss:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Zn = null, ha = null, ps = null;
    function gd() {
      if (ps) return ps;
      var t, n = ha, i = n.length, a, d = "value" in Zn ? Zn.value : Zn.textContent, p = d.length;
      for (t = 0; t < i && n[t] === d[t]; t++) ;
      var w = i - t;
      for (a = 1; a <= w && n[i - a] === d[p - a]; a++) ;
      return ps = d.slice(t, 1 < a ? 1 - a : void 0);
    }
    function ms(t) {
      var n = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function gs() {
      return true;
    }
    function yd() {
      return false;
    }
    function Tt(t) {
      function n(i, a, d, p, w) {
        this._reactName = i, this._targetInst = d, this.type = a, this.nativeEvent = p, this.target = w, this.currentTarget = null;
        for (var M in t) t.hasOwnProperty(M) && (i = t[M], this[M] = i ? i(p) : p[M]);
        return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? gs : yd, this.isPropagationStopped = yd, this;
      }
      return B(n.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = false), this.isDefaultPrevented = gs);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = true), this.isPropagationStopped = gs);
        },
        persist: function() {
        },
        isPersistent: gs
      }), n;
    }
    var qr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, pa = Tt(qr), Go = B({}, qr, {
      view: 0,
      detail: 0
    }), ig = Tt(Go), ma, ga, Ko, ys = B({}, Go, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: va,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Ko && (Ko && t.type === "mousemove" ? (ma = t.screenX - Ko.screenX, ga = t.screenY - Ko.screenY) : ga = ma = 0, Ko = t), ma);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : ga;
      }
    }), vd = Tt(ys), sg = B({}, ys, {
      dataTransfer: 0
    }), lg = Tt(sg), ag = B({}, Go, {
      relatedTarget: 0
    }), ya = Tt(ag), ug = B({}, qr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cg = Tt(ug), dg = B({}, qr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), fg = Tt(dg), hg = B({}, qr, {
      data: 0
    }), wd = Tt(hg), pg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, mg = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, gg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function yg(t) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(t) : (t = gg[t]) ? !!n[t] : false;
    }
    function va() {
      return yg;
    }
    var vg = B({}, Go, {
      key: function(t) {
        if (t.key) {
          var n = pg[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress" ? (t = ms(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? mg[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: va,
      charCode: function(t) {
        return t.type === "keypress" ? ms(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? ms(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), wg = Tt(vg), xg = B({}, ys, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), xd = Tt(xg), Sg = B({}, Go, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: va
    }), Eg = Tt(Sg), kg = B({}, qr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Cg = Tt(kg), _g = B({}, ys, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Ng = Tt(_g), Mg = [
      9,
      13,
      27,
      32
    ], wa = f && "CompositionEvent" in window, Qo = null;
    f && "documentMode" in document && (Qo = document.documentMode);
    var Ig = f && "TextEvent" in window && !Qo, Sd = f && (!wa || Qo && 8 < Qo && 11 >= Qo), Ed = " ", kd = false;
    function Cd(t, n) {
      switch (t) {
        case "keyup":
          return Mg.indexOf(n.keyCode) !== -1;
        case "keydown":
          return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function _d(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var Jr = false;
    function bg(t, n) {
      switch (t) {
        case "compositionend":
          return _d(n);
        case "keypress":
          return n.which !== 32 ? null : (kd = true, Ed);
        case "textInput":
          return t = n.data, t === Ed && kd ? null : t;
        default:
          return null;
      }
    }
    function Ag(t, n) {
      if (Jr) return t === "compositionend" || !wa && Cd(t, n) ? (t = gd(), ps = ha = Zn = null, Jr = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
            if (n.char && 1 < n.char.length) return n.char;
            if (n.which) return String.fromCharCode(n.which);
          }
          return null;
        case "compositionend":
          return Sd && n.locale !== "ko" ? null : n.data;
        default:
          return null;
      }
    }
    var Tg = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function Nd(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n === "input" ? !!Tg[t.type] : n === "textarea";
    }
    function Md(t, n, i, a) {
      Wi(a), n = Es(n, "onChange"), 0 < n.length && (i = new pa("onChange", "change", null, i, a), t.push({
        event: i,
        listeners: n
      }));
    }
    var Zo = null, qo = null;
    function Rg(t) {
      Wd(t, 0);
    }
    function vs(t) {
      var n = oo(t);
      if (Ue(n)) return t;
    }
    function Pg(t, n) {
      if (t === "change") return n;
    }
    var Id = false;
    if (f) {
      var xa;
      if (f) {
        var Sa = "oninput" in document;
        if (!Sa) {
          var bd = document.createElement("div");
          bd.setAttribute("oninput", "return;"), Sa = typeof bd.oninput == "function";
        }
        xa = Sa;
      } else xa = false;
      Id = xa && (!document.documentMode || 9 < document.documentMode);
    }
    function Ad() {
      Zo && (Zo.detachEvent("onpropertychange", Td), qo = Zo = null);
    }
    function Td(t) {
      if (t.propertyName === "value" && vs(qo)) {
        var n = [];
        Md(n, qo, t, kr(t)), Ki(Rg, n);
      }
    }
    function $g(t, n, i) {
      t === "focusin" ? (Ad(), Zo = n, qo = i, Zo.attachEvent("onpropertychange", Td)) : t === "focusout" && Ad();
    }
    function zg(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return vs(qo);
    }
    function Dg(t, n) {
      if (t === "click") return vs(n);
    }
    function Lg(t, n) {
      if (t === "input" || t === "change") return vs(n);
    }
    function Og(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var rn = typeof Object.is == "function" ? Object.is : Og;
    function Jo(t, n) {
      if (rn(t, n)) return true;
      if (typeof t != "object" || t === null || typeof n != "object" || n === null) return false;
      var i = Object.keys(t), a = Object.keys(n);
      if (i.length !== a.length) return false;
      for (a = 0; a < i.length; a++) {
        var d = i[a];
        if (!m.call(n, d) || !rn(t[d], n[d])) return false;
      }
      return true;
    }
    function Rd(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Pd(t, n) {
      var i = Rd(t);
      t = 0;
      for (var a; i; ) {
        if (i.nodeType === 3) {
          if (a = t + i.textContent.length, t <= n && a >= n) return {
            node: i,
            offset: n - t
          };
          t = a;
        }
        e: {
          for (; i; ) {
            if (i.nextSibling) {
              i = i.nextSibling;
              break e;
            }
            i = i.parentNode;
          }
          i = void 0;
        }
        i = Rd(i);
      }
    }
    function $d(t, n) {
      return t && n ? t === n ? true : t && t.nodeType === 3 ? false : n && n.nodeType === 3 ? $d(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : false : false;
    }
    function zd() {
      for (var t = window, n = Ke(); n instanceof t.HTMLIFrameElement; ) {
        try {
          var i = typeof n.contentWindow.location.href == "string";
        } catch {
          i = false;
        }
        if (i) t = n.contentWindow;
        else break;
        n = Ke(t.document);
      }
      return n;
    }
    function Ea(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
    }
    function Fg(t) {
      var n = zd(), i = t.focusedElem, a = t.selectionRange;
      if (n !== i && i && i.ownerDocument && $d(i.ownerDocument.documentElement, i)) {
        if (a !== null && Ea(i)) {
          if (n = a.start, t = a.end, t === void 0 && (t = n), "selectionStart" in i) i.selectionStart = n, i.selectionEnd = Math.min(t, i.value.length);
          else if (t = (n = i.ownerDocument || document) && n.defaultView || window, t.getSelection) {
            t = t.getSelection();
            var d = i.textContent.length, p = Math.min(a.start, d);
            a = a.end === void 0 ? p : Math.min(a.end, d), !t.extend && p > a && (d = a, a = p, p = d), d = Pd(i, p);
            var w = Pd(i, a);
            d && w && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== w.node || t.focusOffset !== w.offset) && (n = n.createRange(), n.setStart(d.node, d.offset), t.removeAllRanges(), p > a ? (t.addRange(n), t.extend(w.node, w.offset)) : (n.setEnd(w.node, w.offset), t.addRange(n)));
          }
        }
        for (n = [], t = i; t = t.parentNode; ) t.nodeType === 1 && n.push({
          element: t,
          left: t.scrollLeft,
          top: t.scrollTop
        });
        for (typeof i.focus == "function" && i.focus(), i = 0; i < n.length; i++) t = n[i], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
      }
    }
    var Bg = f && "documentMode" in document && 11 >= document.documentMode, eo = null, ka = null, ei = null, Ca = false;
    function Dd(t, n, i) {
      var a = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
      Ca || eo == null || eo !== Ke(a) || (a = eo, "selectionStart" in a && Ea(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), ei && Jo(ei, a) || (ei = a, a = Es(ka, "onSelect"), 0 < a.length && (n = new pa("onSelect", "select", null, n, i), t.push({
        event: n,
        listeners: a
      }), n.target = eo)));
    }
    function ws(t, n) {
      var i = {};
      return i[t.toLowerCase()] = n.toLowerCase(), i["Webkit" + t] = "webkit" + n, i["Moz" + t] = "moz" + n, i;
    }
    var to = {
      animationend: ws("Animation", "AnimationEnd"),
      animationiteration: ws("Animation", "AnimationIteration"),
      animationstart: ws("Animation", "AnimationStart"),
      transitionend: ws("Transition", "TransitionEnd")
    }, _a = {}, Ld = {};
    f && (Ld = document.createElement("div").style, "AnimationEvent" in window || (delete to.animationend.animation, delete to.animationiteration.animation, delete to.animationstart.animation), "TransitionEvent" in window || delete to.transitionend.transition);
    function xs(t) {
      if (_a[t]) return _a[t];
      if (!to[t]) return t;
      var n = to[t], i;
      for (i in n) if (n.hasOwnProperty(i) && i in Ld) return _a[t] = n[i];
      return t;
    }
    var Od = xs("animationend"), Fd = xs("animationiteration"), Bd = xs("animationstart"), jd = xs("transitionend"), Hd = /* @__PURE__ */ new Map(), Vd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function qn(t, n) {
      Hd.set(t, n), u(n, [
        t
      ]);
    }
    for (var Na = 0; Na < Vd.length; Na++) {
      var Ma = Vd[Na], jg = Ma.toLowerCase(), Hg = Ma[0].toUpperCase() + Ma.slice(1);
      qn(jg, "on" + Hg);
    }
    qn(Od, "onAnimationEnd"), qn(Fd, "onAnimationIteration"), qn(Bd, "onAnimationStart"), qn("dblclick", "onDoubleClick"), qn("focusin", "onFocus"), qn("focusout", "onBlur"), qn(jd, "onTransitionEnd"), c("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), c("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), c("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), c("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));
    function Ud(t, n, i) {
      var a = t.type || "unknown-event";
      t.currentTarget = i, Qi(a, n, void 0, t), t.currentTarget = null;
    }
    function Wd(t, n) {
      n = (n & 4) !== 0;
      for (var i = 0; i < t.length; i++) {
        var a = t[i], d = a.event;
        a = a.listeners;
        e: {
          var p = void 0;
          if (n) for (var w = a.length - 1; 0 <= w; w--) {
            var M = a[w], R = M.instance, Y = M.currentTarget;
            if (M = M.listener, R !== p && d.isPropagationStopped()) break e;
            Ud(d, M, Y), p = R;
          }
          else for (w = 0; w < a.length; w++) {
            if (M = a[w], R = M.instance, Y = M.currentTarget, M = M.listener, R !== p && d.isPropagationStopped()) break e;
            Ud(d, M, Y), p = R;
          }
        }
      }
      if (Gr) throw t = Oo, Gr = false, Oo = null, t;
    }
    function De(t, n) {
      var i = n[za];
      i === void 0 && (i = n[za] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      i.has(a) || (Yd(n, t, 2, false), i.add(a));
    }
    function Ia(t, n, i) {
      var a = 0;
      n && (a |= 4), Yd(i, t, a, n);
    }
    var Ss = "_reactListening" + Math.random().toString(36).slice(2);
    function ni(t) {
      if (!t[Ss]) {
        t[Ss] = true, s.forEach(function(i) {
          i !== "selectionchange" && (Vg.has(i) || Ia(i, false, t), Ia(i, true, t));
        });
        var n = t.nodeType === 9 ? t : t.ownerDocument;
        n === null || n[Ss] || (n[Ss] = true, Ia("selectionchange", false, n));
      }
    }
    function Yd(t, n, i, a) {
      switch (md(n)) {
        case 1:
          var d = rg;
          break;
        case 4:
          d = og;
          break;
        default:
          d = da;
      }
      i = d.bind(null, n, i, t), d = void 0, !Lo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = true), a ? d !== void 0 ? t.addEventListener(n, i, {
        capture: true,
        passive: d
      }) : t.addEventListener(n, i, true) : d !== void 0 ? t.addEventListener(n, i, {
        passive: d
      }) : t.addEventListener(n, i, false);
    }
    function ba(t, n, i, a, d) {
      var p = a;
      if ((n & 1) === 0 && (n & 2) === 0 && a !== null) e: for (; ; ) {
        if (a === null) return;
        var w = a.tag;
        if (w === 3 || w === 4) {
          var M = a.stateNode.containerInfo;
          if (M === d || M.nodeType === 8 && M.parentNode === d) break;
          if (w === 4) for (w = a.return; w !== null; ) {
            var R = w.tag;
            if ((R === 3 || R === 4) && (R = w.stateNode.containerInfo, R === d || R.nodeType === 8 && R.parentNode === d)) return;
            w = w.return;
          }
          for (; M !== null; ) {
            if (w = Mr(M), w === null) return;
            if (R = w.tag, R === 5 || R === 6) {
              a = p = w;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
      Ki(function() {
        var Y = p, oe = kr(i), ie = [];
        e: {
          var ne = Hd.get(t);
          if (ne !== void 0) {
            var ue = pa, de = t;
            switch (t) {
              case "keypress":
                if (ms(i) === 0) break e;
              case "keydown":
              case "keyup":
                ue = wg;
                break;
              case "focusin":
                de = "focus", ue = ya;
                break;
              case "focusout":
                de = "blur", ue = ya;
                break;
              case "beforeblur":
              case "afterblur":
                ue = ya;
                break;
              case "click":
                if (i.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                ue = vd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                ue = lg;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                ue = Eg;
                break;
              case Od:
              case Fd:
              case Bd:
                ue = cg;
                break;
              case jd:
                ue = Cg;
                break;
              case "scroll":
                ue = ig;
                break;
              case "wheel":
                ue = Ng;
                break;
              case "copy":
              case "cut":
              case "paste":
                ue = fg;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                ue = xd;
            }
            var fe = (n & 4) !== 0, Ge = !fe && t === "scroll", j = fe ? ne !== null ? ne + "Capture" : null : ne;
            fe = [];
            for (var D = Y, U; D !== null; ) {
              U = D;
              var se = U.stateNode;
              if (U.tag === 5 && se !== null && (U = se, j !== null && (se = Cr(D, j), se != null && fe.push(ri(D, se, U)))), Ge) break;
              D = D.return;
            }
            0 < fe.length && (ne = new ue(ne, de, null, i, oe), ie.push({
              event: ne,
              listeners: fe
            }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (ne = t === "mouseover" || t === "pointerover", ue = t === "mouseout" || t === "pointerout", ne && i !== Er && (de = i.relatedTarget || i.fromElement) && (Mr(de) || de[Tn])) break e;
            if ((ue || ne) && (ne = oe.window === oe ? oe : (ne = oe.ownerDocument) ? ne.defaultView || ne.parentWindow : window, ue ? (de = i.relatedTarget || i.toElement, ue = Y, de = de ? Mr(de) : null, de !== null && (Ge = An(de), de !== Ge || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = Y), ue !== de)) {
              if (fe = vd, se = "onMouseLeave", j = "onMouseEnter", D = "mouse", (t === "pointerout" || t === "pointerover") && (fe = xd, se = "onPointerLeave", j = "onPointerEnter", D = "pointer"), Ge = ue == null ? ne : oo(ue), U = de == null ? ne : oo(de), ne = new fe(se, D + "leave", ue, i, oe), ne.target = Ge, ne.relatedTarget = U, se = null, Mr(oe) === Y && (fe = new fe(j, D + "enter", de, i, oe), fe.target = U, fe.relatedTarget = Ge, se = fe), Ge = se, ue && de) t: {
                for (fe = ue, j = de, D = 0, U = fe; U; U = no(U)) D++;
                for (U = 0, se = j; se; se = no(se)) U++;
                for (; 0 < D - U; ) fe = no(fe), D--;
                for (; 0 < U - D; ) j = no(j), U--;
                for (; D--; ) {
                  if (fe === j || j !== null && fe === j.alternate) break t;
                  fe = no(fe), j = no(j);
                }
                fe = null;
              }
              else fe = null;
              ue !== null && Xd(ie, ne, ue, fe, false), de !== null && Ge !== null && Xd(ie, Ge, de, fe, true);
            }
          }
          e: {
            if (ne = Y ? oo(Y) : window, ue = ne.nodeName && ne.nodeName.toLowerCase(), ue === "select" || ue === "input" && ne.type === "file") var pe = Pg;
            else if (Nd(ne)) if (Id) pe = Lg;
            else {
              pe = zg;
              var we = $g;
            }
            else (ue = ne.nodeName) && ue.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (pe = Dg);
            if (pe && (pe = pe(t, Y))) {
              Md(ie, pe, i, oe);
              break e;
            }
            we && we(t, ne, Y), t === "focusout" && (we = ne._wrapperState) && we.controlled && ne.type === "number" && qe(ne, "number", ne.value);
          }
          switch (we = Y ? oo(Y) : window, t) {
            case "focusin":
              (Nd(we) || we.contentEditable === "true") && (eo = we, ka = Y, ei = null);
              break;
            case "focusout":
              ei = ka = eo = null;
              break;
            case "mousedown":
              Ca = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ca = false, Dd(ie, i, oe);
              break;
            case "selectionchange":
              if (Bg) break;
            case "keydown":
            case "keyup":
              Dd(ie, i, oe);
          }
          var xe;
          if (wa) e: {
            switch (t) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
          else Jr ? Cd(t, i) && (Ee = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Ee = "onCompositionStart");
          Ee && (Sd && i.locale !== "ko" && (Jr || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Jr && (xe = gd()) : (Zn = oe, ha = "value" in Zn ? Zn.value : Zn.textContent, Jr = true)), we = Es(Y, Ee), 0 < we.length && (Ee = new wd(Ee, t, null, i, oe), ie.push({
            event: Ee,
            listeners: we
          }), xe ? Ee.data = xe : (xe = _d(i), xe !== null && (Ee.data = xe)))), (xe = Ig ? bg(t, i) : Ag(t, i)) && (Y = Es(Y, "onBeforeInput"), 0 < Y.length && (oe = new wd("onBeforeInput", "beforeinput", null, i, oe), ie.push({
            event: oe,
            listeners: Y
          }), oe.data = xe));
        }
        Wd(ie, n);
      });
    }
    function ri(t, n, i) {
      return {
        instance: t,
        listener: n,
        currentTarget: i
      };
    }
    function Es(t, n) {
      for (var i = n + "Capture", a = []; t !== null; ) {
        var d = t, p = d.stateNode;
        d.tag === 5 && p !== null && (d = p, p = Cr(t, i), p != null && a.unshift(ri(t, p, d)), p = Cr(t, n), p != null && a.push(ri(t, p, d))), t = t.return;
      }
      return a;
    }
    function no(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5);
      return t || null;
    }
    function Xd(t, n, i, a, d) {
      for (var p = n._reactName, w = []; i !== null && i !== a; ) {
        var M = i, R = M.alternate, Y = M.stateNode;
        if (R !== null && R === a) break;
        M.tag === 5 && Y !== null && (M = Y, d ? (R = Cr(i, p), R != null && w.unshift(ri(i, R, M))) : d || (R = Cr(i, p), R != null && w.push(ri(i, R, M)))), i = i.return;
      }
      w.length !== 0 && t.push({
        event: n,
        listeners: w
      });
    }
    var Ug = /\r\n?/g, Wg = /\u0000|\uFFFD/g;
    function Gd(t) {
      return (typeof t == "string" ? t : "" + t).replace(Ug, `
`).replace(Wg, "");
    }
    function ks(t, n, i) {
      if (n = Gd(n), Gd(t) !== n && i) throw Error(o(425));
    }
    function Cs() {
    }
    var Aa = null, Ta = null;
    function Ra(t, n) {
      return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var Pa = typeof setTimeout == "function" ? setTimeout : void 0, Yg = typeof clearTimeout == "function" ? clearTimeout : void 0, Kd = typeof Promise == "function" ? Promise : void 0, Xg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kd < "u" ? function(t) {
      return Kd.resolve(null).then(t).catch(Gg);
    } : Pa;
    function Gg(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function $a(t, n) {
      var i = n, a = 0;
      do {
        var d = i.nextSibling;
        if (t.removeChild(i), d && d.nodeType === 8) if (i = d.data, i === "/$") {
          if (a === 0) {
            t.removeChild(d), Xo(n);
            return;
          }
          a--;
        } else i !== "$" && i !== "$?" && i !== "$!" || a++;
        i = d;
      } while (i);
      Xo(n);
    }
    function Jn(t) {
      for (; t != null; t = t.nextSibling) {
        var n = t.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
          if (n = t.data, n === "$" || n === "$!" || n === "$?") break;
          if (n === "/$") return null;
        }
      }
      return t;
    }
    function Qd(t) {
      t = t.previousSibling;
      for (var n = 0; t; ) {
        if (t.nodeType === 8) {
          var i = t.data;
          if (i === "$" || i === "$!" || i === "$?") {
            if (n === 0) return t;
            n--;
          } else i === "/$" && n++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    var ro = Math.random().toString(36).slice(2), wn = "__reactFiber$" + ro, oi = "__reactProps$" + ro, Tn = "__reactContainer$" + ro, za = "__reactEvents$" + ro, Kg = "__reactListeners$" + ro, Qg = "__reactHandles$" + ro;
    function Mr(t) {
      var n = t[wn];
      if (n) return n;
      for (var i = t.parentNode; i; ) {
        if (n = i[Tn] || i[wn]) {
          if (i = n.alternate, n.child !== null || i !== null && i.child !== null) for (t = Qd(t); t !== null; ) {
            if (i = t[wn]) return i;
            t = Qd(t);
          }
          return n;
        }
        t = i, i = t.parentNode;
      }
      return null;
    }
    function ii(t) {
      return t = t[wn] || t[Tn], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
    }
    function oo(t) {
      if (t.tag === 5 || t.tag === 6) return t.stateNode;
      throw Error(o(33));
    }
    function _s(t) {
      return t[oi] || null;
    }
    var Da = [], io = -1;
    function er(t) {
      return {
        current: t
      };
    }
    function Le(t) {
      0 > io || (t.current = Da[io], Da[io] = null, io--);
    }
    function Pe(t, n) {
      io++, Da[io] = t.current, t.current = n;
    }
    var tr = {}, ct = er(tr), Et = er(false), Ir = tr;
    function so(t, n) {
      var i = t.type.contextTypes;
      if (!i) return tr;
      var a = t.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === n) return a.__reactInternalMemoizedMaskedChildContext;
      var d = {}, p;
      for (p in i) d[p] = n[p];
      return a && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = n, t.__reactInternalMemoizedMaskedChildContext = d), d;
    }
    function kt(t) {
      return t = t.childContextTypes, t != null;
    }
    function Ns() {
      Le(Et), Le(ct);
    }
    function Zd(t, n, i) {
      if (ct.current !== tr) throw Error(o(168));
      Pe(ct, n), Pe(Et, i);
    }
    function qd(t, n, i) {
      var a = t.stateNode;
      if (n = n.childContextTypes, typeof a.getChildContext != "function") return i;
      a = a.getChildContext();
      for (var d in a) if (!(d in n)) throw Error(o(108, he(t) || "Unknown", d));
      return B({}, i, a);
    }
    function Ms(t) {
      return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || tr, Ir = ct.current, Pe(ct, t), Pe(Et, Et.current), true;
    }
    function Jd(t, n, i) {
      var a = t.stateNode;
      if (!a) throw Error(o(169));
      i ? (t = qd(t, n, Ir), a.__reactInternalMemoizedMergedChildContext = t, Le(Et), Le(ct), Pe(ct, t)) : Le(Et), Pe(Et, i);
    }
    var Rn = null, Is = false, La = false;
    function ef(t) {
      Rn === null ? Rn = [
        t
      ] : Rn.push(t);
    }
    function Zg(t) {
      Is = true, ef(t);
    }
    function nr() {
      if (!La && Rn !== null) {
        La = true;
        var t = 0, n = Ae;
        try {
          var i = Rn;
          for (Ae = 1; t < i.length; t++) {
            var a = i[t];
            do
              a = a(true);
            while (a !== null);
          }
          Rn = null, Is = false;
        } catch (d) {
          throw Rn !== null && (Rn = Rn.slice(t + 1)), ts(Fo, nr), d;
        } finally {
          Ae = n, La = false;
        }
      }
      return null;
    }
    var lo = [], ao = 0, bs = null, As = 0, Vt = [], Ut = 0, br = null, Pn = 1, $n = "";
    function Ar(t, n) {
      lo[ao++] = As, lo[ao++] = bs, bs = t, As = n;
    }
    function tf(t, n, i) {
      Vt[Ut++] = Pn, Vt[Ut++] = $n, Vt[Ut++] = br, br = t;
      var a = Pn;
      t = $n;
      var d = 32 - nn(a) - 1;
      a &= ~(1 << d), i += 1;
      var p = 32 - nn(n) + d;
      if (30 < p) {
        var w = d - d % 5;
        p = (a & (1 << w) - 1).toString(32), a >>= w, d -= w, Pn = 1 << 32 - nn(n) + d | i << d | a, $n = p + t;
      } else Pn = 1 << p | i << d | a, $n = t;
    }
    function Oa(t) {
      t.return !== null && (Ar(t, 1), tf(t, 1, 0));
    }
    function Fa(t) {
      for (; t === bs; ) bs = lo[--ao], lo[ao] = null, As = lo[--ao], lo[ao] = null;
      for (; t === br; ) br = Vt[--Ut], Vt[Ut] = null, $n = Vt[--Ut], Vt[Ut] = null, Pn = Vt[--Ut], Vt[Ut] = null;
    }
    var Rt = null, Pt = null, Fe = false, on = null;
    function nf(t, n) {
      var i = Gt(5, null, null, 0);
      i.elementType = "DELETED", i.stateNode = n, i.return = t, n = t.deletions, n === null ? (t.deletions = [
        i
      ], t.flags |= 16) : n.push(i);
    }
    function rf(t, n) {
      switch (t.tag) {
        case 5:
          var i = t.type;
          return n = n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (t.stateNode = n, Rt = t, Pt = Jn(n.firstChild), true) : false;
        case 6:
          return n = t.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (t.stateNode = n, Rt = t, Pt = null, true) : false;
        case 13:
          return n = n.nodeType !== 8 ? null : n, n !== null ? (i = br !== null ? {
            id: Pn,
            overflow: $n
          } : null, t.memoizedState = {
            dehydrated: n,
            treeContext: i,
            retryLane: 1073741824
          }, i = Gt(18, null, null, 0), i.stateNode = n, i.return = t, t.child = i, Rt = t, Pt = null, true) : false;
        default:
          return false;
      }
    }
    function Ba(t) {
      return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
    }
    function ja(t) {
      if (Fe) {
        var n = Pt;
        if (n) {
          var i = n;
          if (!rf(t, n)) {
            if (Ba(t)) throw Error(o(418));
            n = Jn(i.nextSibling);
            var a = Rt;
            n && rf(t, n) ? nf(a, i) : (t.flags = t.flags & -4097 | 2, Fe = false, Rt = t);
          }
        } else {
          if (Ba(t)) throw Error(o(418));
          t.flags = t.flags & -4097 | 2, Fe = false, Rt = t;
        }
      }
    }
    function of(t) {
      for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
      Rt = t;
    }
    function Ts(t) {
      if (t !== Rt) return false;
      if (!Fe) return of(t), Fe = true, false;
      var n;
      if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = t.type, n = n !== "head" && n !== "body" && !Ra(t.type, t.memoizedProps)), n && (n = Pt)) {
        if (Ba(t)) throw sf(), Error(o(418));
        for (; n; ) nf(t, n), n = Jn(n.nextSibling);
      }
      if (of(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
        e: {
          for (t = t.nextSibling, n = 0; t; ) {
            if (t.nodeType === 8) {
              var i = t.data;
              if (i === "/$") {
                if (n === 0) {
                  Pt = Jn(t.nextSibling);
                  break e;
                }
                n--;
              } else i !== "$" && i !== "$!" && i !== "$?" || n++;
            }
            t = t.nextSibling;
          }
          Pt = null;
        }
      } else Pt = Rt ? Jn(t.stateNode.nextSibling) : null;
      return true;
    }
    function sf() {
      for (var t = Pt; t; ) t = Jn(t.nextSibling);
    }
    function uo() {
      Pt = Rt = null, Fe = false;
    }
    function Ha(t) {
      on === null ? on = [
        t
      ] : on.push(t);
    }
    var qg = b.ReactCurrentBatchConfig;
    function si(t, n, i) {
      if (t = i.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (i._owner) {
          if (i = i._owner, i) {
            if (i.tag !== 1) throw Error(o(309));
            var a = i.stateNode;
          }
          if (!a) throw Error(o(147, t));
          var d = a, p = "" + t;
          return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === p ? n.ref : (n = function(w) {
            var M = d.refs;
            w === null ? delete M[p] : M[p] = w;
          }, n._stringRef = p, n);
        }
        if (typeof t != "string") throw Error(o(284));
        if (!i._owner) throw Error(o(290, t));
      }
      return t;
    }
    function Rs(t, n) {
      throw t = Object.prototype.toString.call(n), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t));
    }
    function lf(t) {
      var n = t._init;
      return n(t._payload);
    }
    function af(t) {
      function n(j, D) {
        if (t) {
          var U = j.deletions;
          U === null ? (j.deletions = [
            D
          ], j.flags |= 16) : U.push(D);
        }
      }
      function i(j, D) {
        if (!t) return null;
        for (; D !== null; ) n(j, D), D = D.sibling;
        return null;
      }
      function a(j, D) {
        for (j = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? j.set(D.key, D) : j.set(D.index, D), D = D.sibling;
        return j;
      }
      function d(j, D) {
        return j = cr(j, D), j.index = 0, j.sibling = null, j;
      }
      function p(j, D, U) {
        return j.index = U, t ? (U = j.alternate, U !== null ? (U = U.index, U < D ? (j.flags |= 2, D) : U) : (j.flags |= 2, D)) : (j.flags |= 1048576, D);
      }
      function w(j) {
        return t && j.alternate === null && (j.flags |= 2), j;
      }
      function M(j, D, U, se) {
        return D === null || D.tag !== 6 ? (D = Pu(U, j.mode, se), D.return = j, D) : (D = d(D, U), D.return = j, D);
      }
      function R(j, D, U, se) {
        var pe = U.type;
        return pe === Z ? oe(j, D, U.props.children, se, U.key) : D !== null && (D.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === I && lf(pe) === D.type) ? (se = d(D, U.props), se.ref = si(j, D, U), se.return = j, se) : (se = nl(U.type, U.key, U.props, null, j.mode, se), se.ref = si(j, D, U), se.return = j, se);
      }
      function Y(j, D, U, se) {
        return D === null || D.tag !== 4 || D.stateNode.containerInfo !== U.containerInfo || D.stateNode.implementation !== U.implementation ? (D = $u(U, j.mode, se), D.return = j, D) : (D = d(D, U.children || []), D.return = j, D);
      }
      function oe(j, D, U, se, pe) {
        return D === null || D.tag !== 7 ? (D = Or(U, j.mode, se, pe), D.return = j, D) : (D = d(D, U), D.return = j, D);
      }
      function ie(j, D, U) {
        if (typeof D == "string" && D !== "" || typeof D == "number") return D = Pu("" + D, j.mode, U), D.return = j, D;
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case X:
              return U = nl(D.type, D.key, D.props, null, j.mode, U), U.ref = si(j, null, D), U.return = j, U;
            case O:
              return D = $u(D, j.mode, U), D.return = j, D;
            case I:
              var se = D._init;
              return ie(j, se(D._payload), U);
          }
          if (yt(D) || P(D)) return D = Or(D, j.mode, U, null), D.return = j, D;
          Rs(j, D);
        }
        return null;
      }
      function ne(j, D, U, se) {
        var pe = D !== null ? D.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number") return pe !== null ? null : M(j, D, "" + U, se);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case X:
              return U.key === pe ? R(j, D, U, se) : null;
            case O:
              return U.key === pe ? Y(j, D, U, se) : null;
            case I:
              return pe = U._init, ne(j, D, pe(U._payload), se);
          }
          if (yt(U) || P(U)) return pe !== null ? null : oe(j, D, U, se, null);
          Rs(j, U);
        }
        return null;
      }
      function ue(j, D, U, se, pe) {
        if (typeof se == "string" && se !== "" || typeof se == "number") return j = j.get(U) || null, M(D, j, "" + se, pe);
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case X:
              return j = j.get(se.key === null ? U : se.key) || null, R(D, j, se, pe);
            case O:
              return j = j.get(se.key === null ? U : se.key) || null, Y(D, j, se, pe);
            case I:
              var we = se._init;
              return ue(j, D, U, we(se._payload), pe);
          }
          if (yt(se) || P(se)) return j = j.get(U) || null, oe(D, j, se, pe, null);
          Rs(D, se);
        }
        return null;
      }
      function de(j, D, U, se) {
        for (var pe = null, we = null, xe = D, Ee = D = 0, it = null; xe !== null && Ee < U.length; Ee++) {
          xe.index > Ee ? (it = xe, xe = null) : it = xe.sibling;
          var Ie = ne(j, xe, U[Ee], se);
          if (Ie === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && Ie.alternate === null && n(j, xe), D = p(Ie, D, Ee), we === null ? pe = Ie : we.sibling = Ie, we = Ie, xe = it;
        }
        if (Ee === U.length) return i(j, xe), Fe && Ar(j, Ee), pe;
        if (xe === null) {
          for (; Ee < U.length; Ee++) xe = ie(j, U[Ee], se), xe !== null && (D = p(xe, D, Ee), we === null ? pe = xe : we.sibling = xe, we = xe);
          return Fe && Ar(j, Ee), pe;
        }
        for (xe = a(j, xe); Ee < U.length; Ee++) it = ue(xe, j, Ee, U[Ee], se), it !== null && (t && it.alternate !== null && xe.delete(it.key === null ? Ee : it.key), D = p(it, D, Ee), we === null ? pe = it : we.sibling = it, we = it);
        return t && xe.forEach(function(dr) {
          return n(j, dr);
        }), Fe && Ar(j, Ee), pe;
      }
      function fe(j, D, U, se) {
        var pe = P(U);
        if (typeof pe != "function") throw Error(o(150));
        if (U = pe.call(U), U == null) throw Error(o(151));
        for (var we = pe = null, xe = D, Ee = D = 0, it = null, Ie = U.next(); xe !== null && !Ie.done; Ee++, Ie = U.next()) {
          xe.index > Ee ? (it = xe, xe = null) : it = xe.sibling;
          var dr = ne(j, xe, Ie.value, se);
          if (dr === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && dr.alternate === null && n(j, xe), D = p(dr, D, Ee), we === null ? pe = dr : we.sibling = dr, we = dr, xe = it;
        }
        if (Ie.done) return i(j, xe), Fe && Ar(j, Ee), pe;
        if (xe === null) {
          for (; !Ie.done; Ee++, Ie = U.next()) Ie = ie(j, Ie.value, se), Ie !== null && (D = p(Ie, D, Ee), we === null ? pe = Ie : we.sibling = Ie, we = Ie);
          return Fe && Ar(j, Ee), pe;
        }
        for (xe = a(j, xe); !Ie.done; Ee++, Ie = U.next()) Ie = ue(xe, j, Ee, Ie.value, se), Ie !== null && (t && Ie.alternate !== null && xe.delete(Ie.key === null ? Ee : Ie.key), D = p(Ie, D, Ee), we === null ? pe = Ie : we.sibling = Ie, we = Ie);
        return t && xe.forEach(function(Ty) {
          return n(j, Ty);
        }), Fe && Ar(j, Ee), pe;
      }
      function Ge(j, D, U, se) {
        if (typeof U == "object" && U !== null && U.type === Z && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case X:
              e: {
                for (var pe = U.key, we = D; we !== null; ) {
                  if (we.key === pe) {
                    if (pe = U.type, pe === Z) {
                      if (we.tag === 7) {
                        i(j, we.sibling), D = d(we, U.props.children), D.return = j, j = D;
                        break e;
                      }
                    } else if (we.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === I && lf(pe) === we.type) {
                      i(j, we.sibling), D = d(we, U.props), D.ref = si(j, we, U), D.return = j, j = D;
                      break e;
                    }
                    i(j, we);
                    break;
                  } else n(j, we);
                  we = we.sibling;
                }
                U.type === Z ? (D = Or(U.props.children, j.mode, se, U.key), D.return = j, j = D) : (se = nl(U.type, U.key, U.props, null, j.mode, se), se.ref = si(j, D, U), se.return = j, j = se);
              }
              return w(j);
            case O:
              e: {
                for (we = U.key; D !== null; ) {
                  if (D.key === we) if (D.tag === 4 && D.stateNode.containerInfo === U.containerInfo && D.stateNode.implementation === U.implementation) {
                    i(j, D.sibling), D = d(D, U.children || []), D.return = j, j = D;
                    break e;
                  } else {
                    i(j, D);
                    break;
                  }
                  else n(j, D);
                  D = D.sibling;
                }
                D = $u(U, j.mode, se), D.return = j, j = D;
              }
              return w(j);
            case I:
              return we = U._init, Ge(j, D, we(U._payload), se);
          }
          if (yt(U)) return de(j, D, U, se);
          if (P(U)) return fe(j, D, U, se);
          Rs(j, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, D !== null && D.tag === 6 ? (i(j, D.sibling), D = d(D, U), D.return = j, j = D) : (i(j, D), D = Pu(U, j.mode, se), D.return = j, j = D), w(j)) : i(j, D);
      }
      return Ge;
    }
    var co = af(true), uf = af(false), Ps = er(null), $s = null, fo = null, Va = null;
    function Ua() {
      Va = fo = $s = null;
    }
    function Wa(t) {
      var n = Ps.current;
      Le(Ps), t._currentValue = n;
    }
    function Ya(t, n, i) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & n) !== n ? (t.childLanes |= n, a !== null && (a.childLanes |= n)) : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n), t === i) break;
        t = t.return;
      }
    }
    function ho(t, n) {
      $s = t, Va = fo = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & n) !== 0 && (Ct = true), t.firstContext = null);
    }
    function Wt(t) {
      var n = t._currentValue;
      if (Va !== t) if (t = {
        context: t,
        memoizedValue: n,
        next: null
      }, fo === null) {
        if ($s === null) throw Error(o(308));
        fo = t, $s.dependencies = {
          lanes: 0,
          firstContext: t
        };
      } else fo = fo.next = t;
      return n;
    }
    var Tr = null;
    function Xa(t) {
      Tr === null ? Tr = [
        t
      ] : Tr.push(t);
    }
    function cf(t, n, i, a) {
      var d = n.interleaved;
      return d === null ? (i.next = i, Xa(n)) : (i.next = d.next, d.next = i), n.interleaved = i, zn(t, a);
    }
    function zn(t, n) {
      t.lanes |= n;
      var i = t.alternate;
      for (i !== null && (i.lanes |= n), i = t, t = t.return; t !== null; ) t.childLanes |= n, i = t.alternate, i !== null && (i.childLanes |= n), i = t, t = t.return;
      return i.tag === 3 ? i.stateNode : null;
    }
    var rr = false;
    function Ga(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: 0
        },
        effects: null
      };
    }
    function df(t, n) {
      t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
      });
    }
    function Dn(t, n) {
      return {
        eventTime: t,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function or(t, n, i) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (Ne & 2) !== 0) {
        var d = a.pending;
        return d === null ? n.next = n : (n.next = d.next, d.next = n), a.pending = n, zn(t, i);
      }
      return d = a.interleaved, d === null ? (n.next = n, Xa(a)) : (n.next = d.next, d.next = n), a.interleaved = n, zn(t, i);
    }
    function zs(t, n, i) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194240) !== 0)) {
        var a = n.lanes;
        a &= t.pendingLanes, i |= a, n.lanes = i, aa(t, i);
      }
    }
    function ff(t, n) {
      var i = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, i === a)) {
        var d = null, p = null;
        if (i = i.firstBaseUpdate, i !== null) {
          do {
            var w = {
              eventTime: i.eventTime,
              lane: i.lane,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null
            };
            p === null ? d = p = w : p = p.next = w, i = i.next;
          } while (i !== null);
          p === null ? d = p = n : p = p.next = n;
        } else d = p = n;
        i = {
          baseState: a.baseState,
          firstBaseUpdate: d,
          lastBaseUpdate: p,
          shared: a.shared,
          effects: a.effects
        }, t.updateQueue = i;
        return;
      }
      t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = n : t.next = n, i.lastBaseUpdate = n;
    }
    function Ds(t, n, i, a) {
      var d = t.updateQueue;
      rr = false;
      var p = d.firstBaseUpdate, w = d.lastBaseUpdate, M = d.shared.pending;
      if (M !== null) {
        d.shared.pending = null;
        var R = M, Y = R.next;
        R.next = null, w === null ? p = Y : w.next = Y, w = R;
        var oe = t.alternate;
        oe !== null && (oe = oe.updateQueue, M = oe.lastBaseUpdate, M !== w && (M === null ? oe.firstBaseUpdate = Y : M.next = Y, oe.lastBaseUpdate = R));
      }
      if (p !== null) {
        var ie = d.baseState;
        w = 0, oe = Y = R = null, M = p;
        do {
          var ne = M.lane, ue = M.eventTime;
          if ((a & ne) === ne) {
            oe !== null && (oe = oe.next = {
              eventTime: ue,
              lane: 0,
              tag: M.tag,
              payload: M.payload,
              callback: M.callback,
              next: null
            });
            e: {
              var de = t, fe = M;
              switch (ne = n, ue = i, fe.tag) {
                case 1:
                  if (de = fe.payload, typeof de == "function") {
                    ie = de.call(ue, ie, ne);
                    break e;
                  }
                  ie = de;
                  break e;
                case 3:
                  de.flags = de.flags & -65537 | 128;
                case 0:
                  if (de = fe.payload, ne = typeof de == "function" ? de.call(ue, ie, ne) : de, ne == null) break e;
                  ie = B({}, ie, ne);
                  break e;
                case 2:
                  rr = true;
              }
            }
            M.callback !== null && M.lane !== 0 && (t.flags |= 64, ne = d.effects, ne === null ? d.effects = [
              M
            ] : ne.push(M));
          } else ue = {
            eventTime: ue,
            lane: ne,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          }, oe === null ? (Y = oe = ue, R = ie) : oe = oe.next = ue, w |= ne;
          if (M = M.next, M === null) {
            if (M = d.shared.pending, M === null) break;
            ne = M, M = ne.next, ne.next = null, d.lastBaseUpdate = ne, d.shared.pending = null;
          }
        } while (true);
        if (oe === null && (R = ie), d.baseState = R, d.firstBaseUpdate = Y, d.lastBaseUpdate = oe, n = d.shared.interleaved, n !== null) {
          d = n;
          do
            w |= d.lane, d = d.next;
          while (d !== n);
        } else p === null && (d.shared.lanes = 0);
        $r |= w, t.lanes = w, t.memoizedState = ie;
      }
    }
    function hf(t, n, i) {
      if (t = n.effects, n.effects = null, t !== null) for (n = 0; n < t.length; n++) {
        var a = t[n], d = a.callback;
        if (d !== null) {
          if (a.callback = null, a = i, typeof d != "function") throw Error(o(191, d));
          d.call(a);
        }
      }
    }
    var li = {}, xn = er(li), ai = er(li), ui = er(li);
    function Rr(t) {
      if (t === li) throw Error(o(174));
      return t;
    }
    function Ka(t, n) {
      switch (Pe(ui, n), Pe(ai, t), Pe(xn, li), t = n.nodeType, t) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : qt(null, "");
          break;
        default:
          t = t === 8 ? n.parentNode : n, n = t.namespaceURI || null, t = t.tagName, n = qt(n, t);
      }
      Le(xn), Pe(xn, n);
    }
    function po() {
      Le(xn), Le(ai), Le(ui);
    }
    function pf(t) {
      Rr(ui.current);
      var n = Rr(xn.current), i = qt(n, t.type);
      n !== i && (Pe(ai, t), Pe(xn, i));
    }
    function Qa(t) {
      ai.current === t && (Le(xn), Le(ai));
    }
    var je = er(0);
    function Ls(t) {
      for (var n = t; n !== null; ) {
        if (n.tag === 13) {
          var i = n.memoizedState;
          if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
          if ((n.flags & 128) !== 0) return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    var Za = [];
    function qa() {
      for (var t = 0; t < Za.length; t++) Za[t]._workInProgressVersionPrimary = null;
      Za.length = 0;
    }
    var Os = b.ReactCurrentDispatcher, Ja = b.ReactCurrentBatchConfig, Pr = 0, He = null, Je = null, rt = null, Fs = false, ci = false, di = 0, Jg = 0;
    function dt() {
      throw Error(o(321));
    }
    function eu(t, n) {
      if (n === null) return false;
      for (var i = 0; i < n.length && i < t.length; i++) if (!rn(t[i], n[i])) return false;
      return true;
    }
    function tu(t, n, i, a, d, p) {
      if (Pr = p, He = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Os.current = t === null || t.memoizedState === null ? ry : oy, t = i(a, d), ci) {
        p = 0;
        do {
          if (ci = false, di = 0, 25 <= p) throw Error(o(301));
          p += 1, rt = Je = null, n.updateQueue = null, Os.current = iy, t = i(a, d);
        } while (ci);
      }
      if (Os.current = Hs, n = Je !== null && Je.next !== null, Pr = 0, rt = Je = He = null, Fs = false, n) throw Error(o(300));
      return t;
    }
    function nu() {
      var t = di !== 0;
      return di = 0, t;
    }
    function Sn() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return rt === null ? He.memoizedState = rt = t : rt = rt.next = t, rt;
    }
    function Yt() {
      if (Je === null) {
        var t = He.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Je.next;
      var n = rt === null ? He.memoizedState : rt.next;
      if (n !== null) rt = n, Je = t;
      else {
        if (t === null) throw Error(o(310));
        Je = t, t = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null
        }, rt === null ? He.memoizedState = rt = t : rt = rt.next = t;
      }
      return rt;
    }
    function fi(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function ru(t) {
      var n = Yt(), i = n.queue;
      if (i === null) throw Error(o(311));
      i.lastRenderedReducer = t;
      var a = Je, d = a.baseQueue, p = i.pending;
      if (p !== null) {
        if (d !== null) {
          var w = d.next;
          d.next = p.next, p.next = w;
        }
        a.baseQueue = d = p, i.pending = null;
      }
      if (d !== null) {
        p = d.next, a = a.baseState;
        var M = w = null, R = null, Y = p;
        do {
          var oe = Y.lane;
          if ((Pr & oe) === oe) R !== null && (R = R.next = {
            lane: 0,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }), a = Y.hasEagerState ? Y.eagerState : t(a, Y.action);
          else {
            var ie = {
              lane: oe,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            };
            R === null ? (M = R = ie, w = a) : R = R.next = ie, He.lanes |= oe, $r |= oe;
          }
          Y = Y.next;
        } while (Y !== null && Y !== p);
        R === null ? w = a : R.next = M, rn(a, n.memoizedState) || (Ct = true), n.memoizedState = a, n.baseState = w, n.baseQueue = R, i.lastRenderedState = a;
      }
      if (t = i.interleaved, t !== null) {
        d = t;
        do
          p = d.lane, He.lanes |= p, $r |= p, d = d.next;
        while (d !== t);
      } else d === null && (i.lanes = 0);
      return [
        n.memoizedState,
        i.dispatch
      ];
    }
    function ou(t) {
      var n = Yt(), i = n.queue;
      if (i === null) throw Error(o(311));
      i.lastRenderedReducer = t;
      var a = i.dispatch, d = i.pending, p = n.memoizedState;
      if (d !== null) {
        i.pending = null;
        var w = d = d.next;
        do
          p = t(p, w.action), w = w.next;
        while (w !== d);
        rn(p, n.memoizedState) || (Ct = true), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), i.lastRenderedState = p;
      }
      return [
        p,
        a
      ];
    }
    function mf() {
    }
    function gf(t, n) {
      var i = He, a = Yt(), d = n(), p = !rn(a.memoizedState, d);
      if (p && (a.memoizedState = d, Ct = true), a = a.queue, iu(wf.bind(null, i, a, t), [
        t
      ]), a.getSnapshot !== n || p || rt !== null && rt.memoizedState.tag & 1) {
        if (i.flags |= 2048, hi(9, vf.bind(null, i, a, d, n), void 0, null), ot === null) throw Error(o(349));
        (Pr & 30) !== 0 || yf(i, n, d);
      }
      return d;
    }
    function yf(t, n, i) {
      t.flags |= 16384, t = {
        getSnapshot: n,
        value: i
      }, n = He.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
      }, He.updateQueue = n, n.stores = [
        t
      ]) : (i = n.stores, i === null ? n.stores = [
        t
      ] : i.push(t));
    }
    function vf(t, n, i, a) {
      n.value = i, n.getSnapshot = a, xf(n) && Sf(t);
    }
    function wf(t, n, i) {
      return i(function() {
        xf(n) && Sf(t);
      });
    }
    function xf(t) {
      var n = t.getSnapshot;
      t = t.value;
      try {
        var i = n();
        return !rn(t, i);
      } catch {
        return true;
      }
    }
    function Sf(t) {
      var n = zn(t, 1);
      n !== null && un(n, t, 1, -1);
    }
    function Ef(t) {
      var n = Sn();
      return typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fi,
        lastRenderedState: t
      }, n.queue = t, t = t.dispatch = ny.bind(null, He, t), [
        n.memoizedState,
        t
      ];
    }
    function hi(t, n, i, a) {
      return t = {
        tag: t,
        create: n,
        destroy: i,
        deps: a,
        next: null
      }, n = He.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
      }, He.updateQueue = n, n.lastEffect = t.next = t) : (i = n.lastEffect, i === null ? n.lastEffect = t.next = t : (a = i.next, i.next = t, t.next = a, n.lastEffect = t)), t;
    }
    function kf() {
      return Yt().memoizedState;
    }
    function Bs(t, n, i, a) {
      var d = Sn();
      He.flags |= t, d.memoizedState = hi(1 | n, i, void 0, a === void 0 ? null : a);
    }
    function js(t, n, i, a) {
      var d = Yt();
      a = a === void 0 ? null : a;
      var p = void 0;
      if (Je !== null) {
        var w = Je.memoizedState;
        if (p = w.destroy, a !== null && eu(a, w.deps)) {
          d.memoizedState = hi(n, i, p, a);
          return;
        }
      }
      He.flags |= t, d.memoizedState = hi(1 | n, i, p, a);
    }
    function Cf(t, n) {
      return Bs(8390656, 8, t, n);
    }
    function iu(t, n) {
      return js(2048, 8, t, n);
    }
    function _f(t, n) {
      return js(4, 2, t, n);
    }
    function Nf(t, n) {
      return js(4, 4, t, n);
    }
    function Mf(t, n) {
      if (typeof n == "function") return t = t(), n(t), function() {
        n(null);
      };
      if (n != null) return t = t(), n.current = t, function() {
        n.current = null;
      };
    }
    function If(t, n, i) {
      return i = i != null ? i.concat([
        t
      ]) : null, js(4, 4, Mf.bind(null, n, t), i);
    }
    function su() {
    }
    function bf(t, n) {
      var i = Yt();
      n = n === void 0 ? null : n;
      var a = i.memoizedState;
      return a !== null && n !== null && eu(n, a[1]) ? a[0] : (i.memoizedState = [
        t,
        n
      ], t);
    }
    function Af(t, n) {
      var i = Yt();
      n = n === void 0 ? null : n;
      var a = i.memoizedState;
      return a !== null && n !== null && eu(n, a[1]) ? a[0] : (t = t(), i.memoizedState = [
        t,
        n
      ], t);
    }
    function Tf(t, n, i) {
      return (Pr & 21) === 0 ? (t.baseState && (t.baseState = false, Ct = true), t.memoizedState = i) : (rn(i, n) || (i = sd(), He.lanes |= i, $r |= i, t.baseState = true), n);
    }
    function ey(t, n) {
      var i = Ae;
      Ae = i !== 0 && 4 > i ? i : 4, t(true);
      var a = Ja.transition;
      Ja.transition = {};
      try {
        t(false), n();
      } finally {
        Ae = i, Ja.transition = a;
      }
    }
    function Rf() {
      return Yt().memoizedState;
    }
    function ty(t, n, i) {
      var a = ar(t);
      if (i = {
        lane: a,
        action: i,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Pf(t)) $f(n, i);
      else if (i = cf(t, n, i, a), i !== null) {
        var d = wt();
        un(i, t, a, d), zf(i, n, a);
      }
    }
    function ny(t, n, i) {
      var a = ar(t), d = {
        lane: a,
        action: i,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Pf(t)) $f(n, d);
      else {
        var p = t.alternate;
        if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
          var w = n.lastRenderedState, M = p(w, i);
          if (d.hasEagerState = true, d.eagerState = M, rn(M, w)) {
            var R = n.interleaved;
            R === null ? (d.next = d, Xa(n)) : (d.next = R.next, R.next = d), n.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
        i = cf(t, n, d, a), i !== null && (d = wt(), un(i, t, a, d), zf(i, n, a));
      }
    }
    function Pf(t) {
      var n = t.alternate;
      return t === He || n !== null && n === He;
    }
    function $f(t, n) {
      ci = Fs = true;
      var i = t.pending;
      i === null ? n.next = n : (n.next = i.next, i.next = n), t.pending = n;
    }
    function zf(t, n, i) {
      if ((i & 4194240) !== 0) {
        var a = n.lanes;
        a &= t.pendingLanes, i |= a, n.lanes = i, aa(t, i);
      }
    }
    var Hs = {
      readContext: Wt,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useInsertionEffect: dt,
      useLayoutEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useMutableSource: dt,
      useSyncExternalStore: dt,
      useId: dt,
      unstable_isNewReconciler: false
    }, ry = {
      readContext: Wt,
      useCallback: function(t, n) {
        return Sn().memoizedState = [
          t,
          n === void 0 ? null : n
        ], t;
      },
      useContext: Wt,
      useEffect: Cf,
      useImperativeHandle: function(t, n, i) {
        return i = i != null ? i.concat([
          t
        ]) : null, Bs(4194308, 4, Mf.bind(null, n, t), i);
      },
      useLayoutEffect: function(t, n) {
        return Bs(4194308, 4, t, n);
      },
      useInsertionEffect: function(t, n) {
        return Bs(4, 2, t, n);
      },
      useMemo: function(t, n) {
        var i = Sn();
        return n = n === void 0 ? null : n, t = t(), i.memoizedState = [
          t,
          n
        ], t;
      },
      useReducer: function(t, n, i) {
        var a = Sn();
        return n = i !== void 0 ? i(n) : n, a.memoizedState = a.baseState = n, t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = ty.bind(null, He, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var n = Sn();
        return t = {
          current: t
        }, n.memoizedState = t;
      },
      useState: Ef,
      useDebugValue: su,
      useDeferredValue: function(t) {
        return Sn().memoizedState = t;
      },
      useTransition: function() {
        var t = Ef(false), n = t[0];
        return t = ey.bind(null, t[1]), Sn().memoizedState = t, [
          n,
          t
        ];
      },
      useMutableSource: function() {
      },
      useSyncExternalStore: function(t, n, i) {
        var a = He, d = Sn();
        if (Fe) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (i = n(), ot === null) throw Error(o(349));
          (Pr & 30) !== 0 || yf(a, n, i);
        }
        d.memoizedState = i;
        var p = {
          value: i,
          getSnapshot: n
        };
        return d.queue = p, Cf(wf.bind(null, a, p, t), [
          t
        ]), a.flags |= 2048, hi(9, vf.bind(null, a, p, i, n), void 0, null), i;
      },
      useId: function() {
        var t = Sn(), n = ot.identifierPrefix;
        if (Fe) {
          var i = $n, a = Pn;
          i = (a & ~(1 << 32 - nn(a) - 1)).toString(32) + i, n = ":" + n + "R" + i, i = di++, 0 < i && (n += "H" + i.toString(32)), n += ":";
        } else i = Jg++, n = ":" + n + "r" + i.toString(32) + ":";
        return t.memoizedState = n;
      },
      unstable_isNewReconciler: false
    }, oy = {
      readContext: Wt,
      useCallback: bf,
      useContext: Wt,
      useEffect: iu,
      useImperativeHandle: If,
      useInsertionEffect: _f,
      useLayoutEffect: Nf,
      useMemo: Af,
      useReducer: ru,
      useRef: kf,
      useState: function() {
        return ru(fi);
      },
      useDebugValue: su,
      useDeferredValue: function(t) {
        var n = Yt();
        return Tf(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = ru(fi)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: mf,
      useSyncExternalStore: gf,
      useId: Rf,
      unstable_isNewReconciler: false
    }, iy = {
      readContext: Wt,
      useCallback: bf,
      useContext: Wt,
      useEffect: iu,
      useImperativeHandle: If,
      useInsertionEffect: _f,
      useLayoutEffect: Nf,
      useMemo: Af,
      useReducer: ou,
      useRef: kf,
      useState: function() {
        return ou(fi);
      },
      useDebugValue: su,
      useDeferredValue: function(t) {
        var n = Yt();
        return Je === null ? n.memoizedState = t : Tf(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = ou(fi)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: mf,
      useSyncExternalStore: gf,
      useId: Rf,
      unstable_isNewReconciler: false
    };
    function sn(t, n) {
      if (t && t.defaultProps) {
        n = B({}, n), t = t.defaultProps;
        for (var i in t) n[i] === void 0 && (n[i] = t[i]);
        return n;
      }
      return n;
    }
    function lu(t, n, i, a) {
      n = t.memoizedState, i = i(a, n), i = i == null ? n : B({}, n, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i);
    }
    var Vs = {
      isMounted: function(t) {
        return (t = t._reactInternals) ? An(t) === t : false;
      },
      enqueueSetState: function(t, n, i) {
        t = t._reactInternals;
        var a = wt(), d = ar(t), p = Dn(a, d);
        p.payload = n, i != null && (p.callback = i), n = or(t, p, d), n !== null && (un(n, t, d, a), zs(n, t, d));
      },
      enqueueReplaceState: function(t, n, i) {
        t = t._reactInternals;
        var a = wt(), d = ar(t), p = Dn(a, d);
        p.tag = 1, p.payload = n, i != null && (p.callback = i), n = or(t, p, d), n !== null && (un(n, t, d, a), zs(n, t, d));
      },
      enqueueForceUpdate: function(t, n) {
        t = t._reactInternals;
        var i = wt(), a = ar(t), d = Dn(i, a);
        d.tag = 2, n != null && (d.callback = n), n = or(t, d, a), n !== null && (un(n, t, a, i), zs(n, t, a));
      }
    };
    function Df(t, n, i, a, d, p, w) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, p, w) : n.prototype && n.prototype.isPureReactComponent ? !Jo(i, a) || !Jo(d, p) : true;
    }
    function Lf(t, n, i) {
      var a = false, d = tr, p = n.contextType;
      return typeof p == "object" && p !== null ? p = Wt(p) : (d = kt(n) ? Ir : ct.current, a = n.contextTypes, p = (a = a != null) ? so(t, d) : tr), n = new n(i, p), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Vs, t.stateNode = n, n._reactInternals = t, a && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = p), n;
    }
    function Of(t, n, i, a) {
      t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, a), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, a), n.state !== t && Vs.enqueueReplaceState(n, n.state, null);
    }
    function au(t, n, i, a) {
      var d = t.stateNode;
      d.props = i, d.state = t.memoizedState, d.refs = {}, Ga(t);
      var p = n.contextType;
      typeof p == "object" && p !== null ? d.context = Wt(p) : (p = kt(n) ? Ir : ct.current, d.context = so(t, p)), d.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (lu(t, n, p, i), d.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (n = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), n !== d.state && Vs.enqueueReplaceState(d, d.state, null), Ds(t, i, d, a), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
    }
    function mo(t, n) {
      try {
        var i = "", a = n;
        do
          i += le(a), a = a.return;
        while (a);
        var d = i;
      } catch (p) {
        d = `
Error generating stack: ` + p.message + `
` + p.stack;
      }
      return {
        value: t,
        source: n,
        stack: d,
        digest: null
      };
    }
    function uu(t, n, i) {
      return {
        value: t,
        source: null,
        stack: i ?? null,
        digest: n ?? null
      };
    }
    function cu(t, n) {
      try {
        console.error(n.value);
      } catch (i) {
        setTimeout(function() {
          throw i;
        });
      }
    }
    var sy = typeof WeakMap == "function" ? WeakMap : Map;
    function Ff(t, n, i) {
      i = Dn(-1, i), i.tag = 3, i.payload = {
        element: null
      };
      var a = n.value;
      return i.callback = function() {
        Qs || (Qs = true, _u = a), cu(t, n);
      }, i;
    }
    function Bf(t, n, i) {
      i = Dn(-1, i), i.tag = 3;
      var a = t.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var d = n.value;
        i.payload = function() {
          return a(d);
        }, i.callback = function() {
          cu(t, n);
        };
      }
      var p = t.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        cu(t, n), typeof a != "function" && (sr === null ? sr = /* @__PURE__ */ new Set([
          this
        ]) : sr.add(this));
        var w = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: w !== null ? w : ""
        });
      }), i;
    }
    function jf(t, n, i) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new sy();
        var d = /* @__PURE__ */ new Set();
        a.set(n, d);
      } else d = a.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), a.set(n, d));
      d.has(i) || (d.add(i), t = xy.bind(null, t, n, i), n.then(t, t));
    }
    function Hf(t) {
      do {
        var n;
        if ((n = t.tag === 13) && (n = t.memoizedState, n = n !== null ? n.dehydrated !== null : true), n) return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Vf(t, n, i, a, d) {
      return (t.mode & 1) === 0 ? (t === n ? t.flags |= 65536 : (t.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (n = Dn(-1, 1), n.tag = 2, or(i, n, 1))), i.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t);
    }
    var ly = b.ReactCurrentOwner, Ct = false;
    function vt(t, n, i, a) {
      n.child = t === null ? uf(n, null, i, a) : co(n, t.child, i, a);
    }
    function Uf(t, n, i, a, d) {
      i = i.render;
      var p = n.ref;
      return ho(n, d), a = tu(t, n, i, a, p, d), i = nu(), t !== null && !Ct ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~d, Ln(t, n, d)) : (Fe && i && Oa(n), n.flags |= 1, vt(t, n, a, d), n.child);
    }
    function Wf(t, n, i, a, d) {
      if (t === null) {
        var p = i.type;
        return typeof p == "function" && !Ru(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (n.tag = 15, n.type = p, Yf(t, n, p, a, d)) : (t = nl(i.type, null, a, n, n.mode, d), t.ref = n.ref, t.return = n, n.child = t);
      }
      if (p = t.child, (t.lanes & d) === 0) {
        var w = p.memoizedProps;
        if (i = i.compare, i = i !== null ? i : Jo, i(w, a) && t.ref === n.ref) return Ln(t, n, d);
      }
      return n.flags |= 1, t = cr(p, a), t.ref = n.ref, t.return = n, n.child = t;
    }
    function Yf(t, n, i, a, d) {
      if (t !== null) {
        var p = t.memoizedProps;
        if (Jo(p, a) && t.ref === n.ref) if (Ct = false, n.pendingProps = a = p, (t.lanes & d) !== 0) (t.flags & 131072) !== 0 && (Ct = true);
        else return n.lanes = t.lanes, Ln(t, n, d);
      }
      return du(t, n, i, a, d);
    }
    function Xf(t, n, i) {
      var a = n.pendingProps, d = a.children, p = t !== null ? t.memoizedState : null;
      if (a.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Pe(yo, $t), $t |= i;
      else {
        if ((i & 1073741824) === 0) return t = p !== null ? p.baseLanes | i : i, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
          baseLanes: t,
          cachePool: null,
          transitions: null
        }, n.updateQueue = null, Pe(yo, $t), $t |= t, null;
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, a = p !== null ? p.baseLanes : i, Pe(yo, $t), $t |= a;
      }
      else p !== null ? (a = p.baseLanes | i, n.memoizedState = null) : a = i, Pe(yo, $t), $t |= a;
      return vt(t, n, d, i), n.child;
    }
    function Gf(t, n) {
      var i = n.ref;
      (t === null && i !== null || t !== null && t.ref !== i) && (n.flags |= 512, n.flags |= 2097152);
    }
    function du(t, n, i, a, d) {
      var p = kt(i) ? Ir : ct.current;
      return p = so(n, p), ho(n, d), i = tu(t, n, i, a, p, d), a = nu(), t !== null && !Ct ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~d, Ln(t, n, d)) : (Fe && a && Oa(n), n.flags |= 1, vt(t, n, i, d), n.child);
    }
    function Kf(t, n, i, a, d) {
      if (kt(i)) {
        var p = true;
        Ms(n);
      } else p = false;
      if (ho(n, d), n.stateNode === null) Ws(t, n), Lf(n, i, a), au(n, i, a, d), a = true;
      else if (t === null) {
        var w = n.stateNode, M = n.memoizedProps;
        w.props = M;
        var R = w.context, Y = i.contextType;
        typeof Y == "object" && Y !== null ? Y = Wt(Y) : (Y = kt(i) ? Ir : ct.current, Y = so(n, Y));
        var oe = i.getDerivedStateFromProps, ie = typeof oe == "function" || typeof w.getSnapshotBeforeUpdate == "function";
        ie || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== a || R !== Y) && Of(n, w, a, Y), rr = false;
        var ne = n.memoizedState;
        w.state = ne, Ds(n, a, w, d), R = n.memoizedState, M !== a || ne !== R || Et.current || rr ? (typeof oe == "function" && (lu(n, i, oe, a), R = n.memoizedState), (M = rr || Df(n, i, M, a, ne, R, Y)) ? (ie || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = a, n.memoizedState = R), w.props = a, w.state = R, w.context = Y, a = M) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), a = false);
      } else {
        w = n.stateNode, df(t, n), M = n.memoizedProps, Y = n.type === n.elementType ? M : sn(n.type, M), w.props = Y, ie = n.pendingProps, ne = w.context, R = i.contextType, typeof R == "object" && R !== null ? R = Wt(R) : (R = kt(i) ? Ir : ct.current, R = so(n, R));
        var ue = i.getDerivedStateFromProps;
        (oe = typeof ue == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== ie || ne !== R) && Of(n, w, a, R), rr = false, ne = n.memoizedState, w.state = ne, Ds(n, a, w, d);
        var de = n.memoizedState;
        M !== ie || ne !== de || Et.current || rr ? (typeof ue == "function" && (lu(n, i, ue, a), de = n.memoizedState), (Y = rr || Df(n, i, Y, a, ne, de, R) || false) ? (oe || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(a, de, R), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(a, de, R)), typeof w.componentDidUpdate == "function" && (n.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && ne === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && ne === t.memoizedState || (n.flags |= 1024), n.memoizedProps = a, n.memoizedState = de), w.props = a, w.state = de, w.context = R, a = Y) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && ne === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && ne === t.memoizedState || (n.flags |= 1024), a = false);
      }
      return fu(t, n, i, a, p, d);
    }
    function fu(t, n, i, a, d, p) {
      Gf(t, n);
      var w = (n.flags & 128) !== 0;
      if (!a && !w) return d && Jd(n, i, false), Ln(t, n, p);
      a = n.stateNode, ly.current = n;
      var M = w && typeof i.getDerivedStateFromError != "function" ? null : a.render();
      return n.flags |= 1, t !== null && w ? (n.child = co(n, t.child, null, p), n.child = co(n, null, M, p)) : vt(t, n, M, p), n.memoizedState = a.state, d && Jd(n, i, true), n.child;
    }
    function Qf(t) {
      var n = t.stateNode;
      n.pendingContext ? Zd(t, n.pendingContext, n.pendingContext !== n.context) : n.context && Zd(t, n.context, false), Ka(t, n.containerInfo);
    }
    function Zf(t, n, i, a, d) {
      return uo(), Ha(d), n.flags |= 256, vt(t, n, i, a), n.child;
    }
    var hu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    };
    function pu(t) {
      return {
        baseLanes: t,
        cachePool: null,
        transitions: null
      };
    }
    function qf(t, n, i) {
      var a = n.pendingProps, d = je.current, p = false, w = (n.flags & 128) !== 0, M;
      if ((M = w) || (M = t !== null && t.memoizedState === null ? false : (d & 2) !== 0), M ? (p = true, n.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), Pe(je, d & 1), t === null) return ja(n), t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (w = a.children, t = a.fallback, p ? (a = n.mode, p = n.child, w = {
        mode: "hidden",
        children: w
      }, (a & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = w) : p = rl(w, a, 0, null), t = Or(t, a, i, null), p.return = n, t.return = n, p.sibling = t, n.child = p, n.child.memoizedState = pu(i), n.memoizedState = hu, t) : mu(n, w));
      if (d = t.memoizedState, d !== null && (M = d.dehydrated, M !== null)) return ay(t, n, w, a, M, d, i);
      if (p) {
        p = a.fallback, w = n.mode, d = t.child, M = d.sibling;
        var R = {
          mode: "hidden",
          children: a.children
        };
        return (w & 1) === 0 && n.child !== d ? (a = n.child, a.childLanes = 0, a.pendingProps = R, n.deletions = null) : (a = cr(d, R), a.subtreeFlags = d.subtreeFlags & 14680064), M !== null ? p = cr(M, p) : (p = Or(p, w, i, null), p.flags |= 2), p.return = n, a.return = n, a.sibling = p, n.child = a, a = p, p = n.child, w = t.child.memoizedState, w = w === null ? pu(i) : {
          baseLanes: w.baseLanes | i,
          cachePool: null,
          transitions: w.transitions
        }, p.memoizedState = w, p.childLanes = t.childLanes & ~i, n.memoizedState = hu, a;
      }
      return p = t.child, t = p.sibling, a = cr(p, {
        mode: "visible",
        children: a.children
      }), (n.mode & 1) === 0 && (a.lanes = i), a.return = n, a.sibling = null, t !== null && (i = n.deletions, i === null ? (n.deletions = [
        t
      ], n.flags |= 16) : i.push(t)), n.child = a, n.memoizedState = null, a;
    }
    function mu(t, n) {
      return n = rl({
        mode: "visible",
        children: n
      }, t.mode, 0, null), n.return = t, t.child = n;
    }
    function Us(t, n, i, a) {
      return a !== null && Ha(a), co(n, t.child, null, i), t = mu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
    }
    function ay(t, n, i, a, d, p, w) {
      if (i) return n.flags & 256 ? (n.flags &= -257, a = uu(Error(o(422))), Us(t, n, w, a)) : n.memoizedState !== null ? (n.child = t.child, n.flags |= 128, null) : (p = a.fallback, d = n.mode, a = rl({
        mode: "visible",
        children: a.children
      }, d, 0, null), p = Or(p, d, w, null), p.flags |= 2, a.return = n, p.return = n, a.sibling = p, n.child = a, (n.mode & 1) !== 0 && co(n, t.child, null, w), n.child.memoizedState = pu(w), n.memoizedState = hu, p);
      if ((n.mode & 1) === 0) return Us(t, n, w, null);
      if (d.data === "$!") {
        if (a = d.nextSibling && d.nextSibling.dataset, a) var M = a.dgst;
        return a = M, p = Error(o(419)), a = uu(p, a, void 0), Us(t, n, w, a);
      }
      if (M = (w & t.childLanes) !== 0, Ct || M) {
        if (a = ot, a !== null) {
          switch (w & -w) {
            case 4:
              d = 2;
              break;
            case 16:
              d = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              d = 32;
              break;
            case 536870912:
              d = 268435456;
              break;
            default:
              d = 0;
          }
          d = (d & (a.suspendedLanes | w)) !== 0 ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, zn(t, d), un(a, t, d, -1));
        }
        return Tu(), a = uu(Error(o(421))), Us(t, n, w, a);
      }
      return d.data === "$?" ? (n.flags |= 128, n.child = t.child, n = Sy.bind(null, t), d._reactRetry = n, null) : (t = p.treeContext, Pt = Jn(d.nextSibling), Rt = n, Fe = true, on = null, t !== null && (Vt[Ut++] = Pn, Vt[Ut++] = $n, Vt[Ut++] = br, Pn = t.id, $n = t.overflow, br = n), n = mu(n, a.children), n.flags |= 4096, n);
    }
    function Jf(t, n, i) {
      t.lanes |= n;
      var a = t.alternate;
      a !== null && (a.lanes |= n), Ya(t.return, n, i);
    }
    function gu(t, n, i, a, d) {
      var p = t.memoizedState;
      p === null ? t.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: i,
        tailMode: d
      } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = a, p.tail = i, p.tailMode = d);
    }
    function eh(t, n, i) {
      var a = n.pendingProps, d = a.revealOrder, p = a.tail;
      if (vt(t, n, a.children, i), a = je.current, (a & 2) !== 0) a = a & 1 | 2, n.flags |= 128;
      else {
        if (t !== null && (t.flags & 128) !== 0) e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Jf(t, i, n);
          else if (t.tag === 19) Jf(t, i, n);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === n) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break e;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        a &= 1;
      }
      if (Pe(je, a), (n.mode & 1) === 0) n.memoizedState = null;
      else switch (d) {
        case "forwards":
          for (i = n.child, d = null; i !== null; ) t = i.alternate, t !== null && Ls(t) === null && (d = i), i = i.sibling;
          i = d, i === null ? (d = n.child, n.child = null) : (d = i.sibling, i.sibling = null), gu(n, false, d, i, p);
          break;
        case "backwards":
          for (i = null, d = n.child, n.child = null; d !== null; ) {
            if (t = d.alternate, t !== null && Ls(t) === null) {
              n.child = d;
              break;
            }
            t = d.sibling, d.sibling = i, i = d, d = t;
          }
          gu(n, true, i, null, p);
          break;
        case "together":
          gu(n, false, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
      return n.child;
    }
    function Ws(t, n) {
      (n.mode & 1) === 0 && t !== null && (t.alternate = null, n.alternate = null, n.flags |= 2);
    }
    function Ln(t, n, i) {
      if (t !== null && (n.dependencies = t.dependencies), $r |= n.lanes, (i & n.childLanes) === 0) return null;
      if (t !== null && n.child !== t.child) throw Error(o(153));
      if (n.child !== null) {
        for (t = n.child, i = cr(t, t.pendingProps), n.child = i, i.return = n; t.sibling !== null; ) t = t.sibling, i = i.sibling = cr(t, t.pendingProps), i.return = n;
        i.sibling = null;
      }
      return n.child;
    }
    function uy(t, n, i) {
      switch (n.tag) {
        case 3:
          Qf(n), uo();
          break;
        case 5:
          pf(n);
          break;
        case 1:
          kt(n.type) && Ms(n);
          break;
        case 4:
          Ka(n, n.stateNode.containerInfo);
          break;
        case 10:
          var a = n.type._context, d = n.memoizedProps.value;
          Pe(Ps, a._currentValue), a._currentValue = d;
          break;
        case 13:
          if (a = n.memoizedState, a !== null) return a.dehydrated !== null ? (Pe(je, je.current & 1), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? qf(t, n, i) : (Pe(je, je.current & 1), t = Ln(t, n, i), t !== null ? t.sibling : null);
          Pe(je, je.current & 1);
          break;
        case 19:
          if (a = (i & n.childLanes) !== 0, (t.flags & 128) !== 0) {
            if (a) return eh(t, n, i);
            n.flags |= 128;
          }
          if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Pe(je, je.current), a) break;
          return null;
        case 22:
        case 23:
          return n.lanes = 0, Xf(t, n, i);
      }
      return Ln(t, n, i);
    }
    var th, yu, nh, rh;
    th = function(t, n) {
      for (var i = n.child; i !== null; ) {
        if (i.tag === 5 || i.tag === 6) t.appendChild(i.stateNode);
        else if (i.tag !== 4 && i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === n) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === n) return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }, yu = function() {
    }, nh = function(t, n, i, a) {
      var d = t.memoizedProps;
      if (d !== a) {
        t = n.stateNode, Rr(xn.current);
        var p = null;
        switch (i) {
          case "input":
            d = Qe(t, d), a = Qe(t, a), p = [];
            break;
          case "select":
            d = B({}, d, {
              value: void 0
            }), a = B({}, a, {
              value: void 0
            }), p = [];
            break;
          case "textarea":
            d = hn(t, d), a = hn(t, a), p = [];
            break;
          default:
            typeof d.onClick != "function" && typeof a.onClick == "function" && (t.onclick = Cs);
        }
        St(i, a);
        var w;
        i = null;
        for (Y in d) if (!a.hasOwnProperty(Y) && d.hasOwnProperty(Y) && d[Y] != null) if (Y === "style") {
          var M = d[Y];
          for (w in M) M.hasOwnProperty(w) && (i || (i = {}), i[w] = "");
        } else Y !== "dangerouslySetInnerHTML" && Y !== "children" && Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && Y !== "autoFocus" && (l.hasOwnProperty(Y) ? p || (p = []) : (p = p || []).push(Y, null));
        for (Y in a) {
          var R = a[Y];
          if (M = d == null ? void 0 : d[Y], a.hasOwnProperty(Y) && R !== M && (R != null || M != null)) if (Y === "style") if (M) {
            for (w in M) !M.hasOwnProperty(w) || R && R.hasOwnProperty(w) || (i || (i = {}), i[w] = "");
            for (w in R) R.hasOwnProperty(w) && M[w] !== R[w] && (i || (i = {}), i[w] = R[w]);
          } else i || (p || (p = []), p.push(Y, i)), i = R;
          else Y === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, M = M ? M.__html : void 0, R != null && M !== R && (p = p || []).push(Y, R)) : Y === "children" ? typeof R != "string" && typeof R != "number" || (p = p || []).push(Y, "" + R) : Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && (l.hasOwnProperty(Y) ? (R != null && Y === "onScroll" && De("scroll", t), p || M === R || (p = [])) : (p = p || []).push(Y, R));
        }
        i && (p = p || []).push("style", i);
        var Y = p;
        (n.updateQueue = Y) && (n.flags |= 4);
      }
    }, rh = function(t, n, i, a) {
      i !== a && (n.flags |= 4);
    };
    function pi(t, n) {
      if (!Fe) switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
          i === null ? t.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = t.tail;
          for (var a = null; i !== null; ) i.alternate !== null && (a = i), i = i.sibling;
          a === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function ft(t) {
      var n = t.alternate !== null && t.alternate.child === t.child, i = 0, a = 0;
      if (n) for (var d = t.child; d !== null; ) i |= d.lanes | d.childLanes, a |= d.subtreeFlags & 14680064, a |= d.flags & 14680064, d.return = t, d = d.sibling;
      else for (d = t.child; d !== null; ) i |= d.lanes | d.childLanes, a |= d.subtreeFlags, a |= d.flags, d.return = t, d = d.sibling;
      return t.subtreeFlags |= a, t.childLanes = i, n;
    }
    function cy(t, n, i) {
      var a = n.pendingProps;
      switch (Fa(n), n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ft(n), null;
        case 1:
          return kt(n.type) && Ns(), ft(n), null;
        case 3:
          return a = n.stateNode, po(), Le(Et), Le(ct), qa(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Ts(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, on !== null && (Iu(on), on = null))), yu(t, n), ft(n), null;
        case 5:
          Qa(n);
          var d = Rr(ui.current);
          if (i = n.type, t !== null && n.stateNode != null) nh(t, n, i, a, d), t.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
          else {
            if (!a) {
              if (n.stateNode === null) throw Error(o(166));
              return ft(n), null;
            }
            if (t = Rr(xn.current), Ts(n)) {
              a = n.stateNode, i = n.type;
              var p = n.memoizedProps;
              switch (a[wn] = n, a[oi] = p, t = (n.mode & 1) !== 0, i) {
                case "dialog":
                  De("cancel", a), De("close", a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", a);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < ti.length; d++) De(ti[d], a);
                  break;
                case "source":
                  De("error", a);
                  break;
                case "img":
                case "image":
                case "link":
                  De("error", a), De("load", a);
                  break;
                case "details":
                  De("toggle", a);
                  break;
                case "input":
                  Oe(a, p), De("invalid", a);
                  break;
                case "select":
                  a._wrapperState = {
                    wasMultiple: !!p.multiple
                  }, De("invalid", a);
                  break;
                case "textarea":
                  _n(a, p), De("invalid", a);
              }
              St(i, p), d = null;
              for (var w in p) if (p.hasOwnProperty(w)) {
                var M = p[w];
                w === "children" ? typeof M == "string" ? a.textContent !== M && (p.suppressHydrationWarning !== true && ks(a.textContent, M, t), d = [
                  "children",
                  M
                ]) : typeof M == "number" && a.textContent !== "" + M && (p.suppressHydrationWarning !== true && ks(a.textContent, M, t), d = [
                  "children",
                  "" + M
                ]) : l.hasOwnProperty(w) && M != null && w === "onScroll" && De("scroll", a);
              }
              switch (i) {
                case "input":
                  Ve(a), ye(a, p, true);
                  break;
                case "textarea":
                  Ve(a), Nn(a);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof p.onClick == "function" && (a.onclick = Cs);
              }
              a = d, n.updateQueue = a, a !== null && (n.flags |= 4);
            } else {
              w = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = pn(i)), t === "http://www.w3.org/1999/xhtml" ? i === "script" ? (t = w.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof a.is == "string" ? t = w.createElement(i, {
                is: a.is
              }) : (t = w.createElement(i), i === "select" && (w = t, a.multiple ? w.multiple = true : a.size && (w.size = a.size))) : t = w.createElementNS(t, i), t[wn] = n, t[oi] = a, th(t, n, false, false), n.stateNode = t;
              e: {
                switch (w = tn(i, a), i) {
                  case "dialog":
                    De("cancel", t), De("close", t), d = a;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    De("load", t), d = a;
                    break;
                  case "video":
                  case "audio":
                    for (d = 0; d < ti.length; d++) De(ti[d], t);
                    d = a;
                    break;
                  case "source":
                    De("error", t), d = a;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    De("error", t), De("load", t), d = a;
                    break;
                  case "details":
                    De("toggle", t), d = a;
                    break;
                  case "input":
                    Oe(t, a), d = Qe(t, a), De("invalid", t);
                    break;
                  case "option":
                    d = a;
                    break;
                  case "select":
                    t._wrapperState = {
                      wasMultiple: !!a.multiple
                    }, d = B({}, a, {
                      value: void 0
                    }), De("invalid", t);
                    break;
                  case "textarea":
                    _n(t, a), d = hn(t, a), De("invalid", t);
                    break;
                  default:
                    d = a;
                }
                St(i, d), M = d;
                for (p in M) if (M.hasOwnProperty(p)) {
                  var R = M[p];
                  p === "style" ? gn(t, R) : p === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Mn(t, R)) : p === "children" ? typeof R == "string" ? (i !== "textarea" || R !== "") && en(t, R) : typeof R == "number" && en(t, "" + R) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (l.hasOwnProperty(p) ? R != null && p === "onScroll" && De("scroll", t) : R != null && L(t, p, R, w));
                }
                switch (i) {
                  case "input":
                    Ve(t), ye(t, a, false);
                    break;
                  case "textarea":
                    Ve(t), Nn(t);
                    break;
                  case "option":
                    a.value != null && t.setAttribute("value", "" + me(a.value));
                    break;
                  case "select":
                    t.multiple = !!a.multiple, p = a.value, p != null ? Ft(t, !!a.multiple, p, false) : a.defaultValue != null && Ft(t, !!a.multiple, a.defaultValue, true);
                    break;
                  default:
                    typeof d.onClick == "function" && (t.onclick = Cs);
                }
                switch (i) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a = !!a.autoFocus;
                    break e;
                  case "img":
                    a = true;
                    break e;
                  default:
                    a = false;
                }
              }
              a && (n.flags |= 4);
            }
            n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
          }
          return ft(n), null;
        case 6:
          if (t && n.stateNode != null) rh(t, n, t.memoizedProps, a);
          else {
            if (typeof a != "string" && n.stateNode === null) throw Error(o(166));
            if (i = Rr(ui.current), Rr(xn.current), Ts(n)) {
              if (a = n.stateNode, i = n.memoizedProps, a[wn] = n, (p = a.nodeValue !== i) && (t = Rt, t !== null)) switch (t.tag) {
                case 3:
                  ks(a.nodeValue, i, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== true && ks(a.nodeValue, i, (t.mode & 1) !== 0);
              }
              p && (n.flags |= 4);
            } else a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a), a[wn] = n, n.stateNode = a;
          }
          return ft(n), null;
        case 13:
          if (Le(je), a = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (Fe && Pt !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) sf(), uo(), n.flags |= 98560, p = false;
            else if (p = Ts(n), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!p) throw Error(o(318));
                if (p = n.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(o(317));
                p[wn] = n;
              } else uo(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              ft(n), p = false;
            } else on !== null && (Iu(on), on = null), p = true;
            if (!p) return n.flags & 65536 ? n : null;
          }
          return (n.flags & 128) !== 0 ? (n.lanes = i, n) : (a = a !== null, a !== (t !== null && t.memoizedState !== null) && a && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (t === null || (je.current & 1) !== 0 ? et === 0 && (et = 3) : Tu())), n.updateQueue !== null && (n.flags |= 4), ft(n), null);
        case 4:
          return po(), yu(t, n), t === null && ni(n.stateNode.containerInfo), ft(n), null;
        case 10:
          return Wa(n.type._context), ft(n), null;
        case 17:
          return kt(n.type) && Ns(), ft(n), null;
        case 19:
          if (Le(je), p = n.memoizedState, p === null) return ft(n), null;
          if (a = (n.flags & 128) !== 0, w = p.rendering, w === null) if (a) pi(p, false);
          else {
            if (et !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
              if (w = Ls(t), w !== null) {
                for (n.flags |= 128, pi(p, false), a = w.updateQueue, a !== null && (n.updateQueue = a, n.flags |= 4), n.subtreeFlags = 0, a = i, i = n.child; i !== null; ) p = i, t = a, p.flags &= 14680066, w = p.alternate, w === null ? (p.childLanes = 0, p.lanes = t, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = w.childLanes, p.lanes = w.lanes, p.child = w.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = w.memoizedProps, p.memoizedState = w.memoizedState, p.updateQueue = w.updateQueue, p.type = w.type, t = w.dependencies, p.dependencies = t === null ? null : {
                  lanes: t.lanes,
                  firstContext: t.firstContext
                }), i = i.sibling;
                return Pe(je, je.current & 1 | 2), n.child;
              }
              t = t.sibling;
            }
            p.tail !== null && Be() > vo && (n.flags |= 128, a = true, pi(p, false), n.lanes = 4194304);
          }
          else {
            if (!a) if (t = Ls(w), t !== null) {
              if (n.flags |= 128, a = true, i = t.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), pi(p, true), p.tail === null && p.tailMode === "hidden" && !w.alternate && !Fe) return ft(n), null;
            } else 2 * Be() - p.renderingStartTime > vo && i !== 1073741824 && (n.flags |= 128, a = true, pi(p, false), n.lanes = 4194304);
            p.isBackwards ? (w.sibling = n.child, n.child = w) : (i = p.last, i !== null ? i.sibling = w : n.child = w, p.last = w);
          }
          return p.tail !== null ? (n = p.tail, p.rendering = n, p.tail = n.sibling, p.renderingStartTime = Be(), n.sibling = null, i = je.current, Pe(je, a ? i & 1 | 2 : i & 1), n) : (ft(n), null);
        case 22:
        case 23:
          return Au(), a = n.memoizedState !== null, t !== null && t.memoizedState !== null !== a && (n.flags |= 8192), a && (n.mode & 1) !== 0 ? ($t & 1073741824) !== 0 && (ft(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ft(n), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(o(156, n.tag));
    }
    function dy(t, n) {
      switch (Fa(n), n.tag) {
        case 1:
          return kt(n.type) && Ns(), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
        case 3:
          return po(), Le(Et), Le(ct), qa(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
        case 5:
          return Qa(n), null;
        case 13:
          if (Le(je), t = n.memoizedState, t !== null && t.dehydrated !== null) {
            if (n.alternate === null) throw Error(o(340));
            uo();
          }
          return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
        case 19:
          return Le(je), null;
        case 4:
          return po(), null;
        case 10:
          return Wa(n.type._context), null;
        case 22:
        case 23:
          return Au(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Ys = false, ht = false, fy = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
    function go(t, n) {
      var i = t.ref;
      if (i !== null) if (typeof i == "function") try {
        i(null);
      } catch (a) {
        Ye(t, n, a);
      }
      else i.current = null;
    }
    function vu(t, n, i) {
      try {
        i();
      } catch (a) {
        Ye(t, n, a);
      }
    }
    var oh = false;
    function hy(t, n) {
      if (Aa = fs, t = zd(), Ea(t)) {
        if ("selectionStart" in t) var i = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else e: {
          i = (i = t.ownerDocument) && i.defaultView || window;
          var a = i.getSelection && i.getSelection();
          if (a && a.rangeCount !== 0) {
            i = a.anchorNode;
            var d = a.anchorOffset, p = a.focusNode;
            a = a.focusOffset;
            try {
              i.nodeType, p.nodeType;
            } catch {
              i = null;
              break e;
            }
            var w = 0, M = -1, R = -1, Y = 0, oe = 0, ie = t, ne = null;
            t: for (; ; ) {
              for (var ue; ie !== i || d !== 0 && ie.nodeType !== 3 || (M = w + d), ie !== p || a !== 0 && ie.nodeType !== 3 || (R = w + a), ie.nodeType === 3 && (w += ie.nodeValue.length), (ue = ie.firstChild) !== null; ) ne = ie, ie = ue;
              for (; ; ) {
                if (ie === t) break t;
                if (ne === i && ++Y === d && (M = w), ne === p && ++oe === a && (R = w), (ue = ie.nextSibling) !== null) break;
                ie = ne, ne = ie.parentNode;
              }
              ie = ue;
            }
            i = M === -1 || R === -1 ? null : {
              start: M,
              end: R
            };
          } else i = null;
        }
        i = i || {
          start: 0,
          end: 0
        };
      } else i = null;
      for (Ta = {
        focusedElem: t,
        selectionRange: i
      }, fs = false, ce = n; ce !== null; ) if (n = ce, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, ce = t;
      else for (; ce !== null; ) {
        n = ce;
        try {
          var de = n.alternate;
          if ((n.flags & 1024) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (de !== null) {
                var fe = de.memoizedProps, Ge = de.memoizedState, j = n.stateNode, D = j.getSnapshotBeforeUpdate(n.elementType === n.type ? fe : sn(n.type, fe), Ge);
                j.__reactInternalSnapshotBeforeUpdate = D;
              }
              break;
            case 3:
              var U = n.stateNode.containerInfo;
              U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(o(163));
          }
        } catch (se) {
          Ye(n, n.return, se);
        }
        if (t = n.sibling, t !== null) {
          t.return = n.return, ce = t;
          break;
        }
        ce = n.return;
      }
      return de = oh, oh = false, de;
    }
    function mi(t, n, i) {
      var a = n.updateQueue;
      if (a = a !== null ? a.lastEffect : null, a !== null) {
        var d = a = a.next;
        do {
          if ((d.tag & t) === t) {
            var p = d.destroy;
            d.destroy = void 0, p !== void 0 && vu(n, i, p);
          }
          d = d.next;
        } while (d !== a);
      }
    }
    function Xs(t, n) {
      if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var i = n = n.next;
        do {
          if ((i.tag & t) === t) {
            var a = i.create;
            i.destroy = a();
          }
          i = i.next;
        } while (i !== n);
      }
    }
    function wu(t) {
      var n = t.ref;
      if (n !== null) {
        var i = t.stateNode;
        switch (t.tag) {
          case 5:
            t = i;
            break;
          default:
            t = i;
        }
        typeof n == "function" ? n(t) : n.current = t;
      }
    }
    function ih(t) {
      var n = t.alternate;
      n !== null && (t.alternate = null, ih(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && (delete n[wn], delete n[oi], delete n[za], delete n[Kg], delete n[Qg])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function sh(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 4;
    }
    function lh(t) {
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || sh(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function xu(t, n, i) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, n ? i.nodeType === 8 ? i.parentNode.insertBefore(t, n) : i.insertBefore(t, n) : (i.nodeType === 8 ? (n = i.parentNode, n.insertBefore(t, i)) : (n = i, n.appendChild(t)), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = Cs));
      else if (a !== 4 && (t = t.child, t !== null)) for (xu(t, n, i), t = t.sibling; t !== null; ) xu(t, n, i), t = t.sibling;
    }
    function Su(t, n, i) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, n ? i.insertBefore(t, n) : i.appendChild(t);
      else if (a !== 4 && (t = t.child, t !== null)) for (Su(t, n, i), t = t.sibling; t !== null; ) Su(t, n, i), t = t.sibling;
    }
    var st = null, ln = false;
    function ir(t, n, i) {
      for (i = i.child; i !== null; ) ah(t, n, i), i = i.sibling;
    }
    function ah(t, n, i) {
      if (Ht && typeof Ht.onCommitFiberUnmount == "function") try {
        Ht.onCommitFiberUnmount(Qr, i);
      } catch {
      }
      switch (i.tag) {
        case 5:
          ht || go(i, n);
        case 6:
          var a = st, d = ln;
          st = null, ir(t, n, i), st = a, ln = d, st !== null && (ln ? (t = st, i = i.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(i) : t.removeChild(i)) : st.removeChild(i.stateNode));
          break;
        case 18:
          st !== null && (ln ? (t = st, i = i.stateNode, t.nodeType === 8 ? $a(t.parentNode, i) : t.nodeType === 1 && $a(t, i), Xo(t)) : $a(st, i.stateNode));
          break;
        case 4:
          a = st, d = ln, st = i.stateNode.containerInfo, ln = true, ir(t, n, i), st = a, ln = d;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!ht && (a = i.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
            d = a = a.next;
            do {
              var p = d, w = p.destroy;
              p = p.tag, w !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && vu(i, n, w), d = d.next;
            } while (d !== a);
          }
          ir(t, n, i);
          break;
        case 1:
          if (!ht && (go(i, n), a = i.stateNode, typeof a.componentWillUnmount == "function")) try {
            a.props = i.memoizedProps, a.state = i.memoizedState, a.componentWillUnmount();
          } catch (M) {
            Ye(i, n, M);
          }
          ir(t, n, i);
          break;
        case 21:
          ir(t, n, i);
          break;
        case 22:
          i.mode & 1 ? (ht = (a = ht) || i.memoizedState !== null, ir(t, n, i), ht = a) : ir(t, n, i);
          break;
        default:
          ir(t, n, i);
      }
    }
    function uh(t) {
      var n = t.updateQueue;
      if (n !== null) {
        t.updateQueue = null;
        var i = t.stateNode;
        i === null && (i = t.stateNode = new fy()), n.forEach(function(a) {
          var d = Ey.bind(null, t, a);
          i.has(a) || (i.add(a), a.then(d, d));
        });
      }
    }
    function an(t, n) {
      var i = n.deletions;
      if (i !== null) for (var a = 0; a < i.length; a++) {
        var d = i[a];
        try {
          var p = t, w = n, M = w;
          e: for (; M !== null; ) {
            switch (M.tag) {
              case 5:
                st = M.stateNode, ln = false;
                break e;
              case 3:
                st = M.stateNode.containerInfo, ln = true;
                break e;
              case 4:
                st = M.stateNode.containerInfo, ln = true;
                break e;
            }
            M = M.return;
          }
          if (st === null) throw Error(o(160));
          ah(p, w, d), st = null, ln = false;
          var R = d.alternate;
          R !== null && (R.return = null), d.return = null;
        } catch (Y) {
          Ye(d, n, Y);
        }
      }
      if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) ch(n, t), n = n.sibling;
    }
    function ch(t, n) {
      var i = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (an(n, t), En(t), a & 4) {
            try {
              mi(3, t, t.return), Xs(3, t);
            } catch (fe) {
              Ye(t, t.return, fe);
            }
            try {
              mi(5, t, t.return);
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 1:
          an(n, t), En(t), a & 512 && i !== null && go(i, i.return);
          break;
        case 5:
          if (an(n, t), En(t), a & 512 && i !== null && go(i, i.return), t.flags & 32) {
            var d = t.stateNode;
            try {
              en(d, "");
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          if (a & 4 && (d = t.stateNode, d != null)) {
            var p = t.memoizedProps, w = i !== null ? i.memoizedProps : p, M = t.type, R = t.updateQueue;
            if (t.updateQueue = null, R !== null) try {
              M === "input" && p.type === "radio" && p.name != null && ut(d, p), tn(M, w);
              var Y = tn(M, p);
              for (w = 0; w < R.length; w += 2) {
                var oe = R[w], ie = R[w + 1];
                oe === "style" ? gn(d, ie) : oe === "dangerouslySetInnerHTML" ? Mn(d, ie) : oe === "children" ? en(d, ie) : L(d, oe, ie, Y);
              }
              switch (M) {
                case "input":
                  Me(d, p);
                  break;
                case "textarea":
                  Bt(d, p);
                  break;
                case "select":
                  var ne = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var ue = p.value;
                  ue != null ? Ft(d, !!p.multiple, ue, false) : ne !== !!p.multiple && (p.defaultValue != null ? Ft(d, !!p.multiple, p.defaultValue, true) : Ft(d, !!p.multiple, p.multiple ? [] : "", false));
              }
              d[oi] = p;
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 6:
          if (an(n, t), En(t), a & 4) {
            if (t.stateNode === null) throw Error(o(162));
            d = t.stateNode, p = t.memoizedProps;
            try {
              d.nodeValue = p;
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 3:
          if (an(n, t), En(t), a & 4 && i !== null && i.memoizedState.isDehydrated) try {
            Xo(n.containerInfo);
          } catch (fe) {
            Ye(t, t.return, fe);
          }
          break;
        case 4:
          an(n, t), En(t);
          break;
        case 13:
          an(n, t), En(t), d = t.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (Cu = Be())), a & 4 && uh(t);
          break;
        case 22:
          if (oe = i !== null && i.memoizedState !== null, t.mode & 1 ? (ht = (Y = ht) || oe, an(n, t), ht = Y) : an(n, t), En(t), a & 8192) {
            if (Y = t.memoizedState !== null, (t.stateNode.isHidden = Y) && !oe && (t.mode & 1) !== 0) for (ce = t, oe = t.child; oe !== null; ) {
              for (ie = ce = oe; ce !== null; ) {
                switch (ne = ce, ue = ne.child, ne.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mi(4, ne, ne.return);
                    break;
                  case 1:
                    go(ne, ne.return);
                    var de = ne.stateNode;
                    if (typeof de.componentWillUnmount == "function") {
                      a = ne, i = ne.return;
                      try {
                        n = a, de.props = n.memoizedProps, de.state = n.memoizedState, de.componentWillUnmount();
                      } catch (fe) {
                        Ye(a, i, fe);
                      }
                    }
                    break;
                  case 5:
                    go(ne, ne.return);
                    break;
                  case 22:
                    if (ne.memoizedState !== null) {
                      hh(ie);
                      continue;
                    }
                }
                ue !== null ? (ue.return = ne, ce = ue) : hh(ie);
              }
              oe = oe.sibling;
            }
            e: for (oe = null, ie = t; ; ) {
              if (ie.tag === 5) {
                if (oe === null) {
                  oe = ie;
                  try {
                    d = ie.stateNode, Y ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (M = ie.stateNode, R = ie.memoizedProps.style, w = R != null && R.hasOwnProperty("display") ? R.display : null, M.style.display = mn("display", w));
                  } catch (fe) {
                    Ye(t, t.return, fe);
                  }
                }
              } else if (ie.tag === 6) {
                if (oe === null) try {
                  ie.stateNode.nodeValue = Y ? "" : ie.memoizedProps;
                } catch (fe) {
                  Ye(t, t.return, fe);
                }
              } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === t) && ie.child !== null) {
                ie.child.return = ie, ie = ie.child;
                continue;
              }
              if (ie === t) break e;
              for (; ie.sibling === null; ) {
                if (ie.return === null || ie.return === t) break e;
                oe === ie && (oe = null), ie = ie.return;
              }
              oe === ie && (oe = null), ie.sibling.return = ie.return, ie = ie.sibling;
            }
          }
          break;
        case 19:
          an(n, t), En(t), a & 4 && uh(t);
          break;
        case 21:
          break;
        default:
          an(n, t), En(t);
      }
    }
    function En(t) {
      var n = t.flags;
      if (n & 2) {
        try {
          e: {
            for (var i = t.return; i !== null; ) {
              if (sh(i)) {
                var a = i;
                break e;
              }
              i = i.return;
            }
            throw Error(o(160));
          }
          switch (a.tag) {
            case 5:
              var d = a.stateNode;
              a.flags & 32 && (en(d, ""), a.flags &= -33);
              var p = lh(t);
              Su(t, p, d);
              break;
            case 3:
            case 4:
              var w = a.stateNode.containerInfo, M = lh(t);
              xu(t, M, w);
              break;
            default:
              throw Error(o(161));
          }
        } catch (R) {
          Ye(t, t.return, R);
        }
        t.flags &= -3;
      }
      n & 4096 && (t.flags &= -4097);
    }
    function py(t, n, i) {
      ce = t, dh(t);
    }
    function dh(t, n, i) {
      for (var a = (t.mode & 1) !== 0; ce !== null; ) {
        var d = ce, p = d.child;
        if (d.tag === 22 && a) {
          var w = d.memoizedState !== null || Ys;
          if (!w) {
            var M = d.alternate, R = M !== null && M.memoizedState !== null || ht;
            M = Ys;
            var Y = ht;
            if (Ys = w, (ht = R) && !Y) for (ce = d; ce !== null; ) w = ce, R = w.child, w.tag === 22 && w.memoizedState !== null ? ph(d) : R !== null ? (R.return = w, ce = R) : ph(d);
            for (; p !== null; ) ce = p, dh(p), p = p.sibling;
            ce = d, Ys = M, ht = Y;
          }
          fh(t);
        } else (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d, ce = p) : fh(t);
      }
    }
    function fh(t) {
      for (; ce !== null; ) {
        var n = ce;
        if ((n.flags & 8772) !== 0) {
          var i = n.alternate;
          try {
            if ((n.flags & 8772) !== 0) switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ht || Xs(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !ht) if (i === null) a.componentDidMount();
                else {
                  var d = n.elementType === n.type ? i.memoizedProps : sn(n.type, i.memoizedProps);
                  a.componentDidUpdate(d, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
                var p = n.updateQueue;
                p !== null && hf(n, p, a);
                break;
              case 3:
                var w = n.updateQueue;
                if (w !== null) {
                  if (i = null, n.child !== null) switch (n.child.tag) {
                    case 5:
                      i = n.child.stateNode;
                      break;
                    case 1:
                      i = n.child.stateNode;
                  }
                  hf(n, w, i);
                }
                break;
              case 5:
                var M = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = M;
                  var R = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      R.autoFocus && i.focus();
                      break;
                    case "img":
                      R.src && (i.src = R.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var Y = n.alternate;
                  if (Y !== null) {
                    var oe = Y.memoizedState;
                    if (oe !== null) {
                      var ie = oe.dehydrated;
                      ie !== null && Xo(ie);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
            ht || n.flags & 512 && wu(n);
          } catch (ne) {
            Ye(n, n.return, ne);
          }
        }
        if (n === t) {
          ce = null;
          break;
        }
        if (i = n.sibling, i !== null) {
          i.return = n.return, ce = i;
          break;
        }
        ce = n.return;
      }
    }
    function hh(t) {
      for (; ce !== null; ) {
        var n = ce;
        if (n === t) {
          ce = null;
          break;
        }
        var i = n.sibling;
        if (i !== null) {
          i.return = n.return, ce = i;
          break;
        }
        ce = n.return;
      }
    }
    function ph(t) {
      for (; ce !== null; ) {
        var n = ce;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var i = n.return;
              try {
                Xs(4, n);
              } catch (R) {
                Ye(n, i, R);
              }
              break;
            case 1:
              var a = n.stateNode;
              if (typeof a.componentDidMount == "function") {
                var d = n.return;
                try {
                  a.componentDidMount();
                } catch (R) {
                  Ye(n, d, R);
                }
              }
              var p = n.return;
              try {
                wu(n);
              } catch (R) {
                Ye(n, p, R);
              }
              break;
            case 5:
              var w = n.return;
              try {
                wu(n);
              } catch (R) {
                Ye(n, w, R);
              }
          }
        } catch (R) {
          Ye(n, n.return, R);
        }
        if (n === t) {
          ce = null;
          break;
        }
        var M = n.sibling;
        if (M !== null) {
          M.return = n.return, ce = M;
          break;
        }
        ce = n.return;
      }
    }
    var my = Math.ceil, Gs = b.ReactCurrentDispatcher, Eu = b.ReactCurrentOwner, Xt = b.ReactCurrentBatchConfig, Ne = 0, ot = null, Ze = null, lt = 0, $t = 0, yo = er(0), et = 0, gi = null, $r = 0, Ks = 0, ku = 0, yi = null, _t = null, Cu = 0, vo = 1 / 0, On = null, Qs = false, _u = null, sr = null, Zs = false, lr = null, qs = 0, vi = 0, Nu = null, Js = -1, el = 0;
    function wt() {
      return (Ne & 6) !== 0 ? Be() : Js !== -1 ? Js : Js = Be();
    }
    function ar(t) {
      return (t.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && lt !== 0 ? lt & -lt : qg.transition !== null ? (el === 0 && (el = sd()), el) : (t = Ae, t !== 0 || (t = window.event, t = t === void 0 ? 16 : md(t.type)), t);
    }
    function un(t, n, i, a) {
      if (50 < vi) throw vi = 0, Nu = null, Error(o(185));
      Ho(t, i, a), ((Ne & 2) === 0 || t !== ot) && (t === ot && ((Ne & 2) === 0 && (Ks |= i), et === 4 && ur(t, lt)), Nt(t, a), i === 1 && Ne === 0 && (n.mode & 1) === 0 && (vo = Be() + 500, Is && nr()));
    }
    function Nt(t, n) {
      var i = t.callbackNode;
      qm(t, n);
      var a = us(t, t === ot ? lt : 0);
      if (a === 0) i !== null && ns(i), t.callbackNode = null, t.callbackPriority = 0;
      else if (n = a & -a, t.callbackPriority !== n) {
        if (i != null && ns(i), n === 1) t.tag === 0 ? Zg(gh.bind(null, t)) : ef(gh.bind(null, t)), Xg(function() {
          (Ne & 6) === 0 && nr();
        }), i = null;
        else {
          switch (ld(a)) {
            case 1:
              i = Fo;
              break;
            case 4:
              i = os;
              break;
            case 16:
              i = Kr;
              break;
            case 536870912:
              i = ss;
              break;
            default:
              i = Kr;
          }
          i = Ch(i, mh.bind(null, t));
        }
        t.callbackPriority = n, t.callbackNode = i;
      }
    }
    function mh(t, n) {
      if (Js = -1, el = 0, (Ne & 6) !== 0) throw Error(o(327));
      var i = t.callbackNode;
      if (wo() && t.callbackNode !== i) return null;
      var a = us(t, t === ot ? lt : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & t.expiredLanes) !== 0 || n) n = tl(t, a);
      else {
        n = a;
        var d = Ne;
        Ne |= 2;
        var p = vh();
        (ot !== t || lt !== n) && (On = null, vo = Be() + 500, Dr(t, n));
        do
          try {
            vy();
            break;
          } catch (M) {
            yh(t, M);
          }
        while (true);
        Ua(), Gs.current = p, Ne = d, Ze !== null ? n = 0 : (ot = null, lt = 0, n = et);
      }
      if (n !== 0) {
        if (n === 2 && (d = sa(t), d !== 0 && (a = d, n = Mu(t, d))), n === 1) throw i = gi, Dr(t, 0), ur(t, a), Nt(t, Be()), i;
        if (n === 6) ur(t, a);
        else {
          if (d = t.current.alternate, (a & 30) === 0 && !gy(d) && (n = tl(t, a), n === 2 && (p = sa(t), p !== 0 && (a = p, n = Mu(t, p))), n === 1)) throw i = gi, Dr(t, 0), ur(t, a), Nt(t, Be()), i;
          switch (t.finishedWork = d, t.finishedLanes = a, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Lr(t, _t, On);
              break;
            case 3:
              if (ur(t, a), (a & 130023424) === a && (n = Cu + 500 - Be(), 10 < n)) {
                if (us(t, 0) !== 0) break;
                if (d = t.suspendedLanes, (d & a) !== a) {
                  wt(), t.pingedLanes |= t.suspendedLanes & d;
                  break;
                }
                t.timeoutHandle = Pa(Lr.bind(null, t, _t, On), n);
                break;
              }
              Lr(t, _t, On);
              break;
            case 4:
              if (ur(t, a), (a & 4194240) === a) break;
              for (n = t.eventTimes, d = -1; 0 < a; ) {
                var w = 31 - nn(a);
                p = 1 << w, w = n[w], w > d && (d = w), a &= ~p;
              }
              if (a = d, a = Be() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * my(a / 1960)) - a, 10 < a) {
                t.timeoutHandle = Pa(Lr.bind(null, t, _t, On), a);
                break;
              }
              Lr(t, _t, On);
              break;
            case 5:
              Lr(t, _t, On);
              break;
            default:
              throw Error(o(329));
          }
        }
      }
      return Nt(t, Be()), t.callbackNode === i ? mh.bind(null, t) : null;
    }
    function Mu(t, n) {
      var i = yi;
      return t.current.memoizedState.isDehydrated && (Dr(t, n).flags |= 256), t = tl(t, n), t !== 2 && (n = _t, _t = i, n !== null && Iu(n)), t;
    }
    function Iu(t) {
      _t === null ? _t = t : _t.push.apply(_t, t);
    }
    function gy(t) {
      for (var n = t; ; ) {
        if (n.flags & 16384) {
          var i = n.updateQueue;
          if (i !== null && (i = i.stores, i !== null)) for (var a = 0; a < i.length; a++) {
            var d = i[a], p = d.getSnapshot;
            d = d.value;
            try {
              if (!rn(p(), d)) return false;
            } catch {
              return false;
            }
          }
        }
        if (i = n.child, n.subtreeFlags & 16384 && i !== null) i.return = n, n = i;
        else {
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return true;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      }
      return true;
    }
    function ur(t, n) {
      for (n &= ~ku, n &= ~Ks, t.suspendedLanes |= n, t.pingedLanes &= ~n, t = t.expirationTimes; 0 < n; ) {
        var i = 31 - nn(n), a = 1 << i;
        t[i] = -1, n &= ~a;
      }
    }
    function gh(t) {
      if ((Ne & 6) !== 0) throw Error(o(327));
      wo();
      var n = us(t, 0);
      if ((n & 1) === 0) return Nt(t, Be()), null;
      var i = tl(t, n);
      if (t.tag !== 0 && i === 2) {
        var a = sa(t);
        a !== 0 && (n = a, i = Mu(t, a));
      }
      if (i === 1) throw i = gi, Dr(t, 0), ur(t, n), Nt(t, Be()), i;
      if (i === 6) throw Error(o(345));
      return t.finishedWork = t.current.alternate, t.finishedLanes = n, Lr(t, _t, On), Nt(t, Be()), null;
    }
    function bu(t, n) {
      var i = Ne;
      Ne |= 1;
      try {
        return t(n);
      } finally {
        Ne = i, Ne === 0 && (vo = Be() + 500, Is && nr());
      }
    }
    function zr(t) {
      lr !== null && lr.tag === 0 && (Ne & 6) === 0 && wo();
      var n = Ne;
      Ne |= 1;
      var i = Xt.transition, a = Ae;
      try {
        if (Xt.transition = null, Ae = 1, t) return t();
      } finally {
        Ae = a, Xt.transition = i, Ne = n, (Ne & 6) === 0 && nr();
      }
    }
    function Au() {
      $t = yo.current, Le(yo);
    }
    function Dr(t, n) {
      t.finishedWork = null, t.finishedLanes = 0;
      var i = t.timeoutHandle;
      if (i !== -1 && (t.timeoutHandle = -1, Yg(i)), Ze !== null) for (i = Ze.return; i !== null; ) {
        var a = i;
        switch (Fa(a), a.tag) {
          case 1:
            a = a.type.childContextTypes, a != null && Ns();
            break;
          case 3:
            po(), Le(Et), Le(ct), qa();
            break;
          case 5:
            Qa(a);
            break;
          case 4:
            po();
            break;
          case 13:
            Le(je);
            break;
          case 19:
            Le(je);
            break;
          case 10:
            Wa(a.type._context);
            break;
          case 22:
          case 23:
            Au();
        }
        i = i.return;
      }
      if (ot = t, Ze = t = cr(t.current, null), lt = $t = n, et = 0, gi = null, ku = Ks = $r = 0, _t = yi = null, Tr !== null) {
        for (n = 0; n < Tr.length; n++) if (i = Tr[n], a = i.interleaved, a !== null) {
          i.interleaved = null;
          var d = a.next, p = i.pending;
          if (p !== null) {
            var w = p.next;
            p.next = d, a.next = w;
          }
          i.pending = a;
        }
        Tr = null;
      }
      return t;
    }
    function yh(t, n) {
      do {
        var i = Ze;
        try {
          if (Ua(), Os.current = Hs, Fs) {
            for (var a = He.memoizedState; a !== null; ) {
              var d = a.queue;
              d !== null && (d.pending = null), a = a.next;
            }
            Fs = false;
          }
          if (Pr = 0, rt = Je = He = null, ci = false, di = 0, Eu.current = null, i === null || i.return === null) {
            et = 1, gi = n, Ze = null;
            break;
          }
          e: {
            var p = t, w = i.return, M = i, R = n;
            if (n = lt, M.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
              var Y = R, oe = M, ie = oe.tag;
              if ((oe.mode & 1) === 0 && (ie === 0 || ie === 11 || ie === 15)) {
                var ne = oe.alternate;
                ne ? (oe.updateQueue = ne.updateQueue, oe.memoizedState = ne.memoizedState, oe.lanes = ne.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
              }
              var ue = Hf(w);
              if (ue !== null) {
                ue.flags &= -257, Vf(ue, w, M, p, n), ue.mode & 1 && jf(p, Y, n), n = ue, R = Y;
                var de = n.updateQueue;
                if (de === null) {
                  var fe = /* @__PURE__ */ new Set();
                  fe.add(R), n.updateQueue = fe;
                } else de.add(R);
                break e;
              } else {
                if ((n & 1) === 0) {
                  jf(p, Y, n), Tu();
                  break e;
                }
                R = Error(o(426));
              }
            } else if (Fe && M.mode & 1) {
              var Ge = Hf(w);
              if (Ge !== null) {
                (Ge.flags & 65536) === 0 && (Ge.flags |= 256), Vf(Ge, w, M, p, n), Ha(mo(R, M));
                break e;
              }
            }
            p = R = mo(R, M), et !== 4 && (et = 2), yi === null ? yi = [
              p
            ] : yi.push(p), p = w;
            do {
              switch (p.tag) {
                case 3:
                  p.flags |= 65536, n &= -n, p.lanes |= n;
                  var j = Ff(p, R, n);
                  ff(p, j);
                  break e;
                case 1:
                  M = R;
                  var D = p.type, U = p.stateNode;
                  if ((p.flags & 128) === 0 && (typeof D.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (sr === null || !sr.has(U)))) {
                    p.flags |= 65536, n &= -n, p.lanes |= n;
                    var se = Bf(p, M, n);
                    ff(p, se);
                    break e;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          xh(i);
        } catch (pe) {
          n = pe, Ze === i && i !== null && (Ze = i = i.return);
          continue;
        }
        break;
      } while (true);
    }
    function vh() {
      var t = Gs.current;
      return Gs.current = Hs, t === null ? Hs : t;
    }
    function Tu() {
      (et === 0 || et === 3 || et === 2) && (et = 4), ot === null || ($r & 268435455) === 0 && (Ks & 268435455) === 0 || ur(ot, lt);
    }
    function tl(t, n) {
      var i = Ne;
      Ne |= 2;
      var a = vh();
      (ot !== t || lt !== n) && (On = null, Dr(t, n));
      do
        try {
          yy();
          break;
        } catch (d) {
          yh(t, d);
        }
      while (true);
      if (Ua(), Ne = i, Gs.current = a, Ze !== null) throw Error(o(261));
      return ot = null, lt = 0, et;
    }
    function yy() {
      for (; Ze !== null; ) wh(Ze);
    }
    function vy() {
      for (; Ze !== null && !rs(); ) wh(Ze);
    }
    function wh(t) {
      var n = kh(t.alternate, t, $t);
      t.memoizedProps = t.pendingProps, n === null ? xh(t) : Ze = n, Eu.current = null;
    }
    function xh(t) {
      var n = t;
      do {
        var i = n.alternate;
        if (t = n.return, (n.flags & 32768) === 0) {
          if (i = cy(i, n, $t), i !== null) {
            Ze = i;
            return;
          }
        } else {
          if (i = dy(i, n), i !== null) {
            i.flags &= 32767, Ze = i;
            return;
          }
          if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
          else {
            et = 6, Ze = null;
            return;
          }
        }
        if (n = n.sibling, n !== null) {
          Ze = n;
          return;
        }
        Ze = n = t;
      } while (n !== null);
      et === 0 && (et = 5);
    }
    function Lr(t, n, i) {
      var a = Ae, d = Xt.transition;
      try {
        Xt.transition = null, Ae = 1, wy(t, n, i, a);
      } finally {
        Xt.transition = d, Ae = a;
      }
      return null;
    }
    function wy(t, n, i, a) {
      do
        wo();
      while (lr !== null);
      if ((Ne & 6) !== 0) throw Error(o(327));
      i = t.finishedWork;
      var d = t.finishedLanes;
      if (i === null) return null;
      if (t.finishedWork = null, t.finishedLanes = 0, i === t.current) throw Error(o(177));
      t.callbackNode = null, t.callbackPriority = 0;
      var p = i.lanes | i.childLanes;
      if (Jm(t, p), t === ot && (Ze = ot = null, lt = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Zs || (Zs = true, Ch(Kr, function() {
        return wo(), null;
      })), p = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || p) {
        p = Xt.transition, Xt.transition = null;
        var w = Ae;
        Ae = 1;
        var M = Ne;
        Ne |= 4, Eu.current = null, hy(t, i), ch(i, t), Fg(Ta), fs = !!Aa, Ta = Aa = null, t.current = i, py(i), oa(), Ne = M, Ae = w, Xt.transition = p;
      } else t.current = i;
      if (Zs && (Zs = false, lr = t, qs = d), p = t.pendingLanes, p === 0 && (sr = null), Bo(i.stateNode), Nt(t, Be()), n !== null) for (a = t.onRecoverableError, i = 0; i < n.length; i++) d = n[i], a(d.value, {
        componentStack: d.stack,
        digest: d.digest
      });
      if (Qs) throw Qs = false, t = _u, _u = null, t;
      return (qs & 1) !== 0 && t.tag !== 0 && wo(), p = t.pendingLanes, (p & 1) !== 0 ? t === Nu ? vi++ : (vi = 0, Nu = t) : vi = 0, nr(), null;
    }
    function wo() {
      if (lr !== null) {
        var t = ld(qs), n = Xt.transition, i = Ae;
        try {
          if (Xt.transition = null, Ae = 16 > t ? 16 : t, lr === null) var a = false;
          else {
            if (t = lr, lr = null, qs = 0, (Ne & 6) !== 0) throw Error(o(331));
            var d = Ne;
            for (Ne |= 4, ce = t.current; ce !== null; ) {
              var p = ce, w = p.child;
              if ((ce.flags & 16) !== 0) {
                var M = p.deletions;
                if (M !== null) {
                  for (var R = 0; R < M.length; R++) {
                    var Y = M[R];
                    for (ce = Y; ce !== null; ) {
                      var oe = ce;
                      switch (oe.tag) {
                        case 0:
                        case 11:
                        case 15:
                          mi(8, oe, p);
                      }
                      var ie = oe.child;
                      if (ie !== null) ie.return = oe, ce = ie;
                      else for (; ce !== null; ) {
                        oe = ce;
                        var ne = oe.sibling, ue = oe.return;
                        if (ih(oe), oe === Y) {
                          ce = null;
                          break;
                        }
                        if (ne !== null) {
                          ne.return = ue, ce = ne;
                          break;
                        }
                        ce = ue;
                      }
                    }
                  }
                  var de = p.alternate;
                  if (de !== null) {
                    var fe = de.child;
                    if (fe !== null) {
                      de.child = null;
                      do {
                        var Ge = fe.sibling;
                        fe.sibling = null, fe = Ge;
                      } while (fe !== null);
                    }
                  }
                  ce = p;
                }
              }
              if ((p.subtreeFlags & 2064) !== 0 && w !== null) w.return = p, ce = w;
              else e: for (; ce !== null; ) {
                if (p = ce, (p.flags & 2048) !== 0) switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mi(9, p, p.return);
                }
                var j = p.sibling;
                if (j !== null) {
                  j.return = p.return, ce = j;
                  break e;
                }
                ce = p.return;
              }
            }
            var D = t.current;
            for (ce = D; ce !== null; ) {
              w = ce;
              var U = w.child;
              if ((w.subtreeFlags & 2064) !== 0 && U !== null) U.return = w, ce = U;
              else e: for (w = D; ce !== null; ) {
                if (M = ce, (M.flags & 2048) !== 0) try {
                  switch (M.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs(9, M);
                  }
                } catch (pe) {
                  Ye(M, M.return, pe);
                }
                if (M === w) {
                  ce = null;
                  break e;
                }
                var se = M.sibling;
                if (se !== null) {
                  se.return = M.return, ce = se;
                  break e;
                }
                ce = M.return;
              }
            }
            if (Ne = d, nr(), Ht && typeof Ht.onPostCommitFiberRoot == "function") try {
              Ht.onPostCommitFiberRoot(Qr, t);
            } catch {
            }
            a = true;
          }
          return a;
        } finally {
          Ae = i, Xt.transition = n;
        }
      }
      return false;
    }
    function Sh(t, n, i) {
      n = mo(i, n), n = Ff(t, n, 1), t = or(t, n, 1), n = wt(), t !== null && (Ho(t, 1, n), Nt(t, n));
    }
    function Ye(t, n, i) {
      if (t.tag === 3) Sh(t, t, i);
      else for (; n !== null; ) {
        if (n.tag === 3) {
          Sh(n, t, i);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (sr === null || !sr.has(a))) {
            t = mo(i, t), t = Bf(n, t, 1), n = or(n, t, 1), t = wt(), n !== null && (Ho(n, 1, t), Nt(n, t));
            break;
          }
        }
        n = n.return;
      }
    }
    function xy(t, n, i) {
      var a = t.pingCache;
      a !== null && a.delete(n), n = wt(), t.pingedLanes |= t.suspendedLanes & i, ot === t && (lt & i) === i && (et === 4 || et === 3 && (lt & 130023424) === lt && 500 > Be() - Cu ? Dr(t, 0) : ku |= i), Nt(t, n);
    }
    function Eh(t, n) {
      n === 0 && ((t.mode & 1) === 0 ? n = 1 : (n = as, as <<= 1, (as & 130023424) === 0 && (as = 4194304)));
      var i = wt();
      t = zn(t, n), t !== null && (Ho(t, n, i), Nt(t, i));
    }
    function Sy(t) {
      var n = t.memoizedState, i = 0;
      n !== null && (i = n.retryLane), Eh(t, i);
    }
    function Ey(t, n) {
      var i = 0;
      switch (t.tag) {
        case 13:
          var a = t.stateNode, d = t.memoizedState;
          d !== null && (i = d.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        default:
          throw Error(o(314));
      }
      a !== null && a.delete(n), Eh(t, i);
    }
    var kh;
    kh = function(t, n, i) {
      if (t !== null) if (t.memoizedProps !== n.pendingProps || Et.current) Ct = true;
      else {
        if ((t.lanes & i) === 0 && (n.flags & 128) === 0) return Ct = false, uy(t, n, i);
        Ct = (t.flags & 131072) !== 0;
      }
      else Ct = false, Fe && (n.flags & 1048576) !== 0 && tf(n, As, n.index);
      switch (n.lanes = 0, n.tag) {
        case 2:
          var a = n.type;
          Ws(t, n), t = n.pendingProps;
          var d = so(n, ct.current);
          ho(n, i), d = tu(null, n, a, t, d, i);
          var p = nu();
          return n.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, kt(a) ? (p = true, Ms(n)) : p = false, n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Ga(n), d.updater = Vs, n.stateNode = d, d._reactInternals = n, au(n, a, t, i), n = fu(null, n, a, true, p, i)) : (n.tag = 0, Fe && p && Oa(n), vt(null, n, d, i), n = n.child), n;
        case 16:
          a = n.elementType;
          e: {
            switch (Ws(t, n), t = n.pendingProps, d = a._init, a = d(a._payload), n.type = a, d = n.tag = Cy(a), t = sn(a, t), d) {
              case 0:
                n = du(null, n, a, t, i);
                break e;
              case 1:
                n = Kf(null, n, a, t, i);
                break e;
              case 11:
                n = Uf(null, n, a, t, i);
                break e;
              case 14:
                n = Wf(null, n, a, sn(a.type, t), i);
                break e;
            }
            throw Error(o(306, a, ""));
          }
          return n;
        case 0:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), du(t, n, a, d, i);
        case 1:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), Kf(t, n, a, d, i);
        case 3:
          e: {
            if (Qf(n), t === null) throw Error(o(387));
            a = n.pendingProps, p = n.memoizedState, d = p.element, df(t, n), Ds(n, a, null, i);
            var w = n.memoizedState;
            if (a = w.element, p.isDehydrated) if (p = {
              element: a,
              isDehydrated: false,
              cache: w.cache,
              pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
              transitions: w.transitions
            }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
              d = mo(Error(o(423)), n), n = Zf(t, n, a, i, d);
              break e;
            } else if (a !== d) {
              d = mo(Error(o(424)), n), n = Zf(t, n, a, i, d);
              break e;
            } else for (Pt = Jn(n.stateNode.containerInfo.firstChild), Rt = n, Fe = true, on = null, i = uf(n, null, a, i), n.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
            else {
              if (uo(), a === d) {
                n = Ln(t, n, i);
                break e;
              }
              vt(t, n, a, i);
            }
            n = n.child;
          }
          return n;
        case 5:
          return pf(n), t === null && ja(n), a = n.type, d = n.pendingProps, p = t !== null ? t.memoizedProps : null, w = d.children, Ra(a, d) ? w = null : p !== null && Ra(a, p) && (n.flags |= 32), Gf(t, n), vt(t, n, w, i), n.child;
        case 6:
          return t === null && ja(n), null;
        case 13:
          return qf(t, n, i);
        case 4:
          return Ka(n, n.stateNode.containerInfo), a = n.pendingProps, t === null ? n.child = co(n, null, a, i) : vt(t, n, a, i), n.child;
        case 11:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), Uf(t, n, a, d, i);
        case 7:
          return vt(t, n, n.pendingProps, i), n.child;
        case 8:
          return vt(t, n, n.pendingProps.children, i), n.child;
        case 12:
          return vt(t, n, n.pendingProps.children, i), n.child;
        case 10:
          e: {
            if (a = n.type._context, d = n.pendingProps, p = n.memoizedProps, w = d.value, Pe(Ps, a._currentValue), a._currentValue = w, p !== null) if (rn(p.value, w)) {
              if (p.children === d.children && !Et.current) {
                n = Ln(t, n, i);
                break e;
              }
            } else for (p = n.child, p !== null && (p.return = n); p !== null; ) {
              var M = p.dependencies;
              if (M !== null) {
                w = p.child;
                for (var R = M.firstContext; R !== null; ) {
                  if (R.context === a) {
                    if (p.tag === 1) {
                      R = Dn(-1, i & -i), R.tag = 2;
                      var Y = p.updateQueue;
                      if (Y !== null) {
                        Y = Y.shared;
                        var oe = Y.pending;
                        oe === null ? R.next = R : (R.next = oe.next, oe.next = R), Y.pending = R;
                      }
                    }
                    p.lanes |= i, R = p.alternate, R !== null && (R.lanes |= i), Ya(p.return, i, n), M.lanes |= i;
                    break;
                  }
                  R = R.next;
                }
              } else if (p.tag === 10) w = p.type === n.type ? null : p.child;
              else if (p.tag === 18) {
                if (w = p.return, w === null) throw Error(o(341));
                w.lanes |= i, M = w.alternate, M !== null && (M.lanes |= i), Ya(w, i, n), w = p.sibling;
              } else w = p.child;
              if (w !== null) w.return = p;
              else for (w = p; w !== null; ) {
                if (w === n) {
                  w = null;
                  break;
                }
                if (p = w.sibling, p !== null) {
                  p.return = w.return, w = p;
                  break;
                }
                w = w.return;
              }
              p = w;
            }
            vt(t, n, d.children, i), n = n.child;
          }
          return n;
        case 9:
          return d = n.type, a = n.pendingProps.children, ho(n, i), d = Wt(d), a = a(d), n.flags |= 1, vt(t, n, a, i), n.child;
        case 14:
          return a = n.type, d = sn(a, n.pendingProps), d = sn(a.type, d), Wf(t, n, a, d, i);
        case 15:
          return Yf(t, n, n.type, n.pendingProps, i);
        case 17:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), Ws(t, n), n.tag = 1, kt(a) ? (t = true, Ms(n)) : t = false, ho(n, i), Lf(n, a, d), au(n, a, d, i), fu(null, n, a, true, t, i);
        case 19:
          return eh(t, n, i);
        case 22:
          return Xf(t, n, i);
      }
      throw Error(o(156, n.tag));
    };
    function Ch(t, n) {
      return ts(t, n);
    }
    function ky(t, n, i, a) {
      this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Gt(t, n, i, a) {
      return new ky(t, n, i, a);
    }
    function Ru(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Cy(t) {
      if (typeof t == "function") return Ru(t) ? 1 : 0;
      if (t != null) {
        if (t = t.$$typeof, t === J) return 11;
        if (t === H) return 14;
      }
      return 2;
    }
    function cr(t, n) {
      var i = t.alternate;
      return i === null ? (i = Gt(t.tag, n, t.key, t.mode), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i.alternate = t, t.alternate = i) : (i.pendingProps = n, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = t.flags & 14680064, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, n = t.dependencies, i.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i;
    }
    function nl(t, n, i, a, d, p) {
      var w = 2;
      if (a = t, typeof t == "function") Ru(t) && (w = 1);
      else if (typeof t == "string") w = 5;
      else e: switch (t) {
        case Z:
          return Or(i.children, d, p, n);
        case ee:
          w = 8, d |= 8;
          break;
        case G:
          return t = Gt(12, i, n, d | 2), t.elementType = G, t.lanes = p, t;
        case q:
          return t = Gt(13, i, n, d), t.elementType = q, t.lanes = p, t;
        case k:
          return t = Gt(19, i, n, d), t.elementType = k, t.lanes = p, t;
        case W:
          return rl(i, d, p, n);
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case V:
              w = 10;
              break e;
            case K:
              w = 9;
              break e;
            case J:
              w = 11;
              break e;
            case H:
              w = 14;
              break e;
            case I:
              w = 16, a = null;
              break e;
          }
          throw Error(o(130, t == null ? t : typeof t, ""));
      }
      return n = Gt(w, i, n, d), n.elementType = t, n.type = a, n.lanes = p, n;
    }
    function Or(t, n, i, a) {
      return t = Gt(7, t, a, n), t.lanes = i, t;
    }
    function rl(t, n, i, a) {
      return t = Gt(22, t, a, n), t.elementType = W, t.lanes = i, t.stateNode = {
        isHidden: false
      }, t;
    }
    function Pu(t, n, i) {
      return t = Gt(6, t, null, n), t.lanes = i, t;
    }
    function $u(t, n, i) {
      return n = Gt(4, t.children !== null ? t.children : [], t.key, n), n.lanes = i, n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, n;
    }
    function _y(t, n, i, a, d) {
      this.tag = n, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = la(0), this.expirationTimes = la(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = la(0), this.identifierPrefix = a, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
    }
    function zu(t, n, i, a, d, p, w, M, R) {
      return t = new _y(t, n, i, M, R), n === 1 ? (n = 1, p === true && (n |= 8)) : n = 0, p = Gt(3, null, null, n), t.current = p, p.stateNode = t, p.memoizedState = {
        element: a,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, Ga(p), t;
    }
    function Ny(t, n, i) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: O,
        key: a == null ? null : "" + a,
        children: t,
        containerInfo: n,
        implementation: i
      };
    }
    function _h(t) {
      if (!t) return tr;
      t = t._reactInternals;
      e: {
        if (An(t) !== t || t.tag !== 1) throw Error(o(170));
        var n = t;
        do {
          switch (n.tag) {
            case 3:
              n = n.stateNode.context;
              break e;
            case 1:
              if (kt(n.type)) {
                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          n = n.return;
        } while (n !== null);
        throw Error(o(171));
      }
      if (t.tag === 1) {
        var i = t.type;
        if (kt(i)) return qd(t, i, n);
      }
      return n;
    }
    function Nh(t, n, i, a, d, p, w, M, R) {
      return t = zu(i, a, true, t, d, p, w, M, R), t.context = _h(null), i = t.current, a = wt(), d = ar(i), p = Dn(a, d), p.callback = n ?? null, or(i, p, d), t.current.lanes = d, Ho(t, d, a), Nt(t, a), t;
    }
    function ol(t, n, i, a) {
      var d = n.current, p = wt(), w = ar(d);
      return i = _h(i), n.context === null ? n.context = i : n.pendingContext = i, n = Dn(p, w), n.payload = {
        element: t
      }, a = a === void 0 ? null : a, a !== null && (n.callback = a), t = or(d, n, w), t !== null && (un(t, d, w, p), zs(t, d, w)), w;
    }
    function il(t) {
      if (t = t.current, !t.child) return null;
      switch (t.child.tag) {
        case 5:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Mh(t, n) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var i = t.retryLane;
        t.retryLane = i !== 0 && i < n ? i : n;
      }
    }
    function Du(t, n) {
      Mh(t, n), (t = t.alternate) && Mh(t, n);
    }
    function My() {
      return null;
    }
    var Ih = typeof reportError == "function" ? reportError : function(t) {
      console.error(t);
    };
    function Lu(t) {
      this._internalRoot = t;
    }
    sl.prototype.render = Lu.prototype.render = function(t) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      ol(t, n, null, null);
    }, sl.prototype.unmount = Lu.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var n = t.containerInfo;
        zr(function() {
          ol(null, t, null, null);
        }), n[Tn] = null;
      }
    };
    function sl(t) {
      this._internalRoot = t;
    }
    sl.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var n = cd();
        t = {
          blockedOn: null,
          target: t,
          priority: n
        };
        for (var i = 0; i < Qn.length && n !== 0 && n < Qn[i].priority; i++) ;
        Qn.splice(i, 0, t), i === 0 && hd(t);
      }
    };
    function Ou(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function ll(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
    }
    function bh() {
    }
    function Iy(t, n, i, a, d) {
      if (d) {
        if (typeof a == "function") {
          var p = a;
          a = function() {
            var Y = il(w);
            p.call(Y);
          };
        }
        var w = Nh(n, a, t, 0, null, false, false, "", bh);
        return t._reactRootContainer = w, t[Tn] = w.current, ni(t.nodeType === 8 ? t.parentNode : t), zr(), w;
      }
      for (; d = t.lastChild; ) t.removeChild(d);
      if (typeof a == "function") {
        var M = a;
        a = function() {
          var Y = il(R);
          M.call(Y);
        };
      }
      var R = zu(t, 0, false, null, null, false, false, "", bh);
      return t._reactRootContainer = R, t[Tn] = R.current, ni(t.nodeType === 8 ? t.parentNode : t), zr(function() {
        ol(n, R, i, a);
      }), R;
    }
    function al(t, n, i, a, d) {
      var p = i._reactRootContainer;
      if (p) {
        var w = p;
        if (typeof d == "function") {
          var M = d;
          d = function() {
            var R = il(w);
            M.call(R);
          };
        }
        ol(n, w, t, d);
      } else w = Iy(i, n, t, d, a);
      return il(w);
    }
    ad = function(t) {
      switch (t.tag) {
        case 3:
          var n = t.stateNode;
          if (n.current.memoizedState.isDehydrated) {
            var i = jo(n.pendingLanes);
            i !== 0 && (aa(n, i | 1), Nt(n, Be()), (Ne & 6) === 0 && (vo = Be() + 500, nr()));
          }
          break;
        case 13:
          zr(function() {
            var a = zn(t, 1);
            if (a !== null) {
              var d = wt();
              un(a, t, 1, d);
            }
          }), Du(t, 1);
      }
    }, ua = function(t) {
      if (t.tag === 13) {
        var n = zn(t, 134217728);
        if (n !== null) {
          var i = wt();
          un(n, t, 134217728, i);
        }
        Du(t, 134217728);
      }
    }, ud = function(t) {
      if (t.tag === 13) {
        var n = ar(t), i = zn(t, n);
        if (i !== null) {
          var a = wt();
          un(i, t, n, a);
        }
        Du(t, n);
      }
    }, cd = function() {
      return Ae;
    }, dd = function(t, n) {
      var i = Ae;
      try {
        return Ae = t, n();
      } finally {
        Ae = i;
      }
    }, In = function(t, n, i) {
      switch (n) {
        case "input":
          if (Me(t, i), n = i.name, i.type === "radio" && n != null) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < i.length; n++) {
              var a = i[n];
              if (a !== t && a.form === t.form) {
                var d = _s(a);
                if (!d) throw Error(o(90));
                Ue(a), Me(a, d);
              }
            }
          }
          break;
        case "textarea":
          Bt(t, i);
          break;
        case "select":
          n = i.value, n != null && Ft(t, !!i.multiple, n, false);
      }
    }, Xi = bu, Gi = zr;
    var by = {
      usingClientEntryPoint: false,
      Events: [
        ii,
        oo,
        _s,
        Wi,
        Yi,
        bu
      ]
    }, wi = {
      findFiberByHostInstance: Mr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    }, Ay = {
      bundleType: wi.bundleType,
      version: wi.version,
      rendererPackageName: wi.rendererPackageName,
      rendererConfig: wi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: b.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(t) {
        return t = Ji(t), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: wi.findFiberByHostInstance || My,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ul.isDisabled && ul.supportsFiber) try {
        Qr = ul.inject(Ay), Ht = ul;
      } catch {
      }
    }
    return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by, Mt.createPortal = function(t, n) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ou(n)) throw Error(o(200));
      return Ny(t, n, null, i);
    }, Mt.createRoot = function(t, n) {
      if (!Ou(t)) throw Error(o(299));
      var i = false, a = "", d = Ih;
      return n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), n = zu(t, 1, false, null, null, i, false, a, d), t[Tn] = n.current, ni(t.nodeType === 8 ? t.parentNode : t), new Lu(n);
    }, Mt.findDOMNode = function(t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var n = t._reactInternals;
      if (n === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
      return t = Ji(n), t = t === null ? null : t.stateNode, t;
    }, Mt.flushSync = function(t) {
      return zr(t);
    }, Mt.hydrate = function(t, n, i) {
      if (!ll(n)) throw Error(o(200));
      return al(null, t, n, true, i);
    }, Mt.hydrateRoot = function(t, n, i) {
      if (!Ou(t)) throw Error(o(405));
      var a = i != null && i.hydratedSources || null, d = false, p = "", w = Ih;
      if (i != null && (i.unstable_strictMode === true && (d = true), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (w = i.onRecoverableError)), n = Nh(n, null, t, 1, i ?? null, d, false, p, w), t[Tn] = n.current, ni(t), a) for (t = 0; t < a.length; t++) i = a[t], d = i._getVersion, d = d(i._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [
        i,
        d
      ] : n.mutableSourceEagerHydrationData.push(i, d);
      return new sl(n);
    }, Mt.render = function(t, n, i) {
      if (!ll(n)) throw Error(o(200));
      return al(null, t, n, false, i);
    }, Mt.unmountComponentAtNode = function(t) {
      if (!ll(t)) throw Error(o(40));
      return t._reactRootContainer ? (zr(function() {
        al(null, null, t, false, function() {
          t._reactRootContainer = null, t[Tn] = null;
        });
      }), true) : false;
    }, Mt.unstable_batchedUpdates = bu, Mt.unstable_renderSubtreeIntoContainer = function(t, n, i, a) {
      if (!ll(i)) throw Error(o(200));
      if (t == null || t._reactInternals === void 0) throw Error(o(38));
      return al(t, n, i, false, a);
    }, Mt.version = "18.3.1-next-f1338f8080-20240426", Mt;
  }
  var Lh;
  function d0() {
    if (Lh) return ju.exports;
    Lh = 1;
    function e() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
    }
    return e(), ju.exports = Ly(), ju.exports;
  }
  var Oh;
  function Oy() {
    if (Oh) return cl;
    Oh = 1;
    var e = d0();
    return cl.createRoot = e.createRoot, cl.hydrateRoot = e.hydrateRoot, cl;
  }
  var Fy = Oy();
  function By(e) {
    if (!(e instanceof HTMLElement)) return false;
    const r = e.tagName;
    return r === "INPUT" || r === "TEXTAREA" || e.isContentEditable;
  }
  function jy(e) {
    return e.ctrlKey || e.metaKey;
  }
  function $c(e, r = true) {
    const o = $.useRef(e);
    o.current = e, $.useEffect(() => {
      if (!r) return;
      function s(l) {
        var _a, _b, _c2, _d, _e2, _f;
        if (By(l.target)) return;
        const u = o.current, c = jy(l);
        if (c && (l.key === "+" || l.key === "=")) {
          l.preventDefault(), (_a = u.onZoomIn) == null ? void 0 : _a.call(u);
          return;
        }
        if (c && l.key === "-") {
          l.preventDefault(), (_b = u.onZoomOut) == null ? void 0 : _b.call(u);
          return;
        }
        if (c && l.key === "0") {
          l.preventDefault(), (_c2 = u.onFitView) == null ? void 0 : _c2.call(u);
          return;
        }
        if (c && l.key.toLowerCase() === "o") {
          l.preventDefault(), (_d = u.onOpenFile) == null ? void 0 : _d.call(u);
          return;
        }
        if (c && l.shiftKey && l.key.toLowerCase() === "e") {
          l.preventDefault(), (_e2 = u.onExportSelection) == null ? void 0 : _e2.call(u);
          return;
        }
        c && !l.shiftKey && l.key.toLowerCase() === "e" && (l.preventDefault(), (_f = u.onExport) == null ? void 0 : _f.call(u));
      }
      return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
    }, [
      r
    ]);
  }
  function gt(e) {
    if (typeof e == "string" || typeof e == "number") return "" + e;
    let r = "";
    if (Array.isArray(e)) for (let o = 0, s; o < e.length; o++) (s = gt(e[o])) !== "" && (r += (r && " ") + s);
    else for (let o in e) e[o] && (r += (r && " ") + o);
    return r;
  }
  var Uu = {
    exports: {}
  }, Wu = {}, Yu = {
    exports: {}
  }, Xu = {};
  var Fh;
  function Hy() {
    if (Fh) return Xu;
    Fh = 1;
    var e = ji();
    function r(y, v) {
      return y === v && (y !== 0 || 1 / y === 1 / v) || y !== y && v !== v;
    }
    var o = typeof Object.is == "function" ? Object.is : r, s = e.useState, l = e.useEffect, u = e.useLayoutEffect, c = e.useDebugValue;
    function f(y, v) {
      var x = v(), E = s({
        inst: {
          value: x,
          getSnapshot: v
        }
      }), S = E[0].inst, _ = E[1];
      return u(function() {
        S.value = x, S.getSnapshot = v, m(S) && _({
          inst: S
        });
      }, [
        y,
        x,
        v
      ]), l(function() {
        return m(S) && _({
          inst: S
        }), y(function() {
          m(S) && _({
            inst: S
          });
        });
      }, [
        y
      ]), c(x), x;
    }
    function m(y) {
      var v = y.getSnapshot;
      y = y.value;
      try {
        var x = v();
        return !o(y, x);
      } catch {
        return true;
      }
    }
    function h(y, v) {
      return v();
    }
    var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : f;
    return Xu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, Xu;
  }
  var Bh;
  function Vy() {
    return Bh || (Bh = 1, Yu.exports = Hy()), Yu.exports;
  }
  var jh;
  function Uy() {
    if (jh) return Wu;
    jh = 1;
    var e = ji(), r = Vy();
    function o(h, g) {
      return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
    }
    var s = typeof Object.is == "function" ? Object.is : o, l = r.useSyncExternalStore, u = e.useRef, c = e.useEffect, f = e.useMemo, m = e.useDebugValue;
    return Wu.useSyncExternalStoreWithSelector = function(h, g, y, v, x) {
      var E = u(null);
      if (E.current === null) {
        var S = {
          hasValue: false,
          value: null
        };
        E.current = S;
      } else S = E.current;
      E = f(function() {
        function N(O) {
          if (!T) {
            if (T = true, L = O, O = v(O), x !== void 0 && S.hasValue) {
              var Z = S.value;
              if (x(Z, O)) return b = Z;
            }
            return b = O;
          }
          if (Z = b, s(L, O)) return Z;
          var ee = v(O);
          return x !== void 0 && x(Z, ee) ? (L = O, Z) : (L = O, b = ee);
        }
        var T = false, L, b, X = y === void 0 ? null : y;
        return [
          function() {
            return N(g());
          },
          X === null ? void 0 : function() {
            return N(X());
          }
        ];
      }, [
        g,
        y,
        v,
        x
      ]);
      var _ = l(h, E[0], E[1]);
      return c(function() {
        S.hasValue = true, S.value = _;
      }, [
        _
      ]), m(_), _;
    }, Wu;
  }
  var Hh;
  function Wy() {
    return Hh || (Hh = 1, Uu.exports = Uy()), Uu.exports;
  }
  var Yy = Wy();
  const Xy = c0(Yy), Gy = {}, Vh = (e) => {
    let r;
    const o = /* @__PURE__ */ new Set(), s = (g, y) => {
      const v = typeof g == "function" ? g(r) : g;
      if (!Object.is(v, r)) {
        const x = r;
        r = y ?? (typeof v != "object" || v === null) ? v : Object.assign({}, r, v), o.forEach((E) => E(r, x));
      }
    }, l = () => r, m = {
      setState: s,
      getState: l,
      getInitialState: () => h,
      subscribe: (g) => (o.add(g), () => o.delete(g)),
      destroy: () => {
        (Gy ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), o.clear();
      }
    }, h = r = e(s, l, m);
    return m;
  }, Ky = (e) => e ? Vh(e) : Vh, { useDebugValue: Qy } = Q, { useSyncExternalStoreWithSelector: Zy } = Xy, qy = (e) => e;
  function f0(e, r = qy, o) {
    const s = Zy(e.subscribe, e.getState, e.getServerState || e.getInitialState, r, o);
    return Qy(s), s;
  }
  const Uh = (e, r) => {
    const o = Ky(e), s = (l, u = r) => f0(o, l, u);
    return Object.assign(s, o), s;
  }, Jy = (e, r) => e ? Uh(e, r) : Uh;
  function At(e, r) {
    if (Object.is(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    if (e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return false;
      for (const [s, l] of e) if (!Object.is(l, r.get(s))) return false;
      return true;
    }
    if (e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return false;
      for (const s of e) if (!r.has(s)) return false;
      return true;
    }
    const o = Object.keys(e);
    if (o.length !== Object.keys(r).length) return false;
    for (const s of o) if (!Object.prototype.hasOwnProperty.call(r, s) || !Object.is(e[s], r[s])) return false;
    return true;
  }
  var e1 = {
    value: () => {
    }
  };
  function Yl() {
    for (var e = 0, r = arguments.length, o = {}, s; e < r; ++e) {
      if (!(s = arguments[e] + "") || s in o || /[\s.]/.test(s)) throw new Error("illegal type: " + s);
      o[s] = [];
    }
    return new kl(o);
  }
  function kl(e) {
    this._ = e;
  }
  function t1(e, r) {
    return e.trim().split(/^|\s+/).map(function(o) {
      var s = "", l = o.indexOf(".");
      if (l >= 0 && (s = o.slice(l + 1), o = o.slice(0, l)), o && !r.hasOwnProperty(o)) throw new Error("unknown type: " + o);
      return {
        type: o,
        name: s
      };
    });
  }
  kl.prototype = Yl.prototype = {
    constructor: kl,
    on: function(e, r) {
      var o = this._, s = t1(e + "", o), l, u = -1, c = s.length;
      if (arguments.length < 2) {
        for (; ++u < c; ) if ((l = (e = s[u]).type) && (l = n1(o[l], e.name))) return l;
        return;
      }
      if (r != null && typeof r != "function") throw new Error("invalid callback: " + r);
      for (; ++u < c; ) if (l = (e = s[u]).type) o[l] = Wh(o[l], e.name, r);
      else if (r == null) for (l in o) o[l] = Wh(o[l], e.name, null);
      return this;
    },
    copy: function() {
      var e = {}, r = this._;
      for (var o in r) e[o] = r[o].slice();
      return new kl(e);
    },
    call: function(e, r) {
      if ((l = arguments.length - 2) > 0) for (var o = new Array(l), s = 0, l, u; s < l; ++s) o[s] = arguments[s + 2];
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (u = this._[e], s = 0, l = u.length; s < l; ++s) u[s].value.apply(r, o);
    },
    apply: function(e, r, o) {
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (var s = this._[e], l = 0, u = s.length; l < u; ++l) s[l].value.apply(r, o);
    }
  };
  function n1(e, r) {
    for (var o = 0, s = e.length, l; o < s; ++o) if ((l = e[o]).name === r) return l.value;
  }
  function Wh(e, r, o) {
    for (var s = 0, l = e.length; s < l; ++s) if (e[s].name === r) {
      e[s] = e1, e = e.slice(0, s).concat(e.slice(s + 1));
      break;
    }
    return o != null && e.push({
      name: r,
      value: o
    }), e;
  }
  var ac = "http://www.w3.org/1999/xhtml";
  const Yh = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: ac,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function Xl(e) {
    var r = e += "", o = r.indexOf(":");
    return o >= 0 && (r = e.slice(0, o)) !== "xmlns" && (e = e.slice(o + 1)), Yh.hasOwnProperty(r) ? {
      space: Yh[r],
      local: e
    } : e;
  }
  function r1(e) {
    return function() {
      var r = this.ownerDocument, o = this.namespaceURI;
      return o === ac && r.documentElement.namespaceURI === ac ? r.createElement(e) : r.createElementNS(o, e);
    };
  }
  function o1(e) {
    return function() {
      return this.ownerDocument.createElementNS(e.space, e.local);
    };
  }
  function h0(e) {
    var r = Xl(e);
    return (r.local ? o1 : r1)(r);
  }
  function i1() {
  }
  function zc(e) {
    return e == null ? i1 : function() {
      return this.querySelector(e);
    };
  }
  function s1(e) {
    typeof e != "function" && (e = zc(e));
    for (var r = this._groups, o = r.length, s = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = s[l] = new Array(c), m, h, g = 0; g < c; ++g) (m = u[g]) && (h = e.call(m, m.__data__, g, u)) && ("__data__" in m && (h.__data__ = m.__data__), f[g] = h);
    return new Ot(s, this._parents);
  }
  function l1(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function a1() {
    return [];
  }
  function p0(e) {
    return e == null ? a1 : function() {
      return this.querySelectorAll(e);
    };
  }
  function u1(e) {
    return function() {
      return l1(e.apply(this, arguments));
    };
  }
  function c1(e) {
    typeof e == "function" ? e = u1(e) : e = p0(e);
    for (var r = this._groups, o = r.length, s = [], l = [], u = 0; u < o; ++u) for (var c = r[u], f = c.length, m, h = 0; h < f; ++h) (m = c[h]) && (s.push(e.call(m, m.__data__, h, c)), l.push(m));
    return new Ot(s, l);
  }
  function m0(e) {
    return function() {
      return this.matches(e);
    };
  }
  function g0(e) {
    return function(r) {
      return r.matches(e);
    };
  }
  var d1 = Array.prototype.find;
  function f1(e) {
    return function() {
      return d1.call(this.children, e);
    };
  }
  function h1() {
    return this.firstElementChild;
  }
  function p1(e) {
    return this.select(e == null ? h1 : f1(typeof e == "function" ? e : g0(e)));
  }
  var m1 = Array.prototype.filter;
  function g1() {
    return Array.from(this.children);
  }
  function y1(e) {
    return function() {
      return m1.call(this.children, e);
    };
  }
  function v1(e) {
    return this.selectAll(e == null ? g1 : y1(typeof e == "function" ? e : g0(e)));
  }
  function w1(e) {
    typeof e != "function" && (e = m0(e));
    for (var r = this._groups, o = r.length, s = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = s[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && f.push(m);
    return new Ot(s, this._parents);
  }
  function y0(e) {
    return new Array(e.length);
  }
  function x1() {
    return new Ot(this._enter || this._groups.map(y0), this._parents);
  }
  function Tl(e, r) {
    this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = r;
  }
  Tl.prototype = {
    constructor: Tl,
    appendChild: function(e) {
      return this._parent.insertBefore(e, this._next);
    },
    insertBefore: function(e, r) {
      return this._parent.insertBefore(e, r);
    },
    querySelector: function(e) {
      return this._parent.querySelector(e);
    },
    querySelectorAll: function(e) {
      return this._parent.querySelectorAll(e);
    }
  };
  function S1(e) {
    return function() {
      return e;
    };
  }
  function E1(e, r, o, s, l, u) {
    for (var c = 0, f, m = r.length, h = u.length; c < h; ++c) (f = r[c]) ? (f.__data__ = u[c], s[c] = f) : o[c] = new Tl(e, u[c]);
    for (; c < m; ++c) (f = r[c]) && (l[c] = f);
  }
  function k1(e, r, o, s, l, u, c) {
    var f, m, h = /* @__PURE__ */ new Map(), g = r.length, y = u.length, v = new Array(g), x;
    for (f = 0; f < g; ++f) (m = r[f]) && (v[f] = x = c.call(m, m.__data__, f, r) + "", h.has(x) ? l[f] = m : h.set(x, m));
    for (f = 0; f < y; ++f) x = c.call(e, u[f], f, u) + "", (m = h.get(x)) ? (s[f] = m, m.__data__ = u[f], h.delete(x)) : o[f] = new Tl(e, u[f]);
    for (f = 0; f < g; ++f) (m = r[f]) && h.get(v[f]) === m && (l[f] = m);
  }
  function C1(e) {
    return e.__data__;
  }
  function _1(e, r) {
    if (!arguments.length) return Array.from(this, C1);
    var o = r ? k1 : E1, s = this._parents, l = this._groups;
    typeof e != "function" && (e = S1(e));
    for (var u = l.length, c = new Array(u), f = new Array(u), m = new Array(u), h = 0; h < u; ++h) {
      var g = s[h], y = l[h], v = y.length, x = N1(e.call(g, g && g.__data__, h, s)), E = x.length, S = f[h] = new Array(E), _ = c[h] = new Array(E), N = m[h] = new Array(v);
      o(g, y, S, _, N, x, r);
      for (var T = 0, L = 0, b, X; T < E; ++T) if (b = S[T]) {
        for (T >= L && (L = T + 1); !(X = _[L]) && ++L < E; ) ;
        b._next = X || null;
      }
    }
    return c = new Ot(c, s), c._enter = f, c._exit = m, c;
  }
  function N1(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
  }
  function M1() {
    return new Ot(this._exit || this._groups.map(y0), this._parents);
  }
  function I1(e, r, o) {
    var s = this.enter(), l = this, u = this.exit();
    return typeof e == "function" ? (s = e(s), s && (s = s.selection())) : s = s.append(e + ""), r != null && (l = r(l), l && (l = l.selection())), o == null ? u.remove() : o(u), s && l ? s.merge(l).order() : l;
  }
  function b1(e) {
    for (var r = e.selection ? e.selection() : e, o = this._groups, s = r._groups, l = o.length, u = s.length, c = Math.min(l, u), f = new Array(l), m = 0; m < c; ++m) for (var h = o[m], g = s[m], y = h.length, v = f[m] = new Array(y), x, E = 0; E < y; ++E) (x = h[E] || g[E]) && (v[E] = x);
    for (; m < l; ++m) f[m] = o[m];
    return new Ot(f, this._parents);
  }
  function A1() {
    for (var e = this._groups, r = -1, o = e.length; ++r < o; ) for (var s = e[r], l = s.length - 1, u = s[l], c; --l >= 0; ) (c = s[l]) && (u && c.compareDocumentPosition(u) ^ 4 && u.parentNode.insertBefore(c, u), u = c);
    return this;
  }
  function T1(e) {
    e || (e = R1);
    function r(y, v) {
      return y && v ? e(y.__data__, v.__data__) : !y - !v;
    }
    for (var o = this._groups, s = o.length, l = new Array(s), u = 0; u < s; ++u) {
      for (var c = o[u], f = c.length, m = l[u] = new Array(f), h, g = 0; g < f; ++g) (h = c[g]) && (m[g] = h);
      m.sort(r);
    }
    return new Ot(l, this._parents).order();
  }
  function R1(e, r) {
    return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
  }
  function P1() {
    var e = arguments[0];
    return arguments[0] = this, e.apply(null, arguments), this;
  }
  function $1() {
    return Array.from(this);
  }
  function z1() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var s = e[r], l = 0, u = s.length; l < u; ++l) {
      var c = s[l];
      if (c) return c;
    }
    return null;
  }
  function D1() {
    let e = 0;
    for (const r of this) ++e;
    return e;
  }
  function L1() {
    return !this.node();
  }
  function O1(e) {
    for (var r = this._groups, o = 0, s = r.length; o < s; ++o) for (var l = r[o], u = 0, c = l.length, f; u < c; ++u) (f = l[u]) && e.call(f, f.__data__, u, l);
    return this;
  }
  function F1(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function B1(e) {
    return function() {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function j1(e, r) {
    return function() {
      this.setAttribute(e, r);
    };
  }
  function H1(e, r) {
    return function() {
      this.setAttributeNS(e.space, e.local, r);
    };
  }
  function V1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? this.removeAttribute(e) : this.setAttribute(e, o);
    };
  }
  function U1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, o);
    };
  }
  function W1(e, r) {
    var o = Xl(e);
    if (arguments.length < 2) {
      var s = this.node();
      return o.local ? s.getAttributeNS(o.space, o.local) : s.getAttribute(o);
    }
    return this.each((r == null ? o.local ? B1 : F1 : typeof r == "function" ? o.local ? U1 : V1 : o.local ? H1 : j1)(o, r));
  }
  function v0(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
  }
  function Y1(e) {
    return function() {
      this.style.removeProperty(e);
    };
  }
  function X1(e, r, o) {
    return function() {
      this.style.setProperty(e, r, o);
    };
  }
  function G1(e, r, o) {
    return function() {
      var s = r.apply(this, arguments);
      s == null ? this.style.removeProperty(e) : this.style.setProperty(e, s, o);
    };
  }
  function K1(e, r, o) {
    return arguments.length > 1 ? this.each((r == null ? Y1 : typeof r == "function" ? G1 : X1)(e, r, o ?? "")) : Io(this.node(), e);
  }
  function Io(e, r) {
    return e.style.getPropertyValue(r) || v0(e).getComputedStyle(e, null).getPropertyValue(r);
  }
  function Q1(e) {
    return function() {
      delete this[e];
    };
  }
  function Z1(e, r) {
    return function() {
      this[e] = r;
    };
  }
  function q1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? delete this[e] : this[e] = o;
    };
  }
  function J1(e, r) {
    return arguments.length > 1 ? this.each((r == null ? Q1 : typeof r == "function" ? q1 : Z1)(e, r)) : this.node()[e];
  }
  function w0(e) {
    return e.trim().split(/^|\s+/);
  }
  function Dc(e) {
    return e.classList || new x0(e);
  }
  function x0(e) {
    this._node = e, this._names = w0(e.getAttribute("class") || "");
  }
  x0.prototype = {
    add: function(e) {
      var r = this._names.indexOf(e);
      r < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function(e) {
      var r = this._names.indexOf(e);
      r >= 0 && (this._names.splice(r, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function(e) {
      return this._names.indexOf(e) >= 0;
    }
  };
  function S0(e, r) {
    for (var o = Dc(e), s = -1, l = r.length; ++s < l; ) o.add(r[s]);
  }
  function E0(e, r) {
    for (var o = Dc(e), s = -1, l = r.length; ++s < l; ) o.remove(r[s]);
  }
  function ev(e) {
    return function() {
      S0(this, e);
    };
  }
  function tv(e) {
    return function() {
      E0(this, e);
    };
  }
  function nv(e, r) {
    return function() {
      (r.apply(this, arguments) ? S0 : E0)(this, e);
    };
  }
  function rv(e, r) {
    var o = w0(e + "");
    if (arguments.length < 2) {
      for (var s = Dc(this.node()), l = -1, u = o.length; ++l < u; ) if (!s.contains(o[l])) return false;
      return true;
    }
    return this.each((typeof r == "function" ? nv : r ? ev : tv)(o, r));
  }
  function ov() {
    this.textContent = "";
  }
  function iv(e) {
    return function() {
      this.textContent = e;
    };
  }
  function sv(e) {
    return function() {
      var r = e.apply(this, arguments);
      this.textContent = r ?? "";
    };
  }
  function lv(e) {
    return arguments.length ? this.each(e == null ? ov : (typeof e == "function" ? sv : iv)(e)) : this.node().textContent;
  }
  function av() {
    this.innerHTML = "";
  }
  function uv(e) {
    return function() {
      this.innerHTML = e;
    };
  }
  function cv(e) {
    return function() {
      var r = e.apply(this, arguments);
      this.innerHTML = r ?? "";
    };
  }
  function dv(e) {
    return arguments.length ? this.each(e == null ? av : (typeof e == "function" ? cv : uv)(e)) : this.node().innerHTML;
  }
  function fv() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function hv() {
    return this.each(fv);
  }
  function pv() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function mv() {
    return this.each(pv);
  }
  function gv(e) {
    var r = typeof e == "function" ? e : h0(e);
    return this.select(function() {
      return this.appendChild(r.apply(this, arguments));
    });
  }
  function yv() {
    return null;
  }
  function vv(e, r) {
    var o = typeof e == "function" ? e : h0(e), s = r == null ? yv : typeof r == "function" ? r : zc(r);
    return this.select(function() {
      return this.insertBefore(o.apply(this, arguments), s.apply(this, arguments) || null);
    });
  }
  function wv() {
    var e = this.parentNode;
    e && e.removeChild(this);
  }
  function xv() {
    return this.each(wv);
  }
  function Sv() {
    var e = this.cloneNode(false), r = this.parentNode;
    return r ? r.insertBefore(e, this.nextSibling) : e;
  }
  function Ev() {
    var e = this.cloneNode(true), r = this.parentNode;
    return r ? r.insertBefore(e, this.nextSibling) : e;
  }
  function kv(e) {
    return this.select(e ? Ev : Sv);
  }
  function Cv(e) {
    return arguments.length ? this.property("__data__", e) : this.node().__data__;
  }
  function _v(e) {
    return function(r) {
      e.call(this, r, this.__data__);
    };
  }
  function Nv(e) {
    return e.trim().split(/^|\s+/).map(function(r) {
      var o = "", s = r.indexOf(".");
      return s >= 0 && (o = r.slice(s + 1), r = r.slice(0, s)), {
        type: r,
        name: o
      };
    });
  }
  function Mv(e) {
    return function() {
      var r = this.__on;
      if (r) {
        for (var o = 0, s = -1, l = r.length, u; o < l; ++o) u = r[o], (!e.type || u.type === e.type) && u.name === e.name ? this.removeEventListener(u.type, u.listener, u.options) : r[++s] = u;
        ++s ? r.length = s : delete this.__on;
      }
    };
  }
  function Iv(e, r, o) {
    return function() {
      var s = this.__on, l, u = _v(r);
      if (s) {
        for (var c = 0, f = s.length; c < f; ++c) if ((l = s[c]).type === e.type && l.name === e.name) {
          this.removeEventListener(l.type, l.listener, l.options), this.addEventListener(l.type, l.listener = u, l.options = o), l.value = r;
          return;
        }
      }
      this.addEventListener(e.type, u, o), l = {
        type: e.type,
        name: e.name,
        value: r,
        listener: u,
        options: o
      }, s ? s.push(l) : this.__on = [
        l
      ];
    };
  }
  function bv(e, r, o) {
    var s = Nv(e + ""), l, u = s.length, c;
    if (arguments.length < 2) {
      var f = this.node().__on;
      if (f) {
        for (var m = 0, h = f.length, g; m < h; ++m) for (l = 0, g = f[m]; l < u; ++l) if ((c = s[l]).type === g.type && c.name === g.name) return g.value;
      }
      return;
    }
    for (f = r ? Iv : Mv, l = 0; l < u; ++l) this.each(f(s[l], r, o));
    return this;
  }
  function k0(e, r, o) {
    var s = v0(e), l = s.CustomEvent;
    typeof l == "function" ? l = new l(r, o) : (l = s.document.createEvent("Event"), o ? (l.initEvent(r, o.bubbles, o.cancelable), l.detail = o.detail) : l.initEvent(r, false, false)), e.dispatchEvent(l);
  }
  function Av(e, r) {
    return function() {
      return k0(this, e, r);
    };
  }
  function Tv(e, r) {
    return function() {
      return k0(this, e, r.apply(this, arguments));
    };
  }
  function Rv(e, r) {
    return this.each((typeof r == "function" ? Tv : Av)(e, r));
  }
  function* Pv() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var s = e[r], l = 0, u = s.length, c; l < u; ++l) (c = s[l]) && (yield c);
  }
  var C0 = [
    null
  ];
  function Ot(e, r) {
    this._groups = e, this._parents = r;
  }
  function Hi() {
    return new Ot([
      [
        document.documentElement
      ]
    ], C0);
  }
  function $v() {
    return this;
  }
  Ot.prototype = Hi.prototype = {
    constructor: Ot,
    select: s1,
    selectAll: c1,
    selectChild: p1,
    selectChildren: v1,
    filter: w1,
    data: _1,
    enter: x1,
    exit: M1,
    join: I1,
    merge: b1,
    selection: $v,
    order: A1,
    sort: T1,
    call: P1,
    nodes: $1,
    node: z1,
    size: D1,
    empty: L1,
    each: O1,
    attr: W1,
    style: K1,
    property: J1,
    classed: rv,
    text: lv,
    html: dv,
    raise: hv,
    lower: mv,
    append: gv,
    insert: vv,
    remove: xv,
    clone: kv,
    datum: Cv,
    on: bv,
    dispatch: Rv,
    [Symbol.iterator]: Pv
  };
  function Qt(e) {
    return typeof e == "string" ? new Ot([
      [
        document.querySelector(e)
      ]
    ], [
      document.documentElement
    ]) : new Ot([
      [
        e
      ]
    ], C0);
  }
  function zv(e) {
    let r;
    for (; r = e.sourceEvent; ) e = r;
    return e;
  }
  function cn(e, r) {
    if (e = zv(e), r === void 0 && (r = e.currentTarget), r) {
      var o = r.ownerSVGElement || r;
      if (o.createSVGPoint) {
        var s = o.createSVGPoint();
        return s.x = e.clientX, s.y = e.clientY, s = s.matrixTransform(r.getScreenCTM().inverse()), [
          s.x,
          s.y
        ];
      }
      if (r.getBoundingClientRect) {
        var l = r.getBoundingClientRect();
        return [
          e.clientX - l.left - r.clientLeft,
          e.clientY - l.top - r.clientTop
        ];
      }
    }
    return [
      e.pageX,
      e.pageY
    ];
  }
  const Dv = {
    passive: false
  }, Ai = {
    capture: true,
    passive: false
  };
  function Gu(e) {
    e.stopImmediatePropagation();
  }
  function _o(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function _0(e) {
    var r = e.document.documentElement, o = Qt(e).on("dragstart.drag", _o, Ai);
    "onselectstart" in r ? o.on("selectstart.drag", _o, Ai) : (r.__noselect = r.style.MozUserSelect, r.style.MozUserSelect = "none");
  }
  function N0(e, r) {
    var o = e.document.documentElement, s = Qt(e).on("dragstart.drag", null);
    r && (s.on("click.drag", _o, Ai), setTimeout(function() {
      s.on("click.drag", null);
    }, 0)), "onselectstart" in o ? s.on("selectstart.drag", null) : (o.style.MozUserSelect = o.__noselect, delete o.__noselect);
  }
  const dl = (e) => () => e;
  function uc(e, { sourceEvent: r, subject: o, target: s, identifier: l, active: u, x: c, y: f, dx: m, dy: h, dispatch: g }) {
    Object.defineProperties(this, {
      type: {
        value: e,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: r,
        enumerable: true,
        configurable: true
      },
      subject: {
        value: o,
        enumerable: true,
        configurable: true
      },
      target: {
        value: s,
        enumerable: true,
        configurable: true
      },
      identifier: {
        value: l,
        enumerable: true,
        configurable: true
      },
      active: {
        value: u,
        enumerable: true,
        configurable: true
      },
      x: {
        value: c,
        enumerable: true,
        configurable: true
      },
      y: {
        value: f,
        enumerable: true,
        configurable: true
      },
      dx: {
        value: m,
        enumerable: true,
        configurable: true
      },
      dy: {
        value: h,
        enumerable: true,
        configurable: true
      },
      _: {
        value: g
      }
    });
  }
  uc.prototype.on = function() {
    var e = this._.on.apply(this._, arguments);
    return e === this._ ? this : e;
  };
  function Lv(e) {
    return !e.ctrlKey && !e.button;
  }
  function Ov() {
    return this.parentNode;
  }
  function Fv(e, r) {
    return r ?? {
      x: e.x,
      y: e.y
    };
  }
  function Bv() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function jv() {
    var e = Lv, r = Ov, o = Fv, s = Bv, l = {}, u = Yl("start", "drag", "end"), c = 0, f, m, h, g, y = 0;
    function v(b) {
      b.on("mousedown.drag", x).filter(s).on("touchstart.drag", _).on("touchmove.drag", N, Dv).on("touchend.drag touchcancel.drag", T).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function x(b, X) {
      if (!(g || !e.call(this, b, X))) {
        var O = L(this, r.call(this, b, X), b, X, "mouse");
        O && (Qt(b.view).on("mousemove.drag", E, Ai).on("mouseup.drag", S, Ai), _0(b.view), Gu(b), h = false, f = b.clientX, m = b.clientY, O("start", b));
      }
    }
    function E(b) {
      if (_o(b), !h) {
        var X = b.clientX - f, O = b.clientY - m;
        h = X * X + O * O > y;
      }
      l.mouse("drag", b);
    }
    function S(b) {
      Qt(b.view).on("mousemove.drag mouseup.drag", null), N0(b.view, h), _o(b), l.mouse("end", b);
    }
    function _(b, X) {
      if (e.call(this, b, X)) {
        var O = b.changedTouches, Z = r.call(this, b, X), ee = O.length, G, V;
        for (G = 0; G < ee; ++G) (V = L(this, Z, b, X, O[G].identifier, O[G])) && (Gu(b), V("start", b, O[G]));
      }
    }
    function N(b) {
      var X = b.changedTouches, O = X.length, Z, ee;
      for (Z = 0; Z < O; ++Z) (ee = l[X[Z].identifier]) && (_o(b), ee("drag", b, X[Z]));
    }
    function T(b) {
      var X = b.changedTouches, O = X.length, Z, ee;
      for (g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, 500), Z = 0; Z < O; ++Z) (ee = l[X[Z].identifier]) && (Gu(b), ee("end", b, X[Z]));
    }
    function L(b, X, O, Z, ee, G) {
      var V = u.copy(), K = cn(G || O, X), J, q, k;
      if ((k = o.call(b, new uc("beforestart", {
        sourceEvent: O,
        target: v,
        identifier: ee,
        active: c,
        x: K[0],
        y: K[1],
        dx: 0,
        dy: 0,
        dispatch: V
      }), Z)) != null) return J = k.x - K[0] || 0, q = k.y - K[1] || 0, function H(I, W, F) {
        var P = K, B;
        switch (I) {
          case "start":
            l[ee] = H, B = c++;
            break;
          case "end":
            delete l[ee], --c;
          case "drag":
            K = cn(F || W, X), B = c;
            break;
        }
        V.call(I, b, new uc(I, {
          sourceEvent: W,
          subject: k,
          target: v,
          identifier: ee,
          active: B,
          x: K[0] + J,
          y: K[1] + q,
          dx: K[0] - P[0],
          dy: K[1] - P[1],
          dispatch: V
        }), Z);
      };
    }
    return v.filter = function(b) {
      return arguments.length ? (e = typeof b == "function" ? b : dl(!!b), v) : e;
    }, v.container = function(b) {
      return arguments.length ? (r = typeof b == "function" ? b : dl(b), v) : r;
    }, v.subject = function(b) {
      return arguments.length ? (o = typeof b == "function" ? b : dl(b), v) : o;
    }, v.touchable = function(b) {
      return arguments.length ? (s = typeof b == "function" ? b : dl(!!b), v) : s;
    }, v.on = function() {
      var b = u.on.apply(u, arguments);
      return b === u ? v : b;
    }, v.clickDistance = function(b) {
      return arguments.length ? (y = (b = +b) * b, v) : Math.sqrt(y);
    }, v;
  }
  function Lc(e, r, o) {
    e.prototype = r.prototype = o, o.constructor = e;
  }
  function M0(e, r) {
    var o = Object.create(e.prototype);
    for (var s in r) o[s] = r[s];
    return o;
  }
  function Vi() {
  }
  var Ti = 0.7, Rl = 1 / Ti, No = "\\s*([+-]?\\d+)\\s*", Ri = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hv = /^#([0-9a-f]{3,8})$/, Vv = new RegExp(`^rgb\\(${No},${No},${No}\\)$`), Uv = new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`), Wv = new RegExp(`^rgba\\(${No},${No},${No},${Ri}\\)$`), Yv = new RegExp(`^rgba\\(${kn},${kn},${kn},${Ri}\\)$`), Xv = new RegExp(`^hsl\\(${Ri},${kn},${kn}\\)$`), Gv = new RegExp(`^hsla\\(${Ri},${kn},${kn},${Ri}\\)$`), Xh = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  Lc(Vi, Pi, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: Gh,
    formatHex: Gh,
    formatHex8: Kv,
    formatHsl: Qv,
    formatRgb: Kh,
    toString: Kh
  });
  function Gh() {
    return this.rgb().formatHex();
  }
  function Kv() {
    return this.rgb().formatHex8();
  }
  function Qv() {
    return I0(this).formatHsl();
  }
  function Kh() {
    return this.rgb().formatRgb();
  }
  function Pi(e) {
    var r, o;
    return e = (e + "").trim().toLowerCase(), (r = Hv.exec(e)) ? (o = r[1].length, r = parseInt(r[1], 16), o === 6 ? Qh(r) : o === 3 ? new bt(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : o === 8 ? fl(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : o === 4 ? fl(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Vv.exec(e)) ? new bt(r[1], r[2], r[3], 1) : (r = Uv.exec(e)) ? new bt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Wv.exec(e)) ? fl(r[1], r[2], r[3], r[4]) : (r = Yv.exec(e)) ? fl(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Xv.exec(e)) ? Jh(r[1], r[2] / 100, r[3] / 100, 1) : (r = Gv.exec(e)) ? Jh(r[1], r[2] / 100, r[3] / 100, r[4]) : Xh.hasOwnProperty(e) ? Qh(Xh[e]) : e === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
  }
  function Qh(e) {
    return new bt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
  }
  function fl(e, r, o, s) {
    return s <= 0 && (e = r = o = NaN), new bt(e, r, o, s);
  }
  function Zv(e) {
    return e instanceof Vi || (e = Pi(e)), e ? (e = e.rgb(), new bt(e.r, e.g, e.b, e.opacity)) : new bt();
  }
  function cc(e, r, o, s) {
    return arguments.length === 1 ? Zv(e) : new bt(e, r, o, s ?? 1);
  }
  function bt(e, r, o, s) {
    this.r = +e, this.g = +r, this.b = +o, this.opacity = +s;
  }
  Lc(bt, cc, M0(Vi, {
    brighter(e) {
      return e = e == null ? Rl : Math.pow(Rl, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? Ti : Math.pow(Ti, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new bt(Hr(this.r), Hr(this.g), Hr(this.b), Pl(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: Zh,
    formatHex: Zh,
    formatHex8: qv,
    formatRgb: qh,
    toString: qh
  }));
  function Zh() {
    return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}`;
  }
  function qv() {
    return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}${Br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function qh() {
    const e = Pl(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${Hr(this.r)}, ${Hr(this.g)}, ${Hr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
  }
  function Pl(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function Hr(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function Br(e) {
    return e = Hr(e), (e < 16 ? "0" : "") + e.toString(16);
  }
  function Jh(e, r, o, s) {
    return s <= 0 ? e = r = o = NaN : o <= 0 || o >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new dn(e, r, o, s);
  }
  function I0(e) {
    if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
    if (e instanceof Vi || (e = Pi(e)), !e) return new dn();
    if (e instanceof dn) return e;
    e = e.rgb();
    var r = e.r / 255, o = e.g / 255, s = e.b / 255, l = Math.min(r, o, s), u = Math.max(r, o, s), c = NaN, f = u - l, m = (u + l) / 2;
    return f ? (r === u ? c = (o - s) / f + (o < s) * 6 : o === u ? c = (s - r) / f + 2 : c = (r - o) / f + 4, f /= m < 0.5 ? u + l : 2 - u - l, c *= 60) : f = m > 0 && m < 1 ? 0 : c, new dn(c, f, m, e.opacity);
  }
  function Jv(e, r, o, s) {
    return arguments.length === 1 ? I0(e) : new dn(e, r, o, s ?? 1);
  }
  function dn(e, r, o, s) {
    this.h = +e, this.s = +r, this.l = +o, this.opacity = +s;
  }
  Lc(dn, Jv, M0(Vi, {
    brighter(e) {
      return e = e == null ? Rl : Math.pow(Rl, e), new dn(this.h, this.s, this.l * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? Ti : Math.pow(Ti, e), new dn(this.h, this.s, this.l * e, this.opacity);
    },
    rgb() {
      var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, o = this.l, s = o + (o < 0.5 ? o : 1 - o) * r, l = 2 * o - s;
      return new bt(Ku(e >= 240 ? e - 240 : e + 120, l, s), Ku(e, l, s), Ku(e < 120 ? e + 240 : e - 120, l, s), this.opacity);
    },
    clamp() {
      return new dn(ep(this.h), hl(this.s), hl(this.l), Pl(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const e = Pl(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${ep(this.h)}, ${hl(this.s) * 100}%, ${hl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    }
  }));
  function ep(e) {
    return e = (e || 0) % 360, e < 0 ? e + 360 : e;
  }
  function hl(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function Ku(e, r, o) {
    return (e < 60 ? r + (o - r) * e / 60 : e < 180 ? o : e < 240 ? r + (o - r) * (240 - e) / 60 : r) * 255;
  }
  const b0 = (e) => () => e;
  function ew(e, r) {
    return function(o) {
      return e + o * r;
    };
  }
  function tw(e, r, o) {
    return e = Math.pow(e, o), r = Math.pow(r, o) - e, o = 1 / o, function(s) {
      return Math.pow(e + s * r, o);
    };
  }
  function nw(e) {
    return (e = +e) == 1 ? A0 : function(r, o) {
      return o - r ? tw(r, o, e) : b0(isNaN(r) ? o : r);
    };
  }
  function A0(e, r) {
    var o = r - e;
    return o ? ew(e, o) : b0(isNaN(e) ? r : e);
  }
  const tp = (function e(r) {
    var o = nw(r);
    function s(l, u) {
      var c = o((l = cc(l)).r, (u = cc(u)).r), f = o(l.g, u.g), m = o(l.b, u.b), h = A0(l.opacity, u.opacity);
      return function(g) {
        return l.r = c(g), l.g = f(g), l.b = m(g), l.opacity = h(g), l + "";
      };
    }
    return s.gamma = e, s;
  })(1);
  function hr(e, r) {
    return e = +e, r = +r, function(o) {
      return e * (1 - o) + r * o;
    };
  }
  var dc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qu = new RegExp(dc.source, "g");
  function rw(e) {
    return function() {
      return e;
    };
  }
  function ow(e) {
    return function(r) {
      return e(r) + "";
    };
  }
  function iw(e, r) {
    var o = dc.lastIndex = Qu.lastIndex = 0, s, l, u, c = -1, f = [], m = [];
    for (e = e + "", r = r + ""; (s = dc.exec(e)) && (l = Qu.exec(r)); ) (u = l.index) > o && (u = r.slice(o, u), f[c] ? f[c] += u : f[++c] = u), (s = s[0]) === (l = l[0]) ? f[c] ? f[c] += l : f[++c] = l : (f[++c] = null, m.push({
      i: c,
      x: hr(s, l)
    })), o = Qu.lastIndex;
    return o < r.length && (u = r.slice(o), f[c] ? f[c] += u : f[++c] = u), f.length < 2 ? m[0] ? ow(m[0].x) : rw(r) : (r = m.length, function(h) {
      for (var g = 0, y; g < r; ++g) f[(y = m[g]).i] = y.x(h);
      return f.join("");
    });
  }
  var np = 180 / Math.PI, fc = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function T0(e, r, o, s, l, u) {
    var c, f, m;
    return (c = Math.sqrt(e * e + r * r)) && (e /= c, r /= c), (m = e * o + r * s) && (o -= e * m, s -= r * m), (f = Math.sqrt(o * o + s * s)) && (o /= f, s /= f, m /= f), e * s < r * o && (e = -e, r = -r, m = -m, c = -c), {
      translateX: l,
      translateY: u,
      rotate: Math.atan2(r, e) * np,
      skewX: Math.atan(m) * np,
      scaleX: c,
      scaleY: f
    };
  }
  var pl;
  function sw(e) {
    const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return r.isIdentity ? fc : T0(r.a, r.b, r.c, r.d, r.e, r.f);
  }
  function lw(e) {
    return e == null || (pl || (pl = document.createElementNS("http://www.w3.org/2000/svg", "g")), pl.setAttribute("transform", e), !(e = pl.transform.baseVal.consolidate())) ? fc : (e = e.matrix, T0(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function R0(e, r, o, s) {
    function l(h) {
      return h.length ? h.pop() + " " : "";
    }
    function u(h, g, y, v, x, E) {
      if (h !== y || g !== v) {
        var S = x.push("translate(", null, r, null, o);
        E.push({
          i: S - 4,
          x: hr(h, y)
        }, {
          i: S - 2,
          x: hr(g, v)
        });
      } else (y || v) && x.push("translate(" + y + r + v + o);
    }
    function c(h, g, y, v) {
      h !== g ? (h - g > 180 ? g += 360 : g - h > 180 && (h += 360), v.push({
        i: y.push(l(y) + "rotate(", null, s) - 2,
        x: hr(h, g)
      })) : g && y.push(l(y) + "rotate(" + g + s);
    }
    function f(h, g, y, v) {
      h !== g ? v.push({
        i: y.push(l(y) + "skewX(", null, s) - 2,
        x: hr(h, g)
      }) : g && y.push(l(y) + "skewX(" + g + s);
    }
    function m(h, g, y, v, x, E) {
      if (h !== y || g !== v) {
        var S = x.push(l(x) + "scale(", null, ",", null, ")");
        E.push({
          i: S - 4,
          x: hr(h, y)
        }, {
          i: S - 2,
          x: hr(g, v)
        });
      } else (y !== 1 || v !== 1) && x.push(l(x) + "scale(" + y + "," + v + ")");
    }
    return function(h, g) {
      var y = [], v = [];
      return h = e(h), g = e(g), u(h.translateX, h.translateY, g.translateX, g.translateY, y, v), c(h.rotate, g.rotate, y, v), f(h.skewX, g.skewX, y, v), m(h.scaleX, h.scaleY, g.scaleX, g.scaleY, y, v), h = g = null, function(x) {
        for (var E = -1, S = v.length, _; ++E < S; ) y[(_ = v[E]).i] = _.x(x);
        return y.join("");
      };
    };
  }
  var aw = R0(sw, "px, ", "px)", "deg)"), uw = R0(lw, ", ", ")", ")"), cw = 1e-12;
  function rp(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
  }
  function dw(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2;
  }
  function fw(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1);
  }
  const hw = (function e(r, o, s) {
    function l(u, c) {
      var f = u[0], m = u[1], h = u[2], g = c[0], y = c[1], v = c[2], x = g - f, E = y - m, S = x * x + E * E, _, N;
      if (S < cw) N = Math.log(v / h) / r, _ = function(Z) {
        return [
          f + Z * x,
          m + Z * E,
          h * Math.exp(r * Z * N)
        ];
      };
      else {
        var T = Math.sqrt(S), L = (v * v - h * h + s * S) / (2 * h * o * T), b = (v * v - h * h - s * S) / (2 * v * o * T), X = Math.log(Math.sqrt(L * L + 1) - L), O = Math.log(Math.sqrt(b * b + 1) - b);
        N = (O - X) / r, _ = function(Z) {
          var ee = Z * N, G = rp(X), V = h / (o * T) * (G * fw(r * ee + X) - dw(X));
          return [
            f + V * x,
            m + V * E,
            h * G / rp(r * ee + X)
          ];
        };
      }
      return _.duration = N * 1e3 * r / Math.SQRT2, _;
    }
    return l.rho = function(u) {
      var c = Math.max(1e-3, +u), f = c * c, m = f * f;
      return e(c, f, m);
    }, l;
  })(Math.SQRT2, 2, 4);
  var bo = 0, Mi = 0, Si = 0, P0 = 1e3, $l, Ii, zl = 0, Wr = 0, Gl = 0, $i = typeof performance == "object" && performance.now ? performance : Date, $0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
    setTimeout(e, 17);
  };
  function Oc() {
    return Wr || ($0(pw), Wr = $i.now() + Gl);
  }
  function pw() {
    Wr = 0;
  }
  function Dl() {
    this._call = this._time = this._next = null;
  }
  Dl.prototype = z0.prototype = {
    constructor: Dl,
    restart: function(e, r, o) {
      if (typeof e != "function") throw new TypeError("callback is not a function");
      o = (o == null ? Oc() : +o) + (r == null ? 0 : +r), !this._next && Ii !== this && (Ii ? Ii._next = this : $l = this, Ii = this), this._call = e, this._time = o, hc();
    },
    stop: function() {
      this._call && (this._call = null, this._time = 1 / 0, hc());
    }
  };
  function z0(e, r, o) {
    var s = new Dl();
    return s.restart(e, r, o), s;
  }
  function mw() {
    Oc(), ++bo;
    for (var e = $l, r; e; ) (r = Wr - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
    --bo;
  }
  function op() {
    Wr = (zl = $i.now()) + Gl, bo = Mi = 0;
    try {
      mw();
    } finally {
      bo = 0, yw(), Wr = 0;
    }
  }
  function gw() {
    var e = $i.now(), r = e - zl;
    r > P0 && (Gl -= r, zl = e);
  }
  function yw() {
    for (var e, r = $l, o, s = 1 / 0; r; ) r._call ? (s > r._time && (s = r._time), e = r, r = r._next) : (o = r._next, r._next = null, r = e ? e._next = o : $l = o);
    Ii = e, hc(s);
  }
  function hc(e) {
    if (!bo) {
      Mi && (Mi = clearTimeout(Mi));
      var r = e - Wr;
      r > 24 ? (e < 1 / 0 && (Mi = setTimeout(op, e - $i.now() - Gl)), Si && (Si = clearInterval(Si))) : (Si || (zl = $i.now(), Si = setInterval(gw, P0)), bo = 1, $0(op));
    }
  }
  function ip(e, r, o) {
    var s = new Dl();
    return r = r == null ? 0 : +r, s.restart((l) => {
      s.stop(), e(l + r);
    }, r, o), s;
  }
  var vw = Yl("start", "end", "cancel", "interrupt"), ww = [], D0 = 0, sp = 1, pc = 2, Cl = 3, lp = 4, mc = 5, _l = 6;
  function Kl(e, r, o, s, l, u) {
    var c = e.__transition;
    if (!c) e.__transition = {};
    else if (o in c) return;
    xw(e, o, {
      name: r,
      index: s,
      group: l,
      on: vw,
      tween: ww,
      time: u.time,
      delay: u.delay,
      duration: u.duration,
      ease: u.ease,
      timer: null,
      state: D0
    });
  }
  function Fc(e, r) {
    var o = fn(e, r);
    if (o.state > D0) throw new Error("too late; already scheduled");
    return o;
  }
  function Cn(e, r) {
    var o = fn(e, r);
    if (o.state > Cl) throw new Error("too late; already running");
    return o;
  }
  function fn(e, r) {
    var o = e.__transition;
    if (!o || !(o = o[r])) throw new Error("transition not found");
    return o;
  }
  function xw(e, r, o) {
    var s = e.__transition, l;
    s[r] = o, o.timer = z0(u, 0, o.time);
    function u(h) {
      o.state = sp, o.timer.restart(c, o.delay, o.time), o.delay <= h && c(h - o.delay);
    }
    function c(h) {
      var g, y, v, x;
      if (o.state !== sp) return m();
      for (g in s) if (x = s[g], x.name === o.name) {
        if (x.state === Cl) return ip(c);
        x.state === lp ? (x.state = _l, x.timer.stop(), x.on.call("interrupt", e, e.__data__, x.index, x.group), delete s[g]) : +g < r && (x.state = _l, x.timer.stop(), x.on.call("cancel", e, e.__data__, x.index, x.group), delete s[g]);
      }
      if (ip(function() {
        o.state === Cl && (o.state = lp, o.timer.restart(f, o.delay, o.time), f(h));
      }), o.state = pc, o.on.call("start", e, e.__data__, o.index, o.group), o.state === pc) {
        for (o.state = Cl, l = new Array(v = o.tween.length), g = 0, y = -1; g < v; ++g) (x = o.tween[g].value.call(e, e.__data__, o.index, o.group)) && (l[++y] = x);
        l.length = y + 1;
      }
    }
    function f(h) {
      for (var g = h < o.duration ? o.ease.call(null, h / o.duration) : (o.timer.restart(m), o.state = mc, 1), y = -1, v = l.length; ++y < v; ) l[y].call(e, g);
      o.state === mc && (o.on.call("end", e, e.__data__, o.index, o.group), m());
    }
    function m() {
      o.state = _l, o.timer.stop(), delete s[r];
      for (var h in s) return;
      delete e.__transition;
    }
  }
  function Nl(e, r) {
    var o = e.__transition, s, l, u = true, c;
    if (o) {
      r = r == null ? null : r + "";
      for (c in o) {
        if ((s = o[c]).name !== r) {
          u = false;
          continue;
        }
        l = s.state > pc && s.state < mc, s.state = _l, s.timer.stop(), s.on.call(l ? "interrupt" : "cancel", e, e.__data__, s.index, s.group), delete o[c];
      }
      u && delete e.__transition;
    }
  }
  function Sw(e) {
    return this.each(function() {
      Nl(this, e);
    });
  }
  function Ew(e, r) {
    var o, s;
    return function() {
      var l = Cn(this, e), u = l.tween;
      if (u !== o) {
        s = o = u;
        for (var c = 0, f = s.length; c < f; ++c) if (s[c].name === r) {
          s = s.slice(), s.splice(c, 1);
          break;
        }
      }
      l.tween = s;
    };
  }
  function kw(e, r, o) {
    var s, l;
    if (typeof o != "function") throw new Error();
    return function() {
      var u = Cn(this, e), c = u.tween;
      if (c !== s) {
        l = (s = c).slice();
        for (var f = {
          name: r,
          value: o
        }, m = 0, h = l.length; m < h; ++m) if (l[m].name === r) {
          l[m] = f;
          break;
        }
        m === h && l.push(f);
      }
      u.tween = l;
    };
  }
  function Cw(e, r) {
    var o = this._id;
    if (e += "", arguments.length < 2) {
      for (var s = fn(this.node(), o).tween, l = 0, u = s.length, c; l < u; ++l) if ((c = s[l]).name === e) return c.value;
      return null;
    }
    return this.each((r == null ? Ew : kw)(o, e, r));
  }
  function Bc(e, r, o) {
    var s = e._id;
    return e.each(function() {
      var l = Cn(this, s);
      (l.value || (l.value = {}))[r] = o.apply(this, arguments);
    }), function(l) {
      return fn(l, s).value[r];
    };
  }
  function L0(e, r) {
    var o;
    return (typeof r == "number" ? hr : r instanceof Pi ? tp : (o = Pi(r)) ? (r = o, tp) : iw)(e, r);
  }
  function _w(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function Nw(e) {
    return function() {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function Mw(e, r, o) {
    var s, l = o + "", u;
    return function() {
      var c = this.getAttribute(e);
      return c === l ? null : c === s ? u : u = r(s = c, o);
    };
  }
  function Iw(e, r, o) {
    var s, l = o + "", u;
    return function() {
      var c = this.getAttributeNS(e.space, e.local);
      return c === l ? null : c === s ? u : u = r(s = c, o);
    };
  }
  function bw(e, r, o) {
    var s, l, u;
    return function() {
      var c, f = o(this), m;
      return f == null ? void this.removeAttribute(e) : (c = this.getAttribute(e), m = f + "", c === m ? null : c === s && m === l ? u : (l = m, u = r(s = c, f)));
    };
  }
  function Aw(e, r, o) {
    var s, l, u;
    return function() {
      var c, f = o(this), m;
      return f == null ? void this.removeAttributeNS(e.space, e.local) : (c = this.getAttributeNS(e.space, e.local), m = f + "", c === m ? null : c === s && m === l ? u : (l = m, u = r(s = c, f)));
    };
  }
  function Tw(e, r) {
    var o = Xl(e), s = o === "transform" ? uw : L0;
    return this.attrTween(e, typeof r == "function" ? (o.local ? Aw : bw)(o, s, Bc(this, "attr." + e, r)) : r == null ? (o.local ? Nw : _w)(o) : (o.local ? Iw : Mw)(o, s, r));
  }
  function Rw(e, r) {
    return function(o) {
      this.setAttribute(e, r.call(this, o));
    };
  }
  function Pw(e, r) {
    return function(o) {
      this.setAttributeNS(e.space, e.local, r.call(this, o));
    };
  }
  function $w(e, r) {
    var o, s;
    function l() {
      var u = r.apply(this, arguments);
      return u !== s && (o = (s = u) && Pw(e, u)), o;
    }
    return l._value = r, l;
  }
  function zw(e, r) {
    var o, s;
    function l() {
      var u = r.apply(this, arguments);
      return u !== s && (o = (s = u) && Rw(e, u)), o;
    }
    return l._value = r, l;
  }
  function Dw(e, r) {
    var o = "attr." + e;
    if (arguments.length < 2) return (o = this.tween(o)) && o._value;
    if (r == null) return this.tween(o, null);
    if (typeof r != "function") throw new Error();
    var s = Xl(e);
    return this.tween(o, (s.local ? $w : zw)(s, r));
  }
  function Lw(e, r) {
    return function() {
      Fc(this, e).delay = +r.apply(this, arguments);
    };
  }
  function Ow(e, r) {
    return r = +r, function() {
      Fc(this, e).delay = r;
    };
  }
  function Fw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? Lw : Ow)(r, e)) : fn(this.node(), r).delay;
  }
  function Bw(e, r) {
    return function() {
      Cn(this, e).duration = +r.apply(this, arguments);
    };
  }
  function jw(e, r) {
    return r = +r, function() {
      Cn(this, e).duration = r;
    };
  }
  function Hw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? Bw : jw)(r, e)) : fn(this.node(), r).duration;
  }
  function Vw(e, r) {
    if (typeof r != "function") throw new Error();
    return function() {
      Cn(this, e).ease = r;
    };
  }
  function Uw(e) {
    var r = this._id;
    return arguments.length ? this.each(Vw(r, e)) : fn(this.node(), r).ease;
  }
  function Ww(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      if (typeof o != "function") throw new Error();
      Cn(this, e).ease = o;
    };
  }
  function Yw(e) {
    if (typeof e != "function") throw new Error();
    return this.each(Ww(this._id, e));
  }
  function Xw(e) {
    typeof e != "function" && (e = m0(e));
    for (var r = this._groups, o = r.length, s = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = s[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && f.push(m);
    return new Un(s, this._parents, this._name, this._id);
  }
  function Gw(e) {
    if (e._id !== this._id) throw new Error();
    for (var r = this._groups, o = e._groups, s = r.length, l = o.length, u = Math.min(s, l), c = new Array(s), f = 0; f < u; ++f) for (var m = r[f], h = o[f], g = m.length, y = c[f] = new Array(g), v, x = 0; x < g; ++x) (v = m[x] || h[x]) && (y[x] = v);
    for (; f < s; ++f) c[f] = r[f];
    return new Un(c, this._parents, this._name, this._id);
  }
  function Kw(e) {
    return (e + "").trim().split(/^|\s+/).every(function(r) {
      var o = r.indexOf(".");
      return o >= 0 && (r = r.slice(0, o)), !r || r === "start";
    });
  }
  function Qw(e, r, o) {
    var s, l, u = Kw(r) ? Fc : Cn;
    return function() {
      var c = u(this, e), f = c.on;
      f !== s && (l = (s = f).copy()).on(r, o), c.on = l;
    };
  }
  function Zw(e, r) {
    var o = this._id;
    return arguments.length < 2 ? fn(this.node(), o).on.on(e) : this.each(Qw(o, e, r));
  }
  function qw(e) {
    return function() {
      var r = this.parentNode;
      for (var o in this.__transition) if (+o !== e) return;
      r && r.removeChild(this);
    };
  }
  function Jw() {
    return this.on("end.remove", qw(this._id));
  }
  function ex(e) {
    var r = this._name, o = this._id;
    typeof e != "function" && (e = zc(e));
    for (var s = this._groups, l = s.length, u = new Array(l), c = 0; c < l; ++c) for (var f = s[c], m = f.length, h = u[c] = new Array(m), g, y, v = 0; v < m; ++v) (g = f[v]) && (y = e.call(g, g.__data__, v, f)) && ("__data__" in g && (y.__data__ = g.__data__), h[v] = y, Kl(h[v], r, o, v, h, fn(g, o)));
    return new Un(u, this._parents, r, o);
  }
  function tx(e) {
    var r = this._name, o = this._id;
    typeof e != "function" && (e = p0(e));
    for (var s = this._groups, l = s.length, u = [], c = [], f = 0; f < l; ++f) for (var m = s[f], h = m.length, g, y = 0; y < h; ++y) if (g = m[y]) {
      for (var v = e.call(g, g.__data__, y, m), x, E = fn(g, o), S = 0, _ = v.length; S < _; ++S) (x = v[S]) && Kl(x, r, o, S, v, E);
      u.push(v), c.push(g);
    }
    return new Un(u, c, r, o);
  }
  var nx = Hi.prototype.constructor;
  function rx() {
    return new nx(this._groups, this._parents);
  }
  function ox(e, r) {
    var o, s, l;
    return function() {
      var u = Io(this, e), c = (this.style.removeProperty(e), Io(this, e));
      return u === c ? null : u === o && c === s ? l : l = r(o = u, s = c);
    };
  }
  function O0(e) {
    return function() {
      this.style.removeProperty(e);
    };
  }
  function ix(e, r, o) {
    var s, l = o + "", u;
    return function() {
      var c = Io(this, e);
      return c === l ? null : c === s ? u : u = r(s = c, o);
    };
  }
  function sx(e, r, o) {
    var s, l, u;
    return function() {
      var c = Io(this, e), f = o(this), m = f + "";
      return f == null && (m = f = (this.style.removeProperty(e), Io(this, e))), c === m ? null : c === s && m === l ? u : (l = m, u = r(s = c, f));
    };
  }
  function lx(e, r) {
    var o, s, l, u = "style." + r, c = "end." + u, f;
    return function() {
      var m = Cn(this, e), h = m.on, g = m.value[u] == null ? f || (f = O0(r)) : void 0;
      (h !== o || l !== g) && (s = (o = h).copy()).on(c, l = g), m.on = s;
    };
  }
  function ax(e, r, o) {
    var s = (e += "") == "transform" ? aw : L0;
    return r == null ? this.styleTween(e, ox(e, s)).on("end.style." + e, O0(e)) : typeof r == "function" ? this.styleTween(e, sx(e, s, Bc(this, "style." + e, r))).each(lx(this._id, e)) : this.styleTween(e, ix(e, s, r), o).on("end.style." + e, null);
  }
  function ux(e, r, o) {
    return function(s) {
      this.style.setProperty(e, r.call(this, s), o);
    };
  }
  function cx(e, r, o) {
    var s, l;
    function u() {
      var c = r.apply(this, arguments);
      return c !== l && (s = (l = c) && ux(e, c, o)), s;
    }
    return u._value = r, u;
  }
  function dx(e, r, o) {
    var s = "style." + (e += "");
    if (arguments.length < 2) return (s = this.tween(s)) && s._value;
    if (r == null) return this.tween(s, null);
    if (typeof r != "function") throw new Error();
    return this.tween(s, cx(e, r, o ?? ""));
  }
  function fx(e) {
    return function() {
      this.textContent = e;
    };
  }
  function hx(e) {
    return function() {
      var r = e(this);
      this.textContent = r ?? "";
    };
  }
  function px(e) {
    return this.tween("text", typeof e == "function" ? hx(Bc(this, "text", e)) : fx(e == null ? "" : e + ""));
  }
  function mx(e) {
    return function(r) {
      this.textContent = e.call(this, r);
    };
  }
  function gx(e) {
    var r, o;
    function s() {
      var l = e.apply(this, arguments);
      return l !== o && (r = (o = l) && mx(l)), r;
    }
    return s._value = e, s;
  }
  function yx(e) {
    var r = "text";
    if (arguments.length < 1) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error();
    return this.tween(r, gx(e));
  }
  function vx() {
    for (var e = this._name, r = this._id, o = F0(), s = this._groups, l = s.length, u = 0; u < l; ++u) for (var c = s[u], f = c.length, m, h = 0; h < f; ++h) if (m = c[h]) {
      var g = fn(m, r);
      Kl(m, e, o, h, c, {
        time: g.time + g.delay + g.duration,
        delay: 0,
        duration: g.duration,
        ease: g.ease
      });
    }
    return new Un(s, this._parents, e, o);
  }
  function wx() {
    var e, r, o = this, s = o._id, l = o.size();
    return new Promise(function(u, c) {
      var f = {
        value: c
      }, m = {
        value: function() {
          --l === 0 && u();
        }
      };
      o.each(function() {
        var h = Cn(this, s), g = h.on;
        g !== e && (r = (e = g).copy(), r._.cancel.push(f), r._.interrupt.push(f), r._.end.push(m)), h.on = r;
      }), l === 0 && u();
    });
  }
  var xx = 0;
  function Un(e, r, o, s) {
    this._groups = e, this._parents = r, this._name = o, this._id = s;
  }
  function F0() {
    return ++xx;
  }
  var Fn = Hi.prototype;
  Un.prototype = {
    constructor: Un,
    select: ex,
    selectAll: tx,
    selectChild: Fn.selectChild,
    selectChildren: Fn.selectChildren,
    filter: Xw,
    merge: Gw,
    selection: rx,
    transition: vx,
    call: Fn.call,
    nodes: Fn.nodes,
    node: Fn.node,
    size: Fn.size,
    empty: Fn.empty,
    each: Fn.each,
    on: Zw,
    attr: Tw,
    attrTween: Dw,
    style: ax,
    styleTween: dx,
    text: px,
    textTween: yx,
    remove: Jw,
    tween: Cw,
    delay: Fw,
    duration: Hw,
    ease: Uw,
    easeVarying: Yw,
    end: wx,
    [Symbol.iterator]: Fn[Symbol.iterator]
  };
  function Sx(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
  }
  var Ex = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Sx
  };
  function kx(e, r) {
    for (var o; !(o = e.__transition) || !(o = o[r]); ) if (!(e = e.parentNode)) throw new Error(`transition ${r} not found`);
    return o;
  }
  function Cx(e) {
    var r, o;
    e instanceof Un ? (r = e._id, e = e._name) : (r = F0(), (o = Ex).time = Oc(), e = e == null ? null : e + "");
    for (var s = this._groups, l = s.length, u = 0; u < l; ++u) for (var c = s[u], f = c.length, m, h = 0; h < f; ++h) (m = c[h]) && Kl(m, e, r, h, c, o || kx(m, r));
    return new Un(s, this._parents, e, r);
  }
  Hi.prototype.interrupt = Sw;
  Hi.prototype.transition = Cx;
  const ml = (e) => () => e;
  function _x(e, { sourceEvent: r, target: o, transform: s, dispatch: l }) {
    Object.defineProperties(this, {
      type: {
        value: e,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: r,
        enumerable: true,
        configurable: true
      },
      target: {
        value: o,
        enumerable: true,
        configurable: true
      },
      transform: {
        value: s,
        enumerable: true,
        configurable: true
      },
      _: {
        value: l
      }
    });
  }
  function jn(e, r, o) {
    this.k = e, this.x = r, this.y = o;
  }
  jn.prototype = {
    constructor: jn,
    scale: function(e) {
      return e === 1 ? this : new jn(this.k * e, this.x, this.y);
    },
    translate: function(e, r) {
      return e === 0 & r === 0 ? this : new jn(this.k, this.x + this.k * e, this.y + this.k * r);
    },
    apply: function(e) {
      return [
        e[0] * this.k + this.x,
        e[1] * this.k + this.y
      ];
    },
    applyX: function(e) {
      return e * this.k + this.x;
    },
    applyY: function(e) {
      return e * this.k + this.y;
    },
    invert: function(e) {
      return [
        (e[0] - this.x) / this.k,
        (e[1] - this.y) / this.k
      ];
    },
    invertX: function(e) {
      return (e - this.x) / this.k;
    },
    invertY: function(e) {
      return (e - this.y) / this.k;
    },
    rescaleX: function(e) {
      return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
    },
    rescaleY: function(e) {
      return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var Hn = new jn(1, 0, 0);
  jn.prototype;
  function Zu(e) {
    e.stopImmediatePropagation();
  }
  function Ei(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function Nx(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button;
  }
  function Mx() {
    var e = this;
    return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [
      [
        e.x,
        e.y
      ],
      [
        e.x + e.width,
        e.y + e.height
      ]
    ]) : [
      [
        0,
        0
      ],
      [
        e.width.baseVal.value,
        e.height.baseVal.value
      ]
    ]) : [
      [
        0,
        0
      ],
      [
        e.clientWidth,
        e.clientHeight
      ]
    ];
  }
  function ap() {
    return this.__zoom || Hn;
  }
  function Ix(e) {
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
  }
  function bx() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Ax(e, r, o) {
    var s = e.invertX(r[0][0]) - o[0][0], l = e.invertX(r[1][0]) - o[1][0], u = e.invertY(r[0][1]) - o[0][1], c = e.invertY(r[1][1]) - o[1][1];
    return e.translate(l > s ? (s + l) / 2 : Math.min(0, s) || Math.max(0, l), c > u ? (u + c) / 2 : Math.min(0, u) || Math.max(0, c));
  }
  function B0() {
    var e = Nx, r = Mx, o = Ax, s = Ix, l = bx, u = [
      0,
      1 / 0
    ], c = [
      [
        -1 / 0,
        -1 / 0
      ],
      [
        1 / 0,
        1 / 0
      ]
    ], f = 250, m = hw, h = Yl("start", "zoom", "end"), g, y, v, x = 500, E = 150, S = 0, _ = 10;
    function N(k) {
      k.property("__zoom", ap).on("wheel.zoom", ee, {
        passive: false
      }).on("mousedown.zoom", G).on("dblclick.zoom", V).filter(l).on("touchstart.zoom", K).on("touchmove.zoom", J).on("touchend.zoom touchcancel.zoom", q).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    N.transform = function(k, H, I, W) {
      var F = k.selection ? k.selection() : k;
      F.property("__zoom", ap), k !== F ? X(k, H, I, W) : F.interrupt().each(function() {
        O(this, arguments).event(W).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
      });
    }, N.scaleBy = function(k, H, I, W) {
      N.scaleTo(k, function() {
        var F = this.__zoom.k, P = typeof H == "function" ? H.apply(this, arguments) : H;
        return F * P;
      }, I, W);
    }, N.scaleTo = function(k, H, I, W) {
      N.transform(k, function() {
        var F = r.apply(this, arguments), P = this.__zoom, B = I == null ? b(F) : typeof I == "function" ? I.apply(this, arguments) : I, C = P.invert(B), z = typeof H == "function" ? H.apply(this, arguments) : H;
        return o(L(T(P, z), B, C), F, c);
      }, I, W);
    }, N.translateBy = function(k, H, I, W) {
      N.transform(k, function() {
        return o(this.__zoom.translate(typeof H == "function" ? H.apply(this, arguments) : H, typeof I == "function" ? I.apply(this, arguments) : I), r.apply(this, arguments), c);
      }, null, W);
    }, N.translateTo = function(k, H, I, W, F) {
      N.transform(k, function() {
        var P = r.apply(this, arguments), B = this.__zoom, C = W == null ? b(P) : typeof W == "function" ? W.apply(this, arguments) : W;
        return o(Hn.translate(C[0], C[1]).scale(B.k).translate(typeof H == "function" ? -H.apply(this, arguments) : -H, typeof I == "function" ? -I.apply(this, arguments) : -I), P, c);
      }, W, F);
    };
    function T(k, H) {
      return H = Math.max(u[0], Math.min(u[1], H)), H === k.k ? k : new jn(H, k.x, k.y);
    }
    function L(k, H, I) {
      var W = H[0] - I[0] * k.k, F = H[1] - I[1] * k.k;
      return W === k.x && F === k.y ? k : new jn(k.k, W, F);
    }
    function b(k) {
      return [
        (+k[0][0] + +k[1][0]) / 2,
        (+k[0][1] + +k[1][1]) / 2
      ];
    }
    function X(k, H, I, W) {
      k.on("start.zoom", function() {
        O(this, arguments).event(W).start();
      }).on("interrupt.zoom end.zoom", function() {
        O(this, arguments).event(W).end();
      }).tween("zoom", function() {
        var F = this, P = arguments, B = O(F, P).event(W), C = r.apply(F, P), z = I == null ? b(C) : typeof I == "function" ? I.apply(F, P) : I, re = Math.max(C[1][0] - C[0][0], C[1][1] - C[0][1]), te = F.__zoom, le = typeof H == "function" ? H.apply(F, P) : H, ae = m(te.invert(z).concat(re / te.k), le.invert(z).concat(re / le.k));
        return function(he) {
          if (he === 1) he = le;
          else {
            var me = ae(he), ve = re / me[2];
            he = new jn(ve, z[0] - me[0] * ve, z[1] - me[1] * ve);
          }
          B.zoom(null, he);
        };
      });
    }
    function O(k, H, I) {
      return !I && k.__zooming || new Z(k, H);
    }
    function Z(k, H) {
      this.that = k, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = r.apply(k, H), this.taps = 0;
    }
    Z.prototype = {
      event: function(k) {
        return k && (this.sourceEvent = k), this;
      },
      start: function() {
        return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
      },
      zoom: function(k, H) {
        return this.mouse && k !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && k !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && k !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
      },
      end: function() {
        return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
      },
      emit: function(k) {
        var H = Qt(this.that).datum();
        h.call(k, this.that, new _x(k, {
          sourceEvent: this.sourceEvent,
          target: N,
          transform: this.that.__zoom,
          dispatch: h
        }), H);
      }
    };
    function ee(k, ...H) {
      if (!e.apply(this, arguments)) return;
      var I = O(this, H).event(k), W = this.__zoom, F = Math.max(u[0], Math.min(u[1], W.k * Math.pow(2, s.apply(this, arguments)))), P = cn(k);
      if (I.wheel) (I.mouse[0][0] !== P[0] || I.mouse[0][1] !== P[1]) && (I.mouse[1] = W.invert(I.mouse[0] = P)), clearTimeout(I.wheel);
      else {
        if (W.k === F) return;
        I.mouse = [
          P,
          W.invert(P)
        ], Nl(this), I.start();
      }
      Ei(k), I.wheel = setTimeout(B, E), I.zoom("mouse", o(L(T(W, F), I.mouse[0], I.mouse[1]), I.extent, c));
      function B() {
        I.wheel = null, I.end();
      }
    }
    function G(k, ...H) {
      if (v || !e.apply(this, arguments)) return;
      var I = k.currentTarget, W = O(this, H, true).event(k), F = Qt(k.view).on("mousemove.zoom", z, true).on("mouseup.zoom", re, true), P = cn(k, I), B = k.clientX, C = k.clientY;
      _0(k.view), Zu(k), W.mouse = [
        P,
        this.__zoom.invert(P)
      ], Nl(this), W.start();
      function z(te) {
        if (Ei(te), !W.moved) {
          var le = te.clientX - B, ae = te.clientY - C;
          W.moved = le * le + ae * ae > S;
        }
        W.event(te).zoom("mouse", o(L(W.that.__zoom, W.mouse[0] = cn(te, I), W.mouse[1]), W.extent, c));
      }
      function re(te) {
        F.on("mousemove.zoom mouseup.zoom", null), N0(te.view, W.moved), Ei(te), W.event(te).end();
      }
    }
    function V(k, ...H) {
      if (e.apply(this, arguments)) {
        var I = this.__zoom, W = cn(k.changedTouches ? k.changedTouches[0] : k, this), F = I.invert(W), P = I.k * (k.shiftKey ? 0.5 : 2), B = o(L(T(I, P), W, F), r.apply(this, H), c);
        Ei(k), f > 0 ? Qt(this).transition().duration(f).call(X, B, W, k) : Qt(this).call(N.transform, B, W, k);
      }
    }
    function K(k, ...H) {
      if (e.apply(this, arguments)) {
        var I = k.touches, W = I.length, F = O(this, H, k.changedTouches.length === W).event(k), P, B, C, z;
        for (Zu(k), B = 0; B < W; ++B) C = I[B], z = cn(C, this), z = [
          z,
          this.__zoom.invert(z),
          C.identifier
        ], F.touch0 ? !F.touch1 && F.touch0[2] !== z[2] && (F.touch1 = z, F.taps = 0) : (F.touch0 = z, P = true, F.taps = 1 + !!g);
        g && (g = clearTimeout(g)), P && (F.taps < 2 && (y = z[0], g = setTimeout(function() {
          g = null;
        }, x)), Nl(this), F.start());
      }
    }
    function J(k, ...H) {
      if (this.__zooming) {
        var I = O(this, H).event(k), W = k.changedTouches, F = W.length, P, B, C, z;
        for (Ei(k), P = 0; P < F; ++P) B = W[P], C = cn(B, this), I.touch0 && I.touch0[2] === B.identifier ? I.touch0[0] = C : I.touch1 && I.touch1[2] === B.identifier && (I.touch1[0] = C);
        if (B = I.that.__zoom, I.touch1) {
          var re = I.touch0[0], te = I.touch0[1], le = I.touch1[0], ae = I.touch1[1], he = (he = le[0] - re[0]) * he + (he = le[1] - re[1]) * he, me = (me = ae[0] - te[0]) * me + (me = ae[1] - te[1]) * me;
          B = T(B, Math.sqrt(he / me)), C = [
            (re[0] + le[0]) / 2,
            (re[1] + le[1]) / 2
          ], z = [
            (te[0] + ae[0]) / 2,
            (te[1] + ae[1]) / 2
          ];
        } else if (I.touch0) C = I.touch0[0], z = I.touch0[1];
        else return;
        I.zoom("touch", o(L(B, C, z), I.extent, c));
      }
    }
    function q(k, ...H) {
      if (this.__zooming) {
        var I = O(this, H).event(k), W = k.changedTouches, F = W.length, P, B;
        for (Zu(k), v && clearTimeout(v), v = setTimeout(function() {
          v = null;
        }, x), P = 0; P < F; ++P) B = W[P], I.touch0 && I.touch0[2] === B.identifier ? delete I.touch0 : I.touch1 && I.touch1[2] === B.identifier && delete I.touch1;
        if (I.touch1 && !I.touch0 && (I.touch0 = I.touch1, delete I.touch1), I.touch0) I.touch0[1] = this.__zoom.invert(I.touch0[0]);
        else if (I.end(), I.taps === 2 && (B = cn(B, this), Math.hypot(y[0] - B[0], y[1] - B[1]) < _)) {
          var C = Qt(this).on("dblclick.zoom");
          C && C.apply(this, arguments);
        }
      }
    }
    return N.wheelDelta = function(k) {
      return arguments.length ? (s = typeof k == "function" ? k : ml(+k), N) : s;
    }, N.filter = function(k) {
      return arguments.length ? (e = typeof k == "function" ? k : ml(!!k), N) : e;
    }, N.touchable = function(k) {
      return arguments.length ? (l = typeof k == "function" ? k : ml(!!k), N) : l;
    }, N.extent = function(k) {
      return arguments.length ? (r = typeof k == "function" ? k : ml([
        [
          +k[0][0],
          +k[0][1]
        ],
        [
          +k[1][0],
          +k[1][1]
        ]
      ]), N) : r;
    }, N.scaleExtent = function(k) {
      return arguments.length ? (u[0] = +k[0], u[1] = +k[1], N) : [
        u[0],
        u[1]
      ];
    }, N.translateExtent = function(k) {
      return arguments.length ? (c[0][0] = +k[0][0], c[1][0] = +k[1][0], c[0][1] = +k[0][1], c[1][1] = +k[1][1], N) : [
        [
          c[0][0],
          c[0][1]
        ],
        [
          c[1][0],
          c[1][1]
        ]
      ];
    }, N.constrain = function(k) {
      return arguments.length ? (o = k, N) : o;
    }, N.duration = function(k) {
      return arguments.length ? (f = +k, N) : f;
    }, N.interpolate = function(k) {
      return arguments.length ? (m = k, N) : m;
    }, N.on = function() {
      var k = h.on.apply(h, arguments);
      return k === h ? N : k;
    }, N.clickDistance = function(k) {
      return arguments.length ? (S = (k = +k) * k, N) : Math.sqrt(S);
    }, N.tapDistance = function(k) {
      return arguments.length ? (_ = +k, N) : _;
    }, N;
  }
  var Tx = d0();
  const Ql = $.createContext(null), Rx = Ql.Provider, Wn = {
    error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
    error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
    error004: () => "The React Flow parent container needs a width and a height to render the graph.",
    error005: () => "Only child nodes can use a parent extent.",
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (e) => `The old edge with id=${e} does not exist.`,
    error009: (e) => `Marker type "${e}" doesn't exist.`,
    error008: (e, r) => `Couldn't create edge for ${e ? "target" : "source"} handle id: "${e ? r.targetHandle : r.sourceHandle}", edge id: ${r.id}.`,
    error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
    error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
    error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`
  }, j0 = Wn.error001();
  function ze(e, r) {
    const o = $.useContext(Ql);
    if (o === null) throw new Error(j0);
    return f0(o, e, r);
  }
  const nt = () => {
    const e = $.useContext(Ql);
    if (e === null) throw new Error(j0);
    return $.useMemo(() => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
      destroy: e.destroy
    }), [
      e
    ]);
  }, Px = (e) => e.userSelectionActive ? "none" : "all";
  function jc({ position: e, children: r, className: o, style: s, ...l }) {
    const u = ze(Px), c = `${e}`.split("-");
    return Q.createElement("div", {
      className: gt([
        "react-flow__panel",
        o,
        ...c
      ]),
      style: {
        ...s,
        pointerEvents: u
      },
      ...l
    }, r);
  }
  function $x({ proOptions: e, position: r = "bottom-right" }) {
    return (e == null ? void 0 : e.hideAttribution) ? null : Q.createElement(jc, {
      position: r,
      className: "react-flow__attribution",
      "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"
    }, Q.createElement("a", {
      href: "https://reactflow.dev",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "React Flow attribution"
    }, "React Flow"));
  }
  const zx = ({ x: e, y: r, label: o, labelStyle: s = {}, labelShowBg: l = true, labelBgStyle: u = {}, labelBgPadding: c = [
    2,
    4
  ], labelBgBorderRadius: f = 2, children: m, className: h, ...g }) => {
    const y = $.useRef(null), [v, x] = $.useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }), E = gt([
      "react-flow__edge-textwrapper",
      h
    ]);
    return $.useEffect(() => {
      if (y.current) {
        const S = y.current.getBBox();
        x({
          x: S.x,
          y: S.y,
          width: S.width,
          height: S.height
        });
      }
    }, [
      o
    ]), typeof o > "u" || !o ? null : Q.createElement("g", {
      transform: `translate(${e - v.width / 2} ${r - v.height / 2})`,
      className: E,
      visibility: v.width ? "visible" : "hidden",
      ...g
    }, l && Q.createElement("rect", {
      width: v.width + 2 * c[0],
      x: -c[0],
      y: -c[1],
      height: v.height + 2 * c[1],
      className: "react-flow__edge-textbg",
      style: u,
      rx: f,
      ry: f
    }), Q.createElement("text", {
      className: "react-flow__edge-text",
      y: v.height / 2,
      dy: "0.3em",
      ref: y,
      style: s
    }, o), m);
  };
  var Dx = $.memo(zx);
  const Hc = (e) => ({
    width: e.offsetWidth,
    height: e.offsetHeight
  }), Ao = (e, r = 0, o = 1) => Math.min(Math.max(e, r), o), Vc = (e = {
    x: 0,
    y: 0
  }, r) => ({
    x: Ao(e.x, r[0][0], r[1][0]),
    y: Ao(e.y, r[0][1], r[1][1])
  }), up = (e, r, o) => e < r ? Ao(Math.abs(e - r), 1, 50) / 50 : e > o ? -Ao(Math.abs(e - o), 1, 50) / 50 : 0, H0 = (e, r) => {
    const o = up(e.x, 35, r.width - 35) * 20, s = up(e.y, 35, r.height - 35) * 20;
    return [
      o,
      s
    ];
  }, V0 = (e) => {
    var _a;
    return ((_a = e.getRootNode) == null ? void 0 : _a.call(e)) || (window == null ? void 0 : window.document);
  }, U0 = (e, r) => ({
    x: Math.min(e.x, r.x),
    y: Math.min(e.y, r.y),
    x2: Math.max(e.x2, r.x2),
    y2: Math.max(e.y2, r.y2)
  }), zi = ({ x: e, y: r, width: o, height: s }) => ({
    x: e,
    y: r,
    x2: e + o,
    y2: r + s
  }), W0 = ({ x: e, y: r, x2: o, y2: s }) => ({
    x: e,
    y: r,
    width: o - e,
    height: s - r
  }), cp = (e) => ({
    ...e.positionAbsolute || {
      x: 0,
      y: 0
    },
    width: e.width || 0,
    height: e.height || 0
  }), Lx = (e, r) => W0(U0(zi(e), zi(r))), gc = (e, r) => {
    const o = Math.max(0, Math.min(e.x + e.width, r.x + r.width) - Math.max(e.x, r.x)), s = Math.max(0, Math.min(e.y + e.height, r.y + r.height) - Math.max(e.y, r.y));
    return Math.ceil(o * s);
  }, Ox = (e) => Zt(e.width) && Zt(e.height) && Zt(e.x) && Zt(e.y), Zt = (e) => !isNaN(e) && isFinite(e), Xe = Symbol.for("internals"), Y0 = [
    "Enter",
    " ",
    "Escape"
  ], Fx = (e, r) => {
  }, Bx = (e) => "nativeEvent" in e;
  function yc(e) {
    var _a, _b, _c2;
    const o = ((_c2 = (_b = (_a = Bx(e) ? e.nativeEvent : e).composedPath) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c2[0]) || e.target;
    return [
      "INPUT",
      "SELECT",
      "TEXTAREA"
    ].includes(o == null ? void 0 : o.nodeName) || (o == null ? void 0 : o.hasAttribute("contenteditable")) || !!(o == null ? void 0 : o.closest(".nokey"));
  }
  const X0 = (e) => "clientX" in e, gr = (e, r) => {
    var _a, _b;
    const o = X0(e), s = o ? e.clientX : (_a = e.touches) == null ? void 0 : _a[0].clientX, l = o ? e.clientY : (_b = e.touches) == null ? void 0 : _b[0].clientY;
    return {
      x: s - ((r == null ? void 0 : r.left) ?? 0),
      y: l - ((r == null ? void 0 : r.top) ?? 0)
    };
  }, Ll = () => {
    var _a;
    return typeof navigator < "u" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
  }, zo = ({ id: e, path: r, labelX: o, labelY: s, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: g, markerEnd: y, markerStart: v, interactionWidth: x = 20 }) => Q.createElement(Q.Fragment, null, Q.createElement("path", {
    id: e,
    style: g,
    d: r,
    fill: "none",
    className: "react-flow__edge-path",
    markerEnd: y,
    markerStart: v
  }), x && Q.createElement("path", {
    d: r,
    fill: "none",
    strokeOpacity: 0,
    strokeWidth: x,
    className: "react-flow__edge-interaction"
  }), l && Zt(o) && Zt(s) ? Q.createElement(Dx, {
    x: o,
    y: s,
    label: l,
    labelStyle: u,
    labelShowBg: c,
    labelBgStyle: f,
    labelBgPadding: m,
    labelBgBorderRadius: h
  }) : null);
  zo.displayName = "BaseEdge";
  function ki(e, r, o) {
    return o === void 0 ? o : (s) => {
      const l = r().edges.find((u) => u.id === e);
      l && o(s, {
        ...l
      });
    };
  }
  function G0({ sourceX: e, sourceY: r, targetX: o, targetY: s }) {
    const l = Math.abs(o - e) / 2, u = o < e ? o + l : o - l, c = Math.abs(s - r) / 2, f = s < r ? s + c : s - c;
    return [
      u,
      f,
      l,
      c
    ];
  }
  function K0({ sourceX: e, sourceY: r, targetX: o, targetY: s, sourceControlX: l, sourceControlY: u, targetControlX: c, targetControlY: f }) {
    const m = e * 0.125 + l * 0.375 + c * 0.375 + o * 0.125, h = r * 0.125 + u * 0.375 + f * 0.375 + s * 0.125, g = Math.abs(m - e), y = Math.abs(h - r);
    return [
      m,
      h,
      g,
      y
    ];
  }
  var Yr;
  (function(e) {
    e.Strict = "strict", e.Loose = "loose";
  })(Yr || (Yr = {}));
  var jr;
  (function(e) {
    e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
  })(jr || (jr = {}));
  var Di;
  (function(e) {
    e.Partial = "partial", e.Full = "full";
  })(Di || (Di = {}));
  var mr;
  (function(e) {
    e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
  })(mr || (mr = {}));
  var To;
  (function(e) {
    e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
  })(To || (To = {}));
  var ge;
  (function(e) {
    e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
  })(ge || (ge = {}));
  function dp({ pos: e, x1: r, y1: o, x2: s, y2: l }) {
    return e === ge.Left || e === ge.Right ? [
      0.5 * (r + s),
      o
    ] : [
      r,
      0.5 * (o + l)
    ];
  }
  function Q0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: s, targetY: l, targetPosition: u = ge.Top }) {
    const [c, f] = dp({
      pos: o,
      x1: e,
      y1: r,
      x2: s,
      y2: l
    }), [m, h] = dp({
      pos: u,
      x1: s,
      y1: l,
      x2: e,
      y2: r
    }), [g, y, v, x] = K0({
      sourceX: e,
      sourceY: r,
      targetX: s,
      targetY: l,
      sourceControlX: c,
      sourceControlY: f,
      targetControlX: m,
      targetControlY: h
    });
    return [
      `M${e},${r} C${c},${f} ${m},${h} ${s},${l}`,
      g,
      y,
      v,
      x
    ];
  }
  const Uc = $.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: f, labelShowBg: m, labelBgStyle: h, labelBgPadding: g, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: E, interactionWidth: S }) => {
    const [_, N, T] = Q0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: s,
      targetPosition: u
    });
    return Q.createElement(zo, {
      path: _,
      labelX: N,
      labelY: T,
      label: c,
      labelStyle: f,
      labelShowBg: m,
      labelBgStyle: h,
      labelBgPadding: g,
      labelBgBorderRadius: y,
      style: v,
      markerEnd: x,
      markerStart: E,
      interactionWidth: S
    });
  });
  Uc.displayName = "SimpleBezierEdge";
  const fp = {
    [ge.Left]: {
      x: -1,
      y: 0
    },
    [ge.Right]: {
      x: 1,
      y: 0
    },
    [ge.Top]: {
      x: 0,
      y: -1
    },
    [ge.Bottom]: {
      x: 0,
      y: 1
    }
  }, jx = ({ source: e, sourcePosition: r = ge.Bottom, target: o }) => r === ge.Left || r === ge.Right ? e.x < o.x ? {
    x: 1,
    y: 0
  } : {
    x: -1,
    y: 0
  } : e.y < o.y ? {
    x: 0,
    y: 1
  } : {
    x: 0,
    y: -1
  }, hp = (e, r) => Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
  function Hx({ source: e, sourcePosition: r = ge.Bottom, target: o, targetPosition: s = ge.Top, center: l, offset: u }) {
    const c = fp[r], f = fp[s], m = {
      x: e.x + c.x * u,
      y: e.y + c.y * u
    }, h = {
      x: o.x + f.x * u,
      y: o.y + f.y * u
    }, g = jx({
      source: m,
      sourcePosition: r,
      target: h
    }), y = g.x !== 0 ? "x" : "y", v = g[y];
    let x = [], E, S;
    const _ = {
      x: 0,
      y: 0
    }, N = {
      x: 0,
      y: 0
    }, [T, L, b, X] = G0({
      sourceX: e.x,
      sourceY: e.y,
      targetX: o.x,
      targetY: o.y
    });
    if (c[y] * f[y] === -1) {
      E = l.x ?? T, S = l.y ?? L;
      const Z = [
        {
          x: E,
          y: m.y
        },
        {
          x: E,
          y: h.y
        }
      ], ee = [
        {
          x: m.x,
          y: S
        },
        {
          x: h.x,
          y: S
        }
      ];
      c[y] === v ? x = y === "x" ? Z : ee : x = y === "x" ? ee : Z;
    } else {
      const Z = [
        {
          x: m.x,
          y: h.y
        }
      ], ee = [
        {
          x: h.x,
          y: m.y
        }
      ];
      if (y === "x" ? x = c.x === v ? ee : Z : x = c.y === v ? Z : ee, r === s) {
        const q = Math.abs(e[y] - o[y]);
        if (q <= u) {
          const k = Math.min(u - 1, u - q);
          c[y] === v ? _[y] = (m[y] > e[y] ? -1 : 1) * k : N[y] = (h[y] > o[y] ? -1 : 1) * k;
        }
      }
      if (r !== s) {
        const q = y === "x" ? "y" : "x", k = c[y] === f[q], H = m[q] > h[q], I = m[q] < h[q];
        (c[y] === 1 && (!k && H || k && I) || c[y] !== 1 && (!k && I || k && H)) && (x = y === "x" ? Z : ee);
      }
      const G = {
        x: m.x + _.x,
        y: m.y + _.y
      }, V = {
        x: h.x + N.x,
        y: h.y + N.y
      }, K = Math.max(Math.abs(G.x - x[0].x), Math.abs(V.x - x[0].x)), J = Math.max(Math.abs(G.y - x[0].y), Math.abs(V.y - x[0].y));
      K >= J ? (E = (G.x + V.x) / 2, S = x[0].y) : (E = x[0].x, S = (G.y + V.y) / 2);
    }
    return [
      [
        e,
        {
          x: m.x + _.x,
          y: m.y + _.y
        },
        ...x,
        {
          x: h.x + N.x,
          y: h.y + N.y
        },
        o
      ],
      E,
      S,
      b,
      X
    ];
  }
  function Vx(e, r, o, s) {
    const l = Math.min(hp(e, r) / 2, hp(r, o) / 2, s), { x: u, y: c } = r;
    if (e.x === u && u === o.x || e.y === c && c === o.y) return `L${u} ${c}`;
    if (e.y === c) {
      const h = e.x < o.x ? -1 : 1, g = e.y < o.y ? 1 : -1;
      return `L ${u + l * h},${c}Q ${u},${c} ${u},${c + l * g}`;
    }
    const f = e.x < o.x ? 1 : -1, m = e.y < o.y ? -1 : 1;
    return `L ${u},${c + l * m}Q ${u},${c} ${u + l * f},${c}`;
  }
  function Ol({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: s, targetY: l, targetPosition: u = ge.Top, borderRadius: c = 5, centerX: f, centerY: m, offset: h = 20 }) {
    const [g, y, v, x, E] = Hx({
      source: {
        x: e,
        y: r
      },
      sourcePosition: o,
      target: {
        x: s,
        y: l
      },
      targetPosition: u,
      center: {
        x: f,
        y: m
      },
      offset: h
    });
    return [
      g.reduce((_, N, T) => {
        let L = "";
        return T > 0 && T < g.length - 1 ? L = Vx(g[T - 1], N, g[T + 1], c) : L = `${T === 0 ? "M" : "L"}${N.x} ${N.y}`, _ += L, _;
      }, ""),
      y,
      v,
      x,
      E
    ];
  }
  const Zl = $.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: g, sourcePosition: y = ge.Bottom, targetPosition: v = ge.Top, markerEnd: x, markerStart: E, pathOptions: S, interactionWidth: _ }) => {
    const [N, T, L] = Ol({
      sourceX: e,
      sourceY: r,
      sourcePosition: y,
      targetX: o,
      targetY: s,
      targetPosition: v,
      borderRadius: S == null ? void 0 : S.borderRadius,
      offset: S == null ? void 0 : S.offset
    });
    return Q.createElement(zo, {
      path: N,
      labelX: T,
      labelY: L,
      label: l,
      labelStyle: u,
      labelShowBg: c,
      labelBgStyle: f,
      labelBgPadding: m,
      labelBgBorderRadius: h,
      style: g,
      markerEnd: x,
      markerStart: E,
      interactionWidth: _
    });
  });
  Zl.displayName = "SmoothStepEdge";
  const Wc = $.memo((e) => {
    var _a;
    return Q.createElement(Zl, {
      ...e,
      pathOptions: $.useMemo(() => {
        var _a2;
        return {
          borderRadius: 0,
          offset: (_a2 = e.pathOptions) == null ? void 0 : _a2.offset
        };
      }, [
        (_a = e.pathOptions) == null ? void 0 : _a.offset
      ])
    });
  });
  Wc.displayName = "StepEdge";
  function Ux({ sourceX: e, sourceY: r, targetX: o, targetY: s }) {
    const [l, u, c, f] = G0({
      sourceX: e,
      sourceY: r,
      targetX: o,
      targetY: s
    });
    return [
      `M ${e},${r}L ${o},${s}`,
      l,
      u,
      c,
      f
    ];
  }
  const Yc = $.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: g, markerEnd: y, markerStart: v, interactionWidth: x }) => {
    const [E, S, _] = Ux({
      sourceX: e,
      sourceY: r,
      targetX: o,
      targetY: s
    });
    return Q.createElement(zo, {
      path: E,
      labelX: S,
      labelY: _,
      label: l,
      labelStyle: u,
      labelShowBg: c,
      labelBgStyle: f,
      labelBgPadding: m,
      labelBgBorderRadius: h,
      style: g,
      markerEnd: y,
      markerStart: v,
      interactionWidth: x
    });
  });
  Yc.displayName = "StraightEdge";
  function gl(e, r) {
    return e >= 0 ? 0.5 * e : r * 25 * Math.sqrt(-e);
  }
  function pp({ pos: e, x1: r, y1: o, x2: s, y2: l, c: u }) {
    switch (e) {
      case ge.Left:
        return [
          r - gl(r - s, u),
          o
        ];
      case ge.Right:
        return [
          r + gl(s - r, u),
          o
        ];
      case ge.Top:
        return [
          r,
          o - gl(o - l, u)
        ];
      case ge.Bottom:
        return [
          r,
          o + gl(l - o, u)
        ];
    }
  }
  function Z0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: s, targetY: l, targetPosition: u = ge.Top, curvature: c = 0.25 }) {
    const [f, m] = pp({
      pos: o,
      x1: e,
      y1: r,
      x2: s,
      y2: l,
      c
    }), [h, g] = pp({
      pos: u,
      x1: s,
      y1: l,
      x2: e,
      y2: r,
      c
    }), [y, v, x, E] = K0({
      sourceX: e,
      sourceY: r,
      targetX: s,
      targetY: l,
      sourceControlX: f,
      sourceControlY: m,
      targetControlX: h,
      targetControlY: g
    });
    return [
      `M${e},${r} C${f},${m} ${h},${g} ${s},${l}`,
      y,
      v,
      x,
      E
    ];
  }
  const Fl = $.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: f, labelShowBg: m, labelBgStyle: h, labelBgPadding: g, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: E, pathOptions: S, interactionWidth: _ }) => {
    const [N, T, L] = Z0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: s,
      targetPosition: u,
      curvature: S == null ? void 0 : S.curvature
    });
    return Q.createElement(zo, {
      path: N,
      labelX: T,
      labelY: L,
      label: c,
      labelStyle: f,
      labelShowBg: m,
      labelBgStyle: h,
      labelBgPadding: g,
      labelBgBorderRadius: y,
      style: v,
      markerEnd: x,
      markerStart: E,
      interactionWidth: _
    });
  });
  Fl.displayName = "BezierEdge";
  const Xc = $.createContext(null), Wx = Xc.Provider;
  Xc.Consumer;
  const Yx = () => $.useContext(Xc), Xx = (e) => "id" in e && "source" in e && "target" in e, Gx = ({ source: e, sourceHandle: r, target: o, targetHandle: s }) => `reactflow__edge-${e}${r || ""}-${o}${s || ""}`, vc = (e, r) => typeof e > "u" ? "" : typeof e == "string" ? e : `${r ? `${r}__` : ""}${Object.keys(e).sort().map((s) => `${s}=${e[s]}`).join("&")}`, Kx = (e, r) => r.some((o) => o.source === e.source && o.target === e.target && (o.sourceHandle === e.sourceHandle || !o.sourceHandle && !e.sourceHandle) && (o.targetHandle === e.targetHandle || !o.targetHandle && !e.targetHandle)), Qx = (e, r) => {
    if (!e.source || !e.target) return r;
    let o;
    return Xx(e) ? o = {
      ...e
    } : o = {
      ...e,
      id: Gx(e)
    }, Kx(o, r) ? r : r.concat(o);
  }, wc = ({ x: e, y: r }, [o, s, l], u, [c, f]) => {
    const m = {
      x: (e - o) / l,
      y: (r - s) / l
    };
    return u ? {
      x: c * Math.round(m.x / c),
      y: f * Math.round(m.y / f)
    } : m;
  }, q0 = ({ x: e, y: r }, [o, s, l]) => ({
    x: e * l + o,
    y: r * l + s
  }), Vr = (e, r = [
    0,
    0
  ]) => {
    if (!e) return {
      x: 0,
      y: 0,
      positionAbsolute: {
        x: 0,
        y: 0
      }
    };
    const o = (e.width ?? 0) * r[0], s = (e.height ?? 0) * r[1], l = {
      x: e.position.x - o,
      y: e.position.y - s
    };
    return {
      ...l,
      positionAbsolute: e.positionAbsolute ? {
        x: e.positionAbsolute.x - o,
        y: e.positionAbsolute.y - s
      } : l
    };
  }, ql = (e, r = [
    0,
    0
  ]) => {
    if (e.length === 0) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    const o = e.reduce((s, l) => {
      const { x: u, y: c } = Vr(l, r).positionAbsolute;
      return U0(s, zi({
        x: u,
        y: c,
        width: l.width || 0,
        height: l.height || 0
      }));
    }, {
      x: 1 / 0,
      y: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0
    });
    return W0(o);
  }, J0 = (e, r, [o, s, l] = [
    0,
    0,
    1
  ], u = false, c = false, f = [
    0,
    0
  ]) => {
    const m = {
      x: (r.x - o) / l,
      y: (r.y - s) / l,
      width: r.width / l,
      height: r.height / l
    }, h = [];
    return e.forEach((g) => {
      const { width: y, height: v, selectable: x = true, hidden: E = false } = g;
      if (c && !x || E) return false;
      const { positionAbsolute: S } = Vr(g, f), _ = {
        x: S.x,
        y: S.y,
        width: y || 0,
        height: v || 0
      }, N = gc(m, _), T = typeof y > "u" || typeof v > "u" || y === null || v === null, L = u && N > 0, b = (y || 0) * (v || 0);
      (T || L || N >= b || g.dragging) && h.push(g);
    }), h;
  }, em = (e, r) => {
    const o = e.map((s) => s.id);
    return r.filter((s) => o.includes(s.source) || o.includes(s.target));
  }, tm = (e, r, o, s, l, u = 0.1) => {
    const c = r / (e.width * (1 + u)), f = o / (e.height * (1 + u)), m = Math.min(c, f), h = Ao(m, s, l), g = e.x + e.width / 2, y = e.y + e.height / 2, v = r / 2 - g * h, x = o / 2 - y * h;
    return {
      x: v,
      y: x,
      zoom: h
    };
  }, Fr = (e, r = 0) => e.transition().duration(r);
  function mp(e, r, o, s) {
    return (r[o] || []).reduce((l, u) => {
      var _a, _b;
      return `${e.id}-${u.id}-${o}` !== s && l.push({
        id: u.id || null,
        type: o,
        nodeId: e.id,
        x: (((_a = e.positionAbsolute) == null ? void 0 : _a.x) ?? 0) + u.x + u.width / 2,
        y: (((_b = e.positionAbsolute) == null ? void 0 : _b.y) ?? 0) + u.y + u.height / 2
      }), l;
    }, []);
  }
  function Zx(e, r, o, s, l, u) {
    const { x: c, y: f } = gr(e), h = r.elementsFromPoint(c, f).find((E) => E.classList.contains("react-flow__handle"));
    if (h) {
      const E = h.getAttribute("data-nodeid");
      if (E) {
        const S = Gc(void 0, h), _ = h.getAttribute("data-handleid"), N = u({
          nodeId: E,
          id: _,
          type: S
        });
        if (N) {
          const T = l.find((L) => L.nodeId === E && L.type === S && L.id === _);
          return {
            handle: {
              id: _,
              type: S,
              nodeId: E,
              x: (T == null ? void 0 : T.x) || o.x,
              y: (T == null ? void 0 : T.y) || o.y
            },
            validHandleResult: N
          };
        }
      }
    }
    let g = [], y = 1 / 0;
    if (l.forEach((E) => {
      const S = Math.sqrt((E.x - o.x) ** 2 + (E.y - o.y) ** 2);
      if (S <= s) {
        const _ = u(E);
        S <= y && (S < y ? g = [
          {
            handle: E,
            validHandleResult: _
          }
        ] : S === y && g.push({
          handle: E,
          validHandleResult: _
        }), y = S);
      }
    }), !g.length) return {
      handle: null,
      validHandleResult: nm()
    };
    if (g.length === 1) return g[0];
    const v = g.some(({ validHandleResult: E }) => E.isValid), x = g.some(({ handle: E }) => E.type === "target");
    return g.find(({ handle: E, validHandleResult: S }) => x ? E.type === "target" : v ? S.isValid : true) || g[0];
  }
  const qx = {
    source: null,
    target: null,
    sourceHandle: null,
    targetHandle: null
  }, nm = () => ({
    handleDomNode: null,
    isValid: false,
    connection: qx,
    endHandle: null
  });
  function rm(e, r, o, s, l, u, c) {
    const f = l === "target", m = c.querySelector(`.react-flow__handle[data-id="${e == null ? void 0 : e.nodeId}-${e == null ? void 0 : e.id}-${e == null ? void 0 : e.type}"]`), h = {
      ...nm(),
      handleDomNode: m
    };
    if (m) {
      const g = Gc(void 0, m), y = m.getAttribute("data-nodeid"), v = m.getAttribute("data-handleid"), x = m.classList.contains("connectable"), E = m.classList.contains("connectableend"), S = {
        source: f ? y : o,
        sourceHandle: f ? v : s,
        target: f ? o : y,
        targetHandle: f ? s : v
      };
      h.connection = S, x && E && (r === Yr.Strict ? f && g === "source" || !f && g === "target" : y !== o || v !== s) && (h.endHandle = {
        nodeId: y,
        handleId: v,
        type: g
      }, h.isValid = u(S));
    }
    return h;
  }
  function Jx({ nodes: e, nodeId: r, handleId: o, handleType: s }) {
    return e.reduce((l, u) => {
      if (u[Xe]) {
        const { handleBounds: c } = u[Xe];
        let f = [], m = [];
        c && (f = mp(u, c, "source", `${r}-${o}-${s}`), m = mp(u, c, "target", `${r}-${o}-${s}`)), l.push(...f, ...m);
      }
      return l;
    }, []);
  }
  function Gc(e, r) {
    return e || ((r == null ? void 0 : r.classList.contains("target")) ? "target" : (r == null ? void 0 : r.classList.contains("source")) ? "source" : null);
  }
  function qu(e) {
    e == null ? void 0 : e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
  }
  function eS(e, r) {
    let o = null;
    return r ? o = "valid" : e && !r && (o = "invalid"), o;
  }
  function om({ event: e, handleId: r, nodeId: o, onConnect: s, isTarget: l, getState: u, setState: c, isValidConnection: f, edgeUpdaterType: m, onReconnectEnd: h }) {
    const g = V0(e.target), { connectionMode: y, domNode: v, autoPanOnConnect: x, connectionRadius: E, onConnectStart: S, panBy: _, getNodes: N, cancelConnection: T } = u();
    let L = 0, b;
    const { x: X, y: O } = gr(e), Z = g == null ? void 0 : g.elementFromPoint(X, O), ee = Gc(m, Z), G = v == null ? void 0 : v.getBoundingClientRect();
    if (!G || !ee) return;
    let V, K = gr(e, G), J = false, q = null, k = false, H = null;
    const I = Jx({
      nodes: N(),
      nodeId: o,
      handleId: r,
      handleType: ee
    }), W = () => {
      if (!x) return;
      const [B, C] = H0(K, G);
      _({
        x: B,
        y: C
      }), L = requestAnimationFrame(W);
    };
    c({
      connectionPosition: K,
      connectionStatus: null,
      connectionNodeId: o,
      connectionHandleId: r,
      connectionHandleType: ee,
      connectionStartHandle: {
        nodeId: o,
        handleId: r,
        type: ee
      },
      connectionEndHandle: null
    }), S == null ? void 0 : S(e, {
      nodeId: o,
      handleId: r,
      handleType: ee
    });
    function F(B) {
      const { transform: C } = u();
      K = gr(B, G);
      const { handle: z, validHandleResult: re } = Zx(B, g, wc(K, C, false, [
        1,
        1
      ]), E, I, (te) => rm(te, y, o, r, l ? "target" : "source", f, g));
      if (b = z, J || (W(), J = true), H = re.handleDomNode, q = re.connection, k = re.isValid, c({
        connectionPosition: b && k ? q0({
          x: b.x,
          y: b.y
        }, C) : K,
        connectionStatus: eS(!!b, k),
        connectionEndHandle: re.endHandle
      }), !b && !k && !H) return qu(V);
      q.source !== q.target && H && (qu(V), V = H, H.classList.add("connecting", "react-flow__handle-connecting"), H.classList.toggle("valid", k), H.classList.toggle("react-flow__handle-valid", k));
    }
    function P(B) {
      var _a, _b;
      (b || H) && q && k && (s == null ? void 0 : s(q)), (_b = (_a = u()).onConnectEnd) == null ? void 0 : _b.call(_a, B), m && (h == null ? void 0 : h(B)), qu(V), T(), cancelAnimationFrame(L), J = false, k = false, q = null, H = null, g.removeEventListener("mousemove", F), g.removeEventListener("mouseup", P), g.removeEventListener("touchmove", F), g.removeEventListener("touchend", P);
    }
    g.addEventListener("mousemove", F), g.addEventListener("mouseup", P), g.addEventListener("touchmove", F), g.addEventListener("touchend", P);
  }
  const gp = () => true, tS = (e) => ({
    connectionStartHandle: e.connectionStartHandle,
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName
  }), nS = (e, r, o) => (s) => {
    const { connectionStartHandle: l, connectionEndHandle: u, connectionClickStartHandle: c } = s;
    return {
      connecting: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.handleId) === r && (l == null ? void 0 : l.type) === o || (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.handleId) === r && (u == null ? void 0 : u.type) === o,
      clickConnecting: (c == null ? void 0 : c.nodeId) === e && (c == null ? void 0 : c.handleId) === r && (c == null ? void 0 : c.type) === o
    };
  }, im = $.forwardRef(({ type: e = "source", position: r = ge.Top, isValidConnection: o, isConnectable: s = true, isConnectableStart: l = true, isConnectableEnd: u = true, id: c, onConnect: f, children: m, className: h, onMouseDown: g, onTouchStart: y, ...v }, x) => {
    var _a, _b;
    const E = c || null, S = e === "target", _ = nt(), N = Yx(), { connectOnClick: T, noPanClassName: L } = ze(tS, At), { connecting: b, clickConnecting: X } = ze(nS(N, E, e), At);
    N || ((_b = (_a = _.getState()).onError) == null ? void 0 : _b.call(_a, "010", Wn.error010()));
    const O = (G) => {
      const { defaultEdgeOptions: V, onConnect: K, hasDefaultEdges: J } = _.getState(), q = {
        ...V,
        ...G
      };
      if (J) {
        const { edges: k, setEdges: H } = _.getState();
        H(Qx(q, k));
      }
      K == null ? void 0 : K(q), f == null ? void 0 : f(q);
    }, Z = (G) => {
      if (!N) return;
      const V = X0(G);
      l && (V && G.button === 0 || !V) && om({
        event: G,
        handleId: E,
        nodeId: N,
        onConnect: O,
        isTarget: S,
        getState: _.getState,
        setState: _.setState,
        isValidConnection: o || _.getState().isValidConnection || gp
      }), V ? g == null ? void 0 : g(G) : y == null ? void 0 : y(G);
    }, ee = (G) => {
      const { onClickConnectStart: V, onClickConnectEnd: K, connectionClickStartHandle: J, connectionMode: q, isValidConnection: k } = _.getState();
      if (!N || !J && !l) return;
      if (!J) {
        V == null ? void 0 : V(G, {
          nodeId: N,
          handleId: E,
          handleType: e
        }), _.setState({
          connectionClickStartHandle: {
            nodeId: N,
            type: e,
            handleId: E
          }
        });
        return;
      }
      const H = V0(G.target), I = o || k || gp, { connection: W, isValid: F } = rm({
        nodeId: N,
        id: E,
        type: e
      }, q, J.nodeId, J.handleId || null, J.type, I, H);
      F && O(W), K == null ? void 0 : K(G), _.setState({
        connectionClickStartHandle: null
      });
    };
    return Q.createElement("div", {
      "data-handleid": E,
      "data-nodeid": N,
      "data-handlepos": r,
      "data-id": `${N}-${E}-${e}`,
      className: gt([
        "react-flow__handle",
        `react-flow__handle-${r}`,
        "nodrag",
        L,
        h,
        {
          source: !S,
          target: S,
          connectable: s,
          connectablestart: l,
          connectableend: u,
          connecting: X,
          connectionindicator: s && (l && !b || u && b)
        }
      ]),
      onMouseDown: Z,
      onTouchStart: Z,
      onClick: T ? ee : void 0,
      ref: x,
      ...v
    }, m);
  });
  im.displayName = "Handle";
  var vr = $.memo(im);
  const sm = ({ data: e, isConnectable: r, targetPosition: o = ge.Top, sourcePosition: s = ge.Bottom }) => Q.createElement(Q.Fragment, null, Q.createElement(vr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label, Q.createElement(vr, {
    type: "source",
    position: s,
    isConnectable: r
  }));
  sm.displayName = "DefaultNode";
  var xc = $.memo(sm);
  const lm = ({ data: e, isConnectable: r, sourcePosition: o = ge.Bottom }) => Q.createElement(Q.Fragment, null, e == null ? void 0 : e.label, Q.createElement(vr, {
    type: "source",
    position: o,
    isConnectable: r
  }));
  lm.displayName = "InputNode";
  var am = $.memo(lm);
  const um = ({ data: e, isConnectable: r, targetPosition: o = ge.Top }) => Q.createElement(Q.Fragment, null, Q.createElement(vr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label);
  um.displayName = "OutputNode";
  var cm = $.memo(um);
  const Kc = () => null;
  Kc.displayName = "GroupNode";
  const rS = (e) => ({
    selectedNodes: e.getNodes().filter((r) => r.selected),
    selectedEdges: e.edges.filter((r) => r.selected).map((r) => ({
      ...r
    }))
  }), yl = (e) => e.id;
  function oS(e, r) {
    return At(e.selectedNodes.map(yl), r.selectedNodes.map(yl)) && At(e.selectedEdges.map(yl), r.selectedEdges.map(yl));
  }
  const dm = $.memo(({ onSelectionChange: e }) => {
    const r = nt(), { selectedNodes: o, selectedEdges: s } = ze(rS, oS);
    return $.useEffect(() => {
      const l = {
        nodes: o,
        edges: s
      };
      e == null ? void 0 : e(l), r.getState().onSelectionChange.forEach((u) => u(l));
    }, [
      o,
      s,
      e
    ]), null;
  });
  dm.displayName = "SelectionListener";
  const iS = (e) => !!e.onSelectionChange;
  function sS({ onSelectionChange: e }) {
    const r = ze(iS);
    return e || r ? Q.createElement(dm, {
      onSelectionChange: e
    }) : null;
  }
  const lS = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset
  });
  function xo(e, r) {
    $.useEffect(() => {
      typeof e < "u" && r(e);
    }, [
      e
    ]);
  }
  function _e(e, r, o) {
    $.useEffect(() => {
      typeof r < "u" && o({
        [e]: r
      });
    }, [
      r
    ]);
  }
  const aS = ({ nodes: e, edges: r, defaultNodes: o, defaultEdges: s, onConnect: l, onConnectStart: u, onConnectEnd: c, onClickConnectStart: f, onClickConnectEnd: m, nodesDraggable: h, nodesConnectable: g, nodesFocusable: y, edgesFocusable: v, edgesUpdatable: x, elevateNodesOnSelect: E, minZoom: S, maxZoom: _, nodeExtent: N, onNodesChange: T, onEdgesChange: L, elementsSelectable: b, connectionMode: X, snapGrid: O, snapToGrid: Z, translateExtent: ee, connectOnClick: G, defaultEdgeOptions: V, fitView: K, fitViewOptions: J, onNodesDelete: q, onEdgesDelete: k, onNodeDrag: H, onNodeDragStart: I, onNodeDragStop: W, onSelectionDrag: F, onSelectionDragStart: P, onSelectionDragStop: B, noPanClassName: C, nodeOrigin: z, rfId: re, autoPanOnConnect: te, autoPanOnNodeDrag: le, onError: ae, connectionRadius: he, isValidConnection: me, nodeDragThreshold: ve }) => {
    const { setNodes: ke, setEdges: Ve, setDefaultNodesAndEdges: Ue, setMinZoom: Ke, setMaxZoom: Qe, setTranslateExtent: Oe, setNodeExtent: ut, reset: Me } = ze(lS, At), ye = nt();
    return $.useEffect(() => {
      const qe = s == null ? void 0 : s.map((yt) => ({
        ...yt,
        ...V
      }));
      return Ue(o, qe), () => {
        Me();
      };
    }, []), _e("defaultEdgeOptions", V, ye.setState), _e("connectionMode", X, ye.setState), _e("onConnect", l, ye.setState), _e("onConnectStart", u, ye.setState), _e("onConnectEnd", c, ye.setState), _e("onClickConnectStart", f, ye.setState), _e("onClickConnectEnd", m, ye.setState), _e("nodesDraggable", h, ye.setState), _e("nodesConnectable", g, ye.setState), _e("nodesFocusable", y, ye.setState), _e("edgesFocusable", v, ye.setState), _e("edgesUpdatable", x, ye.setState), _e("elementsSelectable", b, ye.setState), _e("elevateNodesOnSelect", E, ye.setState), _e("snapToGrid", Z, ye.setState), _e("snapGrid", O, ye.setState), _e("onNodesChange", T, ye.setState), _e("onEdgesChange", L, ye.setState), _e("connectOnClick", G, ye.setState), _e("fitViewOnInit", K, ye.setState), _e("fitViewOnInitOptions", J, ye.setState), _e("onNodesDelete", q, ye.setState), _e("onEdgesDelete", k, ye.setState), _e("onNodeDrag", H, ye.setState), _e("onNodeDragStart", I, ye.setState), _e("onNodeDragStop", W, ye.setState), _e("onSelectionDrag", F, ye.setState), _e("onSelectionDragStart", P, ye.setState), _e("onSelectionDragStop", B, ye.setState), _e("noPanClassName", C, ye.setState), _e("nodeOrigin", z, ye.setState), _e("rfId", re, ye.setState), _e("autoPanOnConnect", te, ye.setState), _e("autoPanOnNodeDrag", le, ye.setState), _e("onError", ae, ye.setState), _e("connectionRadius", he, ye.setState), _e("isValidConnection", me, ye.setState), _e("nodeDragThreshold", ve, ye.setState), xo(e, ke), xo(r, Ve), xo(S, Ke), xo(_, Qe), xo(ee, Oe), xo(N, ut), null;
  }, yp = {
    display: "none"
  }, uS = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)"
  }, fm = "react-flow__node-desc", hm = "react-flow__edge-desc", cS = "react-flow__aria-live", dS = (e) => e.ariaLiveMessage;
  function fS({ rfId: e }) {
    const r = ze(dS);
    return Q.createElement("div", {
      id: `${cS}-${e}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      style: uS
    }, r);
  }
  function hS({ rfId: e, disableKeyboardA11y: r }) {
    return Q.createElement(Q.Fragment, null, Q.createElement("div", {
      id: `${fm}-${e}`,
      style: yp
    }, "Press enter or space to select a node.", !r && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "), Q.createElement("div", {
      id: `${hm}-${e}`,
      style: yp
    }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."), !r && Q.createElement(fS, {
      rfId: e
    }));
  }
  var Li = (e = null, r = {
    actInsideInputWithModifier: true
  }) => {
    const [o, s] = $.useState(false), l = $.useRef(false), u = $.useRef(/* @__PURE__ */ new Set([])), [c, f] = $.useMemo(() => {
      if (e !== null) {
        const h = (Array.isArray(e) ? e : [
          e
        ]).filter((y) => typeof y == "string").map((y) => y.split("+")), g = h.reduce((y, v) => y.concat(...v), []);
        return [
          h,
          g
        ];
      }
      return [
        [],
        []
      ];
    }, [
      e
    ]);
    return $.useEffect(() => {
      const m = typeof document < "u" ? document : null, h = (r == null ? void 0 : r.target) || m;
      if (e !== null) {
        const g = (x) => {
          if (l.current = x.ctrlKey || x.metaKey || x.shiftKey, (!l.current || l.current && !r.actInsideInputWithModifier) && yc(x)) return false;
          const S = wp(x.code, f);
          u.current.add(x[S]), vp(c, u.current, false) && (x.preventDefault(), s(true));
        }, y = (x) => {
          if ((!l.current || l.current && !r.actInsideInputWithModifier) && yc(x)) return false;
          const S = wp(x.code, f);
          vp(c, u.current, true) ? (s(false), u.current.clear()) : u.current.delete(x[S]), x.key === "Meta" && u.current.clear(), l.current = false;
        }, v = () => {
          u.current.clear(), s(false);
        };
        return h == null ? void 0 : h.addEventListener("keydown", g), h == null ? void 0 : h.addEventListener("keyup", y), window.addEventListener("blur", v), () => {
          h == null ? void 0 : h.removeEventListener("keydown", g), h == null ? void 0 : h.removeEventListener("keyup", y), window.removeEventListener("blur", v);
        };
      }
    }, [
      e,
      s
    ]), o;
  };
  function vp(e, r, o) {
    return e.filter((s) => o || s.length === r.size).some((s) => s.every((l) => r.has(l)));
  }
  function wp(e, r) {
    return r.includes(e) ? "code" : "key";
  }
  function pm(e, r, o, s) {
    var _a, _b;
    const l = e.parentNode || e.parentId;
    if (!l) return o;
    const u = r.get(l), c = Vr(u, s);
    return pm(u, r, {
      x: (o.x ?? 0) + c.x,
      y: (o.y ?? 0) + c.y,
      z: (((_a = u[Xe]) == null ? void 0 : _a.z) ?? 0) > (o.z ?? 0) ? ((_b = u[Xe]) == null ? void 0 : _b.z) ?? 0 : o.z ?? 0
    }, s);
  }
  function mm(e, r, o) {
    e.forEach((s) => {
      var _a;
      const l = s.parentNode || s.parentId;
      if (l && !e.has(l)) throw new Error(`Parent node ${l} not found`);
      if (l || (o == null ? void 0 : o[s.id])) {
        const { x: u, y: c, z: f } = pm(s, e, {
          ...s.position,
          z: ((_a = s[Xe]) == null ? void 0 : _a.z) ?? 0
        }, r);
        s.positionAbsolute = {
          x: u,
          y: c
        }, s[Xe].z = f, (o == null ? void 0 : o[s.id]) && (s[Xe].isParent = true);
      }
    });
  }
  function Ju(e, r, o, s) {
    const l = /* @__PURE__ */ new Map(), u = {}, c = s ? 1e3 : 0;
    return e.forEach((f) => {
      var _a;
      const m = (Zt(f.zIndex) ? f.zIndex : 0) + (f.selected ? c : 0), h = r.get(f.id), g = {
        ...f,
        positionAbsolute: {
          x: f.position.x,
          y: f.position.y
        }
      }, y = f.parentNode || f.parentId;
      y && (u[y] = true);
      const v = (h == null ? void 0 : h.type) && (h == null ? void 0 : h.type) !== f.type;
      Object.defineProperty(g, Xe, {
        enumerable: false,
        value: {
          handleBounds: v ? void 0 : (_a = h == null ? void 0 : h[Xe]) == null ? void 0 : _a.handleBounds,
          z: m
        }
      }), l.set(f.id, g);
    }), mm(l, o, u), l;
  }
  function gm(e, r = {}) {
    const { getNodes: o, width: s, height: l, minZoom: u, maxZoom: c, d3Zoom: f, d3Selection: m, fitViewOnInitDone: h, fitViewOnInit: g, nodeOrigin: y } = e(), v = r.initial && !h && g;
    if (f && m && (v || !r.initial)) {
      const E = o().filter((_) => {
        var _a;
        const N = r.includeHiddenNodes ? _.width && _.height : !_.hidden;
        return ((_a = r.nodes) == null ? void 0 : _a.length) ? N && r.nodes.some((T) => T.id === _.id) : N;
      }), S = E.every((_) => _.width && _.height);
      if (E.length > 0 && S) {
        const _ = ql(E, y), { x: N, y: T, zoom: L } = tm(_, s, l, r.minZoom ?? u, r.maxZoom ?? c, r.padding ?? 0.1), b = Hn.translate(N, T).scale(L);
        return typeof r.duration == "number" && r.duration > 0 ? f.transform(Fr(m, r.duration), b) : f.transform(m, b), true;
      }
    }
    return false;
  }
  function pS(e, r) {
    return e.forEach((o) => {
      const s = r.get(o.id);
      s && r.set(s.id, {
        ...s,
        [Xe]: s[Xe],
        selected: o.selected
      });
    }), new Map(r);
  }
  function mS(e, r) {
    return r.map((o) => {
      const s = e.find((l) => l.id === o.id);
      return s && (o.selected = s.selected), o;
    });
  }
  function vl({ changedNodes: e, changedEdges: r, get: o, set: s }) {
    const { nodeInternals: l, edges: u, onNodesChange: c, onEdgesChange: f, hasDefaultNodes: m, hasDefaultEdges: h } = o();
    (e == null ? void 0 : e.length) && (m && s({
      nodeInternals: pS(e, l)
    }), c == null ? void 0 : c(e)), (r == null ? void 0 : r.length) && (h && s({
      edges: mS(r, u)
    }), f == null ? void 0 : f(r));
  }
  const So = () => {
  }, gS = {
    zoomIn: So,
    zoomOut: So,
    zoomTo: So,
    getZoom: () => 1,
    setViewport: So,
    getViewport: () => ({
      x: 0,
      y: 0,
      zoom: 1
    }),
    fitView: () => false,
    setCenter: So,
    fitBounds: So,
    project: (e) => e,
    screenToFlowPosition: (e) => e,
    flowToScreenPosition: (e) => e,
    viewportInitialized: false
  }, yS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection
  }), vS = () => {
    const e = nt(), { d3Zoom: r, d3Selection: o } = ze(yS, At);
    return $.useMemo(() => o && r ? {
      zoomIn: (l) => r.scaleBy(Fr(o, l == null ? void 0 : l.duration), 1.2),
      zoomOut: (l) => r.scaleBy(Fr(o, l == null ? void 0 : l.duration), 1 / 1.2),
      zoomTo: (l, u) => r.scaleTo(Fr(o, u == null ? void 0 : u.duration), l),
      getZoom: () => e.getState().transform[2],
      setViewport: (l, u) => {
        const [c, f, m] = e.getState().transform, h = Hn.translate(l.x ?? c, l.y ?? f).scale(l.zoom ?? m);
        r.transform(Fr(o, u == null ? void 0 : u.duration), h);
      },
      getViewport: () => {
        const [l, u, c] = e.getState().transform;
        return {
          x: l,
          y: u,
          zoom: c
        };
      },
      fitView: (l) => gm(e.getState, l),
      setCenter: (l, u, c) => {
        const { width: f, height: m, maxZoom: h } = e.getState(), g = typeof (c == null ? void 0 : c.zoom) < "u" ? c.zoom : h, y = f / 2 - l * g, v = m / 2 - u * g, x = Hn.translate(y, v).scale(g);
        r.transform(Fr(o, c == null ? void 0 : c.duration), x);
      },
      fitBounds: (l, u) => {
        const { width: c, height: f, minZoom: m, maxZoom: h } = e.getState(), { x: g, y, zoom: v } = tm(l, c, f, m, h, (u == null ? void 0 : u.padding) ?? 0.1), x = Hn.translate(g, y).scale(v);
        r.transform(Fr(o, u == null ? void 0 : u.duration), x);
      },
      project: (l) => {
        const { transform: u, snapToGrid: c, snapGrid: f } = e.getState();
        return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"), wc(l, u, c, f);
      },
      screenToFlowPosition: (l) => {
        const { transform: u, snapToGrid: c, snapGrid: f, domNode: m } = e.getState();
        if (!m) return l;
        const { x: h, y: g } = m.getBoundingClientRect(), y = {
          x: l.x - h,
          y: l.y - g
        };
        return wc(y, u, c, f);
      },
      flowToScreenPosition: (l) => {
        const { transform: u, domNode: c } = e.getState();
        if (!c) return l;
        const { x: f, y: m } = c.getBoundingClientRect(), h = q0(l, u);
        return {
          x: h.x + f,
          y: h.y + m
        };
      },
      viewportInitialized: true
    } : gS, [
      r,
      o
    ]);
  };
  function Ui() {
    const e = vS(), r = nt(), o = $.useCallback(() => r.getState().getNodes().map((S) => ({
      ...S
    })), []), s = $.useCallback((S) => r.getState().nodeInternals.get(S), []), l = $.useCallback(() => {
      const { edges: S = [] } = r.getState();
      return S.map((_) => ({
        ..._
      }));
    }, []), u = $.useCallback((S) => {
      const { edges: _ = [] } = r.getState();
      return _.find((N) => N.id === S);
    }, []), c = $.useCallback((S) => {
      const { getNodes: _, setNodes: N, hasDefaultNodes: T, onNodesChange: L } = r.getState(), b = _(), X = typeof S == "function" ? S(b) : S;
      if (T) N(X);
      else if (L) {
        const O = X.length === 0 ? b.map((Z) => ({
          type: "remove",
          id: Z.id
        })) : X.map((Z) => ({
          item: Z,
          type: "reset"
        }));
        L(O);
      }
    }, []), f = $.useCallback((S) => {
      const { edges: _ = [], setEdges: N, hasDefaultEdges: T, onEdgesChange: L } = r.getState(), b = typeof S == "function" ? S(_) : S;
      if (T) N(b);
      else if (L) {
        const X = b.length === 0 ? _.map((O) => ({
          type: "remove",
          id: O.id
        })) : b.map((O) => ({
          item: O,
          type: "reset"
        }));
        L(X);
      }
    }, []), m = $.useCallback((S) => {
      const _ = Array.isArray(S) ? S : [
        S
      ], { getNodes: N, setNodes: T, hasDefaultNodes: L, onNodesChange: b } = r.getState();
      if (L) {
        const O = [
          ...N(),
          ..._
        ];
        T(O);
      } else if (b) {
        const X = _.map((O) => ({
          item: O,
          type: "add"
        }));
        b(X);
      }
    }, []), h = $.useCallback((S) => {
      const _ = Array.isArray(S) ? S : [
        S
      ], { edges: N = [], setEdges: T, hasDefaultEdges: L, onEdgesChange: b } = r.getState();
      if (L) T([
        ...N,
        ..._
      ]);
      else if (b) {
        const X = _.map((O) => ({
          item: O,
          type: "add"
        }));
        b(X);
      }
    }, []), g = $.useCallback(() => {
      const { getNodes: S, edges: _ = [], transform: N } = r.getState(), [T, L, b] = N;
      return {
        nodes: S().map((X) => ({
          ...X
        })),
        edges: _.map((X) => ({
          ...X
        })),
        viewport: {
          x: T,
          y: L,
          zoom: b
        }
      };
    }, []), y = $.useCallback(({ nodes: S, edges: _ }) => {
      const { nodeInternals: N, getNodes: T, edges: L, hasDefaultNodes: b, hasDefaultEdges: X, onNodesDelete: O, onEdgesDelete: Z, onNodesChange: ee, onEdgesChange: G } = r.getState(), V = (S || []).map((H) => H.id), K = (_ || []).map((H) => H.id), J = T().reduce((H, I) => {
        const W = I.parentNode || I.parentId, F = !V.includes(I.id) && W && H.find((B) => B.id === W);
        return (typeof I.deletable == "boolean" ? I.deletable : true) && (V.includes(I.id) || F) && H.push(I), H;
      }, []), q = L.filter((H) => typeof H.deletable == "boolean" ? H.deletable : true), k = q.filter((H) => K.includes(H.id));
      if (J || k) {
        const H = em(J, q), I = [
          ...k,
          ...H
        ], W = I.reduce((F, P) => (F.includes(P.id) || F.push(P.id), F), []);
        if ((X || b) && (X && r.setState({
          edges: L.filter((F) => !W.includes(F.id))
        }), b && (J.forEach((F) => {
          N.delete(F.id);
        }), r.setState({
          nodeInternals: new Map(N)
        }))), W.length > 0 && (Z == null ? void 0 : Z(I), G && G(W.map((F) => ({
          id: F,
          type: "remove"
        })))), J.length > 0 && (O == null ? void 0 : O(J), ee)) {
          const F = J.map((P) => ({
            id: P.id,
            type: "remove"
          }));
          ee(F);
        }
      }
    }, []), v = $.useCallback((S) => {
      const _ = Ox(S), N = _ ? null : r.getState().nodeInternals.get(S.id);
      return !_ && !N ? [
        null,
        null,
        _
      ] : [
        _ ? S : cp(N),
        N,
        _
      ];
    }, []), x = $.useCallback((S, _ = true, N) => {
      const [T, L, b] = v(S);
      return T ? (N || r.getState().getNodes()).filter((X) => {
        if (!b && (X.id === L.id || !X.positionAbsolute)) return false;
        const O = cp(X), Z = gc(O, T);
        return _ && Z > 0 || Z >= T.width * T.height;
      }) : [];
    }, []), E = $.useCallback((S, _, N = true) => {
      const [T] = v(S);
      if (!T) return false;
      const L = gc(T, _);
      return N && L > 0 || L >= T.width * T.height;
    }, []);
    return $.useMemo(() => ({
      ...e,
      getNodes: o,
      getNode: s,
      getEdges: l,
      getEdge: u,
      setNodes: c,
      setEdges: f,
      addNodes: m,
      addEdges: h,
      toObject: g,
      deleteElements: y,
      getIntersectingNodes: x,
      isNodeIntersecting: E
    }), [
      e,
      o,
      s,
      l,
      u,
      c,
      f,
      m,
      h,
      g,
      y,
      x,
      E
    ]);
  }
  const wS = {
    actInsideInputWithModifier: false
  };
  var xS = ({ deleteKeyCode: e, multiSelectionKeyCode: r }) => {
    const o = nt(), { deleteElements: s } = Ui(), l = Li(e, wS), u = Li(r);
    $.useEffect(() => {
      if (l) {
        const { edges: c, getNodes: f } = o.getState(), m = f().filter((g) => g.selected), h = c.filter((g) => g.selected);
        s({
          nodes: m,
          edges: h
        }), o.setState({
          nodesSelectionActive: false
        });
      }
    }, [
      l
    ]), $.useEffect(() => {
      o.setState({
        multiSelectionActive: u
      });
    }, [
      u
    ]);
  };
  function SS(e) {
    const r = nt();
    $.useEffect(() => {
      let o;
      const s = () => {
        var _a, _b;
        if (!e.current) return;
        const l = Hc(e.current);
        (l.height === 0 || l.width === 0) && ((_b = (_a = r.getState()).onError) == null ? void 0 : _b.call(_a, "004", Wn.error004())), r.setState({
          width: l.width || 500,
          height: l.height || 500
        });
      };
      return s(), window.addEventListener("resize", s), e.current && (o = new ResizeObserver(() => s()), o.observe(e.current)), () => {
        window.removeEventListener("resize", s), o && e.current && o.unobserve(e.current);
      };
    }, []);
  }
  const Qc = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }, ES = (e, r) => e.x !== r.x || e.y !== r.y || e.zoom !== r.k, wl = (e) => ({
    x: e.x,
    y: e.y,
    zoom: e.k
  }), Eo = (e, r) => e.target.closest(`.${r}`), xp = (e, r) => r === 2 && Array.isArray(e) && e.includes(2), Sp = (e) => {
    const r = e.ctrlKey && Ll() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * r;
  }, kS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection,
    d3ZoomHandler: e.d3ZoomHandler,
    userSelectionActive: e.userSelectionActive
  }), CS = ({ onMove: e, onMoveStart: r, onMoveEnd: o, onPaneContextMenu: s, zoomOnScroll: l = true, zoomOnPinch: u = true, panOnScroll: c = false, panOnScrollSpeed: f = 0.5, panOnScrollMode: m = jr.Free, zoomOnDoubleClick: h = true, elementsSelectable: g, panOnDrag: y = true, defaultViewport: v, translateExtent: x, minZoom: E, maxZoom: S, zoomActivationKeyCode: _, preventScrolling: N = true, children: T, noWheelClassName: L, noPanClassName: b }) => {
    const X = $.useRef(), O = nt(), Z = $.useRef(false), ee = $.useRef(false), G = $.useRef(null), V = $.useRef({
      x: 0,
      y: 0,
      zoom: 0
    }), { d3Zoom: K, d3Selection: J, d3ZoomHandler: q, userSelectionActive: k } = ze(kS, At), H = Li(_), I = $.useRef(0), W = $.useRef(false), F = $.useRef();
    return SS(G), $.useEffect(() => {
      if (G.current) {
        const P = G.current.getBoundingClientRect(), B = B0().scaleExtent([
          E,
          S
        ]).translateExtent(x), C = Qt(G.current).call(B), z = Hn.translate(v.x, v.y).scale(Ao(v.zoom, E, S)), re = [
          [
            0,
            0
          ],
          [
            P.width,
            P.height
          ]
        ], te = B.constrain()(z, re, x);
        B.transform(C, te), B.wheelDelta(Sp), O.setState({
          d3Zoom: B,
          d3Selection: C,
          d3ZoomHandler: C.on("wheel.zoom"),
          transform: [
            te.x,
            te.y,
            te.k
          ],
          domNode: G.current.closest(".react-flow")
        });
      }
    }, []), $.useEffect(() => {
      J && K && (c && !H && !k ? J.on("wheel.zoom", (P) => {
        if (Eo(P, L)) return false;
        P.preventDefault(), P.stopImmediatePropagation();
        const B = J.property("__zoom").k || 1;
        if (P.ctrlKey && u) {
          const me = cn(P), ve = Sp(P), ke = B * Math.pow(2, ve);
          K.scaleTo(J, ke, me, P);
          return;
        }
        const C = P.deltaMode === 1 ? 20 : 1;
        let z = m === jr.Vertical ? 0 : P.deltaX * C, re = m === jr.Horizontal ? 0 : P.deltaY * C;
        !Ll() && P.shiftKey && m !== jr.Vertical && (z = P.deltaY * C, re = 0), K.translateBy(J, -(z / B) * f, -(re / B) * f, {
          internal: true
        });
        const te = wl(J.property("__zoom")), { onViewportChangeStart: le, onViewportChange: ae, onViewportChangeEnd: he } = O.getState();
        clearTimeout(F.current), W.current || (W.current = true, r == null ? void 0 : r(P, te), le == null ? void 0 : le(te)), W.current && (e == null ? void 0 : e(P, te), ae == null ? void 0 : ae(te), F.current = setTimeout(() => {
          o == null ? void 0 : o(P, te), he == null ? void 0 : he(te), W.current = false;
        }, 150));
      }, {
        passive: false
      }) : typeof q < "u" && J.on("wheel.zoom", function(P, B) {
        if (!N && P.type === "wheel" && !P.ctrlKey || Eo(P, L)) return null;
        P.preventDefault(), q.call(this, P, B);
      }, {
        passive: false
      }));
    }, [
      k,
      c,
      m,
      J,
      K,
      q,
      H,
      u,
      N,
      L,
      r,
      e,
      o
    ]), $.useEffect(() => {
      K && K.on("start", (P) => {
        var _a, _b;
        if (!P.sourceEvent || P.sourceEvent.internal) return null;
        I.current = (_a = P.sourceEvent) == null ? void 0 : _a.button;
        const { onViewportChangeStart: B } = O.getState(), C = wl(P.transform);
        Z.current = true, V.current = C, ((_b = P.sourceEvent) == null ? void 0 : _b.type) === "mousedown" && O.setState({
          paneDragging: true
        }), B == null ? void 0 : B(C), r == null ? void 0 : r(P.sourceEvent, C);
      });
    }, [
      K,
      r
    ]), $.useEffect(() => {
      K && (k && !Z.current ? K.on("zoom", null) : k || K.on("zoom", (P) => {
        var _a;
        const { onViewportChange: B } = O.getState();
        if (O.setState({
          transform: [
            P.transform.x,
            P.transform.y,
            P.transform.k
          ]
        }), ee.current = !!(s && xp(y, I.current ?? 0)), (e || B) && !((_a = P.sourceEvent) == null ? void 0 : _a.internal)) {
          const C = wl(P.transform);
          B == null ? void 0 : B(C), e == null ? void 0 : e(P.sourceEvent, C);
        }
      }));
    }, [
      k,
      K,
      e,
      y,
      s
    ]), $.useEffect(() => {
      K && K.on("end", (P) => {
        if (!P.sourceEvent || P.sourceEvent.internal) return null;
        const { onViewportChangeEnd: B } = O.getState();
        if (Z.current = false, O.setState({
          paneDragging: false
        }), s && xp(y, I.current ?? 0) && !ee.current && s(P.sourceEvent), ee.current = false, (o || B) && ES(V.current, P.transform)) {
          const C = wl(P.transform);
          V.current = C, clearTimeout(X.current), X.current = setTimeout(() => {
            B == null ? void 0 : B(C), o == null ? void 0 : o(P.sourceEvent, C);
          }, c ? 150 : 0);
        }
      });
    }, [
      K,
      c,
      y,
      o,
      s
    ]), $.useEffect(() => {
      K && K.filter((P) => {
        const B = H || l, C = u && P.ctrlKey;
        if ((y === true || Array.isArray(y) && y.includes(1)) && P.button === 1 && P.type === "mousedown" && (Eo(P, "react-flow__node") || Eo(P, "react-flow__edge"))) return true;
        if (!y && !B && !c && !h && !u || k || !h && P.type === "dblclick" || Eo(P, L) && P.type === "wheel" || Eo(P, b) && (P.type !== "wheel" || c && P.type === "wheel" && !H) || !u && P.ctrlKey && P.type === "wheel" || !B && !c && !C && P.type === "wheel" || !y && (P.type === "mousedown" || P.type === "touchstart") || Array.isArray(y) && !y.includes(P.button) && P.type === "mousedown") return false;
        const z = Array.isArray(y) && y.includes(P.button) || !P.button || P.button <= 1;
        return (!P.ctrlKey || P.type === "wheel") && z;
      });
    }, [
      k,
      K,
      l,
      u,
      c,
      h,
      y,
      g,
      H
    ]), Q.createElement("div", {
      className: "react-flow__renderer",
      ref: G,
      style: Qc
    }, T);
  }, _S = (e) => ({
    userSelectionActive: e.userSelectionActive,
    userSelectionRect: e.userSelectionRect
  });
  function NS() {
    const { userSelectionActive: e, userSelectionRect: r } = ze(_S, At);
    return e && r ? Q.createElement("div", {
      className: "react-flow__selection react-flow__container",
      style: {
        width: r.width,
        height: r.height,
        transform: `translate(${r.x}px, ${r.y}px)`
      }
    }) : null;
  }
  function Ep(e, r) {
    const o = r.parentNode || r.parentId, s = e.find((l) => l.id === o);
    if (s) {
      const l = r.position.x + r.width - s.width, u = r.position.y + r.height - s.height;
      if (l > 0 || u > 0 || r.position.x < 0 || r.position.y < 0) {
        if (s.style = {
          ...s.style
        }, s.style.width = s.style.width ?? s.width, s.style.height = s.style.height ?? s.height, l > 0 && (s.style.width += l), u > 0 && (s.style.height += u), r.position.x < 0) {
          const c = Math.abs(r.position.x);
          s.position.x = s.position.x - c, s.style.width += c, r.position.x = 0;
        }
        if (r.position.y < 0) {
          const c = Math.abs(r.position.y);
          s.position.y = s.position.y - c, s.style.height += c, r.position.y = 0;
        }
        s.width = s.style.width, s.height = s.style.height;
      }
    }
  }
  function ym(e, r) {
    if (e.some((s) => s.type === "reset")) return e.filter((s) => s.type === "reset").map((s) => s.item);
    const o = e.filter((s) => s.type === "add").map((s) => s.item);
    return r.reduce((s, l) => {
      const u = e.filter((f) => f.id === l.id);
      if (u.length === 0) return s.push(l), s;
      const c = {
        ...l
      };
      for (const f of u) if (f) switch (f.type) {
        case "select": {
          c.selected = f.selected;
          break;
        }
        case "position": {
          typeof f.position < "u" && (c.position = f.position), typeof f.positionAbsolute < "u" && (c.positionAbsolute = f.positionAbsolute), typeof f.dragging < "u" && (c.dragging = f.dragging), c.expandParent && Ep(s, c);
          break;
        }
        case "dimensions": {
          typeof f.dimensions < "u" && (c.width = f.dimensions.width, c.height = f.dimensions.height), typeof f.updateStyle < "u" && (c.style = {
            ...c.style || {},
            ...f.dimensions
          }), typeof f.resizing == "boolean" && (c.resizing = f.resizing), c.expandParent && Ep(s, c);
          break;
        }
        case "remove":
          return s;
      }
      return s.push(c), s;
    }, o);
  }
  function vm(e, r) {
    return ym(e, r);
  }
  function MS(e, r) {
    return ym(e, r);
  }
  const pr = (e, r) => ({
    id: e,
    type: "select",
    selected: r
  });
  function Co(e, r) {
    return e.reduce((o, s) => {
      const l = r.includes(s.id);
      return !s.selected && l ? (s.selected = true, o.push(pr(s.id, true))) : s.selected && !l && (s.selected = false, o.push(pr(s.id, false))), o;
    }, []);
  }
  const ec = (e, r) => (o) => {
    o.target === r.current && (e == null ? void 0 : e(o));
  }, IS = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    dragging: e.paneDragging
  }), wm = $.memo(({ isSelecting: e, selectionMode: r = Di.Full, panOnDrag: o, onSelectionStart: s, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: c, onPaneScroll: f, onPaneMouseEnter: m, onPaneMouseMove: h, onPaneMouseLeave: g, children: y }) => {
    const v = $.useRef(null), x = nt(), E = $.useRef(0), S = $.useRef(0), _ = $.useRef(), { userSelectionActive: N, elementsSelectable: T, dragging: L } = ze(IS, At), b = () => {
      x.setState({
        userSelectionActive: false,
        userSelectionRect: null
      }), E.current = 0, S.current = 0;
    }, X = (q) => {
      u == null ? void 0 : u(q), x.getState().resetSelectedElements(), x.setState({
        nodesSelectionActive: false
      });
    }, O = (q) => {
      if (Array.isArray(o) && (o == null ? void 0 : o.includes(2))) {
        q.preventDefault();
        return;
      }
      c == null ? void 0 : c(q);
    }, Z = f ? (q) => f(q) : void 0, ee = (q) => {
      const { resetSelectedElements: k, domNode: H } = x.getState();
      if (_.current = H == null ? void 0 : H.getBoundingClientRect(), !T || !e || q.button !== 0 || q.target !== v.current || !_.current) return;
      const { x: I, y: W } = gr(q, _.current);
      k(), x.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: I,
          startY: W,
          x: I,
          y: W
        }
      }), s == null ? void 0 : s(q);
    }, G = (q) => {
      const { userSelectionRect: k, nodeInternals: H, edges: I, transform: W, onNodesChange: F, onEdgesChange: P, nodeOrigin: B, getNodes: C } = x.getState();
      if (!e || !_.current || !k) return;
      x.setState({
        userSelectionActive: true,
        nodesSelectionActive: false
      });
      const z = gr(q, _.current), re = k.startX ?? 0, te = k.startY ?? 0, le = {
        ...k,
        x: z.x < re ? z.x : re,
        y: z.y < te ? z.y : te,
        width: Math.abs(z.x - re),
        height: Math.abs(z.y - te)
      }, ae = C(), he = J0(H, le, W, r === Di.Partial, true, B), me = em(he, I).map((ke) => ke.id), ve = he.map((ke) => ke.id);
      if (E.current !== ve.length) {
        E.current = ve.length;
        const ke = Co(ae, ve);
        ke.length && (F == null ? void 0 : F(ke));
      }
      if (S.current !== me.length) {
        S.current = me.length;
        const ke = Co(I, me);
        ke.length && (P == null ? void 0 : P(ke));
      }
      x.setState({
        userSelectionRect: le
      });
    }, V = (q) => {
      if (q.button !== 0) return;
      const { userSelectionRect: k } = x.getState();
      !N && k && q.target === v.current && (X == null ? void 0 : X(q)), x.setState({
        nodesSelectionActive: E.current > 0
      }), b(), l == null ? void 0 : l(q);
    }, K = (q) => {
      N && (x.setState({
        nodesSelectionActive: E.current > 0
      }), l == null ? void 0 : l(q)), b();
    }, J = T && (e || N);
    return Q.createElement("div", {
      className: gt([
        "react-flow__pane",
        {
          dragging: L,
          selection: e
        }
      ]),
      onClick: J ? void 0 : ec(X, v),
      onContextMenu: ec(O, v),
      onWheel: ec(Z, v),
      onMouseEnter: J ? void 0 : m,
      onMouseDown: J ? ee : void 0,
      onMouseMove: J ? G : h,
      onMouseUp: J ? V : void 0,
      onMouseLeave: J ? K : g,
      ref: v,
      style: Qc
    }, y, Q.createElement(NS, null));
  });
  wm.displayName = "Pane";
  function xm(e, r) {
    const o = e.parentNode || e.parentId;
    if (!o) return false;
    const s = r.get(o);
    return s ? s.selected ? true : xm(s, r) : false;
  }
  function kp(e, r, o) {
    let s = e;
    do {
      if (s == null ? void 0 : s.matches(r)) return true;
      if (s === o.current) return false;
      s = s.parentElement;
    } while (s);
    return false;
  }
  function bS(e, r, o, s) {
    return Array.from(e.values()).filter((l) => (l.selected || l.id === s) && (!l.parentNode || l.parentId || !xm(l, e)) && (l.draggable || r && typeof l.draggable > "u")).map((l) => {
      var _a, _b;
      return {
        id: l.id,
        position: l.position || {
          x: 0,
          y: 0
        },
        positionAbsolute: l.positionAbsolute || {
          x: 0,
          y: 0
        },
        distance: {
          x: o.x - (((_a = l.positionAbsolute) == null ? void 0 : _a.x) ?? 0),
          y: o.y - (((_b = l.positionAbsolute) == null ? void 0 : _b.y) ?? 0)
        },
        delta: {
          x: 0,
          y: 0
        },
        extent: l.extent,
        parentNode: l.parentNode || l.parentId,
        parentId: l.parentNode || l.parentId,
        width: l.width,
        height: l.height,
        expandParent: l.expandParent
      };
    });
  }
  function AS(e, r) {
    return !r || r === "parent" ? r : [
      r[0],
      [
        r[1][0] - (e.width || 0),
        r[1][1] - (e.height || 0)
      ]
    ];
  }
  function Sm(e, r, o, s, l = [
    0,
    0
  ], u) {
    const c = AS(e, e.extent || s);
    let f = c;
    const m = e.parentNode || e.parentId;
    if (e.extent === "parent" && !e.expandParent) if (m && e.width && e.height) {
      const y = o.get(m), { x: v, y: x } = Vr(y, l).positionAbsolute;
      f = y && Zt(v) && Zt(x) && Zt(y.width) && Zt(y.height) ? [
        [
          v + e.width * l[0],
          x + e.height * l[1]
        ],
        [
          v + y.width - e.width + e.width * l[0],
          x + y.height - e.height + e.height * l[1]
        ]
      ] : f;
    } else u == null ? void 0 : u("005", Wn.error005()), f = c;
    else if (e.extent && m && e.extent !== "parent") {
      const y = o.get(m), { x: v, y: x } = Vr(y, l).positionAbsolute;
      f = [
        [
          e.extent[0][0] + v,
          e.extent[0][1] + x
        ],
        [
          e.extent[1][0] + v,
          e.extent[1][1] + x
        ]
      ];
    }
    let h = {
      x: 0,
      y: 0
    };
    if (m) {
      const y = o.get(m);
      h = Vr(y, l).positionAbsolute;
    }
    const g = f && f !== "parent" ? Vc(r, f) : r;
    return {
      position: {
        x: g.x - h.x,
        y: g.y - h.y
      },
      positionAbsolute: g
    };
  }
  function tc({ nodeId: e, dragItems: r, nodeInternals: o }) {
    const s = r.map((l) => ({
      ...o.get(l.id),
      position: l.position,
      positionAbsolute: l.positionAbsolute
    }));
    return [
      e ? s.find((l) => l.id === e) : s[0],
      s
    ];
  }
  const Cp = (e, r, o, s) => {
    const l = r.querySelectorAll(e);
    if (!l || !l.length) return null;
    const u = Array.from(l), c = r.getBoundingClientRect(), f = {
      x: c.width * s[0],
      y: c.height * s[1]
    };
    return u.map((m) => {
      const h = m.getBoundingClientRect();
      return {
        id: m.getAttribute("data-handleid"),
        position: m.getAttribute("data-handlepos"),
        x: (h.left - c.left - f.x) / o,
        y: (h.top - c.top - f.y) / o,
        ...Hc(m)
      };
    });
  };
  function Ci(e, r, o) {
    return o === void 0 ? o : (s) => {
      const l = r().nodeInternals.get(e);
      l && o(s, {
        ...l
      });
    };
  }
  function Sc({ id: e, store: r, unselect: o = false, nodeRef: s }) {
    const { addSelectedNodes: l, unselectNodesAndEdges: u, multiSelectionActive: c, nodeInternals: f, onError: m } = r.getState(), h = f.get(e);
    if (!h) {
      m == null ? void 0 : m("012", Wn.error012(e));
      return;
    }
    r.setState({
      nodesSelectionActive: false
    }), h.selected ? (o || h.selected && c) && (u({
      nodes: [
        h
      ],
      edges: []
    }), requestAnimationFrame(() => {
      var _a;
      return (_a = s == null ? void 0 : s.current) == null ? void 0 : _a.blur();
    })) : l([
      e
    ]);
  }
  function TS() {
    const e = nt();
    return $.useCallback(({ sourceEvent: o }) => {
      const { transform: s, snapGrid: l, snapToGrid: u } = e.getState(), c = o.touches ? o.touches[0].clientX : o.clientX, f = o.touches ? o.touches[0].clientY : o.clientY, m = {
        x: (c - s[0]) / s[2],
        y: (f - s[1]) / s[2]
      };
      return {
        xSnapped: u ? l[0] * Math.round(m.x / l[0]) : m.x,
        ySnapped: u ? l[1] * Math.round(m.y / l[1]) : m.y,
        ...m
      };
    }, []);
  }
  function nc(e) {
    return (r, o, s) => e == null ? void 0 : e(r, s);
  }
  function Em({ nodeRef: e, disabled: r = false, noDragClassName: o, handleSelector: s, nodeId: l, isSelectable: u, selectNodesOnDrag: c }) {
    const f = nt(), [m, h] = $.useState(false), g = $.useRef([]), y = $.useRef({
      x: null,
      y: null
    }), v = $.useRef(0), x = $.useRef(null), E = $.useRef({
      x: 0,
      y: 0
    }), S = $.useRef(null), _ = $.useRef(false), N = $.useRef(false), T = $.useRef(false), L = TS();
    return $.useEffect(() => {
      if (e == null ? void 0 : e.current) {
        const b = Qt(e.current), X = ({ x: ee, y: G }) => {
          const { nodeInternals: V, onNodeDrag: K, onSelectionDrag: J, updateNodePositions: q, nodeExtent: k, snapGrid: H, snapToGrid: I, nodeOrigin: W, onError: F } = f.getState();
          y.current = {
            x: ee,
            y: G
          };
          let P = false, B = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 0
          };
          if (g.current.length > 1 && k) {
            const z = ql(g.current, W);
            B = zi(z);
          }
          if (g.current = g.current.map((z) => {
            const re = {
              x: ee - z.distance.x,
              y: G - z.distance.y
            };
            I && (re.x = H[0] * Math.round(re.x / H[0]), re.y = H[1] * Math.round(re.y / H[1]));
            const te = [
              [
                k[0][0],
                k[0][1]
              ],
              [
                k[1][0],
                k[1][1]
              ]
            ];
            g.current.length > 1 && k && !z.extent && (te[0][0] = z.positionAbsolute.x - B.x + k[0][0], te[1][0] = z.positionAbsolute.x + (z.width ?? 0) - B.x2 + k[1][0], te[0][1] = z.positionAbsolute.y - B.y + k[0][1], te[1][1] = z.positionAbsolute.y + (z.height ?? 0) - B.y2 + k[1][1]);
            const le = Sm(z, re, V, te, W, F);
            return P = P || z.position.x !== le.position.x || z.position.y !== le.position.y, z.position = le.position, z.positionAbsolute = le.positionAbsolute, z;
          }), !P) return;
          q(g.current, true, true), h(true);
          const C = l ? K : nc(J);
          if (C && S.current) {
            const [z, re] = tc({
              nodeId: l,
              dragItems: g.current,
              nodeInternals: V
            });
            C(S.current, z, re);
          }
        }, O = () => {
          if (!x.current) return;
          const [ee, G] = H0(E.current, x.current);
          if (ee !== 0 || G !== 0) {
            const { transform: V, panBy: K } = f.getState();
            y.current.x = (y.current.x ?? 0) - ee / V[2], y.current.y = (y.current.y ?? 0) - G / V[2], K({
              x: ee,
              y: G
            }) && X(y.current);
          }
          v.current = requestAnimationFrame(O);
        }, Z = (ee) => {
          var _a;
          const { nodeInternals: G, multiSelectionActive: V, nodesDraggable: K, unselectNodesAndEdges: J, onNodeDragStart: q, onSelectionDragStart: k } = f.getState();
          N.current = true;
          const H = l ? q : nc(k);
          (!c || !u) && !V && l && (((_a = G.get(l)) == null ? void 0 : _a.selected) || J()), l && u && c && Sc({
            id: l,
            store: f,
            nodeRef: e
          });
          const I = L(ee);
          if (y.current = I, g.current = bS(G, K, I, l), H && g.current) {
            const [W, F] = tc({
              nodeId: l,
              dragItems: g.current,
              nodeInternals: G
            });
            H(ee.sourceEvent, W, F);
          }
        };
        if (r) b.on(".drag", null);
        else {
          const ee = jv().on("start", (G) => {
            const { domNode: V, nodeDragThreshold: K } = f.getState();
            K === 0 && Z(G), T.current = false;
            const J = L(G);
            y.current = J, x.current = (V == null ? void 0 : V.getBoundingClientRect()) || null, E.current = gr(G.sourceEvent, x.current);
          }).on("drag", (G) => {
            var _a, _b;
            const V = L(G), { autoPanOnNodeDrag: K, nodeDragThreshold: J } = f.getState();
            if (G.sourceEvent.type === "touchmove" && G.sourceEvent.touches.length > 1 && (T.current = true), !T.current) {
              if (!_.current && N.current && K && (_.current = true, O()), !N.current) {
                const q = V.xSnapped - (((_a = y == null ? void 0 : y.current) == null ? void 0 : _a.x) ?? 0), k = V.ySnapped - (((_b = y == null ? void 0 : y.current) == null ? void 0 : _b.y) ?? 0);
                Math.sqrt(q * q + k * k) > J && Z(G);
              }
              (y.current.x !== V.xSnapped || y.current.y !== V.ySnapped) && g.current && N.current && (S.current = G.sourceEvent, E.current = gr(G.sourceEvent, x.current), X(V));
            }
          }).on("end", (G) => {
            if (!(!N.current || T.current) && (h(false), _.current = false, N.current = false, cancelAnimationFrame(v.current), g.current)) {
              const { updateNodePositions: V, nodeInternals: K, onNodeDragStop: J, onSelectionDragStop: q } = f.getState(), k = l ? J : nc(q);
              if (V(g.current, false, false), k) {
                const [H, I] = tc({
                  nodeId: l,
                  dragItems: g.current,
                  nodeInternals: K
                });
                k(G.sourceEvent, H, I);
              }
            }
          }).filter((G) => {
            const V = G.target;
            return !G.button && (!o || !kp(V, `.${o}`, e)) && (!s || kp(V, s, e));
          });
          return b.call(ee), () => {
            b.on(".drag", null);
          };
        }
      }
    }, [
      e,
      r,
      o,
      s,
      u,
      f,
      l,
      c,
      L
    ]), m;
  }
  function km() {
    const e = nt();
    return $.useCallback((o) => {
      const { nodeInternals: s, nodeExtent: l, updateNodePositions: u, getNodes: c, snapToGrid: f, snapGrid: m, onError: h, nodesDraggable: g } = e.getState(), y = c().filter((T) => T.selected && (T.draggable || g && typeof T.draggable > "u")), v = f ? m[0] : 5, x = f ? m[1] : 5, E = o.isShiftPressed ? 4 : 1, S = o.x * v * E, _ = o.y * x * E, N = y.map((T) => {
        if (T.positionAbsolute) {
          const L = {
            x: T.positionAbsolute.x + S,
            y: T.positionAbsolute.y + _
          };
          f && (L.x = m[0] * Math.round(L.x / m[0]), L.y = m[1] * Math.round(L.y / m[1]));
          const { positionAbsolute: b, position: X } = Sm(T, L, s, l, void 0, h);
          T.position = X, T.positionAbsolute = b;
        }
        return T;
      });
      u(N, true, false);
    }, []);
  }
  const Mo = {
    ArrowUp: {
      x: 0,
      y: -1
    },
    ArrowDown: {
      x: 0,
      y: 1
    },
    ArrowLeft: {
      x: -1,
      y: 0
    },
    ArrowRight: {
      x: 1,
      y: 0
    }
  };
  var _i = (e) => {
    const r = ({ id: o, type: s, data: l, xPos: u, yPos: c, xPosOrigin: f, yPosOrigin: m, selected: h, onClick: g, onMouseEnter: y, onMouseMove: v, onMouseLeave: x, onContextMenu: E, onDoubleClick: S, style: _, className: N, isDraggable: T, isSelectable: L, isConnectable: b, isFocusable: X, selectNodesOnDrag: O, sourcePosition: Z, targetPosition: ee, hidden: G, resizeObserver: V, dragHandle: K, zIndex: J, isParent: q, noDragClassName: k, noPanClassName: H, initialized: I, disableKeyboardA11y: W, ariaLabel: F, rfId: P, hasHandleBounds: B }) => {
      const C = nt(), z = $.useRef(null), re = $.useRef(null), te = $.useRef(Z), le = $.useRef(ee), ae = $.useRef(s), he = L || T || g || y || v || x, me = km(), ve = Ci(o, C.getState, y), ke = Ci(o, C.getState, v), Ve = Ci(o, C.getState, x), Ue = Ci(o, C.getState, E), Ke = Ci(o, C.getState, S), Qe = (Me) => {
        const { nodeDragThreshold: ye } = C.getState();
        if (L && (!O || !T || ye > 0) && Sc({
          id: o,
          store: C,
          nodeRef: z
        }), g) {
          const qe = C.getState().nodeInternals.get(o);
          qe && g(Me, {
            ...qe
          });
        }
      }, Oe = (Me) => {
        if (!yc(Me) && !W) if (Y0.includes(Me.key) && L) {
          const ye = Me.key === "Escape";
          Sc({
            id: o,
            store: C,
            unselect: ye,
            nodeRef: z
          });
        } else T && h && Object.prototype.hasOwnProperty.call(Mo, Me.key) && (C.setState({
          ariaLiveMessage: `Moved selected node ${Me.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~u}, y: ${~~c}`
        }), me({
          x: Mo[Me.key].x,
          y: Mo[Me.key].y,
          isShiftPressed: Me.shiftKey
        }));
      };
      $.useEffect(() => () => {
        re.current && (V == null ? void 0 : V.unobserve(re.current), re.current = null);
      }, []), $.useEffect(() => {
        if (z.current && !G) {
          const Me = z.current;
          (!I || !B || re.current !== Me) && (re.current && (V == null ? void 0 : V.unobserve(re.current)), V == null ? void 0 : V.observe(Me), re.current = Me);
        }
      }, [
        G,
        I,
        B
      ]), $.useEffect(() => {
        const Me = ae.current !== s, ye = te.current !== Z, qe = le.current !== ee;
        z.current && (Me || ye || qe) && (Me && (ae.current = s), ye && (te.current = Z), qe && (le.current = ee), C.getState().updateNodeDimensions([
          {
            id: o,
            nodeElement: z.current,
            forceUpdate: true
          }
        ]));
      }, [
        o,
        s,
        Z,
        ee
      ]);
      const ut = Em({
        nodeRef: z,
        disabled: G || !T,
        noDragClassName: k,
        handleSelector: K,
        nodeId: o,
        isSelectable: L,
        selectNodesOnDrag: O
      });
      return G ? null : Q.createElement("div", {
        className: gt([
          "react-flow__node",
          `react-flow__node-${s}`,
          {
            [H]: T
          },
          N,
          {
            selected: h,
            selectable: L,
            parent: q,
            dragging: ut
          }
        ]),
        ref: z,
        style: {
          zIndex: J,
          transform: `translate(${f}px,${m}px)`,
          pointerEvents: he ? "all" : "none",
          visibility: I ? "visible" : "hidden",
          ..._
        },
        "data-id": o,
        "data-testid": `rf__node-${o}`,
        onMouseEnter: ve,
        onMouseMove: ke,
        onMouseLeave: Ve,
        onContextMenu: Ue,
        onClick: Qe,
        onDoubleClick: Ke,
        onKeyDown: X ? Oe : void 0,
        tabIndex: X ? 0 : void 0,
        role: X ? "button" : void 0,
        "aria-describedby": W ? void 0 : `${fm}-${P}`,
        "aria-label": F
      }, Q.createElement(Wx, {
        value: o
      }, Q.createElement(e, {
        id: o,
        data: l,
        type: s,
        xPos: u,
        yPos: c,
        selected: h,
        isConnectable: b,
        sourcePosition: Z,
        targetPosition: ee,
        dragging: ut,
        dragHandle: K,
        zIndex: J
      })));
    };
    return r.displayName = "NodeWrapper", $.memo(r);
  };
  const RS = (e) => {
    const r = e.getNodes().filter((o) => o.selected);
    return {
      ...ql(r, e.nodeOrigin),
      transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
      userSelectionActive: e.userSelectionActive
    };
  };
  function PS({ onSelectionContextMenu: e, noPanClassName: r, disableKeyboardA11y: o }) {
    const s = nt(), { width: l, height: u, x: c, y: f, transformString: m, userSelectionActive: h } = ze(RS, At), g = km(), y = $.useRef(null);
    if ($.useEffect(() => {
      var _a;
      o || ((_a = y.current) == null ? void 0 : _a.focus({
        preventScroll: true
      }));
    }, [
      o
    ]), Em({
      nodeRef: y
    }), h || !l || !u) return null;
    const v = e ? (E) => {
      const S = s.getState().getNodes().filter((_) => _.selected);
      e(E, S);
    } : void 0, x = (E) => {
      Object.prototype.hasOwnProperty.call(Mo, E.key) && g({
        x: Mo[E.key].x,
        y: Mo[E.key].y,
        isShiftPressed: E.shiftKey
      });
    };
    return Q.createElement("div", {
      className: gt([
        "react-flow__nodesselection",
        "react-flow__container",
        r
      ]),
      style: {
        transform: m
      }
    }, Q.createElement("div", {
      ref: y,
      className: "react-flow__nodesselection-rect",
      onContextMenu: v,
      tabIndex: o ? void 0 : -1,
      onKeyDown: o ? void 0 : x,
      style: {
        width: l,
        height: u,
        top: f,
        left: c
      }
    }));
  }
  var $S = $.memo(PS);
  const zS = (e) => e.nodesSelectionActive, Cm = ({ children: e, onPaneClick: r, onPaneMouseEnter: o, onPaneMouseMove: s, onPaneMouseLeave: l, onPaneContextMenu: u, onPaneScroll: c, deleteKeyCode: f, onMove: m, onMoveStart: h, onMoveEnd: g, selectionKeyCode: y, selectionOnDrag: v, selectionMode: x, onSelectionStart: E, onSelectionEnd: S, multiSelectionKeyCode: _, panActivationKeyCode: N, zoomActivationKeyCode: T, elementsSelectable: L, zoomOnScroll: b, zoomOnPinch: X, panOnScroll: O, panOnScrollSpeed: Z, panOnScrollMode: ee, zoomOnDoubleClick: G, panOnDrag: V, defaultViewport: K, translateExtent: J, minZoom: q, maxZoom: k, preventScrolling: H, onSelectionContextMenu: I, noWheelClassName: W, noPanClassName: F, disableKeyboardA11y: P }) => {
    const B = ze(zS), C = Li(y), z = Li(N), re = z || V, te = z || O, le = C || v && re !== true;
    return xS({
      deleteKeyCode: f,
      multiSelectionKeyCode: _
    }), Q.createElement(CS, {
      onMove: m,
      onMoveStart: h,
      onMoveEnd: g,
      onPaneContextMenu: u,
      elementsSelectable: L,
      zoomOnScroll: b,
      zoomOnPinch: X,
      panOnScroll: te,
      panOnScrollSpeed: Z,
      panOnScrollMode: ee,
      zoomOnDoubleClick: G,
      panOnDrag: !C && re,
      defaultViewport: K,
      translateExtent: J,
      minZoom: q,
      maxZoom: k,
      zoomActivationKeyCode: T,
      preventScrolling: H,
      noWheelClassName: W,
      noPanClassName: F
    }, Q.createElement(wm, {
      onSelectionStart: E,
      onSelectionEnd: S,
      onPaneClick: r,
      onPaneMouseEnter: o,
      onPaneMouseMove: s,
      onPaneMouseLeave: l,
      onPaneContextMenu: u,
      onPaneScroll: c,
      panOnDrag: re,
      isSelecting: !!le,
      selectionMode: x
    }, e, B && Q.createElement($S, {
      onSelectionContextMenu: I,
      noPanClassName: F,
      disableKeyboardA11y: P
    })));
  };
  Cm.displayName = "FlowRenderer";
  var DS = $.memo(Cm);
  function LS(e) {
    return ze($.useCallback((o) => e ? J0(o.nodeInternals, {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }, o.transform, true) : o.getNodes(), [
      e
    ]));
  }
  function OS(e) {
    const r = {
      input: _i(e.input || am),
      default: _i(e.default || xc),
      output: _i(e.output || cm),
      group: _i(e.group || Kc)
    }, o = {}, s = Object.keys(e).filter((l) => ![
      "input",
      "default",
      "output",
      "group"
    ].includes(l)).reduce((l, u) => (l[u] = _i(e[u] || xc), l), o);
    return {
      ...r,
      ...s
    };
  }
  const FS = ({ x: e, y: r, width: o, height: s, origin: l }) => !o || !s ? {
    x: e,
    y: r
  } : l[0] < 0 || l[1] < 0 || l[0] > 1 || l[1] > 1 ? {
    x: e,
    y: r
  } : {
    x: e - o * l[0],
    y: r - s * l[1]
  }, BS = (e) => ({
    nodesDraggable: e.nodesDraggable,
    nodesConnectable: e.nodesConnectable,
    nodesFocusable: e.nodesFocusable,
    elementsSelectable: e.elementsSelectable,
    updateNodeDimensions: e.updateNodeDimensions,
    onError: e.onError
  }), _m = (e) => {
    const { nodesDraggable: r, nodesConnectable: o, nodesFocusable: s, elementsSelectable: l, updateNodeDimensions: u, onError: c } = ze(BS, At), f = LS(e.onlyRenderVisibleElements), m = $.useRef(), h = $.useMemo(() => {
      if (typeof ResizeObserver > "u") return null;
      const g = new ResizeObserver((y) => {
        const v = y.map((x) => ({
          id: x.target.getAttribute("data-id"),
          nodeElement: x.target,
          forceUpdate: true
        }));
        u(v);
      });
      return m.current = g, g;
    }, []);
    return $.useEffect(() => () => {
      var _a;
      (_a = m == null ? void 0 : m.current) == null ? void 0 : _a.disconnect();
    }, []), Q.createElement("div", {
      className: "react-flow__nodes",
      style: Qc
    }, f.map((g) => {
      var _a, _b, _c2;
      let y = g.type || "default";
      e.nodeTypes[y] || (c == null ? void 0 : c("003", Wn.error003(y)), y = "default");
      const v = e.nodeTypes[y] || e.nodeTypes.default, x = !!(g.draggable || r && typeof g.draggable > "u"), E = !!(g.selectable || l && typeof g.selectable > "u"), S = !!(g.connectable || o && typeof g.connectable > "u"), _ = !!(g.focusable || s && typeof g.focusable > "u"), N = e.nodeExtent ? Vc(g.positionAbsolute, e.nodeExtent) : g.positionAbsolute, T = (N == null ? void 0 : N.x) ?? 0, L = (N == null ? void 0 : N.y) ?? 0, b = FS({
        x: T,
        y: L,
        width: g.width ?? 0,
        height: g.height ?? 0,
        origin: e.nodeOrigin
      });
      return Q.createElement(v, {
        key: g.id,
        id: g.id,
        className: g.className,
        style: g.style,
        type: y,
        data: g.data,
        sourcePosition: g.sourcePosition || ge.Bottom,
        targetPosition: g.targetPosition || ge.Top,
        hidden: g.hidden,
        xPos: T,
        yPos: L,
        xPosOrigin: b.x,
        yPosOrigin: b.y,
        selectNodesOnDrag: e.selectNodesOnDrag,
        onClick: e.onNodeClick,
        onMouseEnter: e.onNodeMouseEnter,
        onMouseMove: e.onNodeMouseMove,
        onMouseLeave: e.onNodeMouseLeave,
        onContextMenu: e.onNodeContextMenu,
        onDoubleClick: e.onNodeDoubleClick,
        selected: !!g.selected,
        isDraggable: x,
        isSelectable: E,
        isConnectable: S,
        isFocusable: _,
        resizeObserver: h,
        dragHandle: g.dragHandle,
        zIndex: ((_a = g[Xe]) == null ? void 0 : _a.z) ?? 0,
        isParent: !!((_b = g[Xe]) == null ? void 0 : _b.isParent),
        noDragClassName: e.noDragClassName,
        noPanClassName: e.noPanClassName,
        initialized: !!g.width && !!g.height,
        rfId: e.rfId,
        disableKeyboardA11y: e.disableKeyboardA11y,
        ariaLabel: g.ariaLabel,
        hasHandleBounds: !!((_c2 = g[Xe]) == null ? void 0 : _c2.handleBounds)
      });
    }));
  };
  _m.displayName = "NodeRenderer";
  var jS = $.memo(_m);
  const HS = (e, r, o) => o === ge.Left ? e - r : o === ge.Right ? e + r : e, VS = (e, r, o) => o === ge.Top ? e - r : o === ge.Bottom ? e + r : e, _p = "react-flow__edgeupdater", Np = ({ position: e, centerX: r, centerY: o, radius: s = 10, onMouseDown: l, onMouseEnter: u, onMouseOut: c, type: f }) => Q.createElement("circle", {
    onMouseDown: l,
    onMouseEnter: u,
    onMouseOut: c,
    className: gt([
      _p,
      `${_p}-${f}`
    ]),
    cx: HS(r, s, e),
    cy: VS(o, s, e),
    r: s,
    stroke: "transparent",
    fill: "transparent"
  }), US = () => true;
  var ko = (e) => {
    const r = ({ id: o, className: s, type: l, data: u, onClick: c, onEdgeDoubleClick: f, selected: m, animated: h, label: g, labelStyle: y, labelShowBg: v, labelBgStyle: x, labelBgPadding: E, labelBgBorderRadius: S, style: _, source: N, target: T, sourceX: L, sourceY: b, targetX: X, targetY: O, sourcePosition: Z, targetPosition: ee, elementsSelectable: G, hidden: V, sourceHandleId: K, targetHandleId: J, onContextMenu: q, onMouseEnter: k, onMouseMove: H, onMouseLeave: I, reconnectRadius: W, onReconnect: F, onReconnectStart: P, onReconnectEnd: B, markerEnd: C, markerStart: z, rfId: re, ariaLabel: te, isFocusable: le, isReconnectable: ae, pathOptions: he, interactionWidth: me, disableKeyboardA11y: ve }) => {
      const ke = $.useRef(null), [Ve, Ue] = $.useState(false), [Ke, Qe] = $.useState(false), Oe = nt(), ut = $.useMemo(() => `url('#${vc(z, re)}')`, [
        z,
        re
      ]), Me = $.useMemo(() => `url('#${vc(C, re)}')`, [
        C,
        re
      ]);
      if (V) return null;
      const ye = (We) => {
        var _a;
        const { edges: jt, addSelectedEdges: mn, unselectNodesAndEdges: gn, multiSelectionActive: Yn } = Oe.getState(), St = jt.find((tn) => tn.id === o);
        St && (G && (Oe.setState({
          nodesSelectionActive: false
        }), St.selected && Yn ? (gn({
          nodes: [],
          edges: [
            St
          ]
        }), (_a = ke.current) == null ? void 0 : _a.blur()) : mn([
          o
        ])), c && c(We, St));
      }, qe = ki(o, Oe.getState, f), yt = ki(o, Oe.getState, q), Ft = ki(o, Oe.getState, k), hn = ki(o, Oe.getState, H), _n = ki(o, Oe.getState, I), Bt = (We, jt) => {
        if (We.button !== 0) return;
        const { edges: mn, isValidConnection: gn } = Oe.getState(), Yn = jt ? T : N, St = (jt ? J : K) || null, tn = jt ? "target" : "source", Er = gn || US, kr = jt, In = mn.find((vn) => vn.id === o);
        Qe(true), P == null ? void 0 : P(We, In, tn);
        const yn = (vn) => {
          Qe(false), B == null ? void 0 : B(vn, In, tn);
        };
        om({
          event: We,
          handleId: St,
          nodeId: Yn,
          onConnect: (vn) => F == null ? void 0 : F(In, vn),
          isTarget: kr,
          getState: Oe.getState,
          setState: Oe.setState,
          isValidConnection: Er,
          edgeUpdaterType: tn,
          onReconnectEnd: yn
        });
      }, Nn = (We) => Bt(We, true), pn = (We) => Bt(We, false), qt = () => Ue(true), Jt = () => Ue(false), Mn = !G && !c, en = (We) => {
        var _a;
        if (!ve && Y0.includes(We.key) && G) {
          const { unselectNodesAndEdges: jt, addSelectedEdges: mn, edges: gn } = Oe.getState();
          We.key === "Escape" ? ((_a = ke.current) == null ? void 0 : _a.blur(), jt({
            edges: [
              gn.find((St) => St.id === o)
            ]
          })) : mn([
            o
          ]);
        }
      };
      return Q.createElement("g", {
        className: gt([
          "react-flow__edge",
          `react-flow__edge-${l}`,
          s,
          {
            selected: m,
            animated: h,
            inactive: Mn,
            updating: Ve
          }
        ]),
        onClick: ye,
        onDoubleClick: qe,
        onContextMenu: yt,
        onMouseEnter: Ft,
        onMouseMove: hn,
        onMouseLeave: _n,
        onKeyDown: le ? en : void 0,
        tabIndex: le ? 0 : void 0,
        role: le ? "button" : "img",
        "data-testid": `rf__edge-${o}`,
        "aria-label": te === null ? void 0 : te || `Edge from ${N} to ${T}`,
        "aria-describedby": le ? `${hm}-${re}` : void 0,
        ref: ke
      }, !Ke && Q.createElement(e, {
        id: o,
        source: N,
        target: T,
        selected: m,
        animated: h,
        label: g,
        labelStyle: y,
        labelShowBg: v,
        labelBgStyle: x,
        labelBgPadding: E,
        labelBgBorderRadius: S,
        data: u,
        style: _,
        sourceX: L,
        sourceY: b,
        targetX: X,
        targetY: O,
        sourcePosition: Z,
        targetPosition: ee,
        sourceHandleId: K,
        targetHandleId: J,
        markerStart: ut,
        markerEnd: Me,
        pathOptions: he,
        interactionWidth: me
      }), ae && Q.createElement(Q.Fragment, null, (ae === "source" || ae === true) && Q.createElement(Np, {
        position: Z,
        centerX: L,
        centerY: b,
        radius: W,
        onMouseDown: Nn,
        onMouseEnter: qt,
        onMouseOut: Jt,
        type: "source"
      }), (ae === "target" || ae === true) && Q.createElement(Np, {
        position: ee,
        centerX: X,
        centerY: O,
        radius: W,
        onMouseDown: pn,
        onMouseEnter: qt,
        onMouseOut: Jt,
        type: "target"
      })));
    };
    return r.displayName = "EdgeWrapper", $.memo(r);
  };
  function WS(e) {
    const r = {
      default: ko(e.default || Fl),
      straight: ko(e.bezier || Yc),
      step: ko(e.step || Wc),
      smoothstep: ko(e.step || Zl),
      simplebezier: ko(e.simplebezier || Uc)
    }, o = {}, s = Object.keys(e).filter((l) => ![
      "default",
      "bezier"
    ].includes(l)).reduce((l, u) => (l[u] = ko(e[u] || Fl), l), o);
    return {
      ...r,
      ...s
    };
  }
  function Mp(e, r, o = null) {
    const s = ((o == null ? void 0 : o.x) || 0) + r.x, l = ((o == null ? void 0 : o.y) || 0) + r.y, u = (o == null ? void 0 : o.width) || r.width, c = (o == null ? void 0 : o.height) || r.height;
    switch (e) {
      case ge.Top:
        return {
          x: s + u / 2,
          y: l
        };
      case ge.Right:
        return {
          x: s + u,
          y: l + c / 2
        };
      case ge.Bottom:
        return {
          x: s + u / 2,
          y: l + c
        };
      case ge.Left:
        return {
          x: s,
          y: l + c / 2
        };
    }
  }
  function Ip(e, r) {
    return e ? e.length === 1 || !r ? e[0] : r && e.find((o) => o.id === r) || null : null;
  }
  const YS = (e, r, o, s, l, u) => {
    const c = Mp(o, e, r), f = Mp(u, s, l);
    return {
      sourceX: c.x,
      sourceY: c.y,
      targetX: f.x,
      targetY: f.y
    };
  };
  function XS({ sourcePos: e, targetPos: r, sourceWidth: o, sourceHeight: s, targetWidth: l, targetHeight: u, width: c, height: f, transform: m }) {
    const h = {
      x: Math.min(e.x, r.x),
      y: Math.min(e.y, r.y),
      x2: Math.max(e.x + o, r.x + l),
      y2: Math.max(e.y + s, r.y + u)
    };
    h.x === h.x2 && (h.x2 += 1), h.y === h.y2 && (h.y2 += 1);
    const g = zi({
      x: (0 - m[0]) / m[2],
      y: (0 - m[1]) / m[2],
      width: c / m[2],
      height: f / m[2]
    }), y = Math.max(0, Math.min(g.x2, h.x2) - Math.max(g.x, h.x)), v = Math.max(0, Math.min(g.y2, h.y2) - Math.max(g.y, h.y));
    return Math.ceil(y * v) > 0;
  }
  function bp(e) {
    var _a, _b, _c2, _d, _e2;
    const r = ((_a = e == null ? void 0 : e[Xe]) == null ? void 0 : _a.handleBounds) || null, o = r && (e == null ? void 0 : e.width) && (e == null ? void 0 : e.height) && typeof ((_b = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : _b.x) < "u" && typeof ((_c2 = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : _c2.y) < "u";
    return [
      {
        x: ((_d = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : _d.x) || 0,
        y: ((_e2 = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : _e2.y) || 0,
        width: (e == null ? void 0 : e.width) || 0,
        height: (e == null ? void 0 : e.height) || 0
      },
      r,
      !!o
    ];
  }
  const GS = [
    {
      level: 0,
      isMaxLevel: true,
      edges: []
    }
  ];
  function KS(e, r, o = false) {
    let s = -1;
    const l = e.reduce((c, f) => {
      var _a, _b;
      const m = Zt(f.zIndex);
      let h = m ? f.zIndex : 0;
      if (o) {
        const g = r.get(f.target), y = r.get(f.source), v = f.selected || (g == null ? void 0 : g.selected) || (y == null ? void 0 : y.selected), x = Math.max(((_a = y == null ? void 0 : y[Xe]) == null ? void 0 : _a.z) || 0, ((_b = g == null ? void 0 : g[Xe]) == null ? void 0 : _b.z) || 0, 1e3);
        h = (m ? f.zIndex : 0) + (v ? x : 0);
      }
      return c[h] ? c[h].push(f) : c[h] = [
        f
      ], s = h > s ? h : s, c;
    }, {}), u = Object.entries(l).map(([c, f]) => {
      const m = +c;
      return {
        edges: f,
        level: m,
        isMaxLevel: m === s
      };
    });
    return u.length === 0 ? GS : u;
  }
  function QS(e, r, o) {
    const s = ze($.useCallback((l) => e ? l.edges.filter((u) => {
      const c = r.get(u.source), f = r.get(u.target);
      return (c == null ? void 0 : c.width) && (c == null ? void 0 : c.height) && (f == null ? void 0 : f.width) && (f == null ? void 0 : f.height) && XS({
        sourcePos: c.positionAbsolute || {
          x: 0,
          y: 0
        },
        targetPos: f.positionAbsolute || {
          x: 0,
          y: 0
        },
        sourceWidth: c.width,
        sourceHeight: c.height,
        targetWidth: f.width,
        targetHeight: f.height,
        width: l.width,
        height: l.height,
        transform: l.transform
      });
    }) : l.edges, [
      e,
      r
    ]));
    return KS(s, r, o);
  }
  const ZS = ({ color: e = "none", strokeWidth: r = 1 }) => Q.createElement("polyline", {
    style: {
      stroke: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    points: "-5,-4 0,0 -5,4"
  }), qS = ({ color: e = "none", strokeWidth: r = 1 }) => Q.createElement("polyline", {
    style: {
      stroke: e,
      fill: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "-5,-4 0,0 -5,4 -5,-4"
  }), Ap = {
    [To.Arrow]: ZS,
    [To.ArrowClosed]: qS
  };
  function JS(e) {
    const r = nt();
    return $.useMemo(() => {
      var _a, _b;
      return Object.prototype.hasOwnProperty.call(Ap, e) ? Ap[e] : ((_b = (_a = r.getState()).onError) == null ? void 0 : _b.call(_a, "009", Wn.error009(e)), null);
    }, [
      e
    ]);
  }
  const e2 = ({ id: e, type: r, color: o, width: s = 12.5, height: l = 12.5, markerUnits: u = "strokeWidth", strokeWidth: c, orient: f = "auto-start-reverse" }) => {
    const m = JS(r);
    return m ? Q.createElement("marker", {
      className: "react-flow__arrowhead",
      id: e,
      markerWidth: `${s}`,
      markerHeight: `${l}`,
      viewBox: "-10 -10 20 20",
      markerUnits: u,
      orient: f,
      refX: "0",
      refY: "0"
    }, Q.createElement(m, {
      color: o,
      strokeWidth: c
    })) : null;
  }, t2 = ({ defaultColor: e, rfId: r }) => (o) => {
    const s = [];
    return o.edges.reduce((l, u) => ([
      u.markerStart,
      u.markerEnd
    ].forEach((c) => {
      if (c && typeof c == "object") {
        const f = vc(c, r);
        s.includes(f) || (l.push({
          id: f,
          color: c.color || e,
          ...c
        }), s.push(f));
      }
    }), l), []).sort((l, u) => l.id.localeCompare(u.id));
  }, Nm = ({ defaultColor: e, rfId: r }) => {
    const o = ze($.useCallback(t2({
      defaultColor: e,
      rfId: r
    }), [
      e,
      r
    ]), (s, l) => !(s.length !== l.length || s.some((u, c) => u.id !== l[c].id)));
    return Q.createElement("defs", null, o.map((s) => Q.createElement(e2, {
      id: s.id,
      key: s.id,
      type: s.type,
      color: s.color,
      width: s.width,
      height: s.height,
      markerUnits: s.markerUnits,
      strokeWidth: s.strokeWidth,
      orient: s.orient
    })));
  };
  Nm.displayName = "MarkerDefinitions";
  var n2 = $.memo(Nm);
  const r2 = (e) => ({
    nodesConnectable: e.nodesConnectable,
    edgesFocusable: e.edgesFocusable,
    edgesUpdatable: e.edgesUpdatable,
    elementsSelectable: e.elementsSelectable,
    width: e.width,
    height: e.height,
    connectionMode: e.connectionMode,
    nodeInternals: e.nodeInternals,
    onError: e.onError
  }), Mm = ({ defaultMarkerColor: e, onlyRenderVisibleElements: r, elevateEdgesOnSelect: o, rfId: s, edgeTypes: l, noPanClassName: u, onEdgeContextMenu: c, onEdgeMouseEnter: f, onEdgeMouseMove: m, onEdgeMouseLeave: h, onEdgeClick: g, onEdgeDoubleClick: y, onReconnect: v, onReconnectStart: x, onReconnectEnd: E, reconnectRadius: S, children: _, disableKeyboardA11y: N }) => {
    const { edgesFocusable: T, edgesUpdatable: L, elementsSelectable: b, width: X, height: O, connectionMode: Z, nodeInternals: ee, onError: G } = ze(r2, At), V = QS(r, ee, o);
    return X ? Q.createElement(Q.Fragment, null, V.map(({ level: K, edges: J, isMaxLevel: q }) => Q.createElement("svg", {
      key: K,
      style: {
        zIndex: K
      },
      width: X,
      height: O,
      className: "react-flow__edges react-flow__container"
    }, q && Q.createElement(n2, {
      defaultColor: e,
      rfId: s
    }), Q.createElement("g", null, J.map((k) => {
      const [H, I, W] = bp(ee.get(k.source)), [F, P, B] = bp(ee.get(k.target));
      if (!W || !B) return null;
      let C = k.type || "default";
      l[C] || (G == null ? void 0 : G("011", Wn.error011(C)), C = "default");
      const z = l[C] || l.default, re = Z === Yr.Strict ? P.target : (P.target ?? []).concat(P.source ?? []), te = Ip(I.source, k.sourceHandle), le = Ip(re, k.targetHandle), ae = (te == null ? void 0 : te.position) || ge.Bottom, he = (le == null ? void 0 : le.position) || ge.Top, me = !!(k.focusable || T && typeof k.focusable > "u"), ve = k.reconnectable || k.updatable, ke = typeof v < "u" && (ve || L && typeof ve > "u");
      if (!te || !le) return G == null ? void 0 : G("008", Wn.error008(te, k)), null;
      const { sourceX: Ve, sourceY: Ue, targetX: Ke, targetY: Qe } = YS(H, te, ae, F, le, he);
      return Q.createElement(z, {
        key: k.id,
        id: k.id,
        className: gt([
          k.className,
          u
        ]),
        type: C,
        data: k.data,
        selected: !!k.selected,
        animated: !!k.animated,
        hidden: !!k.hidden,
        label: k.label,
        labelStyle: k.labelStyle,
        labelShowBg: k.labelShowBg,
        labelBgStyle: k.labelBgStyle,
        labelBgPadding: k.labelBgPadding,
        labelBgBorderRadius: k.labelBgBorderRadius,
        style: k.style,
        source: k.source,
        target: k.target,
        sourceHandleId: k.sourceHandle,
        targetHandleId: k.targetHandle,
        markerEnd: k.markerEnd,
        markerStart: k.markerStart,
        sourceX: Ve,
        sourceY: Ue,
        targetX: Ke,
        targetY: Qe,
        sourcePosition: ae,
        targetPosition: he,
        elementsSelectable: b,
        onContextMenu: c,
        onMouseEnter: f,
        onMouseMove: m,
        onMouseLeave: h,
        onClick: g,
        onEdgeDoubleClick: y,
        onReconnect: v,
        onReconnectStart: x,
        onReconnectEnd: E,
        reconnectRadius: S,
        rfId: s,
        ariaLabel: k.ariaLabel,
        isFocusable: me,
        isReconnectable: ke,
        pathOptions: "pathOptions" in k ? k.pathOptions : void 0,
        interactionWidth: k.interactionWidth,
        disableKeyboardA11y: N
      });
    })))), _) : null;
  };
  Mm.displayName = "EdgeRenderer";
  var o2 = $.memo(Mm);
  const i2 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
  function s2({ children: e }) {
    const r = ze(i2);
    return Q.createElement("div", {
      className: "react-flow__viewport react-flow__container",
      style: {
        transform: r
      }
    }, e);
  }
  function l2(e) {
    const r = Ui(), o = $.useRef(false);
    $.useEffect(() => {
      !o.current && r.viewportInitialized && e && (setTimeout(() => e(r), 1), o.current = true);
    }, [
      e,
      r.viewportInitialized
    ]);
  }
  const a2 = {
    [ge.Left]: ge.Right,
    [ge.Right]: ge.Left,
    [ge.Top]: ge.Bottom,
    [ge.Bottom]: ge.Top
  }, Im = ({ nodeId: e, handleType: r, style: o, type: s = mr.Bezier, CustomComponent: l, connectionStatus: u }) => {
    var _a, _b, _c2;
    const { fromNode: c, handleId: f, toX: m, toY: h, connectionMode: g } = ze($.useCallback((O) => ({
      fromNode: O.nodeInternals.get(e),
      handleId: O.connectionHandleId,
      toX: (O.connectionPosition.x - O.transform[0]) / O.transform[2],
      toY: (O.connectionPosition.y - O.transform[1]) / O.transform[2],
      connectionMode: O.connectionMode
    }), [
      e
    ]), At), y = (_a = c == null ? void 0 : c[Xe]) == null ? void 0 : _a.handleBounds;
    let v = y == null ? void 0 : y[r];
    if (g === Yr.Loose && (v = v || (y == null ? void 0 : y[r === "source" ? "target" : "source"])), !c || !v) return null;
    const x = f ? v.find((O) => O.id === f) : v[0], E = x ? x.x + x.width / 2 : (c.width ?? 0) / 2, S = x ? x.y + x.height / 2 : c.height ?? 0, _ = (((_b = c.positionAbsolute) == null ? void 0 : _b.x) ?? 0) + E, N = (((_c2 = c.positionAbsolute) == null ? void 0 : _c2.y) ?? 0) + S, T = x == null ? void 0 : x.position, L = T ? a2[T] : null;
    if (!T || !L) return null;
    if (l) return Q.createElement(l, {
      connectionLineType: s,
      connectionLineStyle: o,
      fromNode: c,
      fromHandle: x,
      fromX: _,
      fromY: N,
      toX: m,
      toY: h,
      fromPosition: T,
      toPosition: L,
      connectionStatus: u
    });
    let b = "";
    const X = {
      sourceX: _,
      sourceY: N,
      sourcePosition: T,
      targetX: m,
      targetY: h,
      targetPosition: L
    };
    return s === mr.Bezier ? [b] = Z0(X) : s === mr.Step ? [b] = Ol({
      ...X,
      borderRadius: 0
    }) : s === mr.SmoothStep ? [b] = Ol(X) : s === mr.SimpleBezier ? [b] = Q0(X) : b = `M${_},${N} ${m},${h}`, Q.createElement("path", {
      d: b,
      fill: "none",
      className: "react-flow__connection-path",
      style: o
    });
  };
  Im.displayName = "ConnectionLine";
  const u2 = (e) => ({
    nodeId: e.connectionNodeId,
    handleType: e.connectionHandleType,
    nodesConnectable: e.nodesConnectable,
    connectionStatus: e.connectionStatus,
    width: e.width,
    height: e.height
  });
  function c2({ containerStyle: e, style: r, type: o, component: s }) {
    const { nodeId: l, handleType: u, nodesConnectable: c, width: f, height: m, connectionStatus: h } = ze(u2, At);
    return !(l && u && f && c) ? null : Q.createElement("svg", {
      style: e,
      width: f,
      height: m,
      className: "react-flow__edges react-flow__connectionline react-flow__container"
    }, Q.createElement("g", {
      className: gt([
        "react-flow__connection",
        h
      ])
    }, Q.createElement(Im, {
      nodeId: l,
      handleType: u,
      style: r,
      type: o,
      CustomComponent: s,
      connectionStatus: h
    })));
  }
  function Tp(e, r) {
    return $.useRef(null), nt(), $.useMemo(() => r(e), [
      e
    ]);
  }
  const bm = ({ nodeTypes: e, edgeTypes: r, onMove: o, onMoveStart: s, onMoveEnd: l, onInit: u, onNodeClick: c, onEdgeClick: f, onNodeDoubleClick: m, onEdgeDoubleClick: h, onNodeMouseEnter: g, onNodeMouseMove: y, onNodeMouseLeave: v, onNodeContextMenu: x, onSelectionContextMenu: E, onSelectionStart: S, onSelectionEnd: _, connectionLineType: N, connectionLineStyle: T, connectionLineComponent: L, connectionLineContainerStyle: b, selectionKeyCode: X, selectionOnDrag: O, selectionMode: Z, multiSelectionKeyCode: ee, panActivationKeyCode: G, zoomActivationKeyCode: V, deleteKeyCode: K, onlyRenderVisibleElements: J, elementsSelectable: q, selectNodesOnDrag: k, defaultViewport: H, translateExtent: I, minZoom: W, maxZoom: F, preventScrolling: P, defaultMarkerColor: B, zoomOnScroll: C, zoomOnPinch: z, panOnScroll: re, panOnScrollSpeed: te, panOnScrollMode: le, zoomOnDoubleClick: ae, panOnDrag: he, onPaneClick: me, onPaneMouseEnter: ve, onPaneMouseMove: ke, onPaneMouseLeave: Ve, onPaneScroll: Ue, onPaneContextMenu: Ke, onEdgeContextMenu: Qe, onEdgeMouseEnter: Oe, onEdgeMouseMove: ut, onEdgeMouseLeave: Me, onReconnect: ye, onReconnectStart: qe, onReconnectEnd: yt, reconnectRadius: Ft, noDragClassName: hn, noWheelClassName: _n, noPanClassName: Bt, elevateEdgesOnSelect: Nn, disableKeyboardA11y: pn, nodeOrigin: qt, nodeExtent: Jt, rfId: Mn }) => {
    const en = Tp(e, OS), We = Tp(r, WS);
    return l2(u), Q.createElement(DS, {
      onPaneClick: me,
      onPaneMouseEnter: ve,
      onPaneMouseMove: ke,
      onPaneMouseLeave: Ve,
      onPaneContextMenu: Ke,
      onPaneScroll: Ue,
      deleteKeyCode: K,
      selectionKeyCode: X,
      selectionOnDrag: O,
      selectionMode: Z,
      onSelectionStart: S,
      onSelectionEnd: _,
      multiSelectionKeyCode: ee,
      panActivationKeyCode: G,
      zoomActivationKeyCode: V,
      elementsSelectable: q,
      onMove: o,
      onMoveStart: s,
      onMoveEnd: l,
      zoomOnScroll: C,
      zoomOnPinch: z,
      zoomOnDoubleClick: ae,
      panOnScroll: re,
      panOnScrollSpeed: te,
      panOnScrollMode: le,
      panOnDrag: he,
      defaultViewport: H,
      translateExtent: I,
      minZoom: W,
      maxZoom: F,
      onSelectionContextMenu: E,
      preventScrolling: P,
      noDragClassName: hn,
      noWheelClassName: _n,
      noPanClassName: Bt,
      disableKeyboardA11y: pn
    }, Q.createElement(s2, null, Q.createElement(o2, {
      edgeTypes: We,
      onEdgeClick: f,
      onEdgeDoubleClick: h,
      onlyRenderVisibleElements: J,
      onEdgeContextMenu: Qe,
      onEdgeMouseEnter: Oe,
      onEdgeMouseMove: ut,
      onEdgeMouseLeave: Me,
      onReconnect: ye,
      onReconnectStart: qe,
      onReconnectEnd: yt,
      reconnectRadius: Ft,
      defaultMarkerColor: B,
      noPanClassName: Bt,
      elevateEdgesOnSelect: !!Nn,
      disableKeyboardA11y: pn,
      rfId: Mn
    }, Q.createElement(c2, {
      style: T,
      type: N,
      component: L,
      containerStyle: b
    })), Q.createElement("div", {
      className: "react-flow__edgelabel-renderer"
    }), Q.createElement(jS, {
      nodeTypes: en,
      onNodeClick: c,
      onNodeDoubleClick: m,
      onNodeMouseEnter: g,
      onNodeMouseMove: y,
      onNodeMouseLeave: v,
      onNodeContextMenu: x,
      selectNodesOnDrag: k,
      onlyRenderVisibleElements: J,
      noPanClassName: Bt,
      noDragClassName: hn,
      disableKeyboardA11y: pn,
      nodeOrigin: qt,
      nodeExtent: Jt,
      rfId: Mn
    })));
  };
  bm.displayName = "GraphView";
  var d2 = $.memo(bm);
  const Ec = [
    [
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY
    ],
    [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY
    ]
  ], fr = {
    rfId: "1",
    width: 0,
    height: 0,
    transform: [
      0,
      0,
      1
    ],
    nodeInternals: /* @__PURE__ */ new Map(),
    edges: [],
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: false,
    hasDefaultEdges: false,
    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: void 0,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: Ec,
    nodeExtent: Ec,
    nodesSelectionActive: false,
    userSelectionActive: false,
    userSelectionRect: null,
    connectionNodeId: null,
    connectionHandleId: null,
    connectionHandleType: "source",
    connectionPosition: {
      x: 0,
      y: 0
    },
    connectionStatus: null,
    connectionMode: Yr.Strict,
    domNode: null,
    paneDragging: false,
    noPanClassName: "nopan",
    nodeOrigin: [
      0,
      0
    ],
    nodeDragThreshold: 0,
    snapGrid: [
      15,
      15
    ],
    snapToGrid: false,
    nodesDraggable: true,
    nodesConnectable: true,
    nodesFocusable: true,
    edgesFocusable: true,
    edgesUpdatable: true,
    elementsSelectable: true,
    elevateNodesOnSelect: true,
    fitViewOnInit: false,
    fitViewOnInitDone: false,
    fitViewOnInitOptions: void 0,
    onSelectionChange: [],
    multiSelectionActive: false,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectOnClick: true,
    ariaLiveMessage: "",
    autoPanOnConnect: true,
    autoPanOnNodeDrag: true,
    connectionRadius: 20,
    onError: Fx,
    isValidConnection: void 0
  }, f2 = () => Jy((e, r) => ({
    ...fr,
    setNodes: (o) => {
      const { nodeInternals: s, nodeOrigin: l, elevateNodesOnSelect: u } = r();
      e({
        nodeInternals: Ju(o, s, l, u)
      });
    },
    getNodes: () => Array.from(r().nodeInternals.values()),
    setEdges: (o) => {
      const { defaultEdgeOptions: s = {} } = r();
      e({
        edges: o.map((l) => ({
          ...s,
          ...l
        }))
      });
    },
    setDefaultNodesAndEdges: (o, s) => {
      const l = typeof o < "u", u = typeof s < "u", c = l ? Ju(o, /* @__PURE__ */ new Map(), r().nodeOrigin, r().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
      e({
        nodeInternals: c,
        edges: u ? s : [],
        hasDefaultNodes: l,
        hasDefaultEdges: u
      });
    },
    updateNodeDimensions: (o) => {
      const { onNodesChange: s, nodeInternals: l, fitViewOnInit: u, fitViewOnInitDone: c, fitViewOnInitOptions: f, domNode: m, nodeOrigin: h } = r(), g = m == null ? void 0 : m.querySelector(".react-flow__viewport");
      if (!g) return;
      const y = window.getComputedStyle(g), { m22: v } = new window.DOMMatrixReadOnly(y.transform), x = o.reduce((S, _) => {
        const N = l.get(_.id);
        if (N == null ? void 0 : N.hidden) l.set(N.id, {
          ...N,
          [Xe]: {
            ...N[Xe],
            handleBounds: void 0
          }
        });
        else if (N) {
          const T = Hc(_.nodeElement);
          !!(T.width && T.height && (N.width !== T.width || N.height !== T.height || _.forceUpdate)) && (l.set(N.id, {
            ...N,
            [Xe]: {
              ...N[Xe],
              handleBounds: {
                source: Cp(".source", _.nodeElement, v, h),
                target: Cp(".target", _.nodeElement, v, h)
              }
            },
            ...T
          }), S.push({
            id: N.id,
            type: "dimensions",
            dimensions: T
          }));
        }
        return S;
      }, []);
      mm(l, h);
      const E = c || u && !c && gm(r, {
        initial: true,
        ...f
      });
      e({
        nodeInternals: new Map(l),
        fitViewOnInitDone: E
      }), (x == null ? void 0 : x.length) > 0 && (s == null ? void 0 : s(x));
    },
    updateNodePositions: (o, s = true, l = false) => {
      const { triggerNodeChanges: u } = r(), c = o.map((f) => {
        const m = {
          id: f.id,
          type: "position",
          dragging: l
        };
        return s && (m.positionAbsolute = f.positionAbsolute, m.position = f.position), m;
      });
      u(c);
    },
    triggerNodeChanges: (o) => {
      const { onNodesChange: s, nodeInternals: l, hasDefaultNodes: u, nodeOrigin: c, getNodes: f, elevateNodesOnSelect: m } = r();
      if (o == null ? void 0 : o.length) {
        if (u) {
          const h = vm(o, f()), g = Ju(h, l, c, m);
          e({
            nodeInternals: g
          });
        }
        s == null ? void 0 : s(o);
      }
    },
    addSelectedNodes: (o) => {
      const { multiSelectionActive: s, edges: l, getNodes: u } = r();
      let c, f = null;
      s ? c = o.map((m) => pr(m, true)) : (c = Co(u(), o), f = Co(l, [])), vl({
        changedNodes: c,
        changedEdges: f,
        get: r,
        set: e
      });
    },
    addSelectedEdges: (o) => {
      const { multiSelectionActive: s, edges: l, getNodes: u } = r();
      let c, f = null;
      s ? c = o.map((m) => pr(m, true)) : (c = Co(l, o), f = Co(u(), [])), vl({
        changedNodes: f,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    unselectNodesAndEdges: ({ nodes: o, edges: s } = {}) => {
      const { edges: l, getNodes: u } = r(), c = o || u(), f = s || l, m = c.map((g) => (g.selected = false, pr(g.id, false))), h = f.map((g) => pr(g.id, false));
      vl({
        changedNodes: m,
        changedEdges: h,
        get: r,
        set: e
      });
    },
    setMinZoom: (o) => {
      const { d3Zoom: s, maxZoom: l } = r();
      s == null ? void 0 : s.scaleExtent([
        o,
        l
      ]), e({
        minZoom: o
      });
    },
    setMaxZoom: (o) => {
      const { d3Zoom: s, minZoom: l } = r();
      s == null ? void 0 : s.scaleExtent([
        l,
        o
      ]), e({
        maxZoom: o
      });
    },
    setTranslateExtent: (o) => {
      var _a;
      (_a = r().d3Zoom) == null ? void 0 : _a.translateExtent(o), e({
        translateExtent: o
      });
    },
    resetSelectedElements: () => {
      const { edges: o, getNodes: s } = r(), u = s().filter((f) => f.selected).map((f) => pr(f.id, false)), c = o.filter((f) => f.selected).map((f) => pr(f.id, false));
      vl({
        changedNodes: u,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    setNodeExtent: (o) => {
      const { nodeInternals: s } = r();
      s.forEach((l) => {
        l.positionAbsolute = Vc(l.position, o);
      }), e({
        nodeExtent: o,
        nodeInternals: new Map(s)
      });
    },
    panBy: (o) => {
      const { transform: s, width: l, height: u, d3Zoom: c, d3Selection: f, translateExtent: m } = r();
      if (!c || !f || !o.x && !o.y) return false;
      const h = Hn.translate(s[0] + o.x, s[1] + o.y).scale(s[2]), g = [
        [
          0,
          0
        ],
        [
          l,
          u
        ]
      ], y = c == null ? void 0 : c.constrain()(h, g, m);
      return c.transform(f, y), s[0] !== y.x || s[1] !== y.y || s[2] !== y.k;
    },
    cancelConnection: () => e({
      connectionNodeId: fr.connectionNodeId,
      connectionHandleId: fr.connectionHandleId,
      connectionHandleType: fr.connectionHandleType,
      connectionStatus: fr.connectionStatus,
      connectionStartHandle: fr.connectionStartHandle,
      connectionEndHandle: fr.connectionEndHandle
    }),
    reset: () => e({
      ...fr
    })
  }), Object.is), Zc = ({ children: e }) => {
    const r = $.useRef(null);
    return r.current || (r.current = f2()), Q.createElement(Rx, {
      value: r.current
    }, e);
  };
  Zc.displayName = "ReactFlowProvider";
  const Am = ({ children: e }) => $.useContext(Ql) ? Q.createElement(Q.Fragment, null, e) : Q.createElement(Zc, null, e);
  Am.displayName = "ReactFlowWrapper";
  const h2 = {
    input: am,
    default: xc,
    output: cm,
    group: Kc
  }, p2 = {
    default: Fl,
    straight: Yc,
    step: Wc,
    smoothstep: Zl,
    simplebezier: Uc
  }, m2 = [
    0,
    0
  ], g2 = [
    15,
    15
  ], y2 = {
    x: 0,
    y: 0,
    zoom: 1
  }, v2 = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    zIndex: 0
  }, Tm = $.forwardRef(({ nodes: e, edges: r, defaultNodes: o, defaultEdges: s, className: l, nodeTypes: u = h2, edgeTypes: c = p2, onNodeClick: f, onEdgeClick: m, onInit: h, onMove: g, onMoveStart: y, onMoveEnd: v, onConnect: x, onConnectStart: E, onConnectEnd: S, onClickConnectStart: _, onClickConnectEnd: N, onNodeMouseEnter: T, onNodeMouseMove: L, onNodeMouseLeave: b, onNodeContextMenu: X, onNodeDoubleClick: O, onNodeDragStart: Z, onNodeDrag: ee, onNodeDragStop: G, onNodesDelete: V, onEdgesDelete: K, onSelectionChange: J, onSelectionDragStart: q, onSelectionDrag: k, onSelectionDragStop: H, onSelectionContextMenu: I, onSelectionStart: W, onSelectionEnd: F, connectionMode: P = Yr.Strict, connectionLineType: B = mr.Bezier, connectionLineStyle: C, connectionLineComponent: z, connectionLineContainerStyle: re, deleteKeyCode: te = "Backspace", selectionKeyCode: le = "Shift", selectionOnDrag: ae = false, selectionMode: he = Di.Full, panActivationKeyCode: me = "Space", multiSelectionKeyCode: ve = Ll() ? "Meta" : "Control", zoomActivationKeyCode: ke = Ll() ? "Meta" : "Control", snapToGrid: Ve = false, snapGrid: Ue = g2, onlyRenderVisibleElements: Ke = false, selectNodesOnDrag: Qe = true, nodesDraggable: Oe, nodesConnectable: ut, nodesFocusable: Me, nodeOrigin: ye = m2, edgesFocusable: qe, edgesUpdatable: yt, elementsSelectable: Ft, defaultViewport: hn = y2, minZoom: _n = 0.5, maxZoom: Bt = 2, translateExtent: Nn = Ec, preventScrolling: pn = true, nodeExtent: qt, defaultMarkerColor: Jt = "#b1b1b7", zoomOnScroll: Mn = true, zoomOnPinch: en = true, panOnScroll: We = false, panOnScrollSpeed: jt = 0.5, panOnScrollMode: mn = jr.Free, zoomOnDoubleClick: gn = true, panOnDrag: Yn = true, onPaneClick: St, onPaneMouseEnter: tn, onPaneMouseMove: Er, onPaneMouseLeave: kr, onPaneScroll: In, onPaneContextMenu: yn, children: bn, onEdgeContextMenu: vn, onEdgeDoubleClick: Wi, onEdgeMouseEnter: Yi, onEdgeMouseMove: Xi, onEdgeMouseLeave: Gi, onEdgeUpdate: Do, onEdgeUpdateStart: Ki, onEdgeUpdateEnd: Cr, onReconnect: Lo, onReconnectStart: _r, onReconnectEnd: ea, reconnectRadius: Nr = 10, edgeUpdaterRadius: Xr = 10, onNodesChange: Gr, onEdgesChange: Oo, noDragClassName: ta = "nodrag", noWheelClassName: na = "nowheel", noPanClassName: Qi = "nopan", fitView: An = false, fitViewOptions: Zi, connectOnClick: qi = true, attributionPosition: ra, proOptions: Ji, defaultEdgeOptions: es, elevateNodesOnSelect: ts = true, elevateEdgesOnSelect: ns = false, disableKeyboardA11y: rs = false, autoPanOnConnect: oa = true, autoPanOnNodeDrag: Be = true, connectionRadius: ia = 20, isValidConnection: Fo, onError: os, style: Kr, id: is, nodeDragThreshold: ss, ...Qr }, Ht) => {
    const Bo = is || "1";
    return Q.createElement("div", {
      ...Qr,
      style: {
        ...Kr,
        ...v2
      },
      ref: Ht,
      className: gt([
        "react-flow",
        l
      ]),
      "data-testid": "rf__wrapper",
      id: is
    }, Q.createElement(Am, null, Q.createElement(d2, {
      onInit: h,
      onMove: g,
      onMoveStart: y,
      onMoveEnd: v,
      onNodeClick: f,
      onEdgeClick: m,
      onNodeMouseEnter: T,
      onNodeMouseMove: L,
      onNodeMouseLeave: b,
      onNodeContextMenu: X,
      onNodeDoubleClick: O,
      nodeTypes: u,
      edgeTypes: c,
      connectionLineType: B,
      connectionLineStyle: C,
      connectionLineComponent: z,
      connectionLineContainerStyle: re,
      selectionKeyCode: le,
      selectionOnDrag: ae,
      selectionMode: he,
      deleteKeyCode: te,
      multiSelectionKeyCode: ve,
      panActivationKeyCode: me,
      zoomActivationKeyCode: ke,
      onlyRenderVisibleElements: Ke,
      selectNodesOnDrag: Qe,
      defaultViewport: hn,
      translateExtent: Nn,
      minZoom: _n,
      maxZoom: Bt,
      preventScrolling: pn,
      zoomOnScroll: Mn,
      zoomOnPinch: en,
      zoomOnDoubleClick: gn,
      panOnScroll: We,
      panOnScrollSpeed: jt,
      panOnScrollMode: mn,
      panOnDrag: Yn,
      onPaneClick: St,
      onPaneMouseEnter: tn,
      onPaneMouseMove: Er,
      onPaneMouseLeave: kr,
      onPaneScroll: In,
      onPaneContextMenu: yn,
      onSelectionContextMenu: I,
      onSelectionStart: W,
      onSelectionEnd: F,
      onEdgeContextMenu: vn,
      onEdgeDoubleClick: Wi,
      onEdgeMouseEnter: Yi,
      onEdgeMouseMove: Xi,
      onEdgeMouseLeave: Gi,
      onReconnect: Lo ?? Do,
      onReconnectStart: _r ?? Ki,
      onReconnectEnd: ea ?? Cr,
      reconnectRadius: Nr ?? Xr,
      defaultMarkerColor: Jt,
      noDragClassName: ta,
      noWheelClassName: na,
      noPanClassName: Qi,
      elevateEdgesOnSelect: ns,
      rfId: Bo,
      disableKeyboardA11y: rs,
      nodeOrigin: ye,
      nodeExtent: qt
    }), Q.createElement(aS, {
      nodes: e,
      edges: r,
      defaultNodes: o,
      defaultEdges: s,
      onConnect: x,
      onConnectStart: E,
      onConnectEnd: S,
      onClickConnectStart: _,
      onClickConnectEnd: N,
      nodesDraggable: Oe,
      nodesConnectable: ut,
      nodesFocusable: Me,
      edgesFocusable: qe,
      edgesUpdatable: yt,
      elementsSelectable: Ft,
      elevateNodesOnSelect: ts,
      minZoom: _n,
      maxZoom: Bt,
      nodeExtent: qt,
      onNodesChange: Gr,
      onEdgesChange: Oo,
      snapToGrid: Ve,
      snapGrid: Ue,
      connectionMode: P,
      translateExtent: Nn,
      connectOnClick: qi,
      defaultEdgeOptions: es,
      fitView: An,
      fitViewOptions: Zi,
      onNodesDelete: V,
      onEdgesDelete: K,
      onNodeDragStart: Z,
      onNodeDrag: ee,
      onNodeDragStop: G,
      onSelectionDrag: k,
      onSelectionDragStart: q,
      onSelectionDragStop: H,
      noPanClassName: Qi,
      nodeOrigin: ye,
      rfId: Bo,
      autoPanOnConnect: oa,
      autoPanOnNodeDrag: Be,
      onError: os,
      connectionRadius: ia,
      isValidConnection: Fo,
      nodeDragThreshold: ss
    }), Q.createElement(sS, {
      onSelectionChange: J
    }), bn, Q.createElement($x, {
      proOptions: Ji,
      position: ra
    }), Q.createElement(hS, {
      rfId: Bo,
      disableKeyboardA11y: rs
    })));
  });
  Tm.displayName = "ReactFlow";
  const w2 = (e) => {
    var _a;
    return (_a = e.domNode) == null ? void 0 : _a.querySelector(".react-flow__edgelabel-renderer");
  };
  function x2({ children: e }) {
    const r = ze(w2);
    return r ? Tx.createPortal(e, r) : null;
  }
  function Rm(e, r) {
    if (Object.is(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    if (e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return false;
      for (const [s, l] of e) if (!Object.is(l, r.get(s))) return false;
      return true;
    }
    if (e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return false;
      for (const s of e) if (!r.has(s)) return false;
      return true;
    }
    const o = Object.keys(e);
    if (o.length !== Object.keys(r).length) return false;
    for (const s of o) if (!Object.prototype.hasOwnProperty.call(r, s) || !Object.is(e[s], r[s])) return false;
    return true;
  }
  const Pm = ({ id: e, x: r, y: o, width: s, height: l, style: u, color: c, strokeColor: f, strokeWidth: m, className: h, borderRadius: g, shapeRendering: y, onClick: v, selected: x }) => {
    const { background: E, backgroundColor: S } = u || {}, _ = c || E || S;
    return Q.createElement("rect", {
      className: gt([
        "react-flow__minimap-node",
        {
          selected: x
        },
        h
      ]),
      x: r,
      y: o,
      rx: g,
      ry: g,
      width: s,
      height: l,
      fill: _,
      stroke: f,
      strokeWidth: m,
      shapeRendering: y,
      onClick: v ? (N) => v(N, e) : void 0
    });
  };
  Pm.displayName = "MiniMapNode";
  var S2 = $.memo(Pm);
  const E2 = (e) => e.nodeOrigin, k2 = (e) => e.getNodes().filter((r) => !r.hidden && r.width && r.height), rc = (e) => e instanceof Function ? e : () => e;
  function C2({ nodeStrokeColor: e = "transparent", nodeColor: r = "#e2e2e2", nodeClassName: o = "", nodeBorderRadius: s = 5, nodeStrokeWidth: l = 2, nodeComponent: u = S2, onClick: c }) {
    const f = ze(k2, Rm), m = ze(E2), h = rc(r), g = rc(e), y = rc(o), v = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
    return Q.createElement(Q.Fragment, null, f.map((x) => {
      const { x: E, y: S } = Vr(x, m).positionAbsolute;
      return Q.createElement(u, {
        key: x.id,
        x: E,
        y: S,
        width: x.width,
        height: x.height,
        style: x.style,
        selected: x.selected,
        className: y(x),
        color: h(x),
        borderRadius: s,
        strokeColor: g(x),
        strokeWidth: l,
        shapeRendering: v,
        onClick: c,
        id: x.id
      });
    }));
  }
  var _2 = $.memo(C2);
  const N2 = 200, M2 = 150, I2 = (e) => {
    const r = e.getNodes(), o = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2]
    };
    return {
      viewBB: o,
      boundingRect: r.length > 0 ? Lx(ql(r, e.nodeOrigin), o) : o,
      rfId: e.rfId
    };
  }, b2 = "react-flow__minimap-desc";
  function $m({ style: e, className: r, nodeStrokeColor: o = "transparent", nodeColor: s = "#e2e2e2", nodeClassName: l = "", nodeBorderRadius: u = 5, nodeStrokeWidth: c = 2, nodeComponent: f, maskColor: m = "rgb(240, 240, 240, 0.6)", maskStrokeColor: h = "none", maskStrokeWidth: g = 1, position: y = "bottom-right", onClick: v, onNodeClick: x, pannable: E = false, zoomable: S = false, ariaLabel: _ = "React Flow mini map", inversePan: N = false, zoomStep: T = 10, offsetScale: L = 5 }) {
    const b = nt(), X = $.useRef(null), { boundingRect: O, viewBB: Z, rfId: ee } = ze(I2, Rm), G = (e == null ? void 0 : e.width) ?? N2, V = (e == null ? void 0 : e.height) ?? M2, K = O.width / G, J = O.height / V, q = Math.max(K, J), k = q * G, H = q * V, I = L * q, W = O.x - (k - O.width) / 2 - I, F = O.y - (H - O.height) / 2 - I, P = k + I * 2, B = H + I * 2, C = `${b2}-${ee}`, z = $.useRef(0);
    z.current = q, $.useEffect(() => {
      if (X.current) {
        const le = Qt(X.current), ae = (ve) => {
          const { transform: ke, d3Selection: Ve, d3Zoom: Ue } = b.getState();
          if (ve.sourceEvent.type !== "wheel" || !Ve || !Ue) return;
          const Ke = -ve.sourceEvent.deltaY * (ve.sourceEvent.deltaMode === 1 ? 0.05 : ve.sourceEvent.deltaMode ? 1 : 2e-3) * T, Qe = ke[2] * Math.pow(2, Ke);
          Ue.scaleTo(Ve, Qe);
        }, he = (ve) => {
          const { transform: ke, d3Selection: Ve, d3Zoom: Ue, translateExtent: Ke, width: Qe, height: Oe } = b.getState();
          if (ve.sourceEvent.type !== "mousemove" || !Ve || !Ue) return;
          const ut = z.current * Math.max(1, ke[2]) * (N ? -1 : 1), Me = {
            x: ke[0] - ve.sourceEvent.movementX * ut,
            y: ke[1] - ve.sourceEvent.movementY * ut
          }, ye = [
            [
              0,
              0
            ],
            [
              Qe,
              Oe
            ]
          ], qe = Hn.translate(Me.x, Me.y).scale(ke[2]), yt = Ue.constrain()(qe, ye, Ke);
          Ue.transform(Ve, yt);
        }, me = B0().on("zoom", E ? he : null).on("zoom.wheel", S ? ae : null);
        return le.call(me), () => {
          le.on("zoom", null);
        };
      }
    }, [
      E,
      S,
      N,
      T
    ]);
    const re = v ? (le) => {
      const ae = cn(le);
      v(le, {
        x: ae[0],
        y: ae[1]
      });
    } : void 0, te = x ? (le, ae) => {
      const he = b.getState().nodeInternals.get(ae);
      x(le, he);
    } : void 0;
    return Q.createElement(jc, {
      position: y,
      style: e,
      className: gt([
        "react-flow__minimap",
        r
      ]),
      "data-testid": "rf__minimap"
    }, Q.createElement("svg", {
      width: G,
      height: V,
      viewBox: `${W} ${F} ${P} ${B}`,
      role: "img",
      "aria-labelledby": C,
      ref: X,
      onClick: re
    }, _ && Q.createElement("title", {
      id: C
    }, _), Q.createElement(_2, {
      onClick: te,
      nodeColor: s,
      nodeStrokeColor: o,
      nodeBorderRadius: u,
      nodeClassName: l,
      nodeStrokeWidth: c,
      nodeComponent: f
    }), Q.createElement("path", {
      className: "react-flow__minimap-mask",
      d: `M${W - I},${F - I}h${P + I * 2}v${B + I * 2}h${-P - I * 2}z
        M${Z.x},${Z.y}h${Z.width}v${Z.height}h${-Z.width}z`,
      fill: m,
      fillRule: "evenodd",
      stroke: h,
      strokeWidth: g,
      pointerEvents: "none"
    })));
  }
  $m.displayName = "MiniMap";
  var A2 = $.memo($m);
  function T2(e, r) {
    if (Object.is(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    if (e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return false;
      for (const [s, l] of e) if (!Object.is(l, r.get(s))) return false;
      return true;
    }
    if (e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return false;
      for (const s of e) if (!r.has(s)) return false;
      return true;
    }
    const o = Object.keys(e);
    if (o.length !== Object.keys(r).length) return false;
    for (const s of o) if (!Object.prototype.hasOwnProperty.call(r, s) || !Object.is(e[s], r[s])) return false;
    return true;
  }
  function R2() {
    return Q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, Q.createElement("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
    }));
  }
  function P2() {
    return Q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5"
    }, Q.createElement("path", {
      d: "M0 0h32v4.2H0z"
    }));
  }
  function $2() {
    return Q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30"
    }, Q.createElement("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
    }));
  }
  function z2() {
    return Q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, Q.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
    }));
  }
  function D2() {
    return Q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, Q.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
    }));
  }
  const bi = ({ children: e, className: r, ...o }) => Q.createElement("button", {
    type: "button",
    className: gt([
      "react-flow__controls-button",
      r
    ]),
    ...o
  }, e);
  bi.displayName = "ControlButton";
  const L2 = (e) => ({
    isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
    minZoomReached: e.transform[2] <= e.minZoom,
    maxZoomReached: e.transform[2] >= e.maxZoom
  }), zm = ({ style: e, showZoom: r = true, showFitView: o = true, showInteractive: s = true, fitViewOptions: l, onZoomIn: u, onZoomOut: c, onFitView: f, onInteractiveChange: m, className: h, children: g, position: y = "bottom-left" }) => {
    const v = nt(), [x, E] = $.useState(false), { isInteractive: S, minZoomReached: _, maxZoomReached: N } = ze(L2, T2), { zoomIn: T, zoomOut: L, fitView: b } = Ui();
    if ($.useEffect(() => {
      E(true);
    }, []), !x) return null;
    const X = () => {
      T(), u == null ? void 0 : u();
    }, O = () => {
      L(), c == null ? void 0 : c();
    }, Z = () => {
      b(l), f == null ? void 0 : f();
    }, ee = () => {
      v.setState({
        nodesDraggable: !S,
        nodesConnectable: !S,
        elementsSelectable: !S
      }), m == null ? void 0 : m(!S);
    };
    return Q.createElement(jc, {
      className: gt([
        "react-flow__controls",
        h
      ]),
      position: y,
      style: e,
      "data-testid": "rf__controls"
    }, r && Q.createElement(Q.Fragment, null, Q.createElement(bi, {
      onClick: X,
      className: "react-flow__controls-zoomin",
      title: "zoom in",
      "aria-label": "zoom in",
      disabled: N
    }, Q.createElement(R2, null)), Q.createElement(bi, {
      onClick: O,
      className: "react-flow__controls-zoomout",
      title: "zoom out",
      "aria-label": "zoom out",
      disabled: _
    }, Q.createElement(P2, null))), o && Q.createElement(bi, {
      className: "react-flow__controls-fitview",
      onClick: Z,
      title: "fit view",
      "aria-label": "fit view"
    }, Q.createElement($2, null)), s && Q.createElement(bi, {
      className: "react-flow__controls-interactive",
      onClick: ee,
      title: "toggle interactivity",
      "aria-label": "toggle interactivity"
    }, S ? Q.createElement(D2, null) : Q.createElement(z2, null)), g);
  };
  zm.displayName = "Controls";
  var O2 = $.memo(zm);
  const Ro = 220, wr = 88, F2 = 340, kc = 160, Po = 280, Oi = 118, $o = 32, yr = 720, B2 = 12, j2 = 6, oc = {
    0: 0,
    1: 400,
    2: 800,
    3: 1200,
    4: 1600,
    5: 2e3,
    6: 2400
  }, H2 = {
    cpu: "CPU",
    bus: "BUS",
    memory: "MEM",
    peripheral: "I/O",
    interface: "PAD",
    clockReset: "CLK",
    custom: "IP",
    dma: "DMA",
    interruptController: "INT",
    debug: "DBG"
  }, V2 = {
    cpu: "CPU",
    bus: "Bus",
    memory: "Memory",
    peripheral: "Peripheral",
    interface: "Interface",
    clockReset: "Clock/Reset",
    custom: "Custom",
    dma: "DMA",
    interruptController: "Interrupt Controller",
    debug: "Debug"
  }, U2 = [
    "cpu",
    "bus",
    "memory",
    "peripheral",
    "interface",
    "clockReset",
    "custom",
    "dma",
    "interruptController",
    "debug"
  ], W2 = 1e3, Y2 = 2e3, Rp = (e) => {
    let r;
    const o = /* @__PURE__ */ new Set(), s = (h, g) => {
      const y = typeof h == "function" ? h(r) : h;
      if (!Object.is(y, r)) {
        const v = r;
        r = g ?? (typeof y != "object" || y === null) ? y : Object.assign({}, r, y), o.forEach((x) => x(r, v));
      }
    }, l = () => r, f = {
      setState: s,
      getState: l,
      getInitialState: () => m,
      subscribe: (h) => (o.add(h), () => o.delete(h))
    }, m = r = e(s, l, f);
    return f;
  }, X2 = ((e) => e ? Rp(e) : Rp), G2 = (e) => e;
  function K2(e, r = G2) {
    const o = Q.useSyncExternalStore(e.subscribe, Q.useCallback(() => r(e.getState()), [
      e,
      r
    ]), Q.useCallback(() => r(e.getInitialState()), [
      e,
      r
    ]));
    return Q.useDebugValue(o), o;
  }
  const Pp = (e) => {
    const r = X2(e), o = (s) => K2(r, s);
    return Object.assign(o, r), o;
  }, Jl = ((e) => e ? Pp(e) : Pp);
  function Q2(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      if (o.data.kind !== "cluster") continue;
      const s = o.data.cluster.hierarchyPath;
      if (s.length <= 1) continue;
      const l = `hierarchy:${s.slice(0, -1).join(":")}`;
      let u = r.get(l);
      u || (u = [], r.set(l, u)), u.push(o.id);
    }
    return r;
  }
  function $p(e, r) {
    const o = [], s = [
      e
    ];
    for (; s.length > 0; ) {
      const l = s.pop(), u = r.get(l);
      if (u) for (const c of u) o.push(c), s.push(c);
    }
    return o;
  }
  const be = Jl((e) => ({
    nodes: [],
    edges: [],
    viewport: {
      x: 0,
      y: 0,
      zoom: 1
    },
    expandedClusterIds: /* @__PURE__ */ new Set(),
    expansionPath: [],
    isLayoutLoading: false,
    childClusterMap: /* @__PURE__ */ new Map(),
    sidebarCollapsed: false,
    setNodes: (r) => e({
      nodes: r,
      childClusterMap: Q2(r)
    }),
    setEdges: (r) => e({
      edges: r
    }),
    updateNodePosition: (r, o) => e((s) => ({
      nodes: s.nodes.map((l) => l.id === r ? {
        ...l,
        position: o
      } : l)
    })),
    setViewport: (r) => e({
      viewport: r
    }),
    toggleCluster: (r) => e((o) => {
      const s = new Set(o.expandedClusterIds), l = [
        ...o.expansionPath
      ];
      if (s.has(r)) {
        s.delete(r);
        const u = l.indexOf(r);
        u !== -1 && l.splice(u);
      } else s.add(r), l.push(r);
      return {
        expandedClusterIds: s,
        expansionPath: l
      };
    }),
    expandClusterForComponent: (r) => e((o) => {
      const s = o.nodes.find((c) => c.data.kind === "cluster" && c.data.cluster.componentIds.includes(r));
      if (!s || o.expandedClusterIds.has(s.id)) return {};
      const l = new Set(o.expandedClusterIds);
      l.add(s.id);
      const u = [
        ...o.expansionPath,
        s.id
      ];
      return {
        expandedClusterIds: l,
        expansionPath: u
      };
    }),
    expandToLevel: (r) => e((o) => {
      const s = new Set(o.expandedClusterIds), l = [
        ...o.expansionPath
      ];
      if (s.has(r)) {
        s.delete(r);
        const u = l.indexOf(r);
        u !== -1 && l.splice(u);
        const c = $p(r, o.childClusterMap);
        for (const f of c) s.delete(f);
      } else s.add(r), l.push(r);
      return {
        expandedClusterIds: s,
        expansionPath: l
      };
    }),
    collapseToLevel: (r) => e((o) => {
      const s = [
        ...o.expansionPath
      ], l = s.indexOf(r);
      if (l === -1) return {};
      const u = s.splice(l), c = new Set(o.expandedClusterIds);
      for (const f of u) {
        c.delete(f);
        const m = $p(f, o.childClusterMap);
        for (const h of m) c.delete(h);
      }
      return {
        expandedClusterIds: c,
        expansionPath: s
      };
    }),
    resetExpansion: () => e({
      expandedClusterIds: /* @__PURE__ */ new Set(),
      expansionPath: []
    }),
    setLayoutLoading: (r) => e({
      isLayoutLoading: r
    }),
    toggleSidebar: () => e((r) => ({
      sidebarCollapsed: !r.sidebarCollapsed
    }))
  }));
  function Dm(e) {
    var _a, _b, _c2, _d;
    const r = new Map(e.components.map((u) => [
      u.id,
      u
    ])), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
    for (const u of e.components) o.set(u.id, []), s.set(u.id, []), l.set(u.id, []);
    for (const u of e.connections) (_a = s.get(u.sourceComponentId)) == null ? void 0 : _a.push(u), (_b = o.get(u.targetComponentId)) == null ? void 0 : _b.push(u), (_c2 = l.get(u.sourceComponentId)) == null ? void 0 : _c2.push(u.id), (_d = l.get(u.targetComponentId)) == null ? void 0 : _d.push(u.id);
    return {
      componentById: r,
      incomingByComponentId: o,
      outgoingByComponentId: s,
      edgeIdsByComponentId: l
    };
  }
  const zp = Dm({
    components: [],
    connections: []
  }), Dp = [], Lt = Jl((e, r) => ({
    model: null,
    ...zp,
    loadModel: (o) => e({
      model: o,
      ...Dm(o)
    }),
    clearModel: () => e({
      model: null,
      ...zp
    }),
    getComponent: (o) => r().componentById.get(o),
    getIncoming: (o) => r().incomingByComponentId.get(o) ?? Dp,
    getOutgoing: (o) => r().outgoingByComponentId.get(o) ?? Dp
  }));
  function ic() {
    return {
      highlightedNodeIds: /* @__PURE__ */ new Set(),
      highlightedEdgeIds: /* @__PURE__ */ new Set(),
      selectedNodeIds: /* @__PURE__ */ new Set()
    };
  }
  function Z2(e) {
    var _a;
    const r = Lt.getState(), o = new Set(e), s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = [
      ...o
    ], c = u[u.length - 1] ?? null;
    if (o.size === 0) return {
      selectedNodeId: null,
      selectedNodeIds: o,
      highlightedNodeIds: s,
      highlightedEdgeIds: l
    };
    if (o.size === 1) {
      const [f] = o;
      if (f) {
        s.add(f);
        for (const m of r.getIncoming(f)) s.add(m.sourceComponentId), l.add(m.id);
        for (const m of r.getOutgoing(f)) s.add(m.targetComponentId), l.add(m.id);
        return {
          selectedNodeId: f,
          selectedNodeIds: o,
          highlightedNodeIds: s,
          highlightedEdgeIds: l
        };
      }
    }
    for (const f of o) s.add(f);
    for (const f of ((_a = r.model) == null ? void 0 : _a.connections) ?? []) o.has(f.sourceComponentId) && o.has(f.targetComponentId) && l.add(f.id);
    return {
      selectedNodeId: c,
      selectedNodeIds: o,
      highlightedNodeIds: s,
      highlightedEdgeIds: l
    };
  }
  const Te = Jl((e) => ({
    selectedNodeId: null,
    expandedNodeId: null,
    searchQuery: "",
    ...ic(),
    selectNode: (r, o) => {
      const l = Lt.getState().model;
      if (!r || !l) {
        be.setState({
          sidebarCollapsed: true
        }), e({
          selectedNodeId: null,
          ...ic()
        });
        return;
      }
      be.setState({
        sidebarCollapsed: false
      });
      const u = new Set(Te.getState().selectedNodeIds);
      (o == null ? void 0 : o.additive) ?? false ? u.has(r) ? u.delete(r) : u.add(r) : (u.clear(), u.add(r));
      const f = Z2(u);
      e(f);
    },
    clearSelection: () => {
      be.setState({
        sidebarCollapsed: true
      }), e({
        selectedNodeId: null,
        ...ic()
      });
    },
    expandNode: (r) => e((o) => ({
      expandedNodeId: o.expandedNodeId === r ? null : r
    })),
    setSearchQuery: (r) => e({
      searchQuery: r
    })
  })), q2 = 1.35;
  function qc() {
    const e = Ui(), r = Te((s) => s.selectNode), o = be((s) => s.expandClusterForComponent);
    return $.useCallback((s) => {
      r(s), o(s);
      const l = () => {
        const u = e.getNode(s);
        if (!u) return;
        const c = u.width ?? Ro, f = u.height ?? wr;
        e.setCenter(u.position.x + c / 2, u.position.y + f / 2, {
          duration: 420,
          zoom: q2
        });
      };
      window.requestAnimationFrame(() => {
        l(), window.setTimeout(l, 520);
      });
    }, [
      o,
      e,
      r
    ]);
  }
  function J2() {
    if (typeof window > "u") return "dark";
    const e = localStorage.getItem("ip-xact-theme");
    return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  const mt = Jl((e, r) => ({
    theme: J2(),
    nonInteractiveThreshold: 5e3,
    setTheme: (o) => {
      localStorage.setItem("ip-xact-theme", o), e({
        theme: o
      });
    },
    toggleTheme: () => {
      const o = r().theme === "dark" ? "light" : "dark";
      localStorage.setItem("ip-xact-theme", o), e({
        theme: o
      });
    },
    setNonInteractiveThreshold: (o) => e({
      nonInteractiveThreshold: o
    })
  })), pt = {
    cpu: {
      base: "#2563eb",
      border: "#60a5fa",
      glow: "rgba(37, 99, 235, 0.38)",
      text: "#dbeafe"
    },
    bus: {
      base: "#7c3aed",
      border: "#a78bfa",
      glow: "rgba(124, 58, 237, 0.36)",
      text: "#ede9fe"
    },
    memory: {
      base: "#16a34a",
      border: "#4ade80",
      glow: "rgba(22, 163, 74, 0.34)",
      text: "#dcfce7"
    },
    peripheral: {
      base: "#ea580c",
      border: "#fb923c",
      glow: "rgba(234, 88, 12, 0.32)",
      text: "#ffedd5"
    },
    interface: {
      base: "#0891b2",
      border: "#22d3ee",
      glow: "rgba(8, 145, 178, 0.34)",
      text: "#cffafe"
    },
    clockReset: {
      base: "#dc2626",
      border: "#f87171",
      glow: "rgba(220, 38, 38, 0.34)",
      text: "#fee2e2"
    },
    custom: {
      base: "#64748b",
      border: "#94a3b8",
      glow: "rgba(100, 116, 139, 0.34)",
      text: "#f1f5f9"
    },
    dma: {
      base: "#0d9488",
      border: "#2dd4bf",
      glow: "rgba(13, 148, 136, 0.34)",
      text: "#ccfbf1"
    },
    interruptController: {
      base: "#c026d3",
      border: "#e879f9",
      glow: "rgba(192, 38, 211, 0.34)",
      text: "#f5d0fe"
    },
    debug: {
      base: "#475569",
      border: "#94a3b8",
      glow: "rgba(71, 85, 105, 0.34)",
      text: "#e2e8f0"
    }
  }, Vn = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', eE = '"SF Mono", "Cascadia Code", "Fira Code", Consolas, monospace', Lp = {
    in: "#22c55e",
    out: "#3b82f6",
    inout: "#eab308"
  }, xl = 3, Bn = 6;
  function tE(e, r, o, s, l, u, c = true) {
    const { width: f, height: m } = e.canvas;
    e.clearRect(0, 0, f, m);
    const h = -s.x / s.zoom, g = -s.y / s.zoom, y = h + f / s.zoom, v = g + m / s.zoom, x = [];
    for (const S of r) {
      const _ = Ml(S), N = Il(S), T = S.position.x + _, L = S.position.y + N;
      S.position.x < y && T > h && S.position.y < v && L > g && x.push(S);
    }
    const E = new Map(x.map((S) => [
      S.id,
      S
    ]));
    e.save(), e.translate(s.x, s.y), e.scale(s.zoom, s.zoom);
    for (const S of o) {
      const _ = E.get(S.source), N = E.get(S.target);
      if (!_ || !N) continue;
      const T = _.position.x + Ml(_) / 2, L = _.position.y + Il(_) / 2, b = N.position.x + Ml(N) / 2, X = N.position.y + Il(N) / 2, O = u.has(S.id);
      e.beginPath(), e.moveTo(T, L), e.lineTo(b, X), e.strokeStyle = O ? "#22d3ee" : c ? "#64748b" : "#94a3b8", e.lineWidth = O ? 2 : 1.5, e.globalAlpha = O ? 0.9 : c ? 0.4 : 0.5, e.stroke(), O && nE(e, T, L, b, X);
    }
    e.globalAlpha = 1;
    for (const S of x) rE(e, S, s.zoom, l.has(S.id), c);
    e.restore(), e.fillStyle = c ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 252, 249, 0.9)", e.fillRect(8, m - 32, 180, 24), e.fillStyle = c ? "#94a3b8" : "#64748b", e.font = `12px ${Vn}`, e.fillText(`${x.length} / ${r.length} nodes visible`, 16, m - 14);
  }
  function nE(e, r, o, s, l, u) {
    const c = Math.atan2(l - o, s - r), f = 8;
    e.beginPath(), e.moveTo(s, l), e.lineTo(s - f * Math.cos(c - Math.PI / 6), l - f * Math.sin(c - Math.PI / 6)), e.moveTo(s, l), e.lineTo(s - f * Math.cos(c + Math.PI / 6), l - f * Math.sin(c + Math.PI / 6)), e.strokeStyle = "#22d3ee", e.lineWidth = 2, e.globalAlpha = 0.9, e.stroke();
  }
  function rE(e, r, o, s, l) {
    const u = r.position.x, c = r.position.y, f = Ml(r), m = Il(r);
    if (r.data.kind === "busChannel") {
      sE(e, u, c, f, m, r, o, l);
      return;
    }
    if (r.data.kind === "cluster") {
      iE(e, u, c, f, m, r, o, s);
      return;
    }
    const h = r.data, g = pt[h.component.type];
    e.shadowColor = "rgba(0, 0, 0, 0.15)", e.shadowBlur = 8, e.shadowOffsetY = 2, e.fillStyle = g.base, e.strokeStyle = s ? "#ffffff" : g.border, e.lineWidth = s ? 2 : 1, Jc(e, u, c, f, m, 12), e.fill(), e.shadowColor = "transparent";
    const y = Math.min(Math.max(24, 40 * o), 32), v = u + 16, x = c + (m - y) / 2;
    e.fillStyle = `${g.border}20`, e.strokeStyle = `${g.border}60`, e.lineWidth = 1, e.beginPath(), e.roundRect(v, x, y, y, 6), e.fill(), e.stroke(), e.fillStyle = g.text, e.font = `bold ${Math.max(8, 10)}px ${Vn}`, e.textAlign = "center", e.textBaseline = "middle";
    const E = h.component.type.slice(0, 3).toUpperCase();
    e.fillText(E, v + y / 2, x + y / 2), e.fillStyle = "#ffffff", e.font = `600 ${Math.max(10, 13)}px ${Vn}`, e.textAlign = "left", e.textBaseline = "top";
    const S = v + y + 8, _ = f - (S - u) - 8;
    e.save(), e.beginPath(), e.rect(u, c, f, m), e.clip(), e.fillText(Bl(e, h.component.name, _), S, c + 14), e.fillStyle = "rgba(255, 255, 255, 0.6)", e.font = `${Math.max(8, 10)}px ${eE}`, e.fillText(Bl(e, h.component.id, _), S, c + 30), e.restore(), oE(e, h.component.ports, u, c, f, m), e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function oE(e, r, o, s, l, u, c) {
    if (!r || r.length === 0) return;
    const f = r.filter((S) => S.direction === "in"), m = r.filter((S) => S.direction === "out"), h = r.filter((S) => S.direction === "inout"), g = [
      ...f,
      ...h
    ], y = [
      ...m
    ], v = Math.min(Math.max(g.length, y.length), Bn), x = Math.min(14, (u - 16) / Math.max(v, 1)), E = s + (u - (v - 1) * x) / 2;
    for (let S = 0; S < Math.min(g.length, Bn); S++) {
      const _ = g[S];
      if (!_) continue;
      const N = E + S * x;
      e.beginPath(), e.arc(o + l + xl + 1, N, xl, 0, Math.PI * 2), e.fillStyle = Lp[_.direction], e.fill();
    }
    g.length > Bn && (e.fillStyle = "#94a3b8", e.font = `bold ${Math.max(7, 8)}px ${Vn}`, e.textAlign = "left", e.textBaseline = "middle", e.fillText(`+${g.length - Bn}`, o + l + 8, E + Bn * x));
    for (let S = 0; S < Math.min(y.length, Bn); S++) {
      const _ = y[S];
      if (!_) continue;
      const N = E + S * x;
      e.beginPath(), e.arc(o - xl - 1, N, xl, 0, Math.PI * 2), e.fillStyle = Lp[_.direction], e.fill();
    }
    y.length > Bn && (e.fillStyle = "#94a3b8", e.font = `bold ${Math.max(7, 8)}px ${Vn}`, e.textAlign = "right", e.textBaseline = "middle", e.fillText(`+${y.length - Bn}`, o - 8, E + Bn * x));
  }
  function iE(e, r, o, s, l, u, c, f, m) {
    if (u.data.kind !== "cluster") return;
    const h = u.data.cluster, g = Object.keys(h.typeBreakdown ?? {})[0], y = g ? pt[g] : pt.custom;
    if (e.shadowColor = "rgba(0, 0, 0, 0.1)", e.shadowBlur = 6, e.shadowOffsetY = 2, e.fillStyle = y.base, e.strokeStyle = f ? "#ffffff" : y.border, e.lineWidth = f ? 2 : 1, Jc(e, r, o, s, l, 12), e.fill(), e.shadowColor = "transparent", e.fillStyle = "#ffffff", e.font = `600 ${Math.max(10, 13)}px ${Vn}`, e.textAlign = "left", e.textBaseline = "top", e.fillText(Bl(e, h.name, s - 20), r + 16, o + 14), e.fillStyle = "rgba(255, 255, 255, 0.6)", e.font = `${Math.max(8, 11)}px ${Vn}`, e.fillText(`${h.componentCount} blocks`, r + 16, o + 34), h.typeBreakdown) {
      const v = Object.entries(h.typeBreakdown), x = o + 52;
      let E = r + 16;
      for (const [S, _] of v.slice(0, 3)) {
        const N = `${S}:${_}`, T = e.measureText(N).width + 12;
        e.fillStyle = "rgba(255, 255, 255, 0.15)", e.beginPath(), e.roundRect(E, x, T, 16, 4), e.fill(), e.fillStyle = "rgba(255, 255, 255, 0.7)", e.font = `${Math.max(7, 9)}px ${Vn}`, e.fillText(N, E + 6, x + 3), E += T + 4;
      }
    }
    e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function sE(e, r, o, s, l, u, c, f) {
    if (u.data.kind !== "busChannel") return;
    const m = u.data, h = pt[m.component.type];
    e.fillStyle = f ? `${h.base}30` : `${h.base}35`, e.strokeStyle = f ? `${h.base}60` : `${h.base}80`, e.lineWidth = 1, Jc(e, r, o, s, l, 4), e.fill(), e.stroke(), e.fillStyle = h.base, e.fillRect(r + 2, o, s - 4, 2), e.fillRect(r + 2, o + l - 2, s - 4, 2), e.save(), e.translate(r + s / 2, o + l / 2), e.rotate(-Math.PI / 2), e.fillStyle = f ? h.text : h.border, e.font = `600 ${Math.max(8, 10)}px ${Vn}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText(Bl(e, m.component.name, l - 8), 0, 0), e.restore();
  }
  function Ml(e) {
    return e.data.kind === "busChannel" ? $o : e.data.kind === "cluster" ? Po : Ro;
  }
  function Il(e) {
    return e.data.kind === "busChannel" ? yr : e.data.kind === "cluster" ? Oi : wr;
  }
  function Jc(e, r, o, s, l, u) {
    e.beginPath(), e.moveTo(r + u, o), e.lineTo(r + s - u, o), e.quadraticCurveTo(r + s, o, r + s, o + u), e.lineTo(r + s, o + l - u), e.quadraticCurveTo(r + s, o + l, r + s - u, o + l), e.lineTo(r + u, o + l), e.quadraticCurveTo(r, o + l, r, o + l - u), e.lineTo(r, o + u), e.quadraticCurveTo(r, o, r + u, o), e.closePath();
  }
  function Bl(e, r, o) {
    if (e.measureText(r).width <= o) return r;
    let s = r;
    for (; s.length > 0 && e.measureText(s + "...").width > o; ) s = s.slice(0, -1);
    return s + "...";
  }
  function lE({ width: e, height: r }) {
    const o = $.useRef(null), s = be((V) => V.nodes), l = be((V) => V.edges), u = Te((V) => V.selectNode), c = Te((V) => V.clearSelection), f = Te((V) => V.selectedNodeIds), m = Te((V) => V.highlightedEdgeIds), g = mt((V) => V.theme) === "dark", [y, v] = $.useState({
      x: 0,
      y: 0,
      zoom: 0.1
    }), [x, E] = $.useState(false), [S, _] = $.useState({
      x: 0,
      y: 0
    }), [N, T] = $.useState({
      x: 0,
      y: 0
    }), L = $.useCallback(() => {
      if (s.length === 0 || e === 0 || r === 0) return;
      let V = 1 / 0, K = 1 / 0, J = -1 / 0, q = -1 / 0;
      for (const z of s) {
        const re = z.data.kind === "busChannel" ? $o : z.data.kind === "cluster" ? Po : Ro, te = z.data.kind === "busChannel" ? yr : z.data.kind === "cluster" ? Oi : wr;
        V = Math.min(V, z.position.x), K = Math.min(K, z.position.y), J = Math.max(J, z.position.x + re), q = Math.max(q, z.position.y + te);
      }
      const k = J - V, H = q - K, I = 100, W = (e - I * 2) / k, F = (r - I * 2) / H, P = Math.min(W, F, 0.3), B = (V + J) / 2, C = (K + q) / 2;
      v({
        x: e / 2 - B * P,
        y: r / 2 - C * P,
        zoom: P
      });
    }, [
      r,
      s,
      e
    ]), b = $.useCallback((V) => {
      v((K) => {
        const J = Math.max(0.02, Math.min(1, K.zoom * V)), q = e / 2, k = r / 2, H = (q - K.x) / K.zoom, I = (k - K.y) / K.zoom;
        return {
          x: q - H * J,
          y: k - I * J,
          zoom: J
        };
      });
    }, [
      r,
      e
    ]);
    $c({
      onZoomIn: () => b(1.2),
      onZoomOut: () => b(1 / 1.2),
      onFitView: L
    }, s.length > 0), $.useEffect(() => {
      L();
    }, [
      L
    ]), $.useEffect(() => {
      const V = o.current;
      if (!V) return;
      const K = V.getContext("2d");
      if (!K) return;
      const J = window.devicePixelRatio || 1;
      V.width = e * J, V.height = r * J, K.scale(J, J), tE(K, s, l, {
        ...y
      }, f, m, g);
    }, [
      s,
      l,
      y,
      e,
      r,
      f,
      m,
      g
    ]);
    const X = $.useCallback((V) => {
      E(true), _({
        x: V.clientX,
        y: V.clientY
      }), T({
        x: y.x,
        y: y.y
      });
    }, [
      y
    ]), O = $.useCallback((V) => {
      if (!x) return;
      const K = V.clientX - S.x, J = V.clientY - S.y;
      v((q) => ({
        ...q,
        x: N.x + K,
        y: N.y + J
      }));
    }, [
      x,
      S,
      N
    ]), Z = $.useCallback(() => {
      E(false);
    }, []), ee = $.useCallback((V) => {
      var _a;
      V.preventDefault();
      const K = V.deltaY > 0 ? 0.9 : 1.1, J = Math.max(0.02, Math.min(1, y.zoom * K)), q = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!q) return;
      const k = V.clientX - q.left, H = V.clientY - q.top, I = (k - y.x) / y.zoom, W = (H - y.y) / y.zoom;
      v({
        x: k - I * J,
        y: H - W * J,
        zoom: J
      });
    }, [
      y
    ]), G = $.useCallback((V) => {
      var _a;
      if (x) return;
      const K = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!K) return;
      const J = V.clientX - K.left, q = V.clientY - K.top, k = (J - y.x) / y.zoom, H = (q - y.y) / y.zoom;
      for (const I of s) {
        const W = I.data.kind === "busChannel" ? $o : I.data.kind === "cluster" ? Po : Ro, F = I.data.kind === "busChannel" ? yr : I.data.kind === "cluster" ? Oi : wr;
        if (k >= I.position.x && k <= I.position.x + W && H >= I.position.y && H <= I.position.y + F) {
          I.data.kind === "component" ? u(I.id, {
            additive: V.ctrlKey || V.metaKey || V.shiftKey
          }) : c();
          return;
        }
      }
      V.ctrlKey || V.metaKey || V.shiftKey || c();
    }, [
      c,
      x,
      y,
      s,
      u
    ]);
    return A.jsx("canvas", {
      ref: o,
      style: {
        width: e,
        height: r,
        cursor: x ? "grabbing" : "grab"
      },
      onMouseDown: X,
      onMouseMove: O,
      onMouseUp: Z,
      onMouseLeave: Z,
      onWheel: ee,
      onClick: G
    });
  }
  function aE({ x: e, y: r, width: o = 220, height: s = 88, delay: l = 0 }) {
    return A.jsx("div", {
      className: "absolute animate-pulse rounded-xl border border-white/5 bg-gradient-to-br from-shell-800/50 to-shell-950/50",
      style: {
        left: e,
        top: r,
        width: o,
        height: s,
        animationDelay: `${l}ms`,
        animationDuration: "1.5s"
      },
      children: A.jsxs("div", {
        className: "flex h-full",
        children: [
          A.jsx("div", {
            className: "w-1.5 shrink-0 rounded-l-xl bg-white/5"
          }),
          A.jsxs("div", {
            className: "flex-1 p-3.5",
            children: [
              A.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  A.jsx("div", {
                    className: "h-10 w-10 shrink-0 rounded-md bg-white/5"
                  }),
                  A.jsxs("div", {
                    className: "flex-1",
                    children: [
                      A.jsx("div", {
                        className: "h-4 w-24 rounded bg-white/5"
                      }),
                      A.jsx("div", {
                        className: "mt-1 h-3 w-16 rounded bg-white/5"
                      })
                    ]
                  })
                ]
              }),
              A.jsxs("div", {
                className: "mt-3 grid grid-cols-2 gap-2",
                children: [
                  A.jsx("div", {
                    className: "h-6 rounded bg-white/5"
                  }),
                  A.jsx("div", {
                    className: "h-6 rounded bg-white/5"
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  const uE = $.memo(aE);
  function cE({ x1: e, y1: r, x2: o, y2: s, delay: l = 0 }) {
    const u = (e + o) / 2, c = `M ${e} ${r} L ${u} ${r} L ${u} ${s} L ${o} ${s}`;
    return A.jsx("path", {
      d: c,
      fill: "none",
      stroke: "rgba(255,255,255,0.05)",
      strokeWidth: "1.5",
      strokeDasharray: "4 4",
      className: "animate-pulse",
      style: {
        animationDelay: `${l}ms`,
        animationDuration: "1.5s"
      }
    });
  }
  const dE = $.memo(cE);
  function Op() {
    const e = [
      {
        x: 80,
        y: 60
      },
      {
        x: 80,
        y: 200
      },
      {
        x: 80,
        y: 340
      },
      {
        x: 400,
        y: 130
      },
      {
        x: 400,
        y: 270
      },
      {
        x: 720,
        y: 60
      },
      {
        x: 720,
        y: 200
      },
      {
        x: 720,
        y: 340
      }
    ], r = [
      {
        x1: 300,
        y1: 104,
        x2: 400,
        y2: 174
      },
      {
        x1: 300,
        y1: 244,
        x2: 400,
        y2: 244
      },
      {
        x1: 300,
        y1: 384,
        x2: 400,
        y2: 314
      },
      {
        x1: 620,
        y1: 174,
        x2: 720,
        y2: 104
      },
      {
        x1: 620,
        y1: 244,
        x2: 720,
        y2: 244
      },
      {
        x1: 620,
        y1: 314,
        x2: 720,
        y2: 384
      }
    ];
    return A.jsx("div", {
      className: "absolute inset-0 flex items-center justify-center bg-shell-950/80 backdrop-blur-sm",
      children: A.jsxs("div", {
        className: "relative h-[480px] w-[960px]",
        children: [
          A.jsx("svg", {
            className: "absolute inset-0 h-full w-full",
            children: r.map((o, s) => A.jsx(dE, {
              ...o,
              delay: s * 100
            }, s))
          }),
          e.map((o, s) => A.jsx(uE, {
            ...o,
            delay: s * 100
          }, s)),
          A.jsx("div", {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-center",
            children: A.jsxs("div", {
              className: "flex items-center gap-3 text-sm text-slate-400",
              children: [
                A.jsxs("svg", {
                  className: "h-5 w-5 animate-spin",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    A.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4"
                    }),
                    A.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    })
                  ]
                }),
                A.jsx("span", {
                  children: "Building architecture diagram..."
                })
              ]
            })
          })
        ]
      })
    });
  }
  function fE() {
    const r = mt((o) => o.theme) === "dark";
    return A.jsx(A2, {
      className: `!border !shadow-lg ${r ? "!border-white/10 !bg-shell-950/90" : "!border-[#d6cfc4] !bg-[#f5f0e8]/95"}`,
      maskColor: r ? "rgba(2, 6, 23, 0.58)" : "rgba(6, 8, 13, 0.12)",
      nodeBorderRadius: 8,
      nodeColor: r ? "#334155" : "#94a3b8",
      pannable: true,
      zoomable: true
    });
  }
  const hE = {
    bus: {
      color: "#a78bfa",
      width: 4,
      opacity: 0.72
    },
    interrupt: {
      color: "#f472b6",
      width: 3,
      dash: "6 4",
      opacity: 0.66
    },
    dma: {
      color: "#2dd4bf",
      width: 3.5,
      opacity: 0.66
    },
    clock: {
      color: "#f87171",
      width: 2.5,
      opacity: 0.58
    },
    reset: {
      color: "#fb923c",
      width: 2.5,
      dash: "3 3",
      opacity: 0.58
    },
    debug: {
      color: "#94a3b8",
      width: 2,
      dash: "2 4",
      opacity: 0.54
    },
    data: {
      color: "#4ade80",
      width: 3,
      opacity: 0.62
    },
    control: {
      color: "#facc15",
      width: 2.5,
      dash: "4 2",
      opacity: 0.58
    },
    unknown: {
      color: "#64748b",
      width: 2,
      opacity: 0.46
    }
  }, pE = {
    bus: {
      color: "#7c3aed",
      width: 4,
      opacity: 0.82
    },
    interrupt: {
      color: "#db2777",
      width: 3,
      dash: "6 4",
      opacity: 0.76
    },
    dma: {
      color: "#0d9488",
      width: 3.5,
      opacity: 0.76
    },
    clock: {
      color: "#dc2626",
      width: 2.5,
      opacity: 0.68
    },
    reset: {
      color: "#ea580c",
      width: 2.5,
      dash: "3 3",
      opacity: 0.68
    },
    debug: {
      color: "#475569",
      width: 2,
      dash: "2 4",
      opacity: 0.62
    },
    data: {
      color: "#16a34a",
      width: 3,
      opacity: 0.72
    },
    control: {
      color: "#ca8a04",
      width: 2.5,
      dash: "4 2",
      opacity: 0.68
    },
    unknown: {
      color: "#334155",
      width: 2,
      opacity: 0.56
    }
  };
  function mE(e, r) {
    const o = r ? hE : pE;
    return o[e ?? "unknown"] ?? o.unknown;
  }
  function gE(e, r, o, s, l) {
    if (r) return {
      stroke: l ? "#67e8f9" : "#0369a1",
      strokeWidth: 4,
      opacity: 0.96,
      strokeDasharray: "7 5"
    };
    if (o) return {
      stroke: l ? "#64748b" : "#94a3b8",
      strokeWidth: 1.5,
      opacity: 0.15
    };
    if (s) return {
      stroke: l ? "#818cf8" : "#6366f1",
      strokeWidth: 2,
      opacity: 0.6,
      strokeDasharray: "4 3"
    };
    const u = mE(e, l);
    return {
      stroke: u.color,
      strokeWidth: u.width,
      opacity: u.opacity,
      strokeDasharray: u.dash
    };
  }
  function yE({ id: e, sourceX: r, sourceY: o, targetX: s, targetY: l, sourcePosition: u, targetPosition: c, data: f, source: m, target: h }) {
    const g = Te((X) => X.highlightedEdgeIds.has(e)), v = Te((X) => X.selectedNodeIds.size > 0) && !g, E = mt((X) => X.theme) === "dark", S = m.startsWith("hierarchy:") || h.startsWith("hierarchy:"), _ = $.useMemo(() => Ol({
      sourceX: r,
      sourceY: o,
      targetX: s,
      targetY: l,
      sourcePosition: u,
      targetPosition: c,
      borderRadius: 8
    }), [
      r,
      o,
      s,
      l,
      u,
      c
    ]), [N, T, L] = _, b = gE(f == null ? void 0 : f.connectionType, g, v, S, E);
    return A.jsxs(A.Fragment, {
      children: [
        A.jsx(zo, {
          id: e,
          path: N,
          markerEnd: g ? "url(#architecture-arrow)" : void 0,
          style: b
        }),
        g && f ? A.jsx(x2, {
          children: A.jsxs("div", {
            className: `pointer-events-none absolute rounded-lg border px-2.5 py-1.5 text-[10px] shadow-lg ${E ? "border-cyan-300/30 bg-shell-950/95 text-cyan-100" : "border-slate-300 bg-white text-slate-800"}`,
            style: {
              transform: `translate(-50%, -50%) translate(${T}px, ${L}px)`
            },
            children: [
              A.jsxs("div", {
                className: "font-medium",
                children: [
                  f.connection.sourcePortId,
                  " \u2192 ",
                  f.connection.targetPortId
                ]
              }),
              f.connectionType && A.jsx("div", {
                className: `mt-0.5 text-[9px] uppercase tracking-wide ${E ? "text-cyan-300/80" : "text-cyan-700"}`,
                children: f.connectionType
              }),
              f.connectionCount && f.connectionCount > 1 && A.jsxs("span", {
                className: E ? "text-cyan-300" : "text-cyan-600",
                children: [
                  "(",
                  f.connectionCount,
                  "x)"
                ]
              })
            ]
          })
        }) : null
      ]
    });
  }
  const vE = $.memo(yE), wE = {
    architecture: vE
  };
  function Lm(e) {
    var r, o, s = "";
    if (typeof e == "string" || typeof e == "number") s += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var l = e.length;
      for (r = 0; r < l; r++) e[r] && (o = Lm(e[r])) && (s && (s += " "), s += o);
    } else for (o in e) e[o] && (s && (s += " "), s += o);
    return s;
  }
  function jl() {
    for (var e, r, o = 0, s = "", l = arguments.length; o < l; o++) (e = arguments[o]) && (r = Lm(e)) && (s && (s += " "), s += r);
    return s;
  }
  function Om(e) {
    const r = Te((l) => l.selectedNodeIds.has(e)), o = Te((l) => l.expandedNodeId === e), s = Te((l) => l.highlightedNodeIds.size > 0 && !l.highlightedNodeIds.has(e));
    return {
      isSelected: r,
      isExpanded: o,
      isDimmed: s
    };
  }
  const xE = $.memo(function({ name: r, type: o, color: s, expanded: l, depth: u = 0, isExpandable: c, isExpanded: f, onExpand: m }) {
    return A.jsxs("div", {
      className: "flex min-w-0 items-center gap-3",
      children: [
        u > 0 && A.jsx("div", {
          className: "flex shrink-0 items-center gap-0.5",
          children: Array.from({
            length: u
          }, (h, g) => A.jsx("div", {
            className: "h-3 w-0.5 rounded-full bg-white/40"
          }, g))
        }),
        A.jsx("div", {
          className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg border text-[10px] font-black",
          style: {
            borderColor: `${s}60`,
            color: s,
            backgroundColor: `${s}20`
          },
          children: H2[o]
        }),
        A.jsxs("div", {
          className: "min-w-0 flex-1",
          children: [
            A.jsx("div", {
              className: "truncate text-sm font-semibold text-white",
              children: r
            }),
            l ? A.jsx("div", {
              className: "mt-0.5 text-[11px] uppercase text-white/50",
              children: "Component"
            }) : null
          ]
        }),
        c && A.jsx("button", {
          className: "shrink-0 rounded-lg p-1.5 transition text-white/60 hover:bg-white/10 hover:text-white",
          onClick: (h) => {
            h.stopPropagation(), m == null ? void 0 : m();
          },
          children: A.jsx("svg", {
            className: `h-4 w-4 transition-transform ${f ? "rotate-90" : ""}`,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: A.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 5l7 7-7 7"
            })
          })
        })
      ]
    });
  });
  function SE({ id: e, data: r }) {
    var _a;
    if (r.kind === "busChannel") return null;
    const o = r.kind === "cluster", s = o ? r.cluster.name : r.component.name, l = o ? r.cluster.type : r.component.type, u = pt[l], { isSelected: c, isDimmed: f } = Om(e), m = be((S) => S.expandToLevel), h = be((S) => S.expansionPath), g = o && h.includes(r.cluster.id), y = o ? r.cluster.depth : 0, v = o && (r.cluster.depth < 2 || r.cluster.componentCount > 6), x = o && y > 1 ? (_a = h[h.indexOf(r.cluster.id) - 1]) == null ? void 0 : _a.replace("hierarchy:", "").replace(/:/g, " > ") : null, E = o && r.cluster.componentCount > 6 ? r.cluster.componentCount : 0;
    return A.jsxs("div", {
      className: jl("architecture-node group overflow-hidden rounded-xl shadow-node transition duration-150", o ? "w-[280px]" : "w-[220px]", "hover:-translate-y-0.5 hover:shadow-glow", c && "ring-2 ring-white", f && "opacity-30 grayscale"),
      style: {
        backgroundColor: u.base,
        borderColor: c ? "#ffffff" : u.border,
        borderWidth: "2px",
        borderStyle: "solid",
        "--node-glow": u.glow
      },
      children: [
        !o && A.jsxs(A.Fragment, {
          children: [
            A.jsx(vr, {
              className: "!h-3 !w-1 !rounded-full !border-0 !bg-white/60 hover:!bg-white",
              id: `left:${e}`,
              type: "target",
              position: ge.Left,
              style: {
                top: "50%"
              }
            }),
            A.jsx(vr, {
              className: "!h-3 !w-1 !rounded-full !border-0 !bg-white/60 hover:!bg-white",
              id: `right:${e}`,
              type: "source",
              position: ge.Right,
              style: {
                top: "50%"
              }
            })
          ]
        }),
        A.jsxs("div", {
          className: "rounded-lg m-1.5 p-3 bg-black/15 backdrop-blur-sm",
          children: [
            A.jsx(xE, {
              name: s,
              type: l,
              color: u.text,
              expanded: false,
              depth: y,
              isExpandable: v,
              isExpanded: g,
              onExpand: () => o && m(r.cluster.id)
            }),
            o ? A.jsxs(A.Fragment, {
              children: [
                x && A.jsxs("div", {
                  className: "mt-1 flex items-center gap-1 text-[10px] text-white/60",
                  children: [
                    A.jsx("svg", {
                      className: "h-3 w-3",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      children: A.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M9 5l7 7-7 7"
                      })
                    }),
                    A.jsx("span", {
                      children: x
                    })
                  ]
                }),
                A.jsxs("div", {
                  className: "architecture-node__meta mt-3 flex items-center gap-2 text-[11px] text-white/70",
                  children: [
                    A.jsxs("span", {
                      className: "rounded px-2 py-1 font-medium bg-white/10",
                      children: [
                        r.cluster.componentCount,
                        " blocks"
                      ]
                    }),
                    E > 0 && A.jsx("span", {
                      className: "rounded px-2 py-1 font-medium bg-white/15 text-white",
                      children: "click to expand"
                    })
                  ]
                }),
                r.cluster.typeBreakdown && Object.keys(r.cluster.typeBreakdown).length > 1 && A.jsx("div", {
                  className: "mt-2 flex flex-wrap gap-1",
                  children: Object.entries(r.cluster.typeBreakdown).map(([S, _]) => A.jsxs("span", {
                    className: "rounded px-1.5 py-0.5 text-[9px] font-medium bg-white/10 text-white/70",
                    children: [
                      S,
                      ": ",
                      _
                    ]
                  }, S))
                })
              ]
            }) : null
          ]
        })
      ]
    });
  }
  const EE = $.memo(SE, (e, r) => e.data.kind === "busChannel" || r.data.kind === "busChannel" ? false : e.id === r.id && e.selected === r.selected && e.data.kind === r.data.kind && (e.data.kind === "cluster" ? r.data.kind === "cluster" && e.data.cluster.id === r.data.cluster.id && e.data.cluster.componentCount === r.data.cluster.componentCount && e.data.cluster.connectionCount === r.data.cluster.connectionCount && e.data.cluster.depth === r.data.cluster.depth : r.data.kind === "component" && e.data.component.id === r.data.component.id && e.data.component.name === r.data.component.name && e.data.component.type === r.data.component.type)), kE = 32, CE = 720;
  function _E({ id: e, data: r }) {
    if (r.kind !== "busChannel") return null;
    const o = r, s = pt[o.component.type], { isSelected: l, isDimmed: u } = Om(e);
    return A.jsxs("div", {
      className: jl("bus-channel-node group relative transition duration-150", u && "opacity-30 grayscale"),
      style: {
        width: kE,
        height: CE,
        "--bus-color": s.base,
        "--bus-border": s.border,
        "--bus-glow": s.glow
      },
      children: [
        A.jsx(vr, {
          className: "!h-3 !w-1 !rounded-full !border-0 !bg-white/60 hover:!bg-white",
          id: `left:${e}`,
          type: "target",
          position: ge.Left,
          style: {
            top: "50%"
          }
        }),
        A.jsx(vr, {
          className: "!h-3 !w-1 !rounded-full !border-0 !bg-white/60 hover:!bg-white",
          id: `right:${e}`,
          type: "source",
          position: ge.Right,
          style: {
            top: "50%"
          }
        }),
        A.jsxs("div", {
          className: jl("absolute inset-0 rounded-md border-2 transition-all duration-150", l && "ring-2 ring-white shadow-lg"),
          style: {
            backgroundColor: s.base,
            borderColor: l ? "#ffffff" : s.border,
            boxShadow: l ? `0 0 20px ${s.glow}` : "none"
          },
          children: [
            A.jsx("div", {
              className: "absolute left-0 top-0 h-1.5 w-full rounded-t-md",
              style: {
                backgroundColor: s.border
              }
            }),
            A.jsx("div", {
              className: "absolute bottom-0 left-0 h-1.5 w-full rounded-b-md",
              style: {
                backgroundColor: s.border
              }
            }),
            A.jsx("div", {
              className: "absolute left-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: s.border
              }
            }),
            A.jsx("div", {
              className: "absolute right-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: s.border
              }
            }),
            A.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center",
              style: {
                writingMode: "vertical-rl",
                textOrientation: "mixed"
              },
              children: A.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  A.jsx("div", {
                    className: "flex h-6 w-6 shrink-0 items-center justify-center rounded text-[8px] font-black",
                    style: {
                      color: s.text,
                      backgroundColor: `${s.border}30`,
                      border: `2px solid ${s.border}`
                    },
                    children: "BUS"
                  }),
                  A.jsx("span", {
                    className: "text-xs font-bold text-white",
                    children: o.component.name
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  }
  const NE = $.memo(_E, (e, r) => {
    if (e.id !== r.id || e.selected !== r.selected || e.data.kind !== "busChannel" || r.data.kind !== "busChannel") return false;
    const o = e.data, s = r.data;
    return o.component.id === s.component.id && o.component.name === s.component.name && o.component.type === s.component.type && o.layer === s.layer;
  }), ME = {
    architecture: EE,
    busChannel: NE
  }, Fp = 0.035, IE = 2.2, bE = 0.32;
  function AE() {
    const e = be((I) => I.nodes), r = be((I) => I.edges), o = be((I) => I.updateNodePosition), s = be((I) => I.setNodes), l = be((I) => I.setEdges), u = be((I) => I.toggleCluster), c = be((I) => I.isLayoutLoading), f = Te((I) => I.selectNode), m = Te((I) => I.clearSelection), h = qc(), [g, y] = $.useState(false), v = mt((I) => I.nonInteractiveThreshold), E = mt((I) => I.theme) === "dark", S = e.length > v, _ = e.length > Y2;
    $.useRef(null);
    const N = $.useRef(null), [T, L] = $.useState({
      width: 0,
      height: 0
    }), b = Ui(), X = $.useCallback((I) => {
      if (N.current && (N.current.disconnect(), N.current = null), I) {
        const W = new ResizeObserver((F) => {
          for (const P of F) {
            const { width: B, height: C } = P.contentRect;
            L({
              width: B,
              height: C
            });
          }
        });
        W.observe(I), N.current = W;
      }
    }, []);
    $.useEffect(() => () => {
      N.current && N.current.disconnect();
    }, []);
    const O = {
      markerEnd: {
        type: To.ArrowClosed,
        color: E ? "#64748b" : "#1e293b"
      },
      style: {
        stroke: E ? "#64748b" : "#334155",
        strokeWidth: E ? 2 : 2.5
      }
    }, Z = $.useCallback((I) => {
      const W = be.getState().nodes;
      s(vm(I, W));
    }, [
      s
    ]), ee = $.useCallback((I) => {
      const W = be.getState().edges;
      l(MS(I, W));
    }, [
      l
    ]), G = $.useCallback((I, W) => {
      const F = I.ctrlKey || I.metaKey || I.shiftKey;
      W.data.kind === "component" ? f(W.id, F ? {
        additive: true
      } : void 0) : m();
    }, [
      m,
      f
    ]), V = $.useCallback((I, W) => {
      if (I.preventDefault(), W.data.kind === "cluster") {
        u(W.id), f(null);
        return;
      }
      h(W.id);
    }, [
      h,
      f,
      u
    ]), K = $.useCallback((I, W) => {
      o(W.id, W.position);
    }, [
      o
    ]), J = $.useCallback((I, W) => {
      y((F) => {
        const P = W.zoom <= bE;
        return F === P ? F : P;
      });
    }, []), q = $.useCallback(() => {
      b.zoomIn({
        duration: 200
      });
    }, [
      b
    ]), k = $.useCallback(() => {
      b.zoomOut({
        duration: 200
      });
    }, [
      b
    ]), H = $.useCallback(() => {
      b.fitView({
        padding: 0.18,
        duration: 300
      });
    }, [
      b
    ]);
    return $c({
      onZoomIn: q,
      onZoomOut: k,
      onFitView: H
    }, !_ && e.length > 0), _ && T.width > 0 ? A.jsxs("div", {
      ref: X,
      className: "relative h-full w-full",
      children: [
        A.jsx(lE, {
          width: T.width,
          height: T.height
        }),
        c && A.jsx(Op, {}),
        A.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs font-medium ${E ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-slate-300 bg-white/90 text-slate-600 shadow-sm"}`,
          children: [
            "Canvas Mode \u2014 ",
            e.length,
            " nodes"
          ]
        })
      ]
    }) : A.jsxs("div", {
      ref: X,
      className: "relative h-full w-full",
      children: [
        A.jsxs(Tm, {
          className: `${g ? "architecture-flow architecture-flow--overview" : "architecture-flow"}${S ? " architecture-flow--static" : ""}`,
          nodes: e,
          edges: r,
          nodeTypes: ME,
          edgeTypes: wE,
          defaultEdgeOptions: O,
          onNodesChange: S ? void 0 : Z,
          onEdgesChange: S ? void 0 : ee,
          onNodeClick: S ? void 0 : G,
          onNodeDoubleClick: S ? void 0 : V,
          onNodeDragStop: S ? void 0 : K,
          onMove: J,
          onPaneClick: S ? void 0 : () => m(),
          nodesDraggable: !S,
          nodesConnectable: !S,
          elementsSelectable: !S,
          nodesFocusable: !S,
          fitView: true,
          fitViewOptions: {
            padding: 0.18,
            minZoom: Fp,
            maxZoom: 0.9
          },
          onlyRenderVisibleElements: true,
          zoomOnDoubleClick: false,
          minZoom: Fp,
          maxZoom: IE,
          proOptions: {
            hideAttribution: true
          },
          children: [
            A.jsx("svg", {
              children: A.jsx("defs", {
                children: A.jsx("marker", {
                  id: "architecture-arrow",
                  markerHeight: "12",
                  markerWidth: "12",
                  orient: "auto",
                  refX: "10",
                  refY: "6",
                  children: A.jsx("path", {
                    d: "M2,2 L10,6 L2,10 z",
                    fill: E ? "#67e8f9" : "#0891b2"
                  })
                })
              })
            }),
            A.jsx(O2, {
              className: `!border !fill-slate-200 !text-slate-200 ${E ? "!border-white/10 !bg-shell-950/90" : "!border-slate-700 !bg-slate-700/90 !shadow-lg"}`
            }),
            A.jsx(fE, {})
          ]
        }),
        S && A.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs ${E ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-black/10 bg-white/90 text-slate-600"}`,
          children: [
            "Static View \u2014 ",
            e.length,
            " nodes"
          ]
        }),
        c && A.jsx(Op, {})
      ]
    });
  }
  function TE() {
    return A.jsx(AE, {});
  }
  const RE = {
    "ARM Cortex-M4": {
      type: "CPU",
      ports: [
        "clk",
        "rst",
        "irq",
        "nmi",
        "haddr",
        "hwrite",
        "hwdata",
        "hrdata",
        "hsel",
        "hready",
        "hresp",
        "htrans",
        "hburst",
        "jtag_tdi",
        "jtag_tms"
      ],
      registers: [
        "PC",
        "SP",
        "LR",
        "xPSR"
      ]
    },
    "AXI Interconnect": {
      type: "Bus",
      ports: [
        "clk",
        "rst",
        "awaddr",
        "awvalid",
        "awready",
        "wdata",
        "wstrb",
        "wvalid",
        "wready",
        "araddr",
        "arvalid",
        "arready",
        "rdata",
        "rresp",
        "rvalid",
        "rready",
        "bresp",
        "bvalid",
        "bready"
      ],
      registers: []
    },
    "APB Bridge": {
      type: "Bus",
      ports: [
        "clk",
        "rst",
        "paddr",
        "pwrite",
        "pwdata",
        "psel",
        "penable",
        "prdata",
        "pready"
      ],
      registers: []
    },
    "SRAM 256KB": {
      type: "Memory",
      ports: [
        "clk",
        "rst",
        "addr",
        "data_in",
        "data_out",
        "cs",
        "wen",
        "ren"
      ],
      registers: []
    },
    "Flash 1MB": {
      type: "Memory",
      ports: [
        "clk",
        "rst",
        "addr",
        "data_in",
        "data_out",
        "cs",
        "wen",
        "ren"
      ],
      registers: []
    },
    "DMA Controller": {
      type: "DMA",
      ports: [
        "clk",
        "rst",
        "haddr",
        "hwrite",
        "hwdata",
        "hrdata",
        "hsel",
        "hready",
        "hresp",
        "htrans",
        "dma_req",
        "dma_ack",
        "dma_done"
      ],
      registers: [
        "CTRL",
        "STATUS",
        "SRC_ADDR",
        "DST_ADDR",
        "XFER_SIZE"
      ]
    },
    NVIC: {
      type: "InterruptController",
      ports: [
        "clk",
        "rst",
        "irq0",
        "irq1",
        "irq2",
        "irq3",
        "irq4",
        "nirq",
        "nfiq"
      ],
      registers: [
        "ISER0",
        "ICER0",
        "ISPR0",
        "ICPR0",
        "IABR0",
        "IPR0"
      ]
    },
    UART0: {
      type: "Component",
      ports: [
        "clk",
        "rst",
        "paddr",
        "pwrite",
        "pwdata",
        "psel",
        "penable",
        "prdata",
        "txd",
        "rxd",
        "irq"
      ],
      registers: [
        "CTRL",
        "STATUS",
        "DATA",
        "BAUD"
      ]
    },
    UART1: {
      type: "Component",
      ports: [
        "clk",
        "rst",
        "paddr",
        "pwrite",
        "pwdata",
        "psel",
        "penable",
        "prdata",
        "txd",
        "rxd",
        "irq"
      ],
      registers: [
        "CTRL",
        "STATUS",
        "DATA",
        "BAUD"
      ]
    },
    SPI0: {
      type: "Component",
      ports: [
        "clk",
        "rst",
        "paddr",
        "pwrite",
        "pwdata",
        "psel",
        "penable",
        "prdata",
        "sclk",
        "mosi",
        "miso",
        "cs_n",
        "irq"
      ],
      registers: [
        "CTRL",
        "STATUS",
        "TX_DATA",
        "RX_DATA",
        "BAUD"
      ]
    },
    "GPIO Bank": {
      type: "Component",
      ports: [
        "clk",
        "rst",
        "paddr",
        "pwrite",
        "pwdata",
        "psel",
        "penable",
        "prdata",
        "gpio_in",
        "gpio_out",
        "gpio_dir",
        "irq"
      ],
      registers: [
        "DATA_IN",
        "DATA_OUT",
        "DIR",
        "IE",
        "DE"
      ]
    },
    "Clock Generator": {
      type: "ClockReset",
      ports: [
        "xtal_in",
        "clk_out",
        "rst_out"
      ],
      registers: [
        "PLL_CTRL",
        "PLL_STAT"
      ]
    },
    "JTAG Interface": {
      type: "Debug",
      ports: [
        "tdi",
        "tdo",
        "tms",
        "tck",
        "trst_n"
      ],
      registers: []
    }
  }, PE = [
    {
      source: "ARM Cortex-M4",
      target: "AXI Interconnect"
    },
    {
      source: "AXI Interconnect",
      target: "SRAM 256KB"
    },
    {
      source: "AXI Interconnect",
      target: "Flash 1MB"
    },
    {
      source: "AXI Interconnect",
      target: "APB Bridge"
    },
    {
      source: "AXI Interconnect",
      target: "DMA Controller"
    },
    {
      source: "APB Bridge",
      target: "UART0"
    },
    {
      source: "APB Bridge",
      target: "UART1"
    },
    {
      source: "APB Bridge",
      target: "SPI0"
    },
    {
      source: "APB Bridge",
      target: "GPIO Bank"
    },
    {
      source: "UART0",
      target: "NVIC"
    },
    {
      source: "UART1",
      target: "NVIC"
    },
    {
      source: "SPI0",
      target: "NVIC"
    },
    {
      source: "GPIO Bank",
      target: "NVIC"
    },
    {
      source: "NVIC",
      target: "ARM Cortex-M4"
    },
    {
      source: "DMA Controller",
      target: "SRAM 256KB"
    },
    {
      source: "DMA Controller",
      target: "Flash 1MB"
    },
    {
      source: "Clock Generator",
      target: "ARM Cortex-M4"
    },
    {
      source: "Clock Generator",
      target: "AXI Interconnect"
    },
    {
      source: "Clock Generator",
      target: "APB Bridge"
    },
    {
      source: "Clock Generator",
      target: "NVIC"
    },
    {
      source: "JTAG Interface",
      target: "ARM Cortex-M4"
    }
  ], $E = {
    components: RE,
    connections: PE
  }, zE = /* @__PURE__ */ new Set([
    "cpu",
    "bus",
    "memory",
    "peripheral",
    "interface",
    "clockReset",
    "custom",
    "dma",
    "interruptController",
    "debug"
  ]), DE = /* @__PURE__ */ new Set([
    "in",
    "out",
    "inout"
  ]);
  function Ur(e) {
    return typeof e == "object" && e !== null;
  }
  function tt(e) {
    return typeof e == "string" && e.length > 0;
  }
  function Fi(e) {
    return e.trim().replace(/\s+/g, "_");
  }
  function Bp(e, r) {
    const o = r.trim().toLowerCase(), s = e.trim().toLowerCase();
    return o === "bus" || s.includes("bus") ? "bus" : o === "cpu" || s.includes("cpu") ? "cpu" : o === "memory" || s.includes("ram") || s.includes("rom") || s.includes("memory") ? "memory" : o === "interface" || s.includes("pad") || s.includes("interface") ? "interface" : o === "clockreset" || o === "clock_reset" || s.includes("clock") || s.includes("reset") ? "clockReset" : o === "dma" || s.includes("dma") ? "dma" : o === "interruptcontroller" || o === "interrupt_controller" || s.includes("interrupt") || s.includes("intc") || s.includes("nvic") || s.includes("vic") || s.includes("gic") ? "interruptController" : o === "debug" || s.includes("debug") || s.includes("jtag") || s.includes("tap") ? "debug" : o === "peripheral" || o === "component" ? "peripheral" : zE.has(r) ? r : "custom";
  }
  function jp(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs ports[].`);
    return r.map((o, s) => {
      if (tt(o)) return {
        id: Fi(o),
        name: o,
        direction: "inout"
      };
      if (!Ur(o) || !tt(o.id) || !tt(o.name) || !DE.has(o.direction)) throw new Error(`Component ${e} has an invalid port.`);
      return o;
    }).filter((o, s, l) => l.findIndex((u) => u.id === o.id) === s);
  }
  function Hp(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs registers[].`);
    return r.map((o) => {
      if (tt(o)) return {
        id: Fi(o),
        name: o
      };
      if (!Ur(o) || !tt(o.id) || !tt(o.name)) throw new Error(`Component ${e} has an invalid register.`);
      return o;
    }).filter((o, s, l) => l.findIndex((u) => u.id === o.id) === s);
  }
  function LE(e) {
    if (Array.isArray(e)) return e.map((r) => {
      if (!Ur(r) || !tt(r.id) || !tt(r.name) || !tt(r.type)) throw new Error("Each component needs id, name, type, ports[], and registers[].");
      return {
        id: r.id,
        name: r.name,
        type: Bp(r.name, r.type),
        ports: jp(r.id, r.ports),
        registers: Hp(r.id, r.registers)
      };
    });
    if (Ur(e)) return Object.entries(e).map(([r, o]) => {
      if (!Ur(o) || !tt(o.type)) throw new Error(`Component ${r} needs type, ports[], and registers[].`);
      const s = Fi(r);
      return {
        id: s,
        name: r,
        type: Bp(r, o.type),
        ports: jp(s, o.ports),
        registers: Hp(s, o.registers)
      };
    });
    throw new Error("JSON must contain components and connections[].");
  }
  function Vp(e) {
    var _a;
    return ((_a = e == null ? void 0 : e.ports[0]) == null ? void 0 : _a.id) ?? "default";
  }
  function OE(e, r) {
    if (!Array.isArray(e)) throw new Error("JSON must contain components and connections[].");
    const o = new Map(r.map((l) => [
      l.id,
      l
    ])), s = new Map(r.map((l) => [
      l.name,
      l
    ]));
    return e.map((l, u) => {
      if (!Ur(l)) throw new Error("Each connection needs source and target components.");
      const c = tt(l.sourceComponentId) ? l.sourceComponentId : tt(l.source) ? Fi(l.source) : "", f = tt(l.targetComponentId) ? l.targetComponentId : tt(l.target) ? Fi(l.target) : "", m = o.get(c) ?? (tt(l.source) ? s.get(l.source) : void 0), h = o.get(f) ?? (tt(l.target) ? s.get(l.target) : void 0);
      if (!m || !h) throw new Error(`Connection ${u + 1} references a missing component.`);
      return {
        id: tt(l.id) ? l.id : `conn_${u + 1}_${m.id}_to_${h.id}`,
        sourceComponentId: m.id,
        sourcePortId: tt(l.sourcePortId) ? l.sourcePortId : Vp(m),
        targetComponentId: h.id,
        targetPortId: tt(l.targetPortId) ? l.targetPortId : Vp(h)
      };
    });
  }
  function sc(e) {
    let r;
    try {
      r = JSON.parse(e);
    } catch {
      throw new Error("The input is not valid JSON.");
    }
    if (!Ur(r)) throw new Error("JSON must contain components and connections[].");
    const o = LE(r.components), s = OE(r.connections, o);
    return {
      components: o,
      connections: s
    };
  }
  function ed({ children: e, className: r }) {
    const s = mt((l) => l.theme) === "dark";
    return A.jsx("section", {
      className: jl("border shadow-xl backdrop-blur-sm", s ? "border-white/10 bg-shell-900/95" : "border-[#e5e0d8] bg-[#fffcf9]/95", r),
      children: e
    });
  }
  const Up = JSON.stringify($E, null, 2);
  function FE() {
    const e = Lt((T) => T.loadModel), r = be((T) => T.setNodes), o = be((T) => T.setEdges), s = be((T) => T.setLayoutLoading), l = Te((T) => T.selectNode), u = Te((T) => T.setSearchQuery), f = mt((T) => T.theme) === "dark", [m, h] = $.useState(""), [g, y] = $.useState(null), [v, x] = $.useState(false), E = $.useRef(null);
    $.useEffect(() => {
      function T() {
        var _a;
        (_a = E.current) == null ? void 0 : _a.click();
      }
      return window.addEventListener("ipxact:open-file", T), () => window.removeEventListener("ipxact:open-file", T);
    }, []);
    const S = (T) => {
      l(null), u(""), r([]), o([]), s(true), e(T), y(null);
    }, _ = () => {
      x(true), setTimeout(() => {
        try {
          S(sc(m));
        } catch (T) {
          y(T instanceof Error ? T.message : "Unable to parse architecture JSON."), s(false);
        } finally {
          x(false);
        }
      }, 50);
    }, N = async (T) => {
      var _a;
      const L = (_a = T.target.files) == null ? void 0 : _a[0];
      if (L) {
        x(true);
        try {
          const b = await L.text();
          h(b), S(sc(b));
        } catch (b) {
          y(b instanceof Error ? b.message : "Unable to read architecture JSON file."), s(false);
        } finally {
          x(false);
        }
      }
    };
    return A.jsx("div", {
      className: `pointer-events-none absolute inset-0 z-20 grid place-items-center p-6 backdrop-blur-sm ${f ? "bg-shell-950/80" : "bg-slate-200/80"}`,
      children: A.jsxs(ed, {
        className: "pointer-events-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl",
        children: [
          A.jsxs("div", {
            className: `border-b p-6 ${f ? "border-white/10" : "border-slate-200"}`,
            children: [
              A.jsx("h2", {
                className: `text-xl font-semibold ${f ? "text-slate-50" : "text-slate-900"}`,
                children: "Load architecture JSON"
              }),
              A.jsx("p", {
                className: `mt-2 text-sm ${f ? "text-slate-400" : "text-slate-600"}`,
                children: "Choose a JSON file or paste an architecture model to render the graph."
              })
            ]
          }),
          A.jsxs("div", {
            className: "grid gap-4 p-6",
            children: [
              A.jsxs("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                  A.jsxs("label", {
                    className: `inline-flex cursor-pointer items-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${f ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15" : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"}`,
                    children: [
                      v ? "Reading file..." : "Choose JSON file",
                      A.jsx("input", {
                        ref: E,
                        accept: "application/json,.json",
                        className: "sr-only",
                        onChange: N,
                        type: "file"
                      })
                    ]
                  }),
                  A.jsx("button", {
                    className: `rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${f ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"}`,
                    onClick: () => {
                      x(true), setTimeout(() => {
                        h(Up), S(sc(Up)), x(false);
                      }, 50);
                    },
                    type: "button",
                    children: "Load sample SoC"
                  })
                ]
              }),
              A.jsx("textarea", {
                className: `h-72 resize-none rounded-lg border p-4 font-mono text-xs leading-5 outline-none transition ${f ? "border-white/10 bg-shell-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-300/40" : "border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"}`,
                onChange: (T) => h(T.target.value),
                placeholder: '{"components": [...], "connections": [...]}',
                spellCheck: false,
                value: m
              }),
              g ? A.jsx("div", {
                className: "rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700",
                children: g
              }) : null,
              A.jsx("div", {
                className: "flex justify-end",
                children: A.jsx("button", {
                  className: "rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-40 shadow-sm",
                  disabled: !m.trim() || v,
                  onClick: _,
                  type: "button",
                  children: v ? "Processing..." : "Render graph"
                })
              })
            ]
          })
        ]
      })
    });
  }
  function BE({ children: e, color: r = "#94a3b8" }) {
    return A.jsx("span", {
      className: "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
      style: {
        borderColor: r,
        color: r,
        backgroundColor: `${r}1a`
      },
      children: e
    });
  }
  function Wp({ connections: e, direction: r, getName: o, onSelect: s }) {
    const u = mt((c) => c.theme) === "dark";
    return e.length === 0 ? A.jsxs("div", {
      className: `rounded-lg py-4 text-center text-sm ${u ? "text-slate-500" : "text-slate-400"}`,
      children: [
        "No ",
        r,
        " connections."
      ]
    }) : A.jsx("ul", {
      className: "space-y-1.5",
      children: e.map((c) => {
        const f = r === "incoming" ? c.sourceComponentId : c.targetComponentId, m = r === "incoming" ? c.sourcePortId : c.targetPortId, h = r === "incoming" ? c.targetPortId : c.sourcePortId;
        return A.jsxs("li", {
          className: `group rounded-lg p-3 transition ${u ? "bg-white/[0.03] hover:bg-white/[0.06] border border-white/5" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
          children: [
            A.jsx("button", {
              className: `mb-1.5 text-left text-sm font-semibold transition ${u ? "text-cyan-300 hover:text-cyan-200" : "text-cyan-600 hover:text-cyan-700"}`,
              onClick: () => s(f),
              type: "button",
              children: o(f)
            }),
            A.jsxs("div", {
              className: `flex items-center gap-1.5 font-mono text-[11px] ${u ? "text-slate-500" : "text-slate-400"}`,
              children: [
                A.jsx("span", {
                  className: `rounded px-1 py-0.5 ${u ? "bg-white/5" : "bg-slate-100"}`,
                  children: m
                }),
                A.jsx("svg", {
                  className: "h-3 w-3 shrink-0",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: A.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                }),
                A.jsx("span", {
                  className: `rounded px-1 py-0.5 ${u ? "bg-white/5" : "bg-slate-100"}`,
                  children: h
                })
              ]
            })
          ]
        }, c.id);
      })
    });
  }
  function Sl({ title: e, children: r }) {
    const s = mt((l) => l.theme) === "dark";
    return A.jsxs("section", {
      className: `border-t pt-4 ${s ? "border-white/10" : "border-slate-200"}`,
      children: [
        A.jsxs("h3", {
          className: `mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${s ? "text-slate-500" : "text-slate-400"}`,
          children: [
            A.jsx("span", {
              className: `inline-block h-1 w-1 rounded-full ${s ? "bg-cyan-400" : "bg-cyan-500"}`
            }),
            e
          ]
        }),
        r
      ]
    });
  }
  const Yp = [];
  function jE() {
    const e = Te((y) => y.selectedNodeId), r = Lt((y) => e ? y.componentById.get(e) : void 0), o = Lt((y) => e ? y.getIncoming(e) : Yp), s = Lt((y) => e ? y.getOutgoing(e) : Yp), l = Lt((y) => y.getComponent), u = qc(), c = be((y) => y.sidebarCollapsed), f = be((y) => y.toggleSidebar), h = mt((y) => y.theme) === "dark";
    if (!r || c) return null;
    const g = pt[r.type];
    return A.jsxs(ed, {
      className: "relative h-full w-[360px] shrink-0 overflow-y-auto transition-all duration-300",
      children: [
        A.jsxs("div", {
          className: `relative border-b p-5 ${h ? "border-white/10" : "border-slate-200"}`,
          children: [
            A.jsx("div", {
              className: "absolute left-0 top-0 h-1 w-full",
              style: {
                backgroundColor: g.base
              }
            }),
            A.jsx("button", {
              className: `absolute right-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border transition ${h ? "border-white/10 bg-white/5 text-slate-500 hover:bg-white/10 hover:text-slate-200" : "border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 shadow-sm"}`,
              onClick: f,
              title: "Collapse sidebar",
              type: "button",
              children: A.jsx("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: A.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            }),
            A.jsxs("div", {
              className: "flex items-start gap-3",
              children: [
                A.jsx("div", {
                  className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                  style: {
                    backgroundColor: `${g.base}20`,
                    color: g.border,
                    border: `1px solid ${g.border}40`
                  },
                  children: r.type.slice(0, 2).toUpperCase()
                }),
                A.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    A.jsx(BE, {
                      color: g.border,
                      children: r.type
                    }),
                    A.jsx("h2", {
                      className: `mt-2 text-lg font-semibold leading-tight ${h ? "text-slate-50" : "text-slate-900"}`,
                      children: r.name
                    }),
                    A.jsx("p", {
                      className: `mt-1 font-mono text-[11px] ${h ? "text-slate-500" : "text-slate-400"}`,
                      children: r.id
                    })
                  ]
                })
              ]
            })
          ]
        }),
        A.jsxs("div", {
          className: `flex gap-3 border-b px-5 py-3 ${h ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"}`,
          children: [
            A.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                A.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: r.ports.length
                }),
                A.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Ports"
                })
              ]
            }),
            A.jsx("div", {
              className: `w-px ${h ? "bg-white/10" : "bg-slate-200"}`
            }),
            A.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                A.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: r.registers.length
                }),
                A.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Registers"
                })
              ]
            }),
            A.jsx("div", {
              className: `w-px ${h ? "bg-white/10" : "bg-slate-200"}`
            }),
            A.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                A.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: o.length + s.length
                }),
                A.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Connections"
                })
              ]
            })
          ]
        }),
        A.jsxs("div", {
          className: "p-5",
          children: [
            A.jsx(Sl, {
              title: "Ports",
              children: A.jsx("ul", {
                className: "space-y-1.5",
                children: r.ports.map((y) => A.jsxs("li", {
                  className: `group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${h ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
                  children: [
                    A.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        A.jsx("span", {
                          className: `h-1.5 w-1.5 rounded-full ${y.direction === "in" ? "bg-emerald-400" : y.direction === "out" ? "bg-amber-400" : "bg-slate-400"}`
                        }),
                        A.jsx("span", {
                          className: `font-medium ${h ? "text-slate-200" : "text-slate-700"}`,
                          children: y.name
                        })
                      ]
                    }),
                    A.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        A.jsx("span", {
                          className: `rounded px-1.5 py-0.5 text-[10px] font-medium uppercase ${y.direction === "in" ? "bg-emerald-500/10 text-emerald-600" : y.direction === "out" ? "bg-amber-500/10 text-amber-600" : "bg-slate-500/10 text-slate-600"}`,
                          children: y.direction
                        }),
                        y.width ? A.jsxs("span", {
                          className: `font-mono text-xs ${h ? "text-slate-500" : "text-slate-400"}`,
                          children: [
                            y.width,
                            "b"
                          ]
                        }) : null
                      ]
                    })
                  ]
                }, y.id))
              })
            }),
            A.jsx(Sl, {
              title: "Registers",
              children: A.jsx("ul", {
                className: "space-y-1.5",
                children: r.registers.map((y) => A.jsxs("li", {
                  className: `rounded-lg px-3 py-2.5 transition ${h ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
                  children: [
                    A.jsxs("div", {
                      className: "flex items-center justify-between gap-3 text-sm",
                      children: [
                        A.jsx("span", {
                          className: `font-medium ${h ? "text-slate-200" : "text-slate-700"}`,
                          children: y.name
                        }),
                        y.address ? A.jsx("span", {
                          className: `rounded px-1.5 py-0.5 font-mono text-[10px] ${h ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500"}`,
                          children: y.address
                        }) : null
                      ]
                    }),
                    y.description ? A.jsx("p", {
                      className: "mt-1.5 text-xs leading-relaxed text-slate-500",
                      children: y.description
                    }) : null
                  ]
                }, y.id))
              })
            }),
            A.jsx(Sl, {
              title: "Incoming",
              children: A.jsx(Wp, {
                connections: o,
                direction: "incoming",
                getName: (y) => {
                  var _a;
                  return ((_a = l(y)) == null ? void 0 : _a.name) ?? y;
                },
                onSelect: u
              })
            }),
            A.jsx(Sl, {
              title: "Outgoing",
              children: A.jsx(Wp, {
                connections: s,
                direction: "outgoing",
                getName: (y) => {
                  var _a;
                  return ((_a = l(y)) == null ? void 0 : _a.name) ?? y;
                },
                onSelect: u
              })
            })
          ]
        })
      ]
    });
  }
  function xr(e) {
    return Array.isArray ? Array.isArray(e) : Bm(e) === "[object Array]";
  }
  function HE(e) {
    if (typeof e == "string") return e;
    if (typeof e == "bigint") return e.toString();
    const r = e + "";
    return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
  }
  function Cc(e) {
    return e == null ? "" : HE(e);
  }
  function xt(e) {
    return typeof e == "string";
  }
  function bl(e) {
    return typeof e == "number";
  }
  function VE(e) {
    return e === true || e === false || UE(e) && Bm(e) == "[object Boolean]";
  }
  function Fm(e) {
    return typeof e == "object";
  }
  function UE(e) {
    return Fm(e) && e !== null;
  }
  function Dt(e) {
    return e != null;
  }
  function El(e) {
    return !e.trim().length;
  }
  function Bm(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
  }
  const WE = "Incorrect 'index' type", _c = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", YE = (e) => `Invalid value for key ${e}`, XE = (e) => `Pattern length exceeds max of ${e}.`, GE = (e) => `Missing ${e} property in key`, KE = (e) => `Property 'weight' in key '${e}' must be a positive integer`, QE = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", Xp = Object.prototype.hasOwnProperty;
  var ZE = class {
    constructor(e) {
      this._keys = [], this._keyMap = {};
      let r = 0;
      e.forEach((o) => {
        const s = jm(o);
        this._keys.push(s), this._keyMap[s.id] = s, r += s.weight;
      }), this._keys.forEach((o) => {
        o.weight /= r;
      });
    }
    get(e) {
      return this._keyMap[e];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function jm(e) {
    let r = null, o = null, s = null, l = 1, u = null;
    if (xt(e) || xr(e)) s = e, r = Gp(e), o = Al(e);
    else {
      if (!Xp.call(e, "name")) throw new Error(GE("name"));
      const c = e.name;
      if (s = c, Xp.call(e, "weight") && e.weight !== void 0 && (l = e.weight, l <= 0)) throw new Error(KE(Al(c)));
      r = Gp(c), o = Al(c), u = e.getFn ?? null;
    }
    return {
      path: r,
      id: o,
      weight: l,
      src: s,
      getFn: u
    };
  }
  function Gp(e) {
    return xr(e) ? e : e.split(".");
  }
  function Al(e) {
    return xr(e) ? e.join(".") : e;
  }
  function qE(e, r) {
    const o = [];
    let s = false;
    const l = (u, c, f, m) => {
      if (Dt(u)) if (!c[f]) o.push(m !== void 0 ? {
        v: u,
        i: m
      } : u);
      else {
        const h = u[c[f]];
        if (!Dt(h)) return;
        if (f === c.length - 1 && (xt(h) || bl(h) || VE(h) || typeof h == "bigint")) o.push(m !== void 0 ? {
          v: Cc(h),
          i: m
        } : Cc(h));
        else if (xr(h)) {
          s = true;
          for (let g = 0, y = h.length; g < y; g += 1) l(h[g], c, f + 1, g);
        } else c.length && l(h, c, f + 1, m);
      }
    };
    return l(e, xt(r) ? r.split(".") : r, 0), s ? o : o[0];
  }
  const JE = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
  }, ek = {
    isCaseSensitive: false,
    ignoreDiacritics: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (e, r) => e.score === r.score ? e.idx < r.idx ? -1 : 1 : e.score < r.score ? -1 : 1
  }, tk = {
    location: 0,
    threshold: 0.6,
    distance: 100
  }, nk = {
    useExtendedSearch: false,
    useTokenSearch: false,
    tokenize: void 0,
    tokenMatch: "any",
    getFn: qE,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
  }, Se = Object.freeze({
    ...ek,
    ...JE,
    ...tk,
    ...nk
  });
  function rk(e = 1, r = 3) {
    const o = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
    return {
      get(l) {
        let u = 1, c = false;
        for (let m = 0; m < l.length; m++) l.charCodeAt(m) === 32 ? c || (u++, c = true) : c = false;
        if (o.has(u)) return o.get(u);
        const f = Math.round(s / Math.pow(u, 0.5 * e)) / s;
        return o.set(u, f), f;
      },
      clear() {
        o.clear();
      }
    };
  }
  var td = class {
    constructor({ getFn: e = Se.getFn, fieldNormWeight: r = Se.fieldNormWeight } = {}) {
      this.norm = rk(r, 3), this.getFn = e, this.isCreated = false, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
    }
    setSources(e = []) {
      this.docs = e;
    }
    setIndexRecords(e = []) {
      this.records = e;
    }
    setKeys(e = []) {
      this.keys = e, this._keysMap = {}, e.forEach((r, o) => {
        this._keysMap[r.id] = o;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) return;
      this.isCreated = true;
      const e = this.docs.length;
      this.records = new Array(e);
      let r = 0;
      if (xt(this.docs[0])) for (let o = 0; o < e; o++) {
        const s = this._createStringRecord(this.docs[o], o);
        s && (this.records[r++] = s);
      }
      else for (let o = 0; o < e; o++) this.records[r++] = this._createObjectRecord(this.docs[o], o);
      this.records.length = r, this.norm.clear();
    }
    add(e, r) {
      if (!Number.isInteger(r) || r < 0) throw new Error(_c);
      if (xt(e)) {
        const s = this._createStringRecord(e, r);
        return s && this.records.push(s), s;
      }
      const o = this._createObjectRecord(e, r);
      return this.records.push(o), o;
    }
    removeAt(e) {
      if (!Number.isInteger(e) || e < 0) throw new Error(_c);
      for (let r = 0, o = this.records.length; r < o; r += 1) if (this.records[r].i === e) {
        this.records.splice(r, 1);
        break;
      }
      for (let r = 0, o = this.records.length; r < o; r += 1) this.records[r].i > e && (this.records[r].i -= 1);
    }
    removeAll(e) {
      const r = /* @__PURE__ */ new Set();
      for (const s of e) Number.isInteger(s) && s >= 0 && r.add(s);
      if (r.size === 0) return;
      this.records = this.records.filter((s) => !r.has(s.i));
      const o = Array.from(r).sort((s, l) => s - l);
      for (const s of this.records) {
        let l = 0, u = o.length;
        for (; l < u; ) {
          const c = l + u >>> 1;
          o[c] < s.i ? l = c + 1 : u = c;
        }
        s.i -= l;
      }
    }
    getValueForItemAtKeyId(e, r) {
      return e[this._keysMap[r]];
    }
    size() {
      return this.records.length;
    }
    _createStringRecord(e, r) {
      return !Dt(e) || El(e) ? null : {
        v: e,
        i: r,
        n: this.norm.get(e)
      };
    }
    _createObjectRecord(e, r) {
      const o = {
        i: r,
        $: {}
      };
      for (let s = 0, l = this.keys.length; s < l; s++) {
        const u = this.keys[s], c = u.getFn ? u.getFn(e) : this.getFn(e, u.path);
        if (Dt(c)) {
          if (xr(c)) {
            const f = [];
            for (let m = 0, h = c.length; m < h; m += 1) {
              const g = c[m];
              if (Dt(g)) {
                if (xt(g)) {
                  if (!El(g)) {
                    const y = {
                      v: g,
                      i: m,
                      n: this.norm.get(g)
                    };
                    f.push(y);
                  }
                } else if (Dt(g.v)) {
                  const y = xt(g.v) ? g.v : Cc(g.v);
                  if (!El(y)) {
                    const v = {
                      v: y,
                      i: g.i,
                      n: this.norm.get(y)
                    };
                    f.push(v);
                  }
                }
              }
            }
            o.$[s] = f;
          } else if (xt(c) && !El(c)) {
            const f = {
              v: c,
              n: this.norm.get(c)
            };
            o.$[s] = f;
          }
        }
      }
      return o;
    }
    toJSON() {
      return {
        keys: this.keys.map(({ getFn: e, ...r }) => r),
        records: this.records
      };
    }
  };
  function Hm(e, r, { getFn: o = Se.getFn, fieldNormWeight: s = Se.fieldNormWeight } = {}) {
    const l = new td({
      getFn: o,
      fieldNormWeight: s
    });
    return l.setKeys(e.map(jm)), l.setSources(r), l.create(), l;
  }
  function ok(e, { getFn: r = Se.getFn, fieldNormWeight: o = Se.fieldNormWeight } = {}) {
    const { keys: s, records: l } = e, u = new td({
      getFn: r,
      fieldNormWeight: o
    });
    return u.setKeys(s), u.setIndexRecords(l), u;
  }
  function ik(e = [], r = Se.minMatchCharLength) {
    const o = [];
    let s = -1, l = -1, u = 0;
    for (let c = e.length; u < c; u += 1) {
      const f = e[u];
      f && s === -1 ? s = u : !f && s !== -1 && (l = u - 1, l - s + 1 >= r && o.push([
        s,
        l
      ]), s = -1);
    }
    return e[u - 1] && u - s >= r && o.push([
      s,
      u - 1
    ]), o;
  }
  function sk(e, r, o, { location: s = Se.location, distance: l = Se.distance, threshold: u = Se.threshold, findAllMatches: c = Se.findAllMatches, minMatchCharLength: f = Se.minMatchCharLength, includeMatches: m = Se.includeMatches, ignoreLocation: h = Se.ignoreLocation } = {}) {
    if (r.length > 32) throw new Error(XE(32));
    const g = r.length, y = e.length, v = Math.max(0, Math.min(s, y));
    let x = u, E = v;
    const S = (G, V) => {
      const K = G / g;
      if (h) return K;
      const J = Math.abs(v - V);
      return l ? K + J / l : J ? 1 : K;
    }, _ = f > 1 || m, N = _ ? Array(y) : [];
    let T;
    for (; (T = e.indexOf(r, E)) > -1; ) {
      const G = S(0, T);
      if (x = Math.min(G, x), E = T + g, _) {
        let V = 0;
        for (; V < g; ) N[T + V] = 1, V += 1;
      }
    }
    E = -1;
    let L = [], b = 1, X = 0, O = g + y;
    const Z = 1 << g - 1;
    for (let G = 0; G < g; G += 1) {
      let V = 0, K = O;
      for (; V < K; ) S(G, v + K) <= x ? V = K : O = K, K = Math.floor((O - V) / 2 + V);
      O = K;
      let J = Math.max(1, v - K + 1);
      const q = c ? y : Math.min(v + K, y) + g, k = Array(q + 2);
      k[q + 1] = (1 << G) - 1;
      for (let H = q; H >= J; H -= 1) {
        const I = H - 1, W = o[e[I]];
        if (k[H] = (k[H + 1] << 1 | 1) & W, G && (k[H] |= (L[H + 1] | L[H]) << 1 | 1 | L[H + 1]), k[H] & Z && (b = S(G, I), b <= x)) {
          if (x = b, E = I, X = G, E <= v) break;
          J = Math.max(1, 2 * v - E);
        }
      }
      if (S(G + 1, v) > x) break;
      L = k;
    }
    if (_ && E >= 0) {
      const G = Math.min(y - 1, E + g - 1 + X);
      for (let V = E; V <= G; V += 1) o[e[V]] && (N[V] = 1);
    }
    const ee = {
      isMatch: E >= 0,
      score: Math.max(1e-3, b)
    };
    if (_) {
      const G = ik(N, f);
      G.length ? m && (ee.indices = G) : ee.isMatch = false;
    }
    return ee;
  }
  function lk(e) {
    const r = {};
    for (let o = 0, s = e.length; o < s; o += 1) {
      const l = e.charAt(o);
      r[l] = (r[l] || 0) | 1 << s - o - 1;
    }
    return r;
  }
  function nd(e) {
    if (e.length <= 1) return e;
    e.sort((o, s) => o[0] - s[0] || o[1] - s[1]);
    const r = [
      e[0]
    ];
    for (let o = 1, s = e.length; o < s; o += 1) {
      const l = r[r.length - 1], u = e[o];
      u[0] <= l[1] + 1 ? l[1] = Math.max(l[1], u[1]) : r.push(u);
    }
    return r;
  }
  const Vm = {
    \u0142: "l",
    \u0141: "L",
    \u0111: "d",
    \u0110: "D",
    \u00F8: "o",
    \u00D8: "O",
    \u0127: "h",
    \u0126: "H",
    \u0167: "t",
    \u0166: "T",
    \u0131: "i",
    \u00DF: "ss"
  }, ak = new RegExp("[" + Object.keys(Vm).join("") + "]", "g"), Bi = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(ak, (r) => Vm[r]) : (e) => e;
  var rd = class {
    constructor(e, { location: r = Se.location, threshold: o = Se.threshold, distance: s = Se.distance, includeMatches: l = Se.includeMatches, findAllMatches: u = Se.findAllMatches, minMatchCharLength: c = Se.minMatchCharLength, isCaseSensitive: f = Se.isCaseSensitive, ignoreDiacritics: m = Se.ignoreDiacritics, ignoreLocation: h = Se.ignoreLocation } = {}) {
      if (this.options = {
        location: r,
        threshold: o,
        distance: s,
        includeMatches: l,
        findAllMatches: u,
        minMatchCharLength: c,
        isCaseSensitive: f,
        ignoreDiacritics: m,
        ignoreLocation: h
      }, e = f ? e : e.toLowerCase(), e = m ? Bi(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
      const g = (v, x) => {
        this.chunks.push({
          pattern: v,
          alphabet: lk(v),
          startIndex: x
        });
      }, y = this.pattern.length;
      if (y > 32) {
        let v = 0;
        const x = y % 32, E = y - x;
        for (; v < E; ) g(this.pattern.substr(v, 32), v), v += 32;
        if (x) {
          const S = y - 32;
          g(this.pattern.substr(S), S);
        }
      } else g(this.pattern, 0);
    }
    searchIn(e) {
      const { isCaseSensitive: r, ignoreDiacritics: o, includeMatches: s } = this.options;
      if (e = r ? e : e.toLowerCase(), e = o ? Bi(e) : e, this.pattern === e) {
        const E = {
          isMatch: true,
          score: 0
        };
        return s && (E.indices = [
          [
            0,
            e.length - 1
          ]
        ]), E;
      }
      const { location: l, distance: u, threshold: c, findAllMatches: f, minMatchCharLength: m, ignoreLocation: h } = this.options, g = [];
      let y = 0, v = false;
      this.chunks.forEach(({ pattern: E, alphabet: S, startIndex: _ }) => {
        const { isMatch: N, score: T, indices: L } = sk(e, E, S, {
          location: l + _,
          distance: u,
          threshold: c,
          findAllMatches: f,
          minMatchCharLength: m,
          includeMatches: s,
          ignoreLocation: h
        });
        N && (v = true), y += T, N && L && g.push(...L);
      });
      const x = {
        isMatch: v,
        score: v ? y / this.chunks.length : 1
      };
      return v && s && (x.indices = nd(g)), x;
    }
  };
  const uk = /* @__PURE__ */ new Set([
    "fuzzy",
    "include"
  ]);
  function ck(e) {
    return e.startsWith("inverse");
  }
  const Nc = [
    {
      type: "exact",
      multiRegex: /^="(.*)"$/,
      singleRegex: /^=(.*)$/,
      create: (e) => ({
        type: "exact",
        search(r) {
          const o = r === e;
          return {
            isMatch: o,
            score: o ? 0 : 1,
            indices: [
              0,
              e.length - 1
            ]
          };
        }
      })
    },
    {
      type: "include",
      multiRegex: /^'"(.*)"$/,
      singleRegex: /^'(.*)$/,
      create: (e) => ({
        type: "include",
        search(r) {
          let o = 0, s;
          const l = [], u = e.length;
          for (; (s = r.indexOf(e, o)) > -1; ) o = s + u, l.push([
            s,
            o - 1
          ]);
          const c = !!l.length;
          return {
            isMatch: c,
            score: c ? 0 : 1,
            indices: l
          };
        }
      })
    },
    {
      type: "prefix-exact",
      multiRegex: /^\^"(.*)"$/,
      singleRegex: /^\^(.*)$/,
      create: (e) => ({
        type: "prefix-exact",
        search(r) {
          const o = r.startsWith(e);
          return {
            isMatch: o,
            score: o ? 0 : 1,
            indices: [
              0,
              e.length - 1
            ]
          };
        }
      })
    },
    {
      type: "inverse-prefix-exact",
      multiRegex: /^!\^"(.*)"$/,
      singleRegex: /^!\^(.*)$/,
      create: (e) => ({
        type: "inverse-prefix-exact",
        search(r) {
          const o = !r.startsWith(e);
          return {
            isMatch: o,
            score: o ? 0 : 1,
            indices: [
              0,
              r.length - 1
            ]
          };
        }
      })
    },
    {
      type: "inverse-suffix-exact",
      multiRegex: /^!"(.*)"\$$/,
      singleRegex: /^!(.*)\$$/,
      create: (e) => ({
        type: "inverse-suffix-exact",
        search(r) {
          const o = !r.endsWith(e);
          return {
            isMatch: o,
            score: o ? 0 : 1,
            indices: [
              0,
              r.length - 1
            ]
          };
        }
      })
    },
    {
      type: "suffix-exact",
      multiRegex: /^"(.*)"\$$/,
      singleRegex: /^(.*)\$$/,
      create: (e) => ({
        type: "suffix-exact",
        search(r) {
          const o = r.endsWith(e);
          return {
            isMatch: o,
            score: o ? 0 : 1,
            indices: [
              r.length - e.length,
              r.length - 1
            ]
          };
        }
      })
    },
    {
      type: "inverse-exact",
      multiRegex: /^!"(.*)"$/,
      singleRegex: /^!(.*)$/,
      create: (e) => ({
        type: "inverse-exact",
        search(r) {
          const o = r.indexOf(e) === -1;
          return {
            isMatch: o,
            score: o ? 0 : 1,
            indices: [
              0,
              r.length - 1
            ]
          };
        }
      })
    },
    {
      type: "fuzzy",
      multiRegex: /^"(.*)"$/,
      singleRegex: /^(.*)$/,
      create: (e, r = {}) => {
        const o = new rd(e, {
          location: r.location ?? Se.location,
          threshold: r.threshold ?? Se.threshold,
          distance: r.distance ?? Se.distance,
          includeMatches: r.includeMatches ?? Se.includeMatches,
          findAllMatches: r.findAllMatches ?? Se.findAllMatches,
          minMatchCharLength: r.minMatchCharLength ?? Se.minMatchCharLength,
          isCaseSensitive: r.isCaseSensitive ?? Se.isCaseSensitive,
          ignoreDiacritics: r.ignoreDiacritics ?? Se.ignoreDiacritics,
          ignoreLocation: r.ignoreLocation ?? Se.ignoreLocation
        });
        return {
          type: "fuzzy",
          search(s) {
            return o.searchIn(s);
          }
        };
      }
    }
  ], Kp = Nc.length, dk = "\0", fk = "|";
  function hk(e) {
    const r = [], o = e.length;
    let s = 0;
    for (; s < o; ) {
      for (; s < o && e[s] === " "; ) s++;
      if (s >= o) break;
      let l = s;
      for (; l < o && e[l] !== " " && e[l] !== '"'; ) l++;
      if (l < o && e[l] === '"') {
        for (l++; l < o; ) {
          if (e[l] === '"') {
            const u = l + 1;
            if (u >= o || e[u] === " ") {
              l++;
              break;
            }
            if (e[u] === "$" && (u + 1 >= o || e[u + 1] === " ")) {
              l += 2;
              break;
            }
          }
          l++;
        }
        r.push(e.substring(s, l)), s = l;
      } else {
        for (; l < o && e[l] !== " "; ) l++;
        r.push(e.substring(s, l)), s = l;
      }
    }
    return r;
  }
  function Qp(e, r) {
    const o = e.match(r);
    return o ? o[1] : null;
  }
  function pk(e, r = {}) {
    return e.replace(/\\\|/g, dk).split(fk).map((o) => {
      const s = hk(o.replace(/\u0000/g, "|").trim()).filter((u) => u && !!u.trim()), l = [];
      for (let u = 0, c = s.length; u < c; u += 1) {
        const f = s[u];
        let m = false, h = -1;
        for (; !m && ++h < Kp; ) {
          const g = Nc[h], y = Qp(f, g.multiRegex);
          y && (l.push(g.create(y, r)), m = true);
        }
        if (!m) for (h = -1; ++h < Kp; ) {
          const g = Nc[h], y = Qp(f, g.singleRegex);
          if (y) {
            l.push(g.create(y, r));
            break;
          }
        }
      }
      return l;
    });
  }
  var mk = class {
    constructor(e, { isCaseSensitive: r = Se.isCaseSensitive, ignoreDiacritics: o = Se.ignoreDiacritics, includeMatches: s = Se.includeMatches, minMatchCharLength: l = Se.minMatchCharLength, ignoreLocation: u = Se.ignoreLocation, findAllMatches: c = Se.findAllMatches, location: f = Se.location, threshold: m = Se.threshold, distance: h = Se.distance } = {}) {
      this.query = null, this.options = {
        isCaseSensitive: r,
        ignoreDiacritics: o,
        includeMatches: s,
        minMatchCharLength: l,
        findAllMatches: c,
        ignoreLocation: u,
        location: f,
        threshold: m,
        distance: h
      }, e = r ? e : e.toLowerCase(), e = o ? Bi(e) : e, this.pattern = e, this.query = pk(this.pattern, this.options);
    }
    static condition(e, r) {
      return r.useExtendedSearch;
    }
    searchIn(e) {
      const r = this.query;
      if (!r) return {
        isMatch: false,
        score: 1
      };
      const { includeMatches: o, isCaseSensitive: s, ignoreDiacritics: l } = this.options;
      e = s ? e : e.toLowerCase(), e = l ? Bi(e) : e;
      let u = 0;
      const c = [];
      let f = 0, m = false;
      for (let h = 0, g = r.length; h < g; h += 1) {
        const y = r[h];
        c.length = 0, u = 0, m = false;
        for (let v = 0, x = y.length; v < x; v += 1) {
          const E = y[v], { isMatch: S, indices: _, score: N } = E.search(e);
          if (S) u += 1, f += N, ck(E.type) && (m = true), o && (uk.has(E.type) ? c.push(..._) : c.push(_));
          else {
            f = 0, u = 0, c.length = 0, m = false;
            break;
          }
        }
        if (u) {
          const v = {
            isMatch: true,
            score: f / u
          };
          return m && (v.hasInverse = true), o && (v.indices = nd(c)), v;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  const Mc = [];
  function od(...e) {
    Mc.push(...e);
  }
  function Hl(e, r) {
    for (let o = 0, s = Mc.length; o < s; o += 1) {
      const l = Mc[o];
      if (l.condition(e, r)) return new l(e, r);
    }
    return new rd(e, r);
  }
  const Vl = {
    AND: "$and",
    OR: "$or"
  }, Ic = {
    PATH: "$path",
    PATTERN: "$val"
  }, bc = (e) => !!(e[Vl.AND] || e[Vl.OR]), gk = (e) => !!e[Ic.PATH], yk = (e) => !xr(e) && Fm(e) && !bc(e), Zp = (e) => ({
    [Vl.AND]: Object.keys(e).map((r) => ({
      [r]: e[r]
    }))
  });
  function Um(e, r, { auto: o = true } = {}) {
    const s = (l) => {
      if (xt(l)) {
        const m = {
          keyId: null,
          pattern: l
        };
        return o && (m.searcher = Hl(l, r)), m;
      }
      const u = Object.keys(l), c = gk(l);
      if (!c && u.length > 1 && !bc(l)) return s(Zp(l));
      if (yk(l)) {
        const m = c ? l[Ic.PATH] : u[0], h = c ? l[Ic.PATTERN] : l[m];
        if (!xt(h)) throw new Error(YE(m));
        const g = {
          keyId: Al(m),
          pattern: h
        };
        return o && (g.searcher = Hl(h, r)), g;
      }
      const f = {
        children: [],
        operator: u[0]
      };
      return u.forEach((m) => {
        const h = l[m];
        xr(h) && h.forEach((g) => {
          f.children.push(s(g));
        });
      }), f;
    };
    return bc(e) || (e = Zp(e)), s(e);
  }
  function Ac(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    let o = 1;
    return e.forEach(({ key: s, norm: l, score: u }) => {
      const c = s ? s.weight : null;
      o *= Math.pow(u === 0 && c ? Number.EPSILON : u, (c || 1) * (r ? 1 : l));
    }), o;
  }
  function vk(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    e.forEach((o) => {
      o.score = Ac(o.matches, {
        ignoreFieldNorm: r
      });
    });
  }
  var wk = class {
    constructor(e) {
      this.limit = e, this.heap = [];
    }
    get size() {
      return this.heap.length;
    }
    shouldInsert(e) {
      return this.size < this.limit || e < this.heap[0].score;
    }
    insert(e) {
      this.size < this.limit ? (this.heap.push(e), this._bubbleUp(this.size - 1)) : e.score < this.heap[0].score && (this.heap[0] = e, this._sinkDown(0));
    }
    extractSorted(e) {
      return this.heap.sort(e);
    }
    _bubbleUp(e) {
      const r = this.heap;
      for (; e > 0; ) {
        const o = e - 1 >> 1;
        if (r[e].score <= r[o].score) break;
        const s = r[e];
        r[e] = r[o], r[o] = s, e = o;
      }
    }
    _sinkDown(e) {
      const r = this.heap, o = r.length;
      let s = e;
      do {
        e = s;
        const l = 2 * e + 1, u = 2 * e + 2;
        if (l < o && r[l].score > r[s].score && (s = l), u < o && r[u].score > r[s].score && (s = u), s !== e) {
          const c = r[e];
          r[e] = r[s], r[s] = c;
        }
      } while (s !== e);
    }
  };
  function xk(e) {
    const r = [];
    return e.matches.forEach((o) => {
      if (!Dt(o.indices) || !o.indices.length) return;
      const s = {
        indices: o.indices,
        value: o.value
      };
      o.key && (s.key = o.key.id), o.idx > -1 && (s.refIndex = o.idx), r.push(s);
    }), r;
  }
  function Sk(e, r, { includeMatches: o = Se.includeMatches, includeScore: s = Se.includeScore } = {}) {
    return e.map((l) => {
      const { idx: u } = l, c = {
        item: r[u],
        refIndex: u
      };
      return o && (c.matches = xk(l)), s && (c.score = l.score), c;
    });
  }
  const Ek = /[\p{L}\p{M}\p{N}_]+/gu, qp = /* @__PURE__ */ new WeakSet();
  function kk(e) {
    qp.has(e) || (qp.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
  }
  function Ck(e) {
    if (typeof e == "function") {
      let r = false;
      return (o) => {
        const s = e(o);
        if (!r && (r = true, !Array.isArray(s) || s.some((l) => typeof l != "string"))) throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(s) ? "array containing non-strings" : typeof s}.`);
        return s;
      };
    }
    return e instanceof RegExp ? (e.global || kk(e), (r) => r.match(e) || []) : (r) => r.match(Ek) || [];
  }
  function Tc({ isCaseSensitive: e = false, ignoreDiacritics: r = false, tokenize: o } = {}) {
    const s = Ck(o);
    return {
      tokenize(l) {
        return e || (l = l.toLowerCase()), r && (l = Bi(l)), s(l);
      }
    };
  }
  var _k = class {
    static condition(e, r) {
      return r.useTokenSearch;
    }
    constructor(e, r) {
      this.options = r, this.analyzer = Tc({
        isCaseSensitive: r.isCaseSensitive,
        ignoreDiacritics: r.ignoreDiacritics,
        tokenize: r.tokenize
      });
      const o = this.analyzer.tokenize(e), { df: s, fieldCount: l } = r._invertedIndex;
      this.termSearchers = [], this.idfWeights = [];
      for (const u of o) {
        this.termSearchers.push(new rd(u, {
          location: r.location,
          threshold: r.threshold,
          distance: r.distance,
          includeMatches: r.includeMatches,
          findAllMatches: r.findAllMatches,
          minMatchCharLength: r.minMatchCharLength,
          isCaseSensitive: r.isCaseSensitive,
          ignoreDiacritics: r.ignoreDiacritics,
          ignoreLocation: true
        }));
        const c = s.get(u) || 0, f = Math.log(1 + (l - c + 0.5) / (c + 0.5));
        this.idfWeights.push(f);
      }
      this.combineAll = r.tokenMatch === "all", this.numTerms = this.termSearchers.length, this.useMask = this.numTerms <= 31;
    }
    searchIn(e) {
      if (!this.termSearchers.length) return {
        isMatch: false,
        score: 1
      };
      const r = [];
      let o = 0, s = 0, l = 0, u = 0;
      const c = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
      for (let h = 0; h < this.termSearchers.length; h++) {
        const g = this.termSearchers[h].searchIn(e), y = this.idfWeights[h];
        s += y, g.isMatch && (l++, o += y * (1 - g.score), g.indices && r.push(...g.indices), this.combineAll && (this.useMask ? u |= 1 << h : c.add(h)));
      }
      if (l === 0) return {
        isMatch: false,
        score: 1
      };
      const f = s > 0 ? 1 - o / s : 0, m = {
        isMatch: true,
        score: Math.max(1e-3, f)
      };
      return this.options.includeMatches && r.length && (m.indices = nd(r)), this.combineAll && (this.useMask ? m.matchedMask = u : m.matchedTerms = c, m.termCount = this.numTerms), m;
    }
  };
  function lc(e, r, o, s) {
    const l = s.tokenize(r);
    if (!l.length) return;
    e.fieldCount++, e.docFieldCount.set(o, (e.docFieldCount.get(o) || 0) + 1);
    const u = new Set(l);
    let c = e.docTermFieldHits.get(o);
    c || (c = /* @__PURE__ */ new Map(), e.docTermFieldHits.set(o, c));
    for (const f of u) c.set(f, (c.get(f) || 0) + 1), e.df.set(f, (e.df.get(f) || 0) + 1);
  }
  function Wm(e, r, o, s) {
    const { i: l, v: u, $: c } = r;
    if (u !== void 0) {
      lc(e, u, l, s);
      return;
    }
    if (c) for (let f = 0; f < o; f++) {
      const m = c[f];
      if (m) if (Array.isArray(m)) for (const h of m) lc(e, h.v, l, s);
      else lc(e, m.v, l, s);
    }
  }
  function Nk(e, r, o) {
    const s = {
      fieldCount: 0,
      df: /* @__PURE__ */ new Map(),
      docFieldCount: /* @__PURE__ */ new Map(),
      docTermFieldHits: /* @__PURE__ */ new Map()
    };
    for (const l of e) Wm(s, l, r, o);
    return s;
  }
  function Mk(e, r, o, s) {
    Wm(e, r, o, s);
  }
  function Ik(e, r) {
    const o = e.docFieldCount.get(r);
    if (o === void 0) return;
    e.fieldCount -= o, e.docFieldCount.delete(r);
    const s = e.docTermFieldHits.get(r);
    if (s) {
      for (const [l, u] of s) {
        const c = (e.df.get(l) || 0) - u;
        c <= 0 ? e.df.delete(l) : e.df.set(l, c);
      }
      e.docTermFieldHits.delete(r);
    }
  }
  function Jp(e, r) {
    if (r.length === 0) return;
    const o = Array.from(new Set(r)).sort((f, m) => f - m);
    for (const f of o) Ik(e, f);
    const s = (f) => {
      let m = 0, h = o.length;
      for (; m < h; ) {
        const g = m + h >>> 1;
        o[g] < f ? m = g + 1 : h = g;
      }
      return f - m;
    }, l = o[0], u = /* @__PURE__ */ new Map();
    for (const [f, m] of e.docFieldCount) u.set(f > l ? s(f) : f, m);
    e.docFieldCount = u;
    const c = /* @__PURE__ */ new Map();
    for (const [f, m] of e.docTermFieldHits) c.set(f > l ? s(f) : f, m);
    e.docTermFieldHits = c;
  }
  var Sr = class {
    constructor(e, r, o) {
      this.options = {
        ...Se,
        ...r
      }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new ZE(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, o), this._lastQuery = null, this._lastSearcher = null;
    }
    _getSearcher(e) {
      if (this._lastQuery === e) return this._lastSearcher;
      const r = Hl(e, this._invertedIndex ? {
        ...this.options,
        _invertedIndex: this._invertedIndex
      } : this.options);
      return this._lastQuery = e, this._lastSearcher = r, r;
    }
    setCollection(e, r) {
      if (this._docs = e, r && !(r instanceof td)) throw new Error(WE);
      if (this._myIndex = r || Hm(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      }), this.options.useTokenSearch) {
        const o = Tc({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        this._invertedIndex = Nk(this._myIndex.records, this._myIndex.keys.length, o);
      }
      this._invalidateSearcherCache();
    }
    add(e) {
      if (!Dt(e)) return;
      this._docs.push(e);
      const r = this._myIndex.add(e, this._docs.length - 1);
      if (this._invertedIndex && r) {
        const o = Tc({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        Mk(this._invertedIndex, r, this._myIndex.keys.length, o);
      }
      this._invalidateSearcherCache();
    }
    remove(e = () => false) {
      const r = [], o = [];
      for (let s = 0, l = this._docs.length; s < l; s += 1) e(this._docs[s], s) && (r.push(this._docs[s]), o.push(s));
      if (o.length) {
        this._invertedIndex && Jp(this._invertedIndex, o);
        const s = new Set(o);
        this._docs = this._docs.filter((l, u) => !s.has(u)), this._myIndex.removeAll(o), this._invalidateSearcherCache();
      }
      return r;
    }
    removeAt(e) {
      if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw new Error(_c);
      this._invertedIndex && Jp(this._invertedIndex, [
        e
      ]);
      const r = this._docs.splice(e, 1)[0];
      return this._myIndex.removeAt(e), this._invalidateSearcherCache(), r;
    }
    _invalidateSearcherCache() {
      this._lastQuery = null, this._lastSearcher = null;
    }
    getIndex() {
      return this._myIndex;
    }
    search(e, r) {
      const { limit: o = -1 } = r || {}, { includeMatches: s, includeScore: l, shouldSort: u, sortFn: c, ignoreFieldNorm: f } = this.options;
      if (xt(e) && !e.trim()) {
        let g = this._docs.map((y, v) => ({
          item: y,
          refIndex: v
        }));
        return bl(o) && o > -1 && (g = g.slice(0, o)), g;
      }
      const m = bl(o) && o > 0 && xt(e);
      let h;
      if (m) {
        const g = new wk(o);
        xt(this._docs[0]) ? this._searchStringList(e, {
          heap: g,
          ignoreFieldNorm: f
        }) : this._searchObjectList(e, {
          heap: g,
          ignoreFieldNorm: f
        }), h = g.extractSorted(c);
      } else h = xt(e) ? xt(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), vk(h, {
        ignoreFieldNorm: f
      }), u && h.sort(c), bl(o) && o > -1 && (h = h.slice(0, o));
      return Sk(h, this._docs, {
        includeMatches: s,
        includeScore: l
      });
    }
    _searchStringList(e, { heap: r, ignoreFieldNorm: o } = {}) {
      const s = this._getSearcher(e), l = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: u } = this._myIndex, c = r ? null : [];
      return u.forEach(({ v: f, i: m, n: h }) => {
        if (!Dt(f)) return;
        const g = s.searchIn(f);
        if (g.isMatch) {
          const y = {
            score: g.score,
            value: f,
            norm: h,
            indices: g.indices
          };
          l && (y.matchedMask = g.matchedMask, y.matchedTerms = g.matchedTerms, y.termCount = g.termCount);
          const v = [
            y
          ];
          if (!l || this._coversAllTokens(v)) {
            const x = {
              item: f,
              idx: m,
              matches: v
            };
            r ? (x.score = Ac(x.matches, {
              ignoreFieldNorm: o
            }), r.shouldInsert(x.score) && r.insert(x)) : c.push(x);
          }
        }
      }), c;
    }
    _searchLogical(e) {
      const r = Um(e, this.options), o = (c, f, m) => {
        if (!("children" in c)) {
          const { keyId: v, searcher: x } = c;
          let E;
          return v === null ? (E = [], this._myIndex.keys.forEach((S, _) => {
            E.push(...this._findMatches({
              key: S,
              value: f[_],
              searcher: x
            }));
          })) : E = this._findMatches({
            key: this._keyStore.get(v),
            value: this._myIndex.getValueForItemAtKeyId(f, v),
            searcher: x
          }), E && E.length ? [
            {
              idx: m,
              item: f,
              matches: E
            }
          ] : [];
        }
        const { children: h, operator: g } = c, y = [];
        for (let v = 0, x = h.length; v < x; v += 1) {
          const E = h[v], S = o(E, f, m);
          if (S.length) y.push(...S);
          else if (g === Vl.AND) return [];
        }
        return y;
      }, s = this._myIndex.records, l = /* @__PURE__ */ new Map(), u = [];
      return s.forEach(({ $: c, i: f }) => {
        if (Dt(c)) {
          const m = o(r, c, f);
          m.length && (l.has(f) || (l.set(f, {
            idx: f,
            item: c,
            matches: []
          }), u.push(l.get(f))), m.forEach(({ matches: h }) => {
            l.get(f).matches.push(...h);
          }));
        }
      }), u;
    }
    _searchObjectList(e, { heap: r, ignoreFieldNorm: o } = {}) {
      const s = this._getSearcher(e), l = this.options.useTokenSearch && this.options.tokenMatch === "all", { keys: u, records: c } = this._myIndex, f = r ? null : [];
      return c.forEach(({ $: m, i: h }) => {
        if (!Dt(m)) return;
        const g = [];
        let y = false, v = false;
        if (u.forEach((x, E) => {
          const S = this._findMatches({
            key: x,
            value: m[E],
            searcher: s
          });
          S.length ? (g.push(...S), S[0].hasInverse && (v = true)) : y = true;
        }), !(v && y) && g.length && (!l || this._coversAllTokens(g))) {
          const x = {
            idx: h,
            item: m,
            matches: g
          };
          r ? (x.score = Ac(x.matches, {
            ignoreFieldNorm: o
          }), r.shouldInsert(x.score) && r.insert(x)) : f.push(x);
        }
      }), f;
    }
    _findMatches({ key: e, value: r, searcher: o }) {
      if (!Dt(r)) return [];
      const s = [];
      if (xr(r)) r.forEach(({ v: l, i: u, n: c }) => {
        if (!Dt(l)) return;
        const f = o.searchIn(l);
        if (f.isMatch) {
          const m = {
            score: f.score,
            key: e,
            value: l,
            idx: u,
            norm: c,
            indices: f.indices,
            hasInverse: f.hasInverse
          };
          f.termCount !== void 0 && (m.matchedMask = f.matchedMask, m.matchedTerms = f.matchedTerms, m.termCount = f.termCount), s.push(m);
        }
      });
      else {
        const { v: l, n: u } = r, c = o.searchIn(l);
        if (c.isMatch) {
          const f = {
            score: c.score,
            key: e,
            value: l,
            norm: u,
            indices: c.indices,
            hasInverse: c.hasInverse
          };
          c.termCount !== void 0 && (f.matchedMask = c.matchedMask, f.matchedTerms = c.matchedTerms, f.termCount = c.termCount), s.push(f);
        }
      }
      return s;
    }
    _coversAllTokens(e) {
      const r = e.length ? e[0].termCount : void 0;
      if (r === void 0) return true;
      if (r <= 31) {
        let s = 0;
        for (let l = 0; l < e.length; l++) s |= e[l].matchedMask || 0;
        return s === 2 ** r - 1;
      }
      const o = /* @__PURE__ */ new Set();
      for (let s = 0; s < e.length; s++) {
        const l = e[s].matchedTerms;
        if (l) for (const u of l) o.add(u);
      }
      return o.size === r;
    }
  };
  Sr.version = "7.4.2";
  Sr.createIndex = Hm;
  Sr.parseIndex = ok;
  Sr.config = Se;
  Sr.match = function(e, r, o) {
    if (o && o.useTokenSearch) throw new Error(QE);
    return Hl(e, {
      ...Se,
      ...o
    }).searchIn(r);
  };
  Sr.parseQuery = Um;
  od(mk);
  od(_k);
  Sr.use = function(...e) {
    e.forEach((r) => od(r));
  };
  var bk = Sr;
  const Ak = {
    keys: [
      "name",
      "type",
      "id"
    ],
    threshold: 0.32,
    ignoreLocation: true,
    includeScore: true
  }, Tk = [];
  function Rk() {
    const e = Lt((s) => {
      var _a;
      return ((_a = s.model) == null ? void 0 : _a.components) ?? Tk;
    }), r = Te((s) => s.searchQuery), o = $.useMemo(() => new bk(e, Ak), [
      e
    ]);
    return $.useMemo(() => {
      const s = r.trim();
      return s ? o.search(s).map((l) => l.item) : e;
    }, [
      e,
      o,
      r
    ]);
  }
  const Ni = 52, e0 = 288, t0 = 5;
  function Pk({ results: e, onSelect: r }) {
    const o = $.useRef(null), [s, l] = $.useState(0), [u, c] = $.useState(e0), m = mt((E) => E.theme) === "dark";
    $.useEffect(() => {
      const E = o.current;
      if (!E) return;
      const S = new ResizeObserver((_) => {
        for (const N of _) c(N.contentRect.height);
      });
      return S.observe(E), () => S.disconnect();
    }, []);
    const h = $.useCallback(() => {
      const E = o.current;
      E && l(E.scrollTop);
    }, []), g = e.length * Ni, y = Math.max(0, Math.floor(s / Ni) - t0), v = Math.min(e.length, Math.ceil((s + u) / Ni) + t0), x = e.slice(y, v);
    return A.jsx("div", {
      className: `border-t ${m ? "border-white/10" : "border-slate-200"}`,
      children: A.jsx("div", {
        ref: o,
        className: "overflow-y-auto",
        style: {
          height: Math.min(g, e0)
        },
        onScroll: h,
        children: A.jsx("div", {
          style: {
            height: g,
            position: "relative"
          },
          children: x.map((E, S) => {
            const _ = y + S;
            return A.jsxs("button", {
              className: `flex w-full items-center justify-between gap-3 px-3 text-left transition ${m ? "hover:bg-white/5" : "hover:bg-slate-100"}`,
              style: {
                position: "absolute",
                top: _ * Ni,
                left: 0,
                right: 0,
                height: Ni
              },
              onClick: () => r(E.id),
              type: "button",
              children: [
                A.jsxs("span", {
                  className: "min-w-0",
                  children: [
                    A.jsx("span", {
                      className: `block truncate text-sm font-medium ${m ? "text-slate-100" : "text-slate-800"}`,
                      children: E.name
                    }),
                    A.jsx("span", {
                      className: "block font-mono text-[11px] text-slate-500",
                      children: E.id
                    })
                  ]
                }),
                A.jsx("span", {
                  className: `shrink-0 rounded px-2 py-0.5 text-[10px] font-medium uppercase ${m ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-600"}`,
                  children: E.type
                })
              ]
            }, E.id);
          })
        })
      })
    });
  }
  function $k() {
    const [e, r] = $.useState(""), o = Te((h) => h.setSearchQuery), s = Rk(), l = qc(), u = $.useRef(null), f = mt((h) => h.theme) === "dark";
    $.useEffect(() => {
      const h = window.setTimeout(() => o(e), 150);
      return () => window.clearTimeout(h);
    }, [
      o,
      e
    ]), $.useEffect(() => {
      if (!e.trim()) {
        Te.setState({
          highlightedNodeIds: /* @__PURE__ */ new Set(),
          highlightedEdgeIds: /* @__PURE__ */ new Set()
        });
        return;
      }
      const g = new Set(s.map((y) => y.id));
      Te.setState({
        highlightedNodeIds: g,
        highlightedEdgeIds: /* @__PURE__ */ new Set()
      });
    }, [
      s,
      e
    ]), $.useEffect(() => {
      function h(g) {
        var _a, _b, _c2;
        g.key === "/" && !g.ctrlKey && !g.metaKey && document.activeElement !== u.current && (g.preventDefault(), (_a = u.current) == null ? void 0 : _a.focus()), (g.ctrlKey || g.metaKey) && g.key === "k" && (g.preventDefault(), (_b = u.current) == null ? void 0 : _b.focus()), g.key === "Escape" && document.activeElement === u.current && (r(""), o(""), (_c2 = u.current) == null ? void 0 : _c2.blur());
      }
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
    }, [
      o
    ]);
    function m(h) {
      l(h), r(""), o("");
    }
    return A.jsxs(ed, {
      className: "w-[280px] overflow-hidden rounded-lg",
      children: [
        A.jsxs("div", {
          className: "flex items-center gap-2 px-3 py-2.5",
          children: [
            A.jsx("svg", {
              className: `h-4 w-4 shrink-0 ${f ? "text-slate-500" : "text-slate-400"}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: A.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            }),
            A.jsx("input", {
              ref: u,
              className: `w-full border-0 bg-transparent text-sm outline-none ${f ? "text-slate-100 placeholder:text-slate-600" : "text-slate-800 placeholder:text-slate-400"}`,
              onChange: (h) => r(h.target.value),
              placeholder: "Search components... (/)",
              value: e
            }),
            e.trim() ? A.jsx("button", {
              className: `shrink-0 ${f ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`,
              onClick: () => {
                r(""), o("");
              },
              type: "button",
              children: A.jsx("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: A.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            }) : null
          ]
        }),
        e.trim() ? A.jsx(Pk, {
          results: s,
          onSelect: m
        }) : null
      ]
    });
  }
  function zk() {
    const e = mt((o) => o.theme), r = mt((o) => o.toggleTheme);
    return A.jsx("button", {
      className: "flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200 border-black/10 bg-black/5 text-slate-600 hover:bg-black/10 hover:text-slate-800",
      onClick: r,
      title: `Switch to ${e === "dark" ? "light" : "dark"} mode`,
      type: "button",
      children: e === "dark" ? A.jsx("svg", {
        className: "h-4 w-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: A.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        })
      }) : A.jsx("svg", {
        className: "h-4 w-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: A.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        })
      })
    });
  }
  const Dk = "modulepreload", Lk = function(e) {
    return "/" + e;
  }, n0 = {}, Ym = function(r, o, s) {
    let l = Promise.resolve();
    if (o && o.length > 0) {
      let c = function(h) {
        return Promise.all(h.map((g) => Promise.resolve(g).then((y) => ({
          status: "fulfilled",
          value: y
        }), (y) => ({
          status: "rejected",
          reason: y
        }))));
      };
      document.getElementsByTagName("link");
      const f = document.querySelector("meta[property=csp-nonce]"), m = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute("nonce"));
      l = c(o.map((h) => {
        if (h = Lk(h), h in n0) return;
        n0[h] = true;
        const g = h.endsWith(".css"), y = g ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${h}"]${y}`)) return;
        const v = document.createElement("link");
        if (v.rel = g ? "stylesheet" : Dk, g || (v.as = "script"), v.crossOrigin = "", v.href = h, m && v.setAttribute("nonce", m), document.head.appendChild(v), g) return new Promise((x, E) => {
          v.addEventListener("load", x), v.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${h}`)));
        });
      }));
    }
    function u(c) {
      const f = new Event("vite:preloadError", {
        cancelable: true
      });
      if (f.payload = c, window.dispatchEvent(f), !f.defaultPrevented) throw c;
    }
    return l.then((c) => {
      for (const f of c || []) f.status === "rejected" && u(f.reason);
      return r().catch(u);
    });
  }, r0 = {
    component: 0,
    cluster: 1,
    busChannel: 2
  };
  function o0(e) {
    return e.data.kind === "busChannel" ? {
      width: $o,
      height: yr
    } : e.data.kind === "cluster" ? {
      width: Po,
      height: Oi
    } : {
      width: Ro,
      height: wr
    };
  }
  function Ok(e) {
    return e.data.kind === "component" ? e.data.layer ?? 3 : e.data.kind === "busChannel" ? e.data.layer ?? 1 : 4;
  }
  function Fk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) r.set(o.source, (r.get(o.source) ?? 0) + 1), r.set(o.target, (r.get(o.target) ?? 0) + 1);
    return r;
  }
  function i0(e, r) {
    const o = /* @__PURE__ */ new Map(), s = Fk(r);
    for (const h of e) {
      const g = Ok(h), y = o.get(g);
      y ? y.push(h) : o.set(g, [
        h
      ]);
    }
    const l = [], u = [
      ...o.keys()
    ].sort((h, g) => h - g);
    let c = 0;
    for (const h of u) {
      const y = [
        ...o.get(h)
      ].sort((x, E) => {
        const S = (r0[x.data.kind] ?? 99) - (r0[E.data.kind] ?? 99);
        if (S !== 0) return S;
        const _ = (s.get(E.id) ?? 0) - (s.get(x.id) ?? 0);
        return _ !== 0 ? _ : x.id.localeCompare(E.id);
      });
      if (y.every((x) => x.data.kind === "busChannel")) {
        for (const x of y) {
          const { width: E, height: S } = o0(x);
          l.push({
            ...x,
            id: x.id,
            position: {
              x: c,
              y: -S / 2
            }
          });
        }
        c += $o + 120;
      } else {
        const x = y.length, E = x <= 6 ? 1 : x <= 14 ? 2 : x <= 28 ? 3 : x <= 48 ? 4 : x <= 72 ? 5 : j2, S = Math.ceil(y.length / E), _ = F2, N = kc, T = E * _, L = S * N, b = c, X = -L / 2;
        for (let O = 0; O < y.length; O++) {
          const Z = y[O];
          if (!Z) continue;
          const { width: ee, height: G } = o0(Z), V = O % E, K = Math.floor(O / E);
          l.push({
            ...Z,
            id: Z.id,
            position: {
              x: b + V * _,
              y: X + K * N
            }
          });
        }
        c += T + 160;
      }
    }
    const m = -(c - 160) / 2;
    return l.map((h) => ({
      ...h,
      id: h.id,
      position: {
        x: h.position.x + m,
        y: h.position.y
      }
    }));
  }
  function Bk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, s] of Object.entries(e)) r.set(o, {
      category: s.category,
      layer: s.layer,
      groupId: s.groupId
    });
    return r;
  }
  function jk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, s] of Object.entries(e)) r.set(o, {
      connectionType: s.connectionType,
      sourcePortSide: s.sourcePortSide,
      targetPortSide: s.targetPortSide
    });
    return r;
  }
  function Xm(e) {
    const r = {};
    for (const [o, s] of Object.entries(e)) {
      r[o] = {};
      for (const [l, u] of Object.entries(s)) r[o][l] = u;
    }
    return r;
  }
  function Hk(e) {
    return {
      layerConstraints: e.layerConstraints,
      portConstraints: Xm(e.portConstraints),
      groupHints: e.groupHints,
      elkOptions: e.elkOptions
    };
  }
  async function Vk(e) {
    const { preprocessArchitectureWasm: r } = await Ym(async () => {
      const { preprocessArchitectureWasm: s } = await import("./index-Dbilfpvp.js");
      return {
        preprocessArchitectureWasm: s
      };
    }, []), o = await r(JSON.stringify(e));
    return {
      model: o.model,
      componentMetadata: Bk(o.componentMetadata),
      connectionMetadata: jk(o.connectionMetadata),
      groups: o.groups,
      portSides: Xm(o.portSides),
      elkHints: Hk(o.elkHints)
    };
  }
  const Uk = /\d+$/;
  function Ul(e) {
    const r = {};
    for (const o of e) r[o.type] = (r[o.type] ?? 0) + 1;
    return r;
  }
  function Rc(e, r) {
    const o = new Set(e.map((s) => s.id));
    return r.filter((s) => o.has(s.sourceComponentId) || o.has(s.targetComponentId)).length;
  }
  function Wk(e) {
    const r = e.replace(Uk, "").trim(), o = r.split(/[\s_\-]+/);
    return o[o.length - 1] ?? r;
  }
  function Yk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const s = r.get(o.type);
      s ? s.push(o) : r.set(o.type, [
        o
      ]);
    }
    return r;
  }
  function Xk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const s = Wk(o.name), l = r.get(s);
      l ? l.push(o) : r.set(s, [
        o
      ]);
    }
    return r;
  }
  function Gk(e, r) {
    const o = [];
    for (let s = 0; s < e.length; s += r) o.push(e.slice(s, s + r));
    return o;
  }
  function Kk(e) {
    return e <= 12 ? e : e <= 30 ? Math.ceil(e / 3) : e <= 60 ? Math.ceil(e / 4) : Math.ceil(e / 5);
  }
  function Pc(e, r, o, s) {
    var _a, _b, _c2, _d, _e2;
    if (e.length <= 12) return [];
    const l = Xk(e), u = [
      ...l.keys()
    ].sort();
    if (u.length >= 2 && e.length > 24) {
      const h = [];
      for (const g of u) {
        const y = l.get(g);
        if (y.length === 0) continue;
        const v = `${s}:${g.toLowerCase()}`, x = y.length > 12;
        h.push({
          id: v,
          name: y.length > 1 ? `${g} (${y.length})` : ((_a = y[0]) == null ? void 0 : _a.name) ?? g,
          type: ((_b = y[0]) == null ? void 0 : _b.type) ?? "custom",
          depth: o,
          componentIds: y.map((E) => E.id),
          childGroups: x ? Pc(y, r, o + 1, v) : [],
          metadata: {
            componentCount: y.length,
            connectionCount: Rc(y, r),
            typeBreakdown: Ul(y)
          }
        });
      }
      return h;
    }
    const c = Kk(e.length), f = Gk(e, c), m = [];
    for (let h = 0; h < f.length; h++) {
      const g = f[h];
      if (!g || g.length === 0) continue;
      const y = `${s}:part${h}`, v = g.length > 12, x = ((_c2 = g[0]) == null ? void 0 : _c2.name) ?? `Part ${h + 1}`, E = ((_d = g[g.length - 1]) == null ? void 0 : _d.name) ?? x, S = g.length > 2 ? `${x}..${E}` : x;
      m.push({
        id: y,
        name: `${S} (${g.length})`,
        type: ((_e2 = g[0]) == null ? void 0 : _e2.type) ?? "custom",
        depth: o,
        componentIds: g.map((_) => _.id),
        childGroups: v ? Pc(g, r, o + 1, y) : [],
        metadata: {
          componentCount: g.length,
          connectionCount: Rc(g, r),
          typeBreakdown: Ul(g)
        }
      });
    }
    return m;
  }
  function Qk(e) {
    return 1001;
  }
  function Zk(e, r) {
    const o = {
      id: "root",
      name: "Architecture",
      type: "group",
      depth: 0,
      componentIds: e.components.map((u) => u.id),
      childGroups: [],
      metadata: {
        componentCount: e.components.length,
        connectionCount: e.connections.length,
        typeBreakdown: Ul(e.components)
      }
    }, s = Qk(e.components.length);
    if (e.components.length < s) return o;
    const l = Yk(e.components);
    for (const u of U2) {
      const c = l.get(u);
      if (!c || c.length === 0) continue;
      const f = `hierarchy:${u}`, m = c.length > 12, h = {
        id: f,
        name: `${V2[u]} (${c.length})`,
        type: u,
        depth: 1,
        componentIds: c.map((g) => g.id),
        childGroups: m ? Pc(c, e.connections, 2, f) : [],
        metadata: {
          componentCount: c.length,
          connectionCount: Rc(c, e.connections),
          typeBreakdown: Ul(c)
        }
      };
      o.childGroups.push(h);
    }
    return o;
  }
  function qk(e) {
    const r = new Map(e.components.map((o) => [
      o.id,
      0
    ]));
    for (const o of e.connections) r.set(o.sourceComponentId, (r.get(o.sourceComponentId) ?? 0) + 1), r.set(o.targetComponentId, (r.get(o.targetComponentId) ?? 0) + 1);
    return r;
  }
  function Jk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e.connections) {
      let s = r.get(o.sourceComponentId);
      s || (s = /* @__PURE__ */ new Set(), r.set(o.sourceComponentId, s)), s.add(o.id);
      let l = r.get(o.targetComponentId);
      l || (l = /* @__PURE__ */ new Set(), r.set(o.targetComponentId, l)), l.add(o.id);
    }
    return r;
  }
  function s0(e, r) {
    const o = /* @__PURE__ */ new Set();
    for (const s of e) {
      const l = r.get(s);
      if (l) for (const u of l) o.add(u);
    }
    return o.size;
  }
  function eC(e) {
    return e === "bus";
  }
  function tC(e, r, o, s) {
    return {
      id: e.id,
      type: "busChannel",
      position: {
        x: o,
        y: s
      },
      data: {
        kind: "busChannel",
        component: e,
        layer: r
      }
    };
  }
  function nC(e, r, o, s) {
    return {
      id: e.id,
      type: "architecture",
      position: {
        x: o,
        y: s
      },
      data: {
        kind: "component",
        component: e,
        layer: r
      }
    };
  }
  function rC(e, r, o) {
    return {
      id: e.id,
      type: "architecture",
      position: {
        x: r,
        y: o
      },
      data: {
        kind: "cluster",
        cluster: e
      }
    };
  }
  function oC(e, r, o) {
    const s = /* @__PURE__ */ new Map();
    for (const l of e.connections) {
      const u = r.get(l.sourceComponentId), c = r.get(l.targetComponentId);
      if (!u || !c || u === c) continue;
      const f = `${u}->${c}`, m = s.get(f);
      m ? m.count += 1 : s.set(f, {
        connection: l,
        count: 1,
        source: u,
        target: c
      });
    }
    return [
      ...s.values()
    ].map(({ connection: l, count: u, source: c, target: f }) => {
      const m = o == null ? void 0 : o.get(l.id), h = {
        connection: l,
        connectionCount: u,
        connectionType: m == null ? void 0 : m.connectionType
      }, g = c.startsWith("hierarchy:"), y = f.startsWith("hierarchy:");
      return {
        id: u > 1 ? `agg_${c}_to_${f}` : l.id,
        source: c,
        target: f,
        sourceHandle: g ? void 0 : `right:${c}`,
        targetHandle: y ? void 0 : `left:${f}`,
        type: "architecture",
        data: h,
        markerEnd: {
          type: To.ArrowClosed
        }
      };
    });
  }
  function iC(e, r, o, s, l, u) {
    const c = [], f = [];
    if (e.childGroups.length === 0) {
      for (const h of e.componentIds) {
        const g = s.get(h);
        g && (c.push(g), l.set(h, h));
      }
      return {
        visibleComponents: c,
        clusters: f
      };
    }
    if (r.has(e.id)) for (const h of e.childGroups) {
      const g = h.componentIds.length, y = h.childGroups.length > 0;
      if (g <= B2 || !y) for (const v of h.componentIds) {
        const x = s.get(v);
        x && (c.push(x), l.set(v, v));
      }
      else {
        const v = s0(h.componentIds, u), x = {};
        for (const E of h.componentIds) {
          const S = s.get(E);
          S && (x[S.type] = (x[S.type] ?? 0) + 1);
        }
        f.push({
          id: h.id,
          name: h.name,
          type: h.type === "group" ? "custom" : h.type,
          componentIds: h.componentIds,
          componentCount: h.componentIds.length,
          connectionCount: v,
          expanded: false,
          hierarchyPath: h.id.replace("hierarchy:", "").split(":"),
          depth: h.depth,
          typeBreakdown: x
        });
        for (const E of h.componentIds) l.set(E, h.id);
      }
    }
    else {
      const h = s0(e.componentIds, u), g = {};
      for (const y of e.componentIds) {
        const v = s.get(y);
        v && (g[v.type] = (g[v.type] ?? 0) + 1);
      }
      f.push({
        id: e.id,
        name: e.name,
        type: e.type === "group" ? "custom" : e.type,
        componentIds: e.componentIds,
        componentCount: e.componentIds.length,
        connectionCount: h,
        expanded: false,
        hierarchyPath: e.id.replace("hierarchy:", "").split(":"),
        depth: e.depth,
        typeBreakdown: g
      });
      for (const y of e.componentIds) l.set(y, e.id);
    }
    return {
      visibleComponents: c,
      clusters: f
    };
  }
  function sC(e, r, o) {
    var _a;
    const s = [], l = [], u = [];
    for (const h of e) {
      const y = ((_a = o == null ? void 0 : o.componentMetadata.get(h.id)) == null ? void 0 : _a.layer) ?? 3;
      eC(h.type) ? l.push({
        component: h,
        layer: y
      }) : u.push({
        component: h,
        layer: y
      });
    }
    const c = /* @__PURE__ */ new Map();
    for (const h of u) {
      const g = c.get(h.layer);
      g ? g.push(h) : c.set(h.layer, [
        h
      ]);
    }
    const f = [
      ...c.keys()
    ].sort((h, g) => h - g);
    for (const h of f) {
      const g = c.get(h), y = oc[h] ?? h * 300, x = -(g.length * kc / 2) + wr / 2;
      for (let E = 0; E < g.length; E++) {
        const S = g[E];
        if (!S) continue;
        const _ = x + E * kc;
        s.push(nC(S.component, S.layer, y, _));
      }
    }
    const m = /* @__PURE__ */ new Map();
    for (const h of l) {
      const g = m.get(h.layer);
      g ? g.push(h) : m.set(h.layer, [
        h
      ]);
    }
    for (const [h, g] of m) {
      const y = oc[h] ?? h * 300, x = -(g.length * (yr + 40) / 2) + yr / 2;
      for (let E = 0; E < g.length; E++) {
        const S = g[E];
        if (!S) continue;
        const _ = x + E * (yr + 40);
        s.push(tC(S.component, S.layer, y, _));
      }
    }
    for (let h = 0; h < r.length; h++) {
      const g = r[h];
      if (!g) continue;
      const y = oc[4], v = -200 + h * (Po + 80);
      s.push(rC(g, y + 400, v));
    }
    return s;
  }
  function l0(e, r, o) {
    qk(e);
    const s = Zk(e), l = new Map(e.components.map((v) => [
      v.id,
      v
    ])), u = Jk(e), c = r ?? /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), m = [], h = [];
    if (s.childGroups.length === 0) for (const v of s.componentIds) {
      const x = l.get(v);
      x && (m.push(x), f.set(v, v));
    }
    else for (const v of s.childGroups) {
      const x = iC(v, c, e, l, f, u);
      m.push(...x.visibleComponents), h.push(...x.clusters);
    }
    const g = sC(m, h, o), y = oC(e, f, o == null ? void 0 : o.connectionMetadata);
    return {
      nodes: g,
      edges: y
    };
  }
  function a0(e, r) {
    const o = new Map(r.map((s) => [
      s.id,
      s.position
    ]));
    return e.map((s) => {
      const l = o.get(s.id);
      return l ? {
        ...s,
        position: l
      } : s;
    });
  }
  function lC() {
    const e = Lt((m) => m.model), r = be((m) => m.setNodes), o = be((m) => m.setEdges), s = be((m) => m.setLayoutLoading), l = be((m) => m.expandedClusterIds), u = be((m) => m.expansionPath), c = $.useRef(null), f = $.useRef(false);
    $.useEffect(() => {
      if (!e) return;
      const m = e.components.length > W2, g = setTimeout(async () => {
        let y;
        if (m) {
          s(true);
          try {
            const { preprocessArchitectureWasm: S } = await Ym(async () => {
              const { preprocessArchitectureWasm: T } = await import("./index-Dbilfpvp.js");
              return {
                preprocessArchitectureWasm: T
              };
            }, []), _ = new Worker(new URL("/assets/preprocessWorker-DkNNOVJt.js", import.meta.url), {
              type: "module"
            });
            y = await new Promise((T, L) => {
              _.onmessage = (b) => {
                _.terminate(), b.data.result ? T(b.data.result) : L(new Error(b.data.error ?? "Preprocessing failed"));
              }, _.onerror = () => {
                _.terminate(), L(new Error("Worker failed"));
              }, _.postMessage({
                model: e
              });
            });
          } catch {
          }
        } else try {
          y = await Vk(e);
        } catch {
        }
        y && (c.current = y);
        const { nodes: v, edges: x } = l0(e, l, y);
        r(v), o(x);
        const E = i0(v, x);
        r(a0(v, E)), s(false), f.current = true;
      }, 10);
      return () => clearTimeout(g);
    }, [
      e,
      o,
      r,
      s
    ]), $.useEffect(() => {
      if (!e || !f.current) return;
      const { nodes: m, edges: h } = l0(e, l, c.current ?? void 0);
      r(m), o(h);
      const g = i0(m, h);
      r(a0(m, g));
    }, [
      l,
      u,
      e,
      r,
      o
    ]);
  }
  const aC = "http://www.w3.org/2000/svg";
  function id(e) {
    return e.data.kind === "busChannel" ? {
      width: $o,
      height: yr
    } : e.data.kind === "cluster" ? {
      width: Po,
      height: Oi
    } : {
      width: Ro,
      height: wr
    };
  }
  function uC(e) {
    const { width: r, height: o } = id(e);
    return {
      minX: e.position.x,
      minY: e.position.y,
      maxX: e.position.x + r,
      maxY: e.position.y + o
    };
  }
  function cC(e) {
    return e.length === 0 ? null : e.reduce((r, o) => ({
      minX: Math.min(r.minX, o.minX),
      minY: Math.min(r.minY, o.minY),
      maxX: Math.max(r.maxX, o.maxX),
      maxY: Math.max(r.maxY, o.maxY)
    }), {
      ...e[0]
    });
  }
  function Wl(e, r) {
    const { width: o, height: s } = id(e);
    return {
      x: r === "right" ? e.position.x + o : e.position.x,
      y: e.position.y + s / 2
    };
  }
  function dC(e, r) {
    const o = e.map(uC), s = new Map(e.map((l) => [
      l.id,
      l
    ]));
    for (const l of r) {
      const u = s.get(l.source), c = s.get(l.target);
      if (!u || !c) continue;
      const f = Wl(u, "right"), m = Wl(c, "left");
      o.push({
        minX: Math.min(f.x, m.x) - 40,
        minY: Math.min(f.y, m.y) - 40,
        maxX: Math.max(f.x, m.x) + 40,
        maxY: Math.max(f.y, m.y) + 40
      });
    }
    return cC(o);
  }
  function Kt(e, r = {}, o) {
    const s = document.createElementNS(aC, e);
    for (const [l, u] of Object.entries(r)) s.setAttribute(l, u);
    return o != null && (s.textContent = o), s;
  }
  function Re(e, r, o, s, l = {}) {
    const u = Kt("text", {
      x: String(r),
      y: String(o),
      ...l
    }, s);
    return e.appendChild(u), u;
  }
  function zt(e, r) {
    const o = Kt("rect", r);
    return e.appendChild(o), o;
  }
  function It(e, r) {
    return zt(e, {
      rx: "10",
      ry: "10",
      ...r
    });
  }
  const fC = {
    bus: {
      color: "#a78bfa",
      width: 4,
      opacity: 0.72
    },
    interrupt: {
      color: "#f472b6",
      width: 3,
      dash: "6 4",
      opacity: 0.66
    },
    dma: {
      color: "#2dd4bf",
      width: 3.5,
      opacity: 0.66
    },
    clock: {
      color: "#f87171",
      width: 2.5,
      opacity: 0.58
    },
    reset: {
      color: "#fb923c",
      width: 2.5,
      dash: "3 3",
      opacity: 0.58
    },
    debug: {
      color: "#94a3b8",
      width: 2,
      dash: "2 4",
      opacity: 0.54
    },
    data: {
      color: "#4ade80",
      width: 3,
      opacity: 0.62
    },
    control: {
      color: "#facc15",
      width: 2.5,
      dash: "4 2",
      opacity: 0.58
    },
    unknown: {
      color: "#64748b",
      width: 2,
      opacity: 0.46
    }
  }, hC = {
    bus: {
      color: "#7c3aed",
      width: 4,
      opacity: 0.82
    },
    interrupt: {
      color: "#db2777",
      width: 3,
      dash: "6 4",
      opacity: 0.76
    },
    dma: {
      color: "#0d9488",
      width: 3.5,
      opacity: 0.76
    },
    clock: {
      color: "#dc2626",
      width: 2.5,
      opacity: 0.68
    },
    reset: {
      color: "#ea580c",
      width: 2.5,
      dash: "3 3",
      opacity: 0.68
    },
    debug: {
      color: "#475569",
      width: 2,
      dash: "2 4",
      opacity: 0.62
    },
    data: {
      color: "#16a34a",
      width: 3,
      opacity: 0.72
    },
    control: {
      color: "#ca8a04",
      width: 2.5,
      dash: "4 2",
      opacity: 0.68
    },
    unknown: {
      color: "#334155",
      width: 2,
      opacity: 0.56
    }
  };
  function pC(e, r, o) {
    const s = r ? fC : hC;
    return o ? {
      color: r ? "#818cf8" : "#6366f1",
      width: 2,
      dash: "4 3",
      opacity: 0.65
    } : s[e ?? "unknown"] ?? s.unknown;
  }
  function mC(e, r, o, s, l = 8) {
    const u = o - e, c = s - r, f = Math.abs(u), m = Math.abs(c), h = Math.min(l, f / 2, m / 2);
    if (h <= 0 || f < 1 || m < 1) return {
      path: `M ${e} ${r} L ${o} ${s}`,
      labelX: (e + o) / 2,
      labelY: (r + s) / 2
    };
    const g = Math.sign(c) || 1, y = u >= 0 ? e + u / 2 : e + 40;
    return {
      path: `M ${e} ${r} L ${y - h} ${r} Q ${y} ${r} ${y} ${r + g * h} L ${y} ${s - g * h} Q ${y} ${s} ${y - h} ${s} L ${o} ${s}`,
      labelX: y,
      labelY: (r + s) / 2
    };
  }
  function gC(e) {
    var _a, _b;
    return ((_a = e.data) == null ? void 0 : _a.connectionType) ? e.data.connectionType : ((_b = e.data) == null ? void 0 : _b.connectionCount) && e.data.connectionCount > 1 ? `${e.data.connectionCount}x` : "";
  }
  function u0(e) {
    return pt[e] ?? pt.custom;
  }
  function yC(e) {
    var _a;
    const r = Kt("g", {
      class: `node node-${e.data.kind}`
    }), o = id(e), s = o.width;
    if (e.data.kind === "busChannel") {
      const f = o.height, m = u0(e.data.component.type);
      It(r, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: String(s),
        height: String(f),
        fill: `${m.base}26`,
        stroke: `${m.base}66`,
        "stroke-width": "1.2"
      }), zt(r, {
        x: String(e.position.x + 2),
        y: String(e.position.y),
        width: String(s - 4),
        height: "2",
        fill: m.base
      }), zt(r, {
        x: String(e.position.x + 2),
        y: String(e.position.y + f - 2),
        width: String(s - 4),
        height: "2",
        fill: m.base
      });
      const h = e.position.x + s / 2, g = e.position.y + f / 2;
      return Re(r, h, g, e.data.component.name, {
        fill: m.text,
        "font-size": "13px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        transform: `rotate(-90 ${h} ${g})`
      }).setAttribute("font-weight", "600"), r;
    }
    if (e.data.kind === "cluster") {
      const f = o.height, m = e.data.cluster, h = Object.keys(m.typeBreakdown ?? {})[0], g = h ? ((_a = pt[h]) == null ? void 0 : _a.base) ?? "#94a3b8" : "#94a3b8";
      It(r, {
        x: String(e.position.x + 2),
        y: String(e.position.y + 3),
        width: String(s),
        height: String(f),
        rx: "12",
        fill: "rgba(0,0,0,0.10)",
        opacity: "0.20"
      }), It(r, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: String(s),
        height: String(f),
        fill: "#ffffff",
        stroke: "#cbd5e1",
        "stroke-width": "1.2"
      }), zt(r, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: "6",
        height: String(f),
        rx: "12",
        fill: g
      }), Re(r, e.position.x + 16, e.position.y + 22, m.name, {
        fill: "#0f172a",
        "font-size": "14px",
        "font-weight": "700",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Re(r, e.position.x + 16, e.position.y + 42, `${m.componentCount} blocks`, {
        fill: "#475569",
        "font-size": "11px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Re(r, e.position.x + 16, e.position.y + 58, `Connections: ${m.connectionCount}`, {
        fill: "#64748b",
        "font-size": "10px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });
      const y = Object.entries(m.typeBreakdown ?? {}).slice(0, 4);
      let v = e.position.x + 16;
      for (const [x, E] of y) {
        const S = Math.max(56, x.length * 5 + String(E).length * 8 + 18);
        It(r, {
          x: String(v),
          y: String(e.position.y + 72),
          width: String(S),
          height: "18",
          fill: "#f1f5f9",
          stroke: "#e2e8f0",
          "stroke-width": "1"
        }), Re(r, v + 6, e.position.y + 85, `${x}:${E}`, {
          fill: "#475569",
          "font-size": "9px",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), v += S + 6;
      }
      return r;
    }
    const l = e.data.component, u = u0(l.type), c = wr;
    return It(r, {
      x: String(e.position.x + 2),
      y: String(e.position.y + 3),
      width: String(s),
      height: String(c),
      rx: "12",
      fill: "rgba(0,0,0,0.10)",
      opacity: "0.20"
    }), It(r, {
      x: String(e.position.x),
      y: String(e.position.y),
      width: String(s),
      height: String(c),
      fill: "#ffffff",
      stroke: "#cbd5e1",
      "stroke-width": "1.2"
    }), zt(r, {
      x: String(e.position.x),
      y: String(e.position.y),
      width: "6",
      height: String(c),
      rx: "12",
      fill: u.base
    }), It(r, {
      x: String(e.position.x + 16),
      y: String(e.position.y + 12),
      width: "40",
      height: "40",
      fill: `${u.base}18`,
      stroke: `${u.border}88`,
      "stroke-width": "1.2"
    }), Re(r, e.position.x + 36, e.position.y + 36, l.type.slice(0, 3).toUpperCase(), {
      fill: u.border,
      "font-size": "10px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle"
    }), Re(r, e.position.x + 64, e.position.y + 24, l.name, {
      fill: "#0f172a",
      "font-size": "13px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), Re(r, e.position.x + 64, e.position.y + 40, l.id, {
      fill: "#64748b",
      "font-size": "10px",
      "font-family": "SFMono-Regular, ui-monospace, monospace"
    }), r;
  }
  const at = 360, $e = 20;
  function vC(e) {
    return e === "in" ? {
      dot: "#34d399",
      bg: "rgba(16,185,129,0.1)",
      text: "#059669"
    } : e === "out" ? {
      dot: "#fbbf24",
      bg: "rgba(245,158,11,0.1)",
      text: "#d97706"
    } : {
      dot: "#94a3b8",
      bg: "rgba(100,116,139,0.1)",
      text: "#475569"
    };
  }
  function wC(e, r, o, s, l) {
    const u = Kt("g", {
      class: "sidebar-panel"
    });
    if (zt(u, {
      x: String(o),
      y: String(s),
      width: String(at),
      height: String(l),
      fill: r ? "#0b1018" : "#fffcf9",
      stroke: r ? "rgba(255,255,255,0.1)" : "#e5e0d8",
      "stroke-width": "1"
    }), e.data.kind === "busChannel") {
      const S = e.data.component;
      pt[S.type] ?? pt.custom;
      const _ = o + at / 2, N = s + l / 2;
      return Re(u, _, N, `Bus Channel: ${S.name}`, {
        fill: r ? "#e2e8f0" : "#1a1a1a",
        "font-size": "16px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle"
      }), u;
    }
    const c = e.data.kind === "cluster" ? null : e.data.component, f = e.data.kind === "cluster" ? e.data.cluster : null, m = (c == null ? void 0 : c.name) ?? (f == null ? void 0 : f.name) ?? "", h = (c == null ? void 0 : c.type) ?? (f == null ? void 0 : f.type) ?? "custom", g = (c == null ? void 0 : c.id) ?? (f == null ? void 0 : f.id) ?? "", y = pt[h] ?? pt.custom;
    let v = s + $e;
    zt(u, {
      x: String(o),
      y: String(v),
      width: String(at),
      height: "4",
      fill: y.base
    }), v += 16;
    const x = 40;
    It(u, {
      x: String(o + $e),
      y: String(v),
      width: String(x),
      height: String(x),
      fill: `${y.base}20`,
      stroke: `${y.border}40`,
      "stroke-width": "1"
    }), Re(u, o + $e + x / 2, v + x / 2 + 1, h.slice(0, 2).toUpperCase(), {
      fill: y.border,
      "font-size": "12px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle"
    });
    const E = o + $e + x + 12;
    if (It(u, {
      x: String(E),
      y: String(v + 2),
      width: String(h.length * 7 + 16),
      height: "20",
      fill: `${y.border}1a`,
      stroke: `${y.border}40`,
      "stroke-width": "1"
    }), Re(u, E + 8, v + 15, h, {
      fill: y.border,
      "font-size": "10px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-transform": "uppercase"
    }), Re(u, E, v + 38, m, {
      fill: r ? "#f8fafc" : "#0f172a",
      "font-size": "16px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), Re(u, E, v + 56, g, {
      fill: r ? "#64748b" : "#94a3b8",
      "font-size": "11px",
      "font-family": "SFMono-Regular, ui-monospace, monospace"
    }), v += 80, zt(u, {
      x: String(o),
      y: String(v),
      width: String(at),
      height: "1",
      fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
    }), v += 4, c) {
      const S = c.ports.length, _ = c.registers.length, N = v, T = at / 3;
      for (let L = 0; L < 3; L++) {
        const b = o + $e + L * T, X = L === 0 ? "Ports" : L === 1 ? "Registers" : "Connections", O = L === 0 ? S : L === 1 ? _ : S + _;
        Re(u, b + T / 2, N + 4, String(O), {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "18px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "middle"
        }), Re(u, b + T / 2, N + 20, X.toUpperCase(), {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "10px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "middle"
        });
      }
      v += 40, zt(u, {
        x: String(o),
        y: String(v),
        width: String(at),
        height: "1",
        fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
      }), v += 12, Re(u, o + $e, v + 4, "PORTS", {
        fill: r ? "#64748b" : "#94a3b8",
        "font-size": "11px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "letter-spacing": "0.05em"
      }), v += 16;
      for (const L of c.ports) {
        const b = vC(L.direction);
        It(u, {
          x: String(o + $e),
          y: String(v),
          width: String(at - $e * 2),
          height: "28",
          fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
          stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
          "stroke-width": "1"
        }), zt(u, {
          x: String(o + $e + 12),
          y: String(v + 10),
          width: "6",
          height: "6",
          fill: b.dot
        }), Re(u, o + $e + 24, v + 18, L.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), It(u, {
          x: String(o + at - $e - 50),
          y: String(v + 6),
          width: String(L.direction.length * 6 + 12),
          height: "16",
          fill: b.bg
        }), Re(u, o + at - $e - 50 + 6, v + 17, L.direction.toUpperCase(), {
          fill: b.text,
          "font-size": "10px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), L.width && Re(u, o + at - $e - 16, v + 18, `${L.width}b`, {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "11px",
          "font-family": "SFMono-Regular, ui-monospace, monospace",
          "text-anchor": "end"
        }), v += 32;
      }
      if (v += 8, c.registers.length > 0) {
        zt(u, {
          x: String(o),
          y: String(v),
          width: String(at),
          height: "1",
          fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
        }), v += 12, Re(u, o + $e, v + 4, "REGISTERS", {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "11px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "letter-spacing": "0.05em"
        }), v += 16;
        for (const L of c.registers) It(u, {
          x: String(o + $e),
          y: String(v),
          width: String(at - $e * 2),
          height: "28",
          fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
          stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
          "stroke-width": "1"
        }), Re(u, o + $e + 12, v + 18, L.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), L.address && (It(u, {
          x: String(o + at - $e - 70),
          y: String(v + 6),
          width: String(L.address.length * 7 + 12),
          height: "16",
          fill: r ? "rgba(255,255,255,0.05)" : "#f1f5f9"
        }), Re(u, o + at - $e - 70 + 6, v + 17, L.address, {
          fill: r ? "#94a3b8" : "#64748b",
          "font-size": "10px",
          "font-family": "SFMono-Regular, ui-monospace, monospace"
        })), v += 32;
      }
    } else if (f && (Re(u, o + $e, v + 4, "CLUSTER", {
      fill: r ? "#64748b" : "#94a3b8",
      "font-size": "11px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "letter-spacing": "0.05em"
    }), v += 16, Re(u, o + $e, v + 4, `${f.componentCount} components`, {
      fill: r ? "#e2e8f0" : "#334155",
      "font-size": "13px",
      "font-weight": "500",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), v += 20, f.typeBreakdown)) for (const [S, _] of Object.entries(f.typeBreakdown)) {
      const N = pt[S] ?? pt.custom;
      It(u, {
        x: String(o + $e),
        y: String(v),
        width: String(at - $e * 2),
        height: "28",
        fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
        stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
        "stroke-width": "1"
      }), zt(u, {
        x: String(o + $e + 12),
        y: String(v + 10),
        width: "6",
        height: "6",
        fill: N.base
      }), Re(u, o + $e + 24, v + 18, S, {
        fill: r ? "#e2e8f0" : "#334155",
        "font-size": "13px",
        "font-weight": "500",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Re(u, o + at - $e - 12, v + 18, `\xD7${_}`, {
        fill: r ? "#94a3b8" : "#64748b",
        "font-size": "13px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "end"
      }), v += 32;
    }
    return u;
  }
  const xC = "http://www.w3.org/2000/svg";
  function SC(e, r, o) {
    if (o === "full") return {
      nodes: e,
      edges: r
    };
    const s = Te.getState().selectedNodeIds;
    if (s.size === 0) return {
      nodes: e,
      edges: r
    };
    const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
    for (const h of r) (s.has(h.source) || s.has(h.target)) && (l.add(h.id), s.has(h.source) && u.add(h.target), s.has(h.target) && u.add(h.source));
    const c = /* @__PURE__ */ new Set([
      ...s,
      ...u
    ]), f = e.filter((h) => c.has(h.id)), m = r.filter((h) => l.has(h.id));
    return f.length === 0 ? {
      nodes: e,
      edges: r
    } : {
      nodes: f,
      edges: m
    };
  }
  function EC(e) {
    const r = Te.getState().selectedNodeIds;
    if (r.size === 0) return null;
    const o = Te.getState().selectedNodeId;
    if (o) {
      const l = e.find((u) => u.id === o);
      if (l) return l;
    }
    const s = [
      ...r
    ][0];
    return e.find((l) => l.id === s) ?? null;
  }
  function kC(e, r) {
    const o = Kt("marker", {
      id: "export-arrow",
      markerWidth: "10",
      markerHeight: "10",
      refX: "8",
      refY: "5",
      orient: "auto",
      markerUnits: "strokeWidth"
    });
    o.appendChild(Kt("path", {
      d: "M 0 0 L 10 5 L 0 10 z",
      fill: r ? "#67e8f9" : "#0f172a"
    })), e.appendChild(o);
  }
  function CC(e, r, o, s) {
    var _a;
    const l = dC(e, r);
    if (!l) throw new Error("Unable to determine export bounds.");
    const u = 96, c = l.maxX - l.minX + u * 2, f = l.maxY - l.minY + u * 2, m = l.minX - u, h = l.minY - u, g = s ? 24 : 0, y = c + g + (s ? at : 0), v = new Map(e.map((N) => [
      N.id,
      N
    ])), x = Kt("svg", {
      xmlns: xC,
      viewBox: `${m} ${h} ${y} ${f}`,
      style: "width: 100%; height: 100%;",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), E = Kt("defs");
    kC(E, o), x.appendChild(E), zt(x, {
      x: String(m),
      y: String(h),
      width: String(y),
      height: String(f),
      fill: o ? "#020617" : "#f5f0e8"
    });
    const S = Kt("g", {
      class: "edges"
    });
    for (const N of r) {
      const T = v.get(N.source), L = v.get(N.target);
      if (!T || !L) continue;
      const b = N.source.startsWith("hierarchy:") || N.target.startsWith("hierarchy:"), X = pC((_a = N.data) == null ? void 0 : _a.connectionType, o, b), O = Wl(T, "right"), Z = Wl(L, "left"), { path: ee, labelX: G, labelY: V } = mC(O.x, O.y, Z.x, Z.y);
      S.appendChild(Kt("path", {
        d: ee,
        fill: "none",
        stroke: X.color,
        "stroke-width": String(X.width),
        "stroke-opacity": String(X.opacity),
        "stroke-dasharray": X.dash ?? "",
        "marker-end": "url(#export-arrow)"
      }));
      const K = gC(N);
      if (K) {
        const J = Math.max(36, K.length * 7 + 10);
        S.appendChild(Kt("rect", {
          x: String(G - J / 2),
          y: String(V - 10),
          width: String(J),
          height: "18",
          rx: "9",
          fill: o ? "#0f172a" : "#ffffff",
          stroke: o ? "#334155" : "#cbd5e1"
        })), Re(S, G, V + 3, K, {
          fill: o ? "#e2e8f0" : "#334155",
          "font-size": "9px",
          "text-anchor": "middle",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        });
      }
    }
    x.appendChild(S);
    const _ = Kt("g", {
      class: "nodes"
    });
    for (const N of e) _.appendChild(yC(N));
    if (x.appendChild(_), s) {
      const N = EC(e);
      if (N) {
        const T = m + c + g, L = h;
        x.appendChild(wC(N, o, T, L, f));
      }
    }
    return x;
  }
  function _C(e, r) {
    const o = URL.createObjectURL(e), s = document.createElement("a");
    s.href = o, s.download = r, s.click(), setTimeout(() => URL.revokeObjectURL(o), 3e3);
  }
  async function NC(e, r = {}) {
    const o = be.getState(), l = mt.getState().theme === "dark", u = r.scope ?? (Te.getState().selectedNodeId ? "selection" : "full"), { nodes: c, edges: f } = SC(o.nodes, o.edges, u);
    if (c.length === 0) throw new Error("There is nothing to export.");
    const h = CC(c, f, l, u === "selection"), g = new XMLSerializer().serializeToString(h), y = new Blob([
      g
    ], {
      type: "image/svg+xml;charset=utf-8"
    });
    _C(y, `architecture-${u}.svg`);
  }
  function MC() {
    const e = Lt((O) => O.model !== null), r = Lt((O) => {
      var _a;
      return ((_a = O.model) == null ? void 0 : _a.components.length) ?? 0;
    }), o = Lt((O) => {
      var _a;
      return ((_a = O.model) == null ? void 0 : _a.connections.length) ?? 0;
    }), s = Lt((O) => O.clearModel), l = Te((O) => O.selectedNodeId), u = Te((O) => O.selectedNodeIds), c = be((O) => O.sidebarCollapsed), f = be((O) => O.setNodes), m = be((O) => O.setEdges), h = be((O) => O.resetExpansion), g = Te((O) => O.clearSelection), y = Te((O) => O.setSearchQuery), v = mt((O) => O.theme), x = v === "dark", [E, S] = $.useState(false), [_, N] = $.useState(null);
    lC(), $.useEffect(() => {
      document.documentElement.setAttribute("data-theme", v), x ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [
      v,
      x
    ]);
    const T = $.useCallback(() => {
      g(), y(""), f([]), m([]), h(), s();
    }, [
      s,
      g,
      h,
      m,
      f,
      y
    ]), L = $.useCallback(() => {
      if (e) {
        T(), window.setTimeout(() => {
          window.dispatchEvent(new CustomEvent("ipxact:open-file"));
        }, 0);
        return;
      }
      window.dispatchEvent(new CustomEvent("ipxact:open-file"));
    }, [
      T,
      e
    ]), b = $.useCallback(async (O = "full") => {
      S(true), N(null);
      try {
        await NC("svg", {
          scope: O
        });
      } catch (Z) {
        const ee = Z instanceof Error ? Z.message : "Export failed";
        N(ee), setTimeout(() => N(null), 4e3);
      } finally {
        S(false);
      }
    }, []);
    $c({
      onOpenFile: L,
      onExport: () => {
        e && !E && b("full");
      },
      onExportSelection: () => {
        e && u.size > 0 && !E && b("selection");
      }
    }, true);
    const X = `grid h-screen overflow-hidden transition-colors duration-200 ${x ? "bg-shell-950 text-slate-100" : "bg-[#f5f0e8] text-[#1a1a1a]"} ${l && !c ? "grid-cols-[minmax(0,1fr)_360px]" : "grid-cols-[minmax(0,1fr)]"}`;
    return A.jsxs("main", {
      className: X,
      children: [
        A.jsxs("section", {
          className: "relative min-w-0 overflow-hidden",
          children: [
            A.jsxs("div", {
              className: "absolute left-5 top-5 z-10 flex items-start gap-3",
              children: [
                A.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    A.jsx("h1", {
                      className: `text-lg font-semibold ${x ? "text-slate-50" : "text-slate-900"}`,
                      children: "ip-xact"
                    }),
                    e ? A.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition ${x ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200" : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"}`,
                      onClick: T,
                      title: "Load new architecture",
                      type: "button",
                      children: [
                        A.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: A.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          })
                        }),
                        "New"
                      ]
                    }) : null
                  ]
                }),
                e ? A.jsxs(A.Fragment, {
                  children: [
                    A.jsxs("p", {
                      className: "mt-1 text-xs font-medium text-slate-500",
                      children: [
                        r,
                        " components / ",
                        o,
                        " connections"
                      ]
                    }),
                    u.size > 1 ? A.jsxs("p", {
                      className: `mt-0.5 text-[11px] font-medium ${x ? "text-cyan-300/80" : "text-cyan-700"}`,
                      children: [
                        u.size,
                        " selected for export"
                      ]
                    }) : null
                  ]
                }) : null,
                A.jsx($k, {})
              ]
            }),
            A.jsxs("div", {
              className: "absolute right-5 top-5 z-10 flex items-center gap-2",
              children: [
                e ? A.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    A.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${x ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200" : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"}`,
                      disabled: E,
                      onClick: () => void b("full"),
                      type: "button",
                      children: [
                        A.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: A.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          })
                        }),
                        E ? "Exporting..." : "Export SVG"
                      ]
                    }),
                    u.size > 0 && A.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${x ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15" : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"}`,
                      disabled: E,
                      onClick: () => void b("selection"),
                      type: "button",
                      children: [
                        A.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: A.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          })
                        }),
                        "Export Selected (",
                        u.size,
                        ")"
                      ]
                    })
                  ]
                }) : null,
                A.jsx(zk, {})
              ]
            }),
            A.jsx(TE, {}),
            e ? null : A.jsx(FE, {}),
            _ ? A.jsx("div", {
              className: "absolute bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg border shadow-lg text-xs font-medium bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
              children: _
            }) : null
          ]
        }),
        A.jsx(jE, {})
      ]
    });
  }
  function IC() {
    return A.jsx(Zc, {
      children: A.jsx(MC, {})
    });
  }
  document.documentElement.classList.add("dark");
  Fy.createRoot(document.getElementById("root")).render(A.jsx($.StrictMode, {
    children: A.jsx(IC, {})
  }));
})();
