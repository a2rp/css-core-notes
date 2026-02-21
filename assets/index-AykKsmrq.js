(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&p(S)}).observe(document,{childList:!0,subtree:!0});function i(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(m){if(m.ep)return;m.ep=!0;const j=i(m);fetch(m.href,j)}})();function gx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Pl={exports:{}},nt={},Bl={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function vx(){if(dp)return te;dp=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),W=Symbol.iterator;function J(f){return f===null||typeof f!="object"?null:(f=W&&f[W]||f["@@iterator"],typeof f=="function"?f:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,U={};function Q(f,N,ee){this.props=f,this.context=N,this.refs=U,this.updater=ee||ie}Q.prototype.isReactComponent={},Q.prototype.setState=function(f,N){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,N,"setState")},Q.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function me(){}me.prototype=Q.prototype;function de(f,N,ee){this.props=f,this.context=N,this.refs=U,this.updater=ee||ie}var ne=de.prototype=new me;ne.constructor=de,q(ne,Q.prototype),ne.isPureReactComponent=!0;var L=Array.isArray,Z=Object.prototype.hasOwnProperty,H={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function D(f,N,ee){var re,le={},oe=null,pe=null;if(N!=null)for(re in N.ref!==void 0&&(pe=N.ref),N.key!==void 0&&(oe=""+N.key),N)Z.call(N,re)&&!I.hasOwnProperty(re)&&(le[re]=N[re]);var ce=arguments.length-2;if(ce===1)le.children=ee;else if(1<ce){for(var fe=Array(ce),Ie=0;Ie<ce;Ie++)fe[Ie]=arguments[Ie+2];le.children=fe}if(f&&f.defaultProps)for(re in ce=f.defaultProps,ce)le[re]===void 0&&(le[re]=ce[re]);return{$$typeof:o,type:f,key:oe,ref:pe,props:le,_owner:H.current}}function je(f,N){return{$$typeof:o,type:f.type,key:N,ref:f.ref,props:f.props,_owner:f._owner}}function Be(f){return typeof f=="object"&&f!==null&&f.$$typeof===o}function ae(f){var N={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(ee){return N[ee]})}var _e=/\/+/g;function Te(f,N){return typeof f=="object"&&f!==null&&f.key!=null?ae(""+f.key):N.toString(36)}function Ke(f,N,ee,re,le){var oe=typeof f;(oe==="undefined"||oe==="boolean")&&(f=null);var pe=!1;if(f===null)pe=!0;else switch(oe){case"string":case"number":pe=!0;break;case"object":switch(f.$$typeof){case o:case c:pe=!0}}if(pe)return pe=f,le=le(pe),f=re===""?"."+Te(pe,0):re,L(le)?(ee="",f!=null&&(ee=f.replace(_e,"$&/")+"/"),Ke(le,N,ee,"",function(Ie){return Ie})):le!=null&&(Be(le)&&(le=je(le,ee+(!le.key||pe&&pe.key===le.key?"":(""+le.key).replace(_e,"$&/")+"/")+f)),N.push(le)),1;if(pe=0,re=re===""?".":re+":",L(f))for(var ce=0;ce<f.length;ce++){oe=f[ce];var fe=re+Te(oe,ce);pe+=Ke(oe,N,ee,fe,le)}else if(fe=J(f),typeof fe=="function")for(f=fe.call(f),ce=0;!(oe=f.next()).done;)oe=oe.value,fe=re+Te(oe,ce++),pe+=Ke(oe,N,ee,fe,le);else if(oe==="object")throw N=String(f),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return pe}function rr(f,N,ee){if(f==null)return f;var re=[],le=0;return Ke(f,re,"","",function(oe){return N.call(ee,oe,le++)}),re}function Xe(f){if(f._status===-1){var N=f._result;N=N(),N.then(function(ee){(f._status===0||f._status===-1)&&(f._status=1,f._result=ee)},function(ee){(f._status===0||f._status===-1)&&(f._status=2,f._result=ee)}),f._status===-1&&(f._status=0,f._result=N)}if(f._status===1)return f._result.default;throw f._result}var Ne={current:null},z={transition:null},O={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:z,ReactCurrentOwner:H};function _(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:rr,forEach:function(f,N,ee){rr(f,function(){N.apply(this,arguments)},ee)},count:function(f){var N=0;return rr(f,function(){N++}),N},toArray:function(f){return rr(f,function(N){return N})||[]},only:function(f){if(!Be(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},te.Component=Q,te.Fragment=i,te.Profiler=m,te.PureComponent=de,te.StrictMode=p,te.Suspense=T,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,te.act=_,te.cloneElement=function(f,N,ee){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var re=q({},f.props),le=f.key,oe=f.ref,pe=f._owner;if(N!=null){if(N.ref!==void 0&&(oe=N.ref,pe=H.current),N.key!==void 0&&(le=""+N.key),f.type&&f.type.defaultProps)var ce=f.type.defaultProps;for(fe in N)Z.call(N,fe)&&!I.hasOwnProperty(fe)&&(re[fe]=N[fe]===void 0&&ce!==void 0?ce[fe]:N[fe])}var fe=arguments.length-2;if(fe===1)re.children=ee;else if(1<fe){ce=Array(fe);for(var Ie=0;Ie<fe;Ie++)ce[Ie]=arguments[Ie+2];re.children=ce}return{$$typeof:o,type:f.type,key:le,ref:oe,props:re,_owner:pe}},te.createContext=function(f){return f={$$typeof:S,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},te.createElement=D,te.createFactory=function(f){var N=D.bind(null,f);return N.type=f,N},te.createRef=function(){return{current:null}},te.forwardRef=function(f){return{$$typeof:E,render:f}},te.isValidElement=Be,te.lazy=function(f){return{$$typeof:G,_payload:{_status:-1,_result:f},_init:Xe}},te.memo=function(f,N){return{$$typeof:K,type:f,compare:N===void 0?null:N}},te.startTransition=function(f){var N=z.transition;z.transition={};try{f()}finally{z.transition=N}},te.unstable_act=_,te.useCallback=function(f,N){return Ne.current.useCallback(f,N)},te.useContext=function(f){return Ne.current.useContext(f)},te.useDebugValue=function(){},te.useDeferredValue=function(f){return Ne.current.useDeferredValue(f)},te.useEffect=function(f,N){return Ne.current.useEffect(f,N)},te.useId=function(){return Ne.current.useId()},te.useImperativeHandle=function(f,N,ee){return Ne.current.useImperativeHandle(f,N,ee)},te.useInsertionEffect=function(f,N){return Ne.current.useInsertionEffect(f,N)},te.useLayoutEffect=function(f,N){return Ne.current.useLayoutEffect(f,N)},te.useMemo=function(f,N){return Ne.current.useMemo(f,N)},te.useReducer=function(f,N,ee){return Ne.current.useReducer(f,N,ee)},te.useRef=function(f){return Ne.current.useRef(f)},te.useState=function(f){return Ne.current.useState(f)},te.useSyncExternalStore=function(f,N,ee){return Ne.current.useSyncExternalStore(f,N,ee)},te.useTransition=function(){return Ne.current.useTransition()},te.version="18.3.1",te}var pp;function ai(){return pp||(pp=1,Bl.exports=vx()),Bl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function yx(){if(up)return nt;up=1;var o=ai(),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(E,T,K){var G,W={},J=null,ie=null;K!==void 0&&(J=""+K),T.key!==void 0&&(J=""+T.key),T.ref!==void 0&&(ie=T.ref);for(G in T)p.call(T,G)&&!j.hasOwnProperty(G)&&(W[G]=T[G]);if(E&&E.defaultProps)for(G in T=E.defaultProps,T)W[G]===void 0&&(W[G]=T[G]);return{$$typeof:c,type:E,key:J,ref:ie,props:W,_owner:m.current}}return nt.Fragment=i,nt.jsx=S,nt.jsxs=S,nt}var hp;function jx(){return hp||(hp=1,Pl.exports=yx()),Pl.exports}var r=jx(),No={},Ml={exports:{}},cr={},Rl={exports:{}},Dl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Nx(){return xp||(xp=1,(function(o){function c(z,O){var _=z.length;z.push(O);e:for(;0<_;){var f=_-1>>>1,N=z[f];if(0<m(N,O))z[f]=O,z[_]=N,_=f;else break e}}function i(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var O=z[0],_=z.pop();if(_!==O){z[0]=_;e:for(var f=0,N=z.length,ee=N>>>1;f<ee;){var re=2*(f+1)-1,le=z[re],oe=re+1,pe=z[oe];if(0>m(le,_))oe<N&&0>m(pe,le)?(z[f]=pe,z[oe]=_,f=oe):(z[f]=le,z[re]=_,f=re);else if(oe<N&&0>m(pe,_))z[f]=pe,z[oe]=_,f=oe;else break e}}return O}function m(z,O){var _=z.sortIndex-O.sortIndex;return _!==0?_:z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;o.unstable_now=function(){return j.now()}}else{var S=Date,E=S.now();o.unstable_now=function(){return S.now()-E}}var T=[],K=[],G=1,W=null,J=3,ie=!1,q=!1,U=!1,Q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(z){for(var O=i(K);O!==null;){if(O.callback===null)p(K);else if(O.startTime<=z)p(K),O.sortIndex=O.expirationTime,c(T,O);else break;O=i(K)}}function L(z){if(U=!1,ne(z),!q)if(i(T)!==null)q=!0,Xe(Z);else{var O=i(K);O!==null&&Ne(L,O.startTime-z)}}function Z(z,O){q=!1,U&&(U=!1,me(D),D=-1),ie=!0;var _=J;try{for(ne(O),W=i(T);W!==null&&(!(W.expirationTime>O)||z&&!ae());){var f=W.callback;if(typeof f=="function"){W.callback=null,J=W.priorityLevel;var N=f(W.expirationTime<=O);O=o.unstable_now(),typeof N=="function"?W.callback=N:W===i(T)&&p(T),ne(O)}else p(T);W=i(T)}if(W!==null)var ee=!0;else{var re=i(K);re!==null&&Ne(L,re.startTime-O),ee=!1}return ee}finally{W=null,J=_,ie=!1}}var H=!1,I=null,D=-1,je=5,Be=-1;function ae(){return!(o.unstable_now()-Be<je)}function _e(){if(I!==null){var z=o.unstable_now();Be=z;var O=!0;try{O=I(!0,z)}finally{O?Te():(H=!1,I=null)}}else H=!1}var Te;if(typeof de=="function")Te=function(){de(_e)};else if(typeof MessageChannel!="undefined"){var Ke=new MessageChannel,rr=Ke.port2;Ke.port1.onmessage=_e,Te=function(){rr.postMessage(null)}}else Te=function(){Q(_e,0)};function Xe(z){I=z,H||(H=!0,Te())}function Ne(z,O){D=Q(function(){z(o.unstable_now())},O)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){q||ie||(q=!0,Xe(Z))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return J},o.unstable_getFirstCallbackNode=function(){return i(T)},o.unstable_next=function(z){switch(J){case 1:case 2:case 3:var O=3;break;default:O=J}var _=J;J=O;try{return z()}finally{J=_}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var _=J;J=z;try{return O()}finally{J=_}},o.unstable_scheduleCallback=function(z,O,_){var f=o.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?f+_:f):_=f,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=_+N,z={id:G++,callback:O,priorityLevel:z,startTime:_,expirationTime:N,sortIndex:-1},_>f?(z.sortIndex=_,c(K,z),i(T)===null&&z===i(K)&&(U?(me(D),D=-1):U=!0,Ne(L,_-f))):(z.sortIndex=N,c(T,z),q||ie||(q=!0,Xe(Z))),z},o.unstable_shouldYield=ae,o.unstable_wrapCallback=function(z){var O=J;return function(){var _=J;J=O;try{return z.apply(this,arguments)}finally{J=_}}}})(Dl)),Dl}var mp;function bx(){return mp||(mp=1,Rl.exports=Nx()),Rl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function wx(){if(fp)return cr;fp=1;var o=ai(),c=bx();function i(e){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)s+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function j(e,s){S(e,s),S(e+"Capture",s)}function S(e,s){for(m[e]=s,e=0;e<s.length;e++)p.add(s[e])}var E=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},W={};function J(e){return T.call(W,e)?!0:T.call(G,e)?!1:K.test(e)?W[e]=!0:(G[e]=!0,!1)}function ie(e,s,n,t){if(n!==null&&n.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,s,n,t){if(s===null||typeof s=="undefined"||ie(e,s,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function U(e,s,n,t,a,l,d){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=s,this.sanitizeURL=l,this.removeEmptyString=d}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var s=e[0];Q[s]=new U(s,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var s=e.replace(me,de);Q[s]=new U(s,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var s=e.replace(me,de);Q[s]=new U(s,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var s=e.replace(me,de);Q[s]=new U(s,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,s,n,t){var a=Q.hasOwnProperty(s)?Q[s]:null;(a!==null?a.type!==0:t||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,n,a,t)&&(n=null),t||a===null?J(s)&&(n===null?e.removeAttribute(s):e.setAttribute(s,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(s=a.attributeName,t=a.attributeNamespace,n===null?e.removeAttribute(s):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,t?e.setAttributeNS(t,s,n):e.setAttribute(s,n))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),H=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),ae=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),rr=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),z=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,f;function N(e){if(f===void 0)try{throw Error()}catch(n){var s=n.stack.trim().match(/\n( *(at )?)/);f=s&&s[1]||""}return`
`+f+e}var ee=!1;function re(e,s){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(y){var t=y}Reflect.construct(e,[],s)}else{try{s.call()}catch(y){t=y}e.call(s.prototype)}else{try{throw Error()}catch(y){t=y}e()}}catch(y){if(y&&t&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),l=t.stack.split(`
`),d=a.length-1,u=l.length-1;1<=d&&0<=u&&a[d]!==l[u];)u--;for(;1<=d&&0<=u;d--,u--)if(a[d]!==l[u]){if(d!==1||u!==1)do if(d--,u--,0>u||a[d]!==l[u]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=u);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function le(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case H:return"Portal";case je:return"Profiler";case D:return"StrictMode";case Te:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case _e:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rr:return s=e.displayName||null,s!==null?s:oe(e.type)||"Memo";case Xe:s=e._payload,e=e._init;try{return oe(e(s))}catch{}}return null}function pe(e){var s=e.type;switch(e.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=s.render,e=e.displayName||e.name||"",s.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(s);case 8:return s===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ie(e){var s=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,s),t=""+e[s];if(!e.hasOwnProperty(s)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return a.call(this)},set:function(d){t=""+d,l.call(this,d)}}),Object.defineProperty(e,s,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Ie(e))}function ys(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var n=s.getValue(),t="";return e&&(t=fe(e)?e.checked?"true":"false":e.value),e=t,e!==n?(s.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ao(e,s){var n=s.checked;return _({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function gi(e,s){var n=s.defaultValue==null?"":s.defaultValue,t=s.checked!=null?s.checked:s.defaultChecked;n=ce(s.value!=null?s.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function vi(e,s){s=s.checked,s!=null&&ne(e,"checked",s,!1)}function Wo(e,s){vi(e,s);var n=ce(s.value),t=s.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}s.hasOwnProperty("value")?Uo(e,s.type,n):s.hasOwnProperty("defaultValue")&&Uo(e,s.type,ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(e.defaultChecked=!!s.defaultChecked)}function yi(e,s,n){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var t=s.type;if(!(t!=="submit"&&t!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+e._wrapperState.initialValue,n||s===e.value||(e.value=s),e.defaultValue=s}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uo(e,s,n){(s!=="number"||kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Fs(e,s,n,t){if(e=e.options,s){s={};for(var a=0;a<n.length;a++)s["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=s.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&t&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),s=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}s!==null||e[a].disabled||(s=e[a])}s!==null&&(s.selected=!0)}}function Ho(e,s){if(s.dangerouslySetInnerHTML!=null)throw Error(i(91));return _({},s,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ji(e,s){var n=s.value;if(n==null){if(n=s.children,s=s.defaultValue,n!=null){if(s!=null)throw Error(i(92));if(vn(n)){if(1<n.length)throw Error(i(93));n=n[0]}s=n}s==null&&(s=""),n=s}e._wrapperState={initialValue:ce(n)}}function Ni(e,s){var n=ce(s.value),t=ce(s.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),s.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function bi(e){var s=e.textContent;s===e._wrapperState.initialValue&&s!==""&&s!==null&&(e.value=s)}function wi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,s){return e==null||e==="http://www.w3.org/1999/xhtml"?wi(s):e==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ut,ki=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(s,n,t,a){MSApp.execUnsafeLocalFunction(function(){return e(s,n,t,a)})}:e})(function(e,s){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=s;else{for(ut=ut||document.createElement("div"),ut.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ut.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;s.firstChild;)e.appendChild(s.firstChild)}});function yn(e,s){if(s){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=s;return}}e.textContent=s}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nu=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Nu.forEach(function(s){s=s+e.charAt(0).toUpperCase()+e.substring(1),jn[s]=jn[e]})});function Si(e,s,n){return s==null||typeof s=="boolean"||s===""?"":n||typeof s!="number"||s===0||jn.hasOwnProperty(e)&&jn[e]?(""+s).trim():s+"px"}function Ci(e,s){e=e.style;for(var n in s)if(s.hasOwnProperty(n)){var t=n.indexOf("--")===0,a=Si(n,s[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,a):e[n]=a}}var bu=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vo(e,s){if(s){if(bu[e]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(i(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(i(61))}if(s.style!=null&&typeof s.style!="object")throw Error(i(62))}}function Go(e,s){if(e.indexOf("-")===-1)return typeof s.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qo=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ko=null,Os=null,As=null;function Ti(e){if(e=Un(e)){if(typeof Ko!="function")throw Error(i(280));var s=e.stateNode;s&&(s=Mt(s),Ko(e.stateNode,e.type,s))}}function zi(e){Os?As?As.push(e):As=[e]:Os=e}function Ii(){if(Os){var e=Os,s=As;if(As=Os=null,Ti(e),s)for(e=0;e<s.length;e++)Ti(s[e])}}function Ei(e,s){return e(s)}function Li(){}var Xo=!1;function _i(e,s,n){if(Xo)return e(s,n);Xo=!0;try{return Ei(e,s,n)}finally{Xo=!1,(Os!==null||As!==null)&&(Li(),Ii())}}function Nn(e,s){var n=e.stateNode;if(n===null)return null;var t=Mt(n);if(t===null)return null;n=t[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,s,typeof n));return n}var qo=!1;if(E)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){qo=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{qo=!1}function wu(e,s,n,t,a,l,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{s.apply(n,y)}catch(w){this.onError(w)}}var wn=!1,ht=null,xt=!1,Zo=null,ku={onError:function(e){wn=!0,ht=e}};function Su(e,s,n,t,a,l,d,u,h){wn=!1,ht=null,wu.apply(ku,arguments)}function Cu(e,s,n,t,a,l,d,u,h){if(Su.apply(this,arguments),wn){if(wn){var y=ht;wn=!1,ht=null}else throw Error(i(198));xt||(xt=!0,Zo=y)}}function js(e){var s=e,n=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(n=s.return),e=s.return;while(e)}return s.tag===3?n:null}function Pi(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function Bi(e){if(js(e)!==e)throw Error(i(188))}function Tu(e){var s=e.alternate;if(!s){if(s=js(e),s===null)throw Error(i(188));return s!==e?null:e}for(var n=e,t=s;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(t=a.return,t!==null){n=t;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Bi(a),e;if(l===t)return Bi(a),s;l=l.sibling}throw Error(i(188))}if(n.return!==t.return)n=a,t=l;else{for(var d=!1,u=a.child;u;){if(u===n){d=!0,n=a,t=l;break}if(u===t){d=!0,t=a,n=l;break}u=u.sibling}if(!d){for(u=l.child;u;){if(u===n){d=!0,n=l,t=a;break}if(u===t){d=!0,t=l,n=a;break}u=u.sibling}if(!d)throw Error(i(189))}}if(n.alternate!==t)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:s}function Mi(e){return e=Tu(e),e!==null?Ri(e):null}function Ri(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var s=Ri(e);if(s!==null)return s;e=e.sibling}return null}var Di=c.unstable_scheduleCallback,Fi=c.unstable_cancelCallback,zu=c.unstable_shouldYield,Iu=c.unstable_requestPaint,Me=c.unstable_now,Eu=c.unstable_getCurrentPriorityLevel,Jo=c.unstable_ImmediatePriority,Oi=c.unstable_UserBlockingPriority,mt=c.unstable_NormalPriority,Lu=c.unstable_LowPriority,Ai=c.unstable_IdlePriority,ft=null,Br=null;function _u(e){if(Br&&typeof Br.onCommitFiberRoot=="function")try{Br.onCommitFiberRoot(ft,e,void 0,(e.current.flags&128)===128)}catch{}}var Sr=Math.clz32?Math.clz32:Mu,Pu=Math.log,Bu=Math.LN2;function Mu(e){return e>>>=0,e===0?32:31-(Pu(e)/Bu|0)|0}var gt=64,vt=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yt(e,s){var n=e.pendingLanes;if(n===0)return 0;var t=0,a=e.suspendedLanes,l=e.pingedLanes,d=n&268435455;if(d!==0){var u=d&~a;u!==0?t=kn(u):(l&=d,l!==0&&(t=kn(l)))}else d=n&~a,d!==0?t=kn(d):l!==0&&(t=kn(l));if(t===0)return 0;if(s!==0&&s!==t&&(s&a)===0&&(a=t&-t,l=s&-s,a>=l||a===16&&(l&4194240)!==0))return s;if((t&4)!==0&&(t|=n&16),s=e.entangledLanes,s!==0)for(e=e.entanglements,s&=t;0<s;)n=31-Sr(s),a=1<<n,t|=e[n],s&=~a;return t}function Ru(e,s){switch(e){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Du(e,s){for(var n=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-Sr(l),u=1<<d,h=a[d];h===-1?((u&n)===0||(u&t)!==0)&&(a[d]=Ru(u,s)):h<=s&&(e.expiredLanes|=u),l&=~u}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wi(){var e=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),e}function ra(e){for(var s=[],n=0;31>n;n++)s.push(e);return s}function Sn(e,s,n){e.pendingLanes|=s,s!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,s=31-Sr(s),e[s]=n}function Fu(e,s){var n=e.pendingLanes&~s;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=s,e.mutableReadLanes&=s,e.entangledLanes&=s,s=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Sr(n),l=1<<a;s[a]=0,t[a]=-1,e[a]=-1,n&=~l}}function sa(e,s){var n=e.entangledLanes|=s;for(e=e.entanglements;n;){var t=31-Sr(n),a=1<<t;a&s|e[t]&s&&(e[t]|=s),n&=~a}}var ge=0;function Ui(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hi,na,$i,Vi,Gi,ta=!1,jt=[],Xr=null,qr=null,Zr=null,Cn=new Map,Tn=new Map,Jr=[],Ou="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qi(e,s){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Cn.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(s.pointerId)}}function zn(e,s,n,t,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:s,domEventName:n,eventSystemFlags:t,nativeEvent:l,targetContainers:[a]},s!==null&&(s=Un(s),s!==null&&na(s)),e):(e.eventSystemFlags|=t,s=e.targetContainers,a!==null&&s.indexOf(a)===-1&&s.push(a),e)}function Au(e,s,n,t,a){switch(s){case"focusin":return Xr=zn(Xr,e,s,n,t,a),!0;case"dragenter":return qr=zn(qr,e,s,n,t,a),!0;case"mouseover":return Zr=zn(Zr,e,s,n,t,a),!0;case"pointerover":var l=a.pointerId;return Cn.set(l,zn(Cn.get(l)||null,e,s,n,t,a)),!0;case"gotpointercapture":return l=a.pointerId,Tn.set(l,zn(Tn.get(l)||null,e,s,n,t,a)),!0}return!1}function Yi(e){var s=Ns(e.target);if(s!==null){var n=js(s);if(n!==null){if(s=n.tag,s===13){if(s=Pi(n),s!==null){e.blockedOn=s,Gi(e.priority,function(){$i(n)});return}}else if(s===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nt(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var n=aa(e.domEventName,e.eventSystemFlags,s[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);Qo=t,n.target.dispatchEvent(t),Qo=null}else return s=Un(n),s!==null&&na(s),e.blockedOn=n,!1;s.shift()}return!0}function Ki(e,s,n){Nt(e)&&n.delete(s)}function Wu(){ta=!1,Xr!==null&&Nt(Xr)&&(Xr=null),qr!==null&&Nt(qr)&&(qr=null),Zr!==null&&Nt(Zr)&&(Zr=null),Cn.forEach(Ki),Tn.forEach(Ki)}function In(e,s){e.blockedOn===s&&(e.blockedOn=null,ta||(ta=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Wu)))}function En(e){function s(a){return In(a,e)}if(0<jt.length){In(jt[0],e);for(var n=1;n<jt.length;n++){var t=jt[n];t.blockedOn===e&&(t.blockedOn=null)}}for(Xr!==null&&In(Xr,e),qr!==null&&In(qr,e),Zr!==null&&In(Zr,e),Cn.forEach(s),Tn.forEach(s),n=0;n<Jr.length;n++)t=Jr[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)Yi(n),n.blockedOn===null&&Jr.shift()}var Ws=L.ReactCurrentBatchConfig,bt=!0;function Uu(e,s,n,t){var a=ge,l=Ws.transition;Ws.transition=null;try{ge=1,oa(e,s,n,t)}finally{ge=a,Ws.transition=l}}function Hu(e,s,n,t){var a=ge,l=Ws.transition;Ws.transition=null;try{ge=4,oa(e,s,n,t)}finally{ge=a,Ws.transition=l}}function oa(e,s,n,t){if(bt){var a=aa(e,s,n,t);if(a===null)wa(e,s,t,wt,n),Qi(e,t);else if(Au(a,e,s,n,t))t.stopPropagation();else if(Qi(e,t),s&4&&-1<Ou.indexOf(e)){for(;a!==null;){var l=Un(a);if(l!==null&&Hi(l),l=aa(e,s,n,t),l===null&&wa(e,s,t,wt,n),l===a)break;a=l}a!==null&&t.stopPropagation()}else wa(e,s,t,null,n)}}var wt=null;function aa(e,s,n,t){if(wt=null,e=Yo(t),e=Ns(e),e!==null)if(s=js(e),s===null)e=null;else if(n=s.tag,n===13){if(e=Pi(s),e!==null)return e;e=null}else if(n===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null);return wt=e,null}function Xi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eu()){case Jo:return 1;case Oi:return 4;case mt:case Lu:return 16;case Ai:return 536870912;default:return 16}default:return 16}}var es=null,la=null,kt=null;function qi(){if(kt)return kt;var e,s=la,n=s.length,t,a="value"in es?es.value:es.textContent,l=a.length;for(e=0;e<n&&s[e]===a[e];e++);var d=n-e;for(t=1;t<=d&&s[n-t]===a[l-t];t++);return kt=a.slice(e,1<t?1-t:void 0)}function St(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Ct(){return!0}function Zi(){return!1}function pr(e){function s(n,t,a,l,d){this._reactName=n,this._targetInst=a,this.type=t,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ct:Zi,this.isPropagationStopped=Zi,this}return _(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ct)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ct)},persist:function(){},isPersistent:Ct}),s}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=pr(Us),Ln=_({},Us,{view:0,detail:0}),$u=pr(Ln),ca,da,_n,Tt=_({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(ca=e.screenX-_n.screenX,da=e.screenY-_n.screenY):da=ca=0,_n=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Ji=pr(Tt),Vu=_({},Tt,{dataTransfer:0}),Gu=pr(Vu),Qu=_({},Ln,{relatedTarget:0}),pa=pr(Qu),Yu=_({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Ku=pr(Yu),Xu=_({},Us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qu=pr(Xu),Zu=_({},Us,{data:0}),ec=pr(Zu),Ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sh(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=rh[e])?!!s[e]:!1}function ua(){return sh}var nh=_({},Ln,{key:function(e){if(e.key){var s=Ju[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=St(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(e){return e.type==="keypress"?St(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?St(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),th=pr(nh),oh=_({},Tt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=pr(oh),ah=_({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),lh=pr(ah),ih=_({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=pr(ih),dh=_({},Tt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ph=pr(dh),uh=[9,13,27,32],ha=E&&"CompositionEvent"in window,Pn=null;E&&"documentMode"in document&&(Pn=document.documentMode);var hh=E&&"TextEvent"in window&&!Pn,sc=E&&(!ha||Pn&&8<Pn&&11>=Pn),nc=" ",tc=!1;function oc(e,s){switch(e){case"keyup":return uh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function xh(e,s){switch(e){case"compositionend":return ac(s);case"keypress":return s.which!==32?null:(tc=!0,nc);case"textInput":return e=s.data,e===nc&&tc?null:e;default:return null}}function mh(e,s){if(Hs)return e==="compositionend"||!ha&&oc(e,s)?(e=qi(),kt=la=es=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return sc&&s.locale!=="ko"?null:s.data;default:return null}}var fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!fh[e.type]:s==="textarea"}function ic(e,s,n,t){zi(t),s=_t(s,"onChange"),0<s.length&&(n=new ia("onChange","change",null,n,t),e.push({event:n,listeners:s}))}var Bn=null,Mn=null;function gh(e){Cc(e,0)}function zt(e){var s=Ys(e);if(ys(s))return e}function vh(e,s){if(e==="change")return s}var cc=!1;if(E){var xa;if(E){var ma="oninput"in document;if(!ma){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),ma=typeof dc.oninput=="function"}xa=ma}else xa=!1;cc=xa&&(!document.documentMode||9<document.documentMode)}function pc(){Bn&&(Bn.detachEvent("onpropertychange",uc),Mn=Bn=null)}function uc(e){if(e.propertyName==="value"&&zt(Mn)){var s=[];ic(s,Mn,e,Yo(e)),_i(gh,s)}}function yh(e,s,n){e==="focusin"?(pc(),Bn=s,Mn=n,Bn.attachEvent("onpropertychange",uc)):e==="focusout"&&pc()}function jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zt(Mn)}function Nh(e,s){if(e==="click")return zt(s)}function bh(e,s){if(e==="input"||e==="change")return zt(s)}function wh(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var Cr=typeof Object.is=="function"?Object.is:wh;function Rn(e,s){if(Cr(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var n=Object.keys(e),t=Object.keys(s);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var a=n[t];if(!T.call(s,a)||!Cr(e[a],s[a]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,s){var n=hc(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=s&&t>=s)return{node:n,offset:s-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hc(n)}}function mc(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?mc(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function fc(){for(var e=window,s=kr();s instanceof e.HTMLIFrameElement;){try{var n=typeof s.contentWindow.location.href=="string"}catch{n=!1}if(n)e=s.contentWindow;else break;s=kr(e.document)}return s}function fa(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}function kh(e){var s=fc(),n=e.focusedElem,t=e.selectionRange;if(s!==n&&n&&n.ownerDocument&&mc(n.ownerDocument.documentElement,n)){if(t!==null&&fa(n)){if(s=t.start,e=t.end,e===void 0&&(e=s),"selectionStart"in n)n.selectionStart=s,n.selectionEnd=Math.min(e,n.value.length);else if(e=(s=n.ownerDocument||document)&&s.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(t.start,a);t=t.end===void 0?l:Math.min(t.end,a),!e.extend&&l>t&&(a=t,t=l,l=a),a=xc(n,l);var d=xc(n,t);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(s=s.createRange(),s.setStart(a.node,a.offset),e.removeAllRanges(),l>t?(e.addRange(s),e.extend(d.node,d.offset)):(s.setEnd(d.node,d.offset),e.addRange(s)))}}for(s=[],e=n;e=e.parentNode;)e.nodeType===1&&s.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<s.length;n++)e=s[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sh=E&&"documentMode"in document&&11>=document.documentMode,$s=null,ga=null,Dn=null,va=!1;function gc(e,s,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;va||$s==null||$s!==kr(t)||(t=$s,"selectionStart"in t&&fa(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Dn&&Rn(Dn,t)||(Dn=t,t=_t(ga,"onSelect"),0<t.length&&(s=new ia("onSelect","select",null,s,n),e.push({event:s,listeners:t}),s.target=$s)))}function It(e,s){var n={};return n[e.toLowerCase()]=s.toLowerCase(),n["Webkit"+e]="webkit"+s,n["Moz"+e]="moz"+s,n}var Vs={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionend:It("Transition","TransitionEnd")},ya={},vc={};E&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Et(e){if(ya[e])return ya[e];if(!Vs[e])return e;var s=Vs[e],n;for(n in s)if(s.hasOwnProperty(n)&&n in vc)return ya[e]=s[n];return e}var yc=Et("animationend"),jc=Et("animationiteration"),Nc=Et("animationstart"),bc=Et("transitionend"),wc=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(e,s){wc.set(e,s),j(s,[e])}for(var ja=0;ja<kc.length;ja++){var Na=kc[ja],Ch=Na.toLowerCase(),Th=Na[0].toUpperCase()+Na.slice(1);rs(Ch,"on"+Th)}rs(yc,"onAnimationEnd"),rs(jc,"onAnimationIteration"),rs(Nc,"onAnimationStart"),rs("dblclick","onDoubleClick"),rs("focusin","onFocus"),rs("focusout","onBlur"),rs(bc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Sc(e,s,n){var t=e.type||"unknown-event";e.currentTarget=n,Cu(t,s,void 0,e),e.currentTarget=null}function Cc(e,s){s=(s&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],a=t.event;t=t.listeners;e:{var l=void 0;if(s)for(var d=t.length-1;0<=d;d--){var u=t[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==l&&a.isPropagationStopped())break e;Sc(a,u,y),l=h}else for(d=0;d<t.length;d++){if(u=t[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==l&&a.isPropagationStopped())break e;Sc(a,u,y),l=h}}}if(xt)throw e=Zo,xt=!1,Zo=null,e}function we(e,s){var n=s[Ia];n===void 0&&(n=s[Ia]=new Set);var t=e+"__bubble";n.has(t)||(Tc(s,e,2,!1),n.add(t))}function ba(e,s,n){var t=0;s&&(t|=4),Tc(n,e,t,s)}var Lt="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[Lt]){e[Lt]=!0,p.forEach(function(n){n!=="selectionchange"&&(zh.has(n)||ba(n,!1,e),ba(n,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Lt]||(s[Lt]=!0,ba("selectionchange",!1,s))}}function Tc(e,s,n,t){switch(Xi(s)){case 1:var a=Uu;break;case 4:a=Hu;break;default:a=oa}n=a.bind(null,s,n,e),a=void 0,!qo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(s,n,{capture:!0,passive:a}):e.addEventListener(s,n,!0):a!==void 0?e.addEventListener(s,n,{passive:a}):e.addEventListener(s,n,!1)}function wa(e,s,n,t,a){var l=t;if((s&1)===0&&(s&2)===0&&t!==null)e:for(;;){if(t===null)return;var d=t.tag;if(d===3||d===4){var u=t.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(d===4)for(d=t.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;u!==null;){if(d=Ns(u),d===null)return;if(h=d.tag,h===5||h===6){t=l=d;continue e}u=u.parentNode}}t=t.return}_i(function(){var y=l,w=Yo(n),k=[];e:{var b=wc.get(e);if(b!==void 0){var P=ia,M=e;switch(e){case"keypress":if(St(n)===0)break e;case"keydown":case"keyup":P=th;break;case"focusin":M="focus",P=pa;break;case"focusout":M="blur",P=pa;break;case"beforeblur":case"afterblur":P=pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Ji;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Gu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=lh;break;case yc:case jc:case Nc:P=Ku;break;case bc:P=ch;break;case"scroll":P=$u;break;case"wheel":P=ph;break;case"copy":case"cut":case"paste":P=qu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=rc}var R=(s&4)!==0,Re=!R&&e==="scroll",g=R?b!==null?b+"Capture":null:b;R=[];for(var x=y,v;x!==null;){v=x;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=Nn(x,g),C!=null&&R.push(An(x,C,v)))),Re)break;x=x.return}0<R.length&&(b=new P(b,M,null,n,w),k.push({event:b,listeners:R}))}}if((s&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",b&&n!==Qo&&(M=n.relatedTarget||n.fromElement)&&(Ns(M)||M[Or]))break e;if((P||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,P?(M=n.relatedTarget||n.toElement,P=y,M=M?Ns(M):null,M!==null&&(Re=js(M),M!==Re||M.tag!==5&&M.tag!==6)&&(M=null)):(P=null,M=y),P!==M)){if(R=Ji,C="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(R=rc,C="onPointerLeave",g="onPointerEnter",x="pointer"),Re=P==null?b:Ys(P),v=M==null?b:Ys(M),b=new R(C,x+"leave",P,n,w),b.target=Re,b.relatedTarget=v,C=null,Ns(w)===y&&(R=new R(g,x+"enter",M,n,w),R.target=v,R.relatedTarget=Re,C=R),Re=C,P&&M)r:{for(R=P,g=M,x=0,v=R;v;v=Gs(v))x++;for(v=0,C=g;C;C=Gs(C))v++;for(;0<x-v;)R=Gs(R),x--;for(;0<v-x;)g=Gs(g),v--;for(;x--;){if(R===g||g!==null&&R===g.alternate)break r;R=Gs(R),g=Gs(g)}R=null}else R=null;P!==null&&zc(k,b,P,R,!1),M!==null&&Re!==null&&zc(k,Re,M,R,!0)}}e:{if(b=y?Ys(y):window,P=b.nodeName&&b.nodeName.toLowerCase(),P==="select"||P==="input"&&b.type==="file")var F=vh;else if(lc(b))if(cc)F=bh;else{F=jh;var $=yh}else(P=b.nodeName)&&P.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(F=Nh);if(F&&(F=F(e,y))){ic(k,F,n,w);break e}$&&$(e,b,y),e==="focusout"&&($=b._wrapperState)&&$.controlled&&b.type==="number"&&Uo(b,"number",b.value)}switch($=y?Ys(y):window,e){case"focusin":(lc($)||$.contentEditable==="true")&&($s=$,ga=y,Dn=null);break;case"focusout":Dn=ga=$s=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,gc(k,n,w);break;case"selectionchange":if(Sh)break;case"keydown":case"keyup":gc(k,n,w)}var V;if(ha)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Hs?oc(e,n)&&(Y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(sc&&n.locale!=="ko"&&(Hs||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Hs&&(V=qi()):(es=w,la="value"in es?es.value:es.textContent,Hs=!0)),$=_t(y,Y),0<$.length&&(Y=new ec(Y,e,null,n,w),k.push({event:Y,listeners:$}),V?Y.data=V:(V=ac(n),V!==null&&(Y.data=V)))),(V=hh?xh(e,n):mh(e,n))&&(y=_t(y,"onBeforeInput"),0<y.length&&(w=new ec("onBeforeInput","beforeinput",null,n,w),k.push({event:w,listeners:y}),w.data=V))}Cc(k,s)})}function An(e,s,n){return{instance:e,listener:s,currentTarget:n}}function _t(e,s){for(var n=s+"Capture",t=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Nn(e,n),l!=null&&t.unshift(An(e,l,a)),l=Nn(e,s),l!=null&&t.push(An(e,l,a))),e=e.return}return t}function Gs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zc(e,s,n,t,a){for(var l=s._reactName,d=[];n!==null&&n!==t;){var u=n,h=u.alternate,y=u.stateNode;if(h!==null&&h===t)break;u.tag===5&&y!==null&&(u=y,a?(h=Nn(n,l),h!=null&&d.unshift(An(n,h,u))):a||(h=Nn(n,l),h!=null&&d.push(An(n,h,u)))),n=n.return}d.length!==0&&e.push({event:s,listeners:d})}var Ih=/\r\n?/g,Eh=/\u0000|\uFFFD/g;function Ic(e){return(typeof e=="string"?e:""+e).replace(Ih,`
`).replace(Eh,"")}function Pt(e,s,n){if(s=Ic(s),Ic(e)!==s&&n)throw Error(i(425))}function Bt(){}var ka=null,Sa=null;function Ca(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec!="undefined"?function(e){return Ec.resolve(null).then(e).catch(Ph)}:Ta;function Ph(e){setTimeout(function(){throw e})}function za(e,s){var n=s,t=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0){e.removeChild(a),En(s);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=a}while(n);En(s)}function ss(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(s===0)return e;s--}else n==="/$"&&s++}e=e.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Mr="__reactFiber$"+Qs,Wn="__reactProps$"+Qs,Or="__reactContainer$"+Qs,Ia="__reactEvents$"+Qs,Bh="__reactListeners$"+Qs,Mh="__reactHandles$"+Qs;function Ns(e){var s=e[Mr];if(s)return s;for(var n=e.parentNode;n;){if(s=n[Or]||n[Mr]){if(n=s.alternate,s.child!==null||n!==null&&n.child!==null)for(e=Lc(e);e!==null;){if(n=e[Mr])return n;e=Lc(e)}return s}e=n,n=e.parentNode}return null}function Un(e){return e=e[Mr]||e[Or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ys(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Mt(e){return e[Wn]||null}var Ea=[],Ks=-1;function ns(e){return{current:e}}function ke(e){0>Ks||(e.current=Ea[Ks],Ea[Ks]=null,Ks--)}function be(e,s){Ks++,Ea[Ks]=e.current,e.current=s}var ts={},qe=ns(ts),tr=ns(!1),bs=ts;function Xs(e,s){var n=e.type.contextTypes;if(!n)return ts;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===s)return t.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=s[l];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),a}function or(e){return e=e.childContextTypes,e!=null}function Rt(){ke(tr),ke(qe)}function _c(e,s,n){if(qe.current!==ts)throw Error(i(168));be(qe,s),be(tr,n)}function Pc(e,s,n){var t=e.stateNode;if(s=s.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var a in t)if(!(a in s))throw Error(i(108,pe(e)||"Unknown",a));return _({},n,t)}function Dt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ts,bs=qe.current,be(qe,e),be(tr,tr.current),!0}function Bc(e,s,n){var t=e.stateNode;if(!t)throw Error(i(169));n?(e=Pc(e,s,bs),t.__reactInternalMemoizedMergedChildContext=e,ke(tr),ke(qe),be(qe,e)):ke(tr),be(tr,n)}var Ar=null,Ft=!1,La=!1;function Mc(e){Ar===null?Ar=[e]:Ar.push(e)}function Rh(e){Ft=!0,Mc(e)}function os(){if(!La&&Ar!==null){La=!0;var e=0,s=ge;try{var n=Ar;for(ge=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}Ar=null,Ft=!1}catch(a){throw Ar!==null&&(Ar=Ar.slice(e+1)),Di(Jo,os),a}finally{ge=s,La=!1}}return null}var qs=[],Zs=0,Ot=null,At=0,gr=[],vr=0,ws=null,Wr=1,Ur="";function ks(e,s){qs[Zs++]=At,qs[Zs++]=Ot,Ot=e,At=s}function Rc(e,s,n){gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=ws,ws=e;var t=Wr;e=Ur;var a=32-Sr(t)-1;t&=~(1<<a),n+=1;var l=32-Sr(s)+a;if(30<l){var d=a-a%5;l=(t&(1<<d)-1).toString(32),t>>=d,a-=d,Wr=1<<32-Sr(s)+a|n<<a|t,Ur=l+e}else Wr=1<<l|n<<a|t,Ur=e}function _a(e){e.return!==null&&(ks(e,1),Rc(e,1,0))}function Pa(e){for(;e===Ot;)Ot=qs[--Zs],qs[Zs]=null,At=qs[--Zs],qs[Zs]=null;for(;e===ws;)ws=gr[--vr],gr[vr]=null,Ur=gr[--vr],gr[vr]=null,Wr=gr[--vr],gr[vr]=null}var ur=null,hr=null,ze=!1,Tr=null;function Dc(e,s){var n=br(5,null,null,0);n.elementType="DELETED",n.stateNode=s,n.return=e,s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)}function Fc(e,s){switch(e.tag){case 5:var n=e.type;return s=s.nodeType!==1||n.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(e.stateNode=s,ur=e,hr=ss(s.firstChild),!0):!1;case 6:return s=e.pendingProps===""||s.nodeType!==3?null:s,s!==null?(e.stateNode=s,ur=e,hr=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(n=ws!==null?{id:Wr,overflow:Ur}:null,e.memoizedState={dehydrated:s,treeContext:n,retryLane:1073741824},n=br(18,null,null,0),n.stateNode=s,n.return=e,e.child=n,ur=e,hr=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(ze){var s=hr;if(s){var n=s;if(!Fc(e,s)){if(Ba(e))throw Error(i(418));s=ss(n.nextSibling);var t=ur;s&&Fc(e,s)?Dc(t,n):(e.flags=e.flags&-4097|2,ze=!1,ur=e)}}else{if(Ba(e))throw Error(i(418));e.flags=e.flags&-4097|2,ze=!1,ur=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Wt(e){if(e!==ur)return!1;if(!ze)return Oc(e),ze=!0,!1;var s;if((s=e.tag!==3)&&!(s=e.tag!==5)&&(s=e.type,s=s!=="head"&&s!=="body"&&!Ca(e.type,e.memoizedProps)),s&&(s=hr)){if(Ba(e))throw Ac(),Error(i(418));for(;s;)Dc(e,s),s=ss(s.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,s=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(s===0){hr=ss(e.nextSibling);break e}s--}else n!=="$"&&n!=="$!"&&n!=="$?"||s++}e=e.nextSibling}hr=null}}else hr=ur?ss(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=hr;e;)e=ss(e.nextSibling)}function Js(){hr=ur=null,ze=!1}function Ra(e){Tr===null?Tr=[e]:Tr.push(e)}var Dh=L.ReactCurrentBatchConfig;function Hn(e,s,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(i(309));var t=n.stateNode}if(!t)throw Error(i(147,e));var a=t,l=""+e;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(d){var u=a.refs;d===null?delete u[l]:u[l]=d},s._stringRef=l,s)}if(typeof e!="string")throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Ut(e,s){throw e=Object.prototype.toString.call(s),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e))}function Wc(e){var s=e._init;return s(e._payload)}function Uc(e){function s(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)s(g,x),x=x.sibling;return null}function t(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function a(g,x){return g=hs(g,x),g.index=0,g.sibling=null,g}function l(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,v,C){return x===null||x.tag!==6?(x=Tl(v,g.mode,C),x.return=g,x):(x=a(x,v),x.return=g,x)}function h(g,x,v,C){var F=v.type;return F===I?w(g,x,v.props.children,C,v.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xe&&Wc(F)===x.type)?(C=a(x,v.props),C.ref=Hn(g,x,v),C.return=g,C):(C=ho(v.type,v.key,v.props,null,g.mode,C),C.ref=Hn(g,x,v),C.return=g,C)}function y(g,x,v,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=zl(v,g.mode,C),x.return=g,x):(x=a(x,v.children||[]),x.return=g,x)}function w(g,x,v,C,F){return x===null||x.tag!==7?(x=_s(v,g.mode,C,F),x.return=g,x):(x=a(x,v),x.return=g,x)}function k(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Tl(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Z:return v=ho(x.type,x.key,x.props,null,g.mode,v),v.ref=Hn(g,null,x),v.return=g,v;case H:return x=zl(x,g.mode,v),x.return=g,x;case Xe:var C=x._init;return k(g,C(x._payload),v)}if(vn(x)||O(x))return x=_s(x,g.mode,v,null),x.return=g,x;Ut(g,x)}return null}function b(g,x,v,C){var F=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return F!==null?null:u(g,x,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return v.key===F?h(g,x,v,C):null;case H:return v.key===F?y(g,x,v,C):null;case Xe:return F=v._init,b(g,x,F(v._payload),C)}if(vn(v)||O(v))return F!==null?null:w(g,x,v,C,null);Ut(g,v)}return null}function P(g,x,v,C,F){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,u(x,g,""+C,F);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Z:return g=g.get(C.key===null?v:C.key)||null,h(x,g,C,F);case H:return g=g.get(C.key===null?v:C.key)||null,y(x,g,C,F);case Xe:var $=C._init;return P(g,x,v,$(C._payload),F)}if(vn(C)||O(C))return g=g.get(v)||null,w(x,g,C,F,null);Ut(x,C)}return null}function M(g,x,v,C){for(var F=null,$=null,V=x,Y=x=0,Ge=null;V!==null&&Y<v.length;Y++){V.index>Y?(Ge=V,V=null):Ge=V.sibling;var he=b(g,V,v[Y],C);if(he===null){V===null&&(V=Ge);break}e&&V&&he.alternate===null&&s(g,V),x=l(he,x,Y),$===null?F=he:$.sibling=he,$=he,V=Ge}if(Y===v.length)return n(g,V),ze&&ks(g,Y),F;if(V===null){for(;Y<v.length;Y++)V=k(g,v[Y],C),V!==null&&(x=l(V,x,Y),$===null?F=V:$.sibling=V,$=V);return ze&&ks(g,Y),F}for(V=t(g,V);Y<v.length;Y++)Ge=P(V,g,Y,v[Y],C),Ge!==null&&(e&&Ge.alternate!==null&&V.delete(Ge.key===null?Y:Ge.key),x=l(Ge,x,Y),$===null?F=Ge:$.sibling=Ge,$=Ge);return e&&V.forEach(function(xs){return s(g,xs)}),ze&&ks(g,Y),F}function R(g,x,v,C){var F=O(v);if(typeof F!="function")throw Error(i(150));if(v=F.call(v),v==null)throw Error(i(151));for(var $=F=null,V=x,Y=x=0,Ge=null,he=v.next();V!==null&&!he.done;Y++,he=v.next()){V.index>Y?(Ge=V,V=null):Ge=V.sibling;var xs=b(g,V,he.value,C);if(xs===null){V===null&&(V=Ge);break}e&&V&&xs.alternate===null&&s(g,V),x=l(xs,x,Y),$===null?F=xs:$.sibling=xs,$=xs,V=Ge}if(he.done)return n(g,V),ze&&ks(g,Y),F;if(V===null){for(;!he.done;Y++,he=v.next())he=k(g,he.value,C),he!==null&&(x=l(he,x,Y),$===null?F=he:$.sibling=he,$=he);return ze&&ks(g,Y),F}for(V=t(g,V);!he.done;Y++,he=v.next())he=P(V,g,Y,he.value,C),he!==null&&(e&&he.alternate!==null&&V.delete(he.key===null?Y:he.key),x=l(he,x,Y),$===null?F=he:$.sibling=he,$=he);return e&&V.forEach(function(fx){return s(g,fx)}),ze&&ks(g,Y),F}function Re(g,x,v,C){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:e:{for(var F=v.key,$=x;$!==null;){if($.key===F){if(F=v.type,F===I){if($.tag===7){n(g,$.sibling),x=a($,v.props.children),x.return=g,g=x;break e}}else if($.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xe&&Wc(F)===$.type){n(g,$.sibling),x=a($,v.props),x.ref=Hn(g,$,v),x.return=g,g=x;break e}n(g,$);break}else s(g,$);$=$.sibling}v.type===I?(x=_s(v.props.children,g.mode,C,v.key),x.return=g,g=x):(C=ho(v.type,v.key,v.props,null,g.mode,C),C.ref=Hn(g,x,v),C.return=g,g=C)}return d(g);case H:e:{for($=v.key;x!==null;){if(x.key===$)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=a(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else s(g,x);x=x.sibling}x=zl(v,g.mode,C),x.return=g,g=x}return d(g);case Xe:return $=v._init,Re(g,x,$(v._payload),C)}if(vn(v))return M(g,x,v,C);if(O(v))return R(g,x,v,C);Ut(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=a(x,v),x.return=g,g=x):(n(g,x),x=Tl(v,g.mode,C),x.return=g,g=x),d(g)):n(g,x)}return Re}var en=Uc(!0),Hc=Uc(!1),Ht=ns(null),$t=null,rn=null,Da=null;function Fa(){Da=rn=$t=null}function Oa(e){var s=Ht.current;ke(Ht),e._currentValue=s}function Aa(e,s,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,t!==null&&(t.childLanes|=s)):t!==null&&(t.childLanes&s)!==s&&(t.childLanes|=s),e===n)break;e=e.return}}function sn(e,s){$t=e,Da=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&s)!==0&&(ar=!0),e.firstContext=null)}function yr(e){var s=e._currentValue;if(Da!==e)if(e={context:e,memoizedValue:s,next:null},rn===null){if($t===null)throw Error(i(308));rn=e,$t.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return s}var Ss=null;function Wa(e){Ss===null?Ss=[e]:Ss.push(e)}function $c(e,s,n,t){var a=s.interleaved;return a===null?(n.next=n,Wa(s)):(n.next=a.next,a.next=n),s.interleaved=n,Hr(e,t)}function Hr(e,s){e.lanes|=s;var n=e.alternate;for(n!==null&&(n.lanes|=s),n=e,e=e.return;e!==null;)e.childLanes|=s,n=e.alternate,n!==null&&(n.childLanes|=s),n=e,e=e.return;return n.tag===3?n.stateNode:null}var as=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vc(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,s){return{eventTime:e,lane:s,tag:0,payload:null,callback:null,next:null}}function ls(e,s,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ue&2)!==0){var a=t.pending;return a===null?s.next=s:(s.next=a.next,a.next=s),t.pending=s,Hr(e,n)}return a=t.interleaved,a===null?(s.next=s,Wa(t)):(s.next=a.next,a.next=s),t.interleaved=s,Hr(e,n)}function Vt(e,s,n){if(s=s.updateQueue,s!==null&&(s=s.shared,(n&4194240)!==0)){var t=s.lanes;t&=e.pendingLanes,n|=t,s.lanes=n,sa(e,n)}}function Gc(e,s){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=d:l=l.next=d,n=n.next}while(n!==null);l===null?a=l=s:l=l.next=s}else a=l=s;n={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=s:e.next=s,n.lastBaseUpdate=s}function Gt(e,s,n,t){var a=e.updateQueue;as=!1;var l=a.firstBaseUpdate,d=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?l=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(l!==null){var k=a.baseState;d=0,w=y=h=null,u=l;do{var b=u.lane,P=u.eventTime;if((t&b)===b){w!==null&&(w=w.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var M=e,R=u;switch(b=s,P=n,R.tag){case 1:if(M=R.payload,typeof M=="function"){k=M.call(P,k,b);break e}k=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=R.payload,b=typeof M=="function"?M.call(P,k,b):M,b==null)break e;k=_({},k,b);break e;case 2:as=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[u]:b.push(u))}else P={eventTime:P,lane:b,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=P,h=k):w=w.next=P,d|=b;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;b=u,u=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(w===null&&(h=k),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=w,s=a.shared.interleaved,s!==null){a=s;do d|=a.lane,a=a.next;while(a!==s)}else l===null&&(a.shared.lanes=0);zs|=d,e.lanes=d,e.memoizedState=k}}function Qc(e,s,n){if(e=s.effects,s.effects=null,e!==null)for(s=0;s<e.length;s++){var t=e[s],a=t.callback;if(a!==null){if(t.callback=null,t=n,typeof a!="function")throw Error(i(191,a));a.call(t)}}}var $n={},Rr=ns($n),Vn=ns($n),Gn=ns($n);function Cs(e){if(e===$n)throw Error(i(174));return e}function Ha(e,s){switch(be(Gn,s),be(Vn,e),be(Rr,$n),e=s.nodeType,e){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:$o(null,"");break;default:e=e===8?s.parentNode:s,s=e.namespaceURI||null,e=e.tagName,s=$o(s,e)}ke(Rr),be(Rr,s)}function nn(){ke(Rr),ke(Vn),ke(Gn)}function Yc(e){Cs(Gn.current);var s=Cs(Rr.current),n=$o(s,e.type);s!==n&&(be(Vn,e),be(Rr,n))}function $a(e){Vn.current===e&&(ke(Rr),ke(Vn))}var Ee=ns(0);function Qt(e){for(var s=e;s!==null;){if(s.tag===13){var n=s.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Va=[];function Ga(){for(var e=0;e<Va.length;e++)Va[e]._workInProgressVersionPrimary=null;Va.length=0}var Yt=L.ReactCurrentDispatcher,Qa=L.ReactCurrentBatchConfig,Ts=0,Le=null,We=null,$e=null,Kt=!1,Qn=!1,Yn=0,Fh=0;function Ze(){throw Error(i(321))}function Ya(e,s){if(s===null)return!1;for(var n=0;n<s.length&&n<e.length;n++)if(!Cr(e[n],s[n]))return!1;return!0}function Ka(e,s,n,t,a,l){if(Ts=l,Le=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Yt.current=e===null||e.memoizedState===null?Uh:Hh,e=n(t,a),Qn){l=0;do{if(Qn=!1,Yn=0,25<=l)throw Error(i(301));l+=1,$e=We=null,s.updateQueue=null,Yt.current=$h,e=n(t,a)}while(Qn)}if(Yt.current=Zt,s=We!==null&&We.next!==null,Ts=0,$e=We=Le=null,Kt=!1,s)throw Error(i(300));return e}function Xa(){var e=Yn!==0;return Yn=0,e}function Dr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Le.memoizedState=$e=e:$e=$e.next=e,$e}function jr(){if(We===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var s=$e===null?Le.memoizedState:$e.next;if(s!==null)$e=s,We=e;else{if(e===null)throw Error(i(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},$e===null?Le.memoizedState=$e=e:$e=$e.next=e}return $e}function Kn(e,s){return typeof s=="function"?s(e):s}function qa(e){var s=jr(),n=s.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var t=We,a=t.baseQueue,l=n.pending;if(l!==null){if(a!==null){var d=a.next;a.next=l.next,l.next=d}t.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,t=t.baseState;var u=d=null,h=null,y=l;do{var w=y.lane;if((Ts&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),t=y.hasEagerState?y.eagerState:e(t,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=k,d=t):h=h.next=k,Le.lanes|=w,zs|=w}y=y.next}while(y!==null&&y!==l);h===null?d=t:h.next=u,Cr(t,s.memoizedState)||(ar=!0),s.memoizedState=t,s.baseState=d,s.baseQueue=h,n.lastRenderedState=t}if(e=n.interleaved,e!==null){a=e;do l=a.lane,Le.lanes|=l,zs|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[s.memoizedState,n.dispatch]}function Za(e){var s=jr(),n=s.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var t=n.dispatch,a=n.pending,l=s.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do l=e(l,d.action),d=d.next;while(d!==a);Cr(l,s.memoizedState)||(ar=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),n.lastRenderedState=l}return[l,t]}function Kc(){}function Xc(e,s){var n=Le,t=jr(),a=s(),l=!Cr(t.memoizedState,a);if(l&&(t.memoizedState=a,ar=!0),t=t.queue,Ja(Jc.bind(null,n,t,e),[e]),t.getSnapshot!==s||l||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Xn(9,Zc.bind(null,n,t,a,s),void 0,null),Ve===null)throw Error(i(349));(Ts&30)!==0||qc(n,s,a)}return a}function qc(e,s,n){e.flags|=16384,e={getSnapshot:s,value:n},s=Le.updateQueue,s===null?(s={lastEffect:null,stores:null},Le.updateQueue=s,s.stores=[e]):(n=s.stores,n===null?s.stores=[e]:n.push(e))}function Zc(e,s,n,t){s.value=n,s.getSnapshot=t,ed(s)&&rd(e)}function Jc(e,s,n){return n(function(){ed(s)&&rd(e)})}function ed(e){var s=e.getSnapshot;e=e.value;try{var n=s();return!Cr(e,n)}catch{return!0}}function rd(e){var s=Hr(e,1);s!==null&&Lr(s,e,1,-1)}function sd(e){var s=Dr();return typeof e=="function"&&(e=e()),s.memoizedState=s.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},s.queue=e,e=e.dispatch=Wh.bind(null,Le,e),[s.memoizedState,e]}function Xn(e,s,n,t){return e={tag:e,create:s,destroy:n,deps:t,next:null},s=Le.updateQueue,s===null?(s={lastEffect:null,stores:null},Le.updateQueue=s,s.lastEffect=e.next=e):(n=s.lastEffect,n===null?s.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,s.lastEffect=e)),e}function nd(){return jr().memoizedState}function Xt(e,s,n,t){var a=Dr();Le.flags|=e,a.memoizedState=Xn(1|s,n,void 0,t===void 0?null:t)}function qt(e,s,n,t){var a=jr();t=t===void 0?null:t;var l=void 0;if(We!==null){var d=We.memoizedState;if(l=d.destroy,t!==null&&Ya(t,d.deps)){a.memoizedState=Xn(s,n,l,t);return}}Le.flags|=e,a.memoizedState=Xn(1|s,n,l,t)}function td(e,s){return Xt(8390656,8,e,s)}function Ja(e,s){return qt(2048,8,e,s)}function od(e,s){return qt(4,2,e,s)}function ad(e,s){return qt(4,4,e,s)}function ld(e,s){if(typeof s=="function")return e=e(),s(e),function(){s(null)};if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function id(e,s,n){return n=n!=null?n.concat([e]):null,qt(4,4,ld.bind(null,s,e),n)}function el(){}function cd(e,s){var n=jr();s=s===void 0?null:s;var t=n.memoizedState;return t!==null&&s!==null&&Ya(s,t[1])?t[0]:(n.memoizedState=[e,s],e)}function dd(e,s){var n=jr();s=s===void 0?null:s;var t=n.memoizedState;return t!==null&&s!==null&&Ya(s,t[1])?t[0]:(e=e(),n.memoizedState=[e,s],e)}function pd(e,s,n){return(Ts&21)===0?(e.baseState&&(e.baseState=!1,ar=!0),e.memoizedState=n):(Cr(n,s)||(n=Wi(),Le.lanes|=n,zs|=n,e.baseState=!0),s)}function Oh(e,s){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var t=Qa.transition;Qa.transition={};try{e(!1),s()}finally{ge=n,Qa.transition=t}}function ud(){return jr().memoizedState}function Ah(e,s,n){var t=ps(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},hd(e))xd(s,n);else if(n=$c(e,s,n,t),n!==null){var a=nr();Lr(n,e,t,a),md(n,s,t)}}function Wh(e,s,n){var t=ps(e),a={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(hd(e))xd(s,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var d=s.lastRenderedState,u=l(d,n);if(a.hasEagerState=!0,a.eagerState=u,Cr(u,d)){var h=s.interleaved;h===null?(a.next=a,Wa(s)):(a.next=h.next,h.next=a),s.interleaved=a;return}}catch{}finally{}n=$c(e,s,a,t),n!==null&&(a=nr(),Lr(n,e,t,a),md(n,s,t))}}function hd(e){var s=e.alternate;return e===Le||s!==null&&s===Le}function xd(e,s){Qn=Kt=!0;var n=e.pending;n===null?s.next=s:(s.next=n.next,n.next=s),e.pending=s}function md(e,s,n){if((n&4194240)!==0){var t=s.lanes;t&=e.pendingLanes,n|=t,s.lanes=n,sa(e,n)}}var Zt={readContext:yr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Uh={readContext:yr,useCallback:function(e,s){return Dr().memoizedState=[e,s===void 0?null:s],e},useContext:yr,useEffect:td,useImperativeHandle:function(e,s,n){return n=n!=null?n.concat([e]):null,Xt(4194308,4,ld.bind(null,s,e),n)},useLayoutEffect:function(e,s){return Xt(4194308,4,e,s)},useInsertionEffect:function(e,s){return Xt(4,2,e,s)},useMemo:function(e,s){var n=Dr();return s=s===void 0?null:s,e=e(),n.memoizedState=[e,s],e},useReducer:function(e,s,n){var t=Dr();return s=n!==void 0?n(s):s,t.memoizedState=t.baseState=s,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},t.queue=e,e=e.dispatch=Ah.bind(null,Le,e),[t.memoizedState,e]},useRef:function(e){var s=Dr();return e={current:e},s.memoizedState=e},useState:sd,useDebugValue:el,useDeferredValue:function(e){return Dr().memoizedState=e},useTransition:function(){var e=sd(!1),s=e[0];return e=Oh.bind(null,e[1]),Dr().memoizedState=e,[s,e]},useMutableSource:function(){},useSyncExternalStore:function(e,s,n){var t=Le,a=Dr();if(ze){if(n===void 0)throw Error(i(407));n=n()}else{if(n=s(),Ve===null)throw Error(i(349));(Ts&30)!==0||qc(t,s,n)}a.memoizedState=n;var l={value:n,getSnapshot:s};return a.queue=l,td(Jc.bind(null,t,l,e),[e]),t.flags|=2048,Xn(9,Zc.bind(null,t,l,n,s),void 0,null),n},useId:function(){var e=Dr(),s=Ve.identifierPrefix;if(ze){var n=Ur,t=Wr;n=(t&~(1<<32-Sr(t)-1)).toString(32)+n,s=":"+s+"R"+n,n=Yn++,0<n&&(s+="H"+n.toString(32)),s+=":"}else n=Fh++,s=":"+s+"r"+n.toString(32)+":";return e.memoizedState=s},unstable_isNewReconciler:!1},Hh={readContext:yr,useCallback:cd,useContext:yr,useEffect:Ja,useImperativeHandle:id,useInsertionEffect:od,useLayoutEffect:ad,useMemo:dd,useReducer:qa,useRef:nd,useState:function(){return qa(Kn)},useDebugValue:el,useDeferredValue:function(e){var s=jr();return pd(s,We.memoizedState,e)},useTransition:function(){var e=qa(Kn)[0],s=jr().memoizedState;return[e,s]},useMutableSource:Kc,useSyncExternalStore:Xc,useId:ud,unstable_isNewReconciler:!1},$h={readContext:yr,useCallback:cd,useContext:yr,useEffect:Ja,useImperativeHandle:id,useInsertionEffect:od,useLayoutEffect:ad,useMemo:dd,useReducer:Za,useRef:nd,useState:function(){return Za(Kn)},useDebugValue:el,useDeferredValue:function(e){var s=jr();return We===null?s.memoizedState=e:pd(s,We.memoizedState,e)},useTransition:function(){var e=Za(Kn)[0],s=jr().memoizedState;return[e,s]},useMutableSource:Kc,useSyncExternalStore:Xc,useId:ud,unstable_isNewReconciler:!1};function zr(e,s){if(e&&e.defaultProps){s=_({},s),e=e.defaultProps;for(var n in e)s[n]===void 0&&(s[n]=e[n]);return s}return s}function rl(e,s,n,t){s=e.memoizedState,n=n(t,s),n=n==null?s:_({},s,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jt={isMounted:function(e){return(e=e._reactInternals)?js(e)===e:!1},enqueueSetState:function(e,s,n){e=e._reactInternals;var t=nr(),a=ps(e),l=$r(t,a);l.payload=s,n!=null&&(l.callback=n),s=ls(e,l,a),s!==null&&(Lr(s,e,a,t),Vt(s,e,a))},enqueueReplaceState:function(e,s,n){e=e._reactInternals;var t=nr(),a=ps(e),l=$r(t,a);l.tag=1,l.payload=s,n!=null&&(l.callback=n),s=ls(e,l,a),s!==null&&(Lr(s,e,a,t),Vt(s,e,a))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var n=nr(),t=ps(e),a=$r(n,t);a.tag=2,s!=null&&(a.callback=s),s=ls(e,a,t),s!==null&&(Lr(s,e,t,n),Vt(s,e,t))}};function fd(e,s,n,t,a,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,l,d):s.prototype&&s.prototype.isPureReactComponent?!Rn(n,t)||!Rn(a,l):!0}function gd(e,s,n){var t=!1,a=ts,l=s.contextType;return typeof l=="object"&&l!==null?l=yr(l):(a=or(s)?bs:qe.current,t=s.contextTypes,l=(t=t!=null)?Xs(e,a):ts),s=new s(n,l),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Jt,e.stateNode=s,s._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),s}function vd(e,s,n,t){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(n,t),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(n,t),s.state!==e&&Jt.enqueueReplaceState(s,s.state,null)}function sl(e,s,n,t){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ua(e);var l=s.contextType;typeof l=="object"&&l!==null?a.context=yr(l):(l=or(s)?bs:qe.current,a.context=Xs(e,l)),a.state=e.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(rl(e,s,l,n),a.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&Jt.enqueueReplaceState(a,a.state,null),Gt(e,n,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function tn(e,s){try{var n="",t=s;do n+=le(t),t=t.return;while(t);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:s,stack:a,digest:null}}function nl(e,s,n){return{value:e,source:null,stack:n!=null?n:null,digest:s!=null?s:null}}function tl(e,s){try{console.error(s.value)}catch(n){setTimeout(function(){throw n})}}var Vh=typeof WeakMap=="function"?WeakMap:Map;function yd(e,s,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var t=s.value;return n.callback=function(){ao||(ao=!0,yl=t),tl(e,s)},n}function jd(e,s,n){n=$r(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=s.value;n.payload=function(){return t(a)},n.callback=function(){tl(e,s)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){tl(e,s),typeof t!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})}),n}function Nd(e,s,n){var t=e.pingCache;if(t===null){t=e.pingCache=new Vh;var a=new Set;t.set(s,a)}else a=t.get(s),a===void 0&&(a=new Set,t.set(s,a));a.has(n)||(a.add(n),e=ox.bind(null,e,s,n),s.then(e,e))}function bd(e){do{var s;if((s=e.tag===13)&&(s=e.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return e;e=e.return}while(e!==null);return null}function wd(e,s,n,t,a){return(e.mode&1)===0?(e===s?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(s=$r(-1,1),s.tag=2,ls(n,s,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Gh=L.ReactCurrentOwner,ar=!1;function sr(e,s,n,t){s.child=e===null?Hc(s,null,n,t):en(s,e.child,n,t)}function kd(e,s,n,t,a){n=n.render;var l=s.ref;return sn(s,a),t=Ka(e,s,n,t,l,a),n=Xa(),e!==null&&!ar?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~a,Vr(e,s,a)):(ze&&n&&_a(s),s.flags|=1,sr(e,s,t,a),s.child)}function Sd(e,s,n,t,a){if(e===null){var l=n.type;return typeof l=="function"&&!Cl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(s.tag=15,s.type=l,Cd(e,s,l,t,a)):(e=ho(n.type,null,t,s,s.mode,a),e.ref=s.ref,e.return=s,s.child=e)}if(l=e.child,(e.lanes&a)===0){var d=l.memoizedProps;if(n=n.compare,n=n!==null?n:Rn,n(d,t)&&e.ref===s.ref)return Vr(e,s,a)}return s.flags|=1,e=hs(l,t),e.ref=s.ref,e.return=s,s.child=e}function Cd(e,s,n,t,a){if(e!==null){var l=e.memoizedProps;if(Rn(l,t)&&e.ref===s.ref)if(ar=!1,s.pendingProps=t=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ar=!0);else return s.lanes=e.lanes,Vr(e,s,a)}return ol(e,s,n,t,a)}function Td(e,s,n){var t=s.pendingProps,a=t.children,l=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(an,xr),xr|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:e,cachePool:null,transitions:null},s.updateQueue=null,be(an,xr),xr|=e,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:n,be(an,xr),xr|=t}else l!==null?(t=l.baseLanes|n,s.memoizedState=null):t=n,be(an,xr),xr|=t;return sr(e,s,a,n),s.child}function zd(e,s){var n=s.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(s.flags|=512,s.flags|=2097152)}function ol(e,s,n,t,a){var l=or(n)?bs:qe.current;return l=Xs(s,l),sn(s,a),n=Ka(e,s,n,t,l,a),t=Xa(),e!==null&&!ar?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~a,Vr(e,s,a)):(ze&&t&&_a(s),s.flags|=1,sr(e,s,n,a),s.child)}function Id(e,s,n,t,a){if(or(n)){var l=!0;Dt(s)}else l=!1;if(sn(s,a),s.stateNode===null)ro(e,s),gd(s,n,t),sl(s,n,t,a),t=!0;else if(e===null){var d=s.stateNode,u=s.memoizedProps;d.props=u;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=yr(y):(y=or(n)?bs:qe.current,y=Xs(s,y));var w=n.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==t||h!==y)&&vd(s,d,t,y),as=!1;var b=s.memoizedState;d.state=b,Gt(s,t,d,a),h=s.memoizedState,u!==t||b!==h||tr.current||as?(typeof w=="function"&&(rl(s,n,w,t),h=s.memoizedState),(u=as||fd(s,n,u,t,b,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=t,s.memoizedState=h),d.props=t,d.state=h,d.context=y,t=u):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),t=!1)}else{d=s.stateNode,Vc(e,s),u=s.memoizedProps,y=s.type===s.elementType?u:zr(s.type,u),d.props=y,k=s.pendingProps,b=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=yr(h):(h=or(n)?bs:qe.current,h=Xs(s,h));var P=n.getDerivedStateFromProps;(w=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==k||b!==h)&&vd(s,d,t,h),as=!1,b=s.memoizedState,d.state=b,Gt(s,t,d,a);var M=s.memoizedState;u!==k||b!==M||tr.current||as?(typeof P=="function"&&(rl(s,n,P,t),M=s.memoizedState),(y=as||fd(s,n,y,t,b,M,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(t,M,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(t,M,h)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=1024),s.memoizedProps=t,s.memoizedState=M),d.props=t,d.state=M,d.context=h,t=y):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=1024),t=!1)}return al(e,s,n,t,l,a)}function al(e,s,n,t,a,l){zd(e,s);var d=(s.flags&128)!==0;if(!t&&!d)return a&&Bc(s,n,!1),Vr(e,s,l);t=s.stateNode,Gh.current=s;var u=d&&typeof n.getDerivedStateFromError!="function"?null:t.render();return s.flags|=1,e!==null&&d?(s.child=en(s,e.child,null,l),s.child=en(s,null,u,l)):sr(e,s,u,l),s.memoizedState=t.state,a&&Bc(s,n,!0),s.child}function Ed(e){var s=e.stateNode;s.pendingContext?_c(e,s.pendingContext,s.pendingContext!==s.context):s.context&&_c(e,s.context,!1),Ha(e,s.containerInfo)}function Ld(e,s,n,t,a){return Js(),Ra(a),s.flags|=256,sr(e,s,n,t),s.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function il(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,s,n){var t=s.pendingProps,a=Ee.current,l=!1,d=(s.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(l=!0,s.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),be(Ee,a&1),e===null)return Ma(s),e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((s.mode&1)===0?s.lanes=1:e.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(d=t.children,e=t.fallback,l?(t=s.mode,l=s.child,d={mode:"hidden",children:d},(t&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=xo(d,t,0,null),e=_s(e,t,n,null),l.return=s,e.return=s,l.sibling=e,s.child=l,s.child.memoizedState=il(n),s.memoizedState=ll,e):cl(s,d));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Qh(e,s,d,t,u,a,n);if(l){l=t.fallback,d=s.mode,a=e.child,u=a.sibling;var h={mode:"hidden",children:t.children};return(d&1)===0&&s.child!==a?(t=s.child,t.childLanes=0,t.pendingProps=h,s.deletions=null):(t=hs(a,h),t.subtreeFlags=a.subtreeFlags&14680064),u!==null?l=hs(u,l):(l=_s(l,d,n,null),l.flags|=2),l.return=s,t.return=s,t.sibling=l,s.child=t,t=l,l=s.child,d=e.child.memoizedState,d=d===null?il(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~n,s.memoizedState=ll,t}return l=e.child,e=l.sibling,t=hs(l,{mode:"visible",children:t.children}),(s.mode&1)===0&&(t.lanes=n),t.return=s,t.sibling=null,e!==null&&(n=s.deletions,n===null?(s.deletions=[e],s.flags|=16):n.push(e)),s.child=t,s.memoizedState=null,t}function cl(e,s){return s=xo({mode:"visible",children:s},e.mode,0,null),s.return=e,e.child=s}function eo(e,s,n,t){return t!==null&&Ra(t),en(s,e.child,null,n),e=cl(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Qh(e,s,n,t,a,l,d){if(n)return s.flags&256?(s.flags&=-257,t=nl(Error(i(422))),eo(e,s,d,t)):s.memoizedState!==null?(s.child=e.child,s.flags|=128,null):(l=t.fallback,a=s.mode,t=xo({mode:"visible",children:t.children},a,0,null),l=_s(l,a,d,null),l.flags|=2,t.return=s,l.return=s,t.sibling=l,s.child=t,(s.mode&1)!==0&&en(s,e.child,null,d),s.child.memoizedState=il(d),s.memoizedState=ll,l);if((s.mode&1)===0)return eo(e,s,d,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var u=t.dgst;return t=u,l=Error(i(419)),t=nl(l,t,void 0),eo(e,s,d,t)}if(u=(d&e.childLanes)!==0,ar||u){if(t=Ve,t!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(t.suspendedLanes|d))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Hr(e,a),Lr(t,e,a,-1))}return Sl(),t=nl(Error(i(421))),eo(e,s,d,t)}return a.data==="$?"?(s.flags|=128,s.child=e.child,s=ax.bind(null,e),a._reactRetry=s,null):(e=l.treeContext,hr=ss(a.nextSibling),ur=s,ze=!0,Tr=null,e!==null&&(gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=ws,Wr=e.id,Ur=e.overflow,ws=s),s=cl(s,t.children),s.flags|=4096,s)}function Pd(e,s,n){e.lanes|=s;var t=e.alternate;t!==null&&(t.lanes|=s),Aa(e.return,s,n)}function dl(e,s,n,t,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:a}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=n,l.tailMode=a)}function Bd(e,s,n){var t=s.pendingProps,a=t.revealOrder,l=t.tail;if(sr(e,s,t.children,n),t=Ee.current,(t&2)!==0)t=t&1|2,s.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,s);else if(e.tag===19)Pd(e,n,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(be(Ee,t),(s.mode&1)===0)s.memoizedState=null;else switch(a){case"forwards":for(n=s.child,a=null;n!==null;)e=n.alternate,e!==null&&Qt(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=s.child,s.child=null):(a=n.sibling,n.sibling=null),dl(s,!1,a,n,l);break;case"backwards":for(n=null,a=s.child,s.child=null;a!==null;){if(e=a.alternate,e!==null&&Qt(e)===null){s.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}dl(s,!0,n,null,l);break;case"together":dl(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ro(e,s){(s.mode&1)===0&&e!==null&&(e.alternate=null,s.alternate=null,s.flags|=2)}function Vr(e,s,n){if(e!==null&&(s.dependencies=e.dependencies),zs|=s.lanes,(n&s.childLanes)===0)return null;if(e!==null&&s.child!==e.child)throw Error(i(153));if(s.child!==null){for(e=s.child,n=hs(e,e.pendingProps),s.child=n,n.return=s;e.sibling!==null;)e=e.sibling,n=n.sibling=hs(e,e.pendingProps),n.return=s;n.sibling=null}return s.child}function Yh(e,s,n){switch(s.tag){case 3:Ed(s),Js();break;case 5:Yc(s);break;case 1:or(s.type)&&Dt(s);break;case 4:Ha(s,s.stateNode.containerInfo);break;case 10:var t=s.type._context,a=s.memoizedProps.value;be(Ht,t._currentValue),t._currentValue=a;break;case 13:if(t=s.memoizedState,t!==null)return t.dehydrated!==null?(be(Ee,Ee.current&1),s.flags|=128,null):(n&s.child.childLanes)!==0?_d(e,s,n):(be(Ee,Ee.current&1),e=Vr(e,s,n),e!==null?e.sibling:null);be(Ee,Ee.current&1);break;case 19:if(t=(n&s.childLanes)!==0,(e.flags&128)!==0){if(t)return Bd(e,s,n);s.flags|=128}if(a=s.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Ee,Ee.current),t)break;return null;case 22:case 23:return s.lanes=0,Td(e,s,n)}return Vr(e,s,n)}var Md,pl,Rd,Dd;Md=function(e,s){for(var n=s.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},pl=function(){},Rd=function(e,s,n,t){var a=e.memoizedProps;if(a!==t){e=s.stateNode,Cs(Rr.current);var l=null;switch(n){case"input":a=Ao(e,a),t=Ao(e,t),l=[];break;case"select":a=_({},a,{value:void 0}),t=_({},t,{value:void 0}),l=[];break;case"textarea":a=Ho(e,a),t=Ho(e,t),l=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Bt)}Vo(n,t);var d;n=null;for(y in a)if(!t.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var u=a[y];for(d in u)u.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in t){var h=t[y];if(u=a!=null?a[y]:void 0,t.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(l||(l=[]),l.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(l=l||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&we("scroll",e),l||u===h||(l=[])):(l=l||[]).push(y,h))}n&&(l=l||[]).push("style",n);var y=l;(s.updateQueue=y)&&(s.flags|=4)}},Dd=function(e,s,n,t){n!==t&&(s.flags|=4)};function qn(e,s){if(!ze)switch(e.tailMode){case"hidden":s=e.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Je(e){var s=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(s)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=n,s}function Kh(e,s,n){var t=s.pendingProps;switch(Pa(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(s),null;case 1:return or(s.type)&&Rt(),Je(s),null;case 3:return t=s.stateNode,nn(),ke(tr),ke(qe),Ga(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Wt(s)?s.flags|=4:e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Tr!==null&&(bl(Tr),Tr=null))),pl(e,s),Je(s),null;case 5:$a(s);var a=Cs(Gn.current);if(n=s.type,e!==null&&s.stateNode!=null)Rd(e,s,n,t,a),e.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!t){if(s.stateNode===null)throw Error(i(166));return Je(s),null}if(e=Cs(Rr.current),Wt(s)){t=s.stateNode,n=s.type;var l=s.memoizedProps;switch(t[Mr]=s,t[Wn]=l,e=(s.mode&1)!==0,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(a=0;a<Fn.length;a++)we(Fn[a],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":gi(t,l),we("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},we("invalid",t);break;case"textarea":ji(t,l),we("invalid",t)}Vo(n,l),a=null;for(var d in l)if(l.hasOwnProperty(d)){var u=l[d];d==="children"?typeof u=="string"?t.textContent!==u&&(l.suppressHydrationWarning!==!0&&Pt(t.textContent,u,e),a=["children",u]):typeof u=="number"&&t.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Pt(t.textContent,u,e),a=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&we("scroll",t)}switch(n){case"input":Kr(t),yi(t,l,!0);break;case"textarea":Kr(t),bi(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=Bt)}t=a,s.updateQueue=t,t!==null&&(s.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=d.createElement(n,{is:t.is}):(e=d.createElement(n),n==="select"&&(d=e,t.multiple?d.multiple=!0:t.size&&(d.size=t.size))):e=d.createElementNS(e,n),e[Mr]=s,e[Wn]=t,Md(e,s,!1,!1),s.stateNode=e;e:{switch(d=Go(n,t),n){case"dialog":we("cancel",e),we("close",e),a=t;break;case"iframe":case"object":case"embed":we("load",e),a=t;break;case"video":case"audio":for(a=0;a<Fn.length;a++)we(Fn[a],e);a=t;break;case"source":we("error",e),a=t;break;case"img":case"image":case"link":we("error",e),we("load",e),a=t;break;case"details":we("toggle",e),a=t;break;case"input":gi(e,t),a=Ao(e,t),we("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=_({},t,{value:void 0}),we("invalid",e);break;case"textarea":ji(e,t),a=Ho(e,t),we("invalid",e);break;default:a=t}Vo(n,a),u=a;for(l in u)if(u.hasOwnProperty(l)){var h=u[l];l==="style"?Ci(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ki(e,h)):l==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&yn(e,h):typeof h=="number"&&yn(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(m.hasOwnProperty(l)?h!=null&&l==="onScroll"&&we("scroll",e):h!=null&&ne(e,l,h,d))}switch(n){case"input":Kr(e),yi(e,t,!1);break;case"textarea":Kr(e),bi(e);break;case"option":t.value!=null&&e.setAttribute("value",""+ce(t.value));break;case"select":e.multiple=!!t.multiple,l=t.value,l!=null?Fs(e,!!t.multiple,l,!1):t.defaultValue!=null&&Fs(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Bt)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Je(s),null;case 6:if(e&&s.stateNode!=null)Dd(e,s,e.memoizedProps,t);else{if(typeof t!="string"&&s.stateNode===null)throw Error(i(166));if(n=Cs(Gn.current),Cs(Rr.current),Wt(s)){if(t=s.stateNode,n=s.memoizedProps,t[Mr]=s,(l=t.nodeValue!==n)&&(e=ur,e!==null))switch(e.tag){case 3:Pt(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pt(t.nodeValue,n,(e.mode&1)!==0)}l&&(s.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[Mr]=s,s.stateNode=t}return Je(s),null;case 13:if(ke(Ee),t=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&hr!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ac(),Js(),s.flags|=98560,l=!1;else if(l=Wt(s),t!==null&&t.dehydrated!==null){if(e===null){if(!l)throw Error(i(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(i(317));l[Mr]=s}else Js(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Je(s),l=!1}else Tr!==null&&(bl(Tr),Tr=null),l=!0;if(!l)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=n,s):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(s.child.flags|=8192,(s.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ue===0&&(Ue=3):Sl())),s.updateQueue!==null&&(s.flags|=4),Je(s),null);case 4:return nn(),pl(e,s),e===null&&On(s.stateNode.containerInfo),Je(s),null;case 10:return Oa(s.type._context),Je(s),null;case 17:return or(s.type)&&Rt(),Je(s),null;case 19:if(ke(Ee),l=s.memoizedState,l===null)return Je(s),null;if(t=(s.flags&128)!==0,d=l.rendering,d===null)if(t)qn(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(d=Qt(e),d!==null){for(s.flags|=128,qn(l,!1),t=d.updateQueue,t!==null&&(s.updateQueue=t,s.flags|=4),s.subtreeFlags=0,t=n,n=s.child;n!==null;)l=n,e=t,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ee,Ee.current&1|2),s.child}e=e.sibling}l.tail!==null&&Me()>ln&&(s.flags|=128,t=!0,qn(l,!1),s.lanes=4194304)}else{if(!t)if(e=Qt(d),e!==null){if(s.flags|=128,t=!0,n=e.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),qn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!ze)return Je(s),null}else 2*Me()-l.renderingStartTime>ln&&n!==1073741824&&(s.flags|=128,t=!0,qn(l,!1),s.lanes=4194304);l.isBackwards?(d.sibling=s.child,s.child=d):(n=l.last,n!==null?n.sibling=d:s.child=d,l.last=d)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=Me(),s.sibling=null,n=Ee.current,be(Ee,t?n&1|2:n&1),s):(Je(s),null);case 22:case 23:return kl(),t=s.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(s.flags|=8192),t&&(s.mode&1)!==0?(xr&1073741824)!==0&&(Je(s),s.subtreeFlags&6&&(s.flags|=8192)):Je(s),null;case 24:return null;case 25:return null}throw Error(i(156,s.tag))}function Xh(e,s){switch(Pa(s),s.tag){case 1:return or(s.type)&&Rt(),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return nn(),ke(tr),ke(qe),Ga(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 5:return $a(s),null;case 13:if(ke(Ee),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(i(340));Js()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ke(Ee),null;case 4:return nn(),null;case 10:return Oa(s.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var so=!1,er=!1,qh=typeof WeakSet=="function"?WeakSet:Set,B=null;function on(e,s){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){Pe(e,s,t)}else n.current=null}function ul(e,s,n){try{n()}catch(t){Pe(e,s,t)}}var Fd=!1;function Zh(e,s){if(ka=bt,e=fc(),fa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var a=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var d=0,u=-1,h=-1,y=0,w=0,k=e,b=null;r:for(;;){for(var P;k!==n||a!==0&&k.nodeType!==3||(u=d+a),k!==l||t!==0&&k.nodeType!==3||(h=d+t),k.nodeType===3&&(d+=k.nodeValue.length),(P=k.firstChild)!==null;)b=k,k=P;for(;;){if(k===e)break r;if(b===n&&++y===a&&(u=d),b===l&&++w===t&&(h=d),(P=k.nextSibling)!==null)break;k=b,b=k.parentNode}k=P}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},bt=!1,B=s;B!==null;)if(s=B,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,B=e;else for(;B!==null;){s=B;try{var M=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var R=M.memoizedProps,Re=M.memoizedState,g=s.stateNode,x=g.getSnapshotBeforeUpdate(s.elementType===s.type?R:zr(s.type,R),Re);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=s.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(C){Pe(s,s.return,C)}if(e=s.sibling,e!==null){e.return=s.return,B=e;break}B=s.return}return M=Fd,Fd=!1,M}function Zn(e,s,n){var t=s.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&ul(s,n,l)}a=a.next}while(a!==t)}}function no(e,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var n=s=s.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==s)}}function hl(e){var s=e.ref;if(s!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof s=="function"?s(e):s.current=e}}function Od(e){var s=e.alternate;s!==null&&(e.alternate=null,Od(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&(delete s[Mr],delete s[Wn],delete s[Ia],delete s[Bh],delete s[Mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function Wd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xl(e,s,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,s?n.nodeType===8?n.parentNode.insertBefore(e,s):n.insertBefore(e,s):(n.nodeType===8?(s=n.parentNode,s.insertBefore(e,n)):(s=n,s.appendChild(e)),n=n._reactRootContainer,n!=null||s.onclick!==null||(s.onclick=Bt));else if(t!==4&&(e=e.child,e!==null))for(xl(e,s,n),e=e.sibling;e!==null;)xl(e,s,n),e=e.sibling}function ml(e,s,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,s?n.insertBefore(e,s):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(ml(e,s,n),e=e.sibling;e!==null;)ml(e,s,n),e=e.sibling}var Qe=null,Ir=!1;function is(e,s,n){for(n=n.child;n!==null;)Ud(e,s,n),n=n.sibling}function Ud(e,s,n){if(Br&&typeof Br.onCommitFiberUnmount=="function")try{Br.onCommitFiberUnmount(ft,n)}catch{}switch(n.tag){case 5:er||on(n,s);case 6:var t=Qe,a=Ir;Qe=null,is(e,s,n),Qe=t,Ir=a,Qe!==null&&(Ir?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Ir?(e=Qe,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),En(e)):za(Qe,n.stateNode));break;case 4:t=Qe,a=Ir,Qe=n.stateNode.containerInfo,Ir=!0,is(e,s,n),Qe=t,Ir=a;break;case 0:case 11:case 14:case 15:if(!er&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var l=a,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&ul(n,s,d),a=a.next}while(a!==t)}is(e,s,n);break;case 1:if(!er&&(on(n,s),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(u){Pe(n,s,u)}is(e,s,n);break;case 21:is(e,s,n);break;case 22:n.mode&1?(er=(t=er)||n.memoizedState!==null,is(e,s,n),er=t):is(e,s,n);break;default:is(e,s,n)}}function Hd(e){var s=e.updateQueue;if(s!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qh),s.forEach(function(t){var a=lx.bind(null,e,t);n.has(t)||(n.add(t),t.then(a,a))})}}function Er(e,s){var n=s.deletions;if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];try{var l=e,d=s,u=d;e:for(;u!==null;){switch(u.tag){case 5:Qe=u.stateNode,Ir=!1;break e;case 3:Qe=u.stateNode.containerInfo,Ir=!0;break e;case 4:Qe=u.stateNode.containerInfo,Ir=!0;break e}u=u.return}if(Qe===null)throw Error(i(160));Ud(l,d,a),Qe=null,Ir=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){Pe(a,s,y)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)$d(s,e),s=s.sibling}function $d(e,s){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Er(s,e),Fr(e),t&4){try{Zn(3,e,e.return),no(3,e)}catch(R){Pe(e,e.return,R)}try{Zn(5,e,e.return)}catch(R){Pe(e,e.return,R)}}break;case 1:Er(s,e),Fr(e),t&512&&n!==null&&on(n,n.return);break;case 5:if(Er(s,e),Fr(e),t&512&&n!==null&&on(n,n.return),e.flags&32){var a=e.stateNode;try{yn(a,"")}catch(R){Pe(e,e.return,R)}}if(t&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,d=n!==null?n.memoizedProps:l,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&vi(a,l),Go(u,d);var y=Go(u,l);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?Ci(a,k):w==="dangerouslySetInnerHTML"?ki(a,k):w==="children"?yn(a,k):ne(a,w,k,y)}switch(u){case"input":Wo(a,l);break;case"textarea":Ni(a,l);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var P=l.value;P!=null?Fs(a,!!l.multiple,P,!1):b!==!!l.multiple&&(l.defaultValue!=null?Fs(a,!!l.multiple,l.defaultValue,!0):Fs(a,!!l.multiple,l.multiple?[]:"",!1))}a[Wn]=l}catch(R){Pe(e,e.return,R)}}break;case 6:if(Er(s,e),Fr(e),t&4){if(e.stateNode===null)throw Error(i(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(R){Pe(e,e.return,R)}}break;case 3:if(Er(s,e),Fr(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{En(s.containerInfo)}catch(R){Pe(e,e.return,R)}break;case 4:Er(s,e),Fr(e);break;case 13:Er(s,e),Fr(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(vl=Me())),t&4&&Hd(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(er=(y=er)||w,Er(s,e),er=y):Er(s,e),Fr(e),t&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(B=e,w=e.child;w!==null;){for(k=B=w;B!==null;){switch(b=B,P=b.child,b.tag){case 0:case 11:case 14:case 15:Zn(4,b,b.return);break;case 1:on(b,b.return);var M=b.stateNode;if(typeof M.componentWillUnmount=="function"){t=b,n=b.return;try{s=t,M.props=s.memoizedProps,M.state=s.memoizedState,M.componentWillUnmount()}catch(R){Pe(t,n,R)}}break;case 5:on(b,b.return);break;case 22:if(b.memoizedState!==null){Qd(k);continue}}P!==null?(P.return=b,B=P):Qd(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{a=k.stateNode,y?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=Si("display",d))}catch(R){Pe(e,e.return,R)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(R){Pe(e,e.return,R)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Er(s,e),Fr(e),t&4&&Hd(e);break;case 21:break;default:Er(s,e),Fr(e)}}function Fr(e){var s=e.flags;if(s&2){try{e:{for(var n=e.return;n!==null;){if(Ad(n)){var t=n;break e}n=n.return}throw Error(i(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(yn(a,""),t.flags&=-33);var l=Wd(e);ml(e,l,a);break;case 3:case 4:var d=t.stateNode.containerInfo,u=Wd(e);xl(e,u,d);break;default:throw Error(i(161))}}catch(h){Pe(e,e.return,h)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Jh(e,s,n){B=e,Vd(e)}function Vd(e,s,n){for(var t=(e.mode&1)!==0;B!==null;){var a=B,l=a.child;if(a.tag===22&&t){var d=a.memoizedState!==null||so;if(!d){var u=a.alternate,h=u!==null&&u.memoizedState!==null||er;u=so;var y=er;if(so=d,(er=h)&&!y)for(B=a;B!==null;)d=B,h=d.child,d.tag===22&&d.memoizedState!==null?Yd(a):h!==null?(h.return=d,B=h):Yd(a);for(;l!==null;)B=l,Vd(l),l=l.sibling;B=a,so=u,er=y}Gd(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,B=l):Gd(e)}}function Gd(e){for(;B!==null;){var s=B;if((s.flags&8772)!==0){var n=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:er||no(5,s);break;case 1:var t=s.stateNode;if(s.flags&4&&!er)if(n===null)t.componentDidMount();else{var a=s.elementType===s.type?n.memoizedProps:zr(s.type,n.memoizedProps);t.componentDidUpdate(a,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Qc(s,l,t);break;case 3:var d=s.updateQueue;if(d!==null){if(n=null,s.child!==null)switch(s.child.tag){case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}Qc(s,d,n)}break;case 5:var u=s.stateNode;if(n===null&&s.flags&4){n=u;var h=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var y=s.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&En(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}er||s.flags&512&&hl(s)}catch(b){Pe(s,s.return,b)}}if(s===e){B=null;break}if(n=s.sibling,n!==null){n.return=s.return,B=n;break}B=s.return}}function Qd(e){for(;B!==null;){var s=B;if(s===e){B=null;break}var n=s.sibling;if(n!==null){n.return=s.return,B=n;break}B=s.return}}function Yd(e){for(;B!==null;){var s=B;try{switch(s.tag){case 0:case 11:case 15:var n=s.return;try{no(4,s)}catch(h){Pe(s,n,h)}break;case 1:var t=s.stateNode;if(typeof t.componentDidMount=="function"){var a=s.return;try{t.componentDidMount()}catch(h){Pe(s,a,h)}}var l=s.return;try{hl(s)}catch(h){Pe(s,l,h)}break;case 5:var d=s.return;try{hl(s)}catch(h){Pe(s,d,h)}}}catch(h){Pe(s,s.return,h)}if(s===e){B=null;break}var u=s.sibling;if(u!==null){u.return=s.return,B=u;break}B=s.return}}var ex=Math.ceil,to=L.ReactCurrentDispatcher,fl=L.ReactCurrentOwner,Nr=L.ReactCurrentBatchConfig,ue=0,Ve=null,De=null,Ye=0,xr=0,an=ns(0),Ue=0,Jn=null,zs=0,oo=0,gl=0,et=null,lr=null,vl=0,ln=1/0,Gr=null,ao=!1,yl=null,cs=null,lo=!1,ds=null,io=0,rt=0,jl=null,co=-1,po=0;function nr(){return(ue&6)!==0?Me():co!==-1?co:co=Me()}function ps(e){return(e.mode&1)===0?1:(ue&2)!==0&&Ye!==0?Ye&-Ye:Dh.transition!==null?(po===0&&(po=Wi()),po):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Xi(e.type)),e)}function Lr(e,s,n,t){if(50<rt)throw rt=0,jl=null,Error(i(185));Sn(e,n,t),((ue&2)===0||e!==Ve)&&(e===Ve&&((ue&2)===0&&(oo|=n),Ue===4&&us(e,Ye)),ir(e,t),n===1&&ue===0&&(s.mode&1)===0&&(ln=Me()+500,Ft&&os()))}function ir(e,s){var n=e.callbackNode;Du(e,s);var t=yt(e,e===Ve?Ye:0);if(t===0)n!==null&&Fi(n),e.callbackNode=null,e.callbackPriority=0;else if(s=t&-t,e.callbackPriority!==s){if(n!=null&&Fi(n),s===1)e.tag===0?Rh(Xd.bind(null,e)):Mc(Xd.bind(null,e)),_h(function(){(ue&6)===0&&os()}),n=null;else{switch(Ui(t)){case 1:n=Jo;break;case 4:n=Oi;break;case 16:n=mt;break;case 536870912:n=Ai;break;default:n=mt}n=tp(n,Kd.bind(null,e))}e.callbackPriority=s,e.callbackNode=n}}function Kd(e,s){if(co=-1,po=0,(ue&6)!==0)throw Error(i(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var t=yt(e,e===Ve?Ye:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||s)s=uo(e,t);else{s=t;var a=ue;ue|=2;var l=Zd();(Ve!==e||Ye!==s)&&(Gr=null,ln=Me()+500,Es(e,s));do try{nx();break}catch(u){qd(e,u)}while(!0);Fa(),to.current=l,ue=a,De!==null?s=0:(Ve=null,Ye=0,s=Ue)}if(s!==0){if(s===2&&(a=ea(e),a!==0&&(t=a,s=Nl(e,a))),s===1)throw n=Jn,Es(e,0),us(e,t),ir(e,Me()),n;if(s===6)us(e,t);else{if(a=e.current.alternate,(t&30)===0&&!rx(a)&&(s=uo(e,t),s===2&&(l=ea(e),l!==0&&(t=l,s=Nl(e,l))),s===1))throw n=Jn,Es(e,0),us(e,t),ir(e,Me()),n;switch(e.finishedWork=a,e.finishedLanes=t,s){case 0:case 1:throw Error(i(345));case 2:Ls(e,lr,Gr);break;case 3:if(us(e,t),(t&130023424)===t&&(s=vl+500-Me(),10<s)){if(yt(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){nr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ta(Ls.bind(null,e,lr,Gr),s);break}Ls(e,lr,Gr);break;case 4:if(us(e,t),(t&4194240)===t)break;for(s=e.eventTimes,a=-1;0<t;){var d=31-Sr(t);l=1<<d,d=s[d],d>a&&(a=d),t&=~l}if(t=a,t=Me()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*ex(t/1960))-t,10<t){e.timeoutHandle=Ta(Ls.bind(null,e,lr,Gr),t);break}Ls(e,lr,Gr);break;case 5:Ls(e,lr,Gr);break;default:throw Error(i(329))}}}return ir(e,Me()),e.callbackNode===n?Kd.bind(null,e):null}function Nl(e,s){var n=et;return e.current.memoizedState.isDehydrated&&(Es(e,s).flags|=256),e=uo(e,s),e!==2&&(s=lr,lr=n,s!==null&&bl(s)),e}function bl(e){lr===null?lr=e:lr.push.apply(lr,e)}function rx(e){for(var s=e;;){if(s.flags&16384){var n=s.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var a=n[t],l=a.getSnapshot;a=a.value;try{if(!Cr(l(),a))return!1}catch{return!1}}}if(n=s.child,s.subtreeFlags&16384&&n!==null)n.return=s,s=n;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function us(e,s){for(s&=~gl,s&=~oo,e.suspendedLanes|=s,e.pingedLanes&=~s,e=e.expirationTimes;0<s;){var n=31-Sr(s),t=1<<n;e[n]=-1,s&=~t}}function Xd(e){if((ue&6)!==0)throw Error(i(327));cn();var s=yt(e,0);if((s&1)===0)return ir(e,Me()),null;var n=uo(e,s);if(e.tag!==0&&n===2){var t=ea(e);t!==0&&(s=t,n=Nl(e,t))}if(n===1)throw n=Jn,Es(e,0),us(e,s),ir(e,Me()),n;if(n===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=s,Ls(e,lr,Gr),ir(e,Me()),null}function wl(e,s){var n=ue;ue|=1;try{return e(s)}finally{ue=n,ue===0&&(ln=Me()+500,Ft&&os())}}function Is(e){ds!==null&&ds.tag===0&&(ue&6)===0&&cn();var s=ue;ue|=1;var n=Nr.transition,t=ge;try{if(Nr.transition=null,ge=1,e)return e()}finally{ge=t,Nr.transition=n,ue=s,(ue&6)===0&&os()}}function kl(){xr=an.current,ke(an)}function Es(e,s){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lh(n)),De!==null)for(n=De.return;n!==null;){var t=n;switch(Pa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Rt();break;case 3:nn(),ke(tr),ke(qe),Ga();break;case 5:$a(t);break;case 4:nn();break;case 13:ke(Ee);break;case 19:ke(Ee);break;case 10:Oa(t.type._context);break;case 22:case 23:kl()}n=n.return}if(Ve=e,De=e=hs(e.current,null),Ye=xr=s,Ue=0,Jn=null,gl=oo=zs=0,lr=et=null,Ss!==null){for(s=0;s<Ss.length;s++)if(n=Ss[s],t=n.interleaved,t!==null){n.interleaved=null;var a=t.next,l=n.pending;if(l!==null){var d=l.next;l.next=a,t.next=d}n.pending=t}Ss=null}return e}function qd(e,s){do{var n=De;try{if(Fa(),Yt.current=Zt,Kt){for(var t=Le.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Kt=!1}if(Ts=0,$e=We=Le=null,Qn=!1,Yn=0,fl.current=null,n===null||n.return===null){Ue=1,Jn=s,De=null;break}e:{var l=e,d=n.return,u=n,h=s;if(s=Ye,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var b=w.alternate;b?(w.updateQueue=b.updateQueue,w.memoizedState=b.memoizedState,w.lanes=b.lanes):(w.updateQueue=null,w.memoizedState=null)}var P=bd(d);if(P!==null){P.flags&=-257,wd(P,d,u,l,s),P.mode&1&&Nd(l,y,s),s=P,h=y;var M=s.updateQueue;if(M===null){var R=new Set;R.add(h),s.updateQueue=R}else M.add(h);break e}else{if((s&1)===0){Nd(l,y,s),Sl();break e}h=Error(i(426))}}else if(ze&&u.mode&1){var Re=bd(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),wd(Re,d,u,l,s),Ra(tn(h,u));break e}}l=h=tn(h,u),Ue!==4&&(Ue=2),et===null?et=[l]:et.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var g=yd(l,h,s);Gc(l,g);break e;case 1:u=h;var x=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cs===null||!cs.has(v)))){l.flags|=65536,s&=-s,l.lanes|=s;var C=jd(l,u,s);Gc(l,C);break e}}l=l.return}while(l!==null)}ep(n)}catch(F){s=F,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Zd(){var e=to.current;return to.current=Zt,e===null?Zt:e}function Sl(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ve===null||(zs&268435455)===0&&(oo&268435455)===0||us(Ve,Ye)}function uo(e,s){var n=ue;ue|=2;var t=Zd();(Ve!==e||Ye!==s)&&(Gr=null,Es(e,s));do try{sx();break}catch(a){qd(e,a)}while(!0);if(Fa(),ue=n,to.current=t,De!==null)throw Error(i(261));return Ve=null,Ye=0,Ue}function sx(){for(;De!==null;)Jd(De)}function nx(){for(;De!==null&&!zu();)Jd(De)}function Jd(e){var s=np(e.alternate,e,xr);e.memoizedProps=e.pendingProps,s===null?ep(e):De=s,fl.current=null}function ep(e){var s=e;do{var n=s.alternate;if(e=s.return,(s.flags&32768)===0){if(n=Kh(n,s,xr),n!==null){De=n;return}}else{if(n=Xh(n,s),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,De=null;return}}if(s=s.sibling,s!==null){De=s;return}De=s=e}while(s!==null);Ue===0&&(Ue=5)}function Ls(e,s,n){var t=ge,a=Nr.transition;try{Nr.transition=null,ge=1,tx(e,s,n,t)}finally{Nr.transition=a,ge=t}return null}function tx(e,s,n,t){do cn();while(ds!==null);if((ue&6)!==0)throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Fu(e,l),e===Ve&&(De=Ve=null,Ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||lo||(lo=!0,tp(mt,function(){return cn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Nr.transition,Nr.transition=null;var d=ge;ge=1;var u=ue;ue|=4,fl.current=null,Zh(e,n),$d(n,e),kh(Sa),bt=!!ka,Sa=ka=null,e.current=n,Jh(n),Iu(),ue=u,ge=d,Nr.transition=l}else e.current=n;if(lo&&(lo=!1,ds=e,io=a),l=e.pendingLanes,l===0&&(cs=null),_u(n.stateNode),ir(e,Me()),s!==null)for(t=e.onRecoverableError,n=0;n<s.length;n++)a=s[n],t(a.value,{componentStack:a.stack,digest:a.digest});if(ao)throw ao=!1,e=yl,yl=null,e;return(io&1)!==0&&e.tag!==0&&cn(),l=e.pendingLanes,(l&1)!==0?e===jl?rt++:(rt=0,jl=e):rt=0,os(),null}function cn(){if(ds!==null){var e=Ui(io),s=Nr.transition,n=ge;try{if(Nr.transition=null,ge=16>e?16:e,ds===null)var t=!1;else{if(e=ds,ds=null,io=0,(ue&6)!==0)throw Error(i(331));var a=ue;for(ue|=4,B=e.current;B!==null;){var l=B,d=l.child;if((B.flags&16)!==0){var u=l.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(B=y;B!==null;){var w=B;switch(w.tag){case 0:case 11:case 15:Zn(8,w,l)}var k=w.child;if(k!==null)k.return=w,B=k;else for(;B!==null;){w=B;var b=w.sibling,P=w.return;if(Od(w),w===y){B=null;break}if(b!==null){b.return=P,B=b;break}B=P}}}var M=l.alternate;if(M!==null){var R=M.child;if(R!==null){M.child=null;do{var Re=R.sibling;R.sibling=null,R=Re}while(R!==null)}}B=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,B=d;else e:for(;B!==null;){if(l=B,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Zn(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,B=g;break e}B=l.return}}var x=e.current;for(B=x;B!==null;){d=B;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,B=v;else e:for(d=x;B!==null;){if(u=B,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:no(9,u)}}catch(F){Pe(u,u.return,F)}if(u===d){B=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,B=C;break e}B=u.return}}if(ue=a,os(),Br&&typeof Br.onPostCommitFiberRoot=="function")try{Br.onPostCommitFiberRoot(ft,e)}catch{}t=!0}return t}finally{ge=n,Nr.transition=s}}return!1}function rp(e,s,n){s=tn(n,s),s=yd(e,s,1),e=ls(e,s,1),s=nr(),e!==null&&(Sn(e,1,s),ir(e,s))}function Pe(e,s,n){if(e.tag===3)rp(e,e,n);else for(;s!==null;){if(s.tag===3){rp(s,e,n);break}else if(s.tag===1){var t=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(cs===null||!cs.has(t))){e=tn(n,e),e=jd(s,e,1),s=ls(s,e,1),e=nr(),s!==null&&(Sn(s,1,e),ir(s,e));break}}s=s.return}}function ox(e,s,n){var t=e.pingCache;t!==null&&t.delete(s),s=nr(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ye&n)===n&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>Me()-vl?Es(e,0):gl|=n),ir(e,s)}function sp(e,s){s===0&&((e.mode&1)===0?s=1:(s=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var n=nr();e=Hr(e,s),e!==null&&(Sn(e,s,n),ir(e,n))}function ax(e){var s=e.memoizedState,n=0;s!==null&&(n=s.retryLane),sp(e,n)}function lx(e,s){var n=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(i(314))}t!==null&&t.delete(s),sp(e,n)}var np;np=function(e,s,n){if(e!==null)if(e.memoizedProps!==s.pendingProps||tr.current)ar=!0;else{if((e.lanes&n)===0&&(s.flags&128)===0)return ar=!1,Yh(e,s,n);ar=(e.flags&131072)!==0}else ar=!1,ze&&(s.flags&1048576)!==0&&Rc(s,At,s.index);switch(s.lanes=0,s.tag){case 2:var t=s.type;ro(e,s),e=s.pendingProps;var a=Xs(s,qe.current);sn(s,n),a=Ka(null,s,t,e,a,n);var l=Xa();return s.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,or(t)?(l=!0,Dt(s)):l=!1,s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ua(s),a.updater=Jt,s.stateNode=a,a._reactInternals=s,sl(s,t,e,n),s=al(null,s,t,!0,l,n)):(s.tag=0,ze&&l&&_a(s),sr(null,s,a,n),s=s.child),s;case 16:t=s.elementType;e:{switch(ro(e,s),e=s.pendingProps,a=t._init,t=a(t._payload),s.type=t,a=s.tag=cx(t),e=zr(t,e),a){case 0:s=ol(null,s,t,e,n);break e;case 1:s=Id(null,s,t,e,n);break e;case 11:s=kd(null,s,t,e,n);break e;case 14:s=Sd(null,s,t,zr(t.type,e),n);break e}throw Error(i(306,t,""))}return s;case 0:return t=s.type,a=s.pendingProps,a=s.elementType===t?a:zr(t,a),ol(e,s,t,a,n);case 1:return t=s.type,a=s.pendingProps,a=s.elementType===t?a:zr(t,a),Id(e,s,t,a,n);case 3:e:{if(Ed(s),e===null)throw Error(i(387));t=s.pendingProps,l=s.memoizedState,a=l.element,Vc(e,s),Gt(s,t,null,n);var d=s.memoizedState;if(t=d.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){a=tn(Error(i(423)),s),s=Ld(e,s,t,n,a);break e}else if(t!==a){a=tn(Error(i(424)),s),s=Ld(e,s,t,n,a);break e}else for(hr=ss(s.stateNode.containerInfo.firstChild),ur=s,ze=!0,Tr=null,n=Hc(s,null,t,n),s.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),t===a){s=Vr(e,s,n);break e}sr(e,s,t,n)}s=s.child}return s;case 5:return Yc(s),e===null&&Ma(s),t=s.type,a=s.pendingProps,l=e!==null?e.memoizedProps:null,d=a.children,Ca(t,a)?d=null:l!==null&&Ca(t,l)&&(s.flags|=32),zd(e,s),sr(e,s,d,n),s.child;case 6:return e===null&&Ma(s),null;case 13:return _d(e,s,n);case 4:return Ha(s,s.stateNode.containerInfo),t=s.pendingProps,e===null?s.child=en(s,null,t,n):sr(e,s,t,n),s.child;case 11:return t=s.type,a=s.pendingProps,a=s.elementType===t?a:zr(t,a),kd(e,s,t,a,n);case 7:return sr(e,s,s.pendingProps,n),s.child;case 8:return sr(e,s,s.pendingProps.children,n),s.child;case 12:return sr(e,s,s.pendingProps.children,n),s.child;case 10:e:{if(t=s.type._context,a=s.pendingProps,l=s.memoizedProps,d=a.value,be(Ht,t._currentValue),t._currentValue=d,l!==null)if(Cr(l.value,d)){if(l.children===a.children&&!tr.current){s=Vr(e,s,n);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var u=l.dependencies;if(u!==null){d=l.child;for(var h=u.firstContext;h!==null;){if(h.context===t){if(l.tag===1){h=$r(-1,n&-n),h.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}l.lanes|=n,h=l.alternate,h!==null&&(h.lanes|=n),Aa(l.return,n,s),u.lanes|=n;break}h=h.next}}else if(l.tag===10)d=l.type===s.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(i(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),Aa(d,n,s),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===s){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}sr(e,s,a.children,n),s=s.child}return s;case 9:return a=s.type,t=s.pendingProps.children,sn(s,n),a=yr(a),t=t(a),s.flags|=1,sr(e,s,t,n),s.child;case 14:return t=s.type,a=zr(t,s.pendingProps),a=zr(t.type,a),Sd(e,s,t,a,n);case 15:return Cd(e,s,s.type,s.pendingProps,n);case 17:return t=s.type,a=s.pendingProps,a=s.elementType===t?a:zr(t,a),ro(e,s),s.tag=1,or(t)?(e=!0,Dt(s)):e=!1,sn(s,n),gd(s,t,a),sl(s,t,a,n),al(null,s,t,!0,e,n);case 19:return Bd(e,s,n);case 22:return Td(e,s,n)}throw Error(i(156,s.tag))};function tp(e,s){return Di(e,s)}function ix(e,s,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(e,s,n,t){return new ix(e,s,n,t)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cx(e){if(typeof e=="function")return Cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===rr)return 14}return 2}function hs(e,s){var n=e.alternate;return n===null?(n=br(e.tag,s,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=s,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,s=e.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,s,n,t,a,l){var d=2;if(t=e,typeof e=="function")Cl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case I:return _s(n.children,a,l,s);case D:d=8,a|=8;break;case je:return e=br(12,n,s,a|2),e.elementType=je,e.lanes=l,e;case Te:return e=br(13,n,s,a),e.elementType=Te,e.lanes=l,e;case Ke:return e=br(19,n,s,a),e.elementType=Ke,e.lanes=l,e;case Ne:return xo(n,a,l,s);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:d=10;break e;case ae:d=9;break e;case _e:d=11;break e;case rr:d=14;break e;case Xe:d=16,t=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return s=br(d,n,s,a),s.elementType=e,s.type=t,s.lanes=l,s}function _s(e,s,n,t){return e=br(7,e,t,s),e.lanes=n,e}function xo(e,s,n,t){return e=br(22,e,t,s),e.elementType=Ne,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,s,n){return e=br(6,e,null,s),e.lanes=n,e}function zl(e,s,n){return s=br(4,e.children!==null?e.children:[],e.key,s),s.lanes=n,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}function dx(e,s,n,t,a){this.tag=s,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Il(e,s,n,t,a,l,d,u,h){return e=new dx(e,s,n,u,h),s===1?(s=1,l===!0&&(s|=8)):s=0,l=br(3,null,null,s),e.current=l,l.stateNode=e,l.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ua(l),e}function px(e,s,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:t==null?null:""+t,children:e,containerInfo:s,implementation:n}}function op(e){if(!e)return ts;e=e._reactInternals;e:{if(js(e)!==e||e.tag!==1)throw Error(i(170));var s=e;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(or(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(i(171))}if(e.tag===1){var n=e.type;if(or(n))return Pc(e,n,s)}return s}function ap(e,s,n,t,a,l,d,u,h){return e=Il(n,t,!0,e,a,l,d,u,h),e.context=op(null),n=e.current,t=nr(),a=ps(n),l=$r(t,a),l.callback=s!=null?s:null,ls(n,l,a),e.current.lanes=a,Sn(e,a,t),ir(e,t),e}function mo(e,s,n,t){var a=s.current,l=nr(),d=ps(a);return n=op(n),s.context===null?s.context=n:s.pendingContext=n,s=$r(l,d),s.payload={element:e},t=t===void 0?null:t,t!==null&&(s.callback=t),e=ls(a,s,d),e!==null&&(Lr(e,a,d,l),Vt(e,a,d)),d}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lp(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<s?n:s}}function El(e,s){lp(e,s),(e=e.alternate)&&lp(e,s)}function ux(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}go.prototype.render=Ll.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(i(409));mo(e,s,null,null)},go.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Is(function(){mo(null,e,null,null)}),s[Or]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var s=Vi();e={blockedOn:null,target:e,priority:s};for(var n=0;n<Jr.length&&s!==0&&s<Jr[n].priority;n++);Jr.splice(n,0,e),n===0&&Yi(e)}};function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cp(){}function hx(e,s,n,t,a){if(a){if(typeof t=="function"){var l=t;t=function(){var y=fo(d);l.call(y)}}var d=ap(s,t,e,0,null,!1,!1,"",cp);return e._reactRootContainer=d,e[Or]=d.current,On(e.nodeType===8?e.parentNode:e),Is(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var u=t;t=function(){var y=fo(h);u.call(y)}}var h=Il(e,0,!1,null,null,!1,!1,"",cp);return e._reactRootContainer=h,e[Or]=h.current,On(e.nodeType===8?e.parentNode:e),Is(function(){mo(s,h,n,t)}),h}function yo(e,s,n,t,a){var l=n._reactRootContainer;if(l){var d=l;if(typeof a=="function"){var u=a;a=function(){var h=fo(d);u.call(h)}}mo(s,d,e,a)}else d=hx(n,s,e,a,t);return fo(d)}Hi=function(e){switch(e.tag){case 3:var s=e.stateNode;if(s.current.memoizedState.isDehydrated){var n=kn(s.pendingLanes);n!==0&&(sa(s,n|1),ir(s,Me()),(ue&6)===0&&(ln=Me()+500,os()))}break;case 13:Is(function(){var t=Hr(e,1);if(t!==null){var a=nr();Lr(t,e,1,a)}}),El(e,1)}},na=function(e){if(e.tag===13){var s=Hr(e,134217728);if(s!==null){var n=nr();Lr(s,e,134217728,n)}El(e,134217728)}},$i=function(e){if(e.tag===13){var s=ps(e),n=Hr(e,s);if(n!==null){var t=nr();Lr(n,e,s,t)}El(e,s)}},Vi=function(){return ge},Gi=function(e,s){var n=ge;try{return ge=e,s()}finally{ge=n}},Ko=function(e,s,n){switch(s){case"input":if(Wo(e,n),s=n.name,n.type==="radio"&&s!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<n.length;s++){var t=n[s];if(t!==e&&t.form===e.form){var a=Mt(t);if(!a)throw Error(i(90));ys(t),Wo(t,a)}}}break;case"textarea":Ni(e,n);break;case"select":s=n.value,s!=null&&Fs(e,!!n.multiple,s,!1)}},Ei=wl,Li=Is;var xx={usingClientEntryPoint:!1,Events:[Un,Ys,Mt,zi,Ii,wl]},st={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mx={bundleType:st.bundleType,version:st.version,rendererPackageName:st.rendererPackageName,rendererConfig:st.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mi(e),e===null?null:e.stateNode},findFiberByHostInstance:st.findFiberByHostInstance||ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{ft=jo.inject(mx),Br=jo}catch{}}return cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx,cr.createPortal=function(e,s){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_l(s))throw Error(i(200));return px(e,s,null,n)},cr.createRoot=function(e,s){if(!_l(e))throw Error(i(299));var n=!1,t="",a=ip;return s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(t=s.identifierPrefix),s.onRecoverableError!==void 0&&(a=s.onRecoverableError)),s=Il(e,1,!1,null,null,n,!1,t,a),e[Or]=s.current,On(e.nodeType===8?e.parentNode:e),new Ll(s)},cr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Mi(s),e=e===null?null:e.stateNode,e},cr.flushSync=function(e){return Is(e)},cr.hydrate=function(e,s,n){if(!vo(s))throw Error(i(200));return yo(null,e,s,!0,n)},cr.hydrateRoot=function(e,s,n){if(!_l(e))throw Error(i(405));var t=n!=null&&n.hydratedSources||null,a=!1,l="",d=ip;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),s=ap(s,null,e,1,n!=null?n:null,a,!1,l,d),e[Or]=s.current,On(e),t)for(e=0;e<t.length;e++)n=t[e],a=n._getVersion,a=a(n._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[n,a]:s.mutableSourceEagerHydrationData.push(n,a);return new go(s)},cr.render=function(e,s,n){if(!vo(s))throw Error(i(200));return yo(null,e,s,!1,n)},cr.unmountComponentAtNode=function(e){if(!vo(e))throw Error(i(40));return e._reactRootContainer?(Is(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Or]=null})}),!0):!1},cr.unstable_batchedUpdates=wl,cr.unstable_renderSubtreeIntoContainer=function(e,s,n,t){if(!vo(n))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return yo(e,s,n,!1,t)},cr.version="18.3.1-next-f1338f8080-20240426",cr}var gp;function kx(){if(gp)return Ml.exports;gp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Ml.exports=wx(),Ml.exports}var vp;function Sx(){if(vp)return No;vp=1;var o=kx();return No.createRoot=o.createRoot,No.hydrateRoot=o.hydrateRoot,No}var Cx=Sx(),ye=ai();const fr=gx(ye);var dr=function(){return dr=Object.assign||function(c){for(var i,p=1,m=arguments.length;p<m;p++){i=arguments[p];for(var j in i)Object.prototype.hasOwnProperty.call(i,j)&&(c[j]=i[j])}return c},dr.apply(this,arguments)};function zo(o,c,i){if(i||arguments.length===2)for(var p=0,m=c.length,j;p<m;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return o.concat(j||Array.prototype.slice.call(c))}var Se="-ms-",at="-moz-",xe="-webkit-",$p="comm",Mo="rule",li="decl",Tx="@import",zx="@namespace",Vp="@keyframes",Ix="@layer",Gp=Math.abs,ii=String.fromCharCode,Ql=Object.assign;function Ex(o,c){return He(o,0)^45?(((c<<2^He(o,0))<<2^He(o,1))<<2^He(o,2))<<2^He(o,3):0}function Qp(o){return o.trim()}function Qr(o,c){return(o=c.exec(o))?o[0]:o}function se(o,c,i){return o.replace(c,i)}function wo(o,c,i){return o.indexOf(c,i)}function He(o,c){return o.charCodeAt(c)|0}function Ds(o,c,i){return o.slice(c,i)}function _r(o){return o.length}function Yp(o){return o.length}function tt(o,c){return c.push(o),o}function Lx(o,c){return o.map(c).join("")}function yp(o,c){return o.filter(function(i){return!Qr(i,c)})}var Ro=1,pn=1,Kp=0,wr=0,Fe=0,gn="";function Do(o,c,i,p,m,j,S,E){return{value:o,root:c,parent:i,type:p,props:m,children:j,line:Ro,column:pn,length:S,return:"",siblings:E}}function ms(o,c){return Ql(Do("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},c)}function dn(o){for(;o.root;)o=ms(o.root,{children:[o]});tt(o,o.siblings)}function _x(){return Fe}function Px(){return Fe=wr>0?He(gn,--wr):0,pn--,Fe===10&&(pn=1,Ro--),Fe}function Pr(){return Fe=wr<Kp?He(gn,wr++):0,pn++,Fe===10&&(pn=1,Ro++),Fe}function fs(){return He(gn,wr)}function ko(){return wr}function Fo(o,c){return Ds(gn,o,c)}function it(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bx(o){return Ro=pn=1,Kp=_r(gn=o),wr=0,[]}function Mx(o){return gn="",o}function Fl(o){return Qp(Fo(wr-1,Yl(o===91?o+2:o===40?o+1:o)))}function Rx(o){for(;(Fe=fs())&&Fe<33;)Pr();return it(o)>2||it(Fe)>3?"":" "}function Dx(o,c){for(;--c&&Pr()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return Fo(o,ko()+(c<6&&fs()==32&&Pr()==32))}function Yl(o){for(;Pr();)switch(Fe){case o:return wr;case 34:case 39:o!==34&&o!==39&&Yl(Fe);break;case 40:o===41&&Yl(o);break;case 92:Pr();break}return wr}function Fx(o,c){for(;Pr()&&o+Fe!==57;)if(o+Fe===84&&fs()===47)break;return"/*"+Fo(c,wr-1)+"*"+ii(o===47?o:Pr())}function Ox(o){for(;!it(fs());)Pr();return Fo(o,wr)}function Ax(o){return Mx(So("",null,null,null,[""],o=Bx(o),0,[0],o))}function So(o,c,i,p,m,j,S,E,T){for(var K=0,G=0,W=S,J=0,ie=0,q=0,U=1,Q=1,me=1,de=0,ne="",L=m,Z=j,H=p,I=ne;Q;)switch(q=de,de=Pr()){case 40:if(q!=108&&He(I,W-1)==58){wo(I+=se(Fl(de),"&","&\f"),"&\f",Gp(K?E[K-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:I+=Fl(de);break;case 9:case 10:case 13:case 32:I+=Rx(q);break;case 92:I+=Dx(ko()-1,7);continue;case 47:switch(fs()){case 42:case 47:tt(Wx(Fx(Pr(),ko()),c,i,T),T),(it(q||1)==5||it(fs()||1)==5)&&_r(I)&&Ds(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*U:E[K++]=_r(I)*me;case 125*U:case 59:case 0:switch(de){case 0:case 125:Q=0;case 59+G:me==-1&&(I=se(I,/\f/g,"")),ie>0&&(_r(I)-W||U===0&&q===47)&&tt(ie>32?Np(I+";",p,i,W-1,T):Np(se(I," ","")+";",p,i,W-2,T),T);break;case 59:I+=";";default:if(tt(H=jp(I,c,i,K,G,m,E,ne,L=[],Z=[],W,j),j),de===123)if(G===0)So(I,c,H,H,L,j,W,E,Z);else{switch(J){case 99:if(He(I,3)===110)break;case 108:if(He(I,2)===97)break;default:G=0;case 100:case 109:case 115:}G?So(o,H,H,p&&tt(jp(o,H,H,0,0,m,E,ne,m,L=[],W,Z),Z),m,Z,W,E,p?L:Z):So(I,H,H,H,[""],Z,0,E,Z)}}K=G=ie=0,U=me=1,ne=I="",W=S;break;case 58:W=1+_r(I),ie=q;default:if(U<1){if(de==123)--U;else if(de==125&&U++==0&&Px()==125)continue}switch(I+=ii(de),de*U){case 38:me=G>0?1:(I+="\f",-1);break;case 44:E[K++]=(_r(I)-1)*me,me=1;break;case 64:fs()===45&&(I+=Fl(Pr())),J=fs(),G=W=_r(ne=I+=Ox(ko())),de++;break;case 45:q===45&&_r(I)==2&&(U=0)}}return j}function jp(o,c,i,p,m,j,S,E,T,K,G,W){for(var J=m-1,ie=m===0?j:[""],q=Yp(ie),U=0,Q=0,me=0;U<p;++U)for(var de=0,ne=Ds(o,J+1,J=Gp(Q=S[U])),L=o;de<q;++de)(L=Qp(Q>0?ie[de]+" "+ne:se(ne,/&\f/g,ie[de])))&&(T[me++]=L);return Do(o,c,i,m===0?Mo:E,T,K,G,W)}function Wx(o,c,i,p){return Do(o,c,i,$p,ii(_x()),Ds(o,2,-2),0,p)}function Np(o,c,i,p,m){return Do(o,c,i,li,Ds(o,0,p),Ds(o,p+1,-1),p,m)}function Xp(o,c,i){switch(Ex(o,c)){case 5103:return xe+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xe+o+o;case 4855:return xe+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return at+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+o+at+o+Se+o+o;case 5936:switch(He(o,c+11)){case 114:return xe+o+Se+se(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return xe+o+Se+se(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return xe+o+Se+se(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return xe+o+Se+o+o;case 6165:return xe+o+Se+"flex-"+o+o;case 5187:return xe+o+se(o,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Se+"flex-$1$2")+o;case 5443:return xe+o+Se+"flex-item-"+se(o,/flex-|-self/g,"")+(Qr(o,/flex-|baseline/)?"":Se+"grid-row-"+se(o,/flex-|-self/g,""))+o;case 4675:return xe+o+Se+"flex-line-pack"+se(o,/align-content|flex-|-self/g,"")+o;case 5548:return xe+o+Se+se(o,"shrink","negative")+o;case 5292:return xe+o+Se+se(o,"basis","preferred-size")+o;case 6060:return xe+"box-"+se(o,"-grow","")+xe+o+Se+se(o,"grow","positive")+o;case 4554:return xe+se(o,/([^-])(transform)/g,"$1"+xe+"$2")+o;case 6187:return se(se(se(o,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),o,"")+o;case 5495:case 3959:return se(o,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return se(se(o,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+xe+o+o;case 4200:if(!Qr(o,/flex-|baseline/))return Se+"grid-column-align"+Ds(o,c)+o;break;case 2592:case 3360:return Se+se(o,"template-","")+o;case 4384:case 3616:return i&&i.some(function(p,m){return c=m,Qr(p.props,/grid-\w+-end/)})?~wo(o+(i=i[c].value),"span",0)?o:Se+se(o,"-start","")+o+Se+"grid-row-span:"+(~wo(i,"span",0)?Qr(i,/\d+/):+Qr(i,/\d+/)-+Qr(o,/\d+/))+";":Se+se(o,"-start","")+o;case 4896:case 4128:return i&&i.some(function(p){return Qr(p.props,/grid-\w+-start/)})?o:Se+se(se(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return se(o,/(.+)-inline(.+)/,xe+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_r(o)-1-c>6)switch(He(o,c+1)){case 109:if(He(o,c+4)!==45)break;case 102:return se(o,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+at+(He(o,c+3)==108?"$3":"$2-$3"))+o;case 115:return~wo(o,"stretch",0)?Xp(se(o,"stretch","fill-available"),c,i)+o:o}break;case 5152:case 5920:return se(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,j,S,E,T,K){return Se+m+":"+j+K+(S?Se+m+"-span:"+(E?T:+T-+j)+K:"")+o});case 4949:if(He(o,c+6)===121)return se(o,":",":"+xe)+o;break;case 6444:switch(He(o,He(o,14)===45?18:11)){case 120:return se(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(He(o,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Se+"$2box$3")+o;case 100:return se(o,":",":"+Se)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(o,"scroll-","scroll-snap-")+o}return o}function Io(o,c){for(var i="",p=0;p<o.length;p++)i+=c(o[p],p,o,c)||"";return i}function Ux(o,c,i,p){switch(o.type){case Ix:if(o.children.length)break;case Tx:case zx:case li:return o.return=o.return||o.value;case $p:return"";case Vp:return o.return=o.value+"{"+Io(o.children,p)+"}";case Mo:if(!_r(o.value=o.props.join(",")))return""}return _r(i=Io(o.children,p))?o.return=o.value+"{"+i+"}":""}function Hx(o){var c=Yp(o);return function(i,p,m,j){for(var S="",E=0;E<c;E++)S+=o[E](i,p,m,j)||"";return S}}function $x(o){return function(c){c.root||(c=c.return)&&o(c)}}function Vx(o,c,i,p){if(o.length>-1&&!o.return)switch(o.type){case li:o.return=Xp(o.value,o.length,i);return;case Vp:return Io([ms(o,{value:se(o.value,"@","@"+xe)})],p);case Mo:if(o.length)return Lx(i=o.props,function(m){switch(Qr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dn(ms(o,{props:[se(m,/:(read-\w+)/,":"+at+"$1")]})),dn(ms(o,{props:[m]})),Ql(o,{props:yp(i,p)});break;case"::placeholder":dn(ms(o,{props:[se(m,/:(plac\w+)/,":"+xe+"input-$1")]})),dn(ms(o,{props:[se(m,/:(plac\w+)/,":"+at+"$1")]})),dn(ms(o,{props:[se(m,/:(plac\w+)/,Se+"input-$1")]})),dn(ms(o,{props:[m]})),Ql(o,{props:yp(i,p)});break}return""})}}var Gx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mr={},un=typeof process!="undefined"&&mr!==void 0&&(mr.REACT_APP_SC_ATTR||mr.SC_ATTR)||"data-styled",qp="active",Zp="data-styled-version",Oo="6.3.10",ci=`/*!sc*/
`,lt=typeof window!="undefined"&&typeof document!="undefined",Qx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==""?mr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.SC_DISABLE_SPEEDY!==void 0&&mr.SC_DISABLE_SPEEDY!==""&&mr.SC_DISABLE_SPEEDY!=="false"&&mr.SC_DISABLE_SPEEDY);function pt(o){for(var c=[],i=1;i<arguments.length;i++)c[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Co=new Map,Eo=new Map,To=1,ot=function(o){if(Co.has(o))return Co.get(o);for(;Eo.has(To);)To++;var c=To++;return Co.set(o,c),Eo.set(c,o),c},Yx=function(o,c){To=c+1,Co.set(o,c),Eo.set(c,o)},di=Object.freeze([]),hn=Object.freeze({});function Kx(o,c,i){return i===void 0&&(i=hn),o.theme!==i.theme&&o.theme||c||i.theme}var Jp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Xx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qx=/(^-|-$)/g;function bp(o){return o.replace(Xx,"-").replace(qx,"")}var Zx=/(a)(d)/gi,wp=function(o){return String.fromCharCode(o+(o>25?39:97))};function Kl(o){var c,i="";for(c=Math.abs(o);c>52;c=c/52|0)i=wp(c%52)+i;return(wp(c%52)+i).replace(Zx,"$1-$2")}var Ol,Ps=function(o,c){for(var i=c.length;i;)o=33*o^c.charCodeAt(--i);return o},eu=function(o){return Ps(5381,o)};function Jx(o){return Kl(eu(o)>>>0)}function em(o){return o.displayName||o.name||"Component"}function Al(o){return typeof o=="string"&&!0}var ru=typeof Symbol=="function"&&Symbol.for,su=ru?Symbol.for("react.memo"):60115,rm=ru?Symbol.for("react.forward_ref"):60112,sm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tm=((Ol={})[rm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ol[su]=nu,Ol);function kp(o){return("type"in(c=o)&&c.type.$$typeof)===su?nu:"$$typeof"in o?tm[o.$$typeof]:sm;var c}var om=Object.defineProperty,am=Object.getOwnPropertyNames,Sp=Object.getOwnPropertySymbols,lm=Object.getOwnPropertyDescriptor,im=Object.getPrototypeOf,Cp=Object.prototype;function tu(o,c,i){if(typeof c!="string"){if(Cp){var p=im(c);p&&p!==Cp&&tu(o,p,i)}var m=am(c);Sp&&(m=m.concat(Sp(c)));for(var j=kp(o),S=kp(c),E=0;E<m.length;++E){var T=m[E];if(!(T in nm||i&&i[T]||S&&T in S||j&&T in j)){var K=lm(c,T);try{om(o,T,K)}catch{}}}}return o}function xn(o){return typeof o=="function"}function pi(o){return typeof o=="object"&&"styledComponentId"in o}function Ms(o,c){return o&&c?"".concat(o," ").concat(c):o||c||""}function Tp(o,c){return o.join("")}function ct(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Xl(o,c,i){if(i===void 0&&(i=!1),!i&&!ct(o)&&!Array.isArray(o))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)o[p]=Xl(o[p],c[p]);else if(ct(c))for(var p in c)o[p]=Xl(o[p],c[p]);return o}function ui(o,c){Object.defineProperty(o,"toString",{value:c})}var cm=(function(){function o(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var i=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)i+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)i-=this.groupSizes[p];return this._cGroup=c,this._cIndex=i,i},o.prototype.insertRules=function(c,i){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,j=m;c>=j;)if((j<<=1)<0)throw pt(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var S=m;S<j;S++)this.groupSizes[S]=0}for(var E=this.indexOfGroup(c+1),T=0,K=(S=0,i.length);S<K;S++)this.tag.insertRule(E,i[S])&&(this.groupSizes[c]++,E++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},o.prototype.clearGroup=function(c){if(c<this.length){var i=this.groupSizes[c],p=this.indexOfGroup(c),m=p+i;this.groupSizes[c]=0;for(var j=p;j<m;j++)this.tag.deleteRule(p);i>0&&this._cGroup>c&&(this._cIndex-=i)}},o.prototype.getGroup=function(c){var i="";if(c>=this.length||this.groupSizes[c]===0)return i;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),j=m+p,S=m;S<j;S++)i+=this.tag.getRule(S)+ci;return i},o})(),dm="style[".concat(un,"][").concat(Zp,'="').concat(Oo,'"]'),pm=new RegExp("^".concat(un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zp=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},ql=function(o){if(!o)return document;if(zp(o))return o;if("getRootNode"in o){var c=o.getRootNode();if(zp(c))return c}return document},um=function(o,c,i){for(var p,m=i.split(","),j=0,S=m.length;j<S;j++)(p=m[j])&&o.registerName(c,p)},hm=function(o,c){for(var i,p=((i=c.textContent)!==null&&i!==void 0?i:"").split(ci),m=[],j=0,S=p.length;j<S;j++){var E=p[j].trim();if(E){var T=E.match(pm);if(T){var K=0|parseInt(T[1],10),G=T[2];K!==0&&(Yx(G,K),um(o,G,T[3]),o.getTag().insertRules(K,m)),m.length=0}else m.push(E)}}},Wl=function(o){for(var c=ql(o.options.target).querySelectorAll(dm),i=0,p=c.length;i<p;i++){var m=c[i];m&&m.getAttribute(un)!==qp&&(hm(o,m),m.parentNode&&m.parentNode.removeChild(m))}};function xm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ou=function(o){var c=document.head,i=o||c,p=document.createElement("style"),m=(function(E){var T=Array.from(E.querySelectorAll("style[".concat(un,"]")));return T[T.length-1]})(i),j=m!==void 0?m.nextSibling:null;p.setAttribute(un,qp),p.setAttribute(Zp,Oo);var S=xm();return S&&p.setAttribute("nonce",S),i.insertBefore(p,j),p},mm=(function(){function o(c){this.element=ou(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){var p;if(i.sheet)return i.sheet;for(var m=(p=i.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,j=0,S=m.length;j<S;j++){var E=m[j];if(E.ownerNode===i)return E}throw pt(17)})(this.element),this.length=0}return o.prototype.insertRule=function(c,i){try{return this.sheet.insertRule(i,c),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},o.prototype.getRule=function(c){var i=this.sheet.cssRules[c];return i&&i.cssText?i.cssText:""},o})(),fm=(function(){function o(c){this.element=ou(c),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(c,i){if(c<=this.length&&c>=0){var p=document.createTextNode(i);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},o.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},o})(),gm=(function(){function o(c){this.rules=[],this.length=0}return o.prototype.insertRule=function(c,i){return c<=this.length&&(c===this.length?this.rules.push(i):this.rules.splice(c,0,i),this.length++,!0)},o.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},o.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},o})(),Ip=lt,vm={isServer:!lt,useCSSOMInjection:!Qx},au=(function(){function o(c,i,p){c===void 0&&(c=hn),i===void 0&&(i={});var m=this;this.options=dr(dr({},vm),c),this.gs=i,this.names=new Map(p),this.server=!!c.isServer,!this.server&&lt&&Ip&&(Ip=!1,Wl(this)),ui(this,function(){return(function(j){for(var S=j.getTag(),E=S.length,T="",K=function(W){var J=(function(me){return Eo.get(me)})(W);if(J===void 0)return"continue";var ie=j.names.get(J);if(ie===void 0||!ie.size)return"continue";var q=S.getGroup(W);if(q.length===0)return"continue";var U=un+".g"+W+'[id="'+J+'"]',Q="";ie.forEach(function(me){me.length>0&&(Q+=me+",")}),T+=q+U+'{content:"'+Q+'"}'+ci},G=0;G<E;G++)K(G);return T})(m)})}return o.registerId=function(c){return ot(c)},o.prototype.rehydrate=function(){!this.server&&lt&&Wl(this)},o.prototype.reconstructWithOptions=function(c,i){i===void 0&&(i=!0);var p=new o(dr(dr({},this.options),c),this.gs,i&&this.names||void 0);return!this.server&&lt&&c.target!==this.options.target&&ql(this.options.target)!==ql(c.target)&&Wl(p),p},o.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(i){var p=i.useCSSOMInjection,m=i.target;return i.isServer?new gm(m):p?new mm(m):new fm(m)})(this.options),new cm(c)));var c},o.prototype.hasNameForId=function(c,i){var p,m;return(m=(p=this.names.get(c))===null||p===void 0?void 0:p.has(i))!==null&&m!==void 0&&m},o.prototype.registerName=function(c,i){ot(c);var p=this.names.get(c);p?p.add(i):this.names.set(c,new Set([i]))},o.prototype.insertRules=function(c,i,p){this.registerName(c,i),this.getTag().insertRules(ot(c),p)},o.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},o.prototype.clearRules=function(c){this.getTag().clearGroup(ot(c)),this.clearNames(c)},o.prototype.clearTag=function(){this.tag=void 0},o})(),ym=/&/g,Yr=47,Bs=42;function Ep(o){if(o.indexOf("}")===-1)return!1;for(var c=o.length,i=0,p=0,m=!1,j=0;j<c;j++){var S=o.charCodeAt(j);if(p!==0||m||S!==Yr||o.charCodeAt(j+1)!==Bs)if(m)S===Bs&&o.charCodeAt(j+1)===Yr&&(m=!1,j++);else if(S!==34&&S!==39||j!==0&&o.charCodeAt(j-1)===92){if(p===0){if(S===123)i++;else if(S===125&&--i<0)return!0}}else p===0?p=S:p===S&&(p=0);else m=!0,j++}return i!==0||p!==0}function lu(o,c){return o.map(function(i){return i.type==="rule"&&(i.value="".concat(c," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(c," ")),i.props=i.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=lu(i.children,c)),i})}function jm(o){var c,i,p,m=hn,j=m.options,S=j===void 0?hn:j,E=m.plugins,T=E===void 0?di:E,K=function(q,U,Q){return Q.startsWith(i)&&Q.endsWith(i)&&Q.replaceAll(i,"").length>0?".".concat(c):q},G=T.slice();G.push(function(q){q.type===Mo&&q.value.includes("&")&&(p||(p=new RegExp("\\".concat(i,"\\b"),"g")),q.props[0]=q.props[0].replace(ym,i).replace(p,K))}),S.prefix&&G.push(Vx),G.push(Ux);var W=[],J=Hx(G.concat($x(function(q){return W.push(q)}))),ie=function(q,U,Q,me){U===void 0&&(U=""),Q===void 0&&(Q=""),me===void 0&&(me="&"),c=me,i=U,p=void 0;var de=(function(L){if(!Ep(L))return L;for(var Z=L.length,H="",I=0,D=0,je=0,Be=!1,ae=0;ae<Z;ae++){var _e=L.charCodeAt(ae);if(je!==0||Be||_e!==Yr||L.charCodeAt(ae+1)!==Bs)if(Be)_e===Bs&&L.charCodeAt(ae+1)===Yr&&(Be=!1,ae++);else if(_e!==34&&_e!==39||ae!==0&&L.charCodeAt(ae-1)===92){if(je===0)if(_e===123)D++;else if(_e===125){if(--D<0){for(var Te=ae+1;Te<Z;){var Ke=L.charCodeAt(Te);if(Ke===59||Ke===10)break;Te++}Te<Z&&L.charCodeAt(Te)===59&&Te++,D=0,ae=Te-1,I=Te;continue}D===0&&(H+=L.substring(I,ae+1),I=ae+1)}else _e===59&&D===0&&(H+=L.substring(I,ae+1),I=ae+1)}else je===0?je=_e:je===_e&&(je=0);else Be=!0,ae++}if(I<Z){var rr=L.substring(I);Ep(rr)||(H+=rr)}return H})((function(L){if(L.indexOf("//")===-1)return L;for(var Z=L.length,H=[],I=0,D=0,je=0,Be=0;D<Z;){var ae=L.charCodeAt(D);if(ae!==34&&ae!==39||D!==0&&L.charCodeAt(D-1)===92)if(je===0)if(ae===Yr&&D+1<Z&&L.charCodeAt(D+1)===Bs){for(D+=2;D+1<Z&&(L.charCodeAt(D)!==Bs||L.charCodeAt(D+1)!==Yr);)D++;D+=2}else if(ae===40&&D>=3&&(32|L.charCodeAt(D-1))==108&&(32|L.charCodeAt(D-2))==114&&(32|L.charCodeAt(D-3))==117)Be=1,D++;else if(Be>0)ae===41?Be--:ae===40&&Be++,D++;else if(ae===Bs&&D+1<Z&&L.charCodeAt(D+1)===Yr)D>I&&H.push(L.substring(I,D)),I=D+=2;else if(ae===Yr&&D+1<Z&&L.charCodeAt(D+1)===Yr){for(D>I&&H.push(L.substring(I,D));D<Z&&L.charCodeAt(D)!==10;)D++;I=D}else D++;else D++;else je===0?je=ae:je===ae&&(je=0),D++}return I===0?L:(I<Z&&H.push(L.substring(I)),H.join(""))})(q)),ne=Ax(Q||U?"".concat(Q," ").concat(U," { ").concat(de," }"):de);return S.namespace&&(ne=lu(ne,S.namespace)),W=[],Io(ne,J),W};return ie.hash=T.length?T.reduce(function(q,U){return U.name||pt(15),Ps(q,U.name)},5381).toString():"",ie}var Nm=new au,Zl=jm(),iu=fr.createContext({shouldForwardProp:void 0,styleSheet:Nm,stylis:Zl});iu.Consumer;fr.createContext(void 0);function Lp(){return fr.useContext(iu)}var bm=(function(){function o(c,i){var p=this;this.inject=function(m,j){j===void 0&&(j=Zl);var S=p.name+j.hash;m.hasNameForId(p.id,S)||m.insertRules(p.id,S,j(p.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=i,ui(this,function(){throw pt(12,String(p.name))})}return o.prototype.getName=function(c){return c===void 0&&(c=Zl),this.name+c.hash},o})();function wm(o,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in Gx||o.startsWith("--")?String(c).trim():"".concat(c,"px")}var km=function(o){return o>="A"&&o<="Z"};function _p(o){for(var c="",i=0;i<o.length;i++){var p=o[i];if(i===1&&p==="-"&&o[0]==="-")return o;km(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var cu=function(o){return o==null||o===!1||o===""},du=function(o){var c=[];for(var i in o){var p=o[i];o.hasOwnProperty(i)&&!cu(p)&&(Array.isArray(p)&&p.isCss||xn(p)?c.push("".concat(_p(i),":"),p,";"):ct(p)?c.push.apply(c,zo(zo(["".concat(i," {")],du(p),!1),["}"],!1)):c.push("".concat(_p(i),": ").concat(wm(i,p),";")))}return c};function Rs(o,c,i,p,m){if(m===void 0&&(m=[]),typeof o=="string")return o&&m.push(o),m;if(cu(o))return m;if(pi(o))return m.push(".".concat(o.styledComponentId)),m;if(xn(o)){if(!xn(S=o)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(o),m;var j=o(c);return Rs(j,c,i,p,m)}var S;if(o instanceof bm)return i?(o.inject(i,p),m.push(o.getName(p))):m.push(o),m;if(ct(o)){for(var E=du(o),T=0;T<E.length;T++)m.push(E[T]);return m}if(!Array.isArray(o))return m.push(o.toString()),m;for(T=0;T<o.length;T++)Rs(o[T],c,i,p,m);return m}function Sm(o){for(var c=0;c<o.length;c+=1){var i=o[c];if(xn(i)&&!pi(i))return!1}return!0}var Cm=eu(Oo),Tm=(function(){function o(c,i,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&Sm(c),this.componentId=i,this.baseHash=Ps(Cm,i),this.baseStyle=p,au.registerId(i)}return o.prototype.generateAndInjectStyles=function(c,i,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,i,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))m=Ms(m,this.staticRulesId);else{var j=Tp(Rs(this.rules,c,i,p)),S=Kl(Ps(this.baseHash,j)>>>0);if(!i.hasNameForId(this.componentId,S)){var E=p(j,".".concat(S),void 0,this.componentId);i.insertRules(this.componentId,S,E)}m=Ms(m,S),this.staticRulesId=S}else{for(var T=Ps(this.baseHash,p.hash),K="",G=0;G<this.rules.length;G++){var W=this.rules[G];if(typeof W=="string")K+=W;else if(W){var J=Tp(Rs(W,c,i,p));T=Ps(Ps(T,String(G)),J),K+=J}}if(K){var ie=Kl(T>>>0);if(!i.hasNameForId(this.componentId,ie)){var q=p(K,".".concat(ie),void 0,this.componentId);i.insertRules(this.componentId,ie,q)}m=Ms(m,ie)}}return{className:m,css:typeof window=="undefined"?i.getTag().getGroup(ot(this.componentId)):""}},o})(),pu=fr.createContext(void 0);pu.Consumer;var Ul={};function zm(o,c,i){var p=pi(o),m=o,j=!Al(o),S=c.attrs,E=S===void 0?di:S,T=c.componentId,K=T===void 0?(function(L,Z){var H=typeof L!="string"?"sc":bp(L);Ul[H]=(Ul[H]||0)+1;var I="".concat(H,"-").concat(Jx(Oo+H+Ul[H]));return Z?"".concat(Z,"-").concat(I):I})(c.displayName,c.parentComponentId):T,G=c.displayName,W=G===void 0?(function(L){return Al(L)?"styled.".concat(L):"Styled(".concat(em(L),")")})(o):G,J=c.displayName&&c.componentId?"".concat(bp(c.displayName),"-").concat(c.componentId):c.componentId||K,ie=p&&m.attrs?m.attrs.concat(E).filter(Boolean):E,q=c.shouldForwardProp;if(p&&m.shouldForwardProp){var U=m.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;q=function(L,Z){return U(L,Z)&&Q(L,Z)}}else q=U}var me=new Tm(i,J,p?m.componentStyle:void 0);function de(L,Z){return(function(H,I,D){var je=H.attrs,Be=H.componentStyle,ae=H.defaultProps,_e=H.foldedComponentIds,Te=H.styledComponentId,Ke=H.target,rr=fr.useContext(pu),Xe=Lp(),Ne=H.shouldForwardProp||Xe.shouldForwardProp,z=Kx(I,rr,ae)||hn,O=(function(oe,pe,ce){for(var fe,Ie=dr(dr({},pe),{className:void 0,theme:ce}),Kr=0;Kr<oe.length;Kr+=1){var ys=xn(fe=oe[Kr])?fe(Ie):fe;for(var kr in ys)kr==="className"?Ie.className=Ms(Ie.className,ys[kr]):kr==="style"?Ie.style=dr(dr({},Ie.style),ys[kr]):Ie[kr]=ys[kr]}return"className"in pe&&typeof pe.className=="string"&&(Ie.className=Ms(Ie.className,pe.className)),Ie})(je,I,z),_=O.as||Ke,f={};for(var N in O)O[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&O.theme===z||(N==="forwardedAs"?f.as=O.forwardedAs:Ne&&!Ne(N,_)||(f[N]=O[N]));var ee=(function(oe,pe){var ce=Lp(),fe=oe.generateAndInjectStyles(pe,ce.styleSheet,ce.stylis);return fe})(Be,O),re=ee.className,le=Ms(_e,Te);return re&&(le+=" "+re),O.className&&(le+=" "+O.className),f[Al(_)&&!Jp.has(_)?"class":"className"]=le,D&&(f.ref=D),ye.createElement(_,f)})(ne,L,Z)}de.displayName=W;var ne=fr.forwardRef(de);return ne.attrs=ie,ne.componentStyle=me,ne.displayName=W,ne.shouldForwardProp=q,ne.foldedComponentIds=p?Ms(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=J,ne.target=p?m.target:o,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=p?(function(Z){for(var H=[],I=1;I<arguments.length;I++)H[I-1]=arguments[I];for(var D=0,je=H;D<je.length;D++)Xl(Z,je[D],!0);return Z})({},m.defaultProps,L):L}}),ui(ne,function(){return".".concat(ne.styledComponentId)}),j&&tu(ne,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Pp(o,c){for(var i=[o[0]],p=0,m=c.length;p<m;p+=1)i.push(c[p],o[p+1]);return i}var Bp=function(o){return Object.assign(o,{isCss:!0})};function Im(o){for(var c=[],i=1;i<arguments.length;i++)c[i-1]=arguments[i];if(xn(o)||ct(o))return Bp(Rs(Pp(di,zo([o],c,!0))));var p=o;return c.length===0&&p.length===1&&typeof p[0]=="string"?Rs(p):Bp(Rs(Pp(p,c)))}function Jl(o,c,i){if(i===void 0&&(i=hn),!c)throw pt(1,c);var p=function(m){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return o(c,i,Im.apply(void 0,zo([m],j,!1)))};return p.attrs=function(m){return Jl(o,c,dr(dr({},i),{attrs:Array.prototype.concat(i.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return Jl(o,c,dr(dr({},i),m))},p}var uu=function(o){return Jl(zm,o)},ve=uu;Jp.forEach(function(o){ve[o]=uu(o)});const Hl={Wrapper:ve.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ve.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:ve.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Mp={Wrapper:ve.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:ve.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Em="/css-core-notes/images/transparentLogo.png";var hu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rp=fr.createContext&&fr.createContext(hu),Lm=["attr","size","title"];function _m(o,c){if(o==null)return{};var i=Pm(o,c),p,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(o);for(m=0;m<j.length;m++)p=j[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(o,p)&&(i[p]=o[p])}return i}function Pm(o,c){if(o==null)return{};var i={};for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p)){if(c.indexOf(p)>=0)continue;i[p]=o[p]}return i}function Lo(){return Lo=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(o[p]=i[p])}return o},Lo.apply(this,arguments)}function Dp(o,c){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(o,m).enumerable})),i.push.apply(i,p)}return i}function _o(o){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?Dp(Object(i),!0).forEach(function(p){Bm(o,p,i[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):Dp(Object(i)).forEach(function(p){Object.defineProperty(o,p,Object.getOwnPropertyDescriptor(i,p))})}return o}function Bm(o,c,i){return c=Mm(c),c in o?Object.defineProperty(o,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[c]=i,o}function Mm(o){var c=Rm(o,"string");return typeof c=="symbol"?c:c+""}function Rm(o,c){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var p=i.call(o,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(o)}function xu(o){return o&&o.map((c,i)=>fr.createElement(c.tag,_o({key:i},c.attr),xu(c.child)))}function A(o){return c=>fr.createElement(Dm,Lo({attr:_o({},o.attr)},c),xu(o.child))}function Dm(o){var c=i=>{var{attr:p,size:m,title:j}=o,S=_m(o,Lm),E=m||i.size||"1em",T;return i.className&&(T=i.className),o.className&&(T=(T?T+" ":"")+o.className),fr.createElement("svg",Lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,p,S,{className:T,style:_o(_o({color:o.color||i.color},i.style),o.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),j&&fr.createElement("title",null,j),o.children)};return Rp!==void 0?fr.createElement(Rp.Consumer,null,i=>c(i)):c(hu)}function hi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function mu(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(o)}function Fm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"17",y1:"10",x2:"3",y2:"10"},child:[]},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"},child:[]},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"},child:[]},{tag:"line",attr:{x1:"17",y1:"18",x2:"3",y2:"18"},child:[]}]})(o)}function Fp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"},child:[]},{tag:"line",attr:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"},child:[]},{tag:"line",attr:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"},child:[]}]})(o)}function xi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function Oe(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function Ae(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(o)}function fu(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function X(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function gu(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(o)}function Om(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(o)}function ei(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(o)}function bo(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(o)}function Am(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Wm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.13 1L6 16a2 2 0 0 0 2 2h15"},child:[]},{tag:"path",attr:{d:"M1 6.13L16 6a2 2 0 0 1 2 2v15"},child:[]}]})(o)}function $l(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"22",y1:"12",x2:"18",y2:"12"},child:[]},{tag:"line",attr:{x1:"6",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"6",x2:"12",y2:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"18"},child:[]}]})(o)}function ri(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(o)}function Po(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(o)}function Um(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 19 22 12 13 5 13 19"},child:[]},{tag:"polygon",attr:{points:"2 19 11 12 2 5 2 19"},child:[]}]})(o)}function vu(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(o)}function Hm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function $m(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"2.18",ry:"2.18"},child:[]},{tag:"line",attr:{x1:"7",y1:"2",x2:"7",y2:"22"},child:[]},{tag:"line",attr:{x1:"17",y1:"2",x2:"17",y2:"22"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"2",y1:"7",x2:"7",y2:"7"},child:[]},{tag:"line",attr:{x1:"2",y1:"17",x2:"7",y2:"17"},child:[]},{tag:"line",attr:{x1:"17",y1:"17",x2:"22",y2:"17"},child:[]},{tag:"line",attr:{x1:"17",y1:"7",x2:"22",y2:"7"},child:[]}]})(o)}function Vm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(o)}function Gm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(o)}function mn(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function yu(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function si(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function ni(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(o)}function Op(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(o)}function Ce(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function ti(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(o)}function Ap(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Wp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(o)}function Qm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function ju(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(o)}function Ym(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"},child:[]}]})(o)}function Km(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Vl(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(o)}function mi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function dt(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(o)}function Xm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function qm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"10",y1:"15",x2:"10",y2:"9"},child:[]},{tag:"line",attr:{x1:"14",y1:"15",x2:"14",y2:"9"},child:[]}]})(o)}function Zm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19l7-7 3 3-7 7-3-3z"},child:[]},{tag:"path",attr:{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"},child:[]},{tag:"path",attr:{d:"M2 2l7.586 7.586"},child:[]},{tag:"circle",attr:{cx:"11",cy:"11",r:"2"},child:[]}]})(o)}function Jm(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function gs(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function Gl(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(o)}function ef(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]}]})(o)}function fi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function Up(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(o)}function fn(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function rf(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function oi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function Bo(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(o)}function vs(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const sf=()=>{const[o,c]=ye.useState(!1),[i,p]=ye.useState("dark");ye.useEffect(()=>{const E=localStorage.getItem("app-theme")||"dark";p(E),E==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ye.useEffect(()=>{i==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",i)},[i]);const m=ye.useMemo(()=>i==="light"?"dark":"light",[i]),j=()=>{p(m)};return r.jsx(Mp.Wrapper,{children:r.jsx(Mp.Main,{children:r.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!o&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:Em,alt:"css-core-notes",onLoad:()=>c(!0),style:{opacity:o?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"css-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance css revision"})]})]}),r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[r.jsx("span",{className:"icon",children:i==="light"?r.jsx(mi,{}):r.jsx(fi,{})}),r.jsx("span",{className:"label",children:i==="light"?"Light":"Dark"})]})]})})})},nf={Wrapper:ve.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},tf=()=>r.jsxs(nf.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Hp={Wrapper:ve.section`
        width: 100%;
        /* padding: 60px 20px; */
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ve.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 40px;
        box-shadow: 0 10px 30px var(--color-shadow);

        .heading {
            font-size: 32px;
            margin-bottom: 24px;
        }

        p {
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 18px;
            color: var(--color-text-secondary);
        }

        .meta {
            margin-top: 28px;
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 10px;
            font-size: 14px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family: monospace;
            color: var(--color-text-primary);
        }
    `},of=()=>{const o="2026-02-21T06:42:58.503Z",c=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return r.jsx(Hp.Wrapper,{children:r.jsxs(Hp.Content,{children:[r.jsx("h2",{className:"heading",children:"About CSS"}),r.jsx("p",{children:"CSS stands for Cascading Style Sheets. It controls how HTML looks and feels on screen. CSS is responsible for layout, spacing, colors, typography, responsive behavior, and visual effects. HTML gives structure and meaning, while CSS gives presentation."}),r.jsx("p",{children:"The core power of CSS comes from the cascade. Multiple rules can apply to the same element, and the browser decides the final result using specificity, source order, and inheritance. Once you understand the cascade, layout systems like Flexbox and Grid become much easier and more predictable."}),r.jsx("p",{children:"The css-core-notes project is designed as a focused revision system. It keeps everything in one scrollable page with expandable topics, so you can revise quickly before interviews and also build a strong mental model of modern CSS."}),r.jsxs("div",{className:"meta",children:[r.jsx("span",{className:"metaLabel",children:"Last updated:"}),r.jsx("span",{className:"metaValue",children:c})]})]})})},af={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .flow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .flowItem {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 14px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},lf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(af.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(vu,{})}),r.jsx("span",{className:"title",children:"CSS Fundamentals"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Core basics in one view"]}),r.jsx("p",{className:"p",children:"CSS controls how HTML looks. These fundamentals explain how rules are written and how the browser decides which styles win."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is CSS"}),r.jsx("p",{className:"p",children:"CSS stands for Cascading Style Sheets. It is used to style HTML: layout, spacing, colors, fonts, and responsive behavior. HTML is structure. CSS is presentation."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How CSS works with HTML"}),r.jsx("p",{className:"p",children:"CSS targets HTML elements using selectors and applies styling rules to them. The browser reads HTML, builds a DOM tree, then reads CSS and applies it to matching nodes."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"CSS syntax"}),r.jsx("p",{className:"p",children:"A CSS rule has a selector and a declaration block. The declaration block contains property-value pairs."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Basic rule"]}),r.jsx("pre",{className:"code",children:`selector {
  property: value;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Selectors overview"}),r.jsx("p",{className:"p",children:"Selectors decide which elements get styled. Common ones are element selectors, class selectors, id selectors, and combinations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Element: ",r.jsx("span",{className:"mono",children:"p"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Class: ",r.jsx("span",{className:"mono",children:".card"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Id: ",r.jsx("span",{className:"mono",children:"#header"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Descendant: ",r.jsx("span",{className:"mono",children:".card p"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Property and value"}),r.jsxs("p",{className:"p",children:["A property is what you change. A value is what you set it to. Example: ",r.jsx("span",{className:"mono",children:"color"})," is a property, ",r.jsx("span",{className:"mono",children:"red"})," is a value."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(fn,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Property"}),r.jsx("div",{className:"miniSub",children:"color"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Gm,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Value"}),r.jsx("div",{className:"miniSub",children:"#4ea1ff"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Comments"}),r.jsx("p",{className:"p",children:"Comments are notes for humans. They do not affect styling. CSS comments use this format."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Comment format"]}),r.jsx("pre",{className:"code",children:"/* this is a comment */"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How browser applies CSS"}),r.jsx("p",{className:"p",children:"The browser matches selectors against the DOM, then calculates the final styles for each element using the cascade rules. After that it runs layout and paint to draw the UI."}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowItem",children:"HTML → DOM"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"CSS → rules"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Cascade"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Layout"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Paint"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Cascade concept"}),r.jsx("p",{className:"p",children:"Cascade means multiple rules can apply to the same element. The browser chooses the final value based on importance, specificity, and source order."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Simple rule"]}),r.jsx("div",{className:"calloutText",children:"If two rules target the same property, the more specific one wins. If specificity is same, the later one wins."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Specificity basics"}),r.jsx("p",{className:"p",children:"Specificity is the priority score of a selector. In simple terms: id selectors are stronger than class selectors, and class selectors are stronger than element selectors."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"#id"})," is strongest"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:".class"})," is medium"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"div"})," is weakest"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inheritance basics"}),r.jsx("p",{className:"p",children:"Some properties flow from parent to child automatically like text color and font. Many layout properties do not inherit like margin, padding, width, and border."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(si,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:'If a text style feels "automatic", it is probably inherited. If a box style does not change children, it usually does not inherit.'})]})]})]})]})},cf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .muted {
            margin-top: 12px;
            color: var(--color-text-muted);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .rank {
            margin-top: 12px;
            display: grid;
            gap: 10px;
        }

        .rankItem {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            color: var(--color-text-secondary);
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
        }

        .rankNo {
            width: 26px;
            height: 26px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-primary);
            font-weight: 900;
            flex: 0 0 auto;
        }
    `},df=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(cf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ap,{})}),r.jsx("span",{className:"title",children:"Ways to Apply CSS"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Linking CSS to HTML"]}),r.jsx("p",{className:"p",children:"CSS can be applied in multiple ways. In real projects, external stylesheets are the standard. Inline and internal styles are mainly for quick demos or special cases."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inline CSS"}),r.jsxs("p",{className:"p",children:["Styles written directly on an element using the"," ",r.jsx("span",{className:"mono",children:"style"})," attribute. It is quick but hard to maintain and reuse."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<p style="color: #4ea1ff; margin: 0;">
  Hello CSS
</p>`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"When to use"]}),r.jsx("div",{className:"calloutText",children:"Use inline styles for tiny one-off overrides, or dynamic styling generated by JS. Avoid for normal layout and theme styling."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Internal CSS"}),r.jsxs("p",{className:"p",children:["CSS written inside a ",r.jsx("span",{className:"mono",children:"style"})," ","tag in the HTML ",r.jsx("span",{className:"mono",children:"head"}),". Works for single pages or prototypes."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Hm,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<head>
  <style>
    .card { padding: 16px; border: 1px solid #2d333b; }
  </style>
</head>`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"External CSS"}),r.jsxs("p",{className:"p",children:["CSS in a separate ",r.jsx("span",{className:"mono",children:".css"})," ","file linked using ",r.jsx("span",{className:"mono",children:"link"}),". This is the most maintainable and reusable approach."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ap,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<head>
  <link rel="stylesheet" href="styles.css" />
</head>`})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Best for real projects"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Cached by browser"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Easy to manage at scale"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@import rule"}),r.jsxs("p",{className:"p",children:["Used inside a CSS file to import another stylesheet. Works, but can be slower and harder to manage than a"," ",r.jsx("span",{className:"mono",children:"link"})," tag in many cases."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`/* in main.css */
@import "./reset.css";
@import "./components/button.css";`})]}),r.jsx("p",{className:"p muted",children:"Note: Modern tools (Vite, bundlers) handle imports well, but in plain CSS on web pages, multiple @import can affect loading performance."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Order of precedence"}),r.jsx("p",{className:"p",children:"If multiple styles target the same element and property, the browser decides the final value using the cascade. A simple quick order is:"}),r.jsxs("div",{className:"rank",children:[r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"1"}),"Inline styles (strongest)"]}),r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"2"}),"Internal and External (depends on order and specificity)"]}),r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"3"}),"Browser default styles (weakest)"]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Remember this"]}),r.jsx("div",{className:"calloutText",children:"When specificity is equal, the rule that appears later wins. Inline styles usually beat normal stylesheets."})]})]})]})]})},pf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .cardTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .cardSub {
            margin: 0 0 10px 0;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .code {
            margin: 0;
            padding: 10px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            white-space: pre;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},uf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(pf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(fn,{})}),r.jsx("span",{className:"title",children:"Selectors Deep Dive"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Vm,{})}),"Match elements precisely"]}),r.jsx("p",{className:"p",children:"Selectors tell CSS which elements to style. Learn these patterns and your CSS becomes faster to write and easier to debug."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Basic Selectors"}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Universal selector"," ",r.jsx("span",{className:"mono",children:"*"})]}),r.jsx("p",{className:"cardSub",children:"Matches every element on the page."}),r.jsx("pre",{className:"code",children:"* { box-sizing: border-box; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Type selector"}),r.jsx("p",{className:"cardSub",children:"Matches elements by tag name."}),r.jsx("pre",{className:"code",children:"p { line-height: 1.7; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Class selector"," ",r.jsx("span",{className:"mono",children:".class"})]}),r.jsx("p",{className:"cardSub",children:"Matches elements that have a class."}),r.jsx("pre",{className:"code",children:".card { padding: 16px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["ID selector ",r.jsx("span",{className:"mono",children:"#id"})]}),r.jsx("p",{className:"cardSub",children:"Matches the element with a specific id."}),r.jsx("pre",{className:"code",children:"#header { position: sticky; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Grouping selector"}),r.jsx("p",{className:"cardSub",children:"Apply the same rules to multiple selectors."}),r.jsx("pre",{className:"code",children:"h1, h2, h3 { font-weight: 800; }"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Combinators"}),r.jsx("p",{className:"p",children:"Combinators describe relationships between elements. They help you target elements based on where they are in the HTML structure."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Descendant"}),r.jsx("p",{className:"cardSub",children:"Matches any nested element inside another."}),r.jsx("pre",{className:"code",children:".card p { margin-bottom: 12px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Child ",r.jsx("span",{className:"mono",children:">"})]}),r.jsx("p",{className:"cardSub",children:"Matches direct children only."}),r.jsx("pre",{className:"code",children:".list > li { padding: 8px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Adjacent sibling ",r.jsx("span",{className:"mono",children:"+"})]}),r.jsx("p",{className:"cardSub",children:"Matches the very next sibling."}),r.jsx("pre",{className:"code",children:"h2 + p { margin-top: 6px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["General sibling ",r.jsx("span",{className:"mono",children:"~"})]}),r.jsx("p",{className:"cardSub",children:"Matches any later sibling."}),r.jsx("pre",{className:"code",children:"h2 ~ p { color: #8b949e; }"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Attribute Selectors"}),r.jsx("p",{className:"p",children:"Attribute selectors match elements based on attributes like href, type, data-*, aria-* and more."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr]"})}),r.jsx("p",{className:"cardSub",children:"Has the attribute."}),r.jsx("pre",{className:"code",children:"[disabled] { opacity: 0.6; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr=value]"})}),r.jsx("p",{className:"cardSub",children:"Exact value match."}),r.jsx("pre",{className:"code",children:'input[type="email"] { border-color: #4ea1ff; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr^=]"})}),r.jsx("p",{className:"cardSub",children:"Starts with."}),r.jsx("pre",{className:"code",children:'a[href^="https"] { font-weight: 800; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr$=]"})}),r.jsx("p",{className:"cardSub",children:"Ends with."}),r.jsx("pre",{className:"code",children:'a[href$=".pdf"] { text-decoration: underline; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr*=]"})}),r.jsx("p",{className:"cardSub",children:"Contains substring."}),r.jsx("pre",{className:"code",children:'img[src*="logo"] { filter: grayscale(1); }'})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Pseudo Classes"}),r.jsx("p",{className:"p",children:"Pseudo classes select elements in a particular state like hover, focus, visited, or based on position among siblings."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":hover"})}),r.jsx("p",{className:"cardSub",children:"Mouse is over element."}),r.jsx("pre",{className:"code",children:".btn:hover { transform: translateY(-1px); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":active"})}),r.jsx("p",{className:"cardSub",children:"Being clicked/pressed."}),r.jsx("pre",{className:"code",children:".btn:active { transform: translateY(0); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":focus"})}),r.jsx("p",{className:"cardSub",children:"Keyboard focus."}),r.jsx("pre",{className:"code",children:"input:focus { outline: 2px solid var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":visited"})}),r.jsx("p",{className:"cardSub",children:"Visited link state."}),r.jsx("pre",{className:"code",children:"a:visited { opacity: 0.85; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":link"})}),r.jsx("p",{className:"cardSub",children:"Unvisited link state."}),r.jsx("pre",{className:"code",children:"a:link { color: var(--color-link); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":first-child"})}),r.jsx("p",{className:"cardSub",children:"First child of parent."}),r.jsx("pre",{className:"code",children:".list li:first-child { font-weight: 800; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":last-child"})}),r.jsx("p",{className:"cardSub",children:"Last child of parent."}),r.jsx("pre",{className:"code",children:".list li:last-child { opacity: 0.8; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":nth-child()"})}),r.jsx("p",{className:"cardSub",children:"Select by index."}),r.jsx("pre",{className:"code",children:".list li:nth-child(2) { color: var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":nth-of-type()"})}),r.jsx("p",{className:"cardSub",children:"Index among same tag type."}),r.jsx("pre",{className:"code",children:"p:nth-of-type(2) { margin-top: 10px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":not()"})}),r.jsx("p",{className:"cardSub",children:"Exclude matches."}),r.jsx("pre",{className:"code",children:".btn:not(.primary) { opacity: 0.9; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":is()"})}),r.jsx("p",{className:"cardSub",children:"Group selectors (keeps specificity)."}),r.jsx("pre",{className:"code",children:":is(h1, h2, h3) { letter-spacing: 0.2px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":where()"})}),r.jsx("p",{className:"cardSub",children:"Group selectors (zero specificity)."}),r.jsx("pre",{className:"code",children:":where(h1, h2, h3) { margin: 0; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":has()"})}),r.jsx("p",{className:"cardSub",children:"Select parent based on children (modern CSS)."}),r.jsx("pre",{className:"code",children:".card:has(img) { padding-top: 10px; }"})]})]}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTitle",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(vs,{})}),"Note"]}),r.jsxs("div",{className:"noteText",children:[r.jsx("span",{className:"mono",children:":has()"})," is newer. It works in modern browsers, but keep fallback in mind for older environments."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Pseudo Elements"}),r.jsx("p",{className:"p",children:"Pseudo elements style a specific part of an element or create extra styling content."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::before"})}),r.jsx("p",{className:"cardSub",children:"Insert content before."}),r.jsx("pre",{className:"code",children:'.tag::before { content: "#"; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::after"})}),r.jsx("p",{className:"cardSub",children:"Insert content after."}),r.jsx("pre",{className:"code",children:'.tag::after { content: ""; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::first-letter"})}),r.jsx("p",{className:"cardSub",children:"Style first letter."}),r.jsx("pre",{className:"code",children:"p::first-letter { font-size: 22px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::first-line"})}),r.jsx("p",{className:"cardSub",children:"Style first line."}),r.jsx("pre",{className:"code",children:"p::first-line { font-weight: 800; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::selection"})}),r.jsx("p",{className:"cardSub",children:"Selected text."}),r.jsx("pre",{className:"code",children:"::selection { background: var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::placeholder"})}),r.jsx("p",{className:"cardSub",children:"Placeholder styling."}),r.jsx("pre",{className:"code",children:"input::placeholder { color: var(--color-text-muted); }"})]})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick priority tip"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer class selectors for reusable styling"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Avoid heavy nesting and overly specific selectors"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use pseudo classes for interaction and structure"]})]})]})]})]})},hf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .diagram {
            margin-top: 14px;
        }

        .dMargin {
            border: 1px dashed var(--color-border-light);
            background: rgba(78, 161, 255, 0.06);
            border-radius: 16px;
            padding: 14px;
        }

        .dBorder {
            border: 1px solid var(--color-border);
            background: rgba(78, 161, 255, 0.08);
            border-radius: 14px;
            padding: 14px;
            margin-top: 10px;
        }

        .dPadding {
            border: 1px solid var(--color-border);
            background: rgba(78, 161, 255, 0.1);
            border-radius: 12px;
            padding: 14px;
            margin-top: 10px;
        }

        .dContent {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 10px;
            padding: 18px;
            margin-top: 10px;
        }

        .dLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .diagramNote {
            margin-top: 10px;
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .miniRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            min-width: 240px;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .callout.warn {
            border-color: rgba(210, 153, 34, 0.45);
            background: rgba(210, 153, 34, 0.08);
        }

        .callout.ok {
            border-color: rgba(63, 185, 80, 0.45);
            background: rgba(63, 185, 80, 0.08);
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        @media (max-width: 720px) {
            .mini {
                min-width: 100%;
            }
        }
    `},xf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(hf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(xi,{})}),r.jsx("span",{className:"title",children:"The Box Model"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Everything is a box"]}),r.jsx("p",{className:"p",children:"In CSS, every element is a rectangle made of layers: content, padding, border, and margin. Understanding this makes layout bugs much easier to fix."}),r.jsxs("div",{className:"diagram",children:[r.jsxs("div",{className:"dMargin",children:[r.jsx("div",{className:"dLabel",children:"Margin"}),r.jsxs("div",{className:"dBorder",children:[r.jsx("div",{className:"dLabel",children:"Border"}),r.jsxs("div",{className:"dPadding",children:[r.jsx("div",{className:"dLabel",children:"Padding"}),r.jsx("div",{className:"dContent",children:r.jsx("div",{className:"dLabel",children:"Content"})})]})]})]}),r.jsx("div",{className:"diagramNote",children:"Outer to inner: margin → border → padding → content"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Content box"}),r.jsx("p",{className:"p",children:"The content box is the actual space where text, images, and child elements sit. Width and height usually apply to the content box by default."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Padding"}),r.jsx("p",{className:"p",children:"Padding is the inner space between the content and the border. It increases the clickable and readable area of an element."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(ju,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"padding"}),r.jsx("div",{className:"miniSub",children:"adds space inside"})]})]})}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:"button { padding: 10px 12px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Border"}),r.jsx("p",{className:"p",children:"Border wraps around the padding and content. Borders can take space and affect layout because they add to the element size (unless using border-box sizing)."}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".card { border: 1px solid #2d333b; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Margin"}),r.jsx("p",{className:"p",children:"Margin is the outer space around an element, used to create gaps between elements. Margin is always outside the border."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Km,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"margin"}),r.jsx("div",{className:"miniSub",children:"creates space outside"})]})]})}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".section { margin-bottom: 16px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"box-sizing"}),r.jsx("p",{className:"p",children:"box-sizing controls how width and height are calculated. With content-box (default), width applies only to the content. With border-box, width includes padding and border too."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(ef,{})}),"Best practice"]}),r.jsx("div",{className:"calloutText",children:"Most projects use border-box to make sizing easier and predictable."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:"* { box-sizing: border-box; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Margin collapse"}),r.jsx("p",{className:"p",children:"Vertical margins between block elements can collapse into a single margin. That means margins do not always add up the way you expect."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Happens mostly with vertical margins (top and bottom)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Largest margin usually wins"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Does not happen in flex and grid layouts"]})]}),r.jsxs("div",{className:"callout warn",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(mu,{})}),"Debug tip"]}),r.jsx("div",{className:"calloutText",children:'If spacing looks "wrong", check margin collapse. Adding padding or a border to the parent can stop it.'})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"overflow"}),r.jsx("p",{className:"p",children:"overflow controls what happens when content is larger than the box. It can show, clip, scroll, or hide extra content."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: visible (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: hidden (clips)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: auto (scroll if needed)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: scroll (always scroll)"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".panel { overflow: auto; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Outline"}),r.jsx("p",{className:"p",children:"outline is similar to border but it does not take space in layout. It is commonly used for focus indicators."}),r.jsxs("div",{className:"callout ok",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Po,{})}),"Accessibility"]}),r.jsx("div",{className:"calloutText",children:"Keep visible focus styles. outline is a simple and solid way to show keyboard focus."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:`button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`})]})]})]})]})},mf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .chips {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 10px;
            display: inline-flex;
            gap: 10px;
            align-items: center;
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .chipKey {
            font-weight: 900;
            color: var(--color-primary);
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .chipText {
            color: var(--color-text-secondary);
        }

        .grid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }

        .grid.two {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .cardTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .cardSub {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .list {
            margin: 0;
            padding-left: 0;
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .note {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.6;
            border-top: 1px dashed var(--color-border-light);
            padding-top: 10px;
        }

        .miniCode {
            margin: 10px 0 0 0;
            padding: 10px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            color: var(--color-text-secondary);
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            white-space: pre;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        @media (max-width: 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .grid.two {
                grid-template-columns: 1fr;
            }
        }
    `},ff=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(mf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(yu,{})}),r.jsx("span",{className:"title",children:"Units and Values"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(dt,{})}),"Sizing without confusion"]}),r.jsx("p",{className:"p",children:"CSS units decide how big something is. Absolute units are fixed. Relative units adapt to screen, font size, or container. Functions help you calculate responsive values cleanly."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Absolute Units"}),r.jsxs("p",{className:"p",children:["Absolute units are fixed lengths. They do not depend on screen size or parent font size. In web UI work,",r.jsx("span",{className:"mono",children:"px"})," is the most common."]}),r.jsxs("div",{className:"chips",children:[r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"px"}),r.jsx("span",{className:"chipText",children:"pixels (most used)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"pt"}),r.jsx("span",{className:"chipText",children:"points (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"cm"}),r.jsx("span",{className:"chipText",children:"centimeters (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"mm"}),r.jsx("span",{className:"chipText",children:"millimeters (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"in"}),r.jsx("span",{className:"chipText",children:"inches (print)"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"Practical tip"]}),r.jsx("div",{className:"calloutText",children:"For websites and apps, mostly use px, rem, and %. cm, mm, pt, in are mainly for printing."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Relative Units"}),r.jsx("p",{className:"p",children:"Relative units change based on something else like font size or viewport. They help build responsive layouts."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Font based"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"em"})," - relative to current element font size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"rem"})," - relative to root (html) font size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"ch"}),' - width of "0" character (monospace like sizing)']}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"ex"})," - x-height (rare, not consistent)"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Viewport based"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vh"})," - 1% of viewport height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vw"})," - 1% of viewport width"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vmin"})," - 1% of smaller side"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vmax"})," - 1% of larger side"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Container based"}),r.jsx("ul",{className:"list",children:r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"%"})," - relative to parent or layout context"]})}),r.jsx("div",{className:"note",children:"% depends on property: width uses parent width, padding % also uses parent width, etc."})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Common choices"]}),r.jsx("pre",{className:"code",children:`/* Typography: rem is predictable */
