(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function Z0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var No={exports:{}},Du={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function lg(){if(o0)return Du;o0=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,d,m){var y=null;if(m!==void 0&&(y=""+m),d.key!==void 0&&(y=""+d.key),"key"in d){m={};for(var z in d)z!=="key"&&(m[z]=d[z])}else m=d;return d=m.ref,{$$typeof:n,type:r,key:y,ref:d!==void 0?d:null,props:m}}return Du.Fragment=c,Du.jsx=o,Du.jsxs=o,Du}var s0;function ag(){return s0||(s0=1,No.exports=lg()),No.exports}var h=ag(),_o={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function ng(){if(f0)return bt;f0=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),j=Symbol.iterator;function U(b){return b===null||typeof b!="object"?null:(b=j&&b[j]||b["@@iterator"],typeof b=="function"?b:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,lt={};function Z(b,_,G){this.props=b,this.context=_,this.refs=lt,this.updater=G||K}Z.prototype.isReactComponent={},Z.prototype.setState=function(b,_){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,_,"setState")},Z.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=Z.prototype;function V(b,_,G){this.props=b,this.context=_,this.refs=lt,this.updater=G||K}var Q=V.prototype=new W;Q.constructor=V,I(Q,Z.prototype),Q.isPureReactComponent=!0;var tt=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function P(b,_,G,B,Y,at){return G=at.ref,{$$typeof:n,type:b,key:_,ref:G!==void 0?G:null,props:at}}function yt(b,_){return P(b.type,_,void 0,void 0,void 0,b.props)}function wt(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function Lt(b){var _={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(G){return _[G]})}var Ot=/\/+/g;function pt(b,_){return typeof b=="object"&&b!==null&&b.key!=null?Lt(""+b.key):_.toString(36)}function Ht(){}function Mt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Ht,Ht):(b.status="pending",b.then(function(_){b.status==="pending"&&(b.status="fulfilled",b.value=_)},function(_){b.status==="pending"&&(b.status="rejected",b.reason=_)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function ut(b,_,G,B,Y){var at=typeof b;(at==="undefined"||at==="boolean")&&(b=null);var J=!1;if(b===null)J=!0;else switch(at){case"bigint":case"string":case"number":J=!0;break;case"object":switch(b.$$typeof){case n:case c:J=!0;break;case M:return J=b._init,ut(J(b._payload),_,G,B,Y)}}if(J)return Y=Y(b),J=B===""?"."+pt(b,0):B,tt(Y)?(G="",J!=null&&(G=J.replace(Ot,"$&/")+"/"),ut(Y,_,G,"",function($){return $})):Y!=null&&(wt(Y)&&(Y=yt(Y,G+(Y.key==null||b&&b.key===Y.key?"":(""+Y.key).replace(Ot,"$&/")+"/")+J)),_.push(Y)),1;J=0;var st=B===""?".":B+":";if(tt(b))for(var ht=0;ht<b.length;ht++)B=b[ht],at=st+pt(B,ht),J+=ut(B,_,G,at,Y);else if(ht=U(b),typeof ht=="function")for(b=ht.call(b),ht=0;!(B=b.next()).done;)B=B.value,at=st+pt(B,ht++),J+=ut(B,_,G,at,Y);else if(at==="object"){if(typeof b.then=="function")return ut(Mt(b),_,G,B,Y);throw _=String(b),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return J}function O(b,_,G){if(b==null)return b;var B=[],Y=0;return ut(b,B,"","",function(at){return _.call(G,at,Y++)}),B}function L(b){if(b._status===-1){var _=b._result;_=_(),_.then(function(G){(b._status===0||b._status===-1)&&(b._status=1,b._result=G)},function(G){(b._status===0||b._status===-1)&&(b._status=2,b._result=G)}),b._status===-1&&(b._status=0,b._result=_)}if(b._status===1)return b._result.default;throw b._result}var X=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function it(){}return bt.Children={map:O,forEach:function(b,_,G){O(b,function(){_.apply(this,arguments)},G)},count:function(b){var _=0;return O(b,function(){_++}),_},toArray:function(b){return O(b,function(_){return _})||[]},only:function(b){if(!wt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},bt.Component=Z,bt.Fragment=o,bt.Profiler=d,bt.PureComponent=V,bt.StrictMode=r,bt.Suspense=x,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,bt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return q.H.useMemoCache(b)}},bt.cache=function(b){return function(){return b.apply(null,arguments)}},bt.cloneElement=function(b,_,G){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var B=I({},b.props),Y=b.key,at=void 0;if(_!=null)for(J in _.ref!==void 0&&(at=void 0),_.key!==void 0&&(Y=""+_.key),_)!F.call(_,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&_.ref===void 0||(B[J]=_[J]);var J=arguments.length-2;if(J===1)B.children=G;else if(1<J){for(var st=Array(J),ht=0;ht<J;ht++)st[ht]=arguments[ht+2];B.children=st}return P(b.type,Y,void 0,void 0,at,B)},bt.createContext=function(b){return b={$$typeof:y,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:m,_context:b},b},bt.createElement=function(b,_,G){var B,Y={},at=null;if(_!=null)for(B in _.key!==void 0&&(at=""+_.key),_)F.call(_,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Y[B]=_[B]);var J=arguments.length-2;if(J===1)Y.children=G;else if(1<J){for(var st=Array(J),ht=0;ht<J;ht++)st[ht]=arguments[ht+2];Y.children=st}if(b&&b.defaultProps)for(B in J=b.defaultProps,J)Y[B]===void 0&&(Y[B]=J[B]);return P(b,at,void 0,void 0,null,Y)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(b){return{$$typeof:z,render:b}},bt.isValidElement=wt,bt.lazy=function(b){return{$$typeof:M,_payload:{_status:-1,_result:b},_init:L}},bt.memo=function(b,_){return{$$typeof:g,type:b,compare:_===void 0?null:_}},bt.startTransition=function(b){var _=q.T,G={};q.T=G;try{var B=b(),Y=q.S;Y!==null&&Y(G,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(it,X)}catch(at){X(at)}finally{q.T=_}},bt.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},bt.use=function(b){return q.H.use(b)},bt.useActionState=function(b,_,G){return q.H.useActionState(b,_,G)},bt.useCallback=function(b,_){return q.H.useCallback(b,_)},bt.useContext=function(b){return q.H.useContext(b)},bt.useDebugValue=function(){},bt.useDeferredValue=function(b,_){return q.H.useDeferredValue(b,_)},bt.useEffect=function(b,_,G){var B=q.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(b,_)},bt.useId=function(){return q.H.useId()},bt.useImperativeHandle=function(b,_,G){return q.H.useImperativeHandle(b,_,G)},bt.useInsertionEffect=function(b,_){return q.H.useInsertionEffect(b,_)},bt.useLayoutEffect=function(b,_){return q.H.useLayoutEffect(b,_)},bt.useMemo=function(b,_){return q.H.useMemo(b,_)},bt.useOptimistic=function(b,_){return q.H.useOptimistic(b,_)},bt.useReducer=function(b,_,G){return q.H.useReducer(b,_,G)},bt.useRef=function(b){return q.H.useRef(b)},bt.useState=function(b){return q.H.useState(b)},bt.useSyncExternalStore=function(b,_,G){return q.H.useSyncExternalStore(b,_,G)},bt.useTransition=function(){return q.H.useTransition()},bt.version="19.1.0",bt}var d0;function ns(){return d0||(d0=1,_o.exports=ng()),_o.exports}var w=ns();const R=Z0(w);var Bo={exports:{}},zu={},ko={exports:{}},Uo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function ug(){return h0||(h0=1,function(n){function c(O,L){var X=O.length;O.push(L);t:for(;0<X;){var it=X-1>>>1,b=O[it];if(0<d(b,L))O[it]=L,O[X]=b,X=it;else break t}}function o(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var L=O[0],X=O.pop();if(X!==L){O[0]=X;t:for(var it=0,b=O.length,_=b>>>1;it<_;){var G=2*(it+1)-1,B=O[G],Y=G+1,at=O[Y];if(0>d(B,X))Y<b&&0>d(at,B)?(O[it]=at,O[Y]=X,it=Y):(O[it]=B,O[G]=X,it=G);else if(Y<b&&0>d(at,X))O[it]=at,O[Y]=X,it=Y;else break t}}return L}function d(O,L){var X=O.sortIndex-L.sortIndex;return X!==0?X:O.id-L.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var y=Date,z=y.now();n.unstable_now=function(){return y.now()-z}}var x=[],g=[],M=1,j=null,U=3,K=!1,I=!1,lt=!1,Z=!1,W=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function tt(O){for(var L=o(g);L!==null;){if(L.callback===null)r(g);else if(L.startTime<=O)r(g),L.sortIndex=L.expirationTime,c(x,L);else break;L=o(g)}}function q(O){if(lt=!1,tt(O),!I)if(o(x)!==null)I=!0,F||(F=!0,pt());else{var L=o(g);L!==null&&ut(q,L.startTime-O)}}var F=!1,P=-1,yt=5,wt=-1;function Lt(){return Z?!0:!(n.unstable_now()-wt<yt)}function Ot(){if(Z=!1,F){var O=n.unstable_now();wt=O;var L=!0;try{t:{I=!1,lt&&(lt=!1,V(P),P=-1),K=!0;var X=U;try{e:{for(tt(O),j=o(x);j!==null&&!(j.expirationTime>O&&Lt());){var it=j.callback;if(typeof it=="function"){j.callback=null,U=j.priorityLevel;var b=it(j.expirationTime<=O);if(O=n.unstable_now(),typeof b=="function"){j.callback=b,tt(O),L=!0;break e}j===o(x)&&r(x),tt(O)}else r(x);j=o(x)}if(j!==null)L=!0;else{var _=o(g);_!==null&&ut(q,_.startTime-O),L=!1}}break t}finally{j=null,U=X,K=!1}L=void 0}}finally{L?pt():F=!1}}}var pt;if(typeof Q=="function")pt=function(){Q(Ot)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,Mt=Ht.port2;Ht.port1.onmessage=Ot,pt=function(){Mt.postMessage(null)}}else pt=function(){W(Ot,0)};function ut(O,L){P=W(function(){O(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):yt=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return U},n.unstable_next=function(O){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var X=U;U=L;try{return O()}finally{U=X}},n.unstable_requestPaint=function(){Z=!0},n.unstable_runWithPriority=function(O,L){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=U;U=O;try{return L()}finally{U=X}},n.unstable_scheduleCallback=function(O,L,X){var it=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?it+X:it):X=it,O){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=X+b,O={id:M++,callback:L,priorityLevel:O,startTime:X,expirationTime:b,sortIndex:-1},X>it?(O.sortIndex=X,c(g,O),o(x)===null&&O===o(g)&&(lt?(V(P),P=-1):lt=!0,ut(q,X-it))):(O.sortIndex=b,c(x,O),I||K||(I=!0,F||(F=!0,pt()))),O},n.unstable_shouldYield=Lt,n.unstable_wrapCallback=function(O){var L=U;return function(){var X=U;U=L;try{return O.apply(this,arguments)}finally{U=X}}}}(Uo)),Uo}var p0;function ig(){return p0||(p0=1,ko.exports=ug()),ko.exports}var Ho={exports:{}},be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function cg(){if(m0)return be;m0=1;var n=ns();function c(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)g+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(x,g,M){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:x,containerInfo:g,implementation:M}}var y=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,be.createPortal=function(x,g){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return m(x,g,null,M)},be.flushSync=function(x){var g=y.T,M=r.p;try{if(y.T=null,r.p=2,x)return x()}finally{y.T=g,r.p=M,r.d.f()}},be.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(x,g))},be.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},be.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var M=g.as,j=z(M,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,K=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;M==="style"?r.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:U,fetchPriority:K}):M==="script"&&r.d.X(x,{crossOrigin:j,integrity:U,fetchPriority:K,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},be.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var M=z(g.as,g.crossOrigin);r.d.M(x,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(x)},be.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var M=g.as,j=z(M,g.crossOrigin);r.d.L(x,M,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},be.preloadModule=function(x,g){if(typeof x=="string")if(g){var M=z(g.as,g.crossOrigin);r.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(x)},be.requestFormReset=function(x){r.d.r(x)},be.unstable_batchedUpdates=function(x,g){return x(g)},be.useFormState=function(x,g,M){return y.H.useFormState(x,g,M)},be.useFormStatus=function(){return y.H.useHostTransitionStatus()},be.version="19.1.0",be}var b0;function V0(){if(b0)return Ho.exports;b0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Ho.exports=cg(),Ho.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function rg(){if(g0)return zu;g0=1;var n=ig(),c=ns(),o=V0();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(m(t)!==t)throw Error(r(188))}function x(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return z(u),t;if(i===a)return z(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var s=!1,f=u.child;f;){if(f===l){s=!0,l=u,a=i;break}if(f===a){s=!0,a=u,l=i;break}f=f.sibling}if(!s){for(f=i.child;f;){if(f===l){s=!0,l=i,a=u;break}if(f===a){s=!0,a=i,l=u;break}f=f.sibling}if(!s)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var M=Object.assign,j=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),lt=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),Lt=Symbol.for("react.memo_cache_sentinel"),Ot=Symbol.iterator;function pt(t){return t===null||typeof t!="object"?null:(t=Ot&&t[Ot]||t["@@iterator"],typeof t=="function"?t:null)}var Ht=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case Z:return"Profiler";case lt:return"StrictMode";case q:return"Suspense";case F:return"SuspenseList";case wt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case K:return"Portal";case Q:return(t.displayName||"Context")+".Provider";case V:return(t._context.displayName||"Context")+".Consumer";case tt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return e=t.displayName||null,e!==null?e:Mt(t.type)||"Memo";case yt:e=t._payload,t=t._init;try{return Mt(t(e))}catch{}}return null}var ut=Array.isArray,O=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},it=[],b=-1;function _(t){return{current:t}}function G(t){0>b||(t.current=it[b],it[b]=null,b--)}function B(t,e){b++,it[b]=t.current,t.current=e}var Y=_(null),at=_(null),J=_(null),st=_(null);function ht(t,e){switch(B(J,e),B(at,t),B(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Uh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Uh(e),t=Hh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(Y),B(Y,t)}function $(){G(Y),G(at),G(J)}function dt(t){t.memoizedState!==null&&B(st,t);var e=Y.current,l=Hh(e,t.type);e!==l&&(B(at,t),B(Y,l))}function mt(t){at.current===t&&(G(Y),G(at)),st.current===t&&(G(st),Au._currentValue=X)}var Et=Object.prototype.hasOwnProperty,Nt=n.unstable_scheduleCallback,Vt=n.unstable_cancelCallback,Kt=n.unstable_shouldYield,ve=n.unstable_requestPaint,It=n.unstable_now,rl=n.unstable_getCurrentPriorityLevel,Xe=n.unstable_ImmediatePriority,Ma=n.unstable_UserBlockingPriority,Dl=n.unstable_NormalPriority,la=n.unstable_LowPriority,Rn=n.unstable_IdlePriority,vs=n.log,$p=n.unstable_setDisableYieldValue,On=null,Te=null;function zl(t){if(typeof vs=="function"&&$p(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(On,t)}catch{}}var we=Math.clz32?Math.clz32:Yp,Qp=Math.log,Lp=Math.LN2;function Yp(t){return t>>>=0,t===0?32:31-(Qp(t)/Lp|0)|0}var Bu=256,ku=4194304;function aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Uu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?u=aa(a):(s&=f,s!==0?u=aa(s):l||(l=f&~t,l!==0&&(u=aa(l))))):(f=a&~i,f!==0?u=aa(f):s!==0?u=aa(s):l||(l=a&~t,l!==0&&(u=aa(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function Mn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Gp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ys(){var t=Bu;return Bu<<=1,(Bu&4194048)===0&&(Bu=256),t}function xs(){var t=ku;return ku<<=1,(ku&62914560)===0&&(ku=4194304),t}function Ac(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function jn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qp(t,e,l,a,u,i){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,p=t.expirationTimes,E=t.hiddenUpdates;for(l=s&~l;0<l;){var C=31-we(l),k=1<<C;f[C]=0,p[C]=-1;var T=E[C];if(T!==null)for(E[C]=null,C=0;C<T.length;C++){var D=T[C];D!==null&&(D.lane&=-536870913)}l&=~k}a!==0&&As(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function As(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-we(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Ss(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-we(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function Sc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ec(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Es(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:a0(t.type))}function Xp(t,e){var l=L.p;try{return L.p=t,e()}finally{L.p=l}}var Rl=Math.random().toString(36).slice(2),pe="__reactFiber$"+Rl,ye="__reactProps$"+Rl,ja="__reactContainer$"+Rl,Tc="__reactEvents$"+Rl,Zp="__reactListeners$"+Rl,Vp="__reactHandles$"+Rl,Ts="__reactResources$"+Rl,Cn="__reactMarker$"+Rl;function wc(t){delete t[pe],delete t[ye],delete t[Tc],delete t[Zp],delete t[Vp]}function Ca(t){var e=t[pe];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ja]||l[pe]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Yh(t);t!==null;){if(l=t[pe])return l;t=Yh(t)}return e}t=l,l=t.parentNode}return null}function Na(t){if(t=t[pe]||t[ja]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Nn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function _a(t){var e=t[Ts];return e||(e=t[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ne(t){t[Cn]=!0}var ws=new Set,Ds={};function na(t,e){Ba(t,e),Ba(t+"Capture",e)}function Ba(t,e){for(Ds[t]=e,t=0;t<e.length;t++)ws.add(e[t])}var Kp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zs={},Rs={};function Jp(t){return Et.call(Rs,t)?!0:Et.call(zs,t)?!1:Kp.test(t)?Rs[t]=!0:(zs[t]=!0,!1)}function Hu(t,e,l){if(Jp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function $u(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ol(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var Dc,Os;function ka(t){if(Dc===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||"",Os=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dc+t+Os}var zc=!1;function Rc(t,e){if(!t||zc)return"";zc=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(D){var T=D}Reflect.construct(t,[],k)}else{try{k.call()}catch(D){T=D}t.call(k.prototype)}}else{try{throw Error()}catch(D){T=D}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(D){if(D&&T&&typeof D.stack=="string")return[D.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],f=i[1];if(s&&f){var p=s.split(`
`),E=f.split(`
`);for(u=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;u<E.length&&!E[u].includes("DetermineComponentFrameRoot");)u++;if(a===p.length||u===E.length)for(a=p.length-1,u=E.length-1;1<=a&&0<=u&&p[a]!==E[u];)u--;for(;1<=a&&0<=u;a--,u--)if(p[a]!==E[u]){if(a!==1||u!==1)do if(a--,u--,0>u||p[a]!==E[u]){var C=`
`+p[a].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=a&&0<=u);break}}}finally{zc=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?ka(l):""}function Wp(t){switch(t.tag){case 26:case 27:case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return Rc(t.type,!1);case 11:return Rc(t.type.render,!1);case 1:return Rc(t.type,!0);case 31:return ka("Activity");default:return""}}function Ms(t){try{var e="";do e+=Wp(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function js(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ip(t){var e=js(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qu(t){t._valueTracker||(t._valueTracker=Ip(t))}function Cs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=js(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fp=/[\n"\\]/g;function ke(t){return t.replace(Fp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Oc(t,e,l,a,u,i,s,f){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Mc(t,s,Be(e)):l!=null?Mc(t,s,Be(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+Be(f):t.removeAttribute("name")}function Ns(t,e,l,a,u,i,s,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+Be(l):"",e=e!=null?""+Be(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function Mc(t,e,l){e==="number"&&Lu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Ua(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Be(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function _s(t,e,l){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Be(l):""}function Bs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(ut(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Be(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ha(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Pp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ks(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Pp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Us(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&ks(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&ks(t,i,e[i])}function jc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),em=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yu(t){return em.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Cc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $a=null,Qa=null;function Hs(t){var e=Na(t);if(e&&(t=e.stateNode)){var l=t[ye]||null;t:switch(t=e.stateNode,e.type){case"input":if(Oc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ke(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ye]||null;if(!u)throw Error(r(90));Oc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Cs(a)}break t;case"textarea":_s(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ua(t,!!l.multiple,e,!1)}}}var _c=!1;function $s(t,e,l){if(_c)return t(e,l);_c=!0;try{var a=t(e);return a}finally{if(_c=!1,($a!==null||Qa!==null)&&(zi(),$a&&(e=$a,t=Qa,Qa=$a=null,Hs(e),t)))for(e=0;e<t.length;e++)Hs(t[e])}}function _n(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ye]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var sl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(sl)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Bc=!1}var Ol=null,kc=null,Gu=null;function Qs(){if(Gu)return Gu;var t,e=kc,l=e.length,a,u="value"in Ol?Ol.value:Ol.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===u[i-a];a++);return Gu=u.slice(t,1<a?1-a:void 0)}function qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xu(){return!0}function Ls(){return!1}function xe(t){function e(l,a,u,i,s){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xu:Ls,this.isPropagationStopped=Ls,this}return M(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=xe(ua),kn=M({},ua,{view:0,detail:0}),lm=xe(kn),Uc,Hc,Un,Vu=M({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Un&&(Un&&t.type==="mousemove"?(Uc=t.screenX-Un.screenX,Hc=t.screenY-Un.screenY):Hc=Uc=0,Un=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Ys=xe(Vu),am=M({},Vu,{dataTransfer:0}),nm=xe(am),um=M({},kn,{relatedTarget:0}),$c=xe(um),im=M({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=xe(im),rm=M({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),om=xe(rm),sm=M({},ua,{data:0}),Gs=xe(sm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hm[t])?!!e[t]:!1}function Qc(){return pm}var mm=M({},kn,{key:function(t){if(t.key){var e=fm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bm=xe(mm),gm=M({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qs=xe(gm),vm=M({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),ym=xe(vm),xm=M({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=xe(xm),Sm=M({},Vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=xe(Sm),Tm=M({},ua,{newState:0,oldState:0}),wm=xe(Tm),Dm=[9,13,27,32],Lc=sl&&"CompositionEvent"in window,Hn=null;sl&&"documentMode"in document&&(Hn=document.documentMode);var zm=sl&&"TextEvent"in window&&!Hn,Xs=sl&&(!Lc||Hn&&8<Hn&&11>=Hn),Zs=" ",Vs=!1;function Ks(t,e){switch(t){case"keyup":return Dm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var La=!1;function Rm(t,e){switch(t){case"compositionend":return Js(e);case"keypress":return e.which!==32?null:(Vs=!0,Zs);case"textInput":return t=e.data,t===Zs&&Vs?null:t;default:return null}}function Om(t,e){if(La)return t==="compositionend"||!Lc&&Ks(t,e)?(t=Qs(),Gu=kc=Ol=null,La=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xs&&e.locale!=="ko"?null:e.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mm[t.type]:e==="textarea"}function Is(t,e,l,a){$a?Qa?Qa.push(a):Qa=[a]:$a=a,e=Ni(e,"onChange"),0<e.length&&(l=new Zu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var $n=null,Qn=null;function jm(t){Ch(t,0)}function Ku(t){var e=Nn(t);if(Cs(e))return t}function Fs(t,e){if(t==="change")return e}var Ps=!1;if(sl){var Yc;if(sl){var Gc="oninput"in document;if(!Gc){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),Gc=typeof tf.oninput=="function"}Yc=Gc}else Yc=!1;Ps=Yc&&(!document.documentMode||9<document.documentMode)}function ef(){$n&&($n.detachEvent("onpropertychange",lf),Qn=$n=null)}function lf(t){if(t.propertyName==="value"&&Ku(Qn)){var e=[];Is(e,Qn,t,Nc(t)),$s(jm,e)}}function Cm(t,e,l){t==="focusin"?(ef(),$n=e,Qn=l,$n.attachEvent("onpropertychange",lf)):t==="focusout"&&ef()}function Nm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Qn)}function _m(t,e){if(t==="click")return Ku(e)}function Bm(t,e){if(t==="input"||t==="change")return Ku(e)}function km(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var De=typeof Object.is=="function"?Object.is:km;function Ln(t,e){if(De(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Et.call(e,u)||!De(t[u],e[u]))return!1}return!0}function af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var l=af(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=af(l)}}function uf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Lu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Lu(t.document)}return e}function qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Um=sl&&"documentMode"in document&&11>=document.documentMode,Ya=null,Xc=null,Yn=null,Zc=!1;function rf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Zc||Ya==null||Ya!==Lu(a)||(a=Ya,"selectionStart"in a&&qc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Yn&&Ln(Yn,a)||(Yn=a,a=Ni(Xc,"onSelect"),0<a.length&&(e=new Zu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ya)))}function ia(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ga={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},Vc={},of={};sl&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ca(t){if(Vc[t])return Vc[t];if(!Ga[t])return t;var e=Ga[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in of)return Vc[t]=e[l];return t}var sf=ca("animationend"),ff=ca("animationiteration"),df=ca("animationstart"),Hm=ca("transitionrun"),$m=ca("transitionstart"),Qm=ca("transitioncancel"),hf=ca("transitionend"),pf=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function Ze(t,e){pf.set(t,e),na(e,[t])}var mf=new WeakMap;function Ue(t,e){if(typeof t=="object"&&t!==null){var l=mf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Ms(e)},mf.set(t,e),e)}return{value:t,source:e,stack:Ms(e)}}var He=[],qa=0,Jc=0;function Ju(){for(var t=qa,e=Jc=qa=0;e<t;){var l=He[e];He[e++]=null;var a=He[e];He[e++]=null;var u=He[e];He[e++]=null;var i=He[e];if(He[e++]=null,a!==null&&u!==null){var s=a.pending;s===null?u.next=u:(u.next=s.next,s.next=u),a.pending=u}i!==0&&bf(l,u,i)}}function Wu(t,e,l,a){He[qa++]=t,He[qa++]=e,He[qa++]=l,He[qa++]=a,Jc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Wc(t,e,l,a){return Wu(t,e,l,a),Iu(t)}function Xa(t,e){return Wu(t,null,null,e),Iu(t)}function bf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-we(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Iu(t){if(50<hu)throw hu=0,lo=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Za={};function Lm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(t,e,l,a){return new Lm(t,e,l,a)}function Ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fl(t,e){var l=t.alternate;return l===null?(l=ze(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function gf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Fu(t,e,l,a,u,i){var s=0;if(a=t,typeof t=="function")Ic(t)&&(s=1);else if(typeof t=="string")s=Gb(t,l,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case wt:return t=ze(31,l,e,u),t.elementType=wt,t.lanes=i,t;case I:return ra(l.children,u,i,e);case lt:s=8,u|=24;break;case Z:return t=ze(12,l,e,u|2),t.elementType=Z,t.lanes=i,t;case q:return t=ze(13,l,e,u),t.elementType=q,t.lanes=i,t;case F:return t=ze(19,l,e,u),t.elementType=F,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:case Q:s=10;break t;case V:s=9;break t;case tt:s=11;break t;case P:s=14;break t;case yt:s=16,a=null;break t}s=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=ze(s,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function ra(t,e,l,a){return t=ze(7,t,a,e),t.lanes=l,t}function Fc(t,e,l){return t=ze(6,t,null,e),t.lanes=l,t}function Pc(t,e,l){return e=ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Va=[],Ka=0,Pu=null,ti=0,$e=[],Qe=0,oa=null,dl=1,hl="";function sa(t,e){Va[Ka++]=ti,Va[Ka++]=Pu,Pu=t,ti=e}function vf(t,e,l){$e[Qe++]=dl,$e[Qe++]=hl,$e[Qe++]=oa,oa=t;var a=dl;t=hl;var u=32-we(a)-1;a&=~(1<<u),l+=1;var i=32-we(e)+u;if(30<i){var s=u-u%5;i=(a&(1<<s)-1).toString(32),a>>=s,u-=s,dl=1<<32-we(e)+u|l<<u|a,hl=i+t}else dl=1<<i|l<<u|a,hl=t}function tr(t){t.return!==null&&(sa(t,1),vf(t,1,0))}function er(t){for(;t===Pu;)Pu=Va[--Ka],Va[Ka]=null,ti=Va[--Ka],Va[Ka]=null;for(;t===oa;)oa=$e[--Qe],$e[Qe]=null,hl=$e[--Qe],$e[Qe]=null,dl=$e[--Qe],$e[Qe]=null}var ge=null,qt=null,zt=!1,fa=null,Fe=!1,lr=Error(r(519));function da(t){var e=Error(r(418,""));throw Xn(Ue(e,t)),lr}function yf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[pe]=t,e[ye]=a,l){case"dialog":St("cancel",e),St("close",e);break;case"iframe":case"object":case"embed":St("load",e);break;case"video":case"audio":for(l=0;l<mu.length;l++)St(mu[l],e);break;case"source":St("error",e);break;case"img":case"image":case"link":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"input":St("invalid",e),Ns(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Qu(e);break;case"select":St("invalid",e);break;case"textarea":St("invalid",e),Bs(e,a.value,a.defaultValue,a.children),Qu(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||kh(e.textContent,l)?(a.popover!=null&&(St("beforetoggle",e),St("toggle",e)),a.onScroll!=null&&St("scroll",e),a.onScrollEnd!=null&&St("scrollend",e),a.onClick!=null&&(e.onclick=_i),e=!0):e=!1,e||da(t)}function xf(t){for(ge=t.return;ge;)switch(ge.tag){case 5:case 13:Fe=!1;return;case 27:case 3:Fe=!0;return;default:ge=ge.return}}function Gn(t){if(t!==ge)return!1;if(!zt)return xf(t),zt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||yo(t.type,t.memoizedProps)),l=!l),l&&qt&&da(t),xf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){qt=Ke(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}qt=null}}else e===27?(e=qt,Xl(t.type)?(t=Eo,Eo=null,qt=t):qt=e):qt=ge?Ke(t.stateNode.nextSibling):null;return!0}function qn(){qt=ge=null,zt=!1}function Af(){var t=fa;return t!==null&&(Ee===null?Ee=t:Ee.push.apply(Ee,t),fa=null),t}function Xn(t){fa===null?fa=[t]:fa.push(t)}var ar=_(null),ha=null,pl=null;function Ml(t,e,l){B(ar,e._currentValue),e._currentValue=l}function ml(t){t._currentValue=ar.current,G(ar)}function nr(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function ur(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var s=u.child;i=i.firstContext;t:for(;i!==null;){var f=i;i=u;for(var p=0;p<e.length;p++)if(f.context===e[p]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),nr(i.return,l,t),a||(s=null);break t}i=f.next}}else if(u.tag===18){if(s=u.return,s===null)throw Error(r(341));s.lanes|=l,i=s.alternate,i!==null&&(i.lanes|=l),nr(s,l,t),s=null}else s=u.child;if(s!==null)s.return=u;else for(s=u;s!==null;){if(s===t){s=null;break}if(u=s.sibling,u!==null){u.return=s.return,s=u;break}s=s.return}u=s}}function Zn(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var s=u.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var f=u.type;De(u.pendingProps.value,s.value)||(t!==null?t.push(f):t=[f])}}else if(u===st.current){if(s=u.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Au):t=[Au])}u=u.return}t!==null&&ur(e,t,l,a),e.flags|=262144}function ei(t){for(t=t.firstContext;t!==null;){if(!De(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pa(t){ha=t,pl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function me(t){return Sf(ha,t)}function li(t,e){return ha===null&&pa(t),Sf(t,e)}function Sf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},pl===null){if(t===null)throw Error(r(308));pl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else pl=pl.next=e;return l}var Ym=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Gm=n.unstable_scheduleCallback,qm=n.unstable_NormalPriority,ee={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ir(){return{controller:new Ym,data:new Map,refCount:0}}function Vn(t){t.refCount--,t.refCount===0&&Gm(qm,function(){t.controller.abort()})}var Kn=null,cr=0,Ja=0,Wa=null;function Xm(t,e){if(Kn===null){var l=Kn=[];cr=0,Ja=oo(),Wa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return cr++,e.then(Ef,Ef),e}function Ef(){if(--cr===0&&Kn!==null){Wa!==null&&(Wa.status="fulfilled");var t=Kn;Kn=null,Ja=0,Wa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Zm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var Tf=O.S;O.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xm(t,e),Tf!==null&&Tf(t,e)};var ma=_(null);function rr(){var t=ma.current;return t!==null?t:$t.pooledCache}function ai(t,e){e===null?B(ma,ma.current):B(ma,e.pool)}function wf(){var t=rr();return t===null?null:{parent:ee._currentValue,pool:t}}var Jn=Error(r(460)),Df=Error(r(474)),ni=Error(r(542)),or={then:function(){}};function zf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ui(){}function Rf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(ui,ui),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t;default:if(typeof e.status=="string")e.then(ui,ui);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mf(t),t}throw Wn=e,Jn}}var Wn=null;function Of(){if(Wn===null)throw Error(r(459));var t=Wn;return Wn=null,t}function Mf(t){if(t===Jn||t===ni)throw Error(r(483))}var jl=!1;function sr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Cl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(jt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Iu(t),bf(t,null,l),e}return Wu(t,a,e,l),Iu(t)}function In(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ss(t,l)}}function dr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=s:i=i.next=s,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var hr=!1;function Fn(){if(hr){var t=Wa;if(t!==null)throw t}}function Pn(t,e,l,a){hr=!1;var u=t.updateQueue;jl=!1;var i=u.firstBaseUpdate,s=u.lastBaseUpdate,f=u.shared.pending;if(f!==null){u.shared.pending=null;var p=f,E=p.next;p.next=null,s===null?i=E:s.next=E,s=p;var C=t.alternate;C!==null&&(C=C.updateQueue,f=C.lastBaseUpdate,f!==s&&(f===null?C.firstBaseUpdate=E:f.next=E,C.lastBaseUpdate=p))}if(i!==null){var k=u.baseState;s=0,C=E=p=null,f=i;do{var T=f.lane&-536870913,D=T!==f.lane;if(D?(Tt&T)===T:(a&T)===T){T!==0&&T===Ja&&(hr=!0),C!==null&&(C=C.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var ft=t,rt=f;T=e;var kt=l;switch(rt.tag){case 1:if(ft=rt.payload,typeof ft=="function"){k=ft.call(kt,k,T);break t}k=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=rt.payload,T=typeof ft=="function"?ft.call(kt,k,T):ft,T==null)break t;k=M({},k,T);break t;case 2:jl=!0}}T=f.callback,T!==null&&(t.flags|=64,D&&(t.flags|=8192),D=u.callbacks,D===null?u.callbacks=[T]:D.push(T))}else D={lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},C===null?(E=C=D,p=k):C=C.next=D,s|=T;if(f=f.next,f===null){if(f=u.shared.pending,f===null)break;D=f,f=D.next,D.next=null,u.lastBaseUpdate=D,u.shared.pending=null}}while(!0);C===null&&(p=k),u.baseState=p,u.firstBaseUpdate=E,u.lastBaseUpdate=C,i===null&&(u.shared.lanes=0),Ll|=s,t.lanes=s,t.memoizedState=k}}function jf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Cf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)jf(l[t],e)}var Ia=_(null),ii=_(0);function Nf(t,e){t=Sl,B(ii,t),B(Ia,e),Sl=t|e.baseLanes}function pr(){B(ii,Sl),B(Ia,Ia.current)}function mr(){Sl=ii.current,G(Ia),G(ii)}var _l=0,vt=null,_t=null,Ft=null,ci=!1,Fa=!1,ba=!1,ri=0,tu=0,Pa=null,Vm=0;function Jt(){throw Error(r(321))}function br(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!De(t[l],e[l]))return!1;return!0}function gr(t,e,l,a,u,i){return _l=i,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?bd:gd,ba=!1,i=l(a,u),ba=!1,Fa&&(i=Bf(e,l,a,u)),_f(t),i}function _f(t){O.H=pi;var e=_t!==null&&_t.next!==null;if(_l=0,Ft=_t=vt=null,ci=!1,tu=0,Pa=null,e)throw Error(r(300));t===null||ue||(t=t.dependencies,t!==null&&ei(t)&&(ue=!0))}function Bf(t,e,l,a){vt=t;var u=0;do{if(Fa&&(Pa=null),tu=0,Fa=!1,25<=u)throw Error(r(301));if(u+=1,Ft=_t=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=tb,i=e(l,a)}while(Fa);return i}function Km(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?eu(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(vt.flags|=1024),e}function vr(){var t=ri!==0;return ri=0,t}function yr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function xr(t){if(ci){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ci=!1}_l=0,Ft=_t=vt=null,Fa=!1,tu=ri=0,Pa=null}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Pt(){if(_t===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Ft===null?vt.memoizedState:Ft.next;if(e!==null)Ft=e,_t=t;else{if(t===null)throw vt.alternate===null?Error(r(467)):Error(r(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eu(t){var e=tu;return tu+=1,Pa===null&&(Pa=[]),t=Rf(Pa,t,e),e=vt,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?bd:gd),t}function oi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eu(t);if(t.$$typeof===Q)return me(t)}throw Error(r(438,String(t)))}function Sr(t){var e=null,l=vt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=vt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Ar(),vt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Lt;return e.index++,l}function bl(t,e){return typeof e=="function"?e(t):e}function si(t){var e=Pt();return Er(e,_t,t)}function Er(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var s=u.next;u.next=i.next,i.next=s}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var f=s=null,p=null,E=e,C=!1;do{var k=E.lane&-536870913;if(k!==E.lane?(Tt&k)===k:(_l&k)===k){var T=E.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),k===Ja&&(C=!0);else if((_l&T)===T){E=E.next,T===Ja&&(C=!0);continue}else k={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(f=p=k,s=i):p=p.next=k,vt.lanes|=T,Ll|=T;k=E.action,ba&&l(i,k),i=E.hasEagerState?E.eagerState:l(i,k)}else T={lane:k,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(f=p=T,s=i):p=p.next=T,vt.lanes|=k,Ll|=k;E=E.next}while(E!==null&&E!==e);if(p===null?s=i:p.next=f,!De(i,t.memoizedState)&&(ue=!0,C&&(l=Wa,l!==null)))throw l;t.memoizedState=i,t.baseState=s,t.baseQueue=p,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Tr(t){var e=Pt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var s=u=u.next;do i=t(i,s.action),s=s.next;while(s!==u);De(i,e.memoizedState)||(ue=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function kf(t,e,l){var a=vt,u=Pt(),i=zt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var s=!De((_t||u).memoizedState,l);s&&(u.memoizedState=l,ue=!0),u=u.queue;var f=$f.bind(null,a,u,t);if(lu(2048,8,f,[t]),u.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(a.flags|=2048,tn(9,fi(),Hf.bind(null,a,u,l,e),null),$t===null)throw Error(r(349));i||(_l&124)!==0||Uf(a,e,l)}return l}function Uf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=vt.updateQueue,e===null?(e=Ar(),vt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Hf(t,e,l,a){e.value=l,e.getSnapshot=a,Qf(e)&&Lf(t)}function $f(t,e,l){return l(function(){Qf(e)&&Lf(t)})}function Qf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!De(t,l)}catch{return!0}}function Lf(t){var e=Xa(t,2);e!==null&&Ce(e,t,2)}function wr(t){var e=Ae();if(typeof t=="function"){var l=t;if(t=l(),ba){zl(!0);try{l()}finally{zl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:t},e}function Yf(t,e,l,a){return t.baseState=l,Er(t,_t,typeof a=="function"?a:bl)}function Jm(t,e,l,a,u){if(hi(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};O.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Gf(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Gf(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=O.T,s={};O.T=s;try{var f=l(u,a),p=O.S;p!==null&&p(s,f),qf(t,e,f)}catch(E){Dr(t,e,E)}finally{O.T=i}}else try{i=l(u,a),qf(t,e,i)}catch(E){Dr(t,e,E)}}function qf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Xf(t,e,a)},function(a){return Dr(t,e,a)}):Xf(t,e,l)}function Xf(t,e,l){e.status="fulfilled",e.value=l,Zf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Gf(t,l)))}function Dr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Zf(e),e=e.next;while(e!==a)}t.action=null}function Zf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Vf(t,e){return e}function Kf(t,e){if(zt){var l=$t.formState;if(l!==null){t:{var a=vt;if(zt){if(qt){e:{for(var u=qt,i=Fe;u.nodeType!==8;){if(!i){u=null;break e}if(u=Ke(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){qt=Ke(u.nextSibling),a=u.data==="F!";break t}}da(a)}a=!1}a&&(e=l[0])}}return l=Ae(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vf,lastRenderedState:e},l.queue=a,l=hd.bind(null,vt,a),a.dispatch=l,a=wr(!1),i=jr.bind(null,vt,!1,a.queue),a=Ae(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Jm.bind(null,vt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function Jf(t){var e=Pt();return Wf(e,_t,t)}function Wf(t,e,l){if(e=Er(t,e,Vf)[0],t=si(bl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=eu(e)}catch(s){throw s===Jn?ni:s}else a=e;e=Pt();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(vt.flags|=2048,tn(9,fi(),Wm.bind(null,u,l),null)),[a,i,t]}function Wm(t,e){t.action=e}function If(t){var e=Pt(),l=_t;if(l!==null)return Wf(e,l,t);Pt(),e=e.memoizedState,l=Pt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function tn(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=vt.updateQueue,e===null&&(e=Ar(),vt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function fi(){return{destroy:void 0,resource:void 0}}function Ff(){return Pt().memoizedState}function di(t,e,l,a){var u=Ae();a=a===void 0?null:a,vt.flags|=t,u.memoizedState=tn(1|e,fi(),l,a)}function lu(t,e,l,a){var u=Pt();a=a===void 0?null:a;var i=u.memoizedState.inst;_t!==null&&a!==null&&br(a,_t.memoizedState.deps)?u.memoizedState=tn(e,i,l,a):(vt.flags|=t,u.memoizedState=tn(1|e,i,l,a))}function Pf(t,e){di(8390656,8,t,e)}function td(t,e){lu(2048,8,t,e)}function ed(t,e){return lu(4,2,t,e)}function ld(t,e){return lu(4,4,t,e)}function ad(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nd(t,e,l){l=l!=null?l.concat([t]):null,lu(4,4,ad.bind(null,e,t),l)}function zr(){}function ud(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&br(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function id(t,e){var l=Pt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&br(e,a[1]))return a[0];if(a=t(),ba){zl(!0);try{t()}finally{zl(!1)}}return l.memoizedState=[a,e],a}function Rr(t,e,l){return l===void 0||(_l&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=oh(),vt.lanes|=t,Ll|=t,l)}function cd(t,e,l,a){return De(l,e)?l:Ia.current!==null?(t=Rr(t,l,a),De(t,e)||(ue=!0),t):(_l&42)===0?(ue=!0,t.memoizedState=l):(t=oh(),vt.lanes|=t,Ll|=t,e)}function rd(t,e,l,a,u){var i=L.p;L.p=i!==0&&8>i?i:8;var s=O.T,f={};O.T=f,jr(t,!1,e,l);try{var p=u(),E=O.S;if(E!==null&&E(f,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=Zm(p,a);au(t,e,C,je(t))}else au(t,e,a,je(t))}catch(k){au(t,e,{then:function(){},status:"rejected",reason:k},je())}finally{L.p=i,O.T=s}}function Im(){}function Or(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=od(t).queue;rd(t,u,e,X,l===null?Im:function(){return sd(t),l(a)})}function od(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:X},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function sd(t){var e=od(t).next.queue;au(t,e,{},je())}function Mr(){return me(Au)}function fd(){return Pt().memoizedState}function dd(){return Pt().memoizedState}function Fm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=je();t=Cl(l);var a=Nl(e,t,l);a!==null&&(Ce(a,e,l),In(a,e,l)),e={cache:ir()},t.payload=e;return}e=e.return}}function Pm(t,e,l){var a=je();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},hi(t)?pd(e,l):(l=Wc(t,e,l,a),l!==null&&(Ce(l,t,a),md(l,e,a)))}function hd(t,e,l){var a=je();au(t,e,l,a)}function au(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(hi(t))pd(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,f=i(s,l);if(u.hasEagerState=!0,u.eagerState=f,De(f,s))return Wu(t,e,u,0),$t===null&&Ju(),!1}catch{}finally{}if(l=Wc(t,e,u,a),l!==null)return Ce(l,t,a),md(l,e,a),!0}return!1}function jr(t,e,l,a){if(a={lane:2,revertLane:oo(),action:a,hasEagerState:!1,eagerState:null,next:null},hi(t)){if(e)throw Error(r(479))}else e=Wc(t,l,a,2),e!==null&&Ce(e,t,2)}function hi(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function pd(t,e){Fa=ci=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function md(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ss(t,l)}}var pi={readContext:me,use:oi,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},bd={readContext:me,use:oi,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:me,useEffect:Pf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,di(4194308,4,ad.bind(null,e,t),l)},useLayoutEffect:function(t,e){return di(4194308,4,t,e)},useInsertionEffect:function(t,e){di(4,2,t,e)},useMemo:function(t,e){var l=Ae();e=e===void 0?null:e;var a=t();if(ba){zl(!0);try{t()}finally{zl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ae();if(l!==void 0){var u=l(e);if(ba){zl(!0);try{l(e)}finally{zl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Pm.bind(null,vt,t),[a.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:function(t){t=wr(t);var e=t.queue,l=hd.bind(null,vt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:zr,useDeferredValue:function(t,e){var l=Ae();return Rr(l,t,e)},useTransition:function(){var t=wr(!1);return t=rd.bind(null,vt,t.queue,!0,!1),Ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=vt,u=Ae();if(zt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),$t===null)throw Error(r(349));(Tt&124)!==0||Uf(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,Pf($f.bind(null,a,i,t),[t]),a.flags|=2048,tn(9,fi(),Hf.bind(null,a,i,l,e),null),l},useId:function(){var t=Ae(),e=$t.identifierPrefix;if(zt){var l=hl,a=dl;l=(a&~(1<<32-we(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=ri++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Vm++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Mr,useFormState:Kf,useActionState:Kf,useOptimistic:function(t){var e=Ae();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=jr.bind(null,vt,!0,l),l.dispatch=e,[t,e]},useMemoCache:Sr,useCacheRefresh:function(){return Ae().memoizedState=Fm.bind(null,vt)}},gd={readContext:me,use:oi,useCallback:ud,useContext:me,useEffect:td,useImperativeHandle:nd,useInsertionEffect:ed,useLayoutEffect:ld,useMemo:id,useReducer:si,useRef:Ff,useState:function(){return si(bl)},useDebugValue:zr,useDeferredValue:function(t,e){var l=Pt();return cd(l,_t.memoizedState,t,e)},useTransition:function(){var t=si(bl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:eu(t),e]},useSyncExternalStore:kf,useId:fd,useHostTransitionStatus:Mr,useFormState:Jf,useActionState:Jf,useOptimistic:function(t,e){var l=Pt();return Yf(l,_t,t,e)},useMemoCache:Sr,useCacheRefresh:dd},tb={readContext:me,use:oi,useCallback:ud,useContext:me,useEffect:td,useImperativeHandle:nd,useInsertionEffect:ed,useLayoutEffect:ld,useMemo:id,useReducer:Tr,useRef:Ff,useState:function(){return Tr(bl)},useDebugValue:zr,useDeferredValue:function(t,e){var l=Pt();return _t===null?Rr(l,t,e):cd(l,_t.memoizedState,t,e)},useTransition:function(){var t=Tr(bl)[0],e=Pt().memoizedState;return[typeof t=="boolean"?t:eu(t),e]},useSyncExternalStore:kf,useId:fd,useHostTransitionStatus:Mr,useFormState:If,useActionState:If,useOptimistic:function(t,e){var l=Pt();return _t!==null?Yf(l,_t,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Sr,useCacheRefresh:dd},en=null,nu=0;function mi(t){var e=nu;return nu+=1,en===null&&(en=[]),Rf(en,t,e)}function uu(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function bi(t,e){throw e.$$typeof===j?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vd(t){var e=t._init;return e(t._payload)}function yd(t){function e(A,v){if(t){var S=A.deletions;S===null?(A.deletions=[v],A.flags|=16):S.push(v)}}function l(A,v){if(!t)return null;for(;v!==null;)e(A,v),v=v.sibling;return null}function a(A){for(var v=new Map;A!==null;)A.key!==null?v.set(A.key,A):v.set(A.index,A),A=A.sibling;return v}function u(A,v){return A=fl(A,v),A.index=0,A.sibling=null,A}function i(A,v,S){return A.index=S,t?(S=A.alternate,S!==null?(S=S.index,S<v?(A.flags|=67108866,v):S):(A.flags|=67108866,v)):(A.flags|=1048576,v)}function s(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function f(A,v,S,N){return v===null||v.tag!==6?(v=Fc(S,A.mode,N),v.return=A,v):(v=u(v,S),v.return=A,v)}function p(A,v,S,N){var nt=S.type;return nt===I?C(A,v,S.props.children,N,S.key):v!==null&&(v.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===yt&&vd(nt)===v.type)?(v=u(v,S.props),uu(v,S),v.return=A,v):(v=Fu(S.type,S.key,S.props,null,A.mode,N),uu(v,S),v.return=A,v)}function E(A,v,S,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Pc(S,A.mode,N),v.return=A,v):(v=u(v,S.children||[]),v.return=A,v)}function C(A,v,S,N,nt){return v===null||v.tag!==7?(v=ra(S,A.mode,N,nt),v.return=A,v):(v=u(v,S),v.return=A,v)}function k(A,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Fc(""+v,A.mode,S),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return S=Fu(v.type,v.key,v.props,null,A.mode,S),uu(S,v),S.return=A,S;case K:return v=Pc(v,A.mode,S),v.return=A,v;case yt:var N=v._init;return v=N(v._payload),k(A,v,S)}if(ut(v)||pt(v))return v=ra(v,A.mode,S,null),v.return=A,v;if(typeof v.then=="function")return k(A,mi(v),S);if(v.$$typeof===Q)return k(A,li(A,v),S);bi(A,v)}return null}function T(A,v,S,N){var nt=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return nt!==null?null:f(A,v,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return S.key===nt?p(A,v,S,N):null;case K:return S.key===nt?E(A,v,S,N):null;case yt:return nt=S._init,S=nt(S._payload),T(A,v,S,N)}if(ut(S)||pt(S))return nt!==null?null:C(A,v,S,N,null);if(typeof S.then=="function")return T(A,v,mi(S),N);if(S.$$typeof===Q)return T(A,v,li(A,S),N);bi(A,S)}return null}function D(A,v,S,N,nt){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return A=A.get(S)||null,f(v,A,""+N,nt);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case U:return A=A.get(N.key===null?S:N.key)||null,p(v,A,N,nt);case K:return A=A.get(N.key===null?S:N.key)||null,E(v,A,N,nt);case yt:var xt=N._init;return N=xt(N._payload),D(A,v,S,N,nt)}if(ut(N)||pt(N))return A=A.get(S)||null,C(v,A,N,nt,null);if(typeof N.then=="function")return D(A,v,S,mi(N),nt);if(N.$$typeof===Q)return D(A,v,S,li(v,N),nt);bi(v,N)}return null}function ft(A,v,S,N){for(var nt=null,xt=null,ct=v,ot=v=0,ce=null;ct!==null&&ot<S.length;ot++){ct.index>ot?(ce=ct,ct=null):ce=ct.sibling;var Dt=T(A,ct,S[ot],N);if(Dt===null){ct===null&&(ct=ce);break}t&&ct&&Dt.alternate===null&&e(A,ct),v=i(Dt,v,ot),xt===null?nt=Dt:xt.sibling=Dt,xt=Dt,ct=ce}if(ot===S.length)return l(A,ct),zt&&sa(A,ot),nt;if(ct===null){for(;ot<S.length;ot++)ct=k(A,S[ot],N),ct!==null&&(v=i(ct,v,ot),xt===null?nt=ct:xt.sibling=ct,xt=ct);return zt&&sa(A,ot),nt}for(ct=a(ct);ot<S.length;ot++)ce=D(ct,A,ot,S[ot],N),ce!==null&&(t&&ce.alternate!==null&&ct.delete(ce.key===null?ot:ce.key),v=i(ce,v,ot),xt===null?nt=ce:xt.sibling=ce,xt=ce);return t&&ct.forEach(function(Wl){return e(A,Wl)}),zt&&sa(A,ot),nt}function rt(A,v,S,N){if(S==null)throw Error(r(151));for(var nt=null,xt=null,ct=v,ot=v=0,ce=null,Dt=S.next();ct!==null&&!Dt.done;ot++,Dt=S.next()){ct.index>ot?(ce=ct,ct=null):ce=ct.sibling;var Wl=T(A,ct,Dt.value,N);if(Wl===null){ct===null&&(ct=ce);break}t&&ct&&Wl.alternate===null&&e(A,ct),v=i(Wl,v,ot),xt===null?nt=Wl:xt.sibling=Wl,xt=Wl,ct=ce}if(Dt.done)return l(A,ct),zt&&sa(A,ot),nt;if(ct===null){for(;!Dt.done;ot++,Dt=S.next())Dt=k(A,Dt.value,N),Dt!==null&&(v=i(Dt,v,ot),xt===null?nt=Dt:xt.sibling=Dt,xt=Dt);return zt&&sa(A,ot),nt}for(ct=a(ct);!Dt.done;ot++,Dt=S.next())Dt=D(ct,A,ot,Dt.value,N),Dt!==null&&(t&&Dt.alternate!==null&&ct.delete(Dt.key===null?ot:Dt.key),v=i(Dt,v,ot),xt===null?nt=Dt:xt.sibling=Dt,xt=Dt);return t&&ct.forEach(function(eg){return e(A,eg)}),zt&&sa(A,ot),nt}function kt(A,v,S,N){if(typeof S=="object"&&S!==null&&S.type===I&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case U:t:{for(var nt=S.key;v!==null;){if(v.key===nt){if(nt=S.type,nt===I){if(v.tag===7){l(A,v.sibling),N=u(v,S.props.children),N.return=A,A=N;break t}}else if(v.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===yt&&vd(nt)===v.type){l(A,v.sibling),N=u(v,S.props),uu(N,S),N.return=A,A=N;break t}l(A,v);break}else e(A,v);v=v.sibling}S.type===I?(N=ra(S.props.children,A.mode,N,S.key),N.return=A,A=N):(N=Fu(S.type,S.key,S.props,null,A.mode,N),uu(N,S),N.return=A,A=N)}return s(A);case K:t:{for(nt=S.key;v!==null;){if(v.key===nt)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){l(A,v.sibling),N=u(v,S.children||[]),N.return=A,A=N;break t}else{l(A,v);break}else e(A,v);v=v.sibling}N=Pc(S,A.mode,N),N.return=A,A=N}return s(A);case yt:return nt=S._init,S=nt(S._payload),kt(A,v,S,N)}if(ut(S))return ft(A,v,S,N);if(pt(S)){if(nt=pt(S),typeof nt!="function")throw Error(r(150));return S=nt.call(S),rt(A,v,S,N)}if(typeof S.then=="function")return kt(A,v,mi(S),N);if(S.$$typeof===Q)return kt(A,v,li(A,S),N);bi(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(l(A,v.sibling),N=u(v,S),N.return=A,A=N):(l(A,v),N=Fc(S,A.mode,N),N.return=A,A=N),s(A)):l(A,v)}return function(A,v,S,N){try{nu=0;var nt=kt(A,v,S,N);return en=null,nt}catch(ct){if(ct===Jn||ct===ni)throw ct;var xt=ze(29,ct,null,A.mode);return xt.lanes=N,xt.return=A,xt}finally{}}}var ln=yd(!0),xd=yd(!1),Le=_(null),Pe=null;function Bl(t){var e=t.alternate;B(le,le.current&1),B(Le,t),Pe===null&&(e===null||Ia.current!==null||e.memoizedState!==null)&&(Pe=t)}function Ad(t){if(t.tag===22){if(B(le,le.current),B(Le,t),Pe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Pe=t)}}else kl()}function kl(){B(le,le.current),B(Le,Le.current)}function gl(t){G(Le),Pe===t&&(Pe=null),G(le)}var le=_(0);function gi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||So(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Cr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:M({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Nr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=je(),u=Cl(a);u.payload=e,l!=null&&(u.callback=l),e=Nl(t,u,a),e!==null&&(Ce(e,t,a),In(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=je(),u=Cl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=Nl(t,u,a),e!==null&&(Ce(e,t,a),In(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=je(),a=Cl(l);a.tag=2,e!=null&&(a.callback=e),e=Nl(t,a,l),e!==null&&(Ce(e,t,l),In(e,t,l))}};function Sd(t,e,l,a,u,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,s):e.prototype&&e.prototype.isPureReactComponent?!Ln(l,a)||!Ln(u,i):!0}function Ed(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Nr.enqueueReplaceState(e,e.state,null)}function ga(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=M({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var vi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Td(t){vi(t)}function wd(t){console.error(t)}function Dd(t){vi(t)}function yi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function zd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _r(t,e,l){return l=Cl(l),l.tag=3,l.payload={element:null},l.callback=function(){yi(t,e)},l}function Rd(t){return t=Cl(t),t.tag=3,t}function Od(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){zd(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zd(e,l,a),typeof u!="function"&&(Yl===null?Yl=new Set([this]):Yl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function eb(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Zn(e,l,u,!0),l=Le.current,l!==null){switch(l.tag){case 13:return Pe===null?no():l.alternate===null&&Xt===0&&(Xt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===or?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),io(t,a,u)),!1;case 22:return l.flags|=65536,a===or?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),io(t,a,u)),!1}throw Error(r(435,l.tag))}return io(t,a,u),no(),!1}if(zt)return e=Le.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==lr&&(t=Error(r(422),{cause:a}),Xn(Ue(t,l)))):(a!==lr&&(e=Error(r(423),{cause:a}),Xn(Ue(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Ue(a,l),u=_r(t.stateNode,a,u),dr(t,u),Xt!==4&&(Xt=2)),!1;var i=Error(r(520),{cause:a});if(i=Ue(i,l),du===null?du=[i]:du.push(i),Xt!==4&&(Xt=2),e===null)return!0;a=Ue(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=_r(l.stateNode,a,t),dr(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Yl===null||!Yl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Rd(u),Od(u,t,l,a),dr(l,u),!1}l=l.return}while(l!==null);return!1}var Md=Error(r(461)),ue=!1;function se(t,e,l,a){e.child=t===null?xd(e,null,l,a):ln(e,t.child,l,a)}function jd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return pa(e),a=gr(t,e,l,s,i,u),f=vr(),t!==null&&!ue?(yr(t,e,u),vl(t,e,u)):(zt&&f&&tr(e),e.flags|=1,se(t,e,a,u),e.child)}function Cd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Ic(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Nd(t,e,i,a,u)):(t=Fu(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Yr(t,u)){var s=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ln,l(s,a)&&t.ref===e.ref)return vl(t,e,u)}return e.flags|=1,t=fl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Nd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(Ln(i,a)&&t.ref===e.ref)if(ue=!1,e.pendingProps=a=i,Yr(t,u))(t.flags&131072)!==0&&(ue=!0);else return e.lanes=t.lanes,vl(t,e,u)}return Br(t,e,l,a,u)}function _d(t,e,l){var a=e.pendingProps,u=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(u=e.child=t.child,i=0;u!==null;)i=i|u.lanes|u.childLanes,u=u.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Bd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ai(e,i!==null?i.cachePool:null),i!==null?Nf(e,i):pr(),Ad(e);else return e.lanes=e.childLanes=536870912,Bd(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(ai(e,i.cachePool),Nf(e,i),kl(),e.memoizedState=null):(t!==null&&ai(e,null),pr(),kl());return se(t,e,u,l),e.child}function Bd(t,e,l,a){var u=rr();return u=u===null?null:{parent:ee._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&ai(e,null),pr(),Ad(e),t!==null&&Zn(t,e,a,!0),null}function xi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Br(t,e,l,a,u){return pa(e),l=gr(t,e,l,a,void 0,u),a=vr(),t!==null&&!ue?(yr(t,e,u),vl(t,e,u)):(zt&&a&&tr(e),e.flags|=1,se(t,e,l,u),e.child)}function kd(t,e,l,a,u,i){return pa(e),e.updateQueue=null,l=Bf(e,a,l,u),_f(t),a=vr(),t!==null&&!ue?(yr(t,e,i),vl(t,e,i)):(zt&&a&&tr(e),e.flags|=1,se(t,e,l,i),e.child)}function Ud(t,e,l,a,u){if(pa(e),e.stateNode===null){var i=Za,s=l.contextType;typeof s=="object"&&s!==null&&(i=me(s)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Nr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},sr(e),s=l.contextType,i.context=typeof s=="object"&&s!==null?me(s):Za,i.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(Cr(e,l,s,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Nr.enqueueReplaceState(i,i.state,null),Pn(e,a,i,u),Fn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var f=e.memoizedProps,p=ga(l,f);i.props=p;var E=i.context,C=l.contextType;s=Za,typeof C=="object"&&C!==null&&(s=me(C));var k=l.getDerivedStateFromProps;C=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||E!==s)&&Ed(e,i,a,s),jl=!1;var T=e.memoizedState;i.state=T,Pn(e,a,i,u),Fn(),E=e.memoizedState,f||T!==E||jl?(typeof k=="function"&&(Cr(e,l,k,a),E=e.memoizedState),(p=jl||Sd(e,l,p,a,T,E,s))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),i.props=a,i.state=E,i.context=s,a=p):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,fr(t,e),s=e.memoizedProps,C=ga(l,s),i.props=C,k=e.pendingProps,T=i.context,E=l.contextType,p=Za,typeof E=="object"&&E!==null&&(p=me(E)),f=l.getDerivedStateFromProps,(E=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==k||T!==p)&&Ed(e,i,a,p),jl=!1,T=e.memoizedState,i.state=T,Pn(e,a,i,u),Fn();var D=e.memoizedState;s!==k||T!==D||jl||t!==null&&t.dependencies!==null&&ei(t.dependencies)?(typeof f=="function"&&(Cr(e,l,f,a),D=e.memoizedState),(C=jl||Sd(e,l,C,a,T,D,p)||t!==null&&t.dependencies!==null&&ei(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,D,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,D,p)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=D),i.props=a,i.state=D,i.context=p,a=C):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,xi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ln(e,t.child,null,u),e.child=ln(e,null,l,u)):se(t,e,l,u),e.memoizedState=i.state,t=e.child):t=vl(t,e,u),t}function Hd(t,e,l,a){return qn(),e.flags|=256,se(t,e,l,a),e.child}var kr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ur(t){return{baseLanes:t,cachePool:wf()}}function Hr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ye),t}function $d(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),s&&(u=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(zt){if(u?Bl(e):kl(),zt){var f=qt,p;if(p=f){t:{for(p=f,f=Fe;p.nodeType!==8;){if(!f){f=null;break t}if(p=Ke(p.nextSibling),p===null){f=null;break t}}f=p}f!==null?(e.memoizedState={dehydrated:f,treeContext:oa!==null?{id:dl,overflow:hl}:null,retryLane:536870912,hydrationErrors:null},p=ze(18,null,null,0),p.stateNode=f,p.return=e,e.child=p,ge=e,qt=null,p=!0):p=!1}p||da(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return So(f)?e.lanes=32:e.lanes=536870912,null;gl(e)}return f=a.children,a=a.fallback,u?(kl(),u=e.mode,f=Ai({mode:"hidden",children:f},u),a=ra(a,u,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,u=e.child,u.memoizedState=Ur(l),u.childLanes=Hr(t,s,l),e.memoizedState=kr,a):(Bl(e),$r(e,f))}if(p=t.memoizedState,p!==null&&(f=p.dehydrated,f!==null)){if(i)e.flags&256?(Bl(e),e.flags&=-257,e=Qr(t,e,l)):e.memoizedState!==null?(kl(),e.child=t.child,e.flags|=128,e=null):(kl(),u=a.fallback,f=e.mode,a=Ai({mode:"visible",children:a.children},f),u=ra(u,f,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,ln(e,t.child,null,l),a=e.child,a.memoizedState=Ur(l),a.childLanes=Hr(t,s,l),e.memoizedState=kr,e=u);else if(Bl(e),So(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var E=s.dgst;s=E,a=Error(r(419)),a.stack="",a.digest=s,Xn({value:a,source:null,stack:null}),e=Qr(t,e,l)}else if(ue||Zn(t,e,l,!1),s=(l&t.childLanes)!==0,ue||s){if(s=$t,s!==null&&(a=l&-l,a=(a&42)!==0?1:Sc(a),a=(a&(s.suspendedLanes|l))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,Xa(t,a),Ce(s,t,a),Md;f.data==="$?"||no(),e=Qr(t,e,l)}else f.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,qt=Ke(f.nextSibling),ge=e,zt=!0,fa=null,Fe=!1,t!==null&&($e[Qe++]=dl,$e[Qe++]=hl,$e[Qe++]=oa,dl=t.id,hl=t.overflow,oa=e),e=$r(e,a.children),e.flags|=4096);return e}return u?(kl(),u=a.fallback,f=e.mode,p=t.child,E=p.sibling,a=fl(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,E!==null?u=fl(E,u):(u=ra(u,f,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,f=t.child.memoizedState,f===null?f=Ur(l):(p=f.cachePool,p!==null?(E=ee._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=wf(),f={baseLanes:f.baseLanes|l,cachePool:p}),u.memoizedState=f,u.childLanes=Hr(t,s,l),e.memoizedState=kr,a):(Bl(e),l=t.child,t=l.sibling,l=fl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function $r(t,e){return e=Ai({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ai(t,e){return t=ze(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Qr(t,e,l){return ln(e,t.child,null,l),t=$r(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),nr(t.return,e,l)}function Lr(t,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u)}function Ld(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;if(se(t,e,a.children,l),a=le.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,l,e);else if(t.tag===19)Qd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(B(le,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&gi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),Lr(e,!1,u,l,i);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&gi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}Lr(e,!0,l,null,i);break;case"together":Lr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Ll|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Zn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=fl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=fl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Yr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ei(t)))}function lb(t,e,l){switch(e.tag){case 3:ht(e,e.stateNode.containerInfo),Ml(e,ee,t.memoizedState.cache),qn();break;case 27:case 5:dt(e);break;case 4:ht(e,e.stateNode.containerInfo);break;case 10:Ml(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Bl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?$d(t,e,l):(Bl(e),t=vl(t,e,l),t!==null?t.sibling:null);Bl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Zn(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Ld(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),B(le,le.current),a)break;return null;case 22:case 23:return e.lanes=0,_d(t,e,l);case 24:Ml(e,ee,t.memoizedState.cache)}return vl(t,e,l)}function Yd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ue=!0;else{if(!Yr(t,l)&&(e.flags&128)===0)return ue=!1,lb(t,e,l);ue=(t.flags&131072)!==0}else ue=!1,zt&&(e.flags&1048576)!==0&&vf(e,ti,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")Ic(a)?(t=ga(a,t),e.tag=1,e=Ud(null,e,a,t,l)):(e.tag=0,e=Br(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===tt){e.tag=11,e=jd(null,e,a,t,l);break t}else if(u===P){e.tag=14,e=Cd(null,e,a,t,l);break t}}throw e=Mt(a)||a,Error(r(306,e,""))}}return e;case 0:return Br(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=ga(a,e.pendingProps),Ud(t,e,a,u,l);case 3:t:{if(ht(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,fr(t,e),Pn(e,a,null,l);var s=e.memoizedState;if(a=s.cache,Ml(e,ee,a),a!==i.cache&&ur(e,[ee],l,!0),Fn(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Hd(t,e,a,l);break t}else if(a!==u){u=Ue(Error(r(424)),e),Xn(u),e=Hd(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=Ke(t.firstChild),ge=e,zt=!0,fa=null,Fe=!0,l=xd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(qn(),a===u){e=vl(t,e,l);break t}se(t,e,a,l)}e=e.child}return e;case 26:return xi(t,e),t===null?(l=Zh(e.type,null,e.pendingProps,null))?e.memoizedState=l:zt||(l=e.type,t=e.pendingProps,a=Bi(J.current).createElement(l),a[pe]=e,a[ye]=t,de(a,l,t),ne(a),e.stateNode=a):e.memoizedState=Zh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return dt(e),t===null&&zt&&(a=e.stateNode=Gh(e.type,e.pendingProps,J.current),ge=e,Fe=!0,u=qt,Xl(e.type)?(Eo=u,qt=Ke(a.firstChild)):qt=u),se(t,e,e.pendingProps.children,l),xi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&zt&&((u=a=qt)&&(a=Mb(a,e.type,e.pendingProps,Fe),a!==null?(e.stateNode=a,ge=e,qt=Ke(a.firstChild),Fe=!1,u=!0):u=!1),u||da(e)),dt(e),u=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,yo(u,i)?a=null:s!==null&&yo(u,s)&&(e.flags|=32),e.memoizedState!==null&&(u=gr(t,e,Km,null,null,l),Au._currentValue=u),xi(t,e),se(t,e,a,l),e.child;case 6:return t===null&&zt&&((t=l=qt)&&(l=jb(l,e.pendingProps,Fe),l!==null?(e.stateNode=l,ge=e,qt=null,t=!0):t=!1),t||da(e)),null;case 13:return $d(t,e,l);case 4:return ht(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ln(e,null,a,l):se(t,e,a,l),e.child;case 11:return jd(t,e,e.type,e.pendingProps,l);case 7:return se(t,e,e.pendingProps,l),e.child;case 8:return se(t,e,e.pendingProps.children,l),e.child;case 12:return se(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Ml(e,e.type,a.value),se(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,pa(e),u=me(u),a=a(u),e.flags|=1,se(t,e,a,l),e.child;case 14:return Cd(t,e,e.type,e.pendingProps,l);case 15:return Nd(t,e,e.type,e.pendingProps,l);case 19:return Ld(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=Ai(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=fl(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return _d(t,e,l);case 24:return pa(e),a=me(ee),t===null?(u=rr(),u===null&&(u=$t,i=ir(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},sr(e),Ml(e,ee,u)):((t.lanes&l)!==0&&(fr(t,e),Pn(e,null,null,l),Fn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Ml(e,ee,a)):(a=i.cache,Ml(e,ee,a),a!==u.cache&&ur(e,[ee],l,!0))),se(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function yl(t){t.flags|=4}function Gd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ih(e)){if(e=Le.current,e!==null&&((Tt&4194048)===Tt?Pe!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||e!==Pe))throw Wn=or,Df;t.flags|=8192}}function Si(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?xs():536870912,t.lanes|=e,cn|=e)}function iu(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function ab(t,e,l){var a=e.pendingProps;switch(er(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return Gt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ml(ee),$(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Gn(e)?yl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Af())),Gt(e),null;case 26:return l=e.memoizedState,t===null?(yl(e),l!==null?(Gt(e),Gd(e,l)):(Gt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(yl(e),Gt(e),Gd(e,l)):(Gt(e),e.flags&=-16777217):(t.memoizedProps!==a&&yl(e),Gt(e),e.flags&=-16777217),null;case 27:mt(e),l=J.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&yl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Gt(e),null}t=Y.current,Gn(e)?yf(e):(t=Gh(u,a,l),e.stateNode=t,yl(e))}return Gt(e),null;case 5:if(mt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&yl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Gt(e),null}if(t=Y.current,Gn(e))yf(e);else{switch(u=Bi(J.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[pe]=e,t[ye]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(de(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&yl(e)}}return Gt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&yl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=J.current,Gn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=ge,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[pe]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||kh(t.nodeValue,l)),t||da(e)}else t=Bi(t).createTextNode(a),t[pe]=e,e.stateNode=t}return Gt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Gn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[pe]=e}else qn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Gt(e),u=!1}else u=Af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(gl(e),e):(gl(e),null)}if(gl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Si(e,e.updateQueue),Gt(e),null;case 4:return $(),t===null&&po(e.stateNode.containerInfo),Gt(e),null;case 10:return ml(e.type),Gt(e),null;case 19:if(G(le),u=e.memoizedState,u===null)return Gt(e),null;if(a=(e.flags&128)!==0,i=u.rendering,i===null)if(a)iu(u,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=gi(t),i!==null){for(e.flags|=128,iu(u,!1),t=i.updateQueue,e.updateQueue=t,Si(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)gf(l,t),l=l.sibling;return B(le,le.current&1|2),e.child}t=t.sibling}u.tail!==null&&It()>wi&&(e.flags|=128,a=!0,iu(u,!1),e.lanes=4194304)}else{if(!a)if(t=gi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Si(e,t),iu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!zt)return Gt(e),null}else 2*It()-u.renderingStartTime>wi&&l!==536870912&&(e.flags|=128,a=!0,iu(u,!1),e.lanes=4194304);u.isBackwards?(i.sibling=e.child,e.child=i):(t=u.last,t!==null?t.sibling=i:e.child=i,u.last=i)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=It(),e.sibling=null,t=le.current,B(le,a?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return gl(e),mr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),l=e.updateQueue,l!==null&&Si(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&G(ma),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ml(ee),Gt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function nb(t,e){switch(er(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ml(ee),$(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mt(e),null;case 13:if(gl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));qn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(le),null;case 4:return $(),null;case 10:return ml(e.type),null;case 22:case 23:return gl(e),mr(),t!==null&&G(ma),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ml(ee),null;case 25:return null;default:return null}}function qd(t,e){switch(er(e),e.tag){case 3:ml(ee),$();break;case 26:case 27:case 5:mt(e);break;case 4:$();break;case 13:gl(e);break;case 19:G(le);break;case 10:ml(e.type);break;case 22:case 23:gl(e),mr(),t!==null&&G(ma);break;case 24:ml(ee)}}function cu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,s=l.inst;a=i(),s.destroy=a}l=l.next}while(l!==u)}}catch(f){Ut(e,e.return,f)}}function Ul(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,u=e;var p=l,E=f;try{E()}catch(C){Ut(u,p,C)}}}a=a.next}while(a!==i)}}catch(C){Ut(e,e.return,C)}}function Xd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Cf(e,l)}catch(a){Ut(t,t.return,a)}}}function Zd(t,e,l){l.props=ga(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ut(t,e,a)}}function ru(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Ut(t,e,u)}}function tl(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Ut(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Ut(t,e,u)}else l.current=null}function Vd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Ut(t,t.return,u)}}function Gr(t,e,l){try{var a=t.stateNode;wb(a,t.type,l,e),a[ye]=e}catch(u){Ut(t,t.return,u)}}function Kd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xl(t.type)||t.tag===4}function qr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=_i));else if(a!==4&&(a===27&&Xl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Xr(t,e,l),t=t.sibling;t!==null;)Xr(t,e,l),t=t.sibling}function Ei(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Xl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ei(t,e,l),t=t.sibling;t!==null;)Ei(t,e,l),t=t.sibling}function Jd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);de(e,a,l),e[pe]=t,e[ye]=l}catch(i){Ut(t,t.return,i)}}var xl=!1,Wt=!1,Zr=!1,Wd=typeof WeakSet=="function"?WeakSet:Set,ie=null;function ub(t,e){if(t=t.containerInfo,go=Li,t=cf(t),qc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var s=0,f=-1,p=-1,E=0,C=0,k=t,T=null;e:for(;;){for(var D;k!==l||u!==0&&k.nodeType!==3||(f=s+u),k!==i||a!==0&&k.nodeType!==3||(p=s+a),k.nodeType===3&&(s+=k.nodeValue.length),(D=k.firstChild)!==null;)T=k,k=D;for(;;){if(k===t)break e;if(T===l&&++E===u&&(f=s),T===i&&++C===a&&(p=s),(D=k.nextSibling)!==null)break;k=T,T=k.parentNode}k=D}l=f===-1||p===-1?null:{start:f,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;for(vo={focusedElem:t,selectionRange:l},Li=!1,ie=e;ie!==null;)if(e=ie,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,ie=t;else for(;ie!==null;){switch(e=ie,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var ft=ga(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ft,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Ut(l,l.return,rt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Ao(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ao(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ie=t;break}ie=e.return}}function Id(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Hl(t,l),a&4&&cu(5,l);break;case 1:if(Hl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){Ut(l,l.return,s)}else{var u=ga(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ut(l,l.return,s)}}a&64&&Xd(l),a&512&&ru(l,l.return);break;case 3:if(Hl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Cf(t,e)}catch(s){Ut(l,l.return,s)}}break;case 27:e===null&&a&4&&Jd(l);case 26:case 5:Hl(t,l),e===null&&a&4&&Vd(l),a&512&&ru(l,l.return);break;case 12:Hl(t,l);break;case 13:Hl(t,l),a&4&&th(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=pb.bind(null,l),Cb(t,l))));break;case 22:if(a=l.memoizedState!==null||xl,!a){e=e!==null&&e.memoizedState!==null||Wt,u=xl;var i=Wt;xl=a,(Wt=e)&&!i?$l(t,l,(l.subtreeFlags&8772)!==0):Hl(t,l),xl=u,Wt=i}break;case 30:break;default:Hl(t,l)}}function Fd(t){var e=t.alternate;e!==null&&(t.alternate=null,Fd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&wc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,Se=!1;function Al(t,e,l){for(l=l.child;l!==null;)Pd(t,e,l),l=l.sibling}function Pd(t,e,l){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(On,l)}catch{}switch(l.tag){case 26:Wt||tl(l,e),Al(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Wt||tl(l,e);var a=Yt,u=Se;Xl(l.type)&&(Yt=l.stateNode,Se=!1),Al(t,e,l),gu(l.stateNode),Yt=a,Se=u;break;case 5:Wt||tl(l,e);case 6:if(a=Yt,u=Se,Yt=null,Al(t,e,l),Yt=a,Se=u,Yt!==null)if(Se)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(l.stateNode)}catch(i){Ut(l,e,i)}else try{Yt.removeChild(l.stateNode)}catch(i){Ut(l,e,i)}break;case 18:Yt!==null&&(Se?(t=Yt,Lh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),wu(t)):Lh(Yt,l.stateNode));break;case 4:a=Yt,u=Se,Yt=l.stateNode.containerInfo,Se=!0,Al(t,e,l),Yt=a,Se=u;break;case 0:case 11:case 14:case 15:Wt||Ul(2,l,e),Wt||Ul(4,l,e),Al(t,e,l);break;case 1:Wt||(tl(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Zd(l,e,a)),Al(t,e,l);break;case 21:Al(t,e,l);break;case 22:Wt=(a=Wt)||l.memoizedState!==null,Al(t,e,l),Wt=a;break;default:Al(t,e,l)}}function th(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wu(t)}catch(l){Ut(e,e.return,l)}}function ib(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Wd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Wd),e;default:throw Error(r(435,t.tag))}}function Vr(t,e){var l=ib(t);e.forEach(function(a){var u=mb.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function Re(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,s=e,f=s;t:for(;f!==null;){switch(f.tag){case 27:if(Xl(f.type)){Yt=f.stateNode,Se=!1;break t}break;case 5:Yt=f.stateNode,Se=!1;break t;case 3:case 4:Yt=f.stateNode.containerInfo,Se=!0;break t}f=f.return}if(Yt===null)throw Error(r(160));Pd(i,s,u),Yt=null,Se=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)eh(e,t),e=e.sibling}var Ve=null;function eh(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Re(e,t),Oe(t),a&4&&(Ul(3,t,t.return),cu(3,t),Ul(5,t,t.return));break;case 1:Re(e,t),Oe(t),a&512&&(Wt||l===null||tl(l,l.return)),a&64&&xl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Ve;if(Re(e,t),Oe(t),a&512&&(Wt||l===null||tl(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Cn]||i[pe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),de(i,a,l),i[pe]=t,ne(i),a=i;break t;case"link":var s=Jh("link","href",u).get(a+(l.href||""));if(s){for(var f=0;f<s.length;f++)if(i=s[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(f,1);break e}}i=u.createElement(a),de(i,a,l),u.head.appendChild(i);break;case"meta":if(s=Jh("meta","content",u).get(a+(l.content||""))){for(f=0;f<s.length;f++)if(i=s[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(f,1);break e}}i=u.createElement(a),de(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[pe]=t,ne(i),a=i}t.stateNode=a}else Wh(u,t.type,t.stateNode);else t.stateNode=Kh(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Wh(u,t.type,t.stateNode):Kh(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Gr(t,t.memoizedProps,l.memoizedProps)}break;case 27:Re(e,t),Oe(t),a&512&&(Wt||l===null||tl(l,l.return)),l!==null&&a&4&&Gr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Re(e,t),Oe(t),a&512&&(Wt||l===null||tl(l,l.return)),t.flags&32){u=t.stateNode;try{Ha(u,"")}catch(D){Ut(t,t.return,D)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Gr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Zr=!0);break;case 6:if(Re(e,t),Oe(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(D){Ut(t,t.return,D)}}break;case 3:if(Hi=null,u=Ve,Ve=ki(e.containerInfo),Re(e,t),Ve=u,Oe(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{wu(e.containerInfo)}catch(D){Ut(t,t.return,D)}Zr&&(Zr=!1,lh(t));break;case 4:a=Ve,Ve=ki(t.stateNode.containerInfo),Re(e,t),Oe(t),Ve=a;break;case 12:Re(e,t),Oe(t);break;case 13:Re(e,t),Oe(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Pr=It()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Vr(t,a)));break;case 22:u=t.memoizedState!==null;var p=l!==null&&l.memoizedState!==null,E=xl,C=Wt;if(xl=E||u,Wt=C||p,Re(e,t),Wt=C,xl=E,Oe(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||p||xl||Wt||va(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){p=l=e;try{if(i=p.stateNode,u)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=p.stateNode;var k=p.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null;f.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(D){Ut(p,p.return,D)}}}else if(e.tag===6){if(l===null){p=e;try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(D){Ut(p,p.return,D)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Vr(t,l))));break;case 19:Re(e,t),Oe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Vr(t,a)));break;case 30:break;case 21:break;default:Re(e,t),Oe(t)}}function Oe(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Kd(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=qr(t);Ei(t,i,u);break;case 5:var s=l.stateNode;l.flags&32&&(Ha(s,""),l.flags&=-33);var f=qr(t);Ei(t,f,s);break;case 3:case 4:var p=l.stateNode.containerInfo,E=qr(t);Xr(t,E,p);break;default:throw Error(r(161))}}catch(C){Ut(t,t.return,C)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;lh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Hl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Id(t,e.alternate,e),e=e.sibling}function va(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ul(4,e,e.return),va(e);break;case 1:tl(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Zd(e,e.return,l),va(e);break;case 27:gu(e.stateNode);case 26:case 5:tl(e,e.return),va(e);break;case 22:e.memoizedState===null&&va(e);break;case 30:va(e);break;default:va(e)}t=t.sibling}}function $l(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,s=i.flags;switch(i.tag){case 0:case 11:case 15:$l(u,i,l),cu(4,i);break;case 1:if($l(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(E){Ut(a,a.return,E)}if(a=i,u=a.updateQueue,u!==null){var f=a.stateNode;try{var p=u.shared.hiddenCallbacks;if(p!==null)for(u.shared.hiddenCallbacks=null,u=0;u<p.length;u++)jf(p[u],f)}catch(E){Ut(a,a.return,E)}}l&&s&64&&Xd(i),ru(i,i.return);break;case 27:Jd(i);case 26:case 5:$l(u,i,l),l&&a===null&&s&4&&Vd(i),ru(i,i.return);break;case 12:$l(u,i,l);break;case 13:$l(u,i,l),l&&s&4&&th(u,i);break;case 22:i.memoizedState===null&&$l(u,i,l),ru(i,i.return);break;case 30:break;default:$l(u,i,l)}e=e.sibling}}function Kr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Vn(l))}function Jr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Vn(t))}function el(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ah(t,e,l,a),e=e.sibling}function ah(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:el(t,e,l,a),u&2048&&cu(9,e);break;case 1:el(t,e,l,a);break;case 3:el(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Vn(t)));break;case 12:if(u&2048){el(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,s=i.id,f=i.onPostCommit;typeof f=="function"&&f(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){Ut(e,e.return,p)}}else el(t,e,l,a);break;case 13:el(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,s=e.alternate,e.memoizedState!==null?i._visibility&2?el(t,e,l,a):ou(t,e):i._visibility&2?el(t,e,l,a):(i._visibility|=2,an(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&Kr(s,e);break;case 24:el(t,e,l,a),u&2048&&Jr(e.alternate,e);break;default:el(t,e,l,a)}}function an(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,s=e,f=l,p=a,E=s.flags;switch(s.tag){case 0:case 11:case 15:an(i,s,f,p,u),cu(8,s);break;case 23:break;case 22:var C=s.stateNode;s.memoizedState!==null?C._visibility&2?an(i,s,f,p,u):ou(i,s):(C._visibility|=2,an(i,s,f,p,u)),u&&E&2048&&Kr(s.alternate,s);break;case 24:an(i,s,f,p,u),u&&E&2048&&Jr(s.alternate,s);break;default:an(i,s,f,p,u)}e=e.sibling}}function ou(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:ou(l,a),u&2048&&Kr(a.alternate,a);break;case 24:ou(l,a),u&2048&&Jr(a.alternate,a);break;default:ou(l,a)}e=e.sibling}}var su=8192;function nn(t){if(t.subtreeFlags&su)for(t=t.child;t!==null;)nh(t),t=t.sibling}function nh(t){switch(t.tag){case 26:nn(t),t.flags&su&&t.memoizedState!==null&&Xb(Ve,t.memoizedState,t.memoizedProps);break;case 5:nn(t);break;case 3:case 4:var e=Ve;Ve=ki(t.stateNode.containerInfo),nn(t),Ve=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=su,su=16777216,nn(t),su=e):nn(t));break;default:nn(t)}}function uh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function fu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ie=a,ch(a,t)}uh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ih(t),t=t.sibling}function ih(t){switch(t.tag){case 0:case 11:case 15:fu(t),t.flags&2048&&Ul(9,t,t.return);break;case 3:fu(t);break;case 12:fu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ti(t)):fu(t);break;default:fu(t)}}function Ti(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ie=a,ch(a,t)}uh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ul(8,e,e.return),Ti(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Ti(e));break;default:Ti(e)}t=t.sibling}}function ch(t,e){for(;ie!==null;){var l=ie;switch(l.tag){case 0:case 11:case 15:Ul(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Vn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ie=a;else t:for(l=t;ie!==null;){a=ie;var u=a.sibling,i=a.return;if(Fd(a),a===l){ie=null;break t}if(u!==null){u.return=i,ie=u;break t}ie=i}}}var cb={getCacheForType:function(t){var e=me(ee),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},rb=typeof WeakMap=="function"?WeakMap:Map,jt=0,$t=null,At=null,Tt=0,Ct=0,Me=null,Ql=!1,un=!1,Wr=!1,Sl=0,Xt=0,Ll=0,ya=0,Ir=0,Ye=0,cn=0,du=null,Ee=null,Fr=!1,Pr=0,wi=1/0,Di=null,Yl=null,fe=0,Gl=null,rn=null,on=0,to=0,eo=null,rh=null,hu=0,lo=null;function je(){if((jt&2)!==0&&Tt!==0)return Tt&-Tt;if(O.T!==null){var t=Ja;return t!==0?t:oo()}return Es()}function oh(){Ye===0&&(Ye=(Tt&536870912)===0||zt?ys():536870912);var t=Le.current;return t!==null&&(t.flags|=32),Ye}function Ce(t,e,l){(t===$t&&(Ct===2||Ct===9)||t.cancelPendingCommit!==null)&&(sn(t,0),ql(t,Tt,Ye,!1)),jn(t,l),((jt&2)===0||t!==$t)&&(t===$t&&((jt&2)===0&&(ya|=l),Xt===4&&ql(t,Tt,Ye,!1)),ll(t))}function sh(t,e,l){if((jt&6)!==0)throw Error(r(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Mn(t,e),u=a?fb(t,e):uo(t,e,!0),i=a;do{if(u===0){un&&!a&&ql(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!ob(l)){u=uo(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var f=t;u=du;var p=f.current.memoizedState.isDehydrated;if(p&&(sn(f,s).flags|=256),s=uo(f,s,!1),s!==2){if(Wr&&!p){f.errorRecoveryDisabledLanes|=i,ya|=i,u=4;break t}i=Ee,Ee=u,i!==null&&(Ee===null?Ee=i:Ee.push.apply(Ee,i))}u=s}if(i=!1,u!==2)continue}}if(u===1){sn(t,0),ql(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:ql(a,e,Ye,!Ql);break t;case 2:Ee=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Pr+300-It(),10<u)){if(ql(a,e,Ye,!Ql),Uu(a,0,!0)!==0)break t;a.timeoutHandle=$h(fh.bind(null,a,l,Ee,Di,Fr,e,Ye,ya,cn,Ql,i,2,-0,0),u);break t}fh(a,l,Ee,Di,Fr,e,Ye,ya,cn,Ql,i,0,-0,0)}}break}while(!0);ll(t)}function fh(t,e,l,a,u,i,s,f,p,E,C,k,T,D){if(t.timeoutHandle=-1,k=e.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(xu={stylesheets:null,count:0,unsuspend:qb},nh(e),k=Zb(),k!==null)){t.cancelPendingCommit=k(vh.bind(null,t,e,i,l,a,u,s,f,p,C,1,T,D)),ql(t,i,s,!E);return}vh(t,e,i,l,a,u,s,f,p)}function ob(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!De(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ql(t,e,l,a){e&=~Ir,e&=~ya,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-we(u),s=1<<i;a[i]=-1,u&=~s}l!==0&&As(t,l,e)}function zi(){return(jt&6)===0?(pu(0),!1):!0}function ao(){if(At!==null){if(Ct===0)var t=At.return;else t=At,pl=ha=null,xr(t),en=null,nu=0,t=At;for(;t!==null;)qd(t.alternate,t),t=t.return;At=null}}function sn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,zb(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),ao(),$t=t,At=l=fl(t.current,null),Tt=e,Ct=0,Me=null,Ql=!1,un=Mn(t,e),Wr=!1,cn=Ye=Ir=ya=Ll=Xt=0,Ee=du=null,Fr=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-we(a),i=1<<u;e|=t[u],a&=~i}return Sl=e,Ju(),l}function dh(t,e){vt=null,O.H=pi,e===Jn||e===ni?(e=Of(),Ct=3):e===Df?(e=Of(),Ct=4):Ct=e===Md?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Me=e,At===null&&(Xt=1,yi(t,Ue(e,t.current)))}function hh(){var t=O.H;return O.H=pi,t===null?pi:t}function ph(){var t=O.A;return O.A=cb,t}function no(){Xt=4,Ql||(Tt&4194048)!==Tt&&Le.current!==null||(un=!0),(Ll&134217727)===0&&(ya&134217727)===0||$t===null||ql($t,Tt,Ye,!1)}function uo(t,e,l){var a=jt;jt|=2;var u=hh(),i=ph();($t!==t||Tt!==e)&&(Di=null,sn(t,e)),e=!1;var s=Xt;t:do try{if(Ct!==0&&At!==null){var f=At,p=Me;switch(Ct){case 8:ao(),s=6;break t;case 3:case 2:case 9:case 6:Le.current===null&&(e=!0);var E=Ct;if(Ct=0,Me=null,fn(t,f,p,E),l&&un){s=0;break t}break;default:E=Ct,Ct=0,Me=null,fn(t,f,p,E)}}sb(),s=Xt;break}catch(C){dh(t,C)}while(!0);return e&&t.shellSuspendCounter++,pl=ha=null,jt=a,O.H=u,O.A=i,At===null&&($t=null,Tt=0,Ju()),s}function sb(){for(;At!==null;)mh(At)}function fb(t,e){var l=jt;jt|=2;var a=hh(),u=ph();$t!==t||Tt!==e?(Di=null,wi=It()+500,sn(t,e)):un=Mn(t,e);t:do try{if(Ct!==0&&At!==null){e=At;var i=Me;e:switch(Ct){case 1:Ct=0,Me=null,fn(t,e,i,1);break;case 2:case 9:if(zf(i)){Ct=0,Me=null,bh(e);break}e=function(){Ct!==2&&Ct!==9||$t!==t||(Ct=7),ll(t)},i.then(e,e);break t;case 3:Ct=7;break t;case 4:Ct=5;break t;case 7:zf(i)?(Ct=0,Me=null,bh(e)):(Ct=0,Me=null,fn(t,e,i,7));break;case 5:var s=null;switch(At.tag){case 26:s=At.memoizedState;case 5:case 27:var f=At;if(!s||Ih(s)){Ct=0,Me=null;var p=f.sibling;if(p!==null)At=p;else{var E=f.return;E!==null?(At=E,Ri(E)):At=null}break e}}Ct=0,Me=null,fn(t,e,i,5);break;case 6:Ct=0,Me=null,fn(t,e,i,6);break;case 8:ao(),Xt=6;break t;default:throw Error(r(462))}}db();break}catch(C){dh(t,C)}while(!0);return pl=ha=null,O.H=a,O.A=u,jt=l,At!==null?0:($t=null,Tt=0,Ju(),Xt)}function db(){for(;At!==null&&!Kt();)mh(At)}function mh(t){var e=Yd(t.alternate,t,Sl);t.memoizedProps=t.pendingProps,e===null?Ri(t):At=e}function bh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=kd(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=kd(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:xr(e);default:qd(l,e),e=At=gf(e,Sl),e=Yd(l,e,Sl)}t.memoizedProps=t.pendingProps,e===null?Ri(t):At=e}function fn(t,e,l,a){pl=ha=null,xr(e),en=null,nu=0;var u=e.return;try{if(eb(t,u,e,l,Tt)){Xt=1,yi(t,Ue(l,t.current)),At=null;return}}catch(i){if(u!==null)throw At=u,i;Xt=1,yi(t,Ue(l,t.current)),At=null;return}e.flags&32768?(zt||a===1?t=!0:un||(Tt&536870912)!==0?t=!1:(Ql=t=!0,(a===2||a===9||a===3||a===6)&&(a=Le.current,a!==null&&a.tag===13&&(a.flags|=16384))),gh(e,t)):Ri(e)}function Ri(t){var e=t;do{if((e.flags&32768)!==0){gh(e,Ql);return}t=e.return;var l=ab(e.alternate,e,Sl);if(l!==null){At=l;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Xt===0&&(Xt=5)}function gh(t,e){do{var l=nb(t.alternate,t);if(l!==null){l.flags&=32767,At=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=l}while(t!==null);Xt=6,At=null}function vh(t,e,l,a,u,i,s,f,p){t.cancelPendingCommit=null;do Oi();while(fe!==0);if((jt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Jc,qp(t,l,i,s,f,p),t===$t&&(At=$t=null,Tt=0),rn=e,Gl=t,on=l,to=i,eo=u,rh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bb(Dl,function(){return Eh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,u=L.p,L.p=2,s=jt,jt|=4;try{ub(t,e,l)}finally{jt=s,L.p=u,O.T=a}}fe=1,yh(),xh(),Ah()}}function yh(){if(fe===1){fe=0;var t=Gl,e=rn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var a=L.p;L.p=2;var u=jt;jt|=4;try{eh(e,t);var i=vo,s=cf(t.containerInfo),f=i.focusedElem,p=i.selectionRange;if(s!==f&&f&&f.ownerDocument&&uf(f.ownerDocument.documentElement,f)){if(p!==null&&qc(f)){var E=p.start,C=p.end;if(C===void 0&&(C=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(C,f.value.length);else{var k=f.ownerDocument||document,T=k&&k.defaultView||window;if(T.getSelection){var D=T.getSelection(),ft=f.textContent.length,rt=Math.min(p.start,ft),kt=p.end===void 0?rt:Math.min(p.end,ft);!D.extend&&rt>kt&&(s=kt,kt=rt,rt=s);var A=nf(f,rt),v=nf(f,kt);if(A&&v&&(D.rangeCount!==1||D.anchorNode!==A.node||D.anchorOffset!==A.offset||D.focusNode!==v.node||D.focusOffset!==v.offset)){var S=k.createRange();S.setStart(A.node,A.offset),D.removeAllRanges(),rt>kt?(D.addRange(S),D.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),D.addRange(S))}}}}for(k=[],D=f;D=D.parentNode;)D.nodeType===1&&k.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<k.length;f++){var N=k[f];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Li=!!go,vo=go=null}finally{jt=u,L.p=a,O.T=l}}t.current=e,fe=2}}function xh(){if(fe===2){fe=0;var t=Gl,e=rn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var a=L.p;L.p=2;var u=jt;jt|=4;try{Id(t,e.alternate,e)}finally{jt=u,L.p=a,O.T=l}}fe=3}}function Ah(){if(fe===4||fe===3){fe=0,ve();var t=Gl,e=rn,l=on,a=rh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?fe=5:(fe=0,rn=Gl=null,Sh(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Yl=null),Ec(l),e=e.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(On,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=O.T,u=L.p,L.p=2,O.T=null;try{for(var i=t.onRecoverableError,s=0;s<a.length;s++){var f=a[s];i(f.value,{componentStack:f.stack})}}finally{O.T=e,L.p=u}}(on&3)!==0&&Oi(),ll(t),u=t.pendingLanes,(l&4194090)!==0&&(u&42)!==0?t===lo?hu++:(hu=0,lo=t):hu=0,pu(0)}}function Sh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Vn(e)))}function Oi(t){return yh(),xh(),Ah(),Eh()}function Eh(){if(fe!==5)return!1;var t=Gl,e=to;to=0;var l=Ec(on),a=O.T,u=L.p;try{L.p=32>l?32:l,O.T=null,l=eo,eo=null;var i=Gl,s=on;if(fe=0,rn=Gl=null,on=0,(jt&6)!==0)throw Error(r(331));var f=jt;if(jt|=4,ih(i.current),ah(i,i.current,s,l),jt=f,pu(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(On,i)}catch{}return!0}finally{L.p=u,O.T=a,Sh(t,e)}}function Th(t,e,l){e=Ue(l,e),e=_r(t.stateNode,e,2),t=Nl(t,e,2),t!==null&&(jn(t,2),ll(t))}function Ut(t,e,l){if(t.tag===3)Th(t,t,l);else for(;e!==null;){if(e.tag===3){Th(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Yl===null||!Yl.has(a))){t=Ue(l,t),l=Rd(2),a=Nl(e,l,2),a!==null&&(Od(l,a,e,t),jn(a,2),ll(a));break}}e=e.return}}function io(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new rb;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Wr=!0,u.add(l),t=hb.bind(null,t,e,l),e.then(t,t))}function hb(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,$t===t&&(Tt&l)===l&&(Xt===4||Xt===3&&(Tt&62914560)===Tt&&300>It()-Pr?(jt&2)===0&&sn(t,0):Ir|=l,cn===Tt&&(cn=0)),ll(t)}function wh(t,e){e===0&&(e=xs()),t=Xa(t,e),t!==null&&(jn(t,e),ll(t))}function pb(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),wh(t,l)}function mb(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),wh(t,l)}function bb(t,e){return Nt(t,e)}var Mi=null,dn=null,co=!1,ji=!1,ro=!1,xa=0;function ll(t){t!==dn&&t.next===null&&(dn===null?Mi=dn=t:dn=dn.next=t),ji=!0,co||(co=!0,vb())}function pu(t,e){if(!ro&&ji){ro=!0;do for(var l=!1,a=Mi;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var s=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-we(42|t)+1)-1,i&=u&~(s&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Oh(a,i))}else i=Tt,i=Uu(a,a===$t?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Mn(a,i)||(l=!0,Oh(a,i));a=a.next}while(l);ro=!1}}function gb(){Dh()}function Dh(){ji=co=!1;var t=0;xa!==0&&(Db()&&(t=xa),xa=0);for(var e=It(),l=null,a=Mi;a!==null;){var u=a.next,i=zh(a,e);i===0?(a.next=null,l===null?Mi=u:l.next=u,u===null&&(dn=l)):(l=a,(t!==0||(i&3)!==0)&&(ji=!0)),a=u}pu(t)}function zh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-we(i),f=1<<s,p=u[s];p===-1?((f&l)===0||(f&a)!==0)&&(u[s]=Gp(f,e)):p<=e&&(t.expiredLanes|=f),i&=~f}if(e=$t,l=Tt,l=Uu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Ct===2||Ct===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vt(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Mn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Vt(a),Ec(l)){case 2:case 8:l=Ma;break;case 32:l=Dl;break;case 268435456:l=Rn;break;default:l=Dl}return a=Rh.bind(null,t),l=Nt(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Vt(a),t.callbackPriority=2,t.callbackNode=null,2}function Rh(t,e){if(fe!==0&&fe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Oi()&&t.callbackNode!==l)return null;var a=Tt;return a=Uu(t,t===$t?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(sh(t,a,e),zh(t,It()),t.callbackNode!=null&&t.callbackNode===l?Rh.bind(null,t):null)}function Oh(t,e){if(Oi())return null;sh(t,e,!0)}function vb(){Rb(function(){(jt&6)!==0?Nt(Xe,gb):Dh()})}function oo(){return xa===0&&(xa=ys()),xa}function Mh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yu(""+t)}function jh(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function yb(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=Mh((u[ye]||null).action),s=a.submitter;s&&(e=(e=s[ye]||null)?Mh(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var f=new Zu("action","action",null,a,u);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xa!==0){var p=s?jh(u,s):new FormData(u);Or(l,{pending:!0,data:p,method:u.method,action:i},null,p)}}else typeof i=="function"&&(f.preventDefault(),p=s?jh(u,s):new FormData(u),Or(l,{pending:!0,data:p,method:u.method,action:i},i,p))},currentTarget:u}]})}}for(var so=0;so<Kc.length;so++){var fo=Kc[so],xb=fo.toLowerCase(),Ab=fo[0].toUpperCase()+fo.slice(1);Ze(xb,"on"+Ab)}Ze(sf,"onAnimationEnd"),Ze(ff,"onAnimationIteration"),Ze(df,"onAnimationStart"),Ze("dblclick","onDoubleClick"),Ze("focusin","onFocus"),Ze("focusout","onBlur"),Ze(Hm,"onTransitionRun"),Ze($m,"onTransitionStart"),Ze(Qm,"onTransitionCancel"),Ze(hf,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),na("onBeforeInput",["compositionend","keypress","textInput","paste"]),na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function Ch(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var s=a.length-1;0<=s;s--){var f=a[s],p=f.instance,E=f.currentTarget;if(f=f.listener,p!==i&&u.isPropagationStopped())break t;i=f,u.currentTarget=E;try{i(u)}catch(C){vi(C)}u.currentTarget=null,i=p}else for(s=0;s<a.length;s++){if(f=a[s],p=f.instance,E=f.currentTarget,f=f.listener,p!==i&&u.isPropagationStopped())break t;i=f,u.currentTarget=E;try{i(u)}catch(C){vi(C)}u.currentTarget=null,i=p}}}}function St(t,e){var l=e[Tc];l===void 0&&(l=e[Tc]=new Set);var a=t+"__bubble";l.has(a)||(Nh(e,t,2,!1),l.add(a))}function ho(t,e,l){var a=0;e&&(a|=4),Nh(l,t,a,e)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Ci]){t[Ci]=!0,ws.forEach(function(l){l!=="selectionchange"&&(Sb.has(l)||ho(l,!1,t),ho(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ci]||(e[Ci]=!0,ho("selectionchange",!1,e))}}function Nh(t,e,l,a){switch(a0(e)){case 2:var u=Jb;break;case 8:u=Wb;break;default:u=Ro}l=u.bind(null,e,l,t),u=void 0,!Bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function mo(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===u)break;if(s===4)for(s=a.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===u)return;s=s.return}for(;f!==null;){if(s=Ca(f),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){a=i=s;continue t}f=f.parentNode}}a=a.return}$s(function(){var E=i,C=Nc(l),k=[];t:{var T=pf.get(t);if(T!==void 0){var D=Zu,ft=t;switch(t){case"keypress":if(qu(l)===0)break t;case"keydown":case"keyup":D=bm;break;case"focusin":ft="focus",D=$c;break;case"focusout":ft="blur",D=$c;break;case"beforeblur":case"afterblur":D=$c;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=ym;break;case sf:case ff:case df:D=cm;break;case hf:D=Am;break;case"scroll":case"scrollend":D=lm;break;case"wheel":D=Em;break;case"copy":case"cut":case"paste":D=om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=qs;break;case"toggle":case"beforetoggle":D=wm}var rt=(e&4)!==0,kt=!rt&&(t==="scroll"||t==="scrollend"),A=rt?T!==null?T+"Capture":null:T;rt=[];for(var v=E,S;v!==null;){var N=v;if(S=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||S===null||A===null||(N=_n(v,A),N!=null&&rt.push(bu(v,N,S))),kt)break;v=v.return}0<rt.length&&(T=new D(T,ft,null,l,C),k.push({event:T,listeners:rt}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",T&&l!==Cc&&(ft=l.relatedTarget||l.fromElement)&&(Ca(ft)||ft[ja]))break t;if((D||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,D?(ft=l.relatedTarget||l.toElement,D=E,ft=ft?Ca(ft):null,ft!==null&&(kt=m(ft),rt=ft.tag,ft!==kt||rt!==5&&rt!==27&&rt!==6)&&(ft=null)):(D=null,ft=E),D!==ft)){if(rt=Ys,N="onMouseLeave",A="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(rt=qs,N="onPointerLeave",A="onPointerEnter",v="pointer"),kt=D==null?T:Nn(D),S=ft==null?T:Nn(ft),T=new rt(N,v+"leave",D,l,C),T.target=kt,T.relatedTarget=S,N=null,Ca(C)===E&&(rt=new rt(A,v+"enter",ft,l,C),rt.target=S,rt.relatedTarget=kt,N=rt),kt=N,D&&ft)e:{for(rt=D,A=ft,v=0,S=rt;S;S=hn(S))v++;for(S=0,N=A;N;N=hn(N))S++;for(;0<v-S;)rt=hn(rt),v--;for(;0<S-v;)A=hn(A),S--;for(;v--;){if(rt===A||A!==null&&rt===A.alternate)break e;rt=hn(rt),A=hn(A)}rt=null}else rt=null;D!==null&&_h(k,T,D,rt,!1),ft!==null&&kt!==null&&_h(k,kt,ft,rt,!0)}}t:{if(T=E?Nn(E):window,D=T.nodeName&&T.nodeName.toLowerCase(),D==="select"||D==="input"&&T.type==="file")var nt=Fs;else if(Ws(T))if(Ps)nt=Bm;else{nt=Nm;var xt=Cm}else D=T.nodeName,!D||D.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&jc(E.elementType)&&(nt=Fs):nt=_m;if(nt&&(nt=nt(t,E))){Is(k,nt,l,C);break t}xt&&xt(t,T,E),t==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Mc(T,"number",T.value)}switch(xt=E?Nn(E):window,t){case"focusin":(Ws(xt)||xt.contentEditable==="true")&&(Ya=xt,Xc=E,Yn=null);break;case"focusout":Yn=Xc=Ya=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,rf(k,l,C);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":rf(k,l,C)}var ct;if(Lc)t:{switch(t){case"compositionstart":var ot="onCompositionStart";break t;case"compositionend":ot="onCompositionEnd";break t;case"compositionupdate":ot="onCompositionUpdate";break t}ot=void 0}else La?Ks(t,l)&&(ot="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Xs&&l.locale!=="ko"&&(La||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&La&&(ct=Qs()):(Ol=C,kc="value"in Ol?Ol.value:Ol.textContent,La=!0)),xt=Ni(E,ot),0<xt.length&&(ot=new Gs(ot,t,null,l,C),k.push({event:ot,listeners:xt}),ct?ot.data=ct:(ct=Js(l),ct!==null&&(ot.data=ct)))),(ct=zm?Rm(t,l):Om(t,l))&&(ot=Ni(E,"onBeforeInput"),0<ot.length&&(xt=new Gs("onBeforeInput","beforeinput",null,l,C),k.push({event:xt,listeners:ot}),xt.data=ct)),yb(k,t,E,l,C)}Ch(k,e)})}function bu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Ni(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=_n(t,l),u!=null&&a.unshift(bu(t,u,i)),u=_n(t,e),u!=null&&a.push(bu(t,u,i))),t.tag===3)return a;t=t.return}return[]}function hn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _h(t,e,l,a,u){for(var i=e._reactName,s=[];l!==null&&l!==a;){var f=l,p=f.alternate,E=f.stateNode;if(f=f.tag,p!==null&&p===a)break;f!==5&&f!==26&&f!==27||E===null||(p=E,u?(E=_n(l,i),E!=null&&s.unshift(bu(l,E,p))):u||(E=_n(l,i),E!=null&&s.push(bu(l,E,p)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var Eb=/\r\n?/g,Tb=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(Eb,`
`).replace(Tb,"")}function kh(t,e){return e=Bh(e),Bh(t)===e}function _i(){}function Bt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ha(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ha(t,""+a);break;case"className":$u(t,"class",a);break;case"tabIndex":$u(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":$u(t,l,a);break;case"style":Us(t,a,i);break;case"data":if(e!=="object"){$u(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Bt(t,e,"name",u.name,u,null),Bt(t,e,"formEncType",u.formEncType,u,null),Bt(t,e,"formMethod",u.formMethod,u,null),Bt(t,e,"formTarget",u.formTarget,u,null)):(Bt(t,e,"encType",u.encType,u,null),Bt(t,e,"method",u.method,u,null),Bt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=_i);break;case"onScroll":a!=null&&St("scroll",t);break;case"onScrollEnd":a!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Yu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":St("beforetoggle",t),St("toggle",t),Hu(t,"popover",a);break;case"xlinkActuate":ol(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ol(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ol(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ol(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ol(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ol(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ol(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ol(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ol(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Hu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=tm.get(l)||l,Hu(t,l,a))}}function bo(t,e,l,a,u,i){switch(l){case"style":Us(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ha(t,a):(typeof a=="number"||typeof a=="bigint")&&Ha(t,""+a);break;case"onScroll":a!=null&&St("scroll",t);break;case"onScrollEnd":a!=null&&St("scrollend",t);break;case"onClick":a!=null&&(t.onclick=_i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ye]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Hu(t,l,a)}}}function de(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,i,s,l,null)}}u&&Bt(t,e,"srcSet",l.srcSet,l,null),a&&Bt(t,e,"src",l.src,l,null);return;case"input":St("invalid",t);var f=i=s=u=null,p=null,E=null;for(a in l)if(l.hasOwnProperty(a)){var C=l[a];if(C!=null)switch(a){case"name":u=C;break;case"type":s=C;break;case"checked":p=C;break;case"defaultChecked":E=C;break;case"value":i=C;break;case"defaultValue":f=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,e));break;default:Bt(t,e,a,C,l,null)}}Ns(t,i,f,p,E,s,u,!1),Qu(t);return;case"select":St("invalid",t),a=s=i=null;for(u in l)if(l.hasOwnProperty(u)&&(f=l[u],f!=null))switch(u){case"value":i=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:Bt(t,e,u,f,l,null)}e=i,l=s,t.multiple=!!a,e!=null?Ua(t,!!a,e,!1):l!=null&&Ua(t,!!a,l,!0);return;case"textarea":St("invalid",t),i=u=a=null;for(s in l)if(l.hasOwnProperty(s)&&(f=l[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":u=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:Bt(t,e,s,f,l,null)}Bs(t,a,u,i),Qu(t);return;case"option":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Bt(t,e,p,a,l,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(a=0;a<mu.length;a++)St(mu[a],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(a=l[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Bt(t,e,E,a,l,null)}return;default:if(jc(e)){for(C in l)l.hasOwnProperty(C)&&(a=l[C],a!==void 0&&bo(t,e,C,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Bt(t,e,f,a,l,null))}function wb(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,s=null,f=null,p=null,E=null,C=null;for(D in l){var k=l[D];if(l.hasOwnProperty(D)&&k!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":p=k;default:a.hasOwnProperty(D)||Bt(t,e,D,null,a,k)}}for(var T in a){var D=a[T];if(k=l[T],a.hasOwnProperty(T)&&(D!=null||k!=null))switch(T){case"type":i=D;break;case"name":u=D;break;case"checked":E=D;break;case"defaultChecked":C=D;break;case"value":s=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,e));break;default:D!==k&&Bt(t,e,T,D,a,k)}}Oc(t,s,f,p,E,C,i,u);return;case"select":D=s=f=T=null;for(i in l)if(p=l[i],l.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":D=p;default:a.hasOwnProperty(i)||Bt(t,e,i,null,a,p)}for(u in a)if(i=a[u],p=l[u],a.hasOwnProperty(u)&&(i!=null||p!=null))switch(u){case"value":T=i;break;case"defaultValue":f=i;break;case"multiple":s=i;default:i!==p&&Bt(t,e,u,i,a,p)}e=f,l=s,a=D,T!=null?Ua(t,!!l,T,!1):!!a!=!!l&&(e!=null?Ua(t,!!l,e,!0):Ua(t,!!l,l?[]:"",!1));return;case"textarea":D=T=null;for(f in l)if(u=l[f],l.hasOwnProperty(f)&&u!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Bt(t,e,f,null,a,u)}for(s in a)if(u=a[s],i=l[s],a.hasOwnProperty(s)&&(u!=null||i!=null))switch(s){case"value":T=u;break;case"defaultValue":D=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&Bt(t,e,s,u,a,i)}_s(t,T,D);return;case"option":for(var ft in l)if(T=l[ft],l.hasOwnProperty(ft)&&T!=null&&!a.hasOwnProperty(ft))switch(ft){case"selected":t.selected=!1;break;default:Bt(t,e,ft,null,a,T)}for(p in a)if(T=a[p],D=l[p],a.hasOwnProperty(p)&&T!==D&&(T!=null||D!=null))switch(p){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Bt(t,e,p,T,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in l)T=l[rt],l.hasOwnProperty(rt)&&T!=null&&!a.hasOwnProperty(rt)&&Bt(t,e,rt,null,a,T);for(E in a)if(T=a[E],D=l[E],a.hasOwnProperty(E)&&T!==D&&(T!=null||D!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,e));break;default:Bt(t,e,E,T,a,D)}return;default:if(jc(e)){for(var kt in l)T=l[kt],l.hasOwnProperty(kt)&&T!==void 0&&!a.hasOwnProperty(kt)&&bo(t,e,kt,void 0,a,T);for(C in a)T=a[C],D=l[C],!a.hasOwnProperty(C)||T===D||T===void 0&&D===void 0||bo(t,e,C,T,a,D);return}}for(var A in l)T=l[A],l.hasOwnProperty(A)&&T!=null&&!a.hasOwnProperty(A)&&Bt(t,e,A,null,a,T);for(k in a)T=a[k],D=l[k],!a.hasOwnProperty(k)||T===D||T==null&&D==null||Bt(t,e,k,T,a,D)}var go=null,vo=null;function Bi(t){return t.nodeType===9?t:t.ownerDocument}function Uh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function yo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xo=null;function Db(){var t=window.event;return t&&t.type==="popstate"?t===xo?!1:(xo=t,!0):(xo=null,!1)}var $h=typeof setTimeout=="function"?setTimeout:void 0,zb=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,Rb=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(t){return Qh.resolve(null).then(t).catch(Ob)}:$h;function Ob(t){setTimeout(function(){throw t})}function Xl(t){return t==="head"}function Lh(t,e){var l=e,a=0,u=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var s=t.ownerDocument;if(l&1&&gu(s.documentElement),l&2&&gu(s.body),l&4)for(l=s.head,gu(l),s=l.firstChild;s;){var f=s.nextSibling,p=s.nodeName;s[Cn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=f}}if(u===0){t.removeChild(i),wu(e);return}u--}else l==="$"||l==="$?"||l==="$!"?u++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);wu(e)}function Ao(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ao(l),wc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Mb(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Cn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ke(t.nextSibling),t===null)break}return null}function jb(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ke(t.nextSibling),t===null))return null;return t}function So(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Cb(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ke(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Eo=null;function Yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Gh(t,e,l){switch(e=Bi(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function gu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);wc(t)}var Ge=new Map,qh=new Set;function ki(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var El=L.d;L.d={f:Nb,r:_b,D:Bb,C:kb,L:Ub,m:Hb,X:Qb,S:$b,M:Lb};function Nb(){var t=El.f(),e=zi();return t||e}function _b(t){var e=Na(t);e!==null&&e.tag===5&&e.type==="form"?sd(e):El.r(t)}var pn=typeof document>"u"?null:document;function Xh(t,e,l){var a=pn;if(a&&typeof e=="string"&&e){var u=ke(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),qh.has(u)||(qh.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),de(e,"link",t),ne(e),a.head.appendChild(e)))}}function Bb(t){El.D(t),Xh("dns-prefetch",t,null)}function kb(t,e){El.C(t,e),Xh("preconnect",t,e)}function Ub(t,e,l){El.L(t,e,l);var a=pn;if(a&&t&&e){var u='link[rel="preload"][as="'+ke(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+ke(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+ke(l.imageSizes)+'"]')):u+='[href="'+ke(t)+'"]';var i=u;switch(e){case"style":i=mn(t);break;case"script":i=bn(t)}Ge.has(i)||(t=M({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ge.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(vu(i))||e==="script"&&a.querySelector(yu(i))||(e=a.createElement("link"),de(e,"link",t),ne(e),a.head.appendChild(e)))}}function Hb(t,e){El.m(t,e);var l=pn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+ke(a)+'"][href="'+ke(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=bn(t)}if(!Ge.has(i)&&(t=M({rel:"modulepreload",href:t},e),Ge.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yu(i)))return}a=l.createElement("link"),de(a,"link",t),ne(a),l.head.appendChild(a)}}}function $b(t,e,l){El.S(t,e,l);var a=pn;if(a&&t){var u=_a(a).hoistableStyles,i=mn(t);e=e||"default";var s=u.get(i);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(vu(i)))f.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ge.get(i))&&To(t,l);var p=s=a.createElement("link");ne(p),de(p,"link",t),p._p=new Promise(function(E,C){p.onload=E,p.onerror=C}),p.addEventListener("load",function(){f.loading|=1}),p.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ui(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:f},u.set(i,s)}}}function Qb(t,e){El.X(t,e);var l=pn;if(l&&t){var a=_a(l).hoistableScripts,u=bn(t),i=a.get(u);i||(i=l.querySelector(yu(u)),i||(t=M({src:t,async:!0},e),(e=Ge.get(u))&&wo(t,e),i=l.createElement("script"),ne(i),de(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Lb(t,e){El.M(t,e);var l=pn;if(l&&t){var a=_a(l).hoistableScripts,u=bn(t),i=a.get(u);i||(i=l.querySelector(yu(u)),i||(t=M({src:t,async:!0,type:"module"},e),(e=Ge.get(u))&&wo(t,e),i=l.createElement("script"),ne(i),de(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Zh(t,e,l,a){var u=(u=J.current)?ki(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=mn(l.href),l=_a(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=mn(l.href);var i=_a(u).hoistableStyles,s=i.get(t);if(s||(u=u.ownerDocument||u,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=u.querySelector(vu(t)))&&!i._p&&(s.instance=i,s.state.loading=5),Ge.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ge.set(t,l),i||Yb(u,t,l,s.state))),e&&a===null)throw Error(r(528,""));return s}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=bn(l),l=_a(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function mn(t){return'href="'+ke(t)+'"'}function vu(t){return'link[rel="stylesheet"]['+t+"]"}function Vh(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function Yb(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),de(e,"link",l),ne(e),t.head.appendChild(e))}function bn(t){return'[src="'+ke(t)+'"]'}function yu(t){return"script[async]"+t}function Kh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ke(l.href)+'"]');if(a)return e.instance=a,ne(a),a;var u=M({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ne(a),de(a,"style",u),Ui(a,l.precedence,t),e.instance=a;case"stylesheet":u=mn(l.href);var i=t.querySelector(vu(u));if(i)return e.state.loading|=4,e.instance=i,ne(i),i;a=Vh(l),(u=Ge.get(u))&&To(a,u),i=(t.ownerDocument||t).createElement("link"),ne(i);var s=i;return s._p=new Promise(function(f,p){s.onload=f,s.onerror=p}),de(i,"link",a),e.state.loading|=4,Ui(i,l.precedence,t),e.instance=i;case"script":return i=bn(l.src),(u=t.querySelector(yu(i)))?(e.instance=u,ne(u),u):(a=l,(u=Ge.get(i))&&(a=M({},l),wo(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ne(u),de(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ui(a,l.precedence,t));return e.instance}function Ui(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===e)i=f;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function To(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function wo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Hi=null;function Jh(t,e,l){if(Hi===null){var a=new Map,u=Hi=new Map;u.set(l,a)}else u=Hi,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Cn]||i[pe]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var f=a.get(s);f?f.push(i):a.set(s,[i])}}return a}function Wh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Gb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ih(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var xu=null;function qb(){}function Xb(t,e,l){if(xu===null)throw Error(r(475));var a=xu;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=mn(l.href),i=t.querySelector(vu(u));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=$i.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,ne(i);return}i=t.ownerDocument||t,l=Vh(l),(u=Ge.get(u))&&To(l,u),i=i.createElement("link"),ne(i);var s=i;s._p=new Promise(function(f,p){s.onload=f,s.onerror=p}),de(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=$i.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Zb(){if(xu===null)throw Error(r(475));var t=xu;return t.stylesheets&&t.count===0&&Do(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Do(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function $i(){if(this.count--,this.count===0){if(this.stylesheets)Do(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Qi=null;function Do(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Qi=new Map,e.forEach(Vb,t),Qi=null,$i.call(t))}function Vb(t,e){if(!(e.state.loading&4)){var l=Qi.get(t);if(l)var a=l.get(null);else{l=new Map,Qi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var s=u[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}u=e.instance,s=u.getAttribute("data-precedence"),i=l.get(s)||a,i===a&&l.set(null,u),l.set(s,u),this.count++,a=$i.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var Au={$$typeof:Q,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Kb(t,e,l,a,u,i,s,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ac(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.hiddenUpdates=Ac(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Fh(t,e,l,a,u,i,s,f,p,E,C,k){return t=new Kb(t,e,l,s,f,p,E,k),e=1,i===!0&&(e|=24),i=ze(3,null,null,e),t.current=i,i.stateNode=t,e=ir(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},sr(i),t}function Ph(t){return t?(t=Za,t):Za}function t0(t,e,l,a,u,i){u=Ph(u),a.context===null?a.context=u:a.pendingContext=u,a=Cl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Nl(t,a,e),l!==null&&(Ce(l,t,e),In(l,t,e))}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function zo(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function l0(t){if(t.tag===13){var e=Xa(t,67108864);e!==null&&Ce(e,t,67108864),zo(t,67108864)}}var Li=!0;function Jb(t,e,l,a){var u=O.T;O.T=null;var i=L.p;try{L.p=2,Ro(t,e,l,a)}finally{L.p=i,O.T=u}}function Wb(t,e,l,a){var u=O.T;O.T=null;var i=L.p;try{L.p=8,Ro(t,e,l,a)}finally{L.p=i,O.T=u}}function Ro(t,e,l,a){if(Li){var u=Oo(a);if(u===null)mo(t,e,a,Yi,l),n0(t,a);else if(Fb(u,t,e,l,a))a.stopPropagation();else if(n0(t,a),e&4&&-1<Ib.indexOf(t)){for(;u!==null;){var i=Na(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=aa(i.pendingLanes);if(s!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var p=1<<31-we(s);f.entanglements[1]|=p,s&=~p}ll(i),(jt&6)===0&&(wi=It()+500,pu(0))}}break;case 13:f=Xa(i,2),f!==null&&Ce(f,i,2),zi(),zo(i,2)}if(i=Oo(a),i===null&&mo(t,e,a,Yi,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else mo(t,e,a,null,l)}}function Oo(t){return t=Nc(t),Mo(t)}var Yi=null;function Mo(t){if(Yi=null,t=Ca(t),t!==null){var e=m(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=y(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yi=t,null}function a0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rl()){case Xe:return 2;case Ma:return 8;case Dl:case la:return 32;case Rn:return 268435456;default:return 32}default:return 32}}var jo=!1,Zl=null,Vl=null,Kl=null,Su=new Map,Eu=new Map,Jl=[],Ib="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n0(t,e){switch(t){case"focusin":case"focusout":Zl=null;break;case"dragenter":case"dragleave":Vl=null;break;case"mouseover":case"mouseout":Kl=null;break;case"pointerover":case"pointerout":Su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(e.pointerId)}}function Tu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=Na(e),e!==null&&l0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Fb(t,e,l,a,u){switch(e){case"focusin":return Zl=Tu(Zl,t,e,l,a,u),!0;case"dragenter":return Vl=Tu(Vl,t,e,l,a,u),!0;case"mouseover":return Kl=Tu(Kl,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return Su.set(i,Tu(Su.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,Eu.set(i,Tu(Eu.get(i)||null,t,e,l,a,u)),!0}return!1}function u0(t){var e=Ca(t.target);if(e!==null){var l=m(e);if(l!==null){if(e=l.tag,e===13){if(e=y(l),e!==null){t.blockedOn=e,Xp(t.priority,function(){if(l.tag===13){var a=je();a=Sc(a);var u=Xa(l,a);u!==null&&Ce(u,l,a),zo(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Oo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Cc=a,l.target.dispatchEvent(a),Cc=null}else return e=Na(l),e!==null&&l0(e),t.blockedOn=l,!1;e.shift()}return!0}function i0(t,e,l){Gi(t)&&l.delete(e)}function Pb(){jo=!1,Zl!==null&&Gi(Zl)&&(Zl=null),Vl!==null&&Gi(Vl)&&(Vl=null),Kl!==null&&Gi(Kl)&&(Kl=null),Su.forEach(i0),Eu.forEach(i0)}function qi(t,e){t.blockedOn===e&&(t.blockedOn=null,jo||(jo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Pb)))}var Xi=null;function c0(t){Xi!==t&&(Xi=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xi===t&&(Xi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(Mo(a||l)===null)continue;break}var i=Na(l);i!==null&&(t.splice(e,3),e-=3,Or(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function wu(t){function e(p){return qi(p,t)}Zl!==null&&qi(Zl,t),Vl!==null&&qi(Vl,t),Kl!==null&&qi(Kl,t),Su.forEach(e),Eu.forEach(e);for(var l=0;l<Jl.length;l++){var a=Jl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Jl.length&&(l=Jl[0],l.blockedOn===null);)u0(l),l.blockedOn===null&&Jl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],s=u[ye]||null;if(typeof i=="function")s||c0(l);else if(s){var f=null;if(i&&i.hasAttribute("formAction")){if(u=i,s=i[ye]||null)f=s.formAction;else if(Mo(u)!==null)continue}else f=s.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),c0(l)}}}function Co(t){this._internalRoot=t}Zi.prototype.render=Co.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=je();t0(l,a,t,e,null,null)},Zi.prototype.unmount=Co.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t0(t.current,2,null,t,null,null),zi(),e[ja]=null}};function Zi(t){this._internalRoot=t}Zi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Es();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Jl.length&&e!==0&&e<Jl[l].priority;l++);Jl.splice(l,0,t),l===0&&u0(t)}};var r0=c.version;if(r0!=="19.1.0")throw Error(r(527,r0,"19.1.0"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=x(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var tg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{On=Vi.inject(tg),Te=Vi}catch{}}return zu.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=Td,i=wd,s=Dd,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=Fh(t,1,!1,null,null,l,a,u,i,s,f,null),t[ja]=e.current,po(t),new Co(e)},zu.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=Td,s=wd,f=Dd,p=null,E=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(p=l.unstable_transitionCallbacks),l.formState!==void 0&&(E=l.formState)),e=Fh(t,1,!0,e,l??null,a,u,i,s,f,p,E),e.context=Ph(null),l=e.current,a=je(),a=Sc(a),u=Cl(a),u.callback=null,Nl(l,u,a),l=a,e.current.lanes=l,jn(e,l),ll(e),t[ja]=e.current,po(t),new Zi(e)},zu.version="19.1.0",zu}var v0;function og(){if(v0)return Bo.exports;v0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Bo.exports=rg(),Bo.exports}var sg=og(),oe=function(){return oe=Object.assign||function(c){for(var o,r=1,d=arguments.length;r<d;r++){o=arguments[r];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(c[m]=o[m])}return c},oe.apply(this,arguments)};function ju(n,c,o){if(o||arguments.length===2)for(var r=0,d=c.length,m;r<d;r++)(m||!(r in c))&&(m||(m=Array.prototype.slice.call(c,0,r)),m[r]=c[r]);return n.concat(m||Array.prototype.slice.call(c))}var Qt="-ms-",Mu="-moz-",Rt="-webkit-",K0="comm",hc="rule",us="decl",fg="@import",J0="@keyframes",dg="@layer",W0=Math.abs,is=String.fromCharCode,Xo=Object.assign;function hg(n,c){return re(n,0)^45?(((c<<2^re(n,0))<<2^re(n,1))<<2^re(n,2))<<2^re(n,3):0}function I0(n){return n.trim()}function wl(n,c){return(n=c.exec(n))?n[0]:n}function gt(n,c,o){return n.replace(c,o)}function Pi(n,c,o){return n.indexOf(c,o)}function re(n,c){return n.charCodeAt(c)|0}function Sn(n,c,o){return n.slice(c,o)}function ul(n){return n.length}function F0(n){return n.length}function Ru(n,c){return c.push(n),n}function pg(n,c){return n.map(c).join("")}function y0(n,c){return n.filter(function(o){return!wl(o,c)})}var pc=1,En=1,P0=0,qe=0,te=0,zn="";function mc(n,c,o,r,d,m,y,z){return{value:n,root:c,parent:o,type:r,props:d,children:m,line:pc,column:En,length:y,return:"",siblings:z}}function Il(n,c){return Xo(mc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function gn(n){for(;n.root;)n=Il(n.root,{children:[n]});Ru(n,n.siblings)}function mg(){return te}function bg(){return te=qe>0?re(zn,--qe):0,En--,te===10&&(En=1,pc--),te}function Je(){return te=qe<P0?re(zn,qe++):0,En++,te===10&&(En=1,pc++),te}function wa(){return re(zn,qe)}function tc(){return qe}function bc(n,c){return Sn(zn,n,c)}function Zo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gg(n){return pc=En=1,P0=ul(zn=n),qe=0,[]}function vg(n){return zn="",n}function $o(n){return I0(bc(qe-1,Vo(n===91?n+2:n===40?n+1:n)))}function yg(n){for(;(te=wa())&&te<33;)Je();return Zo(n)>2||Zo(te)>3?"":" "}function xg(n,c){for(;--c&&Je()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return bc(n,tc()+(c<6&&wa()==32&&Je()==32))}function Vo(n){for(;Je();)switch(te){case n:return qe;case 34:case 39:n!==34&&n!==39&&Vo(te);break;case 40:n===41&&Vo(n);break;case 92:Je();break}return qe}function Ag(n,c){for(;Je()&&n+te!==57;)if(n+te===84&&wa()===47)break;return"/*"+bc(c,qe-1)+"*"+is(n===47?n:Je())}function Sg(n){for(;!Zo(wa());)Je();return bc(n,qe)}function Eg(n){return vg(ec("",null,null,null,[""],n=gg(n),0,[0],n))}function ec(n,c,o,r,d,m,y,z,x){for(var g=0,M=0,j=y,U=0,K=0,I=0,lt=1,Z=1,W=1,V=0,Q="",tt=d,q=m,F=r,P=Q;Z;)switch(I=V,V=Je()){case 40:if(I!=108&&re(P,j-1)==58){Pi(P+=gt($o(V),"&","&\f"),"&\f",W0(g?z[g-1]:0))!=-1&&(W=-1);break}case 34:case 39:case 91:P+=$o(V);break;case 9:case 10:case 13:case 32:P+=yg(I);break;case 92:P+=xg(tc()-1,7);continue;case 47:switch(wa()){case 42:case 47:Ru(Tg(Ag(Je(),tc()),c,o,x),x);break;default:P+="/"}break;case 123*lt:z[g++]=ul(P)*W;case 125*lt:case 59:case 0:switch(V){case 0:case 125:Z=0;case 59+M:W==-1&&(P=gt(P,/\f/g,"")),K>0&&ul(P)-j&&Ru(K>32?A0(P+";",r,o,j-1,x):A0(gt(P," ","")+";",r,o,j-2,x),x);break;case 59:P+=";";default:if(Ru(F=x0(P,c,o,g,M,d,z,Q,tt=[],q=[],j,m),m),V===123)if(M===0)ec(P,c,F,F,tt,m,j,z,q);else switch(U===99&&re(P,3)===110?100:U){case 100:case 108:case 109:case 115:ec(n,F,F,r&&Ru(x0(n,F,F,0,0,d,z,Q,d,tt=[],j,q),q),d,q,j,z,r?tt:q);break;default:ec(P,F,F,F,[""],q,0,z,q)}}g=M=K=0,lt=W=1,Q=P="",j=y;break;case 58:j=1+ul(P),K=I;default:if(lt<1){if(V==123)--lt;else if(V==125&&lt++==0&&bg()==125)continue}switch(P+=is(V),V*lt){case 38:W=M>0?1:(P+="\f",-1);break;case 44:z[g++]=(ul(P)-1)*W,W=1;break;case 64:wa()===45&&(P+=$o(Je())),U=wa(),M=j=ul(Q=P+=Sg(tc())),V++;break;case 45:I===45&&ul(P)==2&&(lt=0)}}return m}function x0(n,c,o,r,d,m,y,z,x,g,M,j){for(var U=d-1,K=d===0?m:[""],I=F0(K),lt=0,Z=0,W=0;lt<r;++lt)for(var V=0,Q=Sn(n,U+1,U=W0(Z=y[lt])),tt=n;V<I;++V)(tt=I0(Z>0?K[V]+" "+Q:gt(Q,/&\f/g,K[V])))&&(x[W++]=tt);return mc(n,c,o,d===0?hc:z,x,g,M,j)}function Tg(n,c,o,r){return mc(n,c,o,K0,is(mg()),Sn(n,2,-2),0,r)}function A0(n,c,o,r,d){return mc(n,c,o,us,Sn(n,0,r),Sn(n,r+1,-1),r,d)}function tp(n,c,o){switch(hg(n,c)){case 5103:return Rt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Rt+n+n;case 4789:return Mu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Rt+n+Mu+n+Qt+n+n;case 5936:switch(re(n,c+11)){case 114:return Rt+n+Qt+gt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Rt+n+Qt+gt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Rt+n+Qt+gt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Rt+n+Qt+n+n;case 6165:return Rt+n+Qt+"flex-"+n+n;case 5187:return Rt+n+gt(n,/(\w+).+(:[^]+)/,Rt+"box-$1$2"+Qt+"flex-$1$2")+n;case 5443:return Rt+n+Qt+"flex-item-"+gt(n,/flex-|-self/g,"")+(wl(n,/flex-|baseline/)?"":Qt+"grid-row-"+gt(n,/flex-|-self/g,""))+n;case 4675:return Rt+n+Qt+"flex-line-pack"+gt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Rt+n+Qt+gt(n,"shrink","negative")+n;case 5292:return Rt+n+Qt+gt(n,"basis","preferred-size")+n;case 6060:return Rt+"box-"+gt(n,"-grow","")+Rt+n+Qt+gt(n,"grow","positive")+n;case 4554:return Rt+gt(n,/([^-])(transform)/g,"$1"+Rt+"$2")+n;case 6187:return gt(gt(gt(n,/(zoom-|grab)/,Rt+"$1"),/(image-set)/,Rt+"$1"),n,"")+n;case 5495:case 3959:return gt(n,/(image-set\([^]*)/,Rt+"$1$`$1");case 4968:return gt(gt(n,/(.+:)(flex-)?(.*)/,Rt+"box-pack:$3"+Qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Rt+n+n;case 4200:if(!wl(n,/flex-|baseline/))return Qt+"grid-column-align"+Sn(n,c)+n;break;case 2592:case 3360:return Qt+gt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(r,d){return c=d,wl(r.props,/grid-\w+-end/)})?~Pi(n+(o=o[c].value),"span",0)?n:Qt+gt(n,"-start","")+n+Qt+"grid-row-span:"+(~Pi(o,"span",0)?wl(o,/\d+/):+wl(o,/\d+/)-+wl(n,/\d+/))+";":Qt+gt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(r){return wl(r.props,/grid-\w+-start/)})?n:Qt+gt(gt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return gt(n,/(.+)-inline(.+)/,Rt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ul(n)-1-c>6)switch(re(n,c+1)){case 109:if(re(n,c+4)!==45)break;case 102:return gt(n,/(.+:)(.+)-([^]+)/,"$1"+Rt+"$2-$3$1"+Mu+(re(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~Pi(n,"stretch",0)?tp(gt(n,"stretch","fill-available"),c,o)+n:n}break;case 5152:case 5920:return gt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,m,y,z,x,g){return Qt+d+":"+m+g+(y?Qt+d+"-span:"+(z?x:+x-+m)+g:"")+n});case 4949:if(re(n,c+6)===121)return gt(n,":",":"+Rt)+n;break;case 6444:switch(re(n,re(n,14)===45?18:11)){case 120:return gt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Rt+(re(n,14)===45?"inline-":"")+"box$3$1"+Rt+"$2$3$1"+Qt+"$2box$3")+n;case 100:return gt(n,":",":"+Qt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return gt(n,"scroll-","scroll-snap-")+n}return n}function cc(n,c){for(var o="",r=0;r<n.length;r++)o+=c(n[r],r,n,c)||"";return o}function wg(n,c,o,r){switch(n.type){case dg:if(n.children.length)break;case fg:case us:return n.return=n.return||n.value;case K0:return"";case J0:return n.return=n.value+"{"+cc(n.children,r)+"}";case hc:if(!ul(n.value=n.props.join(",")))return""}return ul(o=cc(n.children,r))?n.return=n.value+"{"+o+"}":""}function Dg(n){var c=F0(n);return function(o,r,d,m){for(var y="",z=0;z<c;z++)y+=n[z](o,r,d,m)||"";return y}}function zg(n){return function(c){c.root||(c=c.return)&&n(c)}}function Rg(n,c,o,r){if(n.length>-1&&!n.return)switch(n.type){case us:n.return=tp(n.value,n.length,o);return;case J0:return cc([Il(n,{value:gt(n.value,"@","@"+Rt)})],r);case hc:if(n.length)return pg(o=n.props,function(d){switch(wl(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gn(Il(n,{props:[gt(d,/:(read-\w+)/,":"+Mu+"$1")]})),gn(Il(n,{props:[d]})),Xo(n,{props:y0(o,r)});break;case"::placeholder":gn(Il(n,{props:[gt(d,/:(plac\w+)/,":"+Rt+"input-$1")]})),gn(Il(n,{props:[gt(d,/:(plac\w+)/,":"+Mu+"$1")]})),gn(Il(n,{props:[gt(d,/:(plac\w+)/,Qt+"input-$1")]})),gn(Il(n,{props:[d]})),Xo(n,{props:y0(o,r)});break}return""})}}var Og={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ne={},Tn=typeof process<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_ATTR||Ne.SC_ATTR)||"data-styled",ep="active",lp="data-styled-version",gc="6.1.19",cs=`/*!sc*/
`,rc=typeof window<"u"&&typeof document<"u",Mg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==""?Ne.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ne.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.SC_DISABLE_SPEEDY!==void 0&&Ne.SC_DISABLE_SPEEDY!==""&&Ne.SC_DISABLE_SPEEDY!=="false"&&Ne.SC_DISABLE_SPEEDY),jg={},vc=Object.freeze([]),wn=Object.freeze({});function ap(n,c,o){return o===void 0&&(o=wn),n.theme!==o.theme&&n.theme||c||o.theme}var np=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ng=/(^-|-$)/g;function S0(n){return n.replace(Cg,"-").replace(Ng,"")}var _g=/(a)(d)/gi,Ki=52,E0=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ko(n){var c,o="";for(c=Math.abs(n);c>Ki;c=c/Ki|0)o=E0(c%Ki)+o;return(E0(c%Ki)+o).replace(_g,"$1-$2")}var Qo,up=5381,yn=function(n,c){for(var o=c.length;o;)n=33*n^c.charCodeAt(--o);return n},ip=function(n){return yn(up,n)};function cp(n){return Ko(ip(n)>>>0)}function Bg(n){return n.displayName||n.name||"Component"}function Lo(n){return typeof n=="string"&&!0}var rp=typeof Symbol=="function"&&Symbol.for,op=rp?Symbol.for("react.memo"):60115,kg=rp?Symbol.for("react.forward_ref"):60112,Ug={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$g=((Qo={})[kg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qo[op]=sp,Qo);function T0(n){return("type"in(c=n)&&c.type.$$typeof)===op?sp:"$$typeof"in n?$g[n.$$typeof]:Ug;var c}var Qg=Object.defineProperty,Lg=Object.getOwnPropertyNames,w0=Object.getOwnPropertySymbols,Yg=Object.getOwnPropertyDescriptor,Gg=Object.getPrototypeOf,D0=Object.prototype;function fp(n,c,o){if(typeof c!="string"){if(D0){var r=Gg(c);r&&r!==D0&&fp(n,r,o)}var d=Lg(c);w0&&(d=d.concat(w0(c)));for(var m=T0(n),y=T0(c),z=0;z<d.length;++z){var x=d[z];if(!(x in Hg||o&&o[x]||y&&x in y||m&&x in m)){var g=Yg(c,x);try{Qg(n,x,g)}catch{}}}}return n}function Da(n){return typeof n=="function"}function rs(n){return typeof n=="object"&&"styledComponentId"in n}function Sa(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Jo(n,c){if(n.length===0)return"";for(var o=n[0],r=1;r<n.length;r++)o+=n[r];return o}function Cu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Wo(n,c,o){if(o===void 0&&(o=!1),!o&&!Cu(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=Wo(n[r],c[r]);else if(Cu(c))for(var r in c)n[r]=Wo(n[r],c[r]);return n}function os(n,c){Object.defineProperty(n,"toString",{value:c})}function za(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var qg=function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},n.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,m=d;c>=m;)if((m<<=1)<0)throw za(16,"".concat(c));this.groupSizes=new Uint32Array(m),this.groupSizes.set(r),this.length=m;for(var y=d;y<m;y++)this.groupSizes[y]=0}for(var z=this.indexOfGroup(c+1),x=(y=0,o.length);y<x;y++)this.tag.insertRule(z,o[y])&&(this.groupSizes[c]++,z++)},n.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),d=r+o;this.groupSizes[c]=0;for(var m=r;m<d;m++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),m=d+r,y=d;y<m;y++)o+="".concat(this.tag.getRule(y)).concat(cs);return o},n}(),lc=new Map,oc=new Map,ac=1,Ji=function(n){if(lc.has(n))return lc.get(n);for(;oc.has(ac);)ac++;var c=ac++;return lc.set(n,c),oc.set(c,n),c},Xg=function(n,c){ac=c+1,lc.set(n,c),oc.set(c,n)},Zg="style[".concat(Tn,"][").concat(lp,'="').concat(gc,'"]'),Vg=new RegExp("^".concat(Tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Kg=function(n,c,o){for(var r,d=o.split(","),m=0,y=d.length;m<y;m++)(r=d[m])&&n.registerName(c,r)},Jg=function(n,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(cs),d=[],m=0,y=r.length;m<y;m++){var z=r[m].trim();if(z){var x=z.match(Vg);if(x){var g=0|parseInt(x[1],10),M=x[2];g!==0&&(Xg(M,g),Kg(n,M,x[3]),n.getTag().insertRules(g,d)),d.length=0}else d.push(z)}}},z0=function(n){for(var c=document.querySelectorAll(Zg),o=0,r=c.length;o<r;o++){var d=c[o];d&&d.getAttribute(Tn)!==ep&&(Jg(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Wg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dp=function(n){var c=document.head,o=n||c,r=document.createElement("style"),d=function(z){var x=Array.from(z.querySelectorAll("style[".concat(Tn,"]")));return x[x.length-1]}(o),m=d!==void 0?d.nextSibling:null;r.setAttribute(Tn,ep),r.setAttribute(lp,gc);var y=Wg();return y&&r.setAttribute("nonce",y),o.insertBefore(r,m),r},Ig=function(){function n(c){this.element=dp(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,d=0,m=r.length;d<m;d++){var y=r[d];if(y.ownerNode===o)return y}throw za(17)}(this.element),this.length=0}return n.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},n}(),Fg=function(){function n(c){this.element=dp(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n}(),Pg=function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n}(),R0=rc,tv={isServer:!rc,useCSSOMInjection:!Mg},sc=function(){function n(c,o,r){c===void 0&&(c=wn),o===void 0&&(o={});var d=this;this.options=oe(oe({},tv),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&rc&&R0&&(R0=!1,z0(this)),os(this,function(){return function(m){for(var y=m.getTag(),z=y.length,x="",g=function(j){var U=function(W){return oc.get(W)}(j);if(U===void 0)return"continue";var K=m.names.get(U),I=y.getGroup(j);if(K===void 0||!K.size||I.length===0)return"continue";var lt="".concat(Tn,".g").concat(j,'[id="').concat(U,'"]'),Z="";K!==void 0&&K.forEach(function(W){W.length>0&&(Z+="".concat(W,","))}),x+="".concat(I).concat(lt,'{content:"').concat(Z,'"}').concat(cs)},M=0;M<z;M++)g(M);return x}(d)})}return n.registerId=function(c){return Ji(c)},n.prototype.rehydrate=function(){!this.server&&rc&&z0(this)},n.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new n(oe(oe({},this.options),c),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=function(o){var r=o.useCSSOMInjection,d=o.target;return o.isServer?new Pg(d):r?new Ig(d):new Fg(d)}(this.options),new qg(c)));var c},n.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},n.prototype.registerName=function(c,o){if(Ji(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},n.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(Ji(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Ji(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ev=/&/g,lv=/^\s*\/\/.*$/gm;function hp(n,c){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=hp(o.children,c)),o})}function av(n){var c,o,r,d=wn,m=d.options,y=m===void 0?wn:m,z=d.plugins,x=z===void 0?vc:z,g=function(U,K,I){return I.startsWith(o)&&I.endsWith(o)&&I.replaceAll(o,"").length>0?".".concat(c):U},M=x.slice();M.push(function(U){U.type===hc&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(ev,o).replace(r,g))}),y.prefix&&M.push(Rg),M.push(wg);var j=function(U,K,I,lt){K===void 0&&(K=""),I===void 0&&(I=""),lt===void 0&&(lt="&"),c=lt,o=K,r=new RegExp("\\".concat(o,"\\b"),"g");var Z=U.replace(lv,""),W=Eg(I||K?"".concat(I," ").concat(K," { ").concat(Z," }"):Z);y.namespace&&(W=hp(W,y.namespace));var V=[];return cc(W,Dg(M.concat(zg(function(Q){return V.push(Q)})))),V};return j.hash=x.length?x.reduce(function(U,K){return K.name||za(15),yn(U,K.name)},up).toString():"",j}var nv=new sc,Io=av(),pp=R.createContext({shouldForwardProp:void 0,styleSheet:nv,stylis:Io});pp.Consumer;R.createContext(void 0);function Fo(){return w.useContext(pp)}var uv=function(){function n(c,o){var r=this;this.inject=function(d,m){m===void 0&&(m=Io);var y=r.name+m.hash;d.hasNameForId(r.id,y)||d.insertRules(r.id,y,m(r.rules,y,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,os(this,function(){throw za(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Io),this.name+c.hash},n}(),iv=function(n){return n>="A"&&n<="Z"};function O0(n){for(var c="",o=0;o<n.length;o++){var r=n[o];if(o===1&&r==="-"&&n[0]==="-")return n;iv(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var mp=function(n){return n==null||n===!1||n===""},bp=function(n){var c,o,r=[];for(var d in n){var m=n[d];n.hasOwnProperty(d)&&!mp(m)&&(Array.isArray(m)&&m.isCss||Da(m)?r.push("".concat(O0(d),":"),m,";"):Cu(m)?r.push.apply(r,ju(ju(["".concat(d," {")],bp(m),!1),["}"],!1)):r.push("".concat(O0(d),": ").concat((c=d,(o=m)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Og||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Pl(n,c,o,r){if(mp(n))return[];if(rs(n))return[".".concat(n.styledComponentId)];if(Da(n)){if(!Da(m=n)||m.prototype&&m.prototype.isReactComponent||!c)return[n];var d=n(c);return Pl(d,c,o,r)}var m;return n instanceof uv?o?(n.inject(o,r),[n.getName(r)]):[n]:Cu(n)?bp(n):Array.isArray(n)?Array.prototype.concat.apply(vc,n.map(function(y){return Pl(y,c,o,r)})):[n.toString()]}function gp(n){for(var c=0;c<n.length;c+=1){var o=n[c];if(Da(o)&&!rs(o))return!1}return!0}var cv=ip(gc),rv=function(){function n(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gp(c),this.componentId=o,this.baseHash=yn(cv,o),this.baseStyle=r,sc.registerId(o)}return n.prototype.generateAndInjectStyles=function(c,o,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=Sa(d,this.staticRulesId);else{var m=Jo(Pl(this.rules,c,o,r)),y=Ko(yn(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,y)){var z=r(m,".".concat(y),void 0,this.componentId);o.insertRules(this.componentId,y,z)}d=Sa(d,y),this.staticRulesId=y}else{for(var x=yn(this.baseHash,r.hash),g="",M=0;M<this.rules.length;M++){var j=this.rules[M];if(typeof j=="string")g+=j;else if(j){var U=Jo(Pl(j,c,o,r));x=yn(x,U+M),g+=U}}if(g){var K=Ko(x>>>0);o.hasNameForId(this.componentId,K)||o.insertRules(this.componentId,K,r(g,".".concat(K),void 0,this.componentId)),d=Sa(d,K)}}return d},n}(),Nu=R.createContext(void 0);Nu.Consumer;function M0(n){var c=R.useContext(Nu),o=w.useMemo(function(){return function(r,d){if(!r)throw za(14);if(Da(r)){var m=r(d);return m}if(Array.isArray(r)||typeof r!="object")throw za(8);return d?oe(oe({},d),r):r}(n.theme,c)},[n.theme,c]);return n.children?R.createElement(Nu.Provider,{value:o},n.children):null}var Yo={};function ov(n,c,o){var r=rs(n),d=n,m=!Lo(n),y=c.attrs,z=y===void 0?vc:y,x=c.componentId,g=x===void 0?function(tt,q){var F=typeof tt!="string"?"sc":S0(tt);Yo[F]=(Yo[F]||0)+1;var P="".concat(F,"-").concat(cp(gc+F+Yo[F]));return q?"".concat(q,"-").concat(P):P}(c.displayName,c.parentComponentId):x,M=c.displayName,j=M===void 0?function(tt){return Lo(tt)?"styled.".concat(tt):"Styled(".concat(Bg(tt),")")}(n):M,U=c.displayName&&c.componentId?"".concat(S0(c.displayName),"-").concat(c.componentId):c.componentId||g,K=r&&d.attrs?d.attrs.concat(z).filter(Boolean):z,I=c.shouldForwardProp;if(r&&d.shouldForwardProp){var lt=d.shouldForwardProp;if(c.shouldForwardProp){var Z=c.shouldForwardProp;I=function(tt,q){return lt(tt,q)&&Z(tt,q)}}else I=lt}var W=new rv(o,U,r?d.componentStyle:void 0);function V(tt,q){return function(F,P,yt){var wt=F.attrs,Lt=F.componentStyle,Ot=F.defaultProps,pt=F.foldedComponentIds,Ht=F.styledComponentId,Mt=F.target,ut=R.useContext(Nu),O=Fo(),L=F.shouldForwardProp||O.shouldForwardProp,X=ap(P,ut,Ot)||wn,it=function(at,J,st){for(var ht,$=oe(oe({},J),{className:void 0,theme:st}),dt=0;dt<at.length;dt+=1){var mt=Da(ht=at[dt])?ht($):ht;for(var Et in mt)$[Et]=Et==="className"?Sa($[Et],mt[Et]):Et==="style"?oe(oe({},$[Et]),mt[Et]):mt[Et]}return J.className&&($.className=Sa($.className,J.className)),$}(wt,P,X),b=it.as||Mt,_={};for(var G in it)it[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&it.theme===X||(G==="forwardedAs"?_.as=it.forwardedAs:L&&!L(G,b)||(_[G]=it[G]));var B=function(at,J){var st=Fo(),ht=at.generateAndInjectStyles(J,st.styleSheet,st.stylis);return ht}(Lt,it),Y=Sa(pt,Ht);return B&&(Y+=" "+B),it.className&&(Y+=" "+it.className),_[Lo(b)&&!np.has(b)?"class":"className"]=Y,yt&&(_.ref=yt),w.createElement(b,_)}(Q,tt,q)}V.displayName=j;var Q=R.forwardRef(V);return Q.attrs=K,Q.componentStyle=W,Q.displayName=j,Q.shouldForwardProp=I,Q.foldedComponentIds=r?Sa(d.foldedComponentIds,d.styledComponentId):"",Q.styledComponentId=U,Q.target=r?d.target:n,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(tt){this._foldedDefaultProps=r?function(q){for(var F=[],P=1;P<arguments.length;P++)F[P-1]=arguments[P];for(var yt=0,wt=F;yt<wt.length;yt++)Wo(q,wt[yt],!0);return q}({},d.defaultProps,tt):tt}}),os(Q,function(){return".".concat(Q.styledComponentId)}),m&&fp(Q,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function j0(n,c){for(var o=[n[0]],r=0,d=c.length;r<d;r+=1)o.push(c[r],n[r+1]);return o}var C0=function(n){return Object.assign(n,{isCss:!0})};function et(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Da(n)||Cu(n))return C0(Pl(j0(vc,ju([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?Pl(r):C0(Pl(j0(r,c)))}function Po(n,c,o){if(o===void 0&&(o=wn),!c)throw za(1,c);var r=function(d){for(var m=[],y=1;y<arguments.length;y++)m[y-1]=arguments[y];return n(c,o,et.apply(void 0,ju([d],m,!1)))};return r.attrs=function(d){return Po(n,c,oe(oe({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return Po(n,c,oe(oe({},o),d))},r}var vp=function(n){return Po(ov,n)},H=vp;np.forEach(function(n){H[n]=vp(n)});var sv=function(){function n(c,o){this.rules=c,this.componentId=o,this.isStatic=gp(c),sc.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,o,r,d){var m=d(Jo(Pl(this.rules,o,r,d)),""),y=this.componentId+c;r.insertRules(y,y,m)},n.prototype.removeStyles=function(c,o){o.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,o,r,d){c>2&&sc.registerId(this.componentId+c),this.removeStyles(c,r),this.createStyles(c,o,r,d)},n}();function fv(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var r=et.apply(void 0,ju([n],c,!1)),d="sc-global-".concat(cp(JSON.stringify(r))),m=new sv(r,d),y=function(x){var g=Fo(),M=R.useContext(Nu),j=R.useRef(g.styleSheet.allocateGSInstance(d)).current;return g.styleSheet.server&&z(j,x,g.styleSheet,M,g.stylis),R.useLayoutEffect(function(){if(!g.styleSheet.server)return z(j,x,g.styleSheet,M,g.stylis),function(){return m.removeStyles(j,g.styleSheet)}},[j,x,g.styleSheet,M,g.stylis]),null};function z(x,g,M,j,U){if(m.isStatic)m.renderStyles(x,jg,M,U);else{var K=oe(oe({},g),{theme:ap(g,j,y.defaultProps)});m.renderStyles(x,K,M,U)}}return R.memo(y)}const dv="/95-Portfolio/assets/stars-C6O0RJ9m.png";function hv({enabled:n}){const[c,o]=w.useState([]);return w.useEffect(()=>{let r;return n&&(r=setInterval(()=>{const d={id:Date.now()+Math.random(),left:Math.random()*window.innerWidth,size:Math.random()*3+5,speed:Math.random()*3+1};o(m=>[...m,d])},200)),n||o([]),()=>clearInterval(r)},[n]),w.useEffect(()=>{if(!n)return;const r=setInterval(()=>{o(d=>d.map(m=>({...m,top:(m.top||0)+m.speed})).filter(m=>(m.top||0)<window.innerHeight))},50);return()=>clearInterval(r)},[n]),h.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",width:"100%",height:"100%"},children:c.map(r=>h.jsx("img",{src:dv,style:{position:"absolute",top:r.top||0,left:r.left,width:r.size,height:r.size,pointerEvents:"none"}},r.id))})}var pv=`
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

`;const ss="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",fs="inset 2px 2px 3px rgba(0,0,0,0.2)",We=()=>et`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Ie=({background:n="material",color:c="materialText"}={})=>et`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[c]};
`,_u=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:o=2})=>et`
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
`,Ra=()=>et`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,vn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},mv=({theme:n,topLeftInner:c,bottomRightInner:o,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?ss:!1,d?fs:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),Zt=({invert:n=!1,style:c="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return et`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[vn[c][o.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[vn[c][o.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[vn[c][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[vn[c][o.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>mv({theme:r,topLeftInner:vn[c][o.topLeftInner],bottomRightInner:vn[c][o.bottomRightInner],hasShadow:d})};
  `},Dn=()=>et`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,bv=n=>Buffer.from(n).toString("base64"),gv=typeof btoa<"u"?btoa:bv,Wi=(n,c=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${gv(o)})`},ds=(n="default")=>et`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>_u({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Ie()}
    ${n==="flat"?Ra():Zt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${Ie()}
    ${n==="flat"?Ra():Zt({style:"window"})}
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
    ${n==="default"?Zt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:c})=>Wi(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>Wi(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>Wi(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>Wi(c.materialText,0)};
  }
`,vv=H.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,yv=w.forwardRef(({children:n,underline:c=!0,...o},r)=>R.createElement(vv,{ref:r,underline:c,...o},n));yv.displayName="Anchor";const xv=H.header`
  ${Zt()};
  ${Ie()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,yp=w.forwardRef(({children:n,fixed:c=!0,position:o="fixed",...r},d)=>R.createElement(xv,{fixed:c,position:c!==!1?o:void 0,ref:d,...r},n));yp.displayName="AppBar";const Oa=()=>{};function Ea(n,c,o){return o!==null&&n>o?o:c!==null&&n<c?c:n}function Av(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),r=o[0].split(".")[1];return(r?r.length:0)+parseInt(o[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function N0(n,c,o){const r=Math.round((n-o)/c)*c+o;return Number(r.toFixed(Av(c)))}function ta(n){return typeof n=="number"?`${n}px`:n}const Sv=H.div`
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
`,Ev=H.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Tv=w.forwardRef(({alt:n="",children:c,noBorder:o=!1,size:r=35,square:d=!1,src:m,...y},z)=>R.createElement(Sv,{noBorder:o,ref:z,size:ta(r),square:d,src:m,...y},m?R.createElement(Ev,{src:m,alt:n}):c));Tv.displayName="Avatar";const he={sm:"28px",md:"36px",lg:"44px"},wv=et`
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
`,yc=H.button`
  ${({active:n,disabled:c,primary:o,theme:r,variant:d})=>d==="flat"?et`
          ${Ra()}
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
        `:d==="menu"||d==="thin"?et`
          ${Ie()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!n&&Zt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Zt({style:"buttonThinPressed"})}
          }
          ${n&&Zt({style:"buttonThinPressed"})}
          ${c&&We()}
        `:et`
          ${Ie()};
          border: none;
          ${c&&We()}
          ${n?_u({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?et`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:et`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Zt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&Zt({style:d==="raised"?"window":"button",invert:!0})}
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
  ${wv}
`,ae=w.forwardRef(({onClick:n,disabled:c=!1,children:o,type:r="button",fullWidth:d=!1,size:m="md",square:y=!1,active:z=!1,onTouchStart:x=Oa,primary:g=!1,variant:M="default",...j},U)=>R.createElement(yc,{active:z,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:x,primary:g,ref:U,size:m,square:y,type:r,variant:M,...j},o));ae.displayName="Button";function ea({defaultValue:n,onChange:c,onChangePropName:o="onChange",readOnly:r,value:d,valuePropName:m="value"}){const y=d!==void 0,[z,x]=w.useState(n),g=w.useCallback(M=>{y||x(M)},[y]);if(y&&typeof c!="function"&&!r){const M=`Warning: You provided a \`${m}\` prop to a component without an \`${o}\` handler.${m==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${m}\`.`}`;console.warn(M)}return[y?d:z,g]}const ts=H.li`
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
  ${n=>n.$disabled&&We()}
`,Ou=w.forwardRef(({size:n="lg",disabled:c,square:o,children:r,onClick:d,primary:m,...y},z)=>R.createElement(ts,{$disabled:c,size:n,square:o,onClick:c?void 0:d,primary:m,role:"menuitem",ref:z,"aria-disabled":c,...y},r));Ou.displayName="MenuListItem";const xp=H.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Zt({style:"window"})}
  ${Ie()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;xp.displayName="MenuList";const il=20,fc=H.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${il}px;
  height: ${il}px;
  opacity: 0;
  z-index: -1;
`,hs=H.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&We()}

  ${ts} & {
    margin: 0;
    height: 100%;
  }
  ${ts}:hover & {
    ${({$disabled:n,theme:c})=>!n&&et`
        color: ${c.materialTextInvert};
      `};
  }
`,ps=H.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${fc}:focus ~ & {
    ${Dn}
  }
  ${fc}:not(:disabled) ~ &:active {
    ${Dn}
  }
`,cl=H.div`
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
`,Dv=H.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${ds()}
`,Ta=w.forwardRef(({children:n,shadow:c=!0,...o},r)=>R.createElement(cl,{ref:r,shadow:c,...o},R.createElement(Dv,null,n)));Ta.displayName="ScrollView";const Ap=et`
  width: ${il}px;
  height: ${il}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,zv=H(cl)`
  ${Ap}
  width: ${il}px;
  height: ${il}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,Rv=H.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${Ap}
  width: ${il-4}px;
  height: ${il-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,Ov=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Mv=H.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>_u({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,jv={flat:Rv,default:zv},Cv=w.forwardRef(({checked:n,className:c="",defaultChecked:o=!1,disabled:r=!1,indeterminate:d=!1,label:m="",onChange:y=Oa,style:z={},value:x,variant:g="default",...M},j)=>{var U;const[K,I]=ea({defaultValue:o,onChange:y,readOnly:(U=M.readOnly)!==null&&U!==void 0?U:r,value:n}),lt=w.useCallback(V=>{const Q=V.target.checked;I(Q),y(V)},[y,I]),Z=jv[g];let W=null;return d?W=Mv:K&&(W=Ov),R.createElement(hs,{$disabled:r,className:c,style:z},R.createElement(fc,{disabled:r,onChange:r?void 0:lt,readOnly:r,type:"checkbox",value:x,checked:K,"data-indeterminate":d,ref:j,...M}),R.createElement(Z,{$disabled:r,role:"presentation"},W&&R.createElement(W,{$disabled:r,variant:g})),m&&R.createElement(ps,null,m))});Cv.displayName="Checkbox";const Fl=H.div`
  ${({orientation:n,theme:c,size:o="100%"})=>n==="vertical"?`
    height: ${ta(o)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${ta(o)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;Fl.displayName="Separator";const Nv=H(yc)`
  padding-left: 8px;
`,_v=H(Fl)`
  height: 21px;
  position: relative;
  top: 0;
`,Sp=H.input`
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
`,Bv=H.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?et`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:et`
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
`,kv=H.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?et`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:et`
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
`,Uv=w.forwardRef(({value:n,defaultValue:c,onChange:o=Oa,disabled:r=!1,variant:d="default",...m},y)=>{var z;const[x,g]=ea({defaultValue:c,onChange:o,readOnly:(z=m.readOnly)!==null&&z!==void 0?z:r,value:n}),M=j=>{const U=j.target.value;g(U),o(j)};return R.createElement(Nv,{disabled:r,as:"div",variant:d,size:"md"},R.createElement(Sp,{onChange:M,readOnly:r,disabled:r,value:x??"#008080",type:"color",ref:y,...m}),R.createElement(Bv,{$disabled:r,color:x??"#008080",role:"presentation"}),d==="default"&&R.createElement(_v,{orientation:"vertical"}),R.createElement(kv,{$disabled:r,variant:d}))});Uv.displayName="ColorInput";const Hv=H.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>et`
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
      ${_u({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,_0=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],$v=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Qv({digit:n=0,pixelSize:c=2,...o}){const r=$v[Number(n)].map((d,m)=>d?`${_0[m]} active`:_0[m]);return R.createElement(Hv,{pixelSize:c,...o},r.map((d,m)=>R.createElement("span",{className:d,key:m})))}const Lv=H.div`
  ${Zt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Yv={sm:1,md:2,lg:3,xl:4},Gv=w.forwardRef(({value:n=0,minLength:c=3,size:o="md",...r},d)=>{const m=w.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return R.createElement(Lv,{ref:d,...r},m.map((y,z)=>R.createElement(Qv,{digit:y,pixelSize:Yv[o],key:z})))});Gv.displayName="Counter";const Ep=et`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${he.md};
`,qv=H(cl).attrs({"data-testid":"variant-default"})`
  ${Ep}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,Xv=H.div.attrs({"data-testid":"variant-flat"})`
  ${Ra()}
  ${Ep}
  position: relative;
`,Tp=et`
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
  ${({disabled:n,variant:c})=>c!=="flat"&&n&&We()}
`,Zv=H.input`
  ${Tp}
  padding: 0 8px;
`,Vv=H.textarea`
  ${Tp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>ds(n)}
`,ms=w.forwardRef(({className:n,disabled:c=!1,fullWidth:o,onChange:r=Oa,shadow:d=!0,style:m,variant:y="default",...z},x)=>{const g=y==="flat"?Xv:qv,M=w.useMemo(()=>{var j;return z.multiline?R.createElement(Vv,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:x,variant:y,...z}):R.createElement(Zv,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:x,type:(j=z.type)!==null&&j!==void 0?j:"text",variant:y,...z})},[c,r,z,x,y]);return R.createElement(g,{className:n,fullWidth:o,$disabled:c,shadow:d,style:m},M)});ms.displayName="TextInput";const Kv=H.div`
  display: inline-flex;
  align-items: center;
`,es=H(ae)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?et`
          height: calc(50% - 1px);
        `:et`
          height: 50%;
        `}
`,Jv=H.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?et`
          height: calc(${he.md} - 4px);
        `:et`
          height: ${he.md};
          margin-left: 2px;
        `}
`,B0=H.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?et`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:et`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${es}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?et`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:et`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,wp=w.forwardRef(({className:n,defaultValue:c,disabled:o=!1,max:r,min:d,onChange:m,readOnly:y,step:z=1,style:x,value:g,variant:M="default",width:j,...U},K)=>{const[I,lt]=ea({defaultValue:c,onChange:m,readOnly:y,value:g}),Z=w.useCallback(F=>{const P=parseFloat(F.target.value);lt(P)},[lt]),W=w.useCallback(F=>{const P=Ea(parseFloat(((I??0)+F).toFixed(2)),d??null,r??null);lt(P),m==null||m(P)},[r,d,m,lt,I]),V=w.useCallback(()=>{I!==void 0&&(m==null||m(I))},[m,I]),Q=w.useCallback(()=>{W(z)},[W,z]),tt=w.useCallback(()=>{W(-z)},[W,z]),q=M==="flat"?"flat":"raised";return R.createElement(Kv,{className:n,style:{...x,width:j!==void 0?ta(j):"auto"},...U},R.createElement(ms,{value:I,variant:M,onChange:Z,disabled:o,type:"number",readOnly:y,ref:K,fullWidth:!0,onBlur:V}),R.createElement(Jv,{variant:M},R.createElement(es,{"data-testid":"increment",variant:q,disabled:o||y,onClick:Q},R.createElement(B0,{invert:!0})),R.createElement(es,{"data-testid":"decrement",variant:q,disabled:o||y,onClick:tt},R.createElement(B0,null))))});wp.displayName="NumberInput";function Wv(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let o=0;o<10;o+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const Dp=n=>w.useMemo(()=>Wv(),[n]),zp=et`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Rp=et`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,bs=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Iv=H.div`
  ${zp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${bs}:focus & {
    ${Rp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Op=et`
  height: ${he.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?We():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Fv=H(cl)`
  ${Op}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,Pv=H.div`
  ${Ra()}
  ${Op}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,ty=H.select`
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
    ${We()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Mp=H(yc).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?et`
          height: 100%;
          margin-right: 0;
        `:et`
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
`,ey=H.span`
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
`,ly=H.ul`
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
  ${({variant:n="default"})=>n==="flat"?et`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:et`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>ds(n)}
`,ay=H.li`
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
  ${({active:n})=>n?Rp:""}
  user-select: none;
`,ny=[],jp=({className:n,defaultValue:c,disabled:o,native:r,onChange:d,options:m=ny,readOnly:y,style:z,value:x,variant:g,width:M})=>{var j;const U=w.useMemo(()=>m.filter(Boolean),[m]),[K,I]=ea({defaultValue:c??((j=U==null?void 0:U[0])===null||j===void 0?void 0:j.value),onChange:d,readOnly:y,value:x}),lt=!(o||y),Z=w.useMemo(()=>({className:n,style:{...z,width:M}}),[n,z,M]),W=w.useMemo(()=>R.createElement(Mp,{as:"div","data-testid":"select-button",$disabled:o,native:r,tabIndex:-1,variant:g==="flat"?"flat":"raised"},R.createElement(ey,{"data-testid":"select-icon",$disabled:o})),[o,r,g]),V=w.useMemo(()=>g==="flat"?Pv:Fv,[g]);return w.useMemo(()=>({isEnabled:lt,options:U,value:K,setValue:I,wrapperProps:Z,DropdownButton:W,Wrapper:V}),[W,V,lt,U,I,K,Z])},uy={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},iy=1e3,cy=({onBlur:n,onChange:c,onClose:o,onFocus:r,onKeyDown:d,onMouseDown:m,onOpen:y,open:z,options:x,readOnly:g,value:M,selectRef:j,setValue:U,wrapperRef:K})=>{const I=w.useRef(null),lt=w.useRef([]),Z=w.useRef(0),W=w.useRef(0),V=w.useRef(),Q=w.useRef("search"),tt=w.useRef(""),q=w.useRef(),[F,P]=ea({defaultValue:!1,onChange:y,onChangePropName:"onOpen",readOnly:g,value:z,valuePropName:"open"}),yt=w.useMemo(()=>{const $=x.findIndex(dt=>dt.value===M);return Z.current=Ea($,0,null),x[$]},[x,M]),[wt,Lt]=w.useState(x[0]),Ot=w.useCallback($=>{const dt=I.current,mt=lt.current[$];if(!mt||!dt){V.current=$;return}V.current=void 0;const Et=dt.clientHeight,Nt=dt.scrollTop,Vt=dt.scrollTop+Et,Kt=mt.offsetTop,ve=mt.offsetHeight,It=mt.offsetTop+mt.offsetHeight;Kt<Nt&&dt.scrollTo(0,Kt),It>Vt&&dt.scrollTo(0,Kt-Et+ve),mt.focus({preventScroll:!0})},[I]),pt=w.useCallback(($,{scroll:dt}={})=>{var mt;const Et=x.length-1;let Nt;switch($){case"first":{Nt=0;break}case"last":{Nt=Et;break}case"next":{Nt=Ea(W.current+1,0,Et);break}case"previous":{Nt=Ea(W.current-1,0,Et);break}case"selected":{Nt=Ea((mt=Z.current)!==null&&mt!==void 0?mt:0,0,Et);break}default:Nt=$}W.current=Nt,Lt(x[Nt]),dt&&Ot(Nt)},[W,x,Ot]),Ht=w.useCallback(({fromEvent:$})=>{P(!0),pt("selected",{scroll:!0}),y==null||y({fromEvent:$})},[pt,y,P]),Mt=w.useCallback(()=>{Q.current="search",tt.current="",clearTimeout(q.current)},[]),ut=w.useCallback(({focusSelect:$,fromEvent:dt})=>{var mt;o==null||o({fromEvent:dt}),P(!1),Lt(x[0]),Mt(),V.current=void 0,$&&((mt=j.current)===null||mt===void 0||mt.focus())},[Mt,o,x,j,P]),O=w.useCallback(({fromEvent:$})=>{F?ut({focusSelect:!1,fromEvent:$}):Ht({fromEvent:$})},[ut,Ht,F]),L=w.useCallback(($,{fromEvent:dt})=>{Z.current!==$&&(Z.current=$,U(x[$].value),c==null||c(x[$],{fromEvent:dt}))},[c,x,U]),X=w.useCallback(({focusSelect:$,fromEvent:dt})=>{L(W.current,{fromEvent:dt}),ut({focusSelect:$,fromEvent:dt})},[ut,L]),it=w.useCallback(($,{fromEvent:dt,select:mt})=>{var Et;switch(Q.current==="cycleFirstLetter"&&$!==tt.current&&(Q.current="search"),$===tt.current?Q.current="cycleFirstLetter":tt.current+=$,Q.current){case"search":{let Nt=x.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf(tt.current))===0});Nt<0&&(Nt=x.findIndex(Vt=>{var Kt;return((Kt=Vt.label)===null||Kt===void 0?void 0:Kt.toLocaleUpperCase().indexOf($))===0}),tt.current=$),Nt>=0&&(mt?L(Nt,{fromEvent:dt}):pt(Nt,{scroll:!0}));break}case"cycleFirstLetter":{const Nt=mt?(Et=Z.current)!==null&&Et!==void 0?Et:-1:W.current;let Vt=x.findIndex((Kt,ve)=>{var It;return ve>Nt&&((It=Kt.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf($))===0});Vt<0&&(Vt=x.findIndex(Kt=>{var ve;return((ve=Kt.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf($))===0})),Vt>=0&&(mt?L(Vt,{fromEvent:dt}):pt(Vt,{scroll:!0}));break}}clearTimeout(q.current),q.current=setTimeout(()=>{Q.current==="search"&&(tt.current="")},iy)},[pt,x,L]),b=w.useCallback($=>{var dt;$.button===0&&($.preventDefault(),(dt=j.current)===null||dt===void 0||dt.focus(),O({fromEvent:$}),m==null||m($))},[m,j,O]),_=w.useCallback($=>{X({focusSelect:!0,fromEvent:$})},[X]),G=w.useCallback($=>{const{altKey:dt,code:mt,ctrlKey:Et,metaKey:Nt,shiftKey:Vt}=$,{ARROW_DOWN:Kt,ARROW_UP:ve,END:It,ENTER:rl,ESC:Xe,HOME:Ma,SPACE:Dl,TAB:la}=uy,Rn=dt||Et||Nt||Vt;if(!(mt===la&&(dt||Et||Nt)||mt!==la&&Rn))switch(mt){case Kt:{if($.preventDefault(),!F){Ht({fromEvent:$});return}pt("next",{scroll:!0});break}case ve:{if($.preventDefault(),!F){Ht({fromEvent:$});return}pt("previous",{scroll:!0});break}case It:{if($.preventDefault(),!F){Ht({fromEvent:$});return}pt("last",{scroll:!0});break}case rl:{if(!F)return;$.preventDefault(),X({focusSelect:!0,fromEvent:$});break}case Xe:{if(!F)return;$.preventDefault(),ut({focusSelect:!0,fromEvent:$});break}case Ma:{if($.preventDefault(),!F){Ht({fromEvent:$});return}pt("first",{scroll:!0});break}case Dl:{$.preventDefault(),F?X({focusSelect:!0,fromEvent:$}):Ht({fromEvent:$});break}case la:{if(!F)return;Vt||$.preventDefault(),X({focusSelect:!Vt,fromEvent:$});break}default:!Rn&&mt.match(/^Key/)&&($.preventDefault(),$.stopPropagation(),it(mt.replace(/^Key/,""),{select:!F,fromEvent:$}))}},[pt,ut,F,Ht,it,X]),B=w.useCallback($=>{G($),d==null||d($)},[G,d]),Y=w.useCallback($=>{pt($)},[pt]),at=w.useCallback($=>{F||(Mt(),n==null||n($))},[Mt,n,F]),J=w.useCallback($=>{Mt(),r==null||r($)},[Mt,r]),st=w.useCallback($=>{I.current=$,V.current!==void 0&&Ot(V.current)},[Ot]),ht=w.useCallback(($,dt)=>{lt.current[dt]=$,V.current===dt&&Ot(V.current)},[Ot]);return w.useEffect(()=>{if(!F)return()=>{};const $=dt=>{var mt;const Et=dt.target;!((mt=K.current)===null||mt===void 0)&&mt.contains(Et)||(dt.preventDefault(),ut({focusSelect:!1,fromEvent:dt}))};return document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}},[ut,F,K]),w.useMemo(()=>({activeOption:wt,handleActivateOptionIndex:Y,handleBlur:at,handleButtonKeyDown:B,handleDropdownKeyDown:G,handleFocus:J,handleMouseDown:b,handleOptionClick:_,handleSetDropdownRef:st,handleSetOptionRef:ht,open:F,selectedOption:yt}),[wt,Y,at,B,J,G,b,_,st,ht,F,yt])},ry=w.forwardRef(({className:n,defaultValue:c,disabled:o,onChange:r,options:d,readOnly:m,style:y,value:z,variant:x,width:g,...M},j)=>{const{isEnabled:U,options:K,setValue:I,value:lt,DropdownButton:Z,Wrapper:W}=jp({defaultValue:c,disabled:o,native:!0,onChange:r,options:d,readOnly:m,value:z,variant:x}),V=w.useCallback(Q=>{const tt=K.find(q=>q.value===Q.target.value);tt&&(I(tt.value),r==null||r(tt,{fromEvent:Q}))},[r,K,I]);return R.createElement(W,{className:n,style:{...y,width:g}},R.createElement(bs,null,R.createElement(ty,{...M,disabled:o,onChange:U?V:Oa,ref:j,value:lt},K.map((Q,tt)=>{var q;return R.createElement("option",{key:`${Q.value}-${tt}`,value:Q.value},(q=Q.label)!==null&&q!==void 0?q:Q.value)})),Z))});ry.displayName="SelectNative";function oy({activateOptionIndex:n,active:c,index:o,onClick:r,option:d,selected:m,setRef:y}){const z=w.useCallback(()=>{n(o)},[n,o]),x=w.useCallback(M=>{y(M,o)},[o,y]),g=Dp();return R.createElement(ay,{active:c,"aria-selected":m?"true":void 0,"data-value":d.value,id:g,onClick:r,onMouseEnter:z,ref:x,role:"option",tabIndex:0},d.label)}function sy({"aria-label":n,"aria-labelledby":c,className:o,defaultValue:r,disabled:d=!1,formatDisplay:m,inputProps:y,labelId:z,menuMaxHeight:x,name:g,onBlur:M,onChange:j,onClose:U,onFocus:K,onKeyDown:I,onMouseDown:lt,onOpen:Z,open:W,options:V,readOnly:Q,shadow:tt=!0,style:q,variant:F="default",value:P,width:yt="auto",...wt},Lt){const{isEnabled:Ot,options:pt,setValue:Ht,value:Mt,wrapperProps:ut,DropdownButton:O,Wrapper:L}=jp({className:o,defaultValue:r,disabled:d,native:!1,onChange:j,options:V,style:q,readOnly:Q,value:P,variant:F,width:yt}),X=w.useRef(null),it=w.useRef(null),b=w.useRef(null),{activeOption:_,handleActivateOptionIndex:G,handleBlur:B,handleButtonKeyDown:Y,handleDropdownKeyDown:at,handleFocus:J,handleMouseDown:st,handleOptionClick:ht,handleSetDropdownRef:$,handleSetOptionRef:dt,open:mt,selectedOption:Et}=cy({onBlur:M,onChange:j,onClose:U,onFocus:K,onKeyDown:I,onMouseDown:lt,onOpen:Z,open:W,options:pt,value:Mt,selectRef:it,setValue:Ht,wrapperRef:b});w.useImperativeHandle(Lt,()=>({focus:rl=>{var Xe;(Xe=it.current)===null||Xe===void 0||Xe.focus(rl)},node:X.current,value:String(Mt)}),[Mt]);const Nt=w.useMemo(()=>Et?typeof m=="function"?m(Et):Et.label:"",[m,Et]),Vt=Ot?1:void 0,Kt=w.useMemo(()=>x?{overflow:"auto",maxHeight:x}:void 0,[x]),ve=Dp(),It=w.useMemo(()=>pt.map((rl,Xe)=>{const Ma=`${Mt}-${Xe}`,Dl=rl===_,la=rl===Et;return R.createElement(oy,{activateOptionIndex:G,active:Dl,index:Xe,key:Ma,onClick:ht,option:rl,selected:la,setRef:dt})}),[_,G,ht,dt,pt,Et,Mt]);return R.createElement(L,{...ut,$disabled:d,ref:b,shadow:tt,style:{...q,width:yt}},R.createElement("input",{name:g,ref:X,type:"hidden",value:String(Mt),...y}),R.createElement(bs,{"aria-disabled":d,"aria-expanded":mt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??z,"aria-owns":Ot&&mt?ve:void 0,onBlur:B,onFocus:J,onKeyDown:Y,onMouseDown:Ot?st:lt,ref:it,role:"button",tabIndex:Vt,...wt},R.createElement(Iv,null,Nt),O),Ot&&mt&&R.createElement(ly,{id:ve,onKeyDown:at,ref:$,role:"listbox",style:Kt,tabIndex:0,variant:F},It))}const gs=w.forwardRef(sy);gs.displayName="Select";const fy=H.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,An=w.forwardRef(function({children:c,noPadding:o=!1,...r},d){return R.createElement(fy,{noPadding:o,ref:d,...r},c)});An.displayName="Toolbar";const dy=H.div`
  padding: 16px;
`,_e=w.forwardRef(function({children:c,...o},r){return R.createElement(dy,{ref:r,...o},c)});_e.displayName="WindowContent";const hy=H.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?et`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:et`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${yc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,al=w.forwardRef(function({active:c=!0,children:o,...r},d){return R.createElement(hy,{active:c,ref:d,...r},o)});al.displayName="WindowHeader";const py=H.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Zt({style:"window"})}
  ${Ie()}
`,my=H.span`
  ${({theme:n})=>et`
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
`,nl=w.forwardRef(({children:n,resizable:c=!1,resizeRef:o,shadow:r=!0,...d},m)=>R.createElement(py,{ref:m,shadow:r,...d},n,c&&R.createElement(my,{"data-testid":"resizeHandle",ref:o})));nl.displayName="Window";const by=H(Ta)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,gy=H.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,vy=H.div`
  display: flex;
  flex-wrap: wrap;
`,Tl=H.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,yy=H.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,xy=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Ay(n,c){return new Date(n,c+1,0).getDate()}function Sy(n,c,o){return new Date(n,c,o).getDay()}function Ey(n){const c=new Date(Date.parse(n)),o=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:o,month:r,year:d}}const Ty=w.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:o,onCancel:r,shadow:d=!0},m)=>{const[y,z]=w.useState(()=>Ey(c)),{year:x,month:g,day:M}=y,j=w.useCallback(({value:Z})=>{z(W=>({...W,month:Z}))},[]),U=w.useCallback(Z=>{z(W=>({...W,year:Z}))},[]),K=w.useCallback(Z=>{z(W=>({...W,day:Z}))},[]),I=w.useCallback(()=>{const Z=[y.year,y.month+1,y.day].map(W=>String(W).padStart(2,"0")).join("-");o==null||o(Z)},[y.day,y.month,y.year,o]),lt=w.useMemo(()=>{const Z=Array.from({length:42}),W=Sy(x,g,1);let V=M;const Q=Ay(x,g);return V=V<Q?V:Q,Z.forEach((tt,q)=>{if(q>=W&&q<Q+W){const F=q-W+1;Z[q]=R.createElement(Tl,{key:q,onClick:()=>{K(F)}},R.createElement(yy,{active:F===V},F))}else Z[q]=R.createElement(Tl,{key:q})}),Z},[M,K,g,x]);return R.createElement(nl,{className:n,ref:m,shadow:d,style:{margin:20}},R.createElement(al,null,R.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),R.createElement(_e,null,R.createElement(An,{noPadding:!0,style:{justifyContent:"space-between"}},R.createElement(gs,{options:xy,value:g,onChange:j,width:128,menuMaxHeight:200}),R.createElement(wp,{value:x,onChange:U,width:100})),R.createElement(by,null,R.createElement(gy,null,R.createElement(Tl,null,"S"),R.createElement(Tl,null,"M"),R.createElement(Tl,null,"T"),R.createElement(Tl,null,"W"),R.createElement(Tl,null,"T"),R.createElement(Tl,null,"F"),R.createElement(Tl,null,"S")),R.createElement(vy,null,lt)),R.createElement(An,{noPadding:!0,style:{justifyContent:"space-between"}},R.createElement(ae,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),R.createElement(ae,{fullWidth:!0,onClick:o?I:void 0,disabled:!o},"OK"))))});Ty.displayName="DatePicker";const wy=n=>{switch(n){case"status":case"well":return et`
        ${Zt({style:"status"})}
      `;case"window":case"outside":return et`
        ${Zt({style:"window"})}
      `;case"field":return et`
        ${Zt({style:"field"})}
      `;default:return et`
        ${Zt()}
      `}},Dy=H.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>wy(n)}
  ${({variant:n})=>Ie(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,nc=w.forwardRef(({children:n,shadow:c=!1,variant:o="window",...r},d)=>R.createElement(Dy,{ref:d,shadow:c,variant:o,...r},n));nc.displayName="Frame";const zy=H.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&et`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&We()}
`,Ry=H.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,Oy=w.forwardRef(({label:n,disabled:c=!1,variant:o="default",children:r,...d},m)=>R.createElement(zy,{"aria-disabled":c,$disabled:c,variant:o,ref:m,...d},n&&R.createElement(Ry,{variant:o},n),r));Oy.displayName="GroupBox";const uc=H.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${ta(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;uc.displayName="Handle";const My="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",jy=H.div`
  display: inline-block;
  height: ${({size:n})=>ta(n)};
  width: ${({size:n})=>ta(n)};
`,Cy=H.span`
  display: block;
  background: ${My};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ny=w.forwardRef(({size:n=30,...c},o)=>R.createElement(jy,{size:n,ref:o,...c},R.createElement(Cy,null)));Ny.displayName="Hourglass";const _y=H.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,By=H.div`
  position: relative;
`,ky=H.div`
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
`,Uy=H(cl).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Hy=H.div`
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
`,$y=w.forwardRef(({backgroundStyles:n,children:c,...o},r)=>R.createElement(_y,{ref:r,...o},R.createElement(By,null,R.createElement(ky,null,R.createElement(Uy,{style:n},c)),R.createElement(Hy,null))));$y.displayName="Monitor";const Qy=H.div`
  display: inline-block;
  height: ${he.md};
  width: 100%;
`,Ly=H(cl)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Cp=et`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Yy=H.div`
  position: relative;
  top: 4px;
  ${Cp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Gy=H.div`
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
`,qy=H.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Np=17,Xy=H.span`
  display: inline-block;
  width: ${Np}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,dc=w.forwardRef(({hideValue:n=!1,shadow:c=!0,value:o,variant:r="default",...d},m)=>{const y=n?null:`${o}%`,z=w.useRef(null),[x,g]=w.useState([]),M=w.useCallback(()=>{if(!z.current||o===void 0)return;const j=z.current.getBoundingClientRect().width,U=Math.round(o/100*j/Np);g(Array.from({length:U}))},[o]);return w.useEffect(()=>(M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)),[M]),R.createElement(Qy,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:m,role:"progressbar",variant:r,...d},R.createElement(Ly,{variant:r,shadow:c},r==="default"?R.createElement(R.Fragment,null,R.createElement(Yy,{"data-testid":"defaultProgress1"},y),R.createElement(Gy,{"data-testid":"defaultProgress2",value:o},y)):R.createElement(qy,{ref:z,"data-testid":"tileProgress"},x.map((j,U)=>R.createElement(Xy,{key:U})))))});dc.displayName="ProgressBar";const _p=et`
  width: ${il}px;
  height: ${il}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Zy=H(cl)`
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
`,Vy=H.div`
  ${Ra()}
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
`,Ky=H.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Jy={flat:Vy,default:Zy},Wy=w.forwardRef(({checked:n,className:c="",disabled:o=!1,label:r="",onChange:d,style:m={},variant:y="default",...z},x)=>{const g=Jy[y];return R.createElement(hs,{$disabled:o,className:c,style:m},R.createElement(g,{$disabled:o,role:"presentation"},n&&R.createElement(Ky,{$disabled:o,variant:y})),R.createElement(fc,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:x,...z}),r&&R.createElement(ps,null,r))});Wy.displayName="Radio";const Iy=typeof window<"u"?w.useLayoutEffect:w.useEffect;function Aa(n){const c=w.useRef(n);return Iy(()=>{c.current=n}),w.useCallback((...o)=>(0,c.current)(...o),[])}function k0(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function U0(n,c){return w.useMemo(()=>n==null&&c==null?null:o=>{k0(n,o),k0(c,o)},[n,c])}var Fy=V0();let xc=!0,ls=!1,H0;const Py={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function t1(n){if("type"in n){const{type:c,tagName:o}=n;if(o==="INPUT"&&Py[c]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function e1(n){n.metaKey||n.altKey||n.ctrlKey||(xc=!0)}function Go(){xc=!1}function l1(){this.visibilityState==="hidden"&&ls&&(xc=!0)}function a1(n){n.addEventListener("keydown",e1,!0),n.addEventListener("mousedown",Go,!0),n.addEventListener("pointerdown",Go,!0),n.addEventListener("touchstart",Go,!0),n.addEventListener("visibilitychange",l1,!0)}function n1(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return xc||t1(c)}function u1(){ls=!0,window.clearTimeout(H0),H0=window.setTimeout(()=>{ls=!1},100)}function i1(){const n=w.useCallback(c=>{const o=Fy.findDOMNode(c);o!=null&&a1(o.ownerDocument)},[]);return{isFocusVisible:n1,onBlurVisible:u1,ref:n}}function c1(n,c,o){return(o-c)*n+c}function Ii(n,c){if(c!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const r=n.changedTouches[o];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Fi(n){return n&&n.ownerDocument||document}function r1(n,c){var o;const{index:r}=(o=n.reduce((d,m,y)=>{const z=Math.abs(c-m);return d===null||z<d.distance||z===d.distance?{distance:z,index:y}:d},null))!==null&&o!==void 0?o:{};return r??-1}const o1=H.div`
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

  ${({orientation:n,size:c})=>n==="vertical"?et`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:et`
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
`,Bp=()=>et`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?et`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:et`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,s1=H(cl)`
  ${Bp()}
`,f1=H(cl)`
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
`,d1=H.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?et`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:et`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?et`
          ${Ra()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:et`
          ${Ie()}
          ${Zt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&_u({mainColor:c.material,secondaryColor:c.borderLightest})}
`,xn=6,h1=H.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?et`
          right: ${-xn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${xn}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:et`
          bottom: ${-xn}px;
          height: ${xn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&et`
      ${We()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}
`,p1=H.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?et`
          transform: translate(${xn+2}px, ${xn+1}px);
        `:et`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,m1=w.forwardRef(({defaultValue:n,disabled:c=!1,marks:o=!1,max:r=100,min:d=0,name:m,onChange:y,onChangeCommitted:z,onMouseDown:x,orientation:g="horizontal",size:M="100%",step:j=1,value:U,variant:K="default",...I},lt)=>{const Z=K==="flat"?f1:s1,W=g==="vertical",[V=d,Q]=ea({defaultValue:n,onChange:y??z,value:U}),{isFocusVisible:tt,onBlurVisible:q,ref:F}=i1(),[P,yt]=w.useState(!1),wt=w.useRef(),Lt=w.useRef(null),Ot=U0(F,wt),pt=U0(lt,Ot),Ht=Aa(B=>{tt(B)&&yt(!0)}),Mt=Aa(()=>{P!==!1&&(yt(!1),q())}),ut=w.useRef(),O=w.useMemo(()=>o===!0&&Number.isFinite(j)?[...Array(Math.round((r-d)/j)+1)].map((B,Y)=>({label:void 0,value:d+j*Y})):Array.isArray(o)?o:[],[o,r,d,j]),L=Aa(B=>{const Y=(r-d)/10,at=O.map(ht=>ht.value),J=at.indexOf(V);let st=0;switch(B.key){case"Home":st=d;break;case"End":st=r;break;case"PageUp":j&&(st=V+Y);break;case"PageDown":j&&(st=V-Y);break;case"ArrowRight":case"ArrowUp":j?st=V+j:st=at[J+1]||at[at.length-1];break;case"ArrowLeft":case"ArrowDown":j?st=V-j:st=at[J-1]||at[0];break;default:return}B.preventDefault(),j&&(st=N0(st,j,d)),st=Ea(st,d,r),Q(st),yt(!0),y==null||y(st),z==null||z(st)}),X=w.useCallback(B=>{if(!wt.current)return 0;const Y=wt.current.getBoundingClientRect();let at;W?at=(Y.bottom-B.y)/Y.height:at=(B.x-Y.left)/Y.width;let J;if(J=c1(at,d,r),j)J=N0(J,j,d);else{const st=O.map($=>$.value),ht=r1(st,J);J=st[ht]}return J=Ea(J,d,r),J},[O,r,d,j,W]),it=Aa(B=>{var Y;const at=Ii(B,ut.current);if(!at)return;const J=X(at);(Y=Lt.current)===null||Y===void 0||Y.focus(),Q(J),yt(!0),y==null||y(J)}),b=Aa(B=>{const Y=Ii(B,ut.current);if(!Y)return;const at=X(Y);z==null||z(at),ut.current=void 0;const J=Fi(wt.current);J.removeEventListener("mousemove",it),J.removeEventListener("mouseup",b),J.removeEventListener("touchmove",it),J.removeEventListener("touchend",b)}),_=Aa(B=>{var Y;x==null||x(B),B.preventDefault(),(Y=Lt.current)===null||Y===void 0||Y.focus(),yt(!0);const at=Ii(B,ut.current);if(at){const st=X(at);Q(st),y==null||y(st)}const J=Fi(wt.current);J.addEventListener("mousemove",it),J.addEventListener("mouseup",b)}),G=Aa(B=>{var Y;B.preventDefault();const at=B.changedTouches[0];at!=null&&(ut.current=at.identifier),(Y=Lt.current)===null||Y===void 0||Y.focus(),yt(!0);const J=Ii(B,ut.current);if(J){const ht=X(J);Q(ht),y==null||y(ht)}const st=Fi(wt.current);st.addEventListener("touchmove",it),st.addEventListener("touchend",b)});return w.useEffect(()=>{const{current:B}=wt;B==null||B.addEventListener("touchstart",G);const Y=Fi(B);return()=>{B==null||B.removeEventListener("touchstart",G),Y.removeEventListener("mousemove",it),Y.removeEventListener("mouseup",b),Y.removeEventListener("touchmove",it),Y.removeEventListener("touchend",b)}},[b,it,G]),R.createElement(o1,{$disabled:c,hasMarks:!!O.length,isFocused:P,onMouseDown:_,orientation:g,ref:pt,size:ta(M),...I},R.createElement("input",{disabled:c,name:m,type:"hidden",value:V??0}),O&&O.map(B=>R.createElement(h1,{$disabled:c,"data-testid":"tick",key:B.value/(r-d)*100,orientation:g,style:{[W?"bottom":"left"]:`${(B.value-d)/(r-d)*100}%`}},B.label&&R.createElement(p1,{"aria-hidden":!0,"data-testid":"mark",orientation:g},B.label))),R.createElement(Z,{orientation:g,variant:K}),R.createElement(d1,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":g,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":V,onBlur:Mt,onFocus:Ht,onKeyDown:L,orientation:g,ref:Lt,role:"slider",style:{[W?"bottom":"left"]:`${(W?-100:0)+100*(V-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:K}))});m1.displayName="Slider";const b1=H.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${fs};
  overflow-y: auto;
`,g1=w.forwardRef(function({children:c,...o},r){return R.createElement(b1,{ref:r,...o},c)});g1.displayName="TableBody";const v1=H.td`
  padding: 0 8px;
`,y1=w.forwardRef(function({children:c,...o},r){return R.createElement(v1,{ref:r,...o},c)});y1.displayName="TableDataCell";const x1=H.thead`
  display: table-header-group;
`,A1=w.forwardRef(function({children:c,...o},r){return R.createElement(x1,{ref:r,...o},c)});A1.displayName="TableHead";const S1=H.th`
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
    ${Zt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&et`
      &:active {
        &:before {
          ${Zt({invert:!0,style:"window"})}
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
  ${({$disabled:n})=>n&&We()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&We()}
  }
`,E1=w.forwardRef(function({disabled:c=!1,children:o,onClick:r,onTouchStart:d=Oa,sort:m,...y},z){const x=m==="asc"?"ascending":m==="desc"?"descending":void 0;return R.createElement(S1,{$disabled:c,"aria-disabled":c,"aria-sort":x,onClick:c?void 0:r,onTouchStart:c?void 0:d,ref:z,...y},R.createElement("div",null,o))});E1.displayName="TableHeadCell";const T1=H.tr`
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
`,w1=w.forwardRef(function({children:c,...o},r){return R.createElement(T1,{ref:r,...o},c)});w1.displayName="TableRow";const D1=H.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,z1=H(cl)`
  &:before {
    box-shadow: none;
  }
`,R1=w.forwardRef(({children:n,...c},o)=>R.createElement(z1,null,R.createElement(D1,{ref:o,...c},n)));R1.displayName="Table";const O1=H.button`
  ${Ie()}
  ${Zt()}
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
`,M1=w.forwardRef(({value:n,onClick:c,selected:o=!1,children:r,...d},m)=>R.createElement(O1,{"aria-selected":o,selected:o,onClick:y=>c==null?void 0:c(n,y),ref:m,role:"tab",...d},r));M1.displayName="Tab";const j1=H.div`
  ${Ie()}
  ${Zt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,C1=w.forwardRef(({children:n,...c},o)=>R.createElement(j1,{ref:o,...c},n));C1.displayName="TabBody";const N1=H.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,_1=H.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function B1(n,c){const o=[];for(let r=c;r>0;r-=1)o.push(n.splice(0,Math.ceil(n.length/r)));return o}const k1=w.forwardRef(({value:n,onChange:c=Oa,children:o,rows:r=1,...d},m)=>{const y=w.useMemo(()=>{var z;const x=(z=R.Children.map(o,j=>{if(!R.isValidElement(j))return null;const U={selected:j.props.value===n,onClick:c};return R.cloneElement(j,U)}))!==null&&z!==void 0?z:[],g=B1(x,r).map((j,U)=>({key:U,tabs:j})),M=g.findIndex(j=>j.tabs.some(U=>U.props.selected));return g.push(g.splice(M,1)[0]),g},[o,c,r,n]);return R.createElement(N1,{...d,isMultiRow:r>1,role:"tablist",ref:m},y.map(z=>R.createElement(_1,{key:z.key},z.tabs)))});k1.displayName="Tabs";const U1=["blur","focus"],H1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function $0(n){return"nativeEvent"in n&&U1.includes(n.type)}function Q0(n){return"nativeEvent"in n&&H1.includes(n.type)}const $1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Q1=H.span`
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
`,L1=H.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,ic=w.forwardRef(({className:n,children:c,disableFocusListener:o=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:m=0,onBlur:y,onClose:z,onFocus:x,onMouseEnter:g,onMouseLeave:M,onOpen:j,style:U,text:K,position:I="top",...lt},Z)=>{const[W,V]=w.useState(!1),[Q,tt]=w.useState(),[q,F]=w.useState(),P=!o,yt=!r,wt=X=>{window.clearTimeout(Q),window.clearTimeout(q);const it=window.setTimeout(()=>{V(!0),j==null||j(X)},d);tt(it)},Lt=X=>{X.persist(),$0(X)?x==null||x(X):Q0(X)&&(g==null||g(X)),wt(X)},Ot=X=>{window.clearTimeout(Q),window.clearTimeout(q);const it=window.setTimeout(()=>{V(!1),z==null||z(X)},m);F(it)},pt=X=>{X.persist(),$0(X)?y==null||y(X):Q0(X)&&(M==null||M(X)),Ot(X)},Ht=P?pt:void 0,Mt=P?Lt:void 0,ut=yt?Lt:void 0,O=yt?pt:void 0,L=P?0:void 0;return R.createElement(L1,{"data-testid":"tooltip-wrapper",onBlur:Ht,onFocus:Mt,onMouseEnter:ut,onMouseLeave:O,tabIndex:L},R.createElement(Q1,{className:n,"data-testid":"tooltip",position:I,ref:Z,show:W,style:U,...lt},K),c)});ic.displayName="Tooltip";const as=H(ps)`
  white-space: nowrap;
`,kp=et`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":et`
          cursor: pointer;

          :focus {
            ${as} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,Y1=H.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&et`
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
`,G1=H.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?et`
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
        `:et`
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
`,q1=H.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,X1=H.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${kp};

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
`,L0=H(hs)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${kp};
`,Z1=H.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Y0(n,c){return n.includes(c)?n.filter(o=>o!==c):[...n,c]}function G0(n){n.preventDefault()}function Up({className:n,disabled:c,expanded:o,innerRef:r,level:d,select:m,selected:y,style:z,tree:x=[]}){const g=d===0,M=w.useCallback(j=>{var U,K;const I=!!(j.items&&j.items.length>0),lt=o.includes(j.id),Z=(U=c||j.disabled)!==null&&U!==void 0?U:!1,W=Z?G0:q=>m(q,j),V=Z?G0:q=>m(q,j),Q=y===j.id,tt=R.createElement(Z1,{"aria-hidden":!0},j.icon);return R.createElement(G1,{key:j.label,isRootLevel:g,role:"treeitem","aria-expanded":lt,"aria-selected":Q,hasItems:I},I?R.createElement(q1,{open:lt},R.createElement(X1,{onClick:W,$disabled:Z},R.createElement(L0,{$disabled:Z},tt,R.createElement(as,null,j.label))),lt&&R.createElement(Up,{className:n,disabled:Z,expanded:o,level:d+1,select:m,selected:y,style:z,tree:(K=j.items)!==null&&K!==void 0?K:[]})):R.createElement(L0,{as:"button",$disabled:Z,onClick:V},tt,R.createElement(as,null,j.label)))},[n,c,o,g,d,m,y,z]);return R.createElement(Y1,{className:g?n:void 0,style:g?z:void 0,ref:g?r:void 0,role:g?"tree":"group",isRootLevel:g},x.map(M))}function V1({className:n,defaultExpanded:c=[],defaultSelected:o,disabled:r=!1,expanded:d,onNodeSelect:m,onNodeToggle:y,selected:z,style:x,tree:g=[]},M){const[j,U]=ea({defaultValue:c,onChange:y,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[K,I]=ea({defaultValue:o,onChange:m,onChangePropName:"onNodeSelect",value:z,valuePropName:"selected"}),lt=w.useCallback((V,Q)=>{if(y){const tt=Y0(j,Q);y(V,tt)}U(tt=>Y0(tt,Q))},[j,y,U]),Z=w.useCallback((V,Q)=>{I(Q),m&&m(V,Q)},[m,I]),W=w.useCallback((V,Q)=>{V.preventDefault(),Z(V,Q.id),Q.items&&Q.items.length&&lt(V,Q.id)},[Z,lt]);return R.createElement(Up,{className:n,disabled:r,expanded:j,level:0,innerRef:M,select:W,selected:K,style:x,tree:g})}const K1=w.forwardRef(V1);K1.displayName="TreeView";const J1="/95-Portfolio/assets/ms_sans_serif-Du8rjN1q.woff2",W1="/95-Portfolio/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var qo,q0;function I1(){if(q0)return qo;q0=1;var n={name:"blue",anchor:"rgb(0, 0, 128)",anchorVisited:"rgb(0, 0, 128)",borderDark:"rgb(49, 131, 221)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(166, 202, 240)",borderLightest:"rgb(211, 228, 248)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(49, 131, 221)",canvasTextDisabledShadow:"rgb(211, 228, 248)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(49, 131, 221)",desktopBackground:"rgb(58, 110, 165)",flatDark:"rgb(49, 131, 221)",flatLight:"rgb(166, 202, 240)",focusSecondary:"rgb(211, 228, 248)",headerBackground:"linear-gradient(to right, rgb(0, 0, 128), rgb(16, 132, 208))",headerNotActiveBackground:"linear-gradient(to right, rgb(49, 131, 221), rgb(49, 131, 221))",headerNotActiveText:"rgb(0, 0, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(51, 153, 255)",material:"rgb(166, 202, 240)",materialDark:"rgb(49, 131, 221)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(49, 131, 221)",materialTextDisabledShadow:"rgb(211, 228, 248)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(51, 153, 255)",tooltip:"rgb(225, 225, 255)"};return qo=n,qo}var F1=I1();const X0=Z0(F1);function P1({onReboot:n}){const[c,o]=w.useState(0);return w.useEffect(()=>{const r=setInterval(()=>{o(d=>d>=100?(clearInterval(r),setTimeout(n,1500),100):d+1)},30);return()=>{clearInterval(r)}},[n]),h.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"#0000AA",color:"white",fontFamily:"monospace",padding:"20px",zIndex:9999,lineHeight:"1.2"},children:[h.jsx("p",{children:"A problem has been detected and Windows has been shut down to prevent damage to your computer."}),h.jsx("br",{}),h.jsx("p",{children:"PORTFOLIO_CRASH_LOL"}),h.jsx("br",{}),h.jsx("p",{children:"If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:"}),h.jsx("br",{}),h.jsx("p",{children:"Check to be sure you have adequate disk space. If a driver is identified in the stop message, disable the driver or check with the manufacturer for driver updates. Try changing video adapters."}),h.jsx("br",{}),h.jsx("p",{children:"Check with your hardware vendor for any BIOS updates. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode."}),h.jsx("br",{}),h.jsx("p",{children:"Technical information:"}),h.jsx("br",{}),h.jsx("p",{children:"*** STOP: 0x000000FE (0x00000008, 0x00000006, 0x00000009, 0x84C6657C)"}),h.jsx("br",{}),h.jsx("p",{children:"***   just_kidding.sys - Address 84C6657C base at 84C66000, DateStamp 48025c27"}),h.jsx("br",{}),h.jsx("p",{children:"Beginning dump of physical memory..."}),h.jsxs("p",{children:["Physical memory dump: ",c]}),c===100&&h.jsxs(h.Fragment,{children:[h.jsx("p",{children:"Physical memory dump complete."}),h.jsx("p",{children:"Contact your system administrator or technical support group for further assistance. Just kidding, rebooting now..."})]})]})}const tx="/95-Portfolio/assets/winxp-aEloBXO0.png",ex="/95-Portfolio/assets/psx_graphics-D5Raoe1Z.gif",lx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAD////AwMAAAIAAAP/jaa47AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAiklEQVQoz52QwQ3DIBAEQUoBrF0BujTAJQ3Ykgvwg/5bCZwjsRfLD2dfMBpYuBD+TQSQfvaOAJ7EL8Al6OtJtYAFEcmJQBO08BVNeC5kdOG90h2zWJIzWgYwJXOtcks4WiTzZ70Rj5ZhBExldBiYhf5qhuqLR7hgPLPnUSvcka1aEgmW/RKcZnwzH3+2Gx0TJwQiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAw5EF/4AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NjoyMC0wNDowMJUcx1wAAAAASUVORK5CYII=",ax="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEUAAACZmZnn59bMzMyGhoZmZmYEBATAwMD////q6ur/+/AAMzMAmZkAgIAAZmYzzMwzM5mZzP8AM5nMzP+ZmcwcHBzj4+MiIiJVVVWtqZAz/2YAgACWLo3QAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBBMBJCt84jxJAAABaUlEQVRIx5WV0XKDIBBFZRWFpBhrS03i//9nF4S6KCz2MM74cA8XDNGmoQie5oiAtgx0sj/lhzKYPwpCcWD+IAily7j5MwIU0DDkhJuGe56CgA33jw0ThxnNOI6c8MBxMtgGzE8JaNQapk/CXGtApi/CXGlI1jPPKJQbbpvwTUDBlhuCAPtxaJ1Q28ME0QDVWrZBpQ2gwAtXG8A3IBca/kZrDVJ7SvGIun+ZE6pPyWMD9bNk0uHybEOaDnl2SYYwxsEIY5aC8MO8A4KwLIkAZbzQSykWKjCvMSe4vKSCfLL4/NOSNfU8Pi93QVYReO0NAo8aHfi2boc4HC+3bdIgVJr3Z48aXkgb3u91nz+k43KyDeu6JvM7J+54E56FPRxXc2kP0UkE0oD53O/7InRpPnw54jfldIPnz9K8VkPPXXj8hP1nXtjree3ykqzfzcFdh7yGGjRf+Zxv0DwKQxWab0RXh+YbYS9A8r/yizreWBxUTwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNjo0My0wNDowMNV8Hl4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzY6NDMtMDQ6MDCkIabiAAAAAElFTkSuQmCC",nx="/95-Portfolio/assets/clippynew-CEUdfum9.gif",ux="/95-Portfolio/assets/clippy-C-IeEyKo.png",ix="/95-Portfolio/assets/granturismo-jbWZY7ai.gif",Hp="/95-Portfolio/assets/cursor95-DuPSQt5_.png",cx=n=>{const c=document.getElementById(n);c&&c.scrollIntoView({behavior:"smooth",block:"start"})};function rx({searchTerm:n,results:c,onClose:o}){return h.jsxs(nl,{style:{width:400,position:"fixed",top:"15%",left:"50%",transform:"translateX(-50%)",zIndex:101},children:[h.jsxs(al,{className:"flex justify-between items-center",children:[h.jsxs("span",{children:['Results for "',n,'"']}),h.jsx(ae,{size:"sm",onClick:o,style:{marginRight:"-6px",marginTop:"-5px"},children:h.jsx("span",{className:"close-icon"})})]}),h.jsx(_e,{children:c.length>0?h.jsx(Ta,{style:{height:"150px"},children:h.jsx("ul",{children:c.map(r=>h.jsx("li",{style:{marginBottom:"8px"},children:h.jsxs(ae,{onClick:()=>{cx(r.sectionId),o()},fullWidth:!0,children:["Found in: ",h.jsx("strong",{children:r.sectionTitle})]})},r.sectionId))})}):h.jsx("p",{children:"No results found."})})]})}const ox=[{id:"Projects",title:"Projects",content:"ShieldOps academic project CI/CD cybersecurity. PSX_GRAPHICS PlayStation 1 game development Psy-Q. ThreadTalk Reddit-inspired discussion platform."},{id:"About",title:"About Me",content:"Abdessalam Zarrouk tinkering with computers Dell Optiplex HP Compaq DC7600 Windows XP online gaming Counter-Strike 1.6 Minecraft. Dell Latitude E5450 programming Python C C++ Java web development. Hobbies BMW M3 E92 M3 GTR Assetto Corsa sim racing making beats Hip Hop 90s House."},{id:"Skills",title:"Skills",content:"Programming Languages: JavaScript React Node.js Python Java C C++ C# SQL. Web Development: Redux Tailwind CSS Styled-Components HTML5 CSS3 REST APIs. Database & Backend: Firebase Firestore Auth PostgreSQL MySQL MongoDB Express.js. Tools & Platforms: Git GitHub Docker Jenkins VS Code. Game Development: Psy-Q SDK ARMIPS mkpsxiso. Soft Skills: Problem Solving Team Collaboration."},{id:"Contact",title:"Contact Info",content:"Get In Touch email abdessalam.zarrouk@email.com LinkedIn GitHub"}],sx=n=>{if(!n)return[];const c=n.toLowerCase(),o=[];return ox.forEach(r=>{r.content.toLowerCase().includes(c)&&o.push({sectionId:r.id,sectionTitle:r.title})}),o},fx="/95-Portfolio/assets/computer-DTwMCg80.gif",dx="/95-Portfolio/assets/crash-CYQgwW5L.mp3",hx=fv`
  ${pv}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${J1}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${W1}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: rgb(127, 179, 235);
    margin: 0;
    padding-top: 150px;
    box-sizing: border-box;
    cursor: url(${Hp}) 16 16, auto; /* 16 16 = hotspot center of the cursor */
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
`;H.div`
  cursor: url(${Hp}), auto;

  /* enforce custom cursor on all children */
  * {
    cursor: inherit !important;
  }
`;function px({onComplete:n}){const[c,o]=w.useState(0),[r,d]=w.useState("");return w.useEffect(()=>{const m=setInterval(()=>{o(y=>{const z=Math.min(y+Math.random()*15,100);return z>=100&&(clearInterval(m),setTimeout(n,500)),z})},300);return()=>clearInterval(m)},[n]),w.useEffect(()=>{const m=setInterval(()=>{d(y=>y.length<3?y+".":"")},500);return()=>clearInterval(m)},[]),h.jsx("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgb(127, 179, 235)",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"ms_sans_serif, sans-serif",color:"black"},children:h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",transform:"translateY(-20%)"},children:[h.jsxs("div",{style:{fontSize:"18px",marginBottom:"16px"},children:[h.jsx("img",{src:"https://external-media.spacehey.net/media/sl7DuoYLeoWJ4jBmR7haKpN9OvPKoqCxZYtZAOJCMY1M=/https://blinkies.cafe/b/display/0222-construction.gif",alt:"construction.gif"}),"Loading",r]}),h.jsx(dc,{variant:"tile",value:Math.floor(c),style:{width:300}})]})})}function mx(){const[n,c]=R.useState(!1);return h.jsx("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:n?h.jsx("img",{src:nx}):h.jsx("img",{src:ux})})}function bx(){const[n,c]=w.useState(!1),[o,r]=w.useState(!0),[d,m]=w.useState(!1),[y,z]=R.useState(!0),[x,g]=w.useState({width:700,height:550}),M=(visualViewport.width-x.width)/2,j=(visualViewport.height-x.height)/2,[U,K]=w.useState({x:M,y:j}),[I,lt]=w.useState("p1"),Z=w.useRef({isDragging:!1,startX:0,startY:0}),[W,V]=w.useState(!1),Q=w.useRef(null),tt=w.useRef(null),[q,F]=w.useState(""),[P,yt]=w.useState([]),[wt,Lt]=w.useState(!1),Ot=ut=>{if(ut.key==="Enter"&&ut.target.value){const O=ut.target.value;F(O),yt(sx(O)),Lt(!0),ut.target.value=""}},pt=()=>{V(!1),tt.current&&(tt.current.currentTime=0,tt.current.play()),m(!0)};w.useEffect(()=>{Q.current&&(W?(Q.current.muted=!1,Q.current.play().catch(()=>{})):Q.current.pause())},[W]),w.useEffect(()=>{const ut=L=>{if(Z.current.isDragging){const X=L.clientX-Z.current.startX,it=L.clientY-Z.current.startY;K(b=>({x:b.x+X,y:b.y+it})),Z.current.startX=L.clientX,Z.current.startY=L.clientY}},O=()=>{Z.current.isDragging=!1};return window.addEventListener("mousemove",ut),window.addEventListener("mouseup",O),()=>{window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",O)}},[]);const Ht=[{label:"Me",value:"p1"},{label:"Hobbies",value:"p2"}],Mt=ut=>{lt(ut.value)};return h.jsxs(h.Fragment,{children:[h.jsx(hx,{}),d&&h.jsx(P1,{onReboot:()=>{m(!1),r(!0)}}),o?h.jsx(M0,{theme:X0,children:h.jsx(px,{onComplete:()=>r(!1)})}):h.jsxs(M0,{theme:X0,children:[h.jsx(yp,{className:"fixed top-0 left-0 w-full z-50",children:h.jsxs(An,{className:"flex justify-between px-4",children:[h.jsxs("div",{className:"relative inline-block",children:[h.jsxs(ae,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:[h.jsx("img",{src:tx,alt:"win xp logo",className:"h-5 mr-1"}),"Start"]}),n&&h.jsxs(xp,{style:{position:"absolute",left:0,top:"100%",zIndex:999,minWidth:"200px"},onClick:()=>c(!1),children:[h.jsx(Ou,{className:"flex items-center gap-2",onClick:()=>window.open("https://github.com/abdessalamzarrouk","_blank"),children:"GitHub Profile"}),h.jsx(Ou,{className:"flex items-center gap-2",onClick:()=>window.open("https://www.linkedin.com/in/abdessalam-zarrouk/","_blank"),children:"LinkedIn Profile"}),h.jsx(Ou,{onClick:()=>z(ut=>!ut),children:y?"Remove Stars":"Show Stars"}),h.jsx(Fl,{}),h.jsxs(Ou,{onClick:pt,children:[" ",h.jsx(ic,{text:"You are stuck here 🤷‍",enterDelay:100,leaveDelay:500,children:"Logout"})]})]})]}),h.jsx("a",{href:"#Projects",children:h.jsx(ae,{variant:"menu",children:"Current Projects"})}),h.jsx(uc,{size:38}),h.jsx("a",{href:"#About",children:h.jsx(ae,{variant:"menu",children:"About Me"})}),h.jsx(uc,{size:38}),h.jsx("a",{href:"#Skills",children:h.jsx(ae,{variant:"menu",children:"Skills"})}),h.jsx(uc,{size:38}),h.jsx("a",{href:"#Contact",children:h.jsx(ae,{variant:"menu",children:"Contact info"})}),h.jsx(ms,{placeholder:"Search...",width:150,onKeyDown:Ot})]})}),wt&&h.jsx(rx,{searchTerm:q,results:P,onClose:()=>Lt(!1)}),h.jsx(hv,{enabled:y}),h.jsx("audio",{ref:tt,src:dx})," ",h.jsxs("main",{className:"w-full min-h-screen px-4 flex flex-col items-center bg-[rgb(127,179,235)]",children:[h.jsx("section",{className:"mb-10 w-full pt-5",children:h.jsxs("div",{className:"relative flex justify-center w-full items-center",children:[h.jsxs("div",{className:"max-w-2xl text-center",children:[h.jsx("h1",{className:"text-4xl font-bold underline mb-4",children:"Hi, I’m Abdessalam Zarrouk!"}),h.jsxs("h2",{className:"text-3xl font-bold mb-4 flex justify-center items-center gap-2",children:[h.jsx(ic,{text:"Hello !",enterDelay:100,leaveDelay:100,children:h.jsx("img",{src:lx,alt:"user logo",className:"h-8 "})}),"A passionate software engineer and lifelong learner"]}),h.jsxs("p",{className:"text-lg text-gray-700 flex justify-center items-center gap-2",children:[h.jsx("img",{src:ax,alt:"computer icon",className:"h-7"}),"I enjoy building creative projects, solving problems, and exploring new technologies. This portfolio showcases some of my work and interests."]})]}),h.jsx("div",{className:"absolute right-0 flex items-center h-full pr-40",children:h.jsx("img",{src:fx,alt:"Retro computer gif",style:{width:"120px"}})})]})}),h.jsx(Fl,{size:"1200px",className:"flex justify-center mb-4"}),h.jsx("h1",{className:"text-4xl font-bold mt-10",id:"Projects",children:"Current Projects :"}),h.jsx("section",{className:"w-full flex justify-center mt-10 mb-14",children:h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-screen-xl w-full",children:[h.jsx(nl,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:h.jsxs("a",{href:"https://github.com/abdessalamzarrouk/ShieldOps",children:[h.jsx(al,{children:h.jsx("span",{children:"ShieldOps.txt"})}),h.jsxs(_e,{children:[h.jsx("p",{children:"Progress : Under Construction  "})," ",h.jsx(dc,{variant:"tile",value:Math.floor(30)})]}),h.jsx(_e,{children:h.jsx(Ta,{style:{width:"100%",height:150},children:h.jsxs("p",{children:["This is an ",h.jsx("span",{className:"font-bold",children:"academic project"})," that is dedicated to learning how to set up a CI/CD pipeline that will include some",h.jsx("span",{className:"font-bold",children:" cybersecurity"})," features like code and dependency vulnerabilities detection and prevention."]})})}),h.jsx(_e,{children:h.jsx(Ta,{style:{width:"100%",height:66},children:h.jsxs("p",{children:[h.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used : "})," Docker, Jenkins, OWASP ZAP, Snyk, Trivy, SonarQube."]})})})]})}),h.jsx(nl,{className:"w-full max-w-md overflow-hidden transition-transform duration-300 hover:scale-110",children:h.jsxs("a",{href:"https://github.com/abdessalamzarrouk/PSX_GRAPHICS",children:[h.jsx(al,{children:h.jsx("span",{children:"psx_graphics.txt"})}),h.jsxs(_e,{children:[h.jsx("img",{src:ex,alt:"PSX Graphics",className:"w-full mb-5"}),h.jsxs("p",{children:["This is a ",h.jsx("span",{className:"text-[#DF0024] font-bold",children:"Play"}),h.jsx("span",{className:"text-[#f3c300] font-bold",children:"Station"})," ",h.jsx("span",{className:"font-bold",children:"1"})," game development project where i showcase some of the demonstrations i made using the infamous ",h.jsx("span",{className:"font-bold",children:"Psygnosis Source Development Kit"})," (Psy-Q)."]}),h.jsxs("p",{children:[h.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used :"}),"  Psy-Q SDK, ARMIPS, Make, mkpsxiso."]})]})]})}),h.jsxs(nl,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:[h.jsx(al,{children:h.jsx("span",{children:"ThreadTalk.txt"})}),h.jsxs(_e,{children:[h.jsx("p",{children:"Progress : Under Construction  "})," ",h.jsx(dc,{variant:"tile",value:Math.floor(0)})]}),h.jsx(_e,{children:h.jsx(Ta,{style:{width:"100%",height:115},children:h.jsxs("p",{children:["This is an idea that I had in mind. It's basically an inspiration from ",h.jsx("span",{className:"font-bold",children:"Reddit"})," that involves users discussing about ",h.jsx("span",{className:"font-bold",children:"topics"})," that they are interested in and ",h.jsx("span",{className:"font-bold",children:"sharing opinions"}),"."]})})})]})]})}),h.jsx(Fl,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),h.jsx("section",{className:"mb-10 w-full text-center pt-5 mt-10 h-full min-h-[85vh]",id:"About",children:h.jsxs("div",{className:"relative flex justify-center w-full items-center",children:[h.jsx("div",{className:"absolute left-0 flex items-center h-full",children:h.jsx(mx,{})}),h.jsxs("div",{className:"max-w-2xl text-center",children:[h.jsx("h1",{className:"text-4xl font-bold mb-4",children:"About Me"}),h.jsx(gs,{formatDisplay:ut=>`${ut.label?ut.label:"CANNOT RETRIEVE VALUES"}`,onChange:Mt,options:Ht,width:220}),I==="p1"&&h.jsxs(nl,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:U.x,top:U.y,width:x.width,height:x.height},children:[h.jsxs(al,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:ut=>{Z.current.isDragging=!0,Z.current.startX=ut.clientX,Z.current.startY=ut.clientY},children:[h.jsx("span",{children:"Me.exe"}),h.jsx(ae,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:h.jsx("span",{className:"close-icon"})})]}),h.jsxs(An,{children:[h.jsx(ae,{variant:"menu",size:"sm",children:"File"}),h.jsx(ae,{variant:"menu",size:"sm",children:"Edit"}),h.jsx(ae,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),h.jsxs(_e,{children:[h.jsxs("p",{children:["From ",h.jsx("span",{className:"font-bold",children:"tinkering with computers as a kid"})," to ",h.jsx("span",{className:"font-bold",children:"building complex software projects"})," today, I’ve always been fascinated by how ",h.jsx("span",{className:"font-bold",children:"technology"})," can solve real problems. I’m ",h.jsx("span",{className:"font-bold",children:"Abdessalam Zarrouk"}),", and I love ",h.jsx("span",{className:"font-bold",children:"learning"}),", ",h.jsx("span",{className:"font-bold",children:"experimenting"}),", and ",h.jsx("span",{className:"font-bold",children:"sharing my journey"})," through the projects I build."]}),h.jsx("br",{}),h.jsxs("p",{children:["My experience with computers first started with an ",h.jsx("span",{className:"font-bold",children:"old Dell Optiplex"}),", where I first learned about ",h.jsx("span",{className:"font-bold",children:"Windows XP"}),". Then I moved on to an ",h.jsx("span",{className:"font-bold",children:"HP Compaq DC7600"}),", which was an upgrade from the Dell (mostly good and bad). It was then that I learned that desktop computers get dusty and need some RAM cleaning from time to time, which was frustrating. This was the first computer where I experienced ",h.jsx("span",{className:"font-bold",children:"online gaming"})," with the surge of modems and broadband connections. I remember playing games like ",h.jsx("span",{className:"font-bold",children:"Counter-Strike 1.6"})," and ",h.jsx("span",{className:"font-bold",children:"Minecraft"})," when they first blew up."]}),h.jsx("br",{}),h.jsxs("p",{children:["Fast forward about 13 years, I purchased my first laptop, a ",h.jsx("span",{className:"font-bold",children:"Dell Latitude E5450"}),", which was a beast when coupled with a good ",h.jsx("span",{className:"font-bold",children:"SSD"}),". It was then that I started learning ",h.jsx("span",{className:"font-bold",children:"programming"})," with languages like ",h.jsx("span",{className:"font-bold",children:"Python, C, C++, and Java"}),". I also learned about ",h.jsx("span",{className:"font-bold",children:"web development"})," and how the ",h.jsx("span",{className:"font-bold",children:"internet"})," works. I started building ",h.jsx("span",{className:"font-bold",children:"small projects"})," and ",h.jsx("span",{className:"font-bold",children:"experimenting with different technologies"}),". Even today, I cherish those moments with that Dell and HP desktop—those were the ",h.jsx("span",{className:"font-bold",children:"foundations of my passion"}),"."]})]}),h.jsx(nc,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]}),I==="p2"&&h.jsxs(nl,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:U.x,top:U.y,width:x.width,height:x.height},children:[h.jsxs(al,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:ut=>{Z.current.isDragging=!0,Z.current.startX=ut.clientX,Z.current.startY=ut.clientY},children:[h.jsx("span",{children:"Hobbies.exe"}),h.jsx(ae,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:h.jsx("span",{className:"close-icon"})})]}),h.jsxs(An,{children:[h.jsx(ae,{variant:"menu",size:"sm",children:"File"}),h.jsx(ae,{variant:"menu",size:"sm",children:"Edit"}),h.jsx(ae,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),h.jsxs(_e,{children:[h.jsxs("p",{children:["I enjoy ",h.jsx("span",{className:"font-semibold text-emerald-600",children:"GT3 sim racing"})," in",h.jsx("span",{className:"font-bold text-red-600",children:" Assetto Corsa"}),", dialing in pacing, braking points, and smooth inputs. That tweak → test → repeat loop feels like refactoring code."]}),h.jsx("br",{}),h.jsxs("p",{children:["I also make beats—mainly",h.jsx("span",{className:"font-bold text-amber-600",children:" Hip Hop"})," and",h.jsx("span",{className:"font-bold text-fuchsia-600",children:" 90s House"}),". Chopping samples, shaping",h.jsx("span",{className:"font-semibold text-slate-800",children:" drums"}),", and balancing",h.jsx("span",{className:"font-semibold text-teal-600",children:" basslines"})," sharpen timing, pattern recognition, and iteration."]}),h.jsxs("p",{children:["These hobbies keep me",h.jsx("span",{className:"font-semibold text-blue-700",children:" curious"}),",",h.jsx("span",{className:"font-semibold text-purple-700",children:" patient"}),", and comfortable",h.jsx("span",{className:"font-semibold text-emerald-700",children:" iterating"}),"."]}),h.jsx("br",{}),h.jsx(Ta,{style:{width:250,height:115,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},children:h.jsx("img",{src:ix,alt:"granturismo.gif"})})]}),h.jsx(nc,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]})]})]})}),h.jsx(Fl,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),h.jsx("section",{className:"mb-10 w-full pt-5 mt-10 h-full",id:"Skills",children:h.jsx("div",{className:"flex justify-center items-start gap-8 w-full px-4",children:h.jsxs("div",{className:"text-center",children:[h.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Skills"}),h.jsxs(nl,{resizable:!0,className:"window mb-4",style:{margin:"0 auto",width:700},children:[h.jsx(al,{children:h.jsx("span",{children:"My Skills.exe"})}),h.jsx(_e,{children:h.jsxs("div",{style:{textAlign:"left",padding:"8px",lineHeight:"1.6"},children:[h.jsx("h3",{className:"font-bold",children:"Programming Languages:"}),h.jsx("p",{children:"JavaScript (React, Node.js), Python, Java, C/C++, C#, SQL"}),h.jsx("h3",{className:"font-bold mt-2",children:"Web Development:"}),h.jsx("p",{children:"React, Redux, Tailwind CSS, Styled-Components, HTML5, CSS3, REST APIs"}),h.jsx("h3",{className:"font-bold mt-2",children:"Database & Backend:"}),h.jsx("p",{children:"Firebase (Firestore & Auth), PostgreSQL, MySQL, MongoDB, Express.js"}),h.jsx("h3",{className:"font-bold mt-2",children:"Tools & Platforms:"}),h.jsx("p",{children:"Git, GitHub, Docker, Jenkins, VS Code"}),h.jsx("h3",{className:"font-bold mt-2",children:"Game Development:"}),h.jsx("p",{children:"Psy-Q SDK (PlayStation 1), ARMIPS, mkpsxiso"}),h.jsx("h3",{className:"font-bold mt-2",children:"Soft Skills:"}),h.jsx("p",{children:"Problem Solving, Team Collaboration, Adaptability, Continuous Learning, Creativity"})]})})]})]})})}),h.jsx(Fl,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),h.jsxs("section",{className:"mb-10 w-full pt-5 mt-10 text-center",id:"Contact",children:[h.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Contact Info"}),h.jsxs(nl,{children:[h.jsx(al,{children:"Contact Info"}),h.jsx(_e,{children:h.jsxs(nc,{variant:"inside",style:{padding:"1rem",wordBreak:"break-word"},children:[h.jsxs("p",{children:["Email: ",h.jsx(ic,{text:"Will add this later",enterDelay:100,leaveDelay:500,children:"email"})]}),h.jsxs("p",{children:["GitHub: ",h.jsx("a",{href:"https://github.com/abdessalamzarrouk",target:"_blank",children:"github.com/abdessalamzarrouk"})]}),h.jsxs("p",{children:["LinkedIn: ",h.jsx("a",{href:"https://linkedin.com/in/abdessalam-zarrouk",target:"_blank",children:"linkedin.com/in/abdessalam-zarrouk"})]})]})})]})]}),h.jsx(Fl,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),h.jsx("footer",{className:"text-center mb-5",children:h.jsxs("p",{children:["© ",new Date().getFullYear()," Abdessalam Zarrouk"]})})]})]})]})}sg.createRoot(document.getElementById("root")).render(h.jsx(w.StrictMode,{children:h.jsx(bx,{})}));
