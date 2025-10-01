var ET=Object.defineProperty;var TT=(n,t,i)=>t in n?ET(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var es=(n,t,i)=>TT(n,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function u_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jd={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function wT(){if(pv)return $l;pv=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:n,type:a,key:f,ref:l!==void 0?l:null,props:c}}return $l.Fragment=t,$l.jsx=i,$l.jsxs=i,$l}var gv;function ST(){return gv||(gv=1,Jd.exports=wT()),Jd.exports}var A=ST(),tm={exports:{}},Bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function xT(){if(yv)return Bt;yv=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=T&&I[T]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,K={};function z(I,W,dt){this.props=I,this.context=W,this.refs=K,this.updater=dt||M}z.prototype.isReactComponent={},z.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},z.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function nt(){}nt.prototype=z.prototype;function J(I,W,dt){this.props=I,this.context=W,this.refs=K,this.updater=dt||M}var X=J.prototype=new nt;X.constructor=J,G(X,z.prototype),X.isPureReactComponent=!0;var mt=Array.isArray,st={H:null,A:null,T:null,S:null,V:null},ut=Object.prototype.hasOwnProperty;function R(I,W,dt,tt,ct,_t){return dt=_t.ref,{$$typeof:n,type:I,key:W,ref:dt!==void 0?dt:null,props:_t}}function x(I,W){return R(I.type,W,void 0,void 0,void 0,I.props)}function D(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function V(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(dt){return W[dt]})}var N=/\/+/g;function j(I,W){return typeof I=="object"&&I!==null&&I.key!=null?V(""+I.key):W.toString(36)}function C(){}function Mt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(C,C):(I.status="pending",I.then(function(W){I.status==="pending"&&(I.status="fulfilled",I.value=W)},function(W){I.status==="pending"&&(I.status="rejected",I.reason=W)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function vt(I,W,dt,tt,ct){var _t=typeof I;(_t==="undefined"||_t==="boolean")&&(I=null);var pt=!1;if(I===null)pt=!0;else switch(_t){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(I.$$typeof){case n:case t:pt=!0;break;case _:return pt=I._init,vt(pt(I._payload),W,dt,tt,ct)}}if(pt)return ct=ct(I),pt=tt===""?"."+j(I,0):tt,mt(ct)?(dt="",pt!=null&&(dt=pt.replace(N,"$&/")+"/"),vt(ct,W,dt,"",function(ot){return ot})):ct!=null&&(D(ct)&&(ct=x(ct,dt+(ct.key==null||I&&I.key===ct.key?"":(""+ct.key).replace(N,"$&/")+"/")+pt)),W.push(ct)),1;pt=0;var xt=tt===""?".":tt+":";if(mt(I))for(var It=0;It<I.length;It++)tt=I[It],_t=xt+j(tt,It),pt+=vt(tt,W,dt,_t,ct);else if(It=S(I),typeof It=="function")for(I=It.call(I),It=0;!(tt=I.next()).done;)tt=tt.value,_t=xt+j(tt,It++),pt+=vt(tt,W,dt,_t,ct);else if(_t==="object"){if(typeof I.then=="function")return vt(Mt(I),W,dt,tt,ct);throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return pt}function F(I,W,dt){if(I==null)return I;var tt=[],ct=0;return vt(I,tt,"","",function(_t){return W.call(dt,_t,ct++)}),tt}function ht(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(dt){(I._status===0||I._status===-1)&&(I._status=1,I._result=dt)},function(dt){(I._status===0||I._status===-1)&&(I._status=2,I._result=dt)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var ft=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Tt(){}return Bt.Children={map:F,forEach:function(I,W,dt){F(I,function(){W.apply(this,arguments)},dt)},count:function(I){var W=0;return F(I,function(){W++}),W},toArray:function(I){return F(I,function(W){return W})||[]},only:function(I){if(!D(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Bt.Component=z,Bt.Fragment=i,Bt.Profiler=l,Bt.PureComponent=J,Bt.StrictMode=a,Bt.Suspense=y,Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st,Bt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return st.H.useMemoCache(I)}},Bt.cache=function(I){return function(){return I.apply(null,arguments)}},Bt.cloneElement=function(I,W,dt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var tt=G({},I.props),ct=I.key,_t=void 0;if(W!=null)for(pt in W.ref!==void 0&&(_t=void 0),W.key!==void 0&&(ct=""+W.key),W)!ut.call(W,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&W.ref===void 0||(tt[pt]=W[pt]);var pt=arguments.length-2;if(pt===1)tt.children=dt;else if(1<pt){for(var xt=Array(pt),It=0;It<pt;It++)xt[It]=arguments[It+2];tt.children=xt}return R(I.type,ct,void 0,void 0,_t,tt)},Bt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Bt.createElement=function(I,W,dt){var tt,ct={},_t=null;if(W!=null)for(tt in W.key!==void 0&&(_t=""+W.key),W)ut.call(W,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ct[tt]=W[tt]);var pt=arguments.length-2;if(pt===1)ct.children=dt;else if(1<pt){for(var xt=Array(pt),It=0;It<pt;It++)xt[It]=arguments[It+2];ct.children=xt}if(I&&I.defaultProps)for(tt in pt=I.defaultProps,pt)ct[tt]===void 0&&(ct[tt]=pt[tt]);return R(I,_t,void 0,void 0,null,ct)},Bt.createRef=function(){return{current:null}},Bt.forwardRef=function(I){return{$$typeof:p,render:I}},Bt.isValidElement=D,Bt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ht}},Bt.memo=function(I,W){return{$$typeof:g,type:I,compare:W===void 0?null:W}},Bt.startTransition=function(I){var W=st.T,dt={};st.T=dt;try{var tt=I(),ct=st.S;ct!==null&&ct(dt,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(Tt,ft)}catch(_t){ft(_t)}finally{st.T=W}},Bt.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()},Bt.use=function(I){return st.H.use(I)},Bt.useActionState=function(I,W,dt){return st.H.useActionState(I,W,dt)},Bt.useCallback=function(I,W){return st.H.useCallback(I,W)},Bt.useContext=function(I){return st.H.useContext(I)},Bt.useDebugValue=function(){},Bt.useDeferredValue=function(I,W){return st.H.useDeferredValue(I,W)},Bt.useEffect=function(I,W,dt){var tt=st.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return tt.useEffect(I,W)},Bt.useId=function(){return st.H.useId()},Bt.useImperativeHandle=function(I,W,dt){return st.H.useImperativeHandle(I,W,dt)},Bt.useInsertionEffect=function(I,W){return st.H.useInsertionEffect(I,W)},Bt.useLayoutEffect=function(I,W){return st.H.useLayoutEffect(I,W)},Bt.useMemo=function(I,W){return st.H.useMemo(I,W)},Bt.useOptimistic=function(I,W){return st.H.useOptimistic(I,W)},Bt.useReducer=function(I,W,dt){return st.H.useReducer(I,W,dt)},Bt.useRef=function(I){return st.H.useRef(I)},Bt.useState=function(I){return st.H.useState(I)},Bt.useSyncExternalStore=function(I,W,dt){return st.H.useSyncExternalStore(I,W,dt)},Bt.useTransition=function(){return st.H.useTransition()},Bt.version="19.1.0",Bt}var vv;function np(){return vv||(vv=1,tm.exports=xT()),tm.exports}var B=np();const Q=u_(B);var em={exports:{}},Hl={},nm={exports:{}},rm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function RT(){return bv||(bv=1,function(n){function t(F,ht){var ft=F.length;F.push(ht);t:for(;0<ft;){var Tt=ft-1>>>1,I=F[Tt];if(0<l(I,ht))F[Tt]=ht,F[ft]=I,ft=Tt;else break t}}function i(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var ht=F[0],ft=F.pop();if(ft!==ht){F[0]=ft;t:for(var Tt=0,I=F.length,W=I>>>1;Tt<W;){var dt=2*(Tt+1)-1,tt=F[dt],ct=dt+1,_t=F[ct];if(0>l(tt,ft))ct<I&&0>l(_t,tt)?(F[Tt]=_t,F[ct]=ft,Tt=ct):(F[Tt]=tt,F[dt]=ft,Tt=dt);else if(ct<I&&0>l(_t,ft))F[Tt]=_t,F[ct]=ft,Tt=ct;else break t}}return ht}function l(F,ht){var ft=F.sortIndex-ht.sortIndex;return ft!==0?ft:F.id-ht.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var y=[],g=[],_=1,T=null,S=3,M=!1,G=!1,K=!1,z=!1,nt=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function mt(F){for(var ht=i(g);ht!==null;){if(ht.callback===null)a(g);else if(ht.startTime<=F)a(g),ht.sortIndex=ht.expirationTime,t(y,ht);else break;ht=i(g)}}function st(F){if(K=!1,mt(F),!G)if(i(y)!==null)G=!0,ut||(ut=!0,j());else{var ht=i(g);ht!==null&&vt(st,ht.startTime-F)}}var ut=!1,R=-1,x=5,D=-1;function V(){return z?!0:!(n.unstable_now()-D<x)}function N(){if(z=!1,ut){var F=n.unstable_now();D=F;var ht=!0;try{t:{G=!1,K&&(K=!1,J(R),R=-1),M=!0;var ft=S;try{e:{for(mt(F),T=i(y);T!==null&&!(T.expirationTime>F&&V());){var Tt=T.callback;if(typeof Tt=="function"){T.callback=null,S=T.priorityLevel;var I=Tt(T.expirationTime<=F);if(F=n.unstable_now(),typeof I=="function"){T.callback=I,mt(F),ht=!0;break e}T===i(y)&&a(y),mt(F)}else a(y);T=i(y)}if(T!==null)ht=!0;else{var W=i(g);W!==null&&vt(st,W.startTime-F),ht=!1}}break t}finally{T=null,S=ft,M=!1}ht=void 0}}finally{ht?j():ut=!1}}}var j;if(typeof X=="function")j=function(){X(N)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Mt=C.port2;C.port1.onmessage=N,j=function(){Mt.postMessage(null)}}else j=function(){nt(N,0)};function vt(F,ht){R=nt(function(){F(n.unstable_now())},ht)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(F){switch(S){case 1:case 2:case 3:var ht=3;break;default:ht=S}var ft=S;S=ht;try{return F()}finally{S=ft}},n.unstable_requestPaint=function(){z=!0},n.unstable_runWithPriority=function(F,ht){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ft=S;S=F;try{return ht()}finally{S=ft}},n.unstable_scheduleCallback=function(F,ht,ft){var Tt=n.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?Tt+ft:Tt):ft=Tt,F){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=ft+I,F={id:_++,callback:ht,priorityLevel:F,startTime:ft,expirationTime:I,sortIndex:-1},ft>Tt?(F.sortIndex=ft,t(g,F),i(y)===null&&F===i(g)&&(K?(J(R),R=-1):K=!0,vt(st,ft-Tt))):(F.sortIndex=I,t(y,F),G||M||(G=!0,ut||(ut=!0,j()))),F},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(F){var ht=S;return function(){var ft=S;S=ht;try{return F.apply(this,arguments)}finally{S=ft}}}}(rm)),rm}var _v;function CT(){return _v||(_v=1,nm.exports=RT()),nm.exports}var im={exports:{}},dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function DT(){if(Av)return dn;Av=1;var n=np();function t(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(y,g,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:T==null?null:""+T,children:y,containerInfo:g,implementation:_}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,dn.createPortal=function(y,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(y,g,null,_)},dn.flushSync=function(y){var g=f.T,_=a.p;try{if(f.T=null,a.p=2,y)return y()}finally{f.T=g,a.p=_,a.d.f()}},dn.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(y,g))},dn.prefetchDNS=function(y){typeof y=="string"&&a.d.D(y)},dn.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var _=g.as,T=p(_,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,M=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:M}):_==="script"&&a.d.X(y,{crossOrigin:T,integrity:S,fetchPriority:M,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},dn.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);a.d.M(y,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(y)},dn.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,T=p(_,g.crossOrigin);a.d.L(y,_,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},dn.preloadModule=function(y,g){if(typeof y=="string")if(g){var _=p(g.as,g.crossOrigin);a.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(y)},dn.requestFormReset=function(y){a.d.r(y)},dn.unstable_batchedUpdates=function(y,g){return y(g)},dn.useFormState=function(y,g,_){return f.H.useFormState(y,g,_)},dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},dn.version="19.1.0",dn}var Ev;function c_(){if(Ev)return im.exports;Ev=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),im.exports=DT(),im.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function kT(){if(Tv)return Hl;Tv=1;var n=CT(),t=np(),i=c_();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function f(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function y(e){var r=e.alternate;if(!r){if(r=c(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,o=r;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return p(h),e;if(d===o)return p(h),r;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=d;else{for(var b=!1,E=h.child;E;){if(E===s){b=!0,s=h,o=d;break}if(E===o){b=!0,o=h,s=d;break}E=E.sibling}if(!b){for(E=d.child;E;){if(E===s){b=!0,s=d,o=h;break}if(E===o){b=!0,o=d,s=h;break}E=E.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function g(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=g(e),r!==null)return r;e=e.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),nt=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),X=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case z:return"Profiler";case K:return"StrictMode";case st:return"Suspense";case ut:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case X:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case mt:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return r=e.displayName||null,r!==null?r:Mt(e.type)||"Memo";case x:r=e._payload,e=e._init;try{return Mt(e(r))}catch{}}return null}var vt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},Tt=[],I=-1;function W(e){return{current:e}}function dt(e){0>I||(e.current=Tt[I],Tt[I]=null,I--)}function tt(e,r){I++,Tt[I]=e.current,e.current=r}var ct=W(null),_t=W(null),pt=W(null),xt=W(null);function It(e,r){switch(tt(pt,r),tt(_t,e),tt(ct,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?H0(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=H0(r),e=q0(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(ct),tt(ct,e)}function ot(){dt(ct),dt(_t),dt(pt)}function Nt(e){e.memoizedState!==null&&tt(xt,e);var r=ct.current,s=q0(r,e.type);r!==s&&(tt(_t,e),tt(ct,s))}function Ot(e){_t.current===e&&(dt(ct),dt(_t)),xt.current===e&&(dt(xt),Ll._currentValue=ft)}var Pt=Object.prototype.hasOwnProperty,Xt=n.unstable_scheduleCallback,ye=n.unstable_cancelCallback,_e=n.unstable_shouldYield,Fe=n.unstable_requestPaint,ve=n.unstable_now,Pn=n.unstable_getCurrentPriorityLevel,ie=n.unstable_ImmediatePriority,we=n.unstable_UserBlockingPriority,Dn=n.unstable_NormalPriority,Ur=n.unstable_LowPriority,gi=n.unstable_IdlePriority,wu=n.log,ba=n.unstable_setDisableYieldValue,yi=null,cn=null;function Un(e){if(typeof wu=="function"&&ba(e),cn&&typeof cn.setStrictMode=="function")try{cn.setStrictMode(yi,e)}catch{}}var yn=Math.clz32?Math.clz32:xu,nf=Math.log,Su=Math.LN2;function xu(e){return e>>>=0,e===0?32:31-(nf(e)/Su|0)|0}var pr=256,vi=4194304;function er(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $n(e,r,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~d,o!==0?h=er(o):(b&=E,b!==0?h=er(b):s||(s=E&~e,s!==0&&(h=er(s))))):(E=o&~d,E!==0?h=er(E):b!==0?h=er(b):s||(s=o&~e,s!==0&&(h=er(s)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,s=r&-r,d>=s||d===32&&(s&4194048)!==0)?r:h}function bi(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function bs(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zo(){var e=pr;return pr<<=1,(pr&4194048)===0&&(pr=256),e}function _i(){var e=vi;return vi<<=1,(vi&62914560)===0&&(vi=4194304),e}function _s(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function Ce(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ru(e,r,s,o,h,d){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var E=e.entanglements,k=e.expirationTimes,$=e.hiddenUpdates;for(s=b&~s;0<s;){var Z=31-yn(s),it=1<<Z;E[Z]=0,k[Z]=-1;var H=$[Z];if(H!==null)for($[Z]=null,Z=0;Z<H.length;Z++){var q=H[Z];q!==null&&(q.lane&=-536870913)}s&=~it}o!==0&&Ai(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~r))}function Ai(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var o=31-yn(r);e.entangledLanes|=r,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function Ei(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var o=31-yn(s),h=1<<o;h&r|e[o]&r&&(e[o]|=r),s&=~h}}function Po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Uo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=ht.p;return e!==0?e:(e=window.event,e===void 0?32:uv(e.type))}function rf(e,r){var s=ht.p;try{return ht.p=e,r()}finally{ht.p=s}}var gr=Math.random().toString(36).slice(2),De="__reactFiber$"+gr,en="__reactProps$"+gr,Hr="__reactContainer$"+gr,_a="__reactEvents$"+gr,Aa="__reactListeners$"+gr,af="__reactHandles$"+gr,nr="__reactResources$"+gr,Ti="__reactMarker$"+gr;function As(e){delete e[De],delete e[en],delete e[_a],delete e[Aa],delete e[af]}function yr(e){var r=e[De];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Hr]||s[De]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=Y0(e);e!==null;){if(s=e[De])return s;e=Y0(e)}return r}e=s,s=e.parentNode}return null}function vr(e){if(e=e[De]||e[Hr]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function wi(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function Si(e){var r=e[nr];return r||(r=e[nr]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ke(e){e[Ti]=!0}var Cu=new Set,Ea={};function br(e,r){_r(e,r),_r(e+"Capture",r)}function _r(e,r){for(Ea[e]=r,e=0;e<r.length;e++)Cu.add(r[e])}var Ta=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ar={},Es={};function sf(e){return Pt.call(Es,e)?!0:Pt.call(Ar,e)?!1:Ta.test(e)?Es[e]=!0:(Ar[e]=!0,!1)}function wa(e,r,s){if(sf(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var o=r.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function Sa(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Hn(e,r,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+o)}}var xa,Ts;function qr(e){if(xa===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);xa=r&&r[1]||"",Ts=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xa+e+Ts}var ws=!1;function Ss(e,r){if(!e||ws)return"";ws=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(r){var it=function(){throw Error()};if(Object.defineProperty(it.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(it,[])}catch(q){var H=q}Reflect.construct(e,[],it)}else{try{it.call()}catch(q){H=q}e.call(it.prototype)}}else{try{throw Error()}catch(q){H=q}(it=e())&&typeof it.catch=="function"&&it.catch(function(){})}}catch(q){if(q&&H&&typeof q.stack=="string")return[q.stack,H.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],E=d[1];if(b&&E){var k=b.split(`
`),$=E.split(`
`);for(h=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;h<$.length&&!$[h].includes("DetermineComponentFrameRoot");)h++;if(o===k.length||h===$.length)for(o=k.length-1,h=$.length-1;1<=o&&0<=h&&k[o]!==$[h];)h--;for(;1<=o&&0<=h;o--,h--)if(k[o]!==$[h]){if(o!==1||h!==1)do if(o--,h--,0>h||k[o]!==$[h]){var Z=`
`+k[o].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=o&&0<=h);break}}}finally{ws=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?qr(s):""}function of(e){switch(e.tag){case 26:case 27:case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 15:return Ss(e.type,!1);case 11:return Ss(e.type.render,!1);case 1:return Ss(e.type,!0);case 31:return qr("Activity");default:return""}}function rr(e){try{var r="";do r+=of(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xi(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ra(e){var r=xi(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Ri(e){e._valueTracker||(e._valueTracker=Ra(e))}function ae(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),o="";return e&&(o=xi(e)?e.checked?"true":"false":e.value),e=o,e!==s?(r.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ca=/[\n"\\]/g;function Qe(e){return e.replace(Ca,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function $o(e,r,s,o,h,d,b,E){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),r!=null?b==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+Ae(r)):e.value!==""+Ae(r)&&(e.value=""+Ae(r)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),r!=null?qo(e,b,Ae(r)):s!=null?qo(e,b,Ae(s)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ae(E):e.removeAttribute("name")}function Ho(e,r,s,o,h,d,b,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),r!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;s=s!=null?""+Ae(s):"",r=r!=null?""+Ae(r):s,E||r===e.value||(e.value=r),e.defaultValue=r}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function qo(e,r,s){r==="number"&&Gr(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ci(e,r,s,o){if(e=e.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=r.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Ae(s),r=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function Du(e,r,s){if(r!=null&&(r=""+Ae(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+Ae(s):""}function ku(e,r,s,o){if(r==null){if(o!=null){if(s!=null)throw Error(a(92));if(vt(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),r=s}s=Ae(r),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function qn(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Fr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Go(e,r,s){var o=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":o?e.setProperty(r,s):typeof s!="number"||s===0||Fr.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Fo(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||r!=null&&r.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in r)o=r[h],r.hasOwnProperty(h)&&s[h]!==o&&Go(e,h,o)}else for(var d in r)r.hasOwnProperty(d)&&Go(e,d,r[d])}function xs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ir(e){return Nu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qo=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,vn=null;function Vu(e){var r=vr(e);if(r&&(e=r.stateNode)){var s=e[en]||null;t:switch(e=r.stateNode,r.type){case"input":if($o(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Qe(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var o=s[r];if(o!==e&&o.form===e.form){var h=o[en]||null;if(!h)throw Error(a(90));$o(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)o=s[r],o.form===e.form&&ae(o)}break t;case"textarea":Du(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&Ci(e,!!s.multiple,r,!1)}}}var Da=!1;function ka(e,r,s){if(Da)return e(r,s);Da=!0;try{var o=e(r);return o}finally{if(Da=!1,(Di!==null||vn!==null)&&(Ec(),Di&&(r=Di,e=vn,vn=Di=null,Vu(r),e)))for(r=0;r<e.length;r++)Vu(e[r])}}function ki(e,r){var s=e.stateNode;if(s===null)return null;var o=s[en]||null;if(o===null)return null;s=o[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=!1;if(bn)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Qr=!1}var Gn=null,he=null,Rs=null;function Mu(){if(Rs)return Rs;var e,r=he,s=r.length,o,h="value"in Gn?Gn.value:Gn.textContent,d=h.length;for(e=0;e<s&&r[e]===h[e];e++);var b=s-e;for(o=1;o<=b&&r[s-o]===h[d-o];o++);return Rs=h.slice(e,1<o?1-o:void 0)}function Ia(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Na(){return!0}function Ko(){return!1}function $e(e){function r(s,o,h,d,b){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Na:Ko,this.isPropagationStopped=Ko,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),r}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=$e(hn),Ma=_({},hn,{view:0,detail:0}),Oa=$e(Ma),Cs,ja,Er,La=_({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(Cs=e.screenX-Er.screenX,ja=e.screenY-Er.screenY):ja=Cs=0,Er=e),Cs)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),Ba=$e(La),lf=_({},La,{dataTransfer:0}),Ou=$e(lf),za=_({},Ma,{relatedTarget:0}),Ds=$e(za),ju=_({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xo=$e(ju),Zo=_({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lu=$e(Zo),ks=_({},hn,{data:0}),Wo=$e(ks),Bu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=zu[e])?!!r[e]:!1}function Is(){return Pu}var Uu=_({},Ma,{key:function(e){if(e.key){var r=Bu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?Ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ns=$e(Uu),_n=_({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=$e(_n),$u=_({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),Ni=$e($u),u=_({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),m=$e(u),v=_({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w=$e(v),U=_({},hn,{newState:0,oldState:0}),Y=$e(U),gt=[9,13,27,32],jt=bn&&"CompositionEvent"in window,pe=null;bn&&"documentMode"in document&&(pe=document.documentMode);var ee=bn&&"TextEvent"in window&&!pe,Ie=bn&&(!jt||pe&&8<pe&&11>=pe),kn=" ",Tr=!1;function ar(e,r){switch(e){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function tl(e,r){switch(e){case"compositionend":return sr(r);case"keypress":return r.which!==32?null:(Tr=!0,kn);case"textInput":return e=r.data,e===kn&&Tr?null:e;default:return null}}function K1(e,r){if(or)return e==="compositionend"||!jt&&ar(e,r)?(e=Mu(),Rs=he=Gn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ie&&r.locale!=="ko"?null:r.data;default:return null}}var X1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!X1[e.type]:r==="textarea"}function ig(e,r,s,o){Di?vn?vn.push(o):vn=[o]:Di=o,r=Cc(r,"onChange"),0<r.length&&(s=new Va("onChange","change",null,s,o),e.push({event:s,listeners:r}))}var el=null,nl=null;function Z1(e){B0(e,0)}function Hu(e){var r=wi(e);if(ae(r))return e}function ag(e,r){if(e==="change")return r}var sg=!1;if(bn){var uf;if(bn){var cf="oninput"in document;if(!cf){var og=document.createElement("div");og.setAttribute("oninput","return;"),cf=typeof og.oninput=="function"}uf=cf}else uf=!1;sg=uf&&(!document.documentMode||9<document.documentMode)}function lg(){el&&(el.detachEvent("onpropertychange",ug),nl=el=null)}function ug(e){if(e.propertyName==="value"&&Hu(nl)){var r=[];ig(r,nl,e,Yo(e)),ka(Z1,r)}}function W1(e,r,s){e==="focusin"?(lg(),el=r,nl=s,el.attachEvent("onpropertychange",ug)):e==="focusout"&&lg()}function J1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hu(nl)}function tE(e,r){if(e==="click")return Hu(r)}function eE(e,r){if(e==="input"||e==="change")return Hu(r)}function nE(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var In=typeof Object.is=="function"?Object.is:nE;function rl(e,r){if(In(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),o=Object.keys(r);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!Pt.call(r,h)||!In(e[h],r[h]))return!1}return!0}function cg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hg(e,r){var s=cg(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=r&&o>=r)return{node:s,offset:r-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=cg(s)}}function fg(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?fg(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function dg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=Gr(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Gr(e.document)}return r}function hf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var rE=bn&&"documentMode"in document&&11>=document.documentMode,Vs=null,ff=null,il=null,df=!1;function mg(e,r,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;df||Vs==null||Vs!==Gr(o)||(o=Vs,"selectionStart"in o&&hf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),il&&rl(il,o)||(il=o,o=Cc(ff,"onSelect"),0<o.length&&(r=new Va("onSelect","select",null,r,s),e.push({event:r,listeners:o}),r.target=Vs)))}function Pa(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var Ms={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},mf={},pg={};bn&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ua(e){if(mf[e])return mf[e];if(!Ms[e])return e;var r=Ms[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in pg)return mf[e]=r[s];return e}var gg=Ua("animationend"),yg=Ua("animationiteration"),vg=Ua("animationstart"),iE=Ua("transitionrun"),aE=Ua("transitionstart"),sE=Ua("transitioncancel"),bg=Ua("transitionend"),_g=new Map,pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pf.push("scrollEnd");function lr(e,r){_g.set(e,r),br(r,[e])}var Ag=new WeakMap;function Fn(e,r){if(typeof e=="object"&&e!==null){var s=Ag.get(e);return s!==void 0?s:(r={value:e,source:r,stack:rr(r)},Ag.set(e,r),r)}return{value:e,source:r,stack:rr(r)}}var Qn=[],Os=0,gf=0;function qu(){for(var e=Os,r=gf=Os=0;r<e;){var s=Qn[r];Qn[r++]=null;var o=Qn[r];Qn[r++]=null;var h=Qn[r];Qn[r++]=null;var d=Qn[r];if(Qn[r++]=null,o!==null&&h!==null){var b=o.pending;b===null?h.next=h:(h.next=b.next,b.next=h),o.pending=h}d!==0&&Eg(s,h,d)}}function Gu(e,r,s,o){Qn[Os++]=e,Qn[Os++]=r,Qn[Os++]=s,Qn[Os++]=o,gf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yf(e,r,s,o){return Gu(e,r,s,o),Fu(e)}function js(e,r){return Gu(e,null,null,r),Fu(e)}function Eg(e,r,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&r!==null&&(h=31-yn(s),e=d.hiddenUpdates,o=e[h],o===null?e[h]=[r]:o.push(r),r.lane=s|536870912),d):null}function Fu(e){if(50<Dl)throw Dl=0,Td=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var Ls={};function oE(e,r,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,r,s,o){return new oE(e,r,s,o)}function vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kr(e,r){var s=e.alternate;return s===null?(s=Nn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Tg(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Qu(e,r,s,o,h,d){var b=0;if(o=e,typeof e=="function")vf(e)&&(b=1);else if(typeof e=="string")b=uT(e,s,ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Nn(31,s,r,h),e.elementType=D,e.lanes=d,e;case G:return $a(s.children,h,d,r);case K:b=8,h|=24;break;case z:return e=Nn(12,s,r,h|2),e.elementType=z,e.lanes=d,e;case st:return e=Nn(13,s,r,h),e.elementType=st,e.lanes=d,e;case ut:return e=Nn(19,s,r,h),e.elementType=ut,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nt:case X:b=10;break t;case J:b=9;break t;case mt:b=11;break t;case R:b=14;break t;case x:b=16,o=null;break t}b=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return r=Nn(b,s,r,h),r.elementType=e,r.type=o,r.lanes=d,r}function $a(e,r,s,o){return e=Nn(7,e,o,r),e.lanes=s,e}function bf(e,r,s){return e=Nn(6,e,null,r),e.lanes=s,e}function _f(e,r,s){return r=Nn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Bs=[],zs=0,Yu=null,Ku=0,Yn=[],Kn=0,Ha=null,Xr=1,Zr="";function qa(e,r){Bs[zs++]=Ku,Bs[zs++]=Yu,Yu=e,Ku=r}function wg(e,r,s){Yn[Kn++]=Xr,Yn[Kn++]=Zr,Yn[Kn++]=Ha,Ha=e;var o=Xr;e=Zr;var h=32-yn(o)-1;o&=~(1<<h),s+=1;var d=32-yn(r)+h;if(30<d){var b=h-h%5;d=(o&(1<<b)-1).toString(32),o>>=b,h-=b,Xr=1<<32-yn(r)+h|s<<h|o,Zr=d+e}else Xr=1<<d|s<<h|o,Zr=e}function Af(e){e.return!==null&&(qa(e,1),wg(e,1,0))}function Ef(e){for(;e===Yu;)Yu=Bs[--zs],Bs[zs]=null,Ku=Bs[--zs],Bs[zs]=null;for(;e===Ha;)Ha=Yn[--Kn],Yn[Kn]=null,Zr=Yn[--Kn],Yn[Kn]=null,Xr=Yn[--Kn],Yn[Kn]=null}var An=null,Se=null,Wt=!1,Ga=null,wr=!1,Tf=Error(a(519));function Fa(e){var r=Error(a(418,""));throw ol(Fn(r,e)),Tf}function Sg(e){var r=e.stateNode,s=e.type,o=e.memoizedProps;switch(r[De]=e,r[en]=o,s){case"dialog":qt("cancel",r),qt("close",r);break;case"iframe":case"object":case"embed":qt("load",r);break;case"video":case"audio":for(s=0;s<Il.length;s++)qt(Il[s],r);break;case"source":qt("error",r);break;case"img":case"image":case"link":qt("error",r),qt("load",r);break;case"details":qt("toggle",r);break;case"input":qt("invalid",r),Ho(r,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ri(r);break;case"select":qt("invalid",r);break;case"textarea":qt("invalid",r),ku(r,o.value,o.defaultValue,o.children),Ri(r)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||o.suppressHydrationWarning===!0||$0(r.textContent,s)?(o.popover!=null&&(qt("beforetoggle",r),qt("toggle",r)),o.onScroll!=null&&qt("scroll",r),o.onScrollEnd!=null&&qt("scrollend",r),o.onClick!=null&&(r.onclick=Dc),r=!0):r=!1,r||Fa(e)}function xg(e){for(An=e.return;An;)switch(An.tag){case 5:case 13:wr=!1;return;case 27:case 3:wr=!0;return;default:An=An.return}}function al(e){if(e!==An)return!1;if(!Wt)return xg(e),Wt=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||zd(e.type,e.memoizedProps)),s=!s),s&&Se&&Fa(e),xg(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){Se=cr(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}Se=null}}else r===27?(r=Se,Yi(e.type)?(e=Hd,Hd=null,Se=e):Se=r):Se=An?cr(e.stateNode.nextSibling):null;return!0}function sl(){Se=An=null,Wt=!1}function Rg(){var e=Ga;return e!==null&&(xn===null?xn=e:xn.push.apply(xn,e),Ga=null),e}function ol(e){Ga===null?Ga=[e]:Ga.push(e)}var wf=W(null),Qa=null,Wr=null;function Vi(e,r,s){tt(wf,r._currentValue),r._currentValue=s}function Jr(e){e._currentValue=wf.current,dt(wf)}function Sf(e,r,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===s)break;e=e.return}}function xf(e,r,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var b=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var k=0;k<r.length;k++)if(E.context===r[k]){d.lanes|=s,E=d.alternate,E!==null&&(E.lanes|=s),Sf(d.return,s,e),o||(b=null);break t}d=E.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,d=b.alternate,d!==null&&(d.lanes|=s),Sf(b,s,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function ll(e,r,s,o){e=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var E=h.type;In(h.pendingProps.value,b.value)||(e!==null?e.push(E):e=[E])}}else if(h===xt.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Ll):e=[Ll])}h=h.return}e!==null&&xf(r,e,s,o),r.flags|=262144}function Xu(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){Qa=e,Wr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fn(e){return Cg(Qa,e)}function Zu(e,r){return Qa===null&&Ya(e),Cg(e,r)}function Cg(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Wr===null){if(e===null)throw Error(a(308));Wr=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else Wr=Wr.next=r;return s}var lE=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},uE=n.unstable_scheduleCallback,cE=n.unstable_NormalPriority,He={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new lE,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&uE(cE,function(){e.controller.abort()})}var cl=null,Cf=0,Ps=0,Us=null;function hE(e,r){if(cl===null){var s=cl=[];Cf=0,Ps=kd(),Us={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Cf++,r.then(Dg,Dg),r}function Dg(){if(--Cf===0&&cl!==null){Us!==null&&(Us.status="fulfilled");var e=cl;cl=null,Ps=0,Us=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function fE(e,r){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var kg=F.S;F.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&hE(e,r),kg!==null&&kg(e,r)};var Ka=W(null);function Df(){var e=Ka.current;return e!==null?e:fe.pooledCache}function Wu(e,r){r===null?tt(Ka,Ka.current):tt(Ka,r.pool)}function Ig(){var e=Df();return e===null?null:{parent:He._currentValue,pool:e}}var hl=Error(a(460)),Ng=Error(a(474)),Ju=Error(a(542)),kf={then:function(){}};function Vg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tc(){}function Mg(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(tc,tc),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,jg(e),e;default:if(typeof r.status=="string")r.then(tc,tc);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(o){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=o}},function(o){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=o}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,jg(e),e}throw fl=r,hl}}var fl=null;function Og(){if(fl===null)throw Error(a(459));var e=fl;return fl=null,e}function jg(e){if(e===hl||e===Ju)throw Error(a(483))}var Mi=!1;function If(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ji(e,r,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ne&2)!==0){var h=o.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),o.pending=r,r=Fu(e),Eg(e,null,s),r}return Gu(e,o,r,s),Fu(e)}function dl(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var o=r.lanes;o&=e.pendingLanes,s|=o,r.lanes=s,Ei(e,s)}}function Vf(e,r){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=b:d=d.next=b,s=s.next}while(s!==null);d===null?h=d=r:d=d.next=r}else h=d=r;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var Mf=!1;function ml(){if(Mf){var e=Us;if(e!==null)throw e}}function pl(e,r,s,o){Mf=!1;var h=e.updateQueue;Mi=!1;var d=h.firstBaseUpdate,b=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var k=E,$=k.next;k.next=null,b===null?d=$:b.next=$,b=k;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,E=Z.lastBaseUpdate,E!==b&&(E===null?Z.firstBaseUpdate=$:E.next=$,Z.lastBaseUpdate=k))}if(d!==null){var it=h.baseState;b=0,Z=$=k=null,E=d;do{var H=E.lane&-536870913,q=H!==E.lane;if(q?(Qt&H)===H:(o&H)===H){H!==0&&H===Ps&&(Mf=!0),Z!==null&&(Z=Z.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var kt=e,Rt=E;H=r;var le=s;switch(Rt.tag){case 1:if(kt=Rt.payload,typeof kt=="function"){it=kt.call(le,it,H);break t}it=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=Rt.payload,H=typeof kt=="function"?kt.call(le,it,H):kt,H==null)break t;it=_({},it,H);break t;case 2:Mi=!0}}H=E.callback,H!==null&&(e.flags|=64,q&&(e.flags|=8192),q=h.callbacks,q===null?h.callbacks=[H]:q.push(H))}else q={lane:H,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Z===null?($=Z=q,k=it):Z=Z.next=q,b|=H;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;q=E,E=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);Z===null&&(k=it),h.baseState=k,h.firstBaseUpdate=$,h.lastBaseUpdate=Z,d===null&&(h.shared.lanes=0),qi|=b,e.lanes=b,e.memoizedState=it}}function Lg(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function Bg(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Lg(s[e],r)}var $s=W(null),ec=W(0);function zg(e,r){e=si,tt(ec,e),tt($s,r),si=e|r.baseLanes}function Of(){tt(ec,si),tt($s,$s.current)}function jf(){si=ec.current,dt($s),dt(ec)}var Li=0,Ut=null,se=null,Oe=null,nc=!1,Hs=!1,Xa=!1,rc=0,gl=0,qs=null,dE=0;function Ne(){throw Error(a(321))}function Lf(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!In(e[s],r[s]))return!1;return!0}function Bf(e,r,s,o,h,d){return Li=d,Ut=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,F.H=e===null||e.memoizedState===null?Ey:Ty,Xa=!1,d=s(o,h),Xa=!1,Hs&&(d=Ug(r,s,o,h)),Pg(e),d}function Pg(e){F.H=uc;var r=se!==null&&se.next!==null;if(Li=0,Oe=se=Ut=null,nc=!1,gl=0,qs=null,r)throw Error(a(300));e===null||Ye||(e=e.dependencies,e!==null&&Xu(e)&&(Ye=!0))}function Ug(e,r,s,o){Ut=e;var h=0;do{if(Hs&&(qs=null),gl=0,Hs=!1,25<=h)throw Error(a(301));if(h+=1,Oe=se=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=_E,d=r(s,o)}while(Hs);return d}function mE(){var e=F.H,r=e.useState()[0];return r=typeof r.then=="function"?yl(r):r,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(Ut.flags|=1024),r}function zf(){var e=rc!==0;return rc=0,e}function Pf(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function Uf(e){if(nc){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}nc=!1}Li=0,Oe=se=Ut=null,Hs=!1,gl=rc=0,qs=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Ut.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function je(){if(se===null){var e=Ut.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var r=Oe===null?Ut.memoizedState:Oe.next;if(r!==null)Oe=r,se=e;else{if(e===null)throw Ut.alternate===null?Error(a(467)):Error(a(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},Oe===null?Ut.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function $f(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var r=gl;return gl+=1,qs===null&&(qs=[]),e=Mg(qs,e,r),r=Ut,(Oe===null?r.memoizedState:Oe.next)===null&&(r=r.alternate,F.H=r===null||r.memoizedState===null?Ey:Ty),e}function ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===X)return fn(e)}throw Error(a(438,String(e)))}function Hf(e){var r=null,s=Ut.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var o=Ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(r={data:o.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=$f(),Ut.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),o=0;o<e;o++)s[o]=V;return r.index++,s}function ti(e,r){return typeof r=="function"?r(e):r}function ac(e){var r=je();return qf(r,se,e)}function qf(e,r,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var b=h.next;h.next=d.next,d.next=b}r.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{r=h.next;var E=b=null,k=null,$=r,Z=!1;do{var it=$.lane&-536870913;if(it!==$.lane?(Qt&it)===it:(Li&it)===it){var H=$.revertLane;if(H===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),it===Ps&&(Z=!0);else if((Li&H)===H){$=$.next,H===Ps&&(Z=!0);continue}else it={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},k===null?(E=k=it,b=d):k=k.next=it,Ut.lanes|=H,qi|=H;it=$.action,Xa&&s(d,it),d=$.hasEagerState?$.eagerState:s(d,it)}else H={lane:it,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},k===null?(E=k=H,b=d):k=k.next=H,Ut.lanes|=it,qi|=it;$=$.next}while($!==null&&$!==r);if(k===null?b=d:k.next=E,!In(d,e.memoizedState)&&(Ye=!0,Z&&(s=Us,s!==null)))throw s;e.memoizedState=d,e.baseState=b,e.baseQueue=k,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Gf(e){var r=je(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,d=r.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do d=e(d,b.action),b=b.next;while(b!==h);In(d,r.memoizedState)||(Ye=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),s.lastRenderedState=d}return[d,o]}function $g(e,r,s){var o=Ut,h=je(),d=Wt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=r();var b=!In((se||h).memoizedState,s);b&&(h.memoizedState=s,Ye=!0),h=h.queue;var E=Gg.bind(null,o,h,e);if(vl(2048,8,E,[e]),h.getSnapshot!==r||b||Oe!==null&&Oe.memoizedState.tag&1){if(o.flags|=2048,Gs(9,sc(),qg.bind(null,o,h,s,r),null),fe===null)throw Error(a(349));d||(Li&124)!==0||Hg(o,r,s)}return s}function Hg(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Ut.updateQueue,r===null?(r=$f(),Ut.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function qg(e,r,s,o){r.value=s,r.getSnapshot=o,Fg(r)&&Qg(e)}function Gg(e,r,s){return s(function(){Fg(r)&&Qg(e)})}function Fg(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!In(e,s)}catch{return!0}}function Qg(e){var r=js(e,2);r!==null&&Ln(r,e,2)}function Ff(e){var r=wn();if(typeof e=="function"){var s=e;if(e=s(),Xa){Un(!0);try{s()}finally{Un(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},r}function Yg(e,r,s,o){return e.baseState=s,qf(e,se,typeof o=="function"?o:ti)}function pE(e,r,s,o,h){if(lc(e))throw Error(a(485));if(e=r.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};F.T!==null?s(!0):d.isTransition=!1,o(d),s=r.pending,s===null?(d.next=r.pending=d,Kg(r,d)):(d.next=s.next,r.pending=s.next=d)}}function Kg(e,r){var s=r.action,o=r.payload,h=e.state;if(r.isTransition){var d=F.T,b={};F.T=b;try{var E=s(h,o),k=F.S;k!==null&&k(b,E),Xg(e,r,E)}catch($){Qf(e,r,$)}finally{F.T=d}}else try{d=s(h,o),Xg(e,r,d)}catch($){Qf(e,r,$)}}function Xg(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Zg(e,r,o)},function(o){return Qf(e,r,o)}):Zg(e,r,s)}function Zg(e,r,s){r.status="fulfilled",r.value=s,Wg(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,Kg(e,s)))}function Qf(e,r,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do r.status="rejected",r.reason=s,Wg(r),r=r.next;while(r!==o)}e.action=null}function Wg(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function Jg(e,r){return r}function ty(e,r){if(Wt){var s=fe.formState;if(s!==null){t:{var o=Ut;if(Wt){if(Se){e:{for(var h=Se,d=wr;h.nodeType!==8;){if(!d){h=null;break e}if(h=cr(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Se=cr(h.nextSibling),o=h.data==="F!";break t}}Fa(o)}o=!1}o&&(r=s[0])}}return s=wn(),s.memoizedState=s.baseState=r,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jg,lastRenderedState:r},s.queue=o,s=by.bind(null,Ut,o),o.dispatch=s,o=Ff(!1),d=Wf.bind(null,Ut,!1,o.queue),o=wn(),h={state:r,dispatch:null,action:e,pending:null},o.queue=h,s=pE.bind(null,Ut,h,d,s),h.dispatch=s,o.memoizedState=e,[r,s,!1]}function ey(e){var r=je();return ny(r,se,e)}function ny(e,r,s){if(r=qf(e,r,Jg)[0],e=ac(ti)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var o=yl(r)}catch(b){throw b===hl?Ju:b}else o=r;r=je();var h=r.queue,d=h.dispatch;return s!==r.memoizedState&&(Ut.flags|=2048,Gs(9,sc(),gE.bind(null,h,s),null)),[o,d,e]}function gE(e,r){e.action=r}function ry(e){var r=je(),s=se;if(s!==null)return ny(r,s,e);je(),r=r.memoizedState,s=je();var o=s.queue.dispatch;return s.memoizedState=e,[r,o,!1]}function Gs(e,r,s,o){return e={tag:e,create:s,deps:o,inst:r,next:null},r=Ut.updateQueue,r===null&&(r=$f(),Ut.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,r.lastEffect=e),e}function sc(){return{destroy:void 0,resource:void 0}}function iy(){return je().memoizedState}function oc(e,r,s,o){var h=wn();o=o===void 0?null:o,Ut.flags|=e,h.memoizedState=Gs(1|r,sc(),s,o)}function vl(e,r,s,o){var h=je();o=o===void 0?null:o;var d=h.memoizedState.inst;se!==null&&o!==null&&Lf(o,se.memoizedState.deps)?h.memoizedState=Gs(r,d,s,o):(Ut.flags|=e,h.memoizedState=Gs(1|r,d,s,o))}function ay(e,r){oc(8390656,8,e,r)}function sy(e,r){vl(2048,8,e,r)}function oy(e,r){return vl(4,2,e,r)}function ly(e,r){return vl(4,4,e,r)}function uy(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function cy(e,r,s){s=s!=null?s.concat([e]):null,vl(4,4,uy.bind(null,r,e),s)}function Yf(){}function hy(e,r){var s=je();r=r===void 0?null:r;var o=s.memoizedState;return r!==null&&Lf(r,o[1])?o[0]:(s.memoizedState=[e,r],e)}function fy(e,r){var s=je();r=r===void 0?null:r;var o=s.memoizedState;if(r!==null&&Lf(r,o[1]))return o[0];if(o=e(),Xa){Un(!0);try{e()}finally{Un(!1)}}return s.memoizedState=[o,r],o}function Kf(e,r,s){return s===void 0||(Li&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=p0(),Ut.lanes|=e,qi|=e,s)}function dy(e,r,s,o){return In(s,r)?s:$s.current!==null?(e=Kf(e,s,o),In(e,r)||(Ye=!0),e):(Li&42)===0?(Ye=!0,e.memoizedState=s):(e=p0(),Ut.lanes|=e,qi|=e,r)}function my(e,r,s,o,h){var d=ht.p;ht.p=d!==0&&8>d?d:8;var b=F.T,E={};F.T=E,Wf(e,!1,r,s);try{var k=h(),$=F.S;if($!==null&&$(E,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Z=fE(k,o);bl(e,r,Z,jn(e))}else bl(e,r,o,jn(e))}catch(it){bl(e,r,{then:function(){},status:"rejected",reason:it},jn())}finally{ht.p=d,F.T=b}}function yE(){}function Xf(e,r,s,o){if(e.tag!==5)throw Error(a(476));var h=py(e).queue;my(e,h,r,ft,s===null?yE:function(){return gy(e),s(o)})}function py(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:ft},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function gy(e){var r=py(e).next.queue;bl(e,r,{},jn())}function Zf(){return fn(Ll)}function yy(){return je().memoizedState}function vy(){return je().memoizedState}function vE(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=jn();e=Oi(s);var o=ji(r,e,s);o!==null&&(Ln(o,r,s),dl(o,r,s)),r={cache:Rf()},e.payload=r;return}r=r.return}}function bE(e,r,s){var o=jn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},lc(e)?_y(r,s):(s=yf(e,r,s,o),s!==null&&(Ln(s,e,o),Ay(s,r,o)))}function by(e,r,s){var o=jn();bl(e,r,s,o)}function bl(e,r,s,o){var h={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(lc(e))_y(r,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var b=r.lastRenderedState,E=d(b,s);if(h.hasEagerState=!0,h.eagerState=E,In(E,b))return Gu(e,r,h,0),fe===null&&qu(),!1}catch{}finally{}if(s=yf(e,r,h,o),s!==null)return Ln(s,e,o),Ay(s,r,o),!0}return!1}function Wf(e,r,s,o){if(o={lane:2,revertLane:kd(),action:o,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(r)throw Error(a(479))}else r=yf(e,s,o,2),r!==null&&Ln(r,e,2)}function lc(e){var r=e.alternate;return e===Ut||r!==null&&r===Ut}function _y(e,r){Hs=nc=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function Ay(e,r,s){if((s&4194048)!==0){var o=r.lanes;o&=e.pendingLanes,s|=o,r.lanes=s,Ei(e,s)}}var uc={readContext:fn,use:ic,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Ey={readContext:fn,use:ic,useCallback:function(e,r){return wn().memoizedState=[e,r===void 0?null:r],e},useContext:fn,useEffect:ay,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,oc(4194308,4,uy.bind(null,r,e),s)},useLayoutEffect:function(e,r){return oc(4194308,4,e,r)},useInsertionEffect:function(e,r){oc(4,2,e,r)},useMemo:function(e,r){var s=wn();r=r===void 0?null:r;var o=e();if(Xa){Un(!0);try{e()}finally{Un(!1)}}return s.memoizedState=[o,r],o},useReducer:function(e,r,s){var o=wn();if(s!==void 0){var h=s(r);if(Xa){Un(!0);try{s(r)}finally{Un(!1)}}}else h=r;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=bE.bind(null,Ut,e),[o.memoizedState,e]},useRef:function(e){var r=wn();return e={current:e},r.memoizedState=e},useState:function(e){e=Ff(e);var r=e.queue,s=by.bind(null,Ut,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:Yf,useDeferredValue:function(e,r){var s=wn();return Kf(s,e,r)},useTransition:function(){var e=Ff(!1);return e=my.bind(null,Ut,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var o=Ut,h=wn();if(Wt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),fe===null)throw Error(a(349));(Qt&124)!==0||Hg(o,r,s)}h.memoizedState=s;var d={value:s,getSnapshot:r};return h.queue=d,ay(Gg.bind(null,o,d,e),[e]),o.flags|=2048,Gs(9,sc(),qg.bind(null,o,d,s,r),null),s},useId:function(){var e=wn(),r=fe.identifierPrefix;if(Wt){var s=Zr,o=Xr;s=(o&~(1<<32-yn(o)-1)).toString(32)+s,r="«"+r+"R"+s,s=rc++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=dE++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:Zf,useFormState:ty,useActionState:ty,useOptimistic:function(e){var r=wn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Wf.bind(null,Ut,!0,s),s.dispatch=r,[e,r]},useMemoCache:Hf,useCacheRefresh:function(){return wn().memoizedState=vE.bind(null,Ut)}},Ty={readContext:fn,use:ic,useCallback:hy,useContext:fn,useEffect:sy,useImperativeHandle:cy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:fy,useReducer:ac,useRef:iy,useState:function(){return ac(ti)},useDebugValue:Yf,useDeferredValue:function(e,r){var s=je();return dy(s,se.memoizedState,e,r)},useTransition:function(){var e=ac(ti)[0],r=je().memoizedState;return[typeof e=="boolean"?e:yl(e),r]},useSyncExternalStore:$g,useId:yy,useHostTransitionStatus:Zf,useFormState:ey,useActionState:ey,useOptimistic:function(e,r){var s=je();return Yg(s,se,e,r)},useMemoCache:Hf,useCacheRefresh:vy},_E={readContext:fn,use:ic,useCallback:hy,useContext:fn,useEffect:sy,useImperativeHandle:cy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:fy,useReducer:Gf,useRef:iy,useState:function(){return Gf(ti)},useDebugValue:Yf,useDeferredValue:function(e,r){var s=je();return se===null?Kf(s,e,r):dy(s,se.memoizedState,e,r)},useTransition:function(){var e=Gf(ti)[0],r=je().memoizedState;return[typeof e=="boolean"?e:yl(e),r]},useSyncExternalStore:$g,useId:yy,useHostTransitionStatus:Zf,useFormState:ry,useActionState:ry,useOptimistic:function(e,r){var s=je();return se!==null?Yg(s,se,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:vy},Fs=null,_l=0;function cc(e){var r=_l;return _l+=1,Fs===null&&(Fs=[]),Mg(Fs,e,r)}function Al(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function hc(e,r){throw r.$$typeof===T?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function wy(e){var r=e._init;return r(e._payload)}function Sy(e){function r(L,O){if(e){var P=L.deletions;P===null?(L.deletions=[O],L.flags|=16):P.push(O)}}function s(L,O){if(!e)return null;for(;O!==null;)r(L,O),O=O.sibling;return null}function o(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function h(L,O){return L=Kr(L,O),L.index=0,L.sibling=null,L}function d(L,O,P){return L.index=P,e?(P=L.alternate,P!==null?(P=P.index,P<O?(L.flags|=67108866,O):P):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function b(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function E(L,O,P,et){return O===null||O.tag!==6?(O=bf(P,L.mode,et),O.return=L,O):(O=h(O,P),O.return=L,O)}function k(L,O,P,et){var Et=P.type;return Et===G?Z(L,O,P.props.children,et,P.key):O!==null&&(O.elementType===Et||typeof Et=="object"&&Et!==null&&Et.$$typeof===x&&wy(Et)===O.type)?(O=h(O,P.props),Al(O,P),O.return=L,O):(O=Qu(P.type,P.key,P.props,null,L.mode,et),Al(O,P),O.return=L,O)}function $(L,O,P,et){return O===null||O.tag!==4||O.stateNode.containerInfo!==P.containerInfo||O.stateNode.implementation!==P.implementation?(O=_f(P,L.mode,et),O.return=L,O):(O=h(O,P.children||[]),O.return=L,O)}function Z(L,O,P,et,Et){return O===null||O.tag!==7?(O=$a(P,L.mode,et,Et),O.return=L,O):(O=h(O,P),O.return=L,O)}function it(L,O,P){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=bf(""+O,L.mode,P),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return P=Qu(O.type,O.key,O.props,null,L.mode,P),Al(P,O),P.return=L,P;case M:return O=_f(O,L.mode,P),O.return=L,O;case x:var et=O._init;return O=et(O._payload),it(L,O,P)}if(vt(O)||j(O))return O=$a(O,L.mode,P,null),O.return=L,O;if(typeof O.then=="function")return it(L,cc(O),P);if(O.$$typeof===X)return it(L,Zu(L,O),P);hc(L,O)}return null}function H(L,O,P,et){var Et=O!==null?O.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return Et!==null?null:E(L,O,""+P,et);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return P.key===Et?k(L,O,P,et):null;case M:return P.key===Et?$(L,O,P,et):null;case x:return Et=P._init,P=Et(P._payload),H(L,O,P,et)}if(vt(P)||j(P))return Et!==null?null:Z(L,O,P,et,null);if(typeof P.then=="function")return H(L,O,cc(P),et);if(P.$$typeof===X)return H(L,O,Zu(L,P),et);hc(L,P)}return null}function q(L,O,P,et,Et){if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return L=L.get(P)||null,E(O,L,""+et,Et);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return L=L.get(et.key===null?P:et.key)||null,k(O,L,et,Et);case M:return L=L.get(et.key===null?P:et.key)||null,$(O,L,et,Et);case x:var $t=et._init;return et=$t(et._payload),q(L,O,P,et,Et)}if(vt(et)||j(et))return L=L.get(P)||null,Z(O,L,et,Et,null);if(typeof et.then=="function")return q(L,O,P,cc(et),Et);if(et.$$typeof===X)return q(L,O,P,Zu(O,et),Et);hc(O,et)}return null}function kt(L,O,P,et){for(var Et=null,$t=null,wt=O,Ct=O=0,Xe=null;wt!==null&&Ct<P.length;Ct++){wt.index>Ct?(Xe=wt,wt=null):Xe=wt.sibling;var Zt=H(L,wt,P[Ct],et);if(Zt===null){wt===null&&(wt=Xe);break}e&&wt&&Zt.alternate===null&&r(L,wt),O=d(Zt,O,Ct),$t===null?Et=Zt:$t.sibling=Zt,$t=Zt,wt=Xe}if(Ct===P.length)return s(L,wt),Wt&&qa(L,Ct),Et;if(wt===null){for(;Ct<P.length;Ct++)wt=it(L,P[Ct],et),wt!==null&&(O=d(wt,O,Ct),$t===null?Et=wt:$t.sibling=wt,$t=wt);return Wt&&qa(L,Ct),Et}for(wt=o(wt);Ct<P.length;Ct++)Xe=q(wt,L,Ct,P[Ct],et),Xe!==null&&(e&&Xe.alternate!==null&&wt.delete(Xe.key===null?Ct:Xe.key),O=d(Xe,O,Ct),$t===null?Et=Xe:$t.sibling=Xe,$t=Xe);return e&&wt.forEach(function(Ji){return r(L,Ji)}),Wt&&qa(L,Ct),Et}function Rt(L,O,P,et){if(P==null)throw Error(a(151));for(var Et=null,$t=null,wt=O,Ct=O=0,Xe=null,Zt=P.next();wt!==null&&!Zt.done;Ct++,Zt=P.next()){wt.index>Ct?(Xe=wt,wt=null):Xe=wt.sibling;var Ji=H(L,wt,Zt.value,et);if(Ji===null){wt===null&&(wt=Xe);break}e&&wt&&Ji.alternate===null&&r(L,wt),O=d(Ji,O,Ct),$t===null?Et=Ji:$t.sibling=Ji,$t=Ji,wt=Xe}if(Zt.done)return s(L,wt),Wt&&qa(L,Ct),Et;if(wt===null){for(;!Zt.done;Ct++,Zt=P.next())Zt=it(L,Zt.value,et),Zt!==null&&(O=d(Zt,O,Ct),$t===null?Et=Zt:$t.sibling=Zt,$t=Zt);return Wt&&qa(L,Ct),Et}for(wt=o(wt);!Zt.done;Ct++,Zt=P.next())Zt=q(wt,L,Ct,Zt.value,et),Zt!==null&&(e&&Zt.alternate!==null&&wt.delete(Zt.key===null?Ct:Zt.key),O=d(Zt,O,Ct),$t===null?Et=Zt:$t.sibling=Zt,$t=Zt);return e&&wt.forEach(function(AT){return r(L,AT)}),Wt&&qa(L,Ct),Et}function le(L,O,P,et){if(typeof P=="object"&&P!==null&&P.type===G&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case S:t:{for(var Et=P.key;O!==null;){if(O.key===Et){if(Et=P.type,Et===G){if(O.tag===7){s(L,O.sibling),et=h(O,P.props.children),et.return=L,L=et;break t}}else if(O.elementType===Et||typeof Et=="object"&&Et!==null&&Et.$$typeof===x&&wy(Et)===O.type){s(L,O.sibling),et=h(O,P.props),Al(et,P),et.return=L,L=et;break t}s(L,O);break}else r(L,O);O=O.sibling}P.type===G?(et=$a(P.props.children,L.mode,et,P.key),et.return=L,L=et):(et=Qu(P.type,P.key,P.props,null,L.mode,et),Al(et,P),et.return=L,L=et)}return b(L);case M:t:{for(Et=P.key;O!==null;){if(O.key===Et)if(O.tag===4&&O.stateNode.containerInfo===P.containerInfo&&O.stateNode.implementation===P.implementation){s(L,O.sibling),et=h(O,P.children||[]),et.return=L,L=et;break t}else{s(L,O);break}else r(L,O);O=O.sibling}et=_f(P,L.mode,et),et.return=L,L=et}return b(L);case x:return Et=P._init,P=Et(P._payload),le(L,O,P,et)}if(vt(P))return kt(L,O,P,et);if(j(P)){if(Et=j(P),typeof Et!="function")throw Error(a(150));return P=Et.call(P),Rt(L,O,P,et)}if(typeof P.then=="function")return le(L,O,cc(P),et);if(P.$$typeof===X)return le(L,O,Zu(L,P),et);hc(L,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,O!==null&&O.tag===6?(s(L,O.sibling),et=h(O,P),et.return=L,L=et):(s(L,O),et=bf(P,L.mode,et),et.return=L,L=et),b(L)):s(L,O)}return function(L,O,P,et){try{_l=0;var Et=le(L,O,P,et);return Fs=null,Et}catch(wt){if(wt===hl||wt===Ju)throw wt;var $t=Nn(29,wt,null,L.mode);return $t.lanes=et,$t.return=L,$t}finally{}}}var Qs=Sy(!0),xy=Sy(!1),Xn=W(null),Sr=null;function Bi(e){var r=e.alternate;tt(qe,qe.current&1),tt(Xn,e),Sr===null&&(r===null||$s.current!==null||r.memoizedState!==null)&&(Sr=e)}function Ry(e){if(e.tag===22){if(tt(qe,qe.current),tt(Xn,e),Sr===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(Sr=e)}}else zi()}function zi(){tt(qe,qe.current),tt(Xn,Xn.current)}function ei(e){dt(Xn),Sr===e&&(Sr=null),dt(qe)}var qe=W(0);function fc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||$d(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Jf(e,r,s,o){r=e.memoizedState,s=s(o,r),s=s==null?r:_({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var td={enqueueSetState:function(e,r,s){e=e._reactInternals;var o=jn(),h=Oi(o);h.payload=r,s!=null&&(h.callback=s),r=ji(e,h,o),r!==null&&(Ln(r,e,o),dl(r,e,o))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var o=jn(),h=Oi(o);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=ji(e,h,o),r!==null&&(Ln(r,e,o),dl(r,e,o))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=jn(),o=Oi(s);o.tag=2,r!=null&&(o.callback=r),r=ji(e,o,s),r!==null&&(Ln(r,e,s),dl(r,e,s))}};function Cy(e,r,s,o,h,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,b):r.prototype&&r.prototype.isPureReactComponent?!rl(s,o)||!rl(h,d):!0}function Dy(e,r,s,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,o),r.state!==e&&td.enqueueReplaceState(r,r.state,null)}function Za(e,r){var s=r;if("ref"in r){s={};for(var o in r)o!=="ref"&&(s[o]=r[o])}if(e=e.defaultProps){s===r&&(s=_({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ky(e){dc(e)}function Iy(e){console.error(e)}function Ny(e){dc(e)}function mc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(o){setTimeout(function(){throw o})}}function Vy(e,r,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ed(e,r,s){return s=Oi(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(e,r)},s}function My(e){return e=Oi(e),e.tag=3,e}function Oy(e,r,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){Vy(r,s,o)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Vy(r,s,o),typeof h!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function AE(e,r,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(r=s.alternate,r!==null&&ll(r,s,h,!0),s=Xn.current,s!==null){switch(s.tag){case 13:return Sr===null?Sd():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===kf?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([o]):r.add(o),Rd(e,o,h)),!1;case 22:return s.flags|=65536,o===kf?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([o]):s.add(o)),Rd(e,o,h)),!1}throw Error(a(435,s.tag))}return Rd(e,o,h),Sd(),!1}if(Wt)return r=Xn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,o!==Tf&&(e=Error(a(422),{cause:o}),ol(Fn(e,s)))):(o!==Tf&&(r=Error(a(423),{cause:o}),ol(Fn(r,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=Fn(o,s),h=ed(e.stateNode,o,h),Vf(e,h),xe!==4&&(xe=2)),!1;var d=Error(a(520),{cause:o});if(d=Fn(d,s),Cl===null?Cl=[d]:Cl.push(d),xe!==4&&(xe=2),r===null)return!0;o=Fn(o,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=ed(s.stateNode,o,e),Vf(s,e),!1;case 1:if(r=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Gi===null||!Gi.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=My(h),Oy(h,e,s,o),Vf(s,h),!1}s=s.return}while(s!==null);return!1}var jy=Error(a(461)),Ye=!1;function nn(e,r,s,o){r.child=e===null?xy(r,null,s,o):Qs(r,e.child,s,o)}function Ly(e,r,s,o,h){s=s.render;var d=r.ref;if("ref"in o){var b={};for(var E in o)E!=="ref"&&(b[E]=o[E])}else b=o;return Ya(r),o=Bf(e,r,s,b,d,h),E=zf(),e!==null&&!Ye?(Pf(e,r,h),ni(e,r,h)):(Wt&&E&&Af(r),r.flags|=1,nn(e,r,o,h),r.child)}function By(e,r,s,o,h){if(e===null){var d=s.type;return typeof d=="function"&&!vf(d)&&d.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=d,zy(e,r,d,o,h)):(e=Qu(s.type,null,o,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(d=e.child,!ud(e,h)){var b=d.memoizedProps;if(s=s.compare,s=s!==null?s:rl,s(b,o)&&e.ref===r.ref)return ni(e,r,h)}return r.flags|=1,e=Kr(d,o),e.ref=r.ref,e.return=r,r.child=e}function zy(e,r,s,o,h){if(e!==null){var d=e.memoizedProps;if(rl(d,o)&&e.ref===r.ref)if(Ye=!1,r.pendingProps=o=d,ud(e,h))(e.flags&131072)!==0&&(Ye=!0);else return r.lanes=e.lanes,ni(e,r,h)}return nd(e,r,s,o,h)}function Py(e,r,s){var o=r.pendingProps,h=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((r.flags&128)!==0){if(o=d!==null?d.baseLanes|s:s,e!==null){for(h=r.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~o}else r.childLanes=0,r.child=null;return Uy(e,r,o,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wu(r,d!==null?d.cachePool:null),d!==null?zg(r,d):Of(),Ry(r);else return r.lanes=r.childLanes=536870912,Uy(e,r,d!==null?d.baseLanes|s:s,s)}else d!==null?(Wu(r,d.cachePool),zg(r,d),zi(),r.memoizedState=null):(e!==null&&Wu(r,null),Of(),zi());return nn(e,r,h,s),r.child}function Uy(e,r,s,o){var h=Df();return h=h===null?null:{parent:He._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},e!==null&&Wu(r,null),Of(),Ry(r),e!==null&&ll(e,r,o,!0),null}function pc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function nd(e,r,s,o,h){return Ya(r),s=Bf(e,r,s,o,void 0,h),o=zf(),e!==null&&!Ye?(Pf(e,r,h),ni(e,r,h)):(Wt&&o&&Af(r),r.flags|=1,nn(e,r,s,h),r.child)}function $y(e,r,s,o,h,d){return Ya(r),r.updateQueue=null,s=Ug(r,o,s,h),Pg(e),o=zf(),e!==null&&!Ye?(Pf(e,r,d),ni(e,r,d)):(Wt&&o&&Af(r),r.flags|=1,nn(e,r,s,d),r.child)}function Hy(e,r,s,o,h){if(Ya(r),r.stateNode===null){var d=Ls,b=s.contextType;typeof b=="object"&&b!==null&&(d=fn(b)),d=new s(o,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=td,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=o,d.state=r.memoizedState,d.refs={},If(r),b=s.contextType,d.context=typeof b=="object"&&b!==null?fn(b):Ls,d.state=r.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Jf(r,s,b,o),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&td.enqueueReplaceState(d,d.state,null),pl(r,o,d,h),ml(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!0}else if(e===null){d=r.stateNode;var E=r.memoizedProps,k=Za(s,E);d.props=k;var $=d.context,Z=s.contextType;b=Ls,typeof Z=="object"&&Z!==null&&(b=fn(Z));var it=s.getDerivedStateFromProps;Z=typeof it=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=r.pendingProps!==E,Z||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||$!==b)&&Dy(r,d,o,b),Mi=!1;var H=r.memoizedState;d.state=H,pl(r,o,d,h),ml(),$=r.memoizedState,E||H!==$||Mi?(typeof it=="function"&&(Jf(r,s,it,o),$=r.memoizedState),(k=Mi||Cy(r,s,k,o,H,$,b))?(Z||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=$),d.props=o,d.state=$,d.context=b,o=k):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Nf(e,r),b=r.memoizedProps,Z=Za(s,b),d.props=Z,it=r.pendingProps,H=d.context,$=s.contextType,k=Ls,typeof $=="object"&&$!==null&&(k=fn($)),E=s.getDerivedStateFromProps,($=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==it||H!==k)&&Dy(r,d,o,k),Mi=!1,H=r.memoizedState,d.state=H,pl(r,o,d,h),ml();var q=r.memoizedState;b!==it||H!==q||Mi||e!==null&&e.dependencies!==null&&Xu(e.dependencies)?(typeof E=="function"&&(Jf(r,s,E,o),q=r.memoizedState),(Z=Mi||Cy(r,s,Z,o,H,q,k)||e!==null&&e.dependencies!==null&&Xu(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,q,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,q,k)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=q),d.props=o,d.state=q,d.context=k,o=Z):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),o=!1)}return d=o,pc(e,r),o=(r.flags&128)!==0,d||o?(d=r.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,e!==null&&o?(r.child=Qs(r,e.child,null,h),r.child=Qs(r,null,s,h)):nn(e,r,s,h),r.memoizedState=d.state,e=r.child):e=ni(e,r,h),e}function qy(e,r,s,o){return sl(),r.flags|=256,nn(e,r,s,o),r.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function id(e){return{baseLanes:e,cachePool:Ig()}}function ad(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=Zn),e}function Gy(e,r,s){var o=r.pendingProps,h=!1,d=(r.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),b&&(h=!0,r.flags&=-129),b=(r.flags&32)!==0,r.flags&=-33,e===null){if(Wt){if(h?Bi(r):zi(),Wt){var E=Se,k;if(k=E){t:{for(k=E,E=wr;k.nodeType!==8;){if(!E){E=null;break t}if(k=cr(k.nextSibling),k===null){E=null;break t}}E=k}E!==null?(r.memoizedState={dehydrated:E,treeContext:Ha!==null?{id:Xr,overflow:Zr}:null,retryLane:536870912,hydrationErrors:null},k=Nn(18,null,null,0),k.stateNode=E,k.return=r,r.child=k,An=r,Se=null,k=!0):k=!1}k||Fa(r)}if(E=r.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return $d(E)?r.lanes=32:r.lanes=536870912,null;ei(r)}return E=o.children,o=o.fallback,h?(zi(),h=r.mode,E=gc({mode:"hidden",children:E},h),o=$a(o,h,s,null),E.return=r,o.return=r,E.sibling=o,r.child=E,h=r.child,h.memoizedState=id(s),h.childLanes=ad(e,b,s),r.memoizedState=rd,o):(Bi(r),sd(r,E))}if(k=e.memoizedState,k!==null&&(E=k.dehydrated,E!==null)){if(d)r.flags&256?(Bi(r),r.flags&=-257,r=od(e,r,s)):r.memoizedState!==null?(zi(),r.child=e.child,r.flags|=128,r=null):(zi(),h=o.fallback,E=r.mode,o=gc({mode:"visible",children:o.children},E),h=$a(h,E,s,null),h.flags|=2,o.return=r,h.return=r,o.sibling=h,r.child=o,Qs(r,e.child,null,s),o=r.child,o.memoizedState=id(s),o.childLanes=ad(e,b,s),r.memoizedState=rd,r=h);else if(Bi(r),$d(E)){if(b=E.nextSibling&&E.nextSibling.dataset,b)var $=b.dgst;b=$,o=Error(a(419)),o.stack="",o.digest=b,ol({value:o,source:null,stack:null}),r=od(e,r,s)}else if(Ye||ll(e,r,s,!1),b=(s&e.childLanes)!==0,Ye||b){if(b=fe,b!==null&&(o=s&-s,o=(o&42)!==0?1:Po(o),o=(o&(b.suspendedLanes|s))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,js(e,o),Ln(b,e,o),jy;E.data==="$?"||Sd(),r=od(e,r,s)}else E.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=k.treeContext,Se=cr(E.nextSibling),An=r,Wt=!0,Ga=null,wr=!1,e!==null&&(Yn[Kn++]=Xr,Yn[Kn++]=Zr,Yn[Kn++]=Ha,Xr=e.id,Zr=e.overflow,Ha=r),r=sd(r,o.children),r.flags|=4096);return r}return h?(zi(),h=o.fallback,E=r.mode,k=e.child,$=k.sibling,o=Kr(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,$!==null?h=Kr($,h):(h=$a(h,E,s,null),h.flags|=2),h.return=r,o.return=r,o.sibling=h,r.child=o,o=h,h=r.child,E=e.child.memoizedState,E===null?E=id(s):(k=E.cachePool,k!==null?($=He._currentValue,k=k.parent!==$?{parent:$,pool:$}:k):k=Ig(),E={baseLanes:E.baseLanes|s,cachePool:k}),h.memoizedState=E,h.childLanes=ad(e,b,s),r.memoizedState=rd,o):(Bi(r),s=e.child,e=s.sibling,s=Kr(s,{mode:"visible",children:o.children}),s.return=r,s.sibling=null,e!==null&&(b=r.deletions,b===null?(r.deletions=[e],r.flags|=16):b.push(e)),r.child=s,r.memoizedState=null,s)}function sd(e,r){return r=gc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function gc(e,r){return e=Nn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function od(e,r,s){return Qs(r,e.child,null,s),e=sd(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Fy(e,r,s){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Sf(e.return,r,s)}function ld(e,r,s,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=h)}function Qy(e,r,s){var o=r.pendingProps,h=o.revealOrder,d=o.tail;if(nn(e,r,o.children,s),o=qe.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fy(e,s,r);else if(e.tag===19)Fy(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(tt(qe,o),h){case"forwards":for(s=r.child,h=null;s!==null;)e=s.alternate,e!==null&&fc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),ld(r,!1,h,s,d);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&fc(e)===null){r.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}ld(r,!0,s,null,d);break;case"together":ld(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ni(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),qi|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(ll(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=Kr(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=Kr(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function ud(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Xu(e)))}function EE(e,r,s){switch(r.tag){case 3:It(r,r.stateNode.containerInfo),Vi(r,He,e.memoizedState.cache),sl();break;case 27:case 5:Nt(r);break;case 4:It(r,r.stateNode.containerInfo);break;case 10:Vi(r,r.type,r.memoizedProps.value);break;case 13:var o=r.memoizedState;if(o!==null)return o.dehydrated!==null?(Bi(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Gy(e,r,s):(Bi(r),e=ni(e,r,s),e!==null?e.sibling:null);Bi(r);break;case 19:var h=(e.flags&128)!==0;if(o=(s&r.childLanes)!==0,o||(ll(e,r,s,!1),o=(s&r.childLanes)!==0),h){if(o)return Qy(e,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),tt(qe,qe.current),o)break;return null;case 22:case 23:return r.lanes=0,Py(e,r,s);case 24:Vi(r,He,e.memoizedState.cache)}return ni(e,r,s)}function Yy(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)Ye=!0;else{if(!ud(e,s)&&(r.flags&128)===0)return Ye=!1,EE(e,r,s);Ye=(e.flags&131072)!==0}else Ye=!1,Wt&&(r.flags&1048576)!==0&&wg(r,Ku,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var o=r.elementType,h=o._init;if(o=h(o._payload),r.type=o,typeof o=="function")vf(o)?(e=Za(o,e),r.tag=1,r=Hy(null,r,o,e,s)):(r.tag=0,r=nd(null,r,o,e,s));else{if(o!=null){if(h=o.$$typeof,h===mt){r.tag=11,r=Ly(null,r,o,e,s);break t}else if(h===R){r.tag=14,r=By(null,r,o,e,s);break t}}throw r=Mt(o)||o,Error(a(306,r,""))}}return r;case 0:return nd(e,r,r.type,r.pendingProps,s);case 1:return o=r.type,h=Za(o,r.pendingProps),Hy(e,r,o,h,s);case 3:t:{if(It(r,r.stateNode.containerInfo),e===null)throw Error(a(387));o=r.pendingProps;var d=r.memoizedState;h=d.element,Nf(e,r),pl(r,o,null,s);var b=r.memoizedState;if(o=b.cache,Vi(r,He,o),o!==d.cache&&xf(r,[He],s,!0),ml(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=qy(e,r,o,s);break t}else if(o!==h){h=Fn(Error(a(424)),r),ol(h),r=qy(e,r,o,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=cr(e.firstChild),An=r,Wt=!0,Ga=null,wr=!0,s=xy(r,null,o,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(sl(),o===h){r=ni(e,r,s);break t}nn(e,r,o,s)}r=r.child}return r;case 26:return pc(e,r),e===null?(s=W0(r.type,null,r.pendingProps,null))?r.memoizedState=s:Wt||(s=r.type,e=r.pendingProps,o=kc(pt.current).createElement(s),o[De]=r,o[en]=e,an(o,s,e),ke(o),r.stateNode=o):r.memoizedState=W0(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Nt(r),e===null&&Wt&&(o=r.stateNode=K0(r.type,r.pendingProps,pt.current),An=r,wr=!0,h=Se,Yi(r.type)?(Hd=h,Se=cr(o.firstChild)):Se=h),nn(e,r,r.pendingProps.children,s),pc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Wt&&((h=o=Se)&&(o=XE(o,r.type,r.pendingProps,wr),o!==null?(r.stateNode=o,An=r,Se=cr(o.firstChild),wr=!1,h=!0):h=!1),h||Fa(r)),Nt(r),h=r.type,d=r.pendingProps,b=e!==null?e.memoizedProps:null,o=d.children,zd(h,d)?o=null:b!==null&&zd(h,b)&&(r.flags|=32),r.memoizedState!==null&&(h=Bf(e,r,mE,null,null,s),Ll._currentValue=h),pc(e,r),nn(e,r,o,s),r.child;case 6:return e===null&&Wt&&((e=s=Se)&&(s=ZE(s,r.pendingProps,wr),s!==null?(r.stateNode=s,An=r,Se=null,e=!0):e=!1),e||Fa(r)),null;case 13:return Gy(e,r,s);case 4:return It(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Qs(r,null,o,s):nn(e,r,o,s),r.child;case 11:return Ly(e,r,r.type,r.pendingProps,s);case 7:return nn(e,r,r.pendingProps,s),r.child;case 8:return nn(e,r,r.pendingProps.children,s),r.child;case 12:return nn(e,r,r.pendingProps.children,s),r.child;case 10:return o=r.pendingProps,Vi(r,r.type,o.value),nn(e,r,o.children,s),r.child;case 9:return h=r.type._context,o=r.pendingProps.children,Ya(r),h=fn(h),o=o(h),r.flags|=1,nn(e,r,o,s),r.child;case 14:return By(e,r,r.type,r.pendingProps,s);case 15:return zy(e,r,r.type,r.pendingProps,s);case 19:return Qy(e,r,s);case 31:return o=r.pendingProps,s=r.mode,o={mode:o.mode,children:o.children},e===null?(s=gc(o,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Kr(e.child,o),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Py(e,r,s);case 24:return Ya(r),o=fn(He),e===null?(h=Df(),h===null&&(h=fe,d=Rf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),r.memoizedState={parent:o,cache:h},If(r),Vi(r,He,h)):((e.lanes&s)!==0&&(Nf(e,r),pl(r,null,null,s),ml()),h=e.memoizedState,d=r.memoizedState,h.parent!==o?(h={parent:o,cache:o},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Vi(r,He,o)):(o=d.cache,Vi(r,He,o),o!==h.cache&&xf(r,[He],s,!0))),nn(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function ri(e){e.flags|=4}function Ky(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rv(r)){if(r=Xn.current,r!==null&&((Qt&4194048)===Qt?Sr!==null:(Qt&62914560)!==Qt&&(Qt&536870912)===0||r!==Sr))throw fl=kf,Ng;e.flags|=8192}}function yc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?_i():536870912,e.lanes|=r,Zs|=r)}function El(e,r){if(!Wt)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ee(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(r)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,r}function TE(e,r,s){var o=r.pendingProps;switch(Ef(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(r),null;case 1:return Ee(r),null;case 3:return s=r.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Jr(He),ot(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(al(r)?ri(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Rg())),Ee(r),null;case 26:return s=r.memoizedState,e===null?(ri(r),s!==null?(Ee(r),Ky(r,s)):(Ee(r),r.flags&=-16777217)):s?s!==e.memoizedState?(ri(r),Ee(r),Ky(r,s)):(Ee(r),r.flags&=-16777217):(e.memoizedProps!==o&&ri(r),Ee(r),r.flags&=-16777217),null;case 27:Ot(r),s=pt.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==o&&ri(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Ee(r),null}e=ct.current,al(r)?Sg(r):(e=K0(h,o,s),r.stateNode=e,ri(r))}return Ee(r),null;case 5:if(Ot(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==o&&ri(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Ee(r),null}if(e=ct.current,al(r))Sg(r);else{switch(h=kc(pt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(s,{is:o.is}):h.createElement(s)}}e[De]=r,e[en]=o;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(an(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ri(r)}}return Ee(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==o&&ri(r);else{if(typeof o!="string"&&r.stateNode===null)throw Error(a(166));if(e=pt.current,al(r)){if(e=r.stateNode,s=r.memoizedProps,o=null,h=An,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[De]=r,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||$0(e.nodeValue,s)),e||Fa(r)}else e=kc(e).createTextNode(o),e[De]=r,r.stateNode=e}return Ee(r),null;case 13:if(o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=al(r),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[De]=r}else sl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ee(r),h=!1}else h=Rg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(ei(r),r):(ei(r),null)}if(ei(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=r.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),yc(r,r.updateQueue),Ee(r),null;case 4:return ot(),e===null&&Md(r.stateNode.containerInfo),Ee(r),null;case 10:return Jr(r.type),Ee(r),null;case 19:if(dt(qe),h=r.memoizedState,h===null)return Ee(r),null;if(o=(r.flags&128)!==0,d=h.rendering,d===null)if(o)El(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=fc(e),d!==null){for(r.flags|=128,El(h,!1),e=d.updateQueue,r.updateQueue=e,yc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)Tg(s,e),s=s.sibling;return tt(qe,qe.current&1|2),r.child}e=e.sibling}h.tail!==null&&ve()>_c&&(r.flags|=128,o=!0,El(h,!1),r.lanes=4194304)}else{if(!o)if(e=fc(d),e!==null){if(r.flags|=128,o=!0,e=e.updateQueue,r.updateQueue=e,yc(r,e),El(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Wt)return Ee(r),null}else 2*ve()-h.renderingStartTime>_c&&s!==536870912&&(r.flags|=128,o=!0,El(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(e=h.last,e!==null?e.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=ve(),r.sibling=null,e=qe.current,tt(qe,o?e&1|2:e&1),r):(Ee(r),null);case 22:case 23:return ei(r),jf(),o=r.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(r.flags|=8192):o&&(r.flags|=8192),o?(s&536870912)!==0&&(r.flags&128)===0&&(Ee(r),r.subtreeFlags&6&&(r.flags|=8192)):Ee(r),s=r.updateQueue,s!==null&&yc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==s&&(r.flags|=2048),e!==null&&dt(Ka),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Jr(He),Ee(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function wE(e,r){switch(Ef(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Jr(He),ot(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return Ot(r),null;case 13:if(ei(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));sl()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return dt(qe),null;case 4:return ot(),null;case 10:return Jr(r.type),null;case 22:case 23:return ei(r),jf(),e!==null&&dt(Ka),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Jr(He),null;case 25:return null;default:return null}}function Xy(e,r){switch(Ef(r),r.tag){case 3:Jr(He),ot();break;case 26:case 27:case 5:Ot(r);break;case 4:ot();break;case 13:ei(r);break;case 19:dt(qe);break;case 10:Jr(r.type);break;case 22:case 23:ei(r),jf(),e!==null&&dt(Ka);break;case 24:Jr(He)}}function Tl(e,r){try{var s=r.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var d=s.create,b=s.inst;o=d(),b.destroy=o}s=s.next}while(s!==h)}}catch(E){ue(r,r.return,E)}}function Pi(e,r,s){try{var o=r.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var b=o.inst,E=b.destroy;if(E!==void 0){b.destroy=void 0,h=r;var k=s,$=E;try{$()}catch(Z){ue(h,k,Z)}}}o=o.next}while(o!==d)}}catch(Z){ue(r,r.return,Z)}}function Zy(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{Bg(r,s)}catch(o){ue(e,e.return,o)}}}function Wy(e,r,s){s.props=Za(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ue(e,r,o)}}function wl(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){ue(e,r,h)}}function xr(e,r){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){ue(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ue(e,r,h)}else s.current=null}function Jy(e){var r=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){ue(e,e.return,h)}}function cd(e,r,s){try{var o=e.stateNode;GE(o,e.type,s,r),o[en]=r}catch(h){ue(e,e.return,h)}}function t0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Yi(e.type)||e.tag===4}function hd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||t0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Yi(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,r,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Dc));else if(o!==4&&(o===27&&Yi(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(fd(e,r,s),e=e.sibling;e!==null;)fd(e,r,s),e=e.sibling}function vc(e,r,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(o!==4&&(o===27&&Yi(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(vc(e,r,s),e=e.sibling;e!==null;)vc(e,r,s),e=e.sibling}function e0(e){var r=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);an(r,o,s),r[De]=e,r[en]=s}catch(d){ue(e,e.return,d)}}var ii=!1,Ve=!1,dd=!1,n0=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function SE(e,r){if(e=e.containerInfo,Ld=jc,e=dg(e),hf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var b=0,E=-1,k=-1,$=0,Z=0,it=e,H=null;e:for(;;){for(var q;it!==s||h!==0&&it.nodeType!==3||(E=b+h),it!==d||o!==0&&it.nodeType!==3||(k=b+o),it.nodeType===3&&(b+=it.nodeValue.length),(q=it.firstChild)!==null;)H=it,it=q;for(;;){if(it===e)break e;if(H===s&&++$===h&&(E=b),H===d&&++Z===o&&(k=b),(q=it.nextSibling)!==null)break;it=H,H=it.parentNode}it=q}s=E===-1||k===-1?null:{start:E,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:e,selectionRange:s},jc=!1,Ke=r;Ke!==null;)if(r=Ke,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,Ke=e;else for(;Ke!==null;){switch(r=Ke,d=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=r,h=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var kt=Za(s.type,h,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(kt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Rt){ue(s,s.return,Rt)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)Ud(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,Ke=e;break}Ke=r.return}}function r0(e,r,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Ui(e,s),o&4&&Tl(5,s);break;case 1:if(Ui(e,s),o&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(b){ue(s,s.return,b)}else{var h=Za(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(b){ue(s,s.return,b)}}o&64&&Zy(s),o&512&&wl(s,s.return);break;case 3:if(Ui(e,s),o&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{Bg(e,r)}catch(b){ue(s,s.return,b)}}break;case 27:r===null&&o&4&&e0(s);case 26:case 5:Ui(e,s),r===null&&o&4&&Jy(s),o&512&&wl(s,s.return);break;case 12:Ui(e,s);break;case 13:Ui(e,s),o&4&&s0(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=ME.bind(null,s),WE(e,s))));break;case 22:if(o=s.memoizedState!==null||ii,!o){r=r!==null&&r.memoizedState!==null||Ve,h=ii;var d=Ve;ii=o,(Ve=r)&&!d?$i(e,s,(s.subtreeFlags&8772)!==0):Ui(e,s),ii=h,Ve=d}break;case 30:break;default:Ui(e,s)}}function i0(e){var r=e.alternate;r!==null&&(e.alternate=null,i0(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&As(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Sn=!1;function ai(e,r,s){for(s=s.child;s!==null;)a0(e,r,s),s=s.sibling}function a0(e,r,s){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(yi,s)}catch{}switch(s.tag){case 26:Ve||xr(s,r),ai(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ve||xr(s,r);var o=be,h=Sn;Yi(s.type)&&(be=s.stateNode,Sn=!1),ai(e,r,s),Vl(s.stateNode),be=o,Sn=h;break;case 5:Ve||xr(s,r);case 6:if(o=be,h=Sn,be=null,ai(e,r,s),be=o,Sn=h,be!==null)if(Sn)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(s.stateNode)}catch(d){ue(s,r,d)}else try{be.removeChild(s.stateNode)}catch(d){ue(s,r,d)}break;case 18:be!==null&&(Sn?(e=be,Q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ul(e)):Q0(be,s.stateNode));break;case 4:o=be,h=Sn,be=s.stateNode.containerInfo,Sn=!0,ai(e,r,s),be=o,Sn=h;break;case 0:case 11:case 14:case 15:Ve||Pi(2,s,r),Ve||Pi(4,s,r),ai(e,r,s);break;case 1:Ve||(xr(s,r),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Wy(s,r,o)),ai(e,r,s);break;case 21:ai(e,r,s);break;case 22:Ve=(o=Ve)||s.memoizedState!==null,ai(e,r,s),Ve=o;break;default:ai(e,r,s)}}function s0(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ul(e)}catch(s){ue(r,r.return,s)}}function xE(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new n0),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new n0),r;default:throw Error(a(435,e.tag))}}function md(e,r){var s=xE(e);r.forEach(function(o){var h=OE.bind(null,e,o);s.has(o)||(s.add(o),o.then(h,h))})}function Vn(e,r){var s=r.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],d=e,b=r,E=b;t:for(;E!==null;){switch(E.tag){case 27:if(Yi(E.type)){be=E.stateNode,Sn=!1;break t}break;case 5:be=E.stateNode,Sn=!1;break t;case 3:case 4:be=E.stateNode.containerInfo,Sn=!0;break t}E=E.return}if(be===null)throw Error(a(160));a0(d,b,h),be=null,Sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)o0(r,e),r=r.sibling}var ur=null;function o0(e,r){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(r,e),Mn(e),o&4&&(Pi(3,e,e.return),Tl(3,e),Pi(5,e,e.return));break;case 1:Vn(r,e),Mn(e),o&512&&(Ve||s===null||xr(s,s.return)),o&64&&ii&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=ur;if(Vn(r,e),Mn(e),o&512&&(Ve||s===null||xr(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Ti]||d[De]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),an(d,o,s),d[De]=e,ke(d),o=d;break t;case"link":var b=ev("link","href",h).get(o+(s.href||""));if(b){for(var E=0;E<b.length;E++)if(d=b[E],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(E,1);break e}}d=h.createElement(o),an(d,o,s),h.head.appendChild(d);break;case"meta":if(b=ev("meta","content",h).get(o+(s.content||""))){for(E=0;E<b.length;E++)if(d=b[E],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(E,1);break e}}d=h.createElement(o),an(d,o,s),h.head.appendChild(d);break;default:throw Error(a(468,o))}d[De]=e,ke(d),o=d}e.stateNode=o}else nv(h,e.type,e.stateNode);else e.stateNode=tv(h,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?nv(h,e.type,e.stateNode):tv(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cd(e,e.memoizedProps,s.memoizedProps)}break;case 27:Vn(r,e),Mn(e),o&512&&(Ve||s===null||xr(s,s.return)),s!==null&&o&4&&cd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Vn(r,e),Mn(e),o&512&&(Ve||s===null||xr(s,s.return)),e.flags&32){h=e.stateNode;try{qn(h,"")}catch(q){ue(e,e.return,q)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,cd(e,h,s!==null?s.memoizedProps:h)),o&1024&&(dd=!0);break;case 6:if(Vn(r,e),Mn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(q){ue(e,e.return,q)}}break;case 3:if(Vc=null,h=ur,ur=Ic(r.containerInfo),Vn(r,e),ur=h,Mn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Ul(r.containerInfo)}catch(q){ue(e,e.return,q)}dd&&(dd=!1,l0(e));break;case 4:o=ur,ur=Ic(e.stateNode.containerInfo),Vn(r,e),Mn(e),ur=o;break;case 12:Vn(r,e),Mn(e);break;case 13:Vn(r,e),Mn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(_d=ve()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,md(e,o)));break;case 22:h=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,$=ii,Z=Ve;if(ii=$||h,Ve=Z||k,Vn(r,e),Ve=Z,ii=$,Mn(e),o&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||k||ii||Ve||Wa(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){k=s=r;try{if(d=k.stateNode,h)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{E=k.stateNode;var it=k.memoizedProps.style,H=it!=null&&it.hasOwnProperty("display")?it.display:null;E.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(q){ue(k,k.return,q)}}}else if(r.tag===6){if(s===null){k=r;try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(q){ue(k,k.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,md(e,s))));break;case 19:Vn(r,e),Mn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,md(e,o)));break;case 30:break;case 21:break;default:Vn(r,e),Mn(e)}}function Mn(e){var r=e.flags;if(r&2){try{for(var s,o=e.return;o!==null;){if(t0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=hd(e);vc(e,d,h);break;case 5:var b=s.stateNode;s.flags&32&&(qn(b,""),s.flags&=-33);var E=hd(e);vc(e,E,b);break;case 3:case 4:var k=s.stateNode.containerInfo,$=hd(e);fd(e,$,k);break;default:throw Error(a(161))}}catch(Z){ue(e,e.return,Z)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;l0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Ui(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)r0(e,r.alternate,r),r=r.sibling}function Wa(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Pi(4,r,r.return),Wa(r);break;case 1:xr(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Wy(r,r.return,s),Wa(r);break;case 27:Vl(r.stateNode);case 26:case 5:xr(r,r.return),Wa(r);break;case 22:r.memoizedState===null&&Wa(r);break;case 30:Wa(r);break;default:Wa(r)}e=e.sibling}}function $i(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var o=r.alternate,h=e,d=r,b=d.flags;switch(d.tag){case 0:case 11:case 15:$i(h,d,s),Tl(4,d);break;case 1:if($i(h,d,s),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch($){ue(o,o.return,$)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var k=h.shared.hiddenCallbacks;if(k!==null)for(h.shared.hiddenCallbacks=null,h=0;h<k.length;h++)Lg(k[h],E)}catch($){ue(o,o.return,$)}}s&&b&64&&Zy(d),wl(d,d.return);break;case 27:e0(d);case 26:case 5:$i(h,d,s),s&&o===null&&b&4&&Jy(d),wl(d,d.return);break;case 12:$i(h,d,s);break;case 13:$i(h,d,s),s&&b&4&&s0(h,d);break;case 22:d.memoizedState===null&&$i(h,d,s),wl(d,d.return);break;case 30:break;default:$i(h,d,s)}r=r.sibling}}function pd(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ul(s))}function gd(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&ul(e))}function Rr(e,r,s,o){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)u0(e,r,s,o),r=r.sibling}function u0(e,r,s,o){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Rr(e,r,s,o),h&2048&&Tl(9,r);break;case 1:Rr(e,r,s,o);break;case 3:Rr(e,r,s,o),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&ul(e)));break;case 12:if(h&2048){Rr(e,r,s,o),e=r.stateNode;try{var d=r.memoizedProps,b=d.id,E=d.onPostCommit;typeof E=="function"&&E(b,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){ue(r,r.return,k)}}else Rr(e,r,s,o);break;case 13:Rr(e,r,s,o);break;case 23:break;case 22:d=r.stateNode,b=r.alternate,r.memoizedState!==null?d._visibility&2?Rr(e,r,s,o):Sl(e,r):d._visibility&2?Rr(e,r,s,o):(d._visibility|=2,Ys(e,r,s,o,(r.subtreeFlags&10256)!==0)),h&2048&&pd(b,r);break;case 24:Rr(e,r,s,o),h&2048&&gd(r.alternate,r);break;default:Rr(e,r,s,o)}}function Ys(e,r,s,o,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=e,b=r,E=s,k=o,$=b.flags;switch(b.tag){case 0:case 11:case 15:Ys(d,b,E,k,h),Tl(8,b);break;case 23:break;case 22:var Z=b.stateNode;b.memoizedState!==null?Z._visibility&2?Ys(d,b,E,k,h):Sl(d,b):(Z._visibility|=2,Ys(d,b,E,k,h)),h&&$&2048&&pd(b.alternate,b);break;case 24:Ys(d,b,E,k,h),h&&$&2048&&gd(b.alternate,b);break;default:Ys(d,b,E,k,h)}r=r.sibling}}function Sl(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,o=r,h=o.flags;switch(o.tag){case 22:Sl(s,o),h&2048&&pd(o.alternate,o);break;case 24:Sl(s,o),h&2048&&gd(o.alternate,o);break;default:Sl(s,o)}r=r.sibling}}var xl=8192;function Ks(e){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)c0(e),e=e.sibling}function c0(e){switch(e.tag){case 26:Ks(e),e.flags&xl&&e.memoizedState!==null&&hT(ur,e.memoizedState,e.memoizedProps);break;case 5:Ks(e);break;case 3:case 4:var r=ur;ur=Ic(e.stateNode.containerInfo),Ks(e),ur=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xl,xl=16777216,Ks(e),xl=r):Ks(e));break;default:Ks(e)}}function h0(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function Rl(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var o=r[s];Ke=o,d0(o,e)}h0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)f0(e),e=e.sibling}function f0(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&Pi(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,bc(e)):Rl(e);break;default:Rl(e)}}function bc(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var o=r[s];Ke=o,d0(o,e)}h0(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Pi(8,r,r.return),bc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,bc(r));break;default:bc(r)}e=e.sibling}}function d0(e,r){for(;Ke!==null;){var s=Ke;switch(s.tag){case 0:case 11:case 15:Pi(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ul(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Ke=o;else t:for(s=e;Ke!==null;){o=Ke;var h=o.sibling,d=o.return;if(i0(o),o===s){Ke=null;break t}if(h!==null){h.return=d,Ke=h;break t}Ke=d}}}var RE={getCacheForType:function(e){var r=fn(He),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},CE=typeof WeakMap=="function"?WeakMap:Map,ne=0,fe=null,Ht=null,Qt=0,re=0,On=null,Hi=!1,Xs=!1,yd=!1,si=0,xe=0,qi=0,Ja=0,vd=0,Zn=0,Zs=0,Cl=null,xn=null,bd=!1,_d=0,_c=1/0,Ac=null,Gi=null,rn=0,Fi=null,Ws=null,Js=0,Ad=0,Ed=null,m0=null,Dl=0,Td=null;function jn(){if((ne&2)!==0&&Qt!==0)return Qt&-Qt;if(F.T!==null){var e=Ps;return e!==0?e:kd()}return $r()}function p0(){Zn===0&&(Zn=(Qt&536870912)===0||Wt?zo():536870912);var e=Xn.current;return e!==null&&(e.flags|=32),Zn}function Ln(e,r,s){(e===fe&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(to(e,0),Qi(e,Qt,Zn,!1)),Ce(e,s),((ne&2)===0||e!==fe)&&(e===fe&&((ne&2)===0&&(Ja|=s),xe===4&&Qi(e,Qt,Zn,!1)),Cr(e))}function g0(e,r,s){if((ne&6)!==0)throw Error(a(327));var o=!s&&(r&124)===0&&(r&e.expiredLanes)===0||bi(e,r),h=o?IE(e,r):xd(e,r,!0),d=o;do{if(h===0){Xs&&!o&&Qi(e,r,0,!1);break}else{if(s=e.current.alternate,d&&!DE(s)){h=xd(e,r,!1),d=!1;continue}if(h===2){if(d=r,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){r=b;t:{var E=e;h=Cl;var k=E.current.memoizedState.isDehydrated;if(k&&(to(E,b).flags|=256),b=xd(E,b,!1),b!==2){if(yd&&!k){E.errorRecoveryDisabledLanes|=d,Ja|=d,h=4;break t}d=xn,xn=h,d!==null&&(xn===null?xn=d:xn.push.apply(xn,d))}h=b}if(d=!1,h!==2)continue}}if(h===1){to(e,0),Qi(e,r,0,!0);break}t:{switch(o=e,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Qi(o,r,Zn,!Hi);break t;case 2:xn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=_d+300-ve(),10<h)){if(Qi(o,r,Zn,!Hi),$n(o,0,!0)!==0)break t;o.timeoutHandle=G0(y0.bind(null,o,s,xn,Ac,bd,r,Zn,Ja,Zs,Hi,d,2,-0,0),h);break t}y0(o,s,xn,Ac,bd,r,Zn,Ja,Zs,Hi,d,0,-0,0)}}break}while(!0);Cr(e)}function y0(e,r,s,o,h,d,b,E,k,$,Z,it,H,q){if(e.timeoutHandle=-1,it=r.subtreeFlags,(it&8192||(it&16785408)===16785408)&&(jl={stylesheets:null,count:0,unsuspend:cT},c0(r),it=fT(),it!==null)){e.cancelPendingCommit=it(w0.bind(null,e,r,d,s,o,h,b,E,k,Z,1,H,q)),Qi(e,d,b,!$);return}w0(e,r,d,s,o,h,b,E,k)}function DE(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],d=h.getSnapshot;h=h.value;try{if(!In(d(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qi(e,r,s,o){r&=~vd,r&=~Ja,e.suspendedLanes|=r,e.pingedLanes&=~r,o&&(e.warmLanes|=r),o=e.expirationTimes;for(var h=r;0<h;){var d=31-yn(h),b=1<<d;o[d]=-1,h&=~b}s!==0&&Ai(e,s,r)}function Ec(){return(ne&6)===0?(kl(0),!1):!0}function wd(){if(Ht!==null){if(re===0)var e=Ht.return;else e=Ht,Wr=Qa=null,Uf(e),Fs=null,_l=0,e=Ht;for(;e!==null;)Xy(e.alternate,e),e=e.return;Ht=null}}function to(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,QE(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),wd(),fe=e,Ht=s=Kr(e.current,null),Qt=r,re=0,On=null,Hi=!1,Xs=bi(e,r),yd=!1,Zs=Zn=vd=Ja=qi=xe=0,xn=Cl=null,bd=!1,(r&8)!==0&&(r|=r&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=r;0<o;){var h=31-yn(o),d=1<<h;r|=e[h],o&=~d}return si=r,qu(),s}function v0(e,r){Ut=null,F.H=uc,r===hl||r===Ju?(r=Og(),re=3):r===Ng?(r=Og(),re=4):re=r===jy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,On=r,Ht===null&&(xe=1,mc(e,Fn(r,e.current)))}function b0(){var e=F.H;return F.H=uc,e===null?uc:e}function _0(){var e=F.A;return F.A=RE,e}function Sd(){xe=4,Hi||(Qt&4194048)!==Qt&&Xn.current!==null||(Xs=!0),(qi&134217727)===0&&(Ja&134217727)===0||fe===null||Qi(fe,Qt,Zn,!1)}function xd(e,r,s){var o=ne;ne|=2;var h=b0(),d=_0();(fe!==e||Qt!==r)&&(Ac=null,to(e,r)),r=!1;var b=xe;t:do try{if(re!==0&&Ht!==null){var E=Ht,k=On;switch(re){case 8:wd(),b=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(r=!0);var $=re;if(re=0,On=null,eo(e,E,k,$),s&&Xs){b=0;break t}break;default:$=re,re=0,On=null,eo(e,E,k,$)}}kE(),b=xe;break}catch(Z){v0(e,Z)}while(!0);return r&&e.shellSuspendCounter++,Wr=Qa=null,ne=o,F.H=h,F.A=d,Ht===null&&(fe=null,Qt=0,qu()),b}function kE(){for(;Ht!==null;)A0(Ht)}function IE(e,r){var s=ne;ne|=2;var o=b0(),h=_0();fe!==e||Qt!==r?(Ac=null,_c=ve()+500,to(e,r)):Xs=bi(e,r);t:do try{if(re!==0&&Ht!==null){r=Ht;var d=On;e:switch(re){case 1:re=0,On=null,eo(e,r,d,1);break;case 2:case 9:if(Vg(d)){re=0,On=null,E0(r);break}r=function(){re!==2&&re!==9||fe!==e||(re=7),Cr(e)},d.then(r,r);break t;case 3:re=7;break t;case 4:re=5;break t;case 7:Vg(d)?(re=0,On=null,E0(r)):(re=0,On=null,eo(e,r,d,7));break;case 5:var b=null;switch(Ht.tag){case 26:b=Ht.memoizedState;case 5:case 27:var E=Ht;if(!b||rv(b)){re=0,On=null;var k=E.sibling;if(k!==null)Ht=k;else{var $=E.return;$!==null?(Ht=$,Tc($)):Ht=null}break e}}re=0,On=null,eo(e,r,d,5);break;case 6:re=0,On=null,eo(e,r,d,6);break;case 8:wd(),xe=6;break t;default:throw Error(a(462))}}NE();break}catch(Z){v0(e,Z)}while(!0);return Wr=Qa=null,F.H=o,F.A=h,ne=s,Ht!==null?0:(fe=null,Qt=0,qu(),xe)}function NE(){for(;Ht!==null&&!_e();)A0(Ht)}function A0(e){var r=Yy(e.alternate,e,si);e.memoizedProps=e.pendingProps,r===null?Tc(e):Ht=r}function E0(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=$y(s,r,r.pendingProps,r.type,void 0,Qt);break;case 11:r=$y(s,r,r.pendingProps,r.type.render,r.ref,Qt);break;case 5:Uf(r);default:Xy(s,r),r=Ht=Tg(r,si),r=Yy(s,r,si)}e.memoizedProps=e.pendingProps,r===null?Tc(e):Ht=r}function eo(e,r,s,o){Wr=Qa=null,Uf(r),Fs=null,_l=0;var h=r.return;try{if(AE(e,h,r,s,Qt)){xe=1,mc(e,Fn(s,e.current)),Ht=null;return}}catch(d){if(h!==null)throw Ht=h,d;xe=1,mc(e,Fn(s,e.current)),Ht=null;return}r.flags&32768?(Wt||o===1?e=!0:Xs||(Qt&536870912)!==0?e=!1:(Hi=e=!0,(o===2||o===9||o===3||o===6)&&(o=Xn.current,o!==null&&o.tag===13&&(o.flags|=16384))),T0(r,e)):Tc(r)}function Tc(e){var r=e;do{if((r.flags&32768)!==0){T0(r,Hi);return}e=r.return;var s=TE(r.alternate,r,si);if(s!==null){Ht=s;return}if(r=r.sibling,r!==null){Ht=r;return}Ht=r=e}while(r!==null);xe===0&&(xe=5)}function T0(e,r){do{var s=wE(e.alternate,e);if(s!==null){s.flags&=32767,Ht=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){Ht=e;return}Ht=e=s}while(e!==null);xe=6,Ht=null}function w0(e,r,s,o,h,d,b,E,k){e.cancelPendingCommit=null;do wc();while(rn!==0);if((ne&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(d=r.lanes|r.childLanes,d|=gf,Ru(e,s,d,b,E,k),e===fe&&(Ht=fe=null,Qt=0),Ws=r,Fi=e,Js=s,Ad=d,Ed=h,m0=o,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jE(Dn,function(){return D0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,h=ht.p,ht.p=2,b=ne,ne|=4;try{SE(e,r,s)}finally{ne=b,ht.p=h,F.T=o}}rn=1,S0(),x0(),R0()}}function S0(){if(rn===1){rn=0;var e=Fi,r=Ws,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var o=ht.p;ht.p=2;var h=ne;ne|=4;try{o0(r,e);var d=Bd,b=dg(e.containerInfo),E=d.focusedElem,k=d.selectionRange;if(b!==E&&E&&E.ownerDocument&&fg(E.ownerDocument.documentElement,E)){if(k!==null&&hf(E)){var $=k.start,Z=k.end;if(Z===void 0&&(Z=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(Z,E.value.length);else{var it=E.ownerDocument||document,H=it&&it.defaultView||window;if(H.getSelection){var q=H.getSelection(),kt=E.textContent.length,Rt=Math.min(k.start,kt),le=k.end===void 0?Rt:Math.min(k.end,kt);!q.extend&&Rt>le&&(b=le,le=Rt,Rt=b);var L=hg(E,Rt),O=hg(E,le);if(L&&O&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var P=it.createRange();P.setStart(L.node,L.offset),q.removeAllRanges(),Rt>le?(q.addRange(P),q.extend(O.node,O.offset)):(P.setEnd(O.node,O.offset),q.addRange(P))}}}}for(it=[],q=E;q=q.parentNode;)q.nodeType===1&&it.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<it.length;E++){var et=it[E];et.element.scrollLeft=et.left,et.element.scrollTop=et.top}}jc=!!Ld,Bd=Ld=null}finally{ne=h,ht.p=o,F.T=s}}e.current=r,rn=2}}function x0(){if(rn===2){rn=0;var e=Fi,r=Ws,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var o=ht.p;ht.p=2;var h=ne;ne|=4;try{r0(e,r.alternate,r)}finally{ne=h,ht.p=o,F.T=s}}rn=3}}function R0(){if(rn===4||rn===3){rn=0,Fe();var e=Fi,r=Ws,s=Js,o=m0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?rn=5:(rn=0,Ws=Fi=null,C0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Gi=null),Uo(s),r=r.stateNode,cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(yi,r,void 0,(r.current.flags&128)===128)}catch{}if(o!==null){r=F.T,h=ht.p,ht.p=2,F.T=null;try{for(var d=e.onRecoverableError,b=0;b<o.length;b++){var E=o[b];d(E.value,{componentStack:E.stack})}}finally{F.T=r,ht.p=h}}(Js&3)!==0&&wc(),Cr(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Td?Dl++:(Dl=0,Td=e):Dl=0,kl(0)}}function C0(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,ul(r)))}function wc(e){return S0(),x0(),R0(),D0()}function D0(){if(rn!==5)return!1;var e=Fi,r=Ad;Ad=0;var s=Uo(Js),o=F.T,h=ht.p;try{ht.p=32>s?32:s,F.T=null,s=Ed,Ed=null;var d=Fi,b=Js;if(rn=0,Ws=Fi=null,Js=0,(ne&6)!==0)throw Error(a(331));var E=ne;if(ne|=4,f0(d.current),u0(d,d.current,b,s),ne=E,kl(0,!1),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(yi,d)}catch{}return!0}finally{ht.p=h,F.T=o,C0(e,r)}}function k0(e,r,s){r=Fn(s,r),r=ed(e.stateNode,r,2),e=ji(e,r,2),e!==null&&(Ce(e,2),Cr(e))}function ue(e,r,s){if(e.tag===3)k0(e,e,s);else for(;r!==null;){if(r.tag===3){k0(r,e,s);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Gi===null||!Gi.has(o))){e=Fn(s,e),s=My(2),o=ji(r,s,2),o!==null&&(Oy(s,o,r,e),Ce(o,2),Cr(o));break}}r=r.return}}function Rd(e,r,s){var o=e.pingCache;if(o===null){o=e.pingCache=new CE;var h=new Set;o.set(r,h)}else h=o.get(r),h===void 0&&(h=new Set,o.set(r,h));h.has(s)||(yd=!0,h.add(s),e=VE.bind(null,e,r,s),r.then(e,e))}function VE(e,r,s){var o=e.pingCache;o!==null&&o.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,fe===e&&(Qt&s)===s&&(xe===4||xe===3&&(Qt&62914560)===Qt&&300>ve()-_d?(ne&2)===0&&to(e,0):vd|=s,Zs===Qt&&(Zs=0)),Cr(e)}function I0(e,r){r===0&&(r=_i()),e=js(e,r),e!==null&&(Ce(e,r),Cr(e))}function ME(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),I0(e,s)}function OE(e,r){var s=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(r),I0(e,s)}function jE(e,r){return Xt(e,r)}var Sc=null,no=null,Cd=!1,xc=!1,Dd=!1,ts=0;function Cr(e){e!==no&&e.next===null&&(no===null?Sc=no=e:no=no.next=e),xc=!0,Cd||(Cd=!0,BE())}function kl(e,r){if(!Dd&&xc){Dd=!0;do for(var s=!1,o=Sc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var b=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-yn(42|e)+1)-1,d&=h&~(b&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,O0(o,d))}else d=Qt,d=$n(o,o===fe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||bi(o,d)||(s=!0,O0(o,d));o=o.next}while(s);Dd=!1}}function LE(){N0()}function N0(){xc=Cd=!1;var e=0;ts!==0&&(FE()&&(e=ts),ts=0);for(var r=ve(),s=null,o=Sc;o!==null;){var h=o.next,d=V0(o,r);d===0?(o.next=null,s===null?Sc=h:s.next=h,h===null&&(no=s)):(s=o,(e!==0||(d&3)!==0)&&(xc=!0)),o=h}kl(e)}function V0(e,r){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-yn(d),E=1<<b,k=h[b];k===-1?((E&s)===0||(E&o)!==0)&&(h[b]=bs(E,r)):k<=r&&(e.expiredLanes|=E),d&=~E}if(r=fe,s=Qt,s=$n(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===r&&(re===2||re===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ye(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||bi(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(o!==null&&ye(o),Uo(s)){case 2:case 8:s=we;break;case 32:s=Dn;break;case 268435456:s=gi;break;default:s=Dn}return o=M0.bind(null,e),s=Xt(s,o),e.callbackPriority=r,e.callbackNode=s,r}return o!==null&&o!==null&&ye(o),e.callbackPriority=2,e.callbackNode=null,2}function M0(e,r){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(wc()&&e.callbackNode!==s)return null;var o=Qt;return o=$n(e,e===fe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(g0(e,o,r),V0(e,ve()),e.callbackNode!=null&&e.callbackNode===s?M0.bind(null,e):null)}function O0(e,r){if(wc())return null;g0(e,r,!0)}function BE(){YE(function(){(ne&6)!==0?Xt(ie,LE):N0()})}function kd(){return ts===0&&(ts=zo()),ts}function j0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ir(""+e)}function L0(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function zE(e,r,s,o,h){if(r==="submit"&&s&&s.stateNode===h){var d=j0((h[en]||null).action),b=o.submitter;b&&(r=(r=b[en]||null)?j0(r.formAction):b.getAttribute("formAction"),r!==null&&(d=r,b=null));var E=new Va("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ts!==0){var k=b?L0(h,b):new FormData(h);Xf(s,{pending:!0,data:k,method:h.method,action:d},null,k)}}else typeof d=="function"&&(E.preventDefault(),k=b?L0(h,b):new FormData(h),Xf(s,{pending:!0,data:k,method:h.method,action:d},d,k))},currentTarget:h}]})}}for(var Id=0;Id<pf.length;Id++){var Nd=pf[Id],PE=Nd.toLowerCase(),UE=Nd[0].toUpperCase()+Nd.slice(1);lr(PE,"on"+UE)}lr(gg,"onAnimationEnd"),lr(yg,"onAnimationIteration"),lr(vg,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(iE,"onTransitionRun"),lr(aE,"onTransitionStart"),lr(sE,"onTransitionCancel"),lr(bg,"onTransitionEnd"),_r("onMouseEnter",["mouseout","mouseover"]),_r("onMouseLeave",["mouseout","mouseover"]),_r("onPointerEnter",["pointerout","pointerover"]),_r("onPointerLeave",["pointerout","pointerover"]),br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),br("onBeforeInput",["compositionend","keypress","textInput","paste"]),br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$E=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function B0(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var d=void 0;if(r)for(var b=o.length-1;0<=b;b--){var E=o[b],k=E.instance,$=E.currentTarget;if(E=E.listener,k!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=$;try{d(h)}catch(Z){dc(Z)}h.currentTarget=null,d=k}else for(b=0;b<o.length;b++){if(E=o[b],k=E.instance,$=E.currentTarget,E=E.listener,k!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=$;try{d(h)}catch(Z){dc(Z)}h.currentTarget=null,d=k}}}}function qt(e,r){var s=r[_a];s===void 0&&(s=r[_a]=new Set);var o=e+"__bubble";s.has(o)||(z0(r,e,2,!1),s.add(o))}function Vd(e,r,s){var o=0;r&&(o|=4),z0(s,e,o,r)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Md(e){if(!e[Rc]){e[Rc]=!0,Cu.forEach(function(s){s!=="selectionchange"&&($E.has(s)||Vd(s,!1,e),Vd(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Rc]||(r[Rc]=!0,Vd("selectionchange",!1,r))}}function z0(e,r,s,o){switch(uv(r)){case 2:var h=pT;break;case 8:h=gT;break;default:h=Yd}s=h.bind(null,r,s,e),h=void 0,!Qr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(r,s,{capture:!0,passive:h}):e.addEventListener(r,s,!0):h!==void 0?e.addEventListener(r,s,{passive:h}):e.addEventListener(r,s,!1)}function Od(e,r,s,o,h){var d=o;if((r&1)===0&&(r&2)===0&&o!==null)t:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var E=o.stateNode.containerInfo;if(E===h)break;if(b===4)for(b=o.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;E!==null;){if(b=yr(E),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){o=d=b;continue t}E=E.parentNode}}o=o.return}ka(function(){var $=d,Z=Yo(s),it=[];t:{var H=_g.get(e);if(H!==void 0){var q=Va,kt=e;switch(e){case"keypress":if(Ia(s)===0)break t;case"keydown":case"keyup":q=Ns;break;case"focusin":kt="focus",q=Ds;break;case"focusout":kt="blur",q=Ds;break;case"beforeblur":case"afterblur":q=Ds;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Ou;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Ni;break;case gg:case yg:case vg:q=Xo;break;case bg:q=m;break;case"scroll":case"scrollend":q=Oa;break;case"wheel":q=w;break;case"copy":case"cut":case"paste":q=Lu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Jo;break;case"toggle":case"beforetoggle":q=Y}var Rt=(r&4)!==0,le=!Rt&&(e==="scroll"||e==="scrollend"),L=Rt?H!==null?H+"Capture":null:H;Rt=[];for(var O=$,P;O!==null;){var et=O;if(P=et.stateNode,et=et.tag,et!==5&&et!==26&&et!==27||P===null||L===null||(et=ki(O,L),et!=null&&Rt.push(Nl(O,et,P))),le)break;O=O.return}0<Rt.length&&(H=new q(H,kt,null,s,Z),it.push({event:H,listeners:Rt}))}}if((r&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",H&&s!==Qo&&(kt=s.relatedTarget||s.fromElement)&&(yr(kt)||kt[Hr]))break t;if((q||H)&&(H=Z.window===Z?Z:(H=Z.ownerDocument)?H.defaultView||H.parentWindow:window,q?(kt=s.relatedTarget||s.toElement,q=$,kt=kt?yr(kt):null,kt!==null&&(le=c(kt),Rt=kt.tag,kt!==le||Rt!==5&&Rt!==27&&Rt!==6)&&(kt=null)):(q=null,kt=$),q!==kt)){if(Rt=Ba,et="onMouseLeave",L="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Rt=Jo,et="onPointerLeave",L="onPointerEnter",O="pointer"),le=q==null?H:wi(q),P=kt==null?H:wi(kt),H=new Rt(et,O+"leave",q,s,Z),H.target=le,H.relatedTarget=P,et=null,yr(Z)===$&&(Rt=new Rt(L,O+"enter",kt,s,Z),Rt.target=P,Rt.relatedTarget=le,et=Rt),le=et,q&&kt)e:{for(Rt=q,L=kt,O=0,P=Rt;P;P=ro(P))O++;for(P=0,et=L;et;et=ro(et))P++;for(;0<O-P;)Rt=ro(Rt),O--;for(;0<P-O;)L=ro(L),P--;for(;O--;){if(Rt===L||L!==null&&Rt===L.alternate)break e;Rt=ro(Rt),L=ro(L)}Rt=null}else Rt=null;q!==null&&P0(it,H,q,Rt,!1),kt!==null&&le!==null&&P0(it,le,kt,Rt,!0)}}t:{if(H=$?wi($):window,q=H.nodeName&&H.nodeName.toLowerCase(),q==="select"||q==="input"&&H.type==="file")var Et=ag;else if(rg(H))if(sg)Et=eE;else{Et=J1;var $t=W1}else q=H.nodeName,!q||q.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?$&&xs($.elementType)&&(Et=ag):Et=tE;if(Et&&(Et=Et(e,$))){ig(it,Et,s,Z);break t}$t&&$t(e,H,$),e==="focusout"&&$&&H.type==="number"&&$.memoizedProps.value!=null&&qo(H,"number",H.value)}switch($t=$?wi($):window,e){case"focusin":(rg($t)||$t.contentEditable==="true")&&(Vs=$t,ff=$,il=null);break;case"focusout":il=ff=Vs=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,mg(it,s,Z);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":mg(it,s,Z)}var wt;if(jt)t:{switch(e){case"compositionstart":var Ct="onCompositionStart";break t;case"compositionend":Ct="onCompositionEnd";break t;case"compositionupdate":Ct="onCompositionUpdate";break t}Ct=void 0}else or?ar(e,s)&&(Ct="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ct="onCompositionStart");Ct&&(Ie&&s.locale!=="ko"&&(or||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&or&&(wt=Mu()):(Gn=Z,he="value"in Gn?Gn.value:Gn.textContent,or=!0)),$t=Cc($,Ct),0<$t.length&&(Ct=new Wo(Ct,e,null,s,Z),it.push({event:Ct,listeners:$t}),wt?Ct.data=wt:(wt=sr(s),wt!==null&&(Ct.data=wt)))),(wt=ee?tl(e,s):K1(e,s))&&(Ct=Cc($,"onBeforeInput"),0<Ct.length&&($t=new Wo("onBeforeInput","beforeinput",null,s,Z),it.push({event:$t,listeners:Ct}),$t.data=wt)),zE(it,e,$,s,Z)}B0(it,r)})}function Nl(e,r,s){return{instance:e,listener:r,currentTarget:s}}function Cc(e,r){for(var s=r+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ki(e,s),h!=null&&o.unshift(Nl(e,h,d)),h=ki(e,r),h!=null&&o.push(Nl(e,h,d))),e.tag===3)return o;e=e.return}return[]}function ro(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function P0(e,r,s,o,h){for(var d=r._reactName,b=[];s!==null&&s!==o;){var E=s,k=E.alternate,$=E.stateNode;if(E=E.tag,k!==null&&k===o)break;E!==5&&E!==26&&E!==27||$===null||(k=$,h?($=ki(s,d),$!=null&&b.unshift(Nl(s,$,k))):h||($=ki(s,d),$!=null&&b.push(Nl(s,$,k)))),s=s.return}b.length!==0&&e.push({event:r,listeners:b})}var HE=/\r\n?/g,qE=/\u0000|\uFFFD/g;function U0(e){return(typeof e=="string"?e:""+e).replace(HE,`
`).replace(qE,"")}function $0(e,r){return r=U0(r),U0(e)===r}function Dc(){}function oe(e,r,s,o,h,d){switch(s){case"children":typeof o=="string"?r==="body"||r==="textarea"&&o===""||qn(e,o):(typeof o=="number"||typeof o=="bigint")&&r!=="body"&&qn(e,""+o);break;case"className":Sa(e,"class",o);break;case"tabIndex":Sa(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Sa(e,s,o);break;case"style":Fo(e,o,d);break;case"data":if(r!=="object"){Sa(e,"data",o);break}case"src":case"href":if(o===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ir(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(r!=="input"&&oe(e,r,"name",h.name,h,null),oe(e,r,"formEncType",h.formEncType,h,null),oe(e,r,"formMethod",h.formMethod,h,null),oe(e,r,"formTarget",h.formTarget,h,null)):(oe(e,r,"encType",h.encType,h,null),oe(e,r,"method",h.method,h,null),oe(e,r,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ir(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Dc);break;case"onScroll":o!=null&&qt("scroll",e);break;case"onScrollEnd":o!=null&&qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=ir(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":qt("beforetoggle",e),qt("toggle",e),wa(e,"popover",o);break;case"xlinkActuate":Hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Hn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Hn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Hn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Hn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":wa(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Iu.get(s)||s,wa(e,s,o))}}function jd(e,r,s,o,h,d){switch(s){case"style":Fo(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?qn(e,o):(typeof o=="number"||typeof o=="bigint")&&qn(e,""+o);break;case"onScroll":o!=null&&qt("scroll",e);break;case"onScrollEnd":o!=null&&qt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ea.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),d=e[en]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(r,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):wa(e,s,o)}}}function an(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qt("error",e),qt("load",e);var o=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var b=s[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:oe(e,r,d,b,s,null)}}h&&oe(e,r,"srcSet",s.srcSet,s,null),o&&oe(e,r,"src",s.src,s,null);return;case"input":qt("invalid",e);var E=d=b=h=null,k=null,$=null;for(o in s)if(s.hasOwnProperty(o)){var Z=s[o];if(Z!=null)switch(o){case"name":h=Z;break;case"type":b=Z;break;case"checked":k=Z;break;case"defaultChecked":$=Z;break;case"value":d=Z;break;case"defaultValue":E=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,r));break;default:oe(e,r,o,Z,s,null)}}Ho(e,d,E,k,$,b,h,!1),Ri(e);return;case"select":qt("invalid",e),o=b=d=null;for(h in s)if(s.hasOwnProperty(h)&&(E=s[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":b=E;break;case"multiple":o=E;default:oe(e,r,h,E,s,null)}r=d,s=b,e.multiple=!!o,r!=null?Ci(e,!!o,r,!1):s!=null&&Ci(e,!!o,s,!0);return;case"textarea":qt("invalid",e),d=h=o=null;for(b in s)if(s.hasOwnProperty(b)&&(E=s[b],E!=null))switch(b){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:oe(e,r,b,E,s,null)}ku(e,o,h,d),Ri(e);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(o=s[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:oe(e,r,k,o,s,null)}return;case"dialog":qt("beforetoggle",e),qt("toggle",e),qt("cancel",e),qt("close",e);break;case"iframe":case"object":qt("load",e);break;case"video":case"audio":for(o=0;o<Il.length;o++)qt(Il[o],e);break;case"image":qt("error",e),qt("load",e);break;case"details":qt("toggle",e);break;case"embed":case"source":case"link":qt("error",e),qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(o=s[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:oe(e,r,$,o,s,null)}return;default:if(xs(r)){for(Z in s)s.hasOwnProperty(Z)&&(o=s[Z],o!==void 0&&jd(e,r,Z,o,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(o=s[E],o!=null&&oe(e,r,E,o,s,null))}function GE(e,r,s,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,b=null,E=null,k=null,$=null,Z=null;for(q in s){var it=s[q];if(s.hasOwnProperty(q)&&it!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":k=it;default:o.hasOwnProperty(q)||oe(e,r,q,null,o,it)}}for(var H in o){var q=o[H];if(it=s[H],o.hasOwnProperty(H)&&(q!=null||it!=null))switch(H){case"type":d=q;break;case"name":h=q;break;case"checked":$=q;break;case"defaultChecked":Z=q;break;case"value":b=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,r));break;default:q!==it&&oe(e,r,H,q,o,it)}}$o(e,b,E,k,$,Z,d,h);return;case"select":q=b=E=H=null;for(d in s)if(k=s[d],s.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":q=k;default:o.hasOwnProperty(d)||oe(e,r,d,null,o,k)}for(h in o)if(d=o[h],k=s[h],o.hasOwnProperty(h)&&(d!=null||k!=null))switch(h){case"value":H=d;break;case"defaultValue":E=d;break;case"multiple":b=d;default:d!==k&&oe(e,r,h,d,o,k)}r=E,s=b,o=q,H!=null?Ci(e,!!s,H,!1):!!o!=!!s&&(r!=null?Ci(e,!!s,r,!0):Ci(e,!!s,s?[]:"",!1));return;case"textarea":q=H=null;for(E in s)if(h=s[E],s.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:oe(e,r,E,null,o,h)}for(b in o)if(h=o[b],d=s[b],o.hasOwnProperty(b)&&(h!=null||d!=null))switch(b){case"value":H=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&oe(e,r,b,h,o,d)}Du(e,H,q);return;case"option":for(var kt in s)if(H=s[kt],s.hasOwnProperty(kt)&&H!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:oe(e,r,kt,null,o,H)}for(k in o)if(H=o[k],q=s[k],o.hasOwnProperty(k)&&H!==q&&(H!=null||q!=null))switch(k){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:oe(e,r,k,H,o,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Rt in s)H=s[Rt],s.hasOwnProperty(Rt)&&H!=null&&!o.hasOwnProperty(Rt)&&oe(e,r,Rt,null,o,H);for($ in o)if(H=o[$],q=s[$],o.hasOwnProperty($)&&H!==q&&(H!=null||q!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,r));break;default:oe(e,r,$,H,o,q)}return;default:if(xs(r)){for(var le in s)H=s[le],s.hasOwnProperty(le)&&H!==void 0&&!o.hasOwnProperty(le)&&jd(e,r,le,void 0,o,H);for(Z in o)H=o[Z],q=s[Z],!o.hasOwnProperty(Z)||H===q||H===void 0&&q===void 0||jd(e,r,Z,H,o,q);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!o.hasOwnProperty(L)&&oe(e,r,L,null,o,H);for(it in o)H=o[it],q=s[it],!o.hasOwnProperty(it)||H===q||H==null&&q==null||oe(e,r,it,H,o,q)}var Ld=null,Bd=null;function kc(e){return e.nodeType===9?e:e.ownerDocument}function H0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function zd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Pd=null;function FE(){var e=window.event;return e&&e.type==="popstate"?e===Pd?!1:(Pd=e,!0):(Pd=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,QE=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,YE=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(e){return F0.resolve(null).then(e).catch(KE)}:G0;function KE(e){setTimeout(function(){throw e})}function Yi(e){return e==="head"}function Q0(e,r){var s=r,o=0,h=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<o&&8>o){s=o;var b=e.ownerDocument;if(s&1&&Vl(b.documentElement),s&2&&Vl(b.body),s&4)for(s=b.head,Vl(s),b=s.firstChild;b;){var E=b.nextSibling,k=b.nodeName;b[Ti]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=E}}if(h===0){e.removeChild(d),Ul(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:o=s.charCodeAt(0)-48;else o=0;s=d}while(s);Ul(r)}function Ud(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ud(s),As(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function XE(e,r,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ti])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=cr(e.nextSibling),e===null)break}return null}function ZE(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=cr(e.nextSibling),e===null))return null;return e}function $d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function WE(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var o=function(){r(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function cr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var Hd=null;function Y0(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function K0(e,r,s){switch(r=kc(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Vl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);As(e)}var Wn=new Map,X0=new Set;function Ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oi=ht.d;ht.d={f:JE,r:tT,D:eT,C:nT,L:rT,m:iT,X:sT,S:aT,M:oT};function JE(){var e=oi.f(),r=Ec();return e||r}function tT(e){var r=vr(e);r!==null&&r.tag===5&&r.type==="form"?gy(r):oi.r(e)}var io=typeof document>"u"?null:document;function Z0(e,r,s){var o=io;if(o&&typeof r=="string"&&r){var h=Qe(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),X0.has(h)||(X0.add(h),e={rel:e,crossOrigin:s,href:r},o.querySelector(h)===null&&(r=o.createElement("link"),an(r,"link",e),ke(r),o.head.appendChild(r)))}}function eT(e){oi.D(e),Z0("dns-prefetch",e,null)}function nT(e,r){oi.C(e,r),Z0("preconnect",e,r)}function rT(e,r,s){oi.L(e,r,s);var o=io;if(o&&e&&r){var h='link[rel="preload"][as="'+Qe(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Qe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Qe(s.imageSizes)+'"]')):h+='[href="'+Qe(e)+'"]';var d=h;switch(r){case"style":d=ao(e);break;case"script":d=so(e)}Wn.has(d)||(e=_({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Wn.set(d,e),o.querySelector(h)!==null||r==="style"&&o.querySelector(Ml(d))||r==="script"&&o.querySelector(Ol(d))||(r=o.createElement("link"),an(r,"link",e),ke(r),o.head.appendChild(r)))}}function iT(e,r){oi.m(e,r);var s=io;if(s&&e){var o=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Qe(o)+'"][href="'+Qe(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=so(e)}if(!Wn.has(d)&&(e=_({rel:"modulepreload",href:e},r),Wn.set(d,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ol(d)))return}o=s.createElement("link"),an(o,"link",e),ke(o),s.head.appendChild(o)}}}function aT(e,r,s){oi.S(e,r,s);var o=io;if(o&&e){var h=Si(o).hoistableStyles,d=ao(e);r=r||"default";var b=h.get(d);if(!b){var E={loading:0,preload:null};if(b=o.querySelector(Ml(d)))E.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Wn.get(d))&&qd(e,s);var k=b=o.createElement("link");ke(k),an(k,"link",e),k._p=new Promise(function($,Z){k.onload=$,k.onerror=Z}),k.addEventListener("load",function(){E.loading|=1}),k.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Nc(b,r,o)}b={type:"stylesheet",instance:b,count:1,state:E},h.set(d,b)}}}function sT(e,r){oi.X(e,r);var s=io;if(s&&e){var o=Si(s).hoistableScripts,h=so(e),d=o.get(h);d||(d=s.querySelector(Ol(h)),d||(e=_({src:e,async:!0},r),(r=Wn.get(h))&&Gd(e,r),d=s.createElement("script"),ke(d),an(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function oT(e,r){oi.M(e,r);var s=io;if(s&&e){var o=Si(s).hoistableScripts,h=so(e),d=o.get(h);d||(d=s.querySelector(Ol(h)),d||(e=_({src:e,async:!0,type:"module"},r),(r=Wn.get(h))&&Gd(e,r),d=s.createElement("script"),ke(d),an(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function W0(e,r,s,o){var h=(h=pt.current)?Ic(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=ao(s.href),s=Si(h).hoistableStyles,o=s.get(r),o||(o={type:"style",instance:null,count:0,state:null},s.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=ao(s.href);var d=Si(h).hoistableStyles,b=d.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=h.querySelector(Ml(e)))&&!d._p&&(b.instance=d,b.state.loading=5),Wn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Wn.set(e,s),d||lT(h,e,s,b.state))),r&&o===null)throw Error(a(528,""));return b}if(r&&o!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=so(s),s=Si(h).hoistableScripts,o=s.get(r),o||(o={type:"script",instance:null,count:0,state:null},s.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ao(e){return'href="'+Qe(e)+'"'}function Ml(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function lT(e,r,s,o){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?o.loading=1:(r=e.createElement("link"),o.preload=r,r.addEventListener("load",function(){return o.loading|=1}),r.addEventListener("error",function(){return o.loading|=2}),an(r,"link",s),ke(r),e.head.appendChild(r))}function so(e){return'[src="'+Qe(e)+'"]'}function Ol(e){return"script[async]"+e}function tv(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var o=e.querySelector('style[data-href~="'+Qe(s.href)+'"]');if(o)return r.instance=o,ke(o),o;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ke(o),an(o,"style",h),Nc(o,s.precedence,e),r.instance=o;case"stylesheet":h=ao(s.href);var d=e.querySelector(Ml(h));if(d)return r.state.loading|=4,r.instance=d,ke(d),d;o=J0(s),(h=Wn.get(h))&&qd(o,h),d=(e.ownerDocument||e).createElement("link"),ke(d);var b=d;return b._p=new Promise(function(E,k){b.onload=E,b.onerror=k}),an(d,"link",o),r.state.loading|=4,Nc(d,s.precedence,e),r.instance=d;case"script":return d=so(s.src),(h=e.querySelector(Ol(d)))?(r.instance=h,ke(h),h):(o=s,(h=Wn.get(d))&&(o=_({},s),Gd(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),ke(h),an(h,"link",o),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(o=r.instance,r.state.loading|=4,Nc(o,s.precedence,e));return r.instance}function Nc(e,r,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,b=0;b<o.length;b++){var E=o[b];if(E.dataset.precedence===r)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function qd(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function Gd(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Vc=null;function ev(e,r,s){if(Vc===null){var o=new Map,h=Vc=new Map;h.set(s,o)}else h=Vc,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var d=s[h];if(!(d[Ti]||d[De]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(r)||"";b=e+b;var E=o.get(b);E?E.push(d):o.set(b,[d])}}return o}function nv(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function uT(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function rv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jl=null;function cT(){}function hT(e,r,s){if(jl===null)throw Error(a(475));var o=jl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=ao(s.href),d=e.querySelector(Ml(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Mc.bind(o),e.then(o,o)),r.state.loading|=4,r.instance=d,ke(d);return}d=e.ownerDocument||e,s=J0(s),(h=Wn.get(h))&&qd(s,h),d=d.createElement("link"),ke(d);var b=d;b._p=new Promise(function(E,k){b.onload=E,b.onerror=k}),an(d,"link",s),r.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(o.count++,r=Mc.bind(o),e.addEventListener("load",r),e.addEventListener("error",r))}}function fT(){if(jl===null)throw Error(a(475));var e=jl;return e.stylesheets&&e.count===0&&Fd(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&Fd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Mc(){if(this.count--,this.count===0){if(this.stylesheets)Fd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oc=null;function Fd(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oc=new Map,r.forEach(dT,e),Oc=null,Mc.call(e))}function dT(e,r){if(!(r.state.loading&4)){var s=Oc.get(e);if(s)var o=s.get(null);else{s=new Map,Oc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var b=h[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),o=b)}o&&s.set(null,o)}h=r.instance,b=h.getAttribute("data-precedence"),d=s.get(b)||o,d===o&&s.set(null,h),s.set(b,h),this.count++,o=Mc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var Ll={$$typeof:X,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function mT(e,r,s,o,h,d,b,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.hiddenUpdates=_s(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function iv(e,r,s,o,h,d,b,E,k,$,Z,it){return e=new mT(e,r,s,b,E,k,$,it),r=1,d===!0&&(r|=24),d=Nn(3,null,null,r),e.current=d,d.stateNode=e,r=Rf(),r.refCount++,e.pooledCache=r,r.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:r},If(d),e}function av(e){return e?(e=Ls,e):Ls}function sv(e,r,s,o,h,d){h=av(h),o.context===null?o.context=h:o.pendingContext=h,o=Oi(r),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=ji(e,o,r),s!==null&&(Ln(s,e,r),dl(s,e,r))}function ov(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function Qd(e,r){ov(e,r),(e=e.alternate)&&ov(e,r)}function lv(e){if(e.tag===13){var r=js(e,67108864);r!==null&&Ln(r,e,67108864),Qd(e,67108864)}}var jc=!0;function pT(e,r,s,o){var h=F.T;F.T=null;var d=ht.p;try{ht.p=2,Yd(e,r,s,o)}finally{ht.p=d,F.T=h}}function gT(e,r,s,o){var h=F.T;F.T=null;var d=ht.p;try{ht.p=8,Yd(e,r,s,o)}finally{ht.p=d,F.T=h}}function Yd(e,r,s,o){if(jc){var h=Kd(o);if(h===null)Od(e,r,o,Lc,s),cv(e,o);else if(vT(h,e,r,s,o))o.stopPropagation();else if(cv(e,o),r&4&&-1<yT.indexOf(e)){for(;h!==null;){var d=vr(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=er(d.pendingLanes);if(b!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;b;){var k=1<<31-yn(b);E.entanglements[1]|=k,b&=~k}Cr(d),(ne&6)===0&&(_c=ve()+500,kl(0))}}break;case 13:E=js(d,2),E!==null&&Ln(E,d,2),Ec(),Qd(d,2)}if(d=Kd(o),d===null&&Od(e,r,o,Lc,s),d===h)break;h=d}h!==null&&o.stopPropagation()}else Od(e,r,o,null,s)}}function Kd(e){return e=Yo(e),Xd(e)}var Lc=null;function Xd(e){if(Lc=null,e=yr(e),e!==null){var r=c(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=f(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Lc=e,null}function uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pn()){case ie:return 2;case we:return 8;case Dn:case Ur:return 32;case gi:return 268435456;default:return 32}default:return 32}}var Zd=!1,Ki=null,Xi=null,Zi=null,Bl=new Map,zl=new Map,Wi=[],yT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(e,r){switch(e){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Bl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(r.pointerId)}}function Pl(e,r,s,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:r,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},r!==null&&(r=vr(r),r!==null&&lv(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function vT(e,r,s,o,h){switch(r){case"focusin":return Ki=Pl(Ki,e,r,s,o,h),!0;case"dragenter":return Xi=Pl(Xi,e,r,s,o,h),!0;case"mouseover":return Zi=Pl(Zi,e,r,s,o,h),!0;case"pointerover":var d=h.pointerId;return Bl.set(d,Pl(Bl.get(d)||null,e,r,s,o,h)),!0;case"gotpointercapture":return d=h.pointerId,zl.set(d,Pl(zl.get(d)||null,e,r,s,o,h)),!0}return!1}function hv(e){var r=yr(e.target);if(r!==null){var s=c(r);if(s!==null){if(r=s.tag,r===13){if(r=f(s),r!==null){e.blockedOn=r,rf(e.priority,function(){if(s.tag===13){var o=jn();o=Po(o);var h=js(s,o);h!==null&&Ln(h,s,o),Qd(s,o)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=Kd(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Qo=o,s.target.dispatchEvent(o),Qo=null}else return r=vr(s),r!==null&&lv(r),e.blockedOn=s,!1;r.shift()}return!0}function fv(e,r,s){Bc(e)&&s.delete(r)}function bT(){Zd=!1,Ki!==null&&Bc(Ki)&&(Ki=null),Xi!==null&&Bc(Xi)&&(Xi=null),Zi!==null&&Bc(Zi)&&(Zi=null),Bl.forEach(fv),zl.forEach(fv)}function zc(e,r){e.blockedOn===r&&(e.blockedOn=null,Zd||(Zd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,bT)))}var Pc=null;function dv(e){Pc!==e&&(Pc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Pc===e&&(Pc=null);for(var r=0;r<e.length;r+=3){var s=e[r],o=e[r+1],h=e[r+2];if(typeof o!="function"){if(Xd(o||s)===null)continue;break}var d=vr(s);d!==null&&(e.splice(r,3),r-=3,Xf(d,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function Ul(e){function r(k){return zc(k,e)}Ki!==null&&zc(Ki,e),Xi!==null&&zc(Xi,e),Zi!==null&&zc(Zi,e),Bl.forEach(r),zl.forEach(r);for(var s=0;s<Wi.length;s++){var o=Wi[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Wi.length&&(s=Wi[0],s.blockedOn===null);)hv(s),s.blockedOn===null&&Wi.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],d=s[o+1],b=h[en]||null;if(typeof d=="function")b||dv(s);else if(b){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,b=d[en]||null)E=b.formAction;else if(Xd(h)!==null)continue}else E=b.action;typeof E=="function"?s[o+1]=E:(s.splice(o,3),o-=3),dv(s)}}}function Wd(e){this._internalRoot=e}Uc.prototype.render=Wd.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,o=jn();sv(s,o,e,r,null,null)},Uc.prototype.unmount=Wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;sv(e.current,2,null,e,null,null),Ec(),r[Hr]=null}};function Uc(e){this._internalRoot=e}Uc.prototype.unstable_scheduleHydration=function(e){if(e){var r=$r();e={blockedOn:null,target:e,priority:r};for(var s=0;s<Wi.length&&r!==0&&r<Wi[s].priority;s++);Wi.splice(s,0,e),s===0&&hv(e)}};var mv=t.version;if(mv!=="19.1.0")throw Error(a(527,mv,"19.1.0"));ht.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(r),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var _T={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$c.isDisabled&&$c.supportsFiber)try{yi=$c.inject(_T),cn=$c}catch{}}return Hl.createRoot=function(e,r){if(!l(e))throw Error(a(299));var s=!1,o="",h=ky,d=Iy,b=Ny,E=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(E=r.unstable_transitionCallbacks)),r=iv(e,1,!1,null,null,s,o,h,d,b,E,null),e[Hr]=r.current,Md(e),new Wd(r)},Hl.hydrateRoot=function(e,r,s){if(!l(e))throw Error(a(299));var o=!1,h="",d=ky,b=Iy,E=Ny,k=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(k=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),r=iv(e,1,!0,r,s??null,o,h,d,b,E,k,$),r.context=av(null),s=r.current,o=jn(),o=Po(o),h=Oi(o),h.callback=null,ji(s,h,o),s=o,r.current.lanes=s,Ce(r,s),Cr(r),e[Hr]=r.current,Md(e),new Uc(r)},Hl.version="19.1.0",Hl}var wv;function IT(){if(wv)return em.exports;wv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),em.exports=kT(),em.exports}var NT=IT(),tn=function(){return tn=Object.assign||function(t){for(var i,a=1,l=arguments.length;a<l;a++){i=arguments[a];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},tn.apply(this,arguments)};function ru(n,t,i){if(i||arguments.length===2)for(var a=0,l=t.length,c;a<l;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return n.concat(c||Array.prototype.slice.call(t))}var ge="-ms-",Zl="-moz-",Jt="-webkit-",h_="comm",Nh="rule",rp="decl",VT="@import",f_="@keyframes",MT="@layer",d_=Math.abs,ip=String.fromCharCode,_m=Object.assign;function OT(n,t){return Je(n,0)^45?(((t<<2^Je(n,0))<<2^Je(n,1))<<2^Je(n,2))<<2^Je(n,3):0}function m_(n){return n.trim()}function ui(n,t){return(n=t.exec(n))?n[0]:n}function zt(n,t,i){return n.replace(t,i)}function Jc(n,t,i){return n.indexOf(t,i)}function Je(n,t){return n.charCodeAt(t)|0}function _o(n,t,i){return n.slice(t,i)}function kr(n){return n.length}function p_(n){return n.length}function ql(n,t){return t.push(n),n}function jT(n,t){return n.map(t).join("")}function Sv(n,t){return n.filter(function(i){return!ui(i,t)})}var Vh=1,Ao=1,g_=0,tr=0,Be=0,No="";function Mh(n,t,i,a,l,c,f,p){return{value:n,root:t,parent:i,type:a,props:l,children:c,line:Vh,column:Ao,length:f,return:"",siblings:p}}function ta(n,t){return _m(Mh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function oo(n){for(;n.root;)n=ta(n.root,{children:[n]});ql(n,n.siblings)}function LT(){return Be}function BT(){return Be=tr>0?Je(No,--tr):0,Ao--,Be===10&&(Ao=1,Vh--),Be}function hr(){return Be=tr<g_?Je(No,tr++):0,Ao++,Be===10&&(Ao=1,Vh++),Be}function ls(){return Je(No,tr)}function th(){return tr}function Oh(n,t){return _o(No,n,t)}function Am(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zT(n){return Vh=Ao=1,g_=kr(No=n),tr=0,[]}function PT(n){return No="",n}function am(n){return m_(Oh(tr-1,Em(n===91?n+2:n===40?n+1:n)))}function UT(n){for(;(Be=ls())&&Be<33;)hr();return Am(n)>2||Am(Be)>3?"":" "}function $T(n,t){for(;--t&&hr()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Oh(n,th()+(t<6&&ls()==32&&hr()==32))}function Em(n){for(;hr();)switch(Be){case n:return tr;case 34:case 39:n!==34&&n!==39&&Em(Be);break;case 40:n===41&&Em(n);break;case 92:hr();break}return tr}function HT(n,t){for(;hr()&&n+Be!==57;)if(n+Be===84&&ls()===47)break;return"/*"+Oh(t,tr-1)+"*"+ip(n===47?n:hr())}function qT(n){for(;!Am(ls());)hr();return Oh(n,tr)}function GT(n){return PT(eh("",null,null,null,[""],n=zT(n),0,[0],n))}function eh(n,t,i,a,l,c,f,p,y){for(var g=0,_=0,T=f,S=0,M=0,G=0,K=1,z=1,nt=1,J=0,X="",mt=l,st=c,ut=a,R=X;z;)switch(G=J,J=hr()){case 40:if(G!=108&&Je(R,T-1)==58){Jc(R+=zt(am(J),"&","&\f"),"&\f",d_(g?p[g-1]:0))!=-1&&(nt=-1);break}case 34:case 39:case 91:R+=am(J);break;case 9:case 10:case 13:case 32:R+=UT(G);break;case 92:R+=$T(th()-1,7);continue;case 47:switch(ls()){case 42:case 47:ql(FT(HT(hr(),th()),t,i,y),y);break;default:R+="/"}break;case 123*K:p[g++]=kr(R)*nt;case 125*K:case 59:case 0:switch(J){case 0:case 125:z=0;case 59+_:nt==-1&&(R=zt(R,/\f/g,"")),M>0&&kr(R)-T&&ql(M>32?Rv(R+";",a,i,T-1,y):Rv(zt(R," ","")+";",a,i,T-2,y),y);break;case 59:R+=";";default:if(ql(ut=xv(R,t,i,g,_,l,p,X,mt=[],st=[],T,c),c),J===123)if(_===0)eh(R,t,ut,ut,mt,c,T,p,st);else switch(S===99&&Je(R,3)===110?100:S){case 100:case 108:case 109:case 115:eh(n,ut,ut,a&&ql(xv(n,ut,ut,0,0,l,p,X,l,mt=[],T,st),st),l,st,T,p,a?mt:st);break;default:eh(R,ut,ut,ut,[""],st,0,p,st)}}g=_=M=0,K=nt=1,X=R="",T=f;break;case 58:T=1+kr(R),M=G;default:if(K<1){if(J==123)--K;else if(J==125&&K++==0&&BT()==125)continue}switch(R+=ip(J),J*K){case 38:nt=_>0?1:(R+="\f",-1);break;case 44:p[g++]=(kr(R)-1)*nt,nt=1;break;case 64:ls()===45&&(R+=am(hr())),S=ls(),_=T=kr(X=R+=qT(th())),J++;break;case 45:G===45&&kr(R)==2&&(K=0)}}return c}function xv(n,t,i,a,l,c,f,p,y,g,_,T){for(var S=l-1,M=l===0?c:[""],G=p_(M),K=0,z=0,nt=0;K<a;++K)for(var J=0,X=_o(n,S+1,S=d_(z=f[K])),mt=n;J<G;++J)(mt=m_(z>0?M[J]+" "+X:zt(X,/&\f/g,M[J])))&&(y[nt++]=mt);return Mh(n,t,i,l===0?Nh:p,y,g,_,T)}function FT(n,t,i,a){return Mh(n,t,i,h_,ip(LT()),_o(n,2,-2),0,a)}function Rv(n,t,i,a,l){return Mh(n,t,i,rp,_o(n,0,a),_o(n,a+1,-1),a,l)}function y_(n,t,i){switch(OT(n,t)){case 5103:return Jt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Jt+n+n;case 4789:return Zl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Jt+n+Zl+n+ge+n+n;case 5936:switch(Je(n,t+11)){case 114:return Jt+n+ge+zt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Jt+n+ge+zt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Jt+n+ge+zt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Jt+n+ge+n+n;case 6165:return Jt+n+ge+"flex-"+n+n;case 5187:return Jt+n+zt(n,/(\w+).+(:[^]+)/,Jt+"box-$1$2"+ge+"flex-$1$2")+n;case 5443:return Jt+n+ge+"flex-item-"+zt(n,/flex-|-self/g,"")+(ui(n,/flex-|baseline/)?"":ge+"grid-row-"+zt(n,/flex-|-self/g,""))+n;case 4675:return Jt+n+ge+"flex-line-pack"+zt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Jt+n+ge+zt(n,"shrink","negative")+n;case 5292:return Jt+n+ge+zt(n,"basis","preferred-size")+n;case 6060:return Jt+"box-"+zt(n,"-grow","")+Jt+n+ge+zt(n,"grow","positive")+n;case 4554:return Jt+zt(n,/([^-])(transform)/g,"$1"+Jt+"$2")+n;case 6187:return zt(zt(zt(n,/(zoom-|grab)/,Jt+"$1"),/(image-set)/,Jt+"$1"),n,"")+n;case 5495:case 3959:return zt(n,/(image-set\([^]*)/,Jt+"$1$`$1");case 4968:return zt(zt(n,/(.+:)(flex-)?(.*)/,Jt+"box-pack:$3"+ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Jt+n+n;case 4200:if(!ui(n,/flex-|baseline/))return ge+"grid-column-align"+_o(n,t)+n;break;case 2592:case 3360:return ge+zt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,l){return t=l,ui(a.props,/grid-\w+-end/)})?~Jc(n+(i=i[t].value),"span",0)?n:ge+zt(n,"-start","")+n+ge+"grid-row-span:"+(~Jc(i,"span",0)?ui(i,/\d+/):+ui(i,/\d+/)-+ui(n,/\d+/))+";":ge+zt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return ui(a.props,/grid-\w+-start/)})?n:ge+zt(zt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return zt(n,/(.+)-inline(.+)/,Jt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kr(n)-1-t>6)switch(Je(n,t+1)){case 109:if(Je(n,t+4)!==45)break;case 102:return zt(n,/(.+:)(.+)-([^]+)/,"$1"+Jt+"$2-$3$1"+Zl+(Je(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~Jc(n,"stretch",0)?y_(zt(n,"stretch","fill-available"),t,i)+n:n}break;case 5152:case 5920:return zt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,l,c,f,p,y,g){return ge+l+":"+c+g+(f?ge+l+"-span:"+(p?y:+y-+c)+g:"")+n});case 4949:if(Je(n,t+6)===121)return zt(n,":",":"+Jt)+n;break;case 6444:switch(Je(n,Je(n,14)===45?18:11)){case 120:return zt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Jt+(Je(n,14)===45?"inline-":"")+"box$3$1"+Jt+"$2$3$1"+ge+"$2box$3")+n;case 100:return zt(n,":",":"+ge)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return zt(n,"scroll-","scroll-snap-")+n}return n}function ch(n,t){for(var i="",a=0;a<n.length;a++)i+=t(n[a],a,n,t)||"";return i}function QT(n,t,i,a){switch(n.type){case MT:if(n.children.length)break;case VT:case rp:return n.return=n.return||n.value;case h_:return"";case f_:return n.return=n.value+"{"+ch(n.children,a)+"}";case Nh:if(!kr(n.value=n.props.join(",")))return""}return kr(i=ch(n.children,a))?n.return=n.value+"{"+i+"}":""}function YT(n){var t=p_(n);return function(i,a,l,c){for(var f="",p=0;p<t;p++)f+=n[p](i,a,l,c)||"";return f}}function KT(n){return function(t){t.root||(t=t.return)&&n(t)}}function XT(n,t,i,a){if(n.length>-1&&!n.return)switch(n.type){case rp:n.return=y_(n.value,n.length,i);return;case f_:return ch([ta(n,{value:zt(n.value,"@","@"+Jt)})],a);case Nh:if(n.length)return jT(i=n.props,function(l){switch(ui(l,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oo(ta(n,{props:[zt(l,/:(read-\w+)/,":"+Zl+"$1")]})),oo(ta(n,{props:[l]})),_m(n,{props:Sv(i,a)});break;case"::placeholder":oo(ta(n,{props:[zt(l,/:(plac\w+)/,":"+Jt+"input-$1")]})),oo(ta(n,{props:[zt(l,/:(plac\w+)/,":"+Zl+"$1")]})),oo(ta(n,{props:[zt(l,/:(plac\w+)/,ge+"input-$1")]})),oo(ta(n,{props:[l]})),_m(n,{props:Sv(i,a)});break}return""})}}var ZT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bn={},Eo=typeof process<"u"&&Bn!==void 0&&(Bn.REACT_APP_SC_ATTR||Bn.SC_ATTR)||"data-styled",v_="active",b_="data-styled-version",jh="6.1.19",ap=`/*!sc*/
`,hh=typeof window<"u"&&typeof document<"u",WT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bn!==void 0&&Bn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bn.REACT_APP_SC_DISABLE_SPEEDY!==""?Bn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bn!==void 0&&Bn.SC_DISABLE_SPEEDY!==void 0&&Bn.SC_DISABLE_SPEEDY!==""&&Bn.SC_DISABLE_SPEEDY!=="false"&&Bn.SC_DISABLE_SPEEDY),JT={},Lh=Object.freeze([]),To=Object.freeze({});function __(n,t,i){return i===void 0&&(i=To),n.theme!==i.theme&&n.theme||t||i.theme}var A_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ew=/(^-|-$)/g;function Cv(n){return n.replace(tw,"-").replace(ew,"")}var nw=/(a)(d)/gi,Hc=52,Dv=function(n){return String.fromCharCode(n+(n>25?39:97))};function Tm(n){var t,i="";for(t=Math.abs(n);t>Hc;t=t/Hc|0)i=Dv(t%Hc)+i;return(Dv(t%Hc)+i).replace(nw,"$1-$2")}var sm,E_=5381,mo=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},T_=function(n){return mo(E_,n)};function w_(n){return Tm(T_(n)>>>0)}function rw(n){return n.displayName||n.name||"Component"}function om(n){return typeof n=="string"&&!0}var S_=typeof Symbol=="function"&&Symbol.for,x_=S_?Symbol.for("react.memo"):60115,iw=S_?Symbol.for("react.forward_ref"):60112,aw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ow=((sm={})[iw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sm[x_]=R_,sm);function kv(n){return("type"in(t=n)&&t.type.$$typeof)===x_?R_:"$$typeof"in n?ow[n.$$typeof]:aw;var t}var lw=Object.defineProperty,uw=Object.getOwnPropertyNames,Iv=Object.getOwnPropertySymbols,cw=Object.getOwnPropertyDescriptor,hw=Object.getPrototypeOf,Nv=Object.prototype;function C_(n,t,i){if(typeof t!="string"){if(Nv){var a=hw(t);a&&a!==Nv&&C_(n,a,i)}var l=uw(t);Iv&&(l=l.concat(Iv(t)));for(var c=kv(n),f=kv(t),p=0;p<l.length;++p){var y=l[p];if(!(y in sw||i&&i[y]||f&&y in f||c&&y in c)){var g=cw(t,y);try{lw(n,y,g)}catch{}}}}return n}function hs(n){return typeof n=="function"}function sp(n){return typeof n=="object"&&"styledComponentId"in n}function as(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function wm(n,t){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function iu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Sm(n,t,i){if(i===void 0&&(i=!1),!i&&!iu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=Sm(n[a],t[a]);else if(iu(t))for(var a in t)n[a]=Sm(n[a],t[a]);return n}function op(n,t){Object.defineProperty(n,"toString",{value:t})}function fs(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fw=function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,l=a.length,c=l;t>=c;)if((c<<=1)<0)throw fs(16,"".concat(t));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var f=l;f<c;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(t+1),y=(f=0,i.length);f<y;f++)this.tag.insertRule(p,i[f])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),l=a+i;this.groupSizes[t]=0;for(var c=a;c<l;c++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],l=this.indexOfGroup(t),c=l+a,f=l;f<c;f++)i+="".concat(this.tag.getRule(f)).concat(ap);return i},n}(),nh=new Map,fh=new Map,rh=1,qc=function(n){if(nh.has(n))return nh.get(n);for(;fh.has(rh);)rh++;var t=rh++;return nh.set(n,t),fh.set(t,n),t},dw=function(n,t){rh=t+1,nh.set(n,t),fh.set(t,n)},mw="style[".concat(Eo,"][").concat(b_,'="').concat(jh,'"]'),pw=new RegExp("^".concat(Eo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gw=function(n,t,i){for(var a,l=i.split(","),c=0,f=l.length;c<f;c++)(a=l[c])&&n.registerName(t,a)},yw=function(n,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(ap),l=[],c=0,f=a.length;c<f;c++){var p=a[c].trim();if(p){var y=p.match(pw);if(y){var g=0|parseInt(y[1],10),_=y[2];g!==0&&(dw(_,g),gw(n,_,y[3]),n.getTag().insertRules(g,l)),l.length=0}else l.push(p)}}},Vv=function(n){for(var t=document.querySelectorAll(mw),i=0,a=t.length;i<a;i++){var l=t[i];l&&l.getAttribute(Eo)!==v_&&(yw(n,l),l.parentNode&&l.parentNode.removeChild(l))}};function vw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var D_=function(n){var t=document.head,i=n||t,a=document.createElement("style"),l=function(p){var y=Array.from(p.querySelectorAll("style[".concat(Eo,"]")));return y[y.length-1]}(i),c=l!==void 0?l.nextSibling:null;a.setAttribute(Eo,v_),a.setAttribute(b_,jh);var f=vw();return f&&a.setAttribute("nonce",f),i.insertBefore(a,c),a},bw=function(){function n(t){this.element=D_(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,l=0,c=a.length;l<c;l++){var f=a[l];if(f.ownerNode===i)return f}throw fs(17)}(this.element),this.length=0}return n.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},n}(),_w=function(){function n(t){this.element=D_(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n}(),Aw=function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n}(),Mv=hh,Ew={isServer:!hh,useCSSOMInjection:!WT},dh=function(){function n(t,i,a){t===void 0&&(t=To),i===void 0&&(i={});var l=this;this.options=tn(tn({},Ew),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&hh&&Mv&&(Mv=!1,Vv(this)),op(this,function(){return function(c){for(var f=c.getTag(),p=f.length,y="",g=function(T){var S=function(nt){return fh.get(nt)}(T);if(S===void 0)return"continue";var M=c.names.get(S),G=f.getGroup(T);if(M===void 0||!M.size||G.length===0)return"continue";var K="".concat(Eo,".g").concat(T,'[id="').concat(S,'"]'),z="";M!==void 0&&M.forEach(function(nt){nt.length>0&&(z+="".concat(nt,","))}),y+="".concat(G).concat(K,'{content:"').concat(z,'"}').concat(ap)},_=0;_<p;_++)g(_);return y}(l)})}return n.registerId=function(t){return qc(t)},n.prototype.rehydrate=function(){!this.server&&hh&&Vv(this)},n.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(tn(tn({},this.options),t),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var a=i.useCSSOMInjection,l=i.target;return i.isServer?new Aw(l):a?new bw(l):new _w(l)}(this.options),new fw(t)));var t},n.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},n.prototype.registerName=function(t,i){if(qc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},n.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(qc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(qc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Tw=/&/g,ww=/^\s*\/\/.*$/gm;function k_(n,t){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=k_(i.children,t)),i})}function Sw(n){var t,i,a,l=To,c=l.options,f=c===void 0?To:c,p=l.plugins,y=p===void 0?Lh:p,g=function(S,M,G){return G.startsWith(i)&&G.endsWith(i)&&G.replaceAll(i,"").length>0?".".concat(t):S},_=y.slice();_.push(function(S){S.type===Nh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(Tw,i).replace(a,g))}),f.prefix&&_.push(XT),_.push(QT);var T=function(S,M,G,K){M===void 0&&(M=""),G===void 0&&(G=""),K===void 0&&(K="&"),t=K,i=M,a=new RegExp("\\".concat(i,"\\b"),"g");var z=S.replace(ww,""),nt=GT(G||M?"".concat(G," ").concat(M," { ").concat(z," }"):z);f.namespace&&(nt=k_(nt,f.namespace));var J=[];return ch(nt,YT(_.concat(KT(function(X){return J.push(X)})))),J};return T.hash=y.length?y.reduce(function(S,M){return M.name||fs(15),mo(S,M.name)},E_).toString():"",T}var xw=new dh,xm=Sw(),I_=Q.createContext({shouldForwardProp:void 0,styleSheet:xw,stylis:xm});I_.Consumer;Q.createContext(void 0);function Rm(){return B.useContext(I_)}var Rw=function(){function n(t,i){var a=this;this.inject=function(l,c){c===void 0&&(c=xm);var f=a.name+c.hash;l.hasNameForId(a.id,f)||l.insertRules(a.id,f,c(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,op(this,function(){throw fs(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=xm),this.name+t.hash},n}(),Cw=function(n){return n>="A"&&n<="Z"};function Ov(n){for(var t="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;Cw(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var N_=function(n){return n==null||n===!1||n===""},V_=function(n){var t,i,a=[];for(var l in n){var c=n[l];n.hasOwnProperty(l)&&!N_(c)&&(Array.isArray(c)&&c.isCss||hs(c)?a.push("".concat(Ov(l),":"),c,";"):iu(c)?a.push.apply(a,ru(ru(["".concat(l," {")],V_(c),!1),["}"],!1)):a.push("".concat(Ov(l),": ").concat((t=l,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in ZT||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function na(n,t,i,a){if(N_(n))return[];if(sp(n))return[".".concat(n.styledComponentId)];if(hs(n)){if(!hs(c=n)||c.prototype&&c.prototype.isReactComponent||!t)return[n];var l=n(t);return na(l,t,i,a)}var c;return n instanceof Rw?i?(n.inject(i,a),[n.getName(a)]):[n]:iu(n)?V_(n):Array.isArray(n)?Array.prototype.concat.apply(Lh,n.map(function(f){return na(f,t,i,a)})):[n.toString()]}function M_(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(hs(i)&&!sp(i))return!1}return!0}var Dw=T_(jh),kw=function(){function n(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&M_(t),this.componentId=i,this.baseHash=mo(Dw,i),this.baseStyle=a,dh.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,a){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))l=as(l,this.staticRulesId);else{var c=wm(na(this.rules,t,i,a)),f=Tm(mo(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var p=a(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,p)}l=as(l,f),this.staticRulesId=f}else{for(var y=mo(this.baseHash,a.hash),g="",_=0;_<this.rules.length;_++){var T=this.rules[_];if(typeof T=="string")g+=T;else if(T){var S=wm(na(T,t,i,a));y=mo(y,S+_),g+=S}}if(g){var M=Tm(y>>>0);i.hasNameForId(this.componentId,M)||i.insertRules(this.componentId,M,a(g,".".concat(M),void 0,this.componentId)),l=as(l,M)}}return l},n}(),au=Q.createContext(void 0);au.Consumer;function jv(n){var t=Q.useContext(au),i=B.useMemo(function(){return function(a,l){if(!a)throw fs(14);if(hs(a)){var c=a(l);return c}if(Array.isArray(a)||typeof a!="object")throw fs(8);return l?tn(tn({},l),a):a}(n.theme,t)},[n.theme,t]);return n.children?Q.createElement(au.Provider,{value:i},n.children):null}var lm={};function Iw(n,t,i){var a=sp(n),l=n,c=!om(n),f=t.attrs,p=f===void 0?Lh:f,y=t.componentId,g=y===void 0?function(mt,st){var ut=typeof mt!="string"?"sc":Cv(mt);lm[ut]=(lm[ut]||0)+1;var R="".concat(ut,"-").concat(w_(jh+ut+lm[ut]));return st?"".concat(st,"-").concat(R):R}(t.displayName,t.parentComponentId):y,_=t.displayName,T=_===void 0?function(mt){return om(mt)?"styled.".concat(mt):"Styled(".concat(rw(mt),")")}(n):_,S=t.displayName&&t.componentId?"".concat(Cv(t.displayName),"-").concat(t.componentId):t.componentId||g,M=a&&l.attrs?l.attrs.concat(p).filter(Boolean):p,G=t.shouldForwardProp;if(a&&l.shouldForwardProp){var K=l.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;G=function(mt,st){return K(mt,st)&&z(mt,st)}}else G=K}var nt=new kw(i,S,a?l.componentStyle:void 0);function J(mt,st){return function(ut,R,x){var D=ut.attrs,V=ut.componentStyle,N=ut.defaultProps,j=ut.foldedComponentIds,C=ut.styledComponentId,Mt=ut.target,vt=Q.useContext(au),F=Rm(),ht=ut.shouldForwardProp||F.shouldForwardProp,ft=__(R,vt,N)||To,Tt=function(_t,pt,xt){for(var It,ot=tn(tn({},pt),{className:void 0,theme:xt}),Nt=0;Nt<_t.length;Nt+=1){var Ot=hs(It=_t[Nt])?It(ot):It;for(var Pt in Ot)ot[Pt]=Pt==="className"?as(ot[Pt],Ot[Pt]):Pt==="style"?tn(tn({},ot[Pt]),Ot[Pt]):Ot[Pt]}return pt.className&&(ot.className=as(ot.className,pt.className)),ot}(D,R,ft),I=Tt.as||Mt,W={};for(var dt in Tt)Tt[dt]===void 0||dt[0]==="$"||dt==="as"||dt==="theme"&&Tt.theme===ft||(dt==="forwardedAs"?W.as=Tt.forwardedAs:ht&&!ht(dt,I)||(W[dt]=Tt[dt]));var tt=function(_t,pt){var xt=Rm(),It=_t.generateAndInjectStyles(pt,xt.styleSheet,xt.stylis);return It}(V,Tt),ct=as(j,C);return tt&&(ct+=" "+tt),Tt.className&&(ct+=" "+Tt.className),W[om(I)&&!A_.has(I)?"class":"className"]=ct,x&&(W.ref=x),B.createElement(I,W)}(X,mt,st)}J.displayName=T;var X=Q.forwardRef(J);return X.attrs=M,X.componentStyle=nt,X.displayName=T,X.shouldForwardProp=G,X.foldedComponentIds=a?as(l.foldedComponentIds,l.styledComponentId):"",X.styledComponentId=S,X.target=a?l.target:n,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(mt){this._foldedDefaultProps=a?function(st){for(var ut=[],R=1;R<arguments.length;R++)ut[R-1]=arguments[R];for(var x=0,D=ut;x<D.length;x++)Sm(st,D[x],!0);return st}({},l.defaultProps,mt):mt}}),op(X,function(){return".".concat(X.styledComponentId)}),c&&C_(X,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function Lv(n,t){for(var i=[n[0]],a=0,l=t.length;a<l;a+=1)i.push(t[a],n[a+1]);return i}var Bv=function(n){return Object.assign(n,{isCss:!0})};function bt(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(hs(n)||iu(n))return Bv(na(Lv(Lh,ru([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?na(a):Bv(na(Lv(a,t)))}function Cm(n,t,i){if(i===void 0&&(i=To),!t)throw fs(1,t);var a=function(l){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return n(t,i,bt.apply(void 0,ru([l],c,!1)))};return a.attrs=function(l){return Cm(n,t,tn(tn({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},a.withConfig=function(l){return Cm(n,t,tn(tn({},i),l))},a}var O_=function(n){return Cm(Iw,n)},lt=O_;A_.forEach(function(n){lt[n]=O_(n)});var Nw=function(){function n(t,i){this.rules=t,this.componentId=i,this.isStatic=M_(t),dh.registerId(this.componentId+1)}return n.prototype.createStyles=function(t,i,a,l){var c=l(wm(na(this.rules,i,a,l)),""),f=this.componentId+t;a.insertRules(f,f,c)},n.prototype.removeStyles=function(t,i){i.clearRules(this.componentId+t)},n.prototype.renderStyles=function(t,i,a,l){t>2&&dh.registerId(this.componentId+t),this.removeStyles(t,a),this.createStyles(t,i,a,l)},n}();function Vw(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=bt.apply(void 0,ru([n],t,!1)),l="sc-global-".concat(w_(JSON.stringify(a))),c=new Nw(a,l),f=function(y){var g=Rm(),_=Q.useContext(au),T=Q.useRef(g.styleSheet.allocateGSInstance(l)).current;return g.styleSheet.server&&p(T,y,g.styleSheet,_,g.stylis),Q.useLayoutEffect(function(){if(!g.styleSheet.server)return p(T,y,g.styleSheet,_,g.stylis),function(){return c.removeStyles(T,g.styleSheet)}},[T,y,g.styleSheet,_,g.stylis]),null};function p(y,g,_,T,S){if(c.isStatic)c.renderStyles(y,JT,_,S);else{var M=tn(tn({},g),{theme:__(g,T,f.defaultProps)});c.renderStyles(y,M,_,S)}}return Q.memo(f)}const Mw="/95-Portfolio/assets/stars-C6O0RJ9m.png";function Ow({enabled:n}){const[t,i]=B.useState([]);return B.useEffect(()=>{let a;return n&&(a=setInterval(()=>{const l={id:Date.now()+Math.random(),left:Math.random()*window.innerWidth,size:Math.random()*3+5,speed:Math.random()*3+1};i(c=>[...c,l])},200)),n||i([]),()=>clearInterval(a)},[n]),B.useEffect(()=>{if(!n)return;const a=setInterval(()=>{i(l=>l.map(c=>({...c,top:(c.top||0)+c.speed})).filter(c=>(c.top||0)<window.innerHeight))},50);return()=>clearInterval(a)},[n]),A.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",width:"100%",height:"100%"},children:t.map(a=>A.jsx("img",{src:Mw,style:{position:"absolute",top:a.top||0,left:a.left,width:a.size,height:a.size,pointerEvents:"none"}},a.id))})}const jw=()=>{};var zv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=function(n){const t=[];let i=0;for(let a=0;a<n.length;a++){let l=n.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(n.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},Lw=function(n){const t=[];let i=0,a=0;for(;i<n.length;){const l=n[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const c=n[i++];t[a++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=n[i++],f=n[i++],p=n[i++],y=((l&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(y>>10)),t[a++]=String.fromCharCode(56320+(y&1023))}else{const c=n[i++],f=n[i++];t[a++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},L_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<n.length;l+=3){const c=n[l],f=l+1<n.length,p=f?n[l+1]:0,y=l+2<n.length,g=y?n[l+2]:0,_=c>>2,T=(c&3)<<4|p>>4;let S=(p&15)<<2|g>>6,M=g&63;y||(M=64,f||(S=64)),a.push(i[_],i[T],i[S],i[M])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(j_(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Lw(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<n.length;){const c=i[n.charAt(l++)],p=l<n.length?i[n.charAt(l)]:0;++l;const g=l<n.length?i[n.charAt(l)]:64;++l;const T=l<n.length?i[n.charAt(l)]:64;if(++l,c==null||p==null||g==null||T==null)throw new Bw;const S=c<<2|p>>4;if(a.push(S),g!==64){const M=p<<4&240|g>>2;if(a.push(M),T!==64){const G=g<<6&192|T;a.push(G)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zw=function(n){const t=j_(n);return L_.encodeByteArray(t,!0)},mh=function(n){return zw(n).replace(/\./g,"")},Pw=function(n){try{return L_.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=()=>Uw().__FIREBASE_DEFAULTS__,Hw=()=>{if(typeof process>"u"||typeof zv>"u")return;const n=zv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Pw(n[1]);return t&&JSON.parse(t)},lp=()=>{try{return jw()||$w()||Hw()||qw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gw=n=>{var t,i;return(i=(t=lp())==null?void 0:t.emulatorHosts)==null?void 0:i[n]},Fw=n=>{const t=Gw(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},B_=()=>{var n;return(n=lp())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yw(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[mh(JSON.stringify(i)),mh(JSON.stringify(f)),""].join(".")}const Wl={};function Xw(){const n={prod:[],emulator:[]};for(const t of Object.keys(Wl))Wl[t]?n.emulator.push(t):n.prod.push(t);return n}function Zw(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let Pv=!1;function Ww(n,t){if(typeof window>"u"||typeof document>"u"||!up(window.location.host)||Wl[n]===t||Wl[n]||Pv)return;Wl[n]=t;function i(S){return`__firebase__banner__${S}`}const a="__firebase__banner",c=Xw().prod.length>0;function f(){const S=document.getElementById(a);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function y(S,M){S.setAttribute("width","24"),S.setAttribute("id",M),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Pv=!0,f()},S}function _(S,M){S.setAttribute("id",M),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=Zw(a),M=i("text"),G=document.getElementById(M)||document.createElement("span"),K=i("learnmore"),z=document.getElementById(K)||document.createElement("a"),nt=i("preprendIcon"),J=document.getElementById(nt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const X=S.element;p(X),_(z,K);const mt=g();y(J,nt),X.append(J,G,z,mt),document.body.appendChild(X)}c?(G.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tS(){var t;const n=(t=lp())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eS(){return!tS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nS(){try{return typeof indexedDB=="object"}catch{return!1}}function rS(){return new Promise((n,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;t(((c=l.error)==null?void 0:c.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="FirebaseError";class Vo extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=iS,Object.setPrototypeOf(this,Vo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z_.prototype.create)}}class z_{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?aS(c,a):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new Vo(l,p,a)}}function aS(n,t){return n.replace(sS,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const sS=/\{\$([^}]+)}/g;function ph(n,t){if(n===t)return!0;const i=Object.keys(n),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const c=n[l],f=t[l];if(Uv(c)&&Uv(f)){if(!ph(c,f))return!1}else if(c!==f)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function Uv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return n&&n._delegate?n._delegate:n}class su{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new Qw;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(t==null?void 0:t.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uS(t))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch{}}}}clearInstance(t=rs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=rs){return this.instances.has(t)}getOptions(t=rs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);a===p&&f.resolve(l)}return l}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(t),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&t(c,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:lS(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=rs){return this.component?this.component.multipleInstances?t:rs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lS(n){return n===rs?void 0:n}function uS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new oS(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Kt||(Kt={}));const hS={debug:Kt.DEBUG,verbose:Kt.VERBOSE,info:Kt.INFO,warn:Kt.WARN,error:Kt.ERROR,silent:Kt.SILENT},fS=Kt.INFO,dS={[Kt.DEBUG]:"log",[Kt.VERBOSE]:"log",[Kt.INFO]:"info",[Kt.WARN]:"warn",[Kt.ERROR]:"error"},mS=(n,t,...i)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),l=dS[t];if(l)console[l](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class P_{constructor(t){this.name=t,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Kt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Kt.DEBUG,...t),this._logHandler(this,Kt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Kt.VERBOSE,...t),this._logHandler(this,Kt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Kt.INFO,...t),this._logHandler(this,Kt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Kt.WARN,...t),this._logHandler(this,Kt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Kt.ERROR,...t),this._logHandler(this,Kt.ERROR,...t)}}const pS=(n,t)=>t.some(i=>n instanceof i);let $v,Hv;function gS(){return $v||($v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yS(){return Hv||(Hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,Dm=new WeakMap,$_=new WeakMap,um=new WeakMap,cp=new WeakMap;function vS(n){const t=new Promise((i,a)=>{const l=()=>{n.removeEventListener("success",c),n.removeEventListener("error",f)},c=()=>{i(ra(n.result)),l()},f=()=>{a(n.error),l()};n.addEventListener("success",c),n.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&U_.set(i,n)}).catch(()=>{}),cp.set(t,n),t}function bS(n){if(Dm.has(n))return;const t=new Promise((i,a)=>{const l=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",f),n.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{a(n.error||new DOMException("AbortError","AbortError")),l()};n.addEventListener("complete",c),n.addEventListener("error",f),n.addEventListener("abort",f)});Dm.set(n,t)}let km={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return Dm.get(n);if(t==="objectStoreNames")return n.objectStoreNames||$_.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ra(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function _S(n){km=n(km)}function AS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=n.call(cm(this),t,...i);return $_.set(a,t.sort?t.sort():[t]),ra(a)}:yS().includes(n)?function(...t){return n.apply(cm(this),t),ra(U_.get(this))}:function(...t){return ra(n.apply(cm(this),t))}}function ES(n){return typeof n=="function"?AS(n):(n instanceof IDBTransaction&&bS(n),pS(n,gS())?new Proxy(n,km):n)}function ra(n){if(n instanceof IDBRequest)return vS(n);if(um.has(n))return um.get(n);const t=ES(n);return t!==n&&(um.set(n,t),cp.set(t,n)),t}const cm=n=>cp.get(n);function TS(n,t,{blocked:i,upgrade:a,blocking:l,terminated:c}={}){const f=indexedDB.open(n,t),p=ra(f);return a&&f.addEventListener("upgradeneeded",y=>{a(ra(f.result),y.oldVersion,y.newVersion,ra(f.transaction),y)}),i&&f.addEventListener("blocked",y=>i(y.oldVersion,y.newVersion,y)),p.then(y=>{c&&y.addEventListener("close",()=>c()),l&&y.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const wS=["get","getKey","getAll","getAllKeys","count"],SS=["put","add","delete","clear"],hm=new Map;function qv(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(hm.get(t))return hm.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=SS.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||wS.includes(i)))return;const c=async function(f,...p){const y=this.transaction(f,l?"readwrite":"readonly");let g=y.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[i](...p),l&&y.done]))[0]};return hm.set(t,c),c}_S(n=>({...n,get:(t,i,a)=>qv(t,i)||n.get(t,i,a),has:(t,i)=>!!qv(t,i)||n.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(RS(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function RS(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Im="@firebase/app",Gv="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new P_("@firebase/app"),CS="@firebase/app-compat",DS="@firebase/analytics-compat",kS="@firebase/analytics",IS="@firebase/app-check-compat",NS="@firebase/app-check",VS="@firebase/auth",MS="@firebase/auth-compat",OS="@firebase/database",jS="@firebase/data-connect",LS="@firebase/database-compat",BS="@firebase/functions",zS="@firebase/functions-compat",PS="@firebase/installations",US="@firebase/installations-compat",$S="@firebase/messaging",HS="@firebase/messaging-compat",qS="@firebase/performance",GS="@firebase/performance-compat",FS="@firebase/remote-config",QS="@firebase/remote-config-compat",YS="@firebase/storage",KS="@firebase/storage-compat",XS="@firebase/firestore",ZS="@firebase/ai",WS="@firebase/firestore-compat",JS="firebase",tx="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="[DEFAULT]",ex={[Im]:"fire-core",[CS]:"fire-core-compat",[kS]:"fire-analytics",[DS]:"fire-analytics-compat",[NS]:"fire-app-check",[IS]:"fire-app-check-compat",[VS]:"fire-auth",[MS]:"fire-auth-compat",[OS]:"fire-rtdb",[jS]:"fire-data-connect",[LS]:"fire-rtdb-compat",[BS]:"fire-fn",[zS]:"fire-fn-compat",[PS]:"fire-iid",[US]:"fire-iid-compat",[$S]:"fire-fcm",[HS]:"fire-fcm-compat",[qS]:"fire-perf",[GS]:"fire-perf-compat",[FS]:"fire-rc",[QS]:"fire-rc-compat",[YS]:"fire-gcs",[KS]:"fire-gcs-compat",[XS]:"fire-fst",[WS]:"fire-fst-compat",[ZS]:"fire-vertex","fire-js":"fire-js",[JS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map,nx=new Map,Vm=new Map;function Fv(n,t){try{n.container.addComponent(t)}catch(i){fi.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function yh(n){const t=n.name;if(Vm.has(t))return fi.debug(`There were multiple attempts to register component ${t}.`),!1;Vm.set(t,n);for(const i of gh.values())Fv(i,n);for(const i of nx.values())Fv(i,n);return!0}function rx(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function ix(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ia=new z_("app","Firebase",ax);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new su("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ia.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=tx;function H_(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const a={name:Nm,automaticDataCollectionEnabled:!0,...t},l=a.name;if(typeof l!="string"||!l)throw ia.create("bad-app-name",{appName:String(l)});if(i||(i=B_()),!i)throw ia.create("no-options");const c=gh.get(l);if(c){if(ph(i,c.options)&&ph(a,c.config))return c;throw ia.create("duplicate-app",{appName:l})}const f=new cS(l);for(const y of Vm.values())f.addComponent(y);const p=new sx(i,a,f);return gh.set(l,p),p}function lx(n=Nm){const t=gh.get(n);if(!t&&n===Nm&&B_())return H_();if(!t)throw ia.create("no-app",{appName:n});return t}function go(n,t,i){let a=ex[n]??n;i&&(a+=`-${i}`);const l=a.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${t}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fi.warn(f.join(" "));return}yh(new su(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="firebase-heartbeat-database",cx=1,ou="firebase-heartbeat-store";let fm=null;function q_(){return fm||(fm=TS(ux,cx,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ou)}catch(i){console.warn(i)}}}}).catch(n=>{throw ia.create("idb-open",{originalErrorMessage:n.message})})),fm}async function hx(n){try{const i=(await q_()).transaction(ou),a=await i.objectStore(ou).get(G_(n));return await i.done,a}catch(t){if(t instanceof Vo)fi.warn(t.message);else{const i=ia.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});fi.warn(i.message)}}}async function Qv(n,t){try{const a=(await q_()).transaction(ou,"readwrite");await a.objectStore(ou).put(t,G_(n)),await a.done}catch(i){if(i instanceof Vo)fi.warn(i.message);else{const a=ia.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});fi.warn(a.message)}}}function G_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=1024,dx=30;class mx{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new gx(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Yv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>dx){const f=yx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){fi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Yv(),{heartbeatsToSend:a,unsentEntries:l}=px(this._heartbeatsCache.heartbeats),c=mh(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return fi.warn(i),""}}}function Yv(){return new Date().toISOString().substring(0,10)}function px(n,t=fx){const i=[];let a=n.slice();for(const l of n){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),Kv(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Kv(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class gx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nS()?rS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await hx(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Qv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Qv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Kv(n){return mh(JSON.stringify({version:2,heartbeats:n})).length}function yx(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(n){yh(new su("platform-logger",t=>new xS(t),"PRIVATE")),yh(new su("heartbeat",t=>new mx(t),"PRIVATE")),go(Im,Gv,n),go(Im,Gv,"esm2020"),go("fire-js","")}vx("");var bx="firebase",_x="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */go(bx,_x,"app");var Xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aa,F_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,x){function D(){}D.prototype=x.prototype,R.F=x.prototype,R.prototype=new D,R.prototype.constructor=R,R.D=function(V,N,j){for(var C=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)C[Mt-2]=arguments[Mt];return x.prototype[N].apply(V,C)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(R,x,D){D||(D=0);const V=Array(16);if(typeof x=="string")for(var N=0;N<16;++N)V[N]=x.charCodeAt(D++)|x.charCodeAt(D++)<<8|x.charCodeAt(D++)<<16|x.charCodeAt(D++)<<24;else for(N=0;N<16;++N)V[N]=x[D++]|x[D++]<<8|x[D++]<<16|x[D++]<<24;x=R.g[0],D=R.g[1],N=R.g[2];let j=R.g[3],C;C=x+(j^D&(N^j))+V[0]+3614090360&4294967295,x=D+(C<<7&4294967295|C>>>25),C=j+(N^x&(D^N))+V[1]+3905402710&4294967295,j=x+(C<<12&4294967295|C>>>20),C=N+(D^j&(x^D))+V[2]+606105819&4294967295,N=j+(C<<17&4294967295|C>>>15),C=D+(x^N&(j^x))+V[3]+3250441966&4294967295,D=N+(C<<22&4294967295|C>>>10),C=x+(j^D&(N^j))+V[4]+4118548399&4294967295,x=D+(C<<7&4294967295|C>>>25),C=j+(N^x&(D^N))+V[5]+1200080426&4294967295,j=x+(C<<12&4294967295|C>>>20),C=N+(D^j&(x^D))+V[6]+2821735955&4294967295,N=j+(C<<17&4294967295|C>>>15),C=D+(x^N&(j^x))+V[7]+4249261313&4294967295,D=N+(C<<22&4294967295|C>>>10),C=x+(j^D&(N^j))+V[8]+1770035416&4294967295,x=D+(C<<7&4294967295|C>>>25),C=j+(N^x&(D^N))+V[9]+2336552879&4294967295,j=x+(C<<12&4294967295|C>>>20),C=N+(D^j&(x^D))+V[10]+4294925233&4294967295,N=j+(C<<17&4294967295|C>>>15),C=D+(x^N&(j^x))+V[11]+2304563134&4294967295,D=N+(C<<22&4294967295|C>>>10),C=x+(j^D&(N^j))+V[12]+1804603682&4294967295,x=D+(C<<7&4294967295|C>>>25),C=j+(N^x&(D^N))+V[13]+4254626195&4294967295,j=x+(C<<12&4294967295|C>>>20),C=N+(D^j&(x^D))+V[14]+2792965006&4294967295,N=j+(C<<17&4294967295|C>>>15),C=D+(x^N&(j^x))+V[15]+1236535329&4294967295,D=N+(C<<22&4294967295|C>>>10),C=x+(N^j&(D^N))+V[1]+4129170786&4294967295,x=D+(C<<5&4294967295|C>>>27),C=j+(D^N&(x^D))+V[6]+3225465664&4294967295,j=x+(C<<9&4294967295|C>>>23),C=N+(x^D&(j^x))+V[11]+643717713&4294967295,N=j+(C<<14&4294967295|C>>>18),C=D+(j^x&(N^j))+V[0]+3921069994&4294967295,D=N+(C<<20&4294967295|C>>>12),C=x+(N^j&(D^N))+V[5]+3593408605&4294967295,x=D+(C<<5&4294967295|C>>>27),C=j+(D^N&(x^D))+V[10]+38016083&4294967295,j=x+(C<<9&4294967295|C>>>23),C=N+(x^D&(j^x))+V[15]+3634488961&4294967295,N=j+(C<<14&4294967295|C>>>18),C=D+(j^x&(N^j))+V[4]+3889429448&4294967295,D=N+(C<<20&4294967295|C>>>12),C=x+(N^j&(D^N))+V[9]+568446438&4294967295,x=D+(C<<5&4294967295|C>>>27),C=j+(D^N&(x^D))+V[14]+3275163606&4294967295,j=x+(C<<9&4294967295|C>>>23),C=N+(x^D&(j^x))+V[3]+4107603335&4294967295,N=j+(C<<14&4294967295|C>>>18),C=D+(j^x&(N^j))+V[8]+1163531501&4294967295,D=N+(C<<20&4294967295|C>>>12),C=x+(N^j&(D^N))+V[13]+2850285829&4294967295,x=D+(C<<5&4294967295|C>>>27),C=j+(D^N&(x^D))+V[2]+4243563512&4294967295,j=x+(C<<9&4294967295|C>>>23),C=N+(x^D&(j^x))+V[7]+1735328473&4294967295,N=j+(C<<14&4294967295|C>>>18),C=D+(j^x&(N^j))+V[12]+2368359562&4294967295,D=N+(C<<20&4294967295|C>>>12),C=x+(D^N^j)+V[5]+4294588738&4294967295,x=D+(C<<4&4294967295|C>>>28),C=j+(x^D^N)+V[8]+2272392833&4294967295,j=x+(C<<11&4294967295|C>>>21),C=N+(j^x^D)+V[11]+1839030562&4294967295,N=j+(C<<16&4294967295|C>>>16),C=D+(N^j^x)+V[14]+4259657740&4294967295,D=N+(C<<23&4294967295|C>>>9),C=x+(D^N^j)+V[1]+2763975236&4294967295,x=D+(C<<4&4294967295|C>>>28),C=j+(x^D^N)+V[4]+1272893353&4294967295,j=x+(C<<11&4294967295|C>>>21),C=N+(j^x^D)+V[7]+4139469664&4294967295,N=j+(C<<16&4294967295|C>>>16),C=D+(N^j^x)+V[10]+3200236656&4294967295,D=N+(C<<23&4294967295|C>>>9),C=x+(D^N^j)+V[13]+681279174&4294967295,x=D+(C<<4&4294967295|C>>>28),C=j+(x^D^N)+V[0]+3936430074&4294967295,j=x+(C<<11&4294967295|C>>>21),C=N+(j^x^D)+V[3]+3572445317&4294967295,N=j+(C<<16&4294967295|C>>>16),C=D+(N^j^x)+V[6]+76029189&4294967295,D=N+(C<<23&4294967295|C>>>9),C=x+(D^N^j)+V[9]+3654602809&4294967295,x=D+(C<<4&4294967295|C>>>28),C=j+(x^D^N)+V[12]+3873151461&4294967295,j=x+(C<<11&4294967295|C>>>21),C=N+(j^x^D)+V[15]+530742520&4294967295,N=j+(C<<16&4294967295|C>>>16),C=D+(N^j^x)+V[2]+3299628645&4294967295,D=N+(C<<23&4294967295|C>>>9),C=x+(N^(D|~j))+V[0]+4096336452&4294967295,x=D+(C<<6&4294967295|C>>>26),C=j+(D^(x|~N))+V[7]+1126891415&4294967295,j=x+(C<<10&4294967295|C>>>22),C=N+(x^(j|~D))+V[14]+2878612391&4294967295,N=j+(C<<15&4294967295|C>>>17),C=D+(j^(N|~x))+V[5]+4237533241&4294967295,D=N+(C<<21&4294967295|C>>>11),C=x+(N^(D|~j))+V[12]+1700485571&4294967295,x=D+(C<<6&4294967295|C>>>26),C=j+(D^(x|~N))+V[3]+2399980690&4294967295,j=x+(C<<10&4294967295|C>>>22),C=N+(x^(j|~D))+V[10]+4293915773&4294967295,N=j+(C<<15&4294967295|C>>>17),C=D+(j^(N|~x))+V[1]+2240044497&4294967295,D=N+(C<<21&4294967295|C>>>11),C=x+(N^(D|~j))+V[8]+1873313359&4294967295,x=D+(C<<6&4294967295|C>>>26),C=j+(D^(x|~N))+V[15]+4264355552&4294967295,j=x+(C<<10&4294967295|C>>>22),C=N+(x^(j|~D))+V[6]+2734768916&4294967295,N=j+(C<<15&4294967295|C>>>17),C=D+(j^(N|~x))+V[13]+1309151649&4294967295,D=N+(C<<21&4294967295|C>>>11),C=x+(N^(D|~j))+V[4]+4149444226&4294967295,x=D+(C<<6&4294967295|C>>>26),C=j+(D^(x|~N))+V[11]+3174756917&4294967295,j=x+(C<<10&4294967295|C>>>22),C=N+(x^(j|~D))+V[2]+718787259&4294967295,N=j+(C<<15&4294967295|C>>>17),C=D+(j^(N|~x))+V[9]+3951481745&4294967295,R.g[0]=R.g[0]+x&4294967295,R.g[1]=R.g[1]+(N+(C<<21&4294967295|C>>>11))&4294967295,R.g[2]=R.g[2]+N&4294967295,R.g[3]=R.g[3]+j&4294967295}a.prototype.v=function(R,x){x===void 0&&(x=R.length);const D=x-this.blockSize,V=this.C;let N=this.h,j=0;for(;j<x;){if(N==0)for(;j<=D;)l(this,R,j),j+=this.blockSize;if(typeof R=="string"){for(;j<x;)if(V[N++]=R.charCodeAt(j++),N==this.blockSize){l(this,V),N=0;break}}else for(;j<x;)if(V[N++]=R[j++],N==this.blockSize){l(this,V),N=0;break}}this.h=N,this.o+=x},a.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var x=1;x<R.length-8;++x)R[x]=0;x=this.o*8;for(var D=R.length-8;D<R.length;++D)R[D]=x&255,x/=256;for(this.v(R),R=Array(16),x=0,D=0;D<4;++D)for(let V=0;V<32;V+=8)R[x++]=this.g[D]>>>V&255;return R};function c(R,x){var D=p;return Object.prototype.hasOwnProperty.call(D,R)?D[R]:D[R]=x(R)}function f(R,x){this.h=x;const D=[];let V=!0;for(let N=R.length-1;N>=0;N--){const j=R[N]|0;V&&j==x||(D[N]=j,V=!1)}this.g=D}var p={};function y(R){return-128<=R&&R<128?c(R,function(x){return new f([x|0],x<0?-1:0)}):new f([R|0],R<0?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return T;if(R<0)return z(g(-R));const x=[];let D=1;for(let V=0;R>=D;V++)x[V]=R/D|0,D*=4294967296;return new f(x,0)}function _(R,x){if(R.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(R.charAt(0)=="-")return z(_(R.substring(1),x));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=g(Math.pow(x,8));let V=T;for(let j=0;j<R.length;j+=8){var N=Math.min(8,R.length-j);const C=parseInt(R.substring(j,j+N),x);N<8?(N=g(Math.pow(x,N)),V=V.j(N).add(g(C))):(V=V.j(D),V=V.add(g(C)))}return V}var T=y(0),S=y(1),M=y(16777216);n=f.prototype,n.m=function(){if(K(this))return-z(this).m();let R=0,x=1;for(let D=0;D<this.g.length;D++){const V=this.i(D);R+=(V>=0?V:4294967296+V)*x,x*=4294967296}return R},n.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(G(this))return"0";if(K(this))return"-"+z(this).toString(R);const x=g(Math.pow(R,6));var D=this;let V="";for(;;){const N=mt(D,x).g;D=nt(D,N.j(x));let j=((D.g.length>0?D.g[0]:D.h)>>>0).toString(R);if(D=N,G(D))return j+V;for(;j.length<6;)j="0"+j;V=j+V}},n.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function G(R){if(R.h!=0)return!1;for(let x=0;x<R.g.length;x++)if(R.g[x]!=0)return!1;return!0}function K(R){return R.h==-1}n.l=function(R){return R=nt(this,R),K(R)?-1:G(R)?0:1};function z(R){const x=R.g.length,D=[];for(let V=0;V<x;V++)D[V]=~R.g[V];return new f(D,~R.h).add(S)}n.abs=function(){return K(this)?z(this):this},n.add=function(R){const x=Math.max(this.g.length,R.g.length),D=[];let V=0;for(let N=0;N<=x;N++){let j=V+(this.i(N)&65535)+(R.i(N)&65535),C=(j>>>16)+(this.i(N)>>>16)+(R.i(N)>>>16);V=C>>>16,j&=65535,C&=65535,D[N]=C<<16|j}return new f(D,D[D.length-1]&-2147483648?-1:0)};function nt(R,x){return R.add(z(x))}n.j=function(R){if(G(this)||G(R))return T;if(K(this))return K(R)?z(this).j(z(R)):z(z(this).j(R));if(K(R))return z(this.j(z(R)));if(this.l(M)<0&&R.l(M)<0)return g(this.m()*R.m());const x=this.g.length+R.g.length,D=[];for(var V=0;V<2*x;V++)D[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<R.g.length;N++){const j=this.i(V)>>>16,C=this.i(V)&65535,Mt=R.i(N)>>>16,vt=R.i(N)&65535;D[2*V+2*N]+=C*vt,J(D,2*V+2*N),D[2*V+2*N+1]+=j*vt,J(D,2*V+2*N+1),D[2*V+2*N+1]+=C*Mt,J(D,2*V+2*N+1),D[2*V+2*N+2]+=j*Mt,J(D,2*V+2*N+2)}for(R=0;R<x;R++)D[R]=D[2*R+1]<<16|D[2*R];for(R=x;R<2*x;R++)D[R]=0;return new f(D,0)};function J(R,x){for(;(R[x]&65535)!=R[x];)R[x+1]+=R[x]>>>16,R[x]&=65535,x++}function X(R,x){this.g=R,this.h=x}function mt(R,x){if(G(x))throw Error("division by zero");if(G(R))return new X(T,T);if(K(R))return x=mt(z(R),x),new X(z(x.g),z(x.h));if(K(x))return x=mt(R,z(x)),new X(z(x.g),x.h);if(R.g.length>30){if(K(R)||K(x))throw Error("slowDivide_ only works with positive integers.");for(var D=S,V=x;V.l(R)<=0;)D=st(D),V=st(V);var N=ut(D,1),j=ut(V,1);for(V=ut(V,2),D=ut(D,2);!G(V);){var C=j.add(V);C.l(R)<=0&&(N=N.add(D),j=C),V=ut(V,1),D=ut(D,1)}return x=nt(R,N.j(x)),new X(N,x)}for(N=T;R.l(x)>=0;){for(D=Math.max(1,Math.floor(R.m()/x.m())),V=Math.ceil(Math.log(D)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),j=g(D),C=j.j(x);K(C)||C.l(R)>0;)D-=V,j=g(D),C=j.j(x);G(j)&&(j=S),N=N.add(j),R=nt(R,C)}return new X(N,R)}n.B=function(R){return mt(this,R).h},n.and=function(R){const x=Math.max(this.g.length,R.g.length),D=[];for(let V=0;V<x;V++)D[V]=this.i(V)&R.i(V);return new f(D,this.h&R.h)},n.or=function(R){const x=Math.max(this.g.length,R.g.length),D=[];for(let V=0;V<x;V++)D[V]=this.i(V)|R.i(V);return new f(D,this.h|R.h)},n.xor=function(R){const x=Math.max(this.g.length,R.g.length),D=[];for(let V=0;V<x;V++)D[V]=this.i(V)^R.i(V);return new f(D,this.h^R.h)};function st(R){const x=R.g.length+1,D=[];for(let V=0;V<x;V++)D[V]=R.i(V)<<1|R.i(V-1)>>>31;return new f(D,R.h)}function ut(R,x){const D=x>>5;x%=32;const V=R.g.length-D,N=[];for(let j=0;j<V;j++)N[j]=x>0?R.i(j+D)>>>x|R.i(j+D+1)<<32-x:R.i(j+D);return new f(N,R.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,F_=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=_,aa=f}).apply(typeof Xv<"u"?Xv:typeof self<"u"?self:typeof window<"u"?window:{});var Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q_,Gl,Y_,ih,Mm,K_,X_,Z_;(function(){var n,t=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gc=="object"&&Gc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var v=a;u=u.split(".");for(var w=0;w<u.length-1;w++){var U=u[w];if(!(U in v))break t;v=v[U]}u=u[u.length-1],w=v[u],m=m(w),m!=w&&m!=null&&t(v,u,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(m){var v=[],w;for(w in m)Object.prototype.hasOwnProperty.call(m,w)&&v.push([w,m[w]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function y(u,m,v){return u.call.apply(u.bind,arguments)}function g(u,m,v){return g=y,g.apply(null,arguments)}function _(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function T(u,m){function v(){}v.prototype=m.prototype,u.Z=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(w,U,Y){for(var gt=Array(arguments.length-2),jt=2;jt<arguments.length;jt++)gt[jt-2]=arguments[jt];return m.prototype[U].apply(w,gt)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function M(u){const m=u.length;if(m>0){const v=Array(m);for(let w=0;w<m;w++)v[w]=u[w];return v}return[]}function G(u,m){for(let w=1;w<arguments.length;w++){const U=arguments[w];var v=typeof U;if(v=v!="object"?v:U?Array.isArray(U)?"array":v:"null",v=="array"||v=="object"&&typeof U.length=="number"){v=u.length||0;const Y=U.length||0;u.length=v+Y;for(let gt=0;gt<Y;gt++)u[v+gt]=U[gt]}else u.push(U)}}class K{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function z(u){f.setTimeout(()=>{throw u},0)}function nt(){var u=R;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class J{constructor(){this.h=this.g=null}add(m,v){const w=X.get();w.set(m,v),this.h?this.h.next=w:this.g=w,this.h=w}}var X=new K(()=>new mt,u=>u.reset());class mt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let st,ut=!1,R=new J,x=()=>{const u=Promise.resolve(void 0);st=()=>{u.then(D)}};function D(){for(var u;u=nt();){try{u.h.call(u.g)}catch(v){z(v)}var m=X;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}ut=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return u}();function C(u){return/^[\s\xa0]*$/.test(u)}function Mt(u,m){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}T(Mt,N),Mt.prototype.init=function(u,m){const v=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Mt.Z.h.call(this)},Mt.prototype.h=function(){Mt.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),F=0;function ht(u,m,v,w,U){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!w,this.ha=U,this.key=++F,this.da=this.fa=!1}function ft(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tt(u,m,v){for(const w in u)m.call(v,u[w],w,u)}function I(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function W(u){const m={};for(const v in u)m[v]=u[v];return m}const dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tt(u,m){let v,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(v in w)u[v]=w[v];for(let Y=0;Y<dt.length;Y++)v=dt[Y],Object.prototype.hasOwnProperty.call(w,v)&&(u[v]=w[v])}}function ct(u){this.src=u,this.g={},this.h=0}ct.prototype.add=function(u,m,v,w,U){const Y=u.toString();u=this.g[Y],u||(u=this.g[Y]=[],this.h++);const gt=pt(u,m,w,U);return gt>-1?(m=u[gt],v||(m.fa=!1)):(m=new ht(m,this.src,Y,!!w,U),m.fa=v,u.push(m)),m};function _t(u,m){const v=m.type;if(v in u.g){var w=u.g[v],U=Array.prototype.indexOf.call(w,m,void 0),Y;(Y=U>=0)&&Array.prototype.splice.call(w,U,1),Y&&(ft(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function pt(u,m,v,w){for(let U=0;U<u.length;++U){const Y=u[U];if(!Y.da&&Y.listener==m&&Y.capture==!!v&&Y.ha==w)return U}return-1}var xt="closure_lm_"+(Math.random()*1e6|0),It={};function ot(u,m,v,w,U){if(Array.isArray(m)){for(let Y=0;Y<m.length;Y++)ot(u,m[Y],v,w,U);return null}return v=Pn(v),u&&u[vt]?u.J(m,v,p(w)?!!w.capture:!1,U):Nt(u,m,v,!1,w,U)}function Nt(u,m,v,w,U,Y){if(!m)throw Error("Invalid event type");const gt=p(U)?!!U.capture:!!U;let jt=Fe(u);if(jt||(u[xt]=jt=new ct(u)),v=jt.add(m,v,w,gt,Y),v.proxy)return v;if(w=Ot(),v.proxy=w,w.src=u,w.listener=v,u.addEventListener)j||(U=gt),U===void 0&&(U=!1),u.addEventListener(m.toString(),w,U);else if(u.attachEvent)u.attachEvent(ye(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ot(){function u(v){return m.call(u.src,u.listener,v)}const m=_e;return u}function Pt(u,m,v,w,U){if(Array.isArray(m))for(var Y=0;Y<m.length;Y++)Pt(u,m[Y],v,w,U);else w=p(w)?!!w.capture:!!w,v=Pn(v),u&&u[vt]?(u=u.i,Y=String(m).toString(),Y in u.g&&(m=u.g[Y],v=pt(m,v,w,U),v>-1&&(ft(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete u.g[Y],u.h--)))):u&&(u=Fe(u))&&(m=u.g[m.toString()],u=-1,m&&(u=pt(m,v,w,U)),(v=u>-1?m[u]:null)&&Xt(v))}function Xt(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[vt])_t(m.i,u);else{var v=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(v,w,u.capture):m.detachEvent?m.detachEvent(ye(v),w):m.addListener&&m.removeListener&&m.removeListener(w),(v=Fe(m))?(_t(v,u),v.h==0&&(v.src=null,m[xt]=null)):ft(u)}}}function ye(u){return u in It?It[u]:It[u]="on"+u}function _e(u,m){if(u.da)u=!0;else{m=new Mt(m,this);const v=u.listener,w=u.ha||u.src;u.fa&&Xt(u),u=v.call(w,m)}return u}function Fe(u){return u=u[xt],u instanceof ct?u:null}var ve="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pn(u){return typeof u=="function"?u:(u[ve]||(u[ve]=function(m){return u.handleEvent(m)}),u[ve])}function ie(){V.call(this),this.i=new ct(this),this.M=this,this.G=null}T(ie,V),ie.prototype[vt]=!0,ie.prototype.removeEventListener=function(u,m,v,w){Pt(this,u,m,v,w)};function we(u,m){var v,w=u.G;if(w)for(v=[];w;w=w.G)v.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new N(m,u);else if(m instanceof N)m.target=m.target||u;else{var U=m;m=new N(w,u),tt(m,U)}U=!0;let Y,gt;if(v)for(gt=v.length-1;gt>=0;gt--)Y=m.g=v[gt],U=Dn(Y,w,!0,m)&&U;if(Y=m.g=u,U=Dn(Y,w,!0,m)&&U,U=Dn(Y,w,!1,m)&&U,v)for(gt=0;gt<v.length;gt++)Y=m.g=v[gt],U=Dn(Y,w,!1,m)&&U}ie.prototype.N=function(){if(ie.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const v=u.g[m];for(let w=0;w<v.length;w++)ft(v[w]);delete u.g[m],u.h--}}this.G=null},ie.prototype.J=function(u,m,v,w){return this.i.add(String(u),m,!1,v,w)},ie.prototype.K=function(u,m,v,w){return this.i.add(String(u),m,!0,v,w)};function Dn(u,m,v,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let U=!0;for(let Y=0;Y<m.length;++Y){const gt=m[Y];if(gt&&!gt.da&&gt.capture==v){const jt=gt.listener,pe=gt.ha||gt.src;gt.fa&&_t(u.i,gt),U=jt.call(pe,w)!==!1&&U}}return U&&!w.defaultPrevented}function Ur(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=g(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(u,m||0)}function gi(u){u.g=Ur(()=>{u.g=null,u.i&&(u.i=!1,gi(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class wu extends V{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:gi(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ba(u){V.call(this),this.h=u,this.g={}}T(ba,V);var yi=[];function cn(u){Tt(u.g,function(m,v){this.g.hasOwnProperty(v)&&Xt(m)},u),u.g={}}ba.prototype.N=function(){ba.Z.N.call(this),cn(this)},ba.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=f.JSON.stringify,yn=f.JSON.parse,nf=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Su(){}function xu(){}var pr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vi(){N.call(this,"d")}T(vi,N);function er(){N.call(this,"c")}T(er,N);var $n={},bi=null;function bs(){return bi=bi||new ie}$n.Ia="serverreachability";function zo(u){N.call(this,$n.Ia,u)}T(zo,N);function _i(u){const m=bs();we(m,new zo(m))}$n.STAT_EVENT="statevent";function _s(u,m){N.call(this,$n.STAT_EVENT,u),this.stat=m}T(_s,N);function Ce(u){const m=bs();we(m,new _s(m,u))}$n.Ja="timingevent";function Ru(u,m){N.call(this,$n.Ja,u),this.size=m}T(Ru,N);function Ai(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Ei(){this.g=!0}Ei.prototype.ua=function(){this.g=!1};function Po(u,m,v,w,U,Y){u.info(function(){if(u.g)if(Y){var gt="",jt=Y.split("&");for(let ee=0;ee<jt.length;ee++){var pe=jt[ee].split("=");if(pe.length>1){const Ie=pe[0];pe=pe[1];const kn=Ie.split("_");gt=kn.length>=2&&kn[1]=="type"?gt+(Ie+"="+pe+"&"):gt+(Ie+"=redacted&")}}}else gt=null;else gt=Y;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+m+`
`+v+`
`+gt})}function Uo(u,m,v,w,U,Y,gt){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+m+`
`+v+`
`+Y+" "+gt})}function $r(u,m,v,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+gr(u,v)+(w?" "+w:"")})}function rf(u,m){u.info(function(){return"TIMEOUT: "+m})}Ei.prototype.info=function(){};function gr(u,m){if(!u.g)return m;if(!m)return null;try{const Y=JSON.parse(m);if(Y){for(u=0;u<Y.length;u++)if(Array.isArray(Y[u])){var v=Y[u];if(!(v.length<2)){var w=v[1];if(Array.isArray(w)&&!(w.length<1)){var U=w[0];if(U!="noop"&&U!="stop"&&U!="close")for(let gt=1;gt<w.length;gt++)w[gt]=""}}}}return Un(Y)}catch{return m}}var De={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},en={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hr;function _a(){}T(_a,Su),_a.prototype.g=function(){return new XMLHttpRequest},Hr=new _a;function Aa(u){return encodeURIComponent(String(u))}function af(u){var m=1;u=u.split(":");const v=[];for(;m>0&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function nr(u,m,v,w){this.j=u,this.i=m,this.l=v,this.S=w||1,this.V=new ba(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ti}function Ti(){this.i=null,this.g="",this.h=!1}var As={},yr={};function vr(u,m,v){u.M=1,u.A=Gr(Ae(m)),u.u=v,u.R=!0,wi(u,null)}function wi(u,m){u.F=Date.now(),Ea(u),u.B=Ae(u.A);var v=u.B,w=u.S;Array.isArray(w)||(w=[String(w)]),Iu(v.i,"t",w),u.C=0,v=u.j.L,u.h=new Ti,u.g=Is(u.j,v?m:null,!u.u),u.P>0&&(u.O=new wu(g(u.Y,u,u.g),u.P)),m=u.V,v=u.g,w=u.ba;var U="readystatechange";Array.isArray(U)||(U&&(yi[0]=U.toString()),U=yi);for(let Y=0;Y<U.length;Y++){const gt=ot(v,U[Y],w||m.handleEvent,!1,m.h||m);if(!gt)break;m.g[gt.key]=gt}m=u.J?W(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),_i(),Po(u.i,u.v,u.B,u.l,u.S,u.u)}nr.prototype.ba=function(u){u=u.target;const m=this.O;m&&hn(u)==3?m.j():this.Y(u)},nr.prototype.Y=function(u){try{if(u==this.g)t:{const jt=hn(this.g),pe=this.g.ya(),ee=this.g.ca();if(!(jt<3)&&(jt!=3||this.g&&(this.h.h||this.g.la()||Va(this.g)))){this.K||jt!=4||pe==7||(pe==8||ee<=0?_i(3):_i(2)),_r(this);var m=this.g.ca();this.X=m;var v=Si(this);if(this.o=m==200,Uo(this.i,this.v,this.B,this.l,this.S,jt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var w,U=this.g;if((w=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(w)){var Y=w;break e}}Y=null}if(u=Y)$r(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Es(this,u);else{this.o=!1,this.m=3,Ce(12),Ar(this),Ta(this);break t}}if(this.R){u=!0;let Ie;for(;!this.K&&this.C<v.length;)if(Ie=Cu(this,v),Ie==yr){jt==4&&(this.m=4,Ce(14),u=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==As){this.m=4,Ce(15),$r(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else $r(this.i,this.l,Ie,null),Es(this,Ie);if(ke(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),jt!=4||v.length!=0||this.h.h||(this.m=1,Ce(16),u=!1),this.o=this.o&&u,!u)$r(this.i,this.l,v,"[Invalid Chunked Response]"),Ar(this),Ta(this);else if(v.length>0&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.aa&&!gt.P&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Zo(gt),gt.P=!0,Ce(11))}}else $r(this.i,this.l,v,null),Es(this,v);jt==4&&Ar(this),this.o&&!this.K&&(jt==4?Wo(this.j,this):(this.o=!1,Ea(this)))}else Ma(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Ar(this),Ta(this)}}}catch{}finally{}};function Si(u){if(!ke(u))return u.g.la();const m=Va(u.g);if(m==="")return"";let v="";const w=m.length,U=hn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Ar(u),Ta(u),"";u.h.i=new f.TextDecoder}for(let Y=0;Y<w;Y++)u.h.h=!0,v+=u.h.i.decode(m[Y],{stream:!(U&&Y==w-1)});return m.length=0,u.h.g+=v,u.C=0,u.h.g}function ke(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Cu(u,m){var v=u.C,w=m.indexOf(`
`,v);return w==-1?yr:(v=Number(m.substring(v,w)),isNaN(v)?As:(w+=1,w+v>m.length?yr:(m=m.slice(w,w+v),u.C=w+v,m)))}nr.prototype.cancel=function(){this.K=!0,Ar(this)};function Ea(u){u.T=Date.now()+u.H,br(u,u.H)}function br(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Ai(g(u.aa,u),m)}function _r(u){u.D&&(f.clearTimeout(u.D),u.D=null)}nr.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(rf(this.i,this.B),this.M!=2&&(_i(),Ce(17)),Ar(this),this.m=2,Ta(this)):br(this,this.T-u)};function Ta(u){u.j.I==0||u.K||Wo(u.j,u)}function Ar(u){_r(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,cn(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Es(u,m){try{var v=u.j;if(v.I!=0&&(v.g==u||xa(v.h,u))){if(!u.L&&xa(v.h,u)&&v.I==3){try{var w=v.Ba.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)ks(v),Er(v);else break t;Xo(v),Ce(18)}}else v.xa=U[1],0<v.xa-v.K&&U[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=Ai(g(v.Va,v),6e3));Hn(v.h)<=1&&v.ta&&(v.ta=void 0)}else Yr(v,11)}else if((u.L||v.g==u)&&ks(v),!C(m))for(U=v.Ba.g.parse(m),m=0;m<U.length;m++){let ee=U[m];const Ie=ee[0];if(!(Ie<=v.K))if(v.K=Ie,ee=ee[1],v.I==2)if(ee[0]=="c"){v.M=ee[1],v.ba=ee[2];const kn=ee[3];kn!=null&&(v.ka=kn,v.j.info("VER="+v.ka));const Tr=ee[4];Tr!=null&&(v.za=Tr,v.j.info("SVER="+v.za));const ar=ee[5];ar!=null&&typeof ar=="number"&&ar>0&&(w=1.5*ar,v.O=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const sr=u.g;if(sr){const or=sr.g?sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(or){var Y=w.h;Y.g||or.indexOf("spdy")==-1&&or.indexOf("quic")==-1&&or.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Ts(Y,Y.h),Y.h=null))}if(w.G){const tl=sr.g?sr.g.getResponseHeader("X-HTTP-Session-Id"):null;tl&&(w.wa=tl,ae(w.J,w.G,tl))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),w=v;var gt=u;if(w.na=Pu(w,w.L?w.ba:null,w.W),gt.L){qr(w.h,gt);var jt=gt,pe=w.O;pe&&(jt.H=pe),jt.D&&(_r(jt),Ea(jt)),w.g=gt}else ju(w);v.i.length>0&&Ba(v)}else ee[0]!="stop"&&ee[0]!="close"||Yr(v,7);else v.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Yr(v,7):ja(v):ee[0]!="noop"&&v.l&&v.l.qa(ee),v.A=0)}}_i(4)}catch{}}var sf=class{constructor(u,m){this.g=u,this.map=m}};function wa(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Hn(u){return u.h?1:u.g?u.g.size:0}function xa(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ts(u,m){u.g?u.g.add(m):u.h=m}function qr(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}wa.prototype.cancel=function(){if(this.i=ws(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ws(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.G);return m}return M(u.i)}var Ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function of(u,m){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const w=u[v].indexOf("=");let U,Y=null;w>=0?(U=u[v].substring(0,w),Y=u[v].substring(w+1)):U=u[v],m(U,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function rr(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof rr?(this.l=u.l,xi(this,u.j),this.o=u.o,this.g=u.g,Ra(this,u.u),this.h=u.h,Ri(this,Nu(u.i)),this.m=u.m):u&&(m=String(u).match(Ss))?(this.l=!1,xi(this,m[1]||"",!0),this.o=Ca(m[2]||""),this.g=Ca(m[3]||"",!0),Ra(this,m[4]),this.h=Ca(m[5]||"",!0),Ri(this,m[6]||"",!0),this.m=Ca(m[7]||"")):(this.l=!1,this.i=new qn(null,this.l))}rr.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Qe(m,Ho,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Qe(m,Ho,!0),"@"),u.push(Aa(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Qe(v,v.charAt(0)=="/"?Ci:qo,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Qe(v,ku)),u.join("")},rr.prototype.resolve=function(u){const m=Ae(this);let v=!!u.j;v?xi(m,u.j):v=!!u.o,v?m.o=u.o:v=!!u.g,v?m.g=u.g:v=u.u!=null;var w=u.h;if(v)Ra(m,u.u);else if(v=!!u.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var U=m.h.lastIndexOf("/");U!=-1&&(w=m.h.slice(0,U+1)+w)}if(U=w,U==".."||U==".")w="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){w=U.lastIndexOf("/",0)==0,U=U.split("/");const Y=[];for(let gt=0;gt<U.length;){const jt=U[gt++];jt=="."?w&&gt==U.length&&Y.push(""):jt==".."?((Y.length>1||Y.length==1&&Y[0]!="")&&Y.pop(),w&&gt==U.length&&Y.push("")):(Y.push(jt),w=!0)}w=Y.join("/")}else w=U}return v?m.h=w:v=u.i.toString()!=="",v?Ri(m,Nu(u.i)):v=!!u.m,v&&(m.m=u.m),m};function Ae(u){return new rr(u)}function xi(u,m,v){u.j=v?Ca(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Ra(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function Ri(u,m,v){m instanceof qn?(u.i=m,Qo(u.i,u.l)):(v||(m=Qe(m,Du)),u.i=new qn(m,u.l))}function ae(u,m,v){u.i.set(m,v)}function Gr(u){return ae(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Ca(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qe(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,$o),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function $o(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ho=/[#\/\?@]/g,qo=/[#\?:]/g,Ci=/[#\?]/g,Du=/[#\?@]/g,ku=/#/g;function qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Fr(u){u.g||(u.g=new Map,u.h=0,u.i&&of(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=qn.prototype,n.add=function(u,m){Fr(this),this.i=null,u=ir(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Go(u,m){Fr(u),m=ir(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Fo(u,m){return Fr(u),m=ir(u,m),u.g.has(m)}n.forEach=function(u,m){Fr(this),this.g.forEach(function(v,w){v.forEach(function(U){u.call(m,U,w,this)},this)},this)};function xs(u,m){Fr(u);let v=[];if(typeof m=="string")Fo(u,m)&&(v=v.concat(u.g.get(ir(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)v=v.concat(u[m]);return v}n.set=function(u,m){return Fr(this),this.i=null,u=ir(this,u),Fo(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=xs(this,u),u.length>0?String(u[0]):m):m};function Iu(u,m,v){Go(u,m),v.length>0&&(u.i=null,u.g.set(ir(u,m),M(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let w=0;w<m.length;w++){var v=m[w];const U=Aa(v);v=xs(this,v);for(let Y=0;Y<v.length;Y++){let gt=U;v[Y]!==""&&(gt+="="+Aa(v[Y])),u.push(gt)}}return this.i=u.join("&")};function Nu(u){const m=new qn;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function ir(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Qo(u,m){m&&!u.j&&(Fr(u),u.i=null,u.g.forEach(function(v,w){const U=w.toLowerCase();w!=U&&(Go(this,w),Iu(this,U,v))},u)),u.j=m}function Yo(u,m){const v=new Ei;if(f.Image){const w=new Image;w.onload=_(vn,v,"TestLoadImage: loaded",!0,m,w),w.onerror=_(vn,v,"TestLoadImage: error",!1,m,w),w.onabort=_(vn,v,"TestLoadImage: abort",!1,m,w),w.ontimeout=_(vn,v,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Di(u,m){const v=new Ei,w=new AbortController,U=setTimeout(()=>{w.abort(),vn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(Y=>{clearTimeout(U),Y.ok?vn(v,"TestPingServer: ok",!0,m):vn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),vn(v,"TestPingServer: error",!1,m)})}function vn(u,m,v,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(v)}catch{}}function Vu(){this.g=new nf}function Da(u){this.i=u.Sb||null,this.h=u.ab||!1}T(Da,Su),Da.prototype.g=function(){return new ka(this.i,this.h)};function ka(u,m){ie.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(ka,ie),n=ka.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Qr(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ki(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function ki(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?bn(this):Qr(this),this.readyState==3&&ki(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Na=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Qr(u)}n.setRequestHeader=function(u,m){this.A.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Qr(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ii(u){let m="";return Tt(u,function(v,w){m+=w,m+=":",m+=v,m+=`\r
`}),m}function Gn(u,m,v){t:{for(w in v){var w=!1;break t}w=!0}w||(v=Ii(v),typeof u=="string"?v!=null&&Aa(v):ae(u,m,v))}function he(u){ie.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(he,ie);var Rs=/^https?$/i,Mu=["POST","PUT"];n=he.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,m,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hr.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(Y){Ia(this,Y);return}if(u=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)v.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Y of w.keys())v.set(Y,w.get(Y));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(Array.prototype.indexOf.call(Mu,m,void 0)>=0)||w||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,gt]of v)this.g.setRequestHeader(Y,gt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(Y){Ia(this,Y)}};function Ia(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,Na(u),$e(u)}function Na(u){u.A||(u.A=!0,we(u,"complete"),we(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,we(this,"complete"),we(this,"abort"),$e(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$e(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ko(this):this.Xa())},n.Xa=function(){Ko(this)};function Ko(u){if(u.h&&typeof c<"u"){if(u.v&&hn(u)==4)setTimeout(u.Ca.bind(u),0);else if(we(u,"readystatechange"),hn(u)==4){u.h=!1;try{const Y=u.ca();t:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var w;if(w=Y===0){let gt=String(u.D).match(Ss)[1]||null;!gt&&f.self&&f.self.location&&(gt=f.self.location.protocol.slice(0,-1)),w=!Rs.test(gt?gt.toLowerCase():"")}v=w}if(v)we(u,"complete"),we(u,"success");else{u.o=6;try{var U=hn(u)>2?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.ca()+"]",Na(u)}}finally{$e(u)}}}}function $e(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,m||we(u,"ready");try{v.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function hn(u){return u.g?u.g.readyState:0}n.ca=function(){try{return hn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),yn(m)}};function Va(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ma(u){const m={};u=(u.g&&hn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(C(u[w]))continue;var v=af(u[w]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=m[U]||[];m[U]=Y,Y.push(v)}I(m,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oa(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Cs(u){this.za=0,this.i=[],this.j=new Ei,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oa("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oa("baseRetryDelayMs",5e3,u),this.Za=Oa("retryDelaySeedMs",1e4,u),this.Ta=Oa("forwardChannelMaxRetries",2,u),this.va=Oa("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new wa(u&&u.concurrentRequestLimit),this.Ba=new Vu,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Cs.prototype,n.ka=8,n.I=1,n.connect=function(u,m,v,w){Ce(0),this.W=u,this.H=m||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.J=Pu(this,null,this.W),Ba(this)};function ja(u){if(La(u),u.I==3){var m=u.V++,v=Ae(u.J);if(ae(v,"SID",u.M),ae(v,"RID",m),ae(v,"TYPE","terminate"),za(u,v),m=new nr(u,u.j,m),m.M=2,m.A=Gr(Ae(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=Is(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Ea(m)}zu(u)}function Er(u){u.g&&(Zo(u),u.g.cancel(),u.g=null)}function La(u){Er(u),u.v&&(f.clearTimeout(u.v),u.v=null),ks(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&f.clearTimeout(u.m),u.m=null)}function Ba(u){if(!Sa(u.h)&&!u.m){u.m=!0;var m=u.Ea;st||x(),ut||(st(),ut=!0),R.add(m,u),u.D=0}}function lf(u,m){return Hn(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Ai(g(u.Ea,u,m),Bu(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const U=new nr(this,this.j,u);let Y=this.o;if(this.U&&(Y?(Y=W(Y),tt(Y,this.U)):Y=this.U),this.u!==null||this.R||(U.J=Y,Y=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(m+=w,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=Ds(this,U,m),v=Ae(this.J),ae(v,"RID",u),ae(v,"CVER",22),this.G&&ae(v,"X-HTTP-Session-Id",this.G),za(this,v),Y&&(this.R?m="headers="+Aa(Ii(Y))+"&"+m:this.u&&Gn(v,this.u,Y)),Ts(this.h,U),this.Ra&&ae(v,"TYPE","init"),this.S?(ae(v,"$req",m),ae(v,"SID","null"),U.U=!0,vr(U,v,null)):vr(U,v,m),this.I=2}}else this.I==3&&(u?Ou(this,u):this.i.length==0||Sa(this.h)||Ou(this))};function Ou(u,m){var v;m?v=m.l:v=u.V++;const w=Ae(u.J);ae(w,"SID",u.M),ae(w,"RID",v),ae(w,"AID",u.K),za(u,w),u.u&&u.o&&Gn(w,u.u,u.o),v=new nr(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),m&&(u.i=m.G.concat(u.i)),m=Ds(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ts(u.h,v),vr(v,w,m)}function za(u,m){u.H&&Tt(u.H,function(v,w){ae(m,w,v)}),u.l&&Tt({},function(v,w){ae(m,w,v)})}function Ds(u,m,v){v=Math.min(u.i.length,v);const w=u.l?g(u.l.Ka,u.l,u):null;t:{var U=u.i;let jt=-1;for(;;){const pe=["count="+v];jt==-1?v>0?(jt=U[0].g,pe.push("ofs="+jt)):jt=0:pe.push("ofs="+jt);let ee=!0;for(let Ie=0;Ie<v;Ie++){var Y=U[Ie].g;const kn=U[Ie].map;if(Y-=jt,Y<0)jt=Math.max(0,U[Ie].g-100),ee=!1;else try{Y="req"+Y+"_"||"";try{var gt=kn instanceof Map?kn:Object.entries(kn);for(const[Tr,ar]of gt){let sr=ar;p(ar)&&(sr=Un(ar)),pe.push(Y+Tr+"="+encodeURIComponent(sr))}}catch(Tr){throw pe.push(Y+"type="+encodeURIComponent("_badmap")),Tr}}catch{w&&w(kn)}}if(ee){gt=pe.join("&");break t}}gt=void 0}return u=u.i.splice(0,v),m.G=u,gt}function ju(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;st||x(),ut||(st(),ut=!0),R.add(m,u),u.A=0}}function Xo(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Ai(g(u.Da,u),Bu(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,Lu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Ai(g(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),Er(this),Lu(this))};function Zo(u){u.B!=null&&(f.clearTimeout(u.B),u.B=null)}function Lu(u){u.g=new nr(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=Ae(u.na);ae(m,"RID","rpc"),ae(m,"SID",u.M),ae(m,"AID",u.K),ae(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&ae(m,"TO",u.ia),ae(m,"TYPE","xmlhttp"),za(u,m),u.u&&u.o&&Gn(m,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=Gr(Ae(m)),v.u=null,v.R=!0,wi(v,u)}n.Va=function(){this.C!=null&&(this.C=null,Er(this),Xo(this),Ce(19))};function ks(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Wo(u,m){var v=null;if(u.g==m){ks(u),Zo(u),u.g=null;var w=2}else if(xa(u.h,m))v=m.G,qr(u.h,m),w=1;else return;if(u.I!=0){if(m.o)if(w==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var U=u.D;w=bs(),we(w,new Ru(w,v)),Ba(u)}else ju(u);else if(U=m.m,U==3||U==0&&m.X>0||!(w==1&&lf(u,m)||w==2&&Xo(u)))switch(v&&v.length>0&&(m=u.h,m.i=m.i.concat(v)),U){case 1:Yr(u,5);break;case 4:Yr(u,10);break;case 3:Yr(u,6);break;default:Yr(u,2)}}}function Bu(u,m){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*m}function Yr(u,m){if(u.j.info("Error code "+m),m==2){var v=g(u.bb,u),w=u.Ua;const U=!w;w=new rr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||xi(w,"https"),Gr(w),U?Yo(w.toString(),v):Di(w.toString(),v)}else Ce(2);u.I=0,u.l&&u.l.pa(m),zu(u),La(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function zu(u){if(u.I=0,u.ja=[],u.l){const m=ws(u.h);(m.length!=0||u.i.length!=0)&&(G(u.ja,m),G(u.ja,u.i),u.h.i.length=0,M(u.i),u.i.length=0),u.l.oa()}}function Pu(u,m,v){var w=v instanceof rr?Ae(v):new rr(v);if(w.g!="")m&&(w.g=m+"."+w.g),Ra(w,w.u);else{var U=f.location;w=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;const Y=new rr(null);w&&xi(Y,w),m&&(Y.g=m),U&&Ra(Y,U),v&&(Y.h=v),w=Y}return v=u.G,m=u.wa,v&&m&&ae(w,v,m),ae(w,"VER",u.ka),za(u,w),w}function Is(u,m,v){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new he(new Da({ab:v})):new he(u.ma),m.Fa(u.L),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}n=Uu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ns(){}Ns.prototype.g=function(u,m){return new _n(u,m)};function _n(u,m){ie.call(this),this.g=new Cs(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!C(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!C(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Ni(this)}T(_n,ie),_n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){ja(this.g)},_n.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=Un(u),u=v);m.i.push(new sf(m.Ya++,u)),m.I==3&&Ba(m)},_n.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,_n.Z.N.call(this)};function Jo(u){vi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const v in m){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}T(Jo,vi);function $u(){er.call(this),this.status=1}T($u,er);function Ni(u){this.g=u}T(Ni,Uu),Ni.prototype.ra=function(){we(this.g,"a")},Ni.prototype.qa=function(u){we(this.g,new Jo(u))},Ni.prototype.pa=function(u){we(this.g,new $u)},Ni.prototype.oa=function(){we(this.g,"b")},Ns.prototype.createWebChannel=Ns.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,Z_=function(){return new Ns},X_=function(){return bs()},K_=$n,Mm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,ih=De,en.COMPLETE="complete",Y_=en,xu.EventType=pr,pr.OPEN="a",pr.CLOSE="b",pr.ERROR="c",pr.MESSAGE="d",ie.prototype.listen=ie.prototype.J,Gl=xu,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,Q_=he}).apply(typeof Gc<"u"?Gc:typeof self<"u"?self:typeof window<"u"?window:{});const Zv="@firebase/firestore",Wv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pn.UNAUTHENTICATED=new pn(null),pn.GOOGLE_CREDENTIALS=new pn("google-credentials-uid"),pn.FIRST_PARTY=new pn("first-party-uid"),pn.MOCK_USER=new pn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new P_("@firebase/firestore");function uo(){return ds.logLevel}function At(n,...t){if(ds.logLevel<=Kt.DEBUG){const i=t.map(hp);ds.debug(`Firestore (${Mo}): ${n}`,...i)}}function di(n,...t){if(ds.logLevel<=Kt.ERROR){const i=t.map(hp);ds.error(`Firestore (${Mo}): ${n}`,...i)}}function wo(n,...t){if(ds.logLevel<=Kt.WARN){const i=t.map(hp);ds.warn(`Firestore (${Mo}): ${n}`,...i)}}function hp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,W_(n,a,i)}function W_(n,t,i){let a=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw di(a),new Error(a)}function te(n,t,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,n||W_(t,l,a)}function Lt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yt extends Vo{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ax{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(pn.UNAUTHENTICATED))}shutdown(){}}class Ex{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Tx{constructor(t){this.t=t,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){te(this.o===void 0,42304);let a=this.i;const l=y=>this.i!==a?(a=this.i,i(y)):Promise.resolve();let c=new sa;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new sa,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const y=c;t.enqueueRetryable(async()=>{await y.promise,await l(this.currentUser)})},p=y=>{At("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(y=>p(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(At("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new sa)}},0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==t?(At("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(te(typeof a.accessToken=="string",31837,{l:a}),new J_(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return te(t===null||typeof t=="string",2055,{h:t}),new pn(t)}}class wx{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sx{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new wx(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable(()=>i(pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xx{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ix(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){te(this.o===void 0,3512);const a=c=>{c.error!=null&&At("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,At("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>a(c))};const l=c=>{At("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):At("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(te(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Jv(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=Rx(40);for(let c=0;c<l.length;++c)a.length<20&&l[c]<i&&(a+=t.charAt(l[c]%62))}return a}}function Gt(n,t){return n<t?-1:n>t?1:0}function Om(n,t){const i=Math.min(n.length,t.length);for(let a=0;a<i;a++){const l=n.charAt(a),c=t.charAt(a);if(l!==c)return dm(l)===dm(c)?Gt(l,c):dm(l)?1:-1}return Gt(n.length,t.length)}const Cx=55296,Dx=57343;function dm(n){const t=n.charCodeAt(0);return t>=Cx&&t<=Dx}function So(n,t,i){return n.length===t.length&&n.every((a,l)=>i(a,t[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="__name__";class Dr{constructor(t,i,a){i===void 0?i=0:i>t.length&&Dt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&Dt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return Dr.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Dr?t.forEach(a=>{i.push(a)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const c=Dr.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return Gt(t.length,i.length)}static compareSegments(t,i){const a=Dr.isNumericId(t),l=Dr.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?Dr.extractNumericId(t).compare(Dr.extractNumericId(i)):Om(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return aa.fromString(t.substring(4,t.length-2))}}class de extends Dr{construct(t,i,a){return new de(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new yt(rt.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new de(i)}static emptyPath(){return new de([])}}const kx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends Dr{construct(t,i,a){return new on(t,i,a)}static isValidIdentifier(t){return kx.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tb}static keyField(){return new on([tb])}static fromServerFormat(t){const i=[];let a="",l=0;const c=()=>{if(a.length===0)throw new yt(rt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let f=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new yt(rt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new yt(rt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=y,l+=2}else p==="`"?(f=!f,l++):p!=="."||f?(a+=p,l++):(c(),l++)}if(c(),f)throw new yt(rt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new on(i)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.path=t}static fromPath(t){return new St(de.fromString(t))}static fromName(t){return new St(de.fromString(t).popFirst(5))}static empty(){return new St(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&de.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return de.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new St(new de(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(n,t,i){if(!i)throw new yt(rt.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ix(n,t,i,a){if(t===!0&&a===!0)throw new yt(rt.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function eb(n){if(!St.isDocumentKey(n))throw new yt(rt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nb(n){if(St.isDocumentKey(n))throw new yt(rt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function eA(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Dt(12329,{type:typeof n})}function hi(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new yt(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Bh(n);throw new yt(rt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,t){const i={typeString:n};return t&&(i.value=t),i}function yu(n,t){if(!eA(n))throw new yt(rt.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const l=t[a].typeString,c="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const f=n[a];if(l&&typeof f!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(c!==void 0&&f!==c.value){i=`Expected '${a}' field to equal '${c.value}'`;break}}if(i)throw new yt(rt.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=-62135596800,ib=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(t){return me.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*ib);return new me(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new yt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new yt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<rb)throw new yt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new yt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ib}_compareTo(t){return this.seconds===t.seconds?Gt(this.nanoseconds,t.nanoseconds):Gt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(yu(t,me._jsonSchema))return new me(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-rb;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Pe("string",me._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{static fromTimestamp(t){return new Vt(t)}static min(){return new Vt(new me(0,0))}static max(){return new Vt(new me(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=-1;function Nx(n,t){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,l=Vt.fromTimestamp(a===1e9?new me(i+1,0):new me(i,a));return new ua(l,St.empty(),t)}function Vx(n){return new ua(n.readTime,n.key,lu)}class ua{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new ua(Vt.min(),St.empty(),lu)}static max(){return new ua(Vt.max(),St.empty(),lu)}}function Mx(n,t){let i=n.readTime.compareTo(t.readTime);return i!==0?i:(i=St.comparator(n.documentKey,t.documentKey),i!==0?i:Gt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n){if(n.code!==rt.FAILED_PRECONDITION||n.message!==Ox)throw n;At("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&Dt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new at((a,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(a,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(a,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof at?i:at.resolve(i)}catch(i){return at.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):at.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):at.reject(i)}static resolve(t){return new at((i,a)=>{i(t)})}static reject(t){return new at((i,a)=>{a(t)})}static waitFor(t){return new at((i,a)=>{let l=0,c=0,f=!1;t.forEach(p=>{++l,p.next(()=>{++c,f&&c===l&&i()},y=>a(y))}),f=!0,c===l&&i()})}static or(t){let i=at.resolve(!1);for(const a of t)i=i.next(l=>l?at.resolve(l):a());return i}static forEach(t,i){const a=[];return t.forEach((l,c)=>{a.push(i.call(this,l,c))}),this.waitFor(a)}static mapArray(t,i){return new at((a,l)=>{const c=t.length,f=new Array(c);let p=0;for(let y=0;y<c;y++){const g=y;i(t[g]).next(_=>{f[g]=_,++p,p===c&&a(f)},_=>l(_))}})}static doWhile(t,i){return new at((a,l)=>{const c=()=>{t()===!0?i().next(()=>{c()},l):a()};c()})}}function Lx(n){const t=n.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function jo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}zh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=-1;function Ph(n){return n==null}function vh(n){return n===0&&1/n==-1/0}function Bx(n){return typeof n=="number"&&Number.isInteger(n)&&!vh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="";function zx(n){let t="";for(let i=0;i<n.length;i++)t.length>0&&(t=ab(t)),t=Px(n.get(i),t);return ab(t)}function Px(n,t){let i=t;const a=n.length;for(let l=0;l<a;l++){const c=n.charAt(l);switch(c){case"\0":i+="";break;case nA:i+="";break;default:i+=c}}return i}function ab(n){return n+nA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(n){let t=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t++;return t}function ya(n,t){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t(i,n[i])}function rA(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,i){this.comparator=t,this.root=i||sn.EMPTY}insert(t,i){return new Te(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,sn.BLACK,null,null))}remove(t){return new Te(this.comparator,this.root.remove(t,this.comparator).copy(null,null,sn.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,a)=>(t(i,a),!1))}toString(){const t=[];return this.inorderTraversal((i,a)=>(t.push(`${i}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fc(this.root,t,this.comparator,!0)}}class Fc{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?a(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class sn{constructor(t,i,a,l,c){this.key=t,this.value=i,this.color=a??sn.RED,this.left=l??sn.EMPTY,this.right=c??sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,c){return new sn(t??this.key,i??this.value,a??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const c=a(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,a),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return sn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return sn.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Dt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Dt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Dt(27949);return t+(this.isRed()?0:1)}}sn.EMPTY=null,sn.RED=!0,sn.BLACK=!1;sn.EMPTY=new class{constructor(){this.size=0}get key(){throw Dt(57766)}get value(){throw Dt(16141)}get color(){throw Dt(16727)}get left(){throw Dt(29726)}get right(){throw Dt(36894)}copy(t,i,a,l,c){return this}insert(t,i,a){return new sn(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.comparator=t,this.data=new Te(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,a)=>(t(i),!1))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new ob(this.data.getIterator())}getIteratorFrom(t){return new ob(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(a=>{i=i.add(a)}),i}isEqual(t){if(!(t instanceof Ge)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new Ge(this.comparator);return i.data=t,i}}class ob{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this.fields=t,t.sort(on.comparator)}static empty(){return new zn([])}unionWith(t){let i=new Ge(on.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new zn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return So(this.fields,t.fields,(i,a)=>i.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new iA("Invalid base64 string: "+c):c}}(t);return new un(i)}static fromUint8Array(t){const i=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new un(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Gt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}un.EMPTY_BYTE_STRING=new un("");const Ux=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ca(n){if(te(!!n,39018),typeof n=="string"){let t=0;const i=Ux.exec(n);if(te(!!i,46558,{timestamp:n}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ha(n){return typeof n=="string"?un.fromBase64String(n):un.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="server_timestamp",sA="__type__",oA="__previous_value__",lA="__local_write_time__";function mp(n){var i,a;return((a=(((i=n==null?void 0:n.mapValue)==null?void 0:i.fields)||{})[sA])==null?void 0:a.stringValue)===aA}function Uh(n){const t=n.mapValue.fields[oA];return mp(t)?Uh(t):t}function uu(n){const t=ca(n.mapValue.fields[lA].timestampValue);return new me(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(t,i,a,l,c,f,p,y,g,_){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=g,this.isUsingEmulator=_}}const bh="(default)";class cu{constructor(t,i){this.projectId=t,this.database=i||bh}static empty(){return new cu("","")}get isDefaultDatabase(){return this.database===bh}isEqual(t){return t instanceof cu&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="__type__",Hx="__max__",Qc={mapValue:{}},cA="__vector__",_h="value";function fa(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mp(n)?4:Gx(n)?9007199254740991:qx(n)?10:11:Dt(28295,{value:n})}function Br(n,t){if(n===t)return!0;const i=fa(n);if(i!==fa(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return uu(n).isEqual(uu(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=ca(l.timestampValue),p=ca(c.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(l,c){return ha(l.bytesValue).isEqual(ha(c.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(l,c){return Me(l.geoPointValue.latitude)===Me(c.geoPointValue.latitude)&&Me(l.geoPointValue.longitude)===Me(c.geoPointValue.longitude)}(n,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return Me(l.integerValue)===Me(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=Me(l.doubleValue),p=Me(c.doubleValue);return f===p?vh(f)===vh(p):isNaN(f)&&isNaN(p)}return!1}(n,t);case 9:return So(n.arrayValue.values||[],t.arrayValue.values||[],Br);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},p=c.mapValue.fields||{};if(sb(f)!==sb(p))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(p[y]===void 0||!Br(f[y],p[y])))return!1;return!0}(n,t);default:return Dt(52216,{left:n})}}function hu(n,t){return(n.values||[]).find(i=>Br(i,t))!==void 0}function xo(n,t){if(n===t)return 0;const i=fa(n),a=fa(t);if(i!==a)return Gt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Gt(n.booleanValue,t.booleanValue);case 2:return function(c,f){const p=Me(c.integerValue||c.doubleValue),y=Me(f.integerValue||f.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1}(n,t);case 3:return lb(n.timestampValue,t.timestampValue);case 4:return lb(uu(n),uu(t));case 5:return Om(n.stringValue,t.stringValue);case 6:return function(c,f){const p=ha(c),y=ha(f);return p.compareTo(y)}(n.bytesValue,t.bytesValue);case 7:return function(c,f){const p=c.split("/"),y=f.split("/");for(let g=0;g<p.length&&g<y.length;g++){const _=Gt(p[g],y[g]);if(_!==0)return _}return Gt(p.length,y.length)}(n.referenceValue,t.referenceValue);case 8:return function(c,f){const p=Gt(Me(c.latitude),Me(f.latitude));return p!==0?p:Gt(Me(c.longitude),Me(f.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ub(n.arrayValue,t.arrayValue);case 10:return function(c,f){var S,M,G,K;const p=c.fields||{},y=f.fields||{},g=(S=p[_h])==null?void 0:S.arrayValue,_=(M=y[_h])==null?void 0:M.arrayValue,T=Gt(((G=g==null?void 0:g.values)==null?void 0:G.length)||0,((K=_==null?void 0:_.values)==null?void 0:K.length)||0);return T!==0?T:ub(g,_)}(n.mapValue,t.mapValue);case 11:return function(c,f){if(c===Qc.mapValue&&f===Qc.mapValue)return 0;if(c===Qc.mapValue)return 1;if(f===Qc.mapValue)return-1;const p=c.fields||{},y=Object.keys(p),g=f.fields||{},_=Object.keys(g);y.sort(),_.sort();for(let T=0;T<y.length&&T<_.length;++T){const S=Om(y[T],_[T]);if(S!==0)return S;const M=xo(p[y[T]],g[_[T]]);if(M!==0)return M}return Gt(y.length,_.length)}(n.mapValue,t.mapValue);default:throw Dt(23264,{he:i})}}function lb(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Gt(n,t);const i=ca(n),a=ca(t),l=Gt(i.seconds,a.seconds);return l!==0?l:Gt(i.nanos,a.nanos)}function ub(n,t){const i=n.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const c=xo(i[l],a[l]);if(c)return c}return Gt(i.length,a.length)}function Ro(n){return jm(n)}function jm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const a=ca(i);return`time(${a.seconds},${a.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(i){return ha(i).toBase64()}(n.bytesValue):"referenceValue"in n?function(i){return St.fromName(i).toString()}(n.referenceValue):"geoPointValue"in n?function(i){return`geo(${i.latitude},${i.longitude})`}(n.geoPointValue):"arrayValue"in n?function(i){let a="[",l=!0;for(const c of i.values||[])l?l=!1:a+=",",a+=jm(c);return a+"]"}(n.arrayValue):"mapValue"in n?function(i){const a=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const f of a)c?c=!1:l+=",",l+=`${f}:${jm(i.fields[f])}`;return l+"}"}(n.mapValue):Dt(61005,{value:n})}function ah(n){switch(fa(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Uh(n);return t?16+ah(t):16;case 5:return 2*n.stringValue.length;case 6:return ha(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,c)=>l+ah(c),0)}(n.arrayValue);case 10:case 11:return function(a){let l=0;return ya(a.fields,(c,f)=>{l+=c.length+ah(f)}),l}(n.mapValue);default:throw Dt(13486,{value:n})}}function cb(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Lm(n){return!!n&&"integerValue"in n}function pp(n){return!!n&&"arrayValue"in n}function hb(n){return!!n&&"nullValue"in n}function fb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sh(n){return!!n&&"mapValue"in n}function qx(n){var i,a;return((a=(((i=n==null?void 0:n.mapValue)==null?void 0:i.fields)||{})[uA])==null?void 0:a.stringValue)===cA}function Jl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return ya(n.mapValue.fields,(i,a)=>t.mapValue.fields[i]=Jl(a)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Jl(n.arrayValue.values[i]);return t}return{...n}}function Gx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.value=t}static empty(){return new Cn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!sh(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Jl(i)}setAll(t){let i=on.emptyPath(),a={},l=[];t.forEach((f,p)=>{if(!i.isImmediateParentOf(p)){const y=this.getFieldsMap(i);this.applyChanges(y,a,l),a={},l=[],i=p.popLast()}f?a[p.lastSegment()]=Jl(f):l.push(p.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,a,l)}delete(t){const i=this.field(t.popLast());sh(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Br(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];sh(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){ya(i,(l,c)=>t[l]=c);for(const l of a)delete t[l]}clone(){return new Cn(Jl(this.value))}}function hA(n){const t=[];return ya(n.fields,(i,a)=>{const l=new on([i]);if(sh(a)){const c=hA(a.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new zn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,i,a,l,c,f,p){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=c,this.data=f,this.documentState=p}static newInvalidDocument(t){return new gn(t,0,Vt.min(),Vt.min(),Vt.min(),Cn.empty(),0)}static newFoundDocument(t,i,a,l){return new gn(t,1,i,Vt.min(),a,l,0)}static newNoDocument(t,i){return new gn(t,2,i,Vt.min(),Vt.min(),Cn.empty(),0)}static newUnknownDocument(t,i){return new gn(t,3,i,Vt.min(),Vt.min(),Cn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Vt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Vt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,i){this.position=t,this.inclusive=i}}function db(n,t,i){let a=0;for(let l=0;l<n.position.length;l++){const c=t[l],f=n.position[l];if(c.field.isKeyField()?a=St.comparator(St.fromName(f.referenceValue),i.key):a=xo(f,i.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function mb(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Br(n.position[i],t.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,i="asc"){this.field=t,this.dir=i}}function Fx(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fA=class{};class ze extends fA{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new Yx(t,i,a):i==="array-contains"?new Zx(t,a):i==="in"?new Wx(t,a):i==="not-in"?new Jx(t,a):i==="array-contains-any"?new tR(t,a):new ze(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new Kx(t,a):new Xx(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(xo(i,this.value)):i!==null&&fa(this.value)===fa(i)&&this.matchesComparison(xo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Dt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fr extends fA{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new fr(t,i)}matches(t){return dA(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function dA(n){return n.op==="and"}function mA(n){return Qx(n)&&dA(n)}function Qx(n){for(const t of n.filters)if(t instanceof fr)return!1;return!0}function Bm(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+Ro(n.value);if(mA(n))return n.filters.map(t=>Bm(t)).join(",");{const t=n.filters.map(i=>Bm(i)).join(",");return`${n.op}(${t})`}}function pA(n,t){return n instanceof ze?function(a,l){return l instanceof ze&&a.op===l.op&&a.field.isEqual(l.field)&&Br(a.value,l.value)}(n,t):n instanceof fr?function(a,l){return l instanceof fr&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((c,f,p)=>c&&pA(f,l.filters[p]),!0):!1}(n,t):void Dt(19439)}function gA(n){return n instanceof ze?function(i){return`${i.field.canonicalString()} ${i.op} ${Ro(i.value)}`}(n):n instanceof fr?function(i){return i.op.toString()+" {"+i.getFilters().map(gA).join(" ,")+"}"}(n):"Filter"}class Yx extends ze{constructor(t,i,a){super(t,i,a),this.key=St.fromName(a.referenceValue)}matches(t){const i=St.comparator(t.key,this.key);return this.matchesComparison(i)}}class Kx extends ze{constructor(t,i){super(t,"in",i),this.keys=yA("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class Xx extends ze{constructor(t,i){super(t,"not-in",i),this.keys=yA("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function yA(n,t){var i;return(((i=t.arrayValue)==null?void 0:i.values)||[]).map(a=>St.fromName(a.referenceValue))}class Zx extends ze{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return pp(i)&&hu(i.arrayValue,this.value)}}class Wx extends ze{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&hu(this.value.arrayValue,i)}}class Jx extends ze{constructor(t,i){super(t,"not-in",i)}matches(t){if(hu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!hu(this.value.arrayValue,i)}}class tR extends ze{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!pp(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>hu(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(t,i=null,a=[],l=[],c=null,f=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=c,this.startAt=f,this.endAt=p,this.Te=null}}function pb(n,t=null,i=[],a=[],l=null,c=null,f=null){return new eR(n,t,i,a,l,c,f)}function gp(n){const t=Lt(n);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(a=>Bm(a)).join(","),i+="|ob:",i+=t.orderBy.map(a=>function(c){return c.field.canonicalString()+c.dir}(a)).join(","),Ph(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>Ro(a)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>Ro(a)).join(",")),t.Te=i}return t.Te}function yp(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!Fx(n.orderBy[i],t.orderBy[i]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!pA(n.filters[i],t.filters[i]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!mb(n.startAt,t.startAt)&&mb(n.endAt,t.endAt)}function zm(n){return St.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,i=null,a=[],l=[],c=null,f="F",p=null,y=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function nR(n,t,i,a,l,c,f,p){return new Lo(n,t,i,a,l,c,f,p)}function vp(n){return new Lo(n)}function gb(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vA(n){return n.collectionGroup!==null}function tu(n){const t=Lt(n);if(t.Ie===null){t.Ie=[];const i=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),i.add(c.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Ge(on.comparator);return f.filters.forEach(y=>{y.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(t).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new fu(c,a))}),i.has(on.keyField().canonicalString())||t.Ie.push(new fu(on.keyField(),a))}return t.Ie}function Nr(n){const t=Lt(n);return t.Ee||(t.Ee=rR(t,tu(n))),t.Ee}function rR(n,t){if(n.limitType==="F")return pb(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new fu(l.field,c)});const i=n.endAt?new Ah(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Ah(n.startAt.position,n.startAt.inclusive):null;return pb(n.path,n.collectionGroup,t,n.filters,n.limit,i,a)}}function Pm(n,t){const i=n.filters.concat([t]);return new Lo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function Eh(n,t,i){return new Lo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,i,n.startAt,n.endAt)}function $h(n,t){return yp(Nr(n),Nr(t))&&n.limitType===t.limitType}function bA(n){return`${gp(Nr(n))}|lt:${n.limitType}`}function co(n){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(l=>gA(l)).join(", ")}]`),Ph(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(l=>Ro(l)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(l=>Ro(l)).join(",")),`Target(${a})`}(Nr(n))}; limitType=${n.limitType})`}function Hh(n,t){return t.isFoundDocument()&&function(a,l){const c=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):St.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(n,t)&&function(a,l){for(const c of tu(a))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(n,t)&&function(a,l){for(const c of a.filters)if(!c.matches(l))return!1;return!0}(n,t)&&function(a,l){return!(a.startAt&&!function(f,p,y){const g=db(f,p,y);return f.inclusive?g<=0:g<0}(a.startAt,tu(a),l)||a.endAt&&!function(f,p,y){const g=db(f,p,y);return f.inclusive?g>=0:g>0}(a.endAt,tu(a),l))}(n,t)}function iR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _A(n){return(t,i)=>{let a=!1;for(const l of tu(n)){const c=aR(l,t,i);if(c!==0)return c;a=a||l.field.isKeyField()}return 0}}function aR(n,t,i){const a=n.field.isKeyField()?St.comparator(t.key,i.key):function(c,f,p){const y=f.data.field(c),g=p.data.field(c);return y!==null&&g!==null?xo(y,g):Dt(42886)}(n.field,t,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return Dt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,c]of a)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){ya(this.inner,(i,a)=>{for(const[l,c]of a)t(l,c)})}isEmpty(){return rA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new Te(St.comparator);function mi(){return sR}const AA=new Te(St.comparator);function Fl(...n){let t=AA;for(const i of n)t=t.insert(i.key,i);return t}function EA(n){let t=AA;return n.forEach((i,a)=>t=t.insert(i,a.overlayedDocument)),t}function ss(){return eu()}function TA(){return eu()}function eu(){return new gs(n=>n.toString(),(n,t)=>n.isEqual(t))}const oR=new Te(St.comparator),lR=new Ge(St.comparator);function Ft(...n){let t=lR;for(const i of n)t=t.add(i);return t}const uR=new Ge(Gt);function cR(){return uR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vh(t)?"-0":t}}function wA(n){return{integerValue:""+n}}function hR(n,t){return Bx(t)?wA(t):bp(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this._=void 0}}function fR(n,t,i){return n instanceof du?function(l,c){const f={fields:{[sA]:{stringValue:aA},[lA]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&mp(c)&&(c=Uh(c)),c&&(f.fields[oA]=c),{mapValue:f}}(i,t):n instanceof mu?xA(n,t):n instanceof pu?RA(n,t):function(l,c){const f=SA(l,c),p=yb(f)+yb(l.Ae);return Lm(f)&&Lm(l.Ae)?wA(p):bp(l.serializer,p)}(n,t)}function dR(n,t,i){return n instanceof mu?xA(n,t):n instanceof pu?RA(n,t):i}function SA(n,t){return n instanceof Th?function(a){return Lm(a)||function(c){return!!c&&"doubleValue"in c}(a)}(t)?t:{integerValue:0}:null}class du extends qh{}class mu extends qh{constructor(t){super(),this.elements=t}}function xA(n,t){const i=CA(t);for(const a of n.elements)i.some(l=>Br(l,a))||i.push(a);return{arrayValue:{values:i}}}class pu extends qh{constructor(t){super(),this.elements=t}}function RA(n,t){let i=CA(t);for(const a of n.elements)i=i.filter(l=>!Br(l,a));return{arrayValue:{values:i}}}class Th extends qh{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function yb(n){return Me(n.integerValue||n.doubleValue)}function CA(n){return pp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(t,i){this.field=t,this.transform=i}}function pR(n,t){return n.field.isEqual(t.field)&&function(a,l){return a instanceof mu&&l instanceof mu||a instanceof pu&&l instanceof pu?So(a.elements,l.elements,Br):a instanceof Th&&l instanceof Th?Br(a.Ae,l.Ae):a instanceof du&&l instanceof du}(n.transform,t.transform)}class gR{constructor(t,i){this.version=t,this.transformResults=i}}class Vr{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Vr}static exists(t){return new Vr(void 0,t)}static updateTime(t){return new Vr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Gh{}function DA(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new IA(n.key,Vr.none()):new vu(n.key,n.data,Vr.none());{const i=n.data,a=Cn.empty();let l=new Ge(on.comparator);for(let c of t.fields)if(!l.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?a.delete(c):a.set(c,f),l=l.add(c)}return new va(n.key,a,new zn(l.toArray()),Vr.none())}}function yR(n,t,i){n instanceof vu?function(l,c,f){const p=l.value.clone(),y=bb(l.fieldTransforms,c,f.transformResults);p.setAll(y),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(n,t,i):n instanceof va?function(l,c,f){if(!oh(l.precondition,c))return void c.convertToUnknownDocument(f.version);const p=bb(l.fieldTransforms,c,f.transformResults),y=c.data;y.setAll(kA(l)),y.setAll(p),c.convertToFoundDocument(f.version,y).setHasCommittedMutations()}(n,t,i):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,i)}function nu(n,t,i,a){return n instanceof vu?function(c,f,p,y){if(!oh(c.precondition,f))return p;const g=c.value.clone(),_=_b(c.fieldTransforms,y,f);return g.setAll(_),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null}(n,t,i,a):n instanceof va?function(c,f,p,y){if(!oh(c.precondition,f))return p;const g=_b(c.fieldTransforms,y,f),_=f.data;return _.setAll(kA(c)),_.setAll(g),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(T=>T.field))}(n,t,i,a):function(c,f,p){return oh(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(n,t,i)}function vR(n,t){let i=null;for(const a of n.fieldTransforms){const l=t.data.field(a.field),c=SA(a.transform,l||null);c!=null&&(i===null&&(i=Cn.empty()),i.set(a.field,c))}return i||null}function vb(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&So(a,l,(c,f)=>pR(c,f))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class vu extends Gh{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class va extends Gh{constructor(t,i,a,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function kA(n){const t=new Map;return n.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=n.data.field(i);t.set(i,a)}}),t}function bb(n,t,i){const a=new Map;te(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let l=0;l<i.length;l++){const c=n[l],f=c.transform,p=t.data.field(c.field);a.set(c.field,dR(f,p,i[l]))}return a}function _b(n,t,i){const a=new Map;for(const l of n){const c=l.transform,f=i.data.field(l.field);a.set(l.field,fR(c,f,t))}return a}class IA extends Gh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bR extends Gh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&yR(c,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=nu(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=nu(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=TA();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let p=this.applyToLocalView(f,c.mutatedFields);p=i.has(l.key)?null:p;const y=DA(f,p);y!==null&&a.set(l.key,y),f.isValidDocument()||f.convertToNoDocument(Vt.min())}),a}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Ft())}isEqual(t){return this.batchId===t.batchId&&So(this.mutations,t.mutations,(i,a)=>vb(i,a))&&So(this.baseMutations,t.baseMutations,(i,a)=>vb(i,a))}}class _p{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){te(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let l=function(){return oR}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,a[f].version);return new _p(t,i,a,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,Yt;function TR(n){switch(n){case rt.OK:return Dt(64938);case rt.CANCELLED:case rt.UNKNOWN:case rt.DEADLINE_EXCEEDED:case rt.RESOURCE_EXHAUSTED:case rt.INTERNAL:case rt.UNAVAILABLE:case rt.UNAUTHENTICATED:return!1;case rt.INVALID_ARGUMENT:case rt.NOT_FOUND:case rt.ALREADY_EXISTS:case rt.PERMISSION_DENIED:case rt.FAILED_PRECONDITION:case rt.ABORTED:case rt.OUT_OF_RANGE:case rt.UNIMPLEMENTED:case rt.DATA_LOSS:return!0;default:return Dt(15467,{code:n})}}function NA(n){if(n===void 0)return di("GRPC error has no .code"),rt.UNKNOWN;switch(n){case Le.OK:return rt.OK;case Le.CANCELLED:return rt.CANCELLED;case Le.UNKNOWN:return rt.UNKNOWN;case Le.DEADLINE_EXCEEDED:return rt.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return rt.RESOURCE_EXHAUSTED;case Le.INTERNAL:return rt.INTERNAL;case Le.UNAVAILABLE:return rt.UNAVAILABLE;case Le.UNAUTHENTICATED:return rt.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return rt.INVALID_ARGUMENT;case Le.NOT_FOUND:return rt.NOT_FOUND;case Le.ALREADY_EXISTS:return rt.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return rt.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return rt.FAILED_PRECONDITION;case Le.ABORTED:return rt.ABORTED;case Le.OUT_OF_RANGE:return rt.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return rt.UNIMPLEMENTED;case Le.DATA_LOSS:return rt.DATA_LOSS;default:return Dt(39323,{code:n})}}(Yt=Le||(Le={}))[Yt.OK=0]="OK",Yt[Yt.CANCELLED=1]="CANCELLED",Yt[Yt.UNKNOWN=2]="UNKNOWN",Yt[Yt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yt[Yt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yt[Yt.NOT_FOUND=5]="NOT_FOUND",Yt[Yt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yt[Yt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yt[Yt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yt[Yt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yt[Yt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yt[Yt.ABORTED=10]="ABORTED",Yt[Yt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yt[Yt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yt[Yt.INTERNAL=13]="INTERNAL",Yt[Yt.UNAVAILABLE=14]="UNAVAILABLE",Yt[Yt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new aa([4294967295,4294967295],0);function Ab(n){const t=wR().encode(n),i=new F_;return i.update(t),new Uint8Array(i.digest())}function Eb(n){const t=new DataView(n.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new aa([i,a],0),new aa([l,c],0)]}class Ap{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new Ql(`Invalid padding: ${i}`);if(a<0)throw new Ql(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Ql(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new Ql(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=aa.fromNumber(this.ge)}ye(t,i,a){let l=t.add(i.multiply(aa.fromNumber(a)));return l.compare(SR)===1&&(l=new aa([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=Ab(t),[a,l]=Eb(i);for(let c=0;c<this.hashCount;c++){const f=this.ye(a,l,c);if(!this.we(f))return!1}return!0}static create(t,i,a){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new Ap(c,l,i);return a.forEach(p=>f.insert(p)),f}insert(t){if(this.ge===0)return;const i=Ab(t),[a,l]=Eb(i);for(let c=0;c<this.hashCount;c++){const f=this.ye(a,l,c);this.Se(f)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class Ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,i,a,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const l=new Map;return l.set(t,bu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new Fh(Vt.min(),l,new Te(Gt),mi(),Ft())}}class bu{constructor(t,i,a,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new bu(a,i,Ft(),Ft(),Ft())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,i,a,l){this.be=t,this.removedTargetIds=i,this.key=a,this.De=l}}class VA{constructor(t,i){this.targetId=t,this.Ce=i}}class MA{constructor(t,i,a=un.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=l}}class Tb{constructor(){this.ve=0,this.Fe=wb(),this.Me=un.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ft(),i=Ft(),a=Ft();return this.Fe.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:a=a.add(l);break;default:Dt(38017,{changeType:c})}}),new bu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=wb()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class xR{constructor(t){this.Ge=t,this.ze=new Map,this.je=mi(),this.Je=Yc(),this.He=Yc(),this.Ye=new Te(Gt)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:Dt(56790,{state:t.state})}})}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach((a,l)=>{this.rt(l)&&i(l)})}st(t){const i=t.targetId,a=t.Ce.count,l=this.ot(i);if(l){const c=l.target;if(zm(c))if(a===0){const f=new St(c.path);this.et(i,f,gn.newNoDocument(f,Vt.min()))}else te(a===1,20013,{expectedCount:a});else{const f=this._t(i);if(f!==a){const p=this.ut(t),y=p?this.ct(p,t,f):1;if(y!==0){this.it(i);const g=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:l=0},hashCount:c=0}=i;let f,p;try{f=ha(a).toUint8Array()}catch(y){if(y instanceof iA)return wo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new Ap(f,l,c)}catch(y){return wo(y instanceof Ql?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.ge===0?null:p}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let l=0;return a.forEach(c=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(p)||(this.et(i,c,null),l++)}),l}Tt(t){const i=new Map;this.ze.forEach((c,f)=>{const p=this.ot(f);if(p){if(c.current&&zm(p.target)){const y=new St(p.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,gn.newNoDocument(y,t))}c.Be&&(i.set(f,c.ke()),c.qe())}});let a=Ft();this.He.forEach((c,f)=>{let p=!0;f.forEachWhile(y=>{const g=this.ot(y);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(a=a.add(c))}),this.je.forEach((c,f)=>f.setReadTime(t));const l=new Fh(t,i,this.Ye,this.je,a);return this.je=mi(),this.Je=Yc(),this.He=Yc(),this.Ye=new Te(Gt),l}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,i)?l.Qe(i,1):l.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new Tb,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Ge(Gt),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Ge(Gt),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||At("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Tb),this.Ge.getRemoteKeysForTarget(t).forEach(i=>{this.et(t,i,null)})}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Yc(){return new Te(St.comparator)}function wb(){return new Te(St.comparator)}const RR={asc:"ASCENDING",desc:"DESCENDING"},CR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DR={and:"AND",or:"OR"};class kR{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Um(n,t){return n.useProto3Json||Ph(t)?t:{value:t}}function wh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function OA(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function IR(n,t){return wh(n,t.toTimestamp())}function Mr(n){return te(!!n,49232),Vt.fromTimestamp(function(i){const a=ca(i);return new me(a.seconds,a.nanos)}(n))}function Ep(n,t){return $m(n,t).canonicalString()}function $m(n,t){const i=function(l){return new de(["projects",l.projectId,"databases",l.database])}(n).child("documents");return t===void 0?i:i.child(t)}function jA(n){const t=de.fromString(n);return te(UA(t),10190,{key:t.toString()}),t}function Hm(n,t){return Ep(n.databaseId,t.path)}function mm(n,t){const i=jA(t);if(i.get(1)!==n.databaseId.projectId)throw new yt(rt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new yt(rt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new St(BA(i))}function LA(n,t){return Ep(n.databaseId,t)}function NR(n){const t=jA(n);return t.length===4?de.emptyPath():BA(t)}function qm(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function BA(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Sb(n,t,i){return{name:Hm(n,t),fields:i.value.mapValue.fields}}function VR(n,t){let i;if("targetChange"in t){t.targetChange;const a=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Dt(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(g,_){return g.useProto3Json?(te(_===void 0||typeof _=="string",58123),un.fromBase64String(_||"")):(te(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),un.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&function(g){const _=g.code===void 0?rt.UNKNOWN:NA(g.code);return new yt(_,g.message||"")}(f);i=new MA(a,l,c,p||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const l=mm(n,a.document.name),c=Mr(a.document.updateTime),f=a.document.createTime?Mr(a.document.createTime):Vt.min(),p=new Cn({mapValue:{fields:a.document.fields}}),y=gn.newFoundDocument(l,c,f,p),g=a.targetIds||[],_=a.removedTargetIds||[];i=new lh(g,_,y.key,y)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const l=mm(n,a.document),c=a.readTime?Mr(a.readTime):Vt.min(),f=gn.newNoDocument(l,c),p=a.removedTargetIds||[];i=new lh([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const l=mm(n,a.document),c=a.removedTargetIds||[];i=new lh([],c,l,null)}else{if(!("filter"in t))return Dt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:l=0,unchangedNames:c}=a,f=new ER(l,c),p=a.targetId;i=new VA(p,f)}}return i}function MR(n,t){let i;if(t instanceof vu)i={update:Sb(n,t.key,t.value)};else if(t instanceof IA)i={delete:Hm(n,t.key)};else if(t instanceof va)i={update:Sb(n,t.key,t.data),updateMask:HR(t.fieldMask)};else{if(!(t instanceof bR))return Dt(16599,{Vt:t.type});i={verify:Hm(n,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(a=>function(c,f){const p=f.transform;if(p instanceof du)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof mu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof pu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Th)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw Dt(20930,{transform:f.transform})}(0,a))),t.precondition.isNone||(i.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:IR(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Dt(27497)}(n,t.precondition)),i}function OR(n,t){return n&&n.length>0?(te(t!==void 0,14353),n.map(i=>function(l,c){let f=l.updateTime?Mr(l.updateTime):Mr(c);return f.isEqual(Vt.min())&&(f=Mr(c)),new gR(f,l.transformResults||[])}(i,t))):[]}function jR(n,t){return{documents:[LA(n,t.path)]}}function LR(n,t){const i={structuredQuery:{}},a=t.path;let l;t.collectionGroup!==null?(l=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=LA(n,l);const c=function(g){if(g.length!==0)return PA(fr.create(g,"and"))}(t.filters);c&&(i.structuredQuery.where=c);const f=function(g){if(g.length!==0)return g.map(_=>function(S){return{field:ho(S.field),direction:PR(S.dir)}}(_))}(t.orderBy);f&&(i.structuredQuery.orderBy=f);const p=Um(n,t.limit);return p!==null&&(i.structuredQuery.limit=p),t.startAt&&(i.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{ft:i,parent:l}}function BR(n){let t=NR(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){te(a===1,65062);const _=i.from[0];_.allDescendants?l=_.collectionId:t=t.child(_.collectionId)}let c=[];i.where&&(c=function(T){const S=zA(T);return S instanceof fr&&mA(S)?S.getFilters():[S]}(i.where));let f=[];i.orderBy&&(f=function(T){return T.map(S=>function(G){return new fu(fo(G.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(S))}(i.orderBy));let p=null;i.limit&&(p=function(T){let S;return S=typeof T=="object"?T.value:T,Ph(S)?null:S}(i.limit));let y=null;i.startAt&&(y=function(T){const S=!!T.before,M=T.values||[];return new Ah(M,S)}(i.startAt));let g=null;return i.endAt&&(g=function(T){const S=!T.before,M=T.values||[];return new Ah(M,S)}(i.endAt)),nR(t,l,f,c,p,"F",y,g)}function zR(n,t){const i=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Dt(28987,{purpose:l})}}(t.purpose);return i==null?null:{"goog-listen-tags":i}}function zA(n){return n.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=fo(i.unaryFilter.field);return ze.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=fo(i.unaryFilter.field);return ze.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=fo(i.unaryFilter.field);return ze.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=fo(i.unaryFilter.field);return ze.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Dt(61313);default:return Dt(60726)}}(n):n.fieldFilter!==void 0?function(i){return ze.create(fo(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Dt(58110);default:return Dt(50506)}}(i.fieldFilter.op),i.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(i){return fr.create(i.compositeFilter.filters.map(a=>zA(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Dt(1026)}}(i.compositeFilter.op))}(n):Dt(30097,{filter:n})}function PR(n){return RR[n]}function UR(n){return CR[n]}function $R(n){return DR[n]}function ho(n){return{fieldPath:n.canonicalString()}}function fo(n){return on.fromServerFormat(n.fieldPath)}function PA(n){return n instanceof ze?function(i){if(i.op==="=="){if(fb(i.value))return{unaryFilter:{field:ho(i.field),op:"IS_NAN"}};if(hb(i.value))return{unaryFilter:{field:ho(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(fb(i.value))return{unaryFilter:{field:ho(i.field),op:"IS_NOT_NAN"}};if(hb(i.value))return{unaryFilter:{field:ho(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(i.field),op:UR(i.op),value:i.value}}}(n):n instanceof fr?function(i){const a=i.getFilters().map(l=>PA(l));return a.length===1?a[0]:{compositeFilter:{op:$R(i.op),filters:a}}}(n):Dt(54877,{filter:n})}function HR(n){const t=[];return n.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function UA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,i,a,l,c=Vt.min(),f=Vt.min(),p=un.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(t){return new ea(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new ea(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ea(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ea(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(t){this.yt=t}}function GR(n){const t=BR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Eh(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.Cn=new QR}addToCollectionParentIndex(t,i){return this.Cn.add(i),at.resolve()}getCollectionParents(t,i){return at.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return at.resolve()}deleteFieldIndex(t,i){return at.resolve()}deleteAllFieldIndexes(t){return at.resolve()}createTargetIndexes(t,i){return at.resolve()}getDocumentsMatchingTarget(t,i){return at.resolve(null)}getIndexType(t,i){return at.resolve(0)}getFieldIndexes(t,i){return at.resolve([])}getNextCollectionGroupToUpdate(t){return at.resolve(null)}getMinOffset(t,i){return at.resolve(ua.min())}getMinOffsetFromCollectionGroup(t,i){return at.resolve(ua.min())}updateCollectionGroup(t,i,a){return at.resolve()}updateIndexEntries(t,i){return at.resolve()}}class QR{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Ge(de.comparator),c=!l.has(a);return this.index[i]=l.add(a),c}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Ge(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$A=41943040;class Rn{static withCacheSize(t){return new Rn(t,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn($A,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Co(0)}static cr(){return new Co(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="LruGarbageCollector",YR=1048576;function Cb([n,t],[i,a]){const l=Gt(n,i);return l===0?Gt(t,a):l}class KR{constructor(t){this.Ir=t,this.buffer=new Ge(Cb),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Cb(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class XR{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){At(Rb,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){jo(i)?At(Rb,"Ignoring IndexedDB error during garbage collection: ",i):await Oo(i)}await this.Vr(3e5)})}}class ZR{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next(a=>Math.floor(i/100*a))}nthSequenceNumber(t,i){if(i===0)return at.resolve(zh.ce);const a=new KR(i);return this.mr.forEachTarget(t,l=>a.Ar(l.sequenceNumber)).next(()=>this.mr.pr(t,l=>a.Ar(l))).next(()=>a.maxValue)}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(At("LruGarbageCollector","Garbage collection skipped; disabled"),at.resolve(xb)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(At("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xb):this.yr(t,i))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,l,c,f,p,y,g;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(At("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),l=this.params.maximumSequenceNumbersToCollect):l=T,f=Date.now(),this.nthSequenceNumber(t,l))).next(T=>(a=T,p=Date.now(),this.removeTargets(t,a,i))).next(T=>(c=T,y=Date.now(),this.removeOrphanedDocuments(t,a))).next(T=>(g=Date.now(),uo()<=Kt.DEBUG&&At("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${l} in `+(p-f)+`ms
	Removed ${c} targets in `+(y-p)+`ms
	Removed ${T} documents in `+(g-y)+`ms
Total Duration: ${g-_}ms`),at.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:T})))}}function WR(n,t){return new ZR(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.changes=new gs(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,gn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?at.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(a=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(a!==null&&nu(a.mutation,l,zn.empty(),me.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.getLocalViewOfDocuments(t,a,Ft()).next(()=>a))}getLocalViewOfDocuments(t,i,a=Ft()){const l=ss();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,a).next(c=>{let f=Fl();return c.forEach((p,y)=>{f=f.insert(p,y.overlayedDocument)}),f}))}getOverlayedDocuments(t,i){const a=ss();return this.populateOverlays(t,a,i).next(()=>this.computeViews(t,i,a,Ft()))}populateOverlays(t,i,a){const l=[];return a.forEach(c=>{i.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,p)=>{i.set(f,p)})})}computeViews(t,i,a,l){let c=mi();const f=eu(),p=function(){return eu()}();return i.forEach((y,g)=>{const _=a.get(g.key);l.has(g.key)&&(_===void 0||_.mutation instanceof va)?c=c.insert(g.key,g):_!==void 0?(f.set(g.key,_.mutation.getFieldMask()),nu(_.mutation,g,_.mutation.getFieldMask(),me.now())):f.set(g.key,zn.empty())}),this.recalculateAndSaveOverlays(t,c).next(y=>(y.forEach((g,_)=>f.set(g,_)),i.forEach((g,_)=>p.set(g,new t2(_,f.get(g)??null))),p))}recalculateAndSaveOverlays(t,i){const a=eu();let l=new Te((f,p)=>f-p),c=Ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(f=>{for(const p of f)p.keys().forEach(y=>{const g=i.get(y);if(g===null)return;let _=a.get(y)||zn.empty();_=p.applyToLocalView(g,_),a.set(y,_);const T=(l.get(p.batchId)||Ft()).add(y);l=l.insert(p.batchId,T)})}).next(()=>{const f=[],p=l.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),g=y.key,_=y.value,T=TA();_.forEach(S=>{if(!c.has(S)){const M=DA(i.get(S),a.get(S));M!==null&&T.set(S,M),c=c.add(S)}}),f.push(this.documentOverlayCache.saveOverlays(t,g,T))}return at.waitFor(f)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,i,a,l){return function(f){return St.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):vA(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-c.size):at.resolve(ss());let p=lu,y=c;return f.next(g=>at.forEach(g,(_,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),c.get(_)?at.resolve():this.remoteDocumentCache.getEntry(t,_).next(S=>{y=y.insert(_,S)}))).next(()=>this.populateOverlays(t,g,c)).next(()=>this.computeViews(t,y,g,Ft())).next(_=>({batchId:p,changes:EA(_)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new St(i)).next(a=>{let l=Fl();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const c=i.collectionGroup;let f=Fl();return this.indexManager.getCollectionParents(t,c).next(p=>at.forEach(p,y=>{const g=function(T,S){return new Lo(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(i,y.child(c));return this.getDocumentsMatchingCollectionQuery(t,g,a,l).next(_=>{_.forEach((T,S)=>{f=f.insert(T,S)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,i,a,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,c,l))).next(f=>{c.forEach((y,g)=>{const _=g.getKey();f.get(_)===null&&(f=f.insert(_,gn.newInvalidDocument(_)))});let p=Fl();return f.forEach((y,g)=>{const _=c.get(y);_!==void 0&&nu(_.mutation,g,zn.empty(),me.now()),Hh(i,g)&&(p=p.insert(y,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return at.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Mr(l.createTime)}}(i)),at.resolve()}getNamedQuery(t,i){return at.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,function(l){return{name:l.name,query:GR(l.bundledQuery),readTime:Mr(l.readTime)}}(i)),at.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.overlays=new Te(St.comparator),this.qr=new Map}getOverlay(t,i){return at.resolve(this.overlays.get(i))}getOverlays(t,i){const a=ss();return at.forEach(i,l=>this.getOverlay(t,l).next(c=>{c!==null&&a.set(l,c)})).next(()=>a)}saveOverlays(t,i,a){return a.forEach((l,c)=>{this.St(t,i,c)}),at.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.qr.delete(a)),at.resolve()}getOverlaysForCollection(t,i,a){const l=ss(),c=i.length+1,f=new St(i.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const y=p.getNext().value,g=y.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===c&&y.largestBatchId>a&&l.set(y.getKey(),y)}return at.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let c=new Te((g,_)=>g-_);const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let _=c.get(g.largestBatchId);_===null&&(_=ss(),c=c.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const p=ss(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((g,_)=>p.set(g,_)),!(p.size()>=l)););return at.resolve(p)}St(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const f=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new AR(i,a));let c=this.qr.get(i);c===void 0&&(c=Ft(),this.qr.set(i,c)),this.qr.set(i,c.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.sessionToken=un.EMPTY_BYTE_STRING}getSessionToken(t){return at.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,at.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.Qr=new Ge(We.$r),this.Ur=new Ge(We.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new We(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach(a=>this.addReference(a,i))}removeReference(t,i){this.Gr(new We(t,i))}zr(t,i){t.forEach(a=>this.removeReference(a,i))}jr(t){const i=new St(new de([])),a=new We(i,t),l=new We(i,t+1),c=[];return this.Ur.forEachInRange([a,l],f=>{this.Gr(f),c.push(f.key)}),c}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new St(new de([])),a=new We(i,t),l=new We(i,t+1);let c=Ft();return this.Ur.forEachInRange([a,l],f=>{c=c.add(f.key)}),c}containsKey(t){const i=new We(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class We{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return St.comparator(t.key,i.key)||Gt(t.Yr,i.Yr)}static Kr(t,i){return Gt(t.Yr,i.Yr)||St.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Ge(We.$r)}checkEmpty(t){return at.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new _R(c,i,a,l);this.mutationQueue.push(f);for(const p of l)this.Zr=this.Zr.add(new We(p.key,c)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return at.resolve(f)}lookupMutationBatch(t,i){return at.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.ei(a),c=l<0?0:l;return at.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return at.resolve(this.mutationQueue.length===0?dp:this.tr-1)}getAllMutationBatches(t){return at.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new We(i,0),l=new We(i,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([a,l],f=>{const p=this.Xr(f.Yr);c.push(p)}),at.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Ge(Gt);return i.forEach(l=>{const c=new We(l,0),f=new We(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],p=>{a=a.add(p.Yr)})}),at.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let c=a;St.isDocumentKey(c)||(c=c.child(""));const f=new We(new St(c),0);let p=new Ge(Gt);return this.Zr.forEachWhile(y=>{const g=y.key.path;return!!a.isPrefixOf(g)&&(g.length===l&&(p=p.add(y.Yr)),!0)},f),at.resolve(this.ti(p))}ti(t){const i=[];return t.forEach(a=>{const l=this.Xr(a);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){te(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return at.forEach(i.mutations,l=>{const c=new We(l.key,i.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Zr=a})}ir(t){}containsKey(t,i){const a=new We(i,0),l=this.Zr.firstAfterOrEqual(a);return at.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,at.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t){this.ri=t,this.docs=function(){return new Te(St.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),c=l?l.size:0,f=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return at.resolve(a?a.document.mutableCopy():gn.newInvalidDocument(i))}getEntries(t,i){let a=mi();return i.forEach(l=>{const c=this.docs.get(l);a=a.insert(l,c?c.document.mutableCopy():gn.newInvalidDocument(l))}),at.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let c=mi();const f=i.path,p=new St(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:g,value:{document:_}}=y.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||Mx(Vx(_),a)<=0||(l.has(_.key)||Hh(i,_))&&(c=c.insert(_.key,_.mutableCopy()))}return at.resolve(c)}getAllFromCollectionGroup(t,i,a,l){Dt(9500)}ii(t,i){return at.forEach(this.docs,a=>i(a))}newChangeBuffer(t){return new o2(this)}getSize(t){return at.resolve(this.size)}}class o2 extends JR{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(a)}),at.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(t){this.persistence=t,this.si=new gs(i=>gp(i),yp),this.lastRemoteSnapshotVersion=Vt.min(),this.highestTargetId=0,this.oi=0,this._i=new Tp,this.targetCount=0,this.ai=Co.ur()}forEachTarget(t,i){return this.si.forEach((a,l)=>i(l)),at.resolve()}getLastRemoteSnapshotVersion(t){return at.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return at.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),at.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),at.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new Co(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,at.resolve()}updateTargetData(t,i){return this.Pr(i),at.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,at.resolve()}removeTargets(t,i,a){let l=0;const c=[];return this.si.forEach((f,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),at.waitFor(c).next(()=>l)}getTargetCount(t){return at.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return at.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),at.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),at.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),at.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return at.resolve(a)}containsKey(t,i){return at.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(t,i){this.ui={},this.overlays={},this.ci=new zh(0),this.li=!1,this.li=!0,this.hi=new i2,this.referenceDelegate=t(this),this.Pi=new l2(this),this.indexManager=new FR,this.remoteDocumentCache=function(l){return new s2(l)}(a=>this.referenceDelegate.Ti(a)),this.serializer=new qR(i),this.Ii=new n2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new r2,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new a2(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){At("MemoryPersistence","Starting transaction:",t);const l=new u2(this.ci.next());return this.referenceDelegate.Ei(),a(l).next(c=>this.referenceDelegate.di(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}Ai(t,i){return at.or(Object.values(this.ui).map(a=>()=>a.containsKey(t,i)))}}class u2 extends jx{constructor(t){super(),this.currentSequenceNumber=t}}class wp{constructor(t){this.persistence=t,this.Ri=new Tp,this.Vi=null}static mi(t){return new wp(t)}get fi(){if(this.Vi)return this.Vi;throw Dt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),at.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),at.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),at.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach(l=>this.fi.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(c=>this.fi.add(c.toString()))}).next(()=>a.removeTargetData(t,i))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return at.forEach(this.fi,a=>{const l=St.fromPath(a);return this.gi(t,l).next(c=>{c||i.removeEntry(l,Vt.min())})}).next(()=>(this.Vi=null,i.apply(t)))}updateLimboDocument(t,i){return this.gi(t,i).next(a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())})}Ti(t){return 0}gi(t,i){return at.or([()=>at.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Sh{constructor(t,i){this.persistence=t,this.pi=new gs(a=>zx(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=WR(this,i)}static mi(t,i){return new Sh(t,i)}Ei(){}di(t){return at.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>i.next(l=>a+l))}wr(t){let i=0;return this.pr(t,a=>{i++}).next(()=>i)}pr(t,i){return at.forEach(this.pi,(a,l)=>this.br(t,a,l).next(c=>c?at.resolve():i(l)))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,f=>this.br(t,f,i).next(p=>{p||(a++,c.removeEntry(f,Vt.min()))})).next(()=>c.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),at.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),at.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),at.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),at.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=ah(t.data.value)),i}br(t,i,a){return at.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.pi.get(i);return at.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=l}static As(t,i){let a=Ft(),l=Ft();for(const c of i.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new Sp(t,i.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return eS()?8:Lx(Jw())>0?6:4}()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,l){const c={result:null};return this.ys(t,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ws(t,i,l,a).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new c2;return this.Ss(t,i,f).next(p=>{if(c.result=p,this.Vs)return this.bs(t,i,f,p.size)})}).next(()=>c.result)}bs(t,i,a,l){return a.documentReadCount<this.fs?(uo()<=Kt.DEBUG&&At("QueryEngine","SDK will not create cache indexes for query:",co(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),at.resolve()):(uo()<=Kt.DEBUG&&At("QueryEngine","Query:",co(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?(uo()<=Kt.DEBUG&&At("QueryEngine","The SDK decides to create cache indexes for query:",co(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nr(i))):at.resolve())}ys(t,i){if(gb(i))return at.resolve(null);let a=Nr(i);return this.indexManager.getIndexType(t,a).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=Eh(i,null,"F"),a=Nr(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next(c=>{const f=Ft(...c);return this.ps.getDocuments(t,f).next(p=>this.indexManager.getMinOffset(t,a).next(y=>{const g=this.Ds(i,p);return this.Cs(i,g,f,y.readTime)?this.ys(t,Eh(i,null,"F")):this.vs(t,g,i,y)}))})))}ws(t,i,a,l){return gb(i)||l.isEqual(Vt.min())?at.resolve(null):this.ps.getDocuments(t,a).next(c=>{const f=this.Ds(i,c);return this.Cs(i,f,a,l)?at.resolve(null):(uo()<=Kt.DEBUG&&At("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),co(i)),this.vs(t,f,i,Nx(l,lu)).next(p=>p))})}Ds(t,i){let a=new Ge(_A(t));return i.forEach((l,c)=>{Hh(t,c)&&(a=a.add(c))}),a}Cs(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,i,a){return uo()<=Kt.DEBUG&&At("QueryEngine","Using full collection scan to execute query:",co(i)),this.ps.getDocumentsMatchingQuery(t,i,ua.min(),a)}vs(t,i,a,l){return this.ps.getDocumentsMatchingQuery(t,a,l).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="LocalStore",f2=3e8;class d2{constructor(t,i,a,l){this.persistence=t,this.Fs=i,this.serializer=l,this.Ms=new Te(Gt),this.xs=new gs(c=>gp(c),yp),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new e2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ms))}}function m2(n,t,i,a){return new d2(n,t,i,a)}async function qA(n,t){const i=Lt(n);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next(c=>(l=c,i.Bs(t),i.mutationQueue.getAllMutationBatches(a))).next(c=>{const f=[],p=[];let y=Ft();for(const g of l){f.push(g.batchId);for(const _ of g.mutations)y=y.add(_.key)}for(const g of c){p.push(g.batchId);for(const _ of g.mutations)y=y.add(_.key)}return i.localDocuments.getDocuments(a,y).next(g=>({Ls:g,removedBatchIds:f,addedBatchIds:p}))})})}function p2(n,t){const i=Lt(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const l=t.batch.keys(),c=i.Ns.newChangeBuffer({trackRemovals:!0});return function(p,y,g,_){const T=g.batch,S=T.keys();let M=at.resolve();return S.forEach(G=>{M=M.next(()=>_.getEntry(y,G)).next(K=>{const z=g.docVersions.get(G);te(z!==null,48541),K.version.compareTo(z)<0&&(T.applyToRemoteDocument(K,g),K.isValidDocument()&&(K.setReadTime(g.commitVersion),_.addEntry(K)))})}),M.next(()=>p.mutationQueue.removeMutationBatch(y,T))}(i,a,t,c).next(()=>c.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(p){let y=Ft();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(y=y.add(p.batch.mutations[g].key));return y}(t))).next(()=>i.localDocuments.getDocuments(a,l))})}function GA(n){const t=Lt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Pi.getLastRemoteSnapshotVersion(i))}function g2(n,t){const i=Lt(n),a=t.snapshotVersion;let l=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=i.Ns.newChangeBuffer({trackRemovals:!0});l=i.Ms;const p=[];t.targetChanges.forEach((_,T)=>{const S=l.get(T);if(!S)return;p.push(i.Pi.removeMatchingKeys(c,_.removedDocuments,T).next(()=>i.Pi.addMatchingKeys(c,_.addedDocuments,T)));let M=S.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(T)!==null?M=M.withResumeToken(un.EMPTY_BYTE_STRING,Vt.min()).withLastLimboFreeSnapshotVersion(Vt.min()):_.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(_.resumeToken,a)),l=l.insert(T,M),function(K,z,nt){return K.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=f2?!0:nt.addedDocuments.size+nt.modifiedDocuments.size+nt.removedDocuments.size>0}(S,M,_)&&p.push(i.Pi.updateTargetData(c,M))});let y=mi(),g=Ft();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(c,_))}),p.push(y2(c,f,t.documentUpdates).next(_=>{y=_.ks,g=_.qs})),!a.isEqual(Vt.min())){const _=i.Pi.getLastRemoteSnapshotVersion(c).next(T=>i.Pi.setTargetsMetadata(c,c.currentSequenceNumber,a));p.push(_)}return at.waitFor(p).next(()=>f.apply(c)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,y,g)).next(()=>y)}).then(c=>(i.Ms=l,c))}function y2(n,t,i){let a=Ft(),l=Ft();return i.forEach(c=>a=a.add(c)),t.getEntries(n,a).next(c=>{let f=mi();return i.forEach((p,y)=>{const g=c.get(p);y.isFoundDocument()!==g.isFoundDocument()&&(l=l.add(p)),y.isNoDocument()&&y.version.isEqual(Vt.min())?(t.removeEntry(p,y.readTime),f=f.insert(p,y)):!g.isValidDocument()||y.version.compareTo(g.version)>0||y.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(y),f=f.insert(p,y)):At(xp,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",y.version)}),{ks:f,qs:l}})}function v2(n,t){const i=Lt(n);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=dp),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}function b2(n,t){const i=Lt(n);return i.persistence.runTransaction("Allocate target","readwrite",a=>{let l;return i.Pi.getTargetData(a,t).next(c=>c?(l=c,at.resolve(l)):i.Pi.allocateTargetId(a).next(f=>(l=new ea(t,f,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,l).next(()=>l))))}).then(a=>{const l=i.Ms.get(a.targetId);return(l===null||a.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a})}async function Gm(n,t,i){const a=Lt(n),l=a.Ms.get(t),c=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",c,f=>a.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!jo(f))throw f;At(xp,`Failed to update sequence numbers for target ${t}: ${f}`)}a.Ms=a.Ms.remove(t),a.xs.delete(l.target)}function Db(n,t,i){const a=Lt(n);let l=Vt.min(),c=Ft();return a.persistence.runTransaction("Execute query","readwrite",f=>function(y,g,_){const T=Lt(y),S=T.xs.get(_);return S!==void 0?at.resolve(T.Ms.get(S)):T.Pi.getTargetData(g,_)}(a,f,Nr(t)).next(p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(f,p.targetId).next(y=>{c=y})}).next(()=>a.Fs.getDocumentsMatchingQuery(f,t,i?l:Vt.min(),i?c:Ft())).next(p=>(_2(a,iR(t),p),{documents:p,Qs:c})))}function _2(n,t,i){let a=n.Os.get(t)||Vt.min();i.forEach((l,c)=>{c.readTime.compareTo(a)>0&&(a=c.readTime)}),n.Os.set(t,a)}class kb{constructor(){this.activeTargetIds=cR()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class A2{constructor(){this.Mo=new kb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new kb,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="ConnectivityMonitor";class Nb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){At(Ib,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){At(Ib,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc=null;function Fm(){return Kc===null?Kc=function(){return 268435456+Math.round(2147483648*Math.random())}():Kc++,"0x"+Kc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="RestConnection",T2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class w2{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===bh?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(t,i,a,l,c){const f=Fm(),p=this.zo(t,i.toUriEncodedString());At(pm,`Sending RPC '${t}' ${f}:`,p,a);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,l,c);const{host:g}=new URL(p),_=up(g);return this.Jo(t,p,y,a,_).then(T=>(At(pm,`Received RPC '${t}' ${f}: `,T),T),T=>{throw wo(pm,`RPC '${t}' ${f} failed with error: `,T,"url: ",p,"request:",a),T})}Ho(t,i,a,l,c,f){return this.Go(t,i,a,l,c)}jo(t,i,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),a&&a.headers.forEach((l,c)=>t[c]=l)}zo(t,i){const a=T2[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class x2 extends w2{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,l,c){const f=Fm();return new Promise((p,y)=>{const g=new Q_;g.setWithCredentials(!0),g.listenOnce(Y_.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ih.NO_ERROR:const T=g.getResponseJson();At(mn,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(T)),p(T);break;case ih.TIMEOUT:At(mn,`RPC '${t}' ${f} timed out`),y(new yt(rt.DEADLINE_EXCEEDED,"Request time out"));break;case ih.HTTP_ERROR:const S=g.getStatus();if(At(mn,`RPC '${t}' ${f} failed with status:`,S,"response text:",g.getResponseText()),S>0){let M=g.getResponseJson();Array.isArray(M)&&(M=M[0]);const G=M==null?void 0:M.error;if(G&&G.status&&G.message){const K=function(nt){const J=nt.toLowerCase().replace(/_/g,"-");return Object.values(rt).indexOf(J)>=0?J:rt.UNKNOWN}(G.status);y(new yt(K,G.message))}else y(new yt(rt.UNKNOWN,"Server responded with status "+g.getStatus()))}else y(new yt(rt.UNAVAILABLE,"Connection failed."));break;default:Dt(9055,{l_:t,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{At(mn,`RPC '${t}' ${f} completed.`)}});const _=JSON.stringify(l);At(mn,`RPC '${t}' ${f} sending request:`,l),g.send(i,"POST",_,a,15)})}T_(t,i,a){const l=Fm(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=Z_(),p=X_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(y.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,i,a),y.encodeInitMessageHeaders=!0;const _=c.join("");At(mn,`Creating RPC '${t}' stream ${l}: ${_}`,y);const T=f.createWebChannel(_,y);this.I_(T);let S=!1,M=!1;const G=new S2({Yo:z=>{M?At(mn,`Not sending because RPC '${t}' stream ${l} is closed:`,z):(S||(At(mn,`Opening RPC '${t}' stream ${l} transport.`),T.open(),S=!0),At(mn,`RPC '${t}' stream ${l} sending:`,z),T.send(z))},Zo:()=>T.close()}),K=(z,nt,J)=>{z.listen(nt,X=>{try{J(X)}catch(mt){setTimeout(()=>{throw mt},0)}})};return K(T,Gl.EventType.OPEN,()=>{M||(At(mn,`RPC '${t}' stream ${l} transport opened.`),G.o_())}),K(T,Gl.EventType.CLOSE,()=>{M||(M=!0,At(mn,`RPC '${t}' stream ${l} transport closed`),G.a_(),this.E_(T))}),K(T,Gl.EventType.ERROR,z=>{M||(M=!0,wo(mn,`RPC '${t}' stream ${l} transport errored. Name:`,z.name,"Message:",z.message),G.a_(new yt(rt.UNAVAILABLE,"The operation could not be completed")))}),K(T,Gl.EventType.MESSAGE,z=>{var nt;if(!M){const J=z.data[0];te(!!J,16349);const X=J,mt=(X==null?void 0:X.error)||((nt=X[0])==null?void 0:nt.error);if(mt){At(mn,`RPC '${t}' stream ${l} received error:`,mt);const st=mt.status;let ut=function(D){const V=Le[D];if(V!==void 0)return NA(V)}(st),R=mt.message;ut===void 0&&(ut=rt.INTERNAL,R="Unknown error status: "+st+" with message "+mt.message),M=!0,G.a_(new yt(ut,R)),T.close()}else At(mn,`RPC '${t}' stream ${l} received:`,J),G.u_(J)}}),K(p,K_.STAT_EVENT,z=>{z.stat===Mm.PROXY?At(mn,`RPC '${t}' stream ${l} detected buffering proxy`):z.stat===Mm.NOPROXY&&At(mn,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{G.__()},0),G}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(i=>i===t)}}function gm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n){return new kR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t,i,a=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&At("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="PersistentStream";class QA{constructor(t,i,a,l,c,f,p,y){this.Mi=t,this.S_=a,this.b_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new FA(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===rt.RESOURCE_EXHAUSTED?(di(i.toString()),di("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===rt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.D_===i&&this.G_(a,l)},a=>{t(()=>{const l=new yt(rt.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)})})}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo(()=>{a(()=>this.listener.Xo())}),this.stream.t_(()=>{a(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(l=>{a(()=>this.z_(l))}),this.stream.onMessage(l=>{a(()=>++this.F_==1?this.J_(l):this.onNext(l))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return At(Vb,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget(()=>this.D_===t?i():(At(Vb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R2 extends QA{constructor(t,i,a,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,l,f),this.serializer=c}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=VR(this.serializer,t),a=function(c){if(!("targetChange"in c))return Vt.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Vt.min():f.readTime?Mr(f.readTime):Vt.min()}(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=qm(this.serializer),i.addTarget=function(c,f){let p;const y=f.target;if(p=zm(y)?{documents:jR(c,y)}:{query:LR(c,y).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=OA(c,f.resumeToken);const g=Um(c,f.expectedCount);g!==null&&(p.expectedCount=g)}else if(f.snapshotVersion.compareTo(Vt.min())>0){p.readTime=wh(c,f.snapshotVersion.toTimestamp());const g=Um(c,f.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,t);const a=zR(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=qm(this.serializer),i.removeTarget=t,this.q_(i)}}class C2 extends QA{constructor(t,i,a,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return te(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,te(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){te(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=OR(t.writeResults,t.commitTime),a=Mr(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=qm(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map(a=>MR(this.serializer,a))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{}class k2 extends D2{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new yt(rt.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Go(t,$m(i,a),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new yt(rt.UNKNOWN,c.toString())})}Ho(t,i,a,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Ho(t,$m(i,a),l,f,p,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new yt(rt.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class I2{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(di(i),this.aa=!1):At("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="RemoteStore";class N2{constructor(t,i,a,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo(f=>{a.enqueueAndForget(async()=>{ys(this)&&(At(ms,"Restarting streams for network reachability change."),await async function(y){const g=Lt(y);g.Ea.add(4),await _u(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Yh(g)}(this))})}),this.Ra=new I2(a,l)}}async function Yh(n){if(ys(n))for(const t of n.da)await t(!0)}async function _u(n){for(const t of n.da)await t(!1)}function YA(n,t){const i=Lt(n);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),kp(i)?Dp(i):Bo(i).O_()&&Cp(i,t))}function Rp(n,t){const i=Lt(n),a=Bo(i);i.Ia.delete(t),a.O_()&&KA(i,t),i.Ia.size===0&&(a.O_()?a.L_():ys(i)&&i.Ra.set("Unknown"))}function Cp(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Vt.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Bo(n).Y_(t)}function KA(n,t){n.Va.Ue(t),Bo(n).Z_(t)}function Dp(n){n.Va=new xR({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Bo(n).start(),n.Ra.ua()}function kp(n){return ys(n)&&!Bo(n).x_()&&n.Ia.size>0}function ys(n){return Lt(n).Ea.size===0}function XA(n){n.Va=void 0}async function V2(n){n.Ra.set("Online")}async function M2(n){n.Ia.forEach((t,i)=>{Cp(n,t)})}async function O2(n,t){XA(n),kp(n)?(n.Ra.ha(t),Dp(n)):n.Ra.set("Unknown")}async function j2(n,t,i){if(n.Ra.set("Online"),t instanceof MA&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const p of c.targetIds)l.Ia.has(p)&&(await l.remoteSyncer.rejectListen(p,f),l.Ia.delete(p),l.Va.removeTarget(p))}(n,t)}catch(a){At(ms,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await xh(n,a)}else if(t instanceof lh?n.Va.Ze(t):t instanceof VA?n.Va.st(t):n.Va.tt(t),!i.isEqual(Vt.min()))try{const a=await GA(n.localStore);i.compareTo(a)>=0&&await function(c,f){const p=c.Va.Tt(f);return p.targetChanges.forEach((y,g)=>{if(y.resumeToken.approximateByteSize()>0){const _=c.Ia.get(g);_&&c.Ia.set(g,_.withResumeToken(y.resumeToken,f))}}),p.targetMismatches.forEach((y,g)=>{const _=c.Ia.get(y);if(!_)return;c.Ia.set(y,_.withResumeToken(un.EMPTY_BYTE_STRING,_.snapshotVersion)),KA(c,y);const T=new ea(_.target,y,g,_.sequenceNumber);Cp(c,T)}),c.remoteSyncer.applyRemoteEvent(p)}(n,i)}catch(a){At(ms,"Failed to raise snapshot:",a),await xh(n,a)}}async function xh(n,t,i){if(!jo(t))throw t;n.Ea.add(1),await _u(n),n.Ra.set("Offline"),i||(i=()=>GA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{At(ms,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await Yh(n)})}function ZA(n,t){return t().catch(i=>xh(n,i,t))}async function Kh(n){const t=Lt(n),i=da(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:dp;for(;L2(t);)try{const l=await v2(t.localStore,a);if(l===null){t.Ta.length===0&&i.L_();break}a=l.batchId,B2(t,l)}catch(l){await xh(t,l)}WA(t)&&JA(t)}function L2(n){return ys(n)&&n.Ta.length<10}function B2(n,t){n.Ta.push(t);const i=da(n);i.O_()&&i.X_&&i.ea(t.mutations)}function WA(n){return ys(n)&&!da(n).x_()&&n.Ta.length>0}function JA(n){da(n).start()}async function z2(n){da(n).ra()}async function P2(n){const t=da(n);for(const i of n.Ta)t.ea(i.mutations)}async function U2(n,t,i){const a=n.Ta.shift(),l=_p.from(a,t,i);await ZA(n,()=>n.remoteSyncer.applySuccessfulWrite(l)),await Kh(n)}async function $2(n,t){t&&da(n).X_&&await async function(a,l){if(function(f){return TR(f)&&f!==rt.ABORTED}(l.code)){const c=a.Ta.shift();da(a).B_(),await ZA(a,()=>a.remoteSyncer.rejectFailedWrite(c.batchId,l)),await Kh(a)}}(n,t),WA(n)&&JA(n)}async function Mb(n,t){const i=Lt(n);i.asyncQueue.verifyOperationInProgress(),At(ms,"RemoteStore received new credentials");const a=ys(i);i.Ea.add(3),await _u(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await Yh(i)}async function H2(n,t){const i=Lt(n);t?(i.Ea.delete(2),await Yh(i)):t||(i.Ea.add(2),await _u(i),i.Ra.set("Unknown"))}function Bo(n){return n.ma||(n.ma=function(i,a,l){const c=Lt(i);return c.sa(),new R2(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(n.datastore,n.asyncQueue,{Xo:V2.bind(null,n),t_:M2.bind(null,n),r_:O2.bind(null,n),H_:j2.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),kp(n)?Dp(n):n.Ra.set("Unknown")):(await n.ma.stop(),XA(n))})),n.ma}function da(n){return n.fa||(n.fa=function(i,a,l){const c=Lt(i);return c.sa(),new C2(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:z2.bind(null,n),r_:$2.bind(null,n),ta:P2.bind(null,n),na:U2.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await Kh(n)):(await n.fa.stop(),n.Ta.length>0&&(At(ms,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,i,a,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=c,this.deferred=new sa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,c){const f=Date.now()+a,p=new Ip(t,i,f,l,c);return p.start(a),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new yt(rt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Np(n,t){if(di("AsyncQueue",`${t}: ${n}`),jo(n))return new yt(rt.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{static emptySet(t){return new yo(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||St.comparator(i.key,a.key):(i,a)=>St.comparator(i.key,a.key),this.keyedMap=Fl(),this.sortedSet=new Te(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((i,a)=>(t(i),!1))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof yo)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(i=>{t.push(i.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new yo;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.ga=new Te(St.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):Dt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal((i,a)=>{t.push(a)}),t}}class Do{constructor(t,i,a,l,c,f,p,y,g){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=g}static fromInitialDocuments(t,i,a,l,c){const f=[];return i.forEach(p=>{f.push({type:0,doc:p})}),new Do(t,i,yo.emptySet(i),f,a,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$h(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==a[l].type||!i[l].doc.isEqual(a[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class G2{constructor(){this.queries=jb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=Lt(i),c=l.queries;l.queries=jb(),c.forEach((f,p)=>{for(const y of p.Sa)y.onError(a)})})(this,new yt(rt.ABORTED,"Firestore shutting down"))}}function jb(){return new gs(n=>bA(n),$h)}async function t1(n,t){const i=Lt(n);let a=3;const l=t.query;let c=i.queries.get(l);c?!c.ba()&&t.Da()&&(a=2):(c=new q2,a=t.Da()?0:1);try{switch(a){case 0:c.wa=await i.onListen(l,!0);break;case 1:c.wa=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(f){const p=Np(f,`Initialization of query '${co(t.query)}' failed`);return void t.onError(p)}i.queries.set(l,c),c.Sa.push(t),t.va(i.onlineState),c.wa&&t.Fa(c.wa)&&Vp(i)}async function e1(n,t){const i=Lt(n),a=t.query;let l=3;const c=i.queries.get(a);if(c){const f=c.Sa.indexOf(t);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function F2(n,t){const i=Lt(n);let a=!1;for(const l of t){const c=l.query,f=i.queries.get(c);if(f){for(const p of f.Sa)p.Fa(l)&&(a=!0);f.wa=l}}a&&Vp(i)}function Q2(n,t,i){const a=Lt(n),l=a.queries.get(t);if(l)for(const c of l.Sa)c.onError(i);a.queries.delete(t)}function Vp(n){n.Ca.forEach(t=>{t.next()})}var Qm,Lb;(Lb=Qm||(Qm={})).Ma="default",Lb.Cache="cache";class n1{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const l of t.docChanges)l.type!==3&&a.push(l);t=new Do(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=Do.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Qm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(t){this.key=t}}class i1{constructor(t){this.key=t}}class Y2{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ft(),this.mutatedKeys=Ft(),this.eu=_A(t),this.tu=new yo(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new Ob,l=i?i.tu:this.tu;let c=i?i.mutatedKeys:this.mutatedKeys,f=l,p=!1;const y=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,g=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((_,T)=>{const S=l.get(_),M=Hh(this.query,T)?T:null,G=!!S&&this.mutatedKeys.has(S.key),K=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let z=!1;S&&M?S.data.isEqual(M.data)?G!==K&&(a.track({type:3,doc:M}),z=!0):this.su(S,M)||(a.track({type:2,doc:M}),z=!0,(y&&this.eu(M,y)>0||g&&this.eu(M,g)<0)&&(p=!0)):!S&&M?(a.track({type:0,doc:M}),z=!0):S&&!M&&(a.track({type:1,doc:S}),z=!0,(y||g)&&(p=!0)),z&&(M?(f=f.add(M),c=K?c.add(_):c.delete(_)):(f=f.delete(_),c=c.delete(_)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),c=c.delete(_.key),a.track({type:1,doc:_})}return{tu:f,iu:a,Cs:p,mutatedKeys:c}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort((_,T)=>function(M,G){const K=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Dt(20277,{Rt:z})}};return K(M)-K(G)}(_.type,T.type)||this.eu(_.doc,T.doc)),this.ou(a),l=l??!1;const p=i&&!l?this._u():[],y=this.Xa.size===0&&this.current&&!l?1:0,g=y!==this.Za;return this.Za=y,f.length!==0||g?{snapshot:new Do(this.query,t.tu,c,f,t.mutatedKeys,y===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ob,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(i=>this.Ya=this.Ya.add(i)),t.modifiedDocuments.forEach(i=>{}),t.removedDocuments.forEach(i=>this.Ya=this.Ya.delete(i)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Ft(),this.tu.forEach(a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))});const i=[];return t.forEach(a=>{this.Xa.has(a)||i.push(new i1(a))}),this.Xa.forEach(a=>{t.has(a)||i.push(new r1(a))}),i}cu(t){this.Ya=t.Qs,this.Xa=Ft();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return Do.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Mp="SyncEngine";class K2{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class X2{constructor(t){this.key=t,this.hu=!1}}class Z2{constructor(t,i,a,l,c,f){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new gs(p=>bA(p),$h),this.Iu=new Map,this.Eu=new Set,this.du=new Te(St.comparator),this.Au=new Map,this.Ru=new Tp,this.Vu={},this.mu=new Map,this.fu=Co.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function W2(n,t,i=!0){const a=c1(n);let l;const c=a.Tu.get(t);return c?(a.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await a1(a,t,i,!0),l}async function J2(n,t){const i=c1(n);await a1(i,t,!0,!1)}async function a1(n,t,i,a){const l=await b2(n.localStore,Nr(t)),c=l.targetId,f=n.sharedClientState.addLocalQueryTarget(c,i);let p;return a&&(p=await tC(n,t,c,f==="current",l.resumeToken)),n.isPrimaryClient&&i&&YA(n.remoteStore,l),p}async function tC(n,t,i,a,l){n.pu=(T,S,M)=>async function(K,z,nt,J){let X=z.view.ru(nt);X.Cs&&(X=await Db(K.localStore,z.query,!1).then(({documents:R})=>z.view.ru(R,X)));const mt=J&&J.targetChanges.get(z.targetId),st=J&&J.targetMismatches.get(z.targetId)!=null,ut=z.view.applyChanges(X,K.isPrimaryClient,mt,st);return zb(K,z.targetId,ut.au),ut.snapshot}(n,T,S,M);const c=await Db(n.localStore,t,!0),f=new Y2(t,c.Qs),p=f.ru(c.documents),y=bu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",l),g=f.applyChanges(p,n.isPrimaryClient,y);zb(n,i,g.au);const _=new K2(t,i,f);return n.Tu.set(t,_),n.Iu.has(i)?n.Iu.get(i).push(t):n.Iu.set(i,[t]),g.snapshot}async function eC(n,t,i){const a=Lt(n),l=a.Tu.get(t),c=a.Iu.get(l.targetId);if(c.length>1)return a.Iu.set(l.targetId,c.filter(f=>!$h(f,t))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(l.targetId),a.sharedClientState.isActiveQueryTarget(l.targetId)||await Gm(a.localStore,l.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(l.targetId),i&&Rp(a.remoteStore,l.targetId),Ym(a,l.targetId)}).catch(Oo)):(Ym(a,l.targetId),await Gm(a.localStore,l.targetId,!0))}async function nC(n,t){const i=Lt(n),a=i.Tu.get(t),l=i.Iu.get(a.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),Rp(i.remoteStore,a.targetId))}async function rC(n,t,i){const a=cC(n);try{const l=await function(f,p){const y=Lt(f),g=me.now(),_=p.reduce((M,G)=>M.add(G.key),Ft());let T,S;return y.persistence.runTransaction("Locally write mutations","readwrite",M=>{let G=mi(),K=Ft();return y.Ns.getEntries(M,_).next(z=>{G=z,G.forEach((nt,J)=>{J.isValidDocument()||(K=K.add(nt))})}).next(()=>y.localDocuments.getOverlayedDocuments(M,G)).next(z=>{T=z;const nt=[];for(const J of p){const X=vR(J,T.get(J.key).overlayedDocument);X!=null&&nt.push(new va(J.key,X,hA(X.value.mapValue),Vr.exists(!0)))}return y.mutationQueue.addMutationBatch(M,g,nt,p)}).next(z=>{S=z;const nt=z.applyToLocalDocumentSet(T,K);return y.documentOverlayCache.saveOverlays(M,z.batchId,nt)})}).then(()=>({batchId:S.batchId,changes:EA(T)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),function(f,p,y){let g=f.Vu[f.currentUser.toKey()];g||(g=new Te(Gt)),g=g.insert(p,y),f.Vu[f.currentUser.toKey()]=g}(a,l.batchId,i),await Au(a,l.changes),await Kh(a.remoteStore)}catch(l){const c=Np(l,"Failed to persist write");i.reject(c)}}async function s1(n,t){const i=Lt(n);try{const a=await g2(i.localStore,t);t.targetChanges.forEach((l,c)=>{const f=i.Au.get(c);f&&(te(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f.hu=!0:l.modifiedDocuments.size>0?te(f.hu,14607):l.removedDocuments.size>0&&(te(f.hu,42227),f.hu=!1))}),await Au(i,a,t)}catch(a){await Oo(a)}}function Bb(n,t,i){const a=Lt(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach((c,f)=>{const p=f.view.va(t);p.snapshot&&l.push(p.snapshot)}),function(f,p){const y=Lt(f);y.onlineState=p;let g=!1;y.queries.forEach((_,T)=>{for(const S of T.Sa)S.va(p)&&(g=!0)}),g&&Vp(y)}(a.eventManager,t),l.length&&a.Pu.H_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function iC(n,t,i){const a=Lt(n);a.sharedClientState.updateQueryState(t,"rejected",i);const l=a.Au.get(t),c=l&&l.key;if(c){let f=new Te(St.comparator);f=f.insert(c,gn.newNoDocument(c,Vt.min()));const p=Ft().add(c),y=new Fh(Vt.min(),new Map,new Te(Gt),f,p);await s1(a,y),a.du=a.du.remove(c),a.Au.delete(t),Op(a)}else await Gm(a.localStore,t,!1).then(()=>Ym(a,t,i)).catch(Oo)}async function aC(n,t){const i=Lt(n),a=t.batch.batchId;try{const l=await p2(i.localStore,t);l1(i,a,null),o1(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await Au(i,l)}catch(l){await Oo(l)}}async function sC(n,t,i){const a=Lt(n);try{const l=await function(f,p){const y=Lt(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return y.mutationQueue.lookupMutationBatch(g,p).next(T=>(te(T!==null,37113),_=T.keys(),y.mutationQueue.removeMutationBatch(g,T))).next(()=>y.mutationQueue.performConsistencyCheck(g)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(g,_,p)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>y.localDocuments.getDocuments(g,_))})}(a.localStore,t);l1(a,t,i),o1(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await Au(a,l)}catch(l){await Oo(l)}}function o1(n,t){(n.mu.get(t)||[]).forEach(i=>{i.resolve()}),n.mu.delete(t)}function l1(n,t,i){const a=Lt(n);let l=a.Vu[a.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),a.Vu[a.currentUser.toKey()]=l}}function Ym(n,t,i=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(a=>{n.Ru.containsKey(a)||u1(n,a)})}function u1(n,t){n.Eu.delete(t.path.canonicalString());const i=n.du.get(t);i!==null&&(Rp(n.remoteStore,i),n.du=n.du.remove(t),n.Au.delete(i),Op(n))}function zb(n,t,i){for(const a of i)a instanceof r1?(n.Ru.addReference(a.key,t),oC(n,a)):a instanceof i1?(At(Mp,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||u1(n,a.key)):Dt(19791,{wu:a})}function oC(n,t){const i=t.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(At(Mp,"New document in limbo: "+i),n.Eu.add(a),Op(n))}function Op(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const i=new St(de.fromString(t)),a=n.fu.next();n.Au.set(a,new X2(i)),n.du=n.du.insert(i,a),YA(n.remoteStore,new ea(Nr(vp(i.path)),a,"TargetPurposeLimboResolution",zh.ce))}}async function Au(n,t,i){const a=Lt(n),l=[],c=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach((p,y)=>{f.push(a.pu(y,t,i).then(g=>{var _;if((g||i)&&a.isPrimaryClient){const T=g?!g.fromCache:(_=i==null?void 0:i.targetChanges.get(y.targetId))==null?void 0:_.current;a.sharedClientState.updateQueryState(y.targetId,T?"current":"not-current")}if(g){l.push(g);const T=Sp.As(y.targetId,g);c.push(T)}}))}),await Promise.all(f),a.Pu.H_(l),await async function(y,g){const _=Lt(y);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>at.forEach(g,S=>at.forEach(S.Es,M=>_.persistence.referenceDelegate.addReference(T,S.targetId,M)).next(()=>at.forEach(S.ds,M=>_.persistence.referenceDelegate.removeReference(T,S.targetId,M)))))}catch(T){if(!jo(T))throw T;At(xp,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const M=_.Ms.get(S),G=M.snapshotVersion,K=M.withLastLimboFreeSnapshotVersion(G);_.Ms=_.Ms.insert(S,K)}}}(a.localStore,c))}async function lC(n,t){const i=Lt(n);if(!i.currentUser.isEqual(t)){At(Mp,"User change. New user:",t.toKey());const a=await qA(i.localStore,t);i.currentUser=t,function(c,f){c.mu.forEach(p=>{p.forEach(y=>{y.reject(new yt(rt.CANCELLED,f))})}),c.mu.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Au(i,a.Ls)}}function uC(n,t){const i=Lt(n),a=i.Au.get(t);if(a&&a.hu)return Ft().add(a.key);{let l=Ft();const c=i.Iu.get(t);if(!c)return l;for(const f of c){const p=i.Tu.get(f);l=l.unionWith(p.view.nu)}return l}}function c1(n){const t=Lt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=s1.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=iC.bind(null,t),t.Pu.H_=F2.bind(null,t.eventManager),t.Pu.yu=Q2.bind(null,t.eventManager),t}function cC(n){const t=Lt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sC.bind(null,t),t}class Rh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return m2(this.persistence,new h2,t.initialUser,this.serializer)}Cu(t){return new HA(wp.mi,this.serializer)}Du(t){return new A2}async terminate(){var t,i;(t=this.gcScheduler)==null||t.stop(),(i=this.indexBackfillerScheduler)==null||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rh.provider={build:()=>new Rh};class hC extends Rh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){te(this.persistence.referenceDelegate instanceof Sh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new XR(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new HA(a=>Sh.mi(a,i),this.serializer)}}class Km{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Bb(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=lC.bind(null,this.syncEngine),await H2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new G2}()}createDatastore(t){const i=Qh(t.databaseInfo.databaseId),a=function(c){return new x2(c)}(t.databaseInfo);return function(c,f,p,y){return new k2(c,f,p,y)}(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return function(a,l,c,f,p){return new N2(a,l,c,f,p)}(this.localStore,this.datastore,t.asyncQueue,i=>Bb(this.syncEngine,i,0),function(){return Nb.v()?new Nb:new E2}())}createSyncEngine(t,i){return function(l,c,f,p,y,g,_){const T=new Z2(l,c,f,p,y,g);return _&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const c=Lt(l);At(ms,"RemoteStore shutting down."),c.Ea.add(5),await _u(c),c.Aa.shutdown(),c.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(i=this.eventManager)==null||i.terminate()}}Km.provider={build:()=>new Km};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):di("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout(()=>{this.muted||t(i)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="FirestoreClient";class fC{constructor(t,i,a,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=pn.UNAUTHENTICATED,this.clientId=fp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,async f=>{At(ma,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(a,f=>(At(ma,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=Np(i,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function ym(n,t){n.asyncQueue.verifyOperationInProgress(),At(ma,"Initializing OfflineComponentProvider");const i=n.configuration;await t.initialize(i);let a=i.initialUser;n.setCredentialChangeListener(async l=>{a.isEqual(l)||(await qA(t.localStore,l),a=l)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Pb(n,t){n.asyncQueue.verifyOperationInProgress();const i=await dC(n);At(ma,"Initializing OnlineComponentProvider"),await t.initialize(i,n.configuration),n.setCredentialChangeListener(a=>Mb(t.remoteStore,a)),n.setAppCheckTokenChangeListener((a,l)=>Mb(t.remoteStore,l)),n._onlineComponents=t}async function dC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){At(ma,"Using user provided OfflineComponentProvider");try{await ym(n,n._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===rt.FAILED_PRECONDITION||l.code===rt.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;wo("Error using user provided cache. Falling back to memory cache: "+i),await ym(n,new Rh)}}else At(ma,"Using default OfflineComponentProvider"),await ym(n,new hC(void 0));return n._offlineComponents}async function f1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(At(ma,"Using user provided OnlineComponentProvider"),await Pb(n,n._uninitializedComponentsProvider._online)):(At(ma,"Using default OnlineComponentProvider"),await Pb(n,new Km))),n._onlineComponents}function mC(n){return f1(n).then(t=>t.syncEngine)}async function Xm(n){const t=await f1(n),i=t.eventManager;return i.onListen=W2.bind(null,t.syncEngine),i.onUnlisten=eC.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=J2.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=nC.bind(null,t.syncEngine),i}function pC(n,t,i={}){const a=new sa;return n.asyncQueue.enqueueAndForget(async()=>function(c,f,p,y,g){const _=new h1({next:S=>{_.Nu(),f.enqueueAndForget(()=>e1(c,T)),S.fromCache&&y.source==="server"?g.reject(new yt(rt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new n1(p,_,{includeMetadataChanges:!0,qa:!0});return t1(c,T)}(await Xm(n),n.asyncQueue,t,i,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="firestore.googleapis.com",$b=!0;class Hb{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new yt(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=m1,this.ssl=$b}else this.host=t.host,this.ssl=t.ssl??$b;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=$A;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<YR)throw new yt(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ix("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d1(t.experimentalLongPollingOptions??{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new yt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new yt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new yt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xh{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new yt(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new yt(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hb(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Ax;switch(a.type){case"firstParty":return new Sx(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new yt(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=Ub.get(i);a&&(At("ComponentProvider","Removing Datastore"),Ub.delete(i),a.terminate())}(this),Promise.resolve()}}function gC(n,t,i,a={}){var g;n=hi(n,Xh);const l=up(t),c=n._getSettings(),f={...c,emulatorOptions:n._getEmulatorOptions()},p=`${t}:${i}`;l&&(Yw(`https://${p}`),Ww("Firestore",!0)),c.host!==m1&&c.host!==p&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...c,host:p,ssl:l,emulatorOptions:a};if(!ph(y,f)&&(n._setSettings(y),a.mockUserToken)){let _,T;if(typeof a.mockUserToken=="string")_=a.mockUserToken,T=pn.MOCK_USER;else{_=Kw(a.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const S=a.mockUserToken.sub||a.mockUserToken.user_id;if(!S)throw new yt(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new pn(S)}n._authCredentials=new Ex(new J_(_,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new pi(this.firestore,t,this._query)}}class Ue{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ue(this.firestore,t,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(yu(i,Ue._jsonSchema))return new Ue(t,a||null,new St(de.fromString(i.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Pe("string",Ue._jsonSchemaVersion),referencePath:Pe("string")};class oa extends pi{constructor(t,i,a){super(t,i,vp(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ue(this.firestore,null,new St(t))}withConverter(t){return new oa(this.firestore,t,this._path)}}function Ch(n,t,...i){if(n=Lr(n),tA("collection","path",t),n instanceof Xh){const a=de.fromString(t,...i);return nb(a),new oa(n,null,a)}{if(!(n instanceof Ue||n instanceof oa))throw new yt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(de.fromString(t,...i));return nb(a),new oa(n.firestore,null,a)}}function p1(n,t,...i){if(n=Lr(n),arguments.length===1&&(t=fp.newId()),tA("doc","path",t),n instanceof Xh){const a=de.fromString(t,...i);return eb(a),new Ue(n,null,new St(a))}{if(!(n instanceof Ue||n instanceof oa))throw new yt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(de.fromString(t,...i));return eb(a),new Ue(n.firestore,n instanceof oa?n.converter:null,new St(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="AsyncQueue";class Gb{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new FA(this,"async_queue_retry"),this._c=()=>{const a=gm();a&&At(qb,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=gm();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=gm();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const i=new sa;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!jo(t))throw t;At(qb,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const i=this.ac.then(()=>(this.rc=!0,t().catch(a=>{throw this.nc=a,this.rc=!1,di("INTERNAL UNHANDLED ERROR: ",Fb(a)),a}).then(a=>(this.rc=!1,a))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const l=Ip.createAndSchedule(this,t,i,a,c=>this.hc(c));return this.tc.push(l),l}uc(){this.nc&&Dt(47125,{Pc:Fb(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function Fb(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(n){return function(i,a){if(typeof i!="object"||i===null)return!1;const l=i;for(const c of a)if(c in l&&typeof l[c]=="function")return!0;return!1}(n,["next","error","complete"])}class ko extends Xh{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new Gb,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Gb(t),this._firestoreClient=void 0,await t}}}function yC(n,t){const i=typeof n=="object"?n:lx(),a=typeof n=="string"?n:bh,l=rx(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const c=Fw("firestore");c&&gC(l,...c)}return l}function jp(n){if(n._terminated)throw new yt(rt.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vC(n),n._firestoreClient}function vC(n){var a,l,c;const t=n._freezeSettings(),i=function(p,y,g,_){return new $x(p,y,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,d1(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((a=n._app)==null?void 0:a.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(l=t.localCache)!=null&&l._offlineComponentProvider&&((c=t.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new fC(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Jn(un.fromBase64String(t))}catch(i){throw new yt(rt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Jn(un.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(yu(t,Jn._jsonSchema))return Jn.fromBase64String(t.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:Pe("string",Jn._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new yt(rt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new yt(rt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new yt(rt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Gt(this._lat,t._lat)||Gt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Or._jsonSchemaVersion}}static fromJSON(t){if(yu(t,Or._jsonSchema))return new Or(t.latitude,t.longitude)}}Or._jsonSchemaVersion="firestore/geoPoint/1.0",Or._jsonSchema={type:Pe("string",Or._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,l){if(a.length!==l.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==l[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:jr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(yu(t,jr._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(i=>typeof i=="number"))return new jr(t.vectorValues);throw new yt(rt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jr._jsonSchemaVersion="firestore/vectorValue/1.0",jr._jsonSchema={type:Pe("string",jr._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=/^__.*__$/;class _C{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new va(t,this.data,this.fieldMask,i,this.fieldTransforms):new vu(t,this.data,i,this.fieldTransforms)}}class g1{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new va(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function y1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Dt(40011,{Ac:n})}}class Lp{constructor(t,i,a,l,c,f){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Lp({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var l;const i=(l=this.path)==null?void 0:l.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){var l;const i=(l=this.path)==null?void 0:l.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Dh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(y1(this.Ac)&&bC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class AC{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||Qh(t)}Cc(t,i,a,l=!1){return new Lp({Ac:t,methodName:i,Dc:a,path:on.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bp(n){const t=n._freezeSettings(),i=Qh(n._databaseId);return new AC(n._databaseId,!!t.ignoreUndefinedProperties,i)}function EC(n,t,i,a,l,c={}){const f=n.Cc(c.merge||c.mergeFields?2:0,t,i,l);Pp("Data must be an object, but it was:",f,a);const p=v1(a,f);let y,g;if(c.merge)y=new zn(f.fieldMask),g=f.fieldTransforms;else if(c.mergeFields){const _=[];for(const T of c.mergeFields){const S=Zm(t,T,i);if(!f.contains(S))throw new yt(rt.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);_1(_,S)||_.push(S)}y=new zn(_),g=f.fieldTransforms.filter(T=>y.covers(T.field))}else y=null,g=f.fieldTransforms;return new _C(new Cn(p),y,g)}class Jh extends Wh{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Jh}}class zp extends Wh{_toFieldTransform(t){return new mR(t.path,new du)}isEqual(t){return t instanceof zp}}function TC(n,t,i,a){const l=n.Cc(1,t,i);Pp("Data must be an object, but it was:",l,a);const c=[],f=Cn.empty();ya(a,(y,g)=>{const _=Up(t,y,i);g=Lr(g);const T=l.yc(_);if(g instanceof Jh)c.push(_);else{const S=Eu(g,T);S!=null&&(c.push(_),f.set(_,S))}});const p=new zn(c);return new g1(f,p,l.fieldTransforms)}function wC(n,t,i,a,l,c){const f=n.Cc(1,t,i),p=[Zm(t,a,i)],y=[l];if(c.length%2!=0)throw new yt(rt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<c.length;S+=2)p.push(Zm(t,c[S])),y.push(c[S+1]);const g=[],_=Cn.empty();for(let S=p.length-1;S>=0;--S)if(!_1(g,p[S])){const M=p[S];let G=y[S];G=Lr(G);const K=f.yc(M);if(G instanceof Jh)g.push(M);else{const z=Eu(G,K);z!=null&&(g.push(M),_.set(M,z))}}const T=new zn(g);return new g1(_,T,f.fieldTransforms)}function SC(n,t,i,a=!1){return Eu(i,n.Cc(a?4:3,t))}function Eu(n,t){if(b1(n=Lr(n)))return Pp("Unsupported field value:",t,n),v1(n,t);if(n instanceof Wh)return function(a,l){if(!y1(l.Ac))throw l.Sc(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${a._methodName}() is not currently supported inside arrays`);const c=a._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(a,l){const c=[];let f=0;for(const p of a){let y=Eu(p,l.wc(f));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),f++}return{arrayValue:{values:c}}}(n,t)}return function(a,l){if((a=Lr(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return hR(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const c=me.fromDate(a);return{timestampValue:wh(l.serializer,c)}}if(a instanceof me){const c=new me(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:wh(l.serializer,c)}}if(a instanceof Or)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Jn)return{bytesValue:OA(l.serializer,a._byteString)};if(a instanceof Ue){const c=l.databaseId,f=a.firestore._databaseId;if(!f.isEqual(c))throw l.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Ep(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof jr)return function(f,p){return{mapValue:{fields:{[uA]:{stringValue:cA},[_h]:{arrayValue:{values:f.toArray().map(g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return bp(p.serializer,g)})}}}}}}(a,l);throw l.Sc(`Unsupported field value: ${Bh(a)}`)}(n,t)}function v1(n,t){const i={};return rA(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ya(n,(a,l)=>{const c=Eu(l,t.mc(a));c!=null&&(i[a]=c)}),{mapValue:{fields:i}}}function b1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof Or||n instanceof Jn||n instanceof Ue||n instanceof Wh||n instanceof jr)}function Pp(n,t,i){if(!b1(i)||!eA(i)){const a=Bh(i);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function Zm(n,t,i){if((t=Lr(t))instanceof Zh)return t._internalPath;if(typeof t=="string")return Up(n,t);throw Dh("Field path arguments must be of type string or ",n,!1,void 0,i)}const xC=new RegExp("[~\\*/\\[\\]]");function Up(n,t,i){if(t.search(xC)>=0)throw Dh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new Zh(...t.split("."))._internalPath}catch{throw Dh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function Dh(n,t,i,a,l){const c=a&&!a.isEmpty(),f=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(c||f)&&(y+=" (found",c&&(y+=` in field ${a}`),f&&(y+=` in document ${l}`),y+=")"),new yt(rt.INVALID_ARGUMENT,p+n+y)}function _1(n,t){return n.some(i=>i.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(t,i,a,l,c){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new RC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field($p("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class RC extends A1{data(){return super.data()}}function $p(n,t){return typeof t=="string"?Up(n,t):t instanceof Zh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new yt(rt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class qp extends Hp{}function T1(n,t,...i){let a=[];t instanceof Hp&&a.push(t),a=a.concat(i),function(c){const f=c.filter(y=>y instanceof Fp).length,p=c.filter(y=>y instanceof Gp).length;if(f>1||f>0&&p>0)throw new yt(rt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a);for(const l of a)n=l._apply(n);return n}class Gp extends qp{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new Gp(t,i,a)}_apply(t){const i=this._parse(t);return S1(t._query,i),new pi(t.firestore,t.converter,Pm(t._query,i))}_parse(t){const i=Bp(t.firestore);return function(c,f,p,y,g,_,T){let S;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new yt(rt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){Kb(T,_);const G=[];for(const K of T)G.push(Yb(y,c,K));S={arrayValue:{values:G}}}else S=Yb(y,c,T)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||Kb(T,_),S=SC(p,f,T,_==="in"||_==="not-in");return ze.create(g,_,S)}(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class Fp extends Hp{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new Fp(t,i)}_parse(t){const i=this._queryConstraints.map(a=>a._parse(t)).filter(a=>a.getFilters().length>0);return i.length===1?i[0]:fr.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:(function(l,c){let f=l;const p=c.getFlattenedFilters();for(const y of p)S1(f,y),f=Pm(f,y)}(t._query,i),new pi(t.firestore,t.converter,Pm(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qp extends qp{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new Qp(t,i)}_apply(t){const i=function(l,c,f){if(l.startAt!==null)throw new yt(rt.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(l.endAt!==null)throw new yt(rt.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fu(c,f)}(t._query,this._field,this._direction);return new pi(t.firestore,t.converter,function(l,c){const f=l.explicitOrderBy.concat([c]);return new Lo(l.path,l.collectionGroup,f,l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t._query,i))}}function w1(n,t="asc"){const i=t,a=$p("orderBy",n);return Qp._create(a,i)}class Yp extends qp{constructor(t,i,a){super(),this.type=t,this._limit=i,this._limitType=a}static _create(t,i,a){return new Yp(t,i,a)}_apply(t){return new pi(t.firestore,t.converter,Eh(t._query,this._limit,this._limitType))}}function CC(n){return Yp._create("limit",n,"F")}function Yb(n,t,i){if(typeof(i=Lr(i))=="string"){if(i==="")throw new yt(rt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vA(t)&&i.indexOf("/")!==-1)throw new yt(rt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(de.fromString(i));if(!St.isDocumentKey(a))throw new yt(rt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return cb(n,new St(a))}if(i instanceof Ue)return cb(n,i._key);throw new yt(rt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bh(i)}.`)}function Kb(n,t){if(!Array.isArray(n)||n.length===0)throw new yt(rt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function S1(n,t){const i=function(l,c){for(const f of l)for(const p of f.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null}(n.filters,function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(i!==null)throw i===t.op?new yt(rt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new yt(rt.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class DC{convertValue(t,i="none"){switch(fa(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ha(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw Dt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return ya(t,(l,c)=>{a[l]=this.convertValue(c,i)}),a}convertVectorValue(t){var a,l,c;const i=(c=(l=(a=t.fields)==null?void 0:a[_h].arrayValue)==null?void 0:l.values)==null?void 0:c.map(f=>Me(f.doubleValue));return new jr(i)}convertGeoPoint(t){return new Or(Me(t.latitude),Me(t.longitude))}convertArray(t,i){return(t.values||[]).map(a=>this.convertValue(a,i))}convertServerTimestamp(t,i){switch(i){case"previous":const a=Uh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(uu(t));default:return null}}convertTimestamp(t){const i=ca(t);return new me(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=de.fromString(t);te(UA(a),9688,{name:t});const l=new cu(a.get(1),a.get(3)),c=new St(a.popFirst(5));return l.isEqual(i)||di(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(n,t,i){let a;return a=n?n.toFirestore(t):t,a}class Yl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class us extends A1{constructor(t,i,a,l,c,f){super(t,i,a,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new uh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field($p("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new yt(rt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=us._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:Pe("string",us._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class uh extends us{data(t={}){return super.data(t)}}class cs{constructor(t,i,a,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new Yl(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach(a=>{t.call(i,new uh(this._firestore,this._userDataWriter,a.key,a,new Yl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new yt(rt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(p=>{const y=new uh(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Yl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const y=new uh(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Yl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let g=-1,_=-1;return p.type!==0&&(g=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),_=f.indexOf(p.doc.key)),{type:IC(p.type),doc:y,oldIndex:g,newIndex:_}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new yt(rt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=cs._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=fp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach(c=>{c._document!==null&&(i.push(c._document),a.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function IC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Dt(61501,{type:n})}}cs._jsonSchemaVersion="firestore/querySnapshot/1.0",cs._jsonSchema={type:Pe("string",cs._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class Kp extends DC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Jn(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Ue(this.firestore,null,i)}}function NC(n){n=hi(n,pi);const t=hi(n.firestore,ko),i=jp(t),a=new Kp(t);return E1(n._query),pC(i,n._query).then(l=>new cs(t,a,n,l))}function VC(n,t,i,...a){n=hi(n,Ue);const l=hi(n.firestore,ko),c=Bp(l);let f;return f=typeof(t=Lr(t))=="string"||t instanceof Zh?wC(c,"updateDoc",n._key,t,i,a):TC(c,"updateDoc",n._key,t),C1(l,[f.toMutation(n._key,Vr.exists(!0))])}function x1(n,t){const i=hi(n.firestore,ko),a=p1(n),l=kC(n.converter,t);return C1(i,[EC(Bp(n.firestore),"addDoc",a._key,l,n.converter!==null,{}).toMutation(a._key,Vr.exists(!1))]).then(()=>a)}function R1(n,...t){var y,g,_;n=Lr(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Qb(t[a])||(i=t[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Qb(t[a])){const T=t[a];t[a]=(y=T.next)==null?void 0:y.bind(T),t[a+1]=(g=T.error)==null?void 0:g.bind(T),t[a+2]=(_=T.complete)==null?void 0:_.bind(T)}let c,f,p;if(n instanceof Ue)f=hi(n.firestore,ko),p=vp(n._key.path),c={next:T=>{t[a]&&t[a](MC(f,n,T))},error:t[a+1],complete:t[a+2]};else{const T=hi(n,pi);f=hi(T.firestore,ko),p=T._query;const S=new Kp(f);c={next:M=>{t[a]&&t[a](new cs(f,S,T,M))},error:t[a+1],complete:t[a+2]},E1(n._query)}return function(S,M,G,K){const z=new h1(K),nt=new n1(M,z,G);return S.asyncQueue.enqueueAndForget(async()=>t1(await Xm(S),nt)),()=>{z.Nu(),S.asyncQueue.enqueueAndForget(async()=>e1(await Xm(S),nt))}}(jp(f),p,l,c)}function C1(n,t){return function(a,l){const c=new sa;return a.asyncQueue.enqueueAndForget(async()=>rC(await mC(a),l,c)),c.promise}(jp(n),t)}function MC(n,t,i){const a=i.docs.get(t._key),l=new Kp(n);return new us(n,l,t._key,a,new Yl(i.hasPendingWrites,i.fromCache),t.converter)}function OC(){return new zp("serverTimestamp")}(function(t,i=!0){(function(l){Mo=l})(ox),yh(new su("firestore",(a,{instanceIdentifier:l,options:c})=>{const f=a.getProvider("app").getImmediate(),p=new ko(new Tx(a.getProvider("auth-internal")),new xx(f,a.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new yt(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cu(g.options.projectId,_)}(f,l),f);return c={useFetchStreams:i,...c},p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),go(Zv,Wv,t),go(Zv,Wv,"esm2020")})();const jC={apiKey:"AIzaSyAwhEf5jXYHv9ygtI2sNa79nzrb5gjnCi4",authDomain:"portfoliobackend-2c054.firebaseapp.com",projectId:"portfoliobackend-2c054",storageBucket:"portfoliobackend-2c054.firebasestorage.app",messagingSenderId:"938269672383",appId:"1:938269672383:web:fc52538affb639def2570a"},LC=H_(jC),gu=yC(LC);var BC=`
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

`;const Xp="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Zp="inset 2px 2px 3px rgba(0,0,0,0.2)",dr=()=>bt`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,mr=({background:n="material",color:t="materialText"}={})=>bt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:i})=>i[n]};
  color: ${({theme:i})=>i[t]};
`,Tu=({mainColor:n="black",secondaryColor:t="transparent",pixelSize:i=2})=>bt`
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
  background-color: ${t};
  background-size: ${`${i*2}px ${i*2}px`};
  background-position: 0 0, ${`${i}px ${i}px`};
`,ps=()=>bt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:t})=>n?t.flatLight:t.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,lo={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},zC=({theme:n,topLeftInner:t,bottomRightInner:i,hasShadow:a=!1,hasInsetShadow:l=!1})=>[a?Xp:!1,l?Zp:!1,t!==null?`inset 1px 1px 0px 1px ${n[t]}`:!1,i!==null?`inset -1px -1px 0 1px ${n[i]}`:!1].filter(Boolean).join(", "),Re=({invert:n=!1,style:t="button"}={})=>{const i={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return bt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:a})=>a[lo[t][i.topLeftOuter]]};
    border-top-color: ${({theme:a})=>a[lo[t][i.topLeftOuter]]};
    border-right-color: ${({theme:a})=>a[lo[t][i.bottomRightOuter]]};
    border-bottom-color: ${({theme:a})=>a[lo[t][i.bottomRightOuter]]};
    box-shadow: ${({theme:a,shadow:l})=>zC({theme:a,topLeftInner:lo[t][i.topLeftInner],bottomRightInner:lo[t][i.bottomRightInner],hasShadow:l})};
  `},Io=()=>bt`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,PC=n=>Buffer.from(n).toString("base64"),UC=typeof btoa<"u"?btoa:PC,Xc=(n,t=0)=>{const i=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${UC(i)})`},Wp=(n="default")=>bt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Tu({mainColor:n==="flat"?t.flatLight:t.material,secondaryColor:n==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${mr()}
    ${n==="flat"?ps():Re({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${mr()}
    ${n==="flat"?ps():Re({style:"window"})}
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
    ${n==="default"?Re({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Xc(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Xc(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Xc(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Xc(t.materialText,0)};
  }
`,$C=lt.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,HC=B.forwardRef(({children:n,underline:t=!0,...i},a)=>Q.createElement($C,{ref:a,underline:t,...i},n));HC.displayName="Anchor";const qC=lt.header`
  ${Re()};
  ${mr()};

  position: ${n=>{var t;return(t=n.position)!==null&&t!==void 0?t:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,D1=B.forwardRef(({children:n,fixed:t=!0,position:i="fixed",...a},l)=>Q.createElement(qC,{fixed:t,position:t!==!1?i:void 0,ref:l,...a},n));D1.displayName="AppBar";const vs=()=>{};function os(n,t,i){return i!==null&&n>i?i:t!==null&&n<t?t:n}function GC(n){if(Math.abs(n)<1){const i=n.toExponential().split("e-"),a=i[0].split(".")[1];return(a?a.length:0)+parseInt(i[1],10)}const t=n.toString().split(".")[1];return t?t.length:0}function Xb(n,t,i){const a=Math.round((n-i)/t)*t+i;return Number(a.toFixed(GC(t)))}function pa(n){return typeof n=="number"?`${n}px`:n}const FC=lt.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:t})=>!n&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,QC=lt.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,YC=B.forwardRef(({alt:n="",children:t,noBorder:i=!1,size:a=35,square:l=!1,src:c,...f},p)=>Q.createElement(FC,{noBorder:i,ref:p,size:pa(a),square:l,src:c,...f},c?Q.createElement(QC,{src:c,alt:n}):t));YC.displayName="Avatar";const ln={sm:"28px",md:"36px",lg:"44px"},KC=bt`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>ln[n]};
  width: ${({fullWidth:n,size:t="md",square:i})=>n?"100%":i?ln[t]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:t})=>n&&!t&&"2px"};
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
`,tf=lt.button`
  ${({active:n,disabled:t,primary:i,theme:a,variant:l})=>l==="flat"?bt`
          ${ps()}
          ${i?`
          border: 2px solid ${a.checkmark};
            outline: 2px solid ${a.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${a.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!t&&Io}
            outline-offset: -4px;
          }
        `:l==="menu"||l==="thin"?bt`
          ${mr()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!n&&Re({style:"buttonThin"})}
          }
          &:active {
            ${!t&&Re({style:"buttonThinPressed"})}
          }
          ${n&&Re({style:"buttonThinPressed"})}
          ${t&&dr()}
        `:bt`
          ${mr()};
          border: none;
          ${t&&dr()}
          ${n?Tu({mainColor:a.material,secondaryColor:a.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${i?bt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${a.borderDarkest};
                `:bt`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Re(n?{style:l==="raised"?"window":"button",invert:!0}:{style:l==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&Re({style:l==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!t&&Io}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${KC}
`,ce=B.forwardRef(({onClick:n,disabled:t=!1,children:i,type:a="button",fullWidth:l=!1,size:c="md",square:f=!1,active:p=!1,onTouchStart:y=vs,primary:g=!1,variant:_="default",...T},S)=>Q.createElement(tf,{active:p,disabled:t,$disabled:t,fullWidth:l,onClick:t?void 0:n,onTouchStart:y,primary:g,ref:S,size:c,square:f,type:a,variant:_,...T},i));ce.displayName="Button";function ga({defaultValue:n,onChange:t,onChangePropName:i="onChange",readOnly:a,value:l,valuePropName:c="value"}){const f=l!==void 0,[p,y]=B.useState(n),g=B.useCallback(_=>{f||y(_)},[f]);if(f&&typeof t!="function"&&!a){const _=`Warning: You provided a \`${c}\` prop to a component without an \`${i}\` handler.${c==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${i}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${i}\` function that updates \`${c}\`.`}`;console.warn(_)}return[f?l:p,g]}const Wm=lt.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>ln[n.size]};
  width: ${n=>n.square?ln[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>ln[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:t})=>!t&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&dr()}
`,Kl=B.forwardRef(({size:n="lg",disabled:t,square:i,children:a,onClick:l,primary:c,...f},p)=>Q.createElement(Wm,{$disabled:t,size:n,square:i,onClick:t?void 0:l,primary:c,role:"menuitem",ref:p,"aria-disabled":t,...f},a));Kl.displayName="MenuListItem";const k1=lt.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Re({style:"window"})}
  ${mr()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;k1.displayName="MenuList";const zr=20,kh=lt.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${zr}px;
  height: ${zr}px;
  opacity: 0;
  z-index: -1;
`,Jp=lt.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&dr()}

  ${Wm} & {
    margin: 0;
    height: 100%;
  }
  ${Wm}:hover & {
    ${({$disabled:n,theme:t})=>!n&&bt`
        color: ${t.materialTextInvert};
      `};
  }
`,tg=lt.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${kh}:focus ~ & {
    ${Io}
  }
  ${kh}:not(:disabled) ~ &:active {
    ${Io}
  }
`,Pr=lt.div`
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
    ${n=>n.shadow&&`box-shadow:${Zp};`}
  }
`,XC=lt.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Wp()}
`,Ir=B.forwardRef(({children:n,shadow:t=!0,...i},a)=>Q.createElement(Pr,{ref:a,shadow:t,...i},Q.createElement(XC,null,n)));Ir.displayName="ScrollView";const I1=bt`
  width: ${zr}px;
  height: ${zr}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ZC=lt(Pr)`
  ${I1}
  width: ${zr}px;
  height: ${zr}px;
  background: ${({$disabled:n,theme:t})=>n?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,WC=lt.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:t})=>n?t.flatLight:t.canvas};
  ${I1}
  width: ${zr-4}px;
  height: ${zr-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:t})=>n?t.flatLight:t.canvas};
`,JC=lt.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:n,theme:t})=>n?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,tD=lt.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:t})=>Tu({mainColor:n?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,eD={flat:WC,default:ZC},nD=B.forwardRef(({checked:n,className:t="",defaultChecked:i=!1,disabled:a=!1,indeterminate:l=!1,label:c="",onChange:f=vs,style:p={},value:y,variant:g="default",..._},T)=>{var S;const[M,G]=ga({defaultValue:i,onChange:f,readOnly:(S=_.readOnly)!==null&&S!==void 0?S:a,value:n}),K=B.useCallback(J=>{const X=J.target.checked;G(X),f(J)},[f,G]),z=eD[g];let nt=null;return l?nt=tD:M&&(nt=JC),Q.createElement(Jp,{$disabled:a,className:t,style:p},Q.createElement(kh,{disabled:a,onChange:a?void 0:K,readOnly:a,type:"checkbox",value:y,checked:M,"data-indeterminate":l,ref:T,..._}),Q.createElement(z,{$disabled:a,role:"presentation"},nt&&Q.createElement(nt,{$disabled:a,variant:g})),c&&Q.createElement(tg,null,c))});nD.displayName="Checkbox";const ci=lt.div`
  ${({orientation:n,theme:t,size:i="100%"})=>n==="vertical"?`
    height: ${pa(i)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${pa(i)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;ci.displayName="Separator";const rD=lt(tf)`
  padding-left: 8px;
`,iD=lt(ci)`
  height: 21px;
  position: relative;
  top: 0;
`,N1=lt.input`
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
`,aD=lt.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?bt`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:bt`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${N1}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Io}
    outline-offset: -8px;
  }
`,sD=lt.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?bt`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:bt`
          border-top: 6px solid ${({theme:t})=>t.materialText};
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
`,oD=B.forwardRef(({value:n,defaultValue:t,onChange:i=vs,disabled:a=!1,variant:l="default",...c},f)=>{var p;const[y,g]=ga({defaultValue:t,onChange:i,readOnly:(p=c.readOnly)!==null&&p!==void 0?p:a,value:n}),_=T=>{const S=T.target.value;g(S),i(T)};return Q.createElement(rD,{disabled:a,as:"div",variant:l,size:"md"},Q.createElement(N1,{onChange:_,readOnly:a,disabled:a,value:y??"#008080",type:"color",ref:f,...c}),Q.createElement(aD,{$disabled:a,color:y??"#008080",role:"presentation"}),l==="default"&&Q.createElement(iD,{orientation:"vertical"}),Q.createElement(sD,{$disabled:a,variant:l}))});oD.displayName="ColorInput";const lD=lt.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>bt`
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
      ${Tu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,Zb=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],uD=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function cD({digit:n=0,pixelSize:t=2,...i}){const a=uD[Number(n)].map((l,c)=>l?`${Zb[c]} active`:Zb[c]);return Q.createElement(lD,{pixelSize:t,...i},a.map((l,c)=>Q.createElement("span",{className:l,key:c})))}const hD=lt.div`
  ${Re({style:"status"})}
  display: inline-flex;
  background: #000000;
`,fD={sm:1,md:2,lg:3,xl:4},dD=B.forwardRef(({value:n=0,minLength:t=3,size:i="md",...a},l)=>{const c=B.useMemo(()=>n.toString().padStart(t,"0").split(""),[t,n]);return Q.createElement(hD,{ref:l,...a},c.map((f,p)=>Q.createElement(cD,{digit:f,pixelSize:fD[i],key:p})))});dD.displayName="Counter";const V1=bt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${ln.md};
`,mD=lt(Pr).attrs({"data-testid":"variant-default"})`
  ${V1}
  background: ${({$disabled:n,theme:t})=>n?t.material:t.canvas};
`,pD=lt.div.attrs({"data-testid":"variant-flat"})`
  ${ps()}
  ${V1}
  position: relative;
`,M1=bt`
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
  ${({disabled:n,variant:t})=>t!=="flat"&&n&&dr()}
`,gD=lt.input`
  ${M1}
  padding: 0 8px;
`,yD=lt.textarea`
  ${M1}
  padding: 8px;
  resize: none;
  ${({variant:n})=>Wp(n)}
`,la=B.forwardRef(({className:n,disabled:t=!1,fullWidth:i,onChange:a=vs,shadow:l=!0,style:c,variant:f="default",...p},y)=>{const g=f==="flat"?pD:mD,_=B.useMemo(()=>{var T;return p.multiline?Q.createElement(yD,{disabled:t,onChange:t?void 0:a,readOnly:t,ref:y,variant:f,...p}):Q.createElement(gD,{disabled:t,onChange:t?void 0:a,readOnly:t,ref:y,type:(T=p.type)!==null&&T!==void 0?T:"text",variant:f,...p})},[t,a,p,y,f]);return Q.createElement(g,{className:n,fullWidth:i,$disabled:t,shadow:l,style:c},_)});la.displayName="TextInput";const vD=lt.div`
  display: inline-flex;
  align-items: center;
`,Jm=lt(ce)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?bt`
          height: calc(50% - 1px);
        `:bt`
          height: 50%;
        `}
`,bD=lt.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?bt`
          height: calc(${ln.md} - 4px);
        `:bt`
          height: ${ln.md};
          margin-left: 2px;
        `}
`,Wb=lt.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?bt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:bt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Jm}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?bt`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:bt`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,O1=B.forwardRef(({className:n,defaultValue:t,disabled:i=!1,max:a,min:l,onChange:c,readOnly:f,step:p=1,style:y,value:g,variant:_="default",width:T,...S},M)=>{const[G,K]=ga({defaultValue:t,onChange:c,readOnly:f,value:g}),z=B.useCallback(ut=>{const R=parseFloat(ut.target.value);K(R)},[K]),nt=B.useCallback(ut=>{const R=os(parseFloat(((G??0)+ut).toFixed(2)),l??null,a??null);K(R),c==null||c(R)},[a,l,c,K,G]),J=B.useCallback(()=>{G!==void 0&&(c==null||c(G))},[c,G]),X=B.useCallback(()=>{nt(p)},[nt,p]),mt=B.useCallback(()=>{nt(-p)},[nt,p]),st=_==="flat"?"flat":"raised";return Q.createElement(vD,{className:n,style:{...y,width:T!==void 0?pa(T):"auto"},...S},Q.createElement(la,{value:G,variant:_,onChange:z,disabled:i,type:"number",readOnly:f,ref:M,fullWidth:!0,onBlur:J}),Q.createElement(bD,{variant:_},Q.createElement(Jm,{"data-testid":"increment",variant:st,disabled:i||f,onClick:X},Q.createElement(Wb,{invert:!0})),Q.createElement(Jm,{"data-testid":"decrement",variant:st,disabled:i||f,onClick:mt},Q.createElement(Wb,null))))});O1.displayName="NumberInput";function _D(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let i=0;i<10;i+=1)t+=n[Math.floor(Math.random()*n.length)];return t}const j1=n=>B.useMemo(()=>_D(),[n]),L1=bt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,B1=bt`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,eg=lt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,AD=lt.div`
  ${L1}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${eg}:focus & {
    ${B1}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,z1=bt`
  height: ${ln.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:t})=>n?dr():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,ED=lt(Pr)`
  ${z1}
  background: ${({$disabled:n=!1,theme:t})=>n?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,TD=lt.div`
  ${ps()}
  ${z1}
  background: ${({$disabled:n=!1,theme:t})=>n?t.flatLight:t.canvas};
`,wD=lt.select`
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
  ${L1}
  cursor: pointer;
  &:disabled {
    ${dr()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,P1=lt(tf).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?bt`
          height: 100%;
          margin-right: 0;
        `:bt`
          height: 100%;
        `}
  ${({native:n=!1,variant:t="default"})=>n&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:t=!1})=>n||t?"none":"auto"}
`,SD=lt.span`
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
    ${({$disabled:n=!1,theme:t})=>n?t.materialTextDisabled:t.materialText};
  ${({$disabled:n=!1,theme:t})=>n&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${P1}:active & {
    margin-top: 2px;
  }
`,xD=lt.ul`
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
  box-shadow: ${Xp};
  ${({variant:n="default"})=>n==="flat"?bt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:bt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:n="default"})=>Wp(n)}
`,RD=lt.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ln.md} - 4px);
  line-height: calc(${ln.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?B1:""}
  user-select: none;
`,CD=[],U1=({className:n,defaultValue:t,disabled:i,native:a,onChange:l,options:c=CD,readOnly:f,style:p,value:y,variant:g,width:_})=>{var T;const S=B.useMemo(()=>c.filter(Boolean),[c]),[M,G]=ga({defaultValue:t??((T=S==null?void 0:S[0])===null||T===void 0?void 0:T.value),onChange:l,readOnly:f,value:y}),K=!(i||f),z=B.useMemo(()=>({className:n,style:{...p,width:_}}),[n,p,_]),nt=B.useMemo(()=>Q.createElement(P1,{as:"div","data-testid":"select-button",$disabled:i,native:a,tabIndex:-1,variant:g==="flat"?"flat":"raised"},Q.createElement(SD,{"data-testid":"select-icon",$disabled:i})),[i,a,g]),J=B.useMemo(()=>g==="flat"?TD:ED,[g]);return B.useMemo(()=>({isEnabled:K,options:S,value:M,setValue:G,wrapperProps:z,DropdownButton:nt,Wrapper:J}),[nt,J,K,S,G,M,z])},DD={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},kD=1e3,ID=({onBlur:n,onChange:t,onClose:i,onFocus:a,onKeyDown:l,onMouseDown:c,onOpen:f,open:p,options:y,readOnly:g,value:_,selectRef:T,setValue:S,wrapperRef:M})=>{const G=B.useRef(null),K=B.useRef([]),z=B.useRef(0),nt=B.useRef(0),J=B.useRef(),X=B.useRef("search"),mt=B.useRef(""),st=B.useRef(),[ut,R]=ga({defaultValue:!1,onChange:f,onChangePropName:"onOpen",readOnly:g,value:p,valuePropName:"open"}),x=B.useMemo(()=>{const ot=y.findIndex(Nt=>Nt.value===_);return z.current=os(ot,0,null),y[ot]},[y,_]),[D,V]=B.useState(y[0]),N=B.useCallback(ot=>{const Nt=G.current,Ot=K.current[ot];if(!Ot||!Nt){J.current=ot;return}J.current=void 0;const Pt=Nt.clientHeight,Xt=Nt.scrollTop,ye=Nt.scrollTop+Pt,_e=Ot.offsetTop,Fe=Ot.offsetHeight,ve=Ot.offsetTop+Ot.offsetHeight;_e<Xt&&Nt.scrollTo(0,_e),ve>ye&&Nt.scrollTo(0,_e-Pt+Fe),Ot.focus({preventScroll:!0})},[G]),j=B.useCallback((ot,{scroll:Nt}={})=>{var Ot;const Pt=y.length-1;let Xt;switch(ot){case"first":{Xt=0;break}case"last":{Xt=Pt;break}case"next":{Xt=os(nt.current+1,0,Pt);break}case"previous":{Xt=os(nt.current-1,0,Pt);break}case"selected":{Xt=os((Ot=z.current)!==null&&Ot!==void 0?Ot:0,0,Pt);break}default:Xt=ot}nt.current=Xt,V(y[Xt]),Nt&&N(Xt)},[nt,y,N]),C=B.useCallback(({fromEvent:ot})=>{R(!0),j("selected",{scroll:!0}),f==null||f({fromEvent:ot})},[j,f,R]),Mt=B.useCallback(()=>{X.current="search",mt.current="",clearTimeout(st.current)},[]),vt=B.useCallback(({focusSelect:ot,fromEvent:Nt})=>{var Ot;i==null||i({fromEvent:Nt}),R(!1),V(y[0]),Mt(),J.current=void 0,ot&&((Ot=T.current)===null||Ot===void 0||Ot.focus())},[Mt,i,y,T,R]),F=B.useCallback(({fromEvent:ot})=>{ut?vt({focusSelect:!1,fromEvent:ot}):C({fromEvent:ot})},[vt,C,ut]),ht=B.useCallback((ot,{fromEvent:Nt})=>{z.current!==ot&&(z.current=ot,S(y[ot].value),t==null||t(y[ot],{fromEvent:Nt}))},[t,y,S]),ft=B.useCallback(({focusSelect:ot,fromEvent:Nt})=>{ht(nt.current,{fromEvent:Nt}),vt({focusSelect:ot,fromEvent:Nt})},[vt,ht]),Tt=B.useCallback((ot,{fromEvent:Nt,select:Ot})=>{var Pt;switch(X.current==="cycleFirstLetter"&&ot!==mt.current&&(X.current="search"),ot===mt.current?X.current="cycleFirstLetter":mt.current+=ot,X.current){case"search":{let Xt=y.findIndex(ye=>{var _e;return((_e=ye.label)===null||_e===void 0?void 0:_e.toLocaleUpperCase().indexOf(mt.current))===0});Xt<0&&(Xt=y.findIndex(ye=>{var _e;return((_e=ye.label)===null||_e===void 0?void 0:_e.toLocaleUpperCase().indexOf(ot))===0}),mt.current=ot),Xt>=0&&(Ot?ht(Xt,{fromEvent:Nt}):j(Xt,{scroll:!0}));break}case"cycleFirstLetter":{const Xt=Ot?(Pt=z.current)!==null&&Pt!==void 0?Pt:-1:nt.current;let ye=y.findIndex((_e,Fe)=>{var ve;return Fe>Xt&&((ve=_e.label)===null||ve===void 0?void 0:ve.toLocaleUpperCase().indexOf(ot))===0});ye<0&&(ye=y.findIndex(_e=>{var Fe;return((Fe=_e.label)===null||Fe===void 0?void 0:Fe.toLocaleUpperCase().indexOf(ot))===0})),ye>=0&&(Ot?ht(ye,{fromEvent:Nt}):j(ye,{scroll:!0}));break}}clearTimeout(st.current),st.current=setTimeout(()=>{X.current==="search"&&(mt.current="")},kD)},[j,y,ht]),I=B.useCallback(ot=>{var Nt;ot.button===0&&(ot.preventDefault(),(Nt=T.current)===null||Nt===void 0||Nt.focus(),F({fromEvent:ot}),c==null||c(ot))},[c,T,F]),W=B.useCallback(ot=>{ft({focusSelect:!0,fromEvent:ot})},[ft]),dt=B.useCallback(ot=>{const{altKey:Nt,code:Ot,ctrlKey:Pt,metaKey:Xt,shiftKey:ye}=ot,{ARROW_DOWN:_e,ARROW_UP:Fe,END:ve,ENTER:Pn,ESC:ie,HOME:we,SPACE:Dn,TAB:Ur}=DD,gi=Nt||Pt||Xt||ye;if(!(Ot===Ur&&(Nt||Pt||Xt)||Ot!==Ur&&gi))switch(Ot){case _e:{if(ot.preventDefault(),!ut){C({fromEvent:ot});return}j("next",{scroll:!0});break}case Fe:{if(ot.preventDefault(),!ut){C({fromEvent:ot});return}j("previous",{scroll:!0});break}case ve:{if(ot.preventDefault(),!ut){C({fromEvent:ot});return}j("last",{scroll:!0});break}case Pn:{if(!ut)return;ot.preventDefault(),ft({focusSelect:!0,fromEvent:ot});break}case ie:{if(!ut)return;ot.preventDefault(),vt({focusSelect:!0,fromEvent:ot});break}case we:{if(ot.preventDefault(),!ut){C({fromEvent:ot});return}j("first",{scroll:!0});break}case Dn:{ot.preventDefault(),ut?ft({focusSelect:!0,fromEvent:ot}):C({fromEvent:ot});break}case Ur:{if(!ut)return;ye||ot.preventDefault(),ft({focusSelect:!ye,fromEvent:ot});break}default:!gi&&Ot.match(/^Key/)&&(ot.preventDefault(),ot.stopPropagation(),Tt(Ot.replace(/^Key/,""),{select:!ut,fromEvent:ot}))}},[j,vt,ut,C,Tt,ft]),tt=B.useCallback(ot=>{dt(ot),l==null||l(ot)},[dt,l]),ct=B.useCallback(ot=>{j(ot)},[j]),_t=B.useCallback(ot=>{ut||(Mt(),n==null||n(ot))},[Mt,n,ut]),pt=B.useCallback(ot=>{Mt(),a==null||a(ot)},[Mt,a]),xt=B.useCallback(ot=>{G.current=ot,J.current!==void 0&&N(J.current)},[N]),It=B.useCallback((ot,Nt)=>{K.current[Nt]=ot,J.current===Nt&&N(J.current)},[N]);return B.useEffect(()=>{if(!ut)return()=>{};const ot=Nt=>{var Ot;const Pt=Nt.target;!((Ot=M.current)===null||Ot===void 0)&&Ot.contains(Pt)||(Nt.preventDefault(),vt({focusSelect:!1,fromEvent:Nt}))};return document.addEventListener("mousedown",ot),()=>{document.removeEventListener("mousedown",ot)}},[vt,ut,M]),B.useMemo(()=>({activeOption:D,handleActivateOptionIndex:ct,handleBlur:_t,handleButtonKeyDown:tt,handleDropdownKeyDown:dt,handleFocus:pt,handleMouseDown:I,handleOptionClick:W,handleSetDropdownRef:xt,handleSetOptionRef:It,open:ut,selectedOption:x}),[D,ct,_t,tt,pt,dt,I,W,xt,It,ut,x])},ND=B.forwardRef(({className:n,defaultValue:t,disabled:i,onChange:a,options:l,readOnly:c,style:f,value:p,variant:y,width:g,..._},T)=>{const{isEnabled:S,options:M,setValue:G,value:K,DropdownButton:z,Wrapper:nt}=U1({defaultValue:t,disabled:i,native:!0,onChange:a,options:l,readOnly:c,value:p,variant:y}),J=B.useCallback(X=>{const mt=M.find(st=>st.value===X.target.value);mt&&(G(mt.value),a==null||a(mt,{fromEvent:X}))},[a,M,G]);return Q.createElement(nt,{className:n,style:{...f,width:g}},Q.createElement(eg,null,Q.createElement(wD,{..._,disabled:i,onChange:S?J:vs,ref:T,value:K},M.map((X,mt)=>{var st;return Q.createElement("option",{key:`${X.value}-${mt}`,value:X.value},(st=X.label)!==null&&st!==void 0?st:X.value)})),z))});ND.displayName="SelectNative";function VD({activateOptionIndex:n,active:t,index:i,onClick:a,option:l,selected:c,setRef:f}){const p=B.useCallback(()=>{n(i)},[n,i]),y=B.useCallback(_=>{f(_,i)},[i,f]),g=j1();return Q.createElement(RD,{active:t,"aria-selected":c?"true":void 0,"data-value":l.value,id:g,onClick:a,onMouseEnter:p,ref:y,role:"option",tabIndex:0},l.label)}function MD({"aria-label":n,"aria-labelledby":t,className:i,defaultValue:a,disabled:l=!1,formatDisplay:c,inputProps:f,labelId:p,menuMaxHeight:y,name:g,onBlur:_,onChange:T,onClose:S,onFocus:M,onKeyDown:G,onMouseDown:K,onOpen:z,open:nt,options:J,readOnly:X,shadow:mt=!0,style:st,variant:ut="default",value:R,width:x="auto",...D},V){const{isEnabled:N,options:j,setValue:C,value:Mt,wrapperProps:vt,DropdownButton:F,Wrapper:ht}=U1({className:i,defaultValue:a,disabled:l,native:!1,onChange:T,options:J,style:st,readOnly:X,value:R,variant:ut,width:x}),ft=B.useRef(null),Tt=B.useRef(null),I=B.useRef(null),{activeOption:W,handleActivateOptionIndex:dt,handleBlur:tt,handleButtonKeyDown:ct,handleDropdownKeyDown:_t,handleFocus:pt,handleMouseDown:xt,handleOptionClick:It,handleSetDropdownRef:ot,handleSetOptionRef:Nt,open:Ot,selectedOption:Pt}=ID({onBlur:_,onChange:T,onClose:S,onFocus:M,onKeyDown:G,onMouseDown:K,onOpen:z,open:nt,options:j,value:Mt,selectRef:Tt,setValue:C,wrapperRef:I});B.useImperativeHandle(V,()=>({focus:Pn=>{var ie;(ie=Tt.current)===null||ie===void 0||ie.focus(Pn)},node:ft.current,value:String(Mt)}),[Mt]);const Xt=B.useMemo(()=>Pt?typeof c=="function"?c(Pt):Pt.label:"",[c,Pt]),ye=N?1:void 0,_e=B.useMemo(()=>y?{overflow:"auto",maxHeight:y}:void 0,[y]),Fe=j1(),ve=B.useMemo(()=>j.map((Pn,ie)=>{const we=`${Mt}-${ie}`,Dn=Pn===W,Ur=Pn===Pt;return Q.createElement(VD,{activateOptionIndex:dt,active:Dn,index:ie,key:we,onClick:It,option:Pn,selected:Ur,setRef:Nt})}),[W,dt,It,Nt,j,Pt,Mt]);return Q.createElement(ht,{...vt,$disabled:l,ref:I,shadow:mt,style:{...st,width:x}},Q.createElement("input",{name:g,ref:ft,type:"hidden",value:String(Mt),...f}),Q.createElement(eg,{"aria-disabled":l,"aria-expanded":Ot,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":t??p,"aria-owns":N&&Ot?Fe:void 0,onBlur:tt,onFocus:pt,onKeyDown:ct,onMouseDown:N?xt:K,ref:Tt,role:"button",tabIndex:ye,...D},Q.createElement(AD,null,Xt),F),N&&Ot&&Q.createElement(xD,{id:Fe,onKeyDown:_t,ref:ot,role:"listbox",style:_e,tabIndex:0,variant:ut},ve))}const ng=B.forwardRef(MD);ng.displayName="Select";const OD=lt.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,vo=B.forwardRef(function({children:t,noPadding:i=!1,...a},l){return Q.createElement(OD,{noPadding:i,ref:l,...a},t)});vo.displayName="Toolbar";const jD=lt.div`
  padding: 16px;
`,Ze=B.forwardRef(function({children:t,...i},a){return Q.createElement(jD,{ref:a,...i},t)});Ze.displayName="WindowContent";const LD=lt.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?bt`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:bt`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${tf} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,En=B.forwardRef(function({active:t=!0,children:i,...a},l){return Q.createElement(LD,{active:t,ref:l,...a},i)});En.displayName="WindowHeader";const BD=lt.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Re({style:"window"})}
  ${mr()}
`,zD=lt.span`
  ${({theme:n})=>bt`
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
`,Tn=B.forwardRef(({children:n,resizable:t=!1,resizeRef:i,shadow:a=!0,...l},c)=>Q.createElement(BD,{ref:c,shadow:a,...l},n,t&&Q.createElement(zD,{"data-testid":"resizeHandle",ref:i})));Tn.displayName="Window";const PD=lt(Ir)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,UD=lt.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,$D=lt.div`
  display: flex;
  flex-wrap: wrap;
`,li=lt.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,HD=lt.span`
  cursor: pointer;

  background: ${({active:n,theme:t})=>n?t.hoverBackground:"transparent"};
  color: ${({active:n,theme:t})=>n?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:t})=>t?"none":n.materialDark};
  }
`,qD=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function GD(n,t){return new Date(n,t+1,0).getDate()}function FD(n,t,i){return new Date(n,t,i).getDay()}function QD(n){const t=new Date(Date.parse(n)),i=t.getUTCDate(),a=t.getUTCMonth(),l=t.getUTCFullYear();return{day:i,month:a,year:l}}const YD=B.forwardRef(({className:n,date:t=new Date().toISOString(),onAccept:i,onCancel:a,shadow:l=!0},c)=>{const[f,p]=B.useState(()=>QD(t)),{year:y,month:g,day:_}=f,T=B.useCallback(({value:z})=>{p(nt=>({...nt,month:z}))},[]),S=B.useCallback(z=>{p(nt=>({...nt,year:z}))},[]),M=B.useCallback(z=>{p(nt=>({...nt,day:z}))},[]),G=B.useCallback(()=>{const z=[f.year,f.month+1,f.day].map(nt=>String(nt).padStart(2,"0")).join("-");i==null||i(z)},[f.day,f.month,f.year,i]),K=B.useMemo(()=>{const z=Array.from({length:42}),nt=FD(y,g,1);let J=_;const X=GD(y,g);return J=J<X?J:X,z.forEach((mt,st)=>{if(st>=nt&&st<X+nt){const ut=st-nt+1;z[st]=Q.createElement(li,{key:st,onClick:()=>{M(ut)}},Q.createElement(HD,{active:ut===J},ut))}else z[st]=Q.createElement(li,{key:st})}),z},[_,M,g,y]);return Q.createElement(Tn,{className:n,ref:c,shadow:l,style:{margin:20}},Q.createElement(En,null,Q.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),Q.createElement(Ze,null,Q.createElement(vo,{noPadding:!0,style:{justifyContent:"space-between"}},Q.createElement(ng,{options:qD,value:g,onChange:T,width:128,menuMaxHeight:200}),Q.createElement(O1,{value:y,onChange:S,width:100})),Q.createElement(PD,null,Q.createElement(UD,null,Q.createElement(li,null,"S"),Q.createElement(li,null,"M"),Q.createElement(li,null,"T"),Q.createElement(li,null,"W"),Q.createElement(li,null,"T"),Q.createElement(li,null,"F"),Q.createElement(li,null,"S")),Q.createElement($D,null,K)),Q.createElement(vo,{noPadding:!0,style:{justifyContent:"space-between"}},Q.createElement(ce,{fullWidth:!0,onClick:a,disabled:!a},"Cancel"),Q.createElement(ce,{fullWidth:!0,onClick:i?G:void 0,disabled:!i},"OK"))))});YD.displayName="DatePicker";const KD=n=>{switch(n){case"status":case"well":return bt`
        ${Re({style:"status"})}
      `;case"window":case"outside":return bt`
        ${Re({style:"window"})}
      `;case"field":return bt`
        ${Re({style:"field"})}
      `;default:return bt`
        ${Re()}
      `}},XD=lt.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>KD(n)}
  ${({variant:n})=>mr(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,bo=B.forwardRef(({children:n,shadow:t=!1,variant:i="window",...a},l)=>Q.createElement(XD,{ref:l,shadow:t,variant:i,...a},n));bo.displayName="Frame";const ZD=lt.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:t})=>t==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&bt`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${n=>n.$disabled&&dr()}
`,WD=lt.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:t})=>t==="flat"?n.canvas:n.material};
`,JD=B.forwardRef(({label:n,disabled:t=!1,variant:i="default",children:a,...l},c)=>Q.createElement(ZD,{"aria-disabled":t,$disabled:t,variant:i,ref:c,...l},n&&Q.createElement(WD,{variant:i},n),a));JD.displayName="GroupBox";const is=lt.div`
  ${({theme:n,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${pa(t)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;is.displayName="Handle";const tk="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",ek=lt.div`
  display: inline-block;
  height: ${({size:n})=>pa(n)};
  width: ${({size:n})=>pa(n)};
`,nk=lt.span`
  display: block;
  background: ${tk};
  background-size: cover;
  width: 100%;
  height: 100%;
`,rk=B.forwardRef(({size:n=30,...t},i)=>Q.createElement(ek,{size:n,ref:i,...t},Q.createElement(nk,null)));rk.displayName="Hourglass";const ik=lt.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,ak=lt.div`
  position: relative;
`,sk=lt.div`
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
`,ok=lt(Pr).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,lk=lt.div`
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
`,uk=B.forwardRef(({backgroundStyles:n,children:t,...i},a)=>Q.createElement(ik,{ref:a,...i},Q.createElement(ak,null,Q.createElement(sk,null,Q.createElement(ok,{style:n},t)),Q.createElement(lk,null))));uk.displayName="Monitor";const ck=lt.div`
  display: inline-block;
  height: ${ln.md};
  width: 100%;
`,hk=lt(Pr)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,$1=bt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,fk=lt.div`
  position: relative;
  top: 4px;
  ${$1}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,dk=lt.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${$1}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,mk=lt.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,H1=17,pk=lt.span`
  display: inline-block;
  width: ${H1}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,Ih=B.forwardRef(({hideValue:n=!1,shadow:t=!0,value:i,variant:a="default",...l},c)=>{const f=n?null:`${i}%`,p=B.useRef(null),[y,g]=B.useState([]),_=B.useCallback(()=>{if(!p.current||i===void 0)return;const T=p.current.getBoundingClientRect().width,S=Math.round(i/100*T/H1);g(Array.from({length:S}))},[i]);return B.useEffect(()=>(_(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)),[_]),Q.createElement(ck,{"aria-valuenow":i!==void 0?Math.round(i):void 0,ref:c,role:"progressbar",variant:a,...l},Q.createElement(hk,{variant:a,shadow:t},a==="default"?Q.createElement(Q.Fragment,null,Q.createElement(fk,{"data-testid":"defaultProgress1"},f),Q.createElement(dk,{"data-testid":"defaultProgress2",value:i},f)):Q.createElement(mk,{ref:p,"data-testid":"tileProgress"},y.map((T,S)=>Q.createElement(pk,{key:S})))))});Ih.displayName="ProgressBar";const q1=bt`
  width: ${zr}px;
  height: ${zr}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,gk=lt(Pr)`
  ${q1}
  background: ${({$disabled:n,theme:t})=>n?t.material:t.canvas};

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
`,yk=lt.div`
  ${ps()}
  ${q1}
  outline: none;
  background: ${({$disabled:n,theme:t})=>n?t.flatLight:t.canvas};
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
`,vk=lt.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,bk={flat:yk,default:gk},_k=B.forwardRef(({checked:n,className:t="",disabled:i=!1,label:a="",onChange:l,style:c={},variant:f="default",...p},y)=>{const g=bk[f];return Q.createElement(Jp,{$disabled:i,className:t,style:c},Q.createElement(g,{$disabled:i,role:"presentation"},n&&Q.createElement(vk,{$disabled:i,variant:f})),Q.createElement(kh,{disabled:i,onChange:i?void 0:l,readOnly:i,type:"radio",checked:n,ref:y,...p}),a&&Q.createElement(tg,null,a))});_k.displayName="Radio";const Ak=typeof window<"u"?B.useLayoutEffect:B.useEffect;function ns(n){const t=B.useRef(n);return Ak(()=>{t.current=n}),B.useCallback((...i)=>(0,t.current)(...i),[])}function Jb(n,t){typeof n=="function"?n(t):n&&(n.current=t)}function t_(n,t){return B.useMemo(()=>n==null&&t==null?null:i=>{Jb(n,i),Jb(t,i)},[n,t])}var Ek=c_();let ef=!0,tp=!1,e_;const Tk={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function wk(n){if("type"in n){const{type:t,tagName:i}=n;if(i==="INPUT"&&Tk[t]&&!n.readOnly||i==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function Sk(n){n.metaKey||n.altKey||n.ctrlKey||(ef=!0)}function vm(){ef=!1}function xk(){this.visibilityState==="hidden"&&tp&&(ef=!0)}function Rk(n){n.addEventListener("keydown",Sk,!0),n.addEventListener("mousedown",vm,!0),n.addEventListener("pointerdown",vm,!0),n.addEventListener("touchstart",vm,!0),n.addEventListener("visibilitychange",xk,!0)}function Ck(n){const{target:t}=n;try{return t.matches(":focus-visible")}catch{}return ef||wk(t)}function Dk(){tp=!0,window.clearTimeout(e_),e_=window.setTimeout(()=>{tp=!1},100)}function kk(){const n=B.useCallback(t=>{const i=Ek.findDOMNode(t);i!=null&&Rk(i.ownerDocument)},[]);return{isFocusVisible:Ck,onBlurVisible:Dk,ref:n}}function Ik(n,t,i){return(i-t)*n+t}function Zc(n,t){if(t!==void 0&&"changedTouches"in n){for(let i=0;i<n.changedTouches.length;i+=1){const a=n.changedTouches[i];if(a.identifier===t)return{x:a.clientX,y:a.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Wc(n){return n&&n.ownerDocument||document}function Nk(n,t){var i;const{index:a}=(i=n.reduce((l,c,f)=>{const p=Math.abs(t-c);return l===null||p<l.distance||p===l.distance?{distance:p,index:f}:l},null))!==null&&i!==void 0?i:{};return a??-1}const Vk=lt.div`
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
    ${({isFocused:n,theme:t})=>n&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:n,size:t})=>n==="vertical"?bt`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `:bt`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,G1=()=>bt`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?bt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:bt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Mk=lt(Pr)`
  ${G1()}
`,Ok=lt(Pr)`
  ${G1()}

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
`,jk=lt.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?bt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:bt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?bt`
          ${ps()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:bt`
          ${mr()}
          ${Re()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:t})=>n&&Tu({mainColor:t.material,secondaryColor:t.borderLightest})}
`,po=6,Lk=lt.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?bt`
          right: ${-po-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${po}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:bt`
          bottom: ${-po}px;
          height: ${po}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:t})=>n&&bt`
      ${dr()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Bk=lt.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?bt`
          transform: translate(${po+2}px, ${po+1}px);
        `:bt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,zk=B.forwardRef(({defaultValue:n,disabled:t=!1,marks:i=!1,max:a=100,min:l=0,name:c,onChange:f,onChangeCommitted:p,onMouseDown:y,orientation:g="horizontal",size:_="100%",step:T=1,value:S,variant:M="default",...G},K)=>{const z=M==="flat"?Ok:Mk,nt=g==="vertical",[J=l,X]=ga({defaultValue:n,onChange:f??p,value:S}),{isFocusVisible:mt,onBlurVisible:st,ref:ut}=kk(),[R,x]=B.useState(!1),D=B.useRef(),V=B.useRef(null),N=t_(ut,D),j=t_(K,N),C=ns(tt=>{mt(tt)&&x(!0)}),Mt=ns(()=>{R!==!1&&(x(!1),st())}),vt=B.useRef(),F=B.useMemo(()=>i===!0&&Number.isFinite(T)?[...Array(Math.round((a-l)/T)+1)].map((tt,ct)=>({label:void 0,value:l+T*ct})):Array.isArray(i)?i:[],[i,a,l,T]),ht=ns(tt=>{const ct=(a-l)/10,_t=F.map(It=>It.value),pt=_t.indexOf(J);let xt=0;switch(tt.key){case"Home":xt=l;break;case"End":xt=a;break;case"PageUp":T&&(xt=J+ct);break;case"PageDown":T&&(xt=J-ct);break;case"ArrowRight":case"ArrowUp":T?xt=J+T:xt=_t[pt+1]||_t[_t.length-1];break;case"ArrowLeft":case"ArrowDown":T?xt=J-T:xt=_t[pt-1]||_t[0];break;default:return}tt.preventDefault(),T&&(xt=Xb(xt,T,l)),xt=os(xt,l,a),X(xt),x(!0),f==null||f(xt),p==null||p(xt)}),ft=B.useCallback(tt=>{if(!D.current)return 0;const ct=D.current.getBoundingClientRect();let _t;nt?_t=(ct.bottom-tt.y)/ct.height:_t=(tt.x-ct.left)/ct.width;let pt;if(pt=Ik(_t,l,a),T)pt=Xb(pt,T,l);else{const xt=F.map(ot=>ot.value),It=Nk(xt,pt);pt=xt[It]}return pt=os(pt,l,a),pt},[F,a,l,T,nt]),Tt=ns(tt=>{var ct;const _t=Zc(tt,vt.current);if(!_t)return;const pt=ft(_t);(ct=V.current)===null||ct===void 0||ct.focus(),X(pt),x(!0),f==null||f(pt)}),I=ns(tt=>{const ct=Zc(tt,vt.current);if(!ct)return;const _t=ft(ct);p==null||p(_t),vt.current=void 0;const pt=Wc(D.current);pt.removeEventListener("mousemove",Tt),pt.removeEventListener("mouseup",I),pt.removeEventListener("touchmove",Tt),pt.removeEventListener("touchend",I)}),W=ns(tt=>{var ct;y==null||y(tt),tt.preventDefault(),(ct=V.current)===null||ct===void 0||ct.focus(),x(!0);const _t=Zc(tt,vt.current);if(_t){const xt=ft(_t);X(xt),f==null||f(xt)}const pt=Wc(D.current);pt.addEventListener("mousemove",Tt),pt.addEventListener("mouseup",I)}),dt=ns(tt=>{var ct;tt.preventDefault();const _t=tt.changedTouches[0];_t!=null&&(vt.current=_t.identifier),(ct=V.current)===null||ct===void 0||ct.focus(),x(!0);const pt=Zc(tt,vt.current);if(pt){const It=ft(pt);X(It),f==null||f(It)}const xt=Wc(D.current);xt.addEventListener("touchmove",Tt),xt.addEventListener("touchend",I)});return B.useEffect(()=>{const{current:tt}=D;tt==null||tt.addEventListener("touchstart",dt);const ct=Wc(tt);return()=>{tt==null||tt.removeEventListener("touchstart",dt),ct.removeEventListener("mousemove",Tt),ct.removeEventListener("mouseup",I),ct.removeEventListener("touchmove",Tt),ct.removeEventListener("touchend",I)}},[I,Tt,dt]),Q.createElement(Vk,{$disabled:t,hasMarks:!!F.length,isFocused:R,onMouseDown:W,orientation:g,ref:j,size:pa(_),...G},Q.createElement("input",{disabled:t,name:c,type:"hidden",value:J??0}),F&&F.map(tt=>Q.createElement(Lk,{$disabled:t,"data-testid":"tick",key:tt.value/(a-l)*100,orientation:g,style:{[nt?"bottom":"left"]:`${(tt.value-l)/(a-l)*100}%`}},tt.label&&Q.createElement(Bk,{"aria-hidden":!0,"data-testid":"mark",orientation:g},tt.label))),Q.createElement(z,{orientation:g,variant:M}),Q.createElement(jk,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":g,"aria-valuemax":a,"aria-valuemin":l,"aria-valuenow":J,onBlur:Mt,onFocus:C,onKeyDown:ht,orientation:g,ref:V,role:"slider",style:{[nt?"bottom":"left"]:`${(nt?-100:0)+100*(J-l)/(a-l)}%`},tabIndex:t?void 0:0,variant:M}))});zk.displayName="Slider";const Pk=lt.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${Zp};
  overflow-y: auto;
`,Uk=B.forwardRef(function({children:t,...i},a){return Q.createElement(Pk,{ref:a,...i},t)});Uk.displayName="TableBody";const $k=lt.td`
  padding: 0 8px;
`,Hk=B.forwardRef(function({children:t,...i},a){return Q.createElement($k,{ref:a,...i},t)});Hk.displayName="TableDataCell";const qk=lt.thead`
  display: table-header-group;
`,Gk=B.forwardRef(function({children:t,...i},a){return Q.createElement(qk,{ref:a,...i},t)});Gk.displayName="TableHead";const Fk=lt.th`
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
    ${Re()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&bt`
      &:active {
        &:before {
          ${Re({invert:!0,style:"window"})}
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
  ${({$disabled:n})=>n&&dr()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&dr()}
  }
`,Qk=B.forwardRef(function({disabled:t=!1,children:i,onClick:a,onTouchStart:l=vs,sort:c,...f},p){const y=c==="asc"?"ascending":c==="desc"?"descending":void 0;return Q.createElement(Fk,{$disabled:t,"aria-disabled":t,"aria-sort":y,onClick:t?void 0:a,onTouchStart:t?void 0:l,ref:p,...f},Q.createElement("div",null,i))});Qk.displayName="TableHeadCell";const Yk=lt.tr`
  color: inherit;
  display: table-row;
  height: calc(${ln.md} - 2px);
  line-height: calc(${ln.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,Kk=B.forwardRef(function({children:t,...i},a){return Q.createElement(Yk,{ref:a,...i},t)});Kk.displayName="TableRow";const Xk=lt.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Zk=lt(Pr)`
  &:before {
    box-shadow: none;
  }
`,Wk=B.forwardRef(({children:n,...t},i)=>Q.createElement(Zk,null,Q.createElement(Xk,{ref:i,...t},n)));Wk.displayName="Table";const Jk=lt.button`
  ${mr()}
  ${Re()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ln.md};
  line-height: ${ln.md};
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
    ${Io}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${ln.md} + 4px);
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
`,t4=B.forwardRef(({value:n,onClick:t,selected:i=!1,children:a,...l},c)=>Q.createElement(Jk,{"aria-selected":i,selected:i,onClick:f=>t==null?void 0:t(n,f),ref:c,role:"tab",...l},a));t4.displayName="Tab";const e4=lt.div`
  ${mr()}
  ${Re()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,n4=B.forwardRef(({children:n,...t},i)=>Q.createElement(e4,{ref:i,...t},n));n4.displayName="TabBody";const r4=lt.div`
  position: relative;
  ${({isMultiRow:n,theme:t})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,i4=lt.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function a4(n,t){const i=[];for(let a=t;a>0;a-=1)i.push(n.splice(0,Math.ceil(n.length/a)));return i}const s4=B.forwardRef(({value:n,onChange:t=vs,children:i,rows:a=1,...l},c)=>{const f=B.useMemo(()=>{var p;const y=(p=Q.Children.map(i,T=>{if(!Q.isValidElement(T))return null;const S={selected:T.props.value===n,onClick:t};return Q.cloneElement(T,S)}))!==null&&p!==void 0?p:[],g=a4(y,a).map((T,S)=>({key:S,tabs:T})),_=g.findIndex(T=>T.tabs.some(S=>S.props.selected));return g.push(g.splice(_,1)[0]),g},[i,t,a,n]);return Q.createElement(r4,{...l,isMultiRow:a>1,role:"tablist",ref:c},f.map(p=>Q.createElement(i4,{key:p.key},p.tabs)))});s4.displayName="Tabs";const o4=["blur","focus"],l4=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function n_(n){return"nativeEvent"in n&&o4.includes(n.type)}function r_(n){return"nativeEvent"in n&&l4.includes(n.type)}const u4={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},c4=lt.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${Xp};
  text-align: center;
  font-size: 1rem;
  ${n=>u4[n.position]}
`,h4=lt.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Xl=B.forwardRef(({className:n,children:t,disableFocusListener:i=!1,disableMouseListener:a=!1,enterDelay:l=1e3,leaveDelay:c=0,onBlur:f,onClose:p,onFocus:y,onMouseEnter:g,onMouseLeave:_,onOpen:T,style:S,text:M,position:G="top",...K},z)=>{const[nt,J]=B.useState(!1),[X,mt]=B.useState(),[st,ut]=B.useState(),R=!i,x=!a,D=ft=>{window.clearTimeout(X),window.clearTimeout(st);const Tt=window.setTimeout(()=>{J(!0),T==null||T(ft)},l);mt(Tt)},V=ft=>{ft.persist(),n_(ft)?y==null||y(ft):r_(ft)&&(g==null||g(ft)),D(ft)},N=ft=>{window.clearTimeout(X),window.clearTimeout(st);const Tt=window.setTimeout(()=>{J(!1),p==null||p(ft)},c);ut(Tt)},j=ft=>{ft.persist(),n_(ft)?f==null||f(ft):r_(ft)&&(_==null||_(ft)),N(ft)},C=R?j:void 0,Mt=R?V:void 0,vt=x?V:void 0,F=x?j:void 0,ht=R?0:void 0;return Q.createElement(h4,{"data-testid":"tooltip-wrapper",onBlur:C,onFocus:Mt,onMouseEnter:vt,onMouseLeave:F,tabIndex:ht},Q.createElement(c4,{className:n,"data-testid":"tooltip",position:G,ref:z,show:nt,style:S,...K},M),t)});Xl.displayName="Tooltip";const ep=lt(tg)`
  white-space: nowrap;
`,F1=bt`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":bt`
          cursor: pointer;

          :focus {
            ${ep} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,f4=lt.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&bt`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
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
`,d4=lt.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?bt`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:bt`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
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
`,m4=lt.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,p4=lt.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${F1};

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
`,i_=lt(Jp)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${F1};
`,g4=lt.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function a_(n,t){return n.includes(t)?n.filter(i=>i!==t):[...n,t]}function s_(n){n.preventDefault()}function Q1({className:n,disabled:t,expanded:i,innerRef:a,level:l,select:c,selected:f,style:p,tree:y=[]}){const g=l===0,_=B.useCallback(T=>{var S,M;const G=!!(T.items&&T.items.length>0),K=i.includes(T.id),z=(S=t||T.disabled)!==null&&S!==void 0?S:!1,nt=z?s_:st=>c(st,T),J=z?s_:st=>c(st,T),X=f===T.id,mt=Q.createElement(g4,{"aria-hidden":!0},T.icon);return Q.createElement(d4,{key:T.label,isRootLevel:g,role:"treeitem","aria-expanded":K,"aria-selected":X,hasItems:G},G?Q.createElement(m4,{open:K},Q.createElement(p4,{onClick:nt,$disabled:z},Q.createElement(i_,{$disabled:z},mt,Q.createElement(ep,null,T.label))),K&&Q.createElement(Q1,{className:n,disabled:z,expanded:i,level:l+1,select:c,selected:f,style:p,tree:(M=T.items)!==null&&M!==void 0?M:[]})):Q.createElement(i_,{as:"button",$disabled:z,onClick:J},mt,Q.createElement(ep,null,T.label)))},[n,t,i,g,l,c,f,p]);return Q.createElement(f4,{className:g?n:void 0,style:g?p:void 0,ref:g?a:void 0,role:g?"tree":"group",isRootLevel:g},y.map(_))}function y4({className:n,defaultExpanded:t=[],defaultSelected:i,disabled:a=!1,expanded:l,onNodeSelect:c,onNodeToggle:f,selected:p,style:y,tree:g=[]},_){const[T,S]=ga({defaultValue:t,onChange:f,onChangePropName:"onNodeToggle",value:l,valuePropName:"expanded"}),[M,G]=ga({defaultValue:i,onChange:c,onChangePropName:"onNodeSelect",value:p,valuePropName:"selected"}),K=B.useCallback((J,X)=>{if(f){const mt=a_(T,X);f(J,mt)}S(mt=>a_(mt,X))},[T,f,S]),z=B.useCallback((J,X)=>{G(X),c&&c(J,X)},[c,G]),nt=B.useCallback((J,X)=>{J.preventDefault(),z(J,X.id),X.items&&X.items.length&&K(J,X.id)},[z,K]);return Q.createElement(Q1,{className:n,disabled:a,expanded:T,level:0,innerRef:_,select:nt,selected:M,style:y,tree:g})}const v4=B.forwardRef(y4);v4.displayName="TreeView";function b4(){const[n,t]=B.useState({}),[i,a]=B.useState(!1),l=p1(gu,"polls","best_os");B.useEffect(()=>{const f=R1(l,p=>{p.exists()&&t(p.data())});return()=>f()},[]);const c=async f=>{if(i)return;const p=n[f]||0;await VC(l,{[f]:p+1}),a(!0)};return A.jsxs(Tn,{resizable:!0,className:"w-full max-w-sm",children:[A.jsx(En,{children:A.jsx("span",{children:"Best OS Poll"})}),A.jsxs(Ze,{children:[A.jsx("p",{className:"mb-2",children:"Vote for the best OS of all time:"}),A.jsx("div",{className:"flex flex-col gap-2 mb-4",children:["Windows 95","Windows XP","Windows 7"].map(f=>A.jsxs(ce,{onClick:()=>c(f),disabled:i,children:[f," (",n[f]||0," votes)"]},f))}),i&&A.jsxs(Ir,{style:{height:100,background:"#fff",padding:4},children:[A.jsx("p",{children:"Current standings:"}),Object.entries(n).map(([f,p])=>A.jsxs("p",{children:[A.jsxs("b",{children:[f,":"]})," ",p," votes"]},f))]})]})]})}const _4=["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagg0t","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"],A4=["4r5e","5h1t","5hit","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","a_s_s","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","f_u_c_k","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","hell","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","s_h_i_t","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"];class E4{constructor(t={}){es(this,"list",[]);es(this,"exclude",[]);es(this,"placeHolder","*");es(this,"regex",/[^a-zA-Z0-9|$|@]|\^/g);es(this,"replaceRegex",/\w/g);es(this,"splitRegex",/\b|_/g);Object.assign(this,{list:t.emptyList&&[]||Array.prototype.concat.apply(_4,[A4,t.list||[]]),exclude:t.exclude||[],splitRegex:t.splitRegex||/\b|_/g,placeHolder:t.placeHolder||"*",regex:t.regex||/[^a-zA-Z0-9|$|@]|\^/g,replaceRegex:t.replaceRegex||/\w/g})}isProfane(t){return this.list.filter(i=>{const a=new RegExp(`\\b${i.replace(/(\W)/g,"\\$1")}\\b`,"gi");return!this.exclude.includes(i.toLowerCase())&&a.test(t)}).length>0||!1}replaceWord(t){return t.replace(this.regex,"").replace(this.replaceRegex,this.placeHolder)}clean(t){const i=this.splitRegex.exec(t);return!t||!i?t:t.split(this.splitRegex).map(a=>this.isProfane(a)?this.replaceWord(a):a).join(i[0])}addWords(...t){this.list.push(...t),t.map(i=>i.toLowerCase()).forEach(i=>{this.exclude.includes(i)&&this.exclude.splice(this.exclude.indexOf(i),1)})}removeWords(...t){this.exclude.push(...t.map(i=>i.toLowerCase()))}}const T4="/95-Portfolio/assets/messengerprofile-C0dLB8Qi.png",w4=50,S4=new E4;function x4(){const[n,t]=B.useState([]),[i,a]=B.useState(""),[l,c]=B.useState(()=>localStorage.getItem("username")||""),[f,p]=B.useState(l),y=B.useRef(null),g=async()=>{const M=T1(Ch(gu,"messages"),w1("timestamp","desc"),CC(w4)),K=(await NC(M)).docs.map(z=>({id:z.id,...z.data()}));t(K.reverse()),setTimeout(()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},50)};B.useEffect(()=>{g()},[]);const _=async()=>{if(!i.trim()||!l.trim())return;const M=S4.clean(i);await x1(Ch(gu,"messages"),{username:l,text:M,timestamp:OC()}),a(""),g()},T=()=>{f.trim()&&(c(f.trim()),localStorage.setItem("username",f.trim()))},S=()=>{c(""),p(""),localStorage.removeItem("username")};return A.jsxs(Tn,{style:{width:400,margin:"20px auto"},children:[A.jsxs(En,{style:{display:"flex",alignItems:"center",gap:5},children:[A.jsx("img",{src:T4,alt:"profile",style:{height:16,width:16,objectFit:"contain"}}),"MSN Messenger.exe"]}),A.jsx(Ze,{children:l?A.jsxs(A.Fragment,{children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[A.jsxs("span",{children:[A.jsx("b",{children:"Logged in as:"})," ",l]}),A.jsx(ce,{size:"sm",onClick:S,children:"Change Name"})]}),A.jsx("div",{ref:y,style:{height:300,background:"white",padding:4,overflowY:"auto",border:"2px solid #c3c7cb",boxShadow:"inset 1px 1px #fff, inset -1px -1px #808080"},className:"win95-scrollbar",children:n.map(M=>A.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:2},children:A.jsxs("p",{style:{fontSize:12,whiteSpace:"pre-wrap",wordWrap:"break-word",maxWidth:"100%"},children:[A.jsxs("b",{children:[M.username,":"]})," ",M.text]})},M.id))}),A.jsxs("div",{style:{display:"flex",gap:5,marginTop:5},children:[A.jsx(la,{value:i,onChange:M=>{M.target.value.length<=100&&a(M.target.value)},placeholder:"Type a message...",fullWidth:!0}),A.jsx(ce,{onClick:_,disabled:!i.trim(),children:"Send"})]})]}):A.jsxs("div",{children:[A.jsx("p",{children:"Enter a username to join chat:"}),A.jsx(la,{value:f,onChange:M=>p(M.target.value),placeholder:"Your name...",fullWidth:!0}),A.jsx(ce,{onClick:T,style:{marginTop:5},disabled:!f.trim(),children:"Save"})]})}),A.jsx("style",{children:`
          /* Webkit browsers */
          .win95-scrollbar::-webkit-scrollbar {
            width: 16px;
          }
          .win95-scrollbar::-webkit-scrollbar-track {
            background: #c3c7cb;
            box-shadow: inset 1px 1px #fff, inset -1px -1px #808080;
          }
          .win95-scrollbar::-webkit-scrollbar-thumb {
            background: #808080;
            border: 2px solid #c3c7cb;
            box-shadow: inset 1px 1px #fff, inset -1px -1px #404040;
          }
          /* Firefox */
          .win95-scrollbar {
            scrollbar-color: #808080 #c3c7cb;
            scrollbar-width: auto;
          }
        `})]})}function R4(){const[n,t]=B.useState([]);return B.useEffect(()=>{fetch("https://api.github.com/repos/abdessalamzarrouk/95-Portfolio/commits").then(i=>i.json()).then(i=>t(i)).catch(i=>console.error(i))},[]),A.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"30px"},children:A.jsx("div",{style:{border:"8px solid #999",borderRadius:"12px",background:"#ccc",width:"400px",height:"350px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"inset 0 0 10px #555"},children:A.jsx("div",{style:{flex:1,width:"90%",margin:"10px",background:"#222",padding:"6px",display:"flex",justifyContent:"center",alignItems:"center",border:"4px inset #666"},children:A.jsxs(Tn,{style:{width:"100%",height:"100%"},children:[A.jsx(En,{children:"CHANGELOG.TXT"}),A.jsx(Ze,{style:{padding:0},children:A.jsx(Ir,{style:{height:"230px",background:"white",padding:"6px"},children:n.slice(0,8).map(i=>A.jsxs("div",{style:{marginBottom:"8px"},children:[A.jsx("b",{children:i.commit.author.name}),": ",i.commit.message,A.jsx("br",{}),A.jsx("small",{children:new Date(i.commit.author.date).toLocaleString()})]},i.sha))})})]})})})})}function C4(){const[n,t]=B.useState([]),[i,a]=B.useState(""),[l,c]=B.useState(""),[f,p]=B.useState("");B.useEffect(()=>{const g=T1(Ch(gu,"guestbook"),w1("createdAt","desc")),_=R1(g,T=>{t(T.docs.map(S=>({id:S.id,...S.data()})))});return()=>_()},[]);const y=async g=>{if(g.preventDefault(),!(!i.trim()||!f.trim()))try{await x1(Ch(gu,"guestbook"),{name:i,email:l||null,message:f,createdAt:me.now()}),a(""),c(""),p("")}catch(_){console.error("Error adding entry:",_)}};return A.jsxs(Tn,{className:"w-full max-w-md mx-auto",children:[A.jsx(En,{children:A.jsx("span",{children:"Guestbook.exe"})}),A.jsxs(Ze,{children:[A.jsxs("form",{onSubmit:y,className:"flex flex-col gap-2 mb-3",children:[A.jsx(la,{value:i,placeholder:"Your name...",onChange:g=>a(g.target.value),fullWidth:!0}),A.jsx(la,{value:l,placeholder:"Your email (optional)...",onChange:g=>c(g.target.value),fullWidth:!0}),A.jsx(la,{value:f,placeholder:"Leave a message...",onChange:g=>p(g.target.value),fullWidth:!0}),A.jsx(ce,{type:"submit",children:"Sign"})]}),A.jsx(Ir,{style:{height:"300px",background:"white",padding:"4px",display:"flex",flexDirection:"column",gap:"8px"},children:n.length===0?A.jsx("p",{children:"No signatures yet."}):n.map(g=>{var _;return A.jsxs(bo,{variant:"outside",shadow:!0,style:{padding:"0.5rem",width:"100%",boxSizing:"border-box"},children:[A.jsxs("p",{style:{margin:0,fontWeight:"bold",wordBreak:"break-word"},children:["[",new Date(((_=g.createdAt)==null?void 0:_.seconds)*1e3).toLocaleString(),"]"," ",g.name," signed the guestbook:"]}),A.jsxs(bo,{variant:"inside",style:{marginTop:"0.5rem",padding:"0.5rem",wordBreak:"break-word",whiteSpace:"pre-wrap"},children:[g.message,g.email&&A.jsxs("p",{style:{fontSize:"0.8rem",color:"gray",marginTop:"0.3rem",wordBreak:"break-word"},children:["Email: ",g.email]})]})]},g.id)})})]})]})}const D4="/95-Portfolio/assets/ms_sans_serif-Du8rjN1q.woff2",k4="/95-Portfolio/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var bm,o_;function I4(){if(o_)return bm;o_=1;var n={name:"blue",anchor:"rgb(0, 0, 128)",anchorVisited:"rgb(0, 0, 128)",borderDark:"rgb(49, 131, 221)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(166, 202, 240)",borderLightest:"rgb(211, 228, 248)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(49, 131, 221)",canvasTextDisabledShadow:"rgb(211, 228, 248)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(49, 131, 221)",desktopBackground:"rgb(58, 110, 165)",flatDark:"rgb(49, 131, 221)",flatLight:"rgb(166, 202, 240)",focusSecondary:"rgb(211, 228, 248)",headerBackground:"linear-gradient(to right, rgb(0, 0, 128), rgb(16, 132, 208))",headerNotActiveBackground:"linear-gradient(to right, rgb(49, 131, 221), rgb(49, 131, 221))",headerNotActiveText:"rgb(0, 0, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(51, 153, 255)",material:"rgb(166, 202, 240)",materialDark:"rgb(49, 131, 221)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(49, 131, 221)",materialTextDisabledShadow:"rgb(211, 228, 248)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(51, 153, 255)",tooltip:"rgb(225, 225, 255)"};return bm=n,bm}var N4=I4();const l_=u_(N4);function V4({onReboot:n}){const[t,i]=B.useState(0);return B.useEffect(()=>{const a=setInterval(()=>{i(l=>l>=100?(clearInterval(a),setTimeout(n,1500),100):l+1)},30);return()=>{clearInterval(a)}},[n]),A.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"#0000AA",color:"white",fontFamily:"monospace",padding:"20px",zIndex:9999,lineHeight:"1.2"},children:[A.jsx("p",{children:"A problem has been detected and Windows has been shut down to prevent damage to your computer."}),A.jsx("br",{}),A.jsx("p",{children:"PORTFOLIO_CRASH_LOL"}),A.jsx("br",{}),A.jsx("p",{children:"If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:"}),A.jsx("br",{}),A.jsx("p",{children:"Check to be sure you have adequate disk space. If a driver is identified in the stop message, disable the driver or check with the manufacturer for driver updates. Try changing video adapters."}),A.jsx("br",{}),A.jsx("p",{children:"Check with your hardware vendor for any BIOS updates. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode."}),A.jsx("br",{}),A.jsx("p",{children:"Technical information:"}),A.jsx("br",{}),A.jsx("p",{children:"*** STOP: 0x000000FE (0x00000008, 0x00000006, 0x00000009, 0x84C6657C)"}),A.jsx("br",{}),A.jsx("p",{children:"***   just_kidding.sys - Address 84C6657C base at 84C66000, DateStamp 48025c27"}),A.jsx("br",{}),A.jsx("p",{children:"Beginning dump of physical memory..."}),A.jsxs("p",{children:["Physical memory dump: ",t]}),t===100&&A.jsxs(A.Fragment,{children:[A.jsx("p",{children:"Physical memory dump complete."}),A.jsx("p",{children:"Contact your system administrator or technical support group for further assistance. Just kidding, rebooting now..."})]})]})}const M4="/95-Portfolio/assets/winxp-aEloBXO0.png",O4="/95-Portfolio/assets/psx_graphics-D5Raoe1Z.gif",j4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAD////AwMAAAIAAAP/jaa47AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAiklEQVQoz52QwQ3DIBAEQUoBrF0BujTAJQ3Ykgvwg/5bCZwjsRfLD2dfMBpYuBD+TQSQfvaOAJ7EL8Al6OtJtYAFEcmJQBO08BVNeC5kdOG90h2zWJIzWgYwJXOtcks4WiTzZ70Rj5ZhBExldBiYhf5qhuqLR7hgPLPnUSvcka1aEgmW/RKcZnwzH3+2Gx0TJwQiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAw5EF/4AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NjoyMC0wNDowMJUcx1wAAAAASUVORK5CYII=",L4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEUAAACZmZnn59bMzMyGhoZmZmYEBATAwMD////q6ur/+/AAMzMAmZkAgIAAZmYzzMwzM5mZzP8AM5nMzP+ZmcwcHBzj4+MiIiJVVVWtqZAz/2YAgACWLo3QAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBBMBJCt84jxJAAABaUlEQVRIx5WV0XKDIBBFZRWFpBhrS03i//9nF4S6KCz2MM74cA8XDNGmoQie5oiAtgx0sj/lhzKYPwpCcWD+IAily7j5MwIU0DDkhJuGe56CgA33jw0ThxnNOI6c8MBxMtgGzE8JaNQapk/CXGtApi/CXGlI1jPPKJQbbpvwTUDBlhuCAPtxaJ1Q28ME0QDVWrZBpQ2gwAtXG8A3IBca/kZrDVJ7SvGIun+ZE6pPyWMD9bNk0uHybEOaDnl2SYYwxsEIY5aC8MO8A4KwLIkAZbzQSykWKjCvMSe4vKSCfLL4/NOSNfU8Pi93QVYReO0NAo8aHfi2boc4HC+3bdIgVJr3Z48aXkgb3u91nz+k43KyDeu6JvM7J+54E56FPRxXc2kP0UkE0oD53O/7InRpPnw54jfldIPnz9K8VkPPXXj8hP1nXtjree3ykqzfzcFdh7yGGjRf+Zxv0DwKQxWab0RXh+YbYS9A8r/yizreWBxUTwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNjo0My0wNDowMNV8Hl4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzY6NDMtMDQ6MDCkIabiAAAAAElFTkSuQmCC",B4="/95-Portfolio/assets/clippynew-CEUdfum9.gif",z4="/95-Portfolio/assets/clippy-C-IeEyKo.png",P4="/95-Portfolio/assets/audio-0lOX-5ar.mp3",U4="/95-Portfolio/assets/granturismo-jbWZY7ai.gif",$4="data:image/png;base64,R0lGODlh3ADcAPUAAAsHAyoaC204C244C3lkGVBcMmxsQWxtQZhYC7x8C719DK10I6l5NsFRCcJRCHWFPHCSYHCTYraONNmRDeimDuimD/myDPizDM2dKM2eKc2wNc2wNuy3K+23K7KfT7KeUKuzX929X3+z6n+z69XBkdXBktTKuwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAQKAAAAIf4fR2VuZXJhdGVkIGJ5IG9ubGluZUdJRnRvb2xzLmNvbQAsAAAAANwA3AAABv/AkXBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NGABtTV1tQE2doL3ATXBtJs3+MG2gTc6NkP3tThaQ/w8ebz6NwJ9/cICAsI5tXuYqjBkyABnb596O4pSDABn0N8B7NdA9jFwEAJGwhyQ7jg4b0JIEM29NgNnjWKWAQukDABQwWQHkWGfClTpsIE6di1Q1nlIgb/DDJ//qxAs+ZMo/fqEXjwj2cUi+cWTCA6NeTPDSGyat2AgavQr1/vYWD4EAG+jtzWxXN6xOJKoFStdtVKN6tXsGMdAmU48izalRrXsh1CbcEDCUNpvpxLonHjuiE+SPjwYYNly18lJAAaMiZYgoLZWiQolKjpCoxNOAZB2XFkypC3/hT5cGqFDhU2dLD8IcKDwaMxIE5MNXcIEiaSkwDBwNsHx5Q/HHfsOitn2gxNX7jdYfcGEBEiOHWLoYNQkKbnHk+uOkKBAAMMPF8+nz376tdlVrjAv393y+D9RpFFh5WX30uodTAdexEY8F4A8CG3XGP2UUeCdfnN1J9/3oEA/x5KDyzgUlE16baecgZAqGIAIKiGXIUfMGAAA9KF0N1sIu3XwYb8ddcBCBKIB1CBHRhlVVYvqpZiAABAWIBj9iXnHoQDEKBVdzlO1R2PF/zHmpDSDARXTfi0pGCSJCypYgEgJMnggxAacJyNuOl3WpcbehdeOAWaJtJeH2F1opIrBvBklISuOMBzdNoZ1215WrYnNG4hRmJLeYnV3YKqMQBnhIiS8GCT8DHanWJV6Zfnbh6C2cxFQf1UkD6bbTooCZ7CV4ABUN43KpWm4hYXTArZtmqrri5jEY5yaUSrj1rBKCON1PnKpIqLXngqiT85NNWqWX346krDgkSQBOtkk/+AbrZGaWG1KBZqpbZ+ysWPWS5xGcJ3vTVjwGRFygSaORj9h5W7FL77Jrbz2VgvSF1JQGu+PO4bgrjKLOvSnxhIBo826xrMb4wxMmByeDR+0KZyIFBDbVbbkriBBxJkgwDFq36X7DHwMAtxx+imS0BXPm4Qo4NUDqB0AQXEJx+FylEHs7AyS6YNzhzqrGyB+QkFAlMCDe2jeTUPUOjZ8TEw3YV0+XgaxBNEt87N+/FoMAhbP4BaUbKKK1B5PmKwgNmFAmD44fARUGNdPm5X70+UySNB3VyyuvVwfBPUIGEPEO3d4Gcfjjh8Cyw+9ZZv0xQ5UwRMzmWPOu88zGh7Qzz/Wb+cF+ydBIQbrmKTow+AgARjN+7425CHx7rrr7OKsTG0pwo5A0WMxq53BEAouu+kUnlO8Vvy9zamKvtWzgaU2/3d88VY9IF5P5d/hHTQbsAA4b+Lju3wRG2Yvp+5wQB4GlSO972uS1jxUDLcBz/yfUBARZAACMYWgvsVDnGkEp7r9pM+8Z3mJwPEBvoOuJvj4C0ZEQDBXSgzwCM8QIWWyQrvzoY2AmxGfNvhkZ9k1RvxYOMDHeSQCZWRwozwcFJG6BnRQuCBBWRDaTSsku7Cp0OqyCpIQirgjpp3phMiIzzRoQwSjTAajFwmI058otKUdg6sgK+KNIEc7kagxS3a/62Ly0ihh3rIBMrgRTjn4kZBPAc+OyJPMmMcAQEmaEdwLSePegyP7Iqgsg0kQDOb6YqgIFPI8I0PaIlUHBUd6cXBeAhImunIJU3EyU56MI6TeUAoDcjFi5WSLSqzS172gZgzXk9YM+nfdqwSy1BOkIR4HIwQwuOhfUlAAQVZiSAxWZYy9c+KmpPdC0cpxEcqc5kptItX/LKAhdTmI8YiJgMSKYRtNlKI7BuMHu2yr0xlsiWnSd2wuLFObYKATnf8zjeLwEzKWMY7QulkzIalAH4mQZZuXJXlBkoEMBr0jAod2/ga0o0kGCACKitkuChqBDCy5p+nU2i5JrCA5oBDCf/hjKGCbHlLkn70AdHxSvGI4rZhOeCnDkCA0pYgSxiy8pQkPYLySiYiwJknodcBKlDXOIJJEuGUy6lpUiuKDX04gC9GkapY11gAJujxlFbdKh0NoDQEiPWtcP3pGqv0UrWmhK3Ci6tegSrUKrHDrnc1gFD3StignsMkgLWCywZb2LgypCMSYAA80ppYj87Iq419688A2UPKVpaMDTJZZoFqJNtFFmyfbQLKRDta21zKtA9kZ2pLmsILYcCxYDVWPncLSHR59rPicU2G0LPbHB6QKEJB5G8r+yK29RRS/qsbN1+JGuHIcrZKuM/pDshdOCJXOHPE7lW1S6d3dve46en/WHjFK4QWqeZK5j0veoeZEdnO1r3Ona580UsUAC03qe6Dr373y6V8yvG/FA1weQdM4OimV37shYcbx9Zg+e42N/H8rITfWOHuXlhrEf4nhTt83tRNwGharaw7jUdi7u62JZSpqnhXzOAWH2+HMUawMhdwPRt7OJ9TucrXxMtjFvu4wECurgR1PJgi19jGJo7fehPrZBweGY62kYsYsVtk6l65P4/ilhiZzJMuX1iYLQbgSkFIZpQU+czaSXNx1izAKav1zcNScxAt/NqjxC1IqcVzadFM4IflKC5j/iyPDW2nCjO6Jt+1c1IXvVJVNfjRdkqeonVT6YZoaL9RLq1Q/yZTWUETKwHmzA6oNzro72IRsG/ujEf4supOQ9rV9v1mrIl1EFqpusSYDuYHhcMaWHNa1r02y69d3GdHGViAKVamAUw9q2RLZc/RLa2weVuZXI/HyahhaV/XSCtsv1LWtz5zxzbgbZRQI2Q3Ety422qWCfy4L+g89JlbAuIEGwDeQhncXNvKkHvXRt8XtsqXbPpvdsnqfmYjd72Zfep8E3ffDmwzM5byk3iXLWkEoJW9KzdMfFvctXAmSqIHyvFTCceJhKuSKkHi4orn+043BvLKpd26sWVERjHn8Wz2vKOXzDqYDv5wv4GD07FhoDn4a52NRtQ8mqDaW59+Xeowkv/hAT0A3mQjAP4GIKI6BdFtJr+5uY8XZAFqHBkSdvjTxY6tshOaQ3WKCV/Wzvbqdt0d8HifyyPL1rqX5+49qlPacwRsBLH57cUIvNsKQnfDC4uLRo9J1vkbv3ZD4zDXm4DE8AefASyb5Lw+57d+7PiOXZcn5HGqcCpPpXqbe0cjOYgqvcX69BZElpAHhvXkLvD9dQTxPMp9sg9ScGbvkLOev5zbxiLUFZ0jMd0NWALMkuwy9b7tBFFZC91hkV9ioB9jZ4Cl+G71o6Pn+y05l/hb5Y6WB07g5EYMbhpfrjvx/XjgFVnzhyzBpwvX53TzZhacxn5nRmJWZF3xwExoVVX/BUgLTPEWuFEeo0duxIF8jnNx/4de6uUb5gNOZ0WBGRMPmeRq47YP5oEg5hZmHshndcZOknRWAxR9sjAO8TAcnLEZ/EBuCxBmNQeCIYhkGECCMCWBaFWBoUAghxFIGgFVY9ENczU8ird6r+NsaWY0MqZaI3BKYviFtUAgk+FLeHEW6Jd/WYh8RQFWM+hhGQEFNyiG0fYK5TAc6GMaGYgp0XQvA0c3JFI3/3NqSHdp/fUBlPIvHUc1D4MTG6EPgZgAl3JNhJh5FheHVWQeivgMYvJL6dESOJFsgWgWRZFyRIF1OMd6/yFAn/cBTvVcVTiK8yZx94CKQOZp+eRiYMZT/7uhMs8AUipUSNVFiwMnhAwxIrj4MNxRYpXDG044Cx9lUD6HGRoRhMc4MYDjOEmXcjVGaDvCG5JmDBbFFfFmjWmUjYDRiPFFXbtlPG4YUEYzjscgHiAVRirzQNTwKfCBhY7ogc/mFWc0FuoxNuhRPBMYDcpzEXKDNIUiPE2Fco13FZp0GXlBSFiiJZvyI+PnDg0CfHsyKr5DdhjRgczmHeIYHXs0ELmUFZJBEDGUkLBHhkxTKDNSGRtAXO3YJSgpNxHoG/GAU3tUMreDVNGYDExzk5FBGk6ldPOYgzcYHtUQlUE5WTqoTGd1Lgd1F5qkIE14lIlVVEGJk0KRSQBCgGPsVRHMNJbid5VpCQVJGQ8CEZSS9JZ2eZd4mZd6uZd82Zd++ZeAGZiCOZiEWZiGeZiImZiKuZiM2ZiO+ZiQGZmSOZmUWZmWeZmYmZmauZmc2Zme+ZmgGZqiOZqkWZqmeZpbEAQAOw==",H4="/95-Portfolio/assets/dog-Tp5J6lE8.gif",Y1="/95-Portfolio/assets/cursor95-DuPSQt5_.png",q4=n=>{const t=document.getElementById(n);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};function G4({searchTerm:n,results:t,onClose:i}){return A.jsxs(Tn,{style:{width:400,position:"fixed",top:"15%",left:"50%",transform:"translateX(-50%)",zIndex:101},children:[A.jsxs(En,{className:"flex justify-between items-center",children:[A.jsxs("span",{children:['Results for "',n,'"']}),A.jsx(ce,{size:"sm",onClick:i,style:{marginRight:"-6px",marginTop:"-5px"},children:A.jsx("span",{className:"close-icon"})})]}),A.jsx(Ze,{children:t.length>0?A.jsx(Ir,{style:{height:"150px"},children:A.jsx("ul",{children:t.map(a=>A.jsx("li",{style:{marginBottom:"8px"},children:A.jsxs(ce,{onClick:()=>{q4(a.sectionId),i()},fullWidth:!0,children:["Found in: ",A.jsx("strong",{children:a.sectionTitle})]})},a.sectionId))})}):A.jsx("p",{children:"No results found."})})]})}const F4=[{id:"Projects",title:"Projects",content:"ShieldOps academic project CI/CD cybersecurity. PSX_GRAPHICS PlayStation 1 game development Psy-Q. ThreadTalk Reddit-inspired discussion platform."},{id:"About",title:"About Me",content:"Abdessalam Zarrouk tinkering with computers Dell Optiplex HP Compaq DC7600 Windows XP online gaming Counter-Strike 1.6 Minecraft. Dell Latitude E5450 programming Python C C++ Java web development. Hobbies BMW M3 E92 M3 GTR Assetto Corsa sim racing making beats Hip Hop 90s House."},{id:"Skills",title:"Skills",content:"Programming Languages: JavaScript React Node.js Python Java C C++ C# SQL. Web Development: Redux Tailwind CSS Styled-Components HTML5 CSS3 REST APIs. Database & Backend: Firebase Firestore Auth PostgreSQL MySQL MongoDB Express.js. Tools & Platforms: Git GitHub Docker Jenkins VS Code. Game Development: Psy-Q SDK ARMIPS mkpsxiso. Soft Skills: Problem Solving Team Collaboration."},{id:"Contact",title:"Contact Info",content:"Get In Touch email abdessalam.zarrouk@email.com LinkedIn GitHub"}],Q4=n=>{if(!n)return[];const t=n.toLowerCase(),i=[];return F4.forEach(a=>{a.content.toLowerCase().includes(t)&&i.push({sectionId:a.id,sectionTitle:a.title})}),i},Y4="/95-Portfolio/assets/computer-DTwMCg80.gif",K4="/95-Portfolio/assets/crash-CYQgwW5L.mp3",X4=Vw`
  ${BC}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${D4}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${k4}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: rgb(127, 179, 235);
    margin: 0;
    padding-top: 150px;
    box-sizing: border-box;
    cursor: url(${Y1}) 16 16, auto; /* 16 16 = hotspot center of the cursor */
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
`;lt.div`
  cursor: url(${Y1}), auto;

  /* enforce custom cursor on all children */
  * {
    cursor: inherit !important;
  }
`;function Z4({onComplete:n}){const[t,i]=B.useState(0),[a,l]=B.useState("");return B.useEffect(()=>{const c=setInterval(()=>{i(f=>{const p=Math.min(f+Math.random()*15,100);return p>=100&&(clearInterval(c),setTimeout(n,500)),p})},300);return()=>clearInterval(c)},[n]),B.useEffect(()=>{const c=setInterval(()=>{l(f=>f.length<3?f+".":"")},500);return()=>clearInterval(c)},[]),A.jsx("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgb(127, 179, 235)",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"ms_sans_serif, sans-serif",color:"black"},children:A.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",transform:"translateY(-20%)"},children:[A.jsxs("div",{style:{fontSize:"18px",marginBottom:"16px"},children:[A.jsx("img",{src:"https://external-media.spacehey.net/media/sl7DuoYLeoWJ4jBmR7haKpN9OvPKoqCxZYtZAOJCMY1M=/https://blinkies.cafe/b/display/0222-construction.gif",alt:"construction.gif"}),"Loading",a]}),A.jsx(Ih,{variant:"tile",value:Math.floor(t),style:{width:300}})]})})}function W4(){const[n,t]=Q.useState(!1);return A.jsx("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:n?A.jsx("img",{src:B4}):A.jsx("img",{src:z4})})}function J4(){const[n,t]=Q.useState(!1);return A.jsx("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:n?A.jsx("img",{src:H4}):A.jsx("img",{src:$4})})}function tI(){const[n,t]=B.useState(!1),[i,a]=B.useState(!0),[l,c]=B.useState(!1),[f,p]=Q.useState(!0),[y,g]=B.useState({width:700,height:550}),_=(visualViewport.width-y.width)/2,T=(visualViewport.height-y.height)/2,[S,M]=B.useState({x:_,y:T}),[G,K]=B.useState("p1"),z=B.useRef({isDragging:!1,startX:0,startY:0}),[nt,J]=B.useState(!1),X=B.useRef(null),mt=B.useRef(null),[st,ut]=B.useState(""),[R,x]=B.useState([]),[D,V]=B.useState(!1),N=vt=>{if(vt.key==="Enter"&&vt.target.value){const F=vt.target.value;ut(F),x(Q4(F)),V(!0),vt.target.value=""}},j=()=>{J(!1),mt.current&&(mt.current.currentTime=0,mt.current.play()),c(!0)};B.useEffect(()=>{X.current&&(nt?(X.current.muted=!1,X.current.play().catch(()=>{})):X.current.pause())},[nt]),B.useEffect(()=>{const vt=ht=>{if(z.current.isDragging){const ft=ht.clientX-z.current.startX,Tt=ht.clientY-z.current.startY;M(I=>({x:I.x+ft,y:I.y+Tt})),z.current.startX=ht.clientX,z.current.startY=ht.clientY}},F=()=>{z.current.isDragging=!1};return window.addEventListener("mousemove",vt),window.addEventListener("mouseup",F),()=>{window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",F)}},[]);const C=[{label:"Me",value:"p1"},{label:"Hobbies",value:"p2"}],Mt=vt=>{K(vt.value)};return A.jsxs(A.Fragment,{children:[A.jsx(X4,{}),l&&A.jsx(V4,{onReboot:()=>{c(!1),a(!0)}}),i?A.jsx(jv,{theme:l_,children:A.jsx(Z4,{onComplete:()=>a(!1)})}):A.jsxs(jv,{theme:l_,children:[A.jsx(D1,{className:"fixed top-0 left-0 w-full z-50",children:A.jsxs(vo,{className:"flex justify-between px-4",children:[A.jsxs("div",{className:"relative inline-block",children:[A.jsxs(ce,{onClick:()=>t(!n),active:n,style:{fontWeight:"bold"},children:[A.jsx("img",{src:M4,alt:"win xp logo",className:"h-5 mr-1"}),"Start"]}),n&&A.jsxs(k1,{style:{position:"absolute",left:0,top:"100%",zIndex:999,minWidth:"200px"},onClick:()=>t(!1),children:[A.jsx(Kl,{className:"flex items-center gap-2",onClick:()=>window.open("https://github.com/abdessalamzarrouk","_blank"),children:"GitHub Profile"}),A.jsx(Kl,{className:"flex items-center gap-2",onClick:()=>window.open("https://www.linkedin.com/in/abdessalam-zarrouk/","_blank"),children:"LinkedIn Profile"}),A.jsx(Kl,{onClick:()=>p(vt=>!vt),children:f?"Remove Stars":"Show Stars"}),A.jsx(ci,{}),A.jsxs(Kl,{onClick:j,children:[" ",A.jsx(Xl,{text:"You are stuck here 🤷‍",enterDelay:100,leaveDelay:500,children:"Logout"})]})]})]}),A.jsx("a",{href:"#Projects",children:A.jsx(ce,{variant:"menu",children:"Current Projects"})}),A.jsx(is,{size:38}),A.jsx("a",{href:"#About",children:A.jsx(ce,{variant:"menu",children:"About Me"})}),A.jsx(is,{size:38}),A.jsx("a",{href:"#Skills",children:A.jsx(ce,{variant:"menu",children:"Skills"})}),A.jsx(is,{size:38}),A.jsx("a",{href:"#Skills",children:A.jsx(ce,{variant:"menu",children:"Chat"})}),A.jsx(is,{size:38}),A.jsx("a",{href:"#Community",children:A.jsx(ce,{variant:"menu",children:"Community"})}),A.jsx(is,{size:38}),A.jsx("a",{href:"#Contact",children:A.jsx(ce,{variant:"menu",children:"Contact info"})}),A.jsx(is,{size:38}),A.jsx(ce,{variant:"menu",onClick:()=>J(vt=>!vt),style:{minWidth:110},title:nt?"Click to mute":"Enable background music",children:nt?"Sound: On":"Sound: Off"}),A.jsx(la,{placeholder:"Search...",width:150,onKeyDown:N})]})}),D&&A.jsx(G4,{searchTerm:st,results:R,onClose:()=>V(!1)}),A.jsx(Ow,{enabled:f}),A.jsx("audio",{ref:X,src:P4,loop:!0,muted:!nt}),A.jsx("audio",{ref:mt,src:K4})," ",A.jsxs("main",{className:"w-full min-h-screen px-4 flex flex-col items-center bg-[rgb(127,179,235)]",children:[A.jsx("section",{className:"mb-10 w-full pt-5",children:A.jsxs("div",{className:"relative flex justify-center w-full items-center",children:[A.jsxs("div",{className:"max-w-2xl text-center",children:[A.jsx("h1",{className:"text-4xl font-bold underline mb-4",children:"Hi, I’m Abdessalam Zarrouk!"}),A.jsxs("h2",{className:"text-3xl font-bold mb-4 flex justify-center items-center gap-2",children:[A.jsx(Xl,{text:"Yes that's me.",enterDelay:100,leaveDelay:100,children:A.jsx("img",{src:j4,alt:"user logo",className:"h-8 "})}),"A passionate software engineer and lifelong learner"]}),A.jsxs("p",{className:"text-lg text-gray-700 flex justify-center items-center gap-2",children:[A.jsx("img",{src:L4,alt:"computer icon",className:"h-7"}),"I enjoy building creative projects, solving problems, and exploring new technologies. This portfolio showcases some of my work and interests."]})]}),A.jsx("div",{className:"absolute right-0 flex items-center h-full pr-40",children:A.jsx("img",{src:Y4,alt:"Retro computer gif",style:{width:"120px"}})})]})}),A.jsx(ci,{size:"1200px",className:"flex justify-center mb-4"}),A.jsx("h1",{className:"text-4xl font-bold mt-10",id:"Projects",children:"Current Projects :"}),A.jsx("section",{className:"w-full flex justify-center mt-10 mb-14",children:A.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-screen-xl w-full",children:[A.jsx(Tn,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:A.jsxs("a",{href:"https://github.com/abdessalamzarrouk/ShieldOps",children:[A.jsx(En,{children:A.jsx("span",{children:"ShieldOps.txt"})}),A.jsxs(Ze,{children:[A.jsx("p",{children:"Progress : Under Construction  "})," ",A.jsx(Ih,{variant:"tile",value:Math.floor(30)})]}),A.jsx(Ze,{children:A.jsx(Ir,{style:{width:"100%",height:150},children:A.jsxs("p",{children:["This is an ",A.jsx("span",{className:"font-bold",children:"academic project"})," that is dedicated to learning how to set up a CI/CD pipeline that will include some",A.jsx("span",{className:"font-bold",children:" cybersecurity"})," features like code and dependency vulnerabilities detection and prevention."]})})}),A.jsx(Ze,{children:A.jsx(Ir,{style:{width:"100%",height:66},children:A.jsxs("p",{children:[A.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used : "})," Docker, Jenkins, OWASP ZAP, Snyk, Trivy, SonarQube."]})})})]})}),A.jsx(Tn,{className:"w-full max-w-md overflow-hidden transition-transform duration-300 hover:scale-110",children:A.jsxs("a",{href:"https://github.com/abdessalamzarrouk/PSX_GRAPHICS",children:[A.jsx(En,{children:A.jsx("span",{children:"psx_graphics.txt"})}),A.jsxs(Ze,{children:[A.jsx("img",{src:O4,alt:"PSX Graphics",className:"w-full mb-5"}),A.jsxs("p",{children:["This is a ",A.jsx("span",{className:"text-[#DF0024] font-bold",children:"Play"}),A.jsx("span",{className:"text-[#f3c300] font-bold",children:"Station"})," ",A.jsx("span",{className:"font-bold",children:"1"})," game development project where i showcase some of the demonstrations i made using the infamous ",A.jsx("span",{className:"font-bold",children:"Psygnosis Source Development Kit"})," (Psy-Q)."]}),A.jsxs("p",{children:[A.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used :"}),"  Psy-Q SDK, ARMIPS, Make, mkpsxiso."]})]})]})}),A.jsxs(Tn,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:[A.jsx(En,{children:A.jsx("span",{children:"ThreadTalk.txt"})}),A.jsxs(Ze,{children:[A.jsx("p",{children:"Progress : Under Construction  "})," ",A.jsx(Ih,{variant:"tile",value:Math.floor(0)})]}),A.jsx(Ze,{children:A.jsx(Ir,{style:{width:"100%",height:115},children:A.jsxs("p",{children:["This is an idea that I had in mind. It's basically an inspiration from ",A.jsx("span",{className:"font-bold",children:"Reddit"})," that involves users discussing about ",A.jsx("span",{className:"font-bold",children:"topics"})," that they are interested in and ",A.jsx("span",{className:"font-bold",children:"sharing opinions"}),"."]})})})]})]})}),A.jsx(ci,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),A.jsx("section",{className:"mb-10 w-full text-center pt-5 mt-10 h-full min-h-[85vh]",id:"About",children:A.jsxs("div",{className:"relative flex justify-center w-full items-center",children:[A.jsx("div",{className:"absolute left-0 flex items-center h-full",children:A.jsx(W4,{})}),A.jsxs("div",{className:"max-w-2xl text-center",children:[A.jsx("h1",{className:"text-4xl font-bold mb-4",children:"About Me"}),A.jsx(ng,{formatDisplay:vt=>`${vt.label?vt.label:"CANNOT RETRIEVE VALUES"}`,onChange:Mt,options:C,width:220}),G==="p1"&&A.jsxs(Tn,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:S.x,top:S.y,width:y.width,height:y.height},children:[A.jsxs(En,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:vt=>{z.current.isDragging=!0,z.current.startX=vt.clientX,z.current.startY=vt.clientY},children:[A.jsx("span",{children:"Me.exe"}),A.jsx(ce,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:A.jsx("span",{className:"close-icon"})})]}),A.jsxs(vo,{children:[A.jsx(ce,{variant:"menu",size:"sm",children:"File"}),A.jsx(ce,{variant:"menu",size:"sm",children:"Edit"}),A.jsx(ce,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),A.jsxs(Ze,{children:[A.jsxs("p",{children:["From ",A.jsx("span",{className:"font-bold",children:"tinkering with computers as a kid"})," to ",A.jsx("span",{className:"font-bold",children:"building complex software projects"})," today, I’ve always been fascinated by how ",A.jsx("span",{className:"font-bold",children:"technology"})," can solve real problems. I’m ",A.jsx("span",{className:"font-bold",children:"Abdessalam Zarrouk"}),", and I love ",A.jsx("span",{className:"font-bold",children:"learning"}),", ",A.jsx("span",{className:"font-bold",children:"experimenting"}),", and ",A.jsx("span",{className:"font-bold",children:"sharing my journey"})," through the projects I build."]}),A.jsx("br",{}),A.jsxs("p",{children:["My experience with computers first started with an ",A.jsx("span",{className:"font-bold",children:"old Dell Optiplex"}),", where I first learned about ",A.jsx("span",{className:"font-bold",children:"Windows XP"}),". Then I moved on to an ",A.jsx("span",{className:"font-bold",children:"HP Compaq DC7600"}),", which was an upgrade from the Dell (mostly good and bad). It was then that I learned that desktop computers get dusty and need some RAM cleaning from time to time, which was frustrating. This was the first computer where I experienced ",A.jsx("span",{className:"font-bold",children:"online gaming"})," with the surge of modems and broadband connections. I remember playing games like ",A.jsx("span",{className:"font-bold",children:"Counter-Strike 1.6"})," and ",A.jsx("span",{className:"font-bold",children:"Minecraft"})," when they first blew up."]}),A.jsx("br",{}),A.jsxs("p",{children:["Fast forward about 13 years, I purchased my first laptop, a ",A.jsx("span",{className:"font-bold",children:"Dell Latitude E5450"}),", which was a beast when coupled with a good ",A.jsx("span",{className:"font-bold",children:"SSD"}),". It was then that I started learning ",A.jsx("span",{className:"font-bold",children:"programming"})," with languages like ",A.jsx("span",{className:"font-bold",children:"Python, C, C++, and Java"}),". I also learned about ",A.jsx("span",{className:"font-bold",children:"web development"})," and how the ",A.jsx("span",{className:"font-bold",children:"internet"})," works. I started building ",A.jsx("span",{className:"font-bold",children:"small projects"})," and ",A.jsx("span",{className:"font-bold",children:"experimenting with different technologies"}),". Even today, I cherish those moments with that Dell and HP desktop—those were the ",A.jsx("span",{className:"font-bold",children:"foundations of my passion"}),"."]})]}),A.jsx(bo,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]}),G==="p2"&&A.jsxs(Tn,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:S.x,top:S.y,width:y.width,height:y.height},children:[A.jsxs(En,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:vt=>{z.current.isDragging=!0,z.current.startX=vt.clientX,z.current.startY=vt.clientY},children:[A.jsx("span",{children:"Hobbies.exe"}),A.jsx(ce,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:A.jsx("span",{className:"close-icon"})})]}),A.jsxs(vo,{children:[A.jsx(ce,{variant:"menu",size:"sm",children:"File"}),A.jsx(ce,{variant:"menu",size:"sm",children:"Edit"}),A.jsx(ce,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),A.jsxs(Ze,{children:[A.jsxs("p",{children:["Not a car expert, but the",A.jsx("span",{className:"font-bold text-sky-700",children:" BMW M3 E92 "}),"and",A.jsx("span",{className:"font-bold text-indigo-700",children:" M3 GTR "}),"grabbed me—the high‑revving V8 and that",A.jsx("span",{className:"font-semibold text-rose-600",children:" whining gear‑change sound "}),"just hits the right mix of character."]}),A.jsx("br",{}),A.jsxs("p",{children:["I enjoy ",A.jsx("span",{className:"font-semibold text-emerald-600",children:"GT3 sim racing"})," in",A.jsx("span",{className:"font-bold text-red-600",children:" Assetto Corsa"}),", dialing in pacing, braking points, and smooth inputs. That tweak → test → repeat loop feels like refactoring code."]}),A.jsx("br",{}),A.jsxs("p",{children:["I also make beats—mainly",A.jsx("span",{className:"font-bold text-amber-600",children:" Hip Hop"})," and",A.jsx("span",{className:"font-bold text-fuchsia-600",children:" 90s House"}),". Chopping samples, shaping",A.jsx("span",{className:"font-semibold text-slate-800",children:" drums"}),", and balancing",A.jsx("span",{className:"font-semibold text-teal-600",children:" basslines"})," sharpen timing, pattern recognition, and iteration."]}),A.jsx("br",{}),A.jsx("p",{className:"font-semibold",children:"A few games that shaped how I think:"}),A.jsxs("ul",{className:"mt-1 mb-3 pl-5 list-disc",children:[A.jsxs("li",{children:[A.jsx("b",{className:"text-red-600",children:"Assetto Corsa:"})," Precision & discipline."]}),A.jsxs("li",{children:[A.jsx("b",{className:"text-yellow-600",children:"Counter-Strike 1.6:"})," Fast decisions & teamwork."]}),A.jsxs("li",{children:[A.jsx("b",{className:"text-green-600",children:"Minecraft:"})," Open-ended building & experimentation."]})]}),A.jsxs("p",{children:["These hobbies keep me",A.jsx("span",{className:"font-semibold text-blue-700",children:" curious"}),",",A.jsx("span",{className:"font-semibold text-purple-700",children:" patient"}),", and comfortable",A.jsx("span",{className:"font-semibold text-emerald-700",children:" iterating"}),"."]}),A.jsx("br",{}),A.jsx(Ir,{style:{width:250,height:115,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},children:A.jsx("img",{src:U4,alt:"granturismo.gif"})})]}),A.jsx(bo,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]})]})]})}),A.jsx(ci,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),A.jsx("section",{className:"mb-10 w-full pt-5 mt-10 h-full",id:"Skills",children:A.jsxs("div",{className:"flex justify-center items-start gap-8 w-full px-4",children:[A.jsx("div",{className:"flex-shrink-0 self-center pt-20",children:A.jsx(Xl,{text:"Please be respectful and refrain from using profanity.",enterDelay:100,leaveDelay:500,children:A.jsx(J4,{})})}),A.jsxs("div",{className:"flex-shrink-0",children:[A.jsx("h1",{className:"text-4xl font-bold mb-4 text-center",children:"Chat"}),A.jsx(x4,{})]}),A.jsxs("div",{className:"text-center",children:[A.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Skills"}),A.jsxs(Tn,{resizable:!0,className:"window mb-4",style:{margin:"0 auto",width:700},children:[A.jsx(En,{children:A.jsx("span",{children:"My Skills.exe"})}),A.jsx(Ze,{children:A.jsxs("div",{style:{textAlign:"left",padding:"8px",lineHeight:"1.6"},children:[A.jsx("h3",{className:"font-bold",children:"Programming Languages:"}),A.jsx("p",{children:"JavaScript (React, Node.js), Python, Java, C/C++, C#, SQL"}),A.jsx("h3",{className:"font-bold mt-2",children:"Web Development:"}),A.jsx("p",{children:"React, Redux, Tailwind CSS, Styled-Components, HTML5, CSS3, REST APIs"}),A.jsx("h3",{className:"font-bold mt-2",children:"Database & Backend:"}),A.jsx("p",{children:"Firebase (Firestore & Auth), PostgreSQL, MySQL, MongoDB, Express.js"}),A.jsx("h3",{className:"font-bold mt-2",children:"Tools & Platforms:"}),A.jsx("p",{children:"Git, GitHub, Docker, Jenkins, VS Code"}),A.jsx("h3",{className:"font-bold mt-2",children:"Game Development:"}),A.jsx("p",{children:"Psy-Q SDK (PlayStation 1), ARMIPS, mkpsxiso"}),A.jsx("h3",{className:"font-bold mt-2",children:"Soft Skills:"}),A.jsx("p",{children:"Problem Solving, Team Collaboration, Adaptability, Continuous Learning, Creativity"})]})})]})]})]})}),A.jsx(ci,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),A.jsxs("section",{className:"mb-10 w-full pt-5 mt-10 h-full min-h-[70vh] px-4",id:"Community",children:[A.jsx("h1",{className:"text-4xl font-bold text-center mb-8",children:"Community Zone"}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center",children:[A.jsx("div",{className:"w-full max-w-sm",children:A.jsx(R4,{})}),A.jsx("div",{className:"w-full max-w-sm",children:A.jsxs(Tn,{resizable:!0,children:[A.jsx(En,{children:A.jsx("span",{children:"Polls.exe"})}),A.jsx(Ze,{children:A.jsx(b4,{})})]})}),A.jsx("div",{className:"w-full max-w-sm",children:A.jsx(C4,{})})]})]}),A.jsx(ci,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),A.jsxs("section",{className:"mb-10 w-full pt-5 mt-10 text-center",id:"Contact",children:[A.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Contact Info"}),A.jsxs(Tn,{children:[A.jsx(En,{children:"Contact Info"}),A.jsx(Ze,{children:A.jsxs(bo,{variant:"inside",style:{padding:"1rem",wordBreak:"break-word"},children:[A.jsxs("p",{children:["Email: ",A.jsx(Xl,{text:"Will add this later lol",enterDelay:100,leaveDelay:500,children:"email"})]}),A.jsxs("p",{children:["GitHub: ",A.jsx("a",{href:"https://github.com/yourname",target:"_blank",children:"github.com/yourname"})]}),A.jsxs("p",{children:["LinkedIn: ",A.jsx("a",{href:"https://linkedin.com/in/yourname",target:"_blank",children:"linkedin.com/in/yourname"})]})]})})]})]}),A.jsx(ci,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),A.jsx("footer",{className:"text-center mb-5",children:A.jsxs("p",{children:["© ",new Date().getFullYear()," Abdessalam Zarrouk"]})})]})]})]})}NT.createRoot(document.getElementById("root")).render(A.jsx(B.StrictMode,{children:A.jsx(tI,{})}));
