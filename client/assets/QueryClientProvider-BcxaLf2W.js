var it=e=>{throw TypeError(e)};var _=(e,t,s)=>t.has(e)||it("Cannot "+s);var r=(e,t,s)=>(_(e,t,"read from private field"),s?s.call(e):t.get(e)),p=(e,t,s)=>t.has(e)?it("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),c=(e,t,s,i)=>(_(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),m=(e,t,s)=>(_(e,t,"access private method"),s);import{r as tt,j as Ft}from"./sessions-CS7UQMji.js";var dt=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},W=typeof window>"u"||"Deno"in globalThis;function rt(){}function Qt(e,t){return typeof e=="function"?e(t):e}function Et(e){return typeof e=="number"&&e>=0&&e!==1/0}function Pt(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Nt(e,t){return typeof e=="function"?e(t):e}function Rt(e,t){return typeof e=="function"?e(t):e}function Ht(e,t){const{type:s="all",exact:i,fetchStatus:n,predicate:o,queryKey:l,stale:a}=e;if(l){if(i){if(t.queryHash!==gt(l,t.options))return!1}else if(!et(t.queryKey,l))return!1}if(s!=="all"){const d=t.isActive();if(s==="active"&&!d||s==="inactive"&&d)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||n&&n!==t.state.fetchStatus||o&&!o(t))}function zt(e,t){const{exact:s,status:i,predicate:n,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(s){if(Y(t.options.mutationKey)!==Y(o))return!1}else if(!et(t.options.mutationKey,o))return!1}return!(i&&t.state.status!==i||n&&!n(t))}function gt(e,t){return((t==null?void 0:t.queryKeyHashFn)||Y)(e)}function Y(e){return JSON.stringify(e,(t,s)=>Z(s)?Object.keys(s).sort().reduce((i,n)=>(i[n]=s[n],i),{}):s)}function et(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!et(e[s],t[s])):!1}function ft(e,t){if(e===t)return e;const s=nt(e)&&nt(t);if(s||Z(e)&&Z(t)){const i=s?e:Object.keys(e),n=i.length,o=s?t:Object.keys(t),l=o.length,a=s?[]:{};let d=0;for(let C=0;C<l;C++){const y=s?C:o[C];(!s&&i.includes(y)||s)&&e[y]===void 0&&t[y]===void 0?(a[y]=void 0,d++):(a[y]=ft(e[y],t[y]),a[y]===e[y]&&e[y]!==void 0&&d++)}return n===l&&d===n?e:a}return t}function Bt(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function nt(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Z(e){if(!at(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!at(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function at(e){return Object.prototype.toString.call(e)==="[object Object]"}function xt(e){return new Promise(t=>{setTimeout(t,e)})}function jt(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?ft(e,t):t}function $t(e,t,s=0){const i=[...e,t];return s&&i.length>s?i.slice(1):i}function Vt(e,t,s=0){const i=[t,...e];return s&&i.length>s?i.slice(0,-1):i}var yt=Symbol();function Ot(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===yt?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var T,M,K,ut,qt=(ut=class extends dt{constructor(){super();p(this,T);p(this,M);p(this,K);c(this,K,t=>{if(!W&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){r(this,M)||this.setEventListener(r(this,K))}onUnsubscribe(){var t;this.hasListeners()||((t=r(this,M))==null||t.call(this),c(this,M,void 0))}setEventListener(t){var s;c(this,K,t),(s=r(this,M))==null||s.call(this),c(this,M,t(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(t){r(this,T)!==t&&(c(this,T,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(s=>{s(t)})}isFocused(){var t;return typeof r(this,T)=="boolean"?r(this,T):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},T=new WeakMap,M=new WeakMap,K=new WeakMap,ut),Dt=new qt,I,U,Q,ot,Mt=(ot=class extends dt{constructor(){super();p(this,I,!0);p(this,U);p(this,Q);c(this,Q,t=>{if(!W&&window.addEventListener){const s=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}}})}onSubscribe(){r(this,U)||this.setEventListener(r(this,Q))}onUnsubscribe(){var t;this.hasListeners()||((t=r(this,U))==null||t.call(this),c(this,U,void 0))}setEventListener(t){var s;c(this,Q,t),(s=r(this,U))==null||s.call(this),c(this,U,t(this.setOnline.bind(this)))}setOnline(t){r(this,I)!==t&&(c(this,I,t),this.listeners.forEach(i=>{i(t)}))}isOnline(){return r(this,I)}},I=new WeakMap,U=new WeakMap,Q=new WeakMap,ot),pt=new Mt;function Ut(){let e,t;const s=new Promise((n,o)=>{e=n,t=o});s.status="pending",s.catch(()=>{});function i(n){Object.assign(s,n),delete s.resolve,delete s.reject}return s.resolve=n=>{i({status:"fulfilled",value:n}),e(n)},s.reject=n=>{i({status:"rejected",reason:n}),t(n)},s}function Tt(e){return Math.min(1e3*2**e,3e4)}function vt(e){return(e??"online")==="online"?pt.isOnline():!0}var mt=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function X(e){return e instanceof mt}function bt(e){let t=!1,s=0,i=!1,n;const o=Ut(),l=h=>{var v;i||(f(new mt(h)),(v=e.abort)==null||v.call(e))},a=()=>{t=!0},d=()=>{t=!1},C=()=>Dt.isFocused()&&(e.networkMode==="always"||pt.isOnline())&&e.canRun(),y=()=>vt(e.networkMode)&&e.canRun(),u=h=>{var v;i||(i=!0,(v=e.onSuccess)==null||v.call(e,h),n==null||n(),o.resolve(h))},f=h=>{var v;i||(i=!0,(v=e.onError)==null||v.call(e,h),n==null||n(),o.reject(h))},R=()=>new Promise(h=>{var v;n=E=>{(i||C())&&h(E)},(v=e.onPause)==null||v.call(e)}).then(()=>{var h;n=void 0,i||(h=e.onContinue)==null||h.call(e)}),F=()=>{if(i)return;let h;const v=s===0?e.initialPromise:void 0;try{h=v??e.fn()}catch(E){h=Promise.reject(E)}Promise.resolve(h).then(u).catch(E=>{var z;if(i)return;const q=e.retry??(W?0:3),G=e.retryDelay??Tt,$=typeof G=="function"?G(s,E):G,V=q===!0||typeof q=="number"&&s<q||typeof q=="function"&&q(s,E);if(t||!V){f(E);return}s++,(z=e.onFail)==null||z.call(e,s,E),xt($).then(()=>C()?void 0:R()).then(()=>{t?f(E):F()})})};return{promise:o,cancel:l,continue:()=>(n==null||n(),o),cancelRetry:a,continueRetry:d,canStart:y,start:()=>(y()?F():R().then(F),o)}}function At(){let e=[],t=0,s=a=>{a()},i=a=>{a()},n=a=>setTimeout(a,0);const o=a=>{t?e.push(a):n(()=>{s(a)})},l=()=>{const a=e;e=[],a.length&&n(()=>{i(()=>{a.forEach(d=>{s(d)})})})};return{batch:a=>{let d;t++;try{d=a()}finally{t--,t||l()}return d},batchCalls:a=>(...d)=>{o(()=>{a(...d)})},schedule:o,setNotifyFunction:a=>{s=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{n=a}}}var wt=At(),A,ht,St=(ht=class{constructor(){p(this,A)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Et(this.gcTime)&&c(this,A,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(W?1/0:5*60*1e3))}clearGcTimeout(){r(this,A)&&(clearTimeout(r(this,A)),c(this,A,void 0))}},A=new WeakMap,ht),N,H,P,b,B,L,g,O,ct,Jt=(ct=class extends St{constructor(t){super();p(this,g);p(this,N);p(this,H);p(this,P);p(this,b);p(this,B);p(this,L);c(this,L,!1),c(this,B,t.defaultOptions),this.setOptions(t.options),this.observers=[],c(this,P,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,c(this,N,kt(this.options)),this.state=t.state??r(this,N),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=r(this,b))==null?void 0:t.promise}setOptions(t){this.options={...r(this,B),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&r(this,P).remove(this)}setData(t,s){const i=jt(this.state.data,t,this.options);return m(this,g,O).call(this,{data:i,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),i}setState(t,s){m(this,g,O).call(this,{type:"setState",state:t,setStateOptions:s})}cancel(t){var i,n;const s=(i=r(this,b))==null?void 0:i.promise;return(n=r(this,b))==null||n.cancel(t),s?s.then(rt).catch(rt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(r(this,N))}isActive(){return this.observers.some(t=>Rt(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===yt||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!Pt(this.state.dataUpdatedAt,t)}onFocus(){var s;const t=this.observers.find(i=>i.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,b))==null||s.continue()}onOnline(){var s;const t=this.observers.find(i=>i.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,b))==null||s.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),r(this,P).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(s=>s!==t),this.observers.length||(r(this,b)&&(r(this,L)?r(this,b).cancel({revert:!0}):r(this,b).cancelRetry()),this.scheduleGc()),r(this,P).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||m(this,g,O).call(this,{type:"invalidate"})}fetch(t,s){var d,C,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(r(this,b))return r(this,b).continueRetry(),r(this,b).promise}if(t&&this.setOptions(t),!this.options.queryFn){const u=this.observers.find(f=>f.options.queryFn);u&&this.setOptions(u.options)}const i=new AbortController,n=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(c(this,L,!0),i.signal)})},o=()=>{const u=Ot(this.options,s),f={queryKey:this.queryKey,meta:this.meta};return n(f),c(this,L,!1),this.options.persister?this.options.persister(u,f,this):u(f)},l={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};n(l),(d=this.options.behavior)==null||d.onFetch(l,this),c(this,H,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((C=l.fetchOptions)==null?void 0:C.meta))&&m(this,g,O).call(this,{type:"fetch",meta:(y=l.fetchOptions)==null?void 0:y.meta});const a=u=>{var f,R,F,h;X(u)&&u.silent||m(this,g,O).call(this,{type:"error",error:u}),X(u)||((R=(f=r(this,P).config).onError)==null||R.call(f,u,this),(h=(F=r(this,P).config).onSettled)==null||h.call(F,this.state.data,u,this)),this.scheduleGc()};return c(this,b,bt({initialPromise:s==null?void 0:s.initialPromise,fn:l.fetchFn,abort:i.abort.bind(i),onSuccess:u=>{var f,R,F,h;if(u===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(u)}catch(v){a(v);return}(R=(f=r(this,P).config).onSuccess)==null||R.call(f,u,this),(h=(F=r(this,P).config).onSettled)==null||h.call(F,u,this.state.error,this),this.scheduleGc()},onError:a,onFail:(u,f)=>{m(this,g,O).call(this,{type:"failed",failureCount:u,error:f})},onPause:()=>{m(this,g,O).call(this,{type:"pause"})},onContinue:()=>{m(this,g,O).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),r(this,b).start()}},N=new WeakMap,H=new WeakMap,P=new WeakMap,b=new WeakMap,B=new WeakMap,L=new WeakMap,g=new WeakSet,O=function(t){const s=i=>{switch(t.type){case"failed":return{...i,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Lt(i.data,this.options),fetchMeta:t.meta??null};case"success":return{...i,data:t.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return X(n)&&n.revert&&r(this,H)?{...r(this,H),fetchStatus:"idle"}:{...i,error:n,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...t.state}}};this.state=s(this.state),wt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),r(this,P).notify({query:this,type:"updated",action:t})})},ct);function Lt(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:vt(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function kt(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=t!==void 0,i=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var x,S,k,j,D,lt,Wt=(lt=class extends St{constructor(t){super();p(this,j);p(this,x);p(this,S);p(this,k);this.mutationId=t.mutationId,c(this,S,t.mutationCache),c(this,x,[]),this.state=t.state||Gt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){r(this,x).includes(t)||(r(this,x).push(t),this.clearGcTimeout(),r(this,S).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){c(this,x,r(this,x).filter(s=>s!==t)),this.scheduleGc(),r(this,S).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){r(this,x).length||(this.state.status==="pending"?this.scheduleGc():r(this,S).remove(this))}continue(){var t;return((t=r(this,k))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var n,o,l,a,d,C,y,u,f,R,F,h,v,E,q,G,$,V,z,st;c(this,k,bt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(w,J)=>{m(this,j,D).call(this,{type:"failed",failureCount:w,error:J})},onPause:()=>{m(this,j,D).call(this,{type:"pause"})},onContinue:()=>{m(this,j,D).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>r(this,S).canRun(this)}));const s=this.state.status==="pending",i=!r(this,k).canStart();try{if(!s){m(this,j,D).call(this,{type:"pending",variables:t,isPaused:i}),await((o=(n=r(this,S).config).onMutate)==null?void 0:o.call(n,t,this));const J=await((a=(l=this.options).onMutate)==null?void 0:a.call(l,t));J!==this.state.context&&m(this,j,D).call(this,{type:"pending",context:J,variables:t,isPaused:i})}const w=await r(this,k).start();return await((C=(d=r(this,S).config).onSuccess)==null?void 0:C.call(d,w,t,this.state.context,this)),await((u=(y=this.options).onSuccess)==null?void 0:u.call(y,w,t,this.state.context)),await((R=(f=r(this,S).config).onSettled)==null?void 0:R.call(f,w,null,this.state.variables,this.state.context,this)),await((h=(F=this.options).onSettled)==null?void 0:h.call(F,w,null,t,this.state.context)),m(this,j,D).call(this,{type:"success",data:w}),w}catch(w){try{throw await((E=(v=r(this,S).config).onError)==null?void 0:E.call(v,w,t,this.state.context,this)),await((G=(q=this.options).onError)==null?void 0:G.call(q,w,t,this.state.context)),await((V=($=r(this,S).config).onSettled)==null?void 0:V.call($,void 0,w,this.state.variables,this.state.context,this)),await((st=(z=this.options).onSettled)==null?void 0:st.call(z,void 0,w,t,this.state.context)),w}finally{m(this,j,D).call(this,{type:"error",error:w})}}finally{r(this,S).runNext(this)}}},x=new WeakMap,S=new WeakMap,k=new WeakMap,j=new WeakSet,D=function(t){const s=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),wt.batch(()=>{r(this,x).forEach(i=>{i.onMutationUpdate(t)}),r(this,S).notify({mutation:this,type:"updated",action:t})})},lt);function Gt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ct=tt.createContext(void 0),_t=e=>{const t=tt.useContext(Ct);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Xt=({client:e,children:t})=>(tt.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),Ft.jsx(Ct.Provider,{value:e,children:t}));export{Wt as M,Jt as Q,dt as S,zt as a,rt as b,Vt as c,$t as d,Ot as e,Dt as f,Qt as g,gt as h,Y as i,Xt as j,Ut as k,Rt as l,Ht as m,wt as n,pt as o,et as p,Bt as q,Nt as r,yt as s,W as t,Et as u,Pt as v,Lt as w,jt as x,Gt as y,_t as z};