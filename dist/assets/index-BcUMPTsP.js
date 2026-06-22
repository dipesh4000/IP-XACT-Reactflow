let ZE;
let __tla = (async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
    new MutationObserver((l) => {
      for (const u of l) if (u.type === "childList") for (const c of u.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function o(l) {
      const u = {};
      return l.integrity && (u.integrity = l.integrity), l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? u.credentials = "include" : l.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
    }
    function i(l) {
      if (l.ep) return;
      l.ep = true;
      const u = o(l);
      fetch(l.href, u);
    }
  })();
  function i0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Ou = {
    exports: {}
  }, ys = {}, Fu = {
    exports: {}
  }, Ce = {};
  var bh;
  function Ay() {
    if (bh) return Ce;
    bh = 1;
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.iterator;
    function v(N) {
      return N === null || typeof N != "object" ? null : (N = y && N[y] || N["@@iterator"], typeof N == "function" ? N : null);
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
    }, S = Object.assign, k = {};
    function _(N, L, oe) {
      this.props = N, this.context = L, this.refs = k, this.updater = oe || x;
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(N, L) {
      if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, N, L, "setState");
    }, _.prototype.forceUpdate = function(N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    };
    function E() {
    }
    E.prototype = _.prototype;
    function $(N, L, oe) {
      this.props = N, this.context = L, this.refs = k, this.updater = oe || x;
    }
    var b = $.prototype = new E();
    b.constructor = $, S(b, _.prototype), b.isPureReactComponent = true;
    var A = Array.isArray, G = Object.prototype.hasOwnProperty, D = {
      current: null
    }, Q = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function q(N, L, oe) {
      var ne, le = {}, ae = null, he = null;
      if (L != null) for (ne in L.ref !== void 0 && (he = L.ref), L.key !== void 0 && (ae = "" + L.key), L) G.call(L, ne) && !Q.hasOwnProperty(ne) && (le[ne] = L[ne]);
      var me = arguments.length - 2;
      if (me === 1) le.children = oe;
      else if (1 < me) {
        for (var ve = Array(me), Ee = 0; Ee < me; Ee++) ve[Ee] = arguments[Ee + 2];
        le.children = ve;
      }
      if (N && N.defaultProps) for (ne in me = N.defaultProps, me) le[ne] === void 0 && (le[ne] = me[ne]);
      return {
        $$typeof: e,
        type: N,
        key: ae,
        ref: he,
        props: le,
        _owner: D.current
      };
    }
    function Y(N, L) {
      return {
        $$typeof: e,
        type: N.type,
        key: L,
        ref: N.ref,
        props: N.props,
        _owner: N._owner
      };
    }
    function J(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function U(N) {
      var L = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + N.replace(/[=:]/g, function(oe) {
        return L[oe];
      });
    }
    var Z = /\/+/g;
    function ee(N, L) {
      return typeof N == "object" && N !== null && N.key != null ? U("" + N.key) : L.toString(36);
    }
    function C(N, L, oe, ne, le) {
      var ae = typeof N;
      (ae === "undefined" || ae === "boolean") && (N = null);
      var he = false;
      if (N === null) he = true;
      else switch (ae) {
        case "string":
        case "number":
          he = true;
          break;
        case "object":
          switch (N.$$typeof) {
            case e:
            case r:
              he = true;
          }
      }
      if (he) return he = N, le = le(he), N = ne === "" ? "." + ee(he, 0) : ne, A(le) ? (oe = "", N != null && (oe = N.replace(Z, "$&/") + "/"), C(le, L, oe, "", function(Ee) {
        return Ee;
      })) : le != null && (J(le) && (le = Y(le, oe + (!le.key || he && he.key === le.key ? "" : ("" + le.key).replace(Z, "$&/") + "/") + N)), L.push(le)), 1;
      if (he = 0, ne = ne === "" ? "." : ne + ":", A(N)) for (var me = 0; me < N.length; me++) {
        ae = N[me];
        var ve = ne + ee(ae, me);
        he += C(ae, L, oe, ve, le);
      }
      else if (ve = v(N), typeof ve == "function") for (N = ve.call(N), me = 0; !(ae = N.next()).done; ) ae = ae.value, ve = ne + ee(ae, me++), he += C(ae, L, oe, ve, le);
      else if (ae === "object") throw L = String(N), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
      return he;
    }
    function H(N, L, oe) {
      if (N == null) return N;
      var ne = [], le = 0;
      return C(N, ne, "", "", function(ae) {
        return L.call(oe, ae, le++);
      }), ne;
    }
    function O(N) {
      if (N._status === -1) {
        var L = N._result;
        L = L(), L.then(function(oe) {
          (N._status === 0 || N._status === -1) && (N._status = 1, N._result = oe);
        }, function(oe) {
          (N._status === 0 || N._status === -1) && (N._status = 2, N._result = oe);
        }), N._status === -1 && (N._status = 0, N._result = L);
      }
      if (N._status === 1) return N._result.default;
      throw N._result;
    }
    var K = {
      current: null
    }, F = {
      transition: null
    }, R = {
      ReactCurrentDispatcher: K,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: D
    };
    function B() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return Ce.Children = {
      map: H,
      forEach: function(N, L, oe) {
        H(N, function() {
          L.apply(this, arguments);
        }, oe);
      },
      count: function(N) {
        var L = 0;
        return H(N, function() {
          L++;
        }), L;
      },
      toArray: function(N) {
        return H(N, function(L) {
          return L;
        }) || [];
      },
      only: function(N) {
        if (!J(N)) throw Error("React.Children.only expected to receive a single React element child.");
        return N;
      }
    }, Ce.Component = _, Ce.Fragment = o, Ce.Profiler = l, Ce.PureComponent = $, Ce.StrictMode = i, Ce.Suspense = m, Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, Ce.act = B, Ce.cloneElement = function(N, L, oe) {
      if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
      var ne = S({}, N.props), le = N.key, ae = N.ref, he = N._owner;
      if (L != null) {
        if (L.ref !== void 0 && (ae = L.ref, he = D.current), L.key !== void 0 && (le = "" + L.key), N.type && N.type.defaultProps) var me = N.type.defaultProps;
        for (ve in L) G.call(L, ve) && !Q.hasOwnProperty(ve) && (ne[ve] = L[ve] === void 0 && me !== void 0 ? me[ve] : L[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) ne.children = oe;
      else if (1 < ve) {
        me = Array(ve);
        for (var Ee = 0; Ee < ve; Ee++) me[Ee] = arguments[Ee + 2];
        ne.children = me;
      }
      return {
        $$typeof: e,
        type: N.type,
        key: le,
        ref: ae,
        props: ne,
        _owner: he
      };
    }, Ce.createContext = function(N) {
      return N = {
        $$typeof: c,
        _currentValue: N,
        _currentValue2: N,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, N.Provider = {
        $$typeof: u,
        _context: N
      }, N.Consumer = N;
    }, Ce.createElement = q, Ce.createFactory = function(N) {
      var L = q.bind(null, N);
      return L.type = N, L;
    }, Ce.createRef = function() {
      return {
        current: null
      };
    }, Ce.forwardRef = function(N) {
      return {
        $$typeof: d,
        render: N
      };
    }, Ce.isValidElement = J, Ce.lazy = function(N) {
      return {
        $$typeof: p,
        _payload: {
          _status: -1,
          _result: N
        },
        _init: O
      };
    }, Ce.memo = function(N, L) {
      return {
        $$typeof: h,
        type: N,
        compare: L === void 0 ? null : L
      };
    }, Ce.startTransition = function(N) {
      var L = F.transition;
      F.transition = {};
      try {
        N();
      } finally {
        F.transition = L;
      }
    }, Ce.unstable_act = B, Ce.useCallback = function(N, L) {
      return K.current.useCallback(N, L);
    }, Ce.useContext = function(N) {
      return K.current.useContext(N);
    }, Ce.useDebugValue = function() {
    }, Ce.useDeferredValue = function(N) {
      return K.current.useDeferredValue(N);
    }, Ce.useEffect = function(N, L) {
      return K.current.useEffect(N, L);
    }, Ce.useId = function() {
      return K.current.useId();
    }, Ce.useImperativeHandle = function(N, L, oe) {
      return K.current.useImperativeHandle(N, L, oe);
    }, Ce.useInsertionEffect = function(N, L) {
      return K.current.useInsertionEffect(N, L);
    }, Ce.useLayoutEffect = function(N, L) {
      return K.current.useLayoutEffect(N, L);
    }, Ce.useMemo = function(N, L) {
      return K.current.useMemo(N, L);
    }, Ce.useReducer = function(N, L, oe) {
      return K.current.useReducer(N, L, oe);
    }, Ce.useRef = function(N) {
      return K.current.useRef(N);
    }, Ce.useState = function(N) {
      return K.current.useState(N);
    }, Ce.useSyncExternalStore = function(N, L, oe) {
      return K.current.useSyncExternalStore(N, L, oe);
    }, Ce.useTransition = function() {
      return K.current.useTransition();
    }, Ce.version = "18.3.1", Ce;
  }
  var Th;
  function Os() {
    return Th || (Th = 1, Fu.exports = Ay()), Fu.exports;
  }
  var Ah;
  function $y() {
    if (Ah) return ys;
    Ah = 1;
    var e = Os(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function c(d, m, h) {
      var p, y = {}, v = null, x = null;
      h !== void 0 && (v = "" + h), m.key !== void 0 && (v = "" + m.key), m.ref !== void 0 && (x = m.ref);
      for (p in m) i.call(m, p) && !u.hasOwnProperty(p) && (y[p] = m[p]);
      if (d && d.defaultProps) for (p in m = d.defaultProps, m) y[p] === void 0 && (y[p] = m[p]);
      return {
        $$typeof: r,
        type: d,
        key: v,
        ref: x,
        props: y,
        _owner: l.current
      };
    }
    return ys.Fragment = o, ys.jsx = c, ys.jsxs = c, ys;
  }
  var $h;
  function Ry() {
    return $h || ($h = 1, Ou.exports = $y()), Ou.exports;
  }
  var I = Ry(), z = Os();
  const X = i0(z);
  var al = {}, Bu = {
    exports: {}
  }, Mt = {}, ju = {
    exports: {}
  }, Hu = {};
  var Rh;
  function Py() {
    return Rh || (Rh = 1, (function(e) {
      function r(F, R) {
        var B = F.length;
        F.push(R);
        e: for (; 0 < B; ) {
          var N = B - 1 >>> 1, L = F[N];
          if (0 < l(L, R)) F[N] = R, F[B] = L, B = N;
          else break e;
        }
      }
      function o(F) {
        return F.length === 0 ? null : F[0];
      }
      function i(F) {
        if (F.length === 0) return null;
        var R = F[0], B = F.pop();
        if (B !== R) {
          F[0] = B;
          e: for (var N = 0, L = F.length, oe = L >>> 1; N < oe; ) {
            var ne = 2 * (N + 1) - 1, le = F[ne], ae = ne + 1, he = F[ae];
            if (0 > l(le, B)) ae < L && 0 > l(he, le) ? (F[N] = he, F[ae] = B, N = ae) : (F[N] = le, F[ne] = B, N = ne);
            else if (ae < L && 0 > l(he, B)) F[N] = he, F[ae] = B, N = ae;
            else break e;
          }
        }
        return R;
      }
      function l(F, R) {
        var B = F.sortIndex - R.sortIndex;
        return B !== 0 ? B : F.id - R.id;
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var u = performance;
        e.unstable_now = function() {
          return u.now();
        };
      } else {
        var c = Date, d = c.now();
        e.unstable_now = function() {
          return c.now() - d;
        };
      }
      var m = [], h = [], p = 1, y = null, v = 3, x = false, S = false, k = false, _ = typeof setTimeout == "function" ? setTimeout : null, E = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(F) {
        for (var R = o(h); R !== null; ) {
          if (R.callback === null) i(h);
          else if (R.startTime <= F) i(h), R.sortIndex = R.expirationTime, r(m, R);
          else break;
          R = o(h);
        }
      }
      function A(F) {
        if (k = false, b(F), !S) if (o(m) !== null) S = true, O(G);
        else {
          var R = o(h);
          R !== null && K(A, R.startTime - F);
        }
      }
      function G(F, R) {
        S = false, k && (k = false, E(q), q = -1), x = true;
        var B = v;
        try {
          for (b(R), y = o(m); y !== null && (!(y.expirationTime > R) || F && !U()); ) {
            var N = y.callback;
            if (typeof N == "function") {
              y.callback = null, v = y.priorityLevel;
              var L = N(y.expirationTime <= R);
              R = e.unstable_now(), typeof L == "function" ? y.callback = L : y === o(m) && i(m), b(R);
            } else i(m);
            y = o(m);
          }
          if (y !== null) var oe = true;
          else {
            var ne = o(h);
            ne !== null && K(A, ne.startTime - R), oe = false;
          }
          return oe;
        } finally {
          y = null, v = B, x = false;
        }
      }
      var D = false, Q = null, q = -1, Y = 5, J = -1;
      function U() {
        return !(e.unstable_now() - J < Y);
      }
      function Z() {
        if (Q !== null) {
          var F = e.unstable_now();
          J = F;
          var R = true;
          try {
            R = Q(true, F);
          } finally {
            R ? ee() : (D = false, Q = null);
          }
        } else D = false;
      }
      var ee;
      if (typeof $ == "function") ee = function() {
        $(Z);
      };
      else if (typeof MessageChannel < "u") {
        var C = new MessageChannel(), H = C.port2;
        C.port1.onmessage = Z, ee = function() {
          H.postMessage(null);
        };
      } else ee = function() {
        _(Z, 0);
      };
      function O(F) {
        Q = F, D || (D = true, ee());
      }
      function K(F, R) {
        q = _(function() {
          F(e.unstable_now());
        }, R);
      }
      e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
        F.callback = null;
      }, e.unstable_continueExecution = function() {
        S || x || (S = true, O(G));
      }, e.unstable_forceFrameRate = function(F) {
        0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < F ? Math.floor(1e3 / F) : 5;
      }, e.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, e.unstable_getFirstCallbackNode = function() {
        return o(m);
      }, e.unstable_next = function(F) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var R = 3;
            break;
          default:
            R = v;
        }
        var B = v;
        v = R;
        try {
          return F();
        } finally {
          v = B;
        }
      }, e.unstable_pauseExecution = function() {
      }, e.unstable_requestPaint = function() {
      }, e.unstable_runWithPriority = function(F, R) {
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
          return R();
        } finally {
          v = B;
        }
      }, e.unstable_scheduleCallback = function(F, R, B) {
        var N = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? N + B : N) : B = N, F) {
          case 1:
            var L = -1;
            break;
          case 2:
            L = 250;
            break;
          case 5:
            L = 1073741823;
            break;
          case 4:
            L = 1e4;
            break;
          default:
            L = 5e3;
        }
        return L = B + L, F = {
          id: p++,
          callback: R,
          priorityLevel: F,
          startTime: B,
          expirationTime: L,
          sortIndex: -1
        }, B > N ? (F.sortIndex = B, r(h, F), o(m) === null && F === o(h) && (k ? (E(q), q = -1) : k = true, K(A, B - N))) : (F.sortIndex = L, r(m, F), S || x || (S = true, O(G))), F;
      }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function(F) {
        var R = v;
        return function() {
          var B = v;
          v = R;
          try {
            return F.apply(this, arguments);
          } finally {
            v = B;
          }
        };
      };
    })(Hu)), Hu;
  }
  var Ph;
  function Ly() {
    return Ph || (Ph = 1, ju.exports = Py()), ju.exports;
  }
  var Lh;
  function Dy() {
    if (Lh) return Mt;
    Lh = 1;
    var e = Os(), r = Ly();
    function o(t) {
      for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++) n += "&args[]=" + encodeURIComponent(arguments[s]);
      return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var i = /* @__PURE__ */ new Set(), l = {};
    function u(t, n) {
      c(t, n), c(t + "Capture", n);
    }
    function c(t, n) {
      for (l[t] = n, t = 0; t < n.length; t++) i.add(n[t]);
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, y = {};
    function v(t) {
      return m.call(y, t) ? true : m.call(p, t) ? false : h.test(t) ? y[t] = true : (p[t] = true, false);
    }
    function x(t, n, s, a) {
      if (s !== null && s.type === 0) return false;
      switch (typeof n) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return a ? false : s !== null ? !s.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
          return false;
      }
    }
    function S(t, n, s, a) {
      if (n === null || typeof n > "u" || x(t, n, s, a)) return true;
      if (a) return false;
      if (s !== null) switch (s.type) {
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
    function k(t, n, s, a, f, g, w) {
      this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = f, this.mustUseProperty = s, this.propertyName = t, this.type = n, this.sanitizeURL = g, this.removeEmptyString = w;
    }
    var _ = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
      _[t] = new k(t, 0, false, t, null, false, false);
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
      _[n] = new k(n, 1, false, t[1], null, false, false);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(t) {
      _[t] = new k(t, 2, false, t.toLowerCase(), null, false, false);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(t) {
      _[t] = new k(t, 2, false, t, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
      _[t] = new k(t, 3, false, t.toLowerCase(), null, false, false);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(t) {
      _[t] = new k(t, 3, true, t, null, false, false);
    }), [
      "capture",
      "download"
    ].forEach(function(t) {
      _[t] = new k(t, 4, false, t, null, false, false);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(t) {
      _[t] = new k(t, 6, false, t, null, false, false);
    }), [
      "rowSpan",
      "start"
    ].forEach(function(t) {
      _[t] = new k(t, 5, false, t.toLowerCase(), null, false, false);
    });
    var E = /[\-:]([a-z])/g;
    function $(t) {
      return t[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
      var n = t.replace(E, $);
      _[n] = new k(n, 1, false, t, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
      var n = t.replace(E, $);
      _[n] = new k(n, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(t) {
      var n = t.replace(E, $);
      _[n] = new k(n, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
    }), [
      "tabIndex",
      "crossOrigin"
    ].forEach(function(t) {
      _[t] = new k(t, 1, false, t.toLowerCase(), null, false, false);
    }), _.xlinkHref = new k("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
      "src",
      "href",
      "action",
      "formAction"
    ].forEach(function(t) {
      _[t] = new k(t, 1, false, t.toLowerCase(), null, true, true);
    });
    function b(t, n, s, a) {
      var f = _.hasOwnProperty(n) ? _[n] : null;
      (f !== null ? f.type !== 0 : a || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (S(n, s, f, a) && (s = null), a || f === null ? v(n) && (s === null ? t.removeAttribute(n) : t.setAttribute(n, "" + s)) : f.mustUseProperty ? t[f.propertyName] = s === null ? f.type === 3 ? false : "" : s : (n = f.attributeName, a = f.attributeNamespace, s === null ? t.removeAttribute(n) : (f = f.type, s = f === 3 || f === 4 && s === true ? "" : "" + s, a ? t.setAttributeNS(a, n, s) : t.setAttribute(n, s))));
    }
    var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, G = Symbol.for("react.element"), D = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), U = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), F = Symbol.iterator;
    function R(t) {
      return t === null || typeof t != "object" ? null : (t = F && t[F] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var B = Object.assign, N;
    function L(t) {
      if (N === void 0) try {
        throw Error();
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        N = n && n[1] || "";
      }
      return `
` + N + t;
    }
    var oe = false;
    function ne(t, n) {
      if (!t || oe) return "";
      oe = true;
      var s = Error.prepareStackTrace;
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
          } catch (W) {
            var a = W;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (W) {
            a = W;
          }
          t.call(n.prototype);
        }
        else {
          try {
            throw Error();
          } catch (W) {
            a = W;
          }
          t();
        }
      } catch (W) {
        if (W && a && typeof W.stack == "string") {
          for (var f = W.stack.split(`
`), g = a.stack.split(`
`), w = f.length - 1, M = g.length - 1; 1 <= w && 0 <= M && f[w] !== g[M]; ) M--;
          for (; 1 <= w && 0 <= M; w--, M--) if (f[w] !== g[M]) {
            if (w !== 1 || M !== 1) do
              if (w--, M--, 0 > M || f[w] !== g[M]) {
                var T = `
` + f[w].replace(" at new ", " at ");
                return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
              }
            while (1 <= w && 0 <= M);
            break;
          }
        }
      } finally {
        oe = false, Error.prepareStackTrace = s;
      }
      return (t = t ? t.displayName || t.name : "") ? L(t) : "";
    }
    function le(t) {
      switch (t.tag) {
        case 5:
          return L(t.type);
        case 16:
          return L("Lazy");
        case 13:
          return L("Suspense");
        case 19:
          return L("SuspenseList");
        case 0:
        case 2:
        case 15:
          return t = ne(t.type, false), t;
        case 11:
          return t = ne(t.type.render, false), t;
        case 1:
          return t = ne(t.type, true), t;
        default:
          return "";
      }
    }
    function ae(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case Q:
          return "Fragment";
        case D:
          return "Portal";
        case Y:
          return "Profiler";
        case q:
          return "StrictMode";
        case ee:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case U:
          return (t.displayName || "Context") + ".Consumer";
        case J:
          return (t._context.displayName || "Context") + ".Provider";
        case Z:
          var n = t.render;
          return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case H:
          return n = t.displayName || null, n !== null ? n : ae(t.type) || "Memo";
        case O:
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
          return n === q ? "StrictMode" : "Mode";
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
    function Ee(t) {
      var n = ve(t) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(t.constructor.prototype, n), a = "" + t[n];
      if (!t.hasOwnProperty(n) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
        var f = s.get, g = s.set;
        return Object.defineProperty(t, n, {
          configurable: true,
          get: function() {
            return f.call(this);
          },
          set: function(w) {
            a = "" + w, g.call(this, w);
          }
        }), Object.defineProperty(t, n, {
          enumerable: s.enumerable
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
      t._valueTracker || (t._valueTracker = Ee(t));
    }
    function Ue(t) {
      if (!t) return false;
      var n = t._valueTracker;
      if (!n) return true;
      var s = n.getValue(), a = "";
      return t && (a = ve(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== s ? (n.setValue(t), true) : false;
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
      var s = n.checked;
      return B({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: s ?? t._wrapperState.initialChecked
      });
    }
    function Oe(t, n) {
      var s = n.defaultValue == null ? "" : n.defaultValue, a = n.checked != null ? n.checked : n.defaultChecked;
      s = me(n.value != null ? n.value : s), t._wrapperState = {
        initialChecked: a,
        initialValue: s,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
      };
    }
    function dt(t, n) {
      n = n.checked, n != null && b(t, "checked", n, false);
    }
    function Me(t, n) {
      dt(t, n);
      var s = me(n.value), a = n.type;
      if (s != null) a === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
      else if (a === "submit" || a === "reset") {
        t.removeAttribute("value");
        return;
      }
      n.hasOwnProperty("value") ? qe(t, n.type, s) : n.hasOwnProperty("defaultValue") && qe(t, n.type, me(n.defaultValue)), n.checked == null && n.defaultChecked != null && (t.defaultChecked = !!n.defaultChecked);
    }
    function ye(t, n, s) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var a = n.type;
        if (!(a !== "submit" && a !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + t._wrapperState.initialValue, s || n === t.value || (t.value = n), t.defaultValue = n;
      }
      s = t.name, s !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, s !== "" && (t.name = s);
    }
    function qe(t, n, s) {
      (n !== "number" || Ke(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s));
    }
    var gt = Array.isArray;
    function Ft(t, n, s, a) {
      if (t = t.options, n) {
        n = {};
        for (var f = 0; f < s.length; f++) n["$" + s[f]] = true;
        for (s = 0; s < t.length; s++) f = n.hasOwnProperty("$" + t[s].value), t[s].selected !== f && (t[s].selected = f), f && a && (t[s].defaultSelected = true);
      } else {
        for (s = "" + me(s), n = null, f = 0; f < t.length; f++) {
          if (t[f].value === s) {
            t[f].selected = true, a && (t[f].defaultSelected = true);
            return;
          }
          n !== null || t[f].disabled || (n = t[f]);
        }
        n !== null && (n.selected = true);
      }
    }
    function pn(t, n) {
      if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
      return B({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
      });
    }
    function Nn(t, n) {
      var s = n.value;
      if (s == null) {
        if (s = n.children, n = n.defaultValue, s != null) {
          if (n != null) throw Error(o(92));
          if (gt(s)) {
            if (1 < s.length) throw Error(o(93));
            s = s[0];
          }
          n = s;
        }
        n == null && (n = ""), s = n;
      }
      t._wrapperState = {
        initialValue: me(s)
      };
    }
    function Bt(t, n) {
      var s = me(n.value), a = me(n.defaultValue);
      s != null && (s = "" + s, s !== t.value && (t.value = s), n.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)), a != null && (t.defaultValue = "" + a);
    }
    function Mn(t) {
      var n = t.textContent;
      n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n);
    }
    function mn(t) {
      switch (t) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Jt(t, n) {
      return t == null || t === "http://www.w3.org/1999/xhtml" ? mn(n) : t === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
    }
    var en, In = (function(t) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, s, a, f) {
        MSApp.execUnsafeLocalFunction(function() {
          return t(n, s, a, f);
        });
      } : t;
    })(function(t, n) {
      if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = n;
      else {
        for (en = en || document.createElement("div"), en.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = en.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
        for (; n.firstChild; ) t.appendChild(n.firstChild);
      }
    });
    function tn(t, n) {
      if (n) {
        var s = t.firstChild;
        if (s && s === t.lastChild && s.nodeType === 3) {
          s.nodeValue = n;
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
    function gn(t, n, s) {
      return n == null || typeof n == "boolean" || n === "" ? "" : s || typeof n != "number" || n === 0 || We.hasOwnProperty(t) && We[t] ? ("" + n).trim() : n + "px";
    }
    function yn(t, n) {
      t = t.style;
      for (var s in n) if (n.hasOwnProperty(s)) {
        var a = s.indexOf("--") === 0, f = gn(s, n[s], a);
        s === "float" && (s = "cssFloat"), a ? t.setProperty(s, f) : t[s] = f;
      }
    }
    var Wn = B({
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
        if (Wn[t] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(o(137, t));
        if (n.dangerouslySetInnerHTML != null) {
          if (n.children != null) throw Error(o(60));
          if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(o(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(o(62));
      }
    }
    function nn(t, n) {
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
    var wr = null;
    function xr(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var bn = null, vn = null, Tn = null;
    function wn(t) {
      if (t = ns(t)) {
        if (typeof bn != "function") throw Error(o(280));
        var n = t.stateNode;
        n && (n = Ei(n), bn(t.stateNode, t.type, n));
      }
    }
    function Vs(t) {
      vn ? Tn ? Tn.push(t) : Tn = [
        t
      ] : vn = t;
    }
    function Us() {
      if (vn) {
        var t = vn, n = Tn;
        if (Tn = vn = null, wn(t), n) for (t = 0; t < n.length; t++) wn(n[t]);
      }
    }
    function Ws(t, n) {
      return t(n);
    }
    function Ys() {
    }
    var Ro = false;
    function Gs(t, n, s) {
      if (Ro) return t(n, s);
      Ro = true;
      try {
        return Ws(t, n, s);
      } finally {
        Ro = false, (vn !== null || Tn !== null) && (Ys(), Us());
      }
    }
    function Sr(t, n) {
      var s = t.stateNode;
      if (s === null) return null;
      var a = Ei(s);
      if (a === null) return null;
      s = a[n];
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
      if (s && typeof s != "function") throw Error(o(231, n, typeof s));
      return s;
    }
    var Po = false;
    if (d) try {
      var kr = {};
      Object.defineProperty(kr, "passive", {
        get: function() {
          Po = true;
        }
      }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
    } catch {
      Po = false;
    }
    function Jl(t, n, s, a, f, g, w, M, T) {
      var W = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(s, W);
      } catch (re) {
        this.onError(re);
      }
    }
    var Er = false, Yr = null, Gr = false, Lo = null, ea = {
      onError: function(t) {
        Er = true, Yr = t;
      }
    };
    function ta(t, n, s, a, f, g, w, M, T) {
      Er = false, Yr = null, Jl.apply(ea, arguments);
    }
    function Xs(t, n, s, a, f, g, w, M, T) {
      if (ta.apply(this, arguments), Er) {
        if (Er) {
          var W = Yr;
          Er = false, Yr = null;
        } else throw Error(o(198));
        Gr || (Gr = true, Lo = W);
      }
    }
    function An(t) {
      var n = t, s = t;
      if (t.alternate) for (; n.return; ) n = n.return;
      else {
        t = n;
        do
          n = t, (n.flags & 4098) !== 0 && (s = n.return), t = n.return;
        while (t);
      }
      return n.tag === 3 ? s : null;
    }
    function Ks(t) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
      }
      return null;
    }
    function Qs(t) {
      if (An(t) !== t) throw Error(o(188));
    }
    function na(t) {
      var n = t.alternate;
      if (!n) {
        if (n = An(t), n === null) throw Error(o(188));
        return n !== t ? null : t;
      }
      for (var s = t, a = n; ; ) {
        var f = s.return;
        if (f === null) break;
        var g = f.alternate;
        if (g === null) {
          if (a = f.return, a !== null) {
            s = a;
            continue;
          }
          break;
        }
        if (f.child === g.child) {
          for (g = f.child; g; ) {
            if (g === s) return Qs(f), t;
            if (g === a) return Qs(f), n;
            g = g.sibling;
          }
          throw Error(o(188));
        }
        if (s.return !== a.return) s = f, a = g;
        else {
          for (var w = false, M = f.child; M; ) {
            if (M === s) {
              w = true, s = f, a = g;
              break;
            }
            if (M === a) {
              w = true, a = f, s = g;
              break;
            }
            M = M.sibling;
          }
          if (!w) {
            for (M = g.child; M; ) {
              if (M === s) {
                w = true, s = g, a = f;
                break;
              }
              if (M === a) {
                w = true, a = g, s = f;
                break;
              }
              M = M.sibling;
            }
            if (!w) throw Error(o(189));
          }
        }
        if (s.alternate !== a) throw Error(o(190));
      }
      if (s.tag !== 3) throw Error(o(188));
      return s.stateNode.current === s ? t : n;
    }
    function Zs(t) {
      return t = na(t), t !== null ? qs(t) : null;
    }
    function qs(t) {
      if (t.tag === 5 || t.tag === 6) return t;
      for (t = t.child; t !== null; ) {
        var n = qs(t);
        if (n !== null) return n;
        t = t.sibling;
      }
      return null;
    }
    var Js = r.unstable_scheduleCallback, ei = r.unstable_cancelCallback, ti = r.unstable_shouldYield, ra = r.unstable_requestPaint, Be = r.unstable_now, oa = r.unstable_getCurrentPriorityLevel, Do = r.unstable_ImmediatePriority, ni = r.unstable_UserBlockingPriority, Xr = r.unstable_NormalPriority, ri = r.unstable_LowPriority, oi = r.unstable_IdlePriority, Kr = null, Ht = null;
    function zo(t) {
      if (Ht && typeof Ht.onCommitFiberRoot == "function") try {
        Ht.onCommitFiberRoot(Kr, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
    }
    var rn = Math.clz32 ? Math.clz32 : Km, Gm = Math.log, Xm = Math.LN2;
    function Km(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Gm(t) / Xm | 0) | 0;
    }
    var si = 64, ii = 4194304;
    function Oo(t) {
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
    function li(t, n) {
      var s = t.pendingLanes;
      if (s === 0) return 0;
      var a = 0, f = t.suspendedLanes, g = t.pingedLanes, w = s & 268435455;
      if (w !== 0) {
        var M = w & ~f;
        M !== 0 ? a = Oo(M) : (g &= w, g !== 0 && (a = Oo(g)));
      } else w = s & ~f, w !== 0 ? a = Oo(w) : g !== 0 && (a = Oo(g));
      if (a === 0) return 0;
      if (n !== 0 && n !== a && (n & f) === 0 && (f = a & -a, g = n & -n, f >= g || f === 16 && (g & 4194240) !== 0)) return n;
      if ((a & 4) !== 0 && (a |= s & 16), n = t.entangledLanes, n !== 0) for (t = t.entanglements, n &= a; 0 < n; ) s = 31 - rn(n), f = 1 << s, a |= t[s], n &= ~f;
      return a;
    }
    function Qm(t, n) {
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
    function Zm(t, n) {
      for (var s = t.suspendedLanes, a = t.pingedLanes, f = t.expirationTimes, g = t.pendingLanes; 0 < g; ) {
        var w = 31 - rn(g), M = 1 << w, T = f[w];
        T === -1 ? ((M & s) === 0 || (M & a) !== 0) && (f[w] = Qm(M, n)) : T <= n && (t.expiredLanes |= M), g &= ~M;
      }
    }
    function sa(t) {
      return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
    }
    function sd() {
      var t = si;
      return si <<= 1, (si & 4194240) === 0 && (si = 64), t;
    }
    function ia(t) {
      for (var n = [], s = 0; 31 > s; s++) n.push(t);
      return n;
    }
    function Fo(t, n, s) {
      t.pendingLanes |= n, n !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, n = 31 - rn(n), t[n] = s;
    }
    function qm(t, n) {
      var s = t.pendingLanes & ~n;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= n, t.mutableReadLanes &= n, t.entangledLanes &= n, n = t.entanglements;
      var a = t.eventTimes;
      for (t = t.expirationTimes; 0 < s; ) {
        var f = 31 - rn(s), g = 1 << f;
        n[f] = 0, a[f] = -1, t[f] = -1, s &= ~g;
      }
    }
    function la(t, n) {
      var s = t.entangledLanes |= n;
      for (t = t.entanglements; s; ) {
        var a = 31 - rn(s), f = 1 << a;
        f & n | t[a] & n && (t[a] |= n), s &= ~f;
      }
    }
    var Ae = 0;
    function id(t) {
      return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var ld, aa, ad, ud, cd, ua = false, ai = [], Yn = null, Gn = null, Xn = null, Bo = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new Map(), Kn = [], Jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function dd(t, n) {
      switch (t) {
        case "focusin":
        case "focusout":
          Yn = null;
          break;
        case "dragenter":
        case "dragleave":
          Gn = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout":
          Bo.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          jo.delete(n.pointerId);
      }
    }
    function Ho(t, n, s, a, f, g) {
      return t === null || t.nativeEvent !== g ? (t = {
        blockedOn: n,
        domEventName: s,
        eventSystemFlags: a,
        nativeEvent: g,
        targetContainers: [
          f
        ]
      }, n !== null && (n = ns(n), n !== null && aa(n)), t) : (t.eventSystemFlags |= a, n = t.targetContainers, f !== null && n.indexOf(f) === -1 && n.push(f), t);
    }
    function eg(t, n, s, a, f) {
      switch (n) {
        case "focusin":
          return Yn = Ho(Yn, t, n, s, a, f), true;
        case "dragenter":
          return Gn = Ho(Gn, t, n, s, a, f), true;
        case "mouseover":
          return Xn = Ho(Xn, t, n, s, a, f), true;
        case "pointerover":
          var g = f.pointerId;
          return Bo.set(g, Ho(Bo.get(g) || null, t, n, s, a, f)), true;
        case "gotpointercapture":
          return g = f.pointerId, jo.set(g, Ho(jo.get(g) || null, t, n, s, a, f)), true;
      }
      return false;
    }
    function fd(t) {
      var n = Cr(t.target);
      if (n !== null) {
        var s = An(n);
        if (s !== null) {
          if (n = s.tag, n === 13) {
            if (n = Ks(s), n !== null) {
              t.blockedOn = n, cd(t.priority, function() {
                ad(s);
              });
              return;
            }
          } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function ui(t) {
      if (t.blockedOn !== null) return false;
      for (var n = t.targetContainers; 0 < n.length; ) {
        var s = da(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
        if (s === null) {
          s = t.nativeEvent;
          var a = new s.constructor(s.type, s);
          wr = a, s.target.dispatchEvent(a), wr = null;
        } else return n = ns(s), n !== null && aa(n), t.blockedOn = s, false;
        n.shift();
      }
      return true;
    }
    function hd(t, n, s) {
      ui(t) && s.delete(n);
    }
    function tg() {
      ua = false, Yn !== null && ui(Yn) && (Yn = null), Gn !== null && ui(Gn) && (Gn = null), Xn !== null && ui(Xn) && (Xn = null), Bo.forEach(hd), jo.forEach(hd);
    }
    function Vo(t, n) {
      t.blockedOn === n && (t.blockedOn = null, ua || (ua = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, tg)));
    }
    function Uo(t) {
      function n(f) {
        return Vo(f, t);
      }
      if (0 < ai.length) {
        Vo(ai[0], t);
        for (var s = 1; s < ai.length; s++) {
          var a = ai[s];
          a.blockedOn === t && (a.blockedOn = null);
        }
      }
      for (Yn !== null && Vo(Yn, t), Gn !== null && Vo(Gn, t), Xn !== null && Vo(Xn, t), Bo.forEach(n), jo.forEach(n), s = 0; s < Kn.length; s++) a = Kn[s], a.blockedOn === t && (a.blockedOn = null);
      for (; 0 < Kn.length && (s = Kn[0], s.blockedOn === null); ) fd(s), s.blockedOn === null && Kn.shift();
    }
    var Qr = A.ReactCurrentBatchConfig, ci = true;
    function ng(t, n, s, a) {
      var f = Ae, g = Qr.transition;
      Qr.transition = null;
      try {
        Ae = 1, ca(t, n, s, a);
      } finally {
        Ae = f, Qr.transition = g;
      }
    }
    function rg(t, n, s, a) {
      var f = Ae, g = Qr.transition;
      Qr.transition = null;
      try {
        Ae = 4, ca(t, n, s, a);
      } finally {
        Ae = f, Qr.transition = g;
      }
    }
    function ca(t, n, s, a) {
      if (ci) {
        var f = da(t, n, s, a);
        if (f === null) Ia(t, n, a, di, s), dd(t, a);
        else if (eg(f, t, n, s, a)) a.stopPropagation();
        else if (dd(t, a), n & 4 && -1 < Jm.indexOf(t)) {
          for (; f !== null; ) {
            var g = ns(f);
            if (g !== null && ld(g), g = da(t, n, s, a), g === null && Ia(t, n, a, di, s), g === f) break;
            f = g;
          }
          f !== null && a.stopPropagation();
        } else Ia(t, n, a, null, s);
      }
    }
    var di = null;
    function da(t, n, s, a) {
      if (di = null, t = xr(a), t = Cr(t), t !== null) if (n = An(t), n === null) t = null;
      else if (s = n.tag, s === 13) {
        if (t = Ks(n), t !== null) return t;
        t = null;
      } else if (s === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else n !== t && (t = null);
      return di = t, null;
    }
    function pd(t) {
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
          switch (oa()) {
            case Do:
              return 1;
            case ni:
              return 4;
            case Xr:
            case ri:
              return 16;
            case oi:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Qn = null, fa = null, fi = null;
    function md() {
      if (fi) return fi;
      var t, n = fa, s = n.length, a, f = "value" in Qn ? Qn.value : Qn.textContent, g = f.length;
      for (t = 0; t < s && n[t] === f[t]; t++) ;
      var w = s - t;
      for (a = 1; a <= w && n[s - a] === f[g - a]; a++) ;
      return fi = f.slice(t, 1 < a ? 1 - a : void 0);
    }
    function hi(t) {
      var n = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function pi() {
      return true;
    }
    function gd() {
      return false;
    }
    function Tt(t) {
      function n(s, a, f, g, w) {
        this._reactName = s, this._targetInst = f, this.type = a, this.nativeEvent = g, this.target = w, this.currentTarget = null;
        for (var M in t) t.hasOwnProperty(M) && (s = t[M], this[M] = s ? s(g) : g[M]);
        return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === false) ? pi : gd, this.isPropagationStopped = gd, this;
      }
      return B(n.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var s = this.nativeEvent;
          s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = false), this.isDefaultPrevented = pi);
        },
        stopPropagation: function() {
          var s = this.nativeEvent;
          s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = true), this.isPropagationStopped = pi);
        },
        persist: function() {
        },
        isPersistent: pi
      }), n;
    }
    var Zr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ha = Tt(Zr), Wo = B({}, Zr, {
      view: 0,
      detail: 0
    }), og = Tt(Wo), pa, ma, Yo, mi = B({}, Wo, {
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
      getModifierState: ya,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Yo && (Yo && t.type === "mousemove" ? (pa = t.screenX - Yo.screenX, ma = t.screenY - Yo.screenY) : ma = pa = 0, Yo = t), pa);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : ma;
      }
    }), yd = Tt(mi), sg = B({}, mi, {
      dataTransfer: 0
    }), ig = Tt(sg), lg = B({}, Wo, {
      relatedTarget: 0
    }), ga = Tt(lg), ag = B({}, Zr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ug = Tt(ag), cg = B({}, Zr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), dg = Tt(cg), fg = B({}, Zr, {
      data: 0
    }), vd = Tt(fg), hg = {
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
    }, pg = {
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
    }, mg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function gg(t) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(t) : (t = mg[t]) ? !!n[t] : false;
    }
    function ya() {
      return gg;
    }
    var yg = B({}, Wo, {
      key: function(t) {
        if (t.key) {
          var n = hg[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress" ? (t = hi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? pg[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ya,
      charCode: function(t) {
        return t.type === "keypress" ? hi(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? hi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), vg = Tt(yg), wg = B({}, mi, {
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
    }), wd = Tt(wg), xg = B({}, Wo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ya
    }), Sg = Tt(xg), kg = B({}, Zr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Eg = Tt(kg), Cg = B({}, mi, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), _g = Tt(Cg), Ng = [
      9,
      13,
      27,
      32
    ], va = d && "CompositionEvent" in window, Go = null;
    d && "documentMode" in document && (Go = document.documentMode);
    var Mg = d && "TextEvent" in window && !Go, xd = d && (!va || Go && 8 < Go && 11 >= Go), Sd = " ", kd = false;
    function Ed(t, n) {
      switch (t) {
        case "keyup":
          return Ng.indexOf(n.keyCode) !== -1;
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
    function Cd(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var qr = false;
    function Ig(t, n) {
      switch (t) {
        case "compositionend":
          return Cd(n);
        case "keypress":
          return n.which !== 32 ? null : (kd = true, Sd);
        case "textInput":
          return t = n.data, t === Sd && kd ? null : t;
        default:
          return null;
      }
    }
    function bg(t, n) {
      if (qr) return t === "compositionend" || !va && Ed(t, n) ? (t = md(), fi = fa = Qn = null, qr = false, t) : null;
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
          return xd && n.locale !== "ko" ? null : n.data;
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
    function _d(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n === "input" ? !!Tg[t.type] : n === "textarea";
    }
    function Nd(t, n, s, a) {
      Vs(a), n = xi(n, "onChange"), 0 < n.length && (s = new ha("onChange", "change", null, s, a), t.push({
        event: s,
        listeners: n
      }));
    }
    var Xo = null, Ko = null;
    function Ag(t) {
      Ud(t, 0);
    }
    function gi(t) {
      var n = ro(t);
      if (Ue(n)) return t;
    }
    function $g(t, n) {
      if (t === "change") return n;
    }
    var Md = false;
    if (d) {
      var wa;
      if (d) {
        var xa = "oninput" in document;
        if (!xa) {
          var Id = document.createElement("div");
          Id.setAttribute("oninput", "return;"), xa = typeof Id.oninput == "function";
        }
        wa = xa;
      } else wa = false;
      Md = wa && (!document.documentMode || 9 < document.documentMode);
    }
    function bd() {
      Xo && (Xo.detachEvent("onpropertychange", Td), Ko = Xo = null);
    }
    function Td(t) {
      if (t.propertyName === "value" && gi(Ko)) {
        var n = [];
        Nd(n, Ko, t, xr(t)), Gs(Ag, n);
      }
    }
    function Rg(t, n, s) {
      t === "focusin" ? (bd(), Xo = n, Ko = s, Xo.attachEvent("onpropertychange", Td)) : t === "focusout" && bd();
    }
    function Pg(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return gi(Ko);
    }
    function Lg(t, n) {
      if (t === "click") return gi(n);
    }
    function Dg(t, n) {
      if (t === "input" || t === "change") return gi(n);
    }
    function zg(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var on = typeof Object.is == "function" ? Object.is : zg;
    function Qo(t, n) {
      if (on(t, n)) return true;
      if (typeof t != "object" || t === null || typeof n != "object" || n === null) return false;
      var s = Object.keys(t), a = Object.keys(n);
      if (s.length !== a.length) return false;
      for (a = 0; a < s.length; a++) {
        var f = s[a];
        if (!m.call(n, f) || !on(t[f], n[f])) return false;
      }
      return true;
    }
    function Ad(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function $d(t, n) {
      var s = Ad(t);
      t = 0;
      for (var a; s; ) {
        if (s.nodeType === 3) {
          if (a = t + s.textContent.length, t <= n && a >= n) return {
            node: s,
            offset: n - t
          };
          t = a;
        }
        e: {
          for (; s; ) {
            if (s.nextSibling) {
              s = s.nextSibling;
              break e;
            }
            s = s.parentNode;
          }
          s = void 0;
        }
        s = Ad(s);
      }
    }
    function Rd(t, n) {
      return t && n ? t === n ? true : t && t.nodeType === 3 ? false : n && n.nodeType === 3 ? Rd(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : false : false;
    }
    function Pd() {
      for (var t = window, n = Ke(); n instanceof t.HTMLIFrameElement; ) {
        try {
          var s = typeof n.contentWindow.location.href == "string";
        } catch {
          s = false;
        }
        if (s) t = n.contentWindow;
        else break;
        n = Ke(t.document);
      }
      return n;
    }
    function Sa(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
    }
    function Og(t) {
      var n = Pd(), s = t.focusedElem, a = t.selectionRange;
      if (n !== s && s && s.ownerDocument && Rd(s.ownerDocument.documentElement, s)) {
        if (a !== null && Sa(s)) {
          if (n = a.start, t = a.end, t === void 0 && (t = n), "selectionStart" in s) s.selectionStart = n, s.selectionEnd = Math.min(t, s.value.length);
          else if (t = (n = s.ownerDocument || document) && n.defaultView || window, t.getSelection) {
            t = t.getSelection();
            var f = s.textContent.length, g = Math.min(a.start, f);
            a = a.end === void 0 ? g : Math.min(a.end, f), !t.extend && g > a && (f = a, a = g, g = f), f = $d(s, g);
            var w = $d(s, a);
            f && w && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== w.node || t.focusOffset !== w.offset) && (n = n.createRange(), n.setStart(f.node, f.offset), t.removeAllRanges(), g > a ? (t.addRange(n), t.extend(w.node, w.offset)) : (n.setEnd(w.node, w.offset), t.addRange(n)));
          }
        }
        for (n = [], t = s; t = t.parentNode; ) t.nodeType === 1 && n.push({
          element: t,
          left: t.scrollLeft,
          top: t.scrollTop
        });
        for (typeof s.focus == "function" && s.focus(), s = 0; s < n.length; s++) t = n[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
      }
    }
    var Fg = d && "documentMode" in document && 11 >= document.documentMode, Jr = null, ka = null, Zo = null, Ea = false;
    function Ld(t, n, s) {
      var a = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
      Ea || Jr == null || Jr !== Ke(a) || (a = Jr, "selectionStart" in a && Sa(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), Zo && Qo(Zo, a) || (Zo = a, a = xi(ka, "onSelect"), 0 < a.length && (n = new ha("onSelect", "select", null, n, s), t.push({
        event: n,
        listeners: a
      }), n.target = Jr)));
    }
    function yi(t, n) {
      var s = {};
      return s[t.toLowerCase()] = n.toLowerCase(), s["Webkit" + t] = "webkit" + n, s["Moz" + t] = "moz" + n, s;
    }
    var eo = {
      animationend: yi("Animation", "AnimationEnd"),
      animationiteration: yi("Animation", "AnimationIteration"),
      animationstart: yi("Animation", "AnimationStart"),
      transitionend: yi("Transition", "TransitionEnd")
    }, Ca = {}, Dd = {};
    d && (Dd = document.createElement("div").style, "AnimationEvent" in window || (delete eo.animationend.animation, delete eo.animationiteration.animation, delete eo.animationstart.animation), "TransitionEvent" in window || delete eo.transitionend.transition);
    function vi(t) {
      if (Ca[t]) return Ca[t];
      if (!eo[t]) return t;
      var n = eo[t], s;
      for (s in n) if (n.hasOwnProperty(s) && s in Dd) return Ca[t] = n[s];
      return t;
    }
    var zd = vi("animationend"), Od = vi("animationiteration"), Fd = vi("animationstart"), Bd = vi("transitionend"), jd = /* @__PURE__ */ new Map(), Hd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Zn(t, n) {
      jd.set(t, n), u(n, [
        t
      ]);
    }
    for (var _a = 0; _a < Hd.length; _a++) {
      var Na = Hd[_a], Bg = Na.toLowerCase(), jg = Na[0].toUpperCase() + Na.slice(1);
      Zn(Bg, "on" + jg);
    }
    Zn(zd, "onAnimationEnd"), Zn(Od, "onAnimationIteration"), Zn(Fd, "onAnimationStart"), Zn("dblclick", "onDoubleClick"), Zn("focusin", "onFocus"), Zn("focusout", "onBlur"), Zn(Bd, "onTransitionEnd"), c("onMouseEnter", [
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
    var qo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hg = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));
    function Vd(t, n, s) {
      var a = t.type || "unknown-event";
      t.currentTarget = s, Xs(a, n, void 0, t), t.currentTarget = null;
    }
    function Ud(t, n) {
      n = (n & 4) !== 0;
      for (var s = 0; s < t.length; s++) {
        var a = t[s], f = a.event;
        a = a.listeners;
        e: {
          var g = void 0;
          if (n) for (var w = a.length - 1; 0 <= w; w--) {
            var M = a[w], T = M.instance, W = M.currentTarget;
            if (M = M.listener, T !== g && f.isPropagationStopped()) break e;
            Vd(f, M, W), g = T;
          }
          else for (w = 0; w < a.length; w++) {
            if (M = a[w], T = M.instance, W = M.currentTarget, M = M.listener, T !== g && f.isPropagationStopped()) break e;
            Vd(f, M, W), g = T;
          }
        }
      }
      if (Gr) throw t = Lo, Gr = false, Lo = null, t;
    }
    function De(t, n) {
      var s = n[Pa];
      s === void 0 && (s = n[Pa] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      s.has(a) || (Wd(n, t, 2, false), s.add(a));
    }
    function Ma(t, n, s) {
      var a = 0;
      n && (a |= 4), Wd(s, t, a, n);
    }
    var wi = "_reactListening" + Math.random().toString(36).slice(2);
    function Jo(t) {
      if (!t[wi]) {
        t[wi] = true, i.forEach(function(s) {
          s !== "selectionchange" && (Hg.has(s) || Ma(s, false, t), Ma(s, true, t));
        });
        var n = t.nodeType === 9 ? t : t.ownerDocument;
        n === null || n[wi] || (n[wi] = true, Ma("selectionchange", false, n));
      }
    }
    function Wd(t, n, s, a) {
      switch (pd(n)) {
        case 1:
          var f = ng;
          break;
        case 4:
          f = rg;
          break;
        default:
          f = ca;
      }
      s = f.bind(null, n, s, t), f = void 0, !Po || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (f = true), a ? f !== void 0 ? t.addEventListener(n, s, {
        capture: true,
        passive: f
      }) : t.addEventListener(n, s, true) : f !== void 0 ? t.addEventListener(n, s, {
        passive: f
      }) : t.addEventListener(n, s, false);
    }
    function Ia(t, n, s, a, f) {
      var g = a;
      if ((n & 1) === 0 && (n & 2) === 0 && a !== null) e: for (; ; ) {
        if (a === null) return;
        var w = a.tag;
        if (w === 3 || w === 4) {
          var M = a.stateNode.containerInfo;
          if (M === f || M.nodeType === 8 && M.parentNode === f) break;
          if (w === 4) for (w = a.return; w !== null; ) {
            var T = w.tag;
            if ((T === 3 || T === 4) && (T = w.stateNode.containerInfo, T === f || T.nodeType === 8 && T.parentNode === f)) return;
            w = w.return;
          }
          for (; M !== null; ) {
            if (w = Cr(M), w === null) return;
            if (T = w.tag, T === 5 || T === 6) {
              a = g = w;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
      Gs(function() {
        var W = g, re = xr(s), se = [];
        e: {
          var te = jd.get(t);
          if (te !== void 0) {
            var ue = ha, de = t;
            switch (t) {
              case "keypress":
                if (hi(s) === 0) break e;
              case "keydown":
              case "keyup":
                ue = vg;
                break;
              case "focusin":
                de = "focus", ue = ga;
                break;
              case "focusout":
                de = "blur", ue = ga;
                break;
              case "beforeblur":
              case "afterblur":
                ue = ga;
                break;
              case "click":
                if (s.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                ue = yd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                ue = ig;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                ue = Sg;
                break;
              case zd:
              case Od:
              case Fd:
                ue = ug;
                break;
              case Bd:
                ue = Eg;
                break;
              case "scroll":
                ue = og;
                break;
              case "wheel":
                ue = _g;
                break;
              case "copy":
              case "cut":
              case "paste":
                ue = dg;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                ue = wd;
            }
            var fe = (n & 4) !== 0, Xe = !fe && t === "scroll", j = fe ? te !== null ? te + "Capture" : null : te;
            fe = [];
            for (var P = W, V; P !== null; ) {
              V = P;
              var ie = V.stateNode;
              if (V.tag === 5 && ie !== null && (V = ie, j !== null && (ie = Sr(P, j), ie != null && fe.push(es(P, ie, V)))), Xe) break;
              P = P.return;
            }
            0 < fe.length && (te = new ue(te, de, null, s, re), se.push({
              event: te,
              listeners: fe
            }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (te = t === "mouseover" || t === "pointerover", ue = t === "mouseout" || t === "pointerout", te && s !== wr && (de = s.relatedTarget || s.fromElement) && (Cr(de) || de[$n])) break e;
            if ((ue || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, ue ? (de = s.relatedTarget || s.toElement, ue = W, de = de ? Cr(de) : null, de !== null && (Xe = An(de), de !== Xe || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = W), ue !== de)) {
              if (fe = yd, ie = "onMouseLeave", j = "onMouseEnter", P = "mouse", (t === "pointerout" || t === "pointerover") && (fe = wd, ie = "onPointerLeave", j = "onPointerEnter", P = "pointer"), Xe = ue == null ? te : ro(ue), V = de == null ? te : ro(de), te = new fe(ie, P + "leave", ue, s, re), te.target = Xe, te.relatedTarget = V, ie = null, Cr(re) === W && (fe = new fe(j, P + "enter", de, s, re), fe.target = V, fe.relatedTarget = Xe, ie = fe), Xe = ie, ue && de) t: {
                for (fe = ue, j = de, P = 0, V = fe; V; V = to(V)) P++;
                for (V = 0, ie = j; ie; ie = to(ie)) V++;
                for (; 0 < P - V; ) fe = to(fe), P--;
                for (; 0 < V - P; ) j = to(j), V--;
                for (; P--; ) {
                  if (fe === j || j !== null && fe === j.alternate) break t;
                  fe = to(fe), j = to(j);
                }
                fe = null;
              }
              else fe = null;
              ue !== null && Yd(se, te, ue, fe, false), de !== null && Xe !== null && Yd(se, Xe, de, fe, true);
            }
          }
          e: {
            if (te = W ? ro(W) : window, ue = te.nodeName && te.nodeName.toLowerCase(), ue === "select" || ue === "input" && te.type === "file") var pe = $g;
            else if (_d(te)) if (Md) pe = Dg;
            else {
              pe = Pg;
              var we = Rg;
            }
            else (ue = te.nodeName) && ue.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (pe = Lg);
            if (pe && (pe = pe(t, W))) {
              Nd(se, pe, s, re);
              break e;
            }
            we && we(t, te, W), t === "focusout" && (we = te._wrapperState) && we.controlled && te.type === "number" && qe(te, "number", te.value);
          }
          switch (we = W ? ro(W) : window, t) {
            case "focusin":
              (_d(we) || we.contentEditable === "true") && (Jr = we, ka = W, Zo = null);
              break;
            case "focusout":
              Zo = ka = Jr = null;
              break;
            case "mousedown":
              Ea = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ea = false, Ld(se, s, re);
              break;
            case "selectionchange":
              if (Fg) break;
            case "keydown":
            case "keyup":
              Ld(se, s, re);
          }
          var xe;
          if (va) e: {
            switch (t) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
          else qr ? Ed(t, s) && (ke = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (ke = "onCompositionStart");
          ke && (xd && s.locale !== "ko" && (qr || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && qr && (xe = md()) : (Qn = re, fa = "value" in Qn ? Qn.value : Qn.textContent, qr = true)), we = xi(W, ke), 0 < we.length && (ke = new vd(ke, t, null, s, re), se.push({
            event: ke,
            listeners: we
          }), xe ? ke.data = xe : (xe = Cd(s), xe !== null && (ke.data = xe)))), (xe = Mg ? Ig(t, s) : bg(t, s)) && (W = xi(W, "onBeforeInput"), 0 < W.length && (re = new vd("onBeforeInput", "beforeinput", null, s, re), se.push({
            event: re,
            listeners: W
          }), re.data = xe));
        }
        Ud(se, n);
      });
    }
    function es(t, n, s) {
      return {
        instance: t,
        listener: n,
        currentTarget: s
      };
    }
    function xi(t, n) {
      for (var s = n + "Capture", a = []; t !== null; ) {
        var f = t, g = f.stateNode;
        f.tag === 5 && g !== null && (f = g, g = Sr(t, s), g != null && a.unshift(es(t, g, f)), g = Sr(t, n), g != null && a.push(es(t, g, f))), t = t.return;
      }
      return a;
    }
    function to(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5);
      return t || null;
    }
    function Yd(t, n, s, a, f) {
      for (var g = n._reactName, w = []; s !== null && s !== a; ) {
        var M = s, T = M.alternate, W = M.stateNode;
        if (T !== null && T === a) break;
        M.tag === 5 && W !== null && (M = W, f ? (T = Sr(s, g), T != null && w.unshift(es(s, T, M))) : f || (T = Sr(s, g), T != null && w.push(es(s, T, M)))), s = s.return;
      }
      w.length !== 0 && t.push({
        event: n,
        listeners: w
      });
    }
    var Vg = /\r\n?/g, Ug = /\u0000|\uFFFD/g;
    function Gd(t) {
      return (typeof t == "string" ? t : "" + t).replace(Vg, `
`).replace(Ug, "");
    }
    function Si(t, n, s) {
      if (n = Gd(n), Gd(t) !== n && s) throw Error(o(425));
    }
    function ki() {
    }
    var ba = null, Ta = null;
    function Aa(t, n) {
      return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var $a = typeof setTimeout == "function" ? setTimeout : void 0, Wg = typeof clearTimeout == "function" ? clearTimeout : void 0, Xd = typeof Promise == "function" ? Promise : void 0, Yg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(t) {
      return Xd.resolve(null).then(t).catch(Gg);
    } : $a;
    function Gg(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Ra(t, n) {
      var s = n, a = 0;
      do {
        var f = s.nextSibling;
        if (t.removeChild(s), f && f.nodeType === 8) if (s = f.data, s === "/$") {
          if (a === 0) {
            t.removeChild(f), Uo(n);
            return;
          }
          a--;
        } else s !== "$" && s !== "$?" && s !== "$!" || a++;
        s = f;
      } while (s);
      Uo(n);
    }
    function qn(t) {
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
    function Kd(t) {
      t = t.previousSibling;
      for (var n = 0; t; ) {
        if (t.nodeType === 8) {
          var s = t.data;
          if (s === "$" || s === "$!" || s === "$?") {
            if (n === 0) return t;
            n--;
          } else s === "/$" && n++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    var no = Math.random().toString(36).slice(2), xn = "__reactFiber$" + no, ts = "__reactProps$" + no, $n = "__reactContainer$" + no, Pa = "__reactEvents$" + no, Xg = "__reactListeners$" + no, Kg = "__reactHandles$" + no;
    function Cr(t) {
      var n = t[xn];
      if (n) return n;
      for (var s = t.parentNode; s; ) {
        if (n = s[$n] || s[xn]) {
          if (s = n.alternate, n.child !== null || s !== null && s.child !== null) for (t = Kd(t); t !== null; ) {
            if (s = t[xn]) return s;
            t = Kd(t);
          }
          return n;
        }
        t = s, s = t.parentNode;
      }
      return null;
    }
    function ns(t) {
      return t = t[xn] || t[$n], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
    }
    function ro(t) {
      if (t.tag === 5 || t.tag === 6) return t.stateNode;
      throw Error(o(33));
    }
    function Ei(t) {
      return t[ts] || null;
    }
    var La = [], oo = -1;
    function Jn(t) {
      return {
        current: t
      };
    }
    function ze(t) {
      0 > oo || (t.current = La[oo], La[oo] = null, oo--);
    }
    function Pe(t, n) {
      oo++, La[oo] = t.current, t.current = n;
    }
    var er = {}, ft = Jn(er), kt = Jn(false), _r = er;
    function so(t, n) {
      var s = t.type.contextTypes;
      if (!s) return er;
      var a = t.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === n) return a.__reactInternalMemoizedMaskedChildContext;
      var f = {}, g;
      for (g in s) f[g] = n[g];
      return a && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = n, t.__reactInternalMemoizedMaskedChildContext = f), f;
    }
    function Et(t) {
      return t = t.childContextTypes, t != null;
    }
    function Ci() {
      ze(kt), ze(ft);
    }
    function Qd(t, n, s) {
      if (ft.current !== er) throw Error(o(168));
      Pe(ft, n), Pe(kt, s);
    }
    function Zd(t, n, s) {
      var a = t.stateNode;
      if (n = n.childContextTypes, typeof a.getChildContext != "function") return s;
      a = a.getChildContext();
      for (var f in a) if (!(f in n)) throw Error(o(108, he(t) || "Unknown", f));
      return B({}, s, a);
    }
    function _i(t) {
      return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || er, _r = ft.current, Pe(ft, t), Pe(kt, kt.current), true;
    }
    function qd(t, n, s) {
      var a = t.stateNode;
      if (!a) throw Error(o(169));
      s ? (t = Zd(t, n, _r), a.__reactInternalMemoizedMergedChildContext = t, ze(kt), ze(ft), Pe(ft, t)) : ze(kt), Pe(kt, s);
    }
    var Rn = null, Ni = false, Da = false;
    function Jd(t) {
      Rn === null ? Rn = [
        t
      ] : Rn.push(t);
    }
    function Qg(t) {
      Ni = true, Jd(t);
    }
    function tr() {
      if (!Da && Rn !== null) {
        Da = true;
        var t = 0, n = Ae;
        try {
          var s = Rn;
          for (Ae = 1; t < s.length; t++) {
            var a = s[t];
            do
              a = a(true);
            while (a !== null);
          }
          Rn = null, Ni = false;
        } catch (f) {
          throw Rn !== null && (Rn = Rn.slice(t + 1)), Js(Do, tr), f;
        } finally {
          Ae = n, Da = false;
        }
      }
      return null;
    }
    var io = [], lo = 0, Mi = null, Ii = 0, Vt = [], Ut = 0, Nr = null, Pn = 1, Ln = "";
    function Mr(t, n) {
      io[lo++] = Ii, io[lo++] = Mi, Mi = t, Ii = n;
    }
    function ef(t, n, s) {
      Vt[Ut++] = Pn, Vt[Ut++] = Ln, Vt[Ut++] = Nr, Nr = t;
      var a = Pn;
      t = Ln;
      var f = 32 - rn(a) - 1;
      a &= ~(1 << f), s += 1;
      var g = 32 - rn(n) + f;
      if (30 < g) {
        var w = f - f % 5;
        g = (a & (1 << w) - 1).toString(32), a >>= w, f -= w, Pn = 1 << 32 - rn(n) + f | s << f | a, Ln = g + t;
      } else Pn = 1 << g | s << f | a, Ln = t;
    }
    function za(t) {
      t.return !== null && (Mr(t, 1), ef(t, 1, 0));
    }
    function Oa(t) {
      for (; t === Mi; ) Mi = io[--lo], io[lo] = null, Ii = io[--lo], io[lo] = null;
      for (; t === Nr; ) Nr = Vt[--Ut], Vt[Ut] = null, Ln = Vt[--Ut], Vt[Ut] = null, Pn = Vt[--Ut], Vt[Ut] = null;
    }
    var At = null, $t = null, Fe = false, sn = null;
    function tf(t, n) {
      var s = Xt(5, null, null, 0);
      s.elementType = "DELETED", s.stateNode = n, s.return = t, n = t.deletions, n === null ? (t.deletions = [
        s
      ], t.flags |= 16) : n.push(s);
    }
    function nf(t, n) {
      switch (t.tag) {
        case 5:
          var s = t.type;
          return n = n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (t.stateNode = n, At = t, $t = qn(n.firstChild), true) : false;
        case 6:
          return n = t.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (t.stateNode = n, At = t, $t = null, true) : false;
        case 13:
          return n = n.nodeType !== 8 ? null : n, n !== null ? (s = Nr !== null ? {
            id: Pn,
            overflow: Ln
          } : null, t.memoizedState = {
            dehydrated: n,
            treeContext: s,
            retryLane: 1073741824
          }, s = Xt(18, null, null, 0), s.stateNode = n, s.return = t, t.child = s, At = t, $t = null, true) : false;
        default:
          return false;
      }
    }
    function Fa(t) {
      return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
    }
    function Ba(t) {
      if (Fe) {
        var n = $t;
        if (n) {
          var s = n;
          if (!nf(t, n)) {
            if (Fa(t)) throw Error(o(418));
            n = qn(s.nextSibling);
            var a = At;
            n && nf(t, n) ? tf(a, s) : (t.flags = t.flags & -4097 | 2, Fe = false, At = t);
          }
        } else {
          if (Fa(t)) throw Error(o(418));
          t.flags = t.flags & -4097 | 2, Fe = false, At = t;
        }
      }
    }
    function rf(t) {
      for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
      At = t;
    }
    function bi(t) {
      if (t !== At) return false;
      if (!Fe) return rf(t), Fe = true, false;
      var n;
      if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = t.type, n = n !== "head" && n !== "body" && !Aa(t.type, t.memoizedProps)), n && (n = $t)) {
        if (Fa(t)) throw of(), Error(o(418));
        for (; n; ) tf(t, n), n = qn(n.nextSibling);
      }
      if (rf(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
        e: {
          for (t = t.nextSibling, n = 0; t; ) {
            if (t.nodeType === 8) {
              var s = t.data;
              if (s === "/$") {
                if (n === 0) {
                  $t = qn(t.nextSibling);
                  break e;
                }
                n--;
              } else s !== "$" && s !== "$!" && s !== "$?" || n++;
            }
            t = t.nextSibling;
          }
          $t = null;
        }
      } else $t = At ? qn(t.stateNode.nextSibling) : null;
      return true;
    }
    function of() {
      for (var t = $t; t; ) t = qn(t.nextSibling);
    }
    function ao() {
      $t = At = null, Fe = false;
    }
    function ja(t) {
      sn === null ? sn = [
        t
      ] : sn.push(t);
    }
    var Zg = A.ReactCurrentBatchConfig;
    function rs(t, n, s) {
      if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (s._owner) {
          if (s = s._owner, s) {
            if (s.tag !== 1) throw Error(o(309));
            var a = s.stateNode;
          }
          if (!a) throw Error(o(147, t));
          var f = a, g = "" + t;
          return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === g ? n.ref : (n = function(w) {
            var M = f.refs;
            w === null ? delete M[g] : M[g] = w;
          }, n._stringRef = g, n);
        }
        if (typeof t != "string") throw Error(o(284));
        if (!s._owner) throw Error(o(290, t));
      }
      return t;
    }
    function Ti(t, n) {
      throw t = Object.prototype.toString.call(n), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t));
    }
    function sf(t) {
      var n = t._init;
      return n(t._payload);
    }
    function lf(t) {
      function n(j, P) {
        if (t) {
          var V = j.deletions;
          V === null ? (j.deletions = [
            P
          ], j.flags |= 16) : V.push(P);
        }
      }
      function s(j, P) {
        if (!t) return null;
        for (; P !== null; ) n(j, P), P = P.sibling;
        return null;
      }
      function a(j, P) {
        for (j = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? j.set(P.key, P) : j.set(P.index, P), P = P.sibling;
        return j;
      }
      function f(j, P) {
        return j = ur(j, P), j.index = 0, j.sibling = null, j;
      }
      function g(j, P, V) {
        return j.index = V, t ? (V = j.alternate, V !== null ? (V = V.index, V < P ? (j.flags |= 2, P) : V) : (j.flags |= 2, P)) : (j.flags |= 1048576, P);
      }
      function w(j) {
        return t && j.alternate === null && (j.flags |= 2), j;
      }
      function M(j, P, V, ie) {
        return P === null || P.tag !== 6 ? (P = $u(V, j.mode, ie), P.return = j, P) : (P = f(P, V), P.return = j, P);
      }
      function T(j, P, V, ie) {
        var pe = V.type;
        return pe === Q ? re(j, P, V.props.children, ie, V.key) : P !== null && (P.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === O && sf(pe) === P.type) ? (ie = f(P, V.props), ie.ref = rs(j, P, V), ie.return = j, ie) : (ie = el(V.type, V.key, V.props, null, j.mode, ie), ie.ref = rs(j, P, V), ie.return = j, ie);
      }
      function W(j, P, V, ie) {
        return P === null || P.tag !== 4 || P.stateNode.containerInfo !== V.containerInfo || P.stateNode.implementation !== V.implementation ? (P = Ru(V, j.mode, ie), P.return = j, P) : (P = f(P, V.children || []), P.return = j, P);
      }
      function re(j, P, V, ie, pe) {
        return P === null || P.tag !== 7 ? (P = Lr(V, j.mode, ie, pe), P.return = j, P) : (P = f(P, V), P.return = j, P);
      }
      function se(j, P, V) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return P = $u("" + P, j.mode, V), P.return = j, P;
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case G:
              return V = el(P.type, P.key, P.props, null, j.mode, V), V.ref = rs(j, null, P), V.return = j, V;
            case D:
              return P = Ru(P, j.mode, V), P.return = j, P;
            case O:
              var ie = P._init;
              return se(j, ie(P._payload), V);
          }
          if (gt(P) || R(P)) return P = Lr(P, j.mode, V, null), P.return = j, P;
          Ti(j, P);
        }
        return null;
      }
      function te(j, P, V, ie) {
        var pe = P !== null ? P.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number") return pe !== null ? null : M(j, P, "" + V, ie);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case G:
              return V.key === pe ? T(j, P, V, ie) : null;
            case D:
              return V.key === pe ? W(j, P, V, ie) : null;
            case O:
              return pe = V._init, te(j, P, pe(V._payload), ie);
          }
          if (gt(V) || R(V)) return pe !== null ? null : re(j, P, V, ie, null);
          Ti(j, V);
        }
        return null;
      }
      function ue(j, P, V, ie, pe) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") return j = j.get(V) || null, M(P, j, "" + ie, pe);
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case G:
              return j = j.get(ie.key === null ? V : ie.key) || null, T(P, j, ie, pe);
            case D:
              return j = j.get(ie.key === null ? V : ie.key) || null, W(P, j, ie, pe);
            case O:
              var we = ie._init;
              return ue(j, P, V, we(ie._payload), pe);
          }
          if (gt(ie) || R(ie)) return j = j.get(V) || null, re(P, j, ie, pe, null);
          Ti(P, ie);
        }
        return null;
      }
      function de(j, P, V, ie) {
        for (var pe = null, we = null, xe = P, ke = P = 0, it = null; xe !== null && ke < V.length; ke++) {
          xe.index > ke ? (it = xe, xe = null) : it = xe.sibling;
          var Ie = te(j, xe, V[ke], ie);
          if (Ie === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && Ie.alternate === null && n(j, xe), P = g(Ie, P, ke), we === null ? pe = Ie : we.sibling = Ie, we = Ie, xe = it;
        }
        if (ke === V.length) return s(j, xe), Fe && Mr(j, ke), pe;
        if (xe === null) {
          for (; ke < V.length; ke++) xe = se(j, V[ke], ie), xe !== null && (P = g(xe, P, ke), we === null ? pe = xe : we.sibling = xe, we = xe);
          return Fe && Mr(j, ke), pe;
        }
        for (xe = a(j, xe); ke < V.length; ke++) it = ue(xe, j, ke, V[ke], ie), it !== null && (t && it.alternate !== null && xe.delete(it.key === null ? ke : it.key), P = g(it, P, ke), we === null ? pe = it : we.sibling = it, we = it);
        return t && xe.forEach(function(cr) {
          return n(j, cr);
        }), Fe && Mr(j, ke), pe;
      }
      function fe(j, P, V, ie) {
        var pe = R(V);
        if (typeof pe != "function") throw Error(o(150));
        if (V = pe.call(V), V == null) throw Error(o(151));
        for (var we = pe = null, xe = P, ke = P = 0, it = null, Ie = V.next(); xe !== null && !Ie.done; ke++, Ie = V.next()) {
          xe.index > ke ? (it = xe, xe = null) : it = xe.sibling;
          var cr = te(j, xe, Ie.value, ie);
          if (cr === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && cr.alternate === null && n(j, xe), P = g(cr, P, ke), we === null ? pe = cr : we.sibling = cr, we = cr, xe = it;
        }
        if (Ie.done) return s(j, xe), Fe && Mr(j, ke), pe;
        if (xe === null) {
          for (; !Ie.done; ke++, Ie = V.next()) Ie = se(j, Ie.value, ie), Ie !== null && (P = g(Ie, P, ke), we === null ? pe = Ie : we.sibling = Ie, we = Ie);
          return Fe && Mr(j, ke), pe;
        }
        for (xe = a(j, xe); !Ie.done; ke++, Ie = V.next()) Ie = ue(xe, j, ke, Ie.value, ie), Ie !== null && (t && Ie.alternate !== null && xe.delete(Ie.key === null ? ke : Ie.key), P = g(Ie, P, ke), we === null ? pe = Ie : we.sibling = Ie, we = Ie);
        return t && xe.forEach(function(Ty) {
          return n(j, Ty);
        }), Fe && Mr(j, ke), pe;
      }
      function Xe(j, P, V, ie) {
        if (typeof V == "object" && V !== null && V.type === Q && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case G:
              e: {
                for (var pe = V.key, we = P; we !== null; ) {
                  if (we.key === pe) {
                    if (pe = V.type, pe === Q) {
                      if (we.tag === 7) {
                        s(j, we.sibling), P = f(we, V.props.children), P.return = j, j = P;
                        break e;
                      }
                    } else if (we.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === O && sf(pe) === we.type) {
                      s(j, we.sibling), P = f(we, V.props), P.ref = rs(j, we, V), P.return = j, j = P;
                      break e;
                    }
                    s(j, we);
                    break;
                  } else n(j, we);
                  we = we.sibling;
                }
                V.type === Q ? (P = Lr(V.props.children, j.mode, ie, V.key), P.return = j, j = P) : (ie = el(V.type, V.key, V.props, null, j.mode, ie), ie.ref = rs(j, P, V), ie.return = j, j = ie);
              }
              return w(j);
            case D:
              e: {
                for (we = V.key; P !== null; ) {
                  if (P.key === we) if (P.tag === 4 && P.stateNode.containerInfo === V.containerInfo && P.stateNode.implementation === V.implementation) {
                    s(j, P.sibling), P = f(P, V.children || []), P.return = j, j = P;
                    break e;
                  } else {
                    s(j, P);
                    break;
                  }
                  else n(j, P);
                  P = P.sibling;
                }
                P = Ru(V, j.mode, ie), P.return = j, j = P;
              }
              return w(j);
            case O:
              return we = V._init, Xe(j, P, we(V._payload), ie);
          }
          if (gt(V)) return de(j, P, V, ie);
          if (R(V)) return fe(j, P, V, ie);
          Ti(j, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, P !== null && P.tag === 6 ? (s(j, P.sibling), P = f(P, V), P.return = j, j = P) : (s(j, P), P = $u(V, j.mode, ie), P.return = j, j = P), w(j)) : s(j, P);
      }
      return Xe;
    }
    var uo = lf(true), af = lf(false), Ai = Jn(null), $i = null, co = null, Ha = null;
    function Va() {
      Ha = co = $i = null;
    }
    function Ua(t) {
      var n = Ai.current;
      ze(Ai), t._currentValue = n;
    }
    function Wa(t, n, s) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & n) !== n ? (t.childLanes |= n, a !== null && (a.childLanes |= n)) : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n), t === s) break;
        t = t.return;
      }
    }
    function fo(t, n) {
      $i = t, Ha = co = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & n) !== 0 && (Ct = true), t.firstContext = null);
    }
    function Wt(t) {
      var n = t._currentValue;
      if (Ha !== t) if (t = {
        context: t,
        memoizedValue: n,
        next: null
      }, co === null) {
        if ($i === null) throw Error(o(308));
        co = t, $i.dependencies = {
          lanes: 0,
          firstContext: t
        };
      } else co = co.next = t;
      return n;
    }
    var Ir = null;
    function Ya(t) {
      Ir === null ? Ir = [
        t
      ] : Ir.push(t);
    }
    function uf(t, n, s, a) {
      var f = n.interleaved;
      return f === null ? (s.next = s, Ya(n)) : (s.next = f.next, f.next = s), n.interleaved = s, Dn(t, a);
    }
    function Dn(t, n) {
      t.lanes |= n;
      var s = t.alternate;
      for (s !== null && (s.lanes |= n), s = t, t = t.return; t !== null; ) t.childLanes |= n, s = t.alternate, s !== null && (s.childLanes |= n), s = t, t = t.return;
      return s.tag === 3 ? s.stateNode : null;
    }
    var nr = false;
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
    function cf(t, n) {
      t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
      });
    }
    function zn(t, n) {
      return {
        eventTime: t,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function rr(t, n, s) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (Ne & 2) !== 0) {
        var f = a.pending;
        return f === null ? n.next = n : (n.next = f.next, f.next = n), a.pending = n, Dn(t, s);
      }
      return f = a.interleaved, f === null ? (n.next = n, Ya(a)) : (n.next = f.next, f.next = n), a.interleaved = n, Dn(t, s);
    }
    function Ri(t, n, s) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194240) !== 0)) {
        var a = n.lanes;
        a &= t.pendingLanes, s |= a, n.lanes = s, la(t, s);
      }
    }
    function df(t, n) {
      var s = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, s === a)) {
        var f = null, g = null;
        if (s = s.firstBaseUpdate, s !== null) {
          do {
            var w = {
              eventTime: s.eventTime,
              lane: s.lane,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            };
            g === null ? f = g = w : g = g.next = w, s = s.next;
          } while (s !== null);
          g === null ? f = g = n : g = g.next = n;
        } else f = g = n;
        s = {
          baseState: a.baseState,
          firstBaseUpdate: f,
          lastBaseUpdate: g,
          shared: a.shared,
          effects: a.effects
        }, t.updateQueue = s;
        return;
      }
      t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = n : t.next = n, s.lastBaseUpdate = n;
    }
    function Pi(t, n, s, a) {
      var f = t.updateQueue;
      nr = false;
      var g = f.firstBaseUpdate, w = f.lastBaseUpdate, M = f.shared.pending;
      if (M !== null) {
        f.shared.pending = null;
        var T = M, W = T.next;
        T.next = null, w === null ? g = W : w.next = W, w = T;
        var re = t.alternate;
        re !== null && (re = re.updateQueue, M = re.lastBaseUpdate, M !== w && (M === null ? re.firstBaseUpdate = W : M.next = W, re.lastBaseUpdate = T));
      }
      if (g !== null) {
        var se = f.baseState;
        w = 0, re = W = T = null, M = g;
        do {
          var te = M.lane, ue = M.eventTime;
          if ((a & te) === te) {
            re !== null && (re = re.next = {
              eventTime: ue,
              lane: 0,
              tag: M.tag,
              payload: M.payload,
              callback: M.callback,
              next: null
            });
            e: {
              var de = t, fe = M;
              switch (te = n, ue = s, fe.tag) {
                case 1:
                  if (de = fe.payload, typeof de == "function") {
                    se = de.call(ue, se, te);
                    break e;
                  }
                  se = de;
                  break e;
                case 3:
                  de.flags = de.flags & -65537 | 128;
                case 0:
                  if (de = fe.payload, te = typeof de == "function" ? de.call(ue, se, te) : de, te == null) break e;
                  se = B({}, se, te);
                  break e;
                case 2:
                  nr = true;
              }
            }
            M.callback !== null && M.lane !== 0 && (t.flags |= 64, te = f.effects, te === null ? f.effects = [
              M
            ] : te.push(M));
          } else ue = {
            eventTime: ue,
            lane: te,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          }, re === null ? (W = re = ue, T = se) : re = re.next = ue, w |= te;
          if (M = M.next, M === null) {
            if (M = f.shared.pending, M === null) break;
            te = M, M = te.next, te.next = null, f.lastBaseUpdate = te, f.shared.pending = null;
          }
        } while (true);
        if (re === null && (T = se), f.baseState = T, f.firstBaseUpdate = W, f.lastBaseUpdate = re, n = f.shared.interleaved, n !== null) {
          f = n;
          do
            w |= f.lane, f = f.next;
          while (f !== n);
        } else g === null && (f.shared.lanes = 0);
        Ar |= w, t.lanes = w, t.memoizedState = se;
      }
    }
    function ff(t, n, s) {
      if (t = n.effects, n.effects = null, t !== null) for (n = 0; n < t.length; n++) {
        var a = t[n], f = a.callback;
        if (f !== null) {
          if (a.callback = null, a = s, typeof f != "function") throw Error(o(191, f));
          f.call(a);
        }
      }
    }
    var os = {}, Sn = Jn(os), ss = Jn(os), is = Jn(os);
    function br(t) {
      if (t === os) throw Error(o(174));
      return t;
    }
    function Xa(t, n) {
      switch (Pe(is, n), Pe(ss, t), Pe(Sn, os), t = n.nodeType, t) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : Jt(null, "");
          break;
        default:
          t = t === 8 ? n.parentNode : n, n = t.namespaceURI || null, t = t.tagName, n = Jt(n, t);
      }
      ze(Sn), Pe(Sn, n);
    }
    function ho() {
      ze(Sn), ze(ss), ze(is);
    }
    function hf(t) {
      br(is.current);
      var n = br(Sn.current), s = Jt(n, t.type);
      n !== s && (Pe(ss, t), Pe(Sn, s));
    }
    function Ka(t) {
      ss.current === t && (ze(Sn), ze(ss));
    }
    var je = Jn(0);
    function Li(t) {
      for (var n = t; n !== null; ) {
        if (n.tag === 13) {
          var s = n.memoizedState;
          if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return n;
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
    var Qa = [];
    function Za() {
      for (var t = 0; t < Qa.length; t++) Qa[t]._workInProgressVersionPrimary = null;
      Qa.length = 0;
    }
    var Di = A.ReactCurrentDispatcher, qa = A.ReactCurrentBatchConfig, Tr = 0, He = null, Je = null, ot = null, zi = false, ls = false, as = 0, qg = 0;
    function ht() {
      throw Error(o(321));
    }
    function Ja(t, n) {
      if (n === null) return false;
      for (var s = 0; s < n.length && s < t.length; s++) if (!on(t[s], n[s])) return false;
      return true;
    }
    function eu(t, n, s, a, f, g) {
      if (Tr = g, He = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Di.current = t === null || t.memoizedState === null ? ny : ry, t = s(a, f), ls) {
        g = 0;
        do {
          if (ls = false, as = 0, 25 <= g) throw Error(o(301));
          g += 1, ot = Je = null, n.updateQueue = null, Di.current = oy, t = s(a, f);
        } while (ls);
      }
      if (Di.current = Bi, n = Je !== null && Je.next !== null, Tr = 0, ot = Je = He = null, zi = false, n) throw Error(o(300));
      return t;
    }
    function tu() {
      var t = as !== 0;
      return as = 0, t;
    }
    function kn() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ot === null ? He.memoizedState = ot = t : ot = ot.next = t, ot;
    }
    function Yt() {
      if (Je === null) {
        var t = He.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Je.next;
      var n = ot === null ? He.memoizedState : ot.next;
      if (n !== null) ot = n, Je = t;
      else {
        if (t === null) throw Error(o(310));
        Je = t, t = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null
        }, ot === null ? He.memoizedState = ot = t : ot = ot.next = t;
      }
      return ot;
    }
    function us(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function nu(t) {
      var n = Yt(), s = n.queue;
      if (s === null) throw Error(o(311));
      s.lastRenderedReducer = t;
      var a = Je, f = a.baseQueue, g = s.pending;
      if (g !== null) {
        if (f !== null) {
          var w = f.next;
          f.next = g.next, g.next = w;
        }
        a.baseQueue = f = g, s.pending = null;
      }
      if (f !== null) {
        g = f.next, a = a.baseState;
        var M = w = null, T = null, W = g;
        do {
          var re = W.lane;
          if ((Tr & re) === re) T !== null && (T = T.next = {
            lane: 0,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          }), a = W.hasEagerState ? W.eagerState : t(a, W.action);
          else {
            var se = {
              lane: re,
              action: W.action,
              hasEagerState: W.hasEagerState,
              eagerState: W.eagerState,
              next: null
            };
            T === null ? (M = T = se, w = a) : T = T.next = se, He.lanes |= re, Ar |= re;
          }
          W = W.next;
        } while (W !== null && W !== g);
        T === null ? w = a : T.next = M, on(a, n.memoizedState) || (Ct = true), n.memoizedState = a, n.baseState = w, n.baseQueue = T, s.lastRenderedState = a;
      }
      if (t = s.interleaved, t !== null) {
        f = t;
        do
          g = f.lane, He.lanes |= g, Ar |= g, f = f.next;
        while (f !== t);
      } else f === null && (s.lanes = 0);
      return [
        n.memoizedState,
        s.dispatch
      ];
    }
    function ru(t) {
      var n = Yt(), s = n.queue;
      if (s === null) throw Error(o(311));
      s.lastRenderedReducer = t;
      var a = s.dispatch, f = s.pending, g = n.memoizedState;
      if (f !== null) {
        s.pending = null;
        var w = f = f.next;
        do
          g = t(g, w.action), w = w.next;
        while (w !== f);
        on(g, n.memoizedState) || (Ct = true), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), s.lastRenderedState = g;
      }
      return [
        g,
        a
      ];
    }
    function pf() {
    }
    function mf(t, n) {
      var s = He, a = Yt(), f = n(), g = !on(a.memoizedState, f);
      if (g && (a.memoizedState = f, Ct = true), a = a.queue, ou(vf.bind(null, s, a, t), [
        t
      ]), a.getSnapshot !== n || g || ot !== null && ot.memoizedState.tag & 1) {
        if (s.flags |= 2048, cs(9, yf.bind(null, s, a, f, n), void 0, null), st === null) throw Error(o(349));
        (Tr & 30) !== 0 || gf(s, n, f);
      }
      return f;
    }
    function gf(t, n, s) {
      t.flags |= 16384, t = {
        getSnapshot: n,
        value: s
      }, n = He.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
      }, He.updateQueue = n, n.stores = [
        t
      ]) : (s = n.stores, s === null ? n.stores = [
        t
      ] : s.push(t));
    }
    function yf(t, n, s, a) {
      n.value = s, n.getSnapshot = a, wf(n) && xf(t);
    }
    function vf(t, n, s) {
      return s(function() {
        wf(n) && xf(t);
      });
    }
    function wf(t) {
      var n = t.getSnapshot;
      t = t.value;
      try {
        var s = n();
        return !on(t, s);
      } catch {
        return true;
      }
    }
    function xf(t) {
      var n = Dn(t, 1);
      n !== null && cn(n, t, 1, -1);
    }
    function Sf(t) {
      var n = kn();
      return typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: us,
        lastRenderedState: t
      }, n.queue = t, t = t.dispatch = ty.bind(null, He, t), [
        n.memoizedState,
        t
      ];
    }
    function cs(t, n, s, a) {
      return t = {
        tag: t,
        create: n,
        destroy: s,
        deps: a,
        next: null
      }, n = He.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
      }, He.updateQueue = n, n.lastEffect = t.next = t) : (s = n.lastEffect, s === null ? n.lastEffect = t.next = t : (a = s.next, s.next = t, t.next = a, n.lastEffect = t)), t;
    }
    function kf() {
      return Yt().memoizedState;
    }
    function Oi(t, n, s, a) {
      var f = kn();
      He.flags |= t, f.memoizedState = cs(1 | n, s, void 0, a === void 0 ? null : a);
    }
    function Fi(t, n, s, a) {
      var f = Yt();
      a = a === void 0 ? null : a;
      var g = void 0;
      if (Je !== null) {
        var w = Je.memoizedState;
        if (g = w.destroy, a !== null && Ja(a, w.deps)) {
          f.memoizedState = cs(n, s, g, a);
          return;
        }
      }
      He.flags |= t, f.memoizedState = cs(1 | n, s, g, a);
    }
    function Ef(t, n) {
      return Oi(8390656, 8, t, n);
    }
    function ou(t, n) {
      return Fi(2048, 8, t, n);
    }
    function Cf(t, n) {
      return Fi(4, 2, t, n);
    }
    function _f(t, n) {
      return Fi(4, 4, t, n);
    }
    function Nf(t, n) {
      if (typeof n == "function") return t = t(), n(t), function() {
        n(null);
      };
      if (n != null) return t = t(), n.current = t, function() {
        n.current = null;
      };
    }
    function Mf(t, n, s) {
      return s = s != null ? s.concat([
        t
      ]) : null, Fi(4, 4, Nf.bind(null, n, t), s);
    }
    function su() {
    }
    function If(t, n) {
      var s = Yt();
      n = n === void 0 ? null : n;
      var a = s.memoizedState;
      return a !== null && n !== null && Ja(n, a[1]) ? a[0] : (s.memoizedState = [
        t,
        n
      ], t);
    }
    function bf(t, n) {
      var s = Yt();
      n = n === void 0 ? null : n;
      var a = s.memoizedState;
      return a !== null && n !== null && Ja(n, a[1]) ? a[0] : (t = t(), s.memoizedState = [
        t,
        n
      ], t);
    }
    function Tf(t, n, s) {
      return (Tr & 21) === 0 ? (t.baseState && (t.baseState = false, Ct = true), t.memoizedState = s) : (on(s, n) || (s = sd(), He.lanes |= s, Ar |= s, t.baseState = true), n);
    }
    function Jg(t, n) {
      var s = Ae;
      Ae = s !== 0 && 4 > s ? s : 4, t(true);
      var a = qa.transition;
      qa.transition = {};
      try {
        t(false), n();
      } finally {
        Ae = s, qa.transition = a;
      }
    }
    function Af() {
      return Yt().memoizedState;
    }
    function ey(t, n, s) {
      var a = lr(t);
      if (s = {
        lane: a,
        action: s,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, $f(t)) Rf(n, s);
      else if (s = uf(t, n, s, a), s !== null) {
        var f = vt();
        cn(s, t, a, f), Pf(s, n, a);
      }
    }
    function ty(t, n, s) {
      var a = lr(t), f = {
        lane: a,
        action: s,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if ($f(t)) Rf(n, f);
      else {
        var g = t.alternate;
        if (t.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null)) try {
          var w = n.lastRenderedState, M = g(w, s);
          if (f.hasEagerState = true, f.eagerState = M, on(M, w)) {
            var T = n.interleaved;
            T === null ? (f.next = f, Ya(n)) : (f.next = T.next, T.next = f), n.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
        s = uf(t, n, f, a), s !== null && (f = vt(), cn(s, t, a, f), Pf(s, n, a));
      }
    }
    function $f(t) {
      var n = t.alternate;
      return t === He || n !== null && n === He;
    }
    function Rf(t, n) {
      ls = zi = true;
      var s = t.pending;
      s === null ? n.next = n : (n.next = s.next, s.next = n), t.pending = n;
    }
    function Pf(t, n, s) {
      if ((s & 4194240) !== 0) {
        var a = n.lanes;
        a &= t.pendingLanes, s |= a, n.lanes = s, la(t, s);
      }
    }
    var Bi = {
      readContext: Wt,
      useCallback: ht,
      useContext: ht,
      useEffect: ht,
      useImperativeHandle: ht,
      useInsertionEffect: ht,
      useLayoutEffect: ht,
      useMemo: ht,
      useReducer: ht,
      useRef: ht,
      useState: ht,
      useDebugValue: ht,
      useDeferredValue: ht,
      useTransition: ht,
      useMutableSource: ht,
      useSyncExternalStore: ht,
      useId: ht,
      unstable_isNewReconciler: false
    }, ny = {
      readContext: Wt,
      useCallback: function(t, n) {
        return kn().memoizedState = [
          t,
          n === void 0 ? null : n
        ], t;
      },
      useContext: Wt,
      useEffect: Ef,
      useImperativeHandle: function(t, n, s) {
        return s = s != null ? s.concat([
          t
        ]) : null, Oi(4194308, 4, Nf.bind(null, n, t), s);
      },
      useLayoutEffect: function(t, n) {
        return Oi(4194308, 4, t, n);
      },
      useInsertionEffect: function(t, n) {
        return Oi(4, 2, t, n);
      },
      useMemo: function(t, n) {
        var s = kn();
        return n = n === void 0 ? null : n, t = t(), s.memoizedState = [
          t,
          n
        ], t;
      },
      useReducer: function(t, n, s) {
        var a = kn();
        return n = s !== void 0 ? s(n) : n, a.memoizedState = a.baseState = n, t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = ey.bind(null, He, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var n = kn();
        return t = {
          current: t
        }, n.memoizedState = t;
      },
      useState: Sf,
      useDebugValue: su,
      useDeferredValue: function(t) {
        return kn().memoizedState = t;
      },
      useTransition: function() {
        var t = Sf(false), n = t[0];
        return t = Jg.bind(null, t[1]), kn().memoizedState = t, [
          n,
          t
        ];
      },
      useMutableSource: function() {
      },
      useSyncExternalStore: function(t, n, s) {
        var a = He, f = kn();
        if (Fe) {
          if (s === void 0) throw Error(o(407));
          s = s();
        } else {
          if (s = n(), st === null) throw Error(o(349));
          (Tr & 30) !== 0 || gf(a, n, s);
        }
        f.memoizedState = s;
        var g = {
          value: s,
          getSnapshot: n
        };
        return f.queue = g, Ef(vf.bind(null, a, g, t), [
          t
        ]), a.flags |= 2048, cs(9, yf.bind(null, a, g, s, n), void 0, null), s;
      },
      useId: function() {
        var t = kn(), n = st.identifierPrefix;
        if (Fe) {
          var s = Ln, a = Pn;
          s = (a & ~(1 << 32 - rn(a) - 1)).toString(32) + s, n = ":" + n + "R" + s, s = as++, 0 < s && (n += "H" + s.toString(32)), n += ":";
        } else s = qg++, n = ":" + n + "r" + s.toString(32) + ":";
        return t.memoizedState = n;
      },
      unstable_isNewReconciler: false
    }, ry = {
      readContext: Wt,
      useCallback: If,
      useContext: Wt,
      useEffect: ou,
      useImperativeHandle: Mf,
      useInsertionEffect: Cf,
      useLayoutEffect: _f,
      useMemo: bf,
      useReducer: nu,
      useRef: kf,
      useState: function() {
        return nu(us);
      },
      useDebugValue: su,
      useDeferredValue: function(t) {
        var n = Yt();
        return Tf(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = nu(us)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: pf,
      useSyncExternalStore: mf,
      useId: Af,
      unstable_isNewReconciler: false
    }, oy = {
      readContext: Wt,
      useCallback: If,
      useContext: Wt,
      useEffect: ou,
      useImperativeHandle: Mf,
      useInsertionEffect: Cf,
      useLayoutEffect: _f,
      useMemo: bf,
      useReducer: ru,
      useRef: kf,
      useState: function() {
        return ru(us);
      },
      useDebugValue: su,
      useDeferredValue: function(t) {
        var n = Yt();
        return Je === null ? n.memoizedState = t : Tf(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = ru(us)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: pf,
      useSyncExternalStore: mf,
      useId: Af,
      unstable_isNewReconciler: false
    };
    function ln(t, n) {
      if (t && t.defaultProps) {
        n = B({}, n), t = t.defaultProps;
        for (var s in t) n[s] === void 0 && (n[s] = t[s]);
        return n;
      }
      return n;
    }
    function iu(t, n, s, a) {
      n = t.memoizedState, s = s(a, n), s = s == null ? n : B({}, n, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
    }
    var ji = {
      isMounted: function(t) {
        return (t = t._reactInternals) ? An(t) === t : false;
      },
      enqueueSetState: function(t, n, s) {
        t = t._reactInternals;
        var a = vt(), f = lr(t), g = zn(a, f);
        g.payload = n, s != null && (g.callback = s), n = rr(t, g, f), n !== null && (cn(n, t, f, a), Ri(n, t, f));
      },
      enqueueReplaceState: function(t, n, s) {
        t = t._reactInternals;
        var a = vt(), f = lr(t), g = zn(a, f);
        g.tag = 1, g.payload = n, s != null && (g.callback = s), n = rr(t, g, f), n !== null && (cn(n, t, f, a), Ri(n, t, f));
      },
      enqueueForceUpdate: function(t, n) {
        t = t._reactInternals;
        var s = vt(), a = lr(t), f = zn(s, a);
        f.tag = 2, n != null && (f.callback = n), n = rr(t, f, a), n !== null && (cn(n, t, a, s), Ri(n, t, a));
      }
    };
    function Lf(t, n, s, a, f, g, w) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, g, w) : n.prototype && n.prototype.isPureReactComponent ? !Qo(s, a) || !Qo(f, g) : true;
    }
    function Df(t, n, s) {
      var a = false, f = er, g = n.contextType;
      return typeof g == "object" && g !== null ? g = Wt(g) : (f = Et(n) ? _r : ft.current, a = n.contextTypes, g = (a = a != null) ? so(t, f) : er), n = new n(s, g), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ji, t.stateNode = n, n._reactInternals = t, a && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = g), n;
    }
    function zf(t, n, s, a) {
      t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, a), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, a), n.state !== t && ji.enqueueReplaceState(n, n.state, null);
    }
    function lu(t, n, s, a) {
      var f = t.stateNode;
      f.props = s, f.state = t.memoizedState, f.refs = {}, Ga(t);
      var g = n.contextType;
      typeof g == "object" && g !== null ? f.context = Wt(g) : (g = Et(n) ? _r : ft.current, f.context = so(t, g)), f.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (iu(t, n, g, s), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (n = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), n !== f.state && ji.enqueueReplaceState(f, f.state, null), Pi(t, s, f, a), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308);
    }
    function po(t, n) {
      try {
        var s = "", a = n;
        do
          s += le(a), a = a.return;
        while (a);
        var f = s;
      } catch (g) {
        f = `
Error generating stack: ` + g.message + `
` + g.stack;
      }
      return {
        value: t,
        source: n,
        stack: f,
        digest: null
      };
    }
    function au(t, n, s) {
      return {
        value: t,
        source: null,
        stack: s ?? null,
        digest: n ?? null
      };
    }
    function uu(t, n) {
      try {
        console.error(n.value);
      } catch (s) {
        setTimeout(function() {
          throw s;
        });
      }
    }
    var sy = typeof WeakMap == "function" ? WeakMap : Map;
    function Of(t, n, s) {
      s = zn(-1, s), s.tag = 3, s.payload = {
        element: null
      };
      var a = n.value;
      return s.callback = function() {
        Xi || (Xi = true, Cu = a), uu(t, n);
      }, s;
    }
    function Ff(t, n, s) {
      s = zn(-1, s), s.tag = 3;
      var a = t.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var f = n.value;
        s.payload = function() {
          return a(f);
        }, s.callback = function() {
          uu(t, n);
        };
      }
      var g = t.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" && (s.callback = function() {
        uu(t, n), typeof a != "function" && (sr === null ? sr = /* @__PURE__ */ new Set([
          this
        ]) : sr.add(this));
        var w = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: w !== null ? w : ""
        });
      }), s;
    }
    function Bf(t, n, s) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new sy();
        var f = /* @__PURE__ */ new Set();
        a.set(n, f);
      } else f = a.get(n), f === void 0 && (f = /* @__PURE__ */ new Set(), a.set(n, f));
      f.has(s) || (f.add(s), t = wy.bind(null, t, n, s), n.then(t, t));
    }
    function jf(t) {
      do {
        var n;
        if ((n = t.tag === 13) && (n = t.memoizedState, n = n !== null ? n.dehydrated !== null : true), n) return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Hf(t, n, s, a, f) {
      return (t.mode & 1) === 0 ? (t === n ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (n = zn(-1, 1), n.tag = 2, rr(s, n, 1))), s.lanes |= 1), t) : (t.flags |= 65536, t.lanes = f, t);
    }
    var iy = A.ReactCurrentOwner, Ct = false;
    function yt(t, n, s, a) {
      n.child = t === null ? af(n, null, s, a) : uo(n, t.child, s, a);
    }
    function Vf(t, n, s, a, f) {
      s = s.render;
      var g = n.ref;
      return fo(n, f), a = eu(t, n, s, a, g, f), s = tu(), t !== null && !Ct ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~f, On(t, n, f)) : (Fe && s && za(n), n.flags |= 1, yt(t, n, a, f), n.child);
    }
    function Uf(t, n, s, a, f) {
      if (t === null) {
        var g = s.type;
        return typeof g == "function" && !Au(g) && g.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (n.tag = 15, n.type = g, Wf(t, n, g, a, f)) : (t = el(s.type, null, a, n, n.mode, f), t.ref = n.ref, t.return = n, n.child = t);
      }
      if (g = t.child, (t.lanes & f) === 0) {
        var w = g.memoizedProps;
        if (s = s.compare, s = s !== null ? s : Qo, s(w, a) && t.ref === n.ref) return On(t, n, f);
      }
      return n.flags |= 1, t = ur(g, a), t.ref = n.ref, t.return = n, n.child = t;
    }
    function Wf(t, n, s, a, f) {
      if (t !== null) {
        var g = t.memoizedProps;
        if (Qo(g, a) && t.ref === n.ref) if (Ct = false, n.pendingProps = a = g, (t.lanes & f) !== 0) (t.flags & 131072) !== 0 && (Ct = true);
        else return n.lanes = t.lanes, On(t, n, f);
      }
      return cu(t, n, s, a, f);
    }
    function Yf(t, n, s) {
      var a = n.pendingProps, f = a.children, g = t !== null ? t.memoizedState : null;
      if (a.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Pe(go, Rt), Rt |= s;
      else {
        if ((s & 1073741824) === 0) return t = g !== null ? g.baseLanes | s : s, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
          baseLanes: t,
          cachePool: null,
          transitions: null
        }, n.updateQueue = null, Pe(go, Rt), Rt |= t, null;
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, a = g !== null ? g.baseLanes : s, Pe(go, Rt), Rt |= a;
      }
      else g !== null ? (a = g.baseLanes | s, n.memoizedState = null) : a = s, Pe(go, Rt), Rt |= a;
      return yt(t, n, f, s), n.child;
    }
    function Gf(t, n) {
      var s = n.ref;
      (t === null && s !== null || t !== null && t.ref !== s) && (n.flags |= 512, n.flags |= 2097152);
    }
    function cu(t, n, s, a, f) {
      var g = Et(s) ? _r : ft.current;
      return g = so(n, g), fo(n, f), s = eu(t, n, s, a, g, f), a = tu(), t !== null && !Ct ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~f, On(t, n, f)) : (Fe && a && za(n), n.flags |= 1, yt(t, n, s, f), n.child);
    }
    function Xf(t, n, s, a, f) {
      if (Et(s)) {
        var g = true;
        _i(n);
      } else g = false;
      if (fo(n, f), n.stateNode === null) Vi(t, n), Df(n, s, a), lu(n, s, a, f), a = true;
      else if (t === null) {
        var w = n.stateNode, M = n.memoizedProps;
        w.props = M;
        var T = w.context, W = s.contextType;
        typeof W == "object" && W !== null ? W = Wt(W) : (W = Et(s) ? _r : ft.current, W = so(n, W));
        var re = s.getDerivedStateFromProps, se = typeof re == "function" || typeof w.getSnapshotBeforeUpdate == "function";
        se || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== a || T !== W) && zf(n, w, a, W), nr = false;
        var te = n.memoizedState;
        w.state = te, Pi(n, a, w, f), T = n.memoizedState, M !== a || te !== T || kt.current || nr ? (typeof re == "function" && (iu(n, s, re, a), T = n.memoizedState), (M = nr || Lf(n, s, M, a, te, T, W)) ? (se || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = a, n.memoizedState = T), w.props = a, w.state = T, w.context = W, a = M) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), a = false);
      } else {
        w = n.stateNode, cf(t, n), M = n.memoizedProps, W = n.type === n.elementType ? M : ln(n.type, M), w.props = W, se = n.pendingProps, te = w.context, T = s.contextType, typeof T == "object" && T !== null ? T = Wt(T) : (T = Et(s) ? _r : ft.current, T = so(n, T));
        var ue = s.getDerivedStateFromProps;
        (re = typeof ue == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== se || te !== T) && zf(n, w, a, T), nr = false, te = n.memoizedState, w.state = te, Pi(n, a, w, f);
        var de = n.memoizedState;
        M !== se || te !== de || kt.current || nr ? (typeof ue == "function" && (iu(n, s, ue, a), de = n.memoizedState), (W = nr || Lf(n, s, W, a, te, de, T) || false) ? (re || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(a, de, T), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(a, de, T)), typeof w.componentDidUpdate == "function" && (n.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 1024), n.memoizedProps = a, n.memoizedState = de), w.props = a, w.state = de, w.context = T, a = W) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 1024), a = false);
      }
      return du(t, n, s, a, g, f);
    }
    function du(t, n, s, a, f, g) {
      Gf(t, n);
      var w = (n.flags & 128) !== 0;
      if (!a && !w) return f && qd(n, s, false), On(t, n, g);
      a = n.stateNode, iy.current = n;
      var M = w && typeof s.getDerivedStateFromError != "function" ? null : a.render();
      return n.flags |= 1, t !== null && w ? (n.child = uo(n, t.child, null, g), n.child = uo(n, null, M, g)) : yt(t, n, M, g), n.memoizedState = a.state, f && qd(n, s, true), n.child;
    }
    function Kf(t) {
      var n = t.stateNode;
      n.pendingContext ? Qd(t, n.pendingContext, n.pendingContext !== n.context) : n.context && Qd(t, n.context, false), Xa(t, n.containerInfo);
    }
    function Qf(t, n, s, a, f) {
      return ao(), ja(f), n.flags |= 256, yt(t, n, s, a), n.child;
    }
    var fu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    };
    function hu(t) {
      return {
        baseLanes: t,
        cachePool: null,
        transitions: null
      };
    }
    function Zf(t, n, s) {
      var a = n.pendingProps, f = je.current, g = false, w = (n.flags & 128) !== 0, M;
      if ((M = w) || (M = t !== null && t.memoizedState === null ? false : (f & 2) !== 0), M ? (g = true, n.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), Pe(je, f & 1), t === null) return Ba(n), t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (w = a.children, t = a.fallback, g ? (a = n.mode, g = n.child, w = {
        mode: "hidden",
        children: w
      }, (a & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = w) : g = tl(w, a, 0, null), t = Lr(t, a, s, null), g.return = n, t.return = n, g.sibling = t, n.child = g, n.child.memoizedState = hu(s), n.memoizedState = fu, t) : pu(n, w));
      if (f = t.memoizedState, f !== null && (M = f.dehydrated, M !== null)) return ly(t, n, w, a, M, f, s);
      if (g) {
        g = a.fallback, w = n.mode, f = t.child, M = f.sibling;
        var T = {
          mode: "hidden",
          children: a.children
        };
        return (w & 1) === 0 && n.child !== f ? (a = n.child, a.childLanes = 0, a.pendingProps = T, n.deletions = null) : (a = ur(f, T), a.subtreeFlags = f.subtreeFlags & 14680064), M !== null ? g = ur(M, g) : (g = Lr(g, w, s, null), g.flags |= 2), g.return = n, a.return = n, a.sibling = g, n.child = a, a = g, g = n.child, w = t.child.memoizedState, w = w === null ? hu(s) : {
          baseLanes: w.baseLanes | s,
          cachePool: null,
          transitions: w.transitions
        }, g.memoizedState = w, g.childLanes = t.childLanes & ~s, n.memoizedState = fu, a;
      }
      return g = t.child, t = g.sibling, a = ur(g, {
        mode: "visible",
        children: a.children
      }), (n.mode & 1) === 0 && (a.lanes = s), a.return = n, a.sibling = null, t !== null && (s = n.deletions, s === null ? (n.deletions = [
        t
      ], n.flags |= 16) : s.push(t)), n.child = a, n.memoizedState = null, a;
    }
    function pu(t, n) {
      return n = tl({
        mode: "visible",
        children: n
      }, t.mode, 0, null), n.return = t, t.child = n;
    }
    function Hi(t, n, s, a) {
      return a !== null && ja(a), uo(n, t.child, null, s), t = pu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
    }
    function ly(t, n, s, a, f, g, w) {
      if (s) return n.flags & 256 ? (n.flags &= -257, a = au(Error(o(422))), Hi(t, n, w, a)) : n.memoizedState !== null ? (n.child = t.child, n.flags |= 128, null) : (g = a.fallback, f = n.mode, a = tl({
        mode: "visible",
        children: a.children
      }, f, 0, null), g = Lr(g, f, w, null), g.flags |= 2, a.return = n, g.return = n, a.sibling = g, n.child = a, (n.mode & 1) !== 0 && uo(n, t.child, null, w), n.child.memoizedState = hu(w), n.memoizedState = fu, g);
      if ((n.mode & 1) === 0) return Hi(t, n, w, null);
      if (f.data === "$!") {
        if (a = f.nextSibling && f.nextSibling.dataset, a) var M = a.dgst;
        return a = M, g = Error(o(419)), a = au(g, a, void 0), Hi(t, n, w, a);
      }
      if (M = (w & t.childLanes) !== 0, Ct || M) {
        if (a = st, a !== null) {
          switch (w & -w) {
            case 4:
              f = 2;
              break;
            case 16:
              f = 8;
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
              f = 32;
              break;
            case 536870912:
              f = 268435456;
              break;
            default:
              f = 0;
          }
          f = (f & (a.suspendedLanes | w)) !== 0 ? 0 : f, f !== 0 && f !== g.retryLane && (g.retryLane = f, Dn(t, f), cn(a, t, f, -1));
        }
        return Tu(), a = au(Error(o(421))), Hi(t, n, w, a);
      }
      return f.data === "$?" ? (n.flags |= 128, n.child = t.child, n = xy.bind(null, t), f._reactRetry = n, null) : (t = g.treeContext, $t = qn(f.nextSibling), At = n, Fe = true, sn = null, t !== null && (Vt[Ut++] = Pn, Vt[Ut++] = Ln, Vt[Ut++] = Nr, Pn = t.id, Ln = t.overflow, Nr = n), n = pu(n, a.children), n.flags |= 4096, n);
    }
    function qf(t, n, s) {
      t.lanes |= n;
      var a = t.alternate;
      a !== null && (a.lanes |= n), Wa(t.return, n, s);
    }
    function mu(t, n, s, a, f) {
      var g = t.memoizedState;
      g === null ? t.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: s,
        tailMode: f
      } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = a, g.tail = s, g.tailMode = f);
    }
    function Jf(t, n, s) {
      var a = n.pendingProps, f = a.revealOrder, g = a.tail;
      if (yt(t, n, a.children, s), a = je.current, (a & 2) !== 0) a = a & 1 | 2, n.flags |= 128;
      else {
        if (t !== null && (t.flags & 128) !== 0) e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && qf(t, s, n);
          else if (t.tag === 19) qf(t, s, n);
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
      else switch (f) {
        case "forwards":
          for (s = n.child, f = null; s !== null; ) t = s.alternate, t !== null && Li(t) === null && (f = s), s = s.sibling;
          s = f, s === null ? (f = n.child, n.child = null) : (f = s.sibling, s.sibling = null), mu(n, false, f, s, g);
          break;
        case "backwards":
          for (s = null, f = n.child, n.child = null; f !== null; ) {
            if (t = f.alternate, t !== null && Li(t) === null) {
              n.child = f;
              break;
            }
            t = f.sibling, f.sibling = s, s = f, f = t;
          }
          mu(n, true, s, null, g);
          break;
        case "together":
          mu(n, false, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
      return n.child;
    }
    function Vi(t, n) {
      (n.mode & 1) === 0 && t !== null && (t.alternate = null, n.alternate = null, n.flags |= 2);
    }
    function On(t, n, s) {
      if (t !== null && (n.dependencies = t.dependencies), Ar |= n.lanes, (s & n.childLanes) === 0) return null;
      if (t !== null && n.child !== t.child) throw Error(o(153));
      if (n.child !== null) {
        for (t = n.child, s = ur(t, t.pendingProps), n.child = s, s.return = n; t.sibling !== null; ) t = t.sibling, s = s.sibling = ur(t, t.pendingProps), s.return = n;
        s.sibling = null;
      }
      return n.child;
    }
    function ay(t, n, s) {
      switch (n.tag) {
        case 3:
          Kf(n), ao();
          break;
        case 5:
          hf(n);
          break;
        case 1:
          Et(n.type) && _i(n);
          break;
        case 4:
          Xa(n, n.stateNode.containerInfo);
          break;
        case 10:
          var a = n.type._context, f = n.memoizedProps.value;
          Pe(Ai, a._currentValue), a._currentValue = f;
          break;
        case 13:
          if (a = n.memoizedState, a !== null) return a.dehydrated !== null ? (Pe(je, je.current & 1), n.flags |= 128, null) : (s & n.child.childLanes) !== 0 ? Zf(t, n, s) : (Pe(je, je.current & 1), t = On(t, n, s), t !== null ? t.sibling : null);
          Pe(je, je.current & 1);
          break;
        case 19:
          if (a = (s & n.childLanes) !== 0, (t.flags & 128) !== 0) {
            if (a) return Jf(t, n, s);
            n.flags |= 128;
          }
          if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Pe(je, je.current), a) break;
          return null;
        case 22:
        case 23:
          return n.lanes = 0, Yf(t, n, s);
      }
      return On(t, n, s);
    }
    var eh, gu, th, nh;
    eh = function(t, n) {
      for (var s = n.child; s !== null; ) {
        if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
        else if (s.tag !== 4 && s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
        if (s === n) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === n) return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, gu = function() {
    }, th = function(t, n, s, a) {
      var f = t.memoizedProps;
      if (f !== a) {
        t = n.stateNode, br(Sn.current);
        var g = null;
        switch (s) {
          case "input":
            f = Qe(t, f), a = Qe(t, a), g = [];
            break;
          case "select":
            f = B({}, f, {
              value: void 0
            }), a = B({}, a, {
              value: void 0
            }), g = [];
            break;
          case "textarea":
            f = pn(t, f), a = pn(t, a), g = [];
            break;
          default:
            typeof f.onClick != "function" && typeof a.onClick == "function" && (t.onclick = ki);
        }
        St(s, a);
        var w;
        s = null;
        for (W in f) if (!a.hasOwnProperty(W) && f.hasOwnProperty(W) && f[W] != null) if (W === "style") {
          var M = f[W];
          for (w in M) M.hasOwnProperty(w) && (s || (s = {}), s[w] = "");
        } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (l.hasOwnProperty(W) ? g || (g = []) : (g = g || []).push(W, null));
        for (W in a) {
          var T = a[W];
          if (M = f == null ? void 0 : f[W], a.hasOwnProperty(W) && T !== M && (T != null || M != null)) if (W === "style") if (M) {
            for (w in M) !M.hasOwnProperty(w) || T && T.hasOwnProperty(w) || (s || (s = {}), s[w] = "");
            for (w in T) T.hasOwnProperty(w) && M[w] !== T[w] && (s || (s = {}), s[w] = T[w]);
          } else s || (g || (g = []), g.push(W, s)), s = T;
          else W === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, M = M ? M.__html : void 0, T != null && M !== T && (g = g || []).push(W, T)) : W === "children" ? typeof T != "string" && typeof T != "number" || (g = g || []).push(W, "" + T) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (l.hasOwnProperty(W) ? (T != null && W === "onScroll" && De("scroll", t), g || M === T || (g = [])) : (g = g || []).push(W, T));
        }
        s && (g = g || []).push("style", s);
        var W = g;
        (n.updateQueue = W) && (n.flags |= 4);
      }
    }, nh = function(t, n, s, a) {
      s !== a && (n.flags |= 4);
    };
    function ds(t, n) {
      if (!Fe) switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var s = null; n !== null; ) n.alternate !== null && (s = n), n = n.sibling;
          s === null ? t.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = t.tail;
          for (var a = null; s !== null; ) s.alternate !== null && (a = s), s = s.sibling;
          a === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function pt(t) {
      var n = t.alternate !== null && t.alternate.child === t.child, s = 0, a = 0;
      if (n) for (var f = t.child; f !== null; ) s |= f.lanes | f.childLanes, a |= f.subtreeFlags & 14680064, a |= f.flags & 14680064, f.return = t, f = f.sibling;
      else for (f = t.child; f !== null; ) s |= f.lanes | f.childLanes, a |= f.subtreeFlags, a |= f.flags, f.return = t, f = f.sibling;
      return t.subtreeFlags |= a, t.childLanes = s, n;
    }
    function uy(t, n, s) {
      var a = n.pendingProps;
      switch (Oa(n), n.tag) {
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
          return pt(n), null;
        case 1:
          return Et(n.type) && Ci(), pt(n), null;
        case 3:
          return a = n.stateNode, ho(), ze(kt), ze(ft), Za(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (bi(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, sn !== null && (Mu(sn), sn = null))), gu(t, n), pt(n), null;
        case 5:
          Ka(n);
          var f = br(is.current);
          if (s = n.type, t !== null && n.stateNode != null) th(t, n, s, a, f), t.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
          else {
            if (!a) {
              if (n.stateNode === null) throw Error(o(166));
              return pt(n), null;
            }
            if (t = br(Sn.current), bi(n)) {
              a = n.stateNode, s = n.type;
              var g = n.memoizedProps;
              switch (a[xn] = n, a[ts] = g, t = (n.mode & 1) !== 0, s) {
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
                  for (f = 0; f < qo.length; f++) De(qo[f], a);
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
                  Oe(a, g), De("invalid", a);
                  break;
                case "select":
                  a._wrapperState = {
                    wasMultiple: !!g.multiple
                  }, De("invalid", a);
                  break;
                case "textarea":
                  Nn(a, g), De("invalid", a);
              }
              St(s, g), f = null;
              for (var w in g) if (g.hasOwnProperty(w)) {
                var M = g[w];
                w === "children" ? typeof M == "string" ? a.textContent !== M && (g.suppressHydrationWarning !== true && Si(a.textContent, M, t), f = [
                  "children",
                  M
                ]) : typeof M == "number" && a.textContent !== "" + M && (g.suppressHydrationWarning !== true && Si(a.textContent, M, t), f = [
                  "children",
                  "" + M
                ]) : l.hasOwnProperty(w) && M != null && w === "onScroll" && De("scroll", a);
              }
              switch (s) {
                case "input":
                  Ve(a), ye(a, g, true);
                  break;
                case "textarea":
                  Ve(a), Mn(a);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof g.onClick == "function" && (a.onclick = ki);
              }
              a = f, n.updateQueue = a, a !== null && (n.flags |= 4);
            } else {
              w = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = mn(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = w.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof a.is == "string" ? t = w.createElement(s, {
                is: a.is
              }) : (t = w.createElement(s), s === "select" && (w = t, a.multiple ? w.multiple = true : a.size && (w.size = a.size))) : t = w.createElementNS(t, s), t[xn] = n, t[ts] = a, eh(t, n, false, false), n.stateNode = t;
              e: {
                switch (w = nn(s, a), s) {
                  case "dialog":
                    De("cancel", t), De("close", t), f = a;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    De("load", t), f = a;
                    break;
                  case "video":
                  case "audio":
                    for (f = 0; f < qo.length; f++) De(qo[f], t);
                    f = a;
                    break;
                  case "source":
                    De("error", t), f = a;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    De("error", t), De("load", t), f = a;
                    break;
                  case "details":
                    De("toggle", t), f = a;
                    break;
                  case "input":
                    Oe(t, a), f = Qe(t, a), De("invalid", t);
                    break;
                  case "option":
                    f = a;
                    break;
                  case "select":
                    t._wrapperState = {
                      wasMultiple: !!a.multiple
                    }, f = B({}, a, {
                      value: void 0
                    }), De("invalid", t);
                    break;
                  case "textarea":
                    Nn(t, a), f = pn(t, a), De("invalid", t);
                    break;
                  default:
                    f = a;
                }
                St(s, f), M = f;
                for (g in M) if (M.hasOwnProperty(g)) {
                  var T = M[g];
                  g === "style" ? yn(t, T) : g === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && In(t, T)) : g === "children" ? typeof T == "string" ? (s !== "textarea" || T !== "") && tn(t, T) : typeof T == "number" && tn(t, "" + T) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (l.hasOwnProperty(g) ? T != null && g === "onScroll" && De("scroll", t) : T != null && b(t, g, T, w));
                }
                switch (s) {
                  case "input":
                    Ve(t), ye(t, a, false);
                    break;
                  case "textarea":
                    Ve(t), Mn(t);
                    break;
                  case "option":
                    a.value != null && t.setAttribute("value", "" + me(a.value));
                    break;
                  case "select":
                    t.multiple = !!a.multiple, g = a.value, g != null ? Ft(t, !!a.multiple, g, false) : a.defaultValue != null && Ft(t, !!a.multiple, a.defaultValue, true);
                    break;
                  default:
                    typeof f.onClick == "function" && (t.onclick = ki);
                }
                switch (s) {
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
          return pt(n), null;
        case 6:
          if (t && n.stateNode != null) nh(t, n, t.memoizedProps, a);
          else {
            if (typeof a != "string" && n.stateNode === null) throw Error(o(166));
            if (s = br(is.current), br(Sn.current), bi(n)) {
              if (a = n.stateNode, s = n.memoizedProps, a[xn] = n, (g = a.nodeValue !== s) && (t = At, t !== null)) switch (t.tag) {
                case 3:
                  Si(a.nodeValue, s, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== true && Si(a.nodeValue, s, (t.mode & 1) !== 0);
              }
              g && (n.flags |= 4);
            } else a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a), a[xn] = n, n.stateNode = a;
          }
          return pt(n), null;
        case 13:
          if (ze(je), a = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (Fe && $t !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) of(), ao(), n.flags |= 98560, g = false;
            else if (g = bi(n), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!g) throw Error(o(318));
                if (g = n.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(o(317));
                g[xn] = n;
              } else ao(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              pt(n), g = false;
            } else sn !== null && (Mu(sn), sn = null), g = true;
            if (!g) return n.flags & 65536 ? n : null;
          }
          return (n.flags & 128) !== 0 ? (n.lanes = s, n) : (a = a !== null, a !== (t !== null && t.memoizedState !== null) && a && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (t === null || (je.current & 1) !== 0 ? et === 0 && (et = 3) : Tu())), n.updateQueue !== null && (n.flags |= 4), pt(n), null);
        case 4:
          return ho(), gu(t, n), t === null && Jo(n.stateNode.containerInfo), pt(n), null;
        case 10:
          return Ua(n.type._context), pt(n), null;
        case 17:
          return Et(n.type) && Ci(), pt(n), null;
        case 19:
          if (ze(je), g = n.memoizedState, g === null) return pt(n), null;
          if (a = (n.flags & 128) !== 0, w = g.rendering, w === null) if (a) ds(g, false);
          else {
            if (et !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
              if (w = Li(t), w !== null) {
                for (n.flags |= 128, ds(g, false), a = w.updateQueue, a !== null && (n.updateQueue = a, n.flags |= 4), n.subtreeFlags = 0, a = s, s = n.child; s !== null; ) g = s, t = a, g.flags &= 14680066, w = g.alternate, w === null ? (g.childLanes = 0, g.lanes = t, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = w.childLanes, g.lanes = w.lanes, g.child = w.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = w.memoizedProps, g.memoizedState = w.memoizedState, g.updateQueue = w.updateQueue, g.type = w.type, t = w.dependencies, g.dependencies = t === null ? null : {
                  lanes: t.lanes,
                  firstContext: t.firstContext
                }), s = s.sibling;
                return Pe(je, je.current & 1 | 2), n.child;
              }
              t = t.sibling;
            }
            g.tail !== null && Be() > yo && (n.flags |= 128, a = true, ds(g, false), n.lanes = 4194304);
          }
          else {
            if (!a) if (t = Li(w), t !== null) {
              if (n.flags |= 128, a = true, s = t.updateQueue, s !== null && (n.updateQueue = s, n.flags |= 4), ds(g, true), g.tail === null && g.tailMode === "hidden" && !w.alternate && !Fe) return pt(n), null;
            } else 2 * Be() - g.renderingStartTime > yo && s !== 1073741824 && (n.flags |= 128, a = true, ds(g, false), n.lanes = 4194304);
            g.isBackwards ? (w.sibling = n.child, n.child = w) : (s = g.last, s !== null ? s.sibling = w : n.child = w, g.last = w);
          }
          return g.tail !== null ? (n = g.tail, g.rendering = n, g.tail = n.sibling, g.renderingStartTime = Be(), n.sibling = null, s = je.current, Pe(je, a ? s & 1 | 2 : s & 1), n) : (pt(n), null);
        case 22:
        case 23:
          return bu(), a = n.memoizedState !== null, t !== null && t.memoizedState !== null !== a && (n.flags |= 8192), a && (n.mode & 1) !== 0 ? (Rt & 1073741824) !== 0 && (pt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : pt(n), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(o(156, n.tag));
    }
    function cy(t, n) {
      switch (Oa(n), n.tag) {
        case 1:
          return Et(n.type) && Ci(), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
        case 3:
          return ho(), ze(kt), ze(ft), Za(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
        case 5:
          return Ka(n), null;
        case 13:
          if (ze(je), t = n.memoizedState, t !== null && t.dehydrated !== null) {
            if (n.alternate === null) throw Error(o(340));
            ao();
          }
          return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
        case 19:
          return ze(je), null;
        case 4:
          return ho(), null;
        case 10:
          return Ua(n.type._context), null;
        case 22:
        case 23:
          return bu(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Ui = false, mt = false, dy = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
    function mo(t, n) {
      var s = t.ref;
      if (s !== null) if (typeof s == "function") try {
        s(null);
      } catch (a) {
        Ye(t, n, a);
      }
      else s.current = null;
    }
    function yu(t, n, s) {
      try {
        s();
      } catch (a) {
        Ye(t, n, a);
      }
    }
    var rh = false;
    function fy(t, n) {
      if (ba = ci, t = Pd(), Sa(t)) {
        if ("selectionStart" in t) var s = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else e: {
          s = (s = t.ownerDocument) && s.defaultView || window;
          var a = s.getSelection && s.getSelection();
          if (a && a.rangeCount !== 0) {
            s = a.anchorNode;
            var f = a.anchorOffset, g = a.focusNode;
            a = a.focusOffset;
            try {
              s.nodeType, g.nodeType;
            } catch {
              s = null;
              break e;
            }
            var w = 0, M = -1, T = -1, W = 0, re = 0, se = t, te = null;
            t: for (; ; ) {
              for (var ue; se !== s || f !== 0 && se.nodeType !== 3 || (M = w + f), se !== g || a !== 0 && se.nodeType !== 3 || (T = w + a), se.nodeType === 3 && (w += se.nodeValue.length), (ue = se.firstChild) !== null; ) te = se, se = ue;
              for (; ; ) {
                if (se === t) break t;
                if (te === s && ++W === f && (M = w), te === g && ++re === a && (T = w), (ue = se.nextSibling) !== null) break;
                se = te, te = se.parentNode;
              }
              se = ue;
            }
            s = M === -1 || T === -1 ? null : {
              start: M,
              end: T
            };
          } else s = null;
        }
        s = s || {
          start: 0,
          end: 0
        };
      } else s = null;
      for (Ta = {
        focusedElem: t,
        selectionRange: s
      }, ci = false, ce = n; ce !== null; ) if (n = ce, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, ce = t;
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
                var fe = de.memoizedProps, Xe = de.memoizedState, j = n.stateNode, P = j.getSnapshotBeforeUpdate(n.elementType === n.type ? fe : ln(n.type, fe), Xe);
                j.__reactInternalSnapshotBeforeUpdate = P;
              }
              break;
            case 3:
              var V = n.stateNode.containerInfo;
              V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(o(163));
          }
        } catch (ie) {
          Ye(n, n.return, ie);
        }
        if (t = n.sibling, t !== null) {
          t.return = n.return, ce = t;
          break;
        }
        ce = n.return;
      }
      return de = rh, rh = false, de;
    }
    function fs(t, n, s) {
      var a = n.updateQueue;
      if (a = a !== null ? a.lastEffect : null, a !== null) {
        var f = a = a.next;
        do {
          if ((f.tag & t) === t) {
            var g = f.destroy;
            f.destroy = void 0, g !== void 0 && yu(n, s, g);
          }
          f = f.next;
        } while (f !== a);
      }
    }
    function Wi(t, n) {
      if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var s = n = n.next;
        do {
          if ((s.tag & t) === t) {
            var a = s.create;
            s.destroy = a();
          }
          s = s.next;
        } while (s !== n);
      }
    }
    function vu(t) {
      var n = t.ref;
      if (n !== null) {
        var s = t.stateNode;
        switch (t.tag) {
          case 5:
            t = s;
            break;
          default:
            t = s;
        }
        typeof n == "function" ? n(t) : n.current = t;
      }
    }
    function oh(t) {
      var n = t.alternate;
      n !== null && (t.alternate = null, oh(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && (delete n[xn], delete n[ts], delete n[Pa], delete n[Xg], delete n[Kg])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function sh(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 4;
    }
    function ih(t) {
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
    function wu(t, n, s) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, n ? s.nodeType === 8 ? s.parentNode.insertBefore(t, n) : s.insertBefore(t, n) : (s.nodeType === 8 ? (n = s.parentNode, n.insertBefore(t, s)) : (n = s, n.appendChild(t)), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = ki));
      else if (a !== 4 && (t = t.child, t !== null)) for (wu(t, n, s), t = t.sibling; t !== null; ) wu(t, n, s), t = t.sibling;
    }
    function xu(t, n, s) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, n ? s.insertBefore(t, n) : s.appendChild(t);
      else if (a !== 4 && (t = t.child, t !== null)) for (xu(t, n, s), t = t.sibling; t !== null; ) xu(t, n, s), t = t.sibling;
    }
    var lt = null, an = false;
    function or(t, n, s) {
      for (s = s.child; s !== null; ) lh(t, n, s), s = s.sibling;
    }
    function lh(t, n, s) {
      if (Ht && typeof Ht.onCommitFiberUnmount == "function") try {
        Ht.onCommitFiberUnmount(Kr, s);
      } catch {
      }
      switch (s.tag) {
        case 5:
          mt || mo(s, n);
        case 6:
          var a = lt, f = an;
          lt = null, or(t, n, s), lt = a, an = f, lt !== null && (an ? (t = lt, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : lt.removeChild(s.stateNode));
          break;
        case 18:
          lt !== null && (an ? (t = lt, s = s.stateNode, t.nodeType === 8 ? Ra(t.parentNode, s) : t.nodeType === 1 && Ra(t, s), Uo(t)) : Ra(lt, s.stateNode));
          break;
        case 4:
          a = lt, f = an, lt = s.stateNode.containerInfo, an = true, or(t, n, s), lt = a, an = f;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!mt && (a = s.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
            f = a = a.next;
            do {
              var g = f, w = g.destroy;
              g = g.tag, w !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && yu(s, n, w), f = f.next;
            } while (f !== a);
          }
          or(t, n, s);
          break;
        case 1:
          if (!mt && (mo(s, n), a = s.stateNode, typeof a.componentWillUnmount == "function")) try {
            a.props = s.memoizedProps, a.state = s.memoizedState, a.componentWillUnmount();
          } catch (M) {
            Ye(s, n, M);
          }
          or(t, n, s);
          break;
        case 21:
          or(t, n, s);
          break;
        case 22:
          s.mode & 1 ? (mt = (a = mt) || s.memoizedState !== null, or(t, n, s), mt = a) : or(t, n, s);
          break;
        default:
          or(t, n, s);
      }
    }
    function ah(t) {
      var n = t.updateQueue;
      if (n !== null) {
        t.updateQueue = null;
        var s = t.stateNode;
        s === null && (s = t.stateNode = new dy()), n.forEach(function(a) {
          var f = Sy.bind(null, t, a);
          s.has(a) || (s.add(a), a.then(f, f));
        });
      }
    }
    function un(t, n) {
      var s = n.deletions;
      if (s !== null) for (var a = 0; a < s.length; a++) {
        var f = s[a];
        try {
          var g = t, w = n, M = w;
          e: for (; M !== null; ) {
            switch (M.tag) {
              case 5:
                lt = M.stateNode, an = false;
                break e;
              case 3:
                lt = M.stateNode.containerInfo, an = true;
                break e;
              case 4:
                lt = M.stateNode.containerInfo, an = true;
                break e;
            }
            M = M.return;
          }
          if (lt === null) throw Error(o(160));
          lh(g, w, f), lt = null, an = false;
          var T = f.alternate;
          T !== null && (T.return = null), f.return = null;
        } catch (W) {
          Ye(f, n, W);
        }
      }
      if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) uh(n, t), n = n.sibling;
    }
    function uh(t, n) {
      var s = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (un(n, t), En(t), a & 4) {
            try {
              fs(3, t, t.return), Wi(3, t);
            } catch (fe) {
              Ye(t, t.return, fe);
            }
            try {
              fs(5, t, t.return);
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 1:
          un(n, t), En(t), a & 512 && s !== null && mo(s, s.return);
          break;
        case 5:
          if (un(n, t), En(t), a & 512 && s !== null && mo(s, s.return), t.flags & 32) {
            var f = t.stateNode;
            try {
              tn(f, "");
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          if (a & 4 && (f = t.stateNode, f != null)) {
            var g = t.memoizedProps, w = s !== null ? s.memoizedProps : g, M = t.type, T = t.updateQueue;
            if (t.updateQueue = null, T !== null) try {
              M === "input" && g.type === "radio" && g.name != null && dt(f, g), nn(M, w);
              var W = nn(M, g);
              for (w = 0; w < T.length; w += 2) {
                var re = T[w], se = T[w + 1];
                re === "style" ? yn(f, se) : re === "dangerouslySetInnerHTML" ? In(f, se) : re === "children" ? tn(f, se) : b(f, re, se, W);
              }
              switch (M) {
                case "input":
                  Me(f, g);
                  break;
                case "textarea":
                  Bt(f, g);
                  break;
                case "select":
                  var te = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!g.multiple;
                  var ue = g.value;
                  ue != null ? Ft(f, !!g.multiple, ue, false) : te !== !!g.multiple && (g.defaultValue != null ? Ft(f, !!g.multiple, g.defaultValue, true) : Ft(f, !!g.multiple, g.multiple ? [] : "", false));
              }
              f[ts] = g;
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 6:
          if (un(n, t), En(t), a & 4) {
            if (t.stateNode === null) throw Error(o(162));
            f = t.stateNode, g = t.memoizedProps;
            try {
              f.nodeValue = g;
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 3:
          if (un(n, t), En(t), a & 4 && s !== null && s.memoizedState.isDehydrated) try {
            Uo(n.containerInfo);
          } catch (fe) {
            Ye(t, t.return, fe);
          }
          break;
        case 4:
          un(n, t), En(t);
          break;
        case 13:
          un(n, t), En(t), f = t.child, f.flags & 8192 && (g = f.memoizedState !== null, f.stateNode.isHidden = g, !g || f.alternate !== null && f.alternate.memoizedState !== null || (Eu = Be())), a & 4 && ah(t);
          break;
        case 22:
          if (re = s !== null && s.memoizedState !== null, t.mode & 1 ? (mt = (W = mt) || re, un(n, t), mt = W) : un(n, t), En(t), a & 8192) {
            if (W = t.memoizedState !== null, (t.stateNode.isHidden = W) && !re && (t.mode & 1) !== 0) for (ce = t, re = t.child; re !== null; ) {
              for (se = ce = re; ce !== null; ) {
                switch (te = ce, ue = te.child, te.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fs(4, te, te.return);
                    break;
                  case 1:
                    mo(te, te.return);
                    var de = te.stateNode;
                    if (typeof de.componentWillUnmount == "function") {
                      a = te, s = te.return;
                      try {
                        n = a, de.props = n.memoizedProps, de.state = n.memoizedState, de.componentWillUnmount();
                      } catch (fe) {
                        Ye(a, s, fe);
                      }
                    }
                    break;
                  case 5:
                    mo(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      fh(se);
                      continue;
                    }
                }
                ue !== null ? (ue.return = te, ce = ue) : fh(se);
              }
              re = re.sibling;
            }
            e: for (re = null, se = t; ; ) {
              if (se.tag === 5) {
                if (re === null) {
                  re = se;
                  try {
                    f = se.stateNode, W ? (g = f.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (M = se.stateNode, T = se.memoizedProps.style, w = T != null && T.hasOwnProperty("display") ? T.display : null, M.style.display = gn("display", w));
                  } catch (fe) {
                    Ye(t, t.return, fe);
                  }
                }
              } else if (se.tag === 6) {
                if (re === null) try {
                  se.stateNode.nodeValue = W ? "" : se.memoizedProps;
                } catch (fe) {
                  Ye(t, t.return, fe);
                }
              } else if ((se.tag !== 22 && se.tag !== 23 || se.memoizedState === null || se === t) && se.child !== null) {
                se.child.return = se, se = se.child;
                continue;
              }
              if (se === t) break e;
              for (; se.sibling === null; ) {
                if (se.return === null || se.return === t) break e;
                re === se && (re = null), se = se.return;
              }
              re === se && (re = null), se.sibling.return = se.return, se = se.sibling;
            }
          }
          break;
        case 19:
          un(n, t), En(t), a & 4 && ah(t);
          break;
        case 21:
          break;
        default:
          un(n, t), En(t);
      }
    }
    function En(t) {
      var n = t.flags;
      if (n & 2) {
        try {
          e: {
            for (var s = t.return; s !== null; ) {
              if (sh(s)) {
                var a = s;
                break e;
              }
              s = s.return;
            }
            throw Error(o(160));
          }
          switch (a.tag) {
            case 5:
              var f = a.stateNode;
              a.flags & 32 && (tn(f, ""), a.flags &= -33);
              var g = ih(t);
              xu(t, g, f);
              break;
            case 3:
            case 4:
              var w = a.stateNode.containerInfo, M = ih(t);
              wu(t, M, w);
              break;
            default:
              throw Error(o(161));
          }
        } catch (T) {
          Ye(t, t.return, T);
        }
        t.flags &= -3;
      }
      n & 4096 && (t.flags &= -4097);
    }
    function hy(t, n, s) {
      ce = t, ch(t);
    }
    function ch(t, n, s) {
      for (var a = (t.mode & 1) !== 0; ce !== null; ) {
        var f = ce, g = f.child;
        if (f.tag === 22 && a) {
          var w = f.memoizedState !== null || Ui;
          if (!w) {
            var M = f.alternate, T = M !== null && M.memoizedState !== null || mt;
            M = Ui;
            var W = mt;
            if (Ui = w, (mt = T) && !W) for (ce = f; ce !== null; ) w = ce, T = w.child, w.tag === 22 && w.memoizedState !== null ? hh(f) : T !== null ? (T.return = w, ce = T) : hh(f);
            for (; g !== null; ) ce = g, ch(g), g = g.sibling;
            ce = f, Ui = M, mt = W;
          }
          dh(t);
        } else (f.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = f, ce = g) : dh(t);
      }
    }
    function dh(t) {
      for (; ce !== null; ) {
        var n = ce;
        if ((n.flags & 8772) !== 0) {
          var s = n.alternate;
          try {
            if ((n.flags & 8772) !== 0) switch (n.tag) {
              case 0:
              case 11:
              case 15:
                mt || Wi(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !mt) if (s === null) a.componentDidMount();
                else {
                  var f = n.elementType === n.type ? s.memoizedProps : ln(n.type, s.memoizedProps);
                  a.componentDidUpdate(f, s.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
                var g = n.updateQueue;
                g !== null && ff(n, g, a);
                break;
              case 3:
                var w = n.updateQueue;
                if (w !== null) {
                  if (s = null, n.child !== null) switch (n.child.tag) {
                    case 5:
                      s = n.child.stateNode;
                      break;
                    case 1:
                      s = n.child.stateNode;
                  }
                  ff(n, w, s);
                }
                break;
              case 5:
                var M = n.stateNode;
                if (s === null && n.flags & 4) {
                  s = M;
                  var T = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && s.focus();
                      break;
                    case "img":
                      T.src && (s.src = T.src);
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
                  var W = n.alternate;
                  if (W !== null) {
                    var re = W.memoizedState;
                    if (re !== null) {
                      var se = re.dehydrated;
                      se !== null && Uo(se);
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
            mt || n.flags & 512 && vu(n);
          } catch (te) {
            Ye(n, n.return, te);
          }
        }
        if (n === t) {
          ce = null;
          break;
        }
        if (s = n.sibling, s !== null) {
          s.return = n.return, ce = s;
          break;
        }
        ce = n.return;
      }
    }
    function fh(t) {
      for (; ce !== null; ) {
        var n = ce;
        if (n === t) {
          ce = null;
          break;
        }
        var s = n.sibling;
        if (s !== null) {
          s.return = n.return, ce = s;
          break;
        }
        ce = n.return;
      }
    }
    function hh(t) {
      for (; ce !== null; ) {
        var n = ce;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var s = n.return;
              try {
                Wi(4, n);
              } catch (T) {
                Ye(n, s, T);
              }
              break;
            case 1:
              var a = n.stateNode;
              if (typeof a.componentDidMount == "function") {
                var f = n.return;
                try {
                  a.componentDidMount();
                } catch (T) {
                  Ye(n, f, T);
                }
              }
              var g = n.return;
              try {
                vu(n);
              } catch (T) {
                Ye(n, g, T);
              }
              break;
            case 5:
              var w = n.return;
              try {
                vu(n);
              } catch (T) {
                Ye(n, w, T);
              }
          }
        } catch (T) {
          Ye(n, n.return, T);
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
    var py = Math.ceil, Yi = A.ReactCurrentDispatcher, Su = A.ReactCurrentOwner, Gt = A.ReactCurrentBatchConfig, Ne = 0, st = null, Ze = null, at = 0, Rt = 0, go = Jn(0), et = 0, hs = null, Ar = 0, Gi = 0, ku = 0, ps = null, _t = null, Eu = 0, yo = 1 / 0, Fn = null, Xi = false, Cu = null, sr = null, Ki = false, ir = null, Qi = 0, ms = 0, _u = null, Zi = -1, qi = 0;
    function vt() {
      return (Ne & 6) !== 0 ? Be() : Zi !== -1 ? Zi : Zi = Be();
    }
    function lr(t) {
      return (t.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && at !== 0 ? at & -at : Zg.transition !== null ? (qi === 0 && (qi = sd()), qi) : (t = Ae, t !== 0 || (t = window.event, t = t === void 0 ? 16 : pd(t.type)), t);
    }
    function cn(t, n, s, a) {
      if (50 < ms) throw ms = 0, _u = null, Error(o(185));
      Fo(t, s, a), ((Ne & 2) === 0 || t !== st) && (t === st && ((Ne & 2) === 0 && (Gi |= s), et === 4 && ar(t, at)), Nt(t, a), s === 1 && Ne === 0 && (n.mode & 1) === 0 && (yo = Be() + 500, Ni && tr()));
    }
    function Nt(t, n) {
      var s = t.callbackNode;
      Zm(t, n);
      var a = li(t, t === st ? at : 0);
      if (a === 0) s !== null && ei(s), t.callbackNode = null, t.callbackPriority = 0;
      else if (n = a & -a, t.callbackPriority !== n) {
        if (s != null && ei(s), n === 1) t.tag === 0 ? Qg(mh.bind(null, t)) : Jd(mh.bind(null, t)), Yg(function() {
          (Ne & 6) === 0 && tr();
        }), s = null;
        else {
          switch (id(a)) {
            case 1:
              s = Do;
              break;
            case 4:
              s = ni;
              break;
            case 16:
              s = Xr;
              break;
            case 536870912:
              s = oi;
              break;
            default:
              s = Xr;
          }
          s = Eh(s, ph.bind(null, t));
        }
        t.callbackPriority = n, t.callbackNode = s;
      }
    }
    function ph(t, n) {
      if (Zi = -1, qi = 0, (Ne & 6) !== 0) throw Error(o(327));
      var s = t.callbackNode;
      if (vo() && t.callbackNode !== s) return null;
      var a = li(t, t === st ? at : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & t.expiredLanes) !== 0 || n) n = Ji(t, a);
      else {
        n = a;
        var f = Ne;
        Ne |= 2;
        var g = yh();
        (st !== t || at !== n) && (Fn = null, yo = Be() + 500, Rr(t, n));
        do
          try {
            yy();
            break;
          } catch (M) {
            gh(t, M);
          }
        while (true);
        Va(), Yi.current = g, Ne = f, Ze !== null ? n = 0 : (st = null, at = 0, n = et);
      }
      if (n !== 0) {
        if (n === 2 && (f = sa(t), f !== 0 && (a = f, n = Nu(t, f))), n === 1) throw s = hs, Rr(t, 0), ar(t, a), Nt(t, Be()), s;
        if (n === 6) ar(t, a);
        else {
          if (f = t.current.alternate, (a & 30) === 0 && !my(f) && (n = Ji(t, a), n === 2 && (g = sa(t), g !== 0 && (a = g, n = Nu(t, g))), n === 1)) throw s = hs, Rr(t, 0), ar(t, a), Nt(t, Be()), s;
          switch (t.finishedWork = f, t.finishedLanes = a, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Pr(t, _t, Fn);
              break;
            case 3:
              if (ar(t, a), (a & 130023424) === a && (n = Eu + 500 - Be(), 10 < n)) {
                if (li(t, 0) !== 0) break;
                if (f = t.suspendedLanes, (f & a) !== a) {
                  vt(), t.pingedLanes |= t.suspendedLanes & f;
                  break;
                }
                t.timeoutHandle = $a(Pr.bind(null, t, _t, Fn), n);
                break;
              }
              Pr(t, _t, Fn);
              break;
            case 4:
              if (ar(t, a), (a & 4194240) === a) break;
              for (n = t.eventTimes, f = -1; 0 < a; ) {
                var w = 31 - rn(a);
                g = 1 << w, w = n[w], w > f && (f = w), a &= ~g;
              }
              if (a = f, a = Be() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * py(a / 1960)) - a, 10 < a) {
                t.timeoutHandle = $a(Pr.bind(null, t, _t, Fn), a);
                break;
              }
              Pr(t, _t, Fn);
              break;
            case 5:
              Pr(t, _t, Fn);
              break;
            default:
              throw Error(o(329));
          }
        }
      }
      return Nt(t, Be()), t.callbackNode === s ? ph.bind(null, t) : null;
    }
    function Nu(t, n) {
      var s = ps;
      return t.current.memoizedState.isDehydrated && (Rr(t, n).flags |= 256), t = Ji(t, n), t !== 2 && (n = _t, _t = s, n !== null && Mu(n)), t;
    }
    function Mu(t) {
      _t === null ? _t = t : _t.push.apply(_t, t);
    }
    function my(t) {
      for (var n = t; ; ) {
        if (n.flags & 16384) {
          var s = n.updateQueue;
          if (s !== null && (s = s.stores, s !== null)) for (var a = 0; a < s.length; a++) {
            var f = s[a], g = f.getSnapshot;
            f = f.value;
            try {
              if (!on(g(), f)) return false;
            } catch {
              return false;
            }
          }
        }
        if (s = n.child, n.subtreeFlags & 16384 && s !== null) s.return = n, n = s;
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
    function ar(t, n) {
      for (n &= ~ku, n &= ~Gi, t.suspendedLanes |= n, t.pingedLanes &= ~n, t = t.expirationTimes; 0 < n; ) {
        var s = 31 - rn(n), a = 1 << s;
        t[s] = -1, n &= ~a;
      }
    }
    function mh(t) {
      if ((Ne & 6) !== 0) throw Error(o(327));
      vo();
      var n = li(t, 0);
      if ((n & 1) === 0) return Nt(t, Be()), null;
      var s = Ji(t, n);
      if (t.tag !== 0 && s === 2) {
        var a = sa(t);
        a !== 0 && (n = a, s = Nu(t, a));
      }
      if (s === 1) throw s = hs, Rr(t, 0), ar(t, n), Nt(t, Be()), s;
      if (s === 6) throw Error(o(345));
      return t.finishedWork = t.current.alternate, t.finishedLanes = n, Pr(t, _t, Fn), Nt(t, Be()), null;
    }
    function Iu(t, n) {
      var s = Ne;
      Ne |= 1;
      try {
        return t(n);
      } finally {
        Ne = s, Ne === 0 && (yo = Be() + 500, Ni && tr());
      }
    }
    function $r(t) {
      ir !== null && ir.tag === 0 && (Ne & 6) === 0 && vo();
      var n = Ne;
      Ne |= 1;
      var s = Gt.transition, a = Ae;
      try {
        if (Gt.transition = null, Ae = 1, t) return t();
      } finally {
        Ae = a, Gt.transition = s, Ne = n, (Ne & 6) === 0 && tr();
      }
    }
    function bu() {
      Rt = go.current, ze(go);
    }
    function Rr(t, n) {
      t.finishedWork = null, t.finishedLanes = 0;
      var s = t.timeoutHandle;
      if (s !== -1 && (t.timeoutHandle = -1, Wg(s)), Ze !== null) for (s = Ze.return; s !== null; ) {
        var a = s;
        switch (Oa(a), a.tag) {
          case 1:
            a = a.type.childContextTypes, a != null && Ci();
            break;
          case 3:
            ho(), ze(kt), ze(ft), Za();
            break;
          case 5:
            Ka(a);
            break;
          case 4:
            ho();
            break;
          case 13:
            ze(je);
            break;
          case 19:
            ze(je);
            break;
          case 10:
            Ua(a.type._context);
            break;
          case 22:
          case 23:
            bu();
        }
        s = s.return;
      }
      if (st = t, Ze = t = ur(t.current, null), at = Rt = n, et = 0, hs = null, ku = Gi = Ar = 0, _t = ps = null, Ir !== null) {
        for (n = 0; n < Ir.length; n++) if (s = Ir[n], a = s.interleaved, a !== null) {
          s.interleaved = null;
          var f = a.next, g = s.pending;
          if (g !== null) {
            var w = g.next;
            g.next = f, a.next = w;
          }
          s.pending = a;
        }
        Ir = null;
      }
      return t;
    }
    function gh(t, n) {
      do {
        var s = Ze;
        try {
          if (Va(), Di.current = Bi, zi) {
            for (var a = He.memoizedState; a !== null; ) {
              var f = a.queue;
              f !== null && (f.pending = null), a = a.next;
            }
            zi = false;
          }
          if (Tr = 0, ot = Je = He = null, ls = false, as = 0, Su.current = null, s === null || s.return === null) {
            et = 1, hs = n, Ze = null;
            break;
          }
          e: {
            var g = t, w = s.return, M = s, T = n;
            if (n = at, M.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
              var W = T, re = M, se = re.tag;
              if ((re.mode & 1) === 0 && (se === 0 || se === 11 || se === 15)) {
                var te = re.alternate;
                te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
              }
              var ue = jf(w);
              if (ue !== null) {
                ue.flags &= -257, Hf(ue, w, M, g, n), ue.mode & 1 && Bf(g, W, n), n = ue, T = W;
                var de = n.updateQueue;
                if (de === null) {
                  var fe = /* @__PURE__ */ new Set();
                  fe.add(T), n.updateQueue = fe;
                } else de.add(T);
                break e;
              } else {
                if ((n & 1) === 0) {
                  Bf(g, W, n), Tu();
                  break e;
                }
                T = Error(o(426));
              }
            } else if (Fe && M.mode & 1) {
              var Xe = jf(w);
              if (Xe !== null) {
                (Xe.flags & 65536) === 0 && (Xe.flags |= 256), Hf(Xe, w, M, g, n), ja(po(T, M));
                break e;
              }
            }
            g = T = po(T, M), et !== 4 && (et = 2), ps === null ? ps = [
              g
            ] : ps.push(g), g = w;
            do {
              switch (g.tag) {
                case 3:
                  g.flags |= 65536, n &= -n, g.lanes |= n;
                  var j = Of(g, T, n);
                  df(g, j);
                  break e;
                case 1:
                  M = T;
                  var P = g.type, V = g.stateNode;
                  if ((g.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (sr === null || !sr.has(V)))) {
                    g.flags |= 65536, n &= -n, g.lanes |= n;
                    var ie = Ff(g, M, n);
                    df(g, ie);
                    break e;
                  }
              }
              g = g.return;
            } while (g !== null);
          }
          wh(s);
        } catch (pe) {
          n = pe, Ze === s && s !== null && (Ze = s = s.return);
          continue;
        }
        break;
      } while (true);
    }
    function yh() {
      var t = Yi.current;
      return Yi.current = Bi, t === null ? Bi : t;
    }
    function Tu() {
      (et === 0 || et === 3 || et === 2) && (et = 4), st === null || (Ar & 268435455) === 0 && (Gi & 268435455) === 0 || ar(st, at);
    }
    function Ji(t, n) {
      var s = Ne;
      Ne |= 2;
      var a = yh();
      (st !== t || at !== n) && (Fn = null, Rr(t, n));
      do
        try {
          gy();
          break;
        } catch (f) {
          gh(t, f);
        }
      while (true);
      if (Va(), Ne = s, Yi.current = a, Ze !== null) throw Error(o(261));
      return st = null, at = 0, et;
    }
    function gy() {
      for (; Ze !== null; ) vh(Ze);
    }
    function yy() {
      for (; Ze !== null && !ti(); ) vh(Ze);
    }
    function vh(t) {
      var n = kh(t.alternate, t, Rt);
      t.memoizedProps = t.pendingProps, n === null ? wh(t) : Ze = n, Su.current = null;
    }
    function wh(t) {
      var n = t;
      do {
        var s = n.alternate;
        if (t = n.return, (n.flags & 32768) === 0) {
          if (s = uy(s, n, Rt), s !== null) {
            Ze = s;
            return;
          }
        } else {
          if (s = cy(s, n), s !== null) {
            s.flags &= 32767, Ze = s;
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
    function Pr(t, n, s) {
      var a = Ae, f = Gt.transition;
      try {
        Gt.transition = null, Ae = 1, vy(t, n, s, a);
      } finally {
        Gt.transition = f, Ae = a;
      }
      return null;
    }
    function vy(t, n, s, a) {
      do
        vo();
      while (ir !== null);
      if ((Ne & 6) !== 0) throw Error(o(327));
      s = t.finishedWork;
      var f = t.finishedLanes;
      if (s === null) return null;
      if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(o(177));
      t.callbackNode = null, t.callbackPriority = 0;
      var g = s.lanes | s.childLanes;
      if (qm(t, g), t === st && (Ze = st = null, at = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || Ki || (Ki = true, Eh(Xr, function() {
        return vo(), null;
      })), g = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || g) {
        g = Gt.transition, Gt.transition = null;
        var w = Ae;
        Ae = 1;
        var M = Ne;
        Ne |= 4, Su.current = null, fy(t, s), uh(s, t), Og(Ta), ci = !!ba, Ta = ba = null, t.current = s, hy(s), ra(), Ne = M, Ae = w, Gt.transition = g;
      } else t.current = s;
      if (Ki && (Ki = false, ir = t, Qi = f), g = t.pendingLanes, g === 0 && (sr = null), zo(s.stateNode), Nt(t, Be()), n !== null) for (a = t.onRecoverableError, s = 0; s < n.length; s++) f = n[s], a(f.value, {
        componentStack: f.stack,
        digest: f.digest
      });
      if (Xi) throw Xi = false, t = Cu, Cu = null, t;
      return (Qi & 1) !== 0 && t.tag !== 0 && vo(), g = t.pendingLanes, (g & 1) !== 0 ? t === _u ? ms++ : (ms = 0, _u = t) : ms = 0, tr(), null;
    }
    function vo() {
      if (ir !== null) {
        var t = id(Qi), n = Gt.transition, s = Ae;
        try {
          if (Gt.transition = null, Ae = 16 > t ? 16 : t, ir === null) var a = false;
          else {
            if (t = ir, ir = null, Qi = 0, (Ne & 6) !== 0) throw Error(o(331));
            var f = Ne;
            for (Ne |= 4, ce = t.current; ce !== null; ) {
              var g = ce, w = g.child;
              if ((ce.flags & 16) !== 0) {
                var M = g.deletions;
                if (M !== null) {
                  for (var T = 0; T < M.length; T++) {
                    var W = M[T];
                    for (ce = W; ce !== null; ) {
                      var re = ce;
                      switch (re.tag) {
                        case 0:
                        case 11:
                        case 15:
                          fs(8, re, g);
                      }
                      var se = re.child;
                      if (se !== null) se.return = re, ce = se;
                      else for (; ce !== null; ) {
                        re = ce;
                        var te = re.sibling, ue = re.return;
                        if (oh(re), re === W) {
                          ce = null;
                          break;
                        }
                        if (te !== null) {
                          te.return = ue, ce = te;
                          break;
                        }
                        ce = ue;
                      }
                    }
                  }
                  var de = g.alternate;
                  if (de !== null) {
                    var fe = de.child;
                    if (fe !== null) {
                      de.child = null;
                      do {
                        var Xe = fe.sibling;
                        fe.sibling = null, fe = Xe;
                      } while (fe !== null);
                    }
                  }
                  ce = g;
                }
              }
              if ((g.subtreeFlags & 2064) !== 0 && w !== null) w.return = g, ce = w;
              else e: for (; ce !== null; ) {
                if (g = ce, (g.flags & 2048) !== 0) switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fs(9, g, g.return);
                }
                var j = g.sibling;
                if (j !== null) {
                  j.return = g.return, ce = j;
                  break e;
                }
                ce = g.return;
              }
            }
            var P = t.current;
            for (ce = P; ce !== null; ) {
              w = ce;
              var V = w.child;
              if ((w.subtreeFlags & 2064) !== 0 && V !== null) V.return = w, ce = V;
              else e: for (w = P; ce !== null; ) {
                if (M = ce, (M.flags & 2048) !== 0) try {
                  switch (M.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wi(9, M);
                  }
                } catch (pe) {
                  Ye(M, M.return, pe);
                }
                if (M === w) {
                  ce = null;
                  break e;
                }
                var ie = M.sibling;
                if (ie !== null) {
                  ie.return = M.return, ce = ie;
                  break e;
                }
                ce = M.return;
              }
            }
            if (Ne = f, tr(), Ht && typeof Ht.onPostCommitFiberRoot == "function") try {
              Ht.onPostCommitFiberRoot(Kr, t);
            } catch {
            }
            a = true;
          }
          return a;
        } finally {
          Ae = s, Gt.transition = n;
        }
      }
      return false;
    }
    function xh(t, n, s) {
      n = po(s, n), n = Of(t, n, 1), t = rr(t, n, 1), n = vt(), t !== null && (Fo(t, 1, n), Nt(t, n));
    }
    function Ye(t, n, s) {
      if (t.tag === 3) xh(t, t, s);
      else for (; n !== null; ) {
        if (n.tag === 3) {
          xh(n, t, s);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (sr === null || !sr.has(a))) {
            t = po(s, t), t = Ff(n, t, 1), n = rr(n, t, 1), t = vt(), n !== null && (Fo(n, 1, t), Nt(n, t));
            break;
          }
        }
        n = n.return;
      }
    }
    function wy(t, n, s) {
      var a = t.pingCache;
      a !== null && a.delete(n), n = vt(), t.pingedLanes |= t.suspendedLanes & s, st === t && (at & s) === s && (et === 4 || et === 3 && (at & 130023424) === at && 500 > Be() - Eu ? Rr(t, 0) : ku |= s), Nt(t, n);
    }
    function Sh(t, n) {
      n === 0 && ((t.mode & 1) === 0 ? n = 1 : (n = ii, ii <<= 1, (ii & 130023424) === 0 && (ii = 4194304)));
      var s = vt();
      t = Dn(t, n), t !== null && (Fo(t, n, s), Nt(t, s));
    }
    function xy(t) {
      var n = t.memoizedState, s = 0;
      n !== null && (s = n.retryLane), Sh(t, s);
    }
    function Sy(t, n) {
      var s = 0;
      switch (t.tag) {
        case 13:
          var a = t.stateNode, f = t.memoizedState;
          f !== null && (s = f.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        default:
          throw Error(o(314));
      }
      a !== null && a.delete(n), Sh(t, s);
    }
    var kh;
    kh = function(t, n, s) {
      if (t !== null) if (t.memoizedProps !== n.pendingProps || kt.current) Ct = true;
      else {
        if ((t.lanes & s) === 0 && (n.flags & 128) === 0) return Ct = false, ay(t, n, s);
        Ct = (t.flags & 131072) !== 0;
      }
      else Ct = false, Fe && (n.flags & 1048576) !== 0 && ef(n, Ii, n.index);
      switch (n.lanes = 0, n.tag) {
        case 2:
          var a = n.type;
          Vi(t, n), t = n.pendingProps;
          var f = so(n, ft.current);
          fo(n, s), f = eu(null, n, a, t, f, s);
          var g = tu();
          return n.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Et(a) ? (g = true, _i(n)) : g = false, n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Ga(n), f.updater = ji, n.stateNode = f, f._reactInternals = n, lu(n, a, t, s), n = du(null, n, a, true, g, s)) : (n.tag = 0, Fe && g && za(n), yt(null, n, f, s), n = n.child), n;
        case 16:
          a = n.elementType;
          e: {
            switch (Vi(t, n), t = n.pendingProps, f = a._init, a = f(a._payload), n.type = a, f = n.tag = Ey(a), t = ln(a, t), f) {
              case 0:
                n = cu(null, n, a, t, s);
                break e;
              case 1:
                n = Xf(null, n, a, t, s);
                break e;
              case 11:
                n = Vf(null, n, a, t, s);
                break e;
              case 14:
                n = Uf(null, n, a, ln(a.type, t), s);
                break e;
            }
            throw Error(o(306, a, ""));
          }
          return n;
        case 0:
          return a = n.type, f = n.pendingProps, f = n.elementType === a ? f : ln(a, f), cu(t, n, a, f, s);
        case 1:
          return a = n.type, f = n.pendingProps, f = n.elementType === a ? f : ln(a, f), Xf(t, n, a, f, s);
        case 3:
          e: {
            if (Kf(n), t === null) throw Error(o(387));
            a = n.pendingProps, g = n.memoizedState, f = g.element, cf(t, n), Pi(n, a, null, s);
            var w = n.memoizedState;
            if (a = w.element, g.isDehydrated) if (g = {
              element: a,
              isDehydrated: false,
              cache: w.cache,
              pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
              transitions: w.transitions
            }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
              f = po(Error(o(423)), n), n = Qf(t, n, a, s, f);
              break e;
            } else if (a !== f) {
              f = po(Error(o(424)), n), n = Qf(t, n, a, s, f);
              break e;
            } else for ($t = qn(n.stateNode.containerInfo.firstChild), At = n, Fe = true, sn = null, s = af(n, null, a, s), n.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
            else {
              if (ao(), a === f) {
                n = On(t, n, s);
                break e;
              }
              yt(t, n, a, s);
            }
            n = n.child;
          }
          return n;
        case 5:
          return hf(n), t === null && Ba(n), a = n.type, f = n.pendingProps, g = t !== null ? t.memoizedProps : null, w = f.children, Aa(a, f) ? w = null : g !== null && Aa(a, g) && (n.flags |= 32), Gf(t, n), yt(t, n, w, s), n.child;
        case 6:
          return t === null && Ba(n), null;
        case 13:
          return Zf(t, n, s);
        case 4:
          return Xa(n, n.stateNode.containerInfo), a = n.pendingProps, t === null ? n.child = uo(n, null, a, s) : yt(t, n, a, s), n.child;
        case 11:
          return a = n.type, f = n.pendingProps, f = n.elementType === a ? f : ln(a, f), Vf(t, n, a, f, s);
        case 7:
          return yt(t, n, n.pendingProps, s), n.child;
        case 8:
          return yt(t, n, n.pendingProps.children, s), n.child;
        case 12:
          return yt(t, n, n.pendingProps.children, s), n.child;
        case 10:
          e: {
            if (a = n.type._context, f = n.pendingProps, g = n.memoizedProps, w = f.value, Pe(Ai, a._currentValue), a._currentValue = w, g !== null) if (on(g.value, w)) {
              if (g.children === f.children && !kt.current) {
                n = On(t, n, s);
                break e;
              }
            } else for (g = n.child, g !== null && (g.return = n); g !== null; ) {
              var M = g.dependencies;
              if (M !== null) {
                w = g.child;
                for (var T = M.firstContext; T !== null; ) {
                  if (T.context === a) {
                    if (g.tag === 1) {
                      T = zn(-1, s & -s), T.tag = 2;
                      var W = g.updateQueue;
                      if (W !== null) {
                        W = W.shared;
                        var re = W.pending;
                        re === null ? T.next = T : (T.next = re.next, re.next = T), W.pending = T;
                      }
                    }
                    g.lanes |= s, T = g.alternate, T !== null && (T.lanes |= s), Wa(g.return, s, n), M.lanes |= s;
                    break;
                  }
                  T = T.next;
                }
              } else if (g.tag === 10) w = g.type === n.type ? null : g.child;
              else if (g.tag === 18) {
                if (w = g.return, w === null) throw Error(o(341));
                w.lanes |= s, M = w.alternate, M !== null && (M.lanes |= s), Wa(w, s, n), w = g.sibling;
              } else w = g.child;
              if (w !== null) w.return = g;
              else for (w = g; w !== null; ) {
                if (w === n) {
                  w = null;
                  break;
                }
                if (g = w.sibling, g !== null) {
                  g.return = w.return, w = g;
                  break;
                }
                w = w.return;
              }
              g = w;
            }
            yt(t, n, f.children, s), n = n.child;
          }
          return n;
        case 9:
          return f = n.type, a = n.pendingProps.children, fo(n, s), f = Wt(f), a = a(f), n.flags |= 1, yt(t, n, a, s), n.child;
        case 14:
          return a = n.type, f = ln(a, n.pendingProps), f = ln(a.type, f), Uf(t, n, a, f, s);
        case 15:
          return Wf(t, n, n.type, n.pendingProps, s);
        case 17:
          return a = n.type, f = n.pendingProps, f = n.elementType === a ? f : ln(a, f), Vi(t, n), n.tag = 1, Et(a) ? (t = true, _i(n)) : t = false, fo(n, s), Df(n, a, f), lu(n, a, f, s), du(null, n, a, true, t, s);
        case 19:
          return Jf(t, n, s);
        case 22:
          return Yf(t, n, s);
      }
      throw Error(o(156, n.tag));
    };
    function Eh(t, n) {
      return Js(t, n);
    }
    function ky(t, n, s, a) {
      this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Xt(t, n, s, a) {
      return new ky(t, n, s, a);
    }
    function Au(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Ey(t) {
      if (typeof t == "function") return Au(t) ? 1 : 0;
      if (t != null) {
        if (t = t.$$typeof, t === Z) return 11;
        if (t === H) return 14;
      }
      return 2;
    }
    function ur(t, n) {
      var s = t.alternate;
      return s === null ? (s = Xt(t.tag, n, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = n, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, n = t.dependencies, s.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s;
    }
    function el(t, n, s, a, f, g) {
      var w = 2;
      if (a = t, typeof t == "function") Au(t) && (w = 1);
      else if (typeof t == "string") w = 5;
      else e: switch (t) {
        case Q:
          return Lr(s.children, f, g, n);
        case q:
          w = 8, f |= 8;
          break;
        case Y:
          return t = Xt(12, s, n, f | 2), t.elementType = Y, t.lanes = g, t;
        case ee:
          return t = Xt(13, s, n, f), t.elementType = ee, t.lanes = g, t;
        case C:
          return t = Xt(19, s, n, f), t.elementType = C, t.lanes = g, t;
        case K:
          return tl(s, f, g, n);
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case J:
              w = 10;
              break e;
            case U:
              w = 9;
              break e;
            case Z:
              w = 11;
              break e;
            case H:
              w = 14;
              break e;
            case O:
              w = 16, a = null;
              break e;
          }
          throw Error(o(130, t == null ? t : typeof t, ""));
      }
      return n = Xt(w, s, n, f), n.elementType = t, n.type = a, n.lanes = g, n;
    }
    function Lr(t, n, s, a) {
      return t = Xt(7, t, a, n), t.lanes = s, t;
    }
    function tl(t, n, s, a) {
      return t = Xt(22, t, a, n), t.elementType = K, t.lanes = s, t.stateNode = {
        isHidden: false
      }, t;
    }
    function $u(t, n, s) {
      return t = Xt(6, t, null, n), t.lanes = s, t;
    }
    function Ru(t, n, s) {
      return n = Xt(4, t.children !== null ? t.children : [], t.key, n), n.lanes = s, n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, n;
    }
    function Cy(t, n, s, a, f) {
      this.tag = n, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ia(0), this.expirationTimes = ia(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ia(0), this.identifierPrefix = a, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
    }
    function Pu(t, n, s, a, f, g, w, M, T) {
      return t = new Cy(t, n, s, M, T), n === 1 ? (n = 1, g === true && (n |= 8)) : n = 0, g = Xt(3, null, null, n), t.current = g, g.stateNode = t, g.memoizedState = {
        element: a,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, Ga(g), t;
    }
    function _y(t, n, s) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: D,
        key: a == null ? null : "" + a,
        children: t,
        containerInfo: n,
        implementation: s
      };
    }
    function Ch(t) {
      if (!t) return er;
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
              if (Et(n.type)) {
                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          n = n.return;
        } while (n !== null);
        throw Error(o(171));
      }
      if (t.tag === 1) {
        var s = t.type;
        if (Et(s)) return Zd(t, s, n);
      }
      return n;
    }
    function _h(t, n, s, a, f, g, w, M, T) {
      return t = Pu(s, a, true, t, f, g, w, M, T), t.context = Ch(null), s = t.current, a = vt(), f = lr(s), g = zn(a, f), g.callback = n ?? null, rr(s, g, f), t.current.lanes = f, Fo(t, f, a), Nt(t, a), t;
    }
    function nl(t, n, s, a) {
      var f = n.current, g = vt(), w = lr(f);
      return s = Ch(s), n.context === null ? n.context = s : n.pendingContext = s, n = zn(g, w), n.payload = {
        element: t
      }, a = a === void 0 ? null : a, a !== null && (n.callback = a), t = rr(f, n, w), t !== null && (cn(t, f, w, g), Ri(t, f, w)), w;
    }
    function rl(t) {
      if (t = t.current, !t.child) return null;
      switch (t.child.tag) {
        case 5:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Nh(t, n) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var s = t.retryLane;
        t.retryLane = s !== 0 && s < n ? s : n;
      }
    }
    function Lu(t, n) {
      Nh(t, n), (t = t.alternate) && Nh(t, n);
    }
    function Ny() {
      return null;
    }
    var Mh = typeof reportError == "function" ? reportError : function(t) {
      console.error(t);
    };
    function Du(t) {
      this._internalRoot = t;
    }
    ol.prototype.render = Du.prototype.render = function(t) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      nl(t, n, null, null);
    }, ol.prototype.unmount = Du.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var n = t.containerInfo;
        $r(function() {
          nl(null, t, null, null);
        }), n[$n] = null;
      }
    };
    function ol(t) {
      this._internalRoot = t;
    }
    ol.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var n = ud();
        t = {
          blockedOn: null,
          target: t,
          priority: n
        };
        for (var s = 0; s < Kn.length && n !== 0 && n < Kn[s].priority; s++) ;
        Kn.splice(s, 0, t), s === 0 && fd(t);
      }
    };
    function zu(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function sl(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
    }
    function Ih() {
    }
    function My(t, n, s, a, f) {
      if (f) {
        if (typeof a == "function") {
          var g = a;
          a = function() {
            var W = rl(w);
            g.call(W);
          };
        }
        var w = _h(n, a, t, 0, null, false, false, "", Ih);
        return t._reactRootContainer = w, t[$n] = w.current, Jo(t.nodeType === 8 ? t.parentNode : t), $r(), w;
      }
      for (; f = t.lastChild; ) t.removeChild(f);
      if (typeof a == "function") {
        var M = a;
        a = function() {
          var W = rl(T);
          M.call(W);
        };
      }
      var T = Pu(t, 0, false, null, null, false, false, "", Ih);
      return t._reactRootContainer = T, t[$n] = T.current, Jo(t.nodeType === 8 ? t.parentNode : t), $r(function() {
        nl(n, T, s, a);
      }), T;
    }
    function il(t, n, s, a, f) {
      var g = s._reactRootContainer;
      if (g) {
        var w = g;
        if (typeof f == "function") {
          var M = f;
          f = function() {
            var T = rl(w);
            M.call(T);
          };
        }
        nl(n, w, t, f);
      } else w = My(s, n, t, f, a);
      return rl(w);
    }
    ld = function(t) {
      switch (t.tag) {
        case 3:
          var n = t.stateNode;
          if (n.current.memoizedState.isDehydrated) {
            var s = Oo(n.pendingLanes);
            s !== 0 && (la(n, s | 1), Nt(n, Be()), (Ne & 6) === 0 && (yo = Be() + 500, tr()));
          }
          break;
        case 13:
          $r(function() {
            var a = Dn(t, 1);
            if (a !== null) {
              var f = vt();
              cn(a, t, 1, f);
            }
          }), Lu(t, 1);
      }
    }, aa = function(t) {
      if (t.tag === 13) {
        var n = Dn(t, 134217728);
        if (n !== null) {
          var s = vt();
          cn(n, t, 134217728, s);
        }
        Lu(t, 134217728);
      }
    }, ad = function(t) {
      if (t.tag === 13) {
        var n = lr(t), s = Dn(t, n);
        if (s !== null) {
          var a = vt();
          cn(s, t, n, a);
        }
        Lu(t, n);
      }
    }, ud = function() {
      return Ae;
    }, cd = function(t, n) {
      var s = Ae;
      try {
        return Ae = t, n();
      } finally {
        Ae = s;
      }
    }, bn = function(t, n, s) {
      switch (n) {
        case "input":
          if (Me(t, s), n = s.name, s.type === "radio" && n != null) {
            for (s = t; s.parentNode; ) s = s.parentNode;
            for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < s.length; n++) {
              var a = s[n];
              if (a !== t && a.form === t.form) {
                var f = Ei(a);
                if (!f) throw Error(o(90));
                Ue(a), Me(a, f);
              }
            }
          }
          break;
        case "textarea":
          Bt(t, s);
          break;
        case "select":
          n = s.value, n != null && Ft(t, !!s.multiple, n, false);
      }
    }, Ws = Iu, Ys = $r;
    var Iy = {
      usingClientEntryPoint: false,
      Events: [
        ns,
        ro,
        Ei,
        Vs,
        Us,
        Iu
      ]
    }, gs = {
      findFiberByHostInstance: Cr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    }, by = {
      bundleType: gs.bundleType,
      version: gs.version,
      rendererPackageName: gs.rendererPackageName,
      rendererConfig: gs.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: A.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(t) {
        return t = Zs(t), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: gs.findFiberByHostInstance || Ny,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ll.isDisabled && ll.supportsFiber) try {
        Kr = ll.inject(by), Ht = ll;
      } catch {
      }
    }
    return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iy, Mt.createPortal = function(t, n) {
      var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zu(n)) throw Error(o(200));
      return _y(t, n, null, s);
    }, Mt.createRoot = function(t, n) {
      if (!zu(t)) throw Error(o(299));
      var s = false, a = "", f = Mh;
      return n != null && (n.unstable_strictMode === true && (s = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), n = Pu(t, 1, false, null, null, s, false, a, f), t[$n] = n.current, Jo(t.nodeType === 8 ? t.parentNode : t), new Du(n);
    }, Mt.findDOMNode = function(t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var n = t._reactInternals;
      if (n === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
      return t = Zs(n), t = t === null ? null : t.stateNode, t;
    }, Mt.flushSync = function(t) {
      return $r(t);
    }, Mt.hydrate = function(t, n, s) {
      if (!sl(n)) throw Error(o(200));
      return il(null, t, n, true, s);
    }, Mt.hydrateRoot = function(t, n, s) {
      if (!zu(t)) throw Error(o(405));
      var a = s != null && s.hydratedSources || null, f = false, g = "", w = Mh;
      if (s != null && (s.unstable_strictMode === true && (f = true), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), n = _h(n, null, t, 1, s ?? null, f, false, g, w), t[$n] = n.current, Jo(t), a) for (t = 0; t < a.length; t++) s = a[t], f = s._getVersion, f = f(s._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [
        s,
        f
      ] : n.mutableSourceEagerHydrationData.push(s, f);
      return new ol(n);
    }, Mt.render = function(t, n, s) {
      if (!sl(n)) throw Error(o(200));
      return il(null, t, n, false, s);
    }, Mt.unmountComponentAtNode = function(t) {
      if (!sl(t)) throw Error(o(40));
      return t._reactRootContainer ? ($r(function() {
        il(null, null, t, false, function() {
          t._reactRootContainer = null, t[$n] = null;
        });
      }), true) : false;
    }, Mt.unstable_batchedUpdates = Iu, Mt.unstable_renderSubtreeIntoContainer = function(t, n, s, a) {
      if (!sl(s)) throw Error(o(200));
      if (t == null || t._reactInternals === void 0) throw Error(o(38));
      return il(t, n, s, false, a);
    }, Mt.version = "18.3.1-next-f1338f8080-20240426", Mt;
  }
  var Dh;
  function l0() {
    if (Dh) return Bu.exports;
    Dh = 1;
    function e() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
    }
    return e(), Bu.exports = Dy(), Bu.exports;
  }
  var zh;
  function zy() {
    if (zh) return al;
    zh = 1;
    var e = l0();
    return al.createRoot = e.createRoot, al.hydrateRoot = e.hydrateRoot, al;
  }
  var Oy = zy();
  function ct(e) {
    if (typeof e == "string" || typeof e == "number") return "" + e;
    let r = "";
    if (Array.isArray(e)) for (let o = 0, i; o < e.length; o++) (i = ct(e[o])) !== "" && (r += (r && " ") + i);
    else for (let o in e) e[o] && (r += (r && " ") + o);
    return r;
  }
  var Vu = {
    exports: {}
  }, Uu = {}, Wu = {
    exports: {}
  }, Yu = {};
  var Oh;
  function Fy() {
    if (Oh) return Yu;
    Oh = 1;
    var e = Os();
    function r(y, v) {
      return y === v && (y !== 0 || 1 / y === 1 / v) || y !== y && v !== v;
    }
    var o = typeof Object.is == "function" ? Object.is : r, i = e.useState, l = e.useEffect, u = e.useLayoutEffect, c = e.useDebugValue;
    function d(y, v) {
      var x = v(), S = i({
        inst: {
          value: x,
          getSnapshot: v
        }
      }), k = S[0].inst, _ = S[1];
      return u(function() {
        k.value = x, k.getSnapshot = v, m(k) && _({
          inst: k
        });
      }, [
        y,
        x,
        v
      ]), l(function() {
        return m(k) && _({
          inst: k
        }), y(function() {
          m(k) && _({
            inst: k
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
    var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : d;
    return Yu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Yu;
  }
  var Fh;
  function By() {
    return Fh || (Fh = 1, Wu.exports = Fy()), Wu.exports;
  }
  var Bh;
  function jy() {
    if (Bh) return Uu;
    Bh = 1;
    var e = Os(), r = By();
    function o(h, p) {
      return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
    }
    var i = typeof Object.is == "function" ? Object.is : o, l = r.useSyncExternalStore, u = e.useRef, c = e.useEffect, d = e.useMemo, m = e.useDebugValue;
    return Uu.useSyncExternalStoreWithSelector = function(h, p, y, v, x) {
      var S = u(null);
      if (S.current === null) {
        var k = {
          hasValue: false,
          value: null
        };
        S.current = k;
      } else k = S.current;
      S = d(function() {
        function E(D) {
          if (!$) {
            if ($ = true, b = D, D = v(D), x !== void 0 && k.hasValue) {
              var Q = k.value;
              if (x(Q, D)) return A = Q;
            }
            return A = D;
          }
          if (Q = A, i(b, D)) return Q;
          var q = v(D);
          return x !== void 0 && x(Q, q) ? (b = D, Q) : (b = D, A = q);
        }
        var $ = false, b, A, G = y === void 0 ? null : y;
        return [
          function() {
            return E(p());
          },
          G === null ? void 0 : function() {
            return E(G());
          }
        ];
      }, [
        p,
        y,
        v,
        x
      ]);
      var _ = l(h, S[0], S[1]);
      return c(function() {
        k.hasValue = true, k.value = _;
      }, [
        _
      ]), m(_), _;
    }, Uu;
  }
  var jh;
  function Hy() {
    return jh || (jh = 1, Vu.exports = jy()), Vu.exports;
  }
  var Vy = Hy();
  const Uy = i0(Vy), Wy = {}, Hh = (e) => {
    let r;
    const o = /* @__PURE__ */ new Set(), i = (p, y) => {
      const v = typeof p == "function" ? p(r) : p;
      if (!Object.is(v, r)) {
        const x = r;
        r = y ?? (typeof v != "object" || v === null) ? v : Object.assign({}, r, v), o.forEach((S) => S(r, x));
      }
    }, l = () => r, m = {
      setState: i,
      getState: l,
      getInitialState: () => h,
      subscribe: (p) => (o.add(p), () => o.delete(p)),
      destroy: () => {
        (Wy ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), o.clear();
      }
    }, h = r = e(i, l, m);
    return m;
  }, Yy = (e) => e ? Hh(e) : Hh, { useDebugValue: Gy } = X, { useSyncExternalStoreWithSelector: Xy } = Uy, Ky = (e) => e;
  function a0(e, r = Ky, o) {
    const i = Xy(e.subscribe, e.getState, e.getServerState || e.getInitialState, r, o);
    return Gy(i), i;
  }
  const Vh = (e, r) => {
    const o = Yy(e), i = (l, u = r) => a0(o, l, u);
    return Object.assign(i, o), i;
  }, Qy = (e, r) => e ? Vh(e, r) : Vh;
  function bt(e, r) {
    if (Object.is(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    if (e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return false;
      for (const [i, l] of e) if (!Object.is(l, r.get(i))) return false;
      return true;
    }
    if (e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return false;
      for (const i of e) if (!r.has(i)) return false;
      return true;
    }
    const o = Object.keys(e);
    if (o.length !== Object.keys(r).length) return false;
    for (const i of o) if (!Object.prototype.hasOwnProperty.call(r, i) || !Object.is(e[i], r[i])) return false;
    return true;
  }
  var Zy = {
    value: () => {
    }
  };
  function Vl() {
    for (var e = 0, r = arguments.length, o = {}, i; e < r; ++e) {
      if (!(i = arguments[e] + "") || i in o || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
      o[i] = [];
    }
    return new Sl(o);
  }
  function Sl(e) {
    this._ = e;
  }
  function qy(e, r) {
    return e.trim().split(/^|\s+/).map(function(o) {
      var i = "", l = o.indexOf(".");
      if (l >= 0 && (i = o.slice(l + 1), o = o.slice(0, l)), o && !r.hasOwnProperty(o)) throw new Error("unknown type: " + o);
      return {
        type: o,
        name: i
      };
    });
  }
  Sl.prototype = Vl.prototype = {
    constructor: Sl,
    on: function(e, r) {
      var o = this._, i = qy(e + "", o), l, u = -1, c = i.length;
      if (arguments.length < 2) {
        for (; ++u < c; ) if ((l = (e = i[u]).type) && (l = Jy(o[l], e.name))) return l;
        return;
      }
      if (r != null && typeof r != "function") throw new Error("invalid callback: " + r);
      for (; ++u < c; ) if (l = (e = i[u]).type) o[l] = Uh(o[l], e.name, r);
      else if (r == null) for (l in o) o[l] = Uh(o[l], e.name, null);
      return this;
    },
    copy: function() {
      var e = {}, r = this._;
      for (var o in r) e[o] = r[o].slice();
      return new Sl(e);
    },
    call: function(e, r) {
      if ((l = arguments.length - 2) > 0) for (var o = new Array(l), i = 0, l, u; i < l; ++i) o[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (u = this._[e], i = 0, l = u.length; i < l; ++i) u[i].value.apply(r, o);
    },
    apply: function(e, r, o) {
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (var i = this._[e], l = 0, u = i.length; l < u; ++l) i[l].value.apply(r, o);
    }
  };
  function Jy(e, r) {
    for (var o = 0, i = e.length, l; o < i; ++o) if ((l = e[o]).name === r) return l.value;
  }
  function Uh(e, r, o) {
    for (var i = 0, l = e.length; i < l; ++i) if (e[i].name === r) {
      e[i] = Zy, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
    return o != null && e.push({
      name: r,
      value: o
    }), e;
  }
  var ac = "http://www.w3.org/1999/xhtml";
  const Wh = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: ac,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function Ul(e) {
    var r = e += "", o = r.indexOf(":");
    return o >= 0 && (r = e.slice(0, o)) !== "xmlns" && (e = e.slice(o + 1)), Wh.hasOwnProperty(r) ? {
      space: Wh[r],
      local: e
    } : e;
  }
  function e1(e) {
    return function() {
      var r = this.ownerDocument, o = this.namespaceURI;
      return o === ac && r.documentElement.namespaceURI === ac ? r.createElement(e) : r.createElementNS(o, e);
    };
  }
  function t1(e) {
    return function() {
      return this.ownerDocument.createElementNS(e.space, e.local);
    };
  }
  function u0(e) {
    var r = Ul(e);
    return (r.local ? t1 : e1)(r);
  }
  function n1() {
  }
  function Pc(e) {
    return e == null ? n1 : function() {
      return this.querySelector(e);
    };
  }
  function r1(e) {
    typeof e != "function" && (e = Pc(e));
    for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, d = i[l] = new Array(c), m, h, p = 0; p < c; ++p) (m = u[p]) && (h = e.call(m, m.__data__, p, u)) && ("__data__" in m && (h.__data__ = m.__data__), d[p] = h);
    return new Ot(i, this._parents);
  }
  function o1(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function s1() {
    return [];
  }
  function c0(e) {
    return e == null ? s1 : function() {
      return this.querySelectorAll(e);
    };
  }
  function i1(e) {
    return function() {
      return o1(e.apply(this, arguments));
    };
  }
  function l1(e) {
    typeof e == "function" ? e = i1(e) : e = c0(e);
    for (var r = this._groups, o = r.length, i = [], l = [], u = 0; u < o; ++u) for (var c = r[u], d = c.length, m, h = 0; h < d; ++h) (m = c[h]) && (i.push(e.call(m, m.__data__, h, c)), l.push(m));
    return new Ot(i, l);
  }
  function d0(e) {
    return function() {
      return this.matches(e);
    };
  }
  function f0(e) {
    return function(r) {
      return r.matches(e);
    };
  }
  var a1 = Array.prototype.find;
  function u1(e) {
    return function() {
      return a1.call(this.children, e);
    };
  }
  function c1() {
    return this.firstElementChild;
  }
  function d1(e) {
    return this.select(e == null ? c1 : u1(typeof e == "function" ? e : f0(e)));
  }
  var f1 = Array.prototype.filter;
  function h1() {
    return Array.from(this.children);
  }
  function p1(e) {
    return function() {
      return f1.call(this.children, e);
    };
  }
  function m1(e) {
    return this.selectAll(e == null ? h1 : p1(typeof e == "function" ? e : f0(e)));
  }
  function g1(e) {
    typeof e != "function" && (e = d0(e));
    for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, d = i[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && d.push(m);
    return new Ot(i, this._parents);
  }
  function h0(e) {
    return new Array(e.length);
  }
  function y1() {
    return new Ot(this._enter || this._groups.map(h0), this._parents);
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
  function v1(e) {
    return function() {
      return e;
    };
  }
  function w1(e, r, o, i, l, u) {
    for (var c = 0, d, m = r.length, h = u.length; c < h; ++c) (d = r[c]) ? (d.__data__ = u[c], i[c] = d) : o[c] = new Tl(e, u[c]);
    for (; c < m; ++c) (d = r[c]) && (l[c] = d);
  }
  function x1(e, r, o, i, l, u, c) {
    var d, m, h = /* @__PURE__ */ new Map(), p = r.length, y = u.length, v = new Array(p), x;
    for (d = 0; d < p; ++d) (m = r[d]) && (v[d] = x = c.call(m, m.__data__, d, r) + "", h.has(x) ? l[d] = m : h.set(x, m));
    for (d = 0; d < y; ++d) x = c.call(e, u[d], d, u) + "", (m = h.get(x)) ? (i[d] = m, m.__data__ = u[d], h.delete(x)) : o[d] = new Tl(e, u[d]);
    for (d = 0; d < p; ++d) (m = r[d]) && h.get(v[d]) === m && (l[d] = m);
  }
  function S1(e) {
    return e.__data__;
  }
  function k1(e, r) {
    if (!arguments.length) return Array.from(this, S1);
    var o = r ? x1 : w1, i = this._parents, l = this._groups;
    typeof e != "function" && (e = v1(e));
    for (var u = l.length, c = new Array(u), d = new Array(u), m = new Array(u), h = 0; h < u; ++h) {
      var p = i[h], y = l[h], v = y.length, x = E1(e.call(p, p && p.__data__, h, i)), S = x.length, k = d[h] = new Array(S), _ = c[h] = new Array(S), E = m[h] = new Array(v);
      o(p, y, k, _, E, x, r);
      for (var $ = 0, b = 0, A, G; $ < S; ++$) if (A = k[$]) {
        for ($ >= b && (b = $ + 1); !(G = _[b]) && ++b < S; ) ;
        A._next = G || null;
      }
    }
    return c = new Ot(c, i), c._enter = d, c._exit = m, c;
  }
  function E1(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
  }
  function C1() {
    return new Ot(this._exit || this._groups.map(h0), this._parents);
  }
  function _1(e, r, o) {
    var i = this.enter(), l = this, u = this.exit();
    return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), r != null && (l = r(l), l && (l = l.selection())), o == null ? u.remove() : o(u), i && l ? i.merge(l).order() : l;
  }
  function N1(e) {
    for (var r = e.selection ? e.selection() : e, o = this._groups, i = r._groups, l = o.length, u = i.length, c = Math.min(l, u), d = new Array(l), m = 0; m < c; ++m) for (var h = o[m], p = i[m], y = h.length, v = d[m] = new Array(y), x, S = 0; S < y; ++S) (x = h[S] || p[S]) && (v[S] = x);
    for (; m < l; ++m) d[m] = o[m];
    return new Ot(d, this._parents);
  }
  function M1() {
    for (var e = this._groups, r = -1, o = e.length; ++r < o; ) for (var i = e[r], l = i.length - 1, u = i[l], c; --l >= 0; ) (c = i[l]) && (u && c.compareDocumentPosition(u) ^ 4 && u.parentNode.insertBefore(c, u), u = c);
    return this;
  }
  function I1(e) {
    e || (e = b1);
    function r(y, v) {
      return y && v ? e(y.__data__, v.__data__) : !y - !v;
    }
    for (var o = this._groups, i = o.length, l = new Array(i), u = 0; u < i; ++u) {
      for (var c = o[u], d = c.length, m = l[u] = new Array(d), h, p = 0; p < d; ++p) (h = c[p]) && (m[p] = h);
      m.sort(r);
    }
    return new Ot(l, this._parents).order();
  }
  function b1(e, r) {
    return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
  }
  function T1() {
    var e = arguments[0];
    return arguments[0] = this, e.apply(null, arguments), this;
  }
  function A1() {
    return Array.from(this);
  }
  function $1() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var i = e[r], l = 0, u = i.length; l < u; ++l) {
      var c = i[l];
      if (c) return c;
    }
    return null;
  }
  function R1() {
    let e = 0;
    for (const r of this) ++e;
    return e;
  }
  function P1() {
    return !this.node();
  }
  function L1(e) {
    for (var r = this._groups, o = 0, i = r.length; o < i; ++o) for (var l = r[o], u = 0, c = l.length, d; u < c; ++u) (d = l[u]) && e.call(d, d.__data__, u, l);
    return this;
  }
  function D1(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function z1(e) {
    return function() {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function O1(e, r) {
    return function() {
      this.setAttribute(e, r);
    };
  }
  function F1(e, r) {
    return function() {
      this.setAttributeNS(e.space, e.local, r);
    };
  }
  function B1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? this.removeAttribute(e) : this.setAttribute(e, o);
    };
  }
  function j1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, o);
    };
  }
  function H1(e, r) {
    var o = Ul(e);
    if (arguments.length < 2) {
      var i = this.node();
      return o.local ? i.getAttributeNS(o.space, o.local) : i.getAttribute(o);
    }
    return this.each((r == null ? o.local ? z1 : D1 : typeof r == "function" ? o.local ? j1 : B1 : o.local ? F1 : O1)(o, r));
  }
  function p0(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
  }
  function V1(e) {
    return function() {
      this.style.removeProperty(e);
    };
  }
  function U1(e, r, o) {
    return function() {
      this.style.setProperty(e, r, o);
    };
  }
  function W1(e, r, o) {
    return function() {
      var i = r.apply(this, arguments);
      i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, o);
    };
  }
  function Y1(e, r, o) {
    return arguments.length > 1 ? this.each((r == null ? V1 : typeof r == "function" ? W1 : U1)(e, r, o ?? "")) : Mo(this.node(), e);
  }
  function Mo(e, r) {
    return e.style.getPropertyValue(r) || p0(e).getComputedStyle(e, null).getPropertyValue(r);
  }
  function G1(e) {
    return function() {
      delete this[e];
    };
  }
  function X1(e, r) {
    return function() {
      this[e] = r;
    };
  }
  function K1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? delete this[e] : this[e] = o;
    };
  }
  function Q1(e, r) {
    return arguments.length > 1 ? this.each((r == null ? G1 : typeof r == "function" ? K1 : X1)(e, r)) : this.node()[e];
  }
  function m0(e) {
    return e.trim().split(/^|\s+/);
  }
  function Lc(e) {
    return e.classList || new g0(e);
  }
  function g0(e) {
    this._node = e, this._names = m0(e.getAttribute("class") || "");
  }
  g0.prototype = {
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
  function y0(e, r) {
    for (var o = Lc(e), i = -1, l = r.length; ++i < l; ) o.add(r[i]);
  }
  function v0(e, r) {
    for (var o = Lc(e), i = -1, l = r.length; ++i < l; ) o.remove(r[i]);
  }
  function Z1(e) {
    return function() {
      y0(this, e);
    };
  }
  function q1(e) {
    return function() {
      v0(this, e);
    };
  }
  function J1(e, r) {
    return function() {
      (r.apply(this, arguments) ? y0 : v0)(this, e);
    };
  }
  function ev(e, r) {
    var o = m0(e + "");
    if (arguments.length < 2) {
      for (var i = Lc(this.node()), l = -1, u = o.length; ++l < u; ) if (!i.contains(o[l])) return false;
      return true;
    }
    return this.each((typeof r == "function" ? J1 : r ? Z1 : q1)(o, r));
  }
  function tv() {
    this.textContent = "";
  }
  function nv(e) {
    return function() {
      this.textContent = e;
    };
  }
  function rv(e) {
    return function() {
      var r = e.apply(this, arguments);
      this.textContent = r ?? "";
    };
  }
  function ov(e) {
    return arguments.length ? this.each(e == null ? tv : (typeof e == "function" ? rv : nv)(e)) : this.node().textContent;
  }
  function sv() {
    this.innerHTML = "";
  }
  function iv(e) {
    return function() {
      this.innerHTML = e;
    };
  }
  function lv(e) {
    return function() {
      var r = e.apply(this, arguments);
      this.innerHTML = r ?? "";
    };
  }
  function av(e) {
    return arguments.length ? this.each(e == null ? sv : (typeof e == "function" ? lv : iv)(e)) : this.node().innerHTML;
  }
  function uv() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function cv() {
    return this.each(uv);
  }
  function dv() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function fv() {
    return this.each(dv);
  }
  function hv(e) {
    var r = typeof e == "function" ? e : u0(e);
    return this.select(function() {
      return this.appendChild(r.apply(this, arguments));
    });
  }
  function pv() {
    return null;
  }
  function mv(e, r) {
    var o = typeof e == "function" ? e : u0(e), i = r == null ? pv : typeof r == "function" ? r : Pc(r);
    return this.select(function() {
      return this.insertBefore(o.apply(this, arguments), i.apply(this, arguments) || null);
    });
  }
  function gv() {
    var e = this.parentNode;
    e && e.removeChild(this);
  }
  function yv() {
    return this.each(gv);
  }
  function vv() {
    var e = this.cloneNode(false), r = this.parentNode;
    return r ? r.insertBefore(e, this.nextSibling) : e;
  }
  function wv() {
    var e = this.cloneNode(true), r = this.parentNode;
    return r ? r.insertBefore(e, this.nextSibling) : e;
  }
  function xv(e) {
    return this.select(e ? wv : vv);
  }
  function Sv(e) {
    return arguments.length ? this.property("__data__", e) : this.node().__data__;
  }
  function kv(e) {
    return function(r) {
      e.call(this, r, this.__data__);
    };
  }
  function Ev(e) {
    return e.trim().split(/^|\s+/).map(function(r) {
      var o = "", i = r.indexOf(".");
      return i >= 0 && (o = r.slice(i + 1), r = r.slice(0, i)), {
        type: r,
        name: o
      };
    });
  }
  function Cv(e) {
    return function() {
      var r = this.__on;
      if (r) {
        for (var o = 0, i = -1, l = r.length, u; o < l; ++o) u = r[o], (!e.type || u.type === e.type) && u.name === e.name ? this.removeEventListener(u.type, u.listener, u.options) : r[++i] = u;
        ++i ? r.length = i : delete this.__on;
      }
    };
  }
  function _v(e, r, o) {
    return function() {
      var i = this.__on, l, u = kv(r);
      if (i) {
        for (var c = 0, d = i.length; c < d; ++c) if ((l = i[c]).type === e.type && l.name === e.name) {
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
      }, i ? i.push(l) : this.__on = [
        l
      ];
    };
  }
  function Nv(e, r, o) {
    var i = Ev(e + ""), l, u = i.length, c;
    if (arguments.length < 2) {
      var d = this.node().__on;
      if (d) {
        for (var m = 0, h = d.length, p; m < h; ++m) for (l = 0, p = d[m]; l < u; ++l) if ((c = i[l]).type === p.type && c.name === p.name) return p.value;
      }
      return;
    }
    for (d = r ? _v : Cv, l = 0; l < u; ++l) this.each(d(i[l], r, o));
    return this;
  }
  function w0(e, r, o) {
    var i = p0(e), l = i.CustomEvent;
    typeof l == "function" ? l = new l(r, o) : (l = i.document.createEvent("Event"), o ? (l.initEvent(r, o.bubbles, o.cancelable), l.detail = o.detail) : l.initEvent(r, false, false)), e.dispatchEvent(l);
  }
  function Mv(e, r) {
    return function() {
      return w0(this, e, r);
    };
  }
  function Iv(e, r) {
    return function() {
      return w0(this, e, r.apply(this, arguments));
    };
  }
  function bv(e, r) {
    return this.each((typeof r == "function" ? Iv : Mv)(e, r));
  }
  function* Tv() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var i = e[r], l = 0, u = i.length, c; l < u; ++l) (c = i[l]) && (yield c);
  }
  var x0 = [
    null
  ];
  function Ot(e, r) {
    this._groups = e, this._parents = r;
  }
  function Fs() {
    return new Ot([
      [
        document.documentElement
      ]
    ], x0);
  }
  function Av() {
    return this;
  }
  Ot.prototype = Fs.prototype = {
    constructor: Ot,
    select: r1,
    selectAll: l1,
    selectChild: d1,
    selectChildren: m1,
    filter: g1,
    data: k1,
    enter: y1,
    exit: C1,
    join: _1,
    merge: N1,
    selection: Av,
    order: M1,
    sort: I1,
    call: T1,
    nodes: A1,
    node: $1,
    size: R1,
    empty: P1,
    each: L1,
    attr: H1,
    style: Y1,
    property: Q1,
    classed: ev,
    text: ov,
    html: av,
    raise: cv,
    lower: fv,
    append: hv,
    insert: mv,
    remove: yv,
    clone: xv,
    datum: Sv,
    on: Nv,
    dispatch: bv,
    [Symbol.iterator]: Tv
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
    ], x0);
  }
  function $v(e) {
    let r;
    for (; r = e.sourceEvent; ) e = r;
    return e;
  }
  function dn(e, r) {
    if (e = $v(e), r === void 0 && (r = e.currentTarget), r) {
      var o = r.ownerSVGElement || r;
      if (o.createSVGPoint) {
        var i = o.createSVGPoint();
        return i.x = e.clientX, i.y = e.clientY, i = i.matrixTransform(r.getScreenCTM().inverse()), [
          i.x,
          i.y
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
  const Rv = {
    passive: false
  }, Ms = {
    capture: true,
    passive: false
  };
  function Gu(e) {
    e.stopImmediatePropagation();
  }
  function Co(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function S0(e) {
    var r = e.document.documentElement, o = Qt(e).on("dragstart.drag", Co, Ms);
    "onselectstart" in r ? o.on("selectstart.drag", Co, Ms) : (r.__noselect = r.style.MozUserSelect, r.style.MozUserSelect = "none");
  }
  function k0(e, r) {
    var o = e.document.documentElement, i = Qt(e).on("dragstart.drag", null);
    r && (i.on("click.drag", Co, Ms), setTimeout(function() {
      i.on("click.drag", null);
    }, 0)), "onselectstart" in o ? i.on("selectstart.drag", null) : (o.style.MozUserSelect = o.__noselect, delete o.__noselect);
  }
  const ul = (e) => () => e;
  function uc(e, { sourceEvent: r, subject: o, target: i, identifier: l, active: u, x: c, y: d, dx: m, dy: h, dispatch: p }) {
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
        value: i,
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
        value: d,
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
        value: p
      }
    });
  }
  uc.prototype.on = function() {
    var e = this._.on.apply(this._, arguments);
    return e === this._ ? this : e;
  };
  function Pv(e) {
    return !e.ctrlKey && !e.button;
  }
  function Lv() {
    return this.parentNode;
  }
  function Dv(e, r) {
    return r ?? {
      x: e.x,
      y: e.y
    };
  }
  function zv() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Ov() {
    var e = Pv, r = Lv, o = Dv, i = zv, l = {}, u = Vl("start", "drag", "end"), c = 0, d, m, h, p, y = 0;
    function v(A) {
      A.on("mousedown.drag", x).filter(i).on("touchstart.drag", _).on("touchmove.drag", E, Rv).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function x(A, G) {
      if (!(p || !e.call(this, A, G))) {
        var D = b(this, r.call(this, A, G), A, G, "mouse");
        D && (Qt(A.view).on("mousemove.drag", S, Ms).on("mouseup.drag", k, Ms), S0(A.view), Gu(A), h = false, d = A.clientX, m = A.clientY, D("start", A));
      }
    }
    function S(A) {
      if (Co(A), !h) {
        var G = A.clientX - d, D = A.clientY - m;
        h = G * G + D * D > y;
      }
      l.mouse("drag", A);
    }
    function k(A) {
      Qt(A.view).on("mousemove.drag mouseup.drag", null), k0(A.view, h), Co(A), l.mouse("end", A);
    }
    function _(A, G) {
      if (e.call(this, A, G)) {
        var D = A.changedTouches, Q = r.call(this, A, G), q = D.length, Y, J;
        for (Y = 0; Y < q; ++Y) (J = b(this, Q, A, G, D[Y].identifier, D[Y])) && (Gu(A), J("start", A, D[Y]));
      }
    }
    function E(A) {
      var G = A.changedTouches, D = G.length, Q, q;
      for (Q = 0; Q < D; ++Q) (q = l[G[Q].identifier]) && (Co(A), q("drag", A, G[Q]));
    }
    function $(A) {
      var G = A.changedTouches, D = G.length, Q, q;
      for (p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, 500), Q = 0; Q < D; ++Q) (q = l[G[Q].identifier]) && (Gu(A), q("end", A, G[Q]));
    }
    function b(A, G, D, Q, q, Y) {
      var J = u.copy(), U = dn(Y || D, G), Z, ee, C;
      if ((C = o.call(A, new uc("beforestart", {
        sourceEvent: D,
        target: v,
        identifier: q,
        active: c,
        x: U[0],
        y: U[1],
        dx: 0,
        dy: 0,
        dispatch: J
      }), Q)) != null) return Z = C.x - U[0] || 0, ee = C.y - U[1] || 0, function H(O, K, F) {
        var R = U, B;
        switch (O) {
          case "start":
            l[q] = H, B = c++;
            break;
          case "end":
            delete l[q], --c;
          case "drag":
            U = dn(F || K, G), B = c;
            break;
        }
        J.call(O, A, new uc(O, {
          sourceEvent: K,
          subject: C,
          target: v,
          identifier: q,
          active: B,
          x: U[0] + Z,
          y: U[1] + ee,
          dx: U[0] - R[0],
          dy: U[1] - R[1],
          dispatch: J
        }), Q);
      };
    }
    return v.filter = function(A) {
      return arguments.length ? (e = typeof A == "function" ? A : ul(!!A), v) : e;
    }, v.container = function(A) {
      return arguments.length ? (r = typeof A == "function" ? A : ul(A), v) : r;
    }, v.subject = function(A) {
      return arguments.length ? (o = typeof A == "function" ? A : ul(A), v) : o;
    }, v.touchable = function(A) {
      return arguments.length ? (i = typeof A == "function" ? A : ul(!!A), v) : i;
    }, v.on = function() {
      var A = u.on.apply(u, arguments);
      return A === u ? v : A;
    }, v.clickDistance = function(A) {
      return arguments.length ? (y = (A = +A) * A, v) : Math.sqrt(y);
    }, v;
  }
  function Dc(e, r, o) {
    e.prototype = r.prototype = o, o.constructor = e;
  }
  function E0(e, r) {
    var o = Object.create(e.prototype);
    for (var i in r) o[i] = r[i];
    return o;
  }
  function Bs() {
  }
  var Is = 0.7, Al = 1 / Is, _o = "\\s*([+-]?\\d+)\\s*", bs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fv = /^#([0-9a-f]{3,8})$/, Bv = new RegExp(`^rgb\\(${_o},${_o},${_o}\\)$`), jv = new RegExp(`^rgb\\(${Cn},${Cn},${Cn}\\)$`), Hv = new RegExp(`^rgba\\(${_o},${_o},${_o},${bs}\\)$`), Vv = new RegExp(`^rgba\\(${Cn},${Cn},${Cn},${bs}\\)$`), Uv = new RegExp(`^hsl\\(${bs},${Cn},${Cn}\\)$`), Wv = new RegExp(`^hsla\\(${bs},${Cn},${Cn},${bs}\\)$`), Yh = {
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
  Dc(Bs, Ts, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: Gh,
    formatHex: Gh,
    formatHex8: Yv,
    formatHsl: Gv,
    formatRgb: Xh,
    toString: Xh
  });
  function Gh() {
    return this.rgb().formatHex();
  }
  function Yv() {
    return this.rgb().formatHex8();
  }
  function Gv() {
    return C0(this).formatHsl();
  }
  function Xh() {
    return this.rgb().formatRgb();
  }
  function Ts(e) {
    var r, o;
    return e = (e + "").trim().toLowerCase(), (r = Fv.exec(e)) ? (o = r[1].length, r = parseInt(r[1], 16), o === 6 ? Kh(r) : o === 3 ? new It(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : o === 8 ? cl(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : o === 4 ? cl(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Bv.exec(e)) ? new It(r[1], r[2], r[3], 1) : (r = jv.exec(e)) ? new It(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Hv.exec(e)) ? cl(r[1], r[2], r[3], r[4]) : (r = Vv.exec(e)) ? cl(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Uv.exec(e)) ? qh(r[1], r[2] / 100, r[3] / 100, 1) : (r = Wv.exec(e)) ? qh(r[1], r[2] / 100, r[3] / 100, r[4]) : Yh.hasOwnProperty(e) ? Kh(Yh[e]) : e === "transparent" ? new It(NaN, NaN, NaN, 0) : null;
  }
  function Kh(e) {
    return new It(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
  }
  function cl(e, r, o, i) {
    return i <= 0 && (e = r = o = NaN), new It(e, r, o, i);
  }
  function Xv(e) {
    return e instanceof Bs || (e = Ts(e)), e ? (e = e.rgb(), new It(e.r, e.g, e.b, e.opacity)) : new It();
  }
  function cc(e, r, o, i) {
    return arguments.length === 1 ? Xv(e) : new It(e, r, o, i ?? 1);
  }
  function It(e, r, o, i) {
    this.r = +e, this.g = +r, this.b = +o, this.opacity = +i;
  }
  Dc(It, cc, E0(Bs, {
    brighter(e) {
      return e = e == null ? Al : Math.pow(Al, e), new It(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? Is : Math.pow(Is, e), new It(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new It(Fr(this.r), Fr(this.g), Fr(this.b), $l(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: Qh,
    formatHex: Qh,
    formatHex8: Kv,
    formatRgb: Zh,
    toString: Zh
  }));
  function Qh() {
    return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}`;
  }
  function Kv() {
    return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function Zh() {
    const e = $l(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${Fr(this.r)}, ${Fr(this.g)}, ${Fr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
  }
  function $l(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function Fr(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function zr(e) {
    return e = Fr(e), (e < 16 ? "0" : "") + e.toString(16);
  }
  function qh(e, r, o, i) {
    return i <= 0 ? e = r = o = NaN : o <= 0 || o >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new fn(e, r, o, i);
  }
  function C0(e) {
    if (e instanceof fn) return new fn(e.h, e.s, e.l, e.opacity);
    if (e instanceof Bs || (e = Ts(e)), !e) return new fn();
    if (e instanceof fn) return e;
    e = e.rgb();
    var r = e.r / 255, o = e.g / 255, i = e.b / 255, l = Math.min(r, o, i), u = Math.max(r, o, i), c = NaN, d = u - l, m = (u + l) / 2;
    return d ? (r === u ? c = (o - i) / d + (o < i) * 6 : o === u ? c = (i - r) / d + 2 : c = (r - o) / d + 4, d /= m < 0.5 ? u + l : 2 - u - l, c *= 60) : d = m > 0 && m < 1 ? 0 : c, new fn(c, d, m, e.opacity);
  }
  function Qv(e, r, o, i) {
    return arguments.length === 1 ? C0(e) : new fn(e, r, o, i ?? 1);
  }
  function fn(e, r, o, i) {
    this.h = +e, this.s = +r, this.l = +o, this.opacity = +i;
  }
  Dc(fn, Qv, E0(Bs, {
    brighter(e) {
      return e = e == null ? Al : Math.pow(Al, e), new fn(this.h, this.s, this.l * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? Is : Math.pow(Is, e), new fn(this.h, this.s, this.l * e, this.opacity);
    },
    rgb() {
      var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, o = this.l, i = o + (o < 0.5 ? o : 1 - o) * r, l = 2 * o - i;
      return new It(Xu(e >= 240 ? e - 240 : e + 120, l, i), Xu(e, l, i), Xu(e < 120 ? e + 240 : e - 120, l, i), this.opacity);
    },
    clamp() {
      return new fn(Jh(this.h), dl(this.s), dl(this.l), $l(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const e = $l(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Jh(this.h)}, ${dl(this.s) * 100}%, ${dl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    }
  }));
  function Jh(e) {
    return e = (e || 0) % 360, e < 0 ? e + 360 : e;
  }
  function dl(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function Xu(e, r, o) {
    return (e < 60 ? r + (o - r) * e / 60 : e < 180 ? o : e < 240 ? r + (o - r) * (240 - e) / 60 : r) * 255;
  }
  const _0 = (e) => () => e;
  function Zv(e, r) {
    return function(o) {
      return e + o * r;
    };
  }
  function qv(e, r, o) {
    return e = Math.pow(e, o), r = Math.pow(r, o) - e, o = 1 / o, function(i) {
      return Math.pow(e + i * r, o);
    };
  }
  function Jv(e) {
    return (e = +e) == 1 ? N0 : function(r, o) {
      return o - r ? qv(r, o, e) : _0(isNaN(r) ? o : r);
    };
  }
  function N0(e, r) {
    var o = r - e;
    return o ? Zv(e, o) : _0(isNaN(e) ? r : e);
  }
  const ep = (function e(r) {
    var o = Jv(r);
    function i(l, u) {
      var c = o((l = cc(l)).r, (u = cc(u)).r), d = o(l.g, u.g), m = o(l.b, u.b), h = N0(l.opacity, u.opacity);
      return function(p) {
        return l.r = c(p), l.g = d(p), l.b = m(p), l.opacity = h(p), l + "";
      };
    }
    return i.gamma = e, i;
  })(1);
  function fr(e, r) {
    return e = +e, r = +r, function(o) {
      return e * (1 - o) + r * o;
    };
  }
  var dc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ku = new RegExp(dc.source, "g");
  function ew(e) {
    return function() {
      return e;
    };
  }
  function tw(e) {
    return function(r) {
      return e(r) + "";
    };
  }
  function nw(e, r) {
    var o = dc.lastIndex = Ku.lastIndex = 0, i, l, u, c = -1, d = [], m = [];
    for (e = e + "", r = r + ""; (i = dc.exec(e)) && (l = Ku.exec(r)); ) (u = l.index) > o && (u = r.slice(o, u), d[c] ? d[c] += u : d[++c] = u), (i = i[0]) === (l = l[0]) ? d[c] ? d[c] += l : d[++c] = l : (d[++c] = null, m.push({
      i: c,
      x: fr(i, l)
    })), o = Ku.lastIndex;
    return o < r.length && (u = r.slice(o), d[c] ? d[c] += u : d[++c] = u), d.length < 2 ? m[0] ? tw(m[0].x) : ew(r) : (r = m.length, function(h) {
      for (var p = 0, y; p < r; ++p) d[(y = m[p]).i] = y.x(h);
      return d.join("");
    });
  }
  var tp = 180 / Math.PI, fc = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function M0(e, r, o, i, l, u) {
    var c, d, m;
    return (c = Math.sqrt(e * e + r * r)) && (e /= c, r /= c), (m = e * o + r * i) && (o -= e * m, i -= r * m), (d = Math.sqrt(o * o + i * i)) && (o /= d, i /= d, m /= d), e * i < r * o && (e = -e, r = -r, m = -m, c = -c), {
      translateX: l,
      translateY: u,
      rotate: Math.atan2(r, e) * tp,
      skewX: Math.atan(m) * tp,
      scaleX: c,
      scaleY: d
    };
  }
  var fl;
  function rw(e) {
    const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return r.isIdentity ? fc : M0(r.a, r.b, r.c, r.d, r.e, r.f);
  }
  function ow(e) {
    return e == null || (fl || (fl = document.createElementNS("http://www.w3.org/2000/svg", "g")), fl.setAttribute("transform", e), !(e = fl.transform.baseVal.consolidate())) ? fc : (e = e.matrix, M0(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function I0(e, r, o, i) {
    function l(h) {
      return h.length ? h.pop() + " " : "";
    }
    function u(h, p, y, v, x, S) {
      if (h !== y || p !== v) {
        var k = x.push("translate(", null, r, null, o);
        S.push({
          i: k - 4,
          x: fr(h, y)
        }, {
          i: k - 2,
          x: fr(p, v)
        });
      } else (y || v) && x.push("translate(" + y + r + v + o);
    }
    function c(h, p, y, v) {
      h !== p ? (h - p > 180 ? p += 360 : p - h > 180 && (h += 360), v.push({
        i: y.push(l(y) + "rotate(", null, i) - 2,
        x: fr(h, p)
      })) : p && y.push(l(y) + "rotate(" + p + i);
    }
    function d(h, p, y, v) {
      h !== p ? v.push({
        i: y.push(l(y) + "skewX(", null, i) - 2,
        x: fr(h, p)
      }) : p && y.push(l(y) + "skewX(" + p + i);
    }
    function m(h, p, y, v, x, S) {
      if (h !== y || p !== v) {
        var k = x.push(l(x) + "scale(", null, ",", null, ")");
        S.push({
          i: k - 4,
          x: fr(h, y)
        }, {
          i: k - 2,
          x: fr(p, v)
        });
      } else (y !== 1 || v !== 1) && x.push(l(x) + "scale(" + y + "," + v + ")");
    }
    return function(h, p) {
      var y = [], v = [];
      return h = e(h), p = e(p), u(h.translateX, h.translateY, p.translateX, p.translateY, y, v), c(h.rotate, p.rotate, y, v), d(h.skewX, p.skewX, y, v), m(h.scaleX, h.scaleY, p.scaleX, p.scaleY, y, v), h = p = null, function(x) {
        for (var S = -1, k = v.length, _; ++S < k; ) y[(_ = v[S]).i] = _.x(x);
        return y.join("");
      };
    };
  }
  var sw = I0(rw, "px, ", "px)", "deg)"), iw = I0(ow, ", ", ")", ")"), lw = 1e-12;
  function np(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
  }
  function aw(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2;
  }
  function uw(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1);
  }
  const cw = (function e(r, o, i) {
    function l(u, c) {
      var d = u[0], m = u[1], h = u[2], p = c[0], y = c[1], v = c[2], x = p - d, S = y - m, k = x * x + S * S, _, E;
      if (k < lw) E = Math.log(v / h) / r, _ = function(Q) {
        return [
          d + Q * x,
          m + Q * S,
          h * Math.exp(r * Q * E)
        ];
      };
      else {
        var $ = Math.sqrt(k), b = (v * v - h * h + i * k) / (2 * h * o * $), A = (v * v - h * h - i * k) / (2 * v * o * $), G = Math.log(Math.sqrt(b * b + 1) - b), D = Math.log(Math.sqrt(A * A + 1) - A);
        E = (D - G) / r, _ = function(Q) {
          var q = Q * E, Y = np(G), J = h / (o * $) * (Y * uw(r * q + G) - aw(G));
          return [
            d + J * x,
            m + J * S,
            h * Y / np(r * q + G)
          ];
        };
      }
      return _.duration = E * 1e3 * r / Math.SQRT2, _;
    }
    return l.rho = function(u) {
      var c = Math.max(1e-3, +u), d = c * c, m = d * d;
      return e(c, d, m);
    }, l;
  })(Math.SQRT2, 2, 4);
  var Io = 0, Cs = 0, vs = 0, b0 = 1e3, Rl, _s, Pl = 0, Vr = 0, Wl = 0, As = typeof performance == "object" && performance.now ? performance : Date, T0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
    setTimeout(e, 17);
  };
  function zc() {
    return Vr || (T0(dw), Vr = As.now() + Wl);
  }
  function dw() {
    Vr = 0;
  }
  function Ll() {
    this._call = this._time = this._next = null;
  }
  Ll.prototype = A0.prototype = {
    constructor: Ll,
    restart: function(e, r, o) {
      if (typeof e != "function") throw new TypeError("callback is not a function");
      o = (o == null ? zc() : +o) + (r == null ? 0 : +r), !this._next && _s !== this && (_s ? _s._next = this : Rl = this, _s = this), this._call = e, this._time = o, hc();
    },
    stop: function() {
      this._call && (this._call = null, this._time = 1 / 0, hc());
    }
  };
  function A0(e, r, o) {
    var i = new Ll();
    return i.restart(e, r, o), i;
  }
  function fw() {
    zc(), ++Io;
    for (var e = Rl, r; e; ) (r = Vr - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
    --Io;
  }
  function rp() {
    Vr = (Pl = As.now()) + Wl, Io = Cs = 0;
    try {
      fw();
    } finally {
      Io = 0, pw(), Vr = 0;
    }
  }
  function hw() {
    var e = As.now(), r = e - Pl;
    r > b0 && (Wl -= r, Pl = e);
  }
  function pw() {
    for (var e, r = Rl, o, i = 1 / 0; r; ) r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (o = r._next, r._next = null, r = e ? e._next = o : Rl = o);
    _s = e, hc(i);
  }
  function hc(e) {
    if (!Io) {
      Cs && (Cs = clearTimeout(Cs));
      var r = e - Vr;
      r > 24 ? (e < 1 / 0 && (Cs = setTimeout(rp, e - As.now() - Wl)), vs && (vs = clearInterval(vs))) : (vs || (Pl = As.now(), vs = setInterval(hw, b0)), Io = 1, T0(rp));
    }
  }
  function op(e, r, o) {
    var i = new Ll();
    return r = r == null ? 0 : +r, i.restart((l) => {
      i.stop(), e(l + r);
    }, r, o), i;
  }
  var mw = Vl("start", "end", "cancel", "interrupt"), gw = [], $0 = 0, sp = 1, pc = 2, kl = 3, ip = 4, mc = 5, El = 6;
  function Yl(e, r, o, i, l, u) {
    var c = e.__transition;
    if (!c) e.__transition = {};
    else if (o in c) return;
    yw(e, o, {
      name: r,
      index: i,
      group: l,
      on: mw,
      tween: gw,
      time: u.time,
      delay: u.delay,
      duration: u.duration,
      ease: u.ease,
      timer: null,
      state: $0
    });
  }
  function Oc(e, r) {
    var o = hn(e, r);
    if (o.state > $0) throw new Error("too late; already scheduled");
    return o;
  }
  function _n(e, r) {
    var o = hn(e, r);
    if (o.state > kl) throw new Error("too late; already running");
    return o;
  }
  function hn(e, r) {
    var o = e.__transition;
    if (!o || !(o = o[r])) throw new Error("transition not found");
    return o;
  }
  function yw(e, r, o) {
    var i = e.__transition, l;
    i[r] = o, o.timer = A0(u, 0, o.time);
    function u(h) {
      o.state = sp, o.timer.restart(c, o.delay, o.time), o.delay <= h && c(h - o.delay);
    }
    function c(h) {
      var p, y, v, x;
      if (o.state !== sp) return m();
      for (p in i) if (x = i[p], x.name === o.name) {
        if (x.state === kl) return op(c);
        x.state === ip ? (x.state = El, x.timer.stop(), x.on.call("interrupt", e, e.__data__, x.index, x.group), delete i[p]) : +p < r && (x.state = El, x.timer.stop(), x.on.call("cancel", e, e.__data__, x.index, x.group), delete i[p]);
      }
      if (op(function() {
        o.state === kl && (o.state = ip, o.timer.restart(d, o.delay, o.time), d(h));
      }), o.state = pc, o.on.call("start", e, e.__data__, o.index, o.group), o.state === pc) {
        for (o.state = kl, l = new Array(v = o.tween.length), p = 0, y = -1; p < v; ++p) (x = o.tween[p].value.call(e, e.__data__, o.index, o.group)) && (l[++y] = x);
        l.length = y + 1;
      }
    }
    function d(h) {
      for (var p = h < o.duration ? o.ease.call(null, h / o.duration) : (o.timer.restart(m), o.state = mc, 1), y = -1, v = l.length; ++y < v; ) l[y].call(e, p);
      o.state === mc && (o.on.call("end", e, e.__data__, o.index, o.group), m());
    }
    function m() {
      o.state = El, o.timer.stop(), delete i[r];
      for (var h in i) return;
      delete e.__transition;
    }
  }
  function Cl(e, r) {
    var o = e.__transition, i, l, u = true, c;
    if (o) {
      r = r == null ? null : r + "";
      for (c in o) {
        if ((i = o[c]).name !== r) {
          u = false;
          continue;
        }
        l = i.state > pc && i.state < mc, i.state = El, i.timer.stop(), i.on.call(l ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete o[c];
      }
      u && delete e.__transition;
    }
  }
  function vw(e) {
    return this.each(function() {
      Cl(this, e);
    });
  }
  function ww(e, r) {
    var o, i;
    return function() {
      var l = _n(this, e), u = l.tween;
      if (u !== o) {
        i = o = u;
        for (var c = 0, d = i.length; c < d; ++c) if (i[c].name === r) {
          i = i.slice(), i.splice(c, 1);
          break;
        }
      }
      l.tween = i;
    };
  }
  function xw(e, r, o) {
    var i, l;
    if (typeof o != "function") throw new Error();
    return function() {
      var u = _n(this, e), c = u.tween;
      if (c !== i) {
        l = (i = c).slice();
        for (var d = {
          name: r,
          value: o
        }, m = 0, h = l.length; m < h; ++m) if (l[m].name === r) {
          l[m] = d;
          break;
        }
        m === h && l.push(d);
      }
      u.tween = l;
    };
  }
  function Sw(e, r) {
    var o = this._id;
    if (e += "", arguments.length < 2) {
      for (var i = hn(this.node(), o).tween, l = 0, u = i.length, c; l < u; ++l) if ((c = i[l]).name === e) return c.value;
      return null;
    }
    return this.each((r == null ? ww : xw)(o, e, r));
  }
  function Fc(e, r, o) {
    var i = e._id;
    return e.each(function() {
      var l = _n(this, i);
      (l.value || (l.value = {}))[r] = o.apply(this, arguments);
    }), function(l) {
      return hn(l, i).value[r];
    };
  }
  function R0(e, r) {
    var o;
    return (typeof r == "number" ? fr : r instanceof Ts ? ep : (o = Ts(r)) ? (r = o, ep) : nw)(e, r);
  }
  function kw(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function Ew(e) {
    return function() {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function Cw(e, r, o) {
    var i, l = o + "", u;
    return function() {
      var c = this.getAttribute(e);
      return c === l ? null : c === i ? u : u = r(i = c, o);
    };
  }
  function _w(e, r, o) {
    var i, l = o + "", u;
    return function() {
      var c = this.getAttributeNS(e.space, e.local);
      return c === l ? null : c === i ? u : u = r(i = c, o);
    };
  }
  function Nw(e, r, o) {
    var i, l, u;
    return function() {
      var c, d = o(this), m;
      return d == null ? void this.removeAttribute(e) : (c = this.getAttribute(e), m = d + "", c === m ? null : c === i && m === l ? u : (l = m, u = r(i = c, d)));
    };
  }
  function Mw(e, r, o) {
    var i, l, u;
    return function() {
      var c, d = o(this), m;
      return d == null ? void this.removeAttributeNS(e.space, e.local) : (c = this.getAttributeNS(e.space, e.local), m = d + "", c === m ? null : c === i && m === l ? u : (l = m, u = r(i = c, d)));
    };
  }
  function Iw(e, r) {
    var o = Ul(e), i = o === "transform" ? iw : R0;
    return this.attrTween(e, typeof r == "function" ? (o.local ? Mw : Nw)(o, i, Fc(this, "attr." + e, r)) : r == null ? (o.local ? Ew : kw)(o) : (o.local ? _w : Cw)(o, i, r));
  }
  function bw(e, r) {
    return function(o) {
      this.setAttribute(e, r.call(this, o));
    };
  }
  function Tw(e, r) {
    return function(o) {
      this.setAttributeNS(e.space, e.local, r.call(this, o));
    };
  }
  function Aw(e, r) {
    var o, i;
    function l() {
      var u = r.apply(this, arguments);
      return u !== i && (o = (i = u) && Tw(e, u)), o;
    }
    return l._value = r, l;
  }
  function $w(e, r) {
    var o, i;
    function l() {
      var u = r.apply(this, arguments);
      return u !== i && (o = (i = u) && bw(e, u)), o;
    }
    return l._value = r, l;
  }
  function Rw(e, r) {
    var o = "attr." + e;
    if (arguments.length < 2) return (o = this.tween(o)) && o._value;
    if (r == null) return this.tween(o, null);
    if (typeof r != "function") throw new Error();
    var i = Ul(e);
    return this.tween(o, (i.local ? Aw : $w)(i, r));
  }
  function Pw(e, r) {
    return function() {
      Oc(this, e).delay = +r.apply(this, arguments);
    };
  }
  function Lw(e, r) {
    return r = +r, function() {
      Oc(this, e).delay = r;
    };
  }
  function Dw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? Pw : Lw)(r, e)) : hn(this.node(), r).delay;
  }
  function zw(e, r) {
    return function() {
      _n(this, e).duration = +r.apply(this, arguments);
    };
  }
  function Ow(e, r) {
    return r = +r, function() {
      _n(this, e).duration = r;
    };
  }
  function Fw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? zw : Ow)(r, e)) : hn(this.node(), r).duration;
  }
  function Bw(e, r) {
    if (typeof r != "function") throw new Error();
    return function() {
      _n(this, e).ease = r;
    };
  }
  function jw(e) {
    var r = this._id;
    return arguments.length ? this.each(Bw(r, e)) : hn(this.node(), r).ease;
  }
  function Hw(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      if (typeof o != "function") throw new Error();
      _n(this, e).ease = o;
    };
  }
  function Vw(e) {
    if (typeof e != "function") throw new Error();
    return this.each(Hw(this._id, e));
  }
  function Uw(e) {
    typeof e != "function" && (e = d0(e));
    for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, d = i[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && d.push(m);
    return new Vn(i, this._parents, this._name, this._id);
  }
  function Ww(e) {
    if (e._id !== this._id) throw new Error();
    for (var r = this._groups, o = e._groups, i = r.length, l = o.length, u = Math.min(i, l), c = new Array(i), d = 0; d < u; ++d) for (var m = r[d], h = o[d], p = m.length, y = c[d] = new Array(p), v, x = 0; x < p; ++x) (v = m[x] || h[x]) && (y[x] = v);
    for (; d < i; ++d) c[d] = r[d];
    return new Vn(c, this._parents, this._name, this._id);
  }
  function Yw(e) {
    return (e + "").trim().split(/^|\s+/).every(function(r) {
      var o = r.indexOf(".");
      return o >= 0 && (r = r.slice(0, o)), !r || r === "start";
    });
  }
  function Gw(e, r, o) {
    var i, l, u = Yw(r) ? Oc : _n;
    return function() {
      var c = u(this, e), d = c.on;
      d !== i && (l = (i = d).copy()).on(r, o), c.on = l;
    };
  }
  function Xw(e, r) {
    var o = this._id;
    return arguments.length < 2 ? hn(this.node(), o).on.on(e) : this.each(Gw(o, e, r));
  }
  function Kw(e) {
    return function() {
      var r = this.parentNode;
      for (var o in this.__transition) if (+o !== e) return;
      r && r.removeChild(this);
    };
  }
  function Qw() {
    return this.on("end.remove", Kw(this._id));
  }
  function Zw(e) {
    var r = this._name, o = this._id;
    typeof e != "function" && (e = Pc(e));
    for (var i = this._groups, l = i.length, u = new Array(l), c = 0; c < l; ++c) for (var d = i[c], m = d.length, h = u[c] = new Array(m), p, y, v = 0; v < m; ++v) (p = d[v]) && (y = e.call(p, p.__data__, v, d)) && ("__data__" in p && (y.__data__ = p.__data__), h[v] = y, Yl(h[v], r, o, v, h, hn(p, o)));
    return new Vn(u, this._parents, r, o);
  }
  function qw(e) {
    var r = this._name, o = this._id;
    typeof e != "function" && (e = c0(e));
    for (var i = this._groups, l = i.length, u = [], c = [], d = 0; d < l; ++d) for (var m = i[d], h = m.length, p, y = 0; y < h; ++y) if (p = m[y]) {
      for (var v = e.call(p, p.__data__, y, m), x, S = hn(p, o), k = 0, _ = v.length; k < _; ++k) (x = v[k]) && Yl(x, r, o, k, v, S);
      u.push(v), c.push(p);
    }
    return new Vn(u, c, r, o);
  }
  var Jw = Fs.prototype.constructor;
  function ex() {
    return new Jw(this._groups, this._parents);
  }
  function tx(e, r) {
    var o, i, l;
    return function() {
      var u = Mo(this, e), c = (this.style.removeProperty(e), Mo(this, e));
      return u === c ? null : u === o && c === i ? l : l = r(o = u, i = c);
    };
  }
  function P0(e) {
    return function() {
      this.style.removeProperty(e);
    };
  }
  function nx(e, r, o) {
    var i, l = o + "", u;
    return function() {
      var c = Mo(this, e);
      return c === l ? null : c === i ? u : u = r(i = c, o);
    };
  }
  function rx(e, r, o) {
    var i, l, u;
    return function() {
      var c = Mo(this, e), d = o(this), m = d + "";
      return d == null && (m = d = (this.style.removeProperty(e), Mo(this, e))), c === m ? null : c === i && m === l ? u : (l = m, u = r(i = c, d));
    };
  }
  function ox(e, r) {
    var o, i, l, u = "style." + r, c = "end." + u, d;
    return function() {
      var m = _n(this, e), h = m.on, p = m.value[u] == null ? d || (d = P0(r)) : void 0;
      (h !== o || l !== p) && (i = (o = h).copy()).on(c, l = p), m.on = i;
    };
  }
  function sx(e, r, o) {
    var i = (e += "") == "transform" ? sw : R0;
    return r == null ? this.styleTween(e, tx(e, i)).on("end.style." + e, P0(e)) : typeof r == "function" ? this.styleTween(e, rx(e, i, Fc(this, "style." + e, r))).each(ox(this._id, e)) : this.styleTween(e, nx(e, i, r), o).on("end.style." + e, null);
  }
  function ix(e, r, o) {
    return function(i) {
      this.style.setProperty(e, r.call(this, i), o);
    };
  }
  function lx(e, r, o) {
    var i, l;
    function u() {
      var c = r.apply(this, arguments);
      return c !== l && (i = (l = c) && ix(e, c, o)), i;
    }
    return u._value = r, u;
  }
  function ax(e, r, o) {
    var i = "style." + (e += "");
    if (arguments.length < 2) return (i = this.tween(i)) && i._value;
    if (r == null) return this.tween(i, null);
    if (typeof r != "function") throw new Error();
    return this.tween(i, lx(e, r, o ?? ""));
  }
  function ux(e) {
    return function() {
      this.textContent = e;
    };
  }
  function cx(e) {
    return function() {
      var r = e(this);
      this.textContent = r ?? "";
    };
  }
  function dx(e) {
    return this.tween("text", typeof e == "function" ? cx(Fc(this, "text", e)) : ux(e == null ? "" : e + ""));
  }
  function fx(e) {
    return function(r) {
      this.textContent = e.call(this, r);
    };
  }
  function hx(e) {
    var r, o;
    function i() {
      var l = e.apply(this, arguments);
      return l !== o && (r = (o = l) && fx(l)), r;
    }
    return i._value = e, i;
  }
  function px(e) {
    var r = "text";
    if (arguments.length < 1) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error();
    return this.tween(r, hx(e));
  }
  function mx() {
    for (var e = this._name, r = this._id, o = L0(), i = this._groups, l = i.length, u = 0; u < l; ++u) for (var c = i[u], d = c.length, m, h = 0; h < d; ++h) if (m = c[h]) {
      var p = hn(m, r);
      Yl(m, e, o, h, c, {
        time: p.time + p.delay + p.duration,
        delay: 0,
        duration: p.duration,
        ease: p.ease
      });
    }
    return new Vn(i, this._parents, e, o);
  }
  function gx() {
    var e, r, o = this, i = o._id, l = o.size();
    return new Promise(function(u, c) {
      var d = {
        value: c
      }, m = {
        value: function() {
          --l === 0 && u();
        }
      };
      o.each(function() {
        var h = _n(this, i), p = h.on;
        p !== e && (r = (e = p).copy(), r._.cancel.push(d), r._.interrupt.push(d), r._.end.push(m)), h.on = r;
      }), l === 0 && u();
    });
  }
  var yx = 0;
  function Vn(e, r, o, i) {
    this._groups = e, this._parents = r, this._name = o, this._id = i;
  }
  function L0() {
    return ++yx;
  }
  var Bn = Fs.prototype;
  Vn.prototype = {
    constructor: Vn,
    select: Zw,
    selectAll: qw,
    selectChild: Bn.selectChild,
    selectChildren: Bn.selectChildren,
    filter: Uw,
    merge: Ww,
    selection: ex,
    transition: mx,
    call: Bn.call,
    nodes: Bn.nodes,
    node: Bn.node,
    size: Bn.size,
    empty: Bn.empty,
    each: Bn.each,
    on: Xw,
    attr: Iw,
    attrTween: Rw,
    style: sx,
    styleTween: ax,
    text: dx,
    textTween: px,
    remove: Qw,
    tween: Sw,
    delay: Dw,
    duration: Fw,
    ease: jw,
    easeVarying: Vw,
    end: gx,
    [Symbol.iterator]: Bn[Symbol.iterator]
  };
  function vx(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
  }
  var wx = {
    time: null,
    delay: 0,
    duration: 250,
    ease: vx
  };
  function xx(e, r) {
    for (var o; !(o = e.__transition) || !(o = o[r]); ) if (!(e = e.parentNode)) throw new Error(`transition ${r} not found`);
    return o;
  }
  function Sx(e) {
    var r, o;
    e instanceof Vn ? (r = e._id, e = e._name) : (r = L0(), (o = wx).time = zc(), e = e == null ? null : e + "");
    for (var i = this._groups, l = i.length, u = 0; u < l; ++u) for (var c = i[u], d = c.length, m, h = 0; h < d; ++h) (m = c[h]) && Yl(m, e, r, h, c, o || xx(m, r));
    return new Vn(i, this._parents, e, r);
  }
  Fs.prototype.interrupt = vw;
  Fs.prototype.transition = Sx;
  const hl = (e) => () => e;
  function kx(e, { sourceEvent: r, target: o, transform: i, dispatch: l }) {
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
        value: i,
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
  function Qu(e) {
    e.stopImmediatePropagation();
  }
  function ws(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function Ex(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button;
  }
  function Cx() {
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
  function lp() {
    return this.__zoom || Hn;
  }
  function _x(e) {
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
  }
  function Nx() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Mx(e, r, o) {
    var i = e.invertX(r[0][0]) - o[0][0], l = e.invertX(r[1][0]) - o[1][0], u = e.invertY(r[0][1]) - o[0][1], c = e.invertY(r[1][1]) - o[1][1];
    return e.translate(l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l), c > u ? (u + c) / 2 : Math.min(0, u) || Math.max(0, c));
  }
  function D0() {
    var e = Ex, r = Cx, o = Mx, i = _x, l = Nx, u = [
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
    ], d = 250, m = cw, h = Vl("start", "zoom", "end"), p, y, v, x = 500, S = 150, k = 0, _ = 10;
    function E(C) {
      C.property("__zoom", lp).on("wheel.zoom", q, {
        passive: false
      }).on("mousedown.zoom", Y).on("dblclick.zoom", J).filter(l).on("touchstart.zoom", U).on("touchmove.zoom", Z).on("touchend.zoom touchcancel.zoom", ee).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    E.transform = function(C, H, O, K) {
      var F = C.selection ? C.selection() : C;
      F.property("__zoom", lp), C !== F ? G(C, H, O, K) : F.interrupt().each(function() {
        D(this, arguments).event(K).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
      });
    }, E.scaleBy = function(C, H, O, K) {
      E.scaleTo(C, function() {
        var F = this.__zoom.k, R = typeof H == "function" ? H.apply(this, arguments) : H;
        return F * R;
      }, O, K);
    }, E.scaleTo = function(C, H, O, K) {
      E.transform(C, function() {
        var F = r.apply(this, arguments), R = this.__zoom, B = O == null ? A(F) : typeof O == "function" ? O.apply(this, arguments) : O, N = R.invert(B), L = typeof H == "function" ? H.apply(this, arguments) : H;
        return o(b($(R, L), B, N), F, c);
      }, O, K);
    }, E.translateBy = function(C, H, O, K) {
      E.transform(C, function() {
        return o(this.__zoom.translate(typeof H == "function" ? H.apply(this, arguments) : H, typeof O == "function" ? O.apply(this, arguments) : O), r.apply(this, arguments), c);
      }, null, K);
    }, E.translateTo = function(C, H, O, K, F) {
      E.transform(C, function() {
        var R = r.apply(this, arguments), B = this.__zoom, N = K == null ? A(R) : typeof K == "function" ? K.apply(this, arguments) : K;
        return o(Hn.translate(N[0], N[1]).scale(B.k).translate(typeof H == "function" ? -H.apply(this, arguments) : -H, typeof O == "function" ? -O.apply(this, arguments) : -O), R, c);
      }, K, F);
    };
    function $(C, H) {
      return H = Math.max(u[0], Math.min(u[1], H)), H === C.k ? C : new jn(H, C.x, C.y);
    }
    function b(C, H, O) {
      var K = H[0] - O[0] * C.k, F = H[1] - O[1] * C.k;
      return K === C.x && F === C.y ? C : new jn(C.k, K, F);
    }
    function A(C) {
      return [
        (+C[0][0] + +C[1][0]) / 2,
        (+C[0][1] + +C[1][1]) / 2
      ];
    }
    function G(C, H, O, K) {
      C.on("start.zoom", function() {
        D(this, arguments).event(K).start();
      }).on("interrupt.zoom end.zoom", function() {
        D(this, arguments).event(K).end();
      }).tween("zoom", function() {
        var F = this, R = arguments, B = D(F, R).event(K), N = r.apply(F, R), L = O == null ? A(N) : typeof O == "function" ? O.apply(F, R) : O, oe = Math.max(N[1][0] - N[0][0], N[1][1] - N[0][1]), ne = F.__zoom, le = typeof H == "function" ? H.apply(F, R) : H, ae = m(ne.invert(L).concat(oe / ne.k), le.invert(L).concat(oe / le.k));
        return function(he) {
          if (he === 1) he = le;
          else {
            var me = ae(he), ve = oe / me[2];
            he = new jn(ve, L[0] - me[0] * ve, L[1] - me[1] * ve);
          }
          B.zoom(null, he);
        };
      });
    }
    function D(C, H, O) {
      return !O && C.__zooming || new Q(C, H);
    }
    function Q(C, H) {
      this.that = C, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = r.apply(C, H), this.taps = 0;
    }
    Q.prototype = {
      event: function(C) {
        return C && (this.sourceEvent = C), this;
      },
      start: function() {
        return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
      },
      zoom: function(C, H) {
        return this.mouse && C !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
      },
      end: function() {
        return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
      },
      emit: function(C) {
        var H = Qt(this.that).datum();
        h.call(C, this.that, new kx(C, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: h
        }), H);
      }
    };
    function q(C, ...H) {
      if (!e.apply(this, arguments)) return;
      var O = D(this, H).event(C), K = this.__zoom, F = Math.max(u[0], Math.min(u[1], K.k * Math.pow(2, i.apply(this, arguments)))), R = dn(C);
      if (O.wheel) (O.mouse[0][0] !== R[0] || O.mouse[0][1] !== R[1]) && (O.mouse[1] = K.invert(O.mouse[0] = R)), clearTimeout(O.wheel);
      else {
        if (K.k === F) return;
        O.mouse = [
          R,
          K.invert(R)
        ], Cl(this), O.start();
      }
      ws(C), O.wheel = setTimeout(B, S), O.zoom("mouse", o(b($(K, F), O.mouse[0], O.mouse[1]), O.extent, c));
      function B() {
        O.wheel = null, O.end();
      }
    }
    function Y(C, ...H) {
      if (v || !e.apply(this, arguments)) return;
      var O = C.currentTarget, K = D(this, H, true).event(C), F = Qt(C.view).on("mousemove.zoom", L, true).on("mouseup.zoom", oe, true), R = dn(C, O), B = C.clientX, N = C.clientY;
      S0(C.view), Qu(C), K.mouse = [
        R,
        this.__zoom.invert(R)
      ], Cl(this), K.start();
      function L(ne) {
        if (ws(ne), !K.moved) {
          var le = ne.clientX - B, ae = ne.clientY - N;
          K.moved = le * le + ae * ae > k;
        }
        K.event(ne).zoom("mouse", o(b(K.that.__zoom, K.mouse[0] = dn(ne, O), K.mouse[1]), K.extent, c));
      }
      function oe(ne) {
        F.on("mousemove.zoom mouseup.zoom", null), k0(ne.view, K.moved), ws(ne), K.event(ne).end();
      }
    }
    function J(C, ...H) {
      if (e.apply(this, arguments)) {
        var O = this.__zoom, K = dn(C.changedTouches ? C.changedTouches[0] : C, this), F = O.invert(K), R = O.k * (C.shiftKey ? 0.5 : 2), B = o(b($(O, R), K, F), r.apply(this, H), c);
        ws(C), d > 0 ? Qt(this).transition().duration(d).call(G, B, K, C) : Qt(this).call(E.transform, B, K, C);
      }
    }
    function U(C, ...H) {
      if (e.apply(this, arguments)) {
        var O = C.touches, K = O.length, F = D(this, H, C.changedTouches.length === K).event(C), R, B, N, L;
        for (Qu(C), B = 0; B < K; ++B) N = O[B], L = dn(N, this), L = [
          L,
          this.__zoom.invert(L),
          N.identifier
        ], F.touch0 ? !F.touch1 && F.touch0[2] !== L[2] && (F.touch1 = L, F.taps = 0) : (F.touch0 = L, R = true, F.taps = 1 + !!p);
        p && (p = clearTimeout(p)), R && (F.taps < 2 && (y = L[0], p = setTimeout(function() {
          p = null;
        }, x)), Cl(this), F.start());
      }
    }
    function Z(C, ...H) {
      if (this.__zooming) {
        var O = D(this, H).event(C), K = C.changedTouches, F = K.length, R, B, N, L;
        for (ws(C), R = 0; R < F; ++R) B = K[R], N = dn(B, this), O.touch0 && O.touch0[2] === B.identifier ? O.touch0[0] = N : O.touch1 && O.touch1[2] === B.identifier && (O.touch1[0] = N);
        if (B = O.that.__zoom, O.touch1) {
          var oe = O.touch0[0], ne = O.touch0[1], le = O.touch1[0], ae = O.touch1[1], he = (he = le[0] - oe[0]) * he + (he = le[1] - oe[1]) * he, me = (me = ae[0] - ne[0]) * me + (me = ae[1] - ne[1]) * me;
          B = $(B, Math.sqrt(he / me)), N = [
            (oe[0] + le[0]) / 2,
            (oe[1] + le[1]) / 2
          ], L = [
            (ne[0] + ae[0]) / 2,
            (ne[1] + ae[1]) / 2
          ];
        } else if (O.touch0) N = O.touch0[0], L = O.touch0[1];
        else return;
        O.zoom("touch", o(b(B, N, L), O.extent, c));
      }
    }
    function ee(C, ...H) {
      if (this.__zooming) {
        var O = D(this, H).event(C), K = C.changedTouches, F = K.length, R, B;
        for (Qu(C), v && clearTimeout(v), v = setTimeout(function() {
          v = null;
        }, x), R = 0; R < F; ++R) B = K[R], O.touch0 && O.touch0[2] === B.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === B.identifier && delete O.touch1;
        if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
        else if (O.end(), O.taps === 2 && (B = dn(B, this), Math.hypot(y[0] - B[0], y[1] - B[1]) < _)) {
          var N = Qt(this).on("dblclick.zoom");
          N && N.apply(this, arguments);
        }
      }
    }
    return E.wheelDelta = function(C) {
      return arguments.length ? (i = typeof C == "function" ? C : hl(+C), E) : i;
    }, E.filter = function(C) {
      return arguments.length ? (e = typeof C == "function" ? C : hl(!!C), E) : e;
    }, E.touchable = function(C) {
      return arguments.length ? (l = typeof C == "function" ? C : hl(!!C), E) : l;
    }, E.extent = function(C) {
      return arguments.length ? (r = typeof C == "function" ? C : hl([
        [
          +C[0][0],
          +C[0][1]
        ],
        [
          +C[1][0],
          +C[1][1]
        ]
      ]), E) : r;
    }, E.scaleExtent = function(C) {
      return arguments.length ? (u[0] = +C[0], u[1] = +C[1], E) : [
        u[0],
        u[1]
      ];
    }, E.translateExtent = function(C) {
      return arguments.length ? (c[0][0] = +C[0][0], c[1][0] = +C[1][0], c[0][1] = +C[0][1], c[1][1] = +C[1][1], E) : [
        [
          c[0][0],
          c[0][1]
        ],
        [
          c[1][0],
          c[1][1]
        ]
      ];
    }, E.constrain = function(C) {
      return arguments.length ? (o = C, E) : o;
    }, E.duration = function(C) {
      return arguments.length ? (d = +C, E) : d;
    }, E.interpolate = function(C) {
      return arguments.length ? (m = C, E) : m;
    }, E.on = function() {
      var C = h.on.apply(h, arguments);
      return C === h ? E : C;
    }, E.clickDistance = function(C) {
      return arguments.length ? (k = (C = +C) * C, E) : Math.sqrt(k);
    }, E.tapDistance = function(C) {
      return arguments.length ? (_ = +C, E) : _;
    }, E;
  }
  var Ix = l0();
  const Gl = z.createContext(null), bx = Gl.Provider, Un = {
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
  }, z0 = Un.error001();
  function Re(e, r) {
    const o = z.useContext(Gl);
    if (o === null) throw new Error(z0);
    return a0(o, e, r);
  }
  const rt = () => {
    const e = z.useContext(Gl);
    if (e === null) throw new Error(z0);
    return z.useMemo(() => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
      destroy: e.destroy
    }), [
      e
    ]);
  }, Tx = (e) => e.userSelectionActive ? "none" : "all";
  function Bc({ position: e, children: r, className: o, style: i, ...l }) {
    const u = Re(Tx), c = `${e}`.split("-");
    return X.createElement("div", {
      className: ct([
        "react-flow__panel",
        o,
        ...c
      ]),
      style: {
        ...i,
        pointerEvents: u
      },
      ...l
    }, r);
  }
  function Ax({ proOptions: e, position: r = "bottom-right" }) {
    return (e == null ? void 0 : e.hideAttribution) ? null : X.createElement(Bc, {
      position: r,
      className: "react-flow__attribution",
      "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"
    }, X.createElement("a", {
      href: "https://reactflow.dev",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "React Flow attribution"
    }, "React Flow"));
  }
  const $x = ({ x: e, y: r, label: o, labelStyle: i = {}, labelShowBg: l = true, labelBgStyle: u = {}, labelBgPadding: c = [
    2,
    4
  ], labelBgBorderRadius: d = 2, children: m, className: h, ...p }) => {
    const y = z.useRef(null), [v, x] = z.useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }), S = ct([
      "react-flow__edge-textwrapper",
      h
    ]);
    return z.useEffect(() => {
      if (y.current) {
        const k = y.current.getBBox();
        x({
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        });
      }
    }, [
      o
    ]), typeof o > "u" || !o ? null : X.createElement("g", {
      transform: `translate(${e - v.width / 2} ${r - v.height / 2})`,
      className: S,
      visibility: v.width ? "visible" : "hidden",
      ...p
    }, l && X.createElement("rect", {
      width: v.width + 2 * c[0],
      x: -c[0],
      y: -c[1],
      height: v.height + 2 * c[1],
      className: "react-flow__edge-textbg",
      style: u,
      rx: d,
      ry: d
    }), X.createElement("text", {
      className: "react-flow__edge-text",
      y: v.height / 2,
      dy: "0.3em",
      ref: y,
      style: i
    }, o), m);
  };
  var Rx = z.memo($x);
  const jc = (e) => ({
    width: e.offsetWidth,
    height: e.offsetHeight
  }), bo = (e, r = 0, o = 1) => Math.min(Math.max(e, r), o), Hc = (e = {
    x: 0,
    y: 0
  }, r) => ({
    x: bo(e.x, r[0][0], r[1][0]),
    y: bo(e.y, r[0][1], r[1][1])
  }), ap = (e, r, o) => e < r ? bo(Math.abs(e - r), 1, 50) / 50 : e > o ? -bo(Math.abs(e - o), 1, 50) / 50 : 0, O0 = (e, r) => {
    const o = ap(e.x, 35, r.width - 35) * 20, i = ap(e.y, 35, r.height - 35) * 20;
    return [
      o,
      i
    ];
  }, F0 = (e) => {
    var _a;
    return ((_a = e.getRootNode) == null ? void 0 : _a.call(e)) || (window == null ? void 0 : window.document);
  }, B0 = (e, r) => ({
    x: Math.min(e.x, r.x),
    y: Math.min(e.y, r.y),
    x2: Math.max(e.x2, r.x2),
    y2: Math.max(e.y2, r.y2)
  }), $s = ({ x: e, y: r, width: o, height: i }) => ({
    x: e,
    y: r,
    x2: e + o,
    y2: r + i
  }), j0 = ({ x: e, y: r, x2: o, y2: i }) => ({
    x: e,
    y: r,
    width: o - e,
    height: i - r
  }), up = (e) => ({
    ...e.positionAbsolute || {
      x: 0,
      y: 0
    },
    width: e.width || 0,
    height: e.height || 0
  }), Px = (e, r) => j0(B0($s(e), $s(r))), gc = (e, r) => {
    const o = Math.max(0, Math.min(e.x + e.width, r.x + r.width) - Math.max(e.x, r.x)), i = Math.max(0, Math.min(e.y + e.height, r.y + r.height) - Math.max(e.y, r.y));
    return Math.ceil(o * i);
  }, Lx = (e) => Zt(e.width) && Zt(e.height) && Zt(e.x) && Zt(e.y), Zt = (e) => !isNaN(e) && isFinite(e), Ge = Symbol.for("internals"), H0 = [
    "Enter",
    " ",
    "Escape"
  ], Dx = (e, r) => {
  }, zx = (e) => "nativeEvent" in e;
  function yc(e) {
    var _a, _b, _c2;
    const o = ((_c2 = (_b = (_a = zx(e) ? e.nativeEvent : e).composedPath) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c2[0]) || e.target;
    return [
      "INPUT",
      "SELECT",
      "TEXTAREA"
    ].includes(o == null ? void 0 : o.nodeName) || (o == null ? void 0 : o.hasAttribute("contenteditable")) || !!(o == null ? void 0 : o.closest(".nokey"));
  }
  const V0 = (e) => "clientX" in e, mr = (e, r) => {
    var _a, _b;
    const o = V0(e), i = o ? e.clientX : (_a = e.touches) == null ? void 0 : _a[0].clientX, l = o ? e.clientY : (_b = e.touches) == null ? void 0 : _b[0].clientY;
    return {
      x: i - ((r == null ? void 0 : r.left) ?? 0),
      y: l - ((r == null ? void 0 : r.top) ?? 0)
    };
  }, Dl = () => {
    var _a;
    return typeof navigator < "u" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
  }, $o = ({ id: e, path: r, labelX: o, labelY: i, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: d, labelBgPadding: m, labelBgBorderRadius: h, style: p, markerEnd: y, markerStart: v, interactionWidth: x = 20 }) => X.createElement(X.Fragment, null, X.createElement("path", {
    id: e,
    style: p,
    d: r,
    fill: "none",
    className: "react-flow__edge-path",
    markerEnd: y,
    markerStart: v
  }), x && X.createElement("path", {
    d: r,
    fill: "none",
    strokeOpacity: 0,
    strokeWidth: x,
    className: "react-flow__edge-interaction"
  }), l && Zt(o) && Zt(i) ? X.createElement(Rx, {
    x: o,
    y: i,
    label: l,
    labelStyle: u,
    labelShowBg: c,
    labelBgStyle: d,
    labelBgPadding: m,
    labelBgBorderRadius: h
  }) : null);
  $o.displayName = "BaseEdge";
  function xs(e, r, o) {
    return o === void 0 ? o : (i) => {
      const l = r().edges.find((u) => u.id === e);
      l && o(i, {
        ...l
      });
    };
  }
  function U0({ sourceX: e, sourceY: r, targetX: o, targetY: i }) {
    const l = Math.abs(o - e) / 2, u = o < e ? o + l : o - l, c = Math.abs(i - r) / 2, d = i < r ? i + c : i - c;
    return [
      u,
      d,
      l,
      c
    ];
  }
  function W0({ sourceX: e, sourceY: r, targetX: o, targetY: i, sourceControlX: l, sourceControlY: u, targetControlX: c, targetControlY: d }) {
    const m = e * 0.125 + l * 0.375 + c * 0.375 + o * 0.125, h = r * 0.125 + u * 0.375 + d * 0.375 + i * 0.125, p = Math.abs(m - e), y = Math.abs(h - r);
    return [
      m,
      h,
      p,
      y
    ];
  }
  var Ur;
  (function(e) {
    e.Strict = "strict", e.Loose = "loose";
  })(Ur || (Ur = {}));
  var Or;
  (function(e) {
    e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
  })(Or || (Or = {}));
  var Rs;
  (function(e) {
    e.Partial = "partial", e.Full = "full";
  })(Rs || (Rs = {}));
  var pr;
  (function(e) {
    e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
  })(pr || (pr = {}));
  var To;
  (function(e) {
    e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
  })(To || (To = {}));
  var ge;
  (function(e) {
    e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
  })(ge || (ge = {}));
  function cp({ pos: e, x1: r, y1: o, x2: i, y2: l }) {
    return e === ge.Left || e === ge.Right ? [
      0.5 * (r + i),
      o
    ] : [
      r,
      0.5 * (o + l)
    ];
  }
  function Y0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: i, targetY: l, targetPosition: u = ge.Top }) {
    const [c, d] = cp({
      pos: o,
      x1: e,
      y1: r,
      x2: i,
      y2: l
    }), [m, h] = cp({
      pos: u,
      x1: i,
      y1: l,
      x2: e,
      y2: r
    }), [p, y, v, x] = W0({
      sourceX: e,
      sourceY: r,
      targetX: i,
      targetY: l,
      sourceControlX: c,
      sourceControlY: d,
      targetControlX: m,
      targetControlY: h
    });
    return [
      `M${e},${r} C${c},${d} ${m},${h} ${i},${l}`,
      p,
      y,
      v,
      x
    ];
  }
  const Vc = z.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: d, labelShowBg: m, labelBgStyle: h, labelBgPadding: p, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: S, interactionWidth: k }) => {
    const [_, E, $] = Y0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: i,
      targetPosition: u
    });
    return X.createElement($o, {
      path: _,
      labelX: E,
      labelY: $,
      label: c,
      labelStyle: d,
      labelShowBg: m,
      labelBgStyle: h,
      labelBgPadding: p,
      labelBgBorderRadius: y,
      style: v,
      markerEnd: x,
      markerStart: S,
      interactionWidth: k
    });
  });
  Vc.displayName = "SimpleBezierEdge";
  const dp = {
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
  }, Ox = ({ source: e, sourcePosition: r = ge.Bottom, target: o }) => r === ge.Left || r === ge.Right ? e.x < o.x ? {
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
  }, fp = (e, r) => Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
  function Fx({ source: e, sourcePosition: r = ge.Bottom, target: o, targetPosition: i = ge.Top, center: l, offset: u }) {
    const c = dp[r], d = dp[i], m = {
      x: e.x + c.x * u,
      y: e.y + c.y * u
    }, h = {
      x: o.x + d.x * u,
      y: o.y + d.y * u
    }, p = Ox({
      source: m,
      sourcePosition: r,
      target: h
    }), y = p.x !== 0 ? "x" : "y", v = p[y];
    let x = [], S, k;
    const _ = {
      x: 0,
      y: 0
    }, E = {
      x: 0,
      y: 0
    }, [$, b, A, G] = U0({
      sourceX: e.x,
      sourceY: e.y,
      targetX: o.x,
      targetY: o.y
    });
    if (c[y] * d[y] === -1) {
      S = l.x ?? $, k = l.y ?? b;
      const Q = [
        {
          x: S,
          y: m.y
        },
        {
          x: S,
          y: h.y
        }
      ], q = [
        {
          x: m.x,
          y: k
        },
        {
          x: h.x,
          y: k
        }
      ];
      c[y] === v ? x = y === "x" ? Q : q : x = y === "x" ? q : Q;
    } else {
      const Q = [
        {
          x: m.x,
          y: h.y
        }
      ], q = [
        {
          x: h.x,
          y: m.y
        }
      ];
      if (y === "x" ? x = c.x === v ? q : Q : x = c.y === v ? Q : q, r === i) {
        const ee = Math.abs(e[y] - o[y]);
        if (ee <= u) {
          const C = Math.min(u - 1, u - ee);
          c[y] === v ? _[y] = (m[y] > e[y] ? -1 : 1) * C : E[y] = (h[y] > o[y] ? -1 : 1) * C;
        }
      }
      if (r !== i) {
        const ee = y === "x" ? "y" : "x", C = c[y] === d[ee], H = m[ee] > h[ee], O = m[ee] < h[ee];
        (c[y] === 1 && (!C && H || C && O) || c[y] !== 1 && (!C && O || C && H)) && (x = y === "x" ? Q : q);
      }
      const Y = {
        x: m.x + _.x,
        y: m.y + _.y
      }, J = {
        x: h.x + E.x,
        y: h.y + E.y
      }, U = Math.max(Math.abs(Y.x - x[0].x), Math.abs(J.x - x[0].x)), Z = Math.max(Math.abs(Y.y - x[0].y), Math.abs(J.y - x[0].y));
      U >= Z ? (S = (Y.x + J.x) / 2, k = x[0].y) : (S = x[0].x, k = (Y.y + J.y) / 2);
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
          x: h.x + E.x,
          y: h.y + E.y
        },
        o
      ],
      S,
      k,
      A,
      G
    ];
  }
  function Bx(e, r, o, i) {
    const l = Math.min(fp(e, r) / 2, fp(r, o) / 2, i), { x: u, y: c } = r;
    if (e.x === u && u === o.x || e.y === c && c === o.y) return `L${u} ${c}`;
    if (e.y === c) {
      const h = e.x < o.x ? -1 : 1, p = e.y < o.y ? 1 : -1;
      return `L ${u + l * h},${c}Q ${u},${c} ${u},${c + l * p}`;
    }
    const d = e.x < o.x ? 1 : -1, m = e.y < o.y ? -1 : 1;
    return `L ${u},${c + l * m}Q ${u},${c} ${u + l * d},${c}`;
  }
  function zl({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: i, targetY: l, targetPosition: u = ge.Top, borderRadius: c = 5, centerX: d, centerY: m, offset: h = 20 }) {
    const [p, y, v, x, S] = Fx({
      source: {
        x: e,
        y: r
      },
      sourcePosition: o,
      target: {
        x: i,
        y: l
      },
      targetPosition: u,
      center: {
        x: d,
        y: m
      },
      offset: h
    });
    return [
      p.reduce((_, E, $) => {
        let b = "";
        return $ > 0 && $ < p.length - 1 ? b = Bx(p[$ - 1], E, p[$ + 1], c) : b = `${$ === 0 ? "M" : "L"}${E.x} ${E.y}`, _ += b, _;
      }, ""),
      y,
      v,
      x,
      S
    ];
  }
  const Xl = z.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: d, labelBgPadding: m, labelBgBorderRadius: h, style: p, sourcePosition: y = ge.Bottom, targetPosition: v = ge.Top, markerEnd: x, markerStart: S, pathOptions: k, interactionWidth: _ }) => {
    const [E, $, b] = zl({
      sourceX: e,
      sourceY: r,
      sourcePosition: y,
      targetX: o,
      targetY: i,
      targetPosition: v,
      borderRadius: k == null ? void 0 : k.borderRadius,
      offset: k == null ? void 0 : k.offset
    });
    return X.createElement($o, {
      path: E,
      labelX: $,
      labelY: b,
      label: l,
      labelStyle: u,
      labelShowBg: c,
      labelBgStyle: d,
      labelBgPadding: m,
      labelBgBorderRadius: h,
      style: p,
      markerEnd: x,
      markerStart: S,
      interactionWidth: _
    });
  });
  Xl.displayName = "SmoothStepEdge";
  const Uc = z.memo((e) => {
    var _a;
    return X.createElement(Xl, {
      ...e,
      pathOptions: z.useMemo(() => {
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
  Uc.displayName = "StepEdge";
  function jx({ sourceX: e, sourceY: r, targetX: o, targetY: i }) {
    const [l, u, c, d] = U0({
      sourceX: e,
      sourceY: r,
      targetX: o,
      targetY: i
    });
    return [
      `M ${e},${r}L ${o},${i}`,
      l,
      u,
      c,
      d
    ];
  }
  const Wc = z.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: d, labelBgPadding: m, labelBgBorderRadius: h, style: p, markerEnd: y, markerStart: v, interactionWidth: x }) => {
    const [S, k, _] = jx({
      sourceX: e,
      sourceY: r,
      targetX: o,
      targetY: i
    });
    return X.createElement($o, {
      path: S,
      labelX: k,
      labelY: _,
      label: l,
      labelStyle: u,
      labelShowBg: c,
      labelBgStyle: d,
      labelBgPadding: m,
      labelBgBorderRadius: h,
      style: p,
      markerEnd: y,
      markerStart: v,
      interactionWidth: x
    });
  });
  Wc.displayName = "StraightEdge";
  function pl(e, r) {
    return e >= 0 ? 0.5 * e : r * 25 * Math.sqrt(-e);
  }
  function hp({ pos: e, x1: r, y1: o, x2: i, y2: l, c: u }) {
    switch (e) {
      case ge.Left:
        return [
          r - pl(r - i, u),
          o
        ];
      case ge.Right:
        return [
          r + pl(i - r, u),
          o
        ];
      case ge.Top:
        return [
          r,
          o - pl(o - l, u)
        ];
      case ge.Bottom:
        return [
          r,
          o + pl(l - o, u)
        ];
    }
  }
  function G0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: i, targetY: l, targetPosition: u = ge.Top, curvature: c = 0.25 }) {
    const [d, m] = hp({
      pos: o,
      x1: e,
      y1: r,
      x2: i,
      y2: l,
      c
    }), [h, p] = hp({
      pos: u,
      x1: i,
      y1: l,
      x2: e,
      y2: r,
      c
    }), [y, v, x, S] = W0({
      sourceX: e,
      sourceY: r,
      targetX: i,
      targetY: l,
      sourceControlX: d,
      sourceControlY: m,
      targetControlX: h,
      targetControlY: p
    });
    return [
      `M${e},${r} C${d},${m} ${h},${p} ${i},${l}`,
      y,
      v,
      x,
      S
    ];
  }
  const Ol = z.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: d, labelShowBg: m, labelBgStyle: h, labelBgPadding: p, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: S, pathOptions: k, interactionWidth: _ }) => {
    const [E, $, b] = G0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: i,
      targetPosition: u,
      curvature: k == null ? void 0 : k.curvature
    });
    return X.createElement($o, {
      path: E,
      labelX: $,
      labelY: b,
      label: c,
      labelStyle: d,
      labelShowBg: m,
      labelBgStyle: h,
      labelBgPadding: p,
      labelBgBorderRadius: y,
      style: v,
      markerEnd: x,
      markerStart: S,
      interactionWidth: _
    });
  });
  Ol.displayName = "BezierEdge";
  const Yc = z.createContext(null), Hx = Yc.Provider;
  Yc.Consumer;
  const Vx = () => z.useContext(Yc), Ux = (e) => "id" in e && "source" in e && "target" in e, Wx = ({ source: e, sourceHandle: r, target: o, targetHandle: i }) => `reactflow__edge-${e}${r || ""}-${o}${i || ""}`, vc = (e, r) => typeof e > "u" ? "" : typeof e == "string" ? e : `${r ? `${r}__` : ""}${Object.keys(e).sort().map((i) => `${i}=${e[i]}`).join("&")}`, Yx = (e, r) => r.some((o) => o.source === e.source && o.target === e.target && (o.sourceHandle === e.sourceHandle || !o.sourceHandle && !e.sourceHandle) && (o.targetHandle === e.targetHandle || !o.targetHandle && !e.targetHandle)), Gx = (e, r) => {
    if (!e.source || !e.target) return r;
    let o;
    return Ux(e) ? o = {
      ...e
    } : o = {
      ...e,
      id: Wx(e)
    }, Yx(o, r) ? r : r.concat(o);
  }, wc = ({ x: e, y: r }, [o, i, l], u, [c, d]) => {
    const m = {
      x: (e - o) / l,
      y: (r - i) / l
    };
    return u ? {
      x: c * Math.round(m.x / c),
      y: d * Math.round(m.y / d)
    } : m;
  }, X0 = ({ x: e, y: r }, [o, i, l]) => ({
    x: e * l + o,
    y: r * l + i
  }), Br = (e, r = [
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
    const o = (e.width ?? 0) * r[0], i = (e.height ?? 0) * r[1], l = {
      x: e.position.x - o,
      y: e.position.y - i
    };
    return {
      ...l,
      positionAbsolute: e.positionAbsolute ? {
        x: e.positionAbsolute.x - o,
        y: e.positionAbsolute.y - i
      } : l
    };
  }, Kl = (e, r = [
    0,
    0
  ]) => {
    if (e.length === 0) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    const o = e.reduce((i, l) => {
      const { x: u, y: c } = Br(l, r).positionAbsolute;
      return B0(i, $s({
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
    return j0(o);
  }, K0 = (e, r, [o, i, l] = [
    0,
    0,
    1
  ], u = false, c = false, d = [
    0,
    0
  ]) => {
    const m = {
      x: (r.x - o) / l,
      y: (r.y - i) / l,
      width: r.width / l,
      height: r.height / l
    }, h = [];
    return e.forEach((p) => {
      const { width: y, height: v, selectable: x = true, hidden: S = false } = p;
      if (c && !x || S) return false;
      const { positionAbsolute: k } = Br(p, d), _ = {
        x: k.x,
        y: k.y,
        width: y || 0,
        height: v || 0
      }, E = gc(m, _), $ = typeof y > "u" || typeof v > "u" || y === null || v === null, b = u && E > 0, A = (y || 0) * (v || 0);
      ($ || b || E >= A || p.dragging) && h.push(p);
    }), h;
  }, Q0 = (e, r) => {
    const o = e.map((i) => i.id);
    return r.filter((i) => o.includes(i.source) || o.includes(i.target));
  }, Z0 = (e, r, o, i, l, u = 0.1) => {
    const c = r / (e.width * (1 + u)), d = o / (e.height * (1 + u)), m = Math.min(c, d), h = bo(m, i, l), p = e.x + e.width / 2, y = e.y + e.height / 2, v = r / 2 - p * h, x = o / 2 - y * h;
    return {
      x: v,
      y: x,
      zoom: h
    };
  }, Dr = (e, r = 0) => e.transition().duration(r);
  function pp(e, r, o, i) {
    return (r[o] || []).reduce((l, u) => {
      var _a, _b;
      return `${e.id}-${u.id}-${o}` !== i && l.push({
        id: u.id || null,
        type: o,
        nodeId: e.id,
        x: (((_a = e.positionAbsolute) == null ? void 0 : _a.x) ?? 0) + u.x + u.width / 2,
        y: (((_b = e.positionAbsolute) == null ? void 0 : _b.y) ?? 0) + u.y + u.height / 2
      }), l;
    }, []);
  }
  function Xx(e, r, o, i, l, u) {
    const { x: c, y: d } = mr(e), h = r.elementsFromPoint(c, d).find((S) => S.classList.contains("react-flow__handle"));
    if (h) {
      const S = h.getAttribute("data-nodeid");
      if (S) {
        const k = Gc(void 0, h), _ = h.getAttribute("data-handleid"), E = u({
          nodeId: S,
          id: _,
          type: k
        });
        if (E) {
          const $ = l.find((b) => b.nodeId === S && b.type === k && b.id === _);
          return {
            handle: {
              id: _,
              type: k,
              nodeId: S,
              x: ($ == null ? void 0 : $.x) || o.x,
              y: ($ == null ? void 0 : $.y) || o.y
            },
            validHandleResult: E
          };
        }
      }
    }
    let p = [], y = 1 / 0;
    if (l.forEach((S) => {
      const k = Math.sqrt((S.x - o.x) ** 2 + (S.y - o.y) ** 2);
      if (k <= i) {
        const _ = u(S);
        k <= y && (k < y ? p = [
          {
            handle: S,
            validHandleResult: _
          }
        ] : k === y && p.push({
          handle: S,
          validHandleResult: _
        }), y = k);
      }
    }), !p.length) return {
      handle: null,
      validHandleResult: q0()
    };
    if (p.length === 1) return p[0];
    const v = p.some(({ validHandleResult: S }) => S.isValid), x = p.some(({ handle: S }) => S.type === "target");
    return p.find(({ handle: S, validHandleResult: k }) => x ? S.type === "target" : v ? k.isValid : true) || p[0];
  }
  const Kx = {
    source: null,
    target: null,
    sourceHandle: null,
    targetHandle: null
  }, q0 = () => ({
    handleDomNode: null,
    isValid: false,
    connection: Kx,
    endHandle: null
  });
  function J0(e, r, o, i, l, u, c) {
    const d = l === "target", m = c.querySelector(`.react-flow__handle[data-id="${e == null ? void 0 : e.nodeId}-${e == null ? void 0 : e.id}-${e == null ? void 0 : e.type}"]`), h = {
      ...q0(),
      handleDomNode: m
    };
    if (m) {
      const p = Gc(void 0, m), y = m.getAttribute("data-nodeid"), v = m.getAttribute("data-handleid"), x = m.classList.contains("connectable"), S = m.classList.contains("connectableend"), k = {
        source: d ? y : o,
        sourceHandle: d ? v : i,
        target: d ? o : y,
        targetHandle: d ? i : v
      };
      h.connection = k, x && S && (r === Ur.Strict ? d && p === "source" || !d && p === "target" : y !== o || v !== i) && (h.endHandle = {
        nodeId: y,
        handleId: v,
        type: p
      }, h.isValid = u(k));
    }
    return h;
  }
  function Qx({ nodes: e, nodeId: r, handleId: o, handleType: i }) {
    return e.reduce((l, u) => {
      if (u[Ge]) {
        const { handleBounds: c } = u[Ge];
        let d = [], m = [];
        c && (d = pp(u, c, "source", `${r}-${o}-${i}`), m = pp(u, c, "target", `${r}-${o}-${i}`)), l.push(...d, ...m);
      }
      return l;
    }, []);
  }
  function Gc(e, r) {
    return e || ((r == null ? void 0 : r.classList.contains("target")) ? "target" : (r == null ? void 0 : r.classList.contains("source")) ? "source" : null);
  }
  function Zu(e) {
    e == null ? void 0 : e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
  }
  function Zx(e, r) {
    let o = null;
    return r ? o = "valid" : e && !r && (o = "invalid"), o;
  }
  function em({ event: e, handleId: r, nodeId: o, onConnect: i, isTarget: l, getState: u, setState: c, isValidConnection: d, edgeUpdaterType: m, onReconnectEnd: h }) {
    const p = F0(e.target), { connectionMode: y, domNode: v, autoPanOnConnect: x, connectionRadius: S, onConnectStart: k, panBy: _, getNodes: E, cancelConnection: $ } = u();
    let b = 0, A;
    const { x: G, y: D } = mr(e), Q = p == null ? void 0 : p.elementFromPoint(G, D), q = Gc(m, Q), Y = v == null ? void 0 : v.getBoundingClientRect();
    if (!Y || !q) return;
    let J, U = mr(e, Y), Z = false, ee = null, C = false, H = null;
    const O = Qx({
      nodes: E(),
      nodeId: o,
      handleId: r,
      handleType: q
    }), K = () => {
      if (!x) return;
      const [B, N] = O0(U, Y);
      _({
        x: B,
        y: N
      }), b = requestAnimationFrame(K);
    };
    c({
      connectionPosition: U,
      connectionStatus: null,
      connectionNodeId: o,
      connectionHandleId: r,
      connectionHandleType: q,
      connectionStartHandle: {
        nodeId: o,
        handleId: r,
        type: q
      },
      connectionEndHandle: null
    }), k == null ? void 0 : k(e, {
      nodeId: o,
      handleId: r,
      handleType: q
    });
    function F(B) {
      const { transform: N } = u();
      U = mr(B, Y);
      const { handle: L, validHandleResult: oe } = Xx(B, p, wc(U, N, false, [
        1,
        1
      ]), S, O, (ne) => J0(ne, y, o, r, l ? "target" : "source", d, p));
      if (A = L, Z || (K(), Z = true), H = oe.handleDomNode, ee = oe.connection, C = oe.isValid, c({
        connectionPosition: A && C ? X0({
          x: A.x,
          y: A.y
        }, N) : U,
        connectionStatus: Zx(!!A, C),
        connectionEndHandle: oe.endHandle
      }), !A && !C && !H) return Zu(J);
      ee.source !== ee.target && H && (Zu(J), J = H, H.classList.add("connecting", "react-flow__handle-connecting"), H.classList.toggle("valid", C), H.classList.toggle("react-flow__handle-valid", C));
    }
    function R(B) {
      var _a, _b;
      (A || H) && ee && C && (i == null ? void 0 : i(ee)), (_b = (_a = u()).onConnectEnd) == null ? void 0 : _b.call(_a, B), m && (h == null ? void 0 : h(B)), Zu(J), $(), cancelAnimationFrame(b), Z = false, C = false, ee = null, H = null, p.removeEventListener("mousemove", F), p.removeEventListener("mouseup", R), p.removeEventListener("touchmove", F), p.removeEventListener("touchend", R);
    }
    p.addEventListener("mousemove", F), p.addEventListener("mouseup", R), p.addEventListener("touchmove", F), p.addEventListener("touchend", R);
  }
  const mp = () => true, qx = (e) => ({
    connectionStartHandle: e.connectionStartHandle,
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName
  }), Jx = (e, r, o) => (i) => {
    const { connectionStartHandle: l, connectionEndHandle: u, connectionClickStartHandle: c } = i;
    return {
      connecting: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.handleId) === r && (l == null ? void 0 : l.type) === o || (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.handleId) === r && (u == null ? void 0 : u.type) === o,
      clickConnecting: (c == null ? void 0 : c.nodeId) === e && (c == null ? void 0 : c.handleId) === r && (c == null ? void 0 : c.type) === o
    };
  }, tm = z.forwardRef(({ type: e = "source", position: r = ge.Top, isValidConnection: o, isConnectable: i = true, isConnectableStart: l = true, isConnectableEnd: u = true, id: c, onConnect: d, children: m, className: h, onMouseDown: p, onTouchStart: y, ...v }, x) => {
    var _a, _b;
    const S = c || null, k = e === "target", _ = rt(), E = Vx(), { connectOnClick: $, noPanClassName: b } = Re(qx, bt), { connecting: A, clickConnecting: G } = Re(Jx(E, S, e), bt);
    E || ((_b = (_a = _.getState()).onError) == null ? void 0 : _b.call(_a, "010", Un.error010()));
    const D = (Y) => {
      const { defaultEdgeOptions: J, onConnect: U, hasDefaultEdges: Z } = _.getState(), ee = {
        ...J,
        ...Y
      };
      if (Z) {
        const { edges: C, setEdges: H } = _.getState();
        H(Gx(ee, C));
      }
      U == null ? void 0 : U(ee), d == null ? void 0 : d(ee);
    }, Q = (Y) => {
      if (!E) return;
      const J = V0(Y);
      l && (J && Y.button === 0 || !J) && em({
        event: Y,
        handleId: S,
        nodeId: E,
        onConnect: D,
        isTarget: k,
        getState: _.getState,
        setState: _.setState,
        isValidConnection: o || _.getState().isValidConnection || mp
      }), J ? p == null ? void 0 : p(Y) : y == null ? void 0 : y(Y);
    }, q = (Y) => {
      const { onClickConnectStart: J, onClickConnectEnd: U, connectionClickStartHandle: Z, connectionMode: ee, isValidConnection: C } = _.getState();
      if (!E || !Z && !l) return;
      if (!Z) {
        J == null ? void 0 : J(Y, {
          nodeId: E,
          handleId: S,
          handleType: e
        }), _.setState({
          connectionClickStartHandle: {
            nodeId: E,
            type: e,
            handleId: S
          }
        });
        return;
      }
      const H = F0(Y.target), O = o || C || mp, { connection: K, isValid: F } = J0({
        nodeId: E,
        id: S,
        type: e
      }, ee, Z.nodeId, Z.handleId || null, Z.type, O, H);
      F && D(K), U == null ? void 0 : U(Y), _.setState({
        connectionClickStartHandle: null
      });
    };
    return X.createElement("div", {
      "data-handleid": S,
      "data-nodeid": E,
      "data-handlepos": r,
      "data-id": `${E}-${S}-${e}`,
      className: ct([
        "react-flow__handle",
        `react-flow__handle-${r}`,
        "nodrag",
        b,
        h,
        {
          source: !k,
          target: k,
          connectable: i,
          connectablestart: l,
          connectableend: u,
          connecting: G,
          connectionindicator: i && (l && !A || u && A)
        }
      ]),
      onMouseDown: Q,
      onTouchStart: Q,
      onClick: $ ? q : void 0,
      ref: x,
      ...v
    }, m);
  });
  tm.displayName = "Handle";
  var gr = z.memo(tm);
  const nm = ({ data: e, isConnectable: r, targetPosition: o = ge.Top, sourcePosition: i = ge.Bottom }) => X.createElement(X.Fragment, null, X.createElement(gr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label, X.createElement(gr, {
    type: "source",
    position: i,
    isConnectable: r
  }));
  nm.displayName = "DefaultNode";
  var xc = z.memo(nm);
  const rm = ({ data: e, isConnectable: r, sourcePosition: o = ge.Bottom }) => X.createElement(X.Fragment, null, e == null ? void 0 : e.label, X.createElement(gr, {
    type: "source",
    position: o,
    isConnectable: r
  }));
  rm.displayName = "InputNode";
  var om = z.memo(rm);
  const sm = ({ data: e, isConnectable: r, targetPosition: o = ge.Top }) => X.createElement(X.Fragment, null, X.createElement(gr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label);
  sm.displayName = "OutputNode";
  var im = z.memo(sm);
  const Xc = () => null;
  Xc.displayName = "GroupNode";
  const eS = (e) => ({
    selectedNodes: e.getNodes().filter((r) => r.selected),
    selectedEdges: e.edges.filter((r) => r.selected).map((r) => ({
      ...r
    }))
  }), ml = (e) => e.id;
  function tS(e, r) {
    return bt(e.selectedNodes.map(ml), r.selectedNodes.map(ml)) && bt(e.selectedEdges.map(ml), r.selectedEdges.map(ml));
  }
  const lm = z.memo(({ onSelectionChange: e }) => {
    const r = rt(), { selectedNodes: o, selectedEdges: i } = Re(eS, tS);
    return z.useEffect(() => {
      const l = {
        nodes: o,
        edges: i
      };
      e == null ? void 0 : e(l), r.getState().onSelectionChange.forEach((u) => u(l));
    }, [
      o,
      i,
      e
    ]), null;
  });
  lm.displayName = "SelectionListener";
  const nS = (e) => !!e.onSelectionChange;
  function rS({ onSelectionChange: e }) {
    const r = Re(nS);
    return e || r ? X.createElement(lm, {
      onSelectionChange: e
    }) : null;
  }
  const oS = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset
  });
  function wo(e, r) {
    z.useEffect(() => {
      typeof e < "u" && r(e);
    }, [
      e
    ]);
  }
  function _e(e, r, o) {
    z.useEffect(() => {
      typeof r < "u" && o({
        [e]: r
      });
    }, [
      r
    ]);
  }
  const sS = ({ nodes: e, edges: r, defaultNodes: o, defaultEdges: i, onConnect: l, onConnectStart: u, onConnectEnd: c, onClickConnectStart: d, onClickConnectEnd: m, nodesDraggable: h, nodesConnectable: p, nodesFocusable: y, edgesFocusable: v, edgesUpdatable: x, elevateNodesOnSelect: S, minZoom: k, maxZoom: _, nodeExtent: E, onNodesChange: $, onEdgesChange: b, elementsSelectable: A, connectionMode: G, snapGrid: D, snapToGrid: Q, translateExtent: q, connectOnClick: Y, defaultEdgeOptions: J, fitView: U, fitViewOptions: Z, onNodesDelete: ee, onEdgesDelete: C, onNodeDrag: H, onNodeDragStart: O, onNodeDragStop: K, onSelectionDrag: F, onSelectionDragStart: R, onSelectionDragStop: B, noPanClassName: N, nodeOrigin: L, rfId: oe, autoPanOnConnect: ne, autoPanOnNodeDrag: le, onError: ae, connectionRadius: he, isValidConnection: me, nodeDragThreshold: ve }) => {
    const { setNodes: Ee, setEdges: Ve, setDefaultNodesAndEdges: Ue, setMinZoom: Ke, setMaxZoom: Qe, setTranslateExtent: Oe, setNodeExtent: dt, reset: Me } = Re(oS, bt), ye = rt();
    return z.useEffect(() => {
      const qe = i == null ? void 0 : i.map((gt) => ({
        ...gt,
        ...J
      }));
      return Ue(o, qe), () => {
        Me();
      };
    }, []), _e("defaultEdgeOptions", J, ye.setState), _e("connectionMode", G, ye.setState), _e("onConnect", l, ye.setState), _e("onConnectStart", u, ye.setState), _e("onConnectEnd", c, ye.setState), _e("onClickConnectStart", d, ye.setState), _e("onClickConnectEnd", m, ye.setState), _e("nodesDraggable", h, ye.setState), _e("nodesConnectable", p, ye.setState), _e("nodesFocusable", y, ye.setState), _e("edgesFocusable", v, ye.setState), _e("edgesUpdatable", x, ye.setState), _e("elementsSelectable", A, ye.setState), _e("elevateNodesOnSelect", S, ye.setState), _e("snapToGrid", Q, ye.setState), _e("snapGrid", D, ye.setState), _e("onNodesChange", $, ye.setState), _e("onEdgesChange", b, ye.setState), _e("connectOnClick", Y, ye.setState), _e("fitViewOnInit", U, ye.setState), _e("fitViewOnInitOptions", Z, ye.setState), _e("onNodesDelete", ee, ye.setState), _e("onEdgesDelete", C, ye.setState), _e("onNodeDrag", H, ye.setState), _e("onNodeDragStart", O, ye.setState), _e("onNodeDragStop", K, ye.setState), _e("onSelectionDrag", F, ye.setState), _e("onSelectionDragStart", R, ye.setState), _e("onSelectionDragStop", B, ye.setState), _e("noPanClassName", N, ye.setState), _e("nodeOrigin", L, ye.setState), _e("rfId", oe, ye.setState), _e("autoPanOnConnect", ne, ye.setState), _e("autoPanOnNodeDrag", le, ye.setState), _e("onError", ae, ye.setState), _e("connectionRadius", he, ye.setState), _e("isValidConnection", me, ye.setState), _e("nodeDragThreshold", ve, ye.setState), wo(e, Ee), wo(r, Ve), wo(k, Ke), wo(_, Qe), wo(q, Oe), wo(E, dt), null;
  }, gp = {
    display: "none"
  }, iS = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)"
  }, am = "react-flow__node-desc", um = "react-flow__edge-desc", lS = "react-flow__aria-live", aS = (e) => e.ariaLiveMessage;
  function uS({ rfId: e }) {
    const r = Re(aS);
    return X.createElement("div", {
      id: `${lS}-${e}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      style: iS
    }, r);
  }
  function cS({ rfId: e, disableKeyboardA11y: r }) {
    return X.createElement(X.Fragment, null, X.createElement("div", {
      id: `${am}-${e}`,
      style: gp
    }, "Press enter or space to select a node.", !r && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "), X.createElement("div", {
      id: `${um}-${e}`,
      style: gp
    }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."), !r && X.createElement(uS, {
      rfId: e
    }));
  }
  var Ps = (e = null, r = {
    actInsideInputWithModifier: true
  }) => {
    const [o, i] = z.useState(false), l = z.useRef(false), u = z.useRef(/* @__PURE__ */ new Set([])), [c, d] = z.useMemo(() => {
      if (e !== null) {
        const h = (Array.isArray(e) ? e : [
          e
        ]).filter((y) => typeof y == "string").map((y) => y.split("+")), p = h.reduce((y, v) => y.concat(...v), []);
        return [
          h,
          p
        ];
      }
      return [
        [],
        []
      ];
    }, [
      e
    ]);
    return z.useEffect(() => {
      const m = typeof document < "u" ? document : null, h = (r == null ? void 0 : r.target) || m;
      if (e !== null) {
        const p = (x) => {
          if (l.current = x.ctrlKey || x.metaKey || x.shiftKey, (!l.current || l.current && !r.actInsideInputWithModifier) && yc(x)) return false;
          const k = vp(x.code, d);
          u.current.add(x[k]), yp(c, u.current, false) && (x.preventDefault(), i(true));
        }, y = (x) => {
          if ((!l.current || l.current && !r.actInsideInputWithModifier) && yc(x)) return false;
          const k = vp(x.code, d);
          yp(c, u.current, true) ? (i(false), u.current.clear()) : u.current.delete(x[k]), x.key === "Meta" && u.current.clear(), l.current = false;
        }, v = () => {
          u.current.clear(), i(false);
        };
        return h == null ? void 0 : h.addEventListener("keydown", p), h == null ? void 0 : h.addEventListener("keyup", y), window.addEventListener("blur", v), () => {
          h == null ? void 0 : h.removeEventListener("keydown", p), h == null ? void 0 : h.removeEventListener("keyup", y), window.removeEventListener("blur", v);
        };
      }
    }, [
      e,
      i
    ]), o;
  };
  function yp(e, r, o) {
    return e.filter((i) => o || i.length === r.size).some((i) => i.every((l) => r.has(l)));
  }
  function vp(e, r) {
    return r.includes(e) ? "code" : "key";
  }
  function cm(e, r, o, i) {
    var _a, _b;
    const l = e.parentNode || e.parentId;
    if (!l) return o;
    const u = r.get(l), c = Br(u, i);
    return cm(u, r, {
      x: (o.x ?? 0) + c.x,
      y: (o.y ?? 0) + c.y,
      z: (((_a = u[Ge]) == null ? void 0 : _a.z) ?? 0) > (o.z ?? 0) ? ((_b = u[Ge]) == null ? void 0 : _b.z) ?? 0 : o.z ?? 0
    }, i);
  }
  function dm(e, r, o) {
    e.forEach((i) => {
      var _a;
      const l = i.parentNode || i.parentId;
      if (l && !e.has(l)) throw new Error(`Parent node ${l} not found`);
      if (l || (o == null ? void 0 : o[i.id])) {
        const { x: u, y: c, z: d } = cm(i, e, {
          ...i.position,
          z: ((_a = i[Ge]) == null ? void 0 : _a.z) ?? 0
        }, r);
        i.positionAbsolute = {
          x: u,
          y: c
        }, i[Ge].z = d, (o == null ? void 0 : o[i.id]) && (i[Ge].isParent = true);
      }
    });
  }
  function qu(e, r, o, i) {
    const l = /* @__PURE__ */ new Map(), u = {}, c = i ? 1e3 : 0;
    return e.forEach((d) => {
      var _a;
      const m = (Zt(d.zIndex) ? d.zIndex : 0) + (d.selected ? c : 0), h = r.get(d.id), p = {
        ...d,
        positionAbsolute: {
          x: d.position.x,
          y: d.position.y
        }
      }, y = d.parentNode || d.parentId;
      y && (u[y] = true);
      const v = (h == null ? void 0 : h.type) && (h == null ? void 0 : h.type) !== d.type;
      Object.defineProperty(p, Ge, {
        enumerable: false,
        value: {
          handleBounds: v ? void 0 : (_a = h == null ? void 0 : h[Ge]) == null ? void 0 : _a.handleBounds,
          z: m
        }
      }), l.set(d.id, p);
    }), dm(l, o, u), l;
  }
  function fm(e, r = {}) {
    const { getNodes: o, width: i, height: l, minZoom: u, maxZoom: c, d3Zoom: d, d3Selection: m, fitViewOnInitDone: h, fitViewOnInit: p, nodeOrigin: y } = e(), v = r.initial && !h && p;
    if (d && m && (v || !r.initial)) {
      const S = o().filter((_) => {
        var _a;
        const E = r.includeHiddenNodes ? _.width && _.height : !_.hidden;
        return ((_a = r.nodes) == null ? void 0 : _a.length) ? E && r.nodes.some(($) => $.id === _.id) : E;
      }), k = S.every((_) => _.width && _.height);
      if (S.length > 0 && k) {
        const _ = Kl(S, y), { x: E, y: $, zoom: b } = Z0(_, i, l, r.minZoom ?? u, r.maxZoom ?? c, r.padding ?? 0.1), A = Hn.translate(E, $).scale(b);
        return typeof r.duration == "number" && r.duration > 0 ? d.transform(Dr(m, r.duration), A) : d.transform(m, A), true;
      }
    }
    return false;
  }
  function dS(e, r) {
    return e.forEach((o) => {
      const i = r.get(o.id);
      i && r.set(i.id, {
        ...i,
        [Ge]: i[Ge],
        selected: o.selected
      });
    }), new Map(r);
  }
  function fS(e, r) {
    return r.map((o) => {
      const i = e.find((l) => l.id === o.id);
      return i && (o.selected = i.selected), o;
    });
  }
  function gl({ changedNodes: e, changedEdges: r, get: o, set: i }) {
    const { nodeInternals: l, edges: u, onNodesChange: c, onEdgesChange: d, hasDefaultNodes: m, hasDefaultEdges: h } = o();
    (e == null ? void 0 : e.length) && (m && i({
      nodeInternals: dS(e, l)
    }), c == null ? void 0 : c(e)), (r == null ? void 0 : r.length) && (h && i({
      edges: fS(r, u)
    }), d == null ? void 0 : d(r));
  }
  const xo = () => {
  }, hS = {
    zoomIn: xo,
    zoomOut: xo,
    zoomTo: xo,
    getZoom: () => 1,
    setViewport: xo,
    getViewport: () => ({
      x: 0,
      y: 0,
      zoom: 1
    }),
    fitView: () => false,
    setCenter: xo,
    fitBounds: xo,
    project: (e) => e,
    screenToFlowPosition: (e) => e,
    flowToScreenPosition: (e) => e,
    viewportInitialized: false
  }, pS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection
  }), mS = () => {
    const e = rt(), { d3Zoom: r, d3Selection: o } = Re(pS, bt);
    return z.useMemo(() => o && r ? {
      zoomIn: (l) => r.scaleBy(Dr(o, l == null ? void 0 : l.duration), 1.2),
      zoomOut: (l) => r.scaleBy(Dr(o, l == null ? void 0 : l.duration), 1 / 1.2),
      zoomTo: (l, u) => r.scaleTo(Dr(o, u == null ? void 0 : u.duration), l),
      getZoom: () => e.getState().transform[2],
      setViewport: (l, u) => {
        const [c, d, m] = e.getState().transform, h = Hn.translate(l.x ?? c, l.y ?? d).scale(l.zoom ?? m);
        r.transform(Dr(o, u == null ? void 0 : u.duration), h);
      },
      getViewport: () => {
        const [l, u, c] = e.getState().transform;
        return {
          x: l,
          y: u,
          zoom: c
        };
      },
      fitView: (l) => fm(e.getState, l),
      setCenter: (l, u, c) => {
        const { width: d, height: m, maxZoom: h } = e.getState(), p = typeof (c == null ? void 0 : c.zoom) < "u" ? c.zoom : h, y = d / 2 - l * p, v = m / 2 - u * p, x = Hn.translate(y, v).scale(p);
        r.transform(Dr(o, c == null ? void 0 : c.duration), x);
      },
      fitBounds: (l, u) => {
        const { width: c, height: d, minZoom: m, maxZoom: h } = e.getState(), { x: p, y, zoom: v } = Z0(l, c, d, m, h, (u == null ? void 0 : u.padding) ?? 0.1), x = Hn.translate(p, y).scale(v);
        r.transform(Dr(o, u == null ? void 0 : u.duration), x);
      },
      project: (l) => {
        const { transform: u, snapToGrid: c, snapGrid: d } = e.getState();
        return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"), wc(l, u, c, d);
      },
      screenToFlowPosition: (l) => {
        const { transform: u, snapToGrid: c, snapGrid: d, domNode: m } = e.getState();
        if (!m) return l;
        const { x: h, y: p } = m.getBoundingClientRect(), y = {
          x: l.x - h,
          y: l.y - p
        };
        return wc(y, u, c, d);
      },
      flowToScreenPosition: (l) => {
        const { transform: u, domNode: c } = e.getState();
        if (!c) return l;
        const { x: d, y: m } = c.getBoundingClientRect(), h = X0(l, u);
        return {
          x: h.x + d,
          y: h.y + m
        };
      },
      viewportInitialized: true
    } : hS, [
      r,
      o
    ]);
  };
  function js() {
    const e = mS(), r = rt(), o = z.useCallback(() => r.getState().getNodes().map((k) => ({
      ...k
    })), []), i = z.useCallback((k) => r.getState().nodeInternals.get(k), []), l = z.useCallback(() => {
      const { edges: k = [] } = r.getState();
      return k.map((_) => ({
        ..._
      }));
    }, []), u = z.useCallback((k) => {
      const { edges: _ = [] } = r.getState();
      return _.find((E) => E.id === k);
    }, []), c = z.useCallback((k) => {
      const { getNodes: _, setNodes: E, hasDefaultNodes: $, onNodesChange: b } = r.getState(), A = _(), G = typeof k == "function" ? k(A) : k;
      if ($) E(G);
      else if (b) {
        const D = G.length === 0 ? A.map((Q) => ({
          type: "remove",
          id: Q.id
        })) : G.map((Q) => ({
          item: Q,
          type: "reset"
        }));
        b(D);
      }
    }, []), d = z.useCallback((k) => {
      const { edges: _ = [], setEdges: E, hasDefaultEdges: $, onEdgesChange: b } = r.getState(), A = typeof k == "function" ? k(_) : k;
      if ($) E(A);
      else if (b) {
        const G = A.length === 0 ? _.map((D) => ({
          type: "remove",
          id: D.id
        })) : A.map((D) => ({
          item: D,
          type: "reset"
        }));
        b(G);
      }
    }, []), m = z.useCallback((k) => {
      const _ = Array.isArray(k) ? k : [
        k
      ], { getNodes: E, setNodes: $, hasDefaultNodes: b, onNodesChange: A } = r.getState();
      if (b) {
        const D = [
          ...E(),
          ..._
        ];
        $(D);
      } else if (A) {
        const G = _.map((D) => ({
          item: D,
          type: "add"
        }));
        A(G);
      }
    }, []), h = z.useCallback((k) => {
      const _ = Array.isArray(k) ? k : [
        k
      ], { edges: E = [], setEdges: $, hasDefaultEdges: b, onEdgesChange: A } = r.getState();
      if (b) $([
        ...E,
        ..._
      ]);
      else if (A) {
        const G = _.map((D) => ({
          item: D,
          type: "add"
        }));
        A(G);
      }
    }, []), p = z.useCallback(() => {
      const { getNodes: k, edges: _ = [], transform: E } = r.getState(), [$, b, A] = E;
      return {
        nodes: k().map((G) => ({
          ...G
        })),
        edges: _.map((G) => ({
          ...G
        })),
        viewport: {
          x: $,
          y: b,
          zoom: A
        }
      };
    }, []), y = z.useCallback(({ nodes: k, edges: _ }) => {
      const { nodeInternals: E, getNodes: $, edges: b, hasDefaultNodes: A, hasDefaultEdges: G, onNodesDelete: D, onEdgesDelete: Q, onNodesChange: q, onEdgesChange: Y } = r.getState(), J = (k || []).map((H) => H.id), U = (_ || []).map((H) => H.id), Z = $().reduce((H, O) => {
        const K = O.parentNode || O.parentId, F = !J.includes(O.id) && K && H.find((B) => B.id === K);
        return (typeof O.deletable == "boolean" ? O.deletable : true) && (J.includes(O.id) || F) && H.push(O), H;
      }, []), ee = b.filter((H) => typeof H.deletable == "boolean" ? H.deletable : true), C = ee.filter((H) => U.includes(H.id));
      if (Z || C) {
        const H = Q0(Z, ee), O = [
          ...C,
          ...H
        ], K = O.reduce((F, R) => (F.includes(R.id) || F.push(R.id), F), []);
        if ((G || A) && (G && r.setState({
          edges: b.filter((F) => !K.includes(F.id))
        }), A && (Z.forEach((F) => {
          E.delete(F.id);
        }), r.setState({
          nodeInternals: new Map(E)
        }))), K.length > 0 && (Q == null ? void 0 : Q(O), Y && Y(K.map((F) => ({
          id: F,
          type: "remove"
        })))), Z.length > 0 && (D == null ? void 0 : D(Z), q)) {
          const F = Z.map((R) => ({
            id: R.id,
            type: "remove"
          }));
          q(F);
        }
      }
    }, []), v = z.useCallback((k) => {
      const _ = Lx(k), E = _ ? null : r.getState().nodeInternals.get(k.id);
      return !_ && !E ? [
        null,
        null,
        _
      ] : [
        _ ? k : up(E),
        E,
        _
      ];
    }, []), x = z.useCallback((k, _ = true, E) => {
      const [$, b, A] = v(k);
      return $ ? (E || r.getState().getNodes()).filter((G) => {
        if (!A && (G.id === b.id || !G.positionAbsolute)) return false;
        const D = up(G), Q = gc(D, $);
        return _ && Q > 0 || Q >= $.width * $.height;
      }) : [];
    }, []), S = z.useCallback((k, _, E = true) => {
      const [$] = v(k);
      if (!$) return false;
      const b = gc($, _);
      return E && b > 0 || b >= $.width * $.height;
    }, []);
    return z.useMemo(() => ({
      ...e,
      getNodes: o,
      getNode: i,
      getEdges: l,
      getEdge: u,
      setNodes: c,
      setEdges: d,
      addNodes: m,
      addEdges: h,
      toObject: p,
      deleteElements: y,
      getIntersectingNodes: x,
      isNodeIntersecting: S
    }), [
      e,
      o,
      i,
      l,
      u,
      c,
      d,
      m,
      h,
      p,
      y,
      x,
      S
    ]);
  }
  const gS = {
    actInsideInputWithModifier: false
  };
  var yS = ({ deleteKeyCode: e, multiSelectionKeyCode: r }) => {
    const o = rt(), { deleteElements: i } = js(), l = Ps(e, gS), u = Ps(r);
    z.useEffect(() => {
      if (l) {
        const { edges: c, getNodes: d } = o.getState(), m = d().filter((p) => p.selected), h = c.filter((p) => p.selected);
        i({
          nodes: m,
          edges: h
        }), o.setState({
          nodesSelectionActive: false
        });
      }
    }, [
      l
    ]), z.useEffect(() => {
      o.setState({
        multiSelectionActive: u
      });
    }, [
      u
    ]);
  };
  function vS(e) {
    const r = rt();
    z.useEffect(() => {
      let o;
      const i = () => {
        var _a, _b;
        if (!e.current) return;
        const l = jc(e.current);
        (l.height === 0 || l.width === 0) && ((_b = (_a = r.getState()).onError) == null ? void 0 : _b.call(_a, "004", Un.error004())), r.setState({
          width: l.width || 500,
          height: l.height || 500
        });
      };
      return i(), window.addEventListener("resize", i), e.current && (o = new ResizeObserver(() => i()), o.observe(e.current)), () => {
        window.removeEventListener("resize", i), o && e.current && o.unobserve(e.current);
      };
    }, []);
  }
  const Kc = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }, wS = (e, r) => e.x !== r.x || e.y !== r.y || e.zoom !== r.k, yl = (e) => ({
    x: e.x,
    y: e.y,
    zoom: e.k
  }), So = (e, r) => e.target.closest(`.${r}`), wp = (e, r) => r === 2 && Array.isArray(e) && e.includes(2), xp = (e) => {
    const r = e.ctrlKey && Dl() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * r;
  }, xS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection,
    d3ZoomHandler: e.d3ZoomHandler,
    userSelectionActive: e.userSelectionActive
  }), SS = ({ onMove: e, onMoveStart: r, onMoveEnd: o, onPaneContextMenu: i, zoomOnScroll: l = true, zoomOnPinch: u = true, panOnScroll: c = false, panOnScrollSpeed: d = 0.5, panOnScrollMode: m = Or.Free, zoomOnDoubleClick: h = true, elementsSelectable: p, panOnDrag: y = true, defaultViewport: v, translateExtent: x, minZoom: S, maxZoom: k, zoomActivationKeyCode: _, preventScrolling: E = true, children: $, noWheelClassName: b, noPanClassName: A }) => {
    const G = z.useRef(), D = rt(), Q = z.useRef(false), q = z.useRef(false), Y = z.useRef(null), J = z.useRef({
      x: 0,
      y: 0,
      zoom: 0
    }), { d3Zoom: U, d3Selection: Z, d3ZoomHandler: ee, userSelectionActive: C } = Re(xS, bt), H = Ps(_), O = z.useRef(0), K = z.useRef(false), F = z.useRef();
    return vS(Y), z.useEffect(() => {
      if (Y.current) {
        const R = Y.current.getBoundingClientRect(), B = D0().scaleExtent([
          S,
          k
        ]).translateExtent(x), N = Qt(Y.current).call(B), L = Hn.translate(v.x, v.y).scale(bo(v.zoom, S, k)), oe = [
          [
            0,
            0
          ],
          [
            R.width,
            R.height
          ]
        ], ne = B.constrain()(L, oe, x);
        B.transform(N, ne), B.wheelDelta(xp), D.setState({
          d3Zoom: B,
          d3Selection: N,
          d3ZoomHandler: N.on("wheel.zoom"),
          transform: [
            ne.x,
            ne.y,
            ne.k
          ],
          domNode: Y.current.closest(".react-flow")
        });
      }
    }, []), z.useEffect(() => {
      Z && U && (c && !H && !C ? Z.on("wheel.zoom", (R) => {
        if (So(R, b)) return false;
        R.preventDefault(), R.stopImmediatePropagation();
        const B = Z.property("__zoom").k || 1;
        if (R.ctrlKey && u) {
          const me = dn(R), ve = xp(R), Ee = B * Math.pow(2, ve);
          U.scaleTo(Z, Ee, me, R);
          return;
        }
        const N = R.deltaMode === 1 ? 20 : 1;
        let L = m === Or.Vertical ? 0 : R.deltaX * N, oe = m === Or.Horizontal ? 0 : R.deltaY * N;
        !Dl() && R.shiftKey && m !== Or.Vertical && (L = R.deltaY * N, oe = 0), U.translateBy(Z, -(L / B) * d, -(oe / B) * d, {
          internal: true
        });
        const ne = yl(Z.property("__zoom")), { onViewportChangeStart: le, onViewportChange: ae, onViewportChangeEnd: he } = D.getState();
        clearTimeout(F.current), K.current || (K.current = true, r == null ? void 0 : r(R, ne), le == null ? void 0 : le(ne)), K.current && (e == null ? void 0 : e(R, ne), ae == null ? void 0 : ae(ne), F.current = setTimeout(() => {
          o == null ? void 0 : o(R, ne), he == null ? void 0 : he(ne), K.current = false;
        }, 150));
      }, {
        passive: false
      }) : typeof ee < "u" && Z.on("wheel.zoom", function(R, B) {
        if (!E && R.type === "wheel" && !R.ctrlKey || So(R, b)) return null;
        R.preventDefault(), ee.call(this, R, B);
      }, {
        passive: false
      }));
    }, [
      C,
      c,
      m,
      Z,
      U,
      ee,
      H,
      u,
      E,
      b,
      r,
      e,
      o
    ]), z.useEffect(() => {
      U && U.on("start", (R) => {
        var _a, _b;
        if (!R.sourceEvent || R.sourceEvent.internal) return null;
        O.current = (_a = R.sourceEvent) == null ? void 0 : _a.button;
        const { onViewportChangeStart: B } = D.getState(), N = yl(R.transform);
        Q.current = true, J.current = N, ((_b = R.sourceEvent) == null ? void 0 : _b.type) === "mousedown" && D.setState({
          paneDragging: true
        }), B == null ? void 0 : B(N), r == null ? void 0 : r(R.sourceEvent, N);
      });
    }, [
      U,
      r
    ]), z.useEffect(() => {
      U && (C && !Q.current ? U.on("zoom", null) : C || U.on("zoom", (R) => {
        var _a;
        const { onViewportChange: B } = D.getState();
        if (D.setState({
          transform: [
            R.transform.x,
            R.transform.y,
            R.transform.k
          ]
        }), q.current = !!(i && wp(y, O.current ?? 0)), (e || B) && !((_a = R.sourceEvent) == null ? void 0 : _a.internal)) {
          const N = yl(R.transform);
          B == null ? void 0 : B(N), e == null ? void 0 : e(R.sourceEvent, N);
        }
      }));
    }, [
      C,
      U,
      e,
      y,
      i
    ]), z.useEffect(() => {
      U && U.on("end", (R) => {
        if (!R.sourceEvent || R.sourceEvent.internal) return null;
        const { onViewportChangeEnd: B } = D.getState();
        if (Q.current = false, D.setState({
          paneDragging: false
        }), i && wp(y, O.current ?? 0) && !q.current && i(R.sourceEvent), q.current = false, (o || B) && wS(J.current, R.transform)) {
          const N = yl(R.transform);
          J.current = N, clearTimeout(G.current), G.current = setTimeout(() => {
            B == null ? void 0 : B(N), o == null ? void 0 : o(R.sourceEvent, N);
          }, c ? 150 : 0);
        }
      });
    }, [
      U,
      c,
      y,
      o,
      i
    ]), z.useEffect(() => {
      U && U.filter((R) => {
        const B = H || l, N = u && R.ctrlKey;
        if ((y === true || Array.isArray(y) && y.includes(1)) && R.button === 1 && R.type === "mousedown" && (So(R, "react-flow__node") || So(R, "react-flow__edge"))) return true;
        if (!y && !B && !c && !h && !u || C || !h && R.type === "dblclick" || So(R, b) && R.type === "wheel" || So(R, A) && (R.type !== "wheel" || c && R.type === "wheel" && !H) || !u && R.ctrlKey && R.type === "wheel" || !B && !c && !N && R.type === "wheel" || !y && (R.type === "mousedown" || R.type === "touchstart") || Array.isArray(y) && !y.includes(R.button) && R.type === "mousedown") return false;
        const L = Array.isArray(y) && y.includes(R.button) || !R.button || R.button <= 1;
        return (!R.ctrlKey || R.type === "wheel") && L;
      });
    }, [
      C,
      U,
      l,
      u,
      c,
      h,
      y,
      p,
      H
    ]), X.createElement("div", {
      className: "react-flow__renderer",
      ref: Y,
      style: Kc
    }, $);
  }, kS = (e) => ({
    userSelectionActive: e.userSelectionActive,
    userSelectionRect: e.userSelectionRect
  });
  function ES() {
    const { userSelectionActive: e, userSelectionRect: r } = Re(kS, bt);
    return e && r ? X.createElement("div", {
      className: "react-flow__selection react-flow__container",
      style: {
        width: r.width,
        height: r.height,
        transform: `translate(${r.x}px, ${r.y}px)`
      }
    }) : null;
  }
  function Sp(e, r) {
    const o = r.parentNode || r.parentId, i = e.find((l) => l.id === o);
    if (i) {
      const l = r.position.x + r.width - i.width, u = r.position.y + r.height - i.height;
      if (l > 0 || u > 0 || r.position.x < 0 || r.position.y < 0) {
        if (i.style = {
          ...i.style
        }, i.style.width = i.style.width ?? i.width, i.style.height = i.style.height ?? i.height, l > 0 && (i.style.width += l), u > 0 && (i.style.height += u), r.position.x < 0) {
          const c = Math.abs(r.position.x);
          i.position.x = i.position.x - c, i.style.width += c, r.position.x = 0;
        }
        if (r.position.y < 0) {
          const c = Math.abs(r.position.y);
          i.position.y = i.position.y - c, i.style.height += c, r.position.y = 0;
        }
        i.width = i.style.width, i.height = i.style.height;
      }
    }
  }
  function hm(e, r) {
    if (e.some((i) => i.type === "reset")) return e.filter((i) => i.type === "reset").map((i) => i.item);
    const o = e.filter((i) => i.type === "add").map((i) => i.item);
    return r.reduce((i, l) => {
      const u = e.filter((d) => d.id === l.id);
      if (u.length === 0) return i.push(l), i;
      const c = {
        ...l
      };
      for (const d of u) if (d) switch (d.type) {
        case "select": {
          c.selected = d.selected;
          break;
        }
        case "position": {
          typeof d.position < "u" && (c.position = d.position), typeof d.positionAbsolute < "u" && (c.positionAbsolute = d.positionAbsolute), typeof d.dragging < "u" && (c.dragging = d.dragging), c.expandParent && Sp(i, c);
          break;
        }
        case "dimensions": {
          typeof d.dimensions < "u" && (c.width = d.dimensions.width, c.height = d.dimensions.height), typeof d.updateStyle < "u" && (c.style = {
            ...c.style || {},
            ...d.dimensions
          }), typeof d.resizing == "boolean" && (c.resizing = d.resizing), c.expandParent && Sp(i, c);
          break;
        }
        case "remove":
          return i;
      }
      return i.push(c), i;
    }, o);
  }
  function pm(e, r) {
    return hm(e, r);
  }
  function CS(e, r) {
    return hm(e, r);
  }
  const hr = (e, r) => ({
    id: e,
    type: "select",
    selected: r
  });
  function Eo(e, r) {
    return e.reduce((o, i) => {
      const l = r.includes(i.id);
      return !i.selected && l ? (i.selected = true, o.push(hr(i.id, true))) : i.selected && !l && (i.selected = false, o.push(hr(i.id, false))), o;
    }, []);
  }
  const Ju = (e, r) => (o) => {
    o.target === r.current && (e == null ? void 0 : e(o));
  }, _S = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    dragging: e.paneDragging
  }), mm = z.memo(({ isSelecting: e, selectionMode: r = Rs.Full, panOnDrag: o, onSelectionStart: i, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: c, onPaneScroll: d, onPaneMouseEnter: m, onPaneMouseMove: h, onPaneMouseLeave: p, children: y }) => {
    const v = z.useRef(null), x = rt(), S = z.useRef(0), k = z.useRef(0), _ = z.useRef(), { userSelectionActive: E, elementsSelectable: $, dragging: b } = Re(_S, bt), A = () => {
      x.setState({
        userSelectionActive: false,
        userSelectionRect: null
      }), S.current = 0, k.current = 0;
    }, G = (ee) => {
      u == null ? void 0 : u(ee), x.getState().resetSelectedElements(), x.setState({
        nodesSelectionActive: false
      });
    }, D = (ee) => {
      if (Array.isArray(o) && (o == null ? void 0 : o.includes(2))) {
        ee.preventDefault();
        return;
      }
      c == null ? void 0 : c(ee);
    }, Q = d ? (ee) => d(ee) : void 0, q = (ee) => {
      const { resetSelectedElements: C, domNode: H } = x.getState();
      if (_.current = H == null ? void 0 : H.getBoundingClientRect(), !$ || !e || ee.button !== 0 || ee.target !== v.current || !_.current) return;
      const { x: O, y: K } = mr(ee, _.current);
      C(), x.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: O,
          startY: K,
          x: O,
          y: K
        }
      }), i == null ? void 0 : i(ee);
    }, Y = (ee) => {
      const { userSelectionRect: C, nodeInternals: H, edges: O, transform: K, onNodesChange: F, onEdgesChange: R, nodeOrigin: B, getNodes: N } = x.getState();
      if (!e || !_.current || !C) return;
      x.setState({
        userSelectionActive: true,
        nodesSelectionActive: false
      });
      const L = mr(ee, _.current), oe = C.startX ?? 0, ne = C.startY ?? 0, le = {
        ...C,
        x: L.x < oe ? L.x : oe,
        y: L.y < ne ? L.y : ne,
        width: Math.abs(L.x - oe),
        height: Math.abs(L.y - ne)
      }, ae = N(), he = K0(H, le, K, r === Rs.Partial, true, B), me = Q0(he, O).map((Ee) => Ee.id), ve = he.map((Ee) => Ee.id);
      if (S.current !== ve.length) {
        S.current = ve.length;
        const Ee = Eo(ae, ve);
        Ee.length && (F == null ? void 0 : F(Ee));
      }
      if (k.current !== me.length) {
        k.current = me.length;
        const Ee = Eo(O, me);
        Ee.length && (R == null ? void 0 : R(Ee));
      }
      x.setState({
        userSelectionRect: le
      });
    }, J = (ee) => {
      if (ee.button !== 0) return;
      const { userSelectionRect: C } = x.getState();
      !E && C && ee.target === v.current && (G == null ? void 0 : G(ee)), x.setState({
        nodesSelectionActive: S.current > 0
      }), A(), l == null ? void 0 : l(ee);
    }, U = (ee) => {
      E && (x.setState({
        nodesSelectionActive: S.current > 0
      }), l == null ? void 0 : l(ee)), A();
    }, Z = $ && (e || E);
    return X.createElement("div", {
      className: ct([
        "react-flow__pane",
        {
          dragging: b,
          selection: e
        }
      ]),
      onClick: Z ? void 0 : Ju(G, v),
      onContextMenu: Ju(D, v),
      onWheel: Ju(Q, v),
      onMouseEnter: Z ? void 0 : m,
      onMouseDown: Z ? q : void 0,
      onMouseMove: Z ? Y : h,
      onMouseUp: Z ? J : void 0,
      onMouseLeave: Z ? U : p,
      ref: v,
      style: Kc
    }, y, X.createElement(ES, null));
  });
  mm.displayName = "Pane";
  function gm(e, r) {
    const o = e.parentNode || e.parentId;
    if (!o) return false;
    const i = r.get(o);
    return i ? i.selected ? true : gm(i, r) : false;
  }
  function kp(e, r, o) {
    let i = e;
    do {
      if (i == null ? void 0 : i.matches(r)) return true;
      if (i === o.current) return false;
      i = i.parentElement;
    } while (i);
    return false;
  }
  function NS(e, r, o, i) {
    return Array.from(e.values()).filter((l) => (l.selected || l.id === i) && (!l.parentNode || l.parentId || !gm(l, e)) && (l.draggable || r && typeof l.draggable > "u")).map((l) => {
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
  function MS(e, r) {
    return !r || r === "parent" ? r : [
      r[0],
      [
        r[1][0] - (e.width || 0),
        r[1][1] - (e.height || 0)
      ]
    ];
  }
  function ym(e, r, o, i, l = [
    0,
    0
  ], u) {
    const c = MS(e, e.extent || i);
    let d = c;
    const m = e.parentNode || e.parentId;
    if (e.extent === "parent" && !e.expandParent) if (m && e.width && e.height) {
      const y = o.get(m), { x: v, y: x } = Br(y, l).positionAbsolute;
      d = y && Zt(v) && Zt(x) && Zt(y.width) && Zt(y.height) ? [
        [
          v + e.width * l[0],
          x + e.height * l[1]
        ],
        [
          v + y.width - e.width + e.width * l[0],
          x + y.height - e.height + e.height * l[1]
        ]
      ] : d;
    } else u == null ? void 0 : u("005", Un.error005()), d = c;
    else if (e.extent && m && e.extent !== "parent") {
      const y = o.get(m), { x: v, y: x } = Br(y, l).positionAbsolute;
      d = [
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
      h = Br(y, l).positionAbsolute;
    }
    const p = d && d !== "parent" ? Hc(r, d) : r;
    return {
      position: {
        x: p.x - h.x,
        y: p.y - h.y
      },
      positionAbsolute: p
    };
  }
  function ec({ nodeId: e, dragItems: r, nodeInternals: o }) {
    const i = r.map((l) => ({
      ...o.get(l.id),
      position: l.position,
      positionAbsolute: l.positionAbsolute
    }));
    return [
      e ? i.find((l) => l.id === e) : i[0],
      i
    ];
  }
  const Ep = (e, r, o, i) => {
    const l = r.querySelectorAll(e);
    if (!l || !l.length) return null;
    const u = Array.from(l), c = r.getBoundingClientRect(), d = {
      x: c.width * i[0],
      y: c.height * i[1]
    };
    return u.map((m) => {
      const h = m.getBoundingClientRect();
      return {
        id: m.getAttribute("data-handleid"),
        position: m.getAttribute("data-handlepos"),
        x: (h.left - c.left - d.x) / o,
        y: (h.top - c.top - d.y) / o,
        ...jc(m)
      };
    });
  };
  function Ss(e, r, o) {
    return o === void 0 ? o : (i) => {
      const l = r().nodeInternals.get(e);
      l && o(i, {
        ...l
      });
    };
  }
  function Sc({ id: e, store: r, unselect: o = false, nodeRef: i }) {
    const { addSelectedNodes: l, unselectNodesAndEdges: u, multiSelectionActive: c, nodeInternals: d, onError: m } = r.getState(), h = d.get(e);
    if (!h) {
      m == null ? void 0 : m("012", Un.error012(e));
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
      return (_a = i == null ? void 0 : i.current) == null ? void 0 : _a.blur();
    })) : l([
      e
    ]);
  }
  function IS() {
    const e = rt();
    return z.useCallback(({ sourceEvent: o }) => {
      const { transform: i, snapGrid: l, snapToGrid: u } = e.getState(), c = o.touches ? o.touches[0].clientX : o.clientX, d = o.touches ? o.touches[0].clientY : o.clientY, m = {
        x: (c - i[0]) / i[2],
        y: (d - i[1]) / i[2]
      };
      return {
        xSnapped: u ? l[0] * Math.round(m.x / l[0]) : m.x,
        ySnapped: u ? l[1] * Math.round(m.y / l[1]) : m.y,
        ...m
      };
    }, []);
  }
  function tc(e) {
    return (r, o, i) => e == null ? void 0 : e(r, i);
  }
  function vm({ nodeRef: e, disabled: r = false, noDragClassName: o, handleSelector: i, nodeId: l, isSelectable: u, selectNodesOnDrag: c }) {
    const d = rt(), [m, h] = z.useState(false), p = z.useRef([]), y = z.useRef({
      x: null,
      y: null
    }), v = z.useRef(0), x = z.useRef(null), S = z.useRef({
      x: 0,
      y: 0
    }), k = z.useRef(null), _ = z.useRef(false), E = z.useRef(false), $ = z.useRef(false), b = IS();
    return z.useEffect(() => {
      if (e == null ? void 0 : e.current) {
        const A = Qt(e.current), G = ({ x: q, y: Y }) => {
          const { nodeInternals: J, onNodeDrag: U, onSelectionDrag: Z, updateNodePositions: ee, nodeExtent: C, snapGrid: H, snapToGrid: O, nodeOrigin: K, onError: F } = d.getState();
          y.current = {
            x: q,
            y: Y
          };
          let R = false, B = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 0
          };
          if (p.current.length > 1 && C) {
            const L = Kl(p.current, K);
            B = $s(L);
          }
          if (p.current = p.current.map((L) => {
            const oe = {
              x: q - L.distance.x,
              y: Y - L.distance.y
            };
            O && (oe.x = H[0] * Math.round(oe.x / H[0]), oe.y = H[1] * Math.round(oe.y / H[1]));
            const ne = [
              [
                C[0][0],
                C[0][1]
              ],
              [
                C[1][0],
                C[1][1]
              ]
            ];
            p.current.length > 1 && C && !L.extent && (ne[0][0] = L.positionAbsolute.x - B.x + C[0][0], ne[1][0] = L.positionAbsolute.x + (L.width ?? 0) - B.x2 + C[1][0], ne[0][1] = L.positionAbsolute.y - B.y + C[0][1], ne[1][1] = L.positionAbsolute.y + (L.height ?? 0) - B.y2 + C[1][1]);
            const le = ym(L, oe, J, ne, K, F);
            return R = R || L.position.x !== le.position.x || L.position.y !== le.position.y, L.position = le.position, L.positionAbsolute = le.positionAbsolute, L;
          }), !R) return;
          ee(p.current, true, true), h(true);
          const N = l ? U : tc(Z);
          if (N && k.current) {
            const [L, oe] = ec({
              nodeId: l,
              dragItems: p.current,
              nodeInternals: J
            });
            N(k.current, L, oe);
          }
        }, D = () => {
          if (!x.current) return;
          const [q, Y] = O0(S.current, x.current);
          if (q !== 0 || Y !== 0) {
            const { transform: J, panBy: U } = d.getState();
            y.current.x = (y.current.x ?? 0) - q / J[2], y.current.y = (y.current.y ?? 0) - Y / J[2], U({
              x: q,
              y: Y
            }) && G(y.current);
          }
          v.current = requestAnimationFrame(D);
        }, Q = (q) => {
          var _a;
          const { nodeInternals: Y, multiSelectionActive: J, nodesDraggable: U, unselectNodesAndEdges: Z, onNodeDragStart: ee, onSelectionDragStart: C } = d.getState();
          E.current = true;
          const H = l ? ee : tc(C);
          (!c || !u) && !J && l && (((_a = Y.get(l)) == null ? void 0 : _a.selected) || Z()), l && u && c && Sc({
            id: l,
            store: d,
            nodeRef: e
          });
          const O = b(q);
          if (y.current = O, p.current = NS(Y, U, O, l), H && p.current) {
            const [K, F] = ec({
              nodeId: l,
              dragItems: p.current,
              nodeInternals: Y
            });
            H(q.sourceEvent, K, F);
          }
        };
        if (r) A.on(".drag", null);
        else {
          const q = Ov().on("start", (Y) => {
            const { domNode: J, nodeDragThreshold: U } = d.getState();
            U === 0 && Q(Y), $.current = false;
            const Z = b(Y);
            y.current = Z, x.current = (J == null ? void 0 : J.getBoundingClientRect()) || null, S.current = mr(Y.sourceEvent, x.current);
          }).on("drag", (Y) => {
            var _a, _b;
            const J = b(Y), { autoPanOnNodeDrag: U, nodeDragThreshold: Z } = d.getState();
            if (Y.sourceEvent.type === "touchmove" && Y.sourceEvent.touches.length > 1 && ($.current = true), !$.current) {
              if (!_.current && E.current && U && (_.current = true, D()), !E.current) {
                const ee = J.xSnapped - (((_a = y == null ? void 0 : y.current) == null ? void 0 : _a.x) ?? 0), C = J.ySnapped - (((_b = y == null ? void 0 : y.current) == null ? void 0 : _b.y) ?? 0);
                Math.sqrt(ee * ee + C * C) > Z && Q(Y);
              }
              (y.current.x !== J.xSnapped || y.current.y !== J.ySnapped) && p.current && E.current && (k.current = Y.sourceEvent, S.current = mr(Y.sourceEvent, x.current), G(J));
            }
          }).on("end", (Y) => {
            if (!(!E.current || $.current) && (h(false), _.current = false, E.current = false, cancelAnimationFrame(v.current), p.current)) {
              const { updateNodePositions: J, nodeInternals: U, onNodeDragStop: Z, onSelectionDragStop: ee } = d.getState(), C = l ? Z : tc(ee);
              if (J(p.current, false, false), C) {
                const [H, O] = ec({
                  nodeId: l,
                  dragItems: p.current,
                  nodeInternals: U
                });
                C(Y.sourceEvent, H, O);
              }
            }
          }).filter((Y) => {
            const J = Y.target;
            return !Y.button && (!o || !kp(J, `.${o}`, e)) && (!i || kp(J, i, e));
          });
          return A.call(q), () => {
            A.on(".drag", null);
          };
        }
      }
    }, [
      e,
      r,
      o,
      i,
      u,
      d,
      l,
      c,
      b
    ]), m;
  }
  function wm() {
    const e = rt();
    return z.useCallback((o) => {
      const { nodeInternals: i, nodeExtent: l, updateNodePositions: u, getNodes: c, snapToGrid: d, snapGrid: m, onError: h, nodesDraggable: p } = e.getState(), y = c().filter(($) => $.selected && ($.draggable || p && typeof $.draggable > "u")), v = d ? m[0] : 5, x = d ? m[1] : 5, S = o.isShiftPressed ? 4 : 1, k = o.x * v * S, _ = o.y * x * S, E = y.map(($) => {
        if ($.positionAbsolute) {
          const b = {
            x: $.positionAbsolute.x + k,
            y: $.positionAbsolute.y + _
          };
          d && (b.x = m[0] * Math.round(b.x / m[0]), b.y = m[1] * Math.round(b.y / m[1]));
          const { positionAbsolute: A, position: G } = ym($, b, i, l, void 0, h);
          $.position = G, $.positionAbsolute = A;
        }
        return $;
      });
      u(E, true, false);
    }, []);
  }
  const No = {
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
  var ks = (e) => {
    const r = ({ id: o, type: i, data: l, xPos: u, yPos: c, xPosOrigin: d, yPosOrigin: m, selected: h, onClick: p, onMouseEnter: y, onMouseMove: v, onMouseLeave: x, onContextMenu: S, onDoubleClick: k, style: _, className: E, isDraggable: $, isSelectable: b, isConnectable: A, isFocusable: G, selectNodesOnDrag: D, sourcePosition: Q, targetPosition: q, hidden: Y, resizeObserver: J, dragHandle: U, zIndex: Z, isParent: ee, noDragClassName: C, noPanClassName: H, initialized: O, disableKeyboardA11y: K, ariaLabel: F, rfId: R, hasHandleBounds: B }) => {
      const N = rt(), L = z.useRef(null), oe = z.useRef(null), ne = z.useRef(Q), le = z.useRef(q), ae = z.useRef(i), he = b || $ || p || y || v || x, me = wm(), ve = Ss(o, N.getState, y), Ee = Ss(o, N.getState, v), Ve = Ss(o, N.getState, x), Ue = Ss(o, N.getState, S), Ke = Ss(o, N.getState, k), Qe = (Me) => {
        const { nodeDragThreshold: ye } = N.getState();
        if (b && (!D || !$ || ye > 0) && Sc({
          id: o,
          store: N,
          nodeRef: L
        }), p) {
          const qe = N.getState().nodeInternals.get(o);
          qe && p(Me, {
            ...qe
          });
        }
      }, Oe = (Me) => {
        if (!yc(Me) && !K) if (H0.includes(Me.key) && b) {
          const ye = Me.key === "Escape";
          Sc({
            id: o,
            store: N,
            unselect: ye,
            nodeRef: L
          });
        } else $ && h && Object.prototype.hasOwnProperty.call(No, Me.key) && (N.setState({
          ariaLiveMessage: `Moved selected node ${Me.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~u}, y: ${~~c}`
        }), me({
          x: No[Me.key].x,
          y: No[Me.key].y,
          isShiftPressed: Me.shiftKey
        }));
      };
      z.useEffect(() => () => {
        oe.current && (J == null ? void 0 : J.unobserve(oe.current), oe.current = null);
      }, []), z.useEffect(() => {
        if (L.current && !Y) {
          const Me = L.current;
          (!O || !B || oe.current !== Me) && (oe.current && (J == null ? void 0 : J.unobserve(oe.current)), J == null ? void 0 : J.observe(Me), oe.current = Me);
        }
      }, [
        Y,
        O,
        B
      ]), z.useEffect(() => {
        const Me = ae.current !== i, ye = ne.current !== Q, qe = le.current !== q;
        L.current && (Me || ye || qe) && (Me && (ae.current = i), ye && (ne.current = Q), qe && (le.current = q), N.getState().updateNodeDimensions([
          {
            id: o,
            nodeElement: L.current,
            forceUpdate: true
          }
        ]));
      }, [
        o,
        i,
        Q,
        q
      ]);
      const dt = vm({
        nodeRef: L,
        disabled: Y || !$,
        noDragClassName: C,
        handleSelector: U,
        nodeId: o,
        isSelectable: b,
        selectNodesOnDrag: D
      });
      return Y ? null : X.createElement("div", {
        className: ct([
          "react-flow__node",
          `react-flow__node-${i}`,
          {
            [H]: $
          },
          E,
          {
            selected: h,
            selectable: b,
            parent: ee,
            dragging: dt
          }
        ]),
        ref: L,
        style: {
          zIndex: Z,
          transform: `translate(${d}px,${m}px)`,
          pointerEvents: he ? "all" : "none",
          visibility: O ? "visible" : "hidden",
          ..._
        },
        "data-id": o,
        "data-testid": `rf__node-${o}`,
        onMouseEnter: ve,
        onMouseMove: Ee,
        onMouseLeave: Ve,
        onContextMenu: Ue,
        onClick: Qe,
        onDoubleClick: Ke,
        onKeyDown: G ? Oe : void 0,
        tabIndex: G ? 0 : void 0,
        role: G ? "button" : void 0,
        "aria-describedby": K ? void 0 : `${am}-${R}`,
        "aria-label": F
      }, X.createElement(Hx, {
        value: o
      }, X.createElement(e, {
        id: o,
        data: l,
        type: i,
        xPos: u,
        yPos: c,
        selected: h,
        isConnectable: A,
        sourcePosition: Q,
        targetPosition: q,
        dragging: dt,
        dragHandle: U,
        zIndex: Z
      })));
    };
    return r.displayName = "NodeWrapper", z.memo(r);
  };
  const bS = (e) => {
    const r = e.getNodes().filter((o) => o.selected);
    return {
      ...Kl(r, e.nodeOrigin),
      transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
      userSelectionActive: e.userSelectionActive
    };
  };
  function TS({ onSelectionContextMenu: e, noPanClassName: r, disableKeyboardA11y: o }) {
    const i = rt(), { width: l, height: u, x: c, y: d, transformString: m, userSelectionActive: h } = Re(bS, bt), p = wm(), y = z.useRef(null);
    if (z.useEffect(() => {
      var _a;
      o || ((_a = y.current) == null ? void 0 : _a.focus({
        preventScroll: true
      }));
    }, [
      o
    ]), vm({
      nodeRef: y
    }), h || !l || !u) return null;
    const v = e ? (S) => {
      const k = i.getState().getNodes().filter((_) => _.selected);
      e(S, k);
    } : void 0, x = (S) => {
      Object.prototype.hasOwnProperty.call(No, S.key) && p({
        x: No[S.key].x,
        y: No[S.key].y,
        isShiftPressed: S.shiftKey
      });
    };
    return X.createElement("div", {
      className: ct([
        "react-flow__nodesselection",
        "react-flow__container",
        r
      ]),
      style: {
        transform: m
      }
    }, X.createElement("div", {
      ref: y,
      className: "react-flow__nodesselection-rect",
      onContextMenu: v,
      tabIndex: o ? void 0 : -1,
      onKeyDown: o ? void 0 : x,
      style: {
        width: l,
        height: u,
        top: d,
        left: c
      }
    }));
  }
  var AS = z.memo(TS);
  const $S = (e) => e.nodesSelectionActive, xm = ({ children: e, onPaneClick: r, onPaneMouseEnter: o, onPaneMouseMove: i, onPaneMouseLeave: l, onPaneContextMenu: u, onPaneScroll: c, deleteKeyCode: d, onMove: m, onMoveStart: h, onMoveEnd: p, selectionKeyCode: y, selectionOnDrag: v, selectionMode: x, onSelectionStart: S, onSelectionEnd: k, multiSelectionKeyCode: _, panActivationKeyCode: E, zoomActivationKeyCode: $, elementsSelectable: b, zoomOnScroll: A, zoomOnPinch: G, panOnScroll: D, panOnScrollSpeed: Q, panOnScrollMode: q, zoomOnDoubleClick: Y, panOnDrag: J, defaultViewport: U, translateExtent: Z, minZoom: ee, maxZoom: C, preventScrolling: H, onSelectionContextMenu: O, noWheelClassName: K, noPanClassName: F, disableKeyboardA11y: R }) => {
    const B = Re($S), N = Ps(y), L = Ps(E), oe = L || J, ne = L || D, le = N || v && oe !== true;
    return yS({
      deleteKeyCode: d,
      multiSelectionKeyCode: _
    }), X.createElement(SS, {
      onMove: m,
      onMoveStart: h,
      onMoveEnd: p,
      onPaneContextMenu: u,
      elementsSelectable: b,
      zoomOnScroll: A,
      zoomOnPinch: G,
      panOnScroll: ne,
      panOnScrollSpeed: Q,
      panOnScrollMode: q,
      zoomOnDoubleClick: Y,
      panOnDrag: !N && oe,
      defaultViewport: U,
      translateExtent: Z,
      minZoom: ee,
      maxZoom: C,
      zoomActivationKeyCode: $,
      preventScrolling: H,
      noWheelClassName: K,
      noPanClassName: F
    }, X.createElement(mm, {
      onSelectionStart: S,
      onSelectionEnd: k,
      onPaneClick: r,
      onPaneMouseEnter: o,
      onPaneMouseMove: i,
      onPaneMouseLeave: l,
      onPaneContextMenu: u,
      onPaneScroll: c,
      panOnDrag: oe,
      isSelecting: !!le,
      selectionMode: x
    }, e, B && X.createElement(AS, {
      onSelectionContextMenu: O,
      noPanClassName: F,
      disableKeyboardA11y: R
    })));
  };
  xm.displayName = "FlowRenderer";
  var RS = z.memo(xm);
  function PS(e) {
    return Re(z.useCallback((o) => e ? K0(o.nodeInternals, {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }, o.transform, true) : o.getNodes(), [
      e
    ]));
  }
  function LS(e) {
    const r = {
      input: ks(e.input || om),
      default: ks(e.default || xc),
      output: ks(e.output || im),
      group: ks(e.group || Xc)
    }, o = {}, i = Object.keys(e).filter((l) => ![
      "input",
      "default",
      "output",
      "group"
    ].includes(l)).reduce((l, u) => (l[u] = ks(e[u] || xc), l), o);
    return {
      ...r,
      ...i
    };
  }
  const DS = ({ x: e, y: r, width: o, height: i, origin: l }) => !o || !i ? {
    x: e,
    y: r
  } : l[0] < 0 || l[1] < 0 || l[0] > 1 || l[1] > 1 ? {
    x: e,
    y: r
  } : {
    x: e - o * l[0],
    y: r - i * l[1]
  }, zS = (e) => ({
    nodesDraggable: e.nodesDraggable,
    nodesConnectable: e.nodesConnectable,
    nodesFocusable: e.nodesFocusable,
    elementsSelectable: e.elementsSelectable,
    updateNodeDimensions: e.updateNodeDimensions,
    onError: e.onError
  }), Sm = (e) => {
    const { nodesDraggable: r, nodesConnectable: o, nodesFocusable: i, elementsSelectable: l, updateNodeDimensions: u, onError: c } = Re(zS, bt), d = PS(e.onlyRenderVisibleElements), m = z.useRef(), h = z.useMemo(() => {
      if (typeof ResizeObserver > "u") return null;
      const p = new ResizeObserver((y) => {
        const v = y.map((x) => ({
          id: x.target.getAttribute("data-id"),
          nodeElement: x.target,
          forceUpdate: true
        }));
        u(v);
      });
      return m.current = p, p;
    }, []);
    return z.useEffect(() => () => {
      var _a;
      (_a = m == null ? void 0 : m.current) == null ? void 0 : _a.disconnect();
    }, []), X.createElement("div", {
      className: "react-flow__nodes",
      style: Kc
    }, d.map((p) => {
      var _a, _b, _c2;
      let y = p.type || "default";
      e.nodeTypes[y] || (c == null ? void 0 : c("003", Un.error003(y)), y = "default");
      const v = e.nodeTypes[y] || e.nodeTypes.default, x = !!(p.draggable || r && typeof p.draggable > "u"), S = !!(p.selectable || l && typeof p.selectable > "u"), k = !!(p.connectable || o && typeof p.connectable > "u"), _ = !!(p.focusable || i && typeof p.focusable > "u"), E = e.nodeExtent ? Hc(p.positionAbsolute, e.nodeExtent) : p.positionAbsolute, $ = (E == null ? void 0 : E.x) ?? 0, b = (E == null ? void 0 : E.y) ?? 0, A = DS({
        x: $,
        y: b,
        width: p.width ?? 0,
        height: p.height ?? 0,
        origin: e.nodeOrigin
      });
      return X.createElement(v, {
        key: p.id,
        id: p.id,
        className: p.className,
        style: p.style,
        type: y,
        data: p.data,
        sourcePosition: p.sourcePosition || ge.Bottom,
        targetPosition: p.targetPosition || ge.Top,
        hidden: p.hidden,
        xPos: $,
        yPos: b,
        xPosOrigin: A.x,
        yPosOrigin: A.y,
        selectNodesOnDrag: e.selectNodesOnDrag,
        onClick: e.onNodeClick,
        onMouseEnter: e.onNodeMouseEnter,
        onMouseMove: e.onNodeMouseMove,
        onMouseLeave: e.onNodeMouseLeave,
        onContextMenu: e.onNodeContextMenu,
        onDoubleClick: e.onNodeDoubleClick,
        selected: !!p.selected,
        isDraggable: x,
        isSelectable: S,
        isConnectable: k,
        isFocusable: _,
        resizeObserver: h,
        dragHandle: p.dragHandle,
        zIndex: ((_a = p[Ge]) == null ? void 0 : _a.z) ?? 0,
        isParent: !!((_b = p[Ge]) == null ? void 0 : _b.isParent),
        noDragClassName: e.noDragClassName,
        noPanClassName: e.noPanClassName,
        initialized: !!p.width && !!p.height,
        rfId: e.rfId,
        disableKeyboardA11y: e.disableKeyboardA11y,
        ariaLabel: p.ariaLabel,
        hasHandleBounds: !!((_c2 = p[Ge]) == null ? void 0 : _c2.handleBounds)
      });
    }));
  };
  Sm.displayName = "NodeRenderer";
  var OS = z.memo(Sm);
  const FS = (e, r, o) => o === ge.Left ? e - r : o === ge.Right ? e + r : e, BS = (e, r, o) => o === ge.Top ? e - r : o === ge.Bottom ? e + r : e, Cp = "react-flow__edgeupdater", _p = ({ position: e, centerX: r, centerY: o, radius: i = 10, onMouseDown: l, onMouseEnter: u, onMouseOut: c, type: d }) => X.createElement("circle", {
    onMouseDown: l,
    onMouseEnter: u,
    onMouseOut: c,
    className: ct([
      Cp,
      `${Cp}-${d}`
    ]),
    cx: FS(r, i, e),
    cy: BS(o, i, e),
    r: i,
    stroke: "transparent",
    fill: "transparent"
  }), jS = () => true;
  var ko = (e) => {
    const r = ({ id: o, className: i, type: l, data: u, onClick: c, onEdgeDoubleClick: d, selected: m, animated: h, label: p, labelStyle: y, labelShowBg: v, labelBgStyle: x, labelBgPadding: S, labelBgBorderRadius: k, style: _, source: E, target: $, sourceX: b, sourceY: A, targetX: G, targetY: D, sourcePosition: Q, targetPosition: q, elementsSelectable: Y, hidden: J, sourceHandleId: U, targetHandleId: Z, onContextMenu: ee, onMouseEnter: C, onMouseMove: H, onMouseLeave: O, reconnectRadius: K, onReconnect: F, onReconnectStart: R, onReconnectEnd: B, markerEnd: N, markerStart: L, rfId: oe, ariaLabel: ne, isFocusable: le, isReconnectable: ae, pathOptions: he, interactionWidth: me, disableKeyboardA11y: ve }) => {
      const Ee = z.useRef(null), [Ve, Ue] = z.useState(false), [Ke, Qe] = z.useState(false), Oe = rt(), dt = z.useMemo(() => `url('#${vc(L, oe)}')`, [
        L,
        oe
      ]), Me = z.useMemo(() => `url('#${vc(N, oe)}')`, [
        N,
        oe
      ]);
      if (J) return null;
      const ye = (We) => {
        var _a;
        const { edges: jt, addSelectedEdges: gn, unselectNodesAndEdges: yn, multiSelectionActive: Wn } = Oe.getState(), St = jt.find((nn) => nn.id === o);
        St && (Y && (Oe.setState({
          nodesSelectionActive: false
        }), St.selected && Wn ? (yn({
          nodes: [],
          edges: [
            St
          ]
        }), (_a = Ee.current) == null ? void 0 : _a.blur()) : gn([
          o
        ])), c && c(We, St));
      }, qe = xs(o, Oe.getState, d), gt = xs(o, Oe.getState, ee), Ft = xs(o, Oe.getState, C), pn = xs(o, Oe.getState, H), Nn = xs(o, Oe.getState, O), Bt = (We, jt) => {
        if (We.button !== 0) return;
        const { edges: gn, isValidConnection: yn } = Oe.getState(), Wn = jt ? $ : E, St = (jt ? Z : U) || null, nn = jt ? "target" : "source", wr = yn || jS, xr = jt, bn = gn.find((wn) => wn.id === o);
        Qe(true), R == null ? void 0 : R(We, bn, nn);
        const vn = (wn) => {
          Qe(false), B == null ? void 0 : B(wn, bn, nn);
        };
        em({
          event: We,
          handleId: St,
          nodeId: Wn,
          onConnect: (wn) => F == null ? void 0 : F(bn, wn),
          isTarget: xr,
          getState: Oe.getState,
          setState: Oe.setState,
          isValidConnection: wr,
          edgeUpdaterType: nn,
          onReconnectEnd: vn
        });
      }, Mn = (We) => Bt(We, true), mn = (We) => Bt(We, false), Jt = () => Ue(true), en = () => Ue(false), In = !Y && !c, tn = (We) => {
        var _a;
        if (!ve && H0.includes(We.key) && Y) {
          const { unselectNodesAndEdges: jt, addSelectedEdges: gn, edges: yn } = Oe.getState();
          We.key === "Escape" ? ((_a = Ee.current) == null ? void 0 : _a.blur(), jt({
            edges: [
              yn.find((St) => St.id === o)
            ]
          })) : gn([
            o
          ]);
        }
      };
      return X.createElement("g", {
        className: ct([
          "react-flow__edge",
          `react-flow__edge-${l}`,
          i,
          {
            selected: m,
            animated: h,
            inactive: In,
            updating: Ve
          }
        ]),
        onClick: ye,
        onDoubleClick: qe,
        onContextMenu: gt,
        onMouseEnter: Ft,
        onMouseMove: pn,
        onMouseLeave: Nn,
        onKeyDown: le ? tn : void 0,
        tabIndex: le ? 0 : void 0,
        role: le ? "button" : "img",
        "data-testid": `rf__edge-${o}`,
        "aria-label": ne === null ? void 0 : ne || `Edge from ${E} to ${$}`,
        "aria-describedby": le ? `${um}-${oe}` : void 0,
        ref: Ee
      }, !Ke && X.createElement(e, {
        id: o,
        source: E,
        target: $,
        selected: m,
        animated: h,
        label: p,
        labelStyle: y,
        labelShowBg: v,
        labelBgStyle: x,
        labelBgPadding: S,
        labelBgBorderRadius: k,
        data: u,
        style: _,
        sourceX: b,
        sourceY: A,
        targetX: G,
        targetY: D,
        sourcePosition: Q,
        targetPosition: q,
        sourceHandleId: U,
        targetHandleId: Z,
        markerStart: dt,
        markerEnd: Me,
        pathOptions: he,
        interactionWidth: me
      }), ae && X.createElement(X.Fragment, null, (ae === "source" || ae === true) && X.createElement(_p, {
        position: Q,
        centerX: b,
        centerY: A,
        radius: K,
        onMouseDown: Mn,
        onMouseEnter: Jt,
        onMouseOut: en,
        type: "source"
      }), (ae === "target" || ae === true) && X.createElement(_p, {
        position: q,
        centerX: G,
        centerY: D,
        radius: K,
        onMouseDown: mn,
        onMouseEnter: Jt,
        onMouseOut: en,
        type: "target"
      })));
    };
    return r.displayName = "EdgeWrapper", z.memo(r);
  };
  function HS(e) {
    const r = {
      default: ko(e.default || Ol),
      straight: ko(e.bezier || Wc),
      step: ko(e.step || Uc),
      smoothstep: ko(e.step || Xl),
      simplebezier: ko(e.simplebezier || Vc)
    }, o = {}, i = Object.keys(e).filter((l) => ![
      "default",
      "bezier"
    ].includes(l)).reduce((l, u) => (l[u] = ko(e[u] || Ol), l), o);
    return {
      ...r,
      ...i
    };
  }
  function Np(e, r, o = null) {
    const i = ((o == null ? void 0 : o.x) || 0) + r.x, l = ((o == null ? void 0 : o.y) || 0) + r.y, u = (o == null ? void 0 : o.width) || r.width, c = (o == null ? void 0 : o.height) || r.height;
    switch (e) {
      case ge.Top:
        return {
          x: i + u / 2,
          y: l
        };
      case ge.Right:
        return {
          x: i + u,
          y: l + c / 2
        };
      case ge.Bottom:
        return {
          x: i + u / 2,
          y: l + c
        };
      case ge.Left:
        return {
          x: i,
          y: l + c / 2
        };
    }
  }
  function Mp(e, r) {
    return e ? e.length === 1 || !r ? e[0] : r && e.find((o) => o.id === r) || null : null;
  }
  const VS = (e, r, o, i, l, u) => {
    const c = Np(o, e, r), d = Np(u, i, l);
    return {
      sourceX: c.x,
      sourceY: c.y,
      targetX: d.x,
      targetY: d.y
    };
  };
  function US({ sourcePos: e, targetPos: r, sourceWidth: o, sourceHeight: i, targetWidth: l, targetHeight: u, width: c, height: d, transform: m }) {
    const h = {
      x: Math.min(e.x, r.x),
      y: Math.min(e.y, r.y),
      x2: Math.max(e.x + o, r.x + l),
      y2: Math.max(e.y + i, r.y + u)
    };
    h.x === h.x2 && (h.x2 += 1), h.y === h.y2 && (h.y2 += 1);
    const p = $s({
      x: (0 - m[0]) / m[2],
      y: (0 - m[1]) / m[2],
      width: c / m[2],
      height: d / m[2]
    }), y = Math.max(0, Math.min(p.x2, h.x2) - Math.max(p.x, h.x)), v = Math.max(0, Math.min(p.y2, h.y2) - Math.max(p.y, h.y));
    return Math.ceil(y * v) > 0;
  }
  function Ip(e) {
    var _a, _b, _c2, _d, _e2;
    const r = ((_a = e == null ? void 0 : e[Ge]) == null ? void 0 : _a.handleBounds) || null, o = r && (e == null ? void 0 : e.width) && (e == null ? void 0 : e.height) && typeof ((_b = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : _b.x) < "u" && typeof ((_c2 = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : _c2.y) < "u";
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
  const WS = [
    {
      level: 0,
      isMaxLevel: true,
      edges: []
    }
  ];
  function YS(e, r, o = false) {
    let i = -1;
    const l = e.reduce((c, d) => {
      var _a, _b;
      const m = Zt(d.zIndex);
      let h = m ? d.zIndex : 0;
      if (o) {
        const p = r.get(d.target), y = r.get(d.source), v = d.selected || (p == null ? void 0 : p.selected) || (y == null ? void 0 : y.selected), x = Math.max(((_a = y == null ? void 0 : y[Ge]) == null ? void 0 : _a.z) || 0, ((_b = p == null ? void 0 : p[Ge]) == null ? void 0 : _b.z) || 0, 1e3);
        h = (m ? d.zIndex : 0) + (v ? x : 0);
      }
      return c[h] ? c[h].push(d) : c[h] = [
        d
      ], i = h > i ? h : i, c;
    }, {}), u = Object.entries(l).map(([c, d]) => {
      const m = +c;
      return {
        edges: d,
        level: m,
        isMaxLevel: m === i
      };
    });
    return u.length === 0 ? WS : u;
  }
  function GS(e, r, o) {
    const i = Re(z.useCallback((l) => e ? l.edges.filter((u) => {
      const c = r.get(u.source), d = r.get(u.target);
      return (c == null ? void 0 : c.width) && (c == null ? void 0 : c.height) && (d == null ? void 0 : d.width) && (d == null ? void 0 : d.height) && US({
        sourcePos: c.positionAbsolute || {
          x: 0,
          y: 0
        },
        targetPos: d.positionAbsolute || {
          x: 0,
          y: 0
        },
        sourceWidth: c.width,
        sourceHeight: c.height,
        targetWidth: d.width,
        targetHeight: d.height,
        width: l.width,
        height: l.height,
        transform: l.transform
      });
    }) : l.edges, [
      e,
      r
    ]));
    return YS(i, r, o);
  }
  const XS = ({ color: e = "none", strokeWidth: r = 1 }) => X.createElement("polyline", {
    style: {
      stroke: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    points: "-5,-4 0,0 -5,4"
  }), KS = ({ color: e = "none", strokeWidth: r = 1 }) => X.createElement("polyline", {
    style: {
      stroke: e,
      fill: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "-5,-4 0,0 -5,4 -5,-4"
  }), bp = {
    [To.Arrow]: XS,
    [To.ArrowClosed]: KS
  };
  function QS(e) {
    const r = rt();
    return z.useMemo(() => {
      var _a, _b;
      return Object.prototype.hasOwnProperty.call(bp, e) ? bp[e] : ((_b = (_a = r.getState()).onError) == null ? void 0 : _b.call(_a, "009", Un.error009(e)), null);
    }, [
      e
    ]);
  }
  const ZS = ({ id: e, type: r, color: o, width: i = 12.5, height: l = 12.5, markerUnits: u = "strokeWidth", strokeWidth: c, orient: d = "auto-start-reverse" }) => {
    const m = QS(r);
    return m ? X.createElement("marker", {
      className: "react-flow__arrowhead",
      id: e,
      markerWidth: `${i}`,
      markerHeight: `${l}`,
      viewBox: "-10 -10 20 20",
      markerUnits: u,
      orient: d,
      refX: "0",
      refY: "0"
    }, X.createElement(m, {
      color: o,
      strokeWidth: c
    })) : null;
  }, qS = ({ defaultColor: e, rfId: r }) => (o) => {
    const i = [];
    return o.edges.reduce((l, u) => ([
      u.markerStart,
      u.markerEnd
    ].forEach((c) => {
      if (c && typeof c == "object") {
        const d = vc(c, r);
        i.includes(d) || (l.push({
          id: d,
          color: c.color || e,
          ...c
        }), i.push(d));
      }
    }), l), []).sort((l, u) => l.id.localeCompare(u.id));
  }, km = ({ defaultColor: e, rfId: r }) => {
    const o = Re(z.useCallback(qS({
      defaultColor: e,
      rfId: r
    }), [
      e,
      r
    ]), (i, l) => !(i.length !== l.length || i.some((u, c) => u.id !== l[c].id)));
    return X.createElement("defs", null, o.map((i) => X.createElement(ZS, {
      id: i.id,
      key: i.id,
      type: i.type,
      color: i.color,
      width: i.width,
      height: i.height,
      markerUnits: i.markerUnits,
      strokeWidth: i.strokeWidth,
      orient: i.orient
    })));
  };
  km.displayName = "MarkerDefinitions";
  var JS = z.memo(km);
  const e2 = (e) => ({
    nodesConnectable: e.nodesConnectable,
    edgesFocusable: e.edgesFocusable,
    edgesUpdatable: e.edgesUpdatable,
    elementsSelectable: e.elementsSelectable,
    width: e.width,
    height: e.height,
    connectionMode: e.connectionMode,
    nodeInternals: e.nodeInternals,
    onError: e.onError
  }), Em = ({ defaultMarkerColor: e, onlyRenderVisibleElements: r, elevateEdgesOnSelect: o, rfId: i, edgeTypes: l, noPanClassName: u, onEdgeContextMenu: c, onEdgeMouseEnter: d, onEdgeMouseMove: m, onEdgeMouseLeave: h, onEdgeClick: p, onEdgeDoubleClick: y, onReconnect: v, onReconnectStart: x, onReconnectEnd: S, reconnectRadius: k, children: _, disableKeyboardA11y: E }) => {
    const { edgesFocusable: $, edgesUpdatable: b, elementsSelectable: A, width: G, height: D, connectionMode: Q, nodeInternals: q, onError: Y } = Re(e2, bt), J = GS(r, q, o);
    return G ? X.createElement(X.Fragment, null, J.map(({ level: U, edges: Z, isMaxLevel: ee }) => X.createElement("svg", {
      key: U,
      style: {
        zIndex: U
      },
      width: G,
      height: D,
      className: "react-flow__edges react-flow__container"
    }, ee && X.createElement(JS, {
      defaultColor: e,
      rfId: i
    }), X.createElement("g", null, Z.map((C) => {
      const [H, O, K] = Ip(q.get(C.source)), [F, R, B] = Ip(q.get(C.target));
      if (!K || !B) return null;
      let N = C.type || "default";
      l[N] || (Y == null ? void 0 : Y("011", Un.error011(N)), N = "default");
      const L = l[N] || l.default, oe = Q === Ur.Strict ? R.target : (R.target ?? []).concat(R.source ?? []), ne = Mp(O.source, C.sourceHandle), le = Mp(oe, C.targetHandle), ae = (ne == null ? void 0 : ne.position) || ge.Bottom, he = (le == null ? void 0 : le.position) || ge.Top, me = !!(C.focusable || $ && typeof C.focusable > "u"), ve = C.reconnectable || C.updatable, Ee = typeof v < "u" && (ve || b && typeof ve > "u");
      if (!ne || !le) return Y == null ? void 0 : Y("008", Un.error008(ne, C)), null;
      const { sourceX: Ve, sourceY: Ue, targetX: Ke, targetY: Qe } = VS(H, ne, ae, F, le, he);
      return X.createElement(L, {
        key: C.id,
        id: C.id,
        className: ct([
          C.className,
          u
        ]),
        type: N,
        data: C.data,
        selected: !!C.selected,
        animated: !!C.animated,
        hidden: !!C.hidden,
        label: C.label,
        labelStyle: C.labelStyle,
        labelShowBg: C.labelShowBg,
        labelBgStyle: C.labelBgStyle,
        labelBgPadding: C.labelBgPadding,
        labelBgBorderRadius: C.labelBgBorderRadius,
        style: C.style,
        source: C.source,
        target: C.target,
        sourceHandleId: C.sourceHandle,
        targetHandleId: C.targetHandle,
        markerEnd: C.markerEnd,
        markerStart: C.markerStart,
        sourceX: Ve,
        sourceY: Ue,
        targetX: Ke,
        targetY: Qe,
        sourcePosition: ae,
        targetPosition: he,
        elementsSelectable: A,
        onContextMenu: c,
        onMouseEnter: d,
        onMouseMove: m,
        onMouseLeave: h,
        onClick: p,
        onEdgeDoubleClick: y,
        onReconnect: v,
        onReconnectStart: x,
        onReconnectEnd: S,
        reconnectRadius: k,
        rfId: i,
        ariaLabel: C.ariaLabel,
        isFocusable: me,
        isReconnectable: Ee,
        pathOptions: "pathOptions" in C ? C.pathOptions : void 0,
        interactionWidth: C.interactionWidth,
        disableKeyboardA11y: E
      });
    })))), _) : null;
  };
  Em.displayName = "EdgeRenderer";
  var t2 = z.memo(Em);
  const n2 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
  function r2({ children: e }) {
    const r = Re(n2);
    return X.createElement("div", {
      className: "react-flow__viewport react-flow__container",
      style: {
        transform: r
      }
    }, e);
  }
  function o2(e) {
    const r = js(), o = z.useRef(false);
    z.useEffect(() => {
      !o.current && r.viewportInitialized && e && (setTimeout(() => e(r), 1), o.current = true);
    }, [
      e,
      r.viewportInitialized
    ]);
  }
  const s2 = {
    [ge.Left]: ge.Right,
    [ge.Right]: ge.Left,
    [ge.Top]: ge.Bottom,
    [ge.Bottom]: ge.Top
  }, Cm = ({ nodeId: e, handleType: r, style: o, type: i = pr.Bezier, CustomComponent: l, connectionStatus: u }) => {
    var _a, _b, _c2;
    const { fromNode: c, handleId: d, toX: m, toY: h, connectionMode: p } = Re(z.useCallback((D) => ({
      fromNode: D.nodeInternals.get(e),
      handleId: D.connectionHandleId,
      toX: (D.connectionPosition.x - D.transform[0]) / D.transform[2],
      toY: (D.connectionPosition.y - D.transform[1]) / D.transform[2],
      connectionMode: D.connectionMode
    }), [
      e
    ]), bt), y = (_a = c == null ? void 0 : c[Ge]) == null ? void 0 : _a.handleBounds;
    let v = y == null ? void 0 : y[r];
    if (p === Ur.Loose && (v = v || (y == null ? void 0 : y[r === "source" ? "target" : "source"])), !c || !v) return null;
    const x = d ? v.find((D) => D.id === d) : v[0], S = x ? x.x + x.width / 2 : (c.width ?? 0) / 2, k = x ? x.y + x.height / 2 : c.height ?? 0, _ = (((_b = c.positionAbsolute) == null ? void 0 : _b.x) ?? 0) + S, E = (((_c2 = c.positionAbsolute) == null ? void 0 : _c2.y) ?? 0) + k, $ = x == null ? void 0 : x.position, b = $ ? s2[$] : null;
    if (!$ || !b) return null;
    if (l) return X.createElement(l, {
      connectionLineType: i,
      connectionLineStyle: o,
      fromNode: c,
      fromHandle: x,
      fromX: _,
      fromY: E,
      toX: m,
      toY: h,
      fromPosition: $,
      toPosition: b,
      connectionStatus: u
    });
    let A = "";
    const G = {
      sourceX: _,
      sourceY: E,
      sourcePosition: $,
      targetX: m,
      targetY: h,
      targetPosition: b
    };
    return i === pr.Bezier ? [A] = G0(G) : i === pr.Step ? [A] = zl({
      ...G,
      borderRadius: 0
    }) : i === pr.SmoothStep ? [A] = zl(G) : i === pr.SimpleBezier ? [A] = Y0(G) : A = `M${_},${E} ${m},${h}`, X.createElement("path", {
      d: A,
      fill: "none",
      className: "react-flow__connection-path",
      style: o
    });
  };
  Cm.displayName = "ConnectionLine";
  const i2 = (e) => ({
    nodeId: e.connectionNodeId,
    handleType: e.connectionHandleType,
    nodesConnectable: e.nodesConnectable,
    connectionStatus: e.connectionStatus,
    width: e.width,
    height: e.height
  });
  function l2({ containerStyle: e, style: r, type: o, component: i }) {
    const { nodeId: l, handleType: u, nodesConnectable: c, width: d, height: m, connectionStatus: h } = Re(i2, bt);
    return !(l && u && d && c) ? null : X.createElement("svg", {
      style: e,
      width: d,
      height: m,
      className: "react-flow__edges react-flow__connectionline react-flow__container"
    }, X.createElement("g", {
      className: ct([
        "react-flow__connection",
        h
      ])
    }, X.createElement(Cm, {
      nodeId: l,
      handleType: u,
      style: r,
      type: o,
      CustomComponent: i,
      connectionStatus: h
    })));
  }
  function Tp(e, r) {
    return z.useRef(null), rt(), z.useMemo(() => r(e), [
      e
    ]);
  }
  const _m = ({ nodeTypes: e, edgeTypes: r, onMove: o, onMoveStart: i, onMoveEnd: l, onInit: u, onNodeClick: c, onEdgeClick: d, onNodeDoubleClick: m, onEdgeDoubleClick: h, onNodeMouseEnter: p, onNodeMouseMove: y, onNodeMouseLeave: v, onNodeContextMenu: x, onSelectionContextMenu: S, onSelectionStart: k, onSelectionEnd: _, connectionLineType: E, connectionLineStyle: $, connectionLineComponent: b, connectionLineContainerStyle: A, selectionKeyCode: G, selectionOnDrag: D, selectionMode: Q, multiSelectionKeyCode: q, panActivationKeyCode: Y, zoomActivationKeyCode: J, deleteKeyCode: U, onlyRenderVisibleElements: Z, elementsSelectable: ee, selectNodesOnDrag: C, defaultViewport: H, translateExtent: O, minZoom: K, maxZoom: F, preventScrolling: R, defaultMarkerColor: B, zoomOnScroll: N, zoomOnPinch: L, panOnScroll: oe, panOnScrollSpeed: ne, panOnScrollMode: le, zoomOnDoubleClick: ae, panOnDrag: he, onPaneClick: me, onPaneMouseEnter: ve, onPaneMouseMove: Ee, onPaneMouseLeave: Ve, onPaneScroll: Ue, onPaneContextMenu: Ke, onEdgeContextMenu: Qe, onEdgeMouseEnter: Oe, onEdgeMouseMove: dt, onEdgeMouseLeave: Me, onReconnect: ye, onReconnectStart: qe, onReconnectEnd: gt, reconnectRadius: Ft, noDragClassName: pn, noWheelClassName: Nn, noPanClassName: Bt, elevateEdgesOnSelect: Mn, disableKeyboardA11y: mn, nodeOrigin: Jt, nodeExtent: en, rfId: In }) => {
    const tn = Tp(e, LS), We = Tp(r, HS);
    return o2(u), X.createElement(RS, {
      onPaneClick: me,
      onPaneMouseEnter: ve,
      onPaneMouseMove: Ee,
      onPaneMouseLeave: Ve,
      onPaneContextMenu: Ke,
      onPaneScroll: Ue,
      deleteKeyCode: U,
      selectionKeyCode: G,
      selectionOnDrag: D,
      selectionMode: Q,
      onSelectionStart: k,
      onSelectionEnd: _,
      multiSelectionKeyCode: q,
      panActivationKeyCode: Y,
      zoomActivationKeyCode: J,
      elementsSelectable: ee,
      onMove: o,
      onMoveStart: i,
      onMoveEnd: l,
      zoomOnScroll: N,
      zoomOnPinch: L,
      zoomOnDoubleClick: ae,
      panOnScroll: oe,
      panOnScrollSpeed: ne,
      panOnScrollMode: le,
      panOnDrag: he,
      defaultViewport: H,
      translateExtent: O,
      minZoom: K,
      maxZoom: F,
      onSelectionContextMenu: S,
      preventScrolling: R,
      noDragClassName: pn,
      noWheelClassName: Nn,
      noPanClassName: Bt,
      disableKeyboardA11y: mn
    }, X.createElement(r2, null, X.createElement(t2, {
      edgeTypes: We,
      onEdgeClick: d,
      onEdgeDoubleClick: h,
      onlyRenderVisibleElements: Z,
      onEdgeContextMenu: Qe,
      onEdgeMouseEnter: Oe,
      onEdgeMouseMove: dt,
      onEdgeMouseLeave: Me,
      onReconnect: ye,
      onReconnectStart: qe,
      onReconnectEnd: gt,
      reconnectRadius: Ft,
      defaultMarkerColor: B,
      noPanClassName: Bt,
      elevateEdgesOnSelect: !!Mn,
      disableKeyboardA11y: mn,
      rfId: In
    }, X.createElement(l2, {
      style: $,
      type: E,
      component: b,
      containerStyle: A
    })), X.createElement("div", {
      className: "react-flow__edgelabel-renderer"
    }), X.createElement(OS, {
      nodeTypes: tn,
      onNodeClick: c,
      onNodeDoubleClick: m,
      onNodeMouseEnter: p,
      onNodeMouseMove: y,
      onNodeMouseLeave: v,
      onNodeContextMenu: x,
      selectNodesOnDrag: C,
      onlyRenderVisibleElements: Z,
      noPanClassName: Bt,
      noDragClassName: pn,
      disableKeyboardA11y: mn,
      nodeOrigin: Jt,
      nodeExtent: en,
      rfId: In
    })));
  };
  _m.displayName = "GraphView";
  var a2 = z.memo(_m);
  const kc = [
    [
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY
    ],
    [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY
    ]
  ], dr = {
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
    translateExtent: kc,
    nodeExtent: kc,
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
    connectionMode: Ur.Strict,
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
    onError: Dx,
    isValidConnection: void 0
  }, u2 = () => Qy((e, r) => ({
    ...dr,
    setNodes: (o) => {
      const { nodeInternals: i, nodeOrigin: l, elevateNodesOnSelect: u } = r();
      e({
        nodeInternals: qu(o, i, l, u)
      });
    },
    getNodes: () => Array.from(r().nodeInternals.values()),
    setEdges: (o) => {
      const { defaultEdgeOptions: i = {} } = r();
      e({
        edges: o.map((l) => ({
          ...i,
          ...l
        }))
      });
    },
    setDefaultNodesAndEdges: (o, i) => {
      const l = typeof o < "u", u = typeof i < "u", c = l ? qu(o, /* @__PURE__ */ new Map(), r().nodeOrigin, r().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
      e({
        nodeInternals: c,
        edges: u ? i : [],
        hasDefaultNodes: l,
        hasDefaultEdges: u
      });
    },
    updateNodeDimensions: (o) => {
      const { onNodesChange: i, nodeInternals: l, fitViewOnInit: u, fitViewOnInitDone: c, fitViewOnInitOptions: d, domNode: m, nodeOrigin: h } = r(), p = m == null ? void 0 : m.querySelector(".react-flow__viewport");
      if (!p) return;
      const y = window.getComputedStyle(p), { m22: v } = new window.DOMMatrixReadOnly(y.transform), x = o.reduce((k, _) => {
        const E = l.get(_.id);
        if (E == null ? void 0 : E.hidden) l.set(E.id, {
          ...E,
          [Ge]: {
            ...E[Ge],
            handleBounds: void 0
          }
        });
        else if (E) {
          const $ = jc(_.nodeElement);
          !!($.width && $.height && (E.width !== $.width || E.height !== $.height || _.forceUpdate)) && (l.set(E.id, {
            ...E,
            [Ge]: {
              ...E[Ge],
              handleBounds: {
                source: Ep(".source", _.nodeElement, v, h),
                target: Ep(".target", _.nodeElement, v, h)
              }
            },
            ...$
          }), k.push({
            id: E.id,
            type: "dimensions",
            dimensions: $
          }));
        }
        return k;
      }, []);
      dm(l, h);
      const S = c || u && !c && fm(r, {
        initial: true,
        ...d
      });
      e({
        nodeInternals: new Map(l),
        fitViewOnInitDone: S
      }), (x == null ? void 0 : x.length) > 0 && (i == null ? void 0 : i(x));
    },
    updateNodePositions: (o, i = true, l = false) => {
      const { triggerNodeChanges: u } = r(), c = o.map((d) => {
        const m = {
          id: d.id,
          type: "position",
          dragging: l
        };
        return i && (m.positionAbsolute = d.positionAbsolute, m.position = d.position), m;
      });
      u(c);
    },
    triggerNodeChanges: (o) => {
      const { onNodesChange: i, nodeInternals: l, hasDefaultNodes: u, nodeOrigin: c, getNodes: d, elevateNodesOnSelect: m } = r();
      if (o == null ? void 0 : o.length) {
        if (u) {
          const h = pm(o, d()), p = qu(h, l, c, m);
          e({
            nodeInternals: p
          });
        }
        i == null ? void 0 : i(o);
      }
    },
    addSelectedNodes: (o) => {
      const { multiSelectionActive: i, edges: l, getNodes: u } = r();
      let c, d = null;
      i ? c = o.map((m) => hr(m, true)) : (c = Eo(u(), o), d = Eo(l, [])), gl({
        changedNodes: c,
        changedEdges: d,
        get: r,
        set: e
      });
    },
    addSelectedEdges: (o) => {
      const { multiSelectionActive: i, edges: l, getNodes: u } = r();
      let c, d = null;
      i ? c = o.map((m) => hr(m, true)) : (c = Eo(l, o), d = Eo(u(), [])), gl({
        changedNodes: d,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    unselectNodesAndEdges: ({ nodes: o, edges: i } = {}) => {
      const { edges: l, getNodes: u } = r(), c = o || u(), d = i || l, m = c.map((p) => (p.selected = false, hr(p.id, false))), h = d.map((p) => hr(p.id, false));
      gl({
        changedNodes: m,
        changedEdges: h,
        get: r,
        set: e
      });
    },
    setMinZoom: (o) => {
      const { d3Zoom: i, maxZoom: l } = r();
      i == null ? void 0 : i.scaleExtent([
        o,
        l
      ]), e({
        minZoom: o
      });
    },
    setMaxZoom: (o) => {
      const { d3Zoom: i, minZoom: l } = r();
      i == null ? void 0 : i.scaleExtent([
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
      const { edges: o, getNodes: i } = r(), u = i().filter((d) => d.selected).map((d) => hr(d.id, false)), c = o.filter((d) => d.selected).map((d) => hr(d.id, false));
      gl({
        changedNodes: u,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    setNodeExtent: (o) => {
      const { nodeInternals: i } = r();
      i.forEach((l) => {
        l.positionAbsolute = Hc(l.position, o);
      }), e({
        nodeExtent: o,
        nodeInternals: new Map(i)
      });
    },
    panBy: (o) => {
      const { transform: i, width: l, height: u, d3Zoom: c, d3Selection: d, translateExtent: m } = r();
      if (!c || !d || !o.x && !o.y) return false;
      const h = Hn.translate(i[0] + o.x, i[1] + o.y).scale(i[2]), p = [
        [
          0,
          0
        ],
        [
          l,
          u
        ]
      ], y = c == null ? void 0 : c.constrain()(h, p, m);
      return c.transform(d, y), i[0] !== y.x || i[1] !== y.y || i[2] !== y.k;
    },
    cancelConnection: () => e({
      connectionNodeId: dr.connectionNodeId,
      connectionHandleId: dr.connectionHandleId,
      connectionHandleType: dr.connectionHandleType,
      connectionStatus: dr.connectionStatus,
      connectionStartHandle: dr.connectionStartHandle,
      connectionEndHandle: dr.connectionEndHandle
    }),
    reset: () => e({
      ...dr
    })
  }), Object.is), Qc = ({ children: e }) => {
    const r = z.useRef(null);
    return r.current || (r.current = u2()), X.createElement(bx, {
      value: r.current
    }, e);
  };
  Qc.displayName = "ReactFlowProvider";
  const Nm = ({ children: e }) => z.useContext(Gl) ? X.createElement(X.Fragment, null, e) : X.createElement(Qc, null, e);
  Nm.displayName = "ReactFlowWrapper";
  const c2 = {
    input: om,
    default: xc,
    output: im,
    group: Xc
  }, d2 = {
    default: Ol,
    straight: Wc,
    step: Uc,
    smoothstep: Xl,
    simplebezier: Vc
  }, f2 = [
    0,
    0
  ], h2 = [
    15,
    15
  ], p2 = {
    x: 0,
    y: 0,
    zoom: 1
  }, m2 = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    zIndex: 0
  }, Mm = z.forwardRef(({ nodes: e, edges: r, defaultNodes: o, defaultEdges: i, className: l, nodeTypes: u = c2, edgeTypes: c = d2, onNodeClick: d, onEdgeClick: m, onInit: h, onMove: p, onMoveStart: y, onMoveEnd: v, onConnect: x, onConnectStart: S, onConnectEnd: k, onClickConnectStart: _, onClickConnectEnd: E, onNodeMouseEnter: $, onNodeMouseMove: b, onNodeMouseLeave: A, onNodeContextMenu: G, onNodeDoubleClick: D, onNodeDragStart: Q, onNodeDrag: q, onNodeDragStop: Y, onNodesDelete: J, onEdgesDelete: U, onSelectionChange: Z, onSelectionDragStart: ee, onSelectionDrag: C, onSelectionDragStop: H, onSelectionContextMenu: O, onSelectionStart: K, onSelectionEnd: F, connectionMode: R = Ur.Strict, connectionLineType: B = pr.Bezier, connectionLineStyle: N, connectionLineComponent: L, connectionLineContainerStyle: oe, deleteKeyCode: ne = "Backspace", selectionKeyCode: le = "Shift", selectionOnDrag: ae = false, selectionMode: he = Rs.Full, panActivationKeyCode: me = "Space", multiSelectionKeyCode: ve = Dl() ? "Meta" : "Control", zoomActivationKeyCode: Ee = Dl() ? "Meta" : "Control", snapToGrid: Ve = false, snapGrid: Ue = h2, onlyRenderVisibleElements: Ke = false, selectNodesOnDrag: Qe = true, nodesDraggable: Oe, nodesConnectable: dt, nodesFocusable: Me, nodeOrigin: ye = f2, edgesFocusable: qe, edgesUpdatable: gt, elementsSelectable: Ft, defaultViewport: pn = p2, minZoom: Nn = 0.5, maxZoom: Bt = 2, translateExtent: Mn = kc, preventScrolling: mn = true, nodeExtent: Jt, defaultMarkerColor: en = "#b1b1b7", zoomOnScroll: In = true, zoomOnPinch: tn = true, panOnScroll: We = false, panOnScrollSpeed: jt = 0.5, panOnScrollMode: gn = Or.Free, zoomOnDoubleClick: yn = true, panOnDrag: Wn = true, onPaneClick: St, onPaneMouseEnter: nn, onPaneMouseMove: wr, onPaneMouseLeave: xr, onPaneScroll: bn, onPaneContextMenu: vn, children: Tn, onEdgeContextMenu: wn, onEdgeDoubleClick: Vs, onEdgeMouseEnter: Us, onEdgeMouseMove: Ws, onEdgeMouseLeave: Ys, onEdgeUpdate: Ro, onEdgeUpdateStart: Gs, onEdgeUpdateEnd: Sr, onReconnect: Po, onReconnectStart: kr, onReconnectEnd: Jl, reconnectRadius: Er = 10, edgeUpdaterRadius: Yr = 10, onNodesChange: Gr, onEdgesChange: Lo, noDragClassName: ea = "nodrag", noWheelClassName: ta = "nowheel", noPanClassName: Xs = "nopan", fitView: An = false, fitViewOptions: Ks, connectOnClick: Qs = true, attributionPosition: na, proOptions: Zs, defaultEdgeOptions: qs, elevateNodesOnSelect: Js = true, elevateEdgesOnSelect: ei = false, disableKeyboardA11y: ti = false, autoPanOnConnect: ra = true, autoPanOnNodeDrag: Be = true, connectionRadius: oa = 20, isValidConnection: Do, onError: ni, style: Xr, id: ri, nodeDragThreshold: oi, ...Kr }, Ht) => {
    const zo = ri || "1";
    return X.createElement("div", {
      ...Kr,
      style: {
        ...Xr,
        ...m2
      },
      ref: Ht,
      className: ct([
        "react-flow",
        l
      ]),
      "data-testid": "rf__wrapper",
      id: ri
    }, X.createElement(Nm, null, X.createElement(a2, {
      onInit: h,
      onMove: p,
      onMoveStart: y,
      onMoveEnd: v,
      onNodeClick: d,
      onEdgeClick: m,
      onNodeMouseEnter: $,
      onNodeMouseMove: b,
      onNodeMouseLeave: A,
      onNodeContextMenu: G,
      onNodeDoubleClick: D,
      nodeTypes: u,
      edgeTypes: c,
      connectionLineType: B,
      connectionLineStyle: N,
      connectionLineComponent: L,
      connectionLineContainerStyle: oe,
      selectionKeyCode: le,
      selectionOnDrag: ae,
      selectionMode: he,
      deleteKeyCode: ne,
      multiSelectionKeyCode: ve,
      panActivationKeyCode: me,
      zoomActivationKeyCode: Ee,
      onlyRenderVisibleElements: Ke,
      selectNodesOnDrag: Qe,
      defaultViewport: pn,
      translateExtent: Mn,
      minZoom: Nn,
      maxZoom: Bt,
      preventScrolling: mn,
      zoomOnScroll: In,
      zoomOnPinch: tn,
      zoomOnDoubleClick: yn,
      panOnScroll: We,
      panOnScrollSpeed: jt,
      panOnScrollMode: gn,
      panOnDrag: Wn,
      onPaneClick: St,
      onPaneMouseEnter: nn,
      onPaneMouseMove: wr,
      onPaneMouseLeave: xr,
      onPaneScroll: bn,
      onPaneContextMenu: vn,
      onSelectionContextMenu: O,
      onSelectionStart: K,
      onSelectionEnd: F,
      onEdgeContextMenu: wn,
      onEdgeDoubleClick: Vs,
      onEdgeMouseEnter: Us,
      onEdgeMouseMove: Ws,
      onEdgeMouseLeave: Ys,
      onReconnect: Po ?? Ro,
      onReconnectStart: kr ?? Gs,
      onReconnectEnd: Jl ?? Sr,
      reconnectRadius: Er ?? Yr,
      defaultMarkerColor: en,
      noDragClassName: ea,
      noWheelClassName: ta,
      noPanClassName: Xs,
      elevateEdgesOnSelect: ei,
      rfId: zo,
      disableKeyboardA11y: ti,
      nodeOrigin: ye,
      nodeExtent: Jt
    }), X.createElement(sS, {
      nodes: e,
      edges: r,
      defaultNodes: o,
      defaultEdges: i,
      onConnect: x,
      onConnectStart: S,
      onConnectEnd: k,
      onClickConnectStart: _,
      onClickConnectEnd: E,
      nodesDraggable: Oe,
      nodesConnectable: dt,
      nodesFocusable: Me,
      edgesFocusable: qe,
      edgesUpdatable: gt,
      elementsSelectable: Ft,
      elevateNodesOnSelect: Js,
      minZoom: Nn,
      maxZoom: Bt,
      nodeExtent: Jt,
      onNodesChange: Gr,
      onEdgesChange: Lo,
      snapToGrid: Ve,
      snapGrid: Ue,
      connectionMode: R,
      translateExtent: Mn,
      connectOnClick: Qs,
      defaultEdgeOptions: qs,
      fitView: An,
      fitViewOptions: Ks,
      onNodesDelete: J,
      onEdgesDelete: U,
      onNodeDragStart: Q,
      onNodeDrag: q,
      onNodeDragStop: Y,
      onSelectionDrag: C,
      onSelectionDragStart: ee,
      onSelectionDragStop: H,
      noPanClassName: Xs,
      nodeOrigin: ye,
      rfId: zo,
      autoPanOnConnect: ra,
      autoPanOnNodeDrag: Be,
      onError: ni,
      connectionRadius: oa,
      isValidConnection: Do,
      nodeDragThreshold: oi
    }), X.createElement(rS, {
      onSelectionChange: Z
    }), Tn, X.createElement(Ax, {
      proOptions: Zs,
      position: na
    }), X.createElement(cS, {
      rfId: zo,
      disableKeyboardA11y: ti
    })));
  });
  Mm.displayName = "ReactFlow";
  const g2 = (e) => {
    var _a;
    return (_a = e.domNode) == null ? void 0 : _a.querySelector(".react-flow__edgelabel-renderer");
  };
  function y2({ children: e }) {
    const r = Re(g2);
    return r ? Ix.createPortal(e, r) : null;
  }
  function Im(e, r) {
    if (Object.is(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    if (e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return false;
      for (const [i, l] of e) if (!Object.is(l, r.get(i))) return false;
      return true;
    }
    if (e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return false;
      for (const i of e) if (!r.has(i)) return false;
      return true;
    }
    const o = Object.keys(e);
    if (o.length !== Object.keys(r).length) return false;
    for (const i of o) if (!Object.prototype.hasOwnProperty.call(r, i) || !Object.is(e[i], r[i])) return false;
    return true;
  }
  const bm = ({ id: e, x: r, y: o, width: i, height: l, style: u, color: c, strokeColor: d, strokeWidth: m, className: h, borderRadius: p, shapeRendering: y, onClick: v, selected: x }) => {
    const { background: S, backgroundColor: k } = u || {}, _ = c || S || k;
    return X.createElement("rect", {
      className: ct([
        "react-flow__minimap-node",
        {
          selected: x
        },
        h
      ]),
      x: r,
      y: o,
      rx: p,
      ry: p,
      width: i,
      height: l,
      fill: _,
      stroke: d,
      strokeWidth: m,
      shapeRendering: y,
      onClick: v ? (E) => v(E, e) : void 0
    });
  };
  bm.displayName = "MiniMapNode";
  var v2 = z.memo(bm);
  const w2 = (e) => e.nodeOrigin, x2 = (e) => e.getNodes().filter((r) => !r.hidden && r.width && r.height), nc = (e) => e instanceof Function ? e : () => e;
  function S2({ nodeStrokeColor: e = "transparent", nodeColor: r = "#e2e2e2", nodeClassName: o = "", nodeBorderRadius: i = 5, nodeStrokeWidth: l = 2, nodeComponent: u = v2, onClick: c }) {
    const d = Re(x2, Im), m = Re(w2), h = nc(r), p = nc(e), y = nc(o), v = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
    return X.createElement(X.Fragment, null, d.map((x) => {
      const { x: S, y: k } = Br(x, m).positionAbsolute;
      return X.createElement(u, {
        key: x.id,
        x: S,
        y: k,
        width: x.width,
        height: x.height,
        style: x.style,
        selected: x.selected,
        className: y(x),
        color: h(x),
        borderRadius: i,
        strokeColor: p(x),
        strokeWidth: l,
        shapeRendering: v,
        onClick: c,
        id: x.id
      });
    }));
  }
  var k2 = z.memo(S2);
  const E2 = 200, C2 = 150, _2 = (e) => {
    const r = e.getNodes(), o = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2]
    };
    return {
      viewBB: o,
      boundingRect: r.length > 0 ? Px(Kl(r, e.nodeOrigin), o) : o,
      rfId: e.rfId
    };
  }, N2 = "react-flow__minimap-desc";
  function Tm({ style: e, className: r, nodeStrokeColor: o = "transparent", nodeColor: i = "#e2e2e2", nodeClassName: l = "", nodeBorderRadius: u = 5, nodeStrokeWidth: c = 2, nodeComponent: d, maskColor: m = "rgb(240, 240, 240, 0.6)", maskStrokeColor: h = "none", maskStrokeWidth: p = 1, position: y = "bottom-right", onClick: v, onNodeClick: x, pannable: S = false, zoomable: k = false, ariaLabel: _ = "React Flow mini map", inversePan: E = false, zoomStep: $ = 10, offsetScale: b = 5 }) {
    const A = rt(), G = z.useRef(null), { boundingRect: D, viewBB: Q, rfId: q } = Re(_2, Im), Y = (e == null ? void 0 : e.width) ?? E2, J = (e == null ? void 0 : e.height) ?? C2, U = D.width / Y, Z = D.height / J, ee = Math.max(U, Z), C = ee * Y, H = ee * J, O = b * ee, K = D.x - (C - D.width) / 2 - O, F = D.y - (H - D.height) / 2 - O, R = C + O * 2, B = H + O * 2, N = `${N2}-${q}`, L = z.useRef(0);
    L.current = ee, z.useEffect(() => {
      if (G.current) {
        const le = Qt(G.current), ae = (ve) => {
          const { transform: Ee, d3Selection: Ve, d3Zoom: Ue } = A.getState();
          if (ve.sourceEvent.type !== "wheel" || !Ve || !Ue) return;
          const Ke = -ve.sourceEvent.deltaY * (ve.sourceEvent.deltaMode === 1 ? 0.05 : ve.sourceEvent.deltaMode ? 1 : 2e-3) * $, Qe = Ee[2] * Math.pow(2, Ke);
          Ue.scaleTo(Ve, Qe);
        }, he = (ve) => {
          const { transform: Ee, d3Selection: Ve, d3Zoom: Ue, translateExtent: Ke, width: Qe, height: Oe } = A.getState();
          if (ve.sourceEvent.type !== "mousemove" || !Ve || !Ue) return;
          const dt = L.current * Math.max(1, Ee[2]) * (E ? -1 : 1), Me = {
            x: Ee[0] - ve.sourceEvent.movementX * dt,
            y: Ee[1] - ve.sourceEvent.movementY * dt
          }, ye = [
            [
              0,
              0
            ],
            [
              Qe,
              Oe
            ]
          ], qe = Hn.translate(Me.x, Me.y).scale(Ee[2]), gt = Ue.constrain()(qe, ye, Ke);
          Ue.transform(Ve, gt);
        }, me = D0().on("zoom", S ? he : null).on("zoom.wheel", k ? ae : null);
        return le.call(me), () => {
          le.on("zoom", null);
        };
      }
    }, [
      S,
      k,
      E,
      $
    ]);
    const oe = v ? (le) => {
      const ae = dn(le);
      v(le, {
        x: ae[0],
        y: ae[1]
      });
    } : void 0, ne = x ? (le, ae) => {
      const he = A.getState().nodeInternals.get(ae);
      x(le, he);
    } : void 0;
    return X.createElement(Bc, {
      position: y,
      style: e,
      className: ct([
        "react-flow__minimap",
        r
      ]),
      "data-testid": "rf__minimap"
    }, X.createElement("svg", {
      width: Y,
      height: J,
      viewBox: `${K} ${F} ${R} ${B}`,
      role: "img",
      "aria-labelledby": N,
      ref: G,
      onClick: oe
    }, _ && X.createElement("title", {
      id: N
    }, _), X.createElement(k2, {
      onClick: ne,
      nodeColor: i,
      nodeStrokeColor: o,
      nodeBorderRadius: u,
      nodeClassName: l,
      nodeStrokeWidth: c,
      nodeComponent: d
    }), X.createElement("path", {
      className: "react-flow__minimap-mask",
      d: `M${K - O},${F - O}h${R + O * 2}v${B + O * 2}h${-R - O * 2}z
        M${Q.x},${Q.y}h${Q.width}v${Q.height}h${-Q.width}z`,
      fill: m,
      fillRule: "evenodd",
      stroke: h,
      strokeWidth: p,
      pointerEvents: "none"
    })));
  }
  Tm.displayName = "MiniMap";
  var M2 = z.memo(Tm);
  function I2(e, r) {
    if (Object.is(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    if (e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return false;
      for (const [i, l] of e) if (!Object.is(l, r.get(i))) return false;
      return true;
    }
    if (e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return false;
      for (const i of e) if (!r.has(i)) return false;
      return true;
    }
    const o = Object.keys(e);
    if (o.length !== Object.keys(r).length) return false;
    for (const i of o) if (!Object.prototype.hasOwnProperty.call(r, i) || !Object.is(e[i], r[i])) return false;
    return true;
  }
  function b2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, X.createElement("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
    }));
  }
  function T2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5"
    }, X.createElement("path", {
      d: "M0 0h32v4.2H0z"
    }));
  }
  function A2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30"
    }, X.createElement("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
    }));
  }
  function $2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, X.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
    }));
  }
  function R2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, X.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
    }));
  }
  const Ns = ({ children: e, className: r, ...o }) => X.createElement("button", {
    type: "button",
    className: ct([
      "react-flow__controls-button",
      r
    ]),
    ...o
  }, e);
  Ns.displayName = "ControlButton";
  const P2 = (e) => ({
    isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
    minZoomReached: e.transform[2] <= e.minZoom,
    maxZoomReached: e.transform[2] >= e.maxZoom
  }), Am = ({ style: e, showZoom: r = true, showFitView: o = true, showInteractive: i = true, fitViewOptions: l, onZoomIn: u, onZoomOut: c, onFitView: d, onInteractiveChange: m, className: h, children: p, position: y = "bottom-left" }) => {
    const v = rt(), [x, S] = z.useState(false), { isInteractive: k, minZoomReached: _, maxZoomReached: E } = Re(P2, I2), { zoomIn: $, zoomOut: b, fitView: A } = js();
    if (z.useEffect(() => {
      S(true);
    }, []), !x) return null;
    const G = () => {
      $(), u == null ? void 0 : u();
    }, D = () => {
      b(), c == null ? void 0 : c();
    }, Q = () => {
      A(l), d == null ? void 0 : d();
    }, q = () => {
      v.setState({
        nodesDraggable: !k,
        nodesConnectable: !k,
        elementsSelectable: !k
      }), m == null ? void 0 : m(!k);
    };
    return X.createElement(Bc, {
      className: ct([
        "react-flow__controls",
        h
      ]),
      position: y,
      style: e,
      "data-testid": "rf__controls"
    }, r && X.createElement(X.Fragment, null, X.createElement(Ns, {
      onClick: G,
      className: "react-flow__controls-zoomin",
      title: "zoom in",
      "aria-label": "zoom in",
      disabled: E
    }, X.createElement(b2, null)), X.createElement(Ns, {
      onClick: D,
      className: "react-flow__controls-zoomout",
      title: "zoom out",
      "aria-label": "zoom out",
      disabled: _
    }, X.createElement(T2, null))), o && X.createElement(Ns, {
      className: "react-flow__controls-fitview",
      onClick: Q,
      title: "fit view",
      "aria-label": "fit view"
    }, X.createElement(A2, null)), i && X.createElement(Ns, {
      className: "react-flow__controls-interactive",
      onClick: q,
      title: "toggle interactivity",
      "aria-label": "toggle interactivity"
    }, k ? X.createElement(R2, null) : X.createElement($2, null)), p);
  };
  Am.displayName = "Controls";
  var L2 = z.memo(Am);
  function D2(e, r) {
    if (Object.is(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    if (e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return false;
      for (const [i, l] of e) if (!Object.is(l, r.get(i))) return false;
      return true;
    }
    if (e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return false;
      for (const i of e) if (!r.has(i)) return false;
      return true;
    }
    const o = Object.keys(e);
    if (o.length !== Object.keys(r).length) return false;
    for (const i of o) if (!Object.prototype.hasOwnProperty.call(r, i) || !Object.is(e[i], r[i])) return false;
    return true;
  }
  var qt;
  (function(e) {
    e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
  })(qt || (qt = {}));
  function z2({ color: e, dimensions: r, lineWidth: o }) {
    return X.createElement("path", {
      stroke: e,
      strokeWidth: o,
      d: `M${r[0] / 2} 0 V${r[1]} M0 ${r[1] / 2} H${r[0]}`
    });
  }
  function O2({ color: e, radius: r }) {
    return X.createElement("circle", {
      cx: r,
      cy: r,
      r,
      fill: e
    });
  }
  const F2 = {
    [qt.Dots]: "#91919a",
    [qt.Lines]: "#eee",
    [qt.Cross]: "#e2e2e2"
  }, B2 = {
    [qt.Dots]: 1,
    [qt.Lines]: 1,
    [qt.Cross]: 6
  }, j2 = (e) => ({
    transform: e.transform,
    patternId: `pattern-${e.rfId}`
  });
  function $m({ id: e, variant: r = qt.Dots, gap: o = 20, size: i, lineWidth: l = 1, offset: u = 2, color: c, style: d, className: m }) {
    const h = z.useRef(null), { transform: p, patternId: y } = Re(j2, D2), v = c || F2[r], x = i || B2[r], S = r === qt.Dots, k = r === qt.Cross, _ = Array.isArray(o) ? o : [
      o,
      o
    ], E = [
      _[0] * p[2] || 1,
      _[1] * p[2] || 1
    ], $ = x * p[2], b = k ? [
      $,
      $
    ] : E, A = S ? [
      $ / u,
      $ / u
    ] : [
      b[0] / u,
      b[1] / u
    ];
    return X.createElement("svg", {
      className: ct([
        "react-flow__background",
        m
      ]),
      style: {
        ...d,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
      },
      ref: h,
      "data-testid": "rf__background"
    }, X.createElement("pattern", {
      id: y + e,
      x: p[0] % E[0],
      y: p[1] % E[1],
      width: E[0],
      height: E[1],
      patternUnits: "userSpaceOnUse",
      patternTransform: `translate(-${A[0]},-${A[1]})`
    }, S ? X.createElement(O2, {
      color: v,
      radius: $ / u
    }) : X.createElement(z2, {
      dimensions: b,
      color: v,
      lineWidth: l
    })), X.createElement("rect", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      fill: `url(#${y + e})`
    }));
  }
  $m.displayName = "Background";
  var H2 = z.memo($m);
  const Ao = 220, Wr = 88, Ap = 160, Hs = 280, Ql = 118, Zl = 32, jr = 720, V2 = 12, _l = {
    0: 0,
    1: 400,
    2: 800,
    3: 1200,
    4: 1600,
    5: 2e3,
    6: 2400
  }, U2 = {
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
  }, W2 = {
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
  }, Y2 = [
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
  ], G2 = 1e3, X2 = 2e3, $p = (e) => {
    let r;
    const o = /* @__PURE__ */ new Set(), i = (h, p) => {
      const y = typeof h == "function" ? h(r) : h;
      if (!Object.is(y, r)) {
        const v = r;
        r = p ?? (typeof y != "object" || y === null) ? y : Object.assign({}, r, y), o.forEach((x) => x(r, v));
      }
    }, l = () => r, d = {
      setState: i,
      getState: l,
      getInitialState: () => m,
      subscribe: (h) => (o.add(h), () => o.delete(h))
    }, m = r = e(i, l, d);
    return d;
  }, K2 = ((e) => e ? $p(e) : $p), Q2 = (e) => e;
  function Z2(e, r = Q2) {
    const o = X.useSyncExternalStore(e.subscribe, X.useCallback(() => r(e.getState()), [
      e,
      r
    ]), X.useCallback(() => r(e.getInitialState()), [
      e,
      r
    ]));
    return X.useDebugValue(o), o;
  }
  const Rp = (e) => {
    const r = K2(e), o = (i) => Z2(r, i);
    return Object.assign(o, r), o;
  }, ql = ((e) => e ? Rp(e) : Rp);
  function q2(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      if (o.data.kind !== "cluster") continue;
      const i = o.data.cluster.hierarchyPath;
      if (i.length <= 1) continue;
      const l = `hierarchy:${i.slice(0, -1).join(":")}`;
      let u = r.get(l);
      u || (u = [], r.set(l, u)), u.push(o.id);
    }
    return r;
  }
  function Pp(e, r) {
    const o = [], i = [
      e
    ];
    for (; i.length > 0; ) {
      const l = i.pop(), u = r.get(l);
      if (u) for (const c of u) o.push(c), i.push(c);
    }
    return o;
  }
  const be = ql((e) => ({
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
      childClusterMap: q2(r)
    }),
    setEdges: (r) => e({
      edges: r
    }),
    updateNodePosition: (r, o) => e((i) => ({
      nodes: i.nodes.map((l) => l.id === r ? {
        ...l,
        position: o
      } : l)
    })),
    setViewport: (r) => e({
      viewport: r
    }),
    toggleCluster: (r) => e((o) => {
      const i = new Set(o.expandedClusterIds), l = [
        ...o.expansionPath
      ];
      if (i.has(r)) {
        i.delete(r);
        const u = l.indexOf(r);
        u !== -1 && l.splice(u);
      } else i.add(r), l.push(r);
      return {
        expandedClusterIds: i,
        expansionPath: l
      };
    }),
    expandClusterForComponent: (r) => e((o) => {
      const i = o.nodes.find((c) => c.data.kind === "cluster" && c.data.cluster.componentIds.includes(r));
      if (!i || o.expandedClusterIds.has(i.id)) return {};
      const l = new Set(o.expandedClusterIds);
      l.add(i.id);
      const u = [
        ...o.expansionPath,
        i.id
      ];
      return {
        expandedClusterIds: l,
        expansionPath: u
      };
    }),
    expandToLevel: (r) => e((o) => {
      const i = new Set(o.expandedClusterIds), l = [
        ...o.expansionPath
      ];
      if (i.has(r)) {
        i.delete(r);
        const u = l.indexOf(r);
        u !== -1 && l.splice(u);
        const c = Pp(r, o.childClusterMap);
        for (const d of c) i.delete(d);
      } else i.add(r), l.push(r);
      return {
        expandedClusterIds: i,
        expansionPath: l
      };
    }),
    collapseToLevel: (r) => e((o) => {
      const i = [
        ...o.expansionPath
      ], l = i.indexOf(r);
      if (l === -1) return {};
      const u = i.splice(l), c = new Set(o.expandedClusterIds);
      for (const d of u) {
        c.delete(d);
        const m = Pp(d, o.childClusterMap);
        for (const h of m) c.delete(h);
      }
      return {
        expandedClusterIds: c,
        expansionPath: i
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
  function Rm(e) {
    var _a, _b, _c2, _d;
    const r = new Map(e.components.map((u) => [
      u.id,
      u
    ])), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
    for (const u of e.components) o.set(u.id, []), i.set(u.id, []), l.set(u.id, []);
    for (const u of e.connections) (_a = i.get(u.sourceComponentId)) == null ? void 0 : _a.push(u), (_b = o.get(u.targetComponentId)) == null ? void 0 : _b.push(u), (_c2 = l.get(u.sourceComponentId)) == null ? void 0 : _c2.push(u.id), (_d = l.get(u.targetComponentId)) == null ? void 0 : _d.push(u.id);
    return {
      componentById: r,
      incomingByComponentId: o,
      outgoingByComponentId: i,
      edgeIdsByComponentId: l
    };
  }
  const Lp = Rm({
    components: [],
    connections: []
  }), Dp = [], zt = ql((e, r) => ({
    model: null,
    ...Lp,
    loadModel: (o) => e({
      model: o,
      ...Rm(o)
    }),
    clearModel: () => e({
      model: null,
      ...Lp
    }),
    getComponent: (o) => r().componentById.get(o),
    getIncoming: (o) => r().incomingByComponentId.get(o) ?? Dp,
    getOutgoing: (o) => r().outgoingByComponentId.get(o) ?? Dp
  }));
  function rc() {
    return {
      highlightedNodeIds: /* @__PURE__ */ new Set(),
      highlightedEdgeIds: /* @__PURE__ */ new Set(),
      selectedNodeIds: /* @__PURE__ */ new Set()
    };
  }
  function J2(e) {
    var _a;
    const r = zt.getState(), o = new Set(e), i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = [
      ...o
    ], c = u[u.length - 1] ?? null;
    if (o.size === 0) return {
      selectedNodeId: null,
      selectedNodeIds: o,
      highlightedNodeIds: i,
      highlightedEdgeIds: l
    };
    if (o.size === 1) {
      const [d] = o;
      if (d) {
        i.add(d);
        for (const m of r.getIncoming(d)) i.add(m.sourceComponentId), l.add(m.id);
        for (const m of r.getOutgoing(d)) i.add(m.targetComponentId), l.add(m.id);
        return {
          selectedNodeId: d,
          selectedNodeIds: o,
          highlightedNodeIds: i,
          highlightedEdgeIds: l
        };
      }
    }
    for (const d of o) i.add(d);
    for (const d of ((_a = r.model) == null ? void 0 : _a.connections) ?? []) o.has(d.sourceComponentId) && o.has(d.targetComponentId) && l.add(d.id);
    return {
      selectedNodeId: c,
      selectedNodeIds: o,
      highlightedNodeIds: i,
      highlightedEdgeIds: l
    };
  }
  const $e = ql((e) => ({
    selectedNodeId: null,
    expandedNodeId: null,
    searchQuery: "",
    ...rc(),
    selectNode: (r, o) => {
      const l = zt.getState().model;
      if (!r || !l) {
        be.setState({
          sidebarCollapsed: true
        }), e({
          selectedNodeId: null,
          ...rc()
        });
        return;
      }
      be.setState({
        sidebarCollapsed: false
      });
      const u = new Set($e.getState().selectedNodeIds);
      (o == null ? void 0 : o.additive) ?? false ? u.has(r) ? u.delete(r) : u.add(r) : (u.clear(), u.add(r));
      const d = J2(u);
      e(d);
    },
    clearSelection: () => {
      be.setState({
        sidebarCollapsed: true
      }), e({
        selectedNodeId: null,
        ...rc()
      });
    },
    expandNode: (r) => e((o) => ({
      expandedNodeId: o.expandedNodeId === r ? null : r
    })),
    setSearchQuery: (r) => e({
      searchQuery: r
    })
  })), ek = 1.35;
  function Zc() {
    const e = js(), r = $e((i) => i.selectNode), o = be((i) => i.expandClusterForComponent);
    return z.useCallback((i) => {
      r(i), o(i);
      const l = () => {
        const u = e.getNode(i);
        if (!u) return;
        const c = u.width ?? Ao, d = u.height ?? Wr;
        e.setCenter(u.position.x + c / 2, u.position.y + d / 2, {
          duration: 420,
          zoom: ek
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
  function tk() {
    if (typeof window > "u") return "dark";
    const e = localStorage.getItem("ip-xact-theme");
    return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  const nt = ql((e, r) => ({
    theme: tk(),
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
  }));
  function nk() {
    const r = nt((o) => o.theme) === "dark";
    return I.jsx(H2, {
      color: r ? "rgba(148, 163, 184, 0.18)" : "rgba(0, 0, 0, 0.08)",
      gap: 24,
      size: 1.2,
      variant: qt.Dots
    });
  }
  const wt = {
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
  };
  function rk(e, r, o, i, l, u) {
    const { width: c, height: d } = e.canvas;
    e.clearRect(0, 0, c, d);
    const m = -i.x / i.zoom, h = -i.y / i.zoom, p = m + c / i.zoom, y = h + d / i.zoom, v = [];
    for (const S of r) {
      const k = Nl(S), _ = Ml(S), E = S.position.x + k, $ = S.position.y + _;
      S.position.x < p && E > m && S.position.y < y && $ > h && v.push(S);
    }
    const x = new Map(v.map((S) => [
      S.id,
      S
    ]));
    e.save(), e.translate(i.x, i.y), e.scale(i.zoom, i.zoom);
    for (const S of o) {
      const k = x.get(S.source), _ = x.get(S.target);
      if (!k || !_) continue;
      const E = k.position.x + Nl(k) / 2, $ = k.position.y + Ml(k) / 2, b = _.position.x + Nl(_) / 2, A = _.position.y + Ml(_) / 2;
      e.beginPath(), e.moveTo(E, $), e.lineTo(b, A), e.strokeStyle = u.has(S.id) ? "#22d3ee" : "#64748b", e.lineWidth = 1.5 / i.zoom, e.globalAlpha = u.has(S.id) ? 0.9 : 0.4, e.stroke();
    }
    e.globalAlpha = 1;
    for (const S of v) ok(e, S, i.zoom, l.has(S.id));
    e.restore(), e.fillStyle = "rgba(15, 23, 42, 0.8)", e.fillRect(8, d - 32, 180, 24), e.fillStyle = "#94a3b8", e.font = "12px Inter, sans-serif", e.fillText(`${v.length} / ${r.length} nodes visible`, 16, d - 14);
  }
  function ok(e, r, o, i) {
    const l = r.position.x, u = r.position.y, c = Nl(r), d = Ml(r);
    if (r.data.kind === "busChannel") {
      ik(e, l, u, c, d, r, o);
      return;
    }
    if (r.data.kind === "cluster") {
      sk(e, l, u, c, d, r, o, i);
      return;
    }
    const m = r.data, h = wt[m.component.type];
    e.shadowColor = "rgba(0, 0, 0, 0.15)", e.shadowBlur = 8, e.shadowOffsetY = 2, e.fillStyle = "#ffffff", e.strokeStyle = i ? "#22d3ee" : `${h.border}60`, e.lineWidth = i ? 2 / o : 1 / o, qc(e, l, u, c, d, 12 / o), e.fill(), e.shadowColor = "transparent", e.fillStyle = h.base, e.beginPath(), e.roundRect(l, u, 6 / o, d, [
      12 / o,
      0,
      0,
      12 / o
    ]), e.fill();
    const p = Math.max(24, 40 * o), y = l + 16 / o, v = u + (d - p) / 2;
    e.fillStyle = `${h.border}18`, e.strokeStyle = `${h.border}60`, e.lineWidth = 1 / o, e.beginPath(), e.roundRect(y, v, p, p, 6 / o), e.fill(), e.stroke(), e.fillStyle = h.border, e.font = `bold ${Math.max(8, 10 / o)}px Inter, sans-serif`, e.textAlign = "center", e.textBaseline = "middle";
    const x = m.component.type.slice(0, 3).toUpperCase();
    e.fillText(x, y + p / 2, v + p / 2), e.fillStyle = "#0f172a", e.font = `600 ${Math.max(10, 13 / o)}px Inter, sans-serif`, e.textAlign = "left", e.textBaseline = "top";
    const S = y + p + 8 / o, k = c - (S - l) - 8 / o;
    e.fillText(Ec(e, m.component.name, k), S, u + 14 / o), e.fillStyle = "#64748b", e.font = `${Math.max(8, 10 / o)}px "SF Mono", monospace`, e.fillText(Ec(e, m.component.id, k), S, u + 30 / o), e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function sk(e, r, o, i, l, u, c, d) {
    var _a;
    if (u.data.kind !== "cluster") return;
    const m = u.data.cluster;
    e.shadowColor = "rgba(0, 0, 0, 0.1)", e.shadowBlur = 6, e.shadowOffsetY = 2, e.fillStyle = "#ffffff", e.strokeStyle = d ? "#22d3ee" : "#cbd5e1", e.lineWidth = d ? 2 / c : 1 / c, qc(e, r, o, i, l, 12 / c), e.fill(), e.shadowColor = "transparent";
    const h = Object.keys(m.typeBreakdown ?? {})[0], p = h ? (_a = wt[h]) == null ? void 0 : _a.base : "#94a3b8";
    if (e.fillStyle = p, e.beginPath(), e.roundRect(r, o, 6 / c, l, [
      12 / c,
      0,
      0,
      12 / c
    ]), e.fill(), e.fillStyle = "#0f172a", e.font = `600 ${Math.max(10, 13 / c)}px Inter, sans-serif`, e.textAlign = "left", e.textBaseline = "top", e.fillText(Ec(e, m.name, i - 20 / c), r + 16 / c, o + 14 / c), e.fillStyle = "#64748b", e.font = `${Math.max(8, 11 / c)}px Inter, sans-serif`, e.fillText(`${m.componentCount} blocks`, r + 16 / c, o + 34 / c), m.typeBreakdown) {
      const y = Object.entries(m.typeBreakdown), v = o + 52 / c;
      let x = r + 16 / c;
      for (const [S, k] of y.slice(0, 3)) {
        const _ = `${S}:${k}`, E = e.measureText(_).width + 12 / c;
        e.fillStyle = "#f1f5f9", e.beginPath(), e.roundRect(x, v, E, 16 / c, 4 / c), e.fill(), e.fillStyle = "#64748b", e.font = `${Math.max(7, 9 / c)}px Inter, sans-serif`, e.fillText(_, x + 6 / c, v + 3 / c), x += E + 4 / c;
      }
    }
    e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function ik(e, r, o, i, l, u, c) {
    if (u.data.kind !== "busChannel") return;
    const d = u.data, m = wt[d.component.type];
    e.fillStyle = `${m.base}30`, e.strokeStyle = `${m.base}60`, e.lineWidth = 1 / c, qc(e, r, o, i, l, 4 / c), e.fill(), e.stroke(), e.fillStyle = m.base, e.fillRect(r + 2 / c, o, i - 4 / c, 2 / c), e.fillRect(r + 2 / c, o + l - 2 / c, i - 4 / c, 2 / c), e.save(), e.translate(r + i / 2, o + l / 2), e.rotate(-Math.PI / 2), e.fillStyle = m.text, e.font = `600 ${Math.max(8, 10 / c)}px Inter, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText(d.component.name, 0, 0), e.restore();
  }
  function Nl(e) {
    return e.data.kind === "busChannel" ? Zl : e.data.kind === "cluster" ? Hs : Ao;
  }
  function Ml(e) {
    return e.data.kind === "busChannel" ? jr : e.data.kind === "cluster" ? Ql : Wr;
  }
  function qc(e, r, o, i, l, u) {
    e.beginPath(), e.moveTo(r + u, o), e.lineTo(r + i - u, o), e.quadraticCurveTo(r + i, o, r + i, o + u), e.lineTo(r + i, o + l - u), e.quadraticCurveTo(r + i, o + l, r + i - u, o + l), e.lineTo(r + u, o + l), e.quadraticCurveTo(r, o + l, r, o + l - u), e.lineTo(r, o + u), e.quadraticCurveTo(r, o, r + u, o), e.closePath();
  }
  function Ec(e, r, o) {
    if (e.measureText(r).width <= o) return r;
    let i = r;
    for (; i.length > 0 && e.measureText(i + "...").width > o; ) i = i.slice(0, -1);
    return i + "...";
  }
  function lk({ width: e, height: r }) {
    const o = z.useRef(null), i = be((D) => D.nodes), l = be((D) => D.edges), u = $e((D) => D.selectNode), c = $e((D) => D.clearSelection), d = $e((D) => D.selectedNodeIds), m = $e((D) => D.highlightedEdgeIds), [h, p] = z.useState({
      x: 0,
      y: 0,
      zoom: 0.1
    }), [y, v] = z.useState(false), [x, S] = z.useState({
      x: 0,
      y: 0
    }), [k, _] = z.useState({
      x: 0,
      y: 0
    });
    z.useEffect(() => {
      if (i.length === 0) return;
      let D = 1 / 0, Q = 1 / 0, q = -1 / 0, Y = -1 / 0;
      for (const F of i) D = Math.min(D, F.position.x), Q = Math.min(Q, F.position.y), q = Math.max(q, F.position.x + Ao), Y = Math.max(Y, F.position.y + Wr);
      const J = q - D, U = Y - Q, Z = 100, ee = (e - Z * 2) / J, C = (r - Z * 2) / U, H = Math.min(ee, C, 0.3), O = (D + q) / 2, K = (Q + Y) / 2;
      p({
        x: e / 2 - O * H,
        y: r / 2 - K * H,
        zoom: H
      });
    }, [
      i,
      e,
      r
    ]), z.useEffect(() => {
      const D = o.current;
      if (!D) return;
      const Q = D.getContext("2d");
      if (!Q) return;
      const q = window.devicePixelRatio || 1;
      D.width = e * q, D.height = r * q, Q.scale(q, q), rk(Q, i, l, {
        ...h
      }, d, m);
    }, [
      i,
      l,
      h,
      e,
      r,
      d,
      m
    ]);
    const E = z.useCallback((D) => {
      v(true), S({
        x: D.clientX,
        y: D.clientY
      }), _({
        x: h.x,
        y: h.y
      });
    }, [
      h
    ]), $ = z.useCallback((D) => {
      if (!y) return;
      const Q = D.clientX - x.x, q = D.clientY - x.y;
      p((Y) => ({
        ...Y,
        x: k.x + Q,
        y: k.y + q
      }));
    }, [
      y,
      x,
      k
    ]), b = z.useCallback(() => {
      v(false);
    }, []), A = z.useCallback((D) => {
      var _a;
      D.preventDefault();
      const Q = D.deltaY > 0 ? 0.9 : 1.1, q = Math.max(0.02, Math.min(1, h.zoom * Q)), Y = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!Y) return;
      const J = D.clientX - Y.left, U = D.clientY - Y.top, Z = (J - h.x) / h.zoom, ee = (U - h.y) / h.zoom;
      p({
        x: J - Z * q,
        y: U - ee * q,
        zoom: q
      });
    }, [
      h
    ]), G = z.useCallback((D) => {
      var _a;
      if (y) return;
      const Q = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!Q) return;
      const q = D.clientX - Q.left, Y = D.clientY - Q.top, J = (q - h.x) / h.zoom, U = (Y - h.y) / h.zoom;
      for (const Z of i) {
        const ee = Z.data.kind === "busChannel" ? Zl : Z.data.kind === "cluster" ? Hs : Ao, C = Z.data.kind === "busChannel" ? jr : Z.data.kind === "cluster" ? Ql : Wr;
        if (J >= Z.position.x && J <= Z.position.x + ee && U >= Z.position.y && U <= Z.position.y + C) {
          Z.data.kind === "component" ? u(Z.id, {
            additive: D.ctrlKey || D.metaKey || D.shiftKey
          }) : c();
          return;
        }
      }
      D.ctrlKey || D.metaKey || D.shiftKey || c();
    }, [
      c,
      y,
      h,
      i,
      u
    ]);
    return I.jsx("canvas", {
      ref: o,
      style: {
        width: e,
        height: r,
        cursor: y ? "grabbing" : "grab"
      },
      onMouseDown: E,
      onMouseMove: $,
      onMouseUp: b,
      onMouseLeave: b,
      onWheel: A,
      onClick: G
    });
  }
  function ak({ x: e, y: r, width: o = 220, height: i = 88, delay: l = 0 }) {
    return I.jsx("div", {
      className: "absolute animate-pulse rounded-xl border border-white/5 bg-gradient-to-br from-shell-800/50 to-shell-950/50",
      style: {
        left: e,
        top: r,
        width: o,
        height: i,
        animationDelay: `${l}ms`,
        animationDuration: "1.5s"
      },
      children: I.jsxs("div", {
        className: "flex h-full",
        children: [
          I.jsx("div", {
            className: "w-1.5 shrink-0 rounded-l-xl bg-white/5"
          }),
          I.jsxs("div", {
            className: "flex-1 p-3.5",
            children: [
              I.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  I.jsx("div", {
                    className: "h-10 w-10 shrink-0 rounded-md bg-white/5"
                  }),
                  I.jsxs("div", {
                    className: "flex-1",
                    children: [
                      I.jsx("div", {
                        className: "h-4 w-24 rounded bg-white/5"
                      }),
                      I.jsx("div", {
                        className: "mt-1 h-3 w-16 rounded bg-white/5"
                      })
                    ]
                  })
                ]
              }),
              I.jsxs("div", {
                className: "mt-3 grid grid-cols-2 gap-2",
                children: [
                  I.jsx("div", {
                    className: "h-6 rounded bg-white/5"
                  }),
                  I.jsx("div", {
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
  const uk = z.memo(ak);
  function ck({ x1: e, y1: r, x2: o, y2: i, delay: l = 0 }) {
    const u = (e + o) / 2, c = `M ${e} ${r} L ${u} ${r} L ${u} ${i} L ${o} ${i}`;
    return I.jsx("path", {
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
  const dk = z.memo(ck);
  function zp() {
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
    return I.jsx("div", {
      className: "absolute inset-0 flex items-center justify-center bg-shell-950/80 backdrop-blur-sm",
      children: I.jsxs("div", {
        className: "relative h-[480px] w-[960px]",
        children: [
          I.jsx("svg", {
            className: "absolute inset-0 h-full w-full",
            children: r.map((o, i) => I.jsx(dk, {
              ...o,
              delay: i * 100
            }, i))
          }),
          e.map((o, i) => I.jsx(uk, {
            ...o,
            delay: i * 100
          }, i)),
          I.jsx("div", {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-center",
            children: I.jsxs("div", {
              className: "flex items-center gap-3 text-sm text-slate-400",
              children: [
                I.jsxs("svg", {
                  className: "h-5 w-5 animate-spin",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    I.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4"
                    }),
                    I.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    })
                  ]
                }),
                I.jsx("span", {
                  children: "Building architecture diagram..."
                })
              ]
            })
          })
        ]
      })
    });
  }
  function fk() {
    const r = nt((o) => o.theme) === "dark";
    return I.jsx(M2, {
      className: `!border ${r ? "!border-white/10 !bg-shell-950/90" : "!border-slate-300 !bg-white/90"}`,
      maskColor: r ? "rgba(2, 6, 23, 0.58)" : "rgba(255, 252, 249, 0.58)",
      nodeBorderRadius: 8,
      nodeColor: r ? "#334155" : "#94a3b8",
      pannable: true,
      zoomable: true
    });
  }
  const hk = {
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
  }, pk = {
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
  function mk(e, r) {
    const o = r ? hk : pk;
    return o[e ?? "unknown"] ?? o.unknown;
  }
  function gk(e, r, o, i, l) {
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
    if (i) return {
      stroke: l ? "#818cf8" : "#6366f1",
      strokeWidth: 2,
      opacity: 0.6,
      strokeDasharray: "4 3"
    };
    const u = mk(e, l);
    return {
      stroke: u.color,
      strokeWidth: u.width,
      opacity: u.opacity,
      strokeDasharray: u.dash
    };
  }
  function yk({ id: e, sourceX: r, sourceY: o, targetX: i, targetY: l, sourcePosition: u, targetPosition: c, data: d, source: m, target: h }) {
    const p = $e((G) => G.highlightedEdgeIds.has(e)), v = $e((G) => G.selectedNodeIds.size > 0) && !p, S = nt((G) => G.theme) === "dark", k = m.startsWith("hierarchy:") || h.startsWith("hierarchy:"), _ = z.useMemo(() => zl({
      sourceX: r,
      sourceY: o,
      targetX: i,
      targetY: l,
      sourcePosition: u,
      targetPosition: c,
      borderRadius: 8
    }), [
      r,
      o,
      i,
      l,
      u,
      c
    ]), [E, $, b] = _, A = gk(d == null ? void 0 : d.connectionType, p, v, k, S);
    return I.jsxs(I.Fragment, {
      children: [
        I.jsx($o, {
          id: e,
          path: E,
          markerEnd: p ? "url(#architecture-arrow)" : void 0,
          style: A
        }),
        p && d ? I.jsx(y2, {
          children: I.jsxs("div", {
            className: `pointer-events-none absolute rounded-lg border px-2.5 py-1.5 text-[10px] shadow-lg ${S ? "border-cyan-300/30 bg-shell-950/95 text-cyan-100" : "border-slate-300 bg-white text-slate-800"}`,
            style: {
              transform: `translate(-50%, -50%) translate(${$}px, ${b}px)`
            },
            children: [
              I.jsxs("div", {
                className: "font-medium",
                children: [
                  d.connection.sourcePortId,
                  " \u2192 ",
                  d.connection.targetPortId
                ]
              }),
              d.connectionType && I.jsx("div", {
                className: `mt-0.5 text-[9px] uppercase tracking-wide ${S ? "text-cyan-300/80" : "text-cyan-700"}`,
                children: d.connectionType
              }),
              d.connectionCount && d.connectionCount > 1 && I.jsxs("span", {
                className: S ? "text-cyan-300" : "text-cyan-600",
                children: [
                  "(",
                  d.connectionCount,
                  "x)"
                ]
              })
            ]
          })
        }) : null
      ]
    });
  }
  const vk = z.memo(yk), wk = {
    architecture: vk
  };
  function Pm(e) {
    var r, o, i = "";
    if (typeof e == "string" || typeof e == "number") i += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var l = e.length;
      for (r = 0; r < l; r++) e[r] && (o = Pm(e[r])) && (i && (i += " "), i += o);
    } else for (o in e) e[o] && (i && (i += " "), i += o);
    return i;
  }
  function Ls() {
    for (var e, r, o = 0, i = "", l = arguments.length; o < l; o++) (e = arguments[o]) && (r = Pm(e)) && (i && (i += " "), i += r);
    return i;
  }
  function Lm(e) {
    const r = $e((l) => l.selectedNodeIds.has(e)), o = $e((l) => l.expandedNodeId === e), i = $e((l) => l.highlightedNodeIds.size > 0 && !l.highlightedNodeIds.has(e));
    return {
      isSelected: r,
      isExpanded: o,
      isDimmed: i
    };
  }
  const xk = z.memo(function({ name: r, type: o, color: i, expanded: l, depth: u = 0, isExpandable: c, isExpanded: d, onExpand: m }) {
    const p = nt((y) => y.theme) === "dark";
    return I.jsxs("div", {
      className: "flex min-w-0 items-center gap-3",
      children: [
        u > 0 && I.jsx("div", {
          className: "flex shrink-0 items-center gap-0.5",
          children: Array.from({
            length: u
          }, (y, v) => I.jsx("div", {
            className: `h-3 w-0.5 rounded-full ${p ? "bg-slate-600" : "bg-slate-300"}`
          }, v))
        }),
        I.jsx("div", {
          className: "architecture-node__type grid h-10 w-10 shrink-0 place-items-center rounded-lg border text-[10px] font-black",
          style: {
            borderColor: i,
            color: i,
            backgroundColor: `${i}18`
          },
          children: U2[o]
        }),
        I.jsxs("div", {
          className: "architecture-node__label min-w-0 flex-1",
          children: [
            I.jsx("div", {
              className: `truncate text-sm font-semibold ${p ? "text-slate-50" : "text-slate-900"}`,
              children: r
            }),
            l ? I.jsx("div", {
              className: `mt-0.5 text-[11px] uppercase ${p ? "text-slate-400" : "text-slate-500"}`,
              children: "Component"
            }) : null
          ]
        }),
        c && I.jsx("button", {
          className: `architecture-node__expand shrink-0 rounded-lg p-1.5 transition ${p ? "text-slate-400 hover:bg-white/10 hover:text-slate-200" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"}`,
          onClick: (y) => {
            y.stopPropagation(), m == null ? void 0 : m();
          },
          children: I.jsx("svg", {
            className: `h-4 w-4 transition-transform ${d ? "rotate-90" : ""}`,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: I.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 5l7 7-7 7"
            })
          })
        })
      ]
    });
  });
  function Sk({ id: e, data: r }) {
    var _a;
    if (r.kind === "busChannel") return null;
    const o = r.kind === "cluster", i = o ? r.cluster.name : r.component.name, l = o ? r.cluster.type : r.component.type, u = wt[l], { isSelected: c, isDimmed: d } = Lm(e), m = be((E) => E.expandToLevel), h = be((E) => E.expansionPath), y = nt((E) => E.theme) === "dark", v = o && h.includes(r.cluster.id), x = o ? r.cluster.depth : 0, S = o && (r.cluster.depth < 2 || r.cluster.componentCount > 6), k = o && x > 1 ? (_a = h[h.indexOf(r.cluster.id) - 1]) == null ? void 0 : _a.replace("hierarchy:", "").replace(/:/g, " > ") : null, _ = o && r.cluster.componentCount > 6 ? r.cluster.componentCount : 0;
    return I.jsxs("div", {
      className: Ls("architecture-node group overflow-hidden rounded-xl border-2 shadow-node transition duration-150", o ? "w-[280px]" : "w-[220px]", "hover:-translate-y-0.5 hover:shadow-glow", c && "ring-2 ring-cyan-400", d && "opacity-30 grayscale", y ? "bg-gradient-to-br from-shell-800 to-shell-950" : "bg-[#fffcf9]"),
      style: {
        borderColor: c ? u.border : y ? "rgba(255,255,255,0.12)" : `${u.border}70`,
        "--node-glow": u.glow
      },
      children: [
        !o && I.jsxs(I.Fragment, {
          children: [
            I.jsx(gr, {
              className: "!h-3 !w-1 !rounded-full !border-0 hover:!bg-cyan-400 !bg-slate-500",
              id: `left:${e}`,
              type: "target",
              position: ge.Left,
              style: {
                top: "50%"
              }
            }),
            I.jsx(gr, {
              className: "!h-3 !w-1 !rounded-full !border-0 hover:!bg-cyan-400 !bg-slate-500",
              id: `right:${e}`,
              type: "source",
              position: ge.Right,
              style: {
                top: "50%"
              }
            })
          ]
        }),
        I.jsxs("div", {
          className: "flex",
          children: [
            I.jsx("div", {
              className: Ls("architecture-node__rail w-2 shrink-0", x > 0 && "opacity-90"),
              style: {
                backgroundColor: u.base
              }
            }),
            I.jsxs("div", {
              className: "architecture-node__content min-w-0 flex-1 p-3.5",
              children: [
                I.jsx(xk, {
                  name: i,
                  type: l,
                  color: u.border,
                  expanded: false,
                  depth: x,
                  isExpandable: S,
                  isExpanded: v,
                  onExpand: () => o && m(r.cluster.id)
                }),
                o ? I.jsxs(I.Fragment, {
                  children: [
                    k && I.jsxs("div", {
                      className: `mt-1 flex items-center gap-1 text-[10px] ${y ? "text-slate-500" : "text-slate-400"}`,
                      children: [
                        I.jsx("svg", {
                          className: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          children: I.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M9 5l7 7-7 7"
                          })
                        }),
                        I.jsx("span", {
                          children: k
                        })
                      ]
                    }),
                    I.jsxs("div", {
                      className: `architecture-node__meta mt-3 flex items-center gap-2 text-[11px] ${y ? "text-slate-400" : "text-slate-500"}`,
                      children: [
                        I.jsxs("span", {
                          className: `rounded px-2 py-1 font-medium ${y ? "bg-white/[0.04]" : "bg-slate-100"}`,
                          children: [
                            r.cluster.componentCount,
                            " blocks"
                          ]
                        }),
                        _ > 0 && I.jsx("span", {
                          className: `rounded px-2 py-1 font-medium ${y ? "bg-cyan-500/10 text-cyan-400" : "bg-cyan-100 text-cyan-700"}`,
                          children: "click to expand"
                        })
                      ]
                    }),
                    r.cluster.typeBreakdown && Object.keys(r.cluster.typeBreakdown).length > 1 && I.jsx("div", {
                      className: "mt-2 flex flex-wrap gap-1",
                      children: Object.entries(r.cluster.typeBreakdown).map(([E, $]) => I.jsxs("span", {
                        className: `rounded px-1.5 py-0.5 text-[9px] font-medium ${y ? "bg-white/[0.06] text-slate-500" : "bg-slate-100 text-slate-600"}`,
                        children: [
                          E,
                          ": ",
                          $
                        ]
                      }, E))
                    })
                  ]
                }) : null
              ]
            })
          ]
        })
      ]
    });
  }
  const kk = z.memo(Sk, (e, r) => e.data.kind === "busChannel" || r.data.kind === "busChannel" ? false : e.id === r.id && e.selected === r.selected && e.data.kind === r.data.kind && (e.data.kind === "cluster" ? r.data.kind === "cluster" && e.data.cluster.id === r.data.cluster.id && e.data.cluster.componentCount === r.data.cluster.componentCount && e.data.cluster.connectionCount === r.data.cluster.connectionCount && e.data.cluster.depth === r.data.cluster.depth : r.data.kind === "component" && e.data.component.id === r.data.component.id && e.data.component.name === r.data.component.name && e.data.component.type === r.data.component.type)), Ek = 32, Ck = 720;
  function _k({ id: e, data: r }) {
    if (r.kind !== "busChannel") return null;
    const o = r, i = wt[o.component.type], { isSelected: l, isDimmed: u } = Lm(e), d = nt((m) => m.theme) === "dark";
    return I.jsxs("div", {
      className: Ls("bus-channel-node group relative transition duration-150", u && "opacity-30 grayscale"),
      style: {
        width: Ek,
        height: Ck,
        "--bus-color": i.base,
        "--bus-border": i.border,
        "--bus-glow": i.glow
      },
      children: [
        I.jsx(gr, {
          className: "!h-3 !w-1 !rounded-full !border-0 hover:!bg-cyan-400 !bg-slate-500",
          id: `left:${e}`,
          type: "target",
          position: ge.Left,
          style: {
            top: "50%"
          }
        }),
        I.jsx(gr, {
          className: "!h-3 !w-1 !rounded-full !border-0 hover:!bg-cyan-400 !bg-slate-500",
          id: `right:${e}`,
          type: "source",
          position: ge.Right,
          style: {
            top: "50%"
          }
        }),
        I.jsxs("div", {
          className: Ls("absolute inset-0 rounded-md border-2 transition-all duration-150", l && "ring-2 ring-cyan-400 shadow-lg"),
          style: {
            backgroundColor: d ? `${i.base}25` : `${i.base}35`,
            borderColor: l ? i.border : d ? `${i.base}50` : `${i.base}80`,
            boxShadow: l ? `0 0 20px ${i.glow}` : d ? "none" : `0 2px 8px ${i.base}30`
          },
          children: [
            I.jsx("div", {
              className: "absolute left-0 top-0 h-1.5 w-full rounded-t-md",
              style: {
                backgroundColor: i.base
              }
            }),
            I.jsx("div", {
              className: "absolute bottom-0 left-0 h-1.5 w-full rounded-b-md",
              style: {
                backgroundColor: i.base
              }
            }),
            I.jsx("div", {
              className: "absolute left-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: i.base
              }
            }),
            I.jsx("div", {
              className: "absolute right-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: i.base
              }
            }),
            I.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center",
              style: {
                writingMode: "vertical-rl",
                textOrientation: "mixed"
              },
              children: I.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  I.jsx("div", {
                    className: "flex h-6 w-6 shrink-0 items-center justify-center rounded text-[8px] font-black",
                    style: {
                      borderColor: i.border,
                      color: i.text,
                      backgroundColor: d ? `${i.base}30` : `${i.base}40`,
                      border: `2px solid ${i.border}`
                    },
                    children: "BUS"
                  }),
                  I.jsx("span", {
                    className: "text-xs font-bold",
                    style: {
                      color: d ? i.text : i.border
                    },
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
  const Nk = z.memo(_k, (e, r) => {
    if (e.id !== r.id || e.selected !== r.selected || e.data.kind !== "busChannel" || r.data.kind !== "busChannel") return false;
    const o = e.data, i = r.data;
    return o.component.id === i.component.id && o.component.name === i.component.name && o.component.type === i.component.type && o.layer === i.layer;
  }), Mk = {
    architecture: kk,
    busChannel: Nk
  }, Op = 0.035, Ik = 2.2, bk = 0.32;
  function Tk() {
    const e = be((U) => U.nodes), r = be((U) => U.edges), o = be((U) => U.updateNodePosition), i = be((U) => U.setNodes), l = be((U) => U.setEdges), u = be((U) => U.toggleCluster), c = be((U) => U.isLayoutLoading), d = $e((U) => U.selectNode), m = $e((U) => U.clearSelection), h = Zc(), [p, y] = z.useState(false), v = nt((U) => U.nonInteractiveThreshold), S = nt((U) => U.theme) === "dark", k = e.length > v, _ = e.length > X2;
    z.useRef(null);
    const [E, $] = z.useState({
      width: 0,
      height: 0
    });
    js();
    const b = z.useCallback((U) => {
      if (U) {
        const Z = new ResizeObserver((ee) => {
          for (const C of ee) {
            const { width: H, height: O } = C.contentRect;
            $({
              width: H,
              height: O
            });
          }
        });
        return Z.observe(U), () => Z.disconnect();
      }
    }, []), A = {
      markerEnd: {
        type: To.ArrowClosed,
        color: S ? "#64748b" : "#1e293b"
      },
      style: {
        stroke: S ? "#64748b" : "#334155",
        strokeWidth: S ? 2 : 2.5
      }
    }, G = z.useCallback((U) => {
      const Z = be.getState().nodes;
      i(pm(U, Z));
    }, [
      i
    ]), D = z.useCallback((U) => {
      const Z = be.getState().edges;
      l(CS(U, Z));
    }, [
      l
    ]), Q = z.useCallback((U, Z) => {
      const ee = U.ctrlKey || U.metaKey || U.shiftKey;
      Z.data.kind === "component" ? d(Z.id, ee ? {
        additive: true
      } : void 0) : m();
    }, [
      m,
      d
    ]), q = z.useCallback((U, Z) => {
      if (U.preventDefault(), Z.data.kind === "cluster") {
        u(Z.id), d(null);
        return;
      }
      h(Z.id);
    }, [
      h,
      d,
      u
    ]), Y = z.useCallback((U, Z) => {
      o(Z.id, Z.position);
    }, [
      o
    ]), J = z.useCallback((U, Z) => {
      y((ee) => {
        const C = Z.zoom <= bk;
        return ee === C ? ee : C;
      });
    }, []);
    return _ && E.width > 0 ? I.jsxs("div", {
      ref: b,
      className: "relative h-full w-full",
      children: [
        I.jsx(lk, {
          width: E.width,
          height: E.height
        }),
        c && I.jsx(zp, {}),
        I.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs font-medium ${S ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-slate-300 bg-white/90 text-slate-600 shadow-sm"}`,
          children: [
            "Canvas Mode \u2014 ",
            e.length,
            " nodes"
          ]
        })
      ]
    }) : I.jsxs("div", {
      ref: b,
      className: "relative h-full w-full",
      children: [
        I.jsxs(Mm, {
          className: `${p ? "architecture-flow architecture-flow--overview" : "architecture-flow"}${k ? " architecture-flow--static" : ""}`,
          nodes: e,
          edges: r,
          nodeTypes: Mk,
          edgeTypes: wk,
          defaultEdgeOptions: A,
          onNodesChange: k ? void 0 : G,
          onEdgesChange: k ? void 0 : D,
          onNodeClick: k ? void 0 : Q,
          onNodeDoubleClick: k ? void 0 : q,
          onNodeDragStop: k ? void 0 : Y,
          onMove: J,
          onPaneClick: k ? void 0 : () => m(),
          nodesDraggable: !k,
          nodesConnectable: !k,
          elementsSelectable: !k,
          nodesFocusable: !k,
          fitView: true,
          fitViewOptions: {
            padding: 0.18,
            minZoom: Op,
            maxZoom: 0.9
          },
          onlyRenderVisibleElements: true,
          zoomOnDoubleClick: false,
          minZoom: Op,
          maxZoom: Ik,
          proOptions: {
            hideAttribution: true
          },
          children: [
            I.jsx("svg", {
              children: I.jsx("defs", {
                children: I.jsx("marker", {
                  id: "architecture-arrow",
                  markerHeight: "12",
                  markerWidth: "12",
                  orient: "auto",
                  refX: "10",
                  refY: "6",
                  children: I.jsx("path", {
                    d: "M2,2 L10,6 L2,10 z",
                    fill: S ? "#67e8f9" : "#0891b2"
                  })
                })
              })
            }),
            I.jsx(nk, {}),
            I.jsx(L2, {
              className: `!border !bg-shell-950/90 !fill-slate-200 !text-slate-200 ${S ? "!border-white/10" : "!border-black/10"}`
            }),
            I.jsx(fk, {})
          ]
        }),
        k && I.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs ${S ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-black/10 bg-white/90 text-slate-600"}`,
          children: [
            "Static View \u2014 ",
            e.length,
            " nodes"
          ]
        }),
        c && I.jsx(zp, {})
      ]
    });
  }
  function Ak() {
    return I.jsx(Tk, {});
  }
  const $k = {
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
  }, Rk = [
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
  ], Pk = {
    components: $k,
    connections: Rk
  }, Lk = /* @__PURE__ */ new Set([
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
  ]), Dk = /* @__PURE__ */ new Set([
    "in",
    "out",
    "inout"
  ]);
  function Hr(e) {
    return typeof e == "object" && e !== null;
  }
  function tt(e) {
    return typeof e == "string" && e.length > 0;
  }
  function Ds(e) {
    return e.trim().replace(/\s+/g, "_");
  }
  function Fp(e, r) {
    const o = r.trim().toLowerCase(), i = e.trim().toLowerCase();
    return o === "bus" || i.includes("bus") ? "bus" : o === "cpu" || i.includes("cpu") ? "cpu" : o === "memory" || i.includes("ram") || i.includes("rom") || i.includes("memory") ? "memory" : o === "interface" || i.includes("pad") || i.includes("interface") ? "interface" : o === "clockreset" || o === "clock_reset" || i.includes("clock") || i.includes("reset") ? "clockReset" : o === "dma" || i.includes("dma") ? "dma" : o === "interruptcontroller" || o === "interrupt_controller" || i.includes("interrupt") || i.includes("intc") || i.includes("nvic") || i.includes("vic") || i.includes("gic") ? "interruptController" : o === "debug" || i.includes("debug") || i.includes("jtag") || i.includes("tap") ? "debug" : o === "peripheral" || o === "component" ? "peripheral" : Lk.has(r) ? r : "custom";
  }
  function Bp(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs ports[].`);
    return r.map((o, i) => {
      if (tt(o)) return {
        id: Ds(o),
        name: o,
        direction: "inout"
      };
      if (!Hr(o) || !tt(o.id) || !tt(o.name) || !Dk.has(o.direction)) throw new Error(`Component ${e} has an invalid port.`);
      return o;
    }).filter((o, i, l) => l.findIndex((u) => u.id === o.id) === i);
  }
  function jp(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs registers[].`);
    return r.map((o) => {
      if (tt(o)) return {
        id: Ds(o),
        name: o
      };
      if (!Hr(o) || !tt(o.id) || !tt(o.name)) throw new Error(`Component ${e} has an invalid register.`);
      return o;
    }).filter((o, i, l) => l.findIndex((u) => u.id === o.id) === i);
  }
  function zk(e) {
    if (Array.isArray(e)) return e.map((r) => {
      if (!Hr(r) || !tt(r.id) || !tt(r.name) || !tt(r.type)) throw new Error("Each component needs id, name, type, ports[], and registers[].");
      return {
        id: r.id,
        name: r.name,
        type: Fp(r.name, r.type),
        ports: Bp(r.id, r.ports),
        registers: jp(r.id, r.registers)
      };
    });
    if (Hr(e)) return Object.entries(e).map(([r, o]) => {
      if (!Hr(o) || !tt(o.type)) throw new Error(`Component ${r} needs type, ports[], and registers[].`);
      const i = Ds(r);
      return {
        id: i,
        name: r,
        type: Fp(r, o.type),
        ports: Bp(i, o.ports),
        registers: jp(i, o.registers)
      };
    });
    throw new Error("JSON must contain components and connections[].");
  }
  function Hp(e) {
    var _a;
    return ((_a = e == null ? void 0 : e.ports[0]) == null ? void 0 : _a.id) ?? "default";
  }
  function Ok(e, r) {
    if (!Array.isArray(e)) throw new Error("JSON must contain components and connections[].");
    const o = new Map(r.map((l) => [
      l.id,
      l
    ])), i = new Map(r.map((l) => [
      l.name,
      l
    ]));
    return e.map((l, u) => {
      if (!Hr(l)) throw new Error("Each connection needs source and target components.");
      const c = tt(l.sourceComponentId) ? l.sourceComponentId : tt(l.source) ? Ds(l.source) : "", d = tt(l.targetComponentId) ? l.targetComponentId : tt(l.target) ? Ds(l.target) : "", m = o.get(c) ?? (tt(l.source) ? i.get(l.source) : void 0), h = o.get(d) ?? (tt(l.target) ? i.get(l.target) : void 0);
      if (!m || !h) throw new Error(`Connection ${u + 1} references a missing component.`);
      return {
        id: tt(l.id) ? l.id : `conn_${u + 1}_${m.id}_to_${h.id}`,
        sourceComponentId: m.id,
        sourcePortId: tt(l.sourcePortId) ? l.sourcePortId : Hp(m),
        targetComponentId: h.id,
        targetPortId: tt(l.targetPortId) ? l.targetPortId : Hp(h)
      };
    });
  }
  function oc(e) {
    let r;
    try {
      r = JSON.parse(e);
    } catch {
      throw new Error("The input is not valid JSON.");
    }
    if (!Hr(r)) throw new Error("JSON must contain components and connections[].");
    const o = zk(r.components), i = Ok(r.connections, o);
    return {
      components: o,
      connections: i
    };
  }
  function Jc({ children: e, className: r }) {
    const i = nt((l) => l.theme) === "dark";
    return I.jsx("section", {
      className: Ls("border shadow-xl backdrop-blur-sm", i ? "border-white/10 bg-shell-900/95" : "border-[#e5e0d8] bg-[#fffcf9]/95", r),
      children: e
    });
  }
  const Vp = JSON.stringify(Pk, null, 2);
  function Fk() {
    const e = zt((E) => E.loadModel), r = be((E) => E.setNodes), o = be((E) => E.setEdges), i = be((E) => E.setLayoutLoading), l = $e((E) => E.selectNode), u = $e((E) => E.setSearchQuery), d = nt((E) => E.theme) === "dark", [m, h] = z.useState(""), [p, y] = z.useState(null), [v, x] = z.useState(false), S = (E) => {
      l(null), u(""), r([]), o([]), i(true), e(E), y(null);
    }, k = () => {
      x(true), setTimeout(() => {
        try {
          S(oc(m));
        } catch (E) {
          y(E instanceof Error ? E.message : "Unable to parse architecture JSON."), i(false);
        } finally {
          x(false);
        }
      }, 50);
    }, _ = async (E) => {
      var _a;
      const $ = (_a = E.target.files) == null ? void 0 : _a[0];
      if ($) {
        x(true);
        try {
          const b = await $.text();
          h(b), S(oc(b));
        } catch (b) {
          y(b instanceof Error ? b.message : "Unable to read architecture JSON file."), i(false);
        } finally {
          x(false);
        }
      }
    };
    return I.jsx("div", {
      className: `pointer-events-none absolute inset-0 z-20 grid place-items-center p-6 backdrop-blur-sm ${d ? "bg-shell-950/80" : "bg-slate-200/80"}`,
      children: I.jsxs(Jc, {
        className: "pointer-events-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl",
        children: [
          I.jsxs("div", {
            className: `border-b p-6 ${d ? "border-white/10" : "border-slate-200"}`,
            children: [
              I.jsx("h2", {
                className: `text-xl font-semibold ${d ? "text-slate-50" : "text-slate-900"}`,
                children: "Load architecture JSON"
              }),
              I.jsx("p", {
                className: `mt-2 text-sm ${d ? "text-slate-400" : "text-slate-600"}`,
                children: "Choose a JSON file or paste an architecture model to render the graph."
              })
            ]
          }),
          I.jsxs("div", {
            className: "grid gap-4 p-6",
            children: [
              I.jsxs("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                  I.jsxs("label", {
                    className: `inline-flex cursor-pointer items-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${d ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15" : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"}`,
                    children: [
                      v ? "Reading file..." : "Choose JSON file",
                      I.jsx("input", {
                        accept: "application/json,.json",
                        className: "sr-only",
                        onChange: _,
                        type: "file"
                      })
                    ]
                  }),
                  I.jsx("button", {
                    className: `rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${d ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"}`,
                    onClick: () => {
                      x(true), setTimeout(() => {
                        h(Vp), S(oc(Vp)), x(false);
                      }, 50);
                    },
                    type: "button",
                    children: "Load sample SoC"
                  })
                ]
              }),
              I.jsx("textarea", {
                className: `h-72 resize-none rounded-lg border p-4 font-mono text-xs leading-5 outline-none transition ${d ? "border-white/10 bg-shell-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-300/40" : "border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"}`,
                onChange: (E) => h(E.target.value),
                placeholder: '{"components": [...], "connections": [...]}',
                spellCheck: false,
                value: m
              }),
              p ? I.jsx("div", {
                className: "rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700",
                children: p
              }) : null,
              I.jsx("div", {
                className: "flex justify-end",
                children: I.jsx("button", {
                  className: "rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-40 shadow-sm",
                  disabled: !m.trim() || v,
                  onClick: k,
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
  function Bk({ children: e, color: r = "#94a3b8" }) {
    return I.jsx("span", {
      className: "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
      style: {
        borderColor: r,
        color: r,
        backgroundColor: `${r}1a`
      },
      children: e
    });
  }
  function Up({ connections: e, direction: r, getName: o, onSelect: i }) {
    const u = nt((c) => c.theme) === "dark";
    return e.length === 0 ? I.jsxs("div", {
      className: `rounded-lg py-4 text-center text-sm ${u ? "text-slate-500" : "text-slate-400"}`,
      children: [
        "No ",
        r,
        " connections."
      ]
    }) : I.jsx("ul", {
      className: "space-y-1.5",
      children: e.map((c) => {
        const d = r === "incoming" ? c.sourceComponentId : c.targetComponentId, m = r === "incoming" ? c.sourcePortId : c.targetPortId, h = r === "incoming" ? c.targetPortId : c.sourcePortId;
        return I.jsxs("li", {
          className: `group rounded-lg p-3 transition ${u ? "bg-white/[0.03] hover:bg-white/[0.06] border border-white/5" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
          children: [
            I.jsx("button", {
              className: `mb-1.5 text-left text-sm font-semibold transition ${u ? "text-cyan-300 hover:text-cyan-200" : "text-cyan-600 hover:text-cyan-700"}`,
              onClick: () => i(d),
              type: "button",
              children: o(d)
            }),
            I.jsxs("div", {
              className: `flex items-center gap-1.5 font-mono text-[11px] ${u ? "text-slate-500" : "text-slate-400"}`,
              children: [
                I.jsx("span", {
                  className: `rounded px-1 py-0.5 ${u ? "bg-white/5" : "bg-slate-100"}`,
                  children: m
                }),
                I.jsx("svg", {
                  className: "h-3 w-3 shrink-0",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: I.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                }),
                I.jsx("span", {
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
  function vl({ title: e, children: r }) {
    const i = nt((l) => l.theme) === "dark";
    return I.jsxs("section", {
      className: `border-t pt-4 ${i ? "border-white/10" : "border-slate-200"}`,
      children: [
        I.jsxs("h3", {
          className: `mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${i ? "text-slate-500" : "text-slate-400"}`,
          children: [
            I.jsx("span", {
              className: `inline-block h-1 w-1 rounded-full ${i ? "bg-cyan-400" : "bg-cyan-500"}`
            }),
            e
          ]
        }),
        r
      ]
    });
  }
  const Wp = [];
  function jk() {
    const e = $e((y) => y.selectedNodeId), r = zt((y) => e ? y.componentById.get(e) : void 0), o = zt((y) => e ? y.getIncoming(e) : Wp), i = zt((y) => e ? y.getOutgoing(e) : Wp), l = zt((y) => y.getComponent), u = Zc(), c = be((y) => y.sidebarCollapsed), d = be((y) => y.toggleSidebar), h = nt((y) => y.theme) === "dark";
    if (!r || c) return null;
    const p = wt[r.type];
    return I.jsxs(Jc, {
      className: "relative h-full w-[360px] shrink-0 overflow-y-auto transition-all duration-300",
      children: [
        I.jsxs("div", {
          className: `relative border-b p-5 ${h ? "border-white/10" : "border-slate-200"}`,
          children: [
            I.jsx("div", {
              className: "absolute left-0 top-0 h-1 w-full",
              style: {
                backgroundColor: p.base
              }
            }),
            I.jsx("button", {
              className: `absolute right-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border transition ${h ? "border-white/10 bg-white/5 text-slate-500 hover:bg-white/10 hover:text-slate-200" : "border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 shadow-sm"}`,
              onClick: d,
              title: "Collapse sidebar",
              type: "button",
              children: I.jsx("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: I.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            }),
            I.jsxs("div", {
              className: "flex items-start gap-3",
              children: [
                I.jsx("div", {
                  className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                  style: {
                    backgroundColor: `${p.base}20`,
                    color: p.border,
                    border: `1px solid ${p.border}40`
                  },
                  children: r.type.slice(0, 2).toUpperCase()
                }),
                I.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    I.jsx(Bk, {
                      color: p.border,
                      children: r.type
                    }),
                    I.jsx("h2", {
                      className: `mt-2 text-lg font-semibold leading-tight ${h ? "text-slate-50" : "text-slate-900"}`,
                      children: r.name
                    }),
                    I.jsx("p", {
                      className: `mt-1 font-mono text-[11px] ${h ? "text-slate-500" : "text-slate-400"}`,
                      children: r.id
                    })
                  ]
                })
              ]
            })
          ]
        }),
        I.jsxs("div", {
          className: `flex gap-3 border-b px-5 py-3 ${h ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"}`,
          children: [
            I.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                I.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: r.ports.length
                }),
                I.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Ports"
                })
              ]
            }),
            I.jsx("div", {
              className: `w-px ${h ? "bg-white/10" : "bg-slate-200"}`
            }),
            I.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                I.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: r.registers.length
                }),
                I.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Registers"
                })
              ]
            }),
            I.jsx("div", {
              className: `w-px ${h ? "bg-white/10" : "bg-slate-200"}`
            }),
            I.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                I.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: o.length + i.length
                }),
                I.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Connections"
                })
              ]
            })
          ]
        }),
        I.jsxs("div", {
          className: "p-5",
          children: [
            I.jsx(vl, {
              title: "Ports",
              children: I.jsx("ul", {
                className: "space-y-1.5",
                children: r.ports.map((y) => I.jsxs("li", {
                  className: `group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${h ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
                  children: [
                    I.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        I.jsx("span", {
                          className: `h-1.5 w-1.5 rounded-full ${y.direction === "in" ? "bg-emerald-400" : y.direction === "out" ? "bg-amber-400" : "bg-slate-400"}`
                        }),
                        I.jsx("span", {
                          className: `font-medium ${h ? "text-slate-200" : "text-slate-700"}`,
                          children: y.name
                        })
                      ]
                    }),
                    I.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        I.jsx("span", {
                          className: `rounded px-1.5 py-0.5 text-[10px] font-medium uppercase ${y.direction === "in" ? "bg-emerald-500/10 text-emerald-600" : y.direction === "out" ? "bg-amber-500/10 text-amber-600" : "bg-slate-500/10 text-slate-600"}`,
                          children: y.direction
                        }),
                        y.width ? I.jsxs("span", {
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
            I.jsx(vl, {
              title: "Registers",
              children: I.jsx("ul", {
                className: "space-y-1.5",
                children: r.registers.map((y) => I.jsxs("li", {
                  className: `rounded-lg px-3 py-2.5 transition ${h ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
                  children: [
                    I.jsxs("div", {
                      className: "flex items-center justify-between gap-3 text-sm",
                      children: [
                        I.jsx("span", {
                          className: `font-medium ${h ? "text-slate-200" : "text-slate-700"}`,
                          children: y.name
                        }),
                        y.address ? I.jsx("span", {
                          className: `rounded px-1.5 py-0.5 font-mono text-[10px] ${h ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500"}`,
                          children: y.address
                        }) : null
                      ]
                    }),
                    y.description ? I.jsx("p", {
                      className: "mt-1.5 text-xs leading-relaxed text-slate-500",
                      children: y.description
                    }) : null
                  ]
                }, y.id))
              })
            }),
            I.jsx(vl, {
              title: "Incoming",
              children: I.jsx(Up, {
                connections: o,
                direction: "incoming",
                getName: (y) => {
                  var _a;
                  return ((_a = l(y)) == null ? void 0 : _a.name) ?? y;
                },
                onSelect: u
              })
            }),
            I.jsx(vl, {
              title: "Outgoing",
              children: I.jsx(Up, {
                connections: i,
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
  function yr(e) {
    return Array.isArray ? Array.isArray(e) : zm(e) === "[object Array]";
  }
  function Hk(e) {
    if (typeof e == "string") return e;
    if (typeof e == "bigint") return e.toString();
    const r = e + "";
    return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
  }
  function Cc(e) {
    return e == null ? "" : Hk(e);
  }
  function xt(e) {
    return typeof e == "string";
  }
  function Il(e) {
    return typeof e == "number";
  }
  function Vk(e) {
    return e === true || e === false || Uk(e) && zm(e) == "[object Boolean]";
  }
  function Dm(e) {
    return typeof e == "object";
  }
  function Uk(e) {
    return Dm(e) && e !== null;
  }
  function Dt(e) {
    return e != null;
  }
  function wl(e) {
    return !e.trim().length;
  }
  function zm(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
  }
  const Wk = "Incorrect 'index' type", _c = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", Yk = (e) => `Invalid value for key ${e}`, Gk = (e) => `Pattern length exceeds max of ${e}.`, Xk = (e) => `Missing ${e} property in key`, Kk = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Qk = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", Yp = Object.prototype.hasOwnProperty;
  var Zk = class {
    constructor(e) {
      this._keys = [], this._keyMap = {};
      let r = 0;
      e.forEach((o) => {
        const i = Om(o);
        this._keys.push(i), this._keyMap[i.id] = i, r += i.weight;
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
  function Om(e) {
    let r = null, o = null, i = null, l = 1, u = null;
    if (xt(e) || yr(e)) i = e, r = Gp(e), o = bl(e);
    else {
      if (!Yp.call(e, "name")) throw new Error(Xk("name"));
      const c = e.name;
      if (i = c, Yp.call(e, "weight") && e.weight !== void 0 && (l = e.weight, l <= 0)) throw new Error(Kk(bl(c)));
      r = Gp(c), o = bl(c), u = e.getFn ?? null;
    }
    return {
      path: r,
      id: o,
      weight: l,
      src: i,
      getFn: u
    };
  }
  function Gp(e) {
    return yr(e) ? e : e.split(".");
  }
  function bl(e) {
    return yr(e) ? e.join(".") : e;
  }
  function qk(e, r) {
    const o = [];
    let i = false;
    const l = (u, c, d, m) => {
      if (Dt(u)) if (!c[d]) o.push(m !== void 0 ? {
        v: u,
        i: m
      } : u);
      else {
        const h = u[c[d]];
        if (!Dt(h)) return;
        if (d === c.length - 1 && (xt(h) || Il(h) || Vk(h) || typeof h == "bigint")) o.push(m !== void 0 ? {
          v: Cc(h),
          i: m
        } : Cc(h));
        else if (yr(h)) {
          i = true;
          for (let p = 0, y = h.length; p < y; p += 1) l(h[p], c, d + 1, p);
        } else c.length && l(h, c, d + 1, m);
      }
    };
    return l(e, xt(r) ? r.split(".") : r, 0), i ? o : o[0];
  }
  const Jk = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
  }, eE = {
    isCaseSensitive: false,
    ignoreDiacritics: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (e, r) => e.score === r.score ? e.idx < r.idx ? -1 : 1 : e.score < r.score ? -1 : 1
  }, tE = {
    location: 0,
    threshold: 0.6,
    distance: 100
  }, nE = {
    useExtendedSearch: false,
    useTokenSearch: false,
    tokenize: void 0,
    tokenMatch: "any",
    getFn: qk,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
  }, Se = Object.freeze({
    ...eE,
    ...Jk,
    ...tE,
    ...nE
  });
  function rE(e = 1, r = 3) {
    const o = /* @__PURE__ */ new Map(), i = Math.pow(10, r);
    return {
      get(l) {
        let u = 1, c = false;
        for (let m = 0; m < l.length; m++) l.charCodeAt(m) === 32 ? c || (u++, c = true) : c = false;
        if (o.has(u)) return o.get(u);
        const d = Math.round(i / Math.pow(u, 0.5 * e)) / i;
        return o.set(u, d), d;
      },
      clear() {
        o.clear();
      }
    };
  }
  var ed = class {
    constructor({ getFn: e = Se.getFn, fieldNormWeight: r = Se.fieldNormWeight } = {}) {
      this.norm = rE(r, 3), this.getFn = e, this.isCreated = false, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
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
        const i = this._createStringRecord(this.docs[o], o);
        i && (this.records[r++] = i);
      }
      else for (let o = 0; o < e; o++) this.records[r++] = this._createObjectRecord(this.docs[o], o);
      this.records.length = r, this.norm.clear();
    }
    add(e, r) {
      if (!Number.isInteger(r) || r < 0) throw new Error(_c);
      if (xt(e)) {
        const i = this._createStringRecord(e, r);
        return i && this.records.push(i), i;
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
      for (const i of e) Number.isInteger(i) && i >= 0 && r.add(i);
      if (r.size === 0) return;
      this.records = this.records.filter((i) => !r.has(i.i));
      const o = Array.from(r).sort((i, l) => i - l);
      for (const i of this.records) {
        let l = 0, u = o.length;
        for (; l < u; ) {
          const c = l + u >>> 1;
          o[c] < i.i ? l = c + 1 : u = c;
        }
        i.i -= l;
      }
    }
    getValueForItemAtKeyId(e, r) {
      return e[this._keysMap[r]];
    }
    size() {
      return this.records.length;
    }
    _createStringRecord(e, r) {
      return !Dt(e) || wl(e) ? null : {
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
      for (let i = 0, l = this.keys.length; i < l; i++) {
        const u = this.keys[i], c = u.getFn ? u.getFn(e) : this.getFn(e, u.path);
        if (Dt(c)) {
          if (yr(c)) {
            const d = [];
            for (let m = 0, h = c.length; m < h; m += 1) {
              const p = c[m];
              if (Dt(p)) {
                if (xt(p)) {
                  if (!wl(p)) {
                    const y = {
                      v: p,
                      i: m,
                      n: this.norm.get(p)
                    };
                    d.push(y);
                  }
                } else if (Dt(p.v)) {
                  const y = xt(p.v) ? p.v : Cc(p.v);
                  if (!wl(y)) {
                    const v = {
                      v: y,
                      i: p.i,
                      n: this.norm.get(y)
                    };
                    d.push(v);
                  }
                }
              }
            }
            o.$[i] = d;
          } else if (xt(c) && !wl(c)) {
            const d = {
              v: c,
              n: this.norm.get(c)
            };
            o.$[i] = d;
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
  function Fm(e, r, { getFn: o = Se.getFn, fieldNormWeight: i = Se.fieldNormWeight } = {}) {
    const l = new ed({
      getFn: o,
      fieldNormWeight: i
    });
    return l.setKeys(e.map(Om)), l.setSources(r), l.create(), l;
  }
  function oE(e, { getFn: r = Se.getFn, fieldNormWeight: o = Se.fieldNormWeight } = {}) {
    const { keys: i, records: l } = e, u = new ed({
      getFn: r,
      fieldNormWeight: o
    });
    return u.setKeys(i), u.setIndexRecords(l), u;
  }
  function sE(e = [], r = Se.minMatchCharLength) {
    const o = [];
    let i = -1, l = -1, u = 0;
    for (let c = e.length; u < c; u += 1) {
      const d = e[u];
      d && i === -1 ? i = u : !d && i !== -1 && (l = u - 1, l - i + 1 >= r && o.push([
        i,
        l
      ]), i = -1);
    }
    return e[u - 1] && u - i >= r && o.push([
      i,
      u - 1
    ]), o;
  }
  function iE(e, r, o, { location: i = Se.location, distance: l = Se.distance, threshold: u = Se.threshold, findAllMatches: c = Se.findAllMatches, minMatchCharLength: d = Se.minMatchCharLength, includeMatches: m = Se.includeMatches, ignoreLocation: h = Se.ignoreLocation } = {}) {
    if (r.length > 32) throw new Error(Gk(32));
    const p = r.length, y = e.length, v = Math.max(0, Math.min(i, y));
    let x = u, S = v;
    const k = (Y, J) => {
      const U = Y / p;
      if (h) return U;
      const Z = Math.abs(v - J);
      return l ? U + Z / l : Z ? 1 : U;
    }, _ = d > 1 || m, E = _ ? Array(y) : [];
    let $;
    for (; ($ = e.indexOf(r, S)) > -1; ) {
      const Y = k(0, $);
      if (x = Math.min(Y, x), S = $ + p, _) {
        let J = 0;
        for (; J < p; ) E[$ + J] = 1, J += 1;
      }
    }
    S = -1;
    let b = [], A = 1, G = 0, D = p + y;
    const Q = 1 << p - 1;
    for (let Y = 0; Y < p; Y += 1) {
      let J = 0, U = D;
      for (; J < U; ) k(Y, v + U) <= x ? J = U : D = U, U = Math.floor((D - J) / 2 + J);
      D = U;
      let Z = Math.max(1, v - U + 1);
      const ee = c ? y : Math.min(v + U, y) + p, C = Array(ee + 2);
      C[ee + 1] = (1 << Y) - 1;
      for (let H = ee; H >= Z; H -= 1) {
        const O = H - 1, K = o[e[O]];
        if (C[H] = (C[H + 1] << 1 | 1) & K, Y && (C[H] |= (b[H + 1] | b[H]) << 1 | 1 | b[H + 1]), C[H] & Q && (A = k(Y, O), A <= x)) {
          if (x = A, S = O, G = Y, S <= v) break;
          Z = Math.max(1, 2 * v - S);
        }
      }
      if (k(Y + 1, v) > x) break;
      b = C;
    }
    if (_ && S >= 0) {
      const Y = Math.min(y - 1, S + p - 1 + G);
      for (let J = S; J <= Y; J += 1) o[e[J]] && (E[J] = 1);
    }
    const q = {
      isMatch: S >= 0,
      score: Math.max(1e-3, A)
    };
    if (_) {
      const Y = sE(E, d);
      Y.length ? m && (q.indices = Y) : q.isMatch = false;
    }
    return q;
  }
  function lE(e) {
    const r = {};
    for (let o = 0, i = e.length; o < i; o += 1) {
      const l = e.charAt(o);
      r[l] = (r[l] || 0) | 1 << i - o - 1;
    }
    return r;
  }
  function td(e) {
    if (e.length <= 1) return e;
    e.sort((o, i) => o[0] - i[0] || o[1] - i[1]);
    const r = [
      e[0]
    ];
    for (let o = 1, i = e.length; o < i; o += 1) {
      const l = r[r.length - 1], u = e[o];
      u[0] <= l[1] + 1 ? l[1] = Math.max(l[1], u[1]) : r.push(u);
    }
    return r;
  }
  const Bm = {
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
  }, aE = new RegExp("[" + Object.keys(Bm).join("") + "]", "g"), zs = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(aE, (r) => Bm[r]) : (e) => e;
  var nd = class {
    constructor(e, { location: r = Se.location, threshold: o = Se.threshold, distance: i = Se.distance, includeMatches: l = Se.includeMatches, findAllMatches: u = Se.findAllMatches, minMatchCharLength: c = Se.minMatchCharLength, isCaseSensitive: d = Se.isCaseSensitive, ignoreDiacritics: m = Se.ignoreDiacritics, ignoreLocation: h = Se.ignoreLocation } = {}) {
      if (this.options = {
        location: r,
        threshold: o,
        distance: i,
        includeMatches: l,
        findAllMatches: u,
        minMatchCharLength: c,
        isCaseSensitive: d,
        ignoreDiacritics: m,
        ignoreLocation: h
      }, e = d ? e : e.toLowerCase(), e = m ? zs(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
      const p = (v, x) => {
        this.chunks.push({
          pattern: v,
          alphabet: lE(v),
          startIndex: x
        });
      }, y = this.pattern.length;
      if (y > 32) {
        let v = 0;
        const x = y % 32, S = y - x;
        for (; v < S; ) p(this.pattern.substr(v, 32), v), v += 32;
        if (x) {
          const k = y - 32;
          p(this.pattern.substr(k), k);
        }
      } else p(this.pattern, 0);
    }
    searchIn(e) {
      const { isCaseSensitive: r, ignoreDiacritics: o, includeMatches: i } = this.options;
      if (e = r ? e : e.toLowerCase(), e = o ? zs(e) : e, this.pattern === e) {
        const S = {
          isMatch: true,
          score: 0
        };
        return i && (S.indices = [
          [
            0,
            e.length - 1
          ]
        ]), S;
      }
      const { location: l, distance: u, threshold: c, findAllMatches: d, minMatchCharLength: m, ignoreLocation: h } = this.options, p = [];
      let y = 0, v = false;
      this.chunks.forEach(({ pattern: S, alphabet: k, startIndex: _ }) => {
        const { isMatch: E, score: $, indices: b } = iE(e, S, k, {
          location: l + _,
          distance: u,
          threshold: c,
          findAllMatches: d,
          minMatchCharLength: m,
          includeMatches: i,
          ignoreLocation: h
        });
        E && (v = true), y += $, E && b && p.push(...b);
      });
      const x = {
        isMatch: v,
        score: v ? y / this.chunks.length : 1
      };
      return v && i && (x.indices = td(p)), x;
    }
  };
  const uE = /* @__PURE__ */ new Set([
    "fuzzy",
    "include"
  ]);
  function cE(e) {
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
          let o = 0, i;
          const l = [], u = e.length;
          for (; (i = r.indexOf(e, o)) > -1; ) o = i + u, l.push([
            i,
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
        const o = new nd(e, {
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
          search(i) {
            return o.searchIn(i);
          }
        };
      }
    }
  ], Xp = Nc.length, dE = "\0", fE = "|";
  function hE(e) {
    const r = [], o = e.length;
    let i = 0;
    for (; i < o; ) {
      for (; i < o && e[i] === " "; ) i++;
      if (i >= o) break;
      let l = i;
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
        r.push(e.substring(i, l)), i = l;
      } else {
        for (; l < o && e[l] !== " "; ) l++;
        r.push(e.substring(i, l)), i = l;
      }
    }
    return r;
  }
  function Kp(e, r) {
    const o = e.match(r);
    return o ? o[1] : null;
  }
  function pE(e, r = {}) {
    return e.replace(/\\\|/g, dE).split(fE).map((o) => {
      const i = hE(o.replace(/\u0000/g, "|").trim()).filter((u) => u && !!u.trim()), l = [];
      for (let u = 0, c = i.length; u < c; u += 1) {
        const d = i[u];
        let m = false, h = -1;
        for (; !m && ++h < Xp; ) {
          const p = Nc[h], y = Kp(d, p.multiRegex);
          y && (l.push(p.create(y, r)), m = true);
        }
        if (!m) for (h = -1; ++h < Xp; ) {
          const p = Nc[h], y = Kp(d, p.singleRegex);
          if (y) {
            l.push(p.create(y, r));
            break;
          }
        }
      }
      return l;
    });
  }
  var mE = class {
    constructor(e, { isCaseSensitive: r = Se.isCaseSensitive, ignoreDiacritics: o = Se.ignoreDiacritics, includeMatches: i = Se.includeMatches, minMatchCharLength: l = Se.minMatchCharLength, ignoreLocation: u = Se.ignoreLocation, findAllMatches: c = Se.findAllMatches, location: d = Se.location, threshold: m = Se.threshold, distance: h = Se.distance } = {}) {
      this.query = null, this.options = {
        isCaseSensitive: r,
        ignoreDiacritics: o,
        includeMatches: i,
        minMatchCharLength: l,
        findAllMatches: c,
        ignoreLocation: u,
        location: d,
        threshold: m,
        distance: h
      }, e = r ? e : e.toLowerCase(), e = o ? zs(e) : e, this.pattern = e, this.query = pE(this.pattern, this.options);
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
      const { includeMatches: o, isCaseSensitive: i, ignoreDiacritics: l } = this.options;
      e = i ? e : e.toLowerCase(), e = l ? zs(e) : e;
      let u = 0;
      const c = [];
      let d = 0, m = false;
      for (let h = 0, p = r.length; h < p; h += 1) {
        const y = r[h];
        c.length = 0, u = 0, m = false;
        for (let v = 0, x = y.length; v < x; v += 1) {
          const S = y[v], { isMatch: k, indices: _, score: E } = S.search(e);
          if (k) u += 1, d += E, cE(S.type) && (m = true), o && (uE.has(S.type) ? c.push(..._) : c.push(_));
          else {
            d = 0, u = 0, c.length = 0, m = false;
            break;
          }
        }
        if (u) {
          const v = {
            isMatch: true,
            score: d / u
          };
          return m && (v.hasInverse = true), o && (v.indices = td(c)), v;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  const Mc = [];
  function rd(...e) {
    Mc.push(...e);
  }
  function Fl(e, r) {
    for (let o = 0, i = Mc.length; o < i; o += 1) {
      const l = Mc[o];
      if (l.condition(e, r)) return new l(e, r);
    }
    return new nd(e, r);
  }
  const Bl = {
    AND: "$and",
    OR: "$or"
  }, Ic = {
    PATH: "$path",
    PATTERN: "$val"
  }, bc = (e) => !!(e[Bl.AND] || e[Bl.OR]), gE = (e) => !!e[Ic.PATH], yE = (e) => !yr(e) && Dm(e) && !bc(e), Qp = (e) => ({
    [Bl.AND]: Object.keys(e).map((r) => ({
      [r]: e[r]
    }))
  });
  function jm(e, r, { auto: o = true } = {}) {
    const i = (l) => {
      if (xt(l)) {
        const m = {
          keyId: null,
          pattern: l
        };
        return o && (m.searcher = Fl(l, r)), m;
      }
      const u = Object.keys(l), c = gE(l);
      if (!c && u.length > 1 && !bc(l)) return i(Qp(l));
      if (yE(l)) {
        const m = c ? l[Ic.PATH] : u[0], h = c ? l[Ic.PATTERN] : l[m];
        if (!xt(h)) throw new Error(Yk(m));
        const p = {
          keyId: bl(m),
          pattern: h
        };
        return o && (p.searcher = Fl(h, r)), p;
      }
      const d = {
        children: [],
        operator: u[0]
      };
      return u.forEach((m) => {
        const h = l[m];
        yr(h) && h.forEach((p) => {
          d.children.push(i(p));
        });
      }), d;
    };
    return bc(e) || (e = Qp(e)), i(e);
  }
  function Tc(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    let o = 1;
    return e.forEach(({ key: i, norm: l, score: u }) => {
      const c = i ? i.weight : null;
      o *= Math.pow(u === 0 && c ? Number.EPSILON : u, (c || 1) * (r ? 1 : l));
    }), o;
  }
  function vE(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    e.forEach((o) => {
      o.score = Tc(o.matches, {
        ignoreFieldNorm: r
      });
    });
  }
  var wE = class {
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
        const i = r[e];
        r[e] = r[o], r[o] = i, e = o;
      }
    }
    _sinkDown(e) {
      const r = this.heap, o = r.length;
      let i = e;
      do {
        e = i;
        const l = 2 * e + 1, u = 2 * e + 2;
        if (l < o && r[l].score > r[i].score && (i = l), u < o && r[u].score > r[i].score && (i = u), i !== e) {
          const c = r[e];
          r[e] = r[i], r[i] = c;
        }
      } while (i !== e);
    }
  };
  function xE(e) {
    const r = [];
    return e.matches.forEach((o) => {
      if (!Dt(o.indices) || !o.indices.length) return;
      const i = {
        indices: o.indices,
        value: o.value
      };
      o.key && (i.key = o.key.id), o.idx > -1 && (i.refIndex = o.idx), r.push(i);
    }), r;
  }
  function SE(e, r, { includeMatches: o = Se.includeMatches, includeScore: i = Se.includeScore } = {}) {
    return e.map((l) => {
      const { idx: u } = l, c = {
        item: r[u],
        refIndex: u
      };
      return o && (c.matches = xE(l)), i && (c.score = l.score), c;
    });
  }
  const kE = /[\p{L}\p{M}\p{N}_]+/gu, Zp = /* @__PURE__ */ new WeakSet();
  function EE(e) {
    Zp.has(e) || (Zp.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
  }
  function CE(e) {
    if (typeof e == "function") {
      let r = false;
      return (o) => {
        const i = e(o);
        if (!r && (r = true, !Array.isArray(i) || i.some((l) => typeof l != "string"))) throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(i) ? "array containing non-strings" : typeof i}.`);
        return i;
      };
    }
    return e instanceof RegExp ? (e.global || EE(e), (r) => r.match(e) || []) : (r) => r.match(kE) || [];
  }
  function Ac({ isCaseSensitive: e = false, ignoreDiacritics: r = false, tokenize: o } = {}) {
    const i = CE(o);
    return {
      tokenize(l) {
        return e || (l = l.toLowerCase()), r && (l = zs(l)), i(l);
      }
    };
  }
  var _E = class {
    static condition(e, r) {
      return r.useTokenSearch;
    }
    constructor(e, r) {
      this.options = r, this.analyzer = Ac({
        isCaseSensitive: r.isCaseSensitive,
        ignoreDiacritics: r.ignoreDiacritics,
        tokenize: r.tokenize
      });
      const o = this.analyzer.tokenize(e), { df: i, fieldCount: l } = r._invertedIndex;
      this.termSearchers = [], this.idfWeights = [];
      for (const u of o) {
        this.termSearchers.push(new nd(u, {
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
        const c = i.get(u) || 0, d = Math.log(1 + (l - c + 0.5) / (c + 0.5));
        this.idfWeights.push(d);
      }
      this.combineAll = r.tokenMatch === "all", this.numTerms = this.termSearchers.length, this.useMask = this.numTerms <= 31;
    }
    searchIn(e) {
      if (!this.termSearchers.length) return {
        isMatch: false,
        score: 1
      };
      const r = [];
      let o = 0, i = 0, l = 0, u = 0;
      const c = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
      for (let h = 0; h < this.termSearchers.length; h++) {
        const p = this.termSearchers[h].searchIn(e), y = this.idfWeights[h];
        i += y, p.isMatch && (l++, o += y * (1 - p.score), p.indices && r.push(...p.indices), this.combineAll && (this.useMask ? u |= 1 << h : c.add(h)));
      }
      if (l === 0) return {
        isMatch: false,
        score: 1
      };
      const d = i > 0 ? 1 - o / i : 0, m = {
        isMatch: true,
        score: Math.max(1e-3, d)
      };
      return this.options.includeMatches && r.length && (m.indices = td(r)), this.combineAll && (this.useMask ? m.matchedMask = u : m.matchedTerms = c, m.termCount = this.numTerms), m;
    }
  };
  function sc(e, r, o, i) {
    const l = i.tokenize(r);
    if (!l.length) return;
    e.fieldCount++, e.docFieldCount.set(o, (e.docFieldCount.get(o) || 0) + 1);
    const u = new Set(l);
    let c = e.docTermFieldHits.get(o);
    c || (c = /* @__PURE__ */ new Map(), e.docTermFieldHits.set(o, c));
    for (const d of u) c.set(d, (c.get(d) || 0) + 1), e.df.set(d, (e.df.get(d) || 0) + 1);
  }
  function Hm(e, r, o, i) {
    const { i: l, v: u, $: c } = r;
    if (u !== void 0) {
      sc(e, u, l, i);
      return;
    }
    if (c) for (let d = 0; d < o; d++) {
      const m = c[d];
      if (m) if (Array.isArray(m)) for (const h of m) sc(e, h.v, l, i);
      else sc(e, m.v, l, i);
    }
  }
  function NE(e, r, o) {
    const i = {
      fieldCount: 0,
      df: /* @__PURE__ */ new Map(),
      docFieldCount: /* @__PURE__ */ new Map(),
      docTermFieldHits: /* @__PURE__ */ new Map()
    };
    for (const l of e) Hm(i, l, r, o);
    return i;
  }
  function ME(e, r, o, i) {
    Hm(e, r, o, i);
  }
  function IE(e, r) {
    const o = e.docFieldCount.get(r);
    if (o === void 0) return;
    e.fieldCount -= o, e.docFieldCount.delete(r);
    const i = e.docTermFieldHits.get(r);
    if (i) {
      for (const [l, u] of i) {
        const c = (e.df.get(l) || 0) - u;
        c <= 0 ? e.df.delete(l) : e.df.set(l, c);
      }
      e.docTermFieldHits.delete(r);
    }
  }
  function qp(e, r) {
    if (r.length === 0) return;
    const o = Array.from(new Set(r)).sort((d, m) => d - m);
    for (const d of o) IE(e, d);
    const i = (d) => {
      let m = 0, h = o.length;
      for (; m < h; ) {
        const p = m + h >>> 1;
        o[p] < d ? m = p + 1 : h = p;
      }
      return d - m;
    }, l = o[0], u = /* @__PURE__ */ new Map();
    for (const [d, m] of e.docFieldCount) u.set(d > l ? i(d) : d, m);
    e.docFieldCount = u;
    const c = /* @__PURE__ */ new Map();
    for (const [d, m] of e.docTermFieldHits) c.set(d > l ? i(d) : d, m);
    e.docTermFieldHits = c;
  }
  var vr = class {
    constructor(e, r, o) {
      this.options = {
        ...Se,
        ...r
      }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new Zk(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, o), this._lastQuery = null, this._lastSearcher = null;
    }
    _getSearcher(e) {
      if (this._lastQuery === e) return this._lastSearcher;
      const r = Fl(e, this._invertedIndex ? {
        ...this.options,
        _invertedIndex: this._invertedIndex
      } : this.options);
      return this._lastQuery = e, this._lastSearcher = r, r;
    }
    setCollection(e, r) {
      if (this._docs = e, r && !(r instanceof ed)) throw new Error(Wk);
      if (this._myIndex = r || Fm(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      }), this.options.useTokenSearch) {
        const o = Ac({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        this._invertedIndex = NE(this._myIndex.records, this._myIndex.keys.length, o);
      }
      this._invalidateSearcherCache();
    }
    add(e) {
      if (!Dt(e)) return;
      this._docs.push(e);
      const r = this._myIndex.add(e, this._docs.length - 1);
      if (this._invertedIndex && r) {
        const o = Ac({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        ME(this._invertedIndex, r, this._myIndex.keys.length, o);
      }
      this._invalidateSearcherCache();
    }
    remove(e = () => false) {
      const r = [], o = [];
      for (let i = 0, l = this._docs.length; i < l; i += 1) e(this._docs[i], i) && (r.push(this._docs[i]), o.push(i));
      if (o.length) {
        this._invertedIndex && qp(this._invertedIndex, o);
        const i = new Set(o);
        this._docs = this._docs.filter((l, u) => !i.has(u)), this._myIndex.removeAll(o), this._invalidateSearcherCache();
      }
      return r;
    }
    removeAt(e) {
      if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw new Error(_c);
      this._invertedIndex && qp(this._invertedIndex, [
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
      const { limit: o = -1 } = r || {}, { includeMatches: i, includeScore: l, shouldSort: u, sortFn: c, ignoreFieldNorm: d } = this.options;
      if (xt(e) && !e.trim()) {
        let p = this._docs.map((y, v) => ({
          item: y,
          refIndex: v
        }));
        return Il(o) && o > -1 && (p = p.slice(0, o)), p;
      }
      const m = Il(o) && o > 0 && xt(e);
      let h;
      if (m) {
        const p = new wE(o);
        xt(this._docs[0]) ? this._searchStringList(e, {
          heap: p,
          ignoreFieldNorm: d
        }) : this._searchObjectList(e, {
          heap: p,
          ignoreFieldNorm: d
        }), h = p.extractSorted(c);
      } else h = xt(e) ? xt(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), vE(h, {
        ignoreFieldNorm: d
      }), u && h.sort(c), Il(o) && o > -1 && (h = h.slice(0, o));
      return SE(h, this._docs, {
        includeMatches: i,
        includeScore: l
      });
    }
    _searchStringList(e, { heap: r, ignoreFieldNorm: o } = {}) {
      const i = this._getSearcher(e), l = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: u } = this._myIndex, c = r ? null : [];
      return u.forEach(({ v: d, i: m, n: h }) => {
        if (!Dt(d)) return;
        const p = i.searchIn(d);
        if (p.isMatch) {
          const y = {
            score: p.score,
            value: d,
            norm: h,
            indices: p.indices
          };
          l && (y.matchedMask = p.matchedMask, y.matchedTerms = p.matchedTerms, y.termCount = p.termCount);
          const v = [
            y
          ];
          if (!l || this._coversAllTokens(v)) {
            const x = {
              item: d,
              idx: m,
              matches: v
            };
            r ? (x.score = Tc(x.matches, {
              ignoreFieldNorm: o
            }), r.shouldInsert(x.score) && r.insert(x)) : c.push(x);
          }
        }
      }), c;
    }
    _searchLogical(e) {
      const r = jm(e, this.options), o = (c, d, m) => {
        if (!("children" in c)) {
          const { keyId: v, searcher: x } = c;
          let S;
          return v === null ? (S = [], this._myIndex.keys.forEach((k, _) => {
            S.push(...this._findMatches({
              key: k,
              value: d[_],
              searcher: x
            }));
          })) : S = this._findMatches({
            key: this._keyStore.get(v),
            value: this._myIndex.getValueForItemAtKeyId(d, v),
            searcher: x
          }), S && S.length ? [
            {
              idx: m,
              item: d,
              matches: S
            }
          ] : [];
        }
        const { children: h, operator: p } = c, y = [];
        for (let v = 0, x = h.length; v < x; v += 1) {
          const S = h[v], k = o(S, d, m);
          if (k.length) y.push(...k);
          else if (p === Bl.AND) return [];
        }
        return y;
      }, i = this._myIndex.records, l = /* @__PURE__ */ new Map(), u = [];
      return i.forEach(({ $: c, i: d }) => {
        if (Dt(c)) {
          const m = o(r, c, d);
          m.length && (l.has(d) || (l.set(d, {
            idx: d,
            item: c,
            matches: []
          }), u.push(l.get(d))), m.forEach(({ matches: h }) => {
            l.get(d).matches.push(...h);
          }));
        }
      }), u;
    }
    _searchObjectList(e, { heap: r, ignoreFieldNorm: o } = {}) {
      const i = this._getSearcher(e), l = this.options.useTokenSearch && this.options.tokenMatch === "all", { keys: u, records: c } = this._myIndex, d = r ? null : [];
      return c.forEach(({ $: m, i: h }) => {
        if (!Dt(m)) return;
        const p = [];
        let y = false, v = false;
        if (u.forEach((x, S) => {
          const k = this._findMatches({
            key: x,
            value: m[S],
            searcher: i
          });
          k.length ? (p.push(...k), k[0].hasInverse && (v = true)) : y = true;
        }), !(v && y) && p.length && (!l || this._coversAllTokens(p))) {
          const x = {
            idx: h,
            item: m,
            matches: p
          };
          r ? (x.score = Tc(x.matches, {
            ignoreFieldNorm: o
          }), r.shouldInsert(x.score) && r.insert(x)) : d.push(x);
        }
      }), d;
    }
    _findMatches({ key: e, value: r, searcher: o }) {
      if (!Dt(r)) return [];
      const i = [];
      if (yr(r)) r.forEach(({ v: l, i: u, n: c }) => {
        if (!Dt(l)) return;
        const d = o.searchIn(l);
        if (d.isMatch) {
          const m = {
            score: d.score,
            key: e,
            value: l,
            idx: u,
            norm: c,
            indices: d.indices,
            hasInverse: d.hasInverse
          };
          d.termCount !== void 0 && (m.matchedMask = d.matchedMask, m.matchedTerms = d.matchedTerms, m.termCount = d.termCount), i.push(m);
        }
      });
      else {
        const { v: l, n: u } = r, c = o.searchIn(l);
        if (c.isMatch) {
          const d = {
            score: c.score,
            key: e,
            value: l,
            norm: u,
            indices: c.indices,
            hasInverse: c.hasInverse
          };
          c.termCount !== void 0 && (d.matchedMask = c.matchedMask, d.matchedTerms = c.matchedTerms, d.termCount = c.termCount), i.push(d);
        }
      }
      return i;
    }
    _coversAllTokens(e) {
      const r = e.length ? e[0].termCount : void 0;
      if (r === void 0) return true;
      if (r <= 31) {
        let i = 0;
        for (let l = 0; l < e.length; l++) i |= e[l].matchedMask || 0;
        return i === 2 ** r - 1;
      }
      const o = /* @__PURE__ */ new Set();
      for (let i = 0; i < e.length; i++) {
        const l = e[i].matchedTerms;
        if (l) for (const u of l) o.add(u);
      }
      return o.size === r;
    }
  };
  vr.version = "7.4.2";
  vr.createIndex = Fm;
  vr.parseIndex = oE;
  vr.config = Se;
  vr.match = function(e, r, o) {
    if (o && o.useTokenSearch) throw new Error(Qk);
    return Fl(e, {
      ...Se,
      ...o
    }).searchIn(r);
  };
  vr.parseQuery = jm;
  rd(mE);
  rd(_E);
  vr.use = function(...e) {
    e.forEach((r) => rd(r));
  };
  var bE = vr;
  const TE = {
    keys: [
      "name",
      "type",
      "id"
    ],
    threshold: 0.32,
    ignoreLocation: true,
    includeScore: true
  }, AE = [];
  function $E() {
    const e = zt((i) => {
      var _a;
      return ((_a = i.model) == null ? void 0 : _a.components) ?? AE;
    }), r = $e((i) => i.searchQuery), o = z.useMemo(() => new bE(e, TE), [
      e
    ]);
    return z.useMemo(() => {
      const i = r.trim();
      return i ? o.search(i).map((l) => l.item) : e;
    }, [
      e,
      o,
      r
    ]);
  }
  const Es = 52, Jp = 288, e0 = 5;
  function RE({ results: e, onSelect: r }) {
    const o = z.useRef(null), [i, l] = z.useState(0), [u, c] = z.useState(Jp), m = nt((S) => S.theme) === "dark";
    z.useEffect(() => {
      const S = o.current;
      if (!S) return;
      const k = new ResizeObserver((_) => {
        for (const E of _) c(E.contentRect.height);
      });
      return k.observe(S), () => k.disconnect();
    }, []);
    const h = z.useCallback(() => {
      const S = o.current;
      S && l(S.scrollTop);
    }, []), p = e.length * Es, y = Math.max(0, Math.floor(i / Es) - e0), v = Math.min(e.length, Math.ceil((i + u) / Es) + e0), x = e.slice(y, v);
    return I.jsx("div", {
      className: `border-t ${m ? "border-white/10" : "border-slate-200"}`,
      children: I.jsx("div", {
        ref: o,
        className: "overflow-y-auto",
        style: {
          height: Math.min(p, Jp)
        },
        onScroll: h,
        children: I.jsx("div", {
          style: {
            height: p,
            position: "relative"
          },
          children: x.map((S, k) => {
            const _ = y + k;
            return I.jsxs("button", {
              className: `flex w-full items-center justify-between gap-3 px-3 text-left transition ${m ? "hover:bg-white/5" : "hover:bg-slate-100"}`,
              style: {
                position: "absolute",
                top: _ * Es,
                left: 0,
                right: 0,
                height: Es
              },
              onClick: () => r(S.id),
              type: "button",
              children: [
                I.jsxs("span", {
                  className: "min-w-0",
                  children: [
                    I.jsx("span", {
                      className: `block truncate text-sm font-medium ${m ? "text-slate-100" : "text-slate-800"}`,
                      children: S.name
                    }),
                    I.jsx("span", {
                      className: "block font-mono text-[11px] text-slate-500",
                      children: S.id
                    })
                  ]
                }),
                I.jsx("span", {
                  className: `shrink-0 rounded px-2 py-0.5 text-[10px] font-medium uppercase ${m ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-600"}`,
                  children: S.type
                })
              ]
            }, S.id);
          })
        })
      })
    });
  }
  function PE() {
    const [e, r] = z.useState(""), o = $e((h) => h.setSearchQuery), i = $E(), l = Zc(), u = z.useRef(null), d = nt((h) => h.theme) === "dark";
    z.useEffect(() => {
      const h = window.setTimeout(() => o(e), 150);
      return () => window.clearTimeout(h);
    }, [
      o,
      e
    ]), z.useEffect(() => {
      if (!e.trim()) {
        $e.setState({
          highlightedNodeIds: /* @__PURE__ */ new Set(),
          highlightedEdgeIds: /* @__PURE__ */ new Set()
        });
        return;
      }
      const p = new Set(i.map((y) => y.id));
      $e.setState({
        highlightedNodeIds: p,
        highlightedEdgeIds: /* @__PURE__ */ new Set()
      });
    }, [
      i,
      e
    ]), z.useEffect(() => {
      function h(p) {
        var _a, _b, _c2;
        p.key === "/" && !p.ctrlKey && !p.metaKey && document.activeElement !== u.current && (p.preventDefault(), (_a = u.current) == null ? void 0 : _a.focus()), (p.ctrlKey || p.metaKey) && p.key === "k" && (p.preventDefault(), (_b = u.current) == null ? void 0 : _b.focus()), p.key === "Escape" && document.activeElement === u.current && (r(""), o(""), (_c2 = u.current) == null ? void 0 : _c2.blur());
      }
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
    }, [
      o
    ]);
    function m(h) {
      l(h), r(""), o("");
    }
    return I.jsxs(Jc, {
      className: "w-[280px] overflow-hidden rounded-lg",
      children: [
        I.jsxs("div", {
          className: "flex items-center gap-2 px-3 py-2.5",
          children: [
            I.jsx("svg", {
              className: `h-4 w-4 shrink-0 ${d ? "text-slate-500" : "text-slate-400"}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: I.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            }),
            I.jsx("input", {
              ref: u,
              className: `w-full border-0 bg-transparent text-sm outline-none ${d ? "text-slate-100 placeholder:text-slate-600" : "text-slate-800 placeholder:text-slate-400"}`,
              onChange: (h) => r(h.target.value),
              placeholder: "Search components... (/)",
              value: e
            }),
            e.trim() ? I.jsx("button", {
              className: `shrink-0 ${d ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`,
              onClick: () => {
                r(""), o("");
              },
              type: "button",
              children: I.jsx("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: I.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            }) : null
          ]
        }),
        e.trim() ? I.jsx(RE, {
          results: i,
          onSelect: m
        }) : null
      ]
    });
  }
  function LE() {
    const e = nt((o) => o.theme), r = nt((o) => o.toggleTheme);
    return I.jsx("button", {
      className: "flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200 border-black/10 bg-black/5 text-slate-600 hover:bg-black/10 hover:text-slate-800",
      onClick: r,
      title: `Switch to ${e === "dark" ? "light" : "dark"} mode`,
      type: "button",
      children: e === "dark" ? I.jsx("svg", {
        className: "h-4 w-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: I.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        })
      }) : I.jsx("svg", {
        className: "h-4 w-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: I.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        })
      })
    });
  }
  const DE = {
    cpu: 0,
    bus: 1,
    memory: 2,
    dma: 2,
    custom: 3,
    peripheral: 4,
    interruptController: 5,
    interface: 6,
    clockReset: 6,
    debug: 6
  };
  function zE(e, r, o) {
    const i = e.length, l = r.length / Math.max(i, 1), u = e.some((p) => p.data.kind === "busChannel");
    if (i <= 25 && l < 1.5 && !u) return {
      "elk.algorithm": "stress",
      "elk.stress.desiredEdgeLength": "150",
      "elk.spacing.nodeNode": "64",
      "elk.edgeRouting": "SPLINES",
      ...(o == null ? void 0 : o.elkOptions) ?? {}
    };
    if (!u && l < 0.8 && i <= 150) return {
      "elk.algorithm": "mrtree",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": "52",
      "elk.spacing.edgeNode": "24",
      "elk.edgeRouting": "SPLINES",
      ...(o == null ? void 0 : o.elkOptions) ?? {}
    };
    const c = i > 500 ? "NETWORK_SIMPLEX" : "BRANDES_KOEPF", d = i <= 60 ? "SPLINES" : "ORTHOGONAL", m = l > 2.5 ? "36" : l > 1.5 ? "48" : "60", h = i > 500 ? "10" : "30";
    return {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": m,
      "elk.spacing.edgeEdge": "12",
      "elk.spacing.edgeNode": "20",
      "elk.layered.spacing.nodeNodeBetweenLayers": "88",
      "elk.layered.nodePlacement.strategy": c,
      "elk.layered.nodePlacement.bk.edgeStraightening": "true",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
      "elk.layered.crossingMinimization.greedySwitch": "true",
      "elk.layered.crossingMinimization.iterations": h,
      "elk.layered.mergeEdges": "true",
      "elk.layered.mergeNodes": "true",
      "elk.layered.wrapping.strategy": "OFF",
      "elk.edgeRouting": d,
      "org.eclipse.elk.portConstraints": "FIXED_ORDER",
      "elk.partitioning.activate": "true",
      ...(o == null ? void 0 : o.elkOptions) ?? {}
    };
  }
  function OE(e, r, o, i, l) {
    const u = [];
    if (i.length === 0) u.push({
      id: `left:${e}`,
      side: "LEFT",
      x: 0,
      y: o / 2
    });
    else {
      const c = o / (i.length + 1);
      i.forEach((d, m) => {
        u.push({
          id: `left:${e}:${d}`,
          side: "LEFT",
          x: 0,
          y: c * (m + 1)
        });
      });
    }
    if (l.length === 0) u.push({
      id: `right:${e}`,
      side: "RIGHT",
      x: r,
      y: o / 2
    });
    else {
      const c = o / (l.length + 1);
      l.forEach((d, m) => {
        u.push({
          id: `right:${e}:${d}`,
          side: "RIGHT",
          x: r,
          y: c * (m + 1)
        });
      });
    }
    return u;
  }
  function FE(e, r, o) {
    const i = zE(e, r, o), c = i["elk.algorithm"] === "layered", d = new Set(e.filter((p) => p.data.kind === "busChannel").map((p) => p.id)), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
    if (c) for (const p of r) d.has(p.target) && (m.has(p.target) || m.set(p.target, []), m.get(p.target).push(p.id)), d.has(p.source) && (h.has(p.source) || h.set(p.source, []), h.get(p.source).push(p.id));
    return {
      id: "root",
      layoutOptions: i,
      children: e.map((p) => {
        const y = p.data.kind === "busChannel", v = p.data.kind === "cluster", x = y ? Zl : v ? Hs : Ao, S = y ? jr : v ? Ql : Wr;
        let k = [];
        c && (y ? k = OE(p.id, x, S, m.get(p.id) ?? [], h.get(p.id) ?? []) : v || (k = [
          {
            id: `left:${p.id}`,
            side: "LEFT",
            x: 0,
            y: S / 2
          },
          {
            id: `right:${p.id}`,
            side: "RIGHT",
            x,
            y: S / 2
          }
        ]));
        const _ = {};
        if (c && !y && !v) {
          const E = p.data.kind === "component" || p.data.kind === "busChannel" ? p.data.component.type : void 0, $ = E ? DE[E] : void 0;
          $ != null && (_["elk.partitioning.partition"] = String($));
        }
        return {
          id: p.id,
          width: x,
          height: S,
          ...k.length ? {
            ports: k
          } : {},
          ...Object.keys(_).length ? {
            layoutOptions: _
          } : {}
        };
      }),
      edges: r.map((p) => {
        const y = d.has(p.source) ? `right:${p.source}:${p.id}` : `right:${p.source}`, v = d.has(p.target) ? `left:${p.target}:${p.id}` : `left:${p.target}`;
        return {
          id: p.id,
          sources: [
            {
              id: p.source,
              port: y
            }
          ],
          targets: [
            {
              id: p.target,
              port: v
            }
          ]
        };
      })
    };
  }
  const Vm = /* @__PURE__ */ new Map();
  function BE(e) {
    let r = 0;
    for (let o = 0; o < e.length; o++) {
      const i = e.charCodeAt(o);
      r = (r << 5) - r + i | 0;
    }
    return r.toString(36);
  }
  function jE(e, r) {
    const o = e.components.length, i = e.connections.length, l = (r == null ? void 0 : r.length) ? r.join(",") : "", u = l ? BE(l) : "none";
    return `${o}::${i}::${u}`;
  }
  function HE(e) {
    return Vm.get(e);
  }
  function VE(e, r) {
    Vm.set(e, r);
  }
  const t0 = {
    component: 0,
    cluster: 1,
    busChannel: 2
  };
  function UE(e) {
    return e.data.kind === "busChannel" ? {
      width: Zl,
      height: jr
    } : e.data.kind === "cluster" ? {
      width: Hs,
      height: Ql
    } : {
      width: Ao,
      height: Wr
    };
  }
  function WE(e) {
    return e.data.kind === "component" ? e.data.layer ?? 3 : e.data.kind === "busChannel" ? e.data.layer ?? 1 : 4;
  }
  function YE(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) r.set(o.source, (r.get(o.source) ?? 0) + 1), r.set(o.target, (r.get(o.target) ?? 0) + 1);
    return r;
  }
  function GE(e, r) {
    return e <= 3 ? e : r === 1 ? 1 : e <= 8 ? 2 : e <= 20 ? 3 : e <= 45 ? 4 : e <= 80 ? 5 : 6;
  }
  function XE(e, r) {
    return r === 1 ? 260 : e > 80 ? 210 : e > 40 ? 195 : e > 15 ? 180 : 160;
  }
  function ic(e, r) {
    const o = /* @__PURE__ */ new Map(), i = YE(r);
    for (const c of e) {
      const d = WE(c), m = o.get(d);
      m ? m.push(c) : o.set(d, [
        c
      ]);
    }
    const l = [], u = [
      ...o.keys()
    ].sort((c, d) => c - d);
    for (const c of u) {
      const m = [
        ...o.get(c)
      ].sort((_, E) => {
        const $ = (t0[_.data.kind] ?? 99) - (t0[E.data.kind] ?? 99);
        if ($ !== 0) return $;
        const b = (i.get(E.id) ?? 0) - (i.get(_.id) ?? 0);
        return b !== 0 ? b : _.id.localeCompare(E.id);
      }), h = GE(m.length, c), p = Math.ceil(m.length / h), y = XE(m.length, c), v = c === 1 ? 460 : c === 4 ? 340 : 300, S = (_l[c] ?? c * 420) - (h - 1) * v / 2, k = -((p - 1) * y) / 2;
      for (let _ = 0; _ < m.length; _++) {
        const E = m[_];
        if (!E) continue;
        const { width: $, height: b } = UE(E), A = _ % h, G = Math.floor(_ / h);
        l.push({
          ...E,
          position: {
            x: S + A * v - $ / 2,
            y: k + G * y
          }
        });
      }
    }
    return l;
  }
  let KE, QE, n0;
  KE = "modulepreload";
  QE = function(e) {
    return "/" + e;
  };
  n0 = {};
  ZE = function(r, o, i) {
    let l = Promise.resolve();
    if (o && o.length > 0) {
      let c = function(h) {
        return Promise.all(h.map((p) => Promise.resolve(p).then((y) => ({
          status: "fulfilled",
          value: y
        }), (y) => ({
          status: "rejected",
          reason: y
        }))));
      };
      document.getElementsByTagName("link");
      const d = document.querySelector("meta[property=csp-nonce]"), m = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute("nonce"));
      l = c(o.map((h) => {
        if (h = QE(h), h in n0) return;
        n0[h] = true;
        const p = h.endsWith(".css"), y = p ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${h}"]${y}`)) return;
        const v = document.createElement("link");
        if (v.rel = p ? "stylesheet" : KE, p || (v.as = "script"), v.crossOrigin = "", v.href = h, m && v.setAttribute("nonce", m), document.head.appendChild(v), p) return new Promise((x, S) => {
          v.addEventListener("load", x), v.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${h}`)));
        });
      }));
    }
    function u(c) {
      const d = new Event("vite:preloadError", {
        cancelable: true
      });
      if (d.payload = c, window.dispatchEvent(d), !d.defaultPrevented) throw c;
    }
    return l.then((c) => {
      for (const d of c || []) d.status === "rejected" && u(d.reason);
      return r().catch(u);
    });
  };
  function qE(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of Object.entries(e)) r.set(o, {
      category: i.category,
      layer: i.layer,
      groupId: i.groupId
    });
    return r;
  }
  function JE(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of Object.entries(e)) r.set(o, {
      connectionType: i.connectionType,
      sourcePortSide: i.sourcePortSide,
      targetPortSide: i.targetPortSide
    });
    return r;
  }
  function Um(e) {
    const r = {};
    for (const [o, i] of Object.entries(e)) {
      r[o] = {};
      for (const [l, u] of Object.entries(i)) r[o][l] = u;
    }
    return r;
  }
  function eC(e) {
    return {
      layerConstraints: e.layerConstraints,
      portConstraints: Um(e.portConstraints),
      groupHints: e.groupHints,
      elkOptions: e.elkOptions
    };
  }
  async function tC(e) {
    const { preprocessArchitectureWasm: r } = await ZE(async () => {
      const { preprocessArchitectureWasm: i } = await import("./index-BcnA6_2p.js");
      return {
        preprocessArchitectureWasm: i
      };
    }, []), o = await r(JSON.stringify(e));
    return {
      model: o.model,
      componentMetadata: qE(o.componentMetadata),
      connectionMetadata: JE(o.connectionMetadata),
      groups: o.groups,
      portSides: Um(o.portSides),
      elkHints: eC(o.elkHints)
    };
  }
  const nC = /\d+$/;
  function jl(e) {
    const r = {};
    for (const o of e) r[o.type] = (r[o.type] ?? 0) + 1;
    return r;
  }
  function $c(e, r) {
    const o = new Set(e.map((i) => i.id));
    return r.filter((i) => o.has(i.sourceComponentId) || o.has(i.targetComponentId)).length;
  }
  function rC(e) {
    const r = e.replace(nC, "").trim(), o = r.split(/[\s_\-]+/);
    return o[o.length - 1] ?? r;
  }
  function oC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const i = r.get(o.type);
      i ? i.push(o) : r.set(o.type, [
        o
      ]);
    }
    return r;
  }
  function sC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const i = rC(o.name), l = r.get(i);
      l ? l.push(o) : r.set(i, [
        o
      ]);
    }
    return r;
  }
  function iC(e, r) {
    const o = [];
    for (let i = 0; i < e.length; i += r) o.push(e.slice(i, i + r));
    return o;
  }
  function lC(e) {
    return e <= 12 ? e : e <= 30 ? Math.ceil(e / 3) : e <= 60 ? Math.ceil(e / 4) : Math.ceil(e / 5);
  }
  function Rc(e, r, o, i) {
    var _a, _b, _c2, _d, _e2;
    if (e.length <= 12) return [];
    const l = sC(e), u = [
      ...l.keys()
    ].sort();
    if (u.length >= 2 && e.length > 24) {
      const h = [];
      for (const p of u) {
        const y = l.get(p);
        if (y.length === 0) continue;
        const v = `${i}:${p.toLowerCase()}`, x = y.length > 12;
        h.push({
          id: v,
          name: y.length > 1 ? `${p} (${y.length})` : ((_a = y[0]) == null ? void 0 : _a.name) ?? p,
          type: ((_b = y[0]) == null ? void 0 : _b.type) ?? "custom",
          depth: o,
          componentIds: y.map((S) => S.id),
          childGroups: x ? Rc(y, r, o + 1, v) : [],
          metadata: {
            componentCount: y.length,
            connectionCount: $c(y, r),
            typeBreakdown: jl(y)
          }
        });
      }
      return h;
    }
    const c = lC(e.length), d = iC(e, c), m = [];
    for (let h = 0; h < d.length; h++) {
      const p = d[h];
      if (!p || p.length === 0) continue;
      const y = `${i}:part${h}`, v = p.length > 12, x = ((_c2 = p[0]) == null ? void 0 : _c2.name) ?? `Part ${h + 1}`, S = ((_d = p[p.length - 1]) == null ? void 0 : _d.name) ?? x, k = p.length > 2 ? `${x}..${S}` : x;
      m.push({
        id: y,
        name: `${k} (${p.length})`,
        type: ((_e2 = p[0]) == null ? void 0 : _e2.type) ?? "custom",
        depth: o,
        componentIds: p.map((_) => _.id),
        childGroups: v ? Rc(p, r, o + 1, y) : [],
        metadata: {
          componentCount: p.length,
          connectionCount: $c(p, r),
          typeBreakdown: jl(p)
        }
      });
    }
    return m;
  }
  function aC(e) {
    return 1001;
  }
  function uC(e, r) {
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
        typeBreakdown: jl(e.components)
      }
    }, i = aC(e.components.length);
    if (e.components.length < i) return o;
    const l = oC(e.components);
    for (const u of Y2) {
      const c = l.get(u);
      if (!c || c.length === 0) continue;
      const d = `hierarchy:${u}`, m = c.length > 12, h = {
        id: d,
        name: `${W2[u]} (${c.length})`,
        type: u,
        depth: 1,
        componentIds: c.map((p) => p.id),
        childGroups: m ? Rc(c, e.connections, 2, d) : [],
        metadata: {
          componentCount: c.length,
          connectionCount: $c(c, e.connections),
          typeBreakdown: jl(c)
        }
      };
      o.childGroups.push(h);
    }
    return o;
  }
  function cC(e) {
    const r = new Map(e.components.map((o) => [
      o.id,
      0
    ]));
    for (const o of e.connections) r.set(o.sourceComponentId, (r.get(o.sourceComponentId) ?? 0) + 1), r.set(o.targetComponentId, (r.get(o.targetComponentId) ?? 0) + 1);
    return r;
  }
  function dC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e.connections) {
      let i = r.get(o.sourceComponentId);
      i || (i = /* @__PURE__ */ new Set(), r.set(o.sourceComponentId, i)), i.add(o.id);
      let l = r.get(o.targetComponentId);
      l || (l = /* @__PURE__ */ new Set(), r.set(o.targetComponentId, l)), l.add(o.id);
    }
    return r;
  }
  function r0(e, r) {
    const o = /* @__PURE__ */ new Set();
    for (const i of e) {
      const l = r.get(i);
      if (l) for (const u of l) o.add(u);
    }
    return o.size;
  }
  function fC(e) {
    return e === "bus";
  }
  function hC(e, r, o, i) {
    return {
      id: e.id,
      type: "busChannel",
      position: {
        x: o,
        y: i
      },
      data: {
        kind: "busChannel",
        component: e,
        layer: r
      }
    };
  }
  function pC(e, r, o, i) {
    return {
      id: e.id,
      type: "architecture",
      position: {
        x: o,
        y: i
      },
      data: {
        kind: "component",
        component: e,
        layer: r
      }
    };
  }
  function mC(e, r, o) {
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
  function gC(e, r, o) {
    const i = /* @__PURE__ */ new Map();
    for (const l of e.connections) {
      const u = r.get(l.sourceComponentId), c = r.get(l.targetComponentId);
      if (!u || !c || u === c) continue;
      const d = `${u}->${c}`, m = i.get(d);
      m ? m.count += 1 : i.set(d, {
        connection: l,
        count: 1,
        source: u,
        target: c
      });
    }
    return [
      ...i.values()
    ].map(({ connection: l, count: u, source: c, target: d }) => {
      const m = o == null ? void 0 : o.get(l.id), h = {
        connection: l,
        connectionCount: u,
        connectionType: m == null ? void 0 : m.connectionType
      }, p = c.startsWith("hierarchy:"), y = d.startsWith("hierarchy:");
      return {
        id: u > 1 ? `agg_${c}_to_${d}` : l.id,
        source: c,
        target: d,
        sourceHandle: p ? void 0 : `right:${c}`,
        targetHandle: y ? void 0 : `left:${d}`,
        type: "architecture",
        data: h,
        markerEnd: {
          type: To.ArrowClosed
        }
      };
    });
  }
  function yC(e, r, o, i, l, u) {
    const c = [], d = [];
    if (e.childGroups.length === 0) {
      for (const h of e.componentIds) {
        const p = i.get(h);
        p && (c.push(p), l.set(h, h));
      }
      return {
        visibleComponents: c,
        clusters: d
      };
    }
    if (r.has(e.id)) for (const h of e.childGroups) {
      const p = h.componentIds.length, y = h.childGroups.length > 0;
      if (p <= V2 || !y) for (const v of h.componentIds) {
        const x = i.get(v);
        x && (c.push(x), l.set(v, v));
      }
      else {
        const v = r0(h.componentIds, u), x = {};
        for (const S of h.componentIds) {
          const k = i.get(S);
          k && (x[k.type] = (x[k.type] ?? 0) + 1);
        }
        d.push({
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
        for (const S of h.componentIds) l.set(S, h.id);
      }
    }
    else {
      const h = r0(e.componentIds, u), p = {};
      for (const y of e.componentIds) {
        const v = i.get(y);
        v && (p[v.type] = (p[v.type] ?? 0) + 1);
      }
      d.push({
        id: e.id,
        name: e.name,
        type: e.type === "group" ? "custom" : e.type,
        componentIds: e.componentIds,
        componentCount: e.componentIds.length,
        connectionCount: h,
        expanded: false,
        hierarchyPath: e.id.replace("hierarchy:", "").split(":"),
        depth: e.depth,
        typeBreakdown: p
      });
      for (const y of e.componentIds) l.set(y, e.id);
    }
    return {
      visibleComponents: c,
      clusters: d
    };
  }
  function vC(e, r, o) {
    var _a;
    const i = [], l = [], u = [];
    for (const h of e) {
      const y = ((_a = o == null ? void 0 : o.componentMetadata.get(h.id)) == null ? void 0 : _a.layer) ?? 3;
      fC(h.type) ? l.push({
        component: h,
        layer: y
      }) : u.push({
        component: h,
        layer: y
      });
    }
    const c = /* @__PURE__ */ new Map();
    for (const h of u) {
      const p = c.get(h.layer);
      p ? p.push(h) : c.set(h.layer, [
        h
      ]);
    }
    const d = [
      ...c.keys()
    ].sort((h, p) => h - p);
    for (const h of d) {
      const p = c.get(h), y = _l[h] ?? h * 300, x = -(p.length * Ap / 2) + Wr / 2;
      for (let S = 0; S < p.length; S++) {
        const k = p[S];
        if (!k) continue;
        const _ = x + S * Ap;
        i.push(pC(k.component, k.layer, y, _));
      }
    }
    const m = /* @__PURE__ */ new Map();
    for (const h of l) {
      const p = m.get(h.layer);
      p ? p.push(h) : m.set(h.layer, [
        h
      ]);
    }
    for (const [h, p] of m) {
      const y = _l[h] ?? h * 300, x = -(p.length * (jr + 40) / 2) + jr / 2;
      for (let S = 0; S < p.length; S++) {
        const k = p[S];
        if (!k) continue;
        const _ = x + S * (jr + 40);
        i.push(hC(k.component, k.layer, y, _));
      }
    }
    for (let h = 0; h < r.length; h++) {
      const p = r[h];
      if (!p) continue;
      const y = _l[4], v = -200 + h * (Hs + 80);
      i.push(mC(p, y + 400, v));
    }
    return i;
  }
  function xl(e, r, o) {
    cC(e);
    const i = uC(e), l = new Map(e.components.map((v) => [
      v.id,
      v
    ])), u = dC(e), c = r ?? /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), m = [], h = [];
    if (i.childGroups.length === 0) for (const v of i.componentIds) {
      const x = l.get(v);
      x && (m.push(x), d.set(v, v));
    }
    else for (const v of i.childGroups) {
      const x = yC(v, c, e, l, d, u);
      m.push(...x.visibleComponents), h.push(...x.clusters);
    }
    const p = vC(m, h, o), y = gC(e, d, o == null ? void 0 : o.connectionMetadata);
    return {
      nodes: p,
      edges: y
    };
  }
  function wC(e) {
    return e.ports ? e.ports.map((r) => {
      const o = r.side ?? "LEFT";
      return {
        portId: r.id.replace(/^port:[^:]+:/, ""),
        x: r.x ?? 0,
        y: r.y ?? 0,
        side: o
      };
    }) : [];
  }
  function lc(e, r) {
    const o = new Map(r.map((i) => [
      i.id,
      i.position
    ]));
    return e.map((i) => {
      const l = o.get(i.id);
      return l ? {
        ...i,
        position: l
      } : i;
    });
  }
  function o0(e, r) {
    var _a;
    const o = new Map((_a = r.children) == null ? void 0 : _a.map((i) => [
      i.id,
      i
    ]));
    return e.map((i) => {
      const l = o.get(i.id);
      if (!l) return i;
      const u = {
        ...i,
        position: {
          x: l.x ?? 0,
          y: l.y ?? 0
        }
      };
      if (i.data.kind === "component") {
        const c = wC(l);
        return {
          ...u,
          data: {
            ...i.data,
            portPositions: c.length > 0 ? c : i.data.portPositions
          }
        };
      }
      return u;
    });
  }
  function xC() {
    const e = zt((m) => m.model), r = be((m) => m.setNodes), o = be((m) => m.setEdges), i = be((m) => m.setLayoutLoading), l = be((m) => m.expandedClusterIds), u = be((m) => m.expansionPath), c = z.useRef(null), d = z.useRef(false);
    z.useEffect(() => {
      if (!e) return;
      if (e.components.length > G2) {
        i(true);
        const y = new Worker(new URL("/assets/preprocessWorker-DBZGLPjR.js", import.meta.url), {
          type: "module"
        });
        return y.onmessage = (v) => {
          v.data.result && (c.current = v.data.result);
          const { nodes: x, edges: S } = xl(e, l, v.data.result);
          r(x), o(S);
          const k = ic(x, S);
          r(lc(x, k)), i(false), d.current = true, y.terminate();
        }, y.onerror = () => {
          const { nodes: v, edges: x } = xl(e, l);
          r(v), o(x);
          const S = ic(v, x);
          r(lc(v, S)), i(false), d.current = true, y.terminate();
        }, y.postMessage({
          model: e
        }), () => {
          i(false), y.terminate();
        };
      }
      const p = setTimeout(async () => {
        const y = await tC(e);
        c.current = y;
        const { nodes: v, edges: x } = xl(e, l, y);
        r(v), o(x);
        const S = jE(e, u), k = HE(S);
        if (k) {
          r(o0(v, k)), d.current = true;
          return;
        }
        i(true);
        const _ = new Worker(new URL("/assets/layoutWorker-BJNLPia9.js", import.meta.url), {
          type: "module"
        });
        return _.onmessage = (E) => {
          E.data.layout ? (VE(S, E.data.layout), r(o0(v, E.data.layout)), E.data.duration && console.log(`ELK layout completed in ${E.data.duration.toFixed(0)}ms for ${v.length} nodes`)) : r(v), i(false), d.current = true, _.terminate();
        }, _.onerror = () => {
          r(v), i(false), d.current = true, _.terminate();
        }, _.postMessage({
          graph: FE(v, x, y.elkHints),
          elkHints: y.elkHints
        }), () => {
          i(false), _.terminate();
        };
      }, 10);
      return () => clearTimeout(p);
    }, [
      e,
      o,
      r,
      i
    ]), z.useEffect(() => {
      if (!e || !d.current) return;
      const { nodes: m, edges: h } = xl(e, l, c.current ?? void 0);
      r(m), o(h);
      const p = ic(m, h);
      r(lc(m, p));
    }, [
      l,
      u,
      e,
      r,
      o
    ]);
  }
  const SC = "http://www.w3.org/2000/svg";
  function od(e) {
    return e.data.kind === "busChannel" ? {
      width: 32,
      height: 720
    } : e.data.kind === "cluster" ? {
      width: 280,
      height: 118
    } : {
      width: 220,
      height: 88
    };
  }
  function kC(e) {
    const { width: r, height: o } = od(e);
    return {
      minX: e.position.x,
      minY: e.position.y,
      maxX: e.position.x + r,
      maxY: e.position.y + o
    };
  }
  function EC(e) {
    return e.length === 0 ? null : e.reduce((r, o) => ({
      minX: Math.min(r.minX, o.minX),
      minY: Math.min(r.minY, o.minY),
      maxX: Math.max(r.maxX, o.maxX),
      maxY: Math.max(r.maxY, o.maxY)
    }), {
      ...e[0]
    });
  }
  function Hl(e, r) {
    const { width: o, height: i } = od(e);
    return {
      x: r === "right" ? e.position.x + o : e.position.x,
      y: e.position.y + i / 2
    };
  }
  function CC(e, r) {
    const o = e.map(kC), i = new Map(e.map((l) => [
      l.id,
      l
    ]));
    for (const l of r) {
      const u = i.get(l.source), c = i.get(l.target);
      if (!u || !c) continue;
      const d = Hl(u, "right"), m = Hl(c, "left");
      o.push({
        minX: Math.min(d.x, m.x) - 40,
        minY: Math.min(d.y, m.y) - 40,
        maxX: Math.max(d.x, m.x) + 40,
        maxY: Math.max(d.y, m.y) + 40
      });
    }
    return EC(o);
  }
  function Kt(e, r = {}, o) {
    const i = document.createElementNS(SC, e);
    for (const [l, u] of Object.entries(r)) i.setAttribute(l, u);
    return o != null && (i.textContent = o), i;
  }
  function Te(e, r, o, i, l = {}) {
    const u = Kt("text", {
      x: String(r),
      y: String(o),
      ...l
    }, i);
    return e.appendChild(u), u;
  }
  function Pt(e, r) {
    const o = Kt("rect", r);
    return e.appendChild(o), o;
  }
  function Lt(e, r) {
    return Pt(e, {
      rx: "10",
      ry: "10",
      ...r
    });
  }
  function _C(e) {
    return `${e.name} (${e.direction}${e.width ? ` ${e.width}b` : ""})`;
  }
  const NC = {
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
  }, MC = {
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
  function IC(e, r, o) {
    const i = r ? NC : MC;
    return o ? {
      color: r ? "#818cf8" : "#6366f1",
      width: 2,
      dash: "4 3",
      opacity: 0.65
    } : i[e ?? "unknown"] ?? i.unknown;
  }
  function bC(e, r, o, i, l = 8) {
    const u = o - e, c = i - r, d = Math.abs(u), m = Math.abs(c), h = Math.min(l, d / 2, m / 2);
    if (h <= 0 || d < 1 || m < 1) return {
      path: `M ${e} ${r} L ${o} ${i}`,
      labelX: (e + o) / 2,
      labelY: (r + i) / 2
    };
    const p = Math.sign(c) || 1, y = u >= 0 ? e + u / 2 : e + 40;
    return {
      path: `M ${e} ${r} L ${y - h} ${r} Q ${y} ${r} ${y} ${r + p * h} L ${y} ${i - p * h} Q ${y} ${i} ${y - h} ${i} L ${o} ${i}`,
      labelX: y,
      labelY: (r + i) / 2
    };
  }
  function TC(e) {
    var _a, _b;
    return ((_a = e.data) == null ? void 0 : _a.connectionType) ? e.data.connectionType : ((_b = e.data) == null ? void 0 : _b.connectionCount) && e.data.connectionCount > 1 ? `${e.data.connectionCount}x` : "";
  }
  function s0(e) {
    return wt[e] ?? wt.custom;
  }
  function AC(e, r) {
    var _a;
    const o = Kt("g", {
      class: `node node-${e.data.kind}`
    }), { width: i, height: l } = od(e);
    if (e.data.kind === "busChannel") {
      const d = s0(e.data.component.type);
      Lt(o, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: String(i),
        height: String(l),
        fill: `${d.base}26`,
        stroke: `${d.base}66`,
        "stroke-width": "1.2"
      }), Pt(o, {
        x: String(e.position.x + 2),
        y: String(e.position.y),
        width: String(i - 4),
        height: "2",
        fill: d.base
      }), Pt(o, {
        x: String(e.position.x + 2),
        y: String(e.position.y + l - 2),
        width: String(i - 4),
        height: "2",
        fill: d.base
      });
      const m = e.position.x + i / 2, h = e.position.y + l / 2;
      return Te(o, m, h, e.data.component.name, {
        fill: d.text,
        "font-size": "13px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        transform: `rotate(-90 ${m} ${h})`
      }).setAttribute("font-weight", "600"), o;
    }
    if (Lt(o, {
      x: String(e.position.x + 2),
      y: String(e.position.y + 3),
      width: String(i),
      height: String(l),
      rx: "12",
      fill: "rgba(0,0,0,0.10)",
      opacity: "0.20"
    }), Lt(o, {
      x: String(e.position.x),
      y: String(e.position.y),
      width: String(i),
      height: String(l),
      fill: "#ffffff",
      stroke: "#cbd5e1",
      "stroke-width": "1.2"
    }), e.data.kind === "cluster") {
      const d = e.data.cluster, m = Object.keys(d.typeBreakdown ?? {})[0], h = m ? ((_a = wt[m]) == null ? void 0 : _a.base) ?? "#94a3b8" : "#94a3b8";
      Pt(o, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: "6",
        height: String(l),
        rx: "12",
        fill: h
      }), Te(o, e.position.x + 16, e.position.y + 22, d.name, {
        fill: "#0f172a",
        "font-size": "14px",
        "font-weight": "700",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Te(o, e.position.x + 16, e.position.y + 42, `${d.componentCount} blocks`, {
        fill: "#475569",
        "font-size": "11px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Te(o, e.position.x + 16, e.position.y + 58, `Connections: ${d.connectionCount}`, {
        fill: "#64748b",
        "font-size": "10px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });
      const p = Object.entries(d.typeBreakdown ?? {}).slice(0, r === "full" ? 4 : 3);
      let y = e.position.x + 16;
      for (const [v, x] of p) {
        const S = Math.max(56, v.length * 5 + String(x).length * 8 + 18);
        Lt(o, {
          x: String(y),
          y: String(e.position.y + 72),
          width: String(S),
          height: "18",
          fill: "#f1f5f9",
          stroke: "#e2e8f0",
          "stroke-width": "1"
        }), Te(o, y + 6, e.position.y + 85, `${v}:${x}`, {
          fill: "#475569",
          "font-size": "9px",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), y += S + 6;
      }
      return o;
    }
    const u = e.data.component, c = s0(u.type);
    if (Pt(o, {
      x: String(e.position.x),
      y: String(e.position.y),
      width: "6",
      height: String(l),
      rx: "12",
      fill: c.base
    }), Lt(o, {
      x: String(e.position.x + 16),
      y: String(e.position.y + 16),
      width: "40",
      height: "40",
      fill: `${c.base}18`,
      stroke: `${c.border}88`,
      "stroke-width": "1.2"
    }), Te(o, e.position.x + 36, e.position.y + 40, u.type.slice(0, 3).toUpperCase(), {
      fill: c.border,
      "font-size": "10px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle"
    }), Te(o, e.position.x + 64, e.position.y + 26, u.name, {
      fill: "#0f172a",
      "font-size": "13px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), Te(o, e.position.x + 64, e.position.y + 42, u.id, {
      fill: "#64748b",
      "font-size": "10px",
      "font-family": "SFMono-Regular, ui-monospace, monospace"
    }), r === "full") {
      Te(o, e.position.x + 64, e.position.y + 58, `${u.ports.length} ports / ${u.registers.length} registers`, {
        fill: "#475569",
        "font-size": "10px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });
      const d = u.ports.slice(0, 2);
      let m = e.position.y + 72;
      for (const h of d) Lt(o, {
        x: String(e.position.x + 64),
        y: String(m - 10),
        width: "140",
        height: "15",
        fill: "#f8fafc",
        stroke: "#e2e8f0",
        "stroke-width": "1"
      }), Te(o, e.position.x + 70, m, _C(h), {
        fill: "#334155",
        "font-size": "9px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), m += 16;
      u.ports.length > d.length && Te(o, e.position.x + 206, e.position.y + 86, `+${u.ports.length - d.length} more`, {
        fill: "#94a3b8",
        "font-size": "9px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "end"
      });
    }
    return o;
  }
  const ut = 360, Le = 20;
  function $C(e) {
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
  function RC(e, r, o, i, l) {
    const u = Kt("g", {
      class: "sidebar-panel"
    });
    if (Pt(u, {
      x: String(o),
      y: String(i),
      width: String(ut),
      height: String(l),
      fill: r ? "#0b1018" : "#fffcf9",
      stroke: r ? "rgba(255,255,255,0.1)" : "#e5e0d8",
      "stroke-width": "1"
    }), e.data.kind === "busChannel") {
      const k = e.data.component;
      wt[k.type] ?? wt.custom;
      const _ = o + ut / 2, E = i + l / 2;
      return Te(u, _, E, `Bus Channel: ${k.name}`, {
        fill: r ? "#e2e8f0" : "#1a1a1a",
        "font-size": "16px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle"
      }), u;
    }
    const c = e.data.kind === "cluster" ? null : e.data.component, d = e.data.kind === "cluster" ? e.data.cluster : null, m = (c == null ? void 0 : c.name) ?? (d == null ? void 0 : d.name) ?? "", h = (c == null ? void 0 : c.type) ?? (d == null ? void 0 : d.type) ?? "custom", p = (c == null ? void 0 : c.id) ?? (d == null ? void 0 : d.id) ?? "", y = wt[h] ?? wt.custom;
    let v = i + Le;
    Pt(u, {
      x: String(o),
      y: String(v),
      width: String(ut),
      height: "4",
      fill: y.base
    }), v += 16;
    const x = 40;
    Lt(u, {
      x: String(o + Le),
      y: String(v),
      width: String(x),
      height: String(x),
      fill: `${y.base}20`,
      stroke: `${y.border}40`,
      "stroke-width": "1"
    }), Te(u, o + Le + x / 2, v + x / 2 + 1, h.slice(0, 2).toUpperCase(), {
      fill: y.border,
      "font-size": "12px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle"
    });
    const S = o + Le + x + 12;
    if (Lt(u, {
      x: String(S),
      y: String(v + 2),
      width: String(h.length * 7 + 16),
      height: "20",
      fill: `${y.border}1a`,
      stroke: `${y.border}40`,
      "stroke-width": "1"
    }), Te(u, S + 8, v + 15, h, {
      fill: y.border,
      "font-size": "10px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-transform": "uppercase"
    }), Te(u, S, v + 38, m, {
      fill: r ? "#f8fafc" : "#0f172a",
      "font-size": "16px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), Te(u, S, v + 56, p, {
      fill: r ? "#64748b" : "#94a3b8",
      "font-size": "11px",
      "font-family": "SFMono-Regular, ui-monospace, monospace"
    }), v += 80, Pt(u, {
      x: String(o),
      y: String(v),
      width: String(ut),
      height: "1",
      fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
    }), v += 4, c) {
      const k = c.ports.length, _ = c.registers.length, E = v, $ = ut / 3;
      for (let b = 0; b < 3; b++) {
        const A = o + Le + b * $, G = b === 0 ? "Ports" : b === 1 ? "Registers" : "Connections", D = b === 0 ? k : b === 1 ? _ : k + _;
        Te(u, A + $ / 2, E + 4, String(D), {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "18px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "middle"
        }), Te(u, A + $ / 2, E + 20, G.toUpperCase(), {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "10px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "middle"
        });
      }
      v += 40, Pt(u, {
        x: String(o),
        y: String(v),
        width: String(ut),
        height: "1",
        fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
      }), v += 12, Te(u, o + Le, v + 4, "PORTS", {
        fill: r ? "#64748b" : "#94a3b8",
        "font-size": "11px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "letter-spacing": "0.05em"
      }), v += 16;
      for (const b of c.ports) {
        const A = $C(b.direction);
        Lt(u, {
          x: String(o + Le),
          y: String(v),
          width: String(ut - Le * 2),
          height: "28",
          fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
          stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
          "stroke-width": "1"
        }), Pt(u, {
          x: String(o + Le + 12),
          y: String(v + 10),
          width: "6",
          height: "6",
          fill: A.dot
        }), Te(u, o + Le + 24, v + 18, b.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), Lt(u, {
          x: String(o + ut - Le - 50),
          y: String(v + 6),
          width: String(b.direction.length * 6 + 12),
          height: "16",
          fill: A.bg
        }), Te(u, o + ut - Le - 50 + 6, v + 17, b.direction.toUpperCase(), {
          fill: A.text,
          "font-size": "10px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), b.width && Te(u, o + ut - Le - 16, v + 18, `${b.width}b`, {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "11px",
          "font-family": "SFMono-Regular, ui-monospace, monospace",
          "text-anchor": "end"
        }), v += 32;
      }
      if (v += 8, c.registers.length > 0) {
        Pt(u, {
          x: String(o),
          y: String(v),
          width: String(ut),
          height: "1",
          fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
        }), v += 12, Te(u, o + Le, v + 4, "REGISTERS", {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "11px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "letter-spacing": "0.05em"
        }), v += 16;
        for (const b of c.registers) Lt(u, {
          x: String(o + Le),
          y: String(v),
          width: String(ut - Le * 2),
          height: "28",
          fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
          stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
          "stroke-width": "1"
        }), Te(u, o + Le + 12, v + 18, b.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), b.address && (Lt(u, {
          x: String(o + ut - Le - 70),
          y: String(v + 6),
          width: String(b.address.length * 7 + 12),
          height: "16",
          fill: r ? "rgba(255,255,255,0.05)" : "#f1f5f9"
        }), Te(u, o + ut - Le - 70 + 6, v + 17, b.address, {
          fill: r ? "#94a3b8" : "#64748b",
          "font-size": "10px",
          "font-family": "SFMono-Regular, ui-monospace, monospace"
        })), v += 32;
      }
    } else if (d && (Te(u, o + Le, v + 4, "CLUSTER", {
      fill: r ? "#64748b" : "#94a3b8",
      "font-size": "11px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "letter-spacing": "0.05em"
    }), v += 16, Te(u, o + Le, v + 4, `${d.componentCount} components`, {
      fill: r ? "#e2e8f0" : "#334155",
      "font-size": "13px",
      "font-weight": "500",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), v += 20, d.typeBreakdown)) for (const [k, _] of Object.entries(d.typeBreakdown)) {
      const E = wt[k] ?? wt.custom;
      Lt(u, {
        x: String(o + Le),
        y: String(v),
        width: String(ut - Le * 2),
        height: "28",
        fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
        stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
        "stroke-width": "1"
      }), Pt(u, {
        x: String(o + Le + 12),
        y: String(v + 10),
        width: "6",
        height: "6",
        fill: E.base
      }), Te(u, o + Le + 24, v + 18, k, {
        fill: r ? "#e2e8f0" : "#334155",
        "font-size": "13px",
        "font-weight": "500",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Te(u, o + ut - Le - 12, v + 18, `\xD7${_}`, {
        fill: r ? "#94a3b8" : "#64748b",
        "font-size": "13px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "end"
      }), v += 32;
    }
    return u;
  }
  const PC = "http://www.w3.org/2000/svg";
  function LC(e, r, o) {
    if (o === "full") return {
      nodes: e,
      edges: r
    };
    const i = $e.getState().selectedNodeIds;
    if (i.size === 0) return {
      nodes: e,
      edges: r
    };
    const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
    for (const h of r) (i.has(h.source) || i.has(h.target)) && (l.add(h.id), i.has(h.source) && u.add(h.target), i.has(h.target) && u.add(h.source));
    const c = /* @__PURE__ */ new Set([
      ...i,
      ...u
    ]), d = e.filter((h) => c.has(h.id)), m = r.filter((h) => l.has(h.id));
    return d.length === 0 ? {
      nodes: e,
      edges: r
    } : {
      nodes: d,
      edges: m
    };
  }
  function DC(e) {
    const r = $e.getState().selectedNodeIds;
    if (r.size === 0) return null;
    const o = $e.getState().selectedNodeId;
    if (o) {
      const l = e.find((u) => u.id === o);
      if (l) return l;
    }
    const i = [
      ...r
    ][0];
    return e.find((l) => l.id === i) ?? null;
  }
  function zC(e, r) {
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
  function OC(e, r, o, i) {
    var _a;
    const l = CC(e, r);
    if (!l) throw new Error("Unable to determine export bounds.");
    const u = e.length <= 40 ? "full" : "compact", c = u === "full" ? 96 : 128, d = l.maxX - l.minX + c * 2, m = l.maxY - l.minY + c * 2, h = l.minX - c, p = l.minY - c, y = i ? 24 : 0, v = d + y + (i ? ut : 0), x = new Map(e.map(($) => [
      $.id,
      $
    ])), S = Kt("svg", {
      xmlns: PC,
      width: String(v),
      height: String(m),
      viewBox: `${h} ${p} ${v} ${m}`,
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), k = Kt("defs");
    zC(k, o), S.appendChild(k), Pt(S, {
      x: String(h),
      y: String(p),
      width: String(d),
      height: String(m),
      fill: o ? "#020617" : "#faf8f5"
    });
    const _ = Kt("g", {
      class: "edges"
    });
    for (const $ of r) {
      const b = x.get($.source), A = x.get($.target);
      if (!b || !A) continue;
      const G = $.source.startsWith("hierarchy:") || $.target.startsWith("hierarchy:"), D = IC((_a = $.data) == null ? void 0 : _a.connectionType, o, G), Q = Hl(b, "right"), q = Hl(A, "left"), { path: Y, labelX: J, labelY: U } = bC(Q.x, Q.y, q.x, q.y);
      _.appendChild(Kt("path", {
        d: Y,
        fill: "none",
        stroke: D.color,
        "stroke-width": String(D.width),
        "stroke-opacity": String(D.opacity),
        "stroke-dasharray": D.dash ?? "",
        "marker-end": "url(#export-arrow)"
      }));
      const Z = TC($);
      if (Z) {
        const ee = Math.max(36, Z.length * 7 + 10);
        _.appendChild(Kt("rect", {
          x: String(J - ee / 2),
          y: String(U - 10),
          width: String(ee),
          height: "18",
          rx: "9",
          fill: o ? "#0f172a" : "#ffffff",
          stroke: o ? "#334155" : "#cbd5e1"
        })), Te(_, J, U + 3, Z, {
          fill: o ? "#e2e8f0" : "#334155",
          "font-size": "9px",
          "text-anchor": "middle",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        });
      }
    }
    S.appendChild(_);
    const E = Kt("g", {
      class: "nodes"
    });
    for (const $ of e) E.appendChild(AC($, u));
    if (S.appendChild(E), i) {
      const $ = DC(e);
      if ($) {
        const b = h + d + y, A = p;
        S.appendChild(RC($, o, b, A, m));
      }
    }
    return S;
  }
  function Wm(e) {
    return new XMLSerializer().serializeToString(e);
  }
  async function FC(e, r) {
    const o = Wm(e), i = new Blob([
      o
    ], {
      type: "image/svg+xml;charset=utf-8"
    }), l = URL.createObjectURL(i);
    try {
      const u = new Image();
      u.decoding = "async", u.src = l, await u.decode();
      const c = document.createElement("canvas");
      c.width = Math.ceil(e.viewBox.baseVal.width), c.height = Math.ceil(e.viewBox.baseVal.height);
      const d = c.getContext("2d");
      if (!d) throw new Error("Canvas unavailable");
      return d.fillStyle = r ? "#020617" : "#faf8f5", d.fillRect(0, 0, c.width, c.height), d.drawImage(u, 0, 0), c.toDataURL("image/png");
    } finally {
      URL.revokeObjectURL(l);
    }
  }
  function Ym(e, r) {
    const o = document.createElement("a");
    o.href = e, o.download = r, o.click();
  }
  function BC(e, r) {
    const o = URL.createObjectURL(e);
    try {
      Ym(o, r);
    } finally {
      setTimeout(() => URL.revokeObjectURL(o), 0);
    }
  }
  async function jC(e, r = {}) {
    const o = be.getState(), l = nt.getState().theme === "dark", u = r.scope ?? ($e.getState().selectedNodeId ? "selection" : "full"), { nodes: c, edges: d } = LC(o.nodes, o.edges, u);
    if (c.length === 0) throw new Error("There is nothing to export.");
    const h = OC(c, d, l, u === "selection");
    if (e === "svg") {
      const y = new Blob([
        Wm(h)
      ], {
        type: "image/svg+xml;charset=utf-8"
      });
      BC(y, `architecture-${u}.svg`);
      return;
    }
    const p = await FC(h, l);
    Ym(p, `architecture-${u}.png`);
  }
  function HC() {
    const e = zt((b) => b.model !== null), r = zt((b) => {
      var _a;
      return ((_a = b.model) == null ? void 0 : _a.components.length) ?? 0;
    }), o = zt((b) => {
      var _a;
      return ((_a = b.model) == null ? void 0 : _a.connections.length) ?? 0;
    }), i = zt((b) => b.clearModel), l = $e((b) => b.selectedNodeId), u = $e((b) => b.selectedNodeIds), c = be((b) => b.sidebarCollapsed), d = be((b) => b.setNodes), m = be((b) => b.setEdges), h = be((b) => b.resetExpansion), p = $e((b) => b.clearSelection), y = $e((b) => b.setSearchQuery), v = nt((b) => b.theme), x = v === "dark", [S, k] = z.useState(false);
    xC(), z.useEffect(() => {
      document.documentElement.setAttribute("data-theme", v), x ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [
      v,
      x
    ]);
    function _() {
      p(), y(""), d([]), m([]), h(), i();
    }
    async function E(b, A = "full") {
      k(true);
      try {
        await jC(b, {
          scope: A
        });
      } catch (G) {
        console.error("Export failed:", G);
      } finally {
        k(false);
      }
    }
    const $ = `grid h-screen overflow-hidden transition-colors duration-200 ${x ? "bg-shell-950 text-slate-100" : "bg-[#faf8f5] text-[#1a1a1a]"} ${l && !c ? "grid-cols-[minmax(0,1fr)_360px]" : "grid-cols-[minmax(0,1fr)]"}`;
    return I.jsxs("main", {
      className: $,
      children: [
        I.jsxs("section", {
          className: "relative min-w-0 overflow-hidden",
          children: [
            I.jsxs("div", {
              className: "absolute left-5 top-5 z-10 flex items-start gap-3",
              children: [
                I.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    I.jsx("h1", {
                      className: `text-lg font-semibold ${x ? "text-slate-50" : "text-slate-900"}`,
                      children: "ip-xact"
                    }),
                    e ? I.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition ${x ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200" : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"}`,
                      onClick: _,
                      title: "Load new architecture",
                      type: "button",
                      children: [
                        I.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: I.jsx("path", {
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
                e ? I.jsxs(I.Fragment, {
                  children: [
                    I.jsxs("p", {
                      className: "mt-1 text-xs font-medium text-slate-500",
                      children: [
                        r,
                        " components / ",
                        o,
                        " connections"
                      ]
                    }),
                    u.size > 1 ? I.jsxs("p", {
                      className: `mt-0.5 text-[11px] font-medium ${x ? "text-cyan-300/80" : "text-cyan-700"}`,
                      children: [
                        u.size,
                        " selected for export"
                      ]
                    }) : null
                  ]
                }) : null,
                I.jsx(PE, {})
              ]
            }),
            I.jsxs("div", {
              className: "absolute right-5 top-5 z-10 flex items-center gap-2",
              children: [
                e ? I.jsxs("div", {
                  className: "relative group",
                  children: [
                    I.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${x ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200" : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"}`,
                      disabled: S,
                      type: "button",
                      children: [
                        I.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: I.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          })
                        }),
                        S ? "Exporting..." : "Export"
                      ]
                    }),
                    I.jsxs("div", {
                      className: `invisible group-hover:visible absolute right-0 top-full mt-1 rounded-lg border shadow-lg py-1 z-50 ${x ? "border-white/10 bg-shell-900" : "border-slate-200 bg-white"}`,
                      children: [
                        I.jsx("button", {
                          className: `block w-full px-4 py-2 text-left text-xs transition ${x ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-50"}`,
                          onClick: () => E("png", "full"),
                          type: "button",
                          children: "Export as PNG"
                        }),
                        I.jsx("button", {
                          className: `block w-full px-4 py-2 text-left text-xs transition ${x ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-50"}`,
                          onClick: () => E("svg", "full"),
                          type: "button",
                          children: "Export Full SVG"
                        }),
                        I.jsx("button", {
                          className: `block w-full px-4 py-2 text-left text-xs transition ${u.size > 0 ? x ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-50" : "cursor-not-allowed text-slate-400"}`,
                          disabled: u.size === 0,
                          onClick: () => E("svg", "selection"),
                          type: "button",
                          children: "Export Selected SVG"
                        })
                      ]
                    })
                  ]
                }) : null,
                I.jsx(LE, {})
              ]
            }),
            I.jsx(Ak, {}),
            e ? null : I.jsx(Fk, {})
          ]
        }),
        I.jsx(jk, {})
      ]
    });
  }
  function VC() {
    return I.jsx(Qc, {
      children: I.jsx(HC, {})
    });
  }
  document.documentElement.classList.add("dark");
  Oy.createRoot(document.getElementById("root")).render(I.jsx(z.StrictMode, {
    children: I.jsx(VC, {})
  }));
})();
export {
  ZE as _,
  __tla
};
