(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();function Z0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var No={exports:{}},Du={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function eg(){if(o0)return Du;o0=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,p){var v=null;if(p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),"key"in d){p={};for(var O in d)O!=="key"&&(p[O]=d[O])}else p=d;return d=p.ref,{$$typeof:n,type:r,key:v,ref:d!==void 0?d:null,props:p}}return Du.Fragment=c,Du.jsx=o,Du.jsxs=o,Du}var s0;function lg(){return s0||(s0=1,No.exports=eg()),No.exports}var y=lg(),Co={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function ag(){if(f0)return pt;f0=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),M=Symbol.iterator;function H(m){return m===null||typeof m!="object"?null:(m=M&&m[M]||m["@@iterator"],typeof m=="function"?m:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,et={};function P(m,_,q){this.props=m,this.context=_,this.refs=et,this.updater=q||K}P.prototype.isReactComponent={},P.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},P.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function J(){}J.prototype=P.prototype;function V(m,_,q){this.props=m,this.context=_,this.refs=et,this.updater=q||K}var Y=V.prototype=new J;Y.constructor=V,L(Y,P.prototype),Y.isPureReactComponent=!0;var W=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function tt(m,_,q,B,Q,at){return q=at.ref,{$$typeof:n,type:m,key:_,ref:q!==void 0?q:null,props:at}}function vt(m,_){return tt(m.type,_,void 0,void 0,void 0,m.props)}function wt(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function Zt(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(q){return _[q]})}var Bt=/\/+/g;function mt(m,_){return typeof m=="object"&&m!==null&&m.key!=null?Zt(""+m.key):_.toString(36)}function Qt(){}function Ut(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Qt,Qt):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function yt(m,_,q,B,Q){var at=typeof m;(at==="undefined"||at==="boolean")&&(m=null);var F=!1;if(m===null)F=!0;else switch(at){case"bigint":case"string":case"number":F=!0;break;case"object":switch(m.$$typeof){case n:case c:F=!0;break;case z:return F=m._init,yt(F(m._payload),_,q,B,Q)}}if(F)return Q=Q(m),F=B===""?"."+mt(m,0):B,W(Q)?(q="",F!=null&&(q=F.replace(Bt,"$&/")+"/"),yt(Q,_,q,"",function(k){return k})):Q!=null&&(wt(Q)&&(Q=vt(Q,q+(Q.key==null||m&&m.key===Q.key?"":(""+Q.key).replace(Bt,"$&/")+"/")+F)),_.push(Q)),1;F=0;var ot=B===""?".":B+":";if(W(m))for(var dt=0;dt<m.length;dt++)B=m[dt],at=ot+mt(B,dt),F+=yt(B,_,q,at,Q);else if(dt=H(m),typeof dt=="function")for(m=dt.call(m),dt=0;!(B=m.next()).done;)B=B.value,at=ot+mt(B,dt++),F+=yt(B,_,q,at,Q);else if(at==="object"){if(typeof m.then=="function")return yt(Ut(m),_,q,B,Q);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return F}function N(m,_,q){if(m==null)return m;var B=[],Q=0;return yt(m,B,"","",function(at){return _.call(q,at,Q++)}),B}function X(m){if(m._status===-1){var _=m._result;_=_(),_.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q)},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q)}),m._status===-1&&(m._status=0,m._result=_)}if(m._status===1)return m._result.default;throw m._result}var Z=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function it(){}return pt.Children={map:N,forEach:function(m,_,q){N(m,function(){_.apply(this,arguments)},q)},count:function(m){var _=0;return N(m,function(){_++}),_},toArray:function(m){return N(m,function(_){return _})||[]},only:function(m){if(!wt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},pt.Component=P,pt.Fragment=o,pt.Profiler=d,pt.PureComponent=V,pt.StrictMode=r,pt.Suspense=x,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,pt.__COMPILER_RUNTIME={__proto__:null,c:function(m){return G.H.useMemoCache(m)}},pt.cache=function(m){return function(){return m.apply(null,arguments)}},pt.cloneElement=function(m,_,q){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=L({},m.props),Q=m.key,at=void 0;if(_!=null)for(F in _.ref!==void 0&&(at=void 0),_.key!==void 0&&(Q=""+_.key),_)!I.call(_,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&_.ref===void 0||(B[F]=_[F]);var F=arguments.length-2;if(F===1)B.children=q;else if(1<F){for(var ot=Array(F),dt=0;dt<F;dt++)ot[dt]=arguments[dt+2];B.children=ot}return tt(m.type,Q,void 0,void 0,at,B)},pt.createContext=function(m){return m={$$typeof:v,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:p,_context:m},m},pt.createElement=function(m,_,q){var B,Q={},at=null;if(_!=null)for(B in _.key!==void 0&&(at=""+_.key),_)I.call(_,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Q[B]=_[B]);var F=arguments.length-2;if(F===1)Q.children=q;else if(1<F){for(var ot=Array(F),dt=0;dt<F;dt++)ot[dt]=arguments[dt+2];Q.children=ot}if(m&&m.defaultProps)for(B in F=m.defaultProps,F)Q[B]===void 0&&(Q[B]=F[B]);return tt(m,at,void 0,void 0,null,Q)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(m){return{$$typeof:O,render:m}},pt.isValidElement=wt,pt.lazy=function(m){return{$$typeof:z,_payload:{_status:-1,_result:m},_init:X}},pt.memo=function(m,_){return{$$typeof:b,type:m,compare:_===void 0?null:_}},pt.startTransition=function(m){var _=G.T,q={};G.T=q;try{var B=m(),Q=G.S;Q!==null&&Q(q,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(it,Z)}catch(at){Z(at)}finally{G.T=_}},pt.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},pt.use=function(m){return G.H.use(m)},pt.useActionState=function(m,_,q){return G.H.useActionState(m,_,q)},pt.useCallback=function(m,_){return G.H.useCallback(m,_)},pt.useContext=function(m){return G.H.useContext(m)},pt.useDebugValue=function(){},pt.useDeferredValue=function(m,_){return G.H.useDeferredValue(m,_)},pt.useEffect=function(m,_,q){var B=G.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(m,_)},pt.useId=function(){return G.H.useId()},pt.useImperativeHandle=function(m,_,q){return G.H.useImperativeHandle(m,_,q)},pt.useInsertionEffect=function(m,_){return G.H.useInsertionEffect(m,_)},pt.useLayoutEffect=function(m,_){return G.H.useLayoutEffect(m,_)},pt.useMemo=function(m,_){return G.H.useMemo(m,_)},pt.useOptimistic=function(m,_){return G.H.useOptimistic(m,_)},pt.useReducer=function(m,_,q){return G.H.useReducer(m,_,q)},pt.useRef=function(m){return G.H.useRef(m)},pt.useState=function(m){return G.H.useState(m)},pt.useSyncExternalStore=function(m,_,q){return G.H.useSyncExternalStore(m,_,q)},pt.useTransition=function(){return G.H.useTransition()},pt.version="19.1.0",pt}var d0;function ns(){return d0||(d0=1,Co.exports=ag()),Co.exports}var D=ns();const R=Z0(D);var jo={exports:{}},zu={},_o={exports:{}},Bo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function ng(){return h0||(h0=1,function(n){function c(N,X){var Z=N.length;N.push(X);t:for(;0<Z;){var it=Z-1>>>1,m=N[it];if(0<d(m,X))N[it]=X,N[Z]=m,Z=it;else break t}}function o(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var X=N[0],Z=N.pop();if(Z!==X){N[0]=Z;t:for(var it=0,m=N.length,_=m>>>1;it<_;){var q=2*(it+1)-1,B=N[q],Q=q+1,at=N[Q];if(0>d(B,Z))Q<m&&0>d(at,B)?(N[it]=at,N[Q]=Z,it=Q):(N[it]=B,N[q]=Z,it=q);else if(Q<m&&0>d(at,Z))N[it]=at,N[Q]=Z,it=Q;else break t}}return X}function d(N,X){var Z=N.sortIndex-X.sortIndex;return Z!==0?Z:N.id-X.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var v=Date,O=v.now();n.unstable_now=function(){return v.now()-O}}var x=[],b=[],z=1,M=null,H=3,K=!1,L=!1,et=!1,P=!1,J=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function W(N){for(var X=o(b);X!==null;){if(X.callback===null)r(b);else if(X.startTime<=N)r(b),X.sortIndex=X.expirationTime,c(x,X);else break;X=o(b)}}function G(N){if(et=!1,W(N),!L)if(o(x)!==null)L=!0,I||(I=!0,mt());else{var X=o(b);X!==null&&yt(G,X.startTime-N)}}var I=!1,tt=-1,vt=5,wt=-1;function Zt(){return P?!0:!(n.unstable_now()-wt<vt)}function Bt(){if(P=!1,I){var N=n.unstable_now();wt=N;var X=!0;try{t:{L=!1,et&&(et=!1,V(tt),tt=-1),K=!0;var Z=H;try{e:{for(W(N),M=o(x);M!==null&&!(M.expirationTime>N&&Zt());){var it=M.callback;if(typeof it=="function"){M.callback=null,H=M.priorityLevel;var m=it(M.expirationTime<=N);if(N=n.unstable_now(),typeof m=="function"){M.callback=m,W(N),X=!0;break e}M===o(x)&&r(x),W(N)}else r(x);M=o(x)}if(M!==null)X=!0;else{var _=o(b);_!==null&&yt(G,_.startTime-N),X=!1}}break t}finally{M=null,H=Z,K=!1}X=void 0}}finally{X?mt():I=!1}}}var mt;if(typeof Y=="function")mt=function(){Y(Bt)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Ut=Qt.port2;Qt.port1.onmessage=Bt,mt=function(){Ut.postMessage(null)}}else mt=function(){J(Bt,0)};function yt(N,X){tt=J(function(){N(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return H},n.unstable_next=function(N){switch(H){case 1:case 2:case 3:var X=3;break;default:X=H}var Z=H;H=X;try{return N()}finally{H=Z}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=H;H=N;try{return X()}finally{H=Z}},n.unstable_scheduleCallback=function(N,X,Z){var it=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?it+Z:it):Z=it,N){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=Z+m,N={id:z++,callback:X,priorityLevel:N,startTime:Z,expirationTime:m,sortIndex:-1},Z>it?(N.sortIndex=Z,c(b,N),o(x)===null&&N===o(b)&&(et?(V(tt),tt=-1):et=!0,yt(G,Z-it))):(N.sortIndex=m,c(x,N),L||K||(L=!0,I||(I=!0,mt()))),N},n.unstable_shouldYield=Zt,n.unstable_wrapCallback=function(N){var X=H;return function(){var Z=H;H=X;try{return N.apply(this,arguments)}finally{H=Z}}}}(Bo)),Bo}var p0;function ug(){return p0||(p0=1,_o.exports=ng()),_o.exports}var Uo={exports:{}},be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function ig(){if(m0)return be;m0=1;var n=ns();function c(x){var b="https://react.dev/errors/"+x;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)b+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+x+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,b,z){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:x,containerInfo:b,implementation:z}}var v=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(x,b){if(x==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,be.createPortal=function(x,b){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return p(x,b,null,z)},be.flushSync=function(x){var b=v.T,z=r.p;try{if(v.T=null,r.p=2,x)return x()}finally{v.T=b,r.p=z,r.d.f()}},be.preconnect=function(x,b){typeof x=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,r.d.C(x,b))},be.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},be.preinit=function(x,b){if(typeof x=="string"&&b&&typeof b.as=="string"){var z=b.as,M=O(z,b.crossOrigin),H=typeof b.integrity=="string"?b.integrity:void 0,K=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;z==="style"?r.d.S(x,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:M,integrity:H,fetchPriority:K}):z==="script"&&r.d.X(x,{crossOrigin:M,integrity:H,fetchPriority:K,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},be.preinitModule=function(x,b){if(typeof x=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var z=O(b.as,b.crossOrigin);r.d.M(x,{crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&r.d.M(x)},be.preload=function(x,b){if(typeof x=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var z=b.as,M=O(z,b.crossOrigin);r.d.L(x,z,{crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},be.preloadModule=function(x,b){if(typeof x=="string")if(b){var z=O(b.as,b.crossOrigin);r.d.m(x,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else r.d.m(x)},be.requestFormReset=function(x){r.d.r(x)},be.unstable_batchedUpdates=function(x,b){return x(b)},be.useFormState=function(x,b,z){return v.H.useFormState(x,b,z)},be.useFormStatus=function(){return v.H.useHostTransitionStatus()},be.version="19.1.0",be}var b0;function V0(){if(b0)return Uo.exports;b0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Uo.exports=ig(),Uo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function cg(){if(g0)return zu;g0=1;var n=ug(),c=ns(),o=V0();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(p(t)!==t)throw Error(r(188))}function x(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return O(u),t;if(i===a)return O(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var s=!1,f=u.child;f;){if(f===l){s=!0,l=u,a=i;break}if(f===a){s=!0,a=u,l=i;break}f=f.sibling}if(!s){for(f=i.child;f;){if(f===l){s=!0,l=i,a=u;break}if(f===a){s=!0,a=i,l=u;break}f=f.sibling}if(!s)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var z=Object.assign,M=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),Zt=Symbol.for("react.memo_cache_sentinel"),Bt=Symbol.iterator;function mt(t){return t===null||typeof t!="object"?null:(t=Bt&&t[Bt]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Qt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case P:return"Profiler";case et:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case wt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case K:return"Portal";case Y:return(t.displayName||"Context")+".Provider";case V:return(t._context.displayName||"Context")+".Consumer";case W:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tt:return e=t.displayName||null,e!==null?e:Ut(t.type)||"Memo";case vt:e=t._payload,t=t._init;try{return Ut(t(e))}catch{}}return null}var yt=Array.isArray,N=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},it=[],m=-1;function _(t){return{current:t}}function q(t){0>m||(t.current=it[m],it[m]=null,m--)}function B(t,e){m++,it[m]=t.current,t.current=e}var Q=_(null),at=_(null),F=_(null),ot=_(null);function dt(t,e){switch(B(F,e),B(at,t),B(Q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Hh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Hh(e),t=$h(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Q),B(Q,t)}function k(){q(Q),q(at),q(F)}function ft(t){t.memoizedState!==null&&B(ot,t);var e=Q.current,l=$h(e,t.type);e!==l&&(B(at,t),B(Q,l))}function ht(t){at.current===t&&(q(Q),q(at)),ot.current===t&&(q(ot),xu._currentValue=Z)}var Et=Object.prototype.hasOwnProperty,Nt=n.unstable_scheduleCallback,Vt=n.unstable_cancelCallback,Kt=n.unstable_shouldYield,ve=n.unstable_requestPaint,Ft=n.unstable_now,il=n.unstable_getCurrentPriorityLevel,qe=n.unstable_ImmediatePriority,Oa=n.unstable_UserBlockingPriority,Tl=n.unstable_NormalPriority,Pl=n.unstable_LowPriority,On=n.unstable_IdlePriority,vs=n.log,$p=n.unstable_setDisableYieldValue,Rn=null,Te=null;function wl(t){if(typeof vs=="function"&&$p(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Rn,t)}catch{}}var we=Math.clz32?Math.clz32:Yp,kp=Math.log,Qp=Math.LN2;function Yp(t){return t>>>=0,t===0?32:31-(kp(t)/Qp|0)|0}var Uu=256,Hu=4194304;function ta(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $u(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?u=ta(a):(s&=f,s!==0?u=ta(s):l||(l=f&~t,l!==0&&(u=ta(l))))):(f=a&~i,f!==0?u=ta(f):s!==0?u=ta(s):l||(l=a&~t,l!==0&&(u=ta(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function Mn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Lp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ys(){var t=Uu;return Uu<<=1,(Uu&4194048)===0&&(Uu=256),t}function As(){var t=Hu;return Hu<<=1,(Hu&62914560)===0&&(Hu=4194304),t}function yc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Nn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gp(t,e,l,a,u,i){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,h=t.expirationTimes,E=t.hiddenUpdates;for(l=s&~l;0<l;){var C=31-we(l),U=1<<C;f[C]=0,h[C]=-1;var T=E[C];if(T!==null)for(E[C]=null,C=0;C<T.length;C++){var w=T[C];w!==null&&(w.lane&=-536870913)}l&=~U}a!==0&&xs(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function xs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-we(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Ss(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-we(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function Ac(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function xc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Es(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:a0(t.type))}function qp(t,e){var l=X.p;try{return X.p=t,e()}finally{X.p=l}}var Dl=Math.random().toString(36).slice(2),pe="__reactFiber$"+Dl,ye="__reactProps$"+Dl,Ra="__reactContainer$"+Dl,Sc="__reactEvents$"+Dl,Xp="__reactListeners$"+Dl,Zp="__reactHandles$"+Dl,Ts="__reactResources$"+Dl,Cn="__reactMarker$"+Dl;function Ec(t){delete t[pe],delete t[ye],delete t[Sc],delete t[Xp],delete t[Zp]}function Ma(t){var e=t[pe];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ra]||l[pe]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Lh(t);t!==null;){if(l=t[pe])return l;t=Lh(t)}return e}t=l,l=t.parentNode}return null}function Na(t){if(t=t[pe]||t[Ra]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function jn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Ca(t){var e=t[Ts];return e||(e=t[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ae(t){t[Cn]=!0}var ws=new Set,Ds={};function ea(t,e){ja(t,e),ja(t+"Capture",e)}function ja(t,e){for(Ds[t]=e,t=0;t<e.length;t++)ws.add(e[t])}var Vp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zs={},Os={};function Kp(t){return Et.call(Os,t)?!0:Et.call(zs,t)?!1:Vp.test(t)?Os[t]=!0:(zs[t]=!0,!1)}function ku(t,e,l){if(Kp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Qu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function cl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var Tc,Rs;function _a(t){if(Tc===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||"",Rs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tc+t+Rs}var wc=!1;function Dc(t,e){if(!t||wc)return"";wc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(w){var T=w}Reflect.construct(t,[],U)}else{try{U.call()}catch(w){T=w}t.call(U.prototype)}}else{try{throw Error()}catch(w){T=w}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(w){if(w&&T&&typeof w.stack=="string")return[w.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],f=i[1];if(s&&f){var h=s.split(`
`),E=f.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<E.length&&!E[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===E.length)for(a=h.length-1,u=E.length-1;1<=a&&0<=u&&h[a]!==E[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==E[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==E[u]){var C=`
`+h[a].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=a&&0<=u);break}}}finally{wc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?_a(l):""}function Jp(t){switch(t.tag){case 26:case 27:case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return Dc(t.type,!1);case 11:return Dc(t.type.render,!1);case 1:return Dc(t.type,!0);case 31:return _a("Activity");default:return""}}function Ms(t){try{var e="";do e+=Jp(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ns(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wp(t){var e=Ns(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yu(t){t._valueTracker||(t._valueTracker=Wp(t))}function Cs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Ns(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fp=/[\n"\\]/g;function Be(t){return t.replace(Fp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function zc(t,e,l,a,u,i,s,f){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+_e(e)):t.value!==""+_e(e)&&(t.value=""+_e(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Oc(t,s,_e(e)):l!=null?Oc(t,s,_e(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+_e(f):t.removeAttribute("name")}function js(t,e,l,a,u,i,s,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+_e(l):"",e=e!=null?""+_e(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function Oc(t,e,l){e==="number"&&Lu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Ba(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+_e(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function _s(t,e,l){if(e!=null&&(e=""+_e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+_e(l):""}function Bs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(yt(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=_e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ua(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Ip=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Us(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Ip.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Hs(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&Us(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&Us(t,i,e[i])}function Rc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gu(t){return tm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Mc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,$a=null;function $s(t){var e=Na(t);if(e&&(t=e.stateNode)){var l=t[ye]||null;t:switch(t=e.stateNode,e.type){case"input":if(zc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Be(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ye]||null;if(!u)throw Error(r(90));zc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Cs(a)}break t;case"textarea":_s(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ba(t,!!l.multiple,e,!1)}}}var Cc=!1;function ks(t,e,l){if(Cc)return t(e,l);Cc=!0;try{var a=t(e);return a}finally{if(Cc=!1,(Ha!==null||$a!==null)&&(Oi(),Ha&&(e=Ha,t=$a,$a=Ha=null,$s(e),t)))for(e=0;e<t.length;e++)$s(t[e])}}function _n(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ye]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var rl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(rl)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{jc=!1}var zl=null,_c=null,qu=null;function Qs(){if(qu)return qu;var t,e=_c,l=e.length,a,u="value"in zl?zl.value:zl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===u[i-a];a++);return qu=u.slice(t,1<a?1-a:void 0)}function Xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zu(){return!0}function Ys(){return!1}function Ae(t){function e(l,a,u,i,s){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zu:Ys,this.isPropagationStopped=Ys,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Zu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Zu)},persist:function(){},isPersistent:Zu}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=Ae(la),Un=z({},la,{view:0,detail:0}),em=Ae(Un),Bc,Uc,Hn,Ku=z({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hn&&(Hn&&t.type==="mousemove"?(Bc=t.screenX-Hn.screenX,Uc=t.screenY-Hn.screenY):Uc=Bc=0,Hn=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Ls=Ae(Ku),lm=z({},Ku,{dataTransfer:0}),am=Ae(lm),nm=z({},Un,{relatedTarget:0}),Hc=Ae(nm),um=z({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),im=Ae(um),cm=z({},la,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rm=Ae(cm),om=z({},la,{data:0}),Gs=Ae(om),sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dm[t])?!!e[t]:!1}function $c(){return hm}var pm=z({},Un,{key:function(t){if(t.key){var e=sm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mm=Ae(pm),bm=z({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qs=Ae(bm),gm=z({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),vm=Ae(gm),ym=z({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=Ae(ym),xm=z({},Ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sm=Ae(xm),Em=z({},la,{newState:0,oldState:0}),Tm=Ae(Em),wm=[9,13,27,32],kc=rl&&"CompositionEvent"in window,$n=null;rl&&"documentMode"in document&&($n=document.documentMode);var Dm=rl&&"TextEvent"in window&&!$n,Xs=rl&&(!kc||$n&&8<$n&&11>=$n),Zs=" ",Vs=!1;function Ks(t,e){switch(t){case"keyup":return wm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ka=!1;function zm(t,e){switch(t){case"compositionend":return Js(e);case"keypress":return e.which!==32?null:(Vs=!0,Zs);case"textInput":return t=e.data,t===Zs&&Vs?null:t;default:return null}}function Om(t,e){if(ka)return t==="compositionend"||!kc&&Ks(t,e)?(t=Qs(),qu=_c=zl=null,ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xs&&e.locale!=="ko"?null:e.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rm[t.type]:e==="textarea"}function Fs(t,e,l,a){Ha?$a?$a.push(a):$a=[a]:Ha=a,e=_i(e,"onChange"),0<e.length&&(l=new Vu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var kn=null,Qn=null;function Mm(t){Ch(t,0)}function Ju(t){var e=jn(t);if(Cs(e))return t}function Is(t,e){if(t==="change")return e}var Ps=!1;if(rl){var Qc;if(rl){var Yc="oninput"in document;if(!Yc){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),Yc=typeof tf.oninput=="function"}Qc=Yc}else Qc=!1;Ps=Qc&&(!document.documentMode||9<document.documentMode)}function ef(){kn&&(kn.detachEvent("onpropertychange",lf),Qn=kn=null)}function lf(t){if(t.propertyName==="value"&&Ju(Qn)){var e=[];Fs(e,Qn,t,Nc(t)),ks(Mm,e)}}function Nm(t,e,l){t==="focusin"?(ef(),kn=e,Qn=l,kn.attachEvent("onpropertychange",lf)):t==="focusout"&&ef()}function Cm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ju(Qn)}function jm(t,e){if(t==="click")return Ju(e)}function _m(t,e){if(t==="input"||t==="change")return Ju(e)}function Bm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var De=typeof Object.is=="function"?Object.is:Bm;function Yn(t,e){if(De(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Et.call(e,u)||!De(t[u],e[u]))return!1}return!0}function af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var l=af(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=af(l)}}function uf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Lu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Lu(t.document)}return e}function Lc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Um=rl&&"documentMode"in document&&11>=document.documentMode,Qa=null,Gc=null,Ln=null,qc=!1;function rf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qc||Qa==null||Qa!==Lu(a)||(a=Qa,"selectionStart"in a&&Lc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ln&&Yn(Ln,a)||(Ln=a,a=_i(Gc,"onSelect"),0<a.length&&(e=new Vu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Qa)))}function aa(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ya={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},Xc={},of={};rl&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function na(t){if(Xc[t])return Xc[t];if(!Ya[t])return t;var e=Ya[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in of)return Xc[t]=e[l];return t}var sf=na("animationend"),ff=na("animationiteration"),df=na("animationstart"),Hm=na("transitionrun"),$m=na("transitionstart"),km=na("transitioncancel"),hf=na("transitionend"),pf=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function Xe(t,e){pf.set(t,e),ea(e,[t])}var mf=new WeakMap;function Ue(t,e){if(typeof t=="object"&&t!==null){var l=mf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ms(e)},mf.set(t,e),e)}return{value:t,source:e,stack:Ms(e)}}var He=[],La=0,Vc=0;function Wu(){for(var t=La,e=Vc=La=0;e<t;){var l=He[e];He[e++]=null;var a=He[e];He[e++]=null;var u=He[e];He[e++]=null;var i=He[e];if(He[e++]=null,a!==null&&u!==null){var s=a.pending;s===null?u.next=u:(u.next=s.next,s.next=u),a.pending=u}i!==0&&bf(l,u,i)}}function Fu(t,e,l,a){He[La++]=t,He[La++]=e,He[La++]=l,He[La++]=a,Vc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Kc(t,e,l,a){return Fu(t,e,l,a),Iu(t)}function Ga(t,e){return Fu(t,null,null,e),Iu(t)}function bf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-we(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Iu(t){if(50<hu)throw hu=0,to=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var qa={};function Qm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(t,e,l,a){return new Qm(t,e,l,a)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ol(t,e){var l=t.alternate;return l===null?(l=ze(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function gf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Pu(t,e,l,a,u,i){var s=0;if(a=t,typeof t=="function")Jc(t)&&(s=1);else if(typeof t=="string")s=Lb(t,l,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case wt:return t=ze(31,l,e,u),t.elementType=wt,t.lanes=i,t;case L:return ua(l.children,u,i,e);case et:s=8,u|=24;break;case P:return t=ze(12,l,e,u|2),t.elementType=P,t.lanes=i,t;case G:return t=ze(13,l,e,u),t.elementType=G,t.lanes=i,t;case I:return t=ze(19,l,e,u),t.elementType=I,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J:case Y:s=10;break t;case V:s=9;break t;case W:s=11;break t;case tt:s=14;break t;case vt:s=16,a=null;break t}s=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=ze(s,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function ua(t,e,l,a){return t=ze(7,t,a,e),t.lanes=l,t}function Wc(t,e,l){return t=ze(6,t,null,e),t.lanes=l,t}function Fc(t,e,l){return e=ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Xa=[],Za=0,ti=null,ei=0,$e=[],ke=0,ia=null,sl=1,fl="";function ca(t,e){Xa[Za++]=ei,Xa[Za++]=ti,ti=t,ei=e}function vf(t,e,l){$e[ke++]=sl,$e[ke++]=fl,$e[ke++]=ia,ia=t;var a=sl;t=fl;var u=32-we(a)-1;a&=~(1<<u),l+=1;var i=32-we(e)+u;if(30<i){var s=u-u%5;i=(a&(1<<s)-1).toString(32),a>>=s,u-=s,sl=1<<32-we(e)+u|l<<u|a,fl=i+t}else sl=1<<i|l<<u|a,fl=t}function Ic(t){t.return!==null&&(ca(t,1),vf(t,1,0))}function Pc(t){for(;t===ti;)ti=Xa[--Za],Xa[Za]=null,ei=Xa[--Za],Xa[Za]=null;for(;t===ia;)ia=$e[--ke],$e[ke]=null,fl=$e[--ke],$e[ke]=null,sl=$e[--ke],$e[ke]=null}var ge=null,Gt=null,zt=!1,ra=null,Fe=!1,tr=Error(r(519));function oa(t){var e=Error(r(418,""));throw Xn(Ue(e,t)),tr}function yf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[pe]=t,e[ye]=a,l){case"dialog":St("cancel",e),St("close",e);break;case"iframe":case"object":case"embed":St("load",e);break;case"video":case"audio":for(l=0;l<mu.length;l++)St(mu[l],e);break;case"source":St("error",e);break;case"img":case"image":case"link":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"input":St("invalid",e),js(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Yu(e);break;case"select":St("invalid",e);break;case"textarea":St("invalid",e),Bs(e,a.value,a.defaultValue,a.children),Yu(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Uh(e.textContent,l)?(a.popover!=null&&(St("beforetoggle",e),St("toggle",e)),a.onScroll!=null&&St("scroll",e),a.onScrollEnd!=null&&St("scrollend",e),a.onClick!=null&&(e.onclick=Bi),e=!0):e=!1,e||oa(t)}function Af(t){for(ge=t.return;ge;)switch(ge.tag){case 5:case 13:Fe=!1;return;case 27:case 3:Fe=!0;return;default:ge=ge.return}}function Gn(t){if(t!==ge)return!1;if(!zt)return Af(t),zt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||go(t.type,t.memoizedProps)),l=!l),l&&Gt&&oa(t),Af(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Gt=Ve(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Gt=null}}else e===27?(e=Gt,Gl(t.type)?(t=xo,xo=null,Gt=t):Gt=e):Gt=ge?Ve(t.stateNode.nextSibling):null;return!0}function qn(){Gt=ge=null,zt=!1}function xf(){var t=ra;return t!==null&&(Ee===null?Ee=t:Ee.push.apply(Ee,t),ra=null),t}function Xn(t){ra===null?ra=[t]:ra.push(t)}var er=_(null),sa=null,dl=null;function Ol(t,e,l){B(er,e._currentValue),e._currentValue=l}function hl(t){t._currentValue=er.current,q(er)}function lr(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function ar(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var s=u.child;i=i.firstContext;t:for(;i!==null;){var f=i;i=u;for(var h=0;h<e.length;h++)if(f.context===e[h]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),lr(i.return,l,t),a||(s=null);break t}i=f.next}}else if(u.tag===18){if(s=u.return,s===null)throw Error(r(341));s.lanes|=l,i=s.alternate,i!==null&&(i.lanes|=l),lr(s,l,t),s=null}else s=u.child;if(s!==null)s.return=u;else for(s=u;s!==null;){if(s===t){s=null;break}if(u=s.sibling,u!==null){u.return=s.return,s=u;break}s=s.return}u=s}}function Zn(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var s=u.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var f=u.type;De(u.pendingProps.value,s.value)||(t!==null?t.push(f):t=[f])}}else if(u===ot.current){if(s=u.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(xu):t=[xu])}u=u.return}t!==null&&ar(e,t,l,a),e.flags|=262144}function li(t){for(t=t.firstContext;t!==null;){if(!De(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fa(t){sa=t,dl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function me(t){return Sf(sa,t)}function ai(t,e){return sa===null&&fa(t),Sf(t,e)}function Sf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},dl===null){if(t===null)throw Error(r(308));dl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else dl=dl.next=e;return l}var Ym=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Lm=n.unstable_scheduleCallback,Gm=n.unstable_NormalPriority,ee={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nr(){return{controller:new Ym,data:new Map,refCount:0}}function Vn(t){t.refCount--,t.refCount===0&&Lm(Gm,function(){t.controller.abort()})}var Kn=null,ur=0,Va=0,Ka=null;function qm(t,e){if(Kn===null){var l=Kn=[];ur=0,Va=co(),Ka={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ur++,e.then(Ef,Ef),e}function Ef(){if(--ur===0&&Kn!==null){Ka!==null&&(Ka.status="fulfilled");var t=Kn;Kn=null,Va=0,Ka=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Xm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var Tf=N.S;N.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&qm(t,e),Tf!==null&&Tf(t,e)};var da=_(null);function ir(){var t=da.current;return t!==null?t:$t.pooledCache}function ni(t,e){e===null?B(da,da.current):B(da,e.pool)}function wf(){var t=ir();return t===null?null:{parent:ee._currentValue,pool:t}}var Jn=Error(r(460)),Df=Error(r(474)),ui=Error(r(542)),cr={then:function(){}};function zf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ii(){}function Of(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(ii,ii),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t;default:if(typeof e.status=="string")e.then(ii,ii);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t}throw Wn=e,Jn}}var Wn=null;function Rf(){if(Wn===null)throw Error(r(459));var t=Wn;return Wn=null,t}function Mf(t){if(t===Jn||t===ui)throw Error(r(483))}var Rl=!1;function rr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function or(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ml(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Rt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Iu(t),bf(t,null,l),e}return Fu(t,a,e,l),Iu(t)}function Fn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ss(t,l)}}function sr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=s:i=i.next=s,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var fr=!1;function In(){if(fr){var t=Ka;if(t!==null)throw t}}function Pn(t,e,l,a){fr=!1;var u=t.updateQueue;Rl=!1;var i=u.firstBaseUpdate,s=u.lastBaseUpdate,f=u.shared.pending;if(f!==null){u.shared.pending=null;var h=f,E=h.next;h.next=null,s===null?i=E:s.next=E,s=h;var C=t.alternate;C!==null&&(C=C.updateQueue,f=C.lastBaseUpdate,f!==s&&(f===null?C.firstBaseUpdate=E:f.next=E,C.lastBaseUpdate=h))}if(i!==null){var U=u.baseState;s=0,C=E=h=null,f=i;do{var T=f.lane&-536870913,w=T!==f.lane;if(w?(Tt&T)===T:(a&T)===T){T!==0&&T===Va&&(fr=!0),C!==null&&(C=C.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var st=t,ct=f;T=e;var _t=l;switch(ct.tag){case 1:if(st=ct.payload,typeof st=="function"){U=st.call(_t,U,T);break t}U=st;break t;case 3:st.flags=st.flags&-65537|128;case 0:if(st=ct.payload,T=typeof st=="function"?st.call(_t,U,T):st,T==null)break t;U=z({},U,T);break t;case 2:Rl=!0}}T=f.callback,T!==null&&(t.flags|=64,w&&(t.flags|=8192),w=u.callbacks,w===null?u.callbacks=[T]:w.push(T))}else w={lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},C===null?(E=C=w,h=U):C=C.next=w,s|=T;if(f=f.next,f===null){if(f=u.shared.pending,f===null)break;w=f,f=w.next,w.next=null,u.lastBaseUpdate=w,u.shared.pending=null}}while(!0);C===null&&(h=U),u.baseState=h,u.firstBaseUpdate=E,u.lastBaseUpdate=C,i===null&&(u.shared.lanes=0),kl|=s,t.lanes=s,t.memoizedState=U}}function Nf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Cf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Nf(l[t],e)}var Ja=_(null),ci=_(0);function jf(t,e){t=Al,B(ci,t),B(Ja,e),Al=t|e.baseLanes}function dr(){B(ci,Al),B(Ja,Ja.current)}function hr(){Al=ci.current,q(Ja),q(ci)}var Cl=0,gt=null,Ct=null,It=null,ri=!1,Wa=!1,ha=!1,oi=0,tu=0,Fa=null,Zm=0;function Jt(){throw Error(r(321))}function pr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!De(t[l],e[l]))return!1;return!0}function mr(t,e,l,a,u,i){return Cl=i,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?bd:gd,ha=!1,i=l(a,u),ha=!1,Wa&&(i=Bf(e,l,a,u)),_f(t),i}function _f(t){N.H=mi;var e=Ct!==null&&Ct.next!==null;if(Cl=0,It=Ct=gt=null,ri=!1,tu=0,Fa=null,e)throw Error(r(300));t===null||ne||(t=t.dependencies,t!==null&&li(t)&&(ne=!0))}function Bf(t,e,l,a){gt=t;var u=0;do{if(Wa&&(Fa=null),tu=0,Wa=!1,25<=u)throw Error(r(301));if(u+=1,It=Ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=Pm,i=e(l,a)}while(Wa);return i}function Vm(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?eu(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(gt.flags|=1024),e}function br(){var t=oi!==0;return oi=0,t}function gr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function vr(t){if(ri){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ri=!1}Cl=0,It=Ct=gt=null,Wa=!1,tu=oi=0,Fa=null}function xe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=t:It=It.next=t,It}function Pt(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?gt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?gt.memoizedState=It=t:It=It.next=t}return It}function yr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eu(t){var e=tu;return tu+=1,Fa===null&&(Fa=[]),t=Of(Fa,t,e),e=gt,(It===null?e.memoizedState:It.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?bd:gd),t}function si(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eu(t);if(t.$$typeof===Y)return me(t)}throw Error(r(438,String(t)))}function Ar(t){var e=null,l=gt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=gt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=yr(),gt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Zt;return e.index++,l}function pl(t,e){return typeof e=="function"?e(t):e}function fi(t){var e=Pt();return xr(e,Ct,t)}function xr(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var s=u.next;u.next=i.next,i.next=s}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var f=s=null,h=null,E=e,C=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(Tt&U)===U:(Cl&U)===U){var T=E.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===Va&&(C=!0);else if((Cl&T)===T){E=E.next,T===Va&&(C=!0);continue}else U={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(f=h=U,s=i):h=h.next=U,gt.lanes|=T,kl|=T;U=E.action,ha&&l(i,U),i=E.hasEagerState?E.eagerState:l(i,U)}else T={lane:U,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(f=h=T,s=i):h=h.next=T,gt.lanes|=U,kl|=U;E=E.next}while(E!==null&&E!==e);if(h===null?s=i:h.next=f,!De(i,t.memoizedState)&&(ne=!0,C&&(l=Ka,l!==null)))throw l;t.memoizedState=i,t.baseState=s,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Sr(t){var e=Pt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var s=u=u.next;do i=t(i,s.action),s=s.next;while(s!==u);De(i,e.memoizedState)||(ne=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Uf(t,e,l){var a=gt,u=Pt(),i=zt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var s=!De((Ct||u).memoizedState,l);s&&(u.memoizedState=l,ne=!0),u=u.queue;var f=kf.bind(null,a,u,t);if(lu(2048,8,f,[t]),u.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Ia(9,di(),$f.bind(null,a,u,l,e),null),$t===null)throw Error(r(349));i||(Cl&124)!==0||Hf(a,e,l)}return l}function Hf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=gt.updateQueue,e===null?(e=yr(),gt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function $f(t,e,l,a){e.value=l,e.getSnapshot=a,Qf(e)&&Yf(t)}function kf(t,e,l){return l(function(){Qf(e)&&Yf(t)})}function Qf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!De(t,l)}catch{return!0}}function Yf(t){var e=Ga(t,2);e!==null&&Ce(e,t,2)}function Er(t){var e=xe();if(typeof t=="function"){var l=t;if(t=l(),ha){wl(!0);try{l()}finally{wl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:t},e}function Lf(t,e,l,a){return t.baseState=l,xr(t,Ct,typeof a=="function"?a:pl)}function Km(t,e,l,a,u){if(pi(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};N.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Gf(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Gf(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=N.T,s={};N.T=s;try{var f=l(u,a),h=N.S;h!==null&&h(s,f),qf(t,e,f)}catch(E){Tr(t,e,E)}finally{N.T=i}}else try{i=l(u,a),qf(t,e,i)}catch(E){Tr(t,e,E)}}function qf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Xf(t,e,a)},function(a){return Tr(t,e,a)}):Xf(t,e,l)}function Xf(t,e,l){e.status="fulfilled",e.value=l,Zf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Gf(t,l)))}function Tr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Zf(e),e=e.next;while(e!==a)}t.action=null}function Zf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Vf(t,e){return e}function Kf(t,e){if(zt){var l=$t.formState;if(l!==null){t:{var a=gt;if(zt){if(Gt){e:{for(var u=Gt,i=Fe;u.nodeType!==8;){if(!i){u=null;break e}if(u=Ve(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){Gt=Ve(u.nextSibling),a=u.data==="F!";break t}}oa(a)}a=!1}a&&(e=l[0])}}return l=xe(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vf,lastRenderedState:e},l.queue=a,l=hd.bind(null,gt,a),a.dispatch=l,a=Er(!1),i=Rr.bind(null,gt,!1,a.queue),a=xe(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Km.bind(null,gt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function Jf(t){var e=Pt();return Wf(e,Ct,t)}function Wf(t,e,l){if(e=xr(t,e,Vf)[0],t=fi(pl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=eu(e)}catch(s){throw s===Jn?ui:s}else a=e;e=Pt();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(gt.flags|=2048,Ia(9,di(),Jm.bind(null,u,l),null)),[a,i,t]}function Jm(t,e){t.action=e}function Ff(t){var e=Pt(),l=Ct;if(l!==null)return Wf(e,l,t);Pt(),e=e.memoizedState,l=Pt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ia(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=gt.updateQueue,e===null&&(e=yr(),gt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function di(){return{destroy:void 0,resource:void 0}}function If(){return Pt().memoizedState}function hi(t,e,l,a){var u=xe();a=a===void 0?null:a,gt.flags|=t,u.memoizedState=Ia(1|e,di(),l,a)}function lu(t,e,l,a){var u=Pt();a=a===void 0?null:a;var i=u.memoizedState.inst;Ct!==null&&a!==null&&pr(a,Ct.memoizedState.deps)?u.memoizedState=Ia(e,i,l,a):(gt.flags|=t,u.memoizedState=Ia(1|e,i,l,a))}function Pf(t,e){hi(8390656,8,t,e)}function td(t,e){lu(2048,8,t,e)}function ed(t,e){return lu(4,2,t,e)}function ld(t,e){return lu(4,4,t,e)}function ad(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nd(t,e,l){l=l!=null?l.concat([t]):null,lu(4,4,ad.bind(null,e,t),l)}function wr(){}function ud(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&pr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function id(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&pr(e,a[1]))return a[0];if(a=t(),ha){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a}function Dr(t,e,l){return l===void 0||(Cl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=oh(),gt.lanes|=t,kl|=t,l)}function cd(t,e,l,a){return De(l,e)?l:Ja.current!==null?(t=Dr(t,l,a),De(t,e)||(ne=!0),t):(Cl&42)===0?(ne=!0,t.memoizedState=l):(t=oh(),gt.lanes|=t,kl|=t,e)}function rd(t,e,l,a,u){var i=X.p;X.p=i!==0&&8>i?i:8;var s=N.T,f={};N.T=f,Rr(t,!1,e,l);try{var h=u(),E=N.S;if(E!==null&&E(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=Xm(h,a);au(t,e,C,Ne(t))}else au(t,e,a,Ne(t))}catch(U){au(t,e,{then:function(){},status:"rejected",reason:U},Ne())}finally{X.p=i,N.T=s}}function Wm(){}function zr(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=od(t).queue;rd(t,u,e,Z,l===null?Wm:function(){return sd(t),l(a)})}function od(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:Z},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function sd(t){var e=od(t).next.queue;au(t,e,{},Ne())}function Or(){return me(xu)}function fd(){return Pt().memoizedState}function dd(){return Pt().memoizedState}function Fm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ne();t=Ml(l);var a=Nl(e,t,l);a!==null&&(Ce(a,e,l),Fn(a,e,l)),e={cache:nr()},t.payload=e;return}e=e.return}}function Im(t,e,l){var a=Ne();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},pi(t)?pd(e,l):(l=Kc(t,e,l,a),l!==null&&(Ce(l,t,a),md(l,e,a)))}function hd(t,e,l){var a=Ne();au(t,e,l,a)}function au(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(pi(t))pd(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,f=i(s,l);if(u.hasEagerState=!0,u.eagerState=f,De(f,s))return Fu(t,e,u,0),$t===null&&Wu(),!1}catch{}finally{}if(l=Kc(t,e,u,a),l!==null)return Ce(l,t,a),md(l,e,a),!0}return!1}function Rr(t,e,l,a){if(a={lane:2,revertLane:co(),action:a,hasEagerState:!1,eagerState:null,next:null},pi(t)){if(e)throw Error(r(479))}else e=Kc(t,l,a,2),e!==null&&Ce(e,t,2)}function pi(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function pd(t,e){Wa=ri=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function md(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ss(t,l)}}var mi={readContext:me,use:si,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},bd={readContext:me,use:si,useCallback:function(t,e){return xe().memoizedState=[t,e===void 0?null:e],t},useContext:me,useEffect:Pf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,hi(4194308,4,ad.bind(null,e,t),l)},useLayoutEffect:function(t,e){return hi(4194308,4,t,e)},useInsertionEffect:function(t,e){hi(4,2,t,e)},useMemo:function(t,e){var l=xe();e=e===void 0?null:e;var a=t();if(ha){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=xe();if(l!==void 0){var u=l(e);if(ha){wl(!0);try{l(e)}finally{wl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Im.bind(null,gt,t),[a.memoizedState,t]},useRef:function(t){var e=xe();return t={current:t},e.memoizedState=t},useState:function(t){t=Er(t);var e=t.queue,l=hd.bind(null,gt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:wr,useDeferredValue:function(t,e){var l=xe();return Dr(l,t,e)},useTransition:function(){var t=Er(!1);return t=rd.bind(null,gt,t.queue,!0,!1),xe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=gt,u=xe();if(zt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),$t===null)throw Error(r(349));(Tt&124)!==0||Hf(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,Pf(kf.bind(null,a,i,t),[t]),a.flags|=2048,Ia(9,di(),$f.bind(null,a,i,l,e),null),l},useId:function(){var t=xe(),e=$t.identifierPrefix;if(zt){var l=fl,a=sl;l=(a&~(1<<32-we(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=oi++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Zm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Or,useFormState:Kf,useActionState:Kf,useOptimistic:function(t){var e=xe();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Rr.bind(null,gt,!0,l),l.dispatch=e,[t,e]},useMemoCache:Ar,useCacheRefresh:function(){return xe().memoizedState=Fm.bind(null,gt)}},gd={readContext:me,use:si,useCallback:ud,useContext:me,useEffect:td,useImperativeHandle:nd,useInsertionEffect:ed,useLayoutEffect:ld,useMemo:id,useReducer:fi,useRef:If,useState:function(){return fi(pl)},useDebugValue:wr,useDeferredValue:function(t,e){var l=Pt();return cd(l,Ct.memoizedState,t,e)},useTransition:function(){var t=fi(pl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:eu(t),e]},useSyncExternalStore:Uf,useId:fd,useHostTransitionStatus:Or,useFormState:Jf,useActionState:Jf,useOptimistic:function(t,e){var l=Pt();return Lf(l,Ct,t,e)},useMemoCache:Ar,useCacheRefresh:dd},Pm={readContext:me,use:si,useCallback:ud,useContext:me,useEffect:td,useImperativeHandle:nd,useInsertionEffect:ed,useLayoutEffect:ld,useMemo:id,useReducer:Sr,useRef:If,useState:function(){return Sr(pl)},useDebugValue:wr,useDeferredValue:function(t,e){var l=Pt();return Ct===null?Dr(l,t,e):cd(l,Ct.memoizedState,t,e)},useTransition:function(){var t=Sr(pl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:eu(t),e]},useSyncExternalStore:Uf,useId:fd,useHostTransitionStatus:Or,useFormState:Ff,useActionState:Ff,useOptimistic:function(t,e){var l=Pt();return Ct!==null?Lf(l,Ct,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ar,useCacheRefresh:dd},Pa=null,nu=0;function bi(t){var e=nu;return nu+=1,Pa===null&&(Pa=[]),Of(Pa,t,e)}function uu(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function gi(t,e){throw e.$$typeof===M?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vd(t){var e=t._init;return e(t._payload)}function yd(t){function e(A,g){if(t){var S=A.deletions;S===null?(A.deletions=[g],A.flags|=16):S.push(g)}}function l(A,g){if(!t)return null;for(;g!==null;)e(A,g),g=g.sibling;return null}function a(A){for(var g=new Map;A!==null;)A.key!==null?g.set(A.key,A):g.set(A.index,A),A=A.sibling;return g}function u(A,g){return A=ol(A,g),A.index=0,A.sibling=null,A}function i(A,g,S){return A.index=S,t?(S=A.alternate,S!==null?(S=S.index,S<g?(A.flags|=67108866,g):S):(A.flags|=67108866,g)):(A.flags|=1048576,g)}function s(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function f(A,g,S,j){return g===null||g.tag!==6?(g=Wc(S,A.mode,j),g.return=A,g):(g=u(g,S),g.return=A,g)}function h(A,g,S,j){var nt=S.type;return nt===L?C(A,g,S.props.children,j,S.key):g!==null&&(g.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===vt&&vd(nt)===g.type)?(g=u(g,S.props),uu(g,S),g.return=A,g):(g=Pu(S.type,S.key,S.props,null,A.mode,j),uu(g,S),g.return=A,g)}function E(A,g,S,j){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Fc(S,A.mode,j),g.return=A,g):(g=u(g,S.children||[]),g.return=A,g)}function C(A,g,S,j,nt){return g===null||g.tag!==7?(g=ua(S,A.mode,j,nt),g.return=A,g):(g=u(g,S),g.return=A,g)}function U(A,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Wc(""+g,A.mode,S),g.return=A,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case H:return S=Pu(g.type,g.key,g.props,null,A.mode,S),uu(S,g),S.return=A,S;case K:return g=Fc(g,A.mode,S),g.return=A,g;case vt:var j=g._init;return g=j(g._payload),U(A,g,S)}if(yt(g)||mt(g))return g=ua(g,A.mode,S,null),g.return=A,g;if(typeof g.then=="function")return U(A,bi(g),S);if(g.$$typeof===Y)return U(A,ai(A,g),S);gi(A,g)}return null}function T(A,g,S,j){var nt=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return nt!==null?null:f(A,g,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case H:return S.key===nt?h(A,g,S,j):null;case K:return S.key===nt?E(A,g,S,j):null;case vt:return nt=S._init,S=nt(S._payload),T(A,g,S,j)}if(yt(S)||mt(S))return nt!==null?null:C(A,g,S,j,null);if(typeof S.then=="function")return T(A,g,bi(S),j);if(S.$$typeof===Y)return T(A,g,ai(A,S),j);gi(A,S)}return null}function w(A,g,S,j,nt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return A=A.get(S)||null,f(g,A,""+j,nt);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return A=A.get(j.key===null?S:j.key)||null,h(g,A,j,nt);case K:return A=A.get(j.key===null?S:j.key)||null,E(g,A,j,nt);case vt:var At=j._init;return j=At(j._payload),w(A,g,S,j,nt)}if(yt(j)||mt(j))return A=A.get(S)||null,C(g,A,j,nt,null);if(typeof j.then=="function")return w(A,g,S,bi(j),nt);if(j.$$typeof===Y)return w(A,g,S,ai(g,j),nt);gi(g,j)}return null}function st(A,g,S,j){for(var nt=null,At=null,ut=g,rt=g=0,ie=null;ut!==null&&rt<S.length;rt++){ut.index>rt?(ie=ut,ut=null):ie=ut.sibling;var Dt=T(A,ut,S[rt],j);if(Dt===null){ut===null&&(ut=ie);break}t&&ut&&Dt.alternate===null&&e(A,ut),g=i(Dt,g,rt),At===null?nt=Dt:At.sibling=Dt,At=Dt,ut=ie}if(rt===S.length)return l(A,ut),zt&&ca(A,rt),nt;if(ut===null){for(;rt<S.length;rt++)ut=U(A,S[rt],j),ut!==null&&(g=i(ut,g,rt),At===null?nt=ut:At.sibling=ut,At=ut);return zt&&ca(A,rt),nt}for(ut=a(ut);rt<S.length;rt++)ie=w(ut,A,rt,S[rt],j),ie!==null&&(t&&ie.alternate!==null&&ut.delete(ie.key===null?rt:ie.key),g=i(ie,g,rt),At===null?nt=ie:At.sibling=ie,At=ie);return t&&ut.forEach(function(Kl){return e(A,Kl)}),zt&&ca(A,rt),nt}function ct(A,g,S,j){if(S==null)throw Error(r(151));for(var nt=null,At=null,ut=g,rt=g=0,ie=null,Dt=S.next();ut!==null&&!Dt.done;rt++,Dt=S.next()){ut.index>rt?(ie=ut,ut=null):ie=ut.sibling;var Kl=T(A,ut,Dt.value,j);if(Kl===null){ut===null&&(ut=ie);break}t&&ut&&Kl.alternate===null&&e(A,ut),g=i(Kl,g,rt),At===null?nt=Kl:At.sibling=Kl,At=Kl,ut=ie}if(Dt.done)return l(A,ut),zt&&ca(A,rt),nt;if(ut===null){for(;!Dt.done;rt++,Dt=S.next())Dt=U(A,Dt.value,j),Dt!==null&&(g=i(Dt,g,rt),At===null?nt=Dt:At.sibling=Dt,At=Dt);return zt&&ca(A,rt),nt}for(ut=a(ut);!Dt.done;rt++,Dt=S.next())Dt=w(ut,A,rt,Dt.value,j),Dt!==null&&(t&&Dt.alternate!==null&&ut.delete(Dt.key===null?rt:Dt.key),g=i(Dt,g,rt),At===null?nt=Dt:At.sibling=Dt,At=Dt);return t&&ut.forEach(function(tg){return e(A,tg)}),zt&&ca(A,rt),nt}function _t(A,g,S,j){if(typeof S=="object"&&S!==null&&S.type===L&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case H:t:{for(var nt=S.key;g!==null;){if(g.key===nt){if(nt=S.type,nt===L){if(g.tag===7){l(A,g.sibling),j=u(g,S.props.children),j.return=A,A=j;break t}}else if(g.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===vt&&vd(nt)===g.type){l(A,g.sibling),j=u(g,S.props),uu(j,S),j.return=A,A=j;break t}l(A,g);break}else e(A,g);g=g.sibling}S.type===L?(j=ua(S.props.children,A.mode,j,S.key),j.return=A,A=j):(j=Pu(S.type,S.key,S.props,null,A.mode,j),uu(j,S),j.return=A,A=j)}return s(A);case K:t:{for(nt=S.key;g!==null;){if(g.key===nt)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){l(A,g.sibling),j=u(g,S.children||[]),j.return=A,A=j;break t}else{l(A,g);break}else e(A,g);g=g.sibling}j=Fc(S,A.mode,j),j.return=A,A=j}return s(A);case vt:return nt=S._init,S=nt(S._payload),_t(A,g,S,j)}if(yt(S))return st(A,g,S,j);if(mt(S)){if(nt=mt(S),typeof nt!="function")throw Error(r(150));return S=nt.call(S),ct(A,g,S,j)}if(typeof S.then=="function")return _t(A,g,bi(S),j);if(S.$$typeof===Y)return _t(A,g,ai(A,S),j);gi(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(l(A,g.sibling),j=u(g,S),j.return=A,A=j):(l(A,g),j=Wc(S,A.mode,j),j.return=A,A=j),s(A)):l(A,g)}return function(A,g,S,j){try{nu=0;var nt=_t(A,g,S,j);return Pa=null,nt}catch(ut){if(ut===Jn||ut===ui)throw ut;var At=ze(29,ut,null,A.mode);return At.lanes=j,At.return=A,At}finally{}}}var tn=yd(!0),Ad=yd(!1),Qe=_(null),Ie=null;function jl(t){var e=t.alternate;B(le,le.current&1),B(Qe,t),Ie===null&&(e===null||Ja.current!==null||e.memoizedState!==null)&&(Ie=t)}function xd(t){if(t.tag===22){if(B(le,le.current),B(Qe,t),Ie===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ie=t)}}else _l()}function _l(){B(le,le.current),B(Qe,Qe.current)}function ml(t){q(Qe),Ie===t&&(Ie=null),q(le)}var le=_(0);function vi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Ao(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Mr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:z({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Nr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ne(),u=Ml(a);u.payload=e,l!=null&&(u.callback=l),e=Nl(t,u,a),e!==null&&(Ce(e,t,a),Fn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ne(),u=Ml(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=Nl(t,u,a),e!==null&&(Ce(e,t,a),Fn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ne(),a=Ml(l);a.tag=2,e!=null&&(a.callback=e),e=Nl(t,a,l),e!==null&&(Ce(e,t,l),Fn(e,t,l))}};function Sd(t,e,l,a,u,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,s):e.prototype&&e.prototype.isPureReactComponent?!Yn(l,a)||!Yn(u,i):!0}function Ed(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Nr.enqueueReplaceState(e,e.state,null)}function pa(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=z({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var yi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Td(t){yi(t)}function wd(t){console.error(t)}function Dd(t){yi(t)}function Ai(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function zd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cr(t,e,l){return l=Ml(l),l.tag=3,l.payload={element:null},l.callback=function(){Ai(t,e)},l}function Od(t){return t=Ml(t),t.tag=3,t}function Rd(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){zd(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zd(e,l,a),typeof u!="function"&&(Ql===null?Ql=new Set([this]):Ql.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function tb(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Zn(e,l,u,!0),l=Qe.current,l!==null){switch(l.tag){case 13:return Ie===null?lo():l.alternate===null&&qt===0&&(qt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===cr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),no(t,a,u)),!1;case 22:return l.flags|=65536,a===cr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),no(t,a,u)),!1}throw Error(r(435,l.tag))}return no(t,a,u),lo(),!1}if(zt)return e=Qe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==tr&&(t=Error(r(422),{cause:a}),Xn(Ue(t,l)))):(a!==tr&&(e=Error(r(423),{cause:a}),Xn(Ue(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Ue(a,l),u=Cr(t.stateNode,a,u),sr(t,u),qt!==4&&(qt=2)),!1;var i=Error(r(520),{cause:a});if(i=Ue(i,l),du===null?du=[i]:du.push(i),qt!==4&&(qt=2),e===null)return!0;a=Ue(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=Cr(l.stateNode,a,t),sr(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ql===null||!Ql.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Od(u),Rd(u,t,l,a),sr(l,u),!1}l=l.return}while(l!==null);return!1}var Md=Error(r(461)),ne=!1;function se(t,e,l,a){e.child=t===null?Ad(e,null,l,a):tn(e,t.child,l,a)}function Nd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return fa(e),a=mr(t,e,l,s,i,u),f=br(),t!==null&&!ne?(gr(t,e,u),bl(t,e,u)):(zt&&f&&Ic(e),e.flags|=1,se(t,e,a,u),e.child)}function Cd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Jc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,jd(t,e,i,a,u)):(t=Pu(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Qr(t,u)){var s=i.memoizedProps;if(l=l.compare,l=l!==null?l:Yn,l(s,a)&&t.ref===e.ref)return bl(t,e,u)}return e.flags|=1,t=ol(i,a),t.ref=e.ref,t.return=e,e.child=t}function jd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(Yn(i,a)&&t.ref===e.ref)if(ne=!1,e.pendingProps=a=i,Qr(t,u))(t.flags&131072)!==0&&(ne=!0);else return e.lanes=t.lanes,bl(t,e,u)}return jr(t,e,l,a,u)}function _d(t,e,l){var a=e.pendingProps,u=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(u=e.child=t.child,i=0;u!==null;)i=i|u.lanes|u.childLanes,u=u.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Bd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ni(e,i!==null?i.cachePool:null),i!==null?jf(e,i):dr(),xd(e);else return e.lanes=e.childLanes=536870912,Bd(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(ni(e,i.cachePool),jf(e,i),_l(),e.memoizedState=null):(t!==null&&ni(e,null),dr(),_l());return se(t,e,u,l),e.child}function Bd(t,e,l,a){var u=ir();return u=u===null?null:{parent:ee._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&ni(e,null),dr(),xd(e),t!==null&&Zn(t,e,a,!0),null}function xi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function jr(t,e,l,a,u){return fa(e),l=mr(t,e,l,a,void 0,u),a=br(),t!==null&&!ne?(gr(t,e,u),bl(t,e,u)):(zt&&a&&Ic(e),e.flags|=1,se(t,e,l,u),e.child)}function Ud(t,e,l,a,u,i){return fa(e),e.updateQueue=null,l=Bf(e,a,l,u),_f(t),a=br(),t!==null&&!ne?(gr(t,e,i),bl(t,e,i)):(zt&&a&&Ic(e),e.flags|=1,se(t,e,l,i),e.child)}function Hd(t,e,l,a,u){if(fa(e),e.stateNode===null){var i=qa,s=l.contextType;typeof s=="object"&&s!==null&&(i=me(s)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Nr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},rr(e),s=l.contextType,i.context=typeof s=="object"&&s!==null?me(s):qa,i.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(Mr(e,l,s,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Nr.enqueueReplaceState(i,i.state,null),Pn(e,a,i,u),In(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var f=e.memoizedProps,h=pa(l,f);i.props=h;var E=i.context,C=l.contextType;s=qa,typeof C=="object"&&C!==null&&(s=me(C));var U=l.getDerivedStateFromProps;C=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||E!==s)&&Ed(e,i,a,s),Rl=!1;var T=e.memoizedState;i.state=T,Pn(e,a,i,u),In(),E=e.memoizedState,f||T!==E||Rl?(typeof U=="function"&&(Mr(e,l,U,a),E=e.memoizedState),(h=Rl||Sd(e,l,h,a,T,E,s))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),i.props=a,i.state=E,i.context=s,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,or(t,e),s=e.memoizedProps,C=pa(l,s),i.props=C,U=e.pendingProps,T=i.context,E=l.contextType,h=qa,typeof E=="object"&&E!==null&&(h=me(E)),f=l.getDerivedStateFromProps,(E=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==U||T!==h)&&Ed(e,i,a,h),Rl=!1,T=e.memoizedState,i.state=T,Pn(e,a,i,u),In();var w=e.memoizedState;s!==U||T!==w||Rl||t!==null&&t.dependencies!==null&&li(t.dependencies)?(typeof f=="function"&&(Mr(e,l,f,a),w=e.memoizedState),(C=Rl||Sd(e,l,C,a,T,w,h)||t!==null&&t.dependencies!==null&&li(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,w,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,w,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=w),i.props=a,i.state=w,i.context=h,a=C):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,xi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=tn(e,t.child,null,u),e.child=tn(e,null,l,u)):se(t,e,l,u),e.memoizedState=i.state,t=e.child):t=bl(t,e,u),t}function $d(t,e,l,a){return qn(),e.flags|=256,se(t,e,l,a),e.child}var _r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Br(t){return{baseLanes:t,cachePool:wf()}}function Ur(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ye),t}function kd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),s&&(u=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(zt){if(u?jl(e):_l(),zt){var f=Gt,h;if(h=f){t:{for(h=f,f=Fe;h.nodeType!==8;){if(!f){f=null;break t}if(h=Ve(h.nextSibling),h===null){f=null;break t}}f=h}f!==null?(e.memoizedState={dehydrated:f,treeContext:ia!==null?{id:sl,overflow:fl}:null,retryLane:536870912,hydrationErrors:null},h=ze(18,null,null,0),h.stateNode=f,h.return=e,e.child=h,ge=e,Gt=null,h=!0):h=!1}h||oa(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Ao(f)?e.lanes=32:e.lanes=536870912,null;ml(e)}return f=a.children,a=a.fallback,u?(_l(),u=e.mode,f=Si({mode:"hidden",children:f},u),a=ua(a,u,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,u=e.child,u.memoizedState=Br(l),u.childLanes=Ur(t,s,l),e.memoizedState=_r,a):(jl(e),Hr(e,f))}if(h=t.memoizedState,h!==null&&(f=h.dehydrated,f!==null)){if(i)e.flags&256?(jl(e),e.flags&=-257,e=$r(t,e,l)):e.memoizedState!==null?(_l(),e.child=t.child,e.flags|=128,e=null):(_l(),u=a.fallback,f=e.mode,a=Si({mode:"visible",children:a.children},f),u=ua(u,f,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,tn(e,t.child,null,l),a=e.child,a.memoizedState=Br(l),a.childLanes=Ur(t,s,l),e.memoizedState=_r,e=u);else if(jl(e),Ao(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var E=s.dgst;s=E,a=Error(r(419)),a.stack="",a.digest=s,Xn({value:a,source:null,stack:null}),e=$r(t,e,l)}else if(ne||Zn(t,e,l,!1),s=(l&t.childLanes)!==0,ne||s){if(s=$t,s!==null&&(a=l&-l,a=(a&42)!==0?1:Ac(a),a=(a&(s.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane))throw h.retryLane=a,Ga(t,a),Ce(s,t,a),Md;f.data==="$?"||lo(),e=$r(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,Gt=Ve(f.nextSibling),ge=e,zt=!0,ra=null,Fe=!1,t!==null&&($e[ke++]=sl,$e[ke++]=fl,$e[ke++]=ia,sl=t.id,fl=t.overflow,ia=e),e=Hr(e,a.children),e.flags|=4096);return e}return u?(_l(),u=a.fallback,f=e.mode,h=t.child,E=h.sibling,a=ol(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,E!==null?u=ol(E,u):(u=ua(u,f,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,f=t.child.memoizedState,f===null?f=Br(l):(h=f.cachePool,h!==null?(E=ee._currentValue,h=h.parent!==E?{parent:E,pool:E}:h):h=wf(),f={baseLanes:f.baseLanes|l,cachePool:h}),u.memoizedState=f,u.childLanes=Ur(t,s,l),e.memoizedState=_r,a):(jl(e),l=t.child,t=l.sibling,l=ol(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function Hr(t,e){return e=Si({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Si(t,e){return t=ze(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function $r(t,e,l){return tn(e,t.child,null,l),t=Hr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),lr(t.return,e,l)}function kr(t,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u)}function Yd(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;if(se(t,e,a.children,l),a=le.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,l,e);else if(t.tag===19)Qd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(B(le,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&vi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),kr(e,!1,u,l,i);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&vi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}kr(e,!0,l,null,i);break;case"together":kr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),kl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Zn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=ol(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ol(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Qr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&li(t)))}function eb(t,e,l){switch(e.tag){case 3:dt(e,e.stateNode.containerInfo),Ol(e,ee,t.memoizedState.cache),qn();break;case 27:case 5:ft(e);break;case 4:dt(e,e.stateNode.containerInfo);break;case 10:Ol(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(jl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?kd(t,e,l):(jl(e),t=bl(t,e,l),t!==null?t.sibling:null);jl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Zn(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Yd(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),B(le,le.current),a)break;return null;case 22:case 23:return e.lanes=0,_d(t,e,l);case 24:Ol(e,ee,t.memoizedState.cache)}return bl(t,e,l)}function Ld(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ne=!0;else{if(!Qr(t,l)&&(e.flags&128)===0)return ne=!1,eb(t,e,l);ne=(t.flags&131072)!==0}else ne=!1,zt&&(e.flags&1048576)!==0&&vf(e,ei,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")Jc(a)?(t=pa(a,t),e.tag=1,e=Hd(null,e,a,t,l)):(e.tag=0,e=jr(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===W){e.tag=11,e=Nd(null,e,a,t,l);break t}else if(u===tt){e.tag=14,e=Cd(null,e,a,t,l);break t}}throw e=Ut(a)||a,Error(r(306,e,""))}}return e;case 0:return jr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=pa(a,e.pendingProps),Hd(t,e,a,u,l);case 3:t:{if(dt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,or(t,e),Pn(e,a,null,l);var s=e.memoizedState;if(a=s.cache,Ol(e,ee,a),a!==i.cache&&ar(e,[ee],l,!0),In(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=$d(t,e,a,l);break t}else if(a!==u){u=Ue(Error(r(424)),e),Xn(u),e=$d(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Gt=Ve(t.firstChild),ge=e,zt=!0,ra=null,Fe=!0,l=Ad(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(qn(),a===u){e=bl(t,e,l);break t}se(t,e,a,l)}e=e.child}return e;case 26:return xi(t,e),t===null?(l=Zh(e.type,null,e.pendingProps,null))?e.memoizedState=l:zt||(l=e.type,t=e.pendingProps,a=Ui(F.current).createElement(l),a[pe]=e,a[ye]=t,de(a,l,t),ae(a),e.stateNode=a):e.memoizedState=Zh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ft(e),t===null&&zt&&(a=e.stateNode=Gh(e.type,e.pendingProps,F.current),ge=e,Fe=!0,u=Gt,Gl(e.type)?(xo=u,Gt=Ve(a.firstChild)):Gt=u),se(t,e,e.pendingProps.children,l),xi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&zt&&((u=a=Gt)&&(a=Rb(a,e.type,e.pendingProps,Fe),a!==null?(e.stateNode=a,ge=e,Gt=Ve(a.firstChild),Fe=!1,u=!0):u=!1),u||oa(e)),ft(e),u=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,go(u,i)?a=null:s!==null&&go(u,s)&&(e.flags|=32),e.memoizedState!==null&&(u=mr(t,e,Vm,null,null,l),xu._currentValue=u),xi(t,e),se(t,e,a,l),e.child;case 6:return t===null&&zt&&((t=l=Gt)&&(l=Mb(l,e.pendingProps,Fe),l!==null?(e.stateNode=l,ge=e,Gt=null,t=!0):t=!1),t||oa(e)),null;case 13:return kd(t,e,l);case 4:return dt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=tn(e,null,a,l):se(t,e,a,l),e.child;case 11:return Nd(t,e,e.type,e.pendingProps,l);case 7:return se(t,e,e.pendingProps,l),e.child;case 8:return se(t,e,e.pendingProps.children,l),e.child;case 12:return se(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Ol(e,e.type,a.value),se(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,fa(e),u=me(u),a=a(u),e.flags|=1,se(t,e,a,l),e.child;case 14:return Cd(t,e,e.type,e.pendingProps,l);case 15:return jd(t,e,e.type,e.pendingProps,l);case 19:return Yd(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=Si(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=ol(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return _d(t,e,l);case 24:return fa(e),a=me(ee),t===null?(u=ir(),u===null&&(u=$t,i=nr(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},rr(e),Ol(e,ee,u)):((t.lanes&l)!==0&&(or(t,e),Pn(e,null,null,l),In()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Ol(e,ee,a)):(a=i.cache,Ol(e,ee,a),a!==u.cache&&ar(e,[ee],l,!0))),se(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function gl(t){t.flags|=4}function Gd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fh(e)){if(e=Qe.current,e!==null&&((Tt&4194048)===Tt?Ie!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||e!==Ie))throw Wn=cr,Df;t.flags|=8192}}function Ei(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?As():536870912,t.lanes|=e,nn|=e)}function iu(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function lb(t,e,l){var a=e.pendingProps;switch(Pc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return Lt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),hl(ee),k(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Gn(e)?gl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xf())),Lt(e),null;case 26:return l=e.memoizedState,t===null?(gl(e),l!==null?(Lt(e),Gd(e,l)):(Lt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(gl(e),Lt(e),Gd(e,l)):(Lt(e),e.flags&=-16777217):(t.memoizedProps!==a&&gl(e),Lt(e),e.flags&=-16777217),null;case 27:ht(e),l=F.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&gl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Lt(e),null}t=Q.current,Gn(e)?yf(e):(t=Gh(u,a,l),e.stateNode=t,gl(e))}return Lt(e),null;case 5:if(ht(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&gl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Lt(e),null}if(t=Q.current,Gn(e))yf(e);else{switch(u=Ui(F.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[pe]=e,t[ye]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(de(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&gl(e)}}return Lt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&gl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=F.current,Gn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=ge,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[pe]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Uh(t.nodeValue,l)),t||oa(e)}else t=Ui(t).createTextNode(a),t[pe]=e,e.stateNode=t}return Lt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Gn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[pe]=e}else qn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Lt(e),u=!1}else u=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(ml(e),e):(ml(e),null)}if(ml(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Ei(e,e.updateQueue),Lt(e),null;case 4:return k(),t===null&&fo(e.stateNode.containerInfo),Lt(e),null;case 10:return hl(e.type),Lt(e),null;case 19:if(q(le),u=e.memoizedState,u===null)return Lt(e),null;if(a=(e.flags&128)!==0,i=u.rendering,i===null)if(a)iu(u,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=vi(t),i!==null){for(e.flags|=128,iu(u,!1),t=i.updateQueue,e.updateQueue=t,Ei(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)gf(l,t),l=l.sibling;return B(le,le.current&1|2),e.child}t=t.sibling}u.tail!==null&&Ft()>Di&&(e.flags|=128,a=!0,iu(u,!1),e.lanes=4194304)}else{if(!a)if(t=vi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ei(e,t),iu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!zt)return Lt(e),null}else 2*Ft()-u.renderingStartTime>Di&&l!==536870912&&(e.flags|=128,a=!0,iu(u,!1),e.lanes=4194304);u.isBackwards?(i.sibling=e.child,e.child=i):(t=u.last,t!==null?t.sibling=i:e.child=i,u.last=i)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=Ft(),e.sibling=null,t=le.current,B(le,a?t&1|2:t&1),e):(Lt(e),null);case 22:case 23:return ml(e),hr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),l=e.updateQueue,l!==null&&Ei(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&q(da),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),hl(ee),Lt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function ab(t,e){switch(Pc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hl(ee),k(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ht(e),null;case 13:if(ml(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));qn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(le),null;case 4:return k(),null;case 10:return hl(e.type),null;case 22:case 23:return ml(e),hr(),t!==null&&q(da),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return hl(ee),null;case 25:return null;default:return null}}function qd(t,e){switch(Pc(e),e.tag){case 3:hl(ee),k();break;case 26:case 27:case 5:ht(e);break;case 4:k();break;case 13:ml(e);break;case 19:q(le);break;case 10:hl(e.type);break;case 22:case 23:ml(e),hr(),t!==null&&q(da);break;case 24:hl(ee)}}function cu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,s=l.inst;a=i(),s.destroy=a}l=l.next}while(l!==u)}}catch(f){Ht(e,e.return,f)}}function Bl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,u=e;var h=l,E=f;try{E()}catch(C){Ht(u,h,C)}}}a=a.next}while(a!==i)}}catch(C){Ht(e,e.return,C)}}function Xd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Cf(e,l)}catch(a){Ht(t,t.return,a)}}}function Zd(t,e,l){l.props=pa(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ht(t,e,a)}}function ru(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Ht(t,e,u)}}function Pe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Ht(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Ht(t,e,u)}else l.current=null}function Vd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Ht(t,t.return,u)}}function Yr(t,e,l){try{var a=t.stateNode;Tb(a,t.type,l,e),a[ye]=e}catch(u){Ht(t,t.return,u)}}function Kd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gl(t.type)||t.tag===4}function Lr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Bi));else if(a!==4&&(a===27&&Gl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Gr(t,e,l),t=t.sibling;t!==null;)Gr(t,e,l),t=t.sibling}function Ti(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Gl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ti(t,e,l),t=t.sibling;t!==null;)Ti(t,e,l),t=t.sibling}function Jd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);de(e,a,l),e[pe]=t,e[ye]=l}catch(i){Ht(t,t.return,i)}}var vl=!1,Wt=!1,qr=!1,Wd=typeof WeakSet=="function"?WeakSet:Set,ue=null;function nb(t,e){if(t=t.containerInfo,mo=Li,t=cf(t),Lc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var s=0,f=-1,h=-1,E=0,C=0,U=t,T=null;e:for(;;){for(var w;U!==l||u!==0&&U.nodeType!==3||(f=s+u),U!==i||a!==0&&U.nodeType!==3||(h=s+a),U.nodeType===3&&(s+=U.nodeValue.length),(w=U.firstChild)!==null;)T=U,U=w;for(;;){if(U===t)break e;if(T===l&&++E===u&&(f=s),T===i&&++C===a&&(h=s),(w=U.nextSibling)!==null)break;U=T,T=U.parentNode}U=w}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(bo={focusedElem:t,selectionRange:l},Li=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){switch(e=ue,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var st=pa(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(st,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Ht(l,l.return,ct)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)yo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function Fd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ul(t,l),a&4&&cu(5,l);break;case 1:if(Ul(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){Ht(l,l.return,s)}else{var u=pa(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ht(l,l.return,s)}}a&64&&Xd(l),a&512&&ru(l,l.return);break;case 3:if(Ul(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Cf(t,e)}catch(s){Ht(l,l.return,s)}}break;case 27:e===null&&a&4&&Jd(l);case 26:case 5:Ul(t,l),e===null&&a&4&&Vd(l),a&512&&ru(l,l.return);break;case 12:Ul(t,l);break;case 13:Ul(t,l),a&4&&th(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=hb.bind(null,l),Nb(t,l))));break;case 22:if(a=l.memoizedState!==null||vl,!a){e=e!==null&&e.memoizedState!==null||Wt,u=vl;var i=Wt;vl=a,(Wt=e)&&!i?Hl(t,l,(l.subtreeFlags&8772)!==0):Ul(t,l),vl=u,Wt=i}break;case 30:break;default:Ul(t,l)}}function Id(t){var e=t.alternate;e!==null&&(t.alternate=null,Id(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ec(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,Se=!1;function yl(t,e,l){for(l=l.child;l!==null;)Pd(t,e,l),l=l.sibling}function Pd(t,e,l){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Rn,l)}catch{}switch(l.tag){case 26:Wt||Pe(l,e),yl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Wt||Pe(l,e);var a=Yt,u=Se;Gl(l.type)&&(Yt=l.stateNode,Se=!1),yl(t,e,l),gu(l.stateNode),Yt=a,Se=u;break;case 5:Wt||Pe(l,e);case 6:if(a=Yt,u=Se,Yt=null,yl(t,e,l),Yt=a,Se=u,Yt!==null)if(Se)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(l.stateNode)}catch(i){Ht(l,e,i)}else try{Yt.removeChild(l.stateNode)}catch(i){Ht(l,e,i)}break;case 18:Yt!==null&&(Se?(t=Yt,Yh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),wu(t)):Yh(Yt,l.stateNode));break;case 4:a=Yt,u=Se,Yt=l.stateNode.containerInfo,Se=!0,yl(t,e,l),Yt=a,Se=u;break;case 0:case 11:case 14:case 15:Wt||Bl(2,l,e),Wt||Bl(4,l,e),yl(t,e,l);break;case 1:Wt||(Pe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Zd(l,e,a)),yl(t,e,l);break;case 21:yl(t,e,l);break;case 22:Wt=(a=Wt)||l.memoizedState!==null,yl(t,e,l),Wt=a;break;default:yl(t,e,l)}}function th(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wu(t)}catch(l){Ht(e,e.return,l)}}function ub(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Wd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Wd),e;default:throw Error(r(435,t.tag))}}function Xr(t,e){var l=ub(t);e.forEach(function(a){var u=pb.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function Oe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,s=e,f=s;t:for(;f!==null;){switch(f.tag){case 27:if(Gl(f.type)){Yt=f.stateNode,Se=!1;break t}break;case 5:Yt=f.stateNode,Se=!1;break t;case 3:case 4:Yt=f.stateNode.containerInfo,Se=!0;break t}f=f.return}if(Yt===null)throw Error(r(160));Pd(i,s,u),Yt=null,Se=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)eh(e,t),e=e.sibling}var Ze=null;function eh(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Oe(e,t),Re(t),a&4&&(Bl(3,t,t.return),cu(3,t),Bl(5,t,t.return));break;case 1:Oe(e,t),Re(t),a&512&&(Wt||l===null||Pe(l,l.return)),a&64&&vl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Ze;if(Oe(e,t),Re(t),a&512&&(Wt||l===null||Pe(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Cn]||i[pe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),de(i,a,l),i[pe]=t,ae(i),a=i;break t;case"link":var s=Jh("link","href",u).get(a+(l.href||""));if(s){for(var f=0;f<s.length;f++)if(i=s[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(f,1);break e}}i=u.createElement(a),de(i,a,l),u.head.appendChild(i);break;case"meta":if(s=Jh("meta","content",u).get(a+(l.content||""))){for(f=0;f<s.length;f++)if(i=s[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(f,1);break e}}i=u.createElement(a),de(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[pe]=t,ae(i),a=i}t.stateNode=a}else Wh(u,t.type,t.stateNode);else t.stateNode=Kh(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Wh(u,t.type,t.stateNode):Kh(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Yr(t,t.memoizedProps,l.memoizedProps)}break;case 27:Oe(e,t),Re(t),a&512&&(Wt||l===null||Pe(l,l.return)),l!==null&&a&4&&Yr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Oe(e,t),Re(t),a&512&&(Wt||l===null||Pe(l,l.return)),t.flags&32){u=t.stateNode;try{Ua(u,"")}catch(w){Ht(t,t.return,w)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Yr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(qr=!0);break;case 6:if(Oe(e,t),Re(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(w){Ht(t,t.return,w)}}break;case 3:if(ki=null,u=Ze,Ze=Hi(e.containerInfo),Oe(e,t),Ze=u,Re(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{wu(e.containerInfo)}catch(w){Ht(t,t.return,w)}qr&&(qr=!1,lh(t));break;case 4:a=Ze,Ze=Hi(t.stateNode.containerInfo),Oe(e,t),Re(t),Ze=a;break;case 12:Oe(e,t),Re(t);break;case 13:Oe(e,t),Re(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Fr=Ft()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Xr(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,E=vl,C=Wt;if(vl=E||u,Wt=C||h,Oe(e,t),Wt=C,vl=E,Re(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||vl||Wt||ma(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=h.stateNode;var U=h.memoizedProps.style,T=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(w){Ht(h,h.return,w)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Ht(h,h.return,w)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Xr(t,l))));break;case 19:Oe(e,t),Re(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Xr(t,a)));break;case 30:break;case 21:break;default:Oe(e,t),Re(t)}}function Re(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Kd(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=Lr(t);Ti(t,i,u);break;case 5:var s=l.stateNode;l.flags&32&&(Ua(s,""),l.flags&=-33);var f=Lr(t);Ti(t,f,s);break;case 3:case 4:var h=l.stateNode.containerInfo,E=Lr(t);Gr(t,E,h);break;default:throw Error(r(161))}}catch(C){Ht(t,t.return,C)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;lh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ul(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Fd(t,e.alternate,e),e=e.sibling}function ma(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Bl(4,e,e.return),ma(e);break;case 1:Pe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Zd(e,e.return,l),ma(e);break;case 27:gu(e.stateNode);case 26:case 5:Pe(e,e.return),ma(e);break;case 22:e.memoizedState===null&&ma(e);break;case 30:ma(e);break;default:ma(e)}t=t.sibling}}function Hl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,s=i.flags;switch(i.tag){case 0:case 11:case 15:Hl(u,i,l),cu(4,i);break;case 1:if(Hl(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(E){Ht(a,a.return,E)}if(a=i,u=a.updateQueue,u!==null){var f=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)Nf(h[u],f)}catch(E){Ht(a,a.return,E)}}l&&s&64&&Xd(i),ru(i,i.return);break;case 27:Jd(i);case 26:case 5:Hl(u,i,l),l&&a===null&&s&4&&Vd(i),ru(i,i.return);break;case 12:Hl(u,i,l);break;case 13:Hl(u,i,l),l&&s&4&&th(u,i);break;case 22:i.memoizedState===null&&Hl(u,i,l),ru(i,i.return);break;case 30:break;default:Hl(u,i,l)}e=e.sibling}}function Zr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Vn(l))}function Vr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Vn(t))}function tl(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ah(t,e,l,a),e=e.sibling}function ah(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:tl(t,e,l,a),u&2048&&cu(9,e);break;case 1:tl(t,e,l,a);break;case 3:tl(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Vn(t)));break;case 12:if(u&2048){tl(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,s=i.id,f=i.onPostCommit;typeof f=="function"&&f(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ht(e,e.return,h)}}else tl(t,e,l,a);break;case 13:tl(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,s=e.alternate,e.memoizedState!==null?i._visibility&2?tl(t,e,l,a):ou(t,e):i._visibility&2?tl(t,e,l,a):(i._visibility|=2,en(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&Zr(s,e);break;case 24:tl(t,e,l,a),u&2048&&Vr(e.alternate,e);break;default:tl(t,e,l,a)}}function en(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,s=e,f=l,h=a,E=s.flags;switch(s.tag){case 0:case 11:case 15:en(i,s,f,h,u),cu(8,s);break;case 23:break;case 22:var C=s.stateNode;s.memoizedState!==null?C._visibility&2?en(i,s,f,h,u):ou(i,s):(C._visibility|=2,en(i,s,f,h,u)),u&&E&2048&&Zr(s.alternate,s);break;case 24:en(i,s,f,h,u),u&&E&2048&&Vr(s.alternate,s);break;default:en(i,s,f,h,u)}e=e.sibling}}function ou(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:ou(l,a),u&2048&&Zr(a.alternate,a);break;case 24:ou(l,a),u&2048&&Vr(a.alternate,a);break;default:ou(l,a)}e=e.sibling}}var su=8192;function ln(t){if(t.subtreeFlags&su)for(t=t.child;t!==null;)nh(t),t=t.sibling}function nh(t){switch(t.tag){case 26:ln(t),t.flags&su&&t.memoizedState!==null&&qb(Ze,t.memoizedState,t.memoizedProps);break;case 5:ln(t);break;case 3:case 4:var e=Ze;Ze=Hi(t.stateNode.containerInfo),ln(t),Ze=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=su,su=16777216,ln(t),su=e):ln(t));break;default:ln(t)}}function uh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function fu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,ch(a,t)}uh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ih(t),t=t.sibling}function ih(t){switch(t.tag){case 0:case 11:case 15:fu(t),t.flags&2048&&Bl(9,t,t.return);break;case 3:fu(t);break;case 12:fu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wi(t)):fu(t);break;default:fu(t)}}function wi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,ch(a,t)}uh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Bl(8,e,e.return),wi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,wi(e));break;default:wi(e)}t=t.sibling}}function ch(t,e){for(;ue!==null;){var l=ue;switch(l.tag){case 0:case 11:case 15:Bl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Vn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ue=a;else t:for(l=t;ue!==null;){a=ue;var u=a.sibling,i=a.return;if(Id(a),a===l){ue=null;break t}if(u!==null){u.return=i,ue=u;break t}ue=i}}}var ib={getCacheForType:function(t){var e=me(ee),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},cb=typeof WeakMap=="function"?WeakMap:Map,Rt=0,$t=null,xt=null,Tt=0,Mt=0,Me=null,$l=!1,an=!1,Kr=!1,Al=0,qt=0,kl=0,ba=0,Jr=0,Ye=0,nn=0,du=null,Ee=null,Wr=!1,Fr=0,Di=1/0,zi=null,Ql=null,fe=0,Yl=null,un=null,cn=0,Ir=0,Pr=null,rh=null,hu=0,to=null;function Ne(){if((Rt&2)!==0&&Tt!==0)return Tt&-Tt;if(N.T!==null){var t=Va;return t!==0?t:co()}return Es()}function oh(){Ye===0&&(Ye=(Tt&536870912)===0||zt?ys():536870912);var t=Qe.current;return t!==null&&(t.flags|=32),Ye}function Ce(t,e,l){(t===$t&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(rn(t,0),Ll(t,Tt,Ye,!1)),Nn(t,l),((Rt&2)===0||t!==$t)&&(t===$t&&((Rt&2)===0&&(ba|=l),qt===4&&Ll(t,Tt,Ye,!1)),el(t))}function sh(t,e,l){if((Rt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Mn(t,e),u=a?sb(t,e):ao(t,e,!0),i=a;do{if(u===0){an&&!a&&Ll(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!rb(l)){u=ao(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var f=t;u=du;var h=f.current.memoizedState.isDehydrated;if(h&&(rn(f,s).flags|=256),s=ao(f,s,!1),s!==2){if(Kr&&!h){f.errorRecoveryDisabledLanes|=i,ba|=i,u=4;break t}i=Ee,Ee=u,i!==null&&(Ee===null?Ee=i:Ee.push.apply(Ee,i))}u=s}if(i=!1,u!==2)continue}}if(u===1){rn(t,0),Ll(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Ll(a,e,Ye,!$l);break t;case 2:Ee=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Fr+300-Ft(),10<u)){if(Ll(a,e,Ye,!$l),$u(a,0,!0)!==0)break t;a.timeoutHandle=kh(fh.bind(null,a,l,Ee,zi,Wr,e,Ye,ba,nn,$l,i,2,-0,0),u);break t}fh(a,l,Ee,zi,Wr,e,Ye,ba,nn,$l,i,0,-0,0)}}break}while(!0);el(t)}function fh(t,e,l,a,u,i,s,f,h,E,C,U,T,w){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(Au={stylesheets:null,count:0,unsuspend:Gb},nh(e),U=Xb(),U!==null)){t.cancelPendingCommit=U(vh.bind(null,t,e,i,l,a,u,s,f,h,C,1,T,w)),Ll(t,i,s,!E);return}vh(t,e,i,l,a,u,s,f,h)}function rb(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!De(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ll(t,e,l,a){e&=~Jr,e&=~ba,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-we(u),s=1<<i;a[i]=-1,u&=~s}l!==0&&xs(t,l,e)}function Oi(){return(Rt&6)===0?(pu(0),!1):!0}function eo(){if(xt!==null){if(Mt===0)var t=xt.return;else t=xt,dl=sa=null,vr(t),Pa=null,nu=0,t=xt;for(;t!==null;)qd(t.alternate,t),t=t.return;xt=null}}function rn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Db(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),eo(),$t=t,xt=l=ol(t.current,null),Tt=e,Mt=0,Me=null,$l=!1,an=Mn(t,e),Kr=!1,nn=Ye=Jr=ba=kl=qt=0,Ee=du=null,Wr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-we(a),i=1<<u;e|=t[u],a&=~i}return Al=e,Wu(),l}function dh(t,e){gt=null,N.H=mi,e===Jn||e===ui?(e=Rf(),Mt=3):e===Df?(e=Rf(),Mt=4):Mt=e===Md?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Me=e,xt===null&&(qt=1,Ai(t,Ue(e,t.current)))}function hh(){var t=N.H;return N.H=mi,t===null?mi:t}function ph(){var t=N.A;return N.A=ib,t}function lo(){qt=4,$l||(Tt&4194048)!==Tt&&Qe.current!==null||(an=!0),(kl&134217727)===0&&(ba&134217727)===0||$t===null||Ll($t,Tt,Ye,!1)}function ao(t,e,l){var a=Rt;Rt|=2;var u=hh(),i=ph();($t!==t||Tt!==e)&&(zi=null,rn(t,e)),e=!1;var s=qt;t:do try{if(Mt!==0&&xt!==null){var f=xt,h=Me;switch(Mt){case 8:eo(),s=6;break t;case 3:case 2:case 9:case 6:Qe.current===null&&(e=!0);var E=Mt;if(Mt=0,Me=null,on(t,f,h,E),l&&an){s=0;break t}break;default:E=Mt,Mt=0,Me=null,on(t,f,h,E)}}ob(),s=qt;break}catch(C){dh(t,C)}while(!0);return e&&t.shellSuspendCounter++,dl=sa=null,Rt=a,N.H=u,N.A=i,xt===null&&($t=null,Tt=0,Wu()),s}function ob(){for(;xt!==null;)mh(xt)}function sb(t,e){var l=Rt;Rt|=2;var a=hh(),u=ph();$t!==t||Tt!==e?(zi=null,Di=Ft()+500,rn(t,e)):an=Mn(t,e);t:do try{if(Mt!==0&&xt!==null){e=xt;var i=Me;e:switch(Mt){case 1:Mt=0,Me=null,on(t,e,i,1);break;case 2:case 9:if(zf(i)){Mt=0,Me=null,bh(e);break}e=function(){Mt!==2&&Mt!==9||$t!==t||(Mt=7),el(t)},i.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:zf(i)?(Mt=0,Me=null,bh(e)):(Mt=0,Me=null,on(t,e,i,7));break;case 5:var s=null;switch(xt.tag){case 26:s=xt.memoizedState;case 5:case 27:var f=xt;if(!s||Fh(s)){Mt=0,Me=null;var h=f.sibling;if(h!==null)xt=h;else{var E=f.return;E!==null?(xt=E,Ri(E)):xt=null}break e}}Mt=0,Me=null,on(t,e,i,5);break;case 6:Mt=0,Me=null,on(t,e,i,6);break;case 8:eo(),qt=6;break t;default:throw Error(r(462))}}fb();break}catch(C){dh(t,C)}while(!0);return dl=sa=null,N.H=a,N.A=u,Rt=l,xt!==null?0:($t=null,Tt=0,Wu(),qt)}function fb(){for(;xt!==null&&!Kt();)mh(xt)}function mh(t){var e=Ld(t.alternate,t,Al);t.memoizedProps=t.pendingProps,e===null?Ri(t):xt=e}function bh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ud(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=Ud(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:vr(e);default:qd(l,e),e=xt=gf(e,Al),e=Ld(l,e,Al)}t.memoizedProps=t.pendingProps,e===null?Ri(t):xt=e}function on(t,e,l,a){dl=sa=null,vr(e),Pa=null,nu=0;var u=e.return;try{if(tb(t,u,e,l,Tt)){qt=1,Ai(t,Ue(l,t.current)),xt=null;return}}catch(i){if(u!==null)throw xt=u,i;qt=1,Ai(t,Ue(l,t.current)),xt=null;return}e.flags&32768?(zt||a===1?t=!0:an||(Tt&536870912)!==0?t=!1:($l=t=!0,(a===2||a===9||a===3||a===6)&&(a=Qe.current,a!==null&&a.tag===13&&(a.flags|=16384))),gh(e,t)):Ri(e)}function Ri(t){var e=t;do{if((e.flags&32768)!==0){gh(e,$l);return}t=e.return;var l=lb(e.alternate,e,Al);if(l!==null){xt=l;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);qt===0&&(qt=5)}function gh(t,e){do{var l=ab(t.alternate,t);if(l!==null){l.flags&=32767,xt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){xt=t;return}xt=t=l}while(t!==null);qt=6,xt=null}function vh(t,e,l,a,u,i,s,f,h){t.cancelPendingCommit=null;do Mi();while(fe!==0);if((Rt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Vc,Gp(t,l,i,s,f,h),t===$t&&(xt=$t=null,Tt=0),un=e,Yl=t,cn=l,Ir=i,Pr=u,rh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mb(Tl,function(){return Eh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,u=X.p,X.p=2,s=Rt,Rt|=4;try{nb(t,e,l)}finally{Rt=s,X.p=u,N.T=a}}fe=1,yh(),Ah(),xh()}}function yh(){if(fe===1){fe=0;var t=Yl,e=un,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=N.T,N.T=null;var a=X.p;X.p=2;var u=Rt;Rt|=4;try{eh(e,t);var i=bo,s=cf(t.containerInfo),f=i.focusedElem,h=i.selectionRange;if(s!==f&&f&&f.ownerDocument&&uf(f.ownerDocument.documentElement,f)){if(h!==null&&Lc(f)){var E=h.start,C=h.end;if(C===void 0&&(C=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(C,f.value.length);else{var U=f.ownerDocument||document,T=U&&U.defaultView||window;if(T.getSelection){var w=T.getSelection(),st=f.textContent.length,ct=Math.min(h.start,st),_t=h.end===void 0?ct:Math.min(h.end,st);!w.extend&&ct>_t&&(s=_t,_t=ct,ct=s);var A=nf(f,ct),g=nf(f,_t);if(A&&g&&(w.rangeCount!==1||w.anchorNode!==A.node||w.anchorOffset!==A.offset||w.focusNode!==g.node||w.focusOffset!==g.offset)){var S=U.createRange();S.setStart(A.node,A.offset),w.removeAllRanges(),ct>_t?(w.addRange(S),w.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),w.addRange(S))}}}}for(U=[],w=f;w=w.parentNode;)w.nodeType===1&&U.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var j=U[f];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Li=!!mo,bo=mo=null}finally{Rt=u,X.p=a,N.T=l}}t.current=e,fe=2}}function Ah(){if(fe===2){fe=0;var t=Yl,e=un,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=N.T,N.T=null;var a=X.p;X.p=2;var u=Rt;Rt|=4;try{Fd(t,e.alternate,e)}finally{Rt=u,X.p=a,N.T=l}}fe=3}}function xh(){if(fe===4||fe===3){fe=0,ve();var t=Yl,e=un,l=cn,a=rh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?fe=5:(fe=0,un=Yl=null,Sh(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ql=null),xc(l),e=e.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Rn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=N.T,u=X.p,X.p=2,N.T=null;try{for(var i=t.onRecoverableError,s=0;s<a.length;s++){var f=a[s];i(f.value,{componentStack:f.stack})}}finally{N.T=e,X.p=u}}(cn&3)!==0&&Mi(),el(t),u=t.pendingLanes,(l&4194090)!==0&&(u&42)!==0?t===to?hu++:(hu=0,to=t):hu=0,pu(0)}}function Sh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Vn(e)))}function Mi(t){return yh(),Ah(),xh(),Eh()}function Eh(){if(fe!==5)return!1;var t=Yl,e=Ir;Ir=0;var l=xc(cn),a=N.T,u=X.p;try{X.p=32>l?32:l,N.T=null,l=Pr,Pr=null;var i=Yl,s=cn;if(fe=0,un=Yl=null,cn=0,(Rt&6)!==0)throw Error(r(331));var f=Rt;if(Rt|=4,ih(i.current),ah(i,i.current,s,l),Rt=f,pu(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Rn,i)}catch{}return!0}finally{X.p=u,N.T=a,Sh(t,e)}}function Th(t,e,l){e=Ue(l,e),e=Cr(t.stateNode,e,2),t=Nl(t,e,2),t!==null&&(Nn(t,2),el(t))}function Ht(t,e,l){if(t.tag===3)Th(t,t,l);else for(;e!==null;){if(e.tag===3){Th(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ql===null||!Ql.has(a))){t=Ue(l,t),l=Od(2),a=Nl(e,l,2),a!==null&&(Rd(l,a,e,t),Nn(a,2),el(a));break}}e=e.return}}function no(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new cb;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Kr=!0,u.add(l),t=db.bind(null,t,e,l),e.then(t,t))}function db(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,$t===t&&(Tt&l)===l&&(qt===4||qt===3&&(Tt&62914560)===Tt&&300>Ft()-Fr?(Rt&2)===0&&rn(t,0):Jr|=l,nn===Tt&&(nn=0)),el(t)}function wh(t,e){e===0&&(e=As()),t=Ga(t,e),t!==null&&(Nn(t,e),el(t))}function hb(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),wh(t,l)}function pb(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),wh(t,l)}function mb(t,e){return Nt(t,e)}var Ni=null,sn=null,uo=!1,Ci=!1,io=!1,ga=0;function el(t){t!==sn&&t.next===null&&(sn===null?Ni=sn=t:sn=sn.next=t),Ci=!0,uo||(uo=!0,gb())}function pu(t,e){if(!io&&Ci){io=!0;do for(var l=!1,a=Ni;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var s=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-we(42|t)+1)-1,i&=u&~(s&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Rh(a,i))}else i=Tt,i=$u(a,a===$t?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Mn(a,i)||(l=!0,Rh(a,i));a=a.next}while(l);io=!1}}function bb(){Dh()}function Dh(){Ci=uo=!1;var t=0;ga!==0&&(wb()&&(t=ga),ga=0);for(var e=Ft(),l=null,a=Ni;a!==null;){var u=a.next,i=zh(a,e);i===0?(a.next=null,l===null?Ni=u:l.next=u,u===null&&(sn=l)):(l=a,(t!==0||(i&3)!==0)&&(Ci=!0)),a=u}pu(t)}function zh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-we(i),f=1<<s,h=u[s];h===-1?((f&l)===0||(f&a)!==0)&&(u[s]=Lp(f,e)):h<=e&&(t.expiredLanes|=f),i&=~f}if(e=$t,l=Tt,l=$u(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vt(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Mn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Vt(a),xc(l)){case 2:case 8:l=Oa;break;case 32:l=Tl;break;case 268435456:l=On;break;default:l=Tl}return a=Oh.bind(null,t),l=Nt(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Vt(a),t.callbackPriority=2,t.callbackNode=null,2}function Oh(t,e){if(fe!==0&&fe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Mi()&&t.callbackNode!==l)return null;var a=Tt;return a=$u(t,t===$t?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(sh(t,a,e),zh(t,Ft()),t.callbackNode!=null&&t.callbackNode===l?Oh.bind(null,t):null)}function Rh(t,e){if(Mi())return null;sh(t,e,!0)}function gb(){zb(function(){(Rt&6)!==0?Nt(qe,bb):Dh()})}function co(){return ga===0&&(ga=ys()),ga}function Mh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gu(""+t)}function Nh(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function vb(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=Mh((u[ye]||null).action),s=a.submitter;s&&(e=(e=s[ye]||null)?Mh(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var f=new Vu("action","action",null,a,u);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ga!==0){var h=s?Nh(u,s):new FormData(u);zr(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(f.preventDefault(),h=s?Nh(u,s):new FormData(u),zr(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var ro=0;ro<Zc.length;ro++){var oo=Zc[ro],yb=oo.toLowerCase(),Ab=oo[0].toUpperCase()+oo.slice(1);Xe(yb,"on"+Ab)}Xe(sf,"onAnimationEnd"),Xe(ff,"onAnimationIteration"),Xe(df,"onAnimationStart"),Xe("dblclick","onDoubleClick"),Xe("focusin","onFocus"),Xe("focusout","onBlur"),Xe(Hm,"onTransitionRun"),Xe($m,"onTransitionStart"),Xe(km,"onTransitionCancel"),Xe(hf,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function Ch(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var s=a.length-1;0<=s;s--){var f=a[s],h=f.instance,E=f.currentTarget;if(f=f.listener,h!==i&&u.isPropagationStopped())break t;i=f,u.currentTarget=E;try{i(u)}catch(C){yi(C)}u.currentTarget=null,i=h}else for(s=0;s<a.length;s++){if(f=a[s],h=f.instance,E=f.currentTarget,f=f.listener,h!==i&&u.isPropagationStopped())break t;i=f,u.currentTarget=E;try{i(u)}catch(C){yi(C)}u.currentTarget=null,i=h}}}}function St(t,e){var l=e[Sc];l===void 0&&(l=e[Sc]=new Set);var a=t+"__bubble";l.has(a)||(jh(e,t,2,!1),l.add(a))}function so(t,e,l){var a=0;e&&(a|=4),jh(l,t,a,e)}var ji="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[ji]){t[ji]=!0,ws.forEach(function(l){l!=="selectionchange"&&(xb.has(l)||so(l,!1,t),so(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ji]||(e[ji]=!0,so("selectionchange",!1,e))}}function jh(t,e,l,a){switch(a0(e)){case 2:var u=Kb;break;case 8:u=Jb;break;default:u=Do}l=u.bind(null,e,l,t),u=void 0,!jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function ho(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===u)break;if(s===4)for(s=a.return;s!==null;){var h=s.tag;if((h===3||h===4)&&s.stateNode.containerInfo===u)return;s=s.return}for(;f!==null;){if(s=Ma(f),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){a=i=s;continue t}f=f.parentNode}}a=a.return}ks(function(){var E=i,C=Nc(l),U=[];t:{var T=pf.get(t);if(T!==void 0){var w=Vu,st=t;switch(t){case"keypress":if(Xu(l)===0)break t;case"keydown":case"keyup":w=mm;break;case"focusin":st="focus",w=Hc;break;case"focusout":st="blur",w=Hc;break;case"beforeblur":case"afterblur":w=Hc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=vm;break;case sf:case ff:case df:w=im;break;case hf:w=Am;break;case"scroll":case"scrollend":w=em;break;case"wheel":w=Sm;break;case"copy":case"cut":case"paste":w=rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qs;break;case"toggle":case"beforetoggle":w=Tm}var ct=(e&4)!==0,_t=!ct&&(t==="scroll"||t==="scrollend"),A=ct?T!==null?T+"Capture":null:T;ct=[];for(var g=E,S;g!==null;){var j=g;if(S=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||S===null||A===null||(j=_n(g,A),j!=null&&ct.push(bu(g,j,S))),_t)break;g=g.return}0<ct.length&&(T=new w(T,st,null,l,C),U.push({event:T,listeners:ct}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",T&&l!==Mc&&(st=l.relatedTarget||l.fromElement)&&(Ma(st)||st[Ra]))break t;if((w||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,w?(st=l.relatedTarget||l.toElement,w=E,st=st?Ma(st):null,st!==null&&(_t=p(st),ct=st.tag,st!==_t||ct!==5&&ct!==27&&ct!==6)&&(st=null)):(w=null,st=E),w!==st)){if(ct=Ls,j="onMouseLeave",A="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(ct=qs,j="onPointerLeave",A="onPointerEnter",g="pointer"),_t=w==null?T:jn(w),S=st==null?T:jn(st),T=new ct(j,g+"leave",w,l,C),T.target=_t,T.relatedTarget=S,j=null,Ma(C)===E&&(ct=new ct(A,g+"enter",st,l,C),ct.target=S,ct.relatedTarget=_t,j=ct),_t=j,w&&st)e:{for(ct=w,A=st,g=0,S=ct;S;S=fn(S))g++;for(S=0,j=A;j;j=fn(j))S++;for(;0<g-S;)ct=fn(ct),g--;for(;0<S-g;)A=fn(A),S--;for(;g--;){if(ct===A||A!==null&&ct===A.alternate)break e;ct=fn(ct),A=fn(A)}ct=null}else ct=null;w!==null&&_h(U,T,w,ct,!1),st!==null&&_t!==null&&_h(U,_t,st,ct,!0)}}t:{if(T=E?jn(E):window,w=T.nodeName&&T.nodeName.toLowerCase(),w==="select"||w==="input"&&T.type==="file")var nt=Is;else if(Ws(T))if(Ps)nt=_m;else{nt=Cm;var At=Nm}else w=T.nodeName,!w||w.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&Rc(E.elementType)&&(nt=Is):nt=jm;if(nt&&(nt=nt(t,E))){Fs(U,nt,l,C);break t}At&&At(t,T,E),t==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Oc(T,"number",T.value)}switch(At=E?jn(E):window,t){case"focusin":(Ws(At)||At.contentEditable==="true")&&(Qa=At,Gc=E,Ln=null);break;case"focusout":Ln=Gc=Qa=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,rf(U,l,C);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":rf(U,l,C)}var ut;if(kc)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else ka?Ks(t,l)&&(rt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(Xs&&l.locale!=="ko"&&(ka||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ka&&(ut=Qs()):(zl=C,_c="value"in zl?zl.value:zl.textContent,ka=!0)),At=_i(E,rt),0<At.length&&(rt=new Gs(rt,t,null,l,C),U.push({event:rt,listeners:At}),ut?rt.data=ut:(ut=Js(l),ut!==null&&(rt.data=ut)))),(ut=Dm?zm(t,l):Om(t,l))&&(rt=_i(E,"onBeforeInput"),0<rt.length&&(At=new Gs("onBeforeInput","beforeinput",null,l,C),U.push({event:At,listeners:rt}),At.data=ut)),vb(U,t,E,l,C)}Ch(U,e)})}function bu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function _i(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=_n(t,l),u!=null&&a.unshift(bu(t,u,i)),u=_n(t,e),u!=null&&a.push(bu(t,u,i))),t.tag===3)return a;t=t.return}return[]}function fn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _h(t,e,l,a,u){for(var i=e._reactName,s=[];l!==null&&l!==a;){var f=l,h=f.alternate,E=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||E===null||(h=E,u?(E=_n(l,i),E!=null&&s.unshift(bu(l,E,h))):u||(E=_n(l,i),E!=null&&s.push(bu(l,E,h)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var Sb=/\r\n?/g,Eb=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(Sb,`
`).replace(Eb,"")}function Uh(t,e){return e=Bh(e),Bh(t)===e}function Bi(){}function jt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ua(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ua(t,""+a);break;case"className":Qu(t,"class",a);break;case"tabIndex":Qu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qu(t,l,a);break;case"style":Hs(t,a,i);break;case"data":if(e!=="object"){Qu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Gu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&jt(t,e,"name",u.name,u,null),jt(t,e,"formEncType",u.formEncType,u,null),jt(t,e,"formMethod",u.formMethod,u,null),jt(t,e,"formTarget",u.formTarget,u,null)):(jt(t,e,"encType",u.encType,u,null),jt(t,e,"method",u.method,u,null),jt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Gu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Bi);break;case"onScroll":a!=null&&St("scroll",t);break;case"onScrollEnd":a!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Gu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":St("beforetoggle",t),St("toggle",t),ku(t,"popover",a);break;case"xlinkActuate":cl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":cl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":cl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":cl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":cl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":cl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":cl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":cl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":cl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ku(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Pp.get(l)||l,ku(t,l,a))}}function po(t,e,l,a,u,i){switch(l){case"style":Hs(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ua(t,a):(typeof a=="number"||typeof a=="bigint")&&Ua(t,""+a);break;case"onScroll":a!=null&&St("scroll",t);break;case"onScrollEnd":a!=null&&St("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ye]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):ku(t,l,a)}}}function de(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:jt(t,e,i,s,l,null)}}u&&jt(t,e,"srcSet",l.srcSet,l,null),a&&jt(t,e,"src",l.src,l,null);return;case"input":St("invalid",t);var f=i=s=u=null,h=null,E=null;for(a in l)if(l.hasOwnProperty(a)){var C=l[a];if(C!=null)switch(a){case"name":u=C;break;case"type":s=C;break;case"checked":h=C;break;case"defaultChecked":E=C;break;case"value":i=C;break;case"defaultValue":f=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,e));break;default:jt(t,e,a,C,l,null)}}js(t,i,f,h,E,s,u,!1),Yu(t);return;case"select":St("invalid",t),a=s=i=null;for(u in l)if(l.hasOwnProperty(u)&&(f=l[u],f!=null))switch(u){case"value":i=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:jt(t,e,u,f,l,null)}e=i,l=s,t.multiple=!!a,e!=null?Ba(t,!!a,e,!1):l!=null&&Ba(t,!!a,l,!0);return;case"textarea":St("invalid",t),i=u=a=null;for(s in l)if(l.hasOwnProperty(s)&&(f=l[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":u=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:jt(t,e,s,f,l,null)}Bs(t,a,u,i),Yu(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:jt(t,e,h,a,l,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(a=0;a<mu.length;a++)St(mu[a],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(a=l[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:jt(t,e,E,a,l,null)}return;default:if(Rc(e)){for(C in l)l.hasOwnProperty(C)&&(a=l[C],a!==void 0&&po(t,e,C,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&jt(t,e,f,a,l,null))}function Tb(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,s=null,f=null,h=null,E=null,C=null;for(w in l){var U=l[w];if(l.hasOwnProperty(w)&&U!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":h=U;default:a.hasOwnProperty(w)||jt(t,e,w,null,a,U)}}for(var T in a){var w=a[T];if(U=l[T],a.hasOwnProperty(T)&&(w!=null||U!=null))switch(T){case"type":i=w;break;case"name":u=w;break;case"checked":E=w;break;case"defaultChecked":C=w;break;case"value":s=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,e));break;default:w!==U&&jt(t,e,T,w,a,U)}}zc(t,s,f,h,E,C,i,u);return;case"select":w=s=f=T=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":w=h;default:a.hasOwnProperty(i)||jt(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":T=i;break;case"defaultValue":f=i;break;case"multiple":s=i;default:i!==h&&jt(t,e,u,i,a,h)}e=f,l=s,a=w,T!=null?Ba(t,!!l,T,!1):!!a!=!!l&&(e!=null?Ba(t,!!l,e,!0):Ba(t,!!l,l?[]:"",!1));return;case"textarea":w=T=null;for(f in l)if(u=l[f],l.hasOwnProperty(f)&&u!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:jt(t,e,f,null,a,u)}for(s in a)if(u=a[s],i=l[s],a.hasOwnProperty(s)&&(u!=null||i!=null))switch(s){case"value":T=u;break;case"defaultValue":w=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&jt(t,e,s,u,a,i)}_s(t,T,w);return;case"option":for(var st in l)if(T=l[st],l.hasOwnProperty(st)&&T!=null&&!a.hasOwnProperty(st))switch(st){case"selected":t.selected=!1;break;default:jt(t,e,st,null,a,T)}for(h in a)if(T=a[h],w=l[h],a.hasOwnProperty(h)&&T!==w&&(T!=null||w!=null))switch(h){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:jt(t,e,h,T,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in l)T=l[ct],l.hasOwnProperty(ct)&&T!=null&&!a.hasOwnProperty(ct)&&jt(t,e,ct,null,a,T);for(E in a)if(T=a[E],w=l[E],a.hasOwnProperty(E)&&T!==w&&(T!=null||w!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:jt(t,e,E,T,a,w)}return;default:if(Rc(e)){for(var _t in l)T=l[_t],l.hasOwnProperty(_t)&&T!==void 0&&!a.hasOwnProperty(_t)&&po(t,e,_t,void 0,a,T);for(C in a)T=a[C],w=l[C],!a.hasOwnProperty(C)||T===w||T===void 0&&w===void 0||po(t,e,C,T,a,w);return}}for(var A in l)T=l[A],l.hasOwnProperty(A)&&T!=null&&!a.hasOwnProperty(A)&&jt(t,e,A,null,a,T);for(U in a)T=a[U],w=l[U],!a.hasOwnProperty(U)||T===w||T==null&&w==null||jt(t,e,U,T,a,w)}var mo=null,bo=null;function Ui(t){return t.nodeType===9?t:t.ownerDocument}function Hh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $h(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function go(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vo=null;function wb(){var t=window.event;return t&&t.type==="popstate"?t===vo?!1:(vo=t,!0):(vo=null,!1)}var kh=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,zb=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(t){return Qh.resolve(null).then(t).catch(Ob)}:kh;function Ob(t){setTimeout(function(){throw t})}function Gl(t){return t==="head"}function Yh(t,e){var l=e,a=0,u=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var s=t.ownerDocument;if(l&1&&gu(s.documentElement),l&2&&gu(s.body),l&4)for(l=s.head,gu(l),s=l.firstChild;s;){var f=s.nextSibling,h=s.nodeName;s[Cn]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=f}}if(u===0){t.removeChild(i),wu(e);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);wu(e)}function yo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":yo(l),Ec(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Rb(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Cn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ve(t.nextSibling),t===null)break}return null}function Mb(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ve(t.nextSibling),t===null))return null;return t}function Ao(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Nb(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var xo=null;function Lh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Gh(t,e,l){switch(e=Ui(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function gu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ec(t)}var Le=new Map,qh=new Set;function Hi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xl=X.d;X.d={f:Cb,r:jb,D:_b,C:Bb,L:Ub,m:Hb,X:kb,S:$b,M:Qb};function Cb(){var t=xl.f(),e=Oi();return t||e}function jb(t){var e=Na(t);e!==null&&e.tag===5&&e.type==="form"?sd(e):xl.r(t)}var dn=typeof document>"u"?null:document;function Xh(t,e,l){var a=dn;if(a&&typeof e=="string"&&e){var u=Be(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),qh.has(u)||(qh.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),de(e,"link",t),ae(e),a.head.appendChild(e)))}}function _b(t){xl.D(t),Xh("dns-prefetch",t,null)}function Bb(t,e){xl.C(t,e),Xh("preconnect",t,e)}function Ub(t,e,l){xl.L(t,e,l);var a=dn;if(a&&t&&e){var u='link[rel="preload"][as="'+Be(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Be(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Be(l.imageSizes)+'"]')):u+='[href="'+Be(t)+'"]';var i=u;switch(e){case"style":i=hn(t);break;case"script":i=pn(t)}Le.has(i)||(t=z({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Le.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(vu(i))||e==="script"&&a.querySelector(yu(i))||(e=a.createElement("link"),de(e,"link",t),ae(e),a.head.appendChild(e)))}}function Hb(t,e){xl.m(t,e);var l=dn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Be(a)+'"][href="'+Be(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=pn(t)}if(!Le.has(i)&&(t=z({rel:"modulepreload",href:t},e),Le.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yu(i)))return}a=l.createElement("link"),de(a,"link",t),ae(a),l.head.appendChild(a)}}}function $b(t,e,l){xl.S(t,e,l);var a=dn;if(a&&t){var u=Ca(a).hoistableStyles,i=hn(t);e=e||"default";var s=u.get(i);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(vu(i)))f.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Le.get(i))&&So(t,l);var h=s=a.createElement("link");ae(h),de(h,"link",t),h._p=new Promise(function(E,C){h.onload=E,h.onerror=C}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,$i(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:f},u.set(i,s)}}}function kb(t,e){xl.X(t,e);var l=dn;if(l&&t){var a=Ca(l).hoistableScripts,u=pn(t),i=a.get(u);i||(i=l.querySelector(yu(u)),i||(t=z({src:t,async:!0},e),(e=Le.get(u))&&Eo(t,e),i=l.createElement("script"),ae(i),de(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Qb(t,e){xl.M(t,e);var l=dn;if(l&&t){var a=Ca(l).hoistableScripts,u=pn(t),i=a.get(u);i||(i=l.querySelector(yu(u)),i||(t=z({src:t,async:!0,type:"module"},e),(e=Le.get(u))&&Eo(t,e),i=l.createElement("script"),ae(i),de(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Zh(t,e,l,a){var u=(u=F.current)?Hi(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=hn(l.href),l=Ca(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=hn(l.href);var i=Ca(u).hoistableStyles,s=i.get(t);if(s||(u=u.ownerDocument||u,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=u.querySelector(vu(t)))&&!i._p&&(s.instance=i,s.state.loading=5),Le.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Le.set(t,l),i||Yb(u,t,l,s.state))),e&&a===null)throw Error(r(528,""));return s}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pn(l),l=Ca(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hn(t){return'href="'+Be(t)+'"'}function vu(t){return'link[rel="stylesheet"]['+t+"]"}function Vh(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function Yb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),de(e,"link",l),ae(e),t.head.appendChild(e))}function pn(t){return'[src="'+Be(t)+'"]'}function yu(t){return"script[async]"+t}function Kh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Be(l.href)+'"]');if(a)return e.instance=a,ae(a),a;var u=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ae(a),de(a,"style",u),$i(a,l.precedence,t),e.instance=a;case"stylesheet":u=hn(l.href);var i=t.querySelector(vu(u));if(i)return e.state.loading|=4,e.instance=i,ae(i),i;a=Vh(l),(u=Le.get(u))&&So(a,u),i=(t.ownerDocument||t).createElement("link"),ae(i);var s=i;return s._p=new Promise(function(f,h){s.onload=f,s.onerror=h}),de(i,"link",a),e.state.loading|=4,$i(i,l.precedence,t),e.instance=i;case"script":return i=pn(l.src),(u=t.querySelector(yu(i)))?(e.instance=u,ae(u),u):(a=l,(u=Le.get(i))&&(a=z({},l),Eo(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ae(u),de(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,$i(a,l.precedence,t));return e.instance}function $i(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===e)i=f;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function So(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Eo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ki=null;function Jh(t,e,l){if(ki===null){var a=new Map,u=ki=new Map;u.set(l,a)}else u=ki,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Cn]||i[pe]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var f=a.get(s);f?f.push(i):a.set(s,[i])}}return a}function Wh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Lb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Fh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Au=null;function Gb(){}function qb(t,e,l){if(Au===null)throw Error(r(475));var a=Au;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=hn(l.href),i=t.querySelector(vu(u));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Qi.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,ae(i);return}i=t.ownerDocument||t,l=Vh(l),(u=Le.get(u))&&So(l,u),i=i.createElement("link"),ae(i);var s=i;s._p=new Promise(function(f,h){s.onload=f,s.onerror=h}),de(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Qi.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Xb(){if(Au===null)throw Error(r(475));var t=Au;return t.stylesheets&&t.count===0&&To(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&To(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Qi(){if(this.count--,this.count===0){if(this.stylesheets)To(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yi=null;function To(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yi=new Map,e.forEach(Zb,t),Yi=null,Qi.call(t))}function Zb(t,e){if(!(e.state.loading&4)){var l=Yi.get(t);if(l)var a=l.get(null);else{l=new Map,Yi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var s=u[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}u=e.instance,s=u.getAttribute("data-precedence"),i=l.get(s)||a,i===a&&l.set(null,u),l.set(s,u),this.count++,a=Qi.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var xu={$$typeof:Y,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Vb(t,e,l,a,u,i,s,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.hiddenUpdates=yc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Ih(t,e,l,a,u,i,s,f,h,E,C,U){return t=new Vb(t,e,l,s,f,h,E,U),e=1,i===!0&&(e|=24),i=ze(3,null,null,e),t.current=i,i.stateNode=t,e=nr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},rr(i),t}function Ph(t){return t?(t=qa,t):qa}function t0(t,e,l,a,u,i){u=Ph(u),a.context===null?a.context=u:a.pendingContext=u,a=Ml(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Nl(t,a,e),l!==null&&(Ce(l,t,e),Fn(l,t,e))}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function wo(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function l0(t){if(t.tag===13){var e=Ga(t,67108864);e!==null&&Ce(e,t,67108864),wo(t,67108864)}}var Li=!0;function Kb(t,e,l,a){var u=N.T;N.T=null;var i=X.p;try{X.p=2,Do(t,e,l,a)}finally{X.p=i,N.T=u}}function Jb(t,e,l,a){var u=N.T;N.T=null;var i=X.p;try{X.p=8,Do(t,e,l,a)}finally{X.p=i,N.T=u}}function Do(t,e,l,a){if(Li){var u=zo(a);if(u===null)ho(t,e,a,Gi,l),n0(t,a);else if(Fb(u,t,e,l,a))a.stopPropagation();else if(n0(t,a),e&4&&-1<Wb.indexOf(t)){for(;u!==null;){var i=Na(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=ta(i.pendingLanes);if(s!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var h=1<<31-we(s);f.entanglements[1]|=h,s&=~h}el(i),(Rt&6)===0&&(Di=Ft()+500,pu(0))}}break;case 13:f=Ga(i,2),f!==null&&Ce(f,i,2),Oi(),wo(i,2)}if(i=zo(a),i===null&&ho(t,e,a,Gi,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else ho(t,e,a,null,l)}}function zo(t){return t=Nc(t),Oo(t)}var Gi=null;function Oo(t){if(Gi=null,t=Ma(t),t!==null){var e=p(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=v(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gi=t,null}function a0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(il()){case qe:return 2;case Oa:return 8;case Tl:case Pl:return 32;case On:return 268435456;default:return 32}default:return 32}}var Ro=!1,ql=null,Xl=null,Zl=null,Su=new Map,Eu=new Map,Vl=[],Wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n0(t,e){switch(t){case"focusin":case"focusout":ql=null;break;case"dragenter":case"dragleave":Xl=null;break;case"mouseover":case"mouseout":Zl=null;break;case"pointerover":case"pointerout":Su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(e.pointerId)}}function Tu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=Na(e),e!==null&&l0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Fb(t,e,l,a,u){switch(e){case"focusin":return ql=Tu(ql,t,e,l,a,u),!0;case"dragenter":return Xl=Tu(Xl,t,e,l,a,u),!0;case"mouseover":return Zl=Tu(Zl,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return Su.set(i,Tu(Su.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,Eu.set(i,Tu(Eu.get(i)||null,t,e,l,a,u)),!0}return!1}function u0(t){var e=Ma(t.target);if(e!==null){var l=p(e);if(l!==null){if(e=l.tag,e===13){if(e=v(l),e!==null){t.blockedOn=e,qp(t.priority,function(){if(l.tag===13){var a=Ne();a=Ac(a);var u=Ga(l,a);u!==null&&Ce(u,l,a),wo(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=zo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Mc=a,l.target.dispatchEvent(a),Mc=null}else return e=Na(l),e!==null&&l0(e),t.blockedOn=l,!1;e.shift()}return!0}function i0(t,e,l){qi(t)&&l.delete(e)}function Ib(){Ro=!1,ql!==null&&qi(ql)&&(ql=null),Xl!==null&&qi(Xl)&&(Xl=null),Zl!==null&&qi(Zl)&&(Zl=null),Su.forEach(i0),Eu.forEach(i0)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ro||(Ro=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ib)))}var Zi=null;function c0(t){Zi!==t&&(Zi=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Zi===t&&(Zi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(Oo(a||l)===null)continue;break}var i=Na(l);i!==null&&(t.splice(e,3),e-=3,zr(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function wu(t){function e(h){return Xi(h,t)}ql!==null&&Xi(ql,t),Xl!==null&&Xi(Xl,t),Zl!==null&&Xi(Zl,t),Su.forEach(e),Eu.forEach(e);for(var l=0;l<Vl.length;l++){var a=Vl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Vl.length&&(l=Vl[0],l.blockedOn===null);)u0(l),l.blockedOn===null&&Vl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],s=u[ye]||null;if(typeof i=="function")s||c0(l);else if(s){var f=null;if(i&&i.hasAttribute("formAction")){if(u=i,s=i[ye]||null)f=s.formAction;else if(Oo(u)!==null)continue}else f=s.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),c0(l)}}}function Mo(t){this._internalRoot=t}Vi.prototype.render=Mo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=Ne();t0(l,a,t,e,null,null)},Vi.prototype.unmount=Mo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t0(t.current,2,null,t,null,null),Oi(),e[Ra]=null}};function Vi(t){this._internalRoot=t}Vi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Es();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Vl.length&&e!==0&&e<Vl[l].priority;l++);Vl.splice(l,0,t),l===0&&u0(t)}};var r0=c.version;if(r0!=="19.1.0")throw Error(r(527,r0,"19.1.0"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=x(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Pb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{Rn=Ki.inject(Pb),Te=Ki}catch{}}return zu.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=Td,i=wd,s=Dd,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=Ih(t,1,!1,null,null,l,a,u,i,s,f,null),t[Ra]=e.current,fo(t),new Mo(e)},zu.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=Td,s=wd,f=Dd,h=null,E=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(E=l.formState)),e=Ih(t,1,!0,e,l??null,a,u,i,s,f,h,E),e.context=Ph(null),l=e.current,a=Ne(),a=Ac(a),u=Ml(a),u.callback=null,Nl(l,u,a),l=a,e.current.lanes=l,Nn(e,l),el(e),t[Ra]=e.current,fo(t),new Vi(e)},zu.version="19.1.0",zu}var v0;function rg(){if(v0)return jo.exports;v0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),jo.exports=cg(),jo.exports}var og=rg(),oe=function(){return oe=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(c[p]=o[p])}return c},oe.apply(this,arguments)};function Cu(n,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,p;r<d;r++)(p||!(r in c))&&(p||(p=Array.prototype.slice.call(c,0,r)),p[r]=c[r]);return n.concat(p||Array.prototype.slice.call(c))}var kt="-ms-",Nu="-moz-",Ot="-webkit-",K0="comm",fc="rule",us="decl",sg="@import",J0="@keyframes",fg="@layer",W0=Math.abs,is=String.fromCharCode,Go=Object.assign;function dg(n,c){return re(n,0)^45?(((c<<2^re(n,0))<<2^re(n,1))<<2^re(n,2))<<2^re(n,3):0}function F0(n){return n.trim()}function El(n,c){return(n=c.exec(n))?n[0]:n}function bt(n,c,o){return n.replace(c,o)}function tc(n,c,o){return n.indexOf(c,o)}function re(n,c){return n.charCodeAt(c)|0}function Sn(n,c,o){return n.slice(c,o)}function al(n){return n.length}function I0(n){return n.length}function Ou(n,c){return c.push(n),n}function hg(n,c){return n.map(c).join("")}function y0(n,c){return n.filter(function(o){return!El(o,c)})}var dc=1,En=1,P0=0,Ge=0,te=0,zn="";function hc(n,c,o,r,d,p,v,O){return{value:n,root:c,parent:o,type:r,props:d,children:p,line:dc,column:En,length:v,return:"",siblings:O}}function Jl(n,c){return Go(hc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function mn(n){for(;n.root;)n=Jl(n.root,{children:[n]});Ou(n,n.siblings)}function pg(){return te}function mg(){return te=Ge>0?re(zn,--Ge):0,En--,te===10&&(En=1,dc--),te}function Ke(){return te=Ge<P0?re(zn,Ge++):0,En++,te===10&&(En=1,dc++),te}function Ea(){return re(zn,Ge)}function ec(){return Ge}function pc(n,c){return Sn(zn,n,c)}function qo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bg(n){return dc=En=1,P0=al(zn=n),Ge=0,[]}function gg(n){return zn="",n}function Ho(n){return F0(pc(Ge-1,Xo(n===91?n+2:n===40?n+1:n)))}function vg(n){for(;(te=Ea())&&te<33;)Ke();return qo(n)>2||qo(te)>3?"":" "}function yg(n,c){for(;--c&&Ke()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return pc(n,ec()+(c<6&&Ea()==32&&Ke()==32))}function Xo(n){for(;Ke();)switch(te){case n:return Ge;case 34:case 39:n!==34&&n!==39&&Xo(te);break;case 40:n===41&&Xo(n);break;case 92:Ke();break}return Ge}function Ag(n,c){for(;Ke()&&n+te!==57;)if(n+te===84&&Ea()===47)break;return"/*"+pc(c,Ge-1)+"*"+is(n===47?n:Ke())}function xg(n){for(;!qo(Ea());)Ke();return pc(n,Ge)}function Sg(n){return gg(lc("",null,null,null,[""],n=bg(n),0,[0],n))}function lc(n,c,o,r,d,p,v,O,x){for(var b=0,z=0,M=v,H=0,K=0,L=0,et=1,P=1,J=1,V=0,Y="",W=d,G=p,I=r,tt=Y;P;)switch(L=V,V=Ke()){case 40:if(L!=108&&re(tt,M-1)==58){tc(tt+=bt(Ho(V),"&","&\f"),"&\f",W0(b?O[b-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:tt+=Ho(V);break;case 9:case 10:case 13:case 32:tt+=vg(L);break;case 92:tt+=yg(ec()-1,7);continue;case 47:switch(Ea()){case 42:case 47:Ou(Eg(Ag(Ke(),ec()),c,o,x),x);break;default:tt+="/"}break;case 123*et:O[b++]=al(tt)*J;case 125*et:case 59:case 0:switch(V){case 0:case 125:P=0;case 59+z:J==-1&&(tt=bt(tt,/\f/g,"")),K>0&&al(tt)-M&&Ou(K>32?x0(tt+";",r,o,M-1,x):x0(bt(tt," ","")+";",r,o,M-2,x),x);break;case 59:tt+=";";default:if(Ou(I=A0(tt,c,o,b,z,d,O,Y,W=[],G=[],M,p),p),V===123)if(z===0)lc(tt,c,I,I,W,p,M,O,G);else switch(H===99&&re(tt,3)===110?100:H){case 100:case 108:case 109:case 115:lc(n,I,I,r&&Ou(A0(n,I,I,0,0,d,O,Y,d,W=[],M,G),G),d,G,M,O,r?W:G);break;default:lc(tt,I,I,I,[""],G,0,O,G)}}b=z=K=0,et=J=1,Y=tt="",M=v;break;case 58:M=1+al(tt),K=L;default:if(et<1){if(V==123)--et;else if(V==125&&et++==0&&mg()==125)continue}switch(tt+=is(V),V*et){case 38:J=z>0?1:(tt+="\f",-1);break;case 44:O[b++]=(al(tt)-1)*J,J=1;break;case 64:Ea()===45&&(tt+=Ho(Ke())),H=Ea(),z=M=al(Y=tt+=xg(ec())),V++;break;case 45:L===45&&al(tt)==2&&(et=0)}}return p}function A0(n,c,o,r,d,p,v,O,x,b,z,M){for(var H=d-1,K=d===0?p:[""],L=I0(K),et=0,P=0,J=0;et<r;++et)for(var V=0,Y=Sn(n,H+1,H=W0(P=v[et])),W=n;V<L;++V)(W=F0(P>0?K[V]+" "+Y:bt(Y,/&\f/g,K[V])))&&(x[J++]=W);return hc(n,c,o,d===0?fc:O,x,b,z,M)}function Eg(n,c,o,r){return hc(n,c,o,K0,is(pg()),Sn(n,2,-2),0,r)}function x0(n,c,o,r,d){return hc(n,c,o,us,Sn(n,0,r),Sn(n,r+1,-1),r,d)}function tp(n,c,o){switch(dg(n,c)){case 5103:return Ot+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ot+n+n;case 4789:return Nu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ot+n+Nu+n+kt+n+n;case 5936:switch(re(n,c+11)){case 114:return Ot+n+kt+bt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ot+n+kt+bt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ot+n+kt+bt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ot+n+kt+n+n;case 6165:return Ot+n+kt+"flex-"+n+n;case 5187:return Ot+n+bt(n,/(\w+).+(:[^]+)/,Ot+"box-$1$2"+kt+"flex-$1$2")+n;case 5443:return Ot+n+kt+"flex-item-"+bt(n,/flex-|-self/g,"")+(El(n,/flex-|baseline/)?"":kt+"grid-row-"+bt(n,/flex-|-self/g,""))+n;case 4675:return Ot+n+kt+"flex-line-pack"+bt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ot+n+kt+bt(n,"shrink","negative")+n;case 5292:return Ot+n+kt+bt(n,"basis","preferred-size")+n;case 6060:return Ot+"box-"+bt(n,"-grow","")+Ot+n+kt+bt(n,"grow","positive")+n;case 4554:return Ot+bt(n,/([^-])(transform)/g,"$1"+Ot+"$2")+n;case 6187:return bt(bt(bt(n,/(zoom-|grab)/,Ot+"$1"),/(image-set)/,Ot+"$1"),n,"")+n;case 5495:case 3959:return bt(n,/(image-set\([^]*)/,Ot+"$1$`$1");case 4968:return bt(bt(n,/(.+:)(flex-)?(.*)/,Ot+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ot+n+n;case 4200:if(!El(n,/flex-|baseline/))return kt+"grid-column-align"+Sn(n,c)+n;break;case 2592:case 3360:return kt+bt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,El(r.props,/grid-\w+-end/)})?~tc(n+(o=o[c].value),"span",0)?n:kt+bt(n,"-start","")+n+kt+"grid-row-span:"+(~tc(o,"span",0)?El(o,/\d+/):+El(o,/\d+/)-+El(n,/\d+/))+";":kt+bt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(r){return El(r.props,/grid-\w+-start/)})?n:kt+bt(bt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return bt(n,/(.+)-inline(.+)/,Ot+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(al(n)-1-c>6)switch(re(n,c+1)){case 109:if(re(n,c+4)!==45)break;case 102:return bt(n,/(.+:)(.+)-([^]+)/,"$1"+Ot+"$2-$3$1"+Nu+(re(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~tc(n,"stretch",0)?tp(bt(n,"stretch","fill-available"),c,o)+n:n}break;case 5152:case 5920:return bt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,p,v,O,x,b){return kt+d+":"+p+b+(v?kt+d+"-span:"+(O?x:+x-+p)+b:"")+n});case 4949:if(re(n,c+6)===121)return bt(n,":",":"+Ot)+n;break;case 6444:switch(re(n,re(n,14)===45?18:11)){case 120:return bt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ot+(re(n,14)===45?"inline-":"")+"box$3$1"+Ot+"$2$3$1"+kt+"$2box$3")+n;case 100:return bt(n,":",":"+kt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(n,"scroll-","scroll-snap-")+n}return n}function uc(n,c){for(var o="",r=0;r<n.length;r++)o+=c(n[r],r,n,c)||"";return o}function Tg(n,c,o,r){switch(n.type){case fg:if(n.children.length)break;case sg:case us:return n.return=n.return||n.value;case K0:return"";case J0:return n.return=n.value+"{"+uc(n.children,r)+"}";case fc:if(!al(n.value=n.props.join(",")))return""}return al(o=uc(n.children,r))?n.return=n.value+"{"+o+"}":""}function wg(n){var c=I0(n);return function(o,r,d,p){for(var v="",O=0;O<c;O++)v+=n[O](o,r,d,p)||"";return v}}function Dg(n){return function(c){c.root||(c=c.return)&&n(c)}}function zg(n,c,o,r){if(n.length>-1&&!n.return)switch(n.type){case us:n.return=tp(n.value,n.length,o);return;case J0:return uc([Jl(n,{value:bt(n.value,"@","@"+Ot)})],r);case fc:if(n.length)return hg(o=n.props,function(d){switch(El(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mn(Jl(n,{props:[bt(d,/:(read-\w+)/,":"+Nu+"$1")]})),mn(Jl(n,{props:[d]})),Go(n,{props:y0(o,r)});break;case"::placeholder":mn(Jl(n,{props:[bt(d,/:(plac\w+)/,":"+Ot+"input-$1")]})),mn(Jl(n,{props:[bt(d,/:(plac\w+)/,":"+Nu+"$1")]})),mn(Jl(n,{props:[bt(d,/:(plac\w+)/,kt+"input-$1")]})),mn(Jl(n,{props:[d]})),Go(n,{props:y0(o,r)});break}return""})}}var Og={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},Tn=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",ep="active",lp="data-styled-version",mc="6.1.19",cs=`/*!sc*/
`,ic=typeof window<"u"&&typeof document<"u",Rg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),Mg={},bc=Object.freeze([]),wn=Object.freeze({});function ap(n,c,o){return o===void 0&&(o=wn),n.theme!==o.theme&&n.theme||c||o.theme}var np=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ng=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cg=/(^-|-$)/g;function S0(n){return n.replace(Ng,"-").replace(Cg,"")}var jg=/(a)(d)/gi,Ji=52,E0=function(n){return String.fromCharCode(n+(n>25?39:97))};function Zo(n){var c,o="";for(c=Math.abs(n);c>Ji;c=c/Ji|0)o=E0(c%Ji)+o;return(E0(c%Ji)+o).replace(jg,"$1-$2")}var $o,up=5381,gn=function(n,c){for(var o=c.length;o;)n=33*n^c.charCodeAt(--o);return n},ip=function(n){return gn(up,n)};function cp(n){return Zo(ip(n)>>>0)}function _g(n){return n.displayName||n.name||"Component"}function ko(n){return typeof n=="string"&&!0}var rp=typeof Symbol=="function"&&Symbol.for,op=rp?Symbol.for("react.memo"):60115,Bg=rp?Symbol.for("react.forward_ref"):60112,Ug={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$g=(($o={})[Bg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$o[op]=sp,$o);function T0(n){return("type"in(c=n)&&c.type.$$typeof)===op?sp:"$$typeof"in n?$g[n.$$typeof]:Ug;var c}var kg=Object.defineProperty,Qg=Object.getOwnPropertyNames,w0=Object.getOwnPropertySymbols,Yg=Object.getOwnPropertyDescriptor,Lg=Object.getPrototypeOf,D0=Object.prototype;function fp(n,c,o){if(typeof c!="string"){if(D0){var r=Lg(c);r&&r!==D0&&fp(n,r,o)}var d=Qg(c);w0&&(d=d.concat(w0(c)));for(var p=T0(n),v=T0(c),O=0;O<d.length;++O){var x=d[O];if(!(x in Hg||o&&o[x]||v&&x in v||p&&x in p)){var b=Yg(c,x);try{kg(n,x,b)}catch{}}}}return n}function Ta(n){return typeof n=="function"}function rs(n){return typeof n=="object"&&"styledComponentId"in n}function xa(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Vo(n,c){if(n.length===0)return"";for(var o=n[0],r=1;r<n.length;r++)o+=n[r];return o}function ju(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ko(n,c,o){if(o===void 0&&(o=!1),!o&&!ju(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=Ko(n[r],c[r]);else if(ju(c))for(var r in c)n[r]=Ko(n[r],c[r]);return n}function os(n,c){Object.defineProperty(n,"toString",{value:c})}function wa(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Gg=function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},n.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,p=d;c>=p;)if((p<<=1)<0)throw wa(16,"".concat(c));this.groupSizes=new Uint32Array(p),this.groupSizes.set(r),this.length=p;for(var v=d;v<p;v++)this.groupSizes[v]=0}for(var O=this.indexOfGroup(c+1),x=(v=0,o.length);v<x;v++)this.tag.insertRule(O,o[v])&&(this.groupSizes[c]++,O++)},n.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var p=r;p<d;p++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),p=d+r,v=d;v<p;v++)o+="".concat(this.tag.getRule(v)).concat(cs);return o},n}(),ac=new Map,cc=new Map,nc=1,Wi=function(n){if(ac.has(n))return ac.get(n);for(;cc.has(nc);)nc++;var c=nc++;return ac.set(n,c),cc.set(c,n),c},qg=function(n,c){nc=c+1,ac.set(n,c),cc.set(c,n)},Xg="style[".concat(Tn,"][").concat(lp,'="').concat(mc,'"]'),Zg=new RegExp("^".concat(Tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vg=function(n,c,o){for(var r,d=o.split(","),p=0,v=d.length;p<v;p++)(r=d[p])&&n.registerName(c,r)},Kg=function(n,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(cs),d=[],p=0,v=r.length;p<v;p++){var O=r[p].trim();if(O){var x=O.match(Zg);if(x){var b=0|parseInt(x[1],10),z=x[2];b!==0&&(qg(z,b),Vg(n,z,x[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(O)}}},z0=function(n){for(var c=document.querySelectorAll(Xg),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(Tn)!==ep&&(Kg(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Jg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dp=function(n){var c=document.head,o=n||c,r=document.createElement("style"),d=function(O){var x=Array.from(O.querySelectorAll("style[".concat(Tn,"]")));return x[x.length-1]}(o),p=d!==void 0?d.nextSibling:null;r.setAttribute(Tn,ep),r.setAttribute(lp,mc);var v=Jg();return v&&r.setAttribute("nonce",v),o.insertBefore(r,p),r},Wg=function(){function n(c){this.element=dp(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,p=r.length;d<p;d++){var v=r[d];if(v.ownerNode===o)return v}throw wa(17)}(this.element),this.length=0}return n.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},n}(),Fg=function(){function n(c){this.element=dp(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n}(),Ig=function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n}(),O0=ic,Pg={isServer:!ic,useCSSOMInjection:!Rg},rc=function(){function n(c,o,r){c===void 0&&(c=wn),o===void 0&&(o={});var d=this;this.options=oe(oe({},Pg),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&ic&&O0&&(O0=!1,z0(this)),os(this,function(){return function(p){for(var v=p.getTag(),O=v.length,x="",b=function(M){var H=function(J){return cc.get(J)}(M);if(H===void 0)return"continue";var K=p.names.get(H),L=v.getGroup(M);if(K===void 0||!K.size||L.length===0)return"continue";var et="".concat(Tn,".g").concat(M,'[id="').concat(H,'"]'),P="";K!==void 0&&K.forEach(function(J){J.length>0&&(P+="".concat(J,","))}),x+="".concat(L).concat(et,'{content:"').concat(P,'"}').concat(cs)},z=0;z<O;z++)b(z);return x}(d)})}return n.registerId=function(c){return Wi(c)},n.prototype.rehydrate=function(){!this.server&&ic&&z0(this)},n.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new n(oe(oe({},this.options),c),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new Ig(d):r?new Wg(d):new Fg(d)}(this.options),new Gg(c)));var c},n.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},n.prototype.registerName=function(c,o){if(Wi(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},n.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Wi(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Wi(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n}(),tv=/&/g,ev=/^\s*\/\/.*$/gm;function hp(n,c){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=hp(o.children,c)),o})}function lv(n){var c,o,r,d=wn,p=d.options,v=p===void 0?wn:p,O=d.plugins,x=O===void 0?bc:O,b=function(H,K,L){return L.startsWith(o)&&L.endsWith(o)&&L.replaceAll(o,"").length>0?".".concat(c):H},z=x.slice();z.push(function(H){H.type===fc&&H.value.includes("&")&&(H.props[0]=H.props[0].replace(tv,o).replace(r,b))}),v.prefix&&z.push(zg),z.push(Tg);var M=function(H,K,L,et){K===void 0&&(K=""),L===void 0&&(L=""),et===void 0&&(et="&"),c=et,o=K,r=new RegExp("\\".concat(o,"\\b"),"g");var P=H.replace(ev,""),J=Sg(L||K?"".concat(L," ").concat(K," { ").concat(P," }"):P);v.namespace&&(J=hp(J,v.namespace));var V=[];return uc(J,wg(z.concat(Dg(function(Y){return V.push(Y)})))),V};return M.hash=x.length?x.reduce(function(H,K){return K.name||wa(15),gn(H,K.name)},up).toString():"",M}var av=new rc,Jo=lv(),pp=R.createContext({shouldForwardProp:void 0,styleSheet:av,stylis:Jo});pp.Consumer;R.createContext(void 0);function Wo(){return D.useContext(pp)}var nv=function(){function n(c,o){var r=this;this.inject=function(d,p){p===void 0&&(p=Jo);var v=r.name+p.hash;d.hasNameForId(r.id,v)||d.insertRules(r.id,v,p(r.rules,v,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,os(this,function(){throw wa(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Jo),this.name+c.hash},n}(),uv=function(n){return n>="A"&&n<="Z"};function R0(n){for(var c="",o=0;o<n.length;o++){var r=n[o];if(o===1&&r==="-"&&n[0]==="-")return n;uv(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var mp=function(n){return n==null||n===!1||n===""},bp=function(n){var c,o,r=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!mp(p)&&(Array.isArray(p)&&p.isCss||Ta(p)?r.push("".concat(R0(d),":"),p,";"):ju(p)?r.push.apply(r,Cu(Cu(["".concat(d," {")],bp(p),!1),["}"],!1)):r.push("".concat(R0(d),": ").concat((c=d,(o=p)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Og||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Wl(n,c,o,r){if(mp(n))return[];if(rs(n))return[".".concat(n.styledComponentId)];if(Ta(n)){if(!Ta(p=n)||p.prototype&&p.prototype.isReactComponent||!c)return[n];var d=n(c);return Wl(d,c,o,r)}var p;return n instanceof nv?o?(n.inject(o,r),[n.getName(r)]):[n]:ju(n)?bp(n):Array.isArray(n)?Array.prototype.concat.apply(bc,n.map(function(v){return Wl(v,c,o,r)})):[n.toString()]}function gp(n){for(var c=0;c<n.length;c+=1){var o=n[c];if(Ta(o)&&!rs(o))return!1}return!0}var iv=ip(mc),cv=function(){function n(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gp(c),this.componentId=o,this.baseHash=gn(iv,o),this.baseStyle=r,rc.registerId(o)}return n.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=xa(d,this.staticRulesId);else{var p=Vo(Wl(this.rules,c,o,r)),v=Zo(gn(this.baseHash,p)>>>0);if(!o.hasNameForId(this.componentId,v)){var O=r(p,".".concat(v),void 0,this.componentId);o.insertRules(this.componentId,v,O)}d=xa(d,v),this.staticRulesId=v}else{for(var x=gn(this.baseHash,r.hash),b="",z=0;z<this.rules.length;z++){var M=this.rules[z];if(typeof M=="string")b+=M;else if(M){var H=Vo(Wl(M,c,o,r));x=gn(x,H+z),b+=H}}if(b){var K=Zo(x>>>0);o.hasNameForId(this.componentId,K)||o.insertRules(this.componentId,K,r(b,".".concat(K),void 0,this.componentId)),d=xa(d,K)}}return d},n}(),_u=R.createContext(void 0);_u.Consumer;function M0(n){var c=R.useContext(_u),o=D.useMemo(function(){return function(r,d){if(!r)throw wa(14);if(Ta(r)){var p=r(d);return p}if(Array.isArray(r)||typeof r!="object")throw wa(8);return d?oe(oe({},d),r):r}(n.theme,c)},[n.theme,c]);return n.children?R.createElement(_u.Provider,{value:o},n.children):null}var Qo={};function rv(n,c,o){var r=rs(n),d=n,p=!ko(n),v=c.attrs,O=v===void 0?bc:v,x=c.componentId,b=x===void 0?function(W,G){var I=typeof W!="string"?"sc":S0(W);Qo[I]=(Qo[I]||0)+1;var tt="".concat(I,"-").concat(cp(mc+I+Qo[I]));return G?"".concat(G,"-").concat(tt):tt}(c.displayName,c.parentComponentId):x,z=c.displayName,M=z===void 0?function(W){return ko(W)?"styled.".concat(W):"Styled(".concat(_g(W),")")}(n):z,H=c.displayName&&c.componentId?"".concat(S0(c.displayName),"-").concat(c.componentId):c.componentId||b,K=r&&d.attrs?d.attrs.concat(O).filter(Boolean):O,L=c.shouldForwardProp;if(r&&d.shouldForwardProp){var et=d.shouldForwardProp;if(c.shouldForwardProp){var P=c.shouldForwardProp;L=function(W,G){return et(W,G)&&P(W,G)}}else L=et}var J=new cv(o,H,r?d.componentStyle:void 0);function V(W,G){return function(I,tt,vt){var wt=I.attrs,Zt=I.componentStyle,Bt=I.defaultProps,mt=I.foldedComponentIds,Qt=I.styledComponentId,Ut=I.target,yt=R.useContext(_u),N=Wo(),X=I.shouldForwardProp||N.shouldForwardProp,Z=ap(tt,yt,Bt)||wn,it=function(at,F,ot){for(var dt,k=oe(oe({},F),{className:void 0,theme:ot}),ft=0;ft<at.length;ft+=1){var ht=Ta(dt=at[ft])?dt(k):dt;for(var Et in ht)k[Et]=Et==="className"?xa(k[Et],ht[Et]):Et==="style"?oe(oe({},k[Et]),ht[Et]):ht[Et]}return F.className&&(k.className=xa(k.className,F.className)),k}(wt,tt,Z),m=it.as||Ut,_={};for(var q in it)it[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&it.theme===Z||(q==="forwardedAs"?_.as=it.forwardedAs:X&&!X(q,m)||(_[q]=it[q]));var B=function(at,F){var ot=Wo(),dt=at.generateAndInjectStyles(F,ot.styleSheet,ot.stylis);return dt}(Zt,it),Q=xa(mt,Qt);return B&&(Q+=" "+B),it.className&&(Q+=" "+it.className),_[ko(m)&&!np.has(m)?"class":"className"]=Q,vt&&(_.ref=vt),D.createElement(m,_)}(Y,W,G)}V.displayName=M;var Y=R.forwardRef(V);return Y.attrs=K,Y.componentStyle=J,Y.displayName=M,Y.shouldForwardProp=L,Y.foldedComponentIds=r?xa(d.foldedComponentIds,d.styledComponentId):"",Y.styledComponentId=H,Y.target=r?d.target:n,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=r?function(G){for(var I=[],tt=1;tt<arguments.length;tt++)I[tt-1]=arguments[tt];for(var vt=0,wt=I;vt<wt.length;vt++)Ko(G,wt[vt],!0);return G}({},d.defaultProps,W):W}}),os(Y,function(){return".".concat(Y.styledComponentId)}),p&&fp(Y,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function N0(n,c){for(var o=[n[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],n[r+1]);return o}var C0=function(n){return Object.assign(n,{isCss:!0})};function lt(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Ta(n)||ju(n))return C0(Wl(N0(bc,Cu([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?Wl(r):C0(Wl(N0(r,c)))}function Fo(n,c,o){if(o===void 0&&(o=wn),!c)throw wa(1,c);var r=function(d){for(var p=[],v=1;v<arguments.length;v++)p[v-1]=arguments[v];return n(c,o,lt.apply(void 0,Cu([d],p,!1)))};return r.attrs=function(d){return Fo(n,c,oe(oe({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return Fo(n,c,oe(oe({},o),d))},r}var vp=function(n){return Fo(rv,n)},$=vp;np.forEach(function(n){$[n]=vp(n)});var ov=function(){function n(c,o){this.rules=c,this.componentId=o,this.isStatic=gp(c),rc.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,o,r,d){var p=d(Vo(Wl(this.rules,o,r,d)),""),v=this.componentId+c;r.insertRules(v,v,p)},n.prototype.removeStyles=function(c,o){o.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,o,r,d){c>2&&rc.registerId(this.componentId+c),this.removeStyles(c,r),this.createStyles(c,o,r,d)},n}();function sv(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var r=lt.apply(void 0,Cu([n],c,!1)),d="sc-global-".concat(cp(JSON.stringify(r))),p=new ov(r,d),v=function(x){var b=Wo(),z=R.useContext(_u),M=R.useRef(b.styleSheet.allocateGSInstance(d)).current;return b.styleSheet.server&&O(M,x,b.styleSheet,z,b.stylis),R.useLayoutEffect(function(){if(!b.styleSheet.server)return O(M,x,b.styleSheet,z,b.stylis),function(){return p.removeStyles(M,b.styleSheet)}},[M,x,b.styleSheet,z,b.stylis]),null};function O(x,b,z,M,H){if(p.isStatic)p.renderStyles(x,Mg,z,H);else{var K=oe(oe({},b),{theme:ap(b,M,v.defaultProps)});p.renderStyles(x,K,z,H)}}return R.memo(v)}const fv="/95-Portfolio/assets/stars-C6O0RJ9m.png";function dv({enabled:n}){const[c,o]=D.useState([]);return D.useEffect(()=>{let r;return n&&(r=setInterval(()=>{const d={id:Date.now()+Math.random(),left:Math.random()*window.innerWidth,size:Math.random()*3+5,speed:Math.random()*3+1};o(p=>[...p,d])},200)),n||o([]),()=>clearInterval(r)},[n]),D.useEffect(()=>{if(!n)return;const r=setInterval(()=>{o(d=>d.map(p=>({...p,top:(p.top||0)+p.speed})).filter(p=>(p.top||0)<window.innerHeight))},50);return()=>clearInterval(r)},[n]),y.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",width:"100%",height:"100%"},children:c.map(r=>y.jsx("img",{src:fv,style:{position:"absolute",top:r.top||0,left:r.left,width:r.size,height:r.size,pointerEvents:"none"}},r.id))})}var hv=`
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

