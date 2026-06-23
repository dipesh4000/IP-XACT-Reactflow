(async () => {
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
  function d0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Hu = {
    exports: {}
  }, xs = {}, Vu = {
    exports: {}
  }, Ce = {};
  var $h;
  function zy() {
    if ($h) return Ce;
    $h = 1;
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.iterator;
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
    }, k = Object.assign, S = {};
    function C(N, D, oe) {
      this.props = N, this.context = D, this.refs = S, this.updater = oe || x;
    }
    C.prototype.isReactComponent = {}, C.prototype.setState = function(N, D) {
      if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, N, D, "setState");
    }, C.prototype.forceUpdate = function(N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    };
    function E() {
    }
    E.prototype = C.prototype;
    function A(N, D, oe) {
      this.props = N, this.context = D, this.refs = S, this.updater = oe || x;
    }
    var P = A.prototype = new E();
    P.constructor = A, k(P, C.prototype), P.isPureReactComponent = true;
    var I = Array.isArray, F = Object.prototype.hasOwnProperty, z = {
      current: null
    }, Q = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function q(N, D, oe) {
      var ne, le = {}, ae = null, he = null;
      if (D != null) for (ne in D.ref !== void 0 && (he = D.ref), D.key !== void 0 && (ae = "" + D.key), D) F.call(D, ne) && !Q.hasOwnProperty(ne) && (le[ne] = D[ne]);
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
        _owner: z.current
      };
    }
    function G(N, D) {
      return {
        $$typeof: e,
        type: N.type,
        key: D,
        ref: N.ref,
        props: N.props,
        _owner: N._owner
      };
    }
    function J(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function ee(N) {
      var D = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + N.replace(/[=:]/g, function(oe) {
        return D[oe];
      });
    }
    var Y = /\/+/g;
    function Z(N, D) {
      return typeof N == "object" && N !== null && N.key != null ? ee("" + N.key) : D.toString(36);
    }
    function _(N, D, oe, ne, le) {
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
      if (he) return he = N, le = le(he), N = ne === "" ? "." + Z(he, 0) : ne, I(le) ? (oe = "", N != null && (oe = N.replace(Y, "$&/") + "/"), _(le, D, oe, "", function(Ee) {
        return Ee;
      })) : le != null && (J(le) && (le = G(le, oe + (!le.key || he && he.key === le.key ? "" : ("" + le.key).replace(Y, "$&/") + "/") + N)), D.push(le)), 1;
      if (he = 0, ne = ne === "" ? "." : ne + ":", I(N)) for (var me = 0; me < N.length; me++) {
        ae = N[me];
        var ve = ne + Z(ae, me);
        he += _(ae, D, oe, ve, le);
      }
      else if (ve = v(N), typeof ve == "function") for (N = ve.call(N), me = 0; !(ae = N.next()).done; ) ae = ae.value, ve = ne + Z(ae, me++), he += _(ae, D, oe, ve, le);
      else if (ae === "object") throw D = String(N), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
      return he;
    }
    function V(N, D, oe) {
      if (N == null) return N;
      var ne = [], le = 0;
      return _(N, ne, "", "", function(ae) {
        return D.call(oe, ae, le++);
      }), ne;
    }
    function O(N) {
      if (N._status === -1) {
        var D = N._result;
        D = D(), D.then(function(oe) {
          (N._status === 0 || N._status === -1) && (N._status = 1, N._result = oe);
        }, function(oe) {
          (N._status === 0 || N._status === -1) && (N._status = 2, N._result = oe);
        }), N._status === -1 && (N._status = 0, N._result = D);
      }
      if (N._status === 1) return N._result.default;
      throw N._result;
    }
    var K = {
      current: null
    }, B = {
      transition: null
    }, $ = {
      ReactCurrentDispatcher: K,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: z
    };
    function j() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return Ce.Children = {
      map: V,
      forEach: function(N, D, oe) {
        V(N, function() {
          D.apply(this, arguments);
        }, oe);
      },
      count: function(N) {
        var D = 0;
        return V(N, function() {
          D++;
        }), D;
      },
      toArray: function(N) {
        return V(N, function(D) {
          return D;
        }) || [];
      },
      only: function(N) {
        if (!J(N)) throw Error("React.Children.only expected to receive a single React element child.");
        return N;
      }
    }, Ce.Component = C, Ce.Fragment = o, Ce.Profiler = l, Ce.PureComponent = A, Ce.StrictMode = i, Ce.Suspense = m, Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, Ce.act = j, Ce.cloneElement = function(N, D, oe) {
      if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
      var ne = k({}, N.props), le = N.key, ae = N.ref, he = N._owner;
      if (D != null) {
        if (D.ref !== void 0 && (ae = D.ref, he = z.current), D.key !== void 0 && (le = "" + D.key), N.type && N.type.defaultProps) var me = N.type.defaultProps;
        for (ve in D) F.call(D, ve) && !Q.hasOwnProperty(ve) && (ne[ve] = D[ve] === void 0 && me !== void 0 ? me[ve] : D[ve]);
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
      var D = q.bind(null, N);
      return D.type = N, D;
    }, Ce.createRef = function() {
      return {
        current: null
      };
    }, Ce.forwardRef = function(N) {
      return {
        $$typeof: f,
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
    }, Ce.memo = function(N, D) {
      return {
        $$typeof: h,
        type: N,
        compare: D === void 0 ? null : D
      };
    }, Ce.startTransition = function(N) {
      var D = B.transition;
      B.transition = {};
      try {
        N();
      } finally {
        B.transition = D;
      }
    }, Ce.unstable_act = j, Ce.useCallback = function(N, D) {
      return K.current.useCallback(N, D);
    }, Ce.useContext = function(N) {
      return K.current.useContext(N);
    }, Ce.useDebugValue = function() {
    }, Ce.useDeferredValue = function(N) {
      return K.current.useDeferredValue(N);
    }, Ce.useEffect = function(N, D) {
      return K.current.useEffect(N, D);
    }, Ce.useId = function() {
      return K.current.useId();
    }, Ce.useImperativeHandle = function(N, D, oe) {
      return K.current.useImperativeHandle(N, D, oe);
    }, Ce.useInsertionEffect = function(N, D) {
      return K.current.useInsertionEffect(N, D);
    }, Ce.useLayoutEffect = function(N, D) {
      return K.current.useLayoutEffect(N, D);
    }, Ce.useMemo = function(N, D) {
      return K.current.useMemo(N, D);
    }, Ce.useReducer = function(N, D, oe) {
      return K.current.useReducer(N, D, oe);
    }, Ce.useRef = function(N) {
      return K.current.useRef(N);
    }, Ce.useState = function(N) {
      return K.current.useState(N);
    }, Ce.useSyncExternalStore = function(N, D, oe) {
      return K.current.useSyncExternalStore(N, D, oe);
    }, Ce.useTransition = function() {
      return K.current.useTransition();
    }, Ce.version = "18.3.1", Ce;
  }
  var Rh;
  function js() {
    return Rh || (Rh = 1, Vu.exports = zy()), Vu.exports;
  }
  var Ph;
  function Ly() {
    if (Ph) return xs;
    Ph = 1;
    var e = js(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function c(f, m, h) {
      var p, y = {}, v = null, x = null;
      h !== void 0 && (v = "" + h), m.key !== void 0 && (v = "" + m.key), m.ref !== void 0 && (x = m.ref);
      for (p in m) i.call(m, p) && !u.hasOwnProperty(p) && (y[p] = m[p]);
      if (f && f.defaultProps) for (p in m = f.defaultProps, m) y[p] === void 0 && (y[p] = m[p]);
      return {
        $$typeof: r,
        type: f,
        key: v,
        ref: x,
        props: y,
        _owner: l.current
      };
    }
    return xs.Fragment = o, xs.jsx = c, xs.jsxs = c, xs;
  }
  var zh;
  function Dy() {
    return zh || (zh = 1, Hu.exports = Ly()), Hu.exports;
  }
  var b = Dy(), L = js();
  const X = d0(L);
  var dl = {}, Uu = {
    exports: {}
  }, It = {}, Wu = {
    exports: {}
  }, Yu = {};
  var Lh;
  function Oy() {
    return Lh || (Lh = 1, (function(e) {
      function r(B, $) {
        var j = B.length;
        B.push($);
        e: for (; 0 < j; ) {
          var N = j - 1 >>> 1, D = B[N];
          if (0 < l(D, $)) B[N] = $, B[j] = D, j = N;
          else break e;
        }
      }
      function o(B) {
        return B.length === 0 ? null : B[0];
      }
      function i(B) {
        if (B.length === 0) return null;
        var $ = B[0], j = B.pop();
        if (j !== $) {
          B[0] = j;
          e: for (var N = 0, D = B.length, oe = D >>> 1; N < oe; ) {
            var ne = 2 * (N + 1) - 1, le = B[ne], ae = ne + 1, he = B[ae];
            if (0 > l(le, j)) ae < D && 0 > l(he, le) ? (B[N] = he, B[ae] = j, N = ae) : (B[N] = le, B[ne] = j, N = ne);
            else if (ae < D && 0 > l(he, j)) B[N] = he, B[ae] = j, N = ae;
            else break e;
          }
        }
        return $;
      }
      function l(B, $) {
        var j = B.sortIndex - $.sortIndex;
        return j !== 0 ? j : B.id - $.id;
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
      var m = [], h = [], p = 1, y = null, v = 3, x = false, k = false, S = false, C = typeof setTimeout == "function" ? setTimeout : null, E = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function P(B) {
        for (var $ = o(h); $ !== null; ) {
          if ($.callback === null) i(h);
          else if ($.startTime <= B) i(h), $.sortIndex = $.expirationTime, r(m, $);
          else break;
          $ = o(h);
        }
      }
      function I(B) {
        if (S = false, P(B), !k) if (o(m) !== null) k = true, O(F);
        else {
          var $ = o(h);
          $ !== null && K(I, $.startTime - B);
        }
      }
      function F(B, $) {
        k = false, S && (S = false, E(q), q = -1), x = true;
        var j = v;
        try {
          for (P($), y = o(m); y !== null && (!(y.expirationTime > $) || B && !ee()); ) {
            var N = y.callback;
            if (typeof N == "function") {
              y.callback = null, v = y.priorityLevel;
              var D = N(y.expirationTime <= $);
              $ = e.unstable_now(), typeof D == "function" ? y.callback = D : y === o(m) && i(m), P($);
            } else i(m);
            y = o(m);
          }
          if (y !== null) var oe = true;
          else {
            var ne = o(h);
            ne !== null && K(I, ne.startTime - $), oe = false;
          }
          return oe;
        } finally {
          y = null, v = j, x = false;
        }
      }
      var z = false, Q = null, q = -1, G = 5, J = -1;
      function ee() {
        return !(e.unstable_now() - J < G);
      }
      function Y() {
        if (Q !== null) {
          var B = e.unstable_now();
          J = B;
          var $ = true;
          try {
            $ = Q(true, B);
          } finally {
            $ ? Z() : (z = false, Q = null);
          }
        } else z = false;
      }
      var Z;
      if (typeof A == "function") Z = function() {
        A(Y);
      };
      else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel(), V = _.port2;
        _.port1.onmessage = Y, Z = function() {
          V.postMessage(null);
        };
      } else Z = function() {
        C(Y, 0);
      };
      function O(B) {
        Q = B, z || (z = true, Z());
      }
      function K(B, $) {
        q = C(function() {
          B(e.unstable_now());
        }, $);
      }
      e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(B) {
        B.callback = null;
      }, e.unstable_continueExecution = function() {
        k || x || (k = true, O(F));
      }, e.unstable_forceFrameRate = function(B) {
        0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < B ? Math.floor(1e3 / B) : 5;
      }, e.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, e.unstable_getFirstCallbackNode = function() {
        return o(m);
      }, e.unstable_next = function(B) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var $ = 3;
            break;
          default:
            $ = v;
        }
        var j = v;
        v = $;
        try {
          return B();
        } finally {
          v = j;
        }
      }, e.unstable_pauseExecution = function() {
      }, e.unstable_requestPaint = function() {
      }, e.unstable_runWithPriority = function(B, $) {
        switch (B) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            B = 3;
        }
        var j = v;
        v = B;
        try {
          return $();
        } finally {
          v = j;
        }
      }, e.unstable_scheduleCallback = function(B, $, j) {
        var N = e.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? N + j : N) : j = N, B) {
          case 1:
            var D = -1;
            break;
          case 2:
            D = 250;
            break;
          case 5:
            D = 1073741823;
            break;
          case 4:
            D = 1e4;
            break;
          default:
            D = 5e3;
        }
        return D = j + D, B = {
          id: p++,
          callback: $,
          priorityLevel: B,
          startTime: j,
          expirationTime: D,
          sortIndex: -1
        }, j > N ? (B.sortIndex = j, r(h, B), o(m) === null && B === o(h) && (S ? (E(q), q = -1) : S = true, K(I, j - N))) : (B.sortIndex = D, r(m, B), k || x || (k = true, O(F))), B;
      }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(B) {
        var $ = v;
        return function() {
          var j = v;
          v = $;
          try {
            return B.apply(this, arguments);
          } finally {
            v = j;
          }
        };
      };
    })(Yu)), Yu;
  }
  var Dh;
  function Fy() {
    return Dh || (Dh = 1, Wu.exports = Oy()), Wu.exports;
  }
  var Oh;
  function By() {
    if (Oh) return It;
    Oh = 1;
    var e = js(), r = Fy();
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
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, y = {};
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
    function k(t, n, s, a) {
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
    function S(t, n, s, a, d, g, w) {
      this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = t, this.type = n, this.sanitizeURL = g, this.removeEmptyString = w;
    }
    var C = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
      C[t] = new S(t, 0, false, t, null, false, false);
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
      C[n] = new S(n, 1, false, t[1], null, false, false);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(t) {
      C[t] = new S(t, 2, false, t.toLowerCase(), null, false, false);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(t) {
      C[t] = new S(t, 2, false, t, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
      C[t] = new S(t, 3, false, t.toLowerCase(), null, false, false);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(t) {
      C[t] = new S(t, 3, true, t, null, false, false);
    }), [
      "capture",
      "download"
    ].forEach(function(t) {
      C[t] = new S(t, 4, false, t, null, false, false);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(t) {
      C[t] = new S(t, 6, false, t, null, false, false);
    }), [
      "rowSpan",
      "start"
    ].forEach(function(t) {
      C[t] = new S(t, 5, false, t.toLowerCase(), null, false, false);
    });
    var E = /[\-:]([a-z])/g;
    function A(t) {
      return t[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
      var n = t.replace(E, A);
      C[n] = new S(n, 1, false, t, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
      var n = t.replace(E, A);
      C[n] = new S(n, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(t) {
      var n = t.replace(E, A);
      C[n] = new S(n, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
    }), [
      "tabIndex",
      "crossOrigin"
    ].forEach(function(t) {
      C[t] = new S(t, 1, false, t.toLowerCase(), null, false, false);
    }), C.xlinkHref = new S("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
      "src",
      "href",
      "action",
      "formAction"
    ].forEach(function(t) {
      C[t] = new S(t, 1, false, t.toLowerCase(), null, true, true);
    });
    function P(t, n, s, a) {
      var d = C.hasOwnProperty(n) ? C[n] : null;
      (d !== null ? d.type !== 0 : a || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (k(n, s, d, a) && (s = null), a || d === null ? v(n) && (s === null ? t.removeAttribute(n) : t.setAttribute(n, "" + s)) : d.mustUseProperty ? t[d.propertyName] = s === null ? d.type === 3 ? false : "" : s : (n = d.attributeName, a = d.attributeNamespace, s === null ? t.removeAttribute(n) : (d = d.type, s = d === 3 || d === 4 && s === true ? "" : "" + s, a ? t.setAttributeNS(a, n, s) : t.setAttribute(n, s))));
    }
    var I = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, F = Symbol.for("react.element"), z = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), ee = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), B = Symbol.iterator;
    function $(t) {
      return t === null || typeof t != "object" ? null : (t = B && t[B] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var j = Object.assign, N;
    function D(t) {
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
          for (var d = W.stack.split(`
`), g = a.stack.split(`
`), w = d.length - 1, M = g.length - 1; 1 <= w && 0 <= M && d[w] !== g[M]; ) M--;
          for (; 1 <= w && 0 <= M; w--, M--) if (d[w] !== g[M]) {
            if (w !== 1 || M !== 1) do
              if (w--, M--, 0 > M || d[w] !== g[M]) {
                var T = `
` + d[w].replace(" at new ", " at ");
                return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
              }
            while (1 <= w && 0 <= M);
            break;
          }
        }
      } finally {
        oe = false, Error.prepareStackTrace = s;
      }
      return (t = t ? t.displayName || t.name : "") ? D(t) : "";
    }
    function le(t) {
      switch (t.tag) {
        case 5:
          return D(t.type);
        case 16:
          return D("Lazy");
        case 13:
          return D("Suspense");
        case 19:
          return D("SuspenseList");
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
        case z:
          return "Portal";
        case G:
          return "Profiler";
        case q:
          return "StrictMode";
        case Z:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case ee:
          return (t.displayName || "Context") + ".Consumer";
        case J:
          return (t._context.displayName || "Context") + ".Provider";
        case Y:
          var n = t.render;
          return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case V:
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
        var d = s.get, g = s.set;
        return Object.defineProperty(t, n, {
          configurable: true,
          get: function() {
            return d.call(this);
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
      return j({}, n, {
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
      n = n.checked, n != null && P(t, "checked", n, false);
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
    var vt = Array.isArray;
    function Ft(t, n, s, a) {
      if (t = t.options, n) {
        n = {};
        for (var d = 0; d < s.length; d++) n["$" + s[d]] = true;
        for (s = 0; s < t.length; s++) d = n.hasOwnProperty("$" + t[s].value), t[s].selected !== d && (t[s].selected = d), d && a && (t[s].defaultSelected = true);
      } else {
        for (s = "" + me(s), n = null, d = 0; d < t.length; d++) {
          if (t[d].value === s) {
            t[d].selected = true, a && (t[d].defaultSelected = true);
            return;
          }
          n !== null || t[d].disabled || (n = t[d]);
        }
        n !== null && (n.selected = true);
      }
    }
    function pn(t, n) {
      if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
      return j({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
      });
    }
    function Mn(t, n) {
      var s = n.value;
      if (s == null) {
        if (s = n.children, n = n.defaultValue, s != null) {
          if (n != null) throw Error(o(92));
          if (vt(s)) {
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
    function bn(t) {
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
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, s, a, d) {
        MSApp.execUnsafeLocalFunction(function() {
          return t(n, s, a, d);
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
        var a = s.indexOf("--") === 0, d = gn(s, n[s], a);
        s === "float" && (s = "cssFloat"), a ? t.setProperty(s, d) : t[s] = d;
      }
    }
    var Xn = j({
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
    function Et(t, n) {
      if (n) {
        if (Xn[t] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(o(137, t));
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
    var kr = null;
    function Er(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var Tn = null, vn = null, An = null;
    function wn(t) {
      if (t = ss(t)) {
        if (typeof Tn != "function") throw Error(o(280));
        var n = t.stateNode;
        n && (n = Ni(n), Tn(t.stateNode, t.type, n));
      }
    }
    function Ys(t) {
      vn ? An ? An.push(t) : An = [
        t
      ] : vn = t;
    }
    function Gs() {
      if (vn) {
        var t = vn, n = An;
        if (An = vn = null, wn(t), n) for (t = 0; t < n.length; t++) wn(n[t]);
      }
    }
    function Xs(t, n) {
      return t(n);
    }
    function Ks() {
    }
    var Lo = false;
    function Qs(t, n, s) {
      if (Lo) return t(n, s);
      Lo = true;
      try {
        return Xs(t, n, s);
      } finally {
        Lo = false, (vn !== null || An !== null) && (Ks(), Gs());
      }
    }
    function Cr(t, n) {
      var s = t.stateNode;
      if (s === null) return null;
      var a = Ni(s);
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
    var Do = false;
    if (f) try {
      var _r = {};
      Object.defineProperty(_r, "passive", {
        get: function() {
          Do = true;
        }
      }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
    } catch {
      Do = false;
    }
    function ra(t, n, s, a, d, g, w, M, T) {
      var W = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(s, W);
      } catch (re) {
        this.onError(re);
      }
    }
    var Nr = false, Xr = null, Kr = false, Oo = null, oa = {
      onError: function(t) {
        Nr = true, Xr = t;
      }
    };
    function sa(t, n, s, a, d, g, w, M, T) {
      Nr = false, Xr = null, ra.apply(oa, arguments);
    }
    function Zs(t, n, s, a, d, g, w, M, T) {
      if (sa.apply(this, arguments), Nr) {
        if (Nr) {
          var W = Xr;
          Nr = false, Xr = null;
        } else throw Error(o(198));
        Kr || (Kr = true, Oo = W);
      }
    }
    function $n(t) {
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
    function qs(t) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
      }
      return null;
    }
    function Js(t) {
      if ($n(t) !== t) throw Error(o(188));
    }
    function ia(t) {
      var n = t.alternate;
      if (!n) {
        if (n = $n(t), n === null) throw Error(o(188));
        return n !== t ? null : t;
      }
      for (var s = t, a = n; ; ) {
        var d = s.return;
        if (d === null) break;
        var g = d.alternate;
        if (g === null) {
          if (a = d.return, a !== null) {
            s = a;
            continue;
          }
          break;
        }
        if (d.child === g.child) {
          for (g = d.child; g; ) {
            if (g === s) return Js(d), t;
            if (g === a) return Js(d), n;
            g = g.sibling;
          }
          throw Error(o(188));
        }
        if (s.return !== a.return) s = d, a = g;
        else {
          for (var w = false, M = d.child; M; ) {
            if (M === s) {
              w = true, s = d, a = g;
              break;
            }
            if (M === a) {
              w = true, a = d, s = g;
              break;
            }
            M = M.sibling;
          }
          if (!w) {
            for (M = g.child; M; ) {
              if (M === s) {
                w = true, s = g, a = d;
                break;
              }
              if (M === a) {
                w = true, a = g, s = d;
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
    function ei(t) {
      return t = ia(t), t !== null ? ti(t) : null;
    }
    function ti(t) {
      if (t.tag === 5 || t.tag === 6) return t;
      for (t = t.child; t !== null; ) {
        var n = ti(t);
        if (n !== null) return n;
        t = t.sibling;
      }
      return null;
    }
    var ni = r.unstable_scheduleCallback, ri = r.unstable_cancelCallback, oi = r.unstable_shouldYield, la = r.unstable_requestPaint, Be = r.unstable_now, aa = r.unstable_getCurrentPriorityLevel, Fo = r.unstable_ImmediatePriority, si = r.unstable_UserBlockingPriority, Qr = r.unstable_NormalPriority, ii = r.unstable_LowPriority, li = r.unstable_IdlePriority, Zr = null, Ht = null;
    function Bo(t) {
      if (Ht && typeof Ht.onCommitFiberRoot == "function") try {
        Ht.onCommitFiberRoot(Zr, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
    }
    var rn = Math.clz32 ? Math.clz32 : Jm, Zm = Math.log, qm = Math.LN2;
    function Jm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Zm(t) / qm | 0) | 0;
    }
    var ai = 64, ui = 4194304;
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
    function ci(t, n) {
      var s = t.pendingLanes;
      if (s === 0) return 0;
      var a = 0, d = t.suspendedLanes, g = t.pingedLanes, w = s & 268435455;
      if (w !== 0) {
        var M = w & ~d;
        M !== 0 ? a = jo(M) : (g &= w, g !== 0 && (a = jo(g)));
      } else w = s & ~d, w !== 0 ? a = jo(w) : g !== 0 && (a = jo(g));
      if (a === 0) return 0;
      if (n !== 0 && n !== a && (n & d) === 0 && (d = a & -a, g = n & -n, d >= g || d === 16 && (g & 4194240) !== 0)) return n;
      if ((a & 4) !== 0 && (a |= s & 16), n = t.entangledLanes, n !== 0) for (t = t.entanglements, n &= a; 0 < n; ) s = 31 - rn(n), d = 1 << s, a |= t[s], n &= ~d;
      return a;
    }
    function eg(t, n) {
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
    function tg(t, n) {
      for (var s = t.suspendedLanes, a = t.pingedLanes, d = t.expirationTimes, g = t.pendingLanes; 0 < g; ) {
        var w = 31 - rn(g), M = 1 << w, T = d[w];
        T === -1 ? ((M & s) === 0 || (M & a) !== 0) && (d[w] = eg(M, n)) : T <= n && (t.expiredLanes |= M), g &= ~M;
      }
    }
    function ua(t) {
      return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
    }
    function ad() {
      var t = ai;
      return ai <<= 1, (ai & 4194240) === 0 && (ai = 64), t;
    }
    function ca(t) {
      for (var n = [], s = 0; 31 > s; s++) n.push(t);
      return n;
    }
    function Ho(t, n, s) {
      t.pendingLanes |= n, n !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, n = 31 - rn(n), t[n] = s;
    }
    function ng(t, n) {
      var s = t.pendingLanes & ~n;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= n, t.mutableReadLanes &= n, t.entangledLanes &= n, n = t.entanglements;
      var a = t.eventTimes;
      for (t = t.expirationTimes; 0 < s; ) {
        var d = 31 - rn(s), g = 1 << d;
        n[d] = 0, a[d] = -1, t[d] = -1, s &= ~g;
      }
    }
    function da(t, n) {
      var s = t.entangledLanes |= n;
      for (t = t.entanglements; s; ) {
        var a = 31 - rn(s), d = 1 << a;
        d & n | t[a] & n && (t[a] |= n), s &= ~d;
      }
    }
    var Ae = 0;
    function ud(t) {
      return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var cd, fa, dd, fd, hd, ha = false, di = [], Kn = null, Qn = null, Zn = null, Vo = /* @__PURE__ */ new Map(), Uo = /* @__PURE__ */ new Map(), qn = [], rg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function pd(t, n) {
      switch (t) {
        case "focusin":
        case "focusout":
          Kn = null;
          break;
        case "dragenter":
        case "dragleave":
          Qn = null;
          break;
        case "mouseover":
        case "mouseout":
          Zn = null;
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
    function Wo(t, n, s, a, d, g) {
      return t === null || t.nativeEvent !== g ? (t = {
        blockedOn: n,
        domEventName: s,
        eventSystemFlags: a,
        nativeEvent: g,
        targetContainers: [
          d
        ]
      }, n !== null && (n = ss(n), n !== null && fa(n)), t) : (t.eventSystemFlags |= a, n = t.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), t);
    }
    function og(t, n, s, a, d) {
      switch (n) {
        case "focusin":
          return Kn = Wo(Kn, t, n, s, a, d), true;
        case "dragenter":
          return Qn = Wo(Qn, t, n, s, a, d), true;
        case "mouseover":
          return Zn = Wo(Zn, t, n, s, a, d), true;
        case "pointerover":
          var g = d.pointerId;
          return Vo.set(g, Wo(Vo.get(g) || null, t, n, s, a, d)), true;
        case "gotpointercapture":
          return g = d.pointerId, Uo.set(g, Wo(Uo.get(g) || null, t, n, s, a, d)), true;
      }
      return false;
    }
    function md(t) {
      var n = Mr(t.target);
      if (n !== null) {
        var s = $n(n);
        if (s !== null) {
          if (n = s.tag, n === 13) {
            if (n = qs(s), n !== null) {
              t.blockedOn = n, hd(t.priority, function() {
                dd(s);
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
    function fi(t) {
      if (t.blockedOn !== null) return false;
      for (var n = t.targetContainers; 0 < n.length; ) {
        var s = ma(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
        if (s === null) {
          s = t.nativeEvent;
          var a = new s.constructor(s.type, s);
          kr = a, s.target.dispatchEvent(a), kr = null;
        } else return n = ss(s), n !== null && fa(n), t.blockedOn = s, false;
        n.shift();
      }
      return true;
    }
    function gd(t, n, s) {
      fi(t) && s.delete(n);
    }
    function sg() {
      ha = false, Kn !== null && fi(Kn) && (Kn = null), Qn !== null && fi(Qn) && (Qn = null), Zn !== null && fi(Zn) && (Zn = null), Vo.forEach(gd), Uo.forEach(gd);
    }
    function Yo(t, n) {
      t.blockedOn === n && (t.blockedOn = null, ha || (ha = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, sg)));
    }
    function Go(t) {
      function n(d) {
        return Yo(d, t);
      }
      if (0 < di.length) {
        Yo(di[0], t);
        for (var s = 1; s < di.length; s++) {
          var a = di[s];
          a.blockedOn === t && (a.blockedOn = null);
        }
      }
      for (Kn !== null && Yo(Kn, t), Qn !== null && Yo(Qn, t), Zn !== null && Yo(Zn, t), Vo.forEach(n), Uo.forEach(n), s = 0; s < qn.length; s++) a = qn[s], a.blockedOn === t && (a.blockedOn = null);
      for (; 0 < qn.length && (s = qn[0], s.blockedOn === null); ) md(s), s.blockedOn === null && qn.shift();
    }
    var qr = I.ReactCurrentBatchConfig, hi = true;
    function ig(t, n, s, a) {
      var d = Ae, g = qr.transition;
      qr.transition = null;
      try {
        Ae = 1, pa(t, n, s, a);
      } finally {
        Ae = d, qr.transition = g;
      }
    }
    function lg(t, n, s, a) {
      var d = Ae, g = qr.transition;
      qr.transition = null;
      try {
        Ae = 4, pa(t, n, s, a);
      } finally {
        Ae = d, qr.transition = g;
      }
    }
    function pa(t, n, s, a) {
      if (hi) {
        var d = ma(t, n, s, a);
        if (d === null) $a(t, n, a, pi, s), pd(t, a);
        else if (og(d, t, n, s, a)) a.stopPropagation();
        else if (pd(t, a), n & 4 && -1 < rg.indexOf(t)) {
          for (; d !== null; ) {
            var g = ss(d);
            if (g !== null && cd(g), g = ma(t, n, s, a), g === null && $a(t, n, a, pi, s), g === d) break;
            d = g;
          }
          d !== null && a.stopPropagation();
        } else $a(t, n, a, null, s);
      }
    }
    var pi = null;
    function ma(t, n, s, a) {
      if (pi = null, t = Er(a), t = Mr(t), t !== null) if (n = $n(t), n === null) t = null;
      else if (s = n.tag, s === 13) {
        if (t = qs(n), t !== null) return t;
        t = null;
      } else if (s === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else n !== t && (t = null);
      return pi = t, null;
    }
    function yd(t) {
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
          switch (aa()) {
            case Fo:
              return 1;
            case si:
              return 4;
            case Qr:
            case ii:
              return 16;
            case li:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Jn = null, ga = null, mi = null;
    function vd() {
      if (mi) return mi;
      var t, n = ga, s = n.length, a, d = "value" in Jn ? Jn.value : Jn.textContent, g = d.length;
      for (t = 0; t < s && n[t] === d[t]; t++) ;
      var w = s - t;
      for (a = 1; a <= w && n[s - a] === d[g - a]; a++) ;
      return mi = d.slice(t, 1 < a ? 1 - a : void 0);
    }
    function gi(t) {
      var n = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function yi() {
      return true;
    }
    function wd() {
      return false;
    }
    function $t(t) {
      function n(s, a, d, g, w) {
        this._reactName = s, this._targetInst = d, this.type = a, this.nativeEvent = g, this.target = w, this.currentTarget = null;
        for (var M in t) t.hasOwnProperty(M) && (s = t[M], this[M] = s ? s(g) : g[M]);
        return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === false) ? yi : wd, this.isPropagationStopped = wd, this;
      }
      return j(n.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var s = this.nativeEvent;
          s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = false), this.isDefaultPrevented = yi);
        },
        stopPropagation: function() {
          var s = this.nativeEvent;
          s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = true), this.isPropagationStopped = yi);
        },
        persist: function() {
        },
        isPersistent: yi
      }), n;
    }
    var Jr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ya = $t(Jr), Xo = j({}, Jr, {
      view: 0,
      detail: 0
    }), ag = $t(Xo), va, wa, Ko, vi = j({}, Xo, {
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
      getModifierState: Sa,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Ko && (Ko && t.type === "mousemove" ? (va = t.screenX - Ko.screenX, wa = t.screenY - Ko.screenY) : wa = va = 0, Ko = t), va);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : wa;
      }
    }), xd = $t(vi), ug = j({}, vi, {
      dataTransfer: 0
    }), cg = $t(ug), dg = j({}, Xo, {
      relatedTarget: 0
    }), xa = $t(dg), fg = j({}, Jr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), hg = $t(fg), pg = j({}, Jr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), mg = $t(pg), gg = j({}, Jr, {
      data: 0
    }), Sd = $t(gg), yg = {
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
    }, vg = {
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
    }, wg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function xg(t) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(t) : (t = wg[t]) ? !!n[t] : false;
    }
    function Sa() {
      return xg;
    }
    var Sg = j({}, Xo, {
      key: function(t) {
        if (t.key) {
          var n = yg[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress" ? (t = gi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? vg[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sa,
      charCode: function(t) {
        return t.type === "keypress" ? gi(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? gi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), kg = $t(Sg), Eg = j({}, vi, {
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
    }), kd = $t(Eg), Cg = j({}, Xo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sa
    }), _g = $t(Cg), Ng = j({}, Jr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mg = $t(Ng), bg = j({}, vi, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Ig = $t(bg), Tg = [
      9,
      13,
      27,
      32
    ], ka = f && "CompositionEvent" in window, Qo = null;
    f && "documentMode" in document && (Qo = document.documentMode);
    var Ag = f && "TextEvent" in window && !Qo, Ed = f && (!ka || Qo && 8 < Qo && 11 >= Qo), Cd = " ", _d = false;
    function Nd(t, n) {
      switch (t) {
        case "keyup":
          return Tg.indexOf(n.keyCode) !== -1;
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
    function Md(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var eo = false;
    function $g(t, n) {
      switch (t) {
        case "compositionend":
          return Md(n);
        case "keypress":
          return n.which !== 32 ? null : (_d = true, Cd);
        case "textInput":
          return t = n.data, t === Cd && _d ? null : t;
        default:
          return null;
      }
    }
    function Rg(t, n) {
      if (eo) return t === "compositionend" || !ka && Nd(t, n) ? (t = vd(), mi = ga = Jn = null, eo = false, t) : null;
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
          return Ed && n.locale !== "ko" ? null : n.data;
        default:
          return null;
      }
    }
    var Pg = {
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
    function bd(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n === "input" ? !!Pg[t.type] : n === "textarea";
    }
    function Id(t, n, s, a) {
      Ys(a), n = Ei(n, "onChange"), 0 < n.length && (s = new ya("onChange", "change", null, s, a), t.push({
        event: s,
        listeners: n
      }));
    }
    var Zo = null, qo = null;
    function zg(t) {
      Gd(t, 0);
    }
    function wi(t) {
      var n = so(t);
      if (Ue(n)) return t;
    }
    function Lg(t, n) {
      if (t === "change") return n;
    }
    var Td = false;
    if (f) {
      var Ea;
      if (f) {
        var Ca = "oninput" in document;
        if (!Ca) {
          var Ad = document.createElement("div");
          Ad.setAttribute("oninput", "return;"), Ca = typeof Ad.oninput == "function";
        }
        Ea = Ca;
      } else Ea = false;
      Td = Ea && (!document.documentMode || 9 < document.documentMode);
    }
    function $d() {
      Zo && (Zo.detachEvent("onpropertychange", Rd), qo = Zo = null);
    }
    function Rd(t) {
      if (t.propertyName === "value" && wi(qo)) {
        var n = [];
        Id(n, qo, t, Er(t)), Qs(zg, n);
      }
    }
    function Dg(t, n, s) {
      t === "focusin" ? ($d(), Zo = n, qo = s, Zo.attachEvent("onpropertychange", Rd)) : t === "focusout" && $d();
    }
    function Og(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return wi(qo);
    }
    function Fg(t, n) {
      if (t === "click") return wi(n);
    }
    function Bg(t, n) {
      if (t === "input" || t === "change") return wi(n);
    }
    function jg(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var on = typeof Object.is == "function" ? Object.is : jg;
    function Jo(t, n) {
      if (on(t, n)) return true;
      if (typeof t != "object" || t === null || typeof n != "object" || n === null) return false;
      var s = Object.keys(t), a = Object.keys(n);
      if (s.length !== a.length) return false;
      for (a = 0; a < s.length; a++) {
        var d = s[a];
        if (!m.call(n, d) || !on(t[d], n[d])) return false;
      }
      return true;
    }
    function Pd(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function zd(t, n) {
      var s = Pd(t);
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
        s = Pd(s);
      }
    }
    function Ld(t, n) {
      return t && n ? t === n ? true : t && t.nodeType === 3 ? false : n && n.nodeType === 3 ? Ld(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : false : false;
    }
    function Dd() {
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
    function _a(t) {
      var n = t && t.nodeName && t.nodeName.toLowerCase();
      return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
    }
    function Hg(t) {
      var n = Dd(), s = t.focusedElem, a = t.selectionRange;
      if (n !== s && s && s.ownerDocument && Ld(s.ownerDocument.documentElement, s)) {
        if (a !== null && _a(s)) {
          if (n = a.start, t = a.end, t === void 0 && (t = n), "selectionStart" in s) s.selectionStart = n, s.selectionEnd = Math.min(t, s.value.length);
          else if (t = (n = s.ownerDocument || document) && n.defaultView || window, t.getSelection) {
            t = t.getSelection();
            var d = s.textContent.length, g = Math.min(a.start, d);
            a = a.end === void 0 ? g : Math.min(a.end, d), !t.extend && g > a && (d = a, a = g, g = d), d = zd(s, g);
            var w = zd(s, a);
            d && w && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== w.node || t.focusOffset !== w.offset) && (n = n.createRange(), n.setStart(d.node, d.offset), t.removeAllRanges(), g > a ? (t.addRange(n), t.extend(w.node, w.offset)) : (n.setEnd(w.node, w.offset), t.addRange(n)));
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
    var Vg = f && "documentMode" in document && 11 >= document.documentMode, to = null, Na = null, es = null, Ma = false;
    function Od(t, n, s) {
      var a = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
      Ma || to == null || to !== Ke(a) || (a = to, "selectionStart" in a && _a(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), es && Jo(es, a) || (es = a, a = Ei(Na, "onSelect"), 0 < a.length && (n = new ya("onSelect", "select", null, n, s), t.push({
        event: n,
        listeners: a
      }), n.target = to)));
    }
    function xi(t, n) {
      var s = {};
      return s[t.toLowerCase()] = n.toLowerCase(), s["Webkit" + t] = "webkit" + n, s["Moz" + t] = "moz" + n, s;
    }
    var no = {
      animationend: xi("Animation", "AnimationEnd"),
      animationiteration: xi("Animation", "AnimationIteration"),
      animationstart: xi("Animation", "AnimationStart"),
      transitionend: xi("Transition", "TransitionEnd")
    }, ba = {}, Fd = {};
    f && (Fd = document.createElement("div").style, "AnimationEvent" in window || (delete no.animationend.animation, delete no.animationiteration.animation, delete no.animationstart.animation), "TransitionEvent" in window || delete no.transitionend.transition);
    function Si(t) {
      if (ba[t]) return ba[t];
      if (!no[t]) return t;
      var n = no[t], s;
      for (s in n) if (n.hasOwnProperty(s) && s in Fd) return ba[t] = n[s];
      return t;
    }
    var Bd = Si("animationend"), jd = Si("animationiteration"), Hd = Si("animationstart"), Vd = Si("transitionend"), Ud = /* @__PURE__ */ new Map(), Wd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function er(t, n) {
      Ud.set(t, n), u(n, [
        t
      ]);
    }
    for (var Ia = 0; Ia < Wd.length; Ia++) {
      var Ta = Wd[Ia], Ug = Ta.toLowerCase(), Wg = Ta[0].toUpperCase() + Ta.slice(1);
      er(Ug, "on" + Wg);
    }
    er(Bd, "onAnimationEnd"), er(jd, "onAnimationIteration"), er(Hd, "onAnimationStart"), er("dblclick", "onDoubleClick"), er("focusin", "onFocus"), er("focusout", "onBlur"), er(Vd, "onTransitionEnd"), c("onMouseEnter", [
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
    var ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));
    function Yd(t, n, s) {
      var a = t.type || "unknown-event";
      t.currentTarget = s, Zs(a, n, void 0, t), t.currentTarget = null;
    }
    function Gd(t, n) {
      n = (n & 4) !== 0;
      for (var s = 0; s < t.length; s++) {
        var a = t[s], d = a.event;
        a = a.listeners;
        e: {
          var g = void 0;
          if (n) for (var w = a.length - 1; 0 <= w; w--) {
            var M = a[w], T = M.instance, W = M.currentTarget;
            if (M = M.listener, T !== g && d.isPropagationStopped()) break e;
            Yd(d, M, W), g = T;
          }
          else for (w = 0; w < a.length; w++) {
            if (M = a[w], T = M.instance, W = M.currentTarget, M = M.listener, T !== g && d.isPropagationStopped()) break e;
            Yd(d, M, W), g = T;
          }
        }
      }
      if (Kr) throw t = Oo, Kr = false, Oo = null, t;
    }
    function Le(t, n) {
      var s = n[Oa];
      s === void 0 && (s = n[Oa] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      s.has(a) || (Xd(n, t, 2, false), s.add(a));
    }
    function Aa(t, n, s) {
      var a = 0;
      n && (a |= 4), Xd(s, t, a, n);
    }
    var ki = "_reactListening" + Math.random().toString(36).slice(2);
    function ns(t) {
      if (!t[ki]) {
        t[ki] = true, i.forEach(function(s) {
          s !== "selectionchange" && (Yg.has(s) || Aa(s, false, t), Aa(s, true, t));
        });
        var n = t.nodeType === 9 ? t : t.ownerDocument;
        n === null || n[ki] || (n[ki] = true, Aa("selectionchange", false, n));
      }
    }
    function Xd(t, n, s, a) {
      switch (yd(n)) {
        case 1:
          var d = ig;
          break;
        case 4:
          d = lg;
          break;
        default:
          d = pa;
      }
      s = d.bind(null, n, s, t), d = void 0, !Do || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = true), a ? d !== void 0 ? t.addEventListener(n, s, {
        capture: true,
        passive: d
      }) : t.addEventListener(n, s, true) : d !== void 0 ? t.addEventListener(n, s, {
        passive: d
      }) : t.addEventListener(n, s, false);
    }
    function $a(t, n, s, a, d) {
      var g = a;
      if ((n & 1) === 0 && (n & 2) === 0 && a !== null) e: for (; ; ) {
        if (a === null) return;
        var w = a.tag;
        if (w === 3 || w === 4) {
          var M = a.stateNode.containerInfo;
          if (M === d || M.nodeType === 8 && M.parentNode === d) break;
          if (w === 4) for (w = a.return; w !== null; ) {
            var T = w.tag;
            if ((T === 3 || T === 4) && (T = w.stateNode.containerInfo, T === d || T.nodeType === 8 && T.parentNode === d)) return;
            w = w.return;
          }
          for (; M !== null; ) {
            if (w = Mr(M), w === null) return;
            if (T = w.tag, T === 5 || T === 6) {
              a = g = w;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
      Qs(function() {
        var W = g, re = Er(s), se = [];
        e: {
          var te = Ud.get(t);
          if (te !== void 0) {
            var ue = ya, de = t;
            switch (t) {
              case "keypress":
                if (gi(s) === 0) break e;
              case "keydown":
              case "keyup":
                ue = kg;
                break;
              case "focusin":
                de = "focus", ue = xa;
                break;
              case "focusout":
                de = "blur", ue = xa;
                break;
              case "beforeblur":
              case "afterblur":
                ue = xa;
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
                ue = xd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                ue = cg;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                ue = _g;
                break;
              case Bd:
              case jd:
              case Hd:
                ue = hg;
                break;
              case Vd:
                ue = Mg;
                break;
              case "scroll":
                ue = ag;
                break;
              case "wheel":
                ue = Ig;
                break;
              case "copy":
              case "cut":
              case "paste":
                ue = mg;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                ue = kd;
            }
            var fe = (n & 4) !== 0, Xe = !fe && t === "scroll", H = fe ? te !== null ? te + "Capture" : null : te;
            fe = [];
            for (var R = W, U; R !== null; ) {
              U = R;
              var ie = U.stateNode;
              if (U.tag === 5 && ie !== null && (U = ie, H !== null && (ie = Cr(R, H), ie != null && fe.push(rs(R, ie, U)))), Xe) break;
              R = R.return;
            }
            0 < fe.length && (te = new ue(te, de, null, s, re), se.push({
              event: te,
              listeners: fe
            }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (te = t === "mouseover" || t === "pointerover", ue = t === "mouseout" || t === "pointerout", te && s !== kr && (de = s.relatedTarget || s.fromElement) && (Mr(de) || de[Rn])) break e;
            if ((ue || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, ue ? (de = s.relatedTarget || s.toElement, ue = W, de = de ? Mr(de) : null, de !== null && (Xe = $n(de), de !== Xe || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = W), ue !== de)) {
              if (fe = xd, ie = "onMouseLeave", H = "onMouseEnter", R = "mouse", (t === "pointerout" || t === "pointerover") && (fe = kd, ie = "onPointerLeave", H = "onPointerEnter", R = "pointer"), Xe = ue == null ? te : so(ue), U = de == null ? te : so(de), te = new fe(ie, R + "leave", ue, s, re), te.target = Xe, te.relatedTarget = U, ie = null, Mr(re) === W && (fe = new fe(H, R + "enter", de, s, re), fe.target = U, fe.relatedTarget = Xe, ie = fe), Xe = ie, ue && de) t: {
                for (fe = ue, H = de, R = 0, U = fe; U; U = ro(U)) R++;
                for (U = 0, ie = H; ie; ie = ro(ie)) U++;
                for (; 0 < R - U; ) fe = ro(fe), R--;
                for (; 0 < U - R; ) H = ro(H), U--;
                for (; R--; ) {
                  if (fe === H || H !== null && fe === H.alternate) break t;
                  fe = ro(fe), H = ro(H);
                }
                fe = null;
              }
              else fe = null;
              ue !== null && Kd(se, te, ue, fe, false), de !== null && Xe !== null && Kd(se, Xe, de, fe, true);
            }
          }
          e: {
            if (te = W ? so(W) : window, ue = te.nodeName && te.nodeName.toLowerCase(), ue === "select" || ue === "input" && te.type === "file") var pe = Lg;
            else if (bd(te)) if (Td) pe = Bg;
            else {
              pe = Og;
              var we = Dg;
            }
            else (ue = te.nodeName) && ue.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (pe = Fg);
            if (pe && (pe = pe(t, W))) {
              Id(se, pe, s, re);
              break e;
            }
            we && we(t, te, W), t === "focusout" && (we = te._wrapperState) && we.controlled && te.type === "number" && qe(te, "number", te.value);
          }
          switch (we = W ? so(W) : window, t) {
            case "focusin":
              (bd(we) || we.contentEditable === "true") && (to = we, Na = W, es = null);
              break;
            case "focusout":
              es = Na = to = null;
              break;
            case "mousedown":
              Ma = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ma = false, Od(se, s, re);
              break;
            case "selectionchange":
              if (Vg) break;
            case "keydown":
            case "keyup":
              Od(se, s, re);
          }
          var xe;
          if (ka) e: {
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
          else eo ? Nd(t, s) && (ke = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (ke = "onCompositionStart");
          ke && (Ed && s.locale !== "ko" && (eo || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && eo && (xe = vd()) : (Jn = re, ga = "value" in Jn ? Jn.value : Jn.textContent, eo = true)), we = Ei(W, ke), 0 < we.length && (ke = new Sd(ke, t, null, s, re), se.push({
            event: ke,
            listeners: we
          }), xe ? ke.data = xe : (xe = Md(s), xe !== null && (ke.data = xe)))), (xe = Ag ? $g(t, s) : Rg(t, s)) && (W = Ei(W, "onBeforeInput"), 0 < W.length && (re = new Sd("onBeforeInput", "beforeinput", null, s, re), se.push({
            event: re,
            listeners: W
          }), re.data = xe));
        }
        Gd(se, n);
      });
    }
    function rs(t, n, s) {
      return {
        instance: t,
        listener: n,
        currentTarget: s
      };
    }
    function Ei(t, n) {
      for (var s = n + "Capture", a = []; t !== null; ) {
        var d = t, g = d.stateNode;
        d.tag === 5 && g !== null && (d = g, g = Cr(t, s), g != null && a.unshift(rs(t, g, d)), g = Cr(t, n), g != null && a.push(rs(t, g, d))), t = t.return;
      }
      return a;
    }
    function ro(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5);
      return t || null;
    }
    function Kd(t, n, s, a, d) {
      for (var g = n._reactName, w = []; s !== null && s !== a; ) {
        var M = s, T = M.alternate, W = M.stateNode;
        if (T !== null && T === a) break;
        M.tag === 5 && W !== null && (M = W, d ? (T = Cr(s, g), T != null && w.unshift(rs(s, T, M))) : d || (T = Cr(s, g), T != null && w.push(rs(s, T, M)))), s = s.return;
      }
      w.length !== 0 && t.push({
        event: n,
        listeners: w
      });
    }
    var Gg = /\r\n?/g, Xg = /\u0000|\uFFFD/g;
    function Qd(t) {
      return (typeof t == "string" ? t : "" + t).replace(Gg, `
`).replace(Xg, "");
    }
    function Ci(t, n, s) {
      if (n = Qd(n), Qd(t) !== n && s) throw Error(o(425));
    }
    function _i() {
    }
    var Ra = null, Pa = null;
    function za(t, n) {
      return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var La = typeof setTimeout == "function" ? setTimeout : void 0, Kg = typeof clearTimeout == "function" ? clearTimeout : void 0, Zd = typeof Promise == "function" ? Promise : void 0, Qg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zd < "u" ? function(t) {
      return Zd.resolve(null).then(t).catch(Zg);
    } : La;
    function Zg(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Da(t, n) {
      var s = n, a = 0;
      do {
        var d = s.nextSibling;
        if (t.removeChild(s), d && d.nodeType === 8) if (s = d.data, s === "/$") {
          if (a === 0) {
            t.removeChild(d), Go(n);
            return;
          }
          a--;
        } else s !== "$" && s !== "$?" && s !== "$!" || a++;
        s = d;
      } while (s);
      Go(n);
    }
    function tr(t) {
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
    function qd(t) {
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
    var oo = Math.random().toString(36).slice(2), xn = "__reactFiber$" + oo, os = "__reactProps$" + oo, Rn = "__reactContainer$" + oo, Oa = "__reactEvents$" + oo, qg = "__reactListeners$" + oo, Jg = "__reactHandles$" + oo;
    function Mr(t) {
      var n = t[xn];
      if (n) return n;
      for (var s = t.parentNode; s; ) {
        if (n = s[Rn] || s[xn]) {
          if (s = n.alternate, n.child !== null || s !== null && s.child !== null) for (t = qd(t); t !== null; ) {
            if (s = t[xn]) return s;
            t = qd(t);
          }
          return n;
        }
        t = s, s = t.parentNode;
      }
      return null;
    }
    function ss(t) {
      return t = t[xn] || t[Rn], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
    }
    function so(t) {
      if (t.tag === 5 || t.tag === 6) return t.stateNode;
      throw Error(o(33));
    }
    function Ni(t) {
      return t[os] || null;
    }
    var Fa = [], io = -1;
    function nr(t) {
      return {
        current: t
      };
    }
    function De(t) {
      0 > io || (t.current = Fa[io], Fa[io] = null, io--);
    }
    function Pe(t, n) {
      io++, Fa[io] = t.current, t.current = n;
    }
    var rr = {}, ft = nr(rr), Ct = nr(false), br = rr;
    function lo(t, n) {
      var s = t.type.contextTypes;
      if (!s) return rr;
      var a = t.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === n) return a.__reactInternalMemoizedMaskedChildContext;
      var d = {}, g;
      for (g in s) d[g] = n[g];
      return a && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = n, t.__reactInternalMemoizedMaskedChildContext = d), d;
    }
    function _t(t) {
      return t = t.childContextTypes, t != null;
    }
    function Mi() {
      De(Ct), De(ft);
    }
    function Jd(t, n, s) {
      if (ft.current !== rr) throw Error(o(168));
      Pe(ft, n), Pe(Ct, s);
    }
    function ef(t, n, s) {
      var a = t.stateNode;
      if (n = n.childContextTypes, typeof a.getChildContext != "function") return s;
      a = a.getChildContext();
      for (var d in a) if (!(d in n)) throw Error(o(108, he(t) || "Unknown", d));
      return j({}, s, a);
    }
    function bi(t) {
      return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || rr, br = ft.current, Pe(ft, t), Pe(Ct, Ct.current), true;
    }
    function tf(t, n, s) {
      var a = t.stateNode;
      if (!a) throw Error(o(169));
      s ? (t = ef(t, n, br), a.__reactInternalMemoizedMergedChildContext = t, De(Ct), De(ft), Pe(ft, t)) : De(Ct), Pe(Ct, s);
    }
    var Pn = null, Ii = false, Ba = false;
    function nf(t) {
      Pn === null ? Pn = [
        t
      ] : Pn.push(t);
    }
    function ey(t) {
      Ii = true, nf(t);
    }
    function or() {
      if (!Ba && Pn !== null) {
        Ba = true;
        var t = 0, n = Ae;
        try {
          var s = Pn;
          for (Ae = 1; t < s.length; t++) {
            var a = s[t];
            do
              a = a(true);
            while (a !== null);
          }
          Pn = null, Ii = false;
        } catch (d) {
          throw Pn !== null && (Pn = Pn.slice(t + 1)), ni(Fo, or), d;
        } finally {
          Ae = n, Ba = false;
        }
      }
      return null;
    }
    var ao = [], uo = 0, Ti = null, Ai = 0, Vt = [], Ut = 0, Ir = null, zn = 1, Ln = "";
    function Tr(t, n) {
      ao[uo++] = Ai, ao[uo++] = Ti, Ti = t, Ai = n;
    }
    function rf(t, n, s) {
      Vt[Ut++] = zn, Vt[Ut++] = Ln, Vt[Ut++] = Ir, Ir = t;
      var a = zn;
      t = Ln;
      var d = 32 - rn(a) - 1;
      a &= ~(1 << d), s += 1;
      var g = 32 - rn(n) + d;
      if (30 < g) {
        var w = d - d % 5;
        g = (a & (1 << w) - 1).toString(32), a >>= w, d -= w, zn = 1 << 32 - rn(n) + d | s << d | a, Ln = g + t;
      } else zn = 1 << g | s << d | a, Ln = t;
    }
    function ja(t) {
      t.return !== null && (Tr(t, 1), rf(t, 1, 0));
    }
    function Ha(t) {
      for (; t === Ti; ) Ti = ao[--uo], ao[uo] = null, Ai = ao[--uo], ao[uo] = null;
      for (; t === Ir; ) Ir = Vt[--Ut], Vt[Ut] = null, Ln = Vt[--Ut], Vt[Ut] = null, zn = Vt[--Ut], Vt[Ut] = null;
    }
    var Rt = null, Pt = null, Fe = false, sn = null;
    function of(t, n) {
      var s = Xt(5, null, null, 0);
      s.elementType = "DELETED", s.stateNode = n, s.return = t, n = t.deletions, n === null ? (t.deletions = [
        s
      ], t.flags |= 16) : n.push(s);
    }
    function sf(t, n) {
      switch (t.tag) {
        case 5:
          var s = t.type;
          return n = n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (t.stateNode = n, Rt = t, Pt = tr(n.firstChild), true) : false;
        case 6:
          return n = t.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (t.stateNode = n, Rt = t, Pt = null, true) : false;
        case 13:
          return n = n.nodeType !== 8 ? null : n, n !== null ? (s = Ir !== null ? {
            id: zn,
            overflow: Ln
          } : null, t.memoizedState = {
            dehydrated: n,
            treeContext: s,
            retryLane: 1073741824
          }, s = Xt(18, null, null, 0), s.stateNode = n, s.return = t, t.child = s, Rt = t, Pt = null, true) : false;
        default:
          return false;
      }
    }
    function Va(t) {
      return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
    }
    function Ua(t) {
      if (Fe) {
        var n = Pt;
        if (n) {
          var s = n;
          if (!sf(t, n)) {
            if (Va(t)) throw Error(o(418));
            n = tr(s.nextSibling);
            var a = Rt;
            n && sf(t, n) ? of(a, s) : (t.flags = t.flags & -4097 | 2, Fe = false, Rt = t);
          }
        } else {
          if (Va(t)) throw Error(o(418));
          t.flags = t.flags & -4097 | 2, Fe = false, Rt = t;
        }
      }
    }
    function lf(t) {
      for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
      Rt = t;
    }
    function $i(t) {
      if (t !== Rt) return false;
      if (!Fe) return lf(t), Fe = true, false;
      var n;
      if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = t.type, n = n !== "head" && n !== "body" && !za(t.type, t.memoizedProps)), n && (n = Pt)) {
        if (Va(t)) throw af(), Error(o(418));
        for (; n; ) of(t, n), n = tr(n.nextSibling);
      }
      if (lf(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
        e: {
          for (t = t.nextSibling, n = 0; t; ) {
            if (t.nodeType === 8) {
              var s = t.data;
              if (s === "/$") {
                if (n === 0) {
                  Pt = tr(t.nextSibling);
                  break e;
                }
                n--;
              } else s !== "$" && s !== "$!" && s !== "$?" || n++;
            }
            t = t.nextSibling;
          }
          Pt = null;
        }
      } else Pt = Rt ? tr(t.stateNode.nextSibling) : null;
      return true;
    }
    function af() {
      for (var t = Pt; t; ) t = tr(t.nextSibling);
    }
    function co() {
      Pt = Rt = null, Fe = false;
    }
    function Wa(t) {
      sn === null ? sn = [
        t
      ] : sn.push(t);
    }
    var ty = I.ReactCurrentBatchConfig;
    function is(t, n, s) {
      if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (s._owner) {
          if (s = s._owner, s) {
            if (s.tag !== 1) throw Error(o(309));
            var a = s.stateNode;
          }
          if (!a) throw Error(o(147, t));
          var d = a, g = "" + t;
          return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === g ? n.ref : (n = function(w) {
            var M = d.refs;
            w === null ? delete M[g] : M[g] = w;
          }, n._stringRef = g, n);
        }
        if (typeof t != "string") throw Error(o(284));
        if (!s._owner) throw Error(o(290, t));
      }
      return t;
    }
    function Ri(t, n) {
      throw t = Object.prototype.toString.call(n), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t));
    }
    function uf(t) {
      var n = t._init;
      return n(t._payload);
    }
    function cf(t) {
      function n(H, R) {
        if (t) {
          var U = H.deletions;
          U === null ? (H.deletions = [
            R
          ], H.flags |= 16) : U.push(R);
        }
      }
      function s(H, R) {
        if (!t) return null;
        for (; R !== null; ) n(H, R), R = R.sibling;
        return null;
      }
      function a(H, R) {
        for (H = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? H.set(R.key, R) : H.set(R.index, R), R = R.sibling;
        return H;
      }
      function d(H, R) {
        return H = fr(H, R), H.index = 0, H.sibling = null, H;
      }
      function g(H, R, U) {
        return H.index = U, t ? (U = H.alternate, U !== null ? (U = U.index, U < R ? (H.flags |= 2, R) : U) : (H.flags |= 2, R)) : (H.flags |= 1048576, R);
      }
      function w(H) {
        return t && H.alternate === null && (H.flags |= 2), H;
      }
      function M(H, R, U, ie) {
        return R === null || R.tag !== 6 ? (R = Lu(U, H.mode, ie), R.return = H, R) : (R = d(R, U), R.return = H, R);
      }
      function T(H, R, U, ie) {
        var pe = U.type;
        return pe === Q ? re(H, R, U.props.children, ie, U.key) : R !== null && (R.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === O && uf(pe) === R.type) ? (ie = d(R, U.props), ie.ref = is(H, R, U), ie.return = H, ie) : (ie = rl(U.type, U.key, U.props, null, H.mode, ie), ie.ref = is(H, R, U), ie.return = H, ie);
      }
      function W(H, R, U, ie) {
        return R === null || R.tag !== 4 || R.stateNode.containerInfo !== U.containerInfo || R.stateNode.implementation !== U.implementation ? (R = Du(U, H.mode, ie), R.return = H, R) : (R = d(R, U.children || []), R.return = H, R);
      }
      function re(H, R, U, ie, pe) {
        return R === null || R.tag !== 7 ? (R = Or(U, H.mode, ie, pe), R.return = H, R) : (R = d(R, U), R.return = H, R);
      }
      function se(H, R, U) {
        if (typeof R == "string" && R !== "" || typeof R == "number") return R = Lu("" + R, H.mode, U), R.return = H, R;
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case F:
              return U = rl(R.type, R.key, R.props, null, H.mode, U), U.ref = is(H, null, R), U.return = H, U;
            case z:
              return R = Du(R, H.mode, U), R.return = H, R;
            case O:
              var ie = R._init;
              return se(H, ie(R._payload), U);
          }
          if (vt(R) || $(R)) return R = Or(R, H.mode, U, null), R.return = H, R;
          Ri(H, R);
        }
        return null;
      }
      function te(H, R, U, ie) {
        var pe = R !== null ? R.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number") return pe !== null ? null : M(H, R, "" + U, ie);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case F:
              return U.key === pe ? T(H, R, U, ie) : null;
            case z:
              return U.key === pe ? W(H, R, U, ie) : null;
            case O:
              return pe = U._init, te(H, R, pe(U._payload), ie);
          }
          if (vt(U) || $(U)) return pe !== null ? null : re(H, R, U, ie, null);
          Ri(H, U);
        }
        return null;
      }
      function ue(H, R, U, ie, pe) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") return H = H.get(U) || null, M(R, H, "" + ie, pe);
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case F:
              return H = H.get(ie.key === null ? U : ie.key) || null, T(R, H, ie, pe);
            case z:
              return H = H.get(ie.key === null ? U : ie.key) || null, W(R, H, ie, pe);
            case O:
              var we = ie._init;
              return ue(H, R, U, we(ie._payload), pe);
          }
          if (vt(ie) || $(ie)) return H = H.get(U) || null, re(R, H, ie, pe, null);
          Ri(R, ie);
        }
        return null;
      }
      function de(H, R, U, ie) {
        for (var pe = null, we = null, xe = R, ke = R = 0, it = null; xe !== null && ke < U.length; ke++) {
          xe.index > ke ? (it = xe, xe = null) : it = xe.sibling;
          var be = te(H, xe, U[ke], ie);
          if (be === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && be.alternate === null && n(H, xe), R = g(be, R, ke), we === null ? pe = be : we.sibling = be, we = be, xe = it;
        }
        if (ke === U.length) return s(H, xe), Fe && Tr(H, ke), pe;
        if (xe === null) {
          for (; ke < U.length; ke++) xe = se(H, U[ke], ie), xe !== null && (R = g(xe, R, ke), we === null ? pe = xe : we.sibling = xe, we = xe);
          return Fe && Tr(H, ke), pe;
        }
        for (xe = a(H, xe); ke < U.length; ke++) it = ue(xe, H, ke, U[ke], ie), it !== null && (t && it.alternate !== null && xe.delete(it.key === null ? ke : it.key), R = g(it, R, ke), we === null ? pe = it : we.sibling = it, we = it);
        return t && xe.forEach(function(hr) {
          return n(H, hr);
        }), Fe && Tr(H, ke), pe;
      }
      function fe(H, R, U, ie) {
        var pe = $(U);
        if (typeof pe != "function") throw Error(o(150));
        if (U = pe.call(U), U == null) throw Error(o(151));
        for (var we = pe = null, xe = R, ke = R = 0, it = null, be = U.next(); xe !== null && !be.done; ke++, be = U.next()) {
          xe.index > ke ? (it = xe, xe = null) : it = xe.sibling;
          var hr = te(H, xe, be.value, ie);
          if (hr === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && hr.alternate === null && n(H, xe), R = g(hr, R, ke), we === null ? pe = hr : we.sibling = hr, we = hr, xe = it;
        }
        if (be.done) return s(H, xe), Fe && Tr(H, ke), pe;
        if (xe === null) {
          for (; !be.done; ke++, be = U.next()) be = se(H, be.value, ie), be !== null && (R = g(be, R, ke), we === null ? pe = be : we.sibling = be, we = be);
          return Fe && Tr(H, ke), pe;
        }
        for (xe = a(H, xe); !be.done; ke++, be = U.next()) be = ue(xe, H, ke, be.value, ie), be !== null && (t && be.alternate !== null && xe.delete(be.key === null ? ke : be.key), R = g(be, R, ke), we === null ? pe = be : we.sibling = be, we = be);
        return t && xe.forEach(function(Py) {
          return n(H, Py);
        }), Fe && Tr(H, ke), pe;
      }
      function Xe(H, R, U, ie) {
        if (typeof U == "object" && U !== null && U.type === Q && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case F:
              e: {
                for (var pe = U.key, we = R; we !== null; ) {
                  if (we.key === pe) {
                    if (pe = U.type, pe === Q) {
                      if (we.tag === 7) {
                        s(H, we.sibling), R = d(we, U.props.children), R.return = H, H = R;
                        break e;
                      }
                    } else if (we.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === O && uf(pe) === we.type) {
                      s(H, we.sibling), R = d(we, U.props), R.ref = is(H, we, U), R.return = H, H = R;
                      break e;
                    }
                    s(H, we);
                    break;
                  } else n(H, we);
                  we = we.sibling;
                }
                U.type === Q ? (R = Or(U.props.children, H.mode, ie, U.key), R.return = H, H = R) : (ie = rl(U.type, U.key, U.props, null, H.mode, ie), ie.ref = is(H, R, U), ie.return = H, H = ie);
              }
              return w(H);
            case z:
              e: {
                for (we = U.key; R !== null; ) {
                  if (R.key === we) if (R.tag === 4 && R.stateNode.containerInfo === U.containerInfo && R.stateNode.implementation === U.implementation) {
                    s(H, R.sibling), R = d(R, U.children || []), R.return = H, H = R;
                    break e;
                  } else {
                    s(H, R);
                    break;
                  }
                  else n(H, R);
                  R = R.sibling;
                }
                R = Du(U, H.mode, ie), R.return = H, H = R;
              }
              return w(H);
            case O:
              return we = U._init, Xe(H, R, we(U._payload), ie);
          }
          if (vt(U)) return de(H, R, U, ie);
          if ($(U)) return fe(H, R, U, ie);
          Ri(H, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, R !== null && R.tag === 6 ? (s(H, R.sibling), R = d(R, U), R.return = H, H = R) : (s(H, R), R = Lu(U, H.mode, ie), R.return = H, H = R), w(H)) : s(H, R);
      }
      return Xe;
    }
    var fo = cf(true), df = cf(false), Pi = nr(null), zi = null, ho = null, Ya = null;
    function Ga() {
      Ya = ho = zi = null;
    }
    function Xa(t) {
      var n = Pi.current;
      De(Pi), t._currentValue = n;
    }
    function Ka(t, n, s) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & n) !== n ? (t.childLanes |= n, a !== null && (a.childLanes |= n)) : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n), t === s) break;
        t = t.return;
      }
    }
    function po(t, n) {
      zi = t, Ya = ho = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & n) !== 0 && (Nt = true), t.firstContext = null);
    }
    function Wt(t) {
      var n = t._currentValue;
      if (Ya !== t) if (t = {
        context: t,
        memoizedValue: n,
        next: null
      }, ho === null) {
        if (zi === null) throw Error(o(308));
        ho = t, zi.dependencies = {
          lanes: 0,
          firstContext: t
        };
      } else ho = ho.next = t;
      return n;
    }
    var Ar = null;
    function Qa(t) {
      Ar === null ? Ar = [
        t
      ] : Ar.push(t);
    }
    function ff(t, n, s, a) {
      var d = n.interleaved;
      return d === null ? (s.next = s, Qa(n)) : (s.next = d.next, d.next = s), n.interleaved = s, Dn(t, a);
    }
    function Dn(t, n) {
      t.lanes |= n;
      var s = t.alternate;
      for (s !== null && (s.lanes |= n), s = t, t = t.return; t !== null; ) t.childLanes |= n, s = t.alternate, s !== null && (s.childLanes |= n), s = t, t = t.return;
      return s.tag === 3 ? s.stateNode : null;
    }
    var sr = false;
    function Za(t) {
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
    function hf(t, n) {
      t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
      });
    }
    function On(t, n) {
      return {
        eventTime: t,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ir(t, n, s) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (Ne & 2) !== 0) {
        var d = a.pending;
        return d === null ? n.next = n : (n.next = d.next, d.next = n), a.pending = n, Dn(t, s);
      }
      return d = a.interleaved, d === null ? (n.next = n, Qa(a)) : (n.next = d.next, d.next = n), a.interleaved = n, Dn(t, s);
    }
    function Li(t, n, s) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194240) !== 0)) {
        var a = n.lanes;
        a &= t.pendingLanes, s |= a, n.lanes = s, da(t, s);
      }
    }
    function pf(t, n) {
      var s = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, s === a)) {
        var d = null, g = null;
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
            g === null ? d = g = w : g = g.next = w, s = s.next;
          } while (s !== null);
          g === null ? d = g = n : g = g.next = n;
        } else d = g = n;
        s = {
          baseState: a.baseState,
          firstBaseUpdate: d,
          lastBaseUpdate: g,
          shared: a.shared,
          effects: a.effects
        }, t.updateQueue = s;
        return;
      }
      t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = n : t.next = n, s.lastBaseUpdate = n;
    }
    function Di(t, n, s, a) {
      var d = t.updateQueue;
      sr = false;
      var g = d.firstBaseUpdate, w = d.lastBaseUpdate, M = d.shared.pending;
      if (M !== null) {
        d.shared.pending = null;
        var T = M, W = T.next;
        T.next = null, w === null ? g = W : w.next = W, w = T;
        var re = t.alternate;
        re !== null && (re = re.updateQueue, M = re.lastBaseUpdate, M !== w && (M === null ? re.firstBaseUpdate = W : M.next = W, re.lastBaseUpdate = T));
      }
      if (g !== null) {
        var se = d.baseState;
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
                  se = j({}, se, te);
                  break e;
                case 2:
                  sr = true;
              }
            }
            M.callback !== null && M.lane !== 0 && (t.flags |= 64, te = d.effects, te === null ? d.effects = [
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
            if (M = d.shared.pending, M === null) break;
            te = M, M = te.next, te.next = null, d.lastBaseUpdate = te, d.shared.pending = null;
          }
        } while (true);
        if (re === null && (T = se), d.baseState = T, d.firstBaseUpdate = W, d.lastBaseUpdate = re, n = d.shared.interleaved, n !== null) {
          d = n;
          do
            w |= d.lane, d = d.next;
          while (d !== n);
        } else g === null && (d.shared.lanes = 0);
        Pr |= w, t.lanes = w, t.memoizedState = se;
      }
    }
    function mf(t, n, s) {
      if (t = n.effects, n.effects = null, t !== null) for (n = 0; n < t.length; n++) {
        var a = t[n], d = a.callback;
        if (d !== null) {
          if (a.callback = null, a = s, typeof d != "function") throw Error(o(191, d));
          d.call(a);
        }
      }
    }
    var ls = {}, Sn = nr(ls), as = nr(ls), us = nr(ls);
    function $r(t) {
      if (t === ls) throw Error(o(174));
      return t;
    }
    function qa(t, n) {
      switch (Pe(us, n), Pe(as, t), Pe(Sn, ls), t = n.nodeType, t) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : Jt(null, "");
          break;
        default:
          t = t === 8 ? n.parentNode : n, n = t.namespaceURI || null, t = t.tagName, n = Jt(n, t);
      }
      De(Sn), Pe(Sn, n);
    }
    function mo() {
      De(Sn), De(as), De(us);
    }
    function gf(t) {
      $r(us.current);
      var n = $r(Sn.current), s = Jt(n, t.type);
      n !== s && (Pe(as, t), Pe(Sn, s));
    }
    function Ja(t) {
      as.current === t && (De(Sn), De(as));
    }
    var je = nr(0);
    function Oi(t) {
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
    var eu = [];
    function tu() {
      for (var t = 0; t < eu.length; t++) eu[t]._workInProgressVersionPrimary = null;
      eu.length = 0;
    }
    var Fi = I.ReactCurrentDispatcher, nu = I.ReactCurrentBatchConfig, Rr = 0, He = null, Je = null, ot = null, Bi = false, cs = false, ds = 0, ny = 0;
    function ht() {
      throw Error(o(321));
    }
    function ru(t, n) {
      if (n === null) return false;
      for (var s = 0; s < n.length && s < t.length; s++) if (!on(t[s], n[s])) return false;
      return true;
    }
    function ou(t, n, s, a, d, g) {
      if (Rr = g, He = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Fi.current = t === null || t.memoizedState === null ? iy : ly, t = s(a, d), cs) {
        g = 0;
        do {
          if (cs = false, ds = 0, 25 <= g) throw Error(o(301));
          g += 1, ot = Je = null, n.updateQueue = null, Fi.current = ay, t = s(a, d);
        } while (cs);
      }
      if (Fi.current = Vi, n = Je !== null && Je.next !== null, Rr = 0, ot = Je = He = null, Bi = false, n) throw Error(o(300));
      return t;
    }
    function su() {
      var t = ds !== 0;
      return ds = 0, t;
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
    function fs(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function iu(t) {
      var n = Yt(), s = n.queue;
      if (s === null) throw Error(o(311));
      s.lastRenderedReducer = t;
      var a = Je, d = a.baseQueue, g = s.pending;
      if (g !== null) {
        if (d !== null) {
          var w = d.next;
          d.next = g.next, g.next = w;
        }
        a.baseQueue = d = g, s.pending = null;
      }
      if (d !== null) {
        g = d.next, a = a.baseState;
        var M = w = null, T = null, W = g;
        do {
          var re = W.lane;
          if ((Rr & re) === re) T !== null && (T = T.next = {
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
            T === null ? (M = T = se, w = a) : T = T.next = se, He.lanes |= re, Pr |= re;
          }
          W = W.next;
        } while (W !== null && W !== g);
        T === null ? w = a : T.next = M, on(a, n.memoizedState) || (Nt = true), n.memoizedState = a, n.baseState = w, n.baseQueue = T, s.lastRenderedState = a;
      }
      if (t = s.interleaved, t !== null) {
        d = t;
        do
          g = d.lane, He.lanes |= g, Pr |= g, d = d.next;
        while (d !== t);
      } else d === null && (s.lanes = 0);
      return [
        n.memoizedState,
        s.dispatch
      ];
    }
    function lu(t) {
      var n = Yt(), s = n.queue;
      if (s === null) throw Error(o(311));
      s.lastRenderedReducer = t;
      var a = s.dispatch, d = s.pending, g = n.memoizedState;
      if (d !== null) {
        s.pending = null;
        var w = d = d.next;
        do
          g = t(g, w.action), w = w.next;
        while (w !== d);
        on(g, n.memoizedState) || (Nt = true), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), s.lastRenderedState = g;
      }
      return [
        g,
        a
      ];
    }
    function yf() {
    }
    function vf(t, n) {
      var s = He, a = Yt(), d = n(), g = !on(a.memoizedState, d);
      if (g && (a.memoizedState = d, Nt = true), a = a.queue, au(Sf.bind(null, s, a, t), [
        t
      ]), a.getSnapshot !== n || g || ot !== null && ot.memoizedState.tag & 1) {
        if (s.flags |= 2048, hs(9, xf.bind(null, s, a, d, n), void 0, null), st === null) throw Error(o(349));
        (Rr & 30) !== 0 || wf(s, n, d);
      }
      return d;
    }
    function wf(t, n, s) {
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
    function xf(t, n, s, a) {
      n.value = s, n.getSnapshot = a, kf(n) && Ef(t);
    }
    function Sf(t, n, s) {
      return s(function() {
        kf(n) && Ef(t);
      });
    }
    function kf(t) {
      var n = t.getSnapshot;
      t = t.value;
      try {
        var s = n();
        return !on(t, s);
      } catch {
        return true;
      }
    }
    function Ef(t) {
      var n = Dn(t, 1);
      n !== null && cn(n, t, 1, -1);
    }
    function Cf(t) {
      var n = kn();
      return typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fs,
        lastRenderedState: t
      }, n.queue = t, t = t.dispatch = sy.bind(null, He, t), [
        n.memoizedState,
        t
      ];
    }
    function hs(t, n, s, a) {
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
    function _f() {
      return Yt().memoizedState;
    }
    function ji(t, n, s, a) {
      var d = kn();
      He.flags |= t, d.memoizedState = hs(1 | n, s, void 0, a === void 0 ? null : a);
    }
    function Hi(t, n, s, a) {
      var d = Yt();
      a = a === void 0 ? null : a;
      var g = void 0;
      if (Je !== null) {
        var w = Je.memoizedState;
        if (g = w.destroy, a !== null && ru(a, w.deps)) {
          d.memoizedState = hs(n, s, g, a);
          return;
        }
      }
      He.flags |= t, d.memoizedState = hs(1 | n, s, g, a);
    }
    function Nf(t, n) {
      return ji(8390656, 8, t, n);
    }
    function au(t, n) {
      return Hi(2048, 8, t, n);
    }
    function Mf(t, n) {
      return Hi(4, 2, t, n);
    }
    function bf(t, n) {
      return Hi(4, 4, t, n);
    }
    function If(t, n) {
      if (typeof n == "function") return t = t(), n(t), function() {
        n(null);
      };
      if (n != null) return t = t(), n.current = t, function() {
        n.current = null;
      };
    }
    function Tf(t, n, s) {
      return s = s != null ? s.concat([
        t
      ]) : null, Hi(4, 4, If.bind(null, n, t), s);
    }
    function uu() {
    }
    function Af(t, n) {
      var s = Yt();
      n = n === void 0 ? null : n;
      var a = s.memoizedState;
      return a !== null && n !== null && ru(n, a[1]) ? a[0] : (s.memoizedState = [
        t,
        n
      ], t);
    }
    function $f(t, n) {
      var s = Yt();
      n = n === void 0 ? null : n;
      var a = s.memoizedState;
      return a !== null && n !== null && ru(n, a[1]) ? a[0] : (t = t(), s.memoizedState = [
        t,
        n
      ], t);
    }
    function Rf(t, n, s) {
      return (Rr & 21) === 0 ? (t.baseState && (t.baseState = false, Nt = true), t.memoizedState = s) : (on(s, n) || (s = ad(), He.lanes |= s, Pr |= s, t.baseState = true), n);
    }
    function ry(t, n) {
      var s = Ae;
      Ae = s !== 0 && 4 > s ? s : 4, t(true);
      var a = nu.transition;
      nu.transition = {};
      try {
        t(false), n();
      } finally {
        Ae = s, nu.transition = a;
      }
    }
    function Pf() {
      return Yt().memoizedState;
    }
    function oy(t, n, s) {
      var a = cr(t);
      if (s = {
        lane: a,
        action: s,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, zf(t)) Lf(n, s);
      else if (s = ff(t, n, s, a), s !== null) {
        var d = xt();
        cn(s, t, a, d), Df(s, n, a);
      }
    }
    function sy(t, n, s) {
      var a = cr(t), d = {
        lane: a,
        action: s,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (zf(t)) Lf(n, d);
      else {
        var g = t.alternate;
        if (t.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null)) try {
          var w = n.lastRenderedState, M = g(w, s);
          if (d.hasEagerState = true, d.eagerState = M, on(M, w)) {
            var T = n.interleaved;
            T === null ? (d.next = d, Qa(n)) : (d.next = T.next, T.next = d), n.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
        s = ff(t, n, d, a), s !== null && (d = xt(), cn(s, t, a, d), Df(s, n, a));
      }
    }
    function zf(t) {
      var n = t.alternate;
      return t === He || n !== null && n === He;
    }
    function Lf(t, n) {
      cs = Bi = true;
      var s = t.pending;
      s === null ? n.next = n : (n.next = s.next, s.next = n), t.pending = n;
    }
    function Df(t, n, s) {
      if ((s & 4194240) !== 0) {
        var a = n.lanes;
        a &= t.pendingLanes, s |= a, n.lanes = s, da(t, s);
      }
    }
    var Vi = {
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
    }, iy = {
      readContext: Wt,
      useCallback: function(t, n) {
        return kn().memoizedState = [
          t,
          n === void 0 ? null : n
        ], t;
      },
      useContext: Wt,
      useEffect: Nf,
      useImperativeHandle: function(t, n, s) {
        return s = s != null ? s.concat([
          t
        ]) : null, ji(4194308, 4, If.bind(null, n, t), s);
      },
      useLayoutEffect: function(t, n) {
        return ji(4194308, 4, t, n);
      },
      useInsertionEffect: function(t, n) {
        return ji(4, 2, t, n);
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
        }, a.queue = t, t = t.dispatch = oy.bind(null, He, t), [
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
      useState: Cf,
      useDebugValue: uu,
      useDeferredValue: function(t) {
        return kn().memoizedState = t;
      },
      useTransition: function() {
        var t = Cf(false), n = t[0];
        return t = ry.bind(null, t[1]), kn().memoizedState = t, [
          n,
          t
        ];
      },
      useMutableSource: function() {
      },
      useSyncExternalStore: function(t, n, s) {
        var a = He, d = kn();
        if (Fe) {
          if (s === void 0) throw Error(o(407));
          s = s();
        } else {
          if (s = n(), st === null) throw Error(o(349));
          (Rr & 30) !== 0 || wf(a, n, s);
        }
        d.memoizedState = s;
        var g = {
          value: s,
          getSnapshot: n
        };
        return d.queue = g, Nf(Sf.bind(null, a, g, t), [
          t
        ]), a.flags |= 2048, hs(9, xf.bind(null, a, g, s, n), void 0, null), s;
      },
      useId: function() {
        var t = kn(), n = st.identifierPrefix;
        if (Fe) {
          var s = Ln, a = zn;
          s = (a & ~(1 << 32 - rn(a) - 1)).toString(32) + s, n = ":" + n + "R" + s, s = ds++, 0 < s && (n += "H" + s.toString(32)), n += ":";
        } else s = ny++, n = ":" + n + "r" + s.toString(32) + ":";
        return t.memoizedState = n;
      },
      unstable_isNewReconciler: false
    }, ly = {
      readContext: Wt,
      useCallback: Af,
      useContext: Wt,
      useEffect: au,
      useImperativeHandle: Tf,
      useInsertionEffect: Mf,
      useLayoutEffect: bf,
      useMemo: $f,
      useReducer: iu,
      useRef: _f,
      useState: function() {
        return iu(fs);
      },
      useDebugValue: uu,
      useDeferredValue: function(t) {
        var n = Yt();
        return Rf(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = iu(fs)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: yf,
      useSyncExternalStore: vf,
      useId: Pf,
      unstable_isNewReconciler: false
    }, ay = {
      readContext: Wt,
      useCallback: Af,
      useContext: Wt,
      useEffect: au,
      useImperativeHandle: Tf,
      useInsertionEffect: Mf,
      useLayoutEffect: bf,
      useMemo: $f,
      useReducer: lu,
      useRef: _f,
      useState: function() {
        return lu(fs);
      },
      useDebugValue: uu,
      useDeferredValue: function(t) {
        var n = Yt();
        return Je === null ? n.memoizedState = t : Rf(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = lu(fs)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: yf,
      useSyncExternalStore: vf,
      useId: Pf,
      unstable_isNewReconciler: false
    };
    function ln(t, n) {
      if (t && t.defaultProps) {
        n = j({}, n), t = t.defaultProps;
        for (var s in t) n[s] === void 0 && (n[s] = t[s]);
        return n;
      }
      return n;
    }
    function cu(t, n, s, a) {
      n = t.memoizedState, s = s(a, n), s = s == null ? n : j({}, n, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
    }
    var Ui = {
      isMounted: function(t) {
        return (t = t._reactInternals) ? $n(t) === t : false;
      },
      enqueueSetState: function(t, n, s) {
        t = t._reactInternals;
        var a = xt(), d = cr(t), g = On(a, d);
        g.payload = n, s != null && (g.callback = s), n = ir(t, g, d), n !== null && (cn(n, t, d, a), Li(n, t, d));
      },
      enqueueReplaceState: function(t, n, s) {
        t = t._reactInternals;
        var a = xt(), d = cr(t), g = On(a, d);
        g.tag = 1, g.payload = n, s != null && (g.callback = s), n = ir(t, g, d), n !== null && (cn(n, t, d, a), Li(n, t, d));
      },
      enqueueForceUpdate: function(t, n) {
        t = t._reactInternals;
        var s = xt(), a = cr(t), d = On(s, a);
        d.tag = 2, n != null && (d.callback = n), n = ir(t, d, a), n !== null && (cn(n, t, a, s), Li(n, t, a));
      }
    };
    function Of(t, n, s, a, d, g, w) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, g, w) : n.prototype && n.prototype.isPureReactComponent ? !Jo(s, a) || !Jo(d, g) : true;
    }
    function Ff(t, n, s) {
      var a = false, d = rr, g = n.contextType;
      return typeof g == "object" && g !== null ? g = Wt(g) : (d = _t(n) ? br : ft.current, a = n.contextTypes, g = (a = a != null) ? lo(t, d) : rr), n = new n(s, g), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ui, t.stateNode = n, n._reactInternals = t, a && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = g), n;
    }
    function Bf(t, n, s, a) {
      t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, a), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, a), n.state !== t && Ui.enqueueReplaceState(n, n.state, null);
    }
    function du(t, n, s, a) {
      var d = t.stateNode;
      d.props = s, d.state = t.memoizedState, d.refs = {}, Za(t);
      var g = n.contextType;
      typeof g == "object" && g !== null ? d.context = Wt(g) : (g = _t(n) ? br : ft.current, d.context = lo(t, g)), d.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (cu(t, n, g, s), d.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (n = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), n !== d.state && Ui.enqueueReplaceState(d, d.state, null), Di(t, s, d, a), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
    }
    function go(t, n) {
      try {
        var s = "", a = n;
        do
          s += le(a), a = a.return;
        while (a);
        var d = s;
      } catch (g) {
        d = `
Error generating stack: ` + g.message + `
` + g.stack;
      }
      return {
        value: t,
        source: n,
        stack: d,
        digest: null
      };
    }
    function fu(t, n, s) {
      return {
        value: t,
        source: null,
        stack: s ?? null,
        digest: n ?? null
      };
    }
    function hu(t, n) {
      try {
        console.error(n.value);
      } catch (s) {
        setTimeout(function() {
          throw s;
        });
      }
    }
    var uy = typeof WeakMap == "function" ? WeakMap : Map;
    function jf(t, n, s) {
      s = On(-1, s), s.tag = 3, s.payload = {
        element: null
      };
      var a = n.value;
      return s.callback = function() {
        Zi || (Zi = true, bu = a), hu(t, n);
      }, s;
    }
    function Hf(t, n, s) {
      s = On(-1, s), s.tag = 3;
      var a = t.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var d = n.value;
        s.payload = function() {
          return a(d);
        }, s.callback = function() {
          hu(t, n);
        };
      }
      var g = t.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" && (s.callback = function() {
        hu(t, n), typeof a != "function" && (ar === null ? ar = /* @__PURE__ */ new Set([
          this
        ]) : ar.add(this));
        var w = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: w !== null ? w : ""
        });
      }), s;
    }
    function Vf(t, n, s) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new uy();
        var d = /* @__PURE__ */ new Set();
        a.set(n, d);
      } else d = a.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), a.set(n, d));
      d.has(s) || (d.add(s), t = Ey.bind(null, t, n, s), n.then(t, t));
    }
    function Uf(t) {
      do {
        var n;
        if ((n = t.tag === 13) && (n = t.memoizedState, n = n !== null ? n.dehydrated !== null : true), n) return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Wf(t, n, s, a, d) {
      return (t.mode & 1) === 0 ? (t === n ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (n = On(-1, 1), n.tag = 2, ir(s, n, 1))), s.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t);
    }
    var cy = I.ReactCurrentOwner, Nt = false;
    function wt(t, n, s, a) {
      n.child = t === null ? df(n, null, s, a) : fo(n, t.child, s, a);
    }
    function Yf(t, n, s, a, d) {
      s = s.render;
      var g = n.ref;
      return po(n, d), a = ou(t, n, s, a, g, d), s = su(), t !== null && !Nt ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~d, Fn(t, n, d)) : (Fe && s && ja(n), n.flags |= 1, wt(t, n, a, d), n.child);
    }
    function Gf(t, n, s, a, d) {
      if (t === null) {
        var g = s.type;
        return typeof g == "function" && !zu(g) && g.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (n.tag = 15, n.type = g, Xf(t, n, g, a, d)) : (t = rl(s.type, null, a, n, n.mode, d), t.ref = n.ref, t.return = n, n.child = t);
      }
      if (g = t.child, (t.lanes & d) === 0) {
        var w = g.memoizedProps;
        if (s = s.compare, s = s !== null ? s : Jo, s(w, a) && t.ref === n.ref) return Fn(t, n, d);
      }
      return n.flags |= 1, t = fr(g, a), t.ref = n.ref, t.return = n, n.child = t;
    }
    function Xf(t, n, s, a, d) {
      if (t !== null) {
        var g = t.memoizedProps;
        if (Jo(g, a) && t.ref === n.ref) if (Nt = false, n.pendingProps = a = g, (t.lanes & d) !== 0) (t.flags & 131072) !== 0 && (Nt = true);
        else return n.lanes = t.lanes, Fn(t, n, d);
      }
      return pu(t, n, s, a, d);
    }
    function Kf(t, n, s) {
      var a = n.pendingProps, d = a.children, g = t !== null ? t.memoizedState : null;
      if (a.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, Pe(vo, zt), zt |= s;
      else {
        if ((s & 1073741824) === 0) return t = g !== null ? g.baseLanes | s : s, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
          baseLanes: t,
          cachePool: null,
          transitions: null
        }, n.updateQueue = null, Pe(vo, zt), zt |= t, null;
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, a = g !== null ? g.baseLanes : s, Pe(vo, zt), zt |= a;
      }
      else g !== null ? (a = g.baseLanes | s, n.memoizedState = null) : a = s, Pe(vo, zt), zt |= a;
      return wt(t, n, d, s), n.child;
    }
    function Qf(t, n) {
      var s = n.ref;
      (t === null && s !== null || t !== null && t.ref !== s) && (n.flags |= 512, n.flags |= 2097152);
    }
    function pu(t, n, s, a, d) {
      var g = _t(s) ? br : ft.current;
      return g = lo(n, g), po(n, d), s = ou(t, n, s, a, g, d), a = su(), t !== null && !Nt ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~d, Fn(t, n, d)) : (Fe && a && ja(n), n.flags |= 1, wt(t, n, s, d), n.child);
    }
    function Zf(t, n, s, a, d) {
      if (_t(s)) {
        var g = true;
        bi(n);
      } else g = false;
      if (po(n, d), n.stateNode === null) Yi(t, n), Ff(n, s, a), du(n, s, a, d), a = true;
      else if (t === null) {
        var w = n.stateNode, M = n.memoizedProps;
        w.props = M;
        var T = w.context, W = s.contextType;
        typeof W == "object" && W !== null ? W = Wt(W) : (W = _t(s) ? br : ft.current, W = lo(n, W));
        var re = s.getDerivedStateFromProps, se = typeof re == "function" || typeof w.getSnapshotBeforeUpdate == "function";
        se || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== a || T !== W) && Bf(n, w, a, W), sr = false;
        var te = n.memoizedState;
        w.state = te, Di(n, a, w, d), T = n.memoizedState, M !== a || te !== T || Ct.current || sr ? (typeof re == "function" && (cu(n, s, re, a), T = n.memoizedState), (M = sr || Of(n, s, M, a, te, T, W)) ? (se || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = a, n.memoizedState = T), w.props = a, w.state = T, w.context = W, a = M) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), a = false);
      } else {
        w = n.stateNode, hf(t, n), M = n.memoizedProps, W = n.type === n.elementType ? M : ln(n.type, M), w.props = W, se = n.pendingProps, te = w.context, T = s.contextType, typeof T == "object" && T !== null ? T = Wt(T) : (T = _t(s) ? br : ft.current, T = lo(n, T));
        var ue = s.getDerivedStateFromProps;
        (re = typeof ue == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== se || te !== T) && Bf(n, w, a, T), sr = false, te = n.memoizedState, w.state = te, Di(n, a, w, d);
        var de = n.memoizedState;
        M !== se || te !== de || Ct.current || sr ? (typeof ue == "function" && (cu(n, s, ue, a), de = n.memoizedState), (W = sr || Of(n, s, W, a, te, de, T) || false) ? (re || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(a, de, T), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(a, de, T)), typeof w.componentDidUpdate == "function" && (n.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 1024), n.memoizedProps = a, n.memoizedState = de), w.props = a, w.state = de, w.context = T, a = W) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 1024), a = false);
      }
      return mu(t, n, s, a, g, d);
    }
    function mu(t, n, s, a, d, g) {
      Qf(t, n);
      var w = (n.flags & 128) !== 0;
      if (!a && !w) return d && tf(n, s, false), Fn(t, n, g);
      a = n.stateNode, cy.current = n;
      var M = w && typeof s.getDerivedStateFromError != "function" ? null : a.render();
      return n.flags |= 1, t !== null && w ? (n.child = fo(n, t.child, null, g), n.child = fo(n, null, M, g)) : wt(t, n, M, g), n.memoizedState = a.state, d && tf(n, s, true), n.child;
    }
    function qf(t) {
      var n = t.stateNode;
      n.pendingContext ? Jd(t, n.pendingContext, n.pendingContext !== n.context) : n.context && Jd(t, n.context, false), qa(t, n.containerInfo);
    }
    function Jf(t, n, s, a, d) {
      return co(), Wa(d), n.flags |= 256, wt(t, n, s, a), n.child;
    }
    var gu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    };
    function yu(t) {
      return {
        baseLanes: t,
        cachePool: null,
        transitions: null
      };
    }
    function eh(t, n, s) {
      var a = n.pendingProps, d = je.current, g = false, w = (n.flags & 128) !== 0, M;
      if ((M = w) || (M = t !== null && t.memoizedState === null ? false : (d & 2) !== 0), M ? (g = true, n.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), Pe(je, d & 1), t === null) return Ua(n), t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (w = a.children, t = a.fallback, g ? (a = n.mode, g = n.child, w = {
        mode: "hidden",
        children: w
      }, (a & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = w) : g = ol(w, a, 0, null), t = Or(t, a, s, null), g.return = n, t.return = n, g.sibling = t, n.child = g, n.child.memoizedState = yu(s), n.memoizedState = gu, t) : vu(n, w));
      if (d = t.memoizedState, d !== null && (M = d.dehydrated, M !== null)) return dy(t, n, w, a, M, d, s);
      if (g) {
        g = a.fallback, w = n.mode, d = t.child, M = d.sibling;
        var T = {
          mode: "hidden",
          children: a.children
        };
        return (w & 1) === 0 && n.child !== d ? (a = n.child, a.childLanes = 0, a.pendingProps = T, n.deletions = null) : (a = fr(d, T), a.subtreeFlags = d.subtreeFlags & 14680064), M !== null ? g = fr(M, g) : (g = Or(g, w, s, null), g.flags |= 2), g.return = n, a.return = n, a.sibling = g, n.child = a, a = g, g = n.child, w = t.child.memoizedState, w = w === null ? yu(s) : {
          baseLanes: w.baseLanes | s,
          cachePool: null,
          transitions: w.transitions
        }, g.memoizedState = w, g.childLanes = t.childLanes & ~s, n.memoizedState = gu, a;
      }
      return g = t.child, t = g.sibling, a = fr(g, {
        mode: "visible",
        children: a.children
      }), (n.mode & 1) === 0 && (a.lanes = s), a.return = n, a.sibling = null, t !== null && (s = n.deletions, s === null ? (n.deletions = [
        t
      ], n.flags |= 16) : s.push(t)), n.child = a, n.memoizedState = null, a;
    }
    function vu(t, n) {
      return n = ol({
        mode: "visible",
        children: n
      }, t.mode, 0, null), n.return = t, t.child = n;
    }
    function Wi(t, n, s, a) {
      return a !== null && Wa(a), fo(n, t.child, null, s), t = vu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
    }
    function dy(t, n, s, a, d, g, w) {
      if (s) return n.flags & 256 ? (n.flags &= -257, a = fu(Error(o(422))), Wi(t, n, w, a)) : n.memoizedState !== null ? (n.child = t.child, n.flags |= 128, null) : (g = a.fallback, d = n.mode, a = ol({
        mode: "visible",
        children: a.children
      }, d, 0, null), g = Or(g, d, w, null), g.flags |= 2, a.return = n, g.return = n, a.sibling = g, n.child = a, (n.mode & 1) !== 0 && fo(n, t.child, null, w), n.child.memoizedState = yu(w), n.memoizedState = gu, g);
      if ((n.mode & 1) === 0) return Wi(t, n, w, null);
      if (d.data === "$!") {
        if (a = d.nextSibling && d.nextSibling.dataset, a) var M = a.dgst;
        return a = M, g = Error(o(419)), a = fu(g, a, void 0), Wi(t, n, w, a);
      }
      if (M = (w & t.childLanes) !== 0, Nt || M) {
        if (a = st, a !== null) {
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
          d = (d & (a.suspendedLanes | w)) !== 0 ? 0 : d, d !== 0 && d !== g.retryLane && (g.retryLane = d, Dn(t, d), cn(a, t, d, -1));
        }
        return Pu(), a = fu(Error(o(421))), Wi(t, n, w, a);
      }
      return d.data === "$?" ? (n.flags |= 128, n.child = t.child, n = Cy.bind(null, t), d._reactRetry = n, null) : (t = g.treeContext, Pt = tr(d.nextSibling), Rt = n, Fe = true, sn = null, t !== null && (Vt[Ut++] = zn, Vt[Ut++] = Ln, Vt[Ut++] = Ir, zn = t.id, Ln = t.overflow, Ir = n), n = vu(n, a.children), n.flags |= 4096, n);
    }
    function th(t, n, s) {
      t.lanes |= n;
      var a = t.alternate;
      a !== null && (a.lanes |= n), Ka(t.return, n, s);
    }
    function wu(t, n, s, a, d) {
      var g = t.memoizedState;
      g === null ? t.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: s,
        tailMode: d
      } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = a, g.tail = s, g.tailMode = d);
    }
    function nh(t, n, s) {
      var a = n.pendingProps, d = a.revealOrder, g = a.tail;
      if (wt(t, n, a.children, s), a = je.current, (a & 2) !== 0) a = a & 1 | 2, n.flags |= 128;
      else {
        if (t !== null && (t.flags & 128) !== 0) e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && th(t, s, n);
          else if (t.tag === 19) th(t, s, n);
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
          for (s = n.child, d = null; s !== null; ) t = s.alternate, t !== null && Oi(t) === null && (d = s), s = s.sibling;
          s = d, s === null ? (d = n.child, n.child = null) : (d = s.sibling, s.sibling = null), wu(n, false, d, s, g);
          break;
        case "backwards":
          for (s = null, d = n.child, n.child = null; d !== null; ) {
            if (t = d.alternate, t !== null && Oi(t) === null) {
              n.child = d;
              break;
            }
            t = d.sibling, d.sibling = s, s = d, d = t;
          }
          wu(n, true, s, null, g);
          break;
        case "together":
          wu(n, false, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
      return n.child;
    }
    function Yi(t, n) {
      (n.mode & 1) === 0 && t !== null && (t.alternate = null, n.alternate = null, n.flags |= 2);
    }
    function Fn(t, n, s) {
      if (t !== null && (n.dependencies = t.dependencies), Pr |= n.lanes, (s & n.childLanes) === 0) return null;
      if (t !== null && n.child !== t.child) throw Error(o(153));
      if (n.child !== null) {
        for (t = n.child, s = fr(t, t.pendingProps), n.child = s, s.return = n; t.sibling !== null; ) t = t.sibling, s = s.sibling = fr(t, t.pendingProps), s.return = n;
        s.sibling = null;
      }
      return n.child;
    }
    function fy(t, n, s) {
      switch (n.tag) {
        case 3:
          qf(n), co();
          break;
        case 5:
          gf(n);
          break;
        case 1:
          _t(n.type) && bi(n);
          break;
        case 4:
          qa(n, n.stateNode.containerInfo);
          break;
        case 10:
          var a = n.type._context, d = n.memoizedProps.value;
          Pe(Pi, a._currentValue), a._currentValue = d;
          break;
        case 13:
          if (a = n.memoizedState, a !== null) return a.dehydrated !== null ? (Pe(je, je.current & 1), n.flags |= 128, null) : (s & n.child.childLanes) !== 0 ? eh(t, n, s) : (Pe(je, je.current & 1), t = Fn(t, n, s), t !== null ? t.sibling : null);
          Pe(je, je.current & 1);
          break;
        case 19:
          if (a = (s & n.childLanes) !== 0, (t.flags & 128) !== 0) {
            if (a) return nh(t, n, s);
            n.flags |= 128;
          }
          if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Pe(je, je.current), a) break;
          return null;
        case 22:
        case 23:
          return n.lanes = 0, Kf(t, n, s);
      }
      return Fn(t, n, s);
    }
    var rh, xu, oh, sh;
    rh = function(t, n) {
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
    }, xu = function() {
    }, oh = function(t, n, s, a) {
      var d = t.memoizedProps;
      if (d !== a) {
        t = n.stateNode, $r(Sn.current);
        var g = null;
        switch (s) {
          case "input":
            d = Qe(t, d), a = Qe(t, a), g = [];
            break;
          case "select":
            d = j({}, d, {
              value: void 0
            }), a = j({}, a, {
              value: void 0
            }), g = [];
            break;
          case "textarea":
            d = pn(t, d), a = pn(t, a), g = [];
            break;
          default:
            typeof d.onClick != "function" && typeof a.onClick == "function" && (t.onclick = _i);
        }
        Et(s, a);
        var w;
        s = null;
        for (W in d) if (!a.hasOwnProperty(W) && d.hasOwnProperty(W) && d[W] != null) if (W === "style") {
          var M = d[W];
          for (w in M) M.hasOwnProperty(w) && (s || (s = {}), s[w] = "");
        } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (l.hasOwnProperty(W) ? g || (g = []) : (g = g || []).push(W, null));
        for (W in a) {
          var T = a[W];
          if (M = d == null ? void 0 : d[W], a.hasOwnProperty(W) && T !== M && (T != null || M != null)) if (W === "style") if (M) {
            for (w in M) !M.hasOwnProperty(w) || T && T.hasOwnProperty(w) || (s || (s = {}), s[w] = "");
            for (w in T) T.hasOwnProperty(w) && M[w] !== T[w] && (s || (s = {}), s[w] = T[w]);
          } else s || (g || (g = []), g.push(W, s)), s = T;
          else W === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, M = M ? M.__html : void 0, T != null && M !== T && (g = g || []).push(W, T)) : W === "children" ? typeof T != "string" && typeof T != "number" || (g = g || []).push(W, "" + T) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (l.hasOwnProperty(W) ? (T != null && W === "onScroll" && Le("scroll", t), g || M === T || (g = [])) : (g = g || []).push(W, T));
        }
        s && (g = g || []).push("style", s);
        var W = g;
        (n.updateQueue = W) && (n.flags |= 4);
      }
    }, sh = function(t, n, s, a) {
      s !== a && (n.flags |= 4);
    };
    function ps(t, n) {
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
      if (n) for (var d = t.child; d !== null; ) s |= d.lanes | d.childLanes, a |= d.subtreeFlags & 14680064, a |= d.flags & 14680064, d.return = t, d = d.sibling;
      else for (d = t.child; d !== null; ) s |= d.lanes | d.childLanes, a |= d.subtreeFlags, a |= d.flags, d.return = t, d = d.sibling;
      return t.subtreeFlags |= a, t.childLanes = s, n;
    }
    function hy(t, n, s) {
      var a = n.pendingProps;
      switch (Ha(n), n.tag) {
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
          return _t(n.type) && Mi(), pt(n), null;
        case 3:
          return a = n.stateNode, mo(), De(Ct), De(ft), tu(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && ($i(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, sn !== null && (Au(sn), sn = null))), xu(t, n), pt(n), null;
        case 5:
          Ja(n);
          var d = $r(us.current);
          if (s = n.type, t !== null && n.stateNode != null) oh(t, n, s, a, d), t.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
          else {
            if (!a) {
              if (n.stateNode === null) throw Error(o(166));
              return pt(n), null;
            }
            if (t = $r(Sn.current), $i(n)) {
              a = n.stateNode, s = n.type;
              var g = n.memoizedProps;
              switch (a[xn] = n, a[os] = g, t = (n.mode & 1) !== 0, s) {
                case "dialog":
                  Le("cancel", a), Le("close", a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", a);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < ts.length; d++) Le(ts[d], a);
                  break;
                case "source":
                  Le("error", a);
                  break;
                case "img":
                case "image":
                case "link":
                  Le("error", a), Le("load", a);
                  break;
                case "details":
                  Le("toggle", a);
                  break;
                case "input":
                  Oe(a, g), Le("invalid", a);
                  break;
                case "select":
                  a._wrapperState = {
                    wasMultiple: !!g.multiple
                  }, Le("invalid", a);
                  break;
                case "textarea":
                  Mn(a, g), Le("invalid", a);
              }
              Et(s, g), d = null;
              for (var w in g) if (g.hasOwnProperty(w)) {
                var M = g[w];
                w === "children" ? typeof M == "string" ? a.textContent !== M && (g.suppressHydrationWarning !== true && Ci(a.textContent, M, t), d = [
                  "children",
                  M
                ]) : typeof M == "number" && a.textContent !== "" + M && (g.suppressHydrationWarning !== true && Ci(a.textContent, M, t), d = [
                  "children",
                  "" + M
                ]) : l.hasOwnProperty(w) && M != null && w === "onScroll" && Le("scroll", a);
              }
              switch (s) {
                case "input":
                  Ve(a), ye(a, g, true);
                  break;
                case "textarea":
                  Ve(a), bn(a);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof g.onClick == "function" && (a.onclick = _i);
              }
              a = d, n.updateQueue = a, a !== null && (n.flags |= 4);
            } else {
              w = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = mn(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = w.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof a.is == "string" ? t = w.createElement(s, {
                is: a.is
              }) : (t = w.createElement(s), s === "select" && (w = t, a.multiple ? w.multiple = true : a.size && (w.size = a.size))) : t = w.createElementNS(t, s), t[xn] = n, t[os] = a, rh(t, n, false, false), n.stateNode = t;
              e: {
                switch (w = nn(s, a), s) {
                  case "dialog":
                    Le("cancel", t), Le("close", t), d = a;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Le("load", t), d = a;
                    break;
                  case "video":
                  case "audio":
                    for (d = 0; d < ts.length; d++) Le(ts[d], t);
                    d = a;
                    break;
                  case "source":
                    Le("error", t), d = a;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Le("error", t), Le("load", t), d = a;
                    break;
                  case "details":
                    Le("toggle", t), d = a;
                    break;
                  case "input":
                    Oe(t, a), d = Qe(t, a), Le("invalid", t);
                    break;
                  case "option":
                    d = a;
                    break;
                  case "select":
                    t._wrapperState = {
                      wasMultiple: !!a.multiple
                    }, d = j({}, a, {
                      value: void 0
                    }), Le("invalid", t);
                    break;
                  case "textarea":
                    Mn(t, a), d = pn(t, a), Le("invalid", t);
                    break;
                  default:
                    d = a;
                }
                Et(s, d), M = d;
                for (g in M) if (M.hasOwnProperty(g)) {
                  var T = M[g];
                  g === "style" ? yn(t, T) : g === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && In(t, T)) : g === "children" ? typeof T == "string" ? (s !== "textarea" || T !== "") && tn(t, T) : typeof T == "number" && tn(t, "" + T) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (l.hasOwnProperty(g) ? T != null && g === "onScroll" && Le("scroll", t) : T != null && P(t, g, T, w));
                }
                switch (s) {
                  case "input":
                    Ve(t), ye(t, a, false);
                    break;
                  case "textarea":
                    Ve(t), bn(t);
                    break;
                  case "option":
                    a.value != null && t.setAttribute("value", "" + me(a.value));
                    break;
                  case "select":
                    t.multiple = !!a.multiple, g = a.value, g != null ? Ft(t, !!a.multiple, g, false) : a.defaultValue != null && Ft(t, !!a.multiple, a.defaultValue, true);
                    break;
                  default:
                    typeof d.onClick == "function" && (t.onclick = _i);
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
          if (t && n.stateNode != null) sh(t, n, t.memoizedProps, a);
          else {
            if (typeof a != "string" && n.stateNode === null) throw Error(o(166));
            if (s = $r(us.current), $r(Sn.current), $i(n)) {
              if (a = n.stateNode, s = n.memoizedProps, a[xn] = n, (g = a.nodeValue !== s) && (t = Rt, t !== null)) switch (t.tag) {
                case 3:
                  Ci(a.nodeValue, s, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== true && Ci(a.nodeValue, s, (t.mode & 1) !== 0);
              }
              g && (n.flags |= 4);
            } else a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a), a[xn] = n, n.stateNode = a;
          }
          return pt(n), null;
        case 13:
          if (De(je), a = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (Fe && Pt !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) af(), co(), n.flags |= 98560, g = false;
            else if (g = $i(n), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!g) throw Error(o(318));
                if (g = n.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(o(317));
                g[xn] = n;
              } else co(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              pt(n), g = false;
            } else sn !== null && (Au(sn), sn = null), g = true;
            if (!g) return n.flags & 65536 ? n : null;
          }
          return (n.flags & 128) !== 0 ? (n.lanes = s, n) : (a = a !== null, a !== (t !== null && t.memoizedState !== null) && a && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (t === null || (je.current & 1) !== 0 ? et === 0 && (et = 3) : Pu())), n.updateQueue !== null && (n.flags |= 4), pt(n), null);
        case 4:
          return mo(), xu(t, n), t === null && ns(n.stateNode.containerInfo), pt(n), null;
        case 10:
          return Xa(n.type._context), pt(n), null;
        case 17:
          return _t(n.type) && Mi(), pt(n), null;
        case 19:
          if (De(je), g = n.memoizedState, g === null) return pt(n), null;
          if (a = (n.flags & 128) !== 0, w = g.rendering, w === null) if (a) ps(g, false);
          else {
            if (et !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
              if (w = Oi(t), w !== null) {
                for (n.flags |= 128, ps(g, false), a = w.updateQueue, a !== null && (n.updateQueue = a, n.flags |= 4), n.subtreeFlags = 0, a = s, s = n.child; s !== null; ) g = s, t = a, g.flags &= 14680066, w = g.alternate, w === null ? (g.childLanes = 0, g.lanes = t, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = w.childLanes, g.lanes = w.lanes, g.child = w.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = w.memoizedProps, g.memoizedState = w.memoizedState, g.updateQueue = w.updateQueue, g.type = w.type, t = w.dependencies, g.dependencies = t === null ? null : {
                  lanes: t.lanes,
                  firstContext: t.firstContext
                }), s = s.sibling;
                return Pe(je, je.current & 1 | 2), n.child;
              }
              t = t.sibling;
            }
            g.tail !== null && Be() > wo && (n.flags |= 128, a = true, ps(g, false), n.lanes = 4194304);
          }
          else {
            if (!a) if (t = Oi(w), t !== null) {
              if (n.flags |= 128, a = true, s = t.updateQueue, s !== null && (n.updateQueue = s, n.flags |= 4), ps(g, true), g.tail === null && g.tailMode === "hidden" && !w.alternate && !Fe) return pt(n), null;
            } else 2 * Be() - g.renderingStartTime > wo && s !== 1073741824 && (n.flags |= 128, a = true, ps(g, false), n.lanes = 4194304);
            g.isBackwards ? (w.sibling = n.child, n.child = w) : (s = g.last, s !== null ? s.sibling = w : n.child = w, g.last = w);
          }
          return g.tail !== null ? (n = g.tail, g.rendering = n, g.tail = n.sibling, g.renderingStartTime = Be(), n.sibling = null, s = je.current, Pe(je, a ? s & 1 | 2 : s & 1), n) : (pt(n), null);
        case 22:
        case 23:
          return Ru(), a = n.memoizedState !== null, t !== null && t.memoizedState !== null !== a && (n.flags |= 8192), a && (n.mode & 1) !== 0 ? (zt & 1073741824) !== 0 && (pt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : pt(n), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(o(156, n.tag));
    }
    function py(t, n) {
      switch (Ha(n), n.tag) {
        case 1:
          return _t(n.type) && Mi(), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
        case 3:
          return mo(), De(Ct), De(ft), tu(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
        case 5:
          return Ja(n), null;
        case 13:
          if (De(je), t = n.memoizedState, t !== null && t.dehydrated !== null) {
            if (n.alternate === null) throw Error(o(340));
            co();
          }
          return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
        case 19:
          return De(je), null;
        case 4:
          return mo(), null;
        case 10:
          return Xa(n.type._context), null;
        case 22:
        case 23:
          return Ru(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Gi = false, mt = false, my = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
    function yo(t, n) {
      var s = t.ref;
      if (s !== null) if (typeof s == "function") try {
        s(null);
      } catch (a) {
        Ye(t, n, a);
      }
      else s.current = null;
    }
    function Su(t, n, s) {
      try {
        s();
      } catch (a) {
        Ye(t, n, a);
      }
    }
    var ih = false;
    function gy(t, n) {
      if (Ra = hi, t = Dd(), _a(t)) {
        if ("selectionStart" in t) var s = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else e: {
          s = (s = t.ownerDocument) && s.defaultView || window;
          var a = s.getSelection && s.getSelection();
          if (a && a.rangeCount !== 0) {
            s = a.anchorNode;
            var d = a.anchorOffset, g = a.focusNode;
            a = a.focusOffset;
            try {
              s.nodeType, g.nodeType;
            } catch {
              s = null;
              break e;
            }
            var w = 0, M = -1, T = -1, W = 0, re = 0, se = t, te = null;
            t: for (; ; ) {
              for (var ue; se !== s || d !== 0 && se.nodeType !== 3 || (M = w + d), se !== g || a !== 0 && se.nodeType !== 3 || (T = w + a), se.nodeType === 3 && (w += se.nodeValue.length), (ue = se.firstChild) !== null; ) te = se, se = ue;
              for (; ; ) {
                if (se === t) break t;
                if (te === s && ++W === d && (M = w), te === g && ++re === a && (T = w), (ue = se.nextSibling) !== null) break;
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
      for (Pa = {
        focusedElem: t,
        selectionRange: s
      }, hi = false, ce = n; ce !== null; ) if (n = ce, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, ce = t;
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
                var fe = de.memoizedProps, Xe = de.memoizedState, H = n.stateNode, R = H.getSnapshotBeforeUpdate(n.elementType === n.type ? fe : ln(n.type, fe), Xe);
                H.__reactInternalSnapshotBeforeUpdate = R;
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
        } catch (ie) {
          Ye(n, n.return, ie);
        }
        if (t = n.sibling, t !== null) {
          t.return = n.return, ce = t;
          break;
        }
        ce = n.return;
      }
      return de = ih, ih = false, de;
    }
    function ms(t, n, s) {
      var a = n.updateQueue;
      if (a = a !== null ? a.lastEffect : null, a !== null) {
        var d = a = a.next;
        do {
          if ((d.tag & t) === t) {
            var g = d.destroy;
            d.destroy = void 0, g !== void 0 && Su(n, s, g);
          }
          d = d.next;
        } while (d !== a);
      }
    }
    function Xi(t, n) {
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
    function ku(t) {
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
    function lh(t) {
      var n = t.alternate;
      n !== null && (t.alternate = null, lh(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && (delete n[xn], delete n[os], delete n[Oa], delete n[qg], delete n[Jg])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function ah(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 4;
    }
    function uh(t) {
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ah(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Eu(t, n, s) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, n ? s.nodeType === 8 ? s.parentNode.insertBefore(t, n) : s.insertBefore(t, n) : (s.nodeType === 8 ? (n = s.parentNode, n.insertBefore(t, s)) : (n = s, n.appendChild(t)), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = _i));
      else if (a !== 4 && (t = t.child, t !== null)) for (Eu(t, n, s), t = t.sibling; t !== null; ) Eu(t, n, s), t = t.sibling;
    }
    function Cu(t, n, s) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, n ? s.insertBefore(t, n) : s.appendChild(t);
      else if (a !== 4 && (t = t.child, t !== null)) for (Cu(t, n, s), t = t.sibling; t !== null; ) Cu(t, n, s), t = t.sibling;
    }
    var lt = null, an = false;
    function lr(t, n, s) {
      for (s = s.child; s !== null; ) ch(t, n, s), s = s.sibling;
    }
    function ch(t, n, s) {
      if (Ht && typeof Ht.onCommitFiberUnmount == "function") try {
        Ht.onCommitFiberUnmount(Zr, s);
      } catch {
      }
      switch (s.tag) {
        case 5:
          mt || yo(s, n);
        case 6:
          var a = lt, d = an;
          lt = null, lr(t, n, s), lt = a, an = d, lt !== null && (an ? (t = lt, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : lt.removeChild(s.stateNode));
          break;
        case 18:
          lt !== null && (an ? (t = lt, s = s.stateNode, t.nodeType === 8 ? Da(t.parentNode, s) : t.nodeType === 1 && Da(t, s), Go(t)) : Da(lt, s.stateNode));
          break;
        case 4:
          a = lt, d = an, lt = s.stateNode.containerInfo, an = true, lr(t, n, s), lt = a, an = d;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!mt && (a = s.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
            d = a = a.next;
            do {
              var g = d, w = g.destroy;
              g = g.tag, w !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Su(s, n, w), d = d.next;
            } while (d !== a);
          }
          lr(t, n, s);
          break;
        case 1:
          if (!mt && (yo(s, n), a = s.stateNode, typeof a.componentWillUnmount == "function")) try {
            a.props = s.memoizedProps, a.state = s.memoizedState, a.componentWillUnmount();
          } catch (M) {
            Ye(s, n, M);
          }
          lr(t, n, s);
          break;
        case 21:
          lr(t, n, s);
          break;
        case 22:
          s.mode & 1 ? (mt = (a = mt) || s.memoizedState !== null, lr(t, n, s), mt = a) : lr(t, n, s);
          break;
        default:
          lr(t, n, s);
      }
    }
    function dh(t) {
      var n = t.updateQueue;
      if (n !== null) {
        t.updateQueue = null;
        var s = t.stateNode;
        s === null && (s = t.stateNode = new my()), n.forEach(function(a) {
          var d = _y.bind(null, t, a);
          s.has(a) || (s.add(a), a.then(d, d));
        });
      }
    }
    function un(t, n) {
      var s = n.deletions;
      if (s !== null) for (var a = 0; a < s.length; a++) {
        var d = s[a];
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
          ch(g, w, d), lt = null, an = false;
          var T = d.alternate;
          T !== null && (T.return = null), d.return = null;
        } catch (W) {
          Ye(d, n, W);
        }
      }
      if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) fh(n, t), n = n.sibling;
    }
    function fh(t, n) {
      var s = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (un(n, t), En(t), a & 4) {
            try {
              ms(3, t, t.return), Xi(3, t);
            } catch (fe) {
              Ye(t, t.return, fe);
            }
            try {
              ms(5, t, t.return);
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 1:
          un(n, t), En(t), a & 512 && s !== null && yo(s, s.return);
          break;
        case 5:
          if (un(n, t), En(t), a & 512 && s !== null && yo(s, s.return), t.flags & 32) {
            var d = t.stateNode;
            try {
              tn(d, "");
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          if (a & 4 && (d = t.stateNode, d != null)) {
            var g = t.memoizedProps, w = s !== null ? s.memoizedProps : g, M = t.type, T = t.updateQueue;
            if (t.updateQueue = null, T !== null) try {
              M === "input" && g.type === "radio" && g.name != null && dt(d, g), nn(M, w);
              var W = nn(M, g);
              for (w = 0; w < T.length; w += 2) {
                var re = T[w], se = T[w + 1];
                re === "style" ? yn(d, se) : re === "dangerouslySetInnerHTML" ? In(d, se) : re === "children" ? tn(d, se) : P(d, re, se, W);
              }
              switch (M) {
                case "input":
                  Me(d, g);
                  break;
                case "textarea":
                  Bt(d, g);
                  break;
                case "select":
                  var te = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!g.multiple;
                  var ue = g.value;
                  ue != null ? Ft(d, !!g.multiple, ue, false) : te !== !!g.multiple && (g.defaultValue != null ? Ft(d, !!g.multiple, g.defaultValue, true) : Ft(d, !!g.multiple, g.multiple ? [] : "", false));
              }
              d[os] = g;
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 6:
          if (un(n, t), En(t), a & 4) {
            if (t.stateNode === null) throw Error(o(162));
            d = t.stateNode, g = t.memoizedProps;
            try {
              d.nodeValue = g;
            } catch (fe) {
              Ye(t, t.return, fe);
            }
          }
          break;
        case 3:
          if (un(n, t), En(t), a & 4 && s !== null && s.memoizedState.isDehydrated) try {
            Go(n.containerInfo);
          } catch (fe) {
            Ye(t, t.return, fe);
          }
          break;
        case 4:
          un(n, t), En(t);
          break;
        case 13:
          un(n, t), En(t), d = t.child, d.flags & 8192 && (g = d.memoizedState !== null, d.stateNode.isHidden = g, !g || d.alternate !== null && d.alternate.memoizedState !== null || (Mu = Be())), a & 4 && dh(t);
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
                    ms(4, te, te.return);
                    break;
                  case 1:
                    yo(te, te.return);
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
                    yo(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      mh(se);
                      continue;
                    }
                }
                ue !== null ? (ue.return = te, ce = ue) : mh(se);
              }
              re = re.sibling;
            }
            e: for (re = null, se = t; ; ) {
              if (se.tag === 5) {
                if (re === null) {
                  re = se;
                  try {
                    d = se.stateNode, W ? (g = d.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (M = se.stateNode, T = se.memoizedProps.style, w = T != null && T.hasOwnProperty("display") ? T.display : null, M.style.display = gn("display", w));
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
          un(n, t), En(t), a & 4 && dh(t);
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
              if (ah(s)) {
                var a = s;
                break e;
              }
              s = s.return;
            }
            throw Error(o(160));
          }
          switch (a.tag) {
            case 5:
              var d = a.stateNode;
              a.flags & 32 && (tn(d, ""), a.flags &= -33);
              var g = uh(t);
              Cu(t, g, d);
              break;
            case 3:
            case 4:
              var w = a.stateNode.containerInfo, M = uh(t);
              Eu(t, M, w);
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
    function yy(t, n, s) {
      ce = t, hh(t);
    }
    function hh(t, n, s) {
      for (var a = (t.mode & 1) !== 0; ce !== null; ) {
        var d = ce, g = d.child;
        if (d.tag === 22 && a) {
          var w = d.memoizedState !== null || Gi;
          if (!w) {
            var M = d.alternate, T = M !== null && M.memoizedState !== null || mt;
            M = Gi;
            var W = mt;
            if (Gi = w, (mt = T) && !W) for (ce = d; ce !== null; ) w = ce, T = w.child, w.tag === 22 && w.memoizedState !== null ? gh(d) : T !== null ? (T.return = w, ce = T) : gh(d);
            for (; g !== null; ) ce = g, hh(g), g = g.sibling;
            ce = d, Gi = M, mt = W;
          }
          ph(t);
        } else (d.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = d, ce = g) : ph(t);
      }
    }
    function ph(t) {
      for (; ce !== null; ) {
        var n = ce;
        if ((n.flags & 8772) !== 0) {
          var s = n.alternate;
          try {
            if ((n.flags & 8772) !== 0) switch (n.tag) {
              case 0:
              case 11:
              case 15:
                mt || Xi(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !mt) if (s === null) a.componentDidMount();
                else {
                  var d = n.elementType === n.type ? s.memoizedProps : ln(n.type, s.memoizedProps);
                  a.componentDidUpdate(d, s.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
                var g = n.updateQueue;
                g !== null && mf(n, g, a);
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
                  mf(n, w, s);
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
                      se !== null && Go(se);
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
            mt || n.flags & 512 && ku(n);
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
    function mh(t) {
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
    function gh(t) {
      for (; ce !== null; ) {
        var n = ce;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var s = n.return;
              try {
                Xi(4, n);
              } catch (T) {
                Ye(n, s, T);
              }
              break;
            case 1:
              var a = n.stateNode;
              if (typeof a.componentDidMount == "function") {
                var d = n.return;
                try {
                  a.componentDidMount();
                } catch (T) {
                  Ye(n, d, T);
                }
              }
              var g = n.return;
              try {
                ku(n);
              } catch (T) {
                Ye(n, g, T);
              }
              break;
            case 5:
              var w = n.return;
              try {
                ku(n);
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
    var vy = Math.ceil, Ki = I.ReactCurrentDispatcher, _u = I.ReactCurrentOwner, Gt = I.ReactCurrentBatchConfig, Ne = 0, st = null, Ze = null, at = 0, zt = 0, vo = nr(0), et = 0, gs = null, Pr = 0, Qi = 0, Nu = 0, ys = null, Mt = null, Mu = 0, wo = 1 / 0, Bn = null, Zi = false, bu = null, ar = null, qi = false, ur = null, Ji = 0, vs = 0, Iu = null, el = -1, tl = 0;
    function xt() {
      return (Ne & 6) !== 0 ? Be() : el !== -1 ? el : el = Be();
    }
    function cr(t) {
      return (t.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && at !== 0 ? at & -at : ty.transition !== null ? (tl === 0 && (tl = ad()), tl) : (t = Ae, t !== 0 || (t = window.event, t = t === void 0 ? 16 : yd(t.type)), t);
    }
    function cn(t, n, s, a) {
      if (50 < vs) throw vs = 0, Iu = null, Error(o(185));
      Ho(t, s, a), ((Ne & 2) === 0 || t !== st) && (t === st && ((Ne & 2) === 0 && (Qi |= s), et === 4 && dr(t, at)), bt(t, a), s === 1 && Ne === 0 && (n.mode & 1) === 0 && (wo = Be() + 500, Ii && or()));
    }
    function bt(t, n) {
      var s = t.callbackNode;
      tg(t, n);
      var a = ci(t, t === st ? at : 0);
      if (a === 0) s !== null && ri(s), t.callbackNode = null, t.callbackPriority = 0;
      else if (n = a & -a, t.callbackPriority !== n) {
        if (s != null && ri(s), n === 1) t.tag === 0 ? ey(vh.bind(null, t)) : nf(vh.bind(null, t)), Qg(function() {
          (Ne & 6) === 0 && or();
        }), s = null;
        else {
          switch (ud(a)) {
            case 1:
              s = Fo;
              break;
            case 4:
              s = si;
              break;
            case 16:
              s = Qr;
              break;
            case 536870912:
              s = li;
              break;
            default:
              s = Qr;
          }
          s = Nh(s, yh.bind(null, t));
        }
        t.callbackPriority = n, t.callbackNode = s;
      }
    }
    function yh(t, n) {
      if (el = -1, tl = 0, (Ne & 6) !== 0) throw Error(o(327));
      var s = t.callbackNode;
      if (xo() && t.callbackNode !== s) return null;
      var a = ci(t, t === st ? at : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & t.expiredLanes) !== 0 || n) n = nl(t, a);
      else {
        n = a;
        var d = Ne;
        Ne |= 2;
        var g = xh();
        (st !== t || at !== n) && (Bn = null, wo = Be() + 500, Lr(t, n));
        do
          try {
            Sy();
            break;
          } catch (M) {
            wh(t, M);
          }
        while (true);
        Ga(), Ki.current = g, Ne = d, Ze !== null ? n = 0 : (st = null, at = 0, n = et);
      }
      if (n !== 0) {
        if (n === 2 && (d = ua(t), d !== 0 && (a = d, n = Tu(t, d))), n === 1) throw s = gs, Lr(t, 0), dr(t, a), bt(t, Be()), s;
        if (n === 6) dr(t, a);
        else {
          if (d = t.current.alternate, (a & 30) === 0 && !wy(d) && (n = nl(t, a), n === 2 && (g = ua(t), g !== 0 && (a = g, n = Tu(t, g))), n === 1)) throw s = gs, Lr(t, 0), dr(t, a), bt(t, Be()), s;
          switch (t.finishedWork = d, t.finishedLanes = a, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Dr(t, Mt, Bn);
              break;
            case 3:
              if (dr(t, a), (a & 130023424) === a && (n = Mu + 500 - Be(), 10 < n)) {
                if (ci(t, 0) !== 0) break;
                if (d = t.suspendedLanes, (d & a) !== a) {
                  xt(), t.pingedLanes |= t.suspendedLanes & d;
                  break;
                }
                t.timeoutHandle = La(Dr.bind(null, t, Mt, Bn), n);
                break;
              }
              Dr(t, Mt, Bn);
              break;
            case 4:
              if (dr(t, a), (a & 4194240) === a) break;
              for (n = t.eventTimes, d = -1; 0 < a; ) {
                var w = 31 - rn(a);
                g = 1 << w, w = n[w], w > d && (d = w), a &= ~g;
              }
              if (a = d, a = Be() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * vy(a / 1960)) - a, 10 < a) {
                t.timeoutHandle = La(Dr.bind(null, t, Mt, Bn), a);
                break;
              }
              Dr(t, Mt, Bn);
              break;
            case 5:
              Dr(t, Mt, Bn);
              break;
            default:
              throw Error(o(329));
          }
        }
      }
      return bt(t, Be()), t.callbackNode === s ? yh.bind(null, t) : null;
    }
    function Tu(t, n) {
      var s = ys;
      return t.current.memoizedState.isDehydrated && (Lr(t, n).flags |= 256), t = nl(t, n), t !== 2 && (n = Mt, Mt = s, n !== null && Au(n)), t;
    }
    function Au(t) {
      Mt === null ? Mt = t : Mt.push.apply(Mt, t);
    }
    function wy(t) {
      for (var n = t; ; ) {
        if (n.flags & 16384) {
          var s = n.updateQueue;
          if (s !== null && (s = s.stores, s !== null)) for (var a = 0; a < s.length; a++) {
            var d = s[a], g = d.getSnapshot;
            d = d.value;
            try {
              if (!on(g(), d)) return false;
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
    function dr(t, n) {
      for (n &= ~Nu, n &= ~Qi, t.suspendedLanes |= n, t.pingedLanes &= ~n, t = t.expirationTimes; 0 < n; ) {
        var s = 31 - rn(n), a = 1 << s;
        t[s] = -1, n &= ~a;
      }
    }
    function vh(t) {
      if ((Ne & 6) !== 0) throw Error(o(327));
      xo();
      var n = ci(t, 0);
      if ((n & 1) === 0) return bt(t, Be()), null;
      var s = nl(t, n);
      if (t.tag !== 0 && s === 2) {
        var a = ua(t);
        a !== 0 && (n = a, s = Tu(t, a));
      }
      if (s === 1) throw s = gs, Lr(t, 0), dr(t, n), bt(t, Be()), s;
      if (s === 6) throw Error(o(345));
      return t.finishedWork = t.current.alternate, t.finishedLanes = n, Dr(t, Mt, Bn), bt(t, Be()), null;
    }
    function $u(t, n) {
      var s = Ne;
      Ne |= 1;
      try {
        return t(n);
      } finally {
        Ne = s, Ne === 0 && (wo = Be() + 500, Ii && or());
      }
    }
    function zr(t) {
      ur !== null && ur.tag === 0 && (Ne & 6) === 0 && xo();
      var n = Ne;
      Ne |= 1;
      var s = Gt.transition, a = Ae;
      try {
        if (Gt.transition = null, Ae = 1, t) return t();
      } finally {
        Ae = a, Gt.transition = s, Ne = n, (Ne & 6) === 0 && or();
      }
    }
    function Ru() {
      zt = vo.current, De(vo);
    }
    function Lr(t, n) {
      t.finishedWork = null, t.finishedLanes = 0;
      var s = t.timeoutHandle;
      if (s !== -1 && (t.timeoutHandle = -1, Kg(s)), Ze !== null) for (s = Ze.return; s !== null; ) {
        var a = s;
        switch (Ha(a), a.tag) {
          case 1:
            a = a.type.childContextTypes, a != null && Mi();
            break;
          case 3:
            mo(), De(Ct), De(ft), tu();
            break;
          case 5:
            Ja(a);
            break;
          case 4:
            mo();
            break;
          case 13:
            De(je);
            break;
          case 19:
            De(je);
            break;
          case 10:
            Xa(a.type._context);
            break;
          case 22:
          case 23:
            Ru();
        }
        s = s.return;
      }
      if (st = t, Ze = t = fr(t.current, null), at = zt = n, et = 0, gs = null, Nu = Qi = Pr = 0, Mt = ys = null, Ar !== null) {
        for (n = 0; n < Ar.length; n++) if (s = Ar[n], a = s.interleaved, a !== null) {
          s.interleaved = null;
          var d = a.next, g = s.pending;
          if (g !== null) {
            var w = g.next;
            g.next = d, a.next = w;
          }
          s.pending = a;
        }
        Ar = null;
      }
      return t;
    }
    function wh(t, n) {
      do {
        var s = Ze;
        try {
          if (Ga(), Fi.current = Vi, Bi) {
            for (var a = He.memoizedState; a !== null; ) {
              var d = a.queue;
              d !== null && (d.pending = null), a = a.next;
            }
            Bi = false;
          }
          if (Rr = 0, ot = Je = He = null, cs = false, ds = 0, _u.current = null, s === null || s.return === null) {
            et = 1, gs = n, Ze = null;
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
              var ue = Uf(w);
              if (ue !== null) {
                ue.flags &= -257, Wf(ue, w, M, g, n), ue.mode & 1 && Vf(g, W, n), n = ue, T = W;
                var de = n.updateQueue;
                if (de === null) {
                  var fe = /* @__PURE__ */ new Set();
                  fe.add(T), n.updateQueue = fe;
                } else de.add(T);
                break e;
              } else {
                if ((n & 1) === 0) {
                  Vf(g, W, n), Pu();
                  break e;
                }
                T = Error(o(426));
              }
            } else if (Fe && M.mode & 1) {
              var Xe = Uf(w);
              if (Xe !== null) {
                (Xe.flags & 65536) === 0 && (Xe.flags |= 256), Wf(Xe, w, M, g, n), Wa(go(T, M));
                break e;
              }
            }
            g = T = go(T, M), et !== 4 && (et = 2), ys === null ? ys = [
              g
            ] : ys.push(g), g = w;
            do {
              switch (g.tag) {
                case 3:
                  g.flags |= 65536, n &= -n, g.lanes |= n;
                  var H = jf(g, T, n);
                  pf(g, H);
                  break e;
                case 1:
                  M = T;
                  var R = g.type, U = g.stateNode;
                  if ((g.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (ar === null || !ar.has(U)))) {
                    g.flags |= 65536, n &= -n, g.lanes |= n;
                    var ie = Hf(g, M, n);
                    pf(g, ie);
                    break e;
                  }
              }
              g = g.return;
            } while (g !== null);
          }
          kh(s);
        } catch (pe) {
          n = pe, Ze === s && s !== null && (Ze = s = s.return);
          continue;
        }
        break;
      } while (true);
    }
    function xh() {
      var t = Ki.current;
      return Ki.current = Vi, t === null ? Vi : t;
    }
    function Pu() {
      (et === 0 || et === 3 || et === 2) && (et = 4), st === null || (Pr & 268435455) === 0 && (Qi & 268435455) === 0 || dr(st, at);
    }
    function nl(t, n) {
      var s = Ne;
      Ne |= 2;
      var a = xh();
      (st !== t || at !== n) && (Bn = null, Lr(t, n));
      do
        try {
          xy();
          break;
        } catch (d) {
          wh(t, d);
        }
      while (true);
      if (Ga(), Ne = s, Ki.current = a, Ze !== null) throw Error(o(261));
      return st = null, at = 0, et;
    }
    function xy() {
      for (; Ze !== null; ) Sh(Ze);
    }
    function Sy() {
      for (; Ze !== null && !oi(); ) Sh(Ze);
    }
    function Sh(t) {
      var n = _h(t.alternate, t, zt);
      t.memoizedProps = t.pendingProps, n === null ? kh(t) : Ze = n, _u.current = null;
    }
    function kh(t) {
      var n = t;
      do {
        var s = n.alternate;
        if (t = n.return, (n.flags & 32768) === 0) {
          if (s = hy(s, n, zt), s !== null) {
            Ze = s;
            return;
          }
        } else {
          if (s = py(s, n), s !== null) {
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
    function Dr(t, n, s) {
      var a = Ae, d = Gt.transition;
      try {
        Gt.transition = null, Ae = 1, ky(t, n, s, a);
      } finally {
        Gt.transition = d, Ae = a;
      }
      return null;
    }
    function ky(t, n, s, a) {
      do
        xo();
      while (ur !== null);
      if ((Ne & 6) !== 0) throw Error(o(327));
      s = t.finishedWork;
      var d = t.finishedLanes;
      if (s === null) return null;
      if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(o(177));
      t.callbackNode = null, t.callbackPriority = 0;
      var g = s.lanes | s.childLanes;
      if (ng(t, g), t === st && (Ze = st = null, at = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || qi || (qi = true, Nh(Qr, function() {
        return xo(), null;
      })), g = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || g) {
        g = Gt.transition, Gt.transition = null;
        var w = Ae;
        Ae = 1;
        var M = Ne;
        Ne |= 4, _u.current = null, gy(t, s), fh(s, t), Hg(Pa), hi = !!Ra, Pa = Ra = null, t.current = s, yy(s), la(), Ne = M, Ae = w, Gt.transition = g;
      } else t.current = s;
      if (qi && (qi = false, ur = t, Ji = d), g = t.pendingLanes, g === 0 && (ar = null), Bo(s.stateNode), bt(t, Be()), n !== null) for (a = t.onRecoverableError, s = 0; s < n.length; s++) d = n[s], a(d.value, {
        componentStack: d.stack,
        digest: d.digest
      });
      if (Zi) throw Zi = false, t = bu, bu = null, t;
      return (Ji & 1) !== 0 && t.tag !== 0 && xo(), g = t.pendingLanes, (g & 1) !== 0 ? t === Iu ? vs++ : (vs = 0, Iu = t) : vs = 0, or(), null;
    }
    function xo() {
      if (ur !== null) {
        var t = ud(Ji), n = Gt.transition, s = Ae;
        try {
          if (Gt.transition = null, Ae = 16 > t ? 16 : t, ur === null) var a = false;
          else {
            if (t = ur, ur = null, Ji = 0, (Ne & 6) !== 0) throw Error(o(331));
            var d = Ne;
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
                          ms(8, re, g);
                      }
                      var se = re.child;
                      if (se !== null) se.return = re, ce = se;
                      else for (; ce !== null; ) {
                        re = ce;
                        var te = re.sibling, ue = re.return;
                        if (lh(re), re === W) {
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
                    ms(9, g, g.return);
                }
                var H = g.sibling;
                if (H !== null) {
                  H.return = g.return, ce = H;
                  break e;
                }
                ce = g.return;
              }
            }
            var R = t.current;
            for (ce = R; ce !== null; ) {
              w = ce;
              var U = w.child;
              if ((w.subtreeFlags & 2064) !== 0 && U !== null) U.return = w, ce = U;
              else e: for (w = R; ce !== null; ) {
                if (M = ce, (M.flags & 2048) !== 0) try {
                  switch (M.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(9, M);
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
            if (Ne = d, or(), Ht && typeof Ht.onPostCommitFiberRoot == "function") try {
              Ht.onPostCommitFiberRoot(Zr, t);
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
    function Eh(t, n, s) {
      n = go(s, n), n = jf(t, n, 1), t = ir(t, n, 1), n = xt(), t !== null && (Ho(t, 1, n), bt(t, n));
    }
    function Ye(t, n, s) {
      if (t.tag === 3) Eh(t, t, s);
      else for (; n !== null; ) {
        if (n.tag === 3) {
          Eh(n, t, s);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ar === null || !ar.has(a))) {
            t = go(s, t), t = Hf(n, t, 1), n = ir(n, t, 1), t = xt(), n !== null && (Ho(n, 1, t), bt(n, t));
            break;
          }
        }
        n = n.return;
      }
    }
    function Ey(t, n, s) {
      var a = t.pingCache;
      a !== null && a.delete(n), n = xt(), t.pingedLanes |= t.suspendedLanes & s, st === t && (at & s) === s && (et === 4 || et === 3 && (at & 130023424) === at && 500 > Be() - Mu ? Lr(t, 0) : Nu |= s), bt(t, n);
    }
    function Ch(t, n) {
      n === 0 && ((t.mode & 1) === 0 ? n = 1 : (n = ui, ui <<= 1, (ui & 130023424) === 0 && (ui = 4194304)));
      var s = xt();
      t = Dn(t, n), t !== null && (Ho(t, n, s), bt(t, s));
    }
    function Cy(t) {
      var n = t.memoizedState, s = 0;
      n !== null && (s = n.retryLane), Ch(t, s);
    }
    function _y(t, n) {
      var s = 0;
      switch (t.tag) {
        case 13:
          var a = t.stateNode, d = t.memoizedState;
          d !== null && (s = d.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        default:
          throw Error(o(314));
      }
      a !== null && a.delete(n), Ch(t, s);
    }
    var _h;
    _h = function(t, n, s) {
      if (t !== null) if (t.memoizedProps !== n.pendingProps || Ct.current) Nt = true;
      else {
        if ((t.lanes & s) === 0 && (n.flags & 128) === 0) return Nt = false, fy(t, n, s);
        Nt = (t.flags & 131072) !== 0;
      }
      else Nt = false, Fe && (n.flags & 1048576) !== 0 && rf(n, Ai, n.index);
      switch (n.lanes = 0, n.tag) {
        case 2:
          var a = n.type;
          Yi(t, n), t = n.pendingProps;
          var d = lo(n, ft.current);
          po(n, s), d = ou(null, n, a, t, d, s);
          var g = su();
          return n.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, _t(a) ? (g = true, bi(n)) : g = false, n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Za(n), d.updater = Ui, n.stateNode = d, d._reactInternals = n, du(n, a, t, s), n = mu(null, n, a, true, g, s)) : (n.tag = 0, Fe && g && ja(n), wt(null, n, d, s), n = n.child), n;
        case 16:
          a = n.elementType;
          e: {
            switch (Yi(t, n), t = n.pendingProps, d = a._init, a = d(a._payload), n.type = a, d = n.tag = My(a), t = ln(a, t), d) {
              case 0:
                n = pu(null, n, a, t, s);
                break e;
              case 1:
                n = Zf(null, n, a, t, s);
                break e;
              case 11:
                n = Yf(null, n, a, t, s);
                break e;
              case 14:
                n = Gf(null, n, a, ln(a.type, t), s);
                break e;
            }
            throw Error(o(306, a, ""));
          }
          return n;
        case 0:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : ln(a, d), pu(t, n, a, d, s);
        case 1:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : ln(a, d), Zf(t, n, a, d, s);
        case 3:
          e: {
            if (qf(n), t === null) throw Error(o(387));
            a = n.pendingProps, g = n.memoizedState, d = g.element, hf(t, n), Di(n, a, null, s);
            var w = n.memoizedState;
            if (a = w.element, g.isDehydrated) if (g = {
              element: a,
              isDehydrated: false,
              cache: w.cache,
              pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
              transitions: w.transitions
            }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
              d = go(Error(o(423)), n), n = Jf(t, n, a, s, d);
              break e;
            } else if (a !== d) {
              d = go(Error(o(424)), n), n = Jf(t, n, a, s, d);
              break e;
            } else for (Pt = tr(n.stateNode.containerInfo.firstChild), Rt = n, Fe = true, sn = null, s = df(n, null, a, s), n.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
            else {
              if (co(), a === d) {
                n = Fn(t, n, s);
                break e;
              }
              wt(t, n, a, s);
            }
            n = n.child;
          }
          return n;
        case 5:
          return gf(n), t === null && Ua(n), a = n.type, d = n.pendingProps, g = t !== null ? t.memoizedProps : null, w = d.children, za(a, d) ? w = null : g !== null && za(a, g) && (n.flags |= 32), Qf(t, n), wt(t, n, w, s), n.child;
        case 6:
          return t === null && Ua(n), null;
        case 13:
          return eh(t, n, s);
        case 4:
          return qa(n, n.stateNode.containerInfo), a = n.pendingProps, t === null ? n.child = fo(n, null, a, s) : wt(t, n, a, s), n.child;
        case 11:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : ln(a, d), Yf(t, n, a, d, s);
        case 7:
          return wt(t, n, n.pendingProps, s), n.child;
        case 8:
          return wt(t, n, n.pendingProps.children, s), n.child;
        case 12:
          return wt(t, n, n.pendingProps.children, s), n.child;
        case 10:
          e: {
            if (a = n.type._context, d = n.pendingProps, g = n.memoizedProps, w = d.value, Pe(Pi, a._currentValue), a._currentValue = w, g !== null) if (on(g.value, w)) {
              if (g.children === d.children && !Ct.current) {
                n = Fn(t, n, s);
                break e;
              }
            } else for (g = n.child, g !== null && (g.return = n); g !== null; ) {
              var M = g.dependencies;
              if (M !== null) {
                w = g.child;
                for (var T = M.firstContext; T !== null; ) {
                  if (T.context === a) {
                    if (g.tag === 1) {
                      T = On(-1, s & -s), T.tag = 2;
                      var W = g.updateQueue;
                      if (W !== null) {
                        W = W.shared;
                        var re = W.pending;
                        re === null ? T.next = T : (T.next = re.next, re.next = T), W.pending = T;
                      }
                    }
                    g.lanes |= s, T = g.alternate, T !== null && (T.lanes |= s), Ka(g.return, s, n), M.lanes |= s;
                    break;
                  }
                  T = T.next;
                }
              } else if (g.tag === 10) w = g.type === n.type ? null : g.child;
              else if (g.tag === 18) {
                if (w = g.return, w === null) throw Error(o(341));
                w.lanes |= s, M = w.alternate, M !== null && (M.lanes |= s), Ka(w, s, n), w = g.sibling;
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
            wt(t, n, d.children, s), n = n.child;
          }
          return n;
        case 9:
          return d = n.type, a = n.pendingProps.children, po(n, s), d = Wt(d), a = a(d), n.flags |= 1, wt(t, n, a, s), n.child;
        case 14:
          return a = n.type, d = ln(a, n.pendingProps), d = ln(a.type, d), Gf(t, n, a, d, s);
        case 15:
          return Xf(t, n, n.type, n.pendingProps, s);
        case 17:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : ln(a, d), Yi(t, n), n.tag = 1, _t(a) ? (t = true, bi(n)) : t = false, po(n, s), Ff(n, a, d), du(n, a, d, s), mu(null, n, a, true, t, s);
        case 19:
          return nh(t, n, s);
        case 22:
          return Kf(t, n, s);
      }
      throw Error(o(156, n.tag));
    };
    function Nh(t, n) {
      return ni(t, n);
    }
    function Ny(t, n, s, a) {
      this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Xt(t, n, s, a) {
      return new Ny(t, n, s, a);
    }
    function zu(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function My(t) {
      if (typeof t == "function") return zu(t) ? 1 : 0;
      if (t != null) {
        if (t = t.$$typeof, t === Y) return 11;
        if (t === V) return 14;
      }
      return 2;
    }
    function fr(t, n) {
      var s = t.alternate;
      return s === null ? (s = Xt(t.tag, n, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = n, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, n = t.dependencies, s.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s;
    }
    function rl(t, n, s, a, d, g) {
      var w = 2;
      if (a = t, typeof t == "function") zu(t) && (w = 1);
      else if (typeof t == "string") w = 5;
      else e: switch (t) {
        case Q:
          return Or(s.children, d, g, n);
        case q:
          w = 8, d |= 8;
          break;
        case G:
          return t = Xt(12, s, n, d | 2), t.elementType = G, t.lanes = g, t;
        case Z:
          return t = Xt(13, s, n, d), t.elementType = Z, t.lanes = g, t;
        case _:
          return t = Xt(19, s, n, d), t.elementType = _, t.lanes = g, t;
        case K:
          return ol(s, d, g, n);
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case J:
              w = 10;
              break e;
            case ee:
              w = 9;
              break e;
            case Y:
              w = 11;
              break e;
            case V:
              w = 14;
              break e;
            case O:
              w = 16, a = null;
              break e;
          }
          throw Error(o(130, t == null ? t : typeof t, ""));
      }
      return n = Xt(w, s, n, d), n.elementType = t, n.type = a, n.lanes = g, n;
    }
    function Or(t, n, s, a) {
      return t = Xt(7, t, a, n), t.lanes = s, t;
    }
    function ol(t, n, s, a) {
      return t = Xt(22, t, a, n), t.elementType = K, t.lanes = s, t.stateNode = {
        isHidden: false
      }, t;
    }
    function Lu(t, n, s) {
      return t = Xt(6, t, null, n), t.lanes = s, t;
    }
    function Du(t, n, s) {
      return n = Xt(4, t.children !== null ? t.children : [], t.key, n), n.lanes = s, n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, n;
    }
    function by(t, n, s, a, d) {
      this.tag = n, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ca(0), this.expirationTimes = ca(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ca(0), this.identifierPrefix = a, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
    }
    function Ou(t, n, s, a, d, g, w, M, T) {
      return t = new by(t, n, s, M, T), n === 1 ? (n = 1, g === true && (n |= 8)) : n = 0, g = Xt(3, null, null, n), t.current = g, g.stateNode = t, g.memoizedState = {
        element: a,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, Za(g), t;
    }
    function Iy(t, n, s) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: z,
        key: a == null ? null : "" + a,
        children: t,
        containerInfo: n,
        implementation: s
      };
    }
    function Mh(t) {
      if (!t) return rr;
      t = t._reactInternals;
      e: {
        if ($n(t) !== t || t.tag !== 1) throw Error(o(170));
        var n = t;
        do {
          switch (n.tag) {
            case 3:
              n = n.stateNode.context;
              break e;
            case 1:
              if (_t(n.type)) {
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
        if (_t(s)) return ef(t, s, n);
      }
      return n;
    }
    function bh(t, n, s, a, d, g, w, M, T) {
      return t = Ou(s, a, true, t, d, g, w, M, T), t.context = Mh(null), s = t.current, a = xt(), d = cr(s), g = On(a, d), g.callback = n ?? null, ir(s, g, d), t.current.lanes = d, Ho(t, d, a), bt(t, a), t;
    }
    function sl(t, n, s, a) {
      var d = n.current, g = xt(), w = cr(d);
      return s = Mh(s), n.context === null ? n.context = s : n.pendingContext = s, n = On(g, w), n.payload = {
        element: t
      }, a = a === void 0 ? null : a, a !== null && (n.callback = a), t = ir(d, n, w), t !== null && (cn(t, d, w, g), Li(t, d, w)), w;
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
    function Ih(t, n) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var s = t.retryLane;
        t.retryLane = s !== 0 && s < n ? s : n;
      }
    }
    function Fu(t, n) {
      Ih(t, n), (t = t.alternate) && Ih(t, n);
    }
    function Ty() {
      return null;
    }
    var Th = typeof reportError == "function" ? reportError : function(t) {
      console.error(t);
    };
    function Bu(t) {
      this._internalRoot = t;
    }
    ll.prototype.render = Bu.prototype.render = function(t) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      sl(t, n, null, null);
    }, ll.prototype.unmount = Bu.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var n = t.containerInfo;
        zr(function() {
          sl(null, t, null, null);
        }), n[Rn] = null;
      }
    };
    function ll(t) {
      this._internalRoot = t;
    }
    ll.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var n = fd();
        t = {
          blockedOn: null,
          target: t,
          priority: n
        };
        for (var s = 0; s < qn.length && n !== 0 && n < qn[s].priority; s++) ;
        qn.splice(s, 0, t), s === 0 && md(t);
      }
    };
    function ju(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function al(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
    }
    function Ah() {
    }
    function Ay(t, n, s, a, d) {
      if (d) {
        if (typeof a == "function") {
          var g = a;
          a = function() {
            var W = il(w);
            g.call(W);
          };
        }
        var w = bh(n, a, t, 0, null, false, false, "", Ah);
        return t._reactRootContainer = w, t[Rn] = w.current, ns(t.nodeType === 8 ? t.parentNode : t), zr(), w;
      }
      for (; d = t.lastChild; ) t.removeChild(d);
      if (typeof a == "function") {
        var M = a;
        a = function() {
          var W = il(T);
          M.call(W);
        };
      }
      var T = Ou(t, 0, false, null, null, false, false, "", Ah);
      return t._reactRootContainer = T, t[Rn] = T.current, ns(t.nodeType === 8 ? t.parentNode : t), zr(function() {
        sl(n, T, s, a);
      }), T;
    }
    function ul(t, n, s, a, d) {
      var g = s._reactRootContainer;
      if (g) {
        var w = g;
        if (typeof d == "function") {
          var M = d;
          d = function() {
            var T = il(w);
            M.call(T);
          };
        }
        sl(n, w, t, d);
      } else w = Ay(s, n, t, d, a);
      return il(w);
    }
    cd = function(t) {
      switch (t.tag) {
        case 3:
          var n = t.stateNode;
          if (n.current.memoizedState.isDehydrated) {
            var s = jo(n.pendingLanes);
            s !== 0 && (da(n, s | 1), bt(n, Be()), (Ne & 6) === 0 && (wo = Be() + 500, or()));
          }
          break;
        case 13:
          zr(function() {
            var a = Dn(t, 1);
            if (a !== null) {
              var d = xt();
              cn(a, t, 1, d);
            }
          }), Fu(t, 1);
      }
    }, fa = function(t) {
      if (t.tag === 13) {
        var n = Dn(t, 134217728);
        if (n !== null) {
          var s = xt();
          cn(n, t, 134217728, s);
        }
        Fu(t, 134217728);
      }
    }, dd = function(t) {
      if (t.tag === 13) {
        var n = cr(t), s = Dn(t, n);
        if (s !== null) {
          var a = xt();
          cn(s, t, n, a);
        }
        Fu(t, n);
      }
    }, fd = function() {
      return Ae;
    }, hd = function(t, n) {
      var s = Ae;
      try {
        return Ae = t, n();
      } finally {
        Ae = s;
      }
    }, Tn = function(t, n, s) {
      switch (n) {
        case "input":
          if (Me(t, s), n = s.name, s.type === "radio" && n != null) {
            for (s = t; s.parentNode; ) s = s.parentNode;
            for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < s.length; n++) {
              var a = s[n];
              if (a !== t && a.form === t.form) {
                var d = Ni(a);
                if (!d) throw Error(o(90));
                Ue(a), Me(a, d);
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
    }, Xs = $u, Ks = zr;
    var $y = {
      usingClientEntryPoint: false,
      Events: [
        ss,
        so,
        Ni,
        Ys,
        Gs,
        $u
      ]
    }, ws = {
      findFiberByHostInstance: Mr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    }, Ry = {
      bundleType: ws.bundleType,
      version: ws.version,
      rendererPackageName: ws.rendererPackageName,
      rendererConfig: ws.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: I.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(t) {
        return t = ei(t), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: ws.findFiberByHostInstance || Ty,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!cl.isDisabled && cl.supportsFiber) try {
        Zr = cl.inject(Ry), Ht = cl;
      } catch {
      }
    }
    return It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y, It.createPortal = function(t, n) {
      var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ju(n)) throw Error(o(200));
      return Iy(t, n, null, s);
    }, It.createRoot = function(t, n) {
      if (!ju(t)) throw Error(o(299));
      var s = false, a = "", d = Th;
      return n != null && (n.unstable_strictMode === true && (s = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), n = Ou(t, 1, false, null, null, s, false, a, d), t[Rn] = n.current, ns(t.nodeType === 8 ? t.parentNode : t), new Bu(n);
    }, It.findDOMNode = function(t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var n = t._reactInternals;
      if (n === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
      return t = ei(n), t = t === null ? null : t.stateNode, t;
    }, It.flushSync = function(t) {
      return zr(t);
    }, It.hydrate = function(t, n, s) {
      if (!al(n)) throw Error(o(200));
      return ul(null, t, n, true, s);
    }, It.hydrateRoot = function(t, n, s) {
      if (!ju(t)) throw Error(o(405));
      var a = s != null && s.hydratedSources || null, d = false, g = "", w = Th;
      if (s != null && (s.unstable_strictMode === true && (d = true), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), n = bh(n, null, t, 1, s ?? null, d, false, g, w), t[Rn] = n.current, ns(t), a) for (t = 0; t < a.length; t++) s = a[t], d = s._getVersion, d = d(s._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [
        s,
        d
      ] : n.mutableSourceEagerHydrationData.push(s, d);
      return new ll(n);
    }, It.render = function(t, n, s) {
      if (!al(n)) throw Error(o(200));
      return ul(null, t, n, false, s);
    }, It.unmountComponentAtNode = function(t) {
      if (!al(t)) throw Error(o(40));
      return t._reactRootContainer ? (zr(function() {
        ul(null, null, t, false, function() {
          t._reactRootContainer = null, t[Rn] = null;
        });
      }), true) : false;
    }, It.unstable_batchedUpdates = $u, It.unstable_renderSubtreeIntoContainer = function(t, n, s, a) {
      if (!al(s)) throw Error(o(200));
      if (t == null || t._reactInternals === void 0) throw Error(o(38));
      return ul(t, n, s, false, a);
    }, It.version = "18.3.1-next-f1338f8080-20240426", It;
  }
  var Fh;
  function f0() {
    if (Fh) return Uu.exports;
    Fh = 1;
    function e() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
    }
    return e(), Uu.exports = By(), Uu.exports;
  }
  var Bh;
  function jy() {
    if (Bh) return dl;
    Bh = 1;
    var e = f0();
    return dl.createRoot = e.createRoot, dl.hydrateRoot = e.hydrateRoot, dl;
  }
  var Hy = jy();
  function ct(e) {
    if (typeof e == "string" || typeof e == "number") return "" + e;
    let r = "";
    if (Array.isArray(e)) for (let o = 0, i; o < e.length; o++) (i = ct(e[o])) !== "" && (r += (r && " ") + i);
    else for (let o in e) e[o] && (r += (r && " ") + o);
    return r;
  }
  var Gu = {
    exports: {}
  }, Xu = {}, Ku = {
    exports: {}
  }, Qu = {};
  var jh;
  function Vy() {
    if (jh) return Qu;
    jh = 1;
    var e = js();
    function r(y, v) {
      return y === v && (y !== 0 || 1 / y === 1 / v) || y !== y && v !== v;
    }
    var o = typeof Object.is == "function" ? Object.is : r, i = e.useState, l = e.useEffect, u = e.useLayoutEffect, c = e.useDebugValue;
    function f(y, v) {
      var x = v(), k = i({
        inst: {
          value: x,
          getSnapshot: v
        }
      }), S = k[0].inst, C = k[1];
      return u(function() {
        S.value = x, S.getSnapshot = v, m(S) && C({
          inst: S
        });
      }, [
        y,
        x,
        v
      ]), l(function() {
        return m(S) && C({
          inst: S
        }), y(function() {
          m(S) && C({
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
    var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : f;
    return Qu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Qu;
  }
  var Hh;
  function Uy() {
    return Hh || (Hh = 1, Ku.exports = Vy()), Ku.exports;
  }
  var Vh;
  function Wy() {
    if (Vh) return Xu;
    Vh = 1;
    var e = js(), r = Uy();
    function o(h, p) {
      return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
    }
    var i = typeof Object.is == "function" ? Object.is : o, l = r.useSyncExternalStore, u = e.useRef, c = e.useEffect, f = e.useMemo, m = e.useDebugValue;
    return Xu.useSyncExternalStoreWithSelector = function(h, p, y, v, x) {
      var k = u(null);
      if (k.current === null) {
        var S = {
          hasValue: false,
          value: null
        };
        k.current = S;
      } else S = k.current;
      k = f(function() {
        function E(z) {
          if (!A) {
            if (A = true, P = z, z = v(z), x !== void 0 && S.hasValue) {
              var Q = S.value;
              if (x(Q, z)) return I = Q;
            }
            return I = z;
          }
          if (Q = I, i(P, z)) return Q;
          var q = v(z);
          return x !== void 0 && x(Q, q) ? (P = z, Q) : (P = z, I = q);
        }
        var A = false, P, I, F = y === void 0 ? null : y;
        return [
          function() {
            return E(p());
          },
          F === null ? void 0 : function() {
            return E(F());
          }
        ];
      }, [
        p,
        y,
        v,
        x
      ]);
      var C = l(h, k[0], k[1]);
      return c(function() {
        S.hasValue = true, S.value = C;
      }, [
        C
      ]), m(C), C;
    }, Xu;
  }
  var Uh;
  function Yy() {
    return Uh || (Uh = 1, Gu.exports = Wy()), Gu.exports;
  }
  var Gy = Yy();
  const Xy = d0(Gy), Ky = {}, Wh = (e) => {
    let r;
    const o = /* @__PURE__ */ new Set(), i = (p, y) => {
      const v = typeof p == "function" ? p(r) : p;
      if (!Object.is(v, r)) {
        const x = r;
        r = y ?? (typeof v != "object" || v === null) ? v : Object.assign({}, r, v), o.forEach((k) => k(r, x));
      }
    }, l = () => r, m = {
      setState: i,
      getState: l,
      getInitialState: () => h,
      subscribe: (p) => (o.add(p), () => o.delete(p)),
      destroy: () => {
        (Ky ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), o.clear();
      }
    }, h = r = e(i, l, m);
    return m;
  }, Qy = (e) => e ? Wh(e) : Wh, { useDebugValue: Zy } = X, { useSyncExternalStoreWithSelector: qy } = Xy, Jy = (e) => e;
  function h0(e, r = Jy, o) {
    const i = qy(e.subscribe, e.getState, e.getServerState || e.getInitialState, r, o);
    return Zy(i), i;
  }
  const Yh = (e, r) => {
    const o = Qy(e), i = (l, u = r) => h0(o, l, u);
    return Object.assign(i, o), i;
  }, e1 = (e, r) => e ? Yh(e, r) : Yh;
  function At(e, r) {
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
  var t1 = {
    value: () => {
    }
  };
  function Xl() {
    for (var e = 0, r = arguments.length, o = {}, i; e < r; ++e) {
      if (!(i = arguments[e] + "") || i in o || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
      o[i] = [];
    }
    return new _l(o);
  }
  function _l(e) {
    this._ = e;
  }
  function n1(e, r) {
    return e.trim().split(/^|\s+/).map(function(o) {
      var i = "", l = o.indexOf(".");
      if (l >= 0 && (i = o.slice(l + 1), o = o.slice(0, l)), o && !r.hasOwnProperty(o)) throw new Error("unknown type: " + o);
      return {
        type: o,
        name: i
      };
    });
  }
  _l.prototype = Xl.prototype = {
    constructor: _l,
    on: function(e, r) {
      var o = this._, i = n1(e + "", o), l, u = -1, c = i.length;
      if (arguments.length < 2) {
        for (; ++u < c; ) if ((l = (e = i[u]).type) && (l = r1(o[l], e.name))) return l;
        return;
      }
      if (r != null && typeof r != "function") throw new Error("invalid callback: " + r);
      for (; ++u < c; ) if (l = (e = i[u]).type) o[l] = Gh(o[l], e.name, r);
      else if (r == null) for (l in o) o[l] = Gh(o[l], e.name, null);
      return this;
    },
    copy: function() {
      var e = {}, r = this._;
      for (var o in r) e[o] = r[o].slice();
      return new _l(e);
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
  function r1(e, r) {
    for (var o = 0, i = e.length, l; o < i; ++o) if ((l = e[o]).name === r) return l.value;
  }
  function Gh(e, r, o) {
    for (var i = 0, l = e.length; i < l; ++i) if (e[i].name === r) {
      e[i] = t1, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
    return o != null && e.push({
      name: r,
      value: o
    }), e;
  }
  var fc = "http://www.w3.org/1999/xhtml";
  const Xh = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: fc,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function Kl(e) {
    var r = e += "", o = r.indexOf(":");
    return o >= 0 && (r = e.slice(0, o)) !== "xmlns" && (e = e.slice(o + 1)), Xh.hasOwnProperty(r) ? {
      space: Xh[r],
      local: e
    } : e;
  }
  function o1(e) {
    return function() {
      var r = this.ownerDocument, o = this.namespaceURI;
      return o === fc && r.documentElement.namespaceURI === fc ? r.createElement(e) : r.createElementNS(o, e);
    };
  }
  function s1(e) {
    return function() {
      return this.ownerDocument.createElementNS(e.space, e.local);
    };
  }
  function p0(e) {
    var r = Kl(e);
    return (r.local ? s1 : o1)(r);
  }
  function i1() {
  }
  function Dc(e) {
    return e == null ? i1 : function() {
      return this.querySelector(e);
    };
  }
  function l1(e) {
    typeof e != "function" && (e = Dc(e));
    for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = i[l] = new Array(c), m, h, p = 0; p < c; ++p) (m = u[p]) && (h = e.call(m, m.__data__, p, u)) && ("__data__" in m && (h.__data__ = m.__data__), f[p] = h);
    return new Ot(i, this._parents);
  }
  function a1(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function u1() {
    return [];
  }
  function m0(e) {
    return e == null ? u1 : function() {
      return this.querySelectorAll(e);
    };
  }
  function c1(e) {
    return function() {
      return a1(e.apply(this, arguments));
    };
  }
  function d1(e) {
    typeof e == "function" ? e = c1(e) : e = m0(e);
    for (var r = this._groups, o = r.length, i = [], l = [], u = 0; u < o; ++u) for (var c = r[u], f = c.length, m, h = 0; h < f; ++h) (m = c[h]) && (i.push(e.call(m, m.__data__, h, c)), l.push(m));
    return new Ot(i, l);
  }
  function g0(e) {
    return function() {
      return this.matches(e);
    };
  }
  function y0(e) {
    return function(r) {
      return r.matches(e);
    };
  }
  var f1 = Array.prototype.find;
  function h1(e) {
    return function() {
      return f1.call(this.children, e);
    };
  }
  function p1() {
    return this.firstElementChild;
  }
  function m1(e) {
    return this.select(e == null ? p1 : h1(typeof e == "function" ? e : y0(e)));
  }
  var g1 = Array.prototype.filter;
  function y1() {
    return Array.from(this.children);
  }
  function v1(e) {
    return function() {
      return g1.call(this.children, e);
    };
  }
  function w1(e) {
    return this.selectAll(e == null ? y1 : v1(typeof e == "function" ? e : y0(e)));
  }
  function x1(e) {
    typeof e != "function" && (e = g0(e));
    for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = i[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && f.push(m);
    return new Ot(i, this._parents);
  }
  function v0(e) {
    return new Array(e.length);
  }
  function S1() {
    return new Ot(this._enter || this._groups.map(v0), this._parents);
  }
  function Pl(e, r) {
    this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = r;
  }
  Pl.prototype = {
    constructor: Pl,
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
  function k1(e) {
    return function() {
      return e;
    };
  }
  function E1(e, r, o, i, l, u) {
    for (var c = 0, f, m = r.length, h = u.length; c < h; ++c) (f = r[c]) ? (f.__data__ = u[c], i[c] = f) : o[c] = new Pl(e, u[c]);
    for (; c < m; ++c) (f = r[c]) && (l[c] = f);
  }
  function C1(e, r, o, i, l, u, c) {
    var f, m, h = /* @__PURE__ */ new Map(), p = r.length, y = u.length, v = new Array(p), x;
    for (f = 0; f < p; ++f) (m = r[f]) && (v[f] = x = c.call(m, m.__data__, f, r) + "", h.has(x) ? l[f] = m : h.set(x, m));
    for (f = 0; f < y; ++f) x = c.call(e, u[f], f, u) + "", (m = h.get(x)) ? (i[f] = m, m.__data__ = u[f], h.delete(x)) : o[f] = new Pl(e, u[f]);
    for (f = 0; f < p; ++f) (m = r[f]) && h.get(v[f]) === m && (l[f] = m);
  }
  function _1(e) {
    return e.__data__;
  }
  function N1(e, r) {
    if (!arguments.length) return Array.from(this, _1);
    var o = r ? C1 : E1, i = this._parents, l = this._groups;
    typeof e != "function" && (e = k1(e));
    for (var u = l.length, c = new Array(u), f = new Array(u), m = new Array(u), h = 0; h < u; ++h) {
      var p = i[h], y = l[h], v = y.length, x = M1(e.call(p, p && p.__data__, h, i)), k = x.length, S = f[h] = new Array(k), C = c[h] = new Array(k), E = m[h] = new Array(v);
      o(p, y, S, C, E, x, r);
      for (var A = 0, P = 0, I, F; A < k; ++A) if (I = S[A]) {
        for (A >= P && (P = A + 1); !(F = C[P]) && ++P < k; ) ;
        I._next = F || null;
      }
    }
    return c = new Ot(c, i), c._enter = f, c._exit = m, c;
  }
  function M1(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
  }
  function b1() {
    return new Ot(this._exit || this._groups.map(v0), this._parents);
  }
  function I1(e, r, o) {
    var i = this.enter(), l = this, u = this.exit();
    return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), r != null && (l = r(l), l && (l = l.selection())), o == null ? u.remove() : o(u), i && l ? i.merge(l).order() : l;
  }
  function T1(e) {
    for (var r = e.selection ? e.selection() : e, o = this._groups, i = r._groups, l = o.length, u = i.length, c = Math.min(l, u), f = new Array(l), m = 0; m < c; ++m) for (var h = o[m], p = i[m], y = h.length, v = f[m] = new Array(y), x, k = 0; k < y; ++k) (x = h[k] || p[k]) && (v[k] = x);
    for (; m < l; ++m) f[m] = o[m];
    return new Ot(f, this._parents);
  }
  function A1() {
    for (var e = this._groups, r = -1, o = e.length; ++r < o; ) for (var i = e[r], l = i.length - 1, u = i[l], c; --l >= 0; ) (c = i[l]) && (u && c.compareDocumentPosition(u) ^ 4 && u.parentNode.insertBefore(c, u), u = c);
    return this;
  }
  function $1(e) {
    e || (e = R1);
    function r(y, v) {
      return y && v ? e(y.__data__, v.__data__) : !y - !v;
    }
    for (var o = this._groups, i = o.length, l = new Array(i), u = 0; u < i; ++u) {
      for (var c = o[u], f = c.length, m = l[u] = new Array(f), h, p = 0; p < f; ++p) (h = c[p]) && (m[p] = h);
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
  function z1() {
    return Array.from(this);
  }
  function L1() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var i = e[r], l = 0, u = i.length; l < u; ++l) {
      var c = i[l];
      if (c) return c;
    }
    return null;
  }
  function D1() {
    let e = 0;
    for (const r of this) ++e;
    return e;
  }
  function O1() {
    return !this.node();
  }
  function F1(e) {
    for (var r = this._groups, o = 0, i = r.length; o < i; ++o) for (var l = r[o], u = 0, c = l.length, f; u < c; ++u) (f = l[u]) && e.call(f, f.__data__, u, l);
    return this;
  }
  function B1(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function j1(e) {
    return function() {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function H1(e, r) {
    return function() {
      this.setAttribute(e, r);
    };
  }
  function V1(e, r) {
    return function() {
      this.setAttributeNS(e.space, e.local, r);
    };
  }
  function U1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? this.removeAttribute(e) : this.setAttribute(e, o);
    };
  }
  function W1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, o);
    };
  }
  function Y1(e, r) {
    var o = Kl(e);
    if (arguments.length < 2) {
      var i = this.node();
      return o.local ? i.getAttributeNS(o.space, o.local) : i.getAttribute(o);
    }
    return this.each((r == null ? o.local ? j1 : B1 : typeof r == "function" ? o.local ? W1 : U1 : o.local ? V1 : H1)(o, r));
  }
  function w0(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
  }
  function G1(e) {
    return function() {
      this.style.removeProperty(e);
    };
  }
  function X1(e, r, o) {
    return function() {
      this.style.setProperty(e, r, o);
    };
  }
  function K1(e, r, o) {
    return function() {
      var i = r.apply(this, arguments);
      i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, o);
    };
  }
  function Q1(e, r, o) {
    return arguments.length > 1 ? this.each((r == null ? G1 : typeof r == "function" ? K1 : X1)(e, r, o ?? "")) : Io(this.node(), e);
  }
  function Io(e, r) {
    return e.style.getPropertyValue(r) || w0(e).getComputedStyle(e, null).getPropertyValue(r);
  }
  function Z1(e) {
    return function() {
      delete this[e];
    };
  }
  function q1(e, r) {
    return function() {
      this[e] = r;
    };
  }
  function J1(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      o == null ? delete this[e] : this[e] = o;
    };
  }
  function ev(e, r) {
    return arguments.length > 1 ? this.each((r == null ? Z1 : typeof r == "function" ? J1 : q1)(e, r)) : this.node()[e];
  }
  function x0(e) {
    return e.trim().split(/^|\s+/);
  }
  function Oc(e) {
    return e.classList || new S0(e);
  }
  function S0(e) {
    this._node = e, this._names = x0(e.getAttribute("class") || "");
  }
  S0.prototype = {
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
  function k0(e, r) {
    for (var o = Oc(e), i = -1, l = r.length; ++i < l; ) o.add(r[i]);
  }
  function E0(e, r) {
    for (var o = Oc(e), i = -1, l = r.length; ++i < l; ) o.remove(r[i]);
  }
  function tv(e) {
    return function() {
      k0(this, e);
    };
  }
  function nv(e) {
    return function() {
      E0(this, e);
    };
  }
  function rv(e, r) {
    return function() {
      (r.apply(this, arguments) ? k0 : E0)(this, e);
    };
  }
  function ov(e, r) {
    var o = x0(e + "");
    if (arguments.length < 2) {
      for (var i = Oc(this.node()), l = -1, u = o.length; ++l < u; ) if (!i.contains(o[l])) return false;
      return true;
    }
    return this.each((typeof r == "function" ? rv : r ? tv : nv)(o, r));
  }
  function sv() {
    this.textContent = "";
  }
  function iv(e) {
    return function() {
      this.textContent = e;
    };
  }
  function lv(e) {
    return function() {
      var r = e.apply(this, arguments);
      this.textContent = r ?? "";
    };
  }
  function av(e) {
    return arguments.length ? this.each(e == null ? sv : (typeof e == "function" ? lv : iv)(e)) : this.node().textContent;
  }
  function uv() {
    this.innerHTML = "";
  }
  function cv(e) {
    return function() {
      this.innerHTML = e;
    };
  }
  function dv(e) {
    return function() {
      var r = e.apply(this, arguments);
      this.innerHTML = r ?? "";
    };
  }
  function fv(e) {
    return arguments.length ? this.each(e == null ? uv : (typeof e == "function" ? dv : cv)(e)) : this.node().innerHTML;
  }
  function hv() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function pv() {
    return this.each(hv);
  }
  function mv() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function gv() {
    return this.each(mv);
  }
  function yv(e) {
    var r = typeof e == "function" ? e : p0(e);
    return this.select(function() {
      return this.appendChild(r.apply(this, arguments));
    });
  }
  function vv() {
    return null;
  }
  function wv(e, r) {
    var o = typeof e == "function" ? e : p0(e), i = r == null ? vv : typeof r == "function" ? r : Dc(r);
    return this.select(function() {
      return this.insertBefore(o.apply(this, arguments), i.apply(this, arguments) || null);
    });
  }
  function xv() {
    var e = this.parentNode;
    e && e.removeChild(this);
  }
  function Sv() {
    return this.each(xv);
  }
  function kv() {
    var e = this.cloneNode(false), r = this.parentNode;
    return r ? r.insertBefore(e, this.nextSibling) : e;
  }
  function Ev() {
    var e = this.cloneNode(true), r = this.parentNode;
    return r ? r.insertBefore(e, this.nextSibling) : e;
  }
  function Cv(e) {
    return this.select(e ? Ev : kv);
  }
  function _v(e) {
    return arguments.length ? this.property("__data__", e) : this.node().__data__;
  }
  function Nv(e) {
    return function(r) {
      e.call(this, r, this.__data__);
    };
  }
  function Mv(e) {
    return e.trim().split(/^|\s+/).map(function(r) {
      var o = "", i = r.indexOf(".");
      return i >= 0 && (o = r.slice(i + 1), r = r.slice(0, i)), {
        type: r,
        name: o
      };
    });
  }
  function bv(e) {
    return function() {
      var r = this.__on;
      if (r) {
        for (var o = 0, i = -1, l = r.length, u; o < l; ++o) u = r[o], (!e.type || u.type === e.type) && u.name === e.name ? this.removeEventListener(u.type, u.listener, u.options) : r[++i] = u;
        ++i ? r.length = i : delete this.__on;
      }
    };
  }
  function Iv(e, r, o) {
    return function() {
      var i = this.__on, l, u = Nv(r);
      if (i) {
        for (var c = 0, f = i.length; c < f; ++c) if ((l = i[c]).type === e.type && l.name === e.name) {
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
  function Tv(e, r, o) {
    var i = Mv(e + ""), l, u = i.length, c;
    if (arguments.length < 2) {
      var f = this.node().__on;
      if (f) {
        for (var m = 0, h = f.length, p; m < h; ++m) for (l = 0, p = f[m]; l < u; ++l) if ((c = i[l]).type === p.type && c.name === p.name) return p.value;
      }
      return;
    }
    for (f = r ? Iv : bv, l = 0; l < u; ++l) this.each(f(i[l], r, o));
    return this;
  }
  function C0(e, r, o) {
    var i = w0(e), l = i.CustomEvent;
    typeof l == "function" ? l = new l(r, o) : (l = i.document.createEvent("Event"), o ? (l.initEvent(r, o.bubbles, o.cancelable), l.detail = o.detail) : l.initEvent(r, false, false)), e.dispatchEvent(l);
  }
  function Av(e, r) {
    return function() {
      return C0(this, e, r);
    };
  }
  function $v(e, r) {
    return function() {
      return C0(this, e, r.apply(this, arguments));
    };
  }
  function Rv(e, r) {
    return this.each((typeof r == "function" ? $v : Av)(e, r));
  }
  function* Pv() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var i = e[r], l = 0, u = i.length, c; l < u; ++l) (c = i[l]) && (yield c);
  }
  var _0 = [
    null
  ];
  function Ot(e, r) {
    this._groups = e, this._parents = r;
  }
  function Hs() {
    return new Ot([
      [
        document.documentElement
      ]
    ], _0);
  }
  function zv() {
    return this;
  }
  Ot.prototype = Hs.prototype = {
    constructor: Ot,
    select: l1,
    selectAll: d1,
    selectChild: m1,
    selectChildren: w1,
    filter: x1,
    data: N1,
    enter: S1,
    exit: b1,
    join: I1,
    merge: T1,
    selection: zv,
    order: A1,
    sort: $1,
    call: P1,
    nodes: z1,
    node: L1,
    size: D1,
    empty: O1,
    each: F1,
    attr: Y1,
    style: Q1,
    property: ev,
    classed: ov,
    text: av,
    html: fv,
    raise: pv,
    lower: gv,
    append: yv,
    insert: wv,
    remove: Sv,
    clone: Cv,
    datum: _v,
    on: Tv,
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
    ], _0);
  }
  function Lv(e) {
    let r;
    for (; r = e.sourceEvent; ) e = r;
    return e;
  }
  function dn(e, r) {
    if (e = Lv(e), r === void 0 && (r = e.currentTarget), r) {
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
  const Dv = {
    passive: false
  }, Ts = {
    capture: true,
    passive: false
  };
  function Zu(e) {
    e.stopImmediatePropagation();
  }
  function No(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function N0(e) {
    var r = e.document.documentElement, o = Qt(e).on("dragstart.drag", No, Ts);
    "onselectstart" in r ? o.on("selectstart.drag", No, Ts) : (r.__noselect = r.style.MozUserSelect, r.style.MozUserSelect = "none");
  }
  function M0(e, r) {
    var o = e.document.documentElement, i = Qt(e).on("dragstart.drag", null);
    r && (i.on("click.drag", No, Ts), setTimeout(function() {
      i.on("click.drag", null);
    }, 0)), "onselectstart" in o ? i.on("selectstart.drag", null) : (o.style.MozUserSelect = o.__noselect, delete o.__noselect);
  }
  const fl = (e) => () => e;
  function hc(e, { sourceEvent: r, subject: o, target: i, identifier: l, active: u, x: c, y: f, dx: m, dy: h, dispatch: p }) {
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
        value: p
      }
    });
  }
  hc.prototype.on = function() {
    var e = this._.on.apply(this._, arguments);
    return e === this._ ? this : e;
  };
  function Ov(e) {
    return !e.ctrlKey && !e.button;
  }
  function Fv() {
    return this.parentNode;
  }
  function Bv(e, r) {
    return r ?? {
      x: e.x,
      y: e.y
    };
  }
  function jv() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Hv() {
    var e = Ov, r = Fv, o = Bv, i = jv, l = {}, u = Xl("start", "drag", "end"), c = 0, f, m, h, p, y = 0;
    function v(I) {
      I.on("mousedown.drag", x).filter(i).on("touchstart.drag", C).on("touchmove.drag", E, Dv).on("touchend.drag touchcancel.drag", A).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function x(I, F) {
      if (!(p || !e.call(this, I, F))) {
        var z = P(this, r.call(this, I, F), I, F, "mouse");
        z && (Qt(I.view).on("mousemove.drag", k, Ts).on("mouseup.drag", S, Ts), N0(I.view), Zu(I), h = false, f = I.clientX, m = I.clientY, z("start", I));
      }
    }
    function k(I) {
      if (No(I), !h) {
        var F = I.clientX - f, z = I.clientY - m;
        h = F * F + z * z > y;
      }
      l.mouse("drag", I);
    }
    function S(I) {
      Qt(I.view).on("mousemove.drag mouseup.drag", null), M0(I.view, h), No(I), l.mouse("end", I);
    }
    function C(I, F) {
      if (e.call(this, I, F)) {
        var z = I.changedTouches, Q = r.call(this, I, F), q = z.length, G, J;
        for (G = 0; G < q; ++G) (J = P(this, Q, I, F, z[G].identifier, z[G])) && (Zu(I), J("start", I, z[G]));
      }
    }
    function E(I) {
      var F = I.changedTouches, z = F.length, Q, q;
      for (Q = 0; Q < z; ++Q) (q = l[F[Q].identifier]) && (No(I), q("drag", I, F[Q]));
    }
    function A(I) {
      var F = I.changedTouches, z = F.length, Q, q;
      for (p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, 500), Q = 0; Q < z; ++Q) (q = l[F[Q].identifier]) && (Zu(I), q("end", I, F[Q]));
    }
    function P(I, F, z, Q, q, G) {
      var J = u.copy(), ee = dn(G || z, F), Y, Z, _;
      if ((_ = o.call(I, new hc("beforestart", {
        sourceEvent: z,
        target: v,
        identifier: q,
        active: c,
        x: ee[0],
        y: ee[1],
        dx: 0,
        dy: 0,
        dispatch: J
      }), Q)) != null) return Y = _.x - ee[0] || 0, Z = _.y - ee[1] || 0, function V(O, K, B) {
        var $ = ee, j;
        switch (O) {
          case "start":
            l[q] = V, j = c++;
            break;
          case "end":
            delete l[q], --c;
          case "drag":
            ee = dn(B || K, F), j = c;
            break;
        }
        J.call(O, I, new hc(O, {
          sourceEvent: K,
          subject: _,
          target: v,
          identifier: q,
          active: j,
          x: ee[0] + Y,
          y: ee[1] + Z,
          dx: ee[0] - $[0],
          dy: ee[1] - $[1],
          dispatch: J
        }), Q);
      };
    }
    return v.filter = function(I) {
      return arguments.length ? (e = typeof I == "function" ? I : fl(!!I), v) : e;
    }, v.container = function(I) {
      return arguments.length ? (r = typeof I == "function" ? I : fl(I), v) : r;
    }, v.subject = function(I) {
      return arguments.length ? (o = typeof I == "function" ? I : fl(I), v) : o;
    }, v.touchable = function(I) {
      return arguments.length ? (i = typeof I == "function" ? I : fl(!!I), v) : i;
    }, v.on = function() {
      var I = u.on.apply(u, arguments);
      return I === u ? v : I;
    }, v.clickDistance = function(I) {
      return arguments.length ? (y = (I = +I) * I, v) : Math.sqrt(y);
    }, v;
  }
  function Fc(e, r, o) {
    e.prototype = r.prototype = o, o.constructor = e;
  }
  function b0(e, r) {
    var o = Object.create(e.prototype);
    for (var i in r) o[i] = r[i];
    return o;
  }
  function Vs() {
  }
  var As = 0.7, zl = 1 / As, Mo = "\\s*([+-]?\\d+)\\s*", $s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vv = /^#([0-9a-f]{3,8})$/, Uv = new RegExp(`^rgb\\(${Mo},${Mo},${Mo}\\)$`), Wv = new RegExp(`^rgb\\(${Cn},${Cn},${Cn}\\)$`), Yv = new RegExp(`^rgba\\(${Mo},${Mo},${Mo},${$s}\\)$`), Gv = new RegExp(`^rgba\\(${Cn},${Cn},${Cn},${$s}\\)$`), Xv = new RegExp(`^hsl\\(${$s},${Cn},${Cn}\\)$`), Kv = new RegExp(`^hsla\\(${$s},${Cn},${Cn},${$s}\\)$`), Kh = {
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
  Fc(Vs, Rs, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: Qh,
    formatHex: Qh,
    formatHex8: Qv,
    formatHsl: Zv,
    formatRgb: Zh,
    toString: Zh
  });
  function Qh() {
    return this.rgb().formatHex();
  }
  function Qv() {
    return this.rgb().formatHex8();
  }
  function Zv() {
    return I0(this).formatHsl();
  }
  function Zh() {
    return this.rgb().formatRgb();
  }
  function Rs(e) {
    var r, o;
    return e = (e + "").trim().toLowerCase(), (r = Vv.exec(e)) ? (o = r[1].length, r = parseInt(r[1], 16), o === 6 ? qh(r) : o === 3 ? new Tt(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : o === 8 ? hl(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : o === 4 ? hl(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Uv.exec(e)) ? new Tt(r[1], r[2], r[3], 1) : (r = Wv.exec(e)) ? new Tt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Yv.exec(e)) ? hl(r[1], r[2], r[3], r[4]) : (r = Gv.exec(e)) ? hl(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Xv.exec(e)) ? tp(r[1], r[2] / 100, r[3] / 100, 1) : (r = Kv.exec(e)) ? tp(r[1], r[2] / 100, r[3] / 100, r[4]) : Kh.hasOwnProperty(e) ? qh(Kh[e]) : e === "transparent" ? new Tt(NaN, NaN, NaN, 0) : null;
  }
  function qh(e) {
    return new Tt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
  }
  function hl(e, r, o, i) {
    return i <= 0 && (e = r = o = NaN), new Tt(e, r, o, i);
  }
  function qv(e) {
    return e instanceof Vs || (e = Rs(e)), e ? (e = e.rgb(), new Tt(e.r, e.g, e.b, e.opacity)) : new Tt();
  }
  function pc(e, r, o, i) {
    return arguments.length === 1 ? qv(e) : new Tt(e, r, o, i ?? 1);
  }
  function Tt(e, r, o, i) {
    this.r = +e, this.g = +r, this.b = +o, this.opacity = +i;
  }
  Fc(Tt, pc, b0(Vs, {
    brighter(e) {
      return e = e == null ? zl : Math.pow(zl, e), new Tt(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? As : Math.pow(As, e), new Tt(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Tt(Hr(this.r), Hr(this.g), Hr(this.b), Ll(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: Jh,
    formatHex: Jh,
    formatHex8: Jv,
    formatRgb: ep,
    toString: ep
  }));
  function Jh() {
    return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}`;
  }
  function Jv() {
    return `#${Br(this.r)}${Br(this.g)}${Br(this.b)}${Br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function ep() {
    const e = Ll(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${Hr(this.r)}, ${Hr(this.g)}, ${Hr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
  }
  function Ll(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function Hr(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function Br(e) {
    return e = Hr(e), (e < 16 ? "0" : "") + e.toString(16);
  }
  function tp(e, r, o, i) {
    return i <= 0 ? e = r = o = NaN : o <= 0 || o >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new fn(e, r, o, i);
  }
  function I0(e) {
    if (e instanceof fn) return new fn(e.h, e.s, e.l, e.opacity);
    if (e instanceof Vs || (e = Rs(e)), !e) return new fn();
    if (e instanceof fn) return e;
    e = e.rgb();
    var r = e.r / 255, o = e.g / 255, i = e.b / 255, l = Math.min(r, o, i), u = Math.max(r, o, i), c = NaN, f = u - l, m = (u + l) / 2;
    return f ? (r === u ? c = (o - i) / f + (o < i) * 6 : o === u ? c = (i - r) / f + 2 : c = (r - o) / f + 4, f /= m < 0.5 ? u + l : 2 - u - l, c *= 60) : f = m > 0 && m < 1 ? 0 : c, new fn(c, f, m, e.opacity);
  }
  function ew(e, r, o, i) {
    return arguments.length === 1 ? I0(e) : new fn(e, r, o, i ?? 1);
  }
  function fn(e, r, o, i) {
    this.h = +e, this.s = +r, this.l = +o, this.opacity = +i;
  }
  Fc(fn, ew, b0(Vs, {
    brighter(e) {
      return e = e == null ? zl : Math.pow(zl, e), new fn(this.h, this.s, this.l * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? As : Math.pow(As, e), new fn(this.h, this.s, this.l * e, this.opacity);
    },
    rgb() {
      var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, o = this.l, i = o + (o < 0.5 ? o : 1 - o) * r, l = 2 * o - i;
      return new Tt(qu(e >= 240 ? e - 240 : e + 120, l, i), qu(e, l, i), qu(e < 120 ? e + 240 : e - 120, l, i), this.opacity);
    },
    clamp() {
      return new fn(np(this.h), pl(this.s), pl(this.l), Ll(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const e = Ll(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${np(this.h)}, ${pl(this.s) * 100}%, ${pl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    }
  }));
  function np(e) {
    return e = (e || 0) % 360, e < 0 ? e + 360 : e;
  }
  function pl(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function qu(e, r, o) {
    return (e < 60 ? r + (o - r) * e / 60 : e < 180 ? o : e < 240 ? r + (o - r) * (240 - e) / 60 : r) * 255;
  }
  const T0 = (e) => () => e;
  function tw(e, r) {
    return function(o) {
      return e + o * r;
    };
  }
  function nw(e, r, o) {
    return e = Math.pow(e, o), r = Math.pow(r, o) - e, o = 1 / o, function(i) {
      return Math.pow(e + i * r, o);
    };
  }
  function rw(e) {
    return (e = +e) == 1 ? A0 : function(r, o) {
      return o - r ? nw(r, o, e) : T0(isNaN(r) ? o : r);
    };
  }
  function A0(e, r) {
    var o = r - e;
    return o ? tw(e, o) : T0(isNaN(e) ? r : e);
  }
  const rp = (function e(r) {
    var o = rw(r);
    function i(l, u) {
      var c = o((l = pc(l)).r, (u = pc(u)).r), f = o(l.g, u.g), m = o(l.b, u.b), h = A0(l.opacity, u.opacity);
      return function(p) {
        return l.r = c(p), l.g = f(p), l.b = m(p), l.opacity = h(p), l + "";
      };
    }
    return i.gamma = e, i;
  })(1);
  function mr(e, r) {
    return e = +e, r = +r, function(o) {
      return e * (1 - o) + r * o;
    };
  }
  var mc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ju = new RegExp(mc.source, "g");
  function ow(e) {
    return function() {
      return e;
    };
  }
  function sw(e) {
    return function(r) {
      return e(r) + "";
    };
  }
  function iw(e, r) {
    var o = mc.lastIndex = Ju.lastIndex = 0, i, l, u, c = -1, f = [], m = [];
    for (e = e + "", r = r + ""; (i = mc.exec(e)) && (l = Ju.exec(r)); ) (u = l.index) > o && (u = r.slice(o, u), f[c] ? f[c] += u : f[++c] = u), (i = i[0]) === (l = l[0]) ? f[c] ? f[c] += l : f[++c] = l : (f[++c] = null, m.push({
      i: c,
      x: mr(i, l)
    })), o = Ju.lastIndex;
    return o < r.length && (u = r.slice(o), f[c] ? f[c] += u : f[++c] = u), f.length < 2 ? m[0] ? sw(m[0].x) : ow(r) : (r = m.length, function(h) {
      for (var p = 0, y; p < r; ++p) f[(y = m[p]).i] = y.x(h);
      return f.join("");
    });
  }
  var op = 180 / Math.PI, gc = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function $0(e, r, o, i, l, u) {
    var c, f, m;
    return (c = Math.sqrt(e * e + r * r)) && (e /= c, r /= c), (m = e * o + r * i) && (o -= e * m, i -= r * m), (f = Math.sqrt(o * o + i * i)) && (o /= f, i /= f, m /= f), e * i < r * o && (e = -e, r = -r, m = -m, c = -c), {
      translateX: l,
      translateY: u,
      rotate: Math.atan2(r, e) * op,
      skewX: Math.atan(m) * op,
      scaleX: c,
      scaleY: f
    };
  }
  var ml;
  function lw(e) {
    const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return r.isIdentity ? gc : $0(r.a, r.b, r.c, r.d, r.e, r.f);
  }
  function aw(e) {
    return e == null || (ml || (ml = document.createElementNS("http://www.w3.org/2000/svg", "g")), ml.setAttribute("transform", e), !(e = ml.transform.baseVal.consolidate())) ? gc : (e = e.matrix, $0(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function R0(e, r, o, i) {
    function l(h) {
      return h.length ? h.pop() + " " : "";
    }
    function u(h, p, y, v, x, k) {
      if (h !== y || p !== v) {
        var S = x.push("translate(", null, r, null, o);
        k.push({
          i: S - 4,
          x: mr(h, y)
        }, {
          i: S - 2,
          x: mr(p, v)
        });
      } else (y || v) && x.push("translate(" + y + r + v + o);
    }
    function c(h, p, y, v) {
      h !== p ? (h - p > 180 ? p += 360 : p - h > 180 && (h += 360), v.push({
        i: y.push(l(y) + "rotate(", null, i) - 2,
        x: mr(h, p)
      })) : p && y.push(l(y) + "rotate(" + p + i);
    }
    function f(h, p, y, v) {
      h !== p ? v.push({
        i: y.push(l(y) + "skewX(", null, i) - 2,
        x: mr(h, p)
      }) : p && y.push(l(y) + "skewX(" + p + i);
    }
    function m(h, p, y, v, x, k) {
      if (h !== y || p !== v) {
        var S = x.push(l(x) + "scale(", null, ",", null, ")");
        k.push({
          i: S - 4,
          x: mr(h, y)
        }, {
          i: S - 2,
          x: mr(p, v)
        });
      } else (y !== 1 || v !== 1) && x.push(l(x) + "scale(" + y + "," + v + ")");
    }
    return function(h, p) {
      var y = [], v = [];
      return h = e(h), p = e(p), u(h.translateX, h.translateY, p.translateX, p.translateY, y, v), c(h.rotate, p.rotate, y, v), f(h.skewX, p.skewX, y, v), m(h.scaleX, h.scaleY, p.scaleX, p.scaleY, y, v), h = p = null, function(x) {
        for (var k = -1, S = v.length, C; ++k < S; ) y[(C = v[k]).i] = C.x(x);
        return y.join("");
      };
    };
  }
  var uw = R0(lw, "px, ", "px)", "deg)"), cw = R0(aw, ", ", ")", ")"), dw = 1e-12;
  function sp(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
  }
  function fw(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2;
  }
  function hw(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1);
  }
  const pw = (function e(r, o, i) {
    function l(u, c) {
      var f = u[0], m = u[1], h = u[2], p = c[0], y = c[1], v = c[2], x = p - f, k = y - m, S = x * x + k * k, C, E;
      if (S < dw) E = Math.log(v / h) / r, C = function(Q) {
        return [
          f + Q * x,
          m + Q * k,
          h * Math.exp(r * Q * E)
        ];
      };
      else {
        var A = Math.sqrt(S), P = (v * v - h * h + i * S) / (2 * h * o * A), I = (v * v - h * h - i * S) / (2 * v * o * A), F = Math.log(Math.sqrt(P * P + 1) - P), z = Math.log(Math.sqrt(I * I + 1) - I);
        E = (z - F) / r, C = function(Q) {
          var q = Q * E, G = sp(F), J = h / (o * A) * (G * hw(r * q + F) - fw(F));
          return [
            f + J * x,
            m + J * k,
            h * G / sp(r * q + F)
          ];
        };
      }
      return C.duration = E * 1e3 * r / Math.SQRT2, C;
    }
    return l.rho = function(u) {
      var c = Math.max(1e-3, +u), f = c * c, m = f * f;
      return e(c, f, m);
    }, l;
  })(Math.SQRT2, 2, 4);
  var To = 0, Ms = 0, Ss = 0, P0 = 1e3, Dl, bs, Ol = 0, Yr = 0, Ql = 0, Ps = typeof performance == "object" && performance.now ? performance : Date, z0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
    setTimeout(e, 17);
  };
  function Bc() {
    return Yr || (z0(mw), Yr = Ps.now() + Ql);
  }
  function mw() {
    Yr = 0;
  }
  function Fl() {
    this._call = this._time = this._next = null;
  }
  Fl.prototype = L0.prototype = {
    constructor: Fl,
    restart: function(e, r, o) {
      if (typeof e != "function") throw new TypeError("callback is not a function");
      o = (o == null ? Bc() : +o) + (r == null ? 0 : +r), !this._next && bs !== this && (bs ? bs._next = this : Dl = this, bs = this), this._call = e, this._time = o, yc();
    },
    stop: function() {
      this._call && (this._call = null, this._time = 1 / 0, yc());
    }
  };
  function L0(e, r, o) {
    var i = new Fl();
    return i.restart(e, r, o), i;
  }
  function gw() {
    Bc(), ++To;
    for (var e = Dl, r; e; ) (r = Yr - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
    --To;
  }
  function ip() {
    Yr = (Ol = Ps.now()) + Ql, To = Ms = 0;
    try {
      gw();
    } finally {
      To = 0, vw(), Yr = 0;
    }
  }
  function yw() {
    var e = Ps.now(), r = e - Ol;
    r > P0 && (Ql -= r, Ol = e);
  }
  function vw() {
    for (var e, r = Dl, o, i = 1 / 0; r; ) r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (o = r._next, r._next = null, r = e ? e._next = o : Dl = o);
    bs = e, yc(i);
  }
  function yc(e) {
    if (!To) {
      Ms && (Ms = clearTimeout(Ms));
      var r = e - Yr;
      r > 24 ? (e < 1 / 0 && (Ms = setTimeout(ip, e - Ps.now() - Ql)), Ss && (Ss = clearInterval(Ss))) : (Ss || (Ol = Ps.now(), Ss = setInterval(yw, P0)), To = 1, z0(ip));
    }
  }
  function lp(e, r, o) {
    var i = new Fl();
    return r = r == null ? 0 : +r, i.restart((l) => {
      i.stop(), e(l + r);
    }, r, o), i;
  }
  var ww = Xl("start", "end", "cancel", "interrupt"), xw = [], D0 = 0, ap = 1, vc = 2, Nl = 3, up = 4, wc = 5, Ml = 6;
  function Zl(e, r, o, i, l, u) {
    var c = e.__transition;
    if (!c) e.__transition = {};
    else if (o in c) return;
    Sw(e, o, {
      name: r,
      index: i,
      group: l,
      on: ww,
      tween: xw,
      time: u.time,
      delay: u.delay,
      duration: u.duration,
      ease: u.ease,
      timer: null,
      state: D0
    });
  }
  function jc(e, r) {
    var o = hn(e, r);
    if (o.state > D0) throw new Error("too late; already scheduled");
    return o;
  }
  function Nn(e, r) {
    var o = hn(e, r);
    if (o.state > Nl) throw new Error("too late; already running");
    return o;
  }
  function hn(e, r) {
    var o = e.__transition;
    if (!o || !(o = o[r])) throw new Error("transition not found");
    return o;
  }
  function Sw(e, r, o) {
    var i = e.__transition, l;
    i[r] = o, o.timer = L0(u, 0, o.time);
    function u(h) {
      o.state = ap, o.timer.restart(c, o.delay, o.time), o.delay <= h && c(h - o.delay);
    }
    function c(h) {
      var p, y, v, x;
      if (o.state !== ap) return m();
      for (p in i) if (x = i[p], x.name === o.name) {
        if (x.state === Nl) return lp(c);
        x.state === up ? (x.state = Ml, x.timer.stop(), x.on.call("interrupt", e, e.__data__, x.index, x.group), delete i[p]) : +p < r && (x.state = Ml, x.timer.stop(), x.on.call("cancel", e, e.__data__, x.index, x.group), delete i[p]);
      }
      if (lp(function() {
        o.state === Nl && (o.state = up, o.timer.restart(f, o.delay, o.time), f(h));
      }), o.state = vc, o.on.call("start", e, e.__data__, o.index, o.group), o.state === vc) {
        for (o.state = Nl, l = new Array(v = o.tween.length), p = 0, y = -1; p < v; ++p) (x = o.tween[p].value.call(e, e.__data__, o.index, o.group)) && (l[++y] = x);
        l.length = y + 1;
      }
    }
    function f(h) {
      for (var p = h < o.duration ? o.ease.call(null, h / o.duration) : (o.timer.restart(m), o.state = wc, 1), y = -1, v = l.length; ++y < v; ) l[y].call(e, p);
      o.state === wc && (o.on.call("end", e, e.__data__, o.index, o.group), m());
    }
    function m() {
      o.state = Ml, o.timer.stop(), delete i[r];
      for (var h in i) return;
      delete e.__transition;
    }
  }
  function bl(e, r) {
    var o = e.__transition, i, l, u = true, c;
    if (o) {
      r = r == null ? null : r + "";
      for (c in o) {
        if ((i = o[c]).name !== r) {
          u = false;
          continue;
        }
        l = i.state > vc && i.state < wc, i.state = Ml, i.timer.stop(), i.on.call(l ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete o[c];
      }
      u && delete e.__transition;
    }
  }
  function kw(e) {
    return this.each(function() {
      bl(this, e);
    });
  }
  function Ew(e, r) {
    var o, i;
    return function() {
      var l = Nn(this, e), u = l.tween;
      if (u !== o) {
        i = o = u;
        for (var c = 0, f = i.length; c < f; ++c) if (i[c].name === r) {
          i = i.slice(), i.splice(c, 1);
          break;
        }
      }
      l.tween = i;
    };
  }
  function Cw(e, r, o) {
    var i, l;
    if (typeof o != "function") throw new Error();
    return function() {
      var u = Nn(this, e), c = u.tween;
      if (c !== i) {
        l = (i = c).slice();
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
  function _w(e, r) {
    var o = this._id;
    if (e += "", arguments.length < 2) {
      for (var i = hn(this.node(), o).tween, l = 0, u = i.length, c; l < u; ++l) if ((c = i[l]).name === e) return c.value;
      return null;
    }
    return this.each((r == null ? Ew : Cw)(o, e, r));
  }
  function Hc(e, r, o) {
    var i = e._id;
    return e.each(function() {
      var l = Nn(this, i);
      (l.value || (l.value = {}))[r] = o.apply(this, arguments);
    }), function(l) {
      return hn(l, i).value[r];
    };
  }
  function O0(e, r) {
    var o;
    return (typeof r == "number" ? mr : r instanceof Rs ? rp : (o = Rs(r)) ? (r = o, rp) : iw)(e, r);
  }
  function Nw(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function Mw(e) {
    return function() {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function bw(e, r, o) {
    var i, l = o + "", u;
    return function() {
      var c = this.getAttribute(e);
      return c === l ? null : c === i ? u : u = r(i = c, o);
    };
  }
  function Iw(e, r, o) {
    var i, l = o + "", u;
    return function() {
      var c = this.getAttributeNS(e.space, e.local);
      return c === l ? null : c === i ? u : u = r(i = c, o);
    };
  }
  function Tw(e, r, o) {
    var i, l, u;
    return function() {
      var c, f = o(this), m;
      return f == null ? void this.removeAttribute(e) : (c = this.getAttribute(e), m = f + "", c === m ? null : c === i && m === l ? u : (l = m, u = r(i = c, f)));
    };
  }
  function Aw(e, r, o) {
    var i, l, u;
    return function() {
      var c, f = o(this), m;
      return f == null ? void this.removeAttributeNS(e.space, e.local) : (c = this.getAttributeNS(e.space, e.local), m = f + "", c === m ? null : c === i && m === l ? u : (l = m, u = r(i = c, f)));
    };
  }
  function $w(e, r) {
    var o = Kl(e), i = o === "transform" ? cw : O0;
    return this.attrTween(e, typeof r == "function" ? (o.local ? Aw : Tw)(o, i, Hc(this, "attr." + e, r)) : r == null ? (o.local ? Mw : Nw)(o) : (o.local ? Iw : bw)(o, i, r));
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
  function zw(e, r) {
    var o, i;
    function l() {
      var u = r.apply(this, arguments);
      return u !== i && (o = (i = u) && Pw(e, u)), o;
    }
    return l._value = r, l;
  }
  function Lw(e, r) {
    var o, i;
    function l() {
      var u = r.apply(this, arguments);
      return u !== i && (o = (i = u) && Rw(e, u)), o;
    }
    return l._value = r, l;
  }
  function Dw(e, r) {
    var o = "attr." + e;
    if (arguments.length < 2) return (o = this.tween(o)) && o._value;
    if (r == null) return this.tween(o, null);
    if (typeof r != "function") throw new Error();
    var i = Kl(e);
    return this.tween(o, (i.local ? zw : Lw)(i, r));
  }
  function Ow(e, r) {
    return function() {
      jc(this, e).delay = +r.apply(this, arguments);
    };
  }
  function Fw(e, r) {
    return r = +r, function() {
      jc(this, e).delay = r;
    };
  }
  function Bw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? Ow : Fw)(r, e)) : hn(this.node(), r).delay;
  }
  function jw(e, r) {
    return function() {
      Nn(this, e).duration = +r.apply(this, arguments);
    };
  }
  function Hw(e, r) {
    return r = +r, function() {
      Nn(this, e).duration = r;
    };
  }
  function Vw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? jw : Hw)(r, e)) : hn(this.node(), r).duration;
  }
  function Uw(e, r) {
    if (typeof r != "function") throw new Error();
    return function() {
      Nn(this, e).ease = r;
    };
  }
  function Ww(e) {
    var r = this._id;
    return arguments.length ? this.each(Uw(r, e)) : hn(this.node(), r).ease;
  }
  function Yw(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      if (typeof o != "function") throw new Error();
      Nn(this, e).ease = o;
    };
  }
  function Gw(e) {
    if (typeof e != "function") throw new Error();
    return this.each(Yw(this._id, e));
  }
  function Xw(e) {
    typeof e != "function" && (e = g0(e));
    for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = i[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && f.push(m);
    return new Yn(i, this._parents, this._name, this._id);
  }
  function Kw(e) {
    if (e._id !== this._id) throw new Error();
    for (var r = this._groups, o = e._groups, i = r.length, l = o.length, u = Math.min(i, l), c = new Array(i), f = 0; f < u; ++f) for (var m = r[f], h = o[f], p = m.length, y = c[f] = new Array(p), v, x = 0; x < p; ++x) (v = m[x] || h[x]) && (y[x] = v);
    for (; f < i; ++f) c[f] = r[f];
    return new Yn(c, this._parents, this._name, this._id);
  }
  function Qw(e) {
    return (e + "").trim().split(/^|\s+/).every(function(r) {
      var o = r.indexOf(".");
      return o >= 0 && (r = r.slice(0, o)), !r || r === "start";
    });
  }
  function Zw(e, r, o) {
    var i, l, u = Qw(r) ? jc : Nn;
    return function() {
      var c = u(this, e), f = c.on;
      f !== i && (l = (i = f).copy()).on(r, o), c.on = l;
    };
  }
  function qw(e, r) {
    var o = this._id;
    return arguments.length < 2 ? hn(this.node(), o).on.on(e) : this.each(Zw(o, e, r));
  }
  function Jw(e) {
    return function() {
      var r = this.parentNode;
      for (var o in this.__transition) if (+o !== e) return;
      r && r.removeChild(this);
    };
  }
  function ex() {
    return this.on("end.remove", Jw(this._id));
  }
  function tx(e) {
    var r = this._name, o = this._id;
    typeof e != "function" && (e = Dc(e));
    for (var i = this._groups, l = i.length, u = new Array(l), c = 0; c < l; ++c) for (var f = i[c], m = f.length, h = u[c] = new Array(m), p, y, v = 0; v < m; ++v) (p = f[v]) && (y = e.call(p, p.__data__, v, f)) && ("__data__" in p && (y.__data__ = p.__data__), h[v] = y, Zl(h[v], r, o, v, h, hn(p, o)));
    return new Yn(u, this._parents, r, o);
  }
  function nx(e) {
    var r = this._name, o = this._id;
    typeof e != "function" && (e = m0(e));
    for (var i = this._groups, l = i.length, u = [], c = [], f = 0; f < l; ++f) for (var m = i[f], h = m.length, p, y = 0; y < h; ++y) if (p = m[y]) {
      for (var v = e.call(p, p.__data__, y, m), x, k = hn(p, o), S = 0, C = v.length; S < C; ++S) (x = v[S]) && Zl(x, r, o, S, v, k);
      u.push(v), c.push(p);
    }
    return new Yn(u, c, r, o);
  }
  var rx = Hs.prototype.constructor;
  function ox() {
    return new rx(this._groups, this._parents);
  }
  function sx(e, r) {
    var o, i, l;
    return function() {
      var u = Io(this, e), c = (this.style.removeProperty(e), Io(this, e));
      return u === c ? null : u === o && c === i ? l : l = r(o = u, i = c);
    };
  }
  function F0(e) {
    return function() {
      this.style.removeProperty(e);
    };
  }
  function ix(e, r, o) {
    var i, l = o + "", u;
    return function() {
      var c = Io(this, e);
      return c === l ? null : c === i ? u : u = r(i = c, o);
    };
  }
  function lx(e, r, o) {
    var i, l, u;
    return function() {
      var c = Io(this, e), f = o(this), m = f + "";
      return f == null && (m = f = (this.style.removeProperty(e), Io(this, e))), c === m ? null : c === i && m === l ? u : (l = m, u = r(i = c, f));
    };
  }
  function ax(e, r) {
    var o, i, l, u = "style." + r, c = "end." + u, f;
    return function() {
      var m = Nn(this, e), h = m.on, p = m.value[u] == null ? f || (f = F0(r)) : void 0;
      (h !== o || l !== p) && (i = (o = h).copy()).on(c, l = p), m.on = i;
    };
  }
  function ux(e, r, o) {
    var i = (e += "") == "transform" ? uw : O0;
    return r == null ? this.styleTween(e, sx(e, i)).on("end.style." + e, F0(e)) : typeof r == "function" ? this.styleTween(e, lx(e, i, Hc(this, "style." + e, r))).each(ax(this._id, e)) : this.styleTween(e, ix(e, i, r), o).on("end.style." + e, null);
  }
  function cx(e, r, o) {
    return function(i) {
      this.style.setProperty(e, r.call(this, i), o);
    };
  }
  function dx(e, r, o) {
    var i, l;
    function u() {
      var c = r.apply(this, arguments);
      return c !== l && (i = (l = c) && cx(e, c, o)), i;
    }
    return u._value = r, u;
  }
  function fx(e, r, o) {
    var i = "style." + (e += "");
    if (arguments.length < 2) return (i = this.tween(i)) && i._value;
    if (r == null) return this.tween(i, null);
    if (typeof r != "function") throw new Error();
    return this.tween(i, dx(e, r, o ?? ""));
  }
  function hx(e) {
    return function() {
      this.textContent = e;
    };
  }
  function px(e) {
    return function() {
      var r = e(this);
      this.textContent = r ?? "";
    };
  }
  function mx(e) {
    return this.tween("text", typeof e == "function" ? px(Hc(this, "text", e)) : hx(e == null ? "" : e + ""));
  }
  function gx(e) {
    return function(r) {
      this.textContent = e.call(this, r);
    };
  }
  function yx(e) {
    var r, o;
    function i() {
      var l = e.apply(this, arguments);
      return l !== o && (r = (o = l) && gx(l)), r;
    }
    return i._value = e, i;
  }
  function vx(e) {
    var r = "text";
    if (arguments.length < 1) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error();
    return this.tween(r, yx(e));
  }
  function wx() {
    for (var e = this._name, r = this._id, o = B0(), i = this._groups, l = i.length, u = 0; u < l; ++u) for (var c = i[u], f = c.length, m, h = 0; h < f; ++h) if (m = c[h]) {
      var p = hn(m, r);
      Zl(m, e, o, h, c, {
        time: p.time + p.delay + p.duration,
        delay: 0,
        duration: p.duration,
        ease: p.ease
      });
    }
    return new Yn(i, this._parents, e, o);
  }
  function xx() {
    var e, r, o = this, i = o._id, l = o.size();
    return new Promise(function(u, c) {
      var f = {
        value: c
      }, m = {
        value: function() {
          --l === 0 && u();
        }
      };
      o.each(function() {
        var h = Nn(this, i), p = h.on;
        p !== e && (r = (e = p).copy(), r._.cancel.push(f), r._.interrupt.push(f), r._.end.push(m)), h.on = r;
      }), l === 0 && u();
    });
  }
  var Sx = 0;
  function Yn(e, r, o, i) {
    this._groups = e, this._parents = r, this._name = o, this._id = i;
  }
  function B0() {
    return ++Sx;
  }
  var jn = Hs.prototype;
  Yn.prototype = {
    constructor: Yn,
    select: tx,
    selectAll: nx,
    selectChild: jn.selectChild,
    selectChildren: jn.selectChildren,
    filter: Xw,
    merge: Kw,
    selection: ox,
    transition: wx,
    call: jn.call,
    nodes: jn.nodes,
    node: jn.node,
    size: jn.size,
    empty: jn.empty,
    each: jn.each,
    on: qw,
    attr: $w,
    attrTween: Dw,
    style: ux,
    styleTween: fx,
    text: mx,
    textTween: vx,
    remove: ex,
    tween: _w,
    delay: Bw,
    duration: Vw,
    ease: Ww,
    easeVarying: Gw,
    end: xx,
    [Symbol.iterator]: jn[Symbol.iterator]
  };
  function kx(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
  }
  var Ex = {
    time: null,
    delay: 0,
    duration: 250,
    ease: kx
  };
  function Cx(e, r) {
    for (var o; !(o = e.__transition) || !(o = o[r]); ) if (!(e = e.parentNode)) throw new Error(`transition ${r} not found`);
    return o;
  }
  function _x(e) {
    var r, o;
    e instanceof Yn ? (r = e._id, e = e._name) : (r = B0(), (o = Ex).time = Bc(), e = e == null ? null : e + "");
    for (var i = this._groups, l = i.length, u = 0; u < l; ++u) for (var c = i[u], f = c.length, m, h = 0; h < f; ++h) (m = c[h]) && Zl(m, e, r, h, c, o || Cx(m, r));
    return new Yn(i, this._parents, e, r);
  }
  Hs.prototype.interrupt = kw;
  Hs.prototype.transition = _x;
  const gl = (e) => () => e;
  function Nx(e, { sourceEvent: r, target: o, transform: i, dispatch: l }) {
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
  function Vn(e, r, o) {
    this.k = e, this.x = r, this.y = o;
  }
  Vn.prototype = {
    constructor: Vn,
    scale: function(e) {
      return e === 1 ? this : new Vn(this.k * e, this.x, this.y);
    },
    translate: function(e, r) {
      return e === 0 & r === 0 ? this : new Vn(this.k, this.x + this.k * e, this.y + this.k * r);
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
  var Un = new Vn(1, 0, 0);
  Vn.prototype;
  function ec(e) {
    e.stopImmediatePropagation();
  }
  function ks(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function Mx(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button;
  }
  function bx() {
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
  function cp() {
    return this.__zoom || Un;
  }
  function Ix(e) {
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
  }
  function Tx() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Ax(e, r, o) {
    var i = e.invertX(r[0][0]) - o[0][0], l = e.invertX(r[1][0]) - o[1][0], u = e.invertY(r[0][1]) - o[0][1], c = e.invertY(r[1][1]) - o[1][1];
    return e.translate(l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l), c > u ? (u + c) / 2 : Math.min(0, u) || Math.max(0, c));
  }
  function j0() {
    var e = Mx, r = bx, o = Ax, i = Ix, l = Tx, u = [
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
    ], f = 250, m = pw, h = Xl("start", "zoom", "end"), p, y, v, x = 500, k = 150, S = 0, C = 10;
    function E(_) {
      _.property("__zoom", cp).on("wheel.zoom", q, {
        passive: false
      }).on("mousedown.zoom", G).on("dblclick.zoom", J).filter(l).on("touchstart.zoom", ee).on("touchmove.zoom", Y).on("touchend.zoom touchcancel.zoom", Z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    E.transform = function(_, V, O, K) {
      var B = _.selection ? _.selection() : _;
      B.property("__zoom", cp), _ !== B ? F(_, V, O, K) : B.interrupt().each(function() {
        z(this, arguments).event(K).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
      });
    }, E.scaleBy = function(_, V, O, K) {
      E.scaleTo(_, function() {
        var B = this.__zoom.k, $ = typeof V == "function" ? V.apply(this, arguments) : V;
        return B * $;
      }, O, K);
    }, E.scaleTo = function(_, V, O, K) {
      E.transform(_, function() {
        var B = r.apply(this, arguments), $ = this.__zoom, j = O == null ? I(B) : typeof O == "function" ? O.apply(this, arguments) : O, N = $.invert(j), D = typeof V == "function" ? V.apply(this, arguments) : V;
        return o(P(A($, D), j, N), B, c);
      }, O, K);
    }, E.translateBy = function(_, V, O, K) {
      E.transform(_, function() {
        return o(this.__zoom.translate(typeof V == "function" ? V.apply(this, arguments) : V, typeof O == "function" ? O.apply(this, arguments) : O), r.apply(this, arguments), c);
      }, null, K);
    }, E.translateTo = function(_, V, O, K, B) {
      E.transform(_, function() {
        var $ = r.apply(this, arguments), j = this.__zoom, N = K == null ? I($) : typeof K == "function" ? K.apply(this, arguments) : K;
        return o(Un.translate(N[0], N[1]).scale(j.k).translate(typeof V == "function" ? -V.apply(this, arguments) : -V, typeof O == "function" ? -O.apply(this, arguments) : -O), $, c);
      }, K, B);
    };
    function A(_, V) {
      return V = Math.max(u[0], Math.min(u[1], V)), V === _.k ? _ : new Vn(V, _.x, _.y);
    }
    function P(_, V, O) {
      var K = V[0] - O[0] * _.k, B = V[1] - O[1] * _.k;
      return K === _.x && B === _.y ? _ : new Vn(_.k, K, B);
    }
    function I(_) {
      return [
        (+_[0][0] + +_[1][0]) / 2,
        (+_[0][1] + +_[1][1]) / 2
      ];
    }
    function F(_, V, O, K) {
      _.on("start.zoom", function() {
        z(this, arguments).event(K).start();
      }).on("interrupt.zoom end.zoom", function() {
        z(this, arguments).event(K).end();
      }).tween("zoom", function() {
        var B = this, $ = arguments, j = z(B, $).event(K), N = r.apply(B, $), D = O == null ? I(N) : typeof O == "function" ? O.apply(B, $) : O, oe = Math.max(N[1][0] - N[0][0], N[1][1] - N[0][1]), ne = B.__zoom, le = typeof V == "function" ? V.apply(B, $) : V, ae = m(ne.invert(D).concat(oe / ne.k), le.invert(D).concat(oe / le.k));
        return function(he) {
          if (he === 1) he = le;
          else {
            var me = ae(he), ve = oe / me[2];
            he = new Vn(ve, D[0] - me[0] * ve, D[1] - me[1] * ve);
          }
          j.zoom(null, he);
        };
      });
    }
    function z(_, V, O) {
      return !O && _.__zooming || new Q(_, V);
    }
    function Q(_, V) {
      this.that = _, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = r.apply(_, V), this.taps = 0;
    }
    Q.prototype = {
      event: function(_) {
        return _ && (this.sourceEvent = _), this;
      },
      start: function() {
        return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
      },
      zoom: function(_, V) {
        return this.mouse && _ !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
      },
      end: function() {
        return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
      },
      emit: function(_) {
        var V = Qt(this.that).datum();
        h.call(_, this.that, new Nx(_, {
          sourceEvent: this.sourceEvent,
          target: E,
          transform: this.that.__zoom,
          dispatch: h
        }), V);
      }
    };
    function q(_, ...V) {
      if (!e.apply(this, arguments)) return;
      var O = z(this, V).event(_), K = this.__zoom, B = Math.max(u[0], Math.min(u[1], K.k * Math.pow(2, i.apply(this, arguments)))), $ = dn(_);
      if (O.wheel) (O.mouse[0][0] !== $[0] || O.mouse[0][1] !== $[1]) && (O.mouse[1] = K.invert(O.mouse[0] = $)), clearTimeout(O.wheel);
      else {
        if (K.k === B) return;
        O.mouse = [
          $,
          K.invert($)
        ], bl(this), O.start();
      }
      ks(_), O.wheel = setTimeout(j, k), O.zoom("mouse", o(P(A(K, B), O.mouse[0], O.mouse[1]), O.extent, c));
      function j() {
        O.wheel = null, O.end();
      }
    }
    function G(_, ...V) {
      if (v || !e.apply(this, arguments)) return;
      var O = _.currentTarget, K = z(this, V, true).event(_), B = Qt(_.view).on("mousemove.zoom", D, true).on("mouseup.zoom", oe, true), $ = dn(_, O), j = _.clientX, N = _.clientY;
      N0(_.view), ec(_), K.mouse = [
        $,
        this.__zoom.invert($)
      ], bl(this), K.start();
      function D(ne) {
        if (ks(ne), !K.moved) {
          var le = ne.clientX - j, ae = ne.clientY - N;
          K.moved = le * le + ae * ae > S;
        }
        K.event(ne).zoom("mouse", o(P(K.that.__zoom, K.mouse[0] = dn(ne, O), K.mouse[1]), K.extent, c));
      }
      function oe(ne) {
        B.on("mousemove.zoom mouseup.zoom", null), M0(ne.view, K.moved), ks(ne), K.event(ne).end();
      }
    }
    function J(_, ...V) {
      if (e.apply(this, arguments)) {
        var O = this.__zoom, K = dn(_.changedTouches ? _.changedTouches[0] : _, this), B = O.invert(K), $ = O.k * (_.shiftKey ? 0.5 : 2), j = o(P(A(O, $), K, B), r.apply(this, V), c);
        ks(_), f > 0 ? Qt(this).transition().duration(f).call(F, j, K, _) : Qt(this).call(E.transform, j, K, _);
      }
    }
    function ee(_, ...V) {
      if (e.apply(this, arguments)) {
        var O = _.touches, K = O.length, B = z(this, V, _.changedTouches.length === K).event(_), $, j, N, D;
        for (ec(_), j = 0; j < K; ++j) N = O[j], D = dn(N, this), D = [
          D,
          this.__zoom.invert(D),
          N.identifier
        ], B.touch0 ? !B.touch1 && B.touch0[2] !== D[2] && (B.touch1 = D, B.taps = 0) : (B.touch0 = D, $ = true, B.taps = 1 + !!p);
        p && (p = clearTimeout(p)), $ && (B.taps < 2 && (y = D[0], p = setTimeout(function() {
          p = null;
        }, x)), bl(this), B.start());
      }
    }
    function Y(_, ...V) {
      if (this.__zooming) {
        var O = z(this, V).event(_), K = _.changedTouches, B = K.length, $, j, N, D;
        for (ks(_), $ = 0; $ < B; ++$) j = K[$], N = dn(j, this), O.touch0 && O.touch0[2] === j.identifier ? O.touch0[0] = N : O.touch1 && O.touch1[2] === j.identifier && (O.touch1[0] = N);
        if (j = O.that.__zoom, O.touch1) {
          var oe = O.touch0[0], ne = O.touch0[1], le = O.touch1[0], ae = O.touch1[1], he = (he = le[0] - oe[0]) * he + (he = le[1] - oe[1]) * he, me = (me = ae[0] - ne[0]) * me + (me = ae[1] - ne[1]) * me;
          j = A(j, Math.sqrt(he / me)), N = [
            (oe[0] + le[0]) / 2,
            (oe[1] + le[1]) / 2
          ], D = [
            (ne[0] + ae[0]) / 2,
            (ne[1] + ae[1]) / 2
          ];
        } else if (O.touch0) N = O.touch0[0], D = O.touch0[1];
        else return;
        O.zoom("touch", o(P(j, N, D), O.extent, c));
      }
    }
    function Z(_, ...V) {
      if (this.__zooming) {
        var O = z(this, V).event(_), K = _.changedTouches, B = K.length, $, j;
        for (ec(_), v && clearTimeout(v), v = setTimeout(function() {
          v = null;
        }, x), $ = 0; $ < B; ++$) j = K[$], O.touch0 && O.touch0[2] === j.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === j.identifier && delete O.touch1;
        if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
        else if (O.end(), O.taps === 2 && (j = dn(j, this), Math.hypot(y[0] - j[0], y[1] - j[1]) < C)) {
          var N = Qt(this).on("dblclick.zoom");
          N && N.apply(this, arguments);
        }
      }
    }
    return E.wheelDelta = function(_) {
      return arguments.length ? (i = typeof _ == "function" ? _ : gl(+_), E) : i;
    }, E.filter = function(_) {
      return arguments.length ? (e = typeof _ == "function" ? _ : gl(!!_), E) : e;
    }, E.touchable = function(_) {
      return arguments.length ? (l = typeof _ == "function" ? _ : gl(!!_), E) : l;
    }, E.extent = function(_) {
      return arguments.length ? (r = typeof _ == "function" ? _ : gl([
        [
          +_[0][0],
          +_[0][1]
        ],
        [
          +_[1][0],
          +_[1][1]
        ]
      ]), E) : r;
    }, E.scaleExtent = function(_) {
      return arguments.length ? (u[0] = +_[0], u[1] = +_[1], E) : [
        u[0],
        u[1]
      ];
    }, E.translateExtent = function(_) {
      return arguments.length ? (c[0][0] = +_[0][0], c[1][0] = +_[1][0], c[0][1] = +_[0][1], c[1][1] = +_[1][1], E) : [
        [
          c[0][0],
          c[0][1]
        ],
        [
          c[1][0],
          c[1][1]
        ]
      ];
    }, E.constrain = function(_) {
      return arguments.length ? (o = _, E) : o;
    }, E.duration = function(_) {
      return arguments.length ? (f = +_, E) : f;
    }, E.interpolate = function(_) {
      return arguments.length ? (m = _, E) : m;
    }, E.on = function() {
      var _ = h.on.apply(h, arguments);
      return _ === h ? E : _;
    }, E.clickDistance = function(_) {
      return arguments.length ? (S = (_ = +_) * _, E) : Math.sqrt(S);
    }, E.tapDistance = function(_) {
      return arguments.length ? (C = +_, E) : C;
    }, E;
  }
  var $x = f0();
  const ql = L.createContext(null), Rx = ql.Provider, Gn = {
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
  }, H0 = Gn.error001();
  function Re(e, r) {
    const o = L.useContext(ql);
    if (o === null) throw new Error(H0);
    return h0(o, e, r);
  }
  const rt = () => {
    const e = L.useContext(ql);
    if (e === null) throw new Error(H0);
    return L.useMemo(() => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
      destroy: e.destroy
    }), [
      e
    ]);
  }, Px = (e) => e.userSelectionActive ? "none" : "all";
  function Vc({ position: e, children: r, className: o, style: i, ...l }) {
    const u = Re(Px), c = `${e}`.split("-");
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
  function zx({ proOptions: e, position: r = "bottom-right" }) {
    return (e == null ? void 0 : e.hideAttribution) ? null : X.createElement(Vc, {
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
  const Lx = ({ x: e, y: r, label: o, labelStyle: i = {}, labelShowBg: l = true, labelBgStyle: u = {}, labelBgPadding: c = [
    2,
    4
  ], labelBgBorderRadius: f = 2, children: m, className: h, ...p }) => {
    const y = L.useRef(null), [v, x] = L.useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }), k = ct([
      "react-flow__edge-textwrapper",
      h
    ]);
    return L.useEffect(() => {
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
    ]), typeof o > "u" || !o ? null : X.createElement("g", {
      transform: `translate(${e - v.width / 2} ${r - v.height / 2})`,
      className: k,
      visibility: v.width ? "visible" : "hidden",
      ...p
    }, l && X.createElement("rect", {
      width: v.width + 2 * c[0],
      x: -c[0],
      y: -c[1],
      height: v.height + 2 * c[1],
      className: "react-flow__edge-textbg",
      style: u,
      rx: f,
      ry: f
    }), X.createElement("text", {
      className: "react-flow__edge-text",
      y: v.height / 2,
      dy: "0.3em",
      ref: y,
      style: i
    }, o), m);
  };
  var Dx = L.memo(Lx);
  const Uc = (e) => ({
    width: e.offsetWidth,
    height: e.offsetHeight
  }), Ao = (e, r = 0, o = 1) => Math.min(Math.max(e, r), o), Wc = (e = {
    x: 0,
    y: 0
  }, r) => ({
    x: Ao(e.x, r[0][0], r[1][0]),
    y: Ao(e.y, r[0][1], r[1][1])
  }), dp = (e, r, o) => e < r ? Ao(Math.abs(e - r), 1, 50) / 50 : e > o ? -Ao(Math.abs(e - o), 1, 50) / 50 : 0, V0 = (e, r) => {
    const o = dp(e.x, 35, r.width - 35) * 20, i = dp(e.y, 35, r.height - 35) * 20;
    return [
      o,
      i
    ];
  }, U0 = (e) => {
    var _a;
    return ((_a = e.getRootNode) == null ? void 0 : _a.call(e)) || (window == null ? void 0 : window.document);
  }, W0 = (e, r) => ({
    x: Math.min(e.x, r.x),
    y: Math.min(e.y, r.y),
    x2: Math.max(e.x2, r.x2),
    y2: Math.max(e.y2, r.y2)
  }), zs = ({ x: e, y: r, width: o, height: i }) => ({
    x: e,
    y: r,
    x2: e + o,
    y2: r + i
  }), Y0 = ({ x: e, y: r, x2: o, y2: i }) => ({
    x: e,
    y: r,
    width: o - e,
    height: i - r
  }), fp = (e) => ({
    ...e.positionAbsolute || {
      x: 0,
      y: 0
    },
    width: e.width || 0,
    height: e.height || 0
  }), Ox = (e, r) => Y0(W0(zs(e), zs(r))), xc = (e, r) => {
    const o = Math.max(0, Math.min(e.x + e.width, r.x + r.width) - Math.max(e.x, r.x)), i = Math.max(0, Math.min(e.y + e.height, r.y + r.height) - Math.max(e.y, r.y));
    return Math.ceil(o * i);
  }, Fx = (e) => Zt(e.width) && Zt(e.height) && Zt(e.x) && Zt(e.y), Zt = (e) => !isNaN(e) && isFinite(e), Ge = Symbol.for("internals"), G0 = [
    "Enter",
    " ",
    "Escape"
  ], Bx = (e, r) => {
  }, jx = (e) => "nativeEvent" in e;
  function Sc(e) {
    var _a, _b, _c2;
    const o = ((_c2 = (_b = (_a = jx(e) ? e.nativeEvent : e).composedPath) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c2[0]) || e.target;
    return [
      "INPUT",
      "SELECT",
      "TEXTAREA"
    ].includes(o == null ? void 0 : o.nodeName) || (o == null ? void 0 : o.hasAttribute("contenteditable")) || !!(o == null ? void 0 : o.closest(".nokey"));
  }
  const X0 = (e) => "clientX" in e, vr = (e, r) => {
    var _a, _b;
    const o = X0(e), i = o ? e.clientX : (_a = e.touches) == null ? void 0 : _a[0].clientX, l = o ? e.clientY : (_b = e.touches) == null ? void 0 : _b[0].clientY;
    return {
      x: i - ((r == null ? void 0 : r.left) ?? 0),
      y: l - ((r == null ? void 0 : r.top) ?? 0)
    };
  }, Bl = () => {
    var _a;
    return typeof navigator < "u" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
  }, Po = ({ id: e, path: r, labelX: o, labelY: i, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: p, markerEnd: y, markerStart: v, interactionWidth: x = 20 }) => X.createElement(X.Fragment, null, X.createElement("path", {
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
  }), l && Zt(o) && Zt(i) ? X.createElement(Dx, {
    x: o,
    y: i,
    label: l,
    labelStyle: u,
    labelShowBg: c,
    labelBgStyle: f,
    labelBgPadding: m,
    labelBgBorderRadius: h
  }) : null);
  Po.displayName = "BaseEdge";
  function Es(e, r, o) {
    return o === void 0 ? o : (i) => {
      const l = r().edges.find((u) => u.id === e);
      l && o(i, {
        ...l
      });
    };
  }
  function K0({ sourceX: e, sourceY: r, targetX: o, targetY: i }) {
    const l = Math.abs(o - e) / 2, u = o < e ? o + l : o - l, c = Math.abs(i - r) / 2, f = i < r ? i + c : i - c;
    return [
      u,
      f,
      l,
      c
    ];
  }
  function Q0({ sourceX: e, sourceY: r, targetX: o, targetY: i, sourceControlX: l, sourceControlY: u, targetControlX: c, targetControlY: f }) {
    const m = e * 0.125 + l * 0.375 + c * 0.375 + o * 0.125, h = r * 0.125 + u * 0.375 + f * 0.375 + i * 0.125, p = Math.abs(m - e), y = Math.abs(h - r);
    return [
      m,
      h,
      p,
      y
    ];
  }
  var Gr;
  (function(e) {
    e.Strict = "strict", e.Loose = "loose";
  })(Gr || (Gr = {}));
  var jr;
  (function(e) {
    e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
  })(jr || (jr = {}));
  var Ls;
  (function(e) {
    e.Partial = "partial", e.Full = "full";
  })(Ls || (Ls = {}));
  var yr;
  (function(e) {
    e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
  })(yr || (yr = {}));
  var $o;
  (function(e) {
    e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
  })($o || ($o = {}));
  var ge;
  (function(e) {
    e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
  })(ge || (ge = {}));
  function hp({ pos: e, x1: r, y1: o, x2: i, y2: l }) {
    return e === ge.Left || e === ge.Right ? [
      0.5 * (r + i),
      o
    ] : [
      r,
      0.5 * (o + l)
    ];
  }
  function Z0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: i, targetY: l, targetPosition: u = ge.Top }) {
    const [c, f] = hp({
      pos: o,
      x1: e,
      y1: r,
      x2: i,
      y2: l
    }), [m, h] = hp({
      pos: u,
      x1: i,
      y1: l,
      x2: e,
      y2: r
    }), [p, y, v, x] = Q0({
      sourceX: e,
      sourceY: r,
      targetX: i,
      targetY: l,
      sourceControlX: c,
      sourceControlY: f,
      targetControlX: m,
      targetControlY: h
    });
    return [
      `M${e},${r} C${c},${f} ${m},${h} ${i},${l}`,
      p,
      y,
      v,
      x
    ];
  }
  const Yc = L.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: f, labelShowBg: m, labelBgStyle: h, labelBgPadding: p, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: k, interactionWidth: S }) => {
    const [C, E, A] = Z0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: i,
      targetPosition: u
    });
    return X.createElement(Po, {
      path: C,
      labelX: E,
      labelY: A,
      label: c,
      labelStyle: f,
      labelShowBg: m,
      labelBgStyle: h,
      labelBgPadding: p,
      labelBgBorderRadius: y,
      style: v,
      markerEnd: x,
      markerStart: k,
      interactionWidth: S
    });
  });
  Yc.displayName = "SimpleBezierEdge";
  const pp = {
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
  }, Hx = ({ source: e, sourcePosition: r = ge.Bottom, target: o }) => r === ge.Left || r === ge.Right ? e.x < o.x ? {
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
  }, mp = (e, r) => Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
  function Vx({ source: e, sourcePosition: r = ge.Bottom, target: o, targetPosition: i = ge.Top, center: l, offset: u }) {
    const c = pp[r], f = pp[i], m = {
      x: e.x + c.x * u,
      y: e.y + c.y * u
    }, h = {
      x: o.x + f.x * u,
      y: o.y + f.y * u
    }, p = Hx({
      source: m,
      sourcePosition: r,
      target: h
    }), y = p.x !== 0 ? "x" : "y", v = p[y];
    let x = [], k, S;
    const C = {
      x: 0,
      y: 0
    }, E = {
      x: 0,
      y: 0
    }, [A, P, I, F] = K0({
      sourceX: e.x,
      sourceY: e.y,
      targetX: o.x,
      targetY: o.y
    });
    if (c[y] * f[y] === -1) {
      k = l.x ?? A, S = l.y ?? P;
      const Q = [
        {
          x: k,
          y: m.y
        },
        {
          x: k,
          y: h.y
        }
      ], q = [
        {
          x: m.x,
          y: S
        },
        {
          x: h.x,
          y: S
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
        const Z = Math.abs(e[y] - o[y]);
        if (Z <= u) {
          const _ = Math.min(u - 1, u - Z);
          c[y] === v ? C[y] = (m[y] > e[y] ? -1 : 1) * _ : E[y] = (h[y] > o[y] ? -1 : 1) * _;
        }
      }
      if (r !== i) {
        const Z = y === "x" ? "y" : "x", _ = c[y] === f[Z], V = m[Z] > h[Z], O = m[Z] < h[Z];
        (c[y] === 1 && (!_ && V || _ && O) || c[y] !== 1 && (!_ && O || _ && V)) && (x = y === "x" ? Q : q);
      }
      const G = {
        x: m.x + C.x,
        y: m.y + C.y
      }, J = {
        x: h.x + E.x,
        y: h.y + E.y
      }, ee = Math.max(Math.abs(G.x - x[0].x), Math.abs(J.x - x[0].x)), Y = Math.max(Math.abs(G.y - x[0].y), Math.abs(J.y - x[0].y));
      ee >= Y ? (k = (G.x + J.x) / 2, S = x[0].y) : (k = x[0].x, S = (G.y + J.y) / 2);
    }
    return [
      [
        e,
        {
          x: m.x + C.x,
          y: m.y + C.y
        },
        ...x,
        {
          x: h.x + E.x,
          y: h.y + E.y
        },
        o
      ],
      k,
      S,
      I,
      F
    ];
  }
  function Ux(e, r, o, i) {
    const l = Math.min(mp(e, r) / 2, mp(r, o) / 2, i), { x: u, y: c } = r;
    if (e.x === u && u === o.x || e.y === c && c === o.y) return `L${u} ${c}`;
    if (e.y === c) {
      const h = e.x < o.x ? -1 : 1, p = e.y < o.y ? 1 : -1;
      return `L ${u + l * h},${c}Q ${u},${c} ${u},${c + l * p}`;
    }
    const f = e.x < o.x ? 1 : -1, m = e.y < o.y ? -1 : 1;
    return `L ${u},${c + l * m}Q ${u},${c} ${u + l * f},${c}`;
  }
  function jl({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: i, targetY: l, targetPosition: u = ge.Top, borderRadius: c = 5, centerX: f, centerY: m, offset: h = 20 }) {
    const [p, y, v, x, k] = Vx({
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
        x: f,
        y: m
      },
      offset: h
    });
    return [
      p.reduce((C, E, A) => {
        let P = "";
        return A > 0 && A < p.length - 1 ? P = Ux(p[A - 1], E, p[A + 1], c) : P = `${A === 0 ? "M" : "L"}${E.x} ${E.y}`, C += P, C;
      }, ""),
      y,
      v,
      x,
      k
    ];
  }
  const Jl = L.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: p, sourcePosition: y = ge.Bottom, targetPosition: v = ge.Top, markerEnd: x, markerStart: k, pathOptions: S, interactionWidth: C }) => {
    const [E, A, P] = jl({
      sourceX: e,
      sourceY: r,
      sourcePosition: y,
      targetX: o,
      targetY: i,
      targetPosition: v,
      borderRadius: S == null ? void 0 : S.borderRadius,
      offset: S == null ? void 0 : S.offset
    });
    return X.createElement(Po, {
      path: E,
      labelX: A,
      labelY: P,
      label: l,
      labelStyle: u,
      labelShowBg: c,
      labelBgStyle: f,
      labelBgPadding: m,
      labelBgBorderRadius: h,
      style: p,
      markerEnd: x,
      markerStart: k,
      interactionWidth: C
    });
  });
  Jl.displayName = "SmoothStepEdge";
  const Gc = L.memo((e) => {
    var _a;
    return X.createElement(Jl, {
      ...e,
      pathOptions: L.useMemo(() => {
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
  Gc.displayName = "StepEdge";
  function Wx({ sourceX: e, sourceY: r, targetX: o, targetY: i }) {
    const [l, u, c, f] = K0({
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
      f
    ];
  }
  const Xc = L.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: p, markerEnd: y, markerStart: v, interactionWidth: x }) => {
    const [k, S, C] = Wx({
      sourceX: e,
      sourceY: r,
      targetX: o,
      targetY: i
    });
    return X.createElement(Po, {
      path: k,
      labelX: S,
      labelY: C,
      label: l,
      labelStyle: u,
      labelShowBg: c,
      labelBgStyle: f,
      labelBgPadding: m,
      labelBgBorderRadius: h,
      style: p,
      markerEnd: y,
      markerStart: v,
      interactionWidth: x
    });
  });
  Xc.displayName = "StraightEdge";
  function yl(e, r) {
    return e >= 0 ? 0.5 * e : r * 25 * Math.sqrt(-e);
  }
  function gp({ pos: e, x1: r, y1: o, x2: i, y2: l, c: u }) {
    switch (e) {
      case ge.Left:
        return [
          r - yl(r - i, u),
          o
        ];
      case ge.Right:
        return [
          r + yl(i - r, u),
          o
        ];
      case ge.Top:
        return [
          r,
          o - yl(o - l, u)
        ];
      case ge.Bottom:
        return [
          r,
          o + yl(l - o, u)
        ];
    }
  }
  function q0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: i, targetY: l, targetPosition: u = ge.Top, curvature: c = 0.25 }) {
    const [f, m] = gp({
      pos: o,
      x1: e,
      y1: r,
      x2: i,
      y2: l,
      c
    }), [h, p] = gp({
      pos: u,
      x1: i,
      y1: l,
      x2: e,
      y2: r,
      c
    }), [y, v, x, k] = Q0({
      sourceX: e,
      sourceY: r,
      targetX: i,
      targetY: l,
      sourceControlX: f,
      sourceControlY: m,
      targetControlX: h,
      targetControlY: p
    });
    return [
      `M${e},${r} C${f},${m} ${h},${p} ${i},${l}`,
      y,
      v,
      x,
      k
    ];
  }
  const Hl = L.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: i, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: f, labelShowBg: m, labelBgStyle: h, labelBgPadding: p, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: k, pathOptions: S, interactionWidth: C }) => {
    const [E, A, P] = q0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: i,
      targetPosition: u,
      curvature: S == null ? void 0 : S.curvature
    });
    return X.createElement(Po, {
      path: E,
      labelX: A,
      labelY: P,
      label: c,
      labelStyle: f,
      labelShowBg: m,
      labelBgStyle: h,
      labelBgPadding: p,
      labelBgBorderRadius: y,
      style: v,
      markerEnd: x,
      markerStart: k,
      interactionWidth: C
    });
  });
  Hl.displayName = "BezierEdge";
  const Kc = L.createContext(null), Yx = Kc.Provider;
  Kc.Consumer;
  const Gx = () => L.useContext(Kc), Xx = (e) => "id" in e && "source" in e && "target" in e, Kx = ({ source: e, sourceHandle: r, target: o, targetHandle: i }) => `reactflow__edge-${e}${r || ""}-${o}${i || ""}`, kc = (e, r) => typeof e > "u" ? "" : typeof e == "string" ? e : `${r ? `${r}__` : ""}${Object.keys(e).sort().map((i) => `${i}=${e[i]}`).join("&")}`, Qx = (e, r) => r.some((o) => o.source === e.source && o.target === e.target && (o.sourceHandle === e.sourceHandle || !o.sourceHandle && !e.sourceHandle) && (o.targetHandle === e.targetHandle || !o.targetHandle && !e.targetHandle)), Zx = (e, r) => {
    if (!e.source || !e.target) return r;
    let o;
    return Xx(e) ? o = {
      ...e
    } : o = {
      ...e,
      id: Kx(e)
    }, Qx(o, r) ? r : r.concat(o);
  }, Ec = ({ x: e, y: r }, [o, i, l], u, [c, f]) => {
    const m = {
      x: (e - o) / l,
      y: (r - i) / l
    };
    return u ? {
      x: c * Math.round(m.x / c),
      y: f * Math.round(m.y / f)
    } : m;
  }, J0 = ({ x: e, y: r }, [o, i, l]) => ({
    x: e * l + o,
    y: r * l + i
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
  }, ea = (e, r = [
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
      const { x: u, y: c } = Vr(l, r).positionAbsolute;
      return W0(i, zs({
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
    return Y0(o);
  }, em = (e, r, [o, i, l] = [
    0,
    0,
    1
  ], u = false, c = false, f = [
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
      const { width: y, height: v, selectable: x = true, hidden: k = false } = p;
      if (c && !x || k) return false;
      const { positionAbsolute: S } = Vr(p, f), C = {
        x: S.x,
        y: S.y,
        width: y || 0,
        height: v || 0
      }, E = xc(m, C), A = typeof y > "u" || typeof v > "u" || y === null || v === null, P = u && E > 0, I = (y || 0) * (v || 0);
      (A || P || E >= I || p.dragging) && h.push(p);
    }), h;
  }, tm = (e, r) => {
    const o = e.map((i) => i.id);
    return r.filter((i) => o.includes(i.source) || o.includes(i.target));
  }, nm = (e, r, o, i, l, u = 0.1) => {
    const c = r / (e.width * (1 + u)), f = o / (e.height * (1 + u)), m = Math.min(c, f), h = Ao(m, i, l), p = e.x + e.width / 2, y = e.y + e.height / 2, v = r / 2 - p * h, x = o / 2 - y * h;
    return {
      x: v,
      y: x,
      zoom: h
    };
  }, Fr = (e, r = 0) => e.transition().duration(r);
  function yp(e, r, o, i) {
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
  function qx(e, r, o, i, l, u) {
    const { x: c, y: f } = vr(e), h = r.elementsFromPoint(c, f).find((k) => k.classList.contains("react-flow__handle"));
    if (h) {
      const k = h.getAttribute("data-nodeid");
      if (k) {
        const S = Qc(void 0, h), C = h.getAttribute("data-handleid"), E = u({
          nodeId: k,
          id: C,
          type: S
        });
        if (E) {
          const A = l.find((P) => P.nodeId === k && P.type === S && P.id === C);
          return {
            handle: {
              id: C,
              type: S,
              nodeId: k,
              x: (A == null ? void 0 : A.x) || o.x,
              y: (A == null ? void 0 : A.y) || o.y
            },
            validHandleResult: E
          };
        }
      }
    }
    let p = [], y = 1 / 0;
    if (l.forEach((k) => {
      const S = Math.sqrt((k.x - o.x) ** 2 + (k.y - o.y) ** 2);
      if (S <= i) {
        const C = u(k);
        S <= y && (S < y ? p = [
          {
            handle: k,
            validHandleResult: C
          }
        ] : S === y && p.push({
          handle: k,
          validHandleResult: C
        }), y = S);
      }
    }), !p.length) return {
      handle: null,
      validHandleResult: rm()
    };
    if (p.length === 1) return p[0];
    const v = p.some(({ validHandleResult: k }) => k.isValid), x = p.some(({ handle: k }) => k.type === "target");
    return p.find(({ handle: k, validHandleResult: S }) => x ? k.type === "target" : v ? S.isValid : true) || p[0];
  }
  const Jx = {
    source: null,
    target: null,
    sourceHandle: null,
    targetHandle: null
  }, rm = () => ({
    handleDomNode: null,
    isValid: false,
    connection: Jx,
    endHandle: null
  });
  function om(e, r, o, i, l, u, c) {
    const f = l === "target", m = c.querySelector(`.react-flow__handle[data-id="${e == null ? void 0 : e.nodeId}-${e == null ? void 0 : e.id}-${e == null ? void 0 : e.type}"]`), h = {
      ...rm(),
      handleDomNode: m
    };
    if (m) {
      const p = Qc(void 0, m), y = m.getAttribute("data-nodeid"), v = m.getAttribute("data-handleid"), x = m.classList.contains("connectable"), k = m.classList.contains("connectableend"), S = {
        source: f ? y : o,
        sourceHandle: f ? v : i,
        target: f ? o : y,
        targetHandle: f ? i : v
      };
      h.connection = S, x && k && (r === Gr.Strict ? f && p === "source" || !f && p === "target" : y !== o || v !== i) && (h.endHandle = {
        nodeId: y,
        handleId: v,
        type: p
      }, h.isValid = u(S));
    }
    return h;
  }
  function eS({ nodes: e, nodeId: r, handleId: o, handleType: i }) {
    return e.reduce((l, u) => {
      if (u[Ge]) {
        const { handleBounds: c } = u[Ge];
        let f = [], m = [];
        c && (f = yp(u, c, "source", `${r}-${o}-${i}`), m = yp(u, c, "target", `${r}-${o}-${i}`)), l.push(...f, ...m);
      }
      return l;
    }, []);
  }
  function Qc(e, r) {
    return e || ((r == null ? void 0 : r.classList.contains("target")) ? "target" : (r == null ? void 0 : r.classList.contains("source")) ? "source" : null);
  }
  function tc(e) {
    e == null ? void 0 : e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
  }
  function tS(e, r) {
    let o = null;
    return r ? o = "valid" : e && !r && (o = "invalid"), o;
  }
  function sm({ event: e, handleId: r, nodeId: o, onConnect: i, isTarget: l, getState: u, setState: c, isValidConnection: f, edgeUpdaterType: m, onReconnectEnd: h }) {
    const p = U0(e.target), { connectionMode: y, domNode: v, autoPanOnConnect: x, connectionRadius: k, onConnectStart: S, panBy: C, getNodes: E, cancelConnection: A } = u();
    let P = 0, I;
    const { x: F, y: z } = vr(e), Q = p == null ? void 0 : p.elementFromPoint(F, z), q = Qc(m, Q), G = v == null ? void 0 : v.getBoundingClientRect();
    if (!G || !q) return;
    let J, ee = vr(e, G), Y = false, Z = null, _ = false, V = null;
    const O = eS({
      nodes: E(),
      nodeId: o,
      handleId: r,
      handleType: q
    }), K = () => {
      if (!x) return;
      const [j, N] = V0(ee, G);
      C({
        x: j,
        y: N
      }), P = requestAnimationFrame(K);
    };
    c({
      connectionPosition: ee,
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
    }), S == null ? void 0 : S(e, {
      nodeId: o,
      handleId: r,
      handleType: q
    });
    function B(j) {
      const { transform: N } = u();
      ee = vr(j, G);
      const { handle: D, validHandleResult: oe } = qx(j, p, Ec(ee, N, false, [
        1,
        1
      ]), k, O, (ne) => om(ne, y, o, r, l ? "target" : "source", f, p));
      if (I = D, Y || (K(), Y = true), V = oe.handleDomNode, Z = oe.connection, _ = oe.isValid, c({
        connectionPosition: I && _ ? J0({
          x: I.x,
          y: I.y
        }, N) : ee,
        connectionStatus: tS(!!I, _),
        connectionEndHandle: oe.endHandle
      }), !I && !_ && !V) return tc(J);
      Z.source !== Z.target && V && (tc(J), J = V, V.classList.add("connecting", "react-flow__handle-connecting"), V.classList.toggle("valid", _), V.classList.toggle("react-flow__handle-valid", _));
    }
    function $(j) {
      var _a, _b;
      (I || V) && Z && _ && (i == null ? void 0 : i(Z)), (_b = (_a = u()).onConnectEnd) == null ? void 0 : _b.call(_a, j), m && (h == null ? void 0 : h(j)), tc(J), A(), cancelAnimationFrame(P), Y = false, _ = false, Z = null, V = null, p.removeEventListener("mousemove", B), p.removeEventListener("mouseup", $), p.removeEventListener("touchmove", B), p.removeEventListener("touchend", $);
    }
    p.addEventListener("mousemove", B), p.addEventListener("mouseup", $), p.addEventListener("touchmove", B), p.addEventListener("touchend", $);
  }
  const vp = () => true, nS = (e) => ({
    connectionStartHandle: e.connectionStartHandle,
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName
  }), rS = (e, r, o) => (i) => {
    const { connectionStartHandle: l, connectionEndHandle: u, connectionClickStartHandle: c } = i;
    return {
      connecting: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.handleId) === r && (l == null ? void 0 : l.type) === o || (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.handleId) === r && (u == null ? void 0 : u.type) === o,
      clickConnecting: (c == null ? void 0 : c.nodeId) === e && (c == null ? void 0 : c.handleId) === r && (c == null ? void 0 : c.type) === o
    };
  }, im = L.forwardRef(({ type: e = "source", position: r = ge.Top, isValidConnection: o, isConnectable: i = true, isConnectableStart: l = true, isConnectableEnd: u = true, id: c, onConnect: f, children: m, className: h, onMouseDown: p, onTouchStart: y, ...v }, x) => {
    var _a, _b;
    const k = c || null, S = e === "target", C = rt(), E = Gx(), { connectOnClick: A, noPanClassName: P } = Re(nS, At), { connecting: I, clickConnecting: F } = Re(rS(E, k, e), At);
    E || ((_b = (_a = C.getState()).onError) == null ? void 0 : _b.call(_a, "010", Gn.error010()));
    const z = (G) => {
      const { defaultEdgeOptions: J, onConnect: ee, hasDefaultEdges: Y } = C.getState(), Z = {
        ...J,
        ...G
      };
      if (Y) {
        const { edges: _, setEdges: V } = C.getState();
        V(Zx(Z, _));
      }
      ee == null ? void 0 : ee(Z), f == null ? void 0 : f(Z);
    }, Q = (G) => {
      if (!E) return;
      const J = X0(G);
      l && (J && G.button === 0 || !J) && sm({
        event: G,
        handleId: k,
        nodeId: E,
        onConnect: z,
        isTarget: S,
        getState: C.getState,
        setState: C.setState,
        isValidConnection: o || C.getState().isValidConnection || vp
      }), J ? p == null ? void 0 : p(G) : y == null ? void 0 : y(G);
    }, q = (G) => {
      const { onClickConnectStart: J, onClickConnectEnd: ee, connectionClickStartHandle: Y, connectionMode: Z, isValidConnection: _ } = C.getState();
      if (!E || !Y && !l) return;
      if (!Y) {
        J == null ? void 0 : J(G, {
          nodeId: E,
          handleId: k,
          handleType: e
        }), C.setState({
          connectionClickStartHandle: {
            nodeId: E,
            type: e,
            handleId: k
          }
        });
        return;
      }
      const V = U0(G.target), O = o || _ || vp, { connection: K, isValid: B } = om({
        nodeId: E,
        id: k,
        type: e
      }, Z, Y.nodeId, Y.handleId || null, Y.type, O, V);
      B && z(K), ee == null ? void 0 : ee(G), C.setState({
        connectionClickStartHandle: null
      });
    };
    return X.createElement("div", {
      "data-handleid": k,
      "data-nodeid": E,
      "data-handlepos": r,
      "data-id": `${E}-${k}-${e}`,
      className: ct([
        "react-flow__handle",
        `react-flow__handle-${r}`,
        "nodrag",
        P,
        h,
        {
          source: !S,
          target: S,
          connectable: i,
          connectablestart: l,
          connectableend: u,
          connecting: F,
          connectionindicator: i && (l && !I || u && I)
        }
      ]),
      onMouseDown: Q,
      onTouchStart: Q,
      onClick: A ? q : void 0,
      ref: x,
      ...v
    }, m);
  });
  im.displayName = "Handle";
  var wr = L.memo(im);
  const lm = ({ data: e, isConnectable: r, targetPosition: o = ge.Top, sourcePosition: i = ge.Bottom }) => X.createElement(X.Fragment, null, X.createElement(wr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label, X.createElement(wr, {
    type: "source",
    position: i,
    isConnectable: r
  }));
  lm.displayName = "DefaultNode";
  var Cc = L.memo(lm);
  const am = ({ data: e, isConnectable: r, sourcePosition: o = ge.Bottom }) => X.createElement(X.Fragment, null, e == null ? void 0 : e.label, X.createElement(wr, {
    type: "source",
    position: o,
    isConnectable: r
  }));
  am.displayName = "InputNode";
  var um = L.memo(am);
  const cm = ({ data: e, isConnectable: r, targetPosition: o = ge.Top }) => X.createElement(X.Fragment, null, X.createElement(wr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label);
  cm.displayName = "OutputNode";
  var dm = L.memo(cm);
  const Zc = () => null;
  Zc.displayName = "GroupNode";
  const oS = (e) => ({
    selectedNodes: e.getNodes().filter((r) => r.selected),
    selectedEdges: e.edges.filter((r) => r.selected).map((r) => ({
      ...r
    }))
  }), vl = (e) => e.id;
  function sS(e, r) {
    return At(e.selectedNodes.map(vl), r.selectedNodes.map(vl)) && At(e.selectedEdges.map(vl), r.selectedEdges.map(vl));
  }
  const fm = L.memo(({ onSelectionChange: e }) => {
    const r = rt(), { selectedNodes: o, selectedEdges: i } = Re(oS, sS);
    return L.useEffect(() => {
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
  fm.displayName = "SelectionListener";
  const iS = (e) => !!e.onSelectionChange;
  function lS({ onSelectionChange: e }) {
    const r = Re(iS);
    return e || r ? X.createElement(fm, {
      onSelectionChange: e
    }) : null;
  }
  const aS = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset
  });
  function So(e, r) {
    L.useEffect(() => {
      typeof e < "u" && r(e);
    }, [
      e
    ]);
  }
  function _e(e, r, o) {
    L.useEffect(() => {
      typeof r < "u" && o({
        [e]: r
      });
    }, [
      r
    ]);
  }
  const uS = ({ nodes: e, edges: r, defaultNodes: o, defaultEdges: i, onConnect: l, onConnectStart: u, onConnectEnd: c, onClickConnectStart: f, onClickConnectEnd: m, nodesDraggable: h, nodesConnectable: p, nodesFocusable: y, edgesFocusable: v, edgesUpdatable: x, elevateNodesOnSelect: k, minZoom: S, maxZoom: C, nodeExtent: E, onNodesChange: A, onEdgesChange: P, elementsSelectable: I, connectionMode: F, snapGrid: z, snapToGrid: Q, translateExtent: q, connectOnClick: G, defaultEdgeOptions: J, fitView: ee, fitViewOptions: Y, onNodesDelete: Z, onEdgesDelete: _, onNodeDrag: V, onNodeDragStart: O, onNodeDragStop: K, onSelectionDrag: B, onSelectionDragStart: $, onSelectionDragStop: j, noPanClassName: N, nodeOrigin: D, rfId: oe, autoPanOnConnect: ne, autoPanOnNodeDrag: le, onError: ae, connectionRadius: he, isValidConnection: me, nodeDragThreshold: ve }) => {
    const { setNodes: Ee, setEdges: Ve, setDefaultNodesAndEdges: Ue, setMinZoom: Ke, setMaxZoom: Qe, setTranslateExtent: Oe, setNodeExtent: dt, reset: Me } = Re(aS, At), ye = rt();
    return L.useEffect(() => {
      const qe = i == null ? void 0 : i.map((vt) => ({
        ...vt,
        ...J
      }));
      return Ue(o, qe), () => {
        Me();
      };
    }, []), _e("defaultEdgeOptions", J, ye.setState), _e("connectionMode", F, ye.setState), _e("onConnect", l, ye.setState), _e("onConnectStart", u, ye.setState), _e("onConnectEnd", c, ye.setState), _e("onClickConnectStart", f, ye.setState), _e("onClickConnectEnd", m, ye.setState), _e("nodesDraggable", h, ye.setState), _e("nodesConnectable", p, ye.setState), _e("nodesFocusable", y, ye.setState), _e("edgesFocusable", v, ye.setState), _e("edgesUpdatable", x, ye.setState), _e("elementsSelectable", I, ye.setState), _e("elevateNodesOnSelect", k, ye.setState), _e("snapToGrid", Q, ye.setState), _e("snapGrid", z, ye.setState), _e("onNodesChange", A, ye.setState), _e("onEdgesChange", P, ye.setState), _e("connectOnClick", G, ye.setState), _e("fitViewOnInit", ee, ye.setState), _e("fitViewOnInitOptions", Y, ye.setState), _e("onNodesDelete", Z, ye.setState), _e("onEdgesDelete", _, ye.setState), _e("onNodeDrag", V, ye.setState), _e("onNodeDragStart", O, ye.setState), _e("onNodeDragStop", K, ye.setState), _e("onSelectionDrag", B, ye.setState), _e("onSelectionDragStart", $, ye.setState), _e("onSelectionDragStop", j, ye.setState), _e("noPanClassName", N, ye.setState), _e("nodeOrigin", D, ye.setState), _e("rfId", oe, ye.setState), _e("autoPanOnConnect", ne, ye.setState), _e("autoPanOnNodeDrag", le, ye.setState), _e("onError", ae, ye.setState), _e("connectionRadius", he, ye.setState), _e("isValidConnection", me, ye.setState), _e("nodeDragThreshold", ve, ye.setState), So(e, Ee), So(r, Ve), So(S, Ke), So(C, Qe), So(q, Oe), So(E, dt), null;
  }, wp = {
    display: "none"
  }, cS = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)"
  }, hm = "react-flow__node-desc", pm = "react-flow__edge-desc", dS = "react-flow__aria-live", fS = (e) => e.ariaLiveMessage;
  function hS({ rfId: e }) {
    const r = Re(fS);
    return X.createElement("div", {
      id: `${dS}-${e}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      style: cS
    }, r);
  }
  function pS({ rfId: e, disableKeyboardA11y: r }) {
    return X.createElement(X.Fragment, null, X.createElement("div", {
      id: `${hm}-${e}`,
      style: wp
    }, "Press enter or space to select a node.", !r && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "), X.createElement("div", {
      id: `${pm}-${e}`,
      style: wp
    }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."), !r && X.createElement(hS, {
      rfId: e
    }));
  }
  var Ds = (e = null, r = {
    actInsideInputWithModifier: true
  }) => {
    const [o, i] = L.useState(false), l = L.useRef(false), u = L.useRef(/* @__PURE__ */ new Set([])), [c, f] = L.useMemo(() => {
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
    return L.useEffect(() => {
      const m = typeof document < "u" ? document : null, h = (r == null ? void 0 : r.target) || m;
      if (e !== null) {
        const p = (x) => {
          if (l.current = x.ctrlKey || x.metaKey || x.shiftKey, (!l.current || l.current && !r.actInsideInputWithModifier) && Sc(x)) return false;
          const S = Sp(x.code, f);
          u.current.add(x[S]), xp(c, u.current, false) && (x.preventDefault(), i(true));
        }, y = (x) => {
          if ((!l.current || l.current && !r.actInsideInputWithModifier) && Sc(x)) return false;
          const S = Sp(x.code, f);
          xp(c, u.current, true) ? (i(false), u.current.clear()) : u.current.delete(x[S]), x.key === "Meta" && u.current.clear(), l.current = false;
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
  function xp(e, r, o) {
    return e.filter((i) => o || i.length === r.size).some((i) => i.every((l) => r.has(l)));
  }
  function Sp(e, r) {
    return r.includes(e) ? "code" : "key";
  }
  function mm(e, r, o, i) {
    var _a, _b;
    const l = e.parentNode || e.parentId;
    if (!l) return o;
    const u = r.get(l), c = Vr(u, i);
    return mm(u, r, {
      x: (o.x ?? 0) + c.x,
      y: (o.y ?? 0) + c.y,
      z: (((_a = u[Ge]) == null ? void 0 : _a.z) ?? 0) > (o.z ?? 0) ? ((_b = u[Ge]) == null ? void 0 : _b.z) ?? 0 : o.z ?? 0
    }, i);
  }
  function gm(e, r, o) {
    e.forEach((i) => {
      var _a;
      const l = i.parentNode || i.parentId;
      if (l && !e.has(l)) throw new Error(`Parent node ${l} not found`);
      if (l || (o == null ? void 0 : o[i.id])) {
        const { x: u, y: c, z: f } = mm(i, e, {
          ...i.position,
          z: ((_a = i[Ge]) == null ? void 0 : _a.z) ?? 0
        }, r);
        i.positionAbsolute = {
          x: u,
          y: c
        }, i[Ge].z = f, (o == null ? void 0 : o[i.id]) && (i[Ge].isParent = true);
      }
    });
  }
  function nc(e, r, o, i) {
    const l = /* @__PURE__ */ new Map(), u = {}, c = i ? 1e3 : 0;
    return e.forEach((f) => {
      var _a;
      const m = (Zt(f.zIndex) ? f.zIndex : 0) + (f.selected ? c : 0), h = r.get(f.id), p = {
        ...f,
        positionAbsolute: {
          x: f.position.x,
          y: f.position.y
        }
      }, y = f.parentNode || f.parentId;
      y && (u[y] = true);
      const v = (h == null ? void 0 : h.type) && (h == null ? void 0 : h.type) !== f.type;
      Object.defineProperty(p, Ge, {
        enumerable: false,
        value: {
          handleBounds: v ? void 0 : (_a = h == null ? void 0 : h[Ge]) == null ? void 0 : _a.handleBounds,
          z: m
        }
      }), l.set(f.id, p);
    }), gm(l, o, u), l;
  }
  function ym(e, r = {}) {
    const { getNodes: o, width: i, height: l, minZoom: u, maxZoom: c, d3Zoom: f, d3Selection: m, fitViewOnInitDone: h, fitViewOnInit: p, nodeOrigin: y } = e(), v = r.initial && !h && p;
    if (f && m && (v || !r.initial)) {
      const k = o().filter((C) => {
        var _a;
        const E = r.includeHiddenNodes ? C.width && C.height : !C.hidden;
        return ((_a = r.nodes) == null ? void 0 : _a.length) ? E && r.nodes.some((A) => A.id === C.id) : E;
      }), S = k.every((C) => C.width && C.height);
      if (k.length > 0 && S) {
        const C = ea(k, y), { x: E, y: A, zoom: P } = nm(C, i, l, r.minZoom ?? u, r.maxZoom ?? c, r.padding ?? 0.1), I = Un.translate(E, A).scale(P);
        return typeof r.duration == "number" && r.duration > 0 ? f.transform(Fr(m, r.duration), I) : f.transform(m, I), true;
      }
    }
    return false;
  }
  function mS(e, r) {
    return e.forEach((o) => {
      const i = r.get(o.id);
      i && r.set(i.id, {
        ...i,
        [Ge]: i[Ge],
        selected: o.selected
      });
    }), new Map(r);
  }
  function gS(e, r) {
    return r.map((o) => {
      const i = e.find((l) => l.id === o.id);
      return i && (o.selected = i.selected), o;
    });
  }
  function wl({ changedNodes: e, changedEdges: r, get: o, set: i }) {
    const { nodeInternals: l, edges: u, onNodesChange: c, onEdgesChange: f, hasDefaultNodes: m, hasDefaultEdges: h } = o();
    (e == null ? void 0 : e.length) && (m && i({
      nodeInternals: mS(e, l)
    }), c == null ? void 0 : c(e)), (r == null ? void 0 : r.length) && (h && i({
      edges: gS(r, u)
    }), f == null ? void 0 : f(r));
  }
  const ko = () => {
  }, yS = {
    zoomIn: ko,
    zoomOut: ko,
    zoomTo: ko,
    getZoom: () => 1,
    setViewport: ko,
    getViewport: () => ({
      x: 0,
      y: 0,
      zoom: 1
    }),
    fitView: () => false,
    setCenter: ko,
    fitBounds: ko,
    project: (e) => e,
    screenToFlowPosition: (e) => e,
    flowToScreenPosition: (e) => e,
    viewportInitialized: false
  }, vS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection
  }), wS = () => {
    const e = rt(), { d3Zoom: r, d3Selection: o } = Re(vS, At);
    return L.useMemo(() => o && r ? {
      zoomIn: (l) => r.scaleBy(Fr(o, l == null ? void 0 : l.duration), 1.2),
      zoomOut: (l) => r.scaleBy(Fr(o, l == null ? void 0 : l.duration), 1 / 1.2),
      zoomTo: (l, u) => r.scaleTo(Fr(o, u == null ? void 0 : u.duration), l),
      getZoom: () => e.getState().transform[2],
      setViewport: (l, u) => {
        const [c, f, m] = e.getState().transform, h = Un.translate(l.x ?? c, l.y ?? f).scale(l.zoom ?? m);
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
      fitView: (l) => ym(e.getState, l),
      setCenter: (l, u, c) => {
        const { width: f, height: m, maxZoom: h } = e.getState(), p = typeof (c == null ? void 0 : c.zoom) < "u" ? c.zoom : h, y = f / 2 - l * p, v = m / 2 - u * p, x = Un.translate(y, v).scale(p);
        r.transform(Fr(o, c == null ? void 0 : c.duration), x);
      },
      fitBounds: (l, u) => {
        const { width: c, height: f, minZoom: m, maxZoom: h } = e.getState(), { x: p, y, zoom: v } = nm(l, c, f, m, h, (u == null ? void 0 : u.padding) ?? 0.1), x = Un.translate(p, y).scale(v);
        r.transform(Fr(o, u == null ? void 0 : u.duration), x);
      },
      project: (l) => {
        const { transform: u, snapToGrid: c, snapGrid: f } = e.getState();
        return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"), Ec(l, u, c, f);
      },
      screenToFlowPosition: (l) => {
        const { transform: u, snapToGrid: c, snapGrid: f, domNode: m } = e.getState();
        if (!m) return l;
        const { x: h, y: p } = m.getBoundingClientRect(), y = {
          x: l.x - h,
          y: l.y - p
        };
        return Ec(y, u, c, f);
      },
      flowToScreenPosition: (l) => {
        const { transform: u, domNode: c } = e.getState();
        if (!c) return l;
        const { x: f, y: m } = c.getBoundingClientRect(), h = J0(l, u);
        return {
          x: h.x + f,
          y: h.y + m
        };
      },
      viewportInitialized: true
    } : yS, [
      r,
      o
    ]);
  };
  function Us() {
    const e = wS(), r = rt(), o = L.useCallback(() => r.getState().getNodes().map((S) => ({
      ...S
    })), []), i = L.useCallback((S) => r.getState().nodeInternals.get(S), []), l = L.useCallback(() => {
      const { edges: S = [] } = r.getState();
      return S.map((C) => ({
        ...C
      }));
    }, []), u = L.useCallback((S) => {
      const { edges: C = [] } = r.getState();
      return C.find((E) => E.id === S);
    }, []), c = L.useCallback((S) => {
      const { getNodes: C, setNodes: E, hasDefaultNodes: A, onNodesChange: P } = r.getState(), I = C(), F = typeof S == "function" ? S(I) : S;
      if (A) E(F);
      else if (P) {
        const z = F.length === 0 ? I.map((Q) => ({
          type: "remove",
          id: Q.id
        })) : F.map((Q) => ({
          item: Q,
          type: "reset"
        }));
        P(z);
      }
    }, []), f = L.useCallback((S) => {
      const { edges: C = [], setEdges: E, hasDefaultEdges: A, onEdgesChange: P } = r.getState(), I = typeof S == "function" ? S(C) : S;
      if (A) E(I);
      else if (P) {
        const F = I.length === 0 ? C.map((z) => ({
          type: "remove",
          id: z.id
        })) : I.map((z) => ({
          item: z,
          type: "reset"
        }));
        P(F);
      }
    }, []), m = L.useCallback((S) => {
      const C = Array.isArray(S) ? S : [
        S
      ], { getNodes: E, setNodes: A, hasDefaultNodes: P, onNodesChange: I } = r.getState();
      if (P) {
        const z = [
          ...E(),
          ...C
        ];
        A(z);
      } else if (I) {
        const F = C.map((z) => ({
          item: z,
          type: "add"
        }));
        I(F);
      }
    }, []), h = L.useCallback((S) => {
      const C = Array.isArray(S) ? S : [
        S
      ], { edges: E = [], setEdges: A, hasDefaultEdges: P, onEdgesChange: I } = r.getState();
      if (P) A([
        ...E,
        ...C
      ]);
      else if (I) {
        const F = C.map((z) => ({
          item: z,
          type: "add"
        }));
        I(F);
      }
    }, []), p = L.useCallback(() => {
      const { getNodes: S, edges: C = [], transform: E } = r.getState(), [A, P, I] = E;
      return {
        nodes: S().map((F) => ({
          ...F
        })),
        edges: C.map((F) => ({
          ...F
        })),
        viewport: {
          x: A,
          y: P,
          zoom: I
        }
      };
    }, []), y = L.useCallback(({ nodes: S, edges: C }) => {
      const { nodeInternals: E, getNodes: A, edges: P, hasDefaultNodes: I, hasDefaultEdges: F, onNodesDelete: z, onEdgesDelete: Q, onNodesChange: q, onEdgesChange: G } = r.getState(), J = (S || []).map((V) => V.id), ee = (C || []).map((V) => V.id), Y = A().reduce((V, O) => {
        const K = O.parentNode || O.parentId, B = !J.includes(O.id) && K && V.find((j) => j.id === K);
        return (typeof O.deletable == "boolean" ? O.deletable : true) && (J.includes(O.id) || B) && V.push(O), V;
      }, []), Z = P.filter((V) => typeof V.deletable == "boolean" ? V.deletable : true), _ = Z.filter((V) => ee.includes(V.id));
      if (Y || _) {
        const V = tm(Y, Z), O = [
          ..._,
          ...V
        ], K = O.reduce((B, $) => (B.includes($.id) || B.push($.id), B), []);
        if ((F || I) && (F && r.setState({
          edges: P.filter((B) => !K.includes(B.id))
        }), I && (Y.forEach((B) => {
          E.delete(B.id);
        }), r.setState({
          nodeInternals: new Map(E)
        }))), K.length > 0 && (Q == null ? void 0 : Q(O), G && G(K.map((B) => ({
          id: B,
          type: "remove"
        })))), Y.length > 0 && (z == null ? void 0 : z(Y), q)) {
          const B = Y.map(($) => ({
            id: $.id,
            type: "remove"
          }));
          q(B);
        }
      }
    }, []), v = L.useCallback((S) => {
      const C = Fx(S), E = C ? null : r.getState().nodeInternals.get(S.id);
      return !C && !E ? [
        null,
        null,
        C
      ] : [
        C ? S : fp(E),
        E,
        C
      ];
    }, []), x = L.useCallback((S, C = true, E) => {
      const [A, P, I] = v(S);
      return A ? (E || r.getState().getNodes()).filter((F) => {
        if (!I && (F.id === P.id || !F.positionAbsolute)) return false;
        const z = fp(F), Q = xc(z, A);
        return C && Q > 0 || Q >= A.width * A.height;
      }) : [];
    }, []), k = L.useCallback((S, C, E = true) => {
      const [A] = v(S);
      if (!A) return false;
      const P = xc(A, C);
      return E && P > 0 || P >= A.width * A.height;
    }, []);
    return L.useMemo(() => ({
      ...e,
      getNodes: o,
      getNode: i,
      getEdges: l,
      getEdge: u,
      setNodes: c,
      setEdges: f,
      addNodes: m,
      addEdges: h,
      toObject: p,
      deleteElements: y,
      getIntersectingNodes: x,
      isNodeIntersecting: k
    }), [
      e,
      o,
      i,
      l,
      u,
      c,
      f,
      m,
      h,
      p,
      y,
      x,
      k
    ]);
  }
  const xS = {
    actInsideInputWithModifier: false
  };
  var SS = ({ deleteKeyCode: e, multiSelectionKeyCode: r }) => {
    const o = rt(), { deleteElements: i } = Us(), l = Ds(e, xS), u = Ds(r);
    L.useEffect(() => {
      if (l) {
        const { edges: c, getNodes: f } = o.getState(), m = f().filter((p) => p.selected), h = c.filter((p) => p.selected);
        i({
          nodes: m,
          edges: h
        }), o.setState({
          nodesSelectionActive: false
        });
      }
    }, [
      l
    ]), L.useEffect(() => {
      o.setState({
        multiSelectionActive: u
      });
    }, [
      u
    ]);
  };
  function kS(e) {
    const r = rt();
    L.useEffect(() => {
      let o;
      const i = () => {
        var _a, _b;
        if (!e.current) return;
        const l = Uc(e.current);
        (l.height === 0 || l.width === 0) && ((_b = (_a = r.getState()).onError) == null ? void 0 : _b.call(_a, "004", Gn.error004())), r.setState({
          width: l.width || 500,
          height: l.height || 500
        });
      };
      return i(), window.addEventListener("resize", i), e.current && (o = new ResizeObserver(() => i()), o.observe(e.current)), () => {
        window.removeEventListener("resize", i), o && e.current && o.unobserve(e.current);
      };
    }, []);
  }
  const qc = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }, ES = (e, r) => e.x !== r.x || e.y !== r.y || e.zoom !== r.k, xl = (e) => ({
    x: e.x,
    y: e.y,
    zoom: e.k
  }), Eo = (e, r) => e.target.closest(`.${r}`), kp = (e, r) => r === 2 && Array.isArray(e) && e.includes(2), Ep = (e) => {
    const r = e.ctrlKey && Bl() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * r;
  }, CS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection,
    d3ZoomHandler: e.d3ZoomHandler,
    userSelectionActive: e.userSelectionActive
  }), _S = ({ onMove: e, onMoveStart: r, onMoveEnd: o, onPaneContextMenu: i, zoomOnScroll: l = true, zoomOnPinch: u = true, panOnScroll: c = false, panOnScrollSpeed: f = 0.5, panOnScrollMode: m = jr.Free, zoomOnDoubleClick: h = true, elementsSelectable: p, panOnDrag: y = true, defaultViewport: v, translateExtent: x, minZoom: k, maxZoom: S, zoomActivationKeyCode: C, preventScrolling: E = true, children: A, noWheelClassName: P, noPanClassName: I }) => {
    const F = L.useRef(), z = rt(), Q = L.useRef(false), q = L.useRef(false), G = L.useRef(null), J = L.useRef({
      x: 0,
      y: 0,
      zoom: 0
    }), { d3Zoom: ee, d3Selection: Y, d3ZoomHandler: Z, userSelectionActive: _ } = Re(CS, At), V = Ds(C), O = L.useRef(0), K = L.useRef(false), B = L.useRef();
    return kS(G), L.useEffect(() => {
      if (G.current) {
        const $ = G.current.getBoundingClientRect(), j = j0().scaleExtent([
          k,
          S
        ]).translateExtent(x), N = Qt(G.current).call(j), D = Un.translate(v.x, v.y).scale(Ao(v.zoom, k, S)), oe = [
          [
            0,
            0
          ],
          [
            $.width,
            $.height
          ]
        ], ne = j.constrain()(D, oe, x);
        j.transform(N, ne), j.wheelDelta(Ep), z.setState({
          d3Zoom: j,
          d3Selection: N,
          d3ZoomHandler: N.on("wheel.zoom"),
          transform: [
            ne.x,
            ne.y,
            ne.k
          ],
          domNode: G.current.closest(".react-flow")
        });
      }
    }, []), L.useEffect(() => {
      Y && ee && (c && !V && !_ ? Y.on("wheel.zoom", ($) => {
        if (Eo($, P)) return false;
        $.preventDefault(), $.stopImmediatePropagation();
        const j = Y.property("__zoom").k || 1;
        if ($.ctrlKey && u) {
          const me = dn($), ve = Ep($), Ee = j * Math.pow(2, ve);
          ee.scaleTo(Y, Ee, me, $);
          return;
        }
        const N = $.deltaMode === 1 ? 20 : 1;
        let D = m === jr.Vertical ? 0 : $.deltaX * N, oe = m === jr.Horizontal ? 0 : $.deltaY * N;
        !Bl() && $.shiftKey && m !== jr.Vertical && (D = $.deltaY * N, oe = 0), ee.translateBy(Y, -(D / j) * f, -(oe / j) * f, {
          internal: true
        });
        const ne = xl(Y.property("__zoom")), { onViewportChangeStart: le, onViewportChange: ae, onViewportChangeEnd: he } = z.getState();
        clearTimeout(B.current), K.current || (K.current = true, r == null ? void 0 : r($, ne), le == null ? void 0 : le(ne)), K.current && (e == null ? void 0 : e($, ne), ae == null ? void 0 : ae(ne), B.current = setTimeout(() => {
          o == null ? void 0 : o($, ne), he == null ? void 0 : he(ne), K.current = false;
        }, 150));
      }, {
        passive: false
      }) : typeof Z < "u" && Y.on("wheel.zoom", function($, j) {
        if (!E && $.type === "wheel" && !$.ctrlKey || Eo($, P)) return null;
        $.preventDefault(), Z.call(this, $, j);
      }, {
        passive: false
      }));
    }, [
      _,
      c,
      m,
      Y,
      ee,
      Z,
      V,
      u,
      E,
      P,
      r,
      e,
      o
    ]), L.useEffect(() => {
      ee && ee.on("start", ($) => {
        var _a, _b;
        if (!$.sourceEvent || $.sourceEvent.internal) return null;
        O.current = (_a = $.sourceEvent) == null ? void 0 : _a.button;
        const { onViewportChangeStart: j } = z.getState(), N = xl($.transform);
        Q.current = true, J.current = N, ((_b = $.sourceEvent) == null ? void 0 : _b.type) === "mousedown" && z.setState({
          paneDragging: true
        }), j == null ? void 0 : j(N), r == null ? void 0 : r($.sourceEvent, N);
      });
    }, [
      ee,
      r
    ]), L.useEffect(() => {
      ee && (_ && !Q.current ? ee.on("zoom", null) : _ || ee.on("zoom", ($) => {
        var _a;
        const { onViewportChange: j } = z.getState();
        if (z.setState({
          transform: [
            $.transform.x,
            $.transform.y,
            $.transform.k
          ]
        }), q.current = !!(i && kp(y, O.current ?? 0)), (e || j) && !((_a = $.sourceEvent) == null ? void 0 : _a.internal)) {
          const N = xl($.transform);
          j == null ? void 0 : j(N), e == null ? void 0 : e($.sourceEvent, N);
        }
      }));
    }, [
      _,
      ee,
      e,
      y,
      i
    ]), L.useEffect(() => {
      ee && ee.on("end", ($) => {
        if (!$.sourceEvent || $.sourceEvent.internal) return null;
        const { onViewportChangeEnd: j } = z.getState();
        if (Q.current = false, z.setState({
          paneDragging: false
        }), i && kp(y, O.current ?? 0) && !q.current && i($.sourceEvent), q.current = false, (o || j) && ES(J.current, $.transform)) {
          const N = xl($.transform);
          J.current = N, clearTimeout(F.current), F.current = setTimeout(() => {
            j == null ? void 0 : j(N), o == null ? void 0 : o($.sourceEvent, N);
          }, c ? 150 : 0);
        }
      });
    }, [
      ee,
      c,
      y,
      o,
      i
    ]), L.useEffect(() => {
      ee && ee.filter(($) => {
        const j = V || l, N = u && $.ctrlKey;
        if ((y === true || Array.isArray(y) && y.includes(1)) && $.button === 1 && $.type === "mousedown" && (Eo($, "react-flow__node") || Eo($, "react-flow__edge"))) return true;
        if (!y && !j && !c && !h && !u || _ || !h && $.type === "dblclick" || Eo($, P) && $.type === "wheel" || Eo($, I) && ($.type !== "wheel" || c && $.type === "wheel" && !V) || !u && $.ctrlKey && $.type === "wheel" || !j && !c && !N && $.type === "wheel" || !y && ($.type === "mousedown" || $.type === "touchstart") || Array.isArray(y) && !y.includes($.button) && $.type === "mousedown") return false;
        const D = Array.isArray(y) && y.includes($.button) || !$.button || $.button <= 1;
        return (!$.ctrlKey || $.type === "wheel") && D;
      });
    }, [
      _,
      ee,
      l,
      u,
      c,
      h,
      y,
      p,
      V
    ]), X.createElement("div", {
      className: "react-flow__renderer",
      ref: G,
      style: qc
    }, A);
  }, NS = (e) => ({
    userSelectionActive: e.userSelectionActive,
    userSelectionRect: e.userSelectionRect
  });
  function MS() {
    const { userSelectionActive: e, userSelectionRect: r } = Re(NS, At);
    return e && r ? X.createElement("div", {
      className: "react-flow__selection react-flow__container",
      style: {
        width: r.width,
        height: r.height,
        transform: `translate(${r.x}px, ${r.y}px)`
      }
    }) : null;
  }
  function Cp(e, r) {
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
  function vm(e, r) {
    if (e.some((i) => i.type === "reset")) return e.filter((i) => i.type === "reset").map((i) => i.item);
    const o = e.filter((i) => i.type === "add").map((i) => i.item);
    return r.reduce((i, l) => {
      const u = e.filter((f) => f.id === l.id);
      if (u.length === 0) return i.push(l), i;
      const c = {
        ...l
      };
      for (const f of u) if (f) switch (f.type) {
        case "select": {
          c.selected = f.selected;
          break;
        }
        case "position": {
          typeof f.position < "u" && (c.position = f.position), typeof f.positionAbsolute < "u" && (c.positionAbsolute = f.positionAbsolute), typeof f.dragging < "u" && (c.dragging = f.dragging), c.expandParent && Cp(i, c);
          break;
        }
        case "dimensions": {
          typeof f.dimensions < "u" && (c.width = f.dimensions.width, c.height = f.dimensions.height), typeof f.updateStyle < "u" && (c.style = {
            ...c.style || {},
            ...f.dimensions
          }), typeof f.resizing == "boolean" && (c.resizing = f.resizing), c.expandParent && Cp(i, c);
          break;
        }
        case "remove":
          return i;
      }
      return i.push(c), i;
    }, o);
  }
  function wm(e, r) {
    return vm(e, r);
  }
  function bS(e, r) {
    return vm(e, r);
  }
  const gr = (e, r) => ({
    id: e,
    type: "select",
    selected: r
  });
  function _o(e, r) {
    return e.reduce((o, i) => {
      const l = r.includes(i.id);
      return !i.selected && l ? (i.selected = true, o.push(gr(i.id, true))) : i.selected && !l && (i.selected = false, o.push(gr(i.id, false))), o;
    }, []);
  }
  const rc = (e, r) => (o) => {
    o.target === r.current && (e == null ? void 0 : e(o));
  }, IS = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    dragging: e.paneDragging
  }), xm = L.memo(({ isSelecting: e, selectionMode: r = Ls.Full, panOnDrag: o, onSelectionStart: i, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: c, onPaneScroll: f, onPaneMouseEnter: m, onPaneMouseMove: h, onPaneMouseLeave: p, children: y }) => {
    const v = L.useRef(null), x = rt(), k = L.useRef(0), S = L.useRef(0), C = L.useRef(), { userSelectionActive: E, elementsSelectable: A, dragging: P } = Re(IS, At), I = () => {
      x.setState({
        userSelectionActive: false,
        userSelectionRect: null
      }), k.current = 0, S.current = 0;
    }, F = (Z) => {
      u == null ? void 0 : u(Z), x.getState().resetSelectedElements(), x.setState({
        nodesSelectionActive: false
      });
    }, z = (Z) => {
      if (Array.isArray(o) && (o == null ? void 0 : o.includes(2))) {
        Z.preventDefault();
        return;
      }
      c == null ? void 0 : c(Z);
    }, Q = f ? (Z) => f(Z) : void 0, q = (Z) => {
      const { resetSelectedElements: _, domNode: V } = x.getState();
      if (C.current = V == null ? void 0 : V.getBoundingClientRect(), !A || !e || Z.button !== 0 || Z.target !== v.current || !C.current) return;
      const { x: O, y: K } = vr(Z, C.current);
      _(), x.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: O,
          startY: K,
          x: O,
          y: K
        }
      }), i == null ? void 0 : i(Z);
    }, G = (Z) => {
      const { userSelectionRect: _, nodeInternals: V, edges: O, transform: K, onNodesChange: B, onEdgesChange: $, nodeOrigin: j, getNodes: N } = x.getState();
      if (!e || !C.current || !_) return;
      x.setState({
        userSelectionActive: true,
        nodesSelectionActive: false
      });
      const D = vr(Z, C.current), oe = _.startX ?? 0, ne = _.startY ?? 0, le = {
        ..._,
        x: D.x < oe ? D.x : oe,
        y: D.y < ne ? D.y : ne,
        width: Math.abs(D.x - oe),
        height: Math.abs(D.y - ne)
      }, ae = N(), he = em(V, le, K, r === Ls.Partial, true, j), me = tm(he, O).map((Ee) => Ee.id), ve = he.map((Ee) => Ee.id);
      if (k.current !== ve.length) {
        k.current = ve.length;
        const Ee = _o(ae, ve);
        Ee.length && (B == null ? void 0 : B(Ee));
      }
      if (S.current !== me.length) {
        S.current = me.length;
        const Ee = _o(O, me);
        Ee.length && ($ == null ? void 0 : $(Ee));
      }
      x.setState({
        userSelectionRect: le
      });
    }, J = (Z) => {
      if (Z.button !== 0) return;
      const { userSelectionRect: _ } = x.getState();
      !E && _ && Z.target === v.current && (F == null ? void 0 : F(Z)), x.setState({
        nodesSelectionActive: k.current > 0
      }), I(), l == null ? void 0 : l(Z);
    }, ee = (Z) => {
      E && (x.setState({
        nodesSelectionActive: k.current > 0
      }), l == null ? void 0 : l(Z)), I();
    }, Y = A && (e || E);
    return X.createElement("div", {
      className: ct([
        "react-flow__pane",
        {
          dragging: P,
          selection: e
        }
      ]),
      onClick: Y ? void 0 : rc(F, v),
      onContextMenu: rc(z, v),
      onWheel: rc(Q, v),
      onMouseEnter: Y ? void 0 : m,
      onMouseDown: Y ? q : void 0,
      onMouseMove: Y ? G : h,
      onMouseUp: Y ? J : void 0,
      onMouseLeave: Y ? ee : p,
      ref: v,
      style: qc
    }, y, X.createElement(MS, null));
  });
  xm.displayName = "Pane";
  function Sm(e, r) {
    const o = e.parentNode || e.parentId;
    if (!o) return false;
    const i = r.get(o);
    return i ? i.selected ? true : Sm(i, r) : false;
  }
  function _p(e, r, o) {
    let i = e;
    do {
      if (i == null ? void 0 : i.matches(r)) return true;
      if (i === o.current) return false;
      i = i.parentElement;
    } while (i);
    return false;
  }
  function TS(e, r, o, i) {
    return Array.from(e.values()).filter((l) => (l.selected || l.id === i) && (!l.parentNode || l.parentId || !Sm(l, e)) && (l.draggable || r && typeof l.draggable > "u")).map((l) => {
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
  function km(e, r, o, i, l = [
    0,
    0
  ], u) {
    const c = AS(e, e.extent || i);
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
    } else u == null ? void 0 : u("005", Gn.error005()), f = c;
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
    const p = f && f !== "parent" ? Wc(r, f) : r;
    return {
      position: {
        x: p.x - h.x,
        y: p.y - h.y
      },
      positionAbsolute: p
    };
  }
  function oc({ nodeId: e, dragItems: r, nodeInternals: o }) {
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
  const Np = (e, r, o, i) => {
    const l = r.querySelectorAll(e);
    if (!l || !l.length) return null;
    const u = Array.from(l), c = r.getBoundingClientRect(), f = {
      x: c.width * i[0],
      y: c.height * i[1]
    };
    return u.map((m) => {
      const h = m.getBoundingClientRect();
      return {
        id: m.getAttribute("data-handleid"),
        position: m.getAttribute("data-handlepos"),
        x: (h.left - c.left - f.x) / o,
        y: (h.top - c.top - f.y) / o,
        ...Uc(m)
      };
    });
  };
  function Cs(e, r, o) {
    return o === void 0 ? o : (i) => {
      const l = r().nodeInternals.get(e);
      l && o(i, {
        ...l
      });
    };
  }
  function _c({ id: e, store: r, unselect: o = false, nodeRef: i }) {
    const { addSelectedNodes: l, unselectNodesAndEdges: u, multiSelectionActive: c, nodeInternals: f, onError: m } = r.getState(), h = f.get(e);
    if (!h) {
      m == null ? void 0 : m("012", Gn.error012(e));
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
  function $S() {
    const e = rt();
    return L.useCallback(({ sourceEvent: o }) => {
      const { transform: i, snapGrid: l, snapToGrid: u } = e.getState(), c = o.touches ? o.touches[0].clientX : o.clientX, f = o.touches ? o.touches[0].clientY : o.clientY, m = {
        x: (c - i[0]) / i[2],
        y: (f - i[1]) / i[2]
      };
      return {
        xSnapped: u ? l[0] * Math.round(m.x / l[0]) : m.x,
        ySnapped: u ? l[1] * Math.round(m.y / l[1]) : m.y,
        ...m
      };
    }, []);
  }
  function sc(e) {
    return (r, o, i) => e == null ? void 0 : e(r, i);
  }
  function Em({ nodeRef: e, disabled: r = false, noDragClassName: o, handleSelector: i, nodeId: l, isSelectable: u, selectNodesOnDrag: c }) {
    const f = rt(), [m, h] = L.useState(false), p = L.useRef([]), y = L.useRef({
      x: null,
      y: null
    }), v = L.useRef(0), x = L.useRef(null), k = L.useRef({
      x: 0,
      y: 0
    }), S = L.useRef(null), C = L.useRef(false), E = L.useRef(false), A = L.useRef(false), P = $S();
    return L.useEffect(() => {
      if (e == null ? void 0 : e.current) {
        const I = Qt(e.current), F = ({ x: q, y: G }) => {
          const { nodeInternals: J, onNodeDrag: ee, onSelectionDrag: Y, updateNodePositions: Z, nodeExtent: _, snapGrid: V, snapToGrid: O, nodeOrigin: K, onError: B } = f.getState();
          y.current = {
            x: q,
            y: G
          };
          let $ = false, j = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 0
          };
          if (p.current.length > 1 && _) {
            const D = ea(p.current, K);
            j = zs(D);
          }
          if (p.current = p.current.map((D) => {
            const oe = {
              x: q - D.distance.x,
              y: G - D.distance.y
            };
            O && (oe.x = V[0] * Math.round(oe.x / V[0]), oe.y = V[1] * Math.round(oe.y / V[1]));
            const ne = [
              [
                _[0][0],
                _[0][1]
              ],
              [
                _[1][0],
                _[1][1]
              ]
            ];
            p.current.length > 1 && _ && !D.extent && (ne[0][0] = D.positionAbsolute.x - j.x + _[0][0], ne[1][0] = D.positionAbsolute.x + (D.width ?? 0) - j.x2 + _[1][0], ne[0][1] = D.positionAbsolute.y - j.y + _[0][1], ne[1][1] = D.positionAbsolute.y + (D.height ?? 0) - j.y2 + _[1][1]);
            const le = km(D, oe, J, ne, K, B);
            return $ = $ || D.position.x !== le.position.x || D.position.y !== le.position.y, D.position = le.position, D.positionAbsolute = le.positionAbsolute, D;
          }), !$) return;
          Z(p.current, true, true), h(true);
          const N = l ? ee : sc(Y);
          if (N && S.current) {
            const [D, oe] = oc({
              nodeId: l,
              dragItems: p.current,
              nodeInternals: J
            });
            N(S.current, D, oe);
          }
        }, z = () => {
          if (!x.current) return;
          const [q, G] = V0(k.current, x.current);
          if (q !== 0 || G !== 0) {
            const { transform: J, panBy: ee } = f.getState();
            y.current.x = (y.current.x ?? 0) - q / J[2], y.current.y = (y.current.y ?? 0) - G / J[2], ee({
              x: q,
              y: G
            }) && F(y.current);
          }
          v.current = requestAnimationFrame(z);
        }, Q = (q) => {
          var _a;
          const { nodeInternals: G, multiSelectionActive: J, nodesDraggable: ee, unselectNodesAndEdges: Y, onNodeDragStart: Z, onSelectionDragStart: _ } = f.getState();
          E.current = true;
          const V = l ? Z : sc(_);
          (!c || !u) && !J && l && (((_a = G.get(l)) == null ? void 0 : _a.selected) || Y()), l && u && c && _c({
            id: l,
            store: f,
            nodeRef: e
          });
          const O = P(q);
          if (y.current = O, p.current = TS(G, ee, O, l), V && p.current) {
            const [K, B] = oc({
              nodeId: l,
              dragItems: p.current,
              nodeInternals: G
            });
            V(q.sourceEvent, K, B);
          }
        };
        if (r) I.on(".drag", null);
        else {
          const q = Hv().on("start", (G) => {
            const { domNode: J, nodeDragThreshold: ee } = f.getState();
            ee === 0 && Q(G), A.current = false;
            const Y = P(G);
            y.current = Y, x.current = (J == null ? void 0 : J.getBoundingClientRect()) || null, k.current = vr(G.sourceEvent, x.current);
          }).on("drag", (G) => {
            var _a, _b;
            const J = P(G), { autoPanOnNodeDrag: ee, nodeDragThreshold: Y } = f.getState();
            if (G.sourceEvent.type === "touchmove" && G.sourceEvent.touches.length > 1 && (A.current = true), !A.current) {
              if (!C.current && E.current && ee && (C.current = true, z()), !E.current) {
                const Z = J.xSnapped - (((_a = y == null ? void 0 : y.current) == null ? void 0 : _a.x) ?? 0), _ = J.ySnapped - (((_b = y == null ? void 0 : y.current) == null ? void 0 : _b.y) ?? 0);
                Math.sqrt(Z * Z + _ * _) > Y && Q(G);
              }
              (y.current.x !== J.xSnapped || y.current.y !== J.ySnapped) && p.current && E.current && (S.current = G.sourceEvent, k.current = vr(G.sourceEvent, x.current), F(J));
            }
          }).on("end", (G) => {
            if (!(!E.current || A.current) && (h(false), C.current = false, E.current = false, cancelAnimationFrame(v.current), p.current)) {
              const { updateNodePositions: J, nodeInternals: ee, onNodeDragStop: Y, onSelectionDragStop: Z } = f.getState(), _ = l ? Y : sc(Z);
              if (J(p.current, false, false), _) {
                const [V, O] = oc({
                  nodeId: l,
                  dragItems: p.current,
                  nodeInternals: ee
                });
                _(G.sourceEvent, V, O);
              }
            }
          }).filter((G) => {
            const J = G.target;
            return !G.button && (!o || !_p(J, `.${o}`, e)) && (!i || _p(J, i, e));
          });
          return I.call(q), () => {
            I.on(".drag", null);
          };
        }
      }
    }, [
      e,
      r,
      o,
      i,
      u,
      f,
      l,
      c,
      P
    ]), m;
  }
  function Cm() {
    const e = rt();
    return L.useCallback((o) => {
      const { nodeInternals: i, nodeExtent: l, updateNodePositions: u, getNodes: c, snapToGrid: f, snapGrid: m, onError: h, nodesDraggable: p } = e.getState(), y = c().filter((A) => A.selected && (A.draggable || p && typeof A.draggable > "u")), v = f ? m[0] : 5, x = f ? m[1] : 5, k = o.isShiftPressed ? 4 : 1, S = o.x * v * k, C = o.y * x * k, E = y.map((A) => {
        if (A.positionAbsolute) {
          const P = {
            x: A.positionAbsolute.x + S,
            y: A.positionAbsolute.y + C
          };
          f && (P.x = m[0] * Math.round(P.x / m[0]), P.y = m[1] * Math.round(P.y / m[1]));
          const { positionAbsolute: I, position: F } = km(A, P, i, l, void 0, h);
          A.position = F, A.positionAbsolute = I;
        }
        return A;
      });
      u(E, true, false);
    }, []);
  }
  const bo = {
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
  var _s = (e) => {
    const r = ({ id: o, type: i, data: l, xPos: u, yPos: c, xPosOrigin: f, yPosOrigin: m, selected: h, onClick: p, onMouseEnter: y, onMouseMove: v, onMouseLeave: x, onContextMenu: k, onDoubleClick: S, style: C, className: E, isDraggable: A, isSelectable: P, isConnectable: I, isFocusable: F, selectNodesOnDrag: z, sourcePosition: Q, targetPosition: q, hidden: G, resizeObserver: J, dragHandle: ee, zIndex: Y, isParent: Z, noDragClassName: _, noPanClassName: V, initialized: O, disableKeyboardA11y: K, ariaLabel: B, rfId: $, hasHandleBounds: j }) => {
      const N = rt(), D = L.useRef(null), oe = L.useRef(null), ne = L.useRef(Q), le = L.useRef(q), ae = L.useRef(i), he = P || A || p || y || v || x, me = Cm(), ve = Cs(o, N.getState, y), Ee = Cs(o, N.getState, v), Ve = Cs(o, N.getState, x), Ue = Cs(o, N.getState, k), Ke = Cs(o, N.getState, S), Qe = (Me) => {
        const { nodeDragThreshold: ye } = N.getState();
        if (P && (!z || !A || ye > 0) && _c({
          id: o,
          store: N,
          nodeRef: D
        }), p) {
          const qe = N.getState().nodeInternals.get(o);
          qe && p(Me, {
            ...qe
          });
        }
      }, Oe = (Me) => {
        if (!Sc(Me) && !K) if (G0.includes(Me.key) && P) {
          const ye = Me.key === "Escape";
          _c({
            id: o,
            store: N,
            unselect: ye,
            nodeRef: D
          });
        } else A && h && Object.prototype.hasOwnProperty.call(bo, Me.key) && (N.setState({
          ariaLiveMessage: `Moved selected node ${Me.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~u}, y: ${~~c}`
        }), me({
          x: bo[Me.key].x,
          y: bo[Me.key].y,
          isShiftPressed: Me.shiftKey
        }));
      };
      L.useEffect(() => () => {
        oe.current && (J == null ? void 0 : J.unobserve(oe.current), oe.current = null);
      }, []), L.useEffect(() => {
        if (D.current && !G) {
          const Me = D.current;
          (!O || !j || oe.current !== Me) && (oe.current && (J == null ? void 0 : J.unobserve(oe.current)), J == null ? void 0 : J.observe(Me), oe.current = Me);
        }
      }, [
        G,
        O,
        j
      ]), L.useEffect(() => {
        const Me = ae.current !== i, ye = ne.current !== Q, qe = le.current !== q;
        D.current && (Me || ye || qe) && (Me && (ae.current = i), ye && (ne.current = Q), qe && (le.current = q), N.getState().updateNodeDimensions([
          {
            id: o,
            nodeElement: D.current,
            forceUpdate: true
          }
        ]));
      }, [
        o,
        i,
        Q,
        q
      ]);
      const dt = Em({
        nodeRef: D,
        disabled: G || !A,
        noDragClassName: _,
        handleSelector: ee,
        nodeId: o,
        isSelectable: P,
        selectNodesOnDrag: z
      });
      return G ? null : X.createElement("div", {
        className: ct([
          "react-flow__node",
          `react-flow__node-${i}`,
          {
            [V]: A
          },
          E,
          {
            selected: h,
            selectable: P,
            parent: Z,
            dragging: dt
          }
        ]),
        ref: D,
        style: {
          zIndex: Y,
          transform: `translate(${f}px,${m}px)`,
          pointerEvents: he ? "all" : "none",
          visibility: O ? "visible" : "hidden",
          ...C
        },
        "data-id": o,
        "data-testid": `rf__node-${o}`,
        onMouseEnter: ve,
        onMouseMove: Ee,
        onMouseLeave: Ve,
        onContextMenu: Ue,
        onClick: Qe,
        onDoubleClick: Ke,
        onKeyDown: F ? Oe : void 0,
        tabIndex: F ? 0 : void 0,
        role: F ? "button" : void 0,
        "aria-describedby": K ? void 0 : `${hm}-${$}`,
        "aria-label": B
      }, X.createElement(Yx, {
        value: o
      }, X.createElement(e, {
        id: o,
        data: l,
        type: i,
        xPos: u,
        yPos: c,
        selected: h,
        isConnectable: I,
        sourcePosition: Q,
        targetPosition: q,
        dragging: dt,
        dragHandle: ee,
        zIndex: Y
      })));
    };
    return r.displayName = "NodeWrapper", L.memo(r);
  };
  const RS = (e) => {
    const r = e.getNodes().filter((o) => o.selected);
    return {
      ...ea(r, e.nodeOrigin),
      transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
      userSelectionActive: e.userSelectionActive
    };
  };
  function PS({ onSelectionContextMenu: e, noPanClassName: r, disableKeyboardA11y: o }) {
    const i = rt(), { width: l, height: u, x: c, y: f, transformString: m, userSelectionActive: h } = Re(RS, At), p = Cm(), y = L.useRef(null);
    if (L.useEffect(() => {
      var _a;
      o || ((_a = y.current) == null ? void 0 : _a.focus({
        preventScroll: true
      }));
    }, [
      o
    ]), Em({
      nodeRef: y
    }), h || !l || !u) return null;
    const v = e ? (k) => {
      const S = i.getState().getNodes().filter((C) => C.selected);
      e(k, S);
    } : void 0, x = (k) => {
      Object.prototype.hasOwnProperty.call(bo, k.key) && p({
        x: bo[k.key].x,
        y: bo[k.key].y,
        isShiftPressed: k.shiftKey
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
        top: f,
        left: c
      }
    }));
  }
  var zS = L.memo(PS);
  const LS = (e) => e.nodesSelectionActive, _m = ({ children: e, onPaneClick: r, onPaneMouseEnter: o, onPaneMouseMove: i, onPaneMouseLeave: l, onPaneContextMenu: u, onPaneScroll: c, deleteKeyCode: f, onMove: m, onMoveStart: h, onMoveEnd: p, selectionKeyCode: y, selectionOnDrag: v, selectionMode: x, onSelectionStart: k, onSelectionEnd: S, multiSelectionKeyCode: C, panActivationKeyCode: E, zoomActivationKeyCode: A, elementsSelectable: P, zoomOnScroll: I, zoomOnPinch: F, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: q, zoomOnDoubleClick: G, panOnDrag: J, defaultViewport: ee, translateExtent: Y, minZoom: Z, maxZoom: _, preventScrolling: V, onSelectionContextMenu: O, noWheelClassName: K, noPanClassName: B, disableKeyboardA11y: $ }) => {
    const j = Re(LS), N = Ds(y), D = Ds(E), oe = D || J, ne = D || z, le = N || v && oe !== true;
    return SS({
      deleteKeyCode: f,
      multiSelectionKeyCode: C
    }), X.createElement(_S, {
      onMove: m,
      onMoveStart: h,
      onMoveEnd: p,
      onPaneContextMenu: u,
      elementsSelectable: P,
      zoomOnScroll: I,
      zoomOnPinch: F,
      panOnScroll: ne,
      panOnScrollSpeed: Q,
      panOnScrollMode: q,
      zoomOnDoubleClick: G,
      panOnDrag: !N && oe,
      defaultViewport: ee,
      translateExtent: Y,
      minZoom: Z,
      maxZoom: _,
      zoomActivationKeyCode: A,
      preventScrolling: V,
      noWheelClassName: K,
      noPanClassName: B
    }, X.createElement(xm, {
      onSelectionStart: k,
      onSelectionEnd: S,
      onPaneClick: r,
      onPaneMouseEnter: o,
      onPaneMouseMove: i,
      onPaneMouseLeave: l,
      onPaneContextMenu: u,
      onPaneScroll: c,
      panOnDrag: oe,
      isSelecting: !!le,
      selectionMode: x
    }, e, j && X.createElement(zS, {
      onSelectionContextMenu: O,
      noPanClassName: B,
      disableKeyboardA11y: $
    })));
  };
  _m.displayName = "FlowRenderer";
  var DS = L.memo(_m);
  function OS(e) {
    return Re(L.useCallback((o) => e ? em(o.nodeInternals, {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }, o.transform, true) : o.getNodes(), [
      e
    ]));
  }
  function FS(e) {
    const r = {
      input: _s(e.input || um),
      default: _s(e.default || Cc),
      output: _s(e.output || dm),
      group: _s(e.group || Zc)
    }, o = {}, i = Object.keys(e).filter((l) => ![
      "input",
      "default",
      "output",
      "group"
    ].includes(l)).reduce((l, u) => (l[u] = _s(e[u] || Cc), l), o);
    return {
      ...r,
      ...i
    };
  }
  const BS = ({ x: e, y: r, width: o, height: i, origin: l }) => !o || !i ? {
    x: e,
    y: r
  } : l[0] < 0 || l[1] < 0 || l[0] > 1 || l[1] > 1 ? {
    x: e,
    y: r
  } : {
    x: e - o * l[0],
    y: r - i * l[1]
  }, jS = (e) => ({
    nodesDraggable: e.nodesDraggable,
    nodesConnectable: e.nodesConnectable,
    nodesFocusable: e.nodesFocusable,
    elementsSelectable: e.elementsSelectable,
    updateNodeDimensions: e.updateNodeDimensions,
    onError: e.onError
  }), Nm = (e) => {
    const { nodesDraggable: r, nodesConnectable: o, nodesFocusable: i, elementsSelectable: l, updateNodeDimensions: u, onError: c } = Re(jS, At), f = OS(e.onlyRenderVisibleElements), m = L.useRef(), h = L.useMemo(() => {
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
    return L.useEffect(() => () => {
      var _a;
      (_a = m == null ? void 0 : m.current) == null ? void 0 : _a.disconnect();
    }, []), X.createElement("div", {
      className: "react-flow__nodes",
      style: qc
    }, f.map((p) => {
      var _a, _b, _c2;
      let y = p.type || "default";
      e.nodeTypes[y] || (c == null ? void 0 : c("003", Gn.error003(y)), y = "default");
      const v = e.nodeTypes[y] || e.nodeTypes.default, x = !!(p.draggable || r && typeof p.draggable > "u"), k = !!(p.selectable || l && typeof p.selectable > "u"), S = !!(p.connectable || o && typeof p.connectable > "u"), C = !!(p.focusable || i && typeof p.focusable > "u"), E = e.nodeExtent ? Wc(p.positionAbsolute, e.nodeExtent) : p.positionAbsolute, A = (E == null ? void 0 : E.x) ?? 0, P = (E == null ? void 0 : E.y) ?? 0, I = BS({
        x: A,
        y: P,
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
        xPos: A,
        yPos: P,
        xPosOrigin: I.x,
        yPosOrigin: I.y,
        selectNodesOnDrag: e.selectNodesOnDrag,
        onClick: e.onNodeClick,
        onMouseEnter: e.onNodeMouseEnter,
        onMouseMove: e.onNodeMouseMove,
        onMouseLeave: e.onNodeMouseLeave,
        onContextMenu: e.onNodeContextMenu,
        onDoubleClick: e.onNodeDoubleClick,
        selected: !!p.selected,
        isDraggable: x,
        isSelectable: k,
        isConnectable: S,
        isFocusable: C,
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
  Nm.displayName = "NodeRenderer";
  var HS = L.memo(Nm);
  const VS = (e, r, o) => o === ge.Left ? e - r : o === ge.Right ? e + r : e, US = (e, r, o) => o === ge.Top ? e - r : o === ge.Bottom ? e + r : e, Mp = "react-flow__edgeupdater", bp = ({ position: e, centerX: r, centerY: o, radius: i = 10, onMouseDown: l, onMouseEnter: u, onMouseOut: c, type: f }) => X.createElement("circle", {
    onMouseDown: l,
    onMouseEnter: u,
    onMouseOut: c,
    className: ct([
      Mp,
      `${Mp}-${f}`
    ]),
    cx: VS(r, i, e),
    cy: US(o, i, e),
    r: i,
    stroke: "transparent",
    fill: "transparent"
  }), WS = () => true;
  var Co = (e) => {
    const r = ({ id: o, className: i, type: l, data: u, onClick: c, onEdgeDoubleClick: f, selected: m, animated: h, label: p, labelStyle: y, labelShowBg: v, labelBgStyle: x, labelBgPadding: k, labelBgBorderRadius: S, style: C, source: E, target: A, sourceX: P, sourceY: I, targetX: F, targetY: z, sourcePosition: Q, targetPosition: q, elementsSelectable: G, hidden: J, sourceHandleId: ee, targetHandleId: Y, onContextMenu: Z, onMouseEnter: _, onMouseMove: V, onMouseLeave: O, reconnectRadius: K, onReconnect: B, onReconnectStart: $, onReconnectEnd: j, markerEnd: N, markerStart: D, rfId: oe, ariaLabel: ne, isFocusable: le, isReconnectable: ae, pathOptions: he, interactionWidth: me, disableKeyboardA11y: ve }) => {
      const Ee = L.useRef(null), [Ve, Ue] = L.useState(false), [Ke, Qe] = L.useState(false), Oe = rt(), dt = L.useMemo(() => `url('#${kc(D, oe)}')`, [
        D,
        oe
      ]), Me = L.useMemo(() => `url('#${kc(N, oe)}')`, [
        N,
        oe
      ]);
      if (J) return null;
      const ye = (We) => {
        var _a;
        const { edges: jt, addSelectedEdges: gn, unselectNodesAndEdges: yn, multiSelectionActive: Xn } = Oe.getState(), Et = jt.find((nn) => nn.id === o);
        Et && (G && (Oe.setState({
          nodesSelectionActive: false
        }), Et.selected && Xn ? (yn({
          nodes: [],
          edges: [
            Et
          ]
        }), (_a = Ee.current) == null ? void 0 : _a.blur()) : gn([
          o
        ])), c && c(We, Et));
      }, qe = Es(o, Oe.getState, f), vt = Es(o, Oe.getState, Z), Ft = Es(o, Oe.getState, _), pn = Es(o, Oe.getState, V), Mn = Es(o, Oe.getState, O), Bt = (We, jt) => {
        if (We.button !== 0) return;
        const { edges: gn, isValidConnection: yn } = Oe.getState(), Xn = jt ? A : E, Et = (jt ? Y : ee) || null, nn = jt ? "target" : "source", kr = yn || WS, Er = jt, Tn = gn.find((wn) => wn.id === o);
        Qe(true), $ == null ? void 0 : $(We, Tn, nn);
        const vn = (wn) => {
          Qe(false), j == null ? void 0 : j(wn, Tn, nn);
        };
        sm({
          event: We,
          handleId: Et,
          nodeId: Xn,
          onConnect: (wn) => B == null ? void 0 : B(Tn, wn),
          isTarget: Er,
          getState: Oe.getState,
          setState: Oe.setState,
          isValidConnection: kr,
          edgeUpdaterType: nn,
          onReconnectEnd: vn
        });
      }, bn = (We) => Bt(We, true), mn = (We) => Bt(We, false), Jt = () => Ue(true), en = () => Ue(false), In = !G && !c, tn = (We) => {
        var _a;
        if (!ve && G0.includes(We.key) && G) {
          const { unselectNodesAndEdges: jt, addSelectedEdges: gn, edges: yn } = Oe.getState();
          We.key === "Escape" ? ((_a = Ee.current) == null ? void 0 : _a.blur(), jt({
            edges: [
              yn.find((Et) => Et.id === o)
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
        onContextMenu: vt,
        onMouseEnter: Ft,
        onMouseMove: pn,
        onMouseLeave: Mn,
        onKeyDown: le ? tn : void 0,
        tabIndex: le ? 0 : void 0,
        role: le ? "button" : "img",
        "data-testid": `rf__edge-${o}`,
        "aria-label": ne === null ? void 0 : ne || `Edge from ${E} to ${A}`,
        "aria-describedby": le ? `${pm}-${oe}` : void 0,
        ref: Ee
      }, !Ke && X.createElement(e, {
        id: o,
        source: E,
        target: A,
        selected: m,
        animated: h,
        label: p,
        labelStyle: y,
        labelShowBg: v,
        labelBgStyle: x,
        labelBgPadding: k,
        labelBgBorderRadius: S,
        data: u,
        style: C,
        sourceX: P,
        sourceY: I,
        targetX: F,
        targetY: z,
        sourcePosition: Q,
        targetPosition: q,
        sourceHandleId: ee,
        targetHandleId: Y,
        markerStart: dt,
        markerEnd: Me,
        pathOptions: he,
        interactionWidth: me
      }), ae && X.createElement(X.Fragment, null, (ae === "source" || ae === true) && X.createElement(bp, {
        position: Q,
        centerX: P,
        centerY: I,
        radius: K,
        onMouseDown: bn,
        onMouseEnter: Jt,
        onMouseOut: en,
        type: "source"
      }), (ae === "target" || ae === true) && X.createElement(bp, {
        position: q,
        centerX: F,
        centerY: z,
        radius: K,
        onMouseDown: mn,
        onMouseEnter: Jt,
        onMouseOut: en,
        type: "target"
      })));
    };
    return r.displayName = "EdgeWrapper", L.memo(r);
  };
  function YS(e) {
    const r = {
      default: Co(e.default || Hl),
      straight: Co(e.bezier || Xc),
      step: Co(e.step || Gc),
      smoothstep: Co(e.step || Jl),
      simplebezier: Co(e.simplebezier || Yc)
    }, o = {}, i = Object.keys(e).filter((l) => ![
      "default",
      "bezier"
    ].includes(l)).reduce((l, u) => (l[u] = Co(e[u] || Hl), l), o);
    return {
      ...r,
      ...i
    };
  }
  function Ip(e, r, o = null) {
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
  function Tp(e, r) {
    return e ? e.length === 1 || !r ? e[0] : r && e.find((o) => o.id === r) || null : null;
  }
  const GS = (e, r, o, i, l, u) => {
    const c = Ip(o, e, r), f = Ip(u, i, l);
    return {
      sourceX: c.x,
      sourceY: c.y,
      targetX: f.x,
      targetY: f.y
    };
  };
  function XS({ sourcePos: e, targetPos: r, sourceWidth: o, sourceHeight: i, targetWidth: l, targetHeight: u, width: c, height: f, transform: m }) {
    const h = {
      x: Math.min(e.x, r.x),
      y: Math.min(e.y, r.y),
      x2: Math.max(e.x + o, r.x + l),
      y2: Math.max(e.y + i, r.y + u)
    };
    h.x === h.x2 && (h.x2 += 1), h.y === h.y2 && (h.y2 += 1);
    const p = zs({
      x: (0 - m[0]) / m[2],
      y: (0 - m[1]) / m[2],
      width: c / m[2],
      height: f / m[2]
    }), y = Math.max(0, Math.min(p.x2, h.x2) - Math.max(p.x, h.x)), v = Math.max(0, Math.min(p.y2, h.y2) - Math.max(p.y, h.y));
    return Math.ceil(y * v) > 0;
  }
  function Ap(e) {
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
  const KS = [
    {
      level: 0,
      isMaxLevel: true,
      edges: []
    }
  ];
  function QS(e, r, o = false) {
    let i = -1;
    const l = e.reduce((c, f) => {
      var _a, _b;
      const m = Zt(f.zIndex);
      let h = m ? f.zIndex : 0;
      if (o) {
        const p = r.get(f.target), y = r.get(f.source), v = f.selected || (p == null ? void 0 : p.selected) || (y == null ? void 0 : y.selected), x = Math.max(((_a = y == null ? void 0 : y[Ge]) == null ? void 0 : _a.z) || 0, ((_b = p == null ? void 0 : p[Ge]) == null ? void 0 : _b.z) || 0, 1e3);
        h = (m ? f.zIndex : 0) + (v ? x : 0);
      }
      return c[h] ? c[h].push(f) : c[h] = [
        f
      ], i = h > i ? h : i, c;
    }, {}), u = Object.entries(l).map(([c, f]) => {
      const m = +c;
      return {
        edges: f,
        level: m,
        isMaxLevel: m === i
      };
    });
    return u.length === 0 ? KS : u;
  }
  function ZS(e, r, o) {
    const i = Re(L.useCallback((l) => e ? l.edges.filter((u) => {
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
    return QS(i, r, o);
  }
  const qS = ({ color: e = "none", strokeWidth: r = 1 }) => X.createElement("polyline", {
    style: {
      stroke: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    points: "-5,-4 0,0 -5,4"
  }), JS = ({ color: e = "none", strokeWidth: r = 1 }) => X.createElement("polyline", {
    style: {
      stroke: e,
      fill: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "-5,-4 0,0 -5,4 -5,-4"
  }), $p = {
    [$o.Arrow]: qS,
    [$o.ArrowClosed]: JS
  };
  function e2(e) {
    const r = rt();
    return L.useMemo(() => {
      var _a, _b;
      return Object.prototype.hasOwnProperty.call($p, e) ? $p[e] : ((_b = (_a = r.getState()).onError) == null ? void 0 : _b.call(_a, "009", Gn.error009(e)), null);
    }, [
      e
    ]);
  }
  const t2 = ({ id: e, type: r, color: o, width: i = 12.5, height: l = 12.5, markerUnits: u = "strokeWidth", strokeWidth: c, orient: f = "auto-start-reverse" }) => {
    const m = e2(r);
    return m ? X.createElement("marker", {
      className: "react-flow__arrowhead",
      id: e,
      markerWidth: `${i}`,
      markerHeight: `${l}`,
      viewBox: "-10 -10 20 20",
      markerUnits: u,
      orient: f,
      refX: "0",
      refY: "0"
    }, X.createElement(m, {
      color: o,
      strokeWidth: c
    })) : null;
  }, n2 = ({ defaultColor: e, rfId: r }) => (o) => {
    const i = [];
    return o.edges.reduce((l, u) => ([
      u.markerStart,
      u.markerEnd
    ].forEach((c) => {
      if (c && typeof c == "object") {
        const f = kc(c, r);
        i.includes(f) || (l.push({
          id: f,
          color: c.color || e,
          ...c
        }), i.push(f));
      }
    }), l), []).sort((l, u) => l.id.localeCompare(u.id));
  }, Mm = ({ defaultColor: e, rfId: r }) => {
    const o = Re(L.useCallback(n2({
      defaultColor: e,
      rfId: r
    }), [
      e,
      r
    ]), (i, l) => !(i.length !== l.length || i.some((u, c) => u.id !== l[c].id)));
    return X.createElement("defs", null, o.map((i) => X.createElement(t2, {
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
  Mm.displayName = "MarkerDefinitions";
  var r2 = L.memo(Mm);
  const o2 = (e) => ({
    nodesConnectable: e.nodesConnectable,
    edgesFocusable: e.edgesFocusable,
    edgesUpdatable: e.edgesUpdatable,
    elementsSelectable: e.elementsSelectable,
    width: e.width,
    height: e.height,
    connectionMode: e.connectionMode,
    nodeInternals: e.nodeInternals,
    onError: e.onError
  }), bm = ({ defaultMarkerColor: e, onlyRenderVisibleElements: r, elevateEdgesOnSelect: o, rfId: i, edgeTypes: l, noPanClassName: u, onEdgeContextMenu: c, onEdgeMouseEnter: f, onEdgeMouseMove: m, onEdgeMouseLeave: h, onEdgeClick: p, onEdgeDoubleClick: y, onReconnect: v, onReconnectStart: x, onReconnectEnd: k, reconnectRadius: S, children: C, disableKeyboardA11y: E }) => {
    const { edgesFocusable: A, edgesUpdatable: P, elementsSelectable: I, width: F, height: z, connectionMode: Q, nodeInternals: q, onError: G } = Re(o2, At), J = ZS(r, q, o);
    return F ? X.createElement(X.Fragment, null, J.map(({ level: ee, edges: Y, isMaxLevel: Z }) => X.createElement("svg", {
      key: ee,
      style: {
        zIndex: ee
      },
      width: F,
      height: z,
      className: "react-flow__edges react-flow__container"
    }, Z && X.createElement(r2, {
      defaultColor: e,
      rfId: i
    }), X.createElement("g", null, Y.map((_) => {
      const [V, O, K] = Ap(q.get(_.source)), [B, $, j] = Ap(q.get(_.target));
      if (!K || !j) return null;
      let N = _.type || "default";
      l[N] || (G == null ? void 0 : G("011", Gn.error011(N)), N = "default");
      const D = l[N] || l.default, oe = Q === Gr.Strict ? $.target : ($.target ?? []).concat($.source ?? []), ne = Tp(O.source, _.sourceHandle), le = Tp(oe, _.targetHandle), ae = (ne == null ? void 0 : ne.position) || ge.Bottom, he = (le == null ? void 0 : le.position) || ge.Top, me = !!(_.focusable || A && typeof _.focusable > "u"), ve = _.reconnectable || _.updatable, Ee = typeof v < "u" && (ve || P && typeof ve > "u");
      if (!ne || !le) return G == null ? void 0 : G("008", Gn.error008(ne, _)), null;
      const { sourceX: Ve, sourceY: Ue, targetX: Ke, targetY: Qe } = GS(V, ne, ae, B, le, he);
      return X.createElement(D, {
        key: _.id,
        id: _.id,
        className: ct([
          _.className,
          u
        ]),
        type: N,
        data: _.data,
        selected: !!_.selected,
        animated: !!_.animated,
        hidden: !!_.hidden,
        label: _.label,
        labelStyle: _.labelStyle,
        labelShowBg: _.labelShowBg,
        labelBgStyle: _.labelBgStyle,
        labelBgPadding: _.labelBgPadding,
        labelBgBorderRadius: _.labelBgBorderRadius,
        style: _.style,
        source: _.source,
        target: _.target,
        sourceHandleId: _.sourceHandle,
        targetHandleId: _.targetHandle,
        markerEnd: _.markerEnd,
        markerStart: _.markerStart,
        sourceX: Ve,
        sourceY: Ue,
        targetX: Ke,
        targetY: Qe,
        sourcePosition: ae,
        targetPosition: he,
        elementsSelectable: I,
        onContextMenu: c,
        onMouseEnter: f,
        onMouseMove: m,
        onMouseLeave: h,
        onClick: p,
        onEdgeDoubleClick: y,
        onReconnect: v,
        onReconnectStart: x,
        onReconnectEnd: k,
        reconnectRadius: S,
        rfId: i,
        ariaLabel: _.ariaLabel,
        isFocusable: me,
        isReconnectable: Ee,
        pathOptions: "pathOptions" in _ ? _.pathOptions : void 0,
        interactionWidth: _.interactionWidth,
        disableKeyboardA11y: E
      });
    })))), C) : null;
  };
  bm.displayName = "EdgeRenderer";
  var s2 = L.memo(bm);
  const i2 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
  function l2({ children: e }) {
    const r = Re(i2);
    return X.createElement("div", {
      className: "react-flow__viewport react-flow__container",
      style: {
        transform: r
      }
    }, e);
  }
  function a2(e) {
    const r = Us(), o = L.useRef(false);
    L.useEffect(() => {
      !o.current && r.viewportInitialized && e && (setTimeout(() => e(r), 1), o.current = true);
    }, [
      e,
      r.viewportInitialized
    ]);
  }
  const u2 = {
    [ge.Left]: ge.Right,
    [ge.Right]: ge.Left,
    [ge.Top]: ge.Bottom,
    [ge.Bottom]: ge.Top
  }, Im = ({ nodeId: e, handleType: r, style: o, type: i = yr.Bezier, CustomComponent: l, connectionStatus: u }) => {
    var _a, _b, _c2;
    const { fromNode: c, handleId: f, toX: m, toY: h, connectionMode: p } = Re(L.useCallback((z) => ({
      fromNode: z.nodeInternals.get(e),
      handleId: z.connectionHandleId,
      toX: (z.connectionPosition.x - z.transform[0]) / z.transform[2],
      toY: (z.connectionPosition.y - z.transform[1]) / z.transform[2],
      connectionMode: z.connectionMode
    }), [
      e
    ]), At), y = (_a = c == null ? void 0 : c[Ge]) == null ? void 0 : _a.handleBounds;
    let v = y == null ? void 0 : y[r];
    if (p === Gr.Loose && (v = v || (y == null ? void 0 : y[r === "source" ? "target" : "source"])), !c || !v) return null;
    const x = f ? v.find((z) => z.id === f) : v[0], k = x ? x.x + x.width / 2 : (c.width ?? 0) / 2, S = x ? x.y + x.height / 2 : c.height ?? 0, C = (((_b = c.positionAbsolute) == null ? void 0 : _b.x) ?? 0) + k, E = (((_c2 = c.positionAbsolute) == null ? void 0 : _c2.y) ?? 0) + S, A = x == null ? void 0 : x.position, P = A ? u2[A] : null;
    if (!A || !P) return null;
    if (l) return X.createElement(l, {
      connectionLineType: i,
      connectionLineStyle: o,
      fromNode: c,
      fromHandle: x,
      fromX: C,
      fromY: E,
      toX: m,
      toY: h,
      fromPosition: A,
      toPosition: P,
      connectionStatus: u
    });
    let I = "";
    const F = {
      sourceX: C,
      sourceY: E,
      sourcePosition: A,
      targetX: m,
      targetY: h,
      targetPosition: P
    };
    return i === yr.Bezier ? [I] = q0(F) : i === yr.Step ? [I] = jl({
      ...F,
      borderRadius: 0
    }) : i === yr.SmoothStep ? [I] = jl(F) : i === yr.SimpleBezier ? [I] = Z0(F) : I = `M${C},${E} ${m},${h}`, X.createElement("path", {
      d: I,
      fill: "none",
      className: "react-flow__connection-path",
      style: o
    });
  };
  Im.displayName = "ConnectionLine";
  const c2 = (e) => ({
    nodeId: e.connectionNodeId,
    handleType: e.connectionHandleType,
    nodesConnectable: e.nodesConnectable,
    connectionStatus: e.connectionStatus,
    width: e.width,
    height: e.height
  });
  function d2({ containerStyle: e, style: r, type: o, component: i }) {
    const { nodeId: l, handleType: u, nodesConnectable: c, width: f, height: m, connectionStatus: h } = Re(c2, At);
    return !(l && u && f && c) ? null : X.createElement("svg", {
      style: e,
      width: f,
      height: m,
      className: "react-flow__edges react-flow__connectionline react-flow__container"
    }, X.createElement("g", {
      className: ct([
        "react-flow__connection",
        h
      ])
    }, X.createElement(Im, {
      nodeId: l,
      handleType: u,
      style: r,
      type: o,
      CustomComponent: i,
      connectionStatus: h
    })));
  }
  function Rp(e, r) {
    return L.useRef(null), rt(), L.useMemo(() => r(e), [
      e
    ]);
  }
  const Tm = ({ nodeTypes: e, edgeTypes: r, onMove: o, onMoveStart: i, onMoveEnd: l, onInit: u, onNodeClick: c, onEdgeClick: f, onNodeDoubleClick: m, onEdgeDoubleClick: h, onNodeMouseEnter: p, onNodeMouseMove: y, onNodeMouseLeave: v, onNodeContextMenu: x, onSelectionContextMenu: k, onSelectionStart: S, onSelectionEnd: C, connectionLineType: E, connectionLineStyle: A, connectionLineComponent: P, connectionLineContainerStyle: I, selectionKeyCode: F, selectionOnDrag: z, selectionMode: Q, multiSelectionKeyCode: q, panActivationKeyCode: G, zoomActivationKeyCode: J, deleteKeyCode: ee, onlyRenderVisibleElements: Y, elementsSelectable: Z, selectNodesOnDrag: _, defaultViewport: V, translateExtent: O, minZoom: K, maxZoom: B, preventScrolling: $, defaultMarkerColor: j, zoomOnScroll: N, zoomOnPinch: D, panOnScroll: oe, panOnScrollSpeed: ne, panOnScrollMode: le, zoomOnDoubleClick: ae, panOnDrag: he, onPaneClick: me, onPaneMouseEnter: ve, onPaneMouseMove: Ee, onPaneMouseLeave: Ve, onPaneScroll: Ue, onPaneContextMenu: Ke, onEdgeContextMenu: Qe, onEdgeMouseEnter: Oe, onEdgeMouseMove: dt, onEdgeMouseLeave: Me, onReconnect: ye, onReconnectStart: qe, onReconnectEnd: vt, reconnectRadius: Ft, noDragClassName: pn, noWheelClassName: Mn, noPanClassName: Bt, elevateEdgesOnSelect: bn, disableKeyboardA11y: mn, nodeOrigin: Jt, nodeExtent: en, rfId: In }) => {
    const tn = Rp(e, FS), We = Rp(r, YS);
    return a2(u), X.createElement(DS, {
      onPaneClick: me,
      onPaneMouseEnter: ve,
      onPaneMouseMove: Ee,
      onPaneMouseLeave: Ve,
      onPaneContextMenu: Ke,
      onPaneScroll: Ue,
      deleteKeyCode: ee,
      selectionKeyCode: F,
      selectionOnDrag: z,
      selectionMode: Q,
      onSelectionStart: S,
      onSelectionEnd: C,
      multiSelectionKeyCode: q,
      panActivationKeyCode: G,
      zoomActivationKeyCode: J,
      elementsSelectable: Z,
      onMove: o,
      onMoveStart: i,
      onMoveEnd: l,
      zoomOnScroll: N,
      zoomOnPinch: D,
      zoomOnDoubleClick: ae,
      panOnScroll: oe,
      panOnScrollSpeed: ne,
      panOnScrollMode: le,
      panOnDrag: he,
      defaultViewport: V,
      translateExtent: O,
      minZoom: K,
      maxZoom: B,
      onSelectionContextMenu: k,
      preventScrolling: $,
      noDragClassName: pn,
      noWheelClassName: Mn,
      noPanClassName: Bt,
      disableKeyboardA11y: mn
    }, X.createElement(l2, null, X.createElement(s2, {
      edgeTypes: We,
      onEdgeClick: f,
      onEdgeDoubleClick: h,
      onlyRenderVisibleElements: Y,
      onEdgeContextMenu: Qe,
      onEdgeMouseEnter: Oe,
      onEdgeMouseMove: dt,
      onEdgeMouseLeave: Me,
      onReconnect: ye,
      onReconnectStart: qe,
      onReconnectEnd: vt,
      reconnectRadius: Ft,
      defaultMarkerColor: j,
      noPanClassName: Bt,
      elevateEdgesOnSelect: !!bn,
      disableKeyboardA11y: mn,
      rfId: In
    }, X.createElement(d2, {
      style: A,
      type: E,
      component: P,
      containerStyle: I
    })), X.createElement("div", {
      className: "react-flow__edgelabel-renderer"
    }), X.createElement(HS, {
      nodeTypes: tn,
      onNodeClick: c,
      onNodeDoubleClick: m,
      onNodeMouseEnter: p,
      onNodeMouseMove: y,
      onNodeMouseLeave: v,
      onNodeContextMenu: x,
      selectNodesOnDrag: _,
      onlyRenderVisibleElements: Y,
      noPanClassName: Bt,
      noDragClassName: pn,
      disableKeyboardA11y: mn,
      nodeOrigin: Jt,
      nodeExtent: en,
      rfId: In
    })));
  };
  Tm.displayName = "GraphView";
  var f2 = L.memo(Tm);
  const Nc = [
    [
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY
    ],
    [
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY
    ]
  ], pr = {
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
    translateExtent: Nc,
    nodeExtent: Nc,
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
    connectionMode: Gr.Strict,
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
    onError: Bx,
    isValidConnection: void 0
  }, h2 = () => e1((e, r) => ({
    ...pr,
    setNodes: (o) => {
      const { nodeInternals: i, nodeOrigin: l, elevateNodesOnSelect: u } = r();
      e({
        nodeInternals: nc(o, i, l, u)
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
      const l = typeof o < "u", u = typeof i < "u", c = l ? nc(o, /* @__PURE__ */ new Map(), r().nodeOrigin, r().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
      e({
        nodeInternals: c,
        edges: u ? i : [],
        hasDefaultNodes: l,
        hasDefaultEdges: u
      });
    },
    updateNodeDimensions: (o) => {
      const { onNodesChange: i, nodeInternals: l, fitViewOnInit: u, fitViewOnInitDone: c, fitViewOnInitOptions: f, domNode: m, nodeOrigin: h } = r(), p = m == null ? void 0 : m.querySelector(".react-flow__viewport");
      if (!p) return;
      const y = window.getComputedStyle(p), { m22: v } = new window.DOMMatrixReadOnly(y.transform), x = o.reduce((S, C) => {
        const E = l.get(C.id);
        if (E == null ? void 0 : E.hidden) l.set(E.id, {
          ...E,
          [Ge]: {
            ...E[Ge],
            handleBounds: void 0
          }
        });
        else if (E) {
          const A = Uc(C.nodeElement);
          !!(A.width && A.height && (E.width !== A.width || E.height !== A.height || C.forceUpdate)) && (l.set(E.id, {
            ...E,
            [Ge]: {
              ...E[Ge],
              handleBounds: {
                source: Np(".source", C.nodeElement, v, h),
                target: Np(".target", C.nodeElement, v, h)
              }
            },
            ...A
          }), S.push({
            id: E.id,
            type: "dimensions",
            dimensions: A
          }));
        }
        return S;
      }, []);
      gm(l, h);
      const k = c || u && !c && ym(r, {
        initial: true,
        ...f
      });
      e({
        nodeInternals: new Map(l),
        fitViewOnInitDone: k
      }), (x == null ? void 0 : x.length) > 0 && (i == null ? void 0 : i(x));
    },
    updateNodePositions: (o, i = true, l = false) => {
      const { triggerNodeChanges: u } = r(), c = o.map((f) => {
        const m = {
          id: f.id,
          type: "position",
          dragging: l
        };
        return i && (m.positionAbsolute = f.positionAbsolute, m.position = f.position), m;
      });
      u(c);
    },
    triggerNodeChanges: (o) => {
      const { onNodesChange: i, nodeInternals: l, hasDefaultNodes: u, nodeOrigin: c, getNodes: f, elevateNodesOnSelect: m } = r();
      if (o == null ? void 0 : o.length) {
        if (u) {
          const h = wm(o, f()), p = nc(h, l, c, m);
          e({
            nodeInternals: p
          });
        }
        i == null ? void 0 : i(o);
      }
    },
    addSelectedNodes: (o) => {
      const { multiSelectionActive: i, edges: l, getNodes: u } = r();
      let c, f = null;
      i ? c = o.map((m) => gr(m, true)) : (c = _o(u(), o), f = _o(l, [])), wl({
        changedNodes: c,
        changedEdges: f,
        get: r,
        set: e
      });
    },
    addSelectedEdges: (o) => {
      const { multiSelectionActive: i, edges: l, getNodes: u } = r();
      let c, f = null;
      i ? c = o.map((m) => gr(m, true)) : (c = _o(l, o), f = _o(u(), [])), wl({
        changedNodes: f,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    unselectNodesAndEdges: ({ nodes: o, edges: i } = {}) => {
      const { edges: l, getNodes: u } = r(), c = o || u(), f = i || l, m = c.map((p) => (p.selected = false, gr(p.id, false))), h = f.map((p) => gr(p.id, false));
      wl({
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
      const { edges: o, getNodes: i } = r(), u = i().filter((f) => f.selected).map((f) => gr(f.id, false)), c = o.filter((f) => f.selected).map((f) => gr(f.id, false));
      wl({
        changedNodes: u,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    setNodeExtent: (o) => {
      const { nodeInternals: i } = r();
      i.forEach((l) => {
        l.positionAbsolute = Wc(l.position, o);
      }), e({
        nodeExtent: o,
        nodeInternals: new Map(i)
      });
    },
    panBy: (o) => {
      const { transform: i, width: l, height: u, d3Zoom: c, d3Selection: f, translateExtent: m } = r();
      if (!c || !f || !o.x && !o.y) return false;
      const h = Un.translate(i[0] + o.x, i[1] + o.y).scale(i[2]), p = [
        [
          0,
          0
        ],
        [
          l,
          u
        ]
      ], y = c == null ? void 0 : c.constrain()(h, p, m);
      return c.transform(f, y), i[0] !== y.x || i[1] !== y.y || i[2] !== y.k;
    },
    cancelConnection: () => e({
      connectionNodeId: pr.connectionNodeId,
      connectionHandleId: pr.connectionHandleId,
      connectionHandleType: pr.connectionHandleType,
      connectionStatus: pr.connectionStatus,
      connectionStartHandle: pr.connectionStartHandle,
      connectionEndHandle: pr.connectionEndHandle
    }),
    reset: () => e({
      ...pr
    })
  }), Object.is), Jc = ({ children: e }) => {
    const r = L.useRef(null);
    return r.current || (r.current = h2()), X.createElement(Rx, {
      value: r.current
    }, e);
  };
  Jc.displayName = "ReactFlowProvider";
  const Am = ({ children: e }) => L.useContext(ql) ? X.createElement(X.Fragment, null, e) : X.createElement(Jc, null, e);
  Am.displayName = "ReactFlowWrapper";
  const p2 = {
    input: um,
    default: Cc,
    output: dm,
    group: Zc
  }, m2 = {
    default: Hl,
    straight: Xc,
    step: Gc,
    smoothstep: Jl,
    simplebezier: Yc
  }, g2 = [
    0,
    0
  ], y2 = [
    15,
    15
  ], v2 = {
    x: 0,
    y: 0,
    zoom: 1
  }, w2 = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    zIndex: 0
  }, $m = L.forwardRef(({ nodes: e, edges: r, defaultNodes: o, defaultEdges: i, className: l, nodeTypes: u = p2, edgeTypes: c = m2, onNodeClick: f, onEdgeClick: m, onInit: h, onMove: p, onMoveStart: y, onMoveEnd: v, onConnect: x, onConnectStart: k, onConnectEnd: S, onClickConnectStart: C, onClickConnectEnd: E, onNodeMouseEnter: A, onNodeMouseMove: P, onNodeMouseLeave: I, onNodeContextMenu: F, onNodeDoubleClick: z, onNodeDragStart: Q, onNodeDrag: q, onNodeDragStop: G, onNodesDelete: J, onEdgesDelete: ee, onSelectionChange: Y, onSelectionDragStart: Z, onSelectionDrag: _, onSelectionDragStop: V, onSelectionContextMenu: O, onSelectionStart: K, onSelectionEnd: B, connectionMode: $ = Gr.Strict, connectionLineType: j = yr.Bezier, connectionLineStyle: N, connectionLineComponent: D, connectionLineContainerStyle: oe, deleteKeyCode: ne = "Backspace", selectionKeyCode: le = "Shift", selectionOnDrag: ae = false, selectionMode: he = Ls.Full, panActivationKeyCode: me = "Space", multiSelectionKeyCode: ve = Bl() ? "Meta" : "Control", zoomActivationKeyCode: Ee = Bl() ? "Meta" : "Control", snapToGrid: Ve = false, snapGrid: Ue = y2, onlyRenderVisibleElements: Ke = false, selectNodesOnDrag: Qe = true, nodesDraggable: Oe, nodesConnectable: dt, nodesFocusable: Me, nodeOrigin: ye = g2, edgesFocusable: qe, edgesUpdatable: vt, elementsSelectable: Ft, defaultViewport: pn = v2, minZoom: Mn = 0.5, maxZoom: Bt = 2, translateExtent: bn = Nc, preventScrolling: mn = true, nodeExtent: Jt, defaultMarkerColor: en = "#b1b1b7", zoomOnScroll: In = true, zoomOnPinch: tn = true, panOnScroll: We = false, panOnScrollSpeed: jt = 0.5, panOnScrollMode: gn = jr.Free, zoomOnDoubleClick: yn = true, panOnDrag: Xn = true, onPaneClick: Et, onPaneMouseEnter: nn, onPaneMouseMove: kr, onPaneMouseLeave: Er, onPaneScroll: Tn, onPaneContextMenu: vn, children: An, onEdgeContextMenu: wn, onEdgeDoubleClick: Ys, onEdgeMouseEnter: Gs, onEdgeMouseMove: Xs, onEdgeMouseLeave: Ks, onEdgeUpdate: Lo, onEdgeUpdateStart: Qs, onEdgeUpdateEnd: Cr, onReconnect: Do, onReconnectStart: _r, onReconnectEnd: ra, reconnectRadius: Nr = 10, edgeUpdaterRadius: Xr = 10, onNodesChange: Kr, onEdgesChange: Oo, noDragClassName: oa = "nodrag", noWheelClassName: sa = "nowheel", noPanClassName: Zs = "nopan", fitView: $n = false, fitViewOptions: qs, connectOnClick: Js = true, attributionPosition: ia, proOptions: ei, defaultEdgeOptions: ti, elevateNodesOnSelect: ni = true, elevateEdgesOnSelect: ri = false, disableKeyboardA11y: oi = false, autoPanOnConnect: la = true, autoPanOnNodeDrag: Be = true, connectionRadius: aa = 20, isValidConnection: Fo, onError: si, style: Qr, id: ii, nodeDragThreshold: li, ...Zr }, Ht) => {
    const Bo = ii || "1";
    return X.createElement("div", {
      ...Zr,
      style: {
        ...Qr,
        ...w2
      },
      ref: Ht,
      className: ct([
        "react-flow",
        l
      ]),
      "data-testid": "rf__wrapper",
      id: ii
    }, X.createElement(Am, null, X.createElement(f2, {
      onInit: h,
      onMove: p,
      onMoveStart: y,
      onMoveEnd: v,
      onNodeClick: f,
      onEdgeClick: m,
      onNodeMouseEnter: A,
      onNodeMouseMove: P,
      onNodeMouseLeave: I,
      onNodeContextMenu: F,
      onNodeDoubleClick: z,
      nodeTypes: u,
      edgeTypes: c,
      connectionLineType: j,
      connectionLineStyle: N,
      connectionLineComponent: D,
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
      translateExtent: bn,
      minZoom: Mn,
      maxZoom: Bt,
      preventScrolling: mn,
      zoomOnScroll: In,
      zoomOnPinch: tn,
      zoomOnDoubleClick: yn,
      panOnScroll: We,
      panOnScrollSpeed: jt,
      panOnScrollMode: gn,
      panOnDrag: Xn,
      onPaneClick: Et,
      onPaneMouseEnter: nn,
      onPaneMouseMove: kr,
      onPaneMouseLeave: Er,
      onPaneScroll: Tn,
      onPaneContextMenu: vn,
      onSelectionContextMenu: O,
      onSelectionStart: K,
      onSelectionEnd: B,
      onEdgeContextMenu: wn,
      onEdgeDoubleClick: Ys,
      onEdgeMouseEnter: Gs,
      onEdgeMouseMove: Xs,
      onEdgeMouseLeave: Ks,
      onReconnect: Do ?? Lo,
      onReconnectStart: _r ?? Qs,
      onReconnectEnd: ra ?? Cr,
      reconnectRadius: Nr ?? Xr,
      defaultMarkerColor: en,
      noDragClassName: oa,
      noWheelClassName: sa,
      noPanClassName: Zs,
      elevateEdgesOnSelect: ri,
      rfId: Bo,
      disableKeyboardA11y: oi,
      nodeOrigin: ye,
      nodeExtent: Jt
    }), X.createElement(uS, {
      nodes: e,
      edges: r,
      defaultNodes: o,
      defaultEdges: i,
      onConnect: x,
      onConnectStart: k,
      onConnectEnd: S,
      onClickConnectStart: C,
      onClickConnectEnd: E,
      nodesDraggable: Oe,
      nodesConnectable: dt,
      nodesFocusable: Me,
      edgesFocusable: qe,
      edgesUpdatable: vt,
      elementsSelectable: Ft,
      elevateNodesOnSelect: ni,
      minZoom: Mn,
      maxZoom: Bt,
      nodeExtent: Jt,
      onNodesChange: Kr,
      onEdgesChange: Oo,
      snapToGrid: Ve,
      snapGrid: Ue,
      connectionMode: $,
      translateExtent: bn,
      connectOnClick: Js,
      defaultEdgeOptions: ti,
      fitView: $n,
      fitViewOptions: qs,
      onNodesDelete: J,
      onEdgesDelete: ee,
      onNodeDragStart: Q,
      onNodeDrag: q,
      onNodeDragStop: G,
      onSelectionDrag: _,
      onSelectionDragStart: Z,
      onSelectionDragStop: V,
      noPanClassName: Zs,
      nodeOrigin: ye,
      rfId: Bo,
      autoPanOnConnect: la,
      autoPanOnNodeDrag: Be,
      onError: si,
      connectionRadius: aa,
      isValidConnection: Fo,
      nodeDragThreshold: li
    }), X.createElement(lS, {
      onSelectionChange: Y
    }), An, X.createElement(zx, {
      proOptions: ei,
      position: ia
    }), X.createElement(pS, {
      rfId: Bo,
      disableKeyboardA11y: oi
    })));
  });
  $m.displayName = "ReactFlow";
  const x2 = (e) => {
    var _a;
    return (_a = e.domNode) == null ? void 0 : _a.querySelector(".react-flow__edgelabel-renderer");
  };
  function S2({ children: e }) {
    const r = Re(x2);
    return r ? $x.createPortal(e, r) : null;
  }
  function Rm(e, r) {
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
  const Pm = ({ id: e, x: r, y: o, width: i, height: l, style: u, color: c, strokeColor: f, strokeWidth: m, className: h, borderRadius: p, shapeRendering: y, onClick: v, selected: x }) => {
    const { background: k, backgroundColor: S } = u || {}, C = c || k || S;
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
      fill: C,
      stroke: f,
      strokeWidth: m,
      shapeRendering: y,
      onClick: v ? (E) => v(E, e) : void 0
    });
  };
  Pm.displayName = "MiniMapNode";
  var k2 = L.memo(Pm);
  const E2 = (e) => e.nodeOrigin, C2 = (e) => e.getNodes().filter((r) => !r.hidden && r.width && r.height), ic = (e) => e instanceof Function ? e : () => e;
  function _2({ nodeStrokeColor: e = "transparent", nodeColor: r = "#e2e2e2", nodeClassName: o = "", nodeBorderRadius: i = 5, nodeStrokeWidth: l = 2, nodeComponent: u = k2, onClick: c }) {
    const f = Re(C2, Rm), m = Re(E2), h = ic(r), p = ic(e), y = ic(o), v = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
    return X.createElement(X.Fragment, null, f.map((x) => {
      const { x: k, y: S } = Vr(x, m).positionAbsolute;
      return X.createElement(u, {
        key: x.id,
        x: k,
        y: S,
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
  var N2 = L.memo(_2);
  const M2 = 200, b2 = 150, I2 = (e) => {
    const r = e.getNodes(), o = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2]
    };
    return {
      viewBB: o,
      boundingRect: r.length > 0 ? Ox(ea(r, e.nodeOrigin), o) : o,
      rfId: e.rfId
    };
  }, T2 = "react-flow__minimap-desc";
  function zm({ style: e, className: r, nodeStrokeColor: o = "transparent", nodeColor: i = "#e2e2e2", nodeClassName: l = "", nodeBorderRadius: u = 5, nodeStrokeWidth: c = 2, nodeComponent: f, maskColor: m = "rgb(240, 240, 240, 0.6)", maskStrokeColor: h = "none", maskStrokeWidth: p = 1, position: y = "bottom-right", onClick: v, onNodeClick: x, pannable: k = false, zoomable: S = false, ariaLabel: C = "React Flow mini map", inversePan: E = false, zoomStep: A = 10, offsetScale: P = 5 }) {
    const I = rt(), F = L.useRef(null), { boundingRect: z, viewBB: Q, rfId: q } = Re(I2, Rm), G = (e == null ? void 0 : e.width) ?? M2, J = (e == null ? void 0 : e.height) ?? b2, ee = z.width / G, Y = z.height / J, Z = Math.max(ee, Y), _ = Z * G, V = Z * J, O = P * Z, K = z.x - (_ - z.width) / 2 - O, B = z.y - (V - z.height) / 2 - O, $ = _ + O * 2, j = V + O * 2, N = `${T2}-${q}`, D = L.useRef(0);
    D.current = Z, L.useEffect(() => {
      if (F.current) {
        const le = Qt(F.current), ae = (ve) => {
          const { transform: Ee, d3Selection: Ve, d3Zoom: Ue } = I.getState();
          if (ve.sourceEvent.type !== "wheel" || !Ve || !Ue) return;
          const Ke = -ve.sourceEvent.deltaY * (ve.sourceEvent.deltaMode === 1 ? 0.05 : ve.sourceEvent.deltaMode ? 1 : 2e-3) * A, Qe = Ee[2] * Math.pow(2, Ke);
          Ue.scaleTo(Ve, Qe);
        }, he = (ve) => {
          const { transform: Ee, d3Selection: Ve, d3Zoom: Ue, translateExtent: Ke, width: Qe, height: Oe } = I.getState();
          if (ve.sourceEvent.type !== "mousemove" || !Ve || !Ue) return;
          const dt = D.current * Math.max(1, Ee[2]) * (E ? -1 : 1), Me = {
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
          ], qe = Un.translate(Me.x, Me.y).scale(Ee[2]), vt = Ue.constrain()(qe, ye, Ke);
          Ue.transform(Ve, vt);
        }, me = j0().on("zoom", k ? he : null).on("zoom.wheel", S ? ae : null);
        return le.call(me), () => {
          le.on("zoom", null);
        };
      }
    }, [
      k,
      S,
      E,
      A
    ]);
    const oe = v ? (le) => {
      const ae = dn(le);
      v(le, {
        x: ae[0],
        y: ae[1]
      });
    } : void 0, ne = x ? (le, ae) => {
      const he = I.getState().nodeInternals.get(ae);
      x(le, he);
    } : void 0;
    return X.createElement(Vc, {
      position: y,
      style: e,
      className: ct([
        "react-flow__minimap",
        r
      ]),
      "data-testid": "rf__minimap"
    }, X.createElement("svg", {
      width: G,
      height: J,
      viewBox: `${K} ${B} ${$} ${j}`,
      role: "img",
      "aria-labelledby": N,
      ref: F,
      onClick: oe
    }, C && X.createElement("title", {
      id: N
    }, C), X.createElement(N2, {
      onClick: ne,
      nodeColor: i,
      nodeStrokeColor: o,
      nodeBorderRadius: u,
      nodeClassName: l,
      nodeStrokeWidth: c,
      nodeComponent: f
    }), X.createElement("path", {
      className: "react-flow__minimap-mask",
      d: `M${K - O},${B - O}h${$ + O * 2}v${j + O * 2}h${-$ - O * 2}z
        M${Q.x},${Q.y}h${Q.width}v${Q.height}h${-Q.width}z`,
      fill: m,
      fillRule: "evenodd",
      stroke: h,
      strokeWidth: p,
      pointerEvents: "none"
    })));
  }
  zm.displayName = "MiniMap";
  var A2 = L.memo(zm);
  function $2(e, r) {
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
  function R2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, X.createElement("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
    }));
  }
  function P2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5"
    }, X.createElement("path", {
      d: "M0 0h32v4.2H0z"
    }));
  }
  function z2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30"
    }, X.createElement("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
    }));
  }
  function L2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, X.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
    }));
  }
  function D2() {
    return X.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, X.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
    }));
  }
  const Is = ({ children: e, className: r, ...o }) => X.createElement("button", {
    type: "button",
    className: ct([
      "react-flow__controls-button",
      r
    ]),
    ...o
  }, e);
  Is.displayName = "ControlButton";
  const O2 = (e) => ({
    isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
    minZoomReached: e.transform[2] <= e.minZoom,
    maxZoomReached: e.transform[2] >= e.maxZoom
  }), Lm = ({ style: e, showZoom: r = true, showFitView: o = true, showInteractive: i = true, fitViewOptions: l, onZoomIn: u, onZoomOut: c, onFitView: f, onInteractiveChange: m, className: h, children: p, position: y = "bottom-left" }) => {
    const v = rt(), [x, k] = L.useState(false), { isInteractive: S, minZoomReached: C, maxZoomReached: E } = Re(O2, $2), { zoomIn: A, zoomOut: P, fitView: I } = Us();
    if (L.useEffect(() => {
      k(true);
    }, []), !x) return null;
    const F = () => {
      A(), u == null ? void 0 : u();
    }, z = () => {
      P(), c == null ? void 0 : c();
    }, Q = () => {
      I(l), f == null ? void 0 : f();
    }, q = () => {
      v.setState({
        nodesDraggable: !S,
        nodesConnectable: !S,
        elementsSelectable: !S
      }), m == null ? void 0 : m(!S);
    };
    return X.createElement(Vc, {
      className: ct([
        "react-flow__controls",
        h
      ]),
      position: y,
      style: e,
      "data-testid": "rf__controls"
    }, r && X.createElement(X.Fragment, null, X.createElement(Is, {
      onClick: F,
      className: "react-flow__controls-zoomin",
      title: "zoom in",
      "aria-label": "zoom in",
      disabled: E
    }, X.createElement(R2, null)), X.createElement(Is, {
      onClick: z,
      className: "react-flow__controls-zoomout",
      title: "zoom out",
      "aria-label": "zoom out",
      disabled: C
    }, X.createElement(P2, null))), o && X.createElement(Is, {
      className: "react-flow__controls-fitview",
      onClick: Q,
      title: "fit view",
      "aria-label": "fit view"
    }, X.createElement(z2, null)), i && X.createElement(Is, {
      className: "react-flow__controls-interactive",
      onClick: q,
      title: "toggle interactivity",
      "aria-label": "toggle interactivity"
    }, S ? X.createElement(D2, null) : X.createElement(L2, null)), p);
  };
  Lm.displayName = "Controls";
  var F2 = L.memo(Lm);
  function B2(e, r) {
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
  function j2({ color: e, dimensions: r, lineWidth: o }) {
    return X.createElement("path", {
      stroke: e,
      strokeWidth: o,
      d: `M${r[0] / 2} 0 V${r[1]} M0 ${r[1] / 2} H${r[0]}`
    });
  }
  function H2({ color: e, radius: r }) {
    return X.createElement("circle", {
      cx: r,
      cy: r,
      r,
      fill: e
    });
  }
  const V2 = {
    [qt.Dots]: "#91919a",
    [qt.Lines]: "#eee",
    [qt.Cross]: "#e2e2e2"
  }, U2 = {
    [qt.Dots]: 1,
    [qt.Lines]: 1,
    [qt.Cross]: 6
  }, W2 = (e) => ({
    transform: e.transform,
    patternId: `pattern-${e.rfId}`
  });
  function Dm({ id: e, variant: r = qt.Dots, gap: o = 20, size: i, lineWidth: l = 1, offset: u = 2, color: c, style: f, className: m }) {
    const h = L.useRef(null), { transform: p, patternId: y } = Re(W2, B2), v = c || V2[r], x = i || U2[r], k = r === qt.Dots, S = r === qt.Cross, C = Array.isArray(o) ? o : [
      o,
      o
    ], E = [
      C[0] * p[2] || 1,
      C[1] * p[2] || 1
    ], A = x * p[2], P = S ? [
      A,
      A
    ] : E, I = k ? [
      A / u,
      A / u
    ] : [
      P[0] / u,
      P[1] / u
    ];
    return X.createElement("svg", {
      className: ct([
        "react-flow__background",
        m
      ]),
      style: {
        ...f,
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
      patternTransform: `translate(-${I[0]},-${I[1]})`
    }, k ? X.createElement(H2, {
      color: v,
      radius: A / u
    }) : X.createElement(j2, {
      dimensions: P,
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
  Dm.displayName = "Background";
  var Y2 = L.memo(Dm);
  const Ro = 220, _n = 88, Pp = 160, Ws = 280, zo = 118, ta = 32, Ur = 720, G2 = 12, Il = {
    0: 0,
    1: 400,
    2: 800,
    3: 1200,
    4: 1600,
    5: 2e3,
    6: 2400
  }, X2 = {
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
  }, K2 = {
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
  }, Q2 = [
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
  ], Z2 = 1e3, q2 = 2e3, zp = (e) => {
    let r;
    const o = /* @__PURE__ */ new Set(), i = (h, p) => {
      const y = typeof h == "function" ? h(r) : h;
      if (!Object.is(y, r)) {
        const v = r;
        r = p ?? (typeof y != "object" || y === null) ? y : Object.assign({}, r, y), o.forEach((x) => x(r, v));
      }
    }, l = () => r, f = {
      setState: i,
      getState: l,
      getInitialState: () => m,
      subscribe: (h) => (o.add(h), () => o.delete(h))
    }, m = r = e(i, l, f);
    return f;
  }, J2 = ((e) => e ? zp(e) : zp), ek = (e) => e;
  function tk(e, r = ek) {
    const o = X.useSyncExternalStore(e.subscribe, X.useCallback(() => r(e.getState()), [
      e,
      r
    ]), X.useCallback(() => r(e.getInitialState()), [
      e,
      r
    ]));
    return X.useDebugValue(o), o;
  }
  const Lp = (e) => {
    const r = J2(e), o = (i) => tk(r, i);
    return Object.assign(o, r), o;
  }, na = ((e) => e ? Lp(e) : Lp);
  function nk(e) {
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
  function Dp(e, r) {
    const o = [], i = [
      e
    ];
    for (; i.length > 0; ) {
      const l = i.pop(), u = r.get(l);
      if (u) for (const c of u) o.push(c), i.push(c);
    }
    return o;
  }
  const Te = na((e) => ({
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
      childClusterMap: nk(r)
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
        const c = Dp(r, o.childClusterMap);
        for (const f of c) i.delete(f);
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
      for (const f of u) {
        c.delete(f);
        const m = Dp(f, o.childClusterMap);
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
  function Om(e) {
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
  const Op = Om({
    components: [],
    connections: []
  }), Fp = [], Dt = na((e, r) => ({
    model: null,
    ...Op,
    loadModel: (o) => e({
      model: o,
      ...Om(o)
    }),
    clearModel: () => e({
      model: null,
      ...Op
    }),
    getComponent: (o) => r().componentById.get(o),
    getIncoming: (o) => r().incomingByComponentId.get(o) ?? Fp,
    getOutgoing: (o) => r().outgoingByComponentId.get(o) ?? Fp
  }));
  function lc() {
    return {
      highlightedNodeIds: /* @__PURE__ */ new Set(),
      highlightedEdgeIds: /* @__PURE__ */ new Set(),
      selectedNodeIds: /* @__PURE__ */ new Set()
    };
  }
  function rk(e) {
    var _a;
    const r = Dt.getState(), o = new Set(e), i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = [
      ...o
    ], c = u[u.length - 1] ?? null;
    if (o.size === 0) return {
      selectedNodeId: null,
      selectedNodeIds: o,
      highlightedNodeIds: i,
      highlightedEdgeIds: l
    };
    if (o.size === 1) {
      const [f] = o;
      if (f) {
        i.add(f);
        for (const m of r.getIncoming(f)) i.add(m.sourceComponentId), l.add(m.id);
        for (const m of r.getOutgoing(f)) i.add(m.targetComponentId), l.add(m.id);
        return {
          selectedNodeId: f,
          selectedNodeIds: o,
          highlightedNodeIds: i,
          highlightedEdgeIds: l
        };
      }
    }
    for (const f of o) i.add(f);
    for (const f of ((_a = r.model) == null ? void 0 : _a.connections) ?? []) o.has(f.sourceComponentId) && o.has(f.targetComponentId) && l.add(f.id);
    return {
      selectedNodeId: c,
      selectedNodeIds: o,
      highlightedNodeIds: i,
      highlightedEdgeIds: l
    };
  }
  const $e = na((e) => ({
    selectedNodeId: null,
    expandedNodeId: null,
    searchQuery: "",
    ...lc(),
    selectNode: (r, o) => {
      const l = Dt.getState().model;
      if (!r || !l) {
        Te.setState({
          sidebarCollapsed: true
        }), e({
          selectedNodeId: null,
          ...lc()
        });
        return;
      }
      Te.setState({
        sidebarCollapsed: false
      });
      const u = new Set($e.getState().selectedNodeIds);
      (o == null ? void 0 : o.additive) ?? false ? u.has(r) ? u.delete(r) : u.add(r) : (u.clear(), u.add(r));
      const f = rk(u);
      e(f);
    },
    clearSelection: () => {
      Te.setState({
        sidebarCollapsed: true
      }), e({
        selectedNodeId: null,
        ...lc()
      });
    },
    expandNode: (r) => e((o) => ({
      expandedNodeId: o.expandedNodeId === r ? null : r
    })),
    setSearchQuery: (r) => e({
      searchQuery: r
    })
  })), ok = 1.35;
  function ed() {
    const e = Us(), r = $e((i) => i.selectNode), o = Te((i) => i.expandClusterForComponent);
    return L.useCallback((i) => {
      r(i), o(i);
      const l = () => {
        const u = e.getNode(i);
        if (!u) return;
        const c = u.width ?? Ro, f = u.height ?? _n;
        e.setCenter(u.position.x + c / 2, u.position.y + f / 2, {
          duration: 420,
          zoom: ok
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
  function sk() {
    if (typeof window > "u") return "dark";
    const e = localStorage.getItem("ip-xact-theme");
    return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  const nt = na((e, r) => ({
    theme: sk(),
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
  function ik() {
    const r = nt((o) => o.theme) === "dark";
    return b.jsx(Y2, {
      color: r ? "rgba(148, 163, 184, 0.18)" : "rgba(0, 0, 0, 0.08)",
      gap: 24,
      size: 1.2,
      variant: qt.Dots
    });
  }
  const St = {
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
  }, Wn = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lk = '"SF Mono", "Cascadia Code", "Fira Code", Consolas, monospace', Bp = {
    in: "#22c55e",
    out: "#3b82f6",
    inout: "#eab308"
  }, Sl = 3, Hn = 6;
  function ak(e, r, o, i, l, u) {
    const { width: c, height: f } = e.canvas;
    e.clearRect(0, 0, c, f);
    const m = -i.x / i.zoom, h = -i.y / i.zoom, p = m + c / i.zoom, y = h + f / i.zoom, v = [];
    for (const k of r) {
      const S = Tl(k), C = Al(k), E = k.position.x + S, A = k.position.y + C;
      k.position.x < p && E > m && k.position.y < y && A > h && v.push(k);
    }
    const x = new Map(v.map((k) => [
      k.id,
      k
    ]));
    e.save(), e.translate(i.x, i.y), e.scale(i.zoom, i.zoom);
    for (const k of o) {
      const S = x.get(k.source), C = x.get(k.target);
      if (!S || !C) continue;
      const E = S.position.x + Tl(S) / 2, A = S.position.y + Al(S) / 2, P = C.position.x + Tl(C) / 2, I = C.position.y + Al(C) / 2, F = u.has(k.id);
      e.beginPath(), e.moveTo(E, A), e.lineTo(P, I), e.strokeStyle = F ? "#22d3ee" : "#64748b", e.lineWidth = F ? 2 : 1.5, e.globalAlpha = F ? 0.9 : 0.4, e.stroke(), F && uk(e, E, A, P, I);
    }
    e.globalAlpha = 1;
    for (const k of v) ck(e, k, i.zoom, l.has(k.id));
    e.restore(), e.fillStyle = "rgba(15, 23, 42, 0.8)", e.fillRect(8, f - 32, 180, 24), e.fillStyle = "#94a3b8", e.font = `12px ${Wn}`, e.fillText(`${v.length} / ${r.length} nodes visible`, 16, f - 14);
  }
  function uk(e, r, o, i, l) {
    const u = Math.atan2(l - o, i - r), c = 8;
    e.beginPath(), e.moveTo(i, l), e.lineTo(i - c * Math.cos(u - Math.PI / 6), l - c * Math.sin(u - Math.PI / 6)), e.moveTo(i, l), e.lineTo(i - c * Math.cos(u + Math.PI / 6), l - c * Math.sin(u + Math.PI / 6)), e.strokeStyle = "#22d3ee", e.lineWidth = 2, e.globalAlpha = 0.9, e.stroke();
  }
  function ck(e, r, o, i) {
    const l = r.position.x, u = r.position.y, c = Tl(r), f = Al(r);
    if (r.data.kind === "busChannel") {
      hk(e, l, u, c, f, r);
      return;
    }
    if (r.data.kind === "cluster") {
      fk(e, l, u, c, f, r, o, i);
      return;
    }
    const m = r.data, h = St[m.component.type];
    e.shadowColor = "rgba(0, 0, 0, 0.15)", e.shadowBlur = 8, e.shadowOffsetY = 2, e.fillStyle = "#ffffff", e.strokeStyle = i ? "#22d3ee" : `${h.border}60`, e.lineWidth = i ? 2 : 1, td(e, l, u, c, f, 12), e.fill(), e.shadowColor = "transparent", e.fillStyle = h.base, e.beginPath(), e.roundRect(l, u, 6, f, [
      12,
      0,
      0,
      12
    ]), e.fill();
    const p = Math.min(Math.max(24, 40 * o), 32), y = l + 16, v = u + (f - p) / 2;
    e.fillStyle = `${h.border}18`, e.strokeStyle = `${h.border}60`, e.lineWidth = 1, e.beginPath(), e.roundRect(y, v, p, p, 6), e.fill(), e.stroke(), e.fillStyle = h.border, e.font = `bold ${Math.max(8, 10)}px ${Wn}`, e.textAlign = "center", e.textBaseline = "middle";
    const x = m.component.type.slice(0, 3).toUpperCase();
    e.fillText(x, y + p / 2, v + p / 2), e.fillStyle = "#0f172a", e.font = `600 ${Math.max(10, 13)}px ${Wn}`, e.textAlign = "left", e.textBaseline = "top";
    const k = y + p + 8, S = c - (k - l) - 8;
    e.save(), e.beginPath(), e.rect(l, u, c, f), e.clip(), e.fillText(Vl(e, m.component.name, S), k, u + 14), e.fillStyle = "#64748b", e.font = `${Math.max(8, 10)}px ${lk}`, e.fillText(Vl(e, m.component.id, S), k, u + 30), e.restore(), dk(e, m.component.ports, l, u, c, f), e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function dk(e, r, o, i, l, u, c) {
    if (!r || r.length === 0) return;
    const f = r.filter((S) => S.direction === "in"), m = r.filter((S) => S.direction === "out"), h = r.filter((S) => S.direction === "inout"), p = [
      ...f,
      ...h
    ], y = [
      ...m
    ], v = Math.min(Math.max(p.length, y.length), Hn), x = Math.min(14, (u - 16) / Math.max(v, 1)), k = i + (u - (v - 1) * x) / 2;
    for (let S = 0; S < Math.min(p.length, Hn); S++) {
      const C = p[S];
      if (!C) continue;
      const E = k + S * x;
      e.beginPath(), e.arc(o + l + Sl + 1, E, Sl, 0, Math.PI * 2), e.fillStyle = Bp[C.direction], e.fill();
    }
    p.length > Hn && (e.fillStyle = "#94a3b8", e.font = `bold ${Math.max(7, 8)}px ${Wn}`, e.textAlign = "left", e.textBaseline = "middle", e.fillText(`+${p.length - Hn}`, o + l + 8, k + Hn * x));
    for (let S = 0; S < Math.min(y.length, Hn); S++) {
      const C = y[S];
      if (!C) continue;
      const E = k + S * x;
      e.beginPath(), e.arc(o - Sl - 1, E, Sl, 0, Math.PI * 2), e.fillStyle = Bp[C.direction], e.fill();
    }
    y.length > Hn && (e.fillStyle = "#94a3b8", e.font = `bold ${Math.max(7, 8)}px ${Wn}`, e.textAlign = "right", e.textBaseline = "middle", e.fillText(`+${y.length - Hn}`, o - 8, k + Hn * x));
  }
  function fk(e, r, o, i, l, u, c, f) {
    var _a;
    if (u.data.kind !== "cluster") return;
    const m = u.data.cluster;
    e.shadowColor = "rgba(0, 0, 0, 0.1)", e.shadowBlur = 6, e.shadowOffsetY = 2, e.fillStyle = "#ffffff", e.strokeStyle = f ? "#22d3ee" : "#cbd5e1", e.lineWidth = f ? 2 : 1, td(e, r, o, i, l, 12), e.fill(), e.shadowColor = "transparent";
    const h = Object.keys(m.typeBreakdown ?? {})[0], p = h ? (_a = St[h]) == null ? void 0 : _a.base : "#94a3b8";
    if (e.fillStyle = p, e.beginPath(), e.roundRect(r, o, 6, l, [
      12,
      0,
      0,
      12
    ]), e.fill(), e.fillStyle = "#0f172a", e.font = `600 ${Math.max(10, 13)}px ${Wn}`, e.textAlign = "left", e.textBaseline = "top", e.fillText(Vl(e, m.name, i - 20), r + 16, o + 14), e.fillStyle = "#64748b", e.font = `${Math.max(8, 11)}px ${Wn}`, e.fillText(`${m.componentCount} blocks`, r + 16, o + 34), m.typeBreakdown) {
      const y = Object.entries(m.typeBreakdown), v = o + 52;
      let x = r + 16;
      for (const [k, S] of y.slice(0, 3)) {
        const C = `${k}:${S}`, E = e.measureText(C).width + 12;
        e.fillStyle = "#f1f5f9", e.beginPath(), e.roundRect(x, v, E, 16, 4), e.fill(), e.fillStyle = "#64748b", e.font = `${Math.max(7, 9)}px ${Wn}`, e.fillText(C, x + 6, v + 3), x += E + 4;
      }
    }
    e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function hk(e, r, o, i, l, u, c) {
    if (u.data.kind !== "busChannel") return;
    const f = u.data, m = St[f.component.type];
    e.fillStyle = `${m.base}30`, e.strokeStyle = `${m.base}60`, e.lineWidth = 1, td(e, r, o, i, l, 4), e.fill(), e.stroke(), e.fillStyle = m.base, e.fillRect(r + 2, o, i - 4, 2), e.fillRect(r + 2, o + l - 2, i - 4, 2), e.save(), e.translate(r + i / 2, o + l / 2), e.rotate(-Math.PI / 2), e.fillStyle = m.text, e.font = `600 ${Math.max(8, 10)}px ${Wn}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText(Vl(e, f.component.name, l - 8), 0, 0), e.restore();
  }
  function Tl(e) {
    return e.data.kind === "busChannel" ? ta : e.data.kind === "cluster" ? Ws : Ro;
  }
  function Al(e) {
    return e.data.kind === "busChannel" ? Ur : e.data.kind === "cluster" ? zo : _n;
  }
  function td(e, r, o, i, l, u) {
    e.beginPath(), e.moveTo(r + u, o), e.lineTo(r + i - u, o), e.quadraticCurveTo(r + i, o, r + i, o + u), e.lineTo(r + i, o + l - u), e.quadraticCurveTo(r + i, o + l, r + i - u, o + l), e.lineTo(r + u, o + l), e.quadraticCurveTo(r, o + l, r, o + l - u), e.lineTo(r, o + u), e.quadraticCurveTo(r, o, r + u, o), e.closePath();
  }
  function Vl(e, r, o) {
    if (e.measureText(r).width <= o) return r;
    let i = r;
    for (; i.length > 0 && e.measureText(i + "...").width > o; ) i = i.slice(0, -1);
    return i + "...";
  }
  function pk({ width: e, height: r }) {
    const o = L.useRef(null), i = Te((z) => z.nodes), l = Te((z) => z.edges), u = $e((z) => z.selectNode), c = $e((z) => z.clearSelection), f = $e((z) => z.selectedNodeIds), m = $e((z) => z.highlightedEdgeIds), [h, p] = L.useState({
      x: 0,
      y: 0,
      zoom: 0.1
    }), [y, v] = L.useState(false), [x, k] = L.useState({
      x: 0,
      y: 0
    }), [S, C] = L.useState({
      x: 0,
      y: 0
    });
    L.useEffect(() => {
      if (i.length === 0) return;
      let z = 1 / 0, Q = 1 / 0, q = -1 / 0, G = -1 / 0;
      for (const B of i) z = Math.min(z, B.position.x), Q = Math.min(Q, B.position.y), q = Math.max(q, B.position.x + Ro), G = Math.max(G, B.position.y + _n);
      const J = q - z, ee = G - Q, Y = 100, Z = (e - Y * 2) / J, _ = (r - Y * 2) / ee, V = Math.min(Z, _, 0.3), O = (z + q) / 2, K = (Q + G) / 2;
      p({
        x: e / 2 - O * V,
        y: r / 2 - K * V,
        zoom: V
      });
    }, [
      i,
      e,
      r
    ]), L.useEffect(() => {
      const z = o.current;
      if (!z) return;
      const Q = z.getContext("2d");
      if (!Q) return;
      const q = window.devicePixelRatio || 1;
      z.width = e * q, z.height = r * q, Q.scale(q, q), ak(Q, i, l, {
        ...h
      }, f, m);
    }, [
      i,
      l,
      h,
      e,
      r,
      f,
      m
    ]);
    const E = L.useCallback((z) => {
      v(true), k({
        x: z.clientX,
        y: z.clientY
      }), C({
        x: h.x,
        y: h.y
      });
    }, [
      h
    ]), A = L.useCallback((z) => {
      if (!y) return;
      const Q = z.clientX - x.x, q = z.clientY - x.y;
      p((G) => ({
        ...G,
        x: S.x + Q,
        y: S.y + q
      }));
    }, [
      y,
      x,
      S
    ]), P = L.useCallback(() => {
      v(false);
    }, []), I = L.useCallback((z) => {
      var _a;
      z.preventDefault();
      const Q = z.deltaY > 0 ? 0.9 : 1.1, q = Math.max(0.02, Math.min(1, h.zoom * Q)), G = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!G) return;
      const J = z.clientX - G.left, ee = z.clientY - G.top, Y = (J - h.x) / h.zoom, Z = (ee - h.y) / h.zoom;
      p({
        x: J - Y * q,
        y: ee - Z * q,
        zoom: q
      });
    }, [
      h
    ]), F = L.useCallback((z) => {
      var _a;
      if (y) return;
      const Q = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!Q) return;
      const q = z.clientX - Q.left, G = z.clientY - Q.top, J = (q - h.x) / h.zoom, ee = (G - h.y) / h.zoom;
      for (const Y of i) {
        const Z = Y.data.kind === "busChannel" ? ta : Y.data.kind === "cluster" ? Ws : Ro, _ = Y.data.kind === "busChannel" ? Ur : Y.data.kind === "cluster" ? zo : _n;
        if (J >= Y.position.x && J <= Y.position.x + Z && ee >= Y.position.y && ee <= Y.position.y + _) {
          Y.data.kind === "component" ? u(Y.id, {
            additive: z.ctrlKey || z.metaKey || z.shiftKey
          }) : c();
          return;
        }
      }
      z.ctrlKey || z.metaKey || z.shiftKey || c();
    }, [
      c,
      y,
      h,
      i,
      u
    ]);
    return b.jsx("canvas", {
      ref: o,
      style: {
        width: e,
        height: r,
        cursor: y ? "grabbing" : "grab"
      },
      onMouseDown: E,
      onMouseMove: A,
      onMouseUp: P,
      onMouseLeave: P,
      onWheel: I,
      onClick: F
    });
  }
  function mk({ x: e, y: r, width: o = 220, height: i = 88, delay: l = 0 }) {
    return b.jsx("div", {
      className: "absolute animate-pulse rounded-xl border border-white/5 bg-gradient-to-br from-shell-800/50 to-shell-950/50",
      style: {
        left: e,
        top: r,
        width: o,
        height: i,
        animationDelay: `${l}ms`,
        animationDuration: "1.5s"
      },
      children: b.jsxs("div", {
        className: "flex h-full",
        children: [
          b.jsx("div", {
            className: "w-1.5 shrink-0 rounded-l-xl bg-white/5"
          }),
          b.jsxs("div", {
            className: "flex-1 p-3.5",
            children: [
              b.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  b.jsx("div", {
                    className: "h-10 w-10 shrink-0 rounded-md bg-white/5"
                  }),
                  b.jsxs("div", {
                    className: "flex-1",
                    children: [
                      b.jsx("div", {
                        className: "h-4 w-24 rounded bg-white/5"
                      }),
                      b.jsx("div", {
                        className: "mt-1 h-3 w-16 rounded bg-white/5"
                      })
                    ]
                  })
                ]
              }),
              b.jsxs("div", {
                className: "mt-3 grid grid-cols-2 gap-2",
                children: [
                  b.jsx("div", {
                    className: "h-6 rounded bg-white/5"
                  }),
                  b.jsx("div", {
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
  const gk = L.memo(mk);
  function yk({ x1: e, y1: r, x2: o, y2: i, delay: l = 0 }) {
    const u = (e + o) / 2, c = `M ${e} ${r} L ${u} ${r} L ${u} ${i} L ${o} ${i}`;
    return b.jsx("path", {
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
  const vk = L.memo(yk);
  function jp() {
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
    return b.jsx("div", {
      className: "absolute inset-0 flex items-center justify-center bg-shell-950/80 backdrop-blur-sm",
      children: b.jsxs("div", {
        className: "relative h-[480px] w-[960px]",
        children: [
          b.jsx("svg", {
            className: "absolute inset-0 h-full w-full",
            children: r.map((o, i) => b.jsx(vk, {
              ...o,
              delay: i * 100
            }, i))
          }),
          e.map((o, i) => b.jsx(gk, {
            ...o,
            delay: i * 100
          }, i)),
          b.jsx("div", {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-center",
            children: b.jsxs("div", {
              className: "flex items-center gap-3 text-sm text-slate-400",
              children: [
                b.jsxs("svg", {
                  className: "h-5 w-5 animate-spin",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    b.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4"
                    }),
                    b.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    })
                  ]
                }),
                b.jsx("span", {
                  children: "Building architecture diagram..."
                })
              ]
            })
          })
        ]
      })
    });
  }
  function wk() {
    const r = nt((o) => o.theme) === "dark";
    return b.jsx(A2, {
      className: `!border ${r ? "!border-white/10 !bg-shell-950/90" : "!border-slate-300 !bg-white/90"}`,
      maskColor: r ? "rgba(2, 6, 23, 0.58)" : "rgba(255, 252, 249, 0.58)",
      nodeBorderRadius: 8,
      nodeColor: r ? "#334155" : "#94a3b8",
      pannable: true,
      zoomable: true
    });
  }
  const xk = {
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
  }, Sk = {
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
  function kk(e, r) {
    const o = r ? xk : Sk;
    return o[e ?? "unknown"] ?? o.unknown;
  }
  function Ek(e, r, o, i, l) {
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
    const u = kk(e, l);
    return {
      stroke: u.color,
      strokeWidth: u.width,
      opacity: u.opacity,
      strokeDasharray: u.dash
    };
  }
  function Ck({ id: e, sourceX: r, sourceY: o, targetX: i, targetY: l, sourcePosition: u, targetPosition: c, data: f, source: m, target: h }) {
    const p = $e((F) => F.highlightedEdgeIds.has(e)), v = $e((F) => F.selectedNodeIds.size > 0) && !p, k = nt((F) => F.theme) === "dark", S = m.startsWith("hierarchy:") || h.startsWith("hierarchy:"), C = L.useMemo(() => jl({
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
    ]), [E, A, P] = C, I = Ek(f == null ? void 0 : f.connectionType, p, v, S, k);
    return b.jsxs(b.Fragment, {
      children: [
        b.jsx(Po, {
          id: e,
          path: E,
          markerEnd: p ? "url(#architecture-arrow)" : void 0,
          style: I
        }),
        p && f ? b.jsx(S2, {
          children: b.jsxs("div", {
            className: `pointer-events-none absolute rounded-lg border px-2.5 py-1.5 text-[10px] shadow-lg ${k ? "border-cyan-300/30 bg-shell-950/95 text-cyan-100" : "border-slate-300 bg-white text-slate-800"}`,
            style: {
              transform: `translate(-50%, -50%) translate(${A}px, ${P}px)`
            },
            children: [
              b.jsxs("div", {
                className: "font-medium",
                children: [
                  f.connection.sourcePortId,
                  " \u2192 ",
                  f.connection.targetPortId
                ]
              }),
              f.connectionType && b.jsx("div", {
                className: `mt-0.5 text-[9px] uppercase tracking-wide ${k ? "text-cyan-300/80" : "text-cyan-700"}`,
                children: f.connectionType
              }),
              f.connectionCount && f.connectionCount > 1 && b.jsxs("span", {
                className: k ? "text-cyan-300" : "text-cyan-600",
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
  const _k = L.memo(Ck), Nk = {
    architecture: _k
  };
  function Fm(e) {
    var r, o, i = "";
    if (typeof e == "string" || typeof e == "number") i += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var l = e.length;
      for (r = 0; r < l; r++) e[r] && (o = Fm(e[r])) && (i && (i += " "), i += o);
    } else for (o in e) e[o] && (i && (i += " "), i += o);
    return i;
  }
  function Os() {
    for (var e, r, o = 0, i = "", l = arguments.length; o < l; o++) (e = arguments[o]) && (r = Fm(e)) && (i && (i += " "), i += r);
    return i;
  }
  function Bm(e) {
    const r = $e((l) => l.selectedNodeIds.has(e)), o = $e((l) => l.expandedNodeId === e), i = $e((l) => l.highlightedNodeIds.size > 0 && !l.highlightedNodeIds.has(e));
    return {
      isSelected: r,
      isExpanded: o,
      isDimmed: i
    };
  }
  const Mk = L.memo(function({ name: r, type: o, color: i, expanded: l, depth: u = 0, isExpandable: c, isExpanded: f, onExpand: m }) {
    const p = nt((y) => y.theme) === "dark";
    return b.jsxs("div", {
      className: "flex min-w-0 items-center gap-3",
      children: [
        u > 0 && b.jsx("div", {
          className: "flex shrink-0 items-center gap-0.5",
          children: Array.from({
            length: u
          }, (y, v) => b.jsx("div", {
            className: `h-3 w-0.5 rounded-full ${p ? "bg-slate-600" : "bg-slate-300"}`
          }, v))
        }),
        b.jsx("div", {
          className: "architecture-node__type grid h-10 w-10 shrink-0 place-items-center rounded-lg border text-[10px] font-black",
          style: {
            borderColor: i,
            color: i,
            backgroundColor: `${i}18`
          },
          children: X2[o]
        }),
        b.jsxs("div", {
          className: "architecture-node__label min-w-0 flex-1",
          children: [
            b.jsx("div", {
              className: `truncate text-sm font-semibold ${p ? "text-slate-50" : "text-slate-900"}`,
              children: r
            }),
            l ? b.jsx("div", {
              className: `mt-0.5 text-[11px] uppercase ${p ? "text-slate-400" : "text-slate-500"}`,
              children: "Component"
            }) : null
          ]
        }),
        c && b.jsx("button", {
          className: `architecture-node__expand shrink-0 rounded-lg p-1.5 transition ${p ? "text-slate-400 hover:bg-white/10 hover:text-slate-200" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"}`,
          onClick: (y) => {
            y.stopPropagation(), m == null ? void 0 : m();
          },
          children: b.jsx("svg", {
            className: `h-4 w-4 transition-transform ${f ? "rotate-90" : ""}`,
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: b.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 5l7 7-7 7"
            })
          })
        })
      ]
    });
  });
  function bk({ id: e, data: r }) {
    var _a;
    if (r.kind === "busChannel") return null;
    const o = r.kind === "cluster", i = o ? r.cluster.name : r.component.name, l = o ? r.cluster.type : r.component.type, u = St[l], { isSelected: c, isDimmed: f } = Bm(e), m = Te((E) => E.expandToLevel), h = Te((E) => E.expansionPath), y = nt((E) => E.theme) === "dark", v = o && h.includes(r.cluster.id), x = o ? r.cluster.depth : 0, k = o && (r.cluster.depth < 2 || r.cluster.componentCount > 6), S = o && x > 1 ? (_a = h[h.indexOf(r.cluster.id) - 1]) == null ? void 0 : _a.replace("hierarchy:", "").replace(/:/g, " > ") : null, C = o && r.cluster.componentCount > 6 ? r.cluster.componentCount : 0;
    return b.jsxs("div", {
      className: Os("architecture-node group overflow-hidden rounded-xl border-2 shadow-node transition duration-150", o ? "w-[280px]" : "w-[220px]", "hover:-translate-y-0.5 hover:shadow-glow", c && "ring-2 ring-cyan-400", f && "opacity-30 grayscale", y ? "bg-gradient-to-br from-shell-800 to-shell-950" : "bg-[#fffcf9]"),
      style: {
        borderColor: c ? u.border : y ? "rgba(255,255,255,0.12)" : `${u.border}70`,
        "--node-glow": u.glow
      },
      children: [
        !o && b.jsxs(b.Fragment, {
          children: [
            b.jsx(wr, {
              className: "!h-3 !w-1 !rounded-full !border-0 hover:!bg-cyan-400 !bg-slate-500",
              id: `left:${e}`,
              type: "target",
              position: ge.Left,
              style: {
                top: "50%"
              }
            }),
            b.jsx(wr, {
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
        b.jsxs("div", {
          className: "flex",
          children: [
            b.jsx("div", {
              className: Os("architecture-node__rail w-2 shrink-0", x > 0 && "opacity-90"),
              style: {
                backgroundColor: u.base
              }
            }),
            b.jsxs("div", {
              className: "architecture-node__content min-w-0 flex-1 p-3.5",
              children: [
                b.jsx(Mk, {
                  name: i,
                  type: l,
                  color: u.border,
                  expanded: false,
                  depth: x,
                  isExpandable: k,
                  isExpanded: v,
                  onExpand: () => o && m(r.cluster.id)
                }),
                o ? b.jsxs(b.Fragment, {
                  children: [
                    S && b.jsxs("div", {
                      className: `mt-1 flex items-center gap-1 text-[10px] ${y ? "text-slate-500" : "text-slate-400"}`,
                      children: [
                        b.jsx("svg", {
                          className: "h-3 w-3",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          children: b.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M9 5l7 7-7 7"
                          })
                        }),
                        b.jsx("span", {
                          children: S
                        })
                      ]
                    }),
                    b.jsxs("div", {
                      className: `architecture-node__meta mt-3 flex items-center gap-2 text-[11px] ${y ? "text-slate-400" : "text-slate-500"}`,
                      children: [
                        b.jsxs("span", {
                          className: `rounded px-2 py-1 font-medium ${y ? "bg-white/[0.04]" : "bg-slate-100"}`,
                          children: [
                            r.cluster.componentCount,
                            " blocks"
                          ]
                        }),
                        C > 0 && b.jsx("span", {
                          className: `rounded px-2 py-1 font-medium ${y ? "bg-cyan-500/10 text-cyan-400" : "bg-cyan-100 text-cyan-700"}`,
                          children: "click to expand"
                        })
                      ]
                    }),
                    r.cluster.typeBreakdown && Object.keys(r.cluster.typeBreakdown).length > 1 && b.jsx("div", {
                      className: "mt-2 flex flex-wrap gap-1",
                      children: Object.entries(r.cluster.typeBreakdown).map(([E, A]) => b.jsxs("span", {
                        className: `rounded px-1.5 py-0.5 text-[9px] font-medium ${y ? "bg-white/[0.06] text-slate-500" : "bg-slate-100 text-slate-600"}`,
                        children: [
                          E,
                          ": ",
                          A
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
  const Ik = L.memo(bk, (e, r) => e.data.kind === "busChannel" || r.data.kind === "busChannel" ? false : e.id === r.id && e.selected === r.selected && e.data.kind === r.data.kind && (e.data.kind === "cluster" ? r.data.kind === "cluster" && e.data.cluster.id === r.data.cluster.id && e.data.cluster.componentCount === r.data.cluster.componentCount && e.data.cluster.connectionCount === r.data.cluster.connectionCount && e.data.cluster.depth === r.data.cluster.depth : r.data.kind === "component" && e.data.component.id === r.data.component.id && e.data.component.name === r.data.component.name && e.data.component.type === r.data.component.type)), Tk = 32, Ak = 720;
  function $k({ id: e, data: r }) {
    if (r.kind !== "busChannel") return null;
    const o = r, i = St[o.component.type], { isSelected: l, isDimmed: u } = Bm(e), f = nt((m) => m.theme) === "dark";
    return b.jsxs("div", {
      className: Os("bus-channel-node group relative transition duration-150", u && "opacity-30 grayscale"),
      style: {
        width: Tk,
        height: Ak,
        "--bus-color": i.base,
        "--bus-border": i.border,
        "--bus-glow": i.glow
      },
      children: [
        b.jsx(wr, {
          className: "!h-3 !w-1 !rounded-full !border-0 hover:!bg-cyan-400 !bg-slate-500",
          id: `left:${e}`,
          type: "target",
          position: ge.Left,
          style: {
            top: "50%"
          }
        }),
        b.jsx(wr, {
          className: "!h-3 !w-1 !rounded-full !border-0 hover:!bg-cyan-400 !bg-slate-500",
          id: `right:${e}`,
          type: "source",
          position: ge.Right,
          style: {
            top: "50%"
          }
        }),
        b.jsxs("div", {
          className: Os("absolute inset-0 rounded-md border-2 transition-all duration-150", l && "ring-2 ring-cyan-400 shadow-lg"),
          style: {
            backgroundColor: f ? `${i.base}25` : `${i.base}35`,
            borderColor: l ? i.border : f ? `${i.base}50` : `${i.base}80`,
            boxShadow: l ? `0 0 20px ${i.glow}` : f ? "none" : `0 2px 8px ${i.base}30`
          },
          children: [
            b.jsx("div", {
              className: "absolute left-0 top-0 h-1.5 w-full rounded-t-md",
              style: {
                backgroundColor: i.base
              }
            }),
            b.jsx("div", {
              className: "absolute bottom-0 left-0 h-1.5 w-full rounded-b-md",
              style: {
                backgroundColor: i.base
              }
            }),
            b.jsx("div", {
              className: "absolute left-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: i.base
              }
            }),
            b.jsx("div", {
              className: "absolute right-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: i.base
              }
            }),
            b.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center",
              style: {
                writingMode: "vertical-rl",
                textOrientation: "mixed"
              },
              children: b.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  b.jsx("div", {
                    className: "flex h-6 w-6 shrink-0 items-center justify-center rounded text-[8px] font-black",
                    style: {
                      borderColor: i.border,
                      color: i.text,
                      backgroundColor: f ? `${i.base}30` : `${i.base}40`,
                      border: `2px solid ${i.border}`
                    },
                    children: "BUS"
                  }),
                  b.jsx("span", {
                    className: "text-xs font-bold",
                    style: {
                      color: f ? i.text : i.border
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
  const Rk = L.memo($k, (e, r) => {
    if (e.id !== r.id || e.selected !== r.selected || e.data.kind !== "busChannel" || r.data.kind !== "busChannel") return false;
    const o = e.data, i = r.data;
    return o.component.id === i.component.id && o.component.name === i.component.name && o.component.type === i.component.type && o.layer === i.layer;
  }), Pk = {
    architecture: Ik,
    busChannel: Rk
  }, Hp = 0.035, zk = 2.2, Lk = 0.32;
  function Dk() {
    const e = Te((Y) => Y.nodes), r = Te((Y) => Y.edges), o = Te((Y) => Y.updateNodePosition), i = Te((Y) => Y.setNodes), l = Te((Y) => Y.setEdges), u = Te((Y) => Y.toggleCluster), c = Te((Y) => Y.isLayoutLoading), f = $e((Y) => Y.selectNode), m = $e((Y) => Y.clearSelection), h = ed(), [p, y] = L.useState(false), v = nt((Y) => Y.nonInteractiveThreshold), k = nt((Y) => Y.theme) === "dark", S = e.length > v, C = e.length > q2;
    L.useRef(null);
    const E = L.useRef(null), [A, P] = L.useState({
      width: 0,
      height: 0
    });
    Us();
    const I = L.useCallback((Y) => {
      if (E.current && (E.current.disconnect(), E.current = null), Y) {
        const Z = new ResizeObserver((_) => {
          for (const V of _) {
            const { width: O, height: K } = V.contentRect;
            P({
              width: O,
              height: K
            });
          }
        });
        Z.observe(Y), E.current = Z;
      }
    }, []);
    L.useEffect(() => () => {
      E.current && E.current.disconnect();
    }, []);
    const F = {
      markerEnd: {
        type: $o.ArrowClosed,
        color: k ? "#64748b" : "#1e293b"
      },
      style: {
        stroke: k ? "#64748b" : "#334155",
        strokeWidth: k ? 2 : 2.5
      }
    }, z = L.useCallback((Y) => {
      const Z = Te.getState().nodes;
      i(wm(Y, Z));
    }, [
      i
    ]), Q = L.useCallback((Y) => {
      const Z = Te.getState().edges;
      l(bS(Y, Z));
    }, [
      l
    ]), q = L.useCallback((Y, Z) => {
      const _ = Y.ctrlKey || Y.metaKey || Y.shiftKey;
      Z.data.kind === "component" ? f(Z.id, _ ? {
        additive: true
      } : void 0) : m();
    }, [
      m,
      f
    ]), G = L.useCallback((Y, Z) => {
      if (Y.preventDefault(), Z.data.kind === "cluster") {
        u(Z.id), f(null);
        return;
      }
      h(Z.id);
    }, [
      h,
      f,
      u
    ]), J = L.useCallback((Y, Z) => {
      o(Z.id, Z.position);
    }, [
      o
    ]), ee = L.useCallback((Y, Z) => {
      y((_) => {
        const V = Z.zoom <= Lk;
        return _ === V ? _ : V;
      });
    }, []);
    return C && A.width > 0 ? b.jsxs("div", {
      ref: I,
      className: "relative h-full w-full",
      children: [
        b.jsx(pk, {
          width: A.width,
          height: A.height
        }),
        c && b.jsx(jp, {}),
        b.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs font-medium ${k ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-slate-300 bg-white/90 text-slate-600 shadow-sm"}`,
          children: [
            "Canvas Mode \u2014 ",
            e.length,
            " nodes"
          ]
        })
      ]
    }) : b.jsxs("div", {
      ref: I,
      className: "relative h-full w-full",
      children: [
        b.jsxs($m, {
          className: `${p ? "architecture-flow architecture-flow--overview" : "architecture-flow"}${S ? " architecture-flow--static" : ""}`,
          nodes: e,
          edges: r,
          nodeTypes: Pk,
          edgeTypes: Nk,
          defaultEdgeOptions: F,
          onNodesChange: S ? void 0 : z,
          onEdgesChange: S ? void 0 : Q,
          onNodeClick: S ? void 0 : q,
          onNodeDoubleClick: S ? void 0 : G,
          onNodeDragStop: S ? void 0 : J,
          onMove: ee,
          onPaneClick: S ? void 0 : () => m(),
          nodesDraggable: !S,
          nodesConnectable: !S,
          elementsSelectable: !S,
          nodesFocusable: !S,
          fitView: true,
          fitViewOptions: {
            padding: 0.18,
            minZoom: Hp,
            maxZoom: 0.9
          },
          onlyRenderVisibleElements: true,
          zoomOnDoubleClick: false,
          minZoom: Hp,
          maxZoom: zk,
          proOptions: {
            hideAttribution: true
          },
          children: [
            b.jsx("svg", {
              children: b.jsx("defs", {
                children: b.jsx("marker", {
                  id: "architecture-arrow",
                  markerHeight: "12",
                  markerWidth: "12",
                  orient: "auto",
                  refX: "10",
                  refY: "6",
                  children: b.jsx("path", {
                    d: "M2,2 L10,6 L2,10 z",
                    fill: k ? "#67e8f9" : "#0891b2"
                  })
                })
              })
            }),
            b.jsx(ik, {}),
            b.jsx(F2, {
              className: `!border !bg-shell-950/90 !fill-slate-200 !text-slate-200 ${k ? "!border-white/10" : "!border-black/10"}`
            }),
            b.jsx(wk, {})
          ]
        }),
        S && b.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs ${k ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-black/10 bg-white/90 text-slate-600"}`,
          children: [
            "Static View \u2014 ",
            e.length,
            " nodes"
          ]
        }),
        c && b.jsx(jp, {})
      ]
    });
  }
  function Ok() {
    return b.jsx(Dk, {});
  }
  const Fk = {
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
  }, Bk = [
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
  ], jk = {
    components: Fk,
    connections: Bk
  }, Hk = /* @__PURE__ */ new Set([
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
  ]), Vk = /* @__PURE__ */ new Set([
    "in",
    "out",
    "inout"
  ]);
  function Wr(e) {
    return typeof e == "object" && e !== null;
  }
  function tt(e) {
    return typeof e == "string" && e.length > 0;
  }
  function Fs(e) {
    return e.trim().replace(/\s+/g, "_");
  }
  function Vp(e, r) {
    const o = r.trim().toLowerCase(), i = e.trim().toLowerCase();
    return o === "bus" || i.includes("bus") ? "bus" : o === "cpu" || i.includes("cpu") ? "cpu" : o === "memory" || i.includes("ram") || i.includes("rom") || i.includes("memory") ? "memory" : o === "interface" || i.includes("pad") || i.includes("interface") ? "interface" : o === "clockreset" || o === "clock_reset" || i.includes("clock") || i.includes("reset") ? "clockReset" : o === "dma" || i.includes("dma") ? "dma" : o === "interruptcontroller" || o === "interrupt_controller" || i.includes("interrupt") || i.includes("intc") || i.includes("nvic") || i.includes("vic") || i.includes("gic") ? "interruptController" : o === "debug" || i.includes("debug") || i.includes("jtag") || i.includes("tap") ? "debug" : o === "peripheral" || o === "component" ? "peripheral" : Hk.has(r) ? r : "custom";
  }
  function Up(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs ports[].`);
    return r.map((o, i) => {
      if (tt(o)) return {
        id: Fs(o),
        name: o,
        direction: "inout"
      };
      if (!Wr(o) || !tt(o.id) || !tt(o.name) || !Vk.has(o.direction)) throw new Error(`Component ${e} has an invalid port.`);
      return o;
    }).filter((o, i, l) => l.findIndex((u) => u.id === o.id) === i);
  }
  function Wp(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs registers[].`);
    return r.map((o) => {
      if (tt(o)) return {
        id: Fs(o),
        name: o
      };
      if (!Wr(o) || !tt(o.id) || !tt(o.name)) throw new Error(`Component ${e} has an invalid register.`);
      return o;
    }).filter((o, i, l) => l.findIndex((u) => u.id === o.id) === i);
  }
  function Uk(e) {
    if (Array.isArray(e)) return e.map((r) => {
      if (!Wr(r) || !tt(r.id) || !tt(r.name) || !tt(r.type)) throw new Error("Each component needs id, name, type, ports[], and registers[].");
      return {
        id: r.id,
        name: r.name,
        type: Vp(r.name, r.type),
        ports: Up(r.id, r.ports),
        registers: Wp(r.id, r.registers)
      };
    });
    if (Wr(e)) return Object.entries(e).map(([r, o]) => {
      if (!Wr(o) || !tt(o.type)) throw new Error(`Component ${r} needs type, ports[], and registers[].`);
      const i = Fs(r);
      return {
        id: i,
        name: r,
        type: Vp(r, o.type),
        ports: Up(i, o.ports),
        registers: Wp(i, o.registers)
      };
    });
    throw new Error("JSON must contain components and connections[].");
  }
  function Yp(e) {
    var _a;
    return ((_a = e == null ? void 0 : e.ports[0]) == null ? void 0 : _a.id) ?? "default";
  }
  function Wk(e, r) {
    if (!Array.isArray(e)) throw new Error("JSON must contain components and connections[].");
    const o = new Map(r.map((l) => [
      l.id,
      l
    ])), i = new Map(r.map((l) => [
      l.name,
      l
    ]));
    return e.map((l, u) => {
      if (!Wr(l)) throw new Error("Each connection needs source and target components.");
      const c = tt(l.sourceComponentId) ? l.sourceComponentId : tt(l.source) ? Fs(l.source) : "", f = tt(l.targetComponentId) ? l.targetComponentId : tt(l.target) ? Fs(l.target) : "", m = o.get(c) ?? (tt(l.source) ? i.get(l.source) : void 0), h = o.get(f) ?? (tt(l.target) ? i.get(l.target) : void 0);
      if (!m || !h) throw new Error(`Connection ${u + 1} references a missing component.`);
      return {
        id: tt(l.id) ? l.id : `conn_${u + 1}_${m.id}_to_${h.id}`,
        sourceComponentId: m.id,
        sourcePortId: tt(l.sourcePortId) ? l.sourcePortId : Yp(m),
        targetComponentId: h.id,
        targetPortId: tt(l.targetPortId) ? l.targetPortId : Yp(h)
      };
    });
  }
  function ac(e) {
    let r;
    try {
      r = JSON.parse(e);
    } catch {
      throw new Error("The input is not valid JSON.");
    }
    if (!Wr(r)) throw new Error("JSON must contain components and connections[].");
    const o = Uk(r.components), i = Wk(r.connections, o);
    return {
      components: o,
      connections: i
    };
  }
  function nd({ children: e, className: r }) {
    const i = nt((l) => l.theme) === "dark";
    return b.jsx("section", {
      className: Os("border shadow-xl backdrop-blur-sm", i ? "border-white/10 bg-shell-900/95" : "border-[#e5e0d8] bg-[#fffcf9]/95", r),
      children: e
    });
  }
  const Gp = JSON.stringify(jk, null, 2);
  function Yk() {
    const e = Dt((E) => E.loadModel), r = Te((E) => E.setNodes), o = Te((E) => E.setEdges), i = Te((E) => E.setLayoutLoading), l = $e((E) => E.selectNode), u = $e((E) => E.setSearchQuery), f = nt((E) => E.theme) === "dark", [m, h] = L.useState(""), [p, y] = L.useState(null), [v, x] = L.useState(false), k = (E) => {
      l(null), u(""), r([]), o([]), i(true), e(E), y(null);
    }, S = () => {
      x(true), setTimeout(() => {
        try {
          k(ac(m));
        } catch (E) {
          y(E instanceof Error ? E.message : "Unable to parse architecture JSON."), i(false);
        } finally {
          x(false);
        }
      }, 50);
    }, C = async (E) => {
      var _a;
      const A = (_a = E.target.files) == null ? void 0 : _a[0];
      if (A) {
        x(true);
        try {
          const P = await A.text();
          h(P), k(ac(P));
        } catch (P) {
          y(P instanceof Error ? P.message : "Unable to read architecture JSON file."), i(false);
        } finally {
          x(false);
        }
      }
    };
    return b.jsx("div", {
      className: `pointer-events-none absolute inset-0 z-20 grid place-items-center p-6 backdrop-blur-sm ${f ? "bg-shell-950/80" : "bg-slate-200/80"}`,
      children: b.jsxs(nd, {
        className: "pointer-events-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl",
        children: [
          b.jsxs("div", {
            className: `border-b p-6 ${f ? "border-white/10" : "border-slate-200"}`,
            children: [
              b.jsx("h2", {
                className: `text-xl font-semibold ${f ? "text-slate-50" : "text-slate-900"}`,
                children: "Load architecture JSON"
              }),
              b.jsx("p", {
                className: `mt-2 text-sm ${f ? "text-slate-400" : "text-slate-600"}`,
                children: "Choose a JSON file or paste an architecture model to render the graph."
              })
            ]
          }),
          b.jsxs("div", {
            className: "grid gap-4 p-6",
            children: [
              b.jsxs("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                  b.jsxs("label", {
                    className: `inline-flex cursor-pointer items-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${f ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15" : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"}`,
                    children: [
                      v ? "Reading file..." : "Choose JSON file",
                      b.jsx("input", {
                        accept: "application/json,.json",
                        className: "sr-only",
                        onChange: C,
                        type: "file"
                      })
                    ]
                  }),
                  b.jsx("button", {
                    className: `rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${f ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"}`,
                    onClick: () => {
                      x(true), setTimeout(() => {
                        h(Gp), k(ac(Gp)), x(false);
                      }, 50);
                    },
                    type: "button",
                    children: "Load sample SoC"
                  })
                ]
              }),
              b.jsx("textarea", {
                className: `h-72 resize-none rounded-lg border p-4 font-mono text-xs leading-5 outline-none transition ${f ? "border-white/10 bg-shell-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-300/40" : "border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"}`,
                onChange: (E) => h(E.target.value),
                placeholder: '{"components": [...], "connections": [...]}',
                spellCheck: false,
                value: m
              }),
              p ? b.jsx("div", {
                className: "rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700",
                children: p
              }) : null,
              b.jsx("div", {
                className: "flex justify-end",
                children: b.jsx("button", {
                  className: "rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-40 shadow-sm",
                  disabled: !m.trim() || v,
                  onClick: S,
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
  function Gk({ children: e, color: r = "#94a3b8" }) {
    return b.jsx("span", {
      className: "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
      style: {
        borderColor: r,
        color: r,
        backgroundColor: `${r}1a`
      },
      children: e
    });
  }
  function Xp({ connections: e, direction: r, getName: o, onSelect: i }) {
    const u = nt((c) => c.theme) === "dark";
    return e.length === 0 ? b.jsxs("div", {
      className: `rounded-lg py-4 text-center text-sm ${u ? "text-slate-500" : "text-slate-400"}`,
      children: [
        "No ",
        r,
        " connections."
      ]
    }) : b.jsx("ul", {
      className: "space-y-1.5",
      children: e.map((c) => {
        const f = r === "incoming" ? c.sourceComponentId : c.targetComponentId, m = r === "incoming" ? c.sourcePortId : c.targetPortId, h = r === "incoming" ? c.targetPortId : c.sourcePortId;
        return b.jsxs("li", {
          className: `group rounded-lg p-3 transition ${u ? "bg-white/[0.03] hover:bg-white/[0.06] border border-white/5" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
          children: [
            b.jsx("button", {
              className: `mb-1.5 text-left text-sm font-semibold transition ${u ? "text-cyan-300 hover:text-cyan-200" : "text-cyan-600 hover:text-cyan-700"}`,
              onClick: () => i(f),
              type: "button",
              children: o(f)
            }),
            b.jsxs("div", {
              className: `flex items-center gap-1.5 font-mono text-[11px] ${u ? "text-slate-500" : "text-slate-400"}`,
              children: [
                b.jsx("span", {
                  className: `rounded px-1 py-0.5 ${u ? "bg-white/5" : "bg-slate-100"}`,
                  children: m
                }),
                b.jsx("svg", {
                  className: "h-3 w-3 shrink-0",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: b.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                }),
                b.jsx("span", {
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
  function kl({ title: e, children: r }) {
    const i = nt((l) => l.theme) === "dark";
    return b.jsxs("section", {
      className: `border-t pt-4 ${i ? "border-white/10" : "border-slate-200"}`,
      children: [
        b.jsxs("h3", {
          className: `mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${i ? "text-slate-500" : "text-slate-400"}`,
          children: [
            b.jsx("span", {
              className: `inline-block h-1 w-1 rounded-full ${i ? "bg-cyan-400" : "bg-cyan-500"}`
            }),
            e
          ]
        }),
        r
      ]
    });
  }
  const Kp = [];
  function Xk() {
    const e = $e((y) => y.selectedNodeId), r = Dt((y) => e ? y.componentById.get(e) : void 0), o = Dt((y) => e ? y.getIncoming(e) : Kp), i = Dt((y) => e ? y.getOutgoing(e) : Kp), l = Dt((y) => y.getComponent), u = ed(), c = Te((y) => y.sidebarCollapsed), f = Te((y) => y.toggleSidebar), h = nt((y) => y.theme) === "dark";
    if (!r || c) return null;
    const p = St[r.type];
    return b.jsxs(nd, {
      className: "relative h-full w-[360px] shrink-0 overflow-y-auto transition-all duration-300",
      children: [
        b.jsxs("div", {
          className: `relative border-b p-5 ${h ? "border-white/10" : "border-slate-200"}`,
          children: [
            b.jsx("div", {
              className: "absolute left-0 top-0 h-1 w-full",
              style: {
                backgroundColor: p.base
              }
            }),
            b.jsx("button", {
              className: `absolute right-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border transition ${h ? "border-white/10 bg-white/5 text-slate-500 hover:bg-white/10 hover:text-slate-200" : "border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 shadow-sm"}`,
              onClick: f,
              title: "Collapse sidebar",
              type: "button",
              children: b.jsx("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: b.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            }),
            b.jsxs("div", {
              className: "flex items-start gap-3",
              children: [
                b.jsx("div", {
                  className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                  style: {
                    backgroundColor: `${p.base}20`,
                    color: p.border,
                    border: `1px solid ${p.border}40`
                  },
                  children: r.type.slice(0, 2).toUpperCase()
                }),
                b.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    b.jsx(Gk, {
                      color: p.border,
                      children: r.type
                    }),
                    b.jsx("h2", {
                      className: `mt-2 text-lg font-semibold leading-tight ${h ? "text-slate-50" : "text-slate-900"}`,
                      children: r.name
                    }),
                    b.jsx("p", {
                      className: `mt-1 font-mono text-[11px] ${h ? "text-slate-500" : "text-slate-400"}`,
                      children: r.id
                    })
                  ]
                })
              ]
            })
          ]
        }),
        b.jsxs("div", {
          className: `flex gap-3 border-b px-5 py-3 ${h ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"}`,
          children: [
            b.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                b.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: r.ports.length
                }),
                b.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Ports"
                })
              ]
            }),
            b.jsx("div", {
              className: `w-px ${h ? "bg-white/10" : "bg-slate-200"}`
            }),
            b.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                b.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: r.registers.length
                }),
                b.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Registers"
                })
              ]
            }),
            b.jsx("div", {
              className: `w-px ${h ? "bg-white/10" : "bg-slate-200"}`
            }),
            b.jsxs("div", {
              className: "flex-1 text-center",
              children: [
                b.jsx("p", {
                  className: `text-lg font-semibold ${h ? "text-slate-200" : "text-slate-700"}`,
                  children: o.length + i.length
                }),
                b.jsx("p", {
                  className: `text-[10px] font-medium uppercase ${h ? "text-slate-500" : "text-slate-400"}`,
                  children: "Connections"
                })
              ]
            })
          ]
        }),
        b.jsxs("div", {
          className: "p-5",
          children: [
            b.jsx(kl, {
              title: "Ports",
              children: b.jsx("ul", {
                className: "space-y-1.5",
                children: r.ports.map((y) => b.jsxs("li", {
                  className: `group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${h ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
                  children: [
                    b.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        b.jsx("span", {
                          className: `h-1.5 w-1.5 rounded-full ${y.direction === "in" ? "bg-emerald-400" : y.direction === "out" ? "bg-amber-400" : "bg-slate-400"}`
                        }),
                        b.jsx("span", {
                          className: `font-medium ${h ? "text-slate-200" : "text-slate-700"}`,
                          children: y.name
                        })
                      ]
                    }),
                    b.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        b.jsx("span", {
                          className: `rounded px-1.5 py-0.5 text-[10px] font-medium uppercase ${y.direction === "in" ? "bg-emerald-500/10 text-emerald-600" : y.direction === "out" ? "bg-amber-500/10 text-amber-600" : "bg-slate-500/10 text-slate-600"}`,
                          children: y.direction
                        }),
                        y.width ? b.jsxs("span", {
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
            b.jsx(kl, {
              title: "Registers",
              children: b.jsx("ul", {
                className: "space-y-1.5",
                children: r.registers.map((y) => b.jsxs("li", {
                  className: `rounded-lg px-3 py-2.5 transition ${h ? "bg-white/[0.03] hover:bg-white/[0.06]" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
                  children: [
                    b.jsxs("div", {
                      className: "flex items-center justify-between gap-3 text-sm",
                      children: [
                        b.jsx("span", {
                          className: `font-medium ${h ? "text-slate-200" : "text-slate-700"}`,
                          children: y.name
                        }),
                        y.address ? b.jsx("span", {
                          className: `rounded px-1.5 py-0.5 font-mono text-[10px] ${h ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500"}`,
                          children: y.address
                        }) : null
                      ]
                    }),
                    y.description ? b.jsx("p", {
                      className: "mt-1.5 text-xs leading-relaxed text-slate-500",
                      children: y.description
                    }) : null
                  ]
                }, y.id))
              })
            }),
            b.jsx(kl, {
              title: "Incoming",
              children: b.jsx(Xp, {
                connections: o,
                direction: "incoming",
                getName: (y) => {
                  var _a;
                  return ((_a = l(y)) == null ? void 0 : _a.name) ?? y;
                },
                onSelect: u
              })
            }),
            b.jsx(kl, {
              title: "Outgoing",
              children: b.jsx(Xp, {
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
  function xr(e) {
    return Array.isArray ? Array.isArray(e) : Hm(e) === "[object Array]";
  }
  function Kk(e) {
    if (typeof e == "string") return e;
    if (typeof e == "bigint") return e.toString();
    const r = e + "";
    return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
  }
  function Mc(e) {
    return e == null ? "" : Kk(e);
  }
  function kt(e) {
    return typeof e == "string";
  }
  function $l(e) {
    return typeof e == "number";
  }
  function Qk(e) {
    return e === true || e === false || Zk(e) && Hm(e) == "[object Boolean]";
  }
  function jm(e) {
    return typeof e == "object";
  }
  function Zk(e) {
    return jm(e) && e !== null;
  }
  function Lt(e) {
    return e != null;
  }
  function El(e) {
    return !e.trim().length;
  }
  function Hm(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
  }
  const qk = "Incorrect 'index' type", bc = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", Jk = (e) => `Invalid value for key ${e}`, eE = (e) => `Pattern length exceeds max of ${e}.`, tE = (e) => `Missing ${e} property in key`, nE = (e) => `Property 'weight' in key '${e}' must be a positive integer`, rE = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", Qp = Object.prototype.hasOwnProperty;
  var oE = class {
    constructor(e) {
      this._keys = [], this._keyMap = {};
      let r = 0;
      e.forEach((o) => {
        const i = Vm(o);
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
  function Vm(e) {
    let r = null, o = null, i = null, l = 1, u = null;
    if (kt(e) || xr(e)) i = e, r = Zp(e), o = Rl(e);
    else {
      if (!Qp.call(e, "name")) throw new Error(tE("name"));
      const c = e.name;
      if (i = c, Qp.call(e, "weight") && e.weight !== void 0 && (l = e.weight, l <= 0)) throw new Error(nE(Rl(c)));
      r = Zp(c), o = Rl(c), u = e.getFn ?? null;
    }
    return {
      path: r,
      id: o,
      weight: l,
      src: i,
      getFn: u
    };
  }
  function Zp(e) {
    return xr(e) ? e : e.split(".");
  }
  function Rl(e) {
    return xr(e) ? e.join(".") : e;
  }
  function sE(e, r) {
    const o = [];
    let i = false;
    const l = (u, c, f, m) => {
      if (Lt(u)) if (!c[f]) o.push(m !== void 0 ? {
        v: u,
        i: m
      } : u);
      else {
        const h = u[c[f]];
        if (!Lt(h)) return;
        if (f === c.length - 1 && (kt(h) || $l(h) || Qk(h) || typeof h == "bigint")) o.push(m !== void 0 ? {
          v: Mc(h),
          i: m
        } : Mc(h));
        else if (xr(h)) {
          i = true;
          for (let p = 0, y = h.length; p < y; p += 1) l(h[p], c, f + 1, p);
        } else c.length && l(h, c, f + 1, m);
      }
    };
    return l(e, kt(r) ? r.split(".") : r, 0), i ? o : o[0];
  }
  const iE = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
  }, lE = {
    isCaseSensitive: false,
    ignoreDiacritics: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (e, r) => e.score === r.score ? e.idx < r.idx ? -1 : 1 : e.score < r.score ? -1 : 1
  }, aE = {
    location: 0,
    threshold: 0.6,
    distance: 100
  }, uE = {
    useExtendedSearch: false,
    useTokenSearch: false,
    tokenize: void 0,
    tokenMatch: "any",
    getFn: sE,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
  }, Se = Object.freeze({
    ...lE,
    ...iE,
    ...aE,
    ...uE
  });
  function cE(e = 1, r = 3) {
    const o = /* @__PURE__ */ new Map(), i = Math.pow(10, r);
    return {
      get(l) {
        let u = 1, c = false;
        for (let m = 0; m < l.length; m++) l.charCodeAt(m) === 32 ? c || (u++, c = true) : c = false;
        if (o.has(u)) return o.get(u);
        const f = Math.round(i / Math.pow(u, 0.5 * e)) / i;
        return o.set(u, f), f;
      },
      clear() {
        o.clear();
      }
    };
  }
  var rd = class {
    constructor({ getFn: e = Se.getFn, fieldNormWeight: r = Se.fieldNormWeight } = {}) {
      this.norm = cE(r, 3), this.getFn = e, this.isCreated = false, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
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
      if (kt(this.docs[0])) for (let o = 0; o < e; o++) {
        const i = this._createStringRecord(this.docs[o], o);
        i && (this.records[r++] = i);
      }
      else for (let o = 0; o < e; o++) this.records[r++] = this._createObjectRecord(this.docs[o], o);
      this.records.length = r, this.norm.clear();
    }
    add(e, r) {
      if (!Number.isInteger(r) || r < 0) throw new Error(bc);
      if (kt(e)) {
        const i = this._createStringRecord(e, r);
        return i && this.records.push(i), i;
      }
      const o = this._createObjectRecord(e, r);
      return this.records.push(o), o;
    }
    removeAt(e) {
      if (!Number.isInteger(e) || e < 0) throw new Error(bc);
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
      return !Lt(e) || El(e) ? null : {
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
        if (Lt(c)) {
          if (xr(c)) {
            const f = [];
            for (let m = 0, h = c.length; m < h; m += 1) {
              const p = c[m];
              if (Lt(p)) {
                if (kt(p)) {
                  if (!El(p)) {
                    const y = {
                      v: p,
                      i: m,
                      n: this.norm.get(p)
                    };
                    f.push(y);
                  }
                } else if (Lt(p.v)) {
                  const y = kt(p.v) ? p.v : Mc(p.v);
                  if (!El(y)) {
                    const v = {
                      v: y,
                      i: p.i,
                      n: this.norm.get(y)
                    };
                    f.push(v);
                  }
                }
              }
            }
            o.$[i] = f;
          } else if (kt(c) && !El(c)) {
            const f = {
              v: c,
              n: this.norm.get(c)
            };
            o.$[i] = f;
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
  function Um(e, r, { getFn: o = Se.getFn, fieldNormWeight: i = Se.fieldNormWeight } = {}) {
    const l = new rd({
      getFn: o,
      fieldNormWeight: i
    });
    return l.setKeys(e.map(Vm)), l.setSources(r), l.create(), l;
  }
  function dE(e, { getFn: r = Se.getFn, fieldNormWeight: o = Se.fieldNormWeight } = {}) {
    const { keys: i, records: l } = e, u = new rd({
      getFn: r,
      fieldNormWeight: o
    });
    return u.setKeys(i), u.setIndexRecords(l), u;
  }
  function fE(e = [], r = Se.minMatchCharLength) {
    const o = [];
    let i = -1, l = -1, u = 0;
    for (let c = e.length; u < c; u += 1) {
      const f = e[u];
      f && i === -1 ? i = u : !f && i !== -1 && (l = u - 1, l - i + 1 >= r && o.push([
        i,
        l
      ]), i = -1);
    }
    return e[u - 1] && u - i >= r && o.push([
      i,
      u - 1
    ]), o;
  }
  function hE(e, r, o, { location: i = Se.location, distance: l = Se.distance, threshold: u = Se.threshold, findAllMatches: c = Se.findAllMatches, minMatchCharLength: f = Se.minMatchCharLength, includeMatches: m = Se.includeMatches, ignoreLocation: h = Se.ignoreLocation } = {}) {
    if (r.length > 32) throw new Error(eE(32));
    const p = r.length, y = e.length, v = Math.max(0, Math.min(i, y));
    let x = u, k = v;
    const S = (G, J) => {
      const ee = G / p;
      if (h) return ee;
      const Y = Math.abs(v - J);
      return l ? ee + Y / l : Y ? 1 : ee;
    }, C = f > 1 || m, E = C ? Array(y) : [];
    let A;
    for (; (A = e.indexOf(r, k)) > -1; ) {
      const G = S(0, A);
      if (x = Math.min(G, x), k = A + p, C) {
        let J = 0;
        for (; J < p; ) E[A + J] = 1, J += 1;
      }
    }
    k = -1;
    let P = [], I = 1, F = 0, z = p + y;
    const Q = 1 << p - 1;
    for (let G = 0; G < p; G += 1) {
      let J = 0, ee = z;
      for (; J < ee; ) S(G, v + ee) <= x ? J = ee : z = ee, ee = Math.floor((z - J) / 2 + J);
      z = ee;
      let Y = Math.max(1, v - ee + 1);
      const Z = c ? y : Math.min(v + ee, y) + p, _ = Array(Z + 2);
      _[Z + 1] = (1 << G) - 1;
      for (let V = Z; V >= Y; V -= 1) {
        const O = V - 1, K = o[e[O]];
        if (_[V] = (_[V + 1] << 1 | 1) & K, G && (_[V] |= (P[V + 1] | P[V]) << 1 | 1 | P[V + 1]), _[V] & Q && (I = S(G, O), I <= x)) {
          if (x = I, k = O, F = G, k <= v) break;
          Y = Math.max(1, 2 * v - k);
        }
      }
      if (S(G + 1, v) > x) break;
      P = _;
    }
    if (C && k >= 0) {
      const G = Math.min(y - 1, k + p - 1 + F);
      for (let J = k; J <= G; J += 1) o[e[J]] && (E[J] = 1);
    }
    const q = {
      isMatch: k >= 0,
      score: Math.max(1e-3, I)
    };
    if (C) {
      const G = fE(E, f);
      G.length ? m && (q.indices = G) : q.isMatch = false;
    }
    return q;
  }
  function pE(e) {
    const r = {};
    for (let o = 0, i = e.length; o < i; o += 1) {
      const l = e.charAt(o);
      r[l] = (r[l] || 0) | 1 << i - o - 1;
    }
    return r;
  }
  function od(e) {
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
  const Wm = {
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
  }, mE = new RegExp("[" + Object.keys(Wm).join("") + "]", "g"), Bs = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(mE, (r) => Wm[r]) : (e) => e;
  var sd = class {
    constructor(e, { location: r = Se.location, threshold: o = Se.threshold, distance: i = Se.distance, includeMatches: l = Se.includeMatches, findAllMatches: u = Se.findAllMatches, minMatchCharLength: c = Se.minMatchCharLength, isCaseSensitive: f = Se.isCaseSensitive, ignoreDiacritics: m = Se.ignoreDiacritics, ignoreLocation: h = Se.ignoreLocation } = {}) {
      if (this.options = {
        location: r,
        threshold: o,
        distance: i,
        includeMatches: l,
        findAllMatches: u,
        minMatchCharLength: c,
        isCaseSensitive: f,
        ignoreDiacritics: m,
        ignoreLocation: h
      }, e = f ? e : e.toLowerCase(), e = m ? Bs(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
      const p = (v, x) => {
        this.chunks.push({
          pattern: v,
          alphabet: pE(v),
          startIndex: x
        });
      }, y = this.pattern.length;
      if (y > 32) {
        let v = 0;
        const x = y % 32, k = y - x;
        for (; v < k; ) p(this.pattern.substr(v, 32), v), v += 32;
        if (x) {
          const S = y - 32;
          p(this.pattern.substr(S), S);
        }
      } else p(this.pattern, 0);
    }
    searchIn(e) {
      const { isCaseSensitive: r, ignoreDiacritics: o, includeMatches: i } = this.options;
      if (e = r ? e : e.toLowerCase(), e = o ? Bs(e) : e, this.pattern === e) {
        const k = {
          isMatch: true,
          score: 0
        };
        return i && (k.indices = [
          [
            0,
            e.length - 1
          ]
        ]), k;
      }
      const { location: l, distance: u, threshold: c, findAllMatches: f, minMatchCharLength: m, ignoreLocation: h } = this.options, p = [];
      let y = 0, v = false;
      this.chunks.forEach(({ pattern: k, alphabet: S, startIndex: C }) => {
        const { isMatch: E, score: A, indices: P } = hE(e, k, S, {
          location: l + C,
          distance: u,
          threshold: c,
          findAllMatches: f,
          minMatchCharLength: m,
          includeMatches: i,
          ignoreLocation: h
        });
        E && (v = true), y += A, E && P && p.push(...P);
      });
      const x = {
        isMatch: v,
        score: v ? y / this.chunks.length : 1
      };
      return v && i && (x.indices = od(p)), x;
    }
  };
  const gE = /* @__PURE__ */ new Set([
    "fuzzy",
    "include"
  ]);
  function yE(e) {
    return e.startsWith("inverse");
  }
  const Ic = [
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
        const o = new sd(e, {
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
  ], qp = Ic.length, vE = "\0", wE = "|";
  function xE(e) {
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
  function Jp(e, r) {
    const o = e.match(r);
    return o ? o[1] : null;
  }
  function SE(e, r = {}) {
    return e.replace(/\\\|/g, vE).split(wE).map((o) => {
      const i = xE(o.replace(/\u0000/g, "|").trim()).filter((u) => u && !!u.trim()), l = [];
      for (let u = 0, c = i.length; u < c; u += 1) {
        const f = i[u];
        let m = false, h = -1;
        for (; !m && ++h < qp; ) {
          const p = Ic[h], y = Jp(f, p.multiRegex);
          y && (l.push(p.create(y, r)), m = true);
        }
        if (!m) for (h = -1; ++h < qp; ) {
          const p = Ic[h], y = Jp(f, p.singleRegex);
          if (y) {
            l.push(p.create(y, r));
            break;
          }
        }
      }
      return l;
    });
  }
  var kE = class {
    constructor(e, { isCaseSensitive: r = Se.isCaseSensitive, ignoreDiacritics: o = Se.ignoreDiacritics, includeMatches: i = Se.includeMatches, minMatchCharLength: l = Se.minMatchCharLength, ignoreLocation: u = Se.ignoreLocation, findAllMatches: c = Se.findAllMatches, location: f = Se.location, threshold: m = Se.threshold, distance: h = Se.distance } = {}) {
      this.query = null, this.options = {
        isCaseSensitive: r,
        ignoreDiacritics: o,
        includeMatches: i,
        minMatchCharLength: l,
        findAllMatches: c,
        ignoreLocation: u,
        location: f,
        threshold: m,
        distance: h
      }, e = r ? e : e.toLowerCase(), e = o ? Bs(e) : e, this.pattern = e, this.query = SE(this.pattern, this.options);
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
      e = i ? e : e.toLowerCase(), e = l ? Bs(e) : e;
      let u = 0;
      const c = [];
      let f = 0, m = false;
      for (let h = 0, p = r.length; h < p; h += 1) {
        const y = r[h];
        c.length = 0, u = 0, m = false;
        for (let v = 0, x = y.length; v < x; v += 1) {
          const k = y[v], { isMatch: S, indices: C, score: E } = k.search(e);
          if (S) u += 1, f += E, yE(k.type) && (m = true), o && (gE.has(k.type) ? c.push(...C) : c.push(C));
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
          return m && (v.hasInverse = true), o && (v.indices = od(c)), v;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  const Tc = [];
  function id(...e) {
    Tc.push(...e);
  }
  function Ul(e, r) {
    for (let o = 0, i = Tc.length; o < i; o += 1) {
      const l = Tc[o];
      if (l.condition(e, r)) return new l(e, r);
    }
    return new sd(e, r);
  }
  const Wl = {
    AND: "$and",
    OR: "$or"
  }, Ac = {
    PATH: "$path",
    PATTERN: "$val"
  }, $c = (e) => !!(e[Wl.AND] || e[Wl.OR]), EE = (e) => !!e[Ac.PATH], CE = (e) => !xr(e) && jm(e) && !$c(e), e0 = (e) => ({
    [Wl.AND]: Object.keys(e).map((r) => ({
      [r]: e[r]
    }))
  });
  function Ym(e, r, { auto: o = true } = {}) {
    const i = (l) => {
      if (kt(l)) {
        const m = {
          keyId: null,
          pattern: l
        };
        return o && (m.searcher = Ul(l, r)), m;
      }
      const u = Object.keys(l), c = EE(l);
      if (!c && u.length > 1 && !$c(l)) return i(e0(l));
      if (CE(l)) {
        const m = c ? l[Ac.PATH] : u[0], h = c ? l[Ac.PATTERN] : l[m];
        if (!kt(h)) throw new Error(Jk(m));
        const p = {
          keyId: Rl(m),
          pattern: h
        };
        return o && (p.searcher = Ul(h, r)), p;
      }
      const f = {
        children: [],
        operator: u[0]
      };
      return u.forEach((m) => {
        const h = l[m];
        xr(h) && h.forEach((p) => {
          f.children.push(i(p));
        });
      }), f;
    };
    return $c(e) || (e = e0(e)), i(e);
  }
  function Rc(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    let o = 1;
    return e.forEach(({ key: i, norm: l, score: u }) => {
      const c = i ? i.weight : null;
      o *= Math.pow(u === 0 && c ? Number.EPSILON : u, (c || 1) * (r ? 1 : l));
    }), o;
  }
  function _E(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    e.forEach((o) => {
      o.score = Rc(o.matches, {
        ignoreFieldNorm: r
      });
    });
  }
  var NE = class {
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
  function ME(e) {
    const r = [];
    return e.matches.forEach((o) => {
      if (!Lt(o.indices) || !o.indices.length) return;
      const i = {
        indices: o.indices,
        value: o.value
      };
      o.key && (i.key = o.key.id), o.idx > -1 && (i.refIndex = o.idx), r.push(i);
    }), r;
  }
  function bE(e, r, { includeMatches: o = Se.includeMatches, includeScore: i = Se.includeScore } = {}) {
    return e.map((l) => {
      const { idx: u } = l, c = {
        item: r[u],
        refIndex: u
      };
      return o && (c.matches = ME(l)), i && (c.score = l.score), c;
    });
  }
  const IE = /[\p{L}\p{M}\p{N}_]+/gu, t0 = /* @__PURE__ */ new WeakSet();
  function TE(e) {
    t0.has(e) || (t0.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
  }
  function AE(e) {
    if (typeof e == "function") {
      let r = false;
      return (o) => {
        const i = e(o);
        if (!r && (r = true, !Array.isArray(i) || i.some((l) => typeof l != "string"))) throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(i) ? "array containing non-strings" : typeof i}.`);
        return i;
      };
    }
    return e instanceof RegExp ? (e.global || TE(e), (r) => r.match(e) || []) : (r) => r.match(IE) || [];
  }
  function Pc({ isCaseSensitive: e = false, ignoreDiacritics: r = false, tokenize: o } = {}) {
    const i = AE(o);
    return {
      tokenize(l) {
        return e || (l = l.toLowerCase()), r && (l = Bs(l)), i(l);
      }
    };
  }
  var $E = class {
    static condition(e, r) {
      return r.useTokenSearch;
    }
    constructor(e, r) {
      this.options = r, this.analyzer = Pc({
        isCaseSensitive: r.isCaseSensitive,
        ignoreDiacritics: r.ignoreDiacritics,
        tokenize: r.tokenize
      });
      const o = this.analyzer.tokenize(e), { df: i, fieldCount: l } = r._invertedIndex;
      this.termSearchers = [], this.idfWeights = [];
      for (const u of o) {
        this.termSearchers.push(new sd(u, {
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
        const c = i.get(u) || 0, f = Math.log(1 + (l - c + 0.5) / (c + 0.5));
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
      const f = i > 0 ? 1 - o / i : 0, m = {
        isMatch: true,
        score: Math.max(1e-3, f)
      };
      return this.options.includeMatches && r.length && (m.indices = od(r)), this.combineAll && (this.useMask ? m.matchedMask = u : m.matchedTerms = c, m.termCount = this.numTerms), m;
    }
  };
  function uc(e, r, o, i) {
    const l = i.tokenize(r);
    if (!l.length) return;
    e.fieldCount++, e.docFieldCount.set(o, (e.docFieldCount.get(o) || 0) + 1);
    const u = new Set(l);
    let c = e.docTermFieldHits.get(o);
    c || (c = /* @__PURE__ */ new Map(), e.docTermFieldHits.set(o, c));
    for (const f of u) c.set(f, (c.get(f) || 0) + 1), e.df.set(f, (e.df.get(f) || 0) + 1);
  }
  function Gm(e, r, o, i) {
    const { i: l, v: u, $: c } = r;
    if (u !== void 0) {
      uc(e, u, l, i);
      return;
    }
    if (c) for (let f = 0; f < o; f++) {
      const m = c[f];
      if (m) if (Array.isArray(m)) for (const h of m) uc(e, h.v, l, i);
      else uc(e, m.v, l, i);
    }
  }
  function RE(e, r, o) {
    const i = {
      fieldCount: 0,
      df: /* @__PURE__ */ new Map(),
      docFieldCount: /* @__PURE__ */ new Map(),
      docTermFieldHits: /* @__PURE__ */ new Map()
    };
    for (const l of e) Gm(i, l, r, o);
    return i;
  }
  function PE(e, r, o, i) {
    Gm(e, r, o, i);
  }
  function zE(e, r) {
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
  function n0(e, r) {
    if (r.length === 0) return;
    const o = Array.from(new Set(r)).sort((f, m) => f - m);
    for (const f of o) zE(e, f);
    const i = (f) => {
      let m = 0, h = o.length;
      for (; m < h; ) {
        const p = m + h >>> 1;
        o[p] < f ? m = p + 1 : h = p;
      }
      return f - m;
    }, l = o[0], u = /* @__PURE__ */ new Map();
    for (const [f, m] of e.docFieldCount) u.set(f > l ? i(f) : f, m);
    e.docFieldCount = u;
    const c = /* @__PURE__ */ new Map();
    for (const [f, m] of e.docTermFieldHits) c.set(f > l ? i(f) : f, m);
    e.docTermFieldHits = c;
  }
  var Sr = class {
    constructor(e, r, o) {
      this.options = {
        ...Se,
        ...r
      }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new oE(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, o), this._lastQuery = null, this._lastSearcher = null;
    }
    _getSearcher(e) {
      if (this._lastQuery === e) return this._lastSearcher;
      const r = Ul(e, this._invertedIndex ? {
        ...this.options,
        _invertedIndex: this._invertedIndex
      } : this.options);
      return this._lastQuery = e, this._lastSearcher = r, r;
    }
    setCollection(e, r) {
      if (this._docs = e, r && !(r instanceof rd)) throw new Error(qk);
      if (this._myIndex = r || Um(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      }), this.options.useTokenSearch) {
        const o = Pc({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        this._invertedIndex = RE(this._myIndex.records, this._myIndex.keys.length, o);
      }
      this._invalidateSearcherCache();
    }
    add(e) {
      if (!Lt(e)) return;
      this._docs.push(e);
      const r = this._myIndex.add(e, this._docs.length - 1);
      if (this._invertedIndex && r) {
        const o = Pc({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        PE(this._invertedIndex, r, this._myIndex.keys.length, o);
      }
      this._invalidateSearcherCache();
    }
    remove(e = () => false) {
      const r = [], o = [];
      for (let i = 0, l = this._docs.length; i < l; i += 1) e(this._docs[i], i) && (r.push(this._docs[i]), o.push(i));
      if (o.length) {
        this._invertedIndex && n0(this._invertedIndex, o);
        const i = new Set(o);
        this._docs = this._docs.filter((l, u) => !i.has(u)), this._myIndex.removeAll(o), this._invalidateSearcherCache();
      }
      return r;
    }
    removeAt(e) {
      if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw new Error(bc);
      this._invertedIndex && n0(this._invertedIndex, [
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
      const { limit: o = -1 } = r || {}, { includeMatches: i, includeScore: l, shouldSort: u, sortFn: c, ignoreFieldNorm: f } = this.options;
      if (kt(e) && !e.trim()) {
        let p = this._docs.map((y, v) => ({
          item: y,
          refIndex: v
        }));
        return $l(o) && o > -1 && (p = p.slice(0, o)), p;
      }
      const m = $l(o) && o > 0 && kt(e);
      let h;
      if (m) {
        const p = new NE(o);
        kt(this._docs[0]) ? this._searchStringList(e, {
          heap: p,
          ignoreFieldNorm: f
        }) : this._searchObjectList(e, {
          heap: p,
          ignoreFieldNorm: f
        }), h = p.extractSorted(c);
      } else h = kt(e) ? kt(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), _E(h, {
        ignoreFieldNorm: f
      }), u && h.sort(c), $l(o) && o > -1 && (h = h.slice(0, o));
      return bE(h, this._docs, {
        includeMatches: i,
        includeScore: l
      });
    }
    _searchStringList(e, { heap: r, ignoreFieldNorm: o } = {}) {
      const i = this._getSearcher(e), l = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: u } = this._myIndex, c = r ? null : [];
      return u.forEach(({ v: f, i: m, n: h }) => {
        if (!Lt(f)) return;
        const p = i.searchIn(f);
        if (p.isMatch) {
          const y = {
            score: p.score,
            value: f,
            norm: h,
            indices: p.indices
          };
          l && (y.matchedMask = p.matchedMask, y.matchedTerms = p.matchedTerms, y.termCount = p.termCount);
          const v = [
            y
          ];
          if (!l || this._coversAllTokens(v)) {
            const x = {
              item: f,
              idx: m,
              matches: v
            };
            r ? (x.score = Rc(x.matches, {
              ignoreFieldNorm: o
            }), r.shouldInsert(x.score) && r.insert(x)) : c.push(x);
          }
        }
      }), c;
    }
    _searchLogical(e) {
      const r = Ym(e, this.options), o = (c, f, m) => {
        if (!("children" in c)) {
          const { keyId: v, searcher: x } = c;
          let k;
          return v === null ? (k = [], this._myIndex.keys.forEach((S, C) => {
            k.push(...this._findMatches({
              key: S,
              value: f[C],
              searcher: x
            }));
          })) : k = this._findMatches({
            key: this._keyStore.get(v),
            value: this._myIndex.getValueForItemAtKeyId(f, v),
            searcher: x
          }), k && k.length ? [
            {
              idx: m,
              item: f,
              matches: k
            }
          ] : [];
        }
        const { children: h, operator: p } = c, y = [];
        for (let v = 0, x = h.length; v < x; v += 1) {
          const k = h[v], S = o(k, f, m);
          if (S.length) y.push(...S);
          else if (p === Wl.AND) return [];
        }
        return y;
      }, i = this._myIndex.records, l = /* @__PURE__ */ new Map(), u = [];
      return i.forEach(({ $: c, i: f }) => {
        if (Lt(c)) {
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
      const i = this._getSearcher(e), l = this.options.useTokenSearch && this.options.tokenMatch === "all", { keys: u, records: c } = this._myIndex, f = r ? null : [];
      return c.forEach(({ $: m, i: h }) => {
        if (!Lt(m)) return;
        const p = [];
        let y = false, v = false;
        if (u.forEach((x, k) => {
          const S = this._findMatches({
            key: x,
            value: m[k],
            searcher: i
          });
          S.length ? (p.push(...S), S[0].hasInverse && (v = true)) : y = true;
        }), !(v && y) && p.length && (!l || this._coversAllTokens(p))) {
          const x = {
            idx: h,
            item: m,
            matches: p
          };
          r ? (x.score = Rc(x.matches, {
            ignoreFieldNorm: o
          }), r.shouldInsert(x.score) && r.insert(x)) : f.push(x);
        }
      }), f;
    }
    _findMatches({ key: e, value: r, searcher: o }) {
      if (!Lt(r)) return [];
      const i = [];
      if (xr(r)) r.forEach(({ v: l, i: u, n: c }) => {
        if (!Lt(l)) return;
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
          f.termCount !== void 0 && (m.matchedMask = f.matchedMask, m.matchedTerms = f.matchedTerms, m.termCount = f.termCount), i.push(m);
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
          c.termCount !== void 0 && (f.matchedMask = c.matchedMask, f.matchedTerms = c.matchedTerms, f.termCount = c.termCount), i.push(f);
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
  Sr.version = "7.4.2";
  Sr.createIndex = Um;
  Sr.parseIndex = dE;
  Sr.config = Se;
  Sr.match = function(e, r, o) {
    if (o && o.useTokenSearch) throw new Error(rE);
    return Ul(e, {
      ...Se,
      ...o
    }).searchIn(r);
  };
  Sr.parseQuery = Ym;
  id(kE);
  id($E);
  Sr.use = function(...e) {
    e.forEach((r) => id(r));
  };
  var LE = Sr;
  const DE = {
    keys: [
      "name",
      "type",
      "id"
    ],
    threshold: 0.32,
    ignoreLocation: true,
    includeScore: true
  }, OE = [];
  function FE() {
    const e = Dt((i) => {
      var _a;
      return ((_a = i.model) == null ? void 0 : _a.components) ?? OE;
    }), r = $e((i) => i.searchQuery), o = L.useMemo(() => new LE(e, DE), [
      e
    ]);
    return L.useMemo(() => {
      const i = r.trim();
      return i ? o.search(i).map((l) => l.item) : e;
    }, [
      e,
      o,
      r
    ]);
  }
  const Ns = 52, r0 = 288, o0 = 5;
  function BE({ results: e, onSelect: r }) {
    const o = L.useRef(null), [i, l] = L.useState(0), [u, c] = L.useState(r0), m = nt((k) => k.theme) === "dark";
    L.useEffect(() => {
      const k = o.current;
      if (!k) return;
      const S = new ResizeObserver((C) => {
        for (const E of C) c(E.contentRect.height);
      });
      return S.observe(k), () => S.disconnect();
    }, []);
    const h = L.useCallback(() => {
      const k = o.current;
      k && l(k.scrollTop);
    }, []), p = e.length * Ns, y = Math.max(0, Math.floor(i / Ns) - o0), v = Math.min(e.length, Math.ceil((i + u) / Ns) + o0), x = e.slice(y, v);
    return b.jsx("div", {
      className: `border-t ${m ? "border-white/10" : "border-slate-200"}`,
      children: b.jsx("div", {
        ref: o,
        className: "overflow-y-auto",
        style: {
          height: Math.min(p, r0)
        },
        onScroll: h,
        children: b.jsx("div", {
          style: {
            height: p,
            position: "relative"
          },
          children: x.map((k, S) => {
            const C = y + S;
            return b.jsxs("button", {
              className: `flex w-full items-center justify-between gap-3 px-3 text-left transition ${m ? "hover:bg-white/5" : "hover:bg-slate-100"}`,
              style: {
                position: "absolute",
                top: C * Ns,
                left: 0,
                right: 0,
                height: Ns
              },
              onClick: () => r(k.id),
              type: "button",
              children: [
                b.jsxs("span", {
                  className: "min-w-0",
                  children: [
                    b.jsx("span", {
                      className: `block truncate text-sm font-medium ${m ? "text-slate-100" : "text-slate-800"}`,
                      children: k.name
                    }),
                    b.jsx("span", {
                      className: "block font-mono text-[11px] text-slate-500",
                      children: k.id
                    })
                  ]
                }),
                b.jsx("span", {
                  className: `shrink-0 rounded px-2 py-0.5 text-[10px] font-medium uppercase ${m ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-600"}`,
                  children: k.type
                })
              ]
            }, k.id);
          })
        })
      })
    });
  }
  function jE() {
    const [e, r] = L.useState(""), o = $e((h) => h.setSearchQuery), i = FE(), l = ed(), u = L.useRef(null), f = nt((h) => h.theme) === "dark";
    L.useEffect(() => {
      const h = window.setTimeout(() => o(e), 150);
      return () => window.clearTimeout(h);
    }, [
      o,
      e
    ]), L.useEffect(() => {
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
    ]), L.useEffect(() => {
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
    return b.jsxs(nd, {
      className: "w-[280px] overflow-hidden rounded-lg",
      children: [
        b.jsxs("div", {
          className: "flex items-center gap-2 px-3 py-2.5",
          children: [
            b.jsx("svg", {
              className: `h-4 w-4 shrink-0 ${f ? "text-slate-500" : "text-slate-400"}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: b.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            }),
            b.jsx("input", {
              ref: u,
              className: `w-full border-0 bg-transparent text-sm outline-none ${f ? "text-slate-100 placeholder:text-slate-600" : "text-slate-800 placeholder:text-slate-400"}`,
              onChange: (h) => r(h.target.value),
              placeholder: "Search components... (/)",
              value: e
            }),
            e.trim() ? b.jsx("button", {
              className: `shrink-0 ${f ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`,
              onClick: () => {
                r(""), o("");
              },
              type: "button",
              children: b.jsx("svg", {
                className: "h-4 w-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: b.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            }) : null
          ]
        }),
        e.trim() ? b.jsx(BE, {
          results: i,
          onSelect: m
        }) : null
      ]
    });
  }
  function HE() {
    const e = nt((o) => o.theme), r = nt((o) => o.toggleTheme);
    return b.jsx("button", {
      className: "flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200 border-black/10 bg-black/5 text-slate-600 hover:bg-black/10 hover:text-slate-800",
      onClick: r,
      title: `Switch to ${e === "dark" ? "light" : "dark"} mode`,
      type: "button",
      children: e === "dark" ? b.jsx("svg", {
        className: "h-4 w-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: b.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        })
      }) : b.jsx("svg", {
        className: "h-4 w-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: b.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        })
      })
    });
  }
  const VE = {
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
  function UE(e, r, o) {
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
    const c = i > 500 ? "NETWORK_SIMPLEX" : "BRANDES_KOEPF", f = i <= 60 ? "SPLINES" : "ORTHOGONAL", m = l > 2.5 ? "36" : l > 1.5 ? "48" : "60", h = i > 500 ? "10" : "30";
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
      "elk.edgeRouting": f,
      "org.eclipse.elk.portConstraints": "FIXED_ORDER",
      "elk.partitioning.activate": "true",
      ...(o == null ? void 0 : o.elkOptions) ?? {}
    };
  }
  function WE(e, r, o, i, l) {
    const u = [];
    if (i.length === 0) u.push({
      id: `left:${e}`,
      side: "LEFT",
      x: 0,
      y: o / 2
    });
    else {
      const c = o / (i.length + 1);
      i.forEach((f, m) => {
        u.push({
          id: `left:${e}:${f}`,
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
      l.forEach((f, m) => {
        u.push({
          id: `right:${e}:${f}`,
          side: "RIGHT",
          x: r,
          y: c * (m + 1)
        });
      });
    }
    return u;
  }
  function YE(e, r, o) {
    const i = UE(e, r, o), c = i["elk.algorithm"] === "layered", f = new Set(e.filter((p) => p.data.kind === "busChannel").map((p) => p.id)), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
    if (c) for (const p of r) f.has(p.target) && (m.has(p.target) || m.set(p.target, []), m.get(p.target).push(p.id)), f.has(p.source) && (h.has(p.source) || h.set(p.source, []), h.get(p.source).push(p.id));
    return {
      id: "root",
      layoutOptions: i,
      children: e.map((p) => {
        const y = p.data.kind === "busChannel", v = p.data.kind === "cluster", x = y ? ta : v ? Ws : Ro, k = y ? Ur : v ? zo : _n;
        let S = [];
        c && (y ? S = WE(p.id, x, k, m.get(p.id) ?? [], h.get(p.id) ?? []) : v || (S = [
          {
            id: `left:${p.id}`,
            side: "LEFT",
            x: 0,
            y: k / 2
          },
          {
            id: `right:${p.id}`,
            side: "RIGHT",
            x,
            y: k / 2
          }
        ]));
        const C = {};
        if (c && !y && !v) {
          const E = p.data.kind === "component" || p.data.kind === "busChannel" ? p.data.component.type : void 0, A = E ? VE[E] : void 0;
          A != null && (C["elk.partitioning.partition"] = String(A));
        }
        return {
          id: p.id,
          width: x,
          height: k,
          ...S.length ? {
            ports: S
          } : {},
          ...Object.keys(C).length ? {
            layoutOptions: C
          } : {}
        };
      }),
      edges: r.map((p) => {
        const y = f.has(p.source) ? `right:${p.source}:${p.id}` : `right:${p.source}`, v = f.has(p.target) ? `left:${p.target}:${p.id}` : `left:${p.target}`;
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
  const Xm = /* @__PURE__ */ new Map();
  function GE(e) {
    let r = 0;
    for (let o = 0; o < e.length; o++) {
      const i = e.charCodeAt(o);
      r = (r << 5) - r + i | 0;
    }
    return r.toString(36);
  }
  function XE(e, r) {
    const o = e.components.length, i = e.connections.length, l = (r == null ? void 0 : r.length) ? r.join(",") : "", u = l ? GE(l) : "none";
    return `${o}::${i}::${u}`;
  }
  function KE(e) {
    return Xm.get(e);
  }
  function QE(e, r) {
    Xm.set(e, r);
  }
  const s0 = {
    component: 0,
    cluster: 1,
    busChannel: 2
  };
  function ZE(e) {
    return e.data.kind === "busChannel" ? {
      width: ta,
      height: Ur
    } : e.data.kind === "cluster" ? {
      width: Ws,
      height: zo
    } : {
      width: Ro,
      height: _n
    };
  }
  function qE(e) {
    return e.data.kind === "component" ? e.data.layer ?? 3 : e.data.kind === "busChannel" ? e.data.layer ?? 1 : 4;
  }
  function JE(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) r.set(o.source, (r.get(o.source) ?? 0) + 1), r.set(o.target, (r.get(o.target) ?? 0) + 1);
    return r;
  }
  function eC(e, r) {
    return e <= 3 ? e : r === 1 ? 1 : e <= 8 ? 2 : e <= 20 ? 3 : e <= 45 ? 4 : e <= 80 ? 5 : 6;
  }
  function tC(e, r) {
    return r === 1 ? 260 : e > 80 ? 210 : e > 40 ? 195 : e > 15 ? 180 : 160;
  }
  function cc(e, r) {
    const o = /* @__PURE__ */ new Map(), i = JE(r);
    for (const c of e) {
      const f = qE(c), m = o.get(f);
      m ? m.push(c) : o.set(f, [
        c
      ]);
    }
    const l = [], u = [
      ...o.keys()
    ].sort((c, f) => c - f);
    for (const c of u) {
      const m = [
        ...o.get(c)
      ].sort((C, E) => {
        const A = (s0[C.data.kind] ?? 99) - (s0[E.data.kind] ?? 99);
        if (A !== 0) return A;
        const P = (i.get(E.id) ?? 0) - (i.get(C.id) ?? 0);
        return P !== 0 ? P : C.id.localeCompare(E.id);
      }), h = eC(m.length, c), p = Math.ceil(m.length / h), y = tC(m.length, c), v = c === 1 ? 460 : c === 4 ? 340 : 300, k = (Il[c] ?? c * 420) - (h - 1) * v / 2, S = -((p - 1) * y) / 2;
      for (let C = 0; C < m.length; C++) {
        const E = m[C];
        if (!E) continue;
        const { width: A, height: P } = ZE(E), I = C % h, F = Math.floor(C / h);
        l.push({
          ...E,
          position: {
            x: k + I * v - A / 2,
            y: S + F * y
          }
        });
      }
    }
    return l;
  }
  const nC = "modulepreload", rC = function(e) {
    return "/" + e;
  }, i0 = {}, oC = function(r, o, i) {
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
      const f = document.querySelector("meta[property=csp-nonce]"), m = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute("nonce"));
      l = c(o.map((h) => {
        if (h = rC(h), h in i0) return;
        i0[h] = true;
        const p = h.endsWith(".css"), y = p ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${h}"]${y}`)) return;
        const v = document.createElement("link");
        if (v.rel = p ? "stylesheet" : nC, p || (v.as = "script"), v.crossOrigin = "", v.href = h, m && v.setAttribute("nonce", m), document.head.appendChild(v), p) return new Promise((x, k) => {
          v.addEventListener("load", x), v.addEventListener("error", () => k(new Error(`Unable to preload CSS for ${h}`)));
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
  };
  function sC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of Object.entries(e)) r.set(o, {
      category: i.category,
      layer: i.layer,
      groupId: i.groupId
    });
    return r;
  }
  function iC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of Object.entries(e)) r.set(o, {
      connectionType: i.connectionType,
      sourcePortSide: i.sourcePortSide,
      targetPortSide: i.targetPortSide
    });
    return r;
  }
  function Km(e) {
    const r = {};
    for (const [o, i] of Object.entries(e)) {
      r[o] = {};
      for (const [l, u] of Object.entries(i)) r[o][l] = u;
    }
    return r;
  }
  function lC(e) {
    return {
      layerConstraints: e.layerConstraints,
      portConstraints: Km(e.portConstraints),
      groupHints: e.groupHints,
      elkOptions: e.elkOptions
    };
  }
  async function aC(e) {
    const { preprocessArchitectureWasm: r } = await oC(async () => {
      const { preprocessArchitectureWasm: i } = await import("./index-B5Iy_e64.js");
      return {
        preprocessArchitectureWasm: i
      };
    }, []), o = await r(JSON.stringify(e));
    return {
      model: o.model,
      componentMetadata: sC(o.componentMetadata),
      connectionMetadata: iC(o.connectionMetadata),
      groups: o.groups,
      portSides: Km(o.portSides),
      elkHints: lC(o.elkHints)
    };
  }
  const uC = /\d+$/;
  function Yl(e) {
    const r = {};
    for (const o of e) r[o.type] = (r[o.type] ?? 0) + 1;
    return r;
  }
  function zc(e, r) {
    const o = new Set(e.map((i) => i.id));
    return r.filter((i) => o.has(i.sourceComponentId) || o.has(i.targetComponentId)).length;
  }
  function cC(e) {
    const r = e.replace(uC, "").trim(), o = r.split(/[\s_\-]+/);
    return o[o.length - 1] ?? r;
  }
  function dC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const i = r.get(o.type);
      i ? i.push(o) : r.set(o.type, [
        o
      ]);
    }
    return r;
  }
  function fC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const i = cC(o.name), l = r.get(i);
      l ? l.push(o) : r.set(i, [
        o
      ]);
    }
    return r;
  }
  function hC(e, r) {
    const o = [];
    for (let i = 0; i < e.length; i += r) o.push(e.slice(i, i + r));
    return o;
  }
  function pC(e) {
    return e <= 12 ? e : e <= 30 ? Math.ceil(e / 3) : e <= 60 ? Math.ceil(e / 4) : Math.ceil(e / 5);
  }
  function Lc(e, r, o, i) {
    var _a, _b, _c2, _d, _e2;
    if (e.length <= 12) return [];
    const l = fC(e), u = [
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
          componentIds: y.map((k) => k.id),
          childGroups: x ? Lc(y, r, o + 1, v) : [],
          metadata: {
            componentCount: y.length,
            connectionCount: zc(y, r),
            typeBreakdown: Yl(y)
          }
        });
      }
      return h;
    }
    const c = pC(e.length), f = hC(e, c), m = [];
    for (let h = 0; h < f.length; h++) {
      const p = f[h];
      if (!p || p.length === 0) continue;
      const y = `${i}:part${h}`, v = p.length > 12, x = ((_c2 = p[0]) == null ? void 0 : _c2.name) ?? `Part ${h + 1}`, k = ((_d = p[p.length - 1]) == null ? void 0 : _d.name) ?? x, S = p.length > 2 ? `${x}..${k}` : x;
      m.push({
        id: y,
        name: `${S} (${p.length})`,
        type: ((_e2 = p[0]) == null ? void 0 : _e2.type) ?? "custom",
        depth: o,
        componentIds: p.map((C) => C.id),
        childGroups: v ? Lc(p, r, o + 1, y) : [],
        metadata: {
          componentCount: p.length,
          connectionCount: zc(p, r),
          typeBreakdown: Yl(p)
        }
      });
    }
    return m;
  }
  function mC(e) {
    return 1001;
  }
  function gC(e, r) {
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
        typeBreakdown: Yl(e.components)
      }
    }, i = mC(e.components.length);
    if (e.components.length < i) return o;
    const l = dC(e.components);
    for (const u of Q2) {
      const c = l.get(u);
      if (!c || c.length === 0) continue;
      const f = `hierarchy:${u}`, m = c.length > 12, h = {
        id: f,
        name: `${K2[u]} (${c.length})`,
        type: u,
        depth: 1,
        componentIds: c.map((p) => p.id),
        childGroups: m ? Lc(c, e.connections, 2, f) : [],
        metadata: {
          componentCount: c.length,
          connectionCount: zc(c, e.connections),
          typeBreakdown: Yl(c)
        }
      };
      o.childGroups.push(h);
    }
    return o;
  }
  function yC(e) {
    const r = new Map(e.components.map((o) => [
      o.id,
      0
    ]));
    for (const o of e.connections) r.set(o.sourceComponentId, (r.get(o.sourceComponentId) ?? 0) + 1), r.set(o.targetComponentId, (r.get(o.targetComponentId) ?? 0) + 1);
    return r;
  }
  function vC(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e.connections) {
      let i = r.get(o.sourceComponentId);
      i || (i = /* @__PURE__ */ new Set(), r.set(o.sourceComponentId, i)), i.add(o.id);
      let l = r.get(o.targetComponentId);
      l || (l = /* @__PURE__ */ new Set(), r.set(o.targetComponentId, l)), l.add(o.id);
    }
    return r;
  }
  function l0(e, r) {
    const o = /* @__PURE__ */ new Set();
    for (const i of e) {
      const l = r.get(i);
      if (l) for (const u of l) o.add(u);
    }
    return o.size;
  }
  function wC(e) {
    return e === "bus";
  }
  function xC(e, r, o, i) {
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
  function SC(e, r, o, i) {
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
  function kC(e, r, o) {
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
  function EC(e, r, o) {
    const i = /* @__PURE__ */ new Map();
    for (const l of e.connections) {
      const u = r.get(l.sourceComponentId), c = r.get(l.targetComponentId);
      if (!u || !c || u === c) continue;
      const f = `${u}->${c}`, m = i.get(f);
      m ? m.count += 1 : i.set(f, {
        connection: l,
        count: 1,
        source: u,
        target: c
      });
    }
    return [
      ...i.values()
    ].map(({ connection: l, count: u, source: c, target: f }) => {
      const m = o == null ? void 0 : o.get(l.id), h = {
        connection: l,
        connectionCount: u,
        connectionType: m == null ? void 0 : m.connectionType
      }, p = c.startsWith("hierarchy:"), y = f.startsWith("hierarchy:");
      return {
        id: u > 1 ? `agg_${c}_to_${f}` : l.id,
        source: c,
        target: f,
        sourceHandle: p ? void 0 : `right:${c}`,
        targetHandle: y ? void 0 : `left:${f}`,
        type: "architecture",
        data: h,
        markerEnd: {
          type: $o.ArrowClosed
        }
      };
    });
  }
  function CC(e, r, o, i, l, u) {
    const c = [], f = [];
    if (e.childGroups.length === 0) {
      for (const h of e.componentIds) {
        const p = i.get(h);
        p && (c.push(p), l.set(h, h));
      }
      return {
        visibleComponents: c,
        clusters: f
      };
    }
    if (r.has(e.id)) for (const h of e.childGroups) {
      const p = h.componentIds.length, y = h.childGroups.length > 0;
      if (p <= G2 || !y) for (const v of h.componentIds) {
        const x = i.get(v);
        x && (c.push(x), l.set(v, v));
      }
      else {
        const v = l0(h.componentIds, u), x = {};
        for (const k of h.componentIds) {
          const S = i.get(k);
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
        for (const k of h.componentIds) l.set(k, h.id);
      }
    }
    else {
      const h = l0(e.componentIds, u), p = {};
      for (const y of e.componentIds) {
        const v = i.get(y);
        v && (p[v.type] = (p[v.type] ?? 0) + 1);
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
        typeBreakdown: p
      });
      for (const y of e.componentIds) l.set(y, e.id);
    }
    return {
      visibleComponents: c,
      clusters: f
    };
  }
  function _C(e, r, o) {
    var _a;
    const i = [], l = [], u = [];
    for (const h of e) {
      const y = ((_a = o == null ? void 0 : o.componentMetadata.get(h.id)) == null ? void 0 : _a.layer) ?? 3;
      wC(h.type) ? l.push({
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
    const f = [
      ...c.keys()
    ].sort((h, p) => h - p);
    for (const h of f) {
      const p = c.get(h), y = Il[h] ?? h * 300, x = -(p.length * Pp / 2) + _n / 2;
      for (let k = 0; k < p.length; k++) {
        const S = p[k];
        if (!S) continue;
        const C = x + k * Pp;
        i.push(SC(S.component, S.layer, y, C));
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
      const y = Il[h] ?? h * 300, x = -(p.length * (Ur + 40) / 2) + Ur / 2;
      for (let k = 0; k < p.length; k++) {
        const S = p[k];
        if (!S) continue;
        const C = x + k * (Ur + 40);
        i.push(xC(S.component, S.layer, y, C));
      }
    }
    for (let h = 0; h < r.length; h++) {
      const p = r[h];
      if (!p) continue;
      const y = Il[4], v = -200 + h * (Ws + 80);
      i.push(kC(p, y + 400, v));
    }
    return i;
  }
  function Cl(e, r, o) {
    yC(e);
    const i = gC(e), l = new Map(e.components.map((v) => [
      v.id,
      v
    ])), u = vC(e), c = r ?? /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), m = [], h = [];
    if (i.childGroups.length === 0) for (const v of i.componentIds) {
      const x = l.get(v);
      x && (m.push(x), f.set(v, v));
    }
    else for (const v of i.childGroups) {
      const x = CC(v, c, e, l, f, u);
      m.push(...x.visibleComponents), h.push(...x.clusters);
    }
    const p = _C(m, h, o), y = EC(e, f, o == null ? void 0 : o.connectionMetadata);
    return {
      nodes: p,
      edges: y
    };
  }
  function NC(e) {
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
  function dc(e, r) {
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
  function a0(e, r) {
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
        const c = NC(l);
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
  function MC() {
    const e = Dt((m) => m.model), r = Te((m) => m.setNodes), o = Te((m) => m.setEdges), i = Te((m) => m.setLayoutLoading), l = Te((m) => m.expandedClusterIds), u = Te((m) => m.expansionPath), c = L.useRef(null), f = L.useRef(false);
    L.useEffect(() => {
      if (!e) return;
      if (e.components.length > Z2) {
        i(true);
        const y = new Worker(new URL("/assets/preprocessWorker-DkNNOVJt.js", import.meta.url), {
          type: "module"
        });
        return y.onmessage = (v) => {
          v.data.result && (c.current = v.data.result);
          const { nodes: x, edges: k } = Cl(e, l, v.data.result);
          r(x), o(k);
          const S = cc(x, k);
          r(dc(x, S)), i(false), f.current = true, y.terminate();
        }, y.onerror = () => {
          const { nodes: v, edges: x } = Cl(e, l);
          r(v), o(x);
          const k = cc(v, x);
          r(dc(v, k)), i(false), f.current = true, y.terminate();
        }, y.postMessage({
          model: e
        }), () => {
          i(false), y.terminate();
        };
      }
      const p = setTimeout(async () => {
        const y = await aC(e);
        c.current = y;
        const { nodes: v, edges: x } = Cl(e, l, y);
        r(v), o(x);
        const k = XE(e, u), S = KE(k);
        if (S) {
          r(a0(v, S)), f.current = true;
          return;
        }
        i(true);
        const C = new Worker(new URL("/assets/layoutWorker-BJNLPia9.js", import.meta.url), {
          type: "module"
        });
        return C.onmessage = (E) => {
          E.data.layout ? (QE(k, E.data.layout), r(a0(v, E.data.layout)), E.data.duration && console.log(`ELK layout completed in ${E.data.duration.toFixed(0)}ms for ${v.length} nodes`)) : r(v), i(false), f.current = true, C.terminate();
        }, C.onerror = () => {
          r(v), i(false), f.current = true, C.terminate();
        }, C.postMessage({
          graph: YE(v, x, y.elkHints),
          elkHints: y.elkHints
        }), () => {
          i(false), C.terminate();
        };
      }, 10);
      return () => clearTimeout(p);
    }, [
      e,
      o,
      r,
      i
    ]), L.useEffect(() => {
      if (!e || !f.current) return;
      const { nodes: m, edges: h } = Cl(e, l, c.current ?? void 0);
      r(m), o(h);
      const p = cc(m, h);
      r(dc(m, p));
    }, [
      l,
      u,
      e,
      r,
      o
    ]);
  }
  const bC = "http://www.w3.org/2000/svg";
  function IC(e) {
    if (e.data.kind === "busChannel") return 720;
    if (e.data.kind === "cluster") return zo;
    const r = e.data.component, o = 60, i = 20, l = r.ports.length * 20 + 16, u = r.registers.length > 0 ? r.registers.length * 20 + 16 : 0;
    return Math.max(_n, o + i + l + u + 16);
  }
  function ld(e) {
    return e.data.kind === "busChannel" ? {
      width: 32,
      height: 720
    } : e.data.kind === "cluster" ? {
      width: 280,
      height: zo
    } : {
      width: 220,
      height: IC(e)
    };
  }
  function TC(e) {
    const { width: r, height: o } = ld(e);
    return {
      minX: e.position.x,
      minY: e.position.y,
      maxX: e.position.x + r,
      maxY: e.position.y + o
    };
  }
  function AC(e) {
    return e.length === 0 ? null : e.reduce((r, o) => ({
      minX: Math.min(r.minX, o.minX),
      minY: Math.min(r.minY, o.minY),
      maxX: Math.max(r.maxX, o.maxX),
      maxY: Math.max(r.maxY, o.maxY)
    }), {
      ...e[0]
    });
  }
  function Gl(e, r) {
    const { width: o, height: i } = ld(e);
    return {
      x: r === "right" ? e.position.x + o : e.position.x,
      y: e.position.y + i / 2
    };
  }
  function $C(e, r) {
    const o = e.map(TC), i = new Map(e.map((l) => [
      l.id,
      l
    ]));
    for (const l of r) {
      const u = i.get(l.source), c = i.get(l.target);
      if (!u || !c) continue;
      const f = Gl(u, "right"), m = Gl(c, "left");
      o.push({
        minX: Math.min(f.x, m.x) - 40,
        minY: Math.min(f.y, m.y) - 40,
        maxX: Math.max(f.x, m.x) + 40,
        maxY: Math.max(f.y, m.y) + 40
      });
    }
    return AC(o);
  }
  function Kt(e, r = {}, o) {
    const i = document.createElementNS(bC, e);
    for (const [l, u] of Object.entries(r)) i.setAttribute(l, u);
    return o != null && (i.textContent = o), i;
  }
  function Ie(e, r, o, i, l = {}) {
    const u = Kt("text", {
      x: String(r),
      y: String(o),
      ...l
    }, i);
    return e.appendChild(u), u;
  }
  function yt(e, r) {
    const o = Kt("rect", r);
    return e.appendChild(o), o;
  }
  function gt(e, r) {
    return yt(e, {
      rx: "10",
      ry: "10",
      ...r
    });
  }
  const RC = {
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
  }, PC = {
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
  function zC(e, r, o) {
    const i = r ? RC : PC;
    return o ? {
      color: r ? "#818cf8" : "#6366f1",
      width: 2,
      dash: "4 3",
      opacity: 0.65
    } : i[e ?? "unknown"] ?? i.unknown;
  }
  function LC(e, r, o, i, l = 8) {
    const u = o - e, c = i - r, f = Math.abs(u), m = Math.abs(c), h = Math.min(l, f / 2, m / 2);
    if (h <= 0 || f < 1 || m < 1) return {
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
  function DC(e) {
    var _a, _b;
    return ((_a = e.data) == null ? void 0 : _a.connectionType) ? e.data.connectionType : ((_b = e.data) == null ? void 0 : _b.connectionCount) && e.data.connectionCount > 1 ? `${e.data.connectionCount}x` : "";
  }
  function u0(e) {
    return St[e] ?? St.custom;
  }
  function OC(e) {
    const i = e.ports.length * 20 + 16, l = e.registers.length > 0 ? e.registers.length * 20 + 16 : 0;
    return Math.max(_n, 80 + i + l + 16);
  }
  function FC(e, r) {
    var _a;
    const o = Kt("g", {
      class: `node node-${e.data.kind}`
    }), i = ld(e), l = i.width;
    if (e.data.kind === "busChannel") {
      const m = i.height, h = u0(e.data.component.type);
      gt(o, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: String(l),
        height: String(m),
        fill: `${h.base}26`,
        stroke: `${h.base}66`,
        "stroke-width": "1.2"
      }), yt(o, {
        x: String(e.position.x + 2),
        y: String(e.position.y),
        width: String(l - 4),
        height: "2",
        fill: h.base
      }), yt(o, {
        x: String(e.position.x + 2),
        y: String(e.position.y + m - 2),
        width: String(l - 4),
        height: "2",
        fill: h.base
      });
      const p = e.position.x + l / 2, y = e.position.y + m / 2;
      return Ie(o, p, y, e.data.component.name, {
        fill: h.text,
        "font-size": "13px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        transform: `rotate(-90 ${p} ${y})`
      }).setAttribute("font-weight", "600"), o;
    }
    if (e.data.kind === "cluster") {
      const m = i.height, h = e.data.cluster, p = Object.keys(h.typeBreakdown ?? {})[0], y = p ? ((_a = St[p]) == null ? void 0 : _a.base) ?? "#94a3b8" : "#94a3b8";
      gt(o, {
        x: String(e.position.x + 2),
        y: String(e.position.y + 3),
        width: String(l),
        height: String(m),
        rx: "12",
        fill: "rgba(0,0,0,0.10)",
        opacity: "0.20"
      }), gt(o, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: String(l),
        height: String(m),
        fill: "#ffffff",
        stroke: "#cbd5e1",
        "stroke-width": "1.2"
      }), yt(o, {
        x: String(e.position.x),
        y: String(e.position.y),
        width: "6",
        height: String(m),
        rx: "12",
        fill: y
      }), Ie(o, e.position.x + 16, e.position.y + 22, h.name, {
        fill: "#0f172a",
        "font-size": "14px",
        "font-weight": "700",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Ie(o, e.position.x + 16, e.position.y + 42, `${h.componentCount} blocks`, {
        fill: "#475569",
        "font-size": "11px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Ie(o, e.position.x + 16, e.position.y + 58, `Connections: ${h.connectionCount}`, {
        fill: "#64748b",
        "font-size": "10px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      });
      const v = Object.entries(h.typeBreakdown ?? {}).slice(0, 4);
      let x = e.position.x + 16;
      for (const [k, S] of v) {
        const C = Math.max(56, k.length * 5 + String(S).length * 8 + 18);
        gt(o, {
          x: String(x),
          y: String(e.position.y + 72),
          width: String(C),
          height: "18",
          fill: "#f1f5f9",
          stroke: "#e2e8f0",
          "stroke-width": "1"
        }), Ie(o, x + 6, e.position.y + 85, `${k}:${S}`, {
          fill: "#475569",
          "font-size": "9px",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), x += C + 6;
      }
      return o;
    }
    const u = e.data.component, c = u0(u.type), f = r === "full" ? OC(u) : _n;
    if (gt(o, {
      x: String(e.position.x + 2),
      y: String(e.position.y + 3),
      width: String(l),
      height: String(f),
      rx: "12",
      fill: "rgba(0,0,0,0.10)",
      opacity: "0.20"
    }), gt(o, {
      x: String(e.position.x),
      y: String(e.position.y),
      width: String(l),
      height: String(f),
      fill: "#ffffff",
      stroke: "#cbd5e1",
      "stroke-width": "1.2"
    }), yt(o, {
      x: String(e.position.x),
      y: String(e.position.y),
      width: "6",
      height: String(f),
      rx: "12",
      fill: c.base
    }), gt(o, {
      x: String(e.position.x + 16),
      y: String(e.position.y + 12),
      width: "40",
      height: "40",
      fill: `${c.base}18`,
      stroke: `${c.border}88`,
      "stroke-width": "1.2"
    }), Ie(o, e.position.x + 36, e.position.y + 36, u.type.slice(0, 3).toUpperCase(), {
      fill: c.border,
      "font-size": "10px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle"
    }), Ie(o, e.position.x + 64, e.position.y + 24, u.name, {
      fill: "#0f172a",
      "font-size": "13px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), Ie(o, e.position.x + 64, e.position.y + 40, u.id, {
      fill: "#64748b",
      "font-size": "10px",
      "font-family": "SFMono-Regular, ui-monospace, monospace"
    }), r === "full") {
      let m = e.position.y + 60;
      Ie(o, e.position.x + 16, m, `${u.ports.length} ports / ${u.registers.length} registers`, {
        fill: "#475569",
        "font-size": "10px",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), m += 16, yt(o, {
        x: String(e.position.x + 16),
        y: String(m),
        width: String(l - 32),
        height: "1",
        fill: "#e2e8f0"
      }), m += 8;
      for (const h of u.ports) {
        gt(o, {
          x: String(e.position.x + 16),
          y: String(m),
          width: String(l - 32),
          height: "16",
          fill: "#f8fafc",
          stroke: "#e2e8f0",
          "stroke-width": "0.5"
        });
        const p = h.direction === "in" ? "#10b981" : h.direction === "out" ? "#f59e0b" : "#94a3b8";
        yt(o, {
          x: String(e.position.x + 22),
          y: String(m + 5),
          width: "4",
          height: "4",
          fill: p
        }), Ie(o, e.position.x + 30, m + 12, h.name, {
          fill: "#334155",
          "font-size": "9px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), Ie(o, e.position.x + l - 22, m + 12, h.direction.toUpperCase(), {
          fill: p,
          "font-size": "8px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "end"
        }), m += 18;
      }
      if (u.registers.length > 0) {
        yt(o, {
          x: String(e.position.x + 16),
          y: String(m),
          width: String(l - 32),
          height: "1",
          fill: "#e2e8f0"
        }), m += 8;
        for (const h of u.registers) gt(o, {
          x: String(e.position.x + 16),
          y: String(m),
          width: String(l - 32),
          height: "16",
          fill: "#f8fafc",
          stroke: "#e2e8f0",
          "stroke-width": "0.5"
        }), Ie(o, e.position.x + 22, m + 12, h.name, {
          fill: "#334155",
          "font-size": "9px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), h.address && Ie(o, e.position.x + l - 22, m + 12, h.address, {
          fill: "#94a3b8",
          "font-size": "8px",
          "font-family": "SFMono-Regular, ui-monospace, monospace",
          "text-anchor": "end"
        }), m += 18;
      }
    }
    return o;
  }
  const ut = 360, ze = 20;
  function BC(e) {
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
  function jC(e, r, o, i, l) {
    const u = Kt("g", {
      class: "sidebar-panel"
    });
    if (yt(u, {
      x: String(o),
      y: String(i),
      width: String(ut),
      height: String(l),
      fill: r ? "#0b1018" : "#fffcf9",
      stroke: r ? "rgba(255,255,255,0.1)" : "#e5e0d8",
      "stroke-width": "1"
    }), e.data.kind === "busChannel") {
      const S = e.data.component;
      St[S.type] ?? St.custom;
      const C = o + ut / 2, E = i + l / 2;
      return Ie(u, C, E, `Bus Channel: ${S.name}`, {
        fill: r ? "#e2e8f0" : "#1a1a1a",
        "font-size": "16px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "middle"
      }), u;
    }
    const c = e.data.kind === "cluster" ? null : e.data.component, f = e.data.kind === "cluster" ? e.data.cluster : null, m = (c == null ? void 0 : c.name) ?? (f == null ? void 0 : f.name) ?? "", h = (c == null ? void 0 : c.type) ?? (f == null ? void 0 : f.type) ?? "custom", p = (c == null ? void 0 : c.id) ?? (f == null ? void 0 : f.id) ?? "", y = St[h] ?? St.custom;
    let v = i + ze;
    yt(u, {
      x: String(o),
      y: String(v),
      width: String(ut),
      height: "4",
      fill: y.base
    }), v += 16;
    const x = 40;
    gt(u, {
      x: String(o + ze),
      y: String(v),
      width: String(x),
      height: String(x),
      fill: `${y.base}20`,
      stroke: `${y.border}40`,
      "stroke-width": "1"
    }), Ie(u, o + ze + x / 2, v + x / 2 + 1, h.slice(0, 2).toUpperCase(), {
      fill: y.border,
      "font-size": "12px",
      "font-weight": "700",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-anchor": "middle"
    });
    const k = o + ze + x + 12;
    if (gt(u, {
      x: String(k),
      y: String(v + 2),
      width: String(h.length * 7 + 16),
      height: "20",
      fill: `${y.border}1a`,
      stroke: `${y.border}40`,
      "stroke-width": "1"
    }), Ie(u, k + 8, v + 15, h, {
      fill: y.border,
      "font-size": "10px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "text-transform": "uppercase"
    }), Ie(u, k, v + 38, m, {
      fill: r ? "#f8fafc" : "#0f172a",
      "font-size": "16px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), Ie(u, k, v + 56, p, {
      fill: r ? "#64748b" : "#94a3b8",
      "font-size": "11px",
      "font-family": "SFMono-Regular, ui-monospace, monospace"
    }), v += 80, yt(u, {
      x: String(o),
      y: String(v),
      width: String(ut),
      height: "1",
      fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
    }), v += 4, c) {
      const S = c.ports.length, C = c.registers.length, E = v, A = ut / 3;
      for (let P = 0; P < 3; P++) {
        const I = o + ze + P * A, F = P === 0 ? "Ports" : P === 1 ? "Registers" : "Connections", z = P === 0 ? S : P === 1 ? C : S + C;
        Ie(u, I + A / 2, E + 4, String(z), {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "18px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "middle"
        }), Ie(u, I + A / 2, E + 20, F.toUpperCase(), {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "10px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "middle"
        });
      }
      v += 40, yt(u, {
        x: String(o),
        y: String(v),
        width: String(ut),
        height: "1",
        fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
      }), v += 12, Ie(u, o + ze, v + 4, "PORTS", {
        fill: r ? "#64748b" : "#94a3b8",
        "font-size": "11px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "letter-spacing": "0.05em"
      }), v += 16;
      for (const P of c.ports) {
        const I = BC(P.direction);
        gt(u, {
          x: String(o + ze),
          y: String(v),
          width: String(ut - ze * 2),
          height: "28",
          fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
          stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
          "stroke-width": "1"
        }), yt(u, {
          x: String(o + ze + 12),
          y: String(v + 10),
          width: "6",
          height: "6",
          fill: I.dot
        }), Ie(u, o + ze + 24, v + 18, P.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), gt(u, {
          x: String(o + ut - ze - 50),
          y: String(v + 6),
          width: String(P.direction.length * 6 + 12),
          height: "16",
          fill: I.bg
        }), Ie(u, o + ut - ze - 50 + 6, v + 17, P.direction.toUpperCase(), {
          fill: I.text,
          "font-size": "10px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), P.width && Ie(u, o + ut - ze - 16, v + 18, `${P.width}b`, {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "11px",
          "font-family": "SFMono-Regular, ui-monospace, monospace",
          "text-anchor": "end"
        }), v += 32;
      }
      if (v += 8, c.registers.length > 0) {
        yt(u, {
          x: String(o),
          y: String(v),
          width: String(ut),
          height: "1",
          fill: r ? "rgba(255,255,255,0.1)" : "#e2e8f0"
        }), v += 12, Ie(u, o + ze, v + 4, "REGISTERS", {
          fill: r ? "#64748b" : "#94a3b8",
          "font-size": "11px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "letter-spacing": "0.05em"
        }), v += 16;
        for (const P of c.registers) gt(u, {
          x: String(o + ze),
          y: String(v),
          width: String(ut - ze * 2),
          height: "28",
          fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
          stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
          "stroke-width": "1"
        }), Ie(u, o + ze + 12, v + 18, P.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), P.address && (gt(u, {
          x: String(o + ut - ze - 70),
          y: String(v + 6),
          width: String(P.address.length * 7 + 12),
          height: "16",
          fill: r ? "rgba(255,255,255,0.05)" : "#f1f5f9"
        }), Ie(u, o + ut - ze - 70 + 6, v + 17, P.address, {
          fill: r ? "#94a3b8" : "#64748b",
          "font-size": "10px",
          "font-family": "SFMono-Regular, ui-monospace, monospace"
        })), v += 32;
      }
    } else if (f && (Ie(u, o + ze, v + 4, "CLUSTER", {
      fill: r ? "#64748b" : "#94a3b8",
      "font-size": "11px",
      "font-weight": "600",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
      "letter-spacing": "0.05em"
    }), v += 16, Ie(u, o + ze, v + 4, `${f.componentCount} components`, {
      fill: r ? "#e2e8f0" : "#334155",
      "font-size": "13px",
      "font-weight": "500",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), v += 20, f.typeBreakdown)) for (const [S, C] of Object.entries(f.typeBreakdown)) {
      const E = St[S] ?? St.custom;
      gt(u, {
        x: String(o + ze),
        y: String(v),
        width: String(ut - ze * 2),
        height: "28",
        fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
        stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
        "stroke-width": "1"
      }), yt(u, {
        x: String(o + ze + 12),
        y: String(v + 10),
        width: "6",
        height: "6",
        fill: E.base
      }), Ie(u, o + ze + 24, v + 18, S, {
        fill: r ? "#e2e8f0" : "#334155",
        "font-size": "13px",
        "font-weight": "500",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Ie(u, o + ut - ze - 12, v + 18, `\xD7${C}`, {
        fill: r ? "#94a3b8" : "#64748b",
        "font-size": "13px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "end"
      }), v += 32;
    }
    return u;
  }
  const HC = "http://www.w3.org/2000/svg";
  function VC(e, r, o) {
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
    ]), f = e.filter((h) => c.has(h.id)), m = r.filter((h) => l.has(h.id));
    return f.length === 0 ? {
      nodes: e,
      edges: r
    } : {
      nodes: f,
      edges: m
    };
  }
  function UC(e) {
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
  function WC(e, r) {
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
  function YC(e, r, o, i) {
    var _a;
    const l = $C(e, r);
    if (!l) throw new Error("Unable to determine export bounds.");
    const u = e.length <= 40 ? "full" : "compact", c = u === "full" ? 96 : 128, f = l.maxX - l.minX + c * 2, m = l.maxY - l.minY + c * 2, h = l.minX - c, p = l.minY - c, y = i ? 24 : 0, v = f + y + (i ? ut : 0), x = new Map(e.map((A) => [
      A.id,
      A
    ])), k = Kt("svg", {
      xmlns: HC,
      width: String(v),
      height: String(m),
      viewBox: `${h} ${p} ${v} ${m}`,
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), S = Kt("defs");
    WC(S, o), k.appendChild(S), yt(k, {
      x: String(h),
      y: String(p),
      width: String(f),
      height: String(m),
      fill: o ? "#020617" : "#faf8f5"
    });
    const C = Kt("g", {
      class: "edges"
    });
    for (const A of r) {
      const P = x.get(A.source), I = x.get(A.target);
      if (!P || !I) continue;
      const F = A.source.startsWith("hierarchy:") || A.target.startsWith("hierarchy:"), z = zC((_a = A.data) == null ? void 0 : _a.connectionType, o, F), Q = Gl(P, "right"), q = Gl(I, "left"), { path: G, labelX: J, labelY: ee } = LC(Q.x, Q.y, q.x, q.y);
      C.appendChild(Kt("path", {
        d: G,
        fill: "none",
        stroke: z.color,
        "stroke-width": String(z.width),
        "stroke-opacity": String(z.opacity),
        "stroke-dasharray": z.dash ?? "",
        "marker-end": "url(#export-arrow)"
      }));
      const Y = DC(A);
      if (Y) {
        const Z = Math.max(36, Y.length * 7 + 10);
        C.appendChild(Kt("rect", {
          x: String(J - Z / 2),
          y: String(ee - 10),
          width: String(Z),
          height: "18",
          rx: "9",
          fill: o ? "#0f172a" : "#ffffff",
          stroke: o ? "#334155" : "#cbd5e1"
        })), Ie(C, J, ee + 3, Y, {
          fill: o ? "#e2e8f0" : "#334155",
          "font-size": "9px",
          "text-anchor": "middle",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        });
      }
    }
    k.appendChild(C);
    const E = Kt("g", {
      class: "nodes"
    });
    for (const A of e) E.appendChild(FC(A, u));
    if (k.appendChild(E), i) {
      const A = UC(e);
      if (A) {
        const P = h + f + y, I = p;
        k.appendChild(jC(A, o, P, I, m));
      }
    }
    return k;
  }
  function Qm(e) {
    return new XMLSerializer().serializeToString(e);
  }
  async function GC(e, r) {
    const o = Qm(e), i = new Blob([
      o
    ], {
      type: "image/svg+xml;charset=utf-8"
    }), l = URL.createObjectURL(i);
    try {
      const u = new Image();
      u.decoding = "async", u.src = l, await u.decode();
      const c = window.devicePixelRatio || 1, f = e.viewBox.baseVal.width, m = e.viewBox.baseVal.height, h = document.createElement("canvas");
      h.width = Math.ceil(f * c), h.height = Math.ceil(m * c);
      const p = h.getContext("2d");
      if (!p) throw new Error("Canvas unavailable");
      return p.scale(c, c), p.fillStyle = r ? "#020617" : "#faf8f5", p.fillRect(0, 0, f, m), p.drawImage(u, 0, 0, f, m), new Promise((y, v) => {
        h.toBlob((x) => x ? y(x) : v(new Error("Failed to create PNG blob")), "image/png");
      });
    } finally {
      URL.revokeObjectURL(l);
    }
  }
  function XC(e, r) {
    const o = document.createElement("a");
    o.href = e, o.download = r, o.click();
  }
  function c0(e, r) {
    const o = URL.createObjectURL(e);
    XC(o, r), setTimeout(() => URL.revokeObjectURL(o), 3e3);
  }
  async function KC(e, r = {}) {
    const o = Te.getState(), l = nt.getState().theme === "dark", u = r.scope ?? ($e.getState().selectedNodeId ? "selection" : "full"), { nodes: c, edges: f } = VC(o.nodes, o.edges, u);
    if (c.length === 0) throw new Error("There is nothing to export.");
    const h = YC(c, f, l, u === "selection");
    if (e === "svg") {
      const y = new Blob([
        Qm(h)
      ], {
        type: "image/svg+xml;charset=utf-8"
      });
      c0(y, `architecture-${u}.svg`);
      return;
    }
    const p = await GC(h, l);
    c0(p, `architecture-${u}.png`);
  }
  function QC() {
    const e = Dt((F) => F.model !== null), r = Dt((F) => {
      var _a;
      return ((_a = F.model) == null ? void 0 : _a.components.length) ?? 0;
    }), o = Dt((F) => {
      var _a;
      return ((_a = F.model) == null ? void 0 : _a.connections.length) ?? 0;
    }), i = Dt((F) => F.clearModel), l = $e((F) => F.selectedNodeId), u = $e((F) => F.selectedNodeIds), c = Te((F) => F.sidebarCollapsed), f = Te((F) => F.setNodes), m = Te((F) => F.setEdges), h = Te((F) => F.resetExpansion), p = $e((F) => F.clearSelection), y = $e((F) => F.setSearchQuery), v = nt((F) => F.theme), x = v === "dark", [k, S] = L.useState(false), [C, E] = L.useState(null);
    MC(), L.useEffect(() => {
      document.documentElement.setAttribute("data-theme", v), x ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [
      v,
      x
    ]);
    function A() {
      p(), y(""), f([]), m([]), h(), i();
    }
    async function P(F, z = "full") {
      S(true), E(null);
      try {
        await KC(F, {
          scope: z
        });
      } catch (Q) {
        const q = Q instanceof Error ? Q.message : "Export failed";
        E(q), setTimeout(() => E(null), 4e3);
      } finally {
        S(false);
      }
    }
    const I = `grid h-screen overflow-hidden transition-colors duration-200 ${x ? "bg-shell-950 text-slate-100" : "bg-[#faf8f5] text-[#1a1a1a]"} ${l && !c ? "grid-cols-[minmax(0,1fr)_360px]" : "grid-cols-[minmax(0,1fr)]"}`;
    return b.jsxs("main", {
      className: I,
      children: [
        b.jsxs("section", {
          className: "relative min-w-0 overflow-hidden",
          children: [
            b.jsxs("div", {
              className: "absolute left-5 top-5 z-10 flex items-start gap-3",
              children: [
                b.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    b.jsx("h1", {
                      className: `text-lg font-semibold ${x ? "text-slate-50" : "text-slate-900"}`,
                      children: "ip-xact"
                    }),
                    e ? b.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition ${x ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200" : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"}`,
                      onClick: A,
                      title: "Load new architecture",
                      type: "button",
                      children: [
                        b.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: b.jsx("path", {
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
                e ? b.jsxs(b.Fragment, {
                  children: [
                    b.jsxs("p", {
                      className: "mt-1 text-xs font-medium text-slate-500",
                      children: [
                        r,
                        " components / ",
                        o,
                        " connections"
                      ]
                    }),
                    u.size > 1 ? b.jsxs("p", {
                      className: `mt-0.5 text-[11px] font-medium ${x ? "text-cyan-300/80" : "text-cyan-700"}`,
                      children: [
                        u.size,
                        " selected for export"
                      ]
                    }) : null
                  ]
                }) : null,
                b.jsx(jE, {})
              ]
            }),
            b.jsxs("div", {
              className: "absolute right-5 top-5 z-10 flex items-center gap-2",
              children: [
                e ? b.jsxs("div", {
                  className: "relative group",
                  children: [
                    b.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${x ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200" : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"}`,
                      disabled: k,
                      type: "button",
                      children: [
                        b.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: b.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          })
                        }),
                        k ? "Exporting..." : "Export"
                      ]
                    }),
                    b.jsxs("div", {
                      className: `invisible group-hover:visible absolute right-0 top-full mt-1 rounded-lg border shadow-lg py-1 z-50 ${x ? "border-white/10 bg-shell-900" : "border-slate-200 bg-white"}`,
                      children: [
                        b.jsx("button", {
                          className: `block w-full px-4 py-2 text-left text-xs transition ${x ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-50"}`,
                          onClick: () => P("png", "full"),
                          type: "button",
                          children: "Export as PNG"
                        }),
                        b.jsx("button", {
                          className: `block w-full px-4 py-2 text-left text-xs transition ${x ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-50"}`,
                          onClick: () => P("svg", "full"),
                          type: "button",
                          children: "Export Full SVG"
                        }),
                        b.jsx("button", {
                          className: `block w-full px-4 py-2 text-left text-xs transition ${u.size > 0 ? x ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-50" : "cursor-not-allowed text-slate-400"}`,
                          disabled: u.size === 0,
                          onClick: () => P("png", "selection"),
                          type: "button",
                          children: "Export Selected PNG"
                        }),
                        b.jsx("button", {
                          className: `block w-full px-4 py-2 text-left text-xs transition ${u.size > 0 ? x ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-50" : "cursor-not-allowed text-slate-400"}`,
                          disabled: u.size === 0,
                          onClick: () => P("svg", "selection"),
                          type: "button",
                          children: "Export Selected SVG"
                        })
                      ]
                    })
                  ]
                }) : null,
                b.jsx(HE, {})
              ]
            }),
            b.jsx(Ok, {}),
            e ? null : b.jsx(Yk, {}),
            C ? b.jsx("div", {
              className: "absolute bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg border shadow-lg text-xs font-medium bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
              children: C
            }) : null
          ]
        }),
        b.jsx(Xk, {})
      ]
    });
  }
  function ZC() {
    return b.jsx(Jc, {
      children: b.jsx(QC, {})
    });
  }
  document.documentElement.classList.add("dark");
  Hy.createRoot(document.getElementById("root")).render(b.jsx(L.StrictMode, {
    children: b.jsx(ZC, {})
  }));
})();
