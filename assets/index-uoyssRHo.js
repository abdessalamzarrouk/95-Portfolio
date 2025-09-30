var rT=Object.defineProperty;var iT=(r,t,i)=>t in r?rT(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var Ya=(r,t,i)=>iT(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Jb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gd={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function aT(){if(iv)return Bl;iv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Bl.Fragment=t,Bl.jsx=i,Bl.jsxs=i,Bl}var av;function sT(){return av||(av=1,Gd.exports=aT()),Gd.exports}var D=sT(),Fd={exports:{}},Lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function oT(){if(sv)return Lt;sv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=E&&k[E]||k["@@iterator"],typeof k=="function"?k:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,K={};function G(k,W,ft){this.props=k,this.context=W,this.refs=K,this.updater=ft||j}G.prototype.isReactComponent={},G.prototype.setState=function(k,W){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,W,"setState")},G.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function rt(){}rt.prototype=G.prototype;function J(k,W,ft){this.props=k,this.context=W,this.refs=K,this.updater=ft||j}var Z=J.prototype=new rt;Z.constructor=J,q(Z,G.prototype),Z.isPureReactComponent=!0;var ot=Array.isArray,st={H:null,A:null,T:null,S:null,V:null},lt=Object.prototype.hasOwnProperty;function S(k,W,ft,tt,ht,bt){return ft=bt.ref,{$$typeof:r,type:k,key:W,ref:ft!==void 0?ft:null,props:bt}}function w(k,W){return S(k.type,W,void 0,void 0,void 0,k.props)}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function V(k){var W={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ft){return W[ft]})}var N=/\/+/g;function O(k,W){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):W.toString(36)}function C(){}function Bt(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(C,C):(k.status="pending",k.then(function(W){k.status==="pending"&&(k.status="fulfilled",k.value=W)},function(W){k.status==="pending"&&(k.status="rejected",k.reason=W)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function Nt(k,W,ft,tt,ht){var bt=typeof k;(bt==="undefined"||bt==="boolean")&&(k=null);var mt=!1;if(k===null)mt=!0;else switch(bt){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(k.$$typeof){case r:case t:mt=!0;break;case _:return mt=k._init,Nt(mt(k._payload),W,ft,tt,ht)}}if(mt)return ht=ht(k),mt=tt===""?"."+O(k,0):tt,ot(ht)?(ft="",mt!=null&&(ft=mt.replace(N,"$&/")+"/"),Nt(ht,W,ft,"",function(ut){return ut})):ht!=null&&(R(ht)&&(ht=w(ht,ft+(ht.key==null||k&&k.key===ht.key?"":(""+ht.key).replace(N,"$&/")+"/")+mt)),W.push(ht)),1;mt=0;var St=tt===""?".":tt+":";if(ot(k))for(var It=0;It<k.length;It++)tt=k[It],bt=St+O(tt,It),mt+=Nt(tt,W,ft,bt,ht);else if(It=x(k),typeof It=="function")for(k=It.call(k),It=0;!(tt=k.next()).done;)tt=tt.value,bt=St+O(tt,It++),mt+=Nt(tt,W,ft,bt,ht);else if(bt==="object"){if(typeof k.then=="function")return Nt(Bt(k),W,ft,tt,ht);throw W=String(k),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return mt}function Y(k,W,ft){if(k==null)return k;var tt=[],ht=0;return Nt(k,tt,"","",function(bt){return W.call(ft,bt,ht++)}),tt}function pt(k){if(k._status===-1){var W=k._result;W=W(),W.then(function(ft){(k._status===0||k._status===-1)&&(k._status=1,k._result=ft)},function(ft){(k._status===0||k._status===-1)&&(k._status=2,k._result=ft)}),k._status===-1&&(k._status=0,k._result=W)}if(k._status===1)return k._result.default;throw k._result}var dt=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function Et(){}return Lt.Children={map:Y,forEach:function(k,W,ft){Y(k,function(){W.apply(this,arguments)},ft)},count:function(k){var W=0;return Y(k,function(){W++}),W},toArray:function(k){return Y(k,function(W){return W})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Lt.Component=G,Lt.Fragment=i,Lt.Profiler=l,Lt.PureComponent=J,Lt.StrictMode=a,Lt.Suspense=g,Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st,Lt.__COMPILER_RUNTIME={__proto__:null,c:function(k){return st.H.useMemoCache(k)}},Lt.cache=function(k){return function(){return k.apply(null,arguments)}},Lt.cloneElement=function(k,W,ft){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var tt=q({},k.props),ht=k.key,bt=void 0;if(W!=null)for(mt in W.ref!==void 0&&(bt=void 0),W.key!==void 0&&(ht=""+W.key),W)!lt.call(W,mt)||mt==="key"||mt==="__self"||mt==="__source"||mt==="ref"&&W.ref===void 0||(tt[mt]=W[mt]);var mt=arguments.length-2;if(mt===1)tt.children=ft;else if(1<mt){for(var St=Array(mt),It=0;It<mt;It++)St[It]=arguments[It+2];tt.children=St}return S(k.type,ht,void 0,void 0,bt,tt)},Lt.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:c,_context:k},k},Lt.createElement=function(k,W,ft){var tt,ht={},bt=null;if(W!=null)for(tt in W.key!==void 0&&(bt=""+W.key),W)lt.call(W,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ht[tt]=W[tt]);var mt=arguments.length-2;if(mt===1)ht.children=ft;else if(1<mt){for(var St=Array(mt),It=0;It<mt;It++)St[It]=arguments[It+2];ht.children=St}if(k&&k.defaultProps)for(tt in mt=k.defaultProps,mt)ht[tt]===void 0&&(ht[tt]=mt[tt]);return S(k,bt,void 0,void 0,null,ht)},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(k){return{$$typeof:m,render:k}},Lt.isValidElement=R,Lt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:pt}},Lt.memo=function(k,W){return{$$typeof:y,type:k,compare:W===void 0?null:W}},Lt.startTransition=function(k){var W=st.T,ft={};st.T=ft;try{var tt=k(),ht=st.S;ht!==null&&ht(ft,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(Et,dt)}catch(bt){dt(bt)}finally{st.T=W}},Lt.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()},Lt.use=function(k){return st.H.use(k)},Lt.useActionState=function(k,W,ft){return st.H.useActionState(k,W,ft)},Lt.useCallback=function(k,W){return st.H.useCallback(k,W)},Lt.useContext=function(k){return st.H.useContext(k)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(k,W){return st.H.useDeferredValue(k,W)},Lt.useEffect=function(k,W,ft){var tt=st.H;if(typeof ft=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return tt.useEffect(k,W)},Lt.useId=function(){return st.H.useId()},Lt.useImperativeHandle=function(k,W,ft){return st.H.useImperativeHandle(k,W,ft)},Lt.useInsertionEffect=function(k,W){return st.H.useInsertionEffect(k,W)},Lt.useLayoutEffect=function(k,W){return st.H.useLayoutEffect(k,W)},Lt.useMemo=function(k,W){return st.H.useMemo(k,W)},Lt.useOptimistic=function(k,W){return st.H.useOptimistic(k,W)},Lt.useReducer=function(k,W,ft){return st.H.useReducer(k,W,ft)},Lt.useRef=function(k){return st.H.useRef(k)},Lt.useState=function(k){return st.H.useState(k)},Lt.useSyncExternalStore=function(k,W,ft){return st.H.useSyncExternalStore(k,W,ft)},Lt.useTransition=function(){return st.H.useTransition()},Lt.version="19.1.0",Lt}var ov;function Qp(){return ov||(ov=1,Fd.exports=oT()),Fd.exports}var $=Qp();const F=Jb($);var Qd={exports:{}},Ll={},Yd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function lT(){return lv||(lv=1,function(r){function t(Y,pt){var dt=Y.length;Y.push(pt);t:for(;0<dt;){var Et=dt-1>>>1,k=Y[Et];if(0<l(k,pt))Y[Et]=pt,Y[dt]=k,dt=Et;else break t}}function i(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var pt=Y[0],dt=Y.pop();if(dt!==pt){Y[0]=dt;t:for(var Et=0,k=Y.length,W=k>>>1;Et<W;){var ft=2*(Et+1)-1,tt=Y[ft],ht=ft+1,bt=Y[ht];if(0>l(tt,dt))ht<k&&0>l(bt,tt)?(Y[Et]=bt,Y[ht]=dt,Et=ht):(Y[Et]=tt,Y[ft]=dt,Et=ft);else if(ht<k&&0>l(bt,dt))Y[Et]=bt,Y[ht]=dt,Et=ht;else break t}}return pt}function l(Y,pt){var dt=Y.sortIndex-pt.sortIndex;return dt!==0?dt:Y.id-pt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],y=[],_=1,E=null,x=3,j=!1,q=!1,K=!1,G=!1,rt=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ot(Y){for(var pt=i(y);pt!==null;){if(pt.callback===null)a(y);else if(pt.startTime<=Y)a(y),pt.sortIndex=pt.expirationTime,t(g,pt);else break;pt=i(y)}}function st(Y){if(K=!1,ot(Y),!q)if(i(g)!==null)q=!0,lt||(lt=!0,O());else{var pt=i(y);pt!==null&&Nt(st,pt.startTime-Y)}}var lt=!1,S=-1,w=5,R=-1;function V(){return G?!0:!(r.unstable_now()-R<w)}function N(){if(G=!1,lt){var Y=r.unstable_now();R=Y;var pt=!0;try{t:{q=!1,K&&(K=!1,J(S),S=-1),j=!0;var dt=x;try{e:{for(ot(Y),E=i(g);E!==null&&!(E.expirationTime>Y&&V());){var Et=E.callback;if(typeof Et=="function"){E.callback=null,x=E.priorityLevel;var k=Et(E.expirationTime<=Y);if(Y=r.unstable_now(),typeof k=="function"){E.callback=k,ot(Y),pt=!0;break e}E===i(g)&&a(g),ot(Y)}else a(g);E=i(g)}if(E!==null)pt=!0;else{var W=i(y);W!==null&&Nt(st,W.startTime-Y),pt=!1}}break t}finally{E=null,x=dt,j=!1}pt=void 0}}finally{pt?O():lt=!1}}}var O;if(typeof Z=="function")O=function(){Z(N)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Bt=C.port2;C.port1.onmessage=N,O=function(){Bt.postMessage(null)}}else O=function(){rt(N,0)};function Nt(Y,pt){S=rt(function(){Y(r.unstable_now())},pt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var pt=3;break;default:pt=x}var dt=x;x=pt;try{return Y()}finally{x=dt}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(Y,pt){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var dt=x;x=Y;try{return pt()}finally{x=dt}},r.unstable_scheduleCallback=function(Y,pt,dt){var Et=r.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?Et+dt:Et):dt=Et,Y){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=dt+k,Y={id:_++,callback:pt,priorityLevel:Y,startTime:dt,expirationTime:k,sortIndex:-1},dt>Et?(Y.sortIndex=dt,t(y,Y),i(g)===null&&Y===i(y)&&(K?(J(S),S=-1):K=!0,Nt(st,dt-Et))):(Y.sortIndex=k,t(g,Y),q||j||(q=!0,lt||(lt=!0,O()))),Y},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(Y){var pt=x;return function(){var dt=x;x=pt;try{return Y.apply(this,arguments)}finally{x=dt}}}}(Kd)),Kd}var uv;function uT(){return uv||(uv=1,Yd.exports=lT()),Yd.exports}var Xd={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function cT(){if(cv)return fn;cv=1;var r=Qp();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,y,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:""+E,children:g,containerInfo:y,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,fn.createPortal=function(g,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(g,y,null,_)},fn.flushSync=function(g){var y=f.T,_=a.p;try{if(f.T=null,a.p=2,g)return g()}finally{f.T=y,a.p=_,a.d.f()}},fn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},fn.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},fn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var _=y.as,E=m(_,y.crossOrigin),x=typeof y.integrity=="string"?y.integrity:void 0,j=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:E,integrity:x,fetchPriority:j}):_==="script"&&a.d.X(g,{crossOrigin:E,integrity:x,fetchPriority:j,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},fn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=m(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},fn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,E=m(_,y.crossOrigin);a.d.L(g,_,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},fn.preloadModule=function(g,y){if(typeof g=="string")if(y){var _=m(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},fn.requestFormReset=function(g){a.d.r(g)},fn.unstable_batchedUpdates=function(g,y){return g(y)},fn.useFormState=function(g,y,_){return f.H.useFormState(g,y,_)},fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},fn.version="19.1.0",fn}var hv;function t_(){if(hv)return Xd.exports;hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Xd.exports=cT(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function hT(){if(fv)return Ll;fv=1;var r=uT(),t=Qp(),i=t_();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function g(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return m(h),e;if(d===o)return m(h),n;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=d;else{for(var b=!1,A=h.child;A;){if(A===s){b=!0,s=h,o=d;break}if(A===o){b=!0,o=h,s=d;break}A=A.sibling}if(!b){for(A=d.child;A;){if(A===s){b=!0,s=d,o=h;break}if(A===o){b=!0,o=d,s=h;break}A=A.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,E=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function Bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case G:return"Profiler";case K:return"StrictMode";case st:return"Suspense";case lt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case ot:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case S:return n=e.displayName||null,n!==null?n:Bt(e.type)||"Memo";case w:n=e._payload,e=e._init;try{return Bt(e(n))}catch{}}return null}var Nt=Array.isArray,Y=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},Et=[],k=-1;function W(e){return{current:e}}function ft(e){0>k||(e.current=Et[k],Et[k]=null,k--)}function tt(e,n){k++,Et[k]=e.current,e.current=n}var ht=W(null),bt=W(null),mt=W(null),St=W(null);function It(e,n){switch(tt(mt,n),tt(bt,e),tt(ht,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?N0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=N0(n),e=V0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ft(ht),tt(ht,e)}function ut(){ft(ht),ft(bt),ft(mt)}function kt(e){e.memoizedState!==null&&tt(St,e);var n=ht.current,s=V0(n,e.type);n!==s&&(tt(bt,e),tt(ht,s))}function Mt(e){bt.current===e&&(ft(ht),ft(bt)),St.current===e&&(ft(St),Nl._currentValue=dt)}var Ut=Object.prototype.hasOwnProperty,Xt=r.unstable_scheduleCallback,ge=r.unstable_cancelCallback,be=r.unstable_shouldYield,Ge=r.unstable_requestPaint,ye=r.unstable_now,On=r.unstable_getCurrentPriorityLevel,ie=r.unstable_ImmediatePriority,Te=r.unstable_UserBlockingPriority,Sn=r.unstable_NormalPriority,jr=r.unstable_LowPriority,hi=r.unstable_IdlePriority,yu=r.log,fa=r.unstable_setDisableYieldValue,fi=null,un=null;function jn(e){if(typeof yu=="function"&&fa(e),un&&typeof un.setStrictMode=="function")try{un.setStrictMode(fi,e)}catch{}}var gn=Math.clz32?Math.clz32:bu,Yh=Math.log,vu=Math.LN2;function bu(e){return e>>>=0,e===0?32:31-(Yh(e)/vu|0)|0}var dr=256,di=4194304;function Wn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bn(e,n,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?h=Wn(o):(b&=A,b!==0?h=Wn(b):s||(s=A&~e,s!==0&&(h=Wn(s))))):(A=o&~d,A!==0?h=Wn(A):b!==0?h=Wn(b):s||(s=o&~e,s!==0&&(h=Wn(s)))),h===0?0:n!==0&&n!==h&&(n&d)===0&&(d=h&-h,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:h}function pi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function hs(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mo(){var e=dr;return dr<<=1,(dr&4194048)===0&&(dr=256),e}function mi(){var e=di;return di<<=1,(di&62914560)===0&&(di=4194304),e}function fs(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function Re(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _u(e,n,s,o,h,d){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,U=e.hiddenUpdates;for(s=b&~s;0<s;){var X=31-gn(s),it=1<<X;A[X]=0,I[X]=-1;var P=U[X];if(P!==null)for(U[X]=null,X=0;X<P.length;X++){var H=P[X];H!==null&&(H.lane&=-536870913)}s&=~it}o!==0&&gi(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~n))}function gi(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-gn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function yi(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-gn(s),h=1<<o;h&n|e[o]&n&&(e[o]|=n),s&=~h}}function Oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=pt.p;return e!==0?e:(e=window.event,e===void 0?32:W0(e.type))}function Kh(e,n){var s=pt.p;try{return pt.p=e,n()}finally{pt.p=s}}var pr=Math.random().toString(36).slice(2),Ce="__reactFiber$"+pr,tn="__reactProps$"+pr,Lr="__reactContainer$"+pr,da="__reactEvents$"+pr,pa="__reactListeners$"+pr,Xh="__reactHandles$"+pr,Jn="__reactResources$"+pr,vi="__reactMarker$"+pr;function ds(e){delete e[Ce],delete e[tn],delete e[da],delete e[pa],delete e[Xh]}function mr(e){var n=e[Ce];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Lr]||s[Ce]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=B0(e);e!==null;){if(s=e[Ce])return s;e=B0(e)}return n}e=s,s=e.parentNode}return null}function gr(e){if(e=e[Ce]||e[Lr]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function bi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function _i(e){var n=e[Jn];return n||(n=e[Jn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(e){e[vi]=!0}var Au=new Set,ma={};function yr(e,n){vr(e,n),vr(e+"Capture",n)}function vr(e,n){for(ma[e]=n,e=0;e<n.length;e++)Au.add(n[e])}var ga=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),br={},ps={};function Zh(e){return Ut.call(ps,e)?!0:Ut.call(br,e)?!1:ga.test(e)?ps[e]=!0:(br[e]=!0,!1)}function ya(e,n,s){if(Zh(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function va(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function Ln(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}var ba,ms;function zr(e){if(ba===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);ba=n&&n[1]||"",ms=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ba+e+ms}var gs=!1;function ys(e,n){if(!e||gs)return"";gs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var it=function(){throw Error()};if(Object.defineProperty(it.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(it,[])}catch(H){var P=H}Reflect.construct(e,[],it)}else{try{it.call()}catch(H){P=H}e.call(it.prototype)}}else{try{throw Error()}catch(H){P=H}(it=e())&&typeof it.catch=="function"&&it.catch(function(){})}}catch(H){if(H&&P&&typeof H.stack=="string")return[H.stack,P.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],A=d[1];if(b&&A){var I=b.split(`
`),U=A.split(`
`);for(h=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(o===I.length||h===U.length)for(o=I.length-1,h=U.length-1;1<=o&&0<=h&&I[o]!==U[h];)h--;for(;1<=o&&0<=h;o--,h--)if(I[o]!==U[h]){if(o!==1||h!==1)do if(o--,h--,0>h||I[o]!==U[h]){var X=`
`+I[o].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=o&&0<=h);break}}}finally{gs=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?zr(s):""}function Wh(e){switch(e.tag){case 26:case 27:case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 15:return ys(e.type,!1);case 11:return ys(e.type.render,!1);case 1:return ys(e.type,!0);case 31:return zr("Activity");default:return""}}function tr(e){try{var n="";do n+=Wh(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ai(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _a(e){var n=Ai(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ei(e){e._valueTracker||(e._valueTracker=_a(e))}function ae(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=Ai(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Aa=/[\n"\\]/g;function Fe(e){return e.replace(Aa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bo(e,n,s,o,h,d,b,A){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?zo(e,b,_e(n)):s!=null?zo(e,b,_e(s)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Lo(e,n,s,o,h,d,b,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;s=s!=null?""+_e(s):"",n=n!=null?""+_e(n):s,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function zo(e,n,s){n==="number"&&Ur(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ti(e,n,s,o){if(e=e.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=n.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+_e(s),n=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function Eu(e,n,s){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+_e(s):""}function Tu(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(Nt(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=_e(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function zn(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var Pr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||Pr.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function Po(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&s[h]!==o&&Uo(e,h,o)}else for(var d in n)n.hasOwnProperty(d)&&Uo(e,d,n[d])}function vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Su=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(e){return Su.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $o=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,yn=null;function xu(e){var n=gr(e);if(n&&(e=n.stateNode)){var s=e[tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Fe(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var h=o[tn]||null;if(!h)throw Error(a(90));Bo(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&ae(o)}break t;case"textarea":Eu(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Ti(e,!!s.multiple,n,!1)}}}var Ea=!1;function Ta(e,n,s){if(Ea)return e(n,s);Ea=!0;try{var o=e(n);return o}finally{if(Ea=!1,(wi!==null||yn!==null)&&(mc(),wi&&(n=wi,e=yn,yn=wi=null,xu(n),e)))for(n=0;n<e.length;n++)xu(e[n])}}function Si(e,n){var s=e.stateNode;if(s===null)return null;var o=s[tn]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$r=!1;if(vn)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{$r=!1}var Un=null,ce=null,bs=null;function Ru(){if(bs)return bs;var e,n=ce,s=n.length,o,h="value"in Un?Un.value:Un.textContent,d=h.length;for(e=0;e<s&&n[e]===h[e];e++);var b=s-e;for(o=1;o<=b&&n[s-o]===h[d-o];o++);return bs=h.slice(e,1<o?1-o:void 0)}function wa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function Ho(){return!1}function Pe(e){function n(s,o,h,d,b){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sa:Ho,this.isPropagationStopped=Ho,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),n}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Pe(cn),Ra=_({},cn,{view:0,detail:0}),Ca=Pe(Ra),_s,Da,_r,Ia=_({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(_s=e.screenX-_r.screenX,Da=e.screenY-_r.screenY):Da=_s=0,_r=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),ka=Pe(Ia),Jh=_({},Ia,{dataTransfer:0}),Cu=Pe(Jh),Na=_({},Ra,{relatedTarget:0}),As=Pe(Na),Du=_({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Go=Pe(Du),Fo=_({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iu=Pe(Fo),Es=_({},cn,{data:0}),Qo=Pe(Es),ku={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nu[e])?!!n[e]:!1}function Ts(){return Vu}var Mu=_({},Ra,{key:function(e){if(e.key){var n=ku[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ws=Pe(Mu),bn=_({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yo=Pe(bn),Ou=_({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),Ri=Pe(Ou),u=_({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),p=Pe(u),v=_({},Ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T=Pe(v),z=_({},cn,{newState:0,oldState:0}),Q=Pe(z),gt=[9,13,27,32],Ot=vn&&"CompositionEvent"in window,de=null;vn&&"documentMode"in document&&(de=document.documentMode);var ee=vn&&"TextEvent"in window&&!de,Ie=vn&&(!Ot||de&&8<de&&11>=de),xn=" ",Ar=!1;function nr(e,n){switch(e){case"keyup":return gt.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function Ko(e,n){switch(e){case"compositionend":return rr(n);case"keypress":return n.which!==32?null:(Ar=!0,xn);case"textInput":return e=n.data,e===xn&&Ar?null:e;default:return null}}function I1(e,n){if(ir)return e==="compositionend"||!Ot&&nr(e,n)?(e=Ru(),bs=ce=Un=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ie&&n.locale!=="ko"?null:n.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!k1[e.type]:n==="textarea"}function Qm(e,n,s,o){wi?yn?yn.push(o):yn=[o]:wi=o,n=Ac(n,"onChange"),0<n.length&&(s=new xa("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var Xo=null,Zo=null;function N1(e){R0(e,0)}function ju(e){var n=bi(e);if(ae(n))return e}function Ym(e,n){if(e==="change")return n}var Km=!1;if(vn){var tf;if(vn){var ef="oninput"in document;if(!ef){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),ef=typeof Xm.oninput=="function"}tf=ef}else tf=!1;Km=tf&&(!document.documentMode||9<document.documentMode)}function Zm(){Xo&&(Xo.detachEvent("onpropertychange",Wm),Zo=Xo=null)}function Wm(e){if(e.propertyName==="value"&&ju(Zo)){var n=[];Qm(n,Zo,e,qo(e)),Ta(N1,n)}}function V1(e,n,s){e==="focusin"?(Zm(),Xo=n,Zo=s,Xo.attachEvent("onpropertychange",Wm)):e==="focusout"&&Zm()}function M1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ju(Zo)}function O1(e,n){if(e==="click")return ju(n)}function j1(e,n){if(e==="input"||e==="change")return ju(n)}function B1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Rn=typeof Object.is=="function"?Object.is:B1;function Wo(e,n){if(Rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!Ut.call(n,h)||!Rn(e[h],n[h]))return!1}return!0}function Jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tg(e,n){var s=Jm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Jm(s)}}function eg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?eg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ng(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ur(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Ur(e.document)}return n}function nf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var L1=vn&&"documentMode"in document&&11>=document.documentMode,Ss=null,rf=null,Jo=null,af=!1;function rg(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;af||Ss==null||Ss!==Ur(o)||(o=Ss,"selectionStart"in o&&nf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jo&&Wo(Jo,o)||(Jo=o,o=Ac(rf,"onSelect"),0<o.length&&(n=new xa("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=Ss)))}function Va(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var xs={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},sf={},ig={};vn&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Ma(e){if(sf[e])return sf[e];if(!xs[e])return e;var n=xs[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in ig)return sf[e]=n[s];return e}var ag=Ma("animationend"),sg=Ma("animationiteration"),og=Ma("animationstart"),z1=Ma("transitionrun"),U1=Ma("transitionstart"),P1=Ma("transitioncancel"),lg=Ma("transitionend"),ug=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function ar(e,n){ug.set(e,n),yr(n,[e])}var cg=new WeakMap;function Pn(e,n){if(typeof e=="object"&&e!==null){var s=cg.get(e);return s!==void 0?s:(n={value:e,source:n,stack:tr(n)},cg.set(e,n),n)}return{value:e,source:n,stack:tr(n)}}var $n=[],Rs=0,lf=0;function Bu(){for(var e=Rs,n=lf=Rs=0;n<e;){var s=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var h=$n[n];$n[n++]=null;var d=$n[n];if($n[n++]=null,o!==null&&h!==null){var b=o.pending;b===null?h.next=h:(h.next=b.next,b.next=h),o.pending=h}d!==0&&hg(s,h,d)}}function Lu(e,n,s,o){$n[Rs++]=e,$n[Rs++]=n,$n[Rs++]=s,$n[Rs++]=o,lf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uf(e,n,s,o){return Lu(e,n,s,o),zu(e)}function Cs(e,n){return Lu(e,null,null,n),zu(e)}function hg(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&n!==null&&(h=31-gn(s),e=d.hiddenUpdates,o=e[h],o===null?e[h]=[n]:o.push(n),n.lane=s|536870912),d):null}function zu(e){if(50<wl)throw wl=0,md=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ds={};function $1(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,n,s,o){return new $1(e,n,s,o)}function cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hr(e,n){var s=e.alternate;return s===null?(s=Cn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function fg(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Uu(e,n,s,o,h,d){var b=0;if(o=e,typeof e=="function")cf(e)&&(b=1);else if(typeof e=="string")b=HE(e,s,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Cn(31,s,n,h),e.elementType=R,e.lanes=d,e;case q:return Oa(s.children,h,d,n);case K:b=8,h|=24;break;case G:return e=Cn(12,s,n,h|2),e.elementType=G,e.lanes=d,e;case st:return e=Cn(13,s,n,h),e.elementType=st,e.lanes=d,e;case lt:return e=Cn(19,s,n,h),e.elementType=lt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rt:case Z:b=10;break t;case J:b=9;break t;case ot:b=11;break t;case S:b=14;break t;case w:b=16,o=null;break t}b=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Cn(b,s,n,h),n.elementType=e,n.type=o,n.lanes=d,n}function Oa(e,n,s,o){return e=Cn(7,e,o,n),e.lanes=s,e}function hf(e,n,s){return e=Cn(6,e,null,n),e.lanes=s,e}function ff(e,n,s){return n=Cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Is=[],ks=0,Pu=null,$u=0,qn=[],Hn=0,ja=null,Gr=1,Fr="";function Ba(e,n){Is[ks++]=$u,Is[ks++]=Pu,Pu=e,$u=n}function dg(e,n,s){qn[Hn++]=Gr,qn[Hn++]=Fr,qn[Hn++]=ja,ja=e;var o=Gr;e=Fr;var h=32-gn(o)-1;o&=~(1<<h),s+=1;var d=32-gn(n)+h;if(30<d){var b=h-h%5;d=(o&(1<<b)-1).toString(32),o>>=b,h-=b,Gr=1<<32-gn(n)+h|s<<h|o,Fr=d+e}else Gr=1<<d|s<<h|o,Fr=e}function df(e){e.return!==null&&(Ba(e,1),dg(e,1,0))}function pf(e){for(;e===Pu;)Pu=Is[--ks],Is[ks]=null,$u=Is[--ks],Is[ks]=null;for(;e===ja;)ja=qn[--Hn],qn[Hn]=null,Fr=qn[--Hn],qn[Hn]=null,Gr=qn[--Hn],qn[Hn]=null}var _n=null,we=null,Wt=!1,La=null,Er=!1,mf=Error(a(519));function za(e){var n=Error(a(418,""));throw nl(Pn(n,e)),mf}function pg(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[Ce]=e,n[tn]=o,s){case"dialog":Ht("cancel",n),Ht("close",n);break;case"iframe":case"object":case"embed":Ht("load",n);break;case"video":case"audio":for(s=0;s<xl.length;s++)Ht(xl[s],n);break;case"source":Ht("error",n);break;case"img":case"image":case"link":Ht("error",n),Ht("load",n);break;case"details":Ht("toggle",n);break;case"input":Ht("invalid",n),Lo(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ei(n);break;case"select":Ht("invalid",n);break;case"textarea":Ht("invalid",n),Tu(n,o.value,o.defaultValue,o.children),Ei(n)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||k0(n.textContent,s)?(o.popover!=null&&(Ht("beforetoggle",n),Ht("toggle",n)),o.onScroll!=null&&Ht("scroll",n),o.onScrollEnd!=null&&Ht("scrollend",n),o.onClick!=null&&(n.onclick=Ec),n=!0):n=!1,n||za(e)}function mg(e){for(_n=e.return;_n;)switch(_n.tag){case 5:case 13:Er=!1;return;case 27:case 3:Er=!0;return;default:_n=_n.return}}function tl(e){if(e!==_n)return!1;if(!Wt)return mg(e),Wt=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||kd(e.type,e.memoizedProps)),s=!s),s&&we&&za(e),mg(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){we=or(e.nextSibling);break t}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}we=null}}else n===27?(n=we,qi(e.type)?(e=Od,Od=null,we=e):we=n):we=_n?or(e.stateNode.nextSibling):null;return!0}function el(){we=_n=null,Wt=!1}function gg(){var e=La;return e!==null&&(Tn===null?Tn=e:Tn.push.apply(Tn,e),La=null),e}function nl(e){La===null?La=[e]:La.push(e)}var gf=W(null),Ua=null,Qr=null;function Ci(e,n,s){tt(gf,n._currentValue),n._currentValue=s}function Yr(e){e._currentValue=gf.current,ft(gf)}function yf(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function vf(e,n,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var b=h.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=h;for(var I=0;I<n.length;I++)if(A.context===n[I]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),yf(d.return,s,e),o||(b=null);break t}d=A.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,d=b.alternate,d!==null&&(d.lanes|=s),yf(b,s,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function rl(e,n,s,o){e=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var A=h.type;Rn(h.pendingProps.value,b.value)||(e!==null?e.push(A):e=[A])}}else if(h===St.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}h=h.return}e!==null&&vf(n,e,s,o),n.flags|=262144}function qu(e){for(e=e.firstContext;e!==null;){if(!Rn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ua=e,Qr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return yg(Ua,e)}function Hu(e,n){return Ua===null&&Pa(e),yg(e,n)}function yg(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Qr===null){if(e===null)throw Error(a(308));Qr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qr=Qr.next=n;return s}var q1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},H1=r.unstable_scheduleCallback,G1=r.unstable_NormalPriority,$e={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new q1,data:new Map,refCount:0}}function il(e){e.refCount--,e.refCount===0&&H1(G1,function(){e.controller.abort()})}var al=null,_f=0,Ns=0,Vs=null;function F1(e,n){if(al===null){var s=al=[];_f=0,Ns=Ed(),Vs={status:"pending",value:void 0,then:function(o){s.push(o)}}}return _f++,n.then(vg,vg),n}function vg(){if(--_f===0&&al!==null){Vs!==null&&(Vs.status="fulfilled");var e=al;al=null,Ns=0,Vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Q1(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<s.length;h++)(0,s[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var bg=Y.S;Y.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&F1(e,n),bg!==null&&bg(e,n)};var $a=W(null);function Af(){var e=$a.current;return e!==null?e:he.pooledCache}function Gu(e,n){n===null?tt($a,$a.current):tt($a,n.pool)}function _g(){var e=Af();return e===null?null:{parent:$e._currentValue,pool:e}}var sl=Error(a(460)),Ag=Error(a(474)),Fu=Error(a(542)),Ef={then:function(){}};function Eg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qu(){}function Tg(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(Qu,Qu),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sg(e),e;default:if(typeof n.status=="string")n.then(Qu,Qu);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sg(e),e}throw ol=n,sl}}var ol=null;function wg(){if(ol===null)throw Error(a(459));var e=ol;return ol=null,e}function Sg(e){if(e===sl||e===Fu)throw Error(a(483))}var Di=!1;function Tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ki(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ne&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=zu(e),hg(e,null,s),n}return Lu(e,o,n,s),zu(e)}function ll(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,yi(e,s)}}function Sf(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=b:d=d.next=b,s=s.next}while(s!==null);d===null?h=d=n:d=d.next=n}else h=d=n;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var xf=!1;function ul(){if(xf){var e=Vs;if(e!==null)throw e}}function cl(e,n,s,o){xf=!1;var h=e.updateQueue;Di=!1;var d=h.firstBaseUpdate,b=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var I=A,U=I.next;I.next=null,b===null?d=U:b.next=U,b=I;var X=e.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==b&&(A===null?X.firstBaseUpdate=U:A.next=U,X.lastBaseUpdate=I))}if(d!==null){var it=h.baseState;b=0,X=U=I=null,A=d;do{var P=A.lane&-536870913,H=P!==A.lane;if(H?(Qt&P)===P:(o&P)===P){P!==0&&P===Ns&&(xf=!0),X!==null&&(X=X.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Dt=e,xt=A;P=n;var le=s;switch(xt.tag){case 1:if(Dt=xt.payload,typeof Dt=="function"){it=Dt.call(le,it,P);break t}it=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=xt.payload,P=typeof Dt=="function"?Dt.call(le,it,P):Dt,P==null)break t;it=_({},it,P);break t;case 2:Di=!0}}P=A.callback,P!==null&&(e.flags|=64,H&&(e.flags|=8192),H=h.callbacks,H===null?h.callbacks=[P]:H.push(P))}else H={lane:P,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(U=X=H,I=it):X=X.next=H,b|=P;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;H=A,A=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);X===null&&(I=it),h.baseState=I,h.firstBaseUpdate=U,h.lastBaseUpdate=X,d===null&&(h.shared.lanes=0),zi|=b,e.lanes=b,e.memoizedState=it}}function xg(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Rg(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)xg(s[e],n)}var Ms=W(null),Yu=W(0);function Cg(e,n){e=ei,tt(Yu,e),tt(Ms,n),ei=e|n.baseLanes}function Rf(){tt(Yu,ei),tt(Ms,Ms.current)}function Cf(){ei=Yu.current,ft(Ms),ft(Yu)}var Ni=0,Pt=null,se=null,Oe=null,Ku=!1,Os=!1,qa=!1,Xu=0,hl=0,js=null,Y1=0;function ke(){throw Error(a(321))}function Df(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Rn(e[s],n[s]))return!1;return!0}function If(e,n,s,o,h,d){return Ni=d,Pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Y.H=e===null||e.memoizedState===null?hy:fy,qa=!1,d=s(o,h),qa=!1,Os&&(d=Ig(n,s,o,h)),Dg(e),d}function Dg(e){Y.H=nc;var n=se!==null&&se.next!==null;if(Ni=0,Oe=se=Pt=null,Ku=!1,hl=0,js=null,n)throw Error(a(300));e===null||Qe||(e=e.dependencies,e!==null&&qu(e)&&(Qe=!0))}function Ig(e,n,s,o){Pt=e;var h=0;do{if(Os&&(js=null),hl=0,Os=!1,25<=h)throw Error(a(301));if(h+=1,Oe=se=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=eE,d=n(s,o)}while(Os);return d}function K1(){var e=Y.H,n=e.useState()[0];return n=typeof n.then=="function"?fl(n):n,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(Pt.flags|=1024),n}function kf(){var e=Xu!==0;return Xu=0,e}function Nf(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Vf(e){if(Ku){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ku=!1}Ni=0,Oe=se=Pt=null,Os=!1,hl=Xu=0,js=null}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Pt.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function je(){if(se===null){var e=Pt.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var n=Oe===null?Pt.memoizedState:Oe.next;if(n!==null)Oe=n,se=e;else{if(e===null)throw Pt.alternate===null?Error(a(467)):Error(a(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},Oe===null?Pt.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fl(e){var n=hl;return hl+=1,js===null&&(js=[]),e=Tg(js,e,n),n=Pt,(Oe===null?n.memoizedState:Oe.next)===null&&(n=n.alternate,Y.H=n===null||n.memoizedState===null?hy:fy),e}function Zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fl(e);if(e.$$typeof===Z)return hn(e)}throw Error(a(438,String(e)))}function Of(e){var n=null,s=Pt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=Pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Mf(),Pt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=V;return n.index++,s}function Kr(e,n){return typeof n=="function"?n(e):n}function Wu(e){var n=je();return jf(n,se,e)}function jf(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var b=h.next;h.next=d.next,d.next=b}n.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{n=h.next;var A=b=null,I=null,U=n,X=!1;do{var it=U.lane&-536870913;if(it!==U.lane?(Qt&it)===it:(Ni&it)===it){var P=U.revertLane;if(P===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),it===Ns&&(X=!0);else if((Ni&P)===P){U=U.next,P===Ns&&(X=!0);continue}else it={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(A=I=it,b=d):I=I.next=it,Pt.lanes|=P,zi|=P;it=U.action,qa&&s(d,it),d=U.hasEagerState?U.eagerState:s(d,it)}else P={lane:it,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(A=I=P,b=d):I=I.next=P,Pt.lanes|=it,zi|=it;U=U.next}while(U!==null&&U!==n);if(I===null?b=d:I.next=A,!Rn(d,e.memoizedState)&&(Qe=!0,X&&(s=Vs,s!==null)))throw s;e.memoizedState=d,e.baseState=b,e.baseQueue=I,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Bf(e){var n=je(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,d=n.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do d=e(d,b.action),b=b.next;while(b!==h);Rn(d,n.memoizedState)||(Qe=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,o]}function kg(e,n,s){var o=Pt,h=je(),d=Wt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var b=!Rn((se||h).memoizedState,s);b&&(h.memoizedState=s,Qe=!0),h=h.queue;var A=Mg.bind(null,o,h,e);if(dl(2048,8,A,[e]),h.getSnapshot!==n||b||Oe!==null&&Oe.memoizedState.tag&1){if(o.flags|=2048,Bs(9,Ju(),Vg.bind(null,o,h,s,n),null),he===null)throw Error(a(349));d||(Ni&124)!==0||Ng(o,n,s)}return s}function Ng(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Pt.updateQueue,n===null?(n=Mf(),Pt.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Vg(e,n,s,o){n.value=s,n.getSnapshot=o,Og(n)&&jg(e)}function Mg(e,n,s){return s(function(){Og(n)&&jg(e)})}function Og(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Rn(e,s)}catch{return!0}}function jg(e){var n=Cs(e,2);n!==null&&Vn(n,e,2)}function Lf(e){var n=An();if(typeof e=="function"){var s=e;if(e=s(),qa){jn(!0);try{s()}finally{jn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},n}function Bg(e,n,s,o){return e.baseState=s,jf(e,se,typeof o=="function"?o:Kr)}function X1(e,n,s,o,h){if(ec(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};Y.T!==null?s(!0):d.isTransition=!1,o(d),s=n.pending,s===null?(d.next=n.pending=d,Lg(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Lg(e,n){var s=n.action,o=n.payload,h=e.state;if(n.isTransition){var d=Y.T,b={};Y.T=b;try{var A=s(h,o),I=Y.S;I!==null&&I(b,A),zg(e,n,A)}catch(U){zf(e,n,U)}finally{Y.T=d}}else try{d=s(h,o),zg(e,n,d)}catch(U){zf(e,n,U)}}function zg(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Ug(e,n,o)},function(o){return zf(e,n,o)}):Ug(e,n,s)}function Ug(e,n,s){n.status="fulfilled",n.value=s,Pg(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,Lg(e,s)))}function zf(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,Pg(n),n=n.next;while(n!==o)}e.action=null}function Pg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function $g(e,n){return n}function qg(e,n){if(Wt){var s=he.formState;if(s!==null){t:{var o=Pt;if(Wt){if(we){e:{for(var h=we,d=Er;h.nodeType!==8;){if(!d){h=null;break e}if(h=or(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){we=or(h.nextSibling),o=h.data==="F!";break t}}za(o)}o=!1}o&&(n=s[0])}}return s=An(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$g,lastRenderedState:n},s.queue=o,s=ly.bind(null,Pt,o),o.dispatch=s,o=Lf(!1),d=Hf.bind(null,Pt,!1,o.queue),o=An(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,s=X1.bind(null,Pt,h,d,s),h.dispatch=s,o.memoizedState=e,[n,s,!1]}function Hg(e){var n=je();return Gg(n,se,e)}function Gg(e,n,s){if(n=jf(e,n,$g)[0],e=Wu(Kr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fl(n)}catch(b){throw b===sl?Fu:b}else o=n;n=je();var h=n.queue,d=h.dispatch;return s!==n.memoizedState&&(Pt.flags|=2048,Bs(9,Ju(),Z1.bind(null,h,s),null)),[o,d,e]}function Z1(e,n){e.action=n}function Fg(e){var n=je(),s=se;if(s!==null)return Gg(n,s,e);je(),n=n.memoizedState,s=je();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function Bs(e,n,s,o){return e={tag:e,create:s,deps:o,inst:n,next:null},n=Pt.updateQueue,n===null&&(n=Mf(),Pt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function Ju(){return{destroy:void 0,resource:void 0}}function Qg(){return je().memoizedState}function tc(e,n,s,o){var h=An();o=o===void 0?null:o,Pt.flags|=e,h.memoizedState=Bs(1|n,Ju(),s,o)}function dl(e,n,s,o){var h=je();o=o===void 0?null:o;var d=h.memoizedState.inst;se!==null&&o!==null&&Df(o,se.memoizedState.deps)?h.memoizedState=Bs(n,d,s,o):(Pt.flags|=e,h.memoizedState=Bs(1|n,d,s,o))}function Yg(e,n){tc(8390656,8,e,n)}function Kg(e,n){dl(2048,8,e,n)}function Xg(e,n){return dl(4,2,e,n)}function Zg(e,n){return dl(4,4,e,n)}function Wg(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jg(e,n,s){s=s!=null?s.concat([e]):null,dl(4,4,Wg.bind(null,n,e),s)}function Uf(){}function ty(e,n){var s=je();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Df(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function ey(e,n){var s=je();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Df(n,o[1]))return o[0];if(o=e(),qa){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[o,n],o}function Pf(e,n,s){return s===void 0||(Ni&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=i0(),Pt.lanes|=e,zi|=e,s)}function ny(e,n,s,o){return Rn(s,n)?s:Ms.current!==null?(e=Pf(e,s,o),Rn(e,n)||(Qe=!0),e):(Ni&42)===0?(Qe=!0,e.memoizedState=s):(e=i0(),Pt.lanes|=e,zi|=e,n)}function ry(e,n,s,o,h){var d=pt.p;pt.p=d!==0&&8>d?d:8;var b=Y.T,A={};Y.T=A,Hf(e,!1,n,s);try{var I=h(),U=Y.S;if(U!==null&&U(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var X=Q1(I,o);pl(e,n,X,Nn(e))}else pl(e,n,o,Nn(e))}catch(it){pl(e,n,{then:function(){},status:"rejected",reason:it},Nn())}finally{pt.p=d,Y.T=b}}function W1(){}function $f(e,n,s,o){if(e.tag!==5)throw Error(a(476));var h=iy(e).queue;ry(e,h,n,dt,s===null?W1:function(){return ay(e),s(o)})}function iy(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:dt},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ay(e){var n=iy(e).next.queue;pl(e,n,{},Nn())}function qf(){return hn(Nl)}function sy(){return je().memoizedState}function oy(){return je().memoizedState}function J1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Nn();e=Ii(s);var o=ki(n,e,s);o!==null&&(Vn(o,n,s),ll(o,n,s)),n={cache:bf()},e.payload=n;return}n=n.return}}function tE(e,n,s){var o=Nn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ec(e)?uy(n,s):(s=uf(e,n,s,o),s!==null&&(Vn(s,e,o),cy(s,n,o)))}function ly(e,n,s){var o=Nn();pl(e,n,s,o)}function pl(e,n,s,o){var h={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ec(e))uy(n,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,A=d(b,s);if(h.hasEagerState=!0,h.eagerState=A,Rn(A,b))return Lu(e,n,h,0),he===null&&Bu(),!1}catch{}finally{}if(s=uf(e,n,h,o),s!==null)return Vn(s,e,o),cy(s,n,o),!0}return!1}function Hf(e,n,s,o){if(o={lane:2,revertLane:Ed(),action:o,hasEagerState:!1,eagerState:null,next:null},ec(e)){if(n)throw Error(a(479))}else n=uf(e,s,o,2),n!==null&&Vn(n,e,2)}function ec(e){var n=e.alternate;return e===Pt||n!==null&&n===Pt}function uy(e,n){Os=Ku=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function cy(e,n,s){if((s&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,yi(e,s)}}var nc={readContext:hn,use:Zu,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},hy={readContext:hn,use:Zu,useCallback:function(e,n){return An().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:Yg,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,tc(4194308,4,Wg.bind(null,n,e),s)},useLayoutEffect:function(e,n){return tc(4194308,4,e,n)},useInsertionEffect:function(e,n){tc(4,2,e,n)},useMemo:function(e,n){var s=An();n=n===void 0?null:n;var o=e();if(qa){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=An();if(s!==void 0){var h=s(n);if(qa){jn(!0);try{s(n)}finally{jn(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=tE.bind(null,Pt,e),[o.memoizedState,e]},useRef:function(e){var n=An();return e={current:e},n.memoizedState=e},useState:function(e){e=Lf(e);var n=e.queue,s=ly.bind(null,Pt,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Uf,useDeferredValue:function(e,n){var s=An();return Pf(s,e,n)},useTransition:function(){var e=Lf(!1);return e=ry.bind(null,Pt,e.queue,!0,!1),An().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=Pt,h=An();if(Wt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),he===null)throw Error(a(349));(Qt&124)!==0||Ng(o,n,s)}h.memoizedState=s;var d={value:s,getSnapshot:n};return h.queue=d,Yg(Mg.bind(null,o,d,e),[e]),o.flags|=2048,Bs(9,Ju(),Vg.bind(null,o,d,s,n),null),s},useId:function(){var e=An(),n=he.identifierPrefix;if(Wt){var s=Fr,o=Gr;s=(o&~(1<<32-gn(o)-1)).toString(32)+s,n="«"+n+"R"+s,s=Xu++,0<s&&(n+="H"+s.toString(32)),n+="»"}else s=Y1++,n="«"+n+"r"+s.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:qf,useFormState:qg,useActionState:qg,useOptimistic:function(e){var n=An();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Hf.bind(null,Pt,!0,s),s.dispatch=n,[e,n]},useMemoCache:Of,useCacheRefresh:function(){return An().memoizedState=J1.bind(null,Pt)}},fy={readContext:hn,use:Zu,useCallback:ty,useContext:hn,useEffect:Kg,useImperativeHandle:Jg,useInsertionEffect:Xg,useLayoutEffect:Zg,useMemo:ey,useReducer:Wu,useRef:Qg,useState:function(){return Wu(Kr)},useDebugValue:Uf,useDeferredValue:function(e,n){var s=je();return ny(s,se.memoizedState,e,n)},useTransition:function(){var e=Wu(Kr)[0],n=je().memoizedState;return[typeof e=="boolean"?e:fl(e),n]},useSyncExternalStore:kg,useId:sy,useHostTransitionStatus:qf,useFormState:Hg,useActionState:Hg,useOptimistic:function(e,n){var s=je();return Bg(s,se,e,n)},useMemoCache:Of,useCacheRefresh:oy},eE={readContext:hn,use:Zu,useCallback:ty,useContext:hn,useEffect:Kg,useImperativeHandle:Jg,useInsertionEffect:Xg,useLayoutEffect:Zg,useMemo:ey,useReducer:Bf,useRef:Qg,useState:function(){return Bf(Kr)},useDebugValue:Uf,useDeferredValue:function(e,n){var s=je();return se===null?Pf(s,e,n):ny(s,se.memoizedState,e,n)},useTransition:function(){var e=Bf(Kr)[0],n=je().memoizedState;return[typeof e=="boolean"?e:fl(e),n]},useSyncExternalStore:kg,useId:sy,useHostTransitionStatus:qf,useFormState:Fg,useActionState:Fg,useOptimistic:function(e,n){var s=je();return se!==null?Bg(s,se,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Of,useCacheRefresh:oy},Ls=null,ml=0;function rc(e){var n=ml;return ml+=1,Ls===null&&(Ls=[]),Tg(Ls,e,n)}function gl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ic(e,n){throw n.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dy(e){var n=e._init;return n(e._payload)}function py(e){function n(B,M){if(e){var L=B.deletions;L===null?(B.deletions=[M],B.flags|=16):L.push(M)}}function s(B,M){if(!e)return null;for(;M!==null;)n(B,M),M=M.sibling;return null}function o(B){for(var M=new Map;B!==null;)B.key!==null?M.set(B.key,B):M.set(B.index,B),B=B.sibling;return M}function h(B,M){return B=Hr(B,M),B.index=0,B.sibling=null,B}function d(B,M,L){return B.index=L,e?(L=B.alternate,L!==null?(L=L.index,L<M?(B.flags|=67108866,M):L):(B.flags|=67108866,M)):(B.flags|=1048576,M)}function b(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function A(B,M,L,et){return M===null||M.tag!==6?(M=hf(L,B.mode,et),M.return=B,M):(M=h(M,L),M.return=B,M)}function I(B,M,L,et){var At=L.type;return At===q?X(B,M,L.props.children,et,L.key):M!==null&&(M.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===w&&dy(At)===M.type)?(M=h(M,L.props),gl(M,L),M.return=B,M):(M=Uu(L.type,L.key,L.props,null,B.mode,et),gl(M,L),M.return=B,M)}function U(B,M,L,et){return M===null||M.tag!==4||M.stateNode.containerInfo!==L.containerInfo||M.stateNode.implementation!==L.implementation?(M=ff(L,B.mode,et),M.return=B,M):(M=h(M,L.children||[]),M.return=B,M)}function X(B,M,L,et,At){return M===null||M.tag!==7?(M=Oa(L,B.mode,et,At),M.return=B,M):(M=h(M,L),M.return=B,M)}function it(B,M,L){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=hf(""+M,B.mode,L),M.return=B,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case x:return L=Uu(M.type,M.key,M.props,null,B.mode,L),gl(L,M),L.return=B,L;case j:return M=ff(M,B.mode,L),M.return=B,M;case w:var et=M._init;return M=et(M._payload),it(B,M,L)}if(Nt(M)||O(M))return M=Oa(M,B.mode,L,null),M.return=B,M;if(typeof M.then=="function")return it(B,rc(M),L);if(M.$$typeof===Z)return it(B,Hu(B,M),L);ic(B,M)}return null}function P(B,M,L,et){var At=M!==null?M.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return At!==null?null:A(B,M,""+L,et);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return L.key===At?I(B,M,L,et):null;case j:return L.key===At?U(B,M,L,et):null;case w:return At=L._init,L=At(L._payload),P(B,M,L,et)}if(Nt(L)||O(L))return At!==null?null:X(B,M,L,et,null);if(typeof L.then=="function")return P(B,M,rc(L),et);if(L.$$typeof===Z)return P(B,M,Hu(B,L),et);ic(B,L)}return null}function H(B,M,L,et,At){if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return B=B.get(L)||null,A(M,B,""+et,At);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return B=B.get(et.key===null?L:et.key)||null,I(M,B,et,At);case j:return B=B.get(et.key===null?L:et.key)||null,U(M,B,et,At);case w:var $t=et._init;return et=$t(et._payload),H(B,M,L,et,At)}if(Nt(et)||O(et))return B=B.get(L)||null,X(M,B,et,At,null);if(typeof et.then=="function")return H(B,M,L,rc(et),At);if(et.$$typeof===Z)return H(B,M,L,Hu(M,et),At);ic(M,et)}return null}function Dt(B,M,L,et){for(var At=null,$t=null,Tt=M,Rt=M=0,Ke=null;Tt!==null&&Rt<L.length;Rt++){Tt.index>Rt?(Ke=Tt,Tt=null):Ke=Tt.sibling;var Zt=P(B,Tt,L[Rt],et);if(Zt===null){Tt===null&&(Tt=Ke);break}e&&Tt&&Zt.alternate===null&&n(B,Tt),M=d(Zt,M,Rt),$t===null?At=Zt:$t.sibling=Zt,$t=Zt,Tt=Ke}if(Rt===L.length)return s(B,Tt),Wt&&Ba(B,Rt),At;if(Tt===null){for(;Rt<L.length;Rt++)Tt=it(B,L[Rt],et),Tt!==null&&(M=d(Tt,M,Rt),$t===null?At=Tt:$t.sibling=Tt,$t=Tt);return Wt&&Ba(B,Rt),At}for(Tt=o(Tt);Rt<L.length;Rt++)Ke=H(Tt,B,Rt,L[Rt],et),Ke!==null&&(e&&Ke.alternate!==null&&Tt.delete(Ke.key===null?Rt:Ke.key),M=d(Ke,M,Rt),$t===null?At=Ke:$t.sibling=Ke,$t=Ke);return e&&Tt.forEach(function(Yi){return n(B,Yi)}),Wt&&Ba(B,Rt),At}function xt(B,M,L,et){if(L==null)throw Error(a(151));for(var At=null,$t=null,Tt=M,Rt=M=0,Ke=null,Zt=L.next();Tt!==null&&!Zt.done;Rt++,Zt=L.next()){Tt.index>Rt?(Ke=Tt,Tt=null):Ke=Tt.sibling;var Yi=P(B,Tt,Zt.value,et);if(Yi===null){Tt===null&&(Tt=Ke);break}e&&Tt&&Yi.alternate===null&&n(B,Tt),M=d(Yi,M,Rt),$t===null?At=Yi:$t.sibling=Yi,$t=Yi,Tt=Ke}if(Zt.done)return s(B,Tt),Wt&&Ba(B,Rt),At;if(Tt===null){for(;!Zt.done;Rt++,Zt=L.next())Zt=it(B,Zt.value,et),Zt!==null&&(M=d(Zt,M,Rt),$t===null?At=Zt:$t.sibling=Zt,$t=Zt);return Wt&&Ba(B,Rt),At}for(Tt=o(Tt);!Zt.done;Rt++,Zt=L.next())Zt=H(Tt,B,Rt,Zt.value,et),Zt!==null&&(e&&Zt.alternate!==null&&Tt.delete(Zt.key===null?Rt:Zt.key),M=d(Zt,M,Rt),$t===null?At=Zt:$t.sibling=Zt,$t=Zt);return e&&Tt.forEach(function(nT){return n(B,nT)}),Wt&&Ba(B,Rt),At}function le(B,M,L,et){if(typeof L=="object"&&L!==null&&L.type===q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case x:t:{for(var At=L.key;M!==null;){if(M.key===At){if(At=L.type,At===q){if(M.tag===7){s(B,M.sibling),et=h(M,L.props.children),et.return=B,B=et;break t}}else if(M.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===w&&dy(At)===M.type){s(B,M.sibling),et=h(M,L.props),gl(et,L),et.return=B,B=et;break t}s(B,M);break}else n(B,M);M=M.sibling}L.type===q?(et=Oa(L.props.children,B.mode,et,L.key),et.return=B,B=et):(et=Uu(L.type,L.key,L.props,null,B.mode,et),gl(et,L),et.return=B,B=et)}return b(B);case j:t:{for(At=L.key;M!==null;){if(M.key===At)if(M.tag===4&&M.stateNode.containerInfo===L.containerInfo&&M.stateNode.implementation===L.implementation){s(B,M.sibling),et=h(M,L.children||[]),et.return=B,B=et;break t}else{s(B,M);break}else n(B,M);M=M.sibling}et=ff(L,B.mode,et),et.return=B,B=et}return b(B);case w:return At=L._init,L=At(L._payload),le(B,M,L,et)}if(Nt(L))return Dt(B,M,L,et);if(O(L)){if(At=O(L),typeof At!="function")throw Error(a(150));return L=At.call(L),xt(B,M,L,et)}if(typeof L.then=="function")return le(B,M,rc(L),et);if(L.$$typeof===Z)return le(B,M,Hu(B,L),et);ic(B,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,M!==null&&M.tag===6?(s(B,M.sibling),et=h(M,L),et.return=B,B=et):(s(B,M),et=hf(L,B.mode,et),et.return=B,B=et),b(B)):s(B,M)}return function(B,M,L,et){try{ml=0;var At=le(B,M,L,et);return Ls=null,At}catch(Tt){if(Tt===sl||Tt===Fu)throw Tt;var $t=Cn(29,Tt,null,B.mode);return $t.lanes=et,$t.return=B,$t}finally{}}}var zs=py(!0),my=py(!1),Gn=W(null),Tr=null;function Vi(e){var n=e.alternate;tt(qe,qe.current&1),tt(Gn,e),Tr===null&&(n===null||Ms.current!==null||n.memoizedState!==null)&&(Tr=e)}function gy(e){if(e.tag===22){if(tt(qe,qe.current),tt(Gn,e),Tr===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Tr=e)}}else Mi()}function Mi(){tt(qe,qe.current),tt(Gn,Gn.current)}function Xr(e){ft(Gn),Tr===e&&(Tr=null),ft(qe)}var qe=W(0);function ac(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Md(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Gf(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:_({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ff={enqueueSetState:function(e,n,s){e=e._reactInternals;var o=Nn(),h=Ii(o);h.payload=n,s!=null&&(h.callback=s),n=ki(e,h,o),n!==null&&(Vn(n,e,o),ll(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=Nn(),h=Ii(o);h.tag=1,h.payload=n,s!=null&&(h.callback=s),n=ki(e,h,o),n!==null&&(Vn(n,e,o),ll(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Nn(),o=Ii(s);o.tag=2,n!=null&&(o.callback=n),n=ki(e,o,s),n!==null&&(Vn(n,e,s),ll(n,e,s))}};function yy(e,n,s,o,h,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!Wo(s,o)||!Wo(h,d):!0}function vy(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&Ff.enqueueReplaceState(n,n.state,null)}function Ha(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=_({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function by(e){sc(e)}function _y(e){console.error(e)}function Ay(e){sc(e)}function oc(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ey(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Qf(e,n,s){return s=Ii(s),s.tag=3,s.payload={element:null},s.callback=function(){oc(e,n)},s}function Ty(e){return e=Ii(e),e.tag=3,e}function wy(e,n,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){Ey(n,s,o)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Ey(n,s,o),typeof h!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function nE(e,n,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&rl(n,s,h,!0),s=Gn.current,s!==null){switch(s.tag){case 13:return Tr===null?yd():s.alternate===null&&Se===0&&(Se=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===Ef?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),bd(e,o,h)),!1;case 22:return s.flags|=65536,o===Ef?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),bd(e,o,h)),!1}throw Error(a(435,s.tag))}return bd(e,o,h),yd(),!1}if(Wt)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==mf&&(e=Error(a(422),{cause:o}),nl(Pn(e,s)))):(o!==mf&&(n=Error(a(423),{cause:o}),nl(Pn(n,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=Pn(o,s),h=Qf(e.stateNode,o,h),Sf(e,h),Se!==4&&(Se=2)),!1;var d=Error(a(520),{cause:o});if(d=Pn(d,s),Tl===null?Tl=[d]:Tl.push(d),Se!==4&&(Se=2),n===null)return!0;o=Pn(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Qf(s.stateNode,o,e),Sf(s,e),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ui===null||!Ui.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Ty(h),wy(h,e,s,o),Sf(s,h),!1}s=s.return}while(s!==null);return!1}var Sy=Error(a(461)),Qe=!1;function en(e,n,s,o){n.child=e===null?my(n,null,s,o):zs(n,e.child,s,o)}function xy(e,n,s,o,h){s=s.render;var d=n.ref;if("ref"in o){var b={};for(var A in o)A!=="ref"&&(b[A]=o[A])}else b=o;return Pa(n),o=If(e,n,s,b,d,h),A=kf(),e!==null&&!Qe?(Nf(e,n,h),Zr(e,n,h)):(Wt&&A&&df(n),n.flags|=1,en(e,n,o,h),n.child)}function Ry(e,n,s,o,h){if(e===null){var d=s.type;return typeof d=="function"&&!cf(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,Cy(e,n,d,o,h)):(e=Uu(s.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!ed(e,h)){var b=d.memoizedProps;if(s=s.compare,s=s!==null?s:Wo,s(b,o)&&e.ref===n.ref)return Zr(e,n,h)}return n.flags|=1,e=Hr(d,o),e.ref=n.ref,e.return=n,n.child=e}function Cy(e,n,s,o,h){if(e!==null){var d=e.memoizedProps;if(Wo(d,o)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=o=d,ed(e,h))(e.flags&131072)!==0&&(Qe=!0);else return n.lanes=e.lanes,Zr(e,n,h)}return Yf(e,n,s,o,h)}function Dy(e,n,s){var o=n.pendingProps,h=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|s:s,e!==null){for(h=n.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Iy(e,n,o,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(n,d!==null?d.cachePool:null),d!==null?Cg(n,d):Rf(),gy(n);else return n.lanes=n.childLanes=536870912,Iy(e,n,d!==null?d.baseLanes|s:s,s)}else d!==null?(Gu(n,d.cachePool),Cg(n,d),Mi(),n.memoizedState=null):(e!==null&&Gu(n,null),Rf(),Mi());return en(e,n,h,s),n.child}function Iy(e,n,s,o){var h=Af();return h=h===null?null:{parent:$e._currentValue,pool:h},n.memoizedState={baseLanes:s,cachePool:h},e!==null&&Gu(n,null),Rf(),gy(n),e!==null&&rl(e,n,o,!0),null}function lc(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function Yf(e,n,s,o,h){return Pa(n),s=If(e,n,s,o,void 0,h),o=kf(),e!==null&&!Qe?(Nf(e,n,h),Zr(e,n,h)):(Wt&&o&&df(n),n.flags|=1,en(e,n,s,h),n.child)}function ky(e,n,s,o,h,d){return Pa(n),n.updateQueue=null,s=Ig(n,o,s,h),Dg(e),o=kf(),e!==null&&!Qe?(Nf(e,n,d),Zr(e,n,d)):(Wt&&o&&df(n),n.flags|=1,en(e,n,s,d),n.child)}function Ny(e,n,s,o,h){if(Pa(n),n.stateNode===null){var d=Ds,b=s.contextType;typeof b=="object"&&b!==null&&(d=hn(b)),d=new s(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ff,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Tf(n),b=s.contextType,d.context=typeof b=="object"&&b!==null?hn(b):Ds,d.state=n.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Gf(n,s,b,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Ff.enqueueReplaceState(d,d.state,null),cl(n,o,d,h),ul(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,I=Ha(s,A);d.props=I;var U=d.context,X=s.contextType;b=Ds,typeof X=="object"&&X!==null&&(b=hn(X));var it=s.getDerivedStateFromProps;X=typeof it=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||U!==b)&&vy(n,d,o,b),Di=!1;var P=n.memoizedState;d.state=P,cl(n,o,d,h),ul(),U=n.memoizedState,A||P!==U||Di?(typeof it=="function"&&(Gf(n,s,it,o),U=n.memoizedState),(I=Di||yy(n,s,I,o,P,U,b))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=U),d.props=o,d.state=U,d.context=b,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,wf(e,n),b=n.memoizedProps,X=Ha(s,b),d.props=X,it=n.pendingProps,P=d.context,U=s.contextType,I=Ds,typeof U=="object"&&U!==null&&(I=hn(U)),A=s.getDerivedStateFromProps,(U=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==it||P!==I)&&vy(n,d,o,I),Di=!1,P=n.memoizedState,d.state=P,cl(n,o,d,h),ul();var H=n.memoizedState;b!==it||P!==H||Di||e!==null&&e.dependencies!==null&&qu(e.dependencies)?(typeof A=="function"&&(Gf(n,s,A,o),H=n.memoizedState),(X=Di||yy(n,s,X,o,P,H,I)||e!==null&&e.dependencies!==null&&qu(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,H,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&P===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&P===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=H),d.props=o,d.state=H,d.context=I,o=X):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&P===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&P===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,lc(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=zs(n,e.child,null,h),n.child=zs(n,null,s,h)):en(e,n,s,h),n.memoizedState=d.state,e=n.child):e=Zr(e,n,h),e}function Vy(e,n,s,o){return el(),n.flags|=256,en(e,n,s,o),n.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(e){return{baseLanes:e,cachePool:_g()}}function Zf(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=Fn),e}function My(e,n,s){var o=n.pendingProps,h=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),b&&(h=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if(Wt){if(h?Vi(n):Mi(),Wt){var A=we,I;if(I=A){t:{for(I=A,A=Er;I.nodeType!==8;){if(!A){A=null;break t}if(I=or(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(n.memoizedState={dehydrated:A,treeContext:ja!==null?{id:Gr,overflow:Fr}:null,retryLane:536870912,hydrationErrors:null},I=Cn(18,null,null,0),I.stateNode=A,I.return=n,n.child=I,_n=n,we=null,I=!0):I=!1}I||za(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Md(A)?n.lanes=32:n.lanes=536870912,null;Xr(n)}return A=o.children,o=o.fallback,h?(Mi(),h=n.mode,A=uc({mode:"hidden",children:A},h),o=Oa(o,h,s,null),A.return=n,o.return=n,A.sibling=o,n.child=A,h=n.child,h.memoizedState=Xf(s),h.childLanes=Zf(e,b,s),n.memoizedState=Kf,o):(Vi(n),Wf(n,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(d)n.flags&256?(Vi(n),n.flags&=-257,n=Jf(e,n,s)):n.memoizedState!==null?(Mi(),n.child=e.child,n.flags|=128,n=null):(Mi(),h=o.fallback,A=n.mode,o=uc({mode:"visible",children:o.children},A),h=Oa(h,A,s,null),h.flags|=2,o.return=n,h.return=n,o.sibling=h,n.child=o,zs(n,e.child,null,s),o=n.child,o.memoizedState=Xf(s),o.childLanes=Zf(e,b,s),n.memoizedState=Kf,n=h);else if(Vi(n),Md(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var U=b.dgst;b=U,o=Error(a(419)),o.stack="",o.digest=b,nl({value:o,source:null,stack:null}),n=Jf(e,n,s)}else if(Qe||rl(e,n,s,!1),b=(s&e.childLanes)!==0,Qe||b){if(b=he,b!==null&&(o=s&-s,o=(o&42)!==0?1:Oo(o),o=(o&(b.suspendedLanes|s))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Cs(e,o),Vn(b,e,o),Sy;A.data==="$?"||yd(),n=Jf(e,n,s)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,we=or(A.nextSibling),_n=n,Wt=!0,La=null,Er=!1,e!==null&&(qn[Hn++]=Gr,qn[Hn++]=Fr,qn[Hn++]=ja,Gr=e.id,Fr=e.overflow,ja=n),n=Wf(n,o.children),n.flags|=4096);return n}return h?(Mi(),h=o.fallback,A=n.mode,I=e.child,U=I.sibling,o=Hr(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,U!==null?h=Hr(U,h):(h=Oa(h,A,s,null),h.flags|=2),h.return=n,o.return=n,o.sibling=h,n.child=o,o=h,h=n.child,A=e.child.memoizedState,A===null?A=Xf(s):(I=A.cachePool,I!==null?(U=$e._currentValue,I=I.parent!==U?{parent:U,pool:U}:I):I=_g(),A={baseLanes:A.baseLanes|s,cachePool:I}),h.memoizedState=A,h.childLanes=Zf(e,b,s),n.memoizedState=Kf,o):(Vi(n),s=e.child,e=s.sibling,s=Hr(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=s,n.memoizedState=null,s)}function Wf(e,n){return n=uc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function uc(e,n){return e=Cn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Jf(e,n,s){return zs(n,e.child,null,s),e=Wf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Oy(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yf(e.return,n,s)}function td(e,n,s,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=h)}function jy(e,n,s){var o=n.pendingProps,h=o.revealOrder,d=o.tail;if(en(e,n,o.children,s),o=qe.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oy(e,s,n);else if(e.tag===19)Oy(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(tt(qe,o),h){case"forwards":for(s=n.child,h=null;s!==null;)e=s.alternate,e!==null&&ac(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),td(n,!1,h,s,d);break;case"backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&ac(e)===null){n.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}td(n,!0,s,null,d);break;case"together":td(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zr(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),zi|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(rl(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=Hr(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Hr(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function ed(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&qu(e)))}function rE(e,n,s){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),Ci(n,$e,e.memoizedState.cache),el();break;case 27:case 5:kt(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:Ci(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Vi(n),n.flags|=128,null):(s&n.child.childLanes)!==0?My(e,n,s):(Vi(n),e=Zr(e,n,s),e!==null?e.sibling:null);Vi(n);break;case 19:var h=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(rl(e,n,s,!1),o=(s&n.childLanes)!==0),h){if(o)return jy(e,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),tt(qe,qe.current),o)break;return null;case 22:case 23:return n.lanes=0,Dy(e,n,s);case 24:Ci(n,$e,e.memoizedState.cache)}return Zr(e,n,s)}function By(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Qe=!0;else{if(!ed(e,s)&&(n.flags&128)===0)return Qe=!1,rE(e,n,s);Qe=(e.flags&131072)!==0}else Qe=!1,Wt&&(n.flags&1048576)!==0&&dg(n,$u,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,h=o._init;if(o=h(o._payload),n.type=o,typeof o=="function")cf(o)?(e=Ha(o,e),n.tag=1,n=Ny(null,n,o,e,s)):(n.tag=0,n=Yf(null,n,o,e,s));else{if(o!=null){if(h=o.$$typeof,h===ot){n.tag=11,n=xy(null,n,o,e,s);break t}else if(h===S){n.tag=14,n=Ry(null,n,o,e,s);break t}}throw n=Bt(o)||o,Error(a(306,n,""))}}return n;case 0:return Yf(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,h=Ha(o,n.pendingProps),Ny(e,n,o,h,s);case 3:t:{if(It(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;h=d.element,wf(e,n),cl(n,o,null,s);var b=n.memoizedState;if(o=b.cache,Ci(n,$e,o),o!==d.cache&&vf(n,[$e],s,!0),ul(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Vy(e,n,o,s);break t}else if(o!==h){h=Pn(Error(a(424)),n),nl(h),n=Vy(e,n,o,s);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=or(e.firstChild),_n=n,Wt=!0,La=null,Er=!0,s=my(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(el(),o===h){n=Zr(e,n,s);break t}en(e,n,o,s)}n=n.child}return n;case 26:return lc(e,n),e===null?(s=P0(n.type,null,n.pendingProps,null))?n.memoizedState=s:Wt||(s=n.type,e=n.pendingProps,o=Tc(mt.current).createElement(s),o[Ce]=n,o[tn]=e,rn(o,s,e),De(o),n.stateNode=o):n.memoizedState=P0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&Wt&&(o=n.stateNode=L0(n.type,n.pendingProps,mt.current),_n=n,Er=!0,h=we,qi(n.type)?(Od=h,we=or(o.firstChild)):we=h),en(e,n,n.pendingProps.children,s),lc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Wt&&((h=o=we)&&(o=kE(o,n.type,n.pendingProps,Er),o!==null?(n.stateNode=o,_n=n,we=or(o.firstChild),Er=!1,h=!0):h=!1),h||za(n)),kt(n),h=n.type,d=n.pendingProps,b=e!==null?e.memoizedProps:null,o=d.children,kd(h,d)?o=null:b!==null&&kd(h,b)&&(n.flags|=32),n.memoizedState!==null&&(h=If(e,n,K1,null,null,s),Nl._currentValue=h),lc(e,n),en(e,n,o,s),n.child;case 6:return e===null&&Wt&&((e=s=we)&&(s=NE(s,n.pendingProps,Er),s!==null?(n.stateNode=s,_n=n,we=null,e=!0):e=!1),e||za(n)),null;case 13:return My(e,n,s);case 4:return It(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=zs(n,null,o,s):en(e,n,o,s),n.child;case 11:return xy(e,n,n.type,n.pendingProps,s);case 7:return en(e,n,n.pendingProps,s),n.child;case 8:return en(e,n,n.pendingProps.children,s),n.child;case 12:return en(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Ci(n,n.type,o.value),en(e,n,o.children,s),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,Pa(n),h=hn(h),o=o(h),n.flags|=1,en(e,n,o,s),n.child;case 14:return Ry(e,n,n.type,n.pendingProps,s);case 15:return Cy(e,n,n.type,n.pendingProps,s);case 19:return jy(e,n,s);case 31:return o=n.pendingProps,s=n.mode,o={mode:o.mode,children:o.children},e===null?(s=uc(o,s),s.ref=n.ref,n.child=s,s.return=n,n=s):(s=Hr(e.child,o),s.ref=n.ref,n.child=s,s.return=n,n=s),n;case 22:return Dy(e,n,s);case 24:return Pa(n),o=hn($e),e===null?(h=Af(),h===null&&(h=he,d=bf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),n.memoizedState={parent:o,cache:h},Tf(n),Ci(n,$e,h)):((e.lanes&s)!==0&&(wf(e,n),cl(n,null,null,s),ul()),h=e.memoizedState,d=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Ci(n,$e,o)):(o=d.cache,Ci(n,$e,o),o!==h.cache&&vf(n,[$e],s,!0))),en(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Wr(e){e.flags|=4}function Ly(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F0(n)){if(n=Gn.current,n!==null&&((Qt&4194048)===Qt?Tr!==null:(Qt&62914560)!==Qt&&(Qt&536870912)===0||n!==Tr))throw ol=Ef,Ag;e.flags|=8192}}function cc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?mi():536870912,e.lanes|=n,qs|=n)}function yl(e,n){if(!Wt)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function iE(e,n,s){var o=n.pendingProps;switch(pf(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(n),null;case 1:return Ae(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yr($e),ut(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(tl(n)?Wr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gg())),Ae(n),null;case 26:return s=n.memoizedState,e===null?(Wr(n),s!==null?(Ae(n),Ly(n,s)):(Ae(n),n.flags&=-16777217)):s?s!==e.memoizedState?(Wr(n),Ae(n),Ly(n,s)):(Ae(n),n.flags&=-16777217):(e.memoizedProps!==o&&Wr(n),Ae(n),n.flags&=-16777217),null;case 27:Mt(n),s=mt.current;var h=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wr(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ae(n),null}e=ht.current,tl(n)?pg(n):(e=L0(h,o,s),n.stateNode=e,Wr(n))}return Ae(n),null;case 5:if(Mt(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wr(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ae(n),null}if(e=ht.current,tl(n))pg(n);else{switch(h=Tc(mt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(s,{is:o.is}):h.createElement(s)}}e[Ce]=n,e[tn]=o;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=e;t:switch(rn(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Wr(n)}}return Ae(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Wr(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=mt.current,tl(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,h=_n,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Ce]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||k0(e.nodeValue,s)),e||za(n)}else e=Tc(e).createTextNode(o),e[Ce]=n,n.stateNode=e}return Ae(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=tl(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Ce]=n}else el(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ae(n),h=!1}else h=gg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(Xr(n),n):(Xr(n),null)}if(Xr(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),cc(n,n.updateQueue),Ae(n),null;case 4:return ut(),e===null&&xd(n.stateNode.containerInfo),Ae(n),null;case 10:return Yr(n.type),Ae(n),null;case 19:if(ft(qe),h=n.memoizedState,h===null)return Ae(n),null;if(o=(n.flags&128)!==0,d=h.rendering,d===null)if(o)yl(h,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=ac(e),d!==null){for(n.flags|=128,yl(h,!1),e=d.updateQueue,n.updateQueue=e,cc(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)fg(s,e),s=s.sibling;return tt(qe,qe.current&1|2),n.child}e=e.sibling}h.tail!==null&&ye()>dc&&(n.flags|=128,o=!0,yl(h,!1),n.lanes=4194304)}else{if(!o)if(e=ac(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,cc(n,e),yl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Wt)return Ae(n),null}else 2*ye()-h.renderingStartTime>dc&&s!==536870912&&(n.flags|=128,o=!0,yl(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(e=h.last,e!==null?e.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=ye(),n.sibling=null,e=qe.current,tt(qe,o?e&1|2:e&1),n):(Ae(n),null);case 22:case 23:return Xr(n),Cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(Ae(n),n.subtreeFlags&6&&(n.flags|=8192)):Ae(n),s=n.updateQueue,s!==null&&cc(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&ft($a),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Yr($e),Ae(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function aE(e,n){switch(pf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yr($e),ut(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Mt(n),null;case 13:if(Xr(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));el()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ft(qe),null;case 4:return ut(),null;case 10:return Yr(n.type),null;case 22:case 23:return Xr(n),Cf(),e!==null&&ft($a),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yr($e),null;case 25:return null;default:return null}}function zy(e,n){switch(pf(n),n.tag){case 3:Yr($e),ut();break;case 26:case 27:case 5:Mt(n);break;case 4:ut();break;case 13:Xr(n);break;case 19:ft(qe);break;case 10:Yr(n.type);break;case 22:case 23:Xr(n),Cf(),e!==null&&ft($a);break;case 24:Yr($e)}}function vl(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var d=s.create,b=s.inst;o=d(),b.destroy=o}s=s.next}while(s!==h)}}catch(A){ue(n,n.return,A)}}function Oi(e,n,s){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var b=o.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,h=n;var I=s,U=A;try{U()}catch(X){ue(h,I,X)}}}o=o.next}while(o!==d)}}catch(X){ue(n,n.return,X)}}function Uy(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Rg(n,s)}catch(o){ue(e,e.return,o)}}}function Py(e,n,s){s.props=Ha(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ue(e,n,o)}}function bl(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){ue(e,n,h)}}function wr(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){ue(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ue(e,n,h)}else s.current=null}function $y(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){ue(e,e.return,h)}}function nd(e,n,s){try{var o=e.stateNode;xE(o,e.type,s,n),o[tn]=n}catch(h){ue(e,e.return,h)}}function qy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qi(e.type)||e.tag===4}function rd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||qy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qi(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Ec));else if(o!==4&&(o===27&&qi(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(id(e,n,s),e=e.sibling;e!==null;)id(e,n,s),e=e.sibling}function hc(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&(o===27&&qi(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(hc(e,n,s),e=e.sibling;e!==null;)hc(e,n,s),e=e.sibling}function Hy(e){var n=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);rn(n,o,s),n[Ce]=e,n[tn]=s}catch(d){ue(e,e.return,d)}}var Jr=!1,Ne=!1,ad=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function sE(e,n){if(e=e.containerInfo,Dd=Dc,e=ng(e),nf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var b=0,A=-1,I=-1,U=0,X=0,it=e,P=null;e:for(;;){for(var H;it!==s||h!==0&&it.nodeType!==3||(A=b+h),it!==d||o!==0&&it.nodeType!==3||(I=b+o),it.nodeType===3&&(b+=it.nodeValue.length),(H=it.firstChild)!==null;)P=it,it=H;for(;;){if(it===e)break e;if(P===s&&++U===h&&(A=b),P===d&&++X===o&&(I=b),(H=it.nextSibling)!==null)break;it=P,P=it.parentNode}it=H}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(Id={focusedElem:e,selectionRange:s},Dc=!1,Ye=n;Ye!==null;)if(n=Ye,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ye=e;else for(;Ye!==null;){switch(n=Ye,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=n,h=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Dt=Ha(s.type,h,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(Dt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(xt){ue(s,s.return,xt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Vd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Ye=e;break}Ye=n.return}}function Fy(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ji(e,s),o&4&&vl(5,s);break;case 1:if(ji(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(b){ue(s,s.return,b)}else{var h=Ha(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){ue(s,s.return,b)}}o&64&&Uy(s),o&512&&bl(s,s.return);break;case 3:if(ji(e,s),o&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Rg(e,n)}catch(b){ue(s,s.return,b)}}break;case 27:n===null&&o&4&&Hy(s);case 26:case 5:ji(e,s),n===null&&o&4&&$y(s),o&512&&bl(s,s.return);break;case 12:ji(e,s);break;case 13:ji(e,s),o&4&&Ky(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=mE.bind(null,s),VE(e,s))));break;case 22:if(o=s.memoizedState!==null||Jr,!o){n=n!==null&&n.memoizedState!==null||Ne,h=Jr;var d=Ne;Jr=o,(Ne=n)&&!d?Bi(e,s,(s.subtreeFlags&8772)!==0):ji(e,s),Jr=h,Ne=d}break;case 30:break;default:ji(e,s)}}function Qy(e){var n=e.alternate;n!==null&&(e.alternate=null,Qy(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ds(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,En=!1;function ti(e,n,s){for(s=s.child;s!==null;)Yy(e,n,s),s=s.sibling}function Yy(e,n,s){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(fi,s)}catch{}switch(s.tag){case 26:Ne||wr(s,n),ti(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ne||wr(s,n);var o=ve,h=En;qi(s.type)&&(ve=s.stateNode,En=!1),ti(e,n,s),Cl(s.stateNode),ve=o,En=h;break;case 5:Ne||wr(s,n);case 6:if(o=ve,h=En,ve=null,ti(e,n,s),ve=o,En=h,ve!==null)if(En)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(s.stateNode)}catch(d){ue(s,n,d)}else try{ve.removeChild(s.stateNode)}catch(d){ue(s,n,d)}break;case 18:ve!==null&&(En?(e=ve,j0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),jl(e)):j0(ve,s.stateNode));break;case 4:o=ve,h=En,ve=s.stateNode.containerInfo,En=!0,ti(e,n,s),ve=o,En=h;break;case 0:case 11:case 14:case 15:Ne||Oi(2,s,n),Ne||Oi(4,s,n),ti(e,n,s);break;case 1:Ne||(wr(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Py(s,n,o)),ti(e,n,s);break;case 21:ti(e,n,s);break;case 22:Ne=(o=Ne)||s.memoizedState!==null,ti(e,n,s),Ne=o;break;default:ti(e,n,s)}}function Ky(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jl(e)}catch(s){ue(n,n.return,s)}}function oE(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Gy),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Gy),n;default:throw Error(a(435,e.tag))}}function sd(e,n){var s=oE(e);n.forEach(function(o){var h=gE.bind(null,e,o);s.has(o)||(s.add(o),o.then(h,h))})}function Dn(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],d=e,b=n,A=b;t:for(;A!==null;){switch(A.tag){case 27:if(qi(A.type)){ve=A.stateNode,En=!1;break t}break;case 5:ve=A.stateNode,En=!1;break t;case 3:case 4:ve=A.stateNode.containerInfo,En=!0;break t}A=A.return}if(ve===null)throw Error(a(160));Yy(d,b,h),ve=null,En=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Xy(n,e),n=n.sibling}var sr=null;function Xy(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dn(n,e),In(e),o&4&&(Oi(3,e,e.return),vl(3,e),Oi(5,e,e.return));break;case 1:Dn(n,e),In(e),o&512&&(Ne||s===null||wr(s,s.return)),o&64&&Jr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=sr;if(Dn(n,e),In(e),o&512&&(Ne||s===null||wr(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[vi]||d[Ce]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),rn(d,o,s),d[Ce]=e,De(d),o=d;break t;case"link":var b=H0("link","href",h).get(o+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(d=b[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break e}}d=h.createElement(o),rn(d,o,s),h.head.appendChild(d);break;case"meta":if(b=H0("meta","content",h).get(o+(s.content||""))){for(A=0;A<b.length;A++)if(d=b[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break e}}d=h.createElement(o),rn(d,o,s),h.head.appendChild(d);break;default:throw Error(a(468,o))}d[Ce]=e,De(d),o=d}e.stateNode=o}else G0(h,e.type,e.stateNode);else e.stateNode=q0(h,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?G0(h,e.type,e.stateNode):q0(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&nd(e,e.memoizedProps,s.memoizedProps)}break;case 27:Dn(n,e),In(e),o&512&&(Ne||s===null||wr(s,s.return)),s!==null&&o&4&&nd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Dn(n,e),In(e),o&512&&(Ne||s===null||wr(s,s.return)),e.flags&32){h=e.stateNode;try{zn(h,"")}catch(H){ue(e,e.return,H)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,nd(e,h,s!==null?s.memoizedProps:h)),o&1024&&(ad=!0);break;case 6:if(Dn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(H){ue(e,e.return,H)}}break;case 3:if(xc=null,h=sr,sr=wc(n.containerInfo),Dn(n,e),sr=h,In(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{jl(n.containerInfo)}catch(H){ue(e,e.return,H)}ad&&(ad=!1,Zy(e));break;case 4:o=sr,sr=wc(e.stateNode.containerInfo),Dn(n,e),In(e),sr=o;break;case 12:Dn(n,e),In(e);break;case 13:Dn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(fd=ye()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sd(e,o)));break;case 22:h=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,U=Jr,X=Ne;if(Jr=U||h,Ne=X||I,Dn(n,e),Ne=X,Jr=U,In(e),o&8192)t:for(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(s===null||I||Jr||Ne||Ga(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){I=s=n;try{if(d=I.stateNode,h)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=I.stateNode;var it=I.memoizedProps.style,P=it!=null&&it.hasOwnProperty("display")?it.display:null;A.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(H){ue(I,I.return,H)}}}else if(n.tag===6){if(s===null){I=n;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(H){ue(I,I.return,H)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,sd(e,s))));break;case 19:Dn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sd(e,o)));break;case 30:break;case 21:break;default:Dn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var s,o=e.return;o!==null;){if(qy(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=rd(e);hc(e,d,h);break;case 5:var b=s.stateNode;s.flags&32&&(zn(b,""),s.flags&=-33);var A=rd(e);hc(e,A,b);break;case 3:case 4:var I=s.stateNode.containerInfo,U=rd(e);id(e,U,I);break;default:throw Error(a(161))}}catch(X){ue(e,e.return,X)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fy(e,n.alternate,n),n=n.sibling}function Ga(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oi(4,n,n.return),Ga(n);break;case 1:wr(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Py(n,n.return,s),Ga(n);break;case 27:Cl(n.stateNode);case 26:case 5:wr(n,n.return),Ga(n);break;case 22:n.memoizedState===null&&Ga(n);break;case 30:Ga(n);break;default:Ga(n)}e=e.sibling}}function Bi(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:Bi(h,d,s),vl(4,d);break;case 1:if(Bi(h,d,s),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){ue(o,o.return,U)}if(o=d,h=o.updateQueue,h!==null){var A=o.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)xg(I[h],A)}catch(U){ue(o,o.return,U)}}s&&b&64&&Uy(d),bl(d,d.return);break;case 27:Hy(d);case 26:case 5:Bi(h,d,s),s&&o===null&&b&4&&$y(d),bl(d,d.return);break;case 12:Bi(h,d,s);break;case 13:Bi(h,d,s),s&&b&4&&Ky(h,d);break;case 22:d.memoizedState===null&&Bi(h,d,s),bl(d,d.return);break;case 30:break;default:Bi(h,d,s)}n=n.sibling}}function od(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&il(s))}function ld(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&il(e))}function Sr(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wy(e,n,s,o),n=n.sibling}function Wy(e,n,s,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:Sr(e,n,s,o),h&2048&&vl(9,n);break;case 1:Sr(e,n,s,o);break;case 3:Sr(e,n,s,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&il(e)));break;case 12:if(h&2048){Sr(e,n,s,o),e=n.stateNode;try{var d=n.memoizedProps,b=d.id,A=d.onPostCommit;typeof A=="function"&&A(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){ue(n,n.return,I)}}else Sr(e,n,s,o);break;case 13:Sr(e,n,s,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Sr(e,n,s,o):_l(e,n):d._visibility&2?Sr(e,n,s,o):(d._visibility|=2,Us(e,n,s,o,(n.subtreeFlags&10256)!==0)),h&2048&&od(b,n);break;case 24:Sr(e,n,s,o),h&2048&&ld(n.alternate,n);break;default:Sr(e,n,s,o)}}function Us(e,n,s,o,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,b=n,A=s,I=o,U=b.flags;switch(b.tag){case 0:case 11:case 15:Us(d,b,A,I,h),vl(8,b);break;case 23:break;case 22:var X=b.stateNode;b.memoizedState!==null?X._visibility&2?Us(d,b,A,I,h):_l(d,b):(X._visibility|=2,Us(d,b,A,I,h)),h&&U&2048&&od(b.alternate,b);break;case 24:Us(d,b,A,I,h),h&&U&2048&&ld(b.alternate,b);break;default:Us(d,b,A,I,h)}n=n.sibling}}function _l(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,h=o.flags;switch(o.tag){case 22:_l(s,o),h&2048&&od(o.alternate,o);break;case 24:_l(s,o),h&2048&&ld(o.alternate,o);break;default:_l(s,o)}n=n.sibling}}var Al=8192;function Ps(e){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Jy(e),e=e.sibling}function Jy(e){switch(e.tag){case 26:Ps(e),e.flags&Al&&e.memoizedState!==null&&FE(sr,e.memoizedState,e.memoizedProps);break;case 5:Ps(e);break;case 3:case 4:var n=sr;sr=wc(e.stateNode.containerInfo),Ps(e),sr=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Al,Al=16777216,Ps(e),Al=n):Ps(e));break;default:Ps(e)}}function t0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function El(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Ye=o,n0(o,e)}t0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)e0(e),e=e.sibling}function e0(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Oi(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,fc(e)):El(e);break;default:El(e)}}function fc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Ye=o,n0(o,e)}t0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oi(8,n,n.return),fc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,fc(n));break;default:fc(n)}e=e.sibling}}function n0(e,n){for(;Ye!==null;){var s=Ye;switch(s.tag){case 0:case 11:case 15:Oi(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:il(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Ye=o;else t:for(s=e;Ye!==null;){o=Ye;var h=o.sibling,d=o.return;if(Qy(o),o===s){Ye=null;break t}if(h!==null){h.return=d,Ye=h;break t}Ye=d}}}var lE={getCacheForType:function(e){var n=hn($e),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},uE=typeof WeakMap=="function"?WeakMap:Map,ne=0,he=null,qt=null,Qt=0,re=0,kn=null,Li=!1,$s=!1,ud=!1,ei=0,Se=0,zi=0,Fa=0,cd=0,Fn=0,qs=0,Tl=null,Tn=null,hd=!1,fd=0,dc=1/0,pc=null,Ui=null,nn=0,Pi=null,Hs=null,Gs=0,dd=0,pd=null,r0=null,wl=0,md=null;function Nn(){if((ne&2)!==0&&Qt!==0)return Qt&-Qt;if(Y.T!==null){var e=Ns;return e!==0?e:Ed()}return Br()}function i0(){Fn===0&&(Fn=(Qt&536870912)===0||Wt?Mo():536870912);var e=Gn.current;return e!==null&&(e.flags|=32),Fn}function Vn(e,n,s){(e===he&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(Fs(e,0),$i(e,Qt,Fn,!1)),Re(e,s),((ne&2)===0||e!==he)&&(e===he&&((ne&2)===0&&(Fa|=s),Se===4&&$i(e,Qt,Fn,!1)),xr(e))}function a0(e,n,s){if((ne&6)!==0)throw Error(a(327));var o=!s&&(n&124)===0&&(n&e.expiredLanes)===0||pi(e,n),h=o?fE(e,n):vd(e,n,!0),d=o;do{if(h===0){$s&&!o&&$i(e,n,0,!1);break}else{if(s=e.current.alternate,d&&!cE(s)){h=vd(e,n,!1),d=!1;continue}if(h===2){if(d=n,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;t:{var A=e;h=Tl;var I=A.current.memoizedState.isDehydrated;if(I&&(Fs(A,b).flags|=256),b=vd(A,b,!1),b!==2){if(ud&&!I){A.errorRecoveryDisabledLanes|=d,Fa|=d,h=4;break t}d=Tn,Tn=h,d!==null&&(Tn===null?Tn=d:Tn.push.apply(Tn,d))}h=b}if(d=!1,h!==2)continue}}if(h===1){Fs(e,0),$i(e,n,0,!0);break}t:{switch(o=e,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:$i(o,n,Fn,!Li);break t;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(h=fd+300-ye(),10<h)){if($i(o,n,Fn,!Li),Bn(o,0,!0)!==0)break t;o.timeoutHandle=M0(s0.bind(null,o,s,Tn,pc,hd,n,Fn,Fa,qs,Li,d,2,-0,0),h);break t}s0(o,s,Tn,pc,hd,n,Fn,Fa,qs,Li,d,0,-0,0)}}break}while(!0);xr(e)}function s0(e,n,s,o,h,d,b,A,I,U,X,it,P,H){if(e.timeoutHandle=-1,it=n.subtreeFlags,(it&8192||(it&16785408)===16785408)&&(kl={stylesheets:null,count:0,unsuspend:GE},Jy(n),it=QE(),it!==null)){e.cancelPendingCommit=it(d0.bind(null,e,n,d,s,o,h,b,A,I,X,1,P,H)),$i(e,d,b,!U);return}d0(e,n,d,s,o,h,b,A,I)}function cE(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],d=h.getSnapshot;h=h.value;try{if(!Rn(d(),h))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $i(e,n,s,o){n&=~cd,n&=~Fa,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var d=31-gn(h),b=1<<d;o[d]=-1,h&=~b}s!==0&&gi(e,s,n)}function mc(){return(ne&6)===0?(Sl(0),!1):!0}function gd(){if(qt!==null){if(re===0)var e=qt.return;else e=qt,Qr=Ua=null,Vf(e),Ls=null,ml=0,e=qt;for(;e!==null;)zy(e.alternate,e),e=e.return;qt=null}}function Fs(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,CE(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),gd(),he=e,qt=s=Hr(e.current,null),Qt=n,re=0,kn=null,Li=!1,$s=pi(e,n),ud=!1,qs=Fn=cd=Fa=zi=Se=0,Tn=Tl=null,hd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-gn(o),d=1<<h;n|=e[h],o&=~d}return ei=n,Bu(),s}function o0(e,n){Pt=null,Y.H=nc,n===sl||n===Fu?(n=wg(),re=3):n===Ag?(n=wg(),re=4):re=n===Sy?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,qt===null&&(Se=1,oc(e,Pn(n,e.current)))}function l0(){var e=Y.H;return Y.H=nc,e===null?nc:e}function u0(){var e=Y.A;return Y.A=lE,e}function yd(){Se=4,Li||(Qt&4194048)!==Qt&&Gn.current!==null||($s=!0),(zi&134217727)===0&&(Fa&134217727)===0||he===null||$i(he,Qt,Fn,!1)}function vd(e,n,s){var o=ne;ne|=2;var h=l0(),d=u0();(he!==e||Qt!==n)&&(pc=null,Fs(e,n)),n=!1;var b=Se;t:do try{if(re!==0&&qt!==null){var A=qt,I=kn;switch(re){case 8:gd(),b=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var U=re;if(re=0,kn=null,Qs(e,A,I,U),s&&$s){b=0;break t}break;default:U=re,re=0,kn=null,Qs(e,A,I,U)}}hE(),b=Se;break}catch(X){o0(e,X)}while(!0);return n&&e.shellSuspendCounter++,Qr=Ua=null,ne=o,Y.H=h,Y.A=d,qt===null&&(he=null,Qt=0,Bu()),b}function hE(){for(;qt!==null;)c0(qt)}function fE(e,n){var s=ne;ne|=2;var o=l0(),h=u0();he!==e||Qt!==n?(pc=null,dc=ye()+500,Fs(e,n)):$s=pi(e,n);t:do try{if(re!==0&&qt!==null){n=qt;var d=kn;e:switch(re){case 1:re=0,kn=null,Qs(e,n,d,1);break;case 2:case 9:if(Eg(d)){re=0,kn=null,h0(n);break}n=function(){re!==2&&re!==9||he!==e||(re=7),xr(e)},d.then(n,n);break t;case 3:re=7;break t;case 4:re=5;break t;case 7:Eg(d)?(re=0,kn=null,h0(n)):(re=0,kn=null,Qs(e,n,d,7));break;case 5:var b=null;switch(qt.tag){case 26:b=qt.memoizedState;case 5:case 27:var A=qt;if(!b||F0(b)){re=0,kn=null;var I=A.sibling;if(I!==null)qt=I;else{var U=A.return;U!==null?(qt=U,gc(U)):qt=null}break e}}re=0,kn=null,Qs(e,n,d,5);break;case 6:re=0,kn=null,Qs(e,n,d,6);break;case 8:gd(),Se=6;break t;default:throw Error(a(462))}}dE();break}catch(X){o0(e,X)}while(!0);return Qr=Ua=null,Y.H=o,Y.A=h,ne=s,qt!==null?0:(he=null,Qt=0,Bu(),Se)}function dE(){for(;qt!==null&&!be();)c0(qt)}function c0(e){var n=By(e.alternate,e,ei);e.memoizedProps=e.pendingProps,n===null?gc(e):qt=n}function h0(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=ky(s,n,n.pendingProps,n.type,void 0,Qt);break;case 11:n=ky(s,n,n.pendingProps,n.type.render,n.ref,Qt);break;case 5:Vf(n);default:zy(s,n),n=qt=fg(n,ei),n=By(s,n,ei)}e.memoizedProps=e.pendingProps,n===null?gc(e):qt=n}function Qs(e,n,s,o){Qr=Ua=null,Vf(n),Ls=null,ml=0;var h=n.return;try{if(nE(e,h,n,s,Qt)){Se=1,oc(e,Pn(s,e.current)),qt=null;return}}catch(d){if(h!==null)throw qt=h,d;Se=1,oc(e,Pn(s,e.current)),qt=null;return}n.flags&32768?(Wt||o===1?e=!0:$s||(Qt&536870912)!==0?e=!1:(Li=e=!0,(o===2||o===9||o===3||o===6)&&(o=Gn.current,o!==null&&o.tag===13&&(o.flags|=16384))),f0(n,e)):gc(n)}function gc(e){var n=e;do{if((n.flags&32768)!==0){f0(n,Li);return}e=n.return;var s=iE(n.alternate,n,ei);if(s!==null){qt=s;return}if(n=n.sibling,n!==null){qt=n;return}qt=n=e}while(n!==null);Se===0&&(Se=5)}function f0(e,n){do{var s=aE(e.alternate,e);if(s!==null){s.flags&=32767,qt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){qt=e;return}qt=e=s}while(e!==null);Se=6,qt=null}function d0(e,n,s,o,h,d,b,A,I){e.cancelPendingCommit=null;do yc();while(nn!==0);if((ne&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=lf,_u(e,s,d,b,A,I),e===he&&(qt=he=null,Qt=0),Hs=n,Pi=e,Gs=s,dd=d,pd=h,r0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yE(Sn,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null,h=pt.p,pt.p=2,b=ne,ne|=4;try{sE(e,n,s)}finally{ne=b,pt.p=h,Y.T=o}}nn=1,p0(),m0(),g0()}}function p0(){if(nn===1){nn=0;var e=Pi,n=Hs,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Y.T,Y.T=null;var o=pt.p;pt.p=2;var h=ne;ne|=4;try{Xy(n,e);var d=Id,b=ng(e.containerInfo),A=d.focusedElem,I=d.selectionRange;if(b!==A&&A&&A.ownerDocument&&eg(A.ownerDocument.documentElement,A)){if(I!==null&&nf(A)){var U=I.start,X=I.end;if(X===void 0&&(X=U),"selectionStart"in A)A.selectionStart=U,A.selectionEnd=Math.min(X,A.value.length);else{var it=A.ownerDocument||document,P=it&&it.defaultView||window;if(P.getSelection){var H=P.getSelection(),Dt=A.textContent.length,xt=Math.min(I.start,Dt),le=I.end===void 0?xt:Math.min(I.end,Dt);!H.extend&&xt>le&&(b=le,le=xt,xt=b);var B=tg(A,xt),M=tg(A,le);if(B&&M&&(H.rangeCount!==1||H.anchorNode!==B.node||H.anchorOffset!==B.offset||H.focusNode!==M.node||H.focusOffset!==M.offset)){var L=it.createRange();L.setStart(B.node,B.offset),H.removeAllRanges(),xt>le?(H.addRange(L),H.extend(M.node,M.offset)):(L.setEnd(M.node,M.offset),H.addRange(L))}}}}for(it=[],H=A;H=H.parentNode;)H.nodeType===1&&it.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<it.length;A++){var et=it[A];et.element.scrollLeft=et.left,et.element.scrollTop=et.top}}Dc=!!Dd,Id=Dd=null}finally{ne=h,pt.p=o,Y.T=s}}e.current=n,nn=2}}function m0(){if(nn===2){nn=0;var e=Pi,n=Hs,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=Y.T,Y.T=null;var o=pt.p;pt.p=2;var h=ne;ne|=4;try{Fy(e,n.alternate,n)}finally{ne=h,pt.p=o,Y.T=s}}nn=3}}function g0(){if(nn===4||nn===3){nn=0,Ge();var e=Pi,n=Hs,s=Gs,o=r0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?nn=5:(nn=0,Hs=Pi=null,y0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ui=null),jo(s),n=n.stateNode,un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(fi,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=Y.T,h=pt.p,pt.p=2,Y.T=null;try{for(var d=e.onRecoverableError,b=0;b<o.length;b++){var A=o[b];d(A.value,{componentStack:A.stack})}}finally{Y.T=n,pt.p=h}}(Gs&3)!==0&&yc(),xr(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===md?wl++:(wl=0,md=e):wl=0,Sl(0)}}function y0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,il(n)))}function yc(e){return p0(),m0(),g0(),v0()}function v0(){if(nn!==5)return!1;var e=Pi,n=dd;dd=0;var s=jo(Gs),o=Y.T,h=pt.p;try{pt.p=32>s?32:s,Y.T=null,s=pd,pd=null;var d=Pi,b=Gs;if(nn=0,Hs=Pi=null,Gs=0,(ne&6)!==0)throw Error(a(331));var A=ne;if(ne|=4,e0(d.current),Wy(d,d.current,b,s),ne=A,Sl(0,!1),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(fi,d)}catch{}return!0}finally{pt.p=h,Y.T=o,y0(e,n)}}function b0(e,n,s){n=Pn(s,n),n=Qf(e.stateNode,n,2),e=ki(e,n,2),e!==null&&(Re(e,2),xr(e))}function ue(e,n,s){if(e.tag===3)b0(e,e,s);else for(;n!==null;){if(n.tag===3){b0(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ui===null||!Ui.has(o))){e=Pn(s,e),s=Ty(2),o=ki(n,s,2),o!==null&&(wy(s,o,n,e),Re(o,2),xr(o));break}}n=n.return}}function bd(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new uE;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(s)||(ud=!0,h.add(s),e=pE.bind(null,e,n,s),n.then(e,e))}function pE(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,he===e&&(Qt&s)===s&&(Se===4||Se===3&&(Qt&62914560)===Qt&&300>ye()-fd?(ne&2)===0&&Fs(e,0):cd|=s,qs===Qt&&(qs=0)),xr(e)}function _0(e,n){n===0&&(n=mi()),e=Cs(e,n),e!==null&&(Re(e,n),xr(e))}function mE(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),_0(e,s)}function gE(e,n){var s=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),_0(e,s)}function yE(e,n){return Xt(e,n)}var vc=null,Ys=null,_d=!1,bc=!1,Ad=!1,Qa=0;function xr(e){e!==Ys&&e.next===null&&(Ys===null?vc=Ys=e:Ys=Ys.next=e),bc=!0,_d||(_d=!0,bE())}function Sl(e,n){if(!Ad&&bc){Ad=!0;do for(var s=!1,o=vc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var b=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-gn(42|e)+1)-1,d&=h&~(b&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,w0(o,d))}else d=Qt,d=Bn(o,o===he?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||pi(o,d)||(s=!0,w0(o,d));o=o.next}while(s);Ad=!1}}function vE(){A0()}function A0(){bc=_d=!1;var e=0;Qa!==0&&(RE()&&(e=Qa),Qa=0);for(var n=ye(),s=null,o=vc;o!==null;){var h=o.next,d=E0(o,n);d===0?(o.next=null,s===null?vc=h:s.next=h,h===null&&(Ys=s)):(s=o,(e!==0||(d&3)!==0)&&(bc=!0)),o=h}Sl(e)}function E0(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-gn(d),A=1<<b,I=h[b];I===-1?((A&s)===0||(A&o)!==0)&&(h[b]=hs(A,n)):I<=n&&(e.expiredLanes|=A),d&=~A}if(n=he,s=Qt,s=Bn(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===n&&(re===2||re===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ge(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||pi(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&ge(o),jo(s)){case 2:case 8:s=Te;break;case 32:s=Sn;break;case 268435456:s=hi;break;default:s=Sn}return o=T0.bind(null,e),s=Xt(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&ge(o),e.callbackPriority=2,e.callbackNode=null,2}function T0(e,n){if(nn!==0&&nn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(yc()&&e.callbackNode!==s)return null;var o=Qt;return o=Bn(e,e===he?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(a0(e,o,n),E0(e,ye()),e.callbackNode!=null&&e.callbackNode===s?T0.bind(null,e):null)}function w0(e,n){if(yc())return null;a0(e,n,!0)}function bE(){DE(function(){(ne&6)!==0?Xt(ie,vE):A0()})}function Ed(){return Qa===0&&(Qa=Mo()),Qa}function S0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:er(""+e)}function x0(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function _E(e,n,s,o,h){if(n==="submit"&&s&&s.stateNode===h){var d=S0((h[tn]||null).action),b=o.submitter;b&&(n=(n=b[tn]||null)?S0(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var A=new xa("action","action",null,o,h);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qa!==0){var I=b?x0(h,b):new FormData(h);$f(s,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(A.preventDefault(),I=b?x0(h,b):new FormData(h),$f(s,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Td=0;Td<of.length;Td++){var wd=of[Td],AE=wd.toLowerCase(),EE=wd[0].toUpperCase()+wd.slice(1);ar(AE,"on"+EE)}ar(ag,"onAnimationEnd"),ar(sg,"onAnimationIteration"),ar(og,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(z1,"onTransitionRun"),ar(U1,"onTransitionStart"),ar(P1,"onTransitionCancel"),ar(lg,"onTransitionEnd"),vr("onMouseEnter",["mouseout","mouseover"]),vr("onMouseLeave",["mouseout","mouseover"]),vr("onPointerEnter",["pointerout","pointerover"]),vr("onPointerLeave",["pointerout","pointerover"]),yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yr("onBeforeInput",["compositionend","keypress","textInput","paste"]),yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function R0(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var A=o[b],I=A.instance,U=A.currentTarget;if(A=A.listener,I!==d&&h.isPropagationStopped())break t;d=A,h.currentTarget=U;try{d(h)}catch(X){sc(X)}h.currentTarget=null,d=I}else for(b=0;b<o.length;b++){if(A=o[b],I=A.instance,U=A.currentTarget,A=A.listener,I!==d&&h.isPropagationStopped())break t;d=A,h.currentTarget=U;try{d(h)}catch(X){sc(X)}h.currentTarget=null,d=I}}}}function Ht(e,n){var s=n[da];s===void 0&&(s=n[da]=new Set);var o=e+"__bubble";s.has(o)||(C0(n,e,2,!1),s.add(o))}function Sd(e,n,s){var o=0;n&&(o|=4),C0(s,e,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function xd(e){if(!e[_c]){e[_c]=!0,Au.forEach(function(s){s!=="selectionchange"&&(TE.has(s)||Sd(s,!1,e),Sd(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_c]||(n[_c]=!0,Sd("selectionchange",!1,n))}}function C0(e,n,s,o){switch(W0(n)){case 2:var h=XE;break;case 8:h=ZE;break;default:h=Ud}s=h.bind(null,n,s,e),h=void 0,!$r||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,s,{capture:!0,passive:h}):e.addEventListener(n,s,!0):h!==void 0?e.addEventListener(n,s,{passive:h}):e.addEventListener(n,s,!1)}function Rd(e,n,s,o,h){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var A=o.stateNode.containerInfo;if(A===h)break;if(b===4)for(b=o.return;b!==null;){var I=b.tag;if((I===3||I===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;A!==null;){if(b=mr(A),b===null)return;if(I=b.tag,I===5||I===6||I===26||I===27){o=d=b;continue t}A=A.parentNode}}o=o.return}Ta(function(){var U=d,X=qo(s),it=[];t:{var P=ug.get(e);if(P!==void 0){var H=xa,Dt=e;switch(e){case"keypress":if(wa(s)===0)break t;case"keydown":case"keyup":H=ws;break;case"focusin":Dt="focus",H=As;break;case"focusout":Dt="blur",H=As;break;case"beforeblur":case"afterblur":H=As;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Ri;break;case ag:case sg:case og:H=Go;break;case lg:H=p;break;case"scroll":case"scrollend":H=Ca;break;case"wheel":H=T;break;case"copy":case"cut":case"paste":H=Iu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Yo;break;case"toggle":case"beforetoggle":H=Q}var xt=(n&4)!==0,le=!xt&&(e==="scroll"||e==="scrollend"),B=xt?P!==null?P+"Capture":null:P;xt=[];for(var M=U,L;M!==null;){var et=M;if(L=et.stateNode,et=et.tag,et!==5&&et!==26&&et!==27||L===null||B===null||(et=Si(M,B),et!=null&&xt.push(Rl(M,et,L))),le)break;M=M.return}0<xt.length&&(P=new H(P,Dt,null,s,X),it.push({event:P,listeners:xt}))}}if((n&7)===0){t:{if(P=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",P&&s!==$o&&(Dt=s.relatedTarget||s.fromElement)&&(mr(Dt)||Dt[Lr]))break t;if((H||P)&&(P=X.window===X?X:(P=X.ownerDocument)?P.defaultView||P.parentWindow:window,H?(Dt=s.relatedTarget||s.toElement,H=U,Dt=Dt?mr(Dt):null,Dt!==null&&(le=c(Dt),xt=Dt.tag,Dt!==le||xt!==5&&xt!==27&&xt!==6)&&(Dt=null)):(H=null,Dt=U),H!==Dt)){if(xt=ka,et="onMouseLeave",B="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(xt=Yo,et="onPointerLeave",B="onPointerEnter",M="pointer"),le=H==null?P:bi(H),L=Dt==null?P:bi(Dt),P=new xt(et,M+"leave",H,s,X),P.target=le,P.relatedTarget=L,et=null,mr(X)===U&&(xt=new xt(B,M+"enter",Dt,s,X),xt.target=L,xt.relatedTarget=le,et=xt),le=et,H&&Dt)e:{for(xt=H,B=Dt,M=0,L=xt;L;L=Ks(L))M++;for(L=0,et=B;et;et=Ks(et))L++;for(;0<M-L;)xt=Ks(xt),M--;for(;0<L-M;)B=Ks(B),L--;for(;M--;){if(xt===B||B!==null&&xt===B.alternate)break e;xt=Ks(xt),B=Ks(B)}xt=null}else xt=null;H!==null&&D0(it,P,H,xt,!1),Dt!==null&&le!==null&&D0(it,le,Dt,xt,!0)}}t:{if(P=U?bi(U):window,H=P.nodeName&&P.nodeName.toLowerCase(),H==="select"||H==="input"&&P.type==="file")var At=Ym;else if(Fm(P))if(Km)At=j1;else{At=M1;var $t=V1}else H=P.nodeName,!H||H.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?U&&vs(U.elementType)&&(At=Ym):At=O1;if(At&&(At=At(e,U))){Qm(it,At,s,X);break t}$t&&$t(e,P,U),e==="focusout"&&U&&P.type==="number"&&U.memoizedProps.value!=null&&zo(P,"number",P.value)}switch($t=U?bi(U):window,e){case"focusin":(Fm($t)||$t.contentEditable==="true")&&(Ss=$t,rf=U,Jo=null);break;case"focusout":Jo=rf=Ss=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,rg(it,s,X);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":rg(it,s,X)}var Tt;if(Ot)t:{switch(e){case"compositionstart":var Rt="onCompositionStart";break t;case"compositionend":Rt="onCompositionEnd";break t;case"compositionupdate":Rt="onCompositionUpdate";break t}Rt=void 0}else ir?nr(e,s)&&(Rt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(Ie&&s.locale!=="ko"&&(ir||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&ir&&(Tt=Ru()):(Un=X,ce="value"in Un?Un.value:Un.textContent,ir=!0)),$t=Ac(U,Rt),0<$t.length&&(Rt=new Qo(Rt,e,null,s,X),it.push({event:Rt,listeners:$t}),Tt?Rt.data=Tt:(Tt=rr(s),Tt!==null&&(Rt.data=Tt)))),(Tt=ee?Ko(e,s):I1(e,s))&&(Rt=Ac(U,"onBeforeInput"),0<Rt.length&&($t=new Qo("onBeforeInput","beforeinput",null,s,X),it.push({event:$t,listeners:Rt}),$t.data=Tt)),_E(it,e,U,s,X)}R0(it,n)})}function Rl(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Ac(e,n){for(var s=n+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Si(e,s),h!=null&&o.unshift(Rl(e,h,d)),h=Si(e,n),h!=null&&o.push(Rl(e,h,d))),e.tag===3)return o;e=e.return}return[]}function Ks(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function D0(e,n,s,o,h){for(var d=n._reactName,b=[];s!==null&&s!==o;){var A=s,I=A.alternate,U=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||U===null||(I=U,h?(U=Si(s,d),U!=null&&b.unshift(Rl(s,U,I))):h||(U=Si(s,d),U!=null&&b.push(Rl(s,U,I)))),s=s.return}b.length!==0&&e.push({event:n,listeners:b})}var wE=/\r\n?/g,SE=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(wE,`
`).replace(SE,"")}function k0(e,n){return n=I0(n),I0(e)===n}function Ec(){}function oe(e,n,s,o,h,d){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":va(e,"class",o);break;case"tabIndex":va(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":va(e,s,o);break;case"style":Po(e,o,d);break;case"data":if(n!=="object"){va(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=er(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&oe(e,n,"name",h.name,h,null),oe(e,n,"formEncType",h.formEncType,h,null),oe(e,n,"formMethod",h.formMethod,h,null),oe(e,n,"formTarget",h.formTarget,h,null)):(oe(e,n,"encType",h.encType,h,null),oe(e,n,"method",h.method,h,null),oe(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=er(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Ec);break;case"onScroll":o!=null&&Ht("scroll",e);break;case"onScrollEnd":o!=null&&Ht("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=er(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Ht("beforetoggle",e),Ht("toggle",e),ya(e,"popover",o);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ya(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=wu.get(s)||s,ya(e,s,o))}}function Cd(e,n,s,o,h,d){switch(s){case"style":Po(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&Ht("scroll",e);break;case"onScrollEnd":o!=null&&Ht("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ma.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),n=s.slice(2,h?s.length-7:void 0),d=e[tn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(n,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):ya(e,s,o)}}}function rn(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ht("error",e),Ht("load",e);var o=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var b=s[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:oe(e,n,d,b,s,null)}}h&&oe(e,n,"srcSet",s.srcSet,s,null),o&&oe(e,n,"src",s.src,s,null);return;case"input":Ht("invalid",e);var A=d=b=h=null,I=null,U=null;for(o in s)if(s.hasOwnProperty(o)){var X=s[o];if(X!=null)switch(o){case"name":h=X;break;case"type":b=X;break;case"checked":I=X;break;case"defaultChecked":U=X;break;case"value":d=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,n));break;default:oe(e,n,o,X,s,null)}}Lo(e,d,A,I,U,b,h,!1),Ei(e);return;case"select":Ht("invalid",e),o=b=d=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":d=A;break;case"defaultValue":b=A;break;case"multiple":o=A;default:oe(e,n,h,A,s,null)}n=d,s=b,e.multiple=!!o,n!=null?Ti(e,!!o,n,!1):s!=null&&Ti(e,!!o,s,!0);return;case"textarea":Ht("invalid",e),d=h=o=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":o=A;break;case"defaultValue":h=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:oe(e,n,b,A,s,null)}Tu(e,o,h,d),Ei(e);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(o=s[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:oe(e,n,I,o,s,null)}return;case"dialog":Ht("beforetoggle",e),Ht("toggle",e),Ht("cancel",e),Ht("close",e);break;case"iframe":case"object":Ht("load",e);break;case"video":case"audio":for(o=0;o<xl.length;o++)Ht(xl[o],e);break;case"image":Ht("error",e),Ht("load",e);break;case"details":Ht("toggle",e);break;case"embed":case"source":case"link":Ht("error",e),Ht("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(o=s[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:oe(e,n,U,o,s,null)}return;default:if(vs(n)){for(X in s)s.hasOwnProperty(X)&&(o=s[X],o!==void 0&&Cd(e,n,X,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&oe(e,n,A,o,s,null))}function xE(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,b=null,A=null,I=null,U=null,X=null;for(H in s){var it=s[H];if(s.hasOwnProperty(H)&&it!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=it;default:o.hasOwnProperty(H)||oe(e,n,H,null,o,it)}}for(var P in o){var H=o[P];if(it=s[P],o.hasOwnProperty(P)&&(H!=null||it!=null))switch(P){case"type":d=H;break;case"name":h=H;break;case"checked":U=H;break;case"defaultChecked":X=H;break;case"value":b=H;break;case"defaultValue":A=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:H!==it&&oe(e,n,P,H,o,it)}}Bo(e,b,A,I,U,X,d,h);return;case"select":H=b=A=P=null;for(d in s)if(I=s[d],s.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:o.hasOwnProperty(d)||oe(e,n,d,null,o,I)}for(h in o)if(d=o[h],I=s[h],o.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":P=d;break;case"defaultValue":A=d;break;case"multiple":b=d;default:d!==I&&oe(e,n,h,d,o,I)}n=A,s=b,o=H,P!=null?Ti(e,!!s,P,!1):!!o!=!!s&&(n!=null?Ti(e,!!s,n,!0):Ti(e,!!s,s?[]:"",!1));return;case"textarea":H=P=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:oe(e,n,A,null,o,h)}for(b in o)if(h=o[b],d=s[b],o.hasOwnProperty(b)&&(h!=null||d!=null))switch(b){case"value":P=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&oe(e,n,b,h,o,d)}Eu(e,P,H);return;case"option":for(var Dt in s)if(P=s[Dt],s.hasOwnProperty(Dt)&&P!=null&&!o.hasOwnProperty(Dt))switch(Dt){case"selected":e.selected=!1;break;default:oe(e,n,Dt,null,o,P)}for(I in o)if(P=o[I],H=s[I],o.hasOwnProperty(I)&&P!==H&&(P!=null||H!=null))switch(I){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:oe(e,n,I,P,o,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xt in s)P=s[xt],s.hasOwnProperty(xt)&&P!=null&&!o.hasOwnProperty(xt)&&oe(e,n,xt,null,o,P);for(U in o)if(P=o[U],H=s[U],o.hasOwnProperty(U)&&P!==H&&(P!=null||H!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:oe(e,n,U,P,o,H)}return;default:if(vs(n)){for(var le in s)P=s[le],s.hasOwnProperty(le)&&P!==void 0&&!o.hasOwnProperty(le)&&Cd(e,n,le,void 0,o,P);for(X in o)P=o[X],H=s[X],!o.hasOwnProperty(X)||P===H||P===void 0&&H===void 0||Cd(e,n,X,P,o,H);return}}for(var B in s)P=s[B],s.hasOwnProperty(B)&&P!=null&&!o.hasOwnProperty(B)&&oe(e,n,B,null,o,P);for(it in o)P=o[it],H=s[it],!o.hasOwnProperty(it)||P===H||P==null&&H==null||oe(e,n,it,P,o,H)}var Dd=null,Id=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function N0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nd=null;function RE(){var e=window.event;return e&&e.type==="popstate"?e===Nd?!1:(Nd=e,!0):(Nd=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,DE=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(e){return O0.resolve(null).then(e).catch(IE)}:M0;function IE(e){setTimeout(function(){throw e})}function qi(e){return e==="head"}function j0(e,n){var s=n,o=0,h=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<o&&8>o){s=o;var b=e.ownerDocument;if(s&1&&Cl(b.documentElement),s&2&&Cl(b.body),s&4)for(s=b.head,Cl(s),b=s.firstChild;b;){var A=b.nextSibling,I=b.nodeName;b[vi]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=A}}if(h===0){e.removeChild(d),jl(n);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:o=s.charCodeAt(0)-48;else o=0;s=d}while(s);jl(n)}function Vd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Vd(s),ds(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function kE(e,n,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[vi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=or(e.nextSibling),e===null)break}return null}function NE(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=or(e.nextSibling),e===null))return null;return e}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function VE(e,n){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function or(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Od=null;function B0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function L0(e,n,s){switch(n=Tc(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Cl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ds(e)}var Qn=new Map,z0=new Set;function wc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ni=pt.d;pt.d={f:ME,r:OE,D:jE,C:BE,L:LE,m:zE,X:PE,S:UE,M:$E};function ME(){var e=ni.f(),n=mc();return e||n}function OE(e){var n=gr(e);n!==null&&n.tag===5&&n.type==="form"?ay(n):ni.r(e)}var Xs=typeof document>"u"?null:document;function U0(e,n,s){var o=Xs;if(o&&typeof n=="string"&&n){var h=Fe(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),z0.has(h)||(z0.add(h),e={rel:e,crossOrigin:s,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),rn(n,"link",e),De(n),o.head.appendChild(n)))}}function jE(e){ni.D(e),U0("dns-prefetch",e,null)}function BE(e,n){ni.C(e,n),U0("preconnect",e,n)}function LE(e,n,s){ni.L(e,n,s);var o=Xs;if(o&&e&&n){var h='link[rel="preload"][as="'+Fe(n)+'"]';n==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Fe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Fe(s.imageSizes)+'"]')):h+='[href="'+Fe(e)+'"]';var d=h;switch(n){case"style":d=Zs(e);break;case"script":d=Ws(e)}Qn.has(d)||(e=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Qn.set(d,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(Dl(d))||n==="script"&&o.querySelector(Il(d))||(n=o.createElement("link"),rn(n,"link",e),De(n),o.head.appendChild(n)))}}function zE(e,n){ni.m(e,n);var s=Xs;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+Fe(o)+'"][href="'+Fe(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ws(e)}if(!Qn.has(d)&&(e=_({rel:"modulepreload",href:e},n),Qn.set(d,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Il(d)))return}o=s.createElement("link"),rn(o,"link",e),De(o),s.head.appendChild(o)}}}function UE(e,n,s){ni.S(e,n,s);var o=Xs;if(o&&e){var h=_i(o).hoistableStyles,d=Zs(e);n=n||"default";var b=h.get(d);if(!b){var A={loading:0,preload:null};if(b=o.querySelector(Dl(d)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Qn.get(d))&&jd(e,s);var I=b=o.createElement("link");De(I),rn(I,"link",e),I._p=new Promise(function(U,X){I.onload=U,I.onerror=X}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Sc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:A},h.set(d,b)}}}function PE(e,n){ni.X(e,n);var s=Xs;if(s&&e){var o=_i(s).hoistableScripts,h=Ws(e),d=o.get(h);d||(d=s.querySelector(Il(h)),d||(e=_({src:e,async:!0},n),(n=Qn.get(h))&&Bd(e,n),d=s.createElement("script"),De(d),rn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function $E(e,n){ni.M(e,n);var s=Xs;if(s&&e){var o=_i(s).hoistableScripts,h=Ws(e),d=o.get(h);d||(d=s.querySelector(Il(h)),d||(e=_({src:e,async:!0,type:"module"},n),(n=Qn.get(h))&&Bd(e,n),d=s.createElement("script"),De(d),rn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function P0(e,n,s,o){var h=(h=mt.current)?wc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Zs(s.href),s=_i(h).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Zs(s.href);var d=_i(h).hoistableStyles,b=d.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=h.querySelector(Dl(e)))&&!d._p&&(b.instance=d,b.state.loading=5),Qn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Qn.set(e,s),d||qE(h,e,s,b.state))),n&&o===null)throw Error(a(528,""));return b}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ws(s),s=_i(h).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Zs(e){return'href="'+Fe(e)+'"'}function Dl(e){return'link[rel="stylesheet"]['+e+"]"}function $0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function qE(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),rn(n,"link",s),De(n),e.head.appendChild(n))}function Ws(e){return'[src="'+Fe(e)+'"]'}function Il(e){return"script[async]"+e}function q0(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Fe(s.href)+'"]');if(o)return n.instance=o,De(o),o;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),De(o),rn(o,"style",h),Sc(o,s.precedence,e),n.instance=o;case"stylesheet":h=Zs(s.href);var d=e.querySelector(Dl(h));if(d)return n.state.loading|=4,n.instance=d,De(d),d;o=$0(s),(h=Qn.get(h))&&jd(o,h),d=(e.ownerDocument||e).createElement("link"),De(d);var b=d;return b._p=new Promise(function(A,I){b.onload=A,b.onerror=I}),rn(d,"link",o),n.state.loading|=4,Sc(d,s.precedence,e),n.instance=d;case"script":return d=Ws(s.src),(h=e.querySelector(Il(d)))?(n.instance=h,De(h),h):(o=s,(h=Qn.get(d))&&(o=_({},s),Bd(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),De(h),rn(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Sc(o,s.precedence,e));return n.instance}function Sc(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,b=0;b<o.length;b++){var A=o[b];if(A.dataset.precedence===n)d=A;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var xc=null;function H0(e,n,s){if(xc===null){var o=new Map,h=xc=new Map;h.set(s,o)}else h=xc,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var d=s[h];if(!(d[vi]||d[Ce]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=e+b;var A=o.get(b);A?A.push(d):o.set(b,[d])}}return o}function G0(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function HE(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var kl=null;function GE(){}function FE(e,n,s){if(kl===null)throw Error(a(475));var o=kl;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=Zs(s.href),d=e.querySelector(Dl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Rc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,De(d);return}d=e.ownerDocument||e,s=$0(s),(h=Qn.get(h))&&jd(s,h),d=d.createElement("link"),De(d);var b=d;b._p=new Promise(function(A,I){b.onload=A,b.onerror=I}),rn(d,"link",s),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Rc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function QE(){if(kl===null)throw Error(a(475));var e=kl;return e.stylesheets&&e.count===0&&Ld(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Ld(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Rc(){if(this.count--,this.count===0){if(this.stylesheets)Ld(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cc=null;function Ld(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cc=new Map,n.forEach(YE,e),Cc=null,Rc.call(e))}function YE(e,n){if(!(n.state.loading&4)){var s=Cc.get(e);if(s)var o=s.get(null);else{s=new Map,Cc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var b=h[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),o=b)}o&&s.set(null,o)}h=n.instance,b=h.getAttribute("data-precedence"),d=s.get(b)||o,d===o&&s.set(null,h),s.set(b,h),this.count++,o=Rc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var Nl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function KE(e,n,s,o,h,d,b,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.hiddenUpdates=fs(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Q0(e,n,s,o,h,d,b,A,I,U,X,it){return e=new KE(e,n,s,b,A,I,U,it),n=1,d===!0&&(n|=24),d=Cn(3,null,null,n),e.current=d,d.stateNode=e,n=bf(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:n},Tf(d),e}function Y0(e){return e?(e=Ds,e):Ds}function K0(e,n,s,o,h,d){h=Y0(h),o.context===null?o.context=h:o.pendingContext=h,o=Ii(n),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=ki(e,o,n),s!==null&&(Vn(s,e,n),ll(s,e,n))}function X0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function zd(e,n){X0(e,n),(e=e.alternate)&&X0(e,n)}function Z0(e){if(e.tag===13){var n=Cs(e,67108864);n!==null&&Vn(n,e,67108864),zd(e,67108864)}}var Dc=!0;function XE(e,n,s,o){var h=Y.T;Y.T=null;var d=pt.p;try{pt.p=2,Ud(e,n,s,o)}finally{pt.p=d,Y.T=h}}function ZE(e,n,s,o){var h=Y.T;Y.T=null;var d=pt.p;try{pt.p=8,Ud(e,n,s,o)}finally{pt.p=d,Y.T=h}}function Ud(e,n,s,o){if(Dc){var h=Pd(o);if(h===null)Rd(e,n,o,Ic,s),J0(e,o);else if(JE(h,e,n,s,o))o.stopPropagation();else if(J0(e,o),n&4&&-1<WE.indexOf(e)){for(;h!==null;){var d=gr(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Wn(d.pendingLanes);if(b!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var I=1<<31-gn(b);A.entanglements[1]|=I,b&=~I}xr(d),(ne&6)===0&&(dc=ye()+500,Sl(0))}}break;case 13:A=Cs(d,2),A!==null&&Vn(A,d,2),mc(),zd(d,2)}if(d=Pd(o),d===null&&Rd(e,n,o,Ic,s),d===h)break;h=d}h!==null&&o.stopPropagation()}else Rd(e,n,o,null,s)}}function Pd(e){return e=qo(e),$d(e)}var Ic=null;function $d(e){if(Ic=null,e=mr(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=f(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ic=e,null}function W0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(On()){case ie:return 2;case Te:return 8;case Sn:case jr:return 32;case hi:return 268435456;default:return 32}default:return 32}}var qd=!1,Hi=null,Gi=null,Fi=null,Vl=new Map,Ml=new Map,Qi=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J0(e,n){switch(e){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":Vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(n.pointerId)}}function Ol(e,n,s,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},n!==null&&(n=gr(n),n!==null&&Z0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function JE(e,n,s,o,h){switch(n){case"focusin":return Hi=Ol(Hi,e,n,s,o,h),!0;case"dragenter":return Gi=Ol(Gi,e,n,s,o,h),!0;case"mouseover":return Fi=Ol(Fi,e,n,s,o,h),!0;case"pointerover":var d=h.pointerId;return Vl.set(d,Ol(Vl.get(d)||null,e,n,s,o,h)),!0;case"gotpointercapture":return d=h.pointerId,Ml.set(d,Ol(Ml.get(d)||null,e,n,s,o,h)),!0}return!1}function tv(e){var n=mr(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){e.blockedOn=n,Kh(e.priority,function(){if(s.tag===13){var o=Nn();o=Oo(o);var h=Cs(s,o);h!==null&&Vn(h,s,o),zd(s,o)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Pd(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);$o=o,s.target.dispatchEvent(o),$o=null}else return n=gr(s),n!==null&&Z0(n),e.blockedOn=s,!1;n.shift()}return!0}function ev(e,n,s){kc(e)&&s.delete(n)}function tT(){qd=!1,Hi!==null&&kc(Hi)&&(Hi=null),Gi!==null&&kc(Gi)&&(Gi=null),Fi!==null&&kc(Fi)&&(Fi=null),Vl.forEach(ev),Ml.forEach(ev)}function Nc(e,n){e.blockedOn===n&&(e.blockedOn=null,qd||(qd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tT)))}var Vc=null;function nv(e){Vc!==e&&(Vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Vc===e&&(Vc=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if($d(o||s)===null)continue;break}var d=gr(s);d!==null&&(e.splice(n,3),n-=3,$f(d,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function jl(e){function n(I){return Nc(I,e)}Hi!==null&&Nc(Hi,e),Gi!==null&&Nc(Gi,e),Fi!==null&&Nc(Fi,e),Vl.forEach(n),Ml.forEach(n);for(var s=0;s<Qi.length;s++){var o=Qi[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qi.length&&(s=Qi[0],s.blockedOn===null);)tv(s),s.blockedOn===null&&Qi.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],d=s[o+1],b=h[tn]||null;if(typeof d=="function")b||nv(s);else if(b){var A=null;if(d&&d.hasAttribute("formAction")){if(h=d,b=d[tn]||null)A=b.formAction;else if($d(h)!==null)continue}else A=b.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),nv(s)}}}function Hd(e){this._internalRoot=e}Mc.prototype.render=Hd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=Nn();K0(s,o,e,n,null,null)},Mc.prototype.unmount=Hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;K0(e.current,2,null,e,null,null),mc(),n[Lr]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Br();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Qi.length&&n!==0&&n<Qi[s].priority;s++);Qi.splice(s,0,e),s===0&&tv(e)}};var rv=t.version;if(rv!=="19.1.0")throw Error(a(527,rv,"19.1.0"));pt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var eT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{fi=Oc.inject(eT),un=Oc}catch{}}return Ll.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",h=by,d=_y,b=Ay,A=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Q0(e,1,!1,null,null,s,o,h,d,b,A,null),e[Lr]=n.current,xd(e),new Hd(n)},Ll.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,h="",d=by,b=_y,A=Ay,I=null,U=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&(U=s.formState)),n=Q0(e,1,!0,n,s??null,o,h,d,b,A,I,U),n.context=Y0(null),s=n.current,o=Nn(),o=Oo(o),h=Ii(o),h.callback=null,ki(s,h,o),s=o,n.current.lanes=s,Re(n,s),xr(n),e[Lr]=n.current,xd(e),new Mc(n)},Ll.version="19.1.0",Ll}var dv;function fT(){if(dv)return Qd.exports;dv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qd.exports=hT(),Qd.exports}var dT=fT(),We=function(){return We=Object.assign||function(t){for(var i,a=1,l=arguments.length;a<l;a++){i=arguments[a];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},We.apply(this,arguments)};function Zl(r,t,i){if(i||arguments.length===2)for(var a=0,l=t.length,c;a<l;a++)(c||!(a in t))&&(c||(c=Array.prototype.slice.call(t,0,a)),c[a]=t[a]);return r.concat(c||Array.prototype.slice.call(t))}var pe="-ms-",Gl="-moz-",Jt="-webkit-",e_="comm",Rh="rule",Yp="decl",pT="@import",n_="@keyframes",mT="@layer",r_=Math.abs,Kp=String.fromCharCode,fp=Object.assign;function gT(r,t){return Ze(r,0)^45?(((t<<2^Ze(r,0))<<2^Ze(r,1))<<2^Ze(r,2))<<2^Ze(r,3):0}function i_(r){return r.trim()}function ii(r,t){return(r=t.exec(r))?r[0]:r}function zt(r,t,i){return r.replace(t,i)}function Qc(r,t,i){return r.indexOf(t,i)}function Ze(r,t){return r.charCodeAt(t)|0}function mo(r,t,i){return r.slice(t,i)}function Cr(r){return r.length}function a_(r){return r.length}function zl(r,t){return t.push(r),r}function yT(r,t){return r.map(t).join("")}function pv(r,t){return r.filter(function(i){return!ii(i,t)})}var Ch=1,go=1,s_=0,Zn=0,Le=0,Ro="";function Dh(r,t,i,a,l,c,f,m){return{value:r,root:t,parent:i,type:a,props:l,children:c,line:Ch,column:go,length:f,return:"",siblings:m}}function Ki(r,t){return fp(Dh("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},t)}function Js(r){for(;r.root;)r=Ki(r.root,{children:[r]});zl(r,r.siblings)}function vT(){return Le}function bT(){return Le=Zn>0?Ze(Ro,--Zn):0,go--,Le===10&&(go=1,Ch--),Le}function ur(){return Le=Zn<s_?Ze(Ro,Zn++):0,go++,Le===10&&(go=1,Ch++),Le}function ts(){return Ze(Ro,Zn)}function Yc(){return Zn}function Ih(r,t){return mo(Ro,r,t)}function dp(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _T(r){return Ch=go=1,s_=Cr(Ro=r),Zn=0,[]}function AT(r){return Ro="",r}function Zd(r){return i_(Ih(Zn-1,pp(r===91?r+2:r===40?r+1:r)))}function ET(r){for(;(Le=ts())&&Le<33;)ur();return dp(r)>2||dp(Le)>3?"":" "}function TT(r,t){for(;--t&&ur()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Ih(r,Yc()+(t<6&&ts()==32&&ur()==32))}function pp(r){for(;ur();)switch(Le){case r:return Zn;case 34:case 39:r!==34&&r!==39&&pp(Le);break;case 40:r===41&&pp(r);break;case 92:ur();break}return Zn}function wT(r,t){for(;ur()&&r+Le!==57;)if(r+Le===84&&ts()===47)break;return"/*"+Ih(t,Zn-1)+"*"+Kp(r===47?r:ur())}function ST(r){for(;!dp(ts());)ur();return Ih(r,Zn)}function xT(r){return AT(Kc("",null,null,null,[""],r=_T(r),0,[0],r))}function Kc(r,t,i,a,l,c,f,m,g){for(var y=0,_=0,E=f,x=0,j=0,q=0,K=1,G=1,rt=1,J=0,Z="",ot=l,st=c,lt=a,S=Z;G;)switch(q=J,J=ur()){case 40:if(q!=108&&Ze(S,E-1)==58){Qc(S+=zt(Zd(J),"&","&\f"),"&\f",r_(y?m[y-1]:0))!=-1&&(rt=-1);break}case 34:case 39:case 91:S+=Zd(J);break;case 9:case 10:case 13:case 32:S+=ET(q);break;case 92:S+=TT(Yc()-1,7);continue;case 47:switch(ts()){case 42:case 47:zl(RT(wT(ur(),Yc()),t,i,g),g);break;default:S+="/"}break;case 123*K:m[y++]=Cr(S)*rt;case 125*K:case 59:case 0:switch(J){case 0:case 125:G=0;case 59+_:rt==-1&&(S=zt(S,/\f/g,"")),j>0&&Cr(S)-E&&zl(j>32?gv(S+";",a,i,E-1,g):gv(zt(S," ","")+";",a,i,E-2,g),g);break;case 59:S+=";";default:if(zl(lt=mv(S,t,i,y,_,l,m,Z,ot=[],st=[],E,c),c),J===123)if(_===0)Kc(S,t,lt,lt,ot,c,E,m,st);else switch(x===99&&Ze(S,3)===110?100:x){case 100:case 108:case 109:case 115:Kc(r,lt,lt,a&&zl(mv(r,lt,lt,0,0,l,m,Z,l,ot=[],E,st),st),l,st,E,m,a?ot:st);break;default:Kc(S,lt,lt,lt,[""],st,0,m,st)}}y=_=j=0,K=rt=1,Z=S="",E=f;break;case 58:E=1+Cr(S),j=q;default:if(K<1){if(J==123)--K;else if(J==125&&K++==0&&bT()==125)continue}switch(S+=Kp(J),J*K){case 38:rt=_>0?1:(S+="\f",-1);break;case 44:m[y++]=(Cr(S)-1)*rt,rt=1;break;case 64:ts()===45&&(S+=Zd(ur())),x=ts(),_=E=Cr(Z=S+=ST(Yc())),J++;break;case 45:q===45&&Cr(S)==2&&(K=0)}}return c}function mv(r,t,i,a,l,c,f,m,g,y,_,E){for(var x=l-1,j=l===0?c:[""],q=a_(j),K=0,G=0,rt=0;K<a;++K)for(var J=0,Z=mo(r,x+1,x=r_(G=f[K])),ot=r;J<q;++J)(ot=i_(G>0?j[J]+" "+Z:zt(Z,/&\f/g,j[J])))&&(g[rt++]=ot);return Dh(r,t,i,l===0?Rh:m,g,y,_,E)}function RT(r,t,i,a){return Dh(r,t,i,e_,Kp(vT()),mo(r,2,-2),0,a)}function gv(r,t,i,a,l){return Dh(r,t,i,Yp,mo(r,0,a),mo(r,a+1,-1),a,l)}function o_(r,t,i){switch(gT(r,t)){case 5103:return Jt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Jt+r+r;case 4789:return Gl+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Jt+r+Gl+r+pe+r+r;case 5936:switch(Ze(r,t+11)){case 114:return Jt+r+pe+zt(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Jt+r+pe+zt(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Jt+r+pe+zt(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Jt+r+pe+r+r;case 6165:return Jt+r+pe+"flex-"+r+r;case 5187:return Jt+r+zt(r,/(\w+).+(:[^]+)/,Jt+"box-$1$2"+pe+"flex-$1$2")+r;case 5443:return Jt+r+pe+"flex-item-"+zt(r,/flex-|-self/g,"")+(ii(r,/flex-|baseline/)?"":pe+"grid-row-"+zt(r,/flex-|-self/g,""))+r;case 4675:return Jt+r+pe+"flex-line-pack"+zt(r,/align-content|flex-|-self/g,"")+r;case 5548:return Jt+r+pe+zt(r,"shrink","negative")+r;case 5292:return Jt+r+pe+zt(r,"basis","preferred-size")+r;case 6060:return Jt+"box-"+zt(r,"-grow","")+Jt+r+pe+zt(r,"grow","positive")+r;case 4554:return Jt+zt(r,/([^-])(transform)/g,"$1"+Jt+"$2")+r;case 6187:return zt(zt(zt(r,/(zoom-|grab)/,Jt+"$1"),/(image-set)/,Jt+"$1"),r,"")+r;case 5495:case 3959:return zt(r,/(image-set\([^]*)/,Jt+"$1$`$1");case 4968:return zt(zt(r,/(.+:)(flex-)?(.*)/,Jt+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Jt+r+r;case 4200:if(!ii(r,/flex-|baseline/))return pe+"grid-column-align"+mo(r,t)+r;break;case 2592:case 3360:return pe+zt(r,"template-","")+r;case 4384:case 3616:return i&&i.some(function(a,l){return t=l,ii(a.props,/grid-\w+-end/)})?~Qc(r+(i=i[t].value),"span",0)?r:pe+zt(r,"-start","")+r+pe+"grid-row-span:"+(~Qc(i,"span",0)?ii(i,/\d+/):+ii(i,/\d+/)-+ii(r,/\d+/))+";":pe+zt(r,"-start","")+r;case 4896:case 4128:return i&&i.some(function(a){return ii(a.props,/grid-\w+-start/)})?r:pe+zt(zt(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return zt(r,/(.+)-inline(.+)/,Jt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cr(r)-1-t>6)switch(Ze(r,t+1)){case 109:if(Ze(r,t+4)!==45)break;case 102:return zt(r,/(.+:)(.+)-([^]+)/,"$1"+Jt+"$2-$3$1"+Gl+(Ze(r,t+3)==108?"$3":"$2-$3"))+r;case 115:return~Qc(r,"stretch",0)?o_(zt(r,"stretch","fill-available"),t,i)+r:r}break;case 5152:case 5920:return zt(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,l,c,f,m,g,y){return pe+l+":"+c+y+(f?pe+l+"-span:"+(m?g:+g-+c)+y:"")+r});case 4949:if(Ze(r,t+6)===121)return zt(r,":",":"+Jt)+r;break;case 6444:switch(Ze(r,Ze(r,14)===45?18:11)){case 120:return zt(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Jt+(Ze(r,14)===45?"inline-":"")+"box$3$1"+Jt+"$2$3$1"+pe+"$2box$3")+r;case 100:return zt(r,":",":"+pe)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return zt(r,"scroll-","scroll-snap-")+r}return r}function ah(r,t){for(var i="",a=0;a<r.length;a++)i+=t(r[a],a,r,t)||"";return i}function CT(r,t,i,a){switch(r.type){case mT:if(r.children.length)break;case pT:case Yp:return r.return=r.return||r.value;case e_:return"";case n_:return r.return=r.value+"{"+ah(r.children,a)+"}";case Rh:if(!Cr(r.value=r.props.join(",")))return""}return Cr(i=ah(r.children,a))?r.return=r.value+"{"+i+"}":""}function DT(r){var t=a_(r);return function(i,a,l,c){for(var f="",m=0;m<t;m++)f+=r[m](i,a,l,c)||"";return f}}function IT(r){return function(t){t.root||(t=t.return)&&r(t)}}function kT(r,t,i,a){if(r.length>-1&&!r.return)switch(r.type){case Yp:r.return=o_(r.value,r.length,i);return;case n_:return ah([Ki(r,{value:zt(r.value,"@","@"+Jt)})],a);case Rh:if(r.length)return yT(i=r.props,function(l){switch(ii(l,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Js(Ki(r,{props:[zt(l,/:(read-\w+)/,":"+Gl+"$1")]})),Js(Ki(r,{props:[l]})),fp(r,{props:pv(i,a)});break;case"::placeholder":Js(Ki(r,{props:[zt(l,/:(plac\w+)/,":"+Jt+"input-$1")]})),Js(Ki(r,{props:[zt(l,/:(plac\w+)/,":"+Gl+"$1")]})),Js(Ki(r,{props:[zt(l,/:(plac\w+)/,pe+"input-$1")]})),Js(Ki(r,{props:[l]})),fp(r,{props:pv(i,a)});break}return""})}}var NT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mn={},yo=typeof process<"u"&&Mn!==void 0&&(Mn.REACT_APP_SC_ATTR||Mn.SC_ATTR)||"data-styled",l_="active",u_="data-styled-version",kh="6.1.19",Xp=`/*!sc*/
`,sh=typeof window<"u"&&typeof document<"u",VT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==""?Mn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.SC_DISABLE_SPEEDY!==void 0&&Mn.SC_DISABLE_SPEEDY!==""&&Mn.SC_DISABLE_SPEEDY!=="false"&&Mn.SC_DISABLE_SPEEDY),MT={},Nh=Object.freeze([]),vo=Object.freeze({});function c_(r,t,i){return i===void 0&&(i=vo),r.theme!==i.theme&&r.theme||t||i.theme}var h_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),OT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jT=/(^-|-$)/g;function yv(r){return r.replace(OT,"-").replace(jT,"")}var BT=/(a)(d)/gi,jc=52,vv=function(r){return String.fromCharCode(r+(r>25?39:97))};function mp(r){var t,i="";for(t=Math.abs(r);t>jc;t=t/jc|0)i=vv(t%jc)+i;return(vv(t%jc)+i).replace(BT,"$1-$2")}var Wd,f_=5381,ao=function(r,t){for(var i=t.length;i;)r=33*r^t.charCodeAt(--i);return r},d_=function(r){return ao(f_,r)};function p_(r){return mp(d_(r)>>>0)}function LT(r){return r.displayName||r.name||"Component"}function Jd(r){return typeof r=="string"&&!0}var m_=typeof Symbol=="function"&&Symbol.for,g_=m_?Symbol.for("react.memo"):60115,zT=m_?Symbol.for("react.forward_ref"):60112,UT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},PT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$T=((Wd={})[zT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wd[g_]=y_,Wd);function bv(r){return("type"in(t=r)&&t.type.$$typeof)===g_?y_:"$$typeof"in r?$T[r.$$typeof]:UT;var t}var qT=Object.defineProperty,HT=Object.getOwnPropertyNames,_v=Object.getOwnPropertySymbols,GT=Object.getOwnPropertyDescriptor,FT=Object.getPrototypeOf,Av=Object.prototype;function v_(r,t,i){if(typeof t!="string"){if(Av){var a=FT(t);a&&a!==Av&&v_(r,a,i)}var l=HT(t);_v&&(l=l.concat(_v(t)));for(var c=bv(r),f=bv(t),m=0;m<l.length;++m){var g=l[m];if(!(g in PT||i&&i[g]||f&&g in f||c&&g in c)){var y=GT(t,g);try{qT(r,g,y)}catch{}}}}return r}function es(r){return typeof r=="function"}function Zp(r){return typeof r=="object"&&"styledComponentId"in r}function Za(r,t){return r&&t?"".concat(r," ").concat(t):r||t||""}function gp(r,t){if(r.length===0)return"";for(var i=r[0],a=1;a<r.length;a++)i+=r[a];return i}function Wl(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function yp(r,t,i){if(i===void 0&&(i=!1),!i&&!Wl(r)&&!Array.isArray(r))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)r[a]=yp(r[a],t[a]);else if(Wl(t))for(var a in t)r[a]=yp(r[a],t[a]);return r}function Wp(r,t){Object.defineProperty(r,"toString",{value:t})}function ns(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var QT=function(){function r(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return r.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},r.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,l=a.length,c=l;t>=c;)if((c<<=1)<0)throw ns(16,"".concat(t));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var f=l;f<c;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(t+1),g=(f=0,i.length);f<g;f++)this.tag.insertRule(m,i[f])&&(this.groupSizes[t]++,m++)},r.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),l=a+i;this.groupSizes[t]=0;for(var c=a;c<l;c++)this.tag.deleteRule(a)}},r.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],l=this.indexOfGroup(t),c=l+a,f=l;f<c;f++)i+="".concat(this.tag.getRule(f)).concat(Xp);return i},r}(),Xc=new Map,oh=new Map,Zc=1,Bc=function(r){if(Xc.has(r))return Xc.get(r);for(;oh.has(Zc);)Zc++;var t=Zc++;return Xc.set(r,t),oh.set(t,r),t},YT=function(r,t){Zc=t+1,Xc.set(r,t),oh.set(t,r)},KT="style[".concat(yo,"][").concat(u_,'="').concat(kh,'"]'),XT=new RegExp("^".concat(yo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ZT=function(r,t,i){for(var a,l=i.split(","),c=0,f=l.length;c<f;c++)(a=l[c])&&r.registerName(t,a)},WT=function(r,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Xp),l=[],c=0,f=a.length;c<f;c++){var m=a[c].trim();if(m){var g=m.match(XT);if(g){var y=0|parseInt(g[1],10),_=g[2];y!==0&&(YT(_,y),ZT(r,_,g[3]),r.getTag().insertRules(y,l)),l.length=0}else l.push(m)}}},Ev=function(r){for(var t=document.querySelectorAll(KT),i=0,a=t.length;i<a;i++){var l=t[i];l&&l.getAttribute(yo)!==l_&&(WT(r,l),l.parentNode&&l.parentNode.removeChild(l))}};function JT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var b_=function(r){var t=document.head,i=r||t,a=document.createElement("style"),l=function(m){var g=Array.from(m.querySelectorAll("style[".concat(yo,"]")));return g[g.length-1]}(i),c=l!==void 0?l.nextSibling:null;a.setAttribute(yo,l_),a.setAttribute(u_,kh);var f=JT();return f&&a.setAttribute("nonce",f),i.insertBefore(a,c),a},tw=function(){function r(t){this.element=b_(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,l=0,c=a.length;l<c;l++){var f=a[l];if(f.ownerNode===i)return f}throw ns(17)}(this.element),this.length=0}return r.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},r}(),ew=function(){function r(t){this.element=b_(t),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},r}(),nw=function(){function r(t){this.rules=[],this.length=0}return r.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},r.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},r}(),Tv=sh,rw={isServer:!sh,useCSSOMInjection:!VT},lh=function(){function r(t,i,a){t===void 0&&(t=vo),i===void 0&&(i={});var l=this;this.options=We(We({},rw),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&sh&&Tv&&(Tv=!1,Ev(this)),Wp(this,function(){return function(c){for(var f=c.getTag(),m=f.length,g="",y=function(E){var x=function(rt){return oh.get(rt)}(E);if(x===void 0)return"continue";var j=c.names.get(x),q=f.getGroup(E);if(j===void 0||!j.size||q.length===0)return"continue";var K="".concat(yo,".g").concat(E,'[id="').concat(x,'"]'),G="";j!==void 0&&j.forEach(function(rt){rt.length>0&&(G+="".concat(rt,","))}),g+="".concat(q).concat(K,'{content:"').concat(G,'"}').concat(Xp)},_=0;_<m;_++)y(_);return g}(l)})}return r.registerId=function(t){return Bc(t)},r.prototype.rehydrate=function(){!this.server&&sh&&Ev(this)},r.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new r(We(We({},this.options),t),this.gs,i&&this.names||void 0)},r.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var a=i.useCSSOMInjection,l=i.target;return i.isServer?new nw(l):a?new tw(l):new ew(l)}(this.options),new QT(t)));var t},r.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},r.prototype.registerName=function(t,i){if(Bc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},r.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(Bc(t),a)},r.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.prototype.clearRules=function(t){this.getTag().clearGroup(Bc(t)),this.clearNames(t)},r.prototype.clearTag=function(){this.tag=void 0},r}(),iw=/&/g,aw=/^\s*\/\/.*$/gm;function __(r,t){return r.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=__(i.children,t)),i})}function sw(r){var t,i,a,l=vo,c=l.options,f=c===void 0?vo:c,m=l.plugins,g=m===void 0?Nh:m,y=function(x,j,q){return q.startsWith(i)&&q.endsWith(i)&&q.replaceAll(i,"").length>0?".".concat(t):x},_=g.slice();_.push(function(x){x.type===Rh&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(iw,i).replace(a,y))}),f.prefix&&_.push(kT),_.push(CT);var E=function(x,j,q,K){j===void 0&&(j=""),q===void 0&&(q=""),K===void 0&&(K="&"),t=K,i=j,a=new RegExp("\\".concat(i,"\\b"),"g");var G=x.replace(aw,""),rt=xT(q||j?"".concat(q," ").concat(j," { ").concat(G," }"):G);f.namespace&&(rt=__(rt,f.namespace));var J=[];return ah(rt,DT(_.concat(IT(function(Z){return J.push(Z)})))),J};return E.hash=g.length?g.reduce(function(x,j){return j.name||ns(15),ao(x,j.name)},f_).toString():"",E}var ow=new lh,vp=sw(),A_=F.createContext({shouldForwardProp:void 0,styleSheet:ow,stylis:vp});A_.Consumer;F.createContext(void 0);function bp(){return $.useContext(A_)}var lw=function(){function r(t,i){var a=this;this.inject=function(l,c){c===void 0&&(c=vp);var f=a.name+c.hash;l.hasNameForId(a.id,f)||l.insertRules(a.id,f,c(a.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Wp(this,function(){throw ns(12,String(a.name))})}return r.prototype.getName=function(t){return t===void 0&&(t=vp),this.name+t.hash},r}(),uw=function(r){return r>="A"&&r<="Z"};function wv(r){for(var t="",i=0;i<r.length;i++){var a=r[i];if(i===1&&a==="-"&&r[0]==="-")return r;uw(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var E_=function(r){return r==null||r===!1||r===""},T_=function(r){var t,i,a=[];for(var l in r){var c=r[l];r.hasOwnProperty(l)&&!E_(c)&&(Array.isArray(c)&&c.isCss||es(c)?a.push("".concat(wv(l),":"),c,";"):Wl(c)?a.push.apply(a,Zl(Zl(["".concat(l," {")],T_(c),!1),["}"],!1)):a.push("".concat(wv(l),": ").concat((t=l,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in NT||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Zi(r,t,i,a){if(E_(r))return[];if(Zp(r))return[".".concat(r.styledComponentId)];if(es(r)){if(!es(c=r)||c.prototype&&c.prototype.isReactComponent||!t)return[r];var l=r(t);return Zi(l,t,i,a)}var c;return r instanceof lw?i?(r.inject(i,a),[r.getName(a)]):[r]:Wl(r)?T_(r):Array.isArray(r)?Array.prototype.concat.apply(Nh,r.map(function(f){return Zi(f,t,i,a)})):[r.toString()]}function w_(r){for(var t=0;t<r.length;t+=1){var i=r[t];if(es(i)&&!Zp(i))return!1}return!0}var cw=d_(kh),hw=function(){function r(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&w_(t),this.componentId=i,this.baseHash=ao(cw,i),this.baseStyle=a,lh.registerId(i)}return r.prototype.generateAndInjectStyles=function(t,i,a){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))l=Za(l,this.staticRulesId);else{var c=gp(Zi(this.rules,t,i,a)),f=mp(ao(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var m=a(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,m)}l=Za(l,f),this.staticRulesId=f}else{for(var g=ao(this.baseHash,a.hash),y="",_=0;_<this.rules.length;_++){var E=this.rules[_];if(typeof E=="string")y+=E;else if(E){var x=gp(Zi(E,t,i,a));g=ao(g,x+_),y+=x}}if(y){var j=mp(g>>>0);i.hasNameForId(this.componentId,j)||i.insertRules(this.componentId,j,a(y,".".concat(j),void 0,this.componentId)),l=Za(l,j)}}return l},r}(),Jl=F.createContext(void 0);Jl.Consumer;function Sv(r){var t=F.useContext(Jl),i=$.useMemo(function(){return function(a,l){if(!a)throw ns(14);if(es(a)){var c=a(l);return c}if(Array.isArray(a)||typeof a!="object")throw ns(8);return l?We(We({},l),a):a}(r.theme,t)},[r.theme,t]);return r.children?F.createElement(Jl.Provider,{value:i},r.children):null}var tp={};function fw(r,t,i){var a=Zp(r),l=r,c=!Jd(r),f=t.attrs,m=f===void 0?Nh:f,g=t.componentId,y=g===void 0?function(ot,st){var lt=typeof ot!="string"?"sc":yv(ot);tp[lt]=(tp[lt]||0)+1;var S="".concat(lt,"-").concat(p_(kh+lt+tp[lt]));return st?"".concat(st,"-").concat(S):S}(t.displayName,t.parentComponentId):g,_=t.displayName,E=_===void 0?function(ot){return Jd(ot)?"styled.".concat(ot):"Styled(".concat(LT(ot),")")}(r):_,x=t.displayName&&t.componentId?"".concat(yv(t.displayName),"-").concat(t.componentId):t.componentId||y,j=a&&l.attrs?l.attrs.concat(m).filter(Boolean):m,q=t.shouldForwardProp;if(a&&l.shouldForwardProp){var K=l.shouldForwardProp;if(t.shouldForwardProp){var G=t.shouldForwardProp;q=function(ot,st){return K(ot,st)&&G(ot,st)}}else q=K}var rt=new hw(i,x,a?l.componentStyle:void 0);function J(ot,st){return function(lt,S,w){var R=lt.attrs,V=lt.componentStyle,N=lt.defaultProps,O=lt.foldedComponentIds,C=lt.styledComponentId,Bt=lt.target,Nt=F.useContext(Jl),Y=bp(),pt=lt.shouldForwardProp||Y.shouldForwardProp,dt=c_(S,Nt,N)||vo,Et=function(bt,mt,St){for(var It,ut=We(We({},mt),{className:void 0,theme:St}),kt=0;kt<bt.length;kt+=1){var Mt=es(It=bt[kt])?It(ut):It;for(var Ut in Mt)ut[Ut]=Ut==="className"?Za(ut[Ut],Mt[Ut]):Ut==="style"?We(We({},ut[Ut]),Mt[Ut]):Mt[Ut]}return mt.className&&(ut.className=Za(ut.className,mt.className)),ut}(R,S,dt),k=Et.as||Bt,W={};for(var ft in Et)Et[ft]===void 0||ft[0]==="$"||ft==="as"||ft==="theme"&&Et.theme===dt||(ft==="forwardedAs"?W.as=Et.forwardedAs:pt&&!pt(ft,k)||(W[ft]=Et[ft]));var tt=function(bt,mt){var St=bp(),It=bt.generateAndInjectStyles(mt,St.styleSheet,St.stylis);return It}(V,Et),ht=Za(O,C);return tt&&(ht+=" "+tt),Et.className&&(ht+=" "+Et.className),W[Jd(k)&&!h_.has(k)?"class":"className"]=ht,w&&(W.ref=w),$.createElement(k,W)}(Z,ot,st)}J.displayName=E;var Z=F.forwardRef(J);return Z.attrs=j,Z.componentStyle=rt,Z.displayName=E,Z.shouldForwardProp=q,Z.foldedComponentIds=a?Za(l.foldedComponentIds,l.styledComponentId):"",Z.styledComponentId=x,Z.target=a?l.target:r,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ot){this._foldedDefaultProps=a?function(st){for(var lt=[],S=1;S<arguments.length;S++)lt[S-1]=arguments[S];for(var w=0,R=lt;w<R.length;w++)yp(st,R[w],!0);return st}({},l.defaultProps,ot):ot}}),Wp(Z,function(){return".".concat(Z.styledComponentId)}),c&&v_(Z,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function xv(r,t){for(var i=[r[0]],a=0,l=t.length;a<l;a+=1)i.push(t[a],r[a+1]);return i}var Rv=function(r){return Object.assign(r,{isCss:!0})};function vt(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(es(r)||Wl(r))return Rv(Zi(xv(Nh,Zl([r],t,!0))));var a=r;return t.length===0&&a.length===1&&typeof a[0]=="string"?Zi(a):Rv(Zi(xv(a,t)))}function _p(r,t,i){if(i===void 0&&(i=vo),!t)throw ns(1,t);var a=function(l){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return r(t,i,vt.apply(void 0,Zl([l],c,!1)))};return a.attrs=function(l){return _p(r,t,We(We({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},a.withConfig=function(l){return _p(r,t,We(We({},i),l))},a}var S_=function(r){return _p(fw,r)},ct=S_;h_.forEach(function(r){ct[r]=S_(r)});var dw=function(){function r(t,i){this.rules=t,this.componentId=i,this.isStatic=w_(t),lh.registerId(this.componentId+1)}return r.prototype.createStyles=function(t,i,a,l){var c=l(gp(Zi(this.rules,i,a,l)),""),f=this.componentId+t;a.insertRules(f,f,c)},r.prototype.removeStyles=function(t,i){i.clearRules(this.componentId+t)},r.prototype.renderStyles=function(t,i,a,l){t>2&&lh.registerId(this.componentId+t),this.removeStyles(t,a),this.createStyles(t,i,a,l)},r}();function pw(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=vt.apply(void 0,Zl([r],t,!1)),l="sc-global-".concat(p_(JSON.stringify(a))),c=new dw(a,l),f=function(g){var y=bp(),_=F.useContext(Jl),E=F.useRef(y.styleSheet.allocateGSInstance(l)).current;return y.styleSheet.server&&m(E,g,y.styleSheet,_,y.stylis),F.useLayoutEffect(function(){if(!y.styleSheet.server)return m(E,g,y.styleSheet,_,y.stylis),function(){return c.removeStyles(E,y.styleSheet)}},[E,g,y.styleSheet,_,y.stylis]),null};function m(g,y,_,E,x){if(c.isStatic)c.renderStyles(g,MT,_,x);else{var j=We(We({},y),{theme:c_(y,E,f.defaultProps)});c.renderStyles(g,j,_,x)}}return F.memo(f)}const mw="/95-Portfolio/assets/stars-C6O0RJ9m.png";function gw({enabled:r}){const[t,i]=$.useState([]);return $.useEffect(()=>{let a;return r&&(a=setInterval(()=>{const l={id:Date.now()+Math.random(),left:Math.random()*window.innerWidth,size:Math.random()*3+5,speed:Math.random()*3+1};i(c=>[...c,l])},200)),r||i([]),()=>clearInterval(a)},[r]),$.useEffect(()=>{if(!r)return;const a=setInterval(()=>{i(l=>l.map(c=>({...c,top:(c.top||0)+c.speed})).filter(c=>(c.top||0)<window.innerHeight))},50);return()=>clearInterval(a)},[r]),D.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",width:"100%",height:"100%"},children:t.map(a=>D.jsx("img",{src:mw,style:{position:"absolute",top:a.top||0,left:a.left,width:a.size,height:a.size,pointerEvents:"none"}},a.id))})}const yw=()=>{};var Cv={};/**
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
 */const x_=function(r){const t=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},vw=function(r){const t=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[a++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],f=r[i++],m=r[i++],g=((l&7)<<18|(c&63)<<12|(f&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(g>>10)),t[a++]=String.fromCharCode(56320+(g&1023))}else{const c=r[i++],f=r[i++];t[a++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},R_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,m=f?r[l+1]:0,g=l+2<r.length,y=g?r[l+2]:0,_=c>>2,E=(c&3)<<4|m>>4;let x=(m&15)<<2|y>>6,j=y&63;g||(j=64,f||(x=64)),a.push(i[_],i[E],i[x],i[j])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(x_(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):vw(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const E=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||m==null||y==null||E==null)throw new bw;const x=c<<2|m>>4;if(a.push(x),y!==64){const j=m<<4&240|y>>2;if(a.push(j),E!==64){const q=y<<6&192|E;a.push(q)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(r){const t=x_(r);return R_.encodeByteArray(t,!0)},uh=function(r){return _w(r).replace(/\./g,"")},Aw=function(r){try{return R_.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>Ew().__FIREBASE_DEFAULTS__,ww=()=>{if(typeof process>"u"||typeof Cv>"u")return;const r=Cv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Sw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Aw(r[1]);return t&&JSON.parse(t)},Jp=()=>{try{return yw()||Tw()||ww()||Sw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xw=r=>{var t,i;return(i=(t=Jp())==null?void 0:t.emulatorHosts)==null?void 0:i[r]},Rw=r=>{const t=xw(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},C_=()=>{var r;return(r=Jp())==null?void 0:r.config};/**
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
 */class Cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function tm(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dw(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Iw(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uh(JSON.stringify(i)),uh(JSON.stringify(f)),""].join(".")}const Fl={};function kw(){const r={prod:[],emulator:[]};for(const t of Object.keys(Fl))Fl[t]?r.emulator.push(t):r.prod.push(t);return r}function Nw(r){let t=document.getElementById(r),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),i=!0),{created:i,element:t}}let Dv=!1;function Vw(r,t){if(typeof window>"u"||typeof document>"u"||!tm(window.location.host)||Fl[r]===t||Fl[r]||Dv)return;Fl[r]=t;function i(x){return`__firebase__banner__${x}`}const a="__firebase__banner",c=kw().prod.length>0;function f(){const x=document.getElementById(a);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function g(x,j){x.setAttribute("width","24"),x.setAttribute("id",j),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function y(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Dv=!0,f()},x}function _(x,j){x.setAttribute("id",j),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function E(){const x=Nw(a),j=i("text"),q=document.getElementById(j)||document.createElement("span"),K=i("learnmore"),G=document.getElementById(K)||document.createElement("a"),rt=i("preprendIcon"),J=document.getElementById(rt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const Z=x.element;m(Z),_(G,K);const ot=y();g(J,rt),Z.append(J,q,G,ot),document.body.appendChild(Z)}c?(q.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Mw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ow(){var t;const r=(t=Jp())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jw(){return!Ow()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bw(){try{return typeof indexedDB=="object"}catch{return!1}}function Lw(){return new Promise((r,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;t(((c=l.error)==null?void 0:c.message)||"")}}catch(i){t(i)}})}/**
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
 */const zw="FirebaseError";class Co extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=zw,Object.setPrototypeOf(this,Co.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D_.prototype.create)}}class D_{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?Uw(c,a):"Error",m=`${this.serviceName}: ${f} (${l}).`;return new Co(l,m,a)}}function Uw(r,t){return r.replace(Pw,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const Pw=/\{\$([^}]+)}/g;function ch(r,t){if(r===t)return!0;const i=Object.keys(r),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const c=r[l],f=t[l];if(Iv(c)&&Iv(f)){if(!ch(c,f))return!1}else if(c!==f)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function Iv(r){return r!==null&&typeof r=="object"}/**
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
 */function bo(r){return r&&r._delegate?r._delegate:r}class tu{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xa="[DEFAULT]";/**
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
 */class $w{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new Cw;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(t==null?void 0:t.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hw(t))try{this.getOrInitializeService({instanceIdentifier:Xa})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch{}}}}clearInstance(t=Xa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xa){return this.instances.has(t)}getOptions(t=Xa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);a===m&&f.resolve(l)}return l}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(t),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&t(c,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:qw(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Xa){return this.component?this.component.multipleInstances?t:Xa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qw(r){return r===Xa?void 0:r}function Hw(r){return r.instantiationMode==="EAGER"}/**
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
 */class Gw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new $w(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Kt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Kt||(Kt={}));const Fw={debug:Kt.DEBUG,verbose:Kt.VERBOSE,info:Kt.INFO,warn:Kt.WARN,error:Kt.ERROR,silent:Kt.SILENT},Qw=Kt.INFO,Yw={[Kt.DEBUG]:"log",[Kt.VERBOSE]:"log",[Kt.INFO]:"info",[Kt.WARN]:"warn",[Kt.ERROR]:"error"},Kw=(r,t,...i)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=Yw[t];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class I_{constructor(t){this.name=t,this._logLevel=Qw,this._logHandler=Kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Kt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Kt.DEBUG,...t),this._logHandler(this,Kt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Kt.VERBOSE,...t),this._logHandler(this,Kt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Kt.INFO,...t),this._logHandler(this,Kt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Kt.WARN,...t),this._logHandler(this,Kt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Kt.ERROR,...t),this._logHandler(this,Kt.ERROR,...t)}}const Xw=(r,t)=>t.some(i=>r instanceof i);let kv,Nv;function Zw(){return kv||(kv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ww(){return Nv||(Nv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,Ap=new WeakMap,N_=new WeakMap,ep=new WeakMap,em=new WeakMap;function Jw(r){const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{i(Wi(r.result)),l()},f=()=>{a(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&k_.set(i,r)}).catch(()=>{}),em.set(t,r),t}function tS(r){if(Ap.has(r))return;const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Ap.set(r,t)}let Ep={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return Ap.get(r);if(t==="objectStoreNames")return r.objectStoreNames||N_.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Wi(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function eS(r){Ep=r(Ep)}function nS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=r.call(np(this),t,...i);return N_.set(a,t.sort?t.sort():[t]),Wi(a)}:Ww().includes(r)?function(...t){return r.apply(np(this),t),Wi(k_.get(this))}:function(...t){return Wi(r.apply(np(this),t))}}function rS(r){return typeof r=="function"?nS(r):(r instanceof IDBTransaction&&tS(r),Xw(r,Zw())?new Proxy(r,Ep):r)}function Wi(r){if(r instanceof IDBRequest)return Jw(r);if(ep.has(r))return ep.get(r);const t=rS(r);return t!==r&&(ep.set(r,t),em.set(t,r)),t}const np=r=>em.get(r);function iS(r,t,{blocked:i,upgrade:a,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),m=Wi(f);return a&&f.addEventListener("upgradeneeded",g=>{a(Wi(f.result),g.oldVersion,g.newVersion,Wi(f.transaction),g)}),i&&f.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),m.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const aS=["get","getKey","getAll","getAllKeys","count"],sS=["put","add","delete","clear"],rp=new Map;function Vv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(rp.get(t))return rp.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=sS.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||aS.includes(i)))return;const c=async function(f,...m){const g=this.transaction(f,l?"readwrite":"readonly");let y=g.store;return a&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),l&&g.done]))[0]};return rp.set(t,c),c}eS(r=>({...r,get:(t,i,a)=>Vv(t,i)||r.get(t,i,a),has:(t,i)=>!!Vv(t,i)||r.has(t,i)}));/**
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
 */class oS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(lS(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function lS(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Tp="@firebase/app",Mv="0.14.3";/**
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
 */const li=new I_("@firebase/app"),uS="@firebase/app-compat",cS="@firebase/analytics-compat",hS="@firebase/analytics",fS="@firebase/app-check-compat",dS="@firebase/app-check",pS="@firebase/auth",mS="@firebase/auth-compat",gS="@firebase/database",yS="@firebase/data-connect",vS="@firebase/database-compat",bS="@firebase/functions",_S="@firebase/functions-compat",AS="@firebase/installations",ES="@firebase/installations-compat",TS="@firebase/messaging",wS="@firebase/messaging-compat",SS="@firebase/performance",xS="@firebase/performance-compat",RS="@firebase/remote-config",CS="@firebase/remote-config-compat",DS="@firebase/storage",IS="@firebase/storage-compat",kS="@firebase/firestore",NS="@firebase/ai",VS="@firebase/firestore-compat",MS="firebase",OS="12.3.0";/**
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
 */const wp="[DEFAULT]",jS={[Tp]:"fire-core",[uS]:"fire-core-compat",[hS]:"fire-analytics",[cS]:"fire-analytics-compat",[dS]:"fire-app-check",[fS]:"fire-app-check-compat",[pS]:"fire-auth",[mS]:"fire-auth-compat",[gS]:"fire-rtdb",[yS]:"fire-data-connect",[vS]:"fire-rtdb-compat",[bS]:"fire-fn",[_S]:"fire-fn-compat",[AS]:"fire-iid",[ES]:"fire-iid-compat",[TS]:"fire-fcm",[wS]:"fire-fcm-compat",[SS]:"fire-perf",[xS]:"fire-perf-compat",[RS]:"fire-rc",[CS]:"fire-rc-compat",[DS]:"fire-gcs",[IS]:"fire-gcs-compat",[kS]:"fire-fst",[VS]:"fire-fst-compat",[NS]:"fire-vertex","fire-js":"fire-js",[MS]:"fire-js-all"};/**
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
 */const hh=new Map,BS=new Map,Sp=new Map;function Ov(r,t){try{r.container.addComponent(t)}catch(i){li.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function fh(r){const t=r.name;if(Sp.has(t))return li.debug(`There were multiple attempts to register component ${t}.`),!1;Sp.set(t,r);for(const i of hh.values())Ov(i,r);for(const i of BS.values())Ov(i,r);return!0}function LS(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function zS(r){return r==null?!1:r.settings!==void 0}/**
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
 */const US={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ji=new D_("app","Firebase",US);/**
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
 */class PS{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new tu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ji.create("app-deleted",{appName:this._name})}}/**
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
 */const $S=OS;function V_(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const a={name:wp,automaticDataCollectionEnabled:!0,...t},l=a.name;if(typeof l!="string"||!l)throw Ji.create("bad-app-name",{appName:String(l)});if(i||(i=C_()),!i)throw Ji.create("no-options");const c=hh.get(l);if(c){if(ch(i,c.options)&&ch(a,c.config))return c;throw Ji.create("duplicate-app",{appName:l})}const f=new Gw(l);for(const g of Sp.values())f.addComponent(g);const m=new PS(i,a,f);return hh.set(l,m),m}function qS(r=wp){const t=hh.get(r);if(!t&&r===wp&&C_())return V_();if(!t)throw Ji.create("no-app",{appName:r});return t}function uo(r,t,i){let a=jS[r]??r;i&&(a+=`-${i}`);const l=a.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${t}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),li.warn(f.join(" "));return}fh(new tu(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const HS="firebase-heartbeat-database",GS=1,eu="firebase-heartbeat-store";let ip=null;function M_(){return ip||(ip=iS(HS,GS,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(eu)}catch(i){console.warn(i)}}}}).catch(r=>{throw Ji.create("idb-open",{originalErrorMessage:r.message})})),ip}async function FS(r){try{const i=(await M_()).transaction(eu),a=await i.objectStore(eu).get(O_(r));return await i.done,a}catch(t){if(t instanceof Co)li.warn(t.message);else{const i=Ji.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});li.warn(i.message)}}}async function jv(r,t){try{const a=(await M_()).transaction(eu,"readwrite");await a.objectStore(eu).put(t,O_(r)),await a.done}catch(i){if(i instanceof Co)li.warn(i.message);else{const a=Ji.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});li.warn(a.message)}}}function O_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const QS=1024,YS=30;class KS{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new ZS(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Bv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>YS){const f=WS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){li.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Bv(),{heartbeatsToSend:a,unsentEntries:l}=XS(this._heartbeatsCache.heartbeats),c=uh(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return li.warn(i),""}}}function Bv(){return new Date().toISOString().substring(0,10)}function XS(r,t=QS){const i=[];let a=r.slice();for(const l of r){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),Lv(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Lv(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class ZS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bw()?Lw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await FS(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return jv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return jv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Lv(r){return uh(JSON.stringify({version:2,heartbeats:r})).length}function WS(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,t=a);return t}/**
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
 */function JS(r){fh(new tu("platform-logger",t=>new oS(t),"PRIVATE")),fh(new tu("heartbeat",t=>new KS(t),"PRIVATE")),uo(Tp,Mv,r),uo(Tp,Mv,"esm2020"),uo("fire-js","")}JS("");var zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,j_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,w){function R(){}R.prototype=w.prototype,S.F=w.prototype,S.prototype=new R,S.prototype.constructor=S,S.D=function(V,N,O){for(var C=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)C[Bt-2]=arguments[Bt];return w.prototype[N].apply(V,C)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(S,w,R){R||(R=0);const V=Array(16);if(typeof w=="string")for(var N=0;N<16;++N)V[N]=w.charCodeAt(R++)|w.charCodeAt(R++)<<8|w.charCodeAt(R++)<<16|w.charCodeAt(R++)<<24;else for(N=0;N<16;++N)V[N]=w[R++]|w[R++]<<8|w[R++]<<16|w[R++]<<24;w=S.g[0],R=S.g[1],N=S.g[2];let O=S.g[3],C;C=w+(O^R&(N^O))+V[0]+3614090360&4294967295,w=R+(C<<7&4294967295|C>>>25),C=O+(N^w&(R^N))+V[1]+3905402710&4294967295,O=w+(C<<12&4294967295|C>>>20),C=N+(R^O&(w^R))+V[2]+606105819&4294967295,N=O+(C<<17&4294967295|C>>>15),C=R+(w^N&(O^w))+V[3]+3250441966&4294967295,R=N+(C<<22&4294967295|C>>>10),C=w+(O^R&(N^O))+V[4]+4118548399&4294967295,w=R+(C<<7&4294967295|C>>>25),C=O+(N^w&(R^N))+V[5]+1200080426&4294967295,O=w+(C<<12&4294967295|C>>>20),C=N+(R^O&(w^R))+V[6]+2821735955&4294967295,N=O+(C<<17&4294967295|C>>>15),C=R+(w^N&(O^w))+V[7]+4249261313&4294967295,R=N+(C<<22&4294967295|C>>>10),C=w+(O^R&(N^O))+V[8]+1770035416&4294967295,w=R+(C<<7&4294967295|C>>>25),C=O+(N^w&(R^N))+V[9]+2336552879&4294967295,O=w+(C<<12&4294967295|C>>>20),C=N+(R^O&(w^R))+V[10]+4294925233&4294967295,N=O+(C<<17&4294967295|C>>>15),C=R+(w^N&(O^w))+V[11]+2304563134&4294967295,R=N+(C<<22&4294967295|C>>>10),C=w+(O^R&(N^O))+V[12]+1804603682&4294967295,w=R+(C<<7&4294967295|C>>>25),C=O+(N^w&(R^N))+V[13]+4254626195&4294967295,O=w+(C<<12&4294967295|C>>>20),C=N+(R^O&(w^R))+V[14]+2792965006&4294967295,N=O+(C<<17&4294967295|C>>>15),C=R+(w^N&(O^w))+V[15]+1236535329&4294967295,R=N+(C<<22&4294967295|C>>>10),C=w+(N^O&(R^N))+V[1]+4129170786&4294967295,w=R+(C<<5&4294967295|C>>>27),C=O+(R^N&(w^R))+V[6]+3225465664&4294967295,O=w+(C<<9&4294967295|C>>>23),C=N+(w^R&(O^w))+V[11]+643717713&4294967295,N=O+(C<<14&4294967295|C>>>18),C=R+(O^w&(N^O))+V[0]+3921069994&4294967295,R=N+(C<<20&4294967295|C>>>12),C=w+(N^O&(R^N))+V[5]+3593408605&4294967295,w=R+(C<<5&4294967295|C>>>27),C=O+(R^N&(w^R))+V[10]+38016083&4294967295,O=w+(C<<9&4294967295|C>>>23),C=N+(w^R&(O^w))+V[15]+3634488961&4294967295,N=O+(C<<14&4294967295|C>>>18),C=R+(O^w&(N^O))+V[4]+3889429448&4294967295,R=N+(C<<20&4294967295|C>>>12),C=w+(N^O&(R^N))+V[9]+568446438&4294967295,w=R+(C<<5&4294967295|C>>>27),C=O+(R^N&(w^R))+V[14]+3275163606&4294967295,O=w+(C<<9&4294967295|C>>>23),C=N+(w^R&(O^w))+V[3]+4107603335&4294967295,N=O+(C<<14&4294967295|C>>>18),C=R+(O^w&(N^O))+V[8]+1163531501&4294967295,R=N+(C<<20&4294967295|C>>>12),C=w+(N^O&(R^N))+V[13]+2850285829&4294967295,w=R+(C<<5&4294967295|C>>>27),C=O+(R^N&(w^R))+V[2]+4243563512&4294967295,O=w+(C<<9&4294967295|C>>>23),C=N+(w^R&(O^w))+V[7]+1735328473&4294967295,N=O+(C<<14&4294967295|C>>>18),C=R+(O^w&(N^O))+V[12]+2368359562&4294967295,R=N+(C<<20&4294967295|C>>>12),C=w+(R^N^O)+V[5]+4294588738&4294967295,w=R+(C<<4&4294967295|C>>>28),C=O+(w^R^N)+V[8]+2272392833&4294967295,O=w+(C<<11&4294967295|C>>>21),C=N+(O^w^R)+V[11]+1839030562&4294967295,N=O+(C<<16&4294967295|C>>>16),C=R+(N^O^w)+V[14]+4259657740&4294967295,R=N+(C<<23&4294967295|C>>>9),C=w+(R^N^O)+V[1]+2763975236&4294967295,w=R+(C<<4&4294967295|C>>>28),C=O+(w^R^N)+V[4]+1272893353&4294967295,O=w+(C<<11&4294967295|C>>>21),C=N+(O^w^R)+V[7]+4139469664&4294967295,N=O+(C<<16&4294967295|C>>>16),C=R+(N^O^w)+V[10]+3200236656&4294967295,R=N+(C<<23&4294967295|C>>>9),C=w+(R^N^O)+V[13]+681279174&4294967295,w=R+(C<<4&4294967295|C>>>28),C=O+(w^R^N)+V[0]+3936430074&4294967295,O=w+(C<<11&4294967295|C>>>21),C=N+(O^w^R)+V[3]+3572445317&4294967295,N=O+(C<<16&4294967295|C>>>16),C=R+(N^O^w)+V[6]+76029189&4294967295,R=N+(C<<23&4294967295|C>>>9),C=w+(R^N^O)+V[9]+3654602809&4294967295,w=R+(C<<4&4294967295|C>>>28),C=O+(w^R^N)+V[12]+3873151461&4294967295,O=w+(C<<11&4294967295|C>>>21),C=N+(O^w^R)+V[15]+530742520&4294967295,N=O+(C<<16&4294967295|C>>>16),C=R+(N^O^w)+V[2]+3299628645&4294967295,R=N+(C<<23&4294967295|C>>>9),C=w+(N^(R|~O))+V[0]+4096336452&4294967295,w=R+(C<<6&4294967295|C>>>26),C=O+(R^(w|~N))+V[7]+1126891415&4294967295,O=w+(C<<10&4294967295|C>>>22),C=N+(w^(O|~R))+V[14]+2878612391&4294967295,N=O+(C<<15&4294967295|C>>>17),C=R+(O^(N|~w))+V[5]+4237533241&4294967295,R=N+(C<<21&4294967295|C>>>11),C=w+(N^(R|~O))+V[12]+1700485571&4294967295,w=R+(C<<6&4294967295|C>>>26),C=O+(R^(w|~N))+V[3]+2399980690&4294967295,O=w+(C<<10&4294967295|C>>>22),C=N+(w^(O|~R))+V[10]+4293915773&4294967295,N=O+(C<<15&4294967295|C>>>17),C=R+(O^(N|~w))+V[1]+2240044497&4294967295,R=N+(C<<21&4294967295|C>>>11),C=w+(N^(R|~O))+V[8]+1873313359&4294967295,w=R+(C<<6&4294967295|C>>>26),C=O+(R^(w|~N))+V[15]+4264355552&4294967295,O=w+(C<<10&4294967295|C>>>22),C=N+(w^(O|~R))+V[6]+2734768916&4294967295,N=O+(C<<15&4294967295|C>>>17),C=R+(O^(N|~w))+V[13]+1309151649&4294967295,R=N+(C<<21&4294967295|C>>>11),C=w+(N^(R|~O))+V[4]+4149444226&4294967295,w=R+(C<<6&4294967295|C>>>26),C=O+(R^(w|~N))+V[11]+3174756917&4294967295,O=w+(C<<10&4294967295|C>>>22),C=N+(w^(O|~R))+V[2]+718787259&4294967295,N=O+(C<<15&4294967295|C>>>17),C=R+(O^(N|~w))+V[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(N+(C<<21&4294967295|C>>>11))&4294967295,S.g[2]=S.g[2]+N&4294967295,S.g[3]=S.g[3]+O&4294967295}a.prototype.v=function(S,w){w===void 0&&(w=S.length);const R=w-this.blockSize,V=this.C;let N=this.h,O=0;for(;O<w;){if(N==0)for(;O<=R;)l(this,S,O),O+=this.blockSize;if(typeof S=="string"){for(;O<w;)if(V[N++]=S.charCodeAt(O++),N==this.blockSize){l(this,V),N=0;break}}else for(;O<w;)if(V[N++]=S[O++],N==this.blockSize){l(this,V),N=0;break}}this.h=N,this.o+=w},a.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var R=S.length-8;R<S.length;++R)S[R]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,R=0;R<4;++R)for(let V=0;V<32;V+=8)S[w++]=this.g[R]>>>V&255;return S};function c(S,w){var R=m;return Object.prototype.hasOwnProperty.call(R,S)?R[S]:R[S]=w(S)}function f(S,w){this.h=w;const R=[];let V=!0;for(let N=S.length-1;N>=0;N--){const O=S[N]|0;V&&O==w||(R[N]=O,V=!1)}this.g=R}var m={};function g(S){return-128<=S&&S<128?c(S,function(w){return new f([w|0],w<0?-1:0)}):new f([S|0],S<0?-1:0)}function y(S){if(isNaN(S)||!isFinite(S))return E;if(S<0)return G(y(-S));const w=[];let R=1;for(let V=0;S>=R;V++)w[V]=S/R|0,R*=4294967296;return new f(w,0)}function _(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return G(_(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=y(Math.pow(w,8));let V=E;for(let O=0;O<S.length;O+=8){var N=Math.min(8,S.length-O);const C=parseInt(S.substring(O,O+N),w);N<8?(N=y(Math.pow(w,N)),V=V.j(N).add(y(C))):(V=V.j(R),V=V.add(y(C)))}return V}var E=g(0),x=g(1),j=g(16777216);r=f.prototype,r.m=function(){if(K(this))return-G(this).m();let S=0,w=1;for(let R=0;R<this.g.length;R++){const V=this.i(R);S+=(V>=0?V:4294967296+V)*w,w*=4294967296}return S},r.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(q(this))return"0";if(K(this))return"-"+G(this).toString(S);const w=y(Math.pow(S,6));var R=this;let V="";for(;;){const N=ot(R,w).g;R=rt(R,N.j(w));let O=((R.g.length>0?R.g[0]:R.h)>>>0).toString(S);if(R=N,q(R))return O+V;for(;O.length<6;)O="0"+O;V=O+V}},r.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function q(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function K(S){return S.h==-1}r.l=function(S){return S=rt(this,S),K(S)?-1:q(S)?0:1};function G(S){const w=S.g.length,R=[];for(let V=0;V<w;V++)R[V]=~S.g[V];return new f(R,~S.h).add(x)}r.abs=function(){return K(this)?G(this):this},r.add=function(S){const w=Math.max(this.g.length,S.g.length),R=[];let V=0;for(let N=0;N<=w;N++){let O=V+(this.i(N)&65535)+(S.i(N)&65535),C=(O>>>16)+(this.i(N)>>>16)+(S.i(N)>>>16);V=C>>>16,O&=65535,C&=65535,R[N]=C<<16|O}return new f(R,R[R.length-1]&-2147483648?-1:0)};function rt(S,w){return S.add(G(w))}r.j=function(S){if(q(this)||q(S))return E;if(K(this))return K(S)?G(this).j(G(S)):G(G(this).j(S));if(K(S))return G(this.j(G(S)));if(this.l(j)<0&&S.l(j)<0)return y(this.m()*S.m());const w=this.g.length+S.g.length,R=[];for(var V=0;V<2*w;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<S.g.length;N++){const O=this.i(V)>>>16,C=this.i(V)&65535,Bt=S.i(N)>>>16,Nt=S.i(N)&65535;R[2*V+2*N]+=C*Nt,J(R,2*V+2*N),R[2*V+2*N+1]+=O*Nt,J(R,2*V+2*N+1),R[2*V+2*N+1]+=C*Bt,J(R,2*V+2*N+1),R[2*V+2*N+2]+=O*Bt,J(R,2*V+2*N+2)}for(S=0;S<w;S++)R[S]=R[2*S+1]<<16|R[2*S];for(S=w;S<2*w;S++)R[S]=0;return new f(R,0)};function J(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function Z(S,w){this.g=S,this.h=w}function ot(S,w){if(q(w))throw Error("division by zero");if(q(S))return new Z(E,E);if(K(S))return w=ot(G(S),w),new Z(G(w.g),G(w.h));if(K(w))return w=ot(S,G(w)),new Z(G(w.g),w.h);if(S.g.length>30){if(K(S)||K(w))throw Error("slowDivide_ only works with positive integers.");for(var R=x,V=w;V.l(S)<=0;)R=st(R),V=st(V);var N=lt(R,1),O=lt(V,1);for(V=lt(V,2),R=lt(R,2);!q(V);){var C=O.add(V);C.l(S)<=0&&(N=N.add(R),O=C),V=lt(V,1),R=lt(R,1)}return w=rt(S,N.j(w)),new Z(N,w)}for(N=E;S.l(w)>=0;){for(R=Math.max(1,Math.floor(S.m()/w.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),O=y(R),C=O.j(w);K(C)||C.l(S)>0;)R-=V,O=y(R),C=O.j(w);q(O)&&(O=x),N=N.add(O),S=rt(S,C)}return new Z(N,S)}r.B=function(S){return ot(this,S).h},r.and=function(S){const w=Math.max(this.g.length,S.g.length),R=[];for(let V=0;V<w;V++)R[V]=this.i(V)&S.i(V);return new f(R,this.h&S.h)},r.or=function(S){const w=Math.max(this.g.length,S.g.length),R=[];for(let V=0;V<w;V++)R[V]=this.i(V)|S.i(V);return new f(R,this.h|S.h)},r.xor=function(S){const w=Math.max(this.g.length,S.g.length),R=[];for(let V=0;V<w;V++)R[V]=this.i(V)^S.i(V);return new f(R,this.h^S.h)};function st(S){const w=S.g.length+1,R=[];for(let V=0;V<w;V++)R[V]=S.i(V)<<1|S.i(V-1)>>>31;return new f(R,S.h)}function lt(S,w){const R=w>>5;w%=32;const V=S.g.length-R,N=[];for(let O=0;O<V;O++)N[O]=w>0?S.i(O+R)>>>w|S.i(O+R+1)<<32-w:S.i(O+R);return new f(N,S.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,j_=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=_,ta=f}).apply(typeof zv<"u"?zv:typeof self<"u"?self:typeof window<"u"?window:{});var Lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B_,Ul,L_,Wc,xp,z_,U_,P_;(function(){var r,t=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lc=="object"&&Lc];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=i(this);function l(u,p){if(p)t:{var v=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var z=u[T];if(!(z in v))break t;v=v[z]}u=u[u.length-1],T=v[u],p=p(T),p!=T&&p!=null&&t(v,u,{configurable:!0,writable:!0,value:p})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(p){var v=[],T;for(T in p)Object.prototype.hasOwnProperty.call(p,T)&&v.push([T,p[T]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,v){return u.call.apply(u.bind,arguments)}function y(u,p,v){return y=g,y.apply(null,arguments)}function _(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function E(u,p){function v(){}v.prototype=p.prototype,u.Z=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(T,z,Q){for(var gt=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)gt[Ot-2]=arguments[Ot];return p.prototype[z].apply(T,gt)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function j(u){const p=u.length;if(p>0){const v=Array(p);for(let T=0;T<p;T++)v[T]=u[T];return v}return[]}function q(u,p){for(let T=1;T<arguments.length;T++){const z=arguments[T];var v=typeof z;if(v=v!="object"?v:z?Array.isArray(z)?"array":v:"null",v=="array"||v=="object"&&typeof z.length=="number"){v=u.length||0;const Q=z.length||0;u.length=v+Q;for(let gt=0;gt<Q;gt++)u[v+gt]=z[gt]}else u.push(z)}}class K{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(u){f.setTimeout(()=>{throw u},0)}function rt(){var u=S;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class J{constructor(){this.h=this.g=null}add(p,v){const T=Z.get();T.set(p,v),this.h?this.h.next=T:this.g=T,this.h=T}}var Z=new K(()=>new ot,u=>u.reset());class ot{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let st,lt=!1,S=new J,w=()=>{const u=Promise.resolve(void 0);st=()=>{u.then(R)}};function R(){for(var u;u=rt();){try{u.h.call(u.g)}catch(v){G(v)}var p=Z;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}lt=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,p),f.removeEventListener("test",v,p)}catch{}return u}();function C(u){return/^[\s\xa0]*$/.test(u)}function Bt(u,p){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}E(Bt,N),Bt.prototype.init=function(u,p){const v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Bt.Z.h.call(this)},Bt.prototype.h=function(){Bt.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Nt="closure_listenable_"+(Math.random()*1e6|0),Y=0;function pt(u,p,v,T,z){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!T,this.ha=z,this.key=++Y,this.da=this.fa=!1}function dt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Et(u,p,v){for(const T in u)p.call(v,u[T],T,u)}function k(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function W(u){const p={};for(const v in u)p[v]=u[v];return p}const ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tt(u,p){let v,T;for(let z=1;z<arguments.length;z++){T=arguments[z];for(v in T)u[v]=T[v];for(let Q=0;Q<ft.length;Q++)v=ft[Q],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function ht(u){this.src=u,this.g={},this.h=0}ht.prototype.add=function(u,p,v,T,z){const Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);const gt=mt(u,p,T,z);return gt>-1?(p=u[gt],v||(p.fa=!1)):(p=new pt(p,this.src,Q,!!T,z),p.fa=v,u.push(p)),p};function bt(u,p){const v=p.type;if(v in u.g){var T=u.g[v],z=Array.prototype.indexOf.call(T,p,void 0),Q;(Q=z>=0)&&Array.prototype.splice.call(T,z,1),Q&&(dt(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function mt(u,p,v,T){for(let z=0;z<u.length;++z){const Q=u[z];if(!Q.da&&Q.listener==p&&Q.capture==!!v&&Q.ha==T)return z}return-1}var St="closure_lm_"+(Math.random()*1e6|0),It={};function ut(u,p,v,T,z){if(Array.isArray(p)){for(let Q=0;Q<p.length;Q++)ut(u,p[Q],v,T,z);return null}return v=On(v),u&&u[Nt]?u.J(p,v,m(T)?!!T.capture:!1,z):kt(u,p,v,!1,T,z)}function kt(u,p,v,T,z,Q){if(!p)throw Error("Invalid event type");const gt=m(z)?!!z.capture:!!z;let Ot=Ge(u);if(Ot||(u[St]=Ot=new ht(u)),v=Ot.add(p,v,T,gt,Q),v.proxy)return v;if(T=Mt(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)O||(z=gt),z===void 0&&(z=!1),u.addEventListener(p.toString(),T,z);else if(u.attachEvent)u.attachEvent(ge(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Mt(){function u(v){return p.call(u.src,u.listener,v)}const p=be;return u}function Ut(u,p,v,T,z){if(Array.isArray(p))for(var Q=0;Q<p.length;Q++)Ut(u,p[Q],v,T,z);else T=m(T)?!!T.capture:!!T,v=On(v),u&&u[Nt]?(u=u.i,Q=String(p).toString(),Q in u.g&&(p=u.g[Q],v=mt(p,v,T,z),v>-1&&(dt(p[v]),Array.prototype.splice.call(p,v,1),p.length==0&&(delete u.g[Q],u.h--)))):u&&(u=Ge(u))&&(p=u.g[p.toString()],u=-1,p&&(u=mt(p,v,T,z)),(v=u>-1?p[u]:null)&&Xt(v))}function Xt(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Nt])bt(p.i,u);else{var v=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(v,T,u.capture):p.detachEvent?p.detachEvent(ge(v),T):p.addListener&&p.removeListener&&p.removeListener(T),(v=Ge(p))?(bt(v,u),v.h==0&&(v.src=null,p[St]=null)):dt(u)}}}function ge(u){return u in It?It[u]:It[u]="on"+u}function be(u,p){if(u.da)u=!0;else{p=new Bt(p,this);const v=u.listener,T=u.ha||u.src;u.fa&&Xt(u),u=v.call(T,p)}return u}function Ge(u){return u=u[St],u instanceof ht?u:null}var ye="__closure_events_fn_"+(Math.random()*1e9>>>0);function On(u){return typeof u=="function"?u:(u[ye]||(u[ye]=function(p){return u.handleEvent(p)}),u[ye])}function ie(){V.call(this),this.i=new ht(this),this.M=this,this.G=null}E(ie,V),ie.prototype[Nt]=!0,ie.prototype.removeEventListener=function(u,p,v,T){Ut(this,u,p,v,T)};function Te(u,p){var v,T=u.G;if(T)for(v=[];T;T=T.G)v.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new N(p,u);else if(p instanceof N)p.target=p.target||u;else{var z=p;p=new N(T,u),tt(p,z)}z=!0;let Q,gt;if(v)for(gt=v.length-1;gt>=0;gt--)Q=p.g=v[gt],z=Sn(Q,T,!0,p)&&z;if(Q=p.g=u,z=Sn(Q,T,!0,p)&&z,z=Sn(Q,T,!1,p)&&z,v)for(gt=0;gt<v.length;gt++)Q=p.g=v[gt],z=Sn(Q,T,!1,p)&&z}ie.prototype.N=function(){if(ie.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const v=u.g[p];for(let T=0;T<v.length;T++)dt(v[T]);delete u.g[p],u.h--}}this.G=null},ie.prototype.J=function(u,p,v,T){return this.i.add(String(u),p,!1,v,T)},ie.prototype.K=function(u,p,v,T){return this.i.add(String(u),p,!0,v,T)};function Sn(u,p,v,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let z=!0;for(let Q=0;Q<p.length;++Q){const gt=p[Q];if(gt&&!gt.da&&gt.capture==v){const Ot=gt.listener,de=gt.ha||gt.src;gt.fa&&bt(u.i,gt),z=Ot.call(de,T)!==!1&&z}}return z&&!T.defaultPrevented}function jr(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:f.setTimeout(u,p||0)}function hi(u){u.g=jr(()=>{u.g=null,u.i&&(u.i=!1,hi(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class yu extends V{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:hi(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fa(u){V.call(this),this.h=u,this.g={}}E(fa,V);var fi=[];function un(u){Et(u.g,function(p,v){this.g.hasOwnProperty(v)&&Xt(p)},u),u.g={}}fa.prototype.N=function(){fa.Z.N.call(this),un(this)},fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=f.JSON.stringify,gn=f.JSON.parse,Yh=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function vu(){}function bu(){}var dr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function di(){N.call(this,"d")}E(di,N);function Wn(){N.call(this,"c")}E(Wn,N);var Bn={},pi=null;function hs(){return pi=pi||new ie}Bn.Ia="serverreachability";function Mo(u){N.call(this,Bn.Ia,u)}E(Mo,N);function mi(u){const p=hs();Te(p,new Mo(p))}Bn.STAT_EVENT="statevent";function fs(u,p){N.call(this,Bn.STAT_EVENT,u),this.stat=p}E(fs,N);function Re(u){const p=hs();Te(p,new fs(p,u))}Bn.Ja="timingevent";function _u(u,p){N.call(this,Bn.Ja,u),this.size=p}E(_u,N);function gi(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function yi(){this.g=!0}yi.prototype.ua=function(){this.g=!1};function Oo(u,p,v,T,z,Q){u.info(function(){if(u.g)if(Q){var gt="",Ot=Q.split("&");for(let ee=0;ee<Ot.length;ee++){var de=Ot[ee].split("=");if(de.length>1){const Ie=de[0];de=de[1];const xn=Ie.split("_");gt=xn.length>=2&&xn[1]=="type"?gt+(Ie+"="+de+"&"):gt+(Ie+"=redacted&")}}}else gt=null;else gt=Q;return"XMLHTTP REQ ("+T+") [attempt "+z+"]: "+p+`
`+v+`
`+gt})}function jo(u,p,v,T,z,Q,gt){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+z+"]: "+p+`
`+v+`
`+Q+" "+gt})}function Br(u,p,v,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+pr(u,v)+(T?" "+T:"")})}function Kh(u,p){u.info(function(){return"TIMEOUT: "+p})}yi.prototype.info=function(){};function pr(u,p){if(!u.g)return p;if(!p)return null;try{const Q=JSON.parse(p);if(Q){for(u=0;u<Q.length;u++)if(Array.isArray(Q[u])){var v=Q[u];if(!(v.length<2)){var T=v[1];if(Array.isArray(T)&&!(T.length<1)){var z=T[0];if(z!="noop"&&z!="stop"&&z!="close")for(let gt=1;gt<T.length;gt++)T[gt]=""}}}}return jn(Q)}catch{return p}}var Ce={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Lr;function da(){}E(da,vu),da.prototype.g=function(){return new XMLHttpRequest},Lr=new da;function pa(u){return encodeURIComponent(String(u))}function Xh(u){var p=1;u=u.split(":");const v=[];for(;p>0&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function Jn(u,p,v,T){this.j=u,this.i=p,this.l=v,this.S=T||1,this.V=new fa(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vi}function vi(){this.i=null,this.g="",this.h=!1}var ds={},mr={};function gr(u,p,v){u.M=1,u.A=Ur(_e(p)),u.u=v,u.R=!0,bi(u,null)}function bi(u,p){u.F=Date.now(),ma(u),u.B=_e(u.A);var v=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),wu(v.i,"t",T),u.C=0,v=u.j.L,u.h=new vi,u.g=Ts(u.j,v?p:null,!u.u),u.P>0&&(u.O=new yu(y(u.Y,u,u.g),u.P)),p=u.V,v=u.g,T=u.ba;var z="readystatechange";Array.isArray(z)||(z&&(fi[0]=z.toString()),z=fi);for(let Q=0;Q<z.length;Q++){const gt=ut(v,z[Q],T||p.handleEvent,!1,p.h||p);if(!gt)break;p.g[gt.key]=gt}p=u.J?W(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),mi(),Oo(u.i,u.v,u.B,u.l,u.S,u.u)}Jn.prototype.ba=function(u){u=u.target;const p=this.O;p&&cn(u)==3?p.j():this.Y(u)},Jn.prototype.Y=function(u){try{if(u==this.g)t:{const Ot=cn(this.g),de=this.g.ya(),ee=this.g.ca();if(!(Ot<3)&&(Ot!=3||this.g&&(this.h.h||this.g.la()||xa(this.g)))){this.K||Ot!=4||de==7||(de==8||ee<=0?mi(3):mi(2)),vr(this);var p=this.g.ca();this.X=p;var v=_i(this);if(this.o=p==200,jo(this.i,this.v,this.B,this.l,this.S,Ot,p),this.o){if(this.U&&!this.L){e:{if(this.g){var T,z=this.g;if((T=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(T)){var Q=T;break e}}Q=null}if(u=Q)Br(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ps(this,u);else{this.o=!1,this.m=3,Re(12),br(this),ga(this);break t}}if(this.R){u=!0;let Ie;for(;!this.K&&this.C<v.length;)if(Ie=Au(this,v),Ie==mr){Ot==4&&(this.m=4,Re(14),u=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==ds){this.m=4,Re(15),Br(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else Br(this.i,this.l,Ie,null),ps(this,Ie);if(De(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||v.length!=0||this.h.h||(this.m=1,Re(16),u=!1),this.o=this.o&&u,!u)Br(this.i,this.l,v,"[Invalid Chunked Response]"),br(this),ga(this);else if(v.length>0&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.aa&&!gt.P&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Fo(gt),gt.P=!0,Re(11))}}else Br(this.i,this.l,v,null),ps(this,v);Ot==4&&br(this),this.o&&!this.K&&(Ot==4?Qo(this.j,this):(this.o=!1,ma(this)))}else Ra(this.g),p==400&&v.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),br(this),ga(this)}}}catch{}finally{}};function _i(u){if(!De(u))return u.g.la();const p=xa(u.g);if(p==="")return"";let v="";const T=p.length,z=cn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return br(u),ga(u),"";u.h.i=new f.TextDecoder}for(let Q=0;Q<T;Q++)u.h.h=!0,v+=u.h.i.decode(p[Q],{stream:!(z&&Q==T-1)});return p.length=0,u.h.g+=v,u.C=0,u.h.g}function De(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Au(u,p){var v=u.C,T=p.indexOf(`
`,v);return T==-1?mr:(v=Number(p.substring(v,T)),isNaN(v)?ds:(T+=1,T+v>p.length?mr:(p=p.slice(T,T+v),u.C=T+v,p)))}Jn.prototype.cancel=function(){this.K=!0,br(this)};function ma(u){u.T=Date.now()+u.H,yr(u,u.H)}function yr(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=gi(y(u.aa,u),p)}function vr(u){u.D&&(f.clearTimeout(u.D),u.D=null)}Jn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Kh(this.i,this.B),this.M!=2&&(mi(),Re(17)),br(this),this.m=2,ga(this)):yr(this,this.T-u)};function ga(u){u.j.I==0||u.K||Qo(u.j,u)}function br(u){vr(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,un(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function ps(u,p){try{var v=u.j;if(v.I!=0&&(v.g==u||ba(v.h,u))){if(!u.L&&ba(v.h,u)&&v.I==3){try{var T=v.Ba.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var z=T;if(z[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)Es(v),_r(v);else break t;Go(v),Re(18)}}else v.xa=z[1],0<v.xa-v.K&&z[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=gi(y(v.Va,v),6e3));Ln(v.h)<=1&&v.ta&&(v.ta=void 0)}else qr(v,11)}else if((u.L||v.g==u)&&Es(v),!C(p))for(z=v.Ba.g.parse(p),p=0;p<z.length;p++){let ee=z[p];const Ie=ee[0];if(!(Ie<=v.K))if(v.K=Ie,ee=ee[1],v.I==2)if(ee[0]=="c"){v.M=ee[1],v.ba=ee[2];const xn=ee[3];xn!=null&&(v.ka=xn,v.j.info("VER="+v.ka));const Ar=ee[4];Ar!=null&&(v.za=Ar,v.j.info("SVER="+v.za));const nr=ee[5];nr!=null&&typeof nr=="number"&&nr>0&&(T=1.5*nr,v.O=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const rr=u.g;if(rr){const ir=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ir){var Q=T.h;Q.g||ir.indexOf("spdy")==-1&&ir.indexOf("quic")==-1&&ir.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ms(Q,Q.h),Q.h=null))}if(T.G){const Ko=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ko&&(T.wa=Ko,ae(T.J,T.G,Ko))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),T=v;var gt=u;if(T.na=Vu(T,T.L?T.ba:null,T.W),gt.L){zr(T.h,gt);var Ot=gt,de=T.O;de&&(Ot.H=de),Ot.D&&(vr(Ot),ma(Ot)),T.g=gt}else Du(T);v.i.length>0&&ka(v)}else ee[0]!="stop"&&ee[0]!="close"||qr(v,7);else v.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?qr(v,7):Da(v):ee[0]!="noop"&&v.l&&v.l.qa(ee),v.A=0)}}mi(4)}catch{}}var Zh=class{constructor(u,p){this.g=u,this.map=p}};function ya(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function va(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ln(u){return u.h?1:u.g?u.g.size:0}function ba(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ms(u,p){u.g?u.g.add(p):u.h=p}function zr(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}ya.prototype.cancel=function(){if(this.i=gs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function gs(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.G);return p}return j(u.i)}var ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wh(u,p){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const T=u[v].indexOf("=");let z,Q=null;T>=0?(z=u[v].substring(0,T),Q=u[v].substring(T+1)):z=u[v],p(z,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function tr(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof tr?(this.l=u.l,Ai(this,u.j),this.o=u.o,this.g=u.g,_a(this,u.u),this.h=u.h,Ei(this,Su(u.i)),this.m=u.m):u&&(p=String(u).match(ys))?(this.l=!1,Ai(this,p[1]||"",!0),this.o=Aa(p[2]||""),this.g=Aa(p[3]||"",!0),_a(this,p[4]),this.h=Aa(p[5]||"",!0),Ei(this,p[6]||"",!0),this.m=Aa(p[7]||"")):(this.l=!1,this.i=new zn(null,this.l))}tr.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(Fe(p,Lo,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Fe(p,Lo,!0),"@"),u.push(pa(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Fe(v,v.charAt(0)=="/"?Ti:zo,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Fe(v,Tu)),u.join("")},tr.prototype.resolve=function(u){const p=_e(this);let v=!!u.j;v?Ai(p,u.j):v=!!u.o,v?p.o=u.o:v=!!u.g,v?p.g=u.g:v=u.u!=null;var T=u.h;if(v)_a(p,u.u);else if(v=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var z=p.h.lastIndexOf("/");z!=-1&&(T=p.h.slice(0,z+1)+T)}if(z=T,z==".."||z==".")T="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){T=z.lastIndexOf("/",0)==0,z=z.split("/");const Q=[];for(let gt=0;gt<z.length;){const Ot=z[gt++];Ot=="."?T&&gt==z.length&&Q.push(""):Ot==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),T&&gt==z.length&&Q.push("")):(Q.push(Ot),T=!0)}T=Q.join("/")}else T=z}return v?p.h=T:v=u.i.toString()!=="",v?Ei(p,Su(u.i)):v=!!u.m,v&&(p.m=u.m),p};function _e(u){return new tr(u)}function Ai(u,p,v){u.j=v?Aa(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function _a(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Ei(u,p,v){p instanceof zn?(u.i=p,$o(u.i,u.l)):(v||(p=Fe(p,Eu)),u.i=new zn(p,u.l))}function ae(u,p,v){u.i.set(p,v)}function Ur(u){return ae(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Aa(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Fe(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,Bo),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bo(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Lo=/[#\/\?@]/g,zo=/[#\?:]/g,Ti=/[#\?]/g,Eu=/[#\?@]/g,Tu=/#/g;function zn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Pr(u){u.g||(u.g=new Map,u.h=0,u.i&&Wh(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}r=zn.prototype,r.add=function(u,p){Pr(this),this.i=null,u=er(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function Uo(u,p){Pr(u),p=er(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Po(u,p){return Pr(u),p=er(u,p),u.g.has(p)}r.forEach=function(u,p){Pr(this),this.g.forEach(function(v,T){v.forEach(function(z){u.call(p,z,T,this)},this)},this)};function vs(u,p){Pr(u);let v=[];if(typeof p=="string")Po(u,p)&&(v=v.concat(u.g.get(er(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)v=v.concat(u[p]);return v}r.set=function(u,p){return Pr(this),this.i=null,u=er(this,u),Po(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=vs(this,u),u.length>0?String(u[0]):p):p};function wu(u,p,v){Uo(u,p),v.length>0&&(u.i=null,u.g.set(er(u,p),j(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let T=0;T<p.length;T++){var v=p[T];const z=pa(v);v=vs(this,v);for(let Q=0;Q<v.length;Q++){let gt=z;v[Q]!==""&&(gt+="="+pa(v[Q])),u.push(gt)}}return this.i=u.join("&")};function Su(u){const p=new zn;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function er(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function $o(u,p){p&&!u.j&&(Pr(u),u.i=null,u.g.forEach(function(v,T){const z=T.toLowerCase();T!=z&&(Uo(this,T),wu(this,z,v))},u)),u.j=p}function qo(u,p){const v=new yi;if(f.Image){const T=new Image;T.onload=_(yn,v,"TestLoadImage: loaded",!0,p,T),T.onerror=_(yn,v,"TestLoadImage: error",!1,p,T),T.onabort=_(yn,v,"TestLoadImage: abort",!1,p,T),T.ontimeout=_(yn,v,"TestLoadImage: timeout",!1,p,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function wi(u,p){const v=new yi,T=new AbortController,z=setTimeout(()=>{T.abort(),yn(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(Q=>{clearTimeout(z),Q.ok?yn(v,"TestPingServer: ok",!0,p):yn(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(z),yn(v,"TestPingServer: error",!1,p)})}function yn(u,p,v,T,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),T(v)}catch{}}function xu(){this.g=new Yh}function Ea(u){this.i=u.Sb||null,this.h=u.ab||!1}E(Ea,vu),Ea.prototype.g=function(){return new Ta(this.i,this.h)};function Ta(u,p){ie.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(Ta,ie),r=Ta.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,$r(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||f).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vn(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Si(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Si(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?vn(this):$r(this),this.readyState==3&&Si(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,vn(this))},r.Na=function(u){this.g&&(this.response=u,vn(this))},r.ga=function(){this.g&&vn(this)};function vn(u){u.readyState=4,u.l=null,u.j=null,u.B=null,$r(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function $r(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xi(u){let p="";return Et(u,function(v,T){p+=T,p+=":",p+=v,p+=`\r
`}),p}function Un(u,p,v){t:{for(T in v){var T=!1;break t}T=!0}T||(v=xi(v),typeof u=="string"?v!=null&&pa(v):ae(u,p,v))}function ce(u){ie.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(ce,ie);var bs=/^https?$/i,Ru=["POST","PUT"];r=ce.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Lr.g(),this.g.onreadystatechange=x(y(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(Q){wa(this,Q);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var z in T)v.set(z,T[z]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())v.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),z=f.FormData&&u instanceof f.FormData,!(Array.prototype.indexOf.call(Ru,p,void 0)>=0)||T||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,gt]of v)this.g.setRequestHeader(Q,gt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(Q){wa(this,Q)}};function wa(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,Sa(u),Pe(u)}function Sa(u){u.A||(u.A=!0,Te(u,"complete"),Te(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,Te(this,"complete"),Te(this,"abort"),Pe(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pe(this,!0)),ce.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Ho(this):this.Xa())},r.Xa=function(){Ho(this)};function Ho(u){if(u.h&&typeof c<"u"){if(u.v&&cn(u)==4)setTimeout(u.Ca.bind(u),0);else if(Te(u,"readystatechange"),cn(u)==4){u.h=!1;try{const Q=u.ca();t:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var v;if(!(v=p)){var T;if(T=Q===0){let gt=String(u.D).match(ys)[1]||null;!gt&&f.self&&f.self.location&&(gt=f.self.location.protocol.slice(0,-1)),T=!bs.test(gt?gt.toLowerCase():"")}v=T}if(v)Te(u,"complete"),Te(u,"success");else{u.o=6;try{var z=cn(u)>2?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.ca()+"]",Sa(u)}}finally{Pe(u)}}}}function Pe(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,p||Te(u,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function cn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return cn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),gn(p)}};function xa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ra(u){const p={};u=(u.g&&cn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(C(u[T]))continue;var v=Xh(u[T]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=p[z]||[];p[z]=Q,Q.push(v)}k(p,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ca(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function _s(u){this.za=0,this.i=[],this.j=new yi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ca("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ca("baseRetryDelayMs",5e3,u),this.Za=Ca("retryDelaySeedMs",1e4,u),this.Ta=Ca("forwardChannelMaxRetries",2,u),this.va=Ca("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new ya(u&&u.concurrentRequestLimit),this.Ba=new xu,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=_s.prototype,r.ka=8,r.I=1,r.connect=function(u,p,v,T){Re(0),this.W=u,this.H=p||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.J=Vu(this,null,this.W),ka(this)};function Da(u){if(Ia(u),u.I==3){var p=u.V++,v=_e(u.J);if(ae(v,"SID",u.M),ae(v,"RID",p),ae(v,"TYPE","terminate"),Na(u,v),p=new Jn(u,u.j,p),p.M=2,p.A=Ur(_e(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(p.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=p.A,v=!0),v||(p.g=Ts(p.j,null),p.g.ea(p.A)),p.F=Date.now(),ma(p)}Nu(u)}function _r(u){u.g&&(Fo(u),u.g.cancel(),u.g=null)}function Ia(u){_r(u),u.v&&(f.clearTimeout(u.v),u.v=null),Es(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&f.clearTimeout(u.m),u.m=null)}function ka(u){if(!va(u.h)&&!u.m){u.m=!0;var p=u.Ea;st||w(),lt||(st(),lt=!0),S.add(p,u),u.D=0}}function Jh(u,p){return Ln(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=gi(y(u.Ea,u,p),ku(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const z=new Jn(this,this.j,u);let Q=this.o;if(this.U&&(Q?(Q=W(Q),tt(Q,this.U)):Q=this.U),this.u!==null||this.R||(z.J=Q,Q=null),this.S)t:{for(var p=0,v=0;v<this.i.length;v++){e:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(p+=T,p>4096){p=v;break t}if(p===4096||v===this.i.length-1){p=v+1;break t}}p=1e3}else p=1e3;p=As(this,z,p),v=_e(this.J),ae(v,"RID",u),ae(v,"CVER",22),this.G&&ae(v,"X-HTTP-Session-Id",this.G),Na(this,v),Q&&(this.R?p="headers="+pa(xi(Q))+"&"+p:this.u&&Un(v,this.u,Q)),ms(this.h,z),this.Ra&&ae(v,"TYPE","init"),this.S?(ae(v,"$req",p),ae(v,"SID","null"),z.U=!0,gr(z,v,null)):gr(z,v,p),this.I=2}}else this.I==3&&(u?Cu(this,u):this.i.length==0||va(this.h)||Cu(this))};function Cu(u,p){var v;p?v=p.l:v=u.V++;const T=_e(u.J);ae(T,"SID",u.M),ae(T,"RID",v),ae(T,"AID",u.K),Na(u,T),u.u&&u.o&&Un(T,u.u,u.o),v=new Jn(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),p&&(u.i=p.G.concat(u.i)),p=As(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),ms(u.h,v),gr(v,T,p)}function Na(u,p){u.H&&Et(u.H,function(v,T){ae(p,T,v)}),u.l&&Et({},function(v,T){ae(p,T,v)})}function As(u,p,v){v=Math.min(u.i.length,v);const T=u.l?y(u.l.Ka,u.l,u):null;t:{var z=u.i;let Ot=-1;for(;;){const de=["count="+v];Ot==-1?v>0?(Ot=z[0].g,de.push("ofs="+Ot)):Ot=0:de.push("ofs="+Ot);let ee=!0;for(let Ie=0;Ie<v;Ie++){var Q=z[Ie].g;const xn=z[Ie].map;if(Q-=Ot,Q<0)Ot=Math.max(0,z[Ie].g-100),ee=!1;else try{Q="req"+Q+"_"||"";try{var gt=xn instanceof Map?xn:Object.entries(xn);for(const[Ar,nr]of gt){let rr=nr;m(nr)&&(rr=jn(nr)),de.push(Q+Ar+"="+encodeURIComponent(rr))}}catch(Ar){throw de.push(Q+"type="+encodeURIComponent("_badmap")),Ar}}catch{T&&T(xn)}}if(ee){gt=de.join("&");break t}}gt=void 0}return u=u.i.splice(0,v),p.G=u,gt}function Du(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;st||w(),lt||(st(),lt=!0),S.add(p,u),u.A=0}}function Go(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=gi(y(u.Da,u),ku(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,Iu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=gi(y(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),_r(this),Iu(this))};function Fo(u){u.B!=null&&(f.clearTimeout(u.B),u.B=null)}function Iu(u){u.g=new Jn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=_e(u.na);ae(p,"RID","rpc"),ae(p,"SID",u.M),ae(p,"AID",u.K),ae(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&ae(p,"TO",u.ia),ae(p,"TYPE","xmlhttp"),Na(u,p),u.u&&u.o&&Un(p,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=Ur(_e(p)),v.u=null,v.R=!0,bi(v,u)}r.Va=function(){this.C!=null&&(this.C=null,_r(this),Go(this),Re(19))};function Es(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Qo(u,p){var v=null;if(u.g==p){Es(u),Fo(u),u.g=null;var T=2}else if(ba(u.h,p))v=p.G,zr(u.h,p),T=1;else return;if(u.I!=0){if(p.o)if(T==1){v=p.u?p.u.length:0,p=Date.now()-p.F;var z=u.D;T=hs(),Te(T,new _u(T,v)),ka(u)}else Du(u);else if(z=p.m,z==3||z==0&&p.X>0||!(T==1&&Jh(u,p)||T==2&&Go(u)))switch(v&&v.length>0&&(p=u.h,p.i=p.i.concat(v)),z){case 1:qr(u,5);break;case 4:qr(u,10);break;case 3:qr(u,6);break;default:qr(u,2)}}}function ku(u,p){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*p}function qr(u,p){if(u.j.info("Error code "+p),p==2){var v=y(u.bb,u),T=u.Ua;const z=!T;T=new tr(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ai(T,"https"),Ur(T),z?qo(T.toString(),v):wi(T.toString(),v)}else Re(2);u.I=0,u.l&&u.l.pa(p),Nu(u),Ia(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Nu(u){if(u.I=0,u.ja=[],u.l){const p=gs(u.h);(p.length!=0||u.i.length!=0)&&(q(u.ja,p),q(u.ja,u.i),u.h.i.length=0,j(u.i),u.i.length=0),u.l.oa()}}function Vu(u,p,v){var T=v instanceof tr?_e(v):new tr(v);if(T.g!="")p&&(T.g=p+"."+T.g),_a(T,T.u);else{var z=f.location;T=z.protocol,p=p?p+"."+z.hostname:z.hostname,z=+z.port;const Q=new tr(null);T&&Ai(Q,T),p&&(Q.g=p),z&&_a(Q,z),v&&(Q.h=v),T=Q}return v=u.G,p=u.wa,v&&p&&ae(T,v,p),ae(T,"VER",u.ka),Na(u,T),T}function Ts(u,p,v){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new ce(new Ea({ab:v})):new ce(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}r=Mu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function ws(){}ws.prototype.g=function(u,p){return new bn(u,p)};function bn(u,p){ie.call(this),this.g=new _s(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!C(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!C(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Ri(this)}E(bn,ie),bn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){Da(this.g)},bn.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=jn(u),u=v);p.i.push(new Zh(p.Ya++,u)),p.I==3&&ka(p)},bn.prototype.N=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,bn.Z.N.call(this)};function Yo(u){di.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const v in p){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}E(Yo,di);function Ou(){Wn.call(this),this.status=1}E(Ou,Wn);function Ri(u){this.g=u}E(Ri,Mu),Ri.prototype.ra=function(){Te(this.g,"a")},Ri.prototype.qa=function(u){Te(this.g,new Yo(u))},Ri.prototype.pa=function(u){Te(this.g,new Ou)},Ri.prototype.oa=function(){Te(this.g,"b")},ws.prototype.createWebChannel=ws.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,P_=function(){return new ws},U_=function(){return hs()},z_=Bn,xp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ce.NO_ERROR=0,Ce.TIMEOUT=8,Ce.HTTP_ERROR=6,Wc=Ce,tn.COMPLETE="complete",L_=tn,bu.EventType=dr,dr.OPEN="a",dr.CLOSE="b",dr.ERROR="c",dr.MESSAGE="d",ie.prototype.listen=ie.prototype.J,Ul=bu,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,B_=ce}).apply(typeof Lc<"u"?Lc:typeof self<"u"?self:typeof window<"u"?window:{});const Uv="@firebase/firestore",Pv="4.9.2";/**
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
 */let Do="12.3.0";/**
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
 */const rs=new I_("@firebase/firestore");function eo(){return rs.logLevel}function _t(r,...t){if(rs.logLevel<=Kt.DEBUG){const i=t.map(nm);rs.debug(`Firestore (${Do}): ${r}`,...i)}}function ui(r,...t){if(rs.logLevel<=Kt.ERROR){const i=t.map(nm);rs.error(`Firestore (${Do}): ${r}`,...i)}}function _o(r,...t){if(rs.logLevel<=Kt.WARN){const i=t.map(nm);rs.warn(`Firestore (${Do}): ${r}`,...i)}}function nm(r){if(typeof r=="string")return r;try{/**
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
*/return function(i){return JSON.stringify(i)}(r)}catch{return r}}/**
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
 */function Ct(r,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,$_(r,a,i)}function $_(r,t,i){let a=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw ui(a),new Error(a)}function te(r,t,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,r||$_(t,l,a)}function jt(r,t){return r}/**
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
 */const nt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yt extends Co{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ea{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
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
 */class q_{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class tx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(pn.UNAUTHENTICATED))}shutdown(){}}class ex{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class nx{constructor(t){this.t=t,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){te(this.o===void 0,42304);let a=this.i;const l=g=>this.i!==a?(a=this.i,i(g)):Promise.resolve();let c=new ea;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new ea,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const g=c;t.enqueueRetryable(async()=>{await g.promise,await l(this.currentUser)})},m=g=>{_t("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(_t("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new ea)}},0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==t?(_t("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(te(typeof a.accessToken=="string",31837,{l:a}),new q_(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return te(t===null||typeof t=="string",2055,{h:t}),new pn(t)}}class rx{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ix{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new rx(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable(()=>i(pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $v{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ax{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zS(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){te(this.o===void 0,3512);const a=c=>{c.error!=null&&_t("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,_t("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>a(c))};const l=c=>{_t("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):_t("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $v(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(te(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new $v(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sx(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class rm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=sx(40);for(let c=0;c<l.length;++c)a.length<20&&l[c]<i&&(a+=t.charAt(l[c]%62))}return a}}function Gt(r,t){return r<t?-1:r>t?1:0}function Rp(r,t){const i=Math.min(r.length,t.length);for(let a=0;a<i;a++){const l=r.charAt(a),c=t.charAt(a);if(l!==c)return ap(l)===ap(c)?Gt(l,c):ap(l)?1:-1}return Gt(r.length,t.length)}const ox=55296,lx=57343;function ap(r){const t=r.charCodeAt(0);return t>=ox&&t<=lx}function Ao(r,t,i){return r.length===t.length&&r.every((a,l)=>i(a,t[l]))}/**
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
 */const qv="__name__";class Rr{constructor(t,i,a){i===void 0?i=0:i>t.length&&Ct(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&Ct(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return Rr.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Rr?t.forEach(a=>{i.push(a)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const c=Rr.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return Gt(t.length,i.length)}static compareSegments(t,i){const a=Rr.isNumericId(t),l=Rr.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?Rr.extractNumericId(t).compare(Rr.extractNumericId(i)):Rp(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ta.fromString(t.substring(4,t.length-2))}}class fe extends Rr{construct(t,i,a){return new fe(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new yt(nt.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new fe(i)}static emptyPath(){return new fe([])}}const ux=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends Rr{construct(t,i,a){return new sn(t,i,a)}static isValidIdentifier(t){return ux.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qv}static keyField(){return new sn([qv])}static fromServerFormat(t){const i=[];let a="",l=0;const c=()=>{if(a.length===0)throw new yt(nt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let f=!1;for(;l<t.length;){const m=t[l];if(m==="\\"){if(l+1===t.length)throw new yt(nt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new yt(nt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=g,l+=2}else m==="`"?(f=!f,l++):m!=="."||f?(a+=m,l++):(c(),l++)}if(c(),f)throw new yt(nt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new sn(i)}static emptyPath(){return new sn([])}}/**
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
 */class wt{constructor(t){this.path=t}static fromPath(t){return new wt(fe.fromString(t))}static fromName(t){return new wt(fe.fromString(t).popFirst(5))}static empty(){return new wt(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&fe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return fe.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new wt(new fe(t.slice()))}}/**
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
 */function H_(r,t,i){if(!i)throw new yt(nt.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function cx(r,t,i,a){if(t===!0&&a===!0)throw new yt(nt.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function Hv(r){if(!wt.isDocumentKey(r))throw new yt(nt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Gv(r){if(wt.isDocumentKey(r))throw new yt(nt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function G_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Vh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Ct(12329,{type:typeof r})}function dh(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new yt(nt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Vh(r);throw new yt(nt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
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
 */function Ue(r,t){const i={typeString:r};return t&&(i.value=t),i}function hu(r,t){if(!G_(r))throw new yt(nt.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const l=t[a].typeString,c="value"in t[a]?{value:t[a].value}:void 0;if(!(a in r)){i=`JSON missing required field: '${a}'`;break}const f=r[a];if(l&&typeof f!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(c!==void 0&&f!==c.value){i=`Expected '${a}' field to equal '${c.value}'`;break}}if(i)throw new yt(nt.INVALID_ARGUMENT,i);return!0}/**
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
 */const Fv=-62135596800,Qv=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(t){return me.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*Qv);return new me(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new yt(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new yt(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<Fv)throw new yt(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new yt(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qv}_compareTo(t){return this.seconds===t.seconds?Gt(this.nanoseconds,t.nanoseconds):Gt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(hu(t,me._jsonSchema))return new me(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Fv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ue("string",me._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */const nu=-1;function hx(r,t){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=Vt.fromTimestamp(a===1e9?new me(i+1,0):new me(i,a));return new ra(l,wt.empty(),t)}function fx(r){return new ra(r.readTime,r.key,nu)}class ra{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new ra(Vt.min(),wt.empty(),nu)}static max(){return new ra(Vt.max(),wt.empty(),nu)}}function dx(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=wt.comparator(r.documentKey,t.documentKey),i!==0?i:Gt(r.largestBatchId,t.largestBatchId))}/**
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
 */const px="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Io(r){if(r.code!==nt.FAILED_PRECONDITION||r.message!==px)throw r;_t("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class at{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&Ct(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new at((a,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(a,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(a,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof at?i:at.resolve(i)}catch(i){return at.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):at.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):at.reject(i)}static resolve(t){return new at((i,a)=>{i(t)})}static reject(t){return new at((i,a)=>{a(t)})}static waitFor(t){return new at((i,a)=>{let l=0,c=0,f=!1;t.forEach(m=>{++l,m.next(()=>{++c,f&&c===l&&i()},g=>a(g))}),f=!0,c===l&&i()})}static or(t){let i=at.resolve(!1);for(const a of t)i=i.next(l=>l?at.resolve(l):a());return i}static forEach(t,i){const a=[];return t.forEach((l,c)=>{a.push(i.call(this,l,c))}),this.waitFor(a)}static mapArray(t,i){return new at((a,l)=>{const c=t.length,f=new Array(c);let m=0;for(let g=0;g<c;g++){const y=g;i(t[y]).next(_=>{f[y]=_,++m,m===c&&a(f)},_=>l(_))}})}static doWhile(t,i){return new at((a,l)=>{const c=()=>{t()===!0?i().next(()=>{c()},l):a()};c()})}}function gx(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function ko(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Mh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Mh.ce=-1;/**
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
 */const im=-1;function Oh(r){return r==null}function ph(r){return r===0&&1/r==-1/0}function yx(r){return typeof r=="number"&&Number.isInteger(r)&&!ph(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const F_="";function vx(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=Yv(t)),t=bx(r.get(i),t);return Yv(t)}function bx(r,t){let i=t;const a=r.length;for(let l=0;l<a;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case F_:i+="";break;default:i+=c}}return i}function Yv(r){return r+F_+""}/**
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
 */function Kv(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function ss(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function Q_(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Ee{constructor(t,i){this.comparator=t,this.root=i||an.EMPTY}insert(t,i){return new Ee(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,an.BLACK,null,null))}remove(t){return new Ee(this.comparator,this.root.remove(t,this.comparator).copy(null,null,an.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,a)=>(t(i,a),!1))}toString(){const t=[];return this.inorderTraversal((i,a)=>(t.push(`${i}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zc(this.root,t,this.comparator,!1)}getReverseIterator(){return new zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zc(this.root,t,this.comparator,!0)}}class zc{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?a(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class an{constructor(t,i,a,l,c){this.key=t,this.value=i,this.color=a??an.RED,this.left=l??an.EMPTY,this.right=c??an.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,c){return new an(t??this.key,i??this.value,a??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const c=a(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,a),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return an.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return an.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,an.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,an.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ct(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ct(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Ct(27949);return t+(this.isRed()?0:1)}}an.EMPTY=null,an.RED=!0,an.BLACK=!1;an.EMPTY=new class{constructor(){this.size=0}get key(){throw Ct(57766)}get value(){throw Ct(16141)}get color(){throw Ct(16727)}get left(){throw Ct(29726)}get right(){throw Ct(36894)}copy(t,i,a,l,c){return this}insert(t,i,a){return new an(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(t){this.comparator=t,this.data=new Ee(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,a)=>(t(i),!1))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Xv(this.data.getIterator())}getIteratorFrom(t){return new Xv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(a=>{i=i.add(a)}),i}isEqual(t){if(!(t instanceof He)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new He(this.comparator);return i.data=t,i}}class Xv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class lr{constructor(t){this.fields=t,t.sort(sn.comparator)}static empty(){return new lr([])}unionWith(t){let i=new He(sn.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new lr(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return Ao(this.fields,t.fields,(i,a)=>i.isEqual(a))}}/**
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
 */class Y_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ln{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Y_("Invalid base64 string: "+c):c}}(t);return new ln(i)}static fromUint8Array(t){const i=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new ln(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Gt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const _x=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ia(r){if(te(!!r,39018),typeof r=="string"){let t=0;const i=_x.exec(r);if(te(!!i,46558,{timestamp:r}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Me(r.seconds),nanos:Me(r.nanos)}}function Me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function aa(r){return typeof r=="string"?ln.fromBase64String(r):ln.fromUint8Array(r)}/**
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
 */const K_="server_timestamp",X_="__type__",Z_="__previous_value__",W_="__local_write_time__";function am(r){var i,a;return((a=(((i=r==null?void 0:r.mapValue)==null?void 0:i.fields)||{})[X_])==null?void 0:a.stringValue)===K_}function jh(r){const t=r.mapValue.fields[Z_];return am(t)?jh(t):t}function ru(r){const t=ia(r.mapValue.fields[W_].timestampValue);return new me(t.seconds,t.nanos)}/**
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
 */class Ax{constructor(t,i,a,l,c,f,m,g,y,_){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=_}}const mh="(default)";class iu{constructor(t,i){this.projectId=t,this.database=i||mh}static empty(){return new iu("","")}get isDefaultDatabase(){return this.database===mh}isEqual(t){return t instanceof iu&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const J_="__type__",Ex="__max__",Uc={mapValue:{}},tA="__vector__",gh="value";function sa(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?am(r)?4:wx(r)?9007199254740991:Tx(r)?10:11:Ct(28295,{value:r})}function Vr(r,t){if(r===t)return!0;const i=sa(r);if(i!==sa(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return ru(r).isEqual(ru(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=ia(l.timestampValue),m=ia(c.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return aa(l.bytesValue).isEqual(aa(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return Me(l.geoPointValue.latitude)===Me(c.geoPointValue.latitude)&&Me(l.geoPointValue.longitude)===Me(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return Me(l.integerValue)===Me(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=Me(l.doubleValue),m=Me(c.doubleValue);return f===m?ph(f)===ph(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Ao(r.arrayValue.values||[],t.arrayValue.values||[],Vr);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},m=c.mapValue.fields||{};if(Kv(f)!==Kv(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!Vr(f[g],m[g])))return!1;return!0}(r,t);default:return Ct(52216,{left:r})}}function au(r,t){return(r.values||[]).find(i=>Vr(i,t))!==void 0}function Eo(r,t){if(r===t)return 0;const i=sa(r),a=sa(t);if(i!==a)return Gt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Gt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const m=Me(c.integerValue||c.doubleValue),g=Me(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,t);case 3:return Zv(r.timestampValue,t.timestampValue);case 4:return Zv(ru(r),ru(t));case 5:return Rp(r.stringValue,t.stringValue);case 6:return function(c,f){const m=aa(c),g=aa(f);return m.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const m=c.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const _=Gt(m[y],g[y]);if(_!==0)return _}return Gt(m.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const m=Gt(Me(c.latitude),Me(f.latitude));return m!==0?m:Gt(Me(c.longitude),Me(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Wv(r.arrayValue,t.arrayValue);case 10:return function(c,f){var x,j,q,K;const m=c.fields||{},g=f.fields||{},y=(x=m[gh])==null?void 0:x.arrayValue,_=(j=g[gh])==null?void 0:j.arrayValue,E=Gt(((q=y==null?void 0:y.values)==null?void 0:q.length)||0,((K=_==null?void 0:_.values)==null?void 0:K.length)||0);return E!==0?E:Wv(y,_)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===Uc.mapValue&&f===Uc.mapValue)return 0;if(c===Uc.mapValue)return 1;if(f===Uc.mapValue)return-1;const m=c.fields||{},g=Object.keys(m),y=f.fields||{},_=Object.keys(y);g.sort(),_.sort();for(let E=0;E<g.length&&E<_.length;++E){const x=Rp(g[E],_[E]);if(x!==0)return x;const j=Eo(m[g[E]],y[_[E]]);if(j!==0)return j}return Gt(g.length,_.length)}(r.mapValue,t.mapValue);default:throw Ct(23264,{he:i})}}function Zv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Gt(r,t);const i=ia(r),a=ia(t),l=Gt(i.seconds,a.seconds);return l!==0?l:Gt(i.nanos,a.nanos)}function Wv(r,t){const i=r.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const c=Eo(i[l],a[l]);if(c)return c}return Gt(i.length,a.length)}function To(r){return Cp(r)}function Cp(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const a=ia(i);return`time(${a.seconds},${a.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return aa(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return wt.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let a="[",l=!0;for(const c of i.values||[])l?l=!1:a+=",",a+=Cp(c);return a+"]"}(r.arrayValue):"mapValue"in r?function(i){const a=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const f of a)c?c=!1:l+=",",l+=`${f}:${Cp(i.fields[f])}`;return l+"}"}(r.mapValue):Ct(61005,{value:r})}function Jc(r){switch(sa(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=jh(r);return t?16+Jc(t):16;case 5:return 2*r.stringValue.length;case 6:return aa(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,c)=>l+Jc(c),0)}(r.arrayValue);case 10:case 11:return function(a){let l=0;return ss(a.fields,(c,f)=>{l+=c.length+Jc(f)}),l}(r.mapValue);default:throw Ct(13486,{value:r})}}function Jv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Dp(r){return!!r&&"integerValue"in r}function sm(r){return!!r&&"arrayValue"in r}function tb(r){return!!r&&"nullValue"in r}function eb(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function th(r){return!!r&&"mapValue"in r}function Tx(r){var i,a;return((a=(((i=r==null?void 0:r.mapValue)==null?void 0:i.fields)||{})[J_])==null?void 0:a.stringValue)===tA}function Ql(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ss(r.mapValue.fields,(i,a)=>t.mapValue.fields[i]=Ql(a)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Ql(r.arrayValue.values[i]);return t}return{...r}}function wx(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ex}/**
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
 */class Kn{constructor(t){this.value=t}static empty(){return new Kn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!th(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ql(i)}setAll(t){let i=sn.emptyPath(),a={},l=[];t.forEach((f,m)=>{if(!i.isImmediateParentOf(m)){const g=this.getFieldsMap(i);this.applyChanges(g,a,l),a={},l=[],i=m.popLast()}f?a[m.lastSegment()]=Ql(f):l.push(m.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,a,l)}delete(t){const i=this.field(t.popLast());th(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Vr(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];th(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){ss(i,(l,c)=>t[l]=c);for(const l of a)delete t[l]}clone(){return new Kn(Ql(this.value))}}function eA(r){const t=[];return ss(r.fields,(i,a)=>{const l=new sn([i]);if(th(a)){const c=eA(a.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new lr(t)}/**
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
 */class mn{constructor(t,i,a,l,c,f,m){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=c,this.data=f,this.documentState=m}static newInvalidDocument(t){return new mn(t,0,Vt.min(),Vt.min(),Vt.min(),Kn.empty(),0)}static newFoundDocument(t,i,a,l){return new mn(t,1,i,Vt.min(),a,l,0)}static newNoDocument(t,i){return new mn(t,2,i,Vt.min(),Vt.min(),Kn.empty(),0)}static newUnknownDocument(t,i){return new mn(t,3,i,Vt.min(),Vt.min(),Kn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Vt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Kn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Vt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yh{constructor(t,i){this.position=t,this.inclusive=i}}function nb(r,t,i){let a=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?a=wt.comparator(wt.fromName(f.referenceValue),i.key):a=Eo(f,i.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function rb(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Vr(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class su{constructor(t,i="asc"){this.field=t,this.dir=i}}function Sx(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */let nA=class{};class ze extends nA{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new Rx(t,i,a):i==="array-contains"?new Ix(t,a):i==="in"?new kx(t,a):i==="not-in"?new Nx(t,a):i==="array-contains-any"?new Vx(t,a):new ze(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new Cx(t,a):new Dx(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(Eo(i,this.value)):i!==null&&sa(this.value)===sa(i)&&this.matchesComparison(Eo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ct(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends nA{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new cr(t,i)}matches(t){return rA(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rA(r){return r.op==="and"}function iA(r){return xx(r)&&rA(r)}function xx(r){for(const t of r.filters)if(t instanceof cr)return!1;return!0}function Ip(r){if(r instanceof ze)return r.field.canonicalString()+r.op.toString()+To(r.value);if(iA(r))return r.filters.map(t=>Ip(t)).join(",");{const t=r.filters.map(i=>Ip(i)).join(",");return`${r.op}(${t})`}}function aA(r,t){return r instanceof ze?function(a,l){return l instanceof ze&&a.op===l.op&&a.field.isEqual(l.field)&&Vr(a.value,l.value)}(r,t):r instanceof cr?function(a,l){return l instanceof cr&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((c,f,m)=>c&&aA(f,l.filters[m]),!0):!1}(r,t):void Ct(19439)}function sA(r){return r instanceof ze?function(i){return`${i.field.canonicalString()} ${i.op} ${To(i.value)}`}(r):r instanceof cr?function(i){return i.op.toString()+" {"+i.getFilters().map(sA).join(" ,")+"}"}(r):"Filter"}class Rx extends ze{constructor(t,i,a){super(t,i,a),this.key=wt.fromName(a.referenceValue)}matches(t){const i=wt.comparator(t.key,this.key);return this.matchesComparison(i)}}class Cx extends ze{constructor(t,i){super(t,"in",i),this.keys=oA("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class Dx extends ze{constructor(t,i){super(t,"not-in",i),this.keys=oA("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function oA(r,t){var i;return(((i=t.arrayValue)==null?void 0:i.values)||[]).map(a=>wt.fromName(a.referenceValue))}class Ix extends ze{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return sm(i)&&au(i.arrayValue,this.value)}}class kx extends ze{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&au(this.value.arrayValue,i)}}class Nx extends ze{constructor(t,i){super(t,"not-in",i)}matches(t){if(au(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!au(this.value.arrayValue,i)}}class Vx extends ze{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!sm(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>au(this.value.arrayValue,a))}}/**
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
 */class Mx{constructor(t,i=null,a=[],l=[],c=null,f=null,m=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=c,this.startAt=f,this.endAt=m,this.Te=null}}function ib(r,t=null,i=[],a=[],l=null,c=null,f=null){return new Mx(r,t,i,a,l,c,f)}function om(r){const t=jt(r);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(a=>Ip(a)).join(","),i+="|ob:",i+=t.orderBy.map(a=>function(c){return c.field.canonicalString()+c.dir}(a)).join(","),Oh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>To(a)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>To(a)).join(",")),t.Te=i}return t.Te}function lm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Sx(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!aA(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!rb(r.startAt,t.startAt)&&rb(r.endAt,t.endAt)}function kp(r){return wt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class No{constructor(t,i=null,a=[],l=[],c=null,f="F",m=null,g=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=c,this.limitType=f,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ox(r,t,i,a,l,c,f,m){return new No(r,t,i,a,l,c,f,m)}function lA(r){return new No(r)}function ab(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uA(r){return r.collectionGroup!==null}function Yl(r){const t=jt(r);if(t.Ie===null){t.Ie=[];const i=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),i.add(c.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new He(sn.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new su(c,a))}),i.has(sn.keyField().canonicalString())||t.Ie.push(new su(sn.keyField(),a))}return t.Ie}function Dr(r){const t=jt(r);return t.Ee||(t.Ee=jx(t,Yl(r))),t.Ee}function jx(r,t){if(r.limitType==="F")return ib(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new su(l.field,c)});const i=r.endAt?new yh(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new yh(r.startAt.position,r.startAt.inclusive):null;return ib(r.path,r.collectionGroup,t,r.filters,r.limit,i,a)}}function Np(r,t){const i=r.filters.concat([t]);return new No(r.path,r.collectionGroup,r.explicitOrderBy.slice(),i,r.limit,r.limitType,r.startAt,r.endAt)}function vh(r,t,i){return new No(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function Bh(r,t){return lm(Dr(r),Dr(t))&&r.limitType===t.limitType}function cA(r){return`${om(Dr(r))}|lt:${r.limitType}`}function no(r){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(l=>sA(l)).join(", ")}]`),Oh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(l=>To(l)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(l=>To(l)).join(",")),`Target(${a})`}(Dr(r))}; limitType=${r.limitType})`}function Lh(r,t){return t.isFoundDocument()&&function(a,l){const c=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):wt.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(r,t)&&function(a,l){for(const c of Yl(a))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(a,l){for(const c of a.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(a,l){return!(a.startAt&&!function(f,m,g){const y=nb(f,m,g);return f.inclusive?y<=0:y<0}(a.startAt,Yl(a),l)||a.endAt&&!function(f,m,g){const y=nb(f,m,g);return f.inclusive?y>=0:y>0}(a.endAt,Yl(a),l))}(r,t)}function Bx(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function hA(r){return(t,i)=>{let a=!1;for(const l of Yl(r)){const c=Lx(l,t,i);if(c!==0)return c;a=a||l.field.isKeyField()}return 0}}function Lx(r,t,i){const a=r.field.isKeyField()?wt.comparator(t.key,i.key):function(c,f,m){const g=f.data.field(c),y=m.data.field(c);return g!==null&&y!==null?Eo(g,y):Ct(42886)}(r.field,t,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return Ct(19790,{direction:r.dir})}}/**
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
 */class os{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,c]of a)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){ss(this.inner,(i,a)=>{for(const[l,c]of a)t(l,c)})}isEmpty(){return Q_(this.inner)}size(){return this.innerSize}}/**
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
 */const zx=new Ee(wt.comparator);function ci(){return zx}const fA=new Ee(wt.comparator);function Pl(...r){let t=fA;for(const i of r)t=t.insert(i.key,i);return t}function dA(r){let t=fA;return r.forEach((i,a)=>t=t.insert(i,a.overlayedDocument)),t}function Wa(){return Kl()}function pA(){return Kl()}function Kl(){return new os(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ux=new Ee(wt.comparator),Px=new He(wt.comparator);function Ft(...r){let t=Px;for(const i of r)t=t.add(i);return t}const $x=new He(Gt);function qx(){return $x}/**
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
 */function um(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ph(t)?"-0":t}}function mA(r){return{integerValue:""+r}}function Hx(r,t){return yx(t)?mA(t):um(r,t)}/**
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
 */class zh{constructor(){this._=void 0}}function Gx(r,t,i){return r instanceof ou?function(l,c){const f={fields:{[X_]:{stringValue:K_},[W_]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&am(c)&&(c=jh(c)),c&&(f.fields[Z_]=c),{mapValue:f}}(i,t):r instanceof lu?yA(r,t):r instanceof uu?vA(r,t):function(l,c){const f=gA(l,c),m=sb(f)+sb(l.Ae);return Dp(f)&&Dp(l.Ae)?mA(m):um(l.serializer,m)}(r,t)}function Fx(r,t,i){return r instanceof lu?yA(r,t):r instanceof uu?vA(r,t):i}function gA(r,t){return r instanceof bh?function(a){return Dp(a)||function(c){return!!c&&"doubleValue"in c}(a)}(t)?t:{integerValue:0}:null}class ou extends zh{}class lu extends zh{constructor(t){super(),this.elements=t}}function yA(r,t){const i=bA(t);for(const a of r.elements)i.some(l=>Vr(l,a))||i.push(a);return{arrayValue:{values:i}}}class uu extends zh{constructor(t){super(),this.elements=t}}function vA(r,t){let i=bA(t);for(const a of r.elements)i=i.filter(l=>!Vr(l,a));return{arrayValue:{values:i}}}class bh extends zh{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function sb(r){return Me(r.integerValue||r.doubleValue)}function bA(r){return sm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Qx{constructor(t,i){this.field=t,this.transform=i}}function Yx(r,t){return r.field.isEqual(t.field)&&function(a,l){return a instanceof lu&&l instanceof lu||a instanceof uu&&l instanceof uu?Ao(a.elements,l.elements,Vr):a instanceof bh&&l instanceof bh?Vr(a.Ae,l.Ae):a instanceof ou&&l instanceof ou}(r.transform,t.transform)}class Kx{constructor(t,i){this.version=t,this.transformResults=i}}class oi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new oi}static exists(t){return new oi(void 0,t)}static updateTime(t){return new oi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function eh(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Uh{}function _A(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new EA(r.key,oi.none()):new fu(r.key,r.data,oi.none());{const i=r.data,a=Kn.empty();let l=new He(sn.comparator);for(let c of t.fields)if(!l.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?a.delete(c):a.set(c,f),l=l.add(c)}return new ls(r.key,a,new lr(l.toArray()),oi.none())}}function Xx(r,t,i){r instanceof fu?function(l,c,f){const m=l.value.clone(),g=lb(l.fieldTransforms,c,f.transformResults);m.setAll(g),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,i):r instanceof ls?function(l,c,f){if(!eh(l.precondition,c))return void c.convertToUnknownDocument(f.version);const m=lb(l.fieldTransforms,c,f.transformResults),g=c.data;g.setAll(AA(l)),g.setAll(m),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,i):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,i)}function Xl(r,t,i,a){return r instanceof fu?function(c,f,m,g){if(!eh(c.precondition,f))return m;const y=c.value.clone(),_=ub(c.fieldTransforms,g,f);return y.setAll(_),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,i,a):r instanceof ls?function(c,f,m,g){if(!eh(c.precondition,f))return m;const y=ub(c.fieldTransforms,g,f),_=f.data;return _.setAll(AA(c)),_.setAll(y),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(E=>E.field))}(r,t,i,a):function(c,f,m){return eh(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,i)}function Zx(r,t){let i=null;for(const a of r.fieldTransforms){const l=t.data.field(a.field),c=gA(a.transform,l||null);c!=null&&(i===null&&(i=Kn.empty()),i.set(a.field,c))}return i||null}function ob(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&Ao(a,l,(c,f)=>Yx(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class fu extends Uh{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class ls extends Uh{constructor(t,i,a,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function AA(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=r.data.field(i);t.set(i,a)}}),t}function lb(r,t,i){const a=new Map;te(r.length===i.length,32656,{Re:i.length,Ve:r.length});for(let l=0;l<i.length;l++){const c=r[l],f=c.transform,m=t.data.field(c.field);a.set(c.field,Fx(f,m,i[l]))}return a}function ub(r,t,i){const a=new Map;for(const l of r){const c=l.transform,f=i.data.field(l.field);a.set(l.field,Gx(c,f,t))}return a}class EA extends Uh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wx extends Uh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jx{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&Xx(c,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Xl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Xl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=pA();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let m=this.applyToLocalView(f,c.mutatedFields);m=i.has(l.key)?null:m;const g=_A(f,m);g!==null&&a.set(l.key,g),f.isValidDocument()||f.convertToNoDocument(Vt.min())}),a}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Ft())}isEqual(t){return this.batchId===t.batchId&&Ao(this.mutations,t.mutations,(i,a)=>ob(i,a))&&Ao(this.baseMutations,t.baseMutations,(i,a)=>ob(i,a))}}class cm{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){te(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let l=function(){return Ux}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,a[f].version);return new cm(t,i,a,l)}}/**
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
 */class tR{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class eR{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
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
 */var Be,Yt;function nR(r){switch(r){case nt.OK:return Ct(64938);case nt.CANCELLED:case nt.UNKNOWN:case nt.DEADLINE_EXCEEDED:case nt.RESOURCE_EXHAUSTED:case nt.INTERNAL:case nt.UNAVAILABLE:case nt.UNAUTHENTICATED:return!1;case nt.INVALID_ARGUMENT:case nt.NOT_FOUND:case nt.ALREADY_EXISTS:case nt.PERMISSION_DENIED:case nt.FAILED_PRECONDITION:case nt.ABORTED:case nt.OUT_OF_RANGE:case nt.UNIMPLEMENTED:case nt.DATA_LOSS:return!0;default:return Ct(15467,{code:r})}}function TA(r){if(r===void 0)return ui("GRPC error has no .code"),nt.UNKNOWN;switch(r){case Be.OK:return nt.OK;case Be.CANCELLED:return nt.CANCELLED;case Be.UNKNOWN:return nt.UNKNOWN;case Be.DEADLINE_EXCEEDED:return nt.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return nt.RESOURCE_EXHAUSTED;case Be.INTERNAL:return nt.INTERNAL;case Be.UNAVAILABLE:return nt.UNAVAILABLE;case Be.UNAUTHENTICATED:return nt.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return nt.INVALID_ARGUMENT;case Be.NOT_FOUND:return nt.NOT_FOUND;case Be.ALREADY_EXISTS:return nt.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return nt.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return nt.FAILED_PRECONDITION;case Be.ABORTED:return nt.ABORTED;case Be.OUT_OF_RANGE:return nt.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return nt.UNIMPLEMENTED;case Be.DATA_LOSS:return nt.DATA_LOSS;default:return Ct(39323,{code:r})}}(Yt=Be||(Be={}))[Yt.OK=0]="OK",Yt[Yt.CANCELLED=1]="CANCELLED",Yt[Yt.UNKNOWN=2]="UNKNOWN",Yt[Yt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yt[Yt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yt[Yt.NOT_FOUND=5]="NOT_FOUND",Yt[Yt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yt[Yt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yt[Yt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yt[Yt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yt[Yt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yt[Yt.ABORTED=10]="ABORTED",Yt[Yt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yt[Yt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yt[Yt.INTERNAL=13]="INTERNAL",Yt[Yt.UNAVAILABLE=14]="UNAVAILABLE",Yt[Yt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rR(){return new TextEncoder}/**
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
 */const iR=new ta([4294967295,4294967295],0);function cb(r){const t=rR().encode(r),i=new j_;return i.update(t),new Uint8Array(i.digest())}function hb(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new ta([i,a],0),new ta([l,c],0)]}class hm{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new $l(`Invalid padding: ${i}`);if(a<0)throw new $l(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new $l(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new $l(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=ta.fromNumber(this.ge)}ye(t,i,a){let l=t.add(i.multiply(ta.fromNumber(a)));return l.compare(iR)===1&&(l=new ta([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=cb(t),[a,l]=hb(i);for(let c=0;c<this.hashCount;c++){const f=this.ye(a,l,c);if(!this.we(f))return!1}return!0}static create(t,i,a){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new hm(c,l,i);return a.forEach(m=>f.insert(m)),f}insert(t){if(this.ge===0)return;const i=cb(t),[a,l]=hb(i);for(let c=0;c<this.hashCount;c++){const f=this.ye(a,l,c);this.Se(f)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class $l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ph{constructor(t,i,a,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const l=new Map;return l.set(t,du.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new Ph(Vt.min(),l,new Ee(Gt),ci(),Ft())}}class du{constructor(t,i,a,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new du(a,i,Ft(),Ft(),Ft())}}/**
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
 */class nh{constructor(t,i,a,l){this.be=t,this.removedTargetIds=i,this.key=a,this.De=l}}class wA{constructor(t,i){this.targetId=t,this.Ce=i}}class SA{constructor(t,i,a=ln.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=l}}class fb{constructor(){this.ve=0,this.Fe=db(),this.Me=ln.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ft(),i=Ft(),a=Ft();return this.Fe.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:a=a.add(l);break;default:Ct(38017,{changeType:c})}}),new du(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=db()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class aR{constructor(t){this.Ge=t,this.ze=new Map,this.je=ci(),this.Je=Pc(),this.He=Pc(),this.Ye=new Ee(Gt)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:Ct(56790,{state:t.state})}})}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach((a,l)=>{this.rt(l)&&i(l)})}st(t){const i=t.targetId,a=t.Ce.count,l=this.ot(i);if(l){const c=l.target;if(kp(c))if(a===0){const f=new wt(c.path);this.et(i,f,mn.newNoDocument(f,Vt.min()))}else te(a===1,20013,{expectedCount:a});else{const f=this._t(i);if(f!==a){const m=this.ut(t),g=m?this.ct(m,t,f):1;if(g!==0){this.it(i);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,y)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:l=0},hashCount:c=0}=i;let f,m;try{f=aa(a).toUint8Array()}catch(g){if(g instanceof Y_)return _o("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new hm(f,l,c)}catch(g){return _o(g instanceof $l?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let l=0;return a.forEach(c=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(m)||(this.et(i,c,null),l++)}),l}Tt(t){const i=new Map;this.ze.forEach((c,f)=>{const m=this.ot(f);if(m){if(c.current&&kp(m.target)){const g=new wt(m.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,mn.newNoDocument(g,t))}c.Be&&(i.set(f,c.ke()),c.qe())}});let a=Ft();this.He.forEach((c,f)=>{let m=!0;f.forEachWhile(g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(a=a.add(c))}),this.je.forEach((c,f)=>f.setReadTime(t));const l=new Ph(t,i,this.Ye,this.je,a);return this.je=ci(),this.Je=Pc(),this.He=Pc(),this.Ye=new Ee(Gt),l}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,i)?l.Qe(i,1):l.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new fb,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new He(Gt),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new He(Gt),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||_t("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new fb),this.Ge.getRemoteKeysForTarget(t).forEach(i=>{this.et(t,i,null)})}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Pc(){return new Ee(wt.comparator)}function db(){return new Ee(wt.comparator)}const sR={asc:"ASCENDING",desc:"DESCENDING"},oR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lR={and:"AND",or:"OR"};class uR{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Vp(r,t){return r.useProto3Json||Oh(t)?t:{value:t}}function _h(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xA(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function cR(r,t){return _h(r,t.toTimestamp())}function Ir(r){return te(!!r,49232),Vt.fromTimestamp(function(i){const a=ia(i);return new me(a.seconds,a.nanos)}(r))}function fm(r,t){return Mp(r,t).canonicalString()}function Mp(r,t){const i=function(l){return new fe(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?i:i.child(t)}function RA(r){const t=fe.fromString(r);return te(NA(t),10190,{key:t.toString()}),t}function Op(r,t){return fm(r.databaseId,t.path)}function sp(r,t){const i=RA(t);if(i.get(1)!==r.databaseId.projectId)throw new yt(nt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new yt(nt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new wt(DA(i))}function CA(r,t){return fm(r.databaseId,t)}function hR(r){const t=RA(r);return t.length===4?fe.emptyPath():DA(t)}function jp(r){return new fe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function DA(r){return te(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function pb(r,t,i){return{name:Op(r,t),fields:i.value.mapValue.fields}}function fR(r,t){let i;if("targetChange"in t){t.targetChange;const a=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ct(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,_){return y.useProto3Json?(te(_===void 0||typeof _=="string",58123),ln.fromBase64String(_||"")):(te(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ln.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const _=y.code===void 0?nt.UNKNOWN:TA(y.code);return new yt(_,y.message||"")}(f);i=new SA(a,l,c,m||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const l=sp(r,a.document.name),c=Ir(a.document.updateTime),f=a.document.createTime?Ir(a.document.createTime):Vt.min(),m=new Kn({mapValue:{fields:a.document.fields}}),g=mn.newFoundDocument(l,c,f,m),y=a.targetIds||[],_=a.removedTargetIds||[];i=new nh(y,_,g.key,g)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const l=sp(r,a.document),c=a.readTime?Ir(a.readTime):Vt.min(),f=mn.newNoDocument(l,c),m=a.removedTargetIds||[];i=new nh([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const l=sp(r,a.document),c=a.removedTargetIds||[];i=new nh([],c,l,null)}else{if(!("filter"in t))return Ct(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:l=0,unchangedNames:c}=a,f=new eR(l,c),m=a.targetId;i=new wA(m,f)}}return i}function dR(r,t){let i;if(t instanceof fu)i={update:pb(r,t.key,t.value)};else if(t instanceof EA)i={delete:Op(r,t.key)};else if(t instanceof ls)i={update:pb(r,t.key,t.data),updateMask:ER(t.fieldMask)};else{if(!(t instanceof Wx))return Ct(16599,{Vt:t.type});i={verify:Op(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(a=>function(c,f){const m=f.transform;if(m instanceof ou)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof lu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof uu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof bh)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw Ct(20930,{transform:f.transform})}(0,a))),t.precondition.isNone||(i.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:cR(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ct(27497)}(r,t.precondition)),i}function pR(r,t){return r&&r.length>0?(te(t!==void 0,14353),r.map(i=>function(l,c){let f=l.updateTime?Ir(l.updateTime):Ir(c);return f.isEqual(Vt.min())&&(f=Ir(c)),new Kx(f,l.transformResults||[])}(i,t))):[]}function mR(r,t){return{documents:[CA(r,t.path)]}}function gR(r,t){const i={structuredQuery:{}},a=t.path;let l;t.collectionGroup!==null?(l=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=CA(r,l);const c=function(y){if(y.length!==0)return kA(cr.create(y,"and"))}(t.filters);c&&(i.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(_=>function(x){return{field:ro(x.field),direction:bR(x.dir)}}(_))}(t.orderBy);f&&(i.structuredQuery.orderBy=f);const m=Vp(r,t.limit);return m!==null&&(i.structuredQuery.limit=m),t.startAt&&(i.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ft:i,parent:l}}function yR(r){let t=hR(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){te(a===1,65062);const _=i.from[0];_.allDescendants?l=_.collectionId:t=t.child(_.collectionId)}let c=[];i.where&&(c=function(E){const x=IA(E);return x instanceof cr&&iA(x)?x.getFilters():[x]}(i.where));let f=[];i.orderBy&&(f=function(E){return E.map(x=>function(q){return new su(io(q.field),function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(x))}(i.orderBy));let m=null;i.limit&&(m=function(E){let x;return x=typeof E=="object"?E.value:E,Oh(x)?null:x}(i.limit));let g=null;i.startAt&&(g=function(E){const x=!!E.before,j=E.values||[];return new yh(j,x)}(i.startAt));let y=null;return i.endAt&&(y=function(E){const x=!E.before,j=E.values||[];return new yh(j,x)}(i.endAt)),Ox(t,l,f,c,m,"F",g,y)}function vR(r,t){const i=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ct(28987,{purpose:l})}}(t.purpose);return i==null?null:{"goog-listen-tags":i}}function IA(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=io(i.unaryFilter.field);return ze.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=io(i.unaryFilter.field);return ze.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=io(i.unaryFilter.field);return ze.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=io(i.unaryFilter.field);return ze.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ct(61313);default:return Ct(60726)}}(r):r.fieldFilter!==void 0?function(i){return ze.create(io(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ct(58110);default:return Ct(50506)}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return cr.create(i.compositeFilter.filters.map(a=>IA(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Ct(1026)}}(i.compositeFilter.op))}(r):Ct(30097,{filter:r})}function bR(r){return sR[r]}function _R(r){return oR[r]}function AR(r){return lR[r]}function ro(r){return{fieldPath:r.canonicalString()}}function io(r){return sn.fromServerFormat(r.fieldPath)}function kA(r){return r instanceof ze?function(i){if(i.op==="=="){if(eb(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NAN"}};if(tb(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(eb(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NOT_NAN"}};if(tb(i.value))return{unaryFilter:{field:ro(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(i.field),op:_R(i.op),value:i.value}}}(r):r instanceof cr?function(i){const a=i.getFilters().map(l=>kA(l));return a.length===1?a[0]:{compositeFilter:{op:AR(i.op),filters:a}}}(r):Ct(54877,{filter:r})}function ER(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function NA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Xi{constructor(t,i,a,l,c=Vt.min(),f=Vt.min(),m=ln.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(t){return new Xi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class TR{constructor(t){this.yt=t}}function wR(r){const t=yR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?vh(t,t.limit,"L"):t}/**
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
 */class SR{constructor(){this.Cn=new xR}addToCollectionParentIndex(t,i){return this.Cn.add(i),at.resolve()}getCollectionParents(t,i){return at.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return at.resolve()}deleteFieldIndex(t,i){return at.resolve()}deleteAllFieldIndexes(t){return at.resolve()}createTargetIndexes(t,i){return at.resolve()}getDocumentsMatchingTarget(t,i){return at.resolve(null)}getIndexType(t,i){return at.resolve(0)}getFieldIndexes(t,i){return at.resolve([])}getNextCollectionGroupToUpdate(t){return at.resolve(null)}getMinOffset(t,i){return at.resolve(ra.min())}getMinOffsetFromCollectionGroup(t,i){return at.resolve(ra.min())}updateCollectionGroup(t,i,a){return at.resolve()}updateIndexEntries(t,i){return at.resolve()}}class xR{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new He(fe.comparator),c=!l.has(a);return this.index[i]=l.add(a),c}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new He(fe.comparator)).toArray()}}/**
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
 */const mb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VA=41943040;class wn{static withCacheSize(t){return new wn(t,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(VA,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
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
 */class wo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new wo(0)}static cr(){return new wo(-1)}}/**
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
 */const gb="LruGarbageCollector",RR=1048576;function yb([r,t],[i,a]){const l=Gt(r,i);return l===0?Gt(t,a):l}class CR{constructor(t){this.Ir=t,this.buffer=new He(yb),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();yb(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){_t(gb,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){ko(i)?_t(gb,"Ignoring IndexedDB error during garbage collection: ",i):await Io(i)}await this.Vr(3e5)})}}class IR{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next(a=>Math.floor(i/100*a))}nthSequenceNumber(t,i){if(i===0)return at.resolve(Mh.ce);const a=new CR(i);return this.mr.forEachTarget(t,l=>a.Ar(l.sequenceNumber)).next(()=>this.mr.pr(t,l=>a.Ar(l))).next(()=>a.maxValue)}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(_t("LruGarbageCollector","Garbage collection skipped; disabled"),at.resolve(mb)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(_t("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mb):this.yr(t,i))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,l,c,f,m,g,y;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(_t("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),l=this.params.maximumSequenceNumbersToCollect):l=E,f=Date.now(),this.nthSequenceNumber(t,l))).next(E=>(a=E,m=Date.now(),this.removeTargets(t,a,i))).next(E=>(c=E,g=Date.now(),this.removeOrphanedDocuments(t,a))).next(E=>(y=Date.now(),eo()<=Kt.DEBUG&&_t("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${l} in `+(m-f)+`ms
	Removed ${c} targets in `+(g-m)+`ms
	Removed ${E} documents in `+(y-g)+`ms
Total Duration: ${y-_}ms`),at.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:E})))}}function kR(r,t){return new IR(r,t)}/**
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
 */class NR{constructor(){this.changes=new os(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,mn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?at.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class VR{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class MR{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(a=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(a!==null&&Xl(a.mutation,l,lr.empty(),me.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.getLocalViewOfDocuments(t,a,Ft()).next(()=>a))}getLocalViewOfDocuments(t,i,a=Ft()){const l=Wa();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,a).next(c=>{let f=Pl();return c.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,i){const a=Wa();return this.populateOverlays(t,a,i).next(()=>this.computeViews(t,i,a,Ft()))}populateOverlays(t,i,a){const l=[];return a.forEach(c=>{i.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,m)=>{i.set(f,m)})})}computeViews(t,i,a,l){let c=ci();const f=Kl(),m=function(){return Kl()}();return i.forEach((g,y)=>{const _=a.get(y.key);l.has(y.key)&&(_===void 0||_.mutation instanceof ls)?c=c.insert(y.key,y):_!==void 0?(f.set(y.key,_.mutation.getFieldMask()),Xl(_.mutation,y,_.mutation.getFieldMask(),me.now())):f.set(y.key,lr.empty())}),this.recalculateAndSaveOverlays(t,c).next(g=>(g.forEach((y,_)=>f.set(y,_)),i.forEach((y,_)=>m.set(y,new VR(_,f.get(y)??null))),m))}recalculateAndSaveOverlays(t,i){const a=Kl();let l=new Ee((f,m)=>f-m),c=Ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=i.get(g);if(y===null)return;let _=a.get(g)||lr.empty();_=m.applyToLocalView(y,_),a.set(g,_);const E=(l.get(m.batchId)||Ft()).add(g);l=l.insert(m.batchId,E)})}).next(()=>{const f=[],m=l.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,_=g.value,E=pA();_.forEach(x=>{if(!c.has(x)){const j=_A(i.get(x),a.get(x));j!==null&&E.set(x,j),c=c.add(x)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,E))}return at.waitFor(f)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,i,a,l){return function(f){return wt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):uA(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-c.size):at.resolve(Wa());let m=nu,g=c;return f.next(y=>at.forEach(y,(_,E)=>(m<E.largestBatchId&&(m=E.largestBatchId),c.get(_)?at.resolve():this.remoteDocumentCache.getEntry(t,_).next(x=>{g=g.insert(_,x)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,g,y,Ft())).next(_=>({batchId:m,changes:dA(_)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new wt(i)).next(a=>{let l=Pl();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const c=i.collectionGroup;let f=Pl();return this.indexManager.getCollectionParents(t,c).next(m=>at.forEach(m,g=>{const y=function(E,x){return new No(x,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(i,g.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,a,l).next(_=>{_.forEach((E,x)=>{f=f.insert(E,x)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,i,a,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,c,l))).next(f=>{c.forEach((g,y)=>{const _=y.getKey();f.get(_)===null&&(f=f.insert(_,mn.newInvalidDocument(_)))});let m=Pl();return f.forEach((g,y)=>{const _=c.get(g);_!==void 0&&Xl(_.mutation,y,lr.empty(),me.now()),Lh(i,y)&&(m=m.insert(g,y))}),m})}}/**
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
 */class OR{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return at.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Ir(l.createTime)}}(i)),at.resolve()}getNamedQuery(t,i){return at.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,function(l){return{name:l.name,query:wR(l.bundledQuery),readTime:Ir(l.readTime)}}(i)),at.resolve()}}/**
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
 */class jR{constructor(){this.overlays=new Ee(wt.comparator),this.qr=new Map}getOverlay(t,i){return at.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Wa();return at.forEach(i,l=>this.getOverlay(t,l).next(c=>{c!==null&&a.set(l,c)})).next(()=>a)}saveOverlays(t,i,a){return a.forEach((l,c)=>{this.St(t,i,c)}),at.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.qr.delete(a)),at.resolve()}getOverlaysForCollection(t,i,a){const l=Wa(),c=i.length+1,f=new wt(i.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>a&&l.set(g.getKey(),g)}return at.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let c=new Ee((y,_)=>y-_);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>a){let _=c.get(y.largestBatchId);_===null&&(_=Wa(),c=c.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const m=Wa(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,_)=>m.set(y,_)),!(m.size()>=l)););return at.resolve(m)}St(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const f=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new tR(i,a));let c=this.qr.get(i);c===void 0&&(c=Ft(),this.qr.set(i,c)),this.qr.set(i,c.add(a.key))}}/**
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
 */class BR{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(t){return at.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,at.resolve()}}/**
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
 */class dm{constructor(){this.Qr=new He(Xe.$r),this.Ur=new He(Xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Xe(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach(a=>this.addReference(a,i))}removeReference(t,i){this.Gr(new Xe(t,i))}zr(t,i){t.forEach(a=>this.removeReference(a,i))}jr(t){const i=new wt(new fe([])),a=new Xe(i,t),l=new Xe(i,t+1),c=[];return this.Ur.forEachInRange([a,l],f=>{this.Gr(f),c.push(f.key)}),c}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new wt(new fe([])),a=new Xe(i,t),l=new Xe(i,t+1);let c=Ft();return this.Ur.forEachInRange([a,l],f=>{c=c.add(f.key)}),c}containsKey(t){const i=new Xe(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Xe{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return wt.comparator(t.key,i.key)||Gt(t.Yr,i.Yr)}static Kr(t,i){return Gt(t.Yr,i.Yr)||wt.comparator(t.key,i.key)}}/**
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
 */class LR{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new He(Xe.$r)}checkEmpty(t){return at.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new Jx(c,i,a,l);this.mutationQueue.push(f);for(const m of l)this.Zr=this.Zr.add(new Xe(m.key,c)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return at.resolve(f)}lookupMutationBatch(t,i){return at.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.ei(a),c=l<0?0:l;return at.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return at.resolve(this.mutationQueue.length===0?im:this.tr-1)}getAllMutationBatches(t){return at.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Xe(i,0),l=new Xe(i,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([a,l],f=>{const m=this.Xr(f.Yr);c.push(m)}),at.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new He(Gt);return i.forEach(l=>{const c=new Xe(l,0),f=new Xe(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],m=>{a=a.add(m.Yr)})}),at.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let c=a;wt.isDocumentKey(c)||(c=c.child(""));const f=new Xe(new wt(c),0);let m=new He(Gt);return this.Zr.forEachWhile(g=>{const y=g.key.path;return!!a.isPrefixOf(y)&&(y.length===l&&(m=m.add(g.Yr)),!0)},f),at.resolve(this.ti(m))}ti(t){const i=[];return t.forEach(a=>{const l=this.Xr(a);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){te(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return at.forEach(i.mutations,l=>{const c=new Xe(l.key,i.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Zr=a})}ir(t){}containsKey(t,i){const a=new Xe(i,0),l=this.Zr.firstAfterOrEqual(a);return at.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,at.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class zR{constructor(t){this.ri=t,this.docs=function(){return new Ee(wt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),c=l?l.size:0,f=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return at.resolve(a?a.document.mutableCopy():mn.newInvalidDocument(i))}getEntries(t,i){let a=ci();return i.forEach(l=>{const c=this.docs.get(l);a=a.insert(l,c?c.document.mutableCopy():mn.newInvalidDocument(l))}),at.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let c=ci();const f=i.path,m=new wt(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:_}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||dx(fx(_),a)<=0||(l.has(_.key)||Lh(i,_))&&(c=c.insert(_.key,_.mutableCopy()))}return at.resolve(c)}getAllFromCollectionGroup(t,i,a,l){Ct(9500)}ii(t,i){return at.forEach(this.docs,a=>i(a))}newChangeBuffer(t){return new UR(this)}getSize(t){return at.resolve(this.size)}}class UR extends NR{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(a)}),at.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
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
 */class PR{constructor(t){this.persistence=t,this.si=new os(i=>om(i),lm),this.lastRemoteSnapshotVersion=Vt.min(),this.highestTargetId=0,this.oi=0,this._i=new dm,this.targetCount=0,this.ai=wo.ur()}forEachTarget(t,i){return this.si.forEach((a,l)=>i(l)),at.resolve()}getLastRemoteSnapshotVersion(t){return at.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return at.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),at.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),at.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new wo(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,at.resolve()}updateTargetData(t,i){return this.Pr(i),at.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,at.resolve()}removeTargets(t,i,a){let l=0;const c=[];return this.si.forEach((f,m)=>{m.sequenceNumber<=i&&a.get(m.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(t,m.targetId)),l++)}),at.waitFor(c).next(()=>l)}getTargetCount(t){return at.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return at.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),at.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),at.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),at.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return at.resolve(a)}containsKey(t,i){return at.resolve(this._i.containsKey(i))}}/**
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
 */class MA{constructor(t,i){this.ui={},this.overlays={},this.ci=new Mh(0),this.li=!1,this.li=!0,this.hi=new BR,this.referenceDelegate=t(this),this.Pi=new PR(this),this.indexManager=new SR,this.remoteDocumentCache=function(l){return new zR(l)}(a=>this.referenceDelegate.Ti(a)),this.serializer=new TR(i),this.Ii=new OR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new jR,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new LR(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){_t("MemoryPersistence","Starting transaction:",t);const l=new $R(this.ci.next());return this.referenceDelegate.Ei(),a(l).next(c=>this.referenceDelegate.di(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}Ai(t,i){return at.or(Object.values(this.ui).map(a=>()=>a.containsKey(t,i)))}}class $R extends mx{constructor(t){super(),this.currentSequenceNumber=t}}class pm{constructor(t){this.persistence=t,this.Ri=new dm,this.Vi=null}static mi(t){return new pm(t)}get fi(){if(this.Vi)return this.Vi;throw Ct(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),at.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),at.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),at.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach(l=>this.fi.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(c=>this.fi.add(c.toString()))}).next(()=>a.removeTargetData(t,i))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return at.forEach(this.fi,a=>{const l=wt.fromPath(a);return this.gi(t,l).next(c=>{c||i.removeEntry(l,Vt.min())})}).next(()=>(this.Vi=null,i.apply(t)))}updateLimboDocument(t,i){return this.gi(t,i).next(a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())})}Ti(t){return 0}gi(t,i){return at.or([()=>at.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Ah{constructor(t,i){this.persistence=t,this.pi=new os(a=>vx(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=kR(this,i)}static mi(t,i){return new Ah(t,i)}Ei(){}di(t){return at.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>i.next(l=>a+l))}wr(t){let i=0;return this.pr(t,a=>{i++}).next(()=>i)}pr(t,i){return at.forEach(this.pi,(a,l)=>this.br(t,a,l).next(c=>c?at.resolve():i(l)))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,f=>this.br(t,f,i).next(m=>{m||(a++,c.removeEntry(f,Vt.min()))})).next(()=>c.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),at.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),at.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),at.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),at.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=Jc(t.data.value)),i}br(t,i,a){return at.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.pi.get(i);return at.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class mm{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=l}static As(t,i){let a=Ft(),l=Ft();for(const c of i.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new mm(t,i.fromCache,a,l)}}/**
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
 */class qR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class HR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return jw()?8:gx(Mw())>0?6:4}()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,l){const c={result:null};return this.ys(t,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ws(t,i,l,a).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new qR;return this.Ss(t,i,f).next(m=>{if(c.result=m,this.Vs)return this.bs(t,i,f,m.size)})}).next(()=>c.result)}bs(t,i,a,l){return a.documentReadCount<this.fs?(eo()<=Kt.DEBUG&&_t("QueryEngine","SDK will not create cache indexes for query:",no(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),at.resolve()):(eo()<=Kt.DEBUG&&_t("QueryEngine","Query:",no(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?(eo()<=Kt.DEBUG&&_t("QueryEngine","The SDK decides to create cache indexes for query:",no(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Dr(i))):at.resolve())}ys(t,i){if(ab(i))return at.resolve(null);let a=Dr(i);return this.indexManager.getIndexType(t,a).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=vh(i,null,"F"),a=Dr(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next(c=>{const f=Ft(...c);return this.ps.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,a).next(g=>{const y=this.Ds(i,m);return this.Cs(i,y,f,g.readTime)?this.ys(t,vh(i,null,"F")):this.vs(t,y,i,g)}))})))}ws(t,i,a,l){return ab(i)||l.isEqual(Vt.min())?at.resolve(null):this.ps.getDocuments(t,a).next(c=>{const f=this.Ds(i,c);return this.Cs(i,f,a,l)?at.resolve(null):(eo()<=Kt.DEBUG&&_t("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),no(i)),this.vs(t,f,i,hx(l,nu)).next(m=>m))})}Ds(t,i){let a=new He(hA(t));return i.forEach((l,c)=>{Lh(t,c)&&(a=a.add(c))}),a}Cs(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,i,a){return eo()<=Kt.DEBUG&&_t("QueryEngine","Using full collection scan to execute query:",no(i)),this.ps.getDocumentsMatchingQuery(t,i,ra.min(),a)}vs(t,i,a,l){return this.ps.getDocumentsMatchingQuery(t,a,l).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const gm="LocalStore",GR=3e8;class FR{constructor(t,i,a,l){this.persistence=t,this.Fs=i,this.serializer=l,this.Ms=new Ee(Gt),this.xs=new os(c=>om(c),lm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new MR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ms))}}function QR(r,t,i,a){return new FR(r,t,i,a)}async function OA(r,t){const i=jt(r);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next(c=>(l=c,i.Bs(t),i.mutationQueue.getAllMutationBatches(a))).next(c=>{const f=[],m=[];let g=Ft();for(const y of l){f.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}for(const y of c){m.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}return i.localDocuments.getDocuments(a,g).next(y=>({Ls:y,removedBatchIds:f,addedBatchIds:m}))})})}function YR(r,t){const i=jt(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const l=t.batch.keys(),c=i.Ns.newChangeBuffer({trackRemovals:!0});return function(m,g,y,_){const E=y.batch,x=E.keys();let j=at.resolve();return x.forEach(q=>{j=j.next(()=>_.getEntry(g,q)).next(K=>{const G=y.docVersions.get(q);te(G!==null,48541),K.version.compareTo(G)<0&&(E.applyToRemoteDocument(K,y),K.isValidDocument()&&(K.setReadTime(y.commitVersion),_.addEntry(K)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,E))}(i,a,t,c).next(()=>c.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(m){let g=Ft();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(t))).next(()=>i.localDocuments.getDocuments(a,l))})}function jA(r){const t=jt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Pi.getLastRemoteSnapshotVersion(i))}function KR(r,t){const i=jt(r),a=t.snapshotVersion;let l=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=i.Ns.newChangeBuffer({trackRemovals:!0});l=i.Ms;const m=[];t.targetChanges.forEach((_,E)=>{const x=l.get(E);if(!x)return;m.push(i.Pi.removeMatchingKeys(c,_.removedDocuments,E).next(()=>i.Pi.addMatchingKeys(c,_.addedDocuments,E)));let j=x.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(E)!==null?j=j.withResumeToken(ln.EMPTY_BYTE_STRING,Vt.min()).withLastLimboFreeSnapshotVersion(Vt.min()):_.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(_.resumeToken,a)),l=l.insert(E,j),function(K,G,rt){return K.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=GR?!0:rt.addedDocuments.size+rt.modifiedDocuments.size+rt.removedDocuments.size>0}(x,j,_)&&m.push(i.Pi.updateTargetData(c,j))});let g=ci(),y=Ft();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(c,_))}),m.push(XR(c,f,t.documentUpdates).next(_=>{g=_.ks,y=_.qs})),!a.isEqual(Vt.min())){const _=i.Pi.getLastRemoteSnapshotVersion(c).next(E=>i.Pi.setTargetsMetadata(c,c.currentSequenceNumber,a));m.push(_)}return at.waitFor(m).next(()=>f.apply(c)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,g,y)).next(()=>g)}).then(c=>(i.Ms=l,c))}function XR(r,t,i){let a=Ft(),l=Ft();return i.forEach(c=>a=a.add(c)),t.getEntries(r,a).next(c=>{let f=ci();return i.forEach((m,g)=>{const y=c.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(m)),g.isNoDocument()&&g.version.isEqual(Vt.min())?(t.removeEntry(m,g.readTime),f=f.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(g),f=f.insert(m,g)):_t(gm,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)}),{ks:f,qs:l}})}function ZR(r,t){const i=jt(r);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=im),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}function WR(r,t){const i=jt(r);return i.persistence.runTransaction("Allocate target","readwrite",a=>{let l;return i.Pi.getTargetData(a,t).next(c=>c?(l=c,at.resolve(l)):i.Pi.allocateTargetId(a).next(f=>(l=new Xi(t,f,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,l).next(()=>l))))}).then(a=>{const l=i.Ms.get(a.targetId);return(l===null||a.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a})}async function Bp(r,t,i){const a=jt(r),l=a.Ms.get(t),c=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",c,f=>a.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!ko(f))throw f;_t(gm,`Failed to update sequence numbers for target ${t}: ${f}`)}a.Ms=a.Ms.remove(t),a.xs.delete(l.target)}function vb(r,t,i){const a=jt(r);let l=Vt.min(),c=Ft();return a.persistence.runTransaction("Execute query","readwrite",f=>function(g,y,_){const E=jt(g),x=E.xs.get(_);return x!==void 0?at.resolve(E.Ms.get(x)):E.Pi.getTargetData(y,_)}(a,f,Dr(t)).next(m=>{if(m)return l=m.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(f,m.targetId).next(g=>{c=g})}).next(()=>a.Fs.getDocumentsMatchingQuery(f,t,i?l:Vt.min(),i?c:Ft())).next(m=>(JR(a,Bx(t),m),{documents:m,Qs:c})))}function JR(r,t,i){let a=r.Os.get(t)||Vt.min();i.forEach((l,c)=>{c.readTime.compareTo(a)>0&&(a=c.readTime)}),r.Os.set(t,a)}class bb{constructor(){this.activeTargetIds=qx()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class t2{constructor(){this.Mo=new bb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new bb,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class e2{Oo(t){}shutdown(){}}/**
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
 */const _b="ConnectivityMonitor";class Ab{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){_t(_b,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){_t(_b,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $c=null;function Lp(){return $c===null?$c=function(){return 268435456+Math.round(2147483648*Math.random())}():$c++,"0x"+$c.toString(16)}/**
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
 */const op="RestConnection",n2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class r2{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===mh?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(t,i,a,l,c){const f=Lp(),m=this.zo(t,i.toUriEncodedString());_t(op,`Sending RPC '${t}' ${f}:`,m,a);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,l,c);const{host:y}=new URL(m),_=tm(y);return this.Jo(t,m,g,a,_).then(E=>(_t(op,`Received RPC '${t}' ${f}: `,E),E),E=>{throw _o(op,`RPC '${t}' ${f} failed with error: `,E,"url: ",m,"request:",a),E})}Ho(t,i,a,l,c,f){return this.Go(t,i,a,l,c)}jo(t,i,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Do}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),a&&a.headers.forEach((l,c)=>t[c]=l)}zo(t,i){const a=n2[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
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
 */class i2{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const dn="WebChannelConnection";class a2 extends r2{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,l,c){const f=Lp();return new Promise((m,g)=>{const y=new B_;y.setWithCredentials(!0),y.listenOnce(L_.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Wc.NO_ERROR:const E=y.getResponseJson();_t(dn,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(E)),m(E);break;case Wc.TIMEOUT:_t(dn,`RPC '${t}' ${f} timed out`),g(new yt(nt.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const x=y.getStatus();if(_t(dn,`RPC '${t}' ${f} failed with status:`,x,"response text:",y.getResponseText()),x>0){let j=y.getResponseJson();Array.isArray(j)&&(j=j[0]);const q=j==null?void 0:j.error;if(q&&q.status&&q.message){const K=function(rt){const J=rt.toLowerCase().replace(/_/g,"-");return Object.values(nt).indexOf(J)>=0?J:nt.UNKNOWN}(q.status);g(new yt(K,q.message))}else g(new yt(nt.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new yt(nt.UNAVAILABLE,"Connection failed."));break;default:Ct(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{_t(dn,`RPC '${t}' ${f} completed.`)}});const _=JSON.stringify(l);_t(dn,`RPC '${t}' ${f} sending request:`,l),y.send(i,"POST",_,a,15)})}T_(t,i,a){const l=Lp(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=P_(),m=U_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,i,a),g.encodeInitMessageHeaders=!0;const _=c.join("");_t(dn,`Creating RPC '${t}' stream ${l}: ${_}`,g);const E=f.createWebChannel(_,g);this.I_(E);let x=!1,j=!1;const q=new i2({Yo:G=>{j?_t(dn,`Not sending because RPC '${t}' stream ${l} is closed:`,G):(x||(_t(dn,`Opening RPC '${t}' stream ${l} transport.`),E.open(),x=!0),_t(dn,`RPC '${t}' stream ${l} sending:`,G),E.send(G))},Zo:()=>E.close()}),K=(G,rt,J)=>{G.listen(rt,Z=>{try{J(Z)}catch(ot){setTimeout(()=>{throw ot},0)}})};return K(E,Ul.EventType.OPEN,()=>{j||(_t(dn,`RPC '${t}' stream ${l} transport opened.`),q.o_())}),K(E,Ul.EventType.CLOSE,()=>{j||(j=!0,_t(dn,`RPC '${t}' stream ${l} transport closed`),q.a_(),this.E_(E))}),K(E,Ul.EventType.ERROR,G=>{j||(j=!0,_o(dn,`RPC '${t}' stream ${l} transport errored. Name:`,G.name,"Message:",G.message),q.a_(new yt(nt.UNAVAILABLE,"The operation could not be completed")))}),K(E,Ul.EventType.MESSAGE,G=>{var rt;if(!j){const J=G.data[0];te(!!J,16349);const Z=J,ot=(Z==null?void 0:Z.error)||((rt=Z[0])==null?void 0:rt.error);if(ot){_t(dn,`RPC '${t}' stream ${l} received error:`,ot);const st=ot.status;let lt=function(R){const V=Be[R];if(V!==void 0)return TA(V)}(st),S=ot.message;lt===void 0&&(lt=nt.INTERNAL,S="Unknown error status: "+st+" with message "+ot.message),j=!0,q.a_(new yt(lt,S)),E.close()}else _t(dn,`RPC '${t}' stream ${l} received:`,J),q.u_(J)}}),K(m,z_.STAT_EVENT,G=>{G.stat===xp.PROXY?_t(dn,`RPC '${t}' stream ${l} detected buffering proxy`):G.stat===xp.NOPROXY&&_t(dn,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{q.__()},0),q}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(i=>i===t)}}function lp(){return typeof document<"u"?document:null}/**
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
 */function $h(r){return new uR(r,!0)}/**
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
 */class BA{constructor(t,i,a=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&_t("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Eb="PersistentStream";class LA{constructor(t,i,a,l,c,f,m,g){this.Mi=t,this.S_=a,this.b_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new BA(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===nt.RESOURCE_EXHAUSTED?(ui(i.toString()),ui("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===nt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.D_===i&&this.G_(a,l)},a=>{t(()=>{const l=new yt(nt.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)})})}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo(()=>{a(()=>this.listener.Xo())}),this.stream.t_(()=>{a(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(l=>{a(()=>this.z_(l))}),this.stream.onMessage(l=>{a(()=>++this.F_==1?this.J_(l):this.onNext(l))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return _t(Eb,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget(()=>this.D_===t?i():(_t(Eb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s2 extends LA{constructor(t,i,a,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,l,f),this.serializer=c}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=fR(this.serializer,t),a=function(c){if(!("targetChange"in c))return Vt.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Vt.min():f.readTime?Ir(f.readTime):Vt.min()}(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=jp(this.serializer),i.addTarget=function(c,f){let m;const g=f.target;if(m=kp(g)?{documents:mR(c,g)}:{query:gR(c,g).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=xA(c,f.resumeToken);const y=Vp(c,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Vt.min())>0){m.readTime=_h(c,f.snapshotVersion.toTimestamp());const y=Vp(c,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const a=vR(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=jp(this.serializer),i.removeTarget=t,this.q_(i)}}class o2 extends LA{constructor(t,i,a,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return te(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,te(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){te(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=pR(t.writeResults,t.commitTime),a=Ir(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=jp(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map(a=>dR(this.serializer,a))};this.q_(i)}}/**
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
 */class l2{}class u2 extends l2{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new yt(nt.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Go(t,Mp(i,a),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new yt(nt.UNKNOWN,c.toString())})}Ho(t,i,a,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Ho(t,Mp(i,a),l,f,m,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new yt(nt.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class c2{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ui(i),this.aa=!1):_t("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const is="RemoteStore";class h2{constructor(t,i,a,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo(f=>{a.enqueueAndForget(async()=>{us(this)&&(_t(is,"Restarting streams for network reachability change."),await async function(g){const y=jt(g);y.Ea.add(4),await pu(y),y.Ra.set("Unknown"),y.Ea.delete(4),await qh(y)}(this))})}),this.Ra=new c2(a,l)}}async function qh(r){if(us(r))for(const t of r.da)await t(!0)}async function pu(r){for(const t of r.da)await t(!1)}function zA(r,t){const i=jt(r);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),_m(i)?bm(i):Vo(i).O_()&&vm(i,t))}function ym(r,t){const i=jt(r),a=Vo(i);i.Ia.delete(t),a.O_()&&UA(i,t),i.Ia.size===0&&(a.O_()?a.L_():us(i)&&i.Ra.set("Unknown"))}function vm(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Vt.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Vo(r).Y_(t)}function UA(r,t){r.Va.Ue(t),Vo(r).Z_(t)}function bm(r){r.Va=new aR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Vo(r).start(),r.Ra.ua()}function _m(r){return us(r)&&!Vo(r).x_()&&r.Ia.size>0}function us(r){return jt(r).Ea.size===0}function PA(r){r.Va=void 0}async function f2(r){r.Ra.set("Online")}async function d2(r){r.Ia.forEach((t,i)=>{vm(r,t)})}async function p2(r,t){PA(r),_m(r)?(r.Ra.ha(t),bm(r)):r.Ra.set("Unknown")}async function m2(r,t,i){if(r.Ra.set("Online"),t instanceof SA&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const m of c.targetIds)l.Ia.has(m)&&(await l.remoteSyncer.rejectListen(m,f),l.Ia.delete(m),l.Va.removeTarget(m))}(r,t)}catch(a){_t(is,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Eh(r,a)}else if(t instanceof nh?r.Va.Ze(t):t instanceof wA?r.Va.st(t):r.Va.tt(t),!i.isEqual(Vt.min()))try{const a=await jA(r.localStore);i.compareTo(a)>=0&&await function(c,f){const m=c.Va.Tt(f);return m.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const _=c.Ia.get(y);_&&c.Ia.set(y,_.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,y)=>{const _=c.Ia.get(g);if(!_)return;c.Ia.set(g,_.withResumeToken(ln.EMPTY_BYTE_STRING,_.snapshotVersion)),UA(c,g);const E=new Xi(_.target,g,y,_.sequenceNumber);vm(c,E)}),c.remoteSyncer.applyRemoteEvent(m)}(r,i)}catch(a){_t(is,"Failed to raise snapshot:",a),await Eh(r,a)}}async function Eh(r,t,i){if(!ko(t))throw t;r.Ea.add(1),await pu(r),r.Ra.set("Offline"),i||(i=()=>jA(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{_t(is,"Retrying IndexedDB access"),await i(),r.Ea.delete(1),await qh(r)})}function $A(r,t){return t().catch(i=>Eh(r,i,t))}async function Hh(r){const t=jt(r),i=oa(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:im;for(;g2(t);)try{const l=await ZR(t.localStore,a);if(l===null){t.Ta.length===0&&i.L_();break}a=l.batchId,y2(t,l)}catch(l){await Eh(t,l)}qA(t)&&HA(t)}function g2(r){return us(r)&&r.Ta.length<10}function y2(r,t){r.Ta.push(t);const i=oa(r);i.O_()&&i.X_&&i.ea(t.mutations)}function qA(r){return us(r)&&!oa(r).x_()&&r.Ta.length>0}function HA(r){oa(r).start()}async function v2(r){oa(r).ra()}async function b2(r){const t=oa(r);for(const i of r.Ta)t.ea(i.mutations)}async function _2(r,t,i){const a=r.Ta.shift(),l=cm.from(a,t,i);await $A(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await Hh(r)}async function A2(r,t){t&&oa(r).X_&&await async function(a,l){if(function(f){return nR(f)&&f!==nt.ABORTED}(l.code)){const c=a.Ta.shift();oa(a).B_(),await $A(a,()=>a.remoteSyncer.rejectFailedWrite(c.batchId,l)),await Hh(a)}}(r,t),qA(r)&&HA(r)}async function Tb(r,t){const i=jt(r);i.asyncQueue.verifyOperationInProgress(),_t(is,"RemoteStore received new credentials");const a=us(i);i.Ea.add(3),await pu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await qh(i)}async function E2(r,t){const i=jt(r);t?(i.Ea.delete(2),await qh(i)):t||(i.Ea.add(2),await pu(i),i.Ra.set("Unknown"))}function Vo(r){return r.ma||(r.ma=function(i,a,l){const c=jt(i);return c.sa(),new s2(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Xo:f2.bind(null,r),t_:d2.bind(null,r),r_:p2.bind(null,r),H_:m2.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),_m(r)?bm(r):r.Ra.set("Unknown")):(await r.ma.stop(),PA(r))})),r.ma}function oa(r){return r.fa||(r.fa=function(i,a,l){const c=jt(i);return c.sa(),new o2(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:v2.bind(null,r),r_:A2.bind(null,r),ta:b2.bind(null,r),na:_2.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await Hh(r)):(await r.fa.stop(),r.Ta.length>0&&(_t(is,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class Am{constructor(t,i,a,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=c,this.deferred=new ea,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,c){const f=Date.now()+a,m=new Am(t,i,f,l,c);return m.start(a),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new yt(nt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Em(r,t){if(ui("AsyncQueue",`${t}: ${r}`),ko(r))return new yt(nt.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class co{static emptySet(t){return new co(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||wt.comparator(i.key,a.key):(i,a)=>wt.comparator(i.key,a.key),this.keyedMap=Pl(),this.sortedSet=new Ee(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((i,a)=>(t(i),!1))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof co)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=a.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(i=>{t.push(i.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new co;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
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
 */class wb{constructor(){this.ga=new Ee(wt.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):Ct(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal((i,a)=>{t.push(a)}),t}}class So{constructor(t,i,a,l,c,f,m,g,y){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(t,i,a,l,c){const f=[];return i.forEach(m=>{f.push({type:0,doc:m})}),new So(t,i,co.emptySet(i),f,a,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==a[l].type||!i[l].doc.isEqual(a[l].doc))return!1;return!0}}/**
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
 */class T2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class w2{constructor(){this.queries=Sb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=jt(i),c=l.queries;l.queries=Sb(),c.forEach((f,m)=>{for(const g of m.Sa)g.onError(a)})})(this,new yt(nt.ABORTED,"Firestore shutting down"))}}function Sb(){return new os(r=>cA(r),Bh)}async function S2(r,t){const i=jt(r);let a=3;const l=t.query;let c=i.queries.get(l);c?!c.ba()&&t.Da()&&(a=2):(c=new T2,a=t.Da()?0:1);try{switch(a){case 0:c.wa=await i.onListen(l,!0);break;case 1:c.wa=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(f){const m=Em(f,`Initialization of query '${no(t.query)}' failed`);return void t.onError(m)}i.queries.set(l,c),c.Sa.push(t),t.va(i.onlineState),c.wa&&t.Fa(c.wa)&&Tm(i)}async function x2(r,t){const i=jt(r),a=t.query;let l=3;const c=i.queries.get(a);if(c){const f=c.Sa.indexOf(t);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function R2(r,t){const i=jt(r);let a=!1;for(const l of t){const c=l.query,f=i.queries.get(c);if(f){for(const m of f.Sa)m.Fa(l)&&(a=!0);f.wa=l}}a&&Tm(i)}function C2(r,t,i){const a=jt(r),l=a.queries.get(t);if(l)for(const c of l.Sa)c.onError(i);a.queries.delete(t)}function Tm(r){r.Ca.forEach(t=>{t.next()})}var zp,xb;(xb=zp||(zp={})).Ma="default",xb.Cache="cache";class D2{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const l of t.docChanges)l.type!==3&&a.push(l);t=new So(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=So.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==zp.Cache}}/**
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
 */class GA{constructor(t){this.key=t}}class FA{constructor(t){this.key=t}}class I2{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ft(),this.mutatedKeys=Ft(),this.eu=hA(t),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new wb,l=i?i.tu:this.tu;let c=i?i.mutatedKeys:this.mutatedKeys,f=l,m=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((_,E)=>{const x=l.get(_),j=Lh(this.query,E)?E:null,q=!!x&&this.mutatedKeys.has(x.key),K=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let G=!1;x&&j?x.data.isEqual(j.data)?q!==K&&(a.track({type:3,doc:j}),G=!0):this.su(x,j)||(a.track({type:2,doc:j}),G=!0,(g&&this.eu(j,g)>0||y&&this.eu(j,y)<0)&&(m=!0)):!x&&j?(a.track({type:0,doc:j}),G=!0):x&&!j&&(a.track({type:1,doc:x}),G=!0,(g||y)&&(m=!0)),G&&(j?(f=f.add(j),c=K?c.add(_):c.delete(_)):(f=f.delete(_),c=c.delete(_)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),c=c.delete(_.key),a.track({type:1,doc:_})}return{tu:f,iu:a,Cs:m,mutatedKeys:c}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort((_,E)=>function(j,q){const K=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ct(20277,{Rt:G})}};return K(j)-K(q)}(_.type,E.type)||this.eu(_.doc,E.doc)),this.ou(a),l=l??!1;const m=i&&!l?this._u():[],g=this.Xa.size===0&&this.current&&!l?1:0,y=g!==this.Za;return this.Za=g,f.length!==0||y?{snapshot:new So(this.query,t.tu,c,f,t.mutatedKeys,g===0,y,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(i=>this.Ya=this.Ya.add(i)),t.modifiedDocuments.forEach(i=>{}),t.removedDocuments.forEach(i=>this.Ya=this.Ya.delete(i)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Ft(),this.tu.forEach(a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))});const i=[];return t.forEach(a=>{this.Xa.has(a)||i.push(new FA(a))}),this.Xa.forEach(a=>{t.has(a)||i.push(new GA(a))}),i}cu(t){this.Ya=t.Qs,this.Xa=Ft();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return So.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const wm="SyncEngine";class k2{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class N2{constructor(t){this.key=t,this.hu=!1}}class V2{constructor(t,i,a,l,c,f){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new os(m=>cA(m),Bh),this.Iu=new Map,this.Eu=new Set,this.du=new Ee(wt.comparator),this.Au=new Map,this.Ru=new dm,this.Vu={},this.mu=new Map,this.fu=wo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function M2(r,t,i=!0){const a=WA(r);let l;const c=a.Tu.get(t);return c?(a.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await QA(a,t,i,!0),l}async function O2(r,t){const i=WA(r);await QA(i,t,!0,!1)}async function QA(r,t,i,a){const l=await WR(r.localStore,Dr(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,i);let m;return a&&(m=await j2(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&i&&zA(r.remoteStore,l),m}async function j2(r,t,i,a,l){r.pu=(E,x,j)=>async function(K,G,rt,J){let Z=G.view.ru(rt);Z.Cs&&(Z=await vb(K.localStore,G.query,!1).then(({documents:S})=>G.view.ru(S,Z)));const ot=J&&J.targetChanges.get(G.targetId),st=J&&J.targetMismatches.get(G.targetId)!=null,lt=G.view.applyChanges(Z,K.isPrimaryClient,ot,st);return Cb(K,G.targetId,lt.au),lt.snapshot}(r,E,x,j);const c=await vb(r.localStore,t,!0),f=new I2(t,c.Qs),m=f.ru(c.documents),g=du.createSynthesizedTargetChangeForCurrentChange(i,a&&r.onlineState!=="Offline",l),y=f.applyChanges(m,r.isPrimaryClient,g);Cb(r,i,y.au);const _=new k2(t,i,f);return r.Tu.set(t,_),r.Iu.has(i)?r.Iu.get(i).push(t):r.Iu.set(i,[t]),y.snapshot}async function B2(r,t,i){const a=jt(r),l=a.Tu.get(t),c=a.Iu.get(l.targetId);if(c.length>1)return a.Iu.set(l.targetId,c.filter(f=>!Bh(f,t))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(l.targetId),a.sharedClientState.isActiveQueryTarget(l.targetId)||await Bp(a.localStore,l.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(l.targetId),i&&ym(a.remoteStore,l.targetId),Up(a,l.targetId)}).catch(Io)):(Up(a,l.targetId),await Bp(a.localStore,l.targetId,!0))}async function L2(r,t){const i=jt(r),a=i.Tu.get(t),l=i.Iu.get(a.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),ym(i.remoteStore,a.targetId))}async function z2(r,t,i){const a=F2(r);try{const l=await function(f,m){const g=jt(f),y=me.now(),_=m.reduce((j,q)=>j.add(q.key),Ft());let E,x;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let q=ci(),K=Ft();return g.Ns.getEntries(j,_).next(G=>{q=G,q.forEach((rt,J)=>{J.isValidDocument()||(K=K.add(rt))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,q)).next(G=>{E=G;const rt=[];for(const J of m){const Z=Zx(J,E.get(J.key).overlayedDocument);Z!=null&&rt.push(new ls(J.key,Z,eA(Z.value.mapValue),oi.exists(!0)))}return g.mutationQueue.addMutationBatch(j,y,rt,m)}).next(G=>{x=G;const rt=G.applyToLocalDocumentSet(E,K);return g.documentOverlayCache.saveOverlays(j,G.batchId,rt)})}).then(()=>({batchId:x.batchId,changes:dA(E)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),function(f,m,g){let y=f.Vu[f.currentUser.toKey()];y||(y=new Ee(Gt)),y=y.insert(m,g),f.Vu[f.currentUser.toKey()]=y}(a,l.batchId,i),await mu(a,l.changes),await Hh(a.remoteStore)}catch(l){const c=Em(l,"Failed to persist write");i.reject(c)}}async function YA(r,t){const i=jt(r);try{const a=await KR(i.localStore,t);t.targetChanges.forEach((l,c)=>{const f=i.Au.get(c);f&&(te(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f.hu=!0:l.modifiedDocuments.size>0?te(f.hu,14607):l.removedDocuments.size>0&&(te(f.hu,42227),f.hu=!1))}),await mu(i,a,t)}catch(a){await Io(a)}}function Rb(r,t,i){const a=jt(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach((c,f)=>{const m=f.view.va(t);m.snapshot&&l.push(m.snapshot)}),function(f,m){const g=jt(f);g.onlineState=m;let y=!1;g.queries.forEach((_,E)=>{for(const x of E.Sa)x.va(m)&&(y=!0)}),y&&Tm(g)}(a.eventManager,t),l.length&&a.Pu.H_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function U2(r,t,i){const a=jt(r);a.sharedClientState.updateQueryState(t,"rejected",i);const l=a.Au.get(t),c=l&&l.key;if(c){let f=new Ee(wt.comparator);f=f.insert(c,mn.newNoDocument(c,Vt.min()));const m=Ft().add(c),g=new Ph(Vt.min(),new Map,new Ee(Gt),f,m);await YA(a,g),a.du=a.du.remove(c),a.Au.delete(t),Sm(a)}else await Bp(a.localStore,t,!1).then(()=>Up(a,t,i)).catch(Io)}async function P2(r,t){const i=jt(r),a=t.batch.batchId;try{const l=await YR(i.localStore,t);XA(i,a,null),KA(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await mu(i,l)}catch(l){await Io(l)}}async function $2(r,t,i){const a=jt(r);try{const l=await function(f,m){const g=jt(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let _;return g.mutationQueue.lookupMutationBatch(y,m).next(E=>(te(E!==null,37113),_=E.keys(),g.mutationQueue.removeMutationBatch(y,E))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,_,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_)).next(()=>g.localDocuments.getDocuments(y,_))})}(a.localStore,t);XA(a,t,i),KA(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await mu(a,l)}catch(l){await Io(l)}}function KA(r,t){(r.mu.get(t)||[]).forEach(i=>{i.resolve()}),r.mu.delete(t)}function XA(r,t,i){const a=jt(r);let l=a.Vu[a.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),a.Vu[a.currentUser.toKey()]=l}}function Up(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const a of r.Iu.get(t))r.Tu.delete(a),i&&r.Pu.yu(a,i);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(a=>{r.Ru.containsKey(a)||ZA(r,a)})}function ZA(r,t){r.Eu.delete(t.path.canonicalString());const i=r.du.get(t);i!==null&&(ym(r.remoteStore,i),r.du=r.du.remove(t),r.Au.delete(i),Sm(r))}function Cb(r,t,i){for(const a of i)a instanceof GA?(r.Ru.addReference(a.key,t),q2(r,a)):a instanceof FA?(_t(wm,"Document no longer in limbo: "+a.key),r.Ru.removeReference(a.key,t),r.Ru.containsKey(a.key)||ZA(r,a.key)):Ct(19791,{wu:a})}function q2(r,t){const i=t.key,a=i.path.canonicalString();r.du.get(i)||r.Eu.has(a)||(_t(wm,"New document in limbo: "+i),r.Eu.add(a),Sm(r))}function Sm(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const i=new wt(fe.fromString(t)),a=r.fu.next();r.Au.set(a,new N2(i)),r.du=r.du.insert(i,a),zA(r.remoteStore,new Xi(Dr(lA(i.path)),a,"TargetPurposeLimboResolution",Mh.ce))}}async function mu(r,t,i){const a=jt(r),l=[],c=[],f=[];a.Tu.isEmpty()||(a.Tu.forEach((m,g)=>{f.push(a.pu(g,t,i).then(y=>{var _;if((y||i)&&a.isPrimaryClient){const E=y?!y.fromCache:(_=i==null?void 0:i.targetChanges.get(g.targetId))==null?void 0:_.current;a.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(y){l.push(y);const E=mm.As(g.targetId,y);c.push(E)}}))}),await Promise.all(f),a.Pu.H_(l),await async function(g,y){const _=jt(g);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>at.forEach(y,x=>at.forEach(x.Es,j=>_.persistence.referenceDelegate.addReference(E,x.targetId,j)).next(()=>at.forEach(x.ds,j=>_.persistence.referenceDelegate.removeReference(E,x.targetId,j)))))}catch(E){if(!ko(E))throw E;_t(gm,"Failed to update sequence numbers: "+E)}for(const E of y){const x=E.targetId;if(!E.fromCache){const j=_.Ms.get(x),q=j.snapshotVersion,K=j.withLastLimboFreeSnapshotVersion(q);_.Ms=_.Ms.insert(x,K)}}}(a.localStore,c))}async function H2(r,t){const i=jt(r);if(!i.currentUser.isEqual(t)){_t(wm,"User change. New user:",t.toKey());const a=await OA(i.localStore,t);i.currentUser=t,function(c,f){c.mu.forEach(m=>{m.forEach(g=>{g.reject(new yt(nt.CANCELLED,f))})}),c.mu.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await mu(i,a.Ls)}}function G2(r,t){const i=jt(r),a=i.Au.get(t);if(a&&a.hu)return Ft().add(a.key);{let l=Ft();const c=i.Iu.get(t);if(!c)return l;for(const f of c){const m=i.Tu.get(f);l=l.unionWith(m.view.nu)}return l}}function WA(r){const t=jt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=YA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=G2.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=U2.bind(null,t),t.Pu.H_=R2.bind(null,t.eventManager),t.Pu.yu=C2.bind(null,t.eventManager),t}function F2(r){const t=jt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=P2.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$2.bind(null,t),t}class Th{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$h(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return QR(this.persistence,new HR,t.initialUser,this.serializer)}Cu(t){return new MA(pm.mi,this.serializer)}Du(t){return new t2}async terminate(){var t,i;(t=this.gcScheduler)==null||t.stop(),(i=this.indexBackfillerScheduler)==null||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Th.provider={build:()=>new Th};class Q2 extends Th{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){te(this.persistence.referenceDelegate instanceof Ah,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new DR(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new MA(a=>Ah.mi(a,i),this.serializer)}}class Pp{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Rb(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=H2.bind(null,this.syncEngine),await E2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new w2}()}createDatastore(t){const i=$h(t.databaseInfo.databaseId),a=function(c){return new a2(c)}(t.databaseInfo);return function(c,f,m,g){return new u2(c,f,m,g)}(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return function(a,l,c,f,m){return new h2(a,l,c,f,m)}(this.localStore,this.datastore,t.asyncQueue,i=>Rb(this.syncEngine,i,0),function(){return Ab.v()?new Ab:new e2}())}createSyncEngine(t,i){return function(l,c,f,m,g,y,_){const E=new V2(l,c,f,m,g,y);return _&&(E.gu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const c=jt(l);_t(is,"RemoteStore shutting down."),c.Ea.add(5),await pu(c),c.Aa.shutdown(),c.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(i=this.eventManager)==null||i.terminate()}}Pp.provider={build:()=>new Pp};/**
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
 */class Y2{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ui("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout(()=>{this.muted||t(i)},0)}}/**
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
 */const la="FirestoreClient";class K2{constructor(t,i,a,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=pn.UNAUTHENTICATED,this.clientId=rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,async f=>{_t(la,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(a,f=>(_t(la,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ea;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=Em(i,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function up(r,t){r.asyncQueue.verifyOperationInProgress(),_t(la,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let a=i.initialUser;r.setCredentialChangeListener(async l=>{a.isEqual(l)||(await OA(t.localStore,l),a=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Db(r,t){r.asyncQueue.verifyOperationInProgress();const i=await X2(r);_t(la,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(a=>Tb(t.remoteStore,a)),r.setAppCheckTokenChangeListener((a,l)=>Tb(t.remoteStore,l)),r._onlineComponents=t}async function X2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){_t(la,"Using user provided OfflineComponentProvider");try{await up(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===nt.FAILED_PRECONDITION||l.code===nt.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;_o("Error using user provided cache. Falling back to memory cache: "+i),await up(r,new Th)}}else _t(la,"Using default OfflineComponentProvider"),await up(r,new Q2(void 0));return r._offlineComponents}async function JA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(_t(la,"Using user provided OnlineComponentProvider"),await Db(r,r._uninitializedComponentsProvider._online)):(_t(la,"Using default OnlineComponentProvider"),await Db(r,new Pp))),r._onlineComponents}function Z2(r){return JA(r).then(t=>t.syncEngine)}async function W2(r){const t=await JA(r),i=t.eventManager;return i.onListen=M2.bind(null,t.syncEngine),i.onUnlisten=B2.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=O2.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=L2.bind(null,t.syncEngine),i}function J2(r,t,i={}){const a=new ea;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,m,g,y){const _=new Y2({next:x=>{_.Nu(),f.enqueueAndForget(()=>x2(c,E)),x.fromCache&&g.source==="server"?y.reject(new yt(nt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(x)},error:x=>y.reject(x)}),E=new D2(m,_,{includeMetadataChanges:!0,qa:!0});return S2(c,E)}(await W2(r),r.asyncQueue,t,i,a)),a.promise}/**
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
 */function t1(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Ib=new Map;/**
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
 */const e1="firestore.googleapis.com",kb=!0;class Nb{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new yt(nt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=e1,this.ssl=kb}else this.host=t.host,this.ssl=t.ssl??kb;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=VA;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<RR)throw new yt(nt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cx("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t1(t.experimentalLongPollingOptions??{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new yt(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new yt(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new yt(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Gh{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new yt(nt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new yt(nt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nb(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new tx;switch(a.type){case"firstParty":return new ix(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new yt(nt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=Ib.get(i);a&&(_t("ComponentProvider","Removing Datastore"),Ib.delete(i),a.terminate())}(this),Promise.resolve()}}function tC(r,t,i,a={}){var y;r=dh(r,Gh);const l=tm(t),c=r._getSettings(),f={...c,emulatorOptions:r._getEmulatorOptions()},m=`${t}:${i}`;l&&(Dw(`https://${m}`),Vw("Firestore",!0)),c.host!==e1&&c.host!==m&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:m,ssl:l,emulatorOptions:a};if(!ch(g,f)&&(r._setSettings(g),a.mockUserToken)){let _,E;if(typeof a.mockUserToken=="string")_=a.mockUserToken,E=pn.MOCK_USER;else{_=Iw(a.mockUserToken,(y=r._app)==null?void 0:y.options.projectId);const x=a.mockUserToken.sub||a.mockUserToken.user_id;if(!x)throw new yt(nt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new pn(x)}r._authCredentials=new ex(new q_(_,E))}}/**
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
 */class ha{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new ha(this.firestore,t,this._query)}}class Je{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new na(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Je(this.firestore,t,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(hu(i,Je._jsonSchema))return new Je(t,a||null,new wt(fe.fromString(i.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Ue("string",Je._jsonSchemaVersion),referencePath:Ue("string")};class na extends ha{constructor(t,i,a){super(t,i,lA(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Je(this.firestore,null,new wt(t))}withConverter(t){return new na(this.firestore,t,this._path)}}function Vb(r,t,...i){if(r=bo(r),H_("collection","path",t),r instanceof Gh){const a=fe.fromString(t,...i);return Gv(a),new na(r,null,a)}{if(!(r instanceof Je||r instanceof na))throw new yt(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(fe.fromString(t,...i));return Gv(a),new na(r.firestore,null,a)}}function eC(r,t,...i){if(r=bo(r),arguments.length===1&&(t=rm.newId()),H_("doc","path",t),r instanceof Gh){const a=fe.fromString(t,...i);return Hv(a),new Je(r,null,new wt(a))}{if(!(r instanceof Je||r instanceof na))throw new yt(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(fe.fromString(t,...i));return Hv(a),new Je(r.firestore,r instanceof na?r.converter:null,new wt(a))}}/**
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
 */const Mb="AsyncQueue";class Ob{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new BA(this,"async_queue_retry"),this._c=()=>{const a=lp();a&&_t(Mb,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=lp();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=lp();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const i=new ea;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ko(t))throw t;_t(Mb,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const i=this.ac.then(()=>(this.rc=!0,t().catch(a=>{throw this.nc=a,this.rc=!1,ui("INTERNAL UNHANDLED ERROR: ",jb(a)),a}).then(a=>(this.rc=!1,a))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const l=Am.createAndSchedule(this,t,i,a,c=>this.hc(c));return this.tc.push(l),l}uc(){this.nc&&Ct(47125,{Pc:jb(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function jb(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class xm extends Gh{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new Ob,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ob(t),this._firestoreClient=void 0,await t}}}function nC(r,t){const i=typeof r=="object"?r:qS(),a=typeof r=="string"?r:mh,l=LS(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const c=Rw("firestore");c&&tC(l,...c)}return l}function n1(r){if(r._terminated)throw new yt(nt.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rC(r),r._firestoreClient}function rC(r){var a,l,c;const t=r._freezeSettings(),i=function(m,g,y,_){return new Ax(m,g,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,t1(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(r._databaseId,((a=r._app)==null?void 0:a.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(l=t.localCache)!=null&&l._offlineComponentProvider&&((c=t.localCache)!=null&&c._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new K2(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Xn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xn(ln.fromBase64String(t))}catch(i){throw new yt(nt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Xn(ln.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(hu(t,Xn._jsonSchema))return Xn.fromBase64String(t.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Ue("string",Xn._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class Rm{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new yt(nt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Cm{constructor(t){this._methodName=t}}/**
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
 */class kr{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new yt(nt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new yt(nt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Gt(this._lat,t._lat)||Gt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kr._jsonSchemaVersion}}static fromJSON(t){if(hu(t,kr._jsonSchema))return new kr(t.latitude,t.longitude)}}kr._jsonSchemaVersion="firestore/geoPoint/1.0",kr._jsonSchema={type:Ue("string",kr._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
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
 */class Nr{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,l){if(a.length!==l.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==l[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(hu(t,Nr._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(i=>typeof i=="number"))return new Nr(t.vectorValues);throw new yt(nt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nr._jsonSchemaVersion="firestore/vectorValue/1.0",Nr._jsonSchema={type:Ue("string",Nr._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const iC=/^__.*__$/;class aC{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new ls(t,this.data,this.fieldMask,i,this.fieldTransforms):new fu(t,this.data,i,this.fieldTransforms)}}function r1(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ct(40011,{Ac:r})}}class Dm{constructor(t,i,a,l,c,f){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Dm({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var l;const i=(l=this.path)==null?void 0:l.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){var l;const i=(l=this.path)==null?void 0:l.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return wh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(r1(this.Ac)&&iC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class sC{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||$h(t)}Cc(t,i,a,l=!1){return new Dm({Ac:t,methodName:i,Dc:a,path:sn.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function i1(r){const t=r._freezeSettings(),i=$h(r._databaseId);return new sC(r._databaseId,!!t.ignoreUndefinedProperties,i)}function oC(r,t,i,a,l,c={}){const f=r.Cc(c.merge||c.mergeFields?2:0,t,i,l);o1("Data must be an object, but it was:",f,a);const m=a1(a,f);let g,y;if(c.merge)g=new lr(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const _=[];for(const E of c.mergeFields){const x=uC(t,E,i);if(!f.contains(x))throw new yt(nt.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);hC(_,x)||_.push(x)}g=new lr(_),y=f.fieldTransforms.filter(E=>g.covers(E.field))}else g=null,y=f.fieldTransforms;return new aC(new Kn(m),g,y)}class Im extends Cm{_toFieldTransform(t){return new Qx(t.path,new ou)}isEqual(t){return t instanceof Im}}function lC(r,t,i,a=!1){return km(i,r.Cc(a?4:3,t))}function km(r,t){if(s1(r=bo(r)))return o1("Unsupported field value:",t,r),a1(r,t);if(r instanceof Cm)return function(a,l){if(!r1(l.Ac))throw l.Sc(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${a._methodName}() is not currently supported inside arrays`);const c=a._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(a,l){const c=[];let f=0;for(const m of a){let g=km(m,l.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),f++}return{arrayValue:{values:c}}}(r,t)}return function(a,l){if((a=bo(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return Hx(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const c=me.fromDate(a);return{timestampValue:_h(l.serializer,c)}}if(a instanceof me){const c=new me(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:_h(l.serializer,c)}}if(a instanceof kr)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Xn)return{bytesValue:xA(l.serializer,a._byteString)};if(a instanceof Je){const c=l.databaseId,f=a.firestore._databaseId;if(!f.isEqual(c))throw l.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:fm(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof Nr)return function(f,m){return{mapValue:{fields:{[J_]:{stringValue:tA},[gh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return um(m.serializer,y)})}}}}}}(a,l);throw l.Sc(`Unsupported field value: ${Vh(a)}`)}(r,t)}function a1(r,t){const i={};return Q_(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ss(r,(a,l)=>{const c=km(l,t.mc(a));c!=null&&(i[a]=c)}),{mapValue:{fields:i}}}function s1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof me||r instanceof kr||r instanceof Xn||r instanceof Je||r instanceof Cm||r instanceof Nr)}function o1(r,t,i){if(!s1(i)||!G_(i)){const a=Vh(i);throw a==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+a)}}function uC(r,t,i){if((t=bo(t))instanceof Rm)return t._internalPath;if(typeof t=="string")return l1(r,t);throw wh("Field path arguments must be of type string or ",r,!1,void 0,i)}const cC=new RegExp("[~\\*/\\[\\]]");function l1(r,t,i){if(t.search(cC)>=0)throw wh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new Rm(...t.split("."))._internalPath}catch{throw wh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function wh(r,t,i,a,l){const c=a&&!a.isEmpty(),f=l!==void 0;let m=`Function ${t}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(c||f)&&(g+=" (found",c&&(g+=` in field ${a}`),f&&(g+=` in document ${l}`),g+=")"),new yt(nt.INVALID_ARGUMENT,m+r+g)}function hC(r,t){return r.some(i=>i.isEqual(t))}/**
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
 */class u1{constructor(t,i,a,l,c){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new fC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Nm("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class fC extends u1{data(){return super.data()}}function Nm(r,t){return typeof t=="string"?l1(r,t):t instanceof Rm?t._internalPath:t._delegate._internalPath}/**
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
 */function dC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new yt(nt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vm{}class Mm extends Vm{}function pC(r,t,...i){let a=[];t instanceof Vm&&a.push(t),a=a.concat(i),function(c){const f=c.filter(g=>g instanceof jm).length,m=c.filter(g=>g instanceof Om).length;if(f>1||f>0&&m>0)throw new yt(nt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a);for(const l of a)r=l._apply(r);return r}class Om extends Mm{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new Om(t,i,a)}_apply(t){const i=this._parse(t);return c1(t._query,i),new ha(t.firestore,t.converter,Np(t._query,i))}_parse(t){const i=i1(t.firestore);return function(c,f,m,g,y,_,E){let x;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new yt(nt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){Lb(E,_);const q=[];for(const K of E)q.push(Bb(g,c,K));x={arrayValue:{values:q}}}else x=Bb(g,c,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||Lb(E,_),x=lC(m,f,E,_==="in"||_==="not-in");return ze.create(y,_,x)}(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class jm extends Vm{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new jm(t,i)}_parse(t){const i=this._queryConstraints.map(a=>a._parse(t)).filter(a=>a.getFilters().length>0);return i.length===1?i[0]:cr.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:(function(l,c){let f=l;const m=c.getFlattenedFilters();for(const g of m)c1(f,g),f=Np(f,g)}(t._query,i),new ha(t.firestore,t.converter,Np(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bm extends Mm{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new Bm(t,i)}_apply(t){const i=function(l,c,f){if(l.startAt!==null)throw new yt(nt.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(l.endAt!==null)throw new yt(nt.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new su(c,f)}(t._query,this._field,this._direction);return new ha(t.firestore,t.converter,function(l,c){const f=l.explicitOrderBy.concat([c]);return new No(l.path,l.collectionGroup,f,l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t._query,i))}}function mC(r,t="asc"){const i=t,a=Nm("orderBy",r);return Bm._create(a,i)}class Lm extends Mm{constructor(t,i,a){super(),this.type=t,this._limit=i,this._limitType=a}static _create(t,i,a){return new Lm(t,i,a)}_apply(t){return new ha(t.firestore,t.converter,vh(t._query,this._limit,this._limitType))}}function gC(r){return Lm._create("limit",r,"F")}function Bb(r,t,i){if(typeof(i=bo(i))=="string"){if(i==="")throw new yt(nt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uA(t)&&i.indexOf("/")!==-1)throw new yt(nt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(fe.fromString(i));if(!wt.isDocumentKey(a))throw new yt(nt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return Jv(r,new wt(a))}if(i instanceof Je)return Jv(r,i._key);throw new yt(nt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vh(i)}.`)}function Lb(r,t){if(!Array.isArray(r)||r.length===0)throw new yt(nt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function c1(r,t){const i=function(l,c){for(const f of l)for(const m of f.getFlattenedFilters())if(c.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(i!==null)throw i===t.op?new yt(nt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new yt(nt.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class yC{convertValue(t,i="none"){switch(sa(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(aa(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw Ct(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return ss(t,(l,c)=>{a[l]=this.convertValue(c,i)}),a}convertVectorValue(t){var a,l,c;const i=(c=(l=(a=t.fields)==null?void 0:a[gh].arrayValue)==null?void 0:l.values)==null?void 0:c.map(f=>Me(f.doubleValue));return new Nr(i)}convertGeoPoint(t){return new kr(Me(t.latitude),Me(t.longitude))}convertArray(t,i){return(t.values||[]).map(a=>this.convertValue(a,i))}convertServerTimestamp(t,i){switch(i){case"previous":const a=jh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(ru(t));default:return null}}convertTimestamp(t){const i=ia(t);return new me(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=fe.fromString(t);te(NA(a),9688,{name:t});const l=new iu(a.get(1),a.get(3)),c=new wt(a.popFirst(5));return l.isEqual(i)||ui(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */function vC(r,t,i){let a;return a=r?r.toFirestore(t):t,a}class qc{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ho extends u1{constructor(t,i,a,l,c,f){super(t,i,a,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(Nm("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new yt(nt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=ho._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}ho._jsonSchemaVersion="firestore/documentSnapshot/1.0",ho._jsonSchema={type:Ue("string",ho._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class rh extends ho{data(t={}){return super.data(t)}}class fo{constructor(t,i,a,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new qc(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach(a=>{t.call(i,new rh(this._firestore,this._userDataWriter,a.key,a,new qc(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new yt(nt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(m=>{const g=new rh(l._firestore,l._userDataWriter,m.doc.key,m.doc,new qc(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const g=new rh(l._firestore,l._userDataWriter,m.doc.key,m.doc,new qc(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,_=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),_=f.indexOf(m.doc.key)),{type:bC(m.type),doc:g,oldIndex:y,newIndex:_}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new yt(nt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=fo._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=rm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach(c=>{c._document!==null&&(i.push(c._document),a.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function bC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ct(61501,{type:r})}}fo._jsonSchemaVersion="firestore/querySnapshot/1.0",fo._jsonSchema={type:Ue("string",fo._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class _C extends yC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xn(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Je(this.firestore,null,i)}}function AC(r){r=dh(r,ha);const t=dh(r.firestore,xm),i=n1(t),a=new _C(t);return dC(r._query),J2(i,r._query).then(l=>new fo(t,a,r,l))}function EC(r,t){const i=dh(r.firestore,xm),a=eC(r),l=vC(r.converter,t);return TC(i,[oC(i1(r.firestore),"addDoc",a._key,l,r.converter!==null,{}).toMutation(a._key,oi.exists(!1))]).then(()=>a)}function TC(r,t){return function(a,l){const c=new ea;return a.asyncQueue.enqueueAndForget(async()=>z2(await Z2(a),l,c)),c.promise}(n1(r),t)}function wC(){return new Im("serverTimestamp")}(function(t,i=!0){(function(l){Do=l})($S),fh(new tu("firestore",(a,{instanceIdentifier:l,options:c})=>{const f=a.getProvider("app").getImmediate(),m=new xm(new nx(a.getProvider("auth-internal")),new ax(f,a.getProvider("app-check-internal")),function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new yt(nt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new iu(y.options.projectId,_)}(f,l),f);return c={useFetchStreams:i,...c},m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),uo(Uv,Pv,t),uo(Uv,Pv,"esm2020")})();var SC="firebase",xC="12.3.0";/**
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
 */uo(SC,xC,"app");const RC={apiKey:"AIzaSyAwhEf5jXYHv9ygtI2sNa79nzrb5gjnCi4",authDomain:"portfoliobackend-2c054.firebaseapp.com",projectId:"portfoliobackend-2c054",storageBucket:"portfoliobackend-2c054.firebasestorage.app",messagingSenderId:"938269672383",appId:"1:938269672383:web:fc52538affb639def2570a"},CC=V_(RC),zb=nC(CC),DC=["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagg0t","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"],IC=["4r5e","5h1t","5hit","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","a_s_s","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","f_u_c_k","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","hell","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","s_h_i_t","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"];class kC{constructor(t={}){Ya(this,"list",[]);Ya(this,"exclude",[]);Ya(this,"placeHolder","*");Ya(this,"regex",/[^a-zA-Z0-9|$|@]|\^/g);Ya(this,"replaceRegex",/\w/g);Ya(this,"splitRegex",/\b|_/g);Object.assign(this,{list:t.emptyList&&[]||Array.prototype.concat.apply(DC,[IC,t.list||[]]),exclude:t.exclude||[],splitRegex:t.splitRegex||/\b|_/g,placeHolder:t.placeHolder||"*",regex:t.regex||/[^a-zA-Z0-9|$|@]|\^/g,replaceRegex:t.replaceRegex||/\w/g})}isProfane(t){return this.list.filter(i=>{const a=new RegExp(`\\b${i.replace(/(\W)/g,"\\$1")}\\b`,"gi");return!this.exclude.includes(i.toLowerCase())&&a.test(t)}).length>0||!1}replaceWord(t){return t.replace(this.regex,"").replace(this.replaceRegex,this.placeHolder)}clean(t){const i=this.splitRegex.exec(t);return!t||!i?t:t.split(this.splitRegex).map(a=>this.isProfane(a)?this.replaceWord(a):a).join(i[0])}addWords(...t){this.list.push(...t),t.map(i=>i.toLowerCase()).forEach(i=>{this.exclude.includes(i)&&this.exclude.splice(this.exclude.indexOf(i),1)})}removeWords(...t){this.exclude.push(...t.map(i=>i.toLowerCase()))}}var NC=`
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

`;const zm="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Um="inset 2px 2px 3px rgba(0,0,0,0.2)",hr=()=>vt`
  -webkit-text-fill-color: ${({theme:r})=>r.materialTextDisabled};
  color: ${({theme:r})=>r.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:r})=>r.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,fr=({background:r="material",color:t="materialText"}={})=>vt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:i})=>i[r]};
  color: ${({theme:i})=>i[t]};
`,gu=({mainColor:r="black",secondaryColor:t="transparent",pixelSize:i=2})=>vt`
  background-image: ${[`linear-gradient(
      45deg,
      ${r} 25%,
      transparent 25%,
      transparent 75%,
      ${r} 75%
    )`,`linear-gradient(
      45deg,
      ${r} 25%,
      transparent 25%,
      transparent 75%,
      ${r} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${i*2}px ${i*2}px`};
  background-position: 0 0, ${`${i}px ${i}px`};
`,as=()=>vt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:r})=>r.materialText};
  background: ${({$disabled:r,theme:t})=>r?t.flatLight:t.canvas};
  border: 2px solid ${({theme:r})=>r.canvas};
  outline: 2px solid ${({theme:r})=>r.flatDark};
  outline-offset: -4px;
`,to={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},VC=({theme:r,topLeftInner:t,bottomRightInner:i,hasShadow:a=!1,hasInsetShadow:l=!1})=>[a?zm:!1,l?Um:!1,t!==null?`inset 1px 1px 0px 1px ${r[t]}`:!1,i!==null?`inset -1px -1px 0 1px ${r[i]}`:!1].filter(Boolean).join(", "),xe=({invert:r=!1,style:t="button"}={})=>{const i={topLeftOuter:r?"bottomRightOuter":"topLeftOuter",topLeftInner:r?"bottomRightInner":"topLeftInner",bottomRightInner:r?"topLeftInner":"bottomRightInner",bottomRightOuter:r?"topLeftOuter":"bottomRightOuter"};return vt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:a})=>a[to[t][i.topLeftOuter]]};
    border-top-color: ${({theme:a})=>a[to[t][i.topLeftOuter]]};
    border-right-color: ${({theme:a})=>a[to[t][i.bottomRightOuter]]};
    border-bottom-color: ${({theme:a})=>a[to[t][i.bottomRightOuter]]};
    box-shadow: ${({theme:a,shadow:l})=>VC({theme:a,topLeftInner:to[t][i.topLeftInner],bottomRightInner:to[t][i.bottomRightInner],hasShadow:l})};
  `},xo=()=>vt`
  outline: 2px dotted ${({theme:r})=>r.materialText};
`,MC=r=>Buffer.from(r).toString("base64"),OC=typeof btoa<"u"?btoa:MC,Hc=(r,t=0)=>{const i=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${r}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${OC(i)})`},Pm=(r="default")=>vt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>gu({mainColor:r==="flat"?t.flatLight:t.material,secondaryColor:r==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${fr()}
    ${r==="flat"?as():xe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${fr()}
    ${r==="flat"?as():xe({style:"window"})}
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
    ${r==="default"?xe({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Hc(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Hc(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Hc(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Hc(t.materialText,0)};
  }
`,jC=ct.a`
  color: ${({theme:r})=>r.anchor};
  font-size: inherit;
  text-decoration: ${({underline:r})=>r?"underline":"none"};
  &:visited {
    color: ${({theme:r})=>r.anchorVisited};
  }
`,BC=$.forwardRef(({children:r,underline:t=!0,...i},a)=>F.createElement(jC,{ref:a,underline:t,...i},r));BC.displayName="Anchor";const LC=ct.header`
  ${xe()};
  ${fr()};

  position: ${r=>{var t;return(t=r.position)!==null&&t!==void 0?t:r.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,h1=$.forwardRef(({children:r,fixed:t=!0,position:i="fixed",...a},l)=>F.createElement(LC,{fixed:t,position:t!==!1?i:void 0,ref:l,...a},r));h1.displayName="AppBar";const cs=()=>{};function Ja(r,t,i){return i!==null&&r>i?i:t!==null&&r<t?t:r}function zC(r){if(Math.abs(r)<1){const i=r.toExponential().split("e-"),a=i[0].split(".")[1];return(a?a.length:0)+parseInt(i[1],10)}const t=r.toString().split(".")[1];return t?t.length:0}function Ub(r,t,i){const a=Math.round((r-i)/t)*t+i;return Number(a.toFixed(zC(t)))}function ua(r){return typeof r=="number"?`${r}px`:r}const UC=ct.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:r})=>`
    height: ${r};
    width: ${r};
    `}
  border-radius: ${({square:r})=>r?0:"50%"};
  overflow: hidden;
  ${({noBorder:r,theme:t})=>!r&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:r})=>!r&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,PC=ct.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,$C=$.forwardRef(({alt:r="",children:t,noBorder:i=!1,size:a=35,square:l=!1,src:c,...f},m)=>F.createElement(UC,{noBorder:i,ref:m,size:ua(a),square:l,src:c,...f},c?F.createElement(PC,{src:c,alt:r}):t));$C.displayName="Avatar";const on={sm:"28px",md:"36px",lg:"44px"},qC=vt`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:r="md"})=>on[r]};
  width: ${({fullWidth:r,size:t="md",square:i})=>r?"100%":i?on[t]:"auto"};
  padding: ${({square:r})=>r?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:r})=>!r&&"2px"};
  }
  padding-top: ${({active:r,disabled:t})=>r&&!t&&"2px"};
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
`,Fh=ct.button`
  ${({active:r,disabled:t,primary:i,theme:a,variant:l})=>l==="flat"?vt`
          ${as()}
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
            ${!r&&!t&&xo}
            outline-offset: -4px;
          }
        `:l==="menu"||l==="thin"?vt`
          ${fr()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!r&&xe({style:"buttonThin"})}
          }
          &:active {
            ${!t&&xe({style:"buttonThinPressed"})}
          }
          ${r&&xe({style:"buttonThinPressed"})}
          ${t&&hr()}
        `:vt`
          ${fr()};
          border: none;
          ${t&&hr()}
          ${r?gu({mainColor:a.material,secondaryColor:a.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${i?vt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${a.borderDarkest};
                `:vt`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${xe(r?{style:l==="raised"?"window":"button",invert:!0}:{style:l==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&xe({style:l==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!r&&!t&&xo}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${r?"0":"1px"};
          }
        `}
  ${qC}
`,Ve=$.forwardRef(({onClick:r,disabled:t=!1,children:i,type:a="button",fullWidth:l=!1,size:c="md",square:f=!1,active:m=!1,onTouchStart:g=cs,primary:y=!1,variant:_="default",...E},x)=>F.createElement(Fh,{active:m,disabled:t,$disabled:t,fullWidth:l,onClick:t?void 0:r,onTouchStart:g,primary:y,ref:x,size:c,square:f,type:a,variant:_,...E},i));Ve.displayName="Button";function ca({defaultValue:r,onChange:t,onChangePropName:i="onChange",readOnly:a,value:l,valuePropName:c="value"}){const f=l!==void 0,[m,g]=$.useState(r),y=$.useCallback(_=>{f||g(_)},[f]);if(f&&typeof t!="function"&&!a){const _=`Warning: You provided a \`${c}\` prop to a component without an \`${i}\` handler.${c==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${i}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${i}\` function that updates \`${c}\`.`}`;console.warn(_)}return[f?l:m,y]}const $p=ct.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${r=>on[r.size]};
  width: ${r=>r.square?on[r.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${r=>r.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${r=>on[r.size]};
  color: ${({theme:r})=>r.materialText};
  pointer-events: ${({$disabled:r})=>r?"none":"auto"};
  font-weight: ${({primary:r})=>r?"bold":"normal"};
  &:hover {
    ${({theme:r,$disabled:t})=>!t&&`
        color: ${r.materialTextInvert};
        background: ${r.hoverBackground};
      `}

    cursor: default;
  }
  ${r=>r.$disabled&&hr()}
`,ql=$.forwardRef(({size:r="lg",disabled:t,square:i,children:a,onClick:l,primary:c,...f},m)=>F.createElement($p,{$disabled:t,size:r,square:i,onClick:t?void 0:l,primary:c,role:"menuitem",ref:m,"aria-disabled":t,...f},a));ql.displayName="MenuListItem";const f1=ct.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${r=>r.fullWidth?"100%":"auto"};
  padding: 4px;
  ${xe({style:"window"})}
  ${fr()}
  ${r=>r.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;f1.displayName="MenuList";const Mr=20,Sh=ct.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Mr}px;
  height: ${Mr}px;
  opacity: 0;
  z-index: -1;
`,$m=ct.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:r})=>r?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:r})=>r.materialText};
  ${r=>r.$disabled&&hr()}

  ${$p} & {
    margin: 0;
    height: 100%;
  }
  ${$p}:hover & {
    ${({$disabled:r,theme:t})=>!r&&vt`
        color: ${t.materialTextInvert};
      `};
  }
`,qm=ct.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Sh}:focus ~ & {
    ${xo}
  }
  ${Sh}:not(:disabled) ~ &:active {
    ${xo}
  }
`,Or=ct.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:r})=>r.borderDark};
  border-top-color: ${({theme:r})=>r.borderDark};
  border-right-color: ${({theme:r})=>r.borderLightest};
  border-bottom-color: ${({theme:r})=>r.borderLightest};
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
    border-left-color: ${({theme:r})=>r.borderDarkest};
    border-top-color: ${({theme:r})=>r.borderDarkest};
    border-right-color: ${({theme:r})=>r.borderLight};
    border-bottom-color: ${({theme:r})=>r.borderLight};

    pointer-events: none;
    ${r=>r.shadow&&`box-shadow:${Um};`}
  }
`,HC=ct.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Pm()}
`,so=$.forwardRef(({children:r,shadow:t=!0,...i},a)=>F.createElement(Or,{ref:a,shadow:t,...i},F.createElement(HC,null,r)));so.displayName="ScrollView";const d1=vt`
  width: ${Mr}px;
  height: ${Mr}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,GC=ct(Or)`
  ${d1}
  width: ${Mr}px;
  height: ${Mr}px;
  background: ${({$disabled:r,theme:t})=>r?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,FC=ct.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:r,theme:t})=>r?t.flatLight:t.canvas};
  ${d1}
  width: ${Mr-4}px;
  height: ${Mr-4}px;
  outline: none;
  border: 2px solid ${({theme:r})=>r.flatDark};
  background: ${({$disabled:r,theme:t})=>r?t.flatLight:t.canvas};
`,QC=ct.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:r,theme:t})=>r?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${r=>r.$disabled?r.theme.checkmarkDisabled:r.theme.checkmark};
  }
`,YC=ct.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:r,theme:t})=>gu({mainColor:r?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,KC={flat:FC,default:GC},XC=$.forwardRef(({checked:r,className:t="",defaultChecked:i=!1,disabled:a=!1,indeterminate:l=!1,label:c="",onChange:f=cs,style:m={},value:g,variant:y="default",..._},E)=>{var x;const[j,q]=ca({defaultValue:i,onChange:f,readOnly:(x=_.readOnly)!==null&&x!==void 0?x:a,value:r}),K=$.useCallback(J=>{const Z=J.target.checked;q(Z),f(J)},[f,q]),G=KC[y];let rt=null;return l?rt=YC:j&&(rt=QC),F.createElement($m,{$disabled:a,className:t,style:m},F.createElement(Sh,{disabled:a,onChange:a?void 0:K,readOnly:a,type:"checkbox",value:g,checked:j,"data-indeterminate":l,ref:E,..._}),F.createElement(G,{$disabled:a,role:"presentation"},rt&&F.createElement(rt,{$disabled:a,variant:y})),c&&F.createElement(qm,null,c))});XC.displayName="Checkbox";const oo=ct.div`
  ${({orientation:r,theme:t,size:i="100%"})=>r==="vertical"?`
    height: ${ua(i)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${ua(i)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;oo.displayName="Separator";const ZC=ct(Fh)`
  padding-left: 8px;
`,WC=ct(oo)`
  height: 21px;
  position: relative;
  top: 0;
`,p1=ct.input`
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
`,JC=ct.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:r})=>r};

  ${({$disabled:r})=>r?vt`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:vt`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${p1}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${xo}
    outline-offset: -8px;
  }
`,tD=ct.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:r})=>r?vt`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:vt`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:r})=>r==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,eD=$.forwardRef(({value:r,defaultValue:t,onChange:i=cs,disabled:a=!1,variant:l="default",...c},f)=>{var m;const[g,y]=ca({defaultValue:t,onChange:i,readOnly:(m=c.readOnly)!==null&&m!==void 0?m:a,value:r}),_=E=>{const x=E.target.value;y(x),i(E)};return F.createElement(ZC,{disabled:a,as:"div",variant:l,size:"md"},F.createElement(p1,{onChange:_,readOnly:a,disabled:a,value:g??"#008080",type:"color",ref:f,...c}),F.createElement(JC,{$disabled:a,color:g??"#008080",role:"presentation"}),l==="default"&&F.createElement(WC,{orientation:"vertical"}),F.createElement(tD,{$disabled:a,variant:l}))});eD.displayName="ColorInput";const nD=ct.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:r})=>vt`
    width: ${11*r}px;
    height: ${21*r}px;
    margin: ${r}px;

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
      ${gu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:r})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${r}px;
      border-left: ${r}px solid var(--react95-digit-bg-color);
      border-right: ${r}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${r}px;
      border-left: ${r}px solid var(--react95-digit-primary-color);
      border-right: ${r}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${r}px;
      width: ${9*r}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${r}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${r*2}px);
      top: ${2*r}px;
      left: ${r}px;
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
      height: ${r}px;
      border-left: ${r}px solid var(--react95-digit-bg-color);
      border-right: ${r}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${r}px solid var(--react95-digit-primary-color);
      border-right: ${r}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${r}px;
      width: ${9*r}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${r}px;
    }
    span.center:after {
      bottom: ${r}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${r}px;
      border-top: ${r}px solid var(--react95-digit-bg-color);
      border-bottom: ${r}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*r}px;
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
      left: ${r}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${r*2}px);
      top: ${r}px;
      left: ${r*2}px;
    }
  `}
`,Pb=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],rD=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function iD({digit:r=0,pixelSize:t=2,...i}){const a=rD[Number(r)].map((l,c)=>l?`${Pb[c]} active`:Pb[c]);return F.createElement(nD,{pixelSize:t,...i},a.map((l,c)=>F.createElement("span",{className:l,key:c})))}const aD=ct.div`
  ${xe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,sD={sm:1,md:2,lg:3,xl:4},oD=$.forwardRef(({value:r=0,minLength:t=3,size:i="md",...a},l)=>{const c=$.useMemo(()=>r.toString().padStart(t,"0").split(""),[t,r]);return F.createElement(aD,{ref:l,...a},c.map((f,m)=>F.createElement(iD,{digit:f,pixelSize:sD[i],key:m})))});oD.displayName="Counter";const m1=vt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:r})=>r?"100%":"auto"};
  min-height: ${on.md};
`,lD=ct(Or).attrs({"data-testid":"variant-default"})`
  ${m1}
  background: ${({$disabled:r,theme:t})=>r?t.material:t.canvas};
`,uD=ct.div.attrs({"data-testid":"variant-flat"})`
  ${as()}
  ${m1}
  position: relative;
`,g1=vt`
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
  color: ${({theme:r})=>r.canvasText};
  ${({disabled:r,variant:t})=>t!=="flat"&&r&&hr()}
`,cD=ct.input`
  ${g1}
  padding: 0 8px;
`,hD=ct.textarea`
  ${g1}
  padding: 8px;
  resize: none;
  ${({variant:r})=>Pm(r)}
`,cu=$.forwardRef(({className:r,disabled:t=!1,fullWidth:i,onChange:a=cs,shadow:l=!0,style:c,variant:f="default",...m},g)=>{const y=f==="flat"?uD:lD,_=$.useMemo(()=>{var E;return m.multiline?F.createElement(hD,{disabled:t,onChange:t?void 0:a,readOnly:t,ref:g,variant:f,...m}):F.createElement(cD,{disabled:t,onChange:t?void 0:a,readOnly:t,ref:g,type:(E=m.type)!==null&&E!==void 0?E:"text",variant:f,...m})},[t,a,m,g,f]);return F.createElement(y,{className:r,fullWidth:i,$disabled:t,shadow:l,style:c},_)});cu.displayName="TextInput";const fD=ct.div`
  display: inline-flex;
  align-items: center;
`,qp=ct(Ve)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:r})=>r==="flat"?vt`
          height: calc(50% - 1px);
        `:vt`
          height: 50%;
        `}
`,dD=ct.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:r})=>r==="flat"?vt`
          height: calc(${on.md} - 4px);
        `:vt`
          height: ${on.md};
          margin-left: 2px;
        `}
`,$b=ct.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:r})=>r?vt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:vt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${qp}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
    );
    ${({invert:r})=>r?vt`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:vt`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,y1=$.forwardRef(({className:r,defaultValue:t,disabled:i=!1,max:a,min:l,onChange:c,readOnly:f,step:m=1,style:g,value:y,variant:_="default",width:E,...x},j)=>{const[q,K]=ca({defaultValue:t,onChange:c,readOnly:f,value:y}),G=$.useCallback(lt=>{const S=parseFloat(lt.target.value);K(S)},[K]),rt=$.useCallback(lt=>{const S=Ja(parseFloat(((q??0)+lt).toFixed(2)),l??null,a??null);K(S),c==null||c(S)},[a,l,c,K,q]),J=$.useCallback(()=>{q!==void 0&&(c==null||c(q))},[c,q]),Z=$.useCallback(()=>{rt(m)},[rt,m]),ot=$.useCallback(()=>{rt(-m)},[rt,m]),st=_==="flat"?"flat":"raised";return F.createElement(fD,{className:r,style:{...g,width:E!==void 0?ua(E):"auto"},...x},F.createElement(cu,{value:q,variant:_,onChange:G,disabled:i,type:"number",readOnly:f,ref:j,fullWidth:!0,onBlur:J}),F.createElement(dD,{variant:_},F.createElement(qp,{"data-testid":"increment",variant:st,disabled:i||f,onClick:Z},F.createElement($b,{invert:!0})),F.createElement(qp,{"data-testid":"decrement",variant:st,disabled:i||f,onClick:ot},F.createElement($b,null))))});y1.displayName="NumberInput";function pD(){const r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let i=0;i<10;i+=1)t+=r[Math.floor(Math.random()*r.length)];return t}const v1=r=>$.useMemo(()=>pD(),[r]),b1=vt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,_1=vt`
  background: ${({theme:r})=>r.hoverBackground};
  color: ${({theme:r})=>r.canvasTextInvert};
`,Hm=ct.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,mD=ct.div`
  ${b1}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Hm}:focus & {
    ${_1}
    border: 2px dotted ${({theme:r})=>r.focusSecondary};
  }
`,A1=vt`
  height: ${on.md};
  display: inline-block;
  color: ${({$disabled:r=!1,theme:t})=>r?hr():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:r})=>r?"default":"pointer"};
`,gD=ct(Or)`
  ${A1}
  background: ${({$disabled:r=!1,theme:t})=>r?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,yD=ct.div`
  ${as()}
  ${A1}
  background: ${({$disabled:r=!1,theme:t})=>r?t.flatLight:t.canvas};
`,vD=ct.select`
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
  ${b1}
  cursor: pointer;
  &:disabled {
    ${hr()};
    background: ${({theme:r})=>r.material};
    cursor: default;
  }
`,E1=ct(Fh).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:r="default"})=>r==="flat"?vt`
          height: 100%;
          margin-right: 0;
        `:vt`
          height: 100%;
        `}
  ${({native:r=!1,variant:t="default"})=>r&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:r=!1,native:t=!1})=>r||t?"none":"auto"}
`,bD=ct.span`
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
    ${({$disabled:r=!1,theme:t})=>r?t.materialTextDisabled:t.materialText};
  ${({$disabled:r=!1,theme:t})=>r&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${E1}:active & {
    margin-top: 2px;
  }
`,_D=ct.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:r})=>r.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${zm};
  ${({variant:r="default"})=>r==="flat"?vt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:vt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:r="default"})=>Pm(r)}
`,AD=ct.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${on.md} - 4px);
  line-height: calc(${on.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:r})=>r.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:r})=>r?_1:""}
  user-select: none;
`,ED=[],T1=({className:r,defaultValue:t,disabled:i,native:a,onChange:l,options:c=ED,readOnly:f,style:m,value:g,variant:y,width:_})=>{var E;const x=$.useMemo(()=>c.filter(Boolean),[c]),[j,q]=ca({defaultValue:t??((E=x==null?void 0:x[0])===null||E===void 0?void 0:E.value),onChange:l,readOnly:f,value:g}),K=!(i||f),G=$.useMemo(()=>({className:r,style:{...m,width:_}}),[r,m,_]),rt=$.useMemo(()=>F.createElement(E1,{as:"div","data-testid":"select-button",$disabled:i,native:a,tabIndex:-1,variant:y==="flat"?"flat":"raised"},F.createElement(bD,{"data-testid":"select-icon",$disabled:i})),[i,a,y]),J=$.useMemo(()=>y==="flat"?yD:gD,[y]);return $.useMemo(()=>({isEnabled:K,options:x,value:j,setValue:q,wrapperProps:G,DropdownButton:rt,Wrapper:J}),[rt,J,K,x,q,j,G])},TD={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},wD=1e3,SD=({onBlur:r,onChange:t,onClose:i,onFocus:a,onKeyDown:l,onMouseDown:c,onOpen:f,open:m,options:g,readOnly:y,value:_,selectRef:E,setValue:x,wrapperRef:j})=>{const q=$.useRef(null),K=$.useRef([]),G=$.useRef(0),rt=$.useRef(0),J=$.useRef(),Z=$.useRef("search"),ot=$.useRef(""),st=$.useRef(),[lt,S]=ca({defaultValue:!1,onChange:f,onChangePropName:"onOpen",readOnly:y,value:m,valuePropName:"open"}),w=$.useMemo(()=>{const ut=g.findIndex(kt=>kt.value===_);return G.current=Ja(ut,0,null),g[ut]},[g,_]),[R,V]=$.useState(g[0]),N=$.useCallback(ut=>{const kt=q.current,Mt=K.current[ut];if(!Mt||!kt){J.current=ut;return}J.current=void 0;const Ut=kt.clientHeight,Xt=kt.scrollTop,ge=kt.scrollTop+Ut,be=Mt.offsetTop,Ge=Mt.offsetHeight,ye=Mt.offsetTop+Mt.offsetHeight;be<Xt&&kt.scrollTo(0,be),ye>ge&&kt.scrollTo(0,be-Ut+Ge),Mt.focus({preventScroll:!0})},[q]),O=$.useCallback((ut,{scroll:kt}={})=>{var Mt;const Ut=g.length-1;let Xt;switch(ut){case"first":{Xt=0;break}case"last":{Xt=Ut;break}case"next":{Xt=Ja(rt.current+1,0,Ut);break}case"previous":{Xt=Ja(rt.current-1,0,Ut);break}case"selected":{Xt=Ja((Mt=G.current)!==null&&Mt!==void 0?Mt:0,0,Ut);break}default:Xt=ut}rt.current=Xt,V(g[Xt]),kt&&N(Xt)},[rt,g,N]),C=$.useCallback(({fromEvent:ut})=>{S(!0),O("selected",{scroll:!0}),f==null||f({fromEvent:ut})},[O,f,S]),Bt=$.useCallback(()=>{Z.current="search",ot.current="",clearTimeout(st.current)},[]),Nt=$.useCallback(({focusSelect:ut,fromEvent:kt})=>{var Mt;i==null||i({fromEvent:kt}),S(!1),V(g[0]),Bt(),J.current=void 0,ut&&((Mt=E.current)===null||Mt===void 0||Mt.focus())},[Bt,i,g,E,S]),Y=$.useCallback(({fromEvent:ut})=>{lt?Nt({focusSelect:!1,fromEvent:ut}):C({fromEvent:ut})},[Nt,C,lt]),pt=$.useCallback((ut,{fromEvent:kt})=>{G.current!==ut&&(G.current=ut,x(g[ut].value),t==null||t(g[ut],{fromEvent:kt}))},[t,g,x]),dt=$.useCallback(({focusSelect:ut,fromEvent:kt})=>{pt(rt.current,{fromEvent:kt}),Nt({focusSelect:ut,fromEvent:kt})},[Nt,pt]),Et=$.useCallback((ut,{fromEvent:kt,select:Mt})=>{var Ut;switch(Z.current==="cycleFirstLetter"&&ut!==ot.current&&(Z.current="search"),ut===ot.current?Z.current="cycleFirstLetter":ot.current+=ut,Z.current){case"search":{let Xt=g.findIndex(ge=>{var be;return((be=ge.label)===null||be===void 0?void 0:be.toLocaleUpperCase().indexOf(ot.current))===0});Xt<0&&(Xt=g.findIndex(ge=>{var be;return((be=ge.label)===null||be===void 0?void 0:be.toLocaleUpperCase().indexOf(ut))===0}),ot.current=ut),Xt>=0&&(Mt?pt(Xt,{fromEvent:kt}):O(Xt,{scroll:!0}));break}case"cycleFirstLetter":{const Xt=Mt?(Ut=G.current)!==null&&Ut!==void 0?Ut:-1:rt.current;let ge=g.findIndex((be,Ge)=>{var ye;return Ge>Xt&&((ye=be.label)===null||ye===void 0?void 0:ye.toLocaleUpperCase().indexOf(ut))===0});ge<0&&(ge=g.findIndex(be=>{var Ge;return((Ge=be.label)===null||Ge===void 0?void 0:Ge.toLocaleUpperCase().indexOf(ut))===0})),ge>=0&&(Mt?pt(ge,{fromEvent:kt}):O(ge,{scroll:!0}));break}}clearTimeout(st.current),st.current=setTimeout(()=>{Z.current==="search"&&(ot.current="")},wD)},[O,g,pt]),k=$.useCallback(ut=>{var kt;ut.button===0&&(ut.preventDefault(),(kt=E.current)===null||kt===void 0||kt.focus(),Y({fromEvent:ut}),c==null||c(ut))},[c,E,Y]),W=$.useCallback(ut=>{dt({focusSelect:!0,fromEvent:ut})},[dt]),ft=$.useCallback(ut=>{const{altKey:kt,code:Mt,ctrlKey:Ut,metaKey:Xt,shiftKey:ge}=ut,{ARROW_DOWN:be,ARROW_UP:Ge,END:ye,ENTER:On,ESC:ie,HOME:Te,SPACE:Sn,TAB:jr}=TD,hi=kt||Ut||Xt||ge;if(!(Mt===jr&&(kt||Ut||Xt)||Mt!==jr&&hi))switch(Mt){case be:{if(ut.preventDefault(),!lt){C({fromEvent:ut});return}O("next",{scroll:!0});break}case Ge:{if(ut.preventDefault(),!lt){C({fromEvent:ut});return}O("previous",{scroll:!0});break}case ye:{if(ut.preventDefault(),!lt){C({fromEvent:ut});return}O("last",{scroll:!0});break}case On:{if(!lt)return;ut.preventDefault(),dt({focusSelect:!0,fromEvent:ut});break}case ie:{if(!lt)return;ut.preventDefault(),Nt({focusSelect:!0,fromEvent:ut});break}case Te:{if(ut.preventDefault(),!lt){C({fromEvent:ut});return}O("first",{scroll:!0});break}case Sn:{ut.preventDefault(),lt?dt({focusSelect:!0,fromEvent:ut}):C({fromEvent:ut});break}case jr:{if(!lt)return;ge||ut.preventDefault(),dt({focusSelect:!ge,fromEvent:ut});break}default:!hi&&Mt.match(/^Key/)&&(ut.preventDefault(),ut.stopPropagation(),Et(Mt.replace(/^Key/,""),{select:!lt,fromEvent:ut}))}},[O,Nt,lt,C,Et,dt]),tt=$.useCallback(ut=>{ft(ut),l==null||l(ut)},[ft,l]),ht=$.useCallback(ut=>{O(ut)},[O]),bt=$.useCallback(ut=>{lt||(Bt(),r==null||r(ut))},[Bt,r,lt]),mt=$.useCallback(ut=>{Bt(),a==null||a(ut)},[Bt,a]),St=$.useCallback(ut=>{q.current=ut,J.current!==void 0&&N(J.current)},[N]),It=$.useCallback((ut,kt)=>{K.current[kt]=ut,J.current===kt&&N(J.current)},[N]);return $.useEffect(()=>{if(!lt)return()=>{};const ut=kt=>{var Mt;const Ut=kt.target;!((Mt=j.current)===null||Mt===void 0)&&Mt.contains(Ut)||(kt.preventDefault(),Nt({focusSelect:!1,fromEvent:kt}))};return document.addEventListener("mousedown",ut),()=>{document.removeEventListener("mousedown",ut)}},[Nt,lt,j]),$.useMemo(()=>({activeOption:R,handleActivateOptionIndex:ht,handleBlur:bt,handleButtonKeyDown:tt,handleDropdownKeyDown:ft,handleFocus:mt,handleMouseDown:k,handleOptionClick:W,handleSetDropdownRef:St,handleSetOptionRef:It,open:lt,selectedOption:w}),[R,ht,bt,tt,mt,ft,k,W,St,It,lt,w])},xD=$.forwardRef(({className:r,defaultValue:t,disabled:i,onChange:a,options:l,readOnly:c,style:f,value:m,variant:g,width:y,..._},E)=>{const{isEnabled:x,options:j,setValue:q,value:K,DropdownButton:G,Wrapper:rt}=T1({defaultValue:t,disabled:i,native:!0,onChange:a,options:l,readOnly:c,value:m,variant:g}),J=$.useCallback(Z=>{const ot=j.find(st=>st.value===Z.target.value);ot&&(q(ot.value),a==null||a(ot,{fromEvent:Z}))},[a,j,q]);return F.createElement(rt,{className:r,style:{...f,width:y}},F.createElement(Hm,null,F.createElement(vD,{..._,disabled:i,onChange:x?J:cs,ref:E,value:K},j.map((Z,ot)=>{var st;return F.createElement("option",{key:`${Z.value}-${ot}`,value:Z.value},(st=Z.label)!==null&&st!==void 0?st:Z.value)})),G))});xD.displayName="SelectNative";function RD({activateOptionIndex:r,active:t,index:i,onClick:a,option:l,selected:c,setRef:f}){const m=$.useCallback(()=>{r(i)},[r,i]),g=$.useCallback(_=>{f(_,i)},[i,f]),y=v1();return F.createElement(AD,{active:t,"aria-selected":c?"true":void 0,"data-value":l.value,id:y,onClick:a,onMouseEnter:m,ref:g,role:"option",tabIndex:0},l.label)}function CD({"aria-label":r,"aria-labelledby":t,className:i,defaultValue:a,disabled:l=!1,formatDisplay:c,inputProps:f,labelId:m,menuMaxHeight:g,name:y,onBlur:_,onChange:E,onClose:x,onFocus:j,onKeyDown:q,onMouseDown:K,onOpen:G,open:rt,options:J,readOnly:Z,shadow:ot=!0,style:st,variant:lt="default",value:S,width:w="auto",...R},V){const{isEnabled:N,options:O,setValue:C,value:Bt,wrapperProps:Nt,DropdownButton:Y,Wrapper:pt}=T1({className:i,defaultValue:a,disabled:l,native:!1,onChange:E,options:J,style:st,readOnly:Z,value:S,variant:lt,width:w}),dt=$.useRef(null),Et=$.useRef(null),k=$.useRef(null),{activeOption:W,handleActivateOptionIndex:ft,handleBlur:tt,handleButtonKeyDown:ht,handleDropdownKeyDown:bt,handleFocus:mt,handleMouseDown:St,handleOptionClick:It,handleSetDropdownRef:ut,handleSetOptionRef:kt,open:Mt,selectedOption:Ut}=SD({onBlur:_,onChange:E,onClose:x,onFocus:j,onKeyDown:q,onMouseDown:K,onOpen:G,open:rt,options:O,value:Bt,selectRef:Et,setValue:C,wrapperRef:k});$.useImperativeHandle(V,()=>({focus:On=>{var ie;(ie=Et.current)===null||ie===void 0||ie.focus(On)},node:dt.current,value:String(Bt)}),[Bt]);const Xt=$.useMemo(()=>Ut?typeof c=="function"?c(Ut):Ut.label:"",[c,Ut]),ge=N?1:void 0,be=$.useMemo(()=>g?{overflow:"auto",maxHeight:g}:void 0,[g]),Ge=v1(),ye=$.useMemo(()=>O.map((On,ie)=>{const Te=`${Bt}-${ie}`,Sn=On===W,jr=On===Ut;return F.createElement(RD,{activateOptionIndex:ft,active:Sn,index:ie,key:Te,onClick:It,option:On,selected:jr,setRef:kt})}),[W,ft,It,kt,O,Ut,Bt]);return F.createElement(pt,{...Nt,$disabled:l,ref:k,shadow:ot,style:{...st,width:w}},F.createElement("input",{name:y,ref:dt,type:"hidden",value:String(Bt),...f}),F.createElement(Hm,{"aria-disabled":l,"aria-expanded":Mt,"aria-haspopup":"listbox","aria-label":r,"aria-labelledby":t??m,"aria-owns":N&&Mt?Ge:void 0,onBlur:tt,onFocus:mt,onKeyDown:ht,onMouseDown:N?St:K,ref:Et,role:"button",tabIndex:ge,...R},F.createElement(mD,null,Xt),Y),N&&Mt&&F.createElement(_D,{id:Ge,onKeyDown:bt,ref:ut,role:"listbox",style:be,tabIndex:0,variant:lt},ye))}const Gm=$.forwardRef(CD);Gm.displayName="Select";const DD=ct.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${r=>r.noPadding?"0":"4px"};
`,po=$.forwardRef(function({children:t,noPadding:i=!1,...a},l){return F.createElement(DD,{noPadding:i,ref:l,...a},t)});po.displayName="Toolbar";const ID=ct.div`
  padding: 16px;
`,Yn=$.forwardRef(function({children:t,...i},a){return F.createElement(ID,{ref:a,...i},t)});Yn.displayName="WindowContent";const kD=ct.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:r})=>r.material};
  ${({active:r})=>r===!1?vt`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:vt`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Fh} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ai=$.forwardRef(function({active:t=!0,children:i,...a},l){return F.createElement(kD,{active:t,ref:l,...a},i)});ai.displayName="WindowHeader";const ND=ct.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${xe({style:"window"})}
  ${fr()}
`,VD=ct.span`
  ${({theme:r})=>vt`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${r.borderLightest} 16.67%,
      ${r.material} 16.67%,
      ${r.material} 33.33%,
      ${r.borderDark} 33.33%,
      ${r.borderDark} 50%,
      ${r.borderLightest} 50%,
      ${r.borderLightest} 66.67%,
      ${r.material} 66.67%,
      ${r.material} 83.33%,
      ${r.borderDark} 83.33%,
      ${r.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,si=$.forwardRef(({children:r,resizable:t=!1,resizeRef:i,shadow:a=!0,...l},c)=>F.createElement(ND,{ref:c,shadow:a,...l},r,t&&F.createElement(VD,{"data-testid":"resizeHandle",ref:i})));si.displayName="Window";const MD=ct(so)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:r})=>r.canvas};
`,OD=ct.div`
  display: flex;
  background: ${({theme:r})=>r.materialDark};
  color: #dfe0e3;
`,jD=ct.div`
  display: flex;
  flex-wrap: wrap;
`,ri=ct.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,BD=ct.span`
  cursor: pointer;

  background: ${({active:r,theme:t})=>r?t.hoverBackground:"transparent"};
  color: ${({active:r,theme:t})=>r?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:r,active:t})=>t?"none":r.materialDark};
  }
`,LD=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function zD(r,t){return new Date(r,t+1,0).getDate()}function UD(r,t,i){return new Date(r,t,i).getDay()}function PD(r){const t=new Date(Date.parse(r)),i=t.getUTCDate(),a=t.getUTCMonth(),l=t.getUTCFullYear();return{day:i,month:a,year:l}}const $D=$.forwardRef(({className:r,date:t=new Date().toISOString(),onAccept:i,onCancel:a,shadow:l=!0},c)=>{const[f,m]=$.useState(()=>PD(t)),{year:g,month:y,day:_}=f,E=$.useCallback(({value:G})=>{m(rt=>({...rt,month:G}))},[]),x=$.useCallback(G=>{m(rt=>({...rt,year:G}))},[]),j=$.useCallback(G=>{m(rt=>({...rt,day:G}))},[]),q=$.useCallback(()=>{const G=[f.year,f.month+1,f.day].map(rt=>String(rt).padStart(2,"0")).join("-");i==null||i(G)},[f.day,f.month,f.year,i]),K=$.useMemo(()=>{const G=Array.from({length:42}),rt=UD(g,y,1);let J=_;const Z=zD(g,y);return J=J<Z?J:Z,G.forEach((ot,st)=>{if(st>=rt&&st<Z+rt){const lt=st-rt+1;G[st]=F.createElement(ri,{key:st,onClick:()=>{j(lt)}},F.createElement(BD,{active:lt===J},lt))}else G[st]=F.createElement(ri,{key:st})}),G},[_,j,y,g]);return F.createElement(si,{className:r,ref:c,shadow:l,style:{margin:20}},F.createElement(ai,null,F.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),F.createElement(Yn,null,F.createElement(po,{noPadding:!0,style:{justifyContent:"space-between"}},F.createElement(Gm,{options:LD,value:y,onChange:E,width:128,menuMaxHeight:200}),F.createElement(y1,{value:g,onChange:x,width:100})),F.createElement(MD,null,F.createElement(OD,null,F.createElement(ri,null,"S"),F.createElement(ri,null,"M"),F.createElement(ri,null,"T"),F.createElement(ri,null,"W"),F.createElement(ri,null,"T"),F.createElement(ri,null,"F"),F.createElement(ri,null,"S")),F.createElement(jD,null,K)),F.createElement(po,{noPadding:!0,style:{justifyContent:"space-between"}},F.createElement(Ve,{fullWidth:!0,onClick:a,disabled:!a},"Cancel"),F.createElement(Ve,{fullWidth:!0,onClick:i?q:void 0,disabled:!i},"OK"))))});$D.displayName="DatePicker";const qD=r=>{switch(r){case"status":case"well":return vt`
        ${xe({style:"status"})}
      `;case"window":case"outside":return vt`
        ${xe({style:"window"})}
      `;case"field":return vt`
        ${xe({style:"field"})}
      `;default:return vt`
        ${xe()}
      `}},HD=ct.div`
  position: relative;
  font-size: 1rem;
  ${({variant:r})=>qD(r)}
  ${({variant:r})=>fr(r==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Hp=$.forwardRef(({children:r,shadow:t=!1,variant:i="window",...a},l)=>F.createElement(HD,{ref:l,shadow:t,variant:i,...a},r));Hp.displayName="Frame";const GD=ct.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:r,variant:t})=>t==="flat"?r.flatDark:r.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:r})=>r.materialText};
  ${({variant:r})=>r!=="flat"&&vt`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${r=>r.$disabled&&hr()}
`,FD=ct.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:r,variant:t})=>t==="flat"?r.canvas:r.material};
`,QD=$.forwardRef(({label:r,disabled:t=!1,variant:i="default",children:a,...l},c)=>F.createElement(GD,{"aria-disabled":t,$disabled:t,variant:i,ref:c,...l},r&&F.createElement(FD,{variant:i},r),a));QD.displayName="GroupBox";const Hl=ct.div`
  ${({theme:r,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${ua(t)};
  width: 5px;
  border-top: 2px solid ${r.borderLightest};
  border-left: 2px solid ${r.borderLightest};
  border-bottom: 2px solid ${r.borderDark};
  border-right: 2px solid ${r.borderDark};
  background: ${r.material};
`}
`;Hl.displayName="Handle";const YD="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",KD=ct.div`
  display: inline-block;
  height: ${({size:r})=>ua(r)};
  width: ${({size:r})=>ua(r)};
`,XD=ct.span`
  display: block;
  background: ${YD};
  background-size: cover;
  width: 100%;
  height: 100%;
`,ZD=$.forwardRef(({size:r=30,...t},i)=>F.createElement(KD,{size:r,ref:i,...t},F.createElement(XD,null)));ZD.displayName="Hourglass";const WD=ct.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,JD=ct.div`
  position: relative;
`,t4=ct.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:r})=>r.material};
  border-top: 4px solid ${({theme:r})=>r.borderLightest};
  border-left: 4px solid ${({theme:r})=>r.borderLightest};
  border-bottom: 4px solid ${({theme:r})=>r.borderDark};
  border-right: 4px solid ${({theme:r})=>r.borderDark};

  outline: 1px dotted ${({theme:r})=>r.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:r})=>r.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:r})=>r.borderDarkest};

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
`,e4=ct(Or).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,n4=ct.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:r})=>r.material};
  border-left: 2px solid ${({theme:r})=>r.borderLightest};
  border-bottom: 2px solid ${({theme:r})=>r.borderDarkest};
  border-right: 2px solid ${({theme:r})=>r.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:r})=>r.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:r})=>r.material};
    border-left: 2px solid ${({theme:r})=>r.borderLightest};
    border-right: 2px solid ${({theme:r})=>r.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:r})=>r.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:r})=>r.material};
    border: 2px solid ${({theme:r})=>r.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:r})=>r.borderLightest},
      1px 1px 0 1px ${({theme:r})=>r.borderDarkest};
  }
`,r4=$.forwardRef(({backgroundStyles:r,children:t,...i},a)=>F.createElement(WD,{ref:a,...i},F.createElement(JD,null,F.createElement(t4,null,F.createElement(e4,{style:r},t)),F.createElement(n4,null))));r4.displayName="Monitor";const i4=ct.div`
  display: inline-block;
  height: ${on.md};
  width: 100%;
`,a4=ct(Or)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,w1=vt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,s4=ct.div`
  position: relative;
  top: 4px;
  ${w1}
  background: ${({theme:r})=>r.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:r})=>r.materialText};
`,o4=ct.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${w1}
  color: ${({theme:r})=>r.materialTextInvert};
  background: ${({theme:r})=>r.progress};
  clip-path: polygon(
    0 0,
    ${({value:r=0})=>r}% 0,
    ${({value:r=0})=>r}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,l4=ct.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,S1=17,u4=ct.span`
  display: inline-block;
  width: ${S1}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:r})=>r.progress};
  border-color: ${({theme:r})=>r.material};
  border-width: 0px 1px;
  border-style: solid;
`,xh=$.forwardRef(({hideValue:r=!1,shadow:t=!0,value:i,variant:a="default",...l},c)=>{const f=r?null:`${i}%`,m=$.useRef(null),[g,y]=$.useState([]),_=$.useCallback(()=>{if(!m.current||i===void 0)return;const E=m.current.getBoundingClientRect().width,x=Math.round(i/100*E/S1);y(Array.from({length:x}))},[i]);return $.useEffect(()=>(_(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)),[_]),F.createElement(i4,{"aria-valuenow":i!==void 0?Math.round(i):void 0,ref:c,role:"progressbar",variant:a,...l},F.createElement(a4,{variant:a,shadow:t},a==="default"?F.createElement(F.Fragment,null,F.createElement(s4,{"data-testid":"defaultProgress1"},f),F.createElement(o4,{"data-testid":"defaultProgress2",value:i},f)):F.createElement(l4,{ref:m,"data-testid":"tileProgress"},g.map((E,x)=>F.createElement(u4,{key:x})))))});xh.displayName="ProgressBar";const x1=vt`
  width: ${Mr}px;
  height: ${Mr}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,c4=ct(Or)`
  ${x1}
  background: ${({$disabled:r,theme:t})=>r?t.material:t.canvas};

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
`,h4=ct.div`
  ${as()}
  ${x1}
  outline: none;
  background: ${({$disabled:r,theme:t})=>r?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:r})=>r.flatDark};
    border-radius: 50%;
  }
`,f4=ct.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${r=>r.$disabled?r.theme.checkmarkDisabled:r.theme.checkmark};
`,d4={flat:h4,default:c4},p4=$.forwardRef(({checked:r,className:t="",disabled:i=!1,label:a="",onChange:l,style:c={},variant:f="default",...m},g)=>{const y=d4[f];return F.createElement($m,{$disabled:i,className:t,style:c},F.createElement(y,{$disabled:i,role:"presentation"},r&&F.createElement(f4,{$disabled:i,variant:f})),F.createElement(Sh,{disabled:i,onChange:i?void 0:l,readOnly:i,type:"radio",checked:r,ref:g,...m}),a&&F.createElement(qm,null,a))});p4.displayName="Radio";const m4=typeof window<"u"?$.useLayoutEffect:$.useEffect;function Ka(r){const t=$.useRef(r);return m4(()=>{t.current=r}),$.useCallback((...i)=>(0,t.current)(...i),[])}function qb(r,t){typeof r=="function"?r(t):r&&(r.current=t)}function Hb(r,t){return $.useMemo(()=>r==null&&t==null?null:i=>{qb(r,i),qb(t,i)},[r,t])}var g4=t_();let Qh=!0,Gp=!1,Gb;const y4={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function v4(r){if("type"in r){const{type:t,tagName:i}=r;if(i==="INPUT"&&y4[t]&&!r.readOnly||i==="TEXTAREA"&&!r.readOnly)return!0}return!!("isContentEditable"in r&&r.isContentEditable)}function b4(r){r.metaKey||r.altKey||r.ctrlKey||(Qh=!0)}function cp(){Qh=!1}function _4(){this.visibilityState==="hidden"&&Gp&&(Qh=!0)}function A4(r){r.addEventListener("keydown",b4,!0),r.addEventListener("mousedown",cp,!0),r.addEventListener("pointerdown",cp,!0),r.addEventListener("touchstart",cp,!0),r.addEventListener("visibilitychange",_4,!0)}function E4(r){const{target:t}=r;try{return t.matches(":focus-visible")}catch{}return Qh||v4(t)}function T4(){Gp=!0,window.clearTimeout(Gb),Gb=window.setTimeout(()=>{Gp=!1},100)}function w4(){const r=$.useCallback(t=>{const i=g4.findDOMNode(t);i!=null&&A4(i.ownerDocument)},[]);return{isFocusVisible:E4,onBlurVisible:T4,ref:r}}function S4(r,t,i){return(i-t)*r+t}function Gc(r,t){if(t!==void 0&&"changedTouches"in r){for(let i=0;i<r.changedTouches.length;i+=1){const a=r.changedTouches[i];if(a.identifier===t)return{x:a.clientX,y:a.clientY}}return!1}return"clientX"in r?{x:r.clientX,y:r.clientY}:!1}function Fc(r){return r&&r.ownerDocument||document}function x4(r,t){var i;const{index:a}=(i=r.reduce((l,c,f)=>{const m=Math.abs(t-c);return l===null||m<l.distance||m===l.distance?{distance:m,index:f}:l},null))!==null&&i!==void 0?i:{};return a??-1}const R4=ct.div`
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
    height: ${({hasMarks:r})=>r?"41px":"39px"};
    ${({isFocused:r,theme:t})=>r&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:r,size:t})=>r==="vertical"?vt`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `:vt`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:r})=>r?"none":"auto"};
`,R1=()=>vt`
  position: absolute;
  ${({orientation:r})=>r==="vertical"?vt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:vt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,C4=ct(Or)`
  ${R1()}
`,D4=ct(Or)`
  ${R1()}

  border-left-color: ${({theme:r})=>r.flatLight};
  border-top-color: ${({theme:r})=>r.flatLight};
  border-right-color: ${({theme:r})=>r.canvas};
  border-bottom-color: ${({theme:r})=>r.canvas};
  &:before {
    border-left-color: ${({theme:r})=>r.flatDark};
    border-top-color: ${({theme:r})=>r.flatDark};
    border-right-color: ${({theme:r})=>r.flatLight};
    border-bottom-color: ${({theme:r})=>r.flatLight};
  }
`,I4=ct.span`
  position: relative;
  ${({orientation:r})=>r==="vertical"?vt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:vt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:r})=>r==="flat"?vt`
          ${as()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:vt`
          ${fr()}
          ${xe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:r,theme:t})=>r&&gu({mainColor:t.material,secondaryColor:t.borderLightest})}
`,lo=6,k4=ct.span`
  display: inline-block;
  position: absolute;

  ${({orientation:r})=>r==="vertical"?vt`
          right: ${-lo-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${lo}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:vt`
          bottom: ${-lo}px;
          height: ${lo}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:r})=>r.materialText};
  ${({$disabled:r,theme:t})=>r&&vt`
      ${hr()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,N4=ct.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:r})=>r==="vertical"?vt`
          transform: translate(${lo+2}px, ${lo+1}px);
        `:vt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,V4=$.forwardRef(({defaultValue:r,disabled:t=!1,marks:i=!1,max:a=100,min:l=0,name:c,onChange:f,onChangeCommitted:m,onMouseDown:g,orientation:y="horizontal",size:_="100%",step:E=1,value:x,variant:j="default",...q},K)=>{const G=j==="flat"?D4:C4,rt=y==="vertical",[J=l,Z]=ca({defaultValue:r,onChange:f??m,value:x}),{isFocusVisible:ot,onBlurVisible:st,ref:lt}=w4(),[S,w]=$.useState(!1),R=$.useRef(),V=$.useRef(null),N=Hb(lt,R),O=Hb(K,N),C=Ka(tt=>{ot(tt)&&w(!0)}),Bt=Ka(()=>{S!==!1&&(w(!1),st())}),Nt=$.useRef(),Y=$.useMemo(()=>i===!0&&Number.isFinite(E)?[...Array(Math.round((a-l)/E)+1)].map((tt,ht)=>({label:void 0,value:l+E*ht})):Array.isArray(i)?i:[],[i,a,l,E]),pt=Ka(tt=>{const ht=(a-l)/10,bt=Y.map(It=>It.value),mt=bt.indexOf(J);let St=0;switch(tt.key){case"Home":St=l;break;case"End":St=a;break;case"PageUp":E&&(St=J+ht);break;case"PageDown":E&&(St=J-ht);break;case"ArrowRight":case"ArrowUp":E?St=J+E:St=bt[mt+1]||bt[bt.length-1];break;case"ArrowLeft":case"ArrowDown":E?St=J-E:St=bt[mt-1]||bt[0];break;default:return}tt.preventDefault(),E&&(St=Ub(St,E,l)),St=Ja(St,l,a),Z(St),w(!0),f==null||f(St),m==null||m(St)}),dt=$.useCallback(tt=>{if(!R.current)return 0;const ht=R.current.getBoundingClientRect();let bt;rt?bt=(ht.bottom-tt.y)/ht.height:bt=(tt.x-ht.left)/ht.width;let mt;if(mt=S4(bt,l,a),E)mt=Ub(mt,E,l);else{const St=Y.map(ut=>ut.value),It=x4(St,mt);mt=St[It]}return mt=Ja(mt,l,a),mt},[Y,a,l,E,rt]),Et=Ka(tt=>{var ht;const bt=Gc(tt,Nt.current);if(!bt)return;const mt=dt(bt);(ht=V.current)===null||ht===void 0||ht.focus(),Z(mt),w(!0),f==null||f(mt)}),k=Ka(tt=>{const ht=Gc(tt,Nt.current);if(!ht)return;const bt=dt(ht);m==null||m(bt),Nt.current=void 0;const mt=Fc(R.current);mt.removeEventListener("mousemove",Et),mt.removeEventListener("mouseup",k),mt.removeEventListener("touchmove",Et),mt.removeEventListener("touchend",k)}),W=Ka(tt=>{var ht;g==null||g(tt),tt.preventDefault(),(ht=V.current)===null||ht===void 0||ht.focus(),w(!0);const bt=Gc(tt,Nt.current);if(bt){const St=dt(bt);Z(St),f==null||f(St)}const mt=Fc(R.current);mt.addEventListener("mousemove",Et),mt.addEventListener("mouseup",k)}),ft=Ka(tt=>{var ht;tt.preventDefault();const bt=tt.changedTouches[0];bt!=null&&(Nt.current=bt.identifier),(ht=V.current)===null||ht===void 0||ht.focus(),w(!0);const mt=Gc(tt,Nt.current);if(mt){const It=dt(mt);Z(It),f==null||f(It)}const St=Fc(R.current);St.addEventListener("touchmove",Et),St.addEventListener("touchend",k)});return $.useEffect(()=>{const{current:tt}=R;tt==null||tt.addEventListener("touchstart",ft);const ht=Fc(tt);return()=>{tt==null||tt.removeEventListener("touchstart",ft),ht.removeEventListener("mousemove",Et),ht.removeEventListener("mouseup",k),ht.removeEventListener("touchmove",Et),ht.removeEventListener("touchend",k)}},[k,Et,ft]),F.createElement(R4,{$disabled:t,hasMarks:!!Y.length,isFocused:S,onMouseDown:W,orientation:y,ref:O,size:ua(_),...q},F.createElement("input",{disabled:t,name:c,type:"hidden",value:J??0}),Y&&Y.map(tt=>F.createElement(k4,{$disabled:t,"data-testid":"tick",key:tt.value/(a-l)*100,orientation:y,style:{[rt?"bottom":"left"]:`${(tt.value-l)/(a-l)*100}%`}},tt.label&&F.createElement(N4,{"aria-hidden":!0,"data-testid":"mark",orientation:y},tt.label))),F.createElement(G,{orientation:y,variant:j}),F.createElement(I4,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":y,"aria-valuemax":a,"aria-valuemin":l,"aria-valuenow":J,onBlur:Bt,onFocus:C,onKeyDown:pt,orientation:y,ref:V,role:"slider",style:{[rt?"bottom":"left"]:`${(rt?-100:0)+100*(J-l)/(a-l)}%`},tabIndex:t?void 0:0,variant:j}))});V4.displayName="Slider";const M4=ct.tbody`
  background: ${({theme:r})=>r.canvas};
  display: table-row-group;
  box-shadow: ${Um};
  overflow-y: auto;
`,O4=$.forwardRef(function({children:t,...i},a){return F.createElement(M4,{ref:a,...i},t)});O4.displayName="TableBody";const j4=ct.td`
  padding: 0 8px;
`,B4=$.forwardRef(function({children:t,...i},a){return F.createElement(j4,{ref:a,...i},t)});B4.displayName="TableDataCell";const L4=ct.thead`
  display: table-header-group;
`,z4=$.forwardRef(function({children:t,...i},a){return F.createElement(L4,{ref:a,...i},t)});z4.displayName="TableHead";const U4=ct.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:r})=>r.material};
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
    ${xe()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:r})=>!r&&vt`
      &:active {
        &:before {
          ${xe({invert:!0,style:"window"})}
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

  color: ${({theme:r})=>r.materialText};
  ${({$disabled:r})=>r&&hr()}
  &:hover {
    color: ${({theme:r})=>r.materialText};
    ${({$disabled:r})=>r&&hr()}
  }
`,P4=$.forwardRef(function({disabled:t=!1,children:i,onClick:a,onTouchStart:l=cs,sort:c,...f},m){const g=c==="asc"?"ascending":c==="desc"?"descending":void 0;return F.createElement(U4,{$disabled:t,"aria-disabled":t,"aria-sort":g,onClick:t?void 0:a,onTouchStart:t?void 0:l,ref:m,...f},F.createElement("div",null,i))});P4.displayName="TableHeadCell";const $4=ct.tr`
  color: inherit;
  display: table-row;
  height: calc(${on.md} - 2px);
  line-height: calc(${on.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:r})=>r.canvasText};
  &:hover {
    background: ${({theme:r})=>r.hoverBackground};
    color: ${({theme:r})=>r.canvasTextInvert};
  }
`,q4=$.forwardRef(function({children:t,...i},a){return F.createElement($4,{ref:a,...i},t)});q4.displayName="TableRow";const H4=ct.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,G4=ct(Or)`
  &:before {
    box-shadow: none;
  }
`,F4=$.forwardRef(({children:r,...t},i)=>F.createElement(G4,null,F.createElement(H4,{ref:i,...t},r)));F4.displayName="Table";const Q4=ct.button`
  ${fr()}
  ${xe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${on.md};
  line-height: ${on.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:r})=>r.materialText};
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
    ${xo}
    outline-offset: -6px;
  }
  ${r=>r.selected&&`
    z-index: 1;
    height: calc(${on.md} + 4px);
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
    background: ${({theme:r})=>r.material};
    bottom: -4px;
    left: 2px;
  }
`,Y4=$.forwardRef(({value:r,onClick:t,selected:i=!1,children:a,...l},c)=>F.createElement(Q4,{"aria-selected":i,selected:i,onClick:f=>t==null?void 0:t(r,f),ref:c,role:"tab",...l},a));Y4.displayName="Tab";const K4=ct.div`
  ${fr()}
  ${xe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,X4=$.forwardRef(({children:r,...t},i)=>F.createElement(K4,{ref:i,...t},r));X4.displayName="TabBody";const Z4=ct.div`
  position: relative;
  ${({isMultiRow:r,theme:t})=>r&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,W4=ct.div.attrs(()=>({"data-testid":"tab-row"}))`
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
    border-right: 2px solid ${({theme:r})=>r.borderDarkest};
    border-left: 2px solid ${({theme:r})=>r.borderLightest};
  }
`;function J4(r,t){const i=[];for(let a=t;a>0;a-=1)i.push(r.splice(0,Math.ceil(r.length/a)));return i}const tI=$.forwardRef(({value:r,onChange:t=cs,children:i,rows:a=1,...l},c)=>{const f=$.useMemo(()=>{var m;const g=(m=F.Children.map(i,E=>{if(!F.isValidElement(E))return null;const x={selected:E.props.value===r,onClick:t};return F.cloneElement(E,x)}))!==null&&m!==void 0?m:[],y=J4(g,a).map((E,x)=>({key:x,tabs:E})),_=y.findIndex(E=>E.tabs.some(x=>x.props.selected));return y.push(y.splice(_,1)[0]),y},[i,t,a,r]);return F.createElement(Z4,{...l,isMultiRow:a>1,role:"tablist",ref:c},f.map(m=>F.createElement(W4,{key:m.key},m.tabs)))});tI.displayName="Tabs";const eI=["blur","focus"],nI=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Fb(r){return"nativeEvent"in r&&eI.includes(r.type)}function Qb(r){return"nativeEvent"in r&&nI.includes(r.type)}const rI={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},iI=ct.span`
  position: absolute;

  z-index: 1;
  display: ${r=>r.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:r})=>r.borderDarkest};
  background: ${({theme:r})=>r.tooltip};
  box-shadow: ${zm};
  text-align: center;
  font-size: 1rem;
  ${r=>rI[r.position]}
`,aI=ct.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,ih=$.forwardRef(({className:r,children:t,disableFocusListener:i=!1,disableMouseListener:a=!1,enterDelay:l=1e3,leaveDelay:c=0,onBlur:f,onClose:m,onFocus:g,onMouseEnter:y,onMouseLeave:_,onOpen:E,style:x,text:j,position:q="top",...K},G)=>{const[rt,J]=$.useState(!1),[Z,ot]=$.useState(),[st,lt]=$.useState(),S=!i,w=!a,R=dt=>{window.clearTimeout(Z),window.clearTimeout(st);const Et=window.setTimeout(()=>{J(!0),E==null||E(dt)},l);ot(Et)},V=dt=>{dt.persist(),Fb(dt)?g==null||g(dt):Qb(dt)&&(y==null||y(dt)),R(dt)},N=dt=>{window.clearTimeout(Z),window.clearTimeout(st);const Et=window.setTimeout(()=>{J(!1),m==null||m(dt)},c);lt(Et)},O=dt=>{dt.persist(),Fb(dt)?f==null||f(dt):Qb(dt)&&(_==null||_(dt)),N(dt)},C=S?O:void 0,Bt=S?V:void 0,Nt=w?V:void 0,Y=w?O:void 0,pt=S?0:void 0;return F.createElement(aI,{"data-testid":"tooltip-wrapper",onBlur:C,onFocus:Bt,onMouseEnter:Nt,onMouseLeave:Y,tabIndex:pt},F.createElement(iI,{className:r,"data-testid":"tooltip",position:q,ref:G,show:rt,style:x,...K},j),t)});ih.displayName="Tooltip";const Fp=ct(qm)`
  white-space: nowrap;
`,C1=vt`
  :focus {
    outline: none;
  }

  ${({$disabled:r})=>r?"cursor: default;":vt`
          cursor: pointer;

          :focus {
            ${Fp} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,sI=ct.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:r})=>r&&vt`
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
      border-top: 2px dashed ${({theme:r})=>r.borderDark};
      font-size: 12px;
    }
  }
`,oI=ct.li`
  position: relative;
  padding-left: ${({hasItems:r})=>r?"0":"13px"};

  ${({isRootLevel:r})=>r?vt`
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
        `:vt`
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
      border-left: 2px dashed ${({theme:r})=>r.borderDark};
    }
  }
`,lI=ct.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,uI=ct.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:r})=>r.materialText};
  user-select: none;
  padding-left: 18px;
  ${C1};

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
`,Yb=ct($m)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${C1};
`,cI=ct.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Kb(r,t){return r.includes(t)?r.filter(i=>i!==t):[...r,t]}function Xb(r){r.preventDefault()}function D1({className:r,disabled:t,expanded:i,innerRef:a,level:l,select:c,selected:f,style:m,tree:g=[]}){const y=l===0,_=$.useCallback(E=>{var x,j;const q=!!(E.items&&E.items.length>0),K=i.includes(E.id),G=(x=t||E.disabled)!==null&&x!==void 0?x:!1,rt=G?Xb:st=>c(st,E),J=G?Xb:st=>c(st,E),Z=f===E.id,ot=F.createElement(cI,{"aria-hidden":!0},E.icon);return F.createElement(oI,{key:E.label,isRootLevel:y,role:"treeitem","aria-expanded":K,"aria-selected":Z,hasItems:q},q?F.createElement(lI,{open:K},F.createElement(uI,{onClick:rt,$disabled:G},F.createElement(Yb,{$disabled:G},ot,F.createElement(Fp,null,E.label))),K&&F.createElement(D1,{className:r,disabled:G,expanded:i,level:l+1,select:c,selected:f,style:m,tree:(j=E.items)!==null&&j!==void 0?j:[]})):F.createElement(Yb,{as:"button",$disabled:G,onClick:J},ot,F.createElement(Fp,null,E.label)))},[r,t,i,y,l,c,f,m]);return F.createElement(sI,{className:y?r:void 0,style:y?m:void 0,ref:y?a:void 0,role:y?"tree":"group",isRootLevel:y},g.map(_))}function hI({className:r,defaultExpanded:t=[],defaultSelected:i,disabled:a=!1,expanded:l,onNodeSelect:c,onNodeToggle:f,selected:m,style:g,tree:y=[]},_){const[E,x]=ca({defaultValue:t,onChange:f,onChangePropName:"onNodeToggle",value:l,valuePropName:"expanded"}),[j,q]=ca({defaultValue:i,onChange:c,onChangePropName:"onNodeSelect",value:m,valuePropName:"selected"}),K=$.useCallback((J,Z)=>{if(f){const ot=Kb(E,Z);f(J,ot)}x(ot=>Kb(ot,Z))},[E,f,x]),G=$.useCallback((J,Z)=>{q(Z),c&&c(J,Z)},[c,q]),rt=$.useCallback((J,Z)=>{J.preventDefault(),G(J,Z.id),Z.items&&Z.items.length&&K(J,Z.id)},[G,K]);return F.createElement(D1,{className:r,disabled:a,expanded:E,level:0,innerRef:_,select:rt,selected:j,style:g,tree:y})}const fI=$.forwardRef(hI);fI.displayName="TreeView";const dI="/95-Portfolio/assets/messengerprofile-C0dLB8Qi.png",pI=50,mI=new kC;function gI(){const[r,t]=$.useState([]),[i,a]=$.useState(""),[l,c]=$.useState(()=>localStorage.getItem("username")||""),[f,m]=$.useState(l),g=$.useRef(null),y=async()=>{const j=pC(Vb(zb,"messages"),mC("timestamp","desc"),gC(pI)),K=(await AC(j)).docs.map(G=>({id:G.id,...G.data()}));t(K.reverse()),setTimeout(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},50)};$.useEffect(()=>{y()},[]);const _=async()=>{if(!i.trim()||!l.trim())return;const j=mI.clean(i);await EC(Vb(zb,"messages"),{username:l,text:j,timestamp:wC()}),a(""),y()},E=()=>{f.trim()&&(c(f.trim()),localStorage.setItem("username",f.trim()))},x=()=>{c(""),m(""),localStorage.removeItem("username")};return D.jsxs(si,{style:{width:400,margin:"20px auto"},children:[D.jsxs(ai,{style:{display:"flex",alignItems:"center",gap:5},children:[D.jsx("img",{src:dI,alt:"profile",style:{height:16,width:16,objectFit:"contain"}}),"Chat.exe"]}),D.jsx(Yn,{children:l?D.jsxs(D.Fragment,{children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[D.jsxs("span",{children:[D.jsx("b",{children:"Logged in as:"})," ",l]}),D.jsx(Ve,{size:"sm",onClick:x,children:"Change Name"})]}),D.jsx("div",{ref:g,style:{height:300,background:"white",padding:4,overflowY:"auto",border:"2px solid #c3c7cb",boxShadow:"inset 1px 1px #fff, inset -1px -1px #808080"},className:"win95-scrollbar",children:r.map(j=>D.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:2},children:D.jsxs("p",{style:{fontSize:12,whiteSpace:"pre-wrap",wordWrap:"break-word",maxWidth:"100%"},children:[D.jsxs("b",{children:[j.username,":"]})," ",j.text]})},j.id))}),D.jsxs("div",{style:{display:"flex",gap:5,marginTop:5},children:[D.jsx(cu,{value:i,onChange:j=>{j.target.value.length<=100&&a(j.target.value)},placeholder:"Type a message...",fullWidth:!0}),D.jsx(Ve,{onClick:_,disabled:!i.trim(),children:"Send"})]})]}):D.jsxs("div",{children:[D.jsx("p",{children:"Enter a username to join chat:"}),D.jsx(cu,{value:f,onChange:j=>m(j.target.value),placeholder:"Your name...",fullWidth:!0}),D.jsx(Ve,{onClick:E,style:{marginTop:5},disabled:!f.trim(),children:"Save"})]})}),D.jsx("style",{children:`
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
        `})]})}const yI="/95-Portfolio/assets/ms_sans_serif-Du8rjN1q.woff2",vI="/95-Portfolio/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var hp,Zb;function bI(){if(Zb)return hp;Zb=1;var r={name:"blue",anchor:"rgb(0, 0, 128)",anchorVisited:"rgb(0, 0, 128)",borderDark:"rgb(49, 131, 221)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(166, 202, 240)",borderLightest:"rgb(211, 228, 248)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(49, 131, 221)",canvasTextDisabledShadow:"rgb(211, 228, 248)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(49, 131, 221)",desktopBackground:"rgb(58, 110, 165)",flatDark:"rgb(49, 131, 221)",flatLight:"rgb(166, 202, 240)",focusSecondary:"rgb(211, 228, 248)",headerBackground:"linear-gradient(to right, rgb(0, 0, 128), rgb(16, 132, 208))",headerNotActiveBackground:"linear-gradient(to right, rgb(49, 131, 221), rgb(49, 131, 221))",headerNotActiveText:"rgb(0, 0, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(51, 153, 255)",material:"rgb(166, 202, 240)",materialDark:"rgb(49, 131, 221)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(49, 131, 221)",materialTextDisabledShadow:"rgb(211, 228, 248)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(51, 153, 255)",tooltip:"rgb(225, 225, 255)"};return hp=r,hp}var _I=bI();const Wb=Jb(_I),AI="/95-Portfolio/assets/winxp-aEloBXO0.png",EI="/95-Portfolio/assets/psx_graphics-D5Raoe1Z.gif",TI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAD////AwMAAAIAAAP/jaa47AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBBAHOBQ6y591AAAAiklEQVQoz52QwQ3DIBAEQUoBrF0BujTAJQ3Ykgvwg/5bCZwjsRfLD2dfMBpYuBD+TQSQfvaOAJ7EL8Al6OtJtYAFEcmJQBO08BVNeC5kdOG90h2zWJIzWgYwJXOtcks4WiTzZ70Rj5ZhBExldBiYhf5qhuqLR7hgPLPnUSvcka1aEgmW/RKcZnwzH3+2Gx0TJwQiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE2VDA3OjU2OjIwLTA0OjAw5EF/4AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xNlQwNzo1NjoyMC0wNDowMJUcx1wAAAAASUVORK5CYII=",wI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEUAAACZmZnn59bMzMyGhoZmZmYEBATAwMD////q6ur/+/AAMzMAmZkAgIAAZmYzzMwzM5mZzP8AM5nMzP+ZmcwcHBzj4+MiIiJVVVWtqZAz/2YAgACWLo3QAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBBMBJCt84jxJAAABaUlEQVRIx5WV0XKDIBBFZRWFpBhrS03i//9nF4S6KCz2MM74cA8XDNGmoQie5oiAtgx0sj/lhzKYPwpCcWD+IAily7j5MwIU0DDkhJuGe56CgA33jw0ThxnNOI6c8MBxMtgGzE8JaNQapk/CXGtApi/CXGlI1jPPKJQbbpvwTUDBlhuCAPtxaJ1Q28ME0QDVWrZBpQ2gwAtXG8A3IBca/kZrDVJ7SvGIun+ZE6pPyWMD9bNk0uHybEOaDnl2SYYwxsEIY5aC8MO8A4KwLIkAZbzQSykWKjCvMSe4vKSCfLL4/NOSNfU8Pi93QVYReO0NAo8aHfi2boc4HC+3bdIgVJr3Z48aXkgb3u91nz+k43KyDeu6JvM7J+54E56FPRxXc2kP0UkE0oD53O/7InRpPnw54jfldIPnz9K8VkPPXXj8hP1nXtjree3ykqzfzcFdh7yGGjRf+Zxv0DwKQxWab0RXh+YbYS9A8r/yizreWBxUTwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNjo0My0wNDowMNV8Hl4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzY6NDMtMDQ6MDCkIabiAAAAAElFTkSuQmCC",SI="/95-Portfolio/assets/clippynew-CEUdfum9.gif",xI="/95-Portfolio/assets/clippy-C-IeEyKo.png",RI="/95-Portfolio/assets/audio-dwQvxNcr.mp3",CI="/95-Portfolio/assets/granturismo-jbWZY7ai.gif",DI="data:image/png;base64,R0lGODlh3ADcAPUAAAsHAyoaC204C244C3lkGVBcMmxsQWxtQZhYC7x8C719DK10I6l5NsFRCcJRCHWFPHCSYHCTYraONNmRDeimDuimD/myDPizDM2dKM2eKc2wNc2wNuy3K+23K7KfT7KeUKuzX929X3+z6n+z69XBkdXBktTKuwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAQKAAAAIf4fR2VuZXJhdGVkIGJ5IG9ubGluZUdJRnRvb2xzLmNvbQAsAAAAANwA3AAABv/AkXBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NGABtTV1tQE2doL3ATXBtJs3+MG2gTc6NkP3tThaQ/w8ebz6NwJ9/cICAsI5tXuYqjBkyABnb596O4pSDABn0N8B7NdA9jFwEAJGwhyQ7jg4b0JIEM29NgNnjWKWAQukDABQwWQHkWGfClTpsIE6di1Q1nlIgb/DDJ//qxAs+ZMo/fqEXjwj2cUi+cWTCA6NeTPDSGyat2AgavQr1/vYWD4EAG+jtzWxXN6xOJKoFStdtVKN6tXsGMdAmU48izalRrXsh1CbcEDCUNpvpxLonHjuiE+SPjwYYNly18lJAAaMiZYgoLZWiQolKjpCoxNOAZB2XFkypC3/hT5cGqFDhU2dLD8IcKDwaMxIE5MNXcIEiaSkwDBwNsHx5Q/HHfsOitn2gxNX7jdYfcGEBEiOHWLoYNQkKbnHk+uOkKBAAMMPF8+nz376tdlVrjAv393y+D9RpFFh5WX30uodTAdexEY8F4A8CG3XGP2UUeCdfnN1J9/3oEA/x5KDyzgUlE16baecgZAqGIAIKiGXIUfMGAAA9KF0N1sIu3XwYb8ddcBCBKIB1CBHRhlVVYvqpZiAABAWIBj9iXnHoQDEKBVdzlO1R2PF/zHmpDSDARXTfi0pGCSJCypYgEgJMnggxAacJyNuOl3WpcbehdeOAWaJtJeH2F1opIrBvBklISuOMBzdNoZ1215WrYnNG4hRmJLeYnV3YKqMQBnhIiS8GCT8DHanWJV6Zfnbh6C2cxFQf1UkD6bbTooCZ7CV4ABUN43KpWm4hYXTArZtmqrri5jEY5yaUSrj1rBKCON1PnKpIqLXngqiT85NNWqWX346krDgkSQBOtkk/+AbrZGaWG1KBZqpbZ+ysWPWS5xGcJ3vTVjwGRFygSaORj9h5W7FL77Jrbz2VgvSF1JQGu+PO4bgrjKLOvSnxhIBo826xrMb4wxMmByeDR+0KZyIFBDbVbbkriBBxJkgwDFq36X7DHwMAtxx+imS0BXPm4Qo4NUDqB0AQXEJx+FylEHs7AyS6YNzhzqrGyB+QkFAlMCDe2jeTUPUOjZ8TEw3YV0+XgaxBNEt87N+/FoMAhbP4BaUbKKK1B5PmKwgNmFAmD44fARUGNdPm5X70+UySNB3VyyuvVwfBPUIGEPEO3d4Gcfjjh8Cyw+9ZZv0xQ5UwRMzmWPOu88zGh7Qzz/Wb+cF+ydBIQbrmKTow+AgARjN+7425CHx7rrr7OKsTG0pwo5A0WMxq53BEAouu+kUnlO8Vvy9zamKvtWzgaU2/3d88VY9IF5P5d/hHTQbsAA4b+Lju3wRG2Yvp+5wQB4GlSO972uS1jxUDLcBz/yfUBARZAACMYWgvsVDnGkEp7r9pM+8Z3mJwPEBvoOuJvj4C0ZEQDBXSgzwCM8QIWWyQrvzoY2AmxGfNvhkZ9k1RvxYOMDHeSQCZWRwozwcFJG6BnRQuCBBWRDaTSsku7Cp0OqyCpIQirgjpp3phMiIzzRoQwSjTAajFwmI058otKUdg6sgK+KNIEc7kagxS3a/62Ly0ihh3rIBMrgRTjn4kZBPAc+OyJPMmMcAQEmaEdwLSePegyP7Iqgsg0kQDOb6YqgIFPI8I0PaIlUHBUd6cXBeAhImunIJU3EyU56MI6TeUAoDcjFi5WSLSqzS172gZgzXk9YM+nfdqwSy1BOkIR4HIwQwuOhfUlAAQVZiSAxWZYy9c+KmpPdC0cpxEcqc5kptItX/LKAhdTmI8YiJgMSKYRtNlKI7BuMHu2yr0xlsiWnSd2wuLFObYKATnf8zjeLwEzKWMY7QulkzIalAH4mQZZuXJXlBkoEMBr0jAod2/ga0o0kGCACKitkuChqBDCy5p+nU2i5JrCA5oBDCf/hjKGCbHlLkn70AdHxSvGI4rZhOeCnDkCA0pYgSxiy8pQkPYLySiYiwJknodcBKlDXOIJJEuGUy6lpUiuKDX04gC9GkapY11gAJujxlFbdKh0NoDQEiPWtcP3pGqv0UrWmhK3Ci6tegSrUKrHDrnc1gFD3StignsMkgLWCywZb2LgypCMSYAA80ppYj87Iq419688A2UPKVpaMDTJZZoFqJNtFFmyfbQLKRDta21zKtA9kZ2pLmsILYcCxYDVWPncLSHR59rPicU2G0LPbHB6QKEJB5G8r+yK29RRS/qsbN1+JGuHIcrZKuM/pDshdOCJXOHPE7lW1S6d3dve46en/WHjFK4QWqeZK5j0veoeZEdnO1r3Ona580UsUAC03qe6Dr373y6V8yvG/FA1weQdM4OimV37shYcbx9Zg+e42N/H8rITfWOHuXlhrEf4nhTt83tRNwGharaw7jUdi7u62JZSpqnhXzOAWH2+HMUawMhdwPRt7OJ9TucrXxMtjFvu4wECurgR1PJgi19jGJo7fehPrZBweGY62kYsYsVtk6l65P4/ilhiZzJMuX1iYLQbgSkFIZpQU+czaSXNx1izAKav1zcNScxAt/NqjxC1IqcVzadFM4IflKC5j/iyPDW2nCjO6Jt+1c1IXvVJVNfjRdkqeonVT6YZoaL9RLq1Q/yZTWUETKwHmzA6oNzro72IRsG/ujEf4supOQ9rV9v1mrIl1EFqpusSYDuYHhcMaWHNa1r02y69d3GdHGViAKVamAUw9q2RLZc/RLa2weVuZXI/HyahhaV/XSCtsv1LWtz5zxzbgbZRQI2Q3Ety422qWCfy4L+g89JlbAuIEGwDeQhncXNvKkHvXRt8XtsqXbPpvdsnqfmYjd72Zfep8E3ffDmwzM5byk3iXLWkEoJW9KzdMfFvctXAmSqIHyvFTCceJhKuSKkHi4orn+043BvLKpd26sWVERjHn8Wz2vKOXzDqYDv5wv4GD07FhoDn4a52NRtQ8mqDaW59+Xeowkv/hAT0A3mQjAP4GIKI6BdFtJr+5uY8XZAFqHBkSdvjTxY6tshOaQ3WKCV/Wzvbqdt0d8HifyyPL1rqX5+49qlPacwRsBLH57cUIvNsKQnfDC4uLRo9J1vkbv3ZD4zDXm4DE8AefASyb5Lw+57d+7PiOXZcn5HGqcCpPpXqbe0cjOYgqvcX69BZElpAHhvXkLvD9dQTxPMp9sg9ScGbvkLOev5zbxiLUFZ0jMd0NWALMkuwy9b7tBFFZC91hkV9ioB9jZ4Cl+G71o6Pn+y05l/hb5Y6WB07g5EYMbhpfrjvx/XjgFVnzhyzBpwvX53TzZhacxn5nRmJWZF3xwExoVVX/BUgLTPEWuFEeo0duxIF8jnNx/4de6uUb5gNOZ0WBGRMPmeRq47YP5oEg5hZmHshndcZOknRWAxR9sjAO8TAcnLEZ/EBuCxBmNQeCIYhkGECCMCWBaFWBoUAghxFIGgFVY9ENczU8ird6r+NsaWY0MqZaI3BKYviFtUAgk+FLeHEW6Jd/WYh8RQFWM+hhGQEFNyiG0fYK5TAc6GMaGYgp0XQvA0c3JFI3/3NqSHdp/fUBlPIvHUc1D4MTG6EPgZgAl3JNhJh5FheHVWQeivgMYvJL6dESOJFsgWgWRZFyRIF1OMd6/yFAn/cBTvVcVTiK8yZx94CKQOZp+eRiYMZT/7uhMs8AUipUSNVFiwMnhAwxIrj4MNxRYpXDG044Cx9lUD6HGRoRhMc4MYDjOEmXcjVGaDvCG5JmDBbFFfFmjWmUjYDRiPFFXbtlPG4YUEYzjscgHiAVRirzQNTwKfCBhY7ogc/mFWc0FuoxNuhRPBMYDcpzEXKDNIUiPE2Fco13FZp0GXlBSFiiJZvyI+PnDg0CfHsyKr5DdhjRgczmHeIYHXs0ELmUFZJBEDGUkLBHhkxTKDNSGRtAXO3YJSgpNxHoG/GAU3tUMreDVNGYDExzk5FBGk6ldPOYgzcYHtUQlUE5WTqoTGd1Lgd1F5qkIE14lIlVVEGJk0KRSQBCgGPsVRHMNJbid5VpCQVJGQ8CEZSS9JZ2eZd4mZd6uZd82Zd++ZeAGZiCOZiEWZiGeZiImZiKuZiM2ZiO+ZiQGZmSOZmUWZmWeZmYmZmauZmc2Zme+ZmgGZqiOZqkWZqmeZpbEAQAOw==",II="/95-Portfolio/assets/dog-Tp5J6lE8.gif",kI=pw`
  ${NC}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${yI}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${vI}') format('woff2');
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
`;function NI({onComplete:r}){const[t,i]=$.useState(0),[a,l]=$.useState("");return $.useEffect(()=>{const c=setInterval(()=>{i(f=>{const m=Math.min(f+Math.random()*15,100);return m>=100&&(clearInterval(c),setTimeout(r,500)),m})},300);return()=>clearInterval(c)},[r]),$.useEffect(()=>{const c=setInterval(()=>{l(f=>f.length<3?f+".":"")},500);return()=>clearInterval(c)},[]),D.jsx("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgb(127, 179, 235)",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"ms_sans_serif, sans-serif",color:"black"},children:D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",transform:"translateY(-20%)"},children:[D.jsxs("div",{style:{fontSize:"18px",marginBottom:"16px"},children:["Loading",a]}),D.jsx(xh,{variant:"tile",value:Math.floor(t),style:{width:300}})]})})}function VI(){const[r,t]=F.useState(!1);return D.jsx("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:r?D.jsx("img",{src:SI}):D.jsx("img",{src:xI})})}function MI(){const[r,t]=F.useState(!1);return D.jsx("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:r?D.jsx("img",{src:II}):D.jsx("img",{src:DI})})}function OI(){const[r,t]=$.useState(!1),[i,a]=$.useState(!0),[l,c]=F.useState(!0),[f,m]=$.useState({width:700,height:550}),g=(visualViewport.width-f.width)/2,y=(visualViewport.height-f.height)/2,[_,E]=$.useState({x:g,y}),[x,j]=$.useState("p1"),q=$.useRef({isDragging:!1,startX:0,startY:0}),[K,G]=$.useState(!1),rt=$.useRef(null);$.useEffect(()=>{rt.current&&(K?(rt.current.muted=!1,rt.current.play().catch(()=>{})):rt.current.pause())},[K]),$.useEffect(()=>{const ot=lt=>{if(q.current.isDragging){const S=lt.clientX-q.current.startX,w=lt.clientY-q.current.startY;E(R=>({x:R.x+S,y:R.y+w})),q.current.startX=lt.clientX,q.current.startY=lt.clientY}},st=()=>{q.current.isDragging=!1};return window.addEventListener("mousemove",ot),window.addEventListener("mouseup",st),()=>{window.removeEventListener("mousemove",ot),window.removeEventListener("mouseup",st)}},[]);const J=[{label:"Me",value:"p1"},{label:"Hobbies",value:"p2"}],Z=ot=>{j(ot.value)};return D.jsxs(D.Fragment,{children:[D.jsx(kI,{}),i?D.jsx(Sv,{theme:Wb,children:D.jsx(NI,{onComplete:()=>a(!1)})}):D.jsxs(Sv,{theme:Wb,children:[D.jsx(h1,{className:"fixed top-0 left-0 w-full z-50",children:D.jsxs(po,{className:"flex justify-between px-4",children:[D.jsxs("div",{className:"relative inline-block",children:[D.jsxs(Ve,{onClick:()=>t(!r),active:r,style:{fontWeight:"bold"},children:[D.jsx("img",{src:AI,alt:"win xp logo",className:"h-5 mr-1"}),"Start"]}),r&&D.jsxs(f1,{style:{position:"absolute",left:0,top:"100%",zIndex:999,minWidth:"200px"},onClick:()=>t(!1),children:[D.jsx(ql,{className:"flex items-center gap-2",onClick:()=>window.open("https://github.com/abdessalamzarrouk","_blank"),children:"GitHub Profile"}),D.jsx(ql,{className:"flex items-center gap-2",onClick:()=>window.open("https://www.linkedin.com/in/abdessalam-zarrouk/","_blank"),children:"LinkedIn Profile"}),D.jsx(ql,{onClick:()=>c(ot=>!ot),children:l?"Remove Stars":"Show Stars"}),D.jsx(oo,{}),D.jsx(ql,{children:D.jsx(ih,{text:"You are stuck here 🤷‍",enterDelay:100,leaveDelay:500,children:"Logout"})})]})]}),D.jsx("a",{href:"#Projects",children:D.jsx(Ve,{variant:"menu",children:"Current Projects"})}),D.jsx(Hl,{size:38}),D.jsx("a",{href:"#About",children:D.jsx(Ve,{variant:"menu",children:"About Me"})}),D.jsx(Hl,{size:38}),D.jsx("a",{href:"#Skills",children:D.jsx(Ve,{variant:"menu",children:"Skills"})}),D.jsx(Hl,{size:38}),D.jsx(Ve,{variant:"menu",children:"Contact info"}),D.jsx(Hl,{size:38}),D.jsx(Ve,{variant:"menu",onClick:()=>G(ot=>!ot),style:{minWidth:110},title:K?"Click to mute":"Enable background music",children:K?"Sound: On":"Sound: Off"}),D.jsx(cu,{placeholder:"Search...",width:150})]})}),D.jsx(gw,{enabled:l}),D.jsx("audio",{ref:rt,src:RI,loop:!0,muted:!K}),D.jsxs("main",{className:"w-full min-h-screen px-4 flex flex-col items-center bg-[rgb(127,179,235)]",children:[D.jsxs("section",{className:"mb-10 max-w-2xl w-full text-center pt-5",children:[D.jsx("h1",{className:"text-4xl font-bold underline mb-4",children:"Hi, I’m Abdessalam Zarrouk!"}),D.jsxs("h2",{className:"text-3xl font-bold mb-4 flex justify-center items-center gap-2",children:[D.jsx(ih,{text:"Yes that's me.",enterDelay:100,leaveDelay:100,children:D.jsx("img",{src:TI,alt:"user logo",className:"h-8 "})}),"A passionate software engineer and lifelong learner"]}),D.jsxs("p",{className:"text-lg text-gray-700 flex justify-center items-center gap-2",children:[D.jsx("img",{src:wI,alt:"computer icon",className:"h-7"}),"I enjoy building creative projects, solving problems, and exploring new technologies. This portfolio showcases some of my work and interests."]})]}),D.jsx(oo,{size:"1200px",className:"flex justify-center mb-4"}),D.jsx("h1",{className:"text-4xl font-bold mt-10",id:"Projects",children:"Current Projects :"}),D.jsx("section",{className:"w-full flex justify-center mt-10 mb-14",children:D.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-screen-xl w-full",children:[D.jsx(si,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:D.jsxs("a",{href:"https://github.com/abdessalamzarrouk/ShieldOps",children:[D.jsx(ai,{children:D.jsx("span",{children:"ShieldOps.txt"})}),D.jsxs(Yn,{children:[D.jsx("p",{children:"Progress : Under Construction  "})," ",D.jsx(xh,{variant:"tile",value:Math.floor(30)})]}),D.jsx(Yn,{children:D.jsx(so,{style:{width:"100%",height:150},children:D.jsxs("p",{children:["This is an ",D.jsx("span",{className:"font-bold",children:"academic project"})," that is dedicated to learning how to set up a CI/CD pipeline that will include some",D.jsx("span",{className:"font-bold",children:" cybersecurity"})," features like code and dependency vulnerabilities detection and prevention."]})})}),D.jsx(Yn,{children:D.jsx(so,{style:{width:"100%",height:66},children:D.jsxs("p",{children:[D.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used : "})," Docker, Jenkins, OWASP ZAP, Snyk, Trivy, SonarQube."]})})})]})}),D.jsx(si,{className:"w-full max-w-md overflow-hidden transition-transform duration-300 hover:scale-110",children:D.jsxs("a",{href:"https://github.com/abdessalamzarrouk/PSX_GRAPHICS",children:[D.jsx(ai,{children:D.jsx("span",{children:"psx_graphics.txt"})}),D.jsxs(Yn,{children:[D.jsx("img",{src:EI,alt:"PSX Graphics",className:"w-full mb-5"}),D.jsxs("p",{children:["This is a ",D.jsx("span",{className:"text-[#DF0024] font-bold",children:"Play"}),D.jsx("span",{className:"text-[#f3c300] font-bold",children:"Station"})," ",D.jsx("span",{className:"font-bold",children:"1"})," game development project where i showcase some of the demonstrations i made using the infamous ",D.jsx("span",{className:"font-bold",children:"Psygnosis Source Development Kit"})," (Psy-Q)."]}),D.jsxs("p",{children:[D.jsx("span",{className:"text-[#00AC9F] font-bold",children:"Tools used :"}),"  Psy-Q SDK, ARMIPS, Make, mkpsxiso."]})]})]})}),D.jsxs(si,{className:"w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110",children:[D.jsx(ai,{children:D.jsx("span",{children:"ThreadTalk.txt"})}),D.jsxs(Yn,{children:[D.jsx("p",{children:"Progress : Under Construction  "})," ",D.jsx(xh,{variant:"tile",value:Math.floor(0)})]}),D.jsx(Yn,{children:D.jsx(so,{style:{width:"100%",height:115},children:D.jsxs("p",{children:["This is an idea that I had in mind. It's basically an inspiration from ",D.jsx("span",{className:"font-bold",children:"Reddit"})," that involves users discussing about ",D.jsx("span",{className:"font-bold",children:"topics"})," that they are interested in and ",D.jsx("span",{className:"font-bold",children:"sharing opinions"}),"."]})})})]})]})}),D.jsx(oo,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),D.jsx("section",{className:"mb-10 w-full text-center pt-5 mt-10 h-full min-h-[85vh]",id:"About",children:D.jsxs("div",{className:"relative flex justify-center w-full items-center",children:[D.jsx("div",{className:"absolute left-0 flex items-center h-full",children:D.jsx(VI,{})}),D.jsxs("div",{className:"max-w-2xl text-center",children:[D.jsx("h1",{className:"text-4xl font-bold mb-4",children:"About Me"}),D.jsx(Gm,{formatDisplay:ot=>`${ot.label?ot.label:"CANNOT RETRIEVE VALUES"}`,onChange:Z,options:J,width:220}),x==="p1"&&D.jsxs(si,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:_.x,top:_.y,width:f.width,height:f.height},children:[D.jsxs(ai,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:ot=>{q.current.isDragging=!0,q.current.startX=ot.clientX,q.current.startY=ot.clientY},children:[D.jsx("span",{children:"Me.exe"}),D.jsx(Ve,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:D.jsx("span",{className:"close-icon"})})]}),D.jsxs(po,{children:[D.jsx(Ve,{variant:"menu",size:"sm",children:"File"}),D.jsx(Ve,{variant:"menu",size:"sm",children:"Edit"}),D.jsx(Ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),D.jsxs(Yn,{children:[D.jsxs("p",{children:["From ",D.jsx("span",{className:"font-bold",children:"tinkering with computers as a kid"})," to ",D.jsx("span",{className:"font-bold",children:"building complex software projects"})," today, I’ve always been fascinated by how ",D.jsx("span",{className:"font-bold",children:"technology"})," can solve real problems. I’m ",D.jsx("span",{className:"font-bold",children:"Abdessalam Zarrouk"}),", and I love ",D.jsx("span",{className:"font-bold",children:"learning"}),", ",D.jsx("span",{className:"font-bold",children:"experimenting"}),", and ",D.jsx("span",{className:"font-bold",children:"sharing my journey"})," through the projects I build."]}),D.jsx("br",{}),D.jsxs("p",{children:["My experience with computers first started with an ",D.jsx("span",{className:"font-bold",children:"old Dell Optiplex"}),", where I first learned about ",D.jsx("span",{className:"font-bold",children:"Windows XP"}),". Then I moved on to an ",D.jsx("span",{className:"font-bold",children:"HP Compaq DC7600"}),", which was an upgrade from the Dell (mostly good and bad). It was then that I learned that desktop computers get dusty and need some RAM cleaning from time to time, which was frustrating. This was the first computer where I experienced ",D.jsx("span",{className:"font-bold",children:"online gaming"})," with the surge of modems and broadband connections. I remember playing games like ",D.jsx("span",{className:"font-bold",children:"Counter-Strike 1.6"})," and ",D.jsx("span",{className:"font-bold",children:"Minecraft"})," when they first blew up."]}),D.jsx("br",{}),D.jsxs("p",{children:["Fast forward about 13 years, I purchased my first laptop, a ",D.jsx("span",{className:"font-bold",children:"Dell Latitude E5450"}),", which was a beast when coupled with a good ",D.jsx("span",{className:"font-bold",children:"SSD"}),". It was then that I started learning ",D.jsx("span",{className:"font-bold",children:"programming"})," with languages like ",D.jsx("span",{className:"font-bold",children:"Python, C, C++, and Java"}),". I also learned about ",D.jsx("span",{className:"font-bold",children:"web development"})," and how the ",D.jsx("span",{className:"font-bold",children:"internet"})," works. I started building ",D.jsx("span",{className:"font-bold",children:"small projects"})," and ",D.jsx("span",{className:"font-bold",children:"experimenting with different technologies"}),". Even today, I cherish those moments with that Dell and HP desktop—those were the ",D.jsx("span",{className:"font-bold",children:"foundations of my passion"}),"."]})]}),D.jsx(Hp,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]}),x==="p2"&&D.jsxs(si,{resizable:!0,className:"window mb-4",style:{position:"absolute",left:_.x,top:_.y,width:f.width,height:f.height},children:[D.jsxs(ai,{className:"window-title flex justify-between items-center",style:{paddingRight:"4px",cursor:"move"},onMouseDown:ot=>{q.current.isDragging=!0,q.current.startX=ot.clientX,q.current.startY=ot.clientY},children:[D.jsx("span",{children:"Hobbies.exe"}),D.jsx(Ve,{size:"sm",style:{padding:0,width:"23px",height:"23px"},children:D.jsx("span",{className:"close-icon"})})]}),D.jsxs(po,{children:[D.jsx(Ve,{variant:"menu",size:"sm",children:"File"}),D.jsx(Ve,{variant:"menu",size:"sm",children:"Edit"}),D.jsx(Ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),D.jsxs(Yn,{children:[D.jsxs("p",{children:["Not a car expert, but the",D.jsx("span",{className:"font-bold text-sky-700",children:" BMW M3 E92 "}),"and",D.jsx("span",{className:"font-bold text-indigo-700",children:" M3 GTR "}),"grabbed me—the high‑revving V8 and that",D.jsx("span",{className:"font-semibold text-rose-600",children:" whining gear‑change sound "}),"just hits the right mix of character."]}),D.jsx("br",{}),D.jsxs("p",{children:["I enjoy ",D.jsx("span",{className:"font-semibold text-emerald-600",children:"GT3 sim racing"})," in",D.jsx("span",{className:"font-bold text-red-600",children:" Assetto Corsa"}),", dialing in pacing, braking points, and smooth inputs. That tweak → test → repeat loop feels like refactoring code."]}),D.jsx("br",{}),D.jsxs("p",{children:["I also make beats—mainly",D.jsx("span",{className:"font-bold text-amber-600",children:" Hip Hop"})," and",D.jsx("span",{className:"font-bold text-fuchsia-600",children:" 90s House"}),". Chopping samples, shaping",D.jsx("span",{className:"font-semibold text-slate-800",children:" drums"}),", and balancing",D.jsx("span",{className:"font-semibold text-teal-600",children:" basslines"})," sharpen timing, pattern recognition, and iteration."]}),D.jsx("br",{}),D.jsx("p",{className:"font-semibold",children:"A few games that shaped how I think:"}),D.jsxs("ul",{className:"mt-1 mb-3 pl-5 list-disc",children:[D.jsxs("li",{children:[D.jsx("b",{className:"text-red-600",children:"Assetto Corsa:"})," Precision & discipline."]}),D.jsxs("li",{children:[D.jsx("b",{className:"text-yellow-600",children:"Counter-Strike 1.6:"})," Fast decisions & teamwork."]}),D.jsxs("li",{children:[D.jsx("b",{className:"text-green-600",children:"Minecraft:"})," Open-ended building & experimentation."]})]}),D.jsxs("p",{children:["These hobbies keep me",D.jsx("span",{className:"font-semibold text-blue-700",children:" curious"}),",",D.jsx("span",{className:"font-semibold text-purple-700",children:" patient"}),", and comfortable",D.jsx("span",{className:"font-semibold text-emerald-700",children:" iterating"}),"."]}),D.jsx("br",{}),D.jsx(so,{style:{width:250,height:115,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},children:D.jsx("img",{src:CI,alt:"granturismo.gif"})})]}),D.jsx(Hp,{variant:"well",style:{width:"16px",height:"16px",position:"absolute",bottom:"0",right:"0",cursor:"se-resize"}})]})]})]})}),D.jsx(oo,{size:"1200px",className:"mt-14 flex justify-center mb-4"}),D.jsx("section",{className:"mb-10 w-full pt-5 mt-10 h-full",id:"Skills",children:D.jsxs("div",{className:"flex justify-center items-start gap-8 w-full px-4",children:[D.jsx("div",{className:"flex-shrink-0 self-center pt-20",children:D.jsx(ih,{text:"Please be respectful and refrain from using profanity.",enterDelay:100,leaveDelay:500,children:D.jsx(MI,{})})}),D.jsxs("div",{className:"flex-shrink-0",children:[D.jsx("h1",{className:"text-4xl font-bold mb-4 text-center",children:"Chat"}),D.jsx(gI,{})]}),D.jsxs("div",{className:"text-center",children:[D.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Skills"}),D.jsxs(si,{resizable:!0,className:"window mb-4",style:{margin:"0 auto",width:700},children:[D.jsx(ai,{children:D.jsx("span",{children:"My Skills.exe"})}),D.jsx(Yn,{children:D.jsxs("div",{style:{textAlign:"left",padding:"8px",lineHeight:"1.6"},children:[D.jsx("h3",{className:"font-bold",children:"Programming Languages:"}),D.jsx("p",{children:"JavaScript (React, Node.js), Python, Java, C/C++, C#, SQL"}),D.jsx("h3",{className:"font-bold mt-2",children:"Web Development:"}),D.jsx("p",{children:"React, Redux, Tailwind CSS, Styled-Components, HTML5, CSS3, REST APIs"}),D.jsx("h3",{className:"font-bold mt-2",children:"Database & Backend:"}),D.jsx("p",{children:"Firebase (Firestore & Auth), PostgreSQL, MySQL, MongoDB, Express.js"}),D.jsx("h3",{className:"font-bold mt-2",children:"Tools & Platforms:"}),D.jsx("p",{children:"Git, GitHub, Docker, Jenkins, VS Code"}),D.jsx("h3",{className:"font-bold mt-2",children:"Game Development:"}),D.jsx("p",{children:"Psy-Q SDK (PlayStation 1), ARMIPS, mkpsxiso"}),D.jsx("h3",{className:"font-bold mt-2",children:"Soft Skills:"}),D.jsx("p",{children:"Problem Solving, Team Collaboration, Adaptability, Continuous Learning, Creativity"})]})})]})]})]})})]})]})]})}dT.createRoot(document.getElementById("root")).render(D.jsx($.StrictMode,{children:D.jsx(OI,{})}));