`;const ss="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",fs="inset 2px 2px 3px rgba(0,0,0,0.2)",Je=()=>lt`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,We=({background:n="material",color:c="materialText"}={})=>lt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[c]};
`,Bu=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:o=2})=>lt`
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
`,Da=()=>lt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,bn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},pv=({theme:n,topLeftInner:c,bottomRightInner:o,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?ss:!1,d?fs:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),Xt=({invert:n=!1,style:c="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return lt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[bn[c][o.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[bn[c][o.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[bn[c][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[bn[c][o.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>pv({theme:r,topLeftInner:bn[c][o.topLeftInner],bottomRightInner:bn[c][o.bottomRightInner],hasShadow:d})};
  `},Dn=()=>lt`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,mv=n=>Buffer.from(n).toString("base64"),bv=typeof btoa<"u"?btoa:mv,Fi=(n,c=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${bv(o)})`},ds=(n="default")=>lt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>Bu({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${We()}
    ${n==="flat"?Da():Xt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${We()}
    ${n==="flat"?Da():Xt({style:"window"})}
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
    background-image: ${({theme:c})=>Fi(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>Fi(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>Fi(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>Fi(c.materialText,0)};
  }
`,gv=$.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,vv=D.forwardRef(({children:n,underline:c=!0,...o},r)=>R.createElement(gv,{ref:r,underline:c,...o},n));vv.displayName="Anchor";const yv=$.header`
  ${Xt()};
  ${We()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,yp=D.forwardRef(({children:n,fixed:c=!0,position:o="fixed",...r},d)=>R.createElement(yv,{fixed:c,position:c!==!1?o:void 0,ref:d,...r},n));yp.displayName="AppBar";const za=()=>{};function Sa(n,c,o){return o!==null&&n>o?o:c!==null&&n<c?c:n}function Av(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),r=o[0].split(".")[1];return(r?r.length:0)+parseInt(o[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function j0(n,c,o){const r=Math.round((n-o)/c)*c+o;return Number(r.toFixed(Av(c)))}function Fl(n){return typeof n=="number"?`${n}px`:n}const xv=$.div`
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
`,Sv=$.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Ev=D.forwardRef(({alt:n="",children:c,noBorder:o=!1,size:r=35,square:d=!1,src:p,...v},O)=>R.createElement(xv,{noBorder:o,ref:O,size:Fl(r),square:d,src:p,...v},p?R.createElement(Sv,{src:p,alt:n}):c));Ev.displayName="Avatar";const he={sm:"28px",md:"36px",lg:"44px"},Tv=lt`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>he[n]};
  width: ${({fullWidth:n,size:c="md",square:o})=>n?"100%":o?he[c]:"auto"};
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
`,gc=$.button`
  ${({active:n,disabled:c,primary:o,theme:r,variant:d})=>d==="flat"?lt`
          ${Da()}
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
            ${!n&&!c&&Dn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?lt`
          ${We()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!n&&Xt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Xt({style:"buttonThinPressed"})}
          }
          ${n&&Xt({style:"buttonThinPressed"})}
          ${c&&Je()}
        `:lt`
          ${We()};
          border: none;
          ${c&&Je()}
          ${n?Bu({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?lt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:lt`
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
            ${!n&&!c&&Dn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Tv}
`,ce=D.forwardRef(({onClick:n,disabled:c=!1,children:o,type:r="button",fullWidth:d=!1,size:p="md",square:v=!1,active:O=!1,onTouchStart:x=za,primary:b=!1,variant:z="default",...M},H)=>R.createElement(gc,{active:O,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:x,primary:b,ref:H,size:p,square:v,type:r,variant:z,...M},o));ce.displayName="Button";function Il({defaultValue:n,onChange:c,onChangePropName:o="onChange",readOnly:r,value:d,valuePropName:p="value"}){const v=d!==void 0,[O,x]=D.useState(n),b=D.useCallback(z=>{v||x(z)},[v]);if(v&&typeof c!="function"&&!r){const z=`Warning: You provided a \`${p}\` prop to a component without an \`${o}\` handler.${p==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${p}\`.`}`;console.warn(z)}return[v?d:O,b]}const Io=$.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>he[n.size]};
  width: ${n=>n.square?he[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>he[n.size]};
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
  ${n=>n.$disabled&&Je()}
`,Ru=D.forwardRef(({size:n="lg",disabled:c,square:o,children:r,onClick:d,primary:p,...v},O)=>R.createElement(Io,{$disabled:c,size:n,square:o,onClick:c?void 0:d,primary:p,role:"menuitem",ref:O,"aria-disabled":c,...v},r));Ru.displayName="MenuListItem";const Ap=$.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Xt({style:"window"})}
  ${We()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Ap.displayName="MenuList";const nl=20,oc=$.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${nl}px;
  height: ${nl}px;
  opacity: 0;
  z-index: -1;
`,hs=$.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&Je()}

  ${Io} & {
    margin: 0;
    height: 100%;
  }
  ${Io}:hover & {
    ${({$disabled:n,theme:c})=>!n&&lt`
        color: ${c.materialTextInvert};
      `};
  }
`,ps=$.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${oc}:focus ~ & {
    ${Dn}
  }
  ${oc}:not(:disabled) ~ &:active {
    ${Dn}
  }
`,ul=$.div`
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
    ${n=>n.shadow&&`box-shadow:${fs};`}
  }
`,wv=$.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${ds()}
`,vn=D.forwardRef(({children:n,shadow:c=!0,...o},r)=>R.createElement(ul,{ref:r,shadow:c,...o},R.createElement(wv,null,n)));vn.displayName="ScrollView";const xp=lt`
  width: ${nl}px;
  height: ${nl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Dv=$(ul)`
  ${xp}
  width: ${nl}px;
  height: ${nl}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,zv=$.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${xp}
  width: ${nl-4}px;
  height: ${nl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,Ov=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Rv=$.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>Bu({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Mv={flat:zv,default:Dv},Nv=D.forwardRef(({checked:n,className:c="",defaultChecked:o=!1,disabled:r=!1,indeterminate:d=!1,label:p="",onChange:v=za,style:O={},value:x,variant:b="default",...z},M)=>{var H;const[K,L]=Il({defaultValue:o,onChange:v,readOnly:(H=z.readOnly)!==null&&H!==void 0?H:r,value:n}),et=D.useCallback(V=>{const Y=V.target.checked;L(Y),v(V)},[v,L]),P=Mv[b];let J=null;return d?J=Rv:K&&(J=Ov),R.createElement(hs,{$disabled:r,className:c,style:O},R.createElement(oc,{disabled:r,onChange:r?void 0:et,readOnly:r,type:"checkbox",value:x,checked:K,"data-indeterminate":d,ref:M,...z}),R.createElement(P,{$disabled:r,role:"presentation"},J&&R.createElement(J,{$disabled:r,variant:b})),p&&R.createElement(ps,null,p))});Nv.displayName="Checkbox";const yn=$.div`
  ${({orientation:n,theme:c,size:o="100%"})=>n==="vertical"?`
    height: ${Fl(o)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${Fl(o)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;yn.displayName="Separator";const Cv=$(gc)`
  padding-left: 8px;
`,jv=$(yn)`
  height: 21px;
  position: relative;
  top: 0;
`,Sp=$.input`
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
`,_v=$.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?lt`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:lt`
          border: 2px solid ${({theme:c})=>c.materialText};
        `}
  ${Sp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Dn}
    outline-offset: -8px;
  }
`,Bv=$.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?lt`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:lt`
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
`,Uv=D.forwardRef(({value:n,defaultValue:c,onChange:o=za,disabled:r=!1,variant:d="default",...p},v)=>{var O;const[x,b]=Il({defaultValue:c,onChange:o,readOnly:(O=p.readOnly)!==null&&O!==void 0?O:r,value:n}),z=M=>{const H=M.target.value;b(H),o(M)};return R.createElement(Cv,{disabled:r,as:"div",variant:d,size:"md"},R.createElement(Sp,{onChange:z,readOnly:r,disabled:r,value:x??"#008080",type:"color",ref:v,...p}),R.createElement(_v,{$disabled:r,color:x??"#008080",role:"presentation"}),d==="default"&&R.createElement(jv,{orientation:"vertical"}),R.createElement(Bv,{$disabled:r,variant:d}))});Uv.displayName="ColorInput";const Hv=$.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>lt`
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
      ${Bu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,_0=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],$v=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function kv({digit:n=0,pixelSize:c=2,...o}){const r=$v[Number(n)].map((d,p)=>d?`${_0[p]} active`:_0[p]);return R.createElement(Hv,{pixelSize:c,...o},r.map((d,p)=>R.createElement("span",{className:d,key:p})))}const Qv=$.div`
  ${Xt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Yv={sm:1,md:2,lg:3,xl:4},Lv=D.forwardRef(({value:n=0,minLength:c=3,size:o="md",...r},d)=>{const p=D.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return R.createElement(Qv,{ref:d,...r},p.map((v,O)=>R.createElement(kv,{digit:v,pixelSize:Yv[o],key:O})))});Lv.displayName="Counter";const Ep=lt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${he.md};
`,Gv=$(ul).attrs({"data-testid":"variant-default"})`
  ${Ep}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,qv=$.div.attrs({"data-testid":"variant-flat"})`
  ${Da()}
  ${Ep}
  position: relative;
`,Tp=lt`
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
  ${({disabled:n,variant:c})=>c!=="flat"&&n&&Je()}
`,Xv=$.input`
  ${Tp}
  padding: 0 8px;
`,Zv=$.textarea`
  ${Tp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>ds(n)}
`,ms=D.forwardRef(({className:n,disabled:c=!1,fullWidth:o,onChange:r=za,shadow:d=!0,style:p,variant:v="default",...O},x)=>{const b=v==="flat"?qv:Gv,z=D.useMemo(()=>{var M;return O.multiline?R.createElement(Zv,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:x,variant:v,...O}):R.createElement(Xv,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:x,type:(M=O.type)!==null&&M!==void 0?M:"text",variant:v,...O})},[c,r,O,x,v]);return R.createElement(b,{className:n,fullWidth:o,$disabled:c,shadow:d,style:p},z)});ms.displayName="TextInput";const Vv=$.div`
  display: inline-flex;
  align-items: center;
`,Po=$(ce)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?lt`
          height: calc(50% - 1px);
        `:lt`
          height: 50%;
        `}
`,Kv=$.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?lt`
          height: calc(${he.md} - 4px);
        `:lt`
          height: ${he.md};
          margin-left: 2px;
        `}
`,B0=$.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?lt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:lt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${Po}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?lt`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:lt`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,wp=D.forwardRef(({className:n,defaultValue:c,disabled:o=!1,max:r,min:d,onChange:p,readOnly:v,step:O=1,style:x,value:b,variant:z="default",width:M,...H},K)=>{const[L,et]=Il({defaultValue:c,onChange:p,readOnly:v,value:b}),P=D.useCallback(I=>{const tt=parseFloat(I.target.value);et(tt)},[et]),J=D.useCallback(I=>{const tt=Sa(parseFloat(((L??0)+I).toFixed(2)),d??null,r??null);et(tt),p==null||p(tt)},[r,d,p,et,L]),V=D.useCallback(()=>{L!==void 0&&(p==null||p(L))},[p,L]),Y=D.useCallback(()=>{J(O)},[J,O]),W=D.useCallback(()=>{J(-O)},[J,O]),G=z==="flat"?"flat":"raised";return R.createElement(Vv,{className:n,style:{...x,width:M!==void 0?Fl(M):"auto"},...H},R.createElement(ms,{value:L,variant:z,onChange:P,disabled:o,type:"number",readOnly:v,ref:K,fullWidth:!0,onBlur:V}),R.createElement(Kv,{variant:z},R.createElement(Po,{"data-testid":"increment",variant:G,disabled:o||v,onClick:Y},R.createElement(B0,{invert:!0})),R.createElement(Po,{"data-testid":"decrement",variant:G,disabled:o||v,onClick:W},R.createElement(B0,null))))});wp.displayName="NumberInput";function Jv(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let o=0;o<10;o+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const Dp=n=>D.useMemo(()=>Jv(),[n]),zp=lt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Op=lt`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,bs=$.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Wv=$.div`
  ${zp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${bs}:focus & {
    ${Op}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Rp=lt`
  height: ${he.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?Je():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Fv=$(ul)`
  ${Rp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,Iv=$.div`
  ${Da()}
  ${Rp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,Pv=$.select`
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
  ${zp}
  cursor: pointer;
  &:disabled {
    ${Je()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Mp=$(gc).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?lt`
          height: 100%;
          margin-right: 0;
        `:lt`
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
`,ty=$.span`
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
  ${Mp}:active & {
    margin-top: 2px;
  }
`,ey=$.ul`
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
  box-shadow: ${ss};
  ${({variant:n="default"})=>n==="flat"?lt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:lt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>ds(n)}
`,ly=$.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${he.md} - 4px);
  line-height: calc(${he.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?Op:""}
  user-select: none;
`,ay=[],Np=({className:n,defaultValue:c,disabled:o,native:r,onChange:d,options:p=ay,readOnly:v,style:O,value:x,variant:b,width:z})=>{var M;const H=D.useMemo(()=>p.filter(Boolean),[p]),[K,L]=Il({defaultValue:c??((M=H==null?void 0:H[0])===null||M===void 0?void 0:M.value),onChange:d,readOnly:v,value:x}),et=!(o||v),P=D.useMemo(()=>({className:n,style:{...O,width:z}}),[n,O,z]),J=D.useMemo(()=>R.createElement(Mp,{as:"div","data-testid":"select-button",$disabled:o,native:r,tabIndex:-1,variant:b==="flat"?"flat":"raised"},R.createElement(ty,{"data-testid":"select-icon",$disabled:o})),[o,r,b]),V=D.useMemo(()=>b==="flat"?Iv:Fv,[b]);return D.useMemo(()=>({isEnabled:et,options:H,value:K,setValue:L,wrapperProps:P,DropdownButton:J,Wrapper:V}),[J,V,et,H,L,K,P])},ny={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},uy=1e3,iy=({onBlur:n,onChange:c,onClose:o,onFocus:r,onKeyDown:d,onMouseDown:p,onOpen:v,open:O,options:x,readOnly:b,value:z,selectRef:M,setValue:H,wrapperRef:K})=>{const L=D.useRef(null),et=D.useRef([]),P=D.useRef(0),J=D.useRef(0),V=D.useRef(),Y=D.useRef("search"),W=D.useRef(""),G=D.useRef(),[I,tt]=Il({defaultValue:!1,onChange:v,onChangePropName:"onOpen",readOnly:b,value:O,valuePropName:"open"}),vt=D.useMemo(()=>{const k=x.findIndex(ft=>ft.value===z);return P.current=Sa(k,0,null),x[k]},[x,z]),[wt,Zt]=D.useState(x[0]),Bt=D.useCallback(k=>{const ft=L.current,ht=et.current[k];if(!ht||!ft){V.current=k;return}V.current=void 0;const Et=ft.clientHeight,Nt=ft.scrollTop,Vt=ft.scrollTop+Et,Kt=ht.offsetTop,ve=ht.offsetHeight,Ft=ht.offsetTop+ht.offsetHeight;Kt<Nt&&ft.scrollTo(0,Kt),Ft>Vt&&ft.scrollTo(0,Kt-Et+ve),ht.focus({preventScroll:!0})},[L]),mt=D.useCallback((k,{scroll:ft}={})=>{var ht;const Et=x.length-1;let Nt;switch(k){case"first":{Nt=0;break}case"last":{Nt=Et;break}case"next":{Nt=Sa(J.current+1,0,Et);break}case"previous":{Nt=Sa(J.current-1,0,Et);break}case"selected":{Nt=Sa((ht=P.current)!==null&&ht!==void 0?ht:0,0,Et);break}default:Nt=k}J.current=Nt,Zt(x[Nt]),ft&&Bt(Nt)},[J,x,Bt]),Qt=D.useCallback(({fromEvent:k})=>{tt(!0),mt("selected",{scroll:!0}),v==null||v({fromEvent:k})},[mt,v,tt]),Ut=D.useCallback(()=>{Y.current="search",W.current="",clearTimeout(G.current)},[]),yt=D.useCallback(({focusSelect:k,fromEvent:ft})=>{var ht;o==null||o({fromEvent:ft}),tt(!1),Zt(x[0]),Ut(),V.current=void 0,k&&((ht=M.current)===null||ht===void 0||ht.focus())},[Ut,o,x,M,tt]),N=D.useCallback(({fromEvent:k})=>{I?yt({focusSelect:!1,fromEvent:k}):Qt({fromEvent:k})},[yt,Qt,I]),X=D.useCallback((k,{fromEvent:ft})=>{P.current!==k&&(P.current=k,H(x[k].value),c==null||c(x[k],{fromEvent:ft}))},[c,x,H]),Z=D.useCallback(({focusSelect:k,fromEvent:ft})=>{X(J.current,{fromEvent:ft}),yt({focusSelect:k,fromEvent:ft})},[yt,X]),it=D.useCallback((k,{fromEvent:ft,select:ht})=>{var Et;switch(Y.current==="cycleFirstLetter"&&k!==W.current&&(Y.current="search"),k===W.current?Y.current="cycleFirstLetter":W.current+=k,Y.current){case"search":{let Nt=x.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(W.current))===0});Nt<0&&(Nt=x.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(k))===0}),W.current=k),Nt>=0&&(ht?X(Nt,{fromEvent:ft}):mt(Nt,{scroll:!0}));break}case"cycleFirstLetter":{const Nt=ht?(Et=P.current)!==null&&Et!==void 0?Et:-1:J.current;let Vt=x.findIndex((Kt,ve)=>{var Ft;return ve>Nt&&((Ft=Kt.label)===null||Ft===void 0?void 0:Ft.toLocaleUpperCase().indexOf(k))===0});Vt<0&&(Vt=x.findIndex(Kt=>{var ve;return((ve=Kt.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(k))===0})),Vt>=0&&(ht?X(Vt,{fromEvent:ft}):mt(Vt,{scroll:!0}));break}}clearTimeout(G.current),G.current=setTimeout(()=>{Y.current==="search"&&(W.current="")},uy)},[mt,x,X]),m=D.useCallback(k=>{var ft;k.button===0&&(k.preventDefault(),(ft=M.current)===null||ft===void 0||ft.focus(),N({fromEvent:k}),p==null||p(k))},[p,M,N]),_=D.useCallback(k=>{Z({focusSelect:!0,fromEvent:k})},[Z]),q=D.useCallback(k=>{const{altKey:ft,code:ht,ctrlKey:Et,metaKey:Nt,shiftKey:Vt}=k,{ARROW_DOWN:Kt,ARROW_UP:ve,END:Ft,ENTER:il,ESC:qe,HOME:Oa,SPACE:Tl,TAB:Pl}=ny,On=ft||Et||Nt||Vt;if(!(ht===Pl&&(ft||Et||Nt)||ht!==Pl&&On))switch(ht){case Kt:{if(k.preventDefault(),!I){Qt({fromEvent:k});return}mt("next",{scroll:!0});break}case ve:{if(k.preventDefault(),!I){Qt({fromEvent:k});return}mt("previous",{scroll:!0});break}case Ft:{if(k.preventDefault(),!I){Qt({fromEvent:k});return}mt("last",{scroll:!0});break}case il:{if(!I)return;k.preventDefault(),Z({focusSelect:!0,fromEvent:k});break}case qe:{if(!I)return;k.preventDefault(),yt({focusSelect:!0,fromEvent:k});break}case Oa:{if(k.preventDefault(),!I){Qt({fromEvent:k});return}mt("first",{scroll:!0});break}case Tl:{k.preventDefault(),I?Z({focusSelect:!0,fromEvent:k}):Qt({fromEvent:k});break}case Pl:{if(!I)return;Vt||k.preventDefault(),Z({focusSelect:!Vt,fromEvent:k});break}default:!On&&ht.match(/^Key/)&&(k.preventDefault(),k.stopPropagation(),it(ht.replace(/^Key/,""),{select:!I,fromEvent:k}))}},[mt,yt,I,Qt,it,Z]),B=D.useCallback(k=>{q(k),d==null||d(k)},[q,d]),Q=D.useCallback(k=>{mt(k)},[mt]),at=D.useCallback(k=>{I||(Ut(),n==null||n(k))},[Ut,n,I]),F=D.useCallback(k=>{Ut(),r==null||r(k)},[Ut,r]),ot=D.useCallback(k=>{L.current=k,V.current!==void 0&&Bt(V.current)},[Bt]),dt=D.useCallback((k,ft)=>{et.current[ft]=k,V.current===ft&&Bt(V.current)},[Bt]);return D.useEffect(()=>{if(!I)return()=>{};const k=ft=>{var ht;const Et=ft.target;!((ht=K.current)===null||ht===void 0)&&ht.contains(Et)||(ft.preventDefault(),yt({focusSelect:!1,fromEvent:ft}))};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[yt,I,K]),D.useMemo(()=>({activeOption:wt,handleActivateOptionIndex:Q,handleBlur:at,handleButtonKeyDown:B,handleDropdownKeyDown:q,handleFocus:F,handleMouseDown:m,handleOptionClick:_,handleSetDropdownRef:ot,handleSetOptionRef:dt,open:I,selectedOption:vt}),[wt,Q,at,B,F,q,m,_,ot,dt,I,vt])},cy=D.forwardRef(({className:n,defaultValue:c,disabled:o,onChange:r,options:d,readOnly:p,style:v,value:O,variant:x,width:b,...z},M)=>{const{isEnabled:H,options:K,setValue:L,value:et,DropdownButton:P,Wrapper:J}=Np({defaultValue:c,disabled:o,native:!0,onChange:r,options:d,readOnly:p,value:O,variant:x}),V=D.useCallback(Y=>{const W=K.find(G=>G.value===Y.target.value);W&&(L(W.value),r==null||r(W,{fromEvent:Y}))},[r,K,L]);return R.createElement(J,{className:n,style:{...v,width:b}},R.createElement(bs,null,R.createElement(Pv,{...z,disabled:o,onChange:H?V:za,ref:M,value:et},K.map((Y,W)=>{var G;return R.createElement("option",{key:`${Y.value}-${W}`,value:Y.value},(G=Y.label)!==null&&G!==void 0?G:Y.value)})),P))});cy.displayName="SelectNative";function ry({activateOptionIndex:n,active:c,index:o,onClick:r,option:d,selected:p,setRef:v}){const O=D.useCallback(()=>{n(o)},[n,o]),x=D.useCallback(z=>{v(z,o)},[o,v]),b=Dp();return R.createElement(ly,{active:c,"aria-selected":p?"true":void 0,"data-value":d.value,id:b,onClick:r,onMouseEnter:O,ref:x,role:"option",tabIndex:0},d.label)}function oy({"aria-label":n,"aria-labelledby":c,className:o,defaultValue:r,disabled:d=!1,formatDisplay:p,inputProps:v,labelId:O,menuMaxHeight:x,name:b,onBlur:z,onChange:M,onClose:H,onFocus:K,onKeyDown:L,onMouseDown:et,onOpen:P,open:J,options:V,readOnly:Y,shadow:W=!0,style:G,variant:I="default",value:tt,width:vt="auto",...wt},Zt){const{isEnabled:Bt,options:mt,setValue:Qt,value:Ut,wrapperProps:yt,DropdownButton:N,Wrapper:X}=Np({className:o,defaultValue:r,disabled:d,native:!1,onChange:M,options:V,style:G,readOnly:Y,value:tt,variant:I,width:vt}),Z=D.useRef(null),it=D.useRef(null),m=D.useRef(null),{activeOption:_,handleActivateOptionIndex:q,handleBlur:B,handleButtonKeyDown:Q,handleDropdownKeyDown:at,handleFocus:F,handleMouseDown:ot,handleOptionClick:dt,handleSetDropdownRef:k,handleSetOptionRef:ft,open:ht,selectedOption:Et}=iy({onBlur:z,onChange:M,onClose:H,onFocus:K,onKeyDown:L,onMouseDown:et,onOpen:P,open:J,options:mt,value:Ut,selectRef:it,setValue:Qt,wrapperRef:m});D.useImperativeHandle(Zt,()=>({focus:il=>{var qe;(qe=it.current)===null||qe===void 0||qe.focus(il)},node:Z.current,value:String(Ut)}),[Ut]);const Nt=D.useMemo(()=>Et?typeof p=="function"?p(Et):Et.label:"",[p,Et]),Vt=Bt?1:void 0,Kt=D.useMemo(()=>x?{overflow:"auto",maxHeight:x}:void 0,[x]),ve=Dp(),Ft=D.useMemo(()=>mt.map((il,qe)=>{const Oa=`${Ut}-${qe}`,Tl=il===_,Pl=il===Et;return R.createElement(ry,{activateOptionIndex:q,active:Tl,index:qe,key:Oa,onClick:dt,option:il,selected:Pl,setRef:ft})}),[_,q,dt,ft,mt,Et,Ut]);return R.createElement(X,{...yt,$disabled:d,ref:m,shadow:W,style:{...G,width:vt}},R.createElement("input",{name:b,ref:Z,type:"hidden",value:String(Ut),...v}),R.createElement(bs,{"aria-disabled":d,"aria-expanded":ht,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??O,"aria-owns":Bt&&ht?ve:void 0,onBlur:B,onFocus:F,onKeyDown:Q,onMouseDown:Bt?ot:et,ref:it,role:"button",tabIndex:Vt,...wt},R.createElement(Wv,null,Nt),N),Bt&&ht&&R.createElement(ey,{id:ve,onKeyDown:at,ref:k,role:"listbox",style:Kt,tabIndex:0,variant:I},Ft))}const gs=D.forwardRef(oy);gs.displayName="Select";const sy=$.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,xn=D.forwardRef(function({children:c,noPadding:o=!1,...r},d){return R.createElement(sy,{noPadding:o,ref:d,...r},c)});xn.displayName="Toolbar";const fy=$.div`
  padding: 16px;
`,ll=D.forwardRef(function({children:c,...o},r){return R.createElement(fy,{ref:r,...o},c)});ll.displayName="WindowContent";const dy=$.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?lt`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:lt`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${gc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ya=D.forwardRef(function({active:c=!0,children:o,...r},d){return R.createElement(dy,{active:c,ref:d,...r},o)});ya.displayName="WindowHeader";const hy=$.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Xt({style:"window"})}
  ${We()}
`,py=$.span`
  ${({theme:n})=>lt`
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
`,Aa=D.forwardRef(({children:n,resizable:c=!1,resizeRef:o,shadow:r=!0,...d},p)=>R.createElement(hy,{ref:p,shadow:r,...d},n,c&&R.createElement(py,{"data-testid":"resizeHandle",ref:o})));Aa.displayName="Window";const my=$(vn)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,by=$.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,gy=$.div`
  display: flex;
  flex-wrap: wrap;
`,Sl=$.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,vy=$.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,yy=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Ay(n,c){return new Date(n,c+1,0).getDate()}function xy(n,c,o){return new Date(n,c,o).getDay()}function Sy(n){const c=new Date(Date.parse(n)),o=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:o,month:r,year:d}}const Ey=D.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:o,onCancel:r,shadow:d=!0},p)=>{const[v,O]=D.useState(()=>Sy(c)),{year:x,month:b,day:z}=v,M=D.useCallback(({value:P})=>{O(J=>({...J,month:P}))},[]),H=D.useCallback(P=>{O(J=>({...J,year:P}))},[]),K=D.useCallback(P=>{O(J=>({...J,day:P}))},[]),L=D.useCallback(()=>{const P=[v.year,v.month+1,v.day].map(J=>String(J).padStart(2,"0")).join("-");o==null||o(P)},[v.day,v.month,v.year,o]),et=D.useMemo(()=>{const P=Array.from({length:42}),J=xy(x,b,1);let V=z;const Y=Ay(x,b);return V=V<Y?V:Y,P.forEach((W,G)=>{if(G>=J&&G<Y+J){const I=G-J+1;P[G]=R.createElement(Sl,{key:G,onClick:()=>{K(I)}},R.createElement(vy,{active:I===V},I))}else P[G]=R.createElement(Sl,{key:G})}),P},[z,K,b,x]);return R.createElement(Aa,{className:n,ref:p,shadow:d,style:{margin:20}},R.createElement(ya,null,R.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),R.createElement(ll,null,R.createElement(xn,{noPadding:!0,style:{justifyContent:"space-between"}},R.createElement(gs,{options:yy,value:b,onChange:M,width:128,menuMaxHeight:200}),R.createElement(wp,{value:x,onChange:H,width:100})),R.createElement(my,null,R.createElement(by,null,R.createElement(Sl,null,"S"),R.createElement(Sl,null,"M"),R.createElement(Sl,null,"T"),R.createElement(Sl,null,"W"),R.createElement(Sl,null,"T"),R.createElement(Sl,null,"F"),R.createElement(Sl,null,"S")),R.createElement(gy,null,et)),R.createElement(xn,{noPadding:!0,style:{justifyContent:"space-between"}},R.createElement(ce,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),R.createElement(ce,{fullWidth:!0,onClick:o?L:void 0,disabled:!o},"OK"))))});Ey.displayName="DatePicker";const Ty=n=>{switch(n){case"status":case"well":return lt`
        ${Xt({style:"status"})}
      `;case"window":case"outside":return lt`
        ${Xt({style:"window"})}
      `;case"field":return lt`
        ${Xt({style:"field"})}
      `;default:return lt`
        ${Xt()}
      `}},wy=$.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Ty(n)}
  ${({variant:n})=>We(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,ts=D.forwardRef(({children:n,shadow:c=!1,variant:o="window",...r},d)=>R.createElement(wy,{ref:d,shadow:c,variant:o,...r},n));ts.displayName="Frame";const Dy=$.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&lt`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&Je()}
`,zy=$.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,Oy=D.forwardRef(({label:n,disabled:c=!1,variant:o="default",children:r,...d},p)=>R.createElement(Dy,{"aria-disabled":c,$disabled:c,variant:o,ref:p,...d},n&&R.createElement(zy,{variant:o},n),r));Oy.displayName="GroupBox";const Mu=$.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Fl(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Mu.displayName="Handle";const Ry="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",My=$.div`
  display: inline-block;
  height: ${({size:n})=>Fl(n)};
  width: ${({size:n})=>Fl(n)};
`,Ny=$.span`
  display: block;
  background: ${Ry};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Cy=D.forwardRef(({size:n=30,...c},o)=>R.createElement(My,{size:n,ref:o,...c},R.createElement(Ny,null)));Cy.displayName="Hourglass";const jy=$.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,_y=$.div`
  position: relative;
`,By=$.div`
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
`,Uy=$(ul).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Hy=$.div`
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
`,$y=D.forwardRef(({backgroundStyles:n,children:c,...o},r)=>R.createElement(jy,{ref:r,...o},R.createElement(_y,null,R.createElement(By,null,R.createElement(Uy,{style:n},c)),R.createElement(Hy,null))));$y.displayName="Monitor";const ky=$.div`
  display: inline-block;
  height: ${he.md};
  width: 100%;
`,Qy=$(ul)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Cp=lt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Yy=$.div`
  position: relative;
  top: 4px;
  ${Cp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Ly=$.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Cp}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Gy=$.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,jp=17,qy=$.span`
  display: inline-block;
  width: ${jp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,sc=D.forwardRef(({hideValue:n=!1,shadow:c=!0,value:o,variant:r="default",...d},p)=>{const v=n?null:`${o}%`,O=D.useRef(null),[x,b]=D.useState([]),z=D.useCallback(()=>{if(!O.current||o===void 0)return;const M=O.current.getBoundingClientRect().width,H=Math.round(o/100*M/jp);b(Array.from({length:H}))},[o]);return D.useEffect(()=>(z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)),[z]),R.createElement(ky,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:p,role:"progressbar",variant:r,...d},R.createElement(Qy,{variant:r,shadow:c},r==="default"?R.createElement(R.Fragment,null,R.createElement(Yy,{"data-testid":"defaultProgress1"},v),R.createElement(Ly,{"data-testid":"defaultProgress2",value:o},v)):R.createElement(Gy,{ref:O,"data-testid":"tileProgress"},x.map((M,H)=>R.createElement(qy,{key:H})))))});sc.displayName="ProgressBar";const _p=lt`
  width: ${nl}px;
  height: ${nl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Xy=$(ul)`
  ${_p}
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
`,Zy=$.div`
  ${Da()}
  ${_p}
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
`,Vy=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Ky={flat:Zy,default:Xy},Jy=D.forwardRef(({checked:n,className:c="",disabled:o=!1,label:r="",onChange:d,style:p={},variant:v="default",...O},x)=>{const b=Ky[v];return R.createElement(hs,{$disabled:o,className:c,style:p},R.createElement(b,{$disabled:o,role:"presentation"},n&&R.createElement(Vy,{$disabled:o,variant:v})),R.createElement(oc,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:x,...O}),r&&R.createElement(ps,null,r))});Jy.displayName="Radio";const Wy=typeof window<"u"?D.useLayoutEffect:D.useEffect;function va(n){const c=D.useRef(n);return Wy(()=>{c.current=n}),D.useCallback((...o)=>(0,c.current)(...o),[])}function U0(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function H0(n,c){return D.useMemo(()=>n==null&&c==null?null:o=>{U0(n,o),U0(c,o)},[n,c])}var Fy=V0();let vc=!0,es=!1,$0;const Iy={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Py(n){if("type"in n){const{type:c,tagName:o}=n;if(o==="INPUT"&&Iy[c]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function t1(n){n.metaKey||n.altKey||n.ctrlKey||(vc=!0)}function Yo(){vc=!1}function e1(){this.visibilityState==="hidden"&&es&&(vc=!0)}function l1(n){n.addEventListener("keydown",t1,!0),n.addEventListener("mousedown",Yo,!0),n.addEventListener("pointerdown",Yo,!0),n.addEventListener("touchstart",Yo,!0),n.addEventListener("visibilitychange",e1,!0)}function a1(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return vc||Py(c)}function n1(){es=!0,window.clearTimeout($0),$0=window.setTimeout(()=>{es=!1},100)}function u1(){const n=D.useCallback(c=>{const o=Fy.findDOMNode(c);o!=null&&l1(o.ownerDocument)},[]);return{isFocusVisible:a1,onBlurVisible:n1,ref:n}}function i1(n,c,o){return(o-c)*n+c}function Ii(n,c){if(c!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const r=n.changedTouches[o];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Pi(n){return n&&n.ownerDocument||document}function c1(n,c){var o;const{index:r}=(o=n.reduce((d,p,v)=>{const O=Math.abs(c-p);return d===null||O<d.distance||O===d.distance?{distance:O,index:v}:d},null))!==null&&o!==void 0?o:{};return r??-1}const r1=$.div`
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

  ${({orientation:n,size:c})=>n==="vertical"?lt`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:lt`
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
`,Bp=()=>lt`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?lt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:lt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,o1=$(ul)`
  ${Bp()}
`,s1=$(ul)`
  ${Bp()}

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
`,f1=$.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?lt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:lt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?lt`
          ${Da()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:lt`
          ${We()}
          ${Xt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&Bu({mainColor:c.material,secondaryColor:c.borderLightest})}
`,An=6,d1=$.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?lt`
          right: ${-An-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${An}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:lt`
          bottom: ${-An}px;
          height: ${An}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&lt`
      ${Je()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}
`,h1=$.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?lt`
          transform: translate(${An+2}px, ${An+1}px);
        `:lt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,p1=D.forwardRef(({defaultValue:n,disabled:c=!1,marks:o=!1,max:r=100,min:d=0,name:p,onChange:v,onChangeCommitted:O,onMouseDown:x,orientation:b="horizontal",size:z="100%",step:M=1,value:H,variant:K="default",...L},et)=>{const P=K==="flat"?s1:o1,J=b==="vertical",[V=d,Y]=Il({defaultValue:n,onChange:v??O,value:H}),{isFocusVisible:W,onBlurVisible:G,ref:I}=u1(),[tt,vt]=D.useState(!1),wt=D.useRef(),Zt=D.useRef(null),Bt=H0(I,wt),mt=H0(et,Bt),Qt=va(B=>{W(B)&&vt(!0)}),Ut=va(()=>{tt!==!1&&(vt(!1),G())}),yt=D.useRef(),N=D.useMemo(()=>o===!0&&Number.isFinite(M)?[...Array(Math.round((r-d)/M)+1)].map((B,Q)=>({label:void 0,value:d+M*Q})):Array.isArray(o)?o:[],[o,r,d,M]),X=va(B=>{const Q=(r-d)/10,at=N.map(dt=>dt.value),F=at.indexOf(V);let ot=0;switch(B.key){case"Home":ot=d;break;case"End":ot=r;break;case"PageUp":M&&(ot=V+Q);break;case"PageDown":M&&(ot=V-Q);break;case"ArrowRight":case"ArrowUp":M?ot=V+M:ot=at[F+1]||at[at.length-1];break;case"ArrowLeft":case"ArrowDown":M?ot=V-M:ot=at[F-1]||at[0];break;default:return}B.preventDefault(),M&&(ot=j0(ot,M,d)),ot=Sa(ot,d,r),Y(ot),vt(!0),v==null||v(ot),O==null||O(ot)}),Z=D.useCallback(B=>{if(!wt.current)return 0;const Q=wt.current.getBoundingClientRect();let at;J?at=(Q.bottom-B.y)/Q.height:at=(B.x-Q.left)/Q.width;let F;if(F=i1(at,d,r),M)F=j0(F,M,d);else{const ot=N.map(k=>k.value),dt=c1(ot,F);F=ot[dt]}return F=Sa(F,d,r),F},[N,r,d,M,J]),it=va(B=>{var Q;const at=Ii(B,yt.current);if(!at)return;const F=Z(at);(Q=Zt.current)===null||Q===void 0||Q.focus(),Y(F),vt(!0),v==null||v(F)}),m=va(B=>{const Q=Ii(B,yt.current);if(!Q)return;const at=Z(Q);O==null||O(at),yt.current=void 0;const F=Pi(wt.current);F.removeEventListener("mousemove",it),F.removeEventListener("mouseup",m),F.removeEventListener("touchmove",it),F.removeEventListener("touchend",m)}),_=va(B=>{var Q;x==null||x(B),B.preventDefault(),(Q=Zt.current)===null||Q===void 0||Q.focus(),vt(!0);const at=Ii(B,yt.current);if(at){const ot=Z(at);Y(ot),v==null||v(ot)}const F=Pi(wt.current);F.addEventListener("mousemove",it),F.addEventListener("mouseup",m)}),q=va(B=>{var Q;B.preventDefault();const at=B.changedTouches[0];at!=null&&(yt.current=at.identifier),(Q=Zt.current)===null||Q===void 0||Q.focus(),vt(!0);const F=Ii(B,yt.current);if(F){const dt=Z(F);Y(dt),v==null||v(dt)}const ot=Pi(wt.current);ot.addEventListener("touchmove",it),ot.addEventListener("touchend",m)});return D.useEffect(()=>{const{current:B}=wt;B==null||B.addEventListener("touchstart",q);const Q=Pi(B);return()=>{B==null||B.removeEventListener("touchstart",q),Q.removeEventListener("mousemove",it),Q.removeEventListener("mouseup",m),Q.removeEventListener("touchmove",it),Q.removeEventListener("touchend",m)}},[m,it,q]),R.createElement(r1,{$disabled:c,hasMarks:!!N.length,isFocused:tt,onMouseDown:_,orientation:b,ref:mt,size:Fl(z),...L},R.createElement("input",{disabled:c,name:p,type:"hidden",value:V??0}),N&&N.map(B=>R.createElement(d1,{$disabled:c,"data-testid":"tick",key:B.value/(r-d)*100,orientation:b,style:{[J?"bottom":"left"]:`${(B.value-d)/(r-d)*100}%`}},B.label&&R.createElement(h1,{"aria-hidden":!0,"data-testid":"mark",orientation:b},B.label))),R.createElement(P,{orientation:b,variant:K}),R.createElement(f1,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":b,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":V,onBlur:Ut,onFocus:Qt,onKeyDown:X,orientation:b,ref:Zt,role:"slider",style:{[J?"bottom":"left"]:`${(J?-100:0)+100*(V-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:K}))});p1.displayName="Slider";const m1=$.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${fs};
  overflow-y: auto;
`,b1=D.forwardRef(function({children:c,...o},r){return R.createElement(m1,{ref:r,...o},c)});b1.displayName="TableBody";const g1=$.td`
  padding: 0 8px;
`,v1=D.forwardRef(function({children:c,...o},r){return R.createElement(g1,{ref:r,...o},c)});v1.displayName="TableDataCell";const y1=$.thead`
  display: table-header-group;
`,A1=D.forwardRef(function({children:c,...o},r){return R.createElement(y1,{ref:r,...o},c)});A1.displayName="TableHead";const x1=$.th`
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
  ${({$disabled:n})=>!n&&lt`
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
  ${({$disabled:n})=>n&&Je()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&Je()}
  }
`,S1=D.forwardRef(function({disabled:c=!1,children:o,onClick:r,onTouchStart:d=za,sort:p,...v},O){const x=p==="asc"?"ascending":p==="desc"?"descending":void 0;return R.createElement(x1,{$disabled:c,"aria-disabled":c,"aria-sort":x,onClick:c?void 0:r,onTouchStart:c?void 0:d,ref:O,...v},R.createElement("div",null,o))});S1.displayName="TableHeadCell";const E1=$.tr`
  color: inherit;
  display: table-row;
  height: calc(${he.md} - 2px);
  line-height: calc(${he.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,T1=D.forwardRef(function({children:c,...o},r){return R.createElement(E1,{ref:r,...o},c)});T1.displayName="TableRow";const w1=$.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,D1=$(ul)`
  &:before {
    box-shadow: none;
  }
`,z1=D.forwardRef(({children:n,...c},o)=>R.createElement(D1,null,R.createElement(w1,{ref:o,...c},n)));z1.displayName="Table";const O1=$.button`
  ${We()}
  ${Xt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${he.md};
  line-height: ${he.md};
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
    ${Dn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${he.md} + 4px);
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
`,R1=D.forwardRef(({value:n,onClick:c,selected:o=!1,children:r,...d},p)=>R.createElement(O1,{"aria-selected":o,selected:o,onClick:v=>c==null?void 0:c(n,v),ref:p,role:"tab",...d},r));R1.displayName="Tab";const M1=$.div`
  ${We()}
  ${Xt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,N1=D.forwardRef(({children:n,...c},o)=>R.createElement(M1,{ref:o,...c},n));N1.displayName="TabBody";const C1=$.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,j1=$.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function _1(n,c){const o=[];for(let r=c;r>0;r-=1)o.push(n.splice(0,Math.ceil(n.length/r)));return o}const B1=D.forwardRef(({value:n,onChange:c=za,children:o,rows:r=1,...d},p)=>{const v=D.useMemo(()=>{var O;const x=(O=R.Children.map(o,M=>{if(!R.isValidElement(M))return null;const H={selected:M.props.value===n,onClick:c};return R.cloneElement(M,H)}))!==null&&O!==void 0?O:[],b=_1(x,r).map((M,H)=>({key:H,tabs:M})),z=b.findIndex(M=>M.tabs.some(H=>H.props.selected));return b.push(b.splice(z,1)[0]),b},[o,c,r,n]);return R.createElement(C1,{...d,isMultiRow:r>1,role:"tablist",ref:p},v.map(O=>R.createElement(j1,{key:O.key},O.tabs)))});B1.displayName="Tabs";const U1=["blur","focus"],H1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function k0(n){return"nativeEvent"in n&&U1.includes(n.type)}function Q0(n){return"nativeEvent"in n&&H1.includes(n.type)}const $1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},k1=$.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${ss};
  text-align: center;
  font-size: 1rem;
  ${n=>$1[n.position]}
`,Q1=$.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,ls=D.forwardRef(({className:n,children:c,disableFocusListener:o=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:p=0,onBlur:v,onClose:O,onFocus:x,onMouseEnter:b,onMouseLeave:z,onOpen:M,style:H,text:K,position:L="top",...et},P)=>{const[J,V]=D.useState(!1),[Y,W]=D.useState(),[G,I]=D.useState(),tt=!o,vt=!r,wt=Z=>{window.clearTimeout(Y),window.clearTimeout(G);const it=window.setTimeout(()=>{V(!0),M==null||M(Z)},d);W(it)},Zt=Z=>{Z.persist(),k0(Z)?x==null||x(Z):Q0(Z)&&(b==null||b(Z)),wt(Z)},Bt=Z=>{window.clearTimeout(Y),window.clearTimeout(G);const it=window.setTimeout(()=>{V(!1),O==null||O(Z)},p);I(it)},mt=Z=>{Z.persist(),k0(Z)?v==null||v(Z):Q0(Z)&&(z==null||z(Z)),Bt(Z)},Qt=tt?mt:void 0,Ut=tt?Zt:void 0,yt=vt?Zt:void 0,N=vt?mt:void 0,X=tt?0:void 0;return R.createElement(Q1,{"data-testid":"tooltip-wrapper",onBlur:Qt,onFocus:Ut,onMouseEnter:yt,onMouseLeave:N,tabIndex:X},R.createElement(k1,{className:n,"data-testid":"tooltip",position:L,ref:P,show:J,style:H,...et},K),c)});ls.displayName="Tooltip";const as=$(ps)`
  white-space: nowrap;
`,Up=lt`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":lt`
          cursor: pointer;

          :focus {
            ${as} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,Y1=$.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&lt`
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
`,L1=$.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?lt`
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
        `:lt`
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
`,G1=$.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,q1=$.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${Up};

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
`,Y0=$(hs)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Up};
`,X1=$.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function L0(n,c){return n.includes(c)?n.filter(o=>o!==c):[...n,c]}function G0(n){n.preventDefault()}function Hp({className:n,disabled:c,expanded:o,innerRef:r,level:d,select:p,selected:v,style:O,tree:x=[]}){const b=d===0,z=D.useCallback(M=>{var H,K;const L=!!(M.items&&M.items.length>0),et=o.includes(M.id),P=(H=c||M.disabled)!==null&&H!==void 0?H:!1,J=P?G0:G=>p(G,M),V=P?G0:G=>p(G,M),Y=v===M.id,W=R.createElement(X1,{"aria-hidden":!0},M.icon);return R.createElement(L1,{key:M.label,isRootLevel:b,role:"treeitem","aria-expanded":et,"aria-selected":Y,hasItems:L},L?R.createElement(G1,{open:et},R.createElement(q1,{onClick:J,$disabled:P},R.createElement(Y0,{$disabled:P},W,R.createElement(as,null,M.label))),et&&R.createElement(Hp,{className:n,disabled:P,expanded:o,level:d+1,select:p,selected:v,style:O,tree:(K=M.items)!==null&&K!==void 0?K:[]})):R.createElement(Y0,{as:"button",$disabled:P,onClick:V},W,R.createElement(as,null,M.label)))},[n,c,o,b,d,p,v,O]);return R.createElement(Y1,{className:b?n:void 0,style:b?O:void 0,ref:b?r:void 0,role:b?"tree":"group",isRootLevel:b},x.map(z))}function Z1({className:n,defaultExpanded:c=[],defaultSelected:o,disabled:r=!1,expanded:d,onNodeSelect:p,onNodeToggle:v,selected:O,style:x,tree:b=[]},z){const[M,H]=Il({defaultValue:c,onChange:v,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[K,L]=Il({defaultValue:o,onChange:p,onChangePropName:"onNodeSelect",value:O,valuePropName:"selected"}),et=D.useCallback((V,Y)=>{if(v){const W=L0(M,Y);v(V,W)}H(W=>L0(W,Y))},[M,v,H]),P=D.useCallback((V,Y)=>{L(Y),p&&p(V,Y)},[p,L]),J=D.useCallback((V,Y)=>{V.preventDefault(),P(V,Y.id),Y.items&&Y.items.length&&et(V,Y.id)},[P,et]);return R.createElement(Hp,{className:n,disabled:r,expanded:M,level:0,innerRef:z,select:J,selected:K,style:x,tree:b})}const V1=D.forwardRef(Z1);V1.displayName="TreeView";const K1="/95-Portfolio/assets/ms_sans_serif-Du8rjN1q.woff2",J1="/95-Portfolio/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var Lo,q0;function W1(){if(q0)return Lo;q0=1;var n={name:"blue",anchor:"rgb(0, 0, 128)",anchorVisited:"rgb(0, 0, 128)",borderDark:"rgb(49, 131, 221)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(166, 202, 240)",borderLightest:"rgb(211, 228, 248)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(49, 131, 221)",canvasTextDisabledShadow:"rgb(211, 228, 248)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(49, 131, 221)",desktopBackground:"rgb(58, 110, 165)",flatDark:"rgb(49, 131, 221)",flatLight:"rgb(166, 202, 240)",focusSecondary:"rgb(211, 228, 248)",headerBackground:"linear-gradient(to right, rgb(0, 0, 128), rgb(16, 132, 208))",headerNotActiveBackground:"linear-gradient(to right, rgb(49, 131, 221), rgb(49, 131, 221))",headerNotActiveText:"rgb(0, 0, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(51, 153, 255)",material:"rgb(166, 202, 240)",materialDark:"rgb(49, 131, 221)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(49, 131, 221)",materialTextDisabledShadow:"rgb(211, 228, 248)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(51, 153, 255)",tooltip:"rgb(225, 225, 255)"};return Lo=n,Lo}var F1=W1();const X0=Z0(F1),I1="/95-Portfolio/assets/winxp-aEloBXO0.png",P1="/95-Portfolio/assets/psx_graphics-D5Raoe1Z.gif",tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAD////AwMAAAIAAAP/jaa47AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAiklEQVQoz52QwQ3DIBAEQUoBrF0BujTAJQ3Ykgvwg/5bCZwjsRfLD2dfMBpYuBD+TQSQfvaOAJ7EL8Al6OtJtYAFEcmJQBO08BVNeC5kdOG90h2zWJIzWgYwJXOtcks4WiTzZ70Rj5ZhBExldBiYhf5qhuqLR7hgPLPnUSvcka1aEgmW/RKcZnwzH3+2Gx0TJwQiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAw5EF/4AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NjoyMC0wNDowMJUcx1wAAAAASUVORK5CYII=",eA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEUAAACZmZnn59bMzMyGhoZmZmYEBATAwMD////q6ur/+/AAMzMAmZkAgIAAZmYzzMwzM5mZzP8AM5nMzP+ZmcwcHBzj4+MiIiJVVVWtqZAz/2YAgACWLo3QAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBBMBJCt84jxJAAABaUlEQVRIx5WV0XKDIBBFZRWFpBhrS03i//9nF4S6KCz2MM74cA8XDNGmoQie5oiAtgx0sj/lhzKYPwpCcWD+IAily7j5MwIU0DDkhJuGe56CgA33jw0ThxnNOI6c8MBxMtgGzE8JaNQapk/CXGtApi/CXGlI1jPPKJQbbpvwTUDBlhuCAPtxaJ1Q28ME0QDVWrZBpQ2gwAtXG8A3IBca/kZrDVJ7SvGIun+ZE6pPyWMD9bNk0uHybEOaDnl2SYYwxsEIY5aC8MO8A4KwLIkAZbzQSykWKjCvMSe4vKSCfLL4/NOSNfU8Pi93QVYReO0NAo8aHfi2boc4HC+3bdIgVJr3Z48aXkgb3u91nz+k43KyDeu6JvM7J+54E56FPRxXc2kP0UkE0oD53O/7InRpPnw54jfldIPnz9K8VkPPXXj8hP1nXtjree3ykqzfzcFdh7yGGjRf+Zxv0DwKQxWab0RXh+YbYS9A8r/yizreWBxUTwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNjo0My0wNDowMNV8Hl4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzY6NDMtMDQ6MDCkIabiAAAAAElFTkSuQmCC",lA="/95-Portfolio/assets/clippynew-CEUdfum9.gif",aA="/95-Portfolio/assets/clippy-C-IeEyKo.png",nA="/95-Portfolio/assets/audio-BD85AMiZ.mp3",uA="/95-Portfolio/assets/granturismo-jbWZY7ai.gif",iA=sv`
  ${hv}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${K1}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${J1}') format('woff2');
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
  .close-icon {
  display: block;
  width: 16px;
  height: 16px;
  position: relative;
}

.close-icon::before,
.close-icon::after {
  content: '';
  position: absolute;
  background-color: black; /* the X color */
  top: 50%;
  left: 50%;
  transform-origin: center;
}

.close-icon::before {
  width: 2px;
  height: 100%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-icon::after {
  width: 2px;
  height: 100%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
`;function cA({onComplete:n}){const[c,o]=D.useState(0),[r,d]=D.useState("");return D.useEffect(()=>{const p=setInterval(()=>{o(v=>{const O=Math.min(v+Math.random()*15,100);return O>=100&&(clearInterval(p),setTimeout(n,500)),O})},300);return()=>clearInterval(p)},[n]),D.useEffect(()=>{const p=setInterval(()=>{d(v=>v.length<3?v+".":"")},500);return()=>clearInterval(p)},[]),y.jsx("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgb(127, 179, 235)",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"ms_sans_serif, sans-serif",color:"black"},children:y.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",transform:"translateY(-20%)"},children:[y.jsxs("div",{style:{fontSize:"18px",marginBottom:"16px"},children:["Loading",r]}),y.jsx(sc,{variant:"tile",value:Math.floor(c),style:{width:300}})]})})}function rA(){const[n,c]=R.useState(!1);return y.jsx("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:n?y.jsx("img",{src:lA}):y.jsx("img",{src:aA})})}function oA(){const[n,c]=D.useState(!1),[o,r]=D.useState(!0),[d,p]=R.useState(!0),[v,O]=D.useState({width:700,height:550}),x=(visualViewport.width-v.width)/2,b=(visualViewport.height-v.height)/2,[z,M]=D.useState({x,y:b}),[H,K]=D.useState("p1"),L=D.useRef({isDragging:!1,startX:0,startY:0}),[et,P]=D.useState(!1),J=D.useRef(null);D.useEffect(()=>{J.current&&(et?(J.current.muted=!1,J.current.play().catch(()=>{})):J.current.pause())},[et]),D.useEffect(()=>{const W=I=>{if(L.current.isDragging){const tt=I.clientX-L.current.startX,vt=I.clientY-L.current.startY;M(wt=>({x:wt.x+tt,y:wt.y+vt})),L.current.startX=I.clientX,L.current.startY=I.clientY}},G=()=>{L.current.isDragging=!1,resizeRef.current.isResizing=!1};return window.addEventListener("mousemove",W),window.addEventListener("mouseup",G),()=>{window.removeEventListener("mousemove",W),window.removeEventListener("mouseup",G)}},[]);const V=[{label:"Me",value:"p1"},{label:"Hobbies",value:"p2"}],Y=W=>{K(W.value)};return y.jsxs(y.Fragment,{children:[y.jsx(iA,{}),o?y.jsx(M0,{theme:X0,children:y.jsx(cA,{onComplete:()=>r(!1)})}):y.jsxs(M0,{theme:X0,children:[y.jsx(yp,{className:"fixed top-0 left-0 w-full z-50",children:y.jsxs(xn,{className:"flex justify-between px-4",children:[y.jsxs("div",{className:"relative inline-block",children:[y.jsxs(ce,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:[y.jsx("img",{src:I1,alt:"win xp logo",className:"h-5 mr-1"}),"Start"]}),n&&y.jsxs(Ap,{style:{position:"absolute",left:0,top:"100%",zIndex:999,minWidth:"200px"},onClick:()=>c(!1),children:[y.jsx(Ru,{className:"flex items-center gap-2",onClick:()=>window.open("https://github.com/abdessalamzarrouk","_blank"),children:"GitHub Profile"}),y.jsx(Ru,{className:"flex items-center gap-2",onClick:()=>window.open("https://www.linkedin.com/in/abdessalam-zarrouk/","_blank"),children:"LinkedIn Profile"}),y.jsx(Ru,{onClick:()=>p(W=>!W),children:d?"Remove Stars":"Show Stars"}),y.jsx(yn,{}),y.jsx(Ru,{children:y.jsx(ls,{text:"You are stuck here 🤷‍",enterDelay:100,leaveDelay:500,children:"Logout"})})]})]}),y.jsx("a",{href:"#Projects",children:y.jsx(ce,{variant:"menu",children:"Current Projects"})}),y.jsx(Mu,{size:38}),y.jsx("a",{href:"#About",children:y.jsx(ce,{variant:"menu",children:"About Me"})}),y.jsx(Mu,{size:38}),y.jsx("a",{href:"#Skills",children:y.jsx(ce,{variant:"menu",children:"Skills"})}),y.jsx(Mu,{size:38}),y.jsx(ce,{variant:"menu",children:"Contact info"}),y.jsx(Mu,{size:38}),y.jsx(ce,{variant:"menu",onClick:()=>P(W=>!W),style:{minWidth:110},title:et?"Click to mute":"Enable background music",children:et?"Sound: On":"Sound: Off"}),y.jsx(ms,{placeholder:"Search...",width:150})]})}),y.jsx(dv,{enabled:d}),y.jsx("audio",{ref:J,src:nA,loop:!0,muted:!et}),y.jsxs("main",{className:"w-full min-h-screen px-4 flex flex-col items-center bg-[rgb(127,179,235)]",children:[y.jsxs("section",{className:"mb-10 max-w-2xl w-full text-center pt-5",children:[y.jsx("h1",{className:"text-4xl font-bold underline mb-4",children:"Hi, I’m Abdessalam Zarrouk!"}),y.jsxs("h2",{className:"text-3xl font-bold mb-4 flex justify-center items-center gap-2",children:[y.jsx(ls,{text:"Yes that's me.",enterDelay:100,leaveDelay:100,children:y.jsx("img",{src:tA,alt:"user logo",className:"h-8 "})}),"A passionate software engineer and lifelong learner"]}),y.jsxs("p",{className:"text-lg text-gray-700 flex justify-center items-center gap-2",children:[y.jsx("img",{src:eA,alt:"computer icon",className:"h-7"}),"I enjoy building creative projects, solving problems, and exploring new technologies. This portfolio showcases some of my work and interests."]})]}),y.jsx(yn,{size:"1200px",className:"flex justify-center mb-4"}),y.jsx("h1",{className:"text-4xl font-bold mt-10",id:"Projects",children:"Current Projects :"}),y.jsx("section",{className:"w-full flex justify-center mt-10 mb-14",children:y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-screen-xl w-full",children:[y.jsx(Aa,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:y.jsxs("a",{href:"https://github.com/abdessalamzarrouk/ShieldOps",children:[y.jsx(ya,{children:y.jsx("span",{children:"ShieldOps.txt"})}),y.jsxs(ll,{children:[y.jsx("p",{children:"Progress : Under Construction  "})," ",y.jsx(sc,{variant:"tile",value:Math.floor(30)})]}),y.jsx(ll,{children:y.jsx(vn,{style:{width:"100%",height:150},children:y.jsxs("p",{children:["This is an ",y.jsx("span",{className:"font-bold",children:"academic project"})," that is dedicated to learning how to set up a CI/CD pipeline that will include some",y.jsx("span",{className:"font-bold",children:" cybersecurity"})," features like code and dependency vulnerabilities detection and prevention."]})})}),y.jsx(ll,{children:y.jsx(vn,{style:{width:"100%",height:66},children:y.jsxs("p",{children:[y.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used : "})," Docker, Jenkins, OWASP ZAP, Snyk, Trivy, SonarQube."]})})})]})}),y.jsx(Aa,{className:"w-full max-w-md overflow-hidden transition-transform duration-300 hover:scale-110",children:y.jsxs("a",{href:"https://github.com/abdessalamzarrouk/PSX_GRAPHICS",children:[y.jsx(ya,{children:y.jsx("span",{children:"psx_graphics.txt"})}),y.jsxs(ll,{children:[y.jsx("img",{src:P1,alt:"PSX Graphics",className:"w-full mb-5"}),y.jsxs("p",{children:["This is a ",y.jsx("span",{className:"text-[#DF0024] font-bold",children:"Play"}),y.jsx("span",{className:"text-[#f3c300] font-bold",children:"Station"})," ",y.jsx("span",{className:"font-bold",children:"1"})," game development project where i showcase some of the demonstrations i made using the infamous ",y.jsx("span",{className:"font-bold",children:"Psygnosis Source Development Kit"})," (Psy-Q)."]}),y.jsxs("p",{children:[y.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used :"}),"  Psy-Q SDK, ARMIPS, Make, mkpsxiso."]})]})]})}),y.jsxs(Aa,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:[y.jsx(ya,{children:y.jsx("span",{children:"ThreadTalk.txt"})}),y.jsxs(ll,{children:[y.jsx("p",{children:"Progress : Under Construction  "})," ",y.jsx(sc,{variant:"tile",value:Math.floor(0)})]}),y.jsx(ll,{children:y.jsx(vn,{style:{width:"100%",height:115},children:y.jsxs("p",{children:["This is an idea that I had in mind. It's basically an inspiration from ",y.jsx("span",{className:"font-bold",children:"Reddit"})," that involves users discussing about ",y.jsx("span",{className:"font-bold",children:"topics"})," that they are interested in and ",y.jsx("span",{className:"font-bold",children:"sharing opinions"}),"."]})})})]})]})}),y.jsx(yn,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),y.jsx("section",{className:"mb-10 w-full text-center pt-5 mt-10 h-full min-h-[85vh]",id:"About",children:y.jsxs("div",{className:"relative flex justify-center w-full items-center",children:[y.jsx("div",{className:"absolute left-0 flex items-center h-full",children:y.jsx(rA,{})}),y.jsxs("div",{className:"max-w-2xl text-center",children:[y.jsx("h1",{className:"text-4xl font-bold mb-4",children:"About Me"}),y.jsx(gs,{formatDisplay:W=>`${W.label?W.label:"CANNOT RETRIEVE VALUES"}`,onChange:Y,options:V,width:220}),H==="p1"&&y.jsxs(Aa,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:z.x,top:z.y,width:v.width,height:v.height},children:[y.jsxs(ya,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:W=>{L.current.isDragging=!0,L.current.startX=W.clientX,L.current.startY=W.clientY},children:[y.jsx("span",{children:"Me.exe"}),y.jsx(ce,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:y.jsx("span",{className:"close-icon"})})]}),y.jsxs(xn,{children:[y.jsx(ce,{variant:"menu",size:"sm",children:"File"}),y.jsx(ce,{variant:"menu",size:"sm",children:"Edit"}),y.jsx(ce,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),y.jsxs(ll,{children:[y.jsxs("p",{children:["From ",y.jsx("span",{className:"font-bold",children:"tinkering with computers as a kid"})," to ",y.jsx("span",{className:"font-bold",children:"building complex software projects"})," today, I’ve always been fascinated by how ",y.jsx("span",{className:"font-bold",children:"technology"})," can solve real problems. I’m ",y.jsx("span",{className:"font-bold",children:"Abdessalam Zarrouk"}),", and I love ",y.jsx("span",{className:"font-bold",children:"learning"}),", ",y.jsx("span",{className:"font-bold",children:"experimenting"}),", and ",y.jsx("span",{className:"font-bold",children:"sharing my journey"})," through the projects I build."]}),y.jsx("br",{}),y.jsxs("p",{children:["My experience with computers first started with an ",y.jsx("span",{className:"font-bold",children:"old Dell Optiplex"}),", where I first learned about ",y.jsx("span",{className:"font-bold",children:"Windows XP"}),". Then I moved on to an ",y.jsx("span",{className:"font-bold",children:"HP Compaq DC7600"}),", which was an upgrade from the Dell (mostly good and bad). It was then that I learned that desktop computers get dusty and need some RAM cleaning from time to time, which was frustrating. This was the first computer where I experienced ",y.jsx("span",{className:"font-bold",children:"online gaming"})," with the surge of modems and broadband connections. I remember playing games like ",y.jsx("span",{className:"font-bold",children:"Counter-Strike 1.6"})," and ",y.jsx("span",{className:"font-bold",children:"Minecraft"})," when they first blew up."]}),y.jsx("br",{}),y.jsxs("p",{children:["Fast forward about 13 years, I purchased my first laptop, a ",y.jsx("span",{className:"font-bold",children:"Dell Latitude E5450"}),", which was a beast when coupled with a good ",y.jsx("span",{className:"font-bold",children:"SSD"}),". It was then that I started learning ",y.jsx("span",{className:"font-bold",children:"programming"})," with languages like ",y.jsx("span",{className:"font-bold",children:"Python, C, C++, and Java"}),". I also learned about ",y.jsx("span",{className:"font-bold",children:"web development"})," and how the ",y.jsx("span",{className:"font-bold",children:"internet"})," works. I started building ",y.jsx("span",{className:"font-bold",children:"small projects"})," and ",y.jsx("span",{className:"font-bold",children:"experimenting with different technologies"}),". Even today, I cherish those moments with that Dell and HP desktop—those were the ",y.jsx("span",{className:"font-bold",children:"foundations of my passion"}),"."]})]}),y.jsx(ts,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]}),H==="p2"&&y.jsxs(Aa,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:z.x,top:z.y,width:v.width,height:v.height},children:[y.jsxs(ya,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:W=>{L.current.isDragging=!0,L.current.startX=W.clientX,L.current.startY=W.clientY},children:[y.jsx("span",{children:"Hobbies.exe"}),y.jsx(ce,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:y.jsx("span",{className:"close-icon"})})]}),y.jsxs(xn,{children:[y.jsx(ce,{variant:"menu",size:"sm",children:"File"}),y.jsx(ce,{variant:"menu",size:"sm",children:"Edit"}),y.jsx(ce,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),y.jsxs(ll,{children:[y.jsxs("p",{children:["Not a car expert, but the",y.jsx("span",{className:"font-bold text-sky-700",children:" BMW M3 E92 "}),"and",y.jsx("span",{className:"font-bold text-indigo-700",children:" M3 GTR "}),"grabbed me—the high‑revving V8 and that",y.jsx("span",{className:"font-semibold text-rose-600",children:" whining gear‑change sound "}),"just hits the right mix of character."]}),y.jsx("br",{}),y.jsxs("p",{children:["I enjoy ",y.jsx("span",{className:"font-semibold text-emerald-600",children:"GT3 sim racing"})," in",y.jsx("span",{className:"font-bold text-red-600",children:" Assetto Corsa"}),", dialing in pacing, braking points, and smooth inputs. That tweak → test → repeat loop feels like refactoring code."]}),y.jsx("br",{}),y.jsxs("p",{children:["I also make beats—mainly",y.jsx("span",{className:"font-bold text-amber-600",children:" Hip Hop"})," and",y.jsx("span",{className:"font-bold text-fuchsia-600",children:" 90s House"}),". Chopping samples, shaping",y.jsx("span",{className:"font-semibold text-slate-800",children:" drums"}),", and balancing",y.jsx("span",{className:"font-semibold text-teal-600",children:" basslines"})," sharpen timing, pattern recognition, and iteration."]}),y.jsx("br",{}),y.jsx("p",{className:"font-semibold",children:"A few games that shaped how I think:"}),y.jsxs("ul",{className:"mt-1 mb-3 pl-5 list-disc",children:[y.jsxs("li",{children:[y.jsx("b",{className:"text-red-600",children:"Assetto Corsa:"})," Precision & discipline."]}),y.jsxs("li",{children:[y.jsx("b",{className:"text-yellow-600",children:"Counter-Strike 1.6:"})," Fast decisions & teamwork."]}),y.jsxs("li",{children:[y.jsx("b",{className:"text-green-600",children:"Minecraft:"})," Open-ended building & experimentation."]})]}),y.jsxs("p",{children:["These hobbies keep me",y.jsx("span",{className:"font-semibold text-blue-700",children:" curious"}),",",y.jsx("span",{className:"font-semibold text-purple-700",children:" patient"}),", and comfortable",y.jsx("span",{className:"font-semibold text-emerald-700",children:" iterating"}),"."]}),y.jsx("br",{}),y.jsx(vn,{style:{width:250,height:115,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},children:y.jsx("img",{src:uA,alt:"granturismo.gif"})})]}),y.jsx(ts,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]})]})]})}),y.jsx(yn,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),y.jsx("section",{className:"mb-10 w-full text-center pt-5 mt-10 h-full",id:"Skills",children:y.jsx("div",{className:"relative flex justify-center w-full items-center",children:y.jsx("div",{className:"max-w-2xl text-center",children:y.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Skills"})})})})]})]})]})}og.createRoot(document.getElementById("root")).render(y.jsx(D.StrictMode,{children:y.jsx(oA,{})}));
