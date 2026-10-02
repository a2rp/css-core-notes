(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))p(g);new MutationObserver(g=>{for(const j of g)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&p(S)}).observe(document,{childList:!0,subtree:!0});function l(g){const j={};return g.integrity&&(j.integrity=g.integrity),g.referrerPolicy&&(j.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?j.credentials="include":g.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(g){if(g.ep)return;g.ep=!0;const j=l(g);fetch(g.href,j)}})();function fx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var _i={exports:{}},Js={},Pi={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function gx(){if(ip)return te;ip=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),D=Symbol.iterator;function O(m){return m===null||typeof m!="object"?null:(m=D&&m[D]||m["@@iterator"],typeof m=="function"?m:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,V={};function X(m,N,q){this.props=m,this.context=N,this.refs=V,this.updater=q||Y}X.prototype.isReactComponent={},X.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function xe(){}xe.prototype=X.prototype;function ie(m,N,q){this.props=m,this.context=N,this.refs=V,this.updater=q||Y}var oe=ie.prototype=new xe;oe.constructor=ie,ne(oe,X.prototype),oe.isPureReactComponent=!0;var ee=Array.isArray,pe=Object.prototype.hasOwnProperty,K={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Be(m,N,q){var Z,se={},re=null,ue=null;if(N!=null)for(Z in N.ref!==void 0&&(ue=N.ref),N.key!==void 0&&(re=""+N.key),N)pe.call(N,Z)&&!U.hasOwnProperty(Z)&&(se[Z]=N[Z]);var ae=arguments.length-2;if(ae===1)se.children=q;else if(1<ae){for(var ce=Array(ae),We=0;We<ae;We++)ce[We]=arguments[We+2];se.children=ce}if(m&&m.defaultProps)for(Z in ae=m.defaultProps,ae)se[Z]===void 0&&(se[Z]=ae[Z]);return{$$typeof:o,type:m,key:re,ref:ue,props:se,_owner:K.current}}function or(m,N){return{$$typeof:o,type:m.type,key:N,ref:m.ref,props:m.props,_owner:m._owner}}function br(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function Dr(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(q){return N[q]})}var hr=/\/+/g;function Ke(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Dr(""+m.key):N.toString(36)}function ar(m,N,q,Z,se){var re=typeof m;(re==="undefined"||re==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(re){case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case o:case c:ue=!0}}if(ue)return ue=m,se=se(ue),m=Z===""?"."+Ke(ue,0):Z,ee(se)?(q="",m!=null&&(q=m.replace(hr,"$&/")+"/"),ar(se,N,q,"",function(We){return We})):se!=null&&(br(se)&&(se=or(se,q+(!se.key||ue&&ue.key===se.key?"":(""+se.key).replace(hr,"$&/")+"/")+m)),N.push(se)),1;if(ue=0,Z=Z===""?".":Z+":",ee(m))for(var ae=0;ae<m.length;ae++){re=m[ae];var ce=Z+Ke(re,ae);ue+=ar(re,N,q,ce,se)}else if(ce=O(m),typeof ce=="function")for(m=ce.call(m),ae=0;!(re=m.next()).done;)re=re.value,ce=Z+Ke(re,ae++),ue+=ar(re,N,q,ce,se);else if(re==="object")throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ue}function xr(m,N,q){if(m==null)return m;var Z=[],se=0;return ar(m,Z,"","",function(re){return N.call(q,re,se++)}),Z}function $e(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q)},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var ve={current:null},z={transition:null},F={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:z,ReactCurrentOwner:K};function I(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:xr,forEach:function(m,N,q){xr(m,function(){N.apply(this,arguments)},q)},count:function(m){var N=0;return xr(m,function(){N++}),N},toArray:function(m){return xr(m,function(N){return N})||[]},only:function(m){if(!br(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},te.Component=X,te.Fragment=l,te.Profiler=g,te.PureComponent=ie,te.StrictMode=p,te.Suspense=T,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,te.act=I,te.cloneElement=function(m,N,q){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var Z=ne({},m.props),se=m.key,re=m.ref,ue=m._owner;if(N!=null){if(N.ref!==void 0&&(re=N.ref,ue=K.current),N.key!==void 0&&(se=""+N.key),m.type&&m.type.defaultProps)var ae=m.type.defaultProps;for(ce in N)pe.call(N,ce)&&!U.hasOwnProperty(ce)&&(Z[ce]=N[ce]===void 0&&ae!==void 0?ae[ce]:N[ce])}var ce=arguments.length-2;if(ce===1)Z.children=q;else if(1<ce){ae=Array(ce);for(var We=0;We<ce;We++)ae[We]=arguments[We+2];Z.children=ae}return{$$typeof:o,type:m.type,key:se,ref:re,props:Z,_owner:ue}},te.createContext=function(m){return m={$$typeof:S,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:j,_context:m},m.Consumer=m},te.createElement=Be,te.createFactory=function(m){var N=Be.bind(null,m);return N.type=m,N},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:L,render:m}},te.isValidElement=br,te.lazy=function(m){return{$$typeof:$,_payload:{_status:-1,_result:m},_init:$e}},te.memo=function(m,N){return{$$typeof:Q,type:m,compare:N===void 0?null:N}},te.startTransition=function(m){var N=z.transition;z.transition={};try{m()}finally{z.transition=N}},te.unstable_act=I,te.useCallback=function(m,N){return ve.current.useCallback(m,N)},te.useContext=function(m){return ve.current.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m){return ve.current.useDeferredValue(m)},te.useEffect=function(m,N){return ve.current.useEffect(m,N)},te.useId=function(){return ve.current.useId()},te.useImperativeHandle=function(m,N,q){return ve.current.useImperativeHandle(m,N,q)},te.useInsertionEffect=function(m,N){return ve.current.useInsertionEffect(m,N)},te.useLayoutEffect=function(m,N){return ve.current.useLayoutEffect(m,N)},te.useMemo=function(m,N){return ve.current.useMemo(m,N)},te.useReducer=function(m,N,q){return ve.current.useReducer(m,N,q)},te.useRef=function(m){return ve.current.useRef(m)},te.useState=function(m){return ve.current.useState(m)},te.useSyncExternalStore=function(m,N,q){return ve.current.useSyncExternalStore(m,N,q)},te.useTransition=function(){return ve.current.useTransition()},te.version="18.3.1",te}var lp;function nl(){return lp||(lp=1,Pi.exports=gx()),Pi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function vx(){if(cp)return Js;cp=1;var o=nl(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,g=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(L,T,Q){var $,D={},O=null,Y=null;Q!==void 0&&(O=""+Q),T.key!==void 0&&(O=""+T.key),T.ref!==void 0&&(Y=T.ref);for($ in T)p.call(T,$)&&!j.hasOwnProperty($)&&(D[$]=T[$]);if(L&&L.defaultProps)for($ in T=L.defaultProps,T)D[$]===void 0&&(D[$]=T[$]);return{$$typeof:c,type:L,key:O,ref:Y,props:D,_owner:g.current}}return Js.Fragment=l,Js.jsx=S,Js.jsxs=S,Js}var dp;function yx(){return dp||(dp=1,_i.exports=vx()),_i.exports}var r=yx(),fo={},Bi={exports:{}},sr={},Mi={exports:{}},Ri={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function jx(){return pp||(pp=1,(function(o){function c(z,F){var I=z.length;z.push(F);e:for(;0<I;){var m=I-1>>>1,N=z[m];if(0<g(N,F))z[m]=F,z[I]=N,I=m;else break e}}function l(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var F=z[0],I=z.pop();if(I!==F){z[0]=I;e:for(var m=0,N=z.length,q=N>>>1;m<q;){var Z=2*(m+1)-1,se=z[Z],re=Z+1,ue=z[re];if(0>g(se,I))re<N&&0>g(ue,se)?(z[m]=ue,z[re]=I,m=re):(z[m]=se,z[Z]=I,m=Z);else if(re<N&&0>g(ue,I))z[m]=ue,z[re]=I,m=re;else break e}}return F}function g(z,F){var I=z.sortIndex-F.sortIndex;return I!==0?I:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;o.unstable_now=function(){return j.now()}}else{var S=Date,L=S.now();o.unstable_now=function(){return S.now()-L}}var T=[],Q=[],$=1,D=null,O=3,Y=!1,ne=!1,V=!1,X=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(z){for(var F=l(Q);F!==null;){if(F.callback===null)p(Q);else if(F.startTime<=z)p(Q),F.sortIndex=F.expirationTime,c(T,F);else break;F=l(Q)}}function ee(z){if(V=!1,oe(z),!ne)if(l(T)!==null)ne=!0,$e(pe);else{var F=l(Q);F!==null&&ve(ee,F.startTime-z)}}function pe(z,F){ne=!1,V&&(V=!1,xe(Be),Be=-1),Y=!0;var I=O;try{for(oe(F),D=l(T);D!==null&&(!(D.expirationTime>F)||z&&!Dr());){var m=D.callback;if(typeof m=="function"){D.callback=null,O=D.priorityLevel;var N=m(D.expirationTime<=F);F=o.unstable_now(),typeof N=="function"?D.callback=N:D===l(T)&&p(T),oe(F)}else p(T);D=l(T)}if(D!==null)var q=!0;else{var Z=l(Q);Z!==null&&ve(ee,Z.startTime-F),q=!1}return q}finally{D=null,O=I,Y=!1}}var K=!1,U=null,Be=-1,or=5,br=-1;function Dr(){return!(o.unstable_now()-br<or)}function hr(){if(U!==null){var z=o.unstable_now();br=z;var F=!0;try{F=U(!0,z)}finally{F?Ke():(K=!1,U=null)}}else K=!1}var Ke;if(typeof ie=="function")Ke=function(){ie(hr)};else if(typeof MessageChannel!="undefined"){var ar=new MessageChannel,xr=ar.port2;ar.port1.onmessage=hr,Ke=function(){xr.postMessage(null)}}else Ke=function(){X(hr,0)};function $e(z){U=z,K||(K=!0,Ke())}function ve(z,F){Be=X(function(){z(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){ne||Y||(ne=!0,$e(pe))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):or=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return O},o.unstable_getFirstCallbackNode=function(){return l(T)},o.unstable_next=function(z){switch(O){case 1:case 2:case 3:var F=3;break;default:F=O}var I=O;O=F;try{return z()}finally{O=I}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=O;O=z;try{return F()}finally{O=I}},o.unstable_scheduleCallback=function(z,F,I){var m=o.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?m+I:m):I=m,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=I+N,z={id:$++,callback:F,priorityLevel:z,startTime:I,expirationTime:N,sortIndex:-1},I>m?(z.sortIndex=I,c(Q,z),l(T)===null&&z===l(Q)&&(V?(xe(Be),Be=-1):V=!0,ve(ee,I-m))):(z.sortIndex=N,c(T,z),ne||Y||(ne=!0,$e(pe))),z},o.unstable_shouldYield=Dr,o.unstable_wrapCallback=function(z){var F=O;return function(){var I=O;O=F;try{return z.apply(this,arguments)}finally{O=I}}}})(Ri)),Ri}var up;function Nx(){return up||(up=1,Mi.exports=jx()),Mi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function bx(){if(hp)return sr;hp=1;var o=nl(),c=Nx();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,g={};function j(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(g[e]=t,e=0;e<t.length;e++)p.add(t[e])}var L=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},D={};function O(e){return T.call(D,e)?!0:T.call($,e)?!1:Q.test(e)?D[e]=!0:($[e]=!0,!1)}function Y(e,t,s,n){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,t,s,n){if(t===null||typeof t=="undefined"||Y(e,t,s,n))return!0;if(n)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function V(e,t,s,n,a,i,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=d}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new V(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var xe=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xe,ie);X[t]=new V(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xe,ie);X[t]=new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xe,ie);X[t]=new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,t,s,n){var a=X.hasOwnProperty(t)?X[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ne(t,s,a,n)&&(s=null),n||a===null?O(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(t=a.attributeName,n=a.attributeNamespace,s===null?e.removeAttribute(t):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,n?e.setAttributeNS(n,t,s):e.setAttribute(t,s))))}var ee=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),K=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),br=Symbol.for("react.provider"),Dr=Symbol.for("react.context"),hr=Symbol.for("react.forward_ref"),Ke=Symbol.for("react.suspense"),ar=Symbol.for("react.suspense_list"),xr=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),z=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,m;function N(e){if(m===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var q=!1;function Z(e,t){if(!e||q)return"";q=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),i=n.stack.split(`
`),d=a.length-1,u=i.length-1;1<=d&&0<=u&&a[d]!==i[u];)u--;for(;1<=d&&0<=u;d--,u--)if(a[d]!==i[u]){if(d!==1||u!==1)do if(d--,u--,0>u||a[d]!==i[u]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=u);break}}}finally{q=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?N(e):""}function se(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case K:return"Portal";case or:return"Profiler";case Be:return"StrictMode";case Ke:return"Suspense";case ar:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dr:return(e.displayName||"Context")+".Consumer";case br:return(e._context.displayName||"Context")+".Provider";case hr:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xr:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===Be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=ce(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof s!="undefined"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,i=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=We(e))}function wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),n="";return e&&(n=ce(e)?e.checked?"true":"false":e.value),e=n,e!==s?(t.setValue(e),!0):!1}function on(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,t){var s=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s!=null?s:e._wrapperState.initialChecked})}function xl(e,t){var s=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;s=ae(t.value!=null?t.value:s),e._wrapperState={initialChecked:n,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ml(e,t){t=t.checked,t!=null&&oe(e,"checked",t,!1)}function Ao(e,t){ml(e,t);var s=ae(t.value),n=t.type;if(s!=null)n==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wo(e,t.type,s):t.hasOwnProperty("defaultValue")&&Wo(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fl(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Wo(e,t,s){(t!=="number"||on(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var xs=Array.isArray;function Pt(e,t,s,n){if(e=e.options,t){t={};for(var a=0;a<s.length;a++)t["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=t.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&n&&(e[s].defaultSelected=!0)}else{for(s=""+ae(s),t=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Uo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gl(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(l(92));if(xs(s)){if(1<s.length)throw Error(l(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:ae(s)}}function vl(e,t){var s=ae(t.value),n=ae(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),n!=null&&(e.defaultValue=""+n)}function yl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var an,Nl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,s,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,s,n,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(an=an||document.createElement("div"),an.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=an.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ms(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ju=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(e){ju.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fs[t]=fs[e]})});function bl(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||fs.hasOwnProperty(e)&&fs[e]?(""+t).trim():t+"px"}function wl(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var n=s.indexOf("--")===0,a=bl(s,t[s],n);s==="float"&&(s="cssFloat"),n?e.setProperty(s,a):e[s]=a}}var Nu=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(e,t){if(t){if(Nu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,Bt=null,Mt=null;function kl(e){if(e=Ds(e)){if(typeof Yo!="function")throw Error(l(280));var t=e.stateNode;t&&(t=En(t),Yo(e.stateNode,e.type,t))}}function Sl(e){Bt?Mt?Mt.push(e):Mt=[e]:Bt=e}function Cl(){if(Bt){var e=Bt,t=Mt;if(Mt=Bt=null,kl(e),t)for(e=0;e<t.length;e++)kl(t[e])}}function Tl(e,t){return e(t)}function zl(){}var Ko=!1;function Il(e,t,s){if(Ko)return e(t,s);Ko=!0;try{return Tl(e,t,s)}finally{Ko=!1,(Bt!==null||Mt!==null)&&(zl(),Cl())}}function gs(e,t){var s=e.stateNode;if(s===null)return null;var n=En(s);if(n===null)return null;s=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,t,typeof s));return s}var qo=!1;if(L)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){qo=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{qo=!1}function bu(e,t,s,n,a,i,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{t.apply(s,y)}catch(w){this.onError(w)}}var ys=!1,ln=null,cn=!1,Xo=null,wu={onError:function(e){ys=!0,ln=e}};function ku(e,t,s,n,a,i,d,u,h){ys=!1,ln=null,bu.apply(wu,arguments)}function Su(e,t,s,n,a,i,d,u,h){if(ku.apply(this,arguments),ys){if(ys){var y=ln;ys=!1,ln=null}else throw Error(l(198));cn||(cn=!0,Xo=y)}}function gt(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function El(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ll(e){if(gt(e)!==e)throw Error(l(188))}function Cu(e){var t=e.alternate;if(!t){if(t=gt(e),t===null)throw Error(l(188));return t!==e?null:e}for(var s=e,n=t;;){var a=s.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){s=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===s)return Ll(a),e;if(i===n)return Ll(a),t;i=i.sibling}throw Error(l(188))}if(s.return!==n.return)s=a,n=i;else{for(var d=!1,u=a.child;u;){if(u===s){d=!0,s=a,n=i;break}if(u===n){d=!0,n=a,s=i;break}u=u.sibling}if(!d){for(u=i.child;u;){if(u===s){d=!0,s=i,n=a;break}if(u===n){d=!0,n=i,s=a;break}u=u.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==n)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:t}function _l(e){return e=Cu(e),e!==null?Pl(e):null}function Pl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pl(e);if(t!==null)return t;e=e.sibling}return null}var Bl=c.unstable_scheduleCallback,Ml=c.unstable_cancelCallback,Tu=c.unstable_shouldYield,zu=c.unstable_requestPaint,ze=c.unstable_now,Iu=c.unstable_getCurrentPriorityLevel,Zo=c.unstable_ImmediatePriority,Rl=c.unstable_UserBlockingPriority,dn=c.unstable_NormalPriority,Eu=c.unstable_LowPriority,Fl=c.unstable_IdlePriority,pn=null,_r=null;function Lu(e){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(pn,e,void 0,(e.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:Bu,_u=Math.log,Pu=Math.LN2;function Bu(e){return e>>>=0,e===0?32:31-(_u(e)/Pu|0)|0}var un=64,hn=4194304;function js(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xn(e,t){var s=e.pendingLanes;if(s===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,d=s&268435455;if(d!==0){var u=d&~a;u!==0?n=js(u):(i&=d,i!==0&&(n=js(i)))}else d=s&~a,d!==0?n=js(d):i!==0&&(n=js(i));if(n===0)return 0;if(t!==0&&t!==n&&(t&a)===0&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((n&4)!==0&&(n|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)s=31-kr(t),a=1<<s,n|=e[s],t&=~a;return n}function Mu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(e,t){for(var s=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var d=31-kr(i),u=1<<d,h=a[d];h===-1?((u&s)===0||(u&n)!==0)&&(a[d]=Mu(u,t)):h<=t&&(e.expiredLanes|=u),i&=~u}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dl(){var e=un;return un<<=1,(un&4194240)===0&&(un=64),e}function ea(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Ns(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kr(t),e[t]=s}function Fu(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-kr(s),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,s&=~i}}function ra(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var n=31-kr(s),a=1<<n;a&t|e[n]&t&&(e[n]|=t),s&=~a}}var fe=0;function Ol(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Al,ta,Wl,Ul,Hl,sa=!1,mn=[],Kr=null,qr=null,Xr=null,bs=new Map,ws=new Map,Zr=[],Du="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(e,t){switch(e){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(t.pointerId)}}function ks(e,t,s,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:s,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ds(t),t!==null&&ta(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ou(e,t,s,n,a){switch(t){case"focusin":return Kr=ks(Kr,e,t,s,n,a),!0;case"dragenter":return qr=ks(qr,e,t,s,n,a),!0;case"mouseover":return Xr=ks(Xr,e,t,s,n,a),!0;case"pointerover":var i=a.pointerId;return bs.set(i,ks(bs.get(i)||null,e,t,s,n,a)),!0;case"gotpointercapture":return i=a.pointerId,ws.set(i,ks(ws.get(i)||null,e,t,s,n,a)),!0}return!1}function Vl(e){var t=vt(e.target);if(t!==null){var s=gt(t);if(s!==null){if(t=s.tag,t===13){if(t=El(s),t!==null){e.blockedOn=t,Hl(e.priority,function(){Wl(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var n=new s.constructor(s.type,s);Go=n,s.target.dispatchEvent(n),Go=null}else return t=Ds(s),t!==null&&ta(t),e.blockedOn=s,!1;t.shift()}return!0}function Gl(e,t,s){fn(e)&&s.delete(t)}function Au(){sa=!1,Kr!==null&&fn(Kr)&&(Kr=null),qr!==null&&fn(qr)&&(qr=null),Xr!==null&&fn(Xr)&&(Xr=null),bs.forEach(Gl),ws.forEach(Gl)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,sa||(sa=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Au)))}function Cs(e){function t(a){return Ss(a,e)}if(0<mn.length){Ss(mn[0],e);for(var s=1;s<mn.length;s++){var n=mn[s];n.blockedOn===e&&(n.blockedOn=null)}}for(Kr!==null&&Ss(Kr,e),qr!==null&&Ss(qr,e),Xr!==null&&Ss(Xr,e),bs.forEach(t),ws.forEach(t),s=0;s<Zr.length;s++)n=Zr[s],n.blockedOn===e&&(n.blockedOn=null);for(;0<Zr.length&&(s=Zr[0],s.blockedOn===null);)Vl(s),s.blockedOn===null&&Zr.shift()}var Rt=ee.ReactCurrentBatchConfig,gn=!0;function Wu(e,t,s,n){var a=fe,i=Rt.transition;Rt.transition=null;try{fe=1,na(e,t,s,n)}finally{fe=a,Rt.transition=i}}function Uu(e,t,s,n){var a=fe,i=Rt.transition;Rt.transition=null;try{fe=4,na(e,t,s,n)}finally{fe=a,Rt.transition=i}}function na(e,t,s,n){if(gn){var a=oa(e,t,s,n);if(a===null)ba(e,t,n,vn,s),$l(e,n);else if(Ou(a,e,t,s,n))n.stopPropagation();else if($l(e,n),t&4&&-1<Du.indexOf(e)){for(;a!==null;){var i=Ds(a);if(i!==null&&Al(i),i=oa(e,t,s,n),i===null&&ba(e,t,n,vn,s),i===a)break;a=i}a!==null&&n.stopPropagation()}else ba(e,t,n,null,s)}}var vn=null;function oa(e,t,s,n){if(vn=null,e=Qo(n),e=vt(e),e!==null)if(t=gt(e),t===null)e=null;else if(s=t.tag,s===13){if(e=El(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vn=e,null}function Ql(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iu()){case Zo:return 1;case Rl:return 4;case dn:case Eu:return 16;case Fl:return 536870912;default:return 16}default:return 16}}var Jr=null,aa=null,yn=null;function Yl(){if(yn)return yn;var e,t=aa,s=t.length,n,a="value"in Jr?Jr.value:Jr.textContent,i=a.length;for(e=0;e<s&&t[e]===a[e];e++);var d=s-e;for(n=1;n<=d&&t[s-n]===a[i-n];n++);return yn=a.slice(e,1<n?1-n:void 0)}function jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Kl(){return!1}function ir(e){function t(s,n,a,i,d){this._reactName=s,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(s=e[u],this[u]=s?s(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nn:Kl,this.isPropagationStopped=Kl,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=ir(Ft),Ts=I({},Ft,{view:0,detail:0}),Hu=ir(Ts),la,ca,zs,bn=I({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zs&&(zs&&e.type==="mousemove"?(la=e.screenX-zs.screenX,ca=e.screenY-zs.screenY):ca=la=0,zs=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),ql=ir(bn),$u=I({},bn,{dataTransfer:0}),Vu=ir($u),Gu=I({},Ts,{relatedTarget:0}),da=ir(Gu),Qu=I({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),Yu=ir(Qu),Ku=I({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qu=ir(Ku),Xu=I({},Ft,{data:0}),Xl=ir(Xu),Zu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ju={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eh[e])?!!t[e]:!1}function pa(){return rh}var th=I({},Ts,{key:function(e){if(e.key){var t=Zu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ju[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sh=ir(th),nh=I({},bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=ir(nh),oh=I({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),ah=ir(oh),ih=I({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=ir(ih),ch=I({},bn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=ir(ch),ph=[9,13,27,32],ua=L&&"CompositionEvent"in window,Is=null;L&&"documentMode"in document&&(Is=document.documentMode);var uh=L&&"TextEvent"in window&&!Is,Jl=L&&(!ua||Is&&8<Is&&11>=Is),ec=" ",rc=!1;function tc(e,t){switch(e){case"keyup":return ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function hh(e,t){switch(e){case"compositionend":return sc(t);case"keypress":return t.which!==32?null:(rc=!0,ec);case"textInput":return e=t.data,e===ec&&rc?null:e;default:return null}}function xh(e,t){if(Dt)return e==="compositionend"||!ua&&tc(e,t)?(e=Yl(),yn=aa=Jr=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jl&&t.locale!=="ko"?null:t.data;default:return null}}var mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mh[e.type]:t==="textarea"}function oc(e,t,s,n){Sl(n),t=Tn(t,"onChange"),0<t.length&&(s=new ia("onChange","change",null,s,n),e.push({event:s,listeners:t}))}var Es=null,Ls=null;function fh(e){wc(e,0)}function wn(e){var t=Ht(e);if(wr(t))return e}function gh(e,t){if(e==="change")return t}var ac=!1;if(L){var ha;if(L){var xa="oninput"in document;if(!xa){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),xa=typeof ic.oninput=="function"}ha=xa}else ha=!1;ac=ha&&(!document.documentMode||9<document.documentMode)}function lc(){Es&&(Es.detachEvent("onpropertychange",cc),Ls=Es=null)}function cc(e){if(e.propertyName==="value"&&wn(Ls)){var t=[];oc(t,Ls,e,Qo(e)),Il(fh,t)}}function vh(e,t,s){e==="focusin"?(lc(),Es=t,Ls=s,Es.attachEvent("onpropertychange",cc)):e==="focusout"&&lc()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wn(Ls)}function jh(e,t){if(e==="click")return wn(t)}function Nh(e,t){if(e==="input"||e==="change")return wn(t)}function bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Sr=typeof Object.is=="function"?Object.is:bh;function _s(e,t){if(Sr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),n=Object.keys(t);if(s.length!==n.length)return!1;for(n=0;n<s.length;n++){var a=s[n];if(!T.call(t,a)||!Sr(e[a],t[a]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var s=dc(e);e=0;for(var n;s;){if(s.nodeType===3){if(n=e+s.textContent.length,e<=t&&n>=t)return{node:s,offset:t-e};e=n}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=dc(s)}}function uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=on();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=on(e.document)}return t}function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wh(e){var t=hc(),s=e.focusedElem,n=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&uc(s.ownerDocument.documentElement,s)){if(n!==null&&ma(s)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=pc(s,i);var d=pc(s,n);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kh=L&&"documentMode"in document&&11>=document.documentMode,Ot=null,fa=null,Ps=null,ga=!1;function xc(e,t,s){var n=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ga||Ot==null||Ot!==on(n)||(n=Ot,"selectionStart"in n&&ma(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ps&&_s(Ps,n)||(Ps=n,n=Tn(fa,"onSelect"),0<n.length&&(t=new ia("onSelect","select",null,t,s),e.push({event:t,listeners:n}),t.target=Ot)))}function kn(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var At={animationend:kn("Animation","AnimationEnd"),animationiteration:kn("Animation","AnimationIteration"),animationstart:kn("Animation","AnimationStart"),transitionend:kn("Transition","TransitionEnd")},va={},mc={};L&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function Sn(e){if(va[e])return va[e];if(!At[e])return e;var t=At[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in mc)return va[e]=t[s];return e}var fc=Sn("animationend"),gc=Sn("animationiteration"),vc=Sn("animationstart"),yc=Sn("transitionend"),jc=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function et(e,t){jc.set(e,t),j(t,[e])}for(var ya=0;ya<Nc.length;ya++){var ja=Nc[ya],Sh=ja.toLowerCase(),Ch=ja[0].toUpperCase()+ja.slice(1);et(Sh,"on"+Ch)}et(fc,"onAnimationEnd"),et(gc,"onAnimationIteration"),et(vc,"onAnimationStart"),et("dblclick","onDoubleClick"),et("focusin","onFocus"),et("focusout","onBlur"),et(yc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Th=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function bc(e,t,s){var n=e.type||"unknown-event";e.currentTarget=s,Su(n,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var n=e[s],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var d=n.length-1;0<=d;d--){var u=n[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==i&&a.isPropagationStopped())break e;bc(a,u,y),i=h}else for(d=0;d<n.length;d++){if(u=n[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==i&&a.isPropagationStopped())break e;bc(a,u,y),i=h}}}if(cn)throw e=Xo,cn=!1,Xo=null,e}function je(e,t){var s=t[za];s===void 0&&(s=t[za]=new Set);var n=e+"__bubble";s.has(n)||(kc(t,e,2,!1),s.add(n))}function Na(e,t,s){var n=0;t&&(n|=4),kc(s,e,n,t)}var Cn="_reactListening"+Math.random().toString(36).slice(2);function Ms(e){if(!e[Cn]){e[Cn]=!0,p.forEach(function(s){s!=="selectionchange"&&(Th.has(s)||Na(s,!1,e),Na(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cn]||(t[Cn]=!0,Na("selectionchange",!1,t))}}function kc(e,t,s,n){switch(Ql(t)){case 1:var a=Wu;break;case 4:a=Uu;break;default:a=na}s=a.bind(null,t,s,e),a=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,s,{capture:!0,passive:a}):e.addEventListener(t,s,!0):a!==void 0?e.addEventListener(t,s,{passive:a}):e.addEventListener(t,s,!1)}function ba(e,t,s,n,a){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var u=n.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(d===4)for(d=n.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;u!==null;){if(d=vt(u),d===null)return;if(h=d.tag,h===5||h===6){n=i=d;continue e}u=u.parentNode}}n=n.return}Il(function(){var y=i,w=Qo(s),k=[];e:{var b=jc.get(e);if(b!==void 0){var E=ia,B=e;switch(e){case"keypress":if(jn(s)===0)break e;case"keydown":case"keyup":E=sh;break;case"focusin":B="focus",E=da;break;case"focusout":B="blur",E=da;break;case"beforeblur":case"afterblur":E=da;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=ah;break;case fc:case gc:case vc:E=Yu;break;case yc:E=lh;break;case"scroll":E=Hu;break;case"wheel":E=dh;break;case"copy":case"cut":case"paste":E=qu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Zl}var M=(t&4)!==0,Ie=!M&&e==="scroll",f=M?b!==null?b+"Capture":null:b;M=[];for(var x=y,v;x!==null;){v=x;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,f!==null&&(C=gs(x,f),C!=null&&M.push(Rs(x,C,v)))),Ie)break;x=x.return}0<M.length&&(b=new E(b,B,null,s,w),k.push({event:b,listeners:M}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",b&&s!==Go&&(B=s.relatedTarget||s.fromElement)&&(vt(B)||B[Ar]))break e;if((E||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,E?(B=s.relatedTarget||s.toElement,E=y,B=B?vt(B):null,B!==null&&(Ie=gt(B),B!==Ie||B.tag!==5&&B.tag!==6)&&(B=null)):(E=null,B=y),E!==B)){if(M=ql,C="onMouseLeave",f="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(M=Zl,C="onPointerLeave",f="onPointerEnter",x="pointer"),Ie=E==null?b:Ht(E),v=B==null?b:Ht(B),b=new M(C,x+"leave",E,s,w),b.target=Ie,b.relatedTarget=v,C=null,vt(w)===y&&(M=new M(f,x+"enter",B,s,w),M.target=v,M.relatedTarget=Ie,C=M),Ie=C,E&&B)r:{for(M=E,f=B,x=0,v=M;v;v=Wt(v))x++;for(v=0,C=f;C;C=Wt(C))v++;for(;0<x-v;)M=Wt(M),x--;for(;0<v-x;)f=Wt(f),v--;for(;x--;){if(M===f||f!==null&&M===f.alternate)break r;M=Wt(M),f=Wt(f)}M=null}else M=null;E!==null&&Sc(k,b,E,M,!1),B!==null&&Ie!==null&&Sc(k,Ie,B,M,!0)}}e:{if(b=y?Ht(y):window,E=b.nodeName&&b.nodeName.toLowerCase(),E==="select"||E==="input"&&b.type==="file")var R=gh;else if(nc(b))if(ac)R=Nh;else{R=yh;var A=vh}else(E=b.nodeName)&&E.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(R=jh);if(R&&(R=R(e,y))){oc(k,R,s,w);break e}A&&A(e,b,y),e==="focusout"&&(A=b._wrapperState)&&A.controlled&&b.type==="number"&&Wo(b,"number",b.value)}switch(A=y?Ht(y):window,e){case"focusin":(nc(A)||A.contentEditable==="true")&&(Ot=A,fa=y,Ps=null);break;case"focusout":Ps=fa=Ot=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,xc(k,s,w);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":xc(k,s,w)}var W;if(ua)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Dt?tc(e,s)&&(H="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(H="onCompositionStart");H&&(Jl&&s.locale!=="ko"&&(Dt||H!=="onCompositionStart"?H==="onCompositionEnd"&&Dt&&(W=Yl()):(Jr=w,aa="value"in Jr?Jr.value:Jr.textContent,Dt=!0)),A=Tn(y,H),0<A.length&&(H=new Xl(H,e,null,s,w),k.push({event:H,listeners:A}),W?H.data=W:(W=sc(s),W!==null&&(H.data=W)))),(W=uh?hh(e,s):xh(e,s))&&(y=Tn(y,"onBeforeInput"),0<y.length&&(w=new Xl("onBeforeInput","beforeinput",null,s,w),k.push({event:w,listeners:y}),w.data=W))}wc(k,t)})}function Rs(e,t,s){return{instance:e,listener:t,currentTarget:s}}function Tn(e,t){for(var s=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=gs(e,s),i!=null&&n.unshift(Rs(e,i,a)),i=gs(e,t),i!=null&&n.push(Rs(e,i,a))),e=e.return}return n}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sc(e,t,s,n,a){for(var i=t._reactName,d=[];s!==null&&s!==n;){var u=s,h=u.alternate,y=u.stateNode;if(h!==null&&h===n)break;u.tag===5&&y!==null&&(u=y,a?(h=gs(s,i),h!=null&&d.unshift(Rs(s,h,u))):a||(h=gs(s,i),h!=null&&d.push(Rs(s,h,u)))),s=s.return}d.length!==0&&e.push({event:t,listeners:d})}var zh=/\r\n?/g,Ih=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(zh,`
`).replace(Ih,"")}function zn(e,t,s){if(t=Cc(t),Cc(e)!==t&&s)throw Error(l(425))}function In(){}var wa=null,ka=null;function Sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc!="undefined"?function(e){return Tc.resolve(null).then(e).catch(_h)}:Ca;function _h(e){setTimeout(function(){throw e})}function Ta(e,t){var s=t,n=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(n===0){e.removeChild(a),Cs(t);return}n--}else s!=="$"&&s!=="$?"&&s!=="$!"||n++;s=a}while(s);Cs(t)}function rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var Ut=Math.random().toString(36).slice(2),Pr="__reactFiber$"+Ut,Fs="__reactProps$"+Ut,Ar="__reactContainer$"+Ut,za="__reactEvents$"+Ut,Ph="__reactListeners$"+Ut,Bh="__reactHandles$"+Ut;function vt(e){var t=e[Pr];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Ar]||s[Pr]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=zc(e);e!==null;){if(s=e[Pr])return s;e=zc(e)}return t}e=s,s=e.parentNode}return null}function Ds(e){return e=e[Pr]||e[Ar],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function En(e){return e[Fs]||null}var Ia=[],$t=-1;function tt(e){return{current:e}}function Ne(e){0>$t||(e.current=Ia[$t],Ia[$t]=null,$t--)}function ye(e,t){$t++,Ia[$t]=e.current,e.current=t}var st={},Ve=tt(st),Ze=tt(!1),yt=st;function Vt(e,t){var s=e.type.contextTypes;if(!s)return st;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in s)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return e=e.childContextTypes,e!=null}function Ln(){Ne(Ze),Ne(Ve)}function Ic(e,t,s){if(Ve.current!==st)throw Error(l(168));ye(Ve,t),ye(Ze,s)}function Ec(e,t,s){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return s;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(l(108,ue(e)||"Unknown",a));return I({},s,n)}function _n(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,yt=Ve.current,ye(Ve,e),ye(Ze,Ze.current),!0}function Lc(e,t,s){var n=e.stateNode;if(!n)throw Error(l(169));s?(e=Ec(e,t,yt),n.__reactInternalMemoizedMergedChildContext=e,Ne(Ze),Ne(Ve),ye(Ve,e)):Ne(Ze),ye(Ze,s)}var Wr=null,Pn=!1,Ea=!1;function _c(e){Wr===null?Wr=[e]:Wr.push(e)}function Mh(e){Pn=!0,_c(e)}function nt(){if(!Ea&&Wr!==null){Ea=!0;var e=0,t=fe;try{var s=Wr;for(fe=1;e<s.length;e++){var n=s[e];do n=n(!0);while(n!==null)}Wr=null,Pn=!1}catch(a){throw Wr!==null&&(Wr=Wr.slice(e+1)),Bl(Zo,nt),a}finally{fe=t,Ea=!1}}return null}var Gt=[],Qt=0,Bn=null,Mn=0,mr=[],fr=0,jt=null,Ur=1,Hr="";function Nt(e,t){Gt[Qt++]=Mn,Gt[Qt++]=Bn,Bn=e,Mn=t}function Pc(e,t,s){mr[fr++]=Ur,mr[fr++]=Hr,mr[fr++]=jt,jt=e;var n=Ur;e=Hr;var a=32-kr(n)-1;n&=~(1<<a),s+=1;var i=32-kr(t)+a;if(30<i){var d=a-a%5;i=(n&(1<<d)-1).toString(32),n>>=d,a-=d,Ur=1<<32-kr(t)+a|s<<a|n,Hr=i+e}else Ur=1<<i|s<<a|n,Hr=e}function La(e){e.return!==null&&(Nt(e,1),Pc(e,1,0))}function _a(e){for(;e===Bn;)Bn=Gt[--Qt],Gt[Qt]=null,Mn=Gt[--Qt],Gt[Qt]=null;for(;e===jt;)jt=mr[--fr],mr[fr]=null,Hr=mr[--fr],mr[fr]=null,Ur=mr[--fr],mr[fr]=null}var lr=null,cr=null,ke=!1,Cr=null;function Bc(e,t){var s=jr(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Mc(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lr=e,cr=rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lr=e,cr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=jt!==null?{id:Ur,overflow:Hr}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=jr(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,lr=e,cr=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(ke){var t=cr;if(t){var s=t;if(!Mc(e,t)){if(Pa(e))throw Error(l(418));t=rt(s.nextSibling);var n=lr;t&&Mc(e,t)?Bc(n,s):(e.flags=e.flags&-4097|2,ke=!1,lr=e)}}else{if(Pa(e))throw Error(l(418));e.flags=e.flags&-4097|2,ke=!1,lr=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lr=e}function Rn(e){if(e!==lr)return!1;if(!ke)return Rc(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sa(e.type,e.memoizedProps)),t&&(t=cr)){if(Pa(e))throw Fc(),Error(l(418));for(;t;)Bc(e,t),t=rt(t.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){cr=rt(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}cr=null}}else cr=lr?rt(e.stateNode.nextSibling):null;return!0}function Fc(){for(var e=cr;e;)e=rt(e.nextSibling)}function Yt(){cr=lr=null,ke=!1}function Ma(e){Cr===null?Cr=[e]:Cr.push(e)}var Rh=ee.ReactCurrentBatchConfig;function Os(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(l(309));var n=s.stateNode}if(!n)throw Error(l(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(d){var u=a.refs;d===null?delete u[i]:u[i]=d},t._stringRef=i,t)}if(typeof e!="string")throw Error(l(284));if(!s._owner)throw Error(l(290,e))}return e}function Fn(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dc(e){var t=e._init;return t(e._payload)}function Oc(e){function t(f,x){if(e){var v=f.deletions;v===null?(f.deletions=[x],f.flags|=16):v.push(x)}}function s(f,x){if(!e)return null;for(;x!==null;)t(f,x),x=x.sibling;return null}function n(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function a(f,x){return f=ut(f,x),f.index=0,f.sibling=null,f}function i(f,x,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<x?(f.flags|=2,x):v):(f.flags|=2,x)):(f.flags|=1048576,x)}function d(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,x,v,C){return x===null||x.tag!==6?(x=Ci(v,f.mode,C),x.return=f,x):(x=a(x,v),x.return=f,x)}function h(f,x,v,C){var R=v.type;return R===U?w(f,x,v.props.children,C,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$e&&Dc(R)===x.type)?(C=a(x,v.props),C.ref=Os(f,x,v),C.return=f,C):(C=io(v.type,v.key,v.props,null,f.mode,C),C.ref=Os(f,x,v),C.return=f,C)}function y(f,x,v,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Ti(v,f.mode,C),x.return=f,x):(x=a(x,v.children||[]),x.return=f,x)}function w(f,x,v,C,R){return x===null||x.tag!==7?(x=It(v,f.mode,C,R),x.return=f,x):(x=a(x,v),x.return=f,x)}function k(f,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ci(""+x,f.mode,v),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pe:return v=io(x.type,x.key,x.props,null,f.mode,v),v.ref=Os(f,null,x),v.return=f,v;case K:return x=Ti(x,f.mode,v),x.return=f,x;case $e:var C=x._init;return k(f,C(x._payload),v)}if(xs(x)||F(x))return x=It(x,f.mode,v,null),x.return=f,x;Fn(f,x)}return null}function b(f,x,v,C){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:u(f,x,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:return v.key===R?h(f,x,v,C):null;case K:return v.key===R?y(f,x,v,C):null;case $e:return R=v._init,b(f,x,R(v._payload),C)}if(xs(v)||F(v))return R!==null?null:w(f,x,v,C,null);Fn(f,v)}return null}function E(f,x,v,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return f=f.get(v)||null,u(x,f,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pe:return f=f.get(C.key===null?v:C.key)||null,h(x,f,C,R);case K:return f=f.get(C.key===null?v:C.key)||null,y(x,f,C,R);case $e:var A=C._init;return E(f,x,v,A(C._payload),R)}if(xs(C)||F(C))return f=f.get(v)||null,w(x,f,C,R,null);Fn(x,C)}return null}function B(f,x,v,C){for(var R=null,A=null,W=x,H=x=0,Oe=null;W!==null&&H<v.length;H++){W.index>H?(Oe=W,W=null):Oe=W.sibling;var de=b(f,W,v[H],C);if(de===null){W===null&&(W=Oe);break}e&&W&&de.alternate===null&&t(f,W),x=i(de,x,H),A===null?R=de:A.sibling=de,A=de,W=Oe}if(H===v.length)return s(f,W),ke&&Nt(f,H),R;if(W===null){for(;H<v.length;H++)W=k(f,v[H],C),W!==null&&(x=i(W,x,H),A===null?R=W:A.sibling=W,A=W);return ke&&Nt(f,H),R}for(W=n(f,W);H<v.length;H++)Oe=E(W,f,H,v[H],C),Oe!==null&&(e&&Oe.alternate!==null&&W.delete(Oe.key===null?H:Oe.key),x=i(Oe,x,H),A===null?R=Oe:A.sibling=Oe,A=Oe);return e&&W.forEach(function(ht){return t(f,ht)}),ke&&Nt(f,H),R}function M(f,x,v,C){var R=F(v);if(typeof R!="function")throw Error(l(150));if(v=R.call(v),v==null)throw Error(l(151));for(var A=R=null,W=x,H=x=0,Oe=null,de=v.next();W!==null&&!de.done;H++,de=v.next()){W.index>H?(Oe=W,W=null):Oe=W.sibling;var ht=b(f,W,de.value,C);if(ht===null){W===null&&(W=Oe);break}e&&W&&ht.alternate===null&&t(f,W),x=i(ht,x,H),A===null?R=ht:A.sibling=ht,A=ht,W=Oe}if(de.done)return s(f,W),ke&&Nt(f,H),R;if(W===null){for(;!de.done;H++,de=v.next())de=k(f,de.value,C),de!==null&&(x=i(de,x,H),A===null?R=de:A.sibling=de,A=de);return ke&&Nt(f,H),R}for(W=n(f,W);!de.done;H++,de=v.next())de=E(W,f,H,de.value,C),de!==null&&(e&&de.alternate!==null&&W.delete(de.key===null?H:de.key),x=i(de,x,H),A===null?R=de:A.sibling=de,A=de);return e&&W.forEach(function(mx){return t(f,mx)}),ke&&Nt(f,H),R}function Ie(f,x,v,C){if(typeof v=="object"&&v!==null&&v.type===U&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:e:{for(var R=v.key,A=x;A!==null;){if(A.key===R){if(R=v.type,R===U){if(A.tag===7){s(f,A.sibling),x=a(A,v.props.children),x.return=f,f=x;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$e&&Dc(R)===A.type){s(f,A.sibling),x=a(A,v.props),x.ref=Os(f,A,v),x.return=f,f=x;break e}s(f,A);break}else t(f,A);A=A.sibling}v.type===U?(x=It(v.props.children,f.mode,C,v.key),x.return=f,f=x):(C=io(v.type,v.key,v.props,null,f.mode,C),C.ref=Os(f,x,v),C.return=f,f=C)}return d(f);case K:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){s(f,x.sibling),x=a(x,v.children||[]),x.return=f,f=x;break e}else{s(f,x);break}else t(f,x);x=x.sibling}x=Ti(v,f.mode,C),x.return=f,f=x}return d(f);case $e:return A=v._init,Ie(f,x,A(v._payload),C)}if(xs(v))return B(f,x,v,C);if(F(v))return M(f,x,v,C);Fn(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(s(f,x.sibling),x=a(x,v),x.return=f,f=x):(s(f,x),x=Ci(v,f.mode,C),x.return=f,f=x),d(f)):s(f,x)}return Ie}var Kt=Oc(!0),Ac=Oc(!1),Dn=tt(null),On=null,qt=null,Ra=null;function Fa(){Ra=qt=On=null}function Da(e){var t=Dn.current;Ne(Dn),e._currentValue=t}function Oa(e,t,s){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===s)break;e=e.return}}function Xt(e,t){On=e,Ra=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(er=!0),e.firstContext=null)}function gr(e){var t=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(On===null)throw Error(l(308));qt=e,On.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var bt=null;function Aa(e){bt===null?bt=[e]:bt.push(e)}function Wc(e,t,s,n){var a=t.interleaved;return a===null?(s.next=s,Aa(t)):(s.next=a.next,a.next=s),t.interleaved=s,$r(e,n)}function $r(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var ot=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,s){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(le&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,$r(e,s)}return a=n.interleaved,a===null?(t.next=t,Aa(n)):(t.next=a.next,a.next=t),n.interleaved=t,$r(e,s)}function An(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,s|=n,t.lanes=s,ra(e,s)}}function Hc(e,t){var s=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,s===n)){var a=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};i===null?a=i=d:i=i.next=d,s=s.next}while(s!==null);i===null?a=i=t:i=i.next=t}else a=i=t;s={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function Wn(e,t,s,n){var a=e.updateQueue;ot=!1;var i=a.firstBaseUpdate,d=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?i=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(i!==null){var k=a.baseState;d=0,w=y=h=null,u=i;do{var b=u.lane,E=u.eventTime;if((n&b)===b){w!==null&&(w=w.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var B=e,M=u;switch(b=t,E=s,M.tag){case 1:if(B=M.payload,typeof B=="function"){k=B.call(E,k,b);break e}k=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=M.payload,b=typeof B=="function"?B.call(E,k,b):B,b==null)break e;k=I({},k,b);break e;case 2:ot=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[u]:b.push(u))}else E={eventTime:E,lane:b,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=E,h=k):w=w.next=E,d|=b;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;b=u,u=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(w===null&&(h=k),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=w,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);St|=d,e.lanes=d,e.memoizedState=k}}function $c(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=s,typeof a!="function")throw Error(l(191,a));a.call(n)}}}var As={},Br=tt(As),Ws=tt(As),Us=tt(As);function wt(e){if(e===As)throw Error(l(174));return e}function Ua(e,t){switch(ye(Us,t),ye(Ws,e),ye(Br,As),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ho(t,e)}Ne(Br),ye(Br,t)}function Zt(){Ne(Br),Ne(Ws),Ne(Us)}function Vc(e){wt(Us.current);var t=wt(Br.current),s=Ho(t,e.type);t!==s&&(ye(Ws,e),ye(Br,s))}function Ha(e){Ws.current===e&&(Ne(Br),Ne(Ws))}var Se=tt(0);function Un(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=[];function Va(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var Hn=ee.ReactCurrentDispatcher,Ga=ee.ReactCurrentBatchConfig,kt=0,Ce=null,Me=null,Fe=null,$n=!1,Hs=!1,$s=0,Fh=0;function Ge(){throw Error(l(321))}function Qa(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Sr(e[s],t[s]))return!1;return!0}function Ya(e,t,s,n,a,i){if(kt=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hn.current=e===null||e.memoizedState===null?Wh:Uh,e=s(n,a),Hs){i=0;do{if(Hs=!1,$s=0,25<=i)throw Error(l(301));i+=1,Fe=Me=null,t.updateQueue=null,Hn.current=Hh,e=s(n,a)}while(Hs)}if(Hn.current=Qn,t=Me!==null&&Me.next!==null,kt=0,Fe=Me=Ce=null,$n=!1,t)throw Error(l(300));return e}function Ka(){var e=$s!==0;return $s=0,e}function Mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ce.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function vr(){if(Me===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Fe===null?Ce.memoizedState:Fe.next;if(t!==null)Fe=t,Me=e;else{if(e===null)throw Error(l(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?Ce.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Vs(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=vr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var n=Me,a=n.baseQueue,i=s.pending;if(i!==null){if(a!==null){var d=a.next;a.next=i.next,i.next=d}n.baseQueue=a=i,s.pending=null}if(a!==null){i=a.next,n=n.baseState;var u=d=null,h=null,y=i;do{var w=y.lane;if((kt&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=k,d=n):h=h.next=k,Ce.lanes|=w,St|=w}y=y.next}while(y!==null&&y!==i);h===null?d=n:h.next=u,Sr(n,t.memoizedState)||(er=!0),t.memoizedState=n,t.baseState=d,t.baseQueue=h,s.lastRenderedState=n}if(e=s.interleaved,e!==null){a=e;do i=a.lane,Ce.lanes|=i,St|=i,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function Xa(e){var t=vr(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var n=s.dispatch,a=s.pending,i=t.memoizedState;if(a!==null){s.pending=null;var d=a=a.next;do i=e(i,d.action),d=d.next;while(d!==a);Sr(i,t.memoizedState)||(er=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),s.lastRenderedState=i}return[i,n]}function Gc(){}function Qc(e,t){var s=Ce,n=vr(),a=t(),i=!Sr(n.memoizedState,a);if(i&&(n.memoizedState=a,er=!0),n=n.queue,Za(qc.bind(null,s,n,e),[e]),n.getSnapshot!==t||i||Fe!==null&&Fe.memoizedState.tag&1){if(s.flags|=2048,Gs(9,Kc.bind(null,s,n,a,t),void 0,null),De===null)throw Error(l(349));(kt&30)!==0||Yc(s,t,a)}return a}function Yc(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Kc(e,t,s,n){t.value=s,t.getSnapshot=n,Xc(t)&&Zc(e)}function qc(e,t,s){return s(function(){Xc(t)&&Zc(e)})}function Xc(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Sr(e,s)}catch{return!0}}function Zc(e){var t=$r(e,1);t!==null&&Er(t,e,1,-1)}function Jc(e){var t=Mr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},t.queue=e,e=e.dispatch=Ah.bind(null,Ce,e),[t.memoizedState,e]}function Gs(e,t,s,n){return e={tag:e,create:t,destroy:s,deps:n,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(n=s.next,s.next=e,e.next=n,t.lastEffect=e)),e}function ed(){return vr().memoizedState}function Vn(e,t,s,n){var a=Mr();Ce.flags|=e,a.memoizedState=Gs(1|t,s,void 0,n===void 0?null:n)}function Gn(e,t,s,n){var a=vr();n=n===void 0?null:n;var i=void 0;if(Me!==null){var d=Me.memoizedState;if(i=d.destroy,n!==null&&Qa(n,d.deps)){a.memoizedState=Gs(t,s,i,n);return}}Ce.flags|=e,a.memoizedState=Gs(1|t,s,i,n)}function rd(e,t){return Vn(8390656,8,e,t)}function Za(e,t){return Gn(2048,8,e,t)}function td(e,t){return Gn(4,2,e,t)}function sd(e,t){return Gn(4,4,e,t)}function nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,s){return s=s!=null?s.concat([e]):null,Gn(4,4,nd.bind(null,t,e),s)}function Ja(){}function ad(e,t){var s=vr();t=t===void 0?null:t;var n=s.memoizedState;return n!==null&&t!==null&&Qa(t,n[1])?n[0]:(s.memoizedState=[e,t],e)}function id(e,t){var s=vr();t=t===void 0?null:t;var n=s.memoizedState;return n!==null&&t!==null&&Qa(t,n[1])?n[0]:(e=e(),s.memoizedState=[e,t],e)}function ld(e,t,s){return(kt&21)===0?(e.baseState&&(e.baseState=!1,er=!0),e.memoizedState=s):(Sr(s,t)||(s=Dl(),Ce.lanes|=s,St|=s,e.baseState=!0),t)}function Dh(e,t){var s=fe;fe=s!==0&&4>s?s:4,e(!0);var n=Ga.transition;Ga.transition={};try{e(!1),t()}finally{fe=s,Ga.transition=n}}function cd(){return vr().memoizedState}function Oh(e,t,s){var n=dt(e);if(s={lane:n,action:s,hasEagerState:!1,eagerState:null,next:null},dd(e))pd(t,s);else if(s=Wc(e,t,s,n),s!==null){var a=Xe();Er(s,e,n,a),ud(s,t,n)}}function Ah(e,t,s){var n=dt(e),a={lane:n,action:s,hasEagerState:!1,eagerState:null,next:null};if(dd(e))pd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,u=i(d,s);if(a.hasEagerState=!0,a.eagerState=u,Sr(u,d)){var h=t.interleaved;h===null?(a.next=a,Aa(t)):(a.next=h.next,h.next=a),t.interleaved=a;return}}catch{}finally{}s=Wc(e,t,a,n),s!==null&&(a=Xe(),Er(s,e,n,a),ud(s,t,n))}}function dd(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function pd(e,t){Hs=$n=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function ud(e,t,s){if((s&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,s|=n,t.lanes=s,ra(e,s)}}var Qn={readContext:gr,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Wh={readContext:gr,useCallback:function(e,t){return Mr().memoizedState=[e,t===void 0?null:t],e},useContext:gr,useEffect:rd,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Vn(4194308,4,nd.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Vn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vn(4,2,e,t)},useMemo:function(e,t){var s=Mr();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var n=Mr();return t=s!==void 0?s(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Oh.bind(null,Ce,e),[n.memoizedState,e]},useRef:function(e){var t=Mr();return e={current:e},t.memoizedState=e},useState:Jc,useDebugValue:Ja,useDeferredValue:function(e){return Mr().memoizedState=e},useTransition:function(){var e=Jc(!1),t=e[0];return e=Dh.bind(null,e[1]),Mr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var n=Ce,a=Mr();if(ke){if(s===void 0)throw Error(l(407));s=s()}else{if(s=t(),De===null)throw Error(l(349));(kt&30)!==0||Yc(n,t,s)}a.memoizedState=s;var i={value:s,getSnapshot:t};return a.queue=i,rd(qc.bind(null,n,i,e),[e]),n.flags|=2048,Gs(9,Kc.bind(null,n,i,s,t),void 0,null),s},useId:function(){var e=Mr(),t=De.identifierPrefix;if(ke){var s=Hr,n=Ur;s=(n&~(1<<32-kr(n)-1)).toString(32)+s,t=":"+t+"R"+s,s=$s++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=Fh++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uh={readContext:gr,useCallback:ad,useContext:gr,useEffect:Za,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:sd,useMemo:id,useReducer:qa,useRef:ed,useState:function(){return qa(Vs)},useDebugValue:Ja,useDeferredValue:function(e){var t=vr();return ld(t,Me.memoizedState,e)},useTransition:function(){var e=qa(Vs)[0],t=vr().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Qc,useId:cd,unstable_isNewReconciler:!1},Hh={readContext:gr,useCallback:ad,useContext:gr,useEffect:Za,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:sd,useMemo:id,useReducer:Xa,useRef:ed,useState:function(){return Xa(Vs)},useDebugValue:Ja,useDeferredValue:function(e){var t=vr();return Me===null?t.memoizedState=e:ld(t,Me.memoizedState,e)},useTransition:function(){var e=Xa(Vs)[0],t=vr().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Qc,useId:cd,unstable_isNewReconciler:!1};function Tr(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function ei(e,t,s,n){t=e.memoizedState,s=s(n,t),s=s==null?t:I({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Yn={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var n=Xe(),a=dt(e),i=Vr(n,a);i.payload=t,s!=null&&(i.callback=s),t=at(e,i,a),t!==null&&(Er(t,e,a,n),An(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var n=Xe(),a=dt(e),i=Vr(n,a);i.tag=1,i.payload=t,s!=null&&(i.callback=s),t=at(e,i,a),t!==null&&(Er(t,e,a,n),An(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=Xe(),n=dt(e),a=Vr(s,n);a.tag=2,t!=null&&(a.callback=t),t=at(e,a,n),t!==null&&(Er(t,e,n,s),An(t,e,n))}};function hd(e,t,s,n,a,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,d):t.prototype&&t.prototype.isPureReactComponent?!_s(s,n)||!_s(a,i):!0}function xd(e,t,s){var n=!1,a=st,i=t.contextType;return typeof i=="object"&&i!==null?i=gr(i):(a=Je(t)?yt:Ve.current,n=t.contextTypes,i=(n=n!=null)?Vt(e,a):st),t=new t(s,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yn,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function md(e,t,s,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,n),t.state!==e&&Yn.enqueueReplaceState(t,t.state,null)}function ri(e,t,s,n){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},Wa(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=gr(i):(i=Je(t)?yt:Ve.current,a.context=Vt(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ei(e,t,i,s),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Yn.enqueueReplaceState(a,a.state,null),Wn(e,s,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Jt(e,t){try{var s="",n=t;do s+=se(n),n=n.return;while(n);var a=s}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ti(e,t,s){return{value:e,source:null,stack:s!=null?s:null,digest:t!=null?t:null}}function si(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var $h=typeof WeakMap=="function"?WeakMap:Map;function fd(e,t,s){s=Vr(-1,s),s.tag=3,s.payload={element:null};var n=t.value;return s.callback=function(){ro||(ro=!0,vi=n),si(e,t)},s}function gd(e,t,s){s=Vr(-1,s),s.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;s.payload=function(){return n(a)},s.callback=function(){si(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(s.callback=function(){si(e,t),typeof n!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),s}function vd(e,t,s){var n=e.pingCache;if(n===null){n=e.pingCache=new $h;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(s)||(a.add(s),e=nx.bind(null,e,t,s),t.then(e,e))}function yd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jd(e,t,s,n,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Vr(-1,1),t.tag=2,at(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Vh=ee.ReactCurrentOwner,er=!1;function qe(e,t,s,n){t.child=e===null?Ac(t,null,s,n):Kt(t,e.child,s,n)}function Nd(e,t,s,n,a){s=s.render;var i=t.ref;return Xt(t,a),n=Ya(e,t,s,n,i,a),s=Ka(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gr(e,t,a)):(ke&&s&&La(t),t.flags|=1,qe(e,t,n,a),t.child)}function bd(e,t,s,n,a){if(e===null){var i=s.type;return typeof i=="function"&&!Si(i)&&i.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=i,wd(e,t,i,n,a)):(e=io(s.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var d=i.memoizedProps;if(s=s.compare,s=s!==null?s:_s,s(d,n)&&e.ref===t.ref)return Gr(e,t,a)}return t.flags|=1,e=ut(i,n),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,s,n,a){if(e!==null){var i=e.memoizedProps;if(_s(i,n)&&e.ref===t.ref)if(er=!1,t.pendingProps=n=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(er=!0);else return t.lanes=e.lanes,Gr(e,t,a)}return ni(e,t,s,n,a)}function kd(e,t,s){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(rs,dr),dr|=s;else{if((s&1073741824)===0)return e=i!==null?i.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(rs,dr),dr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:s,ye(rs,dr),dr|=n}else i!==null?(n=i.baseLanes|s,t.memoizedState=null):n=s,ye(rs,dr),dr|=n;return qe(e,t,a,s),t.child}function Sd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function ni(e,t,s,n,a){var i=Je(s)?yt:Ve.current;return i=Vt(t,i),Xt(t,a),s=Ya(e,t,s,n,i,a),n=Ka(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gr(e,t,a)):(ke&&n&&La(t),t.flags|=1,qe(e,t,s,a),t.child)}function Cd(e,t,s,n,a){if(Je(s)){var i=!0;_n(t)}else i=!1;if(Xt(t,a),t.stateNode===null)qn(e,t),xd(t,s,n),ri(t,s,n,a),n=!0;else if(e===null){var d=t.stateNode,u=t.memoizedProps;d.props=u;var h=d.context,y=s.contextType;typeof y=="object"&&y!==null?y=gr(y):(y=Je(s)?yt:Ve.current,y=Vt(t,y));var w=s.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==n||h!==y)&&md(t,d,n,y),ot=!1;var b=t.memoizedState;d.state=b,Wn(t,n,d,a),h=t.memoizedState,u!==n||b!==h||Ze.current||ot?(typeof w=="function"&&(ei(t,s,w,n),h=t.memoizedState),(u=ot||hd(t,s,u,n,b,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),d.props=n,d.state=h,d.context=y,n=u):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{d=t.stateNode,Uc(e,t),u=t.memoizedProps,y=t.type===t.elementType?u:Tr(t.type,u),d.props=y,k=t.pendingProps,b=d.context,h=s.contextType,typeof h=="object"&&h!==null?h=gr(h):(h=Je(s)?yt:Ve.current,h=Vt(t,h));var E=s.getDerivedStateFromProps;(w=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==k||b!==h)&&md(t,d,n,h),ot=!1,b=t.memoizedState,d.state=b,Wn(t,n,d,a);var B=t.memoizedState;u!==k||b!==B||Ze.current||ot?(typeof E=="function"&&(ei(t,s,E,n),B=t.memoizedState),(y=ot||hd(t,s,y,n,b,B,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,B,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,B,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=B),d.props=n,d.state=B,d.context=h,n=y):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return oi(e,t,s,n,i,a)}function oi(e,t,s,n,a,i){Sd(e,t);var d=(t.flags&128)!==0;if(!n&&!d)return a&&Lc(t,s,!1),Gr(e,t,i);n=t.stateNode,Vh.current=t;var u=d&&typeof s.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&d?(t.child=Kt(t,e.child,null,i),t.child=Kt(t,null,u,i)):qe(e,t,u,i),t.memoizedState=n.state,a&&Lc(t,s,!0),t.child}function Td(e){var t=e.stateNode;t.pendingContext?Ic(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ic(e,t.context,!1),Ua(e,t.containerInfo)}function zd(e,t,s,n,a){return Yt(),Ma(a),t.flags|=256,qe(e,t,s,n),t.child}var ai={dehydrated:null,treeContext:null,retryLane:0};function ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,t,s){var n=t.pendingProps,a=Se.current,i=!1,d=(t.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ye(Se,a&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=n.children,e=n.fallback,i?(n=t.mode,i=t.child,d={mode:"hidden",children:d},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=d):i=lo(d,n,0,null),e=It(e,n,s,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ii(s),t.memoizedState=ai,e):li(t,d));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Gh(e,t,d,n,u,a,s);if(i){i=n.fallback,d=t.mode,a=e.child,u=a.sibling;var h={mode:"hidden",children:n.children};return(d&1)===0&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=h,t.deletions=null):(n=ut(a,h),n.subtreeFlags=a.subtreeFlags&14680064),u!==null?i=ut(u,i):(i=It(i,d,s,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,d=e.child.memoizedState,d=d===null?ii(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},i.memoizedState=d,i.childLanes=e.childLanes&~s,t.memoizedState=ai,n}return i=e.child,e=i.sibling,n=ut(i,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=s),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n}function li(e,t){return t=lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Kn(e,t,s,n){return n!==null&&Ma(n),Kt(t,e.child,null,s),e=li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gh(e,t,s,n,a,i,d){if(s)return t.flags&256?(t.flags&=-257,n=ti(Error(l(422))),Kn(e,t,d,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=lo({mode:"visible",children:n.children},a,0,null),i=It(i,a,d,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,(t.mode&1)!==0&&Kt(t,e.child,null,d),t.child.memoizedState=ii(d),t.memoizedState=ai,i);if((t.mode&1)===0)return Kn(e,t,d,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var u=n.dgst;return n=u,i=Error(l(419)),n=ti(i,n,void 0),Kn(e,t,d,n)}if(u=(d&e.childLanes)!==0,er||u){if(n=De,n!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|d))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,$r(e,a),Er(n,e,a,-1))}return ki(),n=ti(Error(l(421))),Kn(e,t,d,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=ox.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,cr=rt(a.nextSibling),lr=t,ke=!0,Cr=null,e!==null&&(mr[fr++]=Ur,mr[fr++]=Hr,mr[fr++]=jt,Ur=e.id,Hr=e.overflow,jt=t),t=li(t,n.children),t.flags|=4096,t)}function Ed(e,t,s){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Oa(e.return,t,s)}function ci(e,t,s,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:s,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=s,i.tailMode=a)}function Ld(e,t,s){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(qe(e,t,n.children,s),n=Se.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,s,t);else if(e.tag===19)Ed(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ye(Se,n),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(s=t.child,a=null;s!==null;)e=s.alternate,e!==null&&Un(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=t.child,t.child=null):(a=s.sibling,s.sibling=null),ci(t,!1,a,s,i);break;case"backwards":for(s=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Un(e)===null){t.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}ci(t,!0,s,null,i);break;case"together":ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qn(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gr(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),St|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,s=ut(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=ut(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Qh(e,t,s){switch(t.tag){case 3:Td(t),Yt();break;case 5:Vc(t);break;case 1:Je(t.type)&&_n(t);break;case 4:Ua(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;ye(Dn,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ye(Se,Se.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Id(e,t,s):(ye(Se,Se.current&1),e=Gr(e,t,s),e!==null?e.sibling:null);ye(Se,Se.current&1);break;case 19:if(n=(s&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Ld(e,t,s);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(Se,Se.current),n)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,s)}return Gr(e,t,s)}var _d,di,Pd,Bd;_d=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},di=function(){},Pd=function(e,t,s,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,wt(Br.current);var i=null;switch(s){case"input":a=Oo(e,a),n=Oo(e,n),i=[];break;case"select":a=I({},a,{value:void 0}),n=I({},n,{value:void 0}),i=[];break;case"textarea":a=Uo(e,a),n=Uo(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=In)}$o(s,n);var d;s=null;for(y in a)if(!n.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var u=a[y];for(d in u)u.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in n){var h=n[y];if(u=a!=null?a[y]:void 0,n.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(s||(s={}),s[d]=h[d])}else s||(i||(i=[]),i.push(y,s)),s=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(i=i||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&je("scroll",e),i||u===h||(i=[])):(i=i||[]).push(y,h))}s&&(i=i||[]).push("style",s);var y=i;(t.updateQueue=y)&&(t.flags|=4)}},Bd=function(e,t,s,n){s!==n&&(t.flags|=4)};function Qs(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,n=0;if(t)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=s,t}function Yh(e,t,s){var n=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return Je(t.type)&&Ln(),Qe(t),null;case 3:return n=t.stateNode,Zt(),Ne(Ze),Ne(Ve),Va(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Rn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cr!==null&&(Ni(Cr),Cr=null))),di(e,t),Qe(t),null;case 5:Ha(t);var a=wt(Us.current);if(s=t.type,e!==null&&t.stateNode!=null)Pd(e,t,s,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(l(166));return Qe(t),null}if(e=wt(Br.current),Rn(t)){n=t.stateNode,s=t.type;var i=t.memoizedProps;switch(n[Pr]=t,n[Fs]=i,e=(t.mode&1)!==0,s){case"dialog":je("cancel",n),je("close",n);break;case"iframe":case"object":case"embed":je("load",n);break;case"video":case"audio":for(a=0;a<Bs.length;a++)je(Bs[a],n);break;case"source":je("error",n);break;case"img":case"image":case"link":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"input":xl(n,i),je("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},je("invalid",n);break;case"textarea":gl(n,i),je("invalid",n)}$o(s,i),a=null;for(var d in i)if(i.hasOwnProperty(d)){var u=i[d];d==="children"?typeof u=="string"?n.textContent!==u&&(i.suppressHydrationWarning!==!0&&zn(n.textContent,u,e),a=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&zn(n.textContent,u,e),a=["children",""+u]):g.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&je("scroll",n)}switch(s){case"input":Or(n),fl(n,i,!0);break;case"textarea":Or(n),yl(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=In)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jl(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(s,{is:n.is}):(e=d.createElement(s),s==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,s),e[Pr]=t,e[Fs]=n,_d(e,t,!1,!1),t.stateNode=e;e:{switch(d=Vo(s,n),s){case"dialog":je("cancel",e),je("close",e),a=n;break;case"iframe":case"object":case"embed":je("load",e),a=n;break;case"video":case"audio":for(a=0;a<Bs.length;a++)je(Bs[a],e);a=n;break;case"source":je("error",e),a=n;break;case"img":case"image":case"link":je("error",e),je("load",e),a=n;break;case"details":je("toggle",e),a=n;break;case"input":xl(e,n),a=Oo(e,n),je("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=I({},n,{value:void 0}),je("invalid",e);break;case"textarea":gl(e,n),a=Uo(e,n),je("invalid",e);break;default:a=n}$o(s,a),u=a;for(i in u)if(u.hasOwnProperty(i)){var h=u[i];i==="style"?wl(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Nl(e,h)):i==="children"?typeof h=="string"?(s!=="textarea"||h!=="")&&ms(e,h):typeof h=="number"&&ms(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(g.hasOwnProperty(i)?h!=null&&i==="onScroll"&&je("scroll",e):h!=null&&oe(e,i,h,d))}switch(s){case"input":Or(e),fl(e,n,!1);break;case"textarea":Or(e),yl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ae(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Pt(e,!!n.multiple,i,!1):n.defaultValue!=null&&Pt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=In)}switch(s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)Bd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(l(166));if(s=wt(Us.current),wt(Br.current),Rn(t)){if(n=t.stateNode,s=t.memoizedProps,n[Pr]=t,(i=n.nodeValue!==s)&&(e=lr,e!==null))switch(e.tag){case 3:zn(n.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zn(n.nodeValue,s,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(s.nodeType===9?s:s.ownerDocument).createTextNode(n),n[Pr]=t,t.stateNode=n}return Qe(t),null;case 13:if(Ne(Se),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&cr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Fc(),Yt(),t.flags|=98560,i=!1;else if(i=Rn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[Pr]=t}else Yt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),i=!1}else Cr!==null&&(Ni(Cr),Cr=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Se.current&1)!==0?Re===0&&(Re=3):ki())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Zt(),di(e,t),e===null&&Ms(t.stateNode.containerInfo),Qe(t),null;case 10:return Da(t.type._context),Qe(t),null;case 17:return Je(t.type)&&Ln(),Qe(t),null;case 19:if(Ne(Se),i=t.memoizedState,i===null)return Qe(t),null;if(n=(t.flags&128)!==0,d=i.rendering,d===null)if(n)Qs(i,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Un(e),d!==null){for(t.flags|=128,Qs(i,!1),n=d.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=s,s=t.child;s!==null;)i=s,e=n,i.flags&=14680066,d=i.alternate,d===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=d.childLanes,i.lanes=d.lanes,i.child=d.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=d.memoizedProps,i.memoizedState=d.memoizedState,i.updateQueue=d.updateQueue,i.type=d.type,e=d.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return ye(Se,Se.current&1|2),t.child}e=e.sibling}i.tail!==null&&ze()>ts&&(t.flags|=128,n=!0,Qs(i,!1),t.lanes=4194304)}else{if(!n)if(e=Un(d),e!==null){if(t.flags|=128,n=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),Qs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!ke)return Qe(t),null}else 2*ze()-i.renderingStartTime>ts&&s!==1073741824&&(t.flags|=128,n=!0,Qs(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(s=i.last,s!==null?s.sibling=d:t.child=d,i.last=d)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ze(),t.sibling=null,s=Se.current,ye(Se,n?s&1|2:s&1),t):(Qe(t),null);case 22:case 23:return wi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(dr&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Kh(e,t){switch(_a(t),t.tag){case 1:return Je(t.type)&&Ln(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(),Ne(Ze),Ne(Ve),Va(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ha(t),null;case 13:if(Ne(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Yt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Se),null;case 4:return Zt(),null;case 10:return Da(t.type._context),null;case 22:case 23:return wi(),null;case 24:return null;default:return null}}var Xn=!1,Ye=!1,qh=typeof WeakSet=="function"?WeakSet:Set,_=null;function es(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(n){Te(e,t,n)}else s.current=null}function pi(e,t,s){try{s()}catch(n){Te(e,t,n)}}var Md=!1;function Xh(e,t){if(wa=gn,e=hc(),ma(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var n=s.getSelection&&s.getSelection();if(n&&n.rangeCount!==0){s=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var d=0,u=-1,h=-1,y=0,w=0,k=e,b=null;r:for(;;){for(var E;k!==s||a!==0&&k.nodeType!==3||(u=d+a),k!==i||n!==0&&k.nodeType!==3||(h=d+n),k.nodeType===3&&(d+=k.nodeValue.length),(E=k.firstChild)!==null;)b=k,k=E;for(;;){if(k===e)break r;if(b===s&&++y===a&&(u=d),b===i&&++w===n&&(h=d),(E=k.nextSibling)!==null)break;k=b,b=k.parentNode}k=E}s=u===-1||h===-1?null:{start:u,end:h}}else s=null}s=s||{start:0,end:0}}else s=null;for(ka={focusedElem:e,selectionRange:s},gn=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var M=B.memoizedProps,Ie=B.memoizedState,f=t.stateNode,x=f.getSnapshotBeforeUpdate(t.elementType===t.type?M:Tr(t.type,M),Ie);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Te(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return B=Md,Md=!1,B}function Ys(e,t,s){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&pi(t,s,i)}a=a.next}while(a!==n)}}function Zn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var n=s.create;s.destroy=n()}s=s.next}while(s!==t)}}function ui(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pr],delete t[Fs],delete t[za],delete t[Ph],delete t[Bh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function Dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hi(e,t,s){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=In));else if(n!==4&&(e=e.child,e!==null))for(hi(e,t,s),e=e.sibling;e!==null;)hi(e,t,s),e=e.sibling}function xi(e,t,s){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(xi(e,t,s),e=e.sibling;e!==null;)xi(e,t,s),e=e.sibling}var Ue=null,zr=!1;function it(e,t,s){for(s=s.child;s!==null;)Od(e,t,s),s=s.sibling}function Od(e,t,s){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(pn,s)}catch{}switch(s.tag){case 5:Ye||es(s,t);case 6:var n=Ue,a=zr;Ue=null,it(e,t,s),Ue=n,zr=a,Ue!==null&&(zr?(e=Ue,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Ue.removeChild(s.stateNode));break;case 18:Ue!==null&&(zr?(e=Ue,s=s.stateNode,e.nodeType===8?Ta(e.parentNode,s):e.nodeType===1&&Ta(e,s),Cs(e)):Ta(Ue,s.stateNode));break;case 4:n=Ue,a=zr,Ue=s.stateNode.containerInfo,zr=!0,it(e,t,s),Ue=n,zr=a;break;case 0:case 11:case 14:case 15:if(!Ye&&(n=s.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,d=i.destroy;i=i.tag,d!==void 0&&((i&2)!==0||(i&4)!==0)&&pi(s,t,d),a=a.next}while(a!==n)}it(e,t,s);break;case 1:if(!Ye&&(es(s,t),n=s.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=s.memoizedProps,n.state=s.memoizedState,n.componentWillUnmount()}catch(u){Te(s,t,u)}it(e,t,s);break;case 21:it(e,t,s);break;case 22:s.mode&1?(Ye=(n=Ye)||s.memoizedState!==null,it(e,t,s),Ye=n):it(e,t,s);break;default:it(e,t,s)}}function Ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new qh),t.forEach(function(n){var a=ax.bind(null,e,n);s.has(n)||(s.add(n),n.then(a,a))})}}function Ir(e,t){var s=t.deletions;if(s!==null)for(var n=0;n<s.length;n++){var a=s[n];try{var i=e,d=t,u=d;e:for(;u!==null;){switch(u.tag){case 5:Ue=u.stateNode,zr=!1;break e;case 3:Ue=u.stateNode.containerInfo,zr=!0;break e;case 4:Ue=u.stateNode.containerInfo,zr=!0;break e}u=u.return}if(Ue===null)throw Error(l(160));Od(i,d,a),Ue=null,zr=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){Te(a,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wd(t,e),t=t.sibling}function Wd(e,t){var s=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ir(t,e),Rr(e),n&4){try{Ys(3,e,e.return),Zn(3,e)}catch(M){Te(e,e.return,M)}try{Ys(5,e,e.return)}catch(M){Te(e,e.return,M)}}break;case 1:Ir(t,e),Rr(e),n&512&&s!==null&&es(s,s.return);break;case 5:if(Ir(t,e),Rr(e),n&512&&s!==null&&es(s,s.return),e.flags&32){var a=e.stateNode;try{ms(a,"")}catch(M){Te(e,e.return,M)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,d=s!==null?s.memoizedProps:i,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ml(a,i),Vo(u,d);var y=Vo(u,i);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?wl(a,k):w==="dangerouslySetInnerHTML"?Nl(a,k):w==="children"?ms(a,k):oe(a,w,k,y)}switch(u){case"input":Ao(a,i);break;case"textarea":vl(a,i);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?Pt(a,!!i.multiple,E,!1):b!==!!i.multiple&&(i.defaultValue!=null?Pt(a,!!i.multiple,i.defaultValue,!0):Pt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Fs]=i}catch(M){Te(e,e.return,M)}}break;case 6:if(Ir(t,e),Rr(e),n&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(M){Te(e,e.return,M)}}break;case 3:if(Ir(t,e),Rr(e),n&4&&s!==null&&s.memoizedState.isDehydrated)try{Cs(t.containerInfo)}catch(M){Te(e,e.return,M)}break;case 4:Ir(t,e),Rr(e);break;case 13:Ir(t,e),Rr(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(gi=ze())),n&4&&Ad(e);break;case 22:if(w=s!==null&&s.memoizedState!==null,e.mode&1?(Ye=(y=Ye)||w,Ir(t,e),Ye=y):Ir(t,e),Rr(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(_=e,w=e.child;w!==null;){for(k=_=w;_!==null;){switch(b=_,E=b.child,b.tag){case 0:case 11:case 14:case 15:Ys(4,b,b.return);break;case 1:es(b,b.return);var B=b.stateNode;if(typeof B.componentWillUnmount=="function"){n=b,s=b.return;try{t=n,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(M){Te(n,s,M)}}break;case 5:es(b,b.return);break;case 22:if(b.memoizedState!==null){$d(k);continue}}E!==null?(E.return=b,_=E):$d(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{a=k.stateNode,y?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=bl("display",d))}catch(M){Te(e,e.return,M)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(M){Te(e,e.return,M)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Ir(t,e),Rr(e),n&4&&Ad(e);break;case 21:break;default:Ir(t,e),Rr(e)}}function Rr(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(Fd(s)){var n=s;break e}s=s.return}throw Error(l(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(ms(a,""),n.flags&=-33);var i=Dd(e);xi(e,i,a);break;case 3:case 4:var d=n.stateNode.containerInfo,u=Dd(e);hi(e,u,d);break;default:throw Error(l(161))}}catch(h){Te(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zh(e,t,s){_=e,Ud(e)}function Ud(e,t,s){for(var n=(e.mode&1)!==0;_!==null;){var a=_,i=a.child;if(a.tag===22&&n){var d=a.memoizedState!==null||Xn;if(!d){var u=a.alternate,h=u!==null&&u.memoizedState!==null||Ye;u=Xn;var y=Ye;if(Xn=d,(Ye=h)&&!y)for(_=a;_!==null;)d=_,h=d.child,d.tag===22&&d.memoizedState!==null?Vd(a):h!==null?(h.return=d,_=h):Vd(a);for(;i!==null;)_=i,Ud(i),i=i.sibling;_=a,Xn=u,Ye=y}Hd(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,_=i):Hd(e)}}function Hd(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||Zn(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ye)if(s===null)n.componentDidMount();else{var a=t.elementType===t.type?s.memoizedProps:Tr(t.type,s.memoizedProps);n.componentDidUpdate(a,s.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$c(t,i,n);break;case 3:var d=t.updateQueue;if(d!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}$c(t,d,s)}break;case 5:var u=t.stateNode;if(s===null&&t.flags&4){s=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&s.focus();break;case"img":h.src&&(s.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&Cs(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||t.flags&512&&ui(t)}catch(b){Te(t,t.return,b)}}if(t===e){_=null;break}if(s=t.sibling,s!==null){s.return=t.return,_=s;break}_=t.return}}function $d(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}function Vd(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Zn(4,t)}catch(h){Te(t,s,h)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(h){Te(t,a,h)}}var i=t.return;try{ui(t)}catch(h){Te(t,i,h)}break;case 5:var d=t.return;try{ui(t)}catch(h){Te(t,d,h)}}}catch(h){Te(t,t.return,h)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var Jh=Math.ceil,Jn=ee.ReactCurrentDispatcher,mi=ee.ReactCurrentOwner,yr=ee.ReactCurrentBatchConfig,le=0,De=null,Ee=null,He=0,dr=0,rs=tt(0),Re=0,Ks=null,St=0,eo=0,fi=0,qs=null,rr=null,gi=0,ts=1/0,Qr=null,ro=!1,vi=null,lt=null,to=!1,ct=null,so=0,Xs=0,yi=null,no=-1,oo=0;function Xe(){return(le&6)!==0?ze():no!==-1?no:no=ze()}function dt(e){return(e.mode&1)===0?1:(le&2)!==0&&He!==0?He&-He:Rh.transition!==null?(oo===0&&(oo=Dl()),oo):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Ql(e.type)),e)}function Er(e,t,s,n){if(50<Xs)throw Xs=0,yi=null,Error(l(185));Ns(e,s,n),((le&2)===0||e!==De)&&(e===De&&((le&2)===0&&(eo|=s),Re===4&&pt(e,He)),tr(e,n),s===1&&le===0&&(t.mode&1)===0&&(ts=ze()+500,Pn&&nt()))}function tr(e,t){var s=e.callbackNode;Ru(e,t);var n=xn(e,e===De?He:0);if(n===0)s!==null&&Ml(s),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(s!=null&&Ml(s),t===1)e.tag===0?Mh(Qd.bind(null,e)):_c(Qd.bind(null,e)),Lh(function(){(le&6)===0&&nt()}),s=null;else{switch(Ol(n)){case 1:s=Zo;break;case 4:s=Rl;break;case 16:s=dn;break;case 536870912:s=Fl;break;default:s=dn}s=rp(s,Gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function Gd(e,t){if(no=-1,oo=0,(le&6)!==0)throw Error(l(327));var s=e.callbackNode;if(ss()&&e.callbackNode!==s)return null;var n=xn(e,e===De?He:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ao(e,n);else{t=n;var a=le;le|=2;var i=Kd();(De!==e||He!==t)&&(Qr=null,ts=ze()+500,Tt(e,t));do try{tx();break}catch(u){Yd(e,u)}while(!0);Fa(),Jn.current=i,le=a,Ee!==null?t=0:(De=null,He=0,t=Re)}if(t!==0){if(t===2&&(a=Jo(e),a!==0&&(n=a,t=ji(e,a))),t===1)throw s=Ks,Tt(e,0),pt(e,n),tr(e,ze()),s;if(t===6)pt(e,n);else{if(a=e.current.alternate,(n&30)===0&&!ex(a)&&(t=ao(e,n),t===2&&(i=Jo(e),i!==0&&(n=i,t=ji(e,i))),t===1))throw s=Ks,Tt(e,0),pt(e,n),tr(e,ze()),s;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(l(345));case 2:zt(e,rr,Qr);break;case 3:if(pt(e,n),(n&130023424)===n&&(t=gi+500-ze(),10<t)){if(xn(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Xe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ca(zt.bind(null,e,rr,Qr),t);break}zt(e,rr,Qr);break;case 4:if(pt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var d=31-kr(n);i=1<<d,d=t[d],d>a&&(a=d),n&=~i}if(n=a,n=ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Jh(n/1960))-n,10<n){e.timeoutHandle=Ca(zt.bind(null,e,rr,Qr),n);break}zt(e,rr,Qr);break;case 5:zt(e,rr,Qr);break;default:throw Error(l(329))}}}return tr(e,ze()),e.callbackNode===s?Gd.bind(null,e):null}function ji(e,t){var s=qs;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=ao(e,t),e!==2&&(t=rr,rr=s,t!==null&&Ni(t)),e}function Ni(e){rr===null?rr=e:rr.push.apply(rr,e)}function ex(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var n=0;n<s.length;n++){var a=s[n],i=a.getSnapshot;a=a.value;try{if(!Sr(i(),a))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~fi,t&=~eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-kr(t),n=1<<s;e[s]=-1,t&=~n}}function Qd(e){if((le&6)!==0)throw Error(l(327));ss();var t=xn(e,0);if((t&1)===0)return tr(e,ze()),null;var s=ao(e,t);if(e.tag!==0&&s===2){var n=Jo(e);n!==0&&(t=n,s=ji(e,n))}if(s===1)throw s=Ks,Tt(e,0),pt(e,t),tr(e,ze()),s;if(s===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,rr,Qr),tr(e,ze()),null}function bi(e,t){var s=le;le|=1;try{return e(t)}finally{le=s,le===0&&(ts=ze()+500,Pn&&nt())}}function Ct(e){ct!==null&&ct.tag===0&&(le&6)===0&&ss();var t=le;le|=1;var s=yr.transition,n=fe;try{if(yr.transition=null,fe=1,e)return e()}finally{fe=n,yr.transition=s,le=t,(le&6)===0&&nt()}}function wi(){dr=rs.current,Ne(rs)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Eh(s)),Ee!==null)for(s=Ee.return;s!==null;){var n=s;switch(_a(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ln();break;case 3:Zt(),Ne(Ze),Ne(Ve),Va();break;case 5:Ha(n);break;case 4:Zt();break;case 13:Ne(Se);break;case 19:Ne(Se);break;case 10:Da(n.type._context);break;case 22:case 23:wi()}s=s.return}if(De=e,Ee=e=ut(e.current,null),He=dr=t,Re=0,Ks=null,fi=eo=St=0,rr=qs=null,bt!==null){for(t=0;t<bt.length;t++)if(s=bt[t],n=s.interleaved,n!==null){s.interleaved=null;var a=n.next,i=s.pending;if(i!==null){var d=i.next;i.next=a,n.next=d}s.pending=n}bt=null}return e}function Yd(e,t){do{var s=Ee;try{if(Fa(),Hn.current=Qn,$n){for(var n=Ce.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}$n=!1}if(kt=0,Fe=Me=Ce=null,Hs=!1,$s=0,mi.current=null,s===null||s.return===null){Re=1,Ks=t,Ee=null;break}e:{var i=e,d=s.return,u=s,h=t;if(t=He,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var b=w.alternate;b?(w.updateQueue=b.updateQueue,w.memoizedState=b.memoizedState,w.lanes=b.lanes):(w.updateQueue=null,w.memoizedState=null)}var E=yd(d);if(E!==null){E.flags&=-257,jd(E,d,u,i,t),E.mode&1&&vd(i,y,t),t=E,h=y;var B=t.updateQueue;if(B===null){var M=new Set;M.add(h),t.updateQueue=M}else B.add(h);break e}else{if((t&1)===0){vd(i,y,t),ki();break e}h=Error(l(426))}}else if(ke&&u.mode&1){var Ie=yd(d);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),jd(Ie,d,u,i,t),Ma(Jt(h,u));break e}}i=h=Jt(h,u),Re!==4&&(Re=2),qs===null?qs=[i]:qs.push(i),i=d;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=fd(i,h,t);Hc(i,f);break e;case 1:u=h;var x=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lt===null||!lt.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=gd(i,u,t);Hc(i,C);break e}}i=i.return}while(i!==null)}Xd(s)}catch(R){t=R,Ee===s&&s!==null&&(Ee=s=s.return);continue}break}while(!0)}function Kd(){var e=Jn.current;return Jn.current=Qn,e===null?Qn:e}function ki(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||(St&268435455)===0&&(eo&268435455)===0||pt(De,He)}function ao(e,t){var s=le;le|=2;var n=Kd();(De!==e||He!==t)&&(Qr=null,Tt(e,t));do try{rx();break}catch(a){Yd(e,a)}while(!0);if(Fa(),le=s,Jn.current=n,Ee!==null)throw Error(l(261));return De=null,He=0,Re}function rx(){for(;Ee!==null;)qd(Ee)}function tx(){for(;Ee!==null&&!Tu();)qd(Ee)}function qd(e){var t=ep(e.alternate,e,dr);e.memoizedProps=e.pendingProps,t===null?Xd(e):Ee=t,mi.current=null}function Xd(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=Yh(s,t,dr),s!==null){Ee=s;return}}else{if(s=Kh(s,t),s!==null){s.flags&=32767,Ee=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Re===0&&(Re=5)}function zt(e,t,s){var n=fe,a=yr.transition;try{yr.transition=null,fe=1,sx(e,t,s,n)}finally{yr.transition=a,fe=n}return null}function sx(e,t,s,n){do ss();while(ct!==null);if((le&6)!==0)throw Error(l(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var i=s.lanes|s.childLanes;if(Fu(e,i),e===De&&(Ee=De=null,He=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||to||(to=!0,rp(dn,function(){return ss(),null})),i=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||i){i=yr.transition,yr.transition=null;var d=fe;fe=1;var u=le;le|=4,mi.current=null,Xh(e,s),Wd(s,e),wh(ka),gn=!!wa,ka=wa=null,e.current=s,Zh(s),zu(),le=u,fe=d,yr.transition=i}else e.current=s;if(to&&(to=!1,ct=e,so=a),i=e.pendingLanes,i===0&&(lt=null),Lu(s.stateNode),tr(e,ze()),t!==null)for(n=e.onRecoverableError,s=0;s<t.length;s++)a=t[s],n(a.value,{componentStack:a.stack,digest:a.digest});if(ro)throw ro=!1,e=vi,vi=null,e;return(so&1)!==0&&e.tag!==0&&ss(),i=e.pendingLanes,(i&1)!==0?e===yi?Xs++:(Xs=0,yi=e):Xs=0,nt(),null}function ss(){if(ct!==null){var e=Ol(so),t=yr.transition,s=fe;try{if(yr.transition=null,fe=16>e?16:e,ct===null)var n=!1;else{if(e=ct,ct=null,so=0,(le&6)!==0)throw Error(l(331));var a=le;for(le|=4,_=e.current;_!==null;){var i=_,d=i.child;if((_.flags&16)!==0){var u=i.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(_=y;_!==null;){var w=_;switch(w.tag){case 0:case 11:case 15:Ys(8,w,i)}var k=w.child;if(k!==null)k.return=w,_=k;else for(;_!==null;){w=_;var b=w.sibling,E=w.return;if(Rd(w),w===y){_=null;break}if(b!==null){b.return=E,_=b;break}_=E}}}var B=i.alternate;if(B!==null){var M=B.child;if(M!==null){B.child=null;do{var Ie=M.sibling;M.sibling=null,M=Ie}while(M!==null)}}_=i}}if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,_=d;else e:for(;_!==null;){if(i=_,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Ys(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var x=e.current;for(_=x;_!==null;){d=_;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,_=v;else e:for(d=x;_!==null;){if(u=_,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Zn(9,u)}}catch(R){Te(u,u.return,R)}if(u===d){_=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,_=C;break e}_=u.return}}if(le=a,nt(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(pn,e)}catch{}n=!0}return n}finally{fe=s,yr.transition=t}}return!1}function Zd(e,t,s){t=Jt(s,t),t=fd(e,t,1),e=at(e,t,1),t=Xe(),e!==null&&(Ns(e,1,t),tr(e,t))}function Te(e,t,s){if(e.tag===3)Zd(e,e,s);else for(;t!==null;){if(t.tag===3){Zd(t,e,s);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(lt===null||!lt.has(n))){e=Jt(s,e),e=gd(t,e,1),t=at(t,e,1),e=Xe(),t!==null&&(Ns(t,1,e),tr(t,e));break}}t=t.return}}function nx(e,t,s){var n=e.pingCache;n!==null&&n.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&s,De===e&&(He&s)===s&&(Re===4||Re===3&&(He&130023424)===He&&500>ze()-gi?Tt(e,0):fi|=s),tr(e,t)}function Jd(e,t){t===0&&((e.mode&1)===0?t=1:(t=hn,hn<<=1,(hn&130023424)===0&&(hn=4194304)));var s=Xe();e=$r(e,t),e!==null&&(Ns(e,t,s),tr(e,s))}function ox(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Jd(e,s)}function ax(e,t){var s=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(l(314))}n!==null&&n.delete(t),Jd(e,s)}var ep;ep=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)er=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return er=!1,Qh(e,t,s);er=(e.flags&131072)!==0}else er=!1,ke&&(t.flags&1048576)!==0&&Pc(t,Mn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;qn(e,t),e=t.pendingProps;var a=Vt(t,Ve.current);Xt(t,s),a=Ya(null,t,n,e,a,s);var i=Ka();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(n)?(i=!0,_n(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Wa(t),a.updater=Yn,t.stateNode=a,a._reactInternals=t,ri(t,n,e,s),t=oi(null,t,n,!0,i,s)):(t.tag=0,ke&&i&&La(t),qe(null,t,a,s),t=t.child),t;case 16:n=t.elementType;e:{switch(qn(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=lx(n),e=Tr(n,e),a){case 0:t=ni(null,t,n,e,s);break e;case 1:t=Cd(null,t,n,e,s);break e;case 11:t=Nd(null,t,n,e,s);break e;case 14:t=bd(null,t,n,Tr(n.type,e),s);break e}throw Error(l(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tr(n,a),ni(e,t,n,a,s);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tr(n,a),Cd(e,t,n,a,s);case 3:e:{if(Td(t),e===null)throw Error(l(387));n=t.pendingProps,i=t.memoizedState,a=i.element,Uc(e,t),Wn(t,n,null,s);var d=t.memoizedState;if(n=d.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Jt(Error(l(423)),t),t=zd(e,t,n,s,a);break e}else if(n!==a){a=Jt(Error(l(424)),t),t=zd(e,t,n,s,a);break e}else for(cr=rt(t.stateNode.containerInfo.firstChild),lr=t,ke=!0,Cr=null,s=Ac(t,null,n,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Yt(),n===a){t=Gr(e,t,s);break e}qe(e,t,n,s)}t=t.child}return t;case 5:return Vc(t),e===null&&Ba(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,d=a.children,Sa(n,a)?d=null:i!==null&&Sa(n,i)&&(t.flags|=32),Sd(e,t),qe(e,t,d,s),t.child;case 6:return e===null&&Ba(t),null;case 13:return Id(e,t,s);case 4:return Ua(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Kt(t,null,n,s):qe(e,t,n,s),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tr(n,a),Nd(e,t,n,a,s);case 7:return qe(e,t,t.pendingProps,s),t.child;case 8:return qe(e,t,t.pendingProps.children,s),t.child;case 12:return qe(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,d=a.value,ye(Dn,n._currentValue),n._currentValue=d,i!==null)if(Sr(i.value,d)){if(i.children===a.children&&!Ze.current){t=Gr(e,t,s);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){d=i.child;for(var h=u.firstContext;h!==null;){if(h.context===n){if(i.tag===1){h=Vr(-1,s&-s),h.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}i.lanes|=s,h=i.alternate,h!==null&&(h.lanes|=s),Oa(i.return,s,t),u.lanes|=s;break}h=h.next}}else if(i.tag===10)d=i.type===t.type?null:i.child;else if(i.tag===18){if(d=i.return,d===null)throw Error(l(341));d.lanes|=s,u=d.alternate,u!==null&&(u.lanes|=s),Oa(d,s,t),d=i.sibling}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===t){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}qe(e,t,a.children,s),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Xt(t,s),a=gr(a),n=n(a),t.flags|=1,qe(e,t,n,s),t.child;case 14:return n=t.type,a=Tr(n,t.pendingProps),a=Tr(n.type,a),bd(e,t,n,a,s);case 15:return wd(e,t,t.type,t.pendingProps,s);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tr(n,a),qn(e,t),t.tag=1,Je(n)?(e=!0,_n(t)):e=!1,Xt(t,s),xd(t,n,a),ri(t,n,a,s),oi(null,t,n,!0,e,s);case 19:return Ld(e,t,s);case 22:return kd(e,t,s)}throw Error(l(156,t.tag))};function rp(e,t){return Bl(e,t)}function ix(e,t,s,n){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(e,t,s,n){return new ix(e,t,s,n)}function Si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lx(e){if(typeof e=="function")return Si(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hr)return 11;if(e===xr)return 14}return 2}function ut(e,t){var s=e.alternate;return s===null?(s=jr(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function io(e,t,s,n,a,i){var d=2;if(n=e,typeof e=="function")Si(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case U:return It(s.children,a,i,t);case Be:d=8,a|=8;break;case or:return e=jr(12,s,t,a|2),e.elementType=or,e.lanes=i,e;case Ke:return e=jr(13,s,t,a),e.elementType=Ke,e.lanes=i,e;case ar:return e=jr(19,s,t,a),e.elementType=ar,e.lanes=i,e;case ve:return lo(s,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case br:d=10;break e;case Dr:d=9;break e;case hr:d=11;break e;case xr:d=14;break e;case $e:d=16,n=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=jr(d,s,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function It(e,t,s,n){return e=jr(7,e,n,t),e.lanes=s,e}function lo(e,t,s,n){return e=jr(22,e,n,t),e.elementType=ve,e.lanes=s,e.stateNode={isHidden:!1},e}function Ci(e,t,s){return e=jr(6,e,null,t),e.lanes=s,e}function Ti(e,t,s){return t=jr(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cx(e,t,s,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zi(e,t,s,n,a,i,d,u,h){return e=new cx(e,t,s,u,h),t===1?(t=1,i===!0&&(t|=8)):t=0,i=jr(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(i),e}function dx(e,t,s){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:n==null?null:""+n,children:e,containerInfo:t,implementation:s}}function tp(e){if(!e)return st;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var s=e.type;if(Je(s))return Ec(e,s,t)}return t}function sp(e,t,s,n,a,i,d,u,h){return e=zi(s,n,!0,e,a,i,d,u,h),e.context=tp(null),s=e.current,n=Xe(),a=dt(s),i=Vr(n,a),i.callback=t!=null?t:null,at(s,i,a),e.current.lanes=a,Ns(e,a,n),tr(e,n),e}function co(e,t,s,n){var a=t.current,i=Xe(),d=dt(a);return s=tp(s),t.context===null?t.context=s:t.pendingContext=s,t=Vr(i,d),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=at(a,t,d),e!==null&&(Er(e,a,d,i),An(e,a,d)),d}function po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Ii(e,t){np(e,t),(e=e.alternate)&&np(e,t)}function px(){return null}var op=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ei(e){this._internalRoot=e}uo.prototype.render=Ei.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));co(e,t,null,null)},uo.prototype.unmount=Ei.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ct(function(){co(null,e,null,null)}),t[Ar]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ul();e={blockedOn:null,target:e,priority:t};for(var s=0;s<Zr.length&&t!==0&&t<Zr[s].priority;s++);Zr.splice(s,0,e),s===0&&Vl(e)}};function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ap(){}function ux(e,t,s,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var y=po(d);i.call(y)}}var d=sp(t,n,e,0,null,!1,!1,"",ap);return e._reactRootContainer=d,e[Ar]=d.current,Ms(e.nodeType===8?e.parentNode:e),Ct(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var u=n;n=function(){var y=po(h);u.call(y)}}var h=zi(e,0,!1,null,null,!1,!1,"",ap);return e._reactRootContainer=h,e[Ar]=h.current,Ms(e.nodeType===8?e.parentNode:e),Ct(function(){co(t,h,s,n)}),h}function xo(e,t,s,n,a){var i=s._reactRootContainer;if(i){var d=i;if(typeof a=="function"){var u=a;a=function(){var h=po(d);u.call(h)}}co(t,d,e,a)}else d=ux(s,t,e,a,n);return po(d)}Al=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=js(t.pendingLanes);s!==0&&(ra(t,s|1),tr(t,ze()),(le&6)===0&&(ts=ze()+500,nt()))}break;case 13:Ct(function(){var n=$r(e,1);if(n!==null){var a=Xe();Er(n,e,1,a)}}),Ii(e,1)}},ta=function(e){if(e.tag===13){var t=$r(e,134217728);if(t!==null){var s=Xe();Er(t,e,134217728,s)}Ii(e,134217728)}},Wl=function(e){if(e.tag===13){var t=dt(e),s=$r(e,t);if(s!==null){var n=Xe();Er(s,e,t,n)}Ii(e,t)}},Ul=function(){return fe},Hl=function(e,t){var s=fe;try{return fe=e,t()}finally{fe=s}},Yo=function(e,t,s){switch(t){case"input":if(Ao(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var n=s[t];if(n!==e&&n.form===e.form){var a=En(n);if(!a)throw Error(l(90));wr(n),Ao(n,a)}}}break;case"textarea":vl(e,s);break;case"select":t=s.value,t!=null&&Pt(e,!!s.multiple,t,!1)}},Tl=bi,zl=Ct;var hx={usingClientEntryPoint:!1,Events:[Ds,Ht,En,Sl,Cl,bi]},Zs={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xx={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_l(e),e===null?null:e.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{pn=mo.inject(xx),_r=mo}catch{}}return sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hx,sr.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Li(t))throw Error(l(200));return dx(e,t,null,s)},sr.createRoot=function(e,t){if(!Li(e))throw Error(l(299));var s=!1,n="",a=op;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=zi(e,1,!1,null,null,s,!1,n,a),e[Ar]=t.current,Ms(e.nodeType===8?e.parentNode:e),new Ei(t)},sr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=_l(t),e=e===null?null:e.stateNode,e},sr.flushSync=function(e){return Ct(e)},sr.hydrate=function(e,t,s){if(!ho(t))throw Error(l(200));return xo(null,e,t,!0,s)},sr.hydrateRoot=function(e,t,s){if(!Li(e))throw Error(l(405));var n=s!=null&&s.hydratedSources||null,a=!1,i="",d=op;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),t=sp(t,null,e,1,s!=null?s:null,a,!1,i,d),e[Ar]=t.current,Ms(e),n)for(e=0;e<n.length;e++)s=n[e],a=s._getVersion,a=a(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,a]:t.mutableSourceEagerHydrationData.push(s,a);return new uo(t)},sr.render=function(e,t,s){if(!ho(t))throw Error(l(200));return xo(null,e,t,!1,s)},sr.unmountComponentAtNode=function(e){if(!ho(e))throw Error(l(40));return e._reactRootContainer?(Ct(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ar]=null})}),!0):!1},sr.unstable_batchedUpdates=bi,sr.unstable_renderSubtreeIntoContainer=function(e,t,s,n){if(!ho(s))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return xo(e,t,s,!1,n)},sr.version="18.3.1-next-f1338f8080-20240426",sr}var xp;function wx(){if(xp)return Bi.exports;xp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Bi.exports=bx(),Bi.exports}var mp;function kx(){if(mp)return fo;mp=1;var o=wx();return fo.createRoot=o.createRoot,fo.hydrateRoot=o.hydrateRoot,fo}var Sx=kx(),he=nl();const ur=fx(he);var Wp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fp=ur.createContext&&ur.createContext(Wp),Cx=["attr","size","title"];function Tx(o,c){if(o==null)return{};var l=zx(o,c),p,g;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(o);for(g=0;g<j.length;g++)p=j[g],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(o,p)&&(l[p]=o[p])}return l}function zx(o,c){if(o==null)return{};var l={};for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p)){if(c.indexOf(p)>=0)continue;l[p]=o[p]}return l}function So(){return So=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(o[p]=l[p])}return o},So.apply(this,arguments)}function gp(o,c){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);c&&(p=p.filter(function(g){return Object.getOwnPropertyDescriptor(o,g).enumerable})),l.push.apply(l,p)}return l}function Co(o){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?gp(Object(l),!0).forEach(function(p){Ix(o,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):gp(Object(l)).forEach(function(p){Object.defineProperty(o,p,Object.getOwnPropertyDescriptor(l,p))})}return o}function Ix(o,c,l){return c=Ex(c),c in o?Object.defineProperty(o,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[c]=l,o}function Ex(o){var c=Lx(o,"string");return typeof c=="symbol"?c:c+""}function Lx(o,c){if(typeof o!="object"||!o)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var p=l.call(o,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(o)}function Up(o){return o&&o.map((c,l)=>ur.createElement(c.tag,Co({key:l},c.attr),Up(c.child)))}function P(o){return c=>ur.createElement(_x,So({attr:Co({},o.attr)},c),Up(o.child))}function _x(o){var c=l=>{var{attr:p,size:g,title:j}=o,S=Tx(o,Cx),L=g||l.size||"1em",T;return l.className&&(T=l.className),o.className&&(T=(T?T+" ":"")+o.className),ur.createElement("svg",So({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,S,{className:T,style:Co(Co({color:o.color||l.color},l.style),o.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),j&&ur.createElement("title",null,j),o.children)};return fp!==void 0?ur.createElement(fp.Consumer,null,l=>c(l)):c(Wp)}function ol(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function Hp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(o)}function Px(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"17",y1:"10",x2:"3",y2:"10"},child:[]},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"},child:[]},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"},child:[]},{tag:"line",attr:{x1:"17",y1:"18",x2:"3",y2:"18"},child:[]}]})(o)}function vp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"},child:[]},{tag:"line",attr:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"},child:[]},{tag:"line",attr:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"},child:[]},{tag:"line",attr:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"},child:[]},{tag:"line",attr:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"},child:[]}]})(o)}function Bx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function al(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function _e(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function Pe(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(o)}function $p(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function G(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function Mx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function Vp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(o)}function Rx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(o)}function Vi(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(o)}function go(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(o)}function Fx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Dx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.13 1L6 16a2 2 0 0 0 2 2h15"},child:[]},{tag:"path",attr:{d:"M1 6.13L16 6a2 2 0 0 1 2 2v15"},child:[]}]})(o)}function Fi(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"22",y1:"12",x2:"18",y2:"12"},child:[]},{tag:"line",attr:{x1:"6",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"6",x2:"12",y2:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"18"},child:[]}]})(o)}function Gi(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(o)}function To(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(o)}function Ox(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(o)}function Ax(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 19 22 12 13 5 13 19"},child:[]},{tag:"polygon",attr:{points:"2 19 11 12 2 5 2 19"},child:[]}]})(o)}function Gp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(o)}function Wx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function Ux(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"2.18",ry:"2.18"},child:[]},{tag:"line",attr:{x1:"7",y1:"2",x2:"7",y2:"22"},child:[]},{tag:"line",attr:{x1:"17",y1:"2",x2:"17",y2:"22"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"2",y1:"7",x2:"7",y2:"7"},child:[]},{tag:"line",attr:{x1:"2",y1:"17",x2:"7",y2:"17"},child:[]},{tag:"line",attr:{x1:"17",y1:"17",x2:"22",y2:"17"},child:[]},{tag:"line",attr:{x1:"17",y1:"7",x2:"22",y2:"7"},child:[]}]})(o)}function Hx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(o)}function $x(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(o)}function Vx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(o)}function Gx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(o)}function as(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Qp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function Qx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function Qi(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function Yi(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(o)}function yp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(o)}function we(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Ki(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(o)}function jp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Yx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(o)}function Kx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function Np(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(o)}function qx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function Yp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(o)}function Xx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"},child:[]}]})(o)}function Zx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Di(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(o)}function il(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function tn(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(o)}function Jx(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function em(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"10",y1:"15",x2:"10",y2:"9"},child:[]},{tag:"line",attr:{x1:"14",y1:"15",x2:"14",y2:"9"},child:[]}]})(o)}function rm(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19l7-7 3 3-7 7-3-3z"},child:[]},{tag:"path",attr:{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"},child:[]},{tag:"path",attr:{d:"M2 2l7.586 7.586"},child:[]},{tag:"circle",attr:{cx:"11",cy:"11",r:"2"},child:[]}]})(o)}function tm(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function mt(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function Oi(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"},child:[]}]})(o)}function sm(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]}]})(o)}function nm(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(o)}function ll(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function bp(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(o)}function is(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function om(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function qi(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function zo(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(o)}function ft(o){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}var nr=function(){return nr=Object.assign||function(c){for(var l,p=1,g=arguments.length;p<g;p++){l=arguments[p];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},nr.apply(this,arguments)};function Io(o,c,l){if(l||arguments.length===2)for(var p=0,g=c.length,j;p<g;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return o.concat(j||Array.prototype.slice.call(c))}var be="-ms-",rn="-moz-",me="-webkit-",Kp="comm",Po="rule",cl="decl",am="@import",qp="@keyframes",im="@layer",Xp=Math.abs,dl=String.fromCharCode,Xi=Object.assign;function lm(o,c){return Ae(o,0)^45?(((c<<2^Ae(o,0))<<2^Ae(o,1))<<2^Ae(o,2))<<2^Ae(o,3):0}function Zp(o){return o.trim()}function Yr(o,c){return(o=c.exec(o))?o[0]:o}function J(o,c,l){return o.replace(c,l)}function jo(o,c,l){return o.indexOf(c,l)}function Ae(o,c){return o.charCodeAt(c)|0}function ls(o,c,l){return o.slice(c,l)}function Fr(o){return o.length}function Jp(o){return o.length}function en(o,c){return c.push(o),o}function cm(o,c){return o.map(c).join("")}function wp(o,c){return o.filter(function(l){return!Yr(l,c)})}var Bo=1,cs=1,eu=0,Nr=0,Le=0,hs="";function Mo(o,c,l,p,g,j,S,L){return{value:o,root:c,parent:l,type:p,props:g,children:j,line:Bo,column:cs,length:S,return:"",siblings:L}}function xt(o,c){return Xi(Mo("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},c)}function ns(o){for(;o.root;)o=xt(o.root,{children:[o]});en(o,o.siblings)}function dm(){return Le}function pm(){return Le=Nr>0?Ae(hs,--Nr):0,cs--,Le===10&&(cs=1,Bo--),Le}function Lr(){return Le=Nr<eu?Ae(hs,Nr++):0,cs++,Le===10&&(cs=1,Bo++),Le}function Lt(){return Ae(hs,Nr)}function No(){return Nr}function Ro(o,c){return ls(hs,o,c)}function Zi(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function um(o){return Bo=cs=1,eu=Fr(hs=o),Nr=0,[]}function hm(o){return hs="",o}function Ai(o){return Zp(Ro(Nr-1,Ji(o===91?o+2:o===40?o+1:o)))}function xm(o){for(;(Le=Lt())&&Le<33;)Lr();return Zi(o)>2||Zi(Le)>3?"":" "}function mm(o,c){for(;--c&&Lr()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Ro(o,No()+(c<6&&Lt()==32&&Lr()==32))}function Ji(o){for(;Lr();)switch(Le){case o:return Nr;case 34:case 39:o!==34&&o!==39&&Ji(Le);break;case 40:o===41&&Ji(o);break;case 92:Lr();break}return Nr}function fm(o,c){for(;Lr()&&o+Le!==57;)if(o+Le===84&&Lt()===47)break;return"/*"+Ro(c,Nr-1)+"*"+dl(o===47?o:Lr())}function gm(o){for(;!Zi(Lt());)Lr();return Ro(o,Nr)}function vm(o){return hm(bo("",null,null,null,[""],o=um(o),0,[0],o))}function bo(o,c,l,p,g,j,S,L,T){for(var Q=0,$=0,D=S,O=0,Y=0,ne=0,V=1,X=1,xe=1,ie=0,oe="",ee=g,pe=j,K=p,U=oe;X;)switch(ne=ie,ie=Lr()){case 40:if(ne!=108&&Ae(U,D-1)==58){jo(U+=J(Ai(ie),"&","&\f"),"&\f",Xp(Q?L[Q-1]:0))!=-1&&(xe=-1);break}case 34:case 39:case 91:U+=Ai(ie);break;case 9:case 10:case 13:case 32:U+=xm(ne);break;case 92:U+=mm(No()-1,7);continue;case 47:switch(Lt()){case 42:case 47:en(ym(fm(Lr(),No()),c,l,T),T);break;default:U+="/"}break;case 123*V:L[Q++]=Fr(U)*xe;case 125*V:case 59:case 0:switch(ie){case 0:case 125:X=0;case 59+$:xe==-1&&(U=J(U,/\f/g,"")),Y>0&&Fr(U)-D&&en(Y>32?Sp(U+";",p,l,D-1,T):Sp(J(U," ","")+";",p,l,D-2,T),T);break;case 59:U+=";";default:if(en(K=kp(U,c,l,Q,$,g,L,oe,ee=[],pe=[],D,j),j),ie===123)if($===0)bo(U,c,K,K,ee,j,D,L,pe);else switch(O===99&&Ae(U,3)===110?100:O){case 100:case 108:case 109:case 115:bo(o,K,K,p&&en(kp(o,K,K,0,0,g,L,oe,g,ee=[],D,pe),pe),g,pe,D,L,p?ee:pe);break;default:bo(U,K,K,K,[""],pe,0,L,pe)}}Q=$=Y=0,V=xe=1,oe=U="",D=S;break;case 58:D=1+Fr(U),Y=ne;default:if(V<1){if(ie==123)--V;else if(ie==125&&V++==0&&pm()==125)continue}switch(U+=dl(ie),ie*V){case 38:xe=$>0?1:(U+="\f",-1);break;case 44:L[Q++]=(Fr(U)-1)*xe,xe=1;break;case 64:Lt()===45&&(U+=Ai(Lr())),O=Lt(),$=D=Fr(oe=U+=gm(No())),ie++;break;case 45:ne===45&&Fr(U)==2&&(V=0)}}return j}function kp(o,c,l,p,g,j,S,L,T,Q,$,D){for(var O=g-1,Y=g===0?j:[""],ne=Jp(Y),V=0,X=0,xe=0;V<p;++V)for(var ie=0,oe=ls(o,O+1,O=Xp(X=S[V])),ee=o;ie<ne;++ie)(ee=Zp(X>0?Y[ie]+" "+oe:J(oe,/&\f/g,Y[ie])))&&(T[xe++]=ee);return Mo(o,c,l,g===0?Po:L,T,Q,$,D)}function ym(o,c,l,p){return Mo(o,c,l,Kp,dl(dm()),ls(o,2,-2),0,p)}function Sp(o,c,l,p,g){return Mo(o,c,l,cl,ls(o,0,p),ls(o,p+1,-1),p,g)}function ru(o,c,l){switch(lm(o,c)){case 5103:return me+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+o+o;case 4789:return rn+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return me+o+rn+o+be+o+o;case 5936:switch(Ae(o,c+11)){case 114:return me+o+be+J(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return me+o+be+J(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return me+o+be+J(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return me+o+be+o+o;case 6165:return me+o+be+"flex-"+o+o;case 5187:return me+o+J(o,/(\w+).+(:[^]+)/,me+"box-$1$2"+be+"flex-$1$2")+o;case 5443:return me+o+be+"flex-item-"+J(o,/flex-|-self/g,"")+(Yr(o,/flex-|baseline/)?"":be+"grid-row-"+J(o,/flex-|-self/g,""))+o;case 4675:return me+o+be+"flex-line-pack"+J(o,/align-content|flex-|-self/g,"")+o;case 5548:return me+o+be+J(o,"shrink","negative")+o;case 5292:return me+o+be+J(o,"basis","preferred-size")+o;case 6060:return me+"box-"+J(o,"-grow","")+me+o+be+J(o,"grow","positive")+o;case 4554:return me+J(o,/([^-])(transform)/g,"$1"+me+"$2")+o;case 6187:return J(J(J(o,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),o,"")+o;case 5495:case 3959:return J(o,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return J(J(o,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+o+o;case 4200:if(!Yr(o,/flex-|baseline/))return be+"grid-column-align"+ls(o,c)+o;break;case 2592:case 3360:return be+J(o,"template-","")+o;case 4384:case 3616:return l&&l.some(function(p,g){return c=g,Yr(p.props,/grid-\w+-end/)})?~jo(o+(l=l[c].value),"span",0)?o:be+J(o,"-start","")+o+be+"grid-row-span:"+(~jo(l,"span",0)?Yr(l,/\d+/):+Yr(l,/\d+/)-+Yr(o,/\d+/))+";":be+J(o,"-start","")+o;case 4896:case 4128:return l&&l.some(function(p){return Yr(p.props,/grid-\w+-start/)})?o:be+J(J(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return J(o,/(.+)-inline(.+)/,me+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fr(o)-1-c>6)switch(Ae(o,c+1)){case 109:if(Ae(o,c+4)!==45)break;case 102:return J(o,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+rn+(Ae(o,c+3)==108?"$3":"$2-$3"))+o;case 115:return~jo(o,"stretch",0)?ru(J(o,"stretch","fill-available"),c,l)+o:o}break;case 5152:case 5920:return J(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,g,j,S,L,T,Q){return be+g+":"+j+Q+(S?be+g+"-span:"+(L?T:+T-+j)+Q:"")+o});case 4949:if(Ae(o,c+6)===121)return J(o,":",":"+me)+o;break;case 6444:switch(Ae(o,Ae(o,14)===45?18:11)){case 120:return J(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Ae(o,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+be+"$2box$3")+o;case 100:return J(o,":",":"+be)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(o,"scroll-","scroll-snap-")+o}return o}function Eo(o,c){for(var l="",p=0;p<o.length;p++)l+=c(o[p],p,o,c)||"";return l}function jm(o,c,l,p){switch(o.type){case im:if(o.children.length)break;case am:case cl:return o.return=o.return||o.value;case Kp:return"";case qp:return o.return=o.value+"{"+Eo(o.children,p)+"}";case Po:if(!Fr(o.value=o.props.join(",")))return""}return Fr(l=Eo(o.children,p))?o.return=o.value+"{"+l+"}":""}function Nm(o){var c=Jp(o);return function(l,p,g,j){for(var S="",L=0;L<c;L++)S+=o[L](l,p,g,j)||"";return S}}function bm(o){return function(c){c.root||(c=c.return)&&o(c)}}function wm(o,c,l,p){if(o.length>-1&&!o.return)switch(o.type){case cl:o.return=ru(o.value,o.length,l);return;case qp:return Eo([xt(o,{value:J(o.value,"@","@"+me)})],p);case Po:if(o.length)return cm(l=o.props,function(g){switch(Yr(g,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ns(xt(o,{props:[J(g,/:(read-\w+)/,":"+rn+"$1")]})),ns(xt(o,{props:[g]})),Xi(o,{props:wp(l,p)});break;case"::placeholder":ns(xt(o,{props:[J(g,/:(plac\w+)/,":"+me+"input-$1")]})),ns(xt(o,{props:[J(g,/:(plac\w+)/,":"+rn+"$1")]})),ns(xt(o,{props:[J(g,/:(plac\w+)/,be+"input-$1")]})),ns(xt(o,{props:[g]})),Xi(o,{props:wp(l,p)});break}return""})}}var km={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pr={},ds=typeof process!="undefined"&&pr!==void 0&&(pr.REACT_APP_SC_ATTR||pr.SC_ATTR)||"data-styled",tu="active",su="data-styled-version",Fo="6.1.18",pl=`/*!sc*/
`,Lo=typeof window!="undefined"&&typeof document!="undefined",Sm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&pr!==void 0&&pr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pr.REACT_APP_SC_DISABLE_SPEEDY!==""?pr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&pr!==void 0&&pr.SC_DISABLE_SPEEDY!==void 0&&pr.SC_DISABLE_SPEEDY!==""&&pr.SC_DISABLE_SPEEDY!=="false"&&pr.SC_DISABLE_SPEEDY),Do=Object.freeze([]),ps=Object.freeze({});function Cm(o,c,l){return l===void 0&&(l=ps),o.theme!==l.theme&&o.theme||c||l.theme}var nu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zm=/(^-|-$)/g;function Cp(o){return o.replace(Tm,"-").replace(zm,"")}var Im=/(a)(d)/gi,vo=52,Tp=function(o){return String.fromCharCode(o+(o>25?39:97))};function el(o){var c,l="";for(c=Math.abs(o);c>vo;c=c/vo|0)l=Tp(c%vo)+l;return(Tp(c%vo)+l).replace(Im,"$1-$2")}var Wi,ou=5381,os=function(o,c){for(var l=c.length;l;)o=33*o^c.charCodeAt(--l);return o},au=function(o){return os(ou,o)};function Em(o){return el(au(o)>>>0)}function Lm(o){return o.displayName||o.name||"Component"}function Ui(o){return typeof o=="string"&&!0}var iu=typeof Symbol=="function"&&Symbol.for,lu=iu?Symbol.for("react.memo"):60115,_m=iu?Symbol.for("react.forward_ref"):60112,Pm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mm=((Wi={})[_m]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wi[lu]=cu,Wi);function zp(o){return("type"in(c=o)&&c.type.$$typeof)===lu?cu:"$$typeof"in o?Mm[o.$$typeof]:Pm;var c}var Rm=Object.defineProperty,Fm=Object.getOwnPropertyNames,Ip=Object.getOwnPropertySymbols,Dm=Object.getOwnPropertyDescriptor,Om=Object.getPrototypeOf,Ep=Object.prototype;function du(o,c,l){if(typeof c!="string"){if(Ep){var p=Om(c);p&&p!==Ep&&du(o,p,l)}var g=Fm(c);Ip&&(g=g.concat(Ip(c)));for(var j=zp(o),S=zp(c),L=0;L<g.length;++L){var T=g[L];if(!(T in Bm||l&&l[T]||S&&T in S||j&&T in j)){var Q=Dm(c,T);try{Rm(o,T,Q)}catch{}}}}return o}function us(o){return typeof o=="function"}function ul(o){return typeof o=="object"&&"styledComponentId"in o}function Et(o,c){return o&&c?"".concat(o," ").concat(c):o||c||""}function Lp(o,c){if(o.length===0)return"";for(var l=o[0],p=1;p<o.length;p++)l+=o[p];return l}function sn(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function rl(o,c,l){if(l===void 0&&(l=!1),!l&&!sn(o)&&!Array.isArray(o))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)o[p]=rl(o[p],c[p]);else if(sn(c))for(var p in c)o[p]=rl(o[p],c[p]);return o}function hl(o,c){Object.defineProperty(o,"toString",{value:c})}function nn(o){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Am=(function(){function o(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return o.prototype.indexOfGroup=function(c){for(var l=0,p=0;p<c;p++)l+=this.groupSizes[p];return l},o.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,g=p.length,j=g;c>=j;)if((j<<=1)<0)throw nn(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var S=g;S<j;S++)this.groupSizes[S]=0}for(var L=this.indexOfGroup(c+1),T=(S=0,l.length);S<T;S++)this.tag.insertRule(L,l[S])&&(this.groupSizes[c]++,L++)},o.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),g=p+l;this.groupSizes[c]=0;for(var j=p;j<g;j++)this.tag.deleteRule(p)}},o.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],g=this.indexOfGroup(c),j=g+p,S=g;S<j;S++)l+="".concat(this.tag.getRule(S)).concat(pl);return l},o})(),wo=new Map,_o=new Map,ko=1,yo=function(o){if(wo.has(o))return wo.get(o);for(;_o.has(ko);)ko++;var c=ko++;return wo.set(o,c),_o.set(c,o),c},Wm=function(o,c){ko=c+1,wo.set(o,c),_o.set(c,o)},Um="style[".concat(ds,"][").concat(su,'="').concat(Fo,'"]'),Hm=new RegExp("^".concat(ds,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$m=function(o,c,l){for(var p,g=l.split(","),j=0,S=g.length;j<S;j++)(p=g[j])&&o.registerName(c,p)},Vm=function(o,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(pl),g=[],j=0,S=p.length;j<S;j++){var L=p[j].trim();if(L){var T=L.match(Hm);if(T){var Q=0|parseInt(T[1],10),$=T[2];Q!==0&&(Wm($,Q),$m(o,$,T[3]),o.getTag().insertRules(Q,g)),g.length=0}else g.push(L)}}},_p=function(o){for(var c=document.querySelectorAll(Um),l=0,p=c.length;l<p;l++){var g=c[l];g&&g.getAttribute(ds)!==tu&&(Vm(o,g),g.parentNode&&g.parentNode.removeChild(g))}};function Gm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var pu=function(o){var c=document.head,l=o||c,p=document.createElement("style"),g=(function(L){var T=Array.from(L.querySelectorAll("style[".concat(ds,"]")));return T[T.length-1]})(l),j=g!==void 0?g.nextSibling:null;p.setAttribute(ds,tu),p.setAttribute(su,Fo);var S=Gm();return S&&p.setAttribute("nonce",S),l.insertBefore(p,j),p},Qm=(function(){function o(c){this.element=pu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var p=document.styleSheets,g=0,j=p.length;g<j;g++){var S=p[g];if(S.ownerNode===l)return S}throw nn(17)})(this.element),this.length=0}return o.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},o.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},o})(),Ym=(function(){function o(c){this.element=pu(c),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},o.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},o})(),Km=(function(){function o(c){this.rules=[],this.length=0}return o.prototype.insertRule=function(c,l){return c<=this.length&&(this.rules.splice(c,0,l),this.length++,!0)},o.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},o.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},o})(),Pp=Lo,qm={isServer:!Lo,useCSSOMInjection:!Sm},uu=(function(){function o(c,l,p){c===void 0&&(c=ps),l===void 0&&(l={});var g=this;this.options=nr(nr({},qm),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&Lo&&Pp&&(Pp=!1,_p(this)),hl(this,function(){return(function(j){for(var S=j.getTag(),L=S.length,T="",Q=function(D){var O=(function(xe){return _o.get(xe)})(D);if(O===void 0)return"continue";var Y=j.names.get(O),ne=S.getGroup(D);if(Y===void 0||!Y.size||ne.length===0)return"continue";var V="".concat(ds,".g").concat(D,'[id="').concat(O,'"]'),X="";Y!==void 0&&Y.forEach(function(xe){xe.length>0&&(X+="".concat(xe,","))}),T+="".concat(ne).concat(V,'{content:"').concat(X,'"}').concat(pl)},$=0;$<L;$++)Q($);return T})(g)})}return o.registerId=function(c){return yo(c)},o.prototype.rehydrate=function(){!this.server&&Lo&&_p(this)},o.prototype.reconstructWithOptions=function(c,l){return l===void 0&&(l=!0),new o(nr(nr({},this.options),c),this.gs,l&&this.names||void 0)},o.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,g=l.target;return l.isServer?new Km(g):p?new Qm(g):new Ym(g)})(this.options),new Am(c)));var c},o.prototype.hasNameForId=function(c,l){return this.names.has(c)&&this.names.get(c).has(l)},o.prototype.registerName=function(c,l){if(yo(c),this.names.has(c))this.names.get(c).add(l);else{var p=new Set;p.add(l),this.names.set(c,p)}},o.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(yo(c),p)},o.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},o.prototype.clearRules=function(c){this.getTag().clearGroup(yo(c)),this.clearNames(c)},o.prototype.clearTag=function(){this.tag=void 0},o})(),Xm=/&/g,Zm=/^\s*\/\/.*$/gm;function hu(o,c){return o.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=hu(l.children,c)),l})}function Jm(o){var c,l,p,g=ps,j=g.options,S=j===void 0?ps:j,L=g.plugins,T=L===void 0?Do:L,Q=function(O,Y,ne){return ne.startsWith(l)&&ne.endsWith(l)&&ne.replaceAll(l,"").length>0?".".concat(c):O},$=T.slice();$.push(function(O){O.type===Po&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(Xm,l).replace(p,Q))}),S.prefix&&$.push(wm),$.push(jm);var D=function(O,Y,ne,V){Y===void 0&&(Y=""),ne===void 0&&(ne=""),V===void 0&&(V="&"),c=V,l=Y,p=new RegExp("\\".concat(l,"\\b"),"g");var X=O.replace(Zm,""),xe=vm(ne||Y?"".concat(ne," ").concat(Y," { ").concat(X," }"):X);S.namespace&&(xe=hu(xe,S.namespace));var ie=[];return Eo(xe,Nm($.concat(bm(function(oe){return ie.push(oe)})))),ie};return D.hash=T.length?T.reduce(function(O,Y){return Y.name||nn(15),os(O,Y.name)},ou).toString():"",D}var ef=new uu,tl=Jm(),xu=ur.createContext({shouldForwardProp:void 0,styleSheet:ef,stylis:tl});xu.Consumer;ur.createContext(void 0);function Bp(){return he.useContext(xu)}var rf=(function(){function o(c,l){var p=this;this.inject=function(g,j){j===void 0&&(j=tl);var S=p.name+j.hash;g.hasNameForId(p.id,S)||g.insertRules(p.id,S,j(p.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,hl(this,function(){throw nn(12,String(p.name))})}return o.prototype.getName=function(c){return c===void 0&&(c=tl),this.name+c.hash},o})(),tf=function(o){return o>="A"&&o<="Z"};function Mp(o){for(var c="",l=0;l<o.length;l++){var p=o[l];if(l===1&&p==="-"&&o[0]==="-")return o;tf(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var mu=function(o){return o==null||o===!1||o===""},fu=function(o){var c,l,p=[];for(var g in o){var j=o[g];o.hasOwnProperty(g)&&!mu(j)&&(Array.isArray(j)&&j.isCss||us(j)?p.push("".concat(Mp(g),":"),j,";"):sn(j)?p.push.apply(p,Io(Io(["".concat(g," {")],fu(j),!1),["}"],!1)):p.push("".concat(Mp(g),": ").concat((c=g,(l=j)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||c in km||c.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return p};function _t(o,c,l,p){if(mu(o))return[];if(ul(o))return[".".concat(o.styledComponentId)];if(us(o)){if(!us(j=o)||j.prototype&&j.prototype.isReactComponent||!c)return[o];var g=o(c);return _t(g,c,l,p)}var j;return o instanceof rf?l?(o.inject(l,p),[o.getName(p)]):[o]:sn(o)?fu(o):Array.isArray(o)?Array.prototype.concat.apply(Do,o.map(function(S){return _t(S,c,l,p)})):[o.toString()]}function sf(o){for(var c=0;c<o.length;c+=1){var l=o[c];if(us(l)&&!ul(l))return!1}return!0}var nf=au(Fo),of=(function(){function o(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&sf(c),this.componentId=l,this.baseHash=os(nf,l),this.baseStyle=p,uu.registerId(l)}return o.prototype.generateAndInjectStyles=function(c,l,p){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p):"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))g=Et(g,this.staticRulesId);else{var j=Lp(_t(this.rules,c,l,p)),S=el(os(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,S)){var L=p(j,".".concat(S),void 0,this.componentId);l.insertRules(this.componentId,S,L)}g=Et(g,S),this.staticRulesId=S}else{for(var T=os(this.baseHash,p.hash),Q="",$=0;$<this.rules.length;$++){var D=this.rules[$];if(typeof D=="string")Q+=D;else if(D){var O=Lp(_t(D,c,l,p));T=os(T,O+$),Q+=O}}if(Q){var Y=el(T>>>0);l.hasNameForId(this.componentId,Y)||l.insertRules(this.componentId,Y,p(Q,".".concat(Y),void 0,this.componentId)),g=Et(g,Y)}}return g},o})(),gu=ur.createContext(void 0);gu.Consumer;var Hi={};function af(o,c,l){var p=ul(o),g=o,j=!Ui(o),S=c.attrs,L=S===void 0?Do:S,T=c.componentId,Q=T===void 0?(function(ee,pe){var K=typeof ee!="string"?"sc":Cp(ee);Hi[K]=(Hi[K]||0)+1;var U="".concat(K,"-").concat(Em(Fo+K+Hi[K]));return pe?"".concat(pe,"-").concat(U):U})(c.displayName,c.parentComponentId):T,$=c.displayName,D=$===void 0?(function(ee){return Ui(ee)?"styled.".concat(ee):"Styled(".concat(Lm(ee),")")})(o):$,O=c.displayName&&c.componentId?"".concat(Cp(c.displayName),"-").concat(c.componentId):c.componentId||Q,Y=p&&g.attrs?g.attrs.concat(L).filter(Boolean):L,ne=c.shouldForwardProp;if(p&&g.shouldForwardProp){var V=g.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;ne=function(ee,pe){return V(ee,pe)&&X(ee,pe)}}else ne=V}var xe=new of(l,O,p?g.componentStyle:void 0);function ie(ee,pe){return(function(K,U,Be){var or=K.attrs,br=K.componentStyle,Dr=K.defaultProps,hr=K.foldedComponentIds,Ke=K.styledComponentId,ar=K.target,xr=ur.useContext(gu),$e=Bp(),ve=K.shouldForwardProp||$e.shouldForwardProp,z=Cm(U,xr,Dr)||ps,F=(function(se,re,ue){for(var ae,ce=nr(nr({},re),{className:void 0,theme:ue}),We=0;We<se.length;We+=1){var Or=us(ae=se[We])?ae(ce):ae;for(var wr in Or)ce[wr]=wr==="className"?Et(ce[wr],Or[wr]):wr==="style"?nr(nr({},ce[wr]),Or[wr]):Or[wr]}return re.className&&(ce.className=Et(ce.className,re.className)),ce})(or,U,z),I=F.as||ar,m={};for(var N in F)F[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&F.theme===z||(N==="forwardedAs"?m.as=F.forwardedAs:ve&&!ve(N,I)||(m[N]=F[N]));var q=(function(se,re){var ue=Bp(),ae=se.generateAndInjectStyles(re,ue.styleSheet,ue.stylis);return ae})(br,F),Z=Et(hr,Ke);return q&&(Z+=" "+q),F.className&&(Z+=" "+F.className),m[Ui(I)&&!nu.has(I)?"class":"className"]=Z,Be&&(m.ref=Be),he.createElement(I,m)})(oe,ee,pe)}ie.displayName=D;var oe=ur.forwardRef(ie);return oe.attrs=Y,oe.componentStyle=xe,oe.displayName=D,oe.shouldForwardProp=ne,oe.foldedComponentIds=p?Et(g.foldedComponentIds,g.styledComponentId):"",oe.styledComponentId=O,oe.target=p?g.target:o,Object.defineProperty(oe,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=p?(function(pe){for(var K=[],U=1;U<arguments.length;U++)K[U-1]=arguments[U];for(var Be=0,or=K;Be<or.length;Be++)rl(pe,or[Be],!0);return pe})({},g.defaultProps,ee):ee}}),hl(oe,function(){return".".concat(oe.styledComponentId)}),j&&du(oe,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),oe}function Rp(o,c){for(var l=[o[0]],p=0,g=c.length;p<g;p+=1)l.push(c[p],o[p+1]);return l}var Fp=function(o){return Object.assign(o,{isCss:!0})};function lf(o){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(us(o)||sn(o))return Fp(_t(Rp(Do,Io([o],c,!0))));var p=o;return c.length===0&&p.length===1&&typeof p[0]=="string"?_t(p):Fp(_t(Rp(p,c)))}function sl(o,c,l){if(l===void 0&&(l=ps),!c)throw nn(1,c);var p=function(g){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return o(c,l,lf.apply(void 0,Io([g],j,!1)))};return p.attrs=function(g){return sl(o,c,nr(nr({},l),{attrs:Array.prototype.concat(l.attrs,g).filter(Boolean)}))},p.withConfig=function(g){return sl(o,c,nr(nr({},l),g))},p}var vu=function(o){return sl(af,o)},ge=vu;nu.forEach(function(o){ge[o]=vu(o)});const $i={Wrapper:ge.div`height:100vh;overflow:hidden;display:flex;flex-direction:column;`,Header:ge.header`height:60px;flex-shrink:0;`,Main:ge.main`
flex:1;overflow-y:auto;position:relative;
.workspaceLayout{min-height:100%;max-width:1440px;margin:auto;display:grid;grid-template-columns:260px minmax(0,1fr);gap:28px;padding:18px 22px 42px}.sideMenu{position:sticky;top:18px;align-self:start;height:calc(100vh - 60px - 36px);max-height:calc(100vh - 60px - 36px);box-sizing:border-box;overflow-y:auto;padding:16px 10px;border:1px solid var(--color-border);border-radius:16px;background:var(--color-surface)}.menuLabel{margin:0 10px 12px;color:var(--color-text-muted);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.sideMenu nav{display:grid;gap:5px}.sideMenu button{width:100%;padding:10px 12px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--color-text-secondary);text-align:left;cursor:pointer;font:inherit}.sideMenu button:hover,.sideMenu button.active{background:var(--color-primary);border-color:var(--color-primary);color:#111111}.contentWrapper{min-width:0;padding:4px 0}.contentWrapper .topicBody{max-height:12000px}.scrollTopButton{position:fixed;right:24px;bottom:24px;z-index:10;width:42px;height:42px;display:grid;place-items:center;border:1px solid var(--color-border);border-radius:50%;background:var(--color-surface);color:var(--color-text-primary);cursor:pointer;box-shadow:0 8px 20px var(--color-shadow)}.scrollTopButton:hover{background:var(--color-primary);color:#111111}.footerWrapper{flex-shrink:0}@media(max-width:820px){.workspaceLayout{grid-template-columns:1fr;padding:14px}.sideMenu{position:static;height:auto;max-height:none}.sideMenu nav{grid-template-columns:repeat(2,minmax(0,1fr))}.scrollTopButton{right:16px;bottom:16px}}
`},Dp={Wrapper:ge.header`
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
    `,Main:ge.div`
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
    `},cf="/css-core-notes/logo.png",df=()=>{const[o,c]=he.useState(!1),[l,p]=he.useState("dark");he.useEffect(()=>{const L=localStorage.getItem("app-theme")||"dark";p(L),L==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),he.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const g=he.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{p(g)};return r.jsx(Dp.Wrapper,{children:r.jsx(Dp.Main,{children:r.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!o&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:cf,alt:"css-core-notes",onLoad:()=>c(!0),style:{opacity:o?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"css-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance css revision"})]})]}),r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${g} theme`,title:`Switch to ${g}`,children:[r.jsx("span",{className:"icon",children:l==="light"?r.jsx(il,{}):r.jsx(ll,{})}),r.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function pf(o){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(o)}function uf(o){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(o)}const hf={Wrapper:ge.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 0 4px;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .copyright {
            line-height: 1.6;
        }

        .copyright a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .copyright a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;
        }

        .links a {
            display: inline-grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-secondary);
            transition:
                color 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;
        }

        .links a:hover {
            color: var(--color-primary);
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 14%, transparent);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;

            .links {
                justify-content: flex-start;
            }
        }
    `},xf=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:Gx},{label:"GitHub",href:"https://github.com/a2rp",icon:Vx},{label:"CodePen",href:"https://codepen.io/ash1198",icon:pf},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:Yx},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:Ox},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:uf},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:Kx},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Qx},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Mx},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:nm}],mf=()=>r.jsxs(hf.Wrapper,{children:[r.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," All rights reserved. By"," ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),r.jsx("nav",{className:"links","aria-label":"Social and support links",children:xf.map(({label:o,href:c,icon:l})=>r.jsx("a",{href:c,target:c.startsWith("mailto:")?void 0:"_blank",rel:c.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":o,title:o,children:ur.createElement(l,{"aria-hidden":!0})},o))})]}),Op={Wrapper:ge.section`
        width: 100%;
        /* padding: 60px 20px; */
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ge.div`
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
    `},yu=()=>{const o="2026-10-02T13:42:39.992Z",c=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return r.jsx(Op.Wrapper,{children:r.jsxs(Op.Content,{children:[r.jsx("h2",{className:"heading",children:"About CSS"}),r.jsx("p",{children:"CSS stands for Cascading Style Sheets. It controls how HTML looks and feels on screen. CSS is responsible for layout, spacing, colors, typography, responsive behavior, and visual effects. HTML gives structure and meaning, while CSS gives presentation."}),r.jsx("p",{children:"The core power of CSS comes from the cascade. Multiple rules can apply to the same element, and the browser decides the final result using specificity, source order, and inheritance. Once you understand the cascade, layout systems like Flexbox and Grid become much easier and more predictable."}),r.jsx("p",{children:"The css-core-notes project is designed as a focused revision system. It keeps everything in one scrollable page with expandable topics, so you can revise quickly before interviews and also build a strong mental model of modern CSS."}),r.jsxs("div",{className:"meta",children:[r.jsx("span",{className:"metaLabel",children:"Last updated:"}),r.jsx("span",{className:"metaValue",children:c})]})]})})},ff={Wrapper:ge.section`
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
    `},gf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(ff.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Gp,{})}),r.jsx("span",{className:"title",children:"CSS Fundamentals"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(we,{})}),"Core basics in one view"]}),r.jsx("p",{className:"p",children:"CSS controls how HTML looks. These fundamentals explain how rules are written and how the browser decides which styles win."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"What is CSS"}),r.jsx("p",{className:"p",children:"CSS stands for Cascading Style Sheets. It is used to style HTML: layout, spacing, colors, fonts, and responsive behavior. HTML is structure. CSS is presentation."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How CSS works with HTML"}),r.jsx("p",{className:"p",children:"CSS targets HTML elements using selectors and applies styling rules to them. The browser reads HTML, builds a DOM tree, then reads CSS and applies it to matching nodes."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"CSS syntax"}),r.jsx("p",{className:"p",children:"A CSS rule has a selector and a declaration block. The declaration block contains property-value pairs."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Basic rule"]}),r.jsx("pre",{className:"code",children:`selector {
  property: value;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Selectors overview"}),r.jsx("p",{className:"p",children:"Selectors decide which elements get styled. Common ones are element selectors, class selectors, id selectors, and combinations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Element: ",r.jsx("span",{className:"mono",children:"p"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Class: ",r.jsx("span",{className:"mono",children:".card"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Id: ",r.jsx("span",{className:"mono",children:"#header"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Descendant: ",r.jsx("span",{className:"mono",children:".card p"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Property and value"}),r.jsxs("p",{className:"p",children:["A property is what you change. A value is what you set it to. Example: ",r.jsx("span",{className:"mono",children:"color"})," is a property, ",r.jsx("span",{className:"mono",children:"red"})," is a value."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(is,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Property"}),r.jsx("div",{className:"miniSub",children:"color"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx($x,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Value"}),r.jsx("div",{className:"miniSub",children:"#4ea1ff"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Comments"}),r.jsx("p",{className:"p",children:"Comments are notes for humans. They do not affect styling. CSS comments use this format."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Comment format"]}),r.jsx("pre",{className:"code",children:"/* this is a comment */"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"How browser applies CSS"}),r.jsx("p",{className:"p",children:"The browser matches selectors against the DOM, then calculates the final styles for each element using the cascade rules. After that it runs layout and paint to draw the UI."}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowItem",children:"HTML → DOM"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"CSS → rules"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Cascade"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Layout"}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Paint"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Cascade concept"}),r.jsx("p",{className:"p",children:"Cascade means multiple rules can apply to the same element. The browser chooses the final value based on importance, specificity, and source order."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Simple rule"]}),r.jsx("div",{className:"calloutText",children:"If two rules target the same property, the more specific one wins. If specificity is same, the later one wins."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Specificity basics"}),r.jsx("p",{className:"p",children:"Specificity is the priority score of a selector. In simple terms: id selectors are stronger than class selectors, and class selectors are stronger than element selectors."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"#id"})," is strongest"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:".class"})," is medium"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"div"})," is weakest"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inheritance basics"}),r.jsx("p",{className:"p",children:"Some properties flow from parent to child automatically like text color and font. Many layout properties do not inherit like margin, padding, width, and border."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Qi,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:'If a text style feels "automatic", it is probably inherited. If a box style does not change children, it usually does not inherit.'})]})]})]})]})},vf={Wrapper:ge.section`
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
    `},yf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(vf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(jp,{})}),r.jsx("span",{className:"title",children:"Ways to Apply CSS"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(we,{})}),"Linking CSS to HTML"]}),r.jsx("p",{className:"p",children:"CSS can be applied in multiple ways. In real projects, external stylesheets are the standard. Inline and internal styles are mainly for quick demos or special cases."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Inline CSS"}),r.jsxs("p",{className:"p",children:["Styles written directly on an element using the"," ",r.jsx("span",{className:"mono",children:"style"})," attribute. It is quick but hard to maintain and reuse."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<p style="color: #4ea1ff; margin: 0;">
  Hello CSS
</p>`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(mt,{})}),"When to use"]}),r.jsx("div",{className:"calloutText",children:"Use inline styles for tiny one-off overrides, or dynamic styling generated by JS. Avoid for normal layout and theme styling."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Internal CSS"}),r.jsxs("p",{className:"p",children:["CSS written inside a ",r.jsx("span",{className:"mono",children:"style"})," ","tag in the HTML ",r.jsx("span",{className:"mono",children:"head"}),". Works for single pages or prototypes."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Wx,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<head>
  <style>
    .card { padding: 16px; border: 1px solid #2d333b; }
  </style>
</head>`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"External CSS"}),r.jsxs("p",{className:"p",children:["CSS in a separate ",r.jsx("span",{className:"mono",children:".css"})," ","file linked using ",r.jsx("span",{className:"mono",children:"link"}),". This is the most maintainable and reusable approach."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(jp,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`<head>
  <link rel="stylesheet" href="styles.css" />
</head>`})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Best for real projects"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Cached by browser"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Easy to manage at scale"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@import rule"}),r.jsxs("p",{className:"p",children:["Used inside a CSS file to import another stylesheet. Works, but can be slower and harder to manage than a"," ",r.jsx("span",{className:"mono",children:"link"})," tag in many cases."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`/* in main.css */
@import "./reset.css";
@import "./components/button.css";`})]}),r.jsx("p",{className:"p muted",children:"Note: Modern tools (Vite, bundlers) handle imports well, but in plain CSS on web pages, multiple @import can affect loading performance."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Order of precedence"}),r.jsx("p",{className:"p",children:"If multiple styles target the same element and property, the browser decides the final value using the cascade. A simple quick order is:"}),r.jsxs("div",{className:"rank",children:[r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"1"}),"Inline styles (strongest)"]}),r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"2"}),"Internal and External (depends on order and specificity)"]}),r.jsxs("div",{className:"rankItem",children:[r.jsx("span",{className:"rankNo",children:"3"}),"Browser default styles (weakest)"]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Remember this"]}),r.jsx("div",{className:"calloutText",children:"When specificity is equal, the rule that appears later wins. Inline styles usually beat normal stylesheets."})]})]})]})]})},jf={Wrapper:ge.section`
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
    `},Nf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(jf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(is,{})}),r.jsx("span",{className:"title",children:"Selectors Deep Dive"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Hx,{})}),"Match elements precisely"]}),r.jsx("p",{className:"p",children:"Selectors tell CSS which elements to style. Learn these patterns and your CSS becomes faster to write and easier to debug."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Basic Selectors"}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Universal selector"," ",r.jsx("span",{className:"mono",children:"*"})]}),r.jsx("p",{className:"cardSub",children:"Matches every element on the page."}),r.jsx("pre",{className:"code",children:"* { box-sizing: border-box; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Type selector"}),r.jsx("p",{className:"cardSub",children:"Matches elements by tag name."}),r.jsx("pre",{className:"code",children:"p { line-height: 1.7; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Class selector"," ",r.jsx("span",{className:"mono",children:".class"})]}),r.jsx("p",{className:"cardSub",children:"Matches elements that have a class."}),r.jsx("pre",{className:"code",children:".card { padding: 16px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["ID selector ",r.jsx("span",{className:"mono",children:"#id"})]}),r.jsx("p",{className:"cardSub",children:"Matches the element with a specific id."}),r.jsx("pre",{className:"code",children:"#header { position: sticky; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Grouping selector"}),r.jsx("p",{className:"cardSub",children:"Apply the same rules to multiple selectors."}),r.jsx("pre",{className:"code",children:"h1, h2, h3 { font-weight: 800; }"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Combinators"}),r.jsx("p",{className:"p",children:"Combinators describe relationships between elements. They help you target elements based on where they are in the HTML structure."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Descendant"}),r.jsx("p",{className:"cardSub",children:"Matches any nested element inside another."}),r.jsx("pre",{className:"code",children:".card p { margin-bottom: 12px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Child ",r.jsx("span",{className:"mono",children:">"})]}),r.jsx("p",{className:"cardSub",children:"Matches direct children only."}),r.jsx("pre",{className:"code",children:".list > li { padding: 8px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["Adjacent sibling ",r.jsx("span",{className:"mono",children:"+"})]}),r.jsx("p",{className:"cardSub",children:"Matches the very next sibling."}),r.jsx("pre",{className:"code",children:"h2 + p { margin-top: 6px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTitle",children:["General sibling ",r.jsx("span",{className:"mono",children:"~"})]}),r.jsx("p",{className:"cardSub",children:"Matches any later sibling."}),r.jsx("pre",{className:"code",children:"h2 ~ p { color: #8b949e; }"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Attribute Selectors"}),r.jsx("p",{className:"p",children:"Attribute selectors match elements based on attributes like href, type, data-*, aria-* and more."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr]"})}),r.jsx("p",{className:"cardSub",children:"Has the attribute."}),r.jsx("pre",{className:"code",children:"[disabled] { opacity: 0.6; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr=value]"})}),r.jsx("p",{className:"cardSub",children:"Exact value match."}),r.jsx("pre",{className:"code",children:'input[type="email"] { border-color: #4ea1ff; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr^=]"})}),r.jsx("p",{className:"cardSub",children:"Starts with."}),r.jsx("pre",{className:"code",children:'a[href^="https"] { font-weight: 800; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr$=]"})}),r.jsx("p",{className:"cardSub",children:"Ends with."}),r.jsx("pre",{className:"code",children:'a[href$=".pdf"] { text-decoration: underline; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"[attr*=]"})}),r.jsx("p",{className:"cardSub",children:"Contains substring."}),r.jsx("pre",{className:"code",children:'img[src*="logo"] { filter: grayscale(1); }'})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Pseudo Classes"}),r.jsx("p",{className:"p",children:"Pseudo classes select elements in a particular state like hover, focus, visited, or based on position among siblings."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":hover"})}),r.jsx("p",{className:"cardSub",children:"Mouse is over element."}),r.jsx("pre",{className:"code",children:".btn:hover { transform: translateY(-1px); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":active"})}),r.jsx("p",{className:"cardSub",children:"Being clicked/pressed."}),r.jsx("pre",{className:"code",children:".btn:active { transform: translateY(0); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":focus"})}),r.jsx("p",{className:"cardSub",children:"Keyboard focus."}),r.jsx("pre",{className:"code",children:"input:focus { outline: 2px solid var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":visited"})}),r.jsx("p",{className:"cardSub",children:"Visited link state."}),r.jsx("pre",{className:"code",children:"a:visited { opacity: 0.85; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":link"})}),r.jsx("p",{className:"cardSub",children:"Unvisited link state."}),r.jsx("pre",{className:"code",children:"a:link { color: var(--color-link); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":first-child"})}),r.jsx("p",{className:"cardSub",children:"First child of parent."}),r.jsx("pre",{className:"code",children:".list li:first-child { font-weight: 800; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":last-child"})}),r.jsx("p",{className:"cardSub",children:"Last child of parent."}),r.jsx("pre",{className:"code",children:".list li:last-child { opacity: 0.8; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":nth-child()"})}),r.jsx("p",{className:"cardSub",children:"Select by index."}),r.jsx("pre",{className:"code",children:".list li:nth-child(2) { color: var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":nth-of-type()"})}),r.jsx("p",{className:"cardSub",children:"Index among same tag type."}),r.jsx("pre",{className:"code",children:"p:nth-of-type(2) { margin-top: 10px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":not()"})}),r.jsx("p",{className:"cardSub",children:"Exclude matches."}),r.jsx("pre",{className:"code",children:".btn:not(.primary) { opacity: 0.9; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":is()"})}),r.jsx("p",{className:"cardSub",children:"Group selectors (keeps specificity)."}),r.jsx("pre",{className:"code",children:":is(h1, h2, h3) { letter-spacing: 0.2px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":where()"})}),r.jsx("p",{className:"cardSub",children:"Group selectors (zero specificity)."}),r.jsx("pre",{className:"code",children:":where(h1, h2, h3) { margin: 0; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:":has()"})}),r.jsx("p",{className:"cardSub",children:"Select parent based on children (modern CSS)."}),r.jsx("pre",{className:"code",children:".card:has(img) { padding-top: 10px; }"})]})]}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTitle",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(ft,{})}),"Note"]}),r.jsxs("div",{className:"noteText",children:[r.jsx("span",{className:"mono",children:":has()"})," is newer. It works in modern browsers, but keep fallback in mind for older environments."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Pseudo Elements"}),r.jsx("p",{className:"p",children:"Pseudo elements style a specific part of an element or create extra styling content."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::before"})}),r.jsx("p",{className:"cardSub",children:"Insert content before."}),r.jsx("pre",{className:"code",children:'.tag::before { content: "#"; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::after"})}),r.jsx("p",{className:"cardSub",children:"Insert content after."}),r.jsx("pre",{className:"code",children:'.tag::after { content: ""; }'})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::first-letter"})}),r.jsx("p",{className:"cardSub",children:"Style first letter."}),r.jsx("pre",{className:"code",children:"p::first-letter { font-size: 22px; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::first-line"})}),r.jsx("p",{className:"cardSub",children:"Style first line."}),r.jsx("pre",{className:"code",children:"p::first-line { font-weight: 800; }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::selection"})}),r.jsx("p",{className:"cardSub",children:"Selected text."}),r.jsx("pre",{className:"code",children:"::selection { background: var(--color-primary); }"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"::placeholder"})}),r.jsx("p",{className:"cardSub",children:"Placeholder styling."}),r.jsx("pre",{className:"code",children:"input::placeholder { color: var(--color-text-muted); }"})]})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick priority tip"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer class selectors for reusable styling"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Avoid heavy nesting and overly specific selectors"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use pseudo classes for interaction and structure"]})]})]})]})]})},bf={Wrapper:ge.section`
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
            background: rgba(158, 158, 158, 0.06);
            border-radius: 16px;
            padding: 14px;
        }

        .dBorder {
            border: 1px solid var(--color-border);
            background: rgba(158, 158, 158, 0.08);
            border-radius: 14px;
            padding: 14px;
            margin-top: 10px;
        }

        .dPadding {
            border: 1px solid var(--color-border);
            background: rgba(158, 158, 158, 0.1);
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
            border-color: rgba(163, 163, 163, 0.45);
            background: rgba(163, 163, 163, 0.08);
        }

        .callout.ok {
            border-color: rgba(162, 162, 162, 0.45);
            background: rgba(162, 162, 162, 0.08);
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
    `},wf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(bf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(al,{})}),r.jsx("span",{className:"title",children:"The Box Model"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(we,{})}),"Everything is a box"]}),r.jsx("p",{className:"p",children:"In CSS, every element is a rectangle made of layers: content, padding, border, and margin. Understanding this makes layout bugs much easier to fix."}),r.jsxs("div",{className:"diagram",children:[r.jsxs("div",{className:"dMargin",children:[r.jsx("div",{className:"dLabel",children:"Margin"}),r.jsxs("div",{className:"dBorder",children:[r.jsx("div",{className:"dLabel",children:"Border"}),r.jsxs("div",{className:"dPadding",children:[r.jsx("div",{className:"dLabel",children:"Padding"}),r.jsx("div",{className:"dContent",children:r.jsx("div",{className:"dLabel",children:"Content"})})]})]})]}),r.jsx("div",{className:"diagramNote",children:"Outer to inner: margin → border → padding → content"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Content box"}),r.jsx("p",{className:"p",children:"The content box is the actual space where text, images, and child elements sit. Width and height usually apply to the content box by default."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Padding"}),r.jsx("p",{className:"p",children:"Padding is the inner space between the content and the border. It increases the clickable and readable area of an element."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Yp,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"padding"}),r.jsx("div",{className:"miniSub",children:"adds space inside"})]})]})}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:"button { padding: 10px 12px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Border"}),r.jsx("p",{className:"p",children:"Border wraps around the padding and content. Borders can take space and affect layout because they add to the element size (unless using border-box sizing)."}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".card { border: 1px solid #2d333b; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Margin"}),r.jsx("p",{className:"p",children:"Margin is the outer space around an element, used to create gaps between elements. Margin is always outside the border."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Zx,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"margin"}),r.jsx("div",{className:"miniSub",children:"creates space outside"})]})]})}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".section { margin-bottom: 16px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"box-sizing"}),r.jsx("p",{className:"p",children:"box-sizing controls how width and height are calculated. With content-box (default), width applies only to the content. With border-box, width includes padding and border too."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(sm,{})}),"Best practice"]}),r.jsx("div",{className:"calloutText",children:"Most projects use border-box to make sizing easier and predictable."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:"* { box-sizing: border-box; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Margin collapse"}),r.jsx("p",{className:"p",children:"Vertical margins between block elements can collapse into a single margin. That means margins do not always add up the way you expect."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Happens mostly with vertical margins (top and bottom)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Largest margin usually wins"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Does not happen in flex and grid layouts"]})]}),r.jsxs("div",{className:"callout warn",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Hp,{})}),"Debug tip"]}),r.jsx("div",{className:"calloutText",children:'If spacing looks "wrong", check margin collapse. Adding padding or a border to the parent can stop it.'})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"overflow"}),r.jsx("p",{className:"p",children:"overflow controls what happens when content is larger than the box. It can show, clip, scroll, or hide extra content."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: visible (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: hidden (clips)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: auto (scroll if needed)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"overflow: scroll (always scroll)"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:".panel { overflow: auto; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Outline"}),r.jsx("p",{className:"p",children:"outline is similar to border but it does not take space in layout. It is commonly used for focus indicators."}),r.jsxs("div",{className:"callout ok",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(To,{})}),"Accessibility"]}),r.jsx("div",{className:"calloutText",children:"Keep visible focus styles. outline is a simple and solid way to show keyboard focus."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsx("div",{className:"codeTop",children:"Example"}),r.jsx("pre",{className:"code",children:`button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`})]})]})]})]})},kf={Wrapper:ge.section`
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
    `},Sf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(kf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Qp,{})}),r.jsx("span",{className:"title",children:"Units and Values"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(tn,{})}),"Sizing without confusion"]}),r.jsx("p",{className:"p",children:"CSS units decide how big something is. Absolute units are fixed. Relative units adapt to screen, font size, or container. Functions help you calculate responsive values cleanly."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Absolute Units"}),r.jsxs("p",{className:"p",children:["Absolute units are fixed lengths. They do not depend on screen size or parent font size. In web UI work,",r.jsx("span",{className:"mono",children:"px"})," is the most common."]}),r.jsxs("div",{className:"chips",children:[r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"px"}),r.jsx("span",{className:"chipText",children:"pixels (most used)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"pt"}),r.jsx("span",{className:"chipText",children:"points (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"cm"}),r.jsx("span",{className:"chipText",children:"centimeters (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"mm"}),r.jsx("span",{className:"chipText",children:"millimeters (print)"})]}),r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"chipKey",children:"in"}),r.jsx("span",{className:"chipText",children:"inches (print)"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(mt,{})}),"Practical tip"]}),r.jsx("div",{className:"calloutText",children:"For websites and apps, mostly use px, rem, and %. cm, mm, pt, in are mainly for printing."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Relative Units"}),r.jsx("p",{className:"p",children:"Relative units change based on something else like font size or viewport. They help build responsive layouts."}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Font based"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"em"})," - relative to current element font size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"rem"})," - relative to root (html) font size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"ch"}),' - width of "0" character (monospace like sizing)']}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"ex"})," - x-height (rare, not consistent)"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Viewport based"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vh"})," - 1% of viewport height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vw"})," - 1% of viewport width"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vmin"})," - 1% of smaller side"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"vmax"})," - 1% of larger side"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"Container based"}),r.jsx("ul",{className:"list",children:r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"%"})," - relative to parent or layout context"]})}),r.jsx("div",{className:"note",children:"% depends on property: width uses parent width, padding % also uses parent width, etc."})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Common choices"]}),r.jsx("pre",{className:"code",children:`/* Typography: rem is predictable */
html { font-size: 16px; }
h1 { font-size: 2rem; } /* 32px */

/* Layout: % + max-width is common */
.container { width: 90%; max-width: 1100px; }

/* Full screen sections */
.hero { min-height: 100vh; }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Functions"}),r.jsx("p",{className:"p",children:"CSS functions help you calculate values and create responsive sizing without too many media queries."}),r.jsxs("div",{className:"grid two",children:[r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"calc()"})}),r.jsx("p",{className:"cardSub",children:"Mix units and do math. Great for layouts."}),r.jsx("pre",{className:"miniCode",children:"width: calc(100% - 32px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"clamp()"})}),r.jsx("p",{className:"cardSub",children:"Set a min, preferred, and max value."}),r.jsx("pre",{className:"miniCode",children:"font-size: clamp(16px, 2vw, 22px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"min()"})}),r.jsx("p",{className:"cardSub",children:"Choose the smaller value from options."}),r.jsx("pre",{className:"miniCode",children:"width: min(90%, 1100px);"})]}),r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:r.jsx("span",{className:"mono",children:"max()"})}),r.jsx("p",{className:"cardSub",children:"Choose the larger value from options."}),r.jsx("pre",{className:"miniCode",children:"min-height: max(60vh, 520px);"})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(mt,{})}),"Beginner friendly rule"]}),r.jsx("div",{className:"calloutText",children:"Use rem for font sizes, % for fluid widths, and clamp() when you want responsive sizing with a safe minimum and maximum."})]})]})]})]})},Cf={Wrapper:ge.section`
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
    `},Tf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Cf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Gi,{})}),r.jsx("span",{className:"title",children:"Colors and Backgrounds"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(we,{})}),"The visuals toolkit"]}),r.jsx("p",{className:"p",children:"Colors set the mood. Backgrounds control surfaces. This section covers common color formats, opacity, and background properties including gradients."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Color formats"}),r.jsx("p",{className:"p",children:"CSS supports multiple color notations. Pick one style and stay consistent. Most projects use hex or rgb/rgba."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Named colors: ",r.jsx("span",{className:"mono",children:"red"}),", ",r.jsx("span",{className:"mono",children:"rebeccapurple"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Hex: ",r.jsx("span",{className:"mono",children:"#4ea1ff"}),","," ",r.jsx("span",{className:"mono",children:"#0f1117"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"RGB: ",r.jsx("span",{className:"mono",children:"rgb(78, 161, 255)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"RGBA:"," ",r.jsx("span",{className:"mono",children:"rgba(78, 161, 255, 0.6)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"HSL:"," ",r.jsx("span",{className:"mono",children:"hsl(210, 100%, 65%)"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"HSLA:"," ",r.jsx("span",{className:"mono",children:"hsla(210, 100%, 65%, 0.6)"})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Common examples"]}),r.jsx("pre",{className:"code",children:`/* named */
color: red;

/* hex */
color: #4ea1ff;

/* rgb / rgba */
color: rgb(78, 161, 255);
color: rgba(78, 161, 255, 0.6);

/* hsl / hsla */
color: hsl(210, 100%, 65%);
color: hsla(210, 100%, 65%, 0.6);`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"opacity"}),r.jsx("p",{className:"p",children:"opacity affects the whole element including its content (text, icons, children). If you only want the background to be transparent, use rgba/hsla for the background color instead."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(mt,{})}),"Quick rule"]}),r.jsx("div",{className:"calloutText",children:"opacity fades everything inside. rgba/hsla fades only that color."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"opacity vs rgba"]}),r.jsx("pre",{className:"code",children:`/* fades whole element (including text) */
.card {
  opacity: 0.6;
}

/* only background becomes transparent */
.card {
  background: rgba(0, 0, 0, 0.6);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"background basics"}),r.jsx("p",{className:"p",children:"Background properties control the element surface. Backgrounds can be a solid color, an image, or a gradient."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Gi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Color"}),r.jsx("div",{className:"miniSub",children:"background-color"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Yi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Image"}),r.jsx("div",{className:"miniSub",children:"background-image"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(we,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Gradient"}),r.jsx("div",{className:"miniSub",children:"linear radial conic"})]})]})]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-color"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-image"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-size"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-position"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-repeat"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background-attachment"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"background shorthand"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Typical background image setup"]}),r.jsx("pre",{className:"code",children:`.hero {
  background-image: url("/images/banner.jpg");
  background-size: cover;        /* cover | contain | 200px 100px */
  background-position: center;   /* left top | center | 20% 40% */
  background-repeat: no-repeat;  /* repeat | repeat-x | repeat-y */
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Yi,{})}),"background-attachment"]}),r.jsx("div",{className:"calloutText",children:"background-attachment controls whether the background scrolls with the page. Values: scroll (default), fixed, local. fixed can feel like a parallax effect but is not always mobile friendly."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Background shorthand"]}),r.jsx("pre",{className:"code",children:`/* shorthand (order can vary) */
.card {
  background: #0f1117 url("/images/noise.png") no-repeat center / cover;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Gradients"}),r.jsx("p",{className:"p",children:"Gradients are generated images. You set them using background-image. They are great for subtle depth and modern UI surfaces."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"linear-gradient: straight direction"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"radial-gradient: circle or ellipse"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"conic-gradient: around a center point"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Gradient examples"]}),r.jsx("pre",{className:"code",children:`/* linear gradient */
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
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Tip"]}),r.jsx("div",{className:"calloutText",children:"You can layer multiple backgrounds by separating them with commas. The first one is on top."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Multiple background layers"]}),r.jsx("pre",{className:"code",children:`.card {
  background-image:
    radial-gradient(circle at 20% 20%, rgba(78,161,255,0.35), transparent 45%),
    linear-gradient(180deg, #161b22, #0f1117);
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use rgba/hsla for transparent background only"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use cover + center for hero images"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Gradients are background-image"]})]})]})]})]})},zf={Wrapper:ge.section`
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
    `},If=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(zf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(zo,{})}),r.jsx("span",{className:"title",children:"Typography"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Gp,{})}),"Text styling essentials"]}),r.jsx("p",{className:"p",children:"Typography in CSS controls how text looks and reads. These properties cover fonts, sizing, spacing, alignment, wrapping, and custom fonts."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-family"}),r.jsx("p",{className:"p",children:"Sets the font for text. Always include a fallback list, ending with a generic family like sans-serif."}),r.jsx("pre",{className:"code",children:'font-family: "Inter", system-ui, Arial, sans-serif;'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Web safe fonts"}),r.jsx("p",{className:"p",children:"Fonts commonly available on most systems. Examples: Arial, Verdana, Georgia, Times New Roman, Courier New. These reduce dependency on downloads."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-size"}),r.jsx("p",{className:"p",children:"Controls text size. Common units are px, rem, and em. For scalable UI, rem is usually easier to manage."}),r.jsx("pre",{className:"code",children:"font-size: 16px; /* or 1rem */"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-weight"}),r.jsx("p",{className:"p",children:"Controls thickness of characters. Typical values are 400 (normal), 600 (semi-bold), 700 (bold). Not every font supports all weights."}),r.jsx("pre",{className:"code",children:"font-weight: 700;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"font-style"}),r.jsx("p",{className:"p",children:"Controls italic style. Usually normal or italic."}),r.jsx("pre",{className:"code",children:"font-style: italic;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"line-height"}),r.jsx("p",{className:"p",children:"Controls vertical spacing between lines. A unitless value is recommended because it scales with font-size."}),r.jsx("pre",{className:"code",children:"line-height: 1.6;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"letter-spacing"}),r.jsx("p",{className:"p",children:"Adds spacing between letters. Useful for headings, but too much can reduce readability."}),r.jsx("pre",{className:"code",children:"letter-spacing: 0.4px;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"word-spacing"}),r.jsx("p",{className:"p",children:"Adds spacing between words. Use lightly, mainly for special UI styles."}),r.jsx("pre",{className:"code",children:"word-spacing: 2px;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-align"}),r.jsx("p",{className:"p",children:"Aligns inline content inside a block. Common values: left, center, right, justify."}),r.jsx("pre",{className:"code",children:"text-align: center;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-decoration"}),r.jsx("p",{className:"p",children:"Adds decoration like underline. Often used on links. Use underline-offset for nicer look."}),r.jsx("pre",{className:"code",children:`text-decoration: underline;
text-underline-offset: 3px;`})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-transform"}),r.jsx("p",{className:"p",children:"Changes letter casing without editing the actual text. Values: uppercase, lowercase, capitalize."}),r.jsx("pre",{className:"code",children:"text-transform: uppercase;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-shadow"}),r.jsx("p",{className:"p",children:"Adds shadow to text. Use subtle values. Too much looks messy and hurts readability."}),r.jsx("pre",{className:"code",children:"text-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"white-space"}),r.jsx("p",{className:"p",children:"Controls how spaces and line breaks behave. Common: normal (default), nowrap (single line), pre (respects spaces and new lines)."}),r.jsx("pre",{className:"code",children:"white-space: nowrap;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"text-overflow"}),r.jsx("p",{className:"p",children:"Controls what happens when text overflows a single line. Usually used with overflow hidden and white-space nowrap."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(ft,{})}),"Ellipsis combo"]}),r.jsx("pre",{className:"code tight",children:`overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"overflow-wrap"}),r.jsx("p",{className:"p",children:"Prevents long words or URLs from breaking layout. Use anywhere for safer text wrapping."}),r.jsx("pre",{className:"code",children:"overflow-wrap: anywhere;"})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@font-face"}),r.jsx("p",{className:"p",children:"Lets you load and use custom fonts by providing font files. Best practice is to use woff2 and define font-display."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick best practices"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer rem and unitless line-height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Always add fallback fonts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use overflow-wrap for long content"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use font-display: swap for custom fonts"]})]})]})]})]})},Ef={Wrapper:ge.section`
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
    `},Lf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Ef.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ki,{})}),r.jsx("span",{className:"title",children:"Display and Visibility"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(To,{})}),"Layout presence vs visual presence"]}),r.jsx("p",{className:"p",children:'These properties decide whether an element participates in layout, and whether it is visible to the user. Understanding this saves a lot of "why is spacing still there" debugging time.'})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display values"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("span",{className:"mono",children:"display"})," property controls how an element behaves in the layout. It can act like a block, inline text, a mixed type, or be removed from layout completely."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(al,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Layout"}),r.jsx("div",{className:"miniSub",children:"Space rules"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(To,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Visibility"}),r.jsx("div",{className:"miniSub",children:"Seen or hidden"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"block"}),r.jsx("p",{className:"p",children:"A block element starts on a new line and takes the full available width by default. You can set width and height."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"New line (stacked vertically)"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Can set width and height"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"inline"}),r.jsx("p",{className:"p",children:"Inline elements stay within a line of text. They do not start a new line. Width and height generally do not apply (they size to content)."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Same line (flows like text)"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Width and height usually ignored"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"inline-block"}),r.jsx("p",{className:"p",children:"Inline-block behaves like inline (stays in the same line), but you can set width and height like a block. Useful for buttons, badges, small UI parts."}),r.jsxs("div",{className:"rules",children:[r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Stays inline"]}),r.jsxs("div",{className:"rule",children:[r.jsx("span",{className:"dot"}),"Supports width and height"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"none"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"display: none"})," removes the element from the layout completely. It does not take space and is not visible."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Qi,{})}),"Remember"]}),r.jsx("div",{className:"calloutText",children:"If you need to hide something and remove its space, use display: none."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"contents"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"display: contents"})," makes the element's box disappear, but its children stay and behave as if they were direct children of the parent. Useful in some layouts, but be careful with accessibility and styling expectations."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Qi,{})}),"Use carefully"]}),r.jsx("div",{className:"calloutText",children:"The wrapper stops existing as a box. So background, padding, borders on that wrapper will not show."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"visibility"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"visibility"})," controls if an element is visible, but the element still keeps its space in the layout."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"visibility: visible"}),"shows it"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"visibility: hidden"}),"hides it but keeps space"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"opacity vs visibility"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"opacity: 0"})," makes the element fully transparent, but it still takes space. Unlike visibility hidden, opacity elements can still receive clicks unless you also disable pointer events."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Click-safe hiding"]}),r.jsx("pre",{className:"code",children:`.hidden {
  opacity: 0;
  pointer-events: none;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display vs visibility"}),r.jsxs("p",{className:"p",children:["Use ",r.jsx("span",{className:"mono",children:"display: none"})," when you want the element gone from layout. Use"," ",r.jsx("span",{className:"mono",children:"visibility: hidden"})," when you want to hide it but keep its space. Use"," ",r.jsx("span",{className:"mono",children:"opacity"})," for fade effects, but remember it can still be clickable."]}),r.jsxs("div",{className:"compare",children:[r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"display: none"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v bad",children:"No"})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"visibility: hidden"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v ok",children:"Yes"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v bad",children:"No"})]})]}),r.jsxs("div",{className:"compareCard",children:[r.jsx("div",{className:"compareTitle",children:"opacity: 0"}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Visible"}),r.jsx("span",{className:"v bad",children:"No"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Takes space"}),r.jsx("span",{className:"v ok",children:"Yes"})]}),r.jsxs("div",{className:"compareRow",children:[r.jsx("span",{className:"k",children:"Clickable"}),r.jsx("span",{className:"v ok",children:"Yes"})]})]})]}),r.jsxs("div",{className:"footNote",children:["Quick hack: if you use opacity for animation, pair it with ",r.jsx("span",{className:"mono",children:"pointer-events: none"})," ","when hidden."]})]})]})]})},_f={Wrapper:ge.section`
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
    `},Pf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(_f.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(tn,{})}),r.jsx("span",{className:"title",children:"Positioning"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Np,{})}),"Control where elements sit"]}),r.jsx("p",{className:"p",children:'Positioning changes how an element is placed in the page. The key idea is "normal flow" vs "taken out of flow", plus how offsets and layering work.'}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Offsets"}),r.jsx("div",{className:"miniSub",children:"top right bottom left"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(we,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Layering"}),r.jsx("div",{className:"miniSub",children:"z-index and stacking"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"static"}),r.jsx("p",{className:"p",children:"Default position. The element follows normal document flow. Offsets like top or left do not move it."}),r.jsxs("div",{className:"hint",children:[r.jsx("span",{className:"hintIcon",children:r.jsx(yp,{})}),"If you never set position, it is static."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"relative"}),r.jsx("p",{className:"p",children:"The element stays in normal flow, but you can nudge it using top, left, right, bottom. Space is still reserved in the layout."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(go,{})}),"Common use"]}),r.jsx("pre",{className:"code",children:`.badge {
  position: relative;
  top: 6px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"absolute"}),r.jsx("p",{className:"p",children:"The element is taken out of normal flow. It is placed using offsets relative to its nearest positioned ancestor (an ancestor with position not static). If none exists, it uses the initial containing block (often the page)."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Beginner rule"]}),r.jsx("div",{className:"calloutText",children:"For predictable absolute positioning, set the parent as position: relative, then child position: absolute."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(go,{})}),"Parent + child pattern"]}),r.jsx("pre",{className:"code",children:`.card {
  position: relative;
}

.card .closeBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"fixed"}),r.jsx("p",{className:"p",children:"Taken out of flow and positioned relative to the viewport. It stays in the same place even when the page scrolls."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Sticky headers (sometimes)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Floating action buttons"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Back to top button"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(go,{})}),"Fixed footer example"]}),r.jsx("pre",{className:"code",children:`.footerBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"sticky"}),r.jsx("p",{className:"p",children:"Acts like relative until a scroll threshold is reached, then behaves like fixed within its scroll container. It needs at least one offset like top to stick."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Np,{})}),"Common mistake"]}),r.jsx("div",{className:"calloutText",children:"sticky breaks if any parent has overflow: hidden or overflow: auto in unexpected ways. Also, set top for it to work."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(go,{})}),"Sticky sidebar"]}),r.jsx("pre",{className:"code",children:`.side {
  position: sticky;
  top: 20px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"top, left, right, bottom"}),r.jsx("p",{className:"p",children:"These are offset properties. They work when position is relative, absolute, fixed, or sticky. They do nothing on static elements."}),r.jsxs("div",{className:"miniGrid two",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"absolute"}),r.jsx("div",{className:"miniSub",children:"placed inside parent box"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Fi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"fixed"}),r.jsx("div",{className:"miniSub",children:"placed inside viewport"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"z-index"}),r.jsx("p",{className:"p",children:"z-index controls which element appears on top when elements overlap. It only works on positioned elements (not static) and within the same stacking context."}),r.jsxs("div",{className:"hint",children:[r.jsx("span",{className:"hintIcon",children:r.jsx(yp,{})}),"Bigger z-index does not always win if stacking contexts are different."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(we,{})}),"Simple overlap"]}),r.jsx("pre",{className:"code",children:`.modal {
  position: fixed;
  z-index: 50;
}

.toast {
  position: fixed;
  z-index: 60;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"stacking context"}),r.jsx("p",{className:"p",children:"A stacking context is like a mini layering world. An element with its own stacking context controls how its children stack, and those children cannot escape above elements outside that context using z-index alone."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Common creators"]}),r.jsx("div",{className:"calloutText",children:"position with z-index, transform, opacity less than 1, filter, and a few other properties can create a new stacking context."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(we,{})}),"Typical case"]}),r.jsx("pre",{className:"code",children:`.parent {
  position: relative;
  z-index: 1; /* creates stacking context */
}

.child {
  position: absolute;
  z-index: 9999; /* still stuck inside parent context */
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick rules to remember"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"absolute positions inside nearest positioned parent"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"fixed positions inside viewport"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"sticky needs top (or left etc) to work"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"z-index works only within stacking context"]})]})]})]})]})},Bf={Wrapper:ge.section`
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
    `},Mf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Bf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Vp,{})}),r.jsx("span",{className:"title",children:"Flexbox"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(tn,{})}),"One dimensional layout"]}),r.jsx("p",{className:"p",children:"Flexbox is used to align and distribute items in a row or a column. You set flex on a parent (container), then control how children (items) behave."}),r.jsxs("div",{className:"tipRow",children:[r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipKey",children:"Main axis"}),r.jsx("span",{className:"tipVal",children:"direction of flex items"})]}),r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipKey",children:"Cross axis"}),r.jsx("span",{className:"tipVal",children:"perpendicular direction"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display: flex"}),r.jsx("p",{className:"p",children:"Turns an element into a flex container. Its direct children become flex items and can be aligned using Flexbox properties."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Flex container"]}),r.jsx("pre",{className:"code",children:".row { display: flex; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-direction"}),r.jsx("p",{className:"p",children:"Controls the direction of the main axis. Items can flow horizontally or vertically."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row"})," (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row-reverse"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column-reverse"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-wrap"}),r.jsx("p",{className:"p",children:"Controls whether items stay on one line or wrap onto multiple lines when space is not enough."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"nowrap"})," (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"wrap"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"wrap-reverse"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"justify-content"}),r.jsx("p",{className:"p",children:"Aligns items along the main axis. Use it to control left-right spacing in a row or top-bottom spacing in a column."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"flex-start"}),r.jsx("span",{className:"chip",children:"center"}),r.jsx("span",{className:"chip",children:"flex-end"}),r.jsx("span",{className:"chip",children:"space-between"}),r.jsx("span",{className:"chip",children:"space-around"}),r.jsx("span",{className:"chip",children:"space-evenly"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"align-items"}),r.jsx("p",{className:"p",children:"Aligns items along the cross axis (per item). It affects how items line up inside the container."}),r.jsxs("div",{className:"chips",children:[r.jsx("span",{className:"chip",children:"stretch"}),r.jsx("span",{className:"chip",children:"flex-start"}),r.jsx("span",{className:"chip",children:"center"}),r.jsx("span",{className:"chip",children:"flex-end"}),r.jsx("span",{className:"chip",children:"baseline"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"align-content"}),r.jsx("p",{className:"p",children:"Aligns lines of items when wrapping happens. Works only when there are multiple lines (wrap enabled)."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Px,{})}),"Important"]}),r.jsx("div",{className:"calloutText",children:"If there is only one line, align-content does nothing. Use align-items instead."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"gap"}),r.jsx("p",{className:"p",children:"Adds spacing between flex items without using margins. Works nicely with wrap too."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Spacing"]}),r.jsx("pre",{className:"code",children:".row { gap: 12px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-grow"}),r.jsx("p",{className:"p",children:"Controls how much an item can grow when extra space is available. Higher number grows more."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"0"})," means do not grow (default)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," means grow to fill space"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-shrink"}),r.jsx("p",{className:"p",children:"Controls how much an item shrinks when there is not enough space. Higher number shrinks more."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," is default shrink"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"0"})," prevents shrinking"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"flex-basis"}),r.jsx("p",{className:"p",children:"Sets the starting size of the item before grow or shrink happens. Think of it as the initial width (in row) or height (in column)."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Initial size"]}),r.jsx("pre",{className:"code",children:".item { flex-basis: 240px; }"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"order"}),r.jsx("p",{className:"p",children:"Changes the visual order of items without changing HTML order. Default order is 0. Smaller values come first."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Yp,{})}),"Tip"]}),r.jsx("div",{className:"calloutText",children:"Use order carefully. It can confuse keyboard tab order and screen readers if overused."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"shorthand flex"}),r.jsx("p",{className:"p",children:"flex is a shorthand for flex-grow, flex-shrink, and flex-basis."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Shorthand examples"]}),r.jsx("pre",{className:"code",children:`/* grow shrink basis */
.itemA { flex: 1 1 0; }

/* common pattern: equal columns */
.itemB { flex: 1; } /* means 1 1 0% in most browsers */

/* fixed width item */
.itemC { flex: 0 0 240px; }`})]}),r.jsxs("div",{className:"footerNote",children:[r.jsxs("div",{className:"footerTitle",children:["Quick mental model",r.jsxs("span",{className:"badge",children:[r.jsx(qi,{}),"grow"]}),r.jsxs("span",{className:"badge",children:[r.jsx(qi,{}),"shrink"]}),r.jsx("span",{className:"badge",children:"basis"})]}),r.jsx("p",{className:"p muted",children:"Start at basis, then grow if extra space, shrink if not enough space."})]})]})]})]})},Rf={Wrapper:ge.section`
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
    `},Ff=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Rf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(as,{})}),r.jsx("span",{className:"title",children:"CSS Grid"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Ki,{})}),"Two-dimensional layout system"]}),r.jsx("p",{className:"p",children:"CSS Grid is made for page layout. You define rows and columns on a parent container, then place children into the grid. It handles both directions: horizontal and vertical."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"display: grid"}),r.jsx("p",{className:"p",children:"Turns an element into a grid container. Its direct children become grid items and can be placed into rows and columns."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Grid container"]}),r.jsx("pre",{className:"code",children:`.wrapper {
  display: grid;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-template-columns"}),r.jsx("p",{className:"p",children:"Defines the column tracks. Each value sets a column width. You can mix fixed units and flexible units."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Vp,{})}),"Columns examples"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: 200px 1fr 1fr;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-template-rows"}),r.jsx("p",{className:"p",children:"Defines the row tracks. Same idea as columns, but for height."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Rows example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-rows: auto 120px 1fr;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"repeat()"}),r.jsx("p",{className:"p",children:"Shortcut to repeat tracks. Useful when you want many equal columns or rows."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Vi,{})}),"Repeat example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: repeat(4, 1fr);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"minmax()"}),r.jsx("p",{className:"p",children:"Sets a minimum and maximum size for a track. Great for responsive grids."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Minmax example"]}),r.jsx("pre",{className:"code",children:`.grid {
  grid-template-columns: repeat(3, minmax(180px, 1fr));
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"fr unit"}),r.jsx("p",{className:"p",children:'fr means "fraction of free space". After fixed sizes are handled, leftover space is divided between fr tracks.'}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(qx,{})}),"Simple mental model"]}),r.jsxs("div",{className:"calloutText",children:["If you have ",r.jsx("span",{className:"mono",children:"1fr 2fr"}),", the second column gets twice the space of the first."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-gap (gap)"}),r.jsxs("p",{className:"p",children:["Adds spacing between grid rows and columns. Modern name is ",r.jsx("span",{className:"mono",children:"gap"}),". It works for grid and flex."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Gap example"]}),r.jsx("pre",{className:"code",children:`.grid {
  gap: 12px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-auto-flow"}),r.jsx("p",{className:"p",children:"Controls how items are automatically placed when you do not specify positions. Default is row. You can also use column or dense."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"row"})," fills row by row"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"column"})," fills column by column"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"dense"})," tries to fill gaps"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-column"}),r.jsx("p",{className:"p",children:"Places an item across columns. You can use start and end lines."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Column placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-column: 1 / 3;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-row"}),r.jsx("p",{className:"p",children:"Places an item across rows. Same idea as grid-column but for vertical placement."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Row placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-row: 2 / 4;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"grid-area"}),r.jsx("p",{className:"p",children:"Shorthand to place an item with row start, column start, row end, column end. Also used with named areas."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Area placement"]}),r.jsx("pre",{className:"code",children:`.item {
  grid-area: 1 / 2 / 3 / 4;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Named grid areas"}),r.jsxs("p",{className:"p",children:["You can name regions of your layout using",r.jsx("span",{className:"mono",children:" grid-template-areas"}),". Then assign items to those names with",r.jsx("span",{className:"mono",children:" grid-area"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Named areas example"]}),r.jsx("pre",{className:"code",children:`.layout {
  display: grid;
  gap: 12px;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { grid-area: main; }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Implicit vs explicit grid"}),r.jsxs("p",{className:"p",children:["The explicit grid is what you define with",r.jsx("span",{className:"mono",children:" grid-template-columns"})," and",r.jsx("span",{className:"mono",children:" grid-template-rows"}),". The implicit grid is created automatically when items overflow the defined tracks."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Ki,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:"If you did not define enough rows, Grid will create extra rows in the implicit grid to place items."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Define tracks with template rows and columns"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use repeat and minmax for responsive grids"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use named areas for clean page layouts"]})]})]})]})]})},Df={Wrapper:ge.section`
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
    `},Of=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Df.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Oi,{})}),r.jsx("span",{className:"title",children:"Responsive Design"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pillRow",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(Di,{})}),"Fits every screen"]}),r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(mt,{})}),"Layout + type scaling"]})]}),r.jsx("p",{className:"p",children:"Responsive design means the same UI adapts smoothly to different screen sizes and containers. You do this with media queries, flexible layouts, and fluid sizing."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Media queries"}),r.jsx("p",{className:"p",children:"Media queries apply CSS only when a condition is true, like screen width. They are the main tool for switching layouts at different sizes."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Basic example"]}),r.jsx("pre",{className:"code",children:`/* Apply styles when viewport is 768px and up */
@media (min-width: 768px) {
  .layout {
    display: grid;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Breakpoints"}),r.jsx("p",{className:"p",children:"Breakpoints are chosen widths where your layout needs a noticeable change. Pick breakpoints based on your design, not on random device names."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Oi,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Small"}),r.jsx("div",{className:"miniSub",children:"0 to 600px"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Di,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Medium"}),r.jsx("div",{className:"miniSub",children:"600 to 1024px"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Xx,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Large"}),r.jsx("div",{className:"miniSub",children:"1024px and up"})]})]})]}),r.jsx("p",{className:"p muted",children:"These ranges are common, but you can adjust them based on your UI needs."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Mobile first approach"}),r.jsx("p",{className:"p",children:"Mobile first means you write the base CSS for small screens, then add enhancements using min-width media queries for larger screens. This keeps CSS cleaner and avoids overrides."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Oi,{})}),"Pattern"]}),r.jsx("div",{className:"calloutText",children:"Base styles for mobile, then progressively enhance for bigger screens using min-width."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Desktop first approach"}),r.jsx("p",{className:"p",children:"Desktop first means you write base CSS for large screens and then adjust for smaller screens using max-width queries. It works, but it often leads to more overrides compared to mobile first."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Di,{})}),"Pattern"]}),r.jsx("div",{className:"calloutText",children:"Base styles for desktop, then reduce or simplify for smaller screens using max-width."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Container queries"}),r.jsx("p",{className:"p",children:"Container queries let a component respond to the size of its parent container, not the full viewport. This is useful for reusable cards and widgets inside different layouts."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Basic idea"]}),r.jsx("pre",{className:"code",children:`/* 1) Create a container */
.cardWrap {
  container-type: inline-size;
}

/* 2) Style based on container width */
@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Fluid typography"}),r.jsx("p",{className:"p",children:"Fluid typography means font sizes scale smoothly between a minimum and maximum, instead of jumping only at breakpoints. This improves readability across devices."}),r.jsxs("div",{className:"miniGrid two",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(zo,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Min size"}),r.jsx("div",{className:"miniSub",children:"Readable on mobile"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(zo,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Max size"}),r.jsx("div",{className:"miniSub",children:"Looks strong on desktop"})]})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"clamp for responsiveness"}),r.jsx("p",{className:"p",children:"clamp lets you set a minimum, preferred, and maximum value. It is perfect for responsive font sizes, gaps, padding, and widths."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"clamp example"]}),r.jsx("pre",{className:"code",children:`/* font-size will scale with viewport
   but never go below 18px or above 42px */
.heading {
  font-size: clamp(18px, 4vw, 42px);
}

/* spacing example */
.section {
  padding: clamp(14px, 2.5vw, 28px);
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(as,{})}),"When to use clamp"]}),r.jsx("div",{className:"calloutText",children:"Use it when you want smooth scaling without adding extra breakpoints."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer mobile first with min-width queries"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Choose breakpoints based on layout needs"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use clamp for smoother typography and spacing"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use container queries for reusable components"]})]})]})]})]})},Af={Wrapper:ge.section`
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
    `},Wf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Af.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(ft,{})}),r.jsx("span",{className:"title",children:"Transitions"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ol,{})}),"Smooth state changes"]}),r.jsx("p",{className:"p",children:"CSS transitions animate the change from one value to another. Most commonly used for hover, focus, active, and class toggles."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-property"}),r.jsxs("p",{className:"p",children:["Decides which CSS property should animate. You can animate one property, multiple properties, or use",r.jsx("span",{className:"mono",children:" all"})," (not always recommended)."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate one:",r.jsx("span",{className:"mono",children:" opacity"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate many:",r.jsx("span",{className:"mono",children:" opacity, transform"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate everything:",r.jsx("span",{className:"mono",children:" all"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-duration"}),r.jsxs("p",{className:"p",children:["How long the transition takes. Common values are",r.jsx("span",{className:"mono",children:" 150ms"}),",",r.jsx("span",{className:"mono",children:" 200ms"}),",",r.jsx("span",{className:"mono",children:" 300ms"}),"."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx($p,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Duration"}),r.jsx("div",{className:"miniSub",children:"Example: 200ms"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-timing-function"}),r.jsx("p",{className:"p",children:"Controls the speed curve of the animation. It decides whether it starts slow, ends slow, or stays linear."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"linear"})," - constant speed"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease"})," - default, smooth"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-in"})," - starts slow"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-out"})," - ends slow"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"ease-in-out"})," - slow start and end"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"transition-delay"}),r.jsx("p",{className:"p",children:"Wait time before the transition starts. Useful when you want a small pause, or to stagger interactions."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Ax,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Delay"}),r.jsx("div",{className:"miniSub",children:"Example: 80ms"})]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"cubic-bezier"}),r.jsx("p",{className:"p",children:"A custom timing curve. You can fine-tune how the transition accelerates and decelerates. It uses 4 numbers that define a curve."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(qi,{})}),"Quick idea"]}),r.jsx("div",{className:"calloutText",children:"First two numbers control the curve near the start. Last two numbers control the curve near the end."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Custom curve example"]}),r.jsx("pre",{className:"code",children:"transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);"})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Easing functions"}),r.jsx("p",{className:"p",children:"Easing means the motion feels natural instead of robotic. Most UI transitions look better when they accelerate a bit and slow down at the end."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Recommended UI transition"]}),r.jsx("pre",{className:"code",children:"transition: transform 200ms ease, opacity 200ms ease;"})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick tip"}),r.jsxs("p",{className:"p muted",children:["Prefer animating",r.jsx("span",{className:"mono",children:" transform"})," and",r.jsx("span",{className:"mono",children:" opacity"}),". They are smoother and usually cheaper for the browser than layout properties like width or top."]})]})]})]})]})},Uf={Wrapper:ge.section`
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
    `},Hf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Uf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(Ux,{})}),r.jsx("span",{className:"title",children:"Animations"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ft,{})}),"Motion with keyframes"]}),r.jsxs("p",{className:"p",children:["CSS animations use"," ",r.jsx("span",{className:"mono",children:"@keyframes"})," to define stages, and animation properties to control timing, direction, looping, and play state."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@keyframes"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"@keyframes"})," defines the animation steps. You can use"," ",r.jsx("span",{className:"mono",children:"from/to"})," or percentages."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Keyframes example"]}),r.jsx("pre",{className:"code",children:`@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-name"}),r.jsx("p",{className:"p",children:"Connects an element to a keyframes definition by name. If the name is missing, nothing animates."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(we,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Name"}),r.jsx("div",{className:"miniSub",children:"fadeUp"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-duration"}),r.jsxs("p",{className:"p",children:["How long one animation cycle takes. Example:"," ",r.jsx("span",{className:"mono",children:"300ms"}),","," ",r.jsx("span",{className:"mono",children:"1.2s"}),"."]}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx($p,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Duration"}),r.jsx("div",{className:"miniSub",children:"600ms"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-delay"}),r.jsxs("p",{className:"p",children:["Wait time before the animation starts. It can be"," ",r.jsx("span",{className:"mono",children:"0s"})," or more."]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-iteration-count"}),r.jsxs("p",{className:"p",children:["How many times the animation repeats. Use"," ",r.jsx("span",{className:"mono",children:"1"}),","," ",r.jsx("span",{className:"mono",children:"2"}),", or"," ",r.jsx("span",{className:"mono",children:"infinite"}),"."]}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"1"})," plays once"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"infinite"})," loops forever"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-direction"}),r.jsx("p",{className:"p",children:"Controls the direction on each cycle. Common values: normal, reverse, alternate, alternate-reverse."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"normal"})," - from start to end"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"reverse"})," - from end to start"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"alternate"})," - forward then backward"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-fill-mode"}),r.jsx("p",{className:"p",children:"Decides what styles apply before start and after end. This is super useful for entrance animations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"none"})," - default"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"forwards"})," - keep the last keyframe styles"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"backwards"})," - apply first keyframe during delay"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"both"})," - forwards + backwards"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation-play-state"}),r.jsx("p",{className:"p",children:"Controls whether an animation is running or paused. Good for hover pause effects and user controls."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(em,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Play state"}),r.jsx("div",{className:"miniSub",children:"running or paused"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"animation shorthand"}),r.jsx("p",{className:"p",children:"A short way to set multiple animation properties in one line. The order is flexible, but duration and name must be clear."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Shorthand example"]}),r.jsx("pre",{className:"code",children:`.card {
  animation: fadeUp 600ms ease 120ms 1 normal both;
}`})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(tm,{})}),"Quick tip"]}),r.jsx("div",{className:"calloutText",children:"For most UI animations, you will use: name, duration, easing, delay, and fill-mode."})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Define keyframes first"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Set name + duration"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use fill-mode for entrance animations"]})]})]})]})]})},$f={Wrapper:ge.section`
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
    `},Vf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs($f.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(vp,{})}),r.jsx("span",{className:"title",children:"Advanced Layout and Visual Effects"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(we,{})}),"Practical modern CSS effects"]}),r.jsx("p",{className:"p",children:"These properties help you control how media fits inside boxes, apply visual effects, shape elements, and create smooth scrolling experiences."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"object-fit"}),r.jsxs("p",{className:"p",children:["Controls how an image or video fits inside its box when you set fixed width and height. Most common values are",r.jsx("span",{className:"mono",children:" cover "})," (fills, may crop) and ",r.jsx("span",{className:"mono",children:" contain "})," (fits fully, may leave empty space)."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Yi,{})}),"Common usage"]}),r.jsx("pre",{className:"code",children:`.thumb img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"object-position"}),r.jsxs("p",{className:"p",children:["Works with ",r.jsx("span",{className:"mono",children:"object-fit"}),". When the media is cropped (like cover), this decides which part stays visible. Example: keep the top of a portrait visible."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(tn,{})}),"Focus area"]}),r.jsx("pre",{className:"code",children:`.thumb img {
  object-fit: cover;
  object-position: top;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"filter"}),r.jsx("p",{className:"p",children:"Adds visual effects to an element like blur, brightness, contrast, grayscale, and drop shadow. Useful for image tweaks and hover effects."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(mt,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`.img {
  filter: grayscale(100%);
}
.img:hover {
  filter: grayscale(0%);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"backdrop-filter"}),r.jsx("p",{className:"p",children:"Applies effects to what is behind an element. Common for glassmorphism. It works best with a semi-transparent background. Note: performance heavy on low-end devices, so use carefully."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(we,{})}),"Glass style"]}),r.jsx("pre",{className:"code",children:`.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"mix-blend-mode"}),r.jsx("p",{className:"p",children:"Controls how an element blends with the background, like Photoshop layer blending. Useful for creative overlays, but can reduce readability if overused."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(we,{})}),"Overlay effect"]}),r.jsx("pre",{className:"code",children:`.overlay {
  mix-blend-mode: screen;
  opacity: 0.6;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"clip-path"}),r.jsxs("p",{className:"p",children:["Crops an element into a shape. Common shapes are",r.jsx("span",{className:"mono",children:" circle "}),",",r.jsx("span",{className:"mono",children:" ellipse "}),", and",r.jsx("span",{className:"mono",children:" polygon "}),". Great for badges and angled sections."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Dx,{})}),"Polygon cut"]}),r.jsx("pre",{className:"code",children:`.tag {
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"mask"}),r.jsx("p",{className:"p",children:"Masks hide parts of an element using an image or gradient. Similar to clip-path but more flexible for soft edges and fades. Support can vary, so test in your target browsers."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(vp,{})}),"Gradient mask"]}),r.jsx("pre",{className:"code",children:`.fade {
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent);
  mask-image: linear-gradient(to bottom, #000 60%, transparent);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"aspect-ratio"}),r.jsx("p",{className:"p",children:"Forces a box to keep a width:height ratio. Great for cards, video embeds, and image placeholders. Helps avoid layout shift while media loads."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(as,{})}),"Card ratio"]}),r.jsx("pre",{className:"code",children:`.videoBox {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--color-surface-2);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"scroll-behavior"}),r.jsxs("p",{className:"p",children:["Controls smooth scrolling for anchor links and programmatic scrolls. Usually set on",r.jsx("span",{className:"mono",children:" html "}),". Respect reduced-motion settings for accessibility."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(tn,{})}),"Smooth scroll"]}),r.jsx("pre",{className:"code",children:`html {
  scroll-behavior: smooth;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"scroll-snap"}),r.jsx("p",{className:"p",children:'Makes scrolling "snap" to items, like carousels or full page sections. Use it on the scroll container and on child items.'}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(as,{})}),"Snap list"]}),r.jsx("pre",{className:"code",children:`.snapRow {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.snapItem {
  scroll-snap-align: start;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick tip"}),r.jsx("p",{className:"p",children:"Use visual effects carefully. Filters, blend modes, and backdrop filters can be expensive on low-end devices. Prefer subtle usage and test performance."})]})]})]})},Gf={Wrapper:ge.section`
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
    `},Qf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Gf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(mt,{})}),r.jsx("span",{className:"title",children:"CSS Variables"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ft,{})}),"Reusable tokens for styling"]}),r.jsx("p",{className:"p",children:"CSS Variables are also called custom properties. They let you store values once and reuse them everywhere. They are perfect for themes, spacing systems, and consistent UI styling."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Custom properties"}),r.jsxs("p",{className:"p",children:["Custom properties are variables you define in CSS using names that start with ",r.jsx("span",{className:"mono",children:"--"}),". Example: ",r.jsx("span",{className:"mono",children:"--primary"})," or"," ",r.jsx("span",{className:"mono",children:"--space-12"}),"."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Defining variables"]}),r.jsx("pre",{className:"code",children:`:root {
  --primary: #4ea1ff;
  --radius: 14px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"var()"}),r.jsxs("p",{className:"p",children:["You use the ",r.jsx("span",{className:"mono",children:"var()"})," function to read a CSS variable and apply it as a value in other rules."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Using variables"]}),r.jsx("pre",{className:"code",children:`.btn {
  background: var(--primary);
  border-radius: var(--radius);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Scope"}),r.jsxs("p",{className:"p",children:["Variables follow normal CSS scoping rules. If you define a variable on ",r.jsx("span",{className:"mono",children:":root"}),", it is available everywhere. If you define it on a specific container, it applies only inside that container and its children."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(we,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Global"}),r.jsx("div",{className:"miniSub",children:":root"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(we,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Local"}),r.jsx("div",{className:"miniSub",children:".card"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Global vs local scope"]}),r.jsx("pre",{className:"code",children:`:root {
  --text: #f5f7fa;
}

.card {
  --text: #111827;
  color: var(--text);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Fallback values"}),r.jsxs("p",{className:"p",children:["If a variable is missing, you can provide a fallback value inside ",r.jsx("span",{className:"mono",children:"var()"}),". The browser will use the fallback when the variable is not defined."]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(G,{})}),"Why fallback is useful"]}),r.jsx("div",{className:"calloutText",children:"It prevents broken styles and makes components safer to reuse in different pages."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"var() with fallback"]}),r.jsx("pre",{className:"code",children:`.badge {
  background: var(--badge-bg, #2d333b);
  color: var(--badge-text, #f5f7fa);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Dynamic theming"}),r.jsxs("p",{className:"p",children:["Dynamic theming means switching theme values without rewriting component CSS. You simply change variables on a parent like ",r.jsx("span",{className:"mono",children:"html"})," or"," ",r.jsx("span",{className:"mono",children:"body"}),"."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(il,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Dark"}),r.jsx("div",{className:"miniSub",children:"default"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(ll,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Light"}),r.jsx("div",{className:"miniSub",children:"data-theme"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Theme switch example"]}),r.jsx("pre",{className:"code",children:`:root {
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
}`})]}),r.jsx("p",{className:"p muted",children:"Tip: This is exactly how your theme.css works. Components stay the same, only tokens change."})]})]})]})},Yf={Wrapper:ge.section`
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
    `},Kf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Yf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(we,{})}),r.jsx("span",{className:"title",children:"CSS Architecture"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(we,{})}),"How to organize CSS in real projects"]}),r.jsx("p",{className:"p",children:"CSS architecture is about keeping styles readable, scalable, and easy to maintain as the project grows. These approaches solve the same problem in different ways."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"BEM methodology"}),r.jsx("p",{className:"p",children:"BEM stands for Block, Element, Modifier. It is a naming style that keeps class names predictable and avoids clashes. You write classes like a small system."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bp,{})}),"Example naming"]}),r.jsx("pre",{className:"code",children:`.card { }
.card__title { }
.card--featured { }`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Utility classes"}),r.jsx("p",{className:"p",children:"Utility classes are small single-purpose classes like padding, margin, text colors, and flex helpers. You build UI by combining utilities instead of writing new CSS for every component."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(as,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Example"}),r.jsx("div",{className:"miniSub",children:".mt-10 .p-12 .text-center"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Atomic CSS"}),r.jsx("p",{className:"p",children:"Atomic CSS is an extreme form of utilities where every class maps to one very specific style. It reduces duplication because many components reuse the same tiny classes."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Small reusable classes"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Less custom CSS over time"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"More classes in HTML"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Component based styling"}),r.jsx("p",{className:"p",children:"Styles live with components. Each component owns its own CSS so changes stay localized. This fits modern UI development where UI is built from reusable parts."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(al,{})}),"Simple idea"]}),r.jsx("div",{className:"calloutText",children:"One component = one styling boundary."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"CSS Modules"}),r.jsx("p",{className:"p",children:"CSS Modules scope class names locally by default. This prevents global class conflicts. You write normal CSS, and the build tool generates unique class names."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Jx,{})}),"Idea in one line"]}),r.jsx("pre",{className:"code",children:`// styles.module.css
.button { }

/* used as */
styles.button`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Styled Components"}),r.jsx("p",{className:"p",children:"Styled Components is CSS-in-JS. You write styles inside JavaScript and attach them to components. It supports dynamic styling using props and makes scoping automatic."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(rm,{})}),"When it is useful"]}),r.jsx("div",{className:"calloutText",children:"Great for component libraries, theming, and reusable UI patterns."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Tailwind concept"}),r.jsx("p",{className:"p",children:"Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you compose UI using pre-defined utility classes. It is basically a big, consistent utility system."}),r.jsx("div",{className:"miniRow",children:r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(Qp,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Core idea"}),r.jsx("div",{className:"miniSub",children:"build UI by combining utilities"})]})]})})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Design tokens"}),r.jsx("p",{className:"p",children:"Design tokens are reusable values like colors, spacing, font sizes, radius, and shadows. Tokens keep the UI consistent and make theme changes easy."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(bp,{})}),"Token example"]}),r.jsx("pre",{className:"code",children:`:root {
  --color-primary: #4ea1ff;
  --radius-lg: 18px;
  --space-12: 12px;
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick take"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"BEM keeps naming consistent"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Utilities reduce custom CSS"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Modules and styled-components avoid conflicts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Tokens keep themes consistent"]})]})]})]})]})},qf={Wrapper:ge.section`
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
    `},Xf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(qf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(ft,{})}),r.jsx("span",{className:"title",children:"Performance and Best Practices"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ol,{})}),"Make UI fast and stable"]}),r.jsx("p",{className:"p",children:"CSS performance is mostly about avoiding expensive work in the browser. The big goals are stable layout, less reflow, less repaint, and smoother animations."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Critical CSS"}),r.jsx("p",{className:"p",children:"Critical CSS means loading only the styles needed to render the above-the-fold content first. This improves first paint time because the page can show something useful without waiting for all CSS to download."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Beginner tip"]}),r.jsx("div",{className:"calloutText",children:"Keep your initial layout styles small. Load non-essential styles later (for deep sections, modals, or heavy pages)."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Avoiding layout shifts"}),r.jsx("p",{className:"p",children:"Layout shift happens when content jumps while loading. The most common reason is images or ads without fixed space. Always reserve space using width, height, or aspect-ratio."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Give images width and height"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use aspect-ratio for responsive media"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid inserting content above existing content"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Reserve space"]}),r.jsx("pre",{className:"code",children:`.cardMedia {
  width: 100%;
  aspect-ratio: 16 / 9;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Avoiding heavy selectors"}),r.jsx("p",{className:"p",children:"Heavy selectors make matching slower and can create confusing CSS. Prefer simple class-based selectors over deep nesting and complex patterns."}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(is,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Prefer"}),r.jsx("div",{className:"miniSub",children:".btnPrimary"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(is,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Avoid"}),r.jsx("div",{className:"miniSub",children:"header nav ul li a"})]})]})]}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Simple rule"]}),r.jsx("div",{className:"calloutText",children:"If your selector depends on HTML structure too much, it becomes fragile and harder to maintain."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"GPU acceleration"}),r.jsx("p",{className:"p",children:"Some animations can run smoother when handled by the GPU (graphics processor). Usually, transforms and opacity are the safest properties for smooth animations."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate transform and opacity for best results"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid animating width, height, top, left often"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"will-change"}),r.jsx("p",{className:"p",children:"will-change tells the browser that an element is likely to change soon. This can improve animation smoothness, but using it everywhere can waste memory and hurt performance."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Fx,{})}),"Use carefully"]}),r.jsx("div",{className:"calloutText",children:"Apply will-change only to elements you animate often and remove it when not needed."})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`.card {
  will-change: transform;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Minimizing repaint and reflow"}),r.jsx("p",{className:"p",children:"Reflow (layout) happens when the browser recalculates element sizes and positions. Repaint happens when pixels are redrawn. Both are costly when repeated often."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Animate transform and opacity"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Batch DOM updates (avoid many small changes)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid reading layout values repeatedly while writing styles"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"DevTools performance tab"}),r.jsx("p",{className:"p",children:"Chrome DevTools Performance tab helps you record what the browser is doing. You can see scripting, layout, paint, and rendering work. This makes performance issues visible instead of guessing."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(om,{})}),"What to look for"]}),r.jsx("div",{className:"calloutText",children:"Look for long layout and paint bars, frequent recalculations, and heavy style recalculation."})]})]})]})]})},Zf={Wrapper:ge.section`
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
    `},Jf=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(Zf.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(To,{})}),r.jsx("span",{className:"title",children:"Accessibility in CSS"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(is,{})}),"Make UI usable for everyone"]}),r.jsx("p",{className:"p",children:"Accessibility in CSS means your UI should stay readable, keyboard-friendly, and comfortable for people with low vision, motion sensitivity, or different system theme preferences."})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Focus styles"}),r.jsx("p",{className:"p",children:"Focus styles show where the keyboard is currently located. Without visible focus, keyboard users get lost. Always keep focus outlines visible for buttons, links, inputs, and custom controls."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(Hp,{})}),"Avoid this"]}),r.jsxs("div",{className:"calloutText",children:["Do not remove outlines globally like",r.jsx("span",{className:"mono",children:" outline: none; "}),"unless you replace it with a better focus style."]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:":focus-visible"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:":focus-visible"})," helps show focus rings mainly for keyboard navigation, while mouse clicks usually do not show the ring. This reduces visual noise but keeps keyboard accessibility strong."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Recommended focus pattern"]}),r.jsx("pre",{className:"code",children:`button:focus {
  outline: none;
}

button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Color contrast"}),r.jsx("p",{className:"p",children:"Text must stand out from its background. Low contrast makes reading hard for many users. Keep body text clear, avoid light gray on white, and avoid dark gray on black."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use strong contrast for body text"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Do not rely only on color to show meaning"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Links should be visually obvious"]})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Reduced motion media query"}),r.jsxs("p",{className:"p",children:["Some users feel discomfort from animations. Respect user settings using",r.jsx("span",{className:"mono",children:" prefers-reduced-motion "}),"to reduce or disable motion."]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Reduce motion safely"]}),r.jsx("pre",{className:"code",children:`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"prefers-color-scheme"}),r.jsxs("p",{className:"p",children:["Users can set system theme to dark or light. You can automatically adjust colors using",r.jsx("span",{className:"mono",children:" prefers-color-scheme"}),". This is great when you want a default theme that matches the OS."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(il,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Dark"}),r.jsx("div",{className:"miniSub",children:"Default at night"})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"miniIcon",children:r.jsx(ll,{})}),r.jsxs("div",{className:"miniText",children:[r.jsx("div",{className:"miniTitle",children:"Light"}),r.jsx("div",{className:"miniSub",children:"Bright background"})]})]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Example"]}),r.jsx("pre",{className:"code",children:`@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f1117;
    --color-text-primary: #f5f7fa;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Readable font sizing"}),r.jsx("p",{className:"p",children:"Readable text means comfortable size, spacing, and line length. Avoid tiny fonts. Use a good line-height and keep paragraphs at a readable width."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Body text around 14px to 18px feels safe"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Use line-height around 1.5 to 1.8 for paragraphs"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),"Avoid very long lines, keep max-width for content"]})]}),r.jsxs("div",{className:"flow",children:[r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(zo,{})}),"Font size"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsxs("div",{className:"flowItem",children:[r.jsx("span",{className:"flowIcon",children:r.jsx(ol,{})}),"Line height"]}),r.jsx("div",{className:"arrow",children:"→"}),r.jsx("div",{className:"flowItem",children:"Comfort"})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick checklist"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Focus ring visible for keyboard users"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer :focus-visible over :focus everywhere"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Respect reduced motion setting"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Good text contrast and readable sizing"]})]})]})]})]})},eg={Wrapper:ge.section`
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
    `},rg=()=>{const[o,c]=he.useState(!1),l=()=>c(p=>!p);return r.jsxs(eg.Wrapper,{className:`topicCard ${o?"open":""}`,children:[r.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":o,children:[r.jsx("span",{className:"chev",children:o?r.jsx(_e,{}):r.jsx(Pe,{})}),r.jsx("span",{className:"icon",children:r.jsx(ft,{})}),r.jsx("span",{className:"title",children:"Modern CSS Features"}),r.jsx("span",{className:"meta",children:o?"Collapse":"Expand"})]}),r.jsxs("div",{className:`topicBody ${o?"open":""}`,children:[r.jsxs("div",{className:"intro",children:[r.jsxs("div",{className:"pill",children:[r.jsx("span",{className:"pillIcon",children:r.jsx(ft,{})}),"Newer CSS that reduces hacks"]}),r.jsx("p",{className:"p",children:"These features make CSS more powerful and more maintainable. Use them when supported, and keep fallbacks in mind for older browsers."}),r.jsxs("div",{className:"note",children:[r.jsxs("div",{className:"noteTitle",children:[r.jsx("span",{className:"noteIcon",children:r.jsx(Rx,{})}),"Beginner note"]}),r.jsx("div",{className:"noteText",children:'Modern CSS is about writing less custom code and fewer "workarounds". The browser can now do many things directly.'})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:":has()"}),r.jsx("p",{className:"p",children:":has() is like a parent selector. It lets you style an element based on what it contains. Example: style a card differently if it has a warning badge inside."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Parent style based on child"]}),r.jsx("pre",{className:"code",children:`.card:has(.badge.warning) {
  border-color: var(--color-warning);
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Container queries"}),r.jsx("p",{className:"p",children:"Media queries depend on the viewport size. Container queries depend on the size of a component's container. This makes responsive components easier to build."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(mt,{})}),"Component based responsiveness"]}),r.jsx("pre",{className:"code",children:`.cardGrid {
  container-type: inline-size;
}

@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"subgrid"}),r.jsx("p",{className:"p",children:"subgrid lets nested grid items align with the parent grid tracks. Useful when you want consistent column alignment across multiple cards or rows."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(as,{})}),"Inherit parent grid tracks"]}),r.jsx("pre",{className:"code",children:`.parent {
  display: grid;
  grid-template-columns: 140px 1fr;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Logical properties"}),r.jsx("p",{className:"p",children:"Logical properties are direction aware. Instead of margin-left or padding-right, you use margin-inline, padding-block. This works better for RTL languages and different writing modes."}),r.jsxs("ul",{className:"bullets",children:[r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"margin-inline"})," replaces left and right"]}),r.jsxs("li",{children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"mono",children:"padding-block"})," replaces top and bottom"]})]}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Vi,{})}),"RTL friendly spacing"]}),r.jsx("pre",{className:"code",children:`.box {
  padding-block: 12px;
  padding-inline: 16px;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Writing modes"}),r.jsx("p",{className:"p",children:"writing-mode changes text flow direction, like vertical text layouts. It also affects logical properties and how inline and block directions work."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Vi,{})}),"Vertical text example"]}),r.jsx("pre",{className:"code",children:`.verticalLabel {
  writing-mode: vertical-rl;
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"color-mix()"}),r.jsx("p",{className:"p",children:"color-mix() lets you blend two colors. Useful for creating hover colors, borders, and subtle surfaces without hardcoding many color values."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(Gi,{})}),"Mixing two colors"]}),r.jsx("pre",{className:"code",children:`.chip {
  background: color-mix(in srgb, var(--color-primary) 18%, transparent);
  border-color: color-mix(in srgb, var(--color-primary) 40%, var(--color-border));
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Nesting"}),r.jsx("p",{className:"p",children:"CSS nesting allows you to write nested rules similar to SCSS, but now in CSS itself. It improves readability for component style blocks."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(G,{})}),"Nested rules"]}),r.jsx("pre",{className:"code",children:`.card {
  padding: 16px;

  & .title {
    font-weight: 800;
  }

  &:hover {
    border-color: var(--color-primary);
  }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"Cascade layers"}),r.jsx("p",{className:"p",children:"Cascade layers let you control which group of styles wins, independent of specificity. This makes large projects more predictable."}),r.jsxs("div",{className:"callout",children:[r.jsxs("div",{className:"calloutTitle",children:[r.jsx("span",{className:"calloutIcon",children:r.jsx(we,{})}),"Why it helps"]}),r.jsx("div",{className:"calloutText",children:"You can keep utilities, components, and overrides in separate layers and define a clear priority order."})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@layer"}),r.jsx("p",{className:"p",children:"@layer is how you create layers. You can declare layer order and put CSS rules inside each layer."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(we,{})}),"Layer order and rules"]}),r.jsx("pre",{className:"code",children:`@layer reset, base, components, utilities;

@layer base {
  body { color: var(--color-text-primary); }
}

@layer utilities {
  .mt-2 { margin-top: 8px; }
}`})]})]}),r.jsxs("div",{className:"section",children:[r.jsx("h3",{className:"h3",children:"@scope"}),r.jsx("p",{className:"p",children:"@scope helps limit where styles apply. It allows you to write rules that only affect a specific part of the DOM. This reduces accidental styling conflicts."}),r.jsxs("div",{className:"codeBlock",children:[r.jsxs("div",{className:"codeTop",children:[r.jsx("span",{className:"codeIcon",children:r.jsx(is,{})}),"Scoped styling"]}),r.jsx("pre",{className:"code",children:`@scope (.card) {
  .title {
    font-weight: 900;
  }
}`})]})]}),r.jsxs("div",{className:"footerNote",children:[r.jsx("div",{className:"footerTitle",children:"Quick takeaway"}),r.jsxs("ul",{className:"checks",children:[r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Prefer container queries for component layouts"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use logical properties for RTL readiness"]}),r.jsxs("li",{children:[r.jsx("span",{className:"checkDot"}),"Use @layer to keep cascade predictable"]})]})]})]})]})},Ap=[["about","Overview",yu],["fundamentals","CSS Fundamentals",gf],["apply","Ways to Apply CSS",yf],["selectors","Selectors",Nf],["box","Box Model",wf],["units","Units and Values",Sf],["colors","Colors and Backgrounds",Tf],["type","Typography",If],["display","Display and Visibility",Lf],["position","Positioning",Pf],["flex","Flexbox",Mf],["grid","CSS Grid",Ff],["responsive","Responsive Design",Of],["transitions","Transitions",Wf],["animations","Animations",Hf],["effects","Layout and Visual Effects",Vf],["variables","CSS Variables",Qf],["architecture","CSS Architecture",Kf],["performance","Performance",Xf],["accessibility","Accessibility",Jf],["modern","Modern CSS",rg]],tg=()=>{var g;const[o,c]=he.useState("about"),l=he.useRef(null),p=((g=Ap.find(([j])=>j===o))==null?void 0:g[2])||yu;return he.useEffect(()=>{var j;(j=l.current)==null||j.scrollTo({top:0,behavior:"auto"}),requestAnimationFrame(()=>{var S,L;return(L=(S=l.current)==null?void 0:S.querySelector('[aria-expanded="false"]'))==null?void 0:L.click()})},[o]),r.jsxs($i.Wrapper,{children:[r.jsx($i.Header,{children:r.jsx(df,{})}),r.jsxs($i.Main,{ref:l,children:[r.jsxs("div",{className:"workspaceLayout",children:[r.jsxs("aside",{className:"sideMenu","aria-label":"CSS topics",children:[r.jsx("p",{className:"menuLabel",children:"Study guide"}),r.jsx("nav",{children:Ap.map(([j,S])=>r.jsx("button",{type:"button",className:o===j?"active":"",onClick:()=>c(j),children:S},j))})]}),r.jsx("section",{className:"contentWrapper","aria-live":"polite",children:r.jsx(p,{})})]}),r.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var j;return(j=l.current)==null?void 0:j.scrollTo({top:0,behavior:"smooth"})},children:r.jsx(Bx,{})}),r.jsx("div",{className:"footerWrapper",children:r.jsx(mf,{})})]})]})};Sx.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(tg,{})}));
