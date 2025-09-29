(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function Gh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Mo={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function Ib(){if(ch)return xu;ch=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,m){var v=null;if(m!==void 0&&(v=""+m),d.key!==void 0&&(v=""+d.key),"key"in d){m={};for(var D in d)D!=="key"&&(m[D]=d[D])}else m=d;return d=m.ref,{$$typeof:n,type:r,key:v,ref:d!==void 0?d:null,props:m}}return xu.Fragment=c,xu.jsx=o,xu.jsxs=o,xu}var rh;function Pb(){return rh||(rh=1,Mo.exports=Ib()),Mo.exports}var K=Pb(),Co={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function tg(){if(oh)return pt;oh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),z=Symbol.iterator;function $(p){return p===null||typeof p!="object"?null:(p=z&&p[z]||p["@@iterator"],typeof p=="function"?p:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,et={};function I(p,B,Q){this.props=p,this.context=B,this.refs=et,this.updater=Q||V}I.prototype.isReactComponent={},I.prototype.setState=function(p,B){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,B,"setState")},I.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function J(){}J.prototype=I.prototype;function X(p,B,Q){this.props=p,this.context=B,this.refs=et,this.updater=Q||V}var Y=X.prototype=new J;Y.constructor=X,W(Y,I.prototype),Y.isPureReactComponent=!0;var lt=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function P(p,B,Q,N,k,at){return Q=at.ref,{$$typeof:n,type:p,key:B,ref:Q!==void 0?Q:null,props:at}}function St(p,B){return P(p.type,B,void 0,void 0,void 0,p.props)}function Ot(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Zt(p){var B={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(Q){return B[Q]})}var Ut=/\/+/g;function mt(p,B){return typeof p=="object"&&p!==null&&p.key!=null?Zt(""+p.key):B.toString(36)}function Qt(){}function $t(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Qt,Qt):(p.status="pending",p.then(function(B){p.status==="pending"&&(p.status="fulfilled",p.value=B)},function(B){p.status==="pending"&&(p.status="rejected",p.reason=B)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function vt(p,B,Q,N,k){var at=typeof p;(at==="undefined"||at==="boolean")&&(p=null);var Z=!1;if(p===null)Z=!0;else switch(at){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(p.$$typeof){case n:case c:Z=!0;break;case O:return Z=p._init,vt(Z(p._payload),B,Q,N,k)}}if(Z)return k=k(p),Z=N===""?"."+mt(p,0):N,lt(k)?(Q="",Z!=null&&(Q=Z.replace(Ut,"$&/")+"/"),vt(k,B,Q,"",function(j){return j})):k!=null&&(Ot(k)&&(k=St(k,Q+(k.key==null||p&&p.key===k.key?"":(""+k.key).replace(Ut,"$&/")+"/")+Z)),B.push(k)),1;Z=0;var ot=N===""?".":N+":";if(lt(p))for(var dt=0;dt<p.length;dt++)N=p[dt],at=ot+mt(N,dt),Z+=vt(N,B,Q,at,k);else if(dt=$(p),typeof dt=="function")for(p=dt.call(p),dt=0;!(N=p.next()).done;)N=N.value,at=ot+mt(N,dt++),Z+=vt(N,B,Q,at,k);else if(at==="object"){if(typeof p.then=="function")return vt($t(p),B,Q,N,k);throw B=String(p),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return Z}function R(p,B,Q){if(p==null)return p;var N=[],k=0;return vt(p,N,"","",function(at){return B.call(Q,at,k++)}),N}function G(p){if(p._status===-1){var B=p._result;B=B(),B.then(function(Q){(p._status===0||p._status===-1)&&(p._status=1,p._result=Q)},function(Q){(p._status===0||p._status===-1)&&(p._status=2,p._result=Q)}),p._status===-1&&(p._status=0,p._result=B)}if(p._status===1)return p._result.default;throw p._result}var q=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function it(){}return pt.Children={map:R,forEach:function(p,B,Q){R(p,function(){B.apply(this,arguments)},Q)},count:function(p){var B=0;return R(p,function(){B++}),B},toArray:function(p){return R(p,function(B){return B})||[]},only:function(p){if(!Ot(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},pt.Component=I,pt.Fragment=o,pt.Profiler=d,pt.PureComponent=X,pt.StrictMode=r,pt.Suspense=A,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,pt.__COMPILER_RUNTIME={__proto__:null,c:function(p){return L.H.useMemoCache(p)}},pt.cache=function(p){return function(){return p.apply(null,arguments)}},pt.cloneElement=function(p,B,Q){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var N=W({},p.props),k=p.key,at=void 0;if(B!=null)for(Z in B.ref!==void 0&&(at=void 0),B.key!==void 0&&(k=""+B.key),B)!F.call(B,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&B.ref===void 0||(N[Z]=B[Z]);var Z=arguments.length-2;if(Z===1)N.children=Q;else if(1<Z){for(var ot=Array(Z),dt=0;dt<Z;dt++)ot[dt]=arguments[dt+2];N.children=ot}return P(p.type,k,void 0,void 0,at,N)},pt.createContext=function(p){return p={$$typeof:v,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:m,_context:p},p},pt.createElement=function(p,B,Q){var N,k={},at=null;if(B!=null)for(N in B.key!==void 0&&(at=""+B.key),B)F.call(B,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(k[N]=B[N]);var Z=arguments.length-2;if(Z===1)k.children=Q;else if(1<Z){for(var ot=Array(Z),dt=0;dt<Z;dt++)ot[dt]=arguments[dt+2];k.children=ot}if(p&&p.defaultProps)for(N in Z=p.defaultProps,Z)k[N]===void 0&&(k[N]=Z[N]);return P(p,at,void 0,void 0,null,k)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(p){return{$$typeof:D,render:p}},pt.isValidElement=Ot,pt.lazy=function(p){return{$$typeof:O,_payload:{_status:-1,_result:p},_init:G}},pt.memo=function(p,B){return{$$typeof:b,type:p,compare:B===void 0?null:B}},pt.startTransition=function(p){var B=L.T,Q={};L.T=Q;try{var N=p(),k=L.S;k!==null&&k(Q,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(it,q)}catch(at){q(at)}finally{L.T=B}},pt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},pt.use=function(p){return L.H.use(p)},pt.useActionState=function(p,B,Q){return L.H.useActionState(p,B,Q)},pt.useCallback=function(p,B){return L.H.useCallback(p,B)},pt.useContext=function(p){return L.H.useContext(p)},pt.useDebugValue=function(){},pt.useDeferredValue=function(p,B){return L.H.useDeferredValue(p,B)},pt.useEffect=function(p,B,Q){var N=L.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(p,B)},pt.useId=function(){return L.H.useId()},pt.useImperativeHandle=function(p,B,Q){return L.H.useImperativeHandle(p,B,Q)},pt.useInsertionEffect=function(p,B){return L.H.useInsertionEffect(p,B)},pt.useLayoutEffect=function(p,B){return L.H.useLayoutEffect(p,B)},pt.useMemo=function(p,B){return L.H.useMemo(p,B)},pt.useOptimistic=function(p,B){return L.H.useOptimistic(p,B)},pt.useReducer=function(p,B,Q){return L.H.useReducer(p,B,Q)},pt.useRef=function(p){return L.H.useRef(p)},pt.useState=function(p){return L.H.useState(p)},pt.useSyncExternalStore=function(p,B,Q){return L.H.useSyncExternalStore(p,B,Q)},pt.useTransition=function(){return L.H.useTransition()},pt.version="19.1.0",pt}var fh;function lf(){return fh||(fh=1,Co.exports=tg()),Co.exports}var M=lf();const w=Gh(M);var _o={exports:{}},Su={},Bo={exports:{}},No={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function eg(){return sh||(sh=1,function(n){function c(R,G){var q=R.length;R.push(G);t:for(;0<q;){var it=q-1>>>1,p=R[it];if(0<d(p,G))R[it]=G,R[q]=p,q=it;else break t}}function o(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var G=R[0],q=R.pop();if(q!==G){R[0]=q;t:for(var it=0,p=R.length,B=p>>>1;it<B;){var Q=2*(it+1)-1,N=R[Q],k=Q+1,at=R[k];if(0>d(N,q))k<p&&0>d(at,N)?(R[it]=at,R[k]=q,it=k):(R[it]=N,R[Q]=q,it=Q);else if(k<p&&0>d(at,q))R[it]=at,R[k]=q,it=k;else break t}}return G}function d(R,G){var q=R.sortIndex-G.sortIndex;return q!==0?q:R.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var v=Date,D=v.now();n.unstable_now=function(){return v.now()-D}}var A=[],b=[],O=1,z=null,$=3,V=!1,W=!1,et=!1,I=!1,J=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function lt(R){for(var G=o(b);G!==null;){if(G.callback===null)r(b);else if(G.startTime<=R)r(b),G.sortIndex=G.expirationTime,c(A,G);else break;G=o(b)}}function L(R){if(et=!1,lt(R),!W)if(o(A)!==null)W=!0,F||(F=!0,mt());else{var G=o(b);G!==null&&vt(L,G.startTime-R)}}var F=!1,P=-1,St=5,Ot=-1;function Zt(){return I?!0:!(n.unstable_now()-Ot<St)}function Ut(){if(I=!1,F){var R=n.unstable_now();Ot=R;var G=!0;try{t:{W=!1,et&&(et=!1,X(P),P=-1),V=!0;var q=$;try{e:{for(lt(R),z=o(A);z!==null&&!(z.expirationTime>R&&Zt());){var it=z.callback;if(typeof it=="function"){z.callback=null,$=z.priorityLevel;var p=it(z.expirationTime<=R);if(R=n.unstable_now(),typeof p=="function"){z.callback=p,lt(R),G=!0;break e}z===o(A)&&r(A),lt(R)}else r(A);z=o(A)}if(z!==null)G=!0;else{var B=o(b);B!==null&&vt(L,B.startTime-R),G=!1}}break t}finally{z=null,$=q,V=!1}G=void 0}}finally{G?mt():F=!1}}}var mt;if(typeof Y=="function")mt=function(){Y(Ut)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,$t=Qt.port2;Qt.port1.onmessage=Ut,mt=function(){$t.postMessage(null)}}else mt=function(){J(Ut,0)};function vt(R,G){P=J(function(){R(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return $},n.unstable_next=function(R){switch($){case 1:case 2:case 3:var G=3;break;default:G=$}var q=$;$=G;try{return R()}finally{$=q}},n.unstable_requestPaint=function(){I=!0},n.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var q=$;$=R;try{return G()}finally{$=q}},n.unstable_scheduleCallback=function(R,G,q){var it=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?it+q:it):q=it,R){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=q+p,R={id:O++,callback:G,priorityLevel:R,startTime:q,expirationTime:p,sortIndex:-1},q>it?(R.sortIndex=q,c(b,R),o(A)===null&&R===o(b)&&(et?(X(P),P=-1):et=!0,vt(L,q-it))):(R.sortIndex=p,c(A,R),W||V||(W=!0,F||(F=!0,mt()))),R},n.unstable_shouldYield=Zt,n.unstable_wrapCallback=function(R){var G=$;return function(){var q=$;$=G;try{return R.apply(this,arguments)}finally{$=q}}}}(No)),No}var dh;function lg(){return dh||(dh=1,Bo.exports=eg()),Bo.exports}var Uo={exports:{}},me={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function ag(){if(hh)return me;hh=1;var n=lf();function c(A){var b="https://react.dev/errors/"+A;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)b+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+A+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(A,b,O){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:z==null?null:""+z,children:A,containerInfo:b,implementation:O}}var v=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(A,b){if(A==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,me.createPortal=function(A,b){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return m(A,b,null,O)},me.flushSync=function(A){var b=v.T,O=r.p;try{if(v.T=null,r.p=2,A)return A()}finally{v.T=b,r.p=O,r.d.f()}},me.preconnect=function(A,b){typeof A=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,r.d.C(A,b))},me.prefetchDNS=function(A){typeof A=="string"&&r.d.D(A)},me.preinit=function(A,b){if(typeof A=="string"&&b&&typeof b.as=="string"){var O=b.as,z=D(O,b.crossOrigin),$=typeof b.integrity=="string"?b.integrity:void 0,V=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;O==="style"?r.d.S(A,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:z,integrity:$,fetchPriority:V}):O==="script"&&r.d.X(A,{crossOrigin:z,integrity:$,fetchPriority:V,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},me.preinitModule=function(A,b){if(typeof A=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var O=D(b.as,b.crossOrigin);r.d.M(A,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&r.d.M(A)},me.preload=function(A,b){if(typeof A=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var O=b.as,z=D(O,b.crossOrigin);r.d.L(A,O,{crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},me.preloadModule=function(A,b){if(typeof A=="string")if(b){var O=D(b.as,b.crossOrigin);r.d.m(A,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else r.d.m(A)},me.requestFormReset=function(A){r.d.r(A)},me.unstable_batchedUpdates=function(A,b){return A(b)},me.useFormState=function(A,b,O){return v.H.useFormState(A,b,O)},me.useFormStatus=function(){return v.H.useHostTransitionStatus()},me.version="19.1.0",me}var ph;function Lh(){if(ph)return Uo.exports;ph=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Uo.exports=ag(),Uo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function ng(){if(mh)return Su;mh=1;var n=lg(),c=lf(),o=Lh();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(m(t)!==t)throw Error(r(188))}function A(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return D(u),t;if(i===a)return D(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var f=!1,s=u.child;s;){if(s===l){f=!0,l=u,a=i;break}if(s===a){f=!0,a=u,l=i;break}s=s.sibling}if(!f){for(s=i.child;s;){if(s===l){f=!0,l=i,a=u;break}if(s===a){f=!0,a=i,l=u;break}s=s.sibling}if(!f)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,z=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),Zt=Symbol.for("react.memo_cache_sentinel"),Ut=Symbol.iterator;function mt(t){return t===null||typeof t!="object"?null:(t=Ut&&t[Ut]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Symbol.for("react.client.reference");function $t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Qt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case I:return"Profiler";case et:return"StrictMode";case L:return"Suspense";case F:return"SuspenseList";case Ot:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case Y:return(t.displayName||"Context")+".Provider";case X:return(t._context.displayName||"Context")+".Consumer";case lt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return e=t.displayName||null,e!==null?e:$t(t.type)||"Memo";case St:e=t._payload,t=t._init;try{return $t(t(e))}catch{}}return null}var vt=Array.isArray,R=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},it=[],p=-1;function B(t){return{current:t}}function Q(t){0>p||(t.current=it[p],it[p]=null,p--)}function N(t,e){p++,it[p]=t.current,t.current=e}var k=B(null),at=B(null),Z=B(null),ot=B(null);function dt(t,e){switch(N(Z,e),N(at,t),N(k,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?U0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=U0(e),t=$0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(k),N(k,t)}function j(){Q(k),Q(at),Q(Z)}function st(t){t.memoizedState!==null&&N(ot,t);var e=k.current,l=$0(e,t.type);e!==l&&(N(at,t),N(k,l))}function ht(t){at.current===t&&(Q(k),Q(at)),ot.current===t&&(Q(ot),bu._currentValue=q)}var Et=Object.prototype.hasOwnProperty,Ct=n.unstable_scheduleCallback,Vt=n.unstable_cancelCallback,Kt=n.unstable_shouldYield,ge=n.unstable_requestPaint,Ft=n.unstable_now,nl=n.unstable_getCurrentPriorityLevel,Le=n.unstable_ImmediatePriority,wa=n.unstable_UserBlockingPriority,El=n.unstable_NormalPriority,Il=n.unstable_LowPriority,En=n.unstable_IdlePriority,gf=n.log,Up=n.unstable_setDisableYieldValue,Tn=null,Ee=null;function Tl(t){if(typeof gf=="function"&&Up(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Tn,t)}catch{}}var Te=Math.clz32?Math.clz32:jp,$p=Math.log,Hp=Math.LN2;function jp(t){return t>>>=0,t===0?32:31-($p(t)/Hp|0)|0}var _u=256,Bu=4194304;function Pl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?u=Pl(a):(f&=s,f!==0?u=Pl(f):l||(l=s&~t,l!==0&&(u=Pl(l))))):(s=a&~i,s!==0?u=Pl(s):f!==0?u=Pl(f):l||(l=a&~t,l!==0&&(u=Pl(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function Dn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function kp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(){var t=_u;return _u<<=1,(_u&4194048)===0&&(_u=256),t}function yf(){var t=Bu;return Bu<<=1,(Bu&62914560)===0&&(Bu=4194304),t}function vc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function wn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qp(t,e,l,a,u,i){var f=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,S=t.hiddenUpdates;for(l=f&~l;0<l;){var C=31-Te(l),U=1<<C;s[C]=0,h[C]=-1;var E=S[C];if(E!==null)for(S[C]=null,C=0;C<E.length;C++){var T=E[C];T!==null&&(T.lane&=-536870913)}l&=~U}a!==0&&Af(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(f&~e))}function Af(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function xf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Te(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function yc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ac(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sf(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:eh(t.type))}function Yp(t,e){var l=G.p;try{return G.p=t,e()}finally{G.p=l}}var Dl=Math.random().toString(36).slice(2),he="__reactFiber$"+Dl,ve="__reactProps$"+Dl,Oa="__reactContainer$"+Dl,xc="__reactEvents$"+Dl,Gp="__reactListeners$"+Dl,Lp="__reactHandles$"+Dl,Ef="__reactResources$"+Dl,On="__reactMarker$"+Dl;function Sc(t){delete t[he],delete t[ve],delete t[xc],delete t[Gp],delete t[Lp]}function za(t){var e=t[he];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Oa]||l[he]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Q0(t);t!==null;){if(l=t[he])return l;t=Q0(t)}return e}t=l,l=t.parentNode}return null}function Ra(t){if(t=t[he]||t[Oa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function zn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Ma(t){var e=t[Ef];return e||(e=t[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ae(t){t[On]=!0}var Tf=new Set,Df={};function ta(t,e){Ca(t,e),Ca(t+"Capture",e)}function Ca(t,e){for(Df[t]=e,t=0;t<e.length;t++)Tf.add(e[t])}var qp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wf={},Of={};function Xp(t){return Et.call(Of,t)?!0:Et.call(wf,t)?!1:qp.test(t)?Of[t]=!0:(wf[t]=!0,!1)}function Uu(t,e,l){if(Xp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function $u(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ul(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var Ec,zf;function _a(t){if(Ec===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||"",zf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ec+t+zf}var Tc=!1;function Dc(t,e){if(!t||Tc)return"";Tc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(T){var E=T}Reflect.construct(t,[],U)}else{try{U.call()}catch(T){E=T}t.call(U.prototype)}}else{try{throw Error()}catch(T){E=T}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),f=i[0],s=i[1];if(f&&s){var h=f.split(`
`),S=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<S.length&&!S[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===S.length)for(a=h.length-1,u=S.length-1;1<=a&&0<=u&&h[a]!==S[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==S[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==S[u]){var C=`
`+h[a].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=a&&0<=u);break}}}finally{Tc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?_a(l):""}function Zp(t){switch(t.tag){case 26:case 27:case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return Dc(t.type,!1);case 11:return Dc(t.type.render,!1);case 1:return Dc(t.type,!0);case 31:return _a("Activity");default:return""}}function Rf(t){try{var e="";do e+=Zp(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vp(t){var e=Mf(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(f){a=""+f,i.call(this,f)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hu(t){t._valueTracker||(t._valueTracker=Vp(t))}function Cf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Mf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Kp=/[\n"\\]/g;function Ne(t){return t.replace(Kp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wc(t,e,l,a,u,i,f,s){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Oc(t,f,Be(e)):l!=null?Oc(t,f,Be(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Be(s):t.removeAttribute("name")}function _f(t,e,l,a,u,i,f,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+Be(l):"",e=e!=null?""+Be(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function Oc(t,e,l){e==="number"&&ju(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Ba(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Be(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Bf(t,e,l){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Be(l):""}function Nf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(vt(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Be(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Na(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Jp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Jp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function $f(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&Uf(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&Uf(t,i,e[i])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ku(t){return Fp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Rc=null;function Mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ua=null,$a=null;function Hf(t){var e=Ra(t);if(e&&(t=e.stateNode)){var l=t[ve]||null;t:switch(t=e.stateNode,e.type){case"input":if(wc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ne(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ve]||null;if(!u)throw Error(r(90));wc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Cf(a)}break t;case"textarea":Bf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ba(t,!!l.multiple,e,!1)}}}var Cc=!1;function jf(t,e,l){if(Cc)return t(e,l);Cc=!0;try{var a=t(e);return a}finally{if(Cc=!1,(Ua!==null||$a!==null)&&(Ti(),Ua&&(e=Ua,t=$a,$a=Ua=null,Hf(e),t)))for(e=0;e<t.length;e++)Hf(t[e])}}function Rn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ve]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=!1;if(il)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){_c=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{_c=!1}var wl=null,Bc=null,Qu=null;function kf(){if(Qu)return Qu;var t,e=Bc,l=e.length,a,u="value"in wl?wl.value:wl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var f=l-t;for(a=1;a<=f&&e[l-a]===u[i-a];a++);return Qu=u.slice(t,1<a?1-a:void 0)}function Yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gu(){return!0}function Qf(){return!1}function ye(t){function e(l,a,u,i,f){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gu:Qf,this.isPropagationStopped=Qf,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gu)},persist:function(){},isPersistent:Gu}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=ye(ea),Cn=O({},ea,{view:0,detail:0}),Ip=ye(Cn),Nc,Uc,_n,qu=O({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_n&&(_n&&t.type==="mousemove"?(Nc=t.screenX-_n.screenX,Uc=t.screenY-_n.screenY):Uc=Nc=0,_n=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Yf=ye(qu),Pp=O({},qu,{dataTransfer:0}),tm=ye(Pp),em=O({},Cn,{relatedTarget:0}),$c=ye(em),lm=O({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),am=ye(lm),nm=O({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),um=ye(nm),im=O({},ea,{data:0}),Gf=ye(im),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=om[t])?!!e[t]:!1}function Hc(){return fm}var sm=O({},Cn,{key:function(t){if(t.key){var e=cm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?Yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dm=ye(sm),hm=O({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=ye(hm),pm=O({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),mm=ye(pm),bm=O({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=ye(bm),vm=O({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=ye(vm),Am=O({},ea,{newState:0,oldState:0}),xm=ye(Am),Sm=[9,13,27,32],jc=il&&"CompositionEvent"in window,Bn=null;il&&"documentMode"in document&&(Bn=document.documentMode);var Em=il&&"TextEvent"in window&&!Bn,qf=il&&(!jc||Bn&&8<Bn&&11>=Bn),Xf=" ",Zf=!1;function Vf(t,e){switch(t){case"keyup":return Sm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ha=!1;function Tm(t,e){switch(t){case"compositionend":return Kf(e);case"keypress":return e.which!==32?null:(Zf=!0,Xf);case"textInput":return t=e.data,t===Xf&&Zf?null:t;default:return null}}function Dm(t,e){if(Ha)return t==="compositionend"||!jc&&Vf(t,e)?(t=kf(),Qu=Bc=wl=null,Ha=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qf&&e.locale!=="ko"?null:e.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wm[t.type]:e==="textarea"}function Wf(t,e,l,a){Ua?$a?$a.push(a):$a=[a]:Ua=a,e=Mi(e,"onChange"),0<e.length&&(l=new Lu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Nn=null,Un=null;function Om(t){M0(t,0)}function Xu(t){var e=zn(t);if(Cf(e))return t}function Ff(t,e){if(t==="change")return e}var If=!1;if(il){var kc;if(il){var Qc="oninput"in document;if(!Qc){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),Qc=typeof Pf.oninput=="function"}kc=Qc}else kc=!1;If=kc&&(!document.documentMode||9<document.documentMode)}function ts(){Nn&&(Nn.detachEvent("onpropertychange",es),Un=Nn=null)}function es(t){if(t.propertyName==="value"&&Xu(Un)){var e=[];Wf(e,Un,t,Mc(t)),jf(Om,e)}}function zm(t,e,l){t==="focusin"?(ts(),Nn=e,Un=l,Nn.attachEvent("onpropertychange",es)):t==="focusout"&&ts()}function Rm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(Un)}function Mm(t,e){if(t==="click")return Xu(e)}function Cm(t,e){if(t==="input"||t==="change")return Xu(e)}function _m(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var De=typeof Object.is=="function"?Object.is:_m;function $n(t,e){if(De(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Et.call(e,u)||!De(t[u],e[u]))return!1}return!0}function ls(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function as(t,e){var l=ls(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=ls(l)}}function ns(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ns(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function us(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ju(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=ju(t.document)}return e}function Yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Bm=il&&"documentMode"in document&&11>=document.documentMode,ja=null,Gc=null,Hn=null,Lc=!1;function is(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Lc||ja==null||ja!==ju(a)||(a=ja,"selectionStart"in a&&Yc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hn&&$n(Hn,a)||(Hn=a,a=Mi(Gc,"onSelect"),0<a.length&&(e=new Lu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ja)))}function la(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ka={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},qc={},cs={};il&&(cs=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function aa(t){if(qc[t])return qc[t];if(!ka[t])return t;var e=ka[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in cs)return qc[t]=e[l];return t}var rs=aa("animationend"),os=aa("animationiteration"),fs=aa("animationstart"),Nm=aa("transitionrun"),Um=aa("transitionstart"),$m=aa("transitioncancel"),ss=aa("transitionend"),ds=new Map,Xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xc.push("scrollEnd");function qe(t,e){ds.set(t,e),ta(e,[t])}var hs=new WeakMap;function Ue(t,e){if(typeof t=="object"&&t!==null){var l=hs.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Rf(e)},hs.set(t,e),e)}return{value:t,source:e,stack:Rf(e)}}var $e=[],Qa=0,Zc=0;function Zu(){for(var t=Qa,e=Zc=Qa=0;e<t;){var l=$e[e];$e[e++]=null;var a=$e[e];$e[e++]=null;var u=$e[e];$e[e++]=null;var i=$e[e];if($e[e++]=null,a!==null&&u!==null){var f=a.pending;f===null?u.next=u:(u.next=f.next,f.next=u),a.pending=u}i!==0&&ps(l,u,i)}}function Vu(t,e,l,a){$e[Qa++]=t,$e[Qa++]=e,$e[Qa++]=l,$e[Qa++]=a,Zc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Vc(t,e,l,a){return Vu(t,e,l,a),Ku(t)}function Ya(t,e){return Vu(t,null,null,e),Ku(t)}function ps(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-Te(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Ku(t){if(50<ru)throw ru=0,Pr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ga={};function Hm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(t,e,l,a){return new Hm(t,e,l,a)}function Kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cl(t,e){var l=t.alternate;return l===null?(l=we(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function ms(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ju(t,e,l,a,u,i){var f=0;if(a=t,typeof t=="function")Kc(t)&&(f=1);else if(typeof t=="string")f=kb(t,l,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ot:return t=we(31,l,e,u),t.elementType=Ot,t.lanes=i,t;case W:return na(l.children,u,i,e);case et:f=8,u|=24;break;case I:return t=we(12,l,e,u|2),t.elementType=I,t.lanes=i,t;case L:return t=we(13,l,e,u),t.elementType=L,t.lanes=i,t;case F:return t=we(19,l,e,u),t.elementType=F,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J:case Y:f=10;break t;case X:f=9;break t;case lt:f=11;break t;case P:f=14;break t;case St:f=16,a=null;break t}f=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=we(f,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function na(t,e,l,a){return t=we(7,t,a,e),t.lanes=l,t}function Jc(t,e,l){return t=we(6,t,null,e),t.lanes=l,t}function Wc(t,e,l){return e=we(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var La=[],qa=0,Wu=null,Fu=0,He=[],je=0,ua=null,rl=1,ol="";function ia(t,e){La[qa++]=Fu,La[qa++]=Wu,Wu=t,Fu=e}function bs(t,e,l){He[je++]=rl,He[je++]=ol,He[je++]=ua,ua=t;var a=rl;t=ol;var u=32-Te(a)-1;a&=~(1<<u),l+=1;var i=32-Te(e)+u;if(30<i){var f=u-u%5;i=(a&(1<<f)-1).toString(32),a>>=f,u-=f,rl=1<<32-Te(e)+u|l<<u|a,ol=i+t}else rl=1<<i|l<<u|a,ol=t}function Fc(t){t.return!==null&&(ia(t,1),bs(t,1,0))}function Ic(t){for(;t===Wu;)Wu=La[--qa],La[qa]=null,Fu=La[--qa],La[qa]=null;for(;t===ua;)ua=He[--je],He[je]=null,ol=He[--je],He[je]=null,rl=He[--je],He[je]=null}var be=null,Lt=null,wt=!1,ca=null,We=!1,Pc=Error(r(519));function ra(t){var e=Error(r(418,""));throw Qn(Ue(e,t)),Pc}function gs(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[he]=t,e[ve]=a,l){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(l=0;l<fu.length;l++)xt(fu[l],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),_f(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Hu(e);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),Nf(e,a.value,a.defaultValue,a.children),Hu(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||N0(e.textContent,l)?(a.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),a.onScroll!=null&&xt("scroll",e),a.onScrollEnd!=null&&xt("scrollend",e),a.onClick!=null&&(e.onclick=Ci),e=!0):e=!1,e||ra(t)}function vs(t){for(be=t.return;be;)switch(be.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:be=be.return}}function jn(t){if(t!==be)return!1;if(!wt)return vs(t),wt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||bo(t.type,t.memoizedProps)),l=!l),l&&Lt&&ra(t),vs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Lt=Ze(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Lt=null}}else e===27?(e=Lt,Gl(t.type)?(t=Ao,Ao=null,Lt=t):Lt=e):Lt=be?Ze(t.stateNode.nextSibling):null;return!0}function kn(){Lt=be=null,wt=!1}function ys(){var t=ca;return t!==null&&(Se===null?Se=t:Se.push.apply(Se,t),ca=null),t}function Qn(t){ca===null?ca=[t]:ca.push(t)}var tr=B(null),oa=null,fl=null;function Ol(t,e,l){N(tr,e._currentValue),e._currentValue=l}function sl(t){t._currentValue=tr.current,Q(tr)}function er(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function lr(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var f=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),er(i.return,l,t),a||(f=null);break t}i=s.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(r(341));f.lanes|=l,i=f.alternate,i!==null&&(i.lanes|=l),er(f,l,t),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function Yn(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(r(387));if(f=f.memoizedProps,f!==null){var s=u.type;De(u.pendingProps.value,f.value)||(t!==null?t.push(s):t=[s])}}else if(u===ot.current){if(f=u.alternate,f===null)throw Error(r(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(bu):t=[bu])}u=u.return}t!==null&&lr(e,t,l,a),e.flags|=262144}function Iu(t){for(t=t.firstContext;t!==null;){if(!De(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fa(t){oa=t,fl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pe(t){return As(oa,t)}function Pu(t,e){return oa===null&&fa(t),As(t,e)}function As(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},fl===null){if(t===null)throw Error(r(308));fl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else fl=fl.next=e;return l}var jm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},km=n.unstable_scheduleCallback,Qm=n.unstable_NormalPriority,ee={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ar(){return{controller:new jm,data:new Map,refCount:0}}function Gn(t){t.refCount--,t.refCount===0&&km(Qm,function(){t.controller.abort()})}var Ln=null,nr=0,Xa=0,Za=null;function Ym(t,e){if(Ln===null){var l=Ln=[];nr=0,Xa=io(),Za={status:"pending",value:void 0,then:function(a){l.push(a)}}}return nr++,e.then(xs,xs),e}function xs(){if(--nr===0&&Ln!==null){Za!==null&&(Za.status="fulfilled");var t=Ln;Ln=null,Xa=0,Za=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var Ss=R.S;R.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ym(t,e),Ss!==null&&Ss(t,e)};var sa=B(null);function ur(){var t=sa.current;return t!==null?t:jt.pooledCache}function ti(t,e){e===null?N(sa,sa.current):N(sa,e.pool)}function Es(){var t=ur();return t===null?null:{parent:ee._currentValue,pool:t}}var qn=Error(r(460)),Ts=Error(r(474)),ei=Error(r(542)),ir={then:function(){}};function Ds(t){return t=t.status,t==="fulfilled"||t==="rejected"}function li(){}function ws(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(li,li),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zs(t),t;default:if(typeof e.status=="string")e.then(li,li);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zs(t),t}throw Xn=e,qn}}var Xn=null;function Os(){if(Xn===null)throw Error(r(459));var t=Xn;return Xn=null,t}function zs(t){if(t===qn||t===ei)throw Error(r(483))}var zl=!1;function cr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ml(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Rt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Ku(t),ps(t,null,l),e}return Vu(t,a,e,l),Ku(t)}function Zn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,xf(t,l)}}function or(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=f:i=i.next=f,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var fr=!1;function Vn(){if(fr){var t=Za;if(t!==null)throw t}}function Kn(t,e,l,a){fr=!1;var u=t.updateQueue;zl=!1;var i=u.firstBaseUpdate,f=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,S=h.next;h.next=null,f===null?i=S:f.next=S,f=h;var C=t.alternate;C!==null&&(C=C.updateQueue,s=C.lastBaseUpdate,s!==f&&(s===null?C.firstBaseUpdate=S:s.next=S,C.lastBaseUpdate=h))}if(i!==null){var U=u.baseState;f=0,C=S=h=null,s=i;do{var E=s.lane&-536870913,T=E!==s.lane;if(T?(Tt&E)===E:(a&E)===E){E!==0&&E===Xa&&(fr=!0),C!==null&&(C=C.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var ft=t,ct=s;E=e;var Nt=l;switch(ct.tag){case 1:if(ft=ct.payload,typeof ft=="function"){U=ft.call(Nt,U,E);break t}U=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=ct.payload,E=typeof ft=="function"?ft.call(Nt,U,E):ft,E==null)break t;U=O({},U,E);break t;case 2:zl=!0}}E=s.callback,E!==null&&(t.flags|=64,T&&(t.flags|=8192),T=u.callbacks,T===null?u.callbacks=[E]:T.push(E))}else T={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},C===null?(S=C=T,h=U):C=C.next=T,f|=E;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;T=s,s=T.next,T.next=null,u.lastBaseUpdate=T,u.shared.pending=null}}while(!0);C===null&&(h=U),u.baseState=h,u.firstBaseUpdate=S,u.lastBaseUpdate=C,i===null&&(u.shared.lanes=0),jl|=f,t.lanes=f,t.memoizedState=U}}function Rs(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Ms(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Rs(l[t],e)}var Va=B(null),ai=B(0);function Cs(t,e){t=vl,N(ai,t),N(Va,e),vl=t|e.baseLanes}function sr(){N(ai,vl),N(Va,Va.current)}function dr(){vl=ai.current,Q(Va),Q(ai)}var Cl=0,gt=null,_t=null,It=null,ni=!1,Ka=!1,da=!1,ui=0,Jn=0,Ja=null,Lm=0;function Jt(){throw Error(r(321))}function hr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!De(t[l],e[l]))return!1;return!0}function pr(t,e,l,a,u,i){return Cl=i,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?pd:md,da=!1,i=l(a,u),da=!1,Ka&&(i=Bs(e,l,a,u)),_s(t),i}function _s(t){R.H=si;var e=_t!==null&&_t.next!==null;if(Cl=0,It=_t=gt=null,ni=!1,Jn=0,Ja=null,e)throw Error(r(300));t===null||ne||(t=t.dependencies,t!==null&&Iu(t)&&(ne=!0))}function Bs(t,e,l,a){gt=t;var u=0;do{if(Ka&&(Ja=null),Jn=0,Ka=!1,25<=u)throw Error(r(301));if(u+=1,It=_t=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=Wm,i=e(l,a)}while(Ka);return i}function qm(){var t=R.H,e=t.useState()[0];return e=typeof e.then=="function"?Wn(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(gt.flags|=1024),e}function mr(){var t=ui!==0;return ui=0,t}function br(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function gr(t){if(ni){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ni=!1}Cl=0,It=_t=gt=null,Ka=!1,Jn=ui=0,Ja=null}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=t:It=It.next=t,It}function Pt(){if(_t===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=It===null?gt.memoizedState:It.next;if(e!==null)It=e,_t=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},It===null?gt.memoizedState=It=t:It=It.next=t}return It}function vr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wn(t){var e=Jn;return Jn+=1,Ja===null&&(Ja=[]),t=ws(Ja,t,e),e=gt,(It===null?e.memoizedState:It.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?pd:md),t}function ii(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wn(t);if(t.$$typeof===Y)return pe(t)}throw Error(r(438,String(t)))}function yr(t){var e=null,l=gt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=gt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=vr(),gt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Zt;return e.index++,l}function dl(t,e){return typeof e=="function"?e(t):e}function ci(t){var e=Pt();return Ar(e,_t,t)}function Ar(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var f=u.next;u.next=i.next,i.next=f}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=f=null,h=null,S=e,C=!1;do{var U=S.lane&-536870913;if(U!==S.lane?(Tt&U)===U:(Cl&U)===U){var E=S.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),U===Xa&&(C=!0);else if((Cl&E)===E){S=S.next,E===Xa&&(C=!0);continue}else U={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=U,f=i):h=h.next=U,gt.lanes|=E,jl|=E;U=S.action,da&&l(i,U),i=S.hasEagerState?S.eagerState:l(i,U)}else E={lane:U,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=E,f=i):h=h.next=E,gt.lanes|=U,jl|=U;S=S.next}while(S!==null&&S!==e);if(h===null?f=i:h.next=s,!De(i,t.memoizedState)&&(ne=!0,C&&(l=Za,l!==null)))throw l;t.memoizedState=i,t.baseState=f,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function xr(t){var e=Pt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var f=u=u.next;do i=t(i,f.action),f=f.next;while(f!==u);De(i,e.memoizedState)||(ne=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Ns(t,e,l){var a=gt,u=Pt(),i=wt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var f=!De((_t||u).memoizedState,l);f&&(u.memoizedState=l,ne=!0),u=u.queue;var s=Hs.bind(null,a,u,t);if(Fn(2048,8,s,[t]),u.getSnapshot!==e||f||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Wa(9,ri(),$s.bind(null,a,u,l,e),null),jt===null)throw Error(r(349));i||(Cl&124)!==0||Us(a,e,l)}return l}function Us(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=gt.updateQueue,e===null?(e=vr(),gt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function $s(t,e,l,a){e.value=l,e.getSnapshot=a,js(e)&&ks(t)}function Hs(t,e,l){return l(function(){js(e)&&ks(t)})}function js(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!De(t,l)}catch{return!0}}function ks(t){var e=Ya(t,2);e!==null&&Ce(e,t,2)}function Sr(t){var e=Ae();if(typeof t=="function"){var l=t;if(t=l(),da){Tl(!0);try{l()}finally{Tl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e}function Qs(t,e,l,a){return t.baseState=l,Ar(t,_t,typeof a=="function"?a:dl)}function Xm(t,e,l,a,u){if(fi(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};R.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Ys(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Ys(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=R.T,f={};R.T=f;try{var s=l(u,a),h=R.S;h!==null&&h(f,s),Gs(t,e,s)}catch(S){Er(t,e,S)}finally{R.T=i}}else try{i=l(u,a),Gs(t,e,i)}catch(S){Er(t,e,S)}}function Gs(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ls(t,e,a)},function(a){return Er(t,e,a)}):Ls(t,e,l)}function Ls(t,e,l){e.status="fulfilled",e.value=l,qs(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Ys(t,l)))}function Er(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,qs(e),e=e.next;while(e!==a)}t.action=null}function qs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Xs(t,e){return e}function Zs(t,e){if(wt){var l=jt.formState;if(l!==null){t:{var a=gt;if(wt){if(Lt){e:{for(var u=Lt,i=We;u.nodeType!==8;){if(!i){u=null;break e}if(u=Ze(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){Lt=Ze(u.nextSibling),a=u.data==="F!";break t}}ra(a)}a=!1}a&&(e=l[0])}}return l=Ae(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},l.queue=a,l=sd.bind(null,gt,a),a.dispatch=l,a=Sr(!1),i=zr.bind(null,gt,!1,a.queue),a=Ae(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Xm.bind(null,gt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function Vs(t){var e=Pt();return Ks(e,_t,t)}function Ks(t,e,l){if(e=Ar(t,e,Xs)[0],t=ci(dl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Wn(e)}catch(f){throw f===qn?ei:f}else a=e;e=Pt();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(gt.flags|=2048,Wa(9,ri(),Zm.bind(null,u,l),null)),[a,i,t]}function Zm(t,e){t.action=e}function Js(t){var e=Pt(),l=_t;if(l!==null)return Ks(e,l,t);Pt(),e=e.memoizedState,l=Pt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Wa(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=gt.updateQueue,e===null&&(e=vr(),gt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ri(){return{destroy:void 0,resource:void 0}}function Ws(){return Pt().memoizedState}function oi(t,e,l,a){var u=Ae();a=a===void 0?null:a,gt.flags|=t,u.memoizedState=Wa(1|e,ri(),l,a)}function Fn(t,e,l,a){var u=Pt();a=a===void 0?null:a;var i=u.memoizedState.inst;_t!==null&&a!==null&&hr(a,_t.memoizedState.deps)?u.memoizedState=Wa(e,i,l,a):(gt.flags|=t,u.memoizedState=Wa(1|e,i,l,a))}function Fs(t,e){oi(8390656,8,t,e)}function Is(t,e){Fn(2048,8,t,e)}function Ps(t,e){return Fn(4,2,t,e)}function td(t,e){return Fn(4,4,t,e)}function ed(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ld(t,e,l){l=l!=null?l.concat([t]):null,Fn(4,4,ed.bind(null,e,t),l)}function Tr(){}function ad(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&hr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function nd(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&hr(e,a[1]))return a[0];if(a=t(),da){Tl(!0);try{t()}finally{Tl(!1)}}return l.memoizedState=[a,e],a}function Dr(t,e,l){return l===void 0||(Cl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=c0(),gt.lanes|=t,jl|=t,l)}function ud(t,e,l,a){return De(l,e)?l:Va.current!==null?(t=Dr(t,l,a),De(t,e)||(ne=!0),t):(Cl&42)===0?(ne=!0,t.memoizedState=l):(t=c0(),gt.lanes|=t,jl|=t,e)}function id(t,e,l,a,u){var i=G.p;G.p=i!==0&&8>i?i:8;var f=R.T,s={};R.T=s,zr(t,!1,e,l);try{var h=u(),S=R.S;if(S!==null&&S(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=Gm(h,a);In(t,e,C,Me(t))}else In(t,e,a,Me(t))}catch(U){In(t,e,{then:function(){},status:"rejected",reason:U},Me())}finally{G.p=i,R.T=f}}function Vm(){}function wr(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=cd(t).queue;id(t,u,e,q,l===null?Vm:function(){return rd(t),l(a)})}function cd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function rd(t){var e=cd(t).next.queue;In(t,e,{},Me())}function Or(){return pe(bu)}function od(){return Pt().memoizedState}function fd(){return Pt().memoizedState}function Km(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Me();t=Rl(l);var a=Ml(e,t,l);a!==null&&(Ce(a,e,l),Zn(a,e,l)),e={cache:ar()},t.payload=e;return}e=e.return}}function Jm(t,e,l){var a=Me();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},fi(t)?dd(e,l):(l=Vc(t,e,l,a),l!==null&&(Ce(l,t,a),hd(l,e,a)))}function sd(t,e,l){var a=Me();In(t,e,l,a)}function In(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(fi(t))dd(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var f=e.lastRenderedState,s=i(f,l);if(u.hasEagerState=!0,u.eagerState=s,De(s,f))return Vu(t,e,u,0),jt===null&&Zu(),!1}catch{}finally{}if(l=Vc(t,e,u,a),l!==null)return Ce(l,t,a),hd(l,e,a),!0}return!1}function zr(t,e,l,a){if(a={lane:2,revertLane:io(),action:a,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(e)throw Error(r(479))}else e=Vc(t,l,a,2),e!==null&&Ce(e,t,2)}function fi(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function dd(t,e){Ka=ni=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function hd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,xf(t,l)}}var si={readContext:pe,use:ii,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},pd={readContext:pe,use:ii,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:pe,useEffect:Fs,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,oi(4194308,4,ed.bind(null,e,t),l)},useLayoutEffect:function(t,e){return oi(4194308,4,t,e)},useInsertionEffect:function(t,e){oi(4,2,t,e)},useMemo:function(t,e){var l=Ae();e=e===void 0?null:e;var a=t();if(da){Tl(!0);try{t()}finally{Tl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ae();if(l!==void 0){var u=l(e);if(da){Tl(!0);try{l(e)}finally{Tl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Jm.bind(null,gt,t),[a.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:function(t){t=Sr(t);var e=t.queue,l=sd.bind(null,gt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Tr,useDeferredValue:function(t,e){var l=Ae();return Dr(l,t,e)},useTransition:function(){var t=Sr(!1);return t=id.bind(null,gt,t.queue,!0,!1),Ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=gt,u=Ae();if(wt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),jt===null)throw Error(r(349));(Tt&124)!==0||Us(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,Fs(Hs.bind(null,a,i,t),[t]),a.flags|=2048,Wa(9,ri(),$s.bind(null,a,i,l,e),null),l},useId:function(){var t=Ae(),e=jt.identifierPrefix;if(wt){var l=ol,a=rl;l=(a&~(1<<32-Te(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ui++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Lm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Or,useFormState:Zs,useActionState:Zs,useOptimistic:function(t){var e=Ae();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=zr.bind(null,gt,!0,l),l.dispatch=e,[t,e]},useMemoCache:yr,useCacheRefresh:function(){return Ae().memoizedState=Km.bind(null,gt)}},md={readContext:pe,use:ii,useCallback:ad,useContext:pe,useEffect:Is,useImperativeHandle:ld,useInsertionEffect:Ps,useLayoutEffect:td,useMemo:nd,useReducer:ci,useRef:Ws,useState:function(){return ci(dl)},useDebugValue:Tr,useDeferredValue:function(t,e){var l=Pt();return ud(l,_t.memoizedState,t,e)},useTransition:function(){var t=ci(dl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:Wn(t),e]},useSyncExternalStore:Ns,useId:od,useHostTransitionStatus:Or,useFormState:Vs,useActionState:Vs,useOptimistic:function(t,e){var l=Pt();return Qs(l,_t,t,e)},useMemoCache:yr,useCacheRefresh:fd},Wm={readContext:pe,use:ii,useCallback:ad,useContext:pe,useEffect:Is,useImperativeHandle:ld,useInsertionEffect:Ps,useLayoutEffect:td,useMemo:nd,useReducer:xr,useRef:Ws,useState:function(){return xr(dl)},useDebugValue:Tr,useDeferredValue:function(t,e){var l=Pt();return _t===null?Dr(l,t,e):ud(l,_t.memoizedState,t,e)},useTransition:function(){var t=xr(dl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:Wn(t),e]},useSyncExternalStore:Ns,useId:od,useHostTransitionStatus:Or,useFormState:Js,useActionState:Js,useOptimistic:function(t,e){var l=Pt();return _t!==null?Qs(l,_t,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:yr,useCacheRefresh:fd},Fa=null,Pn=0;function di(t){var e=Pn;return Pn+=1,Fa===null&&(Fa=[]),ws(Fa,t,e)}function tu(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hi(t,e){throw e.$$typeof===z?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function bd(t){var e=t._init;return e(t._payload)}function gd(t){function e(y,g){if(t){var x=y.deletions;x===null?(y.deletions=[g],y.flags|=16):x.push(g)}}function l(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function a(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function u(y,g){return y=cl(y,g),y.index=0,y.sibling=null,y}function i(y,g,x){return y.index=x,t?(x=y.alternate,x!==null?(x=x.index,x<g?(y.flags|=67108866,g):x):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function f(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function s(y,g,x,_){return g===null||g.tag!==6?(g=Jc(x,y.mode,_),g.return=y,g):(g=u(g,x),g.return=y,g)}function h(y,g,x,_){var nt=x.type;return nt===W?C(y,g,x.props.children,_,x.key):g!==null&&(g.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===St&&bd(nt)===g.type)?(g=u(g,x.props),tu(g,x),g.return=y,g):(g=Ju(x.type,x.key,x.props,null,y.mode,_),tu(g,x),g.return=y,g)}function S(y,g,x,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Wc(x,y.mode,_),g.return=y,g):(g=u(g,x.children||[]),g.return=y,g)}function C(y,g,x,_,nt){return g===null||g.tag!==7?(g=na(x,y.mode,_,nt),g.return=y,g):(g=u(g,x),g.return=y,g)}function U(y,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Jc(""+g,y.mode,x),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $:return x=Ju(g.type,g.key,g.props,null,y.mode,x),tu(x,g),x.return=y,x;case V:return g=Wc(g,y.mode,x),g.return=y,g;case St:var _=g._init;return g=_(g._payload),U(y,g,x)}if(vt(g)||mt(g))return g=na(g,y.mode,x,null),g.return=y,g;if(typeof g.then=="function")return U(y,di(g),x);if(g.$$typeof===Y)return U(y,Pu(y,g),x);hi(y,g)}return null}function E(y,g,x,_){var nt=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return nt!==null?null:s(y,g,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $:return x.key===nt?h(y,g,x,_):null;case V:return x.key===nt?S(y,g,x,_):null;case St:return nt=x._init,x=nt(x._payload),E(y,g,x,_)}if(vt(x)||mt(x))return nt!==null?null:C(y,g,x,_,null);if(typeof x.then=="function")return E(y,g,di(x),_);if(x.$$typeof===Y)return E(y,g,Pu(y,x),_);hi(y,x)}return null}function T(y,g,x,_,nt){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return y=y.get(x)||null,s(g,y,""+_,nt);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $:return y=y.get(_.key===null?x:_.key)||null,h(g,y,_,nt);case V:return y=y.get(_.key===null?x:_.key)||null,S(g,y,_,nt);case St:var yt=_._init;return _=yt(_._payload),T(y,g,x,_,nt)}if(vt(_)||mt(_))return y=y.get(x)||null,C(g,y,_,nt,null);if(typeof _.then=="function")return T(y,g,x,di(_),nt);if(_.$$typeof===Y)return T(y,g,x,Pu(g,_),nt);hi(g,_)}return null}function ft(y,g,x,_){for(var nt=null,yt=null,ut=g,rt=g=0,ie=null;ut!==null&&rt<x.length;rt++){ut.index>rt?(ie=ut,ut=null):ie=ut.sibling;var Dt=E(y,ut,x[rt],_);if(Dt===null){ut===null&&(ut=ie);break}t&&ut&&Dt.alternate===null&&e(y,ut),g=i(Dt,g,rt),yt===null?nt=Dt:yt.sibling=Dt,yt=Dt,ut=ie}if(rt===x.length)return l(y,ut),wt&&ia(y,rt),nt;if(ut===null){for(;rt<x.length;rt++)ut=U(y,x[rt],_),ut!==null&&(g=i(ut,g,rt),yt===null?nt=ut:yt.sibling=ut,yt=ut);return wt&&ia(y,rt),nt}for(ut=a(ut);rt<x.length;rt++)ie=T(ut,y,rt,x[rt],_),ie!==null&&(t&&ie.alternate!==null&&ut.delete(ie.key===null?rt:ie.key),g=i(ie,g,rt),yt===null?nt=ie:yt.sibling=ie,yt=ie);return t&&ut.forEach(function(Vl){return e(y,Vl)}),wt&&ia(y,rt),nt}function ct(y,g,x,_){if(x==null)throw Error(r(151));for(var nt=null,yt=null,ut=g,rt=g=0,ie=null,Dt=x.next();ut!==null&&!Dt.done;rt++,Dt=x.next()){ut.index>rt?(ie=ut,ut=null):ie=ut.sibling;var Vl=E(y,ut,Dt.value,_);if(Vl===null){ut===null&&(ut=ie);break}t&&ut&&Vl.alternate===null&&e(y,ut),g=i(Vl,g,rt),yt===null?nt=Vl:yt.sibling=Vl,yt=Vl,ut=ie}if(Dt.done)return l(y,ut),wt&&ia(y,rt),nt;if(ut===null){for(;!Dt.done;rt++,Dt=x.next())Dt=U(y,Dt.value,_),Dt!==null&&(g=i(Dt,g,rt),yt===null?nt=Dt:yt.sibling=Dt,yt=Dt);return wt&&ia(y,rt),nt}for(ut=a(ut);!Dt.done;rt++,Dt=x.next())Dt=T(ut,y,rt,Dt.value,_),Dt!==null&&(t&&Dt.alternate!==null&&ut.delete(Dt.key===null?rt:Dt.key),g=i(Dt,g,rt),yt===null?nt=Dt:yt.sibling=Dt,yt=Dt);return t&&ut.forEach(function(Fb){return e(y,Fb)}),wt&&ia(y,rt),nt}function Nt(y,g,x,_){if(typeof x=="object"&&x!==null&&x.type===W&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case $:t:{for(var nt=x.key;g!==null;){if(g.key===nt){if(nt=x.type,nt===W){if(g.tag===7){l(y,g.sibling),_=u(g,x.props.children),_.return=y,y=_;break t}}else if(g.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===St&&bd(nt)===g.type){l(y,g.sibling),_=u(g,x.props),tu(_,x),_.return=y,y=_;break t}l(y,g);break}else e(y,g);g=g.sibling}x.type===W?(_=na(x.props.children,y.mode,_,x.key),_.return=y,y=_):(_=Ju(x.type,x.key,x.props,null,y.mode,_),tu(_,x),_.return=y,y=_)}return f(y);case V:t:{for(nt=x.key;g!==null;){if(g.key===nt)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){l(y,g.sibling),_=u(g,x.children||[]),_.return=y,y=_;break t}else{l(y,g);break}else e(y,g);g=g.sibling}_=Wc(x,y.mode,_),_.return=y,y=_}return f(y);case St:return nt=x._init,x=nt(x._payload),Nt(y,g,x,_)}if(vt(x))return ft(y,g,x,_);if(mt(x)){if(nt=mt(x),typeof nt!="function")throw Error(r(150));return x=nt.call(x),ct(y,g,x,_)}if(typeof x.then=="function")return Nt(y,g,di(x),_);if(x.$$typeof===Y)return Nt(y,g,Pu(y,x),_);hi(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(l(y,g.sibling),_=u(g,x),_.return=y,y=_):(l(y,g),_=Jc(x,y.mode,_),_.return=y,y=_),f(y)):l(y,g)}return function(y,g,x,_){try{Pn=0;var nt=Nt(y,g,x,_);return Fa=null,nt}catch(ut){if(ut===qn||ut===ei)throw ut;var yt=we(29,ut,null,y.mode);return yt.lanes=_,yt.return=y,yt}finally{}}}var Ia=gd(!0),vd=gd(!1),ke=B(null),Fe=null;function _l(t){var e=t.alternate;N(le,le.current&1),N(ke,t),Fe===null&&(e===null||Va.current!==null||e.memoizedState!==null)&&(Fe=t)}function yd(t){if(t.tag===22){if(N(le,le.current),N(ke,t),Fe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Fe=t)}}else Bl()}function Bl(){N(le,le.current),N(ke,ke.current)}function hl(t){Q(ke),Fe===t&&(Fe=null),Q(le)}var le=B(0);function pi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||yo(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Rr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:O({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Mr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Rl(a);u.payload=e,l!=null&&(u.callback=l),e=Ml(t,u,a),e!==null&&(Ce(e,t,a),Zn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Me(),u=Rl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=Ml(t,u,a),e!==null&&(Ce(e,t,a),Zn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Me(),a=Rl(l);a.tag=2,e!=null&&(a.callback=e),e=Ml(t,a,l),e!==null&&(Ce(e,t,l),Zn(e,t,l))}};function Ad(t,e,l,a,u,i,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,f):e.prototype&&e.prototype.isPureReactComponent?!$n(l,a)||!$n(u,i):!0}function xd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Mr.enqueueReplaceState(e,e.state,null)}function ha(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=O({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var mi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Sd(t){mi(t)}function Ed(t){console.error(t)}function Td(t){mi(t)}function bi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Dd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cr(t,e,l){return l=Rl(l),l.tag=3,l.payload={element:null},l.callback=function(){bi(t,e)},l}function wd(t){return t=Rl(t),t.tag=3,t}function Od(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){Dd(e,l,a)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){Dd(e,l,a),typeof u!="function"&&(kl===null?kl=new Set([this]):kl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Fm(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Yn(e,l,u,!0),l=ke.current,l!==null){switch(l.tag){case 13:return Fe===null?eo():l.alternate===null&&qt===0&&(qt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===ir?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),ao(t,a,u)),!1;case 22:return l.flags|=65536,a===ir?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),ao(t,a,u)),!1}throw Error(r(435,l.tag))}return ao(t,a,u),eo(),!1}if(wt)return e=ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Pc&&(t=Error(r(422),{cause:a}),Qn(Ue(t,l)))):(a!==Pc&&(e=Error(r(423),{cause:a}),Qn(Ue(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Ue(a,l),u=Cr(t.stateNode,a,u),or(t,u),qt!==4&&(qt=2)),!1;var i=Error(r(520),{cause:a});if(i=Ue(i,l),cu===null?cu=[i]:cu.push(i),qt!==4&&(qt=2),e===null)return!0;a=Ue(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=Cr(l.stateNode,a,t),or(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(kl===null||!kl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=wd(u),Od(u,t,l,a),or(l,u),!1}l=l.return}while(l!==null);return!1}var zd=Error(r(461)),ne=!1;function oe(t,e,l,a){e.child=t===null?vd(e,null,l,a):Ia(e,t.child,l,a)}function Rd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var f={};for(var s in a)s!=="ref"&&(f[s]=a[s])}else f=a;return fa(e),a=pr(t,e,l,f,i,u),s=mr(),t!==null&&!ne?(br(t,e,u),pl(t,e,u)):(wt&&s&&Fc(e),e.flags|=1,oe(t,e,a,u),e.child)}function Md(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Kc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Cd(t,e,i,a,u)):(t=Ju(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!kr(t,u)){var f=i.memoizedProps;if(l=l.compare,l=l!==null?l:$n,l(f,a)&&t.ref===e.ref)return pl(t,e,u)}return e.flags|=1,t=cl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Cd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if($n(i,a)&&t.ref===e.ref)if(ne=!1,e.pendingProps=a=i,kr(t,u))(t.flags&131072)!==0&&(ne=!0);else return e.lanes=t.lanes,pl(t,e,u)}return _r(t,e,l,a,u)}function _d(t,e,l){var a=e.pendingProps,u=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(u=e.child=t.child,i=0;u!==null;)i=i|u.lanes|u.childLanes,u=u.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Bd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ti(e,i!==null?i.cachePool:null),i!==null?Cs(e,i):sr(),yd(e);else return e.lanes=e.childLanes=536870912,Bd(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(ti(e,i.cachePool),Cs(e,i),Bl(),e.memoizedState=null):(t!==null&&ti(e,null),sr(),Bl());return oe(t,e,u,l),e.child}function Bd(t,e,l,a){var u=ur();return u=u===null?null:{parent:ee._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&ti(e,null),sr(),yd(e),t!==null&&Yn(t,e,a,!0),null}function gi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function _r(t,e,l,a,u){return fa(e),l=pr(t,e,l,a,void 0,u),a=mr(),t!==null&&!ne?(br(t,e,u),pl(t,e,u)):(wt&&a&&Fc(e),e.flags|=1,oe(t,e,l,u),e.child)}function Nd(t,e,l,a,u,i){return fa(e),e.updateQueue=null,l=Bs(e,a,l,u),_s(t),a=mr(),t!==null&&!ne?(br(t,e,i),pl(t,e,i)):(wt&&a&&Fc(e),e.flags|=1,oe(t,e,l,i),e.child)}function Ud(t,e,l,a,u){if(fa(e),e.stateNode===null){var i=Ga,f=l.contextType;typeof f=="object"&&f!==null&&(i=pe(f)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},cr(e),f=l.contextType,i.context=typeof f=="object"&&f!==null?pe(f):Ga,i.state=e.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(Rr(e,l,f,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&Mr.enqueueReplaceState(i,i.state,null),Kn(e,a,i,u),Vn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=ha(l,s);i.props=h;var S=i.context,C=l.contextType;f=Ga,typeof C=="object"&&C!==null&&(f=pe(C));var U=l.getDerivedStateFromProps;C=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||S!==f)&&xd(e,i,a,f),zl=!1;var E=e.memoizedState;i.state=E,Kn(e,a,i,u),Vn(),S=e.memoizedState,s||E!==S||zl?(typeof U=="function"&&(Rr(e,l,U,a),S=e.memoizedState),(h=zl||Ad(e,l,h,a,E,S,f))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=S),i.props=a,i.state=S,i.context=f,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,rr(t,e),f=e.memoizedProps,C=ha(l,f),i.props=C,U=e.pendingProps,E=i.context,S=l.contextType,h=Ga,typeof S=="object"&&S!==null&&(h=pe(S)),s=l.getDerivedStateFromProps,(S=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==U||E!==h)&&xd(e,i,a,h),zl=!1,E=e.memoizedState,i.state=E,Kn(e,a,i,u),Vn();var T=e.memoizedState;f!==U||E!==T||zl||t!==null&&t.dependencies!==null&&Iu(t.dependencies)?(typeof s=="function"&&(Rr(e,l,s,a),T=e.memoizedState),(C=zl||Ad(e,l,C,a,E,T,h)||t!==null&&t.dependencies!==null&&Iu(t.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),i.props=a,i.state=T,i.context=h,a=C):(typeof i.componentDidUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,gi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=Ia(e,t.child,null,u),e.child=Ia(e,null,l,u)):oe(t,e,l,u),e.memoizedState=i.state,t=e.child):t=pl(t,e,u),t}function $d(t,e,l,a){return kn(),e.flags|=256,oe(t,e,l,a),e.child}var Br={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nr(t){return{baseLanes:t,cachePool:Es()}}function Ur(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Qe),t}function Hd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,f;if((f=i)||(f=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),f&&(u=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(wt){if(u?_l(e):Bl(),wt){var s=Lt,h;if(h=s){t:{for(h=s,s=We;h.nodeType!==8;){if(!s){s=null;break t}if(h=Ze(h.nextSibling),h===null){s=null;break t}}s=h}s!==null?(e.memoizedState={dehydrated:s,treeContext:ua!==null?{id:rl,overflow:ol}:null,retryLane:536870912,hydrationErrors:null},h=we(18,null,null,0),h.stateNode=s,h.return=e,e.child=h,be=e,Lt=null,h=!0):h=!1}h||ra(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return yo(s)?e.lanes=32:e.lanes=536870912,null;hl(e)}return s=a.children,a=a.fallback,u?(Bl(),u=e.mode,s=vi({mode:"hidden",children:s},u),a=na(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,u=e.child,u.memoizedState=Nr(l),u.childLanes=Ur(t,f,l),e.memoizedState=Br,a):(_l(e),$r(e,s))}if(h=t.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(_l(e),e.flags&=-257,e=Hr(t,e,l)):e.memoizedState!==null?(Bl(),e.child=t.child,e.flags|=128,e=null):(Bl(),u=a.fallback,s=e.mode,a=vi({mode:"visible",children:a.children},s),u=na(u,s,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,Ia(e,t.child,null,l),a=e.child,a.memoizedState=Nr(l),a.childLanes=Ur(t,f,l),e.memoizedState=Br,e=u);else if(_l(e),yo(s)){if(f=s.nextSibling&&s.nextSibling.dataset,f)var S=f.dgst;f=S,a=Error(r(419)),a.stack="",a.digest=f,Qn({value:a,source:null,stack:null}),e=Hr(t,e,l)}else if(ne||Yn(t,e,l,!1),f=(l&t.childLanes)!==0,ne||f){if(f=jt,f!==null&&(a=l&-l,a=(a&42)!==0?1:yc(a),a=(a&(f.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,Ya(t,a),Ce(f,t,a),zd;s.data==="$?"||eo(),e=Hr(t,e,l)}else s.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,Lt=Ze(s.nextSibling),be=e,wt=!0,ca=null,We=!1,t!==null&&(He[je++]=rl,He[je++]=ol,He[je++]=ua,rl=t.id,ol=t.overflow,ua=e),e=$r(e,a.children),e.flags|=4096);return e}return u?(Bl(),u=a.fallback,s=e.mode,h=t.child,S=h.sibling,a=cl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,S!==null?u=cl(S,u):(u=na(u,s,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,s=t.child.memoizedState,s===null?s=Nr(l):(h=s.cachePool,h!==null?(S=ee._currentValue,h=h.parent!==S?{parent:S,pool:S}:h):h=Es(),s={baseLanes:s.baseLanes|l,cachePool:h}),u.memoizedState=s,u.childLanes=Ur(t,f,l),e.memoizedState=Br,a):(_l(e),l=t.child,t=l.sibling,l=cl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=l,e.memoizedState=null,l)}function $r(t,e){return e=vi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vi(t,e){return t=we(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Hr(t,e,l){return Ia(e,t.child,null,l),t=$r(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),er(t.return,e,l)}function jr(t,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u)}function kd(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;if(oe(t,e,a.children,l),a=le.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jd(t,l,e);else if(t.tag===19)jd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(N(le,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&pi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),jr(e,!1,u,l,i);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&pi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}jr(e,!0,l,null,i);break;case"together":jr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),jl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Yn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=cl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=cl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function kr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Iu(t)))}function Im(t,e,l){switch(e.tag){case 3:dt(e,e.stateNode.containerInfo),Ol(e,ee,t.memoizedState.cache),kn();break;case 27:case 5:st(e);break;case 4:dt(e,e.stateNode.containerInfo);break;case 10:Ol(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(_l(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Hd(t,e,l):(_l(e),t=pl(t,e,l),t!==null?t.sibling:null);_l(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Yn(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return kd(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),N(le,le.current),a)break;return null;case 22:case 23:return e.lanes=0,_d(t,e,l);case 24:Ol(e,ee,t.memoizedState.cache)}return pl(t,e,l)}function Qd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ne=!0;else{if(!kr(t,l)&&(e.flags&128)===0)return ne=!1,Im(t,e,l);ne=(t.flags&131072)!==0}else ne=!1,wt&&(e.flags&1048576)!==0&&bs(e,Fu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")Kc(a)?(t=ha(a,t),e.tag=1,e=Ud(null,e,a,t,l)):(e.tag=0,e=_r(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===lt){e.tag=11,e=Rd(null,e,a,t,l);break t}else if(u===P){e.tag=14,e=Md(null,e,a,t,l);break t}}throw e=$t(a)||a,Error(r(306,e,""))}}return e;case 0:return _r(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=ha(a,e.pendingProps),Ud(t,e,a,u,l);case 3:t:{if(dt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,rr(t,e),Kn(e,a,null,l);var f=e.memoizedState;if(a=f.cache,Ol(e,ee,a),a!==i.cache&&lr(e,[ee],l,!0),Vn(),a=f.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=$d(t,e,a,l);break t}else if(a!==u){u=Ue(Error(r(424)),e),Qn(u),e=$d(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Lt=Ze(t.firstChild),be=e,wt=!0,ca=null,We=!0,l=vd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(kn(),a===u){e=pl(t,e,l);break t}oe(t,e,a,l)}e=e.child}return e;case 26:return gi(t,e),t===null?(l=q0(e.type,null,e.pendingProps,null))?e.memoizedState=l:wt||(l=e.type,t=e.pendingProps,a=_i(Z.current).createElement(l),a[he]=e,a[ve]=t,se(a,l,t),ae(a),e.stateNode=a):e.memoizedState=q0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return st(e),t===null&&wt&&(a=e.stateNode=Y0(e.type,e.pendingProps,Z.current),be=e,We=!0,u=Lt,Gl(e.type)?(Ao=u,Lt=Ze(a.firstChild)):Lt=u),oe(t,e,e.pendingProps.children,l),gi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&wt&&((u=a=Lt)&&(a=wb(a,e.type,e.pendingProps,We),a!==null?(e.stateNode=a,be=e,Lt=Ze(a.firstChild),We=!1,u=!0):u=!1),u||ra(e)),st(e),u=e.type,i=e.pendingProps,f=t!==null?t.memoizedProps:null,a=i.children,bo(u,i)?a=null:f!==null&&bo(u,f)&&(e.flags|=32),e.memoizedState!==null&&(u=pr(t,e,qm,null,null,l),bu._currentValue=u),gi(t,e),oe(t,e,a,l),e.child;case 6:return t===null&&wt&&((t=l=Lt)&&(l=Ob(l,e.pendingProps,We),l!==null?(e.stateNode=l,be=e,Lt=null,t=!0):t=!1),t||ra(e)),null;case 13:return Hd(t,e,l);case 4:return dt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Ia(e,null,a,l):oe(t,e,a,l),e.child;case 11:return Rd(t,e,e.type,e.pendingProps,l);case 7:return oe(t,e,e.pendingProps,l),e.child;case 8:return oe(t,e,e.pendingProps.children,l),e.child;case 12:return oe(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Ol(e,e.type,a.value),oe(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,fa(e),u=pe(u),a=a(u),e.flags|=1,oe(t,e,a,l),e.child;case 14:return Md(t,e,e.type,e.pendingProps,l);case 15:return Cd(t,e,e.type,e.pendingProps,l);case 19:return kd(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=vi(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=cl(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return _d(t,e,l);case 24:return fa(e),a=pe(ee),t===null?(u=ur(),u===null&&(u=jt,i=ar(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},cr(e),Ol(e,ee,u)):((t.lanes&l)!==0&&(rr(t,e),Kn(e,null,null,l),Vn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Ol(e,ee,a)):(a=i.cache,Ol(e,ee,a),a!==u.cache&&lr(e,[ee],l,!0))),oe(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function ml(t){t.flags|=4}function Yd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!J0(e)){if(e=ke.current,e!==null&&((Tt&4194048)===Tt?Fe!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||e!==Fe))throw Xn=ir,Ts;t.flags|=8192}}function yi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yf():536870912,t.lanes|=e,ln|=e)}function eu(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Pm(t,e,l){var a=e.pendingProps;switch(Ic(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return Gt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),sl(ee),j(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(jn(e)?ml(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ys())),Gt(e),null;case 26:return l=e.memoizedState,t===null?(ml(e),l!==null?(Gt(e),Yd(e,l)):(Gt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(ml(e),Gt(e),Yd(e,l)):(Gt(e),e.flags&=-16777217):(t.memoizedProps!==a&&ml(e),Gt(e),e.flags&=-16777217),null;case 27:ht(e),l=Z.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Gt(e),null}t=k.current,jn(e)?gs(e):(t=Y0(u,a,l),e.stateNode=t,ml(e))}return Gt(e),null;case 5:if(ht(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Gt(e),null}if(t=k.current,jn(e))gs(e);else{switch(u=_i(Z.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[he]=e,t[ve]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(se(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ml(e)}}return Gt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&ml(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=Z.current,jn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=be,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[he]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||N0(t.nodeValue,l)),t||ra(e)}else t=_i(t).createTextNode(a),t[he]=e,e.stateNode=t}return Gt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[he]=e}else kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Gt(e),u=!1}else u=ys(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(hl(e),e):(hl(e),null)}if(hl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),yi(e,e.updateQueue),Gt(e),null;case 4:return j(),t===null&&fo(e.stateNode.containerInfo),Gt(e),null;case 10:return sl(e.type),Gt(e),null;case 19:if(Q(le),u=e.memoizedState,u===null)return Gt(e),null;if(a=(e.flags&128)!==0,i=u.rendering,i===null)if(a)eu(u,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=pi(t),i!==null){for(e.flags|=128,eu(u,!1),t=i.updateQueue,e.updateQueue=t,yi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)ms(l,t),l=l.sibling;return N(le,le.current&1|2),e.child}t=t.sibling}u.tail!==null&&Ft()>Si&&(e.flags|=128,a=!0,eu(u,!1),e.lanes=4194304)}else{if(!a)if(t=pi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,yi(e,t),eu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!wt)return Gt(e),null}else 2*Ft()-u.renderingStartTime>Si&&l!==536870912&&(e.flags|=128,a=!0,eu(u,!1),e.lanes=4194304);u.isBackwards?(i.sibling=e.child,e.child=i):(t=u.last,t!==null?t.sibling=i:e.child=i,u.last=i)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Ft(),e.sibling=null,t=le.current,N(le,a?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return hl(e),dr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),l=e.updateQueue,l!==null&&yi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&Q(sa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),sl(ee),Gt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function tb(t,e){switch(Ic(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sl(ee),j(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ht(e),null;case 13:if(hl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(le),null;case 4:return j(),null;case 10:return sl(e.type),null;case 22:case 23:return hl(e),dr(),t!==null&&Q(sa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sl(ee),null;case 25:return null;default:return null}}function Gd(t,e){switch(Ic(e),e.tag){case 3:sl(ee),j();break;case 26:case 27:case 5:ht(e);break;case 4:j();break;case 13:hl(e);break;case 19:Q(le);break;case 10:sl(e.type);break;case 22:case 23:hl(e),dr(),t!==null&&Q(sa);break;case 24:sl(ee)}}function lu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,f=l.inst;a=i(),f.destroy=a}l=l.next}while(l!==u)}}catch(s){Ht(e,e.return,s)}}function Nl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var f=a.inst,s=f.destroy;if(s!==void 0){f.destroy=void 0,u=e;var h=l,S=s;try{S()}catch(C){Ht(u,h,C)}}}a=a.next}while(a!==i)}}catch(C){Ht(e,e.return,C)}}function Ld(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Ms(e,l)}catch(a){Ht(t,t.return,a)}}}function qd(t,e,l){l.props=ha(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ht(t,e,a)}}function au(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Ht(t,e,u)}}function Ie(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Ht(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Ht(t,e,u)}else l.current=null}function Xd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Ht(t,t.return,u)}}function Qr(t,e,l){try{var a=t.stateNode;xb(a,t.type,l,e),a[ve]=e}catch(u){Ht(t,t.return,u)}}function Zd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gl(t.type)||t.tag===4}function Yr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Zd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ci));else if(a!==4&&(a===27&&Gl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Gr(t,e,l),t=t.sibling;t!==null;)Gr(t,e,l),t=t.sibling}function Ai(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Gl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ai(t,e,l),t=t.sibling;t!==null;)Ai(t,e,l),t=t.sibling}function Vd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);se(e,a,l),e[he]=t,e[ve]=l}catch(i){Ht(t,t.return,i)}}var bl=!1,Wt=!1,Lr=!1,Kd=typeof WeakSet=="function"?WeakSet:Set,ue=null;function eb(t,e){if(t=t.containerInfo,po=ji,t=us(t),Yc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var f=0,s=-1,h=-1,S=0,C=0,U=t,E=null;e:for(;;){for(var T;U!==l||u!==0&&U.nodeType!==3||(s=f+u),U!==i||a!==0&&U.nodeType!==3||(h=f+a),U.nodeType===3&&(f+=U.nodeValue.length),(T=U.firstChild)!==null;)E=U,U=T;for(;;){if(U===t)break e;if(E===l&&++S===u&&(s=f),E===i&&++C===a&&(h=f),(T=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=T}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(mo={focusedElem:t,selectionRange:l},ji=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){switch(e=ue,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var ft=ha(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ft,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Ht(l,l.return,ct)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)vo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function Jd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ul(t,l),a&4&&lu(5,l);break;case 1:if(Ul(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(f){Ht(l,l.return,f)}else{var u=ha(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Ht(l,l.return,f)}}a&64&&Ld(l),a&512&&au(l,l.return);break;case 3:if(Ul(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Ms(t,e)}catch(f){Ht(l,l.return,f)}}break;case 27:e===null&&a&4&&Vd(l);case 26:case 5:Ul(t,l),e===null&&a&4&&Xd(l),a&512&&au(l,l.return);break;case 12:Ul(t,l);break;case 13:Ul(t,l),a&4&&Id(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=fb.bind(null,l),zb(t,l))));break;case 22:if(a=l.memoizedState!==null||bl,!a){e=e!==null&&e.memoizedState!==null||Wt,u=bl;var i=Wt;bl=a,(Wt=e)&&!i?$l(t,l,(l.subtreeFlags&8772)!==0):Ul(t,l),bl=u,Wt=i}break;case 30:break;default:Ul(t,l)}}function Wd(t){var e=t.alternate;e!==null&&(t.alternate=null,Wd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Sc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,xe=!1;function gl(t,e,l){for(l=l.child;l!==null;)Fd(t,e,l),l=l.sibling}function Fd(t,e,l){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Tn,l)}catch{}switch(l.tag){case 26:Wt||Ie(l,e),gl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Wt||Ie(l,e);var a=Yt,u=xe;Gl(l.type)&&(Yt=l.stateNode,xe=!1),gl(t,e,l),du(l.stateNode),Yt=a,xe=u;break;case 5:Wt||Ie(l,e);case 6:if(a=Yt,u=xe,Yt=null,gl(t,e,l),Yt=a,xe=u,Yt!==null)if(xe)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(l.stateNode)}catch(i){Ht(l,e,i)}else try{Yt.removeChild(l.stateNode)}catch(i){Ht(l,e,i)}break;case 18:Yt!==null&&(xe?(t=Yt,k0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Au(t)):k0(Yt,l.stateNode));break;case 4:a=Yt,u=xe,Yt=l.stateNode.containerInfo,xe=!0,gl(t,e,l),Yt=a,xe=u;break;case 0:case 11:case 14:case 15:Wt||Nl(2,l,e),Wt||Nl(4,l,e),gl(t,e,l);break;case 1:Wt||(Ie(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&qd(l,e,a)),gl(t,e,l);break;case 21:gl(t,e,l);break;case 22:Wt=(a=Wt)||l.memoizedState!==null,gl(t,e,l),Wt=a;break;default:gl(t,e,l)}}function Id(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Au(t)}catch(l){Ht(e,e.return,l)}}function lb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Kd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Kd),e;default:throw Error(r(435,t.tag))}}function qr(t,e){var l=lb(t);e.forEach(function(a){var u=sb.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function Oe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,f=e,s=f;t:for(;s!==null;){switch(s.tag){case 27:if(Gl(s.type)){Yt=s.stateNode,xe=!1;break t}break;case 5:Yt=s.stateNode,xe=!1;break t;case 3:case 4:Yt=s.stateNode.containerInfo,xe=!0;break t}s=s.return}if(Yt===null)throw Error(r(160));Fd(i,f,u),Yt=null,xe=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Pd(e,t),e=e.sibling}var Xe=null;function Pd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Oe(e,t),ze(t),a&4&&(Nl(3,t,t.return),lu(3,t),Nl(5,t,t.return));break;case 1:Oe(e,t),ze(t),a&512&&(Wt||l===null||Ie(l,l.return)),a&64&&bl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Xe;if(Oe(e,t),ze(t),a&512&&(Wt||l===null||Ie(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[On]||i[he]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),se(i,a,l),i[he]=t,ae(i),a=i;break t;case"link":var f=V0("link","href",u).get(a+(l.href||""));if(f){for(var s=0;s<f.length;s++)if(i=f[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(s,1);break e}}i=u.createElement(a),se(i,a,l),u.head.appendChild(i);break;case"meta":if(f=V0("meta","content",u).get(a+(l.content||""))){for(s=0;s<f.length;s++)if(i=f[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(s,1);break e}}i=u.createElement(a),se(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[he]=t,ae(i),a=i}t.stateNode=a}else K0(u,t.type,t.stateNode);else t.stateNode=Z0(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?K0(u,t.type,t.stateNode):Z0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Qr(t,t.memoizedProps,l.memoizedProps)}break;case 27:Oe(e,t),ze(t),a&512&&(Wt||l===null||Ie(l,l.return)),l!==null&&a&4&&Qr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Oe(e,t),ze(t),a&512&&(Wt||l===null||Ie(l,l.return)),t.flags&32){u=t.stateNode;try{Na(u,"")}catch(T){Ht(t,t.return,T)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Qr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Lr=!0);break;case 6:if(Oe(e,t),ze(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(T){Ht(t,t.return,T)}}break;case 3:if(Ui=null,u=Xe,Xe=Bi(e.containerInfo),Oe(e,t),Xe=u,ze(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Au(e.containerInfo)}catch(T){Ht(t,t.return,T)}Lr&&(Lr=!1,t0(t));break;case 4:a=Xe,Xe=Bi(t.stateNode.containerInfo),Oe(e,t),ze(t),Xe=a;break;case 12:Oe(e,t),ze(t);break;case 13:Oe(e,t),ze(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Wr=Ft()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,qr(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,S=bl,C=Wt;if(bl=S||u,Wt=C||h,Oe(e,t),Wt=C,bl=S,ze(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||bl||Wt||pa(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{s=h.stateNode;var U=h.memoizedProps.style,E=U!=null&&U.hasOwnProperty("display")?U.display:null;s.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){Ht(h,h.return,T)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(T){Ht(h,h.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,qr(t,l))));break;case 19:Oe(e,t),ze(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,qr(t,a)));break;case 30:break;case 21:break;default:Oe(e,t),ze(t)}}function ze(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Zd(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=Yr(t);Ai(t,i,u);break;case 5:var f=l.stateNode;l.flags&32&&(Na(f,""),l.flags&=-33);var s=Yr(t);Ai(t,s,f);break;case 3:case 4:var h=l.stateNode.containerInfo,S=Yr(t);Gr(t,S,h);break;default:throw Error(r(161))}}catch(C){Ht(t,t.return,C)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function t0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;t0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ul(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Jd(t,e.alternate,e),e=e.sibling}function pa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Nl(4,e,e.return),pa(e);break;case 1:Ie(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&qd(e,e.return,l),pa(e);break;case 27:du(e.stateNode);case 26:case 5:Ie(e,e.return),pa(e);break;case 22:e.memoizedState===null&&pa(e);break;case 30:pa(e);break;default:pa(e)}t=t.sibling}}function $l(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,f=i.flags;switch(i.tag){case 0:case 11:case 15:$l(u,i,l),lu(4,i);break;case 1:if($l(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(S){Ht(a,a.return,S)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)Rs(h[u],s)}catch(S){Ht(a,a.return,S)}}l&&f&64&&Ld(i),au(i,i.return);break;case 27:Vd(i);case 26:case 5:$l(u,i,l),l&&a===null&&f&4&&Xd(i),au(i,i.return);break;case 12:$l(u,i,l);break;case 13:$l(u,i,l),l&&f&4&&Id(u,i);break;case 22:i.memoizedState===null&&$l(u,i,l),au(i,i.return);break;case 30:break;default:$l(u,i,l)}e=e.sibling}}function Xr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Gn(l))}function Zr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gn(t))}function Pe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)e0(t,e,l,a),e=e.sibling}function e0(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Pe(t,e,l,a),u&2048&&lu(9,e);break;case 1:Pe(t,e,l,a);break;case 3:Pe(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gn(t)));break;case 12:if(u&2048){Pe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,f=i.id,s=i.onPostCommit;typeof s=="function"&&s(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ht(e,e.return,h)}}else Pe(t,e,l,a);break;case 13:Pe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,f=e.alternate,e.memoizedState!==null?i._visibility&2?Pe(t,e,l,a):nu(t,e):i._visibility&2?Pe(t,e,l,a):(i._visibility|=2,Pa(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&Xr(f,e);break;case 24:Pe(t,e,l,a),u&2048&&Zr(e.alternate,e);break;default:Pe(t,e,l,a)}}function Pa(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,f=e,s=l,h=a,S=f.flags;switch(f.tag){case 0:case 11:case 15:Pa(i,f,s,h,u),lu(8,f);break;case 23:break;case 22:var C=f.stateNode;f.memoizedState!==null?C._visibility&2?Pa(i,f,s,h,u):nu(i,f):(C._visibility|=2,Pa(i,f,s,h,u)),u&&S&2048&&Xr(f.alternate,f);break;case 24:Pa(i,f,s,h,u),u&&S&2048&&Zr(f.alternate,f);break;default:Pa(i,f,s,h,u)}e=e.sibling}}function nu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:nu(l,a),u&2048&&Xr(a.alternate,a);break;case 24:nu(l,a),u&2048&&Zr(a.alternate,a);break;default:nu(l,a)}e=e.sibling}}var uu=8192;function tn(t){if(t.subtreeFlags&uu)for(t=t.child;t!==null;)l0(t),t=t.sibling}function l0(t){switch(t.tag){case 26:tn(t),t.flags&uu&&t.memoizedState!==null&&Yb(Xe,t.memoizedState,t.memoizedProps);break;case 5:tn(t);break;case 3:case 4:var e=Xe;Xe=Bi(t.stateNode.containerInfo),tn(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=uu,uu=16777216,tn(t),uu=e):tn(t));break;default:tn(t)}}function a0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function iu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,u0(a,t)}a0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(t),t=t.sibling}function n0(t){switch(t.tag){case 0:case 11:case 15:iu(t),t.flags&2048&&Nl(9,t,t.return);break;case 3:iu(t);break;case 12:iu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xi(t)):iu(t);break;default:iu(t)}}function xi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,u0(a,t)}a0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Nl(8,e,e.return),xi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,xi(e));break;default:xi(e)}t=t.sibling}}function u0(t,e){for(;ue!==null;){var l=ue;switch(l.tag){case 0:case 11:case 15:Nl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ue=a;else t:for(l=t;ue!==null;){a=ue;var u=a.sibling,i=a.return;if(Wd(a),a===l){ue=null;break t}if(u!==null){u.return=i,ue=u;break t}ue=i}}}var ab={getCacheForType:function(t){var e=pe(ee),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},nb=typeof WeakMap=="function"?WeakMap:Map,Rt=0,jt=null,At=null,Tt=0,Mt=0,Re=null,Hl=!1,en=!1,Vr=!1,vl=0,qt=0,jl=0,ma=0,Kr=0,Qe=0,ln=0,cu=null,Se=null,Jr=!1,Wr=0,Si=1/0,Ei=null,kl=null,fe=0,Ql=null,an=null,nn=0,Fr=0,Ir=null,i0=null,ru=0,Pr=null;function Me(){if((Rt&2)!==0&&Tt!==0)return Tt&-Tt;if(R.T!==null){var t=Xa;return t!==0?t:io()}return Sf()}function c0(){Qe===0&&(Qe=(Tt&536870912)===0||wt?vf():536870912);var t=ke.current;return t!==null&&(t.flags|=32),Qe}function Ce(t,e,l){(t===jt&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(un(t,0),Yl(t,Tt,Qe,!1)),wn(t,l),((Rt&2)===0||t!==jt)&&(t===jt&&((Rt&2)===0&&(ma|=l),qt===4&&Yl(t,Tt,Qe,!1)),tl(t))}function r0(t,e,l){if((Rt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Dn(t,e),u=a?cb(t,e):lo(t,e,!0),i=a;do{if(u===0){en&&!a&&Yl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!ub(l)){u=lo(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var s=t;u=cu;var h=s.current.memoizedState.isDehydrated;if(h&&(un(s,f).flags|=256),f=lo(s,f,!1),f!==2){if(Vr&&!h){s.errorRecoveryDisabledLanes|=i,ma|=i,u=4;break t}i=Se,Se=u,i!==null&&(Se===null?Se=i:Se.push.apply(Se,i))}u=f}if(i=!1,u!==2)continue}}if(u===1){un(t,0),Yl(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Yl(a,e,Qe,!Hl);break t;case 2:Se=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Wr+300-Ft(),10<u)){if(Yl(a,e,Qe,!Hl),Nu(a,0,!0)!==0)break t;a.timeoutHandle=H0(o0.bind(null,a,l,Se,Ei,Jr,e,Qe,ma,ln,Hl,i,2,-0,0),u);break t}o0(a,l,Se,Ei,Jr,e,Qe,ma,ln,Hl,i,0,-0,0)}}break}while(!0);tl(t)}function o0(t,e,l,a,u,i,f,s,h,S,C,U,E,T){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(mu={stylesheets:null,count:0,unsuspend:Qb},l0(e),U=Gb(),U!==null)){t.cancelPendingCommit=U(b0.bind(null,t,e,i,l,a,u,f,s,h,C,1,E,T)),Yl(t,i,f,!S);return}b0(t,e,i,l,a,u,f,s,h)}function ub(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!De(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yl(t,e,l,a){e&=~Kr,e&=~ma,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-Te(u),f=1<<i;a[i]=-1,u&=~f}l!==0&&Af(t,l,e)}function Ti(){return(Rt&6)===0?(ou(0),!1):!0}function to(){if(At!==null){if(Mt===0)var t=At.return;else t=At,fl=oa=null,gr(t),Fa=null,Pn=0,t=At;for(;t!==null;)Gd(t.alternate,t),t=t.return;At=null}}function un(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Eb(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),to(),jt=t,At=l=cl(t.current,null),Tt=e,Mt=0,Re=null,Hl=!1,en=Dn(t,e),Vr=!1,ln=Qe=Kr=ma=jl=qt=0,Se=cu=null,Jr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-Te(a),i=1<<u;e|=t[u],a&=~i}return vl=e,Zu(),l}function f0(t,e){gt=null,R.H=si,e===qn||e===ei?(e=Os(),Mt=3):e===Ts?(e=Os(),Mt=4):Mt=e===zd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,At===null&&(qt=1,bi(t,Ue(e,t.current)))}function s0(){var t=R.H;return R.H=si,t===null?si:t}function d0(){var t=R.A;return R.A=ab,t}function eo(){qt=4,Hl||(Tt&4194048)!==Tt&&ke.current!==null||(en=!0),(jl&134217727)===0&&(ma&134217727)===0||jt===null||Yl(jt,Tt,Qe,!1)}function lo(t,e,l){var a=Rt;Rt|=2;var u=s0(),i=d0();(jt!==t||Tt!==e)&&(Ei=null,un(t,e)),e=!1;var f=qt;t:do try{if(Mt!==0&&At!==null){var s=At,h=Re;switch(Mt){case 8:to(),f=6;break t;case 3:case 2:case 9:case 6:ke.current===null&&(e=!0);var S=Mt;if(Mt=0,Re=null,cn(t,s,h,S),l&&en){f=0;break t}break;default:S=Mt,Mt=0,Re=null,cn(t,s,h,S)}}ib(),f=qt;break}catch(C){f0(t,C)}while(!0);return e&&t.shellSuspendCounter++,fl=oa=null,Rt=a,R.H=u,R.A=i,At===null&&(jt=null,Tt=0,Zu()),f}function ib(){for(;At!==null;)h0(At)}function cb(t,e){var l=Rt;Rt|=2;var a=s0(),u=d0();jt!==t||Tt!==e?(Ei=null,Si=Ft()+500,un(t,e)):en=Dn(t,e);t:do try{if(Mt!==0&&At!==null){e=At;var i=Re;e:switch(Mt){case 1:Mt=0,Re=null,cn(t,e,i,1);break;case 2:case 9:if(Ds(i)){Mt=0,Re=null,p0(e);break}e=function(){Mt!==2&&Mt!==9||jt!==t||(Mt=7),tl(t)},i.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Ds(i)?(Mt=0,Re=null,p0(e)):(Mt=0,Re=null,cn(t,e,i,7));break;case 5:var f=null;switch(At.tag){case 26:f=At.memoizedState;case 5:case 27:var s=At;if(!f||J0(f)){Mt=0,Re=null;var h=s.sibling;if(h!==null)At=h;else{var S=s.return;S!==null?(At=S,Di(S)):At=null}break e}}Mt=0,Re=null,cn(t,e,i,5);break;case 6:Mt=0,Re=null,cn(t,e,i,6);break;case 8:to(),qt=6;break t;default:throw Error(r(462))}}rb();break}catch(C){f0(t,C)}while(!0);return fl=oa=null,R.H=a,R.A=u,Rt=l,At!==null?0:(jt=null,Tt=0,Zu(),qt)}function rb(){for(;At!==null&&!Kt();)h0(At)}function h0(t){var e=Qd(t.alternate,t,vl);t.memoizedProps=t.pendingProps,e===null?Di(t):At=e}function p0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Nd(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=Nd(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:gr(e);default:Gd(l,e),e=At=ms(e,vl),e=Qd(l,e,vl)}t.memoizedProps=t.pendingProps,e===null?Di(t):At=e}function cn(t,e,l,a){fl=oa=null,gr(e),Fa=null,Pn=0;var u=e.return;try{if(Fm(t,u,e,l,Tt)){qt=1,bi(t,Ue(l,t.current)),At=null;return}}catch(i){if(u!==null)throw At=u,i;qt=1,bi(t,Ue(l,t.current)),At=null;return}e.flags&32768?(wt||a===1?t=!0:en||(Tt&536870912)!==0?t=!1:(Hl=t=!0,(a===2||a===9||a===3||a===6)&&(a=ke.current,a!==null&&a.tag===13&&(a.flags|=16384))),m0(e,t)):Di(e)}function Di(t){var e=t;do{if((e.flags&32768)!==0){m0(e,Hl);return}t=e.return;var l=Pm(e.alternate,e,vl);if(l!==null){At=l;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);qt===0&&(qt=5)}function m0(t,e){do{var l=tb(t.alternate,t);if(l!==null){l.flags&=32767,At=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=l}while(t!==null);qt=6,At=null}function b0(t,e,l,a,u,i,f,s,h){t.cancelPendingCommit=null;do wi();while(fe!==0);if((Rt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Zc,Qp(t,l,i,f,s,h),t===jt&&(At=jt=null,Tt=0),an=e,Ql=t,nn=l,Fr=i,Ir=u,i0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,db(El,function(){return x0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,u=G.p,G.p=2,f=Rt,Rt|=4;try{eb(t,e,l)}finally{Rt=f,G.p=u,R.T=a}}fe=1,g0(),v0(),y0()}}function g0(){if(fe===1){fe=0;var t=Ql,e=an,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=R.T,R.T=null;var a=G.p;G.p=2;var u=Rt;Rt|=4;try{Pd(e,t);var i=mo,f=us(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(f!==s&&s&&s.ownerDocument&&ns(s.ownerDocument.documentElement,s)){if(h!==null&&Yc(s)){var S=h.start,C=h.end;if(C===void 0&&(C=S),"selectionStart"in s)s.selectionStart=S,s.selectionEnd=Math.min(C,s.value.length);else{var U=s.ownerDocument||document,E=U&&U.defaultView||window;if(E.getSelection){var T=E.getSelection(),ft=s.textContent.length,ct=Math.min(h.start,ft),Nt=h.end===void 0?ct:Math.min(h.end,ft);!T.extend&&ct>Nt&&(f=Nt,Nt=ct,ct=f);var y=as(s,ct),g=as(s,Nt);if(y&&g&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==g.node||T.focusOffset!==g.offset)){var x=U.createRange();x.setStart(y.node,y.offset),T.removeAllRanges(),ct>Nt?(T.addRange(x),T.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),T.addRange(x))}}}}for(U=[],T=s;T=T.parentNode;)T.nodeType===1&&U.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<U.length;s++){var _=U[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}ji=!!po,mo=po=null}finally{Rt=u,G.p=a,R.T=l}}t.current=e,fe=2}}function v0(){if(fe===2){fe=0;var t=Ql,e=an,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=R.T,R.T=null;var a=G.p;G.p=2;var u=Rt;Rt|=4;try{Jd(t,e.alternate,e)}finally{Rt=u,G.p=a,R.T=l}}fe=3}}function y0(){if(fe===4||fe===3){fe=0,ge();var t=Ql,e=an,l=nn,a=i0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?fe=5:(fe=0,an=Ql=null,A0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(kl=null),Ac(l),e=e.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Tn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=R.T,u=G.p,G.p=2,R.T=null;try{for(var i=t.onRecoverableError,f=0;f<a.length;f++){var s=a[f];i(s.value,{componentStack:s.stack})}}finally{R.T=e,G.p=u}}(nn&3)!==0&&wi(),tl(t),u=t.pendingLanes,(l&4194090)!==0&&(u&42)!==0?t===Pr?ru++:(ru=0,Pr=t):ru=0,ou(0)}}function A0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Gn(e)))}function wi(t){return g0(),v0(),y0(),x0()}function x0(){if(fe!==5)return!1;var t=Ql,e=Fr;Fr=0;var l=Ac(nn),a=R.T,u=G.p;try{G.p=32>l?32:l,R.T=null,l=Ir,Ir=null;var i=Ql,f=nn;if(fe=0,an=Ql=null,nn=0,(Rt&6)!==0)throw Error(r(331));var s=Rt;if(Rt|=4,n0(i.current),e0(i,i.current,f,l),Rt=s,ou(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Tn,i)}catch{}return!0}finally{G.p=u,R.T=a,A0(t,e)}}function S0(t,e,l){e=Ue(l,e),e=Cr(t.stateNode,e,2),t=Ml(t,e,2),t!==null&&(wn(t,2),tl(t))}function Ht(t,e,l){if(t.tag===3)S0(t,t,l);else for(;e!==null;){if(e.tag===3){S0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(kl===null||!kl.has(a))){t=Ue(l,t),l=wd(2),a=Ml(e,l,2),a!==null&&(Od(l,a,e,t),wn(a,2),tl(a));break}}e=e.return}}function ao(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new nb;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Vr=!0,u.add(l),t=ob.bind(null,t,e,l),e.then(t,t))}function ob(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,jt===t&&(Tt&l)===l&&(qt===4||qt===3&&(Tt&62914560)===Tt&&300>Ft()-Wr?(Rt&2)===0&&un(t,0):Kr|=l,ln===Tt&&(ln=0)),tl(t)}function E0(t,e){e===0&&(e=yf()),t=Ya(t,e),t!==null&&(wn(t,e),tl(t))}function fb(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),E0(t,l)}function sb(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),E0(t,l)}function db(t,e){return Ct(t,e)}var Oi=null,rn=null,no=!1,zi=!1,uo=!1,ba=0;function tl(t){t!==rn&&t.next===null&&(rn===null?Oi=rn=t:rn=rn.next=t),zi=!0,no||(no=!0,pb())}function ou(t,e){if(!uo&&zi){uo=!0;do for(var l=!1,a=Oi;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var f=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Te(42|t)+1)-1,i&=u&~(f&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,O0(a,i))}else i=Tt,i=Nu(a,a===jt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Dn(a,i)||(l=!0,O0(a,i));a=a.next}while(l);uo=!1}}function hb(){T0()}function T0(){zi=no=!1;var t=0;ba!==0&&(Sb()&&(t=ba),ba=0);for(var e=Ft(),l=null,a=Oi;a!==null;){var u=a.next,i=D0(a,e);i===0?(a.next=null,l===null?Oi=u:l.next=u,u===null&&(rn=l)):(l=a,(t!==0||(i&3)!==0)&&(zi=!0)),a=u}ou(t)}function D0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var f=31-Te(i),s=1<<f,h=u[f];h===-1?((s&l)===0||(s&a)!==0)&&(u[f]=kp(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=jt,l=Tt,l=Nu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vt(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Dn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Vt(a),Ac(l)){case 2:case 8:l=wa;break;case 32:l=El;break;case 268435456:l=En;break;default:l=El}return a=w0.bind(null,t),l=Ct(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Vt(a),t.callbackPriority=2,t.callbackNode=null,2}function w0(t,e){if(fe!==0&&fe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(wi()&&t.callbackNode!==l)return null;var a=Tt;return a=Nu(t,t===jt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(r0(t,a,e),D0(t,Ft()),t.callbackNode!=null&&t.callbackNode===l?w0.bind(null,t):null)}function O0(t,e){if(wi())return null;r0(t,e,!0)}function pb(){Tb(function(){(Rt&6)!==0?Ct(Le,hb):T0()})}function io(){return ba===0&&(ba=vf()),ba}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ku(""+t)}function R0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function mb(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=z0((u[ve]||null).action),f=a.submitter;f&&(e=(e=f[ve]||null)?z0(e.formAction):f.getAttribute("formAction"),e!==null&&(i=e,f=null));var s=new Lu("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var h=f?R0(u,f):new FormData(u);wr(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=f?R0(u,f):new FormData(u),wr(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var co=0;co<Xc.length;co++){var ro=Xc[co],bb=ro.toLowerCase(),gb=ro[0].toUpperCase()+ro.slice(1);qe(bb,"on"+gb)}qe(rs,"onAnimationEnd"),qe(os,"onAnimationIteration"),qe(fs,"onAnimationStart"),qe("dblclick","onDoubleClick"),qe("focusin","onFocus"),qe("focusout","onBlur"),qe(Nm,"onTransitionRun"),qe(Um,"onTransitionStart"),qe($m,"onTransitionCancel"),qe(ss,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fu));function M0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var f=a.length-1;0<=f;f--){var s=a[f],h=s.instance,S=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=S;try{i(u)}catch(C){mi(C)}u.currentTarget=null,i=h}else for(f=0;f<a.length;f++){if(s=a[f],h=s.instance,S=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=S;try{i(u)}catch(C){mi(C)}u.currentTarget=null,i=h}}}}function xt(t,e){var l=e[xc];l===void 0&&(l=e[xc]=new Set);var a=t+"__bubble";l.has(a)||(C0(e,t,2,!1),l.add(a))}function oo(t,e,l){var a=0;e&&(a|=4),C0(l,t,a,e)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[Ri]){t[Ri]=!0,Tf.forEach(function(l){l!=="selectionchange"&&(vb.has(l)||oo(l,!1,t),oo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ri]||(e[Ri]=!0,oo("selectionchange",!1,e))}}function C0(t,e,l,a){switch(eh(e)){case 2:var u=Xb;break;case 8:u=Zb;break;default:u=Do}l=u.bind(null,e,l,t),u=void 0,!_c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function so(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var s=a.stateNode.containerInfo;if(s===u)break;if(f===4)for(f=a.return;f!==null;){var h=f.tag;if((h===3||h===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;s!==null;){if(f=za(s),f===null)return;if(h=f.tag,h===5||h===6||h===26||h===27){a=i=f;continue t}s=s.parentNode}}a=a.return}jf(function(){var S=i,C=Mc(l),U=[];t:{var E=ds.get(t);if(E!==void 0){var T=Lu,ft=t;switch(t){case"keypress":if(Yu(l)===0)break t;case"keydown":case"keyup":T=dm;break;case"focusin":ft="focus",T=$c;break;case"focusout":ft="blur",T=$c;break;case"beforeblur":case"afterblur":T=$c;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=mm;break;case rs:case os:case fs:T=am;break;case ss:T=gm;break;case"scroll":case"scrollend":T=Ip;break;case"wheel":T=ym;break;case"copy":case"cut":case"paste":T=um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Lf;break;case"toggle":case"beforetoggle":T=xm}var ct=(e&4)!==0,Nt=!ct&&(t==="scroll"||t==="scrollend"),y=ct?E!==null?E+"Capture":null:E;ct=[];for(var g=S,x;g!==null;){var _=g;if(x=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||x===null||y===null||(_=Rn(g,y),_!=null&&ct.push(su(g,_,x))),Nt)break;g=g.return}0<ct.length&&(E=new T(E,ft,null,l,C),U.push({event:E,listeners:ct}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",E&&l!==Rc&&(ft=l.relatedTarget||l.fromElement)&&(za(ft)||ft[Oa]))break t;if((T||E)&&(E=C.window===C?C:(E=C.ownerDocument)?E.defaultView||E.parentWindow:window,T?(ft=l.relatedTarget||l.toElement,T=S,ft=ft?za(ft):null,ft!==null&&(Nt=m(ft),ct=ft.tag,ft!==Nt||ct!==5&&ct!==27&&ct!==6)&&(ft=null)):(T=null,ft=S),T!==ft)){if(ct=Yf,_="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Lf,_="onPointerLeave",y="onPointerEnter",g="pointer"),Nt=T==null?E:zn(T),x=ft==null?E:zn(ft),E=new ct(_,g+"leave",T,l,C),E.target=Nt,E.relatedTarget=x,_=null,za(C)===S&&(ct=new ct(y,g+"enter",ft,l,C),ct.target=x,ct.relatedTarget=Nt,_=ct),Nt=_,T&&ft)e:{for(ct=T,y=ft,g=0,x=ct;x;x=on(x))g++;for(x=0,_=y;_;_=on(_))x++;for(;0<g-x;)ct=on(ct),g--;for(;0<x-g;)y=on(y),x--;for(;g--;){if(ct===y||y!==null&&ct===y.alternate)break e;ct=on(ct),y=on(y)}ct=null}else ct=null;T!==null&&_0(U,E,T,ct,!1),ft!==null&&Nt!==null&&_0(U,Nt,ft,ct,!0)}}t:{if(E=S?zn(S):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var nt=Ff;else if(Jf(E))if(If)nt=Cm;else{nt=Rm;var yt=zm}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?S&&zc(S.elementType)&&(nt=Ff):nt=Mm;if(nt&&(nt=nt(t,S))){Wf(U,nt,l,C);break t}yt&&yt(t,E,S),t==="focusout"&&S&&E.type==="number"&&S.memoizedProps.value!=null&&Oc(E,"number",E.value)}switch(yt=S?zn(S):window,t){case"focusin":(Jf(yt)||yt.contentEditable==="true")&&(ja=yt,Gc=S,Hn=null);break;case"focusout":Hn=Gc=ja=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,is(U,l,C);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":is(U,l,C)}var ut;if(jc)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Ha?Vf(t,l)&&(rt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(qf&&l.locale!=="ko"&&(Ha||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ha&&(ut=kf()):(wl=C,Bc="value"in wl?wl.value:wl.textContent,Ha=!0)),yt=Mi(S,rt),0<yt.length&&(rt=new Gf(rt,t,null,l,C),U.push({event:rt,listeners:yt}),ut?rt.data=ut:(ut=Kf(l),ut!==null&&(rt.data=ut)))),(ut=Em?Tm(t,l):Dm(t,l))&&(rt=Mi(S,"onBeforeInput"),0<rt.length&&(yt=new Gf("onBeforeInput","beforeinput",null,l,C),U.push({event:yt,listeners:rt}),yt.data=ut)),mb(U,t,S,l,C)}M0(U,e)})}function su(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Mi(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=Rn(t,l),u!=null&&a.unshift(su(t,u,i)),u=Rn(t,e),u!=null&&a.push(su(t,u,i))),t.tag===3)return a;t=t.return}return[]}function on(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _0(t,e,l,a,u){for(var i=e._reactName,f=[];l!==null&&l!==a;){var s=l,h=s.alternate,S=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||S===null||(h=S,u?(S=Rn(l,i),S!=null&&f.unshift(su(l,S,h))):u||(S=Rn(l,i),S!=null&&f.push(su(l,S,h)))),l=l.return}f.length!==0&&t.push({event:e,listeners:f})}var yb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function B0(t){return(typeof t=="string"?t:""+t).replace(yb,`
`).replace(Ab,"")}function N0(t,e){return e=B0(e),B0(t)===e}function Ci(){}function Bt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Na(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Na(t,""+a);break;case"className":$u(t,"class",a);break;case"tabIndex":$u(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":$u(t,l,a);break;case"style":$f(t,a,i);break;case"data":if(e!=="object"){$u(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=ku(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Bt(t,e,"name",u.name,u,null),Bt(t,e,"formEncType",u.formEncType,u,null),Bt(t,e,"formMethod",u.formMethod,u,null),Bt(t,e,"formTarget",u.formTarget,u,null)):(Bt(t,e,"encType",u.encType,u,null),Bt(t,e,"method",u.method,u,null),Bt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=ku(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ci);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=ku(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Uu(t,"popover",a);break;case"xlinkActuate":ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Uu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Wp.get(l)||l,Uu(t,l,a))}}function ho(t,e,l,a,u,i){switch(l){case"style":$f(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Na(t,a):(typeof a=="number"||typeof a=="bigint")&&Na(t,""+a);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Df.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ve]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Uu(t,l,a)}}}function se(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var f=l[i];if(f!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,i,f,l,null)}}u&&Bt(t,e,"srcSet",l.srcSet,l,null),a&&Bt(t,e,"src",l.src,l,null);return;case"input":xt("invalid",t);var s=i=f=u=null,h=null,S=null;for(a in l)if(l.hasOwnProperty(a)){var C=l[a];if(C!=null)switch(a){case"name":u=C;break;case"type":f=C;break;case"checked":h=C;break;case"defaultChecked":S=C;break;case"value":i=C;break;case"defaultValue":s=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,e));break;default:Bt(t,e,a,C,l,null)}}_f(t,i,s,h,S,f,u,!1),Hu(t);return;case"select":xt("invalid",t),a=f=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":f=s;break;case"multiple":a=s;default:Bt(t,e,u,s,l,null)}e=i,l=f,t.multiple=!!a,e!=null?Ba(t,!!a,e,!1):l!=null&&Ba(t,!!a,l,!0);return;case"textarea":xt("invalid",t),i=u=a=null;for(f in l)if(l.hasOwnProperty(f)&&(s=l[f],s!=null))switch(f){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:Bt(t,e,f,s,l,null)}Nf(t,a,u,i),Hu(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Bt(t,e,h,a,l,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(a=0;a<fu.length;a++)xt(fu[a],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in l)if(l.hasOwnProperty(S)&&(a=l[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,S,a,l,null)}return;default:if(zc(e)){for(C in l)l.hasOwnProperty(C)&&(a=l[C],a!==void 0&&ho(t,e,C,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&Bt(t,e,s,a,l,null))}function xb(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,f=null,s=null,h=null,S=null,C=null;for(T in l){var U=l[T];if(l.hasOwnProperty(T)&&U!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=U;default:a.hasOwnProperty(T)||Bt(t,e,T,null,a,U)}}for(var E in a){var T=a[E];if(U=l[E],a.hasOwnProperty(E)&&(T!=null||U!=null))switch(E){case"type":i=T;break;case"name":u=T;break;case"checked":S=T;break;case"defaultChecked":C=T;break;case"value":f=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:T!==U&&Bt(t,e,E,T,a,U)}}wc(t,f,s,h,S,C,i,u);return;case"select":T=f=s=E=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":T=h;default:a.hasOwnProperty(i)||Bt(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":f=i;default:i!==h&&Bt(t,e,u,i,a,h)}e=s,l=f,a=T,E!=null?Ba(t,!!l,E,!1):!!a!=!!l&&(e!=null?Ba(t,!!l,e,!0):Ba(t,!!l,l?[]:"",!1));return;case"textarea":T=E=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Bt(t,e,s,null,a,u)}for(f in a)if(u=a[f],i=l[f],a.hasOwnProperty(f)&&(u!=null||i!=null))switch(f){case"value":E=u;break;case"defaultValue":T=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&Bt(t,e,f,u,a,i)}Bf(t,E,T);return;case"option":for(var ft in l)if(E=l[ft],l.hasOwnProperty(ft)&&E!=null&&!a.hasOwnProperty(ft))switch(ft){case"selected":t.selected=!1;break;default:Bt(t,e,ft,null,a,E)}for(h in a)if(E=a[h],T=l[h],a.hasOwnProperty(h)&&E!==T&&(E!=null||T!=null))switch(h){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Bt(t,e,h,E,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in l)E=l[ct],l.hasOwnProperty(ct)&&E!=null&&!a.hasOwnProperty(ct)&&Bt(t,e,ct,null,a,E);for(S in a)if(E=a[S],T=l[S],a.hasOwnProperty(S)&&E!==T&&(E!=null||T!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,e));break;default:Bt(t,e,S,E,a,T)}return;default:if(zc(e)){for(var Nt in l)E=l[Nt],l.hasOwnProperty(Nt)&&E!==void 0&&!a.hasOwnProperty(Nt)&&ho(t,e,Nt,void 0,a,E);for(C in a)E=a[C],T=l[C],!a.hasOwnProperty(C)||E===T||E===void 0&&T===void 0||ho(t,e,C,E,a,T);return}}for(var y in l)E=l[y],l.hasOwnProperty(y)&&E!=null&&!a.hasOwnProperty(y)&&Bt(t,e,y,null,a,E);for(U in a)E=a[U],T=l[U],!a.hasOwnProperty(U)||E===T||E==null&&T==null||Bt(t,e,U,E,a,T)}var po=null,mo=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function U0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function bo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var go=null;function Sb(){var t=window.event;return t&&t.type==="popstate"?t===go?!1:(go=t,!0):(go=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,Eb=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(t){return j0.resolve(null).then(t).catch(Db)}:H0;function Db(t){setTimeout(function(){throw t})}function Gl(t){return t==="head"}function k0(t,e){var l=e,a=0,u=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var f=t.ownerDocument;if(l&1&&du(f.documentElement),l&2&&du(f.body),l&4)for(l=f.head,du(l),f=l.firstChild;f;){var s=f.nextSibling,h=f.nodeName;f[On]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=s}}if(u===0){t.removeChild(i),Au(e);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);Au(e)}function vo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vo(l),Sc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function wb(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[On])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ze(t.nextSibling),t===null)break}return null}function Ob(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ze(t.nextSibling),t===null))return null;return t}function yo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function zb(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ze(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Ao=null;function Q0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Y0(t,e,l){switch(e=_i(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function du(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Sc(t)}var Ye=new Map,G0=new Set;function Bi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var yl=G.d;G.d={f:Rb,r:Mb,D:Cb,C:_b,L:Bb,m:Nb,X:$b,S:Ub,M:Hb};function Rb(){var t=yl.f(),e=Ti();return t||e}function Mb(t){var e=Ra(t);e!==null&&e.tag===5&&e.type==="form"?rd(e):yl.r(t)}var fn=typeof document>"u"?null:document;function L0(t,e,l){var a=fn;if(a&&typeof e=="string"&&e){var u=Ne(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),G0.has(u)||(G0.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),se(e,"link",t),ae(e),a.head.appendChild(e)))}}function Cb(t){yl.D(t),L0("dns-prefetch",t,null)}function _b(t,e){yl.C(t,e),L0("preconnect",t,e)}function Bb(t,e,l){yl.L(t,e,l);var a=fn;if(a&&t&&e){var u='link[rel="preload"][as="'+Ne(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Ne(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Ne(l.imageSizes)+'"]')):u+='[href="'+Ne(t)+'"]';var i=u;switch(e){case"style":i=sn(t);break;case"script":i=dn(t)}Ye.has(i)||(t=O({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ye.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(hu(i))||e==="script"&&a.querySelector(pu(i))||(e=a.createElement("link"),se(e,"link",t),ae(e),a.head.appendChild(e)))}}function Nb(t,e){yl.m(t,e);var l=fn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Ne(a)+'"][href="'+Ne(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=dn(t)}if(!Ye.has(i)&&(t=O({rel:"modulepreload",href:t},e),Ye.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(pu(i)))return}a=l.createElement("link"),se(a,"link",t),ae(a),l.head.appendChild(a)}}}function Ub(t,e,l){yl.S(t,e,l);var a=fn;if(a&&t){var u=Ma(a).hoistableStyles,i=sn(t);e=e||"default";var f=u.get(i);if(!f){var s={loading:0,preload:null};if(f=a.querySelector(hu(i)))s.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ye.get(i))&&xo(t,l);var h=f=a.createElement("link");ae(h),se(h,"link",t),h._p=new Promise(function(S,C){h.onload=S,h.onerror=C}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ni(f,e,a)}f={type:"stylesheet",instance:f,count:1,state:s},u.set(i,f)}}}function $b(t,e){yl.X(t,e);var l=fn;if(l&&t){var a=Ma(l).hoistableScripts,u=dn(t),i=a.get(u);i||(i=l.querySelector(pu(u)),i||(t=O({src:t,async:!0},e),(e=Ye.get(u))&&So(t,e),i=l.createElement("script"),ae(i),se(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Hb(t,e){yl.M(t,e);var l=fn;if(l&&t){var a=Ma(l).hoistableScripts,u=dn(t),i=a.get(u);i||(i=l.querySelector(pu(u)),i||(t=O({src:t,async:!0,type:"module"},e),(e=Ye.get(u))&&So(t,e),i=l.createElement("script"),ae(i),se(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function q0(t,e,l,a){var u=(u=Z.current)?Bi(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=sn(l.href),l=Ma(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=sn(l.href);var i=Ma(u).hoistableStyles,f=i.get(t);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,f),(i=u.querySelector(hu(t)))&&!i._p&&(f.instance=i,f.state.loading=5),Ye.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ye.set(t,l),i||jb(u,t,l,f.state))),e&&a===null)throw Error(r(528,""));return f}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=dn(l),l=Ma(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function sn(t){return'href="'+Ne(t)+'"'}function hu(t){return'link[rel="stylesheet"]['+t+"]"}function X0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function jb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),se(e,"link",l),ae(e),t.head.appendChild(e))}function dn(t){return'[src="'+Ne(t)+'"]'}function pu(t){return"script[async]"+t}function Z0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ne(l.href)+'"]');if(a)return e.instance=a,ae(a),a;var u=O({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ae(a),se(a,"style",u),Ni(a,l.precedence,t),e.instance=a;case"stylesheet":u=sn(l.href);var i=t.querySelector(hu(u));if(i)return e.state.loading|=4,e.instance=i,ae(i),i;a=X0(l),(u=Ye.get(u))&&xo(a,u),i=(t.ownerDocument||t).createElement("link"),ae(i);var f=i;return f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),se(i,"link",a),e.state.loading|=4,Ni(i,l.precedence,t),e.instance=i;case"script":return i=dn(l.src),(u=t.querySelector(pu(i)))?(e.instance=u,ae(u),u):(a=l,(u=Ye.get(i))&&(a=O({},l),So(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ae(u),se(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ni(a,l.precedence,t));return e.instance}function Ni(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,f=0;f<a.length;f++){var s=a[f];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function xo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function So(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ui=null;function V0(t,e,l){if(Ui===null){var a=new Map,u=Ui=new Map;u.set(l,a)}else u=Ui,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[On]||i[he]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(e)||"";f=t+f;var s=a.get(f);s?s.push(i):a.set(f,[i])}}return a}function K0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function kb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function J0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var mu=null;function Qb(){}function Yb(t,e,l){if(mu===null)throw Error(r(475));var a=mu;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=sn(l.href),i=t.querySelector(hu(u));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=$i.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,ae(i);return}i=t.ownerDocument||t,l=X0(l),(u=Ye.get(u))&&xo(l,u),i=i.createElement("link"),ae(i);var f=i;f._p=new Promise(function(s,h){f.onload=s,f.onerror=h}),se(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=$i.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Gb(){if(mu===null)throw Error(r(475));var t=mu;return t.stylesheets&&t.count===0&&Eo(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Eo(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function $i(){if(this.count--,this.count===0){if(this.stylesheets)Eo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hi=null;function Eo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hi=new Map,e.forEach(Lb,t),Hi=null,$i.call(t))}function Lb(t,e){if(!(e.state.loading&4)){var l=Hi.get(t);if(l)var a=l.get(null);else{l=new Map,Hi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var f=u[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),a=f)}a&&l.set(null,a)}u=e.instance,f=u.getAttribute("data-precedence"),i=l.get(f)||a,i===a&&l.set(null,u),l.set(f,u),this.count++,a=$i.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var bu={$$typeof:Y,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function qb(t,e,l,a,u,i,f,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.hiddenUpdates=vc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function W0(t,e,l,a,u,i,f,s,h,S,C,U){return t=new qb(t,e,l,f,s,h,S,U),e=1,i===!0&&(e|=24),i=we(3,null,null,e),t.current=i,i.stateNode=t,e=ar(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},cr(i),t}function F0(t){return t?(t=Ga,t):Ga}function I0(t,e,l,a,u,i){u=F0(u),a.context===null?a.context=u:a.pendingContext=u,a=Rl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ml(t,a,e),l!==null&&(Ce(l,t,e),Zn(l,t,e))}function P0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function To(t,e){P0(t,e),(t=t.alternate)&&P0(t,e)}function th(t){if(t.tag===13){var e=Ya(t,67108864);e!==null&&Ce(e,t,67108864),To(t,67108864)}}var ji=!0;function Xb(t,e,l,a){var u=R.T;R.T=null;var i=G.p;try{G.p=2,Do(t,e,l,a)}finally{G.p=i,R.T=u}}function Zb(t,e,l,a){var u=R.T;R.T=null;var i=G.p;try{G.p=8,Do(t,e,l,a)}finally{G.p=i,R.T=u}}function Do(t,e,l,a){if(ji){var u=wo(a);if(u===null)so(t,e,a,ki,l),lh(t,a);else if(Kb(u,t,e,l,a))a.stopPropagation();else if(lh(t,a),e&4&&-1<Vb.indexOf(t)){for(;u!==null;){var i=Ra(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=Pl(i.pendingLanes);if(f!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;f;){var h=1<<31-Te(f);s.entanglements[1]|=h,f&=~h}tl(i),(Rt&6)===0&&(Si=Ft()+500,ou(0))}}break;case 13:s=Ya(i,2),s!==null&&Ce(s,i,2),Ti(),To(i,2)}if(i=wo(a),i===null&&so(t,e,a,ki,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else so(t,e,a,null,l)}}function wo(t){return t=Mc(t),Oo(t)}var ki=null;function Oo(t){if(ki=null,t=za(t),t!==null){var e=m(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=v(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ki=t,null}function eh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nl()){case Le:return 2;case wa:return 8;case El:case Il:return 32;case En:return 268435456;default:return 32}default:return 32}}var zo=!1,Ll=null,ql=null,Xl=null,gu=new Map,vu=new Map,Zl=[],Vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lh(t,e){switch(t){case"focusin":case"focusout":Ll=null;break;case"dragenter":case"dragleave":ql=null;break;case"mouseover":case"mouseout":Xl=null;break;case"pointerover":case"pointerout":gu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(e.pointerId)}}function yu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=Ra(e),e!==null&&th(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Kb(t,e,l,a,u){switch(e){case"focusin":return Ll=yu(Ll,t,e,l,a,u),!0;case"dragenter":return ql=yu(ql,t,e,l,a,u),!0;case"mouseover":return Xl=yu(Xl,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return gu.set(i,yu(gu.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,vu.set(i,yu(vu.get(i)||null,t,e,l,a,u)),!0}return!1}function ah(t){var e=za(t.target);if(e!==null){var l=m(e);if(l!==null){if(e=l.tag,e===13){if(e=v(l),e!==null){t.blockedOn=e,Yp(t.priority,function(){if(l.tag===13){var a=Me();a=yc(a);var u=Ya(l,a);u!==null&&Ce(u,l,a),To(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=wo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Rc=a,l.target.dispatchEvent(a),Rc=null}else return e=Ra(l),e!==null&&th(e),t.blockedOn=l,!1;e.shift()}return!0}function nh(t,e,l){Qi(t)&&l.delete(e)}function Jb(){zo=!1,Ll!==null&&Qi(Ll)&&(Ll=null),ql!==null&&Qi(ql)&&(ql=null),Xl!==null&&Qi(Xl)&&(Xl=null),gu.forEach(nh),vu.forEach(nh)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,zo||(zo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Jb)))}var Gi=null;function uh(t){Gi!==t&&(Gi=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Gi===t&&(Gi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(Oo(a||l)===null)continue;break}var i=Ra(l);i!==null&&(t.splice(e,3),e-=3,wr(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function Au(t){function e(h){return Yi(h,t)}Ll!==null&&Yi(Ll,t),ql!==null&&Yi(ql,t),Xl!==null&&Yi(Xl,t),gu.forEach(e),vu.forEach(e);for(var l=0;l<Zl.length;l++){var a=Zl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Zl.length&&(l=Zl[0],l.blockedOn===null);)ah(l),l.blockedOn===null&&Zl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],f=u[ve]||null;if(typeof i=="function")f||uh(l);else if(f){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,f=i[ve]||null)s=f.formAction;else if(Oo(u)!==null)continue}else s=f.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),uh(l)}}}function Ro(t){this._internalRoot=t}Li.prototype.render=Ro.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=Me();I0(l,a,t,e,null,null)},Li.prototype.unmount=Ro.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;I0(t.current,2,null,t,null,null),Ti(),e[Oa]=null}};function Li(t){this._internalRoot=t}Li.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Zl.length&&e!==0&&e<Zl[l].priority;l++);Zl.splice(l,0,t),l===0&&ah(t)}};var ih=c.version;if(ih!=="19.1.0")throw Error(r(527,ih,"19.1.0"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=A(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Wb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Tn=qi.inject(Wb),Ee=qi}catch{}}return Su.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=Sd,i=Ed,f=Td,s=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=W0(t,1,!1,null,null,l,a,u,i,f,s,null),t[Oa]=e.current,fo(t),new Ro(e)},Su.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=Sd,f=Ed,s=Td,h=null,S=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(S=l.formState)),e=W0(t,1,!0,e,l??null,a,u,i,f,s,h,S),e.context=F0(null),l=e.current,a=Me(),a=yc(a),u=Rl(a),u.callback=null,Ml(l,u,a),l=a,e.current.lanes=l,wn(e,l),tl(e),t[Oa]=e.current,fo(t),new Li(e)},Su.version="19.1.0",Su}var bh;function ug(){if(bh)return _o.exports;bh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),_o.exports=ng(),_o.exports}var ig=ug(),re=function(){return re=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(c[m]=o[m])}return c},re.apply(this,arguments)};function zu(n,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,m;r<d;r++)(m||!(r in c))&&(m||(m=Array.prototype.slice.call(c,0,r)),m[r]=c[r]);return n.concat(m||Array.prototype.slice.call(c))}var kt="-ms-",Tu="-moz-",zt="-webkit-",qh="comm",fc="rule",af="decl",cg="@import",Xh="@keyframes",rg="@layer",Zh=Math.abs,nf=String.fromCharCode,Go=Object.assign;function og(n,c){return ce(n,0)^45?(((c<<2^ce(n,0))<<2^ce(n,1))<<2^ce(n,2))<<2^ce(n,3):0}function Vh(n){return n.trim()}function xl(n,c){return(n=c.exec(n))?n[0]:n}function bt(n,c,o){return n.replace(c,o)}function Wi(n,c,o){return n.indexOf(c,o)}function ce(n,c){return n.charCodeAt(c)|0}function gn(n,c,o){return n.slice(c,o)}function el(n){return n.length}function Kh(n){return n.length}function Eu(n,c){return c.push(n),n}function fg(n,c){return n.map(c).join("")}function gh(n,c){return n.filter(function(o){return!xl(o,c)})}var sc=1,vn=1,Jh=0,Ge=0,te=0,Sn="";function dc(n,c,o,r,d,m,v,D){return{value:n,root:c,parent:o,type:r,props:d,children:m,line:sc,column:vn,length:v,return:"",siblings:D}}function Kl(n,c){return Go(dc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function hn(n){for(;n.root;)n=Kl(n.root,{children:[n]});Eu(n,n.siblings)}function sg(){return te}function dg(){return te=Ge>0?ce(Sn,--Ge):0,vn--,te===10&&(vn=1,sc--),te}function Ve(){return te=Ge<Jh?ce(Sn,Ge++):0,vn++,te===10&&(vn=1,sc++),te}function xa(){return ce(Sn,Ge)}function Fi(){return Ge}function hc(n,c){return gn(Sn,n,c)}function Lo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hg(n){return sc=vn=1,Jh=el(Sn=n),Ge=0,[]}function pg(n){return Sn="",n}function $o(n){return Vh(hc(Ge-1,qo(n===91?n+2:n===40?n+1:n)))}function mg(n){for(;(te=xa())&&te<33;)Ve();return Lo(n)>2||Lo(te)>3?"":" "}function bg(n,c){for(;--c&&Ve()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return hc(n,Fi()+(c<6&&xa()==32&&Ve()==32))}function qo(n){for(;Ve();)switch(te){case n:return Ge;case 34:case 39:n!==34&&n!==39&&qo(te);break;case 40:n===41&&qo(n);break;case 92:Ve();break}return Ge}function gg(n,c){for(;Ve()&&n+te!==57;)if(n+te===84&&xa()===47)break;return"/*"+hc(c,Ge-1)+"*"+nf(n===47?n:Ve())}function vg(n){for(;!Lo(xa());)Ve();return hc(n,Ge)}function yg(n){return pg(Ii("",null,null,null,[""],n=hg(n),0,[0],n))}function Ii(n,c,o,r,d,m,v,D,A){for(var b=0,O=0,z=v,$=0,V=0,W=0,et=1,I=1,J=1,X=0,Y="",lt=d,L=m,F=r,P=Y;I;)switch(W=X,X=Ve()){case 40:if(W!=108&&ce(P,z-1)==58){Wi(P+=bt($o(X),"&","&\f"),"&\f",Zh(b?D[b-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:P+=$o(X);break;case 9:case 10:case 13:case 32:P+=mg(W);break;case 92:P+=bg(Fi()-1,7);continue;case 47:switch(xa()){case 42:case 47:Eu(Ag(gg(Ve(),Fi()),c,o,A),A);break;default:P+="/"}break;case 123*et:D[b++]=el(P)*J;case 125*et:case 59:case 0:switch(X){case 0:case 125:I=0;case 59+O:J==-1&&(P=bt(P,/\f/g,"")),V>0&&el(P)-z&&Eu(V>32?yh(P+";",r,o,z-1,A):yh(bt(P," ","")+";",r,o,z-2,A),A);break;case 59:P+=";";default:if(Eu(F=vh(P,c,o,b,O,d,D,Y,lt=[],L=[],z,m),m),X===123)if(O===0)Ii(P,c,F,F,lt,m,z,D,L);else switch($===99&&ce(P,3)===110?100:$){case 100:case 108:case 109:case 115:Ii(n,F,F,r&&Eu(vh(n,F,F,0,0,d,D,Y,d,lt=[],z,L),L),d,L,z,D,r?lt:L);break;default:Ii(P,F,F,F,[""],L,0,D,L)}}b=O=V=0,et=J=1,Y=P="",z=v;break;case 58:z=1+el(P),V=W;default:if(et<1){if(X==123)--et;else if(X==125&&et++==0&&dg()==125)continue}switch(P+=nf(X),X*et){case 38:J=O>0?1:(P+="\f",-1);break;case 44:D[b++]=(el(P)-1)*J,J=1;break;case 64:xa()===45&&(P+=$o(Ve())),$=xa(),O=z=el(Y=P+=vg(Fi())),X++;break;case 45:W===45&&el(P)==2&&(et=0)}}return m}function vh(n,c,o,r,d,m,v,D,A,b,O,z){for(var $=d-1,V=d===0?m:[""],W=Kh(V),et=0,I=0,J=0;et<r;++et)for(var X=0,Y=gn(n,$+1,$=Zh(I=v[et])),lt=n;X<W;++X)(lt=Vh(I>0?V[X]+" "+Y:bt(Y,/&\f/g,V[X])))&&(A[J++]=lt);return dc(n,c,o,d===0?fc:D,A,b,O,z)}function Ag(n,c,o,r){return dc(n,c,o,qh,nf(sg()),gn(n,2,-2),0,r)}function yh(n,c,o,r,d){return dc(n,c,o,af,gn(n,0,r),gn(n,r+1,-1),r,d)}function Wh(n,c,o){switch(og(n,c)){case 5103:return zt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return zt+n+n;case 4789:return Tu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return zt+n+Tu+n+kt+n+n;case 5936:switch(ce(n,c+11)){case 114:return zt+n+kt+bt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return zt+n+kt+bt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return zt+n+kt+bt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return zt+n+kt+n+n;case 6165:return zt+n+kt+"flex-"+n+n;case 5187:return zt+n+bt(n,/(\w+).+(:[^]+)/,zt+"box-$1$2"+kt+"flex-$1$2")+n;case 5443:return zt+n+kt+"flex-item-"+bt(n,/flex-|-self/g,"")+(xl(n,/flex-|baseline/)?"":kt+"grid-row-"+bt(n,/flex-|-self/g,""))+n;case 4675:return zt+n+kt+"flex-line-pack"+bt(n,/align-content|flex-|-self/g,"")+n;case 5548:return zt+n+kt+bt(n,"shrink","negative")+n;case 5292:return zt+n+kt+bt(n,"basis","preferred-size")+n;case 6060:return zt+"box-"+bt(n,"-grow","")+zt+n+kt+bt(n,"grow","positive")+n;case 4554:return zt+bt(n,/([^-])(transform)/g,"$1"+zt+"$2")+n;case 6187:return bt(bt(bt(n,/(zoom-|grab)/,zt+"$1"),/(image-set)/,zt+"$1"),n,"")+n;case 5495:case 3959:return bt(n,/(image-set\([^]*)/,zt+"$1$`$1");case 4968:return bt(bt(n,/(.+:)(flex-)?(.*)/,zt+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+zt+n+n;case 4200:if(!xl(n,/flex-|baseline/))return kt+"grid-column-align"+gn(n,c)+n;break;case 2592:case 3360:return kt+bt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,xl(r.props,/grid-\w+-end/)})?~Wi(n+(o=o[c].value),"span",0)?n:kt+bt(n,"-start","")+n+kt+"grid-row-span:"+(~Wi(o,"span",0)?xl(o,/\d+/):+xl(o,/\d+/)-+xl(n,/\d+/))+";":kt+bt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(r){return xl(r.props,/grid-\w+-start/)})?n:kt+bt(bt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return bt(n,/(.+)-inline(.+)/,zt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(el(n)-1-c>6)switch(ce(n,c+1)){case 109:if(ce(n,c+4)!==45)break;case 102:return bt(n,/(.+:)(.+)-([^]+)/,"$1"+zt+"$2-$3$1"+Tu+(ce(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~Wi(n,"stretch",0)?Wh(bt(n,"stretch","fill-available"),c,o)+n:n}break;case 5152:case 5920:return bt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,m,v,D,A,b){return kt+d+":"+m+b+(v?kt+d+"-span:"+(D?A:+A-+m)+b:"")+n});case 4949:if(ce(n,c+6)===121)return bt(n,":",":"+zt)+n;break;case 6444:switch(ce(n,ce(n,14)===45?18:11)){case 120:return bt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+zt+(ce(n,14)===45?"inline-":"")+"box$3$1"+zt+"$2$3$1"+kt+"$2box$3")+n;case 100:return bt(n,":",":"+kt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(n,"scroll-","scroll-snap-")+n}return n}function ac(n,c){for(var o="",r=0;r<n.length;r++)o+=c(n[r],r,n,c)||"";return o}function xg(n,c,o,r){switch(n.type){case rg:if(n.children.length)break;case cg:case af:return n.return=n.return||n.value;case qh:return"";case Xh:return n.return=n.value+"{"+ac(n.children,r)+"}";case fc:if(!el(n.value=n.props.join(",")))return""}return el(o=ac(n.children,r))?n.return=n.value+"{"+o+"}":""}function Sg(n){var c=Kh(n);return function(o,r,d,m){for(var v="",D=0;D<c;D++)v+=n[D](o,r,d,m)||"";return v}}function Eg(n){return function(c){c.root||(c=c.return)&&n(c)}}function Tg(n,c,o,r){if(n.length>-1&&!n.return)switch(n.type){case af:n.return=Wh(n.value,n.length,o);return;case Xh:return ac([Kl(n,{value:bt(n.value,"@","@"+zt)})],r);case fc:if(n.length)return fg(o=n.props,function(d){switch(xl(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hn(Kl(n,{props:[bt(d,/:(read-\w+)/,":"+Tu+"$1")]})),hn(Kl(n,{props:[d]})),Go(n,{props:gh(o,r)});break;case"::placeholder":hn(Kl(n,{props:[bt(d,/:(plac\w+)/,":"+zt+"input-$1")]})),hn(Kl(n,{props:[bt(d,/:(plac\w+)/,":"+Tu+"$1")]})),hn(Kl(n,{props:[bt(d,/:(plac\w+)/,kt+"input-$1")]})),hn(Kl(n,{props:[d]})),Go(n,{props:gh(o,r)});break}return""})}}var Dg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_e={},yn=typeof process<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",Fh="active",Ih="data-styled-version",pc="6.1.19",uf=`/*!sc*/
`,nc=typeof window<"u"&&typeof document<"u",wg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY),Og={},mc=Object.freeze([]),An=Object.freeze({});function Ph(n,c,o){return o===void 0&&(o=An),n.theme!==o.theme&&n.theme||c||o.theme}var tp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rg=/(^-|-$)/g;function Ah(n){return n.replace(zg,"-").replace(Rg,"")}var Mg=/(a)(d)/gi,Xi=52,xh=function(n){return String.fromCharCode(n+(n>25?39:97))};function Xo(n){var c,o="";for(c=Math.abs(n);c>Xi;c=c/Xi|0)o=xh(c%Xi)+o;return(xh(c%Xi)+o).replace(Mg,"$1-$2")}var Ho,ep=5381,mn=function(n,c){for(var o=c.length;o;)n=33*n^c.charCodeAt(--o);return n},lp=function(n){return mn(ep,n)};function ap(n){return Xo(lp(n)>>>0)}function Cg(n){return n.displayName||n.name||"Component"}function jo(n){return typeof n=="string"&&!0}var np=typeof Symbol=="function"&&Symbol.for,up=np?Symbol.for("react.memo"):60115,_g=np?Symbol.for("react.forward_ref"):60112,Bg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ng={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ip={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ug=((Ho={})[_g]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ho[up]=ip,Ho);function Sh(n){return("type"in(c=n)&&c.type.$$typeof)===up?ip:"$$typeof"in n?Ug[n.$$typeof]:Bg;var c}var $g=Object.defineProperty,Hg=Object.getOwnPropertyNames,Eh=Object.getOwnPropertySymbols,jg=Object.getOwnPropertyDescriptor,kg=Object.getPrototypeOf,Th=Object.prototype;function cp(n,c,o){if(typeof c!="string"){if(Th){var r=kg(c);r&&r!==Th&&cp(n,r,o)}var d=Hg(c);Eh&&(d=d.concat(Eh(c)));for(var m=Sh(n),v=Sh(c),D=0;D<d.length;++D){var A=d[D];if(!(A in Ng||o&&o[A]||v&&A in v||m&&A in m)){var b=jg(c,A);try{$g(n,A,b)}catch{}}}}return n}function Sa(n){return typeof n=="function"}function cf(n){return typeof n=="object"&&"styledComponentId"in n}function ya(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Zo(n,c){if(n.length===0)return"";for(var o=n[0],r=1;r<n.length;r++)o+=n[r];return o}function Ru(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Vo(n,c,o){if(o===void 0&&(o=!1),!o&&!Ru(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=Vo(n[r],c[r]);else if(Ru(c))for(var r in c)n[r]=Vo(n[r],c[r]);return n}function rf(n,c){Object.defineProperty(n,"toString",{value:c})}function Ea(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Qg=function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},n.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,m=d;c>=m;)if((m<<=1)<0)throw Ea(16,"".concat(c));this.groupSizes=new Uint32Array(m),this.groupSizes.set(r),this.length=m;for(var v=d;v<m;v++)this.groupSizes[v]=0}for(var D=this.indexOfGroup(c+1),A=(v=0,o.length);v<A;v++)this.tag.insertRule(D,o[v])&&(this.groupSizes[c]++,D++)},n.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var m=r;m<d;m++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),m=d+r,v=d;v<m;v++)o+="".concat(this.tag.getRule(v)).concat(uf);return o},n}(),Pi=new Map,uc=new Map,tc=1,Zi=function(n){if(Pi.has(n))return Pi.get(n);for(;uc.has(tc);)tc++;var c=tc++;return Pi.set(n,c),uc.set(c,n),c},Yg=function(n,c){tc=c+1,Pi.set(n,c),uc.set(c,n)},Gg="style[".concat(yn,"][").concat(Ih,'="').concat(pc,'"]'),Lg=new RegExp("^".concat(yn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qg=function(n,c,o){for(var r,d=o.split(","),m=0,v=d.length;m<v;m++)(r=d[m])&&n.registerName(c,r)},Xg=function(n,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(uf),d=[],m=0,v=r.length;m<v;m++){var D=r[m].trim();if(D){var A=D.match(Lg);if(A){var b=0|parseInt(A[1],10),O=A[2];b!==0&&(Yg(O,b),qg(n,O,A[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(D)}}},Dh=function(n){for(var c=document.querySelectorAll(Gg),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(yn)!==Fh&&(Xg(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Zg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rp=function(n){var c=document.head,o=n||c,r=document.createElement("style"),d=function(D){var A=Array.from(D.querySelectorAll("style[".concat(yn,"]")));return A[A.length-1]}(o),m=d!==void 0?d.nextSibling:null;r.setAttribute(yn,Fh),r.setAttribute(Ih,pc);var v=Zg();return v&&r.setAttribute("nonce",v),o.insertBefore(r,m),r},Vg=function(){function n(c){this.element=rp(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,m=r.length;d<m;d++){var v=r[d];if(v.ownerNode===o)return v}throw Ea(17)}(this.element),this.length=0}return n.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},n}(),Kg=function(){function n(c){this.element=rp(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n}(),Jg=function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n}(),wh=nc,Wg={isServer:!nc,useCSSOMInjection:!wg},ic=function(){function n(c,o,r){c===void 0&&(c=An),o===void 0&&(o={});var d=this;this.options=re(re({},Wg),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&nc&&wh&&(wh=!1,Dh(this)),rf(this,function(){return function(m){for(var v=m.getTag(),D=v.length,A="",b=function(z){var $=function(J){return uc.get(J)}(z);if($===void 0)return"continue";var V=m.names.get($),W=v.getGroup(z);if(V===void 0||!V.size||W.length===0)return"continue";var et="".concat(yn,".g").concat(z,'[id="').concat($,'"]'),I="";V!==void 0&&V.forEach(function(J){J.length>0&&(I+="".concat(J,","))}),A+="".concat(W).concat(et,'{content:"').concat(I,'"}').concat(uf)},O=0;O<D;O++)b(O);return A}(d)})}return n.registerId=function(c){return Zi(c)},n.prototype.rehydrate=function(){!this.server&&nc&&Dh(this)},n.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new n(re(re({},this.options),c),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new Jg(d):r?new Vg(d):new Kg(d)}(this.options),new Qg(c)));var c},n.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},n.prototype.registerName=function(c,o){if(Zi(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},n.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Zi(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Zi(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Fg=/&/g,Ig=/^\s*\/\/.*$/gm;function op(n,c){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=op(o.children,c)),o})}function Pg(n){var c,o,r,d=An,m=d.options,v=m===void 0?An:m,D=d.plugins,A=D===void 0?mc:D,b=function($,V,W){return W.startsWith(o)&&W.endsWith(o)&&W.replaceAll(o,"").length>0?".".concat(c):$},O=A.slice();O.push(function($){$.type===fc&&$.value.includes("&")&&($.props[0]=$.props[0].replace(Fg,o).replace(r,b))}),v.prefix&&O.push(Tg),O.push(xg);var z=function($,V,W,et){V===void 0&&(V=""),W===void 0&&(W=""),et===void 0&&(et="&"),c=et,o=V,r=new RegExp("\\".concat(o,"\\b"),"g");var I=$.replace(Ig,""),J=yg(W||V?"".concat(W," ").concat(V," { ").concat(I," }"):I);v.namespace&&(J=op(J,v.namespace));var X=[];return ac(J,Sg(O.concat(Eg(function(Y){return X.push(Y)})))),X};return z.hash=A.length?A.reduce(function($,V){return V.name||Ea(15),mn($,V.name)},ep).toString():"",z}var tv=new ic,Ko=Pg(),fp=w.createContext({shouldForwardProp:void 0,styleSheet:tv,stylis:Ko});fp.Consumer;w.createContext(void 0);function Jo(){return M.useContext(fp)}var ev=function(){function n(c,o){var r=this;this.inject=function(d,m){m===void 0&&(m=Ko);var v=r.name+m.hash;d.hasNameForId(r.id,v)||d.insertRules(r.id,v,m(r.rules,v,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,rf(this,function(){throw Ea(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Ko),this.name+c.hash},n}(),lv=function(n){return n>="A"&&n<="Z"};function Oh(n){for(var c="",o=0;o<n.length;o++){var r=n[o];if(o===1&&r==="-"&&n[0]==="-")return n;lv(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var sp=function(n){return n==null||n===!1||n===""},dp=function(n){var c,o,r=[];for(var d in n){var m=n[d];n.hasOwnProperty(d)&&!sp(m)&&(Array.isArray(m)&&m.isCss||Sa(m)?r.push("".concat(Oh(d),":"),m,";"):Ru(m)?r.push.apply(r,zu(zu(["".concat(d," {")],dp(m),!1),["}"],!1)):r.push("".concat(Oh(d),": ").concat((c=d,(o=m)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Dg||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Jl(n,c,o,r){if(sp(n))return[];if(cf(n))return[".".concat(n.styledComponentId)];if(Sa(n)){if(!Sa(m=n)||m.prototype&&m.prototype.isReactComponent||!c)return[n];var d=n(c);return Jl(d,c,o,r)}var m;return n instanceof ev?o?(n.inject(o,r),[n.getName(r)]):[n]:Ru(n)?dp(n):Array.isArray(n)?Array.prototype.concat.apply(mc,n.map(function(v){return Jl(v,c,o,r)})):[n.toString()]}function hp(n){for(var c=0;c<n.length;c+=1){var o=n[c];if(Sa(o)&&!cf(o))return!1}return!0}var av=lp(pc),nv=function(){function n(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hp(c),this.componentId=o,this.baseHash=mn(av,o),this.baseStyle=r,ic.registerId(o)}return n.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ya(d,this.staticRulesId);else{var m=Zo(Jl(this.rules,c,o,r)),v=Xo(mn(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,v)){var D=r(m,".".concat(v),void 0,this.componentId);o.insertRules(this.componentId,v,D)}d=ya(d,v),this.staticRulesId=v}else{for(var A=mn(this.baseHash,r.hash),b="",O=0;O<this.rules.length;O++){var z=this.rules[O];if(typeof z=="string")b+=z;else if(z){var $=Zo(Jl(z,c,o,r));A=mn(A,$+O),b+=$}}if(b){var V=Xo(A>>>0);o.hasNameForId(this.componentId,V)||o.insertRules(this.componentId,V,r(b,".".concat(V),void 0,this.componentId)),d=ya(d,V)}}return d},n}(),Mu=w.createContext(void 0);Mu.Consumer;function uv(n){var c=w.useContext(Mu),o=M.useMemo(function(){return function(r,d){if(!r)throw Ea(14);if(Sa(r)){var m=r(d);return m}if(Array.isArray(r)||typeof r!="object")throw Ea(8);return d?re(re({},d),r):r}(n.theme,c)},[n.theme,c]);return n.children?w.createElement(Mu.Provider,{value:o},n.children):null}var ko={};function iv(n,c,o){var r=cf(n),d=n,m=!jo(n),v=c.attrs,D=v===void 0?mc:v,A=c.componentId,b=A===void 0?function(lt,L){var F=typeof lt!="string"?"sc":Ah(lt);ko[F]=(ko[F]||0)+1;var P="".concat(F,"-").concat(ap(pc+F+ko[F]));return L?"".concat(L,"-").concat(P):P}(c.displayName,c.parentComponentId):A,O=c.displayName,z=O===void 0?function(lt){return jo(lt)?"styled.".concat(lt):"Styled(".concat(Cg(lt),")")}(n):O,$=c.displayName&&c.componentId?"".concat(Ah(c.displayName),"-").concat(c.componentId):c.componentId||b,V=r&&d.attrs?d.attrs.concat(D).filter(Boolean):D,W=c.shouldForwardProp;if(r&&d.shouldForwardProp){var et=d.shouldForwardProp;if(c.shouldForwardProp){var I=c.shouldForwardProp;W=function(lt,L){return et(lt,L)&&I(lt,L)}}else W=et}var J=new nv(o,$,r?d.componentStyle:void 0);function X(lt,L){return function(F,P,St){var Ot=F.attrs,Zt=F.componentStyle,Ut=F.defaultProps,mt=F.foldedComponentIds,Qt=F.styledComponentId,$t=F.target,vt=w.useContext(Mu),R=Jo(),G=F.shouldForwardProp||R.shouldForwardProp,q=Ph(P,vt,Ut)||An,it=function(at,Z,ot){for(var dt,j=re(re({},Z),{className:void 0,theme:ot}),st=0;st<at.length;st+=1){var ht=Sa(dt=at[st])?dt(j):dt;for(var Et in ht)j[Et]=Et==="className"?ya(j[Et],ht[Et]):Et==="style"?re(re({},j[Et]),ht[Et]):ht[Et]}return Z.className&&(j.className=ya(j.className,Z.className)),j}(Ot,P,q),p=it.as||$t,B={};for(var Q in it)it[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&it.theme===q||(Q==="forwardedAs"?B.as=it.forwardedAs:G&&!G(Q,p)||(B[Q]=it[Q]));var N=function(at,Z){var ot=Jo(),dt=at.generateAndInjectStyles(Z,ot.styleSheet,ot.stylis);return dt}(Zt,it),k=ya(mt,Qt);return N&&(k+=" "+N),it.className&&(k+=" "+it.className),B[jo(p)&&!tp.has(p)?"class":"className"]=k,St&&(B.ref=St),M.createElement(p,B)}(Y,lt,L)}X.displayName=z;var Y=w.forwardRef(X);return Y.attrs=V,Y.componentStyle=J,Y.displayName=z,Y.shouldForwardProp=W,Y.foldedComponentIds=r?ya(d.foldedComponentIds,d.styledComponentId):"",Y.styledComponentId=$,Y.target=r?d.target:n,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(lt){this._foldedDefaultProps=r?function(L){for(var F=[],P=1;P<arguments.length;P++)F[P-1]=arguments[P];for(var St=0,Ot=F;St<Ot.length;St++)Vo(L,Ot[St],!0);return L}({},d.defaultProps,lt):lt}}),rf(Y,function(){return".".concat(Y.styledComponentId)}),m&&cp(Y,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function zh(n,c){for(var o=[n[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],n[r+1]);return o}var Rh=function(n){return Object.assign(n,{isCss:!0})};function tt(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Sa(n)||Ru(n))return Rh(Jl(zh(mc,zu([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?Jl(r):Rh(Jl(zh(r,c)))}function Wo(n,c,o){if(o===void 0&&(o=An),!c)throw Ea(1,c);var r=function(d){for(var m=[],v=1;v<arguments.length;v++)m[v-1]=arguments[v];return n(c,o,tt.apply(void 0,zu([d],m,!1)))};return r.attrs=function(d){return Wo(n,c,re(re({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return Wo(n,c,re(re({},o),d))},r}var pp=function(n){return Wo(iv,n)},H=pp;tp.forEach(function(n){H[n]=pp(n)});var cv=function(){function n(c,o){this.rules=c,this.componentId=o,this.isStatic=hp(c),ic.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,o,r,d){var m=d(Zo(Jl(this.rules,o,r,d)),""),v=this.componentId+c;r.insertRules(v,v,m)},n.prototype.removeStyles=function(c,o){o.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,o,r,d){c>2&&ic.registerId(this.componentId+c),this.removeStyles(c,r),this.createStyles(c,o,r,d)},n}();function rv(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var r=tt.apply(void 0,zu([n],c,!1)),d="sc-global-".concat(ap(JSON.stringify(r))),m=new cv(r,d),v=function(A){var b=Jo(),O=w.useContext(Mu),z=w.useRef(b.styleSheet.allocateGSInstance(d)).current;return b.styleSheet.server&&D(z,A,b.styleSheet,O,b.stylis),w.useLayoutEffect(function(){if(!b.styleSheet.server)return D(z,A,b.styleSheet,O,b.stylis),function(){return m.removeStyles(z,b.styleSheet)}},[z,A,b.styleSheet,O,b.stylis]),null};function D(A,b,O,z,$){if(m.isStatic)m.renderStyles(A,Og,O,$);else{var V=re(re({},b),{theme:Ph(b,z,v.defaultProps)});m.renderStyles(A,V,O,$)}}return w.memo(v)}var ov=`
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

`;const of="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",ff="inset 2px 2px 3px rgba(0,0,0,0.2)",Ke=()=>tt`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Je=({background:n="material",color:c="materialText"}={})=>tt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[c]};
`,Cu=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:o=2})=>tt`
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
`,Ta=()=>tt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,pn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},fv=({theme:n,topLeftInner:c,bottomRightInner:o,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?of:!1,d?ff:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),Xt=({invert:n=!1,style:c="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return tt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[pn[c][o.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[pn[c][o.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[pn[c][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[pn[c][o.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>fv({theme:r,topLeftInner:pn[c][o.topLeftInner],bottomRightInner:pn[c][o.bottomRightInner],hasShadow:d})};
  `},xn=()=>tt`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,sv=n=>Buffer.from(n).toString("base64"),dv=typeof btoa<"u"?btoa:sv,Vi=(n,c=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${dv(o)})`},sf=(n="default")=>tt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>Cu({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Je()}
    ${n==="flat"?Ta():Xt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${Je()}
    ${n==="flat"?Ta():Xt({style:"window"})}
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
    background-image: ${({theme:c})=>Vi(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>Vi(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>Vi(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>Vi(c.materialText,0)};
  }
`,hv=H.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,pv=M.forwardRef(({children:n,underline:c=!0,...o},r)=>w.createElement(hv,{ref:r,underline:c,...o},n));pv.displayName="Anchor";const mv=H.header`
  ${Xt()};
  ${Je()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,mp=M.forwardRef(({children:n,fixed:c=!0,position:o="fixed",...r},d)=>w.createElement(mv,{fixed:c,position:c!==!1?o:void 0,ref:d,...r},n));mp.displayName="AppBar";const Da=()=>{};function Aa(n,c,o){return o!==null&&n>o?o:c!==null&&n<c?c:n}function bv(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),r=o[0].split(".")[1];return(r?r.length:0)+parseInt(o[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function Mh(n,c,o){const r=Math.round((n-o)/c)*c+o;return Number(r.toFixed(bv(c)))}function Wl(n){return typeof n=="number"?`${n}px`:n}const gv=H.div`
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
`,vv=H.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,yv=M.forwardRef(({alt:n="",children:c,noBorder:o=!1,size:r=35,square:d=!1,src:m,...v},D)=>w.createElement(gv,{noBorder:o,ref:D,size:Wl(r),square:d,src:m,...v},m?w.createElement(vv,{src:m,alt:n}):c));yv.displayName="Avatar";const de={sm:"28px",md:"36px",lg:"44px"},Av=tt`
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
`,bc=H.button`
  ${({active:n,disabled:c,primary:o,theme:r,variant:d})=>d==="flat"?tt`
          ${Ta()}
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
            ${!n&&!c&&xn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?tt`
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
        `:tt`
          ${Je()};
          border: none;
          ${c&&Ke()}
          ${n?Cu({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?tt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:tt`
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
            ${!n&&!c&&xn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Av}
`,Sl=M.forwardRef(({onClick:n,disabled:c=!1,children:o,type:r="button",fullWidth:d=!1,size:m="md",square:v=!1,active:D=!1,onTouchStart:A=Da,primary:b=!1,variant:O="default",...z},$)=>w.createElement(bc,{active:D,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:A,primary:b,ref:$,size:m,square:v,type:r,variant:O,...z},o));Sl.displayName="Button";function Fl({defaultValue:n,onChange:c,onChangePropName:o="onChange",readOnly:r,value:d,valuePropName:m="value"}){const v=d!==void 0,[D,A]=M.useState(n),b=M.useCallback(O=>{v||A(O)},[v]);if(v&&typeof c!="function"&&!r){const O=`Warning: You provided a \`${m}\` prop to a component without an \`${o}\` handler.${m==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${m}\`.`}`;console.warn(O)}return[v?d:D,b]}const Fo=H.li`
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
`,ec=M.forwardRef(({size:n="lg",disabled:c,square:o,children:r,onClick:d,primary:m,...v},D)=>w.createElement(Fo,{$disabled:c,size:n,square:o,onClick:c?void 0:d,primary:m,role:"menuitem",ref:D,"aria-disabled":c,...v},r));ec.displayName="MenuListItem";const bp=H.ul.attrs(()=>({role:"menu"}))`
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
`;bp.displayName="MenuList";const ll=20,cc=H.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ll}px;
  height: ${ll}px;
  opacity: 0;
  z-index: -1;
`,df=H.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&Ke()}

  ${Fo} & {
    margin: 0;
    height: 100%;
  }
  ${Fo}:hover & {
    ${({$disabled:n,theme:c})=>!n&&tt`
        color: ${c.materialTextInvert};
      `};
  }
`,hf=H.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${cc}:focus ~ & {
    ${xn}
  }
  ${cc}:not(:disabled) ~ &:active {
    ${xn}
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
    ${n=>n.shadow&&`box-shadow:${ff};`}
  }
`,xv=H.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${sf()}
`,rc=M.forwardRef(({children:n,shadow:c=!0,...o},r)=>w.createElement(al,{ref:r,shadow:c,...o},w.createElement(xv,null,n)));rc.displayName="ScrollView";const gp=tt`
  width: ${ll}px;
  height: ${ll}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Sv=H(al)`
  ${gp}
  width: ${ll}px;
  height: ${ll}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,Ev=H.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${gp}
  width: ${ll-4}px;
  height: ${ll-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,Tv=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Dv=H.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>Cu({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,wv={flat:Ev,default:Sv},Ov=M.forwardRef(({checked:n,className:c="",defaultChecked:o=!1,disabled:r=!1,indeterminate:d=!1,label:m="",onChange:v=Da,style:D={},value:A,variant:b="default",...O},z)=>{var $;const[V,W]=Fl({defaultValue:o,onChange:v,readOnly:($=O.readOnly)!==null&&$!==void 0?$:r,value:n}),et=M.useCallback(X=>{const Y=X.target.checked;W(Y),v(X)},[v,W]),I=wv[b];let J=null;return d?J=Dv:V&&(J=Tv),w.createElement(df,{$disabled:r,className:c,style:D},w.createElement(cc,{disabled:r,onChange:r?void 0:et,readOnly:r,type:"checkbox",value:A,checked:V,"data-indeterminate":d,ref:z,...O}),w.createElement(I,{$disabled:r,role:"presentation"},J&&w.createElement(J,{$disabled:r,variant:b})),m&&w.createElement(hf,null,m))});Ov.displayName="Checkbox";const Du=H.div`
  ${({orientation:n,theme:c,size:o="100%"})=>n==="vertical"?`
    height: ${Wl(o)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${Wl(o)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;Du.displayName="Separator";const zv=H(bc)`
  padding-left: 8px;
`,Rv=H(Du)`
  height: 21px;
  position: relative;
  top: 0;
`,vp=H.input`
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
`,Mv=H.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?tt`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:tt`
          border: 2px solid ${({theme:c})=>c.materialText};
        `}
  ${vp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${xn}
    outline-offset: -8px;
  }
`,Cv=H.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?tt`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:tt`
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
`,_v=M.forwardRef(({value:n,defaultValue:c,onChange:o=Da,disabled:r=!1,variant:d="default",...m},v)=>{var D;const[A,b]=Fl({defaultValue:c,onChange:o,readOnly:(D=m.readOnly)!==null&&D!==void 0?D:r,value:n}),O=z=>{const $=z.target.value;b($),o(z)};return w.createElement(zv,{disabled:r,as:"div",variant:d,size:"md"},w.createElement(vp,{onChange:O,readOnly:r,disabled:r,value:A??"#008080",type:"color",ref:v,...m}),w.createElement(Mv,{$disabled:r,color:A??"#008080",role:"presentation"}),d==="default"&&w.createElement(Rv,{orientation:"vertical"}),w.createElement(Cv,{$disabled:r,variant:d}))});_v.displayName="ColorInput";const Bv=H.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>tt`
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
      ${Cu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,Ch=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Nv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Uv({digit:n=0,pixelSize:c=2,...o}){const r=Nv[Number(n)].map((d,m)=>d?`${Ch[m]} active`:Ch[m]);return w.createElement(Bv,{pixelSize:c,...o},r.map((d,m)=>w.createElement("span",{className:d,key:m})))}const $v=H.div`
  ${Xt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Hv={sm:1,md:2,lg:3,xl:4},jv=M.forwardRef(({value:n=0,minLength:c=3,size:o="md",...r},d)=>{const m=M.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return w.createElement($v,{ref:d,...r},m.map((v,D)=>w.createElement(Uv,{digit:v,pixelSize:Hv[o],key:D})))});jv.displayName="Counter";const yp=tt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${de.md};
`,kv=H(al).attrs({"data-testid":"variant-default"})`
  ${yp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,Qv=H.div.attrs({"data-testid":"variant-flat"})`
  ${Ta()}
  ${yp}
  position: relative;
`,Ap=tt`
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
`,Yv=H.input`
  ${Ap}
  padding: 0 8px;
`,Gv=H.textarea`
  ${Ap}
  padding: 8px;
  resize: none;
  ${({variant:n})=>sf(n)}
`,pf=M.forwardRef(({className:n,disabled:c=!1,fullWidth:o,onChange:r=Da,shadow:d=!0,style:m,variant:v="default",...D},A)=>{const b=v==="flat"?Qv:kv,O=M.useMemo(()=>{var z;return D.multiline?w.createElement(Gv,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,variant:v,...D}):w.createElement(Yv,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,type:(z=D.type)!==null&&z!==void 0?z:"text",variant:v,...D})},[c,r,D,A,v]);return w.createElement(b,{className:n,fullWidth:o,$disabled:c,shadow:d,style:m},O)});pf.displayName="TextInput";const Lv=H.div`
  display: inline-flex;
  align-items: center;
`,Io=H(Sl)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?tt`
          height: calc(50% - 1px);
        `:tt`
          height: 50%;
        `}
`,qv=H.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?tt`
          height: calc(${de.md} - 4px);
        `:tt`
          height: ${de.md};
          margin-left: 2px;
        `}
`,_h=H.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?tt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:tt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${Io}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?tt`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:tt`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,xp=M.forwardRef(({className:n,defaultValue:c,disabled:o=!1,max:r,min:d,onChange:m,readOnly:v,step:D=1,style:A,value:b,variant:O="default",width:z,...$},V)=>{const[W,et]=Fl({defaultValue:c,onChange:m,readOnly:v,value:b}),I=M.useCallback(F=>{const P=parseFloat(F.target.value);et(P)},[et]),J=M.useCallback(F=>{const P=Aa(parseFloat(((W??0)+F).toFixed(2)),d??null,r??null);et(P),m==null||m(P)},[r,d,m,et,W]),X=M.useCallback(()=>{W!==void 0&&(m==null||m(W))},[m,W]),Y=M.useCallback(()=>{J(D)},[J,D]),lt=M.useCallback(()=>{J(-D)},[J,D]),L=O==="flat"?"flat":"raised";return w.createElement(Lv,{className:n,style:{...A,width:z!==void 0?Wl(z):"auto"},...$},w.createElement(pf,{value:W,variant:O,onChange:I,disabled:o,type:"number",readOnly:v,ref:V,fullWidth:!0,onBlur:X}),w.createElement(qv,{variant:O},w.createElement(Io,{"data-testid":"increment",variant:L,disabled:o||v,onClick:Y},w.createElement(_h,{invert:!0})),w.createElement(Io,{"data-testid":"decrement",variant:L,disabled:o||v,onClick:lt},w.createElement(_h,null))))});xp.displayName="NumberInput";function Xv(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let o=0;o<10;o+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const Sp=n=>M.useMemo(()=>Xv(),[n]),Ep=tt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Tp=tt`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,mf=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Zv=H.div`
  ${Ep}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${mf}:focus & {
    ${Tp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Dp=tt`
  height: ${de.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?Ke():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Vv=H(al)`
  ${Dp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,Kv=H.div`
  ${Ta()}
  ${Dp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,Jv=H.select`
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
  ${Ep}
  cursor: pointer;
  &:disabled {
    ${Ke()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,wp=H(bc).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?tt`
          height: 100%;
          margin-right: 0;
        `:tt`
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
`,Wv=H.span`
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
  ${wp}:active & {
    margin-top: 2px;
  }
`,Fv=H.ul`
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
  box-shadow: ${of};
  ${({variant:n="default"})=>n==="flat"?tt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:tt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>sf(n)}
`,Iv=H.li`
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
  ${({active:n})=>n?Tp:""}
  user-select: none;
`,Pv=[],Op=({className:n,defaultValue:c,disabled:o,native:r,onChange:d,options:m=Pv,readOnly:v,style:D,value:A,variant:b,width:O})=>{var z;const $=M.useMemo(()=>m.filter(Boolean),[m]),[V,W]=Fl({defaultValue:c??((z=$==null?void 0:$[0])===null||z===void 0?void 0:z.value),onChange:d,readOnly:v,value:A}),et=!(o||v),I=M.useMemo(()=>({className:n,style:{...D,width:O}}),[n,D,O]),J=M.useMemo(()=>w.createElement(wp,{as:"div","data-testid":"select-button",$disabled:o,native:r,tabIndex:-1,variant:b==="flat"?"flat":"raised"},w.createElement(Wv,{"data-testid":"select-icon",$disabled:o})),[o,r,b]),X=M.useMemo(()=>b==="flat"?Kv:Vv,[b]);return M.useMemo(()=>({isEnabled:et,options:$,value:V,setValue:W,wrapperProps:I,DropdownButton:J,Wrapper:X}),[J,X,et,$,W,V,I])},t1={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},e1=1e3,l1=({onBlur:n,onChange:c,onClose:o,onFocus:r,onKeyDown:d,onMouseDown:m,onOpen:v,open:D,options:A,readOnly:b,value:O,selectRef:z,setValue:$,wrapperRef:V})=>{const W=M.useRef(null),et=M.useRef([]),I=M.useRef(0),J=M.useRef(0),X=M.useRef(),Y=M.useRef("search"),lt=M.useRef(""),L=M.useRef(),[F,P]=Fl({defaultValue:!1,onChange:v,onChangePropName:"onOpen",readOnly:b,value:D,valuePropName:"open"}),St=M.useMemo(()=>{const j=A.findIndex(st=>st.value===O);return I.current=Aa(j,0,null),A[j]},[A,O]),[Ot,Zt]=M.useState(A[0]),Ut=M.useCallback(j=>{const st=W.current,ht=et.current[j];if(!ht||!st){X.current=j;return}X.current=void 0;const Et=st.clientHeight,Ct=st.scrollTop,Vt=st.scrollTop+Et,Kt=ht.offsetTop,ge=ht.offsetHeight,Ft=ht.offsetTop+ht.offsetHeight;Kt<Ct&&st.scrollTo(0,Kt),Ft>Vt&&st.scrollTo(0,Kt-Et+ge),ht.focus({preventScroll:!0})},[W]),mt=M.useCallback((j,{scroll:st}={})=>{var ht;const Et=A.length-1;let Ct;switch(j){case"first":{Ct=0;break}case"last":{Ct=Et;break}case"next":{Ct=Aa(J.current+1,0,Et);break}case"previous":{Ct=Aa(J.current-1,0,Et);break}case"selected":{Ct=Aa((ht=I.current)!==null&&ht!==void 0?ht:0,0,Et);break}default:Ct=j}J.current=Ct,Zt(A[Ct]),st&&Ut(Ct)},[J,A,Ut]),Qt=M.useCallback(({fromEvent:j})=>{P(!0),mt("selected",{scroll:!0}),v==null||v({fromEvent:j})},[mt,v,P]),$t=M.useCallback(()=>{Y.current="search",lt.current="",clearTimeout(L.current)},[]),vt=M.useCallback(({focusSelect:j,fromEvent:st})=>{var ht;o==null||o({fromEvent:st}),P(!1),Zt(A[0]),$t(),X.current=void 0,j&&((ht=z.current)===null||ht===void 0||ht.focus())},[$t,o,A,z,P]),R=M.useCallback(({fromEvent:j})=>{F?vt({focusSelect:!1,fromEvent:j}):Qt({fromEvent:j})},[vt,Qt,F]),G=M.useCallback((j,{fromEvent:st})=>{I.current!==j&&(I.current=j,$(A[j].value),c==null||c(A[j],{fromEvent:st}))},[c,A,$]),q=M.useCallback(({focusSelect:j,fromEvent:st})=>{G(J.current,{fromEvent:st}),vt({focusSelect:j,fromEvent:st})},[vt,G]),it=M.useCallback((j,{fromEvent:st,select:ht})=>{var Et;switch(Y.current==="cycleFirstLetter"&&j!==lt.current&&(Y.current="search"),j===lt.current?Y.current="cycleFirstLetter":lt.current+=j,Y.current){case"search":{let Ct=A.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(lt.current))===0});Ct<0&&(Ct=A.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(j))===0}),lt.current=j),Ct>=0&&(ht?G(Ct,{fromEvent:st}):mt(Ct,{scroll:!0}));break}case"cycleFirstLetter":{const Ct=ht?(Et=I.current)!==null&&Et!==void 0?Et:-1:J.current;let Vt=A.findIndex((Kt,ge)=>{var Ft;return ge>Ct&&((Ft=Kt.label)===null||Ft===void 0?void 0:Ft.toLocaleUpperCase().indexOf(j))===0});Vt<0&&(Vt=A.findIndex(Kt=>{var ge;return((ge=Kt.label)===null||ge===void 0?void 0:ge.toLocaleUpperCase().indexOf(j))===0})),Vt>=0&&(ht?G(Vt,{fromEvent:st}):mt(Vt,{scroll:!0}));break}}clearTimeout(L.current),L.current=setTimeout(()=>{Y.current==="search"&&(lt.current="")},e1)},[mt,A,G]),p=M.useCallback(j=>{var st;j.button===0&&(j.preventDefault(),(st=z.current)===null||st===void 0||st.focus(),R({fromEvent:j}),m==null||m(j))},[m,z,R]),B=M.useCallback(j=>{q({focusSelect:!0,fromEvent:j})},[q]),Q=M.useCallback(j=>{const{altKey:st,code:ht,ctrlKey:Et,metaKey:Ct,shiftKey:Vt}=j,{ARROW_DOWN:Kt,ARROW_UP:ge,END:Ft,ENTER:nl,ESC:Le,HOME:wa,SPACE:El,TAB:Il}=t1,En=st||Et||Ct||Vt;if(!(ht===Il&&(st||Et||Ct)||ht!==Il&&En))switch(ht){case Kt:{if(j.preventDefault(),!F){Qt({fromEvent:j});return}mt("next",{scroll:!0});break}case ge:{if(j.preventDefault(),!F){Qt({fromEvent:j});return}mt("previous",{scroll:!0});break}case Ft:{if(j.preventDefault(),!F){Qt({fromEvent:j});return}mt("last",{scroll:!0});break}case nl:{if(!F)return;j.preventDefault(),q({focusSelect:!0,fromEvent:j});break}case Le:{if(!F)return;j.preventDefault(),vt({focusSelect:!0,fromEvent:j});break}case wa:{if(j.preventDefault(),!F){Qt({fromEvent:j});return}mt("first",{scroll:!0});break}case El:{j.preventDefault(),F?q({focusSelect:!0,fromEvent:j}):Qt({fromEvent:j});break}case Il:{if(!F)return;Vt||j.preventDefault(),q({focusSelect:!Vt,fromEvent:j});break}default:!En&&ht.match(/^Key/)&&(j.preventDefault(),j.stopPropagation(),it(ht.replace(/^Key/,""),{select:!F,fromEvent:j}))}},[mt,vt,F,Qt,it,q]),N=M.useCallback(j=>{Q(j),d==null||d(j)},[Q,d]),k=M.useCallback(j=>{mt(j)},[mt]),at=M.useCallback(j=>{F||($t(),n==null||n(j))},[$t,n,F]),Z=M.useCallback(j=>{$t(),r==null||r(j)},[$t,r]),ot=M.useCallback(j=>{W.current=j,X.current!==void 0&&Ut(X.current)},[Ut]),dt=M.useCallback((j,st)=>{et.current[st]=j,X.current===st&&Ut(X.current)},[Ut]);return M.useEffect(()=>{if(!F)return()=>{};const j=st=>{var ht;const Et=st.target;!((ht=V.current)===null||ht===void 0)&&ht.contains(Et)||(st.preventDefault(),vt({focusSelect:!1,fromEvent:st}))};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[vt,F,V]),M.useMemo(()=>({activeOption:Ot,handleActivateOptionIndex:k,handleBlur:at,handleButtonKeyDown:N,handleDropdownKeyDown:Q,handleFocus:Z,handleMouseDown:p,handleOptionClick:B,handleSetDropdownRef:ot,handleSetOptionRef:dt,open:F,selectedOption:St}),[Ot,k,at,N,Z,Q,p,B,ot,dt,F,St])},a1=M.forwardRef(({className:n,defaultValue:c,disabled:o,onChange:r,options:d,readOnly:m,style:v,value:D,variant:A,width:b,...O},z)=>{const{isEnabled:$,options:V,setValue:W,value:et,DropdownButton:I,Wrapper:J}=Op({defaultValue:c,disabled:o,native:!0,onChange:r,options:d,readOnly:m,value:D,variant:A}),X=M.useCallback(Y=>{const lt=V.find(L=>L.value===Y.target.value);lt&&(W(lt.value),r==null||r(lt,{fromEvent:Y}))},[r,V,W]);return w.createElement(J,{className:n,style:{...v,width:b}},w.createElement(mf,null,w.createElement(Jv,{...O,disabled:o,onChange:$?X:Da,ref:z,value:et},V.map((Y,lt)=>{var L;return w.createElement("option",{key:`${Y.value}-${lt}`,value:Y.value},(L=Y.label)!==null&&L!==void 0?L:Y.value)})),I))});a1.displayName="SelectNative";function n1({activateOptionIndex:n,active:c,index:o,onClick:r,option:d,selected:m,setRef:v}){const D=M.useCallback(()=>{n(o)},[n,o]),A=M.useCallback(O=>{v(O,o)},[o,v]),b=Sp();return w.createElement(Iv,{active:c,"aria-selected":m?"true":void 0,"data-value":d.value,id:b,onClick:r,onMouseEnter:D,ref:A,role:"option",tabIndex:0},d.label)}function u1({"aria-label":n,"aria-labelledby":c,className:o,defaultValue:r,disabled:d=!1,formatDisplay:m,inputProps:v,labelId:D,menuMaxHeight:A,name:b,onBlur:O,onChange:z,onClose:$,onFocus:V,onKeyDown:W,onMouseDown:et,onOpen:I,open:J,options:X,readOnly:Y,shadow:lt=!0,style:L,variant:F="default",value:P,width:St="auto",...Ot},Zt){const{isEnabled:Ut,options:mt,setValue:Qt,value:$t,wrapperProps:vt,DropdownButton:R,Wrapper:G}=Op({className:o,defaultValue:r,disabled:d,native:!1,onChange:z,options:X,style:L,readOnly:Y,value:P,variant:F,width:St}),q=M.useRef(null),it=M.useRef(null),p=M.useRef(null),{activeOption:B,handleActivateOptionIndex:Q,handleBlur:N,handleButtonKeyDown:k,handleDropdownKeyDown:at,handleFocus:Z,handleMouseDown:ot,handleOptionClick:dt,handleSetDropdownRef:j,handleSetOptionRef:st,open:ht,selectedOption:Et}=l1({onBlur:O,onChange:z,onClose:$,onFocus:V,onKeyDown:W,onMouseDown:et,onOpen:I,open:J,options:mt,value:$t,selectRef:it,setValue:Qt,wrapperRef:p});M.useImperativeHandle(Zt,()=>({focus:nl=>{var Le;(Le=it.current)===null||Le===void 0||Le.focus(nl)},node:q.current,value:String($t)}),[$t]);const Ct=M.useMemo(()=>Et?typeof m=="function"?m(Et):Et.label:"",[m,Et]),Vt=Ut?1:void 0,Kt=M.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),ge=Sp(),Ft=M.useMemo(()=>mt.map((nl,Le)=>{const wa=`${$t}-${Le}`,El=nl===B,Il=nl===Et;return w.createElement(n1,{activateOptionIndex:Q,active:El,index:Le,key:wa,onClick:dt,option:nl,selected:Il,setRef:st})}),[B,Q,dt,st,mt,Et,$t]);return w.createElement(G,{...vt,$disabled:d,ref:p,shadow:lt,style:{...L,width:St}},w.createElement("input",{name:b,ref:q,type:"hidden",value:String($t),...v}),w.createElement(mf,{"aria-disabled":d,"aria-expanded":ht,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??D,"aria-owns":Ut&&ht?ge:void 0,onBlur:N,onFocus:Z,onKeyDown:k,onMouseDown:Ut?ot:et,ref:it,role:"button",tabIndex:Vt,...Ot},w.createElement(Zv,null,Ct),R),Ut&&ht&&w.createElement(Fv,{id:ge,onKeyDown:at,ref:j,role:"listbox",style:Kt,tabIndex:0,variant:F},Ft))}const zp=M.forwardRef(u1);zp.displayName="Select";const i1=H.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,oc=M.forwardRef(function({children:c,noPadding:o=!1,...r},d){return w.createElement(i1,{noPadding:o,ref:d,...r},c)});oc.displayName="Toolbar";const c1=H.div`
  padding: 16px;
`,va=M.forwardRef(function({children:c,...o},r){return w.createElement(c1,{ref:r,...o},c)});va.displayName="WindowContent";const r1=H.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?tt`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:tt`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${bc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,wu=M.forwardRef(function({active:c=!0,children:o,...r},d){return w.createElement(r1,{active:c,ref:d,...r},o)});wu.displayName="WindowHeader";const o1=H.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Xt({style:"window"})}
  ${Je()}
`,f1=H.span`
  ${({theme:n})=>tt`
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
`,Ou=M.forwardRef(({children:n,resizable:c=!1,resizeRef:o,shadow:r=!0,...d},m)=>w.createElement(o1,{ref:m,shadow:r,...d},n,c&&w.createElement(f1,{"data-testid":"resizeHandle",ref:o})));Ou.displayName="Window";const s1=H(rc)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,d1=H.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,h1=H.div`
  display: flex;
  flex-wrap: wrap;
`,Al=H.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,p1=H.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,m1=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function b1(n,c){return new Date(n,c+1,0).getDate()}function g1(n,c,o){return new Date(n,c,o).getDay()}function v1(n){const c=new Date(Date.parse(n)),o=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:o,month:r,year:d}}const y1=M.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:o,onCancel:r,shadow:d=!0},m)=>{const[v,D]=M.useState(()=>v1(c)),{year:A,month:b,day:O}=v,z=M.useCallback(({value:I})=>{D(J=>({...J,month:I}))},[]),$=M.useCallback(I=>{D(J=>({...J,year:I}))},[]),V=M.useCallback(I=>{D(J=>({...J,day:I}))},[]),W=M.useCallback(()=>{const I=[v.year,v.month+1,v.day].map(J=>String(J).padStart(2,"0")).join("-");o==null||o(I)},[v.day,v.month,v.year,o]),et=M.useMemo(()=>{const I=Array.from({length:42}),J=g1(A,b,1);let X=O;const Y=b1(A,b);return X=X<Y?X:Y,I.forEach((lt,L)=>{if(L>=J&&L<Y+J){const F=L-J+1;I[L]=w.createElement(Al,{key:L,onClick:()=>{V(F)}},w.createElement(p1,{active:F===X},F))}else I[L]=w.createElement(Al,{key:L})}),I},[O,V,b,A]);return w.createElement(Ou,{className:n,ref:m,shadow:d,style:{margin:20}},w.createElement(wu,null,w.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),w.createElement(va,null,w.createElement(oc,{noPadding:!0,style:{justifyContent:"space-between"}},w.createElement(zp,{options:m1,value:b,onChange:z,width:128,menuMaxHeight:200}),w.createElement(xp,{value:A,onChange:$,width:100})),w.createElement(s1,null,w.createElement(d1,null,w.createElement(Al,null,"S"),w.createElement(Al,null,"M"),w.createElement(Al,null,"T"),w.createElement(Al,null,"W"),w.createElement(Al,null,"T"),w.createElement(Al,null,"F"),w.createElement(Al,null,"S")),w.createElement(h1,null,et)),w.createElement(oc,{noPadding:!0,style:{justifyContent:"space-between"}},w.createElement(Sl,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),w.createElement(Sl,{fullWidth:!0,onClick:o?W:void 0,disabled:!o},"OK"))))});y1.displayName="DatePicker";const A1=n=>{switch(n){case"status":case"well":return tt`
        ${Xt({style:"status"})}
      `;case"window":case"outside":return tt`
        ${Xt({style:"window"})}
      `;case"field":return tt`
        ${Xt({style:"field"})}
      `;default:return tt`
        ${Xt()}
      `}},x1=H.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>A1(n)}
  ${({variant:n})=>Je(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,S1=M.forwardRef(({children:n,shadow:c=!1,variant:o="window",...r},d)=>w.createElement(x1,{ref:d,shadow:c,variant:o,...r},n));S1.displayName="Frame";const E1=H.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&tt`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&Ke()}
`,T1=H.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,D1=M.forwardRef(({label:n,disabled:c=!1,variant:o="default",children:r,...d},m)=>w.createElement(E1,{"aria-disabled":c,$disabled:c,variant:o,ref:m,...d},n&&w.createElement(T1,{variant:o},n),r));D1.displayName="GroupBox";const lc=H.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Wl(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;lc.displayName="Handle";const w1="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",O1=H.div`
  display: inline-block;
  height: ${({size:n})=>Wl(n)};
  width: ${({size:n})=>Wl(n)};
`,z1=H.span`
  display: block;
  background: ${w1};
  background-size: cover;
  width: 100%;
  height: 100%;
`,R1=M.forwardRef(({size:n=30,...c},o)=>w.createElement(O1,{size:n,ref:o,...c},w.createElement(z1,null)));R1.displayName="Hourglass";const M1=H.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,C1=H.div`
  position: relative;
`,_1=H.div`
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
`,B1=H(al).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,N1=H.div`
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
`,U1=M.forwardRef(({backgroundStyles:n,children:c,...o},r)=>w.createElement(M1,{ref:r,...o},w.createElement(C1,null,w.createElement(_1,null,w.createElement(B1,{style:n},c)),w.createElement(N1,null))));U1.displayName="Monitor";const $1=H.div`
  display: inline-block;
  height: ${de.md};
  width: 100%;
`,H1=H(al)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Rp=tt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,j1=H.div`
  position: relative;
  top: 4px;
  ${Rp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,k1=H.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Rp}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Q1=H.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Mp=17,Y1=H.span`
  display: inline-block;
  width: ${Mp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,bf=M.forwardRef(({hideValue:n=!1,shadow:c=!0,value:o,variant:r="default",...d},m)=>{const v=n?null:`${o}%`,D=M.useRef(null),[A,b]=M.useState([]),O=M.useCallback(()=>{if(!D.current||o===void 0)return;const z=D.current.getBoundingClientRect().width,$=Math.round(o/100*z/Mp);b(Array.from({length:$}))},[o]);return M.useEffect(()=>(O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)),[O]),w.createElement($1,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:m,role:"progressbar",variant:r,...d},w.createElement(H1,{variant:r,shadow:c},r==="default"?w.createElement(w.Fragment,null,w.createElement(j1,{"data-testid":"defaultProgress1"},v),w.createElement(k1,{"data-testid":"defaultProgress2",value:o},v)):w.createElement(Q1,{ref:D,"data-testid":"tileProgress"},A.map((z,$)=>w.createElement(Y1,{key:$})))))});bf.displayName="ProgressBar";const Cp=tt`
  width: ${ll}px;
  height: ${ll}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,G1=H(al)`
  ${Cp}
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
`,L1=H.div`
  ${Ta()}
  ${Cp}
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
`,q1=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,X1={flat:L1,default:G1},Z1=M.forwardRef(({checked:n,className:c="",disabled:o=!1,label:r="",onChange:d,style:m={},variant:v="default",...D},A)=>{const b=X1[v];return w.createElement(df,{$disabled:o,className:c,style:m},w.createElement(b,{$disabled:o,role:"presentation"},n&&w.createElement(q1,{$disabled:o,variant:v})),w.createElement(cc,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:A,...D}),r&&w.createElement(hf,null,r))});Z1.displayName="Radio";const V1=typeof window<"u"?M.useLayoutEffect:M.useEffect;function ga(n){const c=M.useRef(n);return V1(()=>{c.current=n}),M.useCallback((...o)=>(0,c.current)(...o),[])}function Bh(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function Nh(n,c){return M.useMemo(()=>n==null&&c==null?null:o=>{Bh(n,o),Bh(c,o)},[n,c])}var K1=Lh();let gc=!0,Po=!1,Uh;const J1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function W1(n){if("type"in n){const{type:c,tagName:o}=n;if(o==="INPUT"&&J1[c]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function F1(n){n.metaKey||n.altKey||n.ctrlKey||(gc=!0)}function Qo(){gc=!1}function I1(){this.visibilityState==="hidden"&&Po&&(gc=!0)}function P1(n){n.addEventListener("keydown",F1,!0),n.addEventListener("mousedown",Qo,!0),n.addEventListener("pointerdown",Qo,!0),n.addEventListener("touchstart",Qo,!0),n.addEventListener("visibilitychange",I1,!0)}function ty(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return gc||W1(c)}function ey(){Po=!0,window.clearTimeout(Uh),Uh=window.setTimeout(()=>{Po=!1},100)}function ly(){const n=M.useCallback(c=>{const o=K1.findDOMNode(c);o!=null&&P1(o.ownerDocument)},[]);return{isFocusVisible:ty,onBlurVisible:ey,ref:n}}function ay(n,c,o){return(o-c)*n+c}function Ki(n,c){if(c!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const r=n.changedTouches[o];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Ji(n){return n&&n.ownerDocument||document}function ny(n,c){var o;const{index:r}=(o=n.reduce((d,m,v)=>{const D=Math.abs(c-m);return d===null||D<d.distance||D===d.distance?{distance:D,index:v}:d},null))!==null&&o!==void 0?o:{};return r??-1}const uy=H.div`
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

  ${({orientation:n,size:c})=>n==="vertical"?tt`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:tt`
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
`,_p=()=>tt`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?tt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:tt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,iy=H(al)`
  ${_p()}
`,cy=H(al)`
  ${_p()}

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
  ${({orientation:n})=>n==="vertical"?tt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:tt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?tt`
          ${Ta()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:tt`
          ${Je()}
          ${Xt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&Cu({mainColor:c.material,secondaryColor:c.borderLightest})}
`,bn=6,oy=H.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?tt`
          right: ${-bn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${bn}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:tt`
          bottom: ${-bn}px;
          height: ${bn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&tt`
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

  ${({orientation:n})=>n==="vertical"?tt`
          transform: translate(${bn+2}px, ${bn+1}px);
        `:tt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,sy=M.forwardRef(({defaultValue:n,disabled:c=!1,marks:o=!1,max:r=100,min:d=0,name:m,onChange:v,onChangeCommitted:D,onMouseDown:A,orientation:b="horizontal",size:O="100%",step:z=1,value:$,variant:V="default",...W},et)=>{const I=V==="flat"?cy:iy,J=b==="vertical",[X=d,Y]=Fl({defaultValue:n,onChange:v??D,value:$}),{isFocusVisible:lt,onBlurVisible:L,ref:F}=ly(),[P,St]=M.useState(!1),Ot=M.useRef(),Zt=M.useRef(null),Ut=Nh(F,Ot),mt=Nh(et,Ut),Qt=ga(N=>{lt(N)&&St(!0)}),$t=ga(()=>{P!==!1&&(St(!1),L())}),vt=M.useRef(),R=M.useMemo(()=>o===!0&&Number.isFinite(z)?[...Array(Math.round((r-d)/z)+1)].map((N,k)=>({label:void 0,value:d+z*k})):Array.isArray(o)?o:[],[o,r,d,z]),G=ga(N=>{const k=(r-d)/10,at=R.map(dt=>dt.value),Z=at.indexOf(X);let ot=0;switch(N.key){case"Home":ot=d;break;case"End":ot=r;break;case"PageUp":z&&(ot=X+k);break;case"PageDown":z&&(ot=X-k);break;case"ArrowRight":case"ArrowUp":z?ot=X+z:ot=at[Z+1]||at[at.length-1];break;case"ArrowLeft":case"ArrowDown":z?ot=X-z:ot=at[Z-1]||at[0];break;default:return}N.preventDefault(),z&&(ot=Mh(ot,z,d)),ot=Aa(ot,d,r),Y(ot),St(!0),v==null||v(ot),D==null||D(ot)}),q=M.useCallback(N=>{if(!Ot.current)return 0;const k=Ot.current.getBoundingClientRect();let at;J?at=(k.bottom-N.y)/k.height:at=(N.x-k.left)/k.width;let Z;if(Z=ay(at,d,r),z)Z=Mh(Z,z,d);else{const ot=R.map(j=>j.value),dt=ny(ot,Z);Z=ot[dt]}return Z=Aa(Z,d,r),Z},[R,r,d,z,J]),it=ga(N=>{var k;const at=Ki(N,vt.current);if(!at)return;const Z=q(at);(k=Zt.current)===null||k===void 0||k.focus(),Y(Z),St(!0),v==null||v(Z)}),p=ga(N=>{const k=Ki(N,vt.current);if(!k)return;const at=q(k);D==null||D(at),vt.current=void 0;const Z=Ji(Ot.current);Z.removeEventListener("mousemove",it),Z.removeEventListener("mouseup",p),Z.removeEventListener("touchmove",it),Z.removeEventListener("touchend",p)}),B=ga(N=>{var k;A==null||A(N),N.preventDefault(),(k=Zt.current)===null||k===void 0||k.focus(),St(!0);const at=Ki(N,vt.current);if(at){const ot=q(at);Y(ot),v==null||v(ot)}const Z=Ji(Ot.current);Z.addEventListener("mousemove",it),Z.addEventListener("mouseup",p)}),Q=ga(N=>{var k;N.preventDefault();const at=N.changedTouches[0];at!=null&&(vt.current=at.identifier),(k=Zt.current)===null||k===void 0||k.focus(),St(!0);const Z=Ki(N,vt.current);if(Z){const dt=q(Z);Y(dt),v==null||v(dt)}const ot=Ji(Ot.current);ot.addEventListener("touchmove",it),ot.addEventListener("touchend",p)});return M.useEffect(()=>{const{current:N}=Ot;N==null||N.addEventListener("touchstart",Q);const k=Ji(N);return()=>{N==null||N.removeEventListener("touchstart",Q),k.removeEventListener("mousemove",it),k.removeEventListener("mouseup",p),k.removeEventListener("touchmove",it),k.removeEventListener("touchend",p)}},[p,it,Q]),w.createElement(uy,{$disabled:c,hasMarks:!!R.length,isFocused:P,onMouseDown:B,orientation:b,ref:mt,size:Wl(O),...W},w.createElement("input",{disabled:c,name:m,type:"hidden",value:X??0}),R&&R.map(N=>w.createElement(oy,{$disabled:c,"data-testid":"tick",key:N.value/(r-d)*100,orientation:b,style:{[J?"bottom":"left"]:`${(N.value-d)/(r-d)*100}%`}},N.label&&w.createElement(fy,{"aria-hidden":!0,"data-testid":"mark",orientation:b},N.label))),w.createElement(I,{orientation:b,variant:V}),w.createElement(ry,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":b,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":X,onBlur:$t,onFocus:Qt,onKeyDown:G,orientation:b,ref:Zt,role:"slider",style:{[J?"bottom":"left"]:`${(J?-100:0)+100*(X-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:V}))});sy.displayName="Slider";const dy=H.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${ff};
  overflow-y: auto;
`,hy=M.forwardRef(function({children:c,...o},r){return w.createElement(dy,{ref:r,...o},c)});hy.displayName="TableBody";const py=H.td`
  padding: 0 8px;
`,my=M.forwardRef(function({children:c,...o},r){return w.createElement(py,{ref:r,...o},c)});my.displayName="TableDataCell";const by=H.thead`
  display: table-header-group;
`,gy=M.forwardRef(function({children:c,...o},r){return w.createElement(by,{ref:r,...o},c)});gy.displayName="TableHead";const vy=H.th`
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
  ${({$disabled:n})=>!n&&tt`
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
`,yy=M.forwardRef(function({disabled:c=!1,children:o,onClick:r,onTouchStart:d=Da,sort:m,...v},D){const A=m==="asc"?"ascending":m==="desc"?"descending":void 0;return w.createElement(vy,{$disabled:c,"aria-disabled":c,"aria-sort":A,onClick:c?void 0:r,onTouchStart:c?void 0:d,ref:D,...v},w.createElement("div",null,o))});yy.displayName="TableHeadCell";const Ay=H.tr`
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
`,xy=M.forwardRef(function({children:c,...o},r){return w.createElement(Ay,{ref:r,...o},c)});xy.displayName="TableRow";const Sy=H.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Ey=H(al)`
  &:before {
    box-shadow: none;
  }
`,Ty=M.forwardRef(({children:n,...c},o)=>w.createElement(Ey,null,w.createElement(Sy,{ref:o,...c},n)));Ty.displayName="Table";const Dy=H.button`
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
    ${xn}
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
`,wy=M.forwardRef(({value:n,onClick:c,selected:o=!1,children:r,...d},m)=>w.createElement(Dy,{"aria-selected":o,selected:o,onClick:v=>c==null?void 0:c(n,v),ref:m,role:"tab",...d},r));wy.displayName="Tab";const Oy=H.div`
  ${Je()}
  ${Xt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,zy=M.forwardRef(({children:n,...c},o)=>w.createElement(Oy,{ref:o,...c},n));zy.displayName="TabBody";const Ry=H.div`
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
`;function Cy(n,c){const o=[];for(let r=c;r>0;r-=1)o.push(n.splice(0,Math.ceil(n.length/r)));return o}const _y=M.forwardRef(({value:n,onChange:c=Da,children:o,rows:r=1,...d},m)=>{const v=M.useMemo(()=>{var D;const A=(D=w.Children.map(o,z=>{if(!w.isValidElement(z))return null;const $={selected:z.props.value===n,onClick:c};return w.cloneElement(z,$)}))!==null&&D!==void 0?D:[],b=Cy(A,r).map((z,$)=>({key:$,tabs:z})),O=b.findIndex(z=>z.tabs.some($=>$.props.selected));return b.push(b.splice(O,1)[0]),b},[o,c,r,n]);return w.createElement(Ry,{...d,isMultiRow:r>1,role:"tablist",ref:m},v.map(D=>w.createElement(My,{key:D.key},D.tabs)))});_y.displayName="Tabs";const By=["blur","focus"],Ny=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function $h(n){return"nativeEvent"in n&&By.includes(n.type)}function Hh(n){return"nativeEvent"in n&&Ny.includes(n.type)}const Uy={top:`top: -4px;
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
  box-shadow: ${of};
  text-align: center;
  font-size: 1rem;
  ${n=>Uy[n.position]}
`,Hy=H.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,tf=M.forwardRef(({className:n,children:c,disableFocusListener:o=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:m=0,onBlur:v,onClose:D,onFocus:A,onMouseEnter:b,onMouseLeave:O,onOpen:z,style:$,text:V,position:W="top",...et},I)=>{const[J,X]=M.useState(!1),[Y,lt]=M.useState(),[L,F]=M.useState(),P=!o,St=!r,Ot=q=>{window.clearTimeout(Y),window.clearTimeout(L);const it=window.setTimeout(()=>{X(!0),z==null||z(q)},d);lt(it)},Zt=q=>{q.persist(),$h(q)?A==null||A(q):Hh(q)&&(b==null||b(q)),Ot(q)},Ut=q=>{window.clearTimeout(Y),window.clearTimeout(L);const it=window.setTimeout(()=>{X(!1),D==null||D(q)},m);F(it)},mt=q=>{q.persist(),$h(q)?v==null||v(q):Hh(q)&&(O==null||O(q)),Ut(q)},Qt=P?mt:void 0,$t=P?Zt:void 0,vt=St?Zt:void 0,R=St?mt:void 0,G=P?0:void 0;return w.createElement(Hy,{"data-testid":"tooltip-wrapper",onBlur:Qt,onFocus:$t,onMouseEnter:vt,onMouseLeave:R,tabIndex:G},w.createElement($y,{className:n,"data-testid":"tooltip",position:W,ref:I,show:J,style:$,...et},V),c)});tf.displayName="Tooltip";const ef=H(hf)`
  white-space: nowrap;
`,Bp=tt`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":tt`
          cursor: pointer;

          :focus {
            ${ef} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,jy=H.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&tt`
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
`,ky=H.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?tt`
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
        `:tt`
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
`,Qy=H.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Yy=H.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${Bp};

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
`,jh=H(df)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Bp};
`,Gy=H.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function kh(n,c){return n.includes(c)?n.filter(o=>o!==c):[...n,c]}function Qh(n){n.preventDefault()}function Np({className:n,disabled:c,expanded:o,innerRef:r,level:d,select:m,selected:v,style:D,tree:A=[]}){const b=d===0,O=M.useCallback(z=>{var $,V;const W=!!(z.items&&z.items.length>0),et=o.includes(z.id),I=($=c||z.disabled)!==null&&$!==void 0?$:!1,J=I?Qh:L=>m(L,z),X=I?Qh:L=>m(L,z),Y=v===z.id,lt=w.createElement(Gy,{"aria-hidden":!0},z.icon);return w.createElement(ky,{key:z.label,isRootLevel:b,role:"treeitem","aria-expanded":et,"aria-selected":Y,hasItems:W},W?w.createElement(Qy,{open:et},w.createElement(Yy,{onClick:J,$disabled:I},w.createElement(jh,{$disabled:I},lt,w.createElement(ef,null,z.label))),et&&w.createElement(Np,{className:n,disabled:I,expanded:o,level:d+1,select:m,selected:v,style:D,tree:(V=z.items)!==null&&V!==void 0?V:[]})):w.createElement(jh,{as:"button",$disabled:I,onClick:X},lt,w.createElement(ef,null,z.label)))},[n,c,o,b,d,m,v,D]);return w.createElement(jy,{className:b?n:void 0,style:b?D:void 0,ref:b?r:void 0,role:b?"tree":"group",isRootLevel:b},A.map(O))}function Ly({className:n,defaultExpanded:c=[],defaultSelected:o,disabled:r=!1,expanded:d,onNodeSelect:m,onNodeToggle:v,selected:D,style:A,tree:b=[]},O){const[z,$]=Fl({defaultValue:c,onChange:v,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[V,W]=Fl({defaultValue:o,onChange:m,onChangePropName:"onNodeSelect",value:D,valuePropName:"selected"}),et=M.useCallback((X,Y)=>{if(v){const lt=kh(z,Y);v(X,lt)}$(lt=>kh(lt,Y))},[z,v,$]),I=M.useCallback((X,Y)=>{W(Y),m&&m(X,Y)},[m,W]),J=M.useCallback((X,Y)=>{X.preventDefault(),I(X,Y.id),Y.items&&Y.items.length&&et(X,Y.id)},[I,et]);return w.createElement(Np,{className:n,disabled:r,expanded:z,level:0,innerRef:O,select:J,selected:V,style:A,tree:b})}const qy=M.forwardRef(Ly);qy.displayName="TreeView";const Xy="/95-Portfolio/assets/ms_sans_serif-Du8rjN1q.woff2",Zy="/95-Portfolio/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var Yo,Yh;function Vy(){if(Yh)return Yo;Yh=1;var n={name:"blue",anchor:"rgb(0, 0, 128)",anchorVisited:"rgb(0, 0, 128)",borderDark:"rgb(49, 131, 221)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(166, 202, 240)",borderLightest:"rgb(211, 228, 248)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(49, 131, 221)",canvasTextDisabledShadow:"rgb(211, 228, 248)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(49, 131, 221)",desktopBackground:"rgb(58, 110, 165)",flatDark:"rgb(49, 131, 221)",flatLight:"rgb(166, 202, 240)",focusSecondary:"rgb(211, 228, 248)",headerBackground:"linear-gradient(to right, rgb(0, 0, 128), rgb(16, 132, 208))",headerNotActiveBackground:"linear-gradient(to right, rgb(49, 131, 221), rgb(49, 131, 221))",headerNotActiveText:"rgb(0, 0, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(51, 153, 255)",material:"rgb(166, 202, 240)",materialDark:"rgb(49, 131, 221)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(49, 131, 221)",materialTextDisabledShadow:"rgb(211, 228, 248)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(51, 153, 255)",tooltip:"rgb(225, 225, 255)"};return Yo=n,Yo}var Ky=Vy();const Jy=Gh(Ky),Wy="/95-Portfolio/assets/winxp-aEloBXO0.png",Fy="/95-Portfolio/assets/psx_graphics-D5Raoe1Z.gif",Iy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAD////AwMAAAIAAAP/jaa47AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAiklEQVQoz52QwQ3DIBAEQUoBrF0BujTAJQ3Ykgvwg/5bCZwjsRfLD2dfMBpYuBD+TQSQfvaOAJ7EL8Al6OtJtYAFEcmJQBO08BVNeC5kdOG90h2zWJIzWgYwJXOtcks4WiTzZ70Rj5ZhBExldBiYhf5qhuqLR7hgPLPnUSvcka1aEgmW/RKcZnwzH3+2Gx0TJwQiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAw5EF/4AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NjoyMC0wNDowMJUcx1wAAAAASUVORK5CYII=",Py="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEUAAACZmZnn59bMzMyGhoZmZmYEBATAwMD////q6ur/+/AAMzMAmZkAgIAAZmYzzMwzM5mZzP8AM5nMzP+ZmcwcHBzj4+MiIiJVVVWtqZAz/2YAgACWLo3QAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBBMBJCt84jxJAAABaUlEQVRIx5WV0XKDIBBFZRWFpBhrS03i//9nF4S6KCz2MM74cA8XDNGmoQie5oiAtgx0sj/lhzKYPwpCcWD+IAily7j5MwIU0DDkhJuGe56CgA33jw0ThxnNOI6c8MBxMtgGzE8JaNQapk/CXGtApi/CXGlI1jPPKJQbbpvwTUDBlhuCAPtxaJ1Q28ME0QDVWrZBpQ2gwAtXG8A3IBca/kZrDVJ7SvGIun+ZE6pPyWMD9bNk0uHybEOaDnl2SYYwxsEIY5aC8MO8A4KwLIkAZbzQSykWKjCvMSe4vKSCfLL4/NOSNfU8Pi93QVYReO0NAo8aHfi2boc4HC+3bdIgVJr3Z48aXkgb3u91nz+k43KyDeu6JvM7J+54E56FPRxXc2kP0UkE0oD53O/7InRpPnw54jfldIPnz9K8VkPPXXj8hP1nXtjree3ykqzfzcFdh7yGGjRf+Zxv0DwKQxWab0RXh+YbYS9A8r/yizreWBxUTwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNjo0My0wNDowMNV8Hl4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzY6NDMtMDQ6MDCkIabiAAAAAElFTkSuQmCC",tA="/95-Portfolio/assets/audio-BD85AMiZ.mp3",eA=rv`
  ${ov}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Xy}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Zy}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: rgb(127, 179, 235);
    margin: 0;
    padding-top: 150px;
    box-sizing: border-box;
  }
`;function lA({onComplete:n}){const[c,o]=M.useState(0),[r,d]=M.useState("");return M.useEffect(()=>{const m=setInterval(()=>{o(v=>{const D=Math.min(v+Math.random()*15,100);return D>=100&&(clearInterval(m),setTimeout(n,500)),D})},300);return()=>clearInterval(m)},[n]),M.useEffect(()=>{const m=setInterval(()=>{d(v=>v.length<3?v+".":"")},500);return()=>clearInterval(m)},[]),K.jsx("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgb(127, 179, 235)",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"ms_sans_serif, sans-serif",color:"black"},children:K.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",transform:"translateY(-20%)"},children:[K.jsxs("div",{style:{fontSize:"18px",marginBottom:"16px"},children:["Loading",r]}),K.jsx(bf,{variant:"tile",value:Math.floor(c),style:{width:300}})]})})}function aA(){const[n,c]=M.useState(!1),[o,r]=M.useState(!0);return K.jsxs(K.Fragment,{children:[K.jsx(eA,{}),o?K.jsx(lA,{onComplete:()=>r(!1)}):K.jsxs(uv,{theme:Jy,children:[K.jsx(mp,{className:"fixed top-0 left-0 w-full z-50",children:K.jsxs(oc,{className:"flex justify-between px-4",children:[K.jsxs("div",{className:"relative inline-block",children:[K.jsxs(Sl,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:[K.jsx("img",{src:Wy,alt:"win xp logo",className:"h-5 mr-1"}),"Start"]}),n&&K.jsxs(bp,{style:{position:"absolute",left:0,top:"100%",zIndex:999,minWidth:"200px"},onClick:()=>c(!1),children:[K.jsx(ec,{className:"flex items-center gap-2",onClick:()=>window.open("https://github.com/abdessalamzarrouk","_blank"),children:"GitHub Profile"}),K.jsx(ec,{children:"My Account"}),K.jsx(Du,{}),K.jsx(ec,{children:K.jsx(tf,{text:"You are stuck here 🤷‍",enterDelay:100,leaveDelay:500,children:"Logout"})})]})]}),K.jsx("a",{href:"#Projects",children:K.jsx(Sl,{variant:"menu",children:"Current Projects"})}),K.jsx(lc,{size:38}),K.jsx(Sl,{variant:"menu",children:"About Me"}),K.jsx(lc,{size:38}),K.jsx(Sl,{variant:"menu",children:"Skills"}),K.jsx(lc,{size:38}),K.jsx(Sl,{variant:"menu",children:"Contact info"}),K.jsx(pf,{placeholder:"Search...",width:150})]})}),K.jsx("audio",{src:tA,autoPlay:!0,loop:!0}),K.jsxs("main",{className:"w-full min-h-screen px-4 flex flex-col items-center bg-[rgb(127,179,235)]",children:[K.jsxs("section",{className:"mb-10 max-w-2xl w-full text-center pt-5",children:[K.jsx("h1",{className:"text-4xl font-bold underline mb-4",children:"Hi, I’m Abdessalam Zarrouk!"}),K.jsxs("h2",{className:"text-3xl font-bold mb-4 flex justify-center items-center gap-2",children:[K.jsx(tf,{text:"Yes that's me.",enterDelay:100,leaveDelay:100,children:K.jsx("img",{src:Iy,alt:"user logo",className:"h-8 "})}),"A passionate software engineer and lifelong learner"]}),K.jsxs("p",{className:"text-lg text-gray-700 flex justify-center items-center gap-2",children:[K.jsx("img",{src:Py,alt:"computer icon",className:"h-7"}),"I enjoy building creative projects, solving problems, and exploring new technologies. This portfolio showcases some of my work and interests."]})]}),K.jsx(Du,{size:"1200px",className:"flex justify-center mb-4"}),K.jsx("h1",{className:"text-4xl font-bold mt-10",children:"Current Projects :"}),K.jsx("section",{className:"w-full flex justify-center mt-10 mb-14",id:"Projects",children:K.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-screen-xl w-full",children:[K.jsx(Ou,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:K.jsxs("a",{href:"https://github.com/abdessalamzarrouk/ShieldOps",children:[K.jsx(wu,{children:K.jsx("span",{children:"ShieldOps.txt"})}),K.jsxs(va,{children:[K.jsx("p",{children:"Progress : Under Construction  "})," ",K.jsx(bf,{variant:"tile",value:Math.floor(30)})]}),K.jsx(va,{children:K.jsx(rc,{style:{width:"100%",height:150},children:K.jsxs("p",{children:["This is an ",K.jsx("span",{className:"font-bold",children:"academic project"})," that is dedicated to learning how to set up a CI/CD pipeline that will include some",K.jsx("span",{className:"font-bold",children:" cybersecurity"})," features like code and dependency vulnerabilities detection and prevention."]})})}),K.jsx(va,{children:K.jsx(rc,{style:{width:"100%",height:66},children:K.jsxs("p",{children:[K.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used : "})," Docker, Jenkins, OWASP ZAP, Snyk, Trivy, SonarQube."]})})})]})}),K.jsx(Ou,{className:"w-full max-w-md overflow-hidden transition-transform duration-300 hover:scale-110",children:K.jsxs("a",{href:"https://github.com/abdessalamzarrouk/PSX_GRAPHICS",children:[K.jsx(wu,{children:K.jsx("span",{children:"psx_graphics.txt"})}),K.jsxs(va,{children:[K.jsx("img",{src:Fy,alt:"PSX Graphics",className:"w-full mb-5"}),K.jsxs("p",{children:["This is a ",K.jsx("span",{className:"text-[#DF0024] font-bold",children:"Play"}),K.jsx("span",{className:"text-[#f3c300] font-bold",children:"Station"})," ",K.jsx("span",{className:"font-bold",children:"1"})," game development project where i showcase some of the demonstrations i made using the infamous ",K.jsx("span",{className:"font-bold",children:"Psygnosis Source Development Kit"})," (Psy-Q)."]}),K.jsxs("p",{children:[K.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used :"}),"  Psy-Q SDK, ARMIPS, Make, mkpsxiso."]})]})]})}),K.jsxs(Ou,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:[K.jsx(wu,{children:K.jsx("span",{children:"funny.gif"})}),K.jsx(va,{children:K.jsx("img",{src:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBhcnBtNW1lZ2lyOTY4bnM0Z2J4OGVidnB1OTJlbHRwYnJwZmw1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VKdoCR31r5EYM/giphy.webp",alt:"Funny GIF",className:"w-full"})})]})]})}),K.jsx(Du,{size:"1200px",className:"flex justify-center mb-4"})]})]}),";"]})}ig.createRoot(document.getElementById("root")).render(K.jsx(M.StrictMode,{children:K.jsx(aA,{})}));
