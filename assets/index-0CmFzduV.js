(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const k of j.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&p(k)}).observe(document,{childList:!0,subtree:!0});function l(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(m){if(m.ep)return;m.ep=!0;const j=l(m);fetch(m.href,j)}})();function yx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Pi={exports:{}},sn={},Bi={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function jx(){if(dp)return ne;dp=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),k=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),W=Symbol.iterator;function J(f){return f===null||typeof f!="object"?null:(f=W&&f[W]||f["@@iterator"],typeof f=="function"?f:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,U={};function Q(f,N,ee){this.props=f,this.context=N,this.refs=U,this.updater=ee||le}Q.prototype.isReactComponent={},Q.prototype.setState=function(f,N){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,N,"setState")},Q.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function me(){}me.prototype=Q.prototype;function de(f,N,ee){this.props=f,this.context=N,this.refs=U,this.updater=ee||le}var te=de.prototype=new me;te.constructor=de,X(te,Q.prototype),te.isPureReactComponent=!0;var L=Array.isArray,Z=Object.prototype.hasOwnProperty,H={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function D(f,N,ee){var re,ie={},oe=null,pe=null;if(N!=null)for(re in N.ref!==void 0&&(pe=N.ref),N.key!==void 0&&(oe=""+N.key),N)Z.call(N,re)&&!E.hasOwnProperty(re)&&(ie[re]=N[re]);var ce=arguments.length-2;if(ce===1)ie.children=ee;else if(1<ce){for(var fe=Array(ce),Ie=0;Ie<ce;Ie++)fe[Ie]=arguments[Ie+2];ie.children=fe}if(f&&f.defaultProps)for(re in ce=f.defaultProps,ce)ie[re]===void 0&&(ie[re]=ce[re]);return{$$typeof:o,type:f,key:oe,ref:pe,props:ie,_owner:H.current}}function je(f,N){return{$$typeof:o,type:f.type,key:N,ref:f.ref,props:f.props,_owner:f._owner}}function Be(f){return typeof f=="object"&&f!==null&&f.$$typeof===o}function ae(f){var N={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(ee){return N[ee]})}var _e=/\/+/g;function Te(f,N){return typeof f=="object"&&f!==null&&f.key!=null?ae(""+f.key):N.toString(36)}function Ke(f,N,ee,re,ie){var oe=typeof f;(oe==="undefined"||oe==="boolean")&&(f=null);var pe=!1;if(f===null)pe=!0;else switch(oe){case"string":case"number":pe=!0;break;case"object":switch(f.$$typeof){case o:case c:pe=!0}}if(pe)return pe=f,ie=ie(pe),f=re===""?"."+Te(pe,0):re,L(ie)?(ee="",f!=null&&(ee=f.replace(_e,"$&/")+"/"),Ke(ie,N,ee,"",function(Ie){return Ie})):ie!=null&&(Be(ie)&&(ie=je(ie,ee+(!ie.key||pe&&pe.key===ie.key?"":(""+ie.key).replace(_e,"$&/")+"/")+f)),N.push(ie)),1;if(pe=0,re=re===""?".":re+":",L(f))for(var ce=0;ce<f.length;ce++){oe=f[ce];var fe=re+Te(oe,ce);pe+=Ke(oe,N,ee,fe,ie)}else if(fe=J(f),typeof fe=="function")for(f=fe.call(f),ce=0;!(oe=f.next()).done;)oe=oe.value,fe=re+Te(oe,ce++),pe+=Ke(oe,N,ee,fe,ie);else if(oe==="object")throw N=String(f),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return pe}function rr(f,N,ee){if(f==null)return f;var re=[],ie=0;return Ke(f,re,"","",function(oe){return N.call(ee,oe,ie++)}),re}function qe(f){if(f._status===-1){var N=f._result;N=N(),N.then(function(ee){(f._status===0||f._status===-1)&&(f._status=1,f._result=ee)},function(ee){(f._status===0||f._status===-1)&&(f._status=2,f._result=ee)}),f._status===-1&&(f._status=0,f._result=N)}if(f._status===1)return f._result.default;throw f._result}var Ne={current:null},I={transition:null},O={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:I,ReactCurrentOwner:H};function _(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:rr,forEach:function(f,N,ee){rr(f,function(){N.apply(this,arguments)},ee)},count:function(f){var N=0;return rr(f,function(){N++}),N},toArray:function(f){return rr(f,function(N){return N})||[]},only:function(f){if(!Be(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},ne.Component=Q,ne.Fragment=l,ne.Profiler=m,ne.PureComponent=de,ne.StrictMode=p,ne.Suspense=T,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,ne.act=_,ne.cloneElement=function(f,N,ee){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var re=X({},f.props),ie=f.key,oe=f.ref,pe=f._owner;if(N!=null){if(N.ref!==void 0&&(oe=N.ref,pe=H.current),N.key!==void 0&&(ie=""+N.key),f.type&&f.type.defaultProps)var ce=f.type.defaultProps;for(fe in N)Z.call(N,fe)&&!E.hasOwnProperty(fe)&&(re[fe]=N[fe]===void 0&&ce!==void 0?ce[fe]:N[fe])}var fe=arguments.length-2;if(fe===1)re.children=ee;else if(1<fe){ce=Array(fe);for(var Ie=0;Ie<fe;Ie++)ce[Ie]=arguments[Ie+2];re.children=ce}return{$$typeof:o,type:f.type,key:ie,ref:oe,props:re,_owner:pe}},ne.createContext=function(f){return f={$$typeof:k,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},ne.createElement=D,ne.createFactory=function(f){var N=D.bind(null,f);return N.type=f,N},ne.createRef=function(){return{current:null}},ne.forwardRef=function(f){return{$$typeof:z,render:f}},ne.isValidElement=Be,ne.lazy=function(f){return{$$typeof:G,_payload:{_status:-1,_result:f},_init:qe}},ne.memo=function(f,N){return{$$typeof:K,type:f,compare:N===void 0?null:N}},ne.startTransition=function(f){var N=I.transition;I.transition={};try{f()}finally{I.transition=N}},ne.unstable_act=_,ne.useCallback=function(f,N){return Ne.current.useCallback(f,N)},ne.useContext=function(f){return Ne.current.useContext(f)},ne.useDebugValue=function(){},ne.useDeferredValue=function(f){return Ne.current.useDeferredValue(f)},ne.useEffect=function(f,N){return Ne.current.useEffect(f,N)},ne.useId=function(){return Ne.current.useId()},ne.useImperativeHandle=function(f,N,ee){return Ne.current.useImperativeHandle(f,N,ee)},ne.useInsertionEffect=function(f,N){return Ne.current.useInsertionEffect(f,N)},ne.useLayoutEffect=function(f,N){return Ne.current.useLayoutEffect(f,N)},ne.useMemo=function(f,N){return Ne.current.useMemo(f,N)},ne.useReducer=function(f,N,ee){return Ne.current.useReducer(f,N,ee)},ne.useRef=function(f){return Ne.current.useRef(f)},ne.useState=function(f){return Ne.current.useState(f)},ne.useSyncExternalStore=function(f,N,ee){return Ne.current.useSyncExternalStore(f,N,ee)},ne.useTransition=function(){return Ne.current.useTransition()},ne.version="18.3.1",ne}var pp;function al(){return pp||(pp=1,Bi.exports=jx()),Bi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function Nx(){if(up)return sn;up=1;var o=al(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function k(z,T,K){var G,W={},J=null,le=null;K!==void 0&&(J=""+K),T.key!==void 0&&(J=""+T.key),T.ref!==void 0&&(le=T.ref);for(G in T)p.call(T,G)&&!j.hasOwnProperty(G)&&(W[G]=T[G]);if(z&&z.defaultProps)for(G in T=z.defaultProps,T)W[G]===void 0&&(W[G]=T[G]);return{$$typeof:c,type:z,key:J,ref:le,props:W,_owner:m.current}}return sn.Fragment=l,sn.jsx=k,sn.jsxs=k,sn}var hp;function bx(){return hp||(hp=1,Pi.exports=Nx()),Pi.exports}var r=bx(),No={},Mi={exports:{}},cr={},Ri={exports:{}},Di={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function wx(){return xp||(xp=1,(function(o){function c(I,O){var _=I.length;I.push(O);e:for(;0<_;){var f=_-1>>>1,N=I[f];if(0<m(N,O))I[f]=O,I[_]=N,_=f;else break e}}function l(I){return I.length===0?null:I[0]}function p(I){if(I.length===0)return null;var O=I[0],_=I.pop();if(_!==O){I[0]=_;e:for(var f=0,N=I.length,ee=N>>>1;f<ee;){var re=2*(f+1)-1,ie=I[re],oe=re+1,pe=I[oe];if(0>m(ie,_))oe<N&&0>m(pe,ie)?(I[f]=pe,I[oe]=_,f=oe):(I[f]=ie,I[re]=_,f=re);else if(oe<N&&0>m(pe,_))I[f]=pe,I[oe]=_,f=oe;else break e}}return O}function m(I,O){var _=I.sortIndex-O.sortIndex;return _!==0?_:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;o.unstable_now=function(){return j.now()}}else{var k=Date,z=k.now();o.unstable_now=function(){return k.now()-z}}var T=[],K=[],G=1,W=null,J=3,le=!1,X=!1,U=!1,Q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(I){for(var O=l(K);O!==null;){if(O.callback===null)p(K);else if(O.startTime<=I)p(K),O.sortIndex=O.expirationTime,c(T,O);else break;O=l(K)}}function L(I){if(U=!1,te(I),!X)if(l(T)!==null)X=!0,qe(Z);else{var O=l(K);O!==null&&Ne(L,O.startTime-I)}}function Z(I,O){X=!1,U&&(U=!1,me(D),D=-1),le=!0;var _=J;try{for(te(O),W=l(T);W!==null&&(!(W.expirationTime>O)||I&&!ae());){var f=W.callback;if(typeof f=="function"){W.callback=null,J=W.priorityLevel;var N=f(W.expirationTime<=O);O=o.unstable_now(),typeof N=="function"?W.callback=N:W===l(T)&&p(T),te(O)}else p(T);W=l(T)}if(W!==null)var ee=!0;else{var re=l(K);re!==null&&Ne(L,re.startTime-O),ee=!1}return ee}finally{W=null,J=_,le=!1}}var H=!1,E=null,D=-1,je=5,Be=-1;function ae(){return!(o.unstable_now()-Be<je)}function _e(){if(E!==null){var I=o.unstable_now();Be=I;var O=!0;try{O=E(!0,I)}finally{O?Te():(H=!1,E=null)}}else H=!1}var Te;if(typeof de=="function")Te=function(){de(_e)};else if(typeof MessageChannel!="undefined"){var Ke=new MessageChannel,rr=Ke.port2;Ke.port1.onmessage=_e,Te=function(){rr.postMessage(null)}}else Te=function(){Q(_e,0)};function qe(I){E=I,H||(H=!0,Te())}function Ne(I,O){D=Q(function(){I(o.unstable_now())},O)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_continueExecution=function(){X||le||(X=!0,qe(Z))},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return J},o.unstable_getFirstCallbackNode=function(){return l(T)},o.unstable_next=function(I){switch(J){case 1:case 2:case 3:var O=3;break;default:O=J}var _=J;J=O;try{return I()}finally{J=_}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var _=J;J=I;try{return O()}finally{J=_}},o.unstable_scheduleCallback=function(I,O,_){var f=o.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?f+_:f):_=f,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=_+N,I={id:G++,callback:O,priorityLevel:I,startTime:_,expirationTime:N,sortIndex:-1},_>f?(I.sortIndex=_,c(K,I),l(T)===null&&I===l(K)&&(U?(me(D),D=-1):U=!0,Ne(L,_-f))):(I.sortIndex=N,c(T,I),X||le||(X=!0,qe(Z))),I},o.unstable_shouldYield=ae,o.unstable_wrapCallback=function(I){var O=J;return function(){var _=J;J=O;try{return I.apply(this,arguments)}finally{J=_}}}})(Di)),Di}var mp;function kx(){return mp||(mp=1,Ri.exports=wx()),Ri.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function Sx(){if(fp)return cr;fp=1;var o=al(),c=kx();function l(e){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)s+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function j(e,s){k(e,s),k(e+"Capture",s)}function k(e,s){for(m[e]=s,e=0;e<s.length;e++)p.add(s[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},W={};function J(e){return T.call(W,e)?!0:T.call(G,e)?!1:K.test(e)?W[e]=!0:(G[e]=!0,!1)}function le(e,s,t,n){if(t!==null&&t.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,s,t,n){if(s===null||typeof s=="undefined"||le(e,s,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function U(e,s,t,n,a,i,d){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=s,this.sanitizeURL=i,this.removeEmptyString=d}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var s=e[0];Q[s]=new U(s,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var s=e.replace(me,de);Q[s]=new U(s,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var s=e.replace(me,de);Q[s]=new U(s,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var s=e.replace(me,de);Q[s]=new U(s,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,s,t,n){var a=Q.hasOwnProperty(s)?Q[s]:null;(a!==null?a.type!==0:n||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(X(s,t,a,n)&&(t=null),n||a===null?J(s)&&(t===null?e.removeAttribute(s):e.setAttribute(s,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(s=a.attributeName,n=a.attributeNamespace,t===null?e.removeAttribute(s):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,n?e.setAttributeNS(n,s,t):e.setAttribute(s,t))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),H=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),ae=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),rr=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),I=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,f;function N(e){if(f===void 0)try{throw Error()}catch(t){var s=t.stack.trim().match(/\n( *(at )?)/);f=s&&s[1]||""}return`
`+f+e}var ee=!1;function re(e,s){if(!e||ee)return"";ee=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(y){var n=y}Reflect.construct(e,[],s)}else{try{s.call()}catch(y){n=y}e.call(s.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),i=n.stack.split(`
`),d=a.length-1,u=i.length-1;1<=d&&0<=u&&a[d]!==i[u];)u--;for(;1<=d&&0<=u;d--,u--)if(a[d]!==i[u]){if(d!==1||u!==1)do if(d--,u--,0>u||a[d]!==i[u]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=u);break}}}finally{ee=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?N(e):""}function ie(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case H:return"Portal";case je:return"Profiler";case D:return"StrictMode";case Te:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case _e:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rr:return s=e.displayName||null,s!==null?s:oe(e.type)||"Memo";case qe:s=e._payload,e=e._init;try{return oe(e(s))}catch{}}return null}function pe(e){var s=e.type;switch(e.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=s.render,e=e.displayName||e.name||"",s.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(s);case 8:return s===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ie(e){var s=fe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,s),n=""+e[s];if(!e.hasOwnProperty(s)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,s,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Ie(e))}function ys(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var t=s.getValue(),n="";return e&&(n=fe(e)?e.checked?"true":"false":e.value),e=n,e!==t?(s.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ao(e,s){var t=s.checked;return _({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function gl(e,s){var t=s.defaultValue==null?"":s.defaultValue,n=s.checked!=null?s.checked:s.defaultChecked;t=ce(s.value!=null?s.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function vl(e,s){s=s.checked,s!=null&&te(e,"checked",s,!1)}function Wo(e,s){vl(e,s);var t=ce(s.value),n=s.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}s.hasOwnProperty("value")?Uo(e,s.type,t):s.hasOwnProperty("defaultValue")&&Uo(e,s.type,ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(e.defaultChecked=!!s.defaultChecked)}function yl(e,s,t){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var n=s.type;if(!(n!=="submit"&&n!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+e._wrapperState.initialValue,t||s===e.value||(e.value=s),e.defaultValue=s}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Uo(e,s,t){(s!=="number"||kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gt=Array.isArray;function Fs(e,s,t,n){if(e=e.options,s){s={};for(var a=0;a<t.length;a++)s["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=s.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&n&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),s=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}s!==null||e[a].disabled||(s=e[a])}s!==null&&(s.selected=!0)}}function Ho(e,s){if(s.dangerouslySetInnerHTML!=null)throw Error(l(91));return _({},s,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jl(e,s){var t=s.value;if(t==null){if(t=s.children,s=s.defaultValue,t!=null){if(s!=null)throw Error(l(92));if(gt(t)){if(1<t.length)throw Error(l(93));t=t[0]}s=t}s==null&&(s=""),t=s}e._wrapperState={initialValue:ce(t)}}function Nl(e,s){var t=ce(s.value),n=ce(s.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),s.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function bl(e){var s=e.textContent;s===e._wrapperState.initialValue&&s!==""&&s!==null&&(e.value=s)}function wl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,s){return e==null||e==="http://www.w3.org/1999/xhtml"?wl(s):e==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var un,kl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(s,t,n,a){MSApp.execUnsafeLocalFunction(function(){return e(s,t,n,a)})}:e})(function(e,s){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=s;else{for(un=un||document.createElement("div"),un.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=un.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;s.firstChild;)e.appendChild(s.firstChild)}});function vt(e,s){if(s){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=s;return}}e.textContent=s}var yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wu=["Webkit","ms","Moz","O"];Object.keys(yt).forEach(function(e){wu.forEach(function(s){s=s+e.charAt(0).toUpperCase()+e.substring(1),yt[s]=yt[e]})});function Sl(e,s,t){return s==null||typeof s=="boolean"||s===""?"":t||typeof s!="number"||s===0||yt.hasOwnProperty(e)&&yt[e]?(""+s).trim():s+"px"}function Cl(e,s){e=e.style;for(var t in s)if(s.hasOwnProperty(t)){var n=t.indexOf("--")===0,a=Sl(t,s[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,a):e[t]=a}}var ku=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vo(e,s){if(s){if(ku[e]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(l(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(l(61))}if(s.style!=null&&typeof s.style!="object")throw Error(l(62))}}function Go(e,s){if(e.indexOf("-")===-1)return typeof s.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qo=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ko=null,Os=null,As=null;function Tl(e){if(e=Wt(e)){if(typeof Ko!="function")throw Error(l(280));var s=e.stateNode;s&&(s=Mn(s),Ko(e.stateNode,e.type,s))}}function zl(e){Os?As?As.push(e):As=[e]:Os=e}function Il(){if(Os){var e=Os,s=As;if(As=Os=null,Tl(e),s)for(e=0;e<s.length;e++)Tl(s[e])}}function El(e,s){return e(s)}function Ll(){}var qo=!1;function _l(e,s,t){if(qo)return e(s,t);qo=!0;try{return El(e,s,t)}finally{qo=!1,(Os!==null||As!==null)&&(Ll(),Il())}}function jt(e,s){var t=e.stateNode;if(t===null)return null;var n=Mn(t);if(n===null)return null;t=n[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,s,typeof t));return t}var Xo=!1;if(z)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{Xo=!1}function Su(e,s,t,n,a,i,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{s.apply(t,y)}catch(w){this.onError(w)}}var bt=!1,hn=null,xn=!1,Zo=null,Cu={onError:function(e){bt=!0,hn=e}};function Tu(e,s,t,n,a,i,d,u,h){bt=!1,hn=null,Su.apply(Cu,arguments)}function zu(e,s,t,n,a,i,d,u,h){if(Tu.apply(this,arguments),bt){if(bt){var y=hn;bt=!1,hn=null}else throw Error(l(198));xn||(xn=!0,Zo=y)}}function js(e){var s=e,t=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(t=s.return),e=s.return;while(e)}return s.tag===3?t:null}function Pl(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function Bl(e){if(js(e)!==e)throw Error(l(188))}function Iu(e){var s=e.alternate;if(!s){if(s=js(e),s===null)throw Error(l(188));return s!==e?null:e}for(var t=e,n=s;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){t=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return Bl(a),e;if(i===n)return Bl(a),s;i=i.sibling}throw Error(l(188))}if(t.return!==n.return)t=a,n=i;else{for(var d=!1,u=a.child;u;){if(u===t){d=!0,t=a,n=i;break}if(u===n){d=!0,n=a,t=i;break}u=u.sibling}if(!d){for(u=i.child;u;){if(u===t){d=!0,t=i,n=a;break}if(u===n){d=!0,n=i,t=a;break}u=u.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==n)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:s}function Ml(e){return e=Iu(e),e!==null?Rl(e):null}function Rl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var s=Rl(e);if(s!==null)return s;e=e.sibling}return null}var Dl=c.unstable_scheduleCallback,Fl=c.unstable_cancelCallback,Eu=c.unstable_shouldYield,Lu=c.unstable_requestPaint,Me=c.unstable_now,_u=c.unstable_getCurrentPriorityLevel,Jo=c.unstable_ImmediatePriority,Ol=c.unstable_UserBlockingPriority,mn=c.unstable_NormalPriority,Pu=c.unstable_LowPriority,Al=c.unstable_IdlePriority,fn=null,Br=null;function Bu(e){if(Br&&typeof Br.onCommitFiberRoot=="function")try{Br.onCommitFiberRoot(fn,e,void 0,(e.current.flags&128)===128)}catch{}}var Sr=Math.clz32?Math.clz32:Du,Mu=Math.log,Ru=Math.LN2;function Du(e){return e>>>=0,e===0?32:31-(Mu(e)/Ru|0)|0}var gn=64,vn=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yn(e,s){var t=e.pendingLanes;if(t===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,d=t&268435455;if(d!==0){var u=d&~a;u!==0?n=wt(u):(i&=d,i!==0&&(n=wt(i)))}else d=t&~a,d!==0?n=wt(d):i!==0&&(n=wt(i));if(n===0)return 0;if(s!==0&&s!==n&&(s&a)===0&&(a=n&-n,i=s&-s,a>=i||a===16&&(i&4194240)!==0))return s;if((n&4)!==0&&(n|=t&16),s=e.entangledLanes,s!==0)for(e=e.entanglements,s&=n;0<s;)t=31-Sr(s),a=1<<t,n|=e[t],s&=~a;return n}function Fu(e,s){switch(e){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ou(e,s){for(var t=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var d=31-Sr(i),u=1<<d,h=a[d];h===-1?((u&t)===0||(u&n)!==0)&&(a[d]=Fu(u,s)):h<=s&&(e.expiredLanes|=u),i&=~u}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wl(){var e=gn;return gn<<=1,(gn&4194240)===0&&(gn=64),e}function ra(e){for(var s=[],t=0;31>t;t++)s.push(e);return s}function kt(e,s,t){e.pendingLanes|=s,s!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,s=31-Sr(s),e[s]=t}function Au(e,s){var t=e.pendingLanes&~s;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=s,e.mutableReadLanes&=s,e.entangledLanes&=s,s=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Sr(t),i=1<<a;s[a]=0,n[a]=-1,e[a]=-1,t&=~i}}function sa(e,s){var t=e.entangledLanes|=s;for(e=e.entanglements;t;){var n=31-Sr(t),a=1<<n;a&s|e[n]&s&&(e[n]|=s),t&=~a}}var ve=0;function Ul(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hl,ta,$l,Vl,Gl,na=!1,jn=[],qr=null,Xr=null,Zr=null,St=new Map,Ct=new Map,Jr=[],Wu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(e,s){switch(e){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":St.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(s.pointerId)}}function Tt(e,s,t,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:s,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},s!==null&&(s=Wt(s),s!==null&&ta(s)),e):(e.eventSystemFlags|=n,s=e.targetContainers,a!==null&&s.indexOf(a)===-1&&s.push(a),e)}function Uu(e,s,t,n,a){switch(s){case"focusin":return qr=Tt(qr,e,s,t,n,a),!0;case"dragenter":return Xr=Tt(Xr,e,s,t,n,a),!0;case"mouseover":return Zr=Tt(Zr,e,s,t,n,a),!0;case"pointerover":var i=a.pointerId;return St.set(i,Tt(St.get(i)||null,e,s,t,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Ct.set(i,Tt(Ct.get(i)||null,e,s,t,n,a)),!0}return!1}function Yl(e){var s=Ns(e.target);if(s!==null){var t=js(s);if(t!==null){if(s=t.tag,s===13){if(s=Pl(t),s!==null){e.blockedOn=s,Gl(e.priority,function(){$l(t)});return}}else if(s===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nn(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var t=aa(e.domEventName,e.eventSystemFlags,s[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Qo=n,t.target.dispatchEvent(n),Qo=null}else return s=Wt(t),s!==null&&ta(s),e.blockedOn=t,!1;s.shift()}return!0}function Kl(e,s,t){Nn(e)&&t.delete(s)}function Hu(){na=!1,qr!==null&&Nn(qr)&&(qr=null),Xr!==null&&Nn(Xr)&&(Xr=null),Zr!==null&&Nn(Zr)&&(Zr=null),St.forEach(Kl),Ct.forEach(Kl)}function zt(e,s){e.blockedOn===s&&(e.blockedOn=null,na||(na=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Hu)))}function It(e){function s(a){return zt(a,e)}if(0<jn.length){zt(jn[0],e);for(var t=1;t<jn.length;t++){var n=jn[t];n.blockedOn===e&&(n.blockedOn=null)}}for(qr!==null&&zt(qr,e),Xr!==null&&zt(Xr,e),Zr!==null&&zt(Zr,e),St.forEach(s),Ct.forEach(s),t=0;t<Jr.length;t++)n=Jr[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Jr.length&&(t=Jr[0],t.blockedOn===null);)Yl(t),t.blockedOn===null&&Jr.shift()}var Ws=L.ReactCurrentBatchConfig,bn=!0;function $u(e,s,t,n){var a=ve,i=Ws.transition;Ws.transition=null;try{ve=1,oa(e,s,t,n)}finally{ve=a,Ws.transition=i}}function Vu(e,s,t,n){var a=ve,i=Ws.transition;Ws.transition=null;try{ve=4,oa(e,s,t,n)}finally{ve=a,Ws.transition=i}}function oa(e,s,t,n){if(bn){var a=aa(e,s,t,n);if(a===null)wa(e,s,n,wn,t),Ql(e,n);else if(Uu(a,e,s,t,n))n.stopPropagation();else if(Ql(e,n),s&4&&-1<Wu.indexOf(e)){for(;a!==null;){var i=Wt(a);if(i!==null&&Hl(i),i=aa(e,s,t,n),i===null&&wa(e,s,n,wn,t),i===a)break;a=i}a!==null&&n.stopPropagation()}else wa(e,s,n,null,t)}}var wn=null;function aa(e,s,t,n){if(wn=null,e=Yo(n),e=Ns(e),e!==null)if(s=js(e),s===null)e=null;else if(t=s.tag,t===13){if(e=Pl(s),e!==null)return e;e=null}else if(t===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null);return wn=e,null}function ql(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_u()){case Jo:return 1;case Ol:return 4;case mn:case Pu:return 16;case Al:return 536870912;default:return 16}default:return 16}}var es=null,ia=null,kn=null;function Xl(){if(kn)return kn;var e,s=ia,t=s.length,n,a="value"in es?es.value:es.textContent,i=a.length;for(e=0;e<t&&s[e]===a[e];e++);var d=t-e;for(n=1;n<=d&&s[t-n]===a[i-n];n++);return kn=a.slice(e,1<n?1-n:void 0)}function Sn(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function Zl(){return!1}function pr(e){function s(t,n,a,i,d){this._reactName=t,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cn:Zl,this.isPropagationStopped=Zl,this}return _(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),s}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=pr(Us),Et=_({},Us,{view:0,detail:0}),Gu=pr(Et),ca,da,Lt,Tn=_({},Et,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lt&&(Lt&&e.type==="mousemove"?(ca=e.screenX-Lt.screenX,da=e.screenY-Lt.screenY):da=ca=0,Lt=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Jl=pr(Tn),Qu=_({},Tn,{dataTransfer:0}),Yu=pr(Qu),Ku=_({},Et,{relatedTarget:0}),pa=pr(Ku),qu=_({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Xu=pr(qu),Zu=_({},Us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ju=pr(Zu),eh=_({},Us,{data:0}),ec=pr(eh),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nh(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=th[e])?!!s[e]:!1}function ua(){return nh}var oh=_({},Et,{key:function(e){if(e.key){var s=rh[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Sn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(e){return e.type==="keypress"?Sn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ah=pr(oh),ih=_({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=pr(ih),lh=_({},Et,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),ch=pr(lh),dh=_({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),ph=pr(dh),uh=_({},Tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=pr(uh),xh=[9,13,27,32],ha=z&&"CompositionEvent"in window,_t=null;z&&"documentMode"in document&&(_t=document.documentMode);var mh=z&&"TextEvent"in window&&!_t,sc=z&&(!ha||_t&&8<_t&&11>=_t),tc=" ",nc=!1;function oc(e,s){switch(e){case"keyup":return xh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function fh(e,s){switch(e){case"compositionend":return ac(s);case"keypress":return s.which!==32?null:(nc=!0,tc);case"textInput":return e=s.data,e===tc&&nc?null:e;default:return null}}function gh(e,s){if(Hs)return e==="compositionend"||!ha&&oc(e,s)?(e=Xl(),kn=ia=es=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return sc&&s.locale!=="ko"?null:s.data;default:return null}}var vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!vh[e.type]:s==="textarea"}function lc(e,s,t,n){zl(n),s=_n(s,"onChange"),0<s.length&&(t=new la("onChange","change",null,t,n),e.push({event:t,listeners:s}))}var Pt=null,Bt=null;function yh(e){Cc(e,0)}function zn(e){var s=Ys(e);if(ys(s))return e}function jh(e,s){if(e==="change")return s}var cc=!1;if(z){var xa;if(z){var ma="oninput"in document;if(!ma){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),ma=typeof dc.oninput=="function"}xa=ma}else xa=!1;cc=xa&&(!document.documentMode||9<document.documentMode)}function pc(){Pt&&(Pt.detachEvent("onpropertychange",uc),Bt=Pt=null)}function uc(e){if(e.propertyName==="value"&&zn(Bt)){var s=[];lc(s,Bt,e,Yo(e)),_l(yh,s)}}function Nh(e,s,t){e==="focusin"?(pc(),Pt=s,Bt=t,Pt.attachEvent("onpropertychange",uc)):e==="focusout"&&pc()}function bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zn(Bt)}function wh(e,s){if(e==="click")return zn(s)}function kh(e,s){if(e==="input"||e==="change")return zn(s)}function Sh(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var Cr=typeof Object.is=="function"?Object.is:Sh;function Mt(e,s){if(Cr(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var a=t[n];if(!T.call(s,a)||!Cr(e[a],s[a]))return!1}return!0}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,s){var t=hc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=s&&n>=s)return{node:t,offset:s-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hc(t)}}function mc(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?mc(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function fc(){for(var e=window,s=kr();s instanceof e.HTMLIFrameElement;){try{var t=typeof s.contentWindow.location.href=="string"}catch{t=!1}if(t)e=s.contentWindow;else break;s=kr(e.document)}return s}function fa(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}function Ch(e){var s=fc(),t=e.focusedElem,n=e.selectionRange;if(s!==t&&t&&t.ownerDocument&&mc(t.ownerDocument.documentElement,t)){if(n!==null&&fa(t)){if(s=n.start,e=n.end,e===void 0&&(e=s),"selectionStart"in t)t.selectionStart=s,t.selectionEnd=Math.min(e,t.value.length);else if(e=(s=t.ownerDocument||document)&&s.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=xc(t,i);var d=xc(t,n);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(s=s.createRange(),s.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(s),e.extend(d.node,d.offset)):(s.setEnd(d.node,d.offset),e.addRange(s)))}}for(s=[],e=t;e=e.parentNode;)e.nodeType===1&&s.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<s.length;t++)e=s[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Th=z&&"documentMode"in document&&11>=document.documentMode,$s=null,ga=null,Rt=null,va=!1;function gc(e,s,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;va||$s==null||$s!==kr(n)||(n=$s,"selectionStart"in n&&fa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Rt&&Mt(Rt,n)||(Rt=n,n=_n(ga,"onSelect"),0<n.length&&(s=new la("onSelect","select",null,s,t),e.push({event:s,listeners:n}),s.target=$s)))}function In(e,s){var t={};return t[e.toLowerCase()]=s.toLowerCase(),t["Webkit"+e]="webkit"+s,t["Moz"+e]="moz"+s,t}var Vs={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionend:In("Transition","TransitionEnd")},ya={},vc={};z&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function En(e){if(ya[e])return ya[e];if(!Vs[e])return e;var s=Vs[e],t;for(t in s)if(s.hasOwnProperty(t)&&t in vc)return ya[e]=s[t];return e}var yc=En("animationend"),jc=En("animationiteration"),Nc=En("animationstart"),bc=En("transitionend"),wc=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(e,s){wc.set(e,s),j(s,[e])}for(var ja=0;ja<kc.length;ja++){var Na=kc[ja],zh=Na.toLowerCase(),Ih=Na[0].toUpperCase()+Na.slice(1);rs(zh,"on"+Ih)}rs(yc,"onAnimationEnd"),rs(jc,"onAnimationIteration"),rs(Nc,"onAnimationStart"),rs("dblclick","onDoubleClick"),rs("focusin","onFocus"),rs("focusout","onBlur"),rs(bc,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function Sc(e,s,t){var n=e.type||"unknown-event";e.currentTarget=t,zu(n,s,void 0,e),e.currentTarget=null}function Cc(e,s){s=(s&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],a=n.event;n=n.listeners;e:{var i=void 0;if(s)for(var d=n.length-1;0<=d;d--){var u=n[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==i&&a.isPropagationStopped())break e;Sc(a,u,y),i=h}else for(d=0;d<n.length;d++){if(u=n[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==i&&a.isPropagationStopped())break e;Sc(a,u,y),i=h}}}if(xn)throw e=Zo,xn=!1,Zo=null,e}function we(e,s){var t=s[Ia];t===void 0&&(t=s[Ia]=new Set);var n=e+"__bubble";t.has(n)||(Tc(s,e,2,!1),t.add(n))}function ba(e,s,t){var n=0;s&&(n|=4),Tc(t,e,n,s)}var Ln="_reactListening"+Math.random().toString(36).slice(2);function Ft(e){if(!e[Ln]){e[Ln]=!0,p.forEach(function(t){t!=="selectionchange"&&(Eh.has(t)||ba(t,!1,e),ba(t,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Ln]||(s[Ln]=!0,ba("selectionchange",!1,s))}}function Tc(e,s,t,n){switch(ql(s)){case 1:var a=$u;break;case 4:a=Vu;break;default:a=oa}t=a.bind(null,s,t,e),a=void 0,!Xo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(s,t,{capture:!0,passive:a}):e.addEventListener(s,t,!0):a!==void 0?e.addEventListener(s,t,{passive:a}):e.addEventListener(s,t,!1)}function wa(e,s,t,n,a){var i=n;if((s&1)===0&&(s&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var u=n.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(d===4)for(d=n.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;u!==null;){if(d=Ns(u),d===null)return;if(h=d.tag,h===5||h===6){n=i=d;continue e}u=u.parentNode}}n=n.return}_l(function(){var y=i,w=Yo(t),S=[];e:{var b=wc.get(e);if(b!==void 0){var P=la,M=e;switch(e){case"keypress":if(Sn(t)===0)break e;case"keydown":case"keyup":P=ah;break;case"focusin":M="focus",P=pa;break;case"focusout":M="blur",P=pa;break;case"beforeblur":case"afterblur":P=pa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Yu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=ch;break;case yc:case jc:case Nc:P=Xu;break;case bc:P=ph;break;case"scroll":P=Gu;break;case"wheel":P=hh;break;case"copy":case"cut":case"paste":P=Ju;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=rc}var R=(s&4)!==0,Re=!R&&e==="scroll",g=R?b!==null?b+"Capture":null:b;R=[];for(var x=y,v;x!==null;){v=x;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=jt(x,g),C!=null&&R.push(Ot(x,C,v)))),Re)break;x=x.return}0<R.length&&(b=new P(b,M,null,t,w),S.push({event:b,listeners:R}))}}if((s&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",b&&t!==Qo&&(M=t.relatedTarget||t.fromElement)&&(Ns(M)||M[Or]))break e;if((P||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,P?(M=t.relatedTarget||t.toElement,P=y,M=M?Ns(M):null,M!==null&&(Re=js(M),M!==Re||M.tag!==5&&M.tag!==6)&&(M=null)):(P=null,M=y),P!==M)){if(R=Jl,C="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(R=rc,C="onPointerLeave",g="onPointerEnter",x="pointer"),Re=P==null?b:Ys(P),v=M==null?b:Ys(M),b=new R(C,x+"leave",P,t,w),b.target=Re,b.relatedTarget=v,C=null,Ns(w)===y&&(R=new R(g,x+"enter",M,t,w),R.target=v,R.relatedTarget=Re,C=R),Re=C,P&&M)r:{for(R=P,g=M,x=0,v=R;v;v=Gs(v))x++;for(v=0,C=g;C;C=Gs(C))v++;for(;0<x-v;)R=Gs(R),x--;for(;0<v-x;)g=Gs(g),v--;for(;x--;){if(R===g||g!==null&&R===g.alternate)break r;R=Gs(R),g=Gs(g)}R=null}else R=null;P!==null&&zc(S,b,P,R,!1),M!==null&&Re!==null&&zc(S,Re,M,R,!0)}}e:{if(b=y?Ys(y):window,P=b.nodeName&&b.nodeName.toLowerCase(),P==="select"||P==="input"&&b.type==="file")var F=jh;else if(ic(b))if(cc)F=kh;else{F=bh;var $=Nh}else(P=b.nodeName)&&P.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(F=wh);if(F&&(F=F(e,y))){lc(S,F,t,w);break e}$&&$(e,b,y),e==="focusout"&&($=b._wrapperState)&&$.controlled&&b.type==="number"&&Uo(b,"number",b.value)}switch($=y?Ys(y):window,e){case"focusin":(ic($)||$.contentEditable==="true")&&($s=$,ga=y,Rt=null);break;case"focusout":Rt=ga=$s=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,gc(S,t,w);break;case"selectionchange":if(Th)break;case"keydown":case"keyup":gc(S,t,w)}var V;if(ha)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Hs?oc(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(sc&&t.locale!=="ko"&&(Hs||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Hs&&(V=Xl()):(es=w,ia="value"in es?es.value:es.textContent,Hs=!0)),$=_n(y,Y),0<$.length&&(Y=new ec(Y,e,null,t,w),S.push({event:Y,listeners:$}),V?Y.data=V:(V=ac(t),V!==null&&(Y.data=V)))),(V=mh?fh(e,t):gh(e,t))&&(y=_n(y,"onBeforeInput"),0<y.length&&(w=new ec("onBeforeInput","beforeinput",null,t,w),S.push({event:w,listeners:y}),w.data=V))}Cc(S,s)})}function Ot(e,s,t){return{instance:e,listener:s,currentTarget:t}}function _n(e,s){for(var t=s+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=jt(e,t),i!=null&&n.unshift(Ot(e,i,a)),i=jt(e,s),i!=null&&n.push(Ot(e,i,a))),e=e.return}return n}function Gs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zc(e,s,t,n,a){for(var i=s._reactName,d=[];t!==null&&t!==n;){var u=t,h=u.alternate,y=u.stateNode;if(h!==null&&h===n)break;u.tag===5&&y!==null&&(u=y,a?(h=jt(t,i),h!=null&&d.unshift(Ot(t,h,u))):a||(h=jt(t,i),h!=null&&d.push(Ot(t,h,u)))),t=t.return}d.length!==0&&e.push({event:s,listeners:d})}var Lh=/\r\n?/g,_h=/\u0000|\uFFFD/g;function Ic(e){return(typeof e=="string"?e:""+e).replace(Lh,`
`).replace(_h,"")}function Pn(e,s,t){if(s=Ic(s),Ic(e)!==s&&t)throw Error(l(425))}function Bn(){}var ka=null,Sa=null;function Ca(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,Bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec!="undefined"?function(e){return Ec.resolve(null).then(e).catch(Mh)}:Ta;function Mh(e){setTimeout(function(){throw e})}function za(e,s){var t=s,n=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0){e.removeChild(a),It(s);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=a}while(t);It(s)}function ss(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(s===0)return e;s--}else t==="/$"&&s++}e=e.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Mr="__reactFiber$"+Qs,At="__reactProps$"+Qs,Or="__reactContainer$"+Qs,Ia="__reactEvents$"+Qs,Rh="__reactListeners$"+Qs,Dh="__reactHandles$"+Qs;function Ns(e){var s=e[Mr];if(s)return s;for(var t=e.parentNode;t;){if(s=t[Or]||t[Mr]){if(t=s.alternate,s.child!==null||t!==null&&t.child!==null)for(e=Lc(e);e!==null;){if(t=e[Mr])return t;e=Lc(e)}return s}e=t,t=e.parentNode}return null}function Wt(e){return e=e[Mr]||e[Or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ys(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Mn(e){return e[At]||null}var Ea=[],Ks=-1;function ts(e){return{current:e}}function ke(e){0>Ks||(e.current=Ea[Ks],Ea[Ks]=null,Ks--)}function be(e,s){Ks++,Ea[Ks]=e.current,e.current=s}var ns={},Xe=ts(ns),nr=ts(!1),bs=ns;function qs(e,s){var t=e.type.contextTypes;if(!t)return ns;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===s)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=s[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),a}function or(e){return e=e.childContextTypes,e!=null}function Rn(){ke(nr),ke(Xe)}function _c(e,s,t){if(Xe.current!==ns)throw Error(l(168));be(Xe,s),be(nr,t)}function Pc(e,s,t){var n=e.stateNode;if(s=s.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var a in n)if(!(a in s))throw Error(l(108,pe(e)||"Unknown",a));return _({},t,n)}function Dn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ns,bs=Xe.current,be(Xe,e),be(nr,nr.current),!0}function Bc(e,s,t){var n=e.stateNode;if(!n)throw Error(l(169));t?(e=Pc(e,s,bs),n.__reactInternalMemoizedMergedChildContext=e,ke(nr),ke(Xe),be(Xe,e)):ke(nr),be(nr,t)}var Ar=null,Fn=!1,La=!1;function Mc(e){Ar===null?Ar=[e]:Ar.push(e)}function Fh(e){Fn=!0,Mc(e)}function os(){if(!La&&Ar!==null){La=!0;var e=0,s=ve;try{var t=Ar;for(ve=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Ar=null,Fn=!1}catch(a){throw Ar!==null&&(Ar=Ar.slice(e+1)),Dl(Jo,os),a}finally{ve=s,La=!1}}return null}var Xs=[],Zs=0,On=null,An=0,gr=[],vr=0,ws=null,Wr=1,Ur="";function ks(e,s){Xs[Zs++]=An,Xs[Zs++]=On,On=e,An=s}function Rc(e,s,t){gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=ws,ws=e;var n=Wr;e=Ur;var a=32-Sr(n)-1;n&=~(1<<a),t+=1;var i=32-Sr(s)+a;if(30<i){var d=a-a%5;i=(n&(1<<d)-1).toString(32),n>>=d,a-=d,Wr=1<<32-Sr(s)+a|t<<a|n,Ur=i+e}else Wr=1<<i|t<<a|n,Ur=e}function _a(e){e.return!==null&&(ks(e,1),Rc(e,1,0))}function Pa(e){for(;e===On;)On=Xs[--Zs],Xs[Zs]=null,An=Xs[--Zs],Xs[Zs]=null;for(;e===ws;)ws=gr[--vr],gr[vr]=null,Ur=gr[--vr],gr[vr]=null,Wr=gr[--vr],gr[vr]=null}var ur=null,hr=null,ze=!1,Tr=null;function Dc(e,s){var t=br(5,null,null,0);t.elementType="DELETED",t.stateNode=s,t.return=e,s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)}function Fc(e,s){switch(e.tag){case 5:var t=e.type;return s=s.nodeType!==1||t.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(e.stateNode=s,ur=e,hr=ss(s.firstChild),!0):!1;case 6:return s=e.pendingProps===""||s.nodeType!==3?null:s,s!==null?(e.stateNode=s,ur=e,hr=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(t=ws!==null?{id:Wr,overflow:Ur}:null,e.memoizedState={dehydrated:s,treeContext:t,retryLane:1073741824},t=br(18,null,null,0),t.stateNode=s,t.return=e,e.child=t,ur=e,hr=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(ze){var s=hr;if(s){var t=s;if(!Fc(e,s)){if(Ba(e))throw Error(l(418));s=ss(t.nextSibling);var n=ur;s&&Fc(e,s)?Dc(n,t):(e.flags=e.flags&-4097|2,ze=!1,ur=e)}}else{if(Ba(e))throw Error(l(418));e.flags=e.flags&-4097|2,ze=!1,ur=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Wn(e){if(e!==ur)return!1;if(!ze)return Oc(e),ze=!0,!1;var s;if((s=e.tag!==3)&&!(s=e.tag!==5)&&(s=e.type,s=s!=="head"&&s!=="body"&&!Ca(e.type,e.memoizedProps)),s&&(s=hr)){if(Ba(e))throw Ac(),Error(l(418));for(;s;)Dc(e,s),s=ss(s.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(s===0){hr=ss(e.nextSibling);break e}s--}else t!=="$"&&t!=="$!"&&t!=="$?"||s++}e=e.nextSibling}hr=null}}else hr=ur?ss(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=hr;e;)e=ss(e.nextSibling)}function Js(){hr=ur=null,ze=!1}function Ra(e){Tr===null?Tr=[e]:Tr.push(e)}var Oh=L.ReactCurrentBatchConfig;function Ut(e,s,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var n=t.stateNode}if(!n)throw Error(l(147,e));var a=n,i=""+e;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===i?s.ref:(s=function(d){var u=a.refs;d===null?delete u[i]:u[i]=d},s._stringRef=i,s)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Un(e,s){throw e=Object.prototype.toString.call(s),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e))}function Wc(e){var s=e._init;return s(e._payload)}function Uc(e){function s(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function t(g,x){if(!e)return null;for(;x!==null;)s(g,x),x=x.sibling;return null}function n(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function a(g,x){return g=hs(g,x),g.index=0,g.sibling=null,g}function i(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,v,C){return x===null||x.tag!==6?(x=Ti(v,g.mode,C),x.return=g,x):(x=a(x,v),x.return=g,x)}function h(g,x,v,C){var F=v.type;return F===E?w(g,x,v.props.children,C,v.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qe&&Wc(F)===x.type)?(C=a(x,v.props),C.ref=Ut(g,x,v),C.return=g,C):(C=ho(v.type,v.key,v.props,null,g.mode,C),C.ref=Ut(g,x,v),C.return=g,C)}function y(g,x,v,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=zi(v,g.mode,C),x.return=g,x):(x=a(x,v.children||[]),x.return=g,x)}function w(g,x,v,C,F){return x===null||x.tag!==7?(x=_s(v,g.mode,C,F),x.return=g,x):(x=a(x,v),x.return=g,x)}function S(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ti(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Z:return v=ho(x.type,x.key,x.props,null,g.mode,v),v.ref=Ut(g,null,x),v.return=g,v;case H:return x=zi(x,g.mode,v),x.return=g,x;case qe:var C=x._init;return S(g,C(x._payload),v)}if(gt(x)||O(x))return x=_s(x,g.mode,v,null),x.return=g,x;Un(g,x)}return null}function b(g,x,v,C){var F=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return F!==null?null:u(g,x,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return v.key===F?h(g,x,v,C):null;case H:return v.key===F?y(g,x,v,C):null;case qe:return F=v._init,b(g,x,F(v._payload),C)}if(gt(v)||O(v))return F!==null?null:w(g,x,v,C,null);Un(g,v)}return null}function P(g,x,v,C,F){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,u(x,g,""+C,F);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Z:return g=g.get(C.key===null?v:C.key)||null,h(x,g,C,F);case H:return g=g.get(C.key===null?v:C.key)||null,y(x,g,C,F);case qe:var $=C._init;return P(g,x,v,$(C._payload),F)}if(gt(C)||O(C))return g=g.get(v)||null,w(x,g,C,F,null);Un(x,C)}return null}function M(g,x,v,C){for(var F=null,$=null,V=x,Y=x=0,Ge=null;V!==null&&Y<v.length;Y++){V.index>Y?(Ge=V,V=null):Ge=V.sibling;var he=b(g,V,v[Y],C);if(he===null){V===null&&(V=Ge);break}e&&V&&he.alternate===null&&s(g,V),x=i(he,x,Y),$===null?F=he:$.sibling=he,$=he,V=Ge}if(Y===v.length)return t(g,V),ze&&ks(g,Y),F;if(V===null){for(;Y<v.length;Y++)V=S(g,v[Y],C),V!==null&&(x=i(V,x,Y),$===null?F=V:$.sibling=V,$=V);return ze&&ks(g,Y),F}for(V=n(g,V);Y<v.length;Y++)Ge=P(V,g,Y,v[Y],C),Ge!==null&&(e&&Ge.alternate!==null&&V.delete(Ge.key===null?Y:Ge.key),x=i(Ge,x,Y),$===null?F=Ge:$.sibling=Ge,$=Ge);return e&&V.forEach(function(xs){return s(g,xs)}),ze&&ks(g,Y),F}function R(g,x,v,C){var F=O(v);if(typeof F!="function")throw Error(l(150));if(v=F.call(v),v==null)throw Error(l(151));for(var $=F=null,V=x,Y=x=0,Ge=null,he=v.next();V!==null&&!he.done;Y++,he=v.next()){V.index>Y?(Ge=V,V=null):Ge=V.sibling;var xs=b(g,V,he.value,C);if(xs===null){V===null&&(V=Ge);break}e&&V&&xs.alternate===null&&s(g,V),x=i(xs,x,Y),$===null?F=xs:$.sibling=xs,$=xs,V=Ge}if(he.done)return t(g,V),ze&&ks(g,Y),F;if(V===null){for(;!he.done;Y++,he=v.next())he=S(g,he.value,C),he!==null&&(x=i(he,x,Y),$===null?F=he:$.sibling=he,$=he);return ze&&ks(g,Y),F}for(V=n(g,V);!he.done;Y++,he=v.next())he=P(V,g,Y,he.value,C),he!==null&&(e&&he.alternate!==null&&V.delete(he.key===null?Y:he.key),x=i(he,x,Y),$===null?F=he:$.sibling=he,$=he);return e&&V.forEach(function(vx){return s(g,vx)}),ze&&ks(g,Y),F}function Re(g,x,v,C){if(typeof v=="object"&&v!==null&&v.type===E&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:e:{for(var F=v.key,$=x;$!==null;){if($.key===F){if(F=v.type,F===E){if($.tag===7){t(g,$.sibling),x=a($,v.props.children),x.return=g,g=x;break e}}else if($.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qe&&Wc(F)===$.type){t(g,$.sibling),x=a($,v.props),x.ref=Ut(g,$,v),x.return=g,g=x;break e}t(g,$);break}else s(g,$);$=$.sibling}v.type===E?(x=_s(v.props.children,g.mode,C,v.key),x.return=g,g=x):(C=ho(v.type,v.key,v.props,null,g.mode,C),C.ref=Ut(g,x,v),C.return=g,g=C)}return d(g);case H:e:{for($=v.key;x!==null;){if(x.key===$)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(g,x.sibling),x=a(x,v.children||[]),x.return=g,g=x;break e}else{t(g,x);break}else s(g,x);x=x.sibling}x=zi(v,g.mode,C),x.return=g,g=x}return d(g);case qe:return $=v._init,Re(g,x,$(v._payload),C)}if(gt(v))return M(g,x,v,C);if(O(v))return R(g,x,v,C);Un(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(g,x.sibling),x=a(x,v),x.return=g,g=x):(t(g,x),x=Ti(v,g.mode,C),x.return=g,g=x),d(g)):t(g,x)}return Re}var et=Uc(!0),Hc=Uc(!1),Hn=ts(null),$n=null,rt=null,Da=null;function Fa(){Da=rt=$n=null}function Oa(e){var s=Hn.current;ke(Hn),e._currentValue=s}function Aa(e,s,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,n!==null&&(n.childLanes|=s)):n!==null&&(n.childLanes&s)!==s&&(n.childLanes|=s),e===t)break;e=e.return}}function st(e,s){$n=e,Da=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&s)!==0&&(ar=!0),e.firstContext=null)}function yr(e){var s=e._currentValue;if(Da!==e)if(e={context:e,memoizedValue:s,next:null},rt===null){if($n===null)throw Error(l(308));rt=e,$n.dependencies={lanes:0,firstContext:e}}else rt=rt.next=e;return s}var Ss=null;function Wa(e){Ss===null?Ss=[e]:Ss.push(e)}function $c(e,s,t,n){var a=s.interleaved;return a===null?(t.next=t,Wa(s)):(t.next=a.next,a.next=t),s.interleaved=t,Hr(e,n)}function Hr(e,s){e.lanes|=s;var t=e.alternate;for(t!==null&&(t.lanes|=s),t=e,e=e.return;e!==null;)e.childLanes|=s,t=e.alternate,t!==null&&(t.childLanes|=s),t=e,e=e.return;return t.tag===3?t.stateNode:null}var as=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vc(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,s){return{eventTime:e,lane:s,tag:0,payload:null,callback:null,next:null}}function is(e,s,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ue&2)!==0){var a=n.pending;return a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s,Hr(e,t)}return a=n.interleaved,a===null?(s.next=s,Wa(n)):(s.next=a.next,a.next=s),n.interleaved=s,Hr(e,t)}function Vn(e,s,t){if(s=s.updateQueue,s!==null&&(s=s.shared,(t&4194240)!==0)){var n=s.lanes;n&=e.pendingLanes,t|=n,s.lanes=t,sa(e,t)}}function Gc(e,s){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=d:i=i.next=d,t=t.next}while(t!==null);i===null?a=i=s:i=i.next=s}else a=i=s;t={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=s:e.next=s,t.lastBaseUpdate=s}function Gn(e,s,t,n){var a=e.updateQueue;as=!1;var i=a.firstBaseUpdate,d=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?i=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(i!==null){var S=a.baseState;d=0,w=y=h=null,u=i;do{var b=u.lane,P=u.eventTime;if((n&b)===b){w!==null&&(w=w.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var M=e,R=u;switch(b=s,P=t,R.tag){case 1:if(M=R.payload,typeof M=="function"){S=M.call(P,S,b);break e}S=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=R.payload,b=typeof M=="function"?M.call(P,S,b):M,b==null)break e;S=_({},S,b);break e;case 2:as=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[u]:b.push(u))}else P={eventTime:P,lane:b,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=P,h=S):w=w.next=P,d|=b;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;b=u,u=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(w===null&&(h=S),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=w,s=a.shared.interleaved,s!==null){a=s;do d|=a.lane,a=a.next;while(a!==s)}else i===null&&(a.shared.lanes=0);zs|=d,e.lanes=d,e.memoizedState=S}}function Qc(e,s,t){if(e=s.effects,s.effects=null,e!==null)for(s=0;s<e.length;s++){var n=e[s],a=n.callback;if(a!==null){if(n.callback=null,n=t,typeof a!="function")throw Error(l(191,a));a.call(n)}}}var Ht={},Rr=ts(Ht),$t=ts(Ht),Vt=ts(Ht);function Cs(e){if(e===Ht)throw Error(l(174));return e}function Ha(e,s){switch(be(Vt,s),be($t,e),be(Rr,Ht),e=s.nodeType,e){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:$o(null,"");break;default:e=e===8?s.parentNode:s,s=e.namespaceURI||null,e=e.tagName,s=$o(s,e)}ke(Rr),be(Rr,s)}function tt(){ke(Rr),ke($t),ke(Vt)}function Yc(e){Cs(Vt.current);var s=Cs(Rr.current),t=$o(s,e.type);s!==t&&(be($t,e),be(Rr,t))}function $a(e){$t.current===e&&(ke(Rr),ke($t))}var Ee=ts(0);function Qn(e){for(var s=e;s!==null;){if(s.tag===13){var t=s.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Va=[];function Ga(){for(var e=0;e<Va.length;e++)Va[e]._workInProgressVersionPrimary=null;Va.length=0}var Yn=L.ReactCurrentDispatcher,Qa=L.ReactCurrentBatchConfig,Ts=0,Le=null,We=null,$e=null,Kn=!1,Gt=!1,Qt=0,Ah=0;function Ze(){throw Error(l(321))}function Ya(e,s){if(s===null)return!1;for(var t=0;t<s.length&&t<e.length;t++)if(!Cr(e[t],s[t]))return!1;return!0}function Ka(e,s,t,n,a,i){if(Ts=i,Le=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Yn.current=e===null||e.memoizedState===null?$h:Vh,e=t(n,a),Gt){i=0;do{if(Gt=!1,Qt=0,25<=i)throw Error(l(301));i+=1,$e=We=null,s.updateQueue=null,Yn.current=Gh,e=t(n,a)}while(Gt)}if(Yn.current=Zn,s=We!==null&&We.next!==null,Ts=0,$e=We=Le=null,Kn=!1,s)throw Error(l(300));return e}function qa(){var e=Qt!==0;return Qt=0,e}function Dr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Le.memoizedState=$e=e:$e=$e.next=e,$e}function jr(){if(We===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var s=$e===null?Le.memoizedState:$e.next;if(s!==null)$e=s,We=e;else{if(e===null)throw Error(l(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},$e===null?Le.memoizedState=$e=e:$e=$e.next=e}return $e}function Yt(e,s){return typeof s=="function"?s(e):s}function Xa(e){var s=jr(),t=s.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var n=We,a=n.baseQueue,i=t.pending;if(i!==null){if(a!==null){var d=a.next;a.next=i.next,i.next=d}n.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,n=n.baseState;var u=d=null,h=null,y=i;do{var w=y.lane;if((Ts&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var S={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=S,d=n):h=h.next=S,Le.lanes|=w,zs|=w}y=y.next}while(y!==null&&y!==i);h===null?d=n:h.next=u,Cr(n,s.memoizedState)||(ar=!0),s.memoizedState=n,s.baseState=d,s.baseQueue=h,t.lastRenderedState=n}if(e=t.interleaved,e!==null){a=e;do i=a.lane,Le.lanes|=i,zs|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[s.memoizedState,t.dispatch]}function Za(e){var s=jr(),t=s.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var n=t.dispatch,a=t.pending,i=s.memoizedState;if(a!==null){t.pending=null;var d=a=a.next;do i=e(i,d.action),d=d.next;while(d!==a);Cr(i,s.memoizedState)||(ar=!0),s.memoizedState=i,s.baseQueue===null&&(s.baseState=i),t.lastRenderedState=i}return[i,n]}function Kc(){}function qc(e,s){var t=Le,n=jr(),a=s(),i=!Cr(n.memoizedState,a);if(i&&(n.memoizedState=a,ar=!0),n=n.queue,Ja(Jc.bind(null,t,n,e),[e]),n.getSnapshot!==s||i||$e!==null&&$e.memoizedState.tag&1){if(t.flags|=2048,Kt(9,Zc.bind(null,t,n,a,s),void 0,null),Ve===null)throw Error(l(349));(Ts&30)!==0||Xc(t,s,a)}return a}function Xc(e,s,t){e.flags|=16384,e={getSnapshot:s,value:t},s=Le.updateQueue,s===null?(s={lastEffect:null,stores:null},Le.updateQueue=s,s.stores=[e]):(t=s.stores,t===null?s.stores=[e]:t.push(e))}function Zc(e,s,t,n){s.value=t,s.getSnapshot=n,ed(s)&&rd(e)}function Jc(e,s,t){return t(function(){ed(s)&&rd(e)})}function ed(e){var s=e.getSnapshot;e=e.value;try{var t=s();return!Cr(e,t)}catch{return!0}}function rd(e){var s=Hr(e,1);s!==null&&Lr(s,e,1,-1)}function sd(e){var s=Dr();return typeof e=="function"&&(e=e()),s.memoizedState=s.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},s.queue=e,e=e.dispatch=Hh.bind(null,Le,e),[s.memoizedState,e]}function Kt(e,s,t,n){return e={tag:e,create:s,destroy:t,deps:n,next:null},s=Le.updateQueue,s===null?(s={lastEffect:null,stores:null},Le.updateQueue=s,s.lastEffect=e.next=e):(t=s.lastEffect,t===null?s.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,s.lastEffect=e)),e}function td(){return jr().memoizedState}function qn(e,s,t,n){var a=Dr();Le.flags|=e,a.memoizedState=Kt(1|s,t,void 0,n===void 0?null:n)}function Xn(e,s,t,n){var a=jr();n=n===void 0?null:n;var i=void 0;if(We!==null){var d=We.memoizedState;if(i=d.destroy,n!==null&&Ya(n,d.deps)){a.memoizedState=Kt(s,t,i,n);return}}Le.flags|=e,a.memoizedState=Kt(1|s,t,i,n)}function nd(e,s){return qn(8390656,8,e,s)}function Ja(e,s){return Xn(2048,8,e,s)}function od(e,s){return Xn(4,2,e,s)}function ad(e,s){return Xn(4,4,e,s)}function id(e,s){if(typeof s=="function")return e=e(),s(e),function(){s(null)};if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function ld(e,s,t){return t=t!=null?t.concat([e]):null,Xn(4,4,id.bind(null,s,e),t)}function ei(){}function cd(e,s){var t=jr();s=s===void 0?null:s;var n=t.memoizedState;return n!==null&&s!==null&&Ya(s,n[1])?n[0]:(t.memoizedState=[e,s],e)}function dd(e,s){var t=jr();s=s===void 0?null:s;var n=t.memoizedState;return n!==null&&s!==null&&Ya(s,n[1])?n[0]:(e=e(),t.memoizedState=[e,s],e)}function pd(e,s,t){return(Ts&21)===0?(e.baseState&&(e.baseState=!1,ar=!0),e.memoizedState=t):(Cr(t,s)||(t=Wl(),Le.lanes|=t,zs|=t,e.baseState=!0),s)}function Wh(e,s){var t=ve;ve=t!==0&&4>t?t:4,e(!0);var n=Qa.transition;Qa.transition={};try{e(!1),s()}finally{ve=t,Qa.transition=n}}function ud(){return jr().memoizedState}function Uh(e,s,t){var n=ps(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},hd(e))xd(s,t);else if(t=$c(e,s,t,n),t!==null){var a=tr();Lr(t,e,n,a),md(t,s,n)}}function Hh(e,s,t){var n=ps(e),a={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(hd(e))xd(s,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=s.lastRenderedReducer,i!==null))try{var d=s.lastRenderedState,u=i(d,t);if(a.hasEagerState=!0,a.eagerState=u,Cr(u,d)){var h=s.interleaved;h===null?(a.next=a,Wa(s)):(a.next=h.next,h.next=a),s.interleaved=a;return}}catch{}finally{}t=$c(e,s,a,n),t!==null&&(a=tr(),Lr(t,e,n,a),md(t,s,n))}}function hd(e){var s=e.alternate;return e===Le||s!==null&&s===Le}function xd(e,s){Gt=Kn=!0;var t=e.pending;t===null?s.next=s:(s.next=t.next,t.next=s),e.pending=s}function md(e,s,t){if((t&4194240)!==0){var n=s.lanes;n&=e.pendingLanes,t|=n,s.lanes=t,sa(e,t)}}var Zn={readContext:yr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},$h={readContext:yr,useCallback:function(e,s){return Dr().memoizedState=[e,s===void 0?null:s],e},useContext:yr,useEffect:nd,useImperativeHandle:function(e,s,t){return t=t!=null?t.concat([e]):null,qn(4194308,4,id.bind(null,s,e),t)},useLayoutEffect:function(e,s){return qn(4194308,4,e,s)},useInsertionEffect:function(e,s){return qn(4,2,e,s)},useMemo:function(e,s){var t=Dr();return s=s===void 0?null:s,e=e(),t.memoizedState=[e,s],e},useReducer:function(e,s,t){var n=Dr();return s=t!==void 0?t(s):s,n.memoizedState=n.baseState=s,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=Uh.bind(null,Le,e),[n.memoizedState,e]},useRef:function(e){var s=Dr();return e={current:e},s.memoizedState=e},useState:sd,useDebugValue:ei,useDeferredValue:function(e){return Dr().memoizedState=e},useTransition:function(){var e=sd(!1),s=e[0];return e=Wh.bind(null,e[1]),Dr().memoizedState=e,[s,e]},useMutableSource:function(){},useSyncExternalStore:function(e,s,t){var n=Le,a=Dr();if(ze){if(t===void 0)throw Error(l(407));t=t()}else{if(t=s(),Ve===null)throw Error(l(349));(Ts&30)!==0||Xc(n,s,t)}a.memoizedState=t;var i={value:t,getSnapshot:s};return a.queue=i,nd(Jc.bind(null,n,i,e),[e]),n.flags|=2048,Kt(9,Zc.bind(null,n,i,t,s),void 0,null),t},useId:function(){var e=Dr(),s=Ve.identifierPrefix;if(ze){var t=Ur,n=Wr;t=(n&~(1<<32-Sr(n)-1)).toString(32)+t,s=":"+s+"R"+t,t=Qt++,0<t&&(s+="H"+t.toString(32)),s+=":"}else t=Ah++,s=":"+s+"r"+t.toString(32)+":";return e.memoizedState=s},unstable_isNewReconciler:!1},Vh={readContext:yr,useCallback:cd,useContext:yr,useEffect:Ja,useImperativeHandle:ld,useInsertionEffect:od,useLayoutEffect:ad,useMemo:dd,useReducer:Xa,useRef:td,useState:function(){return Xa(Yt)},useDebugValue:ei,useDeferredValue:function(e){var s=jr();return pd(s,We.memoizedState,e)},useTransition:function(){var e=Xa(Yt)[0],s=jr().memoizedState;return[e,s]},useMutableSource:Kc,useSyncExternalStore:qc,useId:ud,unstable_isNewReconciler:!1},Gh={readContext:yr,useCallback:cd,useContext:yr,useEffect:Ja,useImperativeHandle:ld,useInsertionEffect:od,useLayoutEffect:ad,useMemo:dd,useReducer:Za,useRef:td,useState:function(){return Za(Yt)},useDebugValue:ei,useDeferredValue:function(e){var s=jr();return We===null?s.memoizedState=e:pd(s,We.memoizedState,e)},useTransition:function(){var e=Za(Yt)[0],s=jr().memoizedState;return[e,s]},useMutableSource:Kc,useSyncExternalStore:qc,useId:ud,unstable_isNewReconciler:!1};function zr(e,s){if(e&&e.defaultProps){s=_({},s),e=e.defaultProps;for(var t in e)s[t]===void 0&&(s[t]=e[t]);return s}return s}function ri(e,s,t,n){s=e.memoizedState,t=t(n,s),t=t==null?s:_({},s,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Jn={isMounted:function(e){return(e=e._reactInternals)?js(e)===e:!1},enqueueSetState:function(e,s,t){e=e._reactInternals;var n=tr(),a=ps(e),i=$r(n,a);i.payload=s,t!=null&&(i.callback=t),s=is(e,i,a),s!==null&&(Lr(s,e,a,n),Vn(s,e,a))},enqueueReplaceState:function(e,s,t){e=e._reactInternals;var n=tr(),a=ps(e),i=$r(n,a);i.tag=1,i.payload=s,t!=null&&(i.callback=t),s=is(e,i,a),s!==null&&(Lr(s,e,a,n),Vn(s,e,a))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var t=tr(),n=ps(e),a=$r(t,n);a.tag=2,s!=null&&(a.callback=s),s=is(e,a,n),s!==null&&(Lr(s,e,n,t),Vn(s,e,n))}};function fd(e,s,t,n,a,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,d):s.prototype&&s.prototype.isPureReactComponent?!Mt(t,n)||!Mt(a,i):!0}function gd(e,s,t){var n=!1,a=ns,i=s.contextType;return typeof i=="object"&&i!==null?i=yr(i):(a=or(s)?bs:Xe.current,n=s.contextTypes,i=(n=n!=null)?qs(e,a):ns),s=new s(t,i),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Jn,e.stateNode=s,s._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),s}function vd(e,s,t,n){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(t,n),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(t,n),s.state!==e&&Jn.enqueueReplaceState(s,s.state,null)}function si(e,s,t,n){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Ua(e);var i=s.contextType;typeof i=="object"&&i!==null?a.context=yr(i):(i=or(s)?bs:Xe.current,a.context=qs(e,i)),a.state=e.memoizedState,i=s.getDerivedStateFromProps,typeof i=="function"&&(ri(e,s,i,t),a.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&Jn.enqueueReplaceState(a,a.state,null),Gn(e,t,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,s){try{var t="",n=s;do t+=ie(n),n=n.return;while(n);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:s,stack:a,digest:null}}function ti(e,s,t){return{value:e,source:null,stack:t!=null?t:null,digest:s!=null?s:null}}function ni(e,s){try{console.error(s.value)}catch(t){setTimeout(function(){throw t})}}var Qh=typeof WeakMap=="function"?WeakMap:Map;function yd(e,s,t){t=$r(-1,t),t.tag=3,t.payload={element:null};var n=s.value;return t.callback=function(){ao||(ao=!0,yi=n),ni(e,s)},t}function jd(e,s,t){t=$r(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=s.value;t.payload=function(){return n(a)},t.callback=function(){ni(e,s)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ni(e,s),typeof n!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})}),t}function Nd(e,s,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Qh;var a=new Set;n.set(s,a)}else a=n.get(s),a===void 0&&(a=new Set,n.set(s,a));a.has(t)||(a.add(t),e=ix.bind(null,e,s,t),s.then(e,e))}function bd(e){do{var s;if((s=e.tag===13)&&(s=e.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return e;e=e.return}while(e!==null);return null}function wd(e,s,t,n,a){return(e.mode&1)===0?(e===s?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(s=$r(-1,1),s.tag=2,is(t,s,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Yh=L.ReactCurrentOwner,ar=!1;function sr(e,s,t,n){s.child=e===null?Hc(s,null,t,n):et(s,e.child,t,n)}function kd(e,s,t,n,a){t=t.render;var i=s.ref;return st(s,a),n=Ka(e,s,t,n,i,a),t=qa(),e!==null&&!ar?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~a,Vr(e,s,a)):(ze&&t&&_a(s),s.flags|=1,sr(e,s,n,a),s.child)}function Sd(e,s,t,n,a){if(e===null){var i=t.type;return typeof i=="function"&&!Ci(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(s.tag=15,s.type=i,Cd(e,s,i,n,a)):(e=ho(t.type,null,n,s,s.mode,a),e.ref=s.ref,e.return=s,s.child=e)}if(i=e.child,(e.lanes&a)===0){var d=i.memoizedProps;if(t=t.compare,t=t!==null?t:Mt,t(d,n)&&e.ref===s.ref)return Vr(e,s,a)}return s.flags|=1,e=hs(i,n),e.ref=s.ref,e.return=s,s.child=e}function Cd(e,s,t,n,a){if(e!==null){var i=e.memoizedProps;if(Mt(i,n)&&e.ref===s.ref)if(ar=!1,s.pendingProps=n=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ar=!0);else return s.lanes=e.lanes,Vr(e,s,a)}return oi(e,s,t,n,a)}function Td(e,s,t){var n=s.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(at,xr),xr|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:e,cachePool:null,transitions:null},s.updateQueue=null,be(at,xr),xr|=e,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:t,be(at,xr),xr|=n}else i!==null?(n=i.baseLanes|t,s.memoizedState=null):n=t,be(at,xr),xr|=n;return sr(e,s,a,t),s.child}function zd(e,s){var t=s.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(s.flags|=512,s.flags|=2097152)}function oi(e,s,t,n,a){var i=or(t)?bs:Xe.current;return i=qs(s,i),st(s,a),t=Ka(e,s,t,n,i,a),n=qa(),e!==null&&!ar?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~a,Vr(e,s,a)):(ze&&n&&_a(s),s.flags|=1,sr(e,s,t,a),s.child)}function Id(e,s,t,n,a){if(or(t)){var i=!0;Dn(s)}else i=!1;if(st(s,a),s.stateNode===null)ro(e,s),gd(s,t,n),si(s,t,n,a),n=!0;else if(e===null){var d=s.stateNode,u=s.memoizedProps;d.props=u;var h=d.context,y=t.contextType;typeof y=="object"&&y!==null?y=yr(y):(y=or(t)?bs:Xe.current,y=qs(s,y));var w=t.getDerivedStateFromProps,S=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==n||h!==y)&&vd(s,d,n,y),as=!1;var b=s.memoizedState;d.state=b,Gn(s,n,d,a),h=s.memoizedState,u!==n||b!==h||nr.current||as?(typeof w=="function"&&(ri(s,t,w,n),h=s.memoizedState),(u=as||fd(s,t,u,n,b,h,y))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=n,s.memoizedState=h),d.props=n,d.state=h,d.context=y,n=u):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),n=!1)}else{d=s.stateNode,Vc(e,s),u=s.memoizedProps,y=s.type===s.elementType?u:zr(s.type,u),d.props=y,S=s.pendingProps,b=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=yr(h):(h=or(t)?bs:Xe.current,h=qs(s,h));var P=t.getDerivedStateFromProps;(w=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==S||b!==h)&&vd(s,d,n,h),as=!1,b=s.memoizedState,d.state=b,Gn(s,n,d,a);var M=s.memoizedState;u!==S||b!==M||nr.current||as?(typeof P=="function"&&(ri(s,t,P,n),M=s.memoizedState),(y=as||fd(s,t,y,n,b,M,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,M,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,M,h)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=1024),s.memoizedProps=n,s.memoizedState=M),d.props=n,d.state=M,d.context=h,n=y):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(s.flags|=1024),n=!1)}return ai(e,s,t,n,i,a)}function ai(e,s,t,n,a,i){zd(e,s);var d=(s.flags&128)!==0;if(!n&&!d)return a&&Bc(s,t,!1),Vr(e,s,i);n=s.stateNode,Yh.current=s;var u=d&&typeof t.getDerivedStateFromError!="function"?null:n.render();return s.flags|=1,e!==null&&d?(s.child=et(s,e.child,null,i),s.child=et(s,null,u,i)):sr(e,s,u,i),s.memoizedState=n.state,a&&Bc(s,t,!0),s.child}function Ed(e){var s=e.stateNode;s.pendingContext?_c(e,s.pendingContext,s.pendingContext!==s.context):s.context&&_c(e,s.context,!1),Ha(e,s.containerInfo)}function Ld(e,s,t,n,a){return Js(),Ra(a),s.flags|=256,sr(e,s,t,n),s.child}var ii={dehydrated:null,treeContext:null,retryLane:0};function li(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,s,t){var n=s.pendingProps,a=Ee.current,i=!1,d=(s.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(i=!0,s.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),be(Ee,a&1),e===null)return Ma(s),e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((s.mode&1)===0?s.lanes=1:e.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(d=n.children,e=n.fallback,i?(n=s.mode,i=s.child,d={mode:"hidden",children:d},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=d):i=xo(d,n,0,null),e=_s(e,n,t,null),i.return=s,e.return=s,i.sibling=e,s.child=i,s.child.memoizedState=li(t),s.memoizedState=ii,e):ci(s,d));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Kh(e,s,d,n,u,a,t);if(i){i=n.fallback,d=s.mode,a=e.child,u=a.sibling;var h={mode:"hidden",children:n.children};return(d&1)===0&&s.child!==a?(n=s.child,n.childLanes=0,n.pendingProps=h,s.deletions=null):(n=hs(a,h),n.subtreeFlags=a.subtreeFlags&14680064),u!==null?i=hs(u,i):(i=_s(i,d,t,null),i.flags|=2),i.return=s,n.return=s,n.sibling=i,s.child=n,n=i,i=s.child,d=e.child.memoizedState,d=d===null?li(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},i.memoizedState=d,i.childLanes=e.childLanes&~t,s.memoizedState=ii,n}return i=e.child,e=i.sibling,n=hs(i,{mode:"visible",children:n.children}),(s.mode&1)===0&&(n.lanes=t),n.return=s,n.sibling=null,e!==null&&(t=s.deletions,t===null?(s.deletions=[e],s.flags|=16):t.push(e)),s.child=n,s.memoizedState=null,n}function ci(e,s){return s=xo({mode:"visible",children:s},e.mode,0,null),s.return=e,e.child=s}function eo(e,s,t,n){return n!==null&&Ra(n),et(s,e.child,null,t),e=ci(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Kh(e,s,t,n,a,i,d){if(t)return s.flags&256?(s.flags&=-257,n=ti(Error(l(422))),eo(e,s,d,n)):s.memoizedState!==null?(s.child=e.child,s.flags|=128,null):(i=n.fallback,a=s.mode,n=xo({mode:"visible",children:n.children},a,0,null),i=_s(i,a,d,null),i.flags|=2,n.return=s,i.return=s,n.sibling=i,s.child=n,(s.mode&1)!==0&&et(s,e.child,null,d),s.child.memoizedState=li(d),s.memoizedState=ii,i);if((s.mode&1)===0)return eo(e,s,d,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var u=n.dgst;return n=u,i=Error(l(419)),n=ti(i,n,void 0),eo(e,s,d,n)}if(u=(d&e.childLanes)!==0,ar||u){if(n=Ve,n!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|d))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Hr(e,a),Lr(n,e,a,-1))}return Si(),n=ti(Error(l(421))),eo(e,s,d,n)}return a.data==="$?"?(s.flags|=128,s.child=e.child,s=lx.bind(null,e),a._reactRetry=s,null):(e=i.treeContext,hr=ss(a.nextSibling),ur=s,ze=!0,Tr=null,e!==null&&(gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=ws,Wr=e.id,Ur=e.overflow,ws=s),s=ci(s,n.children),s.flags|=4096,s)}function Pd(e,s,t){e.lanes|=s;var n=e.alternate;n!==null&&(n.lanes|=s),Aa(e.return,s,t)}function di(e,s,t,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:a}:(i.isBackwards=s,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=t,i.tailMode=a)}function Bd(e,s,t){var n=s.pendingProps,a=n.revealOrder,i=n.tail;if(sr(e,s,n.children,t),n=Ee.current,(n&2)!==0)n=n&1|2,s.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,t,s);else if(e.tag===19)Pd(e,t,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Ee,n),(s.mode&1)===0)s.memoizedState=null;else switch(a){case"forwards":for(t=s.child,a=null;t!==null;)e=t.alternate,e!==null&&Qn(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=s.child,s.child=null):(a=t.sibling,t.sibling=null),di(s,!1,a,t,i);break;case"backwards":for(t=null,a=s.child,s.child=null;a!==null;){if(e=a.alternate,e!==null&&Qn(e)===null){s.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}di(s,!0,t,null,i);break;case"together":di(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ro(e,s){(s.mode&1)===0&&e!==null&&(e.alternate=null,s.alternate=null,s.flags|=2)}function Vr(e,s,t){if(e!==null&&(s.dependencies=e.dependencies),zs|=s.lanes,(t&s.childLanes)===0)return null;if(e!==null&&s.child!==e.child)throw Error(l(153));if(s.child!==null){for(e=s.child,t=hs(e,e.pendingProps),s.child=t,t.return=s;e.sibling!==null;)e=e.sibling,t=t.sibling=hs(e,e.pendingProps),t.return=s;t.sibling=null}return s.child}function qh(e,s,t){switch(s.tag){case 3:Ed(s),Js();break;case 5:Yc(s);break;case 1:or(s.type)&&Dn(s);break;case 4:Ha(s,s.stateNode.containerInfo);break;case 10:var n=s.type._context,a=s.memoizedProps.value;be(Hn,n._currentValue),n._currentValue=a;break;case 13:if(n=s.memoizedState,n!==null)return n.dehydrated!==null?(be(Ee,Ee.current&1),s.flags|=128,null):(t&s.child.childLanes)!==0?_d(e,s,t):(be(Ee,Ee.current&1),e=Vr(e,s,t),e!==null?e.sibling:null);be(Ee,Ee.current&1);break;case 19:if(n=(t&s.childLanes)!==0,(e.flags&128)!==0){if(n)return Bd(e,s,t);s.flags|=128}if(a=s.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Ee,Ee.current),n)break;return null;case 22:case 23:return s.lanes=0,Td(e,s,t)}return Vr(e,s,t)}var Md,pi,Rd,Dd;Md=function(e,s){for(var t=s.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break;for(;t.sibling===null;){if(t.return===null||t.return===s)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},pi=function(){},Rd=function(e,s,t,n){var a=e.memoizedProps;if(a!==n){e=s.stateNode,Cs(Rr.current);var i=null;switch(t){case"input":a=Ao(e,a),n=Ao(e,n),i=[];break;case"select":a=_({},a,{value:void 0}),n=_({},n,{value:void 0}),i=[];break;case"textarea":a=Ho(e,a),n=Ho(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Bn)}Vo(t,n);var d;t=null;for(y in a)if(!n.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var u=a[y];for(d in u)u.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in n){var h=n[y];if(u=a!=null?a[y]:void 0,n.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(i||(i=[]),i.push(y,t)),t=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(i=i||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&we("scroll",e),i||u===h||(i=[])):(i=i||[]).push(y,h))}t&&(i=i||[]).push("style",t);var y=i;(s.updateQueue=y)&&(s.flags|=4)}},Dd=function(e,s,t,n){t!==n&&(s.flags|=4)};function qt(e,s){if(!ze)switch(e.tailMode){case"hidden":s=e.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Je(e){var s=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(s)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=t,s}function Xh(e,s,t){var n=s.pendingProps;switch(Pa(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(s),null;case 1:return or(s.type)&&Rn(),Je(s),null;case 3:return n=s.stateNode,tt(),ke(nr),ke(Xe),Ga(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wn(s)?s.flags|=4:e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Tr!==null&&(bi(Tr),Tr=null))),pi(e,s),Je(s),null;case 5:$a(s);var a=Cs(Vt.current);if(t=s.type,e!==null&&s.stateNode!=null)Rd(e,s,t,n,a),e.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!n){if(s.stateNode===null)throw Error(l(166));return Je(s),null}if(e=Cs(Rr.current),Wn(s)){n=s.stateNode,t=s.type;var i=s.memoizedProps;switch(n[Mr]=s,n[At]=i,e=(s.mode&1)!==0,t){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<Dt.length;a++)we(Dt[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":gl(n,i),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},we("invalid",n);break;case"textarea":jl(n,i),we("invalid",n)}Vo(t,i),a=null;for(var d in i)if(i.hasOwnProperty(d)){var u=i[d];d==="children"?typeof u=="string"?n.textContent!==u&&(i.suppressHydrationWarning!==!0&&Pn(n.textContent,u,e),a=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Pn(n.textContent,u,e),a=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&we("scroll",n)}switch(t){case"input":Kr(n),yl(n,i,!0);break;case"textarea":Kr(n),bl(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Bn)}n=a,s.updateQueue=n,n!==null&&(s.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(t,{is:n.is}):(e=d.createElement(t),t==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,t),e[Mr]=s,e[At]=n,Md(e,s,!1,!1),s.stateNode=e;e:{switch(d=Go(t,n),t){case"dialog":we("cancel",e),we("close",e),a=n;break;case"iframe":case"object":case"embed":we("load",e),a=n;break;case"video":case"audio":for(a=0;a<Dt.length;a++)we(Dt[a],e);a=n;break;case"source":we("error",e),a=n;break;case"img":case"image":case"link":we("error",e),we("load",e),a=n;break;case"details":we("toggle",e),a=n;break;case"input":gl(e,n),a=Ao(e,n),we("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=_({},n,{value:void 0}),we("invalid",e);break;case"textarea":jl(e,n),a=Ho(e,n),we("invalid",e);break;default:a=n}Vo(t,a),u=a;for(i in u)if(u.hasOwnProperty(i)){var h=u[i];i==="style"?Cl(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&kl(e,h)):i==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&vt(e,h):typeof h=="number"&&vt(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(m.hasOwnProperty(i)?h!=null&&i==="onScroll"&&we("scroll",e):h!=null&&te(e,i,h,d))}switch(t){case"input":Kr(e),yl(e,n,!1);break;case"textarea":Kr(e),bl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ce(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Fs(e,!!n.multiple,i,!1):n.defaultValue!=null&&Fs(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Bn)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Je(s),null;case 6:if(e&&s.stateNode!=null)Dd(e,s,e.memoizedProps,n);else{if(typeof n!="string"&&s.stateNode===null)throw Error(l(166));if(t=Cs(Vt.current),Cs(Rr.current),Wn(s)){if(n=s.stateNode,t=s.memoizedProps,n[Mr]=s,(i=n.nodeValue!==t)&&(e=ur,e!==null))switch(e.tag){case 3:Pn(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pn(n.nodeValue,t,(e.mode&1)!==0)}i&&(s.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Mr]=s,s.stateNode=n}return Je(s),null;case 13:if(ke(Ee),n=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&hr!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ac(),Js(),s.flags|=98560,i=!1;else if(i=Wn(s),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=s.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[Mr]=s}else Js(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Je(s),i=!1}else Tr!==null&&(bi(Tr),Tr=null),i=!0;if(!i)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=t,s):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(s.child.flags|=8192,(s.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ue===0&&(Ue=3):Si())),s.updateQueue!==null&&(s.flags|=4),Je(s),null);case 4:return tt(),pi(e,s),e===null&&Ft(s.stateNode.containerInfo),Je(s),null;case 10:return Oa(s.type._context),Je(s),null;case 17:return or(s.type)&&Rn(),Je(s),null;case 19:if(ke(Ee),i=s.memoizedState,i===null)return Je(s),null;if(n=(s.flags&128)!==0,d=i.rendering,d===null)if(n)qt(i,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(d=Qn(e),d!==null){for(s.flags|=128,qt(i,!1),n=d.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),s.subtreeFlags=0,n=t,t=s.child;t!==null;)i=t,e=n,i.flags&=14680066,d=i.alternate,d===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=d.childLanes,i.lanes=d.lanes,i.child=d.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=d.memoizedProps,i.memoizedState=d.memoizedState,i.updateQueue=d.updateQueue,i.type=d.type,e=d.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return be(Ee,Ee.current&1|2),s.child}e=e.sibling}i.tail!==null&&Me()>it&&(s.flags|=128,n=!0,qt(i,!1),s.lanes=4194304)}else{if(!n)if(e=Qn(d),e!==null){if(s.flags|=128,n=!0,t=e.updateQueue,t!==null&&(s.updateQueue=t,s.flags|=4),qt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!ze)return Je(s),null}else 2*Me()-i.renderingStartTime>it&&t!==1073741824&&(s.flags|=128,n=!0,qt(i,!1),s.lanes=4194304);i.isBackwards?(d.sibling=s.child,s.child=d):(t=i.last,t!==null?t.sibling=d:s.child=d,i.last=d)}return i.tail!==null?(s=i.tail,i.rendering=s,i.tail=s.sibling,i.renderingStartTime=Me(),s.sibling=null,t=Ee.current,be(Ee,n?t&1|2:t&1),s):(Je(s),null);case 22:case 23:return ki(),n=s.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(s.flags|=8192),n&&(s.mode&1)!==0?(xr&1073741824)!==0&&(Je(s),s.subtreeFlags&6&&(s.flags|=8192)):Je(s),null;case 24:return null;case 25:return null}throw Error(l(156,s.tag))}function Zh(e,s){switch(Pa(s),s.tag){case 1:return or(s.type)&&Rn(),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return tt(),ke(nr),ke(Xe),Ga(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 5:return $a(s),null;case 13:if(ke(Ee),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(l(340));Js()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return ke(Ee),null;case 4:return tt(),null;case 10:return Oa(s.type._context),null;case 22:case 23:return ki(),null;case 24:return null;default:return null}}var so=!1,er=!1,Jh=typeof WeakSet=="function"?WeakSet:Set,B=null;function ot(e,s){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Pe(e,s,n)}else t.current=null}function ui(e,s,t){try{t()}catch(n){Pe(e,s,n)}}var Fd=!1;function ex(e,s){if(ka=bn,e=fc(),fa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var d=0,u=-1,h=-1,y=0,w=0,S=e,b=null;r:for(;;){for(var P;S!==t||a!==0&&S.nodeType!==3||(u=d+a),S!==i||n!==0&&S.nodeType!==3||(h=d+n),S.nodeType===3&&(d+=S.nodeValue.length),(P=S.firstChild)!==null;)b=S,S=P;for(;;){if(S===e)break r;if(b===t&&++y===a&&(u=d),b===i&&++w===n&&(h=d),(P=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=P}t=u===-1||h===-1?null:{start:u,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sa={focusedElem:e,selectionRange:t},bn=!1,B=s;B!==null;)if(s=B,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,B=e;else for(;B!==null;){s=B;try{var M=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var R=M.memoizedProps,Re=M.memoizedState,g=s.stateNode,x=g.getSnapshotBeforeUpdate(s.elementType===s.type?R:zr(s.type,R),Re);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=s.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Pe(s,s.return,C)}if(e=s.sibling,e!==null){e.return=s.return,B=e;break}B=s.return}return M=Fd,Fd=!1,M}function Xt(e,s,t){var n=s.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&ui(s,t,i)}a=a.next}while(a!==n)}}function to(e,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var t=s=s.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==s)}}function hi(e){var s=e.ref;if(s!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof s=="function"?s(e):s.current=e}}function Od(e){var s=e.alternate;s!==null&&(e.alternate=null,Od(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&(delete s[Mr],delete s[At],delete s[Ia],delete s[Rh],delete s[Dh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function Wd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xi(e,s,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?t.nodeType===8?t.parentNode.insertBefore(e,s):t.insertBefore(e,s):(t.nodeType===8?(s=t.parentNode,s.insertBefore(e,t)):(s=t,s.appendChild(e)),t=t._reactRootContainer,t!=null||s.onclick!==null||(s.onclick=Bn));else if(n!==4&&(e=e.child,e!==null))for(xi(e,s,t),e=e.sibling;e!==null;)xi(e,s,t),e=e.sibling}function mi(e,s,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?t.insertBefore(e,s):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(mi(e,s,t),e=e.sibling;e!==null;)mi(e,s,t),e=e.sibling}var Qe=null,Ir=!1;function ls(e,s,t){for(t=t.child;t!==null;)Ud(e,s,t),t=t.sibling}function Ud(e,s,t){if(Br&&typeof Br.onCommitFiberUnmount=="function")try{Br.onCommitFiberUnmount(fn,t)}catch{}switch(t.tag){case 5:er||ot(t,s);case 6:var n=Qe,a=Ir;Qe=null,ls(e,s,t),Qe=n,Ir=a,Qe!==null&&(Ir?(e=Qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Qe.removeChild(t.stateNode));break;case 18:Qe!==null&&(Ir?(e=Qe,t=t.stateNode,e.nodeType===8?za(e.parentNode,t):e.nodeType===1&&za(e,t),It(e)):za(Qe,t.stateNode));break;case 4:n=Qe,a=Ir,Qe=t.stateNode.containerInfo,Ir=!0,ls(e,s,t),Qe=n,Ir=a;break;case 0:case 11:case 14:case 15:if(!er&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,d=i.destroy;i=i.tag,d!==void 0&&((i&2)!==0||(i&4)!==0)&&ui(t,s,d),a=a.next}while(a!==n)}ls(e,s,t);break;case 1:if(!er&&(ot(t,s),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(u){Pe(t,s,u)}ls(e,s,t);break;case 21:ls(e,s,t);break;case 22:t.mode&1?(er=(n=er)||t.memoizedState!==null,ls(e,s,t),er=n):ls(e,s,t);break;default:ls(e,s,t)}}function Hd(e){var s=e.updateQueue;if(s!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Jh),s.forEach(function(n){var a=cx.bind(null,e,n);t.has(n)||(t.add(n),n.then(a,a))})}}function Er(e,s){var t=s.deletions;if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];try{var i=e,d=s,u=d;e:for(;u!==null;){switch(u.tag){case 5:Qe=u.stateNode,Ir=!1;break e;case 3:Qe=u.stateNode.containerInfo,Ir=!0;break e;case 4:Qe=u.stateNode.containerInfo,Ir=!0;break e}u=u.return}if(Qe===null)throw Error(l(160));Ud(i,d,a),Qe=null,Ir=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){Pe(a,s,y)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)$d(s,e),s=s.sibling}function $d(e,s){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Er(s,e),Fr(e),n&4){try{Xt(3,e,e.return),to(3,e)}catch(R){Pe(e,e.return,R)}try{Xt(5,e,e.return)}catch(R){Pe(e,e.return,R)}}break;case 1:Er(s,e),Fr(e),n&512&&t!==null&&ot(t,t.return);break;case 5:if(Er(s,e),Fr(e),n&512&&t!==null&&ot(t,t.return),e.flags&32){var a=e.stateNode;try{vt(a,"")}catch(R){Pe(e,e.return,R)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,d=t!==null?t.memoizedProps:i,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&vl(a,i),Go(u,d);var y=Go(u,i);for(d=0;d<h.length;d+=2){var w=h[d],S=h[d+1];w==="style"?Cl(a,S):w==="dangerouslySetInnerHTML"?kl(a,S):w==="children"?vt(a,S):te(a,w,S,y)}switch(u){case"input":Wo(a,i);break;case"textarea":Nl(a,i);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var P=i.value;P!=null?Fs(a,!!i.multiple,P,!1):b!==!!i.multiple&&(i.defaultValue!=null?Fs(a,!!i.multiple,i.defaultValue,!0):Fs(a,!!i.multiple,i.multiple?[]:"",!1))}a[At]=i}catch(R){Pe(e,e.return,R)}}break;case 6:if(Er(s,e),Fr(e),n&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(R){Pe(e,e.return,R)}}break;case 3:if(Er(s,e),Fr(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{It(s.containerInfo)}catch(R){Pe(e,e.return,R)}break;case 4:Er(s,e),Fr(e);break;case 13:Er(s,e),Fr(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(vi=Me())),n&4&&Hd(e);break;case 22:if(w=t!==null&&t.memoizedState!==null,e.mode&1?(er=(y=er)||w,Er(s,e),er=y):Er(s,e),Fr(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(B=e,w=e.child;w!==null;){for(S=B=w;B!==null;){switch(b=B,P=b.child,b.tag){case 0:case 11:case 14:case 15:Xt(4,b,b.return);break;case 1:ot(b,b.return);var M=b.stateNode;if(typeof M.componentWillUnmount=="function"){n=b,t=b.return;try{s=n,M.props=s.memoizedProps,M.state=s.memoizedState,M.componentWillUnmount()}catch(R){Pe(n,t,R)}}break;case 5:ot(b,b.return);break;case 22:if(b.memoizedState!==null){Qd(S);continue}}P!==null?(P.return=b,B=P):Qd(S)}w=w.sibling}e:for(w=null,S=e;;){if(S.tag===5){if(w===null){w=S;try{a=S.stateNode,y?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=Sl("display",d))}catch(R){Pe(e,e.return,R)}}}else if(S.tag===6){if(w===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(R){Pe(e,e.return,R)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;w===S&&(w=null),S=S.return}w===S&&(w=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Er(s,e),Fr(e),n&4&&Hd(e);break;case 21:break;default:Er(s,e),Fr(e)}}function Fr(e){var s=e.flags;if(s&2){try{e:{for(var t=e.return;t!==null;){if(Ad(t)){var n=t;break e}t=t.return}throw Error(l(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(vt(a,""),n.flags&=-33);var i=Wd(e);mi(e,i,a);break;case 3:case 4:var d=n.stateNode.containerInfo,u=Wd(e);xi(e,u,d);break;default:throw Error(l(161))}}catch(h){Pe(e,e.return,h)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function rx(e,s,t){B=e,Vd(e)}function Vd(e,s,t){for(var n=(e.mode&1)!==0;B!==null;){var a=B,i=a.child;if(a.tag===22&&n){var d=a.memoizedState!==null||so;if(!d){var u=a.alternate,h=u!==null&&u.memoizedState!==null||er;u=so;var y=er;if(so=d,(er=h)&&!y)for(B=a;B!==null;)d=B,h=d.child,d.tag===22&&d.memoizedState!==null?Yd(a):h!==null?(h.return=d,B=h):Yd(a);for(;i!==null;)B=i,Vd(i),i=i.sibling;B=a,so=u,er=y}Gd(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,B=i):Gd(e)}}function Gd(e){for(;B!==null;){var s=B;if((s.flags&8772)!==0){var t=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:er||to(5,s);break;case 1:var n=s.stateNode;if(s.flags&4&&!er)if(t===null)n.componentDidMount();else{var a=s.elementType===s.type?t.memoizedProps:zr(s.type,t.memoizedProps);n.componentDidUpdate(a,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=s.updateQueue;i!==null&&Qc(s,i,n);break;case 3:var d=s.updateQueue;if(d!==null){if(t=null,s.child!==null)switch(s.child.tag){case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}Qc(s,d,t)}break;case 5:var u=s.stateNode;if(t===null&&s.flags&4){t=u;var h=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var y=s.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var S=w.dehydrated;S!==null&&It(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}er||s.flags&512&&hi(s)}catch(b){Pe(s,s.return,b)}}if(s===e){B=null;break}if(t=s.sibling,t!==null){t.return=s.return,B=t;break}B=s.return}}function Qd(e){for(;B!==null;){var s=B;if(s===e){B=null;break}var t=s.sibling;if(t!==null){t.return=s.return,B=t;break}B=s.return}}function Yd(e){for(;B!==null;){var s=B;try{switch(s.tag){case 0:case 11:case 15:var t=s.return;try{to(4,s)}catch(h){Pe(s,t,h)}break;case 1:var n=s.stateNode;if(typeof n.componentDidMount=="function"){var a=s.return;try{n.componentDidMount()}catch(h){Pe(s,a,h)}}var i=s.return;try{hi(s)}catch(h){Pe(s,i,h)}break;case 5:var d=s.return;try{hi(s)}catch(h){Pe(s,d,h)}}}catch(h){Pe(s,s.return,h)}if(s===e){B=null;break}var u=s.sibling;if(u!==null){u.return=s.return,B=u;break}B=s.return}}var sx=Math.ceil,no=L.ReactCurrentDispatcher,fi=L.ReactCurrentOwner,Nr=L.ReactCurrentBatchConfig,ue=0,Ve=null,De=null,Ye=0,xr=0,at=ts(0),Ue=0,Zt=null,zs=0,oo=0,gi=0,Jt=null,ir=null,vi=0,it=1/0,Gr=null,ao=!1,yi=null,cs=null,io=!1,ds=null,lo=0,en=0,ji=null,co=-1,po=0;function tr(){return(ue&6)!==0?Me():co!==-1?co:co=Me()}function ps(e){return(e.mode&1)===0?1:(ue&2)!==0&&Ye!==0?Ye&-Ye:Oh.transition!==null?(po===0&&(po=Wl()),po):(e=ve,e!==0||(e=window.event,e=e===void 0?16:ql(e.type)),e)}function Lr(e,s,t,n){if(50<en)throw en=0,ji=null,Error(l(185));kt(e,t,n),((ue&2)===0||e!==Ve)&&(e===Ve&&((ue&2)===0&&(oo|=t),Ue===4&&us(e,Ye)),lr(e,n),t===1&&ue===0&&(s.mode&1)===0&&(it=Me()+500,Fn&&os()))}function lr(e,s){var t=e.callbackNode;Ou(e,s);var n=yn(e,e===Ve?Ye:0);if(n===0)t!==null&&Fl(t),e.callbackNode=null,e.callbackPriority=0;else if(s=n&-n,e.callbackPriority!==s){if(t!=null&&Fl(t),s===1)e.tag===0?Fh(qd.bind(null,e)):Mc(qd.bind(null,e)),Bh(function(){(ue&6)===0&&os()}),t=null;else{switch(Ul(n)){case 1:t=Jo;break;case 4:t=Ol;break;case 16:t=mn;break;case 536870912:t=Al;break;default:t=mn}t=np(t,Kd.bind(null,e))}e.callbackPriority=s,e.callbackNode=t}}function Kd(e,s){if(co=-1,po=0,(ue&6)!==0)throw Error(l(327));var t=e.callbackNode;if(lt()&&e.callbackNode!==t)return null;var n=yn(e,e===Ve?Ye:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||s)s=uo(e,n);else{s=n;var a=ue;ue|=2;var i=Zd();(Ve!==e||Ye!==s)&&(Gr=null,it=Me()+500,Es(e,s));do try{ox();break}catch(u){Xd(e,u)}while(!0);Fa(),no.current=i,ue=a,De!==null?s=0:(Ve=null,Ye=0,s=Ue)}if(s!==0){if(s===2&&(a=ea(e),a!==0&&(n=a,s=Ni(e,a))),s===1)throw t=Zt,Es(e,0),us(e,n),lr(e,Me()),t;if(s===6)us(e,n);else{if(a=e.current.alternate,(n&30)===0&&!tx(a)&&(s=uo(e,n),s===2&&(i=ea(e),i!==0&&(n=i,s=Ni(e,i))),s===1))throw t=Zt,Es(e,0),us(e,n),lr(e,Me()),t;switch(e.finishedWork=a,e.finishedLanes=n,s){case 0:case 1:throw Error(l(345));case 2:Ls(e,ir,Gr);break;case 3:if(us(e,n),(n&130023424)===n&&(s=vi+500-Me(),10<s)){if(yn(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){tr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ta(Ls.bind(null,e,ir,Gr),s);break}Ls(e,ir,Gr);break;case 4:if(us(e,n),(n&4194240)===n)break;for(s=e.eventTimes,a=-1;0<n;){var d=31-Sr(n);i=1<<d,d=s[d],d>a&&(a=d),n&=~i}if(n=a,n=Me()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*sx(n/1960))-n,10<n){e.timeoutHandle=Ta(Ls.bind(null,e,ir,Gr),n);break}Ls(e,ir,Gr);break;case 5:Ls(e,ir,Gr);break;default:throw Error(l(329))}}}return lr(e,Me()),e.callbackNode===t?Kd.bind(null,e):null}function Ni(e,s){var t=Jt;return e.current.memoizedState.isDehydrated&&(Es(e,s).flags|=256),e=uo(e,s),e!==2&&(s=ir,ir=t,s!==null&&bi(s)),e}function bi(e){ir===null?ir=e:ir.push.apply(ir,e)}function tx(e){for(var s=e;;){if(s.flags&16384){var t=s.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var a=t[n],i=a.getSnapshot;a=a.value;try{if(!Cr(i(),a))return!1}catch{return!1}}}if(t=s.child,s.subtreeFlags&16384&&t!==null)t.return=s,s=t;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function us(e,s){for(s&=~gi,s&=~oo,e.suspendedLanes|=s,e.pingedLanes&=~s,e=e.expirationTimes;0<s;){var t=31-Sr(s),n=1<<t;e[t]=-1,s&=~n}}function qd(e){if((ue&6)!==0)throw Error(l(327));lt();var s=yn(e,0);if((s&1)===0)return lr(e,Me()),null;var t=uo(e,s);if(e.tag!==0&&t===2){var n=ea(e);n!==0&&(s=n,t=Ni(e,n))}if(t===1)throw t=Zt,Es(e,0),us(e,s),lr(e,Me()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=s,Ls(e,ir,Gr),lr(e,Me()),null}function wi(e,s){var t=ue;ue|=1;try{return e(s)}finally{ue=t,ue===0&&(it=Me()+500,Fn&&os())}}function Is(e){ds!==null&&ds.tag===0&&(ue&6)===0&&lt();var s=ue;ue|=1;var t=Nr.transition,n=ve;try{if(Nr.transition=null,ve=1,e)return e()}finally{ve=n,Nr.transition=t,ue=s,(ue&6)===0&&os()}}function ki(){xr=at.current,ke(at)}function Es(e,s){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ph(t)),De!==null)for(t=De.return;t!==null;){var n=t;switch(Pa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Rn();break;case 3:tt(),ke(nr),ke(Xe),Ga();break;case 5:$a(n);break;case 4:tt();break;case 13:ke(Ee);break;case 19:ke(Ee);break;case 10:Oa(n.type._context);break;case 22:case 23:ki()}t=t.return}if(Ve=e,De=e=hs(e.current,null),Ye=xr=s,Ue=0,Zt=null,gi=oo=zs=0,ir=Jt=null,Ss!==null){for(s=0;s<Ss.length;s++)if(t=Ss[s],n=t.interleaved,n!==null){t.interleaved=null;var a=n.next,i=t.pending;if(i!==null){var d=i.next;i.next=a,n.next=d}t.pending=n}Ss=null}return e}function Xd(e,s){do{var t=De;try{if(Fa(),Yn.current=Zn,Kn){for(var n=Le.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Kn=!1}if(Ts=0,$e=We=Le=null,Gt=!1,Qt=0,fi.current=null,t===null||t.return===null){Ue=1,Zt=s,De=null;break}e:{var i=e,d=t.return,u=t,h=s;if(s=Ye,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,S=w.tag;if((w.mode&1)===0&&(S===0||S===11||S===15)){var b=w.alternate;b?(w.updateQueue=b.updateQueue,w.memoizedState=b.memoizedState,w.lanes=b.lanes):(w.updateQueue=null,w.memoizedState=null)}var P=bd(d);if(P!==null){P.flags&=-257,wd(P,d,u,i,s),P.mode&1&&Nd(i,y,s),s=P,h=y;var M=s.updateQueue;if(M===null){var R=new Set;R.add(h),s.updateQueue=R}else M.add(h);break e}else{if((s&1)===0){Nd(i,y,s),Si();break e}h=Error(l(426))}}else if(ze&&u.mode&1){var Re=bd(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),wd(Re,d,u,i,s),Ra(nt(h,u));break e}}i=h=nt(h,u),Ue!==4&&(Ue=2),Jt===null?Jt=[i]:Jt.push(i),i=d;do{switch(i.tag){case 3:i.flags|=65536,s&=-s,i.lanes|=s;var g=yd(i,h,s);Gc(i,g);break e;case 1:u=h;var x=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cs===null||!cs.has(v)))){i.flags|=65536,s&=-s,i.lanes|=s;var C=jd(i,u,s);Gc(i,C);break e}}i=i.return}while(i!==null)}ep(t)}catch(F){s=F,De===t&&t!==null&&(De=t=t.return);continue}break}while(!0)}function Zd(){var e=no.current;return no.current=Zn,e===null?Zn:e}function Si(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ve===null||(zs&268435455)===0&&(oo&268435455)===0||us(Ve,Ye)}function uo(e,s){var t=ue;ue|=2;var n=Zd();(Ve!==e||Ye!==s)&&(Gr=null,Es(e,s));do try{nx();break}catch(a){Xd(e,a)}while(!0);if(Fa(),ue=t,no.current=n,De!==null)throw Error(l(261));return Ve=null,Ye=0,Ue}function nx(){for(;De!==null;)Jd(De)}function ox(){for(;De!==null&&!Eu();)Jd(De)}function Jd(e){var s=tp(e.alternate,e,xr);e.memoizedProps=e.pendingProps,s===null?ep(e):De=s,fi.current=null}function ep(e){var s=e;do{var t=s.alternate;if(e=s.return,(s.flags&32768)===0){if(t=Xh(t,s,xr),t!==null){De=t;return}}else{if(t=Zh(t,s),t!==null){t.flags&=32767,De=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,De=null;return}}if(s=s.sibling,s!==null){De=s;return}De=s=e}while(s!==null);Ue===0&&(Ue=5)}function Ls(e,s,t){var n=ve,a=Nr.transition;try{Nr.transition=null,ve=1,ax(e,s,t,n)}finally{Nr.transition=a,ve=n}return null}function ax(e,s,t,n){do lt();while(ds!==null);if((ue&6)!==0)throw Error(l(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Au(e,i),e===Ve&&(De=Ve=null,Ye=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||io||(io=!0,np(mn,function(){return lt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=Nr.transition,Nr.transition=null;var d=ve;ve=1;var u=ue;ue|=4,fi.current=null,ex(e,t),$d(t,e),Ch(Sa),bn=!!ka,Sa=ka=null,e.current=t,rx(t),Lu(),ue=u,ve=d,Nr.transition=i}else e.current=t;if(io&&(io=!1,ds=e,lo=a),i=e.pendingLanes,i===0&&(cs=null),Bu(t.stateNode),lr(e,Me()),s!==null)for(n=e.onRecoverableError,t=0;t<s.length;t++)a=s[t],n(a.value,{componentStack:a.stack,digest:a.digest});if(ao)throw ao=!1,e=yi,yi=null,e;return(lo&1)!==0&&e.tag!==0&&lt(),i=e.pendingLanes,(i&1)!==0?e===ji?en++:(en=0,ji=e):en=0,os(),null}function lt(){if(ds!==null){var e=Ul(lo),s=Nr.transition,t=ve;try{if(Nr.transition=null,ve=16>e?16:e,ds===null)var n=!1;else{if(e=ds,ds=null,lo=0,(ue&6)!==0)throw Error(l(331));var a=ue;for(ue|=4,B=e.current;B!==null;){var i=B,d=i.child;if((B.flags&16)!==0){var u=i.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(B=y;B!==null;){var w=B;switch(w.tag){case 0:case 11:case 15:Xt(8,w,i)}var S=w.child;if(S!==null)S.return=w,B=S;else for(;B!==null;){w=B;var b=w.sibling,P=w.return;if(Od(w),w===y){B=null;break}if(b!==null){b.return=P,B=b;break}B=P}}}var M=i.alternate;if(M!==null){var R=M.child;if(R!==null){M.child=null;do{var Re=R.sibling;R.sibling=null,R=Re}while(R!==null)}}B=i}}if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,B=d;else e:for(;B!==null;){if(i=B,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Xt(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,B=g;break e}B=i.return}}var x=e.current;for(B=x;B!==null;){d=B;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,B=v;else e:for(d=x;B!==null;){if(u=B,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:to(9,u)}}catch(F){Pe(u,u.return,F)}if(u===d){B=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,B=C;break e}B=u.return}}if(ue=a,os(),Br&&typeof Br.onPostCommitFiberRoot=="function")try{Br.onPostCommitFiberRoot(fn,e)}catch{}n=!0}return n}finally{ve=t,Nr.transition=s}}return!1}function rp(e,s,t){s=nt(t,s),s=yd(e,s,1),e=is(e,s,1),s=tr(),e!==null&&(kt(e,1,s),lr(e,s))}function Pe(e,s,t){if(e.tag===3)rp(e,e,t);else for(;s!==null;){if(s.tag===3){rp(s,e,t);break}else if(s.tag===1){var n=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(cs===null||!cs.has(n))){e=nt(t,e),e=jd(s,e,1),s=is(s,e,1),e=tr(),s!==null&&(kt(s,1,e),lr(s,e));break}}s=s.return}}function ix(e,s,t){var n=e.pingCache;n!==null&&n.delete(s),s=tr(),e.pingedLanes|=e.suspendedLanes&t,Ve===e&&(Ye&t)===t&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>Me()-vi?Es(e,0):gi|=t),lr(e,s)}function sp(e,s){s===0&&((e.mode&1)===0?s=1:(s=vn,vn<<=1,(vn&130023424)===0&&(vn=4194304)));var t=tr();e=Hr(e,s),e!==null&&(kt(e,s,t),lr(e,t))}function lx(e){var s=e.memoizedState,t=0;s!==null&&(t=s.retryLane),sp(e,t)}function cx(e,s){var t=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(l(314))}n!==null&&n.delete(s),sp(e,t)}var tp;tp=function(e,s,t){if(e!==null)if(e.memoizedProps!==s.pendingProps||nr.current)ar=!0;else{if((e.lanes&t)===0&&(s.flags&128)===0)return ar=!1,qh(e,s,t);ar=(e.flags&131072)!==0}else ar=!1,ze&&(s.flags&1048576)!==0&&Rc(s,An,s.index);switch(s.lanes=0,s.tag){case 2:var n=s.type;ro(e,s),e=s.pendingProps;var a=qs(s,Xe.current);st(s,t),a=Ka(null,s,n,e,a,t);var i=qa();return s.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,or(n)?(i=!0,Dn(s)):i=!1,s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ua(s),a.updater=Jn,s.stateNode=a,a._reactInternals=s,si(s,n,e,t),s=ai(null,s,n,!0,i,t)):(s.tag=0,ze&&i&&_a(s),sr(null,s,a,t),s=s.child),s;case 16:n=s.elementType;e:{switch(ro(e,s),e=s.pendingProps,a=n._init,n=a(n._payload),s.type=n,a=s.tag=px(n),e=zr(n,e),a){case 0:s=oi(null,s,n,e,t);break e;case 1:s=Id(null,s,n,e,t);break e;case 11:s=kd(null,s,n,e,t);break e;case 14:s=Sd(null,s,n,zr(n.type,e),t);break e}throw Error(l(306,n,""))}return s;case 0:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:zr(n,a),oi(e,s,n,a,t);case 1:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:zr(n,a),Id(e,s,n,a,t);case 3:e:{if(Ed(s),e===null)throw Error(l(387));n=s.pendingProps,i=s.memoizedState,a=i.element,Vc(e,s),Gn(s,n,null,t);var d=s.memoizedState;if(n=d.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},s.updateQueue.baseState=i,s.memoizedState=i,s.flags&256){a=nt(Error(l(423)),s),s=Ld(e,s,n,t,a);break e}else if(n!==a){a=nt(Error(l(424)),s),s=Ld(e,s,n,t,a);break e}else for(hr=ss(s.stateNode.containerInfo.firstChild),ur=s,ze=!0,Tr=null,t=Hc(s,null,n,t),s.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Js(),n===a){s=Vr(e,s,t);break e}sr(e,s,n,t)}s=s.child}return s;case 5:return Yc(s),e===null&&Ma(s),n=s.type,a=s.pendingProps,i=e!==null?e.memoizedProps:null,d=a.children,Ca(n,a)?d=null:i!==null&&Ca(n,i)&&(s.flags|=32),zd(e,s),sr(e,s,d,t),s.child;case 6:return e===null&&Ma(s),null;case 13:return _d(e,s,t);case 4:return Ha(s,s.stateNode.containerInfo),n=s.pendingProps,e===null?s.child=et(s,null,n,t):sr(e,s,n,t),s.child;case 11:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:zr(n,a),kd(e,s,n,a,t);case 7:return sr(e,s,s.pendingProps,t),s.child;case 8:return sr(e,s,s.pendingProps.children,t),s.child;case 12:return sr(e,s,s.pendingProps.children,t),s.child;case 10:e:{if(n=s.type._context,a=s.pendingProps,i=s.memoizedProps,d=a.value,be(Hn,n._currentValue),n._currentValue=d,i!==null)if(Cr(i.value,d)){if(i.children===a.children&&!nr.current){s=Vr(e,s,t);break e}}else for(i=s.child,i!==null&&(i.return=s);i!==null;){var u=i.dependencies;if(u!==null){d=i.child;for(var h=u.firstContext;h!==null;){if(h.context===n){if(i.tag===1){h=$r(-1,t&-t),h.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}i.lanes|=t,h=i.alternate,h!==null&&(h.lanes|=t),Aa(i.return,t,s),u.lanes|=t;break}h=h.next}}else if(i.tag===10)d=i.type===s.type?null:i.child;else if(i.tag===18){if(d=i.return,d===null)throw Error(l(341));d.lanes|=t,u=d.alternate,u!==null&&(u.lanes|=t),Aa(d,t,s),d=i.sibling}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===s){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}sr(e,s,a.children,t),s=s.child}return s;case 9:return a=s.type,n=s.pendingProps.children,st(s,t),a=yr(a),n=n(a),s.flags|=1,sr(e,s,n,t),s.child;case 14:return n=s.type,a=zr(n,s.pendingProps),a=zr(n.type,a),Sd(e,s,n,a,t);case 15:return Cd(e,s,s.type,s.pendingProps,t);case 17:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:zr(n,a),ro(e,s),s.tag=1,or(n)?(e=!0,Dn(s)):e=!1,st(s,t),gd(s,n,a),si(s,n,a,t),ai(null,s,n,!0,e,t);case 19:return Bd(e,s,t);case 22:return Td(e,s,t)}throw Error(l(156,s.tag))};function np(e,s){return Dl(e,s)}function dx(e,s,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(e,s,t,n){return new dx(e,s,t,n)}function Ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function px(e){if(typeof e=="function")return Ci(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===rr)return 14}return 2}function hs(e,s){var t=e.alternate;return t===null?(t=br(e.tag,s,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=s,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,s=e.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ho(e,s,t,n,a,i){var d=2;if(n=e,typeof e=="function")Ci(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case E:return _s(t.children,a,i,s);case D:d=8,a|=8;break;case je:return e=br(12,t,s,a|2),e.elementType=je,e.lanes=i,e;case Te:return e=br(13,t,s,a),e.elementType=Te,e.lanes=i,e;case Ke:return e=br(19,t,s,a),e.elementType=Ke,e.lanes=i,e;case Ne:return xo(t,a,i,s);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:d=10;break e;case ae:d=9;break e;case _e:d=11;break e;case rr:d=14;break e;case qe:d=16,n=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return s=br(d,t,s,a),s.elementType=e,s.type=n,s.lanes=i,s}function _s(e,s,t,n){return e=br(7,e,n,s),e.lanes=t,e}function xo(e,s,t,n){return e=br(22,e,n,s),e.elementType=Ne,e.lanes=t,e.stateNode={isHidden:!1},e}function Ti(e,s,t){return e=br(6,e,null,s),e.lanes=t,e}function zi(e,s,t){return s=br(4,e.children!==null?e.children:[],e.key,s),s.lanes=t,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}function ux(e,s,t,n,a){this.tag=s,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ii(e,s,t,n,a,i,d,u,h){return e=new ux(e,s,t,u,h),s===1?(s=1,i===!0&&(s|=8)):s=0,i=br(3,null,null,s),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ua(i),e}function hx(e,s,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:n==null?null:""+n,children:e,containerInfo:s,implementation:t}}function op(e){if(!e)return ns;e=e._reactInternals;e:{if(js(e)!==e||e.tag!==1)throw Error(l(170));var s=e;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(or(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(or(t))return Pc(e,t,s)}return s}function ap(e,s,t,n,a,i,d,u,h){return e=Ii(t,n,!0,e,a,i,d,u,h),e.context=op(null),t=e.current,n=tr(),a=ps(t),i=$r(n,a),i.callback=s!=null?s:null,is(t,i,a),e.current.lanes=a,kt(e,a,n),lr(e,n),e}function mo(e,s,t,n){var a=s.current,i=tr(),d=ps(a);return t=op(t),s.context===null?s.context=t:s.pendingContext=t,s=$r(i,d),s.payload={element:e},n=n===void 0?null:n,n!==null&&(s.callback=n),e=is(a,s,d),e!==null&&(Lr(e,a,d,i),Vn(e,a,d)),d}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ip(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<s?t:s}}function Ei(e,s){ip(e,s),(e=e.alternate)&&ip(e,s)}function xx(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}go.prototype.render=Li.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(l(409));mo(e,s,null,null)},go.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Is(function(){mo(null,e,null,null)}),s[Or]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var s=Vl();e={blockedOn:null,target:e,priority:s};for(var t=0;t<Jr.length&&s!==0&&s<Jr[t].priority;t++);Jr.splice(t,0,e),t===0&&Yl(e)}};function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cp(){}function mx(e,s,t,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var y=fo(d);i.call(y)}}var d=ap(s,n,e,0,null,!1,!1,"",cp);return e._reactRootContainer=d,e[Or]=d.current,Ft(e.nodeType===8?e.parentNode:e),Is(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var u=n;n=function(){var y=fo(h);u.call(y)}}var h=Ii(e,0,!1,null,null,!1,!1,"",cp);return e._reactRootContainer=h,e[Or]=h.current,Ft(e.nodeType===8?e.parentNode:e),Is(function(){mo(s,h,t,n)}),h}function yo(e,s,t,n,a){var i=t._reactRootContainer;if(i){var d=i;if(typeof a=="function"){var u=a;a=function(){var h=fo(d);u.call(h)}}mo(s,d,e,a)}else d=mx(t,s,e,a,n);return fo(d)}Hl=function(e){switch(e.tag){case 3:var s=e.stateNode;if(s.current.memoizedState.isDehydrated){var t=wt(s.pendingLanes);t!==0&&(sa(s,t|1),lr(s,Me()),(ue&6)===0&&(it=Me()+500,os()))}break;case 13:Is(function(){var n=Hr(e,1);if(n!==null){var a=tr();Lr(n,e,1,a)}}),Ei(e,1)}},ta=function(e){if(e.tag===13){var s=Hr(e,134217728);if(s!==null){var t=tr();Lr(s,e,134217728,t)}Ei(e,134217728)}},$l=function(e){if(e.tag===13){var s=ps(e),t=Hr(e,s);if(t!==null){var n=tr();Lr(t,e,s,n)}Ei(e,s)}},Vl=function(){return ve},Gl=function(e,s){var t=ve;try{return ve=e,s()}finally{ve=t}},Ko=function(e,s,t){switch(s){case"input":if(Wo(e,t),s=t.name,t.type==="radio"&&s!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<t.length;s++){var n=t[s];if(n!==e&&n.form===e.form){var a=Mn(n);if(!a)throw Error(l(90));ys(n),Wo(n,a)}}}break;case"textarea":Nl(e,t);break;case"select":s=t.value,s!=null&&Fs(e,!!t.multiple,s,!1)}},El=wi,Ll=Is;var fx={usingClientEntryPoint:!1,Events:[Wt,Ys,Mn,zl,Il,wi]},rn={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gx={bundleType:rn.bundleType,version:rn.version,rendererPackageName:rn.rendererPackageName,rendererConfig:rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ml(e),e===null?null:e.stateNode},findFiberByHostInstance:rn.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{fn=jo.inject(gx),Br=jo}catch{}}return cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fx,cr.createPortal=function(e,s){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_i(s))throw Error(l(200));return hx(e,s,null,t)},cr.createRoot=function(e,s){if(!_i(e))throw Error(l(299));var t=!1,n="",a=lp;return s!=null&&(s.unstable_strictMode===!0&&(t=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onRecoverableError!==void 0&&(a=s.onRecoverableError)),s=Ii(e,1,!1,null,null,t,!1,n,a),e[Or]=s.current,Ft(e.nodeType===8?e.parentNode:e),new Li(s)},cr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ml(s),e=e===null?null:e.stateNode,e},cr.flushSync=function(e){return Is(e)},cr.hydrate=function(e,s,t){if(!vo(s))throw Error(l(200));return yo(null,e,s,!0,t)},cr.hydrateRoot=function(e,s,t){if(!_i(e))throw Error(l(405));var n=t!=null&&t.hydratedSources||null,a=!1,i="",d=lp;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),s=ap(s,null,e,1,t!=null?t:null,a,!1,i,d),e[Or]=s.current,Ft(e),n)for(e=0;e<n.length;e++)t=n[e],a=t._getVersion,a=a(t._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[t,a]:s.mutableSourceEagerHydrationData.push(t,a);return new go(s)},cr.render=function(e,s,t){if(!vo(s))throw Error(l(200));return yo(null,e,s,!1,t)},cr.unmountComponentAtNode=function(e){if(!vo(e))throw Error(l(40));return e._reactRootContainer?(Is(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Or]=null})}),!0):!1},cr.unstable_batchedUpdates=wi,cr.unstable_renderSubtreeIntoContainer=function(e,s,t,n){if(!vo(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return yo(e,s,t,!1,n)},cr.version="18.3.1-next-f1338f8080-20240426",cr}var gp;function Cx(){if(gp)return Mi.exports;gp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Mi.exports=Sx(),Mi.exports}var vp;function Tx(){if(vp)return No;vp=1;var o=Cx();return No.createRoot=o.createRoot,No.hydrateRoot=o.hydrateRoot,No}var zx=Tx(),ge=al();const fr=yx(ge);var Vp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yp=fr.createContext&&fr.createContext(Vp),Ix=["attr","size","title"];function Ex(o,c){if(o==null)return{};var l=Lx(o,c),p,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(o);for(m=0;m<j.length;m++)p=j[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(o,p)&&(l[p]=o[p])}return l}function Lx(o,c){if(o==null)return{};var l={};for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p)){if(c.indexOf(p)>=0)continue;l[p]=o[p]}return l}function zo(){return zo=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(o[p]=l[p])}return o},zo.apply(this,arguments)}function jp(o,c){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(o,m).enumerable})),l.push.apply(l,p)}return l}function Io(o){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?jp(Object(l),!0).forEach(function(p){_x(o,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):jp(Object(l)).forEach(function(p){Object.defineProperty(o,p,Object.getOwnPropertyDescriptor(l,p))})}return o}function _x(o,c,l){return c=Px(c),c in o?Object.defineProperty(o,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[c]=l,o}function Px(o){var c=Bx(o,"string");return typeof c=="symbol"?c:c+""}function Bx(o,c){if(typeof o!="object"||!o)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var p=l.call(o,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(o)}function Gp(o){return o&&o.map((c,l)=>fr.createElement(c.tag,Io({key:l},c.attr),Gp(c.child)))}function A(o){return c=>fr.createElement(Mx,zo({attr:Io({},o.attr)},c),Gp(o.child))}function Mx(o){var c=l=>{var{attr:p,size:m,title:j}=o,k=Ex(o,Ix),z=m||l.size||"1em",T;return l.className&&(T=l.className),o.className&&(T=(T?T+" ":"")+o.className),fr.createElement("svg",zo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,k,{className:T,style:Io(Io({color:o.color||l.color},l.style),o.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),j&&fr.createElement("title",null,j),o.children)};return yp!==void 0?fr.createElement(yp.Consumer,null,l=>c(l)):c(Vp)}function il(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function Qp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(o)}function Rx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"17",y1:"10",x2:"3",y2:"10"},child:[]},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"},child:[]},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"},child:[]},{tag:"line",attr:{x1:"17",y1:"18",x2:"3",y2:"18"},child:[]}]})(o)}function Np(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"},child:[]},{tag:"line",attr:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"},child:[]},{tag:"line",attr:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"},child:[]}]})(o)}function Dx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function ll(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function Oe(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function Ae(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(o)}function Yp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function q(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function Kp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(o)}function Fx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(o)}function Qi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(o)}function bo(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(o)}function Ox(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Ax(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.13 1L6 16a2 2 0 0 0 2 2h15"},child:[]},{tag:"path",attr:{d:"M1 6.13L16 6a2 2 0 0 1 2 2v15"},child:[]}]})(o)}function Fi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"22",y1:"12",x2:"18",y2:"12"},child:[]},{tag:"line",attr:{x1:"6",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"6",x2:"12",y2:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"18"},child:[]}]})(o)}function Yi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(o)}function Eo(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(o)}function Wx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 19 22 12 13 5 13 19"},child:[]},{tag:"polygon",attr:{points:"2 19 11 12 2 5 2 19"},child:[]}]})(o)}function qp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(o)}function Ux(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function Hx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"2.18",ry:"2.18"},child:[]},{tag:"line",attr:{x1:"7",y1:"2",x2:"7",y2:"22"},child:[]},{tag:"line",attr:{x1:"17",y1:"2",x2:"17",y2:"22"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"2",y1:"7",x2:"7",y2:"7"},child:[]},{tag:"line",attr:{x1:"2",y1:"17",x2:"7",y2:"17"},child:[]},{tag:"line",attr:{x1:"17",y1:"17",x2:"22",y2:"17"},child:[]},{tag:"line",attr:{x1:"17",y1:"7",x2:"22",y2:"7"},child:[]}]})(o)}function $x(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(o)}function Vx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(o)}function dt(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Xp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function Ki(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function qi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(o)}function bp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(o)}function Ce(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Xi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(o)}function wp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function kp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(o)}function Gx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function Zp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(o)}function Qx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"},child:[]}]})(o)}function Yx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Oi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(o)}function cl(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function ln(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(o)}function Kx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function qx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"10",y1:"15",x2:"10",y2:"9"},child:[]},{tag:"line",attr:{x1:"14",y1:"15",x2:"14",y2:"9"},child:[]}]})(o)}function Xx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19l7-7 3 3-7 7-3-3z"},child:[]},{tag:"path",attr:{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"},child:[]},{tag:"path",attr:{d:"M2 2l7.586 7.586"},child:[]},{tag:"circle",attr:{cx:"11",cy:"11",r:"2"},child:[]}]})(o)}function Zx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function gs(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function Ai(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(o)}function Jx(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]}]})(o)}function dl(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function Sp(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(o)}function pt(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function em(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function Zi(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function Lo(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(o)}function vs(o){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}var dr=function(){return dr=Object.assign||function(c){for(var l,p=1,m=arguments.length;p<m;p++){l=arguments[p];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},dr.apply(this,arguments)};function _o(o,c,l){if(l||arguments.length===2)for(var p=0,m=c.length,j;p<m;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return o.concat(j||Array.prototype.slice.call(c))}var Se="-ms-",on="-moz-",xe="-webkit-",Jp="comm",Mo="rule",pl="decl",rm="@import",sm="@namespace",eu="@keyframes",tm="@layer",ru=Math.abs,ul=String.fromCharCode,Ji=Object.assign;function nm(o,c){return He(o,0)^45?(((c<<2^He(o,0))<<2^He(o,1))<<2^He(o,2))<<2^He(o,3):0}function su(o){return o.trim()}function Qr(o,c){return(o=c.exec(o))?o[0]:o}function se(o,c,l){return o.replace(c,l)}function wo(o,c,l){return o.indexOf(c,l)}function He(o,c){return o.charCodeAt(c)|0}function Ds(o,c,l){return o.slice(c,l)}function _r(o){return o.length}function tu(o){return o.length}function tn(o,c){return c.push(o),o}function om(o,c){return o.map(c).join("")}function Cp(o,c){return o.filter(function(l){return!Qr(l,c)})}var Ro=1,ut=1,nu=0,wr=0,Fe=0,ft="";function Do(o,c,l,p,m,j,k,z){return{value:o,root:c,parent:l,type:p,props:m,children:j,line:Ro,column:ut,length:k,return:"",siblings:z}}function ms(o,c){return Ji(Do("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},c)}function ct(o){for(;o.root;)o=ms(o.root,{children:[o]});tn(o,o.siblings)}function am(){return Fe}function im(){return Fe=wr>0?He(ft,--wr):0,ut--,Fe===10&&(ut=1,Ro--),Fe}function Pr(){return Fe=wr<nu?He(ft,wr++):0,ut++,Fe===10&&(ut=1,Ro++),Fe}function fs(){return He(ft,wr)}function ko(){return wr}function Fo(o,c){return Ds(ft,o,c)}function cn(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lm(o){return Ro=ut=1,nu=_r(ft=o),wr=0,[]}function cm(o){return ft="",o}function Wi(o){return su(Fo(wr-1,el(o===91?o+2:o===40?o+1:o)))}function dm(o){for(;(Fe=fs())&&Fe<33;)Pr();return cn(o)>2||cn(Fe)>3?"":" "}function pm(o,c){for(;--c&&Pr()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return Fo(o,ko()+(c<6&&fs()==32&&Pr()==32))}function el(o){for(;Pr();)switch(Fe){case o:return wr;case 34:case 39:o!==34&&o!==39&&el(Fe);break;case 40:o===41&&el(o);break;case 92:Pr();break}return wr}function um(o,c){for(;Pr()&&o+Fe!==57;)if(o+Fe===84&&fs()===47)break;return"/*"+Fo(c,wr-1)+"*"+ul(o===47?o:Pr())}function hm(o){for(;!cn(fs());)Pr();return Fo(o,wr)}function xm(o){return cm(So("",null,null,null,[""],o=lm(o),0,[0],o))}function So(o,c,l,p,m,j,k,z,T){for(var K=0,G=0,W=k,J=0,le=0,X=0,U=1,Q=1,me=1,de=0,te="",L=m,Z=j,H=p,E=te;Q;)switch(X=de,de=Pr()){case 40:if(X!=108&&He(E,W-1)==58){wo(E+=se(Wi(de),"&","&\f"),"&\f",ru(K?z[K-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:E+=Wi(de);break;case 9:case 10:case 13:case 32:E+=dm(X);break;case 92:E+=pm(ko()-1,7);continue;case 47:switch(fs()){case 42:case 47:tn(mm(um(Pr(),ko()),c,l,T),T),(cn(X||1)==5||cn(fs()||1)==5)&&_r(E)&&Ds(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*U:z[K++]=_r(E)*me;case 125*U:case 59:case 0:switch(de){case 0:case 125:Q=0;case 59+G:me==-1&&(E=se(E,/\f/g,"")),le>0&&(_r(E)-W||U===0&&X===47)&&tn(le>32?zp(E+";",p,l,W-1,T):zp(se(E," ","")+";",p,l,W-2,T),T);break;case 59:E+=";";default:if(tn(H=Tp(E,c,l,K,G,m,z,te,L=[],Z=[],W,j),j),de===123)if(G===0)So(E,c,H,H,L,j,W,z,Z);else{switch(J){case 99:if(He(E,3)===110)break;case 108:if(He(E,2)===97)break;default:G=0;case 100:case 109:case 115:}G?So(o,H,H,p&&tn(Tp(o,H,H,0,0,m,z,te,m,L=[],W,Z),Z),m,Z,W,z,p?L:Z):So(E,H,H,H,[""],Z,0,z,Z)}}K=G=le=0,U=me=1,te=E="",W=k;break;case 58:W=1+_r(E),le=X;default:if(U<1){if(de==123)--U;else if(de==125&&U++==0&&im()==125)continue}switch(E+=ul(de),de*U){case 38:me=G>0?1:(E+="\f",-1);break;case 44:z[K++]=(_r(E)-1)*me,me=1;break;case 64:fs()===45&&(E+=Wi(Pr())),J=fs(),G=W=_r(te=E+=hm(ko())),de++;break;case 45:X===45&&_r(E)==2&&(U=0)}}return j}function Tp(o,c,l,p,m,j,k,z,T,K,G,W){for(var J=m-1,le=m===0?j:[""],X=tu(le),U=0,Q=0,me=0;U<p;++U)for(var de=0,te=Ds(o,J+1,J=ru(Q=k[U])),L=o;de<X;++de)(L=su(Q>0?le[de]+" "+te:se(te,/&\f/g,le[de])))&&(T[me++]=L);return Do(o,c,l,m===0?Mo:z,T,K,G,W)}function mm(o,c,l,p){return Do(o,c,l,Jp,ul(am()),Ds(o,2,-2),0,p)}function zp(o,c,l,p,m){return Do(o,c,l,pl,Ds(o,0,p),Ds(o,p+1,-1),p,m)}function ou(o,c,l){switch(nm(o,c)){case 5103:return xe+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xe+o+o;case 4855:return xe+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return on+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+o+on+o+Se+o+o;case 5936:switch(He(o,c+11)){case 114:return xe+o+Se+se(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return xe+o+Se+se(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return xe+o+Se+se(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return xe+o+Se+o+o;case 6165:return xe+o+Se+"flex-"+o+o;case 5187:return xe+o+se(o,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Se+"flex-$1$2")+o;case 5443:return xe+o+Se+"flex-item-"+se(o,/flex-|-self/g,"")+(Qr(o,/flex-|baseline/)?"":Se+"grid-row-"+se(o,/flex-|-self/g,""))+o;case 4675:return xe+o+Se+"flex-line-pack"+se(o,/align-content|flex-|-self/g,"")+o;case 5548:return xe+o+Se+se(o,"shrink","negative")+o;case 5292:return xe+o+Se+se(o,"basis","preferred-size")+o;case 6060:return xe+"box-"+se(o,"-grow","")+xe+o+Se+se(o,"grow","positive")+o;case 4554:return xe+se(o,/([^-])(transform)/g,"$1"+xe+"$2")+o;case 6187:return se(se(se(o,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),o,"")+o;case 5495:case 3959:return se(o,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return se(se(o,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+xe+o+o;case 4200:if(!Qr(o,/flex-|baseline/))return Se+"grid-column-align"+Ds(o,c)+o;break;case 2592:case 3360:return Se+se(o,"template-","")+o;case 4384:case 3616:return l&&l.some(function(p,m){return c=m,Qr(p.props,/grid-\w+-end/)})?~wo(o+(l=l[c].value),"span",0)?o:Se+se(o,"-start","")+o+Se+"grid-row-span:"+(~wo(l,"span",0)?Qr(l,/\d+/):+Qr(l,/\d+/)-+Qr(o,/\d+/))+";":Se+se(o,"-start","")+o;case 4896:case 4128:return l&&l.some(function(p){return Qr(p.props,/grid-\w+-start/)})?o:Se+se(se(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return se(o,/(.+)-inline(.+)/,xe+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_r(o)-1-c>6)switch(He(o,c+1)){case 109:if(He(o,c+4)!==45)break;case 102:return se(o,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+on+(He(o,c+3)==108?"$3":"$2-$3"))+o;case 115:return~wo(o,"stretch",0)?ou(se(o,"stretch","fill-available"),c,l)+o:o}break;case 5152:case 5920:return se(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,j,k,z,T,K){return Se+m+":"+j+K+(k?Se+m+"-span:"+(z?T:+T-+j)+K:"")+o});case 4949:if(He(o,c+6)===121)return se(o,":",":"+xe)+o;break;case 6444:switch(He(o,He(o,14)===45?18:11)){case 120:return se(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(He(o,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Se+"$2box$3")+o;case 100:return se(o,":",":"+Se)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(o,"scroll-","scroll-snap-")+o}return o}function Po(o,c){for(var l="",p=0;p<o.length;p++)l+=c(o[p],p,o,c)||"";return l}function fm(o,c,l,p){switch(o.type){case tm:if(o.children.length)break;case rm:case sm:case pl:return o.return=o.return||o.value;case Jp:return"";case eu:return o.return=o.value+"{"+Po(o.children,p)+"}";case Mo:if(!_r(o.value=o.props.join(",")))return""}return _r(l=Po(o.children,p))?o.return=o.value+"{"+l+"}":""}function gm(o){var c=tu(o);return function(l,p,m,j){for(var k="",z=0;z<c;z++)k+=o[z](l,p,m,j)||"";return k}}function vm(o){return function(c){c.root||(c=c.return)&&o(c)}}function ym(o,c,l,p){if(o.length>-1&&!o.return)switch(o.type){case pl:o.return=ou(o.value,o.length,l);return;case eu:return Po([ms(o,{value:se(o.value,"@","@"+xe)})],p);case Mo:if(o.length)return om(l=o.props,function(m){switch(Qr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ct(ms(o,{props:[se(m,/:(read-\w+)/,":"+on+"$1")]})),ct(ms(o,{props:[m]})),Ji(o,{props:Cp(l,p)});break;case"::placeholder":ct(ms(o,{props:[se(m,/:(plac\w+)/,":"+xe+"input-$1")]})),ct(ms(o,{props:[se(m,/:(plac\w+)/,":"+on+"$1")]})),ct(ms(o,{props:[se(m,/:(plac\w+)/,Se+"input-$1")]})),ct(ms(o,{props:[m]})),Ji(o,{props:Cp(l,p)});break}return""})}}var jm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mr={},ht=typeof process!="undefined"&&mr!==void 0&&(mr.REACT_APP_SC_ATTR||mr.SC_ATTR)||"data-styled",au="active",iu="data-styled-version",Oo="6.3.10",hl=`/*!sc*/
`,an=typeof window!="undefined"&&typeof document!="undefined",Nm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mr.REACT_APP_SC_DISABLE_SPEEDY!==""?mr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&mr!==void 0&&mr.SC_DISABLE_SPEEDY!==void 0&&mr.SC_DISABLE_SPEEDY!==""&&mr.SC_DISABLE_SPEEDY!=="false"&&mr.SC_DISABLE_SPEEDY);function pn(o){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Co=new Map,Bo=new Map,To=1,nn=function(o){if(Co.has(o))return Co.get(o);for(;Bo.has(To);)To++;var c=To++;return Co.set(o,c),Bo.set(c,o),c},bm=function(o,c){To=c+1,Co.set(o,c),Bo.set(c,o)},xl=Object.freeze([]),xt=Object.freeze({});function wm(o,c,l){return l===void 0&&(l=xt),o.theme!==l.theme&&o.theme||c||l.theme}var lu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),km=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sm=/(^-|-$)/g;function Ip(o){return o.replace(km,"-").replace(Sm,"")}var Cm=/(a)(d)/gi,Ep=function(o){return String.fromCharCode(o+(o>25?39:97))};function rl(o){var c,l="";for(c=Math.abs(o);c>52;c=c/52|0)l=Ep(c%52)+l;return(Ep(c%52)+l).replace(Cm,"$1-$2")}var Ui,Ps=function(o,c){for(var l=c.length;l;)o=33*o^c.charCodeAt(--l);return o},cu=function(o){return Ps(5381,o)};function Tm(o){return rl(cu(o)>>>0)}function zm(o){return o.displayName||o.name||"Component"}function Hi(o){return typeof o=="string"&&!0}var du=typeof Symbol=="function"&&Symbol.for,pu=du?Symbol.for("react.memo"):60115,Im=du?Symbol.for("react.forward_ref"):60112,Em={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_m=((Ui={})[Im]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ui[pu]=uu,Ui);function Lp(o){return("type"in(c=o)&&c.type.$$typeof)===pu?uu:"$$typeof"in o?_m[o.$$typeof]:Em;var c}var Pm=Object.defineProperty,Bm=Object.getOwnPropertyNames,_p=Object.getOwnPropertySymbols,Mm=Object.getOwnPropertyDescriptor,Rm=Object.getPrototypeOf,Pp=Object.prototype;function hu(o,c,l){if(typeof c!="string"){if(Pp){var p=Rm(c);p&&p!==Pp&&hu(o,p,l)}var m=Bm(c);_p&&(m=m.concat(_p(c)));for(var j=Lp(o),k=Lp(c),z=0;z<m.length;++z){var T=m[z];if(!(T in Lm||l&&l[T]||k&&T in k||j&&T in j)){var K=Mm(c,T);try{Pm(o,T,K)}catch{}}}}return o}function mt(o){return typeof o=="function"}function ml(o){return typeof o=="object"&&"styledComponentId"in o}function Ms(o,c){return o&&c?"".concat(o," ").concat(c):o||c||""}function Bp(o,c){return o.join("")}function dn(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function sl(o,c,l){if(l===void 0&&(l=!1),!l&&!dn(o)&&!Array.isArray(o))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)o[p]=sl(o[p],c[p]);else if(dn(c))for(var p in c)o[p]=sl(o[p],c[p]);return o}function fl(o,c){Object.defineProperty(o,"toString",{value:c})}var Dm=(function(){function o(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},o.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,j=m;c>=j;)if((j<<=1)<0)throw pn(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var k=m;k<j;k++)this.groupSizes[k]=0}for(var z=this.indexOfGroup(c+1),T=0,K=(k=0,l.length);k<K;k++)this.tag.insertRule(z,l[k])&&(this.groupSizes[c]++,z++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},o.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),m=p+l;this.groupSizes[c]=0;for(var j=p;j<m;j++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},o.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),j=m+p,k=m;k<j;k++)l+=this.tag.getRule(k)+hl;return l},o})(),Fm="style[".concat(ht,"][").concat(iu,'="').concat(Oo,'"]'),Om=new RegExp("^".concat(ht,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mp=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},tl=function(o){if(!o)return document;if(Mp(o))return o;if("getRootNode"in o){var c=o.getRootNode();if(Mp(c))return c}return document},Am=function(o,c,l){for(var p,m=l.split(","),j=0,k=m.length;j<k;j++)(p=m[j])&&o.registerName(c,p)},Wm=function(o,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(hl),m=[],j=0,k=p.length;j<k;j++){var z=p[j].trim();if(z){var T=z.match(Om);if(T){var K=0|parseInt(T[1],10),G=T[2];K!==0&&(bm(G,K),Am(o,G,T[3]),o.getTag().insertRules(K,m)),m.length=0}else m.push(z)}}},$i=function(o){for(var c=tl(o.options.target).querySelectorAll(Fm),l=0,p=c.length;l<p;l++){var m=c[l];m&&m.getAttribute(ht)!==au&&(Wm(o,m),m.parentNode&&m.parentNode.removeChild(m))}};function Um(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var xu=function(o){var c=document.head,l=o||c,p=document.createElement("style"),m=(function(z){var T=Array.from(z.querySelectorAll("style[".concat(ht,"]")));return T[T.length-1]})(l),j=m!==void 0?m.nextSibling:null;p.setAttribute(ht,au),p.setAttribute(iu,Oo);var k=Um();return k&&p.setAttribute("nonce",k),l.insertBefore(p,j),p},Hm=(function(){function o(c){this.element=xu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var m=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,j=0,k=m.length;j<k;j++){var z=m[j];if(z.ownerNode===l)return z}throw pn(17)})(this.element),this.length=0}return o.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},o.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},o})(),$m=(function(){function o(c){this.element=xu(c),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},o.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},o})(),Vm=(function(){function o(c){this.rules=[],this.length=0}return o.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},o.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},o.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},o})(),Rp=an,Gm={isServer:!an,useCSSOMInjection:!Nm},mu=(function(){function o(c,l,p){c===void 0&&(c=xt),l===void 0&&(l={});var m=this;this.options=dr(dr({},Gm),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&an&&Rp&&(Rp=!1,$i(this)),fl(this,function(){return(function(j){for(var k=j.getTag(),z=k.length,T="",K=function(W){var J=(function(me){return Bo.get(me)})(W);if(J===void 0)return"continue";var le=j.names.get(J);if(le===void 0||!le.size)return"continue";var X=k.getGroup(W);if(X.length===0)return"continue";var U=ht+".g"+W+'[id="'+J+'"]',Q="";le.forEach(function(me){me.length>0&&(Q+=me+",")}),T+=X+U+'{content:"'+Q+'"}'+hl},G=0;G<z;G++)K(G);return T})(m)})}return o.registerId=function(c){return nn(c)},o.prototype.rehydrate=function(){!this.server&&an&&$i(this)},o.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new o(dr(dr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&an&&c.target!==this.options.target&&tl(this.options.target)!==tl(c.target)&&$i(p),p},o.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,m=l.target;return l.isServer?new Vm(m):p?new Hm(m):new $m(m)})(this.options),new Dm(c)));var c},o.prototype.hasNameForId=function(c,l){var p,m;return(m=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&m!==void 0&&m},o.prototype.registerName=function(c,l){nn(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},o.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(nn(c),p)},o.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},o.prototype.clearRules=function(c){this.getTag().clearGroup(nn(c)),this.clearNames(c)},o.prototype.clearTag=function(){this.tag=void 0},o})(),Qm=/&/g,Yr=47,Bs=42;function Dp(o){if(o.indexOf("}")===-1)return!1;for(var c=o.length,l=0,p=0,m=!1,j=0;j<c;j++){var k=o.charCodeAt(j);if(p!==0||m||k!==Yr||o.charCodeAt(j+1)!==Bs)if(m)k===Bs&&o.charCodeAt(j+1)===Yr&&(m=!1,j++);else if(k!==34&&k!==39||j!==0&&o.charCodeAt(j-1)===92){if(p===0){if(k===123)l++;else if(k===125&&--l<0)return!0}}else p===0?p=k:p===k&&(p=0);else m=!0,j++}return l!==0||p!==0}function fu(o,c){return o.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=fu(l.children,c)),l})}function Ym(o){var c,l,p,m=xt,j=m.options,k=j===void 0?xt:j,z=m.plugins,T=z===void 0?xl:z,K=function(X,U,Q){return Q.startsWith(l)&&Q.endsWith(l)&&Q.replaceAll(l,"").length>0?".".concat(c):X},G=T.slice();G.push(function(X){X.type===Mo&&X.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),X.props[0]=X.props[0].replace(Qm,l).replace(p,K))}),k.prefix&&G.push(ym),G.push(fm);var W=[],J=gm(G.concat(vm(function(X){return W.push(X)}))),le=function(X,U,Q,me){U===void 0&&(U=""),Q===void 0&&(Q=""),me===void 0&&(me="&"),c=me,l=U,p=void 0;var de=(function(L){if(!Dp(L))return L;for(var Z=L.length,H="",E=0,D=0,je=0,Be=!1,ae=0;ae<Z;ae++){var _e=L.charCodeAt(ae);if(je!==0||Be||_e!==Yr||L.charCodeAt(ae+1)!==Bs)if(Be)_e===Bs&&L.charCodeAt(ae+1)===Yr&&(Be=!1,ae++);else if(_e!==34&&_e!==39||ae!==0&&L.charCodeAt(ae-1)===92){if(je===0)if(_e===123)D++;else if(_e===125){if(--D<0){for(var Te=ae+1;Te<Z;){var Ke=L.charCodeAt(Te);if(Ke===59||Ke===10)break;Te++}Te<Z&&L.charCodeAt(Te)===59&&Te++,D=0,ae=Te-1,E=Te;continue}D===0&&(H+=L.substring(E,ae+1),E=ae+1)}else _e===59&&D===0&&(H+=L.substring(E,ae+1),E=ae+1)}else je===0?je=_e:je===_e&&(je=0);else Be=!0,ae++}if(E<Z){var rr=L.substring(E);Dp(rr)||(H+=rr)}return H})((function(L){if(L.indexOf("//")===-1)return L;for(var Z=L.length,H=[],E=0,D=0,je=0,Be=0;D<Z;){var ae=L.charCodeAt(D);if(ae!==34&&ae!==39||D!==0&&L.charCodeAt(D-1)===92)if(je===0)if(ae===Yr&&D+1<Z&&L.charCodeAt(D+1)===Bs){for(D+=2;D+1<Z&&(L.charCodeAt(D)!==Bs||L.charCodeAt(D+1)!==Yr);)D++;D+=2}else if(ae===40&&D>=3&&(32|L.charCodeAt(D-1))==108&&(32|L.charCodeAt(D-2))==114&&(32|L.charCodeAt(D-3))==117)Be=1,D++;else if(Be>0)ae===41?Be--:ae===40&&Be++,D++;else if(ae===Bs&&D+1<Z&&L.charCodeAt(D+1)===Yr)D>E&&H.push(L.substring(E,D)),E=D+=2;else if(ae===Yr&&D+1<Z&&L.charCodeAt(D+1)===Yr){for(D>E&&H.push(L.substring(E,D));D<Z&&L.charCodeAt(D)!==10;)D++;E=D}else D++;else D++;else je===0?je=ae:je===ae&&(je=0),D++}return E===0?L:(E<Z&&H.push(L.substring(E)),H.join(""))})(X)),te=xm(Q||U?"".concat(Q," ").concat(U," { ").concat(de," }"):de);return k.namespace&&(te=fu(te,k.namespace)),W=[],Po(te,J),W};return le.hash=T.length?T.reduce(function(X,U){return U.name||pn(15),Ps(X,U.name)},5381).toString():"",le}var Km=new mu,nl=Ym(),gu=fr.createContext({shouldForwardProp:void 0,styleSheet:Km,stylis:nl});gu.Consumer;fr.createContext(void 0);function Fp(){return fr.useContext(gu)}var qm=(function(){function o(c,l){var p=this;this.inject=function(m,j){j===void 0&&(j=nl);var k=p.name+j.hash;m.hasNameForId(p.id,k)||m.insertRules(p.id,k,j(p.rules,k,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,fl(this,function(){throw pn(12,String(p.name))})}return o.prototype.getName=function(c){return c===void 0&&(c=nl),this.name+c.hash},o})();function Xm(o,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in jm||o.startsWith("--")?String(c).trim():"".concat(c,"px")}var Zm=function(o){return o>="A"&&o<="Z"};function Op(o){for(var c="",l=0;l<o.length;l++){var p=o[l];if(l===1&&p==="-"&&o[0]==="-")return o;Zm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var vu=function(o){return o==null||o===!1||o===""},yu=function(o){var c=[];for(var l in o){var p=o[l];o.hasOwnProperty(l)&&!vu(p)&&(Array.isArray(p)&&p.isCss||mt(p)?c.push("".concat(Op(l),":"),p,";"):dn(p)?c.push.apply(c,_o(_o(["".concat(l," {")],yu(p),!1),["}"],!1)):c.push("".concat(Op(l),": ").concat(Xm(l,p),";")))}return c};function Rs(o,c,l,p,m){if(m===void 0&&(m=[]),typeof o=="string")return o&&m.push(o),m;if(vu(o))return m;if(ml(o))return m.push(".".concat(o.styledComponentId)),m;if(mt(o)){if(!mt(k=o)||k.prototype&&k.prototype.isReactComponent||!c)return m.push(o),m;var j=o(c);return Rs(j,c,l,p,m)}var k;if(o instanceof qm)return l?(o.inject(l,p),m.push(o.getName(p))):m.push(o),m;if(dn(o)){for(var z=yu(o),T=0;T<z.length;T++)m.push(z[T]);return m}if(!Array.isArray(o))return m.push(o.toString()),m;for(T=0;T<o.length;T++)Rs(o[T],c,l,p,m);return m}function Jm(o){for(var c=0;c<o.length;c+=1){var l=o[c];if(mt(l)&&!ml(l))return!1}return!0}var ef=cu(Oo),rf=(function(){function o(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&Jm(c),this.componentId=l,this.baseHash=Ps(ef,l),this.baseStyle=p,mu.registerId(l)}return o.prototype.generateAndInjectStyles=function(c,l,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=Ms(m,this.staticRulesId);else{var j=Bp(Rs(this.rules,c,l,p)),k=rl(Ps(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,k)){var z=p(j,".".concat(k),void 0,this.componentId);l.insertRules(this.componentId,k,z)}m=Ms(m,k),this.staticRulesId=k}else{for(var T=Ps(this.baseHash,p.hash),K="",G=0;G<this.rules.length;G++){var W=this.rules[G];if(typeof W=="string")K+=W;else if(W){var J=Bp(Rs(W,c,l,p));T=Ps(Ps(T,String(G)),J),K+=J}}if(K){var le=rl(T>>>0);if(!l.hasNameForId(this.componentId,le)){var X=p(K,".".concat(le),void 0,this.componentId);l.insertRules(this.componentId,le,X)}m=Ms(m,le)}}return{className:m,css:typeof window=="undefined"?l.getTag().getGroup(nn(this.componentId)):""}},o})(),ju=fr.createContext(void 0);ju.Consumer;var Vi={};function sf(o,c,l){var p=ml(o),m=o,j=!Hi(o),k=c.attrs,z=k===void 0?xl:k,T=c.componentId,K=T===void 0?(function(L,Z){var H=typeof L!="string"?"sc":Ip(L);Vi[H]=(Vi[H]||0)+1;var E="".concat(H,"-").concat(Tm(Oo+H+Vi[H]));return Z?"".concat(Z,"-").concat(E):E})(c.displayName,c.parentComponentId):T,G=c.displayName,W=G===void 0?(function(L){return Hi(L)?"styled.".concat(L):"Styled(".concat(zm(L),")")})(o):G,J=c.displayName&&c.componentId?"".concat(Ip(c.displayName),"-").concat(c.componentId):c.componentId||K,le=p&&m.attrs?m.attrs.concat(z).filter(Boolean):z,X=c.shouldForwardProp;if(p&&m.shouldForwardProp){var U=m.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;X=function(L,Z){return U(L,Z)&&Q(L,Z)}}else X=U}var me=new rf(l,J,p?m.componentStyle:void 0);function de(L,Z){return(function(H,E,D){var je=H.attrs,Be=H.componentStyle,ae=H.defaultProps,_e=H.foldedComponentIds,Te=H.styledComponentId,Ke=H.target,rr=fr.useContext(ju),qe=Fp(),Ne=H.shouldForwardProp||qe.shouldForwardProp,I=wm(E,rr,ae)||xt,O=(function(oe,pe,ce){for(var fe,Ie=dr(dr({},pe),{className:void 0,theme:ce}),Kr=0;Kr<oe.length;Kr+=1){var ys=mt(fe=oe[Kr])?fe(Ie):fe;for(var kr in ys)kr==="className"?Ie.className=Ms(Ie.className,ys[kr]):kr==="style"?Ie.style=dr(dr({},Ie.style),ys[kr]):Ie[kr]=ys[kr]}return"className"in pe&&typeof pe.className=="string"&&(Ie.className=Ms(Ie.className,pe.className)),Ie})(je,E,I),_=O.as||Ke,f={};for(var N in O)O[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&O.theme===I||(N==="forwardedAs"?f.as=O.forwardedAs:Ne&&!Ne(N,_)||(f[N]=O[N]));var ee=(function(oe,pe){var ce=Fp(),fe=oe.generateAndInjectStyles(pe,ce.styleSheet,ce.stylis);return fe})(Be,O),re=ee.className,ie=Ms(_e,Te);return re&&(ie+=" "+re),O.className&&(ie+=" "+O.className),f[Hi(_)&&!lu.has(_)?"class":"className"]=ie,D&&(f.ref=D),ge.createElement(_,f)})(te,L,Z)}de.displayName=W;var te=fr.forwardRef(de);return te.attrs=le,te.componentStyle=me,te.displayName=W,te.shouldForwardProp=X,te.foldedComponentIds=p?Ms(m.foldedComponentIds,m.styledComponentId):"",te.styledComponentId=J,te.target=p?m.target:o,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=p?(function(Z){for(var H=[],E=1;E<arguments.length;E++)H[E-1]=arguments[E];for(var D=0,je=H;D<je.length;D++)sl(Z,je[D],!0);return Z})({},m.defaultProps,L):L}}),fl(te,function(){return".".concat(te.styledComponentId)}),j&&hu(te,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function Ap(o,c){for(var l=[o[0]],p=0,m=c.length;p<m;p+=1)l.push(c[p],o[p+1]);return l}var Wp=function(o){return Object.assign(o,{isCss:!0})};function tf(o){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(mt(o)||dn(o))return Wp(Rs(Ap(xl,_o([o],c,!0))));var p=o;return c.length===0&&p.length===1&&typeof p[0]=="string"?Rs(p):Wp(Rs(Ap(p,c)))}function ol(o,c,l){if(l===void 0&&(l=xt),!c)throw pn(1,c);var p=function(m){for(var j=[],k=1;k<arguments.length;k++)j[k-1]=arguments[k];return o(c,l,tf.apply(void 0,_o([m],j,!1)))};return p.attrs=function(m){return ol(o,c,dr(dr({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return ol(o,c,dr(dr({},l),m))},p}var Nu=function(o){return ol(sf,o)},ye=Nu;lu.forEach(function(o){ye[o]=Nu(o)});const Gi={Wrapper:ye.div`height:100vh;overflow:hidden;display:flex;flex-direction:column;`,Header:ye.header`height:60px;flex-shrink:0;`,Main:ye.main`
flex:1;overflow-y:auto;position:relative;
.workspaceLayout{min-height:100%;max-width:1440px;margin:auto;display:grid;grid-template-columns:260px minmax(0,1fr);gap:28px;padding:18px 22px 42px}.sideMenu{position:sticky;top:18px;align-self:start;height:calc(100vh - 60px - 36px);max-height:calc(100vh - 60px - 36px);box-sizing:border-box;overflow-y:auto;padding:16px 10px;border:1px solid var(--color-border);border-radius:16px;background:var(--color-surface)}.menuLabel{margin:0 10px 12px;color:var(--color-text-muted);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.sideMenu nav{display:grid;gap:5px}.sideMenu button{width:100%;padding:10px 12px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--color-text-secondary);text-align:left;cursor:pointer;font:inherit}.sideMenu button:hover,.sideMenu button.active{background:var(--color-primary);border-color:var(--color-primary);color:#07111f}.contentWrapper{min-width:0;padding:4px 0}.contentWrapper .topicBody{max-height:12000px}.scrollTopButton{position:fixed;right:24px;bottom:24px;z-index:10;width:42px;height:42px;display:grid;place-items:center;border:1px solid var(--color-border);border-radius:50%;background:var(--color-surface);color:var(--color-text-primary);cursor:pointer;box-shadow:0 8px 20px var(--color-shadow)}.scrollTopButton:hover{background:var(--color-primary);color:#07111f}.footerWrapper{flex-shrink:0}@media(max-width:820px){.workspaceLayout{grid-template-columns:1fr;padding:14px}.sideMenu{position:static;height:auto;max-height:none}.sideMenu nav{grid-template-columns:repeat(2,minmax(0,1fr))}.scrollTopButton{right:16px;bottom:16px}}
`},Up={Wrapper:ye.header`
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
    `,Main:ye.div`
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
    `},nf="/css-core-notes/images/transparentLogo.png",of=()=>{const[o,c]=ge.useState(!1),[l,p]=ge.useState("dark");ge.useEffect(()=>{const z=localStorage.getItem("app-theme")||"dark";p(z),z==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ge.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const m=ge.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{p(m)};return r.jsx(Up.Wrapper,{children:r.jsx(Up.Main,{children:r.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!o&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:nf,alt:"css-core-notes",onLoad:()=>c(!0),style:{opacity:o?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"css-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance css revision"})]})]}),r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[r.jsx("span",{className:"icon",children:l==="light"?r.jsx(cl,{}):r.jsx(dl,{})}),r.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},af={Wrapper:ye.footer`
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
    `},lf=()=>r.jsxs(af.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Hp={Wrapper:ye.section`
        width: 100%;
        /* padding: 60px 20px; */
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ye.div`
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
    `},bu=()=>{const o="2026-09-21T16:29:42.330Z",c=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return r.jsx(Hp.Wrapper,{children:r.jsxs(Hp.Content,{children:[r.jsx("h2",{className:"heading",children:"About CSS"}),r.jsx("p",{children:"CSS stands for Cascading Style Sheets. It controls how HTML looks and feels on screen. CSS is responsible for layout, spacing, colors, typography, responsive behavior, and visual effects. HTML gives structure and meaning, while CSS gives presentation."}),r.jsx("p",{children:"The core power of CSS comes from the cascade. Multiple rules can apply to the same element, and the browser decides the final result using specificity, source order, and inheritance. Once you understand the cascade, layout systems like Flexbox and Grid become much easier and more predictable."}),r.jsx("p",{children:"The css-core-notes project is designed as a focused revision system. It keeps everything in one scrollable page with expandable topics, so you can revise quickly before interviews and also build a strong mental model of modern CSS."}),r.jsxs("div",{className:"meta",children:[r.jsx("span",{className:"metaLabel",children:"Last updated:"}),r.jsx("span",{className:"metaValue",children:c})]})]})})},cf={Wrapper:ye.section`
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
    `},df=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(cf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(qp,{})}),r.jsx("span",{className:"title",children:"CSS Fundamentals"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Core basics in one view"]}),r.jsx("p",{className:"p",children:"CSS controls how HTML looks. These fundamentals explain how rules are written and how the browser decides which styles win."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is CSS"}),r.jsx("p",{className:"p",children:"CSS stands for Cascading Style Sheets. It is used to style HTML: layout, spacing, colors, fonts, and responsive behavior. HTML is structure. CSS is presentation."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How CSS works with HTML"}),r.jsx("p",{className:"p",children:"CSS targets HTML elements using selectors and applies styling rules to them. The browser reads HTML, builds a DOM tree, then reads CSS and applies it to matching nodes."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"CSS syntax"}),r.jsx("p",{className:"p",children:"A CSS rule has a selector and a declaration block. The declaration block contains property-value pairs."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Basic rule"]}),r.jsx("pre",{className:"code",children:`selector {
  property: value;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Selectors overview"}),r.jsx("p",{className:"p",children:"Selectors decide which elements get styled. Common ones are element selectors, class selectors, id selectors, and combinations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Element: ",r.jsx("span",{className:"mono",children:"p"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Class: ",r.jsx("span",{className:"mono",children:".card"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Id: ",r.jsx("span",{className:"mono",children:"#header"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Descendant: ",r.jsx("span",{className:"mono",children:".card p"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Property and value"}),r.jsxs("p",{className:"p",children:["A property is what you change. A value is what you set it to. Example: ",r.jsx("span",{className:"mono",children:"color"})," is a property, ",r.jsx("span",{className:"mono",children:"red"})," is a value."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(pt,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Property"}),r.jsx("div",{className:"miniSub",children:"color"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Vx,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Value"}),r.jsx("div",{className:"miniSub",children:"#4ea1ff"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Comments"}),r.jsx("p",{className:"p",children:"Comments are notes for humans. They do not affect styling. CSS comments use this format."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Comment format"]}),r.jsx("pre",{className:"code",children:"/* this is a comment */"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How browser applies CSS"}),r.jsx("p",{className:"p",children:"The browser matches selectors against the DOM, then calculates the final styles for each element using the cascade rules. After that it runs layout and paint to draw the UI."}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowItem",children:"HTML → DOM"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"CSS → rules"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Cascade"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Layout"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Paint"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Cascade concept"}),r.jsx("p",{className:"p",children:"Cascade means multiple rules can apply to the same element. The browser chooses the final value based on importance, specificity, and source order."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Simple rule"]}),r.jsx("div",{className:"calloutText",children:"If two rules target the same property, the more specific one wins. If specificity is same, the later one wins."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Specificity basics"}),r.jsx("p",{className:"p",children:"Specificity is the priority score of a selector. In simple terms: id selectors are stronger than class selectors, and class selectors are stronger than element selectors."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"#id"})," is strongest"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:".class"})," is medium"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"div"})," is weakest"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inheritance basics"}),r.jsx("p",{className:"p",children:"Some properties flow from parent to child automatically like text color and font. Many layout properties do not inherit like margin, padding, width, and border."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ki,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:'If a text style feels "automatic", it is probably inherited. If a box style does not change children, it usually does not inherit.'})]})]})]})]})},pf={Wrapper:ye.section`
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
    `},uf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(pf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(wp,{})}),r.jsx("span",{className:"title",children:"Ways to Apply CSS"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Linking CSS to HTML"]}),r.jsx("p",{className:"p",children:"CSS can be applied in multiple ways. In real projects, external stylesheets are the standard. Inline and internal styles are mainly for quick demos or special cases."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inline CSS"}),r.jsxs("p",{className:"p",children:["Styles written directly on an element using the"," ",r.jsx("span",{className:"mono",children:"style"})," attribute. It is quick but hard to maintain and reuse."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<p style="color: #4ea1ff; margin: 0;">
  Hello CSS
</p>`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"When to use"]}),r.jsx("div",{className:"calloutText",children:"Use inline styles for tiny one-off overrides, or dynamic styling generated by JS. Avoid for normal layout and theme styling."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Internal CSS"}),r.jsxs("p",{className:"p",children:["CSS written inside a ",r.jsx("span",{className:"mono",children:"style"})," ","tag in the HTML ",r.jsx("span",{className:"mono",children:"head"}),". Works for single pages or prototypes."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ux,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<head>
  <style>
    .card { padding: 16px; border: 1px solid #2d333b; }
  </style>
</head>`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"External CSS"}),r.jsxs("p",{className:"p",children:["CSS in a separate ",r.jsx("span",{className:"mono",children:".css"})," ","file linked using ",r.jsx("span",{className:"mono",children:"link"}),". This is the most maintainable and reusable approach."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(wp,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<head>
  <link rel="stylesheet" href="styles.css" />
</head>`})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Best for real projects"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Cached by browser"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Easy to manage at scale"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@import rule"}),r.jsxs("p",{className:"p",children:["Used inside a CSS file to import another stylesheet. Works, but can be slower and harder to manage than a"," ",r.jsx("span",{className:"mono",children:"link"})," tag in many cases."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`/* in main.css */
@import "./reset.css";
@import "./components/button.css";`})]}),r.jsx("p",{className:"p muted",children:"Note: Modern tools (Vite, bundlers) handle imports well, but in plain CSS on web pages, multiple @import can affect loading performance."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Order of precedence"}),r.jsx("p",{className:"p",children:"If multiple styles target the same element and property, the browser decides the final value using the cascade. A simple quick order is:"}),r.jsxs("div",{className:"rank",children:[r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"1"}),"Inline styles (strongest)"]}),r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"2"}),"Internal and External (depends on order and specificity)"]}),r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"3"}),"Browser default styles (weakest)"]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Remember this"]}),r.jsx("div",{className:"calloutText",children:"When specificity is equal, the rule that appears later wins. Inline styles usually beat normal stylesheets."})]})]})]})]})},hf={Wrapper:ye.section`
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
    `},xf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(hf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(pt,{})}),r.jsx("span",{className:"title",children:"Selectors Deep Dive"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx($x,{})}),"Match elements precisely"]}),r.jsx("p",{className:"p",children:"Selectors tell CSS which elements to style. Learn these patterns and your CSS becomes faster to write and easier to debug."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Basic Selectors"}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Universal selector"," ",r.jsx("span",{className:"mono",children:"*"})]}),r.jsx("p",{className:"cardSub",children:"Matches every element on the page."}),r.jsx("pre",{className:"code",children:"* { box-sizing: border-box; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Type selector"}),r.jsx("p",{className:"cardSub",children:"Matches elements by tag name."}),r.jsx("pre",{className:"code",children:"p { line-height: 1.7; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Class selector"," ",r.jsx("span",{className:"mono",children:".class"})]}),r.jsx("p",{className:"cardSub",children:"Matches elements that have a class."}),r.jsx("pre",{className:"code",children:".card { padding: 16px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["ID selector ",r.jsx("span",{className:"mono",children:"#id"})]}),r.jsx("p",{className:"cardSub",children:"Matches the element with a specific id."}),r.jsx("pre",{className:"code",children:"#header { position: sticky; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Grouping selector"}),r.jsx("p",{className:"cardSub",children:"Apply the same rules to multiple selectors."}),r.jsx("pre",{className:"code",children:"h1, h2, h3 { font-weight: 800; }"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Combinators"}),r.jsx("p",{className:"p",children:"Combinators describe relationships between elements. They help you target elements based on where they are in the HTML structure."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Descendant"}),r.jsx("p",{className:"cardSub",children:"Matches any nested element inside another."}),r.jsx("pre",{className:"code",children:".card p { margin-bottom: 12px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Child ",r.jsx("span",{className:"mono",children:">"})]}),r.jsx("p",{className:"cardSub",children:"Matches direct children only."}),r.jsx("pre",{className:"code",children:".list > li { padding: 8px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Adjacent sibling ",r.jsx("span",{className:"mono",children:"+"})]}),r.jsx("p",{className:"cardSub",children:"Matches the very next sibling."}),r.jsx("pre",{className:"code",children:"h2 + p { margin-top: 6px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["General sibling ",r.jsx("span",{className:"mono",children:"~"})]}),r.jsx("p",{className:"cardSub",children:"Matches any later sibling."}),r.jsx("pre",{className:"code",children:"h2 ~ p { color: #8b949e; }"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Attribute Selectors"}),r.jsx("p",{className:"p",children:"Attribute selectors match elements based on attributes like href, type, data-*, aria-* and more."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr]"})}),r.jsx("p",{className:"cardSub",children:"Has the attribute."}),r.jsx("pre",{className:"code",children:"[disabled] { opacity: 0.6; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr=value]"})}),r.jsx("p",{className:"cardSub",children:"Exact value match."}),r.jsx("pre",{className:"code",children:'input[type="email"] { border-color: #4ea1ff; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr^=]"})}),r.jsx("p",{className:"cardSub",children:"Starts with."}),r.jsx("pre",{className:"code",children:'a[href^="https"] { font-weight: 800; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr$=]"})}),r.jsx("p",{className:"cardSub",children:"Ends with."}),r.jsx("pre",{className:"code",children:'a[href$=".pdf"] { text-decoration: underline; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr*=]"})}),r.jsx("p",{className:"cardSub",children:"Contains substring."}),r.jsx("pre",{className:"code",children:'img[src*="logo"] { filter: grayscale(1); }'})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Pseudo Classes"}),r.jsx("p",{className:"p",children:"Pseudo classes select elements in a particular state like hover, focus, visited, or based on position among siblings."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":hover"})}),r.jsx("p",{className:"cardSub",children:"Mouse is over element."}),r.jsx("pre",{className:"code",children:".btn:hover { transform: translateY(-1px); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":active"})}),r.jsx("p",{className:"cardSub",children:"Being clicked/pressed."}),r.jsx("pre",{className:"code",children:".btn:active { transform: translateY(0); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":focus"})}),r.jsx("p",{className:"cardSub",children:"Keyboard focus."}),r.jsx("pre",{className:"code",children:"input:focus { outline: 2px solid var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":visited"})}),r.jsx("p",{className:"cardSub",children:"Visited link state."}),r.jsx("pre",{className:"code",children:"a:visited { opacity: 0.85; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":link"})}),r.jsx("p",{className:"cardSub",children:"Unvisited link state."}),r.jsx("pre",{className:"code",children:"a:link { color: var(--color-link); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":first-child"})}),r.jsx("p",{className:"cardSub",children:"First child of parent."}),r.jsx("pre",{className:"code",children:".list li:first-child { font-weight: 800; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":last-child"})}),r.jsx("p",{className:"cardSub",children:"Last child of parent."}),r.jsx("pre",{className:"code",children:".list li:last-child { opacity: 0.8; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":nth-child()"})}),r.jsx("p",{className:"cardSub",children:"Select by index."}),r.jsx("pre",{className:"code",children:".list li:nth-child(2) { color: var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":nth-of-type()"})}),r.jsx("p",{className:"cardSub",children:"Index among same tag type."}),r.jsx("pre",{className:"code",children:"p:nth-of-type(2) { margin-top: 10px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":not()"})}),r.jsx("p",{className:"cardSub",children:"Exclude matches."}),r.jsx("pre",{className:"code",children:".btn:not(.primary) { opacity: 0.9; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":is()"})}),r.jsx("p",{className:"cardSub",children:"Group selectors (keeps specificity)."}),r.jsx("pre",{className:"code",children:":is(h1, h2, h3) { letter-spacing: 0.2px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":where()"})}),r.jsx("p",{className:"cardSub",children:"Group selectors (zero specificity)."}),r.jsx("pre",{className:"code",children:":where(h1, h2, h3) { margin: 0; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":has()"})}),r.jsx("p",{className:"cardSub",children:"Select parent based on children (modern CSS)."}),r.jsx("pre",{className:"code",children:".card:has(img) { padding-top: 10px; }"})]})]}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTitle",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(vs,{})}),"Note"]}),r.jsxs("div",{className:"noteText",children:[r.jsx("span",{className:"mono",children:":has()"})," is newer. It works in modern browsers, but keep fallback in mind for older environments."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Pseudo Elements"}),r.jsx("p",{className:"p",children:"Pseudo elements style a specific part of an element or create extra styling content."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::before"})}),r.jsx("p",{className:"cardSub",children:"Insert content before."}),r.jsx("pre",{className:"code",children:'.tag::before { content: "#"; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::after"})}),r.jsx("p",{className:"cardSub",children:"Insert content after."}),r.jsx("pre",{className:"code",children:'.tag::after { content: ""; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::first-letter"})}),r.jsx("p",{className:"cardSub",children:"Style first letter."}),r.jsx("pre",{className:"code",children:"p::first-letter { font-size: 22px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::first-line"})}),r.jsx("p",{className:"cardSub",children:"Style first line."}),r.jsx("pre",{className:"code",children:"p::first-line { font-weight: 800; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::selection"})}),r.jsx("p",{className:"cardSub",children:"Selected text."}),r.jsx("pre",{className:"code",children:"::selection { background: var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::placeholder"})}),r.jsx("p",{className:"cardSub",children:"Placeholder styling."}),r.jsx("pre",{className:"code",children:"input::placeholder { color: var(--color-text-muted); }"})]})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick priority tip"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer class selectors for reusable styling"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Avoid heavy nesting and overly specific selectors"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use pseudo classes for interaction and structure"]})]})]})]})]})},mf={Wrapper:ye.section`
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
    `},ff=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(mf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(ll,{})}),r.jsx("span",{className:"title",children:"The Box Model"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Everything is a box"]}),r.jsx("p",{className:"p",children:"In CSS, every element is a rectangle made of layers: content, padding, border, and margin. Understanding this makes layout bugs much easier to fix."}),r.jsxs("div",{className:"diagram",children:[r.jsxs("div",{className:"dMargin",children:[r.jsx("div",{className:"dLabel",children:"Margin"}),r.jsxs("div",{className:"dBorder",children:[r.jsx("div",{className:"dLabel",children:"Border"}),r.jsxs("div",{className:"dPadding",children:[r.jsx("div",{className:"dLabel",children:"Padding"}),r.jsx("div",{className:"dContent",children:r.jsx("div",{className:"dLabel",children:"Content"})})]})]})]}),r.jsx("div",{className:"diagramNote",children:"Outer to inner: margin → border → padding → content"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Content box"}),r.jsx("p",{className:"p",children:"The content box is the actual space where text, images, and child elements sit. Width and height usually apply to the content box by default."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Padding"}),r.jsx("p",{className:"p",children:"Padding is the inner space between the content and the border. It increases the clickable and readable area of an element."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Zp,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"padding"}),r.jsx("div",{className:"miniSub",children:"adds space inside"})]})]})}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:"button { padding: 10px 12px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Border"}),r.jsx("p",{className:"p",children:"Border wraps around the padding and content. Borders can take space and affect layout because they add to the element size (unless using border-box sizing)."}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".card { border: 1px solid #2d333b; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Margin"}),r.jsx("p",{className:"p",children:"Margin is the outer space around an element, used to create gaps between elements. Margin is always outside the border."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Yx,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"margin"}),r.jsx("div",{className:"miniSub",children:"creates space outside"})]})]})}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".section { margin-bottom: 16px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"box-sizing"}),r.jsx("p",{className:"p",children:"box-sizing controls how width and height are calculated. With content-box (default), width applies only to the content. With border-box, width includes padding and border too."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Jx,{})}),"Best practice"]}),r.jsx("div",{className:"calloutText",children:"Most projects use border-box to make sizing easier and predictable."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:"* { box-sizing: border-box; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Margin collapse"}),r.jsx("p",{className:"p",children:"Vertical margins between block elements can collapse into a single margin. That means margins do not always add up the way you expect."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Happens mostly with vertical margins (top and bottom)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Largest margin usually wins"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Does not happen in flex and grid layouts"]})]}),r.jsxs("div",{className:"callout warn",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Qp,{})}),"Debug tip"]}),r.jsx("div",{className:"calloutText",children:'If spacing looks "wrong", check margin collapse. Adding padding or a border to the parent can stop it.'})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"overflow"}),r.jsx("p",{className:"p",children:"overflow controls what happens when content is larger than the box. It can show, clip, scroll, or hide extra content."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: visible (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: hidden (clips)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: auto (scroll if needed)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: scroll (always scroll)"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".panel { overflow: auto; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Outline"}),r.jsx("p",{className:"p",children:"outline is similar to border but it does not take space in layout. It is commonly used for focus indicators."}),r.jsxs("div",{className:"callout ok",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Eo,{})}),"Accessibility"]}),r.jsx("div",{className:"calloutText",children:"Keep visible focus styles. outline is a simple and solid way to show keyboard focus."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:`button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`})]})]})]})]})},gf={Wrapper:ye.section`
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
    `},vf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(gf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Xp,{})}),r.jsx("span",{className:"title",children:"Units and Values"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ln,{})}),"Sizing without confusion"]}),r.jsx("p",{className:"p",children:"CSS units decide how big something is. Absolute units are fixed. Relative units adapt to screen, font size, or container. Functions help you calculate responsive values cleanly."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Absolute Units"}),r.jsxs("p",{className:"p",children:["Absolute units are fixed lengths. They do not depend on screen size or parent font size. In web UI work,",r.jsx("span",{className:"mono",children:"px"})," is the most common."]}),r.jsxs("div",{className:"chips",children:[r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"px"}),r.jsx("span",{className:"chipText",children:"pixels (most used)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"pt"}),r.jsx("span",{className:"chipText",children:"points (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"cm"}),r.jsx("span",{className:"chipText",children:"centimeters (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"mm"}),r.jsx("span",{className:"chipText",children:"millimeters (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"in"}),r.jsx("span",{className:"chipText",children:"inches (print)"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"Practical tip"]}),r.jsx("div",{className:"calloutText",children:"For websites and apps, mostly use px, rem, and %. cm, mm, pt, in are mainly for printing."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Relative Units"}),r.jsx("p",{className:"p",children:"Relative units change based on something else like font size or viewport. They help build responsive layouts."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Font based"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"em"})," - relative to current element font size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"rem"})," - relative to root (html) font size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"ch"}),' - width of "0" character (monospace like sizing)']}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"ex"})," - x-height (rare, not consistent)"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Viewport based"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vh"})," - 1% of viewport height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vw"})," - 1% of viewport width"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vmin"})," - 1% of smaller side"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vmax"})," - 1% of larger side"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Container based"}),r.jsx("ul",{className:"list",children:r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"%"})," - relative to parent or layout context"]})}),r.jsx("div",{className:"note",children:"% depends on property: width uses parent width, padding % also uses parent width, etc."})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Common choices"]}),r.jsx("pre",{className:"code",children:`/* Typography: rem is predictable */
html { font-size: 16px; }
h1 { font-size: 2rem; } /* 32px */

/* Layout: % + max-width is common */
.container { width: 90%; max-width: 1100px; }

/* Full screen sections */
.hero { min-height: 100vh; }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Functions"}),r.jsx("p",{className:"p",children:"CSS functions help you calculate values and create responsive sizing without too many media queries."}),r.jsxs("div",{className:"grid two",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"calc()"})}),r.jsx("p",{className:"cardSub",children:"Mix units and do math. Great for layouts."}),r.jsx("pre",{className:"miniCode",children:"width: calc(100% - 32px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"clamp()"})}),r.jsx("p",{className:"cardSub",children:"Set a min, preferred, and max value."}),r.jsx("pre",{className:"miniCode",children:"font-size: clamp(16px, 2vw, 22px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"min()"})}),r.jsx("p",{className:"cardSub",children:"Choose the smaller value from options."}),r.jsx("pre",{className:"miniCode",children:"width: min(90%, 1100px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"max()"})}),r.jsx("p",{className:"cardSub",children:"Choose the larger value from options."}),r.jsx("pre",{className:"miniCode",children:"min-height: max(60vh, 520px);"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"Beginner friendly rule"]}),r.jsx("div",{className:"calloutText",children:"Use rem for font sizes, % for fluid widths, and clamp() when you want responsive sizing with a safe minimum and maximum."})]})]})]})]})},yf={Wrapper:ye.section`
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
    `},jf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(yf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Yi,{})}),r.jsx("span",{className:"title",children:"Colors and Backgrounds"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"The visuals toolkit"]}),r.jsx("p",{className:"p",children:"Colors set the mood. Backgrounds control surfaces. This section covers common color formats, opacity, and background properties including gradients."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Color formats"}),r.jsx("p",{className:"p",children:"CSS supports multiple color notations. Pick one style and stay consistent. Most projects use hex or rgb/rgba."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Named colors: ",r.jsx("span",{className:"mono",children:"red"}),", ",r.jsx("span",{className:"mono",children:"rebeccapurple"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Hex: ",r.jsx("span",{className:"mono",children:"#4ea1ff"}),","," ",r.jsx("span",{className:"mono",children:"#0f1117"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"RGB: ",r.jsx("span",{className:"mono",children:"rgb(78, 161, 255)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"RGBA:"," ",r.jsx("span",{className:"mono",children:"rgba(78, 161, 255, 0.6)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"HSL:"," ",r.jsx("span",{className:"mono",children:"hsl(210, 100%, 65%)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"HSLA:"," ",r.jsx("span",{className:"mono",children:"hsla(210, 100%, 65%, 0.6)"})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Common examples"]}),r.jsx("pre",{className:"code",children:`/* named */
color: red;

/* hex */
color: #4ea1ff;

/* rgb / rgba */
color: rgb(78, 161, 255);
color: rgba(78, 161, 255, 0.6);

/* hsl / hsla */
color: hsl(210, 100%, 65%);
color: hsla(210, 100%, 65%, 0.6);`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"opacity"}),r.jsx("p",{className:"p",children:"opacity affects the whole element including its content (text, icons, children). If you only want the background to be transparent, use rgba/hsla for the background color instead."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(gs,{})}),"Quick rule"]}),r.jsx("div",{className:"calloutText",children:"opacity fades everything inside. rgba/hsla fades only that color."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"opacity vs rgba"]}),r.jsx("pre",{className:"code",children:`/* fades whole element (including text) */
.card {
  opacity: 0.6;
}

/* only background becomes transparent */
.card {
  background: rgba(0, 0, 0, 0.6);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"background basics"}),r.jsx("p",{className:"p",children:"Background properties control the element surface. Backgrounds can be a solid color, an image, or a gradient."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Yi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Color"}),r.jsx("div",{className:"miniSub",children:"background-color"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(qi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Image"}),r.jsx("div",{className:"miniSub",children:"background-image"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Gradient"}),r.jsx("div",{className:"miniSub",children:"linear radial conic"})]})]})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-color"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-image"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-position"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-repeat"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-attachment"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background shorthand"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Typical background image setup"]}),r.jsx("pre",{className:"code",children:`.hero {
  background-image: url("/images/banner.jpg");
  background-size: cover;        /* cover | contain | 200px 100px */
  background-position: center;   /* left top | center | 20% 40% */
  background-repeat: no-repeat;  /* repeat | repeat-x | repeat-y */
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(qi,{})}),"background-attachment"]}),r.jsx("div",{className:"calloutText",children:"background-attachment controls whether the background scrolls with the page. Values: scroll (default), fixed, local. fixed can feel like a parallax effect but is not always mobile friendly."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Background shorthand"]}),r.jsx("pre",{className:"code",children:`/* shorthand (order can vary) */
.card {
  background: #0f1117 url("/images/noise.png") no-repeat center / cover;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Gradients"}),r.jsx("p",{className:"p",children:"Gradients are generated images. You set them using background-image. They are great for subtle depth and modern UI surfaces."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"linear-gradient: straight direction"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"radial-gradient: circle or ellipse"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"conic-gradient: around a center point"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Gradient examples"]}),r.jsx("pre",{className:"code",children:`/* linear gradient */
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
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Tip"]}),r.jsx("div",{className:"calloutText",children:"You can layer multiple backgrounds by separating them with commas. The first one is on top."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Multiple background layers"]}),r.jsx("pre",{className:"code",children:`.card {
  background-image:
    radial-gradient(circle at 20% 20%, rgba(78,161,255,0.35), transparent 45%),
    linear-gradient(180deg, #161b22, #0f1117);
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use rgba/hsla for transparent background only"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use cover + center for hero images"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Gradients are background-image"]})]})]})]})]})},Nf={Wrapper:ye.section`
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
    `},bf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Nf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Lo,{})}),r.jsx("span",{className:"title",children:"Typography"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(qp,{})}),"Text styling essentials"]}),r.jsx("p",{className:"p",children:"Typography in CSS controls how text looks and reads. These properties cover fonts, sizing, spacing, alignment, wrapping, and custom fonts."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-family"}),r.jsx("p",{className:"p",children:"Sets the font for text. Always include a fallback list, ending with a generic family like sans-serif."}),r.jsx("pre",{className:"code",children:'font-family: "Inter", system-ui, Arial, sans-serif;'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Web safe fonts"}),r.jsx("p",{className:"p",children:"Fonts commonly available on most systems. Examples: Arial, Verdana, Georgia, Times New Roman, Courier New. These reduce dependency on downloads."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-size"}),r.jsx("p",{className:"p",children:"Controls text size. Common units are px, rem, and em. For scalable UI, rem is usually easier to manage."}),r.jsx("pre",{className:"code",children:"font-size: 16px; /* or 1rem */"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-weight"}),r.jsx("p",{className:"p",children:"Controls thickness of characters. Typical values are 400 (normal), 600 (semi-bold), 700 (bold). Not every font supports all weights."}),r.jsx("pre",{className:"code",children:"font-weight: 700;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-style"}),r.jsx("p",{className:"p",children:"Controls italic style. Usually normal or italic."}),r.jsx("pre",{className:"code",children:"font-style: italic;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"line-height"}),r.jsx("p",{className:"p",children:"Controls vertical spacing between lines. A unitless value is recommended because it scales with font-size."}),r.jsx("pre",{className:"code",children:"line-height: 1.6;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"letter-spacing"}),r.jsx("p",{className:"p",children:"Adds spacing between letters. Useful for headings, but too much can reduce readability."}),r.jsx("pre",{className:"code",children:"letter-spacing: 0.4px;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"word-spacing"}),r.jsx("p",{className:"p",children:"Adds spacing between words. Use lightly, mainly for special UI styles."}),r.jsx("pre",{className:"code",children:"word-spacing: 2px;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-align"}),r.jsx("p",{className:"p",children:"Aligns inline content inside a block. Common values: left, center, right, justify."}),r.jsx("pre",{className:"code",children:"text-align: center;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-decoration"}),r.jsx("p",{className:"p",children:"Adds decoration like underline. Often used on links. Use underline-offset for nicer look."}),r.jsx("pre",{className:"code",children:`text-decoration: underline;
text-underline-offset: 3px;`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-transform"}),r.jsx("p",{className:"p",children:"Changes letter casing without editing the actual text. Values: uppercase, lowercase, capitalize."}),r.jsx("pre",{className:"code",children:"text-transform: uppercase;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-shadow"}),r.jsx("p",{className:"p",children:"Adds shadow to text. Use subtle values. Too much looks messy and hurts readability."}),r.jsx("pre",{className:"code",children:"text-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"white-space"}),r.jsx("p",{className:"p",children:"Controls how spaces and line breaks behave. Common: normal (default), nowrap (single line), pre (respects spaces and new lines)."}),r.jsx("pre",{className:"code",children:"white-space: nowrap;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-overflow"}),r.jsx("p",{className:"p",children:"Controls what happens when text overflows a single line. Usually used with overflow hidden and white-space nowrap."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(vs,{})}),"Ellipsis combo"]}),r.jsx("pre",{className:"code tight",children:`overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"overflow-wrap"}),r.jsx("p",{className:"p",children:"Prevents long words or URLs from breaking layout. Use anywhere for safer text wrapping."}),r.jsx("pre",{className:"code",children:"overflow-wrap: anywhere;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@font-face"}),r.jsx("p",{className:"p",children:"Lets you load and use custom fonts by providing font files. Best practice is to use woff2 and define font-display."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick best practices"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer rem and unitless line-height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Always add fallback fonts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use overflow-wrap for long content"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use font-display: swap for custom fonts"]})]})]})]})]})},wf={Wrapper:ye.section`
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
    `},kf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(wf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Xi,{})}),r.jsx("span",{className:"title",children:"Display and Visibility"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Eo,{})}),"Layout presence vs visual presence"]}),r.jsx("p",{className:"p",children:'These properties decide whether an element participates in layout, and whether it is visible to the user. Understanding this saves a lot of "why is spacing still there" debugging time.'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display values"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("span",{className:"mono",children:"display"})," property controls how an element behaves in the layout. It can act like a block, inline text, a mixed type, or be removed from layout completely."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(ll,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Layout"}),r.jsx("div",{className:"miniSub",children:"Space rules"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Eo,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Visibility"}),r.jsx("div",{className:"miniSub",children:"Seen or hidden"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"block"}),r.jsx("p",{className:"p",children:"A block element starts on a new line and takes the full available width by default. You can set width and height."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"New line (stacked vertically)"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Can set width and height"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"inline"}),r.jsx("p",{className:"p",children:"Inline elements stay within a line of text. They do not start a new line. Width and height generally do not apply (they size to content)."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Same line (flows like text)"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Width and height usually ignored"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"inline-block"}),r.jsx("p",{className:"p",children:"Inline-block behaves like inline (stays in the same line), but you can set width and height like a block. Useful for buttons, badges, small UI parts."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Stays inline"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Supports width and height"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"none"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"display: none"})," removes the element from the layout completely. It does not take space and is not visible."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ki,{})}),"Remember"]}),r.jsx("div",{className:"calloutText",children:"If you need to hide something and remove its space, use display: none."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"contents"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"display: contents"})," makes the element's box disappear, but its children stay and behave as if they were direct children of the parent. Useful in some layouts, but be careful with accessibility and styling expectations."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ki,{})}),"Use carefully"]}),r.jsx("div",{className:"calloutText",children:"The wrapper stops existing as a box. So background, padding, borders on that wrapper will not show."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"visibility"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"visibility"})," controls if an element is visible, but the element still keeps its space in the layout."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"visibility: visible"}),"shows it"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"visibility: hidden"}),"hides it but keeps space"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"opacity vs visibility"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"opacity: 0"})," makes the element fully transparent, but it still takes space. Unlike visibility hidden, opacity elements can still receive clicks unless you also disable pointer events."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Click-safe hiding"]}),r.jsx("pre",{className:"code",children:`.hidden {
  opacity: 0;
  pointer-events: none;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display vs visibility"}),r.jsxs("p",{className:"p",children:["Use ",r.jsx("span",{className:"mono",children:"display: none"})," when you want the element gone from layout. Use"," ",r.jsx("span",{className:"mono",children:"visibility: hidden"})," when you want to hide it but keep its space. Use"," ",r.jsx("span",{className:"mono",children:"opacity"})," for fade effects, but remember it can still be clickable."]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"display: none"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v bad",children:"No"})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"visibility: hidden"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v ok",children:"Yes"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v bad",children:"No"})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"opacity: 0"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v ok",children:"Yes"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v ok",children:"Yes"})]})]})]}),r.jsxs("div",{className:"footNote",children:["Quick hack: if you use opacity for animation, pair it with ",r.jsx("span",{className:"mono",children:"pointer-events: none"})," ","when hidden."]})]})]})]})},Sf={Wrapper:ye.section`
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
    `},Cf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Sf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(ln,{})}),r.jsx("span",{className:"title",children:"Positioning"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(kp,{})}),"Control where elements sit"]}),r.jsx("p",{className:"p",children:'Positioning changes how an element is placed in the page. The key idea is "normal flow" vs "taken out of flow", plus how offsets and layering work.'}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Offsets"}),r.jsx("div",{className:"miniSub",children:"top right bottom left"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Layering"}),r.jsx("div",{className:"miniSub",children:"z-index and stacking"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"static"}),r.jsx("p",{className:"p",children:"Default position. The element follows normal document flow. Offsets like top or left do not move it."}),r.jsxs("div",{className:"hint",children:[r.jsx("span",{className:"hintIcon",children:r.jsx(bp,{})}),"If you never set position, it is static."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"relative"}),r.jsx("p",{className:"p",children:"The element stays in normal flow, but you can nudge it using top, left, right, bottom. Space is still reserved in the layout."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bo,{})}),"Common use"]}),r.jsx("pre",{className:"code",children:`.badge {
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
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"sticky"}),r.jsx("p",{className:"p",children:"Acts like relative until a scroll threshold is reached, then behaves like fixed within its scroll container. It needs at least one offset like top to stick."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(kp,{})}),"Common mistake"]}),r.jsx("div",{className:"calloutText",children:"sticky breaks if any parent has overflow: hidden or overflow: auto in unexpected ways. Also, set top for it to work."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bo,{})}),"Sticky sidebar"]}),r.jsx("pre",{className:"code",children:`.side {
  position: sticky;
  top: 20px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"top, left, right, bottom"}),r.jsx("p",{className:"p",children:"These are offset properties. They work when position is relative, absolute, fixed, or sticky. They do nothing on static elements."}),r.jsxs("div",{className:"miniGrid two",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"absolute"}),r.jsx("div",{className:"miniSub",children:"placed inside parent box"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"fixed"}),r.jsx("div",{className:"miniSub",children:"placed inside viewport"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"z-index"}),r.jsx("p",{className:"p",children:"z-index controls which element appears on top when elements overlap. It only works on positioned elements (not static) and within the same stacking context."}),r.jsxs("div",{className:"hint",children:[r.jsx("span",{className:"hintIcon",children:r.jsx(bp,{})}),"Bigger z-index does not always win if stacking contexts are different."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ce,{})}),"Simple overlap"]}),r.jsx("pre",{className:"code",children:`.modal {
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
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick rules to remember"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"absolute positions inside nearest positioned parent"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"fixed positions inside viewport"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"sticky needs top (or left etc) to work"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"z-index works only within stacking context"]})]})]})]})]})},Tf={Wrapper:ye.section`
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
    `},zf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Tf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Kp,{})}),r.jsx("span",{className:"title",children:"Flexbox"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ln,{})}),"One dimensional layout"]}),r.jsx("p",{className:"p",children:"Flexbox is used to align and distribute items in a row or a column. You set flex on a parent (container), then control how children (items) behave."}),r.jsxs("div",{className:"tipRow",children:[r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipKey",children:"Main axis"}),r.jsx("span",{className:"tipVal",children:"direction of flex items"})]}),r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipKey",children:"Cross axis"}),r.jsx("span",{className:"tipVal",children:"perpendicular direction"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display: flex"}),r.jsx("p",{className:"p",children:"Turns an element into a flex container. Its direct children become flex items and can be aligned using Flexbox properties."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Flex container"]}),r.jsx("pre",{className:"code",children:".row { display: flex; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-direction"}),r.jsx("p",{className:"p",children:"Controls the direction of the main axis. Items can flow horizontally or vertically."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row"})," (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row-reverse"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column-reverse"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-wrap"}),r.jsx("p",{className:"p",children:"Controls whether items stay on one line or wrap onto multiple lines when space is not enough."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"nowrap"})," (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"wrap"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"wrap-reverse"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"justify-content"}),r.jsx("p",{className:"p",children:"Aligns items along the main axis. Use it to control left-right spacing in a row or top-bottom spacing in a column."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"flex-start"}),r.jsx("span",{className:"chip",children:"center"}),r.jsx("span",{className:"chip",children:"flex-end"}),r.jsx("span",{className:"chip",children:"space-between"}),r.jsx("span",{className:"chip",children:"space-around"}),r.jsx("span",{className:"chip",children:"space-evenly"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"align-items"}),r.jsx("p",{className:"p",children:"Aligns items along the cross axis (per item). It affects how items line up inside the container."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"stretch"}),r.jsx("span",{className:"chip",children:"flex-start"}),r.jsx("span",{className:"chip",children:"center"}),r.jsx("span",{className:"chip",children:"flex-end"}),r.jsx("span",{className:"chip",children:"baseline"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"align-content"}),r.jsx("p",{className:"p",children:"Aligns lines of items when wrapping happens. Works only when there are multiple lines (wrap enabled)."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Rx,{})}),"Important"]}),r.jsx("div",{className:"calloutText",children:"If there is only one line, align-content does nothing. Use align-items instead."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"gap"}),r.jsx("p",{className:"p",children:"Adds spacing between flex items without using margins. Works nicely with wrap too."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Spacing"]}),r.jsx("pre",{className:"code",children:".row { gap: 12px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-grow"}),r.jsx("p",{className:"p",children:"Controls how much an item can grow when extra space is available. Higher number grows more."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"0"})," means do not grow (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," means grow to fill space"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-shrink"}),r.jsx("p",{className:"p",children:"Controls how much an item shrinks when there is not enough space. Higher number shrinks more."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," is default shrink"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"0"})," prevents shrinking"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-basis"}),r.jsx("p",{className:"p",children:"Sets the starting size of the item before grow or shrink happens. Think of it as the initial width (in row) or height (in column)."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Initial size"]}),r.jsx("pre",{className:"code",children:".item { flex-basis: 240px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"order"}),r.jsx("p",{className:"p",children:"Changes the visual order of items without changing HTML order. Default order is 0. Smaller values come first."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Zp,{})}),"Tip"]}),r.jsx("div",{className:"calloutText",children:"Use order carefully. It can confuse keyboard tab order and screen readers if overused."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"shorthand flex"}),r.jsx("p",{className:"p",children:"flex is a shorthand for flex-grow, flex-shrink, and flex-basis."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Shorthand examples"]}),r.jsx("pre",{className:"code",children:`/* grow shrink basis */
.itemA { flex: 1 1 0; }

/* common pattern: equal columns */
.itemB { flex: 1; } /* means 1 1 0% in most browsers */

/* fixed width item */
.itemC { flex: 0 0 240px; }`})]}),r.jsxs("div",{className:"footerNote",children:[r.jsxs("div",{className:"footerTitle",children:["Quick mental model",r.jsxs("span",{className:"badge",children:[r.jsx(Zi,{}),"grow"]}),r.jsxs("span",{className:"badge",children:[r.jsx(Zi,{}),"shrink"]}),r.jsx("span",{className:"badge",children:"basis"})]}),r.jsx("p",{className:"p muted",children:"Start at basis, then grow if extra space, shrink if not enough space."})]})]})]})]})},If={Wrapper:ye.section`
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
    `},Ef=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(If.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(dt,{})}),r.jsx("span",{className:"title",children:"CSS Grid"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Xi,{})}),"Two-dimensional layout system"]}),r.jsx("p",{className:"p",children:"CSS Grid is made for page layout. You define rows and columns on a parent container, then place children into the grid. It handles both directions: horizontal and vertical."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display: grid"}),r.jsx("p",{className:"p",children:"Turns an element into a grid container. Its direct children become grid items and can be placed into rows and columns."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Grid container"]}),r.jsx("pre",{className:"code",children:`.wrapper {
  display: grid;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-template-columns"}),r.jsx("p",{className:"p",children:"Defines the column tracks. Each value sets a column width. You can mix fixed units and flexible units."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Kp,{})}),"Columns examples"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: 200px 1fr 1fr;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-template-rows"}),r.jsx("p",{className:"p",children:"Defines the row tracks. Same idea as columns, but for height."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Rows example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-rows: auto 120px 1fr;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"repeat()"}),r.jsx("p",{className:"p",children:"Shortcut to repeat tracks. Useful when you want many equal columns or rows."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Qi,{})}),"Repeat example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: repeat(4, 1fr);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"minmax()"}),r.jsx("p",{className:"p",children:"Sets a minimum and maximum size for a track. Great for responsive grids."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Minmax example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: repeat(3, minmax(180px, 1fr));
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"fr unit"}),r.jsx("p",{className:"p",children:'fr means "fraction of free space". After fixed sizes are handled, leftover space is divided between fr tracks.'}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Gx,{})}),"Simple mental model"]}),r.jsxs("div",{className:"calloutText",children:["If you have ",r.jsx("span",{className:"mono",children:"1fr 2fr"}),", the second column gets twice the space of the first."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-gap (gap)"}),r.jsxs("p",{className:"p",children:["Adds spacing between grid rows and columns. Modern name is ",r.jsx("span",{className:"mono",children:"gap"}),". It works for grid and flex."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Gap example"]}),r.jsx("pre",{className:"code",children:`.grid {
  gap: 12px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-auto-flow"}),r.jsx("p",{className:"p",children:"Controls how items are automatically placed when you do not specify positions. Default is row. You can also use column or dense."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row"})," fills row by row"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column"})," fills column by column"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"dense"})," tries to fill gaps"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-column"}),r.jsx("p",{className:"p",children:"Places an item across columns. You can use start and end lines."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Column placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-column: 1 / 3;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-row"}),r.jsx("p",{className:"p",children:"Places an item across rows. Same idea as grid-column but for vertical placement."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Row placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-row: 2 / 4;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-area"}),r.jsx("p",{className:"p",children:"Shorthand to place an item with row start, column start, row end, column end. Also used with named areas."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Area placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-area: 1 / 2 / 3 / 4;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Named grid areas"}),r.jsxs("p",{className:"p",children:["You can name regions of your layout using",r.jsx("span",{className:"mono",children:" grid-template-areas"}),". Then assign items to those names with",r.jsx("span",{className:"mono",children:" grid-area"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Named areas example"]}),r.jsx("pre",{className:"code",children:`.layout {
  display: grid;
  gap: 12px;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { grid-area: main; }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Implicit vs explicit grid"}),r.jsxs("p",{className:"p",children:["The explicit grid is what you define with",r.jsx("span",{className:"mono",children:" grid-template-columns"})," and",r.jsx("span",{className:"mono",children:" grid-template-rows"}),". The implicit grid is created automatically when items overflow the defined tracks."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Xi,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:"If you did not define enough rows, Grid will create extra rows in the implicit grid to place items."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Define tracks with template rows and columns"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use repeat and minmax for responsive grids"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use named areas for clean page layouts"]})]})]})]})]})},Lf={Wrapper:ye.section`
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
    `},_f=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Lf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ai,{})}),r.jsx("span",{className:"title",children:"Responsive Design"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pillRow",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Oi,{})}),"Fits every screen"]}),r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(gs,{})}),"Layout + type scaling"]})]}),r.jsx("p",{className:"p",children:"Responsive design means the same UI adapts smoothly to different screen sizes and containers. You do this with media queries, flexible layouts, and fluid sizing."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Media queries"}),r.jsx("p",{className:"p",children:"Media queries apply CSS only when a condition is true, like screen width. They are the main tool for switching layouts at different sizes."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Basic example"]}),r.jsx("pre",{className:"code",children:`/* Apply styles when viewport is 768px and up */
@media (min-width: 768px) {
  .layout {
    display: grid;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Breakpoints"}),r.jsx("p",{className:"p",children:"Breakpoints are chosen widths where your layout needs a noticeable change. Pick breakpoints based on your design, not on random device names."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ai,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Small"}),r.jsx("div",{className:"miniSub",children:"0 to 600px"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Oi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Medium"}),r.jsx("div",{className:"miniSub",children:"600 to 1024px"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Qx,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Large"}),r.jsx("div",{className:"miniSub",children:"1024px and up"})]})]})]}),r.jsx("p",{className:"p muted",children:"These ranges are common, but you can adjust them based on your UI needs."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Mobile first approach"}),r.jsx("p",{className:"p",children:"Mobile first means you write the base CSS for small screens, then add enhancements using min-width media queries for larger screens. This keeps CSS cleaner and avoids overrides."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ai,{})}),"Pattern"]}),r.jsx("div",{className:"calloutText",children:"Base styles for mobile, then progressively enhance for bigger screens using min-width."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Desktop first approach"}),r.jsx("p",{className:"p",children:"Desktop first means you write base CSS for large screens and then adjust for smaller screens using max-width queries. It works, but it often leads to more overrides compared to mobile first."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Oi,{})}),"Pattern"]}),r.jsx("div",{className:"calloutText",children:"Base styles for desktop, then reduce or simplify for smaller screens using max-width."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Container queries"}),r.jsx("p",{className:"p",children:"Container queries let a component respond to the size of its parent container, not the full viewport. This is useful for reusable cards and widgets inside different layouts."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Basic idea"]}),r.jsx("pre",{className:"code",children:`/* 1) Create a container */
.cardWrap {
  container-type: inline-size;
}

/* 2) Style based on container width */
@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Fluid typography"}),r.jsx("p",{className:"p",children:"Fluid typography means font sizes scale smoothly between a minimum and maximum, instead of jumping only at breakpoints. This improves readability across devices."}),r.jsxs("div",{className:"miniGrid two",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Lo,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Min size"}),r.jsx("div",{className:"miniSub",children:"Readable on mobile"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Lo,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Max size"}),r.jsx("div",{className:"miniSub",children:"Looks strong on desktop"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"clamp for responsiveness"}),r.jsx("p",{className:"p",children:"clamp lets you set a minimum, preferred, and maximum value. It is perfect for responsive font sizes, gaps, padding, and widths."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"clamp example"]}),r.jsx("pre",{className:"code",children:`/* font-size will scale with viewport
   but never go below 18px or above 42px */
.heading {
  font-size: clamp(18px, 4vw, 42px);
}

/* spacing example */
.section {
  padding: clamp(14px, 2.5vw, 28px);
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(dt,{})}),"When to use clamp"]}),r.jsx("div",{className:"calloutText",children:"Use it when you want smooth scaling without adding extra breakpoints."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer mobile first with min-width queries"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Choose breakpoints based on layout needs"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use clamp for smoother typography and spacing"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use container queries for reusable components"]})]})]})]})]})},Pf={Wrapper:ye.section`
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
    `},Bf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Pf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(vs,{})}),r.jsx("span",{className:"title",children:"Transitions"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(il,{})}),"Smooth state changes"]}),r.jsx("p",{className:"p",children:"CSS transitions animate the change from one value to another. Most commonly used for hover, focus, active, and class toggles."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-property"}),r.jsxs("p",{className:"p",children:["Decides which CSS property should animate. You can animate one property, multiple properties, or use",r.jsx("span",{className:"mono",children:" all"})," (not always recommended)."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate one:",r.jsx("span",{className:"mono",children:" opacity"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate many:",r.jsx("span",{className:"mono",children:" opacity, transform"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate everything:",r.jsx("span",{className:"mono",children:" all"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-duration"}),r.jsxs("p",{className:"p",children:["How long the transition takes. Common values are",r.jsx("span",{className:"mono",children:" 150ms"}),",",r.jsx("span",{className:"mono",children:" 200ms"}),",",r.jsx("span",{className:"mono",children:" 300ms"}),"."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Yp,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Duration"}),r.jsx("div",{className:"miniSub",children:"Example: 200ms"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-timing-function"}),r.jsx("p",{className:"p",children:"Controls the speed curve of the animation. It decides whether it starts slow, ends slow, or stays linear."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"linear"})," - constant speed"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease"})," - default, smooth"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-in"})," - starts slow"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-out"})," - ends slow"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-in-out"})," - slow start and end"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-delay"}),r.jsx("p",{className:"p",children:"Wait time before the transition starts. Useful when you want a small pause, or to stagger interactions."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Wx,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Delay"}),r.jsx("div",{className:"miniSub",children:"Example: 80ms"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"cubic-bezier"}),r.jsx("p",{className:"p",children:"A custom timing curve. You can fine-tune how the transition accelerates and decelerates. It uses 4 numbers that define a curve."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Zi,{})}),"Quick idea"]}),r.jsx("div",{className:"calloutText",children:"First two numbers control the curve near the start. Last two numbers control the curve near the end."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Custom curve example"]}),r.jsx("pre",{className:"code",children:"transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Easing functions"}),r.jsx("p",{className:"p",children:"Easing means the motion feels natural instead of robotic. Most UI transitions look better when they accelerate a bit and slow down at the end."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Recommended UI transition"]}),r.jsx("pre",{className:"code",children:"transition: transform 200ms ease, opacity 200ms ease;"})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick tip"}),r.jsxs("p",{className:"p muted",children:["Prefer animating",r.jsx("span",{className:"mono",children:" transform"})," and",r.jsx("span",{className:"mono",children:" opacity"}),". They are smoother and usually cheaper for the browser than layout properties like width or top."]})]})]})]})]})},Mf={Wrapper:ye.section`
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
    `},Rf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Mf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Hx,{})}),r.jsx("span",{className:"title",children:"Animations"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(vs,{})}),"Motion with keyframes"]}),r.jsxs("p",{className:"p",children:["CSS animations use"," ",r.jsx("span",{className:"mono",children:"@keyframes"})," to define stages, and animation properties to control timing, direction, looping, and play state."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@keyframes"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"@keyframes"})," defines the animation steps. You can use"," ",r.jsx("span",{className:"mono",children:"from/to"})," or percentages."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Keyframes example"]}),r.jsx("pre",{className:"code",children:`@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-name"}),r.jsx("p",{className:"p",children:"Connects an element to a keyframes definition by name. If the name is missing, nothing animates."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Name"}),r.jsx("div",{className:"miniSub",children:"fadeUp"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-duration"}),r.jsxs("p",{className:"p",children:["How long one animation cycle takes. Example:"," ",r.jsx("span",{className:"mono",children:"300ms"}),","," ",r.jsx("span",{className:"mono",children:"1.2s"}),"."]}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Yp,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Duration"}),r.jsx("div",{className:"miniSub",children:"600ms"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-delay"}),r.jsxs("p",{className:"p",children:["Wait time before the animation starts. It can be"," ",r.jsx("span",{className:"mono",children:"0s"})," or more."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-iteration-count"}),r.jsxs("p",{className:"p",children:["How many times the animation repeats. Use"," ",r.jsx("span",{className:"mono",children:"1"}),","," ",r.jsx("span",{className:"mono",children:"2"}),", or"," ",r.jsx("span",{className:"mono",children:"infinite"}),"."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," plays once"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"infinite"})," loops forever"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-direction"}),r.jsx("p",{className:"p",children:"Controls the direction on each cycle. Common values: normal, reverse, alternate, alternate-reverse."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"normal"})," - from start to end"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"reverse"})," - from end to start"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"alternate"})," - forward then backward"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-fill-mode"}),r.jsx("p",{className:"p",children:"Decides what styles apply before start and after end. This is super useful for entrance animations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"none"})," - default"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"forwards"})," - keep the last keyframe styles"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"backwards"})," - apply first keyframe during delay"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"both"})," - forwards + backwards"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-play-state"}),r.jsx("p",{className:"p",children:"Controls whether an animation is running or paused. Good for hover pause effects and user controls."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(qx,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Play state"}),r.jsx("div",{className:"miniSub",children:"running or paused"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation shorthand"}),r.jsx("p",{className:"p",children:"A short way to set multiple animation properties in one line. The order is flexible, but duration and name must be clear."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Shorthand example"]}),r.jsx("pre",{className:"code",children:`.card {
  animation: fadeUp 600ms ease 120ms 1 normal both;
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Zx,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:"For most UI animations, you will use: name, duration, easing, delay, and fill-mode."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Define keyframes first"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Set name + duration"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use fill-mode for entrance animations"]})]})]})]})]})},Df={Wrapper:ye.section`
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
    `},Ff=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Df.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Np,{})}),r.jsx("span",{className:"title",children:"Advanced Layout and Visual Effects"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"Practical modern CSS effects"]}),r.jsx("p",{className:"p",children:"These properties help you control how media fits inside boxes, apply visual effects, shape elements, and create smooth scrolling experiences."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"object-fit"}),r.jsxs("p",{className:"p",children:["Controls how an image or video fits inside its box when you set fixed width and height. Most common values are",r.jsx("span",{className:"mono",children:" cover "})," (fills, may crop) and ",r.jsx("span",{className:"mono",children:" contain "})," (fits fully, may leave empty space)."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(qi,{})}),"Common usage"]}),r.jsx("pre",{className:"code",children:`.thumb img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"object-position"}),r.jsxs("p",{className:"p",children:["Works with ",r.jsx("span",{className:"mono",children:"object-fit"}),". When the media is cropped (like cover), this decides which part stays visible. Example: keep the top of a portrait visible."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(ln,{})}),"Focus area"]}),r.jsx("pre",{className:"code",children:`.thumb img {
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
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"clip-path"}),r.jsxs("p",{className:"p",children:["Crops an element into a shape. Common shapes are",r.jsx("span",{className:"mono",children:" circle "}),",",r.jsx("span",{className:"mono",children:" ellipse "}),", and",r.jsx("span",{className:"mono",children:" polygon "}),". Great for badges and angled sections."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Ax,{})}),"Polygon cut"]}),r.jsx("pre",{className:"code",children:`.tag {
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"mask"}),r.jsx("p",{className:"p",children:"Masks hide parts of an element using an image or gradient. Similar to clip-path but more flexible for soft edges and fades. Support can vary, so test in your target browsers."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Np,{})}),"Gradient mask"]}),r.jsx("pre",{className:"code",children:`.fade {
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent);
  mask-image: linear-gradient(to bottom, #000 60%, transparent);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"aspect-ratio"}),r.jsx("p",{className:"p",children:"Forces a box to keep a width:height ratio. Great for cards, video embeds, and image placeholders. Helps avoid layout shift while media loads."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(dt,{})}),"Card ratio"]}),r.jsx("pre",{className:"code",children:`.videoBox {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--color-surface-2);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"scroll-behavior"}),r.jsxs("p",{className:"p",children:["Controls smooth scrolling for anchor links and programmatic scrolls. Usually set on",r.jsx("span",{className:"mono",children:" html "}),". Respect reduced-motion settings for accessibility."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(ln,{})}),"Smooth scroll"]}),r.jsx("pre",{className:"code",children:`html {
  scroll-behavior: smooth;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"scroll-snap"}),r.jsx("p",{className:"p",children:'Makes scrolling "snap" to items, like carousels or full page sections. Use it on the scroll container and on child items.'}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(dt,{})}),"Snap list"]}),r.jsx("pre",{className:"code",children:`.snapRow {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.snapItem {
  scroll-snap-align: start;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick tip"}),r.jsx("p",{className:"p",children:"Use visual effects carefully. Filters, blend modes, and backdrop filters can be expensive on low-end devices. Prefer subtle usage and test performance."})]})]})]})},Of={Wrapper:ye.section`
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
    `},Af=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Of.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(gs,{})}),r.jsx("span",{className:"title",children:"CSS Variables"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(vs,{})}),"Reusable tokens for styling"]}),r.jsx("p",{className:"p",children:"CSS Variables are also called custom properties. They let you store values once and reuse them everywhere. They are perfect for themes, spacing systems, and consistent UI styling."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Custom properties"}),r.jsxs("p",{className:"p",children:["Custom properties are variables you define in CSS using names that start with ",r.jsx("span",{className:"mono",children:"--"}),". Example: ",r.jsx("span",{className:"mono",children:"--primary"})," or"," ",r.jsx("span",{className:"mono",children:"--space-12"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Defining variables"]}),r.jsx("pre",{className:"code",children:`:root {
  --primary: #4ea1ff;
  --radius: 14px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"var()"}),r.jsxs("p",{className:"p",children:["You use the ",r.jsx("span",{className:"mono",children:"var()"})," function to read a CSS variable and apply it as a value in other rules."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Using variables"]}),r.jsx("pre",{className:"code",children:`.btn {
  background: var(--primary);
  border-radius: var(--radius);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Scope"}),r.jsxs("p",{className:"p",children:["Variables follow normal CSS scoping rules. If you define a variable on ",r.jsx("span",{className:"mono",children:":root"}),", it is available everywhere. If you define it on a specific container, it applies only inside that container and its children."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Global"}),r.jsx("div",{className:"miniSub",children:":root"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ce,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Local"}),r.jsx("div",{className:"miniSub",children:".card"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Global vs local scope"]}),r.jsx("pre",{className:"code",children:`:root {
  --text: #f5f7fa;
}

.card {
  --text: #111827;
  color: var(--text);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Fallback values"}),r.jsxs("p",{className:"p",children:["If a variable is missing, you can provide a fallback value inside ",r.jsx("span",{className:"mono",children:"var()"}),". The browser will use the fallback when the variable is not defined."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(q,{})}),"Why fallback is useful"]}),r.jsx("div",{className:"calloutText",children:"It prevents broken styles and makes components safer to reuse in different pages."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"var() with fallback"]}),r.jsx("pre",{className:"code",children:`.badge {
  background: var(--badge-bg, #2d333b);
  color: var(--badge-text, #f5f7fa);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Dynamic theming"}),r.jsxs("p",{className:"p",children:["Dynamic theming means switching theme values without rewriting component CSS. You simply change variables on a parent like ",r.jsx("span",{className:"mono",children:"html"})," or"," ",r.jsx("span",{className:"mono",children:"body"}),"."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(cl,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Dark"}),r.jsx("div",{className:"miniSub",children:"default"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(dl,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Light"}),r.jsx("div",{className:"miniSub",children:"data-theme"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Theme switch example"]}),r.jsx("pre",{className:"code",children:`:root {
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
}`})]}),r.jsx("p",{className:"p muted",children:"Tip: This is exactly how your theme.css works. Components stay the same, only tokens change."})]})]})]})},Wf={Wrapper:ye.section`
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
    `},Uf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Wf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ce,{})}),r.jsx("span",{className:"title",children:"CSS Architecture"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ce,{})}),"How to organize CSS in real projects"]}),r.jsx("p",{className:"p",children:"CSS architecture is about keeping styles readable, scalable, and easy to maintain as the project grows. These approaches solve the same problem in different ways."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"BEM methodology"}),r.jsx("p",{className:"p",children:"BEM stands for Block, Element, Modifier. It is a naming style that keeps class names predictable and avoids clashes. You write classes like a small system."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Sp,{})}),"Example naming"]}),r.jsx("pre",{className:"code",children:`.card { }
.card__title { }
.card--featured { }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Utility classes"}),r.jsx("p",{className:"p",children:"Utility classes are small single-purpose classes like padding, margin, text colors, and flex helpers. You build UI by combining utilities instead of writing new CSS for every component."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(dt,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Example"}),r.jsx("div",{className:"miniSub",children:".mt-10 .p-12 .text-center"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Atomic CSS"}),r.jsx("p",{className:"p",children:"Atomic CSS is an extreme form of utilities where every class maps to one very specific style. It reduces duplication because many components reuse the same tiny classes."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Small reusable classes"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Less custom CSS over time"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"More classes in HTML"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Component based styling"}),r.jsx("p",{className:"p",children:"Styles live with components. Each component owns its own CSS so changes stay localized. This fits modern UI development where UI is built from reusable parts."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(ll,{})}),"Simple idea"]}),r.jsx("div",{className:"calloutText",children:"One component = one styling boundary."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"CSS Modules"}),r.jsx("p",{className:"p",children:"CSS Modules scope class names locally by default. This prevents global class conflicts. You write normal CSS, and the build tool generates unique class names."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Kx,{})}),"Idea in one line"]}),r.jsx("pre",{className:"code",children:`// styles.module.css
.button { }

/* used as */
styles.button`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Styled Components"}),r.jsx("p",{className:"p",children:"Styled Components is CSS-in-JS. You write styles inside JavaScript and attach them to components. It supports dynamic styling using props and makes scoping automatic."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Xx,{})}),"When it is useful"]}),r.jsx("div",{className:"calloutText",children:"Great for component libraries, theming, and reusable UI patterns."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Tailwind concept"}),r.jsx("p",{className:"p",children:"Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you compose UI using pre-defined utility classes. It is basically a big, consistent utility system."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Xp,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Core idea"}),r.jsx("div",{className:"miniSub",children:"build UI by combining utilities"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Design tokens"}),r.jsx("p",{className:"p",children:"Design tokens are reusable values like colors, spacing, font sizes, radius, and shadows. Tokens keep the UI consistent and make theme changes easy."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Sp,{})}),"Token example"]}),r.jsx("pre",{className:"code",children:`:root {
  --color-primary: #4ea1ff;
  --radius-lg: 18px;
  --space-12: 12px;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick take"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"BEM keeps naming consistent"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Utilities reduce custom CSS"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Modules and styled-components avoid conflicts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Tokens keep themes consistent"]})]})]})]})]})},Hf={Wrapper:ye.section`
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
    `},$f=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Hf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(vs,{})}),r.jsx("span",{className:"title",children:"Performance and Best Practices"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(il,{})}),"Make UI fast and stable"]}),r.jsx("p",{className:"p",children:"CSS performance is mostly about avoiding expensive work in the browser. The big goals are stable layout, less reflow, less repaint, and smoother animations."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Critical CSS"}),r.jsx("p",{className:"p",children:"Critical CSS means loading only the styles needed to render the above-the-fold content first. This improves first paint time because the page can show something useful without waiting for all CSS to download."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Beginner tip"]}),r.jsx("div",{className:"calloutText",children:"Keep your initial layout styles small. Load non-essential styles later (for deep sections, modals, or heavy pages)."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Avoiding layout shifts"}),r.jsx("p",{className:"p",children:"Layout shift happens when content jumps while loading. The most common reason is images or ads without fixed space. Always reserve space using width, height, or aspect-ratio."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Give images width and height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use aspect-ratio for responsive media"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid inserting content above existing content"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Reserve space"]}),r.jsx("pre",{className:"code",children:`.cardMedia {
  width: 100%;
  aspect-ratio: 16 / 9;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Avoiding heavy selectors"}),r.jsx("p",{className:"p",children:"Heavy selectors make matching slower and can create confusing CSS. Prefer simple class-based selectors over deep nesting and complex patterns."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(pt,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Prefer"}),r.jsx("div",{className:"miniSub",children:".btnPrimary"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(pt,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Avoid"}),r.jsx("div",{className:"miniSub",children:"header nav ul li a"})]})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ce,{})}),"Simple rule"]}),r.jsx("div",{className:"calloutText",children:"If your selector depends on HTML structure too much, it becomes fragile and harder to maintain."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"GPU acceleration"}),r.jsx("p",{className:"p",children:"Some animations can run smoother when handled by the GPU (graphics processor). Usually, transforms and opacity are the safest properties for smooth animations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate transform and opacity for best results"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid animating width, height, top, left often"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"will-change"}),r.jsx("p",{className:"p",children:"will-change tells the browser that an element is likely to change soon. This can improve animation smoothness, but using it everywhere can waste memory and hurt performance."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ox,{})}),"Use carefully"]}),r.jsx("div",{className:"calloutText",children:"Apply will-change only to elements you animate often and remove it when not needed."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`.card {
  will-change: transform;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Minimizing repaint and reflow"}),r.jsx("p",{className:"p",children:"Reflow (layout) happens when the browser recalculates element sizes and positions. Repaint happens when pixels are redrawn. Both are costly when repeated often."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate transform and opacity"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Batch DOM updates (avoid many small changes)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid reading layout values repeatedly while writing styles"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"DevTools performance tab"}),r.jsx("p",{className:"p",children:"Chrome DevTools Performance tab helps you record what the browser is doing. You can see scripting, layout, paint, and rendering work. This makes performance issues visible instead of guessing."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(em,{})}),"What to look for"]}),r.jsx("div",{className:"calloutText",children:"Look for long layout and paint bars, frequent recalculations, and heavy style recalculation."})]})]})]})]})},Vf={Wrapper:ye.section`
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
    `},Gf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Vf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(Eo,{})}),r.jsx("span",{className:"title",children:"Accessibility in CSS"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(pt,{})}),"Make UI usable for everyone"]}),r.jsx("p",{className:"p",children:"Accessibility in CSS means your UI should stay readable, keyboard-friendly, and comfortable for people with low vision, motion sensitivity, or different system theme preferences."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Focus styles"}),r.jsx("p",{className:"p",children:"Focus styles show where the keyboard is currently located. Without visible focus, keyboard users get lost. Always keep focus outlines visible for buttons, links, inputs, and custom controls."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Qp,{})}),"Avoid this"]}),r.jsxs("div",{className:"calloutText",children:["Do not remove outlines globally like",r.jsx("span",{className:"mono",children:" outline: none; "}),"unless you replace it with a better focus style."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:":focus-visible"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:":focus-visible"})," helps show focus rings mainly for keyboard navigation, while mouse clicks usually do not show the ring. This reduces visual noise but keeps keyboard accessibility strong."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Recommended focus pattern"]}),r.jsx("pre",{className:"code",children:`button:focus {
  outline: none;
}

button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Color contrast"}),r.jsx("p",{className:"p",children:"Text must stand out from its background. Low contrast makes reading hard for many users. Keep body text clear, avoid light gray on white, and avoid dark gray on black."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use strong contrast for body text"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not rely only on color to show meaning"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Links should be visually obvious"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Reduced motion media query"}),r.jsxs("p",{className:"p",children:["Some users feel discomfort from animations. Respect user settings using",r.jsx("span",{className:"mono",children:" prefers-reduced-motion "}),"to reduce or disable motion."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Reduce motion safely"]}),r.jsx("pre",{className:"code",children:`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"prefers-color-scheme"}),r.jsxs("p",{className:"p",children:["Users can set system theme to dark or light. You can automatically adjust colors using",r.jsx("span",{className:"mono",children:" prefers-color-scheme"}),". This is great when you want a default theme that matches the OS."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(cl,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Dark"}),r.jsx("div",{className:"miniSub",children:"Default at night"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(dl,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Light"}),r.jsx("div",{className:"miniSub",children:"Bright background"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f1117;
    --color-text-primary: #f5f7fa;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Readable font sizing"}),r.jsx("p",{className:"p",children:"Readable text means comfortable size, spacing, and line length. Avoid tiny fonts. Use a good line-height and keep paragraphs at a readable width."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Body text around 14px to 18px feels safe"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use line-height around 1.5 to 1.8 for paragraphs"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid very long lines, keep max-width for content"]})]}),r.jsxs("div",{className:"flow",children:[r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(Lo,{})}),"Font size"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(il,{})}),"Line height"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Comfort"})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Focus ring visible for keyboard users"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer :focus-visible over :focus everywhere"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Respect reduced motion setting"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Good text contrast and readable sizing"]})]})]})]})]})},Qf={Wrapper:ye.section`
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
    `},Yf=()=>{const[o,c]=ge.useState(!1),l=()=>c(p=>!p);return r.jsxs(Qf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(Oe,{}):r.jsx(Ae,{})}),r.jsx("span",{className:"icon",children:r.jsx(vs,{})}),r.jsx("span",{className:"title",children:"Modern CSS Features"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(vs,{})}),"Newer CSS that reduces hacks"]}),r.jsx("p",{className:"p",children:"These features make CSS more powerful and more maintainable. Use them when supported, and keep fallbacks in mind for older browsers."}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTitle",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(Fx,{})}),"Beginner note"]}),r.jsx("div",{className:"noteText",children:'Modern CSS is about writing less custom code and fewer "workarounds". The browser can now do many things directly.'})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:":has()"}),r.jsx("p",{className:"p",children:":has() is like a parent selector. It lets you style an element based on what it contains. Example: style a card differently if it has a warning badge inside."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Parent style based on child"]}),r.jsx("pre",{className:"code",children:`.card:has(.badge.warning) {
  border-color: var(--color-warning);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Container queries"}),r.jsx("p",{className:"p",children:"Media queries depend on the viewport size. Container queries depend on the size of a component's container. This makes responsive components easier to build."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(gs,{})}),"Component based responsiveness"]}),r.jsx("pre",{className:"code",children:`.cardGrid {
  container-type: inline-size;
}

@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"subgrid"}),r.jsx("p",{className:"p",children:"subgrid lets nested grid items align with the parent grid tracks. Useful when you want consistent column alignment across multiple cards or rows."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(dt,{})}),"Inherit parent grid tracks"]}),r.jsx("pre",{className:"code",children:`.parent {
  display: grid;
  grid-template-columns: 140px 1fr;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Logical properties"}),r.jsx("p",{className:"p",children:"Logical properties are direction aware. Instead of margin-left or padding-right, you use margin-inline, padding-block. This works better for RTL languages and different writing modes."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"margin-inline"})," replaces left and right"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"padding-block"})," replaces top and bottom"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Qi,{})}),"RTL friendly spacing"]}),r.jsx("pre",{className:"code",children:`.box {
  padding-block: 12px;
  padding-inline: 16px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Writing modes"}),r.jsx("p",{className:"p",children:"writing-mode changes text flow direction, like vertical text layouts. It also affects logical properties and how inline and block directions work."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Qi,{})}),"Vertical text example"]}),r.jsx("pre",{className:"code",children:`.verticalLabel {
  writing-mode: vertical-rl;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"color-mix()"}),r.jsx("p",{className:"p",children:"color-mix() lets you blend two colors. Useful for creating hover colors, borders, and subtle surfaces without hardcoding many color values."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Yi,{})}),"Mixing two colors"]}),r.jsx("pre",{className:"code",children:`.chip {
  background: color-mix(in srgb, var(--color-primary) 18%, transparent);
  border-color: color-mix(in srgb, var(--color-primary) 40%, var(--color-border));
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Nesting"}),r.jsx("p",{className:"p",children:"CSS nesting allows you to write nested rules similar to SCSS, but now in CSS itself. It improves readability for component style blocks."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(q,{})}),"Nested rules"]}),r.jsx("pre",{className:"code",children:`.card {
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
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@scope"}),r.jsx("p",{className:"p",children:"@scope helps limit where styles apply. It allows you to write rules that only affect a specific part of the DOM. This reduces accidental styling conflicts."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(pt,{})}),"Scoped styling"]}),r.jsx("pre",{className:"code",children:`@scope (.card) {
  .title {
    font-weight: 900;
  }
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer container queries for component layouts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use logical properties for RTL readiness"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use @layer to keep cascade predictable"]})]})]})]})]})},$p=[["about","Overview",bu],["fundamentals","CSS Fundamentals",df],["apply","Ways to Apply CSS",uf],["selectors","Selectors",xf],["box","Box Model",ff],["units","Units and Values",vf],["colors","Colors and Backgrounds",jf],["type","Typography",bf],["display","Display and Visibility",kf],["position","Positioning",Cf],["flex","Flexbox",zf],["grid","CSS Grid",Ef],["responsive","Responsive Design",_f],["transitions","Transitions",Bf],["animations","Animations",Rf],["effects","Layout and Visual Effects",Ff],["variables","CSS Variables",Af],["architecture","CSS Architecture",Uf],["performance","Performance",$f],["accessibility","Accessibility",Gf],["modern","Modern CSS",Yf]],Kf=()=>{var m;const[o,c]=ge.useState("about"),l=ge.useRef(null),p=((m=$p.find(([j])=>j===o))==null?void 0:m[2])||bu;return ge.useEffect(()=>{var j;(j=l.current)==null||j.scrollTo({top:0,behavior:"auto"}),requestAnimationFrame(()=>{var k,z;return(z=(k=l.current)==null?void 0:k.querySelector('[aria-expanded="false"]'))==null?void 0:z.click()})},[o]),r.jsxs(Gi.Wrapper,{children:[r.jsx(Gi.Header,{children:r.jsx(of,{})}),r.jsxs(Gi.Main,{ref:l,children:[r.jsxs("div",{className:"workspaceLayout",children:[r.jsxs("aside",{className:"sideMenu","aria-label":"CSS topics",children:[r.jsx("p",{className:"menuLabel",children:"Study guide"}),r.jsx("nav",{children:$p.map(([j,k])=>r.jsx("button",{type:"button",className:o===j?"active":"",onClick:()=>c(j),children:k},j))})]}),r.jsx("section",{className:"contentWrapper","aria-live":"polite",children:r.jsx(p,{})})]}),r.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var j;return(j=l.current)==null?void 0:j.scrollTo({top:0,behavior:"smooth"})},children:r.jsx(Dx,{})}),r.jsx("div",{className:"footerWrapper",children:r.jsx(lf,{})})]})]})};zx.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(Kf,{})}));