html { font-size: 16px; }
h1 { font-size: 2rem; } /* 32px */

/* Layout: % + max-width is common */
.container { width: 90%; max-width: 1100px; }

/* Full screen sections */
.hero { min-height: 100vh; }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Functions"}),r.jsx("p",{className:"p",children:"CSS functions help you calculate values and create responsive sizing without too many media queries."}),r.jsxs("div",{className:"grid two",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"calc()"})}),r.jsx("p",{className:"cardSub",children:"Mix units and do math. Great for layouts."}),r.jsx("pre",{className:"miniCode",children:"width: calc(100% - 32px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"clamp()"})}),r.jsx("p",{className:"cardSub",children:"Set a min, preferred, and max value."}),r.jsx("pre",{className:"miniCode",children:"font-size: clamp(16px, 2vw, 22px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"min()"})}),r.jsx("p",{className:"cardSub",children:"Choose the smaller value from options."}),r.jsx("pre",{className:"miniCode",children:"width: min(90%, 1100px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"max()"})}),r.jsx("p",{className:"cardSub",children:"Choose the larger value from options."}),r.jsx("pre",{className:"miniCode",children:"min-height: max(60vh, 520px);"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"Beginner friendly rule"]}),r.jsx("div",{className:"calloutText",children:"Use rem for font sizes, % for fluid widths, and clamp() when you want responsive sizing with a safe minimum and maximum."})]})]})]})]})},gf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 860px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},vf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(gf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(ri,{})}),r.jsx("span",{className:"title",children:"Colors and Backgrounds"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"The visuals toolkit"]}),r.jsx("p",{className:"p",children:"Colors set the mood. Backgrounds control surfaces. This section covers common color formats, opacity, and background properties including gradients."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Color formats"}),r.jsx("p",{className:"p",children:"CSS supports multiple color notations. Pick one style and stay consistent. Most projects use hex or rgb/rgba."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Named colors: ",r.jsx("span",{className:"mono",children:"red"}),", ",r.jsx("span",{className:"mono",children:"rebeccapurple"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Hex: ",r.jsx("span",{className:"mono",children:"#4ea1ff"}),","," ",r.jsx("span",{className:"mono",children:"#0f1117"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"RGB: ",r.jsx("span",{className:"mono",children:"rgb(78, 161, 255)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"RGBA:"," ",r.jsx("span",{className:"mono",children:"rgba(78, 161, 255, 0.6)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"HSL:"," ",r.jsx("span",{className:"mono",children:"hsl(210, 100%, 65%)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"HSLA:"," ",r.jsx("span",{className:"mono",children:"hsla(210, 100%, 65%, 0.6)"})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Common examples"]}),r.jsx("pre",{className:"code",children:`/* named */
color: red;

/* hex */
color: #4ea1ff;

/* rgb / rgba */
color: rgb(78, 161, 255);
color: rgba(78, 161, 255, 0.6);

/* hsl / hsla */
color: hsl(210, 100%, 65%);
color: hsla(210, 100%, 65%, 0.6);`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"opacity"}),r.jsx("p",{className:"p",children:"opacity affects the whole element including its content (text, icons, children). If you only want the background to be transparent, use rgba/hsla for the background color instead."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"Quick rule"]}),r.jsx("div",{className:"calloutText",children:"opacity fades everything inside. rgba/hsla fades only that color."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"opacity vs rgba"]}),r.jsx("pre",{className:"code",children:`/* fades whole element (including text) */
.card {
  opacity: 0.6;
}

/* only background becomes transparent */
.card {
  background: rgba(0, 0, 0, 0.6);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"background basics"}),r.jsx("p",{className:"p",children:"Background properties control the element surface. Backgrounds can be a solid color, an image, or a gradient."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(ri,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Color"}),r.jsx("div",{className:"miniSub",children:"background-color"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(ni,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Image"}),r.jsx("div",{className:"miniSub",children:"background-image"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Gradient"}),r.jsx("div",{className:"miniSub",children:"linear radial conic"})]})]})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-color"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-image"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-position"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-repeat"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-attachment"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background shorthand"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Typical background image setup"]}),r.jsx("pre",{className:"code",children:`.hero {
  background-image: url("/images/banner.jpg");
  background-size: cover;        /* cover | contain | 200px 100px */
  background-position: center;   /* left top | center | 20% 40% */
  background-repeat: no-repeat;  /* repeat | repeat-x | repeat-y */
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(ni,{})}),"background-attachment"]}),r.jsx("div",{className:"calloutText",children:"background-attachment controls whether the background scrolls with the page. Values: scroll (default), fixed, local. fixed can feel like a parallax effect but is not always mobile friendly."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Background shorthand"]}),r.jsx("pre",{className:"code",children:`/* shorthand (order can vary) */
.card {
  background: #0f1117 url("/images/noise.png") no-repeat center / cover;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Gradients"}),r.jsx("p",{className:"p",children:"Gradients are generated images. You set them using background-image. They are great for subtle depth and modern UI surfaces."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"linear-gradient: straight direction"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"radial-gradient: circle or ellipse"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"conic-gradient: around a center point"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Gradient examples"]}),r.jsx("pre",{className:"code",children:`/* linear gradient */
.box1 {
  background-image: linear-gradient(90deg, #4ea1ff, #3fb950);
}

/* radial gradient */
.box2 {
  background-image: radial-gradient(circle at top left, #4ea1ff, transparent 60%);
}

/* conic gradient */
.box3 {
  background-image: conic-gradient(from 180deg, #4ea1ff, #d29922, #f85149, #4ea1ff);
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Tip"]}),r.jsx("div",{className:"calloutText",children:"You can layer multiple backgrounds by separating them with commas. The first one is on top."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Multiple background layers"]}),r.jsx("pre",{className:"code",children:`.card {
  background-image:
    radial-gradient(circle at 20% 20%, rgba(78,161,255,0.35), transparent 45%),
    linear-gradient(180deg, #161b22, #0f1117);
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use rgba/hsla for transparent background only"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use cover + center for hero images"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Gradients are background-image"]})]})]})]})]})},yf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .code {
            margin-top: 10px;
            padding: 10px 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            white-space: pre;
        }

        .tight {
            margin-top: 0;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},jf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(yf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Bo,{})}),r.jsx("span",{className:"title",children:"Typography"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(vu,{})}),"Text styling essentials"]}),r.jsx("p",{className:"p",children:"Typography in CSS controls how text looks and reads. These properties cover fonts, sizing, spacing, alignment, wrapping, and custom fonts."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-family"}),r.jsx("p",{className:"p",children:"Sets the font for text. Always include a fallback list, ending with a generic family like sans-serif."}),r.jsx("pre",{className:"code",children:'font-family: "Inter", system-ui, Arial, sans-serif;'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Web safe fonts"}),r.jsx("p",{className:"p",children:"Fonts commonly available on most systems. Examples: Arial, Verdana, Georgia, Times New Roman, Courier New. These reduce dependency on downloads."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-size"}),r.jsx("p",{className:"p",children:"Controls text size. Common units are px, rem, and em. For scalable UI, rem is usually easier to manage."}),r.jsx("pre",{className:"code",children:"font-size: 16px; /* or 1rem */"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-weight"}),r.jsx("p",{className:"p",children:"Controls thickness of characters. Typical values are 400 (normal), 600 (semi-bold), 700 (bold). Not every font supports all weights."}),r.jsx("pre",{className:"code",children:"font-weight: 700;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-style"}),r.jsx("p",{className:"p",children:"Controls italic style. Usually normal or italic."}),r.jsx("pre",{className:"code",children:"font-style: italic;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"line-height"}),r.jsx("p",{className:"p",children:"Controls vertical spacing between lines. A unitless value is recommended because it scales with font-size."}),r.jsx("pre",{className:"code",children:"line-height: 1.6;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"letter-spacing"}),r.jsx("p",{className:"p",children:"Adds spacing between letters. Useful for headings, but too much can reduce readability."}),r.jsx("pre",{className:"code",children:"letter-spacing: 0.4px;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"word-spacing"}),r.jsx("p",{className:"p",children:"Adds spacing between words. Use lightly, mainly for special UI styles."}),r.jsx("pre",{className:"code",children:"word-spacing: 2px;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-align"}),r.jsx("p",{className:"p",children:"Aligns inline content inside a block. Common values: left, center, right, justify."}),r.jsx("pre",{className:"code",children:"text-align: center;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-decoration"}),r.jsx("p",{className:"p",children:"Adds decoration like underline. Often used on links. Use underline-offset for nicer look."}),r.jsx("pre",{className:"code",children:`text-decoration: underline;
text-underline-offset: 3px;`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-transform"}),r.jsx("p",{className:"p",children:"Changes letter casing without editing the actual text. Values: uppercase, lowercase, capitalize."}),r.jsx("pre",{className:"code",children:"text-transform: uppercase;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-shadow"}),r.jsx("p",{className:"p",children:"Adds shadow to text. Use subtle values. Too much looks messy and hurts readability."}),r.jsx("pre",{className:"code",children:"text-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"white-space"}),r.jsx("p",{className:"p",children:"Controls how spaces and line breaks behave. Common: normal (default), nowrap (single line), pre (respects spaces and new lines)."}),r.jsx("pre",{className:"code",children:"white-space: nowrap;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-overflow"}),r.jsx("p",{className:"p",children:"Controls what happens when text overflows a single line. Usually used with overflow hidden and white-space nowrap."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(vs,{})}),"Ellipsis combo"]}),r.jsx("pre",{className:"code tight",children:`overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"overflow-wrap"}),r.jsx("p",{className:"p",children:"Prevents long words or URLs from breaking layout. Use anywhere for safer text wrapping."}),r.jsx("pre",{className:"code",children:"overflow-wrap: anywhere;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@font-face"}),r.jsx("p",{className:"p",children:"Lets you load and use custom fonts by providing font files. Best practice is to use woff2 and define font-display."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick best practices"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer rem and unitless line-height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Always add fallback fonts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use overflow-wrap for long content"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use font-display: swap for custom fonts"]})]})]})]})]})},Nf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .rules {
            margin-top: 12px;
            display: grid;
            gap: 10px;
        }

        .rule {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .compare {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .compareCard {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .compareTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .compareRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;
            border-top: 1px dashed var(--color-border-light);
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .compareRow:first-of-type {
            border-top: 0;
            padding-top: 0;
        }

        .k {
            color: var(--color-text-muted);
        }

        .v {
            font-weight: 900;
        }

        .bad {
            color: var(--color-error);
        }

        .ok {
            color: var(--color-success);
        }

        .footNote {
            margin-top: 12px;
            padding: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 16px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.7;
        }

        @media (max-width: 880px) {
            .compare {
                grid-template-columns: 1fr;
            }
        }
    `},bf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Nf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(ti,{})}),r.jsx("span",{className:"title",children:"Display and Visibility"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Po,{})}),"Layout presence vs visual presence"]}),r.jsx("p",{className:"p",children:'These properties decide whether an element participates in layout, and whether it is visible to the user. Understanding this saves a lot of "why is spacing still there" debugging time.'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display values"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("span",{className:"mono",children:"display"})," property controls how an element behaves in the layout. It can act like a block, inline text, a mixed type, or be removed from layout completely."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(xi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Layout"}),r.jsx("div",{className:"miniSub",children:"Space rules"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Po,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Visibility"}),r.jsx("div",{className:"miniSub",children:"Seen or hidden"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"block"}),r.jsx("p",{className:"p",children:"A block element starts on a new line and takes the full available width by default. You can set width and height."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"New line (stacked vertically)"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Can set width and height"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"inline"}),r.jsx("p",{className:"p",children:"Inline elements stay within a line of text. They do not start a new line. Width and height generally do not apply (they size to content)."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Same line (flows like text)"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Width and height usually ignored"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"inline-block"}),r.jsx("p",{className:"p",children:"Inline-block behaves like inline (stays in the same line), but you can set width and height like a block. Useful for buttons, badges, small UI parts."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Stays inline"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Supports width and height"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"none"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"display: none"})," removes the element from the layout completely. It does not take space and is not visible."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(si,{})}),"Remember"]}),r.jsx("div",{className:"calloutText",children:"If you need to hide something and remove its space, use display: none."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"contents"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"display: contents"})," makes the element's box disappear, but its children stay and behave as if they were direct children of the parent. Useful in some layouts, but be careful with accessibility and styling expectations."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(si,{})}),"Use carefully"]}),r.jsx("div",{className:"calloutText",children:"The wrapper stops existing as a box. So background, padding, borders on that wrapper will not show."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"visibility"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"visibility"})," controls if an element is visible, but the element still keeps its space in the layout."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"visibility: visible"}),"shows it"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"visibility: hidden"}),"hides it but keeps space"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"opacity vs visibility"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"opacity: 0"})," makes the element fully transparent, but it still takes space. Unlike visibility hidden, opacity elements can still receive clicks unless you also disable pointer events."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Click-safe hiding"]}),r.jsx("pre",{className:"code",children:`.hidden {
  opacity: 0;
  pointer-events: none;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display vs visibility"}),r.jsxs("p",{className:"p",children:["Use ",r.jsx("span",{className:"mono",children:"display: none"})," when you want the element gone from layout. Use"," ",r.jsx("span",{className:"mono",children:"visibility: hidden"})," when you want to hide it but keep its space. Use"," ",r.jsx("span",{className:"mono",children:"opacity"})," for fade effects, but remember it can still be clickable."]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"display: none"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v bad",children:"No"})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"visibility: hidden"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v ok",children:"Yes"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v bad",children:"No"})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"opacity: 0"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v ok",children:"Yes"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v ok",children:"Yes"})]})]})]}),r.jsxs("div",{className:"footNote",children:["Quick hack: if you use opacity for animation, pair it with ",r.jsx("span",{className:"mono",children:"pointer-events: none"})," ","when hidden."]})]})]})]})},wf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .hintIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 1px;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .miniGrid.two {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .flow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .flowItem {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 14px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }

            .miniGrid.two {
                grid-template-columns: 1fr;
            }
        }
    `},kf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(wf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(dt,{})}),r.jsx("span",{className:"title",children:"Positioning"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Wp,{})}),"Control where elements sit"]}),r.jsx("p",{className:"p",children:'Positioning changes how an element is placed in the page. The key idea is "normal flow" vs "taken out of flow", plus how offsets and layering work.'}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx($l,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Offsets"}),r.jsx("div",{className:"miniSub",children:"top right bottom left"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Layering"}),r.jsx("div",{className:"miniSub",children:"z-index and stacking"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"static"}),r.jsx("p",{className:"p",children:"Default position. The element follows normal document flow. Offsets like top or left do not move it."}),r.jsxs("div",{className:"hint",children:[r.jsx("span",{className:"hintIcon",children:r.jsx(Op,{})}),"If you never set position, it is static."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"relative"}),r.jsx("p",{className:"p",children:"The element stays in normal flow, but you can nudge it using top, left, right, bottom. Space is still reserved in the layout."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bo,{})}),"Common use"]}),r.jsx("pre",{className:"code",children:`.badge {
  position: relative;
  top: 6px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"absolute"}),r.jsx("p",{className:"p",children:"The element is taken out of normal flow. It is placed using offsets relative to its nearest positioned ancestor (an ancestor with position not static). If none exists, it uses the initial containing block (often the page)."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Beginner rule"]}),r.jsx("div",{className:"calloutText",children:"For predictable absolute positioning, set the parent as position: relative, then child position: absolute."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bo,{})}),"Parent + child pattern"]}),r.jsx("pre",{className:"code",children:`.card {
  position: relative;
}

.card .closeBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"fixed"}),r.jsx("p",{className:"p",children:"Taken out of flow and positioned relative to the viewport. It stays in the same place even when the page scrolls."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Sticky headers (sometimes)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Floating action buttons"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Back to top button"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bo,{})}),"Fixed footer example"]}),r.jsx("pre",{className:"code",children:`.footerBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"sticky"}),r.jsx("p",{className:"p",children:"Acts like relative until a scroll threshold is reached, then behaves like fixed within its scroll container. It needs at least one offset like top to stick."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Wp,{})}),"Common mistake"]}),r.jsx("div",{className:"calloutText",children:"sticky breaks if any parent has overflow: hidden or overflow: auto in unexpected ways. Also, set top for it to work."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bo,{})}),"Sticky sidebar"]}),r.jsx("pre",{className:"code",children:`.side {
  position: sticky;
  top: 20px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"top, left, right, bottom"}),r.jsx("p",{className:"p",children:"These are offset properties. They work when position is relative, absolute, fixed, or sticky. They do nothing on static elements."}),r.jsxs("div",{className:"miniGrid two",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx($l,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"absolute"}),r.jsx("div",{className:"miniSub",children:"placed inside parent box"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx($l,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"fixed"}),r.jsx("div",{className:"miniSub",children:"placed inside viewport"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"z-index"}),r.jsx("p",{className:"p",children:"z-index controls which element appears on top when elements overlap. It only works on positioned elements (not static) and within the same stacking context."}),r.jsxs("div",{className:"hint",children:[r.jsx("span",{className:"hintIcon",children:r.jsx(Op,{})}),"Bigger z-index does not always win if stacking contexts are different."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ce,{})}),"Simple overlap"]}),r.jsx("pre",{className:"code",children:`.modal {
  position: fixed;
  z-index: 50;
}

.toast {
  position: fixed;
  z-index: 60;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"stacking context"}),r.jsx("p",{className:"p",children:"A stacking context is like a mini layering world. An element with its own stacking context controls how its children stack, and those children cannot escape above elements outside that context using z-index alone."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Common creators"]}),r.jsx("div",{className:"calloutText",children:"position with z-index, transform, opacity less than 1, filter, and a few other properties can create a new stacking context."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ce,{})}),"Typical case"]}),r.jsx("pre",{className:"code",children:`.parent {
  position: relative;
  z-index: 1; /* creates stacking context */
}

.child {
  position: absolute;
  z-index: 9999; /* still stuck inside parent context */
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick rules to remember"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"absolute positions inside nearest positioned parent"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"fixed positions inside viewport"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"sticky needs top (or left etc) to work"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"z-index works only within stacking context"]})]})]})]})]})},Sf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 10000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .tipRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .tip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .tipKey {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
        }

        .tipVal {
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .muted {
            margin-top: 10px;
            color: var(--color-text-muted);
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .chips {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 12px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .footerTitle {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        @media (max-width: 720px) {
            .tipRow {
                flex-direction: column;
            }
        }
    `},Cf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Sf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(gu,{})}),r.jsx("span",{className:"title",children:"Flexbox"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(dt,{})}),"One dimensional layout"]}),r.jsx("p",{className:"p",children:"Flexbox is used to align and distribute items in a row or a column. You set flex on a parent (container), then control how children (items) behave."}),r.jsxs("div",{className:"tipRow",children:[r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipKey",children:"Main axis"}),r.jsx("span",{className:"tipVal",children:"direction of flex items"})]}),r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipKey",children:"Cross axis"}),r.jsx("span",{className:"tipVal",children:"perpendicular direction"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display: flex"}),r.jsx("p",{className:"p",children:"Turns an element into a flex container. Its direct children become flex items and can be aligned using Flexbox properties."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Flex container"]}),r.jsx("pre",{className:"code",children:".row { display: flex; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-direction"}),r.jsx("p",{className:"p",children:"Controls the direction of the main axis. Items can flow horizontally or vertically."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row"})," (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row-reverse"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column-reverse"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-wrap"}),r.jsx("p",{className:"p",children:"Controls whether items stay on one line or wrap onto multiple lines when space is not enough."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"nowrap"})," (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"wrap"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"wrap-reverse"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"justify-content"}),r.jsx("p",{className:"p",children:"Aligns items along the main axis. Use it to control left-right spacing in a row or top-bottom spacing in a column."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"flex-start"}),r.jsx("span",{className:"chip",children:"center"}),r.jsx("span",{className:"chip",children:"flex-end"}),r.jsx("span",{className:"chip",children:"space-between"}),r.jsx("span",{className:"chip",children:"space-around"}),r.jsx("span",{className:"chip",children:"space-evenly"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"align-items"}),r.jsx("p",{className:"p",children:"Aligns items along the cross axis (per item). It affects how items line up inside the container."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"stretch"}),r.jsx("span",{className:"chip",children:"flex-start"}),r.jsx("span",{className:"chip",children:"center"}),r.jsx("span",{className:"chip",children:"flex-end"}),r.jsx("span",{className:"chip",children:"baseline"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"align-content"}),r.jsx("p",{className:"p",children:"Aligns lines of items when wrapping happens. Works only when there are multiple lines (wrap enabled)."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Fm,{})}),"Important"]}),r.jsx("div",{className:"calloutText",children:"If there is only one line, align-content does nothing. Use align-items instead."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"gap"}),r.jsx("p",{className:"p",children:"Adds spacing between flex items without using margins. Works nicely with wrap too."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Spacing"]}),r.jsx("pre",{className:"code",children:".row { gap: 12px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-grow"}),r.jsx("p",{className:"p",children:"Controls how much an item can grow when extra space is available. Higher number grows more."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"0"})," means do not grow (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," means grow to fill space"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-shrink"}),r.jsx("p",{className:"p",children:"Controls how much an item shrinks when there is not enough space. Higher number shrinks more."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," is default shrink"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"0"})," prevents shrinking"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-basis"}),r.jsx("p",{className:"p",children:"Sets the starting size of the item before grow or shrink happens. Think of it as the initial width (in row) or height (in column)."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Initial size"]}),r.jsx("pre",{className:"code",children:".item { flex-basis: 240px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"order"}),r.jsx("p",{className:"p",children:"Changes the visual order of items without changing HTML order. Default order is 0. Smaller values come first."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(ju,{})}),"Tip"]}),r.jsx("div",{className:"calloutText",children:"Use order carefully. It can confuse keyboard tab order and screen readers if overused."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"shorthand flex"}),r.jsx("p",{className:"p",children:"flex is a shorthand for flex-grow, flex-shrink, and flex-basis."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Shorthand examples"]}),r.jsx("pre",{className:"code",children:`/* grow shrink basis */
.itemA { flex: 1 1 0; }

/* common pattern: equal columns */
.itemB { flex: 1; } /* means 1 1 0% in most browsers */

/* fixed width item */
.itemC { flex: 0 0 240px; }`})]}),r.jsxs("div",{className:"footerNote",children:[r.jsxs("div",{className:"footerTitle",children:["Quick mental model",r.jsxs("span",{className:"badge",children:[r.jsx(oi,{}),"grow"]}),r.jsxs("span",{className:"badge",children:[r.jsx(oi,{}),"shrink"]}),r.jsx("span",{className:"badge",children:"basis"})]}),r.jsx("p",{className:"p muted",children:"Start at basis, then grow if extra space, shrink if not enough space."})]})]})]})]})},Tf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .flow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .flowItem {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 14px;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},zf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Tf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(mn,{})}),r.jsx("span",{className:"title",children:"CSS Grid"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ti,{})}),"Two-dimensional layout system"]}),r.jsx("p",{className:"p",children:"CSS Grid is made for page layout. You define rows and columns on a parent container, then place children into the grid. It handles both directions: horizontal and vertical."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display: grid"}),r.jsx("p",{className:"p",children:"Turns an element into a grid container. Its direct children become grid items and can be placed into rows and columns."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Grid container"]}),r.jsx("pre",{className:"code",children:`.wrapper {
  display: grid;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-template-columns"}),r.jsx("p",{className:"p",children:"Defines the column tracks. Each value sets a column width. You can mix fixed units and flexible units."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(gu,{})}),"Columns examples"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: 200px 1fr 1fr;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-template-rows"}),r.jsx("p",{className:"p",children:"Defines the row tracks. Same idea as columns, but for height."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Rows example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-rows: auto 120px 1fr;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"repeat()"}),r.jsx("p",{className:"p",children:"Shortcut to repeat tracks. Useful when you want many equal columns or rows."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(ei,{})}),"Repeat example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: repeat(4, 1fr);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"minmax()"}),r.jsx("p",{className:"p",children:"Sets a minimum and maximum size for a track. Great for responsive grids."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Minmax example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: repeat(3, minmax(180px, 1fr));
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"fr unit"}),r.jsx("p",{className:"p",children:'fr means "fraction of free space". After fixed sizes are handled, leftover space is divided between fr tracks.'}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Qm,{})}),"Simple mental model"]}),r.jsxs("div",{className:"calloutText",children:["If you have ",r.jsx("span",{className:"mono",children:"1fr 2fr"}),", the second column gets twice the space of the first."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-gap (gap)"}),r.jsxs("p",{className:"p",children:["Adds spacing between grid rows and columns. Modern name is ",r.jsx("span",{className:"mono",children:"gap"}),". It works for grid and flex."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Gap example"]}),r.jsx("pre",{className:"code",children:`.grid {
  gap: 12px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-auto-flow"}),r.jsx("p",{className:"p",children:"Controls how items are automatically placed when you do not specify positions. Default is row. You can also use column or dense."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row"})," fills row by row"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column"})," fills column by column"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"dense"})," tries to fill gaps"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-column"}),r.jsx("p",{className:"p",children:"Places an item across columns. You can use start and end lines."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Column placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-column: 1 / 3;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-row"}),r.jsx("p",{className:"p",children:"Places an item across rows. Same idea as grid-column but for vertical placement."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Row placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-row: 2 / 4;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-area"}),r.jsx("p",{className:"p",children:"Shorthand to place an item with row start, column start, row end, column end. Also used with named areas."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Area placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-area: 1 / 2 / 3 / 4;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Named grid areas"}),r.jsxs("p",{className:"p",children:["You can name regions of your layout using",r.jsx("span",{className:"mono",children:" grid-template-areas"}),". Then assign items to those names with",r.jsx("span",{className:"mono",children:" grid-area"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Named areas example"]}),r.jsx("pre",{className:"code",children:`.layout {
  display: grid;
  gap: 12px;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { grid-area: main; }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Implicit vs explicit grid"}),r.jsxs("p",{className:"p",children:["The explicit grid is what you define with",r.jsx("span",{className:"mono",children:" grid-template-columns"})," and",r.jsx("span",{className:"mono",children:" grid-template-rows"}),". The implicit grid is created automatically when items overflow the defined tracks."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(ti,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:"If you did not define enough rows, Grid will create extra rows in the implicit grid to place items."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Define tracks with template rows and columns"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use repeat and minmax for responsive grids"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use named areas for clean page layouts"]})]})]})]})]})},If={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pillRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .muted {
            margin-top: 12px;
            color: var(--color-text-muted);
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .miniGrid.two {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 820px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }

            .miniGrid.two {
                grid-template-columns: 1fr;
            }
        }
    `},Ef=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(If.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Gl,{})}),r.jsx("span",{className:"title",children:"Responsive Design"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pillRow",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Vl,{})}),"Fits every screen"]}),r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(gs,{})}),"Layout + type scaling"]})]}),r.jsx("p",{className:"p",children:"Responsive design means the same UI adapts smoothly to different screen sizes and containers. You do this with media queries, flexible layouts, and fluid sizing."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Media queries"}),r.jsx("p",{className:"p",children:"Media queries apply CSS only when a condition is true, like screen width. They are the main tool for switching layouts at different sizes."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Basic example"]}),r.jsx("pre",{className:"code",children:`/* Apply styles when viewport is 768px and up */
@media (min-width: 768px) {
  .layout {
    display: grid;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Breakpoints"}),r.jsx("p",{className:"p",children:"Breakpoints are chosen widths where your layout needs a noticeable change. Pick breakpoints based on your design, not on random device names."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Gl,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Small"}),r.jsx("div",{className:"miniSub",children:"0 to 600px"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Vl,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Medium"}),r.jsx("div",{className:"miniSub",children:"600 to 1024px"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ym,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Large"}),r.jsx("div",{className:"miniSub",children:"1024px and up"})]})]})]}),r.jsx("p",{className:"p muted",children:"These ranges are common, but you can adjust them based on your UI needs."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Mobile first approach"}),r.jsx("p",{className:"p",children:"Mobile first means you write the base CSS for small screens, then add enhancements using min-width media queries for larger screens. This keeps CSS cleaner and avoids overrides."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Gl,{})}),"Pattern"]}),r.jsx("div",{className:"calloutText",children:"Base styles for mobile, then progressively enhance for bigger screens using min-width."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Desktop first approach"}),r.jsx("p",{className:"p",children:"Desktop first means you write base CSS for large screens and then adjust for smaller screens using max-width queries. It works, but it often leads to more overrides compared to mobile first."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Vl,{})}),"Pattern"]}),r.jsx("div",{className:"calloutText",children:"Base styles for desktop, then reduce or simplify for smaller screens using max-width."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Container queries"}),r.jsx("p",{className:"p",children:"Container queries let a component respond to the size of its parent container, not the full viewport. This is useful for reusable cards and widgets inside different layouts."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Basic idea"]}),r.jsx("pre",{className:"code",children:`/* 1) Create a container */
.cardWrap {
  container-type: inline-size;
}

/* 2) Style based on container width */
@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Fluid typography"}),r.jsx("p",{className:"p",children:"Fluid typography means font sizes scale smoothly between a minimum and maximum, instead of jumping only at breakpoints. This improves readability across devices."}),r.jsxs("div",{className:"miniGrid two",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Bo,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Min size"}),r.jsx("div",{className:"miniSub",children:"Readable on mobile"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Bo,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Max size"}),r.jsx("div",{className:"miniSub",children:"Looks strong on desktop"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"clamp for responsiveness"}),r.jsx("p",{className:"p",children:"clamp lets you set a minimum, preferred, and maximum value. It is perfect for responsive font sizes, gaps, padding, and widths."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"clamp example"]}),r.jsx("pre",{className:"code",children:`/* font-size will scale with viewport
   but never go below 18px or above 42px */
.heading {
  font-size: clamp(18px, 4vw, 42px);
}

/* spacing example */
.section {
  padding: clamp(14px, 2.5vw, 28px);
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(mn,{})}),"When to use clamp"]}),r.jsx("div",{className:"calloutText",children:"Use it when you want smooth scaling without adding extra breakpoints."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer mobile first with min-width queries"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Choose breakpoints based on layout needs"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use clamp for smoother typography and spacing"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use container queries for reusable components"]})]})]})]})]})},Lf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .muted {
            margin-top: 10px;
            color: var(--color-text-muted);
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .mini {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            max-width: 420px;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 6px;
            color: var(--color-text-primary);
        }
    `},_f=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Lf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(vs,{})}),r.jsx("span",{className:"title",children:"Transitions"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(hi,{})}),"Smooth state changes"]}),r.jsx("p",{className:"p",children:"CSS transitions animate the change from one value to another. Most commonly used for hover, focus, active, and class toggles."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-property"}),r.jsxs("p",{className:"p",children:["Decides which CSS property should animate. You can animate one property, multiple properties, or use",r.jsx("span",{className:"mono",children:" all"})," (not always recommended)."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate one:",r.jsx("span",{className:"mono",children:" opacity"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate many:",r.jsx("span",{className:"mono",children:" opacity, transform"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate everything:",r.jsx("span",{className:"mono",children:" all"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-duration"}),r.jsxs("p",{className:"p",children:["How long the transition takes. Common values are",r.jsx("span",{className:"mono",children:" 150ms"}),",",r.jsx("span",{className:"mono",children:" 200ms"}),",",r.jsx("span",{className:"mono",children:" 300ms"}),"."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(fu,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Duration"}),r.jsx("div",{className:"miniSub",children:"Example: 200ms"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-timing-function"}),r.jsx("p",{className:"p",children:"Controls the speed curve of the animation. It decides whether it starts slow, ends slow, or stays linear."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"linear"})," - constant speed"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease"})," - default, smooth"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-in"})," - starts slow"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-out"})," - ends slow"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-in-out"})," - slow start and end"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-delay"}),r.jsx("p",{className:"p",children:"Wait time before the transition starts. Useful when you want a small pause, or to stagger interactions."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Um,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Delay"}),r.jsx("div",{className:"miniSub",children:"Example: 80ms"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"cubic-bezier"}),r.jsx("p",{className:"p",children:"A custom timing curve. You can fine-tune how the transition accelerates and decelerates. It uses 4 numbers that define a curve."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(oi,{})}),"Quick idea"]}),r.jsx("div",{className:"calloutText",children:"First two numbers control the curve near the start. Last two numbers control the curve near the end."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Custom curve example"]}),r.jsx("pre",{className:"code",children:"transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Easing functions"}),r.jsx("p",{className:"p",children:"Easing means the motion feels natural instead of robotic. Most UI transitions look better when they accelerate a bit and slow down at the end."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Recommended UI transition"]}),r.jsx("pre",{className:"code",children:"transition: transform 200ms ease, opacity 200ms ease;"})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick tip"}),r.jsxs("p",{className:"p muted",children:["Prefer animating",r.jsx("span",{className:"mono",children:" transform"})," and",r.jsx("span",{className:"mono",children:" opacity"}),". They are smoother and usually cheaper for the browser than layout properties like width or top."]})]})]})]})]})},Pf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .miniRow {
            margin-top: 12px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            max-width: 420px;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},Bf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Pf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx($m,{})}),r.jsx("span",{className:"title",children:"Animations"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(vs,{})}),"Motion with keyframes"]}),r.jsxs("p",{className:"p",children:["CSS animations use"," ",r.jsx("span",{className:"mono",children:"@keyframes"})," to define stages, and animation properties to control timing, direction, looping, and play state."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@keyframes"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"@keyframes"})," defines the animation steps. You can use"," ",r.jsx("span",{className:"mono",children:"from/to"})," or percentages."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Keyframes example"]}),r.jsx("pre",{className:"code",children:`@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-name"}),r.jsx("p",{className:"p",children:"Connects an element to a keyframes definition by name. If the name is missing, nothing animates."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Name"}),r.jsx("div",{className:"miniSub",children:"fadeUp"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-duration"}),r.jsxs("p",{className:"p",children:["How long one animation cycle takes. Example:"," ",r.jsx("span",{className:"mono",children:"300ms"}),","," ",r.jsx("span",{className:"mono",children:"1.2s"}),"."]}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(fu,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Duration"}),r.jsx("div",{className:"miniSub",children:"600ms"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-delay"}),r.jsxs("p",{className:"p",children:["Wait time before the animation starts. It can be"," ",r.jsx("span",{className:"mono",children:"0s"})," or more."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-iteration-count"}),r.jsxs("p",{className:"p",children:["How many times the animation repeats. Use"," ",r.jsx("span",{className:"mono",children:"1"}),","," ",r.jsx("span",{className:"mono",children:"2"}),", or"," ",r.jsx("span",{className:"mono",children:"infinite"}),"."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," plays once"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"infinite"})," loops forever"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-direction"}),r.jsx("p",{className:"p",children:"Controls the direction on each cycle. Common values: normal, reverse, alternate, alternate-reverse."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"normal"})," - from start to end"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"reverse"})," - from end to start"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"alternate"})," - forward then backward"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-fill-mode"}),r.jsx("p",{className:"p",children:"Decides what styles apply before start and after end. This is super useful for entrance animations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"none"})," - default"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"forwards"})," - keep the last keyframe styles"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"backwards"})," - apply first keyframe during delay"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"both"})," - forwards + backwards"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-play-state"}),r.jsx("p",{className:"p",children:"Controls whether an animation is running or paused. Good for hover pause effects and user controls."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(qm,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Play state"}),r.jsx("div",{className:"miniSub",children:"running or paused"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation shorthand"}),r.jsx("p",{className:"p",children:"A short way to set multiple animation properties in one line. The order is flexible, but duration and name must be clear."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Shorthand example"]}),r.jsx("pre",{className:"code",children:`.card {
  animation: fadeUp 600ms ease 120ms 1 normal both;
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Jm,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:"For most UI animations, you will use: name, duration, easing, delay, and fill-mode."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Define keyframes first"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Set name + duration"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use fill-mode for entrance animations"]})]})]})]})]})},Mf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 10000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }
    `},Rf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Mf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Fp,{})}),r.jsx("span",{className:"title",children:"Advanced Layout and Visual Effects"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Practical modern CSS effects"]}),r.jsx("p",{className:"p",children:"These properties help you control how media fits inside boxes, apply visual effects, shape elements, and create smooth scrolling experiences."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"object-fit"}),r.jsxs("p",{className:"p",children:["Controls how an image or video fits inside its box when you set fixed width and height. Most common values are",r.jsx("span",{className:"mono",children:" cover "})," (fills, may crop) and ",r.jsx("span",{className:"mono",children:" contain "})," (fits fully, may leave empty space)."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(ni,{})}),"Common usage"]}),r.jsx("pre",{className:"code",children:`.thumb img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"object-position"}),r.jsxs("p",{className:"p",children:["Works with ",r.jsx("span",{className:"mono",children:"object-fit"}),". When the media is cropped (like cover), this decides which part stays visible. Example: keep the top of a portrait visible."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(dt,{})}),"Focus area"]}),r.jsx("pre",{className:"code",children:`.thumb img {
  object-fit: cover;
  object-position: top;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"filter"}),r.jsx("p",{className:"p",children:"Adds visual effects to an element like blur, brightness, contrast, grayscale, and drop shadow. Useful for image tweaks and hover effects."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(gs,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`.img {
  filter: grayscale(100%);
}
.img:hover {
  filter: grayscale(0%);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"backdrop-filter"}),r.jsx("p",{className:"p",children:"Applies effects to what is behind an element. Common for glassmorphism. It works best with a semi-transparent background. Note: performance heavy on low-end devices, so use carefully."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ce,{})}),"Glass style"]}),r.jsx("pre",{className:"code",children:`.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"mix-blend-mode"}),r.jsx("p",{className:"p",children:"Controls how an element blends with the background, like Photoshop layer blending. Useful for creative overlays, but can reduce readability if overused."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ce,{})}),"Overlay effect"]}),r.jsx("pre",{className:"code",children:`.overlay {
  mix-blend-mode: screen;
  opacity: 0.6;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"clip-path"}),r.jsxs("p",{className:"p",children:["Crops an element into a shape. Common shapes are",r.jsx("span",{className:"mono",children:" circle "}),",",r.jsx("span",{className:"mono",children:" ellipse "}),", and",r.jsx("span",{className:"mono",children:" polygon "}),". Great for badges and angled sections."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Wm,{})}),"Polygon cut"]}),r.jsx("pre",{className:"code",children:`.tag {
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"mask"}),r.jsx("p",{className:"p",children:"Masks hide parts of an element using an image or gradient. Similar to clip-path but more flexible for soft edges and fades. Support can vary, so test in your target browsers."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Fp,{})}),"Gradient mask"]}),r.jsx("pre",{className:"code",children:`.fade {
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent);
  mask-image: linear-gradient(to bottom, #000 60%, transparent);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"aspect-ratio"}),r.jsx("p",{className:"p",children:"Forces a box to keep a width:height ratio. Great for cards, video embeds, and image placeholders. Helps avoid layout shift while media loads."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(mn,{})}),"Card ratio"]}),r.jsx("pre",{className:"code",children:`.videoBox {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--color-surface-2);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"scroll-behavior"}),r.jsxs("p",{className:"p",children:["Controls smooth scrolling for anchor links and programmatic scrolls. Usually set on",r.jsx("span",{className:"mono",children:" html "}),". Respect reduced-motion settings for accessibility."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(dt,{})}),"Smooth scroll"]}),r.jsx("pre",{className:"code",children:`html {
  scroll-behavior: smooth;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"scroll-snap"}),r.jsx("p",{className:"p",children:'Makes scrolling "snap" to items, like carousels or full page sections. Use it on the scroll container and on child items.'}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(mn,{})}),"Snap list"]}),r.jsx("pre",{className:"code",children:`.snapRow {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.snapItem {
  scroll-snap-align: start;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick tip"}),r.jsx("p",{className:"p",children:"Use visual effects carefully. Filters, blend modes, and backdrop filters can be expensive on low-end devices. Prefer subtle usage and test performance."})]})]})]})},Df={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 7000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .muted {
            margin-top: 12px;
            color: var(--color-text-muted);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Ff=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Df.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(gs,{})}),r.jsx("span",{className:"title",children:"CSS Variables"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(vs,{})}),"Reusable tokens for styling"]}),r.jsx("p",{className:"p",children:"CSS Variables are also called custom properties. They let you store values once and reuse them everywhere. They are perfect for themes, spacing systems, and consistent UI styling."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Custom properties"}),r.jsxs("p",{className:"p",children:["Custom properties are variables you define in CSS using names that start with ",r.jsx("span",{className:"mono",children:"--"}),". Example: ",r.jsx("span",{className:"mono",children:"--primary"})," or"," ",r.jsx("span",{className:"mono",children:"--space-12"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Defining variables"]}),r.jsx("pre",{className:"code",children:`:root {
  --primary: #4ea1ff;
  --radius: 14px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"var()"}),r.jsxs("p",{className:"p",children:["You use the ",r.jsx("span",{className:"mono",children:"var()"})," function to read a CSS variable and apply it as a value in other rules."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Using variables"]}),r.jsx("pre",{className:"code",children:`.btn {
  background: var(--primary);
  border-radius: var(--radius);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Scope"}),r.jsxs("p",{className:"p",children:["Variables follow normal CSS scoping rules. If you define a variable on ",r.jsx("span",{className:"mono",children:":root"}),", it is available everywhere. If you define it on a specific container, it applies only inside that container and its children."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Global"}),r.jsx("div",{className:"miniSub",children:":root"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Local"}),r.jsx("div",{className:"miniSub",children:".card"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Global vs local scope"]}),r.jsx("pre",{className:"code",children:`:root {
  --text: #f5f7fa;
}

.card {
  --text: #111827;
  color: var(--text);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Fallback values"}),r.jsxs("p",{className:"p",children:["If a variable is missing, you can provide a fallback value inside ",r.jsx("span",{className:"mono",children:"var()"}),". The browser will use the fallback when the variable is not defined."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(X,{})}),"Why fallback is useful"]}),r.jsx("div",{className:"calloutText",children:"It prevents broken styles and makes components safer to reuse in different pages."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"var() with fallback"]}),r.jsx("pre",{className:"code",children:`.badge {
  background: var(--badge-bg, #2d333b);
  color: var(--badge-text, #f5f7fa);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Dynamic theming"}),r.jsxs("p",{className:"p",children:["Dynamic theming means switching theme values without rewriting component CSS. You simply change variables on a parent like ",r.jsx("span",{className:"mono",children:"html"})," or"," ",r.jsx("span",{className:"mono",children:"body"}),"."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(mi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Dark"}),r.jsx("div",{className:"miniSub",children:"default"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Light"}),r.jsx("div",{className:"miniSub",children:"data-theme"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Theme switch example"]}),r.jsx("pre",{className:"code",children:`:root {
  --bg: #0f1117;
  --text: #f5f7fa;
}

html[data-theme="light"] {
  --bg: #ffffff;
  --text: #111827;
}

body {
  background: var(--bg);
  color: var(--text);
}`})]}),r.jsx("p",{className:"p muted",children:"Tip: This is exactly how your theme.css works. Components stay the same, only tokens change."})]})]})]})},Of={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .miniRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            min-width: 260px;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},Af=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Of.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ce,{})}),r.jsx("span",{className:"title",children:"CSS Architecture"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"How to organize CSS in real projects"]}),r.jsx("p",{className:"p",children:"CSS architecture is about keeping styles readable, scalable, and easy to maintain as the project grows. These approaches solve the same problem in different ways."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"BEM methodology"}),r.jsx("p",{className:"p",children:"BEM stands for Block, Element, Modifier. It is a naming style that keeps class names predictable and avoids clashes. You write classes like a small system."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Up,{})}),"Example naming"]}),r.jsx("pre",{className:"code",children:`.card { }
.card__title { }
.card--featured { }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Utility classes"}),r.jsx("p",{className:"p",children:"Utility classes are small single-purpose classes like padding, margin, text colors, and flex helpers. You build UI by combining utilities instead of writing new CSS for every component."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(mn,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Example"}),r.jsx("div",{className:"miniSub",children:".mt-10 .p-12 .text-center"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Atomic CSS"}),r.jsx("p",{className:"p",children:"Atomic CSS is an extreme form of utilities where every class maps to one very specific style. It reduces duplication because many components reuse the same tiny classes."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Small reusable classes"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Less custom CSS over time"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"More classes in HTML"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Component based styling"}),r.jsx("p",{className:"p",children:"Styles live with components. Each component owns its own CSS so changes stay localized. This fits modern UI development where UI is built from reusable parts."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(xi,{})}),"Simple idea"]}),r.jsx("div",{className:"calloutText",children:"One component = one styling boundary."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"CSS Modules"}),r.jsx("p",{className:"p",children:"CSS Modules scope class names locally by default. This prevents global class conflicts. You write normal CSS, and the build tool generates unique class names."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Xm,{})}),"Idea in one line"]}),r.jsx("pre",{className:"code",children:`// styles.module.css
.button { }

/* used as */
styles.button`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Styled Components"}),r.jsx("p",{className:"p",children:"Styled Components is CSS-in-JS. You write styles inside JavaScript and attach them to components. It supports dynamic styling using props and makes scoping automatic."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Zm,{})}),"When it is useful"]}),r.jsx("div",{className:"calloutText",children:"Great for component libraries, theming, and reusable UI patterns."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Tailwind concept"}),r.jsx("p",{className:"p",children:"Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you compose UI using pre-defined utility classes. It is basically a big, consistent utility system."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(yu,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Core idea"}),r.jsx("div",{className:"miniSub",children:"build UI by combining utilities"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Design tokens"}),r.jsx("p",{className:"p",children:"Design tokens are reusable values like colors, spacing, font sizes, radius, and shadows. Tokens keep the UI consistent and make theme changes easy."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Up,{})}),"Token example"]}),r.jsx("pre",{className:"code",children:`:root {
  --color-primary: #4ea1ff;
  --radius-lg: 18px;
  --space-12: 12px;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick take"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"BEM keeps naming consistent"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Utilities reduce custom CSS"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Modules and styled-components avoid conflicts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Tokens keep themes consistent"]})]})]})]})]})},Wf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Uf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Wf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(vs,{})}),r.jsx("span",{className:"title",children:"Performance and Best Practices"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(hi,{})}),"Make UI fast and stable"]}),r.jsx("p",{className:"p",children:"CSS performance is mostly about avoiding expensive work in the browser. The big goals are stable layout, less reflow, less repaint, and smoother animations."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Critical CSS"}),r.jsx("p",{className:"p",children:"Critical CSS means loading only the styles needed to render the above-the-fold content first. This improves first paint time because the page can show something useful without waiting for all CSS to download."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Beginner tip"]}),r.jsx("div",{className:"calloutText",children:"Keep your initial layout styles small. Load non-essential styles later (for deep sections, modals, or heavy pages)."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Avoiding layout shifts"}),r.jsx("p",{className:"p",children:"Layout shift happens when content jumps while loading. The most common reason is images or ads without fixed space. Always reserve space using width, height, or aspect-ratio."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Give images width and height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use aspect-ratio for responsive media"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid inserting content above existing content"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Reserve space"]}),r.jsx("pre",{className:"code",children:`.cardMedia {
  width: 100%;
  aspect-ratio: 16 / 9;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Avoiding heavy selectors"}),r.jsx("p",{className:"p",children:"Heavy selectors make matching slower and can create confusing CSS. Prefer simple class-based selectors over deep nesting and complex patterns."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(fn,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Prefer"}),r.jsx("div",{className:"miniSub",children:".btnPrimary"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(fn,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Avoid"}),r.jsx("div",{className:"miniSub",children:"header nav ul li a"})]})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Simple rule"]}),r.jsx("div",{className:"calloutText",children:"If your selector depends on HTML structure too much, it becomes fragile and harder to maintain."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"GPU acceleration"}),r.jsx("p",{className:"p",children:"Some animations can run smoother when handled by the GPU (graphics processor). Usually, transforms and opacity are the safest properties for smooth animations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate transform and opacity for best results"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid animating width, height, top, left often"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"will-change"}),r.jsx("p",{className:"p",children:"will-change tells the browser that an element is likely to change soon. This can improve animation smoothness, but using it everywhere can waste memory and hurt performance."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Am,{})}),"Use carefully"]}),r.jsx("div",{className:"calloutText",children:"Apply will-change only to elements you animate often and remove it when not needed."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`.card {
  will-change: transform;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Minimizing repaint and reflow"}),r.jsx("p",{className:"p",children:"Reflow (layout) happens when the browser recalculates element sizes and positions. Repaint happens when pixels are redrawn. Both are costly when repeated often."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate transform and opacity"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Batch DOM updates (avoid many small changes)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid reading layout values repeatedly while writing styles"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"DevTools performance tab"}),r.jsx("p",{className:"p",children:"Chrome DevTools Performance tab helps you record what the browser is doing. You can see scripting, layout, paint, and rendering work. This makes performance issues visible instead of guessing."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(rf,{})}),"What to look for"]}),r.jsx("div",{className:"calloutText",children:"Look for long layout and paint bars, frequent recalculations, and heavy style recalculation."})]})]})]})]})},Hf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 7000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .miniIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .miniTitle {
            font-weight: 900;
            font-size: 13px;
        }

        .miniSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .flow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .flowItem {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 12px;
            color: var(--color-text-secondary);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
        }

        .flowIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 14px;
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 720px) {
            .miniGrid {
                grid-template-columns: 1fr;
            }
        }
    `},$f=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Hf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Po,{})}),r.jsx("span",{className:"title",children:"Accessibility in CSS"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(fn,{})}),"Make UI usable for everyone"]}),r.jsx("p",{className:"p",children:"Accessibility in CSS means your UI should stay readable, keyboard-friendly, and comfortable for people with low vision, motion sensitivity, or different system theme preferences."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Focus styles"}),r.jsx("p",{className:"p",children:"Focus styles show where the keyboard is currently located. Without visible focus, keyboard users get lost. Always keep focus outlines visible for buttons, links, inputs, and custom controls."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(mu,{})}),"Avoid this"]}),r.jsxs("div",{className:"calloutText",children:["Do not remove outlines globally like",r.jsx("span",{className:"mono",children:" outline: none; "}),"unless you replace it with a better focus style."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:":focus-visible"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:":focus-visible"})," helps show focus rings mainly for keyboard navigation, while mouse clicks usually do not show the ring. This reduces visual noise but keeps keyboard accessibility strong."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Recommended focus pattern"]}),r.jsx("pre",{className:"code",children:`button:focus {
  outline: none;
}

button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Color contrast"}),r.jsx("p",{className:"p",children:"Text must stand out from its background. Low contrast makes reading hard for many users. Keep body text clear, avoid light gray on white, and avoid dark gray on black."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use strong contrast for body text"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not rely only on color to show meaning"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Links should be visually obvious"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Reduced motion media query"}),r.jsxs("p",{className:"p",children:["Some users feel discomfort from animations. Respect user settings using",r.jsx("span",{className:"mono",children:" prefers-reduced-motion "}),"to reduce or disable motion."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Reduce motion safely"]}),r.jsx("pre",{className:"code",children:`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"prefers-color-scheme"}),r.jsxs("p",{className:"p",children:["Users can set system theme to dark or light. You can automatically adjust colors using",r.jsx("span",{className:"mono",children:" prefers-color-scheme"}),". This is great when you want a default theme that matches the OS."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(mi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Dark"}),r.jsx("div",{className:"miniSub",children:"Default at night"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Light"}),r.jsx("div",{className:"miniSub",children:"Bright background"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f1117;
    --color-text-primary: #f5f7fa;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Readable font sizing"}),r.jsx("p",{className:"p",children:"Readable text means comfortable size, spacing, and line length. Avoid tiny fonts. Use a good line-height and keep paragraphs at a readable width."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Body text around 14px to 18px feels safe"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use line-height around 1.5 to 1.8 for paragraphs"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid very long lines, keep max-width for content"]})]}),r.jsxs("div",{className:"flow",children:[r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(Bo,{})}),"Font size"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(hi,{})}),"Line height"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Comfort"})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Focus ring visible for keyboard users"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer :focus-visible over :focus everywhere"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Respect reduced motion setting"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Good text contrast and readable sizing"]})]})]})]})]})},Vf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .section {
            padding: 14px 14px;
        }

        .section + .section {
            border-top: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .bullets {
            list-style: none;
            margin-top: 10px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .callout {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .calloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .calloutIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-text-secondary);
        }

        .calloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},Gf=()=>{const[o,c]=ye.useState(!1),i=()=>c(p=>!p);return r.jsxs(Vf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:i,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(vs,{})}),r.jsx("span",{className:"title",children:"Modern CSS Features"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(vs,{})}),"Newer CSS that reduces hacks"]}),r.jsx("p",{className:"p",children:"These features make CSS more powerful and more maintainable. Use them when supported, and keep fallbacks in mind for older browsers."}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTitle",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(Om,{})}),"Beginner note"]}),r.jsx("div",{className:"noteText",children:'Modern CSS is about writing less custom code and fewer "workarounds". The browser can now do many things directly.'})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:":has()"}),r.jsx("p",{className:"p",children:":has() is like a parent selector. It lets you style an element based on what it contains. Example: style a card differently if it has a warning badge inside."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Parent style based on child"]}),r.jsx("pre",{className:"code",children:`.card:has(.badge.warning) {
  border-color: var(--color-warning);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Container queries"}),r.jsx("p",{className:"p",children:"Media queries depend on the viewport size. Container queries depend on the size of a component's container. This makes responsive components easier to build."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(gs,{})}),"Component based responsiveness"]}),r.jsx("pre",{className:"code",children:`.cardGrid {
  container-type: inline-size;
}

@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"subgrid"}),r.jsx("p",{className:"p",children:"subgrid lets nested grid items align with the parent grid tracks. Useful when you want consistent column alignment across multiple cards or rows."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(mn,{})}),"Inherit parent grid tracks"]}),r.jsx("pre",{className:"code",children:`.parent {
  display: grid;
  grid-template-columns: 140px 1fr;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Logical properties"}),r.jsx("p",{className:"p",children:"Logical properties are direction aware. Instead of margin-left or padding-right, you use margin-inline, padding-block. This works better for RTL languages and different writing modes."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"margin-inline"})," replaces left and right"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"padding-block"})," replaces top and bottom"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(ei,{})}),"RTL friendly spacing"]}),r.jsx("pre",{className:"code",children:`.box {
  padding-block: 12px;
  padding-inline: 16px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Writing modes"}),r.jsx("p",{className:"p",children:"writing-mode changes text flow direction, like vertical text layouts. It also affects logical properties and how inline and block directions work."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(ei,{})}),"Vertical text example"]}),r.jsx("pre",{className:"code",children:`.verticalLabel {
  writing-mode: vertical-rl;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"color-mix()"}),r.jsx("p",{className:"p",children:"color-mix() lets you blend two colors. Useful for creating hover colors, borders, and subtle surfaces without hardcoding many color values."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(ri,{})}),"Mixing two colors"]}),r.jsx("pre",{className:"code",children:`.chip {
  background: color-mix(in srgb, var(--color-primary) 18%, transparent);
  border-color: color-mix(in srgb, var(--color-primary) 40%, var(--color-border));
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Nesting"}),r.jsx("p",{className:"p",children:"CSS nesting allows you to write nested rules similar to SCSS, but now in CSS itself. It improves readability for component style blocks."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(X,{})}),"Nested rules"]}),r.jsx("pre",{className:"code",children:`.card {
  padding: 16px;

  & .title {
    font-weight: 800;
  }

  &:hover {
    border-color: var(--color-primary);
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Cascade layers"}),r.jsx("p",{className:"p",children:"Cascade layers let you control which group of styles wins, independent of specificity. This makes large projects more predictable."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Why it helps"]}),r.jsx("div",{className:"calloutText",children:"You can keep utilities, components, and overrides in separate layers and define a clear priority order."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@layer"}),r.jsx("p",{className:"p",children:"@layer is how you create layers. You can declare layer order and put CSS rules inside each layer."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ce,{})}),"Layer order and rules"]}),r.jsx("pre",{className:"code",children:`@layer reset, base, components, utilities;

@layer base {
  body { color: var(--color-text-primary); }
}

@layer utilities {
  .mt-2 { margin-top: 8px; }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@scope"}),r.jsx("p",{className:"p",children:"@scope helps limit where styles apply. It allows you to write rules that only affect a specific part of the DOM. This reduces accidental styling conflicts."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(fn,{})}),"Scoped styling"]}),r.jsx("pre",{className:"code",children:`@scope (.card) {
  .title {
    font-weight: 900;
  }
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer container queries for component layouts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use logical properties for RTL readiness"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use @layer to keep cascade predictable"]})]})]})]})]})},Qf=()=>r.jsxs(Hl.Wrapper,{children:[r.jsx(Hl.Header,{children:r.jsx(sf,{})}),r.jsxs(Hl.Main,{children:[r.jsxs("div",{className:"contentWrapper",children:[r.jsx(of,{}),r.jsx(lf,{}),r.jsx(df,{}),r.jsx(uf,{}),r.jsx(xf,{}),r.jsx(ff,{}),r.jsx(vf,{}),r.jsx(jf,{}),r.jsx(bf,{}),r.jsx(kf,{}),r.jsx(Cf,{}),r.jsx(zf,{}),r.jsx(Ef,{}),r.jsx(_f,{}),r.jsx(Bf,{}),r.jsx(Rf,{}),r.jsx(Ff,{}),r.jsx(Af,{}),r.jsx(Uf,{}),r.jsx($f,{}),r.jsx(Gf,{})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(tf,{})})]})]});Cx.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(Qf,{})}));
