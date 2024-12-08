(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function _c(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Mc = {
    exports: {}
}
  , yi = {}
  , Lc = {
    exports: {}
}
  , F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br = Symbol.for("react.element")
  , L0 = Symbol.for("react.portal")
  , z0 = Symbol.for("react.fragment")
  , V0 = Symbol.for("react.strict_mode")
  , A0 = Symbol.for("react.profiler")
  , R0 = Symbol.for("react.provider")
  , F0 = Symbol.for("react.context")
  , O0 = Symbol.for("react.forward_ref")
  , I0 = Symbol.for("react.suspense")
  , D0 = Symbol.for("react.memo")
  , $0 = Symbol.for("react.lazy")
  , Wa = Symbol.iterator;
function B0(e) {
    return e === null || typeof e != "object" ? null : (e = Wa && e[Wa] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var zc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Vc = Object.assign
  , Ac = {};
function bn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ac,
    this.updater = n || zc
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
bn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Rc() {}
Rc.prototype = bn.prototype;
function _l(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ac,
    this.updater = n || zc
}
var Ml = _l.prototype = new Rc;
Ml.constructor = _l;
Vc(Ml, bn.prototype);
Ml.isPureReactComponent = !0;
var Qa = Array.isArray
  , Fc = Object.prototype.hasOwnProperty
  , Ll = {
    current: null
}
  , Oc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ic(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Fc.call(t, r) && !Oc.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: br,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Ll.current
    }
}
function H0(e, t) {
    return {
        $$typeof: br,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function zl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === br
}
function b0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ka = /\/+/g;
function bi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? b0("" + e.key) : t.toString(36)
}
function Co(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case br:
            case L0:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + bi(s, 0) : r,
        Qa(o) ? (n = "",
        e != null && (n = e.replace(Ka, "$&/") + "/"),
        Co(o, t, n, "", function(u) {
            return u
        })) : o != null && (zl(o) && (o = H0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Ka, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Qa(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + bi(i, l);
            s += Co(i, t, n, a, o)
        }
    else if (a = B0(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + bi(i, l++),
            s += Co(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function to(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Co(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function U0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ye = {
    current: null
}
  , Po = {
    transition: null
}
  , W0 = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Po,
    ReactCurrentOwner: Ll
};
F.Children = {
    map: to,
    forEach: function(e, t, n) {
        to(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return to(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return to(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!zl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = bn;
F.Fragment = z0;
F.Profiler = A0;
F.PureComponent = _l;
F.StrictMode = V0;
F.Suspense = I0;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W0;
F.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Vc({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Ll.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Fc.call(t, a) && !Oc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: br,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
F.createContext = function(e) {
    return e = {
        $$typeof: F0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: R0,
        _context: e
    },
    e.Consumer = e
}
;
F.createElement = Ic;
F.createFactory = function(e) {
    var t = Ic.bind(null, e);
    return t.type = e,
    t
}
;
F.createRef = function() {
    return {
        current: null
    }
}
;
F.forwardRef = function(e) {
    return {
        $$typeof: O0,
        render: e
    }
}
;
F.isValidElement = zl;
F.lazy = function(e) {
    return {
        $$typeof: $0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: U0
    }
}
;
F.memo = function(e, t) {
    return {
        $$typeof: D0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
F.startTransition = function(e) {
    var t = Po.transition;
    Po.transition = {};
    try {
        e()
    } finally {
        Po.transition = t
    }
}
;
F.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
F.useCallback = function(e, t) {
    return ye.current.useCallback(e, t)
}
;
F.useContext = function(e) {
    return ye.current.useContext(e)
}
;
F.useDebugValue = function() {}
;
F.useDeferredValue = function(e) {
    return ye.current.useDeferredValue(e)
}
;
F.useEffect = function(e, t) {
    return ye.current.useEffect(e, t)
}
;
F.useId = function() {
    return ye.current.useId()
}
;
F.useImperativeHandle = function(e, t, n) {
    return ye.current.useImperativeHandle(e, t, n)
}
;
F.useInsertionEffect = function(e, t) {
    return ye.current.useInsertionEffect(e, t)
}
;
F.useLayoutEffect = function(e, t) {
    return ye.current.useLayoutEffect(e, t)
}
;
F.useMemo = function(e, t) {
    return ye.current.useMemo(e, t)
}
;
F.useReducer = function(e, t, n) {
    return ye.current.useReducer(e, t, n)
}
;
F.useRef = function(e) {
    return ye.current.useRef(e)
}
;
F.useState = function(e) {
    return ye.current.useState(e)
}
;
F.useSyncExternalStore = function(e, t, n) {
    return ye.current.useSyncExternalStore(e, t, n)
}
;
F.useTransition = function() {
    return ye.current.useTransition()
}
;
F.version = "18.2.0";
Lc.exports = F;
var P = Lc.exports;
const Q0 = _c(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K0 = P
  , G0 = Symbol.for("react.element")
  , Z0 = Symbol.for("react.fragment")
  , Y0 = Object.prototype.hasOwnProperty
  , q0 = K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , X0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Dc(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Y0.call(t, r) && !X0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: G0,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: q0.current
    }
}
yi.Fragment = Z0;
yi.jsx = Dc;
yi.jsxs = Dc;
Mc.exports = yi;
var c = Mc.exports
  , Cs = {}
  , $c = {
    exports: {}
}
  , Ae = {}
  , Bc = {
    exports: {}
}
  , Hc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, A) {
        var R = E.length;
        E.push(A);
        e: for (; 0 < R; ) {
            var z = R - 1 >>> 1
              , b = E[z];
            if (0 < o(b, A))
                E[z] = A,
                E[R] = b,
                R = z;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var A = E[0]
          , R = E.pop();
        if (R !== A) {
            E[0] = R;
            e: for (var z = 0, b = E.length, Dt = b >>> 1; z < Dt; ) {
                var qe = 2 * (z + 1) - 1
                  , fn = E[qe]
                  , je = qe + 1
                  , $t = E[je];
                if (0 > o(fn, R))
                    je < b && 0 > o($t, fn) ? (E[z] = $t,
                    E[je] = R,
                    z = je) : (E[z] = fn,
                    E[qe] = R,
                    z = qe);
                else if (je < b && 0 > o($t, R))
                    E[z] = $t,
                    E[je] = R,
                    z = je;
                else
                    break e
            }
        }
        return A
    }
    function o(E, A) {
        var R = E.sortIndex - A.sortIndex;
        return R !== 0 ? R : E.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , d = 1
      , p = null
      , h = 3
      , y = !1
      , v = !1
      , w = !1
      , _ = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(E) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= E)
                r(u),
                A.sortIndex = A.expirationTime,
                t(a, A);
            else
                break;
            A = n(u)
        }
    }
    function x(E) {
        if (w = !1,
        m(E),
        !v)
            if (n(a) !== null)
                v = !0,
                Fe(S);
            else {
                var A = n(u);
                A !== null && Ye(x, A.startTime - E)
            }
    }
    function S(E, A) {
        v = !1,
        w && (w = !1,
        g(C),
        C = -1),
        y = !0;
        var R = h;
        try {
            for (m(A),
            p = n(a); p !== null && (!(p.expirationTime > A) || E && !Z()); ) {
                var z = p.callback;
                if (typeof z == "function") {
                    p.callback = null,
                    h = p.priorityLevel;
                    var b = z(p.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof b == "function" ? p.callback = b : p === n(a) && r(a),
                    m(A)
                } else
                    r(a);
                p = n(a)
            }
            if (p !== null)
                var Dt = !0;
            else {
                var qe = n(u);
                qe !== null && Ye(x, qe.startTime - A),
                Dt = !1
            }
            return Dt
        } finally {
            p = null,
            h = R,
            y = !1
        }
    }
    var j = !1
      , T = null
      , C = -1
      , V = 5
      , L = -1;
    function Z() {
        return !(e.unstable_now() - L < V)
    }
    function xe() {
        if (T !== null) {
            var E = e.unstable_now();
            L = E;
            var A = !0;
            try {
                A = T(!0, E)
            } finally {
                A ? we() : (j = !1,
                T = null)
            }
        } else
            j = !1
    }
    var we;
    if (typeof f == "function")
        we = function() {
            f(xe)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Y = new MessageChannel
          , q = Y.port2;
        Y.port1.onmessage = xe,
        we = function() {
            q.postMessage(null)
        }
    } else
        we = function() {
            _(xe, 0)
        }
        ;
    function Fe(E) {
        T = E,
        j || (j = !0,
        we())
    }
    function Ye(E, A) {
        C = _(function() {
            E(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || y || (v = !0,
        Fe(S))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(E) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = h
        }
        var R = h;
        h = A;
        try {
            return E()
        } finally {
            h = R
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, A) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var R = h;
        h = E;
        try {
            return A()
        } finally {
            h = R
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, A, R) {
        var z = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? z + R : z) : R = z,
        E) {
        case 1:
            var b = -1;
            break;
        case 2:
            b = 250;
            break;
        case 5:
            b = 1073741823;
            break;
        case 4:
            b = 1e4;
            break;
        default:
            b = 5e3
        }
        return b = R + b,
        E = {
            id: d++,
            callback: A,
            priorityLevel: E,
            startTime: R,
            expirationTime: b,
            sortIndex: -1
        },
        R > z ? (E.sortIndex = R,
        t(u, E),
        n(a) === null && E === n(u) && (w ? (g(C),
        C = -1) : w = !0,
        Ye(x, R - z))) : (E.sortIndex = b,
        t(a, E),
        v || y || (v = !0,
        Fe(S))),
        E
    }
    ,
    e.unstable_shouldYield = Z,
    e.unstable_wrapCallback = function(E) {
        var A = h;
        return function() {
            var R = h;
            h = A;
            try {
                return E.apply(this, arguments)
            } finally {
                h = R
            }
        }
    }
}
)(Hc);
Bc.exports = Hc;
var J0 = Bc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc = P
  , ze = J0;
function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Uc = new Set
  , wr = {};
function sn(e, t) {
    An(e, t),
    An(e + "Capture", t)
}
function An(e, t) {
    for (wr[e] = t,
    e = 0; e < t.length; e++)
        Uc.add(t[e])
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ps = Object.prototype.hasOwnProperty
  , ep = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ga = {}
  , Za = {};
function tp(e) {
    return Ps.call(Za, e) ? !0 : Ps.call(Ga, e) ? !1 : ep.test(e) ? Za[e] = !0 : (Ga[e] = !0,
    !1)
}
function np(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function rp(e, t, n, r) {
    if (t === null || typeof t > "u" || np(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ve(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    se[e] = new ve(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    se[t] = new ve(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    se[e] = new ve(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    se[e] = new ve(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    se[e] = new ve(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    se[e] = new ve(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    se[e] = new ve(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    se[e] = new ve(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    se[e] = new ve(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Vl = /[\-:]([a-z])/g;
function Al(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Vl, Al);
    se[t] = new ve(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Vl, Al);
    se[t] = new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Vl, Al);
    se[t] = new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    se[e] = new ve(e,1,!1,e.toLowerCase(),null,!1,!1)
});
se.xlinkHref = new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    se[e] = new ve(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Rl(e, t, n, r) {
    var o = se.hasOwnProperty(t) ? se[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rp(t, n, o, r) && (n = null),
    r || o === null ? tp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ht = bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , no = Symbol.for("react.element")
  , hn = Symbol.for("react.portal")
  , mn = Symbol.for("react.fragment")
  , Fl = Symbol.for("react.strict_mode")
  , Ts = Symbol.for("react.profiler")
  , Wc = Symbol.for("react.provider")
  , Qc = Symbol.for("react.context")
  , Ol = Symbol.for("react.forward_ref")
  , js = Symbol.for("react.suspense")
  , Es = Symbol.for("react.suspense_list")
  , Il = Symbol.for("react.memo")
  , yt = Symbol.for("react.lazy")
  , Kc = Symbol.for("react.offscreen")
  , Ya = Symbol.iterator;
function Zn(e) {
    return e === null || typeof e != "object" ? null : (e = Ya && e[Ya] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var K = Object.assign, Ui;
function or(e) {
    if (Ui === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ui = t && t[1] || ""
        }
    return `
` + Ui + e
}
var Wi = !1;
function Qi(e, t) {
    if (!e || Wi)
        return "";
    Wi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Wi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? or(e) : ""
}
function op(e) {
    switch (e.tag) {
    case 5:
        return or(e.type);
    case 16:
        return or("Lazy");
    case 13:
        return or("Suspense");
    case 19:
        return or("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Qi(e.type, !1),
        e;
    case 11:
        return e = Qi(e.type.render, !1),
        e;
    case 1:
        return e = Qi(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ns(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case mn:
        return "Fragment";
    case hn:
        return "Portal";
    case Ts:
        return "Profiler";
    case Fl:
        return "StrictMode";
    case js:
        return "Suspense";
    case Es:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Qc:
            return (e.displayName || "Context") + ".Consumer";
        case Wc:
            return (e._context.displayName || "Context") + ".Provider";
        case Ol:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Il:
            return t = e.displayName || null,
            t !== null ? t : Ns(e.type) || "Memo";
        case yt:
            t = e._payload,
            e = e._init;
            try {
                return Ns(e(t))
            } catch {}
        }
    return null
}
function ip(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ns(t);
    case 8:
        return t === Fl ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Vt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Gc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function sp(e) {
    var t = Gc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ro(e) {
    e._valueTracker || (e._valueTracker = sp(e))
}
function Zc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Gc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Do(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function _s(e, t) {
    var n = t.checked;
    return K({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function qa(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Vt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Yc(e, t) {
    t = t.checked,
    t != null && Rl(e, "checked", t, !1)
}
function Ms(e, t) {
    Yc(e, t);
    var n = Vt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ls(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ls(e, t.type, Vt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Xa(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ls(e, t, n) {
    (t !== "number" || Do(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ir = Array.isArray;
function En(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Vt(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function zs(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(k(91));
    return K({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ja(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(k(92));
            if (ir(n)) {
                if (1 < n.length)
                    throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Vt(n)
    }
}
function qc(e, t) {
    var n = Vt(t.value)
      , r = Vt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function eu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Xc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Vs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var oo, Jc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (oo = oo || document.createElement("div"),
        oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = oo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Sr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ur).forEach(function(e) {
    lp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ur[t] = ur[e]
    })
});
function ed(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ur.hasOwnProperty(e) && ur[e] ? ("" + t).trim() : t + "px"
}
function td(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = ed(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var ap = K({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function As(e, t) {
    if (t) {
        if (ap[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(k(62))
    }
}
function Rs(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Fs = null;
function Dl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Os = null
  , Nn = null
  , _n = null;
function tu(e) {
    if (e = Qr(e)) {
        if (typeof Os != "function")
            throw Error(k(280));
        var t = e.stateNode;
        t && (t = ki(t),
        Os(e.stateNode, e.type, t))
    }
}
function nd(e) {
    Nn ? _n ? _n.push(e) : _n = [e] : Nn = e
}
function rd() {
    if (Nn) {
        var e = Nn
          , t = _n;
        if (_n = Nn = null,
        tu(e),
        t)
            for (e = 0; e < t.length; e++)
                tu(t[e])
    }
}
function od(e, t) {
    return e(t)
}
function id() {}
var Ki = !1;
function sd(e, t, n) {
    if (Ki)
        return e(t, n);
    Ki = !0;
    try {
        return od(e, t, n)
    } finally {
        Ki = !1,
        (Nn !== null || _n !== null) && (id(),
        rd())
    }
}
function kr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ki(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(k(231, t, typeof n));
    return n
}
var Is = !1;
if (ut)
    try {
        var Yn = {};
        Object.defineProperty(Yn, "passive", {
            get: function() {
                Is = !0
            }
        }),
        window.addEventListener("test", Yn, Yn),
        window.removeEventListener("test", Yn, Yn)
    } catch {
        Is = !1
    }
function up(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var cr = !1
  , $o = null
  , Bo = !1
  , Ds = null
  , cp = {
    onError: function(e) {
        cr = !0,
        $o = e
    }
};
function dp(e, t, n, r, o, i, s, l, a) {
    cr = !1,
    $o = null,
    up.apply(cp, arguments)
}
function fp(e, t, n, r, o, i, s, l, a) {
    if (dp.apply(this, arguments),
    cr) {
        if (cr) {
            var u = $o;
            cr = !1,
            $o = null
        } else
            throw Error(k(198));
        Bo || (Bo = !0,
        Ds = u)
    }
}
function ln(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ld(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function nu(e) {
    if (ln(e) !== e)
        throw Error(k(188))
}
function pp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ln(e),
        t === null)
            throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return nu(o),
                    e;
                if (i === r)
                    return nu(o),
                    t;
                i = i.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(k(189))
            }
        }
        if (n.alternate !== r)
            throw Error(k(190))
    }
    if (n.tag !== 3)
        throw Error(k(188));
    return n.stateNode.current === n ? e : t
}
function ad(e) {
    return e = pp(e),
    e !== null ? ud(e) : null
}
function ud(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ud(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var cd = ze.unstable_scheduleCallback
  , ru = ze.unstable_cancelCallback
  , hp = ze.unstable_shouldYield
  , mp = ze.unstable_requestPaint
  , X = ze.unstable_now
  , gp = ze.unstable_getCurrentPriorityLevel
  , $l = ze.unstable_ImmediatePriority
  , dd = ze.unstable_UserBlockingPriority
  , Ho = ze.unstable_NormalPriority
  , yp = ze.unstable_LowPriority
  , fd = ze.unstable_IdlePriority
  , vi = null
  , tt = null;
function vp(e) {
    if (tt && typeof tt.onCommitFiberRoot == "function")
        try {
            tt.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : Sp
  , xp = Math.log
  , wp = Math.LN2;
function Sp(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (xp(e) / wp | 0) | 0
}
var io = 64
  , so = 4194304;
function sr(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function bo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = sr(l) : (i &= s,
        i !== 0 && (r = sr(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = sr(s) : i !== 0 && (r = sr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ke(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function kp(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
        return -1
    }
}
function Cp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - Ke(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = kp(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function $s(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function pd() {
    var e = io;
    return io <<= 1,
    !(io & 4194240) && (io = 64),
    e
}
function Gi(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ur(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ke(t),
    e[t] = n
}
function Pp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Ke(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Bl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ke(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var D = 0;
function hd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var md, Hl, gd, yd, vd, Bs = !1, lo = [], Pt = null, Tt = null, jt = null, Cr = new Map, Pr = new Map, xt = [], Tp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ou(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Pt = null;
        break;
    case "dragenter":
    case "dragleave":
        Tt = null;
        break;
    case "mouseover":
    case "mouseout":
        jt = null;
        break;
    case "pointerover":
    case "pointerout":
        Cr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Pr.delete(t.pointerId)
    }
}
function qn(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Qr(t),
    t !== null && Hl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function jp(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Pt = qn(Pt, e, t, n, r, o),
        !0;
    case "dragenter":
        return Tt = qn(Tt, e, t, n, r, o),
        !0;
    case "mouseover":
        return jt = qn(jt, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Cr.set(i, qn(Cr.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Pr.set(i, qn(Pr.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function xd(e) {
    var t = Wt(e.target);
    if (t !== null) {
        var n = ln(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ld(n),
                t !== null) {
                    e.blockedOn = t,
                    vd(e.priority, function() {
                        gd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function To(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Hs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Fs = r,
            n.target.dispatchEvent(r),
            Fs = null
        } else
            return t = Qr(n),
            t !== null && Hl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function iu(e, t, n) {
    To(e) && n.delete(t)
}
function Ep() {
    Bs = !1,
    Pt !== null && To(Pt) && (Pt = null),
    Tt !== null && To(Tt) && (Tt = null),
    jt !== null && To(jt) && (jt = null),
    Cr.forEach(iu),
    Pr.forEach(iu)
}
function Xn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Bs || (Bs = !0,
    ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Ep)))
}
function Tr(e) {
    function t(o) {
        return Xn(o, e)
    }
    if (0 < lo.length) {
        Xn(lo[0], e);
        for (var n = 1; n < lo.length; n++) {
            var r = lo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Pt !== null && Xn(Pt, e),
    Tt !== null && Xn(Tt, e),
    jt !== null && Xn(jt, e),
    Cr.forEach(t),
    Pr.forEach(t),
    n = 0; n < xt.length; n++)
        r = xt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < xt.length && (n = xt[0],
    n.blockedOn === null); )
        xd(n),
        n.blockedOn === null && xt.shift()
}
var Mn = ht.ReactCurrentBatchConfig
  , Uo = !0;
function Np(e, t, n, r) {
    var o = D
      , i = Mn.transition;
    Mn.transition = null;
    try {
        D = 1,
        bl(e, t, n, r)
    } finally {
        D = o,
        Mn.transition = i
    }
}
function _p(e, t, n, r) {
    var o = D
      , i = Mn.transition;
    Mn.transition = null;
    try {
        D = 4,
        bl(e, t, n, r)
    } finally {
        D = o,
        Mn.transition = i
    }
}
function bl(e, t, n, r) {
    if (Uo) {
        var o = Hs(e, t, n, r);
        if (o === null)
            os(e, t, r, Wo, n),
            ou(e, r);
        else if (jp(o, e, t, n, r))
            r.stopPropagation();
        else if (ou(e, r),
        t & 4 && -1 < Tp.indexOf(e)) {
            for (; o !== null; ) {
                var i = Qr(o);
                if (i !== null && md(i),
                i = Hs(e, t, n, r),
                i === null && os(e, t, r, Wo, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            os(e, t, r, null, n)
    }
}
var Wo = null;
function Hs(e, t, n, r) {
    if (Wo = null,
    e = Dl(r),
    e = Wt(e),
    e !== null)
        if (t = ln(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ld(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Wo = e,
    null
}
function wd(e) {
    switch (e) {
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
        switch (gp()) {
        case $l:
            return 1;
        case dd:
            return 4;
        case Ho:
        case yp:
            return 16;
        case fd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var kt = null
  , Ul = null
  , jo = null;
function Sd() {
    if (jo)
        return jo;
    var e, t = Ul, n = t.length, r, o = "value"in kt ? kt.value : kt.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return jo = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Eo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ao() {
    return !0
}
function su() {
    return !1
}
function Re(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ao : su,
        this.isPropagationStopped = su,
        this
    }
    return K(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ao)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ao)
        },
        persist: function() {},
        isPersistent: ao
    }),
    t
}
var Un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Wl = Re(Un), Wr = K({}, Un, {
    view: 0,
    detail: 0
}), Mp = Re(Wr), Zi, Yi, Jn, xi = K({}, Wr, {
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
    getModifierState: Ql,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (Zi = e.screenX - Jn.screenX,
        Yi = e.screenY - Jn.screenY) : Yi = Zi = 0,
        Jn = e),
        Zi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Yi
    }
}), lu = Re(xi), Lp = K({}, xi, {
    dataTransfer: 0
}), zp = Re(Lp), Vp = K({}, Wr, {
    relatedTarget: 0
}), qi = Re(Vp), Ap = K({}, Un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Rp = Re(Ap), Fp = K({}, Un, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Op = Re(Fp), Ip = K({}, Un, {
    data: 0
}), au = Re(Ip), Dp = {
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
}, $p = {
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
}, Bp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Hp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Bp[e]) ? !!t[e] : !1
}
function Ql() {
    return Hp
}
var bp = K({}, Wr, {
    key: function(e) {
        if (e.key) {
            var t = Dp[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Eo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $p[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ql,
    charCode: function(e) {
        return e.type === "keypress" ? Eo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Up = Re(bp)
  , Wp = K({}, xi, {
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
})
  , uu = Re(Wp)
  , Qp = K({}, Wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ql
})
  , Kp = Re(Qp)
  , Gp = K({}, Un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Zp = Re(Gp)
  , Yp = K({}, xi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , qp = Re(Yp)
  , Xp = [9, 13, 27, 32]
  , Kl = ut && "CompositionEvent"in window
  , dr = null;
ut && "documentMode"in document && (dr = document.documentMode);
var Jp = ut && "TextEvent"in window && !dr
  , kd = ut && (!Kl || dr && 8 < dr && 11 >= dr)
  , cu = String.fromCharCode(32)
  , du = !1;
function Cd(e, t) {
    switch (e) {
    case "keyup":
        return Xp.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Pd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var gn = !1;
function eh(e, t) {
    switch (e) {
    case "compositionend":
        return Pd(t);
    case "keypress":
        return t.which !== 32 ? null : (du = !0,
        cu);
    case "textInput":
        return e = t.data,
        e === cu && du ? null : e;
    default:
        return null
    }
}
function th(e, t) {
    if (gn)
        return e === "compositionend" || !Kl && Cd(e, t) ? (e = Sd(),
        jo = Ul = kt = null,
        gn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return kd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var nh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nh[e.type] : t === "textarea"
}
function Td(e, t, n, r) {
    nd(r),
    t = Qo(t, "onChange"),
    0 < t.length && (n = new Wl("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var fr = null
  , jr = null;
function rh(e) {
    Fd(e, 0)
}
function wi(e) {
    var t = xn(e);
    if (Zc(t))
        return e
}
function oh(e, t) {
    if (e === "change")
        return t
}
var jd = !1;
if (ut) {
    var Xi;
    if (ut) {
        var Ji = "oninput"in document;
        if (!Ji) {
            var pu = document.createElement("div");
            pu.setAttribute("oninput", "return;"),
            Ji = typeof pu.oninput == "function"
        }
        Xi = Ji
    } else
        Xi = !1;
    jd = Xi && (!document.documentMode || 9 < document.documentMode)
}
function hu() {
    fr && (fr.detachEvent("onpropertychange", Ed),
    jr = fr = null)
}
function Ed(e) {
    if (e.propertyName === "value" && wi(jr)) {
        var t = [];
        Td(t, jr, e, Dl(e)),
        sd(rh, t)
    }
}
function ih(e, t, n) {
    e === "focusin" ? (hu(),
    fr = t,
    jr = n,
    fr.attachEvent("onpropertychange", Ed)) : e === "focusout" && hu()
}
function sh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return wi(jr)
}
function lh(e, t) {
    if (e === "click")
        return wi(t)
}
function ah(e, t) {
    if (e === "input" || e === "change")
        return wi(t)
}
function uh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ze = typeof Object.is == "function" ? Object.is : uh;
function Er(e, t) {
    if (Ze(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ps.call(t, o) || !Ze(e[o], t[o]))
            return !1
    }
    return !0
}
function mu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function gu(e, t) {
    var n = mu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = mu(n)
    }
}
function Nd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function _d() {
    for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Do(e.document)
    }
    return t
}
function Gl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function ch(e) {
    var t = _d()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Gl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = gu(n, i);
                var s = gu(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var dh = ut && "documentMode"in document && 11 >= document.documentMode
  , yn = null
  , bs = null
  , pr = null
  , Us = !1;
function yu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Us || yn == null || yn !== Do(r) || (r = yn,
    "selectionStart"in r && Gl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    pr && Er(pr, r) || (pr = r,
    r = Qo(bs, "onSelect"),
    0 < r.length && (t = new Wl("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yn)))
}
function uo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var vn = {
    animationend: uo("Animation", "AnimationEnd"),
    animationiteration: uo("Animation", "AnimationIteration"),
    animationstart: uo("Animation", "AnimationStart"),
    transitionend: uo("Transition", "TransitionEnd")
}
  , es = {}
  , Md = {};
ut && (Md = document.createElement("div").style,
"AnimationEvent"in window || (delete vn.animationend.animation,
delete vn.animationiteration.animation,
delete vn.animationstart.animation),
"TransitionEvent"in window || delete vn.transitionend.transition);
function Si(e) {
    if (es[e])
        return es[e];
    if (!vn[e])
        return e;
    var t = vn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Md)
            return es[e] = t[n];
    return e
}
var Ld = Si("animationend")
  , zd = Si("animationiteration")
  , Vd = Si("animationstart")
  , Ad = Si("transitionend")
  , Rd = new Map
  , vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rt(e, t) {
    Rd.set(e, t),
    sn(t, [e])
}
for (var ts = 0; ts < vu.length; ts++) {
    var ns = vu[ts]
      , fh = ns.toLowerCase()
      , ph = ns[0].toUpperCase() + ns.slice(1);
    Rt(fh, "on" + ph)
}
Rt(Ld, "onAnimationEnd");
Rt(zd, "onAnimationIteration");
Rt(Vd, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Ad, "onTransitionEnd");
An("onMouseEnter", ["mouseout", "mouseover"]);
An("onMouseLeave", ["mouseout", "mouseover"]);
An("onPointerEnter", ["pointerout", "pointerover"]);
An("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , hh = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function xu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    fp(r, t, void 0, e),
    e.currentTarget = null
}
function Fd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    xu(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    xu(o, l, u),
                    i = a
                }
        }
    }
    if (Bo)
        throw e = Ds,
        Bo = !1,
        Ds = null,
        e
}
function B(e, t) {
    var n = t[Zs];
    n === void 0 && (n = t[Zs] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Od(t, e, 2, !1),
    n.add(r))
}
function rs(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Od(n, e, r, t)
}
var co = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
    if (!e[co]) {
        e[co] = !0,
        Uc.forEach(function(n) {
            n !== "selectionchange" && (hh.has(n) || rs(n, !1, e),
            rs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[co] || (t[co] = !0,
        rs("selectionchange", !1, t))
    }
}
function Od(e, t, n, r) {
    switch (wd(t)) {
    case 1:
        var o = Np;
        break;
    case 4:
        o = _p;
        break;
    default:
        o = bl
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Is || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function os(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Wt(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    sd(function() {
        var u = i
          , d = Dl(n)
          , p = [];
        e: {
            var h = Rd.get(e);
            if (h !== void 0) {
                var y = Wl
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Eo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Up;
                    break;
                case "focusin":
                    v = "focus",
                    y = qi;
                    break;
                case "focusout":
                    v = "blur",
                    y = qi;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = qi;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = lu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = zp;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Kp;
                    break;
                case Ld:
                case zd:
                case Vd:
                    y = Rp;
                    break;
                case Ad:
                    y = Zp;
                    break;
                case "scroll":
                    y = Mp;
                    break;
                case "wheel":
                    y = qp;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Op;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = uu
                }
                var w = (t & 4) !== 0
                  , _ = !w && e === "scroll"
                  , g = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var f = u, m; f !== null; ) {
                    m = f;
                    var x = m.stateNode;
                    if (m.tag === 5 && x !== null && (m = x,
                    g !== null && (x = kr(f, g),
                    x != null && w.push(_r(f, x, m)))),
                    _)
                        break;
                    f = f.return
                }
                0 < w.length && (h = new y(h,v,null,n,d),
                p.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                h && n !== Fs && (v = n.relatedTarget || n.fromElement) && (Wt(v) || v[ct]))
                    break e;
                if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                y ? (v = n.relatedTarget || n.toElement,
                y = u,
                v = v ? Wt(v) : null,
                v !== null && (_ = ln(v),
                v !== _ || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null,
                v = u),
                y !== v)) {
                    if (w = lu,
                    x = "onMouseLeave",
                    g = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = uu,
                    x = "onPointerLeave",
                    g = "onPointerEnter",
                    f = "pointer"),
                    _ = y == null ? h : xn(y),
                    m = v == null ? h : xn(v),
                    h = new w(x,f + "leave",y,n,d),
                    h.target = _,
                    h.relatedTarget = m,
                    x = null,
                    Wt(d) === u && (w = new w(g,f + "enter",v,n,d),
                    w.target = m,
                    w.relatedTarget = _,
                    x = w),
                    _ = x,
                    y && v)
                        t: {
                            for (w = y,
                            g = v,
                            f = 0,
                            m = w; m; m = pn(m))
                                f++;
                            for (m = 0,
                            x = g; x; x = pn(x))
                                m++;
                            for (; 0 < f - m; )
                                w = pn(w),
                                f--;
                            for (; 0 < m - f; )
                                g = pn(g),
                                m--;
                            for (; f--; ) {
                                if (w === g || g !== null && w === g.alternate)
                                    break t;
                                w = pn(w),
                                g = pn(g)
                            }
                            w = null
                        }
                    else
                        w = null;
                    y !== null && wu(p, h, y, w, !1),
                    v !== null && _ !== null && wu(p, _, v, w, !0)
                }
            }
            e: {
                if (h = u ? xn(u) : window,
                y = h.nodeName && h.nodeName.toLowerCase(),
                y === "select" || y === "input" && h.type === "file")
                    var S = oh;
                else if (fu(h))
                    if (jd)
                        S = ah;
                    else {
                        S = sh;
                        var j = ih
                    }
                else
                    (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = lh);
                if (S && (S = S(e, u))) {
                    Td(p, S, n, d);
                    break e
                }
                j && j(e, h, u),
                e === "focusout" && (j = h._wrapperState) && j.controlled && h.type === "number" && Ls(h, "number", h.value)
            }
            switch (j = u ? xn(u) : window,
            e) {
            case "focusin":
                (fu(j) || j.contentEditable === "true") && (yn = j,
                bs = u,
                pr = null);
                break;
            case "focusout":
                pr = bs = yn = null;
                break;
            case "mousedown":
                Us = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Us = !1,
                yu(p, n, d);
                break;
            case "selectionchange":
                if (dh)
                    break;
            case "keydown":
            case "keyup":
                yu(p, n, d)
            }
            var T;
            if (Kl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                gn ? Cd(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (kd && n.locale !== "ko" && (gn || C !== "onCompositionStart" ? C === "onCompositionEnd" && gn && (T = Sd()) : (kt = d,
            Ul = "value"in kt ? kt.value : kt.textContent,
            gn = !0)),
            j = Qo(u, C),
            0 < j.length && (C = new au(C,e,null,n,d),
            p.push({
                event: C,
                listeners: j
            }),
            T ? C.data = T : (T = Pd(n),
            T !== null && (C.data = T)))),
            (T = Jp ? eh(e, n) : th(e, n)) && (u = Qo(u, "onBeforeInput"),
            0 < u.length && (d = new au("onBeforeInput","beforeinput",null,n,d),
            p.push({
                event: d,
                listeners: u
            }),
            d.data = T))
        }
        Fd(p, t)
    })
}
function _r(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Qo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = kr(e, n),
        i != null && r.unshift(_r(e, i, o)),
        i = kr(e, t),
        i != null && r.push(_r(e, i, o))),
        e = e.return
    }
    return r
}
function pn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function wu(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = kr(n, i),
        a != null && s.unshift(_r(n, a, l))) : o || (a = kr(n, i),
        a != null && s.push(_r(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var mh = /\r\n?/g
  , gh = /\u0000|\uFFFD/g;
function Su(e) {
    return (typeof e == "string" ? e : "" + e).replace(mh, `
`).replace(gh, "")
}
function fo(e, t, n) {
    if (t = Su(t),
    Su(e) !== t && n)
        throw Error(k(425))
}
function Ko() {}
var Ws = null
  , Qs = null;
function Ks(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Gs = typeof setTimeout == "function" ? setTimeout : void 0
  , yh = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ku = typeof Promise == "function" ? Promise : void 0
  , vh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ku < "u" ? function(e) {
    return ku.resolve(null).then(e).catch(xh)
}
: Gs;
function xh(e) {
    setTimeout(function() {
        throw e
    })
}
function is(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Tr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Tr(t)
}
function Et(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Cu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Wn = Math.random().toString(36).slice(2)
  , et = "__reactFiber$" + Wn
  , Mr = "__reactProps$" + Wn
  , ct = "__reactContainer$" + Wn
  , Zs = "__reactEvents$" + Wn
  , wh = "__reactListeners$" + Wn
  , Sh = "__reactHandles$" + Wn;
function Wt(e) {
    var t = e[et];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[ct] || n[et]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Cu(e); e !== null; ) {
                    if (n = e[et])
                        return n;
                    e = Cu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Qr(e) {
    return e = e[et] || e[ct],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function xn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(k(33))
}
function ki(e) {
    return e[Mr] || null
}
var Ys = []
  , wn = -1;
function Ft(e) {
    return {
        current: e
    }
}
function H(e) {
    0 > wn || (e.current = Ys[wn],
    Ys[wn] = null,
    wn--)
}
function $(e, t) {
    wn++,
    Ys[wn] = e.current,
    e.current = t
}
var At = {}
  , de = Ft(At)
  , Ce = Ft(!1)
  , en = At;
function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Pe(e) {
    return e = e.childContextTypes,
    e != null
}
function Go() {
    H(Ce),
    H(de)
}
function Pu(e, t, n) {
    if (de.current !== At)
        throw Error(k(168));
    $(de, t),
    $(Ce, n)
}
function Id(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(k(108, ip(e) || "Unknown", o));
    return K({}, n, r)
}
function Zo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At,
    en = de.current,
    $(de, e),
    $(Ce, Ce.current),
    !0
}
function Tu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(k(169));
    n ? (e = Id(e, t, en),
    r.__reactInternalMemoizedMergedChildContext = e,
    H(Ce),
    H(de),
    $(de, e)) : H(Ce),
    $(Ce, n)
}
var it = null
  , Ci = !1
  , ss = !1;
function Dd(e) {
    it === null ? it = [e] : it.push(e)
}
function kh(e) {
    Ci = !0,
    Dd(e)
}
function Ot() {
    if (!ss && it !== null) {
        ss = !0;
        var e = 0
          , t = D;
        try {
            var n = it;
            for (D = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            it = null,
            Ci = !1
        } catch (o) {
            throw it !== null && (it = it.slice(e + 1)),
            cd($l, Ot),
            o
        } finally {
            D = t,
            ss = !1
        }
    }
    return null
}
var Sn = []
  , kn = 0
  , Yo = null
  , qo = 0
  , Oe = []
  , Ie = 0
  , tn = null
  , st = 1
  , lt = "";
function bt(e, t) {
    Sn[kn++] = qo,
    Sn[kn++] = Yo,
    Yo = e,
    qo = t
}
function $d(e, t, n) {
    Oe[Ie++] = st,
    Oe[Ie++] = lt,
    Oe[Ie++] = tn,
    tn = e;
    var r = st;
    e = lt;
    var o = 32 - Ke(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - Ke(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        st = 1 << 32 - Ke(t) + o | n << o | r,
        lt = i + e
    } else
        st = 1 << i | n << o | r,
        lt = e
}
function Zl(e) {
    e.return !== null && (bt(e, 1),
    $d(e, 1, 0))
}
function Yl(e) {
    for (; e === Yo; )
        Yo = Sn[--kn],
        Sn[kn] = null,
        qo = Sn[--kn],
        Sn[kn] = null;
    for (; e === tn; )
        tn = Oe[--Ie],
        Oe[Ie] = null,
        lt = Oe[--Ie],
        Oe[Ie] = null,
        st = Oe[--Ie],
        Oe[Ie] = null
}
var Le = null
  , _e = null
  , U = !1
  , Qe = null;
function Bd(e, t) {
    var n = De(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ju(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Le = e,
        _e = Et(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Le = e,
        _e = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = tn !== null ? {
            id: st,
            overflow: lt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = De(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Le = e,
        _e = null,
        !0) : !1;
    default:
        return !1
    }
}
function qs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Xs(e) {
    if (U) {
        var t = _e;
        if (t) {
            var n = t;
            if (!ju(e, t)) {
                if (qs(e))
                    throw Error(k(418));
                t = Et(n.nextSibling);
                var r = Le;
                t && ju(e, t) ? Bd(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                Le = e)
            }
        } else {
            if (qs(e))
                throw Error(k(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            Le = e
        }
    }
}
function Eu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Le = e
}
function po(e) {
    if (e !== Le)
        return !1;
    if (!U)
        return Eu(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ks(e.type, e.memoizedProps)),
    t && (t = _e)) {
        if (qs(e))
            throw Hd(),
            Error(k(418));
        for (; t; )
            Bd(e, t),
            t = Et(t.nextSibling)
    }
    if (Eu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(k(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            _e = Et(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            _e = null
        }
    } else
        _e = Le ? Et(e.stateNode.nextSibling) : null;
    return !0
}
function Hd() {
    for (var e = _e; e; )
        e = Et(e.nextSibling)
}
function Fn() {
    _e = Le = null,
    U = !1
}
function ql(e) {
    Qe === null ? Qe = [e] : Qe.push(e)
}
var Ch = ht.ReactCurrentBatchConfig;
function Ue(e, t) {
    if (e && e.defaultProps) {
        t = K({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Xo = Ft(null)
  , Jo = null
  , Cn = null
  , Xl = null;
function Jl() {
    Xl = Cn = Jo = null
}
function ea(e) {
    var t = Xo.current;
    H(Xo),
    e._currentValue = t
}
function Js(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Ln(e, t) {
    Jo = e,
    Xl = Cn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0),
    e.firstContext = null)
}
function Be(e) {
    var t = e._currentValue;
    if (Xl !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Cn === null) {
            if (Jo === null)
                throw Error(k(308));
            Cn = e,
            Jo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Cn = Cn.next = e;
    return t
}
var Qt = null;
function ta(e) {
    Qt === null ? Qt = [e] : Qt.push(e)
}
function bd(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    ta(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    dt(e, r)
}
function dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var vt = !1;
function na(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ud(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function at(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Nt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    I & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        dt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    ta(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    dt(e, n)
}
function No(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Bl(e, n)
    }
}
function Nu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ei(e, t, n, r) {
    var o = e.updateQueue;
    vt = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = a))
    }
    if (i !== null) {
        var p = o.baseState;
        s = 0,
        d = u = a = null,
        l = i;
        do {
            var h = l.lane
              , y = l.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , w = l;
                    switch (h = t,
                    y = n,
                    w.tag) {
                    case 1:
                        if (v = w.payload,
                        typeof v == "function") {
                            p = v.call(y, p, h);
                            break e
                        }
                        p = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = w.payload,
                        h = typeof v == "function" ? v.call(y, p, h) : v,
                        h == null)
                            break e;
                        p = K({}, p, h);
                        break e;
                    case 2:
                        vt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                h = o.effects,
                h === null ? o.effects = [l] : h.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: h,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = y,
                a = p) : d = d.next = y,
                s |= h;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                h = l,
                l = h.next,
                h.next = null,
                o.lastBaseUpdate = h,
                o.shared.pending = null
            }
        } while (1);
        if (d === null && (a = p),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        rn |= s,
        e.lanes = s,
        e.memoizedState = p
    }
}
function _u(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(k(191, o));
                o.call(r)
            }
        }
}
var Wd = new bc.Component().refs;
function el(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : K({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Pi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ln(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ge()
          , o = Mt(e)
          , i = at(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = Nt(e, i, o),
        t !== null && (Ge(t, e, o, r),
        No(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ge()
          , o = Mt(e)
          , i = at(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Nt(e, i, o),
        t !== null && (Ge(t, e, o, r),
        No(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ge()
          , r = Mt(e)
          , o = at(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Nt(e, o, r),
        t !== null && (Ge(t, e, r, n),
        No(t, e, r))
    }
};
function Mu(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, r) || !Er(o, i) : !0
}
function Qd(e, t, n) {
    var r = !1
      , o = At
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Be(i) : (o = Pe(t) ? en : de.current,
    r = t.contextTypes,
    i = (r = r != null) ? Rn(e, o) : At),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Pi,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Lu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pi.enqueueReplaceState(t, t.state, null)
}
function tl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = Wd,
    na(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Be(i) : (i = Pe(t) ? en : de.current,
    o.context = Rn(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (el(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Pi.enqueueReplaceState(o, o.state, null),
    ei(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function er(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(k(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(k(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                l === Wd && (l = o.refs = {}),
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(k(284));
        if (!n._owner)
            throw Error(k(290, e))
    }
    return e
}
function ho(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function zu(e) {
    var t = e._init;
    return t(e._payload)
}
function Kd(e) {
    function t(g, f) {
        if (e) {
            var m = g.deletions;
            m === null ? (g.deletions = [f],
            g.flags |= 16) : m.push(f)
        }
    }
    function n(g, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(g, f),
            f = f.sibling;
        return null
    }
    function r(g, f) {
        for (g = new Map; f !== null; )
            f.key !== null ? g.set(f.key, f) : g.set(f.index, f),
            f = f.sibling;
        return g
    }
    function o(g, f) {
        return g = Lt(g, f),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, f, m) {
        return g.index = m,
        e ? (m = g.alternate,
        m !== null ? (m = m.index,
        m < f ? (g.flags |= 2,
        f) : m) : (g.flags |= 2,
        f)) : (g.flags |= 1048576,
        f)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, f, m, x) {
        return f === null || f.tag !== 6 ? (f = ps(m, g.mode, x),
        f.return = g,
        f) : (f = o(f, m),
        f.return = g,
        f)
    }
    function a(g, f, m, x) {
        var S = m.type;
        return S === mn ? d(g, f, m.props.children, x, m.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === yt && zu(S) === f.type) ? (x = o(f, m.props),
        x.ref = er(g, f, m),
        x.return = g,
        x) : (x = Ao(m.type, m.key, m.props, null, g.mode, x),
        x.ref = er(g, f, m),
        x.return = g,
        x)
    }
    function u(g, f, m, x) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = hs(m, g.mode, x),
        f.return = g,
        f) : (f = o(f, m.children || []),
        f.return = g,
        f)
    }
    function d(g, f, m, x, S) {
        return f === null || f.tag !== 7 ? (f = qt(m, g.mode, x, S),
        f.return = g,
        f) : (f = o(f, m),
        f.return = g,
        f)
    }
    function p(g, f, m) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = ps("" + f, g.mode, m),
            f.return = g,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case no:
                return m = Ao(f.type, f.key, f.props, null, g.mode, m),
                m.ref = er(g, null, f),
                m.return = g,
                m;
            case hn:
                return f = hs(f, g.mode, m),
                f.return = g,
                f;
            case yt:
                var x = f._init;
                return p(g, x(f._payload), m)
            }
            if (ir(f) || Zn(f))
                return f = qt(f, g.mode, m, null),
                f.return = g,
                f;
            ho(g, f)
        }
        return null
    }
    function h(g, f, m, x) {
        var S = f !== null ? f.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return S !== null ? null : l(g, f, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case no:
                return m.key === S ? a(g, f, m, x) : null;
            case hn:
                return m.key === S ? u(g, f, m, x) : null;
            case yt:
                return S = m._init,
                h(g, f, S(m._payload), x)
            }
            if (ir(m) || Zn(m))
                return S !== null ? null : d(g, f, m, x, null);
            ho(g, m)
        }
        return null
    }
    function y(g, f, m, x, S) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return g = g.get(m) || null,
            l(f, g, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case no:
                return g = g.get(x.key === null ? m : x.key) || null,
                a(f, g, x, S);
            case hn:
                return g = g.get(x.key === null ? m : x.key) || null,
                u(f, g, x, S);
            case yt:
                var j = x._init;
                return y(g, f, m, j(x._payload), S)
            }
            if (ir(x) || Zn(x))
                return g = g.get(m) || null,
                d(f, g, x, S, null);
            ho(f, x)
        }
        return null
    }
    function v(g, f, m, x) {
        for (var S = null, j = null, T = f, C = f = 0, V = null; T !== null && C < m.length; C++) {
            T.index > C ? (V = T,
            T = null) : V = T.sibling;
            var L = h(g, T, m[C], x);
            if (L === null) {
                T === null && (T = V);
                break
            }
            e && T && L.alternate === null && t(g, T),
            f = i(L, f, C),
            j === null ? S = L : j.sibling = L,
            j = L,
            T = V
        }
        if (C === m.length)
            return n(g, T),
            U && bt(g, C),
            S;
        if (T === null) {
            for (; C < m.length; C++)
                T = p(g, m[C], x),
                T !== null && (f = i(T, f, C),
                j === null ? S = T : j.sibling = T,
                j = T);
            return U && bt(g, C),
            S
        }
        for (T = r(g, T); C < m.length; C++)
            V = y(T, g, C, m[C], x),
            V !== null && (e && V.alternate !== null && T.delete(V.key === null ? C : V.key),
            f = i(V, f, C),
            j === null ? S = V : j.sibling = V,
            j = V);
        return e && T.forEach(function(Z) {
            return t(g, Z)
        }),
        U && bt(g, C),
        S
    }
    function w(g, f, m, x) {
        var S = Zn(m);
        if (typeof S != "function")
            throw Error(k(150));
        if (m = S.call(m),
        m == null)
            throw Error(k(151));
        for (var j = S = null, T = f, C = f = 0, V = null, L = m.next(); T !== null && !L.done; C++,
        L = m.next()) {
            T.index > C ? (V = T,
            T = null) : V = T.sibling;
            var Z = h(g, T, L.value, x);
            if (Z === null) {
                T === null && (T = V);
                break
            }
            e && T && Z.alternate === null && t(g, T),
            f = i(Z, f, C),
            j === null ? S = Z : j.sibling = Z,
            j = Z,
            T = V
        }
        if (L.done)
            return n(g, T),
            U && bt(g, C),
            S;
        if (T === null) {
            for (; !L.done; C++,
            L = m.next())
                L = p(g, L.value, x),
                L !== null && (f = i(L, f, C),
                j === null ? S = L : j.sibling = L,
                j = L);
            return U && bt(g, C),
            S
        }
        for (T = r(g, T); !L.done; C++,
        L = m.next())
            L = y(T, g, C, L.value, x),
            L !== null && (e && L.alternate !== null && T.delete(L.key === null ? C : L.key),
            f = i(L, f, C),
            j === null ? S = L : j.sibling = L,
            j = L);
        return e && T.forEach(function(xe) {
            return t(g, xe)
        }),
        U && bt(g, C),
        S
    }
    function _(g, f, m, x) {
        if (typeof m == "object" && m !== null && m.type === mn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case no:
                e: {
                    for (var S = m.key, j = f; j !== null; ) {
                        if (j.key === S) {
                            if (S = m.type,
                            S === mn) {
                                if (j.tag === 7) {
                                    n(g, j.sibling),
                                    f = o(j, m.props.children),
                                    f.return = g,
                                    g = f;
                                    break e
                                }
                            } else if (j.elementType === S || typeof S == "object" && S !== null && S.$$typeof === yt && zu(S) === j.type) {
                                n(g, j.sibling),
                                f = o(j, m.props),
                                f.ref = er(g, j, m),
                                f.return = g,
                                g = f;
                                break e
                            }
                            n(g, j);
                            break
                        } else
                            t(g, j);
                        j = j.sibling
                    }
                    m.type === mn ? (f = qt(m.props.children, g.mode, x, m.key),
                    f.return = g,
                    g = f) : (x = Ao(m.type, m.key, m.props, null, g.mode, x),
                    x.ref = er(g, f, m),
                    x.return = g,
                    g = x)
                }
                return s(g);
            case hn:
                e: {
                    for (j = m.key; f !== null; ) {
                        if (f.key === j)
                            if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                                n(g, f.sibling),
                                f = o(f, m.children || []),
                                f.return = g,
                                g = f;
                                break e
                            } else {
                                n(g, f);
                                break
                            }
                        else
                            t(g, f);
                        f = f.sibling
                    }
                    f = hs(m, g.mode, x),
                    f.return = g,
                    g = f
                }
                return s(g);
            case yt:
                return j = m._init,
                _(g, f, j(m._payload), x)
            }
            if (ir(m))
                return v(g, f, m, x);
            if (Zn(m))
                return w(g, f, m, x);
            ho(g, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        f !== null && f.tag === 6 ? (n(g, f.sibling),
        f = o(f, m),
        f.return = g,
        g = f) : (n(g, f),
        f = ps(m, g.mode, x),
        f.return = g,
        g = f),
        s(g)) : n(g, f)
    }
    return _
}
var On = Kd(!0)
  , Gd = Kd(!1)
  , Kr = {}
  , nt = Ft(Kr)
  , Lr = Ft(Kr)
  , zr = Ft(Kr);
function Kt(e) {
    if (e === Kr)
        throw Error(k(174));
    return e
}
function ra(e, t) {
    switch ($(zr, t),
    $(Lr, e),
    $(nt, Kr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vs(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Vs(t, e)
    }
    H(nt),
    $(nt, t)
}
function In() {
    H(nt),
    H(Lr),
    H(zr)
}
function Zd(e) {
    Kt(zr.current);
    var t = Kt(nt.current)
      , n = Vs(t, e.type);
    t !== n && ($(Lr, e),
    $(nt, n))
}
function oa(e) {
    Lr.current === e && (H(nt),
    H(Lr))
}
var W = Ft(0);
function ti(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ls = [];
function ia() {
    for (var e = 0; e < ls.length; e++)
        ls[e]._workInProgressVersionPrimary = null;
    ls.length = 0
}
var _o = ht.ReactCurrentDispatcher
  , as = ht.ReactCurrentBatchConfig
  , nn = 0
  , Q = null
  , ee = null
  , ne = null
  , ni = !1
  , hr = !1
  , Vr = 0
  , Ph = 0;
function le() {
    throw Error(k(321))
}
function sa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n]))
            return !1;
    return !0
}
function la(e, t, n, r, o, i) {
    if (nn = i,
    Q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    _o.current = e === null || e.memoizedState === null ? Nh : _h,
    e = n(r, o),
    hr) {
        i = 0;
        do {
            if (hr = !1,
            Vr = 0,
            25 <= i)
                throw Error(k(301));
            i += 1,
            ne = ee = null,
            t.updateQueue = null,
            _o.current = Mh,
            e = n(r, o)
        } while (hr)
    }
    if (_o.current = ri,
    t = ee !== null && ee.next !== null,
    nn = 0,
    ne = ee = Q = null,
    ni = !1,
    t)
        throw Error(k(300));
    return e
}
function aa() {
    var e = Vr !== 0;
    return Vr = 0,
    e
}
function Je() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ne === null ? Q.memoizedState = ne = e : ne = ne.next = e,
    ne
}
function He() {
    if (ee === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ee.next;
    var t = ne === null ? Q.memoizedState : ne.next;
    if (t !== null)
        ne = t,
        ee = e;
    else {
        if (e === null)
            throw Error(k(310));
        ee = e,
        e = {
            memoizedState: ee.memoizedState,
            baseState: ee.baseState,
            baseQueue: ee.baseQueue,
            queue: ee.queue,
            next: null
        },
        ne === null ? Q.memoizedState = ne = e : ne = ne.next = e
    }
    return ne
}
function Ar(e, t) {
    return typeof t == "function" ? t(e) : t
}
function us(e) {
    var t = He()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = ee
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var d = u.lane;
            if ((nn & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = p,
                s = r) : a = a.next = p,
                Q.lanes |= d,
                rn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        Ze(r, t.memoizedState) || (ke = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            Q.lanes |= i,
            rn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function cs(e) {
    var t = He()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        Ze(i, t.memoizedState) || (ke = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Yd() {}
function qd(e, t) {
    var n = Q
      , r = He()
      , o = t()
      , i = !Ze(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    ke = !0),
    r = r.queue,
    ua(e1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ne !== null && ne.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Rr(9, Jd.bind(null, n, r, o, t), void 0, null),
        re === null)
            throw Error(k(349));
        nn & 30 || Xd(n, t, o)
    }
    return o
}
function Xd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Jd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    t1(t) && n1(e)
}
function e1(e, t, n) {
    return n(function() {
        t1(t) && n1(e)
    })
}
function t1(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n)
    } catch {
        return !0
    }
}
function n1(e) {
    var t = dt(e, 1);
    t !== null && Ge(t, e, 1, -1)
}
function Vu(e) {
    var t = Je();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Eh.bind(null, Q, e),
    [t.memoizedState, e]
}
function Rr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function r1() {
    return He().memoizedState
}
function Mo(e, t, n, r) {
    var o = Je();
    Q.flags |= e,
    o.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ti(e, t, n, r) {
    var o = He();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ee !== null) {
        var s = ee.memoizedState;
        if (i = s.destroy,
        r !== null && sa(r, s.deps)) {
            o.memoizedState = Rr(t, n, i, r);
            return
        }
    }
    Q.flags |= e,
    o.memoizedState = Rr(1 | t, n, i, r)
}
function Au(e, t) {
    return Mo(8390656, 8, e, t)
}
function ua(e, t) {
    return Ti(2048, 8, e, t)
}
function o1(e, t) {
    return Ti(4, 2, e, t)
}
function i1(e, t) {
    return Ti(4, 4, e, t)
}
function s1(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function l1(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ti(4, 4, s1.bind(null, t, e), n)
}
function ca() {}
function a1(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && sa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function u1(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && sa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function c1(e, t, n) {
    return nn & 21 ? (Ze(n, t) || (n = pd(),
    Q.lanes |= n,
    rn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ke = !0),
    e.memoizedState = n)
}
function Th(e, t) {
    var n = D;
    D = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = as.transition;
    as.transition = {};
    try {
        e(!1),
        t()
    } finally {
        D = n,
        as.transition = r
    }
}
function d1() {
    return He().memoizedState
}
function jh(e, t, n) {
    var r = Mt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    f1(e))
        p1(t, n);
    else if (n = bd(e, t, n, r),
    n !== null) {
        var o = ge();
        Ge(n, e, r, o),
        h1(n, t, r)
    }
}
function Eh(e, t, n) {
    var r = Mt(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (f1(e))
        p1(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                Ze(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    ta(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = bd(e, t, o, r),
        n !== null && (o = ge(),
        Ge(n, e, r, o),
        h1(n, t, r))
    }
}
function f1(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q
}
function p1(e, t) {
    hr = ni = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function h1(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Bl(e, n)
    }
}
var ri = {
    readContext: Be,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1
}
  , Nh = {
    readContext: Be,
    useCallback: function(e, t) {
        return Je().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Be,
    useEffect: Au,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Mo(4194308, 4, s1.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Mo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Mo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Je();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Je();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = jh.bind(null, Q, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Je();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Vu,
    useDebugValue: ca,
    useDeferredValue: function(e) {
        return Je().memoizedState = e
    },
    useTransition: function() {
        var e = Vu(!1)
          , t = e[0];
        return e = Th.bind(null, e[1]),
        Je().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Q
          , o = Je();
        if (U) {
            if (n === void 0)
                throw Error(k(407));
            n = n()
        } else {
            if (n = t(),
            re === null)
                throw Error(k(349));
            nn & 30 || Xd(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Au(e1.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Rr(9, Jd.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Je()
          , t = re.identifierPrefix;
        if (U) {
            var n = lt
              , r = st;
            n = (r & ~(1 << 32 - Ke(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Vr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Ph++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , _h = {
    readContext: Be,
    useCallback: a1,
    useContext: Be,
    useEffect: ua,
    useImperativeHandle: l1,
    useInsertionEffect: o1,
    useLayoutEffect: i1,
    useMemo: u1,
    useReducer: us,
    useRef: r1,
    useState: function() {
        return us(Ar)
    },
    useDebugValue: ca,
    useDeferredValue: function(e) {
        var t = He();
        return c1(t, ee.memoizedState, e)
    },
    useTransition: function() {
        var e = us(Ar)[0]
          , t = He().memoizedState;
        return [e, t]
    },
    useMutableSource: Yd,
    useSyncExternalStore: qd,
    useId: d1,
    unstable_isNewReconciler: !1
}
  , Mh = {
    readContext: Be,
    useCallback: a1,
    useContext: Be,
    useEffect: ua,
    useImperativeHandle: l1,
    useInsertionEffect: o1,
    useLayoutEffect: i1,
    useMemo: u1,
    useReducer: cs,
    useRef: r1,
    useState: function() {
        return cs(Ar)
    },
    useDebugValue: ca,
    useDeferredValue: function(e) {
        var t = He();
        return ee === null ? t.memoizedState = e : c1(t, ee.memoizedState, e)
    },
    useTransition: function() {
        var e = cs(Ar)[0]
          , t = He().memoizedState;
        return [e, t]
    },
    useMutableSource: Yd,
    useSyncExternalStore: qd,
    useId: d1,
    unstable_isNewReconciler: !1
};
function Dn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += op(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function ds(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function nl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Lh = typeof WeakMap == "function" ? WeakMap : Map;
function m1(e, t, n) {
    n = at(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ii || (ii = !0,
        fl = r),
        nl(e, t)
    }
    ,
    n
}
function g1(e, t, n) {
    n = at(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            nl(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        nl(e, t),
        typeof r != "function" && (_t === null ? _t = new Set([this]) : _t.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Ru(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Lh;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Wh.bind(null, e, t, n),
    t.then(e, e))
}
function Fu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ou(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1),
    t.tag = 2,
    Nt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var zh = ht.ReactCurrentOwner
  , ke = !1;
function pe(e, t, n, r) {
    t.child = e === null ? Gd(t, null, n, r) : On(t, e.child, n, r)
}
function Iu(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Ln(t, o),
    r = la(e, t, n, r, i, o),
    n = aa(),
    e !== null && !ke ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    ft(e, t, o)) : (U && n && Zl(t),
    t.flags |= 1,
    pe(e, t, r, o),
    t.child)
}
function Du(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !va(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        y1(e, t, i, r, o)) : (e = Ao(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Er,
        n(s, r) && e.ref === t.ref)
            return ft(e, t, o)
    }
    return t.flags |= 1,
    e = Lt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function y1(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Er(i, r) && e.ref === t.ref)
            if (ke = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (ke = !0);
            else
                return t.lanes = e.lanes,
                ft(e, t, o)
    }
    return rl(e, t, n, r, o)
}
function v1(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            $(Tn, Ne),
            Ne |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                $(Tn, Ne),
                Ne |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            $(Tn, Ne),
            Ne |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        $(Tn, Ne),
        Ne |= r;
    return pe(e, t, o, n),
    t.child
}
function x1(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function rl(e, t, n, r, o) {
    var i = Pe(n) ? en : de.current;
    return i = Rn(t, i),
    Ln(t, o),
    n = la(e, t, n, r, i, o),
    r = aa(),
    e !== null && !ke ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    ft(e, t, o)) : (U && r && Zl(t),
    t.flags |= 1,
    pe(e, t, n, o),
    t.child)
}
function $u(e, t, n, r, o) {
    if (Pe(n)) {
        var i = !0;
        Zo(t)
    } else
        i = !1;
    if (Ln(t, o),
    t.stateNode === null)
        Lo(e, t),
        Qd(t, n, r),
        tl(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Be(u) : (u = Pe(n) ? en : de.current,
        u = Rn(t, u));
        var d = n.getDerivedStateFromProps
          , p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Lu(t, s, r, u),
        vt = !1;
        var h = t.memoizedState;
        s.state = h,
        ei(t, r, s, o),
        a = t.memoizedState,
        l !== r || h !== a || Ce.current || vt ? (typeof d == "function" && (el(t, n, d, r),
        a = t.memoizedState),
        (l = vt || Mu(t, n, l, r, h, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Ud(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Ue(t.type, l),
        s.props = u,
        p = t.pendingProps,
        h = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Be(a) : (a = Pe(n) ? en : de.current,
        a = Rn(t, a));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || h !== a) && Lu(t, s, r, a),
        vt = !1,
        h = t.memoizedState,
        s.state = h,
        ei(t, r, s, o);
        var v = t.memoizedState;
        l !== p || h !== v || Ce.current || vt ? (typeof y == "function" && (el(t, n, y, r),
        v = t.memoizedState),
        (u = vt || Mu(t, n, u, r, h, v, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        s.props = r,
        s.state = v,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ol(e, t, n, r, i, o)
}
function ol(e, t, n, r, o, i) {
    x1(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Tu(t, n, !1),
        ft(e, t, i);
    r = t.stateNode,
    zh.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = On(t, e.child, null, i),
    t.child = On(t, null, l, i)) : pe(e, t, l, i),
    t.memoizedState = r.state,
    o && Tu(t, n, !0),
    t.child
}
function w1(e) {
    var t = e.stateNode;
    t.pendingContext ? Pu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pu(e, t.context, !1),
    ra(e, t.containerInfo)
}
function Bu(e, t, n, r, o) {
    return Fn(),
    ql(o),
    t.flags |= 256,
    pe(e, t, n, r),
    t.child
}
var il = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function sl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function S1(e, t, n) {
    var r = t.pendingProps, o = W.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    $(W, o & 1),
    e === null)
        return Xs(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Ni(s, r, 0, null),
        e = qt(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = sl(n),
        t.memoizedState = il,
        e) : da(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Vh(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Lt(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = Lt(l, i) : (i = qt(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? sl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = il,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Lt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function da(e, t) {
    return t = Ni({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function mo(e, t, n, r) {
    return r !== null && ql(r),
    On(t, e.child, null, n),
    e = da(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Vh(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ds(Error(k(422))),
        mo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Ni({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = qt(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && On(t, e.child, null, s),
        t.child.memoizedState = sl(s),
        t.memoizedState = il,
        i);
    if (!(t.mode & 1))
        return mo(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(k(419)),
        r = ds(i, r, void 0),
        mo(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    ke || l) {
        if (r = re,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            dt(e, o),
            Ge(r, e, o, -1))
        }
        return ya(),
        r = ds(Error(k(421))),
        mo(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Qh.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    _e = Et(o.nextSibling),
    Le = t,
    U = !0,
    Qe = null,
    e !== null && (Oe[Ie++] = st,
    Oe[Ie++] = lt,
    Oe[Ie++] = tn,
    st = e.id,
    lt = e.overflow,
    tn = t),
    t = da(t, r.children),
    t.flags |= 4096,
    t)
}
function Hu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Js(e.return, t, n)
}
function fs(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function k1(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (pe(e, t, r.children, n),
    r = W.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Hu(e, n, t);
                else if (e.tag === 19)
                    Hu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if ($(W, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ti(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            fs(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ti(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            fs(t, !0, n, null, i);
            break;
        case "together":
            fs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Lo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ft(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    rn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Lt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Lt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ah(e, t, n) {
    switch (t.tag) {
    case 3:
        w1(t),
        Fn();
        break;
    case 5:
        Zd(t);
        break;
    case 1:
        Pe(t.type) && Zo(t);
        break;
    case 4:
        ra(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        $(Xo, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? ($(W, W.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? S1(e, t, n) : ($(W, W.current & 1),
            e = ft(e, t, n),
            e !== null ? e.sibling : null);
        $(W, W.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return k1(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        $(W, W.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        v1(e, t, n)
    }
    return ft(e, t, n)
}
var C1, ll, P1, T1;
C1 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ll = function() {}
;
P1 = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Kt(nt.current);
        var i = null;
        switch (n) {
        case "input":
            o = _s(e, o),
            r = _s(e, r),
            i = [];
            break;
        case "select":
            o = K({}, o, {
                value: void 0
            }),
            r = K({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = zs(e, o),
            r = zs(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ko)
        }
        As(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (wr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (wr.hasOwnProperty(u) ? (a != null && u === "onScroll" && B("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
T1 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function tr(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Rh(e, t, n) {
    var r = t.pendingProps;
    switch (Yl(t),
    t.tag) {
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
        return ae(t),
        null;
    case 1:
        return Pe(t.type) && Go(),
        ae(t),
        null;
    case 3:
        return r = t.stateNode,
        In(),
        H(Ce),
        H(de),
        ia(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Qe !== null && (ml(Qe),
        Qe = null))),
        ll(e, t),
        ae(t),
        null;
    case 5:
        oa(t);
        var o = Kt(zr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            P1(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(k(166));
                return ae(t),
                null
            }
            if (e = Kt(nt.current),
            po(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[et] = t,
                r[Mr] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    B("cancel", r),
                    B("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    B("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < lr.length; o++)
                        B(lr[o], r);
                    break;
                case "source":
                    B("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    B("error", r),
                    B("load", r);
                    break;
                case "details":
                    B("toggle", r);
                    break;
                case "input":
                    qa(r, i),
                    B("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    B("invalid", r);
                    break;
                case "textarea":
                    Ja(r, i),
                    B("invalid", r)
                }
                As(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && fo(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && fo(r.textContent, l, e),
                        o = ["children", "" + l]) : wr.hasOwnProperty(s) && l != null && s === "onScroll" && B("scroll", r)
                    }
                switch (n) {
                case "input":
                    ro(r),
                    Xa(r, i, !0);
                    break;
                case "textarea":
                    ro(r),
                    eu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ko)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Xc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[et] = t,
                e[Mr] = r,
                C1(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Rs(n, r),
                    n) {
                    case "dialog":
                        B("cancel", e),
                        B("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        B("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < lr.length; o++)
                            B(lr[o], e);
                        o = r;
                        break;
                    case "source":
                        B("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        B("error", e),
                        B("load", e),
                        o = r;
                        break;
                    case "details":
                        B("toggle", e),
                        o = r;
                        break;
                    case "input":
                        qa(e, r),
                        o = _s(e, r),
                        B("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = K({}, r, {
                            value: void 0
                        }),
                        B("invalid", e);
                        break;
                    case "textarea":
                        Ja(e, r),
                        o = zs(e, r),
                        B("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    As(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? td(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Jc(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Sr(e, a) : typeof a == "number" && Sr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (wr.hasOwnProperty(i) ? a != null && i === "onScroll" && B("scroll", e) : a != null && Rl(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        ro(e),
                        Xa(e, r, !1);
                        break;
                    case "textarea":
                        ro(e),
                        eu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Vt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? En(e, !!r.multiple, i, !1) : r.defaultValue != null && En(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ko)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ae(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            T1(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(k(166));
            if (n = Kt(zr.current),
            Kt(nt.current),
            po(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[et] = t,
                (i = r.nodeValue !== n) && (e = Le,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        fo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && fo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[et] = t,
                t.stateNode = r
        }
        return ae(t),
        null;
    case 13:
        if (H(W),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && _e !== null && t.mode & 1 && !(t.flags & 128))
                Hd(),
                Fn(),
                t.flags |= 98560,
                i = !1;
            else if (i = po(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(k(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(k(317));
                    i[et] = t
                } else
                    Fn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ae(t),
                i = !1
            } else
                Qe !== null && (ml(Qe),
                Qe = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || W.current & 1 ? te === 0 && (te = 3) : ya())),
        t.updateQueue !== null && (t.flags |= 4),
        ae(t),
        null);
    case 4:
        return In(),
        ll(e, t),
        e === null && Nr(t.stateNode.containerInfo),
        ae(t),
        null;
    case 10:
        return ea(t.type._context),
        ae(t),
        null;
    case 17:
        return Pe(t.type) && Go(),
        ae(t),
        null;
    case 19:
        if (H(W),
        i = t.memoizedState,
        i === null)
            return ae(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                tr(i, !1);
            else {
                if (te !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = ti(e),
                        s !== null) {
                            for (t.flags |= 128,
                            tr(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return $(W, W.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && X() > $n && (t.flags |= 128,
                r = !0,
                tr(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ti(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    tr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !U)
                        return ae(t),
                        null
                } else
                    2 * X() - i.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    tr(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = X(),
        t.sibling = null,
        n = W.current,
        $(W, r ? n & 1 | 2 : n & 1),
        t) : (ae(t),
        null);
    case 22:
    case 23:
        return ga(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ne & 1073741824 && (ae(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(k(156, t.tag))
}
function Fh(e, t) {
    switch (Yl(t),
    t.tag) {
    case 1:
        return Pe(t.type) && Go(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return In(),
        H(Ce),
        H(de),
        ia(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return oa(t),
        null;
    case 13:
        if (H(W),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(k(340));
            Fn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return H(W),
        null;
    case 4:
        return In(),
        null;
    case 10:
        return ea(t.type._context),
        null;
    case 22:
    case 23:
        return ga(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var go = !1
  , ue = !1
  , Oh = typeof WeakSet == "function" ? WeakSet : Set
  , N = null;
function Pn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                G(e, t, r)
            }
        else
            n.current = null
}
function al(e, t, n) {
    try {
        n()
    } catch (r) {
        G(e, t, r)
    }
}
var bu = !1;
function Ih(e, t) {
    if (Ws = Uo,
    e = _d(),
    Gl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , p = e
                      , h = null;
                    t: for (; ; ) {
                        for (var y; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o),
                        p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r),
                        p.nodeType === 3 && (s += p.nodeValue.length),
                        (y = p.firstChild) !== null; )
                            h = p,
                            p = y;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (h === n && ++u === o && (l = s),
                            h === i && ++d === r && (a = s),
                            (y = p.nextSibling) !== null)
                                break;
                            p = h,
                            h = p.parentNode
                        }
                        p = y
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Qs = {
        focusedElem: e,
        selectionRange: n
    },
    Uo = !1,
    N = t; N !== null; )
        if (t = N,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            N = e;
        else
            for (; N !== null; ) {
                t = N;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var w = v.memoizedProps
                                  , _ = v.memoizedState
                                  , g = t.stateNode
                                  , f = g.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ue(t.type, w), _);
                                g.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                        }
                } catch (x) {
                    G(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    N = e;
                    break
                }
                N = t.return
            }
    return v = bu,
    bu = !1,
    v
}
function mr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && al(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function ji(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ul(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function j1(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    j1(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[et],
    delete t[Mr],
    delete t[Zs],
    delete t[wh],
    delete t[Sh])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function E1(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Uu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || E1(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function cl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ko));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (cl(e, t, n),
        e = e.sibling; e !== null; )
            cl(e, t, n),
            e = e.sibling
}
function dl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (dl(e, t, n),
        e = e.sibling; e !== null; )
            dl(e, t, n),
            e = e.sibling
}
var oe = null
  , We = !1;
function mt(e, t, n) {
    for (n = n.child; n !== null; )
        N1(e, t, n),
        n = n.sibling
}
function N1(e, t, n) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
        try {
            tt.onCommitFiberUnmount(vi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ue || Pn(n, t);
    case 6:
        var r = oe
          , o = We;
        oe = null,
        mt(e, t, n),
        oe = r,
        We = o,
        oe !== null && (We ? (e = oe,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
        break;
    case 18:
        oe !== null && (We ? (e = oe,
        n = n.stateNode,
        e.nodeType === 8 ? is(e.parentNode, n) : e.nodeType === 1 && is(e, n),
        Tr(e)) : is(oe, n.stateNode));
        break;
    case 4:
        r = oe,
        o = We,
        oe = n.stateNode.containerInfo,
        We = !0,
        mt(e, t, n),
        oe = r,
        We = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ue && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && al(n, t, s),
                o = o.next
            } while (o !== r)
        }
        mt(e, t, n);
        break;
    case 1:
        if (!ue && (Pn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                G(n, t, l)
            }
        mt(e, t, n);
        break;
    case 21:
        mt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null,
        mt(e, t, n),
        ue = r) : mt(e, t, n);
        break;
    default:
        mt(e, t, n)
    }
}
function Wu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Oh),
        t.forEach(function(r) {
            var o = Kh.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function be(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        oe = l.stateNode,
                        We = !1;
                        break e;
                    case 3:
                        oe = l.stateNode.containerInfo,
                        We = !0;
                        break e;
                    case 4:
                        oe = l.stateNode.containerInfo,
                        We = !0;
                        break e
                    }
                    l = l.return
                }
                if (oe === null)
                    throw Error(k(160));
                N1(i, s, o),
                oe = null,
                We = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                G(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            _1(t, e),
            t = t.sibling
}
function _1(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (be(t, e),
        Xe(e),
        r & 4) {
            try {
                mr(3, e, e.return),
                ji(3, e)
            } catch (w) {
                G(e, e.return, w)
            }
            try {
                mr(5, e, e.return)
            } catch (w) {
                G(e, e.return, w)
            }
        }
        break;
    case 1:
        be(t, e),
        Xe(e),
        r & 512 && n !== null && Pn(n, n.return);
        break;
    case 5:
        if (be(t, e),
        Xe(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Sr(o, "")
            } catch (w) {
                G(e, e.return, w)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Yc(o, i),
                    Rs(l, s);
                    var u = Rs(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var d = a[s]
                          , p = a[s + 1];
                        d === "style" ? td(o, p) : d === "dangerouslySetInnerHTML" ? Jc(o, p) : d === "children" ? Sr(o, p) : Rl(o, d, p, u)
                    }
                    switch (l) {
                    case "input":
                        Ms(o, i);
                        break;
                    case "textarea":
                        qc(o, i);
                        break;
                    case "select":
                        var h = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? En(o, !!i.multiple, y, !1) : h !== !!i.multiple && (i.defaultValue != null ? En(o, !!i.multiple, i.defaultValue, !0) : En(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Mr] = i
                } catch (w) {
                    G(e, e.return, w)
                }
        }
        break;
    case 6:
        if (be(t, e),
        Xe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(k(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (w) {
                G(e, e.return, w)
            }
        }
        break;
    case 3:
        if (be(t, e),
        Xe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Tr(t.containerInfo)
            } catch (w) {
                G(e, e.return, w)
            }
        break;
    case 4:
        be(t, e),
        Xe(e);
        break;
    case 13:
        be(t, e),
        Xe(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (ha = X())),
        r & 4 && Wu(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ue = (u = ue) || d,
        be(t, e),
        ue = u) : be(t, e),
        Xe(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (N = e,
                d = e.child; d !== null; ) {
                    for (p = N = d; N !== null; ) {
                        switch (h = N,
                        y = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            mr(4, h, h.return);
                            break;
                        case 1:
                            Pn(h, h.return);
                            var v = h.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (w) {
                                    G(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            Pn(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                Ku(p);
                                continue
                            }
                        }
                        y !== null ? (y.return = h,
                        N = y) : Ku(p)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (d === null) {
                        d = p;
                        try {
                            o = p.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode,
                            a = p.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = ed("display", s))
                        } catch (w) {
                            G(e, e.return, w)
                        }
                    }
                } else if (p.tag === 6) {
                    if (d === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (w) {
                            G(e, e.return, w)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    d === p && (d = null),
                    p = p.return
                }
                d === p && (d = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        be(t, e),
        Xe(e),
        r & 4 && Wu(e);
        break;
    case 21:
        break;
    default:
        be(t, e),
        Xe(e)
    }
}
function Xe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (E1(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Sr(o, ""),
                r.flags &= -33);
                var i = Uu(e);
                dl(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Uu(e);
                cl(e, l, s);
                break;
            default:
                throw Error(k(161))
            }
        } catch (a) {
            G(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Dh(e, t, n) {
    N = e,
    M1(e)
}
function M1(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
        var o = N
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || go;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || ue;
                l = go;
                var u = ue;
                if (go = s,
                (ue = a) && !u)
                    for (N = o; N !== null; )
                        s = N,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Gu(o) : a !== null ? (a.return = s,
                        N = a) : Gu(o);
                for (; i !== null; )
                    N = i,
                    M1(i),
                    i = i.sibling;
                N = o,
                go = l,
                ue = u
            }
            Qu(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            N = i) : Qu(e)
    }
}
function Qu(e) {
    for (; N !== null; ) {
        var t = N;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ue || ji(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ue)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && _u(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            _u(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
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
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var p = d.dehydrated;
                                    p !== null && Tr(p)
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
                        throw Error(k(163))
                    }
                ue || t.flags & 512 && ul(t)
            } catch (h) {
                G(t, t.return, h)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            N = n;
            break
        }
        N = t.return
    }
}
function Ku(e) {
    for (; N !== null; ) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            N = n;
            break
        }
        N = t.return
    }
}
function Gu(e) {
    for (; N !== null; ) {
        var t = N;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ji(4, t)
                } catch (a) {
                    G(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        G(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    ul(t)
                } catch (a) {
                    G(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ul(t)
                } catch (a) {
                    G(t, s, a)
                }
            }
        } catch (a) {
            G(t, t.return, a)
        }
        if (t === e) {
            N = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            N = l;
            break
        }
        N = t.return
    }
}
var $h = Math.ceil
  , oi = ht.ReactCurrentDispatcher
  , fa = ht.ReactCurrentOwner
  , $e = ht.ReactCurrentBatchConfig
  , I = 0
  , re = null
  , J = null
  , ie = 0
  , Ne = 0
  , Tn = Ft(0)
  , te = 0
  , Fr = null
  , rn = 0
  , Ei = 0
  , pa = 0
  , gr = null
  , Se = null
  , ha = 0
  , $n = 1 / 0
  , ot = null
  , ii = !1
  , fl = null
  , _t = null
  , yo = !1
  , Ct = null
  , si = 0
  , yr = 0
  , pl = null
  , zo = -1
  , Vo = 0;
function ge() {
    return I & 6 ? X() : zo !== -1 ? zo : zo = X()
}
function Mt(e) {
    return e.mode & 1 ? I & 2 && ie !== 0 ? ie & -ie : Ch.transition !== null ? (Vo === 0 && (Vo = pd()),
    Vo) : (e = D,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : wd(e.type)),
    e) : 1
}
function Ge(e, t, n, r) {
    if (50 < yr)
        throw yr = 0,
        pl = null,
        Error(k(185));
    Ur(e, n, r),
    (!(I & 2) || e !== re) && (e === re && (!(I & 2) && (Ei |= n),
    te === 4 && wt(e, ie)),
    Te(e, r),
    n === 1 && I === 0 && !(t.mode & 1) && ($n = X() + 500,
    Ci && Ot()))
}
function Te(e, t) {
    var n = e.callbackNode;
    Cp(e, t);
    var r = bo(e, e === re ? ie : 0);
    if (r === 0)
        n !== null && ru(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ru(n),
        t === 1)
            e.tag === 0 ? kh(Zu.bind(null, e)) : Dd(Zu.bind(null, e)),
            vh(function() {
                !(I & 6) && Ot()
            }),
            n = null;
        else {
            switch (hd(r)) {
            case 1:
                n = $l;
                break;
            case 4:
                n = dd;
                break;
            case 16:
                n = Ho;
                break;
            case 536870912:
                n = fd;
                break;
            default:
                n = Ho
            }
            n = I1(n, L1.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function L1(e, t) {
    if (zo = -1,
    Vo = 0,
    I & 6)
        throw Error(k(327));
    var n = e.callbackNode;
    if (zn() && e.callbackNode !== n)
        return null;
    var r = bo(e, e === re ? ie : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = li(e, r);
    else {
        t = r;
        var o = I;
        I |= 2;
        var i = V1();
        (re !== e || ie !== t) && (ot = null,
        $n = X() + 500,
        Yt(e, t));
        do
            try {
                bh();
                break
            } catch (l) {
                z1(e, l)
            }
        while (1);
        Jl(),
        oi.current = i,
        I = o,
        J !== null ? t = 0 : (re = null,
        ie = 0,
        t = te)
    }
    if (t !== 0) {
        if (t === 2 && (o = $s(e),
        o !== 0 && (r = o,
        t = hl(e, o))),
        t === 1)
            throw n = Fr,
            Yt(e, 0),
            wt(e, r),
            Te(e, X()),
            n;
        if (t === 6)
            wt(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !Bh(o) && (t = li(e, r),
            t === 2 && (i = $s(e),
            i !== 0 && (r = i,
            t = hl(e, i))),
            t === 1))
                throw n = Fr,
                Yt(e, 0),
                wt(e, r),
                Te(e, X()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(k(345));
            case 2:
                Ut(e, Se, ot);
                break;
            case 3:
                if (wt(e, r),
                (r & 130023424) === r && (t = ha + 500 - X(),
                10 < t)) {
                    if (bo(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        ge(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Gs(Ut.bind(null, e, Se, ot), t);
                    break
                }
                Ut(e, Se, ot);
                break;
            case 4:
                if (wt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - Ke(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = X() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $h(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Gs(Ut.bind(null, e, Se, ot), r);
                    break
                }
                Ut(e, Se, ot);
                break;
            case 5:
                Ut(e, Se, ot);
                break;
            default:
                throw Error(k(329))
            }
        }
    }
    return Te(e, X()),
    e.callbackNode === n ? L1.bind(null, e) : null
}
function hl(e, t) {
    var n = gr;
    return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    e = li(e, t),
    e !== 2 && (t = Se,
    Se = n,
    t !== null && ml(t)),
    e
}
function ml(e) {
    Se === null ? Se = e : Se.push.apply(Se, e)
}
function Bh(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ze(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function wt(e, t) {
    for (t &= ~pa,
    t &= ~Ei,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ke(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Zu(e) {
    if (I & 6)
        throw Error(k(327));
    zn();
    var t = bo(e, 0);
    if (!(t & 1))
        return Te(e, X()),
        null;
    var n = li(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $s(e);
        r !== 0 && (t = r,
        n = hl(e, r))
    }
    if (n === 1)
        throw n = Fr,
        Yt(e, 0),
        wt(e, t),
        Te(e, X()),
        n;
    if (n === 6)
        throw Error(k(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ut(e, Se, ot),
    Te(e, X()),
    null
}
function ma(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n,
        I === 0 && ($n = X() + 500,
        Ci && Ot())
    }
}
function on(e) {
    Ct !== null && Ct.tag === 0 && !(I & 6) && zn();
    var t = I;
    I |= 1;
    var n = $e.transition
      , r = D;
    try {
        if ($e.transition = null,
        D = 1,
        e)
            return e()
    } finally {
        D = r,
        $e.transition = n,
        I = t,
        !(I & 6) && Ot()
    }
}
function ga() {
    Ne = Tn.current,
    H(Tn)
}
function Yt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    yh(n)),
    J !== null)
        for (n = J.return; n !== null; ) {
            var r = n;
            switch (Yl(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Go();
                break;
            case 3:
                In(),
                H(Ce),
                H(de),
                ia();
                break;
            case 5:
                oa(r);
                break;
            case 4:
                In();
                break;
            case 13:
                H(W);
                break;
            case 19:
                H(W);
                break;
            case 10:
                ea(r.type._context);
                break;
            case 22:
            case 23:
                ga()
            }
            n = n.return
        }
    if (re = e,
    J = e = Lt(e.current, null),
    ie = Ne = t,
    te = 0,
    Fr = null,
    pa = Ei = rn = 0,
    Se = gr = null,
    Qt !== null) {
        for (t = 0; t < Qt.length; t++)
            if (n = Qt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Qt = null
    }
    return e
}
function z1(e, t) {
    do {
        var n = J;
        try {
            if (Jl(),
            _o.current = ri,
            ni) {
                for (var r = Q.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                ni = !1
            }
            if (nn = 0,
            ne = ee = Q = null,
            hr = !1,
            Vr = 0,
            fa.current = null,
            n === null || n.return === null) {
                te = 1,
                Fr = t,
                J = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = ie,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = l
                      , p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                        d.memoizedState = h.memoizedState,
                        d.lanes = h.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = Fu(s);
                    if (y !== null) {
                        y.flags &= -257,
                        Ou(y, s, l, i, t),
                        y.mode & 1 && Ru(i, u, t),
                        t = y,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var w = new Set;
                            w.add(a),
                            t.updateQueue = w
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ru(i, u, t),
                            ya();
                            break e
                        }
                        a = Error(k(426))
                    }
                } else if (U && l.mode & 1) {
                    var _ = Fu(s);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                        Ou(_, s, l, i, t),
                        ql(Dn(a, l));
                        break e
                    }
                }
                i = a = Dn(a, l),
                te !== 4 && (te = 2),
                gr === null ? gr = [i] : gr.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = m1(i, a, t);
                        Nu(i, g);
                        break e;
                    case 1:
                        l = a;
                        var f = i.type
                          , m = i.stateNode;
                        if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (_t === null || !_t.has(m)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var x = g1(i, l, t);
                            Nu(i, x);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            R1(n)
        } catch (S) {
            t = S,
            J === n && n !== null && (J = n = n.return);
            continue
        }
        break
    } while (1)
}
function V1() {
    var e = oi.current;
    return oi.current = ri,
    e === null ? ri : e
}
function ya() {
    (te === 0 || te === 3 || te === 2) && (te = 4),
    re === null || !(rn & 268435455) && !(Ei & 268435455) || wt(re, ie)
}
function li(e, t) {
    var n = I;
    I |= 2;
    var r = V1();
    (re !== e || ie !== t) && (ot = null,
    Yt(e, t));
    do
        try {
            Hh();
            break
        } catch (o) {
            z1(e, o)
        }
    while (1);
    if (Jl(),
    I = n,
    oi.current = r,
    J !== null)
        throw Error(k(261));
    return re = null,
    ie = 0,
    te
}
function Hh() {
    for (; J !== null; )
        A1(J)
}
function bh() {
    for (; J !== null && !hp(); )
        A1(J)
}
function A1(e) {
    var t = O1(e.alternate, e, Ne);
    e.memoizedProps = e.pendingProps,
    t === null ? R1(e) : J = t,
    fa.current = null
}
function R1(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Fh(n, t),
            n !== null) {
                n.flags &= 32767,
                J = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                te = 6,
                J = null;
                return
            }
        } else if (n = Rh(n, t, Ne),
        n !== null) {
            J = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            J = t;
            return
        }
        J = t = e
    } while (t !== null);
    te === 0 && (te = 5)
}
function Ut(e, t, n) {
    var r = D
      , o = $e.transition;
    try {
        $e.transition = null,
        D = 1,
        Uh(e, t, n, r)
    } finally {
        $e.transition = o,
        D = r
    }
    return null
}
function Uh(e, t, n, r) {
    do
        zn();
    while (Ct !== null);
    if (I & 6)
        throw Error(k(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(k(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Pp(e, i),
    e === re && (J = re = null,
    ie = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yo || (yo = !0,
    I1(Ho, function() {
        return zn(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = $e.transition,
        $e.transition = null;
        var s = D;
        D = 1;
        var l = I;
        I |= 4,
        fa.current = null,
        Ih(e, n),
        _1(n, e),
        ch(Qs),
        Uo = !!Ws,
        Qs = Ws = null,
        e.current = n,
        Dh(n),
        mp(),
        I = l,
        D = s,
        $e.transition = i
    } else
        e.current = n;
    if (yo && (yo = !1,
    Ct = e,
    si = o),
    i = e.pendingLanes,
    i === 0 && (_t = null),
    vp(n.stateNode),
    Te(e, X()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ii)
        throw ii = !1,
        e = fl,
        fl = null,
        e;
    return si & 1 && e.tag !== 0 && zn(),
    i = e.pendingLanes,
    i & 1 ? e === pl ? yr++ : (yr = 0,
    pl = e) : yr = 0,
    Ot(),
    null
}
function zn() {
    if (Ct !== null) {
        var e = hd(si)
          , t = $e.transition
          , n = D;
        try {
            if ($e.transition = null,
            D = 16 > e ? 16 : e,
            Ct === null)
                var r = !1;
            else {
                if (e = Ct,
                Ct = null,
                si = 0,
                I & 6)
                    throw Error(k(331));
                var o = I;
                for (I |= 4,
                N = e.current; N !== null; ) {
                    var i = N
                      , s = i.child;
                    if (N.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (N = u; N !== null; ) {
                                    var d = N;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        mr(8, d, i)
                                    }
                                    var p = d.child;
                                    if (p !== null)
                                        p.return = d,
                                        N = p;
                                    else
                                        for (; N !== null; ) {
                                            d = N;
                                            var h = d.sibling
                                              , y = d.return;
                                            if (j1(d),
                                            d === u) {
                                                N = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y,
                                                N = h;
                                                break
                                            }
                                            N = y
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var w = v.child;
                                if (w !== null) {
                                    v.child = null;
                                    do {
                                        var _ = w.sibling;
                                        w.sibling = null,
                                        w = _
                                    } while (w !== null)
                                }
                            }
                            N = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        N = s;
                    else
                        e: for (; N !== null; ) {
                            if (i = N,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    mr(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                N = g;
                                break e
                            }
                            N = i.return
                        }
                }
                var f = e.current;
                for (N = f; N !== null; ) {
                    s = N;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        N = m;
                    else
                        e: for (s = f; N !== null; ) {
                            if (l = N,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ji(9, l)
                                    }
                                } catch (S) {
                                    G(l, l.return, S)
                                }
                            if (l === s) {
                                N = null;
                                break e
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                x.return = l.return,
                                N = x;
                                break e
                            }
                            N = l.return
                        }
                }
                if (I = o,
                Ot(),
                tt && typeof tt.onPostCommitFiberRoot == "function")
                    try {
                        tt.onPostCommitFiberRoot(vi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            D = n,
            $e.transition = t
        }
    }
    return !1
}
function Yu(e, t, n) {
    t = Dn(n, t),
    t = m1(e, t, 1),
    e = Nt(e, t, 1),
    t = ge(),
    e !== null && (Ur(e, 1, t),
    Te(e, t))
}
function G(e, t, n) {
    if (e.tag === 3)
        Yu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Yu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_t === null || !_t.has(r))) {
                    e = Dn(n, e),
                    e = g1(t, e, 1),
                    t = Nt(t, e, 1),
                    e = ge(),
                    t !== null && (Ur(t, 1, e),
                    Te(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Wh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ge(),
    e.pingedLanes |= e.suspendedLanes & n,
    re === e && (ie & n) === n && (te === 4 || te === 3 && (ie & 130023424) === ie && 500 > X() - ha ? Yt(e, 0) : pa |= n),
    Te(e, t)
}
function F1(e, t) {
    t === 0 && (e.mode & 1 ? (t = so,
    so <<= 1,
    !(so & 130023424) && (so = 4194304)) : t = 1);
    var n = ge();
    e = dt(e, t),
    e !== null && (Ur(e, t, n),
    Te(e, n))
}
function Qh(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    F1(e, n)
}
function Kh(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(k(314))
    }
    r !== null && r.delete(t),
    F1(e, n)
}
var O1;
O1 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current)
            ke = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ke = !1,
                Ah(e, t, n);
            ke = !!(e.flags & 131072)
        }
    else
        ke = !1,
        U && t.flags & 1048576 && $d(t, qo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Lo(e, t),
        e = t.pendingProps;
        var o = Rn(t, de.current);
        Ln(t, n),
        o = la(null, t, r, e, o, n);
        var i = aa();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Pe(r) ? (i = !0,
        Zo(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        na(t),
        o.updater = Pi,
        t.stateNode = o,
        o._reactInternals = t,
        tl(t, r, e, n),
        t = ol(null, t, r, !0, i, n)) : (t.tag = 0,
        U && i && Zl(t),
        pe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Lo(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Zh(r),
            e = Ue(r, e),
            o) {
            case 0:
                t = rl(null, t, r, e, n);
                break e;
            case 1:
                t = $u(null, t, r, e, n);
                break e;
            case 11:
                t = Iu(null, t, r, e, n);
                break e;
            case 14:
                t = Du(null, t, r, Ue(r.type, e), n);
                break e
            }
            throw Error(k(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ue(r, o),
        rl(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ue(r, o),
        $u(e, t, r, o, n);
    case 3:
        e: {
            if (w1(t),
            e === null)
                throw Error(k(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Ud(e, t),
            ei(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Dn(Error(k(423)), t),
                    t = Bu(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Dn(Error(k(424)), t),
                    t = Bu(e, t, r, n, o);
                    break e
                } else
                    for (_e = Et(t.stateNode.containerInfo.firstChild),
                    Le = t,
                    U = !0,
                    Qe = null,
                    n = Gd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Fn(),
                r === o) {
                    t = ft(e, t, n);
                    break e
                }
                pe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Zd(t),
        e === null && Xs(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        Ks(r, o) ? s = null : i !== null && Ks(r, i) && (t.flags |= 32),
        x1(e, t),
        pe(e, t, s, n),
        t.child;
    case 6:
        return e === null && Xs(t),
        null;
    case 13:
        return S1(e, t, n);
    case 4:
        return ra(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = On(t, null, r, n) : pe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ue(r, o),
        Iu(e, t, r, o, n);
    case 7:
        return pe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return pe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return pe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            $(Xo, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (Ze(i.value, s)) {
                    if (i.children === o.children && !Ce.current) {
                        t = ft(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = at(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    Js(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(k(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Js(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            pe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Ln(t, n),
        o = Be(o),
        r = r(o),
        t.flags |= 1,
        pe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Ue(r, t.pendingProps),
        o = Ue(r.type, o),
        Du(e, t, r, o, n);
    case 15:
        return y1(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Ue(r, o),
        Lo(e, t),
        t.tag = 1,
        Pe(r) ? (e = !0,
        Zo(t)) : e = !1,
        Ln(t, n),
        Qd(t, r, o),
        tl(t, r, o, n),
        ol(null, t, r, !0, e, n);
    case 19:
        return k1(e, t, n);
    case 22:
        return v1(e, t, n)
    }
    throw Error(k(156, t.tag))
}
;
function I1(e, t) {
    return cd(e, t)
}
function Gh(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function De(e, t, n, r) {
    return new Gh(e,t,n,r)
}
function va(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Zh(e) {
    if (typeof e == "function")
        return va(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ol)
            return 11;
        if (e === Il)
            return 14
    }
    return 2
}
function Lt(e, t) {
    var n = e.alternate;
    return n === null ? (n = De(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ao(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        va(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case mn:
            return qt(n.children, o, i, t);
        case Fl:
            s = 8,
            o |= 8;
            break;
        case Ts:
            return e = De(12, n, t, o | 2),
            e.elementType = Ts,
            e.lanes = i,
            e;
        case js:
            return e = De(13, n, t, o),
            e.elementType = js,
            e.lanes = i,
            e;
        case Es:
            return e = De(19, n, t, o),
            e.elementType = Es,
            e.lanes = i,
            e;
        case Kc:
            return Ni(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wc:
                    s = 10;
                    break e;
                case Qc:
                    s = 9;
                    break e;
                case Ol:
                    s = 11;
                    break e;
                case Il:
                    s = 14;
                    break e;
                case yt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(k(130, e == null ? e : typeof e, ""))
        }
    return t = De(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function qt(e, t, n, r) {
    return e = De(7, e, r, t),
    e.lanes = n,
    e
}
function Ni(e, t, n, r) {
    return e = De(22, e, r, t),
    e.elementType = Kc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ps(e, t, n) {
    return e = De(6, e, null, t),
    e.lanes = n,
    e
}
function hs(e, t, n) {
    return t = De(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Yh(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Gi(0),
    this.expirationTimes = Gi(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Gi(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function xa(e, t, n, r, o, i, s, l, a) {
    return e = new Yh(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = De(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    na(i),
    e
}
function qh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function D1(e) {
    if (!e)
        return At;
    e = e._reactInternals;
    e: {
        if (ln(e) !== e || e.tag !== 1)
            throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Pe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Pe(n))
            return Id(e, n, t)
    }
    return t
}
function $1(e, t, n, r, o, i, s, l, a) {
    return e = xa(n, r, !0, e, o, i, s, l, a),
    e.context = D1(null),
    n = e.current,
    r = ge(),
    o = Mt(n),
    i = at(r, o),
    i.callback = t ?? null,
    Nt(n, i, o),
    e.current.lanes = o,
    Ur(e, o, r),
    Te(e, r),
    e
}
function _i(e, t, n, r) {
    var o = t.current
      , i = ge()
      , s = Mt(o);
    return n = D1(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = at(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Nt(o, t, s),
    e !== null && (Ge(e, o, s, i),
    No(e, o, s)),
    s
}
function ai(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function qu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function wa(e, t) {
    qu(e, t),
    (e = e.alternate) && qu(e, t)
}
function Xh() {
    return null
}
var B1 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Sa(e) {
    this._internalRoot = e
}
Mi.prototype.render = Sa.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(k(409));
    _i(e, t, null, null)
}
;
Mi.prototype.unmount = Sa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        on(function() {
            _i(null, e, null, null)
        }),
        t[ct] = null
    }
}
;
function Mi(e) {
    this._internalRoot = e
}
Mi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = yd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++)
            ;
        xt.splice(n, 0, e),
        n === 0 && xd(e)
    }
}
;
function ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Li(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Xu() {}
function Jh(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ai(s);
                i.call(u)
            }
        }
        var s = $1(t, r, e, 0, null, !1, !1, "", Xu);
        return e._reactRootContainer = s,
        e[ct] = s.current,
        Nr(e.nodeType === 8 ? e.parentNode : e),
        on(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ai(a);
            l.call(u)
        }
    }
    var a = xa(e, 0, !1, null, null, !1, !1, "", Xu);
    return e._reactRootContainer = a,
    e[ct] = a.current,
    Nr(e.nodeType === 8 ? e.parentNode : e),
    on(function() {
        _i(t, a, n, r)
    }),
    a
}
function zi(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = ai(s);
                l.call(a)
            }
        }
        _i(t, s, e, o)
    } else
        s = Jh(n, t, e, o, r);
    return ai(s)
}
md = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = sr(t.pendingLanes);
            n !== 0 && (Bl(t, n | 1),
            Te(t, X()),
            !(I & 6) && ($n = X() + 500,
            Ot()))
        }
        break;
    case 13:
        on(function() {
            var r = dt(e, 1);
            if (r !== null) {
                var o = ge();
                Ge(r, e, 1, o)
            }
        }),
        wa(e, 1)
    }
}
;
Hl = function(e) {
    if (e.tag === 13) {
        var t = dt(e, 134217728);
        if (t !== null) {
            var n = ge();
            Ge(t, e, 134217728, n)
        }
        wa(e, 134217728)
    }
}
;
gd = function(e) {
    if (e.tag === 13) {
        var t = Mt(e)
          , n = dt(e, t);
        if (n !== null) {
            var r = ge();
            Ge(n, e, t, r)
        }
        wa(e, t)
    }
}
;
yd = function() {
    return D
}
;
vd = function(e, t) {
    var n = D;
    try {
        return D = e,
        t()
    } finally {
        D = n
    }
}
;
Os = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ms(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ki(r);
                    if (!o)
                        throw Error(k(90));
                    Zc(r),
                    Ms(r, o)
                }
            }
        }
        break;
    case "textarea":
        qc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && En(e, !!n.multiple, t, !1)
    }
}
;
od = ma;
id = on;
var e2 = {
    usingClientEntryPoint: !1,
    Events: [Qr, xn, ki, nd, rd, ma]
}
  , nr = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , t2 = {
    bundleType: nr.bundleType,
    version: nr.version,
    rendererPackageName: nr.rendererPackageName,
    rendererConfig: nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ad(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: nr.findFiberByHostInstance || Xh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vo.isDisabled && vo.supportsFiber)
        try {
            vi = vo.inject(t2),
            tt = vo
        } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e2;
Ae.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ka(t))
        throw Error(k(200));
    return qh(e, t, null, n)
}
;
Ae.createRoot = function(e, t) {
    if (!ka(e))
        throw Error(k(299));
    var n = !1
      , r = ""
      , o = B1;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = xa(e, 1, !1, null, null, n, !1, r, o),
    e[ct] = t.current,
    Nr(e.nodeType === 8 ? e.parentNode : e),
    new Sa(t)
}
;
Ae.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
        Error(k(268, e)));
    return e = ad(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ae.flushSync = function(e) {
    return on(e)
}
;
Ae.hydrate = function(e, t, n) {
    if (!Li(t))
        throw Error(k(200));
    return zi(null, e, t, !0, n)
}
;
Ae.hydrateRoot = function(e, t, n) {
    if (!ka(e))
        throw Error(k(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = B1;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = $1(t, null, e, 1, n ?? null, o, !1, i, s),
    e[ct] = t.current,
    Nr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Mi(t)
}
;
Ae.render = function(e, t, n) {
    if (!Li(t))
        throw Error(k(200));
    return zi(null, e, t, !1, n)
}
;
Ae.unmountComponentAtNode = function(e) {
    if (!Li(e))
        throw Error(k(40));
    return e._reactRootContainer ? (on(function() {
        zi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[ct] = null
        })
    }),
    !0) : !1
}
;
Ae.unstable_batchedUpdates = ma;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Li(n))
        throw Error(k(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(k(38));
    return zi(e, t, n, !1, r)
}
;
Ae.version = "18.2.0-next-9e3b772b8-20220608";
function H1() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H1)
        } catch (e) {
            console.error(e)
        }
}
H1(),
$c.exports = Ae;
var n2 = $c.exports
  , Ju = n2;
Cs.createRoot = Ju.createRoot,
Cs.hydrateRoot = Ju.hydrateRoot;
const b1 = P.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Vi = P.createContext({})
  , U1 = P.createContext(null)
  , Ai = typeof document < "u"
  , r2 = Ai ? P.useLayoutEffect : P.useEffect
  , Ca = P.createContext({
    strict: !1
});
function o2(e, t, n, r) {
    const {visualElement: o} = P.useContext(Vi)
      , i = P.useContext(Ca)
      , s = P.useContext(U1)
      , l = P.useContext(b1).reducedMotion
      , a = P.useRef();
    r = r || i.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    P.useInsertionEffect( () => {
        u && u.update(n, s)
    }
    );
    const d = P.useRef(!!window.HandoffAppearAnimations);
    return r2( () => {
        u && (u.render(),
        d.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    P.useEffect( () => {
        u && (u.updateFeatures(),
        !d.current && u.animationState && u.animationState.animateChanges(),
        window.HandoffAppearAnimations = void 0,
        d.current = !1)
    }
    ),
    u
}
function W1(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function i2(e, t, n) {
    return P.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : W1(n) && (n.current = r))
    }
    , [t])
}
function Or(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Ri(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const Pa = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ta = ["initial", ...Pa];
function Fi(e) {
    return Ri(e.animate) || Ta.some(t => Or(e[t]))
}
function Q1(e) {
    return !!(Fi(e) || e.variants)
}
function s2(e, t) {
    if (Fi(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Or(n) ? n : void 0,
            animate: Or(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function l2(e) {
    const {initial: t, animate: n} = s2(e, P.useContext(Vi));
    return P.useMemo( () => ({
        initial: t,
        animate: n
    }), [ec(t), ec(n)])
}
function ec(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const tc = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Ir = {};
for (const e in tc)
    Ir[e] = {
        isEnabled: t => tc[e].some(n => !!t[n])
    };
function gl(e) {
    for (const t in e)
        Ir[t] = {
            ...Ir[t],
            ...e[t]
        }
}
const a2 = P.createContext({})
  , u2 = P.createContext({})
  , c2 = Symbol.for("motionComponentSymbol");
function d2({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o}) {
    e && gl(e);
    function i(l, a) {
        let u;
        const d = {
            ...P.useContext(b1),
            ...l,
            layoutId: f2(l)
        }
          , {isStatic: p} = d
          , h = l2(l)
          , y = r(l, p);
        if (!p && Ai) {
            h.visualElement = o2(o, y, d, t);
            const v = P.useContext(u2)
              , w = P.useContext(Ca).strict;
            h.visualElement && (u = h.visualElement.loadFeatures(d, w, e, v))
        }
        return P.createElement(Vi.Provider, {
            value: h
        }, u && h.visualElement ? P.createElement(u, {
            visualElement: h.visualElement,
            ...d
        }) : null, n(o, l, i2(y, h.visualElement, a), y, p, h.visualElement))
    }
    const s = P.forwardRef(i);
    return s[c2] = o,
    s
}
function f2({layoutId: e}) {
    const t = P.useContext(a2).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function p2(e) {
    function t(r, o={}) {
        return d2(e(r, o))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r, o) => (n.has(o) || n.set(o, t(o)),
        n.get(o))
    })
}
const h2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ja(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(h2.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const m2 = {}
  , Gr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , an = new Set(Gr);
function K1(e, {layout: t, layoutId: n}) {
    return an.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!m2[e] || e === "opacity")
}
const Ve = e => !!(e && e.getVelocity)
  , g2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , y2 = Gr.length;
function v2(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, o) {
    let i = "";
    for (let s = 0; s < y2; s++) {
        const l = Gr[s];
        if (e[l] !== void 0) {
            const a = g2[l] || l;
            i += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"),
    i = i.trim(),
    o ? i = o(e, r ? "" : i) : n && r && (i = "none"),
    i
}
const G1 = e => t => typeof t == "string" && t.startsWith(e)
  , Z1 = G1("--")
  , yl = G1("var(--")
  , x2 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , w2 = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Bn = (e, t, n) => Math.min(Math.max(n, e), t)
  , un = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , vr = {
    ...un,
    transform: e => Bn(0, 1, e)
}
  , xo = {
    ...un,
    default: 1
}
  , xr = e => Math.round(e * 1e5) / 1e5
  , Oi = /(-)?([\d]*\.?[\d])+/g
  , Y1 = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , S2 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Zr(e) {
    return typeof e == "string"
}
const Yr = e => ({
    test: t => Zr(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , gt = Yr("deg")
  , Vn = Yr("%")
  , M = Yr("px")
  , k2 = Yr("vh")
  , C2 = Yr("vw")
  , nc = {
    ...Vn,
    parse: e => Vn.parse(e) / 100,
    transform: e => Vn.transform(e * 100)
}
  , rc = {
    ...un,
    transform: Math.round
}
  , q1 = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    size: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    rotate: gt,
    rotateX: gt,
    rotateY: gt,
    rotateZ: gt,
    scale: xo,
    scaleX: xo,
    scaleY: xo,
    scaleZ: xo,
    skew: gt,
    skewX: gt,
    skewY: gt,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: vr,
    originX: nc,
    originY: nc,
    originZ: M,
    zIndex: rc,
    fillOpacity: vr,
    strokeOpacity: vr,
    numOctaves: rc
};
function Ea(e, t, n, r) {
    const {style: o, vars: i, transform: s, transformOrigin: l} = e;
    let a = !1
      , u = !1
      , d = !0;
    for (const p in t) {
        const h = t[p];
        if (Z1(p)) {
            i[p] = h;
            continue
        }
        const y = q1[p]
          , v = w2(h, y);
        if (an.has(p)) {
            if (a = !0,
            s[p] = v,
            !d)
                continue;
            h !== (y.default || 0) && (d = !1)
        } else
            p.startsWith("origin") ? (u = !0,
            l[p] = v) : o[p] = v
    }
    if (t.transform || (a || r ? o.transform = v2(e.transform, n, d, r) : o.transform && (o.transform = "none")),
    u) {
        const {originX: p="50%", originY: h="50%", originZ: y=0} = l;
        o.transformOrigin = `${p} ${h} ${y}`
    }
}
const Na = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function X1(e, t, n) {
    for (const r in t)
        !Ve(t[r]) && !K1(r, n) && (e[r] = t[r])
}
function P2({transformTemplate: e}, t, n) {
    return P.useMemo( () => {
        const r = Na();
        return Ea(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function T2(e, t, n) {
    const r = e.style || {}
      , o = {};
    return X1(o, r, e),
    Object.assign(o, P2(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
}
function j2(e, t, n) {
    const r = {}
      , o = T2(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = o,
    r
}
const E2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
function ui(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || E2.has(e)
}
let J1 = e => !ui(e);
function N2(e) {
    e && (J1 = t => t.startsWith("on") ? !ui(t) : e(t))
}
try {
    N2(require("@emotion/is-prop-valid").default)
} catch {}
function _2(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (J1(o) || n === !0 && ui(o) || !t && !ui(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
function oc(e, t, n) {
    return typeof e == "string" ? e : M.transform(t + n * e)
}
function M2(e, t, n) {
    const r = oc(t, e.x, e.width)
      , o = oc(n, e.y, e.height);
    return `${r} ${o}`
}
const L2 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , z2 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function V2(e, t, n=1, r=0, o=!0) {
    e.pathLength = 1;
    const i = o ? L2 : z2;
    e[i.offset] = M.transform(-r);
    const s = M.transform(t)
      , l = M.transform(n);
    e[i.array] = `${s} ${l}`
}
function _a(e, {attrX: t, attrY: n, attrScale: r, originX: o, originY: i, pathLength: s, pathSpacing: l=1, pathOffset: a=0, ...u}, d, p, h) {
    if (Ea(e, u, d, h),
    p) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: y, style: v, dimensions: w} = e;
    y.transform && (w && (v.transform = y.transform),
    delete y.transform),
    w && (o !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = M2(w, o !== void 0 ? o : .5, i !== void 0 ? i : .5)),
    t !== void 0 && (y.x = t),
    n !== void 0 && (y.y = n),
    r !== void 0 && (y.scale = r),
    s !== void 0 && V2(y, s, l, a, !1)
}
const ef = () => ({
    ...Na(),
    attrs: {}
})
  , Ma = e => typeof e == "string" && e.toLowerCase() === "svg";
function A2(e, t, n, r) {
    const o = P.useMemo( () => {
        const i = ef();
        return _a(i, t, {
            enableHardwareAcceleration: !1
        }, Ma(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const i = {};
        X1(i, e.style, e),
        o.style = {
            ...i,
            ...o.style
        }
    }
    return o
}
function R2(e=!1) {
    return (n, r, o, {latestValues: i}, s) => {
        const a = (ja(n) ? A2 : j2)(r, i, s, n)
          , d = {
            ..._2(r, typeof n == "string", e),
            ...a,
            ref: o
        }
          , {children: p} = r
          , h = P.useMemo( () => Ve(p) ? p.get() : p, [p]);
        return P.createElement(n, {
            ...d,
            children: h
        })
    }
}
const La = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function tf(e, {style: t, vars: n}, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const nf = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function rf(e, t, n, r) {
    tf(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(nf.has(o) ? o : La(o), t.attrs[o])
}
function za(e, t) {
    const {style: n} = e
      , r = {};
    for (const o in n)
        (Ve(n[o]) || t.style && Ve(t.style[o]) || K1(o, e)) && (r[o] = n[o]);
    return r
}
function of(e, t) {
    const n = za(e, t);
    for (const r in e)
        if (Ve(e[r]) || Ve(t[r])) {
            const o = Gr.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[o] = e[r]
        }
    return n
}
function Va(e, t, n, r={}, o={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
}
function F2(e) {
    const t = P.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const ci = e => Array.isArray(e)
  , O2 = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , I2 = e => ci(e) ? e[e.length - 1] || 0 : e;
function D2(e) {
    const t = Ve(e) ? e.get() : e;
    return O2(t) ? t.toValue() : t
}
function $2({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, o, i) {
    const s = {
        latestValues: B2(r, o, i, e),
        renderState: t()
    };
    return n && (s.mount = l => n(r, l, s)),
    s
}
const sf = e => (t, n) => {
    const r = P.useContext(Vi)
      , o = P.useContext(U1)
      , i = () => $2(e, t, r, o);
    return n ? i() : F2(i)
}
;
function B2(e, t, n, r) {
    const o = {}
      , i = r(e, {});
    for (const h in i)
        o[h] = D2(i[h]);
    let {initial: s, animate: l} = e;
    const a = Fi(e)
      , u = Q1(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || s === !1;
    const p = d ? l : s;
    return p && typeof p != "boolean" && !Ri(p) && (Array.isArray(p) ? p : [p]).forEach(y => {
        const v = Va(e, y);
        if (!v)
            return;
        const {transitionEnd: w, transition: _, ...g} = v;
        for (const f in g) {
            let m = g[f];
            if (Array.isArray(m)) {
                const x = d ? m.length - 1 : 0;
                m = m[x]
            }
            m !== null && (o[f] = m)
        }
        for (const f in w)
            o[f] = w[f]
    }
    ),
    o
}
const ce = e => e;
class ic {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function H2(e) {
    let t = new ic
      , n = new ic
      , r = 0
      , o = !1
      , i = !1;
    const s = new WeakSet
      , l = {
        schedule: (a, u=!1, d=!1) => {
            const p = d && o
              , h = p ? t : n;
            return u && s.add(a),
            h.add(a) && p && o && (r = t.order.length),
            a
        }
        ,
        cancel: a => {
            n.remove(a),
            s.delete(a)
        }
        ,
        process: a => {
            if (o) {
                i = !0;
                return
            }
            if (o = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const d = t.order[u];
                    d(a),
                    s.has(d) && (l.schedule(d),
                    e())
                }
            o = !1,
            i && (i = !1,
            l.process(a))
        }
    };
    return l
}
const wo = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , b2 = 40;
function U2(e, t) {
    let n = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = wo.reduce( (p, h) => (p[h] = H2( () => n = !0),
    p), {})
      , s = p => i[p].process(o)
      , l = () => {
        const p = performance.now();
        n = !1,
        o.delta = r ? 1e3 / 60 : Math.max(Math.min(p - o.timestamp, b2), 1),
        o.timestamp = p,
        o.isProcessing = !0,
        wo.forEach(s),
        o.isProcessing = !1,
        n && t && (r = !1,
        e(l))
    }
      , a = () => {
        n = !0,
        r = !0,
        o.isProcessing || e(l)
    }
    ;
    return {
        schedule: wo.reduce( (p, h) => {
            const y = i[h];
            return p[h] = (v, w=!1, _=!1) => (n || a(),
            y.schedule(v, w, _)),
            p
        }
        , {}),
        cancel: p => wo.forEach(h => i[h].cancel(p)),
        state: o,
        steps: i
    }
}
const {schedule: he, cancel: di, state: Dr, steps: u5} = U2(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ce, !0)
  , W2 = {
    useVisualState: sf({
        scrapeMotionValuesFromProps: of,
        createRenderState: ef,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            he.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            he.render( () => {
                _a(n, r, {
                    enableHardwareAcceleration: !1
                }, Ma(t.tagName), e.transformTemplate),
                rf(t, n)
            }
            )
        }
    })
}
  , Q2 = {
    useVisualState: sf({
        scrapeMotionValuesFromProps: za,
        createRenderState: Na
    })
};
function K2(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...ja(e) ? W2 : Q2,
        preloadedFeatures: n,
        useRender: R2(t),
        createVisualElement: r,
        Component: e
    }
}
function Gt(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const G2 = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function lf(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const Z2 = e => t => G2(t) && e(t, lf(t));
function Ro(e, t, n, r) {
    return Gt(e, t, Z2(n), r)
}
const Y2 = (e, t) => n => t(e(n))
  , Xt = (...e) => e.reduce(Y2);
function af(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const sc = af("dragHorizontal")
  , lc = af("dragVertical");
function q2(e) {
    let t = !1;
    if (e === "y")
        t = lc();
    else if (e === "x")
        t = sc();
    else {
        const n = sc()
          , r = lc();
        n && r ? t = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function uf() {
    const e = q2(!0);
    return e ? (e(),
    !1) : !0
}
class Qn {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function ac(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , o = (i, s) => {
        if (i.type === "touch" || uf())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
        l[r] && he.update( () => l[r](i, s))
    }
    ;
    return Ro(e.current, n, o, {
        passive: !e.getProps()[r]
    })
}
class X2 extends Qn {
    mount() {
        this.unmount = Xt(ac(this.node, !0), ac(this.node, !1))
    }
    unmount() {}
}
class J2 extends Qn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Xt(Gt(this.node.current, "focus", () => this.onFocus()), Gt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const cf = (e, t) => t ? e === t ? !0 : cf(e, t.parentElement) : !1;
function ms(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, lf(n))
}
class em extends Qn {
    constructor() {
        super(...arguments),
        this.removeStartListeners = ce,
        this.removeEndListeners = ce,
        this.removeAccessibleListeners = ce,
        this.startPointerPress = (t, n) => {
            if (this.removeEndListeners(),
            this.isPressing)
                return;
            const r = this.node.getProps()
              , i = Ro(window, "pointerup", (l, a) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: d} = this.node.getProps();
                he.update( () => {
                    cf(this.node.current, l.target) ? u && u(l, a) : d && d(l, a)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = Ro(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = Xt(i, s),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = () => {
            const t = i => {
                if (i.key !== "Enter" || this.isPressing)
                    return;
                const s = l => {
                    l.key !== "Enter" || !this.checkPressEnd() || ms("up", (a, u) => {
                        const {onTap: d} = this.node.getProps();
                        d && he.update( () => d(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = Gt(this.node.current, "keyup", s),
                ms("down", (l, a) => {
                    this.startPress(l, a)
                }
                )
            }
              , n = Gt(this.node.current, "keydown", t)
              , r = () => {
                this.isPressing && ms("cancel", (i, s) => this.cancelPress(i, s))
            }
              , o = Gt(this.node.current, "blur", r);
            this.removeAccessibleListeners = Xt(n, o)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: o} = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && he.update( () => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !uf()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && he.update( () => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = Ro(this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = Gt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Xt(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const vl = new WeakMap
  , gs = new WeakMap
  , tm = e => {
    const t = vl.get(e.target);
    t && t(e)
}
  , nm = e => {
    e.forEach(tm)
}
;
function rm({root: e, ...t}) {
    const n = e || document;
    gs.has(n) || gs.set(n, {});
    const r = gs.get(n)
      , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(nm,{
        root: e,
        ...t
    })),
    r[o]
}
function om(e, t, n) {
    const r = rm(t);
    return vl.set(e, n),
    r.observe(e),
    () => {
        vl.delete(e),
        r.unobserve(e)
    }
}
const im = {
    some: 0,
    all: 1
};
class sm extends Qn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: o="some", once: i} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : im[o]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            i && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: d, onViewportLeave: p} = this.node.getProps()
              , h = u ? d : p;
            h && h(a)
        }
        ;
        return om(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(lm(t, n)) && this.startObserver()
    }
    unmount() {}
}
function lm({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const am = {
    inView: {
        Feature: sm
    },
    tap: {
        Feature: em
    },
    focus: {
        Feature: J2
    },
    hover: {
        Feature: X2
    }
};
function df(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function um(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.get()),
    t
}
function cm(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.getVelocity()),
    t
}
function Ii(e, t, n) {
    const r = e.getProps();
    return Va(r, t, n !== void 0 ? n : r.custom, um(e), cm(e))
}
const dm = "framerAppearId"
  , fm = "data-" + La(dm);
let pm = ce
  , Aa = ce;
const Jt = e => e * 1e3
  , zt = e => e / 1e3
  , hm = {
    current: !1
}
  , ff = e => Array.isArray(e) && typeof e[0] == "number";
function pf(e) {
    return !!(!e || typeof e == "string" && hf[e] || ff(e) || Array.isArray(e) && e.every(pf))
}
const ar = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , hf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ar([0, .65, .55, 1]),
    circOut: ar([.55, 0, 1, .45]),
    backIn: ar([.31, .01, .66, -.59]),
    backOut: ar([.33, 1.53, .69, .99])
};
function mf(e) {
    if (e)
        return ff(e) ? ar(e) : Array.isArray(e) ? e.map(mf) : hf[e]
}
function mm(e, t, n, {delay: r=0, duration: o, repeat: i=0, repeatType: s="loop", ease: l, times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const d = mf(l);
    return Array.isArray(d) && (u.easing = d),
    e.animate(u, {
        delay: r,
        duration: o,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
function gm(e, {repeat: t, repeatType: n="loop"}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const gf = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , ym = 1e-7
  , vm = 12;
function xm(e, t, n, r, o) {
    let i, s, l = 0;
    do
        s = t + (n - t) / 2,
        i = gf(s, r, o) - e,
        i > 0 ? n = s : t = s;
    while (Math.abs(i) > ym && ++l < vm);
    return s
}
function qr(e, t, n, r) {
    if (e === t && n === r)
        return ce;
    const o = i => xm(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : gf(o(i), t, r)
}
const wm = qr(.42, 0, 1, 1)
  , Sm = qr(0, 0, .58, 1)
  , yf = qr(.42, 0, .58, 1)
  , km = e => Array.isArray(e) && typeof e[0] != "number"
  , vf = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , xf = e => t => 1 - e(1 - t)
  , wf = e => 1 - Math.sin(Math.acos(e))
  , Sf = xf(wf)
  , Cm = vf(Sf)
  , kf = qr(.33, 1.53, .69, .99)
  , Ra = xf(kf)
  , Pm = vf(Ra)
  , Tm = e => (e *= 2) < 1 ? .5 * Ra(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , jm = {
    linear: ce,
    easeIn: wm,
    easeInOut: yf,
    easeOut: Sm,
    circIn: wf,
    circInOut: Cm,
    circOut: Sf,
    backIn: Ra,
    backInOut: Pm,
    backOut: kf,
    anticipate: Tm
}
  , uc = e => {
    if (Array.isArray(e)) {
        Aa(e.length === 4);
        const [t,n,r,o] = e;
        return qr(t, n, r, o)
    } else if (typeof e == "string")
        return jm[e];
    return e
}
  , Fa = (e, t) => n => !!(Zr(n) && S2.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Cf = (e, t, n) => r => {
    if (!Zr(r))
        return r;
    const [o,i,s,l] = r.match(Oi);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(i),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , Em = e => Bn(0, 255, e)
  , ys = {
    ...un,
    transform: e => Math.round(Em(e))
}
  , Zt = {
    test: Fa("rgb", "red"),
    parse: Cf("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + ys.transform(e) + ", " + ys.transform(t) + ", " + ys.transform(n) + ", " + xr(vr.transform(r)) + ")"
};
function Nm(e) {
    let t = ""
      , n = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    o = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    o = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const xl = {
    test: Fa("#"),
    parse: Nm,
    transform: Zt.transform
}
  , jn = {
    test: Fa("hsl", "hue"),
    parse: Cf("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + Vn.transform(xr(t)) + ", " + Vn.transform(xr(n)) + ", " + xr(vr.transform(r)) + ")"
}
  , fe = {
    test: e => Zt.test(e) || xl.test(e) || jn.test(e),
    parse: e => Zt.test(e) ? Zt.parse(e) : jn.test(e) ? jn.parse(e) : xl.parse(e),
    transform: e => Zr(e) ? e : e.hasOwnProperty("red") ? Zt.transform(e) : jn.transform(e)
}
  , Di = (e, t, n) => -n * e + n * t + e;
function vs(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function _m({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , i = 0
      , s = 0;
    if (!t)
        o = i = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        o = vs(a, l, e + 1 / 3),
        i = vs(a, l, e),
        s = vs(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const xs = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
  , Mm = [xl, Zt, jn]
  , Lm = e => Mm.find(t => t.test(e));
function cc(e) {
    const t = Lm(e);
    let n = t.parse(e);
    return t === jn && (n = _m(n)),
    n
}
const Pf = (e, t) => {
    const n = cc(e)
      , r = cc(t)
      , o = {
        ...n
    };
    return i => (o.red = xs(n.red, r.red, i),
    o.green = xs(n.green, r.green, i),
    o.blue = xs(n.blue, r.blue, i),
    o.alpha = Di(n.alpha, r.alpha, i),
    Zt.transform(o))
}
;
function zm(e) {
    var t, n;
    return isNaN(e) && Zr(e) && (((t = e.match(Oi)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Y1)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Tf = {
    regex: x2,
    countKey: "Vars",
    token: "${v}",
    parse: ce
}
  , jf = {
    regex: Y1,
    countKey: "Colors",
    token: "${c}",
    parse: fe.parse
}
  , Ef = {
    regex: Oi,
    countKey: "Numbers",
    token: "${n}",
    parse: un.parse
};
function ws(e, {regex: t, countKey: n, token: r, parse: o}) {
    const i = e.tokenised.match(t);
    i && (e["num" + n] = i.length,
    e.tokenised = e.tokenised.replace(t, r),
    e.values.push(...i.map(o)))
}
function fi(e) {
    const t = e.toString()
      , n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && ws(n, Tf),
    ws(n, jf),
    ws(n, Ef),
    n
}
function Nf(e) {
    return fi(e).values
}
function _f(e) {
    const {values: t, numColors: n, numVars: r, tokenised: o} = fi(e)
      , i = t.length;
    return s => {
        let l = o;
        for (let a = 0; a < i; a++)
            a < r ? l = l.replace(Tf.token, s[a]) : a < r + n ? l = l.replace(jf.token, fe.transform(s[a])) : l = l.replace(Ef.token, xr(s[a]));
        return l
    }
}
const Vm = e => typeof e == "number" ? 0 : e;
function Am(e) {
    const t = Nf(e);
    return _f(e)(t.map(Vm))
}
const Kn = {
    test: zm,
    parse: Nf,
    createTransformer: _f,
    getAnimatableNone: Am
}
  , Mf = (e, t) => n => `${n > 0 ? t : e}`;
function Lf(e, t) {
    return typeof e == "number" ? n => Di(e, t, n) : fe.test(e) ? Pf(e, t) : e.startsWith("var(") ? Mf(e, t) : Vf(e, t)
}
const zf = (e, t) => {
    const n = [...e]
      , r = n.length
      , o = e.map( (i, s) => Lf(i, t[s]));
    return i => {
        for (let s = 0; s < r; s++)
            n[s] = o[s](i);
        return n
    }
}
  , Rm = (e, t) => {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = Lf(e[o], t[o]));
    return o => {
        for (const i in r)
            n[i] = r[i](o);
        return n
    }
}
  , Vf = (e, t) => {
    const n = Kn.createTransformer(t)
      , r = fi(e)
      , o = fi(t);
    return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? Xt(zf(r.values, o.values), n) : Mf(e, t)
}
  , Af = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , dc = (e, t) => n => Di(e, t, n);
function Fm(e) {
    return typeof e == "number" ? dc : typeof e == "string" ? fe.test(e) ? Pf : Vf : Array.isArray(e) ? zf : typeof e == "object" ? Rm : dc
}
function Om(e, t, n) {
    const r = []
      , o = n || Fm(e[0])
      , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let l = o(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || ce : t;
            l = Xt(a, l)
        }
        r.push(l)
    }
    return r
}
function Rf(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const i = e.length;
    if (Aa(i === t.length),
    i === 1)
        return () => t[0];
    e[0] > e[i - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const s = Om(t, r, o)
      , l = s.length
      , a = u => {
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(u < e[d + 1]); d++)
                ;
        const p = Af(e[d], e[d + 1], u);
        return s[d](p)
    }
    ;
    return n ? u => a(Bn(e[0], e[i - 1], u)) : a
}
function Im(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Af(0, t, r);
        e.push(Di(n, 1, o))
    }
}
function Dm(e) {
    const t = [0];
    return Im(t, e.length - 1),
    t
}
function $m(e, t) {
    return e.map(n => n * t)
}
function Bm(e, t) {
    return e.map( () => t || yf).splice(0, e.length - 1)
}
function pi({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const o = km(r) ? r.map(uc) : uc(r)
      , i = {
        done: !1,
        value: t[0]
    }
      , s = $m(n && n.length === t.length ? n : Dm(t), e)
      , l = Rf(s, t, {
        ease: Array.isArray(o) ? o : Bm(t, o)
    });
    return {
        calculatedDuration: e,
        next: a => (i.value = l(a),
        i.done = a >= e,
        i)
    }
}
function Ff(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Hm = 5;
function Of(e, t, n) {
    const r = Math.max(t - Hm, 0);
    return Ff(n - e(r), t - r)
}
const Ss = .001
  , bm = .01
  , fc = 10
  , Um = .05
  , Wm = 1;
function Qm({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let o, i;
    pm(e <= Jt(fc));
    let s = 1 - t;
    s = Bn(Um, Wm, s),
    e = Bn(bm, fc, zt(e)),
    s < 1 ? (o = u => {
        const d = u * s
          , p = d * e
          , h = d - n
          , y = wl(u, s)
          , v = Math.exp(-p);
        return Ss - h / y * v
    }
    ,
    i = u => {
        const p = u * s * e
          , h = p * n + n
          , y = Math.pow(s, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-p)
          , w = wl(Math.pow(u, 2), s);
        return (-o(u) + Ss > 0 ? -1 : 1) * ((h - y) * v) / w
    }
    ) : (o = u => {
        const d = Math.exp(-u * e)
          , p = (u - n) * e + 1;
        return -Ss + d * p
    }
    ,
    i = u => {
        const d = Math.exp(-u * e)
          , p = (n - u) * (e * e);
        return d * p
    }
    );
    const l = 5 / e
      , a = Gm(o, i, l);
    if (e = Jt(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const Km = 12;
function Gm(e, t, n) {
    let r = n;
    for (let o = 1; o < Km; o++)
        r = r - e(r) / t(r);
    return r
}
function wl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Zm = ["duration", "bounce"]
  , Ym = ["stiffness", "damping", "mass"];
function pc(e, t) {
    return t.some(n => e[n] !== void 0)
}
function qm(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!pc(e, Ym) && pc(e, Zm)) {
        const n = Qm(e);
        t = {
            ...t,
            ...n,
            velocity: 0,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function If({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const o = e[0]
      , i = e[e.length - 1]
      , s = {
        done: !1,
        value: o
    }
      , {stiffness: l, damping: a, mass: u, velocity: d, duration: p, isResolvedFromDuration: h} = qm(r)
      , y = d ? -zt(d) : 0
      , v = a / (2 * Math.sqrt(l * u))
      , w = i - o
      , _ = zt(Math.sqrt(l / u))
      , g = Math.abs(w) < 5;
    n || (n = g ? .01 : 2),
    t || (t = g ? .005 : .5);
    let f;
    if (v < 1) {
        const m = wl(_, v);
        f = x => {
            const S = Math.exp(-v * _ * x);
            return i - S * ((y + v * _ * w) / m * Math.sin(m * x) + w * Math.cos(m * x))
        }
    } else if (v === 1)
        f = m => i - Math.exp(-_ * m) * (w + (y + _ * w) * m);
    else {
        const m = _ * Math.sqrt(v * v - 1);
        f = x => {
            const S = Math.exp(-v * _ * x)
              , j = Math.min(m * x, 300);
            return i - S * ((y + v * _ * w) * Math.sinh(j) + m * w * Math.cosh(j)) / m
        }
    }
    return {
        calculatedDuration: h && p || null,
        next: m => {
            const x = f(m);
            if (h)
                s.done = m >= p;
            else {
                let S = y;
                m !== 0 && (v < 1 ? S = Of(f, m, x) : S = 0);
                const j = Math.abs(S) <= n
                  , T = Math.abs(i - x) <= t;
                s.done = j && T
            }
            return s.value = s.done ? i : x,
            s
        }
    }
}
function hc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: i=500, modifyTarget: s, min: l, max: a, restDelta: u=.5, restSpeed: d}) {
    const p = e[0]
      , h = {
        done: !1,
        value: p
    }
      , y = C => l !== void 0 && C < l || a !== void 0 && C > a
      , v = C => l === void 0 ? a : a === void 0 || Math.abs(l - C) < Math.abs(a - C) ? l : a;
    let w = n * t;
    const _ = p + w
      , g = s === void 0 ? _ : s(_);
    g !== _ && (w = g - p);
    const f = C => -w * Math.exp(-C / r)
      , m = C => g + f(C)
      , x = C => {
        const V = f(C)
          , L = m(C);
        h.done = Math.abs(V) <= u,
        h.value = h.done ? g : L
    }
    ;
    let S, j;
    const T = C => {
        y(h.value) && (S = C,
        j = If({
            keyframes: [h.value, v(h.value)],
            velocity: Of(m, C, h.value),
            damping: o,
            stiffness: i,
            restDelta: u,
            restSpeed: d
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: C => {
            let V = !1;
            return !j && S === void 0 && (V = !0,
            x(C),
            T(C)),
            S !== void 0 && C > S ? j.next(C - S) : (!V && x(C),
            h)
        }
    }
}
const Xm = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => he.update(t, !0),
        stop: () => di(t),
        now: () => Dr.isProcessing ? Dr.timestamp : performance.now()
    }
}
  , mc = 2e4;
function gc(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < mc; )
        t += n,
        r = e.next(t);
    return t >= mc ? 1 / 0 : t
}
const Jm = {
    decay: hc,
    inertia: hc,
    tween: pi,
    keyframes: pi,
    spring: If
};
function hi({autoplay: e=!0, delay: t=0, driver: n=Xm, keyframes: r, type: o="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: l="loop", onPlay: a, onStop: u, onComplete: d, onUpdate: p, ...h}) {
    let y = 1, v = !1, w, _;
    const g = () => {
        _ = new Promise(z => {
            w = z
        }
        )
    }
    ;
    g();
    let f;
    const m = Jm[o] || pi;
    let x;
    m !== pi && typeof r[0] != "number" && (x = Rf([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const S = m({
        ...h,
        keyframes: r
    });
    let j;
    l === "mirror" && (j = m({
        ...h,
        keyframes: [...r].reverse(),
        velocity: -(h.velocity || 0)
    }));
    let T = "idle"
      , C = null
      , V = null
      , L = null;
    S.calculatedDuration === null && i && (S.calculatedDuration = gc(S));
    const {calculatedDuration: Z} = S;
    let xe = 1 / 0
      , we = 1 / 0;
    Z !== null && (xe = Z + s,
    we = xe * (i + 1) - s);
    let Y = 0;
    const q = z => {
        if (V === null)
            return;
        y > 0 && (V = Math.min(V, z)),
        y < 0 && (V = Math.min(z - we / y, V)),
        C !== null ? Y = C : Y = Math.round(z - V) * y;
        const b = Y - t * (y >= 0 ? 1 : -1)
          , Dt = y >= 0 ? b < 0 : b > we;
        Y = Math.max(b, 0),
        T === "finished" && C === null && (Y = we);
        let qe = Y
          , fn = S;
        if (i) {
            const Hi = Y / xe;
            let eo = Math.floor(Hi)
              , Bt = Hi % 1;
            !Bt && Hi >= 1 && (Bt = 1),
            Bt === 1 && eo--,
            eo = Math.min(eo, i + 1);
            const ba = !!(eo % 2);
            ba && (l === "reverse" ? (Bt = 1 - Bt,
            s && (Bt -= s / xe)) : l === "mirror" && (fn = j));
            let Ua = Bn(0, 1, Bt);
            Y > we && (Ua = l === "reverse" && ba ? 1 : 0),
            qe = Ua * xe
        }
        const je = Dt ? {
            done: !1,
            value: r[0]
        } : fn.next(qe);
        x && (je.value = x(je.value));
        let {done: $t} = je;
        !Dt && Z !== null && ($t = y >= 0 ? Y >= we : Y <= 0);
        const M0 = C === null && (T === "finished" || T === "running" && $t);
        return p && p(je.value),
        M0 && E(),
        je
    }
      , Fe = () => {
        f && f.stop(),
        f = void 0
    }
      , Ye = () => {
        T = "idle",
        Fe(),
        w(),
        g(),
        V = L = null
    }
      , E = () => {
        T = "finished",
        d && d(),
        Fe(),
        w()
    }
      , A = () => {
        if (v)
            return;
        f || (f = n(q));
        const z = f.now();
        a && a(),
        C !== null ? V = z - C : (!V || T === "finished") && (V = z),
        T === "finished" && g(),
        L = V,
        C = null,
        T = "running",
        f.start()
    }
    ;
    e && A();
    const R = {
        then(z, b) {
            return _.then(z, b)
        },
        get time() {
            return zt(Y)
        },
        set time(z) {
            z = Jt(z),
            Y = z,
            C !== null || !f || y === 0 ? C = z : V = f.now() - z / y
        },
        get duration() {
            const z = S.calculatedDuration === null ? gc(S) : S.calculatedDuration;
            return zt(z)
        },
        get speed() {
            return y
        },
        set speed(z) {
            z === y || !f || (y = z,
            R.time = zt(Y))
        },
        get state() {
            return T
        },
        play: A,
        pause: () => {
            T = "paused",
            C = Y
        }
        ,
        stop: () => {
            v = !0,
            T !== "idle" && (T = "idle",
            u && u(),
            Ye())
        }
        ,
        cancel: () => {
            L !== null && q(L),
            Ye()
        }
        ,
        complete: () => {
            T = "finished"
        }
        ,
        sample: z => (V = 0,
        q(z))
    };
    return R
}
function e3(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const t3 = e3( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , n3 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , So = 10
  , r3 = 2e4
  , o3 = (e, t) => t.type === "spring" || e === "backgroundColor" || !pf(t.ease);
function i3(e, t, {onUpdate: n, onComplete: r, ...o}) {
    if (!(t3() && n3.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
        return !1;
    let s = !1, l, a;
    const u = () => {
        a = new Promise(f => {
            l = f
        }
        )
    }
    ;
    u();
    let {keyframes: d, duration: p=300, ease: h, times: y} = o;
    if (o3(t, o)) {
        const f = hi({
            ...o,
            repeat: 0,
            delay: 0
        });
        let m = {
            done: !1,
            value: d[0]
        };
        const x = [];
        let S = 0;
        for (; !m.done && S < r3; )
            m = f.sample(S),
            x.push(m.value),
            S += So;
        y = void 0,
        d = x,
        p = S - So,
        h = "linear"
    }
    const v = mm(e.owner.current, t, d, {
        ...o,
        duration: p,
        ease: h,
        times: y
    });
    o.syncStart && (v.startTime = Dr.isProcessing ? Dr.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const w = () => v.cancel()
      , _ = () => {
        he.update(w),
        l(),
        u()
    }
    ;
    return v.onfinish = () => {
        e.set(gm(d, o)),
        r && r(),
        _()
    }
    ,
    {
        then(f, m) {
            return a.then(f, m)
        },
        attachTimeline(f) {
            return v.timeline = f,
            v.onfinish = null,
            ce
        },
        get time() {
            return zt(v.currentTime || 0)
        },
        set time(f) {
            v.currentTime = Jt(f)
        },
        get speed() {
            return v.playbackRate
        },
        set speed(f) {
            v.playbackRate = f
        },
        get duration() {
            return zt(p)
        },
        play: () => {
            s || (v.play(),
            di(w))
        }
        ,
        pause: () => v.pause(),
        stop: () => {
            if (s = !0,
            v.playState === "idle")
                return;
            const {currentTime: f} = v;
            if (f) {
                const m = hi({
                    ...o,
                    autoplay: !1
                });
                e.setWithVelocity(m.sample(f - So).value, m.sample(f).value, So)
            }
            _()
        }
        ,
        complete: () => v.finish(),
        cancel: _
    }
}
function s3({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    const o = () => (n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ce,
        pause: ce,
        stop: ce,
        then: i => (i(),
        Promise.resolve()),
        cancel: ce,
        complete: ce
    });
    return t ? hi({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: o
    }) : o()
}
const l3 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , a3 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , u3 = {
    type: "keyframes",
    duration: .8
}
  , c3 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , d3 = (e, {keyframes: t}) => t.length > 2 ? u3 : an.has(e) ? e.startsWith("scale") ? a3(t[1]) : l3 : c3
  , Sl = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Kn.test(t) || t === "0") && !t.startsWith("url("))
  , f3 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function p3(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Oi) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = f3.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
    t + "(" + i + o + ")"
}
const h3 = /([a-z-]*)\(.*?\)/g
  , kl = {
    ...Kn,
    getAnimatableNone: e => {
        const t = e.match(h3);
        return t ? t.map(p3).join(" ") : e
    }
}
  , m3 = {
    ...q1,
    color: fe,
    backgroundColor: fe,
    outlineColor: fe,
    fill: fe,
    stroke: fe,
    borderColor: fe,
    borderTopColor: fe,
    borderRightColor: fe,
    borderBottomColor: fe,
    borderLeftColor: fe,
    filter: kl,
    WebkitFilter: kl
}
  , Oa = e => m3[e];
function Df(e, t) {
    let n = Oa(e);
    return n !== kl && (n = Kn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const $f = e => /^0[^.\s]+$/.test(e);
function g3(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || $f(e)
}
function y3(e, t, n, r) {
    const o = Sl(t, n);
    let i;
    Array.isArray(n) ? i = [...n] : i = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let l;
    const a = [];
    for (let u = 0; u < i.length; u++)
        i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
        g3(i[u]) && a.push(u),
        typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (l = i[u]);
    if (o && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const d = a[u];
            i[d] = Df(t, l)
        }
    return i
}
function v3({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...d}) {
    return !!Object.keys(d).length
}
function x3(e, t) {
    return e[t] || e.default || e
}
const w3 = (e, t, n, r={}) => o => {
    const i = x3(r, e) || {}
      , s = i.delay || r.delay || 0;
    let {elapsed: l=0} = r;
    l = l - Jt(s);
    const a = y3(t, e, n, i)
      , u = a[0]
      , d = a[a.length - 1]
      , p = Sl(e, u)
      , h = Sl(e, d);
    let y = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...i,
        delay: -l,
        onUpdate: v => {
            t.set(v),
            i.onUpdate && i.onUpdate(v)
        }
        ,
        onComplete: () => {
            o(),
            i.onComplete && i.onComplete()
        }
    };
    if (v3(i) || (y = {
        ...y,
        ...d3(e, y)
    }),
    y.duration && (y.duration = Jt(y.duration)),
    y.repeatDelay && (y.repeatDelay = Jt(y.repeatDelay)),
    !p || !h || hm.current || i.type === !1)
        return s3(y);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const v = i3(t, e, y);
        if (v)
            return v
    }
    return hi(y)
}
;
function mi(e) {
    return !!(Ve(e) && e.add)
}
const Bf = e => /^\-?\d*\.?\d+$/.test(e);
function S3(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function k3(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Hf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return S3(this.subscriptions, t),
        () => k3(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const C3 = e => !isNaN(parseFloat(e));
class P3 {
    constructor(t, n={}) {
        this.version = "10.16.4",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r, o=!0) => {
            this.prev = this.current,
            this.current = r;
            const {delta: i, timestamp: s} = Dr;
            this.lastUpdated !== s && (this.timeDelta = i,
            this.lastUpdated = s,
            he.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => he.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r}) => {
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = C3(this.current),
        this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Hf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            he.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = t,
        this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Ff(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function $r(e, t) {
    return new P3(e,t)
}
const bf = e => t => t.test(e)
  , T3 = {
    test: e => e === "auto",
    parse: e => e
}
  , Uf = [un, M, Vn, gt, C2, k2, T3]
  , rr = e => Uf.find(bf(e))
  , j3 = [...Uf, fe, Kn]
  , E3 = e => j3.find(bf(e));
function N3(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $r(n))
}
function _3(e, t) {
    const n = Ii(e, t);
    let {transitionEnd: r={}, transition: o={}, ...i} = n ? e.makeTargetAnimatable(n, !1) : {};
    i = {
        ...i,
        ...r
    };
    for (const s in i) {
        const l = I2(i[s]);
        N3(e, s, l)
    }
}
function M3(e, t, n) {
    var r, o;
    const i = Object.keys(t).filter(l => !e.hasValue(l))
      , s = i.length;
    if (s)
        for (let l = 0; l < s; l++) {
            const a = i[l]
              , u = t[a];
            let d = null;
            Array.isArray(u) && (d = u[0]),
            d === null && (d = (o = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && o !== void 0 ? o : t[a]),
            d != null && (typeof d == "string" && (Bf(d) || $f(d)) ? d = parseFloat(d) : !E3(d) && Kn.test(u) && (d = Df(a, u)),
            e.addValue(a, $r(d, {
                owner: e
            })),
            n[a] === void 0 && (n[a] = d),
            d !== null && e.setBaseTarget(a, d))
        }
}
function L3(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function z3(e, t, n) {
    const r = {};
    for (const o in e) {
        const i = L3(o, t);
        if (i !== void 0)
            r[o] = i;
        else {
            const s = n.getValue(o);
            s && (r[o] = s.get())
        }
    }
    return r
}
function V3({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Wf(e, t, {delay: n=0, transitionOverride: r, type: o}={}) {
    let {transition: i=e.getDefaultTransition(), transitionEnd: s, ...l} = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (i = r);
    const u = []
      , d = o && e.animationState && e.animationState.getState()[o];
    for (const p in l) {
        const h = e.getValue(p)
          , y = l[p];
        if (!h || y === void 0 || d && V3(d, p))
            continue;
        const v = {
            delay: n,
            elapsed: 0,
            ...i
        };
        if (window.HandoffAppearAnimations && !h.hasAnimated) {
            const _ = e.getProps()[fm];
            _ && (v.elapsed = window.HandoffAppearAnimations(_, p, h, he),
            v.syncStart = !0)
        }
        h.start(w3(p, h, y, e.shouldReduceMotion && an.has(p) ? {
            type: !1
        } : v));
        const w = h.animation;
        mi(a) && (a.add(p),
        w.then( () => a.remove(p))),
        u.push(w)
    }
    return s && Promise.all(u).then( () => {
        s && _3(e, s)
    }
    ),
    u
}
function Cl(e, t, n={}) {
    const r = Ii(e, t, n.custom);
    let {transition: o=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(Wf(e, r, n)) : () => Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (a=0) => {
        const {delayChildren: u=0, staggerChildren: d, staggerDirection: p} = o;
        return A3(e, t, u + a, d, p, n)
    }
    : () => Promise.resolve()
      , {when: l} = o;
    if (l) {
        const [a,u] = l === "beforeChildren" ? [i, s] : [s, i];
        return a().then( () => u())
    } else
        return Promise.all([i(), s(n.delay)])
}
function A3(e, t, n=0, r=0, o=1, i) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = o === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(R3).forEach( (u, d) => {
        u.notify("AnimationStart", t),
        s.push(Cl(u, t, {
            ...i,
            delay: n + a(d)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function R3(e, t) {
    return e.sortNodePosition(t)
}
function F3(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => Cl(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = Cl(e, t, n);
    else {
        const o = typeof t == "function" ? Ii(e, t, n.custom) : t;
        r = Promise.all(Wf(e, o, n))
    }
    return r.then( () => e.notify("AnimationComplete", t))
}
const O3 = [...Pa].reverse()
  , I3 = Pa.length;
function D3(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => F3(e, n, r)))
}
function $3(e) {
    let t = D3(e);
    const n = H3();
    let r = !0;
    const o = (a, u) => {
        const d = Ii(e, u);
        if (d) {
            const {transition: p, transitionEnd: h, ...y} = d;
            a = {
                ...a,
                ...y,
                ...h
            }
        }
        return a
    }
    ;
    function i(a) {
        t = a(e)
    }
    function s(a, u) {
        const d = e.getProps()
          , p = e.getVariantContext(!0) || {}
          , h = []
          , y = new Set;
        let v = {}
          , w = 1 / 0;
        for (let g = 0; g < I3; g++) {
            const f = O3[g]
              , m = n[f]
              , x = d[f] !== void 0 ? d[f] : p[f]
              , S = Or(x)
              , j = f === u ? m.isActive : null;
            j === !1 && (w = g);
            let T = x === p[f] && x !== d[f] && S;
            if (T && r && e.manuallyAnimateOnMount && (T = !1),
            m.protectedKeys = {
                ...v
            },
            !m.isActive && j === null || !x && !m.prevProp || Ri(x) || typeof x == "boolean")
                continue;
            const C = B3(m.prevProp, x);
            let V = C || f === u && m.isActive && !T && S || g > w && S;
            const L = Array.isArray(x) ? x : [x];
            let Z = L.reduce(o, {});
            j === !1 && (Z = {});
            const {prevResolvedValues: xe={}} = m
              , we = {
                ...xe,
                ...Z
            }
              , Y = q => {
                V = !0,
                y.delete(q),
                m.needsAnimating[q] = !0
            }
            ;
            for (const q in we) {
                const Fe = Z[q]
                  , Ye = xe[q];
                v.hasOwnProperty(q) || (Fe !== Ye ? ci(Fe) && ci(Ye) ? !df(Fe, Ye) || C ? Y(q) : m.protectedKeys[q] = !0 : Fe !== void 0 ? Y(q) : y.add(q) : Fe !== void 0 && y.has(q) ? Y(q) : m.protectedKeys[q] = !0)
            }
            m.prevProp = x,
            m.prevResolvedValues = Z,
            m.isActive && (v = {
                ...v,
                ...Z
            }),
            r && e.blockInitialAnimation && (V = !1),
            V && !T && h.push(...L.map(q => ({
                animation: q,
                options: {
                    type: f,
                    ...a
                }
            })))
        }
        if (y.size) {
            const g = {};
            y.forEach(f => {
                const m = e.getBaseTarget(f);
                m !== void 0 && (g[f] = m)
            }
            ),
            h.push({
                animation: g
            })
        }
        let _ = !!h.length;
        return r && d.initial === !1 && !e.manuallyAnimateOnMount && (_ = !1),
        r = !1,
        _ ? t(h) : Promise.resolve()
    }
    function l(a, u, d) {
        var p;
        if (n[a].isActive === u)
            return Promise.resolve();
        (p = e.variantChildren) === null || p === void 0 || p.forEach(y => {
            var v;
            return (v = y.animationState) === null || v === void 0 ? void 0 : v.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const h = s(d, a);
        for (const y in n)
            n[y].protectedKeys = {};
        return h
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: i,
        getState: () => n
    }
}
function B3(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !df(t, e) : !1
}
function Ht(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function H3() {
    return {
        animate: Ht(!0),
        whileInView: Ht(),
        whileHover: Ht(),
        whileTap: Ht(),
        whileDrag: Ht(),
        whileFocus: Ht(),
        exit: Ht()
    }
}
class b3 extends Qn {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = $3(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        Ri(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let U3 = 0;
class W3 extends Qn {
    constructor() {
        super(...arguments),
        this.id = U3++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o)
            return;
        const i = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const Q3 = {
    animation: {
        Feature: b3
    },
    exit: {
        Feature: W3
    }
}
  , yc = () => ({
    min: 0,
    max: 0
})
  , Qf = () => ({
    x: yc(),
    y: yc()
});
function K3({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function G3(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Z3(e, t) {
    return K3(G3(e.getBoundingClientRect(), t))
}
const Y3 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function q3(e) {
    const t = Y3.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function Pl(e, t, n=1) {
    const [r,o] = q3(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return Bf(s) ? parseFloat(s) : s
    } else
        return yl(o) ? Pl(o, t, n + 1) : o
}
function X3(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(o => {
        const i = o.get();
        if (!yl(i))
            return;
        const s = Pl(i, r);
        s && o.set(s)
    }
    );
    for (const o in t) {
        const i = t[o];
        if (!yl(i))
            continue;
        const s = Pl(i, r);
        s && (t[o] = s,
        n || (n = {}),
        n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const J3 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Kf = e => J3.has(e)
  , eg = e => Object.keys(e).some(Kf)
  , vc = e => e === un || e === M
  , xc = (e, t) => parseFloat(e.split(", ")[t])
  , wc = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const o = r.match(/^matrix3d\((.+)\)$/);
    if (o)
        return xc(o[1], t);
    {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? xc(i[1], e) : 0
    }
}
  , tg = new Set(["x", "y", "z"])
  , ng = Gr.filter(e => !tg.has(e));
function rg(e) {
    const t = [];
    return ng.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
const Hn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: wc(4, 13),
    y: wc(5, 14)
};
Hn.translateX = Hn.x;
Hn.translateY = Hn.y;
const og = (e, t, n) => {
    const r = t.measureViewportBox()
      , o = t.current
      , i = getComputedStyle(o)
      , {display: s} = i
      , l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(u => {
        l[u] = Hn[u](r, i)
    }
    ),
    t.render();
    const a = t.measureViewportBox();
    return n.forEach(u => {
        const d = t.getValue(u);
        d && d.jump(l[u]),
        e[u] = Hn[u](a, i)
    }
    ),
    e
}
  , ig = (e, t, n={}, r={}) => {
    t = {
        ...t
    },
    r = {
        ...r
    };
    const o = Object.keys(t).filter(Kf);
    let i = []
      , s = !1;
    const l = [];
    if (o.forEach(a => {
        const u = e.getValue(a);
        if (!e.hasValue(a))
            return;
        let d = n[a]
          , p = rr(d);
        const h = t[a];
        let y;
        if (ci(h)) {
            const v = h.length
              , w = h[0] === null ? 1 : 0;
            d = h[w],
            p = rr(d);
            for (let _ = w; _ < v && h[_] !== null; _++)
                y ? Aa(rr(h[_]) === y) : y = rr(h[_])
        } else
            y = rr(h);
        if (p !== y)
            if (vc(p) && vc(y)) {
                const v = u.get();
                typeof v == "string" && u.set(parseFloat(v)),
                typeof h == "string" ? t[a] = parseFloat(h) : Array.isArray(h) && y === M && (t[a] = h.map(parseFloat))
            } else
                p != null && p.transform && (y != null && y.transform) && (d === 0 || h === 0) ? d === 0 ? u.set(y.transform(d)) : t[a] = p.transform(h) : (s || (i = rg(e),
                s = !0),
                l.push(a),
                r[a] = r[a] !== void 0 ? r[a] : t[a],
                u.jump(h))
    }
    ),
    l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = og(t, e, l);
        return i.length && i.forEach( ([d,p]) => {
            e.getValue(d).set(p)
        }
        ),
        e.render(),
        Ai && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function sg(e, t, n, r) {
    return eg(t) ? ig(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const lg = (e, t, n, r) => {
    const o = X3(e, t, r);
    return t = o.target,
    r = o.transitionEnd,
    sg(e, t, n, r)
}
  , Tl = {
    current: null
}
  , Gf = {
    current: !1
};
function ag() {
    if (Gf.current = !0,
    !!Ai)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Tl.current = e.matches;
            e.addListener(t),
            t()
        } else
            Tl.current = !1
}
function ug(e, t, n) {
    const {willChange: r} = t;
    for (const o in t) {
        const i = t[o]
          , s = n[o];
        if (Ve(i))
            e.addValue(o, i),
            mi(r) && r.add(o);
        else if (Ve(s))
            e.addValue(o, $r(i, {
                owner: e
            })),
            mi(r) && r.remove(o);
        else if (s !== i)
            if (e.hasValue(o)) {
                const l = e.getValue(o);
                !l.hasAnimated && l.set(i)
            } else {
                const l = e.getStaticValue(o);
                e.addValue(o, $r(l !== void 0 ? l : i, {
                    owner: e
                }))
            }
    }
    for (const o in n)
        t[o] === void 0 && e.removeValue(o);
    return t
}
const Sc = new WeakMap
  , Zf = Object.keys(Ir)
  , cg = Zf.length
  , kc = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , dg = Ta.length;
class fg {
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i}, s={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => he.render(this.render, !1, !0);
        const {latestValues: l, renderState: a} = i;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = a,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = s,
        this.isControllingVariants = Fi(n),
        this.isVariantNode = Q1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: u, ...d} = this.scrapeMotionValuesFromProps(n, {});
        for (const p in d) {
            const h = d[p];
            l[p] !== void 0 && Ve(h) && (h.set(l[p], !1),
            mi(u) && u.add(p))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
        Sc.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        Gf.current || ag(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Tl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Sc.delete(this.current),
        this.projection && this.projection.unmount(),
        di(this.notifyUpdate),
        di(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = an.has(t)
          , o = n.on("change", s => {
            this.latestValues[t] = s,
            this.props.onUpdate && he.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            o(),
            i()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, o, i) {
        let s, l;
        for (let a = 0; a < cg; a++) {
            const u = Zf[a]
              , {isEnabled: d, Feature: p, ProjectionNode: h, MeasureLayout: y} = Ir[u];
            h && (s = h),
            d(n) && (!this.features[u] && p && (this.features[u] = new p(this)),
            y && (l = y))
        }
        if (!this.projection && s) {
            this.projection = new s(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: a, layout: u, drag: d, dragConstraints: p, layoutScroll: h, layoutRoot: y} = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!d || p && W1(p),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: i,
                layoutScroll: h,
                layoutRoot: y
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Qf()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n=!0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < kc.length; r++) {
            const o = kc[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const i = t["on" + o];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = ug(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < dg; r++) {
            const o = Ta[r]
              , i = this.props[o];
            (Or(i) || i === !1) && (n[o] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = $r(n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props
          , o = typeof r == "string" || typeof r == "object" ? (n = Va(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && o !== void 0)
            return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Ve(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Hf),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Yf extends fg {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: o}, i) {
        let s = z3(r, t || {}, this);
        if (o && (n && (n = o(n)),
        r && (r = o(r)),
        s && (s = o(s))),
        i) {
            M3(this, r, s);
            const l = lg(this, r, s, n);
            n = l.transitionEnd,
            r = l.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function pg(e) {
    return window.getComputedStyle(e)
}
class hg extends Yf {
    readValueFromInstance(t, n) {
        if (an.has(n)) {
            const r = Oa(n);
            return r && r.default || 0
        } else {
            const r = pg(t)
              , o = (Z1(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return Z3(t, n)
    }
    build(t, n, r, o) {
        Ea(t, n, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return za(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ve(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, o) {
        tf(t, n, r, o)
    }
}
class mg extends Yf {
    constructor() {
        super(...arguments),
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (an.has(n)) {
            const r = Oa(n);
            return r && r.default || 0
        }
        return n = nf.has(n) ? n : La(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return Qf()
    }
    scrapeMotionValuesFromProps(t, n) {
        return of(t, n)
    }
    build(t, n, r, o) {
        _a(t, n, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        rf(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = Ma(t.tagName),
        super.mount(t)
    }
}
const gg = (e, t) => ja(e) ? new mg(t,{
    enableHardwareAcceleration: !1
}) : new hg(t,{
    enableHardwareAcceleration: !0
})
  , cn = p2(K2);
function yg({children: e, features: t, strict: n=!1}) {
    const [,r] = P.useState(!ks(t))
      , o = P.useRef(void 0);
    if (!ks(t)) {
        const {renderer: i, ...s} = t;
        o.current = i,
        gl(s)
    }
    return P.useEffect( () => {
        ks(t) && t().then( ({renderer: i, ...s}) => {
            gl(s),
            o.current = i,
            r(!0)
        }
        )
    }
    , []),
    P.createElement(Ca.Provider, {
        value: {
            renderer: o.current,
            strict: n
        }
    }, e)
}
function ks(e) {
    return typeof e == "function"
}
const vg = {
    renderer: gg,
    ...Q3,
    ...am
};
let xg = {
    data: ""
}
  , wg = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
})).firstChild : e || xg
  , Sg = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
  , kg = /\/\*[^]*?\*\/|  +/g
  , Cc = /\n+/g
  , St = (e, t) => {
    let n = ""
      , r = ""
      , o = "";
    for (let i in e) {
        let s = e[i];
        i[0] == "@" ? i[1] == "i" ? n = i + " " + s + ";" : r += i[1] == "f" ? St(s, i) : i + "{" + St(s, i[1] == "k" ? "" : t) + "}" : typeof s == "object" ? r += St(s, t ? t.replace(/([^,])+/g, l => i.replace(/(^:.*)|([^,])+/g, a => /&/.test(a) ? a.replace(/&/g, l) : l ? l + " " + a : a)) : i) : s != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(),
        o += St.p ? St.p(i, s) : i + ":" + s + ";")
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r
}
  , rt = {}
  , qf = e => {
    if (typeof e == "object") {
        let t = "";
        for (let n in e)
            t += n + qf(e[n]);
        return t
    }
    return e
}
  , Cg = (e, t, n, r, o) => {
    let i = qf(e)
      , s = rt[i] || (rt[i] = (a => {
        let u = 0
          , d = 11;
        for (; u < a.length; )
            d = 101 * d + a.charCodeAt(u++) >>> 0;
        return "go" + d
    }
    )(i));
    if (!rt[s]) {
        let a = i !== e ? e : (u => {
            let d, p, h = [{}];
            for (; d = Sg.exec(u.replace(kg, "")); )
                d[4] ? h.shift() : d[3] ? (p = d[3].replace(Cc, " ").trim(),
                h.unshift(h[0][p] = h[0][p] || {})) : h[0][d[1]] = d[2].replace(Cc, " ").trim();
            return h[0]
        }
        )(e);
        rt[s] = St(o ? {
            ["@keyframes " + s]: a
        } : a, n ? "" : "." + s)
    }
    let l = n && rt.g ? rt.g : null;
    return n && (rt.g = rt[s]),
    ( (a, u, d, p) => {
        p ? u.data = u.data.replace(p, a) : u.data.indexOf(a) === -1 && (u.data = d ? a + u.data : u.data + a)
    }
    )(rt[s], t, r, l),
    s
}
  , Pg = (e, t, n) => e.reduce( (r, o, i) => {
    let s = t[i];
    if (s && s.call) {
        let l = s(n)
          , a = l && l.props && l.props.className || /^go/.test(l) && l;
        s = a ? "." + a : l && typeof l == "object" ? l.props ? "" : St(l, "") : l === !1 ? "" : l
    }
    return r + o + (s ?? "")
}
, "");
function $i(e) {
    let t = this || {}
      , n = e.call ? e(t.p) : e;
    return Cg(n.unshift ? n.raw ? Pg(n, [].slice.call(arguments, 1), t.p) : n.reduce( (r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, wg(t.target), t.g, t.o, t.k)
}
let Xf, jl, El;
$i.bind({
    g: 1
});
let pt = $i.bind({
    k: 1
});
function Tg(e, t, n, r) {
    St.p = t,
    Xf = e,
    jl = n,
    El = r
}
function It(e, t) {
    let n = this || {};
    return function() {
        let r = arguments;
        function o(i, s) {
            let l = Object.assign({}, i)
              , a = l.className || o.className;
            n.p = Object.assign({
                theme: jl && jl()
            }, l),
            n.o = / *go\d+/.test(a),
            l.className = $i.apply(n, r) + (a ? " " + a : ""),
            t && (l.ref = s);
            let u = e;
            return e[0] && (u = l.as || e,
            delete l.as),
            El && u[0] && El(l),
            Xf(u, l)
        }
        return t ? t(o) : o
    }
}
var jg = e => typeof e == "function"
  , gi = (e, t) => jg(e) ? e(t) : e
  , Eg = ( () => {
    let e = 0;
    return () => (++e).toString()
}
)()
  , Jf = ( () => {
    let e;
    return () => {
        if (e === void 0 && typeof window < "u") {
            let t = matchMedia("(prefers-reduced-motion: reduce)");
            e = !t || t.matches
        }
        return e
    }
}
)()
  , Ng = 20
  , Fo = new Map
  , _g = 1e3
  , Pc = e => {
    if (Fo.has(e))
        return;
    let t = setTimeout( () => {
        Fo.delete(e),
        dn({
            type: 4,
            toastId: e
        })
    }
    , _g);
    Fo.set(e, t)
}
  , Mg = e => {
    let t = Fo.get(e);
    t && clearTimeout(t)
}
  , Nl = (e, t) => {
    switch (t.type) {
    case 0:
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Ng)
        };
    case 1:
        return t.toast.id && Mg(t.toast.id),
        {
            ...e,
            toasts: e.toasts.map(i => i.id === t.toast.id ? {
                ...i,
                ...t.toast
            } : i)
        };
    case 2:
        let {toast: n} = t;
        return e.toasts.find(i => i.id === n.id) ? Nl(e, {
            type: 1,
            toast: n
        }) : Nl(e, {
            type: 0,
            toast: n
        });
    case 3:
        let {toastId: r} = t;
        return r ? Pc(r) : e.toasts.forEach(i => {
            Pc(i.id)
        }
        ),
        {
            ...e,
            toasts: e.toasts.map(i => i.id === r || r === void 0 ? {
                ...i,
                visible: !1
            } : i)
        };
    case 4:
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(i => i.id !== t.toastId)
        };
    case 5:
        return {
            ...e,
            pausedAt: t.time
        };
    case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map(i => ({
                ...i,
                pauseDuration: i.pauseDuration + o
            }))
        }
    }
}
  , Oo = []
  , Io = {
    toasts: [],
    pausedAt: void 0
}
  , dn = e => {
    Io = Nl(Io, e),
    Oo.forEach(t => {
        t(Io)
    }
    )
}
  , Lg = {
    blank: 4e3,
    error: 4e3,
    success: 2e3,
    loading: 1 / 0,
    custom: 4e3
}
  , zg = (e={}) => {
    let[t,n] = P.useState(Io);
    P.useEffect( () => (Oo.push(n),
    () => {
        let o = Oo.indexOf(n);
        o > -1 && Oo.splice(o, 1)
    }
    ), [t]);
    let r = t.toasts.map(o => {
        var i, s;
        return {
            ...e,
            ...e[o.type],
            ...o,
            duration: o.duration || ((i = e[o.type]) == null ? void 0 : i.duration) || (e == null ? void 0 : e.duration) || Lg[o.type],
            style: {
                ...e.style,
                ...(s = e[o.type]) == null ? void 0 : s.style,
                ...o.style
            }
        }
    }
    );
    return {
        ...t,
        toasts: r
    }
}
  , Vg = (e, t="blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: {
        role: "status",
        "aria-live": "polite"
    },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Eg()
})
  , Xr = e => (t, n) => {
    let r = Vg(t, e, n);
    return dn({
        type: 2,
        toast: r
    }),
    r.id
}
  , me = (e, t) => Xr("blank")(e, t);
me.error = Xr("error");
me.success = Xr("success");
me.loading = Xr("loading");
me.custom = Xr("custom");
me.dismiss = e => {
    dn({
        type: 3,
        toastId: e
    })
}
;
me.remove = e => dn({
    type: 4,
    toastId: e
});
me.promise = (e, t, n) => {
    let r = me.loading(t.loading, {
        ...n,
        ...n == null ? void 0 : n.loading
    });
    return e.then(o => (me.success(gi(t.success, o), {
        id: r,
        ...n,
        ...n == null ? void 0 : n.success
    }),
    o)).catch(o => {
        me.error(gi(t.error, o), {
            id: r,
            ...n,
            ...n == null ? void 0 : n.error
        })
    }
    ),
    e
}
;
var Ag = (e, t) => {
    dn({
        type: 1,
        toast: {
            id: e,
            height: t
        }
    })
}
  , Rg = () => {
    dn({
        type: 5,
        time: Date.now()
    })
}
  , Fg = e => {
    let {toasts: t, pausedAt: n} = zg(e);
    P.useEffect( () => {
        if (n)
            return;
        let i = Date.now()
          , s = t.map(l => {
            if (l.duration === 1 / 0)
                return;
            let a = (l.duration || 0) + l.pauseDuration - (i - l.createdAt);
            if (a < 0) {
                l.visible && me.dismiss(l.id);
                return
            }
            return setTimeout( () => me.dismiss(l.id), a)
        }
        );
        return () => {
            s.forEach(l => l && clearTimeout(l))
        }
    }
    , [t, n]);
    let r = P.useCallback( () => {
        n && dn({
            type: 6,
            time: Date.now()
        })
    }
    , [n])
      , o = P.useCallback( (i, s) => {
        let {reverseOrder: l=!1, gutter: a=8, defaultPosition: u} = s || {}
          , d = t.filter(y => (y.position || u) === (i.position || u) && y.height)
          , p = d.findIndex(y => y.id === i.id)
          , h = d.filter( (y, v) => v < p && y.visible).length;
        return d.filter(y => y.visible).slice(...l ? [h + 1] : [0, h]).reduce( (y, v) => y + (v.height || 0) + a, 0)
    }
    , [t]);
    return {
        toasts: t,
        handlers: {
            updateHeight: Ag,
            startPause: Rg,
            endPause: r,
            calculateOffset: o
        }
    }
}
  , Og = pt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
  , Ig = pt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , Dg = pt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
  , $g = It("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Og} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ig} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Dg} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
  , Bg = pt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
  , Hg = It("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${Bg} 1s linear infinite;
`
  , bg = pt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
  , Ug = pt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
  , Wg = It("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bg} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ug} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
  , Qg = It("div")`
  position: absolute;
`
  , Kg = It("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
  , Gg = pt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , Zg = It("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Gg} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
  , Yg = ({toast: e}) => {
    let {icon: t, type: n, iconTheme: r} = e;
    return t !== void 0 ? typeof t == "string" ? P.createElement(Zg, null, t) : t : n === "blank" ? null : P.createElement(Kg, null, P.createElement(Hg, {
        ...r
    }), n !== "loading" && P.createElement(Qg, null, n === "error" ? P.createElement($g, {
        ...r
    }) : P.createElement(Wg, {
        ...r
    })))
}
  , qg = e => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`
  , Xg = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`
  , Jg = "0%{opacity:0;} 100%{opacity:1;}"
  , e4 = "0%{opacity:1;} 100%{opacity:0;}"
  , t4 = It("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
  , n4 = It("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
  , r4 = (e, t) => {
    let n = e.includes("top") ? 1 : -1
      , [r,o] = Jf() ? [Jg, e4] : [qg(n), Xg(n)];
    return {
        animation: t ? `${pt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${pt(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}
  , o4 = P.memo( ({toast: e, position: t, style: n, children: r}) => {
    let o = e.height ? r4(e.position || t || "top-center", e.visible) : {
        opacity: 0
    }
      , i = P.createElement(Yg, {
        toast: e
    })
      , s = P.createElement(n4, {
        ...e.ariaProps
    }, gi(e.message, e));
    return P.createElement(t4, {
        className: e.className,
        style: {
            ...o,
            ...n,
            ...e.style
        }
    }, typeof r == "function" ? r({
        icon: i,
        message: s
    }) : P.createElement(P.Fragment, null, i, s))
}
);
Tg(P.createElement);
var i4 = ({id: e, className: t, style: n, onHeightUpdate: r, children: o}) => {
    let i = P.useCallback(s => {
        if (s) {
            let l = () => {
                let a = s.getBoundingClientRect().height;
                r(e, a)
            }
            ;
            l(),
            new MutationObserver(l).observe(s, {
                subtree: !0,
                childList: !0,
                characterData: !0
            })
        }
    }
    , [e, r]);
    return P.createElement("div", {
        ref: i,
        className: t,
        style: n
    }, o)
}
  , s4 = (e, t) => {
    let n = e.includes("top")
      , r = n ? {
        top: 0
    } : {
        bottom: 0
    }
      , o = e.includes("center") ? {
        justifyContent: "center"
    } : e.includes("right") ? {
        justifyContent: "flex-end"
    } : {};
    return {
        left: 0,
        right: 0,
        display: "flex",
        position: "absolute",
        transition: Jf() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
        transform: `translateY(${t * (n ? 1 : -1)}px)`,
        ...r,
        ...o
    }
}
  , l4 = $i`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
  , ko = 16
  , a4 = ({reverseOrder: e, position: t="top-center", toastOptions: n, gutter: r, children: o, containerStyle: i, containerClassName: s}) => {
    let {toasts: l, handlers: a} = Fg(n);
    return P.createElement("div", {
        style: {
            position: "fixed",
            zIndex: 9999,
            top: ko,
            left: ko,
            right: ko,
            bottom: ko,
            pointerEvents: "none",
            ...i
        },
        className: s,
        onMouseEnter: a.startPause,
        onMouseLeave: a.endPause
    }, l.map(u => {
        let d = u.position || t
          , p = a.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t
        })
          , h = s4(d, p);
        return P.createElement(i4, {
            id: u.id,
            key: u.id,
            onHeightUpdate: a.updateHeight,
            className: u.visible ? l4 : "",
            style: h
        }, u.type === "custom" ? gi(u.message, u) : o ? o(u) : P.createElement(o4, {
            toast: u,
            position: d
        }))
    }
    ))
}
  , e0 = {
    exports: {}
}
  , u4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , c4 = u4
  , d4 = c4;
function t0() {}
function n0() {}
n0.resetWarningCache = t0;
var f4 = function() {
    function e(r, o, i, s, l, a) {
        if (a !== d4) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: n0,
        resetWarningCache: t0
    };
    return n.PropTypes = n,
    n
};
e0.exports = f4();
var O = e0.exports;
const Me = _c(O)
  , p4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
    })
})
  , h4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
    })
})
  , r0 = ({isSidebarOpen: e, toggleSidebar: t}) => c.jsxs("button", {
    onClick: t,
    className: "lg:hidden fixed left-5 top-5 w-11 h-11 rounded-full bg-slate-700/80 z-mainBtns grid place-content-center hover:bg-slate-700/70 outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-300 animate-slideRight",
    children: [c.jsx("span", {
        className: `${e ? "hidden" : "block"} w-5 h-5 text-gray-50 relative -top-px`,
        children: c.jsx(p4, {})
    }), c.jsx("span", {
        className: `${e ? "block" : "hidden"} w-5 h-5 text-gray-50 relative -top-[3px]`,
        children: c.jsx(h4, {})
    })]
});
r0.propTypes = {
    isSidebarOpen: Me.bool.isRequired,
    toggleSidebar: Me.func.isRequired
};
const m4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "1 1 22 22",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
    })
})
  , Ia = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: c.jsx("g", {
        children: c.jsx("path", {
            d: "M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"
        })
    })
});
Ia.propTypes = {
    color: Me.string
};
const g4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
    })
})
  , y4 = [{
    id: 1,
    title: "Linkedin Account",
    component: c.jsx(m4, {}),
    link: "https://www.linkedin.com/in/abdulhamidyousef/"
}, {
    id: 2,
    title: "GitHub Account",
    component: c.jsx(Ia, {}),
    link: "https://github.com/AbdelhamidYousef"
}, {
    id: 3,
    title: "E-mail",
    component: c.jsx(g4, {}),
    link: "mailto:abdelhamedy33@gmail.com"
}]
  , Da = ({containerClasses: e, elementClasses: t}) => c.jsx("ul", {
    className: `${e}`,
    children: y4.map(n => c.jsx("li", {
        className: `${t}`,
        "data-title-top": n.title,
        children: c.jsx("a", {
            href: n.link,
            target: "_blank",
            rel: "noreferrer",
            className: "outline-none",
            children: n.component
        })
    }, n.id))
});
Da.propTypes = {
    containerClasses: O.PropTypes.string,
    elementClasses: O.PropTypes.string
};
const v4 = ["about", "skills", "projects", "contact"]
  , o0 = P.createContext()
  , i0 = ({children: e}) => {
    const [t,n] = P.useState(null)
      , r = P.useRef([]);
    return P.useEffect( () => {
        const o = ([s]) => {
            s.isIntersecting && n(s.target.id)
        }
          , i = new IntersectionObserver(o,{
            threshold: .5
        });
        r.current.forEach(s => i.observe(s))
    }
    , []),
    c.jsx(o0.Provider, {
        value: {
            sectionsRef: r,
            activeSection: t,
            setActiveSection: n
        },
        children: e
    })
}
  , $a = () => {
    const e = P.useContext(o0);
    if (!e)
        throw new Error("useActiveSection must be used within an ActiveSectionProvider");
    return e
}
;
i0.propTypes = {
    children: O.PropTypes.node.isRequired
};
const s0 = ({closeSidebar: e}) => {
    const {activeSection: t} = $a()
      , n = (r, o) => {
        r.preventDefault();
        const i = document.getElementById(o);
        i && (i.scrollIntoView({
            behavior: "smooth"
        }),
        e())
    }
    ;
    return c.jsx("nav", {
        children: c.jsx("ul", {
            children: v4.map( (r, o) => c.jsx("li", {
                className: `${t === r ? "text-white" : "text-white/70"} group mb-4 text-lg font-semibold uppercase hover:text-white/95`,
                children: c.jsxs("a", {
                    href: `#${r}`,
                    onClick: i => n(i, r),
                    className: "relative outline-none group",
                    children: [r, c.jsx("span", {
                        className: "absolute -left-[5%] top-[115%] w-[110%] h-0.5 bg-current transition-all duration-300 scale-x-0 origin-left group-hover:scale-x-100 group-focus:scale-x-100"
                    })]
                })
            }, o))
        })
    })
}
;
s0.propTypes = {
    closeSidebar: O.PropTypes.func.isRequired
};
const x4 = "/assets/profile-a8969855.webp"
  , w4 = "/assets/project1-6e18c475.webp"
  , S4 = "/assets/project2-d614b526.webp"
  , k4 = "/assets/project3-344ea5cf.webp"
  , C4 = "/assets/project4-7a8fad95.webp"
  , P4 = "/assets/project5-27ca472d.webp"
  , T4 = "/assets/resume-0f3a2ee3.pdf"
  , j4 = () => c.jsx("img", {
    src: x4,
    alt: "Profile Picture",
    "data-title-bottom": "Profile Picture",
    className: "w-40 h-40 rounded-full border-6 border-white/60 shadow mb-10 dark:border-white/40"
})
  , l0 = ({isSidebarOpen: e, closeSidebar: t}) => c.jsxs("div", {
    className: `${e ? "" : "opacity-0 invisible"} fixed left-0 top-0 h-screen z-sidebarContainer lg:opacity-100 lg:visible`,
    children: [c.jsx("div", {
        className: `${e ? "w-screen" : "w-0"} absolute inset-0 bg-gray-900/30 lg:hidden`,
        onClick: t
    }), c.jsx("div", {
        className: `${e ? "translate-x-0" : "-translate-x-full"} w-72 h-full bg-primary-600 transition-all duration-300 lg:translate-x-0 dark:bg-gray-900 dark:border-r dark:border-gray-800`,
        children: c.jsxs("div", {
            className: "h-full grid place-content-center text-center lg:animate-bounceRight",
            children: [c.jsx(j4, {}), c.jsx(s0, {
                closeSidebar: t
            }), c.jsx(Da, {
                containerClasses: "absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-5",
                elementClasses: "w-7 h-7 text-gray-50 hover:text-primary-200 focus-within:text-primary-200 cursor-help"
            })]
        })
    })]
});
l0.propTypes = {
    isSidebarOpen: Me.bool.isRequired,
    closeSidebar: Me.func.isRequired
};
const Ba = (e, t) => {
    P.useEffect( () => {
        const n = r => {
            r.key === e && t()
        }
        ;
        return document.addEventListener("keydown", n),
        () => document.removeEventListener("keydown", n)
    }
    , [e, t])
}
  , E4 = () => {
    const [e,t] = P.useState(!1)
      , n = () => t(o => !o)
      , r = () => t(!1);
    return Ba("Escape", r),
    c.jsxs("aside", {
        children: [c.jsx(r0, {
            isSidebarOpen: e,
            toggleSidebar: n
        }), c.jsx(l0, {
            isSidebarOpen: e,
            closeSidebar: r
        })]
    })
}
  , a0 = ({type: e}) => e === "light" ? c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
        fillRule: "evenodd",
        clipRule: "evenodd"
    })
}) : e === "dark" ? c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: c.jsx("path", {
        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
    })
}) : e === "system" ? c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: [c.jsx("path", {
        d: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
        strokeWidth: "2",
        strokeLinejoin: "round",
        className: "stroke-gray-100"
    }), c.jsx("path", {
        d: "M14 15c0 3 2 5 2 5H8s2-2 2-5",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "stroke-gray-100"
    })]
}) : null;
a0.propTypes = {
    type: Me.string.isRequired
};
const Tc = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  , N4 = () => {
    const [e,t] = P.useState( () => localStorage.getItem("theme") || Tc)
      , n = r => {
        if (r === "system") {
            t(Tc),
            localStorage.removeItem("theme");
            return
        }
        t(r),
        localStorage.setItem("theme", r)
    }
    ;
    return P.useEffect( () => {
        e === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
    }
    , [e]),
    [e, n]
}
  , _4 = ["system", "dark", "light"]
  , M4 = () => {
    const [e,t] = N4();
    return c.jsx("div", {
        className: "group fixed right-5 top-5 xl:right-10 xl:top-7 z-mainBtns w-11 hover:w-40 h-11 xl:w-12 xl:h-12 rounded-full bg-slate-700/70 flex justify-center items-center gap-x-5 animate-slideLeft transition-all duration-300 focus-within:w-40",
        children: _4.map( (n, r) => c.jsx("button", {
            className: `${e !== n ? "opacity-0 invisible absolute group-hover:opacity-100 group-hover:visible group-hover:relative" : "text-slate-200"} w-6 h-6 xl:w-[26px] xl:h-[26px] text-white hover:text-slate-200 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:relative focus:text-slate-300`,
            onClick: () => t(n),
            children: c.jsx(a0, {
                type: n
            })
        }, r))
    })
}
  , u0 = ({children: e}) => c.jsx("main", {
    className: "px-5 lg:px-10 xl:px-14 overflow-x-hidden lg:ml-72",
    children: e
});
u0.propTypes = {
    children: O.PropTypes.node.isRequired
};
const c0 = () => c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    height: "100%",
    children: [c.jsx("path", {
        fill: "#ff7816",
        d: "m0 0 31.8 448.102L226.2 512l194.398-63.898L452.398 0zm0 0",
        opacity: "1"
    }), c.jsx("path", {
        fill: "#ff4b00",
        d: "m452.398 0-31.8 448.102L226.199 512V0zm0 0"
    }), c.jsx("path", {
        fill: "#ececf1",
        d: "M367.5 136H145.2l5.398 75h211.504l-12.903 181.598-123 41.101-123-41.101L99 332h60l1.2 16.5 66 21.898 66-21.898 5.398-77.5H94.5L80.7 76h291zm0 0"
    }), c.jsx("path", {
        d: "m362.102 211-12.903 181.598-123 41.101v-63.3l66-21.899 5.399-77.5h-71.399v-60zM371.7 76l-4.2 60H226.2V76zm0 0",
        fill: "#e2e2e7"
    })]
})
  , d0 = () => c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    height: "100%",
    children: [c.jsx("path", {
        d: "m32 0 40.8 460.8L256 512l183.136-51.168L480 0z",
        fill: "#2196f3"
    }), c.jsx("path", {
        d: "m392.768 150.688-5.152 57.888-15.552 173.536L256 414.208l-.096.032-116-32.128-8.096-90.752h56.832l4.224 47.072 63.072 17.024.032-.032 63.168-17.024 8.608-78.432-198.656.544-5.632-53.632 209.056-2.464 4.224-57.408-218.88.608-3.68-53.408h283.648z",
        fill: "#fafafa",
        "data-original": "#fafafa"
    })]
})
  , f0 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    height: "100%",
    children: c.jsxs("g", {
        children: [c.jsx("path", {
            fill: "#ffdf00",
            d: "M0 0h512v512H0z"
        }), c.jsx("path", {
            d: "M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z",
            fill: "#000000"
        })]
    })
})
  , p0 = () => c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-11.5 -10.23174 23 20.46348",
    width: "100%",
    height: "100%",
    children: [c.jsx("circle", {
        cx: "0",
        cy: "0",
        r: "2.05",
        fill: "#16addf"
    }), c.jsxs("g", {
        stroke: "#16addf",
        strokeWidth: "1",
        fill: "none",
        children: [c.jsx("ellipse", {
            rx: "11",
            ry: "4.2"
        }), c.jsx("ellipse", {
            rx: "11",
            ry: "4.2",
            transform: "rotate(60)"
        }), c.jsx("ellipse", {
            rx: "11",
            ry: "4.2",
            transform: "rotate(120)"
        })]
    })]
})
  , h0 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -5 52 38",
    width: "105%",
    height: "100%",
    children: c.jsx("path", {
        d: "M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z",
        fill: "#38bdf8"
    })
})
  , m0 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 384",
    width: "100%",
    height: "100%",
    children: c.jsx("path", {
        fill: "#CF649A",
        d: "M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1-39 36.4-45.2 68.2-42.6 81.4 9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zm-343.2 115.7c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zm68.4-15.6c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z"
    })
})
  , g0 = () => c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "20 20 465 465",
    width: "100%",
    height: "100%",
    children: [c.jsx("path", {
        fill: "#f14e32",
        d: "m256 31 225 225-225 225L31 256z"
    }), c.jsx("path", {
        fill: "#fff",
        d: "m177.5 109.5 14.9-14.9 51.1 51.1c3.8-1.8 8.1-2.9 12.6-2.9 15.9 0 28.8 12.9 28.8 28.8 0 4.5-1 8.8-2.9 12.6l45.9 45.9c3.5-1.5 7.4-2.4 11.5-2.4 15.9 0 28.8 12.9 28.8 28.8s-12.9 28.8-28.8 28.8-28.8-12.9-28.8-28.8c0-4.1.9-8 2.4-11.6l-46.5-46.5v136.2c10.7 4.2 18.3 14.6 18.3 26.8 0 15.9-12.9 28.8-28.8 28.8s-28.8-12.9-28.8-28.8c0-12.2 7.6-22.6 18.3-26.8V198.5c-10.7-4.2-18.3-14.6-18.3-26.8 0-3.7.7-7.2 2-10.5z"
    })]
})
  , L4 = () => c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 410 404",
    width: "100%",
    height: "100%",
    children: [c.jsx("path", {
        d: "M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z",
        fill: "url(#paint0_linear)"
    }), c.jsx("path", {
        d: "M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z",
        fill: "url(#paint1_linear)"
    }), c.jsxs("defs", {
        children: [c.jsxs("linearGradient", {
            id: "paint0_linear",
            x1: "6.00017",
            y1: "32.9999",
            x2: "235",
            y2: "344",
            gradientUnits: "userSpaceOnUse",
            children: [c.jsx("stop", {
                stopColor: "#41D1FF"
            }), c.jsx("stop", {
                offset: "1",
                stopColor: "#BD34FE"
            })]
        }), c.jsxs("linearGradient", {
            id: "paint1_linear",
            x1: "194.651",
            y1: "8.81818",
            x2: "236.076",
            y2: "292.989",
            gradientUnits: "userSpaceOnUse",
            children: [c.jsx("stop", {
                stopColor: "#FFEA83"
            }), c.jsx("stop", {
                offset: "0.0833333",
                stopColor: "#FFDD35"
            }), c.jsx("stop", {
                offset: "1",
                stopColor: "#FFA800"
            })]
        })]
    })]
})
  , y0 = () => c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 24",
    width: "100%",
    height: "100%",
    fill: "none",
    children: [c.jsx("path", {
        d: "M27.7179 8.23453C26.6978 7.90351 26.171 8.01511 25.101 7.89443C23.447 7.70823 22.788 7.04103 22.5084 5.32388C22.352 4.36531 22.5367 2.96182 22.1373 2.0929C21.3735 0.436097 19.5863 -0.306966 17.7908 0.117149C16.2749 0.47575 15.0135 2.03946 14.9436 3.64454C14.8638 5.4772 15.8755 7.04091 17.6128 7.58054C18.4381 7.83742 19.3151 7.96673 20.1771 8.03224C21.7579 8.1512 21.8794 9.05816 22.3071 9.80467C22.5767 10.2753 22.8379 10.7391 22.8379 12.1425C22.8379 13.5459 22.575 14.0096 22.3071 14.4803C21.8794 15.2251 21.3519 15.713 19.7711 15.8337C18.9091 15.8992 18.0305 16.0285 17.2067 16.2854C15.4695 16.8267 14.4577 18.3887 14.5376 20.2213C14.6075 21.8264 15.8688 23.3901 17.3848 23.7487C19.1803 24.1746 20.9675 23.4298 21.7313 21.773C22.1324 20.9041 22.352 19.9196 22.5084 18.9611C22.7897 17.2439 23.4486 16.5767 25.101 16.3905C26.171 16.2698 27.2784 16.3905 28.281 15.8026C29.3406 15.0036 30.2872 13.8045 30.2872 12.1425C30.2872 10.4805 29.2671 8.73795 27.7179 8.23453Z",
        fill: "#F44250"
    }), c.jsx("path", {
        d: "M10.7468 16.0372C8.66173 16.0372 6.96094 14.2786 6.96094 12.1226C6.96094 9.96665 8.66173 8.20801 10.7468 8.20801C12.8318 8.20801 14.5326 9.96665 14.5326 12.1226C14.5326 14.2769 12.8302 16.0372 10.7468 16.0372Z",
        fill: "#121212"
    }), c.jsx("path", {
        d: "M3.77247 23.9928C1.69077 23.9876 -0.00498999 22.2221 1.10332e-05 20.0644C0.00503422 17.9101 1.71249 16.1567 3.7992 16.1636C5.88256 16.1688 7.57832 17.9343 7.57166 20.092C7.56663 22.2445 5.85917 23.998 3.77247 23.9928Z",
        fill: "#121212"
    }), c.jsx("path", {
        d: "M31.9021 23.9927C29.8138 24.0048 28.0997 22.2583 28.088 20.1076C28.0763 17.9482 29.7654 16.1758 31.8453 16.1636C33.9337 16.1516 35.6478 17.8981 35.6595 20.0488C35.6711 22.2065 33.9821 23.9806 31.9021 23.9927Z",
        fill: "#121212"
    })]
})
  , v0 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "6 8 85 85",
    width: "100%",
    height: "100%",
    children: c.jsxs("g", {
        fill: "#764ABC",
        children: [c.jsx("path", {
            d: "M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"
        }), c.jsx("path", {
            d: "M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"
        }), c.jsx("path", {
            d: "M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"
        })]
    })
})
  , x0 = () => c.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 230",
    width: "99%",
    height: "100%",
    children: [c.jsx("path", {
        fill: "#00435B",
        d: "m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
    }), c.jsx("path", {
        fill: "#002B3B",
        d: "M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
    }), c.jsx("path", {
        fill: "#FF4154",
        d: "M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
    }), c.jsx("path", {
        fill: "#FFD94C",
        d: "M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
    })]
})
  , z4 = {
    fname: "Abdulhamid",
    lname: "Yousef",
    jobs: ["Frontend Engineer", "React Developer"],
    description: "I'm a frontend engineer with a deep understanding of frontend technologies, with a focus on the React ecosystem. I'm passionate about building high-quality, user-friendly web applications that create immersive user experiences."
}
  , V4 = [{
    id: 1,
    title: "HTML",
    component: c.jsx(c0, {})
}, {
    id: 2,
    title: "CSS",
    component: c.jsx(d0, {})
}, {
    id: 3,
    title: "JavaScript",
    component: c.jsx(f0, {})
}, {
    id: 4,
    title: "React",
    component: c.jsx(p0, {})
}, {
    id: 5,
    title: "React Router",
    component: c.jsx(y0, {})
}, {
    id: 6,
    title: "Redux/RTK",
    component: c.jsx(v0, {})
}, {
    id: 7,
    title: "React Query",
    component: c.jsx(x0, {})
}, {
    id: 8,
    title: "Tailwindcss",
    component: c.jsx(h0, {})
}, {
    id: 9,
    title: "SASS",
    component: c.jsx(m0, {})
}, {
    id: 10,
    title: "Git",
    component: c.jsx(g0, {})
}, {
    id: 11,
    title: "Vite",
    component: c.jsx(L4, {})
}]
  , Br = ({children: e}) => c.jsx(c.Fragment, {
    children: e.split("").map( (t, n) => t === " " ? " " : c.jsx("span", {
        className: "hover:animate-rubberband",
        children: t
    }, n))
});
Br.propTypes = {
    children: O.PropTypes.string.isRequired
};
const A4 = () => {
    const {fname: e, lname: t, jobs: n, description: r} = z4;
    return c.jsxs(c.Fragment, {
        children: [c.jsxs("h1", {
            className: "mb-2 xs:mb-1 font-hero font-bold text-5xl xs:text-[3.375rem] sm:text-8xl uppercase text-slate-700 dark:text-gray-50",
            children: [c.jsx(Br, {
                children: e
            }), " ", c.jsx("span", {
                className: "text-primary-600 dark:text-primary-400",
                children: c.jsx(Br, {
                    children: t
                })
            })]
        }), c.jsxs("p", {
            className: "xs:ml-1 mb-3 xs:mb-6 sm:mb-8 lg:mb-10 font-hero font-medium text-lg xs:text-xl sm:text-2xl uppercase tracking-widest",
            children: [c.jsx("span", {
                className: "block xs:inline-block leading-none",
                children: n[0]
            }), c.jsx("span", {
                className: "hidden xs:inline-block mx-1",
                children: "|"
            }), c.jsx("span", {
                className: "text-primary-600 dark:text-primary-400",
                children: n[1]
            })]
        }), c.jsx("p", {
            className: "max-w-6xl xs:ml-1 mb-7 xs:mb-10 sm:mb-12 lg:mb-14 text-sm xs:text-lg text-slate-500/80 dark:text-gray-200",
            children: r
        })]
    })
}
  , R4 = () => c.jsx("ul", {
    className: "xs:ml-1 flex flex-wrap justify-center xs:justify-start gap-x-2 sm:gap-x-5 md:gap-x-6 gap-y-3",
    children: V4.map(e => c.jsx("li", {
        className: "w-6 h-6 xs:w-8 xs:h-8 lg:w-9 lg:h-9 grid place-content-center drop-shadow-[0_0_3px_#33333340] cursor-help hover:scale-110 sm:hover:scale-[1.2] transition-all duration-300",
        "data-title-bottom": e.title,
        children: e.component
    }, e.id))
})
  , Jr = ({id: e, className: t, children: n}) => {
    const r = P.useRef(null)
      , {sectionsRef: o} = $a();
    return P.useEffect( () => {
        o.current.push(r.current)
    }
    , [o]),
    c.jsx(cn.section, {
        ref: r,
        id: e,
        className: `${t} border-b-2 dark:border-gray-400`,
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: !1,
            amount: .2
        },
        children: n
    })
}
;
Jr.propTypes = {
    id: Me.string.isRequired,
    className: Me.string,
    children: Me.node
};
const Gn = (e, t="spring", n=1, r=0) => ({
    hidden: {
        opacity: 0,
        x: e === "left" ? "50%" : e === "right" ? "-50%" : 0,
        y: e === "up" ? "50%" : e === "down" ? "-50%" : 0
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: t,
            duration: n,
            delay: r
        }
    }
})
  , F4 = () => c.jsx(Jr, {
    id: "about",
    className: "h-screen min-h-[40rem] box-content grid content-center text-center xs:text-left",
    children: c.jsxs(cn.div, {
        variants: Gn("right", "tween", .8),
        children: [c.jsx(A4, {}), c.jsx(R4, {})]
    })
})
  , Bi = ({className: e="", children: t}) => c.jsx(cn.h2, {
    className: `${e} mb-14 lg:mb-20 font-hero font-bold text-6xl text-slate-700 dark:text-gray-50 uppercase tracking-wide text-center sm:text-left`,
    variants: Gn("right"),
    children: c.jsx(Br, {
        children: t
    })
});
Bi.propTypes = {
    className: O.PropTypes.string,
    children: O.PropTypes.node.isRequired
};
const O4 = () => c.jsxs("svg", {
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    fill: "#fff",
    style: {
        padding: "14px 4px",
        borderRadius: "20px",
        background: "#ec5990"
    },
    children: [c.jsx("path", {
        d: "M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z"
    }), c.jsx("path", {
        style: {
            transform: "translateX(-25px)"
        },
        d: "M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"
    }), c.jsx("path", {
        d: "M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"
    }), c.jsx("path", {
        style: {
            transform: "translateX(-25px)"
        },
        d: "M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"
    }), c.jsx("path", {
        d: "M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"
    })]
})
  , I4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -165 276 260",
    width: "100%",
    height: "100%",
    children: c.jsx("text", {
        fill: "#504b4b",
        fontSize: "100",
        children: c.jsx("tspan", {
            children: "< 💅>"
        })
    })
})
  , D4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 1000",
    width: "100%",
    height: "100%",
    version: "1.1",
    children: c.jsxs("g", {
        id: "layer1",
        transform: "translate(3.7129 -62.36)",
        children: [c.jsxs("g", {
            id: "flowRoot3336",
            transform: "matrix(1.8595,0,0,1.8595,-30.174,333.87)",
            children: [c.jsx("path", {
                id: "path4379",
                d: "m105.49 108.89q12.261 0 19.028 6.46 6.7676 6.46 7.5146 14.678h-8.5254q-1.4502-6.2402-5.8008-9.8877-4.3066-3.6475-12.129-3.6475-9.5361 0-15.425 6.7236-5.8447 6.6797-5.8447 20.522 0 11.338 5.2734 18.413 5.3174 7.0312 15.82 7.0312 9.668 0 14.722-7.4268 2.6807-3.9111 3.999-10.283h8.5254q-1.1426 10.195-7.5586 17.095-7.6904 8.3057-20.742 8.3057-11.25 0-18.896-6.8115-10.063-9.0088-10.063-27.817 0-14.282 7.5586-23.423 8.1738-9.9316 22.544-9.9316zm-1.7578 0z"
            }), c.jsx("path", {
                id: "path4381",
                d: "m149.04 154.37q0.30761 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1524-4.043-6.1524-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1192 4.8779 7.1192 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5478 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z"
            }), c.jsx("path", {
                id: "path4383",
                d: "m208.98 154.37q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z"
            }), c.jsx("path", {
                id: "path4385",
                d: "m78.063 223.14h12.524l18.545 54.58 18.413-54.58h12.393v64.556h-8.3057v-38.101q0-1.9775 0.0879-6.5478t0.0879-9.7998l-18.413 54.448h-8.6572l-18.545-54.448v1.9775q0 2.373 0.08789 7.251 0.13184 4.834 0.13184 7.1191v38.101h-8.3496v-64.556z"
            }), c.jsx("path", {
                id: "path4387",
                d: "m181.2 221.39q17.095 0 25.312 10.986 6.416 8.5693 6.416 21.929 0 14.458-7.3389 24.038-8.6133 11.25-24.565 11.25-14.897 0-23.423-9.8438-7.6025-9.4922-7.6025-23.994 0-13.096 6.5039-22.412 8.3496-11.953 24.697-11.953zm0.87891 60.381q11.558 0 16.699-8.2617 5.1856-8.3057 5.1856-19.072 0-11.382-5.9766-18.325-5.9326-6.9434-16.26-6.9434-10.02 0-16.348 6.8994-6.3281 6.8555-6.3281 20.259 0 10.723 5.4053 18.105 5.4492 7.3389 17.622 7.3389zm-0.61523-60.381z"
            }), c.jsx("path", {
                id: "path4389",
                d: "m248.09 280.23q4.4385 0 7.2949-0.92285 5.0977-1.7139 8.3496-6.5918 2.5928-3.9111 3.7354-10.02 0.65918-3.6475 0.65918-6.7676 0-11.997-4.79-18.633-4.75-6.63-15.34-6.63h-15.513v49.57h15.601zm-24.39-57.085h26.147q13.315 0 20.654 9.4482 6.5478 8.5254 6.5478 21.841 0 10.283-3.8672 18.589-6.8115 14.678-23.423 14.678h-26.06v-64.556z"
            }), c.jsx("path", {
                id: "path4391",
                d: "m297.83 223.14v39.902q0 7.0312 2.6367 11.689 3.9111 7.0312 13.184 7.0312 11.118 0 15.117-7.6025 2.1533-4.1309 2.1533-11.118v-39.902h8.877v36.255q0 11.909-3.208 18.325-5.8887 11.689-22.236 11.689-16.348 0-22.192-11.689-3.208-6.416-3.208-18.325v-36.255h8.877zm16.567 0z"
            }), c.jsx("path", {
                id: "path4393",
                d: "m353.21 223.14h8.7451v56.865h32.695v7.6904h-41.44v-64.556z"
            }), c.jsx("path", {
                id: "path4395",
                d: "m404.14 223.14h47.065v7.9102h-38.54v19.6h35.64v7.4707h-35.64v21.885h39.199v7.6904h-47.725v-64.556zm23.862 0z"
            }), c.jsx("path", {
                id: "path4397",
                d: "m469.13 266.87q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z"
            })]
        }), c.jsx("rect", {
            id: "rect4156",
            height: "695.02",
            width: "695.02",
            stroke: "#000",
            y: "214.85",
            x: "72.492",
            strokeWidth: "5",
            fill: "none"
        })]
    })
})
  , $4 = [{
    label: "All",
    value: "all"
}, {
    label: "Core Technologies",
    value: "core"
}, {
    label: "React Ecosystem",
    value: "react"
}, {
    label: "Dev Enviroment",
    value: "dev"
}]
  , jc = [{
    id: 1,
    title: "HTML",
    component: c.jsx(c0, {}),
    type: "core"
}, {
    id: 2,
    title: "CSS",
    component: c.jsx(d0, {}),
    type: "core"
}, {
    id: 3,
    title: "JavaScript",
    component: c.jsx(f0, {}),
    type: "core"
}, {
    id: 4,
    title: "React",
    component: c.jsx(p0, {}),
    type: "react"
}, {
    id: 5,
    title: "React Router",
    component: c.jsx(y0, {}),
    type: "react"
}, {
    id: 6,
    title: "Redux/RTK",
    component: c.jsx(v0, {}),
    type: "react"
}, {
    id: 7,
    title: "React Query",
    component: c.jsx(x0, {}),
    type: "react"
}, {
    id: 8,
    title: "React Hook Form",
    component: c.jsx(O4, {}),
    type: "react"
}, {
    id: 9,
    title: "Tailwindcss",
    component: c.jsx(h0, {}),
    type: "react"
}, {
    id: 10,
    title: "SASS",
    component: c.jsx(m0, {}),
    type: "react"
}, {
    id: 11,
    title: "Styled Components",
    component: c.jsx(I4, {}),
    type: "react"
}, {
    id: 12,
    title: "CSS Modules",
    component: c.jsx(D4, {}),
    type: "react"
}, {
    id: 13,
    title: "Git",
    component: c.jsx(g0, {}),
    type: "dev"
}]
  , w0 = P.createContext()
  , S0 = ({children: e}) => {
    const [t,n] = P.useState("")
      , [r,o] = P.useState("");
    let i = jc;
    return r && (i = jc.filter(s => s.type === r)),
    t && (i = i.filter(s => s.title.toLowerCase().includes(t.toLowerCase()))),
    c.jsx(w0.Provider, {
        value: {
            query: t,
            filter: r,
            setQuery: n,
            setFilter: o,
            skills: i
        },
        children: e
    })
}
  , Ha = () => {
    const e = P.useContext(w0);
    if (!e)
        throw new Error("useSkills must be used within a SkillsContextProvider");
    return e
}
;
S0.propTypes = {
    children: O.PropTypes.node.isRequired
};
const B4 = () => {
    const {skills: e} = Ha();
    return c.jsx("ul", {
        className: "min-h-[61rem] sm:min-h-[34rem] 2xl:min-h-[30rem] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 content-start gap-3 sm:gap-4 lg:gap-5",
        children: e.map( (t, n) => c.jsx(cn.li, {
            variants: Gn("left", "spring", 1.8, .2 * n),
            children: c.jsxs("div", {
                className: "group relative h-16 xl:h-20 rounded-xl border border-gray-100 shadow-sm overflow-hidden flex items-center hover:scale-105 transition-all duration-300 dark:bg-slate-700 dark:border-gray-600",
                children: [c.jsx("p", {
                    className: "px-6 text-sm sm:text-base xl:font-medium text-slate-500 tracking-wider relative z-10 dark:text-gray-50",
                    children: t.title
                }), c.jsx("span", {
                    className: "absolute right-0 top-1/2 -translate-y-1/2 w-1/3 group-hover:-rotate-6 transition-all duration-300",
                    children: t.component
                }), c.jsx("span", {
                    className: "absolute inset-0 bg-gradient-to-r from-white via-white via-60% to-white/60 dark:from-slate-700 dark:via-slate-700 dark:to-gray-slate-700/60"
                })]
            })
        }, t.id))
    })
}
  , H4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    children: c.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    })
})
  , b4 = () => {
    const {query: e, setQuery: t} = Ha();
    return Ba("Escape", () => t("")),
    c.jsxs("div", {
        className: "relative",
        children: [c.jsx("input", {
            type: "text",
            value: e,
            onChange: n => t(n.target.value),
            placeholder: "Search skills...",
            className: "peer w-56 xs:w-72 pl-14 py-2 xs:py-3 bg-white border-b-2 xs:border-none xs:rounded-3xl text-sm xs:text-base text-gray-600 placeholder:text-sm xs:placeholder:text-base transition-all duration-300 outline-none focus:border-gray-400 xs:focus:ring-1 xs:focus:ring-gray-300 md:focus:w-80 selection:bg-gray-400 dark:bg-slate-900 dark:border-slate-600 dark:text-gray-50 dark:focus:border-slate-500"
        }), c.jsx("span", {
            className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400/70 transition-all duration-300 peer-focus:text-gray-400",
            children: c.jsx(H4, {})
        })]
    })
}
  , U4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: c.jsx("path", {
        fillRule: "evenodd",
        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
        clipRule: "evenodd"
    })
})
  , W4 = (e, t) => {
    const n = r => {
        r.target.closest(`.${e}`) || t()
    }
    ;
    return document.addEventListener("click", n),
    () => document.removeEventListener("click", n)
}
  , k0 = ({options: e}) => {
    const [t,n] = P.useState(!1)
      , [r,o] = P.useState("")
      , {setFilter: i} = Ha()
      , s = () => n(!1);
    return W4("js-select", s),
    Ba("Escape", s),
    c.jsxs("button", {
        className: ` ${t ? "after:!w-0" : "focus:after:w-full "} js-select relative w-full min-w-[12rem] max-w-[11rem] mx-auto h-10 flex justify-between items-center outline-none after:absolute after:left-1/2 after:-translate-x-1/2 after:-ml-0.5 after:bottom-0 after:h-0.5 after:bg-gray-200 after:transition-all after:duration-300`,
        onClick: () => n(l => !l),
        children: [c.jsx("span", {
            className: "font-semibold text-sm text-slate-500 dark:text-gray-50",
            children: !r || r === e[0].label ? "Filter by technology" : r
        }), c.jsx("span", {
            className: `${t ? "rotate-180" : "rotate-0"} w-5 h-5 text-gray-600 dark:text-gray-50 transition-all duration-300`,
            children: c.jsx(U4, {})
        }), c.jsx("ul", {
            className: `${t ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"} absolute top-[120%] z-selectMenu w-full px-5 bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-auto transition-all duration-300 origin-top`,
            children: e.map( (l, a) => c.jsx("li", {
                className: "pt-6 last:pb-6 font-medium text-sm text-gray-500 dark:text-gray-50 tracking-wide cursor-pointer select-none transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400",
                onClick: () => {
                    o(l.label),
                    i(l.value === "all" ? "" : l.value)
                }
                ,
                children: l.label
            }, a))
        })]
    })
}
;
k0.propTypes = {
    options: O.PropTypes.array.isRequired
};
const Q4 = () => c.jsxs(cn.div, {
    className: "flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:space-x-6 z-selectMenu",
    variants: Gn("left"),
    children: [c.jsx(b4, {}), c.jsx(k0, {
        options: $4
    })]
})
  , K4 = () => c.jsx(Jr, {
    id: "skills",
    className: "py-20 lg:py-28",
    children: c.jsxs(S0, {
        children: [c.jsxs("div", {
            className: "mb-10 md:mb-20 flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:items-center",
            children: [c.jsx(Bi, {
                className: "!m-0",
                children: "Skills"
            }), c.jsx(Q4, {})]
        }), c.jsx(B4, {})]
    })
})
  , G4 = [{
    id: 1,
    image: w4,
    title: "Wild Oasis",
    description: "A web application for a hotel management system, browse the dashboard, cabin/bookings data, check-in guests, and create new ones",
    tech: ["React", "React Router", "React Query", "Supabase", "Styled Components"],
    githubLink: "https://github.com/AbdelhamidYousef/WildOasis",
    demoLink: "https://wildoasis99.netlify.app/"
}, {
    id: 2,
    image: S4,
    title: "Pizza Slice",
    description: "A web application to order pizzas, browse the menu, order pizza, and follow order progress easily.",
    tech: ["React", "Redux", "React-Router", "Tailwindcss."],
    githubLink: "https://github.com/AbdelhamidYousef/PizzaSlice",
    demoLink: "https://pizzaslice99.netlify.app/"
}, {
    id: 3,
    image: k4,
    title: "Infinity Web",
    description: "A landing page for a web design agency. Showcases the company's ability to display outstanding but also simple design using modern CSS techniques",
    tech: ["vanilla JS", "Tailwindcss", "HTML"],
    githubLink: "https://github.com/AbdelhamidYousef/InfinityWeb",
    demoLink: "https://infinityweb99.netlify.app"
}, {
    id: 4,
    image: C4,
    title: "Forkify",
    description: "A web application to search food recipes, where you are able to change servings and bookmark recipes.",
    tech: ["vanilla JS", "SASS", "HTML", "Parcel"],
    githubLink: "https://github.com/AbdelhamidYousef/Forkify",
    demoLink: "https://forkify99.netlify.app"
}, {
    id: 5,
    image: P4,
    title: "Natours",
    description: "A web page for a traveling company, where you can book different tours for wonderful places.",
    tech: ["vanilla JS", "SASS", "Parcel"],
    githubLink: "https://github.com/AbdelhamidYousef/Natours",
    demoLink: "https://natours99.netlify.app"
}]
  , Z4 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 515.283 515.283",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: c.jsx("g", {
        children: c.jsx("path", {
            d: "M372.149 515.283H85.881c-22.941 0-44.507-8.934-60.727-25.155S.001 452.34.001 429.402V143.134c0-22.94 8.934-44.506 25.154-60.726s37.786-25.154 60.727-25.154h114.507c15.811 0 28.627 12.816 28.627 28.627s-12.816 28.627-28.627 28.627H85.881c-7.647 0-14.835 2.978-20.241 8.384s-8.385 12.595-8.385 20.242v286.268c0 7.647 2.978 14.835 8.385 20.243 5.406 5.405 12.594 8.384 20.241 8.384h286.267c7.647 0 14.835-2.978 20.242-8.386 5.406-5.406 8.384-12.595 8.384-20.242V314.895c0-15.811 12.817-28.626 28.628-28.626s28.628 12.816 28.628 28.626v114.507c0 22.94-8.934 44.505-25.155 60.727-16.221 16.22-37.788 25.154-60.726 25.154zm-171.76-171.762c-7.327 0-14.653-2.794-20.242-8.384-11.179-11.179-11.179-29.306 0-40.485L417.544 57.254H314.896c-15.811 0-28.626-12.816-28.626-28.627S299.085 0 314.896 0h171.761a28.542 28.542 0 0 1 19.997 8.144l.002.002.056.056.017.016.044.044.029.029.032.032.062.062.062.062.031.032.029.029a.62.62 0 0 1 .06.061l.056.057.002.002a28.55 28.55 0 0 1 8.144 19.998v171.761c0 15.811-12.817 28.627-28.628 28.627s-28.626-12.816-28.626-28.627V97.739l-237.4 237.399c-5.585 5.59-12.911 8.383-20.237 8.383z"
        })
    })
})
  , C0 = ({data: e, active: t, setActive: n}) => {
    const {id: r, image: o, title: i, description: s, githubLink: l, demoLink: a} = e
      , u = t === r;
    return c.jsxs(cn.li, {
        onClick: () => n(r),
        className: `${u ? "" : "h-20 sm:h-28 md:flex-1 cursor-pointer"} relative md:h-[28rem] rounded-xl md:rounded-3xl shadow-[0_2px_6px_#9b9b9b4d,0_0_4px_#9b9b9b38] overflow-hidden dark:border-slate-800`,
        variants: Gn("right", "tween", .2, .5 * r),
        children: [c.jsx("img", {
            src: o,
            alt: "Project Sample",
            className: "w-full h-full max-h-[30rem] object-cover object-left-top grayscale-0"
        }), c.jsx("div", {
            className: `${u ? "backdrop-blur-[0.5px]" : ""} absolute inset-0 bg-black/50 grid justify-center content-center md:justify-end md:content-end`,
            children: c.jsx("span", {
                className: `${t === r ? "hidden" : ""} font-hero font-extrabold text-2xl text-gray-100 tracking-widest whitespace-nowrap md:-rotate-90 md:w-10 md:mb-10`,
                children: i
            })
        }), c.jsxs("div", {
            className: `
          ${u ? "translate-0" : "translate-y-[200%]"} 
          absolute inset-0 px-5 sm:px-10 grid content-center text-center selection:bg-gray-400`,
            children: [c.jsx("h3", {
                className: "-mt-[10%] xs:-mt-[15%] mb-2 xs:mb-3 font-hero font-semibold text-2xl xs:text-4xl text-gray-100 uppercase tracking-wide",
                children: i
            }), c.jsx("p", {
                className: "font-medium text-sm xs:text-base sm:text-lg text-gray-100",
                children: s
            }), c.jsx("a", {
                href: l,
                target: "_blank",
                rel: "noreferrer",
                title: "Code Source",
                className: "absolute right-4 top-4 xs:right-5 xs:top-5 xl:right-6 xl:top-6 w-6 h-6 xs:w-8 xs:h-8 text-gray-100 drop-shadow-[0_0_20px_#fff] hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300 outline-none focus:drop-shadow-[0_0_7px_#fff]",
                children: c.jsx(Ia, {})
            }), c.jsxs("a", {
                href: a,
                target: "_blank",
                rel: "noreferrer",
                className: "absolute left-1/2 -translate-x-1/2 bottom-5 xs:bottom-8 xl:bottom-10 px-5 py-1.5 xs:px-6 xs:py-2 md:px-8 md:py-3 border-2 border-gray-100 rounded-full text-gray-100 hover:text-slate-700 flex items-center hover:border-transparent hover:bg-gray-100 hover:drop-shadow-[0_0_3px_#fff] transition-all duration-700 outline-none focus:bg-gray-100 focus:text-slate-700",
                children: [c.jsx("span", {
                    className: "font-medium text-sm xs:text-md sm:text-lg whitespace-nowrap mr-2",
                    children: "Live Preview"
                }), c.jsx("span", {
                    className: "inline-block w-3 h-3 sm:w-4 sm:h-4",
                    children: c.jsx(Z4, {})
                })]
            })]
        })]
    })
}
;
C0.propTypes = {
    data: O.PropTypes.object.isRequired,
    active: O.PropTypes.number,
    setActive: O.PropTypes.func
};
const Y4 = () => {
    const [e,t] = P.useState(1);
    return c.jsxs(Jr, {
        id: "projects",
        className: "py-20 lg:py-28",
        children: [c.jsx(Bi, {
            children: "Projects"
        }), c.jsx("ul", {
            className: "flex flex-col md:flex-row gap-5",
            children: G4.map(n => c.jsx(C0, {
                data: n,
                active: e,
                setActive: t
            }, n.id))
        })]
    })
}
  , Hr = {
    _origin: "https://api.emailjs.com"
}
  , q4 = (e, t="https://api.emailjs.com") => {
    Hr._userID = e,
    Hr._origin = t
}
  , P0 = (e, t, n) => {
    if (!e)
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0
}
;
class Ec {
    constructor(t) {
        this.status = t ? t.status : 0,
        this.text = t ? t.responseText : "Network Error"
    }
}
const T0 = (e, t, n={}) => new Promise( (r, o) => {
    const i = new XMLHttpRequest;
    i.addEventListener("load", ({target: s}) => {
        const l = new Ec(s);
        l.status === 200 || l.text === "OK" ? r(l) : o(l)
    }
    ),
    i.addEventListener("error", ({target: s}) => {
        o(new Ec(s))
    }
    ),
    i.open("POST", Hr._origin + e, !0),
    Object.keys(n).forEach(s => {
        i.setRequestHeader(s, n[s])
    }
    ),
    i.send(t)
}
)
  , X4 = (e, t, n, r) => {
    const o = r || Hr._userID;
    return P0(o, e, t),
    T0("/api/v1.0/email/send", JSON.stringify({
        lib_version: "3.11.0",
        user_id: o,
        service_id: e,
        template_id: t,
        template_params: n
    }), {
        "Content-type": "application/json"
    })
}
  , J4 = e => {
    let t;
    if (typeof e == "string" ? t = document.querySelector(e) : t = e,
    !t || t.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t
}
  , e5 = (e, t, n, r) => {
    const o = r || Hr._userID
      , i = J4(n);
    P0(o, e, t);
    const s = new FormData(i);
    return s.append("lib_version", "3.11.0"),
    s.append("service_id", e),
    s.append("template_id", t),
    s.append("user_id", o),
    T0("/api/v1.0/email/send-form", s)
}
  , t5 = {
    init: q4,
    send: X4,
    sendForm: e5
}
  , j0 = ({type: e, disabled: t, className: n, children: r}) => c.jsx("button", {
    type: e,
    disabled: t,
    className: `${n} inline-block px-7 py-3 bg-slate-500 hover:bg-slate-600 text-white focus:ring-slate-600 rounded-lg font-medium text-base md:text-lg outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:cursor-not-allowed dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-700 dark:focus:ring-offset-slate-500`,
    children: r
});
j0.propTypes = {
    type: Me.string,
    disabled: Me.bool,
    className: Me.string,
    children: Me.node.isRequired
};
const Ee = ({className: e="", children: t}) => c.jsx("div", {
    className: `${e} grid gap-y-3`,
    children: t
})
  , E0 = ({htmlFor: e, className: t="", children: n}) => c.jsx("label", {
    htmlFor: e,
    className: `${t} hidden xs:block font-medium text-base md:text-lg text-center xs:text-left dark:text-gray-50`,
    children: n
})
  , N0 = ({type: e, name: t, id: n=t, value: r, onChange: o, disabled: i, placeholder: s, className: l=""}) => c.jsx("input", {
    type: e,
    id: n,
    name: t,
    value: r,
    onChange: o,
    disabled: i,
    placeholder: s,
    className: `${l} w-full px-0.5 xs:px-6 py-3.5 bg-inherit border-b-2 border-gray-300 xs:bg-white xs:rounded-lg font-medium text-base sm:text-lg text-slate-800 placeholder:font-main placeholder:text-base placeholder:text-gray-400 outline-none focus:border-primary-400 xs:focus:border-none xs:focus:ring-1 xs:focus:ring-primary-400 disabled:bg-gray-300 disabled:cursor-not-allowed dark:border-slate-600 dark:xs:bg-slate-700 dark:text-white dark:placeholder:text-gray-300 dark:focus:border-primary-600 dark:xs:focus:ring-primary-600 dark:disabled:bg-slate-900`
})
  , _0 = ({name: e, id: t=e, value: n, onChange: r, disabled: o, placeholder: i, rows: s, className: l=""}) => c.jsx("textarea", {
    id: t,
    name: e,
    value: n,
    onChange: r,
    disabled: o,
    placeholder: i,
    rows: s,
    className: `${l} w-full px-0.5 xs:px-6 py-3.5 bg-inherit border-b-2 border-gray-300 xs:bg-white xs:rounded-lg font-medium text-base sm:text-lg text-slate-800 placeholder:font-main placeholder:text-base placeholder:text-gray-400 outline-none focus:border-primary-400 xs:focus:border-none xs:focus:ring-1 xs:focus:ring-primary-400 disabled:bg-gray-300 disabled:cursor-not-allowed dark:border-slate-600 dark:xs:bg-slate-700 dark:text-white dark:placeholder:text-gray-300 dark:focus:border-primary-600 dark:xs:focus:ring-primary-600 dark:disabled:bg-slate-900`
});
Ee.Label = E0;
Ee.Input = N0;
Ee.Textarea = _0;
Ee.propTypes = {
    className: O.PropTypes.string,
    children: O.PropTypes.node.isRequired
};
E0.propTypes = {
    htmlFor: O.PropTypes.string,
    className: O.PropTypes.string,
    children: O.PropTypes.node.isRequired
};
N0.propTypes = {
    type: O.PropTypes.string,
    id: O.PropTypes.string,
    name: O.PropTypes.string,
    value: O.PropTypes.string,
    onChange: O.PropTypes.func,
    disabled: O.PropTypes.bool,
    placeholder: O.PropTypes.string,
    className: O.PropTypes.string
};
_0.propTypes = {
    id: O.PropTypes.string,
    name: O.PropTypes.string,
    value: O.PropTypes.string,
    onChange: O.PropTypes.func,
    disabled: O.PropTypes.bool,
    placeholder: O.PropTypes.string,
    rows: O.PropTypes.string,
    className: O.PropTypes.string
};
const Nc = {
    name: "",
    email: "",
    message: ""
}
  , n5 = () => {
    const [e,t] = P.useState(Nc)
      , [n,r] = P.useState(!1)
      , o = P.useRef(null)
      , i = s => {
        if (s.preventDefault(),
        Object.values(e).some(l => l === ""))
            return me.error("Please fill all the fields");
        r(!0),
        t5.sendForm("XOOD", "template_du3hgn7", o.current, "Ev07SA8St-0U8Vl1q").then( () => {
            t(Nc),
            me.success("Email Sent!")
        }
        , l => {
            console.error(l),
            me.error("Couldn't send your email")
        }
        ).then( () => r(!1))
    }
    ;
    return c.jsxs(cn.form, {
        method: "POST",
        onSubmit: i,
        ref: o,
        className: "max-w-5xl ml-1 px-4 xs:px-8 sm:px-12 py-8 xs:py-10 sm:py-14 xs:bg-gray-200 xs:rounded-2xl xs:shadow-lg grid gap-y-8 dark:xs:bg-slate-800",
        variants: Gn("right", "tween"),
        children: [c.jsxs(Ee, {
            children: [c.jsx(Ee.Label, {
                htmlFor: "name",
                children: "Your Name:"
            }), c.jsx(Ee.Input, {
                type: "text",
                name: "user_name",
                value: e.name,
                onChange: s => t({
                    ...e,
                    name: s.target.value
                }),
                disabled: n,
                placeholder: "Enter your name"
            })]
        }), c.jsxs(Ee, {
            children: [c.jsx(Ee.Label, {
                htmlFor: "email",
                children: "Your Email:"
            }), c.jsx(Ee.Input, {
                type: "email",
                name: "user_email",
                value: e.email,
                onChange: s => t({
                    ...e,
                    email: s.target.value
                }),
                disabled: n,
                placeholder: "Enter your email"
            })]
        }), c.jsxs(Ee, {
            className: "mb-3",
            children: [c.jsx(Ee.Label, {
                htmlFor: "message",
                children: "Your Message:"
            }), c.jsx(Ee.Textarea, {
                name: "message",
                rows: "7",
                value: e.message,
                onChange: s => t({
                    ...e,
                    message: s.target.value
                }),
                disabled: n,
                placeholder: "Write your message"
            })]
        }), c.jsx(j0, {
            disabled: n,
            className: "ml-px justify-self-start",
            children: n ? "Sending..." : "Send"
        })]
    })
}
  , r5 = () => c.jsxs(Jr, {
    id: "contact",
    className: "py-14 lg:pt-24 lg:pb-28",
    children: [c.jsx(Bi, {
        className: "!mb-6 lg:!mb-14 !text-5xl sm:!text-6xl !tracking-normal sm:!tracking-wide",
        children: "Get in touch"
    }), c.jsx(n5, {})]
})
  , o5 = () => {
    const {activeSection: e} = $a()
      , t = !e || e === "about";
    return c.jsx("button", {
        onClick: () => window.scrollTo({
            top: 0,
            behavior: "smooth"
        }),
        className: `${t ? "opacity-0 invisible" : "opacity-100 visible"} fixed right-5 bottom-5 sm:right-10 sm:bottom-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 z-toTopBtn grid place-content-center hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:focus:ring-offset-gray-950 transition-all duration-300`,
        children: c.jsx("span", {
            className: "w-5 h-5 sm:w-6 sm:h-6 text-white",
            children: c.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                viewBox: "0 0 48 48",
                width: "100%",
                height: "100%",
                fill: "currentColor",
                children: [c.jsx("path", {
                    d: "m25.989 46.22 3.661-32.985 4.925 2.88c1.5.874 3.07-1.013 1.943-2.33L25.169.542a1.539 1.539 0 0 0-2.335 0l-11.35 13.243c-1.133 1.317.443 3.203 1.937 2.33l4.931-2.874 3.657 32.979c.256 2.366 3.724 2.367 3.98 0z"
                }), " "]
            })
        })
    })
}
  , i5 = () => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 515.283 515.283",
    width: "100%",
    height: "100%",
    fill: "currentColor",
    children: c.jsx("g", {
        children: c.jsx("path", {
            d: "M400.775 515.283H114.507c-30.584 0-59.339-11.911-80.968-33.54C11.911 460.117 0 431.361 0 400.775v-28.628c0-15.811 12.816-28.628 28.627-28.628s28.627 12.817 28.627 28.628v28.628c0 15.293 5.956 29.67 16.768 40.483 10.815 10.814 25.192 16.771 40.485 16.771h286.268c15.292 0 29.669-5.957 40.483-16.771 10.814-10.815 16.771-25.192 16.771-40.483v-28.628c0-15.811 12.816-28.628 28.626-28.628s28.628 12.817 28.628 28.628v28.628c0 30.584-11.911 59.338-33.54 80.968-21.629 21.629-50.384 33.54-80.968 33.54zM257.641 400.774a28.538 28.538 0 0 1-19.998-8.142l-.002-.002-.057-.056-.016-.016c-.016-.014-.03-.029-.045-.044l-.029-.029a.892.892 0 0 0-.032-.031l-.062-.062-114.508-114.509c-11.179-11.179-11.179-29.305 0-40.485 11.179-11.179 29.306-11.18 40.485 0l65.638 65.638V28.627C229.014 12.816 241.83 0 257.641 0s28.628 12.816 28.628 28.627v274.408l65.637-65.637c11.178-11.179 29.307-11.179 40.485 0 11.179 11.179 11.179 29.306 0 40.485L277.883 392.39l-.062.062-.032.031-.029.029c-.014.016-.03.03-.044.044l-.017.016a1.479 1.479 0 0 1-.056.056l-.002.002c-.315.307-.634.605-.96.895a28.441 28.441 0 0 1-7.89 4.995l-.028.012c-.011.004-.02.01-.031.013a28.5 28.5 0 0 1-11.091 2.229z"
        })
    })
})
  , s5 = () => c.jsxs("a", {
    href: T4,
    download: !0,
    className: "group text-slate-600 flex items-center gap-x-2 transition-all duration-300 hover:text-primary-600 hover:border-none outline-none focus:border-b-2 focus:border-slate-600 focus:border-spacing-2 dark:text-gray-50 dark:hover:text-primary-400",
    children: [c.jsxs("span", {
        className: "font-bold text-lg xs:text-xl uppercase tracking-tight",
        children: [c.jsx("span", {
            className: "md:hidden",
            children: "Resume"
        }), c.jsx("span", {
            className: "hidden md:block",
            children: "Download My Resume"
        })]
    }), c.jsx("span", {
        className: "w-4 h-4 animate-bounce group-hover:animate-bounceFast",
        children: c.jsx(i5, {})
    })]
})
  , l5 = () => c.jsxs("footer", {
    className: "lg:ml-72 px-5 lg:px-10 py-10 flex flex-col items-center gap-y-6 xs:gap-y-7 xl:flex-row xl:justify-between relative z-footer bg-gray-50 dark:bg-gray-900",
    children: [c.jsx("h2", {
        className: "font-bold text-3xl text-slate-600 hover:text-primary-600 uppercase transition-all duration-300 dark:text-gray-50",
        children: c.jsx(Br, {
            children: "Get In Touch"
        })
    }), c.jsx(Da, {
        containerClasses: "flex gap-5 xl:gap-14",
        elementClasses: "w-6 h-6 md:w-8 md:h-8 text-slate-600 hover:text-primary-600 transition-all duration-300 focus-within:border-b-2 focus-within:border-slate-600 focus-within:border-spacing-2 dark:text-gray-50 dark:hover:text-primary-400 focus-within:focus:border-slate-400"
    }), c.jsx(s5, {})]
})
  , a5 = () => c.jsxs(c.Fragment, {
    children: [c.jsx(yg, {
        features: vg,
        strict: !0,
        children: c.jsxs(i0, {
            children: [c.jsx(E4, {}), c.jsxs(u0, {
                children: [c.jsx(M4, {}), c.jsx(F4, {}), c.jsx(K4, {}), c.jsx(Y4, {}), c.jsx(r5, {}), c.jsx(o5, {})]
            }), c.jsx(l5, {})]
        })
    }), c.jsx(a4, {
        position: "top-center",
        gutter: 12,
        containerStyle: {
            margin: "0.5rem"
        },
        toastOptions: {
            success: {
                duration: 2e3
            },
            error: {
                duration: 3e3
            },
            className: "max-w-xs px-6 py-4 bg-slate-700 border-2 dark:border-slate-600 rounded-lg shadow-lg text-base text-gray-50"
        }
    })]
});
Cs.createRoot(document.getElementById("root")).render(c.jsx(Q0.StrictMode, {
    children: c.jsx(a5, {})
}));
