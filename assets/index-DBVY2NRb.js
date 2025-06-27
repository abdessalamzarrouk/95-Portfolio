(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const b of d)if(b.type==="childList")for(const g of b.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(d){const b={};return d.integrity&&(b.integrity=d.integrity),d.referrerPolicy&&(b.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?b.credentials="include":d.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function r(d){if(d.ep)return;d.ep=!0;const b=o(d);fetch(d.href,b)}})();function Qh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ro={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function Wm(){if(nh)return Au;nh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,b){var g=null;if(b!==void 0&&(g=""+b),d.key!==void 0&&(g=""+d.key),"key"in d){b={};for(var w in d)w!=="key"&&(b[w]=d[w])}else b=d;return d=b.ref,{$$typeof:n,type:r,key:g,ref:d!==void 0?d:null,props:b}}return Au.Fragment=c,Au.jsx=o,Au.jsxs=o,Au}var uh;function Fm(){return uh||(uh=1,Ro.exports=Wm()),Ro.exports}var ft=Fm(),Oo={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function Im(){if(ih)return pt;ih=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),g=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.iterator;function $(p){return p===null||typeof p!="object"?null:(p=O&&p[O]||p["@@iterator"],typeof p=="function"?p:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,tt={};function F(p,B,j){this.props=p,this.context=B,this.refs=tt,this.updater=j||V}F.prototype.isReactComponent={},F.prototype.setState=function(p,B){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,B,"setState")},F.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function K(){}K.prototype=F.prototype;function X(p,B,j){this.props=p,this.context=B,this.refs=tt,this.updater=j||V}var q=X.prototype=new K;q.constructor=X,J(q,F.prototype),q.isPureReactComponent=!0;var et=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function I(p,B,j,N,Q,lt){return j=lt.ref,{$$typeof:n,type:p,key:B,ref:j!==void 0?j:null,props:lt}}function St(p,B){return I(p.type,B,void 0,void 0,void 0,p.props)}function Rt(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Zt(p){var B={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(j){return B[j]})}var Ut=/\/+/g;function bt(p,B){return typeof p=="object"&&p!==null&&p.key!=null?Zt(""+p.key):B.toString(36)}function jt(){}function $t(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(jt,jt):(p.status="pending",p.then(function(B){p.status==="pending"&&(p.status="fulfilled",p.value=B)},function(B){p.status==="pending"&&(p.status="rejected",p.reason=B)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function gt(p,B,j,N,Q){var lt=typeof p;(lt==="undefined"||lt==="boolean")&&(p=null);var Z=!1;if(p===null)Z=!0;else switch(lt){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(p.$$typeof){case n:case c:Z=!0;break;case R:return Z=p._init,gt(Z(p._payload),B,j,N,Q)}}if(Z)return Q=Q(p),Z=N===""?"."+bt(p,0):N,et(Q)?(j="",Z!=null&&(j=Z.replace(Ut,"$&/")+"/"),gt(Q,B,j,"",function(k){return k})):Q!=null&&(Rt(Q)&&(Q=St(Q,j+(Q.key==null||p&&p.key===Q.key?"":(""+Q.key).replace(Ut,"$&/")+"/")+Z)),B.push(Q)),1;Z=0;var rt=N===""?".":N+":";if(et(p))for(var dt=0;dt<p.length;dt++)N=p[dt],lt=rt+bt(N,dt),Z+=gt(N,B,j,lt,Q);else if(dt=$(p),typeof dt=="function")for(p=dt.call(p),dt=0;!(N=p.next()).done;)N=N.value,lt=rt+bt(N,dt++),Z+=gt(N,B,j,lt,Q);else if(lt==="object"){if(typeof p.then=="function")return gt($t(p),B,j,N,Q);throw B=String(p),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return Z}function z(p,B,j){if(p==null)return p;var N=[],Q=0;return gt(p,N,"","",function(lt){return B.call(j,lt,Q++)}),N}function Y(p){if(p._status===-1){var B=p._result;B=B(),B.then(function(j){(p._status===0||p._status===-1)&&(p._status=1,p._result=j)},function(j){(p._status===0||p._status===-1)&&(p._status=2,p._result=j)}),p._status===-1&&(p._status=0,p._result=B)}if(p._status===1)return p._result.default;throw p._result}var G=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function ut(){}return pt.Children={map:z,forEach:function(p,B,j){z(p,function(){B.apply(this,arguments)},j)},count:function(p){var B=0;return z(p,function(){B++}),B},toArray:function(p){return z(p,function(B){return B})||[]},only:function(p){if(!Rt(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},pt.Component=F,pt.Fragment=o,pt.Profiler=d,pt.PureComponent=X,pt.StrictMode=r,pt.Suspense=A,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,pt.__COMPILER_RUNTIME={__proto__:null,c:function(p){return L.H.useMemoCache(p)}},pt.cache=function(p){return function(){return p.apply(null,arguments)}},pt.cloneElement=function(p,B,j){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var N=J({},p.props),Q=p.key,lt=void 0;if(B!=null)for(Z in B.ref!==void 0&&(lt=void 0),B.key!==void 0&&(Q=""+B.key),B)!W.call(B,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&B.ref===void 0||(N[Z]=B[Z]);var Z=arguments.length-2;if(Z===1)N.children=j;else if(1<Z){for(var rt=Array(Z),dt=0;dt<Z;dt++)rt[dt]=arguments[dt+2];N.children=rt}return I(p.type,Q,void 0,void 0,lt,N)},pt.createContext=function(p){return p={$$typeof:g,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:b,_context:p},p},pt.createElement=function(p,B,j){var N,Q={},lt=null;if(B!=null)for(N in B.key!==void 0&&(lt=""+B.key),B)W.call(B,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(Q[N]=B[N]);var Z=arguments.length-2;if(Z===1)Q.children=j;else if(1<Z){for(var rt=Array(Z),dt=0;dt<Z;dt++)rt[dt]=arguments[dt+2];Q.children=rt}if(p&&p.defaultProps)for(N in Z=p.defaultProps,Z)Q[N]===void 0&&(Q[N]=Z[N]);return I(p,lt,void 0,void 0,null,Q)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(p){return{$$typeof:w,render:p}},pt.isValidElement=Rt,pt.lazy=function(p){return{$$typeof:R,_payload:{_status:-1,_result:p},_init:Y}},pt.memo=function(p,B){return{$$typeof:m,type:p,compare:B===void 0?null:B}},pt.startTransition=function(p){var B=L.T,j={};L.T=j;try{var N=p(),Q=L.S;Q!==null&&Q(j,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(ut,G)}catch(lt){G(lt)}finally{L.T=B}},pt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},pt.use=function(p){return L.H.use(p)},pt.useActionState=function(p,B,j){return L.H.useActionState(p,B,j)},pt.useCallback=function(p,B){return L.H.useCallback(p,B)},pt.useContext=function(p){return L.H.useContext(p)},pt.useDebugValue=function(){},pt.useDeferredValue=function(p,B){return L.H.useDeferredValue(p,B)},pt.useEffect=function(p,B,j){var N=L.H;if(typeof j=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(p,B)},pt.useId=function(){return L.H.useId()},pt.useImperativeHandle=function(p,B,j){return L.H.useImperativeHandle(p,B,j)},pt.useInsertionEffect=function(p,B){return L.H.useInsertionEffect(p,B)},pt.useLayoutEffect=function(p,B){return L.H.useLayoutEffect(p,B)},pt.useMemo=function(p,B){return L.H.useMemo(p,B)},pt.useOptimistic=function(p,B){return L.H.useOptimistic(p,B)},pt.useReducer=function(p,B,j){return L.H.useReducer(p,B,j)},pt.useRef=function(p){return L.H.useRef(p)},pt.useState=function(p){return L.H.useState(p)},pt.useSyncExternalStore=function(p,B,j){return L.H.useSyncExternalStore(p,B,j)},pt.useTransition=function(){return L.H.useTransition()},pt.version="19.1.0",pt}var ch;function Io(){return ch||(ch=1,Oo.exports=Im()),Oo.exports}var M=Io();const D=Qh(M);var zo={exports:{}},xu={},Mo={exports:{}},_o={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function Pm(){return rh||(rh=1,function(n){function c(z,Y){var G=z.length;z.push(Y);t:for(;0<G;){var ut=G-1>>>1,p=z[ut];if(0<d(p,Y))z[ut]=Y,z[G]=p,G=ut;else break t}}function o(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],G=z.pop();if(G!==Y){z[0]=G;t:for(var ut=0,p=z.length,B=p>>>1;ut<B;){var j=2*(ut+1)-1,N=z[j],Q=j+1,lt=z[Q];if(0>d(N,G))Q<p&&0>d(lt,N)?(z[ut]=lt,z[Q]=G,ut=Q):(z[ut]=N,z[j]=G,ut=j);else if(Q<p&&0>d(lt,G))z[ut]=lt,z[Q]=G,ut=Q;else break t}}return Y}function d(z,Y){var G=z.sortIndex-Y.sortIndex;return G!==0?G:z.id-Y.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;n.unstable_now=function(){return b.now()}}else{var g=Date,w=g.now();n.unstable_now=function(){return g.now()-w}}var A=[],m=[],R=1,O=null,$=3,V=!1,J=!1,tt=!1,F=!1,K=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function et(z){for(var Y=o(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=z)r(m),Y.sortIndex=Y.expirationTime,c(A,Y);else break;Y=o(m)}}function L(z){if(tt=!1,et(z),!J)if(o(A)!==null)J=!0,W||(W=!0,bt());else{var Y=o(m);Y!==null&&gt(L,Y.startTime-z)}}var W=!1,I=-1,St=5,Rt=-1;function Zt(){return F?!0:!(n.unstable_now()-Rt<St)}function Ut(){if(F=!1,W){var z=n.unstable_now();Rt=z;var Y=!0;try{t:{J=!1,tt&&(tt=!1,X(I),I=-1),V=!0;var G=$;try{e:{for(et(z),O=o(A);O!==null&&!(O.expirationTime>z&&Zt());){var ut=O.callback;if(typeof ut=="function"){O.callback=null,$=O.priorityLevel;var p=ut(O.expirationTime<=z);if(z=n.unstable_now(),typeof p=="function"){O.callback=p,et(z),Y=!0;break e}O===o(A)&&r(A),et(z)}else r(A);O=o(A)}if(O!==null)Y=!0;else{var B=o(m);B!==null&&gt(L,B.startTime-z),Y=!1}}break t}finally{O=null,$=G,V=!1}Y=void 0}}finally{Y?bt():W=!1}}}var bt;if(typeof q=="function")bt=function(){q(Ut)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,$t=jt.port2;jt.port1.onmessage=Ut,bt=function(){$t.postMessage(null)}}else bt=function(){K(Ut,0)};function gt(z,Y){I=K(function(){z(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return $},n.unstable_next=function(z){switch($){case 1:case 2:case 3:var Y=3;break;default:Y=$}var G=$;$=Y;try{return z()}finally{$=G}},n.unstable_requestPaint=function(){F=!0},n.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=$;$=z;try{return Y()}finally{$=G}},n.unstable_scheduleCallback=function(z,Y,G){var ut=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ut+G:ut):G=ut,z){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=G+p,z={id:R++,callback:Y,priorityLevel:z,startTime:G,expirationTime:p,sortIndex:-1},G>ut?(z.sortIndex=G,c(m,z),o(A)===null&&z===o(m)&&(tt?(X(I),I=-1):tt=!0,gt(L,G-ut))):(z.sortIndex=p,c(A,z),J||V||(J=!0,W||(W=!0,bt()))),z},n.unstable_shouldYield=Zt,n.unstable_wrapCallback=function(z){var Y=$;return function(){var G=$;$=Y;try{return z.apply(this,arguments)}finally{$=G}}}}(_o)),_o}var oh;function tv(){return oh||(oh=1,Mo.exports=Pm()),Mo.exports}var Co={exports:{}},be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function ev(){if(fh)return be;fh=1;var n=Io();function c(A){var m="https://react.dev/errors/"+A;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)m+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+A+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function b(A,m,R){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:A,containerInfo:m,implementation:R}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(A,m){if(A==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,be.createPortal=function(A,m){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return b(A,m,null,R)},be.flushSync=function(A){var m=g.T,R=r.p;try{if(g.T=null,r.p=2,A)return A()}finally{g.T=m,r.p=R,r.d.f()}},be.preconnect=function(A,m){typeof A=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(A,m))},be.prefetchDNS=function(A){typeof A=="string"&&r.d.D(A)},be.preinit=function(A,m){if(typeof A=="string"&&m&&typeof m.as=="string"){var R=m.as,O=w(R,m.crossOrigin),$=typeof m.integrity=="string"?m.integrity:void 0,V=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;R==="style"?r.d.S(A,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:O,integrity:$,fetchPriority:V}):R==="script"&&r.d.X(A,{crossOrigin:O,integrity:$,fetchPriority:V,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},be.preinitModule=function(A,m){if(typeof A=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var R=w(m.as,m.crossOrigin);r.d.M(A,{crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(A)},be.preload=function(A,m){if(typeof A=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var R=m.as,O=w(R,m.crossOrigin);r.d.L(A,R,{crossOrigin:O,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},be.preloadModule=function(A,m){if(typeof A=="string")if(m){var R=w(m.as,m.crossOrigin);r.d.m(A,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(A)},be.requestFormReset=function(A){r.d.r(A)},be.unstable_batchedUpdates=function(A,m){return A(m)},be.useFormState=function(A,m,R){return g.H.useFormState(A,m,R)},be.useFormStatus=function(){return g.H.useHostTransitionStatus()},be.version="19.1.0",be}var sh;function jh(){if(sh)return Co.exports;sh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Co.exports=ev(),Co.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function lv(){if(dh)return xu;dh=1;var n=tv(),c=Io(),o=jh();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function b(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w(t){if(b(t)!==t)throw Error(r(188))}function A(t){var e=t.alternate;if(!e){if(e=b(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return w(u),t;if(i===a)return w(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var f=!1,s=u.child;s;){if(s===l){f=!0,l=u,a=i;break}if(s===a){f=!0,a=u,l=i;break}s=s.sibling}if(!f){for(s=i.child;s;){if(s===l){f=!0,l=i,a=u;break}if(s===a){f=!0,a=i,l=u;break}s=s.sibling}if(!f)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var R=Object.assign,O=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),q=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Rt=Symbol.for("react.activity"),Zt=Symbol.for("react.memo_cache_sentinel"),Ut=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=Ut&&t[Ut]||t["@@iterator"],typeof t=="function"?t:null)}var jt=Symbol.for("react.client.reference");function $t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===jt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case F:return"Profiler";case tt:return"StrictMode";case L:return"Suspense";case W:return"SuspenseList";case Rt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case q:return(t.displayName||"Context")+".Provider";case X:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:$t(t.type)||"Memo";case St:e=t._payload,t=t._init;try{return $t(t(e))}catch{}}return null}var gt=Array.isArray,z=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ut=[],p=-1;function B(t){return{current:t}}function j(t){0>p||(t.current=ut[p],ut[p]=null,p--)}function N(t,e){p++,ut[p]=t.current,t.current=e}var Q=B(null),lt=B(null),Z=B(null),rt=B(null);function dt(t,e){switch(N(Z,e),N(lt,t),N(Q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?C0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=C0(e),t=B0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Q),N(Q,t)}function k(){j(Q),j(lt),j(Z)}function st(t){t.memoizedState!==null&&N(rt,t);var e=Q.current,l=B0(e,t.type);e!==l&&(N(lt,t),N(Q,l))}function ht(t){lt.current===t&&(j(Q),j(lt)),rt.current===t&&(j(rt),bu._currentValue=G)}var Et=Object.prototype.hasOwnProperty,_t=n.unstable_scheduleCallback,Vt=n.unstable_cancelCallback,Kt=n.unstable_shouldYield,ve=n.unstable_requestPaint,Ft=n.unstable_now,nl=n.unstable_getCurrentPriorityLevel,Le=n.unstable_ImmediatePriority,Ta=n.unstable_UserBlockingPriority,Sl=n.unstable_NormalPriority,Fl=n.unstable_LowPriority,Sn=n.unstable_IdlePriority,pf=n.log,Bp=n.unstable_setDisableYieldValue,En=null,Ee=null;function El(t){if(typeof pf=="function"&&Bp(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(En,t)}catch{}}var Te=Math.clz32?Math.clz32:$p,Np=Math.log,Up=Math.LN2;function $p(t){return t>>>=0,t===0?32:31-(Np(t)/Up|0)|0}var _u=256,Cu=4194304;function Il(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Bu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?u=Il(a):(f&=s,f!==0?u=Il(f):l||(l=s&~t,l!==0&&(u=Il(l))))):(s=a&~i,s!==0?u=Il(s):f!==0?u=Il(f):l||(l=a&~t,l!==0&&(u=Il(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function Tn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Hp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(){var t=_u;return _u<<=1,(_u&4194048)===0&&(_u=256),t}function mf(){var t=Cu;return Cu<<=1,(Cu&62914560)===0&&(Cu=4194304),t}function bc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Dn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kp(t,e,l,a,u,i){var f=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,S=t.hiddenUpdates;for(l=f&~l;0<l;){var _=31-Te(l),U=1<<_;s[_]=0,h[_]=-1;var E=S[_];if(E!==null)for(S[_]=null,_=0;_<E.length;_++){var T=E[_];T!==null&&(T.lane&=-536870913)}l&=~U}a!==0&&vf(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(f&~e))}function vf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function gf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Te(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function mc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yf(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:I0(t.type))}function Qp(t,e){var l=Y.p;try{return Y.p=t,e()}finally{Y.p=l}}var Tl=Math.random().toString(36).slice(2),he="__reactFiber$"+Tl,ge="__reactProps$"+Tl,Da="__reactContainer$"+Tl,gc="__reactEvents$"+Tl,jp="__reactListeners$"+Tl,qp="__reactHandles$"+Tl,Af="__reactResources$"+Tl,wn="__reactMarker$"+Tl;function yc(t){delete t[he],delete t[ge],delete t[gc],delete t[jp],delete t[qp]}function wa(t){var e=t[he];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Da]||l[he]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=H0(t);t!==null;){if(l=t[he])return l;t=H0(t)}return e}t=l,l=t.parentNode}return null}function Ra(t){if(t=t[he]||t[Da]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Rn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Oa(t){var e=t[Af];return e||(e=t[Af]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ae(t){t[wn]=!0}var xf=new Set,Sf={};function Pl(t,e){za(t,e),za(t+"Capture",e)}function za(t,e){for(Sf[t]=e,t=0;t<e.length;t++)xf.add(e[t])}var Yp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ef={},Tf={};function Lp(t){return Et.call(Tf,t)?!0:Et.call(Ef,t)?!1:Yp.test(t)?Tf[t]=!0:(Ef[t]=!0,!1)}function Nu(t,e,l){if(Lp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Uu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ul(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var Ac,Df;function Ma(t){if(Ac===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||"",Df=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ac+t+Df}var xc=!1;function Sc(t,e){if(!t||xc)return"";xc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(T){var E=T}Reflect.construct(t,[],U)}else{try{U.call()}catch(T){E=T}t.call(U.prototype)}}else{try{throw Error()}catch(T){E=T}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),f=i[0],s=i[1];if(f&&s){var h=f.split(`
`),S=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<S.length&&!S[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===S.length)for(a=h.length-1,u=S.length-1;1<=a&&0<=u&&h[a]!==S[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==S[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==S[u]){var _=`
`+h[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=u);break}}}finally{xc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ma(l):""}function Gp(t){switch(t.tag){case 26:case 27:case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return Sc(t.type,!1);case 11:return Sc(t.type.render,!1);case 1:return Sc(t.type,!0);case 31:return Ma("Activity");default:return""}}function wf(t){try{var e="";do e+=Gp(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xp(t){var e=Rf(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(f){a=""+f,i.call(this,f)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $u(t){t._valueTracker||(t._valueTracker=Xp(t))}function Of(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Rf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zp=/[\n"\\]/g;function Ne(t){return t.replace(Zp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ec(t,e,l,a,u,i,f,s){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Tc(t,f,Be(e)):l!=null?Tc(t,f,Be(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Be(s):t.removeAttribute("name")}function zf(t,e,l,a,u,i,f,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+Be(l):"",e=e!=null?""+Be(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function Tc(t,e,l){e==="number"&&Hu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function _a(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Be(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Mf(t,e,l){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Be(l):""}function _f(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(gt(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Be(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ca(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Vp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Vp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Bf(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&Cf(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&Cf(t,i,e[i])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ku(t){return Jp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var wc=null;function Rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ba=null,Na=null;function Nf(t){var e=Ra(t);if(e&&(t=e.stateNode)){var l=t[ge]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ec(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ne(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ge]||null;if(!u)throw Error(r(90));Ec(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Of(a)}break t;case"textarea":Mf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&_a(t,!!l.multiple,e,!1)}}}var Oc=!1;function Uf(t,e,l){if(Oc)return t(e,l);Oc=!0;try{var a=t(e);return a}finally{if(Oc=!1,(Ba!==null||Na!==null)&&(Ei(),Ba&&(e=Ba,t=Na,Na=Ba=null,Nf(e),t)))for(e=0;e<t.length;e++)Nf(t[e])}}function On(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ge]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(il)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){zc=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{zc=!1}var Dl=null,Mc=null,Qu=null;function $f(){if(Qu)return Qu;var t,e=Mc,l=e.length,a,u="value"in Dl?Dl.value:Dl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var f=l-t;for(a=1;a<=f&&e[l-a]===u[i-a];a++);return Qu=u.slice(t,1<a?1-a:void 0)}function ju(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qu(){return!0}function Hf(){return!1}function ye(t){function e(l,a,u,i,f){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qu:Hf,this.isPropagationStopped=Hf,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=ye(ta),Mn=R({},ta,{view:0,detail:0}),Wp=ye(Mn),_c,Cc,_n,Lu=R({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_n&&(_n&&t.type==="mousemove"?(_c=t.screenX-_n.screenX,Cc=t.screenY-_n.screenY):Cc=_c=0,_n=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),kf=ye(Lu),Fp=R({},Lu,{dataTransfer:0}),Ip=ye(Fp),Pp=R({},Mn,{relatedTarget:0}),Bc=ye(Pp),tb=R({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),eb=ye(tb),lb=R({},ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ab=ye(lb),nb=R({},ta,{data:0}),Qf=ye(nb),ub={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cb[t])?!!e[t]:!1}function Nc(){return rb}var ob=R({},Mn,{key:function(t){if(t.key){var e=ub[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ju(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ib[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?ju(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ju(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fb=ye(ob),sb=R({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=ye(sb),db=R({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),hb=ye(db),pb=R({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),bb=ye(pb),mb=R({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vb=ye(mb),gb=R({},ta,{newState:0,oldState:0}),yb=ye(gb),Ab=[9,13,27,32],Uc=il&&"CompositionEvent"in window,Cn=null;il&&"documentMode"in document&&(Cn=document.documentMode);var xb=il&&"TextEvent"in window&&!Cn,qf=il&&(!Uc||Cn&&8<Cn&&11>=Cn),Yf=" ",Lf=!1;function Gf(t,e){switch(t){case"keyup":return Ab.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ua=!1;function Sb(t,e){switch(t){case"compositionend":return Xf(e);case"keypress":return e.which!==32?null:(Lf=!0,Yf);case"textInput":return t=e.data,t===Yf&&Lf?null:t;default:return null}}function Eb(t,e){if(Ua)return t==="compositionend"||!Uc&&Gf(t,e)?(t=$f(),Qu=Mc=Dl=null,Ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qf&&e.locale!=="ko"?null:e.data;default:return null}}var Tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tb[t.type]:e==="textarea"}function Vf(t,e,l,a){Ba?Na?Na.push(a):Na=[a]:Ba=a,e=zi(e,"onChange"),0<e.length&&(l=new Yu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Bn=null,Nn=null;function Db(t){R0(t,0)}function Gu(t){var e=Rn(t);if(Of(e))return t}function Kf(t,e){if(t==="change")return e}var Jf=!1;if(il){var $c;if(il){var Hc="oninput"in document;if(!Hc){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),Hc=typeof Wf.oninput=="function"}$c=Hc}else $c=!1;Jf=$c&&(!document.documentMode||9<document.documentMode)}function Ff(){Bn&&(Bn.detachEvent("onpropertychange",If),Nn=Bn=null)}function If(t){if(t.propertyName==="value"&&Gu(Nn)){var e=[];Vf(e,Nn,t,Rc(t)),Uf(Db,e)}}function wb(t,e,l){t==="focusin"?(Ff(),Bn=e,Nn=l,Bn.attachEvent("onpropertychange",If)):t==="focusout"&&Ff()}function Rb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gu(Nn)}function Ob(t,e){if(t==="click")return Gu(e)}function zb(t,e){if(t==="input"||t==="change")return Gu(e)}function Mb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var De=typeof Object.is=="function"?Object.is:Mb;function Un(t,e){if(De(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Et.call(e,u)||!De(t[u],e[u]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ts(t,e){var l=Pf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Pf(l)}}function es(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?es(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ls(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Hu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Hu(t.document)}return e}function kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var _b=il&&"documentMode"in document&&11>=document.documentMode,$a=null,Qc=null,$n=null,jc=!1;function as(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;jc||$a==null||$a!==Hu(a)||(a=$a,"selectionStart"in a&&kc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$n&&Un($n,a)||($n=a,a=zi(Qc,"onSelect"),0<a.length&&(e=new Yu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=$a)))}function ea(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ha={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},qc={},ns={};il&&(ns=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function la(t){if(qc[t])return qc[t];if(!Ha[t])return t;var e=Ha[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in ns)return qc[t]=e[l];return t}var us=la("animationend"),is=la("animationiteration"),cs=la("animationstart"),Cb=la("transitionrun"),Bb=la("transitionstart"),Nb=la("transitioncancel"),rs=la("transitionend"),os=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function Ge(t,e){os.set(t,e),Pl(e,[t])}var fs=new WeakMap;function Ue(t,e){if(typeof t=="object"&&t!==null){var l=fs.get(t);return l!==void 0?l:(e={value:t,source:e,stack:wf(e)},fs.set(t,e),e)}return{value:t,source:e,stack:wf(e)}}var $e=[],ka=0,Lc=0;function Xu(){for(var t=ka,e=Lc=ka=0;e<t;){var l=$e[e];$e[e++]=null;var a=$e[e];$e[e++]=null;var u=$e[e];$e[e++]=null;var i=$e[e];if($e[e++]=null,a!==null&&u!==null){var f=a.pending;f===null?u.next=u:(u.next=f.next,f.next=u),a.pending=u}i!==0&&ss(l,u,i)}}function Zu(t,e,l,a){$e[ka++]=t,$e[ka++]=e,$e[ka++]=l,$e[ka++]=a,Lc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Gc(t,e,l,a){return Zu(t,e,l,a),Vu(t)}function Qa(t,e){return Zu(t,null,null,e),Vu(t)}function ss(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-Te(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Vu(t){if(50<cu)throw cu=0,Wr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ja={};function Ub(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(t,e,l,a){return new Ub(t,e,l,a)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cl(t,e){var l=t.alternate;return l===null?(l=we(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function ds(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ku(t,e,l,a,u,i){var f=0;if(a=t,typeof t=="function")Xc(t)&&(f=1);else if(typeof t=="string")f=Hm(t,l,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Rt:return t=we(31,l,e,u),t.elementType=Rt,t.lanes=i,t;case J:return aa(l.children,u,i,e);case tt:f=8,u|=24;break;case F:return t=we(12,l,e,u|2),t.elementType=F,t.lanes=i,t;case L:return t=we(13,l,e,u),t.elementType=L,t.lanes=i,t;case W:return t=we(19,l,e,u),t.elementType=W,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:case q:f=10;break t;case X:f=9;break t;case et:f=11;break t;case I:f=14;break t;case St:f=16,a=null;break t}f=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=we(f,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function aa(t,e,l,a){return t=we(7,t,a,e),t.lanes=l,t}function Zc(t,e,l){return t=we(6,t,null,e),t.lanes=l,t}function Vc(t,e,l){return e=we(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var qa=[],Ya=0,Ju=null,Wu=0,He=[],ke=0,na=null,rl=1,ol="";function ua(t,e){qa[Ya++]=Wu,qa[Ya++]=Ju,Ju=t,Wu=e}function hs(t,e,l){He[ke++]=rl,He[ke++]=ol,He[ke++]=na,na=t;var a=rl;t=ol;var u=32-Te(a)-1;a&=~(1<<u),l+=1;var i=32-Te(e)+u;if(30<i){var f=u-u%5;i=(a&(1<<f)-1).toString(32),a>>=f,u-=f,rl=1<<32-Te(e)+u|l<<u|a,ol=i+t}else rl=1<<i|l<<u|a,ol=t}function Kc(t){t.return!==null&&(ua(t,1),hs(t,1,0))}function Jc(t){for(;t===Ju;)Ju=qa[--Ya],qa[Ya]=null,Wu=qa[--Ya],qa[Ya]=null;for(;t===na;)na=He[--ke],He[ke]=null,ol=He[--ke],He[ke]=null,rl=He[--ke],He[ke]=null}var me=null,Lt=null,wt=!1,ia=null,We=!1,Wc=Error(r(519));function ca(t){var e=Error(r(418,""));throw Qn(Ue(e,t)),Wc}function ps(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[he]=t,e[ge]=a,l){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(l=0;l<ou.length;l++)xt(ou[l],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),zf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),$u(e);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),_f(e,a.value,a.defaultValue,a.children),$u(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||_0(e.textContent,l)?(a.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),a.onScroll!=null&&xt("scroll",e),a.onScrollEnd!=null&&xt("scrollend",e),a.onClick!=null&&(e.onclick=Mi),e=!0):e=!1,e||ca(t)}function bs(t){for(me=t.return;me;)switch(me.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:me=me.return}}function Hn(t){if(t!==me)return!1;if(!wt)return bs(t),wt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||ho(t.type,t.memoizedProps)),l=!l),l&&Lt&&ca(t),bs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Lt=Ze(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Lt=null}}else e===27?(e=Lt,ql(t.type)?(t=vo,vo=null,Lt=t):Lt=e):Lt=me?Ze(t.stateNode.nextSibling):null;return!0}function kn(){Lt=me=null,wt=!1}function ms(){var t=ia;return t!==null&&(Se===null?Se=t:Se.push.apply(Se,t),ia=null),t}function Qn(t){ia===null?ia=[t]:ia.push(t)}var Fc=B(null),ra=null,fl=null;function wl(t,e,l){N(Fc,e._currentValue),e._currentValue=l}function sl(t){t._currentValue=Fc.current,j(Fc)}function Ic(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Pc(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var f=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),Ic(i.return,l,t),a||(f=null);break t}i=s.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(r(341));f.lanes|=l,i=f.alternate,i!==null&&(i.lanes|=l),Ic(f,l,t),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function jn(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var s=u.type;De(u.pendingProps.value,f.value)||(t!==null?t.push(s):t=[s])}}else if(u===rt.current){if(f=u.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(bu):t=[bu])}u=u.return}t!==null&&Pc(e,t,l,a),e.flags|=262144}function Fu(t){for(t=t.firstContext;t!==null;){if(!De(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function oa(t){ra=t,fl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pe(t){return vs(ra,t)}function Iu(t,e){return ra===null&&oa(t),vs(t,e)}function vs(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},fl===null){if(t===null)throw Error(r(308));fl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else fl=fl.next=e;return l}var $b=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Hb=n.unstable_scheduleCallback,kb=n.unstable_NormalPriority,ee={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tr(){return{controller:new $b,data:new Map,refCount:0}}function qn(t){t.refCount--,t.refCount===0&&Hb(kb,function(){t.controller.abort()})}var Yn=null,er=0,La=0,Ga=null;function Qb(t,e){if(Yn===null){var l=Yn=[];er=0,La=ao(),Ga={status:"pending",value:void 0,then:function(a){l.push(a)}}}return er++,e.then(gs,gs),e}function gs(){if(--er===0&&Yn!==null){Ga!==null&&(Ga.status="fulfilled");var t=Yn;Yn=null,La=0,Ga=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function jb(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var ys=z.S;z.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Qb(t,e),ys!==null&&ys(t,e)};var fa=B(null);function lr(){var t=fa.current;return t!==null?t:kt.pooledCache}function Pu(t,e){e===null?N(fa,fa.current):N(fa,e.pool)}function As(){var t=lr();return t===null?null:{parent:ee._currentValue,pool:t}}var Ln=Error(r(460)),xs=Error(r(474)),ti=Error(r(542)),ar={then:function(){}};function Ss(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ei(){}function Es(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(ei,ei),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ds(t),t;default:if(typeof e.status=="string")e.then(ei,ei);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ds(t),t}throw Gn=e,Ln}}var Gn=null;function Ts(){if(Gn===null)throw Error(r(459));var t=Gn;return Gn=null,t}function Ds(t){if(t===Ln||t===ti)throw Error(r(483))}var Rl=!1;function nr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ur(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ol(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(zt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Vu(t),ss(t,null,l),e}return Zu(t,a,e,l),Vu(t)}function Xn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,gf(t,l)}}function ir(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=f:i=i.next=f,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var cr=!1;function Zn(){if(cr){var t=Ga;if(t!==null)throw t}}function Vn(t,e,l,a){cr=!1;var u=t.updateQueue;Rl=!1;var i=u.firstBaseUpdate,f=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,S=h.next;h.next=null,f===null?i=S:f.next=S,f=h;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==f&&(s===null?_.firstBaseUpdate=S:s.next=S,_.lastBaseUpdate=h))}if(i!==null){var U=u.baseState;f=0,_=S=h=null,s=i;do{var E=s.lane&-536870913,T=E!==s.lane;if(T?(Tt&E)===E:(a&E)===E){E!==0&&E===La&&(cr=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var ot=t,it=s;E=e;var Nt=l;switch(it.tag){case 1:if(ot=it.payload,typeof ot=="function"){U=ot.call(Nt,U,E);break t}U=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=it.payload,E=typeof ot=="function"?ot.call(Nt,U,E):ot,E==null)break t;U=R({},U,E);break t;case 2:Rl=!0}}E=s.callback,E!==null&&(t.flags|=64,T&&(t.flags|=8192),T=u.callbacks,T===null?u.callbacks=[E]:T.push(E))}else T={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(S=_=T,h=U):_=_.next=T,f|=E;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;T=s,s=T.next,T.next=null,u.lastBaseUpdate=T,u.shared.pending=null}}while(!0);_===null&&(h=U),u.baseState=h,u.firstBaseUpdate=S,u.lastBaseUpdate=_,i===null&&(u.shared.lanes=0),Hl|=f,t.lanes=f,t.memoizedState=U}}function ws(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Rs(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)ws(l[t],e)}var Xa=B(null),li=B(0);function Os(t,e){t=gl,N(li,t),N(Xa,e),gl=t|e.baseLanes}function rr(){N(li,gl),N(Xa,Xa.current)}function or(){gl=li.current,j(Xa),j(li)}var Ml=0,vt=null,Ct=null,It=null,ai=!1,Za=!1,sa=!1,ni=0,Kn=0,Va=null,qb=0;function Jt(){throw Error(r(321))}function fr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!De(t[l],e[l]))return!1;return!0}function sr(t,e,l,a,u,i){return Ml=i,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?sd:dd,sa=!1,i=l(a,u),sa=!1,Za&&(i=Ms(e,l,a,u)),zs(t),i}function zs(t){z.H=fi;var e=Ct!==null&&Ct.next!==null;if(Ml=0,It=Ct=vt=null,ai=!1,Kn=0,Va=null,e)throw Error(r(300));t===null||ne||(t=t.dependencies,t!==null&&Fu(t)&&(ne=!0))}function Ms(t,e,l,a){vt=t;var u=0;do{if(Za&&(Va=null),Kn=0,Za=!1,25<=u)throw Error(r(301));if(u+=1,It=Ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Kb,i=e(l,a)}while(Za);return i}function Yb(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?Jn(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(vt.flags|=1024),e}function dr(){var t=ni!==0;return ni=0,t}function hr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function pr(t){if(ai){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ai=!1}Ml=0,It=Ct=vt=null,Za=!1,Kn=ni=0,Va=null}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?vt.memoizedState=It=t:It=It.next=t,It}function Pt(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?vt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw vt.alternate===null?Error(r(467)):Error(r(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?vt.memoizedState=It=t:It=It.next=t}return It}function br(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jn(t){var e=Kn;return Kn+=1,Va===null&&(Va=[]),t=Es(Va,t,e),e=vt,(It===null?e.memoizedState:It.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?sd:dd),t}function ui(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jn(t);if(t.$$typeof===q)return pe(t)}throw Error(r(438,String(t)))}function mr(t){var e=null,l=vt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=vt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=br(),vt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Zt;return e.index++,l}function dl(t,e){return typeof e=="function"?e(t):e}function ii(t){var e=Pt();return vr(e,Ct,t)}function vr(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var f=u.next;u.next=i.next,i.next=f}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=f=null,h=null,S=e,_=!1;do{var U=S.lane&-536870913;if(U!==S.lane?(Tt&U)===U:(Ml&U)===U){var E=S.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),U===La&&(_=!0);else if((Ml&E)===E){S=S.next,E===La&&(_=!0);continue}else U={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=U,f=i):h=h.next=U,vt.lanes|=E,Hl|=E;U=S.action,sa&&l(i,U),i=S.hasEagerState?S.eagerState:l(i,U)}else E={lane:U,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=E,f=i):h=h.next=E,vt.lanes|=U,Hl|=U;S=S.next}while(S!==null&&S!==e);if(h===null?f=i:h.next=s,!De(i,t.memoizedState)&&(ne=!0,_&&(l=Ga,l!==null)))throw l;t.memoizedState=i,t.baseState=f,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function gr(t){var e=Pt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var f=u=u.next;do i=t(i,f.action),f=f.next;while(f!==u);De(i,e.memoizedState)||(ne=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function _s(t,e,l){var a=vt,u=Pt(),i=wt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var f=!De((Ct||u).memoizedState,l);f&&(u.memoizedState=l,ne=!0),u=u.queue;var s=Ns.bind(null,a,u,t);if(Wn(2048,8,s,[t]),u.getSnapshot!==e||f||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Ka(9,ci(),Bs.bind(null,a,u,l,e),null),kt===null)throw Error(r(349));i||(Ml&124)!==0||Cs(a,e,l)}return l}function Cs(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=vt.updateQueue,e===null?(e=br(),vt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Bs(t,e,l,a){e.value=l,e.getSnapshot=a,Us(e)&&$s(t)}function Ns(t,e,l){return l(function(){Us(e)&&$s(t)})}function Us(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!De(t,l)}catch{return!0}}function $s(t){var e=Qa(t,2);e!==null&&_e(e,t,2)}function yr(t){var e=Ae();if(typeof t=="function"){var l=t;if(t=l(),sa){El(!0);try{l()}finally{El(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e}function Hs(t,e,l,a){return t.baseState=l,vr(t,Ct,typeof a=="function"?a:dl)}function Lb(t,e,l,a,u){if(oi(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};z.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,ks(e,i)):(i.next=l.next,e.pending=l.next=i)}}function ks(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=z.T,f={};z.T=f;try{var s=l(u,a),h=z.S;h!==null&&h(f,s),Qs(t,e,s)}catch(S){Ar(t,e,S)}finally{z.T=i}}else try{i=l(u,a),Qs(t,e,i)}catch(S){Ar(t,e,S)}}function Qs(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){js(t,e,a)},function(a){return Ar(t,e,a)}):js(t,e,l)}function js(t,e,l){e.status="fulfilled",e.value=l,qs(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,ks(t,l)))}function Ar(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,qs(e),e=e.next;while(e!==a)}t.action=null}function qs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ys(t,e){return e}function Ls(t,e){if(wt){var l=kt.formState;if(l!==null){t:{var a=vt;if(wt){if(Lt){e:{for(var u=Lt,i=We;u.nodeType!==8;){if(!i){u=null;break e}if(u=Ze(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){Lt=Ze(u.nextSibling),a=u.data==="F!";break t}}ca(a)}a=!1}a&&(e=l[0])}}return l=Ae(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:e},l.queue=a,l=rd.bind(null,vt,a),a.dispatch=l,a=yr(!1),i=Dr.bind(null,vt,!1,a.queue),a=Ae(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Lb.bind(null,vt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function Gs(t){var e=Pt();return Xs(e,Ct,t)}function Xs(t,e,l){if(e=vr(t,e,Ys)[0],t=ii(dl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Jn(e)}catch(f){throw f===Ln?ti:f}else a=e;e=Pt();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(vt.flags|=2048,Ka(9,ci(),Gb.bind(null,u,l),null)),[a,i,t]}function Gb(t,e){t.action=e}function Zs(t){var e=Pt(),l=Ct;if(l!==null)return Xs(e,l,t);Pt(),e=e.memoizedState,l=Pt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ka(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=vt.updateQueue,e===null&&(e=br(),vt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ci(){return{destroy:void 0,resource:void 0}}function Vs(){return Pt().memoizedState}function ri(t,e,l,a){var u=Ae();a=a===void 0?null:a,vt.flags|=t,u.memoizedState=Ka(1|e,ci(),l,a)}function Wn(t,e,l,a){var u=Pt();a=a===void 0?null:a;var i=u.memoizedState.inst;Ct!==null&&a!==null&&fr(a,Ct.memoizedState.deps)?u.memoizedState=Ka(e,i,l,a):(vt.flags|=t,u.memoizedState=Ka(1|e,i,l,a))}function Ks(t,e){ri(8390656,8,t,e)}function Js(t,e){Wn(2048,8,t,e)}function Ws(t,e){return Wn(4,2,t,e)}function Fs(t,e){return Wn(4,4,t,e)}function Is(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ps(t,e,l){l=l!=null?l.concat([t]):null,Wn(4,4,Is.bind(null,e,t),l)}function xr(){}function td(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&fr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function ed(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&fr(e,a[1]))return a[0];if(a=t(),sa){El(!0);try{t()}finally{El(!1)}}return l.memoizedState=[a,e],a}function Sr(t,e,l){return l===void 0||(Ml&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=n0(),vt.lanes|=t,Hl|=t,l)}function ld(t,e,l,a){return De(l,e)?l:Xa.current!==null?(t=Sr(t,l,a),De(t,e)||(ne=!0),t):(Ml&42)===0?(ne=!0,t.memoizedState=l):(t=n0(),vt.lanes|=t,Hl|=t,e)}function ad(t,e,l,a,u){var i=Y.p;Y.p=i!==0&&8>i?i:8;var f=z.T,s={};z.T=s,Dr(t,!1,e,l);try{var h=u(),S=z.S;if(S!==null&&S(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=jb(h,a);Fn(t,e,_,Me(t))}else Fn(t,e,a,Me(t))}catch(U){Fn(t,e,{then:function(){},status:"rejected",reason:U},Me())}finally{Y.p=i,z.T=f}}function Xb(){}function Er(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=nd(t).queue;ad(t,u,e,G,l===null?Xb:function(){return ud(t),l(a)})}function nd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:G},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ud(t){var e=nd(t).next.queue;Fn(t,e,{},Me())}function Tr(){return pe(bu)}function id(){return Pt().memoizedState}function cd(){return Pt().memoizedState}function Zb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Me();t=Ol(l);var a=zl(e,t,l);a!==null&&(_e(a,e,l),Xn(a,e,l)),e={cache:tr()},t.payload=e;return}e=e.return}}function Vb(t,e,l){var a=Me();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},oi(t)?od(e,l):(l=Gc(t,e,l,a),l!==null&&(_e(l,t,a),fd(l,e,a)))}function rd(t,e,l){var a=Me();Fn(t,e,l,a)}function Fn(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(oi(t))od(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var f=e.lastRenderedState,s=i(f,l);if(u.hasEagerState=!0,u.eagerState=s,De(s,f))return Zu(t,e,u,0),kt===null&&Xu(),!1}catch{}finally{}if(l=Gc(t,e,u,a),l!==null)return _e(l,t,a),fd(l,e,a),!0}return!1}function Dr(t,e,l,a){if(a={lane:2,revertLane:ao(),action:a,hasEagerState:!1,eagerState:null,next:null},oi(t)){if(e)throw Error(r(479))}else e=Gc(t,l,a,2),e!==null&&_e(e,t,2)}function oi(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function od(t,e){Za=ai=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function fd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,gf(t,l)}}var fi={readContext:pe,use:ui,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},sd={readContext:pe,use:ui,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:pe,useEffect:Ks,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ri(4194308,4,Is.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ri(4194308,4,t,e)},useInsertionEffect:function(t,e){ri(4,2,t,e)},useMemo:function(t,e){var l=Ae();e=e===void 0?null:e;var a=t();if(sa){El(!0);try{t()}finally{El(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ae();if(l!==void 0){var u=l(e);if(sa){El(!0);try{l(e)}finally{El(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Vb.bind(null,vt,t),[a.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:function(t){t=yr(t);var e=t.queue,l=rd.bind(null,vt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:xr,useDeferredValue:function(t,e){var l=Ae();return Sr(l,t,e)},useTransition:function(){var t=yr(!1);return t=ad.bind(null,vt,t.queue,!0,!1),Ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=vt,u=Ae();if(wt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),kt===null)throw Error(r(349));(Tt&124)!==0||Cs(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,Ks(Ns.bind(null,a,i,t),[t]),a.flags|=2048,Ka(9,ci(),Bs.bind(null,a,i,l,e),null),l},useId:function(){var t=Ae(),e=kt.identifierPrefix;if(wt){var l=ol,a=rl;l=(a&~(1<<32-Te(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ni++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=qb++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Tr,useFormState:Ls,useActionState:Ls,useOptimistic:function(t){var e=Ae();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Dr.bind(null,vt,!0,l),l.dispatch=e,[t,e]},useMemoCache:mr,useCacheRefresh:function(){return Ae().memoizedState=Zb.bind(null,vt)}},dd={readContext:pe,use:ui,useCallback:td,useContext:pe,useEffect:Js,useImperativeHandle:Ps,useInsertionEffect:Ws,useLayoutEffect:Fs,useMemo:ed,useReducer:ii,useRef:Vs,useState:function(){return ii(dl)},useDebugValue:xr,useDeferredValue:function(t,e){var l=Pt();return ld(l,Ct.memoizedState,t,e)},useTransition:function(){var t=ii(dl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:_s,useId:id,useHostTransitionStatus:Tr,useFormState:Gs,useActionState:Gs,useOptimistic:function(t,e){var l=Pt();return Hs(l,Ct,t,e)},useMemoCache:mr,useCacheRefresh:cd},Kb={readContext:pe,use:ui,useCallback:td,useContext:pe,useEffect:Js,useImperativeHandle:Ps,useInsertionEffect:Ws,useLayoutEffect:Fs,useMemo:ed,useReducer:gr,useRef:Vs,useState:function(){return gr(dl)},useDebugValue:xr,useDeferredValue:function(t,e){var l=Pt();return Ct===null?Sr(l,t,e):ld(l,Ct.memoizedState,t,e)},useTransition:function(){var t=gr(dl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:_s,useId:id,useHostTransitionStatus:Tr,useFormState:Zs,useActionState:Zs,useOptimistic:function(t,e){var l=Pt();return Ct!==null?Hs(l,Ct,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:mr,useCacheRefresh:cd},Ja=null,In=0;function si(t){var e=In;return In+=1,Ja===null&&(Ja=[]),Es(Ja,t,e)}function Pn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function di(t,e){throw e.$$typeof===O?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function hd(t){var e=t._init;return e(t._payload)}function pd(t){function e(y,v){if(t){var x=y.deletions;x===null?(y.deletions=[v],y.flags|=16):x.push(v)}}function l(y,v){if(!t)return null;for(;v!==null;)e(y,v),v=v.sibling;return null}function a(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function u(y,v){return y=cl(y,v),y.index=0,y.sibling=null,y}function i(y,v,x){return y.index=x,t?(x=y.alternate,x!==null?(x=x.index,x<v?(y.flags|=67108866,v):x):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function f(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function s(y,v,x,C){return v===null||v.tag!==6?(v=Zc(x,y.mode,C),v.return=y,v):(v=u(v,x),v.return=y,v)}function h(y,v,x,C){var at=x.type;return at===J?_(y,v,x.props.children,C,x.key):v!==null&&(v.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===St&&hd(at)===v.type)?(v=u(v,x.props),Pn(v,x),v.return=y,v):(v=Ku(x.type,x.key,x.props,null,y.mode,C),Pn(v,x),v.return=y,v)}function S(y,v,x,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Vc(x,y.mode,C),v.return=y,v):(v=u(v,x.children||[]),v.return=y,v)}function _(y,v,x,C,at){return v===null||v.tag!==7?(v=aa(x,y.mode,C,at),v.return=y,v):(v=u(v,x),v.return=y,v)}function U(y,v,x){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Zc(""+v,y.mode,x),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $:return x=Ku(v.type,v.key,v.props,null,y.mode,x),Pn(x,v),x.return=y,x;case V:return v=Vc(v,y.mode,x),v.return=y,v;case St:var C=v._init;return v=C(v._payload),U(y,v,x)}if(gt(v)||bt(v))return v=aa(v,y.mode,x,null),v.return=y,v;if(typeof v.then=="function")return U(y,si(v),x);if(v.$$typeof===q)return U(y,Iu(y,v),x);di(y,v)}return null}function E(y,v,x,C){var at=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return at!==null?null:s(y,v,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $:return x.key===at?h(y,v,x,C):null;case V:return x.key===at?S(y,v,x,C):null;case St:return at=x._init,x=at(x._payload),E(y,v,x,C)}if(gt(x)||bt(x))return at!==null?null:_(y,v,x,C,null);if(typeof x.then=="function")return E(y,v,si(x),C);if(x.$$typeof===q)return E(y,v,Iu(y,x),C);di(y,x)}return null}function T(y,v,x,C,at){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return y=y.get(x)||null,s(v,y,""+C,at);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case $:return y=y.get(C.key===null?x:C.key)||null,h(v,y,C,at);case V:return y=y.get(C.key===null?x:C.key)||null,S(v,y,C,at);case St:var yt=C._init;return C=yt(C._payload),T(y,v,x,C,at)}if(gt(C)||bt(C))return y=y.get(x)||null,_(v,y,C,at,null);if(typeof C.then=="function")return T(y,v,x,si(C),at);if(C.$$typeof===q)return T(y,v,x,Iu(v,C),at);di(v,C)}return null}function ot(y,v,x,C){for(var at=null,yt=null,nt=v,ct=v=0,ie=null;nt!==null&&ct<x.length;ct++){nt.index>ct?(ie=nt,nt=null):ie=nt.sibling;var Dt=E(y,nt,x[ct],C);if(Dt===null){nt===null&&(nt=ie);break}t&&nt&&Dt.alternate===null&&e(y,nt),v=i(Dt,v,ct),yt===null?at=Dt:yt.sibling=Dt,yt=Dt,nt=ie}if(ct===x.length)return l(y,nt),wt&&ua(y,ct),at;if(nt===null){for(;ct<x.length;ct++)nt=U(y,x[ct],C),nt!==null&&(v=i(nt,v,ct),yt===null?at=nt:yt.sibling=nt,yt=nt);return wt&&ua(y,ct),at}for(nt=a(nt);ct<x.length;ct++)ie=T(nt,y,ct,x[ct],C),ie!==null&&(t&&ie.alternate!==null&&nt.delete(ie.key===null?ct:ie.key),v=i(ie,v,ct),yt===null?at=ie:yt.sibling=ie,yt=ie);return t&&nt.forEach(function(Zl){return e(y,Zl)}),wt&&ua(y,ct),at}function it(y,v,x,C){if(x==null)throw Error(r(151));for(var at=null,yt=null,nt=v,ct=v=0,ie=null,Dt=x.next();nt!==null&&!Dt.done;ct++,Dt=x.next()){nt.index>ct?(ie=nt,nt=null):ie=nt.sibling;var Zl=E(y,nt,Dt.value,C);if(Zl===null){nt===null&&(nt=ie);break}t&&nt&&Zl.alternate===null&&e(y,nt),v=i(Zl,v,ct),yt===null?at=Zl:yt.sibling=Zl,yt=Zl,nt=ie}if(Dt.done)return l(y,nt),wt&&ua(y,ct),at;if(nt===null){for(;!Dt.done;ct++,Dt=x.next())Dt=U(y,Dt.value,C),Dt!==null&&(v=i(Dt,v,ct),yt===null?at=Dt:yt.sibling=Dt,yt=Dt);return wt&&ua(y,ct),at}for(nt=a(nt);!Dt.done;ct++,Dt=x.next())Dt=T(nt,y,ct,Dt.value,C),Dt!==null&&(t&&Dt.alternate!==null&&nt.delete(Dt.key===null?ct:Dt.key),v=i(Dt,v,ct),yt===null?at=Dt:yt.sibling=Dt,yt=Dt);return t&&nt.forEach(function(Jm){return e(y,Jm)}),wt&&ua(y,ct),at}function Nt(y,v,x,C){if(typeof x=="object"&&x!==null&&x.type===J&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case $:t:{for(var at=x.key;v!==null;){if(v.key===at){if(at=x.type,at===J){if(v.tag===7){l(y,v.sibling),C=u(v,x.props.children),C.return=y,y=C;break t}}else if(v.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===St&&hd(at)===v.type){l(y,v.sibling),C=u(v,x.props),Pn(C,x),C.return=y,y=C;break t}l(y,v);break}else e(y,v);v=v.sibling}x.type===J?(C=aa(x.props.children,y.mode,C,x.key),C.return=y,y=C):(C=Ku(x.type,x.key,x.props,null,y.mode,C),Pn(C,x),C.return=y,y=C)}return f(y);case V:t:{for(at=x.key;v!==null;){if(v.key===at)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){l(y,v.sibling),C=u(v,x.children||[]),C.return=y,y=C;break t}else{l(y,v);break}else e(y,v);v=v.sibling}C=Vc(x,y.mode,C),C.return=y,y=C}return f(y);case St:return at=x._init,x=at(x._payload),Nt(y,v,x,C)}if(gt(x))return ot(y,v,x,C);if(bt(x)){if(at=bt(x),typeof at!="function")throw Error(r(150));return x=at.call(x),it(y,v,x,C)}if(typeof x.then=="function")return Nt(y,v,si(x),C);if(x.$$typeof===q)return Nt(y,v,Iu(y,x),C);di(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,v!==null&&v.tag===6?(l(y,v.sibling),C=u(v,x),C.return=y,y=C):(l(y,v),C=Zc(x,y.mode,C),C.return=y,y=C),f(y)):l(y,v)}return function(y,v,x,C){try{In=0;var at=Nt(y,v,x,C);return Ja=null,at}catch(nt){if(nt===Ln||nt===ti)throw nt;var yt=we(29,nt,null,y.mode);return yt.lanes=C,yt.return=y,yt}finally{}}}var Wa=pd(!0),bd=pd(!1),Qe=B(null),Fe=null;function _l(t){var e=t.alternate;N(le,le.current&1),N(Qe,t),Fe===null&&(e===null||Xa.current!==null||e.memoizedState!==null)&&(Fe=t)}function md(t){if(t.tag===22){if(N(le,le.current),N(Qe,t),Fe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Fe=t)}}else Cl()}function Cl(){N(le,le.current),N(Qe,Qe.current)}function hl(t){j(Qe),Fe===t&&(Fe=null),j(le)}var le=B(0);function hi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||mo(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function wr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Rr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Ol(a);u.payload=e,l!=null&&(u.callback=l),e=zl(t,u,a),e!==null&&(_e(e,t,a),Xn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Ol(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=zl(t,u,a),e!==null&&(_e(e,t,a),Xn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Me(),a=Ol(l);a.tag=2,e!=null&&(a.callback=e),e=zl(t,a,l),e!==null&&(_e(e,t,l),Xn(e,t,l))}};function vd(t,e,l,a,u,i,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,f):e.prototype&&e.prototype.isPureReactComponent?!Un(l,a)||!Un(u,i):!0}function gd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Rr.enqueueReplaceState(e,e.state,null)}function da(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var pi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function yd(t){pi(t)}function Ad(t){console.error(t)}function xd(t){pi(t)}function bi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Sd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Or(t,e,l){return l=Ol(l),l.tag=3,l.payload={element:null},l.callback=function(){bi(t,e)},l}function Ed(t){return t=Ol(t),t.tag=3,t}function Td(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){Sd(e,l,a)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){Sd(e,l,a),typeof u!="function"&&(kl===null?kl=new Set([this]):kl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Jb(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&jn(e,l,u,!0),l=Qe.current,l!==null){switch(l.tag){case 13:return Fe===null?Ir():l.alternate===null&&Gt===0&&(Gt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===ar?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),to(t,a,u)),!1;case 22:return l.flags|=65536,a===ar?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),to(t,a,u)),!1}throw Error(r(435,l.tag))}return to(t,a,u),Ir(),!1}if(wt)return e=Qe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Wc&&(t=Error(r(422),{cause:a}),Qn(Ue(t,l)))):(a!==Wc&&(e=Error(r(423),{cause:a}),Qn(Ue(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Ue(a,l),u=Or(t.stateNode,a,u),ir(t,u),Gt!==4&&(Gt=2)),!1;var i=Error(r(520),{cause:a});if(i=Ue(i,l),iu===null?iu=[i]:iu.push(i),Gt!==4&&(Gt=2),e===null)return!0;a=Ue(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=Or(l.stateNode,a,t),ir(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(kl===null||!kl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Ed(u),Td(u,t,l,a),ir(l,u),!1}l=l.return}while(l!==null);return!1}var Dd=Error(r(461)),ne=!1;function oe(t,e,l,a){e.child=t===null?bd(e,null,l,a):Wa(e,t.child,l,a)}function wd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var f={};for(var s in a)s!=="ref"&&(f[s]=a[s])}else f=a;return oa(e),a=sr(t,e,l,f,i,u),s=dr(),t!==null&&!ne?(hr(t,e,u),pl(t,e,u)):(wt&&s&&Kc(e),e.flags|=1,oe(t,e,a,u),e.child)}function Rd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Xc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Od(t,e,i,a,u)):(t=Ku(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!$r(t,u)){var f=i.memoizedProps;if(l=l.compare,l=l!==null?l:Un,l(f,a)&&t.ref===e.ref)return pl(t,e,u)}return e.flags|=1,t=cl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Od(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(Un(i,a)&&t.ref===e.ref)if(ne=!1,e.pendingProps=a=i,$r(t,u))(t.flags&131072)!==0&&(ne=!0);else return e.lanes=t.lanes,pl(t,e,u)}return zr(t,e,l,a,u)}function zd(t,e,l){var a=e.pendingProps,u=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(u=e.child=t.child,i=0;u!==null;)i=i|u.lanes|u.childLanes,u=u.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Md(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pu(e,i!==null?i.cachePool:null),i!==null?Os(e,i):rr(),md(e);else return e.lanes=e.childLanes=536870912,Md(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(Pu(e,i.cachePool),Os(e,i),Cl(),e.memoizedState=null):(t!==null&&Pu(e,null),rr(),Cl());return oe(t,e,u,l),e.child}function Md(t,e,l,a){var u=lr();return u=u===null?null:{parent:ee._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Pu(e,null),rr(),md(e),t!==null&&jn(t,e,a,!0),null}function mi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function zr(t,e,l,a,u){return oa(e),l=sr(t,e,l,a,void 0,u),a=dr(),t!==null&&!ne?(hr(t,e,u),pl(t,e,u)):(wt&&a&&Kc(e),e.flags|=1,oe(t,e,l,u),e.child)}function _d(t,e,l,a,u,i){return oa(e),e.updateQueue=null,l=Ms(e,a,l,u),zs(t),a=dr(),t!==null&&!ne?(hr(t,e,i),pl(t,e,i)):(wt&&a&&Kc(e),e.flags|=1,oe(t,e,l,i),e.child)}function Cd(t,e,l,a,u){if(oa(e),e.stateNode===null){var i=ja,f=l.contextType;typeof f=="object"&&f!==null&&(i=pe(f)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Rr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},nr(e),f=l.contextType,i.context=typeof f=="object"&&f!==null?pe(f):ja,i.state=e.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(wr(e,l,f,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&Rr.enqueueReplaceState(i,i.state,null),Vn(e,a,i,u),Zn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=da(l,s);i.props=h;var S=i.context,_=l.contextType;f=ja,typeof _=="object"&&_!==null&&(f=pe(_));var U=l.getDerivedStateFromProps;_=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||S!==f)&&gd(e,i,a,f),Rl=!1;var E=e.memoizedState;i.state=E,Vn(e,a,i,u),Zn(),S=e.memoizedState,s||E!==S||Rl?(typeof U=="function"&&(wr(e,l,U,a),S=e.memoizedState),(h=Rl||vd(e,l,h,a,E,S,f))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=S),i.props=a,i.state=S,i.context=f,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,ur(t,e),f=e.memoizedProps,_=da(l,f),i.props=_,U=e.pendingProps,E=i.context,S=l.contextType,h=ja,typeof S=="object"&&S!==null&&(h=pe(S)),s=l.getDerivedStateFromProps,(S=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==U||E!==h)&&gd(e,i,a,h),Rl=!1,E=e.memoizedState,i.state=E,Vn(e,a,i,u),Zn();var T=e.memoizedState;f!==U||E!==T||Rl||t!==null&&t.dependencies!==null&&Fu(t.dependencies)?(typeof s=="function"&&(wr(e,l,s,a),T=e.memoizedState),(_=Rl||vd(e,l,_,a,E,T,h)||t!==null&&t.dependencies!==null&&Fu(t.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),i.props=a,i.state=T,i.context=h,a=_):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,mi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Wa(e,t.child,null,u),e.child=Wa(e,null,l,u)):oe(t,e,l,u),e.memoizedState=i.state,t=e.child):t=pl(t,e,u),t}function Bd(t,e,l,a){return kn(),e.flags|=256,oe(t,e,l,a),e.child}var Mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _r(t){return{baseLanes:t,cachePool:As()}}function Cr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=je),t}function Nd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,f;if((f=i)||(f=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),f&&(u=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(wt){if(u?_l(e):Cl(),wt){var s=Lt,h;if(h=s){t:{for(h=s,s=We;h.nodeType!==8;){if(!s){s=null;break t}if(h=Ze(h.nextSibling),h===null){s=null;break t}}s=h}s!==null?(e.memoizedState={dehydrated:s,treeContext:na!==null?{id:rl,overflow:ol}:null,retryLane:536870912,hydrationErrors:null},h=we(18,null,null,0),h.stateNode=s,h.return=e,e.child=h,me=e,Lt=null,h=!0):h=!1}h||ca(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return mo(s)?e.lanes=32:e.lanes=536870912,null;hl(e)}return s=a.children,a=a.fallback,u?(Cl(),u=e.mode,s=vi({mode:"hidden",children:s},u),a=aa(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,u=e.child,u.memoizedState=_r(l),u.childLanes=Cr(t,f,l),e.memoizedState=Mr,a):(_l(e),Br(e,s))}if(h=t.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(_l(e),e.flags&=-257,e=Nr(t,e,l)):e.memoizedState!==null?(Cl(),e.child=t.child,e.flags|=128,e=null):(Cl(),u=a.fallback,s=e.mode,a=vi({mode:"visible",children:a.children},s),u=aa(u,s,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,Wa(e,t.child,null,l),a=e.child,a.memoizedState=_r(l),a.childLanes=Cr(t,f,l),e.memoizedState=Mr,e=u);else if(_l(e),mo(s)){if(f=s.nextSibling&&s.nextSibling.dataset,f)var S=f.dgst;f=S,a=Error(r(419)),a.stack="",a.digest=f,Qn({value:a,source:null,stack:null}),e=Nr(t,e,l)}else if(ne||jn(t,e,l,!1),f=(l&t.childLanes)!==0,ne||f){if(f=kt,f!==null&&(a=l&-l,a=(a&42)!==0?1:mc(a),a=(a&(f.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,Qa(t,a),_e(f,t,a),Dd;s.data==="$?"||Ir(),e=Nr(t,e,l)}else s.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,Lt=Ze(s.nextSibling),me=e,wt=!0,ia=null,We=!1,t!==null&&(He[ke++]=rl,He[ke++]=ol,He[ke++]=na,rl=t.id,ol=t.overflow,na=e),e=Br(e,a.children),e.flags|=4096);return e}return u?(Cl(),u=a.fallback,s=e.mode,h=t.child,S=h.sibling,a=cl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,S!==null?u=cl(S,u):(u=aa(u,s,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,s=t.child.memoizedState,s===null?s=_r(l):(h=s.cachePool,h!==null?(S=ee._currentValue,h=h.parent!==S?{parent:S,pool:S}:h):h=As(),s={baseLanes:s.baseLanes|l,cachePool:h}),u.memoizedState=s,u.childLanes=Cr(t,f,l),e.memoizedState=Mr,a):(_l(e),l=t.child,t=l.sibling,l=cl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=l,e.memoizedState=null,l)}function Br(t,e){return e=vi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vi(t,e){return t=we(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Nr(t,e,l){return Wa(e,t.child,null,l),t=Br(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ud(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ic(t.return,e,l)}function Ur(t,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u)}function $d(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;if(oe(t,e,a.children,l),a=le.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ud(t,l,e);else if(t.tag===19)Ud(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(N(le,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&hi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),Ur(e,!1,u,l,i);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&hi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}Ur(e,!0,l,null,i);break;case"together":Ur(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Hl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(jn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=cl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=cl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function $r(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Fu(t)))}function Wb(t,e,l){switch(e.tag){case 3:dt(e,e.stateNode.containerInfo),wl(e,ee,t.memoizedState.cache),kn();break;case 27:case 5:st(e);break;case 4:dt(e,e.stateNode.containerInfo);break;case 10:wl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(_l(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Nd(t,e,l):(_l(e),t=pl(t,e,l),t!==null?t.sibling:null);_l(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(jn(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return $d(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),N(le,le.current),a)break;return null;case 22:case 23:return e.lanes=0,zd(t,e,l);case 24:wl(e,ee,t.memoizedState.cache)}return pl(t,e,l)}function Hd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ne=!0;else{if(!$r(t,l)&&(e.flags&128)===0)return ne=!1,Wb(t,e,l);ne=(t.flags&131072)!==0}else ne=!1,wt&&(e.flags&1048576)!==0&&hs(e,Wu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")Xc(a)?(t=da(a,t),e.tag=1,e=Cd(null,e,a,t,l)):(e.tag=0,e=zr(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===et){e.tag=11,e=wd(null,e,a,t,l);break t}else if(u===I){e.tag=14,e=Rd(null,e,a,t,l);break t}}throw e=$t(a)||a,Error(r(306,e,""))}}return e;case 0:return zr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=da(a,e.pendingProps),Cd(t,e,a,u,l);case 3:t:{if(dt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,ur(t,e),Vn(e,a,null,l);var f=e.memoizedState;if(a=f.cache,wl(e,ee,a),a!==i.cache&&Pc(e,[ee],l,!0),Zn(),a=f.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Bd(t,e,a,l);break t}else if(a!==u){u=Ue(Error(r(424)),e),Qn(u),e=Bd(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Lt=Ze(t.firstChild),me=e,wt=!0,ia=null,We=!0,l=bd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(kn(),a===u){e=pl(t,e,l);break t}oe(t,e,a,l)}e=e.child}return e;case 26:return mi(t,e),t===null?(l=q0(e.type,null,e.pendingProps,null))?e.memoizedState=l:wt||(l=e.type,t=e.pendingProps,a=_i(Z.current).createElement(l),a[he]=e,a[ge]=t,se(a,l,t),ae(a),e.stateNode=a):e.memoizedState=q0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return st(e),t===null&&wt&&(a=e.stateNode=k0(e.type,e.pendingProps,Z.current),me=e,We=!0,u=Lt,ql(e.type)?(vo=u,Lt=Ze(a.firstChild)):Lt=u),oe(t,e,e.pendingProps.children,l),mi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&wt&&((u=a=Lt)&&(a=Tm(a,e.type,e.pendingProps,We),a!==null?(e.stateNode=a,me=e,Lt=Ze(a.firstChild),We=!1,u=!0):u=!1),u||ca(e)),st(e),u=e.type,i=e.pendingProps,f=t!==null?t.memoizedProps:null,a=i.children,ho(u,i)?a=null:f!==null&&ho(u,f)&&(e.flags|=32),e.memoizedState!==null&&(u=sr(t,e,Yb,null,null,l),bu._currentValue=u),mi(t,e),oe(t,e,a,l),e.child;case 6:return t===null&&wt&&((t=l=Lt)&&(l=Dm(l,e.pendingProps,We),l!==null?(e.stateNode=l,me=e,Lt=null,t=!0):t=!1),t||ca(e)),null;case 13:return Nd(t,e,l);case 4:return dt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Wa(e,null,a,l):oe(t,e,a,l),e.child;case 11:return wd(t,e,e.type,e.pendingProps,l);case 7:return oe(t,e,e.pendingProps,l),e.child;case 8:return oe(t,e,e.pendingProps.children,l),e.child;case 12:return oe(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,wl(e,e.type,a.value),oe(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,oa(e),u=pe(u),a=a(u),e.flags|=1,oe(t,e,a,l),e.child;case 14:return Rd(t,e,e.type,e.pendingProps,l);case 15:return Od(t,e,e.type,e.pendingProps,l);case 19:return $d(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=vi(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=cl(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return zd(t,e,l);case 24:return oa(e),a=pe(ee),t===null?(u=lr(),u===null&&(u=kt,i=tr(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},nr(e),wl(e,ee,u)):((t.lanes&l)!==0&&(ur(t,e),Vn(e,null,null,l),Zn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),wl(e,ee,a)):(a=i.cache,wl(e,ee,a),a!==u.cache&&Pc(e,[ee],l,!0))),oe(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function bl(t){t.flags|=4}function kd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Z0(e)){if(e=Qe.current,e!==null&&((Tt&4194048)===Tt?Fe!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||e!==Fe))throw Gn=ar,xs;t.flags|=8192}}function gi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?mf():536870912,t.lanes|=e,tn|=e)}function tu(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Fb(t,e,l){var a=e.pendingProps;switch(Jc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return Yt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),sl(ee),k(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Hn(e)?bl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ms())),Yt(e),null;case 26:return l=e.memoizedState,t===null?(bl(e),l!==null?(Yt(e),kd(e,l)):(Yt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(bl(e),Yt(e),kd(e,l)):(Yt(e),e.flags&=-16777217):(t.memoizedProps!==a&&bl(e),Yt(e),e.flags&=-16777217),null;case 27:ht(e),l=Z.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&bl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Yt(e),null}t=Q.current,Hn(e)?ps(e):(t=k0(u,a,l),e.stateNode=t,bl(e))}return Yt(e),null;case 5:if(ht(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&bl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Yt(e),null}if(t=Q.current,Hn(e))ps(e);else{switch(u=_i(Z.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[he]=e,t[ge]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(se(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&bl(e)}}return Yt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&bl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=Z.current,Hn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=me,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[he]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||_0(t.nodeValue,l)),t||ca(e)}else t=_i(t).createTextNode(a),t[he]=e,e.stateNode=t}return Yt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Hn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[he]=e}else kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Yt(e),u=!1}else u=ms(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(hl(e),e):(hl(e),null)}if(hl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),gi(e,e.updateQueue),Yt(e),null;case 4:return k(),t===null&&co(e.stateNode.containerInfo),Yt(e),null;case 10:return sl(e.type),Yt(e),null;case 19:if(j(le),u=e.memoizedState,u===null)return Yt(e),null;if(a=(e.flags&128)!==0,i=u.rendering,i===null)if(a)tu(u,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=hi(t),i!==null){for(e.flags|=128,tu(u,!1),t=i.updateQueue,e.updateQueue=t,gi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)ds(l,t),l=l.sibling;return N(le,le.current&1|2),e.child}t=t.sibling}u.tail!==null&&Ft()>xi&&(e.flags|=128,a=!0,tu(u,!1),e.lanes=4194304)}else{if(!a)if(t=hi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,gi(e,t),tu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!wt)return Yt(e),null}else 2*Ft()-u.renderingStartTime>xi&&l!==536870912&&(e.flags|=128,a=!0,tu(u,!1),e.lanes=4194304);u.isBackwards?(i.sibling=e.child,e.child=i):(t=u.last,t!==null?t.sibling=i:e.child=i,u.last=i)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Ft(),e.sibling=null,t=le.current,N(le,a?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return hl(e),or(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),l=e.updateQueue,l!==null&&gi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&j(fa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),sl(ee),Yt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Ib(t,e){switch(Jc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sl(ee),k(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ht(e),null;case 13:if(hl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(le),null;case 4:return k(),null;case 10:return sl(e.type),null;case 22:case 23:return hl(e),or(),t!==null&&j(fa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sl(ee),null;case 25:return null;default:return null}}function Qd(t,e){switch(Jc(e),e.tag){case 3:sl(ee),k();break;case 26:case 27:case 5:ht(e);break;case 4:k();break;case 13:hl(e);break;case 19:j(le);break;case 10:sl(e.type);break;case 22:case 23:hl(e),or(),t!==null&&j(fa);break;case 24:sl(ee)}}function eu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,f=l.inst;a=i(),f.destroy=a}l=l.next}while(l!==u)}}catch(s){Ht(e,e.return,s)}}function Bl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var f=a.inst,s=f.destroy;if(s!==void 0){f.destroy=void 0,u=e;var h=l,S=s;try{S()}catch(_){Ht(u,h,_)}}}a=a.next}while(a!==i)}}catch(_){Ht(e,e.return,_)}}function jd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Rs(e,l)}catch(a){Ht(t,t.return,a)}}}function qd(t,e,l){l.props=da(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ht(t,e,a)}}function lu(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Ht(t,e,u)}}function Ie(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Ht(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Ht(t,e,u)}else l.current=null}function Yd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Ht(t,t.return,u)}}function Hr(t,e,l){try{var a=t.stateNode;ym(a,t.type,l,e),a[ge]=e}catch(u){Ht(t,t.return,u)}}function Ld(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ql(t.type)||t.tag===4}function kr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ld(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ql(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Mi));else if(a!==4&&(a===27&&ql(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Qr(t,e,l),t=t.sibling;t!==null;)Qr(t,e,l),t=t.sibling}function yi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&ql(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(yi(t,e,l),t=t.sibling;t!==null;)yi(t,e,l),t=t.sibling}function Gd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);se(e,a,l),e[he]=t,e[ge]=l}catch(i){Ht(t,t.return,i)}}var ml=!1,Wt=!1,jr=!1,Xd=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Pb(t,e){if(t=t.containerInfo,fo=Hi,t=ls(t),kc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var f=0,s=-1,h=-1,S=0,_=0,U=t,E=null;e:for(;;){for(var T;U!==l||u!==0&&U.nodeType!==3||(s=f+u),U!==i||a!==0&&U.nodeType!==3||(h=f+a),U.nodeType===3&&(f+=U.nodeValue.length),(T=U.firstChild)!==null;)E=U,U=T;for(;;){if(U===t)break e;if(E===l&&++S===u&&(s=f),E===i&&++_===a&&(h=f),(T=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=T}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(so={focusedElem:t,selectionRange:l},Hi=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){switch(e=ue,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var ot=da(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ot,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(it){Ht(l,l.return,it)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)bo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function Zd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Nl(t,l),a&4&&eu(5,l);break;case 1:if(Nl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(f){Ht(l,l.return,f)}else{var u=da(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Ht(l,l.return,f)}}a&64&&jd(l),a&512&&lu(l,l.return);break;case 3:if(Nl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Rs(t,e)}catch(f){Ht(l,l.return,f)}}break;case 27:e===null&&a&4&&Gd(l);case 26:case 5:Nl(t,l),e===null&&a&4&&Yd(l),a&512&&lu(l,l.return);break;case 12:Nl(t,l);break;case 13:Nl(t,l),a&4&&Jd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=rm.bind(null,l),wm(t,l))));break;case 22:if(a=l.memoizedState!==null||ml,!a){e=e!==null&&e.memoizedState!==null||Wt,u=ml;var i=Wt;ml=a,(Wt=e)&&!i?Ul(t,l,(l.subtreeFlags&8772)!==0):Nl(t,l),ml=u,Wt=i}break;case 30:break;default:Nl(t,l)}}function Vd(t){var e=t.alternate;e!==null&&(t.alternate=null,Vd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&yc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,xe=!1;function vl(t,e,l){for(l=l.child;l!==null;)Kd(t,e,l),l=l.sibling}function Kd(t,e,l){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(En,l)}catch{}switch(l.tag){case 26:Wt||Ie(l,e),vl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Wt||Ie(l,e);var a=qt,u=xe;ql(l.type)&&(qt=l.stateNode,xe=!1),vl(t,e,l),su(l.stateNode),qt=a,xe=u;break;case 5:Wt||Ie(l,e);case 6:if(a=qt,u=xe,qt=null,vl(t,e,l),qt=a,xe=u,qt!==null)if(xe)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(l.stateNode)}catch(i){Ht(l,e,i)}else try{qt.removeChild(l.stateNode)}catch(i){Ht(l,e,i)}break;case 18:qt!==null&&(xe?(t=qt,$0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),yu(t)):$0(qt,l.stateNode));break;case 4:a=qt,u=xe,qt=l.stateNode.containerInfo,xe=!0,vl(t,e,l),qt=a,xe=u;break;case 0:case 11:case 14:case 15:Wt||Bl(2,l,e),Wt||Bl(4,l,e),vl(t,e,l);break;case 1:Wt||(Ie(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&qd(l,e,a)),vl(t,e,l);break;case 21:vl(t,e,l);break;case 22:Wt=(a=Wt)||l.memoizedState!==null,vl(t,e,l),Wt=a;break;default:vl(t,e,l)}}function Jd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yu(t)}catch(l){Ht(e,e.return,l)}}function tm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Xd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Xd),e;default:throw Error(r(435,t.tag))}}function qr(t,e){var l=tm(t);e.forEach(function(a){var u=om.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function Re(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,f=e,s=f;t:for(;s!==null;){switch(s.tag){case 27:if(ql(s.type)){qt=s.stateNode,xe=!1;break t}break;case 5:qt=s.stateNode,xe=!1;break t;case 3:case 4:qt=s.stateNode.containerInfo,xe=!0;break t}s=s.return}if(qt===null)throw Error(r(160));Kd(i,f,u),qt=null,xe=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Wd(e,t),e=e.sibling}var Xe=null;function Wd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Re(e,t),Oe(t),a&4&&(Bl(3,t,t.return),eu(3,t),Bl(5,t,t.return));break;case 1:Re(e,t),Oe(t),a&512&&(Wt||l===null||Ie(l,l.return)),a&64&&ml&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Xe;if(Re(e,t),Oe(t),a&512&&(Wt||l===null||Ie(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[wn]||i[he]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),se(i,a,l),i[he]=t,ae(i),a=i;break t;case"link":var f=G0("link","href",u).get(a+(l.href||""));if(f){for(var s=0;s<f.length;s++)if(i=f[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(s,1);break e}}i=u.createElement(a),se(i,a,l),u.head.appendChild(i);break;case"meta":if(f=G0("meta","content",u).get(a+(l.content||""))){for(s=0;s<f.length;s++)if(i=f[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(s,1);break e}}i=u.createElement(a),se(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[he]=t,ae(i),a=i}t.stateNode=a}else X0(u,t.type,t.stateNode);else t.stateNode=L0(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?X0(u,t.type,t.stateNode):L0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Hr(t,t.memoizedProps,l.memoizedProps)}break;case 27:Re(e,t),Oe(t),a&512&&(Wt||l===null||Ie(l,l.return)),l!==null&&a&4&&Hr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Re(e,t),Oe(t),a&512&&(Wt||l===null||Ie(l,l.return)),t.flags&32){u=t.stateNode;try{Ca(u,"")}catch(T){Ht(t,t.return,T)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Hr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(jr=!0);break;case 6:if(Re(e,t),Oe(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(T){Ht(t,t.return,T)}}break;case 3:if(Ni=null,u=Xe,Xe=Ci(e.containerInfo),Re(e,t),Xe=u,Oe(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{yu(e.containerInfo)}catch(T){Ht(t,t.return,T)}jr&&(jr=!1,Fd(t));break;case 4:a=Xe,Xe=Ci(t.stateNode.containerInfo),Re(e,t),Oe(t),Xe=a;break;case 12:Re(e,t),Oe(t);break;case 13:Re(e,t),Oe(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Vr=Ft()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,qr(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,S=ml,_=Wt;if(ml=S||u,Wt=_||h,Re(e,t),Wt=_,ml=S,Oe(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||ml||Wt||ha(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{s=h.stateNode;var U=h.memoizedProps.style,E=U!=null&&U.hasOwnProperty("display")?U.display:null;s.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){Ht(h,h.return,T)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(T){Ht(h,h.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,qr(t,l))));break;case 19:Re(e,t),Oe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,qr(t,a)));break;case 30:break;case 21:break;default:Re(e,t),Oe(t)}}function Oe(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Ld(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=kr(t);yi(t,i,u);break;case 5:var f=l.stateNode;l.flags&32&&(Ca(f,""),l.flags&=-33);var s=kr(t);yi(t,s,f);break;case 3:case 4:var h=l.stateNode.containerInfo,S=kr(t);Qr(t,S,h);break;default:throw Error(r(161))}}catch(_){Ht(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Fd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Nl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Zd(t,e.alternate,e),e=e.sibling}function ha(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Bl(4,e,e.return),ha(e);break;case 1:Ie(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&qd(e,e.return,l),ha(e);break;case 27:su(e.stateNode);case 26:case 5:Ie(e,e.return),ha(e);break;case 22:e.memoizedState===null&&ha(e);break;case 30:ha(e);break;default:ha(e)}t=t.sibling}}function Ul(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,f=i.flags;switch(i.tag){case 0:case 11:case 15:Ul(u,i,l),eu(4,i);break;case 1:if(Ul(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(S){Ht(a,a.return,S)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)ws(h[u],s)}catch(S){Ht(a,a.return,S)}}l&&f&64&&jd(i),lu(i,i.return);break;case 27:Gd(i);case 26:case 5:Ul(u,i,l),l&&a===null&&f&4&&Yd(i),lu(i,i.return);break;case 12:Ul(u,i,l);break;case 13:Ul(u,i,l),l&&f&4&&Jd(u,i);break;case 22:i.memoizedState===null&&Ul(u,i,l),lu(i,i.return);break;case 30:break;default:Ul(u,i,l)}e=e.sibling}}function Yr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&qn(l))}function Lr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qn(t))}function Pe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Id(t,e,l,a),e=e.sibling}function Id(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Pe(t,e,l,a),u&2048&&eu(9,e);break;case 1:Pe(t,e,l,a);break;case 3:Pe(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qn(t)));break;case 12:if(u&2048){Pe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,f=i.id,s=i.onPostCommit;typeof s=="function"&&s(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ht(e,e.return,h)}}else Pe(t,e,l,a);break;case 13:Pe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,f=e.alternate,e.memoizedState!==null?i._visibility&2?Pe(t,e,l,a):au(t,e):i._visibility&2?Pe(t,e,l,a):(i._visibility|=2,Fa(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&Yr(f,e);break;case 24:Pe(t,e,l,a),u&2048&&Lr(e.alternate,e);break;default:Pe(t,e,l,a)}}function Fa(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,f=e,s=l,h=a,S=f.flags;switch(f.tag){case 0:case 11:case 15:Fa(i,f,s,h,u),eu(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Fa(i,f,s,h,u):au(i,f):(_._visibility|=2,Fa(i,f,s,h,u)),u&&S&2048&&Yr(f.alternate,f);break;case 24:Fa(i,f,s,h,u),u&&S&2048&&Lr(f.alternate,f);break;default:Fa(i,f,s,h,u)}e=e.sibling}}function au(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:au(l,a),u&2048&&Yr(a.alternate,a);break;case 24:au(l,a),u&2048&&Lr(a.alternate,a);break;default:au(l,a)}e=e.sibling}}var nu=8192;function Ia(t){if(t.subtreeFlags&nu)for(t=t.child;t!==null;)Pd(t),t=t.sibling}function Pd(t){switch(t.tag){case 26:Ia(t),t.flags&nu&&t.memoizedState!==null&&Qm(Xe,t.memoizedState,t.memoizedProps);break;case 5:Ia(t);break;case 3:case 4:var e=Xe;Xe=Ci(t.stateNode.containerInfo),Ia(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=nu,nu=16777216,Ia(t),nu=e):Ia(t));break;default:Ia(t)}}function t0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function uu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,l0(a,t)}t0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)e0(t),t=t.sibling}function e0(t){switch(t.tag){case 0:case 11:case 15:uu(t),t.flags&2048&&Bl(9,t,t.return);break;case 3:uu(t);break;case 12:uu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ai(t)):uu(t);break;default:uu(t)}}function Ai(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,l0(a,t)}t0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Bl(8,e,e.return),Ai(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Ai(e));break;default:Ai(e)}t=t.sibling}}function l0(t,e){for(;ue!==null;){var l=ue;switch(l.tag){case 0:case 11:case 15:Bl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:qn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ue=a;else t:for(l=t;ue!==null;){a=ue;var u=a.sibling,i=a.return;if(Vd(a),a===l){ue=null;break t}if(u!==null){u.return=i,ue=u;break t}ue=i}}}var em={getCacheForType:function(t){var e=pe(ee),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},lm=typeof WeakMap=="function"?WeakMap:Map,zt=0,kt=null,At=null,Tt=0,Mt=0,ze=null,$l=!1,Pa=!1,Gr=!1,gl=0,Gt=0,Hl=0,pa=0,Xr=0,je=0,tn=0,iu=null,Se=null,Zr=!1,Vr=0,xi=1/0,Si=null,kl=null,fe=0,Ql=null,en=null,ln=0,Kr=0,Jr=null,a0=null,cu=0,Wr=null;function Me(){if((zt&2)!==0&&Tt!==0)return Tt&-Tt;if(z.T!==null){var t=La;return t!==0?t:ao()}return yf()}function n0(){je===0&&(je=(Tt&536870912)===0||wt?bf():536870912);var t=Qe.current;return t!==null&&(t.flags|=32),je}function _e(t,e,l){(t===kt&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(an(t,0),jl(t,Tt,je,!1)),Dn(t,l),((zt&2)===0||t!==kt)&&(t===kt&&((zt&2)===0&&(pa|=l),Gt===4&&jl(t,Tt,je,!1)),tl(t))}function u0(t,e,l){if((zt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Tn(t,e),u=a?um(t,e):Pr(t,e,!0),i=a;do{if(u===0){Pa&&!a&&jl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!am(l)){u=Pr(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var s=t;u=iu;var h=s.current.memoizedState.isDehydrated;if(h&&(an(s,f).flags|=256),f=Pr(s,f,!1),f!==2){if(Gr&&!h){s.errorRecoveryDisabledLanes|=i,pa|=i,u=4;break t}i=Se,Se=u,i!==null&&(Se===null?Se=i:Se.push.apply(Se,i))}u=f}if(i=!1,u!==2)continue}}if(u===1){an(t,0),jl(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:jl(a,e,je,!$l);break t;case 2:Se=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Vr+300-Ft(),10<u)){if(jl(a,e,je,!$l),Bu(a,0,!0)!==0)break t;a.timeoutHandle=N0(i0.bind(null,a,l,Se,Si,Zr,e,je,pa,tn,$l,i,2,-0,0),u);break t}i0(a,l,Se,Si,Zr,e,je,pa,tn,$l,i,0,-0,0)}}break}while(!0);tl(t)}function i0(t,e,l,a,u,i,f,s,h,S,_,U,E,T){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(pu={stylesheets:null,count:0,unsuspend:km},Pd(e),U=jm(),U!==null)){t.cancelPendingCommit=U(h0.bind(null,t,e,i,l,a,u,f,s,h,_,1,E,T)),jl(t,i,f,!S);return}h0(t,e,i,l,a,u,f,s,h)}function am(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!De(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jl(t,e,l,a){e&=~Xr,e&=~pa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-Te(u),f=1<<i;a[i]=-1,u&=~f}l!==0&&vf(t,l,e)}function Ei(){return(zt&6)===0?(ru(0),!1):!0}function Fr(){if(At!==null){if(Mt===0)var t=At.return;else t=At,fl=ra=null,pr(t),Ja=null,In=0,t=At;for(;t!==null;)Qd(t.alternate,t),t=t.return;At=null}}function an(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,xm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Fr(),kt=t,At=l=cl(t.current,null),Tt=e,Mt=0,ze=null,$l=!1,Pa=Tn(t,e),Gr=!1,tn=je=Xr=pa=Hl=Gt=0,Se=iu=null,Zr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-Te(a),i=1<<u;e|=t[u],a&=~i}return gl=e,Xu(),l}function c0(t,e){vt=null,z.H=fi,e===Ln||e===ti?(e=Ts(),Mt=3):e===xs?(e=Ts(),Mt=4):Mt=e===Dd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ze=e,At===null&&(Gt=1,bi(t,Ue(e,t.current)))}function r0(){var t=z.H;return z.H=fi,t===null?fi:t}function o0(){var t=z.A;return z.A=em,t}function Ir(){Gt=4,$l||(Tt&4194048)!==Tt&&Qe.current!==null||(Pa=!0),(Hl&134217727)===0&&(pa&134217727)===0||kt===null||jl(kt,Tt,je,!1)}function Pr(t,e,l){var a=zt;zt|=2;var u=r0(),i=o0();(kt!==t||Tt!==e)&&(Si=null,an(t,e)),e=!1;var f=Gt;t:do try{if(Mt!==0&&At!==null){var s=At,h=ze;switch(Mt){case 8:Fr(),f=6;break t;case 3:case 2:case 9:case 6:Qe.current===null&&(e=!0);var S=Mt;if(Mt=0,ze=null,nn(t,s,h,S),l&&Pa){f=0;break t}break;default:S=Mt,Mt=0,ze=null,nn(t,s,h,S)}}nm(),f=Gt;break}catch(_){c0(t,_)}while(!0);return e&&t.shellSuspendCounter++,fl=ra=null,zt=a,z.H=u,z.A=i,At===null&&(kt=null,Tt=0,Xu()),f}function nm(){for(;At!==null;)f0(At)}function um(t,e){var l=zt;zt|=2;var a=r0(),u=o0();kt!==t||Tt!==e?(Si=null,xi=Ft()+500,an(t,e)):Pa=Tn(t,e);t:do try{if(Mt!==0&&At!==null){e=At;var i=ze;e:switch(Mt){case 1:Mt=0,ze=null,nn(t,e,i,1);break;case 2:case 9:if(Ss(i)){Mt=0,ze=null,s0(e);break}e=function(){Mt!==2&&Mt!==9||kt!==t||(Mt=7),tl(t)},i.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Ss(i)?(Mt=0,ze=null,s0(e)):(Mt=0,ze=null,nn(t,e,i,7));break;case 5:var f=null;switch(At.tag){case 26:f=At.memoizedState;case 5:case 27:var s=At;if(!f||Z0(f)){Mt=0,ze=null;var h=s.sibling;if(h!==null)At=h;else{var S=s.return;S!==null?(At=S,Ti(S)):At=null}break e}}Mt=0,ze=null,nn(t,e,i,5);break;case 6:Mt=0,ze=null,nn(t,e,i,6);break;case 8:Fr(),Gt=6;break t;default:throw Error(r(462))}}im();break}catch(_){c0(t,_)}while(!0);return fl=ra=null,z.H=a,z.A=u,zt=l,At!==null?0:(kt=null,Tt=0,Xu(),Gt)}function im(){for(;At!==null&&!Kt();)f0(At)}function f0(t){var e=Hd(t.alternate,t,gl);t.memoizedProps=t.pendingProps,e===null?Ti(t):At=e}function s0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=_d(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=_d(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:pr(e);default:Qd(l,e),e=At=ds(e,gl),e=Hd(l,e,gl)}t.memoizedProps=t.pendingProps,e===null?Ti(t):At=e}function nn(t,e,l,a){fl=ra=null,pr(e),Ja=null,In=0;var u=e.return;try{if(Jb(t,u,e,l,Tt)){Gt=1,bi(t,Ue(l,t.current)),At=null;return}}catch(i){if(u!==null)throw At=u,i;Gt=1,bi(t,Ue(l,t.current)),At=null;return}e.flags&32768?(wt||a===1?t=!0:Pa||(Tt&536870912)!==0?t=!1:($l=t=!0,(a===2||a===9||a===3||a===6)&&(a=Qe.current,a!==null&&a.tag===13&&(a.flags|=16384))),d0(e,t)):Ti(e)}function Ti(t){var e=t;do{if((e.flags&32768)!==0){d0(e,$l);return}t=e.return;var l=Fb(e.alternate,e,gl);if(l!==null){At=l;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Gt===0&&(Gt=5)}function d0(t,e){do{var l=Ib(t.alternate,t);if(l!==null){l.flags&=32767,At=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=l}while(t!==null);Gt=6,At=null}function h0(t,e,l,a,u,i,f,s,h){t.cancelPendingCommit=null;do Di();while(fe!==0);if((zt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Lc,kp(t,l,i,f,s,h),t===kt&&(At=kt=null,Tt=0),en=e,Ql=t,ln=l,Kr=i,Jr=u,a0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fm(Sl,function(){return g0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,u=Y.p,Y.p=2,f=zt,zt|=4;try{Pb(t,e,l)}finally{zt=f,Y.p=u,z.T=a}}fe=1,p0(),b0(),m0()}}function p0(){if(fe===1){fe=0;var t=Ql,e=en,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null;var a=Y.p;Y.p=2;var u=zt;zt|=4;try{Wd(e,t);var i=so,f=ls(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(f!==s&&s&&s.ownerDocument&&es(s.ownerDocument.documentElement,s)){if(h!==null&&kc(s)){var S=h.start,_=h.end;if(_===void 0&&(_=S),"selectionStart"in s)s.selectionStart=S,s.selectionEnd=Math.min(_,s.value.length);else{var U=s.ownerDocument||document,E=U&&U.defaultView||window;if(E.getSelection){var T=E.getSelection(),ot=s.textContent.length,it=Math.min(h.start,ot),Nt=h.end===void 0?it:Math.min(h.end,ot);!T.extend&&it>Nt&&(f=Nt,Nt=it,it=f);var y=ts(s,it),v=ts(s,Nt);if(y&&v&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var x=U.createRange();x.setStart(y.node,y.offset),T.removeAllRanges(),it>Nt?(T.addRange(x),T.extend(v.node,v.offset)):(x.setEnd(v.node,v.offset),T.addRange(x))}}}}for(U=[],T=s;T=T.parentNode;)T.nodeType===1&&U.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<U.length;s++){var C=U[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Hi=!!fo,so=fo=null}finally{zt=u,Y.p=a,z.T=l}}t.current=e,fe=2}}function b0(){if(fe===2){fe=0;var t=Ql,e=en,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=z.T,z.T=null;var a=Y.p;Y.p=2;var u=zt;zt|=4;try{Zd(t,e.alternate,e)}finally{zt=u,Y.p=a,z.T=l}}fe=3}}function m0(){if(fe===4||fe===3){fe=0,ve();var t=Ql,e=en,l=ln,a=a0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?fe=5:(fe=0,en=Ql=null,v0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(kl=null),vc(l),e=e.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(En,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=z.T,u=Y.p,Y.p=2,z.T=null;try{for(var i=t.onRecoverableError,f=0;f<a.length;f++){var s=a[f];i(s.value,{componentStack:s.stack})}}finally{z.T=e,Y.p=u}}(ln&3)!==0&&Di(),tl(t),u=t.pendingLanes,(l&4194090)!==0&&(u&42)!==0?t===Wr?cu++:(cu=0,Wr=t):cu=0,ru(0)}}function v0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,qn(e)))}function Di(t){return p0(),b0(),m0(),g0()}function g0(){if(fe!==5)return!1;var t=Ql,e=Kr;Kr=0;var l=vc(ln),a=z.T,u=Y.p;try{Y.p=32>l?32:l,z.T=null,l=Jr,Jr=null;var i=Ql,f=ln;if(fe=0,en=Ql=null,ln=0,(zt&6)!==0)throw Error(r(331));var s=zt;if(zt|=4,e0(i.current),Id(i,i.current,f,l),zt=s,ru(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(En,i)}catch{}return!0}finally{Y.p=u,z.T=a,v0(t,e)}}function y0(t,e,l){e=Ue(l,e),e=Or(t.stateNode,e,2),t=zl(t,e,2),t!==null&&(Dn(t,2),tl(t))}function Ht(t,e,l){if(t.tag===3)y0(t,t,l);else for(;e!==null;){if(e.tag===3){y0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(kl===null||!kl.has(a))){t=Ue(l,t),l=Ed(2),a=zl(e,l,2),a!==null&&(Td(l,a,e,t),Dn(a,2),tl(a));break}}e=e.return}}function to(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new lm;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Gr=!0,u.add(l),t=cm.bind(null,t,e,l),e.then(t,t))}function cm(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,kt===t&&(Tt&l)===l&&(Gt===4||Gt===3&&(Tt&62914560)===Tt&&300>Ft()-Vr?(zt&2)===0&&an(t,0):Xr|=l,tn===Tt&&(tn=0)),tl(t)}function A0(t,e){e===0&&(e=mf()),t=Qa(t,e),t!==null&&(Dn(t,e),tl(t))}function rm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),A0(t,l)}function om(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),A0(t,l)}function fm(t,e){return _t(t,e)}var wi=null,un=null,eo=!1,Ri=!1,lo=!1,ba=0;function tl(t){t!==un&&t.next===null&&(un===null?wi=un=t:un=un.next=t),Ri=!0,eo||(eo=!0,dm())}function ru(t,e){if(!lo&&Ri){lo=!0;do for(var l=!1,a=wi;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var f=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Te(42|t)+1)-1,i&=u&~(f&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,T0(a,i))}else i=Tt,i=Bu(a,a===kt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Tn(a,i)||(l=!0,T0(a,i));a=a.next}while(l);lo=!1}}function sm(){x0()}function x0(){Ri=eo=!1;var t=0;ba!==0&&(Am()&&(t=ba),ba=0);for(var e=Ft(),l=null,a=wi;a!==null;){var u=a.next,i=S0(a,e);i===0?(a.next=null,l===null?wi=u:l.next=u,u===null&&(un=l)):(l=a,(t!==0||(i&3)!==0)&&(Ri=!0)),a=u}ru(t)}function S0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var f=31-Te(i),s=1<<f,h=u[f];h===-1?((s&l)===0||(s&a)!==0)&&(u[f]=Hp(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=kt,l=Tt,l=Bu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vt(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Tn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Vt(a),vc(l)){case 2:case 8:l=Ta;break;case 32:l=Sl;break;case 268435456:l=Sn;break;default:l=Sl}return a=E0.bind(null,t),l=_t(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Vt(a),t.callbackPriority=2,t.callbackNode=null,2}function E0(t,e){if(fe!==0&&fe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Di()&&t.callbackNode!==l)return null;var a=Tt;return a=Bu(t,t===kt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(u0(t,a,e),S0(t,Ft()),t.callbackNode!=null&&t.callbackNode===l?E0.bind(null,t):null)}function T0(t,e){if(Di())return null;u0(t,e,!0)}function dm(){Sm(function(){(zt&6)!==0?_t(Le,sm):x0()})}function ao(){return ba===0&&(ba=bf()),ba}function D0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ku(""+t)}function w0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function hm(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=D0((u[ge]||null).action),f=a.submitter;f&&(e=(e=f[ge]||null)?D0(e.formAction):f.getAttribute("formAction"),e!==null&&(i=e,f=null));var s=new Yu("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var h=f?w0(u,f):new FormData(u);Er(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=f?w0(u,f):new FormData(u),Er(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var no=0;no<Yc.length;no++){var uo=Yc[no],pm=uo.toLowerCase(),bm=uo[0].toUpperCase()+uo.slice(1);Ge(pm,"on"+bm)}Ge(us,"onAnimationEnd"),Ge(is,"onAnimationIteration"),Ge(cs,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(Cb,"onTransitionRun"),Ge(Bb,"onTransitionStart"),Ge(Nb,"onTransitionCancel"),Ge(rs,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),Pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ou));function R0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var f=a.length-1;0<=f;f--){var s=a[f],h=s.instance,S=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=S;try{i(u)}catch(_){pi(_)}u.currentTarget=null,i=h}else for(f=0;f<a.length;f++){if(s=a[f],h=s.instance,S=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=S;try{i(u)}catch(_){pi(_)}u.currentTarget=null,i=h}}}}function xt(t,e){var l=e[gc];l===void 0&&(l=e[gc]=new Set);var a=t+"__bubble";l.has(a)||(O0(e,t,2,!1),l.add(a))}function io(t,e,l){var a=0;e&&(a|=4),O0(l,t,a,e)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Oi]){t[Oi]=!0,xf.forEach(function(l){l!=="selectionchange"&&(mm.has(l)||io(l,!1,t),io(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oi]||(e[Oi]=!0,io("selectionchange",!1,e))}}function O0(t,e,l,a){switch(I0(e)){case 2:var u=Lm;break;case 8:u=Gm;break;default:u=So}l=u.bind(null,e,l,t),u=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function ro(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var s=a.stateNode.containerInfo;if(s===u)break;if(f===4)for(f=a.return;f!==null;){var h=f.tag;if((h===3||h===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;s!==null;){if(f=wa(s),f===null)return;if(h=f.tag,h===5||h===6||h===26||h===27){a=i=f;continue t}s=s.parentNode}}a=a.return}Uf(function(){var S=i,_=Rc(l),U=[];t:{var E=os.get(t);if(E!==void 0){var T=Yu,ot=t;switch(t){case"keypress":if(ju(l)===0)break t;case"keydown":case"keyup":T=fb;break;case"focusin":ot="focus",T=Bc;break;case"focusout":ot="blur",T=Bc;break;case"beforeblur":case"afterblur":T=Bc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=hb;break;case us:case is:case cs:T=eb;break;case rs:T=bb;break;case"scroll":case"scrollend":T=Wp;break;case"wheel":T=vb;break;case"copy":case"cut":case"paste":T=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=jf;break;case"toggle":case"beforetoggle":T=yb}var it=(e&4)!==0,Nt=!it&&(t==="scroll"||t==="scrollend"),y=it?E!==null?E+"Capture":null:E;it=[];for(var v=S,x;v!==null;){var C=v;if(x=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||x===null||y===null||(C=On(v,y),C!=null&&it.push(fu(v,C,x))),Nt)break;v=v.return}0<it.length&&(E=new T(E,ot,null,l,_),U.push({event:E,listeners:it}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",E&&l!==wc&&(ot=l.relatedTarget||l.fromElement)&&(wa(ot)||ot[Da]))break t;if((T||E)&&(E=_.window===_?_:(E=_.ownerDocument)?E.defaultView||E.parentWindow:window,T?(ot=l.relatedTarget||l.toElement,T=S,ot=ot?wa(ot):null,ot!==null&&(Nt=b(ot),it=ot.tag,ot!==Nt||it!==5&&it!==27&&it!==6)&&(ot=null)):(T=null,ot=S),T!==ot)){if(it=kf,C="onMouseLeave",y="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(it=jf,C="onPointerLeave",y="onPointerEnter",v="pointer"),Nt=T==null?E:Rn(T),x=ot==null?E:Rn(ot),E=new it(C,v+"leave",T,l,_),E.target=Nt,E.relatedTarget=x,C=null,wa(_)===S&&(it=new it(y,v+"enter",ot,l,_),it.target=x,it.relatedTarget=Nt,C=it),Nt=C,T&&ot)e:{for(it=T,y=ot,v=0,x=it;x;x=cn(x))v++;for(x=0,C=y;C;C=cn(C))x++;for(;0<v-x;)it=cn(it),v--;for(;0<x-v;)y=cn(y),x--;for(;v--;){if(it===y||y!==null&&it===y.alternate)break e;it=cn(it),y=cn(y)}it=null}else it=null;T!==null&&z0(U,E,T,it,!1),ot!==null&&Nt!==null&&z0(U,Nt,ot,it,!0)}}t:{if(E=S?Rn(S):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var at=Kf;else if(Zf(E))if(Jf)at=zb;else{at=Rb;var yt=wb}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?S&&Dc(S.elementType)&&(at=Kf):at=Ob;if(at&&(at=at(t,S))){Vf(U,at,l,_);break t}yt&&yt(t,E,S),t==="focusout"&&S&&E.type==="number"&&S.memoizedProps.value!=null&&Tc(E,"number",E.value)}switch(yt=S?Rn(S):window,t){case"focusin":(Zf(yt)||yt.contentEditable==="true")&&($a=yt,Qc=S,$n=null);break;case"focusout":$n=Qc=$a=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,as(U,l,_);break;case"selectionchange":if(_b)break;case"keydown":case"keyup":as(U,l,_)}var nt;if(Uc)t:{switch(t){case"compositionstart":var ct="onCompositionStart";break t;case"compositionend":ct="onCompositionEnd";break t;case"compositionupdate":ct="onCompositionUpdate";break t}ct=void 0}else Ua?Gf(t,l)&&(ct="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(qf&&l.locale!=="ko"&&(Ua||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ua&&(nt=$f()):(Dl=_,Mc="value"in Dl?Dl.value:Dl.textContent,Ua=!0)),yt=zi(S,ct),0<yt.length&&(ct=new Qf(ct,t,null,l,_),U.push({event:ct,listeners:yt}),nt?ct.data=nt:(nt=Xf(l),nt!==null&&(ct.data=nt)))),(nt=xb?Sb(t,l):Eb(t,l))&&(ct=zi(S,"onBeforeInput"),0<ct.length&&(yt=new Qf("onBeforeInput","beforeinput",null,l,_),U.push({event:yt,listeners:ct}),yt.data=nt)),hm(U,t,S,l,_)}R0(U,e)})}function fu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function zi(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=On(t,l),u!=null&&a.unshift(fu(t,u,i)),u=On(t,e),u!=null&&a.push(fu(t,u,i))),t.tag===3)return a;t=t.return}return[]}function cn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function z0(t,e,l,a,u){for(var i=e._reactName,f=[];l!==null&&l!==a;){var s=l,h=s.alternate,S=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||S===null||(h=S,u?(S=On(l,i),S!=null&&f.unshift(fu(l,S,h))):u||(S=On(l,i),S!=null&&f.push(fu(l,S,h)))),l=l.return}f.length!==0&&t.push({event:e,listeners:f})}var vm=/\r\n?/g,gm=/\u0000|\uFFFD/g;function M0(t){return(typeof t=="string"?t:""+t).replace(vm,`
`).replace(gm,"")}function _0(t,e){return e=M0(e),M0(t)===e}function Mi(){}function Bt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ca(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ca(t,""+a);break;case"className":Uu(t,"class",a);break;case"tabIndex":Uu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Uu(t,l,a);break;case"style":Bf(t,a,i);break;case"data":if(e!=="object"){Uu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=ku(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Bt(t,e,"name",u.name,u,null),Bt(t,e,"formEncType",u.formEncType,u,null),Bt(t,e,"formMethod",u.formMethod,u,null),Bt(t,e,"formTarget",u.formTarget,u,null)):(Bt(t,e,"encType",u.encType,u,null),Bt(t,e,"method",u.method,u,null),Bt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=ku(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Mi);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=ku(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Nu(t,"popover",a);break;case"xlinkActuate":ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Kp.get(l)||l,Nu(t,l,a))}}function oo(t,e,l,a,u,i){switch(l){case"style":Bf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ca(t,a):(typeof a=="number"||typeof a=="bigint")&&Ca(t,""+a);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Mi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ge]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Nu(t,l,a)}}}function se(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var f=l[i];if(f!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,i,f,l,null)}}u&&Bt(t,e,"srcSet",l.srcSet,l,null),a&&Bt(t,e,"src",l.src,l,null);return;case"input":xt("invalid",t);var s=i=f=u=null,h=null,S=null;for(a in l)if(l.hasOwnProperty(a)){var _=l[a];if(_!=null)switch(a){case"name":u=_;break;case"type":f=_;break;case"checked":h=_;break;case"defaultChecked":S=_;break;case"value":i=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:Bt(t,e,a,_,l,null)}}zf(t,i,s,h,S,f,u,!1),$u(t);return;case"select":xt("invalid",t),a=f=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":f=s;break;case"multiple":a=s;default:Bt(t,e,u,s,l,null)}e=i,l=f,t.multiple=!!a,e!=null?_a(t,!!a,e,!1):l!=null&&_a(t,!!a,l,!0);return;case"textarea":xt("invalid",t),i=u=a=null;for(f in l)if(l.hasOwnProperty(f)&&(s=l[f],s!=null))switch(f){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:Bt(t,e,f,s,l,null)}_f(t,a,u,i),$u(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Bt(t,e,h,a,l,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(a=0;a<ou.length;a++)xt(ou[a],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in l)if(l.hasOwnProperty(S)&&(a=l[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,S,a,l,null)}return;default:if(Dc(e)){for(_ in l)l.hasOwnProperty(_)&&(a=l[_],a!==void 0&&oo(t,e,_,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&Bt(t,e,s,a,l,null))}function ym(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,f=null,s=null,h=null,S=null,_=null;for(T in l){var U=l[T];if(l.hasOwnProperty(T)&&U!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=U;default:a.hasOwnProperty(T)||Bt(t,e,T,null,a,U)}}for(var E in a){var T=a[E];if(U=l[E],a.hasOwnProperty(E)&&(T!=null||U!=null))switch(E){case"type":i=T;break;case"name":u=T;break;case"checked":S=T;break;case"defaultChecked":_=T;break;case"value":f=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:T!==U&&Bt(t,e,E,T,a,U)}}Ec(t,f,s,h,S,_,i,u);return;case"select":T=f=s=E=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":T=h;default:a.hasOwnProperty(i)||Bt(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":f=i;default:i!==h&&Bt(t,e,u,i,a,h)}e=s,l=f,a=T,E!=null?_a(t,!!l,E,!1):!!a!=!!l&&(e!=null?_a(t,!!l,e,!0):_a(t,!!l,l?[]:"",!1));return;case"textarea":T=E=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Bt(t,e,s,null,a,u)}for(f in a)if(u=a[f],i=l[f],a.hasOwnProperty(f)&&(u!=null||i!=null))switch(f){case"value":E=u;break;case"defaultValue":T=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&Bt(t,e,f,u,a,i)}Mf(t,E,T);return;case"option":for(var ot in l)if(E=l[ot],l.hasOwnProperty(ot)&&E!=null&&!a.hasOwnProperty(ot))switch(ot){case"selected":t.selected=!1;break;default:Bt(t,e,ot,null,a,E)}for(h in a)if(E=a[h],T=l[h],a.hasOwnProperty(h)&&E!==T&&(E!=null||T!=null))switch(h){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Bt(t,e,h,E,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in l)E=l[it],l.hasOwnProperty(it)&&E!=null&&!a.hasOwnProperty(it)&&Bt(t,e,it,null,a,E);for(S in a)if(E=a[S],T=l[S],a.hasOwnProperty(S)&&E!==T&&(E!=null||T!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,e));break;default:Bt(t,e,S,E,a,T)}return;default:if(Dc(e)){for(var Nt in l)E=l[Nt],l.hasOwnProperty(Nt)&&E!==void 0&&!a.hasOwnProperty(Nt)&&oo(t,e,Nt,void 0,a,E);for(_ in a)E=a[_],T=l[_],!a.hasOwnProperty(_)||E===T||E===void 0&&T===void 0||oo(t,e,_,E,a,T);return}}for(var y in l)E=l[y],l.hasOwnProperty(y)&&E!=null&&!a.hasOwnProperty(y)&&Bt(t,e,y,null,a,E);for(U in a)E=a[U],T=l[U],!a.hasOwnProperty(U)||E===T||E==null&&T==null||Bt(t,e,U,E,a,T)}var fo=null,so=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function C0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ho(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var po=null;function Am(){var t=window.event;return t&&t.type==="popstate"?t===po?!1:(po=t,!0):(po=null,!1)}var N0=typeof setTimeout=="function"?setTimeout:void 0,xm=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(t){return U0.resolve(null).then(t).catch(Em)}:N0;function Em(t){setTimeout(function(){throw t})}function ql(t){return t==="head"}function $0(t,e){var l=e,a=0,u=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var f=t.ownerDocument;if(l&1&&su(f.documentElement),l&2&&su(f.body),l&4)for(l=f.head,su(l),f=l.firstChild;f;){var s=f.nextSibling,h=f.nodeName;f[wn]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=s}}if(u===0){t.removeChild(i),yu(e);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);yu(e)}function bo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bo(l),yc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Tm(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[wn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ze(t.nextSibling),t===null)break}return null}function Dm(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ze(t.nextSibling),t===null))return null;return t}function mo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function wm(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ze(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var vo=null;function H0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function k0(t,e,l){switch(e=_i(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function su(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);yc(t)}var qe=new Map,Q0=new Set;function Ci(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var yl=Y.d;Y.d={f:Rm,r:Om,D:zm,C:Mm,L:_m,m:Cm,X:Nm,S:Bm,M:Um};function Rm(){var t=yl.f(),e=Ei();return t||e}function Om(t){var e=Ra(t);e!==null&&e.tag===5&&e.type==="form"?ud(e):yl.r(t)}var rn=typeof document>"u"?null:document;function j0(t,e,l){var a=rn;if(a&&typeof e=="string"&&e){var u=Ne(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),Q0.has(u)||(Q0.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),se(e,"link",t),ae(e),a.head.appendChild(e)))}}function zm(t){yl.D(t),j0("dns-prefetch",t,null)}function Mm(t,e){yl.C(t,e),j0("preconnect",t,e)}function _m(t,e,l){yl.L(t,e,l);var a=rn;if(a&&t&&e){var u='link[rel="preload"][as="'+Ne(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Ne(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Ne(l.imageSizes)+'"]')):u+='[href="'+Ne(t)+'"]';var i=u;switch(e){case"style":i=on(t);break;case"script":i=fn(t)}qe.has(i)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),qe.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(du(i))||e==="script"&&a.querySelector(hu(i))||(e=a.createElement("link"),se(e,"link",t),ae(e),a.head.appendChild(e)))}}function Cm(t,e){yl.m(t,e);var l=rn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Ne(a)+'"][href="'+Ne(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=fn(t)}if(!qe.has(i)&&(t=R({rel:"modulepreload",href:t},e),qe.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(hu(i)))return}a=l.createElement("link"),se(a,"link",t),ae(a),l.head.appendChild(a)}}}function Bm(t,e,l){yl.S(t,e,l);var a=rn;if(a&&t){var u=Oa(a).hoistableStyles,i=on(t);e=e||"default";var f=u.get(i);if(!f){var s={loading:0,preload:null};if(f=a.querySelector(du(i)))s.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=qe.get(i))&&go(t,l);var h=f=a.createElement("link");ae(h),se(h,"link",t),h._p=new Promise(function(S,_){h.onload=S,h.onerror=_}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Bi(f,e,a)}f={type:"stylesheet",instance:f,count:1,state:s},u.set(i,f)}}}function Nm(t,e){yl.X(t,e);var l=rn;if(l&&t){var a=Oa(l).hoistableScripts,u=fn(t),i=a.get(u);i||(i=l.querySelector(hu(u)),i||(t=R({src:t,async:!0},e),(e=qe.get(u))&&yo(t,e),i=l.createElement("script"),ae(i),se(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Um(t,e){yl.M(t,e);var l=rn;if(l&&t){var a=Oa(l).hoistableScripts,u=fn(t),i=a.get(u);i||(i=l.querySelector(hu(u)),i||(t=R({src:t,async:!0,type:"module"},e),(e=qe.get(u))&&yo(t,e),i=l.createElement("script"),ae(i),se(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function q0(t,e,l,a){var u=(u=Z.current)?Ci(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=on(l.href),l=Oa(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=on(l.href);var i=Oa(u).hoistableStyles,f=i.get(t);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,f),(i=u.querySelector(du(t)))&&!i._p&&(f.instance=i,f.state.loading=5),qe.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},qe.set(t,l),i||$m(u,t,l,f.state))),e&&a===null)throw Error(r(528,""));return f}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=fn(l),l=Oa(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function on(t){return'href="'+Ne(t)+'"'}function du(t){return'link[rel="stylesheet"]['+t+"]"}function Y0(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function $m(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),se(e,"link",l),ae(e),t.head.appendChild(e))}function fn(t){return'[src="'+Ne(t)+'"]'}function hu(t){return"script[async]"+t}function L0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ne(l.href)+'"]');if(a)return e.instance=a,ae(a),a;var u=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ae(a),se(a,"style",u),Bi(a,l.precedence,t),e.instance=a;case"stylesheet":u=on(l.href);var i=t.querySelector(du(u));if(i)return e.state.loading|=4,e.instance=i,ae(i),i;a=Y0(l),(u=qe.get(u))&&go(a,u),i=(t.ownerDocument||t).createElement("link"),ae(i);var f=i;return f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),se(i,"link",a),e.state.loading|=4,Bi(i,l.precedence,t),e.instance=i;case"script":return i=fn(l.src),(u=t.querySelector(hu(i)))?(e.instance=u,ae(u),u):(a=l,(u=qe.get(i))&&(a=R({},l),yo(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ae(u),se(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Bi(a,l.precedence,t));return e.instance}function Bi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,f=0;f<a.length;f++){var s=a[f];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function go(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function yo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ni=null;function G0(t,e,l){if(Ni===null){var a=new Map,u=Ni=new Map;u.set(l,a)}else u=Ni,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[wn]||i[he]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(e)||"";f=t+f;var s=a.get(f);s?s.push(i):a.set(f,[i])}}return a}function X0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Hm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Z0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var pu=null;function km(){}function Qm(t,e,l){if(pu===null)throw Error(r(475));var a=pu;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=on(l.href),i=t.querySelector(du(u));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Ui.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,ae(i);return}i=t.ownerDocument||t,l=Y0(l),(u=qe.get(u))&&go(l,u),i=i.createElement("link"),ae(i);var f=i;f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),se(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Ui.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function jm(){if(pu===null)throw Error(r(475));var t=pu;return t.stylesheets&&t.count===0&&Ao(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Ao(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Ui(){if(this.count--,this.count===0){if(this.stylesheets)Ao(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $i=null;function Ao(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$i=new Map,e.forEach(qm,t),$i=null,Ui.call(t))}function qm(t,e){if(!(e.state.loading&4)){var l=$i.get(t);if(l)var a=l.get(null);else{l=new Map,$i.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var f=u[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),a=f)}a&&l.set(null,a)}u=e.instance,f=u.getAttribute("data-precedence"),i=l.get(f)||a,i===a&&l.set(null,u),l.set(f,u),this.count++,a=Ui.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var bu={$$typeof:q,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Ym(t,e,l,a,u,i,f,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.hiddenUpdates=bc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function V0(t,e,l,a,u,i,f,s,h,S,_,U){return t=new Ym(t,e,l,f,s,h,S,U),e=1,i===!0&&(e|=24),i=we(3,null,null,e),t.current=i,i.stateNode=t,e=tr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},nr(i),t}function K0(t){return t?(t=ja,t):ja}function J0(t,e,l,a,u,i){u=K0(u),a.context===null?a.context=u:a.pendingContext=u,a=Ol(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=zl(t,a,e),l!==null&&(_e(l,t,e),Xn(l,t,e))}function W0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function xo(t,e){W0(t,e),(t=t.alternate)&&W0(t,e)}function F0(t){if(t.tag===13){var e=Qa(t,67108864);e!==null&&_e(e,t,67108864),xo(t,67108864)}}var Hi=!0;function Lm(t,e,l,a){var u=z.T;z.T=null;var i=Y.p;try{Y.p=2,So(t,e,l,a)}finally{Y.p=i,z.T=u}}function Gm(t,e,l,a){var u=z.T;z.T=null;var i=Y.p;try{Y.p=8,So(t,e,l,a)}finally{Y.p=i,z.T=u}}function So(t,e,l,a){if(Hi){var u=Eo(a);if(u===null)ro(t,e,a,ki,l),P0(t,a);else if(Zm(u,t,e,l,a))a.stopPropagation();else if(P0(t,a),e&4&&-1<Xm.indexOf(t)){for(;u!==null;){var i=Ra(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=Il(i.pendingLanes);if(f!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;f;){var h=1<<31-Te(f);s.entanglements[1]|=h,f&=~h}tl(i),(zt&6)===0&&(xi=Ft()+500,ru(0))}}break;case 13:s=Qa(i,2),s!==null&&_e(s,i,2),Ei(),xo(i,2)}if(i=Eo(a),i===null&&ro(t,e,a,ki,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else ro(t,e,a,null,l)}}function Eo(t){return t=Rc(t),To(t)}var ki=null;function To(t){if(ki=null,t=wa(t),t!==null){var e=b(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=g(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ki=t,null}function I0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nl()){case Le:return 2;case Ta:return 8;case Sl:case Fl:return 32;case Sn:return 268435456;default:return 32}default:return 32}}var Do=!1,Yl=null,Ll=null,Gl=null,mu=new Map,vu=new Map,Xl=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(t,e){switch(t){case"focusin":case"focusout":Yl=null;break;case"dragenter":case"dragleave":Ll=null;break;case"mouseover":case"mouseout":Gl=null;break;case"pointerover":case"pointerout":mu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(e.pointerId)}}function gu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=Ra(e),e!==null&&F0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Zm(t,e,l,a,u){switch(e){case"focusin":return Yl=gu(Yl,t,e,l,a,u),!0;case"dragenter":return Ll=gu(Ll,t,e,l,a,u),!0;case"mouseover":return Gl=gu(Gl,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return mu.set(i,gu(mu.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,vu.set(i,gu(vu.get(i)||null,t,e,l,a,u)),!0}return!1}function th(t){var e=wa(t.target);if(e!==null){var l=b(e);if(l!==null){if(e=l.tag,e===13){if(e=g(l),e!==null){t.blockedOn=e,Qp(t.priority,function(){if(l.tag===13){var a=Me();a=mc(a);var u=Qa(l,a);u!==null&&_e(u,l,a),xo(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Eo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);wc=a,l.target.dispatchEvent(a),wc=null}else return e=Ra(l),e!==null&&F0(e),t.blockedOn=l,!1;e.shift()}return!0}function eh(t,e,l){Qi(t)&&l.delete(e)}function Vm(){Do=!1,Yl!==null&&Qi(Yl)&&(Yl=null),Ll!==null&&Qi(Ll)&&(Ll=null),Gl!==null&&Qi(Gl)&&(Gl=null),mu.forEach(eh),vu.forEach(eh)}function ji(t,e){t.blockedOn===e&&(t.blockedOn=null,Do||(Do=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Vm)))}var qi=null;function lh(t){qi!==t&&(qi=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){qi===t&&(qi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(To(a||l)===null)continue;break}var i=Ra(l);i!==null&&(t.splice(e,3),e-=3,Er(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function yu(t){function e(h){return ji(h,t)}Yl!==null&&ji(Yl,t),Ll!==null&&ji(Ll,t),Gl!==null&&ji(Gl,t),mu.forEach(e),vu.forEach(e);for(var l=0;l<Xl.length;l++){var a=Xl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Xl.length&&(l=Xl[0],l.blockedOn===null);)th(l),l.blockedOn===null&&Xl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],f=u[ge]||null;if(typeof i=="function")f||lh(l);else if(f){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,f=i[ge]||null)s=f.formAction;else if(To(u)!==null)continue}else s=f.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),lh(l)}}}function wo(t){this._internalRoot=t}Yi.prototype.render=wo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=Me();J0(l,a,t,e,null,null)},Yi.prototype.unmount=wo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;J0(t.current,2,null,t,null,null),Ei(),e[Da]=null}};function Yi(t){this._internalRoot=t}Yi.prototype.unstable_scheduleHydration=function(t){if(t){var e=yf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Xl.length&&e!==0&&e<Xl[l].priority;l++);Xl.splice(l,0,t),l===0&&th(t)}};var ah=c.version;if(ah!=="19.1.0")throw Error(r(527,ah,"19.1.0"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=A(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Km={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{En=Li.inject(Km),Ee=Li}catch{}}return xu.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=yd,i=Ad,f=xd,s=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=V0(t,1,!1,null,null,l,a,u,i,f,s,null),t[Da]=e.current,co(t),new wo(e)},xu.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=yd,f=Ad,s=xd,h=null,S=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(S=l.formState)),e=V0(t,1,!0,e,l??null,a,u,i,f,s,h,S),e.context=K0(null),l=e.current,a=Me(),a=mc(a),u=Ol(a),u.callback=null,zl(l,u,a),l=a,e.current.lanes=l,Dn(e,l),tl(e),t[Da]=e.current,co(t),new Yi(e)},xu.version="19.1.0",xu}var hh;function av(){if(hh)return zo.exports;hh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),zo.exports=lv(),zo.exports}var nv=av(),re=function(){return re=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var b in o)Object.prototype.hasOwnProperty.call(o,b)&&(c[b]=o[b])}return c},re.apply(this,arguments)};function Ru(n,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,b;r<d;r++)(b||!(r in c))&&(b||(b=Array.prototype.slice.call(c,0,r)),b[r]=c[r]);return n.concat(b||Array.prototype.slice.call(c))}var Qt="-ms-",Tu="-moz-",Ot="-webkit-",qh="comm",cc="rule",Po="decl",uv="@import",Yh="@keyframes",iv="@layer",Lh=Math.abs,tf=String.fromCharCode,Qo=Object.assign;function cv(n,c){return ce(n,0)^45?(((c<<2^ce(n,0))<<2^ce(n,1))<<2^ce(n,2))<<2^ce(n,3):0}function Gh(n){return n.trim()}function xl(n,c){return(n=c.exec(n))?n[0]:n}function mt(n,c,o){return n.replace(c,o)}function Ji(n,c,o){return n.indexOf(c,o)}function ce(n,c){return n.charCodeAt(c)|0}function bn(n,c,o){return n.slice(c,o)}function el(n){return n.length}function Xh(n){return n.length}function Su(n,c){return c.push(n),n}function rv(n,c){return n.map(c).join("")}function ph(n,c){return n.filter(function(o){return!xl(o,c)})}var rc=1,mn=1,Zh=0,Ye=0,te=0,xn="";function oc(n,c,o,r,d,b,g,w){return{value:n,root:c,parent:o,type:r,props:d,children:b,line:rc,column:mn,length:g,return:"",siblings:w}}function Vl(n,c){return Qo(oc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function sn(n){for(;n.root;)n=Vl(n.root,{children:[n]});Su(n,n.siblings)}function ov(){return te}function fv(){return te=Ye>0?ce(xn,--Ye):0,mn--,te===10&&(mn=1,rc--),te}function Ve(){return te=Ye<Zh?ce(xn,Ye++):0,mn++,te===10&&(mn=1,rc++),te}function ya(){return ce(xn,Ye)}function Wi(){return Ye}function fc(n,c){return bn(xn,n,c)}function jo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sv(n){return rc=mn=1,Zh=el(xn=n),Ye=0,[]}function dv(n){return xn="",n}function Bo(n){return Gh(fc(Ye-1,qo(n===91?n+2:n===40?n+1:n)))}function hv(n){for(;(te=ya())&&te<33;)Ve();return jo(n)>2||jo(te)>3?"":" "}function pv(n,c){for(;--c&&Ve()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return fc(n,Wi()+(c<6&&ya()==32&&Ve()==32))}function qo(n){for(;Ve();)switch(te){case n:return Ye;case 34:case 39:n!==34&&n!==39&&qo(te);break;case 40:n===41&&qo(n);break;case 92:Ve();break}return Ye}function bv(n,c){for(;Ve()&&n+te!==57;)if(n+te===84&&ya()===47)break;return"/*"+fc(c,Ye-1)+"*"+tf(n===47?n:Ve())}function mv(n){for(;!jo(ya());)Ve();return fc(n,Ye)}function vv(n){return dv(Fi("",null,null,null,[""],n=sv(n),0,[0],n))}function Fi(n,c,o,r,d,b,g,w,A){for(var m=0,R=0,O=g,$=0,V=0,J=0,tt=1,F=1,K=1,X=0,q="",et=d,L=b,W=r,I=q;F;)switch(J=X,X=Ve()){case 40:if(J!=108&&ce(I,O-1)==58){Ji(I+=mt(Bo(X),"&","&\f"),"&\f",Lh(m?w[m-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:I+=Bo(X);break;case 9:case 10:case 13:case 32:I+=hv(J);break;case 92:I+=pv(Wi()-1,7);continue;case 47:switch(ya()){case 42:case 47:Su(gv(bv(Ve(),Wi()),c,o,A),A);break;default:I+="/"}break;case 123*tt:w[m++]=el(I)*K;case 125*tt:case 59:case 0:switch(X){case 0:case 125:F=0;case 59+R:K==-1&&(I=mt(I,/\f/g,"")),V>0&&el(I)-O&&Su(V>32?mh(I+";",r,o,O-1,A):mh(mt(I," ","")+";",r,o,O-2,A),A);break;case 59:I+=";";default:if(Su(W=bh(I,c,o,m,R,d,w,q,et=[],L=[],O,b),b),X===123)if(R===0)Fi(I,c,W,W,et,b,O,w,L);else switch($===99&&ce(I,3)===110?100:$){case 100:case 108:case 109:case 115:Fi(n,W,W,r&&Su(bh(n,W,W,0,0,d,w,q,d,et=[],O,L),L),d,L,O,w,r?et:L);break;default:Fi(I,W,W,W,[""],L,0,w,L)}}m=R=V=0,tt=K=1,q=I="",O=g;break;case 58:O=1+el(I),V=J;default:if(tt<1){if(X==123)--tt;else if(X==125&&tt++==0&&fv()==125)continue}switch(I+=tf(X),X*tt){case 38:K=R>0?1:(I+="\f",-1);break;case 44:w[m++]=(el(I)-1)*K,K=1;break;case 64:ya()===45&&(I+=Bo(Ve())),$=ya(),R=O=el(q=I+=mv(Wi())),X++;break;case 45:J===45&&el(I)==2&&(tt=0)}}return b}function bh(n,c,o,r,d,b,g,w,A,m,R,O){for(var $=d-1,V=d===0?b:[""],J=Xh(V),tt=0,F=0,K=0;tt<r;++tt)for(var X=0,q=bn(n,$+1,$=Lh(F=g[tt])),et=n;X<J;++X)(et=Gh(F>0?V[X]+" "+q:mt(q,/&\f/g,V[X])))&&(A[K++]=et);return oc(n,c,o,d===0?cc:w,A,m,R,O)}function gv(n,c,o,r){return oc(n,c,o,qh,tf(ov()),bn(n,2,-2),0,r)}function mh(n,c,o,r,d){return oc(n,c,o,Po,bn(n,0,r),bn(n,r+1,-1),r,d)}function Vh(n,c,o){switch(cv(n,c)){case 5103:return Ot+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ot+n+n;case 4789:return Tu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ot+n+Tu+n+Qt+n+n;case 5936:switch(ce(n,c+11)){case 114:return Ot+n+Qt+mt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ot+n+Qt+mt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ot+n+Qt+mt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ot+n+Qt+n+n;case 6165:return Ot+n+Qt+"flex-"+n+n;case 5187:return Ot+n+mt(n,/(\w+).+(:[^]+)/,Ot+"box-$1$2"+Qt+"flex-$1$2")+n;case 5443:return Ot+n+Qt+"flex-item-"+mt(n,/flex-|-self/g,"")+(xl(n,/flex-|baseline/)?"":Qt+"grid-row-"+mt(n,/flex-|-self/g,""))+n;case 4675:return Ot+n+Qt+"flex-line-pack"+mt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ot+n+Qt+mt(n,"shrink","negative")+n;case 5292:return Ot+n+Qt+mt(n,"basis","preferred-size")+n;case 6060:return Ot+"box-"+mt(n,"-grow","")+Ot+n+Qt+mt(n,"grow","positive")+n;case 4554:return Ot+mt(n,/([^-])(transform)/g,"$1"+Ot+"$2")+n;case 6187:return mt(mt(mt(n,/(zoom-|grab)/,Ot+"$1"),/(image-set)/,Ot+"$1"),n,"")+n;case 5495:case 3959:return mt(n,/(image-set\([^]*)/,Ot+"$1$`$1");case 4968:return mt(mt(n,/(.+:)(flex-)?(.*)/,Ot+"box-pack:$3"+Qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ot+n+n;case 4200:if(!xl(n,/flex-|baseline/))return Qt+"grid-column-align"+bn(n,c)+n;break;case 2592:case 3360:return Qt+mt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,xl(r.props,/grid-\w+-end/)})?~Ji(n+(o=o[c].value),"span",0)?n:Qt+mt(n,"-start","")+n+Qt+"grid-row-span:"+(~Ji(o,"span",0)?xl(o,/\d+/):+xl(o,/\d+/)-+xl(n,/\d+/))+";":Qt+mt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(r){return xl(r.props,/grid-\w+-start/)})?n:Qt+mt(mt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return mt(n,/(.+)-inline(.+)/,Ot+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(el(n)-1-c>6)switch(ce(n,c+1)){case 109:if(ce(n,c+4)!==45)break;case 102:return mt(n,/(.+:)(.+)-([^]+)/,"$1"+Ot+"$2-$3$1"+Tu+(ce(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~Ji(n,"stretch",0)?Vh(mt(n,"stretch","fill-available"),c,o)+n:n}break;case 5152:case 5920:return mt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,b,g,w,A,m){return Qt+d+":"+b+m+(g?Qt+d+"-span:"+(w?A:+A-+b)+m:"")+n});case 4949:if(ce(n,c+6)===121)return mt(n,":",":"+Ot)+n;break;case 6444:switch(ce(n,ce(n,14)===45?18:11)){case 120:return mt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ot+(ce(n,14)===45?"inline-":"")+"box$3$1"+Ot+"$2$3$1"+Qt+"$2box$3")+n;case 100:return mt(n,":",":"+Qt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mt(n,"scroll-","scroll-snap-")+n}return n}function tc(n,c){for(var o="",r=0;r<n.length;r++)o+=c(n[r],r,n,c)||"";return o}function yv(n,c,o,r){switch(n.type){case iv:if(n.children.length)break;case uv:case Po:return n.return=n.return||n.value;case qh:return"";case Yh:return n.return=n.value+"{"+tc(n.children,r)+"}";case cc:if(!el(n.value=n.props.join(",")))return""}return el(o=tc(n.children,r))?n.return=n.value+"{"+o+"}":""}function Av(n){var c=Xh(n);return function(o,r,d,b){for(var g="",w=0;w<c;w++)g+=n[w](o,r,d,b)||"";return g}}function xv(n){return function(c){c.root||(c=c.return)&&n(c)}}function Sv(n,c,o,r){if(n.length>-1&&!n.return)switch(n.type){case Po:n.return=Vh(n.value,n.length,o);return;case Yh:return tc([Vl(n,{value:mt(n.value,"@","@"+Ot)})],r);case cc:if(n.length)return rv(o=n.props,function(d){switch(xl(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sn(Vl(n,{props:[mt(d,/:(read-\w+)/,":"+Tu+"$1")]})),sn(Vl(n,{props:[d]})),Qo(n,{props:ph(o,r)});break;case"::placeholder":sn(Vl(n,{props:[mt(d,/:(plac\w+)/,":"+Ot+"input-$1")]})),sn(Vl(n,{props:[mt(d,/:(plac\w+)/,":"+Tu+"$1")]})),sn(Vl(n,{props:[mt(d,/:(plac\w+)/,Qt+"input-$1")]})),sn(Vl(n,{props:[d]})),Qo(n,{props:ph(o,r)});break}return""})}}var Ev={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},vn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Kh="active",Jh="data-styled-version",sc="6.1.19",ef=`/*!sc*/
`,ec=typeof window<"u"&&typeof document<"u",Tv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),Dv={},dc=Object.freeze([]),gn=Object.freeze({});function Wh(n,c,o){return o===void 0&&(o=gn),n.theme!==o.theme&&n.theme||c||o.theme}var Fh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rv=/(^-|-$)/g;function vh(n){return n.replace(wv,"-").replace(Rv,"")}var Ov=/(a)(d)/gi,Gi=52,gh=function(n){return String.fromCharCode(n+(n>25?39:97))};function Yo(n){var c,o="";for(c=Math.abs(n);c>Gi;c=c/Gi|0)o=gh(c%Gi)+o;return(gh(c%Gi)+o).replace(Ov,"$1-$2")}var No,Ih=5381,hn=function(n,c){for(var o=c.length;o;)n=33*n^c.charCodeAt(--o);return n},Ph=function(n){return hn(Ih,n)};function tp(n){return Yo(Ph(n)>>>0)}function zv(n){return n.displayName||n.name||"Component"}function Uo(n){return typeof n=="string"&&!0}var ep=typeof Symbol=="function"&&Symbol.for,lp=ep?Symbol.for("react.memo"):60115,Mv=ep?Symbol.for("react.forward_ref"):60112,_v={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bv=((No={})[Mv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},No[lp]=ap,No);function yh(n){return("type"in(c=n)&&c.type.$$typeof)===lp?ap:"$$typeof"in n?Bv[n.$$typeof]:_v;var c}var Nv=Object.defineProperty,Uv=Object.getOwnPropertyNames,Ah=Object.getOwnPropertySymbols,$v=Object.getOwnPropertyDescriptor,Hv=Object.getPrototypeOf,xh=Object.prototype;function np(n,c,o){if(typeof c!="string"){if(xh){var r=Hv(c);r&&r!==xh&&np(n,r,o)}var d=Uv(c);Ah&&(d=d.concat(Ah(c)));for(var b=yh(n),g=yh(c),w=0;w<d.length;++w){var A=d[w];if(!(A in Cv||o&&o[A]||g&&A in g||b&&A in b)){var m=$v(c,A);try{Nv(n,A,m)}catch{}}}}return n}function Aa(n){return typeof n=="function"}function lf(n){return typeof n=="object"&&"styledComponentId"in n}function va(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Lo(n,c){if(n.length===0)return"";for(var o=n[0],r=1;r<n.length;r++)o+=n[r];return o}function Ou(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Go(n,c,o){if(o===void 0&&(o=!1),!o&&!Ou(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=Go(n[r],c[r]);else if(Ou(c))for(var r in c)n[r]=Go(n[r],c[r]);return n}function af(n,c){Object.defineProperty(n,"toString",{value:c})}function xa(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var kv=function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},n.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,b=d;c>=b;)if((b<<=1)<0)throw xa(16,"".concat(c));this.groupSizes=new Uint32Array(b),this.groupSizes.set(r),this.length=b;for(var g=d;g<b;g++)this.groupSizes[g]=0}for(var w=this.indexOfGroup(c+1),A=(g=0,o.length);g<A;g++)this.tag.insertRule(w,o[g])&&(this.groupSizes[c]++,w++)},n.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var b=r;b<d;b++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),b=d+r,g=d;g<b;g++)o+="".concat(this.tag.getRule(g)).concat(ef);return o},n}(),Ii=new Map,lc=new Map,Pi=1,Xi=function(n){if(Ii.has(n))return Ii.get(n);for(;lc.has(Pi);)Pi++;var c=Pi++;return Ii.set(n,c),lc.set(c,n),c},Qv=function(n,c){Pi=c+1,Ii.set(n,c),lc.set(c,n)},jv="style[".concat(vn,"][").concat(Jh,'="').concat(sc,'"]'),qv=new RegExp("^".concat(vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yv=function(n,c,o){for(var r,d=o.split(","),b=0,g=d.length;b<g;b++)(r=d[b])&&n.registerName(c,r)},Lv=function(n,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(ef),d=[],b=0,g=r.length;b<g;b++){var w=r[b].trim();if(w){var A=w.match(qv);if(A){var m=0|parseInt(A[1],10),R=A[2];m!==0&&(Qv(R,m),Yv(n,R,A[3]),n.getTag().insertRules(m,d)),d.length=0}else d.push(w)}}},Sh=function(n){for(var c=document.querySelectorAll(jv),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(vn)!==Kh&&(Lv(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Gv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var up=function(n){var c=document.head,o=n||c,r=document.createElement("style"),d=function(w){var A=Array.from(w.querySelectorAll("style[".concat(vn,"]")));return A[A.length-1]}(o),b=d!==void 0?d.nextSibling:null;r.setAttribute(vn,Kh),r.setAttribute(Jh,sc);var g=Gv();return g&&r.setAttribute("nonce",g),o.insertBefore(r,b),r},Xv=function(){function n(c){this.element=up(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,b=r.length;d<b;d++){var g=r[d];if(g.ownerNode===o)return g}throw xa(17)}(this.element),this.length=0}return n.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},n}(),Zv=function(){function n(c){this.element=up(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n}(),Vv=function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n}(),Eh=ec,Kv={isServer:!ec,useCSSOMInjection:!Tv},ac=function(){function n(c,o,r){c===void 0&&(c=gn),o===void 0&&(o={});var d=this;this.options=re(re({},Kv),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&ec&&Eh&&(Eh=!1,Sh(this)),af(this,function(){return function(b){for(var g=b.getTag(),w=g.length,A="",m=function(O){var $=function(K){return lc.get(K)}(O);if($===void 0)return"continue";var V=b.names.get($),J=g.getGroup(O);if(V===void 0||!V.size||J.length===0)return"continue";var tt="".concat(vn,".g").concat(O,'[id="').concat($,'"]'),F="";V!==void 0&&V.forEach(function(K){K.length>0&&(F+="".concat(K,","))}),A+="".concat(J).concat(tt,'{content:"').concat(F,'"}').concat(ef)},R=0;R<w;R++)m(R);return A}(d)})}return n.registerId=function(c){return Xi(c)},n.prototype.rehydrate=function(){!this.server&&ec&&Sh(this)},n.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new n(re(re({},this.options),c),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new Vv(d):r?new Xv(d):new Zv(d)}(this.options),new kv(c)));var c},n.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},n.prototype.registerName=function(c,o){if(Xi(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},n.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Xi(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Xi(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Jv=/&/g,Wv=/^\s*\/\/.*$/gm;function ip(n,c){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=ip(o.children,c)),o})}function Fv(n){var c,o,r,d=gn,b=d.options,g=b===void 0?gn:b,w=d.plugins,A=w===void 0?dc:w,m=function($,V,J){return J.startsWith(o)&&J.endsWith(o)&&J.replaceAll(o,"").length>0?".".concat(c):$},R=A.slice();R.push(function($){$.type===cc&&$.value.includes("&")&&($.props[0]=$.props[0].replace(Jv,o).replace(r,m))}),g.prefix&&R.push(Sv),R.push(yv);var O=function($,V,J,tt){V===void 0&&(V=""),J===void 0&&(J=""),tt===void 0&&(tt="&"),c=tt,o=V,r=new RegExp("\\".concat(o,"\\b"),"g");var F=$.replace(Wv,""),K=vv(J||V?"".concat(J," ").concat(V," { ").concat(F," }"):F);g.namespace&&(K=ip(K,g.namespace));var X=[];return tc(K,Av(R.concat(xv(function(q){return X.push(q)})))),X};return O.hash=A.length?A.reduce(function($,V){return V.name||xa(15),hn($,V.name)},Ih).toString():"",O}var Iv=new ac,Xo=Fv(),cp=D.createContext({shouldForwardProp:void 0,styleSheet:Iv,stylis:Xo});cp.Consumer;D.createContext(void 0);function Zo(){return M.useContext(cp)}var Pv=function(){function n(c,o){var r=this;this.inject=function(d,b){b===void 0&&(b=Xo);var g=r.name+b.hash;d.hasNameForId(r.id,g)||d.insertRules(r.id,g,b(r.rules,g,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,af(this,function(){throw xa(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Xo),this.name+c.hash},n}(),t1=function(n){return n>="A"&&n<="Z"};function Th(n){for(var c="",o=0;o<n.length;o++){var r=n[o];if(o===1&&r==="-"&&n[0]==="-")return n;t1(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var rp=function(n){return n==null||n===!1||n===""},op=function(n){var c,o,r=[];for(var d in n){var b=n[d];n.hasOwnProperty(d)&&!rp(b)&&(Array.isArray(b)&&b.isCss||Aa(b)?r.push("".concat(Th(d),":"),b,";"):Ou(b)?r.push.apply(r,Ru(Ru(["".concat(d," {")],op(b),!1),["}"],!1)):r.push("".concat(Th(d),": ").concat((c=d,(o=b)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Ev||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Kl(n,c,o,r){if(rp(n))return[];if(lf(n))return[".".concat(n.styledComponentId)];if(Aa(n)){if(!Aa(b=n)||b.prototype&&b.prototype.isReactComponent||!c)return[n];var d=n(c);return Kl(d,c,o,r)}var b;return n instanceof Pv?o?(n.inject(o,r),[n.getName(r)]):[n]:Ou(n)?op(n):Array.isArray(n)?Array.prototype.concat.apply(dc,n.map(function(g){return Kl(g,c,o,r)})):[n.toString()]}function fp(n){for(var c=0;c<n.length;c+=1){var o=n[c];if(Aa(o)&&!lf(o))return!1}return!0}var e1=Ph(sc),l1=function(){function n(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fp(c),this.componentId=o,this.baseHash=hn(e1,o),this.baseStyle=r,ac.registerId(o)}return n.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=va(d,this.staticRulesId);else{var b=Lo(Kl(this.rules,c,o,r)),g=Yo(hn(this.baseHash,b)>>>0);if(!o.hasNameForId(this.componentId,g)){var w=r(b,".".concat(g),void 0,this.componentId);o.insertRules(this.componentId,g,w)}d=va(d,g),this.staticRulesId=g}else{for(var A=hn(this.baseHash,r.hash),m="",R=0;R<this.rules.length;R++){var O=this.rules[R];if(typeof O=="string")m+=O;else if(O){var $=Lo(Kl(O,c,o,r));A=hn(A,$+R),m+=$}}if(m){var V=Yo(A>>>0);o.hasNameForId(this.componentId,V)||o.insertRules(this.componentId,V,r(m,".".concat(V),void 0,this.componentId)),d=va(d,V)}}return d},n}(),zu=D.createContext(void 0);zu.Consumer;function a1(n){var c=D.useContext(zu),o=M.useMemo(function(){return function(r,d){if(!r)throw xa(14);if(Aa(r)){var b=r(d);return b}if(Array.isArray(r)||typeof r!="object")throw xa(8);return d?re(re({},d),r):r}(n.theme,c)},[n.theme,c]);return n.children?D.createElement(zu.Provider,{value:o},n.children):null}var $o={};function n1(n,c,o){var r=lf(n),d=n,b=!Uo(n),g=c.attrs,w=g===void 0?dc:g,A=c.componentId,m=A===void 0?function(et,L){var W=typeof et!="string"?"sc":vh(et);$o[W]=($o[W]||0)+1;var I="".concat(W,"-").concat(tp(sc+W+$o[W]));return L?"".concat(L,"-").concat(I):I}(c.displayName,c.parentComponentId):A,R=c.displayName,O=R===void 0?function(et){return Uo(et)?"styled.".concat(et):"Styled(".concat(zv(et),")")}(n):R,$=c.displayName&&c.componentId?"".concat(vh(c.displayName),"-").concat(c.componentId):c.componentId||m,V=r&&d.attrs?d.attrs.concat(w).filter(Boolean):w,J=c.shouldForwardProp;if(r&&d.shouldForwardProp){var tt=d.shouldForwardProp;if(c.shouldForwardProp){var F=c.shouldForwardProp;J=function(et,L){return tt(et,L)&&F(et,L)}}else J=tt}var K=new l1(o,$,r?d.componentStyle:void 0);function X(et,L){return function(W,I,St){var Rt=W.attrs,Zt=W.componentStyle,Ut=W.defaultProps,bt=W.foldedComponentIds,jt=W.styledComponentId,$t=W.target,gt=D.useContext(zu),z=Zo(),Y=W.shouldForwardProp||z.shouldForwardProp,G=Wh(I,gt,Ut)||gn,ut=function(lt,Z,rt){for(var dt,k=re(re({},Z),{className:void 0,theme:rt}),st=0;st<lt.length;st+=1){var ht=Aa(dt=lt[st])?dt(k):dt;for(var Et in ht)k[Et]=Et==="className"?va(k[Et],ht[Et]):Et==="style"?re(re({},k[Et]),ht[Et]):ht[Et]}return Z.className&&(k.className=va(k.className,Z.className)),k}(Rt,I,G),p=ut.as||$t,B={};for(var j in ut)ut[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&ut.theme===G||(j==="forwardedAs"?B.as=ut.forwardedAs:Y&&!Y(j,p)||(B[j]=ut[j]));var N=function(lt,Z){var rt=Zo(),dt=lt.generateAndInjectStyles(Z,rt.styleSheet,rt.stylis);return dt}(Zt,ut),Q=va(bt,jt);return N&&(Q+=" "+N),ut.className&&(Q+=" "+ut.className),B[Uo(p)&&!Fh.has(p)?"class":"className"]=Q,St&&(B.ref=St),M.createElement(p,B)}(q,et,L)}X.displayName=O;var q=D.forwardRef(X);return q.attrs=V,q.componentStyle=K,q.displayName=O,q.shouldForwardProp=J,q.foldedComponentIds=r?va(d.foldedComponentIds,d.styledComponentId):"",q.styledComponentId=$,q.target=r?d.target:n,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(et){this._foldedDefaultProps=r?function(L){for(var W=[],I=1;I<arguments.length;I++)W[I-1]=arguments[I];for(var St=0,Rt=W;St<Rt.length;St++)Go(L,Rt[St],!0);return L}({},d.defaultProps,et):et}}),af(q,function(){return".".concat(q.styledComponentId)}),b&&np(q,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function Dh(n,c){for(var o=[n[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],n[r+1]);return o}var wh=function(n){return Object.assign(n,{isCss:!0})};function P(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Aa(n)||Ou(n))return wh(Kl(Dh(dc,Ru([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?Kl(r):wh(Kl(Dh(r,c)))}function Vo(n,c,o){if(o===void 0&&(o=gn),!c)throw xa(1,c);var r=function(d){for(var b=[],g=1;g<arguments.length;g++)b[g-1]=arguments[g];return n(c,o,P.apply(void 0,Ru([d],b,!1)))};return r.attrs=function(d){return Vo(n,c,re(re({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return Vo(n,c,re(re({},o),d))},r}var sp=function(n){return Vo(n1,n)},H=sp;Fh.forEach(function(n){H[n]=sp(n)});var u1=function(){function n(c,o){this.rules=c,this.componentId=o,this.isStatic=fp(c),ac.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,o,r,d){var b=d(Lo(Kl(this.rules,o,r,d)),""),g=this.componentId+c;r.insertRules(g,g,b)},n.prototype.removeStyles=function(c,o){o.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,o,r,d){c>2&&ac.registerId(this.componentId+c),this.removeStyles(c,r),this.createStyles(c,o,r,d)},n}();function i1(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var r=P.apply(void 0,Ru([n],c,!1)),d="sc-global-".concat(tp(JSON.stringify(r))),b=new u1(r,d),g=function(A){var m=Zo(),R=D.useContext(zu),O=D.useRef(m.styleSheet.allocateGSInstance(d)).current;return m.styleSheet.server&&w(O,A,m.styleSheet,R,m.stylis),D.useLayoutEffect(function(){if(!m.styleSheet.server)return w(O,A,m.styleSheet,R,m.stylis),function(){return b.removeStyles(O,m.styleSheet)}},[O,A,m.styleSheet,R,m.stylis]),null};function w(A,m,R,O,$){if(b.isStatic)b.renderStyles(A,Dv,R,$);else{var V=re(re({},m),{theme:Wh(m,O,g.defaultProps)});b.renderStyles(A,V,R,$)}}return D.memo(g)}var c1=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const nf="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",uf="inset 2px 2px 3px rgba(0,0,0,0.2)",Ke=()=>P`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Je=({background:n="material",color:c="materialText"}={})=>P`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[c]};
`,Mu=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:o=2})=>P`
  background-image: ${[`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`,`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`].join(",")};
  background-color: ${c};
  background-size: ${`${o*2}px ${o*2}px`};
  background-position: 0 0, ${`${o}px ${o}px`};
`,Sa=()=>P`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,dn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},r1=({theme:n,topLeftInner:c,bottomRightInner:o,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?nf:!1,d?uf:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),Xt=({invert:n=!1,style:c="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return P`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[dn[c][o.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[dn[c][o.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[dn[c][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[dn[c][o.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>r1({theme:r,topLeftInner:dn[c][o.topLeftInner],bottomRightInner:dn[c][o.bottomRightInner],hasShadow:d})};
  `},yn=()=>P`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,o1=n=>Buffer.from(n).toString("base64"),f1=typeof btoa<"u"?btoa:o1,Zi=(n,c=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${f1(o)})`},cf=(n="default")=>P`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>Mu({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Je()}
    ${n==="flat"?Sa():Xt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${Je()}
    ${n==="flat"?Sa():Xt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${n==="default"?Xt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:c})=>Zi(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>Zi(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>Zi(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>Zi(c.materialText,0)};
  }
`,s1=H.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,d1=M.forwardRef(({children:n,underline:c=!0,...o},r)=>D.createElement(s1,{ref:r,underline:c,...o},n));d1.displayName="Anchor";const h1=H.header`
  ${Xt()};
  ${Je()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,dp=M.forwardRef(({children:n,fixed:c=!0,position:o="fixed",...r},d)=>D.createElement(h1,{fixed:c,position:c!==!1?o:void 0,ref:d,...r},n));dp.displayName="AppBar";const Ea=()=>{};function ga(n,c,o){return o!==null&&n>o?o:c!==null&&n<c?c:n}function p1(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),r=o[0].split(".")[1];return(r?r.length:0)+parseInt(o[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function Rh(n,c,o){const r=Math.round((n-o)/c)*c+o;return Number(r.toFixed(p1(c)))}function Jl(n){return typeof n=="number"?`${n}px`:n}const b1=H.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:c})=>!n&&`
    border-top: 2px solid ${c.borderDark};
    border-left: 2px solid ${c.borderDark};
    border-bottom: 2px solid ${c.borderLightest};
    border-right: 2px solid ${c.borderLightest};
    background: ${c.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,m1=H.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,v1=M.forwardRef(({alt:n="",children:c,noBorder:o=!1,size:r=35,square:d=!1,src:b,...g},w)=>D.createElement(b1,{noBorder:o,ref:w,size:Jl(r),square:d,src:b,...g},b?D.createElement(m1,{src:b,alt:n}):c));v1.displayName="Avatar";const de={sm:"28px",md:"36px",lg:"44px"},g1=P`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>de[n]};
  width: ${({fullWidth:n,size:c="md",square:o})=>n?"100%":o?de[c]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:c})=>n&&!c&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,hc=H.button`
  ${({active:n,disabled:c,primary:o,theme:r,variant:d})=>d==="flat"?P`
          ${Sa()}
          ${o?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!c&&yn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?P`
          ${Je()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!n&&Xt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Xt({style:"buttonThinPressed"})}
          }
          ${n&&Xt({style:"buttonThinPressed"})}
          ${c&&Ke()}
        `:P`
          ${Je()};
          border: none;
          ${c&&Ke()}
          ${n?Mu({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?P`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:P`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Xt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&Xt({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!c&&yn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${g1}
`,An=M.forwardRef(({onClick:n,disabled:c=!1,children:o,type:r="button",fullWidth:d=!1,size:b="md",square:g=!1,active:w=!1,onTouchStart:A=Ea,primary:m=!1,variant:R="default",...O},$)=>D.createElement(hc,{active:w,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:A,primary:m,ref:$,size:b,square:g,type:r,variant:R,...O},o));An.displayName="Button";function Wl({defaultValue:n,onChange:c,onChangePropName:o="onChange",readOnly:r,value:d,valuePropName:b="value"}){const g=d!==void 0,[w,A]=M.useState(n),m=M.useCallback(R=>{g||A(R)},[g]);if(g&&typeof c!="function"&&!r){const R=`Warning: You provided a \`${b}\` prop to a component without an \`${o}\` handler.${b==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${b}\`.`}`;console.warn(R)}return[g?d:w,m]}const Ko=H.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>de[n.size]};
  width: ${n=>n.square?de[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>de[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:c})=>!c&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&Ke()}
`,Eu=M.forwardRef(({size:n="lg",disabled:c,square:o,children:r,onClick:d,primary:b,...g},w)=>D.createElement(Ko,{$disabled:c,size:n,square:o,onClick:c?void 0:d,primary:b,role:"menuitem",ref:w,"aria-disabled":c,...g},r));Eu.displayName="MenuListItem";const hp=H.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Xt({style:"window"})}
  ${Je()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;hp.displayName="MenuList";const ll=20,nc=H.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ll}px;
  height: ${ll}px;
  opacity: 0;
  z-index: -1;
`,rf=H.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&Ke()}

  ${Ko} & {
    margin: 0;
    height: 100%;
  }
  ${Ko}:hover & {
    ${({$disabled:n,theme:c})=>!n&&P`
        color: ${c.materialTextInvert};
      `};
  }
`,of=H.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${nc}:focus ~ & {
    ${yn}
  }
  ${nc}:not(:disabled) ~ &:active {
    ${yn}
  }
`,al=H.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:n})=>n.borderDark};
  border-top-color: ${({theme:n})=>n.borderDark};
  border-right-color: ${({theme:n})=>n.borderLightest};
  border-bottom-color: ${({theme:n})=>n.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:n})=>n.borderDarkest};
    border-top-color: ${({theme:n})=>n.borderDarkest};
    border-right-color: ${({theme:n})=>n.borderLight};
    border-bottom-color: ${({theme:n})=>n.borderLight};

    pointer-events: none;
    ${n=>n.shadow&&`box-shadow:${uf};`}
  }
`,y1=H.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${cf()}
`,ff=M.forwardRef(({children:n,shadow:c=!0,...o},r)=>D.createElement(al,{ref:r,shadow:c,...o},D.createElement(y1,null,n)));ff.displayName="ScrollView";const pp=P`
  width: ${ll}px;
  height: ${ll}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,A1=H(al)`
  ${pp}
  width: ${ll}px;
  height: ${ll}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,x1=H.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${pp}
  width: ${ll-4}px;
  height: ${ll-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,S1=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:n,theme:c})=>n?c.checkmarkDisabled:c.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,E1=H.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>Mu({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,T1={flat:x1,default:A1},D1=M.forwardRef(({checked:n,className:c="",defaultChecked:o=!1,disabled:r=!1,indeterminate:d=!1,label:b="",onChange:g=Ea,style:w={},value:A,variant:m="default",...R},O)=>{var $;const[V,J]=Wl({defaultValue:o,onChange:g,readOnly:($=R.readOnly)!==null&&$!==void 0?$:r,value:n}),tt=M.useCallback(X=>{const q=X.target.checked;J(q),g(X)},[g,J]),F=T1[m];let K=null;return d?K=E1:V&&(K=S1),D.createElement(rf,{$disabled:r,className:c,style:w},D.createElement(nc,{disabled:r,onChange:r?void 0:tt,readOnly:r,type:"checkbox",value:A,checked:V,"data-indeterminate":d,ref:O,...R}),D.createElement(F,{$disabled:r,role:"presentation"},K&&D.createElement(K,{$disabled:r,variant:m})),b&&D.createElement(of,null,b))});D1.displayName="Checkbox";const sf=H.div`
  ${({orientation:n,theme:c,size:o="100%"})=>n==="vertical"?`
    height: ${Jl(o)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${Jl(o)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;sf.displayName="Separator";const w1=H(hc)`
  padding-left: 8px;
`,R1=H(sf)`
  height: 21px;
  position: relative;
  top: 0;
`,bp=H.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,O1=H.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?P`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:P`
          border: 2px solid ${({theme:c})=>c.materialText};
        `}
  ${bp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${yn}
    outline-offset: -8px;
  }
`,z1=H.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?P`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:P`
          border-top: 6px solid ${({theme:c})=>c.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:n})=>n==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,M1=M.forwardRef(({value:n,defaultValue:c,onChange:o=Ea,disabled:r=!1,variant:d="default",...b},g)=>{var w;const[A,m]=Wl({defaultValue:c,onChange:o,readOnly:(w=b.readOnly)!==null&&w!==void 0?w:r,value:n}),R=O=>{const $=O.target.value;m($),o(O)};return D.createElement(w1,{disabled:r,as:"div",variant:d,size:"md"},D.createElement(bp,{onChange:R,readOnly:r,disabled:r,value:A??"#008080",type:"color",ref:g,...b}),D.createElement(O1,{$disabled:r,color:A??"#008080",role:"presentation"}),d==="default"&&D.createElement(R1,{orientation:"vertical"}),D.createElement(z1,{$disabled:r,variant:d}))});M1.displayName="ColorInput";const _1=H.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>P`
    width: ${11*n}px;
    height: ${21*n}px;
    margin: ${n}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Mu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${n}px;
      width: ${9*n}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${n}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${n*2}px);
      top: ${2*n}px;
      left: ${n}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${n}px;
      width: ${9*n}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${n}px;
    }
    span.center:after {
      bottom: ${n}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${n}px;
      border-top: ${n}px solid var(--react95-digit-bg-color);
      border-bottom: ${n}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*n}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${n}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${n*2}px);
      top: ${n}px;
      left: ${n*2}px;
    }
  `}
`,Oh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],C1=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function B1({digit:n=0,pixelSize:c=2,...o}){const r=C1[Number(n)].map((d,b)=>d?`${Oh[b]} active`:Oh[b]);return D.createElement(_1,{pixelSize:c,...o},r.map((d,b)=>D.createElement("span",{className:d,key:b})))}const N1=H.div`
  ${Xt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,U1={sm:1,md:2,lg:3,xl:4},$1=M.forwardRef(({value:n=0,minLength:c=3,size:o="md",...r},d)=>{const b=M.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return D.createElement(N1,{ref:d,...r},b.map((g,w)=>D.createElement(B1,{digit:g,pixelSize:U1[o],key:w})))});$1.displayName="Counter";const mp=P`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${de.md};
`,H1=H(al).attrs({"data-testid":"variant-default"})`
  ${mp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,k1=H.div.attrs({"data-testid":"variant-flat"})`
  ${Sa()}
  ${mp}
  position: relative;
`,vp=P`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:n})=>n.canvasText};
  ${({disabled:n,variant:c})=>c!=="flat"&&n&&Ke()}
`,Q1=H.input`
  ${vp}
  padding: 0 8px;
`,j1=H.textarea`
  ${vp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>cf(n)}
`,df=M.forwardRef(({className:n,disabled:c=!1,fullWidth:o,onChange:r=Ea,shadow:d=!0,style:b,variant:g="default",...w},A)=>{const m=g==="flat"?k1:H1,R=M.useMemo(()=>{var O;return w.multiline?D.createElement(j1,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,variant:g,...w}):D.createElement(Q1,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,type:(O=w.type)!==null&&O!==void 0?O:"text",variant:g,...w})},[c,r,w,A,g]);return D.createElement(m,{className:n,fullWidth:o,$disabled:c,shadow:d,style:b},R)});df.displayName="TextInput";const q1=H.div`
  display: inline-flex;
  align-items: center;
`,Jo=H(An)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?P`
          height: calc(50% - 1px);
        `:P`
          height: 50%;
        `}
`,Y1=H.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?P`
          height: calc(${de.md} - 4px);
        `:P`
          height: ${de.md};
          margin-left: 2px;
        `}
`,zh=H.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:P`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${Jo}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?P`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:P`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,gp=M.forwardRef(({className:n,defaultValue:c,disabled:o=!1,max:r,min:d,onChange:b,readOnly:g,step:w=1,style:A,value:m,variant:R="default",width:O,...$},V)=>{const[J,tt]=Wl({defaultValue:c,onChange:b,readOnly:g,value:m}),F=M.useCallback(W=>{const I=parseFloat(W.target.value);tt(I)},[tt]),K=M.useCallback(W=>{const I=ga(parseFloat(((J??0)+W).toFixed(2)),d??null,r??null);tt(I),b==null||b(I)},[r,d,b,tt,J]),X=M.useCallback(()=>{J!==void 0&&(b==null||b(J))},[b,J]),q=M.useCallback(()=>{K(w)},[K,w]),et=M.useCallback(()=>{K(-w)},[K,w]),L=R==="flat"?"flat":"raised";return D.createElement(q1,{className:n,style:{...A,width:O!==void 0?Jl(O):"auto"},...$},D.createElement(df,{value:J,variant:R,onChange:F,disabled:o,type:"number",readOnly:g,ref:V,fullWidth:!0,onBlur:X}),D.createElement(Y1,{variant:R},D.createElement(Jo,{"data-testid":"increment",variant:L,disabled:o||g,onClick:q},D.createElement(zh,{invert:!0})),D.createElement(Jo,{"data-testid":"decrement",variant:L,disabled:o||g,onClick:et},D.createElement(zh,null))))});gp.displayName="NumberInput";function L1(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let o=0;o<10;o+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const yp=n=>M.useMemo(()=>L1(),[n]),Ap=P`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,xp=P`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,hf=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,G1=H.div`
  ${Ap}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${hf}:focus & {
    ${xp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Sp=P`
  height: ${de.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?Ke():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,X1=H(al)`
  ${Sp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,Z1=H.div`
  ${Sa()}
  ${Sp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,V1=H.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Ap}
  cursor: pointer;
  &:disabled {
    ${Ke()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Ep=H(hc).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?P`
          height: 100%;
          margin-right: 0;
        `:P`
          height: 100%;
        `}
  ${({native:n=!1,variant:c="default"})=>n&&(c==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:c=!1})=>n||c?"none":"auto"}
`,K1=H.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:n=!1,theme:c})=>n?c.materialTextDisabled:c.materialText};
  ${({$disabled:n=!1,theme:c})=>n&&`
    filter: drop-shadow(1px 1px 0px ${c.materialTextDisabledShadow});
    border-top-color: ${c.materialTextDisabled};
    `}
  ${Ep}:active & {
    margin-top: 2px;
  }
`,J1=H.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:n})=>n.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${nf};
  ${({variant:n="default"})=>n==="flat"?P`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:P`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>cf(n)}
`,W1=H.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${de.md} - 4px);
  line-height: calc(${de.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?xp:""}
  user-select: none;
`,F1=[],Tp=({className:n,defaultValue:c,disabled:o,native:r,onChange:d,options:b=F1,readOnly:g,style:w,value:A,variant:m,width:R})=>{var O;const $=M.useMemo(()=>b.filter(Boolean),[b]),[V,J]=Wl({defaultValue:c??((O=$==null?void 0:$[0])===null||O===void 0?void 0:O.value),onChange:d,readOnly:g,value:A}),tt=!(o||g),F=M.useMemo(()=>({className:n,style:{...w,width:R}}),[n,w,R]),K=M.useMemo(()=>D.createElement(Ep,{as:"div","data-testid":"select-button",$disabled:o,native:r,tabIndex:-1,variant:m==="flat"?"flat":"raised"},D.createElement(K1,{"data-testid":"select-icon",$disabled:o})),[o,r,m]),X=M.useMemo(()=>m==="flat"?Z1:X1,[m]);return M.useMemo(()=>({isEnabled:tt,options:$,value:V,setValue:J,wrapperProps:F,DropdownButton:K,Wrapper:X}),[K,X,tt,$,J,V,F])},I1={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},P1=1e3,tg=({onBlur:n,onChange:c,onClose:o,onFocus:r,onKeyDown:d,onMouseDown:b,onOpen:g,open:w,options:A,readOnly:m,value:R,selectRef:O,setValue:$,wrapperRef:V})=>{const J=M.useRef(null),tt=M.useRef([]),F=M.useRef(0),K=M.useRef(0),X=M.useRef(),q=M.useRef("search"),et=M.useRef(""),L=M.useRef(),[W,I]=Wl({defaultValue:!1,onChange:g,onChangePropName:"onOpen",readOnly:m,value:w,valuePropName:"open"}),St=M.useMemo(()=>{const k=A.findIndex(st=>st.value===R);return F.current=ga(k,0,null),A[k]},[A,R]),[Rt,Zt]=M.useState(A[0]),Ut=M.useCallback(k=>{const st=J.current,ht=tt.current[k];if(!ht||!st){X.current=k;return}X.current=void 0;const Et=st.clientHeight,_t=st.scrollTop,Vt=st.scrollTop+Et,Kt=ht.offsetTop,ve=ht.offsetHeight,Ft=ht.offsetTop+ht.offsetHeight;Kt<_t&&st.scrollTo(0,Kt),Ft>Vt&&st.scrollTo(0,Kt-Et+ve),ht.focus({preventScroll:!0})},[J]),bt=M.useCallback((k,{scroll:st}={})=>{var ht;const Et=A.length-1;let _t;switch(k){case"first":{_t=0;break}case"last":{_t=Et;break}case"next":{_t=ga(K.current+1,0,Et);break}case"previous":{_t=ga(K.current-1,0,Et);break}case"selected":{_t=ga((ht=F.current)!==null&&ht!==void 0?ht:0,0,Et);break}default:_t=k}K.current=_t,Zt(A[_t]),st&&Ut(_t)},[K,A,Ut]),jt=M.useCallback(({fromEvent:k})=>{I(!0),bt("selected",{scroll:!0}),g==null||g({fromEvent:k})},[bt,g,I]),$t=M.useCallback(()=>{q.current="search",et.current="",clearTimeout(L.current)},[]),gt=M.useCallback(({focusSelect:k,fromEvent:st})=>{var ht;o==null||o({fromEvent:st}),I(!1),Zt(A[0]),$t(),X.current=void 0,k&&((ht=O.current)===null||ht===void 0||ht.focus())},[$t,o,A,O,I]),z=M.useCallback(({fromEvent:k})=>{W?gt({focusSelect:!1,fromEvent:k}):jt({fromEvent:k})},[gt,jt,W]),Y=M.useCallback((k,{fromEvent:st})=>{F.current!==k&&(F.current=k,$(A[k].value),c==null||c(A[k],{fromEvent:st}))},[c,A,$]),G=M.useCallback(({focusSelect:k,fromEvent:st})=>{Y(K.current,{fromEvent:st}),gt({focusSelect:k,fromEvent:st})},[gt,Y]),ut=M.useCallback((k,{fromEvent:st,select:ht})=>{var Et;switch(q.current==="cycleFirstLetter"&&k!==et.current&&(q.current="search"),k===et.current?q.current="cycleFirstLetter":et.current+=k,q.current){case"search":{let _t=A.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(et.current))===0});_t<0&&(_t=A.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(k))===0}),et.current=k),_t>=0&&(ht?Y(_t,{fromEvent:st}):bt(_t,{scroll:!0}));break}case"cycleFirstLetter":{const _t=ht?(Et=F.current)!==null&&Et!==void 0?Et:-1:K.current;let Vt=A.findIndex((Kt,ve)=>{var Ft;return ve>_t&&((Ft=Kt.label)===null||Ft===void 0?void 0:Ft.toLocaleUpperCase().indexOf(k))===0});Vt<0&&(Vt=A.findIndex(Kt=>{var ve;return((ve=Kt.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(k))===0})),Vt>=0&&(ht?Y(Vt,{fromEvent:st}):bt(Vt,{scroll:!0}));break}}clearTimeout(L.current),L.current=setTimeout(()=>{q.current==="search"&&(et.current="")},P1)},[bt,A,Y]),p=M.useCallback(k=>{var st;k.button===0&&(k.preventDefault(),(st=O.current)===null||st===void 0||st.focus(),z({fromEvent:k}),b==null||b(k))},[b,O,z]),B=M.useCallback(k=>{G({focusSelect:!0,fromEvent:k})},[G]),j=M.useCallback(k=>{const{altKey:st,code:ht,ctrlKey:Et,metaKey:_t,shiftKey:Vt}=k,{ARROW_DOWN:Kt,ARROW_UP:ve,END:Ft,ENTER:nl,ESC:Le,HOME:Ta,SPACE:Sl,TAB:Fl}=I1,Sn=st||Et||_t||Vt;if(!(ht===Fl&&(st||Et||_t)||ht!==Fl&&Sn))switch(ht){case Kt:{if(k.preventDefault(),!W){jt({fromEvent:k});return}bt("next",{scroll:!0});break}case ve:{if(k.preventDefault(),!W){jt({fromEvent:k});return}bt("previous",{scroll:!0});break}case Ft:{if(k.preventDefault(),!W){jt({fromEvent:k});return}bt("last",{scroll:!0});break}case nl:{if(!W)return;k.preventDefault(),G({focusSelect:!0,fromEvent:k});break}case Le:{if(!W)return;k.preventDefault(),gt({focusSelect:!0,fromEvent:k});break}case Ta:{if(k.preventDefault(),!W){jt({fromEvent:k});return}bt("first",{scroll:!0});break}case Sl:{k.preventDefault(),W?G({focusSelect:!0,fromEvent:k}):jt({fromEvent:k});break}case Fl:{if(!W)return;Vt||k.preventDefault(),G({focusSelect:!Vt,fromEvent:k});break}default:!Sn&&ht.match(/^Key/)&&(k.preventDefault(),k.stopPropagation(),ut(ht.replace(/^Key/,""),{select:!W,fromEvent:k}))}},[bt,gt,W,jt,ut,G]),N=M.useCallback(k=>{j(k),d==null||d(k)},[j,d]),Q=M.useCallback(k=>{bt(k)},[bt]),lt=M.useCallback(k=>{W||($t(),n==null||n(k))},[$t,n,W]),Z=M.useCallback(k=>{$t(),r==null||r(k)},[$t,r]),rt=M.useCallback(k=>{J.current=k,X.current!==void 0&&Ut(X.current)},[Ut]),dt=M.useCallback((k,st)=>{tt.current[st]=k,X.current===st&&Ut(X.current)},[Ut]);return M.useEffect(()=>{if(!W)return()=>{};const k=st=>{var ht;const Et=st.target;!((ht=V.current)===null||ht===void 0)&&ht.contains(Et)||(st.preventDefault(),gt({focusSelect:!1,fromEvent:st}))};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[gt,W,V]),M.useMemo(()=>({activeOption:Rt,handleActivateOptionIndex:Q,handleBlur:lt,handleButtonKeyDown:N,handleDropdownKeyDown:j,handleFocus:Z,handleMouseDown:p,handleOptionClick:B,handleSetDropdownRef:rt,handleSetOptionRef:dt,open:W,selectedOption:St}),[Rt,Q,lt,N,Z,j,p,B,rt,dt,W,St])},eg=M.forwardRef(({className:n,defaultValue:c,disabled:o,onChange:r,options:d,readOnly:b,style:g,value:w,variant:A,width:m,...R},O)=>{const{isEnabled:$,options:V,setValue:J,value:tt,DropdownButton:F,Wrapper:K}=Tp({defaultValue:c,disabled:o,native:!0,onChange:r,options:d,readOnly:b,value:w,variant:A}),X=M.useCallback(q=>{const et=V.find(L=>L.value===q.target.value);et&&(J(et.value),r==null||r(et,{fromEvent:q}))},[r,V,J]);return D.createElement(K,{className:n,style:{...g,width:m}},D.createElement(hf,null,D.createElement(V1,{...R,disabled:o,onChange:$?X:Ea,ref:O,value:tt},V.map((q,et)=>{var L;return D.createElement("option",{key:`${q.value}-${et}`,value:q.value},(L=q.label)!==null&&L!==void 0?L:q.value)})),F))});eg.displayName="SelectNative";function lg({activateOptionIndex:n,active:c,index:o,onClick:r,option:d,selected:b,setRef:g}){const w=M.useCallback(()=>{n(o)},[n,o]),A=M.useCallback(R=>{g(R,o)},[o,g]),m=yp();return D.createElement(W1,{active:c,"aria-selected":b?"true":void 0,"data-value":d.value,id:m,onClick:r,onMouseEnter:w,ref:A,role:"option",tabIndex:0},d.label)}function ag({"aria-label":n,"aria-labelledby":c,className:o,defaultValue:r,disabled:d=!1,formatDisplay:b,inputProps:g,labelId:w,menuMaxHeight:A,name:m,onBlur:R,onChange:O,onClose:$,onFocus:V,onKeyDown:J,onMouseDown:tt,onOpen:F,open:K,options:X,readOnly:q,shadow:et=!0,style:L,variant:W="default",value:I,width:St="auto",...Rt},Zt){const{isEnabled:Ut,options:bt,setValue:jt,value:$t,wrapperProps:gt,DropdownButton:z,Wrapper:Y}=Tp({className:o,defaultValue:r,disabled:d,native:!1,onChange:O,options:X,style:L,readOnly:q,value:I,variant:W,width:St}),G=M.useRef(null),ut=M.useRef(null),p=M.useRef(null),{activeOption:B,handleActivateOptionIndex:j,handleBlur:N,handleButtonKeyDown:Q,handleDropdownKeyDown:lt,handleFocus:Z,handleMouseDown:rt,handleOptionClick:dt,handleSetDropdownRef:k,handleSetOptionRef:st,open:ht,selectedOption:Et}=tg({onBlur:R,onChange:O,onClose:$,onFocus:V,onKeyDown:J,onMouseDown:tt,onOpen:F,open:K,options:bt,value:$t,selectRef:ut,setValue:jt,wrapperRef:p});M.useImperativeHandle(Zt,()=>({focus:nl=>{var Le;(Le=ut.current)===null||Le===void 0||Le.focus(nl)},node:G.current,value:String($t)}),[$t]);const _t=M.useMemo(()=>Et?typeof b=="function"?b(Et):Et.label:"",[b,Et]),Vt=Ut?1:void 0,Kt=M.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),ve=yp(),Ft=M.useMemo(()=>bt.map((nl,Le)=>{const Ta=`${$t}-${Le}`,Sl=nl===B,Fl=nl===Et;return D.createElement(lg,{activateOptionIndex:j,active:Sl,index:Le,key:Ta,onClick:dt,option:nl,selected:Fl,setRef:st})}),[B,j,dt,st,bt,Et,$t]);return D.createElement(Y,{...gt,$disabled:d,ref:p,shadow:et,style:{...L,width:St}},D.createElement("input",{name:m,ref:G,type:"hidden",value:String($t),...g}),D.createElement(hf,{"aria-disabled":d,"aria-expanded":ht,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??w,"aria-owns":Ut&&ht?ve:void 0,onBlur:N,onFocus:Z,onKeyDown:Q,onMouseDown:Ut?rt:tt,ref:ut,role:"button",tabIndex:Vt,...Rt},D.createElement(G1,null,_t),z),Ut&&ht&&D.createElement(J1,{id:ve,onKeyDown:lt,ref:k,role:"listbox",style:Kt,tabIndex:0,variant:W},Ft))}const Dp=M.forwardRef(ag);Dp.displayName="Select";const ng=H.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,uc=M.forwardRef(function({children:c,noPadding:o=!1,...r},d){return D.createElement(ng,{noPadding:o,ref:d,...r},c)});uc.displayName="Toolbar";const ug=H.div`
  padding: 16px;
`,Du=M.forwardRef(function({children:c,...o},r){return D.createElement(ug,{ref:r,...o},c)});Du.displayName="WindowContent";const ig=H.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?P`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:P`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${hc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ic=M.forwardRef(function({active:c=!0,children:o,...r},d){return D.createElement(ig,{active:c,ref:d,...r},o)});ic.displayName="WindowHeader";const cg=H.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Xt({style:"window"})}
  ${Je()}
`,rg=H.span`
  ${({theme:n})=>P`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${n.borderLightest} 16.67%,
      ${n.material} 16.67%,
      ${n.material} 33.33%,
      ${n.borderDark} 33.33%,
      ${n.borderDark} 50%,
      ${n.borderLightest} 50%,
      ${n.borderLightest} 66.67%,
      ${n.material} 66.67%,
      ${n.material} 83.33%,
      ${n.borderDark} 83.33%,
      ${n.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,wu=M.forwardRef(({children:n,resizable:c=!1,resizeRef:o,shadow:r=!0,...d},b)=>D.createElement(cg,{ref:b,shadow:r,...d},n,c&&D.createElement(rg,{"data-testid":"resizeHandle",ref:o})));wu.displayName="Window";const og=H(ff)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,fg=H.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,sg=H.div`
  display: flex;
  flex-wrap: wrap;
`,Al=H.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,dg=H.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,hg=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function pg(n,c){return new Date(n,c+1,0).getDate()}function bg(n,c,o){return new Date(n,c,o).getDay()}function mg(n){const c=new Date(Date.parse(n)),o=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:o,month:r,year:d}}const vg=M.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:o,onCancel:r,shadow:d=!0},b)=>{const[g,w]=M.useState(()=>mg(c)),{year:A,month:m,day:R}=g,O=M.useCallback(({value:F})=>{w(K=>({...K,month:F}))},[]),$=M.useCallback(F=>{w(K=>({...K,year:F}))},[]),V=M.useCallback(F=>{w(K=>({...K,day:F}))},[]),J=M.useCallback(()=>{const F=[g.year,g.month+1,g.day].map(K=>String(K).padStart(2,"0")).join("-");o==null||o(F)},[g.day,g.month,g.year,o]),tt=M.useMemo(()=>{const F=Array.from({length:42}),K=bg(A,m,1);let X=R;const q=pg(A,m);return X=X<q?X:q,F.forEach((et,L)=>{if(L>=K&&L<q+K){const W=L-K+1;F[L]=D.createElement(Al,{key:L,onClick:()=>{V(W)}},D.createElement(dg,{active:W===X},W))}else F[L]=D.createElement(Al,{key:L})}),F},[R,V,m,A]);return D.createElement(wu,{className:n,ref:b,shadow:d,style:{margin:20}},D.createElement(ic,null,D.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),D.createElement(Du,null,D.createElement(uc,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(Dp,{options:hg,value:m,onChange:O,width:128,menuMaxHeight:200}),D.createElement(gp,{value:A,onChange:$,width:100})),D.createElement(og,null,D.createElement(fg,null,D.createElement(Al,null,"S"),D.createElement(Al,null,"M"),D.createElement(Al,null,"T"),D.createElement(Al,null,"W"),D.createElement(Al,null,"T"),D.createElement(Al,null,"F"),D.createElement(Al,null,"S")),D.createElement(sg,null,tt)),D.createElement(uc,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(An,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),D.createElement(An,{fullWidth:!0,onClick:o?J:void 0,disabled:!o},"OK"))))});vg.displayName="DatePicker";const gg=n=>{switch(n){case"status":case"well":return P`
        ${Xt({style:"status"})}
      `;case"window":case"outside":return P`
        ${Xt({style:"window"})}
      `;case"field":return P`
        ${Xt({style:"field"})}
      `;default:return P`
        ${Xt()}
      `}},yg=H.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>gg(n)}
  ${({variant:n})=>Je(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ag=M.forwardRef(({children:n,shadow:c=!1,variant:o="window",...r},d)=>D.createElement(yg,{ref:d,shadow:c,variant:o,...r},n));Ag.displayName="Frame";const xg=H.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&P`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&Ke()}
`,Sg=H.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,Eg=M.forwardRef(({label:n,disabled:c=!1,variant:o="default",children:r,...d},b)=>D.createElement(xg,{"aria-disabled":c,$disabled:c,variant:o,ref:b,...d},n&&D.createElement(Sg,{variant:o},n),r));Eg.displayName="GroupBox";const Tg=H.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Jl(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Tg.displayName="Handle";const Dg="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",wg=H.div`
  display: inline-block;
  height: ${({size:n})=>Jl(n)};
  width: ${({size:n})=>Jl(n)};
`,Rg=H.span`
  display: block;
  background: ${Dg};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Og=M.forwardRef(({size:n=30,...c},o)=>D.createElement(wg,{size:n,ref:o,...c},D.createElement(Rg,null)));Og.displayName="Hourglass";const zg=H.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Mg=H.div`
  position: relative;
`,_g=H.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:n})=>n.material};
  border-top: 4px solid ${({theme:n})=>n.borderLightest};
  border-left: 4px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 4px solid ${({theme:n})=>n.borderDark};
  border-right: 4px solid ${({theme:n})=>n.borderDark};

  outline: 1px dotted ${({theme:n})=>n.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:n})=>n.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:n})=>n.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Cg=H(al).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Bg=H.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:n})=>n.material};
  border-left: 2px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 2px solid ${({theme:n})=>n.borderDarkest};
  border-right: 2px solid ${({theme:n})=>n.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:n})=>n.material};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:n})=>n.material};
    border: 2px solid ${({theme:n})=>n.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:n})=>n.borderLightest},
      1px 1px 0 1px ${({theme:n})=>n.borderDarkest};
  }
`,Ng=M.forwardRef(({backgroundStyles:n,children:c,...o},r)=>D.createElement(zg,{ref:r,...o},D.createElement(Mg,null,D.createElement(_g,null,D.createElement(Cg,{style:n},c)),D.createElement(Bg,null))));Ng.displayName="Monitor";const Ug=H.div`
  display: inline-block;
  height: ${de.md};
  width: 100%;
`,$g=H(al)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,wp=P`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Hg=H.div`
  position: relative;
  top: 4px;
  ${wp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,kg=H.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${wp}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Qg=H.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Rp=17,jg=H.span`
  display: inline-block;
  width: ${Rp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,qg=M.forwardRef(({hideValue:n=!1,shadow:c=!0,value:o,variant:r="default",...d},b)=>{const g=n?null:`${o}%`,w=M.useRef(null),[A,m]=M.useState([]),R=M.useCallback(()=>{if(!w.current||o===void 0)return;const O=w.current.getBoundingClientRect().width,$=Math.round(o/100*O/Rp);m(Array.from({length:$}))},[o]);return M.useEffect(()=>(R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)),[R]),D.createElement(Ug,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:b,role:"progressbar",variant:r,...d},D.createElement($g,{variant:r,shadow:c},r==="default"?D.createElement(D.Fragment,null,D.createElement(Hg,{"data-testid":"defaultProgress1"},g),D.createElement(kg,{"data-testid":"defaultProgress2",value:o},g)):D.createElement(Qg,{ref:w,"data-testid":"tileProgress"},A.map((O,$)=>D.createElement(jg,{key:$})))))});qg.displayName="ProgressBar";const Op=P`
  width: ${ll}px;
  height: ${ll}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Yg=H(al)`
  ${Op}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Lg=H.div`
  ${Sa()}
  ${Op}
  outline: none;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:n})=>n.flatDark};
    border-radius: 50%;
  }
`,Gg=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
`,Xg={flat:Lg,default:Yg},Zg=M.forwardRef(({checked:n,className:c="",disabled:o=!1,label:r="",onChange:d,style:b={},variant:g="default",...w},A)=>{const m=Xg[g];return D.createElement(rf,{$disabled:o,className:c,style:b},D.createElement(m,{$disabled:o,role:"presentation"},n&&D.createElement(Gg,{$disabled:o,variant:g})),D.createElement(nc,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:A,...w}),r&&D.createElement(of,null,r))});Zg.displayName="Radio";const Vg=typeof window<"u"?M.useLayoutEffect:M.useEffect;function ma(n){const c=M.useRef(n);return Vg(()=>{c.current=n}),M.useCallback((...o)=>(0,c.current)(...o),[])}function Mh(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function _h(n,c){return M.useMemo(()=>n==null&&c==null?null:o=>{Mh(n,o),Mh(c,o)},[n,c])}var Kg=jh();let pc=!0,Wo=!1,Ch;const Jg={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Wg(n){if("type"in n){const{type:c,tagName:o}=n;if(o==="INPUT"&&Jg[c]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function Fg(n){n.metaKey||n.altKey||n.ctrlKey||(pc=!0)}function Ho(){pc=!1}function Ig(){this.visibilityState==="hidden"&&Wo&&(pc=!0)}function Pg(n){n.addEventListener("keydown",Fg,!0),n.addEventListener("mousedown",Ho,!0),n.addEventListener("pointerdown",Ho,!0),n.addEventListener("touchstart",Ho,!0),n.addEventListener("visibilitychange",Ig,!0)}function ty(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return pc||Wg(c)}function ey(){Wo=!0,window.clearTimeout(Ch),Ch=window.setTimeout(()=>{Wo=!1},100)}function ly(){const n=M.useCallback(c=>{const o=Kg.findDOMNode(c);o!=null&&Pg(o.ownerDocument)},[]);return{isFocusVisible:ty,onBlurVisible:ey,ref:n}}function ay(n,c,o){return(o-c)*n+c}function Vi(n,c){if(c!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const r=n.changedTouches[o];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Ki(n){return n&&n.ownerDocument||document}function ny(n,c){var o;const{index:r}=(o=n.reduce((d,b,g)=>{const w=Math.abs(c-b);return d===null||w<d.distance||w===d.distance?{distance:w,index:g}:d},null))!==null&&o!==void 0?o:{};return r??-1}const uy=H.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:n})=>n?"41px":"39px"};
    ${({isFocused:n,theme:c})=>n&&`
        outline: 2px dotted ${c.materialText};
        `}
  }

  ${({orientation:n,size:c})=>n==="vertical"?P`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:P`
          width: ${c};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,zp=()=>P`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?P`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:P`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,iy=H(al)`
  ${zp()}
`,cy=H(al)`
  ${zp()}

  border-left-color: ${({theme:n})=>n.flatLight};
  border-top-color: ${({theme:n})=>n.flatLight};
  border-right-color: ${({theme:n})=>n.canvas};
  border-bottom-color: ${({theme:n})=>n.canvas};
  &:before {
    border-left-color: ${({theme:n})=>n.flatDark};
    border-top-color: ${({theme:n})=>n.flatDark};
    border-right-color: ${({theme:n})=>n.flatLight};
    border-bottom-color: ${({theme:n})=>n.flatLight};
  }
`,ry=H.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?P`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:P`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?P`
          ${Sa()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:P`
          ${Je()}
          ${Xt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&Mu({mainColor:c.material,secondaryColor:c.borderLightest})}
`,pn=6,oy=H.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?P`
          right: ${-pn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${pn}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:P`
          bottom: ${-pn}px;
          height: ${pn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&P`
      ${Ke()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}
`,fy=H.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?P`
          transform: translate(${pn+2}px, ${pn+1}px);
        `:P`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,sy=M.forwardRef(({defaultValue:n,disabled:c=!1,marks:o=!1,max:r=100,min:d=0,name:b,onChange:g,onChangeCommitted:w,onMouseDown:A,orientation:m="horizontal",size:R="100%",step:O=1,value:$,variant:V="default",...J},tt)=>{const F=V==="flat"?cy:iy,K=m==="vertical",[X=d,q]=Wl({defaultValue:n,onChange:g??w,value:$}),{isFocusVisible:et,onBlurVisible:L,ref:W}=ly(),[I,St]=M.useState(!1),Rt=M.useRef(),Zt=M.useRef(null),Ut=_h(W,Rt),bt=_h(tt,Ut),jt=ma(N=>{et(N)&&St(!0)}),$t=ma(()=>{I!==!1&&(St(!1),L())}),gt=M.useRef(),z=M.useMemo(()=>o===!0&&Number.isFinite(O)?[...Array(Math.round((r-d)/O)+1)].map((N,Q)=>({label:void 0,value:d+O*Q})):Array.isArray(o)?o:[],[o,r,d,O]),Y=ma(N=>{const Q=(r-d)/10,lt=z.map(dt=>dt.value),Z=lt.indexOf(X);let rt=0;switch(N.key){case"Home":rt=d;break;case"End":rt=r;break;case"PageUp":O&&(rt=X+Q);break;case"PageDown":O&&(rt=X-Q);break;case"ArrowRight":case"ArrowUp":O?rt=X+O:rt=lt[Z+1]||lt[lt.length-1];break;case"ArrowLeft":case"ArrowDown":O?rt=X-O:rt=lt[Z-1]||lt[0];break;default:return}N.preventDefault(),O&&(rt=Rh(rt,O,d)),rt=ga(rt,d,r),q(rt),St(!0),g==null||g(rt),w==null||w(rt)}),G=M.useCallback(N=>{if(!Rt.current)return 0;const Q=Rt.current.getBoundingClientRect();let lt;K?lt=(Q.bottom-N.y)/Q.height:lt=(N.x-Q.left)/Q.width;let Z;if(Z=ay(lt,d,r),O)Z=Rh(Z,O,d);else{const rt=z.map(k=>k.value),dt=ny(rt,Z);Z=rt[dt]}return Z=ga(Z,d,r),Z},[z,r,d,O,K]),ut=ma(N=>{var Q;const lt=Vi(N,gt.current);if(!lt)return;const Z=G(lt);(Q=Zt.current)===null||Q===void 0||Q.focus(),q(Z),St(!0),g==null||g(Z)}),p=ma(N=>{const Q=Vi(N,gt.current);if(!Q)return;const lt=G(Q);w==null||w(lt),gt.current=void 0;const Z=Ki(Rt.current);Z.removeEventListener("mousemove",ut),Z.removeEventListener("mouseup",p),Z.removeEventListener("touchmove",ut),Z.removeEventListener("touchend",p)}),B=ma(N=>{var Q;A==null||A(N),N.preventDefault(),(Q=Zt.current)===null||Q===void 0||Q.focus(),St(!0);const lt=Vi(N,gt.current);if(lt){const rt=G(lt);q(rt),g==null||g(rt)}const Z=Ki(Rt.current);Z.addEventListener("mousemove",ut),Z.addEventListener("mouseup",p)}),j=ma(N=>{var Q;N.preventDefault();const lt=N.changedTouches[0];lt!=null&&(gt.current=lt.identifier),(Q=Zt.current)===null||Q===void 0||Q.focus(),St(!0);const Z=Vi(N,gt.current);if(Z){const dt=G(Z);q(dt),g==null||g(dt)}const rt=Ki(Rt.current);rt.addEventListener("touchmove",ut),rt.addEventListener("touchend",p)});return M.useEffect(()=>{const{current:N}=Rt;N==null||N.addEventListener("touchstart",j);const Q=Ki(N);return()=>{N==null||N.removeEventListener("touchstart",j),Q.removeEventListener("mousemove",ut),Q.removeEventListener("mouseup",p),Q.removeEventListener("touchmove",ut),Q.removeEventListener("touchend",p)}},[p,ut,j]),D.createElement(uy,{$disabled:c,hasMarks:!!z.length,isFocused:I,onMouseDown:B,orientation:m,ref:bt,size:Jl(R),...J},D.createElement("input",{disabled:c,name:b,type:"hidden",value:X??0}),z&&z.map(N=>D.createElement(oy,{$disabled:c,"data-testid":"tick",key:N.value/(r-d)*100,orientation:m,style:{[K?"bottom":"left"]:`${(N.value-d)/(r-d)*100}%`}},N.label&&D.createElement(fy,{"aria-hidden":!0,"data-testid":"mark",orientation:m},N.label))),D.createElement(F,{orientation:m,variant:V}),D.createElement(ry,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":m,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":X,onBlur:$t,onFocus:jt,onKeyDown:Y,orientation:m,ref:Zt,role:"slider",style:{[K?"bottom":"left"]:`${(K?-100:0)+100*(X-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:V}))});sy.displayName="Slider";const dy=H.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${uf};
  overflow-y: auto;
`,hy=M.forwardRef(function({children:c,...o},r){return D.createElement(dy,{ref:r,...o},c)});hy.displayName="TableBody";const py=H.td`
  padding: 0 8px;
`,by=M.forwardRef(function({children:c,...o},r){return D.createElement(py,{ref:r,...o},c)});by.displayName="TableDataCell";const my=H.thead`
  display: table-header-group;
`,vy=M.forwardRef(function({children:c,...o},r){return D.createElement(my,{ref:r,...o},c)});vy.displayName="TableHead";const gy=H.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:n})=>n.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Xt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&P`
      &:active {
        &:before {
          ${Xt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:n})=>n.materialText};
  ${({$disabled:n})=>n&&Ke()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&Ke()}
  }
`,yy=M.forwardRef(function({disabled:c=!1,children:o,onClick:r,onTouchStart:d=Ea,sort:b,...g},w){const A=b==="asc"?"ascending":b==="desc"?"descending":void 0;return D.createElement(gy,{$disabled:c,"aria-disabled":c,"aria-sort":A,onClick:c?void 0:r,onTouchStart:c?void 0:d,ref:w,...g},D.createElement("div",null,o))});yy.displayName="TableHeadCell";const Ay=H.tr`
  color: inherit;
  display: table-row;
  height: calc(${de.md} - 2px);
  line-height: calc(${de.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,xy=M.forwardRef(function({children:c,...o},r){return D.createElement(Ay,{ref:r,...o},c)});xy.displayName="TableRow";const Sy=H.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Ey=H(al)`
  &:before {
    box-shadow: none;
  }
`,Ty=M.forwardRef(({children:n,...c},o)=>D.createElement(Ey,null,D.createElement(Sy,{ref:o,...c},n)));Ty.displayName="Table";const Dy=H.button`
  ${Je()}
  ${Xt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${de.md};
  line-height: ${de.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${yn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${de.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,wy=M.forwardRef(({value:n,onClick:c,selected:o=!1,children:r,...d},b)=>D.createElement(Dy,{"aria-selected":o,selected:o,onClick:g=>c==null?void 0:c(n,g),ref:b,role:"tab",...d},r));wy.displayName="Tab";const Ry=H.div`
  ${Je()}
  ${Xt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Oy=M.forwardRef(({children:n,...c},o)=>D.createElement(Ry,{ref:o,...c},n));Oy.displayName="TabBody";const zy=H.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,My=H.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
  }
`;function _y(n,c){const o=[];for(let r=c;r>0;r-=1)o.push(n.splice(0,Math.ceil(n.length/r)));return o}const Cy=M.forwardRef(({value:n,onChange:c=Ea,children:o,rows:r=1,...d},b)=>{const g=M.useMemo(()=>{var w;const A=(w=D.Children.map(o,O=>{if(!D.isValidElement(O))return null;const $={selected:O.props.value===n,onClick:c};return D.cloneElement(O,$)}))!==null&&w!==void 0?w:[],m=_y(A,r).map((O,$)=>({key:$,tabs:O})),R=m.findIndex(O=>O.tabs.some($=>$.props.selected));return m.push(m.splice(R,1)[0]),m},[o,c,r,n]);return D.createElement(zy,{...d,isMultiRow:r>1,role:"tablist",ref:b},g.map(w=>D.createElement(My,{key:w.key},w.tabs)))});Cy.displayName="Tabs";const By=["blur","focus"],Ny=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Bh(n){return"nativeEvent"in n&&By.includes(n.type)}function Nh(n){return"nativeEvent"in n&&Ny.includes(n.type)}const Uy={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},$y=H.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${nf};
  text-align: center;
  font-size: 1rem;
  ${n=>Uy[n.position]}
`,Hy=H.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Mp=M.forwardRef(({className:n,children:c,disableFocusListener:o=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:b=0,onBlur:g,onClose:w,onFocus:A,onMouseEnter:m,onMouseLeave:R,onOpen:O,style:$,text:V,position:J="top",...tt},F)=>{const[K,X]=M.useState(!1),[q,et]=M.useState(),[L,W]=M.useState(),I=!o,St=!r,Rt=G=>{window.clearTimeout(q),window.clearTimeout(L);const ut=window.setTimeout(()=>{X(!0),O==null||O(G)},d);et(ut)},Zt=G=>{G.persist(),Bh(G)?A==null||A(G):Nh(G)&&(m==null||m(G)),Rt(G)},Ut=G=>{window.clearTimeout(q),window.clearTimeout(L);const ut=window.setTimeout(()=>{X(!1),w==null||w(G)},b);W(ut)},bt=G=>{G.persist(),Bh(G)?g==null||g(G):Nh(G)&&(R==null||R(G)),Ut(G)},jt=I?bt:void 0,$t=I?Zt:void 0,gt=St?Zt:void 0,z=St?bt:void 0,Y=I?0:void 0;return D.createElement(Hy,{"data-testid":"tooltip-wrapper",onBlur:jt,onFocus:$t,onMouseEnter:gt,onMouseLeave:z,tabIndex:Y},D.createElement($y,{className:n,"data-testid":"tooltip",position:J,ref:F,show:K,style:$,...tt},V),c)});Mp.displayName="Tooltip";const Fo=H(of)`
  white-space: nowrap;
`,_p=P`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":P`
          cursor: pointer;

          :focus {
            ${Fo} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,ky=H.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&P`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:c})=>c.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:n})=>n.borderDark};
      font-size: 12px;
    }
  }
`,Qy=H.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?P`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `:P`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:n})=>n.borderDark};
    }
  }
`,jy=H.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,qy=H.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${_p};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Uh=H(rf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${_p};
`,Yy=H.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function $h(n,c){return n.includes(c)?n.filter(o=>o!==c):[...n,c]}function Hh(n){n.preventDefault()}function Cp({className:n,disabled:c,expanded:o,innerRef:r,level:d,select:b,selected:g,style:w,tree:A=[]}){const m=d===0,R=M.useCallback(O=>{var $,V;const J=!!(O.items&&O.items.length>0),tt=o.includes(O.id),F=($=c||O.disabled)!==null&&$!==void 0?$:!1,K=F?Hh:L=>b(L,O),X=F?Hh:L=>b(L,O),q=g===O.id,et=D.createElement(Yy,{"aria-hidden":!0},O.icon);return D.createElement(Qy,{key:O.label,isRootLevel:m,role:"treeitem","aria-expanded":tt,"aria-selected":q,hasItems:J},J?D.createElement(jy,{open:tt},D.createElement(qy,{onClick:K,$disabled:F},D.createElement(Uh,{$disabled:F},et,D.createElement(Fo,null,O.label))),tt&&D.createElement(Cp,{className:n,disabled:F,expanded:o,level:d+1,select:b,selected:g,style:w,tree:(V=O.items)!==null&&V!==void 0?V:[]})):D.createElement(Uh,{as:"button",$disabled:F,onClick:X},et,D.createElement(Fo,null,O.label)))},[n,c,o,m,d,b,g,w]);return D.createElement(ky,{className:m?n:void 0,style:m?w:void 0,ref:m?r:void 0,role:m?"tree":"group",isRootLevel:m},A.map(R))}function Ly({className:n,defaultExpanded:c=[],defaultSelected:o,disabled:r=!1,expanded:d,onNodeSelect:b,onNodeToggle:g,selected:w,style:A,tree:m=[]},R){const[O,$]=Wl({defaultValue:c,onChange:g,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[V,J]=Wl({defaultValue:o,onChange:b,onChangePropName:"onNodeSelect",value:w,valuePropName:"selected"}),tt=M.useCallback((X,q)=>{if(g){const et=$h(O,q);g(X,et)}$(et=>$h(et,q))},[O,g,$]),F=M.useCallback((X,q)=>{J(q),b&&b(X,q)},[b,J]),K=M.useCallback((X,q)=>{X.preventDefault(),F(X,q.id),q.items&&q.items.length&&tt(X,q.id)},[F,tt]);return D.createElement(Cp,{className:n,disabled:r,expanded:O,level:0,innerRef:R,select:K,selected:V,style:A,tree:m})}const Gy=M.forwardRef(Ly);Gy.displayName="TreeView";const Xy="/95-Portfolio/assets/ms_sans_serif-Du8rjN1q.woff2",Zy="/95-Portfolio/assets/ms_sans_serif_bold-D5dpRRHG.woff2",Vy="/95-Portfolio/assets/winxp-aEloBXO0.png",Ky="/95-Portfolio/assets/psx_graphics-D5Raoe1Z.gif",Jy="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%2324292f'/%3e%3c/svg%3e";var ko,kh;function Wy(){if(kh)return ko;kh=1;var n={name:"blue",anchor:"rgb(0, 0, 128)",anchorVisited:"rgb(0, 0, 128)",borderDark:"rgb(49, 131, 221)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(166, 202, 240)",borderLightest:"rgb(211, 228, 248)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(49, 131, 221)",canvasTextDisabledShadow:"rgb(211, 228, 248)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(49, 131, 221)",desktopBackground:"rgb(58, 110, 165)",flatDark:"rgb(49, 131, 221)",flatLight:"rgb(166, 202, 240)",focusSecondary:"rgb(211, 228, 248)",headerBackground:"linear-gradient(to right, rgb(0, 0, 128), rgb(16, 132, 208))",headerNotActiveBackground:"linear-gradient(to right, rgb(49, 131, 221), rgb(49, 131, 221))",headerNotActiveText:"rgb(0, 0, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(51, 153, 255)",material:"rgb(166, 202, 240)",materialDark:"rgb(49, 131, 221)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(49, 131, 221)",materialTextDisabledShadow:"rgb(211, 228, 248)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(51, 153, 255)",tooltip:"rgb(225, 225, 255)"};return ko=n,ko}var Fy=Wy();const Iy=Qh(Fy),Py=i1`
  ${c1}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Xy}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Zy}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color : white;
  }
`;function tA(){const[n,c]=M.useState(!1);return ft.jsxs("div",{children:[ft.jsx(Py,{}),ft.jsxs(a1,{theme:Iy,children:[ft.jsx(dp,{children:ft.jsxs(uc,{style:{justifyContent:"space-between"},children:[ft.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[ft.jsxs(An,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:[ft.jsx("img",{src:Vy,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"Start"]}),n&&ft.jsxs(hp,{style:{position:"absolute",left:"0",top:"100%"},onClick:()=>c(!1),children:[ft.jsxs(Eu,{children:[ft.jsx("span",{role:"img","aria-label":"👨‍💻",children:ft.jsx("img",{src:Jy,style:{height:"29px",paddingTop:"10px"}})}),"Profile"]}),ft.jsxs(Eu,{children:[ft.jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"My account"]}),ft.jsx(sf,{}),ft.jsxs(Eu,{disabled:!0,children:[ft.jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]}),ft.jsx(Eu,{children:ft.jsx(Mp,{text:"I see you! 🤷‍",enterDelay:100,leaveDelay:500,children:ft.jsx(An,{children:"Hover me"})})})]})]}),ft.jsx(df,{placeholder:"Search...",width:150})]})}),ft.jsx(wu,{children:ft.jsx(Du,{children:ft.jsx(ff,{style:{width:"300px",height:"200px"},children:ft.jsxs("div",{children:[ft.jsx("p",{style:{width:600},children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"}),ft.jsx("p",{children:"React95 is the best UI library ever created"})]})})})}),ft.jsxs(wu,{className:"window",style:{marginLeft:"200px"},children:[ft.jsx(ic,{className:"window-title",children:ft.jsx("span",{children:"PSX_GRAPHICS"})}),ft.jsx(Du,{children:ft.jsx("img",{src:Ky,width:"300px"})})]}),ft.jsxs(wu,{className:"window",children:[ft.jsx(ic,{className:"window-title",children:ft.jsx("span",{children:"PSX_GRAPHICS"})}),ft.jsx(Du,{children:ft.jsx("img",{src:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBhcnBtNW1lZ2lyOTY4bnM0Z2J4OGVidnB1OTJlbHRwYnJwZmw1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VKdoCR31r5EYM/giphy.webp",width:"300px"})})]})]})]})}nv.createRoot(document.getElementById("root")).render(ft.jsx(M.StrictMode,{children:ft.jsx(tA,{})}));
