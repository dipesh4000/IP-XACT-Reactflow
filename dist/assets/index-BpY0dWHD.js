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
  function u0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Fu = {
    exports: {}
  }, vi = {}, Bu = {
    exports: {}
  }, Ce = {};
  var bh;
  function Ty() {
    if (bh) return Ce;
    bh = 1;
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
    function v(_) {
      return _ === null || typeof _ != "object" ? null : (_ = y && _[y] || _["@@iterator"], typeof _ == "function" ? _ : null);
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
    function N(_, $, oe) {
      this.props = _, this.context = $, this.refs = S, this.updater = oe || x;
    }
    N.prototype.isReactComponent = {}, N.prototype.setState = function(_, $) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, _, $, "setState");
    }, N.prototype.forceUpdate = function(_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    };
    function C() {
    }
    C.prototype = N.prototype;
    function P(_, $, oe) {
      this.props = _, this.context = $, this.refs = S, this.updater = oe || x;
    }
    var z = P.prototype = new C();
    z.constructor = P, E(z, N.prototype), z.isPureReactComponent = true;
    var A = Array.isArray, O = Object.prototype.hasOwnProperty, V = {
      current: null
    }, J = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function W(_, $, oe) {
      var ne, le = {}, ae = null, he = null;
      if ($ != null) for (ne in $.ref !== void 0 && (he = $.ref), $.key !== void 0 && (ae = "" + $.key), $) O.call($, ne) && !J.hasOwnProperty(ne) && (le[ne] = $[ne]);
      var me = arguments.length - 2;
      if (me === 1) le.children = oe;
      else if (1 < me) {
        for (var ve = Array(me), ke = 0; ke < me; ke++) ve[ke] = arguments[ke + 2];
        le.children = ve;
      }
      if (_ && _.defaultProps) for (ne in me = _.defaultProps, me) le[ne] === void 0 && (le[ne] = me[ne]);
      return {
        $$typeof: e,
        type: _,
        key: ae,
        ref: he,
        props: le,
        _owner: V.current
      };
    }
    function Y(_, $) {
      return {
        $$typeof: e,
        type: _.type,
        key: $,
        ref: _.ref,
        props: _.props,
        _owner: _._owner
      };
    }
    function Q(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function ee(_) {
      var $ = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + _.replace(/[=:]/g, function(oe) {
        return $[oe];
      });
    }
    var G = /\/+/g;
    function Z(_, $) {
      return typeof _ == "object" && _ !== null && _.key != null ? ee("" + _.key) : $.toString(36);
    }
    function k(_, $, oe, ne, le) {
      var ae = typeof _;
      (ae === "undefined" || ae === "boolean") && (_ = null);
      var he = false;
      if (_ === null) he = true;
      else switch (ae) {
        case "string":
        case "number":
          he = true;
          break;
        case "object":
          switch (_.$$typeof) {
            case e:
            case r:
              he = true;
          }
      }
      if (he) return he = _, le = le(he), _ = ne === "" ? "." + Z(he, 0) : ne, A(le) ? (oe = "", _ != null && (oe = _.replace(G, "$&/") + "/"), k(le, $, oe, "", function(ke) {
        return ke;
      })) : le != null && (Q(le) && (le = Y(le, oe + (!le.key || he && he.key === le.key ? "" : ("" + le.key).replace(G, "$&/") + "/") + _)), $.push(le)), 1;
      if (he = 0, ne = ne === "" ? "." : ne + ":", A(_)) for (var me = 0; me < _.length; me++) {
        ae = _[me];
        var ve = ne + Z(ae, me);
        he += k(ae, $, oe, ve, le);
      }
      else if (ve = v(_), typeof ve == "function") for (_ = ve.call(_), me = 0; !(ae = _.next()).done; ) ae = ae.value, ve = ne + Z(ae, me++), he += k(ae, $, oe, ve, le);
      else if (ae === "object") throw $ = String(_), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
      return he;
    }
    function H(_, $, oe) {
      if (_ == null) return _;
      var ne = [], le = 0;
      return k(_, ne, "", "", function(ae) {
        return $.call(oe, ae, le++);
      }), ne;
    }
    function L(_) {
      if (_._status === -1) {
        var $ = _._result;
        $ = $(), $.then(function(oe) {
          (_._status === 0 || _._status === -1) && (_._status = 1, _._result = oe);
        }, function(oe) {
          (_._status === 0 || _._status === -1) && (_._status = 2, _._result = oe);
        }), _._status === -1 && (_._status = 0, _._result = $);
      }
      if (_._status === 1) return _._result.default;
      throw _._result;
    }
    var K = {
      current: null
    }, B = {
      transition: null
    }, T = {
      ReactCurrentDispatcher: K,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: V
    };
    function F() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return Ce.Children = {
      map: H,
      forEach: function(_, $, oe) {
        H(_, function() {
          $.apply(this, arguments);
        }, oe);
      },
      count: function(_) {
        var $ = 0;
        return H(_, function() {
          $++;
        }), $;
      },
      toArray: function(_) {
        return H(_, function($) {
          return $;
        }) || [];
      },
      only: function(_) {
        if (!Q(_)) throw Error("React.Children.only expected to receive a single React element child.");
        return _;
      }
    }, Ce.Component = N, Ce.Fragment = o, Ce.Profiler = l, Ce.PureComponent = P, Ce.StrictMode = s, Ce.Suspense = m, Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, Ce.act = F, Ce.cloneElement = function(_, $, oe) {
      if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
      var ne = E({}, _.props), le = _.key, ae = _.ref, he = _._owner;
      if ($ != null) {
        if ($.ref !== void 0 && (ae = $.ref, he = V.current), $.key !== void 0 && (le = "" + $.key), _.type && _.type.defaultProps) var me = _.type.defaultProps;
        for (ve in $) O.call($, ve) && !J.hasOwnProperty(ve) && (ne[ve] = $[ve] === void 0 && me !== void 0 ? me[ve] : $[ve]);
      }
      var ve = arguments.length - 2;
      if (ve === 1) ne.children = oe;
      else if (1 < ve) {
        me = Array(ve);
        for (var ke = 0; ke < ve; ke++) me[ke] = arguments[ke + 2];
        ne.children = me;
      }
      return {
        $$typeof: e,
        type: _.type,
        key: le,
        ref: ae,
        props: ne,
        _owner: he
      };
    }, Ce.createContext = function(_) {
      return _ = {
        $$typeof: c,
        _currentValue: _,
        _currentValue2: _,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, _.Provider = {
        $$typeof: u,
        _context: _
      }, _.Consumer = _;
    }, Ce.createElement = W, Ce.createFactory = function(_) {
      var $ = W.bind(null, _);
      return $.type = _, $;
    }, Ce.createRef = function() {
      return {
        current: null
      };
    }, Ce.forwardRef = function(_) {
      return {
        $$typeof: f,
        render: _
      };
    }, Ce.isValidElement = Q, Ce.lazy = function(_) {
      return {
        $$typeof: g,
        _payload: {
          _status: -1,
          _result: _
        },
        _init: L
      };
    }, Ce.memo = function(_, $) {
      return {
        $$typeof: h,
        type: _,
        compare: $ === void 0 ? null : $
      };
    }, Ce.startTransition = function(_) {
      var $ = B.transition;
      B.transition = {};
      try {
        _();
      } finally {
        B.transition = $;
      }
    }, Ce.unstable_act = F, Ce.useCallback = function(_, $) {
      return K.current.useCallback(_, $);
    }, Ce.useContext = function(_) {
      return K.current.useContext(_);
    }, Ce.useDebugValue = function() {
    }, Ce.useDeferredValue = function(_) {
      return K.current.useDeferredValue(_);
    }, Ce.useEffect = function(_, $) {
      return K.current.useEffect(_, $);
    }, Ce.useId = function() {
      return K.current.useId();
    }, Ce.useImperativeHandle = function(_, $, oe) {
      return K.current.useImperativeHandle(_, $, oe);
    }, Ce.useInsertionEffect = function(_, $) {
      return K.current.useInsertionEffect(_, $);
    }, Ce.useLayoutEffect = function(_, $) {
      return K.current.useLayoutEffect(_, $);
    }, Ce.useMemo = function(_, $) {
      return K.current.useMemo(_, $);
    }, Ce.useReducer = function(_, $, oe) {
      return K.current.useReducer(_, $, oe);
    }, Ce.useRef = function(_) {
      return K.current.useRef(_);
    }, Ce.useState = function(_) {
      return K.current.useState(_);
    }, Ce.useSyncExternalStore = function(_, $, oe) {
      return K.current.useSyncExternalStore(_, $, oe);
    }, Ce.useTransition = function() {
      return K.current.useTransition();
    }, Ce.version = "18.3.1", Ce;
  }
  var Ah;
  function Oi() {
    return Ah || (Ah = 1, Bu.exports = Ty()), Bu.exports;
  }
  var Th;
  function Ry() {
    if (Th) return vi;
    Th = 1;
    var e = Oi(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = {
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
    return vi.Fragment = o, vi.jsx = c, vi.jsxs = c, vi;
  }
  var Rh;
  function Py() {
    return Rh || (Rh = 1, Fu.exports = Ry()), Fu.exports;
  }
  var I = Py(), D = Oi();
  const q = u0(D);
  var ul = {}, ju = {
    exports: {}
  }, Mt = {}, Hu = {
    exports: {}
  }, Vu = {};
  var Ph;
  function $y() {
    return Ph || (Ph = 1, (function(e) {
      function r(B, T) {
        var F = B.length;
        B.push(T);
        e: for (; 0 < F; ) {
          var _ = F - 1 >>> 1, $ = B[_];
          if (0 < l($, T)) B[_] = T, B[F] = $, F = _;
          else break e;
        }
      }
      function o(B) {
        return B.length === 0 ? null : B[0];
      }
      function s(B) {
        if (B.length === 0) return null;
        var T = B[0], F = B.pop();
        if (F !== T) {
          B[0] = F;
          e: for (var _ = 0, $ = B.length, oe = $ >>> 1; _ < oe; ) {
            var ne = 2 * (_ + 1) - 1, le = B[ne], ae = ne + 1, he = B[ae];
            if (0 > l(le, F)) ae < $ && 0 > l(he, le) ? (B[_] = he, B[ae] = F, _ = ae) : (B[_] = le, B[ne] = F, _ = ne);
            else if (ae < $ && 0 > l(he, F)) B[_] = he, B[ae] = F, _ = ae;
            else break e;
          }
        }
        return T;
      }
      function l(B, T) {
        var F = B.sortIndex - T.sortIndex;
        return F !== 0 ? F : B.id - T.id;
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
      var m = [], h = [], g = 1, y = null, v = 3, x = false, E = false, S = false, N = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function z(B) {
        for (var T = o(h); T !== null; ) {
          if (T.callback === null) s(h);
          else if (T.startTime <= B) s(h), T.sortIndex = T.expirationTime, r(m, T);
          else break;
          T = o(h);
        }
      }
      function A(B) {
        if (S = false, z(B), !E) if (o(m) !== null) E = true, L(O);
        else {
          var T = o(h);
          T !== null && K(A, T.startTime - B);
        }
      }
      function O(B, T) {
        E = false, S && (S = false, C(W), W = -1), x = true;
        var F = v;
        try {
          for (z(T), y = o(m); y !== null && (!(y.expirationTime > T) || B && !ee()); ) {
            var _ = y.callback;
            if (typeof _ == "function") {
              y.callback = null, v = y.priorityLevel;
              var $ = _(y.expirationTime <= T);
              T = e.unstable_now(), typeof $ == "function" ? y.callback = $ : y === o(m) && s(m), z(T);
            } else s(m);
            y = o(m);
          }
          if (y !== null) var oe = true;
          else {
            var ne = o(h);
            ne !== null && K(A, ne.startTime - T), oe = false;
          }
          return oe;
        } finally {
          y = null, v = F, x = false;
        }
      }
      var V = false, J = null, W = -1, Y = 5, Q = -1;
      function ee() {
        return !(e.unstable_now() - Q < Y);
      }
      function G() {
        if (J !== null) {
          var B = e.unstable_now();
          Q = B;
          var T = true;
          try {
            T = J(true, B);
          } finally {
            T ? Z() : (V = false, J = null);
          }
        } else V = false;
      }
      var Z;
      if (typeof P == "function") Z = function() {
        P(G);
      };
      else if (typeof MessageChannel < "u") {
        var k = new MessageChannel(), H = k.port2;
        k.port1.onmessage = G, Z = function() {
          H.postMessage(null);
        };
      } else Z = function() {
        N(G, 0);
      };
      function L(B) {
        J = B, V || (V = true, Z());
      }
      function K(B, T) {
        W = N(function() {
          B(e.unstable_now());
        }, T);
      }
      e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(B) {
        B.callback = null;
      }, e.unstable_continueExecution = function() {
        E || x || (E = true, L(O));
      }, e.unstable_forceFrameRate = function(B) {
        0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < B ? Math.floor(1e3 / B) : 5;
      }, e.unstable_getCurrentPriorityLevel = function() {
        return v;
      }, e.unstable_getFirstCallbackNode = function() {
        return o(m);
      }, e.unstable_next = function(B) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var T = 3;
            break;
          default:
            T = v;
        }
        var F = v;
        v = T;
        try {
          return B();
        } finally {
          v = F;
        }
      }, e.unstable_pauseExecution = function() {
      }, e.unstable_requestPaint = function() {
      }, e.unstable_runWithPriority = function(B, T) {
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
        var F = v;
        v = B;
        try {
          return T();
        } finally {
          v = F;
        }
      }, e.unstable_scheduleCallback = function(B, T, F) {
        var _ = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? _ + F : _) : F = _, B) {
          case 1:
            var $ = -1;
            break;
          case 2:
            $ = 250;
            break;
          case 5:
            $ = 1073741823;
            break;
          case 4:
            $ = 1e4;
            break;
          default:
            $ = 5e3;
        }
        return $ = F + $, B = {
          id: g++,
          callback: T,
          priorityLevel: B,
          startTime: F,
          expirationTime: $,
          sortIndex: -1
        }, F > _ ? (B.sortIndex = F, r(h, B), o(m) === null && B === o(h) && (S ? (C(W), W = -1) : S = true, K(A, F - _))) : (B.sortIndex = $, r(m, B), E || x || (E = true, L(O))), B;
      }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(B) {
        var T = v;
        return function() {
          var F = v;
          v = T;
          try {
            return B.apply(this, arguments);
          } finally {
            v = F;
          }
        };
      };
    })(Vu)), Vu;
  }
  var $h;
  function zy() {
    return $h || ($h = 1, Hu.exports = $y()), Hu.exports;
  }
  var zh;
  function Dy() {
    if (zh) return Mt;
    zh = 1;
    var e = Oi(), r = zy();
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
    var N = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
      N[t] = new S(t, 0, false, t, null, false, false);
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
      N[n] = new S(n, 1, false, t[1], null, false, false);
    }), [
      "contentEditable",
      "draggable",
      "spellCheck",
      "value"
    ].forEach(function(t) {
      N[t] = new S(t, 2, false, t.toLowerCase(), null, false, false);
    }), [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha"
    ].forEach(function(t) {
      N[t] = new S(t, 2, false, t, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
      N[t] = new S(t, 3, false, t.toLowerCase(), null, false, false);
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(t) {
      N[t] = new S(t, 3, true, t, null, false, false);
    }), [
      "capture",
      "download"
    ].forEach(function(t) {
      N[t] = new S(t, 4, false, t, null, false, false);
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(t) {
      N[t] = new S(t, 6, false, t, null, false, false);
    }), [
      "rowSpan",
      "start"
    ].forEach(function(t) {
      N[t] = new S(t, 5, false, t.toLowerCase(), null, false, false);
    });
    var C = /[\-:]([a-z])/g;
    function P(t) {
      return t[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
      var n = t.replace(C, P);
      N[n] = new S(n, 1, false, t, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
      var n = t.replace(C, P);
      N[n] = new S(n, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(t) {
      var n = t.replace(C, P);
      N[n] = new S(n, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
    }), [
      "tabIndex",
      "crossOrigin"
    ].forEach(function(t) {
      N[t] = new S(t, 1, false, t.toLowerCase(), null, false, false);
    }), N.xlinkHref = new S("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
      "src",
      "href",
      "action",
      "formAction"
    ].forEach(function(t) {
      N[t] = new S(t, 1, false, t.toLowerCase(), null, true, true);
    });
    function z(t, n, i, a) {
      var d = N.hasOwnProperty(n) ? N[n] : null;
      (d !== null ? d.type !== 0 : a || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (E(n, i, d, a) && (i = null), a || d === null ? v(n) && (i === null ? t.removeAttribute(n) : t.setAttribute(n, "" + i)) : d.mustUseProperty ? t[d.propertyName] = i === null ? d.type === 3 ? false : "" : i : (n = d.attributeName, a = d.attributeNamespace, i === null ? t.removeAttribute(n) : (d = d.type, i = d === 3 || d === 4 && i === true ? "" : "" + i, a ? t.setAttributeNS(a, n, i) : t.setAttribute(n, i))));
    }
    var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = Symbol.for("react.element"), V = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), ee = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), B = Symbol.iterator;
    function T(t) {
      return t === null || typeof t != "object" ? null : (t = B && t[B] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var F = Object.assign, _;
    function $(t) {
      if (_ === void 0) try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        _ = n && n[1] || "";
      }
      return `
` + _ + t;
    }
    var oe = false;
    function ne(t, n) {
      if (!t || oe) return "";
      oe = true;
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
          } catch (X) {
            var a = X;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (X) {
            a = X;
          }
          t.call(n.prototype);
        }
        else {
          try {
            throw Error();
          } catch (X) {
            a = X;
          }
          t();
        }
      } catch (X) {
        if (X && a && typeof X.stack == "string") {
          for (var d = X.stack.split(`
`), p = a.stack.split(`
`), w = d.length - 1, M = p.length - 1; 1 <= w && 0 <= M && d[w] !== p[M]; ) M--;
          for (; 1 <= w && 0 <= M; w--, M--) if (d[w] !== p[M]) {
            if (w !== 1 || M !== 1) do
              if (w--, M--, 0 > M || d[w] !== p[M]) {
                var b = `
` + d[w].replace(" at new ", " at ");
                return t.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", t.displayName)), b;
              }
            while (1 <= w && 0 <= M);
            break;
          }
        }
      } finally {
        oe = false, Error.prepareStackTrace = i;
      }
      return (t = t ? t.displayName || t.name : "") ? $(t) : "";
    }
    function le(t) {
      switch (t.tag) {
        case 5:
          return $(t.type);
        case 16:
          return $("Lazy");
        case 13:
          return $("Suspense");
        case 19:
          return $("SuspenseList");
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
        case J:
          return "Fragment";
        case V:
          return "Portal";
        case Y:
          return "Profiler";
        case W:
          return "StrictMode";
        case Z:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case ee:
          return (t.displayName || "Context") + ".Consumer";
        case Q:
          return (t._context.displayName || "Context") + ".Provider";
        case G:
          var n = t.render;
          return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case H:
          return n = t.displayName || null, n !== null ? n : ae(t.type) || "Memo";
        case L:
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
          return n === W ? "StrictMode" : "Mode";
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
      return F({}, n, {
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
      n = n.checked, n != null && z(t, "checked", n, false);
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
      return F({}, n, {
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
    var Yn = F({
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
    var Sr = null;
    function Er(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var In = null, yn = null, bn = null;
    function vn(t) {
      if (t = ri(t)) {
        if (typeof In != "function") throw Error(o(280));
        var n = t.stateNode;
        n && (n = Cs(n), In(t.stateNode, t.type, n));
      }
    }
    function Ui(t) {
      yn ? bn ? bn.push(t) : bn = [
        t
      ] : yn = t;
    }
    function Wi() {
      if (yn) {
        var t = yn, n = bn;
        if (bn = yn = null, vn(t), n) for (t = 0; t < n.length; t++) vn(n[t]);
      }
    }
    function Yi(t, n) {
      return t(n);
    }
    function Xi() {
    }
    var $o = false;
    function Gi(t, n, i) {
      if ($o) return t(n, i);
      $o = true;
      try {
        return Yi(t, n, i);
      } finally {
        $o = false, (yn !== null || bn !== null) && (Xi(), Wi());
      }
    }
    function kr(t, n) {
      var i = t.stateNode;
      if (i === null) return null;
      var a = Cs(i);
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
    var zo = false;
    if (f) try {
      var Cr = {};
      Object.defineProperty(Cr, "passive", {
        get: function() {
          zo = true;
        }
      }), window.addEventListener("test", Cr, Cr), window.removeEventListener("test", Cr, Cr);
    } catch {
      zo = false;
    }
    function ea(t, n, i, a, d, p, w, M, b) {
      var X = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(i, X);
      } catch (re) {
        this.onError(re);
      }
    }
    var _r = false, Xr = null, Gr = false, Do = null, ta = {
      onError: function(t) {
        _r = true, Xr = t;
      }
    };
    function na(t, n, i, a, d, p, w, M, b) {
      _r = false, Xr = null, ea.apply(ta, arguments);
    }
    function Ki(t, n, i, a, d, p, w, M, b) {
      if (na.apply(this, arguments), _r) {
        if (_r) {
          var X = Xr;
          _r = false, Xr = null;
        } else throw Error(o(198));
        Gr || (Gr = true, Do = X);
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
    function Qi(t) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
      }
      return null;
    }
    function Zi(t) {
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
            if (p === i) return Zi(d), t;
            if (p === a) return Zi(d), n;
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
    function qi(t) {
      return t = ra(t), t !== null ? Ji(t) : null;
    }
    function Ji(t) {
      if (t.tag === 5 || t.tag === 6) return t;
      for (t = t.child; t !== null; ) {
        var n = Ji(t);
        if (n !== null) return n;
        t = t.sibling;
      }
      return null;
    }
    var es = r.unstable_scheduleCallback, ts = r.unstable_cancelCallback, ns = r.unstable_shouldYield, oa = r.unstable_requestPaint, Be = r.unstable_now, ia = r.unstable_getCurrentPriorityLevel, Lo = r.unstable_ImmediatePriority, rs = r.unstable_UserBlockingPriority, Kr = r.unstable_NormalPriority, os = r.unstable_LowPriority, is = r.unstable_IdlePriority, Qr = null, Ht = null;
    function Oo(t) {
      if (Ht && typeof Ht.onCommitFiberRoot == "function") try {
        Ht.onCommitFiberRoot(Qr, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
    }
    var nn = Math.clz32 ? Math.clz32 : Km, Xm = Math.log, Gm = Math.LN2;
    function Km(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Xm(t) / Gm | 0) | 0;
    }
    var ss = 64, ls = 4194304;
    function Fo(t) {
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
    function as(t, n) {
      var i = t.pendingLanes;
      if (i === 0) return 0;
      var a = 0, d = t.suspendedLanes, p = t.pingedLanes, w = i & 268435455;
      if (w !== 0) {
        var M = w & ~d;
        M !== 0 ? a = Fo(M) : (p &= w, p !== 0 && (a = Fo(p)));
      } else w = i & ~d, w !== 0 ? a = Fo(w) : p !== 0 && (a = Fo(p));
      if (a === 0) return 0;
      if (n !== 0 && n !== a && (n & d) === 0 && (d = a & -a, p = n & -n, d >= p || d === 16 && (p & 4194240) !== 0)) return n;
      if ((a & 4) !== 0 && (a |= i & 16), n = t.entangledLanes, n !== 0) for (t = t.entanglements, n &= a; 0 < n; ) i = 31 - nn(n), d = 1 << i, a |= t[i], n &= ~d;
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
      for (var i = t.suspendedLanes, a = t.pingedLanes, d = t.expirationTimes, p = t.pendingLanes; 0 < p; ) {
        var w = 31 - nn(p), M = 1 << w, b = d[w];
        b === -1 ? ((M & i) === 0 || (M & a) !== 0) && (d[w] = Qm(M, n)) : b <= n && (t.expiredLanes |= M), p &= ~M;
      }
    }
    function sa(t) {
      return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
    }
    function id() {
      var t = ss;
      return ss <<= 1, (ss & 4194240) === 0 && (ss = 64), t;
    }
    function la(t) {
      for (var n = [], i = 0; 31 > i; i++) n.push(t);
      return n;
    }
    function Bo(t, n, i) {
      t.pendingLanes |= n, n !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, n = 31 - nn(n), t[n] = i;
    }
    function qm(t, n) {
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
    function sd(t) {
      return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var ld, ua, ad, ud, cd, ca = false, us = [], Xn = null, Gn = null, Kn = null, jo = /* @__PURE__ */ new Map(), Ho = /* @__PURE__ */ new Map(), Qn = [], Jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function dd(t, n) {
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
          jo.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Ho.delete(n.pointerId);
      }
    }
    function Vo(t, n, i, a, d, p) {
      return t === null || t.nativeEvent !== p ? (t = {
        blockedOn: n,
        domEventName: i,
        eventSystemFlags: a,
        nativeEvent: p,
        targetContainers: [
          d
        ]
      }, n !== null && (n = ri(n), n !== null && ua(n)), t) : (t.eventSystemFlags |= a, n = t.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), t);
    }
    function eg(t, n, i, a, d) {
      switch (n) {
        case "focusin":
          return Xn = Vo(Xn, t, n, i, a, d), true;
        case "dragenter":
          return Gn = Vo(Gn, t, n, i, a, d), true;
        case "mouseover":
          return Kn = Vo(Kn, t, n, i, a, d), true;
        case "pointerover":
          var p = d.pointerId;
          return jo.set(p, Vo(jo.get(p) || null, t, n, i, a, d)), true;
        case "gotpointercapture":
          return p = d.pointerId, Ho.set(p, Vo(Ho.get(p) || null, t, n, i, a, d)), true;
      }
      return false;
    }
    function fd(t) {
      var n = Nr(t.target);
      if (n !== null) {
        var i = An(n);
        if (i !== null) {
          if (n = i.tag, n === 13) {
            if (n = Qi(i), n !== null) {
              t.blockedOn = n, cd(t.priority, function() {
                ad(i);
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
    function cs(t) {
      if (t.blockedOn !== null) return false;
      for (var n = t.targetContainers; 0 < n.length; ) {
        var i = fa(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
        if (i === null) {
          i = t.nativeEvent;
          var a = new i.constructor(i.type, i);
          Sr = a, i.target.dispatchEvent(a), Sr = null;
        } else return n = ri(i), n !== null && ua(n), t.blockedOn = i, false;
        n.shift();
      }
      return true;
    }
    function hd(t, n, i) {
      cs(t) && i.delete(n);
    }
    function tg() {
      ca = false, Xn !== null && cs(Xn) && (Xn = null), Gn !== null && cs(Gn) && (Gn = null), Kn !== null && cs(Kn) && (Kn = null), jo.forEach(hd), Ho.forEach(hd);
    }
    function Uo(t, n) {
      t.blockedOn === n && (t.blockedOn = null, ca || (ca = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, tg)));
    }
    function Wo(t) {
      function n(d) {
        return Uo(d, t);
      }
      if (0 < us.length) {
        Uo(us[0], t);
        for (var i = 1; i < us.length; i++) {
          var a = us[i];
          a.blockedOn === t && (a.blockedOn = null);
        }
      }
      for (Xn !== null && Uo(Xn, t), Gn !== null && Uo(Gn, t), Kn !== null && Uo(Kn, t), jo.forEach(n), Ho.forEach(n), i = 0; i < Qn.length; i++) a = Qn[i], a.blockedOn === t && (a.blockedOn = null);
      for (; 0 < Qn.length && (i = Qn[0], i.blockedOn === null); ) fd(i), i.blockedOn === null && Qn.shift();
    }
    var Zr = A.ReactCurrentBatchConfig, ds = true;
    function ng(t, n, i, a) {
      var d = Ae, p = Zr.transition;
      Zr.transition = null;
      try {
        Ae = 1, da(t, n, i, a);
      } finally {
        Ae = d, Zr.transition = p;
      }
    }
    function rg(t, n, i, a) {
      var d = Ae, p = Zr.transition;
      Zr.transition = null;
      try {
        Ae = 4, da(t, n, i, a);
      } finally {
        Ae = d, Zr.transition = p;
      }
    }
    function da(t, n, i, a) {
      if (ds) {
        var d = fa(t, n, i, a);
        if (d === null) ba(t, n, a, fs, i), dd(t, a);
        else if (eg(d, t, n, i, a)) a.stopPropagation();
        else if (dd(t, a), n & 4 && -1 < Jm.indexOf(t)) {
          for (; d !== null; ) {
            var p = ri(d);
            if (p !== null && ld(p), p = fa(t, n, i, a), p === null && ba(t, n, a, fs, i), p === d) break;
            d = p;
          }
          d !== null && a.stopPropagation();
        } else ba(t, n, a, null, i);
      }
    }
    var fs = null;
    function fa(t, n, i, a) {
      if (fs = null, t = Er(a), t = Nr(t), t !== null) if (n = An(t), n === null) t = null;
      else if (i = n.tag, i === 13) {
        if (t = Qi(n), t !== null) return t;
        t = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else n !== t && (t = null);
      return fs = t, null;
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
          switch (ia()) {
            case Lo:
              return 1;
            case rs:
              return 4;
            case Kr:
            case os:
              return 16;
            case is:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Zn = null, ha = null, hs = null;
    function md() {
      if (hs) return hs;
      var t, n = ha, i = n.length, a, d = "value" in Zn ? Zn.value : Zn.textContent, p = d.length;
      for (t = 0; t < i && n[t] === d[t]; t++) ;
      var w = i - t;
      for (a = 1; a <= w && n[i - a] === d[p - a]; a++) ;
      return hs = d.slice(t, 1 < a ? 1 - a : void 0);
    }
    function ps(t) {
      var n = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function ms() {
      return true;
    }
    function gd() {
      return false;
    }
    function Tt(t) {
      function n(i, a, d, p, w) {
        this._reactName = i, this._targetInst = d, this.type = a, this.nativeEvent = p, this.target = w, this.currentTarget = null;
        for (var M in t) t.hasOwnProperty(M) && (i = t[M], this[M] = i ? i(p) : p[M]);
        return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? ms : gd, this.isPropagationStopped = gd, this;
      }
      return F(n.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = false), this.isDefaultPrevented = ms);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = true), this.isPropagationStopped = ms);
        },
        persist: function() {
        },
        isPersistent: ms
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
    }, pa = Tt(qr), Yo = F({}, qr, {
      view: 0,
      detail: 0
    }), og = Tt(Yo), ma, ga, Xo, gs = F({}, Yo, {
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
        return "movementX" in t ? t.movementX : (t !== Xo && (Xo && t.type === "mousemove" ? (ma = t.screenX - Xo.screenX, ga = t.screenY - Xo.screenY) : ga = ma = 0, Xo = t), ma);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : ga;
      }
    }), yd = Tt(gs), ig = F({}, gs, {
      dataTransfer: 0
    }), sg = Tt(ig), lg = F({}, Yo, {
      relatedTarget: 0
    }), ya = Tt(lg), ag = F({}, qr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ug = Tt(ag), cg = F({}, qr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), dg = Tt(cg), fg = F({}, qr, {
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
    function va() {
      return gg;
    }
    var yg = F({}, Yo, {
      key: function(t) {
        if (t.key) {
          var n = hg[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress" ? (t = ps(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? pg[t.keyCode] || "Unidentified" : "";
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
        return t.type === "keypress" ? ps(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? ps(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), vg = Tt(yg), wg = F({}, gs, {
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
    }), wd = Tt(wg), xg = F({}, Yo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: va
    }), Sg = Tt(xg), Eg = F({}, qr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kg = Tt(Eg), Cg = F({}, gs, {
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
    ], wa = f && "CompositionEvent" in window, Go = null;
    f && "documentMode" in document && (Go = document.documentMode);
    var Mg = f && "TextEvent" in window && !Go, xd = f && (!wa || Go && 8 < Go && 11 >= Go), Sd = " ", Ed = false;
    function kd(t, n) {
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
    var Jr = false;
    function Ig(t, n) {
      switch (t) {
        case "compositionend":
          return Cd(n);
        case "keypress":
          return n.which !== 32 ? null : (Ed = true, Sd);
        case "textInput":
          return t = n.data, t === Sd && Ed ? null : t;
        default:
          return null;
      }
    }
    function bg(t, n) {
      if (Jr) return t === "compositionend" || !wa && kd(t, n) ? (t = md(), hs = ha = Zn = null, Jr = false, t) : null;
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
    var Ag = {
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
      return n === "input" ? !!Ag[t.type] : n === "textarea";
    }
    function Nd(t, n, i, a) {
      Ui(a), n = Ss(n, "onChange"), 0 < n.length && (i = new pa("onChange", "change", null, i, a), t.push({
        event: i,
        listeners: n
      }));
    }
    var Ko = null, Qo = null;
    function Tg(t) {
      Ud(t, 0);
    }
    function ys(t) {
      var n = oo(t);
      if (Ue(n)) return t;
    }
    function Rg(t, n) {
      if (t === "change") return n;
    }
    var Md = false;
    if (f) {
      var xa;
      if (f) {
        var Sa = "oninput" in document;
        if (!Sa) {
          var Id = document.createElement("div");
          Id.setAttribute("oninput", "return;"), Sa = typeof Id.oninput == "function";
        }
        xa = Sa;
      } else xa = false;
      Md = xa && (!document.documentMode || 9 < document.documentMode);
    }
    function bd() {
      Ko && (Ko.detachEvent("onpropertychange", Ad), Qo = Ko = null);
    }
    function Ad(t) {
      if (t.propertyName === "value" && ys(Qo)) {
        var n = [];
        Nd(n, Qo, t, Er(t)), Gi(Tg, n);
      }
    }
    function Pg(t, n, i) {
      t === "focusin" ? (bd(), Ko = n, Qo = i, Ko.attachEvent("onpropertychange", Ad)) : t === "focusout" && bd();
    }
    function $g(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return ys(Qo);
    }
    function zg(t, n) {
      if (t === "click") return ys(n);
    }
    function Dg(t, n) {
      if (t === "input" || t === "change") return ys(n);
    }
    function Lg(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var rn = typeof Object.is == "function" ? Object.is : Lg;
    function Zo(t, n) {
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
    function Td(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Rd(t, n) {
      var i = Td(t);
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
        i = Td(i);
      }
    }
    function Pd(t, n) {
      return t && n ? t === n ? true : t && t.nodeType === 3 ? false : n && n.nodeType === 3 ? Pd(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : false : false;
    }
    function $d() {
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
    function Og(t) {
      var n = $d(), i = t.focusedElem, a = t.selectionRange;
      if (n !== i && i && i.ownerDocument && Pd(i.ownerDocument.documentElement, i)) {
        if (a !== null && Ea(i)) {
          if (n = a.start, t = a.end, t === void 0 && (t = n), "selectionStart" in i) i.selectionStart = n, i.selectionEnd = Math.min(t, i.value.length);
          else if (t = (n = i.ownerDocument || document) && n.defaultView || window, t.getSelection) {
            t = t.getSelection();
            var d = i.textContent.length, p = Math.min(a.start, d);
            a = a.end === void 0 ? p : Math.min(a.end, d), !t.extend && p > a && (d = a, a = p, p = d), d = Rd(i, p);
            var w = Rd(i, a);
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
    var Fg = f && "documentMode" in document && 11 >= document.documentMode, eo = null, ka = null, qo = null, Ca = false;
    function zd(t, n, i) {
      var a = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
      Ca || eo == null || eo !== Ke(a) || (a = eo, "selectionStart" in a && Ea(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), qo && Zo(qo, a) || (qo = a, a = Ss(ka, "onSelect"), 0 < a.length && (n = new pa("onSelect", "select", null, n, i), t.push({
        event: n,
        listeners: a
      }), n.target = eo)));
    }
    function vs(t, n) {
      var i = {};
      return i[t.toLowerCase()] = n.toLowerCase(), i["Webkit" + t] = "webkit" + n, i["Moz" + t] = "moz" + n, i;
    }
    var to = {
      animationend: vs("Animation", "AnimationEnd"),
      animationiteration: vs("Animation", "AnimationIteration"),
      animationstart: vs("Animation", "AnimationStart"),
      transitionend: vs("Transition", "TransitionEnd")
    }, _a = {}, Dd = {};
    f && (Dd = document.createElement("div").style, "AnimationEvent" in window || (delete to.animationend.animation, delete to.animationiteration.animation, delete to.animationstart.animation), "TransitionEvent" in window || delete to.transitionend.transition);
    function ws(t) {
      if (_a[t]) return _a[t];
      if (!to[t]) return t;
      var n = to[t], i;
      for (i in n) if (n.hasOwnProperty(i) && i in Dd) return _a[t] = n[i];
      return t;
    }
    var Ld = ws("animationend"), Od = ws("animationiteration"), Fd = ws("animationstart"), Bd = ws("transitionend"), jd = /* @__PURE__ */ new Map(), Hd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function qn(t, n) {
      jd.set(t, n), u(n, [
        t
      ]);
    }
    for (var Na = 0; Na < Hd.length; Na++) {
      var Ma = Hd[Na], Bg = Ma.toLowerCase(), jg = Ma[0].toUpperCase() + Ma.slice(1);
      qn(Bg, "on" + jg);
    }
    qn(Ld, "onAnimationEnd"), qn(Od, "onAnimationIteration"), qn(Fd, "onAnimationStart"), qn("dblclick", "onDoubleClick"), qn("focusin", "onFocus"), qn("focusout", "onBlur"), qn(Bd, "onTransitionEnd"), c("onMouseEnter", [
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
    var Jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));
    function Vd(t, n, i) {
      var a = t.type || "unknown-event";
      t.currentTarget = i, Ki(a, n, void 0, t), t.currentTarget = null;
    }
    function Ud(t, n) {
      n = (n & 4) !== 0;
      for (var i = 0; i < t.length; i++) {
        var a = t[i], d = a.event;
        a = a.listeners;
        e: {
          var p = void 0;
          if (n) for (var w = a.length - 1; 0 <= w; w--) {
            var M = a[w], b = M.instance, X = M.currentTarget;
            if (M = M.listener, b !== p && d.isPropagationStopped()) break e;
            Vd(d, M, X), p = b;
          }
          else for (w = 0; w < a.length; w++) {
            if (M = a[w], b = M.instance, X = M.currentTarget, M = M.listener, b !== p && d.isPropagationStopped()) break e;
            Vd(d, M, X), p = b;
          }
        }
      }
      if (Gr) throw t = Do, Gr = false, Do = null, t;
    }
    function De(t, n) {
      var i = n[za];
      i === void 0 && (i = n[za] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      i.has(a) || (Wd(n, t, 2, false), i.add(a));
    }
    function Ia(t, n, i) {
      var a = 0;
      n && (a |= 4), Wd(i, t, a, n);
    }
    var xs = "_reactListening" + Math.random().toString(36).slice(2);
    function ei(t) {
      if (!t[xs]) {
        t[xs] = true, s.forEach(function(i) {
          i !== "selectionchange" && (Hg.has(i) || Ia(i, false, t), Ia(i, true, t));
        });
        var n = t.nodeType === 9 ? t : t.ownerDocument;
        n === null || n[xs] || (n[xs] = true, Ia("selectionchange", false, n));
      }
    }
    function Wd(t, n, i, a) {
      switch (pd(n)) {
        case 1:
          var d = ng;
          break;
        case 4:
          d = rg;
          break;
        default:
          d = da;
      }
      i = d.bind(null, n, i, t), d = void 0, !zo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = true), a ? d !== void 0 ? t.addEventListener(n, i, {
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
            var b = w.tag;
            if ((b === 3 || b === 4) && (b = w.stateNode.containerInfo, b === d || b.nodeType === 8 && b.parentNode === d)) return;
            w = w.return;
          }
          for (; M !== null; ) {
            if (w = Nr(M), w === null) return;
            if (b = w.tag, b === 5 || b === 6) {
              a = p = w;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
      Gi(function() {
        var X = p, re = Er(i), ie = [];
        e: {
          var te = jd.get(t);
          if (te !== void 0) {
            var ue = pa, de = t;
            switch (t) {
              case "keypress":
                if (ps(i) === 0) break e;
              case "keydown":
              case "keyup":
                ue = vg;
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
                ue = sg;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                ue = Sg;
                break;
              case Ld:
              case Od:
              case Fd:
                ue = ug;
                break;
              case Bd:
                ue = kg;
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
            var fe = (n & 4) !== 0, Ge = !fe && t === "scroll", j = fe ? te !== null ? te + "Capture" : null : te;
            fe = [];
            for (var R = X, U; R !== null; ) {
              U = R;
              var se = U.stateNode;
              if (U.tag === 5 && se !== null && (U = se, j !== null && (se = kr(R, j), se != null && fe.push(ti(R, se, U)))), Ge) break;
              R = R.return;
            }
            0 < fe.length && (te = new ue(te, de, null, i, re), ie.push({
              event: te,
              listeners: fe
            }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (te = t === "mouseover" || t === "pointerover", ue = t === "mouseout" || t === "pointerout", te && i !== Sr && (de = i.relatedTarget || i.fromElement) && (Nr(de) || de[Tn])) break e;
            if ((ue || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, ue ? (de = i.relatedTarget || i.toElement, ue = X, de = de ? Nr(de) : null, de !== null && (Ge = An(de), de !== Ge || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = X), ue !== de)) {
              if (fe = yd, se = "onMouseLeave", j = "onMouseEnter", R = "mouse", (t === "pointerout" || t === "pointerover") && (fe = wd, se = "onPointerLeave", j = "onPointerEnter", R = "pointer"), Ge = ue == null ? te : oo(ue), U = de == null ? te : oo(de), te = new fe(se, R + "leave", ue, i, re), te.target = Ge, te.relatedTarget = U, se = null, Nr(re) === X && (fe = new fe(j, R + "enter", de, i, re), fe.target = U, fe.relatedTarget = Ge, se = fe), Ge = se, ue && de) t: {
                for (fe = ue, j = de, R = 0, U = fe; U; U = no(U)) R++;
                for (U = 0, se = j; se; se = no(se)) U++;
                for (; 0 < R - U; ) fe = no(fe), R--;
                for (; 0 < U - R; ) j = no(j), U--;
                for (; R--; ) {
                  if (fe === j || j !== null && fe === j.alternate) break t;
                  fe = no(fe), j = no(j);
                }
                fe = null;
              }
              else fe = null;
              ue !== null && Yd(ie, te, ue, fe, false), de !== null && Ge !== null && Yd(ie, Ge, de, fe, true);
            }
          }
          e: {
            if (te = X ? oo(X) : window, ue = te.nodeName && te.nodeName.toLowerCase(), ue === "select" || ue === "input" && te.type === "file") var pe = Rg;
            else if (_d(te)) if (Md) pe = Dg;
            else {
              pe = $g;
              var we = Pg;
            }
            else (ue = te.nodeName) && ue.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (pe = zg);
            if (pe && (pe = pe(t, X))) {
              Nd(ie, pe, i, re);
              break e;
            }
            we && we(t, te, X), t === "focusout" && (we = te._wrapperState) && we.controlled && te.type === "number" && qe(te, "number", te.value);
          }
          switch (we = X ? oo(X) : window, t) {
            case "focusin":
              (_d(we) || we.contentEditable === "true") && (eo = we, ka = X, qo = null);
              break;
            case "focusout":
              qo = ka = eo = null;
              break;
            case "mousedown":
              Ca = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ca = false, zd(ie, i, re);
              break;
            case "selectionchange":
              if (Fg) break;
            case "keydown":
            case "keyup":
              zd(ie, i, re);
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
          else Jr ? kd(t, i) && (Ee = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Ee = "onCompositionStart");
          Ee && (xd && i.locale !== "ko" && (Jr || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Jr && (xe = md()) : (Zn = re, ha = "value" in Zn ? Zn.value : Zn.textContent, Jr = true)), we = Ss(X, Ee), 0 < we.length && (Ee = new vd(Ee, t, null, i, re), ie.push({
            event: Ee,
            listeners: we
          }), xe ? Ee.data = xe : (xe = Cd(i), xe !== null && (Ee.data = xe)))), (xe = Mg ? Ig(t, i) : bg(t, i)) && (X = Ss(X, "onBeforeInput"), 0 < X.length && (re = new vd("onBeforeInput", "beforeinput", null, i, re), ie.push({
            event: re,
            listeners: X
          }), re.data = xe));
        }
        Ud(ie, n);
      });
    }
    function ti(t, n, i) {
      return {
        instance: t,
        listener: n,
        currentTarget: i
      };
    }
    function Ss(t, n) {
      for (var i = n + "Capture", a = []; t !== null; ) {
        var d = t, p = d.stateNode;
        d.tag === 5 && p !== null && (d = p, p = kr(t, i), p != null && a.unshift(ti(t, p, d)), p = kr(t, n), p != null && a.push(ti(t, p, d))), t = t.return;
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
    function Yd(t, n, i, a, d) {
      for (var p = n._reactName, w = []; i !== null && i !== a; ) {
        var M = i, b = M.alternate, X = M.stateNode;
        if (b !== null && b === a) break;
        M.tag === 5 && X !== null && (M = X, d ? (b = kr(i, p), b != null && w.unshift(ti(i, b, M))) : d || (b = kr(i, p), b != null && w.push(ti(i, b, M)))), i = i.return;
      }
      w.length !== 0 && t.push({
        event: n,
        listeners: w
      });
    }
    var Vg = /\r\n?/g, Ug = /\u0000|\uFFFD/g;
    function Xd(t) {
      return (typeof t == "string" ? t : "" + t).replace(Vg, `
`).replace(Ug, "");
    }
    function Es(t, n, i) {
      if (n = Xd(n), Xd(t) !== n && i) throw Error(o(425));
    }
    function ks() {
    }
    var Aa = null, Ta = null;
    function Ra(t, n) {
      return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var Pa = typeof setTimeout == "function" ? setTimeout : void 0, Wg = typeof clearTimeout == "function" ? clearTimeout : void 0, Gd = typeof Promise == "function" ? Promise : void 0, Yg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(t) {
      return Gd.resolve(null).then(t).catch(Xg);
    } : Pa;
    function Xg(t) {
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
            t.removeChild(d), Wo(n);
            return;
          }
          a--;
        } else i !== "$" && i !== "$?" && i !== "$!" || a++;
        i = d;
      } while (i);
      Wo(n);
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
    function Kd(t) {
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
    var ro = Math.random().toString(36).slice(2), wn = "__reactFiber$" + ro, ni = "__reactProps$" + ro, Tn = "__reactContainer$" + ro, za = "__reactEvents$" + ro, Gg = "__reactListeners$" + ro, Kg = "__reactHandles$" + ro;
    function Nr(t) {
      var n = t[wn];
      if (n) return n;
      for (var i = t.parentNode; i; ) {
        if (n = i[Tn] || i[wn]) {
          if (i = n.alternate, n.child !== null || i !== null && i.child !== null) for (t = Kd(t); t !== null; ) {
            if (i = t[wn]) return i;
            t = Kd(t);
          }
          return n;
        }
        t = i, i = t.parentNode;
      }
      return null;
    }
    function ri(t) {
      return t = t[wn] || t[Tn], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
    }
    function oo(t) {
      if (t.tag === 5 || t.tag === 6) return t.stateNode;
      throw Error(o(33));
    }
    function Cs(t) {
      return t[ni] || null;
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
    var tr = {}, ct = er(tr), Et = er(false), Mr = tr;
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
    function _s() {
      Le(Et), Le(ct);
    }
    function Qd(t, n, i) {
      if (ct.current !== tr) throw Error(o(168));
      Pe(ct, n), Pe(Et, i);
    }
    function Zd(t, n, i) {
      var a = t.stateNode;
      if (n = n.childContextTypes, typeof a.getChildContext != "function") return i;
      a = a.getChildContext();
      for (var d in a) if (!(d in n)) throw Error(o(108, he(t) || "Unknown", d));
      return F({}, i, a);
    }
    function Ns(t) {
      return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || tr, Mr = ct.current, Pe(ct, t), Pe(Et, Et.current), true;
    }
    function qd(t, n, i) {
      var a = t.stateNode;
      if (!a) throw Error(o(169));
      i ? (t = Zd(t, n, Mr), a.__reactInternalMemoizedMergedChildContext = t, Le(Et), Le(ct), Pe(ct, t)) : Le(Et), Pe(Et, i);
    }
    var Rn = null, Ms = false, La = false;
    function Jd(t) {
      Rn === null ? Rn = [
        t
      ] : Rn.push(t);
    }
    function Qg(t) {
      Ms = true, Jd(t);
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
          Rn = null, Ms = false;
        } catch (d) {
          throw Rn !== null && (Rn = Rn.slice(t + 1)), es(Lo, nr), d;
        } finally {
          Ae = n, La = false;
        }
      }
      return null;
    }
    var lo = [], ao = 0, Is = null, bs = 0, Vt = [], Ut = 0, Ir = null, Pn = 1, $n = "";
    function br(t, n) {
      lo[ao++] = bs, lo[ao++] = Is, Is = t, bs = n;
    }
    function ef(t, n, i) {
      Vt[Ut++] = Pn, Vt[Ut++] = $n, Vt[Ut++] = Ir, Ir = t;
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
      t.return !== null && (br(t, 1), ef(t, 1, 0));
    }
    function Fa(t) {
      for (; t === Is; ) Is = lo[--ao], lo[ao] = null, bs = lo[--ao], lo[ao] = null;
      for (; t === Ir; ) Ir = Vt[--Ut], Vt[Ut] = null, $n = Vt[--Ut], Vt[Ut] = null, Pn = Vt[--Ut], Vt[Ut] = null;
    }
    var Rt = null, Pt = null, Fe = false, on = null;
    function tf(t, n) {
      var i = Gt(5, null, null, 0);
      i.elementType = "DELETED", i.stateNode = n, i.return = t, n = t.deletions, n === null ? (t.deletions = [
        i
      ], t.flags |= 16) : n.push(i);
    }
    function nf(t, n) {
      switch (t.tag) {
        case 5:
          var i = t.type;
          return n = n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (t.stateNode = n, Rt = t, Pt = Jn(n.firstChild), true) : false;
        case 6:
          return n = t.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (t.stateNode = n, Rt = t, Pt = null, true) : false;
        case 13:
          return n = n.nodeType !== 8 ? null : n, n !== null ? (i = Ir !== null ? {
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
          if (!nf(t, n)) {
            if (Ba(t)) throw Error(o(418));
            n = Jn(i.nextSibling);
            var a = Rt;
            n && nf(t, n) ? tf(a, i) : (t.flags = t.flags & -4097 | 2, Fe = false, Rt = t);
          }
        } else {
          if (Ba(t)) throw Error(o(418));
          t.flags = t.flags & -4097 | 2, Fe = false, Rt = t;
        }
      }
    }
    function rf(t) {
      for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
      Rt = t;
    }
    function As(t) {
      if (t !== Rt) return false;
      if (!Fe) return rf(t), Fe = true, false;
      var n;
      if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = t.type, n = n !== "head" && n !== "body" && !Ra(t.type, t.memoizedProps)), n && (n = Pt)) {
        if (Ba(t)) throw of(), Error(o(418));
        for (; n; ) tf(t, n), n = Jn(n.nextSibling);
      }
      if (rf(t), t.tag === 13) {
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
    function of() {
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
    var Zg = A.ReactCurrentBatchConfig;
    function oi(t, n, i) {
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
    function Ts(t, n) {
      throw t = Object.prototype.toString.call(n), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t));
    }
    function sf(t) {
      var n = t._init;
      return n(t._payload);
    }
    function lf(t) {
      function n(j, R) {
        if (t) {
          var U = j.deletions;
          U === null ? (j.deletions = [
            R
          ], j.flags |= 16) : U.push(R);
        }
      }
      function i(j, R) {
        if (!t) return null;
        for (; R !== null; ) n(j, R), R = R.sibling;
        return null;
      }
      function a(j, R) {
        for (j = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? j.set(R.key, R) : j.set(R.index, R), R = R.sibling;
        return j;
      }
      function d(j, R) {
        return j = cr(j, R), j.index = 0, j.sibling = null, j;
      }
      function p(j, R, U) {
        return j.index = U, t ? (U = j.alternate, U !== null ? (U = U.index, U < R ? (j.flags |= 2, R) : U) : (j.flags |= 2, R)) : (j.flags |= 1048576, R);
      }
      function w(j) {
        return t && j.alternate === null && (j.flags |= 2), j;
      }
      function M(j, R, U, se) {
        return R === null || R.tag !== 6 ? (R = Pu(U, j.mode, se), R.return = j, R) : (R = d(R, U), R.return = j, R);
      }
      function b(j, R, U, se) {
        var pe = U.type;
        return pe === J ? re(j, R, U.props.children, se, U.key) : R !== null && (R.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === L && sf(pe) === R.type) ? (se = d(R, U.props), se.ref = oi(j, R, U), se.return = j, se) : (se = tl(U.type, U.key, U.props, null, j.mode, se), se.ref = oi(j, R, U), se.return = j, se);
      }
      function X(j, R, U, se) {
        return R === null || R.tag !== 4 || R.stateNode.containerInfo !== U.containerInfo || R.stateNode.implementation !== U.implementation ? (R = $u(U, j.mode, se), R.return = j, R) : (R = d(R, U.children || []), R.return = j, R);
      }
      function re(j, R, U, se, pe) {
        return R === null || R.tag !== 7 ? (R = Lr(U, j.mode, se, pe), R.return = j, R) : (R = d(R, U), R.return = j, R);
      }
      function ie(j, R, U) {
        if (typeof R == "string" && R !== "" || typeof R == "number") return R = Pu("" + R, j.mode, U), R.return = j, R;
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case O:
              return U = tl(R.type, R.key, R.props, null, j.mode, U), U.ref = oi(j, null, R), U.return = j, U;
            case V:
              return R = $u(R, j.mode, U), R.return = j, R;
            case L:
              var se = R._init;
              return ie(j, se(R._payload), U);
          }
          if (yt(R) || T(R)) return R = Lr(R, j.mode, U, null), R.return = j, R;
          Ts(j, R);
        }
        return null;
      }
      function te(j, R, U, se) {
        var pe = R !== null ? R.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number") return pe !== null ? null : M(j, R, "" + U, se);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case O:
              return U.key === pe ? b(j, R, U, se) : null;
            case V:
              return U.key === pe ? X(j, R, U, se) : null;
            case L:
              return pe = U._init, te(j, R, pe(U._payload), se);
          }
          if (yt(U) || T(U)) return pe !== null ? null : re(j, R, U, se, null);
          Ts(j, U);
        }
        return null;
      }
      function ue(j, R, U, se, pe) {
        if (typeof se == "string" && se !== "" || typeof se == "number") return j = j.get(U) || null, M(R, j, "" + se, pe);
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case O:
              return j = j.get(se.key === null ? U : se.key) || null, b(R, j, se, pe);
            case V:
              return j = j.get(se.key === null ? U : se.key) || null, X(R, j, se, pe);
            case L:
              var we = se._init;
              return ue(j, R, U, we(se._payload), pe);
          }
          if (yt(se) || T(se)) return j = j.get(U) || null, re(R, j, se, pe, null);
          Ts(R, se);
        }
        return null;
      }
      function de(j, R, U, se) {
        for (var pe = null, we = null, xe = R, Ee = R = 0, it = null; xe !== null && Ee < U.length; Ee++) {
          xe.index > Ee ? (it = xe, xe = null) : it = xe.sibling;
          var Ie = te(j, xe, U[Ee], se);
          if (Ie === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && Ie.alternate === null && n(j, xe), R = p(Ie, R, Ee), we === null ? pe = Ie : we.sibling = Ie, we = Ie, xe = it;
        }
        if (Ee === U.length) return i(j, xe), Fe && br(j, Ee), pe;
        if (xe === null) {
          for (; Ee < U.length; Ee++) xe = ie(j, U[Ee], se), xe !== null && (R = p(xe, R, Ee), we === null ? pe = xe : we.sibling = xe, we = xe);
          return Fe && br(j, Ee), pe;
        }
        for (xe = a(j, xe); Ee < U.length; Ee++) it = ue(xe, j, Ee, U[Ee], se), it !== null && (t && it.alternate !== null && xe.delete(it.key === null ? Ee : it.key), R = p(it, R, Ee), we === null ? pe = it : we.sibling = it, we = it);
        return t && xe.forEach(function(dr) {
          return n(j, dr);
        }), Fe && br(j, Ee), pe;
      }
      function fe(j, R, U, se) {
        var pe = T(U);
        if (typeof pe != "function") throw Error(o(150));
        if (U = pe.call(U), U == null) throw Error(o(151));
        for (var we = pe = null, xe = R, Ee = R = 0, it = null, Ie = U.next(); xe !== null && !Ie.done; Ee++, Ie = U.next()) {
          xe.index > Ee ? (it = xe, xe = null) : it = xe.sibling;
          var dr = te(j, xe, Ie.value, se);
          if (dr === null) {
            xe === null && (xe = it);
            break;
          }
          t && xe && dr.alternate === null && n(j, xe), R = p(dr, R, Ee), we === null ? pe = dr : we.sibling = dr, we = dr, xe = it;
        }
        if (Ie.done) return i(j, xe), Fe && br(j, Ee), pe;
        if (xe === null) {
          for (; !Ie.done; Ee++, Ie = U.next()) Ie = ie(j, Ie.value, se), Ie !== null && (R = p(Ie, R, Ee), we === null ? pe = Ie : we.sibling = Ie, we = Ie);
          return Fe && br(j, Ee), pe;
        }
        for (xe = a(j, xe); !Ie.done; Ee++, Ie = U.next()) Ie = ue(xe, j, Ee, Ie.value, se), Ie !== null && (t && Ie.alternate !== null && xe.delete(Ie.key === null ? Ee : Ie.key), R = p(Ie, R, Ee), we === null ? pe = Ie : we.sibling = Ie, we = Ie);
        return t && xe.forEach(function(Ay) {
          return n(j, Ay);
        }), Fe && br(j, Ee), pe;
      }
      function Ge(j, R, U, se) {
        if (typeof U == "object" && U !== null && U.type === J && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case O:
              e: {
                for (var pe = U.key, we = R; we !== null; ) {
                  if (we.key === pe) {
                    if (pe = U.type, pe === J) {
                      if (we.tag === 7) {
                        i(j, we.sibling), R = d(we, U.props.children), R.return = j, j = R;
                        break e;
                      }
                    } else if (we.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === L && sf(pe) === we.type) {
                      i(j, we.sibling), R = d(we, U.props), R.ref = oi(j, we, U), R.return = j, j = R;
                      break e;
                    }
                    i(j, we);
                    break;
                  } else n(j, we);
                  we = we.sibling;
                }
                U.type === J ? (R = Lr(U.props.children, j.mode, se, U.key), R.return = j, j = R) : (se = tl(U.type, U.key, U.props, null, j.mode, se), se.ref = oi(j, R, U), se.return = j, j = se);
              }
              return w(j);
            case V:
              e: {
                for (we = U.key; R !== null; ) {
                  if (R.key === we) if (R.tag === 4 && R.stateNode.containerInfo === U.containerInfo && R.stateNode.implementation === U.implementation) {
                    i(j, R.sibling), R = d(R, U.children || []), R.return = j, j = R;
                    break e;
                  } else {
                    i(j, R);
                    break;
                  }
                  else n(j, R);
                  R = R.sibling;
                }
                R = $u(U, j.mode, se), R.return = j, j = R;
              }
              return w(j);
            case L:
              return we = U._init, Ge(j, R, we(U._payload), se);
          }
          if (yt(U)) return de(j, R, U, se);
          if (T(U)) return fe(j, R, U, se);
          Ts(j, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, R !== null && R.tag === 6 ? (i(j, R.sibling), R = d(R, U), R.return = j, j = R) : (i(j, R), R = Pu(U, j.mode, se), R.return = j, j = R), w(j)) : i(j, R);
      }
      return Ge;
    }
    var co = lf(true), af = lf(false), Rs = er(null), Ps = null, fo = null, Va = null;
    function Ua() {
      Va = fo = Ps = null;
    }
    function Wa(t) {
      var n = Rs.current;
      Le(Rs), t._currentValue = n;
    }
    function Ya(t, n, i) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & n) !== n ? (t.childLanes |= n, a !== null && (a.childLanes |= n)) : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n), t === i) break;
        t = t.return;
      }
    }
    function ho(t, n) {
      Ps = t, Va = fo = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & n) !== 0 && (Ct = true), t.firstContext = null);
    }
    function Wt(t) {
      var n = t._currentValue;
      if (Va !== t) if (t = {
        context: t,
        memoizedValue: n,
        next: null
      }, fo === null) {
        if (Ps === null) throw Error(o(308));
        fo = t, Ps.dependencies = {
          lanes: 0,
          firstContext: t
        };
      } else fo = fo.next = t;
      return n;
    }
    var Ar = null;
    function Xa(t) {
      Ar === null ? Ar = [
        t
      ] : Ar.push(t);
    }
    function uf(t, n, i, a) {
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
    function cf(t, n) {
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
    function $s(t, n, i) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194240) !== 0)) {
        var a = n.lanes;
        a &= t.pendingLanes, i |= a, n.lanes = i, aa(t, i);
      }
    }
    function df(t, n) {
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
    function zs(t, n, i, a) {
      var d = t.updateQueue;
      rr = false;
      var p = d.firstBaseUpdate, w = d.lastBaseUpdate, M = d.shared.pending;
      if (M !== null) {
        d.shared.pending = null;
        var b = M, X = b.next;
        b.next = null, w === null ? p = X : w.next = X, w = b;
        var re = t.alternate;
        re !== null && (re = re.updateQueue, M = re.lastBaseUpdate, M !== w && (M === null ? re.firstBaseUpdate = X : M.next = X, re.lastBaseUpdate = b));
      }
      if (p !== null) {
        var ie = d.baseState;
        w = 0, re = X = b = null, M = p;
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
              switch (te = n, ue = i, fe.tag) {
                case 1:
                  if (de = fe.payload, typeof de == "function") {
                    ie = de.call(ue, ie, te);
                    break e;
                  }
                  ie = de;
                  break e;
                case 3:
                  de.flags = de.flags & -65537 | 128;
                case 0:
                  if (de = fe.payload, te = typeof de == "function" ? de.call(ue, ie, te) : de, te == null) break e;
                  ie = F({}, ie, te);
                  break e;
                case 2:
                  rr = true;
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
          }, re === null ? (X = re = ue, b = ie) : re = re.next = ue, w |= te;
          if (M = M.next, M === null) {
            if (M = d.shared.pending, M === null) break;
            te = M, M = te.next, te.next = null, d.lastBaseUpdate = te, d.shared.pending = null;
          }
        } while (true);
        if (re === null && (b = ie), d.baseState = b, d.firstBaseUpdate = X, d.lastBaseUpdate = re, n = d.shared.interleaved, n !== null) {
          d = n;
          do
            w |= d.lane, d = d.next;
          while (d !== n);
        } else p === null && (d.shared.lanes = 0);
        Pr |= w, t.lanes = w, t.memoizedState = ie;
      }
    }
    function ff(t, n, i) {
      if (t = n.effects, n.effects = null, t !== null) for (n = 0; n < t.length; n++) {
        var a = t[n], d = a.callback;
        if (d !== null) {
          if (a.callback = null, a = i, typeof d != "function") throw Error(o(191, d));
          d.call(a);
        }
      }
    }
    var ii = {}, xn = er(ii), si = er(ii), li = er(ii);
    function Tr(t) {
      if (t === ii) throw Error(o(174));
      return t;
    }
    function Ka(t, n) {
      switch (Pe(li, n), Pe(si, t), Pe(xn, ii), t = n.nodeType, t) {
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
      Le(xn), Le(si), Le(li);
    }
    function hf(t) {
      Tr(li.current);
      var n = Tr(xn.current), i = qt(n, t.type);
      n !== i && (Pe(si, t), Pe(xn, i));
    }
    function Qa(t) {
      si.current === t && (Le(xn), Le(si));
    }
    var je = er(0);
    function Ds(t) {
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
    var Ls = A.ReactCurrentDispatcher, Ja = A.ReactCurrentBatchConfig, Rr = 0, He = null, Je = null, rt = null, Os = false, ai = false, ui = 0, qg = 0;
    function dt() {
      throw Error(o(321));
    }
    function eu(t, n) {
      if (n === null) return false;
      for (var i = 0; i < n.length && i < t.length; i++) if (!rn(t[i], n[i])) return false;
      return true;
    }
    function tu(t, n, i, a, d, p) {
      if (Rr = p, He = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Ls.current = t === null || t.memoizedState === null ? ny : ry, t = i(a, d), ai) {
        p = 0;
        do {
          if (ai = false, ui = 0, 25 <= p) throw Error(o(301));
          p += 1, rt = Je = null, n.updateQueue = null, Ls.current = oy, t = i(a, d);
        } while (ai);
      }
      if (Ls.current = js, n = Je !== null && Je.next !== null, Rr = 0, rt = Je = He = null, Os = false, n) throw Error(o(300));
      return t;
    }
    function nu() {
      var t = ui !== 0;
      return ui = 0, t;
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
    function ci(t, n) {
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
        var M = w = null, b = null, X = p;
        do {
          var re = X.lane;
          if ((Rr & re) === re) b !== null && (b = b.next = {
            lane: 0,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          }), a = X.hasEagerState ? X.eagerState : t(a, X.action);
          else {
            var ie = {
              lane: re,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            b === null ? (M = b = ie, w = a) : b = b.next = ie, He.lanes |= re, Pr |= re;
          }
          X = X.next;
        } while (X !== null && X !== p);
        b === null ? w = a : b.next = M, rn(a, n.memoizedState) || (Ct = true), n.memoizedState = a, n.baseState = w, n.baseQueue = b, i.lastRenderedState = a;
      }
      if (t = i.interleaved, t !== null) {
        d = t;
        do
          p = d.lane, He.lanes |= p, Pr |= p, d = d.next;
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
    function pf() {
    }
    function mf(t, n) {
      var i = He, a = Yt(), d = n(), p = !rn(a.memoizedState, d);
      if (p && (a.memoizedState = d, Ct = true), a = a.queue, iu(vf.bind(null, i, a, t), [
        t
      ]), a.getSnapshot !== n || p || rt !== null && rt.memoizedState.tag & 1) {
        if (i.flags |= 2048, di(9, yf.bind(null, i, a, d, n), void 0, null), ot === null) throw Error(o(349));
        (Rr & 30) !== 0 || gf(i, n, d);
      }
      return d;
    }
    function gf(t, n, i) {
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
    function yf(t, n, i, a) {
      n.value = i, n.getSnapshot = a, wf(n) && xf(t);
    }
    function vf(t, n, i) {
      return i(function() {
        wf(n) && xf(t);
      });
    }
    function wf(t) {
      var n = t.getSnapshot;
      t = t.value;
      try {
        var i = n();
        return !rn(t, i);
      } catch {
        return true;
      }
    }
    function xf(t) {
      var n = zn(t, 1);
      n !== null && un(n, t, 1, -1);
    }
    function Sf(t) {
      var n = Sn();
      return typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ci,
        lastRenderedState: t
      }, n.queue = t, t = t.dispatch = ty.bind(null, He, t), [
        n.memoizedState,
        t
      ];
    }
    function di(t, n, i, a) {
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
    function Ef() {
      return Yt().memoizedState;
    }
    function Fs(t, n, i, a) {
      var d = Sn();
      He.flags |= t, d.memoizedState = di(1 | n, i, void 0, a === void 0 ? null : a);
    }
    function Bs(t, n, i, a) {
      var d = Yt();
      a = a === void 0 ? null : a;
      var p = void 0;
      if (Je !== null) {
        var w = Je.memoizedState;
        if (p = w.destroy, a !== null && eu(a, w.deps)) {
          d.memoizedState = di(n, i, p, a);
          return;
        }
      }
      He.flags |= t, d.memoizedState = di(1 | n, i, p, a);
    }
    function kf(t, n) {
      return Fs(8390656, 8, t, n);
    }
    function iu(t, n) {
      return Bs(2048, 8, t, n);
    }
    function Cf(t, n) {
      return Bs(4, 2, t, n);
    }
    function _f(t, n) {
      return Bs(4, 4, t, n);
    }
    function Nf(t, n) {
      if (typeof n == "function") return t = t(), n(t), function() {
        n(null);
      };
      if (n != null) return t = t(), n.current = t, function() {
        n.current = null;
      };
    }
    function Mf(t, n, i) {
      return i = i != null ? i.concat([
        t
      ]) : null, Bs(4, 4, Nf.bind(null, n, t), i);
    }
    function su() {
    }
    function If(t, n) {
      var i = Yt();
      n = n === void 0 ? null : n;
      var a = i.memoizedState;
      return a !== null && n !== null && eu(n, a[1]) ? a[0] : (i.memoizedState = [
        t,
        n
      ], t);
    }
    function bf(t, n) {
      var i = Yt();
      n = n === void 0 ? null : n;
      var a = i.memoizedState;
      return a !== null && n !== null && eu(n, a[1]) ? a[0] : (t = t(), i.memoizedState = [
        t,
        n
      ], t);
    }
    function Af(t, n, i) {
      return (Rr & 21) === 0 ? (t.baseState && (t.baseState = false, Ct = true), t.memoizedState = i) : (rn(i, n) || (i = id(), He.lanes |= i, Pr |= i, t.baseState = true), n);
    }
    function Jg(t, n) {
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
    function Tf() {
      return Yt().memoizedState;
    }
    function ey(t, n, i) {
      var a = ar(t);
      if (i = {
        lane: a,
        action: i,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Rf(t)) Pf(n, i);
      else if (i = uf(t, n, i, a), i !== null) {
        var d = wt();
        un(i, t, a, d), $f(i, n, a);
      }
    }
    function ty(t, n, i) {
      var a = ar(t), d = {
        lane: a,
        action: i,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Rf(t)) Pf(n, d);
      else {
        var p = t.alternate;
        if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
          var w = n.lastRenderedState, M = p(w, i);
          if (d.hasEagerState = true, d.eagerState = M, rn(M, w)) {
            var b = n.interleaved;
            b === null ? (d.next = d, Xa(n)) : (d.next = b.next, b.next = d), n.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
        i = uf(t, n, d, a), i !== null && (d = wt(), un(i, t, a, d), $f(i, n, a));
      }
    }
    function Rf(t) {
      var n = t.alternate;
      return t === He || n !== null && n === He;
    }
    function Pf(t, n) {
      ai = Os = true;
      var i = t.pending;
      i === null ? n.next = n : (n.next = i.next, i.next = n), t.pending = n;
    }
    function $f(t, n, i) {
      if ((i & 4194240) !== 0) {
        var a = n.lanes;
        a &= t.pendingLanes, i |= a, n.lanes = i, aa(t, i);
      }
    }
    var js = {
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
    }, ny = {
      readContext: Wt,
      useCallback: function(t, n) {
        return Sn().memoizedState = [
          t,
          n === void 0 ? null : n
        ], t;
      },
      useContext: Wt,
      useEffect: kf,
      useImperativeHandle: function(t, n, i) {
        return i = i != null ? i.concat([
          t
        ]) : null, Fs(4194308, 4, Nf.bind(null, n, t), i);
      },
      useLayoutEffect: function(t, n) {
        return Fs(4194308, 4, t, n);
      },
      useInsertionEffect: function(t, n) {
        return Fs(4, 2, t, n);
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
        }, a.queue = t, t = t.dispatch = ey.bind(null, He, t), [
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
      useState: Sf,
      useDebugValue: su,
      useDeferredValue: function(t) {
        return Sn().memoizedState = t;
      },
      useTransition: function() {
        var t = Sf(false), n = t[0];
        return t = Jg.bind(null, t[1]), Sn().memoizedState = t, [
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
          (Rr & 30) !== 0 || gf(a, n, i);
        }
        d.memoizedState = i;
        var p = {
          value: i,
          getSnapshot: n
        };
        return d.queue = p, kf(vf.bind(null, a, p, t), [
          t
        ]), a.flags |= 2048, di(9, yf.bind(null, a, p, i, n), void 0, null), i;
      },
      useId: function() {
        var t = Sn(), n = ot.identifierPrefix;
        if (Fe) {
          var i = $n, a = Pn;
          i = (a & ~(1 << 32 - nn(a) - 1)).toString(32) + i, n = ":" + n + "R" + i, i = ui++, 0 < i && (n += "H" + i.toString(32)), n += ":";
        } else i = qg++, n = ":" + n + "r" + i.toString(32) + ":";
        return t.memoizedState = n;
      },
      unstable_isNewReconciler: false
    }, ry = {
      readContext: Wt,
      useCallback: If,
      useContext: Wt,
      useEffect: iu,
      useImperativeHandle: Mf,
      useInsertionEffect: Cf,
      useLayoutEffect: _f,
      useMemo: bf,
      useReducer: ru,
      useRef: Ef,
      useState: function() {
        return ru(ci);
      },
      useDebugValue: su,
      useDeferredValue: function(t) {
        var n = Yt();
        return Af(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = ru(ci)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: pf,
      useSyncExternalStore: mf,
      useId: Tf,
      unstable_isNewReconciler: false
    }, oy = {
      readContext: Wt,
      useCallback: If,
      useContext: Wt,
      useEffect: iu,
      useImperativeHandle: Mf,
      useInsertionEffect: Cf,
      useLayoutEffect: _f,
      useMemo: bf,
      useReducer: ou,
      useRef: Ef,
      useState: function() {
        return ou(ci);
      },
      useDebugValue: su,
      useDeferredValue: function(t) {
        var n = Yt();
        return Je === null ? n.memoizedState = t : Af(n, Je.memoizedState, t);
      },
      useTransition: function() {
        var t = ou(ci)[0], n = Yt().memoizedState;
        return [
          t,
          n
        ];
      },
      useMutableSource: pf,
      useSyncExternalStore: mf,
      useId: Tf,
      unstable_isNewReconciler: false
    };
    function sn(t, n) {
      if (t && t.defaultProps) {
        n = F({}, n), t = t.defaultProps;
        for (var i in t) n[i] === void 0 && (n[i] = t[i]);
        return n;
      }
      return n;
    }
    function lu(t, n, i, a) {
      n = t.memoizedState, i = i(a, n), i = i == null ? n : F({}, n, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i);
    }
    var Hs = {
      isMounted: function(t) {
        return (t = t._reactInternals) ? An(t) === t : false;
      },
      enqueueSetState: function(t, n, i) {
        t = t._reactInternals;
        var a = wt(), d = ar(t), p = Dn(a, d);
        p.payload = n, i != null && (p.callback = i), n = or(t, p, d), n !== null && (un(n, t, d, a), $s(n, t, d));
      },
      enqueueReplaceState: function(t, n, i) {
        t = t._reactInternals;
        var a = wt(), d = ar(t), p = Dn(a, d);
        p.tag = 1, p.payload = n, i != null && (p.callback = i), n = or(t, p, d), n !== null && (un(n, t, d, a), $s(n, t, d));
      },
      enqueueForceUpdate: function(t, n) {
        t = t._reactInternals;
        var i = wt(), a = ar(t), d = Dn(i, a);
        d.tag = 2, n != null && (d.callback = n), n = or(t, d, a), n !== null && (un(n, t, a, i), $s(n, t, a));
      }
    };
    function zf(t, n, i, a, d, p, w) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, p, w) : n.prototype && n.prototype.isPureReactComponent ? !Zo(i, a) || !Zo(d, p) : true;
    }
    function Df(t, n, i) {
      var a = false, d = tr, p = n.contextType;
      return typeof p == "object" && p !== null ? p = Wt(p) : (d = kt(n) ? Mr : ct.current, a = n.contextTypes, p = (a = a != null) ? so(t, d) : tr), n = new n(i, p), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Hs, t.stateNode = n, n._reactInternals = t, a && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = p), n;
    }
    function Lf(t, n, i, a) {
      t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, a), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, a), n.state !== t && Hs.enqueueReplaceState(n, n.state, null);
    }
    function au(t, n, i, a) {
      var d = t.stateNode;
      d.props = i, d.state = t.memoizedState, d.refs = {}, Ga(t);
      var p = n.contextType;
      typeof p == "object" && p !== null ? d.context = Wt(p) : (p = kt(n) ? Mr : ct.current, d.context = so(t, p)), d.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (lu(t, n, p, i), d.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (n = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), n !== d.state && Hs.enqueueReplaceState(d, d.state, null), zs(t, i, d, a), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
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
    var iy = typeof WeakMap == "function" ? WeakMap : Map;
    function Of(t, n, i) {
      i = Dn(-1, i), i.tag = 3, i.payload = {
        element: null
      };
      var a = n.value;
      return i.callback = function() {
        Ks || (Ks = true, _u = a), cu(t, n);
      }, i;
    }
    function Ff(t, n, i) {
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
    function Bf(t, n, i) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new iy();
        var d = /* @__PURE__ */ new Set();
        a.set(n, d);
      } else d = a.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), a.set(n, d));
      d.has(i) || (d.add(i), t = wy.bind(null, t, n, i), n.then(t, t));
    }
    function jf(t) {
      do {
        var n;
        if ((n = t.tag === 13) && (n = t.memoizedState, n = n !== null ? n.dehydrated !== null : true), n) return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Hf(t, n, i, a, d) {
      return (t.mode & 1) === 0 ? (t === n ? t.flags |= 65536 : (t.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (n = Dn(-1, 1), n.tag = 2, or(i, n, 1))), i.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t);
    }
    var sy = A.ReactCurrentOwner, Ct = false;
    function vt(t, n, i, a) {
      n.child = t === null ? af(n, null, i, a) : co(n, t.child, i, a);
    }
    function Vf(t, n, i, a, d) {
      i = i.render;
      var p = n.ref;
      return ho(n, d), a = tu(t, n, i, a, p, d), i = nu(), t !== null && !Ct ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~d, Ln(t, n, d)) : (Fe && i && Oa(n), n.flags |= 1, vt(t, n, a, d), n.child);
    }
    function Uf(t, n, i, a, d) {
      if (t === null) {
        var p = i.type;
        return typeof p == "function" && !Ru(p) && p.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (n.tag = 15, n.type = p, Wf(t, n, p, a, d)) : (t = tl(i.type, null, a, n, n.mode, d), t.ref = n.ref, t.return = n, n.child = t);
      }
      if (p = t.child, (t.lanes & d) === 0) {
        var w = p.memoizedProps;
        if (i = i.compare, i = i !== null ? i : Zo, i(w, a) && t.ref === n.ref) return Ln(t, n, d);
      }
      return n.flags |= 1, t = cr(p, a), t.ref = n.ref, t.return = n, n.child = t;
    }
    function Wf(t, n, i, a, d) {
      if (t !== null) {
        var p = t.memoizedProps;
        if (Zo(p, a) && t.ref === n.ref) if (Ct = false, n.pendingProps = a = p, (t.lanes & d) !== 0) (t.flags & 131072) !== 0 && (Ct = true);
        else return n.lanes = t.lanes, Ln(t, n, d);
      }
      return du(t, n, i, a, d);
    }
    function Yf(t, n, i) {
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
    function Xf(t, n) {
      var i = n.ref;
      (t === null && i !== null || t !== null && t.ref !== i) && (n.flags |= 512, n.flags |= 2097152);
    }
    function du(t, n, i, a, d) {
      var p = kt(i) ? Mr : ct.current;
      return p = so(n, p), ho(n, d), i = tu(t, n, i, a, p, d), a = nu(), t !== null && !Ct ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~d, Ln(t, n, d)) : (Fe && a && Oa(n), n.flags |= 1, vt(t, n, i, d), n.child);
    }
    function Gf(t, n, i, a, d) {
      if (kt(i)) {
        var p = true;
        Ns(n);
      } else p = false;
      if (ho(n, d), n.stateNode === null) Us(t, n), Df(n, i, a), au(n, i, a, d), a = true;
      else if (t === null) {
        var w = n.stateNode, M = n.memoizedProps;
        w.props = M;
        var b = w.context, X = i.contextType;
        typeof X == "object" && X !== null ? X = Wt(X) : (X = kt(i) ? Mr : ct.current, X = so(n, X));
        var re = i.getDerivedStateFromProps, ie = typeof re == "function" || typeof w.getSnapshotBeforeUpdate == "function";
        ie || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== a || b !== X) && Lf(n, w, a, X), rr = false;
        var te = n.memoizedState;
        w.state = te, zs(n, a, w, d), b = n.memoizedState, M !== a || te !== b || Et.current || rr ? (typeof re == "function" && (lu(n, i, re, a), b = n.memoizedState), (M = rr || zf(n, i, M, a, te, b, X)) ? (ie || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = a, n.memoizedState = b), w.props = a, w.state = b, w.context = X, a = M) : (typeof w.componentDidMount == "function" && (n.flags |= 4194308), a = false);
      } else {
        w = n.stateNode, cf(t, n), M = n.memoizedProps, X = n.type === n.elementType ? M : sn(n.type, M), w.props = X, ie = n.pendingProps, te = w.context, b = i.contextType, typeof b == "object" && b !== null ? b = Wt(b) : (b = kt(i) ? Mr : ct.current, b = so(n, b));
        var ue = i.getDerivedStateFromProps;
        (re = typeof ue == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (M !== ie || te !== b) && Lf(n, w, a, b), rr = false, te = n.memoizedState, w.state = te, zs(n, a, w, d);
        var de = n.memoizedState;
        M !== ie || te !== de || Et.current || rr ? (typeof ue == "function" && (lu(n, i, ue, a), de = n.memoizedState), (X = rr || zf(n, i, X, a, te, de, b) || false) ? (re || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(a, de, b), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(a, de, b)), typeof w.componentDidUpdate == "function" && (n.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 1024), n.memoizedProps = a, n.memoizedState = de), w.props = a, w.state = de, w.context = b, a = X) : (typeof w.componentDidUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || M === t.memoizedProps && te === t.memoizedState || (n.flags |= 1024), a = false);
      }
      return fu(t, n, i, a, p, d);
    }
    function fu(t, n, i, a, d, p) {
      Xf(t, n);
      var w = (n.flags & 128) !== 0;
      if (!a && !w) return d && qd(n, i, false), Ln(t, n, p);
      a = n.stateNode, sy.current = n;
      var M = w && typeof i.getDerivedStateFromError != "function" ? null : a.render();
      return n.flags |= 1, t !== null && w ? (n.child = co(n, t.child, null, p), n.child = co(n, null, M, p)) : vt(t, n, M, p), n.memoizedState = a.state, d && qd(n, i, true), n.child;
    }
    function Kf(t) {
      var n = t.stateNode;
      n.pendingContext ? Qd(t, n.pendingContext, n.pendingContext !== n.context) : n.context && Qd(t, n.context, false), Ka(t, n.containerInfo);
    }
    function Qf(t, n, i, a, d) {
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
    function Zf(t, n, i) {
      var a = n.pendingProps, d = je.current, p = false, w = (n.flags & 128) !== 0, M;
      if ((M = w) || (M = t !== null && t.memoizedState === null ? false : (d & 2) !== 0), M ? (p = true, n.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), Pe(je, d & 1), t === null) return ja(n), t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (w = a.children, t = a.fallback, p ? (a = n.mode, p = n.child, w = {
        mode: "hidden",
        children: w
      }, (a & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = w) : p = nl(w, a, 0, null), t = Lr(t, a, i, null), p.return = n, t.return = n, p.sibling = t, n.child = p, n.child.memoizedState = pu(i), n.memoizedState = hu, t) : mu(n, w));
      if (d = t.memoizedState, d !== null && (M = d.dehydrated, M !== null)) return ly(t, n, w, a, M, d, i);
      if (p) {
        p = a.fallback, w = n.mode, d = t.child, M = d.sibling;
        var b = {
          mode: "hidden",
          children: a.children
        };
        return (w & 1) === 0 && n.child !== d ? (a = n.child, a.childLanes = 0, a.pendingProps = b, n.deletions = null) : (a = cr(d, b), a.subtreeFlags = d.subtreeFlags & 14680064), M !== null ? p = cr(M, p) : (p = Lr(p, w, i, null), p.flags |= 2), p.return = n, a.return = n, a.sibling = p, n.child = a, a = p, p = n.child, w = t.child.memoizedState, w = w === null ? pu(i) : {
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
      return n = nl({
        mode: "visible",
        children: n
      }, t.mode, 0, null), n.return = t, t.child = n;
    }
    function Vs(t, n, i, a) {
      return a !== null && Ha(a), co(n, t.child, null, i), t = mu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
    }
    function ly(t, n, i, a, d, p, w) {
      if (i) return n.flags & 256 ? (n.flags &= -257, a = uu(Error(o(422))), Vs(t, n, w, a)) : n.memoizedState !== null ? (n.child = t.child, n.flags |= 128, null) : (p = a.fallback, d = n.mode, a = nl({
        mode: "visible",
        children: a.children
      }, d, 0, null), p = Lr(p, d, w, null), p.flags |= 2, a.return = n, p.return = n, a.sibling = p, n.child = a, (n.mode & 1) !== 0 && co(n, t.child, null, w), n.child.memoizedState = pu(w), n.memoizedState = hu, p);
      if ((n.mode & 1) === 0) return Vs(t, n, w, null);
      if (d.data === "$!") {
        if (a = d.nextSibling && d.nextSibling.dataset, a) var M = a.dgst;
        return a = M, p = Error(o(419)), a = uu(p, a, void 0), Vs(t, n, w, a);
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
        return Tu(), a = uu(Error(o(421))), Vs(t, n, w, a);
      }
      return d.data === "$?" ? (n.flags |= 128, n.child = t.child, n = xy.bind(null, t), d._reactRetry = n, null) : (t = p.treeContext, Pt = Jn(d.nextSibling), Rt = n, Fe = true, on = null, t !== null && (Vt[Ut++] = Pn, Vt[Ut++] = $n, Vt[Ut++] = Ir, Pn = t.id, $n = t.overflow, Ir = n), n = mu(n, a.children), n.flags |= 4096, n);
    }
    function qf(t, n, i) {
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
    function Jf(t, n, i) {
      var a = n.pendingProps, d = a.revealOrder, p = a.tail;
      if (vt(t, n, a.children, i), a = je.current, (a & 2) !== 0) a = a & 1 | 2, n.flags |= 128;
      else {
        if (t !== null && (t.flags & 128) !== 0) e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && qf(t, i, n);
          else if (t.tag === 19) qf(t, i, n);
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
          for (i = n.child, d = null; i !== null; ) t = i.alternate, t !== null && Ds(t) === null && (d = i), i = i.sibling;
          i = d, i === null ? (d = n.child, n.child = null) : (d = i.sibling, i.sibling = null), gu(n, false, d, i, p);
          break;
        case "backwards":
          for (i = null, d = n.child, n.child = null; d !== null; ) {
            if (t = d.alternate, t !== null && Ds(t) === null) {
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
    function Us(t, n) {
      (n.mode & 1) === 0 && t !== null && (t.alternate = null, n.alternate = null, n.flags |= 2);
    }
    function Ln(t, n, i) {
      if (t !== null && (n.dependencies = t.dependencies), Pr |= n.lanes, (i & n.childLanes) === 0) return null;
      if (t !== null && n.child !== t.child) throw Error(o(153));
      if (n.child !== null) {
        for (t = n.child, i = cr(t, t.pendingProps), n.child = i, i.return = n; t.sibling !== null; ) t = t.sibling, i = i.sibling = cr(t, t.pendingProps), i.return = n;
        i.sibling = null;
      }
      return n.child;
    }
    function ay(t, n, i) {
      switch (n.tag) {
        case 3:
          Kf(n), uo();
          break;
        case 5:
          hf(n);
          break;
        case 1:
          kt(n.type) && Ns(n);
          break;
        case 4:
          Ka(n, n.stateNode.containerInfo);
          break;
        case 10:
          var a = n.type._context, d = n.memoizedProps.value;
          Pe(Rs, a._currentValue), a._currentValue = d;
          break;
        case 13:
          if (a = n.memoizedState, a !== null) return a.dehydrated !== null ? (Pe(je, je.current & 1), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Zf(t, n, i) : (Pe(je, je.current & 1), t = Ln(t, n, i), t !== null ? t.sibling : null);
          Pe(je, je.current & 1);
          break;
        case 19:
          if (a = (i & n.childLanes) !== 0, (t.flags & 128) !== 0) {
            if (a) return Jf(t, n, i);
            n.flags |= 128;
          }
          if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Pe(je, je.current), a) break;
          return null;
        case 22:
        case 23:
          return n.lanes = 0, Yf(t, n, i);
      }
      return Ln(t, n, i);
    }
    var eh, yu, th, nh;
    eh = function(t, n) {
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
    }, th = function(t, n, i, a) {
      var d = t.memoizedProps;
      if (d !== a) {
        t = n.stateNode, Tr(xn.current);
        var p = null;
        switch (i) {
          case "input":
            d = Qe(t, d), a = Qe(t, a), p = [];
            break;
          case "select":
            d = F({}, d, {
              value: void 0
            }), a = F({}, a, {
              value: void 0
            }), p = [];
            break;
          case "textarea":
            d = hn(t, d), a = hn(t, a), p = [];
            break;
          default:
            typeof d.onClick != "function" && typeof a.onClick == "function" && (t.onclick = ks);
        }
        St(i, a);
        var w;
        i = null;
        for (X in d) if (!a.hasOwnProperty(X) && d.hasOwnProperty(X) && d[X] != null) if (X === "style") {
          var M = d[X];
          for (w in M) M.hasOwnProperty(w) && (i || (i = {}), i[w] = "");
        } else X !== "dangerouslySetInnerHTML" && X !== "children" && X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && X !== "autoFocus" && (l.hasOwnProperty(X) ? p || (p = []) : (p = p || []).push(X, null));
        for (X in a) {
          var b = a[X];
          if (M = d == null ? void 0 : d[X], a.hasOwnProperty(X) && b !== M && (b != null || M != null)) if (X === "style") if (M) {
            for (w in M) !M.hasOwnProperty(w) || b && b.hasOwnProperty(w) || (i || (i = {}), i[w] = "");
            for (w in b) b.hasOwnProperty(w) && M[w] !== b[w] && (i || (i = {}), i[w] = b[w]);
          } else i || (p || (p = []), p.push(X, i)), i = b;
          else X === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, M = M ? M.__html : void 0, b != null && M !== b && (p = p || []).push(X, b)) : X === "children" ? typeof b != "string" && typeof b != "number" || (p = p || []).push(X, "" + b) : X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && (l.hasOwnProperty(X) ? (b != null && X === "onScroll" && De("scroll", t), p || M === b || (p = [])) : (p = p || []).push(X, b));
        }
        i && (p = p || []).push("style", i);
        var X = p;
        (n.updateQueue = X) && (n.flags |= 4);
      }
    }, nh = function(t, n, i, a) {
      i !== a && (n.flags |= 4);
    };
    function fi(t, n) {
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
    function uy(t, n, i) {
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
          return kt(n.type) && _s(), ft(n), null;
        case 3:
          return a = n.stateNode, po(), Le(Et), Le(ct), qa(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (As(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, on !== null && (Iu(on), on = null))), yu(t, n), ft(n), null;
        case 5:
          Qa(n);
          var d = Tr(li.current);
          if (i = n.type, t !== null && n.stateNode != null) th(t, n, i, a, d), t.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
          else {
            if (!a) {
              if (n.stateNode === null) throw Error(o(166));
              return ft(n), null;
            }
            if (t = Tr(xn.current), As(n)) {
              a = n.stateNode, i = n.type;
              var p = n.memoizedProps;
              switch (a[wn] = n, a[ni] = p, t = (n.mode & 1) !== 0, i) {
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
                  for (d = 0; d < Jo.length; d++) De(Jo[d], a);
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
                w === "children" ? typeof M == "string" ? a.textContent !== M && (p.suppressHydrationWarning !== true && Es(a.textContent, M, t), d = [
                  "children",
                  M
                ]) : typeof M == "number" && a.textContent !== "" + M && (p.suppressHydrationWarning !== true && Es(a.textContent, M, t), d = [
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
                  typeof p.onClick == "function" && (a.onclick = ks);
              }
              a = d, n.updateQueue = a, a !== null && (n.flags |= 4);
            } else {
              w = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = pn(i)), t === "http://www.w3.org/1999/xhtml" ? i === "script" ? (t = w.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof a.is == "string" ? t = w.createElement(i, {
                is: a.is
              }) : (t = w.createElement(i), i === "select" && (w = t, a.multiple ? w.multiple = true : a.size && (w.size = a.size))) : t = w.createElementNS(t, i), t[wn] = n, t[ni] = a, eh(t, n, false, false), n.stateNode = t;
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
                    for (d = 0; d < Jo.length; d++) De(Jo[d], t);
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
                    }, d = F({}, a, {
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
                  var b = M[p];
                  p === "style" ? gn(t, b) : p === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && Mn(t, b)) : p === "children" ? typeof b == "string" ? (i !== "textarea" || b !== "") && en(t, b) : typeof b == "number" && en(t, "" + b) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (l.hasOwnProperty(p) ? b != null && p === "onScroll" && De("scroll", t) : b != null && z(t, p, b, w));
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
                    typeof d.onClick == "function" && (t.onclick = ks);
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
          if (t && n.stateNode != null) nh(t, n, t.memoizedProps, a);
          else {
            if (typeof a != "string" && n.stateNode === null) throw Error(o(166));
            if (i = Tr(li.current), Tr(xn.current), As(n)) {
              if (a = n.stateNode, i = n.memoizedProps, a[wn] = n, (p = a.nodeValue !== i) && (t = Rt, t !== null)) switch (t.tag) {
                case 3:
                  Es(a.nodeValue, i, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== true && Es(a.nodeValue, i, (t.mode & 1) !== 0);
              }
              p && (n.flags |= 4);
            } else a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a), a[wn] = n, n.stateNode = a;
          }
          return ft(n), null;
        case 13:
          if (Le(je), a = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (Fe && Pt !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) of(), uo(), n.flags |= 98560, p = false;
            else if (p = As(n), a !== null && a.dehydrated !== null) {
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
          return po(), yu(t, n), t === null && ei(n.stateNode.containerInfo), ft(n), null;
        case 10:
          return Wa(n.type._context), ft(n), null;
        case 17:
          return kt(n.type) && _s(), ft(n), null;
        case 19:
          if (Le(je), p = n.memoizedState, p === null) return ft(n), null;
          if (a = (n.flags & 128) !== 0, w = p.rendering, w === null) if (a) fi(p, false);
          else {
            if (et !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
              if (w = Ds(t), w !== null) {
                for (n.flags |= 128, fi(p, false), a = w.updateQueue, a !== null && (n.updateQueue = a, n.flags |= 4), n.subtreeFlags = 0, a = i, i = n.child; i !== null; ) p = i, t = a, p.flags &= 14680066, w = p.alternate, w === null ? (p.childLanes = 0, p.lanes = t, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = w.childLanes, p.lanes = w.lanes, p.child = w.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = w.memoizedProps, p.memoizedState = w.memoizedState, p.updateQueue = w.updateQueue, p.type = w.type, t = w.dependencies, p.dependencies = t === null ? null : {
                  lanes: t.lanes,
                  firstContext: t.firstContext
                }), i = i.sibling;
                return Pe(je, je.current & 1 | 2), n.child;
              }
              t = t.sibling;
            }
            p.tail !== null && Be() > vo && (n.flags |= 128, a = true, fi(p, false), n.lanes = 4194304);
          }
          else {
            if (!a) if (t = Ds(w), t !== null) {
              if (n.flags |= 128, a = true, i = t.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), fi(p, true), p.tail === null && p.tailMode === "hidden" && !w.alternate && !Fe) return ft(n), null;
            } else 2 * Be() - p.renderingStartTime > vo && i !== 1073741824 && (n.flags |= 128, a = true, fi(p, false), n.lanes = 4194304);
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
    function cy(t, n) {
      switch (Fa(n), n.tag) {
        case 1:
          return kt(n.type) && _s(), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
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
    var Ws = false, ht = false, dy = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
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
    var rh = false;
    function fy(t, n) {
      if (Aa = ds, t = $d(), Ea(t)) {
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
            var w = 0, M = -1, b = -1, X = 0, re = 0, ie = t, te = null;
            t: for (; ; ) {
              for (var ue; ie !== i || d !== 0 && ie.nodeType !== 3 || (M = w + d), ie !== p || a !== 0 && ie.nodeType !== 3 || (b = w + a), ie.nodeType === 3 && (w += ie.nodeValue.length), (ue = ie.firstChild) !== null; ) te = ie, ie = ue;
              for (; ; ) {
                if (ie === t) break t;
                if (te === i && ++X === d && (M = w), te === p && ++re === a && (b = w), (ue = ie.nextSibling) !== null) break;
                ie = te, te = ie.parentNode;
              }
              ie = ue;
            }
            i = M === -1 || b === -1 ? null : {
              start: M,
              end: b
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
      }, ds = false, ce = n; ce !== null; ) if (n = ce, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, ce = t;
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
                var fe = de.memoizedProps, Ge = de.memoizedState, j = n.stateNode, R = j.getSnapshotBeforeUpdate(n.elementType === n.type ? fe : sn(n.type, fe), Ge);
                j.__reactInternalSnapshotBeforeUpdate = R;
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
      return de = rh, rh = false, de;
    }
    function hi(t, n, i) {
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
    function Ys(t, n) {
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
    function oh(t) {
      var n = t.alternate;
      n !== null && (t.alternate = null, oh(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && (delete n[wn], delete n[ni], delete n[za], delete n[Gg], delete n[Kg])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function ih(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 4;
    }
    function sh(t) {
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ih(t.return)) return null;
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
      if (a === 5 || a === 6) t = t.stateNode, n ? i.nodeType === 8 ? i.parentNode.insertBefore(t, n) : i.insertBefore(t, n) : (i.nodeType === 8 ? (n = i.parentNode, n.insertBefore(t, i)) : (n = i, n.appendChild(t)), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = ks));
      else if (a !== 4 && (t = t.child, t !== null)) for (xu(t, n, i), t = t.sibling; t !== null; ) xu(t, n, i), t = t.sibling;
    }
    function Su(t, n, i) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, n ? i.insertBefore(t, n) : i.appendChild(t);
      else if (a !== 4 && (t = t.child, t !== null)) for (Su(t, n, i), t = t.sibling; t !== null; ) Su(t, n, i), t = t.sibling;
    }
    var st = null, ln = false;
    function ir(t, n, i) {
      for (i = i.child; i !== null; ) lh(t, n, i), i = i.sibling;
    }
    function lh(t, n, i) {
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
          st !== null && (ln ? (t = st, i = i.stateNode, t.nodeType === 8 ? $a(t.parentNode, i) : t.nodeType === 1 && $a(t, i), Wo(t)) : $a(st, i.stateNode));
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
    function ah(t) {
      var n = t.updateQueue;
      if (n !== null) {
        t.updateQueue = null;
        var i = t.stateNode;
        i === null && (i = t.stateNode = new dy()), n.forEach(function(a) {
          var d = Sy.bind(null, t, a);
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
          lh(p, w, d), st = null, ln = false;
          var b = d.alternate;
          b !== null && (b.return = null), d.return = null;
        } catch (X) {
          Ye(d, n, X);
        }
      }
      if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) uh(n, t), n = n.sibling;
    }
    function uh(t, n) {
      var i = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (an(n, t), En(t), a & 4) {
            try {
              hi(3, t, t.return), Ys(3, t);
            } catch (fe) {
              Ye(t, t.return, fe);
            }
            try {
              hi(5, t, t.return);
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
            var p = t.memoizedProps, w = i !== null ? i.memoizedProps : p, M = t.type, b = t.updateQueue;
            if (t.updateQueue = null, b !== null) try {
              M === "input" && p.type === "radio" && p.name != null && ut(d, p), tn(M, w);
              var X = tn(M, p);
              for (w = 0; w < b.length; w += 2) {
                var re = b[w], ie = b[w + 1];
                re === "style" ? gn(d, ie) : re === "dangerouslySetInnerHTML" ? Mn(d, ie) : re === "children" ? en(d, ie) : z(d, re, ie, X);
              }
              switch (M) {
                case "input":
                  Me(d, p);
                  break;
                case "textarea":
                  Bt(d, p);
                  break;
                case "select":
                  var te = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var ue = p.value;
                  ue != null ? Ft(d, !!p.multiple, ue, false) : te !== !!p.multiple && (p.defaultValue != null ? Ft(d, !!p.multiple, p.defaultValue, true) : Ft(d, !!p.multiple, p.multiple ? [] : "", false));
              }
              d[ni] = p;
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
            Wo(n.containerInfo);
          } catch (fe) {
            Ye(t, t.return, fe);
          }
          break;
        case 4:
          an(n, t), En(t);
          break;
        case 13:
          an(n, t), En(t), d = t.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (Cu = Be())), a & 4 && ah(t);
          break;
        case 22:
          if (re = i !== null && i.memoizedState !== null, t.mode & 1 ? (ht = (X = ht) || re, an(n, t), ht = X) : an(n, t), En(t), a & 8192) {
            if (X = t.memoizedState !== null, (t.stateNode.isHidden = X) && !re && (t.mode & 1) !== 0) for (ce = t, re = t.child; re !== null; ) {
              for (ie = ce = re; ce !== null; ) {
                switch (te = ce, ue = te.child, te.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hi(4, te, te.return);
                    break;
                  case 1:
                    go(te, te.return);
                    var de = te.stateNode;
                    if (typeof de.componentWillUnmount == "function") {
                      a = te, i = te.return;
                      try {
                        n = a, de.props = n.memoizedProps, de.state = n.memoizedState, de.componentWillUnmount();
                      } catch (fe) {
                        Ye(a, i, fe);
                      }
                    }
                    break;
                  case 5:
                    go(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      fh(ie);
                      continue;
                    }
                }
                ue !== null ? (ue.return = te, ce = ue) : fh(ie);
              }
              re = re.sibling;
            }
            e: for (re = null, ie = t; ; ) {
              if (ie.tag === 5) {
                if (re === null) {
                  re = ie;
                  try {
                    d = ie.stateNode, X ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (M = ie.stateNode, b = ie.memoizedProps.style, w = b != null && b.hasOwnProperty("display") ? b.display : null, M.style.display = mn("display", w));
                  } catch (fe) {
                    Ye(t, t.return, fe);
                  }
                }
              } else if (ie.tag === 6) {
                if (re === null) try {
                  ie.stateNode.nodeValue = X ? "" : ie.memoizedProps;
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
                re === ie && (re = null), ie = ie.return;
              }
              re === ie && (re = null), ie.sibling.return = ie.return, ie = ie.sibling;
            }
          }
          break;
        case 19:
          an(n, t), En(t), a & 4 && ah(t);
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
              if (ih(i)) {
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
              var p = sh(t);
              Su(t, p, d);
              break;
            case 3:
            case 4:
              var w = a.stateNode.containerInfo, M = sh(t);
              xu(t, M, w);
              break;
            default:
              throw Error(o(161));
          }
        } catch (b) {
          Ye(t, t.return, b);
        }
        t.flags &= -3;
      }
      n & 4096 && (t.flags &= -4097);
    }
    function hy(t, n, i) {
      ce = t, ch(t);
    }
    function ch(t, n, i) {
      for (var a = (t.mode & 1) !== 0; ce !== null; ) {
        var d = ce, p = d.child;
        if (d.tag === 22 && a) {
          var w = d.memoizedState !== null || Ws;
          if (!w) {
            var M = d.alternate, b = M !== null && M.memoizedState !== null || ht;
            M = Ws;
            var X = ht;
            if (Ws = w, (ht = b) && !X) for (ce = d; ce !== null; ) w = ce, b = w.child, w.tag === 22 && w.memoizedState !== null ? hh(d) : b !== null ? (b.return = w, ce = b) : hh(d);
            for (; p !== null; ) ce = p, ch(p), p = p.sibling;
            ce = d, Ws = M, ht = X;
          }
          dh(t);
        } else (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d, ce = p) : dh(t);
      }
    }
    function dh(t) {
      for (; ce !== null; ) {
        var n = ce;
        if ((n.flags & 8772) !== 0) {
          var i = n.alternate;
          try {
            if ((n.flags & 8772) !== 0) switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ht || Ys(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !ht) if (i === null) a.componentDidMount();
                else {
                  var d = n.elementType === n.type ? i.memoizedProps : sn(n.type, i.memoizedProps);
                  a.componentDidUpdate(d, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
                var p = n.updateQueue;
                p !== null && ff(n, p, a);
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
                  ff(n, w, i);
                }
                break;
              case 5:
                var M = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = M;
                  var b = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      b.autoFocus && i.focus();
                      break;
                    case "img":
                      b.src && (i.src = b.src);
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
                  var X = n.alternate;
                  if (X !== null) {
                    var re = X.memoizedState;
                    if (re !== null) {
                      var ie = re.dehydrated;
                      ie !== null && Wo(ie);
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
          } catch (te) {
            Ye(n, n.return, te);
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
    function fh(t) {
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
    function hh(t) {
      for (; ce !== null; ) {
        var n = ce;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var i = n.return;
              try {
                Ys(4, n);
              } catch (b) {
                Ye(n, i, b);
              }
              break;
            case 1:
              var a = n.stateNode;
              if (typeof a.componentDidMount == "function") {
                var d = n.return;
                try {
                  a.componentDidMount();
                } catch (b) {
                  Ye(n, d, b);
                }
              }
              var p = n.return;
              try {
                wu(n);
              } catch (b) {
                Ye(n, p, b);
              }
              break;
            case 5:
              var w = n.return;
              try {
                wu(n);
              } catch (b) {
                Ye(n, w, b);
              }
          }
        } catch (b) {
          Ye(n, n.return, b);
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
    var py = Math.ceil, Xs = A.ReactCurrentDispatcher, Eu = A.ReactCurrentOwner, Xt = A.ReactCurrentBatchConfig, Ne = 0, ot = null, Ze = null, lt = 0, $t = 0, yo = er(0), et = 0, pi = null, Pr = 0, Gs = 0, ku = 0, mi = null, _t = null, Cu = 0, vo = 1 / 0, On = null, Ks = false, _u = null, sr = null, Qs = false, lr = null, Zs = 0, gi = 0, Nu = null, qs = -1, Js = 0;
    function wt() {
      return (Ne & 6) !== 0 ? Be() : qs !== -1 ? qs : qs = Be();
    }
    function ar(t) {
      return (t.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && lt !== 0 ? lt & -lt : Zg.transition !== null ? (Js === 0 && (Js = id()), Js) : (t = Ae, t !== 0 || (t = window.event, t = t === void 0 ? 16 : pd(t.type)), t);
    }
    function un(t, n, i, a) {
      if (50 < gi) throw gi = 0, Nu = null, Error(o(185));
      Bo(t, i, a), ((Ne & 2) === 0 || t !== ot) && (t === ot && ((Ne & 2) === 0 && (Gs |= i), et === 4 && ur(t, lt)), Nt(t, a), i === 1 && Ne === 0 && (n.mode & 1) === 0 && (vo = Be() + 500, Ms && nr()));
    }
    function Nt(t, n) {
      var i = t.callbackNode;
      Zm(t, n);
      var a = as(t, t === ot ? lt : 0);
      if (a === 0) i !== null && ts(i), t.callbackNode = null, t.callbackPriority = 0;
      else if (n = a & -a, t.callbackPriority !== n) {
        if (i != null && ts(i), n === 1) t.tag === 0 ? Qg(mh.bind(null, t)) : Jd(mh.bind(null, t)), Yg(function() {
          (Ne & 6) === 0 && nr();
        }), i = null;
        else {
          switch (sd(a)) {
            case 1:
              i = Lo;
              break;
            case 4:
              i = rs;
              break;
            case 16:
              i = Kr;
              break;
            case 536870912:
              i = is;
              break;
            default:
              i = Kr;
          }
          i = kh(i, ph.bind(null, t));
        }
        t.callbackPriority = n, t.callbackNode = i;
      }
    }
    function ph(t, n) {
      if (qs = -1, Js = 0, (Ne & 6) !== 0) throw Error(o(327));
      var i = t.callbackNode;
      if (wo() && t.callbackNode !== i) return null;
      var a = as(t, t === ot ? lt : 0);
      if (a === 0) return null;
      if ((a & 30) !== 0 || (a & t.expiredLanes) !== 0 || n) n = el(t, a);
      else {
        n = a;
        var d = Ne;
        Ne |= 2;
        var p = yh();
        (ot !== t || lt !== n) && (On = null, vo = Be() + 500, zr(t, n));
        do
          try {
            yy();
            break;
          } catch (M) {
            gh(t, M);
          }
        while (true);
        Ua(), Xs.current = p, Ne = d, Ze !== null ? n = 0 : (ot = null, lt = 0, n = et);
      }
      if (n !== 0) {
        if (n === 2 && (d = sa(t), d !== 0 && (a = d, n = Mu(t, d))), n === 1) throw i = pi, zr(t, 0), ur(t, a), Nt(t, Be()), i;
        if (n === 6) ur(t, a);
        else {
          if (d = t.current.alternate, (a & 30) === 0 && !my(d) && (n = el(t, a), n === 2 && (p = sa(t), p !== 0 && (a = p, n = Mu(t, p))), n === 1)) throw i = pi, zr(t, 0), ur(t, a), Nt(t, Be()), i;
          switch (t.finishedWork = d, t.finishedLanes = a, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Dr(t, _t, On);
              break;
            case 3:
              if (ur(t, a), (a & 130023424) === a && (n = Cu + 500 - Be(), 10 < n)) {
                if (as(t, 0) !== 0) break;
                if (d = t.suspendedLanes, (d & a) !== a) {
                  wt(), t.pingedLanes |= t.suspendedLanes & d;
                  break;
                }
                t.timeoutHandle = Pa(Dr.bind(null, t, _t, On), n);
                break;
              }
              Dr(t, _t, On);
              break;
            case 4:
              if (ur(t, a), (a & 4194240) === a) break;
              for (n = t.eventTimes, d = -1; 0 < a; ) {
                var w = 31 - nn(a);
                p = 1 << w, w = n[w], w > d && (d = w), a &= ~p;
              }
              if (a = d, a = Be() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * py(a / 1960)) - a, 10 < a) {
                t.timeoutHandle = Pa(Dr.bind(null, t, _t, On), a);
                break;
              }
              Dr(t, _t, On);
              break;
            case 5:
              Dr(t, _t, On);
              break;
            default:
              throw Error(o(329));
          }
        }
      }
      return Nt(t, Be()), t.callbackNode === i ? ph.bind(null, t) : null;
    }
    function Mu(t, n) {
      var i = mi;
      return t.current.memoizedState.isDehydrated && (zr(t, n).flags |= 256), t = el(t, n), t !== 2 && (n = _t, _t = i, n !== null && Iu(n)), t;
    }
    function Iu(t) {
      _t === null ? _t = t : _t.push.apply(_t, t);
    }
    function my(t) {
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
      for (n &= ~ku, n &= ~Gs, t.suspendedLanes |= n, t.pingedLanes &= ~n, t = t.expirationTimes; 0 < n; ) {
        var i = 31 - nn(n), a = 1 << i;
        t[i] = -1, n &= ~a;
      }
    }
    function mh(t) {
      if ((Ne & 6) !== 0) throw Error(o(327));
      wo();
      var n = as(t, 0);
      if ((n & 1) === 0) return Nt(t, Be()), null;
      var i = el(t, n);
      if (t.tag !== 0 && i === 2) {
        var a = sa(t);
        a !== 0 && (n = a, i = Mu(t, a));
      }
      if (i === 1) throw i = pi, zr(t, 0), ur(t, n), Nt(t, Be()), i;
      if (i === 6) throw Error(o(345));
      return t.finishedWork = t.current.alternate, t.finishedLanes = n, Dr(t, _t, On), Nt(t, Be()), null;
    }
    function bu(t, n) {
      var i = Ne;
      Ne |= 1;
      try {
        return t(n);
      } finally {
        Ne = i, Ne === 0 && (vo = Be() + 500, Ms && nr());
      }
    }
    function $r(t) {
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
    function zr(t, n) {
      t.finishedWork = null, t.finishedLanes = 0;
      var i = t.timeoutHandle;
      if (i !== -1 && (t.timeoutHandle = -1, Wg(i)), Ze !== null) for (i = Ze.return; i !== null; ) {
        var a = i;
        switch (Fa(a), a.tag) {
          case 1:
            a = a.type.childContextTypes, a != null && _s();
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
      if (ot = t, Ze = t = cr(t.current, null), lt = $t = n, et = 0, pi = null, ku = Gs = Pr = 0, _t = mi = null, Ar !== null) {
        for (n = 0; n < Ar.length; n++) if (i = Ar[n], a = i.interleaved, a !== null) {
          i.interleaved = null;
          var d = a.next, p = i.pending;
          if (p !== null) {
            var w = p.next;
            p.next = d, a.next = w;
          }
          i.pending = a;
        }
        Ar = null;
      }
      return t;
    }
    function gh(t, n) {
      do {
        var i = Ze;
        try {
          if (Ua(), Ls.current = js, Os) {
            for (var a = He.memoizedState; a !== null; ) {
              var d = a.queue;
              d !== null && (d.pending = null), a = a.next;
            }
            Os = false;
          }
          if (Rr = 0, rt = Je = He = null, ai = false, ui = 0, Eu.current = null, i === null || i.return === null) {
            et = 1, pi = n, Ze = null;
            break;
          }
          e: {
            var p = t, w = i.return, M = i, b = n;
            if (n = lt, M.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
              var X = b, re = M, ie = re.tag;
              if ((re.mode & 1) === 0 && (ie === 0 || ie === 11 || ie === 15)) {
                var te = re.alternate;
                te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
              }
              var ue = jf(w);
              if (ue !== null) {
                ue.flags &= -257, Hf(ue, w, M, p, n), ue.mode & 1 && Bf(p, X, n), n = ue, b = X;
                var de = n.updateQueue;
                if (de === null) {
                  var fe = /* @__PURE__ */ new Set();
                  fe.add(b), n.updateQueue = fe;
                } else de.add(b);
                break e;
              } else {
                if ((n & 1) === 0) {
                  Bf(p, X, n), Tu();
                  break e;
                }
                b = Error(o(426));
              }
            } else if (Fe && M.mode & 1) {
              var Ge = jf(w);
              if (Ge !== null) {
                (Ge.flags & 65536) === 0 && (Ge.flags |= 256), Hf(Ge, w, M, p, n), Ha(mo(b, M));
                break e;
              }
            }
            p = b = mo(b, M), et !== 4 && (et = 2), mi === null ? mi = [
              p
            ] : mi.push(p), p = w;
            do {
              switch (p.tag) {
                case 3:
                  p.flags |= 65536, n &= -n, p.lanes |= n;
                  var j = Of(p, b, n);
                  df(p, j);
                  break e;
                case 1:
                  M = b;
                  var R = p.type, U = p.stateNode;
                  if ((p.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (sr === null || !sr.has(U)))) {
                    p.flags |= 65536, n &= -n, p.lanes |= n;
                    var se = Ff(p, M, n);
                    df(p, se);
                    break e;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          wh(i);
        } catch (pe) {
          n = pe, Ze === i && i !== null && (Ze = i = i.return);
          continue;
        }
        break;
      } while (true);
    }
    function yh() {
      var t = Xs.current;
      return Xs.current = js, t === null ? js : t;
    }
    function Tu() {
      (et === 0 || et === 3 || et === 2) && (et = 4), ot === null || (Pr & 268435455) === 0 && (Gs & 268435455) === 0 || ur(ot, lt);
    }
    function el(t, n) {
      var i = Ne;
      Ne |= 2;
      var a = yh();
      (ot !== t || lt !== n) && (On = null, zr(t, n));
      do
        try {
          gy();
          break;
        } catch (d) {
          gh(t, d);
        }
      while (true);
      if (Ua(), Ne = i, Xs.current = a, Ze !== null) throw Error(o(261));
      return ot = null, lt = 0, et;
    }
    function gy() {
      for (; Ze !== null; ) vh(Ze);
    }
    function yy() {
      for (; Ze !== null && !ns(); ) vh(Ze);
    }
    function vh(t) {
      var n = Eh(t.alternate, t, $t);
      t.memoizedProps = t.pendingProps, n === null ? wh(t) : Ze = n, Eu.current = null;
    }
    function wh(t) {
      var n = t;
      do {
        var i = n.alternate;
        if (t = n.return, (n.flags & 32768) === 0) {
          if (i = uy(i, n, $t), i !== null) {
            Ze = i;
            return;
          }
        } else {
          if (i = cy(i, n), i !== null) {
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
    function Dr(t, n, i) {
      var a = Ae, d = Xt.transition;
      try {
        Xt.transition = null, Ae = 1, vy(t, n, i, a);
      } finally {
        Xt.transition = d, Ae = a;
      }
      return null;
    }
    function vy(t, n, i, a) {
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
      if (qm(t, p), t === ot && (Ze = ot = null, lt = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Qs || (Qs = true, kh(Kr, function() {
        return wo(), null;
      })), p = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || p) {
        p = Xt.transition, Xt.transition = null;
        var w = Ae;
        Ae = 1;
        var M = Ne;
        Ne |= 4, Eu.current = null, fy(t, i), uh(i, t), Og(Ta), ds = !!Aa, Ta = Aa = null, t.current = i, hy(i), oa(), Ne = M, Ae = w, Xt.transition = p;
      } else t.current = i;
      if (Qs && (Qs = false, lr = t, Zs = d), p = t.pendingLanes, p === 0 && (sr = null), Oo(i.stateNode), Nt(t, Be()), n !== null) for (a = t.onRecoverableError, i = 0; i < n.length; i++) d = n[i], a(d.value, {
        componentStack: d.stack,
        digest: d.digest
      });
      if (Ks) throw Ks = false, t = _u, _u = null, t;
      return (Zs & 1) !== 0 && t.tag !== 0 && wo(), p = t.pendingLanes, (p & 1) !== 0 ? t === Nu ? gi++ : (gi = 0, Nu = t) : gi = 0, nr(), null;
    }
    function wo() {
      if (lr !== null) {
        var t = sd(Zs), n = Xt.transition, i = Ae;
        try {
          if (Xt.transition = null, Ae = 16 > t ? 16 : t, lr === null) var a = false;
          else {
            if (t = lr, lr = null, Zs = 0, (Ne & 6) !== 0) throw Error(o(331));
            var d = Ne;
            for (Ne |= 4, ce = t.current; ce !== null; ) {
              var p = ce, w = p.child;
              if ((ce.flags & 16) !== 0) {
                var M = p.deletions;
                if (M !== null) {
                  for (var b = 0; b < M.length; b++) {
                    var X = M[b];
                    for (ce = X; ce !== null; ) {
                      var re = ce;
                      switch (re.tag) {
                        case 0:
                        case 11:
                        case 15:
                          hi(8, re, p);
                      }
                      var ie = re.child;
                      if (ie !== null) ie.return = re, ce = ie;
                      else for (; ce !== null; ) {
                        re = ce;
                        var te = re.sibling, ue = re.return;
                        if (oh(re), re === X) {
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
                    hi(9, p, p.return);
                }
                var j = p.sibling;
                if (j !== null) {
                  j.return = p.return, ce = j;
                  break e;
                }
                ce = p.return;
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
                      Ys(9, M);
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
    function xh(t, n, i) {
      n = mo(i, n), n = Of(t, n, 1), t = or(t, n, 1), n = wt(), t !== null && (Bo(t, 1, n), Nt(t, n));
    }
    function Ye(t, n, i) {
      if (t.tag === 3) xh(t, t, i);
      else for (; n !== null; ) {
        if (n.tag === 3) {
          xh(n, t, i);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (sr === null || !sr.has(a))) {
            t = mo(i, t), t = Ff(n, t, 1), n = or(n, t, 1), t = wt(), n !== null && (Bo(n, 1, t), Nt(n, t));
            break;
          }
        }
        n = n.return;
      }
    }
    function wy(t, n, i) {
      var a = t.pingCache;
      a !== null && a.delete(n), n = wt(), t.pingedLanes |= t.suspendedLanes & i, ot === t && (lt & i) === i && (et === 4 || et === 3 && (lt & 130023424) === lt && 500 > Be() - Cu ? zr(t, 0) : ku |= i), Nt(t, n);
    }
    function Sh(t, n) {
      n === 0 && ((t.mode & 1) === 0 ? n = 1 : (n = ls, ls <<= 1, (ls & 130023424) === 0 && (ls = 4194304)));
      var i = wt();
      t = zn(t, n), t !== null && (Bo(t, n, i), Nt(t, i));
    }
    function xy(t) {
      var n = t.memoizedState, i = 0;
      n !== null && (i = n.retryLane), Sh(t, i);
    }
    function Sy(t, n) {
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
      a !== null && a.delete(n), Sh(t, i);
    }
    var Eh;
    Eh = function(t, n, i) {
      if (t !== null) if (t.memoizedProps !== n.pendingProps || Et.current) Ct = true;
      else {
        if ((t.lanes & i) === 0 && (n.flags & 128) === 0) return Ct = false, ay(t, n, i);
        Ct = (t.flags & 131072) !== 0;
      }
      else Ct = false, Fe && (n.flags & 1048576) !== 0 && ef(n, bs, n.index);
      switch (n.lanes = 0, n.tag) {
        case 2:
          var a = n.type;
          Us(t, n), t = n.pendingProps;
          var d = so(n, ct.current);
          ho(n, i), d = tu(null, n, a, t, d, i);
          var p = nu();
          return n.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, kt(a) ? (p = true, Ns(n)) : p = false, n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Ga(n), d.updater = Hs, n.stateNode = d, d._reactInternals = n, au(n, a, t, i), n = fu(null, n, a, true, p, i)) : (n.tag = 0, Fe && p && Oa(n), vt(null, n, d, i), n = n.child), n;
        case 16:
          a = n.elementType;
          e: {
            switch (Us(t, n), t = n.pendingProps, d = a._init, a = d(a._payload), n.type = a, d = n.tag = ky(a), t = sn(a, t), d) {
              case 0:
                n = du(null, n, a, t, i);
                break e;
              case 1:
                n = Gf(null, n, a, t, i);
                break e;
              case 11:
                n = Vf(null, n, a, t, i);
                break e;
              case 14:
                n = Uf(null, n, a, sn(a.type, t), i);
                break e;
            }
            throw Error(o(306, a, ""));
          }
          return n;
        case 0:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), du(t, n, a, d, i);
        case 1:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), Gf(t, n, a, d, i);
        case 3:
          e: {
            if (Kf(n), t === null) throw Error(o(387));
            a = n.pendingProps, p = n.memoizedState, d = p.element, cf(t, n), zs(n, a, null, i);
            var w = n.memoizedState;
            if (a = w.element, p.isDehydrated) if (p = {
              element: a,
              isDehydrated: false,
              cache: w.cache,
              pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
              transitions: w.transitions
            }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
              d = mo(Error(o(423)), n), n = Qf(t, n, a, i, d);
              break e;
            } else if (a !== d) {
              d = mo(Error(o(424)), n), n = Qf(t, n, a, i, d);
              break e;
            } else for (Pt = Jn(n.stateNode.containerInfo.firstChild), Rt = n, Fe = true, on = null, i = af(n, null, a, i), n.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
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
          return hf(n), t === null && ja(n), a = n.type, d = n.pendingProps, p = t !== null ? t.memoizedProps : null, w = d.children, Ra(a, d) ? w = null : p !== null && Ra(a, p) && (n.flags |= 32), Xf(t, n), vt(t, n, w, i), n.child;
        case 6:
          return t === null && ja(n), null;
        case 13:
          return Zf(t, n, i);
        case 4:
          return Ka(n, n.stateNode.containerInfo), a = n.pendingProps, t === null ? n.child = co(n, null, a, i) : vt(t, n, a, i), n.child;
        case 11:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), Vf(t, n, a, d, i);
        case 7:
          return vt(t, n, n.pendingProps, i), n.child;
        case 8:
          return vt(t, n, n.pendingProps.children, i), n.child;
        case 12:
          return vt(t, n, n.pendingProps.children, i), n.child;
        case 10:
          e: {
            if (a = n.type._context, d = n.pendingProps, p = n.memoizedProps, w = d.value, Pe(Rs, a._currentValue), a._currentValue = w, p !== null) if (rn(p.value, w)) {
              if (p.children === d.children && !Et.current) {
                n = Ln(t, n, i);
                break e;
              }
            } else for (p = n.child, p !== null && (p.return = n); p !== null; ) {
              var M = p.dependencies;
              if (M !== null) {
                w = p.child;
                for (var b = M.firstContext; b !== null; ) {
                  if (b.context === a) {
                    if (p.tag === 1) {
                      b = Dn(-1, i & -i), b.tag = 2;
                      var X = p.updateQueue;
                      if (X !== null) {
                        X = X.shared;
                        var re = X.pending;
                        re === null ? b.next = b : (b.next = re.next, re.next = b), X.pending = b;
                      }
                    }
                    p.lanes |= i, b = p.alternate, b !== null && (b.lanes |= i), Ya(p.return, i, n), M.lanes |= i;
                    break;
                  }
                  b = b.next;
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
          return a = n.type, d = sn(a, n.pendingProps), d = sn(a.type, d), Uf(t, n, a, d, i);
        case 15:
          return Wf(t, n, n.type, n.pendingProps, i);
        case 17:
          return a = n.type, d = n.pendingProps, d = n.elementType === a ? d : sn(a, d), Us(t, n), n.tag = 1, kt(a) ? (t = true, Ns(n)) : t = false, ho(n, i), Df(n, a, d), au(n, a, d, i), fu(null, n, a, true, t, i);
        case 19:
          return Jf(t, n, i);
        case 22:
          return Yf(t, n, i);
      }
      throw Error(o(156, n.tag));
    };
    function kh(t, n) {
      return es(t, n);
    }
    function Ey(t, n, i, a) {
      this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Gt(t, n, i, a) {
      return new Ey(t, n, i, a);
    }
    function Ru(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function ky(t) {
      if (typeof t == "function") return Ru(t) ? 1 : 0;
      if (t != null) {
        if (t = t.$$typeof, t === G) return 11;
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
    function tl(t, n, i, a, d, p) {
      var w = 2;
      if (a = t, typeof t == "function") Ru(t) && (w = 1);
      else if (typeof t == "string") w = 5;
      else e: switch (t) {
        case J:
          return Lr(i.children, d, p, n);
        case W:
          w = 8, d |= 8;
          break;
        case Y:
          return t = Gt(12, i, n, d | 2), t.elementType = Y, t.lanes = p, t;
        case Z:
          return t = Gt(13, i, n, d), t.elementType = Z, t.lanes = p, t;
        case k:
          return t = Gt(19, i, n, d), t.elementType = k, t.lanes = p, t;
        case K:
          return nl(i, d, p, n);
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case Q:
              w = 10;
              break e;
            case ee:
              w = 9;
              break e;
            case G:
              w = 11;
              break e;
            case H:
              w = 14;
              break e;
            case L:
              w = 16, a = null;
              break e;
          }
          throw Error(o(130, t == null ? t : typeof t, ""));
      }
      return n = Gt(w, i, n, d), n.elementType = t, n.type = a, n.lanes = p, n;
    }
    function Lr(t, n, i, a) {
      return t = Gt(7, t, a, n), t.lanes = i, t;
    }
    function nl(t, n, i, a) {
      return t = Gt(22, t, a, n), t.elementType = K, t.lanes = i, t.stateNode = {
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
    function Cy(t, n, i, a, d) {
      this.tag = n, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = la(0), this.expirationTimes = la(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = la(0), this.identifierPrefix = a, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
    }
    function zu(t, n, i, a, d, p, w, M, b) {
      return t = new Cy(t, n, i, M, b), n === 1 ? (n = 1, p === true && (n |= 8)) : n = 0, p = Gt(3, null, null, n), t.current = p, p.stateNode = t, p.memoizedState = {
        element: a,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, Ga(p), t;
    }
    function _y(t, n, i) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: V,
        key: a == null ? null : "" + a,
        children: t,
        containerInfo: n,
        implementation: i
      };
    }
    function Ch(t) {
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
        if (kt(i)) return Zd(t, i, n);
      }
      return n;
    }
    function _h(t, n, i, a, d, p, w, M, b) {
      return t = zu(i, a, true, t, d, p, w, M, b), t.context = Ch(null), i = t.current, a = wt(), d = ar(i), p = Dn(a, d), p.callback = n ?? null, or(i, p, d), t.current.lanes = d, Bo(t, d, a), Nt(t, a), t;
    }
    function rl(t, n, i, a) {
      var d = n.current, p = wt(), w = ar(d);
      return i = Ch(i), n.context === null ? n.context = i : n.pendingContext = i, n = Dn(p, w), n.payload = {
        element: t
      }, a = a === void 0 ? null : a, a !== null && (n.callback = a), t = or(d, n, w), t !== null && (un(t, d, w, p), $s(t, d, w)), w;
    }
    function ol(t) {
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
        var i = t.retryLane;
        t.retryLane = i !== 0 && i < n ? i : n;
      }
    }
    function Du(t, n) {
      Nh(t, n), (t = t.alternate) && Nh(t, n);
    }
    function Ny() {
      return null;
    }
    var Mh = typeof reportError == "function" ? reportError : function(t) {
      console.error(t);
    };
    function Lu(t) {
      this._internalRoot = t;
    }
    il.prototype.render = Lu.prototype.render = function(t) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      rl(t, n, null, null);
    }, il.prototype.unmount = Lu.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var n = t.containerInfo;
        $r(function() {
          rl(null, t, null, null);
        }), n[Tn] = null;
      }
    };
    function il(t) {
      this._internalRoot = t;
    }
    il.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var n = ud();
        t = {
          blockedOn: null,
          target: t,
          priority: n
        };
        for (var i = 0; i < Qn.length && n !== 0 && n < Qn[i].priority; i++) ;
        Qn.splice(i, 0, t), i === 0 && fd(t);
      }
    };
    function Ou(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function sl(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
    }
    function Ih() {
    }
    function My(t, n, i, a, d) {
      if (d) {
        if (typeof a == "function") {
          var p = a;
          a = function() {
            var X = ol(w);
            p.call(X);
          };
        }
        var w = _h(n, a, t, 0, null, false, false, "", Ih);
        return t._reactRootContainer = w, t[Tn] = w.current, ei(t.nodeType === 8 ? t.parentNode : t), $r(), w;
      }
      for (; d = t.lastChild; ) t.removeChild(d);
      if (typeof a == "function") {
        var M = a;
        a = function() {
          var X = ol(b);
          M.call(X);
        };
      }
      var b = zu(t, 0, false, null, null, false, false, "", Ih);
      return t._reactRootContainer = b, t[Tn] = b.current, ei(t.nodeType === 8 ? t.parentNode : t), $r(function() {
        rl(n, b, i, a);
      }), b;
    }
    function ll(t, n, i, a, d) {
      var p = i._reactRootContainer;
      if (p) {
        var w = p;
        if (typeof d == "function") {
          var M = d;
          d = function() {
            var b = ol(w);
            M.call(b);
          };
        }
        rl(n, w, t, d);
      } else w = My(i, n, t, d, a);
      return ol(w);
    }
    ld = function(t) {
      switch (t.tag) {
        case 3:
          var n = t.stateNode;
          if (n.current.memoizedState.isDehydrated) {
            var i = Fo(n.pendingLanes);
            i !== 0 && (aa(n, i | 1), Nt(n, Be()), (Ne & 6) === 0 && (vo = Be() + 500, nr()));
          }
          break;
        case 13:
          $r(function() {
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
    }, ad = function(t) {
      if (t.tag === 13) {
        var n = ar(t), i = zn(t, n);
        if (i !== null) {
          var a = wt();
          un(i, t, n, a);
        }
        Du(t, n);
      }
    }, ud = function() {
      return Ae;
    }, cd = function(t, n) {
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
                var d = Cs(a);
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
    }, Yi = bu, Xi = $r;
    var Iy = {
      usingClientEntryPoint: false,
      Events: [
        ri,
        oo,
        Cs,
        Ui,
        Wi,
        bu
      ]
    }, yi = {
      findFiberByHostInstance: Nr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom"
    }, by = {
      bundleType: yi.bundleType,
      version: yi.version,
      rendererPackageName: yi.rendererPackageName,
      rendererConfig: yi.rendererConfig,
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
        return t = qi(t), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: yi.findFiberByHostInstance || Ny,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!al.isDisabled && al.supportsFiber) try {
        Qr = al.inject(by), Ht = al;
      } catch {
      }
    }
    return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iy, Mt.createPortal = function(t, n) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ou(n)) throw Error(o(200));
      return _y(t, n, null, i);
    }, Mt.createRoot = function(t, n) {
      if (!Ou(t)) throw Error(o(299));
      var i = false, a = "", d = Mh;
      return n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), n = zu(t, 1, false, null, null, i, false, a, d), t[Tn] = n.current, ei(t.nodeType === 8 ? t.parentNode : t), new Lu(n);
    }, Mt.findDOMNode = function(t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var n = t._reactInternals;
      if (n === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
      return t = qi(n), t = t === null ? null : t.stateNode, t;
    }, Mt.flushSync = function(t) {
      return $r(t);
    }, Mt.hydrate = function(t, n, i) {
      if (!sl(n)) throw Error(o(200));
      return ll(null, t, n, true, i);
    }, Mt.hydrateRoot = function(t, n, i) {
      if (!Ou(t)) throw Error(o(405));
      var a = i != null && i.hydratedSources || null, d = false, p = "", w = Mh;
      if (i != null && (i.unstable_strictMode === true && (d = true), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (w = i.onRecoverableError)), n = _h(n, null, t, 1, i ?? null, d, false, p, w), t[Tn] = n.current, ei(t), a) for (t = 0; t < a.length; t++) i = a[t], d = i._getVersion, d = d(i._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [
        i,
        d
      ] : n.mutableSourceEagerHydrationData.push(i, d);
      return new il(n);
    }, Mt.render = function(t, n, i) {
      if (!sl(n)) throw Error(o(200));
      return ll(null, t, n, false, i);
    }, Mt.unmountComponentAtNode = function(t) {
      if (!sl(t)) throw Error(o(40));
      return t._reactRootContainer ? ($r(function() {
        ll(null, null, t, false, function() {
          t._reactRootContainer = null, t[Tn] = null;
        });
      }), true) : false;
    }, Mt.unstable_batchedUpdates = bu, Mt.unstable_renderSubtreeIntoContainer = function(t, n, i, a) {
      if (!sl(i)) throw Error(o(200));
      if (t == null || t._reactInternals === void 0) throw Error(o(38));
      return ll(t, n, i, false, a);
    }, Mt.version = "18.3.1-next-f1338f8080-20240426", Mt;
  }
  var Dh;
  function c0() {
    if (Dh) return ju.exports;
    Dh = 1;
    function e() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
    }
    return e(), ju.exports = Dy(), ju.exports;
  }
  var Lh;
  function Ly() {
    if (Lh) return ul;
    Lh = 1;
    var e = c0();
    return ul.createRoot = e.createRoot, ul.hydrateRoot = e.hydrateRoot, ul;
  }
  var Oy = Ly();
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
  var Oh;
  function Fy() {
    if (Oh) return Xu;
    Oh = 1;
    var e = Oi();
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
      }), S = E[0].inst, N = E[1];
      return u(function() {
        S.value = x, S.getSnapshot = v, m(S) && N({
          inst: S
        });
      }, [
        y,
        x,
        v
      ]), l(function() {
        return m(S) && N({
          inst: S
        }), y(function() {
          m(S) && N({
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
  var Fh;
  function By() {
    return Fh || (Fh = 1, Yu.exports = Fy()), Yu.exports;
  }
  var Bh;
  function jy() {
    if (Bh) return Wu;
    Bh = 1;
    var e = Oi(), r = By();
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
        function C(V) {
          if (!P) {
            if (P = true, z = V, V = v(V), x !== void 0 && S.hasValue) {
              var J = S.value;
              if (x(J, V)) return A = J;
            }
            return A = V;
          }
          if (J = A, s(z, V)) return J;
          var W = v(V);
          return x !== void 0 && x(J, W) ? (z = V, J) : (z = V, A = W);
        }
        var P = false, z, A, O = y === void 0 ? null : y;
        return [
          function() {
            return C(g());
          },
          O === null ? void 0 : function() {
            return C(O());
          }
        ];
      }, [
        g,
        y,
        v,
        x
      ]);
      var N = l(h, E[0], E[1]);
      return c(function() {
        S.hasValue = true, S.value = N;
      }, [
        N
      ]), m(N), N;
    }, Wu;
  }
  var jh;
  function Hy() {
    return jh || (jh = 1, Uu.exports = jy()), Uu.exports;
  }
  var Vy = Hy();
  const Uy = u0(Vy), Wy = {}, Hh = (e) => {
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
        (Wy ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), o.clear();
      }
    }, h = r = e(s, l, m);
    return m;
  }, Yy = (e) => e ? Hh(e) : Hh, { useDebugValue: Xy } = q, { useSyncExternalStoreWithSelector: Gy } = Uy, Ky = (e) => e;
  function d0(e, r = Ky, o) {
    const s = Gy(e.subscribe, e.getState, e.getServerState || e.getInitialState, r, o);
    return Xy(s), s;
  }
  const Vh = (e, r) => {
    const o = Yy(e), s = (l, u = r) => d0(o, l, u);
    return Object.assign(s, o), s;
  }, Qy = (e, r) => e ? Vh(e, r) : Vh;
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
  var Zy = {
    value: () => {
    }
  };
  function Wl() {
    for (var e = 0, r = arguments.length, o = {}, s; e < r; ++e) {
      if (!(s = arguments[e] + "") || s in o || /[\s.]/.test(s)) throw new Error("illegal type: " + s);
      o[s] = [];
    }
    return new El(o);
  }
  function El(e) {
    this._ = e;
  }
  function qy(e, r) {
    return e.trim().split(/^|\s+/).map(function(o) {
      var s = "", l = o.indexOf(".");
      if (l >= 0 && (s = o.slice(l + 1), o = o.slice(0, l)), o && !r.hasOwnProperty(o)) throw new Error("unknown type: " + o);
      return {
        type: o,
        name: s
      };
    });
  }
  El.prototype = Wl.prototype = {
    constructor: El,
    on: function(e, r) {
      var o = this._, s = qy(e + "", o), l, u = -1, c = s.length;
      if (arguments.length < 2) {
        for (; ++u < c; ) if ((l = (e = s[u]).type) && (l = Jy(o[l], e.name))) return l;
        return;
      }
      if (r != null && typeof r != "function") throw new Error("invalid callback: " + r);
      for (; ++u < c; ) if (l = (e = s[u]).type) o[l] = Uh(o[l], e.name, r);
      else if (r == null) for (l in o) o[l] = Uh(o[l], e.name, null);
      return this;
    },
    copy: function() {
      var e = {}, r = this._;
      for (var o in r) e[o] = r[o].slice();
      return new El(e);
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
  function Jy(e, r) {
    for (var o = 0, s = e.length, l; o < s; ++o) if ((l = e[o]).name === r) return l.value;
  }
  function Uh(e, r, o) {
    for (var s = 0, l = e.length; s < l; ++s) if (e[s].name === r) {
      e[s] = Zy, e = e.slice(0, s).concat(e.slice(s + 1));
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
  function Yl(e) {
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
  function f0(e) {
    var r = Yl(e);
    return (r.local ? t1 : e1)(r);
  }
  function n1() {
  }
  function $c(e) {
    return e == null ? n1 : function() {
      return this.querySelector(e);
    };
  }
  function r1(e) {
    typeof e != "function" && (e = $c(e));
    for (var r = this._groups, o = r.length, s = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = s[l] = new Array(c), m, h, g = 0; g < c; ++g) (m = u[g]) && (h = e.call(m, m.__data__, g, u)) && ("__data__" in m && (h.__data__ = m.__data__), f[g] = h);
    return new Ot(s, this._parents);
  }
  function o1(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function i1() {
    return [];
  }
  function h0(e) {
    return e == null ? i1 : function() {
      return this.querySelectorAll(e);
    };
  }
  function s1(e) {
    return function() {
      return o1(e.apply(this, arguments));
    };
  }
  function l1(e) {
    typeof e == "function" ? e = s1(e) : e = h0(e);
    for (var r = this._groups, o = r.length, s = [], l = [], u = 0; u < o; ++u) for (var c = r[u], f = c.length, m, h = 0; h < f; ++h) (m = c[h]) && (s.push(e.call(m, m.__data__, h, c)), l.push(m));
    return new Ot(s, l);
  }
  function p0(e) {
    return function() {
      return this.matches(e);
    };
  }
  function m0(e) {
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
    return this.select(e == null ? c1 : u1(typeof e == "function" ? e : m0(e)));
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
    return this.selectAll(e == null ? h1 : p1(typeof e == "function" ? e : m0(e)));
  }
  function g1(e) {
    typeof e != "function" && (e = p0(e));
    for (var r = this._groups, o = r.length, s = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = s[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && f.push(m);
    return new Ot(s, this._parents);
  }
  function g0(e) {
    return new Array(e.length);
  }
  function y1() {
    return new Ot(this._enter || this._groups.map(g0), this._parents);
  }
  function Al(e, r) {
    this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = r;
  }
  Al.prototype = {
    constructor: Al,
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
  function w1(e, r, o, s, l, u) {
    for (var c = 0, f, m = r.length, h = u.length; c < h; ++c) (f = r[c]) ? (f.__data__ = u[c], s[c] = f) : o[c] = new Al(e, u[c]);
    for (; c < m; ++c) (f = r[c]) && (l[c] = f);
  }
  function x1(e, r, o, s, l, u, c) {
    var f, m, h = /* @__PURE__ */ new Map(), g = r.length, y = u.length, v = new Array(g), x;
    for (f = 0; f < g; ++f) (m = r[f]) && (v[f] = x = c.call(m, m.__data__, f, r) + "", h.has(x) ? l[f] = m : h.set(x, m));
    for (f = 0; f < y; ++f) x = c.call(e, u[f], f, u) + "", (m = h.get(x)) ? (s[f] = m, m.__data__ = u[f], h.delete(x)) : o[f] = new Al(e, u[f]);
    for (f = 0; f < g; ++f) (m = r[f]) && h.get(v[f]) === m && (l[f] = m);
  }
  function S1(e) {
    return e.__data__;
  }
  function E1(e, r) {
    if (!arguments.length) return Array.from(this, S1);
    var o = r ? x1 : w1, s = this._parents, l = this._groups;
    typeof e != "function" && (e = v1(e));
    for (var u = l.length, c = new Array(u), f = new Array(u), m = new Array(u), h = 0; h < u; ++h) {
      var g = s[h], y = l[h], v = y.length, x = k1(e.call(g, g && g.__data__, h, s)), E = x.length, S = f[h] = new Array(E), N = c[h] = new Array(E), C = m[h] = new Array(v);
      o(g, y, S, N, C, x, r);
      for (var P = 0, z = 0, A, O; P < E; ++P) if (A = S[P]) {
        for (P >= z && (z = P + 1); !(O = N[z]) && ++z < E; ) ;
        A._next = O || null;
      }
    }
    return c = new Ot(c, s), c._enter = f, c._exit = m, c;
  }
  function k1(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
  }
  function C1() {
    return new Ot(this._exit || this._groups.map(g0), this._parents);
  }
  function _1(e, r, o) {
    var s = this.enter(), l = this, u = this.exit();
    return typeof e == "function" ? (s = e(s), s && (s = s.selection())) : s = s.append(e + ""), r != null && (l = r(l), l && (l = l.selection())), o == null ? u.remove() : o(u), s && l ? s.merge(l).order() : l;
  }
  function N1(e) {
    for (var r = e.selection ? e.selection() : e, o = this._groups, s = r._groups, l = o.length, u = s.length, c = Math.min(l, u), f = new Array(l), m = 0; m < c; ++m) for (var h = o[m], g = s[m], y = h.length, v = f[m] = new Array(y), x, E = 0; E < y; ++E) (x = h[E] || g[E]) && (v[E] = x);
    for (; m < l; ++m) f[m] = o[m];
    return new Ot(f, this._parents);
  }
  function M1() {
    for (var e = this._groups, r = -1, o = e.length; ++r < o; ) for (var s = e[r], l = s.length - 1, u = s[l], c; --l >= 0; ) (c = s[l]) && (u && c.compareDocumentPosition(u) ^ 4 && u.parentNode.insertBefore(c, u), u = c);
    return this;
  }
  function I1(e) {
    e || (e = b1);
    function r(y, v) {
      return y && v ? e(y.__data__, v.__data__) : !y - !v;
    }
    for (var o = this._groups, s = o.length, l = new Array(s), u = 0; u < s; ++u) {
      for (var c = o[u], f = c.length, m = l[u] = new Array(f), h, g = 0; g < f; ++g) (h = c[g]) && (m[g] = h);
      m.sort(r);
    }
    return new Ot(l, this._parents).order();
  }
  function b1(e, r) {
    return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
  }
  function A1() {
    var e = arguments[0];
    return arguments[0] = this, e.apply(null, arguments), this;
  }
  function T1() {
    return Array.from(this);
  }
  function R1() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var s = e[r], l = 0, u = s.length; l < u; ++l) {
      var c = s[l];
      if (c) return c;
    }
    return null;
  }
  function P1() {
    let e = 0;
    for (const r of this) ++e;
    return e;
  }
  function $1() {
    return !this.node();
  }
  function z1(e) {
    for (var r = this._groups, o = 0, s = r.length; o < s; ++o) for (var l = r[o], u = 0, c = l.length, f; u < c; ++u) (f = l[u]) && e.call(f, f.__data__, u, l);
    return this;
  }
  function D1(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function L1(e) {
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
    var o = Yl(e);
    if (arguments.length < 2) {
      var s = this.node();
      return o.local ? s.getAttributeNS(o.space, o.local) : s.getAttribute(o);
    }
    return this.each((r == null ? o.local ? L1 : D1 : typeof r == "function" ? o.local ? j1 : B1 : o.local ? F1 : O1)(o, r));
  }
  function y0(e) {
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
      var s = r.apply(this, arguments);
      s == null ? this.style.removeProperty(e) : this.style.setProperty(e, s, o);
    };
  }
  function Y1(e, r, o) {
    return arguments.length > 1 ? this.each((r == null ? V1 : typeof r == "function" ? W1 : U1)(e, r, o ?? "")) : Io(this.node(), e);
  }
  function Io(e, r) {
    return e.style.getPropertyValue(r) || y0(e).getComputedStyle(e, null).getPropertyValue(r);
  }
  function X1(e) {
    return function() {
      delete this[e];
    };
  }
  function G1(e, r) {
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
    return arguments.length > 1 ? this.each((r == null ? X1 : typeof r == "function" ? K1 : G1)(e, r)) : this.node()[e];
  }
  function v0(e) {
    return e.trim().split(/^|\s+/);
  }
  function zc(e) {
    return e.classList || new w0(e);
  }
  function w0(e) {
    this._node = e, this._names = v0(e.getAttribute("class") || "");
  }
  w0.prototype = {
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
  function x0(e, r) {
    for (var o = zc(e), s = -1, l = r.length; ++s < l; ) o.add(r[s]);
  }
  function S0(e, r) {
    for (var o = zc(e), s = -1, l = r.length; ++s < l; ) o.remove(r[s]);
  }
  function Z1(e) {
    return function() {
      x0(this, e);
    };
  }
  function q1(e) {
    return function() {
      S0(this, e);
    };
  }
  function J1(e, r) {
    return function() {
      (r.apply(this, arguments) ? x0 : S0)(this, e);
    };
  }
  function ev(e, r) {
    var o = v0(e + "");
    if (arguments.length < 2) {
      for (var s = zc(this.node()), l = -1, u = o.length; ++l < u; ) if (!s.contains(o[l])) return false;
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
  function iv() {
    this.innerHTML = "";
  }
  function sv(e) {
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
    return arguments.length ? this.each(e == null ? iv : (typeof e == "function" ? lv : sv)(e)) : this.node().innerHTML;
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
    var r = typeof e == "function" ? e : f0(e);
    return this.select(function() {
      return this.appendChild(r.apply(this, arguments));
    });
  }
  function pv() {
    return null;
  }
  function mv(e, r) {
    var o = typeof e == "function" ? e : f0(e), s = r == null ? pv : typeof r == "function" ? r : $c(r);
    return this.select(function() {
      return this.insertBefore(o.apply(this, arguments), s.apply(this, arguments) || null);
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
  function Ev(e) {
    return function(r) {
      e.call(this, r, this.__data__);
    };
  }
  function kv(e) {
    return e.trim().split(/^|\s+/).map(function(r) {
      var o = "", s = r.indexOf(".");
      return s >= 0 && (o = r.slice(s + 1), r = r.slice(0, s)), {
        type: r,
        name: o
      };
    });
  }
  function Cv(e) {
    return function() {
      var r = this.__on;
      if (r) {
        for (var o = 0, s = -1, l = r.length, u; o < l; ++o) u = r[o], (!e.type || u.type === e.type) && u.name === e.name ? this.removeEventListener(u.type, u.listener, u.options) : r[++s] = u;
        ++s ? r.length = s : delete this.__on;
      }
    };
  }
  function _v(e, r, o) {
    return function() {
      var s = this.__on, l, u = Ev(r);
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
  function Nv(e, r, o) {
    var s = kv(e + ""), l, u = s.length, c;
    if (arguments.length < 2) {
      var f = this.node().__on;
      if (f) {
        for (var m = 0, h = f.length, g; m < h; ++m) for (l = 0, g = f[m]; l < u; ++l) if ((c = s[l]).type === g.type && c.name === g.name) return g.value;
      }
      return;
    }
    for (f = r ? _v : Cv, l = 0; l < u; ++l) this.each(f(s[l], r, o));
    return this;
  }
  function E0(e, r, o) {
    var s = y0(e), l = s.CustomEvent;
    typeof l == "function" ? l = new l(r, o) : (l = s.document.createEvent("Event"), o ? (l.initEvent(r, o.bubbles, o.cancelable), l.detail = o.detail) : l.initEvent(r, false, false)), e.dispatchEvent(l);
  }
  function Mv(e, r) {
    return function() {
      return E0(this, e, r);
    };
  }
  function Iv(e, r) {
    return function() {
      return E0(this, e, r.apply(this, arguments));
    };
  }
  function bv(e, r) {
    return this.each((typeof r == "function" ? Iv : Mv)(e, r));
  }
  function* Av() {
    for (var e = this._groups, r = 0, o = e.length; r < o; ++r) for (var s = e[r], l = 0, u = s.length, c; l < u; ++l) (c = s[l]) && (yield c);
  }
  var k0 = [
    null
  ];
  function Ot(e, r) {
    this._groups = e, this._parents = r;
  }
  function Fi() {
    return new Ot([
      [
        document.documentElement
      ]
    ], k0);
  }
  function Tv() {
    return this;
  }
  Ot.prototype = Fi.prototype = {
    constructor: Ot,
    select: r1,
    selectAll: l1,
    selectChild: d1,
    selectChildren: m1,
    filter: g1,
    data: E1,
    enter: y1,
    exit: C1,
    join: _1,
    merge: N1,
    selection: Tv,
    order: M1,
    sort: I1,
    call: A1,
    nodes: T1,
    node: R1,
    size: P1,
    empty: $1,
    each: z1,
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
    [Symbol.iterator]: Av
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
    ], k0);
  }
  function Rv(e) {
    let r;
    for (; r = e.sourceEvent; ) e = r;
    return e;
  }
  function cn(e, r) {
    if (e = Rv(e), r === void 0 && (r = e.currentTarget), r) {
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
  const Pv = {
    passive: false
  }, Ii = {
    capture: true,
    passive: false
  };
  function Gu(e) {
    e.stopImmediatePropagation();
  }
  function _o(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function C0(e) {
    var r = e.document.documentElement, o = Qt(e).on("dragstart.drag", _o, Ii);
    "onselectstart" in r ? o.on("selectstart.drag", _o, Ii) : (r.__noselect = r.style.MozUserSelect, r.style.MozUserSelect = "none");
  }
  function _0(e, r) {
    var o = e.document.documentElement, s = Qt(e).on("dragstart.drag", null);
    r && (s.on("click.drag", _o, Ii), setTimeout(function() {
      s.on("click.drag", null);
    }, 0)), "onselectstart" in o ? s.on("selectstart.drag", null) : (o.style.MozUserSelect = o.__noselect, delete o.__noselect);
  }
  const cl = (e) => () => e;
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
  function $v(e) {
    return !e.ctrlKey && !e.button;
  }
  function zv() {
    return this.parentNode;
  }
  function Dv(e, r) {
    return r ?? {
      x: e.x,
      y: e.y
    };
  }
  function Lv() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Ov() {
    var e = $v, r = zv, o = Dv, s = Lv, l = {}, u = Wl("start", "drag", "end"), c = 0, f, m, h, g, y = 0;
    function v(A) {
      A.on("mousedown.drag", x).filter(s).on("touchstart.drag", N).on("touchmove.drag", C, Pv).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function x(A, O) {
      if (!(g || !e.call(this, A, O))) {
        var V = z(this, r.call(this, A, O), A, O, "mouse");
        V && (Qt(A.view).on("mousemove.drag", E, Ii).on("mouseup.drag", S, Ii), C0(A.view), Gu(A), h = false, f = A.clientX, m = A.clientY, V("start", A));
      }
    }
    function E(A) {
      if (_o(A), !h) {
        var O = A.clientX - f, V = A.clientY - m;
        h = O * O + V * V > y;
      }
      l.mouse("drag", A);
    }
    function S(A) {
      Qt(A.view).on("mousemove.drag mouseup.drag", null), _0(A.view, h), _o(A), l.mouse("end", A);
    }
    function N(A, O) {
      if (e.call(this, A, O)) {
        var V = A.changedTouches, J = r.call(this, A, O), W = V.length, Y, Q;
        for (Y = 0; Y < W; ++Y) (Q = z(this, J, A, O, V[Y].identifier, V[Y])) && (Gu(A), Q("start", A, V[Y]));
      }
    }
    function C(A) {
      var O = A.changedTouches, V = O.length, J, W;
      for (J = 0; J < V; ++J) (W = l[O[J].identifier]) && (_o(A), W("drag", A, O[J]));
    }
    function P(A) {
      var O = A.changedTouches, V = O.length, J, W;
      for (g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, 500), J = 0; J < V; ++J) (W = l[O[J].identifier]) && (Gu(A), W("end", A, O[J]));
    }
    function z(A, O, V, J, W, Y) {
      var Q = u.copy(), ee = cn(Y || V, O), G, Z, k;
      if ((k = o.call(A, new uc("beforestart", {
        sourceEvent: V,
        target: v,
        identifier: W,
        active: c,
        x: ee[0],
        y: ee[1],
        dx: 0,
        dy: 0,
        dispatch: Q
      }), J)) != null) return G = k.x - ee[0] || 0, Z = k.y - ee[1] || 0, function H(L, K, B) {
        var T = ee, F;
        switch (L) {
          case "start":
            l[W] = H, F = c++;
            break;
          case "end":
            delete l[W], --c;
          case "drag":
            ee = cn(B || K, O), F = c;
            break;
        }
        Q.call(L, A, new uc(L, {
          sourceEvent: K,
          subject: k,
          target: v,
          identifier: W,
          active: F,
          x: ee[0] + G,
          y: ee[1] + Z,
          dx: ee[0] - T[0],
          dy: ee[1] - T[1],
          dispatch: Q
        }), J);
      };
    }
    return v.filter = function(A) {
      return arguments.length ? (e = typeof A == "function" ? A : cl(!!A), v) : e;
    }, v.container = function(A) {
      return arguments.length ? (r = typeof A == "function" ? A : cl(A), v) : r;
    }, v.subject = function(A) {
      return arguments.length ? (o = typeof A == "function" ? A : cl(A), v) : o;
    }, v.touchable = function(A) {
      return arguments.length ? (s = typeof A == "function" ? A : cl(!!A), v) : s;
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
  function N0(e, r) {
    var o = Object.create(e.prototype);
    for (var s in r) o[s] = r[s];
    return o;
  }
  function Bi() {
  }
  var bi = 0.7, Tl = 1 / bi, No = "\\s*([+-]?\\d+)\\s*", Ai = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fv = /^#([0-9a-f]{3,8})$/, Bv = new RegExp(`^rgb\\(${No},${No},${No}\\)$`), jv = new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`), Hv = new RegExp(`^rgba\\(${No},${No},${No},${Ai}\\)$`), Vv = new RegExp(`^rgba\\(${kn},${kn},${kn},${Ai}\\)$`), Uv = new RegExp(`^hsl\\(${Ai},${kn},${kn}\\)$`), Wv = new RegExp(`^hsla\\(${Ai},${kn},${kn},${Ai}\\)$`), Yh = {
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
  Dc(Bi, Ti, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: Xh,
    formatHex: Xh,
    formatHex8: Yv,
    formatHsl: Xv,
    formatRgb: Gh,
    toString: Gh
  });
  function Xh() {
    return this.rgb().formatHex();
  }
  function Yv() {
    return this.rgb().formatHex8();
  }
  function Xv() {
    return M0(this).formatHsl();
  }
  function Gh() {
    return this.rgb().formatRgb();
  }
  function Ti(e) {
    var r, o;
    return e = (e + "").trim().toLowerCase(), (r = Fv.exec(e)) ? (o = r[1].length, r = parseInt(r[1], 16), o === 6 ? Kh(r) : o === 3 ? new bt(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : o === 8 ? dl(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : o === 4 ? dl(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Bv.exec(e)) ? new bt(r[1], r[2], r[3], 1) : (r = jv.exec(e)) ? new bt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Hv.exec(e)) ? dl(r[1], r[2], r[3], r[4]) : (r = Vv.exec(e)) ? dl(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Uv.exec(e)) ? qh(r[1], r[2] / 100, r[3] / 100, 1) : (r = Wv.exec(e)) ? qh(r[1], r[2] / 100, r[3] / 100, r[4]) : Yh.hasOwnProperty(e) ? Kh(Yh[e]) : e === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
  }
  function Kh(e) {
    return new bt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
  }
  function dl(e, r, o, s) {
    return s <= 0 && (e = r = o = NaN), new bt(e, r, o, s);
  }
  function Gv(e) {
    return e instanceof Bi || (e = Ti(e)), e ? (e = e.rgb(), new bt(e.r, e.g, e.b, e.opacity)) : new bt();
  }
  function cc(e, r, o, s) {
    return arguments.length === 1 ? Gv(e) : new bt(e, r, o, s ?? 1);
  }
  function bt(e, r, o, s) {
    this.r = +e, this.g = +r, this.b = +o, this.opacity = +s;
  }
  Dc(bt, cc, N0(Bi, {
    brighter(e) {
      return e = e == null ? Tl : Math.pow(Tl, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? bi : Math.pow(bi, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new bt(jr(this.r), jr(this.g), jr(this.b), Rl(this.opacity));
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
    return `#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}`;
  }
  function Kv() {
    return `#${Fr(this.r)}${Fr(this.g)}${Fr(this.b)}${Fr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function Zh() {
    const e = Rl(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${jr(this.r)}, ${jr(this.g)}, ${jr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
  }
  function Rl(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function jr(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function Fr(e) {
    return e = jr(e), (e < 16 ? "0" : "") + e.toString(16);
  }
  function qh(e, r, o, s) {
    return s <= 0 ? e = r = o = NaN : o <= 0 || o >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new dn(e, r, o, s);
  }
  function M0(e) {
    if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
    if (e instanceof Bi || (e = Ti(e)), !e) return new dn();
    if (e instanceof dn) return e;
    e = e.rgb();
    var r = e.r / 255, o = e.g / 255, s = e.b / 255, l = Math.min(r, o, s), u = Math.max(r, o, s), c = NaN, f = u - l, m = (u + l) / 2;
    return f ? (r === u ? c = (o - s) / f + (o < s) * 6 : o === u ? c = (s - r) / f + 2 : c = (r - o) / f + 4, f /= m < 0.5 ? u + l : 2 - u - l, c *= 60) : f = m > 0 && m < 1 ? 0 : c, new dn(c, f, m, e.opacity);
  }
  function Qv(e, r, o, s) {
    return arguments.length === 1 ? M0(e) : new dn(e, r, o, s ?? 1);
  }
  function dn(e, r, o, s) {
    this.h = +e, this.s = +r, this.l = +o, this.opacity = +s;
  }
  Dc(dn, Qv, N0(Bi, {
    brighter(e) {
      return e = e == null ? Tl : Math.pow(Tl, e), new dn(this.h, this.s, this.l * e, this.opacity);
    },
    darker(e) {
      return e = e == null ? bi : Math.pow(bi, e), new dn(this.h, this.s, this.l * e, this.opacity);
    },
    rgb() {
      var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, o = this.l, s = o + (o < 0.5 ? o : 1 - o) * r, l = 2 * o - s;
      return new bt(Ku(e >= 240 ? e - 240 : e + 120, l, s), Ku(e, l, s), Ku(e < 120 ? e + 240 : e - 120, l, s), this.opacity);
    },
    clamp() {
      return new dn(Jh(this.h), fl(this.s), fl(this.l), Rl(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const e = Rl(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Jh(this.h)}, ${fl(this.s) * 100}%, ${fl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    }
  }));
  function Jh(e) {
    return e = (e || 0) % 360, e < 0 ? e + 360 : e;
  }
  function fl(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function Ku(e, r, o) {
    return (e < 60 ? r + (o - r) * e / 60 : e < 180 ? o : e < 240 ? r + (o - r) * (240 - e) / 60 : r) * 255;
  }
  const I0 = (e) => () => e;
  function Zv(e, r) {
    return function(o) {
      return e + o * r;
    };
  }
  function qv(e, r, o) {
    return e = Math.pow(e, o), r = Math.pow(r, o) - e, o = 1 / o, function(s) {
      return Math.pow(e + s * r, o);
    };
  }
  function Jv(e) {
    return (e = +e) == 1 ? b0 : function(r, o) {
      return o - r ? qv(r, o, e) : I0(isNaN(r) ? o : r);
    };
  }
  function b0(e, r) {
    var o = r - e;
    return o ? Zv(e, o) : I0(isNaN(e) ? r : e);
  }
  const ep = (function e(r) {
    var o = Jv(r);
    function s(l, u) {
      var c = o((l = cc(l)).r, (u = cc(u)).r), f = o(l.g, u.g), m = o(l.b, u.b), h = b0(l.opacity, u.opacity);
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
    var o = dc.lastIndex = Qu.lastIndex = 0, s, l, u, c = -1, f = [], m = [];
    for (e = e + "", r = r + ""; (s = dc.exec(e)) && (l = Qu.exec(r)); ) (u = l.index) > o && (u = r.slice(o, u), f[c] ? f[c] += u : f[++c] = u), (s = s[0]) === (l = l[0]) ? f[c] ? f[c] += l : f[++c] = l : (f[++c] = null, m.push({
      i: c,
      x: hr(s, l)
    })), o = Qu.lastIndex;
    return o < r.length && (u = r.slice(o), f[c] ? f[c] += u : f[++c] = u), f.length < 2 ? m[0] ? tw(m[0].x) : ew(r) : (r = m.length, function(h) {
      for (var g = 0, y; g < r; ++g) f[(y = m[g]).i] = y.x(h);
      return f.join("");
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
  function A0(e, r, o, s, l, u) {
    var c, f, m;
    return (c = Math.sqrt(e * e + r * r)) && (e /= c, r /= c), (m = e * o + r * s) && (o -= e * m, s -= r * m), (f = Math.sqrt(o * o + s * s)) && (o /= f, s /= f, m /= f), e * s < r * o && (e = -e, r = -r, m = -m, c = -c), {
      translateX: l,
      translateY: u,
      rotate: Math.atan2(r, e) * tp,
      skewX: Math.atan(m) * tp,
      scaleX: c,
      scaleY: f
    };
  }
  var hl;
  function rw(e) {
    const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return r.isIdentity ? fc : A0(r.a, r.b, r.c, r.d, r.e, r.f);
  }
  function ow(e) {
    return e == null || (hl || (hl = document.createElementNS("http://www.w3.org/2000/svg", "g")), hl.setAttribute("transform", e), !(e = hl.transform.baseVal.consolidate())) ? fc : (e = e.matrix, A0(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function T0(e, r, o, s) {
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
        for (var E = -1, S = v.length, N; ++E < S; ) y[(N = v[E]).i] = N.x(x);
        return y.join("");
      };
    };
  }
  var iw = T0(rw, "px, ", "px)", "deg)"), sw = T0(ow, ", ", ")", ")"), lw = 1e-12;
  function np(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
  }
  function aw(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2;
  }
  function uw(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1);
  }
  const cw = (function e(r, o, s) {
    function l(u, c) {
      var f = u[0], m = u[1], h = u[2], g = c[0], y = c[1], v = c[2], x = g - f, E = y - m, S = x * x + E * E, N, C;
      if (S < lw) C = Math.log(v / h) / r, N = function(J) {
        return [
          f + J * x,
          m + J * E,
          h * Math.exp(r * J * C)
        ];
      };
      else {
        var P = Math.sqrt(S), z = (v * v - h * h + s * S) / (2 * h * o * P), A = (v * v - h * h - s * S) / (2 * v * o * P), O = Math.log(Math.sqrt(z * z + 1) - z), V = Math.log(Math.sqrt(A * A + 1) - A);
        C = (V - O) / r, N = function(J) {
          var W = J * C, Y = np(O), Q = h / (o * P) * (Y * uw(r * W + O) - aw(O));
          return [
            f + Q * x,
            m + Q * E,
            h * Y / np(r * W + O)
          ];
        };
      }
      return N.duration = C * 1e3 * r / Math.SQRT2, N;
    }
    return l.rho = function(u) {
      var c = Math.max(1e-3, +u), f = c * c, m = f * f;
      return e(c, f, m);
    }, l;
  })(Math.SQRT2, 2, 4);
  var bo = 0, _i = 0, wi = 0, R0 = 1e3, Pl, Ni, $l = 0, Wr = 0, Xl = 0, Ri = typeof performance == "object" && performance.now ? performance : Date, P0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
    setTimeout(e, 17);
  };
  function Lc() {
    return Wr || (P0(dw), Wr = Ri.now() + Xl);
  }
  function dw() {
    Wr = 0;
  }
  function zl() {
    this._call = this._time = this._next = null;
  }
  zl.prototype = $0.prototype = {
    constructor: zl,
    restart: function(e, r, o) {
      if (typeof e != "function") throw new TypeError("callback is not a function");
      o = (o == null ? Lc() : +o) + (r == null ? 0 : +r), !this._next && Ni !== this && (Ni ? Ni._next = this : Pl = this, Ni = this), this._call = e, this._time = o, hc();
    },
    stop: function() {
      this._call && (this._call = null, this._time = 1 / 0, hc());
    }
  };
  function $0(e, r, o) {
    var s = new zl();
    return s.restart(e, r, o), s;
  }
  function fw() {
    Lc(), ++bo;
    for (var e = Pl, r; e; ) (r = Wr - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
    --bo;
  }
  function rp() {
    Wr = ($l = Ri.now()) + Xl, bo = _i = 0;
    try {
      fw();
    } finally {
      bo = 0, pw(), Wr = 0;
    }
  }
  function hw() {
    var e = Ri.now(), r = e - $l;
    r > R0 && (Xl -= r, $l = e);
  }
  function pw() {
    for (var e, r = Pl, o, s = 1 / 0; r; ) r._call ? (s > r._time && (s = r._time), e = r, r = r._next) : (o = r._next, r._next = null, r = e ? e._next = o : Pl = o);
    Ni = e, hc(s);
  }
  function hc(e) {
    if (!bo) {
      _i && (_i = clearTimeout(_i));
      var r = e - Wr;
      r > 24 ? (e < 1 / 0 && (_i = setTimeout(rp, e - Ri.now() - Xl)), wi && (wi = clearInterval(wi))) : (wi || ($l = Ri.now(), wi = setInterval(hw, R0)), bo = 1, P0(rp));
    }
  }
  function op(e, r, o) {
    var s = new zl();
    return r = r == null ? 0 : +r, s.restart((l) => {
      s.stop(), e(l + r);
    }, r, o), s;
  }
  var mw = Wl("start", "end", "cancel", "interrupt"), gw = [], z0 = 0, ip = 1, pc = 2, kl = 3, sp = 4, mc = 5, Cl = 6;
  function Gl(e, r, o, s, l, u) {
    var c = e.__transition;
    if (!c) e.__transition = {};
    else if (o in c) return;
    yw(e, o, {
      name: r,
      index: s,
      group: l,
      on: mw,
      tween: gw,
      time: u.time,
      delay: u.delay,
      duration: u.duration,
      ease: u.ease,
      timer: null,
      state: z0
    });
  }
  function Oc(e, r) {
    var o = fn(e, r);
    if (o.state > z0) throw new Error("too late; already scheduled");
    return o;
  }
  function Cn(e, r) {
    var o = fn(e, r);
    if (o.state > kl) throw new Error("too late; already running");
    return o;
  }
  function fn(e, r) {
    var o = e.__transition;
    if (!o || !(o = o[r])) throw new Error("transition not found");
    return o;
  }
  function yw(e, r, o) {
    var s = e.__transition, l;
    s[r] = o, o.timer = $0(u, 0, o.time);
    function u(h) {
      o.state = ip, o.timer.restart(c, o.delay, o.time), o.delay <= h && c(h - o.delay);
    }
    function c(h) {
      var g, y, v, x;
      if (o.state !== ip) return m();
      for (g in s) if (x = s[g], x.name === o.name) {
        if (x.state === kl) return op(c);
        x.state === sp ? (x.state = Cl, x.timer.stop(), x.on.call("interrupt", e, e.__data__, x.index, x.group), delete s[g]) : +g < r && (x.state = Cl, x.timer.stop(), x.on.call("cancel", e, e.__data__, x.index, x.group), delete s[g]);
      }
      if (op(function() {
        o.state === kl && (o.state = sp, o.timer.restart(f, o.delay, o.time), f(h));
      }), o.state = pc, o.on.call("start", e, e.__data__, o.index, o.group), o.state === pc) {
        for (o.state = kl, l = new Array(v = o.tween.length), g = 0, y = -1; g < v; ++g) (x = o.tween[g].value.call(e, e.__data__, o.index, o.group)) && (l[++y] = x);
        l.length = y + 1;
      }
    }
    function f(h) {
      for (var g = h < o.duration ? o.ease.call(null, h / o.duration) : (o.timer.restart(m), o.state = mc, 1), y = -1, v = l.length; ++y < v; ) l[y].call(e, g);
      o.state === mc && (o.on.call("end", e, e.__data__, o.index, o.group), m());
    }
    function m() {
      o.state = Cl, o.timer.stop(), delete s[r];
      for (var h in s) return;
      delete e.__transition;
    }
  }
  function _l(e, r) {
    var o = e.__transition, s, l, u = true, c;
    if (o) {
      r = r == null ? null : r + "";
      for (c in o) {
        if ((s = o[c]).name !== r) {
          u = false;
          continue;
        }
        l = s.state > pc && s.state < mc, s.state = Cl, s.timer.stop(), s.on.call(l ? "interrupt" : "cancel", e, e.__data__, s.index, s.group), delete o[c];
      }
      u && delete e.__transition;
    }
  }
  function vw(e) {
    return this.each(function() {
      _l(this, e);
    });
  }
  function ww(e, r) {
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
  function xw(e, r, o) {
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
  function Sw(e, r) {
    var o = this._id;
    if (e += "", arguments.length < 2) {
      for (var s = fn(this.node(), o).tween, l = 0, u = s.length, c; l < u; ++l) if ((c = s[l]).name === e) return c.value;
      return null;
    }
    return this.each((r == null ? ww : xw)(o, e, r));
  }
  function Fc(e, r, o) {
    var s = e._id;
    return e.each(function() {
      var l = Cn(this, s);
      (l.value || (l.value = {}))[r] = o.apply(this, arguments);
    }), function(l) {
      return fn(l, s).value[r];
    };
  }
  function D0(e, r) {
    var o;
    return (typeof r == "number" ? hr : r instanceof Ti ? ep : (o = Ti(r)) ? (r = o, ep) : nw)(e, r);
  }
  function Ew(e) {
    return function() {
      this.removeAttribute(e);
    };
  }
  function kw(e) {
    return function() {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function Cw(e, r, o) {
    var s, l = o + "", u;
    return function() {
      var c = this.getAttribute(e);
      return c === l ? null : c === s ? u : u = r(s = c, o);
    };
  }
  function _w(e, r, o) {
    var s, l = o + "", u;
    return function() {
      var c = this.getAttributeNS(e.space, e.local);
      return c === l ? null : c === s ? u : u = r(s = c, o);
    };
  }
  function Nw(e, r, o) {
    var s, l, u;
    return function() {
      var c, f = o(this), m;
      return f == null ? void this.removeAttribute(e) : (c = this.getAttribute(e), m = f + "", c === m ? null : c === s && m === l ? u : (l = m, u = r(s = c, f)));
    };
  }
  function Mw(e, r, o) {
    var s, l, u;
    return function() {
      var c, f = o(this), m;
      return f == null ? void this.removeAttributeNS(e.space, e.local) : (c = this.getAttributeNS(e.space, e.local), m = f + "", c === m ? null : c === s && m === l ? u : (l = m, u = r(s = c, f)));
    };
  }
  function Iw(e, r) {
    var o = Yl(e), s = o === "transform" ? sw : D0;
    return this.attrTween(e, typeof r == "function" ? (o.local ? Mw : Nw)(o, s, Fc(this, "attr." + e, r)) : r == null ? (o.local ? kw : Ew)(o) : (o.local ? _w : Cw)(o, s, r));
  }
  function bw(e, r) {
    return function(o) {
      this.setAttribute(e, r.call(this, o));
    };
  }
  function Aw(e, r) {
    return function(o) {
      this.setAttributeNS(e.space, e.local, r.call(this, o));
    };
  }
  function Tw(e, r) {
    var o, s;
    function l() {
      var u = r.apply(this, arguments);
      return u !== s && (o = (s = u) && Aw(e, u)), o;
    }
    return l._value = r, l;
  }
  function Rw(e, r) {
    var o, s;
    function l() {
      var u = r.apply(this, arguments);
      return u !== s && (o = (s = u) && bw(e, u)), o;
    }
    return l._value = r, l;
  }
  function Pw(e, r) {
    var o = "attr." + e;
    if (arguments.length < 2) return (o = this.tween(o)) && o._value;
    if (r == null) return this.tween(o, null);
    if (typeof r != "function") throw new Error();
    var s = Yl(e);
    return this.tween(o, (s.local ? Tw : Rw)(s, r));
  }
  function $w(e, r) {
    return function() {
      Oc(this, e).delay = +r.apply(this, arguments);
    };
  }
  function zw(e, r) {
    return r = +r, function() {
      Oc(this, e).delay = r;
    };
  }
  function Dw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? $w : zw)(r, e)) : fn(this.node(), r).delay;
  }
  function Lw(e, r) {
    return function() {
      Cn(this, e).duration = +r.apply(this, arguments);
    };
  }
  function Ow(e, r) {
    return r = +r, function() {
      Cn(this, e).duration = r;
    };
  }
  function Fw(e) {
    var r = this._id;
    return arguments.length ? this.each((typeof e == "function" ? Lw : Ow)(r, e)) : fn(this.node(), r).duration;
  }
  function Bw(e, r) {
    if (typeof r != "function") throw new Error();
    return function() {
      Cn(this, e).ease = r;
    };
  }
  function jw(e) {
    var r = this._id;
    return arguments.length ? this.each(Bw(r, e)) : fn(this.node(), r).ease;
  }
  function Hw(e, r) {
    return function() {
      var o = r.apply(this, arguments);
      if (typeof o != "function") throw new Error();
      Cn(this, e).ease = o;
    };
  }
  function Vw(e) {
    if (typeof e != "function") throw new Error();
    return this.each(Hw(this._id, e));
  }
  function Uw(e) {
    typeof e != "function" && (e = p0(e));
    for (var r = this._groups, o = r.length, s = new Array(o), l = 0; l < o; ++l) for (var u = r[l], c = u.length, f = s[l] = [], m, h = 0; h < c; ++h) (m = u[h]) && e.call(m, m.__data__, h, u) && f.push(m);
    return new Un(s, this._parents, this._name, this._id);
  }
  function Ww(e) {
    if (e._id !== this._id) throw new Error();
    for (var r = this._groups, o = e._groups, s = r.length, l = o.length, u = Math.min(s, l), c = new Array(s), f = 0; f < u; ++f) for (var m = r[f], h = o[f], g = m.length, y = c[f] = new Array(g), v, x = 0; x < g; ++x) (v = m[x] || h[x]) && (y[x] = v);
    for (; f < s; ++f) c[f] = r[f];
    return new Un(c, this._parents, this._name, this._id);
  }
  function Yw(e) {
    return (e + "").trim().split(/^|\s+/).every(function(r) {
      var o = r.indexOf(".");
      return o >= 0 && (r = r.slice(0, o)), !r || r === "start";
    });
  }
  function Xw(e, r, o) {
    var s, l, u = Yw(r) ? Oc : Cn;
    return function() {
      var c = u(this, e), f = c.on;
      f !== s && (l = (s = f).copy()).on(r, o), c.on = l;
    };
  }
  function Gw(e, r) {
    var o = this._id;
    return arguments.length < 2 ? fn(this.node(), o).on.on(e) : this.each(Xw(o, e, r));
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
    typeof e != "function" && (e = $c(e));
    for (var s = this._groups, l = s.length, u = new Array(l), c = 0; c < l; ++c) for (var f = s[c], m = f.length, h = u[c] = new Array(m), g, y, v = 0; v < m; ++v) (g = f[v]) && (y = e.call(g, g.__data__, v, f)) && ("__data__" in g && (y.__data__ = g.__data__), h[v] = y, Gl(h[v], r, o, v, h, fn(g, o)));
    return new Un(u, this._parents, r, o);
  }
  function qw(e) {
    var r = this._name, o = this._id;
    typeof e != "function" && (e = h0(e));
    for (var s = this._groups, l = s.length, u = [], c = [], f = 0; f < l; ++f) for (var m = s[f], h = m.length, g, y = 0; y < h; ++y) if (g = m[y]) {
      for (var v = e.call(g, g.__data__, y, m), x, E = fn(g, o), S = 0, N = v.length; S < N; ++S) (x = v[S]) && Gl(x, r, o, S, v, E);
      u.push(v), c.push(g);
    }
    return new Un(u, c, r, o);
  }
  var Jw = Fi.prototype.constructor;
  function ex() {
    return new Jw(this._groups, this._parents);
  }
  function tx(e, r) {
    var o, s, l;
    return function() {
      var u = Io(this, e), c = (this.style.removeProperty(e), Io(this, e));
      return u === c ? null : u === o && c === s ? l : l = r(o = u, s = c);
    };
  }
  function L0(e) {
    return function() {
      this.style.removeProperty(e);
    };
  }
  function nx(e, r, o) {
    var s, l = o + "", u;
    return function() {
      var c = Io(this, e);
      return c === l ? null : c === s ? u : u = r(s = c, o);
    };
  }
  function rx(e, r, o) {
    var s, l, u;
    return function() {
      var c = Io(this, e), f = o(this), m = f + "";
      return f == null && (m = f = (this.style.removeProperty(e), Io(this, e))), c === m ? null : c === s && m === l ? u : (l = m, u = r(s = c, f));
    };
  }
  function ox(e, r) {
    var o, s, l, u = "style." + r, c = "end." + u, f;
    return function() {
      var m = Cn(this, e), h = m.on, g = m.value[u] == null ? f || (f = L0(r)) : void 0;
      (h !== o || l !== g) && (s = (o = h).copy()).on(c, l = g), m.on = s;
    };
  }
  function ix(e, r, o) {
    var s = (e += "") == "transform" ? iw : D0;
    return r == null ? this.styleTween(e, tx(e, s)).on("end.style." + e, L0(e)) : typeof r == "function" ? this.styleTween(e, rx(e, s, Fc(this, "style." + e, r))).each(ox(this._id, e)) : this.styleTween(e, nx(e, s, r), o).on("end.style." + e, null);
  }
  function sx(e, r, o) {
    return function(s) {
      this.style.setProperty(e, r.call(this, s), o);
    };
  }
  function lx(e, r, o) {
    var s, l;
    function u() {
      var c = r.apply(this, arguments);
      return c !== l && (s = (l = c) && sx(e, c, o)), s;
    }
    return u._value = r, u;
  }
  function ax(e, r, o) {
    var s = "style." + (e += "");
    if (arguments.length < 2) return (s = this.tween(s)) && s._value;
    if (r == null) return this.tween(s, null);
    if (typeof r != "function") throw new Error();
    return this.tween(s, lx(e, r, o ?? ""));
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
    function s() {
      var l = e.apply(this, arguments);
      return l !== o && (r = (o = l) && fx(l)), r;
    }
    return s._value = e, s;
  }
  function px(e) {
    var r = "text";
    if (arguments.length < 1) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error();
    return this.tween(r, hx(e));
  }
  function mx() {
    for (var e = this._name, r = this._id, o = O0(), s = this._groups, l = s.length, u = 0; u < l; ++u) for (var c = s[u], f = c.length, m, h = 0; h < f; ++h) if (m = c[h]) {
      var g = fn(m, r);
      Gl(m, e, o, h, c, {
        time: g.time + g.delay + g.duration,
        delay: 0,
        duration: g.duration,
        ease: g.ease
      });
    }
    return new Un(s, this._parents, e, o);
  }
  function gx() {
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
  var yx = 0;
  function Un(e, r, o, s) {
    this._groups = e, this._parents = r, this._name = o, this._id = s;
  }
  function O0() {
    return ++yx;
  }
  var Fn = Fi.prototype;
  Un.prototype = {
    constructor: Un,
    select: Zw,
    selectAll: qw,
    selectChild: Fn.selectChild,
    selectChildren: Fn.selectChildren,
    filter: Uw,
    merge: Ww,
    selection: ex,
    transition: mx,
    call: Fn.call,
    nodes: Fn.nodes,
    node: Fn.node,
    size: Fn.size,
    empty: Fn.empty,
    each: Fn.each,
    on: Gw,
    attr: Iw,
    attrTween: Pw,
    style: ix,
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
    [Symbol.iterator]: Fn[Symbol.iterator]
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
    e instanceof Un ? (r = e._id, e = e._name) : (r = O0(), (o = wx).time = Lc(), e = e == null ? null : e + "");
    for (var s = this._groups, l = s.length, u = 0; u < l; ++u) for (var c = s[u], f = c.length, m, h = 0; h < f; ++h) (m = c[h]) && Gl(m, e, r, h, c, o || xx(m, r));
    return new Un(s, this._parents, e, r);
  }
  Fi.prototype.interrupt = vw;
  Fi.prototype.transition = Sx;
  const pl = (e) => () => e;
  function Ex(e, { sourceEvent: r, target: o, transform: s, dispatch: l }) {
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
  function xi(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function kx(e) {
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
    var s = e.invertX(r[0][0]) - o[0][0], l = e.invertX(r[1][0]) - o[1][0], u = e.invertY(r[0][1]) - o[0][1], c = e.invertY(r[1][1]) - o[1][1];
    return e.translate(l > s ? (s + l) / 2 : Math.min(0, s) || Math.max(0, l), c > u ? (u + c) / 2 : Math.min(0, u) || Math.max(0, c));
  }
  function F0() {
    var e = kx, r = Cx, o = Mx, s = _x, l = Nx, u = [
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
    ], f = 250, m = cw, h = Wl("start", "zoom", "end"), g, y, v, x = 500, E = 150, S = 0, N = 10;
    function C(k) {
      k.property("__zoom", lp).on("wheel.zoom", W, {
        passive: false
      }).on("mousedown.zoom", Y).on("dblclick.zoom", Q).filter(l).on("touchstart.zoom", ee).on("touchmove.zoom", G).on("touchend.zoom touchcancel.zoom", Z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    C.transform = function(k, H, L, K) {
      var B = k.selection ? k.selection() : k;
      B.property("__zoom", lp), k !== B ? O(k, H, L, K) : B.interrupt().each(function() {
        V(this, arguments).event(K).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
      });
    }, C.scaleBy = function(k, H, L, K) {
      C.scaleTo(k, function() {
        var B = this.__zoom.k, T = typeof H == "function" ? H.apply(this, arguments) : H;
        return B * T;
      }, L, K);
    }, C.scaleTo = function(k, H, L, K) {
      C.transform(k, function() {
        var B = r.apply(this, arguments), T = this.__zoom, F = L == null ? A(B) : typeof L == "function" ? L.apply(this, arguments) : L, _ = T.invert(F), $ = typeof H == "function" ? H.apply(this, arguments) : H;
        return o(z(P(T, $), F, _), B, c);
      }, L, K);
    }, C.translateBy = function(k, H, L, K) {
      C.transform(k, function() {
        return o(this.__zoom.translate(typeof H == "function" ? H.apply(this, arguments) : H, typeof L == "function" ? L.apply(this, arguments) : L), r.apply(this, arguments), c);
      }, null, K);
    }, C.translateTo = function(k, H, L, K, B) {
      C.transform(k, function() {
        var T = r.apply(this, arguments), F = this.__zoom, _ = K == null ? A(T) : typeof K == "function" ? K.apply(this, arguments) : K;
        return o(Hn.translate(_[0], _[1]).scale(F.k).translate(typeof H == "function" ? -H.apply(this, arguments) : -H, typeof L == "function" ? -L.apply(this, arguments) : -L), T, c);
      }, K, B);
    };
    function P(k, H) {
      return H = Math.max(u[0], Math.min(u[1], H)), H === k.k ? k : new jn(H, k.x, k.y);
    }
    function z(k, H, L) {
      var K = H[0] - L[0] * k.k, B = H[1] - L[1] * k.k;
      return K === k.x && B === k.y ? k : new jn(k.k, K, B);
    }
    function A(k) {
      return [
        (+k[0][0] + +k[1][0]) / 2,
        (+k[0][1] + +k[1][1]) / 2
      ];
    }
    function O(k, H, L, K) {
      k.on("start.zoom", function() {
        V(this, arguments).event(K).start();
      }).on("interrupt.zoom end.zoom", function() {
        V(this, arguments).event(K).end();
      }).tween("zoom", function() {
        var B = this, T = arguments, F = V(B, T).event(K), _ = r.apply(B, T), $ = L == null ? A(_) : typeof L == "function" ? L.apply(B, T) : L, oe = Math.max(_[1][0] - _[0][0], _[1][1] - _[0][1]), ne = B.__zoom, le = typeof H == "function" ? H.apply(B, T) : H, ae = m(ne.invert($).concat(oe / ne.k), le.invert($).concat(oe / le.k));
        return function(he) {
          if (he === 1) he = le;
          else {
            var me = ae(he), ve = oe / me[2];
            he = new jn(ve, $[0] - me[0] * ve, $[1] - me[1] * ve);
          }
          F.zoom(null, he);
        };
      });
    }
    function V(k, H, L) {
      return !L && k.__zooming || new J(k, H);
    }
    function J(k, H) {
      this.that = k, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = r.apply(k, H), this.taps = 0;
    }
    J.prototype = {
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
        h.call(k, this.that, new Ex(k, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: h
        }), H);
      }
    };
    function W(k, ...H) {
      if (!e.apply(this, arguments)) return;
      var L = V(this, H).event(k), K = this.__zoom, B = Math.max(u[0], Math.min(u[1], K.k * Math.pow(2, s.apply(this, arguments)))), T = cn(k);
      if (L.wheel) (L.mouse[0][0] !== T[0] || L.mouse[0][1] !== T[1]) && (L.mouse[1] = K.invert(L.mouse[0] = T)), clearTimeout(L.wheel);
      else {
        if (K.k === B) return;
        L.mouse = [
          T,
          K.invert(T)
        ], _l(this), L.start();
      }
      xi(k), L.wheel = setTimeout(F, E), L.zoom("mouse", o(z(P(K, B), L.mouse[0], L.mouse[1]), L.extent, c));
      function F() {
        L.wheel = null, L.end();
      }
    }
    function Y(k, ...H) {
      if (v || !e.apply(this, arguments)) return;
      var L = k.currentTarget, K = V(this, H, true).event(k), B = Qt(k.view).on("mousemove.zoom", $, true).on("mouseup.zoom", oe, true), T = cn(k, L), F = k.clientX, _ = k.clientY;
      C0(k.view), Zu(k), K.mouse = [
        T,
        this.__zoom.invert(T)
      ], _l(this), K.start();
      function $(ne) {
        if (xi(ne), !K.moved) {
          var le = ne.clientX - F, ae = ne.clientY - _;
          K.moved = le * le + ae * ae > S;
        }
        K.event(ne).zoom("mouse", o(z(K.that.__zoom, K.mouse[0] = cn(ne, L), K.mouse[1]), K.extent, c));
      }
      function oe(ne) {
        B.on("mousemove.zoom mouseup.zoom", null), _0(ne.view, K.moved), xi(ne), K.event(ne).end();
      }
    }
    function Q(k, ...H) {
      if (e.apply(this, arguments)) {
        var L = this.__zoom, K = cn(k.changedTouches ? k.changedTouches[0] : k, this), B = L.invert(K), T = L.k * (k.shiftKey ? 0.5 : 2), F = o(z(P(L, T), K, B), r.apply(this, H), c);
        xi(k), f > 0 ? Qt(this).transition().duration(f).call(O, F, K, k) : Qt(this).call(C.transform, F, K, k);
      }
    }
    function ee(k, ...H) {
      if (e.apply(this, arguments)) {
        var L = k.touches, K = L.length, B = V(this, H, k.changedTouches.length === K).event(k), T, F, _, $;
        for (Zu(k), F = 0; F < K; ++F) _ = L[F], $ = cn(_, this), $ = [
          $,
          this.__zoom.invert($),
          _.identifier
        ], B.touch0 ? !B.touch1 && B.touch0[2] !== $[2] && (B.touch1 = $, B.taps = 0) : (B.touch0 = $, T = true, B.taps = 1 + !!g);
        g && (g = clearTimeout(g)), T && (B.taps < 2 && (y = $[0], g = setTimeout(function() {
          g = null;
        }, x)), _l(this), B.start());
      }
    }
    function G(k, ...H) {
      if (this.__zooming) {
        var L = V(this, H).event(k), K = k.changedTouches, B = K.length, T, F, _, $;
        for (xi(k), T = 0; T < B; ++T) F = K[T], _ = cn(F, this), L.touch0 && L.touch0[2] === F.identifier ? L.touch0[0] = _ : L.touch1 && L.touch1[2] === F.identifier && (L.touch1[0] = _);
        if (F = L.that.__zoom, L.touch1) {
          var oe = L.touch0[0], ne = L.touch0[1], le = L.touch1[0], ae = L.touch1[1], he = (he = le[0] - oe[0]) * he + (he = le[1] - oe[1]) * he, me = (me = ae[0] - ne[0]) * me + (me = ae[1] - ne[1]) * me;
          F = P(F, Math.sqrt(he / me)), _ = [
            (oe[0] + le[0]) / 2,
            (oe[1] + le[1]) / 2
          ], $ = [
            (ne[0] + ae[0]) / 2,
            (ne[1] + ae[1]) / 2
          ];
        } else if (L.touch0) _ = L.touch0[0], $ = L.touch0[1];
        else return;
        L.zoom("touch", o(z(F, _, $), L.extent, c));
      }
    }
    function Z(k, ...H) {
      if (this.__zooming) {
        var L = V(this, H).event(k), K = k.changedTouches, B = K.length, T, F;
        for (Zu(k), v && clearTimeout(v), v = setTimeout(function() {
          v = null;
        }, x), T = 0; T < B; ++T) F = K[T], L.touch0 && L.touch0[2] === F.identifier ? delete L.touch0 : L.touch1 && L.touch1[2] === F.identifier && delete L.touch1;
        if (L.touch1 && !L.touch0 && (L.touch0 = L.touch1, delete L.touch1), L.touch0) L.touch0[1] = this.__zoom.invert(L.touch0[0]);
        else if (L.end(), L.taps === 2 && (F = cn(F, this), Math.hypot(y[0] - F[0], y[1] - F[1]) < N)) {
          var _ = Qt(this).on("dblclick.zoom");
          _ && _.apply(this, arguments);
        }
      }
    }
    return C.wheelDelta = function(k) {
      return arguments.length ? (s = typeof k == "function" ? k : pl(+k), C) : s;
    }, C.filter = function(k) {
      return arguments.length ? (e = typeof k == "function" ? k : pl(!!k), C) : e;
    }, C.touchable = function(k) {
      return arguments.length ? (l = typeof k == "function" ? k : pl(!!k), C) : l;
    }, C.extent = function(k) {
      return arguments.length ? (r = typeof k == "function" ? k : pl([
        [
          +k[0][0],
          +k[0][1]
        ],
        [
          +k[1][0],
          +k[1][1]
        ]
      ]), C) : r;
    }, C.scaleExtent = function(k) {
      return arguments.length ? (u[0] = +k[0], u[1] = +k[1], C) : [
        u[0],
        u[1]
      ];
    }, C.translateExtent = function(k) {
      return arguments.length ? (c[0][0] = +k[0][0], c[1][0] = +k[1][0], c[0][1] = +k[0][1], c[1][1] = +k[1][1], C) : [
        [
          c[0][0],
          c[0][1]
        ],
        [
          c[1][0],
          c[1][1]
        ]
      ];
    }, C.constrain = function(k) {
      return arguments.length ? (o = k, C) : o;
    }, C.duration = function(k) {
      return arguments.length ? (f = +k, C) : f;
    }, C.interpolate = function(k) {
      return arguments.length ? (m = k, C) : m;
    }, C.on = function() {
      var k = h.on.apply(h, arguments);
      return k === h ? C : k;
    }, C.clickDistance = function(k) {
      return arguments.length ? (S = (k = +k) * k, C) : Math.sqrt(S);
    }, C.tapDistance = function(k) {
      return arguments.length ? (N = +k, C) : N;
    }, C;
  }
  var Ix = c0();
  const Kl = D.createContext(null), bx = Kl.Provider, Wn = {
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
  }, B0 = Wn.error001();
  function ze(e, r) {
    const o = D.useContext(Kl);
    if (o === null) throw new Error(B0);
    return d0(o, e, r);
  }
  const nt = () => {
    const e = D.useContext(Kl);
    if (e === null) throw new Error(B0);
    return D.useMemo(() => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
      destroy: e.destroy
    }), [
      e
    ]);
  }, Ax = (e) => e.userSelectionActive ? "none" : "all";
  function Bc({ position: e, children: r, className: o, style: s, ...l }) {
    const u = ze(Ax), c = `${e}`.split("-");
    return q.createElement("div", {
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
  function Tx({ proOptions: e, position: r = "bottom-right" }) {
    return (e == null ? void 0 : e.hideAttribution) ? null : q.createElement(Bc, {
      position: r,
      className: "react-flow__attribution",
      "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"
    }, q.createElement("a", {
      href: "https://reactflow.dev",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "React Flow attribution"
    }, "React Flow"));
  }
  const Rx = ({ x: e, y: r, label: o, labelStyle: s = {}, labelShowBg: l = true, labelBgStyle: u = {}, labelBgPadding: c = [
    2,
    4
  ], labelBgBorderRadius: f = 2, children: m, className: h, ...g }) => {
    const y = D.useRef(null), [v, x] = D.useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }), E = gt([
      "react-flow__edge-textwrapper",
      h
    ]);
    return D.useEffect(() => {
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
    ]), typeof o > "u" || !o ? null : q.createElement("g", {
      transform: `translate(${e - v.width / 2} ${r - v.height / 2})`,
      className: E,
      visibility: v.width ? "visible" : "hidden",
      ...g
    }, l && q.createElement("rect", {
      width: v.width + 2 * c[0],
      x: -c[0],
      y: -c[1],
      height: v.height + 2 * c[1],
      className: "react-flow__edge-textbg",
      style: u,
      rx: f,
      ry: f
    }), q.createElement("text", {
      className: "react-flow__edge-text",
      y: v.height / 2,
      dy: "0.3em",
      ref: y,
      style: s
    }, o), m);
  };
  var Px = D.memo(Rx);
  const jc = (e) => ({
    width: e.offsetWidth,
    height: e.offsetHeight
  }), Ao = (e, r = 0, o = 1) => Math.min(Math.max(e, r), o), Hc = (e = {
    x: 0,
    y: 0
  }, r) => ({
    x: Ao(e.x, r[0][0], r[1][0]),
    y: Ao(e.y, r[0][1], r[1][1])
  }), ap = (e, r, o) => e < r ? Ao(Math.abs(e - r), 1, 50) / 50 : e > o ? -Ao(Math.abs(e - o), 1, 50) / 50 : 0, j0 = (e, r) => {
    const o = ap(e.x, 35, r.width - 35) * 20, s = ap(e.y, 35, r.height - 35) * 20;
    return [
      o,
      s
    ];
  }, H0 = (e) => {
    var _a;
    return ((_a = e.getRootNode) == null ? void 0 : _a.call(e)) || (window == null ? void 0 : window.document);
  }, V0 = (e, r) => ({
    x: Math.min(e.x, r.x),
    y: Math.min(e.y, r.y),
    x2: Math.max(e.x2, r.x2),
    y2: Math.max(e.y2, r.y2)
  }), Pi = ({ x: e, y: r, width: o, height: s }) => ({
    x: e,
    y: r,
    x2: e + o,
    y2: r + s
  }), U0 = ({ x: e, y: r, x2: o, y2: s }) => ({
    x: e,
    y: r,
    width: o - e,
    height: s - r
  }), up = (e) => ({
    ...e.positionAbsolute || {
      x: 0,
      y: 0
    },
    width: e.width || 0,
    height: e.height || 0
  }), $x = (e, r) => U0(V0(Pi(e), Pi(r))), gc = (e, r) => {
    const o = Math.max(0, Math.min(e.x + e.width, r.x + r.width) - Math.max(e.x, r.x)), s = Math.max(0, Math.min(e.y + e.height, r.y + r.height) - Math.max(e.y, r.y));
    return Math.ceil(o * s);
  }, zx = (e) => Zt(e.width) && Zt(e.height) && Zt(e.x) && Zt(e.y), Zt = (e) => !isNaN(e) && isFinite(e), Xe = Symbol.for("internals"), W0 = [
    "Enter",
    " ",
    "Escape"
  ], Dx = (e, r) => {
  }, Lx = (e) => "nativeEvent" in e;
  function yc(e) {
    var _a, _b, _c2;
    const o = ((_c2 = (_b = (_a = Lx(e) ? e.nativeEvent : e).composedPath) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c2[0]) || e.target;
    return [
      "INPUT",
      "SELECT",
      "TEXTAREA"
    ].includes(o == null ? void 0 : o.nodeName) || (o == null ? void 0 : o.hasAttribute("contenteditable")) || !!(o == null ? void 0 : o.closest(".nokey"));
  }
  const Y0 = (e) => "clientX" in e, gr = (e, r) => {
    var _a, _b;
    const o = Y0(e), s = o ? e.clientX : (_a = e.touches) == null ? void 0 : _a[0].clientX, l = o ? e.clientY : (_b = e.touches) == null ? void 0 : _b[0].clientY;
    return {
      x: s - ((r == null ? void 0 : r.left) ?? 0),
      y: l - ((r == null ? void 0 : r.top) ?? 0)
    };
  }, Dl = () => {
    var _a;
    return typeof navigator < "u" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
  }, Po = ({ id: e, path: r, labelX: o, labelY: s, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: g, markerEnd: y, markerStart: v, interactionWidth: x = 20 }) => q.createElement(q.Fragment, null, q.createElement("path", {
    id: e,
    style: g,
    d: r,
    fill: "none",
    className: "react-flow__edge-path",
    markerEnd: y,
    markerStart: v
  }), x && q.createElement("path", {
    d: r,
    fill: "none",
    strokeOpacity: 0,
    strokeWidth: x,
    className: "react-flow__edge-interaction"
  }), l && Zt(o) && Zt(s) ? q.createElement(Px, {
    x: o,
    y: s,
    label: l,
    labelStyle: u,
    labelShowBg: c,
    labelBgStyle: f,
    labelBgPadding: m,
    labelBgBorderRadius: h
  }) : null);
  Po.displayName = "BaseEdge";
  function Si(e, r, o) {
    return o === void 0 ? o : (s) => {
      const l = r().edges.find((u) => u.id === e);
      l && o(s, {
        ...l
      });
    };
  }
  function X0({ sourceX: e, sourceY: r, targetX: o, targetY: s }) {
    const l = Math.abs(o - e) / 2, u = o < e ? o + l : o - l, c = Math.abs(s - r) / 2, f = s < r ? s + c : s - c;
    return [
      u,
      f,
      l,
      c
    ];
  }
  function G0({ sourceX: e, sourceY: r, targetX: o, targetY: s, sourceControlX: l, sourceControlY: u, targetControlX: c, targetControlY: f }) {
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
  var Br;
  (function(e) {
    e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
  })(Br || (Br = {}));
  var $i;
  (function(e) {
    e.Partial = "partial", e.Full = "full";
  })($i || ($i = {}));
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
  function cp({ pos: e, x1: r, y1: o, x2: s, y2: l }) {
    return e === ge.Left || e === ge.Right ? [
      0.5 * (r + s),
      o
    ] : [
      r,
      0.5 * (o + l)
    ];
  }
  function K0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: s, targetY: l, targetPosition: u = ge.Top }) {
    const [c, f] = cp({
      pos: o,
      x1: e,
      y1: r,
      x2: s,
      y2: l
    }), [m, h] = cp({
      pos: u,
      x1: s,
      y1: l,
      x2: e,
      y2: r
    }), [g, y, v, x] = G0({
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
  const Vc = D.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: f, labelShowBg: m, labelBgStyle: h, labelBgPadding: g, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: E, interactionWidth: S }) => {
    const [N, C, P] = K0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: s,
      targetPosition: u
    });
    return q.createElement(Po, {
      path: N,
      labelX: C,
      labelY: P,
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
  function Fx({ source: e, sourcePosition: r = ge.Bottom, target: o, targetPosition: s = ge.Top, center: l, offset: u }) {
    const c = dp[r], f = dp[s], m = {
      x: e.x + c.x * u,
      y: e.y + c.y * u
    }, h = {
      x: o.x + f.x * u,
      y: o.y + f.y * u
    }, g = Ox({
      source: m,
      sourcePosition: r,
      target: h
    }), y = g.x !== 0 ? "x" : "y", v = g[y];
    let x = [], E, S;
    const N = {
      x: 0,
      y: 0
    }, C = {
      x: 0,
      y: 0
    }, [P, z, A, O] = X0({
      sourceX: e.x,
      sourceY: e.y,
      targetX: o.x,
      targetY: o.y
    });
    if (c[y] * f[y] === -1) {
      E = l.x ?? P, S = l.y ?? z;
      const J = [
        {
          x: E,
          y: m.y
        },
        {
          x: E,
          y: h.y
        }
      ], W = [
        {
          x: m.x,
          y: S
        },
        {
          x: h.x,
          y: S
        }
      ];
      c[y] === v ? x = y === "x" ? J : W : x = y === "x" ? W : J;
    } else {
      const J = [
        {
          x: m.x,
          y: h.y
        }
      ], W = [
        {
          x: h.x,
          y: m.y
        }
      ];
      if (y === "x" ? x = c.x === v ? W : J : x = c.y === v ? J : W, r === s) {
        const Z = Math.abs(e[y] - o[y]);
        if (Z <= u) {
          const k = Math.min(u - 1, u - Z);
          c[y] === v ? N[y] = (m[y] > e[y] ? -1 : 1) * k : C[y] = (h[y] > o[y] ? -1 : 1) * k;
        }
      }
      if (r !== s) {
        const Z = y === "x" ? "y" : "x", k = c[y] === f[Z], H = m[Z] > h[Z], L = m[Z] < h[Z];
        (c[y] === 1 && (!k && H || k && L) || c[y] !== 1 && (!k && L || k && H)) && (x = y === "x" ? J : W);
      }
      const Y = {
        x: m.x + N.x,
        y: m.y + N.y
      }, Q = {
        x: h.x + C.x,
        y: h.y + C.y
      }, ee = Math.max(Math.abs(Y.x - x[0].x), Math.abs(Q.x - x[0].x)), G = Math.max(Math.abs(Y.y - x[0].y), Math.abs(Q.y - x[0].y));
      ee >= G ? (E = (Y.x + Q.x) / 2, S = x[0].y) : (E = x[0].x, S = (Y.y + Q.y) / 2);
    }
    return [
      [
        e,
        {
          x: m.x + N.x,
          y: m.y + N.y
        },
        ...x,
        {
          x: h.x + C.x,
          y: h.y + C.y
        },
        o
      ],
      E,
      S,
      A,
      O
    ];
  }
  function Bx(e, r, o, s) {
    const l = Math.min(fp(e, r) / 2, fp(r, o) / 2, s), { x: u, y: c } = r;
    if (e.x === u && u === o.x || e.y === c && c === o.y) return `L${u} ${c}`;
    if (e.y === c) {
      const h = e.x < o.x ? -1 : 1, g = e.y < o.y ? 1 : -1;
      return `L ${u + l * h},${c}Q ${u},${c} ${u},${c + l * g}`;
    }
    const f = e.x < o.x ? 1 : -1, m = e.y < o.y ? -1 : 1;
    return `L ${u},${c + l * m}Q ${u},${c} ${u + l * f},${c}`;
  }
  function Ll({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: s, targetY: l, targetPosition: u = ge.Top, borderRadius: c = 5, centerX: f, centerY: m, offset: h = 20 }) {
    const [g, y, v, x, E] = Fx({
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
      g.reduce((N, C, P) => {
        let z = "";
        return P > 0 && P < g.length - 1 ? z = Bx(g[P - 1], C, g[P + 1], c) : z = `${P === 0 ? "M" : "L"}${C.x} ${C.y}`, N += z, N;
      }, ""),
      y,
      v,
      x,
      E
    ];
  }
  const Ql = D.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: g, sourcePosition: y = ge.Bottom, targetPosition: v = ge.Top, markerEnd: x, markerStart: E, pathOptions: S, interactionWidth: N }) => {
    const [C, P, z] = Ll({
      sourceX: e,
      sourceY: r,
      sourcePosition: y,
      targetX: o,
      targetY: s,
      targetPosition: v,
      borderRadius: S == null ? void 0 : S.borderRadius,
      offset: S == null ? void 0 : S.offset
    });
    return q.createElement(Po, {
      path: C,
      labelX: P,
      labelY: z,
      label: l,
      labelStyle: u,
      labelShowBg: c,
      labelBgStyle: f,
      labelBgPadding: m,
      labelBgBorderRadius: h,
      style: g,
      markerEnd: x,
      markerStart: E,
      interactionWidth: N
    });
  });
  Ql.displayName = "SmoothStepEdge";
  const Uc = D.memo((e) => {
    var _a;
    return q.createElement(Ql, {
      ...e,
      pathOptions: D.useMemo(() => {
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
  function jx({ sourceX: e, sourceY: r, targetX: o, targetY: s }) {
    const [l, u, c, f] = X0({
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
  const Wc = D.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, label: l, labelStyle: u, labelShowBg: c, labelBgStyle: f, labelBgPadding: m, labelBgBorderRadius: h, style: g, markerEnd: y, markerStart: v, interactionWidth: x }) => {
    const [E, S, N] = jx({
      sourceX: e,
      sourceY: r,
      targetX: o,
      targetY: s
    });
    return q.createElement(Po, {
      path: E,
      labelX: S,
      labelY: N,
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
  Wc.displayName = "StraightEdge";
  function ml(e, r) {
    return e >= 0 ? 0.5 * e : r * 25 * Math.sqrt(-e);
  }
  function hp({ pos: e, x1: r, y1: o, x2: s, y2: l, c: u }) {
    switch (e) {
      case ge.Left:
        return [
          r - ml(r - s, u),
          o
        ];
      case ge.Right:
        return [
          r + ml(s - r, u),
          o
        ];
      case ge.Top:
        return [
          r,
          o - ml(o - l, u)
        ];
      case ge.Bottom:
        return [
          r,
          o + ml(l - o, u)
        ];
    }
  }
  function Q0({ sourceX: e, sourceY: r, sourcePosition: o = ge.Bottom, targetX: s, targetY: l, targetPosition: u = ge.Top, curvature: c = 0.25 }) {
    const [f, m] = hp({
      pos: o,
      x1: e,
      y1: r,
      x2: s,
      y2: l,
      c
    }), [h, g] = hp({
      pos: u,
      x1: s,
      y1: l,
      x2: e,
      y2: r,
      c
    }), [y, v, x, E] = G0({
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
  const Ol = D.memo(({ sourceX: e, sourceY: r, targetX: o, targetY: s, sourcePosition: l = ge.Bottom, targetPosition: u = ge.Top, label: c, labelStyle: f, labelShowBg: m, labelBgStyle: h, labelBgPadding: g, labelBgBorderRadius: y, style: v, markerEnd: x, markerStart: E, pathOptions: S, interactionWidth: N }) => {
    const [C, P, z] = Q0({
      sourceX: e,
      sourceY: r,
      sourcePosition: l,
      targetX: o,
      targetY: s,
      targetPosition: u,
      curvature: S == null ? void 0 : S.curvature
    });
    return q.createElement(Po, {
      path: C,
      labelX: P,
      labelY: z,
      label: c,
      labelStyle: f,
      labelShowBg: m,
      labelBgStyle: h,
      labelBgPadding: g,
      labelBgBorderRadius: y,
      style: v,
      markerEnd: x,
      markerStart: E,
      interactionWidth: N
    });
  });
  Ol.displayName = "BezierEdge";
  const Yc = D.createContext(null), Hx = Yc.Provider;
  Yc.Consumer;
  const Vx = () => D.useContext(Yc), Ux = (e) => "id" in e && "source" in e && "target" in e, Wx = ({ source: e, sourceHandle: r, target: o, targetHandle: s }) => `reactflow__edge-${e}${r || ""}-${o}${s || ""}`, vc = (e, r) => typeof e > "u" ? "" : typeof e == "string" ? e : `${r ? `${r}__` : ""}${Object.keys(e).sort().map((s) => `${s}=${e[s]}`).join("&")}`, Yx = (e, r) => r.some((o) => o.source === e.source && o.target === e.target && (o.sourceHandle === e.sourceHandle || !o.sourceHandle && !e.sourceHandle) && (o.targetHandle === e.targetHandle || !o.targetHandle && !e.targetHandle)), Xx = (e, r) => {
    if (!e.source || !e.target) return r;
    let o;
    return Ux(e) ? o = {
      ...e
    } : o = {
      ...e,
      id: Wx(e)
    }, Yx(o, r) ? r : r.concat(o);
  }, wc = ({ x: e, y: r }, [o, s, l], u, [c, f]) => {
    const m = {
      x: (e - o) / l,
      y: (r - s) / l
    };
    return u ? {
      x: c * Math.round(m.x / c),
      y: f * Math.round(m.y / f)
    } : m;
  }, Z0 = ({ x: e, y: r }, [o, s, l]) => ({
    x: e * l + o,
    y: r * l + s
  }), Hr = (e, r = [
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
  }, Zl = (e, r = [
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
      const { x: u, y: c } = Hr(l, r).positionAbsolute;
      return V0(s, Pi({
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
    return U0(o);
  }, q0 = (e, r, [o, s, l] = [
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
      const { positionAbsolute: S } = Hr(g, f), N = {
        x: S.x,
        y: S.y,
        width: y || 0,
        height: v || 0
      }, C = gc(m, N), P = typeof y > "u" || typeof v > "u" || y === null || v === null, z = u && C > 0, A = (y || 0) * (v || 0);
      (P || z || C >= A || g.dragging) && h.push(g);
    }), h;
  }, J0 = (e, r) => {
    const o = e.map((s) => s.id);
    return r.filter((s) => o.includes(s.source) || o.includes(s.target));
  }, em = (e, r, o, s, l, u = 0.1) => {
    const c = r / (e.width * (1 + u)), f = o / (e.height * (1 + u)), m = Math.min(c, f), h = Ao(m, s, l), g = e.x + e.width / 2, y = e.y + e.height / 2, v = r / 2 - g * h, x = o / 2 - y * h;
    return {
      x: v,
      y: x,
      zoom: h
    };
  }, Or = (e, r = 0) => e.transition().duration(r);
  function pp(e, r, o, s) {
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
  function Gx(e, r, o, s, l, u) {
    const { x: c, y: f } = gr(e), h = r.elementsFromPoint(c, f).find((E) => E.classList.contains("react-flow__handle"));
    if (h) {
      const E = h.getAttribute("data-nodeid");
      if (E) {
        const S = Xc(void 0, h), N = h.getAttribute("data-handleid"), C = u({
          nodeId: E,
          id: N,
          type: S
        });
        if (C) {
          const P = l.find((z) => z.nodeId === E && z.type === S && z.id === N);
          return {
            handle: {
              id: N,
              type: S,
              nodeId: E,
              x: (P == null ? void 0 : P.x) || o.x,
              y: (P == null ? void 0 : P.y) || o.y
            },
            validHandleResult: C
          };
        }
      }
    }
    let g = [], y = 1 / 0;
    if (l.forEach((E) => {
      const S = Math.sqrt((E.x - o.x) ** 2 + (E.y - o.y) ** 2);
      if (S <= s) {
        const N = u(E);
        S <= y && (S < y ? g = [
          {
            handle: E,
            validHandleResult: N
          }
        ] : S === y && g.push({
          handle: E,
          validHandleResult: N
        }), y = S);
      }
    }), !g.length) return {
      handle: null,
      validHandleResult: tm()
    };
    if (g.length === 1) return g[0];
    const v = g.some(({ validHandleResult: E }) => E.isValid), x = g.some(({ handle: E }) => E.type === "target");
    return g.find(({ handle: E, validHandleResult: S }) => x ? E.type === "target" : v ? S.isValid : true) || g[0];
  }
  const Kx = {
    source: null,
    target: null,
    sourceHandle: null,
    targetHandle: null
  }, tm = () => ({
    handleDomNode: null,
    isValid: false,
    connection: Kx,
    endHandle: null
  });
  function nm(e, r, o, s, l, u, c) {
    const f = l === "target", m = c.querySelector(`.react-flow__handle[data-id="${e == null ? void 0 : e.nodeId}-${e == null ? void 0 : e.id}-${e == null ? void 0 : e.type}"]`), h = {
      ...tm(),
      handleDomNode: m
    };
    if (m) {
      const g = Xc(void 0, m), y = m.getAttribute("data-nodeid"), v = m.getAttribute("data-handleid"), x = m.classList.contains("connectable"), E = m.classList.contains("connectableend"), S = {
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
  function Qx({ nodes: e, nodeId: r, handleId: o, handleType: s }) {
    return e.reduce((l, u) => {
      if (u[Xe]) {
        const { handleBounds: c } = u[Xe];
        let f = [], m = [];
        c && (f = pp(u, c, "source", `${r}-${o}-${s}`), m = pp(u, c, "target", `${r}-${o}-${s}`)), l.push(...f, ...m);
      }
      return l;
    }, []);
  }
  function Xc(e, r) {
    return e || ((r == null ? void 0 : r.classList.contains("target")) ? "target" : (r == null ? void 0 : r.classList.contains("source")) ? "source" : null);
  }
  function qu(e) {
    e == null ? void 0 : e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
  }
  function Zx(e, r) {
    let o = null;
    return r ? o = "valid" : e && !r && (o = "invalid"), o;
  }
  function rm({ event: e, handleId: r, nodeId: o, onConnect: s, isTarget: l, getState: u, setState: c, isValidConnection: f, edgeUpdaterType: m, onReconnectEnd: h }) {
    const g = H0(e.target), { connectionMode: y, domNode: v, autoPanOnConnect: x, connectionRadius: E, onConnectStart: S, panBy: N, getNodes: C, cancelConnection: P } = u();
    let z = 0, A;
    const { x: O, y: V } = gr(e), J = g == null ? void 0 : g.elementFromPoint(O, V), W = Xc(m, J), Y = v == null ? void 0 : v.getBoundingClientRect();
    if (!Y || !W) return;
    let Q, ee = gr(e, Y), G = false, Z = null, k = false, H = null;
    const L = Qx({
      nodes: C(),
      nodeId: o,
      handleId: r,
      handleType: W
    }), K = () => {
      if (!x) return;
      const [F, _] = j0(ee, Y);
      N({
        x: F,
        y: _
      }), z = requestAnimationFrame(K);
    };
    c({
      connectionPosition: ee,
      connectionStatus: null,
      connectionNodeId: o,
      connectionHandleId: r,
      connectionHandleType: W,
      connectionStartHandle: {
        nodeId: o,
        handleId: r,
        type: W
      },
      connectionEndHandle: null
    }), S == null ? void 0 : S(e, {
      nodeId: o,
      handleId: r,
      handleType: W
    });
    function B(F) {
      const { transform: _ } = u();
      ee = gr(F, Y);
      const { handle: $, validHandleResult: oe } = Gx(F, g, wc(ee, _, false, [
        1,
        1
      ]), E, L, (ne) => nm(ne, y, o, r, l ? "target" : "source", f, g));
      if (A = $, G || (K(), G = true), H = oe.handleDomNode, Z = oe.connection, k = oe.isValid, c({
        connectionPosition: A && k ? Z0({
          x: A.x,
          y: A.y
        }, _) : ee,
        connectionStatus: Zx(!!A, k),
        connectionEndHandle: oe.endHandle
      }), !A && !k && !H) return qu(Q);
      Z.source !== Z.target && H && (qu(Q), Q = H, H.classList.add("connecting", "react-flow__handle-connecting"), H.classList.toggle("valid", k), H.classList.toggle("react-flow__handle-valid", k));
    }
    function T(F) {
      var _a, _b;
      (A || H) && Z && k && (s == null ? void 0 : s(Z)), (_b = (_a = u()).onConnectEnd) == null ? void 0 : _b.call(_a, F), m && (h == null ? void 0 : h(F)), qu(Q), P(), cancelAnimationFrame(z), G = false, k = false, Z = null, H = null, g.removeEventListener("mousemove", B), g.removeEventListener("mouseup", T), g.removeEventListener("touchmove", B), g.removeEventListener("touchend", T);
    }
    g.addEventListener("mousemove", B), g.addEventListener("mouseup", T), g.addEventListener("touchmove", B), g.addEventListener("touchend", T);
  }
  const mp = () => true, qx = (e) => ({
    connectionStartHandle: e.connectionStartHandle,
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName
  }), Jx = (e, r, o) => (s) => {
    const { connectionStartHandle: l, connectionEndHandle: u, connectionClickStartHandle: c } = s;
    return {
      connecting: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.handleId) === r && (l == null ? void 0 : l.type) === o || (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.handleId) === r && (u == null ? void 0 : u.type) === o,
      clickConnecting: (c == null ? void 0 : c.nodeId) === e && (c == null ? void 0 : c.handleId) === r && (c == null ? void 0 : c.type) === o
    };
  }, om = D.forwardRef(({ type: e = "source", position: r = ge.Top, isValidConnection: o, isConnectable: s = true, isConnectableStart: l = true, isConnectableEnd: u = true, id: c, onConnect: f, children: m, className: h, onMouseDown: g, onTouchStart: y, ...v }, x) => {
    var _a, _b;
    const E = c || null, S = e === "target", N = nt(), C = Vx(), { connectOnClick: P, noPanClassName: z } = ze(qx, At), { connecting: A, clickConnecting: O } = ze(Jx(C, E, e), At);
    C || ((_b = (_a = N.getState()).onError) == null ? void 0 : _b.call(_a, "010", Wn.error010()));
    const V = (Y) => {
      const { defaultEdgeOptions: Q, onConnect: ee, hasDefaultEdges: G } = N.getState(), Z = {
        ...Q,
        ...Y
      };
      if (G) {
        const { edges: k, setEdges: H } = N.getState();
        H(Xx(Z, k));
      }
      ee == null ? void 0 : ee(Z), f == null ? void 0 : f(Z);
    }, J = (Y) => {
      if (!C) return;
      const Q = Y0(Y);
      l && (Q && Y.button === 0 || !Q) && rm({
        event: Y,
        handleId: E,
        nodeId: C,
        onConnect: V,
        isTarget: S,
        getState: N.getState,
        setState: N.setState,
        isValidConnection: o || N.getState().isValidConnection || mp
      }), Q ? g == null ? void 0 : g(Y) : y == null ? void 0 : y(Y);
    }, W = (Y) => {
      const { onClickConnectStart: Q, onClickConnectEnd: ee, connectionClickStartHandle: G, connectionMode: Z, isValidConnection: k } = N.getState();
      if (!C || !G && !l) return;
      if (!G) {
        Q == null ? void 0 : Q(Y, {
          nodeId: C,
          handleId: E,
          handleType: e
        }), N.setState({
          connectionClickStartHandle: {
            nodeId: C,
            type: e,
            handleId: E
          }
        });
        return;
      }
      const H = H0(Y.target), L = o || k || mp, { connection: K, isValid: B } = nm({
        nodeId: C,
        id: E,
        type: e
      }, Z, G.nodeId, G.handleId || null, G.type, L, H);
      B && V(K), ee == null ? void 0 : ee(Y), N.setState({
        connectionClickStartHandle: null
      });
    };
    return q.createElement("div", {
      "data-handleid": E,
      "data-nodeid": C,
      "data-handlepos": r,
      "data-id": `${C}-${E}-${e}`,
      className: gt([
        "react-flow__handle",
        `react-flow__handle-${r}`,
        "nodrag",
        z,
        h,
        {
          source: !S,
          target: S,
          connectable: s,
          connectablestart: l,
          connectableend: u,
          connecting: O,
          connectionindicator: s && (l && !A || u && A)
        }
      ]),
      onMouseDown: J,
      onTouchStart: J,
      onClick: P ? W : void 0,
      ref: x,
      ...v
    }, m);
  });
  om.displayName = "Handle";
  var yr = D.memo(om);
  const im = ({ data: e, isConnectable: r, targetPosition: o = ge.Top, sourcePosition: s = ge.Bottom }) => q.createElement(q.Fragment, null, q.createElement(yr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label, q.createElement(yr, {
    type: "source",
    position: s,
    isConnectable: r
  }));
  im.displayName = "DefaultNode";
  var xc = D.memo(im);
  const sm = ({ data: e, isConnectable: r, sourcePosition: o = ge.Bottom }) => q.createElement(q.Fragment, null, e == null ? void 0 : e.label, q.createElement(yr, {
    type: "source",
    position: o,
    isConnectable: r
  }));
  sm.displayName = "InputNode";
  var lm = D.memo(sm);
  const am = ({ data: e, isConnectable: r, targetPosition: o = ge.Top }) => q.createElement(q.Fragment, null, q.createElement(yr, {
    type: "target",
    position: o,
    isConnectable: r
  }), e == null ? void 0 : e.label);
  am.displayName = "OutputNode";
  var um = D.memo(am);
  const Gc = () => null;
  Gc.displayName = "GroupNode";
  const eS = (e) => ({
    selectedNodes: e.getNodes().filter((r) => r.selected),
    selectedEdges: e.edges.filter((r) => r.selected).map((r) => ({
      ...r
    }))
  }), gl = (e) => e.id;
  function tS(e, r) {
    return At(e.selectedNodes.map(gl), r.selectedNodes.map(gl)) && At(e.selectedEdges.map(gl), r.selectedEdges.map(gl));
  }
  const cm = D.memo(({ onSelectionChange: e }) => {
    const r = nt(), { selectedNodes: o, selectedEdges: s } = ze(eS, tS);
    return D.useEffect(() => {
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
  cm.displayName = "SelectionListener";
  const nS = (e) => !!e.onSelectionChange;
  function rS({ onSelectionChange: e }) {
    const r = ze(nS);
    return e || r ? q.createElement(cm, {
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
  function xo(e, r) {
    D.useEffect(() => {
      typeof e < "u" && r(e);
    }, [
      e
    ]);
  }
  function _e(e, r, o) {
    D.useEffect(() => {
      typeof r < "u" && o({
        [e]: r
      });
    }, [
      r
    ]);
  }
  const iS = ({ nodes: e, edges: r, defaultNodes: o, defaultEdges: s, onConnect: l, onConnectStart: u, onConnectEnd: c, onClickConnectStart: f, onClickConnectEnd: m, nodesDraggable: h, nodesConnectable: g, nodesFocusable: y, edgesFocusable: v, edgesUpdatable: x, elevateNodesOnSelect: E, minZoom: S, maxZoom: N, nodeExtent: C, onNodesChange: P, onEdgesChange: z, elementsSelectable: A, connectionMode: O, snapGrid: V, snapToGrid: J, translateExtent: W, connectOnClick: Y, defaultEdgeOptions: Q, fitView: ee, fitViewOptions: G, onNodesDelete: Z, onEdgesDelete: k, onNodeDrag: H, onNodeDragStart: L, onNodeDragStop: K, onSelectionDrag: B, onSelectionDragStart: T, onSelectionDragStop: F, noPanClassName: _, nodeOrigin: $, rfId: oe, autoPanOnConnect: ne, autoPanOnNodeDrag: le, onError: ae, connectionRadius: he, isValidConnection: me, nodeDragThreshold: ve }) => {
    const { setNodes: ke, setEdges: Ve, setDefaultNodesAndEdges: Ue, setMinZoom: Ke, setMaxZoom: Qe, setTranslateExtent: Oe, setNodeExtent: ut, reset: Me } = ze(oS, At), ye = nt();
    return D.useEffect(() => {
      const qe = s == null ? void 0 : s.map((yt) => ({
        ...yt,
        ...Q
      }));
      return Ue(o, qe), () => {
        Me();
      };
    }, []), _e("defaultEdgeOptions", Q, ye.setState), _e("connectionMode", O, ye.setState), _e("onConnect", l, ye.setState), _e("onConnectStart", u, ye.setState), _e("onConnectEnd", c, ye.setState), _e("onClickConnectStart", f, ye.setState), _e("onClickConnectEnd", m, ye.setState), _e("nodesDraggable", h, ye.setState), _e("nodesConnectable", g, ye.setState), _e("nodesFocusable", y, ye.setState), _e("edgesFocusable", v, ye.setState), _e("edgesUpdatable", x, ye.setState), _e("elementsSelectable", A, ye.setState), _e("elevateNodesOnSelect", E, ye.setState), _e("snapToGrid", J, ye.setState), _e("snapGrid", V, ye.setState), _e("onNodesChange", P, ye.setState), _e("onEdgesChange", z, ye.setState), _e("connectOnClick", Y, ye.setState), _e("fitViewOnInit", ee, ye.setState), _e("fitViewOnInitOptions", G, ye.setState), _e("onNodesDelete", Z, ye.setState), _e("onEdgesDelete", k, ye.setState), _e("onNodeDrag", H, ye.setState), _e("onNodeDragStart", L, ye.setState), _e("onNodeDragStop", K, ye.setState), _e("onSelectionDrag", B, ye.setState), _e("onSelectionDragStart", T, ye.setState), _e("onSelectionDragStop", F, ye.setState), _e("noPanClassName", _, ye.setState), _e("nodeOrigin", $, ye.setState), _e("rfId", oe, ye.setState), _e("autoPanOnConnect", ne, ye.setState), _e("autoPanOnNodeDrag", le, ye.setState), _e("onError", ae, ye.setState), _e("connectionRadius", he, ye.setState), _e("isValidConnection", me, ye.setState), _e("nodeDragThreshold", ve, ye.setState), xo(e, ke), xo(r, Ve), xo(S, Ke), xo(N, Qe), xo(W, Oe), xo(C, ut), null;
  }, gp = {
    display: "none"
  }, sS = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)"
  }, dm = "react-flow__node-desc", fm = "react-flow__edge-desc", lS = "react-flow__aria-live", aS = (e) => e.ariaLiveMessage;
  function uS({ rfId: e }) {
    const r = ze(aS);
    return q.createElement("div", {
      id: `${lS}-${e}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      style: sS
    }, r);
  }
  function cS({ rfId: e, disableKeyboardA11y: r }) {
    return q.createElement(q.Fragment, null, q.createElement("div", {
      id: `${dm}-${e}`,
      style: gp
    }, "Press enter or space to select a node.", !r && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "), q.createElement("div", {
      id: `${fm}-${e}`,
      style: gp
    }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."), !r && q.createElement(uS, {
      rfId: e
    }));
  }
  var zi = (e = null, r = {
    actInsideInputWithModifier: true
  }) => {
    const [o, s] = D.useState(false), l = D.useRef(false), u = D.useRef(/* @__PURE__ */ new Set([])), [c, f] = D.useMemo(() => {
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
    return D.useEffect(() => {
      const m = typeof document < "u" ? document : null, h = (r == null ? void 0 : r.target) || m;
      if (e !== null) {
        const g = (x) => {
          if (l.current = x.ctrlKey || x.metaKey || x.shiftKey, (!l.current || l.current && !r.actInsideInputWithModifier) && yc(x)) return false;
          const S = vp(x.code, f);
          u.current.add(x[S]), yp(c, u.current, false) && (x.preventDefault(), s(true));
        }, y = (x) => {
          if ((!l.current || l.current && !r.actInsideInputWithModifier) && yc(x)) return false;
          const S = vp(x.code, f);
          yp(c, u.current, true) ? (s(false), u.current.clear()) : u.current.delete(x[S]), x.key === "Meta" && u.current.clear(), l.current = false;
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
  function yp(e, r, o) {
    return e.filter((s) => o || s.length === r.size).some((s) => s.every((l) => r.has(l)));
  }
  function vp(e, r) {
    return r.includes(e) ? "code" : "key";
  }
  function hm(e, r, o, s) {
    var _a, _b;
    const l = e.parentNode || e.parentId;
    if (!l) return o;
    const u = r.get(l), c = Hr(u, s);
    return hm(u, r, {
      x: (o.x ?? 0) + c.x,
      y: (o.y ?? 0) + c.y,
      z: (((_a = u[Xe]) == null ? void 0 : _a.z) ?? 0) > (o.z ?? 0) ? ((_b = u[Xe]) == null ? void 0 : _b.z) ?? 0 : o.z ?? 0
    }, s);
  }
  function pm(e, r, o) {
    e.forEach((s) => {
      var _a;
      const l = s.parentNode || s.parentId;
      if (l && !e.has(l)) throw new Error(`Parent node ${l} not found`);
      if (l || (o == null ? void 0 : o[s.id])) {
        const { x: u, y: c, z: f } = hm(s, e, {
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
    }), pm(l, o, u), l;
  }
  function mm(e, r = {}) {
    const { getNodes: o, width: s, height: l, minZoom: u, maxZoom: c, d3Zoom: f, d3Selection: m, fitViewOnInitDone: h, fitViewOnInit: g, nodeOrigin: y } = e(), v = r.initial && !h && g;
    if (f && m && (v || !r.initial)) {
      const E = o().filter((N) => {
        var _a;
        const C = r.includeHiddenNodes ? N.width && N.height : !N.hidden;
        return ((_a = r.nodes) == null ? void 0 : _a.length) ? C && r.nodes.some((P) => P.id === N.id) : C;
      }), S = E.every((N) => N.width && N.height);
      if (E.length > 0 && S) {
        const N = Zl(E, y), { x: C, y: P, zoom: z } = em(N, s, l, r.minZoom ?? u, r.maxZoom ?? c, r.padding ?? 0.1), A = Hn.translate(C, P).scale(z);
        return typeof r.duration == "number" && r.duration > 0 ? f.transform(Or(m, r.duration), A) : f.transform(m, A), true;
      }
    }
    return false;
  }
  function dS(e, r) {
    return e.forEach((o) => {
      const s = r.get(o.id);
      s && r.set(s.id, {
        ...s,
        [Xe]: s[Xe],
        selected: o.selected
      });
    }), new Map(r);
  }
  function fS(e, r) {
    return r.map((o) => {
      const s = e.find((l) => l.id === o.id);
      return s && (o.selected = s.selected), o;
    });
  }
  function yl({ changedNodes: e, changedEdges: r, get: o, set: s }) {
    const { nodeInternals: l, edges: u, onNodesChange: c, onEdgesChange: f, hasDefaultNodes: m, hasDefaultEdges: h } = o();
    (e == null ? void 0 : e.length) && (m && s({
      nodeInternals: dS(e, l)
    }), c == null ? void 0 : c(e)), (r == null ? void 0 : r.length) && (h && s({
      edges: fS(r, u)
    }), f == null ? void 0 : f(r));
  }
  const So = () => {
  }, hS = {
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
  }, pS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection
  }), mS = () => {
    const e = nt(), { d3Zoom: r, d3Selection: o } = ze(pS, At);
    return D.useMemo(() => o && r ? {
      zoomIn: (l) => r.scaleBy(Or(o, l == null ? void 0 : l.duration), 1.2),
      zoomOut: (l) => r.scaleBy(Or(o, l == null ? void 0 : l.duration), 1 / 1.2),
      zoomTo: (l, u) => r.scaleTo(Or(o, u == null ? void 0 : u.duration), l),
      getZoom: () => e.getState().transform[2],
      setViewport: (l, u) => {
        const [c, f, m] = e.getState().transform, h = Hn.translate(l.x ?? c, l.y ?? f).scale(l.zoom ?? m);
        r.transform(Or(o, u == null ? void 0 : u.duration), h);
      },
      getViewport: () => {
        const [l, u, c] = e.getState().transform;
        return {
          x: l,
          y: u,
          zoom: c
        };
      },
      fitView: (l) => mm(e.getState, l),
      setCenter: (l, u, c) => {
        const { width: f, height: m, maxZoom: h } = e.getState(), g = typeof (c == null ? void 0 : c.zoom) < "u" ? c.zoom : h, y = f / 2 - l * g, v = m / 2 - u * g, x = Hn.translate(y, v).scale(g);
        r.transform(Or(o, c == null ? void 0 : c.duration), x);
      },
      fitBounds: (l, u) => {
        const { width: c, height: f, minZoom: m, maxZoom: h } = e.getState(), { x: g, y, zoom: v } = em(l, c, f, m, h, (u == null ? void 0 : u.padding) ?? 0.1), x = Hn.translate(g, y).scale(v);
        r.transform(Or(o, u == null ? void 0 : u.duration), x);
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
        const { x: f, y: m } = c.getBoundingClientRect(), h = Z0(l, u);
        return {
          x: h.x + f,
          y: h.y + m
        };
      },
      viewportInitialized: true
    } : hS, [
      r,
      o
    ]);
  };
  function ji() {
    const e = mS(), r = nt(), o = D.useCallback(() => r.getState().getNodes().map((S) => ({
      ...S
    })), []), s = D.useCallback((S) => r.getState().nodeInternals.get(S), []), l = D.useCallback(() => {
      const { edges: S = [] } = r.getState();
      return S.map((N) => ({
        ...N
      }));
    }, []), u = D.useCallback((S) => {
      const { edges: N = [] } = r.getState();
      return N.find((C) => C.id === S);
    }, []), c = D.useCallback((S) => {
      const { getNodes: N, setNodes: C, hasDefaultNodes: P, onNodesChange: z } = r.getState(), A = N(), O = typeof S == "function" ? S(A) : S;
      if (P) C(O);
      else if (z) {
        const V = O.length === 0 ? A.map((J) => ({
          type: "remove",
          id: J.id
        })) : O.map((J) => ({
          item: J,
          type: "reset"
        }));
        z(V);
      }
    }, []), f = D.useCallback((S) => {
      const { edges: N = [], setEdges: C, hasDefaultEdges: P, onEdgesChange: z } = r.getState(), A = typeof S == "function" ? S(N) : S;
      if (P) C(A);
      else if (z) {
        const O = A.length === 0 ? N.map((V) => ({
          type: "remove",
          id: V.id
        })) : A.map((V) => ({
          item: V,
          type: "reset"
        }));
        z(O);
      }
    }, []), m = D.useCallback((S) => {
      const N = Array.isArray(S) ? S : [
        S
      ], { getNodes: C, setNodes: P, hasDefaultNodes: z, onNodesChange: A } = r.getState();
      if (z) {
        const V = [
          ...C(),
          ...N
        ];
        P(V);
      } else if (A) {
        const O = N.map((V) => ({
          item: V,
          type: "add"
        }));
        A(O);
      }
    }, []), h = D.useCallback((S) => {
      const N = Array.isArray(S) ? S : [
        S
      ], { edges: C = [], setEdges: P, hasDefaultEdges: z, onEdgesChange: A } = r.getState();
      if (z) P([
        ...C,
        ...N
      ]);
      else if (A) {
        const O = N.map((V) => ({
          item: V,
          type: "add"
        }));
        A(O);
      }
    }, []), g = D.useCallback(() => {
      const { getNodes: S, edges: N = [], transform: C } = r.getState(), [P, z, A] = C;
      return {
        nodes: S().map((O) => ({
          ...O
        })),
        edges: N.map((O) => ({
          ...O
        })),
        viewport: {
          x: P,
          y: z,
          zoom: A
        }
      };
    }, []), y = D.useCallback(({ nodes: S, edges: N }) => {
      const { nodeInternals: C, getNodes: P, edges: z, hasDefaultNodes: A, hasDefaultEdges: O, onNodesDelete: V, onEdgesDelete: J, onNodesChange: W, onEdgesChange: Y } = r.getState(), Q = (S || []).map((H) => H.id), ee = (N || []).map((H) => H.id), G = P().reduce((H, L) => {
        const K = L.parentNode || L.parentId, B = !Q.includes(L.id) && K && H.find((F) => F.id === K);
        return (typeof L.deletable == "boolean" ? L.deletable : true) && (Q.includes(L.id) || B) && H.push(L), H;
      }, []), Z = z.filter((H) => typeof H.deletable == "boolean" ? H.deletable : true), k = Z.filter((H) => ee.includes(H.id));
      if (G || k) {
        const H = J0(G, Z), L = [
          ...k,
          ...H
        ], K = L.reduce((B, T) => (B.includes(T.id) || B.push(T.id), B), []);
        if ((O || A) && (O && r.setState({
          edges: z.filter((B) => !K.includes(B.id))
        }), A && (G.forEach((B) => {
          C.delete(B.id);
        }), r.setState({
          nodeInternals: new Map(C)
        }))), K.length > 0 && (J == null ? void 0 : J(L), Y && Y(K.map((B) => ({
          id: B,
          type: "remove"
        })))), G.length > 0 && (V == null ? void 0 : V(G), W)) {
          const B = G.map((T) => ({
            id: T.id,
            type: "remove"
          }));
          W(B);
        }
      }
    }, []), v = D.useCallback((S) => {
      const N = zx(S), C = N ? null : r.getState().nodeInternals.get(S.id);
      return !N && !C ? [
        null,
        null,
        N
      ] : [
        N ? S : up(C),
        C,
        N
      ];
    }, []), x = D.useCallback((S, N = true, C) => {
      const [P, z, A] = v(S);
      return P ? (C || r.getState().getNodes()).filter((O) => {
        if (!A && (O.id === z.id || !O.positionAbsolute)) return false;
        const V = up(O), J = gc(V, P);
        return N && J > 0 || J >= P.width * P.height;
      }) : [];
    }, []), E = D.useCallback((S, N, C = true) => {
      const [P] = v(S);
      if (!P) return false;
      const z = gc(P, N);
      return C && z > 0 || z >= P.width * P.height;
    }, []);
    return D.useMemo(() => ({
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
  const gS = {
    actInsideInputWithModifier: false
  };
  var yS = ({ deleteKeyCode: e, multiSelectionKeyCode: r }) => {
    const o = nt(), { deleteElements: s } = ji(), l = zi(e, gS), u = zi(r);
    D.useEffect(() => {
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
    ]), D.useEffect(() => {
      o.setState({
        multiSelectionActive: u
      });
    }, [
      u
    ]);
  };
  function vS(e) {
    const r = nt();
    D.useEffect(() => {
      let o;
      const s = () => {
        var _a, _b;
        if (!e.current) return;
        const l = jc(e.current);
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
  const Kc = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }, wS = (e, r) => e.x !== r.x || e.y !== r.y || e.zoom !== r.k, vl = (e) => ({
    x: e.x,
    y: e.y,
    zoom: e.k
  }), Eo = (e, r) => e.target.closest(`.${r}`), wp = (e, r) => r === 2 && Array.isArray(e) && e.includes(2), xp = (e) => {
    const r = e.ctrlKey && Dl() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * r;
  }, xS = (e) => ({
    d3Zoom: e.d3Zoom,
    d3Selection: e.d3Selection,
    d3ZoomHandler: e.d3ZoomHandler,
    userSelectionActive: e.userSelectionActive
  }), SS = ({ onMove: e, onMoveStart: r, onMoveEnd: o, onPaneContextMenu: s, zoomOnScroll: l = true, zoomOnPinch: u = true, panOnScroll: c = false, panOnScrollSpeed: f = 0.5, panOnScrollMode: m = Br.Free, zoomOnDoubleClick: h = true, elementsSelectable: g, panOnDrag: y = true, defaultViewport: v, translateExtent: x, minZoom: E, maxZoom: S, zoomActivationKeyCode: N, preventScrolling: C = true, children: P, noWheelClassName: z, noPanClassName: A }) => {
    const O = D.useRef(), V = nt(), J = D.useRef(false), W = D.useRef(false), Y = D.useRef(null), Q = D.useRef({
      x: 0,
      y: 0,
      zoom: 0
    }), { d3Zoom: ee, d3Selection: G, d3ZoomHandler: Z, userSelectionActive: k } = ze(xS, At), H = zi(N), L = D.useRef(0), K = D.useRef(false), B = D.useRef();
    return vS(Y), D.useEffect(() => {
      if (Y.current) {
        const T = Y.current.getBoundingClientRect(), F = F0().scaleExtent([
          E,
          S
        ]).translateExtent(x), _ = Qt(Y.current).call(F), $ = Hn.translate(v.x, v.y).scale(Ao(v.zoom, E, S)), oe = [
          [
            0,
            0
          ],
          [
            T.width,
            T.height
          ]
        ], ne = F.constrain()($, oe, x);
        F.transform(_, ne), F.wheelDelta(xp), V.setState({
          d3Zoom: F,
          d3Selection: _,
          d3ZoomHandler: _.on("wheel.zoom"),
          transform: [
            ne.x,
            ne.y,
            ne.k
          ],
          domNode: Y.current.closest(".react-flow")
        });
      }
    }, []), D.useEffect(() => {
      G && ee && (c && !H && !k ? G.on("wheel.zoom", (T) => {
        if (Eo(T, z)) return false;
        T.preventDefault(), T.stopImmediatePropagation();
        const F = G.property("__zoom").k || 1;
        if (T.ctrlKey && u) {
          const me = cn(T), ve = xp(T), ke = F * Math.pow(2, ve);
          ee.scaleTo(G, ke, me, T);
          return;
        }
        const _ = T.deltaMode === 1 ? 20 : 1;
        let $ = m === Br.Vertical ? 0 : T.deltaX * _, oe = m === Br.Horizontal ? 0 : T.deltaY * _;
        !Dl() && T.shiftKey && m !== Br.Vertical && ($ = T.deltaY * _, oe = 0), ee.translateBy(G, -($ / F) * f, -(oe / F) * f, {
          internal: true
        });
        const ne = vl(G.property("__zoom")), { onViewportChangeStart: le, onViewportChange: ae, onViewportChangeEnd: he } = V.getState();
        clearTimeout(B.current), K.current || (K.current = true, r == null ? void 0 : r(T, ne), le == null ? void 0 : le(ne)), K.current && (e == null ? void 0 : e(T, ne), ae == null ? void 0 : ae(ne), B.current = setTimeout(() => {
          o == null ? void 0 : o(T, ne), he == null ? void 0 : he(ne), K.current = false;
        }, 150));
      }, {
        passive: false
      }) : typeof Z < "u" && G.on("wheel.zoom", function(T, F) {
        if (!C && T.type === "wheel" && !T.ctrlKey || Eo(T, z)) return null;
        T.preventDefault(), Z.call(this, T, F);
      }, {
        passive: false
      }));
    }, [
      k,
      c,
      m,
      G,
      ee,
      Z,
      H,
      u,
      C,
      z,
      r,
      e,
      o
    ]), D.useEffect(() => {
      ee && ee.on("start", (T) => {
        var _a, _b;
        if (!T.sourceEvent || T.sourceEvent.internal) return null;
        L.current = (_a = T.sourceEvent) == null ? void 0 : _a.button;
        const { onViewportChangeStart: F } = V.getState(), _ = vl(T.transform);
        J.current = true, Q.current = _, ((_b = T.sourceEvent) == null ? void 0 : _b.type) === "mousedown" && V.setState({
          paneDragging: true
        }), F == null ? void 0 : F(_), r == null ? void 0 : r(T.sourceEvent, _);
      });
    }, [
      ee,
      r
    ]), D.useEffect(() => {
      ee && (k && !J.current ? ee.on("zoom", null) : k || ee.on("zoom", (T) => {
        var _a;
        const { onViewportChange: F } = V.getState();
        if (V.setState({
          transform: [
            T.transform.x,
            T.transform.y,
            T.transform.k
          ]
        }), W.current = !!(s && wp(y, L.current ?? 0)), (e || F) && !((_a = T.sourceEvent) == null ? void 0 : _a.internal)) {
          const _ = vl(T.transform);
          F == null ? void 0 : F(_), e == null ? void 0 : e(T.sourceEvent, _);
        }
      }));
    }, [
      k,
      ee,
      e,
      y,
      s
    ]), D.useEffect(() => {
      ee && ee.on("end", (T) => {
        if (!T.sourceEvent || T.sourceEvent.internal) return null;
        const { onViewportChangeEnd: F } = V.getState();
        if (J.current = false, V.setState({
          paneDragging: false
        }), s && wp(y, L.current ?? 0) && !W.current && s(T.sourceEvent), W.current = false, (o || F) && wS(Q.current, T.transform)) {
          const _ = vl(T.transform);
          Q.current = _, clearTimeout(O.current), O.current = setTimeout(() => {
            F == null ? void 0 : F(_), o == null ? void 0 : o(T.sourceEvent, _);
          }, c ? 150 : 0);
        }
      });
    }, [
      ee,
      c,
      y,
      o,
      s
    ]), D.useEffect(() => {
      ee && ee.filter((T) => {
        const F = H || l, _ = u && T.ctrlKey;
        if ((y === true || Array.isArray(y) && y.includes(1)) && T.button === 1 && T.type === "mousedown" && (Eo(T, "react-flow__node") || Eo(T, "react-flow__edge"))) return true;
        if (!y && !F && !c && !h && !u || k || !h && T.type === "dblclick" || Eo(T, z) && T.type === "wheel" || Eo(T, A) && (T.type !== "wheel" || c && T.type === "wheel" && !H) || !u && T.ctrlKey && T.type === "wheel" || !F && !c && !_ && T.type === "wheel" || !y && (T.type === "mousedown" || T.type === "touchstart") || Array.isArray(y) && !y.includes(T.button) && T.type === "mousedown") return false;
        const $ = Array.isArray(y) && y.includes(T.button) || !T.button || T.button <= 1;
        return (!T.ctrlKey || T.type === "wheel") && $;
      });
    }, [
      k,
      ee,
      l,
      u,
      c,
      h,
      y,
      g,
      H
    ]), q.createElement("div", {
      className: "react-flow__renderer",
      ref: Y,
      style: Kc
    }, P);
  }, ES = (e) => ({
    userSelectionActive: e.userSelectionActive,
    userSelectionRect: e.userSelectionRect
  });
  function kS() {
    const { userSelectionActive: e, userSelectionRect: r } = ze(ES, At);
    return e && r ? q.createElement("div", {
      className: "react-flow__selection react-flow__container",
      style: {
        width: r.width,
        height: r.height,
        transform: `translate(${r.x}px, ${r.y}px)`
      }
    }) : null;
  }
  function Sp(e, r) {
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
  function gm(e, r) {
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
          typeof f.position < "u" && (c.position = f.position), typeof f.positionAbsolute < "u" && (c.positionAbsolute = f.positionAbsolute), typeof f.dragging < "u" && (c.dragging = f.dragging), c.expandParent && Sp(s, c);
          break;
        }
        case "dimensions": {
          typeof f.dimensions < "u" && (c.width = f.dimensions.width, c.height = f.dimensions.height), typeof f.updateStyle < "u" && (c.style = {
            ...c.style || {},
            ...f.dimensions
          }), typeof f.resizing == "boolean" && (c.resizing = f.resizing), c.expandParent && Sp(s, c);
          break;
        }
        case "remove":
          return s;
      }
      return s.push(c), s;
    }, o);
  }
  function ym(e, r) {
    return gm(e, r);
  }
  function CS(e, r) {
    return gm(e, r);
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
  }, _S = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    dragging: e.paneDragging
  }), vm = D.memo(({ isSelecting: e, selectionMode: r = $i.Full, panOnDrag: o, onSelectionStart: s, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: c, onPaneScroll: f, onPaneMouseEnter: m, onPaneMouseMove: h, onPaneMouseLeave: g, children: y }) => {
    const v = D.useRef(null), x = nt(), E = D.useRef(0), S = D.useRef(0), N = D.useRef(), { userSelectionActive: C, elementsSelectable: P, dragging: z } = ze(_S, At), A = () => {
      x.setState({
        userSelectionActive: false,
        userSelectionRect: null
      }), E.current = 0, S.current = 0;
    }, O = (Z) => {
      u == null ? void 0 : u(Z), x.getState().resetSelectedElements(), x.setState({
        nodesSelectionActive: false
      });
    }, V = (Z) => {
      if (Array.isArray(o) && (o == null ? void 0 : o.includes(2))) {
        Z.preventDefault();
        return;
      }
      c == null ? void 0 : c(Z);
    }, J = f ? (Z) => f(Z) : void 0, W = (Z) => {
      const { resetSelectedElements: k, domNode: H } = x.getState();
      if (N.current = H == null ? void 0 : H.getBoundingClientRect(), !P || !e || Z.button !== 0 || Z.target !== v.current || !N.current) return;
      const { x: L, y: K } = gr(Z, N.current);
      k(), x.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: L,
          startY: K,
          x: L,
          y: K
        }
      }), s == null ? void 0 : s(Z);
    }, Y = (Z) => {
      const { userSelectionRect: k, nodeInternals: H, edges: L, transform: K, onNodesChange: B, onEdgesChange: T, nodeOrigin: F, getNodes: _ } = x.getState();
      if (!e || !N.current || !k) return;
      x.setState({
        userSelectionActive: true,
        nodesSelectionActive: false
      });
      const $ = gr(Z, N.current), oe = k.startX ?? 0, ne = k.startY ?? 0, le = {
        ...k,
        x: $.x < oe ? $.x : oe,
        y: $.y < ne ? $.y : ne,
        width: Math.abs($.x - oe),
        height: Math.abs($.y - ne)
      }, ae = _(), he = q0(H, le, K, r === $i.Partial, true, F), me = J0(he, L).map((ke) => ke.id), ve = he.map((ke) => ke.id);
      if (E.current !== ve.length) {
        E.current = ve.length;
        const ke = Co(ae, ve);
        ke.length && (B == null ? void 0 : B(ke));
      }
      if (S.current !== me.length) {
        S.current = me.length;
        const ke = Co(L, me);
        ke.length && (T == null ? void 0 : T(ke));
      }
      x.setState({
        userSelectionRect: le
      });
    }, Q = (Z) => {
      if (Z.button !== 0) return;
      const { userSelectionRect: k } = x.getState();
      !C && k && Z.target === v.current && (O == null ? void 0 : O(Z)), x.setState({
        nodesSelectionActive: E.current > 0
      }), A(), l == null ? void 0 : l(Z);
    }, ee = (Z) => {
      C && (x.setState({
        nodesSelectionActive: E.current > 0
      }), l == null ? void 0 : l(Z)), A();
    }, G = P && (e || C);
    return q.createElement("div", {
      className: gt([
        "react-flow__pane",
        {
          dragging: z,
          selection: e
        }
      ]),
      onClick: G ? void 0 : ec(O, v),
      onContextMenu: ec(V, v),
      onWheel: ec(J, v),
      onMouseEnter: G ? void 0 : m,
      onMouseDown: G ? W : void 0,
      onMouseMove: G ? Y : h,
      onMouseUp: G ? Q : void 0,
      onMouseLeave: G ? ee : g,
      ref: v,
      style: Kc
    }, y, q.createElement(kS, null));
  });
  vm.displayName = "Pane";
  function wm(e, r) {
    const o = e.parentNode || e.parentId;
    if (!o) return false;
    const s = r.get(o);
    return s ? s.selected ? true : wm(s, r) : false;
  }
  function Ep(e, r, o) {
    let s = e;
    do {
      if (s == null ? void 0 : s.matches(r)) return true;
      if (s === o.current) return false;
      s = s.parentElement;
    } while (s);
    return false;
  }
  function NS(e, r, o, s) {
    return Array.from(e.values()).filter((l) => (l.selected || l.id === s) && (!l.parentNode || l.parentId || !wm(l, e)) && (l.draggable || r && typeof l.draggable > "u")).map((l) => {
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
  function xm(e, r, o, s, l = [
    0,
    0
  ], u) {
    const c = MS(e, e.extent || s);
    let f = c;
    const m = e.parentNode || e.parentId;
    if (e.extent === "parent" && !e.expandParent) if (m && e.width && e.height) {
      const y = o.get(m), { x: v, y: x } = Hr(y, l).positionAbsolute;
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
      const y = o.get(m), { x: v, y: x } = Hr(y, l).positionAbsolute;
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
      h = Hr(y, l).positionAbsolute;
    }
    const g = f && f !== "parent" ? Hc(r, f) : r;
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
  const kp = (e, r, o, s) => {
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
        ...jc(m)
      };
    });
  };
  function Ei(e, r, o) {
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
  function IS() {
    const e = nt();
    return D.useCallback(({ sourceEvent: o }) => {
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
  function Sm({ nodeRef: e, disabled: r = false, noDragClassName: o, handleSelector: s, nodeId: l, isSelectable: u, selectNodesOnDrag: c }) {
    const f = nt(), [m, h] = D.useState(false), g = D.useRef([]), y = D.useRef({
      x: null,
      y: null
    }), v = D.useRef(0), x = D.useRef(null), E = D.useRef({
      x: 0,
      y: 0
    }), S = D.useRef(null), N = D.useRef(false), C = D.useRef(false), P = D.useRef(false), z = IS();
    return D.useEffect(() => {
      if (e == null ? void 0 : e.current) {
        const A = Qt(e.current), O = ({ x: W, y: Y }) => {
          const { nodeInternals: Q, onNodeDrag: ee, onSelectionDrag: G, updateNodePositions: Z, nodeExtent: k, snapGrid: H, snapToGrid: L, nodeOrigin: K, onError: B } = f.getState();
          y.current = {
            x: W,
            y: Y
          };
          let T = false, F = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 0
          };
          if (g.current.length > 1 && k) {
            const $ = Zl(g.current, K);
            F = Pi($);
          }
          if (g.current = g.current.map(($) => {
            const oe = {
              x: W - $.distance.x,
              y: Y - $.distance.y
            };
            L && (oe.x = H[0] * Math.round(oe.x / H[0]), oe.y = H[1] * Math.round(oe.y / H[1]));
            const ne = [
              [
                k[0][0],
                k[0][1]
              ],
              [
                k[1][0],
                k[1][1]
              ]
            ];
            g.current.length > 1 && k && !$.extent && (ne[0][0] = $.positionAbsolute.x - F.x + k[0][0], ne[1][0] = $.positionAbsolute.x + ($.width ?? 0) - F.x2 + k[1][0], ne[0][1] = $.positionAbsolute.y - F.y + k[0][1], ne[1][1] = $.positionAbsolute.y + ($.height ?? 0) - F.y2 + k[1][1]);
            const le = xm($, oe, Q, ne, K, B);
            return T = T || $.position.x !== le.position.x || $.position.y !== le.position.y, $.position = le.position, $.positionAbsolute = le.positionAbsolute, $;
          }), !T) return;
          Z(g.current, true, true), h(true);
          const _ = l ? ee : nc(G);
          if (_ && S.current) {
            const [$, oe] = tc({
              nodeId: l,
              dragItems: g.current,
              nodeInternals: Q
            });
            _(S.current, $, oe);
          }
        }, V = () => {
          if (!x.current) return;
          const [W, Y] = j0(E.current, x.current);
          if (W !== 0 || Y !== 0) {
            const { transform: Q, panBy: ee } = f.getState();
            y.current.x = (y.current.x ?? 0) - W / Q[2], y.current.y = (y.current.y ?? 0) - Y / Q[2], ee({
              x: W,
              y: Y
            }) && O(y.current);
          }
          v.current = requestAnimationFrame(V);
        }, J = (W) => {
          var _a;
          const { nodeInternals: Y, multiSelectionActive: Q, nodesDraggable: ee, unselectNodesAndEdges: G, onNodeDragStart: Z, onSelectionDragStart: k } = f.getState();
          C.current = true;
          const H = l ? Z : nc(k);
          (!c || !u) && !Q && l && (((_a = Y.get(l)) == null ? void 0 : _a.selected) || G()), l && u && c && Sc({
            id: l,
            store: f,
            nodeRef: e
          });
          const L = z(W);
          if (y.current = L, g.current = NS(Y, ee, L, l), H && g.current) {
            const [K, B] = tc({
              nodeId: l,
              dragItems: g.current,
              nodeInternals: Y
            });
            H(W.sourceEvent, K, B);
          }
        };
        if (r) A.on(".drag", null);
        else {
          const W = Ov().on("start", (Y) => {
            const { domNode: Q, nodeDragThreshold: ee } = f.getState();
            ee === 0 && J(Y), P.current = false;
            const G = z(Y);
            y.current = G, x.current = (Q == null ? void 0 : Q.getBoundingClientRect()) || null, E.current = gr(Y.sourceEvent, x.current);
          }).on("drag", (Y) => {
            var _a, _b;
            const Q = z(Y), { autoPanOnNodeDrag: ee, nodeDragThreshold: G } = f.getState();
            if (Y.sourceEvent.type === "touchmove" && Y.sourceEvent.touches.length > 1 && (P.current = true), !P.current) {
              if (!N.current && C.current && ee && (N.current = true, V()), !C.current) {
                const Z = Q.xSnapped - (((_a = y == null ? void 0 : y.current) == null ? void 0 : _a.x) ?? 0), k = Q.ySnapped - (((_b = y == null ? void 0 : y.current) == null ? void 0 : _b.y) ?? 0);
                Math.sqrt(Z * Z + k * k) > G && J(Y);
              }
              (y.current.x !== Q.xSnapped || y.current.y !== Q.ySnapped) && g.current && C.current && (S.current = Y.sourceEvent, E.current = gr(Y.sourceEvent, x.current), O(Q));
            }
          }).on("end", (Y) => {
            if (!(!C.current || P.current) && (h(false), N.current = false, C.current = false, cancelAnimationFrame(v.current), g.current)) {
              const { updateNodePositions: Q, nodeInternals: ee, onNodeDragStop: G, onSelectionDragStop: Z } = f.getState(), k = l ? G : nc(Z);
              if (Q(g.current, false, false), k) {
                const [H, L] = tc({
                  nodeId: l,
                  dragItems: g.current,
                  nodeInternals: ee
                });
                k(Y.sourceEvent, H, L);
              }
            }
          }).filter((Y) => {
            const Q = Y.target;
            return !Y.button && (!o || !Ep(Q, `.${o}`, e)) && (!s || Ep(Q, s, e));
          });
          return A.call(W), () => {
            A.on(".drag", null);
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
      z
    ]), m;
  }
  function Em() {
    const e = nt();
    return D.useCallback((o) => {
      const { nodeInternals: s, nodeExtent: l, updateNodePositions: u, getNodes: c, snapToGrid: f, snapGrid: m, onError: h, nodesDraggable: g } = e.getState(), y = c().filter((P) => P.selected && (P.draggable || g && typeof P.draggable > "u")), v = f ? m[0] : 5, x = f ? m[1] : 5, E = o.isShiftPressed ? 4 : 1, S = o.x * v * E, N = o.y * x * E, C = y.map((P) => {
        if (P.positionAbsolute) {
          const z = {
            x: P.positionAbsolute.x + S,
            y: P.positionAbsolute.y + N
          };
          f && (z.x = m[0] * Math.round(z.x / m[0]), z.y = m[1] * Math.round(z.y / m[1]));
          const { positionAbsolute: A, position: O } = xm(P, z, s, l, void 0, h);
          P.position = O, P.positionAbsolute = A;
        }
        return P;
      });
      u(C, true, false);
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
  var ki = (e) => {
    const r = ({ id: o, type: s, data: l, xPos: u, yPos: c, xPosOrigin: f, yPosOrigin: m, selected: h, onClick: g, onMouseEnter: y, onMouseMove: v, onMouseLeave: x, onContextMenu: E, onDoubleClick: S, style: N, className: C, isDraggable: P, isSelectable: z, isConnectable: A, isFocusable: O, selectNodesOnDrag: V, sourcePosition: J, targetPosition: W, hidden: Y, resizeObserver: Q, dragHandle: ee, zIndex: G, isParent: Z, noDragClassName: k, noPanClassName: H, initialized: L, disableKeyboardA11y: K, ariaLabel: B, rfId: T, hasHandleBounds: F }) => {
      const _ = nt(), $ = D.useRef(null), oe = D.useRef(null), ne = D.useRef(J), le = D.useRef(W), ae = D.useRef(s), he = z || P || g || y || v || x, me = Em(), ve = Ei(o, _.getState, y), ke = Ei(o, _.getState, v), Ve = Ei(o, _.getState, x), Ue = Ei(o, _.getState, E), Ke = Ei(o, _.getState, S), Qe = (Me) => {
        const { nodeDragThreshold: ye } = _.getState();
        if (z && (!V || !P || ye > 0) && Sc({
          id: o,
          store: _,
          nodeRef: $
        }), g) {
          const qe = _.getState().nodeInternals.get(o);
          qe && g(Me, {
            ...qe
          });
        }
      }, Oe = (Me) => {
        if (!yc(Me) && !K) if (W0.includes(Me.key) && z) {
          const ye = Me.key === "Escape";
          Sc({
            id: o,
            store: _,
            unselect: ye,
            nodeRef: $
          });
        } else P && h && Object.prototype.hasOwnProperty.call(Mo, Me.key) && (_.setState({
          ariaLiveMessage: `Moved selected node ${Me.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~u}, y: ${~~c}`
        }), me({
          x: Mo[Me.key].x,
          y: Mo[Me.key].y,
          isShiftPressed: Me.shiftKey
        }));
      };
      D.useEffect(() => () => {
        oe.current && (Q == null ? void 0 : Q.unobserve(oe.current), oe.current = null);
      }, []), D.useEffect(() => {
        if ($.current && !Y) {
          const Me = $.current;
          (!L || !F || oe.current !== Me) && (oe.current && (Q == null ? void 0 : Q.unobserve(oe.current)), Q == null ? void 0 : Q.observe(Me), oe.current = Me);
        }
      }, [
        Y,
        L,
        F
      ]), D.useEffect(() => {
        const Me = ae.current !== s, ye = ne.current !== J, qe = le.current !== W;
        $.current && (Me || ye || qe) && (Me && (ae.current = s), ye && (ne.current = J), qe && (le.current = W), _.getState().updateNodeDimensions([
          {
            id: o,
            nodeElement: $.current,
            forceUpdate: true
          }
        ]));
      }, [
        o,
        s,
        J,
        W
      ]);
      const ut = Sm({
        nodeRef: $,
        disabled: Y || !P,
        noDragClassName: k,
        handleSelector: ee,
        nodeId: o,
        isSelectable: z,
        selectNodesOnDrag: V
      });
      return Y ? null : q.createElement("div", {
        className: gt([
          "react-flow__node",
          `react-flow__node-${s}`,
          {
            [H]: P
          },
          C,
          {
            selected: h,
            selectable: z,
            parent: Z,
            dragging: ut
          }
        ]),
        ref: $,
        style: {
          zIndex: G,
          transform: `translate(${f}px,${m}px)`,
          pointerEvents: he ? "all" : "none",
          visibility: L ? "visible" : "hidden",
          ...N
        },
        "data-id": o,
        "data-testid": `rf__node-${o}`,
        onMouseEnter: ve,
        onMouseMove: ke,
        onMouseLeave: Ve,
        onContextMenu: Ue,
        onClick: Qe,
        onDoubleClick: Ke,
        onKeyDown: O ? Oe : void 0,
        tabIndex: O ? 0 : void 0,
        role: O ? "button" : void 0,
        "aria-describedby": K ? void 0 : `${dm}-${T}`,
        "aria-label": B
      }, q.createElement(Hx, {
        value: o
      }, q.createElement(e, {
        id: o,
        data: l,
        type: s,
        xPos: u,
        yPos: c,
        selected: h,
        isConnectable: A,
        sourcePosition: J,
        targetPosition: W,
        dragging: ut,
        dragHandle: ee,
        zIndex: G
      })));
    };
    return r.displayName = "NodeWrapper", D.memo(r);
  };
  const bS = (e) => {
    const r = e.getNodes().filter((o) => o.selected);
    return {
      ...Zl(r, e.nodeOrigin),
      transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
      userSelectionActive: e.userSelectionActive
    };
  };
  function AS({ onSelectionContextMenu: e, noPanClassName: r, disableKeyboardA11y: o }) {
    const s = nt(), { width: l, height: u, x: c, y: f, transformString: m, userSelectionActive: h } = ze(bS, At), g = Em(), y = D.useRef(null);
    if (D.useEffect(() => {
      var _a;
      o || ((_a = y.current) == null ? void 0 : _a.focus({
        preventScroll: true
      }));
    }, [
      o
    ]), Sm({
      nodeRef: y
    }), h || !l || !u) return null;
    const v = e ? (E) => {
      const S = s.getState().getNodes().filter((N) => N.selected);
      e(E, S);
    } : void 0, x = (E) => {
      Object.prototype.hasOwnProperty.call(Mo, E.key) && g({
        x: Mo[E.key].x,
        y: Mo[E.key].y,
        isShiftPressed: E.shiftKey
      });
    };
    return q.createElement("div", {
      className: gt([
        "react-flow__nodesselection",
        "react-flow__container",
        r
      ]),
      style: {
        transform: m
      }
    }, q.createElement("div", {
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
  var TS = D.memo(AS);
  const RS = (e) => e.nodesSelectionActive, km = ({ children: e, onPaneClick: r, onPaneMouseEnter: o, onPaneMouseMove: s, onPaneMouseLeave: l, onPaneContextMenu: u, onPaneScroll: c, deleteKeyCode: f, onMove: m, onMoveStart: h, onMoveEnd: g, selectionKeyCode: y, selectionOnDrag: v, selectionMode: x, onSelectionStart: E, onSelectionEnd: S, multiSelectionKeyCode: N, panActivationKeyCode: C, zoomActivationKeyCode: P, elementsSelectable: z, zoomOnScroll: A, zoomOnPinch: O, panOnScroll: V, panOnScrollSpeed: J, panOnScrollMode: W, zoomOnDoubleClick: Y, panOnDrag: Q, defaultViewport: ee, translateExtent: G, minZoom: Z, maxZoom: k, preventScrolling: H, onSelectionContextMenu: L, noWheelClassName: K, noPanClassName: B, disableKeyboardA11y: T }) => {
    const F = ze(RS), _ = zi(y), $ = zi(C), oe = $ || Q, ne = $ || V, le = _ || v && oe !== true;
    return yS({
      deleteKeyCode: f,
      multiSelectionKeyCode: N
    }), q.createElement(SS, {
      onMove: m,
      onMoveStart: h,
      onMoveEnd: g,
      onPaneContextMenu: u,
      elementsSelectable: z,
      zoomOnScroll: A,
      zoomOnPinch: O,
      panOnScroll: ne,
      panOnScrollSpeed: J,
      panOnScrollMode: W,
      zoomOnDoubleClick: Y,
      panOnDrag: !_ && oe,
      defaultViewport: ee,
      translateExtent: G,
      minZoom: Z,
      maxZoom: k,
      zoomActivationKeyCode: P,
      preventScrolling: H,
      noWheelClassName: K,
      noPanClassName: B
    }, q.createElement(vm, {
      onSelectionStart: E,
      onSelectionEnd: S,
      onPaneClick: r,
      onPaneMouseEnter: o,
      onPaneMouseMove: s,
      onPaneMouseLeave: l,
      onPaneContextMenu: u,
      onPaneScroll: c,
      panOnDrag: oe,
      isSelecting: !!le,
      selectionMode: x
    }, e, F && q.createElement(TS, {
      onSelectionContextMenu: L,
      noPanClassName: B,
      disableKeyboardA11y: T
    })));
  };
  km.displayName = "FlowRenderer";
  var PS = D.memo(km);
  function $S(e) {
    return ze(D.useCallback((o) => e ? q0(o.nodeInternals, {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }, o.transform, true) : o.getNodes(), [
      e
    ]));
  }
  function zS(e) {
    const r = {
      input: ki(e.input || lm),
      default: ki(e.default || xc),
      output: ki(e.output || um),
      group: ki(e.group || Gc)
    }, o = {}, s = Object.keys(e).filter((l) => ![
      "input",
      "default",
      "output",
      "group"
    ].includes(l)).reduce((l, u) => (l[u] = ki(e[u] || xc), l), o);
    return {
      ...r,
      ...s
    };
  }
  const DS = ({ x: e, y: r, width: o, height: s, origin: l }) => !o || !s ? {
    x: e,
    y: r
  } : l[0] < 0 || l[1] < 0 || l[0] > 1 || l[1] > 1 ? {
    x: e,
    y: r
  } : {
    x: e - o * l[0],
    y: r - s * l[1]
  }, LS = (e) => ({
    nodesDraggable: e.nodesDraggable,
    nodesConnectable: e.nodesConnectable,
    nodesFocusable: e.nodesFocusable,
    elementsSelectable: e.elementsSelectable,
    updateNodeDimensions: e.updateNodeDimensions,
    onError: e.onError
  }), Cm = (e) => {
    const { nodesDraggable: r, nodesConnectable: o, nodesFocusable: s, elementsSelectable: l, updateNodeDimensions: u, onError: c } = ze(LS, At), f = $S(e.onlyRenderVisibleElements), m = D.useRef(), h = D.useMemo(() => {
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
    return D.useEffect(() => () => {
      var _a;
      (_a = m == null ? void 0 : m.current) == null ? void 0 : _a.disconnect();
    }, []), q.createElement("div", {
      className: "react-flow__nodes",
      style: Kc
    }, f.map((g) => {
      var _a, _b, _c2;
      let y = g.type || "default";
      e.nodeTypes[y] || (c == null ? void 0 : c("003", Wn.error003(y)), y = "default");
      const v = e.nodeTypes[y] || e.nodeTypes.default, x = !!(g.draggable || r && typeof g.draggable > "u"), E = !!(g.selectable || l && typeof g.selectable > "u"), S = !!(g.connectable || o && typeof g.connectable > "u"), N = !!(g.focusable || s && typeof g.focusable > "u"), C = e.nodeExtent ? Hc(g.positionAbsolute, e.nodeExtent) : g.positionAbsolute, P = (C == null ? void 0 : C.x) ?? 0, z = (C == null ? void 0 : C.y) ?? 0, A = DS({
        x: P,
        y: z,
        width: g.width ?? 0,
        height: g.height ?? 0,
        origin: e.nodeOrigin
      });
      return q.createElement(v, {
        key: g.id,
        id: g.id,
        className: g.className,
        style: g.style,
        type: y,
        data: g.data,
        sourcePosition: g.sourcePosition || ge.Bottom,
        targetPosition: g.targetPosition || ge.Top,
        hidden: g.hidden,
        xPos: P,
        yPos: z,
        xPosOrigin: A.x,
        yPosOrigin: A.y,
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
        isFocusable: N,
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
  Cm.displayName = "NodeRenderer";
  var OS = D.memo(Cm);
  const FS = (e, r, o) => o === ge.Left ? e - r : o === ge.Right ? e + r : e, BS = (e, r, o) => o === ge.Top ? e - r : o === ge.Bottom ? e + r : e, Cp = "react-flow__edgeupdater", _p = ({ position: e, centerX: r, centerY: o, radius: s = 10, onMouseDown: l, onMouseEnter: u, onMouseOut: c, type: f }) => q.createElement("circle", {
    onMouseDown: l,
    onMouseEnter: u,
    onMouseOut: c,
    className: gt([
      Cp,
      `${Cp}-${f}`
    ]),
    cx: FS(r, s, e),
    cy: BS(o, s, e),
    r: s,
    stroke: "transparent",
    fill: "transparent"
  }), jS = () => true;
  var ko = (e) => {
    const r = ({ id: o, className: s, type: l, data: u, onClick: c, onEdgeDoubleClick: f, selected: m, animated: h, label: g, labelStyle: y, labelShowBg: v, labelBgStyle: x, labelBgPadding: E, labelBgBorderRadius: S, style: N, source: C, target: P, sourceX: z, sourceY: A, targetX: O, targetY: V, sourcePosition: J, targetPosition: W, elementsSelectable: Y, hidden: Q, sourceHandleId: ee, targetHandleId: G, onContextMenu: Z, onMouseEnter: k, onMouseMove: H, onMouseLeave: L, reconnectRadius: K, onReconnect: B, onReconnectStart: T, onReconnectEnd: F, markerEnd: _, markerStart: $, rfId: oe, ariaLabel: ne, isFocusable: le, isReconnectable: ae, pathOptions: he, interactionWidth: me, disableKeyboardA11y: ve }) => {
      const ke = D.useRef(null), [Ve, Ue] = D.useState(false), [Ke, Qe] = D.useState(false), Oe = nt(), ut = D.useMemo(() => `url('#${vc($, oe)}')`, [
        $,
        oe
      ]), Me = D.useMemo(() => `url('#${vc(_, oe)}')`, [
        _,
        oe
      ]);
      if (Q) return null;
      const ye = (We) => {
        var _a;
        const { edges: jt, addSelectedEdges: mn, unselectNodesAndEdges: gn, multiSelectionActive: Yn } = Oe.getState(), St = jt.find((tn) => tn.id === o);
        St && (Y && (Oe.setState({
          nodesSelectionActive: false
        }), St.selected && Yn ? (gn({
          nodes: [],
          edges: [
            St
          ]
        }), (_a = ke.current) == null ? void 0 : _a.blur()) : mn([
          o
        ])), c && c(We, St));
      }, qe = Si(o, Oe.getState, f), yt = Si(o, Oe.getState, Z), Ft = Si(o, Oe.getState, k), hn = Si(o, Oe.getState, H), _n = Si(o, Oe.getState, L), Bt = (We, jt) => {
        if (We.button !== 0) return;
        const { edges: mn, isValidConnection: gn } = Oe.getState(), Yn = jt ? P : C, St = (jt ? G : ee) || null, tn = jt ? "target" : "source", Sr = gn || jS, Er = jt, In = mn.find((vn) => vn.id === o);
        Qe(true), T == null ? void 0 : T(We, In, tn);
        const yn = (vn) => {
          Qe(false), F == null ? void 0 : F(vn, In, tn);
        };
        rm({
          event: We,
          handleId: St,
          nodeId: Yn,
          onConnect: (vn) => B == null ? void 0 : B(In, vn),
          isTarget: Er,
          getState: Oe.getState,
          setState: Oe.setState,
          isValidConnection: Sr,
          edgeUpdaterType: tn,
          onReconnectEnd: yn
        });
      }, Nn = (We) => Bt(We, true), pn = (We) => Bt(We, false), qt = () => Ue(true), Jt = () => Ue(false), Mn = !Y && !c, en = (We) => {
        var _a;
        if (!ve && W0.includes(We.key) && Y) {
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
      return q.createElement("g", {
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
        "aria-label": ne === null ? void 0 : ne || `Edge from ${C} to ${P}`,
        "aria-describedby": le ? `${fm}-${oe}` : void 0,
        ref: ke
      }, !Ke && q.createElement(e, {
        id: o,
        source: C,
        target: P,
        selected: m,
        animated: h,
        label: g,
        labelStyle: y,
        labelShowBg: v,
        labelBgStyle: x,
        labelBgPadding: E,
        labelBgBorderRadius: S,
        data: u,
        style: N,
        sourceX: z,
        sourceY: A,
        targetX: O,
        targetY: V,
        sourcePosition: J,
        targetPosition: W,
        sourceHandleId: ee,
        targetHandleId: G,
        markerStart: ut,
        markerEnd: Me,
        pathOptions: he,
        interactionWidth: me
      }), ae && q.createElement(q.Fragment, null, (ae === "source" || ae === true) && q.createElement(_p, {
        position: J,
        centerX: z,
        centerY: A,
        radius: K,
        onMouseDown: Nn,
        onMouseEnter: qt,
        onMouseOut: Jt,
        type: "source"
      }), (ae === "target" || ae === true) && q.createElement(_p, {
        position: W,
        centerX: O,
        centerY: V,
        radius: K,
        onMouseDown: pn,
        onMouseEnter: qt,
        onMouseOut: Jt,
        type: "target"
      })));
    };
    return r.displayName = "EdgeWrapper", D.memo(r);
  };
  function HS(e) {
    const r = {
      default: ko(e.default || Ol),
      straight: ko(e.bezier || Wc),
      step: ko(e.step || Uc),
      smoothstep: ko(e.step || Ql),
      simplebezier: ko(e.simplebezier || Vc)
    }, o = {}, s = Object.keys(e).filter((l) => ![
      "default",
      "bezier"
    ].includes(l)).reduce((l, u) => (l[u] = ko(e[u] || Ol), l), o);
    return {
      ...r,
      ...s
    };
  }
  function Np(e, r, o = null) {
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
  function Mp(e, r) {
    return e ? e.length === 1 || !r ? e[0] : r && e.find((o) => o.id === r) || null : null;
  }
  const VS = (e, r, o, s, l, u) => {
    const c = Np(o, e, r), f = Np(u, s, l);
    return {
      sourceX: c.x,
      sourceY: c.y,
      targetX: f.x,
      targetY: f.y
    };
  };
  function US({ sourcePos: e, targetPos: r, sourceWidth: o, sourceHeight: s, targetWidth: l, targetHeight: u, width: c, height: f, transform: m }) {
    const h = {
      x: Math.min(e.x, r.x),
      y: Math.min(e.y, r.y),
      x2: Math.max(e.x + o, r.x + l),
      y2: Math.max(e.y + s, r.y + u)
    };
    h.x === h.x2 && (h.x2 += 1), h.y === h.y2 && (h.y2 += 1);
    const g = Pi({
      x: (0 - m[0]) / m[2],
      y: (0 - m[1]) / m[2],
      width: c / m[2],
      height: f / m[2]
    }), y = Math.max(0, Math.min(g.x2, h.x2) - Math.max(g.x, h.x)), v = Math.max(0, Math.min(g.y2, h.y2) - Math.max(g.y, h.y));
    return Math.ceil(y * v) > 0;
  }
  function Ip(e) {
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
  const WS = [
    {
      level: 0,
      isMaxLevel: true,
      edges: []
    }
  ];
  function YS(e, r, o = false) {
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
    return u.length === 0 ? WS : u;
  }
  function XS(e, r, o) {
    const s = ze(D.useCallback((l) => e ? l.edges.filter((u) => {
      const c = r.get(u.source), f = r.get(u.target);
      return (c == null ? void 0 : c.width) && (c == null ? void 0 : c.height) && (f == null ? void 0 : f.width) && (f == null ? void 0 : f.height) && US({
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
    return YS(s, r, o);
  }
  const GS = ({ color: e = "none", strokeWidth: r = 1 }) => q.createElement("polyline", {
    style: {
      stroke: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    points: "-5,-4 0,0 -5,4"
  }), KS = ({ color: e = "none", strokeWidth: r = 1 }) => q.createElement("polyline", {
    style: {
      stroke: e,
      fill: e,
      strokeWidth: r
    },
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "-5,-4 0,0 -5,4 -5,-4"
  }), bp = {
    [To.Arrow]: GS,
    [To.ArrowClosed]: KS
  };
  function QS(e) {
    const r = nt();
    return D.useMemo(() => {
      var _a, _b;
      return Object.prototype.hasOwnProperty.call(bp, e) ? bp[e] : ((_b = (_a = r.getState()).onError) == null ? void 0 : _b.call(_a, "009", Wn.error009(e)), null);
    }, [
      e
    ]);
  }
  const ZS = ({ id: e, type: r, color: o, width: s = 12.5, height: l = 12.5, markerUnits: u = "strokeWidth", strokeWidth: c, orient: f = "auto-start-reverse" }) => {
    const m = QS(r);
    return m ? q.createElement("marker", {
      className: "react-flow__arrowhead",
      id: e,
      markerWidth: `${s}`,
      markerHeight: `${l}`,
      viewBox: "-10 -10 20 20",
      markerUnits: u,
      orient: f,
      refX: "0",
      refY: "0"
    }, q.createElement(m, {
      color: o,
      strokeWidth: c
    })) : null;
  }, qS = ({ defaultColor: e, rfId: r }) => (o) => {
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
  }, _m = ({ defaultColor: e, rfId: r }) => {
    const o = ze(D.useCallback(qS({
      defaultColor: e,
      rfId: r
    }), [
      e,
      r
    ]), (s, l) => !(s.length !== l.length || s.some((u, c) => u.id !== l[c].id)));
    return q.createElement("defs", null, o.map((s) => q.createElement(ZS, {
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
  _m.displayName = "MarkerDefinitions";
  var JS = D.memo(_m);
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
  }), Nm = ({ defaultMarkerColor: e, onlyRenderVisibleElements: r, elevateEdgesOnSelect: o, rfId: s, edgeTypes: l, noPanClassName: u, onEdgeContextMenu: c, onEdgeMouseEnter: f, onEdgeMouseMove: m, onEdgeMouseLeave: h, onEdgeClick: g, onEdgeDoubleClick: y, onReconnect: v, onReconnectStart: x, onReconnectEnd: E, reconnectRadius: S, children: N, disableKeyboardA11y: C }) => {
    const { edgesFocusable: P, edgesUpdatable: z, elementsSelectable: A, width: O, height: V, connectionMode: J, nodeInternals: W, onError: Y } = ze(e2, At), Q = XS(r, W, o);
    return O ? q.createElement(q.Fragment, null, Q.map(({ level: ee, edges: G, isMaxLevel: Z }) => q.createElement("svg", {
      key: ee,
      style: {
        zIndex: ee
      },
      width: O,
      height: V,
      className: "react-flow__edges react-flow__container"
    }, Z && q.createElement(JS, {
      defaultColor: e,
      rfId: s
    }), q.createElement("g", null, G.map((k) => {
      const [H, L, K] = Ip(W.get(k.source)), [B, T, F] = Ip(W.get(k.target));
      if (!K || !F) return null;
      let _ = k.type || "default";
      l[_] || (Y == null ? void 0 : Y("011", Wn.error011(_)), _ = "default");
      const $ = l[_] || l.default, oe = J === Yr.Strict ? T.target : (T.target ?? []).concat(T.source ?? []), ne = Mp(L.source, k.sourceHandle), le = Mp(oe, k.targetHandle), ae = (ne == null ? void 0 : ne.position) || ge.Bottom, he = (le == null ? void 0 : le.position) || ge.Top, me = !!(k.focusable || P && typeof k.focusable > "u"), ve = k.reconnectable || k.updatable, ke = typeof v < "u" && (ve || z && typeof ve > "u");
      if (!ne || !le) return Y == null ? void 0 : Y("008", Wn.error008(ne, k)), null;
      const { sourceX: Ve, sourceY: Ue, targetX: Ke, targetY: Qe } = VS(H, ne, ae, B, le, he);
      return q.createElement($, {
        key: k.id,
        id: k.id,
        className: gt([
          k.className,
          u
        ]),
        type: _,
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
        elementsSelectable: A,
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
        disableKeyboardA11y: C
      });
    })))), N) : null;
  };
  Nm.displayName = "EdgeRenderer";
  var t2 = D.memo(Nm);
  const n2 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
  function r2({ children: e }) {
    const r = ze(n2);
    return q.createElement("div", {
      className: "react-flow__viewport react-flow__container",
      style: {
        transform: r
      }
    }, e);
  }
  function o2(e) {
    const r = ji(), o = D.useRef(false);
    D.useEffect(() => {
      !o.current && r.viewportInitialized && e && (setTimeout(() => e(r), 1), o.current = true);
    }, [
      e,
      r.viewportInitialized
    ]);
  }
  const i2 = {
    [ge.Left]: ge.Right,
    [ge.Right]: ge.Left,
    [ge.Top]: ge.Bottom,
    [ge.Bottom]: ge.Top
  }, Mm = ({ nodeId: e, handleType: r, style: o, type: s = mr.Bezier, CustomComponent: l, connectionStatus: u }) => {
    var _a, _b, _c2;
    const { fromNode: c, handleId: f, toX: m, toY: h, connectionMode: g } = ze(D.useCallback((V) => ({
      fromNode: V.nodeInternals.get(e),
      handleId: V.connectionHandleId,
      toX: (V.connectionPosition.x - V.transform[0]) / V.transform[2],
      toY: (V.connectionPosition.y - V.transform[1]) / V.transform[2],
      connectionMode: V.connectionMode
    }), [
      e
    ]), At), y = (_a = c == null ? void 0 : c[Xe]) == null ? void 0 : _a.handleBounds;
    let v = y == null ? void 0 : y[r];
    if (g === Yr.Loose && (v = v || (y == null ? void 0 : y[r === "source" ? "target" : "source"])), !c || !v) return null;
    const x = f ? v.find((V) => V.id === f) : v[0], E = x ? x.x + x.width / 2 : (c.width ?? 0) / 2, S = x ? x.y + x.height / 2 : c.height ?? 0, N = (((_b = c.positionAbsolute) == null ? void 0 : _b.x) ?? 0) + E, C = (((_c2 = c.positionAbsolute) == null ? void 0 : _c2.y) ?? 0) + S, P = x == null ? void 0 : x.position, z = P ? i2[P] : null;
    if (!P || !z) return null;
    if (l) return q.createElement(l, {
      connectionLineType: s,
      connectionLineStyle: o,
      fromNode: c,
      fromHandle: x,
      fromX: N,
      fromY: C,
      toX: m,
      toY: h,
      fromPosition: P,
      toPosition: z,
      connectionStatus: u
    });
    let A = "";
    const O = {
      sourceX: N,
      sourceY: C,
      sourcePosition: P,
      targetX: m,
      targetY: h,
      targetPosition: z
    };
    return s === mr.Bezier ? [A] = Q0(O) : s === mr.Step ? [A] = Ll({
      ...O,
      borderRadius: 0
    }) : s === mr.SmoothStep ? [A] = Ll(O) : s === mr.SimpleBezier ? [A] = K0(O) : A = `M${N},${C} ${m},${h}`, q.createElement("path", {
      d: A,
      fill: "none",
      className: "react-flow__connection-path",
      style: o
    });
  };
  Mm.displayName = "ConnectionLine";
  const s2 = (e) => ({
    nodeId: e.connectionNodeId,
    handleType: e.connectionHandleType,
    nodesConnectable: e.nodesConnectable,
    connectionStatus: e.connectionStatus,
    width: e.width,
    height: e.height
  });
  function l2({ containerStyle: e, style: r, type: o, component: s }) {
    const { nodeId: l, handleType: u, nodesConnectable: c, width: f, height: m, connectionStatus: h } = ze(s2, At);
    return !(l && u && f && c) ? null : q.createElement("svg", {
      style: e,
      width: f,
      height: m,
      className: "react-flow__edges react-flow__connectionline react-flow__container"
    }, q.createElement("g", {
      className: gt([
        "react-flow__connection",
        h
      ])
    }, q.createElement(Mm, {
      nodeId: l,
      handleType: u,
      style: r,
      type: o,
      CustomComponent: s,
      connectionStatus: h
    })));
  }
  function Ap(e, r) {
    return D.useRef(null), nt(), D.useMemo(() => r(e), [
      e
    ]);
  }
  const Im = ({ nodeTypes: e, edgeTypes: r, onMove: o, onMoveStart: s, onMoveEnd: l, onInit: u, onNodeClick: c, onEdgeClick: f, onNodeDoubleClick: m, onEdgeDoubleClick: h, onNodeMouseEnter: g, onNodeMouseMove: y, onNodeMouseLeave: v, onNodeContextMenu: x, onSelectionContextMenu: E, onSelectionStart: S, onSelectionEnd: N, connectionLineType: C, connectionLineStyle: P, connectionLineComponent: z, connectionLineContainerStyle: A, selectionKeyCode: O, selectionOnDrag: V, selectionMode: J, multiSelectionKeyCode: W, panActivationKeyCode: Y, zoomActivationKeyCode: Q, deleteKeyCode: ee, onlyRenderVisibleElements: G, elementsSelectable: Z, selectNodesOnDrag: k, defaultViewport: H, translateExtent: L, minZoom: K, maxZoom: B, preventScrolling: T, defaultMarkerColor: F, zoomOnScroll: _, zoomOnPinch: $, panOnScroll: oe, panOnScrollSpeed: ne, panOnScrollMode: le, zoomOnDoubleClick: ae, panOnDrag: he, onPaneClick: me, onPaneMouseEnter: ve, onPaneMouseMove: ke, onPaneMouseLeave: Ve, onPaneScroll: Ue, onPaneContextMenu: Ke, onEdgeContextMenu: Qe, onEdgeMouseEnter: Oe, onEdgeMouseMove: ut, onEdgeMouseLeave: Me, onReconnect: ye, onReconnectStart: qe, onReconnectEnd: yt, reconnectRadius: Ft, noDragClassName: hn, noWheelClassName: _n, noPanClassName: Bt, elevateEdgesOnSelect: Nn, disableKeyboardA11y: pn, nodeOrigin: qt, nodeExtent: Jt, rfId: Mn }) => {
    const en = Ap(e, zS), We = Ap(r, HS);
    return o2(u), q.createElement(PS, {
      onPaneClick: me,
      onPaneMouseEnter: ve,
      onPaneMouseMove: ke,
      onPaneMouseLeave: Ve,
      onPaneContextMenu: Ke,
      onPaneScroll: Ue,
      deleteKeyCode: ee,
      selectionKeyCode: O,
      selectionOnDrag: V,
      selectionMode: J,
      onSelectionStart: S,
      onSelectionEnd: N,
      multiSelectionKeyCode: W,
      panActivationKeyCode: Y,
      zoomActivationKeyCode: Q,
      elementsSelectable: Z,
      onMove: o,
      onMoveStart: s,
      onMoveEnd: l,
      zoomOnScroll: _,
      zoomOnPinch: $,
      zoomOnDoubleClick: ae,
      panOnScroll: oe,
      panOnScrollSpeed: ne,
      panOnScrollMode: le,
      panOnDrag: he,
      defaultViewport: H,
      translateExtent: L,
      minZoom: K,
      maxZoom: B,
      onSelectionContextMenu: E,
      preventScrolling: T,
      noDragClassName: hn,
      noWheelClassName: _n,
      noPanClassName: Bt,
      disableKeyboardA11y: pn
    }, q.createElement(r2, null, q.createElement(t2, {
      edgeTypes: We,
      onEdgeClick: f,
      onEdgeDoubleClick: h,
      onlyRenderVisibleElements: G,
      onEdgeContextMenu: Qe,
      onEdgeMouseEnter: Oe,
      onEdgeMouseMove: ut,
      onEdgeMouseLeave: Me,
      onReconnect: ye,
      onReconnectStart: qe,
      onReconnectEnd: yt,
      reconnectRadius: Ft,
      defaultMarkerColor: F,
      noPanClassName: Bt,
      elevateEdgesOnSelect: !!Nn,
      disableKeyboardA11y: pn,
      rfId: Mn
    }, q.createElement(l2, {
      style: P,
      type: C,
      component: z,
      containerStyle: A
    })), q.createElement("div", {
      className: "react-flow__edgelabel-renderer"
    }), q.createElement(OS, {
      nodeTypes: en,
      onNodeClick: c,
      onNodeDoubleClick: m,
      onNodeMouseEnter: g,
      onNodeMouseMove: y,
      onNodeMouseLeave: v,
      onNodeContextMenu: x,
      selectNodesOnDrag: k,
      onlyRenderVisibleElements: G,
      noPanClassName: Bt,
      noDragClassName: hn,
      disableKeyboardA11y: pn,
      nodeOrigin: qt,
      nodeExtent: Jt,
      rfId: Mn
    })));
  };
  Im.displayName = "GraphView";
  var a2 = D.memo(Im);
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
    onError: Dx,
    isValidConnection: void 0
  }, u2 = () => Qy((e, r) => ({
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
      const y = window.getComputedStyle(g), { m22: v } = new window.DOMMatrixReadOnly(y.transform), x = o.reduce((S, N) => {
        const C = l.get(N.id);
        if (C == null ? void 0 : C.hidden) l.set(C.id, {
          ...C,
          [Xe]: {
            ...C[Xe],
            handleBounds: void 0
          }
        });
        else if (C) {
          const P = jc(N.nodeElement);
          !!(P.width && P.height && (C.width !== P.width || C.height !== P.height || N.forceUpdate)) && (l.set(C.id, {
            ...C,
            [Xe]: {
              ...C[Xe],
              handleBounds: {
                source: kp(".source", N.nodeElement, v, h),
                target: kp(".target", N.nodeElement, v, h)
              }
            },
            ...P
          }), S.push({
            id: C.id,
            type: "dimensions",
            dimensions: P
          }));
        }
        return S;
      }, []);
      pm(l, h);
      const E = c || u && !c && mm(r, {
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
          const h = ym(o, f()), g = Ju(h, l, c, m);
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
      s ? c = o.map((m) => pr(m, true)) : (c = Co(u(), o), f = Co(l, [])), yl({
        changedNodes: c,
        changedEdges: f,
        get: r,
        set: e
      });
    },
    addSelectedEdges: (o) => {
      const { multiSelectionActive: s, edges: l, getNodes: u } = r();
      let c, f = null;
      s ? c = o.map((m) => pr(m, true)) : (c = Co(l, o), f = Co(u(), [])), yl({
        changedNodes: f,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    unselectNodesAndEdges: ({ nodes: o, edges: s } = {}) => {
      const { edges: l, getNodes: u } = r(), c = o || u(), f = s || l, m = c.map((g) => (g.selected = false, pr(g.id, false))), h = f.map((g) => pr(g.id, false));
      yl({
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
      yl({
        changedNodes: u,
        changedEdges: c,
        get: r,
        set: e
      });
    },
    setNodeExtent: (o) => {
      const { nodeInternals: s } = r();
      s.forEach((l) => {
        l.positionAbsolute = Hc(l.position, o);
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
  }), Object.is), Qc = ({ children: e }) => {
    const r = D.useRef(null);
    return r.current || (r.current = u2()), q.createElement(bx, {
      value: r.current
    }, e);
  };
  Qc.displayName = "ReactFlowProvider";
  const bm = ({ children: e }) => D.useContext(Kl) ? q.createElement(q.Fragment, null, e) : q.createElement(Qc, null, e);
  bm.displayName = "ReactFlowWrapper";
  const c2 = {
    input: lm,
    default: xc,
    output: um,
    group: Gc
  }, d2 = {
    default: Ol,
    straight: Wc,
    step: Uc,
    smoothstep: Ql,
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
  }, Am = D.forwardRef(({ nodes: e, edges: r, defaultNodes: o, defaultEdges: s, className: l, nodeTypes: u = c2, edgeTypes: c = d2, onNodeClick: f, onEdgeClick: m, onInit: h, onMove: g, onMoveStart: y, onMoveEnd: v, onConnect: x, onConnectStart: E, onConnectEnd: S, onClickConnectStart: N, onClickConnectEnd: C, onNodeMouseEnter: P, onNodeMouseMove: z, onNodeMouseLeave: A, onNodeContextMenu: O, onNodeDoubleClick: V, onNodeDragStart: J, onNodeDrag: W, onNodeDragStop: Y, onNodesDelete: Q, onEdgesDelete: ee, onSelectionChange: G, onSelectionDragStart: Z, onSelectionDrag: k, onSelectionDragStop: H, onSelectionContextMenu: L, onSelectionStart: K, onSelectionEnd: B, connectionMode: T = Yr.Strict, connectionLineType: F = mr.Bezier, connectionLineStyle: _, connectionLineComponent: $, connectionLineContainerStyle: oe, deleteKeyCode: ne = "Backspace", selectionKeyCode: le = "Shift", selectionOnDrag: ae = false, selectionMode: he = $i.Full, panActivationKeyCode: me = "Space", multiSelectionKeyCode: ve = Dl() ? "Meta" : "Control", zoomActivationKeyCode: ke = Dl() ? "Meta" : "Control", snapToGrid: Ve = false, snapGrid: Ue = h2, onlyRenderVisibleElements: Ke = false, selectNodesOnDrag: Qe = true, nodesDraggable: Oe, nodesConnectable: ut, nodesFocusable: Me, nodeOrigin: ye = f2, edgesFocusable: qe, edgesUpdatable: yt, elementsSelectable: Ft, defaultViewport: hn = p2, minZoom: _n = 0.5, maxZoom: Bt = 2, translateExtent: Nn = Ec, preventScrolling: pn = true, nodeExtent: qt, defaultMarkerColor: Jt = "#b1b1b7", zoomOnScroll: Mn = true, zoomOnPinch: en = true, panOnScroll: We = false, panOnScrollSpeed: jt = 0.5, panOnScrollMode: mn = Br.Free, zoomOnDoubleClick: gn = true, panOnDrag: Yn = true, onPaneClick: St, onPaneMouseEnter: tn, onPaneMouseMove: Sr, onPaneMouseLeave: Er, onPaneScroll: In, onPaneContextMenu: yn, children: bn, onEdgeContextMenu: vn, onEdgeDoubleClick: Ui, onEdgeMouseEnter: Wi, onEdgeMouseMove: Yi, onEdgeMouseLeave: Xi, onEdgeUpdate: $o, onEdgeUpdateStart: Gi, onEdgeUpdateEnd: kr, onReconnect: zo, onReconnectStart: Cr, onReconnectEnd: ea, reconnectRadius: _r = 10, edgeUpdaterRadius: Xr = 10, onNodesChange: Gr, onEdgesChange: Do, noDragClassName: ta = "nodrag", noWheelClassName: na = "nowheel", noPanClassName: Ki = "nopan", fitView: An = false, fitViewOptions: Qi, connectOnClick: Zi = true, attributionPosition: ra, proOptions: qi, defaultEdgeOptions: Ji, elevateNodesOnSelect: es = true, elevateEdgesOnSelect: ts = false, disableKeyboardA11y: ns = false, autoPanOnConnect: oa = true, autoPanOnNodeDrag: Be = true, connectionRadius: ia = 20, isValidConnection: Lo, onError: rs, style: Kr, id: os, nodeDragThreshold: is, ...Qr }, Ht) => {
    const Oo = os || "1";
    return q.createElement("div", {
      ...Qr,
      style: {
        ...Kr,
        ...m2
      },
      ref: Ht,
      className: gt([
        "react-flow",
        l
      ]),
      "data-testid": "rf__wrapper",
      id: os
    }, q.createElement(bm, null, q.createElement(a2, {
      onInit: h,
      onMove: g,
      onMoveStart: y,
      onMoveEnd: v,
      onNodeClick: f,
      onEdgeClick: m,
      onNodeMouseEnter: P,
      onNodeMouseMove: z,
      onNodeMouseLeave: A,
      onNodeContextMenu: O,
      onNodeDoubleClick: V,
      nodeTypes: u,
      edgeTypes: c,
      connectionLineType: F,
      connectionLineStyle: _,
      connectionLineComponent: $,
      connectionLineContainerStyle: oe,
      selectionKeyCode: le,
      selectionOnDrag: ae,
      selectionMode: he,
      deleteKeyCode: ne,
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
      onPaneMouseMove: Sr,
      onPaneMouseLeave: Er,
      onPaneScroll: In,
      onPaneContextMenu: yn,
      onSelectionContextMenu: L,
      onSelectionStart: K,
      onSelectionEnd: B,
      onEdgeContextMenu: vn,
      onEdgeDoubleClick: Ui,
      onEdgeMouseEnter: Wi,
      onEdgeMouseMove: Yi,
      onEdgeMouseLeave: Xi,
      onReconnect: zo ?? $o,
      onReconnectStart: Cr ?? Gi,
      onReconnectEnd: ea ?? kr,
      reconnectRadius: _r ?? Xr,
      defaultMarkerColor: Jt,
      noDragClassName: ta,
      noWheelClassName: na,
      noPanClassName: Ki,
      elevateEdgesOnSelect: ts,
      rfId: Oo,
      disableKeyboardA11y: ns,
      nodeOrigin: ye,
      nodeExtent: qt
    }), q.createElement(iS, {
      nodes: e,
      edges: r,
      defaultNodes: o,
      defaultEdges: s,
      onConnect: x,
      onConnectStart: E,
      onConnectEnd: S,
      onClickConnectStart: N,
      onClickConnectEnd: C,
      nodesDraggable: Oe,
      nodesConnectable: ut,
      nodesFocusable: Me,
      edgesFocusable: qe,
      edgesUpdatable: yt,
      elementsSelectable: Ft,
      elevateNodesOnSelect: es,
      minZoom: _n,
      maxZoom: Bt,
      nodeExtent: qt,
      onNodesChange: Gr,
      onEdgesChange: Do,
      snapToGrid: Ve,
      snapGrid: Ue,
      connectionMode: T,
      translateExtent: Nn,
      connectOnClick: Zi,
      defaultEdgeOptions: Ji,
      fitView: An,
      fitViewOptions: Qi,
      onNodesDelete: Q,
      onEdgesDelete: ee,
      onNodeDragStart: J,
      onNodeDrag: W,
      onNodeDragStop: Y,
      onSelectionDrag: k,
      onSelectionDragStart: Z,
      onSelectionDragStop: H,
      noPanClassName: Ki,
      nodeOrigin: ye,
      rfId: Oo,
      autoPanOnConnect: oa,
      autoPanOnNodeDrag: Be,
      onError: rs,
      connectionRadius: ia,
      isValidConnection: Lo,
      nodeDragThreshold: is
    }), q.createElement(rS, {
      onSelectionChange: G
    }), bn, q.createElement(Tx, {
      proOptions: qi,
      position: ra
    }), q.createElement(cS, {
      rfId: Oo,
      disableKeyboardA11y: ns
    })));
  });
  Am.displayName = "ReactFlow";
  const g2 = (e) => {
    var _a;
    return (_a = e.domNode) == null ? void 0 : _a.querySelector(".react-flow__edgelabel-renderer");
  };
  function y2({ children: e }) {
    const r = ze(g2);
    return r ? Ix.createPortal(e, r) : null;
  }
  function Tm(e, r) {
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
  const Rm = ({ id: e, x: r, y: o, width: s, height: l, style: u, color: c, strokeColor: f, strokeWidth: m, className: h, borderRadius: g, shapeRendering: y, onClick: v, selected: x }) => {
    const { background: E, backgroundColor: S } = u || {}, N = c || E || S;
    return q.createElement("rect", {
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
      fill: N,
      stroke: f,
      strokeWidth: m,
      shapeRendering: y,
      onClick: v ? (C) => v(C, e) : void 0
    });
  };
  Rm.displayName = "MiniMapNode";
  var v2 = D.memo(Rm);
  const w2 = (e) => e.nodeOrigin, x2 = (e) => e.getNodes().filter((r) => !r.hidden && r.width && r.height), rc = (e) => e instanceof Function ? e : () => e;
  function S2({ nodeStrokeColor: e = "transparent", nodeColor: r = "#e2e2e2", nodeClassName: o = "", nodeBorderRadius: s = 5, nodeStrokeWidth: l = 2, nodeComponent: u = v2, onClick: c }) {
    const f = ze(x2, Tm), m = ze(w2), h = rc(r), g = rc(e), y = rc(o), v = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
    return q.createElement(q.Fragment, null, f.map((x) => {
      const { x: E, y: S } = Hr(x, m).positionAbsolute;
      return q.createElement(u, {
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
  var E2 = D.memo(S2);
  const k2 = 200, C2 = 150, _2 = (e) => {
    const r = e.getNodes(), o = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2]
    };
    return {
      viewBB: o,
      boundingRect: r.length > 0 ? $x(Zl(r, e.nodeOrigin), o) : o,
      rfId: e.rfId
    };
  }, N2 = "react-flow__minimap-desc";
  function Pm({ style: e, className: r, nodeStrokeColor: o = "transparent", nodeColor: s = "#e2e2e2", nodeClassName: l = "", nodeBorderRadius: u = 5, nodeStrokeWidth: c = 2, nodeComponent: f, maskColor: m = "rgb(240, 240, 240, 0.6)", maskStrokeColor: h = "none", maskStrokeWidth: g = 1, position: y = "bottom-right", onClick: v, onNodeClick: x, pannable: E = false, zoomable: S = false, ariaLabel: N = "React Flow mini map", inversePan: C = false, zoomStep: P = 10, offsetScale: z = 5 }) {
    const A = nt(), O = D.useRef(null), { boundingRect: V, viewBB: J, rfId: W } = ze(_2, Tm), Y = (e == null ? void 0 : e.width) ?? k2, Q = (e == null ? void 0 : e.height) ?? C2, ee = V.width / Y, G = V.height / Q, Z = Math.max(ee, G), k = Z * Y, H = Z * Q, L = z * Z, K = V.x - (k - V.width) / 2 - L, B = V.y - (H - V.height) / 2 - L, T = k + L * 2, F = H + L * 2, _ = `${N2}-${W}`, $ = D.useRef(0);
    $.current = Z, D.useEffect(() => {
      if (O.current) {
        const le = Qt(O.current), ae = (ve) => {
          const { transform: ke, d3Selection: Ve, d3Zoom: Ue } = A.getState();
          if (ve.sourceEvent.type !== "wheel" || !Ve || !Ue) return;
          const Ke = -ve.sourceEvent.deltaY * (ve.sourceEvent.deltaMode === 1 ? 0.05 : ve.sourceEvent.deltaMode ? 1 : 2e-3) * P, Qe = ke[2] * Math.pow(2, Ke);
          Ue.scaleTo(Ve, Qe);
        }, he = (ve) => {
          const { transform: ke, d3Selection: Ve, d3Zoom: Ue, translateExtent: Ke, width: Qe, height: Oe } = A.getState();
          if (ve.sourceEvent.type !== "mousemove" || !Ve || !Ue) return;
          const ut = $.current * Math.max(1, ke[2]) * (C ? -1 : 1), Me = {
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
        }, me = F0().on("zoom", E ? he : null).on("zoom.wheel", S ? ae : null);
        return le.call(me), () => {
          le.on("zoom", null);
        };
      }
    }, [
      E,
      S,
      C,
      P
    ]);
    const oe = v ? (le) => {
      const ae = cn(le);
      v(le, {
        x: ae[0],
        y: ae[1]
      });
    } : void 0, ne = x ? (le, ae) => {
      const he = A.getState().nodeInternals.get(ae);
      x(le, he);
    } : void 0;
    return q.createElement(Bc, {
      position: y,
      style: e,
      className: gt([
        "react-flow__minimap",
        r
      ]),
      "data-testid": "rf__minimap"
    }, q.createElement("svg", {
      width: Y,
      height: Q,
      viewBox: `${K} ${B} ${T} ${F}`,
      role: "img",
      "aria-labelledby": _,
      ref: O,
      onClick: oe
    }, N && q.createElement("title", {
      id: _
    }, N), q.createElement(E2, {
      onClick: ne,
      nodeColor: s,
      nodeStrokeColor: o,
      nodeBorderRadius: u,
      nodeClassName: l,
      nodeStrokeWidth: c,
      nodeComponent: f
    }), q.createElement("path", {
      className: "react-flow__minimap-mask",
      d: `M${K - L},${B - L}h${T + L * 2}v${F + L * 2}h${-T - L * 2}z
        M${J.x},${J.y}h${J.width}v${J.height}h${-J.width}z`,
      fill: m,
      fillRule: "evenodd",
      stroke: h,
      strokeWidth: g,
      pointerEvents: "none"
    })));
  }
  Pm.displayName = "MiniMap";
  var M2 = D.memo(Pm);
  function I2(e, r) {
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
  function b2() {
    return q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, q.createElement("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
    }));
  }
  function A2() {
    return q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5"
    }, q.createElement("path", {
      d: "M0 0h32v4.2H0z"
    }));
  }
  function T2() {
    return q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30"
    }, q.createElement("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
    }));
  }
  function R2() {
    return q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, q.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
    }));
  }
  function P2() {
    return q.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32"
    }, q.createElement("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
    }));
  }
  const Mi = ({ children: e, className: r, ...o }) => q.createElement("button", {
    type: "button",
    className: gt([
      "react-flow__controls-button",
      r
    ]),
    ...o
  }, e);
  Mi.displayName = "ControlButton";
  const $2 = (e) => ({
    isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
    minZoomReached: e.transform[2] <= e.minZoom,
    maxZoomReached: e.transform[2] >= e.maxZoom
  }), $m = ({ style: e, showZoom: r = true, showFitView: o = true, showInteractive: s = true, fitViewOptions: l, onZoomIn: u, onZoomOut: c, onFitView: f, onInteractiveChange: m, className: h, children: g, position: y = "bottom-left" }) => {
    const v = nt(), [x, E] = D.useState(false), { isInteractive: S, minZoomReached: N, maxZoomReached: C } = ze($2, I2), { zoomIn: P, zoomOut: z, fitView: A } = ji();
    if (D.useEffect(() => {
      E(true);
    }, []), !x) return null;
    const O = () => {
      P(), u == null ? void 0 : u();
    }, V = () => {
      z(), c == null ? void 0 : c();
    }, J = () => {
      A(l), f == null ? void 0 : f();
    }, W = () => {
      v.setState({
        nodesDraggable: !S,
        nodesConnectable: !S,
        elementsSelectable: !S
      }), m == null ? void 0 : m(!S);
    };
    return q.createElement(Bc, {
      className: gt([
        "react-flow__controls",
        h
      ]),
      position: y,
      style: e,
      "data-testid": "rf__controls"
    }, r && q.createElement(q.Fragment, null, q.createElement(Mi, {
      onClick: O,
      className: "react-flow__controls-zoomin",
      title: "zoom in",
      "aria-label": "zoom in",
      disabled: C
    }, q.createElement(b2, null)), q.createElement(Mi, {
      onClick: V,
      className: "react-flow__controls-zoomout",
      title: "zoom out",
      "aria-label": "zoom out",
      disabled: N
    }, q.createElement(A2, null))), o && q.createElement(Mi, {
      className: "react-flow__controls-fitview",
      onClick: J,
      title: "fit view",
      "aria-label": "fit view"
    }, q.createElement(T2, null)), s && q.createElement(Mi, {
      className: "react-flow__controls-interactive",
      onClick: W,
      title: "toggle interactivity",
      "aria-label": "toggle interactivity"
    }, S ? q.createElement(P2, null) : q.createElement(R2, null)), g);
  };
  $m.displayName = "Controls";
  var z2 = D.memo($m);
  const Ro = 220, vr = 88, D2 = 340, kc = 160, Hi = 280, ql = 118, Vi = 32, Vr = 720, L2 = 12, O2 = 6, oc = {
    0: 0,
    1: 400,
    2: 800,
    3: 1200,
    4: 1600,
    5: 2e3,
    6: 2400
  }, F2 = {
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
  }, B2 = {
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
  }, j2 = [
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
  ], H2 = 1e3, V2 = 2e3, Tp = (e) => {
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
  }, U2 = ((e) => e ? Tp(e) : Tp), W2 = (e) => e;
  function Y2(e, r = W2) {
    const o = q.useSyncExternalStore(e.subscribe, q.useCallback(() => r(e.getState()), [
      e,
      r
    ]), q.useCallback(() => r(e.getInitialState()), [
      e,
      r
    ]));
    return q.useDebugValue(o), o;
  }
  const Rp = (e) => {
    const r = U2(e), o = (s) => Y2(r, s);
    return Object.assign(o, r), o;
  }, Jl = ((e) => e ? Rp(e) : Rp);
  function X2(e) {
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
  function Pp(e, r) {
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
      childClusterMap: X2(r)
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
        const c = Pp(r, o.childClusterMap);
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
        const m = Pp(f, o.childClusterMap);
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
  function zm(e) {
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
  const $p = zm({
    components: [],
    connections: []
  }), zp = [], Lt = Jl((e, r) => ({
    model: null,
    ...$p,
    loadModel: (o) => e({
      model: o,
      ...zm(o)
    }),
    clearModel: () => e({
      model: null,
      ...$p
    }),
    getComponent: (o) => r().componentById.get(o),
    getIncoming: (o) => r().incomingByComponentId.get(o) ?? zp,
    getOutgoing: (o) => r().outgoingByComponentId.get(o) ?? zp
  }));
  function ic() {
    return {
      highlightedNodeIds: /* @__PURE__ */ new Set(),
      highlightedEdgeIds: /* @__PURE__ */ new Set(),
      selectedNodeIds: /* @__PURE__ */ new Set()
    };
  }
  function G2(e) {
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
      const f = G2(u);
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
  })), K2 = 1.35;
  function Zc() {
    const e = ji(), r = Te((s) => s.selectNode), o = be((s) => s.expandClusterForComponent);
    return D.useCallback((s) => {
      r(s), o(s);
      const l = () => {
        const u = e.getNode(s);
        if (!u) return;
        const c = u.width ?? Ro, f = u.height ?? vr;
        e.setCenter(u.position.x + c / 2, u.position.y + f / 2, {
          duration: 420,
          zoom: K2
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
  function Q2() {
    if (typeof window > "u") return "dark";
    const e = localStorage.getItem("ip-xact-theme");
    return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  const mt = Jl((e, r) => ({
    theme: Q2(),
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
  }, Vn = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', Z2 = '"SF Mono", "Cascadia Code", "Fira Code", Consolas, monospace', Dp = {
    in: "#22c55e",
    out: "#3b82f6",
    inout: "#eab308"
  }, wl = 3, Bn = 6;
  function q2(e, r, o, s, l, u, c = true) {
    const { width: f, height: m } = e.canvas;
    e.clearRect(0, 0, f, m);
    const h = -s.x / s.zoom, g = -s.y / s.zoom, y = h + f / s.zoom, v = g + m / s.zoom, x = [];
    for (const S of r) {
      const N = Nl(S), C = Ml(S), P = S.position.x + N, z = S.position.y + C;
      S.position.x < y && P > h && S.position.y < v && z > g && x.push(S);
    }
    const E = new Map(x.map((S) => [
      S.id,
      S
    ]));
    e.save(), e.translate(s.x, s.y), e.scale(s.zoom, s.zoom);
    for (const S of o) {
      const N = E.get(S.source), C = E.get(S.target);
      if (!N || !C) continue;
      const P = N.position.x + Nl(N) / 2, z = N.position.y + Ml(N) / 2, A = C.position.x + Nl(C) / 2, O = C.position.y + Ml(C) / 2, V = u.has(S.id);
      e.beginPath(), e.moveTo(P, z), e.lineTo(A, O), e.strokeStyle = V ? "#22d3ee" : c ? "#64748b" : "#94a3b8", e.lineWidth = V ? 2 : 1.5, e.globalAlpha = V ? 0.9 : c ? 0.4 : 0.5, e.stroke(), V && J2(e, P, z, A, O);
    }
    e.globalAlpha = 1;
    for (const S of x) eE(e, S, s.zoom, l.has(S.id), c);
    e.restore(), e.fillStyle = c ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 252, 249, 0.9)", e.fillRect(8, m - 32, 180, 24), e.fillStyle = c ? "#94a3b8" : "#64748b", e.font = `12px ${Vn}`, e.fillText(`${x.length} / ${r.length} nodes visible`, 16, m - 14);
  }
  function J2(e, r, o, s, l, u) {
    const c = Math.atan2(l - o, s - r), f = 8;
    e.beginPath(), e.moveTo(s, l), e.lineTo(s - f * Math.cos(c - Math.PI / 6), l - f * Math.sin(c - Math.PI / 6)), e.moveTo(s, l), e.lineTo(s - f * Math.cos(c + Math.PI / 6), l - f * Math.sin(c + Math.PI / 6)), e.strokeStyle = "#22d3ee", e.lineWidth = 2, e.globalAlpha = 0.9, e.stroke();
  }
  function eE(e, r, o, s, l) {
    const u = r.position.x, c = r.position.y, f = Nl(r), m = Ml(r);
    if (r.data.kind === "busChannel") {
      rE(e, u, c, f, m, r, o, l);
      return;
    }
    if (r.data.kind === "cluster") {
      nE(e, u, c, f, m, r, o, s);
      return;
    }
    const h = r.data, g = pt[h.component.type];
    e.shadowColor = "rgba(0, 0, 0, 0.15)", e.shadowBlur = 8, e.shadowOffsetY = 2, e.fillStyle = g.base, e.strokeStyle = s ? "#ffffff" : g.border, e.lineWidth = s ? 2 : 1, qc(e, u, c, f, m, 12), e.fill(), e.shadowColor = "transparent";
    const y = Math.min(Math.max(24, 40 * o), 32), v = u + 16, x = c + (m - y) / 2;
    e.fillStyle = `${g.border}20`, e.strokeStyle = `${g.border}60`, e.lineWidth = 1, e.beginPath(), e.roundRect(v, x, y, y, 6), e.fill(), e.stroke(), e.fillStyle = g.text, e.font = `bold ${Math.max(8, 10)}px ${Vn}`, e.textAlign = "center", e.textBaseline = "middle";
    const E = h.component.type.slice(0, 3).toUpperCase();
    e.fillText(E, v + y / 2, x + y / 2), e.fillStyle = "#ffffff", e.font = `600 ${Math.max(10, 13)}px ${Vn}`, e.textAlign = "left", e.textBaseline = "top";
    const S = v + y + 8, N = f - (S - u) - 8;
    e.save(), e.beginPath(), e.rect(u, c, f, m), e.clip(), e.fillText(Fl(e, h.component.name, N), S, c + 14), e.fillStyle = "rgba(255, 255, 255, 0.6)", e.font = `${Math.max(8, 10)}px ${Z2}`, e.fillText(Fl(e, h.component.id, N), S, c + 30), e.restore(), tE(e, h.component.ports, u, c, f, m), e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function tE(e, r, o, s, l, u, c) {
    if (!r || r.length === 0) return;
    const f = r.filter((S) => S.direction === "in"), m = r.filter((S) => S.direction === "out"), h = r.filter((S) => S.direction === "inout"), g = [
      ...f,
      ...h
    ], y = [
      ...m
    ], v = Math.min(Math.max(g.length, y.length), Bn), x = Math.min(14, (u - 16) / Math.max(v, 1)), E = s + (u - (v - 1) * x) / 2;
    for (let S = 0; S < Math.min(g.length, Bn); S++) {
      const N = g[S];
      if (!N) continue;
      const C = E + S * x;
      e.beginPath(), e.arc(o + l + wl + 1, C, wl, 0, Math.PI * 2), e.fillStyle = Dp[N.direction], e.fill();
    }
    g.length > Bn && (e.fillStyle = "#94a3b8", e.font = `bold ${Math.max(7, 8)}px ${Vn}`, e.textAlign = "left", e.textBaseline = "middle", e.fillText(`+${g.length - Bn}`, o + l + 8, E + Bn * x));
    for (let S = 0; S < Math.min(y.length, Bn); S++) {
      const N = y[S];
      if (!N) continue;
      const C = E + S * x;
      e.beginPath(), e.arc(o - wl - 1, C, wl, 0, Math.PI * 2), e.fillStyle = Dp[N.direction], e.fill();
    }
    y.length > Bn && (e.fillStyle = "#94a3b8", e.font = `bold ${Math.max(7, 8)}px ${Vn}`, e.textAlign = "right", e.textBaseline = "middle", e.fillText(`+${y.length - Bn}`, o - 8, E + Bn * x));
  }
  function nE(e, r, o, s, l, u, c, f, m) {
    if (u.data.kind !== "cluster") return;
    const h = u.data.cluster, g = Object.keys(h.typeBreakdown ?? {})[0], y = g ? pt[g] : pt.custom;
    if (e.shadowColor = "rgba(0, 0, 0, 0.1)", e.shadowBlur = 6, e.shadowOffsetY = 2, e.fillStyle = y.base, e.strokeStyle = f ? "#ffffff" : y.border, e.lineWidth = f ? 2 : 1, qc(e, r, o, s, l, 12), e.fill(), e.shadowColor = "transparent", e.fillStyle = "#ffffff", e.font = `600 ${Math.max(10, 13)}px ${Vn}`, e.textAlign = "left", e.textBaseline = "top", e.fillText(Fl(e, h.name, s - 20), r + 16, o + 14), e.fillStyle = "rgba(255, 255, 255, 0.6)", e.font = `${Math.max(8, 11)}px ${Vn}`, e.fillText(`${h.componentCount} blocks`, r + 16, o + 34), h.typeBreakdown) {
      const v = Object.entries(h.typeBreakdown), x = o + 52;
      let E = r + 16;
      for (const [S, N] of v.slice(0, 3)) {
        const C = `${S}:${N}`, P = e.measureText(C).width + 12;
        e.fillStyle = "rgba(255, 255, 255, 0.15)", e.beginPath(), e.roundRect(E, x, P, 16, 4), e.fill(), e.fillStyle = "rgba(255, 255, 255, 0.7)", e.font = `${Math.max(7, 9)}px ${Vn}`, e.fillText(C, E + 6, x + 3), E += P + 4;
      }
    }
    e.textAlign = "left", e.textBaseline = "alphabetic";
  }
  function rE(e, r, o, s, l, u, c, f) {
    if (u.data.kind !== "busChannel") return;
    const m = u.data, h = pt[m.component.type];
    e.fillStyle = f ? `${h.base}30` : `${h.base}35`, e.strokeStyle = f ? `${h.base}60` : `${h.base}80`, e.lineWidth = 1, qc(e, r, o, s, l, 4), e.fill(), e.stroke(), e.fillStyle = h.base, e.fillRect(r + 2, o, s - 4, 2), e.fillRect(r + 2, o + l - 2, s - 4, 2), e.save(), e.translate(r + s / 2, o + l / 2), e.rotate(-Math.PI / 2), e.fillStyle = f ? h.text : h.border, e.font = `600 ${Math.max(8, 10)}px ${Vn}`, e.textAlign = "center", e.textBaseline = "middle", e.fillText(Fl(e, m.component.name, l - 8), 0, 0), e.restore();
  }
  function Nl(e) {
    return e.data.kind === "busChannel" ? Vi : e.data.kind === "cluster" ? Hi : Ro;
  }
  function Ml(e) {
    return e.data.kind === "busChannel" ? Vr : e.data.kind === "cluster" ? ql : vr;
  }
  function qc(e, r, o, s, l, u) {
    e.beginPath(), e.moveTo(r + u, o), e.lineTo(r + s - u, o), e.quadraticCurveTo(r + s, o, r + s, o + u), e.lineTo(r + s, o + l - u), e.quadraticCurveTo(r + s, o + l, r + s - u, o + l), e.lineTo(r + u, o + l), e.quadraticCurveTo(r, o + l, r, o + l - u), e.lineTo(r, o + u), e.quadraticCurveTo(r, o, r + u, o), e.closePath();
  }
  function Fl(e, r, o) {
    if (e.measureText(r).width <= o) return r;
    let s = r;
    for (; s.length > 0 && e.measureText(s + "...").width > o; ) s = s.slice(0, -1);
    return s + "...";
  }
  function oE({ width: e, height: r }) {
    const o = D.useRef(null), s = be((W) => W.nodes), l = be((W) => W.edges), u = Te((W) => W.selectNode), c = Te((W) => W.clearSelection), f = Te((W) => W.selectedNodeIds), m = Te((W) => W.highlightedEdgeIds), g = mt((W) => W.theme) === "dark", [y, v] = D.useState({
      x: 0,
      y: 0,
      zoom: 0.1
    }), [x, E] = D.useState(false), [S, N] = D.useState({
      x: 0,
      y: 0
    }), [C, P] = D.useState({
      x: 0,
      y: 0
    });
    D.useEffect(() => {
      if (s.length === 0) return;
      let W = 1 / 0, Y = 1 / 0, Q = -1 / 0, ee = -1 / 0;
      for (const F of s) W = Math.min(W, F.position.x), Y = Math.min(Y, F.position.y), Q = Math.max(Q, F.position.x + Ro), ee = Math.max(ee, F.position.y + vr);
      const G = Q - W, Z = ee - Y, k = 100, H = (e - k * 2) / G, L = (r - k * 2) / Z, K = Math.min(H, L, 0.3), B = (W + Q) / 2, T = (Y + ee) / 2;
      v({
        x: e / 2 - B * K,
        y: r / 2 - T * K,
        zoom: K
      });
    }, [
      s,
      e,
      r
    ]), D.useEffect(() => {
      const W = o.current;
      if (!W) return;
      const Y = W.getContext("2d");
      if (!Y) return;
      const Q = window.devicePixelRatio || 1;
      W.width = e * Q, W.height = r * Q, Y.scale(Q, Q), q2(Y, s, l, {
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
    const z = D.useCallback((W) => {
      E(true), N({
        x: W.clientX,
        y: W.clientY
      }), P({
        x: y.x,
        y: y.y
      });
    }, [
      y
    ]), A = D.useCallback((W) => {
      if (!x) return;
      const Y = W.clientX - S.x, Q = W.clientY - S.y;
      v((ee) => ({
        ...ee,
        x: C.x + Y,
        y: C.y + Q
      }));
    }, [
      x,
      S,
      C
    ]), O = D.useCallback(() => {
      E(false);
    }, []), V = D.useCallback((W) => {
      var _a;
      W.preventDefault();
      const Y = W.deltaY > 0 ? 0.9 : 1.1, Q = Math.max(0.02, Math.min(1, y.zoom * Y)), ee = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!ee) return;
      const G = W.clientX - ee.left, Z = W.clientY - ee.top, k = (G - y.x) / y.zoom, H = (Z - y.y) / y.zoom;
      v({
        x: G - k * Q,
        y: Z - H * Q,
        zoom: Q
      });
    }, [
      y
    ]), J = D.useCallback((W) => {
      var _a;
      if (x) return;
      const Y = (_a = o.current) == null ? void 0 : _a.getBoundingClientRect();
      if (!Y) return;
      const Q = W.clientX - Y.left, ee = W.clientY - Y.top, G = (Q - y.x) / y.zoom, Z = (ee - y.y) / y.zoom;
      for (const k of s) {
        const H = k.data.kind === "busChannel" ? Vi : k.data.kind === "cluster" ? Hi : Ro, L = k.data.kind === "busChannel" ? Vr : k.data.kind === "cluster" ? ql : vr;
        if (G >= k.position.x && G <= k.position.x + H && Z >= k.position.y && Z <= k.position.y + L) {
          k.data.kind === "component" ? u(k.id, {
            additive: W.ctrlKey || W.metaKey || W.shiftKey
          }) : c();
          return;
        }
      }
      W.ctrlKey || W.metaKey || W.shiftKey || c();
    }, [
      c,
      x,
      y,
      s,
      u
    ]);
    return I.jsx("canvas", {
      ref: o,
      style: {
        width: e,
        height: r,
        cursor: x ? "grabbing" : "grab"
      },
      onMouseDown: z,
      onMouseMove: A,
      onMouseUp: O,
      onMouseLeave: O,
      onWheel: V,
      onClick: J
    });
  }
  function iE({ x: e, y: r, width: o = 220, height: s = 88, delay: l = 0 }) {
    return I.jsx("div", {
      className: "absolute animate-pulse rounded-xl border border-white/5 bg-gradient-to-br from-shell-800/50 to-shell-950/50",
      style: {
        left: e,
        top: r,
        width: o,
        height: s,
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
  const sE = D.memo(iE);
  function lE({ x1: e, y1: r, x2: o, y2: s, delay: l = 0 }) {
    const u = (e + o) / 2, c = `M ${e} ${r} L ${u} ${r} L ${u} ${s} L ${o} ${s}`;
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
  const aE = D.memo(lE);
  function Lp() {
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
            children: r.map((o, s) => I.jsx(aE, {
              ...o,
              delay: s * 100
            }, s))
          }),
          e.map((o, s) => I.jsx(sE, {
            ...o,
            delay: s * 100
          }, s)),
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
  function uE() {
    const r = mt((o) => o.theme) === "dark";
    return I.jsx(M2, {
      className: `!border !shadow-lg ${r ? "!border-white/10 !bg-shell-950/90" : "!border-[#d6cfc4] !bg-[#f5f0e8]/95"}`,
      maskColor: r ? "rgba(2, 6, 23, 0.58)" : "rgba(6, 8, 13, 0.12)",
      nodeBorderRadius: 8,
      nodeColor: r ? "#334155" : "#94a3b8",
      pannable: true,
      zoomable: true
    });
  }
  const cE = {
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
  }, dE = {
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
  function fE(e, r) {
    const o = r ? cE : dE;
    return o[e ?? "unknown"] ?? o.unknown;
  }
  function hE(e, r, o, s, l) {
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
    const u = fE(e, l);
    return {
      stroke: u.color,
      strokeWidth: u.width,
      opacity: u.opacity,
      strokeDasharray: u.dash
    };
  }
  function pE({ id: e, sourceX: r, sourceY: o, targetX: s, targetY: l, sourcePosition: u, targetPosition: c, data: f, source: m, target: h }) {
    const g = Te((O) => O.highlightedEdgeIds.has(e)), v = Te((O) => O.selectedNodeIds.size > 0) && !g, E = mt((O) => O.theme) === "dark", S = m.startsWith("hierarchy:") || h.startsWith("hierarchy:"), N = D.useMemo(() => Ll({
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
    ]), [C, P, z] = N, A = hE(f == null ? void 0 : f.connectionType, g, v, S, E);
    return I.jsxs(I.Fragment, {
      children: [
        I.jsx(Po, {
          id: e,
          path: C,
          markerEnd: g ? "url(#architecture-arrow)" : void 0,
          style: A
        }),
        g && f ? I.jsx(y2, {
          children: I.jsxs("div", {
            className: `pointer-events-none absolute rounded-lg border px-2.5 py-1.5 text-[10px] shadow-lg ${E ? "border-cyan-300/30 bg-shell-950/95 text-cyan-100" : "border-slate-300 bg-white text-slate-800"}`,
            style: {
              transform: `translate(-50%, -50%) translate(${P}px, ${z}px)`
            },
            children: [
              I.jsxs("div", {
                className: "font-medium",
                children: [
                  f.connection.sourcePortId,
                  " \u2192 ",
                  f.connection.targetPortId
                ]
              }),
              f.connectionType && I.jsx("div", {
                className: `mt-0.5 text-[9px] uppercase tracking-wide ${E ? "text-cyan-300/80" : "text-cyan-700"}`,
                children: f.connectionType
              }),
              f.connectionCount && f.connectionCount > 1 && I.jsxs("span", {
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
  const mE = D.memo(pE), gE = {
    architecture: mE
  };
  function Dm(e) {
    var r, o, s = "";
    if (typeof e == "string" || typeof e == "number") s += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var l = e.length;
      for (r = 0; r < l; r++) e[r] && (o = Dm(e[r])) && (s && (s += " "), s += o);
    } else for (o in e) e[o] && (s && (s += " "), s += o);
    return s;
  }
  function Bl() {
    for (var e, r, o = 0, s = "", l = arguments.length; o < l; o++) (e = arguments[o]) && (r = Dm(e)) && (s && (s += " "), s += r);
    return s;
  }
  function Lm(e) {
    const r = Te((l) => l.selectedNodeIds.has(e)), o = Te((l) => l.expandedNodeId === e), s = Te((l) => l.highlightedNodeIds.size > 0 && !l.highlightedNodeIds.has(e));
    return {
      isSelected: r,
      isExpanded: o,
      isDimmed: s
    };
  }
  const yE = D.memo(function({ name: r, type: o, color: s, expanded: l, depth: u = 0, isExpandable: c, isExpanded: f, onExpand: m }) {
    return I.jsxs("div", {
      className: "flex min-w-0 items-center gap-3",
      children: [
        u > 0 && I.jsx("div", {
          className: "flex shrink-0 items-center gap-0.5",
          children: Array.from({
            length: u
          }, (h, g) => I.jsx("div", {
            className: "h-3 w-0.5 rounded-full bg-white/40"
          }, g))
        }),
        I.jsx("div", {
          className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg border text-[10px] font-black",
          style: {
            borderColor: `${s}60`,
            color: s,
            backgroundColor: `${s}20`
          },
          children: F2[o]
        }),
        I.jsxs("div", {
          className: "min-w-0 flex-1",
          children: [
            I.jsx("div", {
              className: "truncate text-sm font-semibold text-white",
              children: r
            }),
            l ? I.jsx("div", {
              className: "mt-0.5 text-[11px] uppercase text-white/50",
              children: "Component"
            }) : null
          ]
        }),
        c && I.jsx("button", {
          className: "shrink-0 rounded-lg p-1.5 transition text-white/60 hover:bg-white/10 hover:text-white",
          onClick: (h) => {
            h.stopPropagation(), m == null ? void 0 : m();
          },
          children: I.jsx("svg", {
            className: `h-4 w-4 transition-transform ${f ? "rotate-90" : ""}`,
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
  function vE({ id: e, data: r }) {
    var _a;
    if (r.kind === "busChannel") return null;
    const o = r.kind === "cluster", s = o ? r.cluster.name : r.component.name, l = o ? r.cluster.type : r.component.type, u = pt[l], { isSelected: c, isDimmed: f } = Lm(e), m = be((S) => S.expandToLevel), h = be((S) => S.expansionPath), g = o && h.includes(r.cluster.id), y = o ? r.cluster.depth : 0, v = o && (r.cluster.depth < 2 || r.cluster.componentCount > 6), x = o && y > 1 ? (_a = h[h.indexOf(r.cluster.id) - 1]) == null ? void 0 : _a.replace("hierarchy:", "").replace(/:/g, " > ") : null, E = o && r.cluster.componentCount > 6 ? r.cluster.componentCount : 0;
    return I.jsxs("div", {
      className: Bl("architecture-node group overflow-hidden rounded-xl shadow-node transition duration-150", o ? "w-[280px]" : "w-[220px]", "hover:-translate-y-0.5 hover:shadow-glow", c && "ring-2 ring-white", f && "opacity-30 grayscale"),
      style: {
        backgroundColor: u.base,
        borderColor: c ? "#ffffff" : u.border,
        borderWidth: "2px",
        borderStyle: "solid",
        "--node-glow": u.glow
      },
      children: [
        !o && I.jsxs(I.Fragment, {
          children: [
            I.jsx(yr, {
              className: "!h-3 !w-1 !rounded-full !border-0 !bg-white/60 hover:!bg-white",
              id: `left:${e}`,
              type: "target",
              position: ge.Left,
              style: {
                top: "50%"
              }
            }),
            I.jsx(yr, {
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
        I.jsxs("div", {
          className: "rounded-lg m-1.5 p-3 bg-black/15 backdrop-blur-sm",
          children: [
            I.jsx(yE, {
              name: s,
              type: l,
              color: u.text,
              expanded: false,
              depth: y,
              isExpandable: v,
              isExpanded: g,
              onExpand: () => o && m(r.cluster.id)
            }),
            o ? I.jsxs(I.Fragment, {
              children: [
                x && I.jsxs("div", {
                  className: "mt-1 flex items-center gap-1 text-[10px] text-white/60",
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
                      children: x
                    })
                  ]
                }),
                I.jsxs("div", {
                  className: "architecture-node__meta mt-3 flex items-center gap-2 text-[11px] text-white/70",
                  children: [
                    I.jsxs("span", {
                      className: "rounded px-2 py-1 font-medium bg-white/10",
                      children: [
                        r.cluster.componentCount,
                        " blocks"
                      ]
                    }),
                    E > 0 && I.jsx("span", {
                      className: "rounded px-2 py-1 font-medium bg-white/15 text-white",
                      children: "click to expand"
                    })
                  ]
                }),
                r.cluster.typeBreakdown && Object.keys(r.cluster.typeBreakdown).length > 1 && I.jsx("div", {
                  className: "mt-2 flex flex-wrap gap-1",
                  children: Object.entries(r.cluster.typeBreakdown).map(([S, N]) => I.jsxs("span", {
                    className: "rounded px-1.5 py-0.5 text-[9px] font-medium bg-white/10 text-white/70",
                    children: [
                      S,
                      ": ",
                      N
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
  const wE = D.memo(vE, (e, r) => e.data.kind === "busChannel" || r.data.kind === "busChannel" ? false : e.id === r.id && e.selected === r.selected && e.data.kind === r.data.kind && (e.data.kind === "cluster" ? r.data.kind === "cluster" && e.data.cluster.id === r.data.cluster.id && e.data.cluster.componentCount === r.data.cluster.componentCount && e.data.cluster.connectionCount === r.data.cluster.connectionCount && e.data.cluster.depth === r.data.cluster.depth : r.data.kind === "component" && e.data.component.id === r.data.component.id && e.data.component.name === r.data.component.name && e.data.component.type === r.data.component.type)), xE = 32, SE = 720;
  function EE({ id: e, data: r }) {
    if (r.kind !== "busChannel") return null;
    const o = r, s = pt[o.component.type], { isSelected: l, isDimmed: u } = Lm(e);
    return I.jsxs("div", {
      className: Bl("bus-channel-node group relative transition duration-150", u && "opacity-30 grayscale"),
      style: {
        width: xE,
        height: SE,
        "--bus-color": s.base,
        "--bus-border": s.border,
        "--bus-glow": s.glow
      },
      children: [
        I.jsx(yr, {
          className: "!h-3 !w-1 !rounded-full !border-0 !bg-white/60 hover:!bg-white",
          id: `left:${e}`,
          type: "target",
          position: ge.Left,
          style: {
            top: "50%"
          }
        }),
        I.jsx(yr, {
          className: "!h-3 !w-1 !rounded-full !border-0 !bg-white/60 hover:!bg-white",
          id: `right:${e}`,
          type: "source",
          position: ge.Right,
          style: {
            top: "50%"
          }
        }),
        I.jsxs("div", {
          className: Bl("absolute inset-0 rounded-md border-2 transition-all duration-150", l && "ring-2 ring-white shadow-lg"),
          style: {
            backgroundColor: s.base,
            borderColor: l ? "#ffffff" : s.border,
            boxShadow: l ? `0 0 20px ${s.glow}` : "none"
          },
          children: [
            I.jsx("div", {
              className: "absolute left-0 top-0 h-1.5 w-full rounded-t-md",
              style: {
                backgroundColor: s.border
              }
            }),
            I.jsx("div", {
              className: "absolute bottom-0 left-0 h-1.5 w-full rounded-b-md",
              style: {
                backgroundColor: s.border
              }
            }),
            I.jsx("div", {
              className: "absolute left-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: s.border
              }
            }),
            I.jsx("div", {
              className: "absolute right-0 top-1.5 h-[calc(100%-12px)] w-1",
              style: {
                backgroundColor: s.border
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
                      color: s.text,
                      backgroundColor: `${s.border}30`,
                      border: `2px solid ${s.border}`
                    },
                    children: "BUS"
                  }),
                  I.jsx("span", {
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
  const kE = D.memo(EE, (e, r) => {
    if (e.id !== r.id || e.selected !== r.selected || e.data.kind !== "busChannel" || r.data.kind !== "busChannel") return false;
    const o = e.data, s = r.data;
    return o.component.id === s.component.id && o.component.name === s.component.name && o.component.type === s.component.type && o.layer === s.layer;
  }), CE = {
    architecture: wE,
    busChannel: kE
  }, Op = 0.035, _E = 2.2, NE = 0.32;
  function ME() {
    const e = be((G) => G.nodes), r = be((G) => G.edges), o = be((G) => G.updateNodePosition), s = be((G) => G.setNodes), l = be((G) => G.setEdges), u = be((G) => G.toggleCluster), c = be((G) => G.isLayoutLoading), f = Te((G) => G.selectNode), m = Te((G) => G.clearSelection), h = Zc(), [g, y] = D.useState(false), v = mt((G) => G.nonInteractiveThreshold), E = mt((G) => G.theme) === "dark", S = e.length > v, N = e.length > V2;
    D.useRef(null);
    const C = D.useRef(null), [P, z] = D.useState({
      width: 0,
      height: 0
    });
    ji();
    const A = D.useCallback((G) => {
      if (C.current && (C.current.disconnect(), C.current = null), G) {
        const Z = new ResizeObserver((k) => {
          for (const H of k) {
            const { width: L, height: K } = H.contentRect;
            z({
              width: L,
              height: K
            });
          }
        });
        Z.observe(G), C.current = Z;
      }
    }, []);
    D.useEffect(() => () => {
      C.current && C.current.disconnect();
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
    }, V = D.useCallback((G) => {
      const Z = be.getState().nodes;
      s(ym(G, Z));
    }, [
      s
    ]), J = D.useCallback((G) => {
      const Z = be.getState().edges;
      l(CS(G, Z));
    }, [
      l
    ]), W = D.useCallback((G, Z) => {
      const k = G.ctrlKey || G.metaKey || G.shiftKey;
      Z.data.kind === "component" ? f(Z.id, k ? {
        additive: true
      } : void 0) : m();
    }, [
      m,
      f
    ]), Y = D.useCallback((G, Z) => {
      if (G.preventDefault(), Z.data.kind === "cluster") {
        u(Z.id), f(null);
        return;
      }
      h(Z.id);
    }, [
      h,
      f,
      u
    ]), Q = D.useCallback((G, Z) => {
      o(Z.id, Z.position);
    }, [
      o
    ]), ee = D.useCallback((G, Z) => {
      y((k) => {
        const H = Z.zoom <= NE;
        return k === H ? k : H;
      });
    }, []);
    return N && P.width > 0 ? I.jsxs("div", {
      ref: A,
      className: "relative h-full w-full",
      children: [
        I.jsx(oE, {
          width: P.width,
          height: P.height
        }),
        c && I.jsx(Lp, {}),
        I.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs font-medium ${E ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-slate-300 bg-white/90 text-slate-600 shadow-sm"}`,
          children: [
            "Canvas Mode \u2014 ",
            e.length,
            " nodes"
          ]
        })
      ]
    }) : I.jsxs("div", {
      ref: A,
      className: "relative h-full w-full",
      children: [
        I.jsxs(Am, {
          className: `${g ? "architecture-flow architecture-flow--overview" : "architecture-flow"}${S ? " architecture-flow--static" : ""}`,
          nodes: e,
          edges: r,
          nodeTypes: CE,
          edgeTypes: gE,
          defaultEdgeOptions: O,
          onNodesChange: S ? void 0 : V,
          onEdgesChange: S ? void 0 : J,
          onNodeClick: S ? void 0 : W,
          onNodeDoubleClick: S ? void 0 : Y,
          onNodeDragStop: S ? void 0 : Q,
          onMove: ee,
          onPaneClick: S ? void 0 : () => m(),
          nodesDraggable: !S,
          nodesConnectable: !S,
          elementsSelectable: !S,
          nodesFocusable: !S,
          fitView: true,
          fitViewOptions: {
            padding: 0.18,
            minZoom: Op,
            maxZoom: 0.9
          },
          onlyRenderVisibleElements: true,
          zoomOnDoubleClick: false,
          minZoom: Op,
          maxZoom: _E,
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
                    fill: E ? "#67e8f9" : "#0891b2"
                  })
                })
              })
            }),
            I.jsx(z2, {
              className: `!border !fill-slate-200 !text-slate-200 ${E ? "!border-white/10 !bg-shell-950/90" : "!border-slate-700 !bg-slate-700/90 !shadow-lg"}`
            }),
            I.jsx(uE, {})
          ]
        }),
        S && I.jsxs("div", {
          className: `absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-md border px-3 py-1.5 text-xs ${E ? "border-white/10 bg-shell-950/90 text-slate-400" : "border-black/10 bg-white/90 text-slate-600"}`,
          children: [
            "Static View \u2014 ",
            e.length,
            " nodes"
          ]
        }),
        c && I.jsx(Lp, {})
      ]
    });
  }
  function IE() {
    return I.jsx(ME, {});
  }
  const bE = {
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
  }, AE = [
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
  ], TE = {
    components: bE,
    connections: AE
  }, RE = /* @__PURE__ */ new Set([
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
  ]), PE = /* @__PURE__ */ new Set([
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
  function Di(e) {
    return e.trim().replace(/\s+/g, "_");
  }
  function Fp(e, r) {
    const o = r.trim().toLowerCase(), s = e.trim().toLowerCase();
    return o === "bus" || s.includes("bus") ? "bus" : o === "cpu" || s.includes("cpu") ? "cpu" : o === "memory" || s.includes("ram") || s.includes("rom") || s.includes("memory") ? "memory" : o === "interface" || s.includes("pad") || s.includes("interface") ? "interface" : o === "clockreset" || o === "clock_reset" || s.includes("clock") || s.includes("reset") ? "clockReset" : o === "dma" || s.includes("dma") ? "dma" : o === "interruptcontroller" || o === "interrupt_controller" || s.includes("interrupt") || s.includes("intc") || s.includes("nvic") || s.includes("vic") || s.includes("gic") ? "interruptController" : o === "debug" || s.includes("debug") || s.includes("jtag") || s.includes("tap") ? "debug" : o === "peripheral" || o === "component" ? "peripheral" : RE.has(r) ? r : "custom";
  }
  function Bp(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs ports[].`);
    return r.map((o, s) => {
      if (tt(o)) return {
        id: Di(o),
        name: o,
        direction: "inout"
      };
      if (!Ur(o) || !tt(o.id) || !tt(o.name) || !PE.has(o.direction)) throw new Error(`Component ${e} has an invalid port.`);
      return o;
    }).filter((o, s, l) => l.findIndex((u) => u.id === o.id) === s);
  }
  function jp(e, r) {
    if (!Array.isArray(r)) throw new Error(`Component ${e} needs registers[].`);
    return r.map((o) => {
      if (tt(o)) return {
        id: Di(o),
        name: o
      };
      if (!Ur(o) || !tt(o.id) || !tt(o.name)) throw new Error(`Component ${e} has an invalid register.`);
      return o;
    }).filter((o, s, l) => l.findIndex((u) => u.id === o.id) === s);
  }
  function $E(e) {
    if (Array.isArray(e)) return e.map((r) => {
      if (!Ur(r) || !tt(r.id) || !tt(r.name) || !tt(r.type)) throw new Error("Each component needs id, name, type, ports[], and registers[].");
      return {
        id: r.id,
        name: r.name,
        type: Fp(r.name, r.type),
        ports: Bp(r.id, r.ports),
        registers: jp(r.id, r.registers)
      };
    });
    if (Ur(e)) return Object.entries(e).map(([r, o]) => {
      if (!Ur(o) || !tt(o.type)) throw new Error(`Component ${r} needs type, ports[], and registers[].`);
      const s = Di(r);
      return {
        id: s,
        name: r,
        type: Fp(r, o.type),
        ports: Bp(s, o.ports),
        registers: jp(s, o.registers)
      };
    });
    throw new Error("JSON must contain components and connections[].");
  }
  function Hp(e) {
    var _a;
    return ((_a = e == null ? void 0 : e.ports[0]) == null ? void 0 : _a.id) ?? "default";
  }
  function zE(e, r) {
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
      const c = tt(l.sourceComponentId) ? l.sourceComponentId : tt(l.source) ? Di(l.source) : "", f = tt(l.targetComponentId) ? l.targetComponentId : tt(l.target) ? Di(l.target) : "", m = o.get(c) ?? (tt(l.source) ? s.get(l.source) : void 0), h = o.get(f) ?? (tt(l.target) ? s.get(l.target) : void 0);
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
  function sc(e) {
    let r;
    try {
      r = JSON.parse(e);
    } catch {
      throw new Error("The input is not valid JSON.");
    }
    if (!Ur(r)) throw new Error("JSON must contain components and connections[].");
    const o = $E(r.components), s = zE(r.connections, o);
    return {
      components: o,
      connections: s
    };
  }
  function Jc({ children: e, className: r }) {
    const s = mt((l) => l.theme) === "dark";
    return I.jsx("section", {
      className: Bl("border shadow-xl backdrop-blur-sm", s ? "border-white/10 bg-shell-900/95" : "border-[#e5e0d8] bg-[#fffcf9]/95", r),
      children: e
    });
  }
  const Vp = JSON.stringify(TE, null, 2);
  function DE() {
    const e = Lt((C) => C.loadModel), r = be((C) => C.setNodes), o = be((C) => C.setEdges), s = be((C) => C.setLayoutLoading), l = Te((C) => C.selectNode), u = Te((C) => C.setSearchQuery), f = mt((C) => C.theme) === "dark", [m, h] = D.useState(""), [g, y] = D.useState(null), [v, x] = D.useState(false), E = (C) => {
      l(null), u(""), r([]), o([]), s(true), e(C), y(null);
    }, S = () => {
      x(true), setTimeout(() => {
        try {
          E(sc(m));
        } catch (C) {
          y(C instanceof Error ? C.message : "Unable to parse architecture JSON."), s(false);
        } finally {
          x(false);
        }
      }, 50);
    }, N = async (C) => {
      var _a;
      const P = (_a = C.target.files) == null ? void 0 : _a[0];
      if (P) {
        x(true);
        try {
          const z = await P.text();
          h(z), E(sc(z));
        } catch (z) {
          y(z instanceof Error ? z.message : "Unable to read architecture JSON file."), s(false);
        } finally {
          x(false);
        }
      }
    };
    return I.jsx("div", {
      className: `pointer-events-none absolute inset-0 z-20 grid place-items-center p-6 backdrop-blur-sm ${f ? "bg-shell-950/80" : "bg-slate-200/80"}`,
      children: I.jsxs(Jc, {
        className: "pointer-events-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl",
        children: [
          I.jsxs("div", {
            className: `border-b p-6 ${f ? "border-white/10" : "border-slate-200"}`,
            children: [
              I.jsx("h2", {
                className: `text-xl font-semibold ${f ? "text-slate-50" : "text-slate-900"}`,
                children: "Load architecture JSON"
              }),
              I.jsx("p", {
                className: `mt-2 text-sm ${f ? "text-slate-400" : "text-slate-600"}`,
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
                    className: `inline-flex cursor-pointer items-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${f ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15" : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"}`,
                    children: [
                      v ? "Reading file..." : "Choose JSON file",
                      I.jsx("input", {
                        accept: "application/json,.json",
                        className: "sr-only",
                        onChange: N,
                        type: "file"
                      })
                    ]
                  }),
                  I.jsx("button", {
                    className: `rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${f ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm"}`,
                    onClick: () => {
                      x(true), setTimeout(() => {
                        h(Vp), E(sc(Vp)), x(false);
                      }, 50);
                    },
                    type: "button",
                    children: "Load sample SoC"
                  })
                ]
              }),
              I.jsx("textarea", {
                className: `h-72 resize-none rounded-lg border p-4 font-mono text-xs leading-5 outline-none transition ${f ? "border-white/10 bg-shell-950 text-slate-200 placeholder:text-slate-600 focus:border-cyan-300/40" : "border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"}`,
                onChange: (C) => h(C.target.value),
                placeholder: '{"components": [...], "connections": [...]}',
                spellCheck: false,
                value: m
              }),
              g ? I.jsx("div", {
                className: "rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700",
                children: g
              }) : null,
              I.jsx("div", {
                className: "flex justify-end",
                children: I.jsx("button", {
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
  function LE({ children: e, color: r = "#94a3b8" }) {
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
  function Up({ connections: e, direction: r, getName: o, onSelect: s }) {
    const u = mt((c) => c.theme) === "dark";
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
        const f = r === "incoming" ? c.sourceComponentId : c.targetComponentId, m = r === "incoming" ? c.sourcePortId : c.targetPortId, h = r === "incoming" ? c.targetPortId : c.sourcePortId;
        return I.jsxs("li", {
          className: `group rounded-lg p-3 transition ${u ? "bg-white/[0.03] hover:bg-white/[0.06] border border-white/5" : "bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-slate-200"}`,
          children: [
            I.jsx("button", {
              className: `mb-1.5 text-left text-sm font-semibold transition ${u ? "text-cyan-300 hover:text-cyan-200" : "text-cyan-600 hover:text-cyan-700"}`,
              onClick: () => s(f),
              type: "button",
              children: o(f)
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
  function xl({ title: e, children: r }) {
    const s = mt((l) => l.theme) === "dark";
    return I.jsxs("section", {
      className: `border-t pt-4 ${s ? "border-white/10" : "border-slate-200"}`,
      children: [
        I.jsxs("h3", {
          className: `mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${s ? "text-slate-500" : "text-slate-400"}`,
          children: [
            I.jsx("span", {
              className: `inline-block h-1 w-1 rounded-full ${s ? "bg-cyan-400" : "bg-cyan-500"}`
            }),
            e
          ]
        }),
        r
      ]
    });
  }
  const Wp = [];
  function OE() {
    const e = Te((y) => y.selectedNodeId), r = Lt((y) => e ? y.componentById.get(e) : void 0), o = Lt((y) => e ? y.getIncoming(e) : Wp), s = Lt((y) => e ? y.getOutgoing(e) : Wp), l = Lt((y) => y.getComponent), u = Zc(), c = be((y) => y.sidebarCollapsed), f = be((y) => y.toggleSidebar), h = mt((y) => y.theme) === "dark";
    if (!r || c) return null;
    const g = pt[r.type];
    return I.jsxs(Jc, {
      className: "relative h-full w-[360px] shrink-0 overflow-y-auto transition-all duration-300",
      children: [
        I.jsxs("div", {
          className: `relative border-b p-5 ${h ? "border-white/10" : "border-slate-200"}`,
          children: [
            I.jsx("div", {
              className: "absolute left-0 top-0 h-1 w-full",
              style: {
                backgroundColor: g.base
              }
            }),
            I.jsx("button", {
              className: `absolute right-3 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-md border transition ${h ? "border-white/10 bg-white/5 text-slate-500 hover:bg-white/10 hover:text-slate-200" : "border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 shadow-sm"}`,
              onClick: f,
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
                    backgroundColor: `${g.base}20`,
                    color: g.border,
                    border: `1px solid ${g.border}40`
                  },
                  children: r.type.slice(0, 2).toUpperCase()
                }),
                I.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    I.jsx(LE, {
                      color: g.border,
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
                  children: o.length + s.length
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
            I.jsx(xl, {
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
            I.jsx(xl, {
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
            I.jsx(xl, {
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
            I.jsx(xl, {
              title: "Outgoing",
              children: I.jsx(Up, {
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
  function wr(e) {
    return Array.isArray ? Array.isArray(e) : Fm(e) === "[object Array]";
  }
  function FE(e) {
    if (typeof e == "string") return e;
    if (typeof e == "bigint") return e.toString();
    const r = e + "";
    return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
  }
  function Cc(e) {
    return e == null ? "" : FE(e);
  }
  function xt(e) {
    return typeof e == "string";
  }
  function Il(e) {
    return typeof e == "number";
  }
  function BE(e) {
    return e === true || e === false || jE(e) && Fm(e) == "[object Boolean]";
  }
  function Om(e) {
    return typeof e == "object";
  }
  function jE(e) {
    return Om(e) && e !== null;
  }
  function Dt(e) {
    return e != null;
  }
  function Sl(e) {
    return !e.trim().length;
  }
  function Fm(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
  }
  const HE = "Incorrect 'index' type", _c = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", VE = (e) => `Invalid value for key ${e}`, UE = (e) => `Pattern length exceeds max of ${e}.`, WE = (e) => `Missing ${e} property in key`, YE = (e) => `Property 'weight' in key '${e}' must be a positive integer`, XE = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", Yp = Object.prototype.hasOwnProperty;
  var GE = class {
    constructor(e) {
      this._keys = [], this._keyMap = {};
      let r = 0;
      e.forEach((o) => {
        const s = Bm(o);
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
  function Bm(e) {
    let r = null, o = null, s = null, l = 1, u = null;
    if (xt(e) || wr(e)) s = e, r = Xp(e), o = bl(e);
    else {
      if (!Yp.call(e, "name")) throw new Error(WE("name"));
      const c = e.name;
      if (s = c, Yp.call(e, "weight") && e.weight !== void 0 && (l = e.weight, l <= 0)) throw new Error(YE(bl(c)));
      r = Xp(c), o = bl(c), u = e.getFn ?? null;
    }
    return {
      path: r,
      id: o,
      weight: l,
      src: s,
      getFn: u
    };
  }
  function Xp(e) {
    return wr(e) ? e : e.split(".");
  }
  function bl(e) {
    return wr(e) ? e.join(".") : e;
  }
  function KE(e, r) {
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
        if (f === c.length - 1 && (xt(h) || Il(h) || BE(h) || typeof h == "bigint")) o.push(m !== void 0 ? {
          v: Cc(h),
          i: m
        } : Cc(h));
        else if (wr(h)) {
          s = true;
          for (let g = 0, y = h.length; g < y; g += 1) l(h[g], c, f + 1, g);
        } else c.length && l(h, c, f + 1, m);
      }
    };
    return l(e, xt(r) ? r.split(".") : r, 0), s ? o : o[0];
  }
  const QE = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
  }, ZE = {
    isCaseSensitive: false,
    ignoreDiacritics: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (e, r) => e.score === r.score ? e.idx < r.idx ? -1 : 1 : e.score < r.score ? -1 : 1
  }, qE = {
    location: 0,
    threshold: 0.6,
    distance: 100
  }, JE = {
    useExtendedSearch: false,
    useTokenSearch: false,
    tokenize: void 0,
    tokenMatch: "any",
    getFn: KE,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
  }, Se = Object.freeze({
    ...ZE,
    ...QE,
    ...qE,
    ...JE
  });
  function ek(e = 1, r = 3) {
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
  var ed = class {
    constructor({ getFn: e = Se.getFn, fieldNormWeight: r = Se.fieldNormWeight } = {}) {
      this.norm = ek(r, 3), this.getFn = e, this.isCreated = false, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
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
      return !Dt(e) || Sl(e) ? null : {
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
          if (wr(c)) {
            const f = [];
            for (let m = 0, h = c.length; m < h; m += 1) {
              const g = c[m];
              if (Dt(g)) {
                if (xt(g)) {
                  if (!Sl(g)) {
                    const y = {
                      v: g,
                      i: m,
                      n: this.norm.get(g)
                    };
                    f.push(y);
                  }
                } else if (Dt(g.v)) {
                  const y = xt(g.v) ? g.v : Cc(g.v);
                  if (!Sl(y)) {
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
          } else if (xt(c) && !Sl(c)) {
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
  function jm(e, r, { getFn: o = Se.getFn, fieldNormWeight: s = Se.fieldNormWeight } = {}) {
    const l = new ed({
      getFn: o,
      fieldNormWeight: s
    });
    return l.setKeys(e.map(Bm)), l.setSources(r), l.create(), l;
  }
  function tk(e, { getFn: r = Se.getFn, fieldNormWeight: o = Se.fieldNormWeight } = {}) {
    const { keys: s, records: l } = e, u = new ed({
      getFn: r,
      fieldNormWeight: o
    });
    return u.setKeys(s), u.setIndexRecords(l), u;
  }
  function nk(e = [], r = Se.minMatchCharLength) {
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
  function rk(e, r, o, { location: s = Se.location, distance: l = Se.distance, threshold: u = Se.threshold, findAllMatches: c = Se.findAllMatches, minMatchCharLength: f = Se.minMatchCharLength, includeMatches: m = Se.includeMatches, ignoreLocation: h = Se.ignoreLocation } = {}) {
    if (r.length > 32) throw new Error(UE(32));
    const g = r.length, y = e.length, v = Math.max(0, Math.min(s, y));
    let x = u, E = v;
    const S = (Y, Q) => {
      const ee = Y / g;
      if (h) return ee;
      const G = Math.abs(v - Q);
      return l ? ee + G / l : G ? 1 : ee;
    }, N = f > 1 || m, C = N ? Array(y) : [];
    let P;
    for (; (P = e.indexOf(r, E)) > -1; ) {
      const Y = S(0, P);
      if (x = Math.min(Y, x), E = P + g, N) {
        let Q = 0;
        for (; Q < g; ) C[P + Q] = 1, Q += 1;
      }
    }
    E = -1;
    let z = [], A = 1, O = 0, V = g + y;
    const J = 1 << g - 1;
    for (let Y = 0; Y < g; Y += 1) {
      let Q = 0, ee = V;
      for (; Q < ee; ) S(Y, v + ee) <= x ? Q = ee : V = ee, ee = Math.floor((V - Q) / 2 + Q);
      V = ee;
      let G = Math.max(1, v - ee + 1);
      const Z = c ? y : Math.min(v + ee, y) + g, k = Array(Z + 2);
      k[Z + 1] = (1 << Y) - 1;
      for (let H = Z; H >= G; H -= 1) {
        const L = H - 1, K = o[e[L]];
        if (k[H] = (k[H + 1] << 1 | 1) & K, Y && (k[H] |= (z[H + 1] | z[H]) << 1 | 1 | z[H + 1]), k[H] & J && (A = S(Y, L), A <= x)) {
          if (x = A, E = L, O = Y, E <= v) break;
          G = Math.max(1, 2 * v - E);
        }
      }
      if (S(Y + 1, v) > x) break;
      z = k;
    }
    if (N && E >= 0) {
      const Y = Math.min(y - 1, E + g - 1 + O);
      for (let Q = E; Q <= Y; Q += 1) o[e[Q]] && (C[Q] = 1);
    }
    const W = {
      isMatch: E >= 0,
      score: Math.max(1e-3, A)
    };
    if (N) {
      const Y = nk(C, f);
      Y.length ? m && (W.indices = Y) : W.isMatch = false;
    }
    return W;
  }
  function ok(e) {
    const r = {};
    for (let o = 0, s = e.length; o < s; o += 1) {
      const l = e.charAt(o);
      r[l] = (r[l] || 0) | 1 << s - o - 1;
    }
    return r;
  }
  function td(e) {
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
  const Hm = {
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
  }, ik = new RegExp("[" + Object.keys(Hm).join("") + "]", "g"), Li = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(ik, (r) => Hm[r]) : (e) => e;
  var nd = class {
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
      }, e = f ? e : e.toLowerCase(), e = m ? Li(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
      const g = (v, x) => {
        this.chunks.push({
          pattern: v,
          alphabet: ok(v),
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
      if (e = r ? e : e.toLowerCase(), e = o ? Li(e) : e, this.pattern === e) {
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
      this.chunks.forEach(({ pattern: E, alphabet: S, startIndex: N }) => {
        const { isMatch: C, score: P, indices: z } = rk(e, E, S, {
          location: l + N,
          distance: u,
          threshold: c,
          findAllMatches: f,
          minMatchCharLength: m,
          includeMatches: s,
          ignoreLocation: h
        });
        C && (v = true), y += P, C && z && g.push(...z);
      });
      const x = {
        isMatch: v,
        score: v ? y / this.chunks.length : 1
      };
      return v && s && (x.indices = td(g)), x;
    }
  };
  const sk = /* @__PURE__ */ new Set([
    "fuzzy",
    "include"
  ]);
  function lk(e) {
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
          search(s) {
            return o.searchIn(s);
          }
        };
      }
    }
  ], Gp = Nc.length, ak = "\0", uk = "|";
  function ck(e) {
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
  function Kp(e, r) {
    const o = e.match(r);
    return o ? o[1] : null;
  }
  function dk(e, r = {}) {
    return e.replace(/\\\|/g, ak).split(uk).map((o) => {
      const s = ck(o.replace(/\u0000/g, "|").trim()).filter((u) => u && !!u.trim()), l = [];
      for (let u = 0, c = s.length; u < c; u += 1) {
        const f = s[u];
        let m = false, h = -1;
        for (; !m && ++h < Gp; ) {
          const g = Nc[h], y = Kp(f, g.multiRegex);
          y && (l.push(g.create(y, r)), m = true);
        }
        if (!m) for (h = -1; ++h < Gp; ) {
          const g = Nc[h], y = Kp(f, g.singleRegex);
          if (y) {
            l.push(g.create(y, r));
            break;
          }
        }
      }
      return l;
    });
  }
  var fk = class {
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
      }, e = r ? e : e.toLowerCase(), e = o ? Li(e) : e, this.pattern = e, this.query = dk(this.pattern, this.options);
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
      e = s ? e : e.toLowerCase(), e = l ? Li(e) : e;
      let u = 0;
      const c = [];
      let f = 0, m = false;
      for (let h = 0, g = r.length; h < g; h += 1) {
        const y = r[h];
        c.length = 0, u = 0, m = false;
        for (let v = 0, x = y.length; v < x; v += 1) {
          const E = y[v], { isMatch: S, indices: N, score: C } = E.search(e);
          if (S) u += 1, f += C, lk(E.type) && (m = true), o && (sk.has(E.type) ? c.push(...N) : c.push(N));
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
  function jl(e, r) {
    for (let o = 0, s = Mc.length; o < s; o += 1) {
      const l = Mc[o];
      if (l.condition(e, r)) return new l(e, r);
    }
    return new nd(e, r);
  }
  const Hl = {
    AND: "$and",
    OR: "$or"
  }, Ic = {
    PATH: "$path",
    PATTERN: "$val"
  }, bc = (e) => !!(e[Hl.AND] || e[Hl.OR]), hk = (e) => !!e[Ic.PATH], pk = (e) => !wr(e) && Om(e) && !bc(e), Qp = (e) => ({
    [Hl.AND]: Object.keys(e).map((r) => ({
      [r]: e[r]
    }))
  });
  function Vm(e, r, { auto: o = true } = {}) {
    const s = (l) => {
      if (xt(l)) {
        const m = {
          keyId: null,
          pattern: l
        };
        return o && (m.searcher = jl(l, r)), m;
      }
      const u = Object.keys(l), c = hk(l);
      if (!c && u.length > 1 && !bc(l)) return s(Qp(l));
      if (pk(l)) {
        const m = c ? l[Ic.PATH] : u[0], h = c ? l[Ic.PATTERN] : l[m];
        if (!xt(h)) throw new Error(VE(m));
        const g = {
          keyId: bl(m),
          pattern: h
        };
        return o && (g.searcher = jl(h, r)), g;
      }
      const f = {
        children: [],
        operator: u[0]
      };
      return u.forEach((m) => {
        const h = l[m];
        wr(h) && h.forEach((g) => {
          f.children.push(s(g));
        });
      }), f;
    };
    return bc(e) || (e = Qp(e)), s(e);
  }
  function Ac(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    let o = 1;
    return e.forEach(({ key: s, norm: l, score: u }) => {
      const c = s ? s.weight : null;
      o *= Math.pow(u === 0 && c ? Number.EPSILON : u, (c || 1) * (r ? 1 : l));
    }), o;
  }
  function mk(e, { ignoreFieldNorm: r = Se.ignoreFieldNorm }) {
    e.forEach((o) => {
      o.score = Ac(o.matches, {
        ignoreFieldNorm: r
      });
    });
  }
  var gk = class {
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
  function yk(e) {
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
  function vk(e, r, { includeMatches: o = Se.includeMatches, includeScore: s = Se.includeScore } = {}) {
    return e.map((l) => {
      const { idx: u } = l, c = {
        item: r[u],
        refIndex: u
      };
      return o && (c.matches = yk(l)), s && (c.score = l.score), c;
    });
  }
  const wk = /[\p{L}\p{M}\p{N}_]+/gu, Zp = /* @__PURE__ */ new WeakSet();
  function xk(e) {
    Zp.has(e) || (Zp.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
  }
  function Sk(e) {
    if (typeof e == "function") {
      let r = false;
      return (o) => {
        const s = e(o);
        if (!r && (r = true, !Array.isArray(s) || s.some((l) => typeof l != "string"))) throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(s) ? "array containing non-strings" : typeof s}.`);
        return s;
      };
    }
    return e instanceof RegExp ? (e.global || xk(e), (r) => r.match(e) || []) : (r) => r.match(wk) || [];
  }
  function Tc({ isCaseSensitive: e = false, ignoreDiacritics: r = false, tokenize: o } = {}) {
    const s = Sk(o);
    return {
      tokenize(l) {
        return e || (l = l.toLowerCase()), r && (l = Li(l)), s(l);
      }
    };
  }
  var Ek = class {
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
      return this.options.includeMatches && r.length && (m.indices = td(r)), this.combineAll && (this.useMask ? m.matchedMask = u : m.matchedTerms = c, m.termCount = this.numTerms), m;
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
  function Um(e, r, o, s) {
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
  function kk(e, r, o) {
    const s = {
      fieldCount: 0,
      df: /* @__PURE__ */ new Map(),
      docFieldCount: /* @__PURE__ */ new Map(),
      docTermFieldHits: /* @__PURE__ */ new Map()
    };
    for (const l of e) Um(s, l, r, o);
    return s;
  }
  function Ck(e, r, o, s) {
    Um(e, r, o, s);
  }
  function _k(e, r) {
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
  function qp(e, r) {
    if (r.length === 0) return;
    const o = Array.from(new Set(r)).sort((f, m) => f - m);
    for (const f of o) _k(e, f);
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
  var xr = class {
    constructor(e, r, o) {
      this.options = {
        ...Se,
        ...r
      }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new GE(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, o), this._lastQuery = null, this._lastSearcher = null;
    }
    _getSearcher(e) {
      if (this._lastQuery === e) return this._lastSearcher;
      const r = jl(e, this._invertedIndex ? {
        ...this.options,
        _invertedIndex: this._invertedIndex
      } : this.options);
      return this._lastQuery = e, this._lastSearcher = r, r;
    }
    setCollection(e, r) {
      if (this._docs = e, r && !(r instanceof ed)) throw new Error(HE);
      if (this._myIndex = r || jm(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      }), this.options.useTokenSearch) {
        const o = Tc({
          isCaseSensitive: this.options.isCaseSensitive,
          ignoreDiacritics: this.options.ignoreDiacritics,
          tokenize: this.options.tokenize
        });
        this._invertedIndex = kk(this._myIndex.records, this._myIndex.keys.length, o);
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
        Ck(this._invertedIndex, r, this._myIndex.keys.length, o);
      }
      this._invalidateSearcherCache();
    }
    remove(e = () => false) {
      const r = [], o = [];
      for (let s = 0, l = this._docs.length; s < l; s += 1) e(this._docs[s], s) && (r.push(this._docs[s]), o.push(s));
      if (o.length) {
        this._invertedIndex && qp(this._invertedIndex, o);
        const s = new Set(o);
        this._docs = this._docs.filter((l, u) => !s.has(u)), this._myIndex.removeAll(o), this._invalidateSearcherCache();
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
      const { limit: o = -1 } = r || {}, { includeMatches: s, includeScore: l, shouldSort: u, sortFn: c, ignoreFieldNorm: f } = this.options;
      if (xt(e) && !e.trim()) {
        let g = this._docs.map((y, v) => ({
          item: y,
          refIndex: v
        }));
        return Il(o) && o > -1 && (g = g.slice(0, o)), g;
      }
      const m = Il(o) && o > 0 && xt(e);
      let h;
      if (m) {
        const g = new gk(o);
        xt(this._docs[0]) ? this._searchStringList(e, {
          heap: g,
          ignoreFieldNorm: f
        }) : this._searchObjectList(e, {
          heap: g,
          ignoreFieldNorm: f
        }), h = g.extractSorted(c);
      } else h = xt(e) ? xt(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), mk(h, {
        ignoreFieldNorm: f
      }), u && h.sort(c), Il(o) && o > -1 && (h = h.slice(0, o));
      return vk(h, this._docs, {
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
      const r = Vm(e, this.options), o = (c, f, m) => {
        if (!("children" in c)) {
          const { keyId: v, searcher: x } = c;
          let E;
          return v === null ? (E = [], this._myIndex.keys.forEach((S, N) => {
            E.push(...this._findMatches({
              key: S,
              value: f[N],
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
          else if (g === Hl.AND) return [];
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
      if (wr(r)) r.forEach(({ v: l, i: u, n: c }) => {
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
  xr.version = "7.4.2";
  xr.createIndex = jm;
  xr.parseIndex = tk;
  xr.config = Se;
  xr.match = function(e, r, o) {
    if (o && o.useTokenSearch) throw new Error(XE);
    return jl(e, {
      ...Se,
      ...o
    }).searchIn(r);
  };
  xr.parseQuery = Vm;
  rd(fk);
  rd(Ek);
  xr.use = function(...e) {
    e.forEach((r) => rd(r));
  };
  var Nk = xr;
  const Mk = {
    keys: [
      "name",
      "type",
      "id"
    ],
    threshold: 0.32,
    ignoreLocation: true,
    includeScore: true
  }, Ik = [];
  function bk() {
    const e = Lt((s) => {
      var _a;
      return ((_a = s.model) == null ? void 0 : _a.components) ?? Ik;
    }), r = Te((s) => s.searchQuery), o = D.useMemo(() => new Nk(e, Mk), [
      e
    ]);
    return D.useMemo(() => {
      const s = r.trim();
      return s ? o.search(s).map((l) => l.item) : e;
    }, [
      e,
      o,
      r
    ]);
  }
  const Ci = 52, Jp = 288, e0 = 5;
  function Ak({ results: e, onSelect: r }) {
    const o = D.useRef(null), [s, l] = D.useState(0), [u, c] = D.useState(Jp), m = mt((E) => E.theme) === "dark";
    D.useEffect(() => {
      const E = o.current;
      if (!E) return;
      const S = new ResizeObserver((N) => {
        for (const C of N) c(C.contentRect.height);
      });
      return S.observe(E), () => S.disconnect();
    }, []);
    const h = D.useCallback(() => {
      const E = o.current;
      E && l(E.scrollTop);
    }, []), g = e.length * Ci, y = Math.max(0, Math.floor(s / Ci) - e0), v = Math.min(e.length, Math.ceil((s + u) / Ci) + e0), x = e.slice(y, v);
    return I.jsx("div", {
      className: `border-t ${m ? "border-white/10" : "border-slate-200"}`,
      children: I.jsx("div", {
        ref: o,
        className: "overflow-y-auto",
        style: {
          height: Math.min(g, Jp)
        },
        onScroll: h,
        children: I.jsx("div", {
          style: {
            height: g,
            position: "relative"
          },
          children: x.map((E, S) => {
            const N = y + S;
            return I.jsxs("button", {
              className: `flex w-full items-center justify-between gap-3 px-3 text-left transition ${m ? "hover:bg-white/5" : "hover:bg-slate-100"}`,
              style: {
                position: "absolute",
                top: N * Ci,
                left: 0,
                right: 0,
                height: Ci
              },
              onClick: () => r(E.id),
              type: "button",
              children: [
                I.jsxs("span", {
                  className: "min-w-0",
                  children: [
                    I.jsx("span", {
                      className: `block truncate text-sm font-medium ${m ? "text-slate-100" : "text-slate-800"}`,
                      children: E.name
                    }),
                    I.jsx("span", {
                      className: "block font-mono text-[11px] text-slate-500",
                      children: E.id
                    })
                  ]
                }),
                I.jsx("span", {
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
  function Tk() {
    const [e, r] = D.useState(""), o = Te((h) => h.setSearchQuery), s = bk(), l = Zc(), u = D.useRef(null), f = mt((h) => h.theme) === "dark";
    D.useEffect(() => {
      const h = window.setTimeout(() => o(e), 150);
      return () => window.clearTimeout(h);
    }, [
      o,
      e
    ]), D.useEffect(() => {
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
    ]), D.useEffect(() => {
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
    return I.jsxs(Jc, {
      className: "w-[280px] overflow-hidden rounded-lg",
      children: [
        I.jsxs("div", {
          className: "flex items-center gap-2 px-3 py-2.5",
          children: [
            I.jsx("svg", {
              className: `h-4 w-4 shrink-0 ${f ? "text-slate-500" : "text-slate-400"}`,
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
              className: `w-full border-0 bg-transparent text-sm outline-none ${f ? "text-slate-100 placeholder:text-slate-600" : "text-slate-800 placeholder:text-slate-400"}`,
              onChange: (h) => r(h.target.value),
              placeholder: "Search components... (/)",
              value: e
            }),
            e.trim() ? I.jsx("button", {
              className: `shrink-0 ${f ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`,
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
        e.trim() ? I.jsx(Ak, {
          results: s,
          onSelect: m
        }) : null
      ]
    });
  }
  function Rk() {
    const e = mt((o) => o.theme), r = mt((o) => o.toggleTheme);
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
  const Pk = "modulepreload", $k = function(e) {
    return "/" + e;
  }, t0 = {}, Wm = function(r, o, s) {
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
        if (h = $k(h), h in t0) return;
        t0[h] = true;
        const g = h.endsWith(".css"), y = g ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${h}"]${y}`)) return;
        const v = document.createElement("link");
        if (v.rel = g ? "stylesheet" : Pk, g || (v.as = "script"), v.crossOrigin = "", v.href = h, m && v.setAttribute("nonce", m), document.head.appendChild(v), g) return new Promise((x, E) => {
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
  }, n0 = {
    component: 0,
    cluster: 1,
    busChannel: 2
  };
  function r0(e) {
    return e.data.kind === "busChannel" ? {
      width: Vi,
      height: Vr
    } : e.data.kind === "cluster" ? {
      width: Hi,
      height: ql
    } : {
      width: Ro,
      height: vr
    };
  }
  function zk(e) {
    return e.data.kind === "component" ? e.data.layer ?? 3 : e.data.kind === "busChannel" ? e.data.layer ?? 1 : 4;
  }
  function Dk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) r.set(o.source, (r.get(o.source) ?? 0) + 1), r.set(o.target, (r.get(o.target) ?? 0) + 1);
    return r;
  }
  function o0(e, r) {
    const o = /* @__PURE__ */ new Map(), s = Dk(r);
    for (const h of e) {
      const g = zk(h), y = o.get(g);
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
        const S = (n0[x.data.kind] ?? 99) - (n0[E.data.kind] ?? 99);
        if (S !== 0) return S;
        const N = (s.get(E.id) ?? 0) - (s.get(x.id) ?? 0);
        return N !== 0 ? N : x.id.localeCompare(E.id);
      });
      if (y.every((x) => x.data.kind === "busChannel")) {
        for (const x of y) {
          const { width: E, height: S } = r0(x);
          l.push({
            ...x,
            id: x.id,
            position: {
              x: c,
              y: -S / 2
            }
          });
        }
        c += Vi + 120;
      } else {
        const x = y.length, E = x <= 6 ? 1 : x <= 14 ? 2 : x <= 28 ? 3 : x <= 48 ? 4 : x <= 72 ? 5 : O2, S = Math.ceil(y.length / E), N = D2, C = kc, P = E * N, z = S * C, A = c, O = -z / 2;
        for (let V = 0; V < y.length; V++) {
          const J = y[V];
          if (!J) continue;
          const { width: W, height: Y } = r0(J), Q = V % E, ee = Math.floor(V / E);
          l.push({
            ...J,
            id: J.id,
            position: {
              x: A + Q * N,
              y: O + ee * C
            }
          });
        }
        c += P + 160;
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
  function Lk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, s] of Object.entries(e)) r.set(o, {
      category: s.category,
      layer: s.layer,
      groupId: s.groupId
    });
    return r;
  }
  function Ok(e) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, s] of Object.entries(e)) r.set(o, {
      connectionType: s.connectionType,
      sourcePortSide: s.sourcePortSide,
      targetPortSide: s.targetPortSide
    });
    return r;
  }
  function Ym(e) {
    const r = {};
    for (const [o, s] of Object.entries(e)) {
      r[o] = {};
      for (const [l, u] of Object.entries(s)) r[o][l] = u;
    }
    return r;
  }
  function Fk(e) {
    return {
      layerConstraints: e.layerConstraints,
      portConstraints: Ym(e.portConstraints),
      groupHints: e.groupHints,
      elkOptions: e.elkOptions
    };
  }
  async function Bk(e) {
    const { preprocessArchitectureWasm: r } = await Wm(async () => {
      const { preprocessArchitectureWasm: s } = await import("./index-Dbilfpvp.js");
      return {
        preprocessArchitectureWasm: s
      };
    }, []), o = await r(JSON.stringify(e));
    return {
      model: o.model,
      componentMetadata: Lk(o.componentMetadata),
      connectionMetadata: Ok(o.connectionMetadata),
      groups: o.groups,
      portSides: Ym(o.portSides),
      elkHints: Fk(o.elkHints)
    };
  }
  const jk = /\d+$/;
  function Vl(e) {
    const r = {};
    for (const o of e) r[o.type] = (r[o.type] ?? 0) + 1;
    return r;
  }
  function Rc(e, r) {
    const o = new Set(e.map((s) => s.id));
    return r.filter((s) => o.has(s.sourceComponentId) || o.has(s.targetComponentId)).length;
  }
  function Hk(e) {
    const r = e.replace(jk, "").trim(), o = r.split(/[\s_\-]+/);
    return o[o.length - 1] ?? r;
  }
  function Vk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const s = r.get(o.type);
      s ? s.push(o) : r.set(o.type, [
        o
      ]);
    }
    return r;
  }
  function Uk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e) {
      const s = Hk(o.name), l = r.get(s);
      l ? l.push(o) : r.set(s, [
        o
      ]);
    }
    return r;
  }
  function Wk(e, r) {
    const o = [];
    for (let s = 0; s < e.length; s += r) o.push(e.slice(s, s + r));
    return o;
  }
  function Yk(e) {
    return e <= 12 ? e : e <= 30 ? Math.ceil(e / 3) : e <= 60 ? Math.ceil(e / 4) : Math.ceil(e / 5);
  }
  function Pc(e, r, o, s) {
    var _a, _b, _c2, _d, _e2;
    if (e.length <= 12) return [];
    const l = Uk(e), u = [
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
            typeBreakdown: Vl(y)
          }
        });
      }
      return h;
    }
    const c = Yk(e.length), f = Wk(e, c), m = [];
    for (let h = 0; h < f.length; h++) {
      const g = f[h];
      if (!g || g.length === 0) continue;
      const y = `${s}:part${h}`, v = g.length > 12, x = ((_c2 = g[0]) == null ? void 0 : _c2.name) ?? `Part ${h + 1}`, E = ((_d = g[g.length - 1]) == null ? void 0 : _d.name) ?? x, S = g.length > 2 ? `${x}..${E}` : x;
      m.push({
        id: y,
        name: `${S} (${g.length})`,
        type: ((_e2 = g[0]) == null ? void 0 : _e2.type) ?? "custom",
        depth: o,
        componentIds: g.map((N) => N.id),
        childGroups: v ? Pc(g, r, o + 1, y) : [],
        metadata: {
          componentCount: g.length,
          connectionCount: Rc(g, r),
          typeBreakdown: Vl(g)
        }
      });
    }
    return m;
  }
  function Xk(e) {
    return 1001;
  }
  function Gk(e, r) {
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
        typeBreakdown: Vl(e.components)
      }
    }, s = Xk(e.components.length);
    if (e.components.length < s) return o;
    const l = Vk(e.components);
    for (const u of j2) {
      const c = l.get(u);
      if (!c || c.length === 0) continue;
      const f = `hierarchy:${u}`, m = c.length > 12, h = {
        id: f,
        name: `${B2[u]} (${c.length})`,
        type: u,
        depth: 1,
        componentIds: c.map((g) => g.id),
        childGroups: m ? Pc(c, e.connections, 2, f) : [],
        metadata: {
          componentCount: c.length,
          connectionCount: Rc(c, e.connections),
          typeBreakdown: Vl(c)
        }
      };
      o.childGroups.push(h);
    }
    return o;
  }
  function Kk(e) {
    const r = new Map(e.components.map((o) => [
      o.id,
      0
    ]));
    for (const o of e.connections) r.set(o.sourceComponentId, (r.get(o.sourceComponentId) ?? 0) + 1), r.set(o.targetComponentId, (r.get(o.targetComponentId) ?? 0) + 1);
    return r;
  }
  function Qk(e) {
    const r = /* @__PURE__ */ new Map();
    for (const o of e.connections) {
      let s = r.get(o.sourceComponentId);
      s || (s = /* @__PURE__ */ new Set(), r.set(o.sourceComponentId, s)), s.add(o.id);
      let l = r.get(o.targetComponentId);
      l || (l = /* @__PURE__ */ new Set(), r.set(o.targetComponentId, l)), l.add(o.id);
    }
    return r;
  }
  function i0(e, r) {
    const o = /* @__PURE__ */ new Set();
    for (const s of e) {
      const l = r.get(s);
      if (l) for (const u of l) o.add(u);
    }
    return o.size;
  }
  function Zk(e) {
    return e === "bus";
  }
  function qk(e, r, o, s) {
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
  function Jk(e, r, o, s) {
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
  function eC(e, r, o) {
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
  function tC(e, r, o) {
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
  function nC(e, r, o, s, l, u) {
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
      if (g <= L2 || !y) for (const v of h.componentIds) {
        const x = s.get(v);
        x && (c.push(x), l.set(v, v));
      }
      else {
        const v = i0(h.componentIds, u), x = {};
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
      const h = i0(e.componentIds, u), g = {};
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
  function rC(e, r, o) {
    var _a;
    const s = [], l = [], u = [];
    for (const h of e) {
      const y = ((_a = o == null ? void 0 : o.componentMetadata.get(h.id)) == null ? void 0 : _a.layer) ?? 3;
      Zk(h.type) ? l.push({
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
      const g = c.get(h), y = oc[h] ?? h * 300, x = -(g.length * kc / 2) + vr / 2;
      for (let E = 0; E < g.length; E++) {
        const S = g[E];
        if (!S) continue;
        const N = x + E * kc;
        s.push(Jk(S.component, S.layer, y, N));
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
      const y = oc[h] ?? h * 300, x = -(g.length * (Vr + 40) / 2) + Vr / 2;
      for (let E = 0; E < g.length; E++) {
        const S = g[E];
        if (!S) continue;
        const N = x + E * (Vr + 40);
        s.push(qk(S.component, S.layer, y, N));
      }
    }
    for (let h = 0; h < r.length; h++) {
      const g = r[h];
      if (!g) continue;
      const y = oc[4], v = -200 + h * (Hi + 80);
      s.push(eC(g, y + 400, v));
    }
    return s;
  }
  function s0(e, r, o) {
    Kk(e);
    const s = Gk(e), l = new Map(e.components.map((v) => [
      v.id,
      v
    ])), u = Qk(e), c = r ?? /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), m = [], h = [];
    if (s.childGroups.length === 0) for (const v of s.componentIds) {
      const x = l.get(v);
      x && (m.push(x), f.set(v, v));
    }
    else for (const v of s.childGroups) {
      const x = nC(v, c, e, l, f, u);
      m.push(...x.visibleComponents), h.push(...x.clusters);
    }
    const g = rC(m, h, o), y = tC(e, f, o == null ? void 0 : o.connectionMetadata);
    return {
      nodes: g,
      edges: y
    };
  }
  function l0(e, r) {
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
  function oC() {
    const e = Lt((m) => m.model), r = be((m) => m.setNodes), o = be((m) => m.setEdges), s = be((m) => m.setLayoutLoading), l = be((m) => m.expandedClusterIds), u = be((m) => m.expansionPath), c = D.useRef(null), f = D.useRef(false);
    D.useEffect(() => {
      if (!e) return;
      const m = e.components.length > H2, g = setTimeout(async () => {
        let y;
        if (m) {
          s(true);
          try {
            const { preprocessArchitectureWasm: S } = await Wm(async () => {
              const { preprocessArchitectureWasm: P } = await import("./index-Dbilfpvp.js");
              return {
                preprocessArchitectureWasm: P
              };
            }, []), N = new Worker(new URL("/assets/preprocessWorker-DkNNOVJt.js", import.meta.url), {
              type: "module"
            });
            y = await new Promise((P, z) => {
              N.onmessage = (A) => {
                N.terminate(), A.data.result ? P(A.data.result) : z(new Error(A.data.error ?? "Preprocessing failed"));
              }, N.onerror = () => {
                N.terminate(), z(new Error("Worker failed"));
              }, N.postMessage({
                model: e
              });
            });
          } catch {
          }
        } else try {
          y = await Bk(e);
        } catch {
        }
        y && (c.current = y);
        const { nodes: v, edges: x } = s0(e, l, y);
        r(v), o(x);
        const E = o0(v, x);
        r(l0(v, E)), s(false), f.current = true;
      }, 10);
      return () => clearTimeout(g);
    }, [
      e,
      o,
      r,
      s
    ]), D.useEffect(() => {
      if (!e || !f.current) return;
      const { nodes: m, edges: h } = s0(e, l, c.current ?? void 0);
      r(m), o(h);
      const g = o0(m, h);
      r(l0(m, g));
    }, [
      l,
      u,
      e,
      r,
      o
    ]);
  }
  const iC = "http://www.w3.org/2000/svg";
  function od(e) {
    return e.data.kind === "busChannel" ? {
      width: Vi,
      height: Vr
    } : e.data.kind === "cluster" ? {
      width: Hi,
      height: ql
    } : {
      width: Ro,
      height: vr
    };
  }
  function sC(e) {
    const { width: r, height: o } = od(e);
    return {
      minX: e.position.x,
      minY: e.position.y,
      maxX: e.position.x + r,
      maxY: e.position.y + o
    };
  }
  function lC(e) {
    return e.length === 0 ? null : e.reduce((r, o) => ({
      minX: Math.min(r.minX, o.minX),
      minY: Math.min(r.minY, o.minY),
      maxX: Math.max(r.maxX, o.maxX),
      maxY: Math.max(r.maxY, o.maxY)
    }), {
      ...e[0]
    });
  }
  function Ul(e, r) {
    const { width: o, height: s } = od(e);
    return {
      x: r === "right" ? e.position.x + o : e.position.x,
      y: e.position.y + s / 2
    };
  }
  function aC(e, r) {
    const o = e.map(sC), s = new Map(e.map((l) => [
      l.id,
      l
    ]));
    for (const l of r) {
      const u = s.get(l.source), c = s.get(l.target);
      if (!u || !c) continue;
      const f = Ul(u, "right"), m = Ul(c, "left");
      o.push({
        minX: Math.min(f.x, m.x) - 40,
        minY: Math.min(f.y, m.y) - 40,
        maxX: Math.max(f.x, m.x) + 40,
        maxY: Math.max(f.y, m.y) + 40
      });
    }
    return lC(o);
  }
  function Kt(e, r = {}, o) {
    const s = document.createElementNS(iC, e);
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
  const uC = {
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
  }, cC = {
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
  function dC(e, r, o) {
    const s = r ? uC : cC;
    return o ? {
      color: r ? "#818cf8" : "#6366f1",
      width: 2,
      dash: "4 3",
      opacity: 0.65
    } : s[e ?? "unknown"] ?? s.unknown;
  }
  function fC(e, r, o, s, l = 8) {
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
  function hC(e) {
    var _a, _b;
    return ((_a = e.data) == null ? void 0 : _a.connectionType) ? e.data.connectionType : ((_b = e.data) == null ? void 0 : _b.connectionCount) && e.data.connectionCount > 1 ? `${e.data.connectionCount}x` : "";
  }
  function a0(e) {
    return pt[e] ?? pt.custom;
  }
  function pC(e) {
    var _a;
    const r = Kt("g", {
      class: `node node-${e.data.kind}`
    }), o = od(e), s = o.width;
    if (e.data.kind === "busChannel") {
      const f = o.height, m = a0(e.data.component.type);
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
    const l = e.data.component, u = a0(l.type), c = vr;
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
  function mC(e) {
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
  function gC(e, r, o, s, l) {
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
      const N = o + at / 2, C = s + l / 2;
      return Re(u, N, C, `Bus Channel: ${S.name}`, {
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
      const S = c.ports.length, N = c.registers.length, C = v, P = at / 3;
      for (let z = 0; z < 3; z++) {
        const A = o + $e + z * P, O = z === 0 ? "Ports" : z === 1 ? "Registers" : "Connections", V = z === 0 ? S : z === 1 ? N : S + N;
        Re(u, A + P / 2, C + 4, String(V), {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "18px",
          "font-weight": "600",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
          "text-anchor": "middle"
        }), Re(u, A + P / 2, C + 20, O.toUpperCase(), {
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
      for (const z of c.ports) {
        const A = mC(z.direction);
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
          fill: A.dot
        }), Re(u, o + $e + 24, v + 18, z.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), It(u, {
          x: String(o + at - $e - 50),
          y: String(v + 6),
          width: String(z.direction.length * 6 + 12),
          height: "16",
          fill: A.bg
        }), Re(u, o + at - $e - 50 + 6, v + 17, z.direction.toUpperCase(), {
          fill: A.text,
          "font-size": "10px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), z.width && Re(u, o + at - $e - 16, v + 18, `${z.width}b`, {
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
        for (const z of c.registers) It(u, {
          x: String(o + $e),
          y: String(v),
          width: String(at - $e * 2),
          height: "28",
          fill: r ? "rgba(255,255,255,0.03)" : "#f8fafc",
          stroke: r ? "rgba(255,255,255,0.05)" : "#f1f5f9",
          "stroke-width": "1"
        }), Re(u, o + $e + 12, v + 18, z.name, {
          fill: r ? "#e2e8f0" : "#334155",
          "font-size": "13px",
          "font-weight": "500",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        }), z.address && (It(u, {
          x: String(o + at - $e - 70),
          y: String(v + 6),
          width: String(z.address.length * 7 + 12),
          height: "16",
          fill: r ? "rgba(255,255,255,0.05)" : "#f1f5f9"
        }), Re(u, o + at - $e - 70 + 6, v + 17, z.address, {
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
    }), v += 20, f.typeBreakdown)) for (const [S, N] of Object.entries(f.typeBreakdown)) {
      const C = pt[S] ?? pt.custom;
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
        fill: C.base
      }), Re(u, o + $e + 24, v + 18, S, {
        fill: r ? "#e2e8f0" : "#334155",
        "font-size": "13px",
        "font-weight": "500",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
      }), Re(u, o + at - $e - 12, v + 18, `\xD7${N}`, {
        fill: r ? "#94a3b8" : "#64748b",
        "font-size": "13px",
        "font-weight": "600",
        "font-family": "Inter, ui-sans-serif, system-ui, sans-serif",
        "text-anchor": "end"
      }), v += 32;
    }
    return u;
  }
  const yC = "http://www.w3.org/2000/svg";
  function vC(e, r, o) {
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
  function wC(e) {
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
  function xC(e, r) {
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
  function SC(e, r, o, s) {
    var _a;
    const l = aC(e, r);
    if (!l) throw new Error("Unable to determine export bounds.");
    const u = 96, c = l.maxX - l.minX + u * 2, f = l.maxY - l.minY + u * 2, m = l.minX - u, h = l.minY - u, g = s ? 24 : 0, y = c + g + (s ? at : 0), v = new Map(e.map((C) => [
      C.id,
      C
    ])), x = Kt("svg", {
      xmlns: yC,
      viewBox: `${m} ${h} ${y} ${f}`,
      style: "width: 100%; height: 100%;",
      "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
    }), E = Kt("defs");
    xC(E, o), x.appendChild(E), zt(x, {
      x: String(m),
      y: String(h),
      width: String(y),
      height: String(f),
      fill: o ? "#020617" : "#f5f0e8"
    });
    const S = Kt("g", {
      class: "edges"
    });
    for (const C of r) {
      const P = v.get(C.source), z = v.get(C.target);
      if (!P || !z) continue;
      const A = C.source.startsWith("hierarchy:") || C.target.startsWith("hierarchy:"), O = dC((_a = C.data) == null ? void 0 : _a.connectionType, o, A), V = Ul(P, "right"), J = Ul(z, "left"), { path: W, labelX: Y, labelY: Q } = fC(V.x, V.y, J.x, J.y);
      S.appendChild(Kt("path", {
        d: W,
        fill: "none",
        stroke: O.color,
        "stroke-width": String(O.width),
        "stroke-opacity": String(O.opacity),
        "stroke-dasharray": O.dash ?? "",
        "marker-end": "url(#export-arrow)"
      }));
      const ee = hC(C);
      if (ee) {
        const G = Math.max(36, ee.length * 7 + 10);
        S.appendChild(Kt("rect", {
          x: String(Y - G / 2),
          y: String(Q - 10),
          width: String(G),
          height: "18",
          rx: "9",
          fill: o ? "#0f172a" : "#ffffff",
          stroke: o ? "#334155" : "#cbd5e1"
        })), Re(S, Y, Q + 3, ee, {
          fill: o ? "#e2e8f0" : "#334155",
          "font-size": "9px",
          "text-anchor": "middle",
          "font-family": "Inter, ui-sans-serif, system-ui, sans-serif"
        });
      }
    }
    x.appendChild(S);
    const N = Kt("g", {
      class: "nodes"
    });
    for (const C of e) N.appendChild(pC(C));
    if (x.appendChild(N), s) {
      const C = wC(e);
      if (C) {
        const P = m + c + g, z = h;
        x.appendChild(gC(C, o, P, z, f));
      }
    }
    return x;
  }
  function EC(e, r) {
    const o = URL.createObjectURL(e), s = document.createElement("a");
    s.href = o, s.download = r, s.click(), setTimeout(() => URL.revokeObjectURL(o), 3e3);
  }
  async function kC(e, r = {}) {
    const o = be.getState(), l = mt.getState().theme === "dark", u = r.scope ?? (Te.getState().selectedNodeId ? "selection" : "full"), { nodes: c, edges: f } = vC(o.nodes, o.edges, u);
    if (c.length === 0) throw new Error("There is nothing to export.");
    const h = SC(c, f, l, u === "selection"), g = new XMLSerializer().serializeToString(h), y = new Blob([
      g
    ], {
      type: "image/svg+xml;charset=utf-8"
    });
    EC(y, `architecture-${u}.svg`);
  }
  function CC() {
    const e = Lt((O) => O.model !== null), r = Lt((O) => {
      var _a;
      return ((_a = O.model) == null ? void 0 : _a.components.length) ?? 0;
    }), o = Lt((O) => {
      var _a;
      return ((_a = O.model) == null ? void 0 : _a.connections.length) ?? 0;
    }), s = Lt((O) => O.clearModel), l = Te((O) => O.selectedNodeId), u = Te((O) => O.selectedNodeIds), c = be((O) => O.sidebarCollapsed), f = be((O) => O.setNodes), m = be((O) => O.setEdges), h = be((O) => O.resetExpansion), g = Te((O) => O.clearSelection), y = Te((O) => O.setSearchQuery), v = mt((O) => O.theme), x = v === "dark", [E, S] = D.useState(false), [N, C] = D.useState(null);
    oC(), D.useEffect(() => {
      document.documentElement.setAttribute("data-theme", v), x ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [
      v,
      x
    ]);
    function P() {
      g(), y(""), f([]), m([]), h(), s();
    }
    async function z(O = "full") {
      S(true), C(null);
      try {
        await kC("svg", {
          scope: O
        });
      } catch (V) {
        const J = V instanceof Error ? V.message : "Export failed";
        C(J), setTimeout(() => C(null), 4e3);
      } finally {
        S(false);
      }
    }
    const A = `grid h-screen overflow-hidden transition-colors duration-200 ${x ? "bg-shell-950 text-slate-100" : "bg-[#f5f0e8] text-[#1a1a1a]"} ${l && !c ? "grid-cols-[minmax(0,1fr)_360px]" : "grid-cols-[minmax(0,1fr)]"}`;
    return I.jsxs("main", {
      className: A,
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
                      onClick: P,
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
                I.jsx(Tk, {})
              ]
            }),
            I.jsxs("div", {
              className: "absolute right-5 top-5 z-10 flex items-center gap-2",
              children: [
                e ? I.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    I.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${x ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200" : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"}`,
                      disabled: E,
                      onClick: () => z("full"),
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
                        E ? "Exporting..." : "Export SVG"
                      ]
                    }),
                    u.size > 0 && I.jsxs("button", {
                      className: `flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition ${x ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/15" : "border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm"}`,
                      disabled: E,
                      onClick: () => z("selection"),
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
                        "Export Selected (",
                        u.size,
                        ")"
                      ]
                    })
                  ]
                }) : null,
                I.jsx(Rk, {})
              ]
            }),
            I.jsx(IE, {}),
            e ? null : I.jsx(DE, {}),
            N ? I.jsx("div", {
              className: "absolute bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg border shadow-lg text-xs font-medium bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
              children: N
            }) : null
          ]
        }),
        I.jsx(OE, {})
      ]
    });
  }
  function _C() {
    return I.jsx(Qc, {
      children: I.jsx(CC, {})
    });
  }
  document.documentElement.classList.add("dark");
  Oy.createRoot(document.getElementById("root")).render(I.jsx(D.StrictMode, {
    children: I.jsx(_C, {})
  }));
})();
